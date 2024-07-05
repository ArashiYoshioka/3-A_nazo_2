function checkAnswer() {
    const answerInput = document.getElementById('answerInput').value;
    const result = document.getElementById('result');

    if (answerInput === "フラスコ") {
        result.textContent = "出席番号7番";
    } else if (answerInput === "ふらすこ") {
        result.textContent = "主席番号7番";
    } else {
        result.textContent = "残念...";
    }
}
