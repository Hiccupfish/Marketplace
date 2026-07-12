"use strict";
(self["webpackChunkmarketplace"] = self["webpackChunkmarketplace"] || []).push([[829],{

/***/ 6823:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/home/components/categories-section/categories-section.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoriesSectionComponent: () => (/* binding */ CategoriesSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);



function CategoriesSectionComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesSectionComponent_div_7_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const category_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.selectCategory(category_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r1.icon, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r1.name, " ");
  }
}
let CategoriesSectionComponent = /*#__PURE__*/(() => {
  class CategoriesSectionComponent {
    constructor(router) {
      this.router = router;
      this.categories = [{
        id: 'mechanics',
        name: 'Mechanics',
        slug: 'mechanics',
        icon: 'Tools'
      }, {
        id: 'painters',
        name: 'Painters',
        slug: 'painters',
        icon: 'Paint'
      }, {
        id: 'electronics',
        name: 'Electronics',
        slug: 'electronics',
        icon: 'Tech'
      }, {
        id: 'plumbing',
        name: 'Plumbing',
        slug: 'plumbing',
        icon: 'Pipe'
      }, {
        id: 'furniture',
        name: 'Furniture',
        slug: 'furniture',
        icon: 'Home'
      }, {
        id: 'repairs',
        name: 'Repairs',
        slug: 'repairs',
        icon: 'Fix'
      }];
    }
    selectCategory(category) {
      this.router.navigate(['/listings'], {
        queryParams: {
          category: category.slug
        }
      });
    }
    static {
      this.ɵfac = function CategoriesSectionComponent_Factory(t) {
        return new (t || CategoriesSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CategoriesSectionComponent,
        selectors: [["app-categories-section"]],
        decls: 8,
        vars: 1,
        consts: [[1, "categories-section"], [1, "categories-section__header"], [1, "categories-section__grid"], ["class", "category-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "category-card", 3, "click"], [1, "category-card__icon"], [1, "category-card__name"]],
        template: function CategoriesSectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Browse Categories");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Find services and products by category");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CategoriesSectionComponent_div_7_Template, 5, 2, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
        styles: [".categories-section[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n\n.categories-section__header[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.categories-section__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin: 0;\n  color: #333;\n}\n\n.categories-section__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #666;\n  font-size: 14px;\n}\n\n\n\n.categories-section__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: 12px;\n}\n\n\n\n.category-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #eaeaea;\n  border-radius: 10px;\n  padding: 12px;\n  text-align: center;\n  cursor: pointer;\n  transition: 0.2s ease;\n}\n\n.category-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: #055c8d;\n}\n\n\n\n.category-card__icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-bottom: 6px;\n}\n\n\n\n.category-card__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n}"]
      });
    }
  }
  return CategoriesSectionComponent;
})();

/***/ }),

/***/ 9665:
/*!*******************************************************************************************!*\
  !*** ./src/app/features/home/components/featured-listings/featured-listings.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeaturedListingsComponent: () => (/* binding */ FeaturedListingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _shared_services_listing_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/services/listing.service */ 1726);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_listing_card_listing_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/listing-card/listing-card.component */ 6085);




function FeaturedListingsComponent_app_listing_card_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-listing-card", 4);
  }
  if (rf & 2) {
    const listing_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("listing", listing_r1);
  }
}
let FeaturedListingsComponent = /*#__PURE__*/(() => {
  class FeaturedListingsComponent {
    constructor(listingService) {
      this.listingService = listingService;
      this.featuredListings = [];
    }
    ngOnInit() {
      this.listingService.getListings().subscribe(listings => {
        // Take first three listings as featured (could be refined)
        this.featuredListings = listings.slice(0, 3);
      });
    }
    static {
      this.ɵfac = function FeaturedListingsComponent_Factory(t) {
        return new (t || FeaturedListingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_listing_service__WEBPACK_IMPORTED_MODULE_0__.ListingService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: FeaturedListingsComponent,
        selectors: [["app-featured-listings"]],
        decls: 8,
        vars: 1,
        consts: [[1, "featured-listings"], [1, "featured-listings__header"], [1, "featured-listings__grid"], [3, "listing", 4, "ngFor", "ngForOf"], [3, "listing"]],
        template: function FeaturedListingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Featured Listings");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Trusted sellers and services in your area");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, FeaturedListingsComponent_app_listing_card_7_Template, 1, 1, "app-listing-card", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.featuredListings);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _shared_components_listing_card_listing_card_component__WEBPACK_IMPORTED_MODULE_1__.ListingCardComponent],
        styles: [".featured-listings[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n\n.featured-listings__header[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.featured-listings__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin: 0;\n  color: #333;\n}\n\n.featured-listings__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #666;\n  font-size: 14px;\n}\n\n\n\n.featured-listings__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 15px;\n}"]
      });
    }
  }
  return FeaturedListingsComponent;
})();

/***/ }),

/***/ 7723:
/*!*********************************************************************************!*\
  !*** ./src/app/features/home/components/hero-section/hero-section.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroSectionComponent: () => (/* binding */ HeroSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 9417);



let HeroSectionComponent = /*#__PURE__*/(() => {
  class HeroSectionComponent {
    constructor(router) {
      this.router = router;
      this.searchQuery = '';
    }
    onSearch() {
      const query = this.searchQuery.trim();
      this.router.navigate(['/listings'], {
        queryParams: query ? {
          q: query
        } : undefined
      });
    }
    filter(category) {
      this.router.navigate(['/listings'], {
        queryParams: {
          category
        }
      });
    }
    static {
      this.ɵfac = function HeroSectionComponent_Factory(t) {
        return new (t || HeroSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeroSectionComponent,
        selectors: [["app-hero-section"]],
        decls: 19,
        vars: 1,
        consts: [[1, "hero"], [1, "hero__content"], [1, "hero__title"], [1, "hero__subtitle"], [1, "hero__search"], ["type", "text", "placeholder", "Search services or products...", 3, "ngModel", "ngModelChange"], [3, "click"], [1, "hero__categories"]],
        template: function HeroSectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Find trusted local sellers & artisans near you ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " From mechanics to painters, electronics to furniture \u2014 connect safely with verified people in your community. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeroSectionComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.searchQuery = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroSectionComponent_Template_button_click_8_listener() {
              return ctx.onSearch();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Search ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroSectionComponent_Template_span_click_11_listener() {
              return ctx.filter("mechanics");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Mechanics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroSectionComponent_Template_span_click_13_listener() {
              return ctx.filter("painters");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Painters");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroSectionComponent_Template_span_click_15_listener() {
              return ctx.filter("electronics");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Electronics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroSectionComponent_Template_span_click_17_listener() {
              return ctx.filter("plumbing");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Plumbing");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchQuery);
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
        styles: [".hero[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 60px 20px;\n  background: linear-gradient(135deg, #055c8d, #0a8fd1);\n  color: white;\n  text-align: center;\n}\n\n.hero__content[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n\n.hero__title[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  margin-bottom: 15px;\n}\n\n.hero__subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.9;\n  margin-bottom: 25px;\n}\n\n\n\n.hero__search[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n\n.hero__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 70%;\n  padding: 12px;\n  border: none;\n  border-radius: 8px;\n  outline: none;\n}\n\n.hero__search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 12px 18px;\n  border: none;\n  border-radius: 8px;\n  background: #ffcc00;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n\n\n.hero__categories[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n\n.hero__categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 6px 12px;\n  border-radius: 20px;\n  cursor: pointer;\n  font-size: 14px;\n}\n\n.hero__categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.35);\n}"]
      });
    }
  }
  return HeroSectionComponent;
})();

/***/ }),

/***/ 1237:
/*!*********************************************************************************!*\
  !*** ./src/app/features/home/components/how-it-works/how-it-works.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HowItWorksComponent: () => (/* binding */ HowItWorksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);

let HowItWorksComponent = /*#__PURE__*/(() => {
  class HowItWorksComponent {
    static {
      this.ɵfac = function HowItWorksComponent_Factory(t) {
        return new (t || HowItWorksComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HowItWorksComponent,
        selectors: [["app-how-it-works"]],
        decls: 3,
        vars: 0,
        consts: [[1, "how-it-works"]],
        template: function HowItWorksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "How It Works");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: block;\n}"]
      });
    }
  }
  return HowItWorksComponent;
})();

/***/ }),

/***/ 6284:
/*!******************************************************!*\
  !*** ./src/app/features/home/home-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeRoutingModule: () => (/* binding */ HomeRoutingModule),
/* harmony export */   homeRoutes: () => (/* binding */ homeRoutes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 9707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);




const homeRoutes = [{
  path: '',
  component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}];
let HomeRoutingModule = /*#__PURE__*/(() => {
  class HomeRoutingModule {
    static {
      this.ɵfac = function HomeRoutingModule_Factory(t) {
        return new (t || HomeRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: HomeRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(homeRoutes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });
    }
  }
  return HomeRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2829:
/*!**********************************************!*\
  !*** ./src/app/features/home/home.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6284);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ 9707);
/* harmony import */ var _components_hero_section_hero_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/hero-section/hero-section.component */ 7723);
/* harmony import */ var _components_featured_listings_featured_listings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/featured-listings/featured-listings.component */ 9665);
/* harmony import */ var _components_categories_section_categories_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/categories-section/categories-section.component */ 6823);
/* harmony import */ var _components_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/how-it-works/how-it-works.component */ 1237);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7705);










let HomeModule = /*#__PURE__*/(() => {
  class HomeModule {
    static {
      this.ɵfac = function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: HomeModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule]
      });
    }
  }
  return HomeModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _components_hero_section_hero_section_component__WEBPACK_IMPORTED_MODULE_3__.HeroSectionComponent, _components_featured_listings_featured_listings_component__WEBPACK_IMPORTED_MODULE_4__.FeaturedListingsComponent, _components_categories_section_categories_section_component__WEBPACK_IMPORTED_MODULE_5__.CategoriesSectionComponent, _components_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_6__.HowItWorksComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule]
  });
})();

/***/ }),

/***/ 9707:
/*!************************************************************!*\
  !*** ./src/app/features/home/pages/home/home.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _components_hero_section_hero_section_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/hero-section/hero-section.component */ 7723);
/* harmony import */ var _components_featured_listings_featured_listings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/featured-listings/featured-listings.component */ 9665);
/* harmony import */ var _components_categories_section_categories_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/categories-section/categories-section.component */ 6823);
/* harmony import */ var _components_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/how-it-works/how-it-works.component */ 1237);





let HomeComponent = /*#__PURE__*/(() => {
  class HomeComponent {
    static {
      this.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 15,
        vars: 0,
        consts: [[1, "home-page"], [1, "home-page__content"], [1, "home-page__section"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-hero-section");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1)(3, "section", 2)(4, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Featured Listings");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-featured-listings");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "section", 2)(8, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Browse Categories");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "app-categories-section");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "section", 2)(12, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "How It Works");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "app-how-it-works");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          }
        },
        dependencies: [_components_hero_section_hero_section_component__WEBPACK_IMPORTED_MODULE_0__.HeroSectionComponent, _components_featured_listings_featured_listings_component__WEBPACK_IMPORTED_MODULE_1__.FeaturedListingsComponent, _components_categories_section_categories_section_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesSectionComponent, _components_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_3__.HowItWorksComponent],
        styles: [".home-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n\n\n.home-page__content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n\n\n.home-page__section[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n\n\n.home-page__section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-bottom: 15px;\n  color: #333;\n  border-left: 4px solid #055c8d;\n  padding-left: 10px;\n}"]
      });
    }
  }
  return HomeComponent;
})();

/***/ })

}]);