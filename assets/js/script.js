const questions = [
    {
    question: "Which planet is known as the 'Red Planet'?",
    answers: [
        {text: "Earth", correct: false},
        {text: "Mars", correct: true},
        {text: "Jupiter", correct: false},
        {text: "Saturn", correct: false},
    ]
},
{
    question: "Which of these countries does not have a coastline?",
    answers: [
        {text: "Brazil", correct: false},
        {text: "Mali", correct: true},
        {text: "Egypt", correct: false},
        {text: "Argentina", correct: false},
    ]
},
{
    question: "Which country is the origin of sushi?",
    answers: [
        {text: "Japan", correct: true},
        {text: "China", correct: false},
        {text: "Thailand", correct: false},
        {text: "South Korea", correct: false},
    ]
},
{
    question: "In which movie would you find the character "Jack Dawson"?",
    answers: [
        {text: "The Great Gatsby", correct: false},
        {text: "Avatar", correct: false},
        {text: "Inception", correct: false}
        {text: "Titanic", correct: true},
    ]
},
{
    question: "Who was the first woman to fly solo across the Atlantic Ocean?,
    answers: [
        {text: "Amelia Earhart", correct: true},
        {text: "Jacqueline Cochran", correct: false},
        {text: "Bessie Coleman", correct: false}
        {text: " Sally Ride", correct: false},
    ]
}
];

const questionElement= document.getElementById("question");
const answerButton= document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion() {

    };

    function showQuestion() {
        resetState();
        let currentQuestion= questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButton.appendChild(button);
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });
    }


    function resetState() {
        nextButton.style.display = "none";
        while (answerButton.firstChild) {
            answerButton.removeChild(answerButton.firstChild);
        }
    }
    function selectAnswer(e) {
        const selectedButton = e.target;
        const correct = selectedButton.data.set.correct === "true";
        if (correct) {
            selectedButton.classList.add("correct");
            score++;
        } else {
            selectedButton.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";

    }
    function showScore() {
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.lenght}!`;
     nextButton.innerHTML = "Play Again";
     nextButton.style.display = "block";
    }

    function handleNextButton() {
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.lenght) {
            showQuestion();
        } else {
            showScore();

        }
    }

    nextButton.addEventListener("click", () =>{
        if(currentQuestionIndex < questions. lenght) {
            handleNextButton();
        } else {

        }
    })
    startGame();
