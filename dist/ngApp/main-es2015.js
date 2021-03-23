(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");





class AppComponent {
    constructor() {
        this.sizeG = 1;
        this.title1 = 'Гистограмма';
        this.type1 = 'Histogram';
        this.date1 = [];
        this.options1 = {
            legend: 'none',
            colors: ['green'],
            histogram: { bucketSize: this.sizeG }
        };
        this.width1 = 550;
        this.height1 = 400;
        this.title = 'Эмперическая функция распределения';
        this.inputForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            me: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            dp: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            nn: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            pm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            pd: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.numbrs = '';
        this.type = 'LineChart';
        this.data = [];
        this.options = {
            hAxis: {
                title: 'Случайное число'
            },
            vAxis: {
                title: 'Значение эмпирической функции распределения'
            },
        };
        this.width = 550;
        this.height = 400;
        this.level = 0.05;
        this.qvNorm = 1.645;
        this.qvStudent = 1.9623;
        this.qvPirson = 0;
        this.interMe1 = [];
        this.interMe2 = [];
        this.interDisp = [];
    }
    add(a, b) {
        return Number(a) + Number(b);
    }
    submit() {
        this.getSequence(this.inputForm.get('nn').value, this.inputForm.get('me').value, this.inputForm.get('dp').value);
        console.log(this.sequenceRand);
        this.sequenceRand.sort((a, b) => a - b);
        this.sequenceRand.forEach((num) => {
            this.numbrs += num + '<br>';
        });
        this.numbrs += '<p>Медиана: </p>';
        if (!(this.sequenceRand.length % 2)) {
            const med = (this.add(this.sequenceRand[this.sequenceRand.length / 2 - 1], this.sequenceRand[this.sequenceRand.length / 2])) / 2;
            this.numbrs += med + ' ';
        }
        else {
            const med = Number(this.sequenceRand[(this.sequenceRand.length + 1) / 2 - 1]);
            this.numbrs += med + ' ';
        }
        this.numbrs += '<p>Выборочное среднее: </p>';
        let sum = 0;
        this.sequenceRand.forEach((value => sum += Number(value)));
        console.log(sum);
        const sred = sum / this.sequenceRand.length;
        this.numbrs += sred;
        this.numbrs += '<p>Выборочная дисперсия: </p>';
        sum = 0;
        this.sequenceRand.forEach((value => sum += (Number(value) - Number(sred)) * (Number(value) - Number(sred))));
        console.log(sum);
        const disp = sum / this.sequenceRand.length;
        this.numbrs += disp;
        this.makeFunction();
        this.hData = this.data;
        this.sizeG = (-this.sequenceRand[0] + this.sequenceRand[this.sequenceRand.length - 1])
            / (Number(1) + 3.22 * Math.log(this.sequenceRand.length));
        // this.sizeG = Math.round(this.sizeG * 10) / 10;
        this.options1.histogram.bucketSize = this.sizeG;
        console.log(this.sizeG);
        this.sequenceRand.forEach((value => {
            this.date1.push([value]);
        }));
        this.hData1 = this.date1;
        this.interMe1.push(sred - this.qvNorm * this.inputForm.get('dp').value
            / Math.pow(this.sequenceRand.length, 0.5));
        this.interMe1.push(Number(sred) + this.qvNorm * this.inputForm.get('dp').value
            / Math.pow(this.sequenceRand.length, 0.5));
        console.log(this.interMe1);
        this.interMe2.push(sred - this.qvStudent * (disp)
            / Math.pow(this.sequenceRand.length, 0.5));
        this.interMe2.push(Number(sred) + this.qvStudent * (disp)
            / Math.pow(this.sequenceRand.length, 0.5));
        console.log(this.interMe1);
        this.numbrs += '<p>Доверительный интервал при известной дисперсии: </p> (' + this.interMe1[0] + '; ' + this.interMe1[1];
        this.numbrs += '<p>Доверительный интервал при неизвестной дисперсии: </p> (' + this.interMe2[0] + '; ' + this.interMe2[1];
        const z1 = Math.abs((sred - this.inputForm.get('pm').value)
            / (Math.pow(this.inputForm.get('dp').value, 0.5) / Math.pow(this.inputForm.get('nn').value, 0.5)));
        console.log('Зет ' + z1);
        if (z1 > 1.645) {
            this.numbrs += '<p>При известной дисперсии H0 о мат. ож. Отвергается</p>';
        }
        else {
            this.numbrs += '<p>При известной дисперсии H0 о мат. ож. Принимается</p>';
        }
        const z2 = Math.abs((sred - this.inputForm.get('pm').value)
            / (Math.pow(disp, 0.5) / Math.pow(this.inputForm.get('nn').value, 0.5)));
        console.log('Зет ' + z2);
        if (z1 > 1.697) {
            this.numbrs += '<p>При неизвестной дисперсии H0 о мат. ож. Отвергается</p>';
        }
        else {
            this.numbrs += '<p>При неизвестной дисперсии H0 о мат. ож. Принимается</p>';
        }
        const z3 = this.inputForm.get('nn').value * disp / this.inputForm.get('pd').value;
        console.log('Зет ' + z3);
        if (z3 < 77.93 || z3 > 124.3) {
            this.numbrs += '<p> H0 о дисперсии Отвергается</p>';
        }
        else {
            this.numbrs += '<p>H0 о дисперсии Принимается</p>';
        }
        return false;
    }
    getSequence(num, matexp, disp) {
        this.sequenceRand = [];
        console.log(num, matexp, disp);
        for (let i = 0; i < num; i++) {
            this.currentNumber = 0;
            for (let j = 0; j < 12; j++) {
                this.currentNumber += Math.random();
            }
            this.currentNumber -= 6;
            this.currentNumber *= Math.pow(disp, 0.5);
            this.currentNumber += Number(matexp);
            this.sequenceRand.push(this.currentNumber);
        }
        return this.sequenceRand;
    }
    makeFunction() {
        let fValue = 0;
        let prevValue = 0;
        let summ = 0;
        this.sequenceRand.forEach((value) => {
            fValue = summ / this.sequenceRand.length;
            this.data.push([prevValue, fValue]);
            this.data.push([value, fValue]);
            prevValue = value;
            summ++;
        });
        console.log(this.data);
        this.type = 'LineChart';
        return false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 26, vars: 14, consts: [[3, "formGroup", "ngSubmit"], ["formControlName", "me", "type", "text"], ["formControlName", "dp", "type", "text"], ["formControlName", "nn", "type", "text"], ["formControlName", "pm", "type", "text"], ["formControlName", "pd", "type", "text"], ["type", "submit", 3, "click"], [3, "innerHTML"], [3, "title", "type", "data", "options", "width", "height"], ["chart", ""], ["chart1", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_Template_ng_form_ngSubmit_0_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u0414\u0438\u0441\u043F\u0435\u0440\u0441\u0438\u044F: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E N: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u041F\u0440\u0435\u0434\u043F\u043E\u043B\u0433\u0430\u0435\u043C\u043E\u0435 \u043C\u0430\u0442. \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u041F\u0440\u0435\u0434\u043F\u043E\u043B\u0433\u0430\u0435\u043C\u043E\u0435 \u0434\u0438\u0441\u043F\u0435\u0440\u0441\u0438\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_17_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0413\u0440\u0430\u0444\u0438\u043A\u0438: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "google-chart", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "google-chart", 8, 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.inputForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.numbrs, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("type", ctx.type)("data", ctx.hData)("options", ctx.options)("width", ctx.width)("height", ctx.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title1)("type", ctx.type1)("data", ctx.hData1)("options", ctx.options1)("width", ctx.width1)("height", ctx.height1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], angular_google_charts__WEBPACK_IMPORTED_MODULE_2__["GoogleChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            angular_google_charts__WEBPACK_IMPORTED_MODULE_4__["GoogleChartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        angular_google_charts__WEBPACK_IMPORTED_MODULE_4__["GoogleChartsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    angular_google_charts__WEBPACK_IMPORTED_MODULE_4__["GoogleChartsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Asus\Desktop\Весенний семестр 2021\Эминов\1 лаба\ngApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map