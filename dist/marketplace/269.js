"use strict";
(self["webpackChunkmarketplace"] = self["webpackChunkmarketplace"] || []).push([[269],{

/***/ 5436:
/*!********************************************************!*\
  !*** ./src/app/features/admin/admin-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminRoutingModule: () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _pages_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/admin-dashboard/admin-dashboard.component */ 1541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);




const routes = [{
  path: '',
  component: _pages_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.AdminDashboardComponent
}];
let AdminRoutingModule = /*#__PURE__*/(() => {
  class AdminRoutingModule {
    static {
      this.ɵfac = function AdminRoutingModule_Factory(t) {
        return new (t || AdminRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AdminRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });
    }
  }
  return AdminRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6269:
/*!************************************************!*\
  !*** ./src/app/features/admin/admin.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminModule: () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 5436);
/* harmony import */ var _pages_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/admin-dashboard/admin-dashboard.component */ 1541);
/* harmony import */ var _reported_listings_reported_listings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reported-listings/reported-listings.component */ 1654);
/* harmony import */ var _users_management_users_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-management/users-management.component */ 5764);
/* harmony import */ var _user_verifications_user_verifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-verifications/user-verifications.component */ 8192);
/* harmony import */ var _components_reports_table_reports_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/reports-table/reports-table.component */ 6775);
/* harmony import */ var _components_verification_table_verification_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/verification-table/verification-table.component */ 5549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7705);









let AdminModule = /*#__PURE__*/(() => {
  class AdminModule {
    static {
      this.ɵfac = function AdminModule_Factory(t) {
        return new (t || AdminModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: AdminModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule]
      });
    }
  }
  return AdminModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AdminModule, {
    declarations: [_pages_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.AdminDashboardComponent, _user_verifications_user_verifications_component__WEBPACK_IMPORTED_MODULE_4__.UserVerificationsComponent, _reported_listings_reported_listings_component__WEBPACK_IMPORTED_MODULE_2__.ReportedListingsComponent, _users_management_users_management_component__WEBPACK_IMPORTED_MODULE_3__.UsersManagementComponent, _components_verification_table_verification_table_component__WEBPACK_IMPORTED_MODULE_6__.VerificationTableComponent, _components_reports_table_reports_table_component__WEBPACK_IMPORTED_MODULE_5__.ReportsTableComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule]
  });
})();

/***/ }),

/***/ 6775:
/*!************************************************************************************!*\
  !*** ./src/app/features/admin/components/reports-table/reports-table.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsTableComponent: () => (/* binding */ ReportsTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);

let ReportsTableComponent = /*#__PURE__*/(() => {
  class ReportsTableComponent {
    static {
      this.ɵfac = function ReportsTableComponent_Factory(t) {
        return new (t || ReportsTableComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ReportsTableComponent,
        selectors: [["app-reports-table"]],
        decls: 3,
        vars: 0,
        consts: [[1, "reports-table"]],
        template: function ReportsTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reports table placeholder.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
        },
        styles: [".reports-table[_ngcontent-%COMP%] {\n  display: block;\n}"]
      });
    }
  }
  return ReportsTableComponent;
})();

/***/ }),

/***/ 5549:
/*!**********************************************************************************************!*\
  !*** ./src/app/features/admin/components/verification-table/verification-table.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerificationTableComponent: () => (/* binding */ VerificationTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);

let VerificationTableComponent = /*#__PURE__*/(() => {
  class VerificationTableComponent {
    static {
      this.ɵfac = function VerificationTableComponent_Factory(t) {
        return new (t || VerificationTableComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VerificationTableComponent,
        selectors: [["app-verification-table"]],
        decls: 3,
        vars: 0,
        consts: [[1, "verification-table"]],
        template: function VerificationTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Verification table placeholder.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
        },
        styles: [".verification-table[_ngcontent-%COMP%] {\n  display: block;\n}"]
      });
    }
  }
  return VerificationTableComponent;
})();

/***/ }),

/***/ 1541:
/*!***********************************************************************************!*\
  !*** ./src/app/features/admin/pages/admin-dashboard/admin-dashboard.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminDashboardComponent: () => (/* binding */ AdminDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _user_verifications_user_verifications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../user-verifications/user-verifications.component */ 8192);
/* harmony import */ var _reported_listings_reported_listings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reported-listings/reported-listings.component */ 1654);
/* harmony import */ var _users_management_users_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../users-management/users-management.component */ 5764);




let AdminDashboardComponent = /*#__PURE__*/(() => {
  class AdminDashboardComponent {
    static {
      this.ɵfac = function AdminDashboardComponent_Factory(t) {
        return new (t || AdminDashboardComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: AdminDashboardComponent,
        selectors: [["app-admin-dashboard"]],
        decls: 16,
        vars: 0,
        consts: [[1, "admin-dashboard"], [1, "dashboard-title"], [1, "grid"], [1, "card"], [1, "card-title"]],
        template: function AdminDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "h1", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Admin Dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "section", 3)(5, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "User Verifications");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-user-verifications");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "section", 3)(9, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Reported Listings");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-reported-listings");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "section", 3)(13, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Users Management");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "app-users-management");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          }
        },
        dependencies: [_user_verifications_user_verifications_component__WEBPACK_IMPORTED_MODULE_0__.UserVerificationsComponent, _reported_listings_reported_listings_component__WEBPACK_IMPORTED_MODULE_1__.ReportedListingsComponent, _users_management_users_management_component__WEBPACK_IMPORTED_MODULE_2__.UsersManagementComponent],
        styles: [".admin-dashboard[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background: linear-gradient(135deg, hsl(220, 15%, 12%), hsl(220, 15%, 18%));\n  border-radius: 1rem;\n  backdrop-filter: blur(12px);\n  color: hsl(0, 0%, 95%);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n}\n.admin-dashboard[_ngcontent-%COMP%]   .dashboard-title[_ngcontent-%COMP%] {\n  font-family: \"Inter\", sans-serif;\n  font-size: 2.5rem;\n  margin-bottom: 1.5rem;\n  text-align: center;\n  color: hsl(210, 80%, 60%);\n}\n.admin-dashboard[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.5rem;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n}\n.admin-dashboard[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border-radius: 0.75rem;\n  padding: 1rem;\n  backdrop-filter: blur(8px);\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);\n}\n.admin-dashboard[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-family: \"Inter\", sans-serif;\n  font-size: 1.5rem;\n  margin-bottom: 0.75rem;\n  color: hsl(210, 80%, 70%);\n}"]
      });
    }
  }
  return AdminDashboardComponent;
})();

/***/ }),

/***/ 1654:
/*!*********************************************************************************!*\
  !*** ./src/app/features/admin/reported-listings/reported-listings.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportedListingsComponent: () => (/* binding */ ReportedListingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _reported_listings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reported-listings.service */ 1338);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);



function ReportedListingsComponent_tr_20_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportedListingsComponent_tr_20_button_13_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const listing_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      ctx_r4.resolve(listing_r2.id);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Resolve ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ReportedListingsComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportedListingsComponent_tr_20_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const listing_r2 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.select(listing_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ReportedListingsComponent_tr_20_button_13_Template, 2, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const listing_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("resolved", listing_r2.status === "Resolved");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](listing_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](listing_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](listing_r2.reportReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 8, listing_r2.date, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](listing_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", listing_r2.status !== "Resolved");
  }
}
function ReportedListingsComponent_p_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No reported listings.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
let ReportedListingsComponent = /*#__PURE__*/(() => {
  class ReportedListingsComponent {
    constructor(service) {
      this.service = service;
      this.listings = [];
    }
    ngOnInit() {
      this.service.getListings().subscribe(data => this.listings = data);
    }
    resolve(id) {
      this.service.resolveListing(id).subscribe(() => {
        const listing = this.listings.find(l => l.id === id);
        if (listing) {
          listing.status = 'Resolved';
        }
      });
    }
    // Optional: handle row selection for future features
    select(listing) {}
    static {
      this.ɵfac = function ReportedListingsComponent_Factory(t) {
        return new (t || ReportedListingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_reported_listings_service__WEBPACK_IMPORTED_MODULE_0__.ReportedListingsService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ReportedListingsComponent,
        selectors: [["app-reported-listings"]],
        decls: 22,
        vars: 2,
        consts: [[1, "reported-listings"], [1, "section-title"], [1, "table-wrapper"], [1, "reports-table"], [3, "resolved", "click", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [3, "click"], ["class", "resolve-btn", 3, "click", 4, "ngIf"], [1, "resolve-btn", 3, "click"], [1, "empty-state"]],
        template: function ReportedListingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "h2", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Reported Listings");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "table", 3)(5, "thead")(6, "tr")(7, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "ID");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Title");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Reason");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Action");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ReportedListingsComponent_tr_20_Template, 14, 11, "tr", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ReportedListingsComponent_p_21_Template, 2, 0, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listings);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listings.length === 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
        styles: [".reported-listings[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background: linear-gradient(135deg, hsl(220, 15%, 12%), hsl(220, 15%, 18%));\n  border-radius: 1rem;\n  backdrop-filter: blur(12px);\n  color: hsl(0, 0%, 95%);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n}\n.reported-listings[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-family: \"Inter\", sans-serif;\n  font-size: 2rem;\n  margin-bottom: 1.5rem;\n  text-align: center;\n  color: hsl(210, 80%, 60%);\n}\n.reported-listings[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: 0.75rem;\n  background: rgba(255, 255, 255, 0.04);\n  padding: 1rem;\n  backdrop-filter: blur(8px);\n}\n.reported-listings[_ngcontent-%COMP%]   .reports-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0 0.5rem;\n  font-family: \"Inter\", sans-serif;\n  color: inherit;\n}\n.reported-listings[_ngcontent-%COMP%]   .reports-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: hsla(0, 0%, 100%, 0.08);\n  color: hsl(210, 80%, 70%);\n  padding: 0.75rem 1rem;\n  text-align: left;\n  font-weight: 600;\n}\n.reported-listings[_ngcontent-%COMP%]   .reports-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  padding: 0.75rem 1rem;\n  border-radius: 0.5rem;\n  transition: background 0.2s ease;\n}\n.reported-listings[_ngcontent-%COMP%]   .reports-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.reported-listings[_ngcontent-%COMP%]   .reports-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n}\n.reported-listings[_ngcontent-%COMP%]   .reports-table[_ngcontent-%COMP%]   tr.resolved[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  text-decoration: line-through;\n}\n.reported-listings[_ngcontent-%COMP%]   .resolve-btn[_ngcontent-%COMP%] {\n  background: hsl(210, 80%, 55%);\n  border: none;\n  color: #fff;\n  padding: 0.4rem 0.8rem;\n  border-radius: 0.4rem;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: transform 0.1s ease, background 0.2s ease;\n}\n.reported-listings[_ngcontent-%COMP%]   .resolve-btn[_ngcontent-%COMP%]:hover {\n  background: hsl(210, 80%, 45%);\n}\n.reported-listings[_ngcontent-%COMP%]   .resolve-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.reported-listings[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n  font-size: 1.1rem;\n  color: hsl(0, 0%, 70%);\n}"]
      });
    }
  }
  return ReportedListingsComponent;
})();

/***/ }),

/***/ 1338:
/*!*******************************************************************************!*\
  !*** ./src/app/features/admin/reported-listings/reported-listings.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportedListingsService: () => (/* binding */ ReportedListingsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 7673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);


const MOCK_LISTINGS = [{
  id: 1,
  title: 'Vintage Lamp',
  reportReason: 'Inappropriate content',
  date: new Date('2026-06-20'),
  status: 'Pending'
}, {
  id: 2,
  title: 'Antique Clock',
  reportReason: 'Spam',
  date: new Date('2026-06-22'),
  status: 'Pending'
}, {
  id: 3,
  title: 'Wooden Chair',
  reportReason: 'Harassment',
  date: new Date('2026-06-25'),
  status: 'Resolved'
}];
let ReportedListingsService = /*#__PURE__*/(() => {
  class ReportedListingsService {
    getListings() {
      // Placeholder for real HTTP call
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(MOCK_LISTINGS);
    }
    resolveListing(id) {
      // Simulate resolve – in real app would PATCH/PUT
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(undefined);
    }
    static {
      this.ɵfac = function ReportedListingsService_Factory(t) {
        return new (t || ReportedListingsService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ReportedListingsService,
        factory: ReportedListingsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ReportedListingsService;
})();

/***/ }),

/***/ 8192:
/*!***********************************************************************************!*\
  !*** ./src/app/features/admin/user-verifications/user-verifications.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserVerificationsComponent: () => (/* binding */ UserVerificationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _user_verifications_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-verifications.service */ 9448);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);



function UserVerificationsComponent_tr_20_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserVerificationsComponent_tr_20_button_13_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const v_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      ctx_r4.verify(v_r2.id);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Verify ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UserVerificationsComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserVerificationsComponent_tr_20_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const v_r2 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.select(v_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UserVerificationsComponent_tr_20_button_13_Template, 2, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const v_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("verified", v_r2.status === "Verified");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](v_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](v_r2.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](v_r2.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 8, v_r2.date, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](v_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", v_r2.status !== "Verified");
  }
}
function UserVerificationsComponent_p_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No user verifications pending.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
let UserVerificationsComponent = /*#__PURE__*/(() => {
  class UserVerificationsComponent {
    constructor(service) {
      this.service = service;
      this.verifications = [];
    }
    ngOnInit() {
      this.service.getVerifications().subscribe(data => this.verifications = data);
    }
    verify(id) {
      this.service.verifyUser(id).subscribe(() => {
        const v = this.verifications.find(item => item.id === id);
        if (v) {
          v.status = 'Verified';
        }
      });
    }
    // Placeholder for future row selection
    select(item) {}
    static {
      this.ɵfac = function UserVerificationsComponent_Factory(t) {
        return new (t || UserVerificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_verifications_service__WEBPACK_IMPORTED_MODULE_0__.UserVerificationsService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: UserVerificationsComponent,
        selectors: [["app-user-verifications"]],
        decls: 22,
        vars: 2,
        consts: [[1, "user-verifications"], [1, "section-title"], [1, "table-wrapper"], [1, "verifications-table"], [3, "verified", "click", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [3, "click"], ["class", "verify-btn", 3, "click", 4, "ngIf"], [1, "verify-btn", 3, "click"], [1, "empty-state"]],
        template: function UserVerificationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "h2", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "User Verifications");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "table", 3)(5, "thead")(6, "tr")(7, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "ID");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Username");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Reason");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Action");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, UserVerificationsComponent_tr_20_Template, 14, 11, "tr", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, UserVerificationsComponent_p_21_Template, 2, 0, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.verifications);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.verifications.length === 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
        styles: [".user-verifications[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background: linear-gradient(135deg, hsl(220, 15%, 12%), hsl(220, 15%, 18%));\n  border-radius: 1rem;\n  backdrop-filter: blur(12px);\n  color: hsl(0, 0%, 95%);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n}\n.user-verifications[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-family: \"Inter\", sans-serif;\n  font-size: 2rem;\n  margin-bottom: 1.5rem;\n  text-align: center;\n  color: hsl(210, 80%, 60%);\n}\n.user-verifications[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: 0.75rem;\n  background: rgba(255, 255, 255, 0.04);\n  padding: 1rem;\n  backdrop-filter: blur(8px);\n}\n.user-verifications[_ngcontent-%COMP%]   .verifications-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0 0.5rem;\n  font-family: \"Inter\", sans-serif;\n  color: inherit;\n}\n.user-verifications[_ngcontent-%COMP%]   .verifications-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: hsla(0, 0%, 100%, 0.08);\n  color: hsl(210, 80%, 70%);\n  padding: 0.75rem 1rem;\n  text-align: left;\n  font-weight: 600;\n}\n.user-verifications[_ngcontent-%COMP%]   .verifications-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  padding: 0.75rem 1rem;\n  border-radius: 0.5rem;\n  transition: background 0.2s ease;\n}\n.user-verifications[_ngcontent-%COMP%]   .verifications-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.user-verifications[_ngcontent-%COMP%]   .verifications-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n}\n.user-verifications[_ngcontent-%COMP%]   .verifications-table[_ngcontent-%COMP%]   tr.verified[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  text-decoration: line-through;\n}\n.user-verifications[_ngcontent-%COMP%]   .verify-btn[_ngcontent-%COMP%] {\n  background: hsl(210, 80%, 55%);\n  border: none;\n  color: #fff;\n  padding: 0.4rem 0.8rem;\n  border-radius: 0.4rem;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: transform 0.1s ease, background 0.2s ease;\n}\n.user-verifications[_ngcontent-%COMP%]   .verify-btn[_ngcontent-%COMP%]:hover {\n  background: hsl(210, 80%, 45%);\n}\n.user-verifications[_ngcontent-%COMP%]   .verify-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.user-verifications[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n  font-size: 1.1rem;\n  color: hsl(0, 0%, 70%);\n}"]
      });
    }
  }
  return UserVerificationsComponent;
})();

/***/ }),

/***/ 9448:
/*!*********************************************************************************!*\
  !*** ./src/app/features/admin/user-verifications/user-verifications.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserVerificationsService: () => (/* binding */ UserVerificationsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 7673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);


const MOCK_VERIFICATIONS = [{
  id: 1,
  username: 'john_doe',
  reason: 'Suspicious activity',
  date: new Date('2026-06-18'),
  status: 'Pending'
}, {
  id: 2,
  username: 'jane_smith',
  reason: 'Multiple reports',
  date: new Date('2026-06-21'),
  status: 'Pending'
}, {
  id: 3,
  username: 'bob_builder',
  reason: 'Policy violation',
  date: new Date('2026-06-24'),
  status: 'Verified'
}];
let UserVerificationsService = /*#__PURE__*/(() => {
  class UserVerificationsService {
    getVerifications() {
      // In a real app this would be an HTTP request
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(MOCK_VERIFICATIONS);
    }
    verifyUser(id) {
      // Stub for future API call – simulate immediate completion
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(undefined);
    }
    static {
      this.ɵfac = function UserVerificationsService_Factory(t) {
        return new (t || UserVerificationsService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UserVerificationsService,
        factory: UserVerificationsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return UserVerificationsService;
})();

/***/ }),

/***/ 5764:
/*!*******************************************************************************!*\
  !*** ./src/app/features/admin/users-management/users-management.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersManagementComponent: () => (/* binding */ UsersManagementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _users_management_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-management.service */ 9964);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);



function UsersManagementComponent_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersManagementComponent_tr_22_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const u_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.select(u_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td")(15, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersManagementComponent_tr_22_Template_button_click_15_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const u_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      ctx_r5.toggle(u_r2.id);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const u_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("inactive", u_r2.status === "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](u_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](u_r2.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](u_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](u_r2.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 9, u_r2.dateCreated, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](u_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", u_r2.status === "Active" ? "Deactivate" : "Activate", " ");
  }
}
function UsersManagementComponent_p_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No users found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
let UsersManagementComponent = /*#__PURE__*/(() => {
  class UsersManagementComponent {
    constructor(service) {
      this.service = service;
      this.users = [];
    }
    ngOnInit() {
      this.service.getUsers().subscribe(data => this.users = data);
    }
    toggle(id) {
      this.service.toggleStatus(id).subscribe(() => {
        const u = this.users.find(user => user.id === id);
        if (u) {
          u.status = u.status === 'Active' ? 'Inactive' : 'Active';
        }
      });
    }
    // Placeholder for row selection
    select(user) {}
    static {
      this.ɵfac = function UsersManagementComponent_Factory(t) {
        return new (t || UsersManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_users_management_service__WEBPACK_IMPORTED_MODULE_0__.UsersManagementService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: UsersManagementComponent,
        selectors: [["app-users-management"]],
        decls: 24,
        vars: 2,
        consts: [[1, "users-management"], [1, "section-title"], [1, "table-wrapper"], [1, "users-table"], [3, "inactive", "click", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [3, "click"], [1, "status-btn", 3, "click"], [1, "empty-state"]],
        template: function UsersManagementComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "h2", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Users Management");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "table", 3)(5, "thead")(6, "tr")(7, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "ID");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Username");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Role");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Created");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Action");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, UsersManagementComponent_tr_22_Template, 17, 12, "tr", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, UsersManagementComponent_p_23_Template, 2, 0, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.users);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.users.length === 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
        styles: [".users-management[_ngcontent-%COMP%] {\n  display: block;\n}"]
      });
    }
  }
  return UsersManagementComponent;
})();

/***/ }),

/***/ 9964:
/*!*****************************************************************************!*\
  !*** ./src/app/features/admin/users-management/users-management.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersManagementService: () => (/* binding */ UsersManagementService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 7673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);


const MOCK_USERS = [{
  id: 1,
  username: 'alice',
  email: 'alice@example.com',
  role: 'Admin',
  dateCreated: new Date('2024-01-15'),
  status: 'Active'
}, {
  id: 2,
  username: 'bob',
  email: 'bob@example.com',
  role: 'Editor',
  dateCreated: new Date('2025-03-22'),
  status: 'Inactive'
}, {
  id: 3,
  username: 'carol',
  email: 'carol@example.com',
  role: 'Viewer',
  dateCreated: new Date('2025-07-08'),
  status: 'Active'
}];
let UsersManagementService = /*#__PURE__*/(() => {
  class UsersManagementService {
    getUsers() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(MOCK_USERS);
    }
    toggleStatus(id) {
      // In a real app this would call an API; here we just simulate success.
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(undefined);
    }
    static {
      this.ɵfac = function UsersManagementService_Factory(t) {
        return new (t || UsersManagementService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UsersManagementService,
        factory: UsersManagementService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return UsersManagementService;
})();

/***/ })

}]);