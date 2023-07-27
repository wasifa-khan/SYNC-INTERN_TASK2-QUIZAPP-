const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        a: "round(7.25)",
        b: "rnd(7.25)",
        c: "Math.round(7.25)",
        d: "Math.rnd(7.25)",
        correct: "c",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What does the typeof operator return when used on an array?",
        a: "array",
        b: "object",
        c: "Array",
        d: "[]",
        correct: "b",
    },
    {
        question:"How to write an IF statement in JavaScript?",
        a: "if i = 5",
        b: "if i == 5 then",
        c: "if(i == 5)",
        d: "if i = 5 then",
        correct: "c",
    },
    {
        question:"Choose the correct HTML element for the largest heading:",
        a: "<h1>",
        b: "<heading>",
        c: "<h6>",
        d: "<head>",
        correct: "a",
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
        a: "font",
        b: "style",
        c: "styles",
        d: "class",
        correct: "b",
    },
    {
        question:"Which CSS property is used to add spacing between HTML elements?",
        a: "margin",
        b: "padding",
        c: "spacing",
        d: "gap",
        correct: "a",
    },
    {
        question: "Which of the following methods is used to add an element to the end of an array in JavaScript?",
        a: "push()",
        b: "append()",
        c: "addToEnd()",
        d: "insert()",
        correct: "a",
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})