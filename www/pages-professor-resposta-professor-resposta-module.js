(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-professor-resposta-professor-resposta-module"],{

/***/ "./src/app/pages/professor-resposta/professor-resposta.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/professor-resposta/professor-resposta.module.ts ***!
  \***********************************************************************/
/*! exports provided: ProfessorRespostaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorRespostaPageModule", function() { return ProfessorRespostaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _professor_resposta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./professor-resposta.page */ "./src/app/pages/professor-resposta/professor-resposta.page.ts");







var routes = [
    {
        path: '',
        component: _professor_resposta_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorRespostaPage"]
    }
];
var ProfessorRespostaPageModule = /** @class */ (function () {
    function ProfessorRespostaPageModule() {
    }
    ProfessorRespostaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_professor_resposta_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorRespostaPage"]]
        })
    ], ProfessorRespostaPageModule);
    return ProfessorRespostaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/professor-resposta/professor-resposta.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/professor-resposta/professor-resposta.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Resposta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list lines=\"full\">\n    <ion-item *ngIf=\"resposta\">\n      <ion-label position=\"stacked\">Conteúdo</ion-label>\n      <ion-textarea required rows=\"3\" [(ngModel)]=\"resposta.conteudo\"></ion-textarea>\n    </ion-item>\n    <ion-item *ngIf=\"resposta\">\n      <ion-label>Correta</ion-label>\n      <ion-checkbox [(ngModel)]=\"resposta.correta\"></ion-checkbox>\n    </ion-item>\n    <ion-item *ngIf=\"resposta\">\n      <ion-label position=\"stacked\">Pontuação</ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"resposta.pontuacao\"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-button expand=\"full\" (click)=\"save()\">Salvar</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/professor-resposta/professor-resposta.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/professor-resposta/professor-resposta.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zlc3Nvci1yZXNwb3N0YS9wcm9mZXNzb3ItcmVzcG9zdGEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/professor-resposta/professor-resposta.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/professor-resposta/professor-resposta.page.ts ***!
  \*********************************************************************/
/*! exports provided: ProfessorRespostaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorRespostaPage", function() { return ProfessorRespostaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_resposta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/resposta.service */ "./src/app/services/resposta.service.ts");





var ProfessorRespostaPage = /** @class */ (function () {
    function ProfessorRespostaPage(route, nav, loadingController, respostaService) {
        this.route = route;
        this.nav = nav;
        this.loadingController = loadingController;
        this.respostaService = respostaService;
        this.resposta = {
            conteudo: '',
            questao: null,
            correta: false,
            pontuacao: 0
        };
        this.idResposta = null;
        this.idQuestao = null;
    }
    ProfessorRespostaPage.prototype.ngOnInit = function () {
        this.idQuestao = this.route.snapshot.params['questao'];
        this.idResposta = this.route.snapshot.params['id'];
        if (this.idResposta) {
            this.load();
        }
    };
    ProfessorRespostaPage.prototype.load = function () {
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
                        this.respostaService.get(this.idResposta).subscribe(function (resultado) {
                            loading.dismiss();
                            _this.resposta = resultado;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfessorRespostaPage.prototype.save = function () {
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
                        if (this.idResposta) {
                            this.respostaService.update(this.idResposta, this.resposta).then(function () {
                                loading.dismiss();
                                _this.nav.navigateForward('/professor-questao-edicao/' + _this.resposta.questao);
                            });
                        }
                        else {
                            this.respostaService.add(this.resposta, this.idQuestao).then(function () {
                                loading.dismiss();
                                _this.nav.navigateForward('/professor-questao-edicao/' + _this.idQuestao);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfessorRespostaPage.prototype.onRemove = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.respostaService.remove(id);
                return [2 /*return*/];
            });
        });
    };
    ProfessorRespostaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-professor-resposta',
            template: __webpack_require__(/*! ./professor-resposta.page.html */ "./src/app/pages/professor-resposta/professor-resposta.page.html"),
            styles: [__webpack_require__(/*! ./professor-resposta.page.scss */ "./src/app/pages/professor-resposta/professor-resposta.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], src_app_services_resposta_service__WEBPACK_IMPORTED_MODULE_4__["RespostaService"]])
    ], ProfessorRespostaPage);
    return ProfessorRespostaPage;
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
//# sourceMappingURL=pages-professor-resposta-professor-resposta-module.js.map