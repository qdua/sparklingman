let body, box, canvas, poster, random
body = document.body
poster = document.createElement('div')
poster.setAttribute('id', 'poster')
body.prepend(poster)
canvas = document.createElement('div')
canvas.setAttribute('id', 'canvas')
poster.prepend(canvas)
box = 40

random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colors() {
    return getComputedStyle(document.documentElement).getPropertyValue('--clr' + random(1, 5) + '')
}

for (let i = 0; i < box; i++) {
    let span = document.createElement('span')
    let size = [i] * 2.5 + "vmin"
    span.style.width += size
    span.style.height += size
    canvas.prepend(span)

    if (i % 2 == 1) {
        for (let j = 0; j < i; j++) {
            let s = document.createElement('s')
            span.prepend(s)
            if (j % 2 == 1) {
                s.style.opacity = '0'
            }
        }
    }

}



function randomFull() {
    for (let d = 0; d < document.querySelectorAll('s').length; d++) {
        let s = document.querySelectorAll('s')[d]
        s.style.backgroundColor = colors()
    }
}

// console.log(document.querySelectorAll('s').length);


poster.onclick = randomFull;
// setInterval(randomFull, 1000);
window.requestAnimationFrame(randomFull);