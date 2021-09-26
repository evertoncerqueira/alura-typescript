"use strict";
exports.__esModule = true;
exports.NegociacaoController = void 0;
var negociacao_js_1 = require("../models/negociacao.js");
var negociacoes_js_1 = require("../models/negociacoes.js");
var mensagem_view_js_1 = require("../views/mensagem-view.js");
var negociacoes_view_js_1 = require("../views/negociacoes-view.js");
var NegociacaoController = /** @class */ (function () {
    function NegociacaoController() {
        this.negociacoes = new negociacoes_js_1.Negociacoes();
        this.negociacoesView = new negociacoes_view_js_1.NegociacoesView('#negociacoesView');
        this.mensagemView = new mensagem_view_js_1.MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    NegociacaoController.prototype.adiciona = function () {
        var negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
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
