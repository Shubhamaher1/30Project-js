const button = document.querySelector('.contener button');
const jokeText = document.querySelector('.contener p');
document.addEventListener('DOMContentLoaded',getjoke);
button.addEventListener('click',getjoke);
function getjoke(){
    fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept':"application/json"
        }
    }).then(data=>data.json())
    .then(obj=> jokeText.innerHTML=obj.joke)
}
// async function getjoke(){
//     const jokedata= await fetch('https://icanhazdadjoke.com/',{
//       headers:{
//           'Accept':'application/json'
//       }  
//     });
//     const jokeObj= await jokedata.json();
//     console.log(jokeObj.joke);
//     jokeText.innerHTML=jokeObj.joke;
// }
