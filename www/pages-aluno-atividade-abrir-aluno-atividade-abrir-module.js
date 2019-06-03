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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/aluno-atividade/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Atividade</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <div padding>\n    <ion-segment [(ngModel)]=\"segmentAtividade\" mode=\"ios\">\n      <ion-segment-button value=\"edicao\">\n        <ion-label>Informações</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"respostas\">\n        <ion-label>Respostas</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  \n  <div [ngSwitch]=\"segmentAtividade\">\n    \n    <div *ngSwitchCase=\"'edicao'\">\n      <ion-list lines=\"full\">\n        <ion-item *ngIf=\"atividade\">\n          <ion-label position=\"stacked\">Nome</ion-label>\n          <ion-input disabled=\"true\" type=\"text\" [(ngModel)]=\"atividade.nome\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"atividade\">\n          <ion-label position=\"stacked\">Problema/Desafio</ion-label>\n          <ion-textarea disabled=\"true\" rows=\"4\" [(ngModel)]=\"atividade.problema\"></ion-textarea>\n        </ion-item>\n        <ion-item *ngIf=\"atividade\">\n          <ion-label position=\"stacked\">Termina em</ion-label>\n          <ion-datetime disabled=\"true\" displayFormat=\"DD/MM/YYYY hh:mm\" [(ngModel)]=\"atividade.dataTermino\"></ion-datetime>\n        </ion-item>\n      </ion-list>\n    </div>\n    \n    <div *ngSwitchCase=\"'respostas'\">\n      <ion-list>\n        <ion-item-sliding *ngFor=\"let resposta of respostas\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title>Votos: {{resposta.votos}}</ion-card-title>\n            </ion-card-header>\n            \n            <ion-card-content>\n              {{resposta.conteudo}}\n            </ion-card-content>\n            <ion-button end (click)=\"votar(resposta.id, resposta)\" *ngIf=\"mostraBotaoVotar\" style=\"float: right; margin-right: 2%\">Votar</ion-button>\n          </ion-card>\n        </ion-item-sliding>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>\n"

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
/*! exports provided: AlunoAtividadeAbrirPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoAtividadeAbrirPage", function() { return AlunoAtividadeAbrirPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_aluno_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/aluno.service */ "./src/app/services/aluno.service.ts");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _services_atividade_aluno_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/atividade-aluno.service */ "./src/app/services/atividade-aluno.service.ts");
/* harmony import */ var _services_atividade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/atividade.service */ "./src/app/services/atividade.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_resposta_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/resposta.service */ "./src/app/services/resposta.service.ts");









var AlunoAtividadeAbrirPage = /** @class */ (function () {
    function AlunoAtividadeAbrirPage(route, nav, loadingController, atividadeService, respostaService, atividadeAlunoService, alunoService, autenticacaoService) {
        this.route = route;
        this.nav = nav;
        this.loadingController = loadingController;
        this.atividadeService = atividadeService;
        this.respostaService = respostaService;
        this.atividadeAlunoService = atividadeAlunoService;
        this.alunoService = alunoService;
        this.autenticacaoService = autenticacaoService;
        this.atividade = {
            nome: '',
            professor: '',
            problema: '',
            tipo: '',
            dataTermino: new Date(),
            iniciada: false,
            codigo: ''
        };
        this.usuarioCorrente = null;
        this.idAtividade = null;
        this.segmentAtividade = 'edicao';
        this.mostraBotaoVotar = false;
    }
    AlunoAtividadeAbrirPage.prototype.ngOnInit = function () {
        var _this = this;
        var codigo = this.route.snapshot.params['codigo'];
        if (codigo) {
            this.atividadeService.getByCodigo(codigo).then(function (resultado) {
                _this.idAtividade = resultado[0].id;
                if (_this.idAtividade) {
                    _this.load();
                    _this.respostaService.getByAtividade(_this.idAtividade).subscribe(function (resultado) {
                        _this.respostas = resultado;
                    });
                }
            });
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
                        this.atividadeService.get(this.idAtividade).subscribe(function (resultado) {
                            loading.dismiss();
                            _this.atividade = resultado;
                            _this.usuarioCorrente = _this.autenticacaoService.getID();
                            _this.alunoService.getByUsuario(_this.usuarioCorrente).then(function (aluno) {
                                _this.atividadeAlunoService.getByAtividadeAlunoVoto(_this.idAtividade, aluno[0].id)
                                    .subscribe(function (resultado) {
                                    //se já respondeu deixa o botão 'Votar' bloqueado
                                    _this.mostraBotaoVotar = (resultado.length > 0);
                                });
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AlunoAtividadeAbrirPage.prototype.votar = function (idResposta, resposta) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.usuarioCorrente = this.autenticacaoService.getID();
                this.alunoService.getByUsuario(this.usuarioCorrente).then(function (aluno) {
                    _this.atividadeAlunoService.getByAtividadeAlunoVoto(resposta.atividade, aluno[0].id)
                        .subscribe(function (resultado) {
                        if (resultado.length > 0) {
                            resposta.votos++;
                            _this.respostaService.update(idResposta, resposta).then(function () {
                                resultado[0].alunoVotou = true;
                                resultado[0].alunoPontuacao = resposta.pontuacao;
                                _this.atividadeAlunoService.update(resultado[0].id, resultado[0]).then(function () {
                                    //VER COM O DALTON
                                    // if (resposta.correta)
                                    //   resposta.pontuacao += 10;
                                    aluno[0].pontuacao += resposta.pontuacao;
                                    aluno[0].nivel = Math.floor(aluno[0].pontuacao / 100);
                                    console.log('pontuacao', aluno[0].pontuacao);
                                    console.log('nivel', aluno[0].nivel);
                                    _this.alunoService.update(aluno[0].id, aluno[0]).then(function () {
                                        _this.nav.navigateForward('/aluno-atividade-abrir/' + resposta.atividade.substring(0, 7).toUpperCase());
                                    });
                                });
                            });
                        }
                    });
                });
                return [2 /*return*/];
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
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _services_atividade_service__WEBPACK_IMPORTED_MODULE_4__["AtividadeService"], src_app_services_resposta_service__WEBPACK_IMPORTED_MODULE_8__["RespostaService"],
            _services_atividade_aluno_service__WEBPACK_IMPORTED_MODULE_3__["AtividadeAlunoService"], _services_aluno_service__WEBPACK_IMPORTED_MODULE_1__["AlunoService"],
            _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"]])
    ], AlunoAtividadeAbrirPage);
    return AlunoAtividadeAbrirPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-aluno-atividade-abrir-aluno-atividade-abrir-module.js.map