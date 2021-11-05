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
    for (let i = 0; i < answers.length; i++) {
        const answerButton = document.createElement("button");
        answerButton.classList.add("buttons");


        if (answers[i] == right) {
            answerButton.addEventListener("click", () => {
                allButtons = document.querySelectorAll(".buttons");
                answerButton.classList.add("right");
                score++;
                displayScore.textContent = `Poäng:${score}, Runda ${round}/${end}`;
                for (let j = 0; j < answers.length; j++) {
                    allButtons[j].disabled = true;
                    buttonNext.disabled = false;
                }
            })
        }
        else {

            answerButton.addEventListener("click", () => {
                allButtons = document.querySelectorAll(".buttons");
                answerButton.classList.add("wrong");
                for (let j = 0; j < answers.length; j++) {
                    allButtons[j].disabled = true;
                    buttonNext.disabled = false;

                }
            })
        }
        buttonsDiv.appendChild(answerButton);
        answerButton.textContent = answers[i];

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

