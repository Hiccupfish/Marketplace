"use strict";
(self["webpackChunkmarketplace"] = self["webpackChunkmarketplace"] || []).push([[125],{

/***/ 2508:
/*!****************************************************************!*\
  !*** ./src/app/features/dashboard/dashboard-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardRoutingModule: () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _pages_dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/dashboard-home/dashboard-home.component */ 928);
/* harmony import */ var _pages_my_listings_my_listings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/my-listings/my-listings.component */ 8598);
/* harmony import */ var _pages_profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/profile-settings/profile-settings.component */ 4134);
/* harmony import */ var _pages_verification_verification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/verification/verification.component */ 6762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7705);







const routes = [{
  path: '',
  component: _pages_dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_0__.DashboardHomeComponent
}, {
  path: 'my-listings',
  component: _pages_my_listings_my_listings_component__WEBPACK_IMPORTED_MODULE_1__.MyListingsComponent
}, {
  path: 'profile-settings',
  component: _pages_profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_2__.ProfileSettingsComponent
}, {
  path: 'verification',
  component: _pages_verification_verification_component__WEBPACK_IMPORTED_MODULE_3__.VerificationComponent
}];
let DashboardRoutingModule = /*#__PURE__*/(() => {
  class DashboardRoutingModule {
    static {
      this.ɵfac = function DashboardRoutingModule_Factory(t) {
        return new (t || DashboardRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: DashboardRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
      });
    }
  }
  return DashboardRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 2125:
/*!********************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardModule: () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 2508);
/* harmony import */ var _pages_dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/dashboard-home/dashboard-home.component */ 928);
/* harmony import */ var _pages_my_listings_my_listings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/my-listings/my-listings.component */ 8598);
/* harmony import */ var _pages_profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/profile-settings/profile-settings.component */ 4134);
/* harmony import */ var _pages_verification_verification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/verification/verification.component */ 6762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7705);







let DashboardModule = /*#__PURE__*/(() => {
  class DashboardModule {
    static {
      this.ɵfac = function DashboardModule_Factory(t) {
        return new (t || DashboardModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: DashboardModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule]
      });
    }
  }
  return DashboardModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_pages_dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_1__.DashboardHomeComponent, _pages_my_listings_my_listings_component__WEBPACK_IMPORTED_MODULE_2__.MyListingsComponent, _pages_profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_3__.ProfileSettingsComponent, _pages_verification_verification_component__WEBPACK_IMPORTED_MODULE_4__.VerificationComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule],
    exports: [_pages_dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_1__.DashboardHomeComponent, _pages_my_listings_my_listings_component__WEBPACK_IMPORTED_MODULE_2__.MyListingsComponent, _pages_profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_3__.ProfileSettingsComponent, _pages_verification_verification_component__WEBPACK_IMPORTED_MODULE_4__.VerificationComponent]
  });
})();

/***/ }),

/***/ 928:
/*!*************************************************************************************!*\
  !*** ./src/app/features/dashboard/pages/dashboard-home/dashboard-home.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardHomeComponent: () => (/* binding */ DashboardHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);

let DashboardHomeComponent = /*#__PURE__*/(() => {
  class DashboardHomeComponent {
    static {
      this.ɵfac = function DashboardHomeComponent_Factory(t) {
        return new (t || DashboardHomeComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardHomeComponent,
        selectors: [["app-dashboard-home"]],
        decls: 2,
        vars: 0,
        template: function DashboardHomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dashboard home works.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: block;\n}"]
      });
    }
  }
  return DashboardHomeComponent;
})();

/***/ }),

/***/ 8598:
/*!*******************************************************************************!*\
  !*** ./src/app/features/dashboard/pages/my-listings/my-listings.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyListingsComponent: () => (/* binding */ MyListingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);

let MyListingsComponent = /*#__PURE__*/(() => {
  class MyListingsComponent {
    static {
      this.ɵfac = function MyListingsComponent_Factory(t) {
        return new (t || MyListingsComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MyListingsComponent,
        selectors: [["app-my-listings"]],
        decls: 2,
        vars: 0,
        template: function MyListingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My listings works.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: block;\n}"]
      });
    }
  }
  return MyListingsComponent;
})();

/***/ }),

/***/ 4134:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/dashboard/pages/profile-settings/profile-settings.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileSettingsComponent: () => (/* binding */ ProfileSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);

let ProfileSettingsComponent = /*#__PURE__*/(() => {
  class ProfileSettingsComponent {
    static {
      this.ɵfac = function ProfileSettingsComponent_Factory(t) {
        return new (t || ProfileSettingsComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileSettingsComponent,
        selectors: [["app-profile-settings"]],
        decls: 2,
        vars: 0,
        template: function ProfileSettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Profile settings works.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: block;\n}"]
      });
    }
  }
  return ProfileSettingsComponent;
})();

/***/ }),

/***/ 6762:
/*!*********************************************************************************!*\
  !*** ./src/app/features/dashboard/pages/verification/verification.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerificationComponent: () => (/* binding */ VerificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);

let VerificationComponent = /*#__PURE__*/(() => {
  class VerificationComponent {
    static {
      this.ɵfac = function VerificationComponent_Factory(t) {
        return new (t || VerificationComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VerificationComponent,
        selectors: [["app-verification"]],
        decls: 2,
        vars: 0,
        template: function VerificationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Verification works.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: block;\n}"]
      });
    }
  }
  return VerificationComponent;
})();

/***/ })

}]);