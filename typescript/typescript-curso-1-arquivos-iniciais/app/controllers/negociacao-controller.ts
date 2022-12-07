export class NegociacaoController {
    private inputData;
    private inputQuantidade;
    private inputValor;

    constructor() {
        // utilizando dom para pegar os elementos!
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona() {
        console.log(this.inputData);
        console.log(this.inputQuantidade);
        console.log(this.inputValor);
    }

}