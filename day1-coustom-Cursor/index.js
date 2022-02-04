const cursor= document.getElementById("cursor")
window.addEventListener("mousemove",(e)=>{
    cursor.style.left=e.pageX +"px";
    cursor.style.top= e.pageY +"px";
    cursor.setAttribute("data-from-top",(cursor.offsetTop-scrollY))

});
window.addEventListener("scroll",()=>{
    const fromtop=parseInt(cursor.getAttribute('data-from-top'));

    cursor.style.top= scrollY+fromtop+"px";
});
window.addEventListener("click",()=>{
    if(cursor.classList.contains('click')){
        cursor.classList.remove("click");
        void cursor.offsetWidth;
        cursor.classList.add("click");
    }else{

        cursor.classList.add("click");
    }
    

    
});