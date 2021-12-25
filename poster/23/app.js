let body, box, canvas, colors, poster, random, randomScale
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
    let s = document.createElement('s')
    canvas.prepend(s)
}

// poster.onclick = randomFull;
// setInterval(randomFull, 1000);
// window.requestAnimationFrame(randomFull);