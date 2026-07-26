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



function CategoriesSectionComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesSectionComponent_div_12_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const category_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.selectCategory(category_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8)(4, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.description);
  }
}
let CategoriesSectionComponent = /*#__PURE__*/(() => {
  class CategoriesSectionComponent {
    constructor(router) {
      this.router = router;
      this.categories = [{
        name: 'Products',
        icon: '\u{1F6D2}',
        description: 'Buy and sell new or pre-owned items.',
        route: '/products'
      }, {
        name: 'Services',
        icon: '\u{1F6E0}\u{FE0F}',
        description: 'Find trusted professionals near you.',
        route: '/services'
      }, {
        name: 'Requests',
        icon: '\u{1F4E2}',
        description: 'Post what you need and receive offers.',
        route: '/requests'
      }, {
        name: 'Deliveries',
        icon: '\u{1F69A}',
        description: 'Compare trusted delivery drivers.',
        route: '/deliveries'
      }];
    }
    selectCategory(category) {
      this.router.navigate([category.route]);
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
        decls: 13,
        vars: 1,
        consts: [[1, "categories-section"], [1, "categories-section__header"], [1, "categories-section__tag"], ["routerLink", "/products", 1, "categories-section__view-all"], [1, "categories-section__grid"], ["class", "category-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "category-card", 3, "click"], [1, "category-card__icon"], [1, "category-card__content"], [1, "category-card__name"], [1, "category-card__description"], [1, "category-card__arrow"]],
        template: function CategoriesSectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div")(3, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Explore");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Browse Categories");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Discover products, trusted professionals and local opportunities near you.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "View All \u2192");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CategoriesSectionComponent_div_12_Template, 10, 3, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
        styles: [".categories-section[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n}\n\n.categories-section__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n  margin-bottom: 2rem;\n  gap: 1rem;\n}\n\n.categories-section__tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #eef6ff;\n  color: #0b5ed7;\n  padding: 0.35rem 0.8rem;\n  border-radius: 999px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin-bottom: 0.75rem;\n}\n\n.categories-section__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2rem;\n  color: #1f2937;\n}\n\n.categories-section__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0.6rem;\n  color: #6b7280;\n  max-width: 550px;\n}\n\n.categories-section__view-all[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 600;\n  color: #0b5ed7;\n}\n\n.categories-section__view-all[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.categories-section__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));\n  gap: 1.25rem;\n}\n\n.category-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.3rem;\n  background: white;\n  border: 1px solid #ececec;\n  border-radius: 18px;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n\n.category-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  border-color: #0b5ed7;\n  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.08);\n}\n\n.category-card__icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 14px;\n  background: #eef6ff;\n  font-size: 1.8rem;\n  flex-shrink: 0;\n}\n\n.category-card__content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.category-card__name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1f2937;\n}\n\n.category-card__description[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  font-size: 0.85rem;\n  color: #6b7280;\n  line-height: 1.4;\n}\n\n.category-card__arrow[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #0b5ed7;\n  transition: transform 0.2s;\n}\n\n.category-card[_ngcontent-%COMP%]:hover   .category-card__arrow[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n\n@media (max-width: 768px) {\n  .categories-section__header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}"]
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




function FeaturedListingsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "circle", 10)(3, "line", 11)(4, "line", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 13)(6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Could not load listings");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FeaturedListingsComponent_div_9_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.loadListings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Retry");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
function FeaturedListingsComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 20)(4, "div", 21)(5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return [1, 2, 3];
};
function FeaturedListingsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FeaturedListingsComponent_div_10_div_1_Template, 6, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
  }
}
function FeaturedListingsComponent_div_11_app_listing_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-listing-card", 25);
  }
  if (rf & 2) {
    const listing_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("listing", listing_r8);
  }
}
function FeaturedListingsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FeaturedListingsComponent_div_11_app_listing_card_1_Template, 1, 1, "app-listing-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.featuredListings);
  }
}
let FeaturedListingsComponent = /*#__PURE__*/(() => {
  class FeaturedListingsComponent {
    constructor(listingService) {
      this.listingService = listingService;
      this.featuredListings = [];
      this.loading = true;
      this.error = '';
    }
    ngOnInit() {
      this.loadListings();
    }
    loadListings() {
      this.loading = true;
      this.error = '';
      this.listingService.getListings().subscribe({
        next: listings => {
          this.featuredListings = listings.slice(0, 3);
          this.loading = false;
        },
        error: err => {
          this.error = err.error?.message || 'Unable to load listings. Make sure the backend API is running.';
          this.loading = false;
        }
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
        decls: 12,
        vars: 3,
        consts: [[1, "featured-listings"], [1, "featured-listings__container"], [1, "featured-listings__header"], [1, "eyebrow"], [1, "featured-listings__description"], ["class", "error-banner", 4, "ngIf"], ["class", "featured-listings__grid skeleton-grid", 4, "ngIf"], ["class", "featured-listings__grid", 4, "ngIf"], [1, "error-banner"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "error-icon"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "error-text"], [1, "retry-btn", 3, "click"], [1, "featured-listings__grid", "skeleton-grid"], ["class", "skeleton-card", 4, "ngFor", "ngForOf"], [1, "skeleton-card"], [1, "skeleton-image"], [1, "skeleton-body"], [1, "skeleton-line", "title"], [1, "skeleton-line", "price"], [1, "skeleton-line", "text"], [1, "featured-listings__grid"], [3, "listing", 4, "ngFor", "ngForOf"], [3, "listing"]],
        template: function FeaturedListingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "FEATURED MARKETPLACE");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Featured Listings");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Discover trusted local businesses, skilled artisans and verified sellers recommended in your community. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, FeaturedListingsComponent_div_9_Template, 12, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, FeaturedListingsComponent_div_10_Template, 2, 2, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, FeaturedListingsComponent_div_11_Template, 2, 1, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_components_listing_card_listing_card_component__WEBPACK_IMPORTED_MODULE_1__.ListingCardComponent],
        styles: [".featured-listings[_ngcontent-%COMP%] {\n  background: #f5f8fb;\n  padding: 4rem 1.5rem;\n}\n\n.featured-listings__container[_ngcontent-%COMP%] {\n  max-width: 1080px;\n  margin: 0 auto;\n}\n\n.featured-listings__header[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin-bottom: 2rem;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 0.6rem;\n  color: #0874a8;\n  font-size: 0.75rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n}\n\n.featured-listings__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #172033;\n  font-size: clamp(1.8rem, 4vw, 2.4rem);\n  letter-spacing: -0.03em;\n}\n\n.featured-listings__description[_ngcontent-%COMP%] {\n  margin: 0.85rem 0 0;\n  color: #617085;\n  font-size: 1.05rem;\n  line-height: 1.65;\n}\n\n.featured-listings__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.5rem;\n}\n\n.error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1.25rem 1.5rem;\n  border-radius: 12px;\n  background: #fff5f5;\n  border: 1px solid #feb2b2;\n  margin-bottom: 1.5rem;\n}\n\n.error-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 24px;\n  height: 24px;\n  color: #c53030;\n  margin-top: 2px;\n}\n\n.error-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  color: #c53030;\n  font-size: 1rem;\n}\n\n.error-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #742a2a;\n  font-size: 0.92rem;\n}\n\n.retry-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-left: auto;\n  padding: 0.5rem 0.9rem;\n  border-radius: 8px;\n  border: 1px solid #c53030;\n  background: #fff;\n  color: #c53030;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.85rem;\n}\n\n.retry-btn[_ngcontent-%COMP%]:hover {\n  background: #c53030;\n  color: #fff;\n}\n\n.skeleton-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.5rem;\n}\n\n.skeleton-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n}\n\n.skeleton-image[_ngcontent-%COMP%] {\n  height: 180px;\n  background: linear-gradient(90deg, #edf2f7 25%, #e2e8f0 50%, #edf2f7 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n}\n\n.skeleton-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\n.skeleton-line[_ngcontent-%COMP%] {\n  height: 12px;\n  border-radius: 4px;\n  background: linear-gradient(90deg, #edf2f7 25%, #e2e8f0 50%, #edf2f7 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n  margin-bottom: 0.6rem;\n}\n\n.skeleton-line.title[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 16px;\n}\n\n.skeleton-line.price[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 14px;\n}\n\n.skeleton-line.text[_ngcontent-%COMP%] {\n  width: 90%;\n}\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n@media (max-width: 768px) {\n  .featured-listings[_ngcontent-%COMP%] {\n    padding: 2.5rem 1rem;\n  }\n  .featured-listings__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"]
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
        decls: 22,
        vars: 1,
        consts: [[1, "hero"], [1, "hero__container"], [1, "hero__content"], [1, "eyebrow"], [1, "hero__title"], [1, "hero__subtitle"], [1, "hero__search"], ["type", "text", "placeholder", "Search services or products...", 3, "ngModel", "ngModelChange"], [3, "click"], [1, "hero__categories"]],
        template: function HeroSectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "LOCAL MARKETPLACE");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Find trusted local sellers & artisans near you ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " From mechanics to painters, electronics to furniture\u2014discover verified businesses and skilled people in your community. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeroSectionComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.searchQuery = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroSectionComponent_Template_button_click_11_listener() {
              return ctx.onSearch();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Search ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9)(14, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroSectionComponent_Template_span_click_14_listener() {
              return ctx.filter("mechanics");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Mechanics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroSectionComponent_Template_span_click_16_listener() {
              return ctx.filter("painters");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Painters");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroSectionComponent_Template_span_click_18_listener() {
              return ctx.filter("electronics");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Electronics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroSectionComponent_Template_span_click_20_listener() {
              return ctx.filter("plumbing");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Plumbing");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchQuery);
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
        styles: [".hero[_ngcontent-%COMP%] {\n  background: #f5f8fb;\n  padding: 4rem 1.5rem;\n}\n\n.hero__container[_ngcontent-%COMP%] {\n  max-width: 1080px;\n  margin: 0 auto;\n}\n\n.hero__content[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e4eaf1;\n  border-radius: 16px;\n  box-shadow: 0 8px 24px rgba(21, 49, 76, 0.06);\n  padding: 3rem;\n  text-align: center;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  color: #0874a8;\n  font-size: 0.75rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n}\n\n.hero__title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #172033;\n  font-size: clamp(2.2rem, 5vw, 3.2rem);\n  letter-spacing: -0.04em;\n  line-height: 1.15;\n}\n\n.hero__subtitle[_ngcontent-%COMP%] {\n  max-width: 650px;\n  margin: 1rem auto 2rem;\n  color: #617085;\n  font-size: 1.05rem;\n  line-height: 1.7;\n}\n\n.hero__search[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin-bottom: 2rem;\n}\n\n.hero__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 520px;\n  height: 48px;\n  padding: 0 1rem;\n  border: 1px solid #cfd9e4;\n  border-radius: 9px;\n  background: #fff;\n  color: #172033;\n  font: inherit;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n\n.hero__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #087bad;\n  box-shadow: 0 0 0 3px rgba(7, 132, 190, 0.14);\n}\n\n.hero__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #9aa8b7;\n}\n\n.hero__search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 48px;\n  padding: 0 1.5rem;\n  border: none;\n  border-radius: 9px;\n  background: #087bad;\n  color: white;\n  font: inherit;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.2s;\n  box-shadow: 0 4px 10px rgba(8, 123, 173, 0.2);\n}\n\n.hero__search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #056c9a;\n}\n\n.hero__categories[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n\n.hero__categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.65rem 1rem;\n  background: #f0f8fc;\n  border: 1px solid #d8eaf4;\n  border-radius: 999px;\n  color: #526276;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.hero__categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  background: #087bad;\n  color: white;\n  border-color: #087bad;\n}\n\n@media (max-width: 768px) {\n  .hero[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n  .hero__content[_ngcontent-%COMP%] {\n    padding: 2rem 1.5rem;\n  }\n  .hero__search[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .hero__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .hero__search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: none;\n  }\n}"]
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

/***/ }),

/***/ 1726:
/*!****************************************************!*\
  !*** ./src/app/shared/services/listing.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListingService: () => (/* binding */ ListingService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1626);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6354);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7705);





let ListingService = /*#__PURE__*/(() => {
  class ListingService {
    constructor(http) {
      this.http = http;
      this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/products`;
    }
    getListings(search, category) {
      let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
      if (search) params = params.set('search', search);
      if (category) params = params.set('category', category);
      return this.http.get(this.apiUrl, {
        params
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(products => products.map(product => this.toListing(product))));
    }
    getListing(id) {
      return this.http.get(`${this.apiUrl}/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(product => this.toListing(product)));
    }
    createListing(listing) {
      return this.http.post(this.apiUrl, listing);
    }
    deleteListing(id) {
      return this.http.delete(`${this.apiUrl}/${id}`);
    }
    toListing(product) {
      return {
        id: product.id,
        title: product.title,
        description: product.description,
        priceZar: product.price,
        category: product.category?.name || 'Other',
        city: product.location || product.seller?.location || 'Location not specified',
        createdAt: product.createdAt,
        updatedAt: product.updatedAt
      };
    }
    static {
      this.ɵfac = function ListingService_Factory(t) {
        return new (t || ListingService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: ListingService,
        factory: ListingService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ListingService;
})();

/***/ })

}]);