const texts = document.querySelector(".texts");
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognization = new window.SpeechRecognition();
recognization.interimResults = true;
//true for live chapch thing if it is false then it will wait at the end your speech
let p = document.createElement("p");

recognization.addEventListener("result", (e) => {
  // console.log(e);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");
  // console.log(text);
  p.innerText = text;
  texts.append(p);
  if (e.results[0].isFinal) {
    if (text.includes("Hello") || text.includes("Hey")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "hii";
      texts.appendChild(p);
    }
    if (
      text.includes("What is your name?") ||
      text.includes("What's your name?") ||
      text.includes("what's your name?")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Shubham and your?";
      texts.appendChild(p);
    }
    if (text.includes("Open my GitHub.")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening..";
      texts.appendChild(p);
      window.open("https://github.com/Shubhamaher1/30Project");
    }
    p = document.createElement("p");
  }
});
recognization.addEventListener("end", () => {
  recognization.start();
});
recognization.start();
