// Declaration des variables à parir du DOM
const input = document.getElementById("taskTyped");
const btnajout = document.getElementById("buttonAdd");
const listTache = document.getElementById("list-tache");
const buttonDone = document.getElementById("buttonDone");
const buttonModify = document.getElementById("buttonModify");
const buttonDelete = document.getElementById("buttonDelete");


// Fonction recuperer le text taper.
function getValue(elements){
    return (elements.value);
}

function removeIt(element){
    element.removeListner("click", returnfonction(), false);
}


// Ajout d'un ecouteur sur le bouton "Add"
function addTasks (){

    // Creation d'un elements li et un span avec un img
    //  const span = document.createElement("span");
    //  const img = document.createElement("img");
    let li = document.createElement("li");
    li.className = "tache-items";
    li.style.listStyle = "url(img/arrow_right.svg)";
    li.style.cursor = "pointer";

    // Insertion de l'element cree dans le DOM
    if(li){
    
        li.innerHTML = getValue(input);
        listTache.appendChild(li);
    }
    input.value = "";
}

function check (){
    
}

li.addEventListener("mouseenter", function(){
    li.style.listStyle = "url(img/arrow_down.svg)";
}, false);

li.addEventListener("mouseleave", function(){
    li.style.listStyle = "url(img/arrow_right.svg)";
}, false);

li.addEventListener("dblclick", function(){
    li.style.border = "2px solid rgb(246, 161, 150)";
    li.style.listStyle = "url(img/arrow_up.svg)";

    input.style.display = "none";
    btnajout.style.display = "none";
    buttonDone.style.display = "inline-flex"
    buttonModify.style.display = "inline-flex"
    buttonDelete.style.display = "inline-flex"

}, false);



