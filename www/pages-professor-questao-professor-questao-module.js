(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-professor-questao-professor-questao-module"],{

/***/ "./src/app/pages/professor-questao/professor-questao.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/professor-questao/professor-questao.module.ts ***!
  \*********************************************************************/
/*! exports provided: ProfessorQuestaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorQuestaoPageModule", function() { return ProfessorQuestaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _professor_questao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./professor-questao.page */ "./src/app/pages/professor-questao/professor-questao.page.ts");







var routes = [
    {
        path: '',
        component: _professor_questao_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorQuestaoPage"]
    }
];
var ProfessorQuestaoPageModule = /** @class */ (function () {
    function ProfessorQuestaoPageModule() {
    }
    ProfessorQuestaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_professor_questao_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorQuestaoPage"]]
        })
    ], ProfessorQuestaoPageModule);
    return ProfessorQuestaoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/professor-questao/professor-questao.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/professor-questao/professor-questao.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Questão</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list lines=\"full\">\n    <ion-item *ngIf=\"questao\">\n      <ion-label position=\"stacked\">Apelido</ion-label>\n      <ion-input required type=\"text\" max-length=\"10\" [(ngModel)]=\"questao.apelido\"></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"questao\">\n      <ion-label position=\"stacked\">Problema/Desafio</ion-label>\n      <ion-textarea required rows=\"4\" [(ngModel)]=\"questao.problema\"></ion-textarea>\n    </ion-item>\n  </ion-list>\n  <ion-button expand=\"full\" (click)=\"save()\">Salvar</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/professor-questao/professor-questao.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/professor-questao/professor-questao.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zlc3Nvci1xdWVzdGFvL3Byb2Zlc3Nvci1xdWVzdGFvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/professor-questao/professor-questao.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/professor-questao/professor-questao.page.ts ***!
  \*******************************************************************/
/*! exports provided: ProfessorQuestaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorQuestaoPage", function() { return ProfessorQuestaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_questao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/questao.service */ "./src/app/services/questao.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var ProfessorQuestaoPage = /** @class */ (function () {
    function ProfessorQuestaoPage(route, nav, loadingController, questaoService) {
        this.route = route;
        this.nav = nav;
        this.loadingController = loadingController;
        this.questaoService = questaoService;
        this.questao = {
            atividade: null,
            apelido: '',
            problema: '',
            dataCriacao: new Date()
        };
        this.idAtividade = null;
    }
    ProfessorQuestaoPage.prototype.ngOnInit = function () {
        this.idAtividade = this.route.snapshot.params['atividade'];
    };
    ProfessorQuestaoPage.prototype.save = function () {
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
                        this.questao.dataCriacao = new Date(Date.now());
                        this.questaoService.add(this.questao, this.idAtividade).then(function () {
                            loading.dismiss();
                            _this.questaoService.getByAtividade(_this.idAtividade).subscribe(function (resultado) {
                                _this.nav.navigateBack('/professor-questao-edicao/' + resultado[0].id);
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfessorQuestaoPage.prototype.onRemove = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.questaoService.remove(id);
                return [2 /*return*/];
            });
        });
    };
    ProfessorQuestaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-professor-questao',
            template: __webpack_require__(/*! ./professor-questao.page.html */ "./src/app/pages/professor-questao/professor-questao.page.html"),
            styles: [__webpack_require__(/*! ./professor-questao.page.scss */ "./src/app/pages/professor-questao/professor-questao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _services_questao_service__WEBPACK_IMPORTED_MODULE_1__["QuestaoService"]])
    ], ProfessorQuestaoPage);
    return ProfessorQuestaoPage;
}());



/***/ }),

/***/ "./src/app/services/questao.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/questao.service.ts ***!
  \*********************************************/
/*! exports provided: QuestaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestaoService", function() { return QuestaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var QuestaoService = /** @class */ (function () {
    function QuestaoService(db) {
        this.db = db;
        this.collectionQuestoes = db.collection('questoes');
        this.listQuestoes = this.collectionQuestoes.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    }
    QuestaoService.prototype.getAll = function () {
        return this.listQuestoes;
    };
    QuestaoService.prototype.get = function (id) {
        return this.collectionQuestoes.doc(id).valueChanges();
    };
    QuestaoService.prototype.getByAtividade = function (atividade) {
        return this.db.collection('questoes', function (ref) { return ref.where('atividade', '==', atividade).orderBy("dataCriacao", "desc"); }).
            snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    };
    QuestaoService.prototype.getByAtividadeAsc = function (atividade) {
        return this.db.collection('questoes', function (ref) { return ref.where('atividade', '==', atividade).orderBy("dataCriacao"); }).
            snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    };
    QuestaoService.prototype.add = function (questao, atividade) {
        questao.atividade = atividade;
        return this.collectionQuestoes.add(questao);
    };
    QuestaoService.prototype.update = function (id, questao) {
        return this.collectionQuestoes.doc(id).update(questao);
    };
    QuestaoService.prototype.remove = function (id) {
        return this.collectionQuestoes.doc(id).delete();
    };
    QuestaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], QuestaoService);
    return QuestaoService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-professor-questao-professor-questao-module.js.map