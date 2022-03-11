const qouteID = document.getElementById("qouteID");
const qouteBody = document.querySelector(".qoute-content");
const adviceURL = "https://api.adviceslip.com/advice";
const diceBtn = document.querySelector(".dice-btn");

function adviceLoader() {
  fetch(adviceURL)
    .then((res) => res.json())
    .then(function (data) {
      qouteID.innerHTML = `ADVICE ${data.slip.id}`;
      qouteBody.innerHTML = `"${data.slip.advice}"`;
    });
}

diceBtn.addEventListener("click", adviceLoader);

adviceLoader();
