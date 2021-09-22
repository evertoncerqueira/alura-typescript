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
        var negociacao = new negociacao_js_1.Negociacao(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        console.log(negociacao);
    };
    return NegociacaoController;
}());
exports.NegociacaoController = NegociacaoController;
