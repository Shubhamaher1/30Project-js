const steps=Array.from( document.querySelectorAll("form .step"));
const nextbutton= document.querySelectorAll("form .next-bt");
const prvbtn = document.querySelectorAll("form .prv-btn");
const form = document.querySelector("form");
const submit = document.querySelector("form .submit");
const data=[];
nextbutton.forEach(butto=>{
    butto.addEventListener("click",(e)=>{
        changeStep("next");
        //  console.log('button clicked')
    })
})
prvbtn.forEach(butto=>{
    butto.addEventListener("click",(e)=>{
        changeStep("prv");
        console.log("prv clicked");
    })
})
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    changeStep("submit");
    
})
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const data=[];
//     form.querySelectorAll("input").forEach(input=>{
//        const (name,value)=input;
//         data.push(name,value);
       

//     })
//     console.log(data);
//     from.reset();

// })
function changeStep(btn){
    let index=0;
    const active=document.querySelector("form .step.active");
    index=steps.indexOf(active);
    // console.log(index);
    
        steps[index].classList.remove("active");
        if(btn==="next"){
            index++;
        }
        else if(btn==="prv"){
            index--;
        }
        if(btn==="submit"){
            ( form.querySelectorAll("input")).forEach(Element=>{
                data.push(Element.value);
            });
            index=0;
            form.reset();
            console.log(data);
        }
        steps[index].classList.add("active");

    
}