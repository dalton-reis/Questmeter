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

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/professor-atividade/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Atividade</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <div padding>\n    <ion-list lines=\"full\">\n      <ion-item *ngIf=\"atividade\">\n        <ion-label position=\"stacked\">Disciplina</ion-label>\n        <ion-input required type=\"text\" max-length=\"5\" [(ngModel)]=\"atividade.disciplina\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"atividade\">\n        <ion-label position=\"stacked\">Nome</ion-label>\n        <ion-input required type=\"text\" max-length=\"10\" [(ngModel)]=\"atividade.nome\"></ion-input>\n      </ion-item>\n      <!-- <ion-item *ngIf=\"atividade\">\n        <ion-label position=\"stacked\">Termina em</ion-label>\n        <ion-datetime displayFormat=\"DD/MM/YYYY HH:mm\" [(ngModel)]=\"atividade.dataTermino\"></ion-datetime>\n      </ion-item> -->\n    </ion-list>\n    <ion-button expand=\"full\" (click)=\"save()\">Salvar</ion-button>\n  </div>\n</ion-content>\n"

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
            professor: '',
            disciplina: '',
            nome: '',
            dataTermino: new Date(),
            dataCriacao: new Date()
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
                            _this.atividade.dataCriacao = new Date(Date.now());
                            _this.atividadeService.add(_this.atividade).then(function () {
                                loading.dismiss();
                                _this.atividadeService.getByProfessorOrdenaPorData(_this.atividade.professor).subscribe(function (resultado) {
                                    _this.nav.navigateBack('/professor-atividade-edicao/' + resultado[0].id);
                                });
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



/***/ }),

/***/ "./src/app/services/atividade.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/atividade.service.ts ***!
  \***********************************************/
/*! exports provided: AtividadeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtividadeService", function() { return AtividadeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AtividadeService = /** @class */ (function () {
    function AtividadeService(db) {
        this.db = db;
        this.collectionAtividades = db.collection('atividades');
        this.listAtividades = this.collectionAtividades.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    }
    AtividadeService.prototype.getAll = function () {
        return this.listAtividades;
    };
    AtividadeService.prototype.get = function (id) {
        return this.collectionAtividades.doc(id).valueChanges();
    };
    //modificar: pegar a atividade que o aluno pertence
    AtividadeService.prototype.getByCodigo = function (codigo) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.collection('atividades', function (ref) { return ref.where('codigo', '==', codigo); }).
                snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
                });
            })).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    AtividadeService.prototype.getByProfessor = function (professor) {
        return this.db.collection('atividades', function (ref) { return ref.where('professor', '==', professor).orderBy("disciplina").orderBy("nome"); }).
            snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    };
    AtividadeService.prototype.getByProfessorOrdenaPorData = function (professor) {
        return this.db.collection('atividades', function (ref) { return ref.where('professor', '==', professor).orderBy("dataCriacao", "desc"); }).
            snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    };
    AtividadeService.prototype.add = function (atividade) {
        return this.collectionAtividades.add(atividade);
    };
    AtividadeService.prototype.update = function (id, atividade) {
        return this.collectionAtividades.doc(id).update(atividade);
    };
    AtividadeService.prototype.remove = function (id) {
        return this.collectionAtividades.doc(id).delete();
    };
    AtividadeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], AtividadeService);
    return AtividadeService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-professor-atividade-criacao-professor-atividade-criacao-module.js.map