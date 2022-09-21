let lastVal = 0;
let lastOp = (x, y) => {return y};
let wasSolve = true;

function calc(op, symbol) {
    lastVal = document.getElementById("result").value;
    lastOp = op;
    display('')
}

function eq() {
    curr = document.getElementById("result").value
    if (!wasSolve) {
        curr = lastVal
        lastVal = document.getElementById("result").value
    }
    display(lastOp(curr, lastVal))
    wasSolve = true;
}

function clr() {
    console.log(document.getElementById("result").value);
    display('');
    lastVal = 0
    lastOp = (x, y) => {return y};
}

function display(val) {
    console.log(val)
    if (val == '.') display('0.');
    else document.getElementById("result").value = val;
}

function concat(val) {
    if (wasSolve) {
        display(val);
        wasSolve = false;
    } else if (val == '.' && document.getElementById("result").value.includes('.')) return;
    else document.getElementById("result").value += val;
    
}

function keypresshandler(event) {
    var charCode = event.keyCode;
    return charCode < 58 && charCode > 41 && charCode != 44;
}

function clearhandler(event) {
    if (event.keyCode == 27) clr();
}

function pastewarning() {
    alert("Pasting into this text field is not accounted for and may break the page.");
}