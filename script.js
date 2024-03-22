// let time = parseInt(window.prompt("Enter the time"));
// const timerElement = document.getElementById("timer");
// const button = document.getElementById("handler");

// timerElement.innerText = time;

// button.addEventListener("click", toggleTimer);

// let timerID;
// function toggleTimer() {
//   if (!timerID) {

//     button.innerText = "stop";
//     button.innerText = "stop";
//     timerID = setInterval(() => {
//       if (time === 0) {
//         button.innerText = "start";

//         timerElement.innerText = "Times up";
//         clearInterval(timerID);
//         timerID = null;

//         return;
//       }
//       timerElement.innerText = time--;
//     }, 10);
//   } else {
//     button.innerText = "start";
//     clearInterval(timerID);
//     timerID = null;
//   }
// }
// Below is about remove element lsitener function
const test = document.getElementById("test");
const donttest = document.getElementById("donttest");
function addListener() {
  test.onclick = () => {
    console.log("added");
  };
  let func = () => {
    console.log("notadded");

    removeEventListener("click", func);
  };
  donttest.addEventListener("click", func);
}
