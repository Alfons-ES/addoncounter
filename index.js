let resetEl = document.getElementById("reset-el")
let countEl = document.getElementById("count-el")
let count = 0
let countMain = 0

function addon() {
    countMain += count 
    countEl.textContent = countMain
}

function increment() {
    count += 1
    document.getElementById("addon-btn").textContent = "Add " + count
}

function reduce() {
    count -= 1
    document.getElementById("addon-btn").textContent = "Add " + count
}

function reset() {
    let countStr = countEl.textContent + ".  "
    resetEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    countMain = 0
    document.getElementById("addon-btn").textContent = "Add"
}

window.addon = addon
window.increment = increment
window.reduce = reduce
window.reset = reset
