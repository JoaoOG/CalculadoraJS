const numeros = document.querySelectorAll(".numero");
const displayValorActual = document.getElementById("valor-actual");
const displayValorAnterior = document.getElementById("valor-anterior")
const operadores = document.querySelectorAll(".operar")

const display = new Display(displayValorActual,displayValorAnterior);

numeros.forEach(boton => {
    boton.addEventListener("click", ()=>{
        display.agregarNumero(boton.innerHTML);
    });
});






operadores.forEach(boton => {
   boton.addEventListener("click", ()=> display.computar(boton.value) ) 
});


window.addEventListener("keydown", (e)=>{

if(isNaN(e.key)){

}else{
    display.agregarNumero(e.key)
};
        
});

window.addEventListener("keydown", (e)=>{
    
    if(e.key === 'c' ){
        display.borrar();
    };
            
    });










