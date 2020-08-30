var timeLeft = 120;
var displayTime = "#display-time";
var displayQuestion = "#questions";
var questionIndex = 0;
var score = 0;
var questions = [
    
    {"name":"1","properties":[{"question":"What does DOM stand for?","choiceA":"Document Order Module","choiceB":"Document Object Model","choiceC":"Documentation Orientation Music","correct":"B"}]},
    {"name":"2","properties":[{"question":"What does Viewport do?","choiceA":"Document Order Module","choiceB":"Document Object Model","choiceC":"Documentation Orientation Music","correct":"C"}]}
    
]

var counter = 0;

function setIndex() {
    counter++;
    questions.forEach(showQuestion);
}

function displayQuiz(question) {
    console.log(question);
    document.getElementById("title").setAttribute("class", "hide");
    var output = document.getElementById("display-question");
    var ele = document.createElement("div");
    var frag = document.createDocumentFragment();
    frag.appendChild(ele);
    ele.setAttribute("class", "col client-item");

    ele.innerHTML = "<ul>"
        + "<li>" + JSON.parse(question.properties.question) + "</li>"
        + "</ul>"
        + "</div>"
    output.appendChild(frag);
}

function showQuestion(question) {
    console.log(counter);
    console.log(question.name);
    if (counter == question.name) {
        displayQuiz(question);
    }
    
}

function countDown() {
    timeLeft--;
    displayTime.text(`Seconds remaining: ` + timeLeft);
}