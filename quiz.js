// const question = []

// const questionElement = document.getElementById("questions")
// const answerBtn = document.getElementById("answerBtn")
// const nextBtn = document.getElementById("nextBtn")

// let currentQstIndex = 0
// let score = 0

// const startQuiz = () => {
//     currentQstIndex = 0
//     score = 0
//     nextBtn.innerHTML = "Next"
//     showQuestion()
// }

// const showQuestion = () => {
//     let currentQst = question[currentQstIndex]
//     let questionNo = currentQstIndex + 1
//     questionElement.innerHTML = questionNo + "." + currentQst.question

//     currentQst.answers.forEach(answer => {
//         const button = document.createElement("button")
//         button.classList.add("btn")
//         answerBtn.appendChild(button)
//     })
// }


// startQuiz()


const quizQuestions = [
    {
        id: 1,
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        answer: "Mars"
    },
    {
        id: 3,
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Wordsworth", "William Shakespeare", "John Milton", "Jane Austen"],
        answer: "William Shakespeare"
    },
    {
        id: 4,
        question: "What is the chemical symbol for water?",
        options: ["O2", "CO2", "H2O", "NaCl"],
        answer: "H2O"
    },
    {
        id: 5,
        question: "Which programming language is used for web styling?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: "CSS"
    },
    {
        id: 6,
        question: "In which year did World War II end?",
        options: ["1918", "1939", "1945", "1965"],
        answer: "1945"
    },
    {
        id: 7,
        question: "What is the largest mammal in the world?",
        options: ["African Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
        answer: "Blue Whale"
    },
    {
        id: 8,
        question: "Which gas do humans need to breathe?",
        options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
        answer: "Oxygen"
    },
    {
        id: 9,
        question: "What does HTTP stand for?",
        options: [
            "HyperText Transfer Protocol",
            "Hyperlink Text Transport Program",
            "High Transfer Text Protocol",
            "Hyper Transfer Tool Process"
        ],
        answer: "HyperText Transfer Protocol"
    },
    {
        id: 10,
        question: "Which country invented pizza?",
        options: ["USA", "France", "Italy", "Germany"],
        answer: "Italy"
    },
    {
        id: 11,
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2"
    },
    {
        id: 12,
        question: "Which element has the chemical symbol 'Na'?",
        options: ["Nitrogen", "Sodium", "Nickel", "Neon"],
        answer: "Sodium"
    },
    {
        id: 13,
        question: "How many continents are there on Earth?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        id: 14,
        question: "What is the fastest land animal?",
        options: ["Cheetah", "Horse", "Lion", "Tiger"],
        answer: "Cheetah"
    },
    {
        id: 15,
        question: "Which company created the iPhone?",
        options: ["Samsung", "Google", "Apple", "Nokia"],
        answer: "Apple"
    },
    {
        id: 16,
        question: "In which year did man first land on the moon?",
        options: ["1965", "1969", "1972", "1980"],
        answer: "1969"
    },
    {
        id: 17,
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        answer: "8"
    },
    {
        id: 18,
        question: "Which ocean is the largest?",
        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
        answer: "Pacific"
    },
    {
        id: 19,
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        id: 20,
        question: "Which country hosted the 2016 Summer Olympics?",
        options: ["China", "Brazil", "UK", "Russia"],
        answer: "Brazil"
    },
    {
        id: 21,
        question: "What is the capital city of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Osaka"],
        answer: "Tokyo"
    },
    {
        id: 22,
        question: "What does DNA stand for?",
        options: [
            "Deoxyribonucleic Acid",
            "Dynamic Nuclear Atom",
            "Digital Network Access",
            "Data Numerical Analysis"
        ],
        answer: "Deoxyribonucleic Acid"
    },
    {
        id: 23,
        question: "What is 15 × 5?",
        options: ["70", "75", "80", "85"],
        answer: "75"
    },
    {
        id: 24,
        question: "Who discovered gravity?",
        options: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Nikola Tesla"],
        answer: "Isaac Newton"
    },
    {
        id: 25,
        question: "Which animal is known as the King of the Jungle?",
        options: ["Tiger", "Elephant", "Lion", "Gorilla"],
        answer: "Lion"
    },
    {
        id: 26,
        question: "Which gas is most abundant in Earth’s atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Nitrogen"
    },
    {
        id: 27,
        question: "What is the longest river in the world?",
        options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
        answer: "Nile"
    },
    {
        id: 28,
        question: "Which organ pumps blood through the human body?",
        options: ["Lungs", "Brain", "Heart", "Liver"],
        answer: "Heart"
    },
    {
        id: 29,
        question: "Which planet is closest to the Sun?",
        options: ["Mercury", "Venus", "Earth", "Mars"],
        answer: "Mercury"
    },
    {
        id: 30,
        question: "Which continent is the Sahara Desert located on?",
        options: ["Asia", "Africa", "Australia", "South America"],
        answer: "Africa"
    },
    {
        id: 31,
        question: "What is the freezing point of water?",
        options: ["0°C", "32°C", "100°C", "212°C"],
        answer: "0°C"
    },
    {
        id: 32,
        question: "Who invented the light bulb?",
        options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Michael Faraday"],
        answer: "Thomas Edison"
    },
    {
        id: 33,
        question: "Which is the smallest country in the world?",
        options: ["Monaco", "San Marino", "Vatican City", "Luxembourg"],
        answer: "Vatican City"
    },
    {
        id: 34,
        question: "What is the national sport of Japan?",
        options: ["Karate", "Judo", "Sumo Wrestling", "Baseball"],
        answer: "Sumo Wrestling"
    },
    {
        id: 35,
        question: "Which blood type is known as the universal donor?",
        options: ["A", "B", "AB", "O"],
        answer: "O"
    },
    {
        id: 36,
        question: "What is the capital city of Canada?",
        options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        answer: "Ottawa"
    },
    {
        id: 37,
        question: "Which company created Windows OS?",
        options: ["Apple", "IBM", "Microsoft", "Google"],
        answer: "Microsoft"
    },
    {
        id: 38,
        question: "What is the currency of the United Kingdom?",
        options: ["Dollar", "Euro", "Pound Sterling", "Yen"],
        answer: "Pound Sterling"
    },
    {
        id: 39,
        question: "Which is the largest planet in our solar system?",
        options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
        answer: "Jupiter"
    },
    {
        id: 40,
        question: "What is the boiling point of water at sea level?",
        options: ["50°C", "100°C", "150°C", "200°C"],
        answer: "100°C"
    },
    {
        id: 41,
        question: "What is the national flower of Japan?",
        options: ["Lotus", "Cherry Blossom", "Rose", "Tulip"],
        answer: "Cherry Blossom"
    },
    {
        id: 42,
        question: "Who is known as the Father of Computers?",
        options: ["Alan Turing", "Charles Babbage", "John von Neumann", "Bill Gates"],
        answer: "Charles Babbage"
    },
    {
        id: 43,
        question: "Which country gifted the Statue of Liberty to the USA?",
        options: ["France", "Spain", "Germany", "UK"],
        answer: "France"
    },
    {
        id: 44,
        question: "Which is the hardest natural substance?",
        options: ["Gold", "Iron", "Diamond", "Quartz"],
        answer: "Diamond"
    },
    {
        id: 45,
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        answer: "Canberra"
    },
    {
        id: 46,
        question: "Which ocean lies between Africa and Australia?",
        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
        answer: "Indian"
    },
    {
        id: 47,
        question: "How many players are there in a soccer team?",
        options: ["9", "10", "11", "12"],
        answer: "11"
    },
    {
        id: 48,
        question: "Which metal is liquid at room temperature?",
        options: ["Mercury", "Iron", "Aluminum", "Zinc"],
        answer: "Mercury"
    },
    {
        id: 49,
        question: "What is the capital of Nigeria?",
        options: ["Lagos", "Kano", "Abuja", "Port Harcourt"],
        answer: "Abuja"
    },
    {
        id: 50,
        question: "Who painted 'Starry Night'?",
        options: ["Vincent van Gogh", "Claude Monet", "Salvador Dalí", "Pablo Picasso"],
        answer: "Vincent van Gogh"
    }
];



let currentQuestionIndex = 0;
let score = 0;
let totalTime = 20 * 60; // 20 minutes in seconds
let timer;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("time");

// document.getElementById("quiz-container").insertBefore(timerEl, questionEl);

// Load a question
function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionEl.innerHTML = `<h4>( ${currentQuestion.id}). ${currentQuestion.question}</h4>
    `
    // "(" + currentQuestion.id + "). " + currentQuestion.question;
    optionsEl.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("option");
        btn.onclick = () => checkAnswer(option);
        optionsEl.appendChild(btn);
    });
}

// Check answer
function checkAnswer(selectedOption) {
    const correctAnswer = quizQuestions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }

    // Disable buttons & highlight
    document.querySelectorAll(".option").forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctAnswer) {
            btn.style.background = "lightgreen";
        } else if (btn.textContent === selectedOption) {
            btn.style.background = "salmon";
        }
    });
}

// Next button
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
    console.log(quizQuestions.length)
});

// previous button
prevBtn.addEventListener("click", () => {
    currentQuestionIndex--;
    if (currentQuestionIndex > 1) {
        loadQuestion();
    }
    // else {
    //     endQuiz();
    // }
});
// Start global timer
function startTimer() {
    timer = setInterval(() => {
        let minutes = Math.floor(totalTime / 60);
        let seconds = totalTime % 60;
        // timerEl.classList.add("time")
        timerEl.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        totalTime--;

        if (totalTime < 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

// End quiz
function endQuiz() {
    clearInterval(timer);
    questionEl.innerHTML = `<div>
    <p>Quiz Completed!</p>    <img src="crown-removebg-preview.png" alt="">

  </div>
    `;
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
    timerEl.style.display = "none";
    scoreEl.textContent = `Your Score: ${score} / ${quizQuestions.length}`;
}

// Add Restart Button
const restartBtn = document.createElement("button");
restartBtn.textContent = "Start Again";
restartBtn.style.display = "none";
document.getElementById("quiz-container").appendChild(restartBtn);

restartBtn.addEventListener("click", restartQuiz);

// Restart function
function restartQuiz() {
    // Reset variables
    currentQuestionIndex = 0;
    score = 0;
    totalTime = 20 * 60; // reset to 20 minutes

    // Reset UI
    restartBtn.style.display = "none";
    nextBtn.style.display = "inline-block";
    timerEl.style.display = "block";
    scoreEl.textContent = "";

    // Restart quiz
    loadQuestion();
    startTimer();
}

// Start quiz
loadQuestion();
startTimer();

