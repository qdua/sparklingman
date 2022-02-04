let body, canvas, sea, sun, poster
body = document.body
poster = document.createElement('div')
poster.setAttribute('id', 'poster')
body.prepend(poster)
canvas = document.createElement('div')
canvas.setAttribute('id', 'canvas')
poster.prepend(canvas)

sea = document.createElement('div')
sea.setAttribute('id', 'sea')
canvas.prepend(sea)
sun = document.createElement('sun')
sun.setAttribute('id', 'sun')
canvas.append(sun)

window.setInterval(function() {
    let span = document.createElement('span')
    sea.prepend(span)
    window.setInterval(() => {
        span.remove()
    }, 32360)
}, 2000)



window.setInterval(function() {
    let span = document.createElement('span')
    sun.prepend(span)
    window.setInterval(() => {
        span.remove()
    }, 16180)
}, 1000)