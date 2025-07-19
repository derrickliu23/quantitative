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

function toggleDark() {
  const body = document.body;
  const button = document.querySelector("button");

  // Toggle the 'dark' class
  body.classList.toggle("dark");

  // Optionally change the button icon/text
  if (body.classList.contains("dark")) {
    button.textContent = "☀️ Toggle Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    button.textContent = "🌙 Toggle Dark Mode";
    localStorage.setItem("theme", "light");
  }
}

document.getElementById("answer").addEventListener("input", function () {
  const val = this.value.trim();

  // Ignore empty or incomplete inputs
  if (val === "" || val === "-") {
    document.getElementById("feedback").textContent = "";
    return;
  }

  const userAnswer = parseInt(val, 10);
  if (isNaN(userAnswer)) return;

  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "✅ Correct!";
    score++;
    document.getElementById("score").textContent = score;
    setTimeout(generateQuestion, 50);
  }
});

// Start with a question
generateQuestion();

