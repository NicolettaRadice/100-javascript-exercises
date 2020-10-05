const button = document.getElementById('button')
const body = document.getElementsByTagName('body')
const colors = ['red', 'orange', 'yellow', 'green', 'aqua', 'blue']

document.body.style.background = 'white'
button.addEventListener('click', backgroundChange)

function backgroundChange() {
    const colorIndex = parseInt(Math.random()*colors.length)
    document.body.style.backgroundColor = colors[colorIndex]
}
