const defaultQuizDB = [
    {
        question: "Q1: If we take away the prefix from 'disagree', the root word is agree.",
        a: "True",
        b: "False",
        c: "Maybe",
        d: "Wrong",
        ans: "ans1"
    },
    {
        question: "Q2: Which of the following is a suffix?",
        a: "pre",
        b: "un",
        c: "-ed",
        d: "in",
        ans: "ans3"
    },
    {
        question: "Q3: Which suffix can you add to the word 'peace'?",
        a: "ing",
        b: "ful",
        c: "est",
        d: "ly",
        ans: "ans2"
    },
    {
        question: "Q4: What is the root word of 'unsuccessful'?",
        a: "un",
        b: "success",
        c: "ful",
        d: "none",
        ans: "ans2"
    },
    {
        question: "Q5: The farmers were working with ______ hands.",
        a: "his",
        b: "her",
        c: "their",
        d: "your",
        ans: "ans3"
    }
];

let quizDB = [...defaultQuizDB];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
const progress = document.querySelector('#progress');
const fileInput = document.getElementById('quizFileInput');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const q = quizDB[questionCount];
    question.innerText = q.question;
    option1.innerText = q.a;
    option2.innerText = q.b;
    option3.innerText = q.c;
    option4.innerText = q.d;

    // Update progress bar
    const progressPercent = (questionCount / quizDB.length) * 100;
    progress.style.width = `${progressPercent}%`;
};

const getCheckedAnswer = () => {
    let answer;
    answers.forEach(el => {
        if (el.checked) answer = el.id;
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach(el => el.checked = false);
};

submit.addEventListener('click', () => {
    if (quizDB.length === 0) {
        alert("No questions available!");
        return;
    }

    const checkedAnswer = getCheckedAnswer();

    if (!checkedAnswer) {
        alert("Please select an answer!");
        return;
    }

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    }

    questionCount++;
    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        progress.style.width = `100%`;
        showScore.innerHTML = `
            <h3>🎉 You scored ${score}/${quizDB.length}!</h3>
            <p>Well done! 🎊</p>
            <button onclick="location.reload()">Play Again</button>
        `;
        showScore.style.display = "block";
        submit.style.display = "none";
    }
});

// Load default quiz on page load
loadQuestion();

// Handle file upload to replace quizDB dynamically
fileInput.addEventListener('change', function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const data = JSON.parse(e.target.result);

            if (!Array.isArray(data) || data.length === 0) {
                alert("Invalid quiz file: should be a non-empty array");
                return;
            }
            for (const q of data) {
                if (!q.question || !q.a || !q.b || !q.c || !q.d || !q.ans) {
                    alert("Invalid quiz file: each question must have question, a,b,c,d, and ans");
                    return;
                }
                if (!["ans1","ans2","ans3","ans4"].includes(q.ans)) {
                    alert("Invalid quiz file: 'ans' must be ans1, ans2, ans3, or ans4");
                    return;
                }
            }

            quizDB = data;
            questionCount = 0;
            score = 0;
            showScore.style.display = "none";
            submit.style.display = "inline-block";
            deselectAll();
            loadQuestion();
        } catch (err) {
            alert("Error parsing JSON file: " + err.message);
        }
    };
    reader.readAsText(file);
});
