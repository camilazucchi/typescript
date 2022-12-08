import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        // utilizando dom para pegar os elementos!
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    // pega os valores dos inputs:
    adiciona() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        const negociacao = new Negociacao(date, quantidade, valor);
        console.log(negociacao);
    }
}
