const quizData =[
    {
question: "Towarzystwo Flat Earth Society powstało w: ",
a: "1896",
b: "1916",
c: "1936",
d: "1956",
correct: 'd',
},
{
question: "Dowodem na płaską ziemie jest:",
a: "Z ziemi nie da sie spaść, chyba ze przykrawędzi.",
b: "Logo na fladze ONZ",
c: "Ruch słońca po niebie",
d: "Woda nie płynąie pod górę",
correct: 'b',
},
{
    question: "Ile Słónce ma średnicy ",
    a: "696342 km",
    b: "3476 km",
    c: "52 km",
    d: "666 m",
    correct: 'c',
    },
{
    question: "Ziemia jest w kształcie?",
    a: "Naleśnika",
    b: "Kiełbasy",
    c: "Kwadratu",
    d: "Nie wiadomo, nie da sie sprawdzić",
    correct: 'd',
    },
    {
        question: "Kto rządzi światem",
        a: "Króliki",
        b: "Wiewiórki",
        c: "Jaszczury",
        d: "Barany",
        correct: 'c',
        },

];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Odpowiedziałeś na ${score}/${quizData.length} pytań.</h2>
                
                <button onclick="location.reload()">Popraw</button>
            `;
        }
    }
});