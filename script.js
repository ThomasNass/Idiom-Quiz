
// for (let i = 0; i < object.length; i++) {
//     console.log(`${object[i].uttryck} = ${object[i].svar}`);
// }



const getData = async () => {
    const response = await fetch("orden.json");
    const data = await response.json();
    return data;
};
const func = async () => {
    const ExpressionsAndAnswers = await getData();

    let r = Math.floor(Math.random() * ExpressionsAndAnswers.length);
    let r1 = Math.floor(Math.random() * ExpressionsAndAnswers.length);
    let r2 = Math.floor(Math.random() * ExpressionsAndAnswers.length);
    let r3 = Math.floor(Math.random() * ExpressionsAndAnswers.length);

    let expression = ExpressionsAndAnswers[r].uttryck;
    let answer = ExpressionsAndAnswers[r].svar;
    let wrong1 = ExpressionsAndAnswers[r1].svar;
    let wrong2 = ExpressionsAndAnswers[r2].svar;
    let wrong3 = ExpressionsAndAnswers[r3].svar;
    console.log(`${expression} = ${answer} 
    ${wrong1}
    ${wrong2}
    ${wrong3}`);

}

let idiom = null;
function idiomFunc() {
    let r = Math.floor(Math.random() * ExpressionsAndAnswers.length);
    let { expression, rightAnswer } = ExpressionsAndAnswers[r].uttryck;
    log(expression, rightAnswer);
}

func();