/* Library Of html */
const rock_div = document.getElementById("batu1");
const rock2_div = document.getElementById("batu2");
const kertas_div = document.getElementById("kertas1");
const kertas2_div = document.getElementById("kertas2");
const gunting_div = document.getElementById("gunting1");
const gunting2_div = document.getElementById("gunting2");
const ulang = document.getElementById("ulang");
const span_vs = document.getElementById("vs");

/* BOT Script */

function bot() {
  const choices = ["batu", "kertas", "gunting"];
  const randomNumber = Math.floor(Math.random() * 3);
  console.log(choices[randomNumber]);

  /* Border Function */

  if (choices[randomNumber] == "batu") {
    rock2_div.style.color = "white";
    rock2_div.style.fontSize = "100px";
    rock2_div.style.backgroundColor = "#C4C4C4";
  } else if (choices[randomNumber] == "kertas") {
    kertas2_div.style.color = "white";
    kertas2_div.style.fontSize = "140px";
    kertas2_div.style.backgroundColor = "#C4C4C4";
  } else if (choices[randomNumber] == "gunting") {
    gunting2_div.style.color = "white";
    gunting2_div.style.fontSize = "120px";
    gunting2_div.style.backgroundColor = "#C4C4C4";
  }
  return choices[randomNumber];
}

/* Function For Win */

function win(userChoice, computerChoice) {
  span_vs.innerHTML = "Player 1 WIN";
  span_vs.style.color = "white";
  span_vs.style.fontSize = "56px";
  span_vs.style.rotate = "-30.68deg";
  span_vs.style.backgroundColor = "#4C9654";
  span_vs.style.width = "300px";
}
/* Function For Lose */

function lose(userChoice, computerChoice) {
  span_vs.innerHTML = "COM WIN";
  span_vs.style.color = "white";
  span_vs.style.fontSize = "56px";
  span_vs.style.rotate = "-30.68deg";
  span_vs.style.backgroundColor = "#4C9654";
}

/* Function For Draw */

function draw(userChoice, computerChoice) {
  span_vs.innerHTML = "DRAW";
  span_vs.style.color = "white";
  span_vs.style.rotate = "-30.68deg";
  span_vs.style.backgroundColor = "#035B0C";
  span_vs.style.width = "300px";
}

/* MAIN LOGIC */

function game(userChoice) {
  const computerChoice = bot();
  switch (userChoice + computerChoice) {
    case "batugunting":
    case "kertasbatu":
    case "guntingkertas":
      win(userChoice, computerChoice);
      break;
    case "kertasgunting":
    case "batukertas":
    case "guntingbatu":
      lose(userChoice, computerChoice);
      break;
    case "batubatu":
    case "kertaskertas":
    case "guntinggunting":
      draw(userChoice, computerChoice);
      break;
  }
}

/* DONE */

/* Main Section */
function main() {
  rock_div.addEventListener("click", function () {
    game("batu");
    rock_div.style.color = "white";
    rock_div.style.backgroundColor = "#C4C4C4";
    rock_div.style.border = "15px solid #C4C4C4";
    rock_div.style.borderRadius = "15px";
  });
  kertas_div.addEventListener("click", function () {
    game("kertas");
    kertas_div.style.color = "white";
    kertas_div.style.backgroundColor = "#C4C4C4";
    kertas_div.style.border = "15px solid #C4C4C4";
    kertas_div.style.borderRadius = "15px";
  });
  gunting_div.addEventListener("click", function () {
    game("gunting");
    gunting_div.style.color = "white";
    gunting_div.style.backgroundColor = "#C4C4C4";
    gunting_div.style.border = "15px solid #C4C4C4";
    gunting_div.style.borderRadius = "15px";
  });

  /* Section For COM */

  rock2_div.addEventListener("click", function () {});
  kertas2_div.addEventListener("click", function () {});
  gunting2_div.addEventListener("click", function () {});

  // refresh button
  ulang.addEventListener("click", function () {
    location.reload();
  });
}

main();
