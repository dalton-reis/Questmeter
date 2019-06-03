(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-aluno-resposta-aluno-resposta-module"],{

/***/ "./src/app/pages/aluno-resposta/aluno-resposta.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/aluno-resposta/aluno-resposta.module.ts ***!
  \***************************************************************/
/*! exports provided: AlunoRespostaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoRespostaPageModule", function() { return AlunoRespostaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _aluno_resposta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aluno-resposta.page */ "./src/app/pages/aluno-resposta/aluno-resposta.page.ts");







var routes = [
    {
        path: '',
        component: _aluno_resposta_page__WEBPACK_IMPORTED_MODULE_6__["AlunoRespostaPage"]
    }
];
var AlunoRespostaPageModule = /** @class */ (function () {
    function AlunoRespostaPageModule() {
    }
    AlunoRespostaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_aluno_resposta_page__WEBPACK_IMPORTED_MODULE_6__["AlunoRespostaPage"]]
        })
    ], AlunoRespostaPageModule);
    return AlunoRespostaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/aluno-resposta/aluno-resposta.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/aluno-resposta/aluno-resposta.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/aluno-atividade-abrir/\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Resposta</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-list lines=\"full\">\n      <ion-item *ngIf=\"resposta\">\n        <ion-label position=\"stacked\">Conteúdo</ion-label>\n        <ion-textarea disabled=\"true\" rows=\"3\" [(ngModel)]=\"resposta.conteudo\"></ion-textarea>\n      </ion-item>\n      <ion-item *ngIf=\"resposta\">\n        <ion-label position=\"stacked\">Votos</ion-label>\n        <ion-input disabled=\"true\" type=\"number\" [(ngModel)]=\"resposta.votos\"></ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"full\" (click)=\"votar()\" [disabled]=\"desabilitaBotaoVotar\">Votar</ion-button>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/aluno-resposta/aluno-resposta.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/aluno-resposta/aluno-resposta.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsdW5vLXJlc3Bvc3RhL2FsdW5vLXJlc3Bvc3RhLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/aluno-resposta/aluno-resposta.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/aluno-resposta/aluno-resposta.page.ts ***!
  \*************************************************************/
/*! exports provided: AlunoRespostaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoRespostaPage", function() { return AlunoRespostaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _services_aluno_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/aluno.service */ "./src/app/services/aluno.service.ts");
/* harmony import */ var _services_atividade_aluno_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/atividade-aluno.service */ "./src/app/services/atividade-aluno.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_resposta_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/resposta.service */ "./src/app/services/resposta.service.ts");








var AlunoRespostaPage = /** @class */ (function () {
    function AlunoRespostaPage(route, nav, toastController, loadingController, respostaService, atividadeAlunoService, alunoService, autenticacaoService) {
        this.route = route;
        this.nav = nav;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.respostaService = respostaService;
        this.atividadeAlunoService = atividadeAlunoService;
        this.alunoService = alunoService;
        this.autenticacaoService = autenticacaoService;
        this.resposta = {
            conteudo: '',
            atividade: '',
            correta: false,
            pontuacao: 0,
            votos: 0
        };
        this.idResposta = null;
        this.usuarioCorrente = null;
        this.desabilitaBotaoVotar = false;
    }
    AlunoRespostaPage.prototype.ngOnInit = function () {
        this.idResposta = this.route.snapshot.params['id'];
        if (this.idResposta) {
            this.load();
        }
    };
    AlunoRespostaPage.prototype.load = function () {
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
                        this.respostaService.get(this.idResposta).subscribe(function (resultado) {
                            loading.dismiss();
                            _this.resposta = resultado;
                            _this.usuarioCorrente = _this.autenticacaoService.getID();
                            _this.alunoService.getByUsuario(_this.usuarioCorrente).then(function (aluno) {
                                _this.atividadeAlunoService.getByAtividadeAlunoVoto(_this.resposta.atividade, aluno[0].id)
                                    .subscribe(function (resultado) {
                                    //se já respondeu deixa o botão 'Votar' bloqueado
                                    _this.desabilitaBotaoVotar = (resultado.length <= 0);
                                });
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AlunoRespostaPage.prototype.votar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.usuarioCorrente = this.autenticacaoService.getID();
                this.alunoService.getByUsuario(this.usuarioCorrente).then(function (aluno) {
                    _this.atividadeAlunoService.getByAtividadeAlunoVoto(_this.resposta.atividade, aluno[0].id)
                        .subscribe(function (resultado) {
                        if (resultado.length > 0) {
                            _this.resposta.votos++;
                            _this.respostaService.update(_this.idResposta, _this.resposta).then(function () {
                                resultado[0].alunoVotou = true;
                                resultado[0].alunoPontuacao = _this.resposta.pontuacao;
                                _this.atividadeAlunoService.update(resultado[0].id, resultado[0]).then(function () {
                                    _this.nav.navigateForward('/aluno-atividade-abrir/' + _this.resposta.atividade.substring(0, 7).toUpperCase());
                                });
                            });
                        }
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    AlunoRespostaPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 3000,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlunoRespostaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-aluno-resposta',
            template: __webpack_require__(/*! ./aluno-resposta.page.html */ "./src/app/pages/aluno-resposta/aluno-resposta.page.html"),
            styles: [__webpack_require__(/*! ./aluno-resposta.page.scss */ "./src/app/pages/aluno-resposta/aluno-resposta.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], src_app_services_resposta_service__WEBPACK_IMPORTED_MODULE_7__["RespostaService"],
            _services_atividade_aluno_service__WEBPACK_IMPORTED_MODULE_3__["AtividadeAlunoService"], _services_aluno_service__WEBPACK_IMPORTED_MODULE_2__["AlunoService"],
            _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_1__["AutenticacaoService"]])
    ], AlunoRespostaPage);
    return AlunoRespostaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-aluno-resposta-aluno-resposta-module.js.map