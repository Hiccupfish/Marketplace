"use strict";
(self["webpackChunkmarketplace"] = self["webpackChunkmarketplace"] || []).push([[76],{

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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);




let ListingService = /*#__PURE__*/(() => {
  class ListingService {
    constructor(http) {
      this.http = http;
      this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/listings`;
    }
    getListings(search, category) {
      let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
      if (search) params = params.set('search', search);
      if (category) params = params.set('category', category);
      return this.http.get(this.apiUrl, {
        params
      });
    }
    createListing(listing) {
      return this.http.post(this.apiUrl, listing);
    }
    static {
      this.ɵfac = function ListingService_Factory(t) {
        return new (t || ListingService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ListingService,
        factory: ListingService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ListingService;
})();

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  apiUrl: 'http://localhost:3000/api'
};

/***/ })

}]);