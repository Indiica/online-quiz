const questions = [
    {
        question: "Which planet is known as the 'Red Planet'?",
    answers: [
        {text: "Earth", correct: false},
        {text: "Jupiter", correct: false},
        {text: "Saturn", correct: false},
        {text: "Mars", correct: true},
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
        question: "What is the capital of Portugal?",
        answers: [
            {text: "Vienna", correct: true},
            {text: "Madrid", correct: false},
            {text: "Lisbon", correct: true},
            {text: "Belgrade", correct: false},

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
    nextButton.innerHTML = "Next Question";
    showQuestion();
}
    function showQuestion() {
        resetState();
        let currentQuestion= questions[currentQuestionIndex];
        questionElement.innerText = currentQuestion.question;
        
        currentQuestion.answers.forEach(answer => {

            const button = document.forEach("button");
            button.innerText = answer.text;
            button.classList.add("btn");
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click",selectAnswer);
            answerButton.appendChild(button)
        });
    }
    
    function resetState() {
            nextButton.style.display ="none";
            while (answerButton.firstChild) {
                answerButton.removeChild(answerButton.firstChild);
            }
        }

        function selectAnswer(e) {
            const selectedBtn = e.target;
            const correct = selectedBtn.dataset.correct === "true";

            if(correct) {
                selectedBtn.classList.add("correct");
                score++;

            } else {
                selectedBtn.classList.add("wrong");

            }
            Array.from(answerButton.children).forEach(button => {
                if (button.dataset.correct === "true") {
                    button.classList.add("correct");
                 }
                 button.disabled = true;
            });
        nextButton.style.display = "block";
        }

        function showResult() {
            resetState();
            questionElement.innerHTML = `You scored  ${score} out of ${questions.length}`; 
            nextButton.innerHTML = "Play Again";
            nextButton.style.display = "block";
        }

        function handleNextButton() {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                showResult();
            }
        }

        nextButton.addEventListener("click",() => {
            if (currentQuestionIndex < questions.length) {
                handleNextButton();
            }
        } )
        startGame();

  


