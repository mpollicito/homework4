var timeLeft= 300;
var displayTime= $("#display-time");
var displayQuestion= $("#questions");
var questionIndex= 0;
var questions= [
    {
        question:"What color is the sky?",
        choices:["blue", "green", "purple", "who cares"],
        correct:"blue"
    },
    {
        question:"What color is the white house?",
        choices:["blue", "green", "white", "who cares"],
        correct:"white"
    },
    {
        question:"What color is the meaning of life?",
        choices:["blue", "green", "purple", "pizza"],
        correct:"pizza"
    },
    {
        question:"What is ?",
        choices:["one", "two", "three", "four"],
        correct:"four"
    }
]

$("#start-quiz").on("click", function() {
    $("#start-quiz").hide()
    $("#title").hide()
    $("#subtitle").hide()
    time = setInterval(countDown, 1000)
    showQuestion()
})

// $("#") need to add function for choices and their buttons

function countDown() {
    timeLeft --
    displayTime.text("Seconds Remaining " +timeLeft)
}

function showQuestion() {
    console.log(questions[questionIndex].question)
}