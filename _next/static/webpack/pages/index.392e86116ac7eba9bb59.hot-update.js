webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/contact.js":
/*!*********************************!*\
  !*** ./src/sections/contact.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var assets_shapebniedc_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/shapebniedc.png */ "./src/assets/shapebniedc.png");
/* harmony import */ var assets_shapebniedc_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_shapebniedc_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_kiri_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/kiri.png */ "./src/assets/kiri.png");
/* harmony import */ var assets_kiri_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_kiri_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_kanan_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/kanan.png */ "./src/assets/kanan.png");
/* harmony import */ var assets_kanan_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_kanan_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
var _jsxFileName = "D:\\Portal E-Device\\Sample1\\nextjs_landing_page\\nextjs_landing_page\\src\\sections\\contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */







function Contact() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: styles.banner,
    id: "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.faq,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    slogan: "Beberapa Pertanyaan Umum",
    title: "Frequently Asked Question",
    isWhite: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.banner.imageBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "form",
    onSubmit: function onSubmit(e) {
      return e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }))));
}
_c = Contact;
var styles = {
  selengkap: {
    color: '#fff',
    background: '#E44200',
    border: '0px solid #E55300',
    hover: '#fff',
    '&:hover': {
      boxShadow: '0 1px 8px #E44200',
      color: '#fff'
    }
  },
  banner: {
    justifyContent: 'center',
    textAlign: 'center',
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    background: '',
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: "url(".concat(assets_kiri_png__WEBPACK_IMPORTED_MODULE_3___default.a, ")"),
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'bottom left',
      backgroundSize: '32%'
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '60px',
      right: 0,
      height: '100%',
      width: '100%',
      transparent: '100%',
      zIndex: -1,
      backgroundImage: "url(".concat(assets_kanan_png__WEBPACK_IMPORTED_MODULE_4___default.a, ")"),
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'bottom right',
      backgroundSize: '32%'
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '67%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7]
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto']
      }
    }
  }
};

var _c;

$RefreshReg$(_c, "Contact");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NvbnRhY3QuanMiXSwibmFtZXMiOlsiQ29udGFjdCIsInN0eWxlcyIsImJhbm5lciIsImZhcSIsImltYWdlQm94IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VsZW5na2FwIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiaG92ZXIiLCJib3hTaGFkb3ciLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsInB0IiwicGIiLCJwb3NpdGlvbiIsInpJbmRleCIsImNvbnRlbnQiLCJib3R0b20iLCJsZWZ0IiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJTaGFwZUxlZnQiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJyaWdodCIsInRyYW5zcGFyZW50IiwiU2hhcGVSaWdodCIsImNvbnRhaW5lciIsIm1pbkhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiY29udGVudEJveCIsIm14IiwibWIiLCJpbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUNoQyxTQUNDO0FBQVMsTUFBRSxFQUFFQyxNQUFNLENBQUNDLE1BQXBCO0FBQTRCLE1BQUUsRUFBQyxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MscURBQUMsa0RBQUQ7QUFBVyxNQUFFLEVBQUVELE1BQU0sQ0FBQ0UsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLHFEQUFDLGlFQUFEO0FBQ0EsVUFBTSxFQUFDLDBCQURQO0FBRUEsU0FBSyxFQUFDLDJCQUZOO0FBR0EsV0FBTyxFQUFFLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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LFFBRkg7QUFHUm9CLGFBQU8sRUFBRSxhQUhEO0FBSVJJLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBQyxDQUFYLEVBQWMsSUFBZCxFQUFvQixJQUFwQixFQUEwQixPQUExQixFQUFtQyxJQUFuQyxFQUF5QyxDQUFDLENBQTFDLENBSkk7QUFLUkMsU0FBRyxFQUFFO0FBQ0h0QixnQkFBUSxFQUFFLFVBRFA7QUFFSEssY0FBTSxFQUFFLENBQUMsR0FBRCxFQUFNLE1BQU47QUFGTDtBQUxHO0FBL0NKO0FBVkssQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zOTJlODYxMTZhYzdlYmE5YmI1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBDb250YWluZXIsIEJveCwgSGVhZGluZywgVGV4dCwgSW1hZ2UsIEJ1dHRvbiwgTGluayB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBCYW5uZXJJbWcgZnJvbSAnYXNzZXRzL3NoYXBlYm5pZWRjLnBuZyc7XG5pbXBvcnQgU2hhcGVMZWZ0IGZyb20gJ2Fzc2V0cy9raXJpLnBuZyc7XG5pbXBvcnQgU2hhcGVSaWdodCBmcm9tICdhc3NldHMva2FuYW4ucG5nJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgcmV0dXJuIChcbiAgIDxzZWN0aW9uIHN4PXtzdHlsZXMuYmFubmVyfSBpZD1cImhvbWVcIj5cbiAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuZmFxfT5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgc2xvZ2FuPVwiQmViZXJhcGEgUGVydGFueWFhbiBVbXVtXCJcbiAgICAgICAgdGl0bGU9XCJGcmVxdWVudGx5IEFza2VkIFF1ZXN0aW9uXCJcbiAgICAgICAgaXNXaGl0ZT17ZmFsc2V9XG4gICAgICAgIC8+XG5cbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5iYW5uZXIuaW1hZ2VCb3h9PlxuICAgICAgPEJveCBhcz1cImZvcm1cIiBvblN1Ym1pdD17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+PC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgIFxuICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHNlbGVuZ2thcDp7XG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBiYWNrZ3JvdW5kOiAnI0U0NDIwMCcsXG4gICAgYm9yZGVyOicwcHggc29saWQgI0U1NTMwMCcsXG4gICAgaG92ZXI6ICcjZmZmJyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJveFNoYWRvdzogJzAgMXB4IDhweCAjRTQ0MjAwJyxcbiAgICAgIGNvbG9yOicjZmZmJ1xuICAgIH19LFxuICBiYW5uZXI6IHtcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIHB0OiBbJzE0MHB4JywgJzE0NXB4JywgJzE1NXB4JywgJzE3MHB4JywgbnVsbCwgbnVsbCwgJzE4MHB4JywgJzIxNXB4J10sXG4gICAgcGI6IFsyLCBudWxsLCAwLCBudWxsLCAyLCAwLCBudWxsLCA1XSxcbiAgICBiYWNrZ3JvdW5kOiAnJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB6SW5kZXg6IDIsXG4gICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgYm90dG9tOiA2LFxuICAgICAgbGVmdDogMCxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHpJbmRleDogLTEsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtTaGFwZUxlZnR9KWAsXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2JvdHRvbSBsZWZ0JyxcbiAgICAgIGJhY2tncm91bmRTaXplOiAnMzIlJyxcbiAgICB9LFxuICAgICcmOjphZnRlcic6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgYm90dG9tOiAnNjBweCcsXG4gICAgICByaWdodDogMCxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHRyYW5zcGFyZW50OiAnMTAwJScsXG4gICAgICB6SW5kZXg6IC0xLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7U2hhcGVSaWdodH0pYCxcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnYm90dG9tIHJpZ2h0JyxcbiAgICAgIGJhY2tncm91bmRTaXplOiAnMzIlJyxcbiAgICB9LFxuICAgIGNvbnRhaW5lcjoge1xuICAgICAgbWluSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICB9LFxuICAgIGNvbnRlbnRCb3g6IHtcbiAgICAgIHdpZHRoOiBbJzEwMCUnLCAnOTAlJywgJzUzNXB4JywgbnVsbCwgJzY3JScsICc2MCUnLCAnNjglJywgJzYwJSddLFxuICAgICAgbXg6ICdhdXRvJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBtYjogWyc0MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgN10sXG4gICAgfSxcbiAgICBpbWFnZUJveDoge1xuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBtYjogWzAsIG51bGwsIC02LCBudWxsLCBudWxsLCAnLTQwcHgnLCBudWxsLCAtM10sXG4gICAgICBpbWc6IHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGhlaWdodDogWzI0NSwgJ2F1dG8nXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9