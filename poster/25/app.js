let body, box, canvas, land, poster, random
body = document.body
poster = document.createElement('div')
poster.setAttribute('id', 'poster')
body.prepend(poster)
canvas = document.createElement('div')
canvas.setAttribute('id', 'canvas')
poster.prepend(canvas)
land = document.createElement('div')
land.setAttribute('id', 'land')
canvas.append(land)
star = document.createElement('div')
star.setAttribute('id', 'star')
canvas.append(star)
box = 6
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
for (let j = 0; j < Math.round(innerHeight / Math.PI); j++) {
    let size = Math.random() / 2;
    let x = Math.round(Math.random() * 100);
    let y = Math.round(Math.random() * 100);
    let s = document.createElement("s");
    s.style.width = size / 2 + "vmin";
    s.style.height = size * 1.5 + "vmin";
    s.style.left = x + "%";
    s.style.top = y + "%";
    star.prepend(s);
}

function randomFull() {
    for (let d = 0; d < document.querySelectorAll('span').length; d++) {
        let span = document.querySelectorAll('span')[d]
        span.style.background = "linear-gradient(" + colors() + "," + colors() + ")"
    }
}


poster.onclick = randomFull;
// setInterval(randomFull, 1000);
window.requestAnimationFrame(randomFull);