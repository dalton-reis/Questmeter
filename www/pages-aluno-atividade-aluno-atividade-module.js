(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-aluno-atividade-aluno-atividade-module"],{

/***/ "./src/app/pages/aluno-atividade/aluno-atividade.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/aluno-atividade/aluno-atividade.module.ts ***!
  \*****************************************************************/
/*! exports provided: AlunoAtividadePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoAtividadePageModule", function() { return AlunoAtividadePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _aluno_atividade_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aluno-atividade.page */ "./src/app/pages/aluno-atividade/aluno-atividade.page.ts");







var routes = [
    {
        path: '',
        component: _aluno_atividade_page__WEBPACK_IMPORTED_MODULE_6__["AlunoAtividadePage"]
    }
];
var AlunoAtividadePageModule = /** @class */ (function () {
    function AlunoAtividadePageModule() {
    }
    AlunoAtividadePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_aluno_atividade_page__WEBPACK_IMPORTED_MODULE_6__["AlunoAtividadePage"]]
        })
    ], AlunoAtividadePageModule);
    return AlunoAtividadePageModule;
}());



/***/ }),

/***/ "./src/app/pages/aluno-atividade/aluno-atividade.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/aluno-atividade/aluno-atividade.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>Atividades</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let atividade of atividades\">\n      <ion-item lines=\"inset\" button [routerLink]=\"['/aluno-atividade-abrir', atividade.codigo]\">\n        <ion-label>{{ atividade.nome }}</ion-label>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/aluno-atividade/aluno-atividade.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/aluno-atividade/aluno-atividade.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsdW5vLWF0aXZpZGFkZS9hbHVuby1hdGl2aWRhZGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/aluno-atividade/aluno-atividade.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/aluno-atividade/aluno-atividade.page.ts ***!
  \***************************************************************/
/*! exports provided: AlunoAtividadePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoAtividadePage", function() { return AlunoAtividadePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_atividade_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/atividade.service */ "./src/app/services/atividade.service.ts");
/* harmony import */ var _services_atividade_aluno_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/atividade-aluno.service */ "./src/app/services/atividade-aluno.service.ts");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _services_aluno_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/aluno.service */ "./src/app/services/aluno.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var AlunoAtividadePage = /** @class */ (function () {
    function AlunoAtividadePage(atividadeService, alunoService, atividadeAlunoService, autenticacaoService) {
        this.atividadeService = atividadeService;
        this.alunoService = alunoService;
        this.atividadeAlunoService = atividadeAlunoService;
        this.autenticacaoService = autenticacaoService;
        this.usuarioCorrente = null;
        this.atividades = [];
    }
    AlunoAtividadePage.prototype.ngOnInit = function () {
        var _this = this;
        this.atividades = [];
        this.usuarioCorrente = this.autenticacaoService.getID();
        this.alunoService.getByUsuario(this.usuarioCorrente).then(function (aluno) {
            _this.atividadeAlunoService.getByAluno(aluno[0].id)
                .subscribe(function (resultado) {
                resultado.forEach(function (f) {
                    return _this.atividadeService.get(f.atividade).subscribe(function (atividade) {
                        //verifica se a atividade já existe no array
                        if (_this.atividades.findIndex(function (v) { return v.codigo == atividade.codigo; }) < 0) {
                            _this.atividades.push(atividade);
                        }
                    });
                });
            });
        });
    };
    AlunoAtividadePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-aluno-atividade',
            template: __webpack_require__(/*! ./aluno-atividade.page.html */ "./src/app/pages/aluno-atividade/aluno-atividade.page.html"),
            styles: [__webpack_require__(/*! ./aluno-atividade.page.scss */ "./src/app/pages/aluno-atividade/aluno-atividade.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_atividade_service__WEBPACK_IMPORTED_MODULE_1__["AtividadeService"], _services_aluno_service__WEBPACK_IMPORTED_MODULE_4__["AlunoService"],
            _services_atividade_aluno_service__WEBPACK_IMPORTED_MODULE_2__["AtividadeAlunoService"], _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"]])
    ], AlunoAtividadePage);
    return AlunoAtividadePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-aluno-atividade-aluno-atividade-module.js.map