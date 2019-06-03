(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-autenticacao-autenticacao-module"],{

/***/ "./src/app/pages/autenticacao/autenticacao.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/autenticacao/autenticacao.module.ts ***!
  \***********************************************************/
/*! exports provided: AutenticacaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutenticacaoPageModule", function() { return AutenticacaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _autenticacao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./autenticacao.page */ "./src/app/pages/autenticacao/autenticacao.page.ts");







var routes = [
    {
        path: '',
        component: _autenticacao_page__WEBPACK_IMPORTED_MODULE_6__["AutenticacaoPage"]
    }
];
var AutenticacaoPageModule = /** @class */ (function () {
    function AutenticacaoPageModule() {
    }
    AutenticacaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_autenticacao_page__WEBPACK_IMPORTED_MODULE_6__["AutenticacaoPage"]]
        })
    ], AutenticacaoPageModule);
    return AutenticacaoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/autenticacao/autenticacao.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/autenticacao/autenticacao.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <form #form=\"ngForm\" novalidate>\n    <ion-list>\n      <ion-item>\n        <ion-label stacked>E-mail</ion-label>\n        <ion-input type=\"text\" name=\"email\" [(ngModel)]=\"usuario.email\" #email=\"ngModel\" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"text-danger\">\n        O campo é obrigatório\n      </ion-item>\n      \n      <ion-item>\n        <ion-label stacked>Senha</ion-label>\n        <ion-input type=\"password\" name=\"password\" [(ngModel)]=\"usuario.senha\" #password=\"ngModel\" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"password.errors && (password.dirty || password.touched)\" class=\"text-danger\">\n        O campo é obrigatório\n      </ion-item>\n    </ion-list>\n    \n    <ion-button color=\"primary\" expand=\"full\" [disabled]=\"!form.form.valid\" (click)=\"signIn()\">Entrar</ion-button>\n    <ion-button color=\"primary\" expand=\"full\" (click)=\"createAccount()\">Criar conta</ion-button>\n  </form>\n  \n  <ion-button block clear expand=\"full\" (click)=\"resetPassword()\">Esqueci minha senha</ion-button>\n  \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/autenticacao/autenticacao.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/autenticacao/autenticacao.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGVudGljYWNhby9hdXRlbnRpY2FjYW8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/autenticacao/autenticacao.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/autenticacao/autenticacao.page.ts ***!
  \*********************************************************/
/*! exports provided: AutenticacaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutenticacaoPage", function() { return AutenticacaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AutenticacaoPage = /** @class */ (function () {
    function AutenticacaoPage(route, nav, toastController, autenticacaoService) {
        this.route = route;
        this.nav = nav;
        this.toastController = toastController;
        this.autenticacaoService = autenticacaoService;
        this.usuario = new _models_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
        this.tipoUsuario = null;
    }
    AutenticacaoPage.prototype.ngOnInit = function () {
        this.tipoUsuario = this.route.snapshot.params['tipo'];
    };
    AutenticacaoPage.prototype.resetPassword = function () {
        this.nav.navigateForward('/autenticacao-resetar-senha');
    };
    AutenticacaoPage.prototype.signIn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toastMessage_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.form.form.valid) {
                    toastMessage_1 = '';
                    this.autenticacaoService.signIn(this.usuario)
                        .then(function () {
                        if (_this.tipoUsuario == 'aluno') {
                            _this.nav.navigateForward('/aluno-inicio');
                        }
                        else if (_this.tipoUsuario == 'professor') {
                            _this.nav.navigateForward('/professor-inicio');
                        }
                    })
                        .catch(function (error) {
                        if (error.code == 'auth/invalid-email') {
                            toastMessage_1 = 'O e-mail digitado não é valido.';
                        }
                        else if (error.code == 'auth/user-disabled') {
                            toastMessage_1 = 'O usuário está desativado.';
                        }
                        else if (error.code == 'auth/user-not-found') {
                            toastMessage_1 = 'O usuário não foi encontrado.';
                        }
                        else if (error.code == 'auth/wrong-password') {
                            toastMessage_1 = 'A senha digitada não é valida.';
                        }
                        _this.presentToast(toastMessage_1);
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    AutenticacaoPage.prototype.createAccount = function () {
        this.nav.navigateForward('/autenticacao-criar-conta/' + this.tipoUsuario);
    };
    AutenticacaoPage.prototype.presentToast = function (message) {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"])
    ], AutenticacaoPage.prototype, "form", void 0);
    AutenticacaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-autenticacao',
            template: __webpack_require__(/*! ./autenticacao.page.html */ "./src/app/pages/autenticacao/autenticacao.page.html"),
            styles: [__webpack_require__(/*! ./autenticacao.page.scss */ "./src/app/pages/autenticacao/autenticacao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"]])
    ], AutenticacaoPage);
    return AutenticacaoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-autenticacao-autenticacao-module.js.map