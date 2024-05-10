var h1 = document.createElement("h1");

h1.appendChild(document.createTextNode("Ovo je tekst unutar h1"));

var bodyElem = document.querySelector("body");

bodyElem.prepend(h1);

var divInfo = document.createElement("div");
divInfo.classList.add("info");

var footElement = document.querySelector("#footer");

bodyElem.insertBefore(divInfo, footElement);


/* u ul trebamo dodati 3 li-a */

var ul = document.querySelector("ul");


for(let i = 0; i < 3; i++) {
    let li = document.createElement("li");
    ul.appendChild(li);
}

/*ovo gore je iz prethodne vjezbe */

var bodyWindow = window.getComputedStyle(body, null);

debugger;

var marginBody = bodyWindow.getPropertyValue("margin");
console.log("marginBody: " + marginBody);

var bckgColor = bodyWindow.getPropertyValue("background-color");
console.log("background-color: " + bckgColor);

/*zadatak - animirajte velicnu margine body elementa,
od pocetne do 30px i natrag u ponavljajucoj petlji */

let marginNum = parseInt(marginBody);
console.log("marginNum" + marginNum);

setInterval(animiraj, 200);
var reverse = false;

function animiraj() {
    console.log("Pozvana funkcija animiraj");
    if(marginNum == 30) {
        reverse = true;
    }

    if(reverse) {
        marginNum--;
        console.log("<<<<<<<<< " + marginNum);
        if(marginNum == 8) {
            reverse = false;
        }
    }

    else{
        marginNum++;
        console.log(">>>>>>>>> " + marginNum);
    }

    body.style.margin = marginNum + "px";
}
