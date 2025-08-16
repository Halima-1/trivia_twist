const question = []

const questionElement = document.getElementById("questions")
const answerBtn = document.getElementById("answerBtn")
const nextBtn = document.getElementById("nextBtn")

let currentQstIndex = 0
let score = 0

const startQuiz = () => {
    currentQstIndex = 0
    score = 0
    nextBtn.innerHTML = "Next"
    showQuestion()
}

const showQuestion = () => {
    let currentQst = question[currentQstIndex]
    let questionNo = currentQstIndex + 1
    questionElement.innerHTML = questionNo + "." + currentQst.question

    currentQst.answers.forEach(answer => {
        const button = document.createElement("button")
        button.classList.add("btn")
        answerBtn.appendChild(button)
    })
}


startQuiz()