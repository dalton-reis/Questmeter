(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-professor-atividade-edicao-professor-atividade-edicao-module"],{

/***/ "./src/app/pages/professor-atividade-edicao/professor-atividade-edicao.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/professor-atividade-edicao/professor-atividade-edicao.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ProfessorAtividadeEdicaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorAtividadeEdicaoPageModule", function() { return ProfessorAtividadeEdicaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _professor_atividade_edicao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./professor-atividade-edicao.page */ "./src/app/pages/professor-atividade-edicao/professor-atividade-edicao.page.ts");







var routes = [
    {
        path: '',
        component: _professor_atividade_edicao_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorAtividadeEdicaoPage"]
    }
];
var ProfessorAtividadeEdicaoPageModule = /** @class */ (function () {
    function ProfessorAtividadeEdicaoPageModule() {
    }
    ProfessorAtividadeEdicaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_professor_atividade_edicao_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorAtividadeEdicaoPage"]]
        })
    ], ProfessorAtividadeEdicaoPageModule);
    return ProfessorAtividadeEdicaoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/professor-atividade-edicao/professor-atividade-edicao.page.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/professor-atividade-edicao/professor-atividade-edicao.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/professor-inicio\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Atividade</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <div padding>\n    <ion-segment [(ngModel)]=\"segmentAtividade\" mode=\"ios\">\n      <ion-segment-button value=\"edicao\">\n        <ion-label>Informações</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"questoes\">\n        <ion-label>Questões</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"turmas\">\n        <ion-label>Turmas</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  \n  <div [ngSwitch]=\"segmentAtividade\">\n    \n    <div *ngSwitchCase=\"'edicao'\">\n      <ion-list lines=\"full\">\n        <ion-item *ngIf=\"atividade\">\n          <ion-label position=\"stacked\">Disciplina</ion-label>\n          <ion-input required type=\"text\" max-length=\"5\" [(ngModel)]=\"atividade.disciplina\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"atividade\">\n          <ion-label position=\"stacked\">Nome</ion-label>\n          <ion-input required type=\"text\" max-length=\"10\" [(ngModel)]=\"atividade.nome\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"atividade\">\n          <ion-label position=\"stacked\">Termina em</ion-label>\n          <ion-datetime displayFormat=\"DD/MM/YYYY HH:mm\" [(ngModel)]=\"atividade.dataTermino\"></ion-datetime>\n        </ion-item>\n      </ion-list>\n      <ion-button expand=\"full\" (click)=\"save()\">Salvar</ion-button>\n      <ion-button expand=\"full\" (click)=\"gerarCodigoTurma()\">Gerar turma</ion-button>\n      <ion-button expand=\"full\" (click)=\"apresentar()\">Apresentar</ion-button>\n    </div>\n    \n    <div *ngSwitchCase=\"'questoes'\">\n      <ion-list>\n        <ion-item-sliding *ngFor=\"let questao of questoes\">\n          <ion-item lines=\"inset\" button [routerLink]=\"['/professor-questao-edicao', questao.id]\">\n            <ion-label>{{ questao.apelido }}</ion-label>\n          </ion-item>\n          \n          <ion-item-options side=\"end\">\n            <ion-item-option (click)=\"onRemoveQuestao(questao.id)\" color=\"danger\">\n              <ion-label>Apagar</ion-label>\n            </ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n      <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button [routerLink]=\"['/professor-questao/atividade', idAtividade]\" routerDirection=\"forward\">\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    </div>\n    \n    <div *ngSwitchCase=\"'turmas'\">\n      <ion-list>\n        <ion-list-header>\n          <ion-label color=\"primary\">Nome | Token</ion-label>\n        </ion-list-header>\n        <ion-item-sliding *ngFor=\"let turma of turmas\">\n          <ion-item lines=\"inset\" button [routerLink]=\"['/professor-turma-edicao/', turma.id]\">\n            <ion-label>{{ turma.nome }} | {{ turma.token }}</ion-label>\n          </ion-item>\n          \n          <ion-item-options side=\"end\">\n            <ion-item-option (click)=\"onRemoveTurma(turma.id)\" color=\"danger\">\n              <ion-label>Apagar</ion-label>\n            </ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n    </div>\n    \n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/professor-atividade-edicao/professor-atividade-edicao.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/professor-atividade-edicao/professor-atividade-edicao.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zlc3Nvci1hdGl2aWRhZGUtZWRpY2FvL3Byb2Zlc3Nvci1hdGl2aWRhZGUtZWRpY2FvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/professor-atividade-edicao/professor-atividade-edicao.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/professor-atividade-edicao/professor-atividade-edicao.page.ts ***!
  \*************************************************************************************/
/*! exports provided: ProfessorAtividadeEdicaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorAtividadeEdicaoPage", function() { return ProfessorAtividadeEdicaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_turma_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/turma.service */ "./src/app/services/turma.service.ts");
/* harmony import */ var _services_questao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/questao.service */ "./src/app/services/questao.service.ts");
/* harmony import */ var _services_atividade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/atividade.service */ "./src/app/services/atividade.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");







var ProfessorAtividadeEdicaoPage = /** @class */ (function () {
    function ProfessorAtividadeEdicaoPage(route, nav, loadingController, atividadeService, questaoService, turmaService) {
        this.route = route;
        this.nav = nav;
        this.loadingController = loadingController;
        this.atividadeService = atividadeService;
        this.questaoService = questaoService;
        this.turmaService = turmaService;
        this.atividade = {
            professor: '',
            disciplina: '',
            nome: '',
            dataTermino: new Date(),
            dataCriacao: new Date()
        };
        this.idAtividade = null;
        this.segmentAtividade = 'edicao';
    }
    ProfessorAtividadeEdicaoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.idAtividade = this.route.snapshot.params['id'];
        if (this.idAtividade) {
            this.load();
            this.questaoService.getByAtividade(this.idAtividade).subscribe(function (resultado) {
                _this.questoes = resultado;
            });
            this.turmaService.getByAtividade(this.idAtividade).subscribe(function (resultado) {
                _this.turmas = resultado;
            });
        }
    };
    ProfessorAtividadeEdicaoPage.prototype.load = function () {
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
                        this.atividadeService.get(this.idAtividade).subscribe(function (resultado) {
                            loading.dismiss();
                            _this.atividade = resultado;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfessorAtividadeEdicaoPage.prototype.save = function () {
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
                        if (this.idAtividade) {
                            this.atividadeService.update(this.idAtividade, this.atividade).then(function () {
                                loading.dismiss();
                                _this.nav.navigateForward('/professor-inicio');
                            });
                        }
                        else {
                            this.atividadeService.add(this.atividade).then(function () {
                                loading.dismiss();
                                _this.nav.navigateForward('/professor-inicio');
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfessorAtividadeEdicaoPage.prototype.onRemoveAtividade = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.atividadeService.remove(id);
                return [2 /*return*/];
            });
        });
    };
    ProfessorAtividadeEdicaoPage.prototype.onRemoveQuestao = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.questaoService.remove(id);
                return [2 /*return*/];
            });
        });
    };
    ProfessorAtividadeEdicaoPage.prototype.onRemoveTurma = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.turmaService.remove(id);
                return [2 /*return*/];
            });
        });
    };
    ProfessorAtividadeEdicaoPage.prototype.gerarCodigoTurma = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.idAtividade) {
                    this.nav.navigateForward('/professor-turma/atividade/' + this.idAtividade);
                }
                return [2 /*return*/];
            });
        });
    };
    ProfessorAtividadeEdicaoPage.prototype.apresentar = function () {
        if (this.idAtividade) {
            this.nav.navigateForward('/professor-atividade-apresentacao-turma/atividade/' + this.idAtividade);
        }
    };
    ProfessorAtividadeEdicaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-professor-atividade-edicao',
            template: __webpack_require__(/*! ./professor-atividade-edicao.page.html */ "./src/app/pages/professor-atividade-edicao/professor-atividade-edicao.page.html"),
            styles: [__webpack_require__(/*! ./professor-atividade-edicao.page.scss */ "./src/app/pages/professor-atividade-edicao/professor-atividade-edicao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _services_atividade_service__WEBPACK_IMPORTED_MODULE_3__["AtividadeService"], _services_questao_service__WEBPACK_IMPORTED_MODULE_2__["QuestaoService"],
            src_app_services_turma_service__WEBPACK_IMPORTED_MODULE_1__["TurmaService"]])
    ], ProfessorAtividadeEdicaoPage);
    return ProfessorAtividadeEdicaoPage;
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



/***/ }),

/***/ "./src/app/services/turma.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/turma.service.ts ***!
  \*******************************************/
/*! exports provided: TurmaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurmaService", function() { return TurmaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var TurmaService = /** @class */ (function () {
    function TurmaService(db) {
        this.db = db;
        this.collectionTurmas = db.collection('turmas');
        this.listTurmas = this.collectionTurmas.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    }
    TurmaService.prototype.getAll = function () {
        return this.listTurmas;
    };
    TurmaService.prototype.get = function (id) {
        return this.collectionTurmas.doc(id).valueChanges();
    };
    TurmaService.prototype.getByAtividade = function (atividade) {
        return this.db.collection('turmas', function (ref) { return ref.where('atividade', '==', atividade).orderBy("dataCriacao", "desc"); }).
            snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    };
    TurmaService.prototype.getByAtividadePromise = function (atividade) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.collection('turmas', function (ref) { return ref.where('atividade', '==', atividade).orderBy("dataCriacao", "desc"); }).
                snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
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
    TurmaService.prototype.getByAtividadeNaoFinalizadas = function (atividade) {
        return this.db.collection('turmas', function (ref) { return ref.where('atividade', '==', atividade).
            where('atividadeFinalizada', '==', false).
            orderBy("dataCriacao", "desc"); }).
            snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    };
    TurmaService.prototype.getByToken = function (token) {
        return this.db.collection('turmas', function (ref) { return ref.where('token', '==', token); }).
            snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    };
    TurmaService.prototype.add = function (turma, atividade) {
        turma.atividade = atividade;
        return this.collectionTurmas.add(turma);
    };
    TurmaService.prototype.update = function (id, turma) {
        return this.collectionTurmas.doc(id).update(turma);
    };
    TurmaService.prototype.remove = function (id) {
        return this.collectionTurmas.doc(id).delete();
    };
    TurmaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], TurmaService);
    return TurmaService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-professor-atividade-edicao-professor-atividade-edicao-module.js.map