const again = document.querySelector("button");
const h1 = document.querySelector("h1");
const score = localStorage.getItem("score");
const round = localStorage.getItem("round");
h1.textContent = `Grattis! Du fick ${score} poäng av ${round} möjliga!`;

again.addEventListener("click", () => {
    location.href = "index.html";
})