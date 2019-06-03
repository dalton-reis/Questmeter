(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-abertura-abertura-module"],{

/***/ "./src/app/pages/abertura/abertura.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/abertura/abertura.module.ts ***!
  \***************************************************/
/*! exports provided: AberturaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AberturaPageModule", function() { return AberturaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _abertura_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./abertura.page */ "./src/app/pages/abertura/abertura.page.ts");







var routes = [
    {
        path: '',
        component: _abertura_page__WEBPACK_IMPORTED_MODULE_6__["AberturaPage"]
    }
];
var AberturaPageModule = /** @class */ (function () {
    function AberturaPageModule() {
    }
    AberturaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_abertura_page__WEBPACK_IMPORTED_MODULE_6__["AberturaPage"]]
        })
    ], AberturaPageModule);
    return AberturaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/abertura/abertura.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/abertura/abertura.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <ion-item lines=\"none\">\n    <ion-label>Bem-vindo ao App</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Você é ...</ion-label>\n  </ion-item>\n  <ion-button expand=\"full\" (click)=\"autenticar('aluno')\">Aluno</ion-button>\n  <ion-button expand=\"full\" (click)=\"autenticar('professor')\">Professor</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/abertura/abertura.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/abertura/abertura.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FiZXJ0dXJhL2FiZXJ0dXJhLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/abertura/abertura.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/abertura/abertura.page.ts ***!
  \*************************************************/
/*! exports provided: AberturaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AberturaPage", function() { return AberturaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AberturaPage = /** @class */ (function () {
    function AberturaPage(nav) {
        this.nav = nav;
    }
    AberturaPage.prototype.ngOnInit = function () {
    };
    AberturaPage.prototype.autenticar = function (tipoUsuario) {
        this.nav.navigateForward('/autenticacao/' + tipoUsuario);
    };
    AberturaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-abertura',
            template: __webpack_require__(/*! ./abertura.page.html */ "./src/app/pages/abertura/abertura.page.html"),
            styles: [__webpack_require__(/*! ./abertura.page.scss */ "./src/app/pages/abertura/abertura.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], AberturaPage);
    return AberturaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-abertura-abertura-module.js.map