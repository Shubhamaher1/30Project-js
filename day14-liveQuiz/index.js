const baseURL ="https://opentdb.com/api.php?amount=1";
const container = document.querySelector(".container");
const form = document.querySelector("#quiz_from");

const que1=document.querySelector(".que");
const alloption = document.querySelector(".all_options");
const button = document.querySelector(".buttons");
const scoreBoard= document.querySelector(".score_num");
const ScoreE1= document.querySelector(".ansred_nmu");

// 
let qestion,answer;
let options=[];
let score=0;
let ansQue=0;
window.addEventListener("DOMContentLoaded",quizApp);

async function quizApp(){
    
    const data=await fetchQuiz();
    // console.log(data);
    qestion=data[0].question;
    console.log(qestion);
    options=[];
    answer=data[0].correct_answer;
    data[0].incorrect_answers.map(op=>{
        options.push(op);
    })
    options.splice(Math.floor(Math.random()*options.length+1),0,answer);
    // console.log(options);
    generateTemplate(qestion,options);
    button.querySelector("button[type=\"submit\"]").style.display="block";

}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(e.target.Qiuz.value){
        checkQuiz(e.target.Qiuz.value);
        // console.log("clicked");
        e.target.querySelector("button").style.display="none";
        generateButton();
    }
    else{
        return ;
    }
})

async function fetchQuiz(){
    const response = await fetch(baseURL);
    const data= await response.json();
    // console.log(data);
    return data.results;
}
function generateTemplate(qestion,options){
    alloption.innerHTML="";
    que1.innerHTML=qestion;
    options.map((option, index)=>{
        const itm=document.createElement("div");
        itm.classList.add("option");
        itm.innerHTML=`
        <input type="radio" id="option${index+1}" value="${option}" name="Qiuz">
        <label for="option${index+1}">${option}</label>

        `
        alloption.append(itm);
    })
}
function checkQuiz(selectedAns){
    console.log("checked ans");
    ansQue++;
    if(selectedAns===answer){
        score++;
    }
    updateScoreBoard();
    form.Qiuz.forEach(element => {
        if(element.value===answer){
            element.parentElement.classList.add("correct");
        }
    });
}
function updateScoreBoard(){
    scoreBoard.innerHTML=score;
    ScoreE1.innerHTML=ansQue;
    console.log("update");
}
function generateButton(){
    const fineshed = document.createElement("button");
    fineshed.innerText="Fineshed";
    fineshed.setAttribute("type","button");
    fineshed.classList.add("finisedbt");
    button.appendChild(fineshed);

    const nextbt = document.createElement("button");
    nextbt.innerText="Next";
    nextbt.setAttribute("type","button");
    nextbt.classList.add("nextbtn");
    button.appendChild(nextbt);
    fineshed.addEventListener("click",(e)=>{
        fineshedQuiz();
    });
    nextbt.addEventListener("click",(e)=>{
        NewQue();
    })
    
}
function NewQue(){
    const nextbt1=document.querySelector(".nextbtn");
    const fineshed1 = document.querySelector(".finisedbt");
    button.removeChild(nextbt1);
    button.removeChild(fineshed1);
    quizApp();
   
   
}
function fineshedQuiz(){
    const nextbt1=document.querySelector(".nextbtn");
    const fineshed1 = document.querySelector(".finisedbt");
    button.removeChild(nextbt1);
    button.removeChild(fineshed1);

    button.querySelector("button[type=\"submit\"]").style.display="block";
    const overlay = document.createElement("div");
    overlay.classList.add("result");
    overlay.innerHTML=`
    <div class ="final-result">${score}/${ansQue}</div>
    <button>Play Again</button>
    `
    container.appendChild(overlay);
    document.querySelector(".result button").addEventListener("click",()=>{
        location.reload();
    })

}
function addPlaceHolder(){
    const addPlaceHolde=document.createElement("div");
    addPlaceHolde.classList.add("placeholder");
    container.appendChild(addPlaceHolde);
}