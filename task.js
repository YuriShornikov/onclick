const cookie = document.getElementById('cookie')
const clicker__counter = document.getElementById('clicker__counter')
const clicker__speed = document.getElementById('clicker__speed')


let timer_start = Date.now()

let calculateClickSpeed = () => {
    const timer_out = Date.now()
    const result = timer_out - timer_start
    clicker__speed.textContent = 1000 / result
    timer_start = timer_out
}


cookie.onclick = () => {
    
    calculateClickSpeed()
    clicker__counter.textContent = Number(clicker__counter.textContent) + 1

    if (clicker__counter.textContent % 2 === 0) {
        cookie.width -= 20
        cookie.height -= 20

    } else {
        cookie.width += 20
        cookie.height += 20

    }

}



    


