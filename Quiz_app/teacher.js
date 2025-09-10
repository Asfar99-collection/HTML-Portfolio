const form = document.getElementById("questionForm");
const preview = document.getElementById("quizPreview");
const downloadBtn = document.getElementById("downloadJson");

let quizData = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const question = document.getElementById("question").value.trim();
  const optionA = document.getElementById("optionA").value.trim();
  const optionB = document.getElementById("optionB").value.trim();
  const optionC = document.getElementById("optionC").value.trim();
  const optionD = document.getElementById("optionD").value.trim();
  const correct = document.getElementById("correctAnswer").value;

  const newQuestion = {
    question: question,
    a: optionA,
    b: optionB,
    c: optionC,
    d: optionD,
    ans: correct
  };

  quizData.push(newQuestion);
  preview.textContent = JSON.stringify(quizData, null, 2);

  form.reset();
  document.getElementById("correctAnswer").value = "ans1";
});

// Download JSON file
downloadBtn.addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(quizData, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "quiz.json";
  link.click();
});
