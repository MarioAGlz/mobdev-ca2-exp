function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["characters-characters-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCharactersCharactersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar color=\"bbad\">\n\t\t<ion-title class=\"ion-text-center\">Characters</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<!-- \n    code reference:\n    https://www.freecodecamp.org/news/how-to-build-your-first-ionic-4-app-with-api-calls-f6ea747dc17a/\n-->\n<ion-content>\n\t<ion-list *ngFor=\"let charts of characters\">\n\t\t<ion-item button detail lines=\"inset\" *ngFor=\"let character of charts\" (click)=\"openDetails(character)\">\n\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t<img [src]=\"character.img\" *ngIf=\"character.img != 'N/A'\">\n            </ion-avatar>\n\t\t\t\t<ion-label>\n\t\t\t\t\t{{ character.name }}\n\t\t\t\t</ion-label>\n\t\t</ion-item>\n\t</ion-list>\n\n<!-- \n    code reference:\n    https://devdactic.com/ionic-4-pokedex-search-scroll/\n-->\n\t<ion-infinite-scroll threshold=\"25%\" position=\"bottom\" (ionInfinite)=\"loadCharts(true, $event)\">\n\t\t<ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more characters...\">\n\t\t</ion-infinite-scroll-content>\n\t</ion-infinite-scroll>\n    \n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/characters/characters-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/characters/characters-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: CharactersPageRoutingModule */

  /***/
  function srcAppPagesCharactersCharactersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharactersPageRoutingModule", function () {
      return CharactersPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _characters_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./characters.page */
    "./src/app/pages/characters/characters.page.ts");

    var routes = [{
      path: '',
      component: _characters_page__WEBPACK_IMPORTED_MODULE_3__["CharactersPage"]
    }];

    var CharactersPageRoutingModule = function CharactersPageRoutingModule() {
      _classCallCheck(this, CharactersPageRoutingModule);
    };

    CharactersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CharactersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/characters/characters.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/characters/characters.module.ts ***!
    \*******************************************************/

  /*! exports provided: CharactersPageModule */

  /***/
  function srcAppPagesCharactersCharactersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharactersPageModule", function () {
      return CharactersPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _characters_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./characters-routing.module */
    "./src/app/pages/characters/characters-routing.module.ts");
    /* harmony import */


    var _characters_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./characters.page */
    "./src/app/pages/characters/characters.page.ts");

    var CharactersPageModule = function CharactersPageModule() {
      _classCallCheck(this, CharactersPageModule);
    };

    CharactersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _characters_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharactersPageRoutingModule"]],
      declarations: [_characters_page__WEBPACK_IMPORTED_MODULE_6__["CharactersPage"]]
    })], CharactersPageModule);
    /***/
  },

  /***/
  "./src/app/pages/characters/characters.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/characters/characters.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCharactersCharactersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJhY3RlcnMvY2hhcmFjdGVycy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/characters/characters.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/characters/characters.page.ts ***!
    \*****************************************************/

  /*! exports provided: CharactersPage */

  /***/
  function srcAppPagesCharactersCharactersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharactersPage", function () {
      return CharactersPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var CharactersPage = /*#__PURE__*/function () {
      function CharactersPage(router, api) {
        _classCallCheck(this, CharactersPage);

        this.router = router;
        this.api = api;
        this.offset = 0;
        this.characters = [];
      }
      /*
          code reference:
          https://devdactic.com/ionic-4-pokedex-search-scroll/
      */


      _createClass(CharactersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadCharts();
        }
      }, {
        key: "loadCharts",
        value: function loadCharts() {
          var _this = this;

          var loadMoreC = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var event = arguments.length > 1 ? arguments[1] : undefined;

          if (loadMoreC) {
            this.offset += 21;
          }

          this.api.getCharacters(this.offset).subscribe(function (res) {
            console.log('result: ', res);
            _this.characters = [].concat(_toConsumableArray(_this.characters), [res]);
          });

          if (event) {
            event.target.complete();
          }

          if (this.offset == 42) {
            this.infiniteScroll.disabled = true;
          }
        }
      }, {
        key: "openDetails",
        value: function openDetails(character) {
          var charId = character.char_id;
          this.router.navigateByUrl("/tabs/characters/".concat(charId));
        }
      }]);

      return CharactersPage;
    }();

    CharactersPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"])], CharactersPage.prototype, "infiniteScroll", void 0);
    CharactersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-characters',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./characters.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./characters.page.scss */
      "./src/app/pages/characters/characters.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], CharactersPage);
    /***/
  }
}]);
//# sourceMappingURL=characters-characters-module-es5.js.map