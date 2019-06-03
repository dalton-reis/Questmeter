(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-professor-atividade-apresentacao-professor-atividade-apresentacao-module"],{

/***/ "./src/app/pages/professor-atividade-apresentacao/professor-atividade-apresentacao.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/professor-atividade-apresentacao/professor-atividade-apresentacao.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: ProfessorAtividadeApresentacaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorAtividadeApresentacaoPageModule", function() { return ProfessorAtividadeApresentacaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _professor_atividade_apresentacao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./professor-atividade-apresentacao.page */ "./src/app/pages/professor-atividade-apresentacao/professor-atividade-apresentacao.page.ts");







var routes = [
    {
        path: '',
        component: _professor_atividade_apresentacao_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorAtividadeApresentacaoPage"]
    }
];
var ProfessorAtividadeApresentacaoPageModule = /** @class */ (function () {
    function ProfessorAtividadeApresentacaoPageModule() {
    }
    ProfessorAtividadeApresentacaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_professor_atividade_apresentacao_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorAtividadeApresentacaoPage"]]
        })
    ], ProfessorAtividadeApresentacaoPageModule);
    return ProfessorAtividadeApresentacaoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/professor-atividade-apresentacao/professor-atividade-apresentacao.page.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/professor-atividade-apresentacao/professor-atividade-apresentacao.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/professor-atividade/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Resultado respostas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div id=\"chart_div\" style=\"position: relative; width: 100%; height: 100%;\"></div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/professor-atividade-apresentacao/professor-atividade-apresentacao.page.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/professor-atividade-apresentacao/professor-atividade-apresentacao.page.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zlc3Nvci1hdGl2aWRhZGUtYXByZXNlbnRhY2FvL3Byb2Zlc3Nvci1hdGl2aWRhZGUtYXByZXNlbnRhY2FvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/professor-atividade-apresentacao/professor-atividade-apresentacao.page.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/professor-atividade-apresentacao/professor-atividade-apresentacao.page.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProfessorAtividadeApresentacaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorAtividadeApresentacaoPage", function() { return ProfessorAtividadeApresentacaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_resposta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/resposta.service */ "./src/app/services/resposta.service.ts");




var ProfessorAtividadeApresentacaoPage = /** @class */ (function () {
    function ProfessorAtividadeApresentacaoPage(route, respostaService) {
        this.route = route;
        this.respostaService = respostaService;
        this.idAtividade = null;
    }
    ProfessorAtividadeApresentacaoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.idAtividade = this.route.snapshot.params['atividade'];
        this.respostaService.getByAtividade(this.idAtividade).subscribe(function (resultado) {
            _this.respostas = resultado;
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');
            var chave = [];
            var valor = [];
            for (var i = 0; i < resultado.length; i++) {
                chave[i] = resultado[i].conteudo;
                valor[i] = resultado[i].votos;
            }
            data.addRows(resultado.length);
            for (var i = 0; i < chave.length; i++) {
                data.setCell(i, 0, chave[i]);
                data.setCell(i, 1, valor[i]);
            }
            var options = {
                'width': '80%',
                'height': '80%',
                pieHole: 0.4
            };
            var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
            chart.draw(data, options);
        });
        //OUTROS EXEMPLOS
        //colunas grossas
        // var data = google.visualization.arrayToDataTable([
        //   ["Element", "Density", { role: "style" } ],
        //   ["Copper", 8.94, "#b87333"],
        //   ["Silver", 10.49, "silver"],
        //   ["Gold", 19.30, "gold"],
        //   ["Platinum", 21.45, "color: #e5e4e2"]
        // ]);
        // var view = new google.visualization.DataView(data);
        // view.setColumns([0, 1,
        //                  { calc: "stringify",
        //                    sourceColumn: 1,
        //                    type: "string"},
        //                  2]);
        // var options = {
        //   title: "Density of Precious Metals, in g/cm^3",
        //   width: 600,
        //   height: 400,
        //   bar: {groupWidth: "95%"},
        //   legend: { position: "none" },
        // };
        // var chart = new google.visualization.ColumnChart(document.getElementById("chart_div"));
        // chart.draw(view, options);
        //colunas finas
        // var data = new google.visualization.DataTable();
        // data.addColumn('timeofday', 'Time of Day');
        // data.addColumn('number', 'Motivation Level');
        // data.addRows([
        //   [{v: [8, 0, 0], f: '8 am'}, 1],
        //   [{v: [9, 0, 0], f: '9 am'}, 2],
        //   [{v: [10, 0, 0], f:'10 am'}, 3],
        //   [{v: [11, 0, 0], f: '11 am'}, 4],
        //   [{v: [12, 0, 0], f: '12 pm'}, 5],
        //   [{v: [13, 0, 0], f: '1 pm'}, 6],
        //   [{v: [14, 0, 0], f: '2 pm'}, 7],
        //   [{v: [15, 0, 0], f: '3 pm'}, 8],
        //   [{v: [16, 0, 0], f: '4 pm'}, 9],
        //   [{v: [17, 0, 0], f: '5 pm'}, 10],
        // ]);
        // var options = {
        //   title: 'Motivation Level Throughout the Day',
        //   hAxis: {
        //     title: 'Time of Day',
        //     format: 'h:mm a',
        //     viewWindow: {
        //       min: [7, 30, 0],
        //       max: [17, 30, 0]
        //     }
        //   },
        //   vAxis: {
        //     title: 'Rating (scale of 1-10)'
        //   }
        // };
        // var chart = new google.visualization.ColumnChart(
        //   document.getElementById('chart_div'));
        // chart.draw(data, options);
        // Pizza
        // var data = new google.visualization.DataTable();
        // data.addColumn('string', 'Topping');
        // data.addColumn('number', 'Slices');
        // data.addRows([
        //   ['Mushrooms', 3],
        //   ['Onions', 1],
        //   ['Olives', 1],
        //   ['Zucchini', 1],
        //   ['Pepperoni', 2]
        // ]);
        // // Set chart options
        // var options = {'title':'How Much Pizza I Ate Last Night',
        //                'width':400,
        //                'height':300};
        // // Instantiate and draw our chart, passing in some options.
        // var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        // chart.draw(data, options);
    };
    ProfessorAtividadeApresentacaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-professor-atividade-apresentacao',
            template: __webpack_require__(/*! ./professor-atividade-apresentacao.page.html */ "./src/app/pages/professor-atividade-apresentacao/professor-atividade-apresentacao.page.html"),
            styles: [__webpack_require__(/*! ./professor-atividade-apresentacao.page.scss */ "./src/app/pages/professor-atividade-apresentacao/professor-atividade-apresentacao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_resposta_service__WEBPACK_IMPORTED_MODULE_3__["RespostaService"]])
    ], ProfessorAtividadeApresentacaoPage);
    return ProfessorAtividadeApresentacaoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-professor-atividade-apresentacao-professor-atividade-apresentacao-module.js.map