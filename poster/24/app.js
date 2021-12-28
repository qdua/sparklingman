let body, box, canvas, poster, random
body = document.body
poster = document.createElement('div')
poster.setAttribute('id', 'poster')
body.prepend(poster)
canvas = document.createElement('div')
canvas.setAttribute('id', 'canvas')
poster.prepend(canvas)
box = 6

random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colors() {
    return getComputedStyle(document.documentElement).getPropertyValue('--clr' + random(1, 5) + '')
}

for (let i = 0; i < box; i++) {
    let s = document.createElement('s')
    canvas.prepend(s)
}

function randomFull() {
    for (let i = 0; i < box; i++) {
        let s = document.querySelectorAll('s')[i]
        s.style.backgroundColor = colors()
    }
}


poster.onclick = randomFull;
// setInterval(randomFull, 1000);
window.requestAnimationFrame(randomFull);