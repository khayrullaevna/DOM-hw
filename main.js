const elInput = document.querySelector("#distance");
const elButton = document.querySelector(".submit");

// const elButton1 = document.querySelector(".piyoda");
// const elButton2 = document.querySelector(".velosiped");
// const elButton3 = document.querySelector(".mashina");
// const elButton4 = document.querySelector(".samolyot");

const elTitle = document.querySelector(".title");

elButton.addEventListener("click", function(evt){
    evt.preventDefault()
    elTitle.innerHTML = `Piyoda ${elInput.value/3.6} km/soat,
    Velosiped ${elInput.value/20.1} km/soat,
    Mashina ${elInput.value/70} km/soat,
    Samolyot ${elInput.value/800} km/soat`
}
)