let workingNumber = 0;
function add(number) {
    workingNumber += number;
    document.getElementById("number").innerHTML = workingNumber;
}

function sub(number) {
    workingNumber -= number;
    document.getElementById("number").innerHTML = workingNumber;
}

function double(number) {
    document.getElementById("number").innerHTML = workingNumber *= 2;
}

function reset() {
    document.getElementById("number").innerHTML = workingNumber *= 0;
}