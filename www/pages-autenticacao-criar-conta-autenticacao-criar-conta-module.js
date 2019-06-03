(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-autenticacao-criar-conta-autenticacao-criar-conta-module"],{

/***/ "./src/app/pages/autenticacao-criar-conta/autenticacao-criar-conta.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/autenticacao-criar-conta/autenticacao-criar-conta.module.ts ***!
  \***********************************************************************************/
/*! exports provided: AutenticacaoCriarContaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutenticacaoCriarContaPageModule", function() { return AutenticacaoCriarContaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _autenticacao_criar_conta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./autenticacao-criar-conta.page */ "./src/app/pages/autenticacao-criar-conta/autenticacao-criar-conta.page.ts");







var routes = [
    {
        path: '',
        component: _autenticacao_criar_conta_page__WEBPACK_IMPORTED_MODULE_6__["AutenticacaoCriarContaPage"]
    }
];
var AutenticacaoCriarContaPageModule = /** @class */ (function () {
    function AutenticacaoCriarContaPageModule() {
    }
    AutenticacaoCriarContaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_autenticacao_criar_conta_page__WEBPACK_IMPORTED_MODULE_6__["AutenticacaoCriarContaPage"]]
        })
    ], AutenticacaoCriarContaPageModule);
    return AutenticacaoCriarContaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/autenticacao-criar-conta/autenticacao-criar-conta.page.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/autenticacao-criar-conta/autenticacao-criar-conta.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Criar conta\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form #form=\"ngForm\" novalidate>\n    <ion-list>\n      <ion-item>\n        <ion-label stacked>Nome completo</ion-label>\n        <ion-input type=\"text\" name=\"nome\" [(ngModel)]=\"nomeCompleto\" #nome=\"ngModel\" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"nome.errors && (nome.dirty || nome.touched)\" class=\"text-danger\">\n        O campo é obrigatório\n      </ion-item>\n      \n      <ion-item>\n        <ion-label stacked>E-mail</ion-label>\n        <ion-input type=\"text\" name=\"email\" [(ngModel)]=\"usuario.email\" #email=\"ngModel\" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"text-danger\">\n        O campo é obrigatório\n      </ion-item>\n      \n      <ion-item>\n        <ion-label stacked>Senha</ion-label>\n        <ion-input type=\"password\" name=\"password\" [(ngModel)]=\"usuario.senha\" #password=\"ngModel\" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"password.errors && (password.dirty || password.touched)\" class=\"text-danger\">\n        O campo é obrigatório\n      </ion-item>\n    </ion-list>\n    <ion-button color=\"primary\" expand=\"full\" [disabled]=\"!form.form.valid\" (click)=\"createAccount()\">\n      Criar conta\n    </ion-button>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/autenticacao-criar-conta/autenticacao-criar-conta.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/autenticacao-criar-conta/autenticacao-criar-conta.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGVudGljYWNhby1jcmlhci1jb250YS9hdXRlbnRpY2FjYW8tY3JpYXItY29udGEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/autenticacao-criar-conta/autenticacao-criar-conta.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/autenticacao-criar-conta/autenticacao-criar-conta.page.ts ***!
  \*********************************************************************************/
/*! exports provided: AutenticacaoCriarContaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutenticacaoCriarContaPage", function() { return AutenticacaoCriarContaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var _services_aluno_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/aluno.service */ "./src/app/services/aluno.service.ts");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_professor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/professor.service */ "./src/app/services/professor.service.ts");









var AutenticacaoCriarContaPage = /** @class */ (function () {
    function AutenticacaoCriarContaPage(route, nav, toastController, autenticacaoService, alunoService, professorService) {
        this.route = route;
        this.nav = nav;
        this.toastController = toastController;
        this.autenticacaoService = autenticacaoService;
        this.alunoService = alunoService;
        this.professorService = professorService;
        this.usuario = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
        this.aluno = {
            usuario: '',
            nomeCompleto: '',
            imagem: 'capivara.jpg',
            nivel: 0,
            pontuacao: 0,
        };
        this.professor = {
            usuario: '',
            nomeCompleto: '',
            imagem: '',
        };
        this.tipoUsuario = null;
        this.nomeCompleto = null;
    }
    AutenticacaoCriarContaPage.prototype.ngOnInit = function () {
        this.tipoUsuario = this.route.snapshot.params['tipo'];
    };
    AutenticacaoCriarContaPage.prototype.createAccount = function () {
        var _this = this;
        if (this.form.form.valid) {
            var toastMessage_1 = '';
            this.autenticacaoService.createUser(this.usuario)
                .then(function (usuario) {
                //usuario.sendEmailVerification();
                //Após criar o usuário, cria o aluno/professor e faz ligação com o usuário
                if (_this.tipoUsuario == 'aluno') {
                    _this.aluno.usuario = _this.autenticacaoService.getID();
                    _this.aluno.nomeCompleto = _this.nomeCompleto;
                    _this.aluno.imagem = _this.getRandomInt(1, 40) + '.jpg';
                    _this.alunoService.add(_this.aluno).then(function () {
                        _this.nav.navigateForward('/aluno-inicio');
                    });
                }
                else if (_this.tipoUsuario == 'professor') {
                    _this.professor.usuario = _this.autenticacaoService.getID();
                    _this.professor.nomeCompleto = _this.nomeCompleto;
                    _this.professorService.add(_this.professor).then(function () {
                        _this.nav.navigateForward('/professor-inicio');
                    });
                }
            })
                .catch(function (error) {
                if (error.code == 'auth/email-already-in-use') {
                    toastMessage_1 = 'O e-mail digitado já existe.';
                }
                else if (error.code == 'auth/invalid-email') {
                    toastMessage_1 = 'O e-mail digitado não é valido.';
                }
                else if (error.code == 'auth/operation-not-allowed') {
                    toastMessage_1 = 'Não está habilitado criar usuários.';
                }
                else if (error.code == 'auth/weak-password') {
                    toastMessage_1 = 'A senha digitada é muito fraca.';
                }
                else {
                    toastMessage_1 = error.message;
                }
                _this.presentToast(toastMessage_1);
            });
        }
    };
    AutenticacaoCriarContaPage.prototype.presentToast = function (message) {
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
    AutenticacaoCriarContaPage.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], AutenticacaoCriarContaPage.prototype, "form", void 0);
    AutenticacaoCriarContaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'app-autenticacao-criar-conta',
            template: __webpack_require__(/*! ./autenticacao-criar-conta.page.html */ "./src/app/pages/autenticacao-criar-conta/autenticacao-criar-conta.page.html"),
            styles: [__webpack_require__(/*! ./autenticacao-criar-conta.page.scss */ "./src/app/pages/autenticacao-criar-conta/autenticacao-criar-conta.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__["AutenticacaoService"],
            _services_aluno_service__WEBPACK_IMPORTED_MODULE_3__["AlunoService"],
            src_app_services_professor_service__WEBPACK_IMPORTED_MODULE_8__["ProfessorService"]])
    ], AutenticacaoCriarContaPage);
    return AutenticacaoCriarContaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-autenticacao-criar-conta-autenticacao-criar-conta-module.js.map