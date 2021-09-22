"use strict";
exports.__esModule = true;
exports.NegociacaoController = void 0;
var negociacao_js_1 = require("../models/negociacao.js");
var NegociacaoController = /** @class */ (function () {
    function NegociacaoController() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    NegociacaoController.prototype.adiciona = function () {
        var negociacao = this.criaNegociacao();
        console.log(negociacao);
        this.limparFormulario();
    };
    NegociacaoController.prototype.criaNegociacao = function () {
        var exp = /-/g;
        var date = new Date(this.inputData.value.replace(exp, ','));
        var quantidade = parseInt(this.inputQuantidade.value);
        var valor = parseFloat(this.inputValor.value);
        return new negociacao_js_1.Negociacao(date, quantidade, valor);
    };
    NegociacaoController.prototype.limparFormulario = function () {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    };
    return NegociacaoController;
}());
exports.NegociacaoController = NegociacaoController;
