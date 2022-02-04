let body, poster, canvas
body = document.body
poster = document.createElement('div')
poster.setAttribute('id', 'poster')
body.prepend(poster)
canvas = document.createElement('div')
canvas.setAttribute('id', 'canvas')
poster.prepend(canvas)

function box() {
    for (let i = 0; i < 40; i++) {
        let span = document.createElement('span')
        canvas.append(span)
    }
}
box()

function mr() {
    return Math.random() * 100
}

function randomBox() {
    for (let j = 0; j < 40; j++) {
        let s = document.querySelectorAll('span')[j]
        s.style.borderRadius = mr() + '%' + mr() + '%' + mr() + '%' + mr() + '%'
    }

}

function randomFull() {
    randomBox()
}
poster.onclick = randomFull;
setInterval(randomFull, 2000);
window.requestAnimationFrame(randomFull);