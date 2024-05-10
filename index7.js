let imeInput = document.getElementById("ime");

let prezimeInput = document.getElementById("prezime");

let emailInput = document.getElementById("email");

let pošaljiButton = document.getElementById("pošalji");

let resetButton = document.getElementById("reset");




function focusIn(event) {
    event.target.style.backgroundColor = "yellow";
}

function focusOut(event) {
    if(event.target.value == "") {
        event.target.style.backgroundColor = "red";
    }
}
function provjeraEmaila(event) {
    let emailNiz = event.target.value.split("");

    for(let znak of emailNiz) {
        if( znak === "@"){
            continue;
        }
            event.target.style.backgroundColor = "red";
    }
}


imeInput.addEventListener("focus", focusIn);
prezimeInput.addEventListener("focus", focusIn);
emailInput.addEventListener("focus", focusIn);

imeInput.addEventListener("blur", focusOut);
prezimeInput.addEventListener("blur", focusOut);
emailInput.addEventListener("blur", focusOut);
emailInput.addEventListener("blur", provjeraEmaila);

/*
pošaljiButton.addEventListener("click")
resetButton.addEventListener("click") */