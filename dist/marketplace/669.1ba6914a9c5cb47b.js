"use strict";
(self["webpackChunkmarketplace"] = self["webpackChunkmarketplace"] || []).push([[669],{

/***/ 7779:
/*!*******************************************************************************************!*\
  !*** ./src/app/features/listings/components/listing-filters/listing-filters.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListingFiltersComponent: () => (/* binding */ ListingFiltersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);

let ListingFiltersComponent = /*#__PURE__*/(() => {
  class ListingFiltersComponent {
    static {
      this.ɵfac = function ListingFiltersComponent_Factory(t) {
        return new (t || ListingFiltersComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListingFiltersComponent,
        selectors: [["app-listing-filters"]],
        decls: 2,
        vars: 0,
        template: function ListingFiltersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Listing filters placeholder.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: block;\n}"]
      });
    }
  }
  return ListingFiltersComponent;
})();

/***/ }),

/***/ 8831:
/*!*******************************************************************************************!*\
  !*** ./src/app/features/listings/components/listing-gallery/listing-gallery.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListingGalleryComponent: () => (/* binding */ ListingGalleryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 177);


function ListingGalleryComponent_img_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListingGalleryComponent_img_4_Template_img_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const img_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.selectImage(img_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const img_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", img_r1 === ctx_r0.selectedImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
const placeholderImage = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="%23eef2f5"/><text x="400" y="255" font-family="Arial" font-size="32" text-anchor="middle" fill="%235f6f7a">Marketplace listing</text></svg>';
let ListingGalleryComponent = /*#__PURE__*/(() => {
  class ListingGalleryComponent {
    constructor() {
      this.images = [placeholderImage];
      this.selectedImage = placeholderImage;
    }
    selectImage(image) {
      this.selectedImage = image;
    }
    static {
      this.ɵfac = function ListingGalleryComponent_Factory(t) {
        return new (t || ListingGalleryComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListingGalleryComponent,
        selectors: [["app-listing-gallery"]],
        decls: 5,
        vars: 2,
        consts: [[1, "listing-gallery"], [1, "listing-gallery__main"], ["alt", "Listing image", 3, "src"], [1, "listing-gallery__thumbnails"], ["alt", "Thumbnail", 3, "src", "active", "click", 4, "ngFor", "ngForOf"], ["alt", "Thumbnail", 3, "src", "click"]],
        template: function ListingGalleryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListingGalleryComponent_img_4_Template, 1, 3, "img", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.selectedImage || ctx.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
        styles: [".listing-gallery[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n\n\n.listing-gallery__main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  object-fit: cover;\n  border-radius: 12px;\n  border: 1px solid #eaeaea;\n}\n\n\n\n.listing-gallery__thumbnails[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  overflow-x: auto;\n  padding-bottom: 5px;\n}\n\n.listing-gallery__thumbnails[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  object-fit: cover;\n  border-radius: 8px;\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: 0.2s ease;\n}\n\n.listing-gallery__thumbnails[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n.listing-gallery__thumbnails[_ngcontent-%COMP%]   img.active[_ngcontent-%COMP%] {\n  border-color: #055c8d;\n}"]
      });
    }
  }
  return ListingGalleryComponent;
})();

/***/ }),

/***/ 8415:
/*!*************************************************************************************!*\
  !*** ./src/app/features/listings/components/listing-info/listing-info.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListingInfoComponent: () => (/* binding */ ListingInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_rating_stars_rating_stars_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/rating-stars/rating-stars.component */ 3649);



function ListingInfoComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Verified Seller ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
let ListingInfoComponent = /*#__PURE__*/(() => {
  class ListingInfoComponent {
    contactSeller() {
      console.log('Contact seller clicked');
    }
    saveListing() {
      console.log('Save listing clicked');
    }
    static {
      this.ɵfac = function ListingInfoComponent_Factory(t) {
        return new (t || ListingInfoComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ListingInfoComponent,
        selectors: [["app-listing-info"]],
        decls: 19,
        vars: 6,
        consts: [[1, "listing-info"], [1, "listing-info__title"], [1, "listing-info__meta"], [1, "listing-info__location"], [1, "listing-info__rating"], [3, "rating"], ["class", "listing-info__verified", 4, "ngIf"], [1, "listing-info__price"], [1, "listing-info__description"], [1, "listing-info__actions"], [1, "btn-primary", 3, "click"], [1, "btn-secondary", 3, "click"], [1, "listing-info__verified"]],
        template: function ListingInfoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-rating-stars", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ListingInfoComponent_span_8_Template, 2, 0, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8)(12, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9)(15, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListingInfoComponent_Template_button_click_15_listener() {
              return ctx.contactSeller();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Contact Seller ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListingInfoComponent_Template_button_click_17_listener() {
              return ctx.saveListing();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Save ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx.listing == null ? null : ctx.listing.title) || "Listing title", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \uD83D\uDCCD ", (ctx.listing == null ? null : ctx.listing.location) || "Location not provided", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rating", (ctx.listing == null ? null : ctx.listing.rating) || 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listing == null ? null : ctx.listing.isVerified);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx.listing == null ? null : ctx.listing.price) ? "R " + ctx.listing.price : "Price on request", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx.listing == null ? null : ctx.listing.description) || "No description provided.", " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _shared_components_rating_stars_rating_stars_component__WEBPACK_IMPORTED_MODULE_0__.RatingStarsComponent],
        styles: [".listing-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n\n\n.listing-info__title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0;\n}\n\n\n\n.listing-info__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  font-size: 13px;\n  color: #666;\n}\n\n\n\n.listing-info__verified[_ngcontent-%COMP%] {\n  background: #e6f7ee;\n  color: #1a7f37;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 12px;\n}\n\n\n\n.listing-info__price[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #055c8d;\n}\n\n\n\n.listing-info__description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #444;\n  line-height: 1.5;\n}\n\n\n\n.listing-info__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 10px;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  background: #055c8d;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  background: #f1f5f9;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n}"]
      });
    }
  }
  return ListingInfoComponent;
})();

/***/ }),

/***/ 395:
/*!***********************************************************************************!*\
  !*** ./src/app/features/listings/components/seller-card/seller-card.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SellerCardComponent: () => (/* binding */ SellerCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_rating_stars_rating_stars_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/rating-stars/rating-stars.component */ 3649);



function SellerCardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Verified Seller ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
let SellerCardComponent = /*#__PURE__*/(() => {
  class SellerCardComponent {
    viewProfile() {
      console.log('Navigate to seller profile');
    }
    contactSeller() {
      console.log('Contact seller');
    }
    static {
      this.ɵfac = function SellerCardComponent_Factory(t) {
        return new (t || SellerCardComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SellerCardComponent,
        selectors: [["app-seller-card"]],
        decls: 16,
        vars: 5,
        consts: [[1, "seller-card"], [1, "seller-card__avatar"], ["alt", "Seller image", 3, "src"], [1, "seller-card__info"], [1, "seller-card__name"], [1, "seller-card__location"], ["class", "seller-card__badge", 4, "ngIf"], [1, "seller-card__rating"], [3, "rating"], [1, "seller-card__actions"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "click"], [1, "seller-card__badge"]],
        template: function SellerCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "h3", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SellerCardComponent_div_8_Template, 2, 0, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-rating-stars", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9)(12, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SellerCardComponent_Template_button_click_12_listener() {
              return ctx.viewProfile();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " View Profile ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SellerCardComponent_Template_button_click_14_listener() {
              return ctx.contactSeller();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Contact ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", (ctx.seller == null ? null : ctx.seller.profileImage) || "assets/images/default-user.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx.seller == null ? null : ctx.seller.name) || "Seller name", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \uD83D\uDCCD ", (ctx.seller == null ? null : ctx.seller.location) || "Location not provided", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.seller == null ? null : ctx.seller.isVerified);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rating", (ctx.seller == null ? null : ctx.seller.rating) || 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _shared_components_rating_stars_rating_stars_component__WEBPACK_IMPORTED_MODULE_0__.RatingStarsComponent],
        styles: [".seller-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 15px;\n  padding: 12px;\n  border: 1px solid #eaeaea;\n  border-radius: 12px;\n  background: #fff;\n}\n\n\n\n.seller-card__avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n\n\n\n.seller-card__info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.seller-card__name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n}\n\n.seller-card__location[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #666;\n}\n\n\n\n.seller-card__badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #e6f7ee;\n  color: #1a7f37;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n\n\n.seller-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  background: #055c8d;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 12px;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  background: #f1f5f9;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 12px;\n}"]
      });
    }
  }
  return SellerCardComponent;
})();

/***/ }),

/***/ 3283:
/*!*******************************************************************************************!*\
  !*** ./src/app/features/listings/components/whatsapp-button/whatsapp-button.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WhatsappButtonComponent: () => (/* binding */ WhatsappButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);

let WhatsappButtonComponent = /*#__PURE__*/(() => {
  class WhatsappButtonComponent {
    static {
      this.ɵfac = function WhatsappButtonComponent_Factory(t) {
        return new (t || WhatsappButtonComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WhatsappButtonComponent,
        selectors: [["app-whatsapp-button"]],
        decls: 2,
        vars: 0,
        consts: [["type", "button"]],
        template: function WhatsappButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "WhatsApp");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}"]
      });
    }
  }
  return WhatsappButtonComponent;
})();

/***/ }),

/***/ 5292:
/*!**************************************************************!*\
  !*** ./src/app/features/listings/listings-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListingsRoutingModule: () => (/* binding */ ListingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _pages_create_listing_create_listing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/create-listing/create-listing.component */ 6113);
/* harmony import */ var _pages_edit_listing_edit_listing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/edit-listing/edit-listing.component */ 7337);
/* harmony import */ var _pages_listing_details_listing_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/listing-details/listing-details.component */ 5593);
/* harmony import */ var _pages_listings_listings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/listings/listings.component */ 8149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7705);







const routes = [{
  path: '',
  component: _pages_listings_listings_component__WEBPACK_IMPORTED_MODULE_3__.ListingsComponent
}, {
  path: 'create',
  component: _pages_create_listing_create_listing_component__WEBPACK_IMPORTED_MODULE_0__.CreateListingComponent
}, {
  path: ':id/edit',
  component: _pages_edit_listing_edit_listing_component__WEBPACK_IMPORTED_MODULE_1__.EditListingComponent
}, {
  path: ':id',
  component: _pages_listing_details_listing_details_component__WEBPACK_IMPORTED_MODULE_2__.ListingDetailsComponent
}];
let ListingsRoutingModule = /*#__PURE__*/(() => {
  class ListingsRoutingModule {
    static {
      this.ɵfac = function ListingsRoutingModule_Factory(t) {
        return new (t || ListingsRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: ListingsRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
      });
    }
  }
  return ListingsRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ListingsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 4669:
/*!******************************************************!*\
  !*** ./src/app/features/listings/listings.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListingsModule: () => (/* binding */ ListingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _listings_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listings-routing.module */ 5292);
/* harmony import */ var _pages_listings_listings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/listings/listings.component */ 8149);
/* harmony import */ var _pages_listing_details_listing_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/listing-details/listing-details.component */ 5593);
/* harmony import */ var _pages_create_listing_create_listing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/create-listing/create-listing.component */ 6113);
/* harmony import */ var _pages_edit_listing_edit_listing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/edit-listing/edit-listing.component */ 7337);
/* harmony import */ var _components_listing_filters_listing_filters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/listing-filters/listing-filters.component */ 7779);
/* harmony import */ var _components_listing_gallery_listing_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/listing-gallery/listing-gallery.component */ 8831);
/* harmony import */ var _components_listing_info_listing_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/listing-info/listing-info.component */ 8415);
/* harmony import */ var _components_seller_card_seller_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/seller-card/seller-card.component */ 395);
/* harmony import */ var _components_whatsapp_button_whatsapp_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/whatsapp-button/whatsapp-button.component */ 3283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7705);














let ListingsModule = /*#__PURE__*/(() => {
  class ListingsModule {
    static {
      this.ɵfac = function ListingsModule_Factory(t) {
        return new (t || ListingsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: ListingsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _listings_routing_module__WEBPACK_IMPORTED_MODULE_1__.ListingsRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule]
      });
    }
  }
  return ListingsModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](ListingsModule, {
    declarations: [_pages_listings_listings_component__WEBPACK_IMPORTED_MODULE_2__.ListingsComponent, _pages_listing_details_listing_details_component__WEBPACK_IMPORTED_MODULE_3__.ListingDetailsComponent, _pages_create_listing_create_listing_component__WEBPACK_IMPORTED_MODULE_4__.CreateListingComponent, _pages_edit_listing_edit_listing_component__WEBPACK_IMPORTED_MODULE_5__.EditListingComponent, _components_listing_gallery_listing_gallery_component__WEBPACK_IMPORTED_MODULE_7__.ListingGalleryComponent, _components_listing_info_listing_info_component__WEBPACK_IMPORTED_MODULE_8__.ListingInfoComponent, _components_listing_filters_listing_filters_component__WEBPACK_IMPORTED_MODULE_6__.ListingFiltersComponent, _components_seller_card_seller_card_component__WEBPACK_IMPORTED_MODULE_9__.SellerCardComponent, _components_whatsapp_button_whatsapp_button_component__WEBPACK_IMPORTED_MODULE_10__.WhatsappButtonComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _listings_routing_module__WEBPACK_IMPORTED_MODULE_1__.ListingsRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule],
    exports: [_pages_listings_listings_component__WEBPACK_IMPORTED_MODULE_2__.ListingsComponent, _pages_listing_details_listing_details_component__WEBPACK_IMPORTED_MODULE_3__.ListingDetailsComponent, _pages_create_listing_create_listing_component__WEBPACK_IMPORTED_MODULE_4__.CreateListingComponent, _pages_edit_listing_edit_listing_component__WEBPACK_IMPORTED_MODULE_5__.EditListingComponent, _components_listing_gallery_listing_gallery_component__WEBPACK_IMPORTED_MODULE_7__.ListingGalleryComponent, _components_listing_info_listing_info_component__WEBPACK_IMPORTED_MODULE_8__.ListingInfoComponent, _components_listing_filters_listing_filters_component__WEBPACK_IMPORTED_MODULE_6__.ListingFiltersComponent, _components_seller_card_seller_card_component__WEBPACK_IMPORTED_MODULE_9__.SellerCardComponent, _components_whatsapp_button_whatsapp_button_component__WEBPACK_IMPORTED_MODULE_10__.WhatsappButtonComponent]
  });
})();

/***/ }),

/***/ 6113:
/*!************************************************************************************!*\
  !*** ./src/app/features/listings/pages/create-listing/create-listing.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateListingComponent: () => (/* binding */ CreateListingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _shared_services_listing_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/services/listing.service */ 1726);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9417);





function CreateListingComponent_p_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.error);
  }
}
let CreateListingComponent = /*#__PURE__*/(() => {
  class CreateListingComponent {
    constructor(listingService, router) {
      this.listingService = listingService;
      this.router = router;
      this.listing = {};
      this.error = '';
      this.loading = false;
    }
    submit() {
      this.error = '';
      if (!this.listing.title || !this.listing.description || this.listing.priceZar == null || !this.listing.category || !this.listing.city) {
        this.error = 'Complete all required fields.';
        return;
      }
      this.loading = true;
      this.listingService.createListing(this.listing).subscribe({
        next: created => this.router.navigate(['/listings']),
        error: error => {
          this.error = error.status === 401 ? 'Please log in before creating a listing.' : error.error?.message || 'Unable to create the listing.';
          this.loading = false;
        }
      });
    }
    static {
      this.ɵfac = function CreateListingComponent_Factory(t) {
        return new (t || CreateListingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_listing_service__WEBPACK_IMPORTED_MODULE_0__.ListingService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CreateListingComponent,
        selectors: [["app-create-listing"]],
        decls: 108,
        vars: 8,
        consts: [[1, "create-listing-page"], [1, "create-listing-page__intro"], [1, "eyebrow"], [1, "create-listing-layout"], ["novalidate", "", 1, "listing-form", 3, "ngSubmit"], ["listingForm", "ngForm"], [1, "form-section"], [1, "form-section__heading"], [1, "form-step"], [1, "form-group", "form-group--full"], ["for", "title"], ["id", "title", "name", "title", "required", "", "placeholder", "e.g. Mobile car repair and diagnostics", 1, "input", 3, "ngModel", "ngModelChange"], ["for", "description"], ["id", "description", "name", "description", "required", "", "rows", "6", "placeholder", "Describe what you offer, what is included, and why buyers can trust you.", 1, "textarea", 3, "ngModel", "ngModelChange"], [1, "form-grid"], [1, "form-group"], ["for", "priceZar"], [1, "price-input"], ["id", "priceZar", "name", "priceZar", "type", "number", "min", "0", "required", "", "placeholder", "0.00", 1, "input", 3, "ngModel", "ngModelChange"], ["for", "category"], ["id", "category", "name", "category", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", ""], ["for", "city"], ["id", "city", "name", "city", "required", "", "placeholder", "e.g. Johannesburg", 1, "input", 3, "ngModel", "ngModelChange"], ["class", "form-error", "role", "alert", 4, "ngIf"], [1, "form-actions"], ["routerLink", "/listings", 1, "cancel-link"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "listing-tips"], [1, "listing-tips__icon"], [1, "listing-tips__note"], ["role", "alert", 1, "form-error"]],
        template: function CreateListingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "SELL ON MARKETPLACE");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Create a listing");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Tell local buyers what you offer. You can edit your listing later from your dashboard.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3)(9, "form", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CreateListingComponent_Template_form_ngSubmit_9_listener() {
              return ctx.submit();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div")(16, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "What are you selling?");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Use a clear title and helpful description.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9)(21, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Listing title ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateListingComponent_Template_input_ngModelChange_25_listener($event) {
              return ctx.listing.title = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9)(27, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Description ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "textarea", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateListingComponent_Template_textarea_ngModelChange_31_listener($event) {
              return ctx.listing.description = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Include key details such as condition, availability, or service area.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 6)(35, "div", 7)(36, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div")(39, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Price and location");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Help buyers find your listing and understand the cost.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 14)(44, "div", 15)(45, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Price (ZAR) ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 17)(50, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "R");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateListingComponent_Template_input_ngModelChange_52_listener($event) {
              return ctx.listing.priceZar = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 15)(54, "label", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Category ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "select", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateListingComponent_Template_select_ngModelChange_58_listener($event) {
              return ctx.listing.category = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "option", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Select a category");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Mechanics");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Painters");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Electronics");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Plumbing");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Furniture");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Repairs");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Beauty");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Other");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 9)(78, "label", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "City ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateListingComponent_Template_input_ngModelChange_82_listener($event) {
              return ctx.listing.city = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, CreateListingComponent_p_83_Template, 2, 1, "p", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 25)(85, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "button", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "aside", 28)(90, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "?");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Tips for a great listing");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "ul")(95, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Write a specific, descriptive title.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Add the price buyers should expect.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Choose the closest matching category.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Reply quickly when buyers contact you.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 30)(104, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Your listing is yours.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "You can update or remove it at any time.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.listing.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.listing.description);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.listing.priceZar);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.listing.category);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.listing.city);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.invalid || ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.loading ? "Publishing\uFFFD" : "Publish listing");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.create-listing-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 65px);\n  padding: 4rem 1.5rem 5rem;\n  background: #f5f8fb;\n  color: #172033;\n}\n\n.create-listing-page__intro[_ngcontent-%COMP%], .create-listing-layout[_ngcontent-%COMP%] {\n  max-width: 1080px;\n  margin: 0 auto;\n}\n\n.create-listing-page__intro[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  max-width: 730px;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 0.6rem;\n  color: #0874a8;\n  font-size: 0.75rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(2rem, 5vw, 2.8rem);\n  letter-spacing: -0.04em;\n}\n\n.create-listing-page__intro[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:last-child {\n  margin: 0.8rem 0 0;\n  color: #617085;\n  font-size: 1.05rem;\n  line-height: 1.6;\n}\n\n.create-listing-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 300px;\n  gap: 1.5rem;\n  align-items: start;\n}\n\n.listing-form[_ngcontent-%COMP%], .listing-tips[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e4eaf1;\n  border-radius: 16px;\n  box-shadow: 0 8px 24px rgba(21, 49, 76, 0.06);\n}\n\n.listing-form[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.form-section[_ngcontent-%COMP%] {\n  padding: 1.8rem;\n  border-bottom: 1px solid #eaf0f5;\n}\n\n.form-section__heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.85rem;\n  margin-bottom: 1.6rem;\n}\n\n.form-step[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  flex: 0 0 28px;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #e0f2fb;\n  color: #066a9a;\n  font-size: 0.82rem;\n  font-weight: 800;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.08rem;\n}\n\n.form-section__heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: #718096;\n  font-size: 0.9rem;\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.1rem;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.45rem;\n}\n\n.form-group--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n\nlabel[_ngcontent-%COMP%] {\n  color: #344255;\n  font-size: 0.9rem;\n  font-weight: 700;\n}\n\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #cf3b45;\n}\n\n.input[_ngcontent-%COMP%], .textarea[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n  border: 1px solid #cfd9e4;\n  border-radius: 9px;\n  background: #fff;\n  color: #172033;\n  font: inherit;\n  transition: border-color 0.18s, box-shadow 0.18s;\n}\n\n.input[_ngcontent-%COMP%] {\n  height: 45px;\n  padding: 0 0.8rem;\n}\n\n.textarea[_ngcontent-%COMP%] {\n  padding: 0.75rem 0.8rem;\n  resize: vertical;\n  line-height: 1.5;\n}\n\n.input[_ngcontent-%COMP%]:focus, .textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0784be;\n  box-shadow: 0 0 0 3px rgba(7, 132, 190, 0.14);\n}\n\n.input[_ngcontent-%COMP%]::placeholder, .textarea[_ngcontent-%COMP%]::placeholder {\n  color: #9aa8b7;\n}\n\nsmall[_ngcontent-%COMP%] {\n  color: #7e8b9a;\n  font-size: 0.78rem;\n}\n\n.price-input[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.price-input[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 13px;\n  left: 0.85rem;\n  color: #607084;\n  font-weight: 700;\n}\n\n.price-input[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n}\n\n.form-error[_ngcontent-%COMP%] {\n  margin: 1.25rem 1.8rem 0;\n  padding: 0.8rem 1rem;\n  border-radius: 8px;\n  background: #fff0f1;\n  color: #b4232b;\n  font-size: 0.9rem;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.35rem 1.8rem;\n}\n\n.cancel-link[_ngcontent-%COMP%] {\n  color: #526276;\n  font-weight: 700;\n  text-decoration: none;\n}\n\n.cancel-link[_ngcontent-%COMP%]:hover {\n  color: #0874a8;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 9px;\n  padding: 0.78rem 1.25rem;\n  background: #087bad;\n  color: #fff;\n  font: inherit;\n  font-weight: 800;\n  cursor: pointer;\n  box-shadow: 0 4px 10px rgba(8, 123, 173, 0.2);\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #056c9a;\n}\n\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n\n.listing-tips[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 1.5rem;\n  padding: 1.5rem;\n}\n\n.listing-tips__icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  margin-bottom: 1rem;\n  border-radius: 10px;\n  background: #dbf4e7;\n  color: #16834a;\n  font-weight: 900;\n}\n\n.listing-tips[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.listing-tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 1rem 0 1.4rem;\n  padding-left: 1.1rem;\n  color: #617085;\n  font-size: 0.9rem;\n  line-height: 1.65;\n}\n\n.listing-tips__note[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 9px;\n  background: #f0f8fc;\n  color: #526276;\n  font-size: 0.82rem;\n  line-height: 1.5;\n}\n\n.listing-tips__note[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #28708f;\n}\n\n@media (max-width: 820px) {\n  .create-listing-page[_ngcontent-%COMP%] {\n    padding: 2.25rem 1rem 3rem;\n  }\n  .create-listing-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .listing-tips[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .form-section[_ngcontent-%COMP%] {\n    padding: 1.35rem;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    padding: 1.2rem 1.35rem;\n  }\n}\n@media (max-width: 520px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-group--full[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .create-listing-page__intro[_ngcontent-%COMP%] {\n    margin-bottom: 1.25rem;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .btn-primary[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n  }\n}"]
      });
    }
  }
  return CreateListingComponent;
})();

/***/ }),

/***/ 7337:
/*!********************************************************************************!*\
  !*** ./src/app/features/listings/pages/edit-listing/edit-listing.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditListingComponent: () => (/* binding */ EditListingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);

let EditListingComponent = /*#__PURE__*/(() => {
  class EditListingComponent {
    static {
      this.ɵfac = function EditListingComponent_Factory(t) {
        return new (t || EditListingComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditListingComponent,
        selectors: [["app-edit-listing"]],
        decls: 2,
        vars: 0,
        template: function EditListingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit listing works.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: block;\n}"]
      });
    }
  }
  return EditListingComponent;
})();

/***/ }),

/***/ 5593:
/*!**************************************************************************************!*\
  !*** ./src/app/features/listings/pages/listing-details/listing-details.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListingDetailsComponent: () => (/* binding */ ListingDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);

let ListingDetailsComponent = /*#__PURE__*/(() => {
  class ListingDetailsComponent {
    static {
      this.ɵfac = function ListingDetailsComponent_Factory(t) {
        return new (t || ListingDetailsComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListingDetailsComponent,
        selectors: [["app-listing-details"]],
        decls: 2,
        vars: 0,
        template: function ListingDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Listing details works.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: block;\n}"]
      });
    }
  }
  return ListingDetailsComponent;
})();

/***/ }),

/***/ 8149:
/*!************************************************************************!*\
  !*** ./src/app/features/listings/pages/listings/listings.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListingsComponent: () => (/* binding */ ListingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _shared_services_listing_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/services/listing.service */ 1726);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_listing_card_listing_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/listing-card/listing-card.component */ 6085);





function ListingsComponent_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Loading listings\uFFFD");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ListingsComponent_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.error);
  }
}
function ListingsComponent_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No listings found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ListingsComponent_div_4_app_listing_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-listing-card", 6);
  }
  if (rf & 2) {
    const listing_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("listing", listing_r5);
  }
}
function ListingsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ListingsComponent_div_4_app_listing_card_1_Template, 1, 1, "app-listing-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.listings);
  }
}
let ListingsComponent = /*#__PURE__*/(() => {
  class ListingsComponent {
    constructor(listingService, route) {
      this.listingService = listingService;
      this.route = route;
      this.listings = [];
      this.loading = true;
      this.error = '';
    }
    ngOnInit() {
      this.route.queryParamMap.subscribe(params => {
        const query = params.get('q') || params.get('search') || undefined;
        this.loadListings(query, params.get('category') || undefined);
      });
    }
    loadListings(search, category) {
      this.loading = true;
      this.error = '';
      this.listingService.getListings(search, category).subscribe({
        next: listings => {
          this.listings = listings;
          this.loading = false;
        },
        error: error => {
          this.error = error.error?.message || 'Unable to load listings. Make sure the API is running on port 3000.';
          this.loading = false;
        }
      });
    }
    static {
      this.ɵfac = function ListingsComponent_Factory(t) {
        return new (t || ListingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_listing_service__WEBPACK_IMPORTED_MODULE_0__.ListingService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ListingsComponent,
        selectors: [["app-listings"]],
        decls: 5,
        vars: 4,
        consts: [[4, "ngIf"], ["role", "alert", 4, "ngIf"], ["class", "listings-grid", 4, "ngIf"], ["role", "alert"], [1, "listings-grid"], [3, "listing", 4, "ngFor", "ngForOf"], [3, "listing"]],
        template: function ListingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ListingsComponent_p_1_Template, 2, 0, "p", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ListingsComponent_p_2_Template, 2, 1, "p", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ListingsComponent_p_3_Template, 2, 0, "p", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ListingsComponent_div_4_Template, 2, 1, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && ctx.listings.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_components_listing_card_listing_card_component__WEBPACK_IMPORTED_MODULE_1__.ListingCardComponent],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n}"]
      });
    }
  }
  return ListingsComponent;
})();

/***/ })

}]);