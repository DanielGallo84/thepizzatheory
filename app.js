import promptSync from 'prompt-sync';

var prompt = promptSync();                 
var masa= "";
var ingredientes= [];
var temperatura= 220;


function app(){
    comprarMasa();
    anadirIngrediente("mozzarella");
    anadirIngrediente("tomate");
    anadirIngrediente("atun");
    anadirIngrediente("setas");
    hornear();
    entregar();
   
}

function hornear(){
    console.log("encender el horno");
    console.log("precalentar a "+ temperatura + " grados")

    console.log("hornear la pizza");
}
function entregar(){
    console.log ("entregar la pizza");
}
function anadirIngrediente(ingrediente){
    ingredientes.push(ingrediente);
    console.log("hemos añadido el ingrediente " + ingrediente);
}
function comprarMasa (){
    masa="clásica";
    console.log("Hemos comprado la masa " + masa);
}


app();
var pizza = prompt('Qué pizza quieres? ');
console.log("pero si no tenemos " + pizza)

