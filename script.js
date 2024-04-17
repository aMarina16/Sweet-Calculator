
function clearDisplay() {
    document.querySelector('.display').value = ''
}

function num_on_display(value) {
    document.querySelector('.display').value += value
}

function to_calculate() {
    let displayvalue = document.querySelector('.display').value
    let result = eval(displayvalue)
    document.querySelector('.display').value = result
}