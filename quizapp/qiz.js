const contaner= document.getElementById("contaner")
const quizcontaner = document.getElementById("quiz-contaner")
const questionElement = document.getElementById("question")
const optionscontainer = document.getElementById("options-container")
const button =  document.getElementById(";submitBit")
const scoreElement = document. getElementById("score")
const feedbackE = document. getElementById("feedback")

let currentQuestionIndex= 0;
let score=0;
 
const quizQuestions=[
    {
        question:"What is the capatil of india?",
        Options:["Telangana","Hyderabad","Delhi","Mombai"],
        correctAnswer:"Delhi"
    },
    {
        question:"What is the capatil of Telangana?",
        Options:["Telangana","Hyderabad","Delhi","Mombai"],
        correctAnswer:"Hyderabad"
    },
    {
        question:"What is the capatil of France?",
        Options:["Berlin","Hyderabad","Paris","Rome"],
        correctAnswer:"Paris"
    }


]

function load(){
    const currentQuestions = quizQuestions[currentQuestionIndex];
    questionElement.textContent= currentQuestions.question;


    optionscontainer.innerHTML="";

currentQuestions.Options.forEach((Option,index)=>{
    const OptionButton=document.createElement("button");
    OptionButton.textContent=Option;
    OptionButton.onclick=function(){
selectAnswer(Option, currentQuestions.correctAnswer)
    }
optionscontainer.appendChild(OptionButton)



})
}

function selectAnswer(selectedOption,correctAnswer){
if(selectedOption === correctAnswer){
   feedbackE.textContent =  "correct";
   score++;
}else{
    feedbackE.textContent = "Incorrect.The correct answer is:"+
    correctAnswer;
}
currentQuestionIndex++;
if ( currentQuestionIndex < quizQuestions.length){
    load();
}else{
    endquiz();
}
}
function endquiz(){
    quizcontaner.innerHTML = "<h2>quiz completed</h2>";
    scoreElement.textContent = "Final score:"+score+"out of"
    +quizQuestions.length;
}

function submitAns(){
    const selectedOption = document.querySelector('input[name="option:checked"');

    if (selectedOption){
        selectAnswer(selectedOption.value)
    }
}

load();