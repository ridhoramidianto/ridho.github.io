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
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/patternBG.png */ "./src/assets/patternBG.png");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Portal E-Device\\Sample1\\nextjs_landing_page\\nextjs_landing_page\\src\\sections\\contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




var data = [{
  id: 1,
  title: 'Set disbursement Instructions',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 2,
  title: 'Assembly retrieves funds from your account',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 3,
  title: 'Assembly initiates disbursement',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 4,
  title: 'Customer receives funds payment',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}];
function Contact() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: styles.workflow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.faq,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Beberapa Pertanyaan Umum",
    title: "Frequently Asked Question",
    isWhite: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/faqs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    sx: styles.selengkap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, "Selengkapnya")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })));
}
_c = Contact;
var styles = {
  selengkap: {
    color: '#E44200',
    background: '#fff',
    hover: '#fff',
    fontSize: '25px',
    '&:hover': {
      // boxShadow: '0 0px 2px #000',
      background: '#E75519',
      color: '#fff'
    }
  },
  faq: {
    justifyContent: 'center',
    textAlign: 'center'
  },
  workflow: {
    backgroundColor: '#fff',
    backgroundImage: "url(".concat(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default.a, ")"),
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10]
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: ['35px 0', null, '45px 30px', null, '50px 25px', null, null, '50px 65px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)']
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none'
      }
    },
    '&:last-child::before': {
      display: 'none'
    }
  },
  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582'
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3]
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NvbnRhY3QuanMiXSwibmFtZXMiOlsiZGF0YSIsImlkIiwidGl0bGUiLCJ0ZXh0IiwiQ29udGFjdCIsInN0eWxlcyIsIndvcmtmbG93IiwiZmFxIiwic2VsZW5na2FwIiwiZ3JpZCIsImNvbG9yIiwiYmFja2dyb3VuZCIsImhvdmVyIiwiZm9udFNpemUiLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRJbWFnZSIsIlBhdHRlcm5CRyIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsInBvc2l0aW9uIiwicHkiLCJtYiIsInB0IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJjYXJkIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsIm14IiwicHgiLCJjb250ZW50IiwidG9wIiwibGVmdCIsImhlaWdodCIsImljb25Cb3giLCJmbGV4U2hyaW5rIiwiYm9yZGVyUmFkaXVzIiwiYWxpZ25JdGVtcyIsImZvbnRXZWlnaHQiLCJ3cmFwcGVyIiwibXQiLCJsaW5lSGVpZ2h0IiwicHIiLCJzdWJUaXRsZSIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLCtCQUZUO0FBR0VDLE1BQUksRUFDRjtBQUpKLENBRFcsRUFPWDtBQUNFRixJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUsNENBRlQ7QUFHRUMsTUFBSSxFQUNGO0FBSkosQ0FQVyxFQWFYO0FBQ0VGLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSxpQ0FGVDtBQUdFQyxNQUFJLEVBQ0Y7QUFKSixDQWJXLEVBbUJY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LGtCQUFjLEVBQUUsUUFaVDtBQWFQSixTQUFLLEVBQUU7QUFiQSxHQXZFSTtBQXNGYmlDLFNBQU8sRUFBRTtBQUNQWixTQUFLLEVBQUUsTUFEQTtBQUVQRixXQUFPLEVBQUUsTUFGRjtBQUdQQyxpQkFBYSxFQUFFLFFBSFI7QUFJUGMsTUFBRSxFQUFFLE1BSkc7QUFLUDFDLFNBQUssRUFBRTtBQUNMVyxjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLENBQXpCLENBREw7QUFFTEgsV0FBSyxFQUFFLE9BRkY7QUFHTG1DLGdCQUFVLEVBQUUsQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFZLElBQVosRUFBa0IsSUFBbEIsRUFBd0IsSUFBeEIsRUFBOEIsSUFBOUIsQ0FIUDtBQUlMQyxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0IsSUFBdEIsRUFBNEIsQ0FBNUIsQ0FKQztBQUtMdEIsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUo7QUFMQyxLQUxBO0FBYVB1QixZQUFRLEVBQUU7QUFDUmxDLGNBQVEsRUFBRSxDQURGO0FBRVI2QixnQkFBVSxFQUFFLEdBRko7QUFHUkcsZ0JBQVUsRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixHQUFuQixFQUF3QixDQUF4QixDQUhKO0FBSVJuQyxXQUFLLEVBQUUsT0FKQztBQUtSc0MsYUFBTyxFQUFFLElBTEQ7QUFNUkYsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLENBQTVCO0FBTkk7QUFiSDtBQXRGSSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRjNjhhOTI1MGY3NDI3ZmIyMmM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgQm94LCBIZWFkaW5nLCBUZXh0LCBMaW5rLCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcblxuaW1wb3J0IFBhdHRlcm5CRyBmcm9tICdhc3NldHMvcGF0dGVybkJHLnBuZyc7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0aXRsZTogJ1NldCBkaXNidXJzZW1lbnQgSW5zdHJ1Y3Rpb25zJyxcbiAgICB0ZXh0OlxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6ICdBc3NlbWJseSByZXRyaWV2ZXMgZnVuZHMgZnJvbSB5b3VyIGFjY291bnQnLFxuICAgIHRleHQ6XG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICB0aXRsZTogJ0Fzc2VtYmx5IGluaXRpYXRlcyBkaXNidXJzZW1lbnQnLFxuICAgIHRleHQ6XG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICB0aXRsZTogJ0N1c3RvbWVyIHJlY2VpdmVzIGZ1bmRzIHBheW1lbnQnLFxuICAgIHRleHQ6XG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgc3g9e3N0eWxlcy53b3JrZmxvd31cbiAgICA+XG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuZmFxfT5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgc2xvZ2FuPVwiQmViZXJhcGEgUGVydGFueWFhbiBVbXVtXCJcbiAgICAgICAgdGl0bGU9XCJGcmVxdWVudGx5IEFza2VkIFF1ZXN0aW9uXCJcbiAgICAgICAgaXNXaGl0ZT17dHJ1ZX1cbiAgICAgICAgLz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2ZhcXNcIj5cbiAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc3g9e3N0eWxlcy5zZWxlbmdrYXB9ID5TZWxlbmdrYXBueWE8L0J1dHRvbj5cbiAgICA8L0xpbms+XG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgIHsvKiB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0ga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmljb25Cb3h9PiB7YDAke2l0ZW0uaWR9YH08L0JveD5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+PC9IZWFkaW5nPlxuICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+e2l0ZW0udGV4dH08L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgICApKX0gKi99XG5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHNlbGVuZ2thcDp7XG4gICAgY29sb3I6ICcjRTQ0MjAwJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgaG92ZXI6ICcjZmZmJyxcbiAgICBmb250U2l6ZTogJzI1cHgnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgLy8gYm94U2hhZG93OiAnMCAwcHggMnB4ICMwMDAnLFxuICAgICAgYmFja2dyb3VuZDogJyNFNzU1MTknLFxuICAgICAgY29sb3I6JyNmZmYnXG4gICAgfX0sXG4gIGZhcTp7XG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIH0sXG4gIHdvcmtmbG93OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7UGF0dGVybkJHfSlgLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHB5OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxuICB9LFxuICBncmlkOiB7XG4gICAgbWI6IC0xLFxuICAgIHB0OiAwLFxuICAgIGdyaWRHYXA6IFtcbiAgICAgICczNXB4IDAnLFxuICAgICAgbnVsbCxcbiAgICAgICc0NXB4IDMwcHgnLFxuICAgICAgbnVsbCxcbiAgICAgICc1MHB4IDI1cHgnLFxuICAgICAgbnVsbCxcbiAgICAgIG51bGwsXG4gICAgICAnNTBweCA2NXB4JyxcbiAgICBdLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcbiAgICAgICdyZXBlYXQoMSwxZnIpJyxcbiAgICAgIG51bGwsXG4gICAgICAncmVwZWF0KDIsMWZyKScsXG4gICAgICBudWxsLFxuICAgICAgJ3JlcGVhdCg0LDFmciknLFxuICAgIF0sXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsICdsZWZ0J10sXG4gICAgd2lkdGg6IFsnMTAwJScsICc4MCUnLCAnMTAwJSddLFxuICAgIG14OiBbJ2F1dG8nXSxcbiAgICBweDogWzQsIG51bGwsIG51bGwsIDBdLFxuICAgICcmOjpiZWZvcmUnOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA3MiwgbnVsbCwgOTBdLFxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcbiAgICAgIHdpZHRoOiAyMTUsXG4gICAgICBoZWlnaHQ6IDYwLFxuICAgICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTIyMHB4KSc6IHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcmOmxhc3QtY2hpbGQ6OmJlZm9yZSc6IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICB9LFxuICB9LFxuXG4gIGljb25Cb3g6IHtcbiAgICB3aWR0aDogWyc1MHB4JywgbnVsbCwgJzYwcHgnLCBudWxsLCBudWxsLCAnNzBweCddLFxuICAgIGhlaWdodDogWyc1MHB4JywgbnVsbCwgJzYwcHgnLCBudWxsLCBudWxsLCAnNzBweCddLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgYm9yZGVyUmFkaXVzOiBbMTUsIG51bGwsIDIzLCBudWxsLCBudWxsLCAzMF0sXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtYjogWzUsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDZdLFxuICAgIG14OiBbJ2F1dG8nLCBudWxsLCAwXSxcbiAgICBmb250U2l6ZTogWzYsIG51bGwsIDcsIG51bGwsIG51bGwsICczMHB4J10sXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBjb2xvcjogJyMyMzQ1ODInLFxuICB9LFxuICB3cmFwcGVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgbXQ6ICctNXB4JyxcbiAgICB0aXRsZToge1xuICAgICAgZm9udFNpemU6IFszLCBudWxsLCA0LCBudWxsLCBudWxsLCA1XSxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgbGluZUhlaWdodDogWzEuNCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMS41NV0sXG4gICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDJdLFxuICAgICAgbWI6IFsyLCAzXSxcbiAgICB9LFxuXG4gICAgc3ViVGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiAxLFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIG51bGwsIDEuOSwgMl0sXG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIG9wYWNpdHk6IDAuNzUsXG4gICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDVdLFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==