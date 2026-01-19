function calculateResult() {
    let totalMarks=
    Number(document.getElementById("marks-obtained").value) +
    Number(document.getElementById("marks-obtained1").value) +
    Number(document.getElementById("marks-obtained2").value) +
    Number(document.getElementById("marks-obtained3").value) +
    Number(document.getElementById("marks-obtained4").value) +
    Number(document.getElementById("marks-obtained5").value);

    let totalText = document.getElementById("totalScore");
    let resultText = document.getElementById("result");
    totalText.innerText = "Total Score: " + totalMarks + " /600";
    
    if (totalMarks >= 400) {
        resultText.innerText = "Result: PASS";
    resultText.style.color = "green";
    } else {
        resultText.innerText = "Result: Fail";
        resultText.style.color = "red";
    }
}