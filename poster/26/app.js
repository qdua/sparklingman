let body, box, canvas, poster, random
body = document.body
poster = document.createElement('div')
poster.setAttribute('id', 'poster')
body.prepend(poster)
canvas = document.createElement('div')
canvas.setAttribute('id', 'canvas')
poster.prepend(canvas)

box = 200
random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colors() {
    return getComputedStyle(document.documentElement).getPropertyValue('--clr' + random(1, 5) + '')
}
for (let i = 0; i < box; i++) {
    let span = document.createElement('span')
    span.style.left = random(-5, 100) + "%"
    canvas.prepend(span)
}


function randomFull() {
    for (let d = 0; d < document.querySelectorAll('span').length; d++) {
        let span = document.querySelectorAll('span')[d]
        span.style.background = "linear-gradient(" + colors() + ", transparent)"
        span.style.height = random(8, 96) + "%"
        span.style.opacity = '0.' + random(0, 9)
        span.style.transform = "translate(1." + random(0, 9) + "vmin, 0)"

    }
}


poster.onclick = randomFull;
// setInterval(randomFull, 1000);
window.requestAnimationFrame(randomFull);