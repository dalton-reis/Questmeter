(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-professor-atividade-criacao-professor-atividade-criacao-module"],{

/***/ "./src/app/pages/professor-atividade-criacao/professor-atividade-criacao.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/professor-atividade-criacao/professor-atividade-criacao.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProfessorAtividadeCriacaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorAtividadeCriacaoPageModule", function() { return ProfessorAtividadeCriacaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _professor_atividade_criacao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./professor-atividade-criacao.page */ "./src/app/pages/professor-atividade-criacao/professor-atividade-criacao.page.ts");







var routes = [
    {
        path: '',
        component: _professor_atividade_criacao_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorAtividadeCriacaoPage"]
    }
];
var ProfessorAtividadeCriacaoPageModule = /** @class */ (function () {
    function ProfessorAtividadeCriacaoPageModule() {
    }
    ProfessorAtividadeCriacaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_professor_atividade_criacao_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorAtividadeCriacaoPage"]]
        })
    ], ProfessorAtividadeCriacaoPageModule);
    return ProfessorAtividadeCriacaoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/professor-atividade-criacao/professor-atividade-criacao.page.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/professor-atividade-criacao/professor-atividade-criacao.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Atividade</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <div padding>\n    <ion-list lines=\"full\">\n      <ion-item *ngIf=\"atividade\">\n        <ion-label position=\"stacked\">Nome</ion-label>\n        <ion-input required type=\"text\" [(ngModel)]=\"atividade.nome\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"atividade\">\n        <ion-label position=\"stacked\">Problema/Desafio</ion-label>\n        <ion-textarea required rows=\"4\" [(ngModel)]=\"atividade.problema\"></ion-textarea>\n      </ion-item>\n      <!-- <ion-item *ngIf=\"atividade\">\n        <ion-select required placeholder=\"Tipo\" [(ngModel)]=\"atividade.tipo\">\n          <ion-select-option value=\"M\">Multipla escolha</ion-select-option>\n          <ion-select-option value=\"D\">Descritiva</ion-select-option>\n        </ion-select>\n      </ion-item> -->\n      <ion-item *ngIf=\"atividade\">\n        <ion-label position=\"stacked\">Termina em</ion-label>\n        <ion-datetime required displayFormat=\"DD/MM/YYYY hh:mm\" [(ngModel)]=\"atividade.dataTermino\"></ion-datetime>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"full\" (click)=\"save()\">Salvar</ion-button>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/professor-atividade-criacao/professor-atividade-criacao.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/professor-atividade-criacao/professor-atividade-criacao.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zlc3Nvci1hdGl2aWRhZGUtY3JpYWNhby9wcm9mZXNzb3ItYXRpdmlkYWRlLWNyaWFjYW8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/professor-atividade-criacao/professor-atividade-criacao.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/professor-atividade-criacao/professor-atividade-criacao.page.ts ***!
  \***************************************************************************************/
/*! exports provided: ProfessorAtividadeCriacaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorAtividadeCriacaoPage", function() { return ProfessorAtividadeCriacaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_professor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/professor.service */ "./src/app/services/professor.service.ts");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _services_atividade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/atividade.service */ "./src/app/services/atividade.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");







var ProfessorAtividadeCriacaoPage = /** @class */ (function () {
    function ProfessorAtividadeCriacaoPage(route, nav, loadingController, professorService, atividadeService, autenticacaoService) {
        this.route = route;
        this.nav = nav;
        this.loadingController = loadingController;
        this.professorService = professorService;
        this.atividadeService = atividadeService;
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
    }
    ProfessorAtividadeCriacaoPage.prototype.ngOnInit = function () { };
    ProfessorAtividadeCriacaoPage.prototype.save = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Salvando'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.usuarioCorrente = this.autenticacaoService.getID();
                        this.professorService.getByUsuario(this.usuarioCorrente).then(function (professor) {
                            _this.atividade.professor = professor[0].id;
                            _this.atividadeService.add(_this.atividade).then(function () {
                                loading.dismiss();
                                _this.nav.navigateForward('/professor-atividade');
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfessorAtividadeCriacaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-professor-atividade-criacao',
            template: __webpack_require__(/*! ./professor-atividade-criacao.page.html */ "./src/app/pages/professor-atividade-criacao/professor-atividade-criacao.page.html"),
            styles: [__webpack_require__(/*! ./professor-atividade-criacao.page.scss */ "./src/app/pages/professor-atividade-criacao/professor-atividade-criacao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _services_professor_service__WEBPACK_IMPORTED_MODULE_1__["ProfessorService"],
            _services_atividade_service__WEBPACK_IMPORTED_MODULE_3__["AtividadeService"], _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"]])
    ], ProfessorAtividadeCriacaoPage);
    return ProfessorAtividadeCriacaoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-professor-atividade-criacao-professor-atividade-criacao-module.js.map