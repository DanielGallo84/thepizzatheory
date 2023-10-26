import promptSync from 'prompt-sync';

const prompt = promptSync();

var masa ="";
var ingredientes=[];

function app(){
    comprarMasa();
    aniadirIngrediente("mozarella");
    aniadirIngrediente("tomate");
    aniadirIngrediente("peperoni");
    aniadirIngrediente("champignon");
    hornear();
    entregar();

}
function hornear(){
    console.log("encender el horno");
    console.log("precalentar 10 min a 220 grados")
    console.log("hornear la masa");
    
        
}
function entregar(){
    console.log("entregar la pizza");

}


function aniadirIngrediente(ingrediente){
    ingredientes.push(ingrediente); 
    console.log("hemos aniadido el ingrediente "+ ingrediente);

}

function comprarMasa (){
    masa="clásica"; 
    console.log("Hemos comprado la masa " + masa);
}

app()
var pizza = prompt('que pizza quieres?');
console.log("pero si nosotros no tenemos "+pizza)