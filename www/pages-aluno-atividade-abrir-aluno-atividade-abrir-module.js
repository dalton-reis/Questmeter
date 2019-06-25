(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-aluno-atividade-abrir-aluno-atividade-abrir-module"],{

/***/ "./src/app/pages/aluno-atividade-abrir/aluno-atividade-abrir.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/aluno-atividade-abrir/aluno-atividade-abrir.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AlunoAtividadeAbrirPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoAtividadeAbrirPageModule", function() { return AlunoAtividadeAbrirPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _aluno_atividade_abrir_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aluno-atividade-abrir.page */ "./src/app/pages/aluno-atividade-abrir/aluno-atividade-abrir.page.ts");







var routes = [
    {
        path: '',
        component: _aluno_atividade_abrir_page__WEBPACK_IMPORTED_MODULE_6__["AlunoAtividadeAbrirPage"]
    }
];
var AlunoAtividadeAbrirPageModule = /** @class */ (function () {
    function AlunoAtividadeAbrirPageModule() {
    }
    AlunoAtividadeAbrirPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_aluno_atividade_abrir_page__WEBPACK_IMPORTED_MODULE_6__["AlunoAtividadeAbrirPage"]]
        })
    ], AlunoAtividadeAbrirPageModule);
    return AlunoAtividadeAbrirPageModule;
}());



/***/ }),

/***/ "./src/app/pages/aluno-atividade-abrir/aluno-atividade-abrir.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/aluno-atividade-abrir/aluno-atividade-abrir.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/aluno-atividade/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ atividade.nome }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <div id=\"div_aguarde\">\n    <ion-label>Aguarde o professor iniciar a atividade</ion-label>\n  </div>\n  \n  <div id=\"div_apresentacao\" style=\"visibility: hidden\">\n    <ion-item *ngIf=\"questaoCorrente\" lines=\"none\">\n      <ion-label>\n        Questão: {{ questaoCorrente.apelido }}\n        <p>{{ questaoCorrente.problema }}</p>\n      </ion-label>\n    </ion-item>\n    \n    <ion-list>\n      <ion-item-sliding *ngFor=\"let resposta of respostas\">\n        <ion-card>\n          <ion-card-content>\n            {{resposta.conteudo}}\n          </ion-card-content>\n          <ion-button end (click)=\"votar(resposta.id, resposta)\" *ngIf=\"!alunoVotou\" style=\"float: right; margin-right: 2%\">Escolher</ion-button>\n        </ion-card>\n      </ion-item-sliding>\n    </ion-list>\n  </div>\n  \n  <div id=\"div_atividadeFinalizada\" style=\"visibility: hidden;\">\n    \n    <ion-list lines=\"full\">\n      <ion-item *ngIf=\"atividade\">\n        <ion-label position=\"stacked\">Disciplina</ion-label>\n        <ion-input disabled=\"true\" type=\"text\" [(ngModel)]=\"atividade.disciplina\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"atividade\">\n        <ion-label position=\"stacked\">Atividade</ion-label>\n        <ion-input disabled=\"true\" type=\"text\" [(ngModel)]=\"atividade.nome\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Pontuação total</ion-label>\n        <ion-input disabled=\"true\" type=\"number\" [(ngModel)]=\"pontuacaoTotal\"></ion-input>\n      </ion-item>\n      <!-- <ion-item *ngIf=\"atividade\">\n        <ion-label position=\"stacked\">Término da atividade</ion-label>\n        <ion-datetime disabled=\"true\" displayFormat=\"DD/MM/YYYY hh:mm\" [(ngModel)]=\"atividade.dataTermino\"></ion-datetime>\n      </ion-item> -->\n      \n      <ion-list>\n        <ion-list-header>\n          <ion-label color=\"primary\">Questões</ion-label>\n        </ion-list-header>\n        <ion-item-sliding *ngFor=\"let questao of questoesFinalizadas\">\n          <ion-item lines=\"none\">\n            <ion-label>Questão: {{questao.apelido}}</ion-label>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <p>Problema/Desafio: {{questao.problema}}</p>\n          </ion-item>\n          <ion-list>\n            <ion-item-sliding *ngFor=\"let resposta of questao.respostas\">\n              <ion-card>\n                <ion-card-header>\n                  <ion-card-title>\n                    <ion-icon *ngIf=\"resposta.correta\" name=\"checkmark\"></ion-icon>\n                    <ion-icon *ngIf=\"!resposta.correta\" name=\"close\"></ion-icon>\n                    <ion-icon *ngIf=\"resposta.escolhida && resposta.correta\" name=\"done-all\" color=\"primary\"></ion-icon>\n                    <ion-icon *ngIf=\"resposta.escolhida && !resposta.correta\" name=\"done-all\" color=\"danger\"></ion-icon>\n                  </ion-card-title>\n                </ion-card-header>\n                \n                <ion-card-content>\n                  <p>{{resposta.conteudo}}</p>\n                  <p>Pontuação: {{resposta.pontuacao}}</p>\n                </ion-card-content>\n              </ion-card>\n            </ion-item-sliding>\n          </ion-list>\n          <ion-item></ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-list>\n  </div>\n  <!-- <div padding>\n    <ion-segment [(ngModel)]=\"segmentAtividade\" mode=\"ios\">\n      <ion-segment-button value=\"edicao\">\n        <ion-label>Informações</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"respostas\">\n        <ion-label>Respostas</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  \n  <div [ngSwitch]=\"segmentAtividade\">\n    \n    <div *ngSwitchCase=\"'edicao'\">\n      <ion-list lines=\"full\">\n        <ion-item *ngIf=\"atividade\">\n          <ion-label position=\"stacked\">Nome</ion-label>\n          <ion-input disabled=\"true\" type=\"text\" [(ngModel)]=\"atividade.nome\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"atividade\">\n          <ion-label position=\"stacked\">Problema/Desafio</ion-label>\n          <ion-textarea disabled=\"true\" rows=\"4\" [(ngModel)]=\"atividade.nome\"></ion-textarea>\n        </ion-item>\n        <ion-item *ngIf=\"atividade\">\n          <ion-label position=\"stacked\">Termina em</ion-label>\n          <ion-datetime disabled=\"true\" displayFormat=\"DD/MM/YYYY hh:mm\" [(ngModel)]=\"atividade.dataTermino\"></ion-datetime>\n        </ion-item>\n      </ion-list>\n    </div>\n    \n    <div *ngSwitchCase=\"'respostas'\">\n      <ion-list>\n        <ion-item-sliding *ngFor=\"let resposta of respostas\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title>Votos: {{resposta.votos}}</ion-card-title>\n            </ion-card-header>\n            \n            <ion-card-content *ngIf=\"resposta.correta\" color=\"success\">\n              {{resposta.conteudo}}\n            </ion-card-content>\n            \n            <ion-card-content *ngIf=\"!resposta.correta\">\n              {{resposta.conteudo}}\n            </ion-card-content>\n          </ion-card>\n        </ion-item-sliding>\n      </ion-list>\n    </div>\n  </div> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/aluno-atividade-abrir/aluno-atividade-abrir.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/aluno-atividade-abrir/aluno-atividade-abrir.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsdW5vLWF0aXZpZGFkZS1hYnJpci9hbHVuby1hdGl2aWRhZGUtYWJyaXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/aluno-atividade-abrir/aluno-atividade-abrir.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/aluno-atividade-abrir/aluno-atividade-abrir.page.ts ***!
  \***************************************************************************/
/*! exports provided: AlunoAtividadeAbrirPage, Questao, Resposta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoAtividadeAbrirPage", function() { return AlunoAtividadeAbrirPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Questao", function() { return Questao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resposta", function() { return Resposta; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_questao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/questao.service */ "./src/app/services/questao.service.ts");
/* harmony import */ var _services_aluno_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/aluno.service */ "./src/app/services/aluno.service.ts");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _services_atividade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/atividade.service */ "./src/app/services/atividade.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_resposta_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/resposta.service */ "./src/app/services/resposta.service.ts");
/* harmony import */ var src_app_services_turma_aluno_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/turma-aluno.service */ "./src/app/services/turma-aluno.service.ts");
/* harmony import */ var src_app_services_turma_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/turma.service */ "./src/app/services/turma.service.ts");
/* harmony import */ var src_app_services_turma_aluno_resposta_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/turma-aluno-resposta.service */ "./src/app/services/turma-aluno-resposta.service.ts");












var AlunoAtividadeAbrirPage = /** @class */ (function () {
    function AlunoAtividadeAbrirPage(route, nav, loadingController, autenticacaoService, atividadeService, turmaService, turmaAlunoService, alunoService, questaoService, respostaService, turmaAlunoRespostaService) {
        this.route = route;
        this.nav = nav;
        this.loadingController = loadingController;
        this.autenticacaoService = autenticacaoService;
        this.atividadeService = atividadeService;
        this.turmaService = turmaService;
        this.turmaAlunoService = turmaAlunoService;
        this.alunoService = alunoService;
        this.questaoService = questaoService;
        this.respostaService = respostaService;
        this.turmaAlunoRespostaService = turmaAlunoRespostaService;
        this.atividade = {
            id: '',
            professor: '',
            disciplina: '',
            nome: '',
            dataTermino: new Date(),
            dataCriacao: new Date()
        };
        this.questaoCorrente = {
            id: '',
            atividade: null,
            apelido: '',
            problema: '',
            dataCriacao: new Date(),
        };
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
        this.turmaAlunoResp = {
            turma: '',
            turmaAluno: '',
            resposta: '' //FK
        };
        this.usuarioCorrente = null;
        this.idTurma = null;
        this.questoesFinalizadas = [];
        this.respostas = [];
        this.segmentAtividade = 'edicao';
        this.alunoVotou = false;
        this.pontuacaoTotal = 0;
    }
    AlunoAtividadeAbrirPage.prototype.ngOnInit = function () {
        this.idTurma = this.route.snapshot.params['turma'];
        if (this.idTurma) {
            this.alunoVotou = false;
            this.load();
        }
    };
    AlunoAtividadeAbrirPage.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Carregando'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.turmaService.get(this.idTurma).subscribe(function (turma) {
                            _this.atividadeService.get(turma.atividade).subscribe(function (atividade) {
                                loading.dismiss();
                                _this.atividade = atividade;
                                _this.turma = turma;
                                _this.usuarioCorrente = _this.autenticacaoService.getID();
                                if (turma.questaoAtual) {
                                    document.getElementById('div_aguarde').style.display = "none";
                                    document.getElementById('div_apresentacao').style.visibility = "visible";
                                    _this.questaoService.get(turma.questaoAtual).subscribe(function (questao) {
                                        _this.questaoCorrente = questao;
                                        _this.respostaService.getByQuestao(turma.questaoAtual).subscribe(function (respostas) {
                                            _this.respostas = respostas;
                                            _this.alunoService.getByUsuario(_this.usuarioCorrente).then(function (aluno) {
                                                _this.turmaAlunoService.getByTurmaAluno(_this.idTurma, aluno[0].id)
                                                    .subscribe(function (turmaAluno) {
                                                    _this.alunoVotou = false;
                                                    respostas.forEach(function (f) {
                                                        _this.turmaAlunoRespostaService.getByTurmaAlunoResposta(turmaAluno[0].id, f.id)
                                                            .subscribe(function (resultado) {
                                                            //se já respondeu deixa o botão 'Votar' bloqueado
                                                            if (!_this.alunoVotou) {
                                                                _this.alunoVotou = (resultado.length > 0);
                                                            }
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                }
                                else if (turma.atividadeFinalizada) {
                                    document.getElementById('div_aguarde').style.display = "none";
                                    document.getElementById('div_apresentacao').style.display = "none";
                                    document.getElementById('div_atividadeFinalizada').style.visibility = "visible";
                                    _this.alunoService.getByUsuario(_this.usuarioCorrente).then(function (aluno) {
                                        _this.turmaAlunoService.getByTurmaAluno(_this.idTurma, aluno[0].id)
                                            .subscribe(function (turmaAluno) {
                                            _this.questaoService.getByAtividadeAsc(turma.atividade).subscribe(function (questoes) {
                                                questoes.forEach(function (f) {
                                                    if (_this.questoesFinalizadas.findIndex(function (c) { return c.id == f.id; }) < 0) {
                                                        var quest_1 = new Questao();
                                                        quest_1.id = f.id;
                                                        quest_1.apelido = f.apelido;
                                                        quest_1.problema = f.problema;
                                                        _this.respostaService.getByQuestao(f.id).subscribe(function (respostas) {
                                                            respostas.forEach(function (fr) {
                                                                if (quest_1.respostas.findIndex(function (c) { return c.id == fr.id; }) < 0) {
                                                                    var resp_1 = new Resposta();
                                                                    resp_1.id = fr.id;
                                                                    resp_1.correta = fr.correta;
                                                                    resp_1.conteudo = fr.conteudo;
                                                                    resp_1.pontuacao = fr.pontuacao;
                                                                    resp_1.escolhida = false;
                                                                    _this.turmaAlunoRespostaService.getByTurmaAlunoRespostaPromise(turmaAluno[0].id, fr.id).then(function (resultado) {
                                                                        if (resultado[0]) {
                                                                            resp_1.escolhida = true;
                                                                            _this.pontuacaoTotal += fr.pontuacao;
                                                                        }
                                                                    });
                                                                    quest_1.respostas.push(resp_1);
                                                                }
                                                            });
                                                        });
                                                        _this.questoesFinalizadas.push(quest_1);
                                                    }
                                                });
                                            });
                                        });
                                    });
                                }
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AlunoAtividadeAbrirPage.prototype.votar = function (idResposta, resposta) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Enviando'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.usuarioCorrente = this.autenticacaoService.getID();
                        this.alunoService.getByUsuario(this.usuarioCorrente).then(function (aluno) {
                            _this.turmaAlunoService.getByTurmaAluno(_this.idTurma, aluno[0].id)
                                .subscribe(function (turmaAluno) {
                                _this.turmaAlunoRespostaService.getByTurmaAlunoResposta(turmaAluno[0].id, idResposta)
                                    .subscribe(function (turmaResposta) {
                                    if (turmaResposta.length <= 0) {
                                        _this.turmaAlunoResp.resposta = idResposta;
                                        _this.turmaAlunoResp.turmaAluno = turmaAluno[0].id;
                                        _this.turmaAlunoResp.turma = turmaAluno[0].turma;
                                        _this.turmaAlunoRespostaService.add(_this.turmaAlunoResp).then(function () {
                                            turmaAluno[0].alunoPontuacao += resposta.pontuacao;
                                            _this.turmaAlunoService.update(turmaAluno[0].id, turmaAluno[0]).then(function () {
                                                aluno[0].pontuacao += resposta.pontuacao;
                                                aluno[0].nivel = Math.floor(aluno[0].pontuacao / 100);
                                                _this.alunoService.update(aluno[0].id, aluno[0]).then(function () {
                                                    loading.dismiss();
                                                });
                                            });
                                        });
                                    }
                                });
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AlunoAtividadeAbrirPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'app-aluno-atividade-abrir',
            template: __webpack_require__(/*! ./aluno-atividade-abrir.page.html */ "./src/app/pages/aluno-atividade-abrir/aluno-atividade-abrir.page.html"),
            styles: [__webpack_require__(/*! ./aluno-atividade-abrir.page.scss */ "./src/app/pages/aluno-atividade-abrir/aluno-atividade-abrir.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"],
            _services_atividade_service__WEBPACK_IMPORTED_MODULE_4__["AtividadeService"], src_app_services_turma_service__WEBPACK_IMPORTED_MODULE_10__["TurmaService"],
            src_app_services_turma_aluno_service__WEBPACK_IMPORTED_MODULE_9__["TurmaAlunoService"], _services_aluno_service__WEBPACK_IMPORTED_MODULE_2__["AlunoService"],
            src_app_services_questao_service__WEBPACK_IMPORTED_MODULE_1__["QuestaoService"], src_app_services_resposta_service__WEBPACK_IMPORTED_MODULE_8__["RespostaService"],
            src_app_services_turma_aluno_resposta_service__WEBPACK_IMPORTED_MODULE_11__["TurmaAlunoRespostaService"]])
    ], AlunoAtividadeAbrirPage);
    return AlunoAtividadeAbrirPage;
}());

var Questao = /** @class */ (function () {
    function Questao() {
        this.respostas = [];
    }
    Questao.prototype.Questao = function () {
        this.id = '';
        this.apelido = '';
        this.problema = '';
        this.respostas = [];
    };
    return Questao;
}());

var Resposta = /** @class */ (function () {
    function Resposta() {
    }
    Resposta.prototype.Resposta = function () {
        this.id = '';
        this.correta = false;
        this.conteudo = '';
        this.pontuacao = 0;
        this.escolhida = false;
    };
    return Resposta;
}());



/***/ })

}]);
//# sourceMappingURL=pages-aluno-atividade-abrir-aluno-atividade-abrir-module.js.map