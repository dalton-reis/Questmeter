(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-professor-atividade-apresentacao-professor-atividade-apresentacao-module"],{

/***/ "./src/app/pages/professor-atividade-apresentacao/professor-atividade-apresentacao.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/professor-atividade-apresentacao/professor-atividade-apresentacao.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: ProfessorAtividadeApresentacaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorAtividadeApresentacaoPageModule", function() { return ProfessorAtividadeApresentacaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _professor_atividade_apresentacao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./professor-atividade-apresentacao.page */ "./src/app/pages/professor-atividade-apresentacao/professor-atividade-apresentacao.page.ts");







var routes = [
    {
        path: '',
        component: _professor_atividade_apresentacao_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorAtividadeApresentacaoPage"]
    }
];
var ProfessorAtividadeApresentacaoPageModule = /** @class */ (function () {
    function ProfessorAtividadeApresentacaoPageModule() {
    }
    ProfessorAtividadeApresentacaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_professor_atividade_apresentacao_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorAtividadeApresentacaoPage"]]
        })
    ], ProfessorAtividadeApresentacaoPageModule);
    return ProfessorAtividadeApresentacaoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/professor-atividade-apresentacao/professor-atividade-apresentacao.page.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/professor-atividade-apresentacao/professor-atividade-apresentacao.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/professor-atividade/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Resultado respostas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div id=\"div_iniciar\">\n    <ion-item lines=\"none\">\n      <ion-label>Digite o token da turma para fazer a atividade</ion-label>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label style=\"font-weight: bold\">{{ tokenTurma }}</ion-label>\n    </ion-item>\n    <ion-button expand=\"full\" (click)=\"iniciarAtividade()\">Iniciar atividade</ion-button>\n  </div>\n  \n  <div id=\"div_questoes\" style=\"visibility: hidden\">\n    \n    <ion-item *ngIf=\"questaoCorrente\" lines=\"none\">\n      <ion-label>\n        Questão: {{ questaoCorrente.apelido }}\n        <p>{{ questaoCorrente.problema }}</p>\n      </ion-label>\n    </ion-item>\n    \n    <div id=\"div_chart\" style=\"position: relative; width: 100%; height: 100%;\"></div>\n    <ion-button id=\"btn_proximo\" expand=\"full\" (click)=\"proximaQuestao()\">Próxima questão</ion-button>\n  </div>\n  \n  <ion-button id=\"btn_ranking\" expand=\"full\" style=\"visibility: hidden\" (click)=\"mostrarRanking()\">Ranking</ion-button>\n  <ion-button id=\"btn_finalizar\" expand=\"full\" style=\"visibility: hidden\" (click)=\"finalizar()\">Finalizar sem mostrar o Ranking</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/professor-atividade-apresentacao/professor-atividade-apresentacao.page.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/professor-atividade-apresentacao/professor-atividade-apresentacao.page.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zlc3Nvci1hdGl2aWRhZGUtYXByZXNlbnRhY2FvL3Byb2Zlc3Nvci1hdGl2aWRhZGUtYXByZXNlbnRhY2FvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/professor-atividade-apresentacao/professor-atividade-apresentacao.page.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/professor-atividade-apresentacao/professor-atividade-apresentacao.page.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProfessorAtividadeApresentacaoPage, Questao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorAtividadeApresentacaoPage", function() { return ProfessorAtividadeApresentacaoPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Questao", function() { return Questao; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_turma_aluno_resposta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/turma-aluno-resposta.service */ "./src/app/services/turma-aluno-resposta.service.ts");
/* harmony import */ var _services_atividade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/atividade.service */ "./src/app/services/atividade.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_resposta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/resposta.service */ "./src/app/services/resposta.service.ts");
/* harmony import */ var src_app_services_turma_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/turma.service */ "./src/app/services/turma.service.ts");
/* harmony import */ var src_app_services_questao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/questao.service */ "./src/app/services/questao.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









var ProfessorAtividadeApresentacaoPage = /** @class */ (function () {
    function ProfessorAtividadeApresentacaoPage(route, nav, turmaService, atividadeService, questaoService, respostaService, turmaAlunoRespostaService) {
        this.route = route;
        this.nav = nav;
        this.turmaService = turmaService;
        this.atividadeService = atividadeService;
        this.questaoService = questaoService;
        this.respostaService = respostaService;
        this.turmaAlunoRespostaService = turmaAlunoRespostaService;
        this.turma = {
            id: '',
            atividade: '',
            nome: '',
            token: '',
            dataCriacao: new Date(),
            atividadeIniciada: false,
            atividadeFinalizada: false,
            questaoAtual: ''
        };
        this.questaoCorrente = new Questao();
        this.idTurma = null;
        this.tokenTurma = null;
        this.mostrarFinal = false;
        this.questoes = [];
    }
    ProfessorAtividadeApresentacaoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.idTurma = this.route.snapshot.params['turma'];
        this.turmaService.get(this.idTurma).subscribe(function (turma) {
            _this.tokenTurma = turma.token;
            _this.turma = turma;
            _this.questaoService.getByAtividadeAsc(turma.atividade).subscribe(function (resultado) {
                resultado.forEach(function (f) {
                    if (_this.questoes.findIndex(function (c) { return c.id == f.id; }) < 0) {
                        _this.questoes.push(_this.preencherQuestaoClasse(f.id, f, f.id == turma.questaoAtual));
                    }
                });
            });
            if (!turma.atividadeFinalizada) {
                if (turma.questaoAtual) {
                    document.getElementById('div_questoes').style.visibility = "visible";
                    document.getElementById('div_iniciar').style.display = "none";
                    _this.questaoService.get(turma.questaoAtual).subscribe(function (questao) {
                        _this.questaoCorrente = _this.preencherQuestaoClasse(turma.questaoAtual, questao, true);
                        _this.apresentarGrafico(_this.idTurma, turma.questaoAtual);
                    });
                }
            }
            if (_this.mostrarFinal) {
                document.getElementById('btn_ranking').style.visibility = "visible";
                document.getElementById('btn_finalizar').style.visibility = "visible";
                document.getElementById('div_questoes').style.display = "none";
                document.getElementById('div_iniciar').style.display = "none";
            }
        });
    };
    ProfessorAtividadeApresentacaoPage.prototype.iniciarAtividade = function () {
        var _this = this;
        //Deixa a tela do gráfico visível e inicia a primeira questão
        document.getElementById('div_questoes').style.visibility = "visible";
        document.getElementById('div_iniciar').style.display = "none";
        this.questaoService.getByAtividadeAsc(this.turma.atividade).subscribe(function (questao) {
            _this.turma.questaoAtual = questao[0].id;
            _this.turma.atividadeIniciada = true;
            _this.turmaService.update(_this.idTurma, _this.turma).then(function () {
                _this.questaoCorrente = _this.preencherQuestaoClasse(questao[0].id, questao[0], true);
            });
        });
    };
    ProfessorAtividadeApresentacaoPage.prototype.proximaQuestao = function () {
        //pega a ultima questao que ainda não foi iniciada
        //se não tiver mais questões, apresentar mensagem e ranking
        var _this = this;
        var index2 = 0;
        var qtdQuestoes = this.questoes.length;
        var index = this.questoes.findIndex(function (c) { return c.id == _this.questaoCorrente.id; });
        index2 = index == qtdQuestoes ? qtdQuestoes : (index + 1);
        this.questaoCorrente = this.questoes[index2];
        // console.log('questoes', this.questoes);
        // console.log('questao atual', this.questaoCorrente);
        // console.log('index', index2);
        // console.log('qtd', qtdQuestoes);
        if (index2 >= qtdQuestoes) {
            this.mostrarFinal = true;
            this.turma.atividadeIniciada = false;
            this.turma.atividadeFinalizada = true;
            this.turma.questaoAtual = null;
            this.turmaService.update(this.idTurma, this.turma);
        }
        else {
            this.turma.questaoAtual = this.questaoCorrente.id;
            this.turmaService.update(this.idTurma, this.turma);
        }
    };
    ProfessorAtividadeApresentacaoPage.prototype.mostrarRanking = function () {
        if (this.turma.atividadeFinalizada)
            this.nav.navigateForward('/professor-atividade-apresentacao-ranking/turma/' + this.idTurma);
    };
    ProfessorAtividadeApresentacaoPage.prototype.finalizar = function () {
        if (this.turma.atividadeFinalizada)
            this.nav.navigateForward('/professor-atividade-edicao/' + this.turma.atividade);
    };
    ProfessorAtividadeApresentacaoPage.prototype.apresentarGrafico = function (idTurma, idQuestao) {
        var _this = this;
        this.respostaService.getByQuestao(idQuestao).subscribe(function (respostas) {
            _this.turmaAlunoRespostaService.getByTurma(idTurma).subscribe(function (resultado) {
                var data = new google.visualization.DataTable();
                data.addColumn('string', 'Topping');
                data.addColumn('number', 'Slices');
                var chave = [];
                var valor = [];
                for (var i = 0; i < respostas.length; i++) {
                    var votos = 0;
                    resultado.forEach(function (f) {
                        if (f.resposta == respostas[i].id) {
                            votos += 1;
                        }
                    });
                    chave[i] = respostas[i].conteudo;
                    valor[i] = votos;
                }
                data.addRows(respostas.length);
                for (var i = 0; i < chave.length; i++) {
                    data.setCell(i, 0, chave[i]);
                    data.setCell(i, 1, valor[i]);
                }
                var options = {
                    'width': '80%',
                    'height': '80%',
                    pieHole: 0.4
                };
                var chart = new google.visualization.PieChart(document.getElementById('div_chart'));
                chart.draw(data, options);
            });
        });
    };
    // apresentarGrafico(idQuestao) {
    //   this.respostaService.getByQuestao(idQuestao).subscribe((respostas) => {
    //     var data = new google.visualization.DataTable();
    //     data.addColumn('string', 'Topping');
    //     data.addColumn('number', 'Slices');
    //     var chave = [];
    //     var valor = [];
    //     for (var i = 0; i < respostas.length; i++) {
    //       chave[i] = respostas[i].conteudo;
    //       this.turmaAlunoRespostaService.getByResposta(respostas[i].id).subscribe((resultado) => {
    //         if (resultado[0]) {
    //           this.alunoRespostas[0] = resultado[0];
    //           console.log('resppp', resultado.length);
    //           valor[i] = resultado.length;
    //         }
    //       });
    //     }
    //     console.log('chave', chave);
    //     console.log('valor', valor);
    //     data.addRows(respostas.length);
    //     for (var i = 0; i < chave.length; i++) {
    //       data.setCell(i, 0, chave[i]);
    //       data.setCell(i, 1, valor[i]);
    //     }
    //     var options = {
    //       'width':'80%',
    //       'height':'80%',
    //       pieHole: 0.4};
    //       var chart = new google.visualization.PieChart(document.getElementById('div_chart'));
    //       chart.draw(data, options);
    //     });
    //   }
    ProfessorAtividadeApresentacaoPage.prototype.preencherQuestaoClasse = function (id, questaoInterface, atual) {
        var questao = new Questao();
        questao.id = id;
        questao.atividade = questaoInterface.atividade;
        questao.apelido = questaoInterface.apelido;
        questao.problema = questaoInterface.problema;
        questao.dataCriacao = questaoInterface.dataCriacao;
        questao.atual = atual;
        return questao;
    };
    ProfessorAtividadeApresentacaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-professor-atividade-apresentacao',
            template: __webpack_require__(/*! ./professor-atividade-apresentacao.page.html */ "./src/app/pages/professor-atividade-apresentacao/professor-atividade-apresentacao.page.html"),
            styles: [__webpack_require__(/*! ./professor-atividade-apresentacao.page.scss */ "./src/app/pages/professor-atividade-apresentacao/professor-atividade-apresentacao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"],
            src_app_services_turma_service__WEBPACK_IMPORTED_MODULE_6__["TurmaService"], _services_atividade_service__WEBPACK_IMPORTED_MODULE_2__["AtividadeService"],
            src_app_services_questao_service__WEBPACK_IMPORTED_MODULE_7__["QuestaoService"], src_app_services_resposta_service__WEBPACK_IMPORTED_MODULE_5__["RespostaService"],
            _services_turma_aluno_resposta_service__WEBPACK_IMPORTED_MODULE_1__["TurmaAlunoRespostaService"]])
    ], ProfessorAtividadeApresentacaoPage);
    return ProfessorAtividadeApresentacaoPage;
}());

var Questao = /** @class */ (function () {
    function Questao() {
    }
    Questao.prototype.Questao = function () {
        this.id = '';
        this.atividade = '';
        this.apelido = '';
        this.problema = '';
        this.dataCriacao = new Date();
        this.atual = false;
    };
    return Questao;
}());



/***/ })

}]);
//# sourceMappingURL=pages-professor-atividade-apresentacao-professor-atividade-apresentacao-module.js.map