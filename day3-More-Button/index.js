const rmbotton = document.querySelector(".read-btn");
const text = document.querySelector(".para");
const dot= document.getElementById("dot");
rmbotton.addEventListener("click",(e)=>{
    text.classList.toggle("show-more");
    if(rmbotton.innerHTML=="Read More"){
        rmbotton.innerHTML="Read Less";
        dot.className="notdot";
    }else{
        rmbotton.innerHTML="Read More";
        dot.className="dot";
    }
})