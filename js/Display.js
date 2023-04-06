class Display{
    constructor(displayValorActual, displayValorAnterior){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: "+",
            restar:"-",
            dividir:"/",
            multiplicar:"x"

        };

    }

    borrar(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = '';
        this.actualizar();
    }
    borraruno(){
        this.valorActual = this.valorActual.toString().slice(0,-1)
        this.actualizar();
    }

    agregarNumero(numero){
        
        if(numero == '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        
        this.actualizar(); 
    }
    

    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.actualizar();

    }

    actualizar(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''} `;
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);
        if(isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);


    }
    

}
