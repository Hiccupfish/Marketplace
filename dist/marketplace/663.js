"use strict";
(self["webpackChunkmarketplace"] = self["webpackChunkmarketplace"] || []).push([[663],{

/***/ 913:
/*!******************************************************!*\
  !*** ./src/app/features/auth/auth-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthRoutingModule: () => (/* binding */ AuthRoutingModule),
/* harmony export */   authRoutes: () => (/* binding */ authRoutes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login/login.component */ 3090);
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/register/register.component */ 7046);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);





const authRoutes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'register',
  component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent
}];
let AuthRoutingModule = /*#__PURE__*/(() => {
  class AuthRoutingModule {
    static {
      this.ɵfac = function AuthRoutingModule_Factory(t) {
        return new (t || AuthRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AuthRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(authRoutes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });
    }
  }
  return AuthRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 663:
/*!**********************************************!*\
  !*** ./src/app/features/auth/auth.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthModule: () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 913);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login/login.component */ 3090);
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/register/register.component */ 7046);
/* harmony import */ var _components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/auth-form/auth-form.component */ 5694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7705);







let AuthModule = /*#__PURE__*/(() => {
  class AuthModule {
    static {
      this.ɵfac = function AuthModule_Factory(t) {
        return new (t || AuthModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: AuthModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule]
      });
    }
  }
  return AuthModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _pages_register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent, _components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_3__.AuthFormComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule]
  });
})();

/***/ }),

/***/ 5694:
/*!***************************************************************************!*\
  !*** ./src/app/features/auth/components/auth-form/auth-form.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthFormComponent: () => (/* binding */ AuthFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 9417);


let AuthFormComponent = /*#__PURE__*/(() => {
  class AuthFormComponent {
    static {
      this.ɵfac = function AuthFormComponent_Factory(t) {
        return new (t || AuthFormComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthFormComponent,
        selectors: [["app-auth-form"]],
        decls: 9,
        vars: 0,
        consts: [[1, "auth-form"], ["type", "email"], ["type", "password"], ["type", "submit"]],
        template: function AuthFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0)(1, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Email ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Password ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.auth-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}"]
      });
    }
  }
  return AuthFormComponent;
})();

/***/ }),

/***/ 3090:
/*!**************************************************************!*\
  !*** ./src/app/features/auth/pages/login/login.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9417);





function LoginComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "circle", 45)(3, "line", 46)(4, "line", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_47_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.error = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "line", 49)(10, "line", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
function LoginComponent__svg_svg_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 51)(2, "circle", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent__svg_svg_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 53)(2, "line", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 55);
  }
}
function LoginComponent__svg_svg_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "line", 57)(2, "polyline", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
let LoginComponent = /*#__PURE__*/(() => {
  class LoginComponent {
    constructor(auth, router) {
      this.auth = auth;
      this.router = router;
      this.email = '';
      this.password = '';
      this.error = '';
      this.loading = false;
      this.showPassword = false;
    }
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    }
    submit() {
      this.error = '';
      this.loading = true;
      this.auth.login({
        email: this.email,
        password: this.password
      }).subscribe({
        next: () => this.router.navigate(['/listings']),
        error: error => {
          this.error = error.error?.message || 'Unable to log in.';
          this.loading = false;
        },
        complete: () => this.loading = false
      });
    }
    static {
      this.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 85,
        vars: 15,
        consts: [[1, "login-wrapper"], [1, "bg-glow", "bg-glow-1"], [1, "bg-glow", "bg-glow-2"], [1, "login-container"], [1, "hero-panel"], [1, "brand-badge"], [1, "brand-dot"], [1, "hero-title"], [1, "hero-subtitle"], [1, "features-list"], [1, "feature-card"], [1, "feature-icon"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "13 2 3 14 12 14 11 22 21 10 12 10 13 2"], [1, "feature-text"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"], [1, "form-card"], [1, "form-header"], ["class", "alert-error", "role", "alert", 4, "ngIf"], [1, "auth-form", 3, "ngSubmit"], ["loginForm", "ngForm"], [1, "input-group"], ["for", "login-email"], [1, "required-star"], [1, "input-field-wrapper"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "input-icon"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"], ["points", "22,6 12,13 2,6"], ["id", "login-email", "name", "email", "type", "email", "placeholder", "name@example.com", "required", "", "email", "", 3, "ngModel", "ngModelChange"], ["emailInput", "ngModel"], ["for", "login-password"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], ["id", "login-password", "name", "password", "placeholder", "Enter your password", "required", "", 3, "type", "ngModel", "ngModelChange"], ["passInput", "ngModel"], ["type", "button", 1, "password-toggle-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngIf"], ["type", "submit", 1, "submit-btn", 3, "disabled"], ["class", "spinner", 4, "ngIf"], ["class", "btn-arrow", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngIf"], [1, "form-footer"], ["routerLink", "/auth/register", 1, "register-link"], ["role", "alert", 1, "alert-error"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "alert-icon"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], ["type", "button", "aria-label", "Dismiss error", 1, "alert-dismiss", 3, "click"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], [1, "spinner"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "btn-arrow"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["points", "12 5 19 12 12 19"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1)(2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Marketplace Seller Portal");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h1", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Welcome Back");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Log in to manage your listings, track offers, and grow your business on the marketplace. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9)(14, "div", 10)(15, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "svg", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "polygon", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14)(19, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Instant Product Listing");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Publish items with photos and specs in under 60 seconds.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 10)(24, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "svg", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "path", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14)(28, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Verified Seller Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Build buyer trust with identity verification & ratings.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 10)(33, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "svg", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "path", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 14)(37, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Direct Buyer Chat");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "In-app messaging lets you close deals and answer questions fast.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 17)(42, "div", 18)(43, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Log In");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Enter your credentials to access your account");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, LoginComponent_div_47_Template, 11, 1, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "form", 20, 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_48_listener() {
              return ctx.submit();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 22)(51, "label", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Email Address ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "svg", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "path", 27)(58, "polyline", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "input", 29, 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_59_listener($event) {
              return ctx.email = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 22)(62, "label", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Password ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "svg", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "rect", 32)(69, "path", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "input", 34, 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_70_listener($event) {
              return ctx.password = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_72_listener() {
              return ctx.toggleShowPassword();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, LoginComponent__svg_svg_73_Template, 3, 0, "svg", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, LoginComponent__svg_svg_74_Template, 3, 0, "svg", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "button", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, LoginComponent_span_76_Template, 1, 0, "span", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, LoginComponent__svg_svg_79_Template, 3, 0, "svg", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 41)(81, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Don't have an account?");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "a", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Create Account");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          }
          if (rf & 2) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](49);
            const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](60);
            const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("invalid", _r2.touched && _r2.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("invalid", _r3.touched && _r3.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password")("ngModel", ctx.password);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.showPassword ? "Hide password" : "Show password");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showPassword);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showPassword);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading || _r1.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.loading ? "Logging in\uFFFD" : "Log In");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: calc(100vh - 70px);\n  background-color: #121212;\n  color: #e0e0e0;\n}\n\n.login-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1.5rem;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n\n.bg-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(120px);\n  pointer-events: none;\n  opacity: 0.35;\n  z-index: 0;\n}\n\n.bg-glow-1[_ngcontent-%COMP%] {\n  top: -10%;\n  left: -5%;\n  width: 500px;\n  height: 500px;\n  background: radial-gradient(circle, rgba(13, 110, 253, 0.6) 0%, rgba(102, 16, 242, 0) 70%);\n}\n\n.bg-glow-2[_ngcontent-%COMP%] {\n  bottom: -10%;\n  right: -5%;\n  width: 550px;\n  height: 550px;\n  background: radial-gradient(circle, rgba(102, 16, 242, 0.5) 0%, rgba(13, 110, 253, 0) 70%);\n}\n\n.login-container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 1fr 1.15fr;\n  max-width: 1080px;\n  width: 100%;\n  background: rgba(30, 30, 30, 0.65);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(13, 110, 253, 0.1);\n  overflow: hidden;\n}\n\n.hero-panel[_ngcontent-%COMP%] {\n  padding: 3.5rem 3rem;\n  background: linear-gradient(145deg, rgba(13, 110, 253, 0.08) 0%, rgba(102, 16, 242, 0.12) 100%);\n  border-right: 1px solid rgba(255, 255, 255, 0.06);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.brand-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 14px;\n  background: rgba(13, 110, 253, 0.15);\n  border: 1px solid rgba(13, 110, 253, 0.3);\n  border-radius: 30px;\n  font-size: 0.825rem;\n  font-weight: 600;\n  color: #599bfe;\n  letter-spacing: 0.3px;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-bottom: 1.5rem;\n}\n.brand-badge[_ngcontent-%COMP%]   .brand-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background-color: #0d6efd;\n  border-radius: 50%;\n  box-shadow: 0 0 8px #0d6efd;\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  font-weight: 800;\n  line-height: 1.25;\n  margin: 0 0 1rem 0;\n  background: linear-gradient(135deg, #ffffff 0%, #d0d7de 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #b0b0b0;\n  margin: 0 0 2.5rem 0;\n}\n\n.features-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.feature-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n}\n\n.feature-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background: rgba(13, 110, 253, 0.12);\n  border: 1px solid rgba(13, 110, 253, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #408cfd;\n}\n.feature-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\n.feature-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #ffffff;\n}\n.feature-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #b0b0b0;\n  line-height: 1.45;\n}\n\n.form-card[_ngcontent-%COMP%] {\n  padding: 3.5rem 3rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  margin: 0 0 0.5rem 0;\n  color: #ffffff;\n}\n.form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #b0b0b0;\n  font-size: 0.925rem;\n}\n\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem 1rem;\n  background: rgba(220, 53, 69, 0.12);\n  border: 1px solid rgba(220, 53, 69, 0.3);\n  border-radius: 10px;\n  color: #ff6b6b;\n  font-size: 0.875rem;\n  margin-bottom: 1.5rem;\n  animation: _ngcontent-%COMP%_fadeIn 0.25s ease-in-out;\n}\n.alert-error[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.alert-error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  line-height: 1.4;\n}\n.alert-error[_ngcontent-%COMP%]   .alert-dismiss[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #ff6b6b;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0.8;\n  transition: opacity 0.2s;\n}\n.alert-error[_ngcontent-%COMP%]   .alert-dismiss[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.alert-error[_ngcontent-%COMP%]   .alert-dismiss[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n\n.input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #d6d6d6;\n}\n.input-group[_ngcontent-%COMP%]   .required-star[_ngcontent-%COMP%] {\n  color: #ff4d4f;\n}\n\n.input-field-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-field-wrapper[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  width: 18px;\n  height: 18px;\n  color: rgba(255, 255, 255, 0.4);\n  pointer-events: none;\n  transition: color 0.2s ease;\n}\n.input-field-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 46px;\n  padding: 0 14px 0 44px;\n  background: rgba(18, 18, 18, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 10px;\n  font-size: 0.925rem;\n  color: #ffffff;\n  outline: none;\n  transition: all 0.2s ease;\n  box-sizing: border-box;\n}\n.input-field-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.3);\n}\n.input-field-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #0d6efd;\n  background: rgba(18, 18, 18, 0.85);\n  box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.2);\n}\n.input-field-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .input-icon[_ngcontent-%COMP%] {\n  color: #0d6efd;\n}\n.input-field-wrapper[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%] {\n  border-color: #ff4d4f;\n}\n.input-field-wrapper[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(255, 77, 79, 0.2);\n}\n.input-field-wrapper[_ngcontent-%COMP%]   .password-toggle-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.4);\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  transition: color 0.2s, background-color 0.2s;\n}\n.input-field-wrapper[_ngcontent-%COMP%]   .password-toggle-btn[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  background-color: rgba(255, 255, 255, 0.08);\n}\n.input-field-wrapper[_ngcontent-%COMP%]   .password-toggle-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  height: 48px;\n  width: 100%;\n  background: linear-gradient(135deg, #0d6efd 0%, #6610f2 100%);\n  border: none;\n  border-radius: 10px;\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  box-shadow: 0 6px 20px rgba(13, 110, 253, 0.35);\n  transition: all 0.25s ease;\n}\n.submit-btn[_ngcontent-%COMP%]   .btn-arrow[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  transition: transform 0.2s ease;\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(13, 110, 253, 0.5);\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled)   .btn-arrow[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.submit-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-footer[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: center;\n  font-size: 0.9rem;\n  color: #b0b0b0;\n}\n.form-footer[_ngcontent-%COMP%]   .register-link[_ngcontent-%COMP%] {\n  color: #599bfe;\n  font-weight: 600;\n  text-decoration: none;\n  margin-left: 6px;\n  transition: color 0.2s;\n}\n.form-footer[_ngcontent-%COMP%]   .register-link[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  text-decoration: underline;\n}\n\n@media (max-width: 900px) {\n  .login-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    max-width: 520px;\n  }\n  .hero-panel[_ngcontent-%COMP%] {\n    padding: 2.5rem 2rem;\n    border-right: none;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  }\n  .form-card[_ngcontent-%COMP%] {\n    padding: 2.5rem 2rem;\n  }\n}\n@media (max-width: 540px) {\n  .login-wrapper[_ngcontent-%COMP%] {\n    padding: 1rem 0.75rem;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n}"]
      });
    }
  }
  return LoginComponent;
})();

/***/ }),

/***/ 7046:
/*!********************************************************************!*\
  !*** ./src/app/features/auth/pages/register/register.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9417);





function RegisterComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "circle", 68)(3, "line", 69)(4, "line", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_div_47_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.error = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "line", 72)(10, "line", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
function RegisterComponent__svg_svg_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 74)(2, "circle", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent__svg_svg_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 76)(2, "line", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 78)(1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 81)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Password strength:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r7.passwordStrengthScore, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r7.passwordStrengthClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r7.passwordStrengthClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.passwordStrengthLabel);
  }
}
function RegisterComponent__svg_svg_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 74)(2, "circle", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent__svg_svg_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 76)(2, "line", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_span_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Passwords do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_span_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 84);
  }
}
function RegisterComponent__svg_svg_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "line", 86)(2, "polyline", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
let RegisterComponent = /*#__PURE__*/(() => {
  class RegisterComponent {
    constructor(auth, router) {
      this.auth = auth;
      this.router = router;
      this.name = '';
      this.email = '';
      this.password = '';
      this.confirmPassword = '';
      this.phone = '';
      this.city = '';
      this.error = '';
      this.loading = false;
      this.showPassword = false;
      this.showConfirmPassword = false;
      this.agreeToTerms = false;
    }
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    }
    toggleShowConfirmPassword() {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
    get passwordStrengthScore() {
      if (!this.password) return 0;
      let score = 0;
      if (this.password.length >= 8) score += 25;
      if (this.password.length >= 12) score += 15;
      if (/[A-Z]/.test(this.password)) score += 20;
      if (/[0-9]/.test(this.password)) score += 20;
      if (/[^A-Za-z0-9]/.test(this.password)) score += 20;
      return Math.min(100, score);
    }
    get passwordStrengthLabel() {
      const score = this.passwordStrengthScore;
      if (score === 0) return '';
      if (score < 40) return 'Weak';
      if (score < 75) return 'Fair';
      if (score < 90) return 'Good';
      return 'Strong';
    }
    get passwordStrengthClass() {
      const score = this.passwordStrengthScore;
      if (score < 40) return 'weak';
      if (score < 75) return 'fair';
      if (score < 90) return 'good';
      return 'strong';
    }
    get passwordsMismatch() {
      return !!this.confirmPassword && this.password !== this.confirmPassword;
    }
    submit() {
      this.error = '';
      if (!this.name.trim() || !this.email.trim() || !this.password) {
        this.error = 'Please fill in all required fields.';
        return;
      }
      if (this.password.length < 8) {
        this.error = 'Password must be at least 8 characters long.';
        return;
      }
      if (this.confirmPassword && this.password !== this.confirmPassword) {
        this.error = 'Passwords do not match.';
        return;
      }
      if (!this.agreeToTerms) {
        this.error = 'You must agree to the Terms of Service to create an account.';
        return;
      }
      this.loading = true;
      this.auth.register({
        name: this.name.trim(),
        email: this.email.trim(),
        password: this.password,
        phone: this.phone.trim(),
        city: this.city.trim()
      }).subscribe({
        next: () => this.router.navigate(['/listings/create']),
        error: error => {
          this.error = error.error?.message || 'Unable to register. Please try again.';
          this.loading = false;
        },
        complete: () => this.loading = false
      });
    }
    static {
      this.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 137,
        vars: 30,
        consts: [[1, "register-wrapper"], [1, "bg-glow", "bg-glow-1"], [1, "bg-glow", "bg-glow-2"], [1, "register-container"], [1, "hero-panel"], [1, "brand-badge"], [1, "brand-dot"], [1, "hero-title"], [1, "hero-subtitle"], [1, "features-list"], [1, "feature-card"], [1, "feature-icon"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "13 2 3 14 12 14 11 22 21 10 12 10 13 2"], [1, "feature-text"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"], [1, "form-card"], [1, "form-header"], ["class", "alert-error", "role", "alert", 4, "ngIf"], [1, "auth-form", 3, "ngSubmit"], ["regForm", "ngForm"], [1, "input-group"], ["for", "reg-name"], [1, "required-star"], [1, "input-field-wrapper"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "input-icon"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["id", "reg-name", "name", "name", "type", "text", "placeholder", "e.g. Sarah Jenkins", "required", "", 3, "ngModel", "ngModelChange"], ["nameInput", "ngModel"], ["for", "reg-email"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"], ["points", "22,6 12,13 2,6"], ["id", "reg-email", "name", "email", "type", "email", "placeholder", "name@example.com", "required", "", "email", "", 3, "ngModel", "ngModelChange"], ["emailInput", "ngModel"], [1, "input-row"], ["for", "reg-phone"], ["d", "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"], ["id", "reg-phone", "name", "phone", "type", "tel", "placeholder", "+1 (555) 000-0000", 3, "ngModel", "ngModelChange"], ["for", "reg-city"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"], ["cx", "12", "cy", "10", "r", "3"], ["id", "reg-city", "name", "city", "type", "text", "placeholder", "New York, NY", 3, "ngModel", "ngModelChange"], ["for", "reg-password"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], ["id", "reg-password", "name", "password", "placeholder", "Minimum 8 characters", "minlength", "8", "required", "", 3, "type", "ngModel", "ngModelChange"], ["passInput", "ngModel"], ["type", "button", 1, "password-toggle-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngIf"], ["class", "password-strength-container", 4, "ngIf"], ["for", "reg-confirm-password"], ["id", "reg-confirm-password", "name", "confirmPassword", "placeholder", "Re-enter your password", 3, "type", "ngModel", "ngModelChange"], ["class", "error-hint", 4, "ngIf"], [1, "terms-group"], [1, "custom-checkbox"], ["type", "checkbox", "name", "agreeToTerms", "required", "", 3, "ngModel", "ngModelChange"], [1, "checkmark"], [1, "terms-text"], ["href", "#", 3, "click"], ["type", "submit", 1, "submit-btn", 3, "disabled"], ["class", "spinner", 4, "ngIf"], ["class", "btn-arrow", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngIf"], [1, "form-footer"], ["routerLink", "/auth/login", 1, "login-link"], ["role", "alert", 1, "alert-error"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "alert-icon"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], ["type", "button", "aria-label", "Dismiss error", 1, "alert-dismiss", 3, "click"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], [1, "password-strength-container"], [1, "strength-bar-track"], [1, "strength-bar-fill", 3, "ngClass"], [1, "strength-label-row"], [1, "strength-value", 3, "ngClass"], [1, "error-hint"], [1, "spinner"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "btn-arrow"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["points", "12 5 19 12 12 19"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1)(2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Marketplace Seller Portal");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h1", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Start Selling & Growing Your Business");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Join thousands of verified sellers reaching eager buyers every day. Quick setup, zero hidden fees. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9)(14, "div", 10)(15, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "svg", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "polygon", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14)(19, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Instant Product Listing");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Publish items with photos and specs in under 60 seconds.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 10)(24, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "svg", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "path", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14)(28, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Verified Seller Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Build buyer trust with identity verification & ratings.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 10)(33, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "svg", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "path", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 14)(37, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Direct Buyer Chat");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "In-app messaging lets you close deals and answer questions fast.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 17)(42, "div", 18)(43, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Create an Account");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Enter your details below to get started");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, RegisterComponent_div_47_Template, 11, 1, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "form", 20, 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_48_listener() {
              return ctx.submit();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 22)(51, "label", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Full Name ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "svg", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "path", 27)(58, "circle", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "input", 29, 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_59_listener($event) {
              return ctx.name = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 22)(62, "label", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Email Address ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "svg", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "path", 32)(69, "polyline", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "input", 34, 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_70_listener($event) {
              return ctx.email = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 36)(73, "div", 22)(74, "label", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Phone Number");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "svg", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "path", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "input", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_79_listener($event) {
              return ctx.phone = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 22)(81, "label", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "City / Region");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "svg", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "path", 41)(86, "circle", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "input", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_87_listener($event) {
              return ctx.city = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 22)(89, "label", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Password ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "svg", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "rect", 45)(96, "path", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "input", 47, 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_97_listener($event) {
              return ctx.password = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "button", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_99_listener() {
              return ctx.toggleShowPassword();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](100, RegisterComponent__svg_svg_100_Template, 3, 0, "svg", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, RegisterComponent__svg_svg_101_Template, 3, 0, "svg", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](102, RegisterComponent_div_102_Template, 8, 5, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 22)(104, "label", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Confirm Password ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "svg", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "path", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "input", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_111_listener($event) {
              return ctx.confirmPassword = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "button", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_112_listener() {
              return ctx.toggleShowConfirmPassword();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](113, RegisterComponent__svg_svg_113_Template, 3, 0, "svg", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](114, RegisterComponent__svg_svg_114_Template, 3, 0, "svg", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](115, RegisterComponent_span_115_Template, 2, 0, "span", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 55)(117, "label", 56)(118, "input", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_118_listener($event) {
              return ctx.agreeToTerms = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "span", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "span", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, " I agree to the ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "a", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_a_click_122_listener($event) {
              return $event.preventDefault();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Terms of Service");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, " and ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "a", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_a_click_125_listener($event) {
              return $event.preventDefault();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Privacy Policy");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "button", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](128, RegisterComponent_span_128_Template, 1, 0, "span", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](131, RegisterComponent__svg_svg_131_Template, 3, 0, "svg", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 64)(133, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Already have an account?");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "a", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Log In");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          }
          if (rf & 2) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](49);
            const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](60);
            const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](71);
            const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](98);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("invalid", _r2.touched && _r2.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("invalid", _r3.touched && _r3.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.phone);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.city);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("invalid", _r4.touched && _r4.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password")("ngModel", ctx.password);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.showPassword ? "Hide password" : "Show password");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showPassword);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showPassword);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.password);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("invalid", ctx.passwordsMismatch);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.showConfirmPassword ? "text" : "password")("ngModel", ctx.confirmPassword);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.showConfirmPassword ? "Hide password" : "Show password");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showConfirmPassword);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showConfirmPassword);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.passwordsMismatch);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.agreeToTerms);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading || _r1.invalid || ctx.passwordsMismatch || !ctx.agreeToTerms);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.loading ? "Creating account..." : "Create Account");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxRequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: calc(100vh - 70px);\n  background-color: #121212;\n  color: #e0e0e0;\n}\n\n.register-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1.5rem;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n\n\n\n.bg-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(120px);\n  pointer-events: none;\n  opacity: 0.35;\n  z-index: 0;\n}\n\n.bg-glow-1[_ngcontent-%COMP%] {\n  top: -10%;\n  left: -5%;\n  width: 500px;\n  height: 500px;\n  background: radial-gradient(circle, rgba(13, 110, 253, 0.6) 0%, rgba(102, 16, 242, 0) 70%);\n}\n\n.bg-glow-2[_ngcontent-%COMP%] {\n  bottom: -10%;\n  right: -5%;\n  width: 550px;\n  height: 550px;\n  background: radial-gradient(circle, rgba(102, 16, 242, 0.5) 0%, rgba(13, 110, 253, 0) 70%);\n}\n\n\n\n.register-container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 1fr 1.15fr;\n  max-width: 1080px;\n  width: 100%;\n  background: rgba(30, 30, 30, 0.65);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(13, 110, 253, 0.1);\n  overflow: hidden;\n}\n\n\n\n.hero-panel[_ngcontent-%COMP%] {\n  padding: 3.5rem 3rem;\n  background: linear-gradient(145deg, rgba(13, 110, 253, 0.08) 0%, rgba(102, 16, 242, 0.12) 100%);\n  border-right: 1px solid rgba(255, 255, 255, 0.06);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.brand-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 14px;\n  background: rgba(13, 110, 253, 0.15);\n  border: 1px solid rgba(13, 110, 253, 0.3);\n  border-radius: 30px;\n  font-size: 0.825rem;\n  font-weight: 600;\n  color: #599bfe;\n  letter-spacing: 0.3px;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-bottom: 1.5rem;\n}\n.brand-badge[_ngcontent-%COMP%]   .brand-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background-color: #0d6efd;\n  border-radius: 50%;\n  box-shadow: 0 0 8px #0d6efd;\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  font-weight: 800;\n  line-height: 1.25;\n  margin: 0 0 1rem 0;\n  background: linear-gradient(135deg, #ffffff 0%, #d0d7de 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #b0b0b0;\n  margin: 0 0 2.5rem 0;\n}\n\n.features-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.feature-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n}\n\n.feature-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background: rgba(13, 110, 253, 0.12);\n  border: 1px solid rgba(13, 110, 253, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #408cfd;\n}\n.feature-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\n.feature-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #ffffff;\n}\n.feature-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #b0b0b0;\n  line-height: 1.45;\n}\n\n\n\n.form-card[_ngcontent-%COMP%] {\n  padding: 3.5rem 3rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  margin: 0 0 0.5rem 0;\n  color: #ffffff;\n}\n.form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #b0b0b0;\n  font-size: 0.925rem;\n}\n\n\n\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem 1rem;\n  background: rgba(220, 53, 69, 0.12);\n  border: 1px solid rgba(220, 53, 69, 0.3);\n  border-radius: 10px;\n  color: #ff6b6b;\n  font-size: 0.875rem;\n  margin-bottom: 1.5rem;\n  animation: _ngcontent-%COMP%_fadeIn 0.25s ease-in-out;\n}\n.alert-error[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.alert-error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  line-height: 1.4;\n}\n.alert-error[_ngcontent-%COMP%]   .alert-dismiss[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #ff6b6b;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0.8;\n  transition: opacity 0.2s;\n}\n.alert-error[_ngcontent-%COMP%]   .alert-dismiss[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.alert-error[_ngcontent-%COMP%]   .alert-dismiss[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n\n\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n\n.input-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n\n.input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #d6d6d6;\n}\n.input-group[_ngcontent-%COMP%]   .required-star[_ngcontent-%COMP%] {\n  color: #ff4d4f;\n}\n\n.input-field-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-field-wrapper[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  width: 18px;\n  height: 18px;\n  color: rgba(255, 255, 255, 0.4);\n  pointer-events: none;\n  transition: color 0.2s ease;\n}\n.input-field-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 46px;\n  padding: 0 14px 0 44px;\n  background: rgba(18, 18, 18, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 10px;\n  font-size: 0.925rem;\n  color: #ffffff;\n  outline: none;\n  transition: all 0.2s ease;\n  box-sizing: border-box;\n}\n.input-field-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.3);\n}\n.input-field-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #0d6efd;\n  background: rgba(18, 18, 18, 0.85);\n  box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.2);\n}\n.input-field-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .input-icon[_ngcontent-%COMP%] {\n  color: #0d6efd;\n}\n.input-field-wrapper[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%] {\n  border-color: #ff4d4f;\n}\n.input-field-wrapper[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(255, 77, 79, 0.2);\n}\n.input-field-wrapper[_ngcontent-%COMP%]   .password-toggle-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.4);\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  transition: color 0.2s, background-color 0.2s;\n}\n.input-field-wrapper[_ngcontent-%COMP%]   .password-toggle-btn[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  background-color: rgba(255, 255, 255, 0.08);\n}\n.input-field-wrapper[_ngcontent-%COMP%]   .password-toggle-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n\n.error-hint[_ngcontent-%COMP%] {\n  font-size: 0.775rem;\n  color: #ff4d4f;\n  margin-top: 0.2rem;\n}\n\n\n\n.password-strength-container[_ngcontent-%COMP%] {\n  margin-top: 0.4rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n\n.strength-bar-track[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 2px;\n  overflow: hidden;\n}\n\n.strength-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0;\n  transition: width 0.3s ease, background-color 0.3s ease;\n}\n.strength-bar-fill.weak[_ngcontent-%COMP%] {\n  background-color: #ff4d4f;\n}\n.strength-bar-fill.fair[_ngcontent-%COMP%] {\n  background-color: #faad14;\n}\n.strength-bar-fill.good[_ngcontent-%COMP%] {\n  background-color: #1890ff;\n}\n.strength-bar-fill.strong[_ngcontent-%COMP%] {\n  background-color: #52c41a;\n}\n\n.strength-label-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.775rem;\n  color: #b0b0b0;\n}\n.strength-label-row[_ngcontent-%COMP%]   .strength-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.strength-label-row[_ngcontent-%COMP%]   .strength-value.weak[_ngcontent-%COMP%] {\n  color: #ff4d4f;\n}\n.strength-label-row[_ngcontent-%COMP%]   .strength-value.fair[_ngcontent-%COMP%] {\n  color: #faad14;\n}\n.strength-label-row[_ngcontent-%COMP%]   .strength-value.good[_ngcontent-%COMP%] {\n  color: #1890ff;\n}\n.strength-label-row[_ngcontent-%COMP%]   .strength-value.strong[_ngcontent-%COMP%] {\n  color: #52c41a;\n}\n\n\n\n.terms-group[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n\n.custom-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  font-size: 0.85rem;\n  color: #b0b0b0;\n  position: relative;\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n.custom-checkbox[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  position: relative;\n  top: 2px;\n  height: 18px;\n  width: 18px;\n  flex-shrink: 0;\n  background-color: rgba(18, 18, 18, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n.custom-checkbox[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n  left: 6px;\n  top: 2px;\n  width: 4px;\n  height: 9px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n.custom-checkbox[_ngcontent-%COMP%]   .terms-text[_ngcontent-%COMP%] {\n  line-height: 1.45;\n}\n.custom-checkbox[_ngcontent-%COMP%]   .terms-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #408cfd;\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.2s;\n}\n.custom-checkbox[_ngcontent-%COMP%]   .terms-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  color: #72abfe;\n}\n\n\n\n.submit-btn[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  height: 48px;\n  width: 100%;\n  background: linear-gradient(135deg, #0d6efd 0%, #6610f2 100%);\n  border: none;\n  border-radius: 10px;\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  box-shadow: 0 6px 20px rgba(13, 110, 253, 0.35);\n  transition: all 0.25s ease;\n}\n.submit-btn[_ngcontent-%COMP%]   .btn-arrow[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  transition: transform 0.2s ease;\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(13, 110, 253, 0.5);\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled)   .btn-arrow[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.submit-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n\n\n\n.spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n\n.form-footer[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: center;\n  font-size: 0.9rem;\n  color: #b0b0b0;\n}\n.form-footer[_ngcontent-%COMP%]   .login-link[_ngcontent-%COMP%] {\n  color: #599bfe;\n  font-weight: 600;\n  text-decoration: none;\n  margin-left: 6px;\n  transition: color 0.2s;\n}\n.form-footer[_ngcontent-%COMP%]   .login-link[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  text-decoration: underline;\n}\n\n\n\n@media (max-width: 900px) {\n  .register-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    max-width: 520px;\n  }\n  .hero-panel[_ngcontent-%COMP%] {\n    padding: 2.5rem 2rem;\n    border-right: none;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  }\n  .form-card[_ngcontent-%COMP%] {\n    padding: 2.5rem 2rem;\n  }\n}\n@media (max-width: 540px) {\n  .register-wrapper[_ngcontent-%COMP%] {\n    padding: 1rem 0.75rem;\n  }\n  .input-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n}"]
      });
    }
  }
  return RegisterComponent;
})();

/***/ })

}]);