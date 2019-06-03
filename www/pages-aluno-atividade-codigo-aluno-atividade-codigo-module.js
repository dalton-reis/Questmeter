(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-aluno-atividade-codigo-aluno-atividade-codigo-module"],{

/***/ "./src/app/pages/aluno-atividade-codigo/aluno-atividade-codigo.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/aluno-atividade-codigo/aluno-atividade-codigo.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AlunoAtividadeCodigoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoAtividadeCodigoPageModule", function() { return AlunoAtividadeCodigoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _aluno_atividade_codigo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aluno-atividade-codigo.page */ "./src/app/pages/aluno-atividade-codigo/aluno-atividade-codigo.page.ts");







var routes = [
    {
        path: '',
        component: _aluno_atividade_codigo_page__WEBPACK_IMPORTED_MODULE_6__["AlunoAtividadeCodigoPage"]
    }
];
var AlunoAtividadeCodigoPageModule = /** @class */ (function () {
    function AlunoAtividadeCodigoPageModule() {
    }
    AlunoAtividadeCodigoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_aluno_atividade_codigo_page__WEBPACK_IMPORTED_MODULE_6__["AlunoAtividadeCodigoPage"]]
        })
    ], AlunoAtividadeCodigoPageModule);
    return AlunoAtividadeCodigoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/aluno-atividade-codigo/aluno-atividade-codigo.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/aluno-atividade-codigo/aluno-atividade-codigo.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"tertiary\">\n      <ion-title>Entrar em uma atividade</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <div padding>\n      \n      <ion-label>Insira aqui o código da atividade disponibilizado pelo professor</ion-label>\n  \n      <ion-item>\n        <!-- <ion-label position=\"stacked\">Código da atividade</ion-label> -->\n        <ion-input required type=\"text\" placeholder=\"Código da atividade\" [(ngModel)]=\"codigoAtividade\"></ion-input>\n      </ion-item>\n      <ion-button expand=\"full\" (click)=\"entrarNaAtividade()\">Entrar</ion-button>\n      \n    </div>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/aluno-atividade-codigo/aluno-atividade-codigo.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/aluno-atividade-codigo/aluno-atividade-codigo.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsdW5vLWF0aXZpZGFkZS1jb2RpZ28vYWx1bm8tYXRpdmlkYWRlLWNvZGlnby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/aluno-atividade-codigo/aluno-atividade-codigo.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/aluno-atividade-codigo/aluno-atividade-codigo.page.ts ***!
  \*****************************************************************************/
/*! exports provided: AlunoAtividadeCodigoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoAtividadeCodigoPage", function() { return AlunoAtividadeCodigoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _services_aluno_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/aluno.service */ "./src/app/services/aluno.service.ts");
/* harmony import */ var _services_atividade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/atividade.service */ "./src/app/services/atividade.service.ts");
/* harmony import */ var _services_atividade_aluno_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/atividade-aluno.service */ "./src/app/services/atividade-aluno.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");







var AlunoAtividadeCodigoPage = /** @class */ (function () {
    function AlunoAtividadeCodigoPage(nav, loadingController, toastController, atividadeAlunoService, atividadeService, alunoService, autenticacaoService) {
        this.nav = nav;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.atividadeAlunoService = atividadeAlunoService;
        this.atividadeService = atividadeService;
        this.alunoService = alunoService;
        this.autenticacaoService = autenticacaoService;
        this.atividadeAluno = {
            atividade: '',
            aluno: '',
            alunoVotou: false,
            alunoPontuacao: 0
        };
        this.codigoAtividade = null;
        this.usuarioCorrente = null;
    }
    AlunoAtividadeCodigoPage.prototype.ngOnInit = function () { };
    AlunoAtividadeCodigoPage.prototype.entrarNaAtividade = function () {
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
                        if (this.codigoAtividade) {
                            this.usuarioCorrente = this.autenticacaoService.getID();
                            this.atividadeService.getByCodigo(this.codigoAtividade).then(function (atividade) {
                                _this.alunoService.getByUsuario(_this.usuarioCorrente).then(function (aluno) {
                                    _this.atividadeAlunoService.getByAtividadeAluno(atividade[0].id, aluno[0].id)
                                        .subscribe(function (resultado) {
                                        //arrumar
                                        if (resultado.length <= 0) {
                                            _this.atividadeAluno.atividade = atividade[0].id;
                                            _this.atividadeAluno.aluno = aluno[0].id;
                                            _this.atividadeAlunoService.add(_this.atividadeAluno).then(function () {
                                                loading.dismiss();
                                                //this.nav.navigateForward('/tabs-aluno/aluno-atividade');
                                            });
                                        } //else {
                                        //   loading.dismiss();
                                        //   this.presentToast('Você já está adicionado nesta atividade.');
                                        // }
                                    });
                                });
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AlunoAtividadeCodigoPage.prototype.presentToast = function (message) {
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
    AlunoAtividadeCodigoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-aluno-atividade-codigo',
            template: __webpack_require__(/*! ./aluno-atividade-codigo.page.html */ "./src/app/pages/aluno-atividade-codigo/aluno-atividade-codigo.page.html"),
            styles: [__webpack_require__(/*! ./aluno-atividade-codigo.page.scss */ "./src/app/pages/aluno-atividade-codigo/aluno-atividade-codigo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _services_atividade_aluno_service__WEBPACK_IMPORTED_MODULE_4__["AtividadeAlunoService"],
            _services_atividade_service__WEBPACK_IMPORTED_MODULE_3__["AtividadeService"], _services_aluno_service__WEBPACK_IMPORTED_MODULE_2__["AlunoService"],
            _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_1__["AutenticacaoService"]])
    ], AlunoAtividadeCodigoPage);
    return AlunoAtividadeCodigoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-aluno-atividade-codigo-aluno-atividade-codigo-module.js.map