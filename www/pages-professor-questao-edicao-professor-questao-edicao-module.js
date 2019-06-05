(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-professor-questao-edicao-professor-questao-edicao-module"],{

/***/ "./src/app/pages/professor-questao-edicao/professor-questao-edicao.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/professor-questao-edicao/professor-questao-edicao.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ProfessorQuestaoEdicaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorQuestaoEdicaoPageModule", function() { return ProfessorQuestaoEdicaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _professor_questao_edicao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./professor-questao-edicao.page */ "./src/app/pages/professor-questao-edicao/professor-questao-edicao.page.ts");







var routes = [
    {
        path: '',
        component: _professor_questao_edicao_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorQuestaoEdicaoPage"]
    }
];
var ProfessorQuestaoEdicaoPageModule = /** @class */ (function () {
    function ProfessorQuestaoEdicaoPageModule() {
    }
    ProfessorQuestaoEdicaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_professor_questao_edicao_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorQuestaoEdicaoPage"]]
        })
    ], ProfessorQuestaoEdicaoPageModule);
    return ProfessorQuestaoEdicaoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/professor-questao-edicao/professor-questao-edicao.page.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/professor-questao-edicao/professor-questao-edicao.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button [defaultHref]=\"['/professor-atividade-edicao/', questao.atividade]\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Questão</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <div padding>\n    <ion-segment [(ngModel)]=\"segmentQuestao\" mode=\"ios\">\n      <ion-segment-button value=\"edicao\">\n        <ion-label>Informações</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"respostas\">\n        <ion-label>Respostas</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  \n  <div [ngSwitch]=\"segmentQuestao\">\n    \n    <div *ngSwitchCase=\"'edicao'\">\n      <ion-list lines=\"full\">\n        <ion-item *ngIf=\"questao\">\n          <ion-label position=\"stacked\">Apelido</ion-label>\n          <ion-input required type=\"text\" max-length=\"10\" [(ngModel)]=\"questao.apelido\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"questao\">\n          <ion-label position=\"stacked\">Problema/Desafio</ion-label>\n          <ion-textarea required rows=\"4\" [(ngModel)]=\"questao.problema\"></ion-textarea>\n        </ion-item>\n      </ion-list>\n      <ion-button expand=\"full\" (click)=\"save()\">Salvar</ion-button>\n    </div>\n    \n    <div *ngSwitchCase=\"'respostas'\">\n      <ion-list>\n        <ion-item-sliding *ngFor=\"let resposta of respostas\">\n          <ion-item lines=\"inset\" button [routerLink]=\"['/professor-resposta/', resposta.id]\">\n            <ion-label>{{ resposta.conteudo }}</ion-label>\n          </ion-item>\n          \n          <ion-item-options side=\"end\">\n            <ion-item-option (click)=\"onRemoveResposta(resposta.id)\" color=\"danger\">\n              <ion-label>Apagar</ion-label>\n            </ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n      <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button [routerLink]=\"['/professor-resposta/questao', idQuestao]\" routerDirection=\"forward\">\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    </div>\n    \n    <!-- <div *ngSwitchCase=\"'respostas'\">\n      <ion-button horizontal=\"end\" slot=\"fixed\" [routerLink]=\"['/professor-resposta/questao', idQuestao]\" routerDirection=\"forward\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-button>\n      <ion-list>\n        <ion-item-sliding *ngFor=\"let resposta of respostas\">\n          <ion-card button [routerLink]=\"['/professor-resposta/', resposta.id]\">\n            <ion-card-header>\n              <ion-card-title *ngIf=\"resposta.correta\">Correta: Sim</ion-card-title>\n              <ion-card-title *ngIf=\"!resposta.correta\">Correta: Não</ion-card-title>\n            </ion-card-header>\n            \n            <ion-card-content>\n              <p>Pontuação: {{resposta.pontuacao}}</p>\n              <p>Conteúdo: {{resposta.conteudo}}</p>\n            </ion-card-content>\n            \n            <ion-button end (click)=\"onRemoveResposta(resposta.id)\" style=\"float: right; margin-right: 2%\">Apagar</ion-button>\n          </ion-card>\n        </ion-item-sliding>\n        <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n          <ion-fab-button [routerLink]=\"['/professor-resposta/questao', idQuestao]\" routerDirection=\"forward\">\n            <ion-icon name=\"add\"></ion-icon>\n          </ion-fab-button>\n        </ion-fab>\n      </ion-list>\n    </div> -->\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/professor-questao-edicao/professor-questao-edicao.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/professor-questao-edicao/professor-questao-edicao.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zlc3Nvci1xdWVzdGFvLWVkaWNhby9wcm9mZXNzb3ItcXVlc3Rhby1lZGljYW8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/professor-questao-edicao/professor-questao-edicao.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/professor-questao-edicao/professor-questao-edicao.page.ts ***!
  \*********************************************************************************/
/*! exports provided: ProfessorQuestaoEdicaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorQuestaoEdicaoPage", function() { return ProfessorQuestaoEdicaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_questao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/questao.service */ "./src/app/services/questao.service.ts");
/* harmony import */ var src_app_services_resposta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/resposta.service */ "./src/app/services/resposta.service.ts");






var ProfessorQuestaoEdicaoPage = /** @class */ (function () {
    function ProfessorQuestaoEdicaoPage(route, nav, loadingController, questaoService, respostaService) {
        this.route = route;
        this.nav = nav;
        this.loadingController = loadingController;
        this.questaoService = questaoService;
        this.respostaService = respostaService;
        this.questao = {
            atividade: null,
            apelido: '',
            problema: '',
            dataCriacao: new Date()
        };
        this.idQuestao = null;
        this.segmentQuestao = 'edicao';
    }
    ProfessorQuestaoEdicaoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.idQuestao = this.route.snapshot.params['id'];
        if (this.idQuestao) {
            this.load();
            this.respostaService.getByQuestao(this.idQuestao).subscribe(function (resultado) {
                _this.respostas = resultado;
            });
        }
    };
    ProfessorQuestaoEdicaoPage.prototype.load = function () {
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
                        this.questaoService.get(this.idQuestao).subscribe(function (resultado) {
                            loading.dismiss();
                            _this.questao = resultado;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfessorQuestaoEdicaoPage.prototype.save = function () {
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
                        if (this.idQuestao) {
                            this.questaoService.update(this.idQuestao, this.questao).then(function () {
                                loading.dismiss();
                                _this.nav.navigateForward('/professor-atividade-edicao/' + _this.questao.atividade);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfessorQuestaoEdicaoPage.prototype.onRemove = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                //Não funciona
                this.respostaService.getByQuestaoComID(id).then(function (resultado) {
                    console.log('resposta', resultado[0].id);
                    _this.respostaService.remove(resultado[0].id);
                });
                this.questaoService.remove(id);
                return [2 /*return*/];
            });
        });
    };
    ProfessorQuestaoEdicaoPage.prototype.onRemoveResposta = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.respostaService.remove(id);
                return [2 /*return*/];
            });
        });
    };
    ProfessorQuestaoEdicaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-professor-questao-edicao',
            template: __webpack_require__(/*! ./professor-questao-edicao.page.html */ "./src/app/pages/professor-questao-edicao/professor-questao-edicao.page.html"),
            styles: [__webpack_require__(/*! ./professor-questao-edicao.page.scss */ "./src/app/pages/professor-questao-edicao/professor-questao-edicao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            src_app_services_questao_service__WEBPACK_IMPORTED_MODULE_4__["QuestaoService"], src_app_services_resposta_service__WEBPACK_IMPORTED_MODULE_5__["RespostaService"]])
    ], ProfessorQuestaoEdicaoPage);
    return ProfessorQuestaoEdicaoPage;
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

/***/ "./src/app/services/resposta.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/resposta.service.ts ***!
  \**********************************************/
/*! exports provided: RespostaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RespostaService", function() { return RespostaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var RespostaService = /** @class */ (function () {
    function RespostaService(db) {
        this.db = db;
        this.collectionRespostas = db.collection('respostas');
        this.listRespostas = this.collectionRespostas.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    }
    RespostaService.prototype.getAll = function () {
        return this.listRespostas;
    };
    // getByAtividade(atividade: string) {
    //   //Tentando buscar as respostas por referecia
    //   // this.collectionRespostas.doc<IResposta>('atividades/' + atividade)
    //   // .valueChanges().subscribe( r => console.log('resp', r));
    //   // return this.db.collection<IResposta>('respostas/atividades/' + atividade).
    //   // snapshotChanges().pipe(
    //   //   map(actions => {
    //   //     return actions.map(a => {
    //   //       const data = a.payload.doc.data();
    //   //       const id = a.payload.doc.id;
    //   //       return {id, ...data};
    //   //     });
    //   //   })
    //   // );
    //   return this.db.collection<IResposta>('respostas', ref => ref.where('atividade', '==', atividade)).
    //   snapshotChanges().pipe(
    //     map(actions => {
    //       return actions.map(a => {
    //         const data = a.payload.doc.data();
    //         const id = a.payload.doc.id;
    //         return {id, ...data};
    //       });
    //     })
    //   );
    // }
    RespostaService.prototype.getByQuestao = function (questao) {
        return this.db.collection('respostas', function (ref) { return ref.where('questao', '==', questao); }).
            snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    };
    RespostaService.prototype.getByQuestaoComID = function (questao) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.collection('respostas', function (ref) { return ref.where('questao', '==', questao); }).
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
    RespostaService.prototype.get = function (id) {
        return this.collectionRespostas.doc(id).valueChanges();
    };
    RespostaService.prototype.add = function (resposta, questao) {
        //Adicionada resposta com atividade por referecia (mas nao deu pra buscar)
        //resposta.atividade = this.db.doc('atividades/' + atividade).ref;
        resposta.questao = questao;
        return this.collectionRespostas.add(resposta);
    };
    RespostaService.prototype.update = function (id, resposta) {
        return this.collectionRespostas.doc(id).update(resposta);
    };
    RespostaService.prototype.remove = function (id) {
        return this.collectionRespostas.doc(id).delete();
    };
    RespostaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], RespostaService);
    return RespostaService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-professor-questao-edicao-professor-questao-edicao-module.js.map