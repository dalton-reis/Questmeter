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

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>Atividades</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let atividade of atividades\">\n      <ion-item lines=\"inset\" button (click)=\"goTelaAluno(atividade)\">\n        <ion-label>{{atividade.turma}} | {{ atividade.nome }}</ion-label>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n\n"

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
/*! exports provided: AlunoAtividadePage, Atividade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoAtividadePage", function() { return AlunoAtividadePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Atividade", function() { return Atividade; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_turma_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/turma.service */ "./src/app/services/turma.service.ts");
/* harmony import */ var _services_atividade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/atividade.service */ "./src/app/services/atividade.service.ts");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _services_aluno_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/aluno.service */ "./src/app/services/aluno.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_turma_aluno_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/turma-aluno.service */ "./src/app/services/turma-aluno.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








var AlunoAtividadePage = /** @class */ (function () {
    function AlunoAtividadePage(nav, atividadeService, alunoService, turmaAlunoService, turmaService, autenticacaoService) {
        this.nav = nav;
        this.atividadeService = atividadeService;
        this.alunoService = alunoService;
        this.turmaAlunoService = turmaAlunoService;
        this.turmaService = turmaService;
        this.autenticacaoService = autenticacaoService;
        this.usuarioCorrente = null;
        this.atividades = [];
    }
    AlunoAtividadePage.prototype.ngOnInit = function () {
        var _this = this;
        this.atividades = [];
        this.usuarioCorrente = this.autenticacaoService.getID();
        this.alunoService.getByUsuario(this.usuarioCorrente).then(function (aluno) {
            _this.turmaAlunoService.getByAluno(aluno[0].id)
                .subscribe(function (turmaAluno) {
                turmaAluno.forEach(function (f) {
                    return _this.turmaService.get(f.turma).subscribe(function (turma) {
                        _this.atividadeService.get(turma.atividade).subscribe(function (atividade) {
                            //verifica se a atividade já existe no array
                            if (_this.atividades.findIndex(function (c) { return c.turma == f.turma; }) < 0) {
                                var ativ = new Atividade();
                                ativ.id = turma.atividade;
                                ativ.nome = atividade.disciplina + ' | ' + atividade.nome;
                                ativ.turma = turma.nome;
                                _this.atividades.push(ativ);
                            }
                        });
                    });
                });
            });
        });
    };
    AlunoAtividadePage.prototype.goTelaAluno = function (atividade) {
        var _this = this;
        this.turmaService.getByAtividade(atividade.id).subscribe(function (turma) {
            _this.usuarioCorrente = _this.autenticacaoService.getID();
            _this.alunoService.getByUsuario(_this.usuarioCorrente).then(function (aluno) {
                _this.turmaAlunoService.getByTurmaAluno(turma[0].id, aluno[0].id).subscribe(function (turmaAluno) {
                    if (turmaAluno.length > 0) {
                        _this.nav.navigateForward('/aluno-atividade-abrir/turma/' + turmaAluno[0].turma);
                    }
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
            _services_atividade_service__WEBPACK_IMPORTED_MODULE_2__["AtividadeService"], _services_aluno_service__WEBPACK_IMPORTED_MODULE_4__["AlunoService"],
            src_app_services_turma_aluno_service__WEBPACK_IMPORTED_MODULE_6__["TurmaAlunoService"], src_app_services_turma_service__WEBPACK_IMPORTED_MODULE_1__["TurmaService"],
            _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"]])
    ], AlunoAtividadePage);
    return AlunoAtividadePage;
}());

var Atividade = /** @class */ (function () {
    function Atividade() {
    }
    Atividade.prototype.Atividade = function () {
        this.id = '';
        this.nome = '';
        this.turma = '';
    };
    return Atividade;
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
//# sourceMappingURL=pages-aluno-atividade-aluno-atividade-module.js.map