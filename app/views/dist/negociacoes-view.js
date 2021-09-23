"use strict";
exports.__esModule = true;
exports.NegociacoesView = void 0;
var NegociacoesView = /** @class */ (function () {
    function NegociacoesView(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    NegociacoesView.prototype.template = function (model) {
        return "\n\t\t\t<table class=\"table table-hover table-bordered\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>DATA</th>\n\t\t\t\t\t\t<th>QUANTIDADE</th>\n\t\t\t\t\t\t<th>VALOR</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t" + model.lista().map(function (negociacao) {
            return "\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>" + new Intl.DateTimeFormat().format(negociacao.data) + "</td>\n\t\t\t\t\t\t\t\t<td>" + negociacao.quantidade + "</td>\n\t\t\t\t\t\t\t\t<td>" + negociacao.valor + "</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t";
        }).join('') + "\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t\n\t\t";
    };
    NegociacoesView.prototype.update = function (model) {
        var template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    };
    return NegociacoesView;
}());
exports.NegociacoesView = NegociacoesView;
