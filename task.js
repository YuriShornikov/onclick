const cookie = document.getElementById('cookie')
const clicker__counter = document.getElementById('clicker__counter')
const clicker__speed = document.getElementById('clicker__speed')
const timer = [];

cookie.onclick = () => {
    

    clicker__counter.textContent = Number(clicker__counter.textContent) + 1

    if (clicker__counter.textContent % 2 === 0) {
        cookie.width -= 20
        cookie.height -= 20

    } else {
        cookie.width += 20
        cookie.height += 20

    }

}
const timer_ms = new Date().getTime()
timer = timer.push(timer_ms);
if (clicker__counter.textContent >= 2) {
    const speed = (timer[-1] - timer[0]) / clicker__counter.textContent;
    clicker__speed.textContent = speed;
}


    


