const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");
const hourEl = document.querySelector(".hour");
const showdate = document.getElementById("inputDate");

setInterval(() => {
  const date = new Date();
  const secDeg = (date.getSeconds() / 60) * 360 - 90;
  const minDeg = (date.getMinutes() / 60) * 360 - 90;
  const hourDeg = (date.getHours() / 12) * 360 - 90;
  secEl.style.transform = `rotate(${secDeg}deg)`;
  minEl.style.transform = `rotate(${minDeg}deg)`;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  let hours= date.getHours()<10 ? `0${date.getHours()}`:date.getHours();
  let min= date.getMinutes()<10 ? `0${date.getMinutes()}`:date.getMinutes();

  let sec=date.getSeconds()<10?`)${date.getSeconds()}`:date.getSeconds();
  showdate.value=`${hours}:${min}:${sec}`;
 
  
  

  // console.log(date.getSeconds())
  // console.log(date.getMinutes())
}, 1000);
