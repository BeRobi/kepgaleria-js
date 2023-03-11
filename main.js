window.addEventListener("load", init);
const KEPEK = [
    "kepek/pic2.jpg",
    "kepek/pic3.jpg",
    "kepek/pic4.jpg",
    "kepek/pic5.jpg",
  ];
function init() {


  const KEPEKHELYE = document.getElementsByTagName("article");
  let kep = kepetBeszur(KEPEK);

  kiir(kep, KEPEKHELYE[0]);
  kepKattint();
}

function kepetBeszur(KEPEK) {
  let kephelye = "";
  for (let index = 0; index < KEPEK.length; index++) {
    kephelye += `<div> <img src="${KEPEK[index]}" alt="${[
      "kep" + (index + 1),
    ]}"> </div>`;
  }
  kephelye += "";
  return kephelye;
}

function kiir(mit, hova) {
  hova.innerHTML += mit;
}

function kepKattint() {
  const KEPLISTA = document.querySelectorAll("article div img");

  for (let index = 0; index < KEPLISTA.length; index++) {
    KEPLISTA[index].addEventListener("click", function() {
        behelyez(index)
    });
  }
}

function behelyez(i) {
  console.log(event.target);
  console.log(event.target.src);
  const NAGYKEP = document.querySelectorAll("section div img");
  console.log(NAGYKEP);
  NAGYKEP[0].src = KEPEK[i];
}
