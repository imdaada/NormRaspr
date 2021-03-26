function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var angular_google_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-google-charts */
    "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.sizeG = 1; // tslint:disable-next-line:max-line-length

        this.tableNorm = [[0.5, 0.503989356314632, 0.507978313716902, 0.511966473414113, 0.515953436852831, 0.519938805838372, 0.523922182654107, 0.527903170180521, 0.531881372013987, 0.535856392585172], // tslint:disable-next-line:max-line-length
        [0.539827837277029, 0.543795312542317, 0.547758426020584, 0.551716786654561, 0.555670004805906, 0.559617692370243, 0.563559462891433, 0.567494931675038, 0.571423715900901, 0.575345434734795], // tslint:disable-next-line:max-line-length
        [0.579259709439103, 0.583166163482442, 0.587064422648215, 0.590954115142006, 0.594834871697796, 0.598706325682924, 0.602568113201761, 0.606419873198039, 0.610261247555797, 0.614091881198877], // tslint:disable-next-line:max-line-length
        [0.617911422188953, 0.621719521822019, 0.62551583472332, 0.629300018940653, 0.633071736036028, 0.636830651175619, 0.640576433217991, 0.644308754800547, 0.648027292424163, 0.651731726535982], // tslint:disable-next-line:max-line-length
        [0.655421741610324, 0.659097026227677, 0.662757273151751, 0.666402179404542, 0.670031446339406, 0.67364477971208, 0.677241889749652, 0.680822491217444, 0.684386303483777, 0.687933050582609], // tslint:disable-next-line:max-line-length
        [0.691462461274013, 0.694974269102481, 0.698468212453034, 0.701944034605124, 0.705401483784302, 0.708840313211654, 0.712260281150973, 0.715661150953676, 0.719042691101436, 0.722404675246535], // tslint:disable-next-line:max-line-length
        [0.725746882249926, 0.729069096216994, 0.732371106531017, 0.735652707884322, 0.738913700307138, 0.742153889194135, 0.745373085328664, 0.74857110490469, 0.75174776954643, 0.754902906325691], // tslint:disable-next-line:max-line-length
        [0.758036347776927, 0.761147931910013, 0.764237502220749, 0.767304907699103, 0.770350002835209, 0.773372647623132, 0.776372707562401, 0.77935005365735, 0.782304562414267, 0.785236115836363], // tslint:disable-next-line:max-line-length
        [0.788144601416603, 0.791029912128398, 0.793891946414187, 0.796730608171932, 0.79954580673955, 0.802337456877308, 0.805105478748192, 0.807849797896304, 0.810570345223288, 0.813267056962827], // tslint:disable-next-line:max-line-length
        [0.81593987465324, 0.818588745108203, 0.821213620385628, 0.823814457754742, 0.826391219661376, 0.828943873691518, 0.831472392533162, 0.83397675393647, 0.836456940672308, 0.838912940489169], // tslint:disable-next-line:max-line-length
        [0.841344746068543, 0.843752354978745, 0.846135769627265, 0.848494997211656, 0.850830049669019, 0.853140943624104, 0.85542770033609, 0.857690345644061, 0.859928909911231, 0.862143427967965], // tslint:disable-next-line:max-line-length
        [0.864333939053617, 0.866500486757253, 0.868643118957269, 0.870761887759982, 0.872856849437202, 0.87492806436285, 0.876975596948657, 0.878999515578982, 0.880999892544799, 0.882976803976891], // tslint:disable-next-line:max-line-length
        [0.884930329778292, 0.886860553556023, 0.888767562552165, 0.890651447574308, 0.892512302925413, 0.894350226333145, 0.8961653188787, 0.897957684925181, 0.899727432045558, 0.901474670950252], // tslint:disable-next-line:max-line-length
        [0.90319951541439, 0.904902082204761, 0.906582491006528, 0.908240864349719, 0.909877327535548, 0.911492008562598, 0.913085038052915, 0.914656549178033, 0.916206677584986, 0.917735561322331], // tslint:disable-next-line:max-line-length
        [0.919243340766229, 0.920730158546608, 0.922196159473454, 0.923641490463261, 0.925066300465673, 0.926470740390352, 0.927854963034106, 0.929219123008314, 0.930563376666668, 0.931887882033275], // tslint:disable-next-line:max-line-length
        [0.933192798731142, 0.934478287911084, 0.935744512181064, 0.936991635536022, 0.938219823288188, 0.939429241997941, 0.940620059405207, 0.941792444361447, 0.942946566762246, 0.944082597480531], // tslint:disable-next-line:max-line-length
        [0.945200708300442, 0.94630107185188, 0.947383861545748, 0.948449251509911, 0.949497416525896, 0.950528531966352, 0.951542773733277, 0.952540318197053, 0.95352134213628, 0.95448602267845], // tslint:disable-next-line:max-line-length
        [0.955434537241457, 0.956367063475968, 0.957283779208671, 0.958184862386405, 0.959070491021193, 0.959940843136183, 0.960796096712517, 0.961636429637129, 0.962462019651483, 0.963273044301274], // tslint:disable-next-line:max-line-length
        [0.964069680887074, 0.964852106415961, 0.96562049755411, 0.966375030580372, 0.967115881340836, 0.967843225204386, 0.968557237019247, 0.969258091070534, 0.9699459610388, 0.970621019959591], // tslint:disable-next-line:max-line-length
        [0.971283440183998, 0.971933393340227, 0.972571050296163, 0.973196581122945, 0.973810155059547, 0.974411940478361, 0.97500210485178, 0.975580814719777, 0.976148235658492, 0.976704532249788], // tslint:disable-next-line:max-line-length
        [0.977249868051821, 0.977784405570569, 0.978308306232353, 0.978821730357328, 0.97932483713393, 0.979817784594296, 0.980300729590623, 0.980773827772483, 0.981237233565062, 0.981691100148341], // tslint:disable-next-line:max-line-length
        [0.982135579437183, 0.982570822062343, 0.982996977352367, 0.983414193316395, 0.983822616627834, 0.98422239260891, 0.984613665216075, 0.984996577026268, 0.985371269224011, 0.985737881589331], // tslint:disable-next-line:max-line-length
        [0.986096552486501, 0.98644741885358, 0.986790616192744, 0.987126278561398, 0.987454538564053, 0.987775527344955, 0.988089374581453, 0.988396208478097, 0.988696155761447, 0.988989341675589], // tslint:disable-next-line:max-line-length
        [0.989275889978324, 0.989555922938049, 0.98982956133128, 0.990096924440836, 0.990358130054642, 0.990613294465161, 0.990862532469427, 0.991105957369663, 0.991343680974483, 0.991575813600654], // tslint:disable-next-line:max-line-length
        [0.991802464075404, 0.992023739739266, 0.992239746449446, 0.992450588583691, 0.992656369044652, 0.992857189264729, 0.993053149211376, 0.993244347392859, 0.993430880864453, 0.993612845235057], // tslint:disable-next-line:max-line-length
        [0.993790334674224, 0.993963441919587, 0.994132258284667, 0.994296873667049, 0.994457376556917, 0.994613854045933, 0.994766391836444, 0.994915074251009, 0.995059984242229, 0.995201203402874], // tslint:disable-next-line:max-line-length
        [0.995338811976281, 0.995472888867033, 0.995603511651879, 0.995730756590911, 0.995854698638964, 0.995975411457242, 0.996092967425147, 0.996207437652315, 0.996318891990825, 0.9964273990476], // tslint:disable-next-line:max-line-length
        [0.996533026196959, 0.996635839593331, 0.996735904184109, 0.996833283722642, 0.99692804078135, 0.997020236764945, 0.997109931923774, 0.997197185367235, 0.997282055077299, 0.997364597922095], // tslint:disable-next-line:max-line-length
        [0.997444869669572, 0.997522925001214, 0.997598817525811, 0.997672599793268, 0.997744323308458, 0.997814038545087, 0.997881794959595, 0.99794764100506, 0.998011624145106, 0.998073790867812], // tslint:disable-next-line:max-line-length
        [0.998134186699616, 0.998192856219194, 0.998249843071324, 0.998305189980723, 0.998358938765843, 0.998411130352635, 0.998461804788262, 0.998511001254763, 0.99855875808266, 0.998605112764508], // tslint:disable-next-line:max-line-length
        [0.99865010196837, 0.998693761551231, 0.998736126572328, 0.998777231306408, 0.998817109256896, 0.998855793168977, 0.998893315042591, 0.998929706145321, 0.998964997025197, 0.998999217523386], // tslint:disable-next-line:max-line-length
        [0.999032396786782, 0.999064563280486, 0.999095744800178, 0.999125968484368, 0.999155260826541, 0.999183647687171, 0.999211154305624, 0.999237805311933, 0.999263624738446, 0.999288636031355], // tslint:disable-next-line:max-line-length
        [0.999312862062084, 0.99933632513856, 0.99935904701634, 0.999381048909613, 0.999402351502066, 0.999422974957609, 0.999442938930975, 0.99946226257817, 0.999480964566793, 0.999499063086214], // tslint:disable-next-line:max-line-length
        [0.999516575857616, 0.999533520143892, 0.999549912759408, 0.999565770079618, 0.99958110805055, 0.999595942198136, 0.999610287637418, 0.9996241590816, 0.999637570850967, 0.999650536881662], // tslint:disable-next-line:max-line-length
        [0.999663070734323, 0.999675185602581, 0.999686894321419, 0.999698209375391, 0.999709142906709, 0.999719706723184, 0.999729912306036, 0.999739770817572, 0.99974929310872, 0.999758489726432], // tslint:disable-next-line:max-line-length
        [0.999767370920964, 0.999775946653009, 0.999784226600705, 0.999792220166519, 0.999799936483993, 0.999807384424364, 0.999814572603067, 0.999821509386095, 0.999828202896254, 0.99983466101928], // tslint:disable-next-line:max-line-length
        [0.999840891409842, 0.999846901497426, 0.999852698492093, 0.999858289390124, 0.999863680979554, 0.999868879845579, 0.999873892375862, 0.999878724765715, 0.999883383023185, 0.999887872974018], // tslint:disable-next-line:max-line-length
        [0.999892200266523, 0.999896370376326, 0.999900388611024, 0.999904260114731, 0.999907989872526, 0.999911582714799, 0.999915043321502, 0.999918376226297, 0.999921585820616, 0.999924676357621], // tslint:disable-next-line:max-line-length
        [0.999927651956075, 0.99993051660412, 0.99993327416297, 0.999935928370511, 0.999938482844817, 0.999940941087581, 0.999943306487466, 0.999945582323366, 0.999947771767598, 0.999949877889004], // tslint:disable-next-line:max-line-length
        [0.999951903655982, 0.999953851939444, 0.999955725515688, 0.999957527069211, 0.999959259195441, 0.999960924403402, 0.999962525118309, 0.999964063684097, 0.999965542365885, 0.999966963352371]];
        this.title1 = 'Гистограмма';
        this.type1 = 'Histogram';
        this.date1 = [];
        this.options1 = {
          legend: 'none',
          colors: ['green'],
          histogram: {
            bucketSize: this.sizeG
          }
        };
        this.width1 = 550;
        this.height1 = 400;
        this.title = 'Эмперическая функция распределения';
        this.inputForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          me: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          dp: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          nn: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          pm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          pd: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          me2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          dp2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          nn2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
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
          }
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

      _createClass(AppComponent, [{
        key: "add",
        value: function add(a, b) {
          return Number(a) + Number(b);
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this = this;

          this.getSequence(this.inputForm.get('nn').value, this.inputForm.get('me').value, this.inputForm.get('dp').value);
          console.log(this.sequenceRand);
          this.sequenceRand.sort(function (a, b) {
            return a - b;
          });
          this.sequenceRand.forEach(function (num) {
            _this.numbrs += num + '<br>';
          });
          this.numbrs += '<p>Медиана: </p>';

          if (!(this.sequenceRand.length % 2)) {
            var med = this.add(this.sequenceRand[this.sequenceRand.length / 2 - 1], this.sequenceRand[this.sequenceRand.length / 2]) / 2;
            this.numbrs += med + ' ';
          } else {
            var _med = Number(this.sequenceRand[(this.sequenceRand.length + 1) / 2 - 1]);

            this.numbrs += _med + ' ';
          }

          this.numbrs += '<p>Выборочное среднее: </p>';
          var sum = 0;
          this.sequenceRand.forEach(function (value) {
            return sum += Number(value);
          });
          console.log(sum);
          var sred = sum / this.sequenceRand.length;
          this.numbrs += sred;
          this.numbrs += '<p>Выборочная дисперсия: </p>';
          sum = 0;
          this.sequenceRand.forEach(function (value) {
            return sum += (Number(value) - Number(sred)) * (Number(value) - Number(sred));
          });
          console.log(sum);
          var disp = sum / this.sequenceRand.length;
          this.numbrs += disp;
          this.makeFunction();
          this.hData = this.data;
          this.sizeG = (-this.sequenceRand[0] + this.sequenceRand[this.sequenceRand.length - 1]) / (Number(1) + 3.22 * Math.log(this.sequenceRand.length)); // this.sizeG = Math.round(this.sizeG * 10) / 10;

          this.options1.histogram.bucketSize = this.sizeG;
          console.log(this.sizeG);
          this.sequenceRand.forEach(function (value) {
            _this.date1.push([value]);
          });
          this.hData1 = this.date1;
          this.interMe1.push(sred - this.qvNorm * this.inputForm.get('dp').value / Math.pow(this.sequenceRand.length, 0.5));
          this.interMe1.push(Number(sred) + this.qvNorm * this.inputForm.get('dp').value / Math.pow(this.sequenceRand.length, 0.5));
          console.log(this.interMe1);
          this.interMe2.push(sred - this.qvStudent * disp / Math.pow(this.sequenceRand.length, 0.5));
          this.interMe2.push(Number(sred) + this.qvStudent * disp / Math.pow(this.sequenceRand.length, 0.5));
          console.log(this.interMe1);
          this.numbrs += '<p>Доверительный интервал при известной дисперсии: </p> (' + this.interMe1[0] + '; ' + this.interMe1[1];
          this.numbrs += '<p>Доверительный интервал при неизвестной дисперсии: </p> (' + this.interMe2[0] + '; ' + this.interMe2[1];
          var z1 = Math.abs((sred - this.inputForm.get('pm').value) / (Math.pow(this.inputForm.get('dp').value, 0.5) / Math.pow(this.inputForm.get('nn').value, 0.5)));
          console.log('Зет ' + z1);

          if (z1 > 1.645) {
            this.numbrs += '<p>При известной дисперсии H0 о мат. ож. Отвергается</p>';
          } else {
            this.numbrs += '<p>При известной дисперсии H0 о мат. ож. Принимается</p>';
          }

          var z2 = Math.abs((sred - this.inputForm.get('pm').value) / (Math.pow(disp, 0.5) / Math.pow(this.inputForm.get('nn').value, 0.5)));
          console.log('Зет ' + z2);

          if (z2 > 1.697) {
            this.numbrs += '<p>При неизвестной дисперсии H0 о мат. ож. Отвергается</p>';
          } else {
            this.numbrs += '<p>При неизвестной дисперсии H0 о мат. ож. Принимается</p>';
          }

          var z3 = this.inputForm.get('nn').value * disp / this.inputForm.get('pd').value;
          console.log('Зет ' + z3);

          if (z3 < 77.93 || z3 > 124.3) {
            this.numbrs += '<p> H0 о дисперсии Отвергается</p>';
          } else {
            this.numbrs += '<p>H0 о дисперсии Принимается</p>';
          }

          this.getSequence2(this.inputForm.get('nn2').value, this.inputForm.get('me2').value, this.inputForm.get('dp2').value);
          console.log(this.sequenceRand2);
          this.sequenceRand2.sort(function (a, b) {
            return a - b;
          });
          var sum2 = 0;
          this.sequenceRand2.forEach(function (value) {
            return sum2 += Number(value);
          });
          console.log(sum2);
          var sred2 = sum2 / this.sequenceRand2.length;
          sum2 = 0;
          this.sequenceRand2.forEach(function (value) {
            return sum2 += (Number(value) - Number(sred2)) * (Number(value) - Number(sred2));
          });
          console.log(sum2);
          var disp2 = sum2 / this.sequenceRand2.length;
          this.numbrs += '<p>Выборочное среднее для 2 выборки: </p>';
          this.numbrs += sred2;
          this.numbrs += '<p>Выборочная дисперсия для 2 выборки: </p>';
          this.numbrs += disp2;
          var z4 = Math.abs(sred - sred2) / Math.pow(this.inputForm.get('dp').value / this.inputForm.get('nn').value + this.inputForm.get('dp2').value / this.inputForm.get('nn2').value, 0.5);
          console.log('Зет ' + z4);

          if (z4 > 1.645) {
            this.numbrs += '<p>При известной дисперсии H0 о равенстве мат. ож. Отвергается</p>';
          } else {
            this.numbrs += '<p>При известной дисперсии H0 о равенстве мат. ож. Принимается</p>';
          }

          var nv = this.inputForm.get('nn').value;
          var mv = this.inputForm.get('nn2').value;
          var dispsr = ((nv - 1) * disp + (mv - 1) * disp2) / (nv + mv - 2);
          var z5 = Math.abs(sred - sred2) / Math.pow(dispsr, 0.5) * Math.pow(mv * nv / (mv + nv), 0.5);
          console.log('Зет ' + z5);
          console.log(Math.abs(sred - sred2) / dispsr);

          if (z5 > 1.697) {
            this.numbrs += '<p>При неизвестной дисперсии H0 о равенстве мат. ож. Отвергается</p>';
          } else {
            this.numbrs += '<p>При неизвестной дисперсии H0 о равенстве мат. ож. Принимается</p>';
          }

          var minter = Math.round(1 + 3.22 * Math.log10(nv));
          var minvalue = this.sequenceRand[0];
          var maxvalue = this.sequenceRand[this.sequenceRand.length - 1];
          var diffvalue = (maxvalue - minvalue) / minter;
          var sig = 0;

          for (var i = 0; i < minter; i++) {
            minvalue += diffvalue;
            var ni = 0;
            this.sequenceRand.forEach(function (a) {
              if (a <= minvalue && a > minvalue - diffvalue) {
                ni += 1;
              }
            });
            var pi = this.getFbyX(minvalue) - this.getFbyX(minvalue - diffvalue);
            var piemp = ni / nv;
            console.log('PI' + piemp);
            console.log(minvalue);
            sig += Math.pow(pi - piemp, 2) / pi;
          }

          sig *= nv;
          sig = Math.abs(sig);
          console.log('sig:' + sig);

          if (sig > 18.5) {
            this.numbrs += '<p> H0 критерый Пирсона Отвергается</p>';
          } else {
            this.numbrs += '<p>H0 критерий Пирсона Принимается</p>';
          }

          var da = 0;

          for (var _i = 0; _i < nv; _i++) {
            da += 1 / (2 * nv) * Math.log(2 / 0.95);
          }

          var dmin = 0;
          var dplus = 0;

          for (var _i2 = 0; _i2 < nv; _i2++) {
            var s = Math.abs(_i2 / nv - this.getFbyX(this.sequenceRand[_i2]));
            var s1 = Math.abs(this.getFbyX(this.sequenceRand[_i2]) - (_i2 - 1) / nv);

            if (dmin < s) {
              dmin = s;
            }

            if (dplus < s1) {
              dplus = s1;
            }
          }

          if (dmin < dplus) {
            dmin = dplus;
          }

          console.log(da);
          console.log('dmin' + dmin);

          if (da < dmin) {
            this.numbrs += '<p> H0 критерый Колмогорова-Смирнова Отвергается</p>';
          } else {
            this.numbrs += '<p>H0 критерий Колмогорова-Смирнова Принимается</p>';
          }

          console.log(this.getFbyX(0.4900209834904239));
          console.log(this.tableNorm[26][4]);
          return false;
        }
      }, {
        key: "getSequence",
        value: function getSequence(num, matexp, disp) {
          this.sequenceRand = [];
          console.log(num, matexp, disp);

          for (var i = 0; i < num; i++) {
            this.currentNumber = 0;

            for (var j = 0; j < 12; j++) {
              this.currentNumber += Math.random();
            }

            this.currentNumber -= 6;
            this.currentNumber *= Math.pow(disp, 0.5);
            this.currentNumber += Number(matexp);
            this.sequenceRand.push(this.currentNumber);
          }

          return this.sequenceRand;
        }
      }, {
        key: "getSequence2",
        value: function getSequence2(num, matexp, disp) {
          this.sequenceRand2 = [];
          console.log(num, matexp, disp);

          for (var i = 0; i < num; i++) {
            this.currentNumber = 0;

            for (var j = 0; j < 12; j++) {
              this.currentNumber += Math.random();
            }

            this.currentNumber -= 6;
            this.currentNumber *= Math.pow(disp, 0.5);
            this.currentNumber += Number(matexp);
            this.sequenceRand2.push(this.currentNumber);
          }

          return this.sequenceRand2;
        }
      }, {
        key: "makeFunction",
        value: function makeFunction() {
          var _this2 = this;

          var fValue = 0;
          var prevValue = 0;
          var summ = 0;
          this.sequenceRand.forEach(function (value) {
            fValue = summ / _this2.sequenceRand.length;

            _this2.data.push([prevValue, fValue]);

            _this2.data.push([value, fValue]);

            prevValue = value;
            summ++;
          });
          console.log(this.data);
          this.type = 'LineChart';
          return false;
        }
      }, {
        key: "getFbyX",
        value: function getFbyX(x) {
          if (x >= 3.99) {
            return 1;
          }

          if (x <= -3.99) {
            return 0;
          }

          var isNegative = false;

          if (x < 0) {
            isNegative = true;
            x = -x;
          }

          var tail1 = x * 10 - Math.floor(x * 10);
          var firstNum = x * 10 - tail1;
          tail1 = tail1 * 10;
          tail1 = tail1 - Math.floor(tail1);
          var secondNum = x * 100 - tail1 - firstNum * 10;
          var secondNum2;
          var firstNum2;
          firstNum = Math.round(firstNum);
          secondNum2 = Math.round(secondNum2);
          firstNum2 = Math.round(firstNum2);
          secondNum = Math.round(secondNum);

          if (secondNum === 9) {
            secondNum2 = 0;
            firstNum2 = firstNum + 1;
          } else {
            secondNum2 = secondNum + 1;
            firstNum2 = firstNum;
          } // console.log(firstNum);
          // console.log(secondNum);
          // console.log(firstNum2);
          // console.log(secondNum2);
          // console.log(tail1);


          var tail21 = 1 - tail1;

          if (!isNegative) {
            return tail21 * this.tableNorm[firstNum][secondNum] + tail1 * this.tableNorm[firstNum2][secondNum2];
          } else {
            return 1 - (tail21 * this.tableNorm[firstNum][secondNum] + tail1 * this.tableNorm[firstNum2][secondNum2]);
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 38,
      vars: 14,
      consts: [[3, "formGroup", "ngSubmit"], ["formControlName", "me", "type", "text"], ["formControlName", "dp", "type", "text"], ["formControlName", "nn", "type", "text"], ["formControlName", "pm", "type", "text"], ["formControlName", "pd", "type", "text"], ["formControlName", "me2", "type", "text"], ["formControlName", "dp2", "type", "text"], ["formControlName", "nn2", "type", "text"], ["type", "submit", 3, "click"], [3, "innerHTML"], [3, "title", "type", "data", "options", "width", "height"], ["chart", ""], ["chart1", ""]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_Template_ng_form_ngSubmit_0_listener() {
            return ctx.submit();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0414\u043B\u044F \u0432\u0442\u043E\u0440\u043E\u0439 \u0432\u044B\u0431\u043E\u0440\u043A\u0438: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u0414\u0438\u0441\u043F\u0435\u0440\u0441\u0438\u044F: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E N: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_29_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u0413\u0440\u0430\u0444\u0438\u043A\u0438: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "google-chart", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "google-chart", 11, 13);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.inputForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.numbrs, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("type", ctx.type)("data", ctx.hData)("options", ctx.options)("width", ctx.width)("height", ctx.height);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title1)("type", ctx.type1)("data", ctx.hData1)("options", ctx.options1)("width", ctx.width1)("height", ctx.height1);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], angular_google_charts__WEBPACK_IMPORTED_MODULE_2__["GoogleChartComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var angular_google_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-google-charts */
    "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_4__["GoogleChartsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_4__["GoogleChartsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_4__["GoogleChartsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Asus\Desktop\Весенний семестр 2021\Эминов\1 лаба\ngApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map