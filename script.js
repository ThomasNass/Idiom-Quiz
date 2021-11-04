const expressionParagraph = document.querySelector("#expression");
const answerButtons = document.querySelectorAll(".answers")
let score = 0;

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
    const right = ExpressionsAndAnswers[r].svar;
    const wrong1 = ExpressionsAndAnswers[r1].svar;
    const wrong2 = ExpressionsAndAnswers[r2].svar;
    const wrong3 = ExpressionsAndAnswers[r3].svar;

    answers.push(right, wrong1, wrong2, wrong3);
    console.log(answers);

    shuffle(answers);

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] == right) {

            answerButtons[i].addEventListener("click", () => {
                answerButtons[i].classList.add("right");
                score++;
                for (let i = 0; i < numberOfPlayers.length; i++) {
                    numberOfPlayers[i].disabled = true;
                }
            })
        }
        else {

            answerButtons[i].addEventListener("click", () => {
                answerButtons[i].classList.add("wrong");
                for (let i = 0; i < answerButtons.length; i++) {
                    answerButtons[i].disabled = true;
                }
            })
        }
        answerButtons[i].textContent = answers[i];
    }

    console.log(answers);
}




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

