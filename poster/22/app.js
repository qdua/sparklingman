let body, box, canvas, colors, poster, random, randomScale
body = document.body
poster = document.createElement('div')
poster.setAttribute('id', 'poster')
body.prepend(poster)
canvas = document.createElement('div')
canvas.setAttribute('id', 'canvas')
poster.prepend(canvas)
box = 16

random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
colors = [{
        color: getComputedStyle(document.documentElement).getPropertyValue('--clr1')
    },
    {
        color: getComputedStyle(document.documentElement).getPropertyValue('--clr2')
    },
    {
        color: getComputedStyle(document.documentElement).getPropertyValue('--clr3')
    },
    {
        color: getComputedStyle(document.documentElement).getPropertyValue('--clr4')
    },
    {
        color: getComputedStyle(document.documentElement).getPropertyValue('--clr5')
    }
]

function colorRandom() {
    return colors[Math.floor(Math.random() * colors.length)].color;
}

for (let i = 0; i < box; i++) {
    let span = document.createElement('span')
    canvas.prepend(span)
}

randomScale = (min, max) => {
    return Math.random() * (max - min) + 1;
}

function late() {
    for (let j = 0; j < box; j++) {
        let span = document.querySelectorAll("span")[j];
        span.style.borderRadius = random(10, 100) + "%" + random(10, 100) + "%" + random(10, 100) + "%" + random(10, 100) + "% /" + random(10, 100) + "%" + random(10, 100) + "%" + random(10, 100) + "%" + random(10, 100) + "%";
        span.style.transform = "scale(" + random(1, 2) + ") translate(" + Math.random() * 25 + "vmin," + Math.random() * 40 + "vmin) rotate(" + random(0, 45) + "deg)"
        span.style.boxShadow = random(3, 8) + "vmin " + random(3, 8) + "vmin " + random(5, 25) + "vmin " + colorRandom()
        span.style.filter = "blur(" + random(0, 24) + "px)"
    }
}

function randomFull() {
    late();
}
poster.onclick = randomFull;
// setInterval(randomFull, 1000);
window.requestAnimationFrame(randomFull);