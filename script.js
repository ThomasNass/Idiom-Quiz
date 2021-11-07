const expressionParagraph = document.querySelector("#expression");
const buttonsDiv = document.querySelector("#buttonsDiv");
const displayScore = document.querySelector("#score");
const buttonNext = document.querySelector("#next");
buttonNext.disabled = true;
let score = 0;
let round = 0;
let end = 20;

const getData = async () => {
    const response = await fetch("orden.json");
    const data = await response.json();
    return data;
};
const func = async () => {
    const ExpressionsAndAnswers = await getData();
    const r = Math.floor(Math.random() * ExpressionsAndAnswers.length);
    const r1 = Math.floor(Math.random() * ExpressionsAndAnswers.length);
    const r2 = Math.floor(Math.random() * ExpressionsAndAnswers.length);
    const r3 = Math.floor(Math.random() * ExpressionsAndAnswers.length);


    let answers = [];
    expressionParagraph.textContent = ` ${ExpressionsAndAnswers[r].uttryck}`;
    let right = ExpressionsAndAnswers[r].svar;
    let wrong1 = ExpressionsAndAnswers[r1].svar;
    let wrong2 = ExpressionsAndAnswers[r2].svar;
    let wrong3 = ExpressionsAndAnswers[r3].svar;

    answers.push(right, wrong1, wrong2, wrong3);
    shuffle(answers);
    round++;
    const rightColor = document.querySelector(".right");
    const wrongColor = document.querySelector(".wrong");
    for (let i = 0; i < answers.length; i++) {
        const answerButton = document.createElement("button");
        answerButton.classList.add("buttons");

        if (answers[i] == right) {
            answerButton.classList.add("right");
            answerButton.addEventListener("click", () => {
                allButtons = document.querySelectorAll(".buttons");
                score++;
                for (let j = 0; j < answers.length; j++) {
                    allButtons[j].disabled = true;
                    buttonNext.disabled = false;

                }
            })
        }
        else {


            answerButton.addEventListener("click", () => {
                answerButton.classList.add("wrong");
                allButtons = document.querySelectorAll(".buttons");
                for (let j = 0; j < answers.length; j++) {
                    allButtons[j].disabled = true;
                    buttonNext.disabled = false;

                }
            })
        }
        buttonsDiv.appendChild(answerButton);
        displayScore.textContent = `Poäng:${score}, Runda ${round}/${end}`;
        answerButton.textContent = answers[i];
        if (round == end) {
            location.href = "end.html";
        };
    }

}


buttonNext.addEventListener("click", () => {
    while (buttonsDiv.firstChild) {
        buttonsDiv.firstChild.remove();
    }
    buttonNext.disabled = true;
    func();
})

func();
const shuffle = (answers) => {
    let i = 0, j = 0, temp = null;

    for (i = answers.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = answers[i];
        answers[i] = answers[j];
        answers[j] = temp;

    }
}

