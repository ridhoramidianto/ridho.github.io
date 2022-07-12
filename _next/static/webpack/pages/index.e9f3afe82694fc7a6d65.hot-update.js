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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
var _jsxFileName = "D:\\Portal E-Device\\Sample1\\nextjs_landing_page\\nextjs_landing_page\\src\\sections\\contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */

 // import BannerImg from 'assets/shapebniedc.png';
// import ShapeLeft from 'assets/kiri.png';
// import ShapeRight from 'assets/kanan.png';



function Contact() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: styles.banner,
    id: "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    slogan: "Beberapa Pertanyaan Umum",
    title: "Frequently Asked Question",
    isWhite: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.banner.imageBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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
      lineNumber: 30,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    mb: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "nama",
    id: "nama",
    mr: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 3
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "email",
    id: "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 3
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 3
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "subject",
    id: "subject",
    mb: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 3
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    htmlFor: "pesan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 3
    }
  }, "Pesan"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Textarea"], {
    name: "pesan",
    id: "pesan",
    rows: 6,
    mb: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 3
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 3
    }
  }, "Slider"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 3
    }
  }, "Submit"))));
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
      // backgroundImage: `url(${ShapeLeft})`,
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
      // backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'bottom right',
      backgroundSize: '32%'
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      mb: '7'
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
      mb: [0, null, -6, null, null, '-40px', null, -3]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NvbnRhY3QuanMiXSwibmFtZXMiOlsiQ29udGFjdCIsInN0eWxlcyIsImJhbm5lciIsImltYWdlQm94IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VsZW5na2FwIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiaG92ZXIiLCJib3hTaGFkb3ciLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsInB0IiwicGIiLCJwb3NpdGlvbiIsInpJbmRleCIsImNvbnRlbnQiLCJib3R0b20iLCJsZWZ0IiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJyaWdodCIsInRyYW5zcGFyZW50IiwiY29udGFpbmVyIiwibWluSGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtYiIsImNvbnRlbnRCb3giLCJteCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FVQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE9BQVQsR0FBbUI7QUFDaEMsU0FDQztBQUFTLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxNQUFwQjtBQUE0QixNQUFFLEVBQUMsTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVLLHFEQUFDLGlFQUFEO0FBQ0EsVUFBTSxFQUFDLDBCQURQO0FBRUEsU0FBSyxFQUFDLDJCQUZOO0FBR0EsV0FBTyxFQUFFLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZMLEVBUUcscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUEscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUMsTUFBUjtB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RSxDQUpHO0FBS1ZMLFlBQU0sRUFBRSxNQUxFO0FBTVZDLFdBQUssRUFBRSxNQU5HO0FBT1ZLLGlCQUFXLEVBQUUsTUFQSDtBQVFWVixZQUFNLEVBQUUsQ0FBQyxDQVJDO0FBU1Y7QUFDQU0sc0JBQWdCLGFBVk47QUFXVkMsd0JBQWtCLEVBQUUsY0FYVjtBQVlWQyxvQkFBYyxFQUFFO0FBWk4sS0FyQk47QUFtQ05HLGFBQVMsRUFBRTtBQUNUQyxlQUFTLEVBQUUsU0FERjtBQUVUQyxhQUFPLEVBQUUsTUFGQTtBQUdUQyxtQkFBYSxFQUFFLFFBSE47QUFJVG5CLG9CQUFjLEVBQUUsUUFKUDtBQUtUb0IsUUFBRSxFQUFFO0FBTEssS0FuQ0w7QUEwQ05DLGNBQVUsRUFBRTtBQUNWWCxXQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixPQUFoQixFQUF5QixJQUF6QixFQUErQixLQUEvQixFQUFzQyxLQUF0QyxFQUE2QyxLQUE3QyxFQUFvRCxLQUFwRCxDQURHO0FBRVZZLFFBQUUsRUFBRSxNQUZNO0FBR1ZyQixlQUFTLEVBQUUsUUFIRDtBQUlWbUIsUUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLElBQTNCLEVBQWlDLENBQWpDO0FBSk0sS0ExQ047QUFnRE43QixZQUFRLEVBQUU7QUFDUlMsb0JBQWMsRUFBRSxRQURSO0FBRVJDLGVBQVMsRUFBRSxRQUZIO0FBR1JpQixhQUFPLEVBQUUsYUFIRDtBQUlSRSxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQUMsQ0FBWCxFQUFjLElBQWQsRUFBb0IsSUFBcEIsRUFBMEIsT0FBMUIsRUFBbUMsSUFBbkMsRUFBeUMsQ0FBQyxDQUExQztBQUpJO0FBaERKO0FBVkssQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lOWYzYWZlODI2OTRmYzdhNmQ2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBDb250YWluZXIsIEJveCwgSGVhZGluZywgVGV4dCwgSW1hZ2UsIEJ1dHRvbiwgTGluayxcbiAgTGFiZWwsXG4gIElucHV0LFxuICBTZWxlY3QsXG4gIFRleHRhcmVhLFxuICBSYWRpbyxcbiAgRmxleCxcbiAgQ2hlY2tib3gsXG4gIFNsaWRlcn0gZnJvbSAndGhlbWUtdWknO1xuLy8gaW1wb3J0IEJhbm5lckltZyBmcm9tICdhc3NldHMvc2hhcGVibmllZGMucG5nJztcbi8vIGltcG9ydCBTaGFwZUxlZnQgZnJvbSAnYXNzZXRzL2tpcmkucG5nJztcbi8vIGltcG9ydCBTaGFwZVJpZ2h0IGZyb20gJ2Fzc2V0cy9rYW5hbi5wbmcnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCkge1xuICByZXR1cm4gKFxuICAgPHNlY3Rpb24gc3g9e3N0eWxlcy5iYW5uZXJ9IGlkPVwiaG9tZVwiPlxuICAgIFxuICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICBzbG9nYW49XCJCZWJlcmFwYSBQZXJ0YW55YWFuIFVtdW1cIlxuICAgICAgICB0aXRsZT1cIkZyZXF1ZW50bHkgQXNrZWQgUXVlc3Rpb25cIlxuICAgICAgICBpc1doaXRlPXtmYWxzZX1cbiAgICAgICAgLz5cblxuICAgICAgPEJveCBzeD17c3R5bGVzLmJhbm5lci5pbWFnZUJveH0+XG4gICAgICBcbiAgICAgIDxCb3ggYXM9XCJmb3JtXCIgb25TdWJtaXQ9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxuICAgICAgPEZsZXggbWI9ezJ9PlxuICA8SW5wdXQgbmFtZT1cIm5hbWFcIiBpZD1cIm5hbWFcIiBtcj17M30vPlxuICA8SW5wdXQgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiICAvPlxuICA8L0ZsZXg+XG4gIDxCb3g+XG4gIDwvQm94PlxuICA8SW5wdXQgbmFtZT1cInN1YmplY3RcIiBpZD1cInN1YmplY3RcIiBtYj17M30gLz5cbiAgPExhYmVsIGh0bWxGb3I9XCJwZXNhblwiPlBlc2FuPC9MYWJlbD5cbiAgPFRleHRhcmVhIG5hbWU9XCJwZXNhblwiIGlkPVwicGVzYW5cIiByb3dzPXs2fSBtYj17M30gLz5cbiAgPExhYmVsPlNsaWRlcjwvTGFiZWw+XG4gIDxCdXR0b24+U3VibWl0PC9CdXR0b24+XG48L0JveD5cblxuICAgICAgPC9Cb3g+XG5cbiAgIFxuICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHNlbGVuZ2thcDp7XG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBiYWNrZ3JvdW5kOiAnI0U0NDIwMCcsXG4gICAgYm9yZGVyOicwcHggc29saWQgI0U1NTMwMCcsXG4gICAgaG92ZXI6ICcjZmZmJyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJveFNoYWRvdzogJzAgMXB4IDhweCAjRTQ0MjAwJyxcbiAgICAgIGNvbG9yOicjZmZmJ1xuICAgIH19LFxuICBiYW5uZXI6IHtcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIHB0OiBbJzE0MHB4JywgJzE0NXB4JywgJzE1NXB4JywgJzE3MHB4JywgbnVsbCwgbnVsbCwgJzE4MHB4JywgJzIxNXB4J10sXG4gICAgcGI6IFsyLCBudWxsLCAwLCBudWxsLCAyLCAwLCBudWxsLCA1XSxcbiAgICBiYWNrZ3JvdW5kOiAnJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB6SW5kZXg6IDIsXG4gICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgYm90dG9tOiA2LFxuICAgICAgbGVmdDogMCxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHpJbmRleDogLTEsXG4gICAgICAvLyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtTaGFwZUxlZnR9KWAsXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2JvdHRvbSBsZWZ0JyxcbiAgICAgIGJhY2tncm91bmRTaXplOiAnMzIlJyxcbiAgICB9LFxuICAgICcmOjphZnRlcic6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgYm90dG9tOiAnNjBweCcsXG4gICAgICByaWdodDogMCxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHRyYW5zcGFyZW50OiAnMTAwJScsXG4gICAgICB6SW5kZXg6IC0xLFxuICAgICAgLy8gYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7U2hhcGVSaWdodH0pYCxcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnYm90dG9tIHJpZ2h0JyxcbiAgICAgIGJhY2tncm91bmRTaXplOiAnMzIlJyxcbiAgICB9LFxuICAgIGNvbnRhaW5lcjoge1xuICAgICAgbWluSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIG1iOiAnNydcbiAgICB9LFxuICAgIGNvbnRlbnRCb3g6IHtcbiAgICAgIHdpZHRoOiBbJzEwMCUnLCAnOTAlJywgJzUzNXB4JywgbnVsbCwgJzY3JScsICc2MCUnLCAnNjglJywgJzYwJSddLFxuICAgICAgbXg6ICdhdXRvJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBtYjogWyc0MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgN10sXG4gICAgfSxcbiAgICBpbWFnZUJveDoge1xuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBtYjogWzAsIG51bGwsIC02LCBudWxsLCBudWxsLCAnLTQwcHgnLCBudWxsLCAtM10sXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9