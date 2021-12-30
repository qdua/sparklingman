let body, box, canvas, land, poster, random, snow
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
snow = document.createElement('div')
snow.setAttribute('id', 'snow')
canvas.append(snow)
box = 6
random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colors() {
    return getComputedStyle(document.documentElement).getPropertyValue('--clr' + random(1, 5) + '')
}
for (let i = 0; i < box; i++) {
    let mountain = document.createElement('span')
    mountain.style.borderRadius = random(1, 5) + "vmin"
    canvas.prepend(mountain)
}


function createSnow() {
    for (let j = 0; j < 20; j++) {
        let size = Math.random() / 2;
        let s = document.createElement("s");
        s.style.width = size + "vmin";
        s.style.height = size + "vmin";
        s.style.left = random(0, 200) + "%";
        s.classList.add("s");
        s.style.animationDuration = Math.random() * 3 + 10 + "s";
        s.style.opacity = Math.random();
        snow.prepend(s);

        setTimeout(() => {
            s.remove();
        }, 15000)
    }
}

function randomFull() {
    for (let d = 0; d < document.querySelectorAll('span').length; d++) {
        let span = document.querySelectorAll('span')[d]
        span.style.background = "linear-gradient(" + colors() + "," + colors() + ")"
    }
}

poster.onclick = randomFull
setInterval(createSnow, 1000)
    // setInterval(randomFull, 1000);
window.requestAnimationFrame(randomFull)
window.requestAnimationFrame(createSnow)