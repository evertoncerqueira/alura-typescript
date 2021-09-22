"use strict";
exports.__esModule = true;
var negociacao_controller_js_1 = require("./controllers/negociacao-controller.js");
var controller = new negociacao_controller_js_1.NegociacaoController();
var form = document.querySelector(".form");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    controller.adiciona();
});
