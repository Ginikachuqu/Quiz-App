new kursor({
  type: 1,
  removeDefaultCursor: true,
  color: "#393939",
});

const quizData = [
  {
    question:
      "What year did the Titanic sink in the Atlantic Ocean on 15 April, on its maiden voyage from southampton?",
    a: "1856",
    b: "1914",
    c: "1912",
    d: "2020",
    answer: "c",
  },
  {
    question:
      "What is the name of the biggest technology company in south korea?",
    a: "Samsung",
    b: "Hauwei",
    c: "GLO",
    d: "Nokia",
    answer: "a",
  },
  {
    question: "What is the capital of portugal?",
    a: "Lusaka",
    b: "Lisbon",
    c: "Accra",
    d: "Vietnam",
    answer: "b",
  },
  {
    question: "What is the chemical symbol for silver?",
    a: "Mg",
    b: "Si",
    c: "Al",
    d: "Ag",
    answer: "d",
  },
  {
    question: "What is the doll barbie's full name?",
    a: "Barbara Millicent Roberts",
    b: "Melinda Trump",
    c: "Kim Kardashian",
    d: "Fontella Bass",
    answer: "a",
  },
  {
    question: "What was Adele's first record called?",
    a: "21",
    b: "Chasing Pavements",
    c: "Hello",
    d: "Hometown Glory",
    answer: "d",
  },
  {
    question: "Where is the Great Sphinx situated?",
    a: "Tel Aviv",
    b: "Egypt",
    c: "Babylon",
    d: "Isreal",
    answer: "b",
  },
  {
    question: "Where is the colosseum situated?",
    a: "Italy",
    b: "Bangladesh",
    c: "India",
    d: "Zimbabwe",
    answer: "a",
  },
  {
    question: "Where is Angkor Wat situated?",
    a: "Zambia",
    b: "Cambodia",
    c: "Congo",
    d: "Hungary",
    answer: "b",
  },
  {
    question: "Where is the Taj Mahal located?",
    a: "India",
    b: "Saudi Arabia",
    c: "United Kingdom",
    d: "Jerusalem",
    answer: "a",
  },
  {
    question: "When was George Orwell's Animal Farm written?",
    a: "1958",
    b: "1940",
    c: "1944",
    d: "1923",
    answer: "c",
  },
  {
    question: "Who authoured the book Half of a Yellow Sun?",
    a: "John Maxwell",
    b: "Chinua Achebe",
    c: "Ken Saro Wiwa",
    d: "Chimamanda Adiche",
    answer: "d",
  },
  {
    question: "Who is the 45th president of the USA",
    a: "Donald Trump",
    b: "James Madison",
    c: "Alexander Hamilton",
    d: "Bill Clinton",
    answer: "a",
  },
  {
    question: "Who gave the White House its current name and when?",
    a: "James Madison / 1888",
    b: "Theodore Roosevelt / 1901",
    c: "Theodore Roosevelt / 1988",
    d: "Alexander Hamilton / 1774",
    answer: "b",
  },
];

let question = document.getElementById("question");
let currentQuestion = 0;
const submitButton = document.getElementById("submit");
const optionA = document.getElementById("a");
const optionB = document.getElementById("b");
const optionC = document.getElementById("c");
const optionD = document.getElementById("d");
const allOptions = document.querySelectorAll(".answer-container ul li");
const backdrop = document.querySelector(".back-drop");
const scoreCard = document.querySelector(".score-card");
let playerScore = document.getElementById("score");
let totalScore = document.getElementById("total-score");
const retryBtn = document.getElementById("try-again");
let score = 0;

loadQuiz();

function loadQuiz() {
  question.innerText = quizData[currentQuestion].question;
  optionA.innerText = quizData[currentQuestion].a;
  optionB.innerText = quizData[currentQuestion].b;
  optionC.innerText = quizData[currentQuestion].c;
  optionD.innerText = quizData[currentQuestion].d;
  playerScore.innerText = score;
  totalScore.innerText = quizData.length;
}

allOptions.forEach((option) => {
  option.addEventListener("click", checkOption);
});

function checkOption() {
  if (this.id === quizData[currentQuestion].answer) {
    this.classList.add("correct");
    score++;
  } else {
    this.classList.add("wrong");
  }
  disabledOptions();
}

function disabledOptions() {
  allOptions.forEach((option) => {
    option.classList.add("disabled");
    if (option.id == quizData[currentQuestion].answer) {
      option.classList.add("correct");
    }
  });
}

function enableOptions() {
  allOptions.forEach((option) => {
    option.classList.remove("disabled", "correct", "wrong");
  });
}

function answerValidation() {
  if (!allOptions[0].classList.contains("disabled")) {
    alert("You have not made any selection");
  } else {
    currentQuestion++;
    enableOptions();
  }
}

function reloadPage() {
  window.location.reload();
}

function updateImage() {
  let scoreImg = document.createElement("img");
  if (score <= 10) {
    scoreImg.setAttribute("src", "img/" + "blue" + ".svg");
  } else {
    scoreImg.setAttribute("src", "img/" + "celebration" + ".svg");
  }
  document.querySelector(".img-container").innerHTML = "";
  document.querySelector(".img-container").appendChild(scoreImg);
}

submitButton.addEventListener("click", (e) => {
  answerValidation();
  if (currentQuestion < quizData.length) {
    loadQuiz();
  } else {
    updateImage();
    backdrop.classList.add("display");
    scoreCard.classList.add("show");
  }
  console.log(score);
});

retryBtn.addEventListener("click", reloadPage);
