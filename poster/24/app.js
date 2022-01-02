let body, box, canvas, poster, random
body = document.body
poster = document.createElement('div')
poster.setAttribute('id', 'poster')
body.prepend(poster)
canvas = document.createElement('div')
canvas.setAttribute('id', 'canvas')
poster.prepend(canvas)

box = 24
random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colors() {
    return getComputedStyle(document.documentElement).getPropertyValue('--clr' + random(1, 5) + '')
}
for (let i = 0; i < box; i++) {
    let span = document.createElement('span')
    canvas.prepend(span)
}


function randomFull() {
    for (let d = 0; d < document.querySelectorAll('span').length; d++) {
        let span = document.querySelectorAll('span')[d]
        span.style.background = colors()
        span.style.height = random(8, 24) + "vmin"
        span.style.width = random(8, 24) + "vmin"
        span.style.left = random(-5, 100) + "%"
        span.style.top = random(-5, 100) + "%"

    }
}


poster.onclick = randomFull;
// setInterval(randomFull, 1000);
window.requestAnimationFrame(randomFull);