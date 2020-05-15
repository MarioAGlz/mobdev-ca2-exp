function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["character-details-character-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCharacterDetailsCharacterDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar color=\"bbad\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaulthref=\"/tabs/characters\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{ character?.name }}</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"dislikedCharacter()\" *ngIf=\"isLikedC\">\n\t\t\t\t<ion-icon name=\"heart\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\n\t\t\t<ion-button (click)=\"likedCharacter()\" *ngIf=\"!isLikedC\">\n\t\t\t\t<ion-icon name=\"heart-outline\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\t<ion-card *ngIf=\"character\">\n\t\t<ion-card-header>\n            <ion-card-title>\n                <ion-label text-wrap><p>Nickname:</p> {{ character.nickname }}</ion-label> \n            </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            <ion-item>\n                <ion-icon name=\"today-outline\" slot=\"start\" color=\"danger\"></ion-icon>\n                <ion-label text-wrap><p>Birthday:</p> {{ character.birthday }}</ion-label>\n            </ion-item>\n\t\t\t<ion-item>\n                <ion-icon name=\"build\" slot=\"start\"></ion-icon>\n                <ion-label text-wrap><p>Occupation:</p>  {{ character.occupation }}</ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-icon name=\"medkit\" slot=\"start\" color=\"--ion-color-light\"></ion-icon>\n                <ion-label text-wrap><p>Status:</p> {{ character.status }} </ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-icon name=\"person-add\" slot=\"start\" color=\"micon\"></ion-icon>\n                <ion-label text-wrap><p>Seasons appearance:</p> {{ character.appearance }}</ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-icon name=\"person-outline\" slot=\"start\" color=\"secondary\"></ion-icon>\n                <ion-label text-wrap><p>Actor:</p> \"{{ character.portrayed }}\"</ion-label>\n            </ion-item>\n\t\t</ion-card-content>\n\t</ion-card>\n\t<ion-card *ngIf=\"character\">\n\t\t<ion-card-content class=\"ion-text-center\">\n\t\t\t<h2>Picture: </h2>\n            <img [src]=\"character.img\" class=\"info-img\">\n\t\t</ion-card-content>\n\t</ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/character-details/character-details-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/character-details/character-details-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: CharacterDetailsPageRoutingModule */

  /***/
  function srcAppPagesCharacterDetailsCharacterDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharacterDetailsPageRoutingModule", function () {
      return CharacterDetailsPageRoutingModule;
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


    var _character_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./character-details.page */
    "./src/app/pages/character-details/character-details.page.ts");

    var routes = [{
      path: '',
      component: _character_details_page__WEBPACK_IMPORTED_MODULE_3__["CharacterDetailsPage"]
    }];

    var CharacterDetailsPageRoutingModule = function CharacterDetailsPageRoutingModule() {
      _classCallCheck(this, CharacterDetailsPageRoutingModule);
    };

    CharacterDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CharacterDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/character-details/character-details.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/character-details/character-details.module.ts ***!
    \*********************************************************************/

  /*! exports provided: CharacterDetailsPageModule */

  /***/
  function srcAppPagesCharacterDetailsCharacterDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharacterDetailsPageModule", function () {
      return CharacterDetailsPageModule;
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


    var _character_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./character-details-routing.module */
    "./src/app/pages/character-details/character-details-routing.module.ts");
    /* harmony import */


    var _character_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./character-details.page */
    "./src/app/pages/character-details/character-details.page.ts");

    var CharacterDetailsPageModule = function CharacterDetailsPageModule() {
      _classCallCheck(this, CharacterDetailsPageModule);
    };

    CharacterDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _character_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharacterDetailsPageRoutingModule"]],
      declarations: [_character_details_page__WEBPACK_IMPORTED_MODULE_6__["CharacterDetailsPage"]]
    })], CharacterDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/character-details/character-details.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/character-details/character-details.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCharacterDetailsCharacterDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".info-img {\n  max-height: 70vh;\n  -o-object-fit: contain;\n     object-fit: contain;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9iZGV2LWNhMi1leHAvc3JjL2FwcC9wYWdlcy9jaGFyYWN0ZXItZGV0YWlscy9jaGFyYWN0ZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXJhY3Rlci1kZXRhaWxzL2NoYXJhY3Rlci1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJhY3Rlci1kZXRhaWxzL2NoYXJhY3Rlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvLWltZyB7XG4gICAgbWF4LWhlaWdodDogNzB2aDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHBhZGRpbmc6IDVweDtcbn0iLCIuaW5mby1pbWcge1xuICBtYXgtaGVpZ2h0OiA3MHZoO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBwYWRkaW5nOiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/character-details/character-details.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/character-details/character-details.page.ts ***!
    \*******************************************************************/

  /*! exports provided: CharacterDetailsPage */

  /***/
  function srcAppPagesCharacterDetailsCharacterDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharacterDetailsPage", function () {
      return CharacterDetailsPage;
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


    var src_app_services_like_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/like.service */
    "./src/app/services/like.service.ts");

    var CharacterDetailsPage = /*#__PURE__*/function () {
      function CharacterDetailsPage(activatedRoute, api, likeService) {
        _classCallCheck(this, CharacterDetailsPage);

        this.activatedRoute = activatedRoute;
        this.api = api;
        this.likeService = likeService;
        this.isLikedC = false;
        this.charId = null;
      }

      _createClass(CharacterDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.charId = this.activatedRoute.snapshot.paramMap.get('id');
          this.api.getCharacter(this.charId).subscribe(function (res) {
            _this.character = res[0];
            console.log(JSON.stringify(_this.character.char_id));
          });
          this.likeService.isLikedCh(this.charId).then(function (isFav) {
            _this.isLikedC = isFav;
          });
        }
      }, {
        key: "likedCharacter",
        value: function likedCharacter() {
          var _this2 = this;

          this.likeService.likedCharacter(this.charId).then(function () {
            _this2.isLikedC = true;
          });
        }
      }, {
        key: "dislikedCharacter",
        value: function dislikedCharacter() {
          var _this3 = this;

          this.likeService.dislikedCharacter(this.charId).then(function () {
            _this3.isLikedC = false;
          });
        }
      }]);

      return CharacterDetailsPage;
    }();

    CharacterDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: src_app_services_like_service__WEBPACK_IMPORTED_MODULE_4__["LikeService"]
      }];
    };

    CharacterDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-character-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./character-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./character-details.page.scss */
      "./src/app/pages/character-details/character-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], src_app_services_like_service__WEBPACK_IMPORTED_MODULE_4__["LikeService"]])], CharacterDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=character-details-character-details-module-es5.js.map