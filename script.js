let num1, num2, correctAnswer;
let score = 0;

function generateQuestion() {
  num1 = Math.floor(Math.random() * 10);
  num2 = Math.floor(Math.random() * 10);
  correctAnswer = num1 + num2; // Change to * or - for variety
  document.getElementById("question").textContent = `What is ${num1} + ${num2}?`;
  document.getElementById("answer").value = "";
  document.getElementById("feedback").textContent = "";
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value, 10);
  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "✅ Correct!";
    score++;
  } else {
    document.getElementById("feedback").textContent = `❌ Incorrect. The correct answer was ${correctAnswer}`;
  }
  document.getElementById("score").textContent = score;
  setTimeout(generateQuestion, 1500); // Generate next after delay
}

// Start with a question
generateQuestion();

// Theme toggle logic
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

