function addNumbers() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let sum = Number(a) + Number(b);
    document.getElementById("result").innerText = "Result: " + sum;
}

function subNumbers() {
    let a = document.getElementById("num3").value;
    let b = document.getElementById("num4").value;
    let sub = Number(a) - Number(b);
    document.getElementById("result1").innerText = "Result: " + sub;
}

function mulNumbers() {
    let a = document.getElementById("num5").value;
    let b = document.getElementById("num6").value;
    let mul = Number(a) * Number(b);
    document.getElementById("result2").innerText = "Result: " + mul;
}

function divNumbers() {
    let a = document.getElementById("num7").value;
    let b = document.getElementById("num8").value;
    let div = Number(a) / Number(b);
    document.getElementById("result3").innerText = "Result: " + div;
}