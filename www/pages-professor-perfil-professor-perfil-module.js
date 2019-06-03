(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-professor-perfil-professor-perfil-module"],{

/***/ "./src/app/pages/professor-perfil/professor-perfil.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/professor-perfil/professor-perfil.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProfessorPerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorPerfilPageModule", function() { return ProfessorPerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _professor_perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./professor-perfil.page */ "./src/app/pages/professor-perfil/professor-perfil.page.ts");







var routes = [
    {
        path: '',
        component: _professor_perfil_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorPerfilPage"]
    }
];
var ProfessorPerfilPageModule = /** @class */ (function () {
    function ProfessorPerfilPageModule() {
    }
    ProfessorPerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_professor_perfil_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorPerfilPage"]]
        })
    ], ProfessorPerfilPageModule);
    return ProfessorPerfilPageModule;
}());



/***/ }),

/***/ "./src/app/pages/professor-perfil/professor-perfil.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/professor-perfil/professor-perfil.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>Perfil</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list lines=\"full\">\n        <ion-item *ngIf=\"professor\">\n          <ion-label position=\"stacked\">Nome completo</ion-label>\n          <ion-input disabled=\"true\" type=\"text\" [(ngModel)]=\"professor.nomeCompleto\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"emailUsuarioCorrente\">\n          <ion-label position=\"stacked\">E-mail</ion-label>\n          <ion-input disabled=\"true\" type=\"email\" [(ngModel)]=\"emailUsuarioCorrente\"></ion-input>\n        </ion-item>\n    </ion-list>\n    <ion-button expand=\"full\">Excluir conta - ver</ion-button>\n    <ion-button expand=\"full\">Sair - ver</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/professor-perfil/professor-perfil.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/professor-perfil/professor-perfil.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zlc3Nvci1wZXJmaWwvcHJvZmVzc29yLXBlcmZpbC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/professor-perfil/professor-perfil.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/professor-perfil/professor-perfil.page.ts ***!
  \*****************************************************************/
/*! exports provided: ProfessorPerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorPerfilPage", function() { return ProfessorPerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _services_professor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/professor.service */ "./src/app/services/professor.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var ProfessorPerfilPage = /** @class */ (function () {
    function ProfessorPerfilPage(loadingController, professorService, autenticacaoService) {
        this.loadingController = loadingController;
        this.professorService = professorService;
        this.autenticacaoService = autenticacaoService;
        this.professor = {
            usuario: '',
            nomeCompleto: '',
            imagem: ''
        };
        this.emailUsuarioCorrente = null;
        this.usuarioCorrente = null;
    }
    ProfessorPerfilPage.prototype.ngOnInit = function () {
        this.load();
    };
    ProfessorPerfilPage.prototype.load = function () {
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
                        this.emailUsuarioCorrente = this.autenticacaoService.getEmail();
                        this.usuarioCorrente = this.autenticacaoService.getID();
                        this.professorService.getByUsuario(this.usuarioCorrente).then(function (professor) {
                            loading.dismiss();
                            _this.professor = professor[0];
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfessorPerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-professor-perfil',
            template: __webpack_require__(/*! ./professor-perfil.page.html */ "./src/app/pages/professor-perfil/professor-perfil.page.html"),
            styles: [__webpack_require__(/*! ./professor-perfil.page.scss */ "./src/app/pages/professor-perfil/professor-perfil.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _services_professor_service__WEBPACK_IMPORTED_MODULE_2__["ProfessorService"], _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_1__["AutenticacaoService"]])
    ], ProfessorPerfilPage);
    return ProfessorPerfilPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-professor-perfil-professor-perfil-module.js.map