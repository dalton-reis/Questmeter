(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-autenticacao-resetar-senha-autenticacao-resetar-senha-module"],{

/***/ "./src/app/pages/autenticacao-resetar-senha/autenticacao-resetar-senha.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/autenticacao-resetar-senha/autenticacao-resetar-senha.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AutenticacaoResetarSenhaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutenticacaoResetarSenhaPageModule", function() { return AutenticacaoResetarSenhaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _autenticacao_resetar_senha_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./autenticacao-resetar-senha.page */ "./src/app/pages/autenticacao-resetar-senha/autenticacao-resetar-senha.page.ts");







var routes = [
    {
        path: '',
        component: _autenticacao_resetar_senha_page__WEBPACK_IMPORTED_MODULE_6__["AutenticacaoResetarSenhaPage"]
    }
];
var AutenticacaoResetarSenhaPageModule = /** @class */ (function () {
    function AutenticacaoResetarSenhaPageModule() {
    }
    AutenticacaoResetarSenhaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_autenticacao_resetar_senha_page__WEBPACK_IMPORTED_MODULE_6__["AutenticacaoResetarSenhaPage"]]
        })
    ], AutenticacaoResetarSenhaPageModule);
    return AutenticacaoResetarSenhaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/autenticacao-resetar-senha/autenticacao-resetar-senha.page.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/autenticacao-resetar-senha/autenticacao-resetar-senha.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Resetar minha senha\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <form #form=\"ngForm\" novalidate>\n      <ion-list>\n  \n        <ion-item>\n          <ion-label stacked>E-mail</ion-label>\n          <ion-input type=\"text\" name=\"email\" [(ngModel)]=\"userEmail\" #email=\"ngModel\" required></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"text-danger\">\n          O campo é obrigatório\n        </ion-item>\n  \n      </ion-list>\n  \n      <ion-button block color=\"primary\" [disabled]=\"!form.form.valid\" (click)=\"resetPassword()\">\n        Resetar minha senha\n      </ion-button>\n    </form>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/autenticacao-resetar-senha/autenticacao-resetar-senha.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/autenticacao-resetar-senha/autenticacao-resetar-senha.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGVudGljYWNhby1yZXNldGFyLXNlbmhhL2F1dGVudGljYWNhby1yZXNldGFyLXNlbmhhLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/autenticacao-resetar-senha/autenticacao-resetar-senha.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/autenticacao-resetar-senha/autenticacao-resetar-senha.page.ts ***!
  \*************************************************************************************/
/*! exports provided: AutenticacaoResetarSenhaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutenticacaoResetarSenhaPage", function() { return AutenticacaoResetarSenhaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var AutenticacaoResetarSenhaPage = /** @class */ (function () {
    function AutenticacaoResetarSenhaPage(nav, toastController, autenticacaoService) {
        this.nav = nav;
        this.toastController = toastController;
        this.autenticacaoService = autenticacaoService;
        this.userEmail = '';
    }
    AutenticacaoResetarSenhaPage.prototype.ngOnInit = function () {
    };
    AutenticacaoResetarSenhaPage.prototype.resetPassword = function () {
        var _this = this;
        if (this.form.form.valid) {
            var toastMessage_1 = '';
            this.autenticacaoService.resetPassword(this.userEmail)
                .then(function () {
                _this.nav.navigateForward('/autenticacao/professor');
            })
                .catch(function (error) {
                if (error.code == 'auth/invalid-email') {
                    toastMessage_1 = 'O e-mail digitado não é valido.';
                }
                else if (error.code == 'auth/user-not-found') {
                    toastMessage_1 = 'O usuário não foi encontrado.';
                }
                _this.presentToast(toastMessage_1);
            });
        }
    };
    AutenticacaoResetarSenhaPage.prototype.presentToast = function (message) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], AutenticacaoResetarSenhaPage.prototype, "form", void 0);
    AutenticacaoResetarSenhaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-autenticacao-resetar-senha',
            template: __webpack_require__(/*! ./autenticacao-resetar-senha.page.html */ "./src/app/pages/autenticacao-resetar-senha/autenticacao-resetar-senha.page.html"),
            styles: [__webpack_require__(/*! ./autenticacao-resetar-senha.page.scss */ "./src/app/pages/autenticacao-resetar-senha/autenticacao-resetar-senha.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_1__["AutenticacaoService"]])
    ], AutenticacaoResetarSenhaPage);
    return AutenticacaoResetarSenhaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-autenticacao-resetar-senha-autenticacao-resetar-senha-module.js.map