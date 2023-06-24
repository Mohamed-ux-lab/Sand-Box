// Declaration des variables à parir du DOM
const input = document.getElementById("taskTyped");
const btnajout = document.getElementById("buttonAdd");
let ul = document.querySelector("ul.list-tache");
const buttonDone = document.getElementById("buttonDone");
const buttonModify = document.getElementById("buttonModify");
const buttonDelete = document.getElementById("buttonDelete");

let num = 0;

// Fonction recuperer le text taper.
function getValue(elements){
    return (elements.value);
}

function removeIt(element){
    element.removeListner("click", returnfonction(), false);
}

 // Creation d'un elements li et un span avec un img
//  const span = document.createElement("span");
//  const img = document.createElement("img");
 let li = document.createElement("li");
 li.className = "tache-items";
 li.style.listStyle = "url(img/arrow_right.svg)";

// Ajout d'un ecouteur sur le bouton "Add"
btnajout.addEventListener("click", function(e){ 
    
    // Insertion de l'element cree dans le DOM
    if(li){

        li.innerHTML = getValue(input);
        ul.insertBefore(li, ul.children[num]);
        ul.append(li);
        
        ++ num;
    }
    input.value = "";

    li.addEventListener("mouseenter", function(){
        li.style.listStyle = "url(img/arrow_down.svg)";
    })

    li.addEventListener("mouseleave", function(){
        li.style.listStyle = "url(img/arrow_right.svg)";
    }, false)

    li.addEventListener("dblclick", function(){
        li.style.border = "2px solid rgb(246, 161, 150)";
        li.style.listStyle = "url(img/arrow_up.svg)";

        input.style.display = "none";
        btnajout.style.display = "none";
        buttonDone.style.display = "inline-flex"
        buttonModify.style.display = "inline-flex"
        buttonDelete.style.display = "inline-flex"

    }, false);
}, false);



