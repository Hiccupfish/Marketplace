"use strict";
(self["webpackChunkmarketplace"] = self["webpackChunkmarketplace"] || []).push([[337],{

/***/ 1589:
/*!****************************************************************************************!*\
  !*** ./src/app/features/profile/components/profile-header/profile-header.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileHeaderComponent: () => (/* binding */ ProfileHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);

let ProfileHeaderComponent = /*#__PURE__*/(() => {
  class ProfileHeaderComponent {
    static {
      this.ɵfac = function ProfileHeaderComponent_Factory(t) {
        return new (t || ProfileHeaderComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileHeaderComponent,
        selectors: [["app-profile-header"]],
        decls: 3,
        vars: 0,
        consts: [[1, "profile-header"]],
        template: function ProfileHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile Header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
        },
        styles: [".profile-header[_ngcontent-%COMP%] {\n  display: block;\n}"]
      });
    }
  }
  return ProfileHeaderComponent;
})();

/***/ }),

/***/ 9753:
/*!******************************************************************************************!*\
  !*** ./src/app/features/profile/components/seller-listings/seller-listings.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SellerListingsComponent: () => (/* binding */ SellerListingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);

let SellerListingsComponent = /*#__PURE__*/(() => {
  class SellerListingsComponent {
    static {
      this.ɵfac = function SellerListingsComponent_Factory(t) {
        return new (t || SellerListingsComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SellerListingsComponent,
        selectors: [["app-seller-listings"]],
        decls: 3,
        vars: 0,
        consts: [[1, "seller-listings"]],
        template: function SellerListingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Seller listings placeholder.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
        },
        styles: [".seller-listings[_ngcontent-%COMP%] {\n  display: block;\n}"]
      });
    }
  }
  return SellerListingsComponent;
})();

/***/ }),

/***/ 2969:
/*!****************************************************************************************!*\
  !*** ./src/app/features/profile/components/seller-reviews/seller-reviews.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SellerReviewsComponent: () => (/* binding */ SellerReviewsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);

let SellerReviewsComponent = /*#__PURE__*/(() => {
  class SellerReviewsComponent {
    static {
      this.ɵfac = function SellerReviewsComponent_Factory(t) {
        return new (t || SellerReviewsComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SellerReviewsComponent,
        selectors: [["app-seller-reviews"]],
        decls: 3,
        vars: 0,
        consts: [[1, "seller-reviews"]],
        template: function SellerReviewsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Seller reviews placeholder.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
        },
        styles: [".seller-reviews[_ngcontent-%COMP%] {\n  display: block;\n}"]
      });
    }
  }
  return SellerReviewsComponent;
})();

/***/ }),

/***/ 5871:
/*!***********************************************************************************!*\
  !*** ./src/app/features/profile/pages/seller-profile/seller-profile.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SellerProfileComponent: () => (/* binding */ SellerProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _components_profile_header_profile_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/profile-header/profile-header.component */ 1589);
/* harmony import */ var _components_seller_reviews_seller_reviews_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/seller-reviews/seller-reviews.component */ 2969);
/* harmony import */ var _components_seller_listings_seller_listings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/seller-listings/seller-listings.component */ 9753);




let SellerProfileComponent = /*#__PURE__*/(() => {
  class SellerProfileComponent {
    static {
      this.ɵfac = function SellerProfileComponent_Factory(t) {
        return new (t || SellerProfileComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: SellerProfileComponent,
        selectors: [["app-seller-profile"]],
        decls: 6,
        vars: 0,
        consts: [[1, "seller-profile"]],
        template: function SellerProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-profile-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "section", 0)(2, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Seller Profile");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-seller-listings")(5, "app-seller-reviews");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
        },
        dependencies: [_components_profile_header_profile_header_component__WEBPACK_IMPORTED_MODULE_0__.ProfileHeaderComponent, _components_seller_reviews_seller_reviews_component__WEBPACK_IMPORTED_MODULE_1__.SellerReviewsComponent, _components_seller_listings_seller_listings_component__WEBPACK_IMPORTED_MODULE_2__.SellerListingsComponent],
        styles: [".seller-profile[_ngcontent-%COMP%] {\n  display: block;\n}"]
      });
    }
  }
  return SellerProfileComponent;
})();

/***/ }),

/***/ 7568:
/*!************************************************************!*\
  !*** ./src/app/features/profile/profile-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileRoutingModule: () => (/* binding */ ProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _pages_seller_profile_seller_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/seller-profile/seller-profile.component */ 5871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);




const routes = [{
  path: '',
  component: _pages_seller_profile_seller_profile_component__WEBPACK_IMPORTED_MODULE_0__.SellerProfileComponent
}];
let ProfileRoutingModule = /*#__PURE__*/(() => {
  class ProfileRoutingModule {
    static {
      this.ɵfac = function ProfileRoutingModule_Factory(t) {
        return new (t || ProfileRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: ProfileRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });
    }
  }
  return ProfileRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProfileRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 337:
/*!****************************************************!*\
  !*** ./src/app/features/profile/profile.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileModule: () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 7568);
/* harmony import */ var _components_profile_header_profile_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/profile-header/profile-header.component */ 1589);
/* harmony import */ var _components_seller_listings_seller_listings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/seller-listings/seller-listings.component */ 9753);
/* harmony import */ var _components_seller_reviews_seller_reviews_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/seller-reviews/seller-reviews.component */ 2969);
/* harmony import */ var _pages_seller_profile_seller_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/seller-profile/seller-profile.component */ 5871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7705);







let ProfileModule = /*#__PURE__*/(() => {
  class ProfileModule {
    static {
      this.ɵfac = function ProfileModule_Factory(t) {
        return new (t || ProfileModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: ProfileModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileRoutingModule]
      });
    }
  }
  return ProfileModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProfileModule, {
    declarations: [_pages_seller_profile_seller_profile_component__WEBPACK_IMPORTED_MODULE_4__.SellerProfileComponent, _components_profile_header_profile_header_component__WEBPACK_IMPORTED_MODULE_1__.ProfileHeaderComponent, _components_seller_reviews_seller_reviews_component__WEBPACK_IMPORTED_MODULE_3__.SellerReviewsComponent, _components_seller_listings_seller_listings_component__WEBPACK_IMPORTED_MODULE_2__.SellerListingsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileRoutingModule]
  });
})();

/***/ })

}]);