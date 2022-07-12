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
      lineNumber: 11,
      columnNumber: 4
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.banner.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h1",
    sx: {
      color: '#0C606A'
    },
    variant: "heroPrimary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, "BNI E-Device Portal", Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    variant: "secondary",
    sx: {
      "fontSize": 2,
      "fontWeight": 2,
      "lineHeight": 1.5,
      "color": "#010101"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "EDC merupakan alat pembayaran yang digunakan oleh Merchant yang bekerjasama dengan BNI."))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.banner.imageBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_shapebniedc_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, "Info lebih lanjut mengenai EDC BNI"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/edc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    sx: styles.selengkap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, "Selengkapnya")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NvbnRhY3QuanMiXSwibmFtZXMiOlsiQ29udGFjdCIsInN0eWxlcyIsImJhbm5lciIsImNvbnRlbnRCb3giLCJjb2xvciIsImltYWdlQm94IiwiQmFubmVySW1nIiwic2VsZW5na2FwIiwiYmFja2dyb3VuZCIsImJvcmRlciIsImhvdmVyIiwiYm94U2hhZG93IiwianVzdGlmeUNvbnRlbnQiLCJ0ZXh0QWxpZ24iLCJwdCIsInBiIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJjb250ZW50IiwiYm90dG9tIiwibGVmdCIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZEltYWdlIiwiU2hhcGVMZWZ0IiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwicmlnaHQiLCJ0cmFuc3BhcmVudCIsIlNoYXBlUmlnaHQiLCJjb250YWluZXIiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm14IiwibWIiLCJpbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUNoQyxTQUNDO0FBQVMsTUFBRSxFQUFFQyxNQUFNLENBQUNDLE1BQXBCO0FBQTRCLE1BQUUsRUFBQyxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MscURBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFRCxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLHFEQUFDLGdEQUFEO0FBQVMsTUFBRSxFQUFDLElBQVo7QUFBaUIsTUFBRSxFQUFFO0FBQUNDLFdB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QUFFO0FBWk4sS0FyQk47QUFtQ05JLGFBQVMsRUFBRTtBQUNUQyxlQUFTLEVBQUUsU0FERjtBQUVUQyxhQUFPLEVBQUUsTUFGQTtBQUdUQyxtQkFBYSxFQUFFLFFBSE47QUFJVHRCLG9CQUFjLEVBQUU7QUFKUCxLQW5DTDtBQXlDTlQsY0FBVSxFQUFFO0FBQ1ZtQixXQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixPQUFoQixFQUF5QixJQUF6QixFQUErQixLQUEvQixFQUFzQyxLQUF0QyxFQUE2QyxLQUE3QyxFQUFvRCxLQUFwRCxDQURHO0FBRVZhLFFBQUUsRUFBRSxNQUZNO0FBR1Z0QixlQUFTLEVBQUUsUUFIRDtBQUlWdUIsUUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLElBQTNCLEVBQWlDLENBQWpDO0FBSk0sS0F6Q047QUErQ04vQixZQUFRLEVBQUU7QUFDUk8sb0JBQWMsRUFBRSxRQURSO0FBRVJDLGVBQVMsRUFBRSxRQUZIO0FBR1JvQixhQUFPLEVBQUUsYUFIRDtBQUlSRyxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQUMsQ0FBWCxFQUFjLElBQWQsRUFBb0IsSUFBcEIsRUFBMEIsT0FBMUIsRUFBbUMsSUFBbkMsRUFBeUMsQ0FBQyxDQUExQyxDQUpJO0FBS1JDLFNBQUcsRUFBRTtBQUNIckIsZ0JBQVEsRUFBRSxVQURQO0FBRUhLLGNBQU0sRUFBRSxDQUFDLEdBQUQsRUFBTSxNQUFOO0FBRkw7QUFMRztBQS9DSjtBQVZLLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWI5NGNkMDAxOTJjNzI2ZWRlZGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3gsIEhlYWRpbmcsIFRleHQsIEltYWdlLCBCdXR0b24sIExpbmsgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgQmFubmVySW1nIGZyb20gJ2Fzc2V0cy9zaGFwZWJuaWVkYy5wbmcnO1xuaW1wb3J0IFNoYXBlTGVmdCBmcm9tICdhc3NldHMva2lyaS5wbmcnO1xuaW1wb3J0IFNoYXBlUmlnaHQgZnJvbSAnYXNzZXRzL2thbmFuLnBuZyc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCkge1xuICByZXR1cm4gKFxuICAgPHNlY3Rpb24gc3g9e3N0eWxlcy5iYW5uZXJ9IGlkPVwiaG9tZVwiPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8Qm94IHN4PXtzdHlsZXMuYmFubmVyLmNvbnRlbnRCb3h9PlxuICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHN4PXt7Y29sb3I6JyMwQzYwNkEnfX0gdmFyaWFudD1cImhlcm9QcmltYXJ5XCI+XG4gICAgICBCTkkgRS1EZXZpY2UgUG9ydGFsXG4gICAgICA8VGV4dCBhcz1cInBcIiBcbiAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgIHN4PXt7IFxuICAgICAgXCJmb250U2l6ZVwiOiAyLCBcbiAgICAgIFwiZm9udFdlaWdodFwiOjIsXG4gICAgICBcImxpbmVIZWlnaHRcIjoxLjUsXG4gICAgICBcImNvbG9yXCIgOiBcIiMwMTAxMDFcIlxuICAgIH19PlxuICAgICAgRURDIG1lcnVwYWthbiBhbGF0IHBlbWJheWFyYW4geWFuZyBkaWd1bmFrYW4gb2xlaCBNZXJjaGFudCB5YW5nIGJla2VyamFzYW1hIGRlbmdhbiBCTkkuXG4gICAgICA8L1RleHQ+XG4gICAgICA8L0hlYWRpbmc+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBzeD17c3R5bGVzLmJhbm5lci5pbWFnZUJveH0+XG4gICAgICA8SW1hZ2Ugc3JjPXtCYW5uZXJJbWd9IGFsdD1cImJhbm5lclwiPjwvSW1hZ2U+XG4gICAgICA8L0JveD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA8cD5JbmZvIGxlYmloIGxhbmp1dCBtZW5nZW5haSBFREMgQk5JPC9wPlxuICAgIDxMaW5rIGhyZWY9XCIvZWRjXCI+XG4gICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHN4PXtzdHlsZXMuc2VsZW5na2FwfSA+U2VsZW5na2FwbnlhPC9CdXR0b24+XG4gICAgPC9MaW5rPlxuICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHNlbGVuZ2thcDp7XG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBiYWNrZ3JvdW5kOiAnI0U0NDIwMCcsXG4gICAgYm9yZGVyOicwcHggc29saWQgI0U1NTMwMCcsXG4gICAgaG92ZXI6ICcjZmZmJyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJveFNoYWRvdzogJzAgMXB4IDhweCAjRTQ0MjAwJyxcbiAgICAgIGNvbG9yOicjZmZmJ1xuICAgIH19LFxuICBiYW5uZXI6IHtcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIHB0OiBbJzE0MHB4JywgJzE0NXB4JywgJzE1NXB4JywgJzE3MHB4JywgbnVsbCwgbnVsbCwgJzE4MHB4JywgJzIxNXB4J10sXG4gICAgcGI6IFsyLCBudWxsLCAwLCBudWxsLCAyLCAwLCBudWxsLCA1XSxcbiAgICBiYWNrZ3JvdW5kOiAnJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB6SW5kZXg6IDIsXG4gICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgYm90dG9tOiA2LFxuICAgICAgbGVmdDogMCxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHpJbmRleDogLTEsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtTaGFwZUxlZnR9KWAsXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2JvdHRvbSBsZWZ0JyxcbiAgICAgIGJhY2tncm91bmRTaXplOiAnMzIlJyxcbiAgICB9LFxuICAgICcmOjphZnRlcic6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgYm90dG9tOiAnNjBweCcsXG4gICAgICByaWdodDogMCxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHRyYW5zcGFyZW50OiAnMTAwJScsXG4gICAgICB6SW5kZXg6IC0xLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7U2hhcGVSaWdodH0pYCxcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnYm90dG9tIHJpZ2h0JyxcbiAgICAgIGJhY2tncm91bmRTaXplOiAnMzIlJyxcbiAgICB9LFxuICAgIGNvbnRhaW5lcjoge1xuICAgICAgbWluSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICB9LFxuICAgIGNvbnRlbnRCb3g6IHtcbiAgICAgIHdpZHRoOiBbJzEwMCUnLCAnOTAlJywgJzUzNXB4JywgbnVsbCwgJzY3JScsICc2MCUnLCAnNjglJywgJzYwJSddLFxuICAgICAgbXg6ICdhdXRvJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBtYjogWyc0MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgN10sXG4gICAgfSxcbiAgICBpbWFnZUJveDoge1xuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBtYjogWzAsIG51bGwsIC02LCBudWxsLCBudWxsLCAnLTQwcHgnLCBudWxsLCAtM10sXG4gICAgICBpbWc6IHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGhlaWdodDogWzI0NSwgJ2F1dG8nXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9