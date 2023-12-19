const dice = document.querySelector(".dice");
const number = document.querySelector(".number");
const advices = document.querySelector(".advices");
const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const res = await fetch(url);
  const {
    slip: { id, advice },
  } = await res.json();
  number.innerText = id;
  advices.innerText = advice;
}
getAdvice();

dice.addEventListener("click", getAdvice);
