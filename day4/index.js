
const input = document.getElementById("input");
let time=parseInt(input.value);

const inner = document.getElementById("h1");
// time=5;
time=20;




const start = document.getElementById("btn");
start.addEventListener("click", function() {
    setInterval(function() {
        console.log(time);
        if (time <0) {
            inner.innerHTML = `Time Out`;
            clearInterval(this.function());

        }
        else if (time < 10) {
            inner.innerHTML = `00:0${time}`;

        } else if (time < 100 && time > 9) {
            inner.innerHTML = `00:${time}`;
        } else if (time >= 100) {
            inner.innerHTML = `${time}`;
        }
        time--;
    }
       
   , 1000);
})
