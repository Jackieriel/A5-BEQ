// Qestions
var quiz = [
    {
        question: "UNIVAC is",
        a: "Universal Automatic Computer",
        b: "Universal Array Computer",
        c: "Unique Automatic Computer",
        d: "Unvalued Automatic Computer",
        answer: "a"
    },
    {
        question: "The basic operations performed by a computer are",
        a: "Arithmetic operation",
        b: "Logical operation",
        c: "Storage and relative",
        d: "All the above",
        answer: "d"
    },
    {
        question: "The two major types of computer chips are",
        a: "External memory chip",
        b: "Primary memory chip",
        c: "Microprocessor chip",
        d: "Both b and c",
        answer: "d"
    },
    {
        question: "Microprocessors as switching devices are for which generation computers",
        a: "First Generation",
        b: "Second Generation",
        c: "Third Generation",
        d: "Fourth Generation",
        answer: "d"
    },
    {
        question: "The smallest unit of data is called",
        a: "Bit",
        b: "Byte",
        c: "Binary",
        d: "a nibble",
        answer: "a"
    },
    {
        question: "WWW was developed by",
        a: "Tim Berners Lee",
        b: "Charles Babbage",
        c: "Bill Gate",
        d: "Walter Joe",
        answer: "a"
    },
    {
        question: "What allows components to communicate over a PAN",
        a: "Bluetooth",
        b: "IEEE",
        c: "Smart Card",
        d: "LAN",
        answer: "b"
    },
    {
        question: "What is the meaning of FORTRAN",
        a: "Formular Transmission",
        b: "Formular Translator",
        c: "Formular Operation",
        d: "Formulation Numbers",
        answer: "b"
    },
    {
        question: "A unique address assigned to a machine over a network is called ",
        a: "IP Address",
        b: "Transfer Protocol",
        c: "URL",
        d: "HTTP",
        answer: "a"
    },
    {
        question: "The process by which a computer starts and executes the operating system is called  ",
        a: "Warm booting",
        b: "Booting",
        c: "Downloading",
        d: "Shutdown",
        answer: "b"
    },
    {
        question: "What are temporary storage inside the CPU",
        a: "Hard disk",
        b: "Register",
        c: "Banana Drive",
        d: "Magnetic Disks",
        answer: "b"
    },
    {
        question: "Another name for 802.11b is ",
        a: "Zigbee",
        b: "Bluetooth",
        c: "WI-FI",
        d: "Network",
        answer: "c"
    },
    {
        question: "What is an input device used to enter motion data into the computer called ",
        a: "Mouse",
        b: "LightPen",
        c: "Joystick",
        d: "Keyboard",
        answer: "c"
    },
    {
        question: "Which of the following is not an application software ",
        a: "Computer game",
        b: "BIOS",
        c: "Anti-virus",
        d: "Photoshop",
        answer: "b"
    },
    {
        question: "The blue print for modern computing devices was laid by",
        a: "Alan Turing",
        b: "Howard Aiken",
        c: "Jacquard Loom",
        d: "Charles Babbage",
        answer: "d"
    }

];

var currentIndex = 0;
var totalQuestions = quiz.length;
var currentQuestion = currentIndex + 1;
var selectedOption;
var correctAnswer = 0;
var wrongAnswer = 0;
var score = 0;
var totalScore = totalQuestions * 5;
var testVariable;

var a = document.getElementById("optOne");
var b = document.getElementById("optTwo");
var c = document.getElementById("optThree");
var d = document.getElementById("optFour");
var questions = document.getElementById("questions");

var question_count_board = document.getElementById("question_count_board");
var timeInterval = document.getElementById("timeInterval");
var quiz_summary = document.getElementById("quiz_summary");
var score_summary = document.getElementById("score_summary");
var info = document.getElementById("info");

window.onload = function () {
    question_count_board.innerHTML = "1 of " + totalQuestions + " remaining";
    setTimer();
    loadQuestion();
};

function setTimer() {
    timeInterval.innerHTML = "Time Remaining: 5m 60s";
}

function loadQuestion() {
    if (a && b && c && d && questions && currentIndex >= 0) {
        a.innerHTML = quiz[currentIndex].a;
        b.innerHTML = quiz[currentIndex].b;
        c.innerHTML = quiz[currentIndex].c;
        d.innerHTML = quiz[currentIndex].d;
        questions.innerHTML = quiz[currentIndex].question;
    } else {
        console.log("Error!!!");
    }
}

function surrenderQuiz() {
    endQuiz();
    resetQuiz();
}

function incrementCurrentIndex() {
    currentIndex++;
}

function setQuestion_count_board() {
    currentQuestion++;
    question_count_board.innerText = currentQuestion + " of " + totalQuestions + " remaining";
}

function activeOptions(opt) {
    selectedOption = opt;
}

function markCorrect() {
    correctAnswer++;
}

function markWrong() {
    wrongAnswer++;
}

function uncheckOptions() {
    document.getElementById("option_a").checked = false;
    document.getElementById("option_b").checked = false;
    document.getElementById("option_c").checked = false;
    document.getElementById("option_d").checked = false;
}

function setSummary() {
    quiz_summary.innerHTML = "You answered " + correctAnswer + " of " + totalQuestions + " questions correctly";
    score_summary.innerHTML = "You scored " + score + " / " + totalScore;
    info.innerHTML = "N|B <span>Each question carries 5mrks</span>";
}

function incrementScore() {
    score = correctAnswer * 5;
}

function checkAnswer() {
    if (selectedOption && quiz[currentIndex]) {
        if ((quiz[currentIndex].answer) && (quiz[currentIndex].answer === selectedOption)) {
            markCorrect();
            incrementScore();
            alertAns("CORRECT ANSWER","")
            //alert("correct answer");
            //console.log("correct answer");
        } else {
            markWrong();
            document.getElementById("imgnone").style.display = "none";
            alertAns("Wrong!!!", "The correct answer is " + quiz[currentIndex].answer)
            //alert("Wrong!!! The correct answer is " + quiz[currentIndex].answer);
            //console.log("Wrong!!! The correct answer is " + quiz[currentIndex].answer);
        }

        testVariable = true;
        selectedOption = "";

    } else {
        testVariable = false;
        alert("Please select an option to continue!!!");
        console.log("Please select an option to continue!!!");
    }
    uncheckOptions();
}

function endQuiz() {
    modal.style.display = "none";
    container.style.display = "none";
    resultPage.style.display = "grid";
    setSummary();
}

function resetQuiz() {
    currentIndex = 0;
    correctAnswer = 0;
    wrongAnswer = 0;
    currentQuestion = 0;
}

function nextQuestion() {
    checkAnswer();
    console.log(testVariable);
    if(testVariable === false) {
        loadQuestion();
    } else {
        if (currentQuestion !== totalQuestions) {
            incrementCurrentIndex();
            loadQuestion();
            setQuestion_count_board();
        } else {
            console.log("Ended");
            endQuiz();
            resetQuiz();
        }
    }
}

function alertAns(message,ans){

    var f = document.getElementById("alertAns");
    var y = document.getElementById("cans").innerHTML = `<h1>${message}</h1><h2>${ans}</h2>`;
    f.style.display = "block";
    setTimeout(() => {
        f.style.display = "none";
    }, 900);
    
}