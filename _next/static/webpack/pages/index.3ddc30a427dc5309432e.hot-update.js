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
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Flex, {
    sx: styles.inputGroup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 10
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Label, {
    htmlFor: "domainName",
    variant: "styles.srOnly",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, "Your Domain Name"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Input, {
    type: "text",
    id: "domainName",
    value: state.domainName,
    onChange: handleChange,
    placeholder: "Your domain name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    variant: "primary",
    sx: styles.submit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "Start for free"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: styles.note,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "No credit card required."), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
    backgroundColor: 'background',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NvbnRhY3QuanMiXSwibmFtZXMiOlsiZGF0YSIsImlkIiwidGl0bGUiLCJ0ZXh0IiwiQ29udGFjdCIsInN0eWxlcyIsIndvcmtmbG93IiwiZmFxIiwiaW5wdXRHcm91cCIsInN0YXRlIiwiZG9tYWluTmFtZSIsImhhbmRsZUNoYW5nZSIsInN1Ym1pdCIsIm5vdGUiLCJncmlkIiwic2VsZW5na2FwIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiaG92ZXIiLCJmb250U2l6ZSIsImp1c3RpZnlDb250ZW50IiwidGV4dEFsaWduIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZEltYWdlIiwiUGF0dGVybkJHIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwicG9zaXRpb24iLCJweSIsIm1iIiwicHQiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImNhcmQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIndpZHRoIiwibXgiLCJweCIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwiaWNvbkJveCIsImZsZXhTaHJpbmsiLCJib3JkZXJSYWRpdXMiLCJhbGlnbkl0ZW1zIiwiZm9udFdlaWdodCIsIndyYXBwZXIiLCJtdCIsImxpbmVIZWlnaHQiLCJwciIsInN1YlRpdGxlIiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUsK0JBRlQ7QUFHRUMsTUFBSSxFQUNGO0FBSkosQ0FEVyxFQU9YO0FBQ0VGLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSw0Q0FGVDtBQUdFQyxNQUFJLEVBQ0Y7QUFKSixDQVBXLEVBYVg7QUFDRUYsSUFB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QWhCLEVBQXNCLElBQXRCLEVBQTRCLENBQTVCLENBSkM7QUFLTHRCLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKO0FBTEMsS0FMQTtBQWFQdUIsWUFBUSxFQUFFO0FBQ1JsQyxjQUFRLEVBQUUsQ0FERjtBQUVSNkIsZ0JBQVUsRUFBRSxHQUZKO0FBR1JHLGdCQUFVLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsR0FBbkIsRUFBd0IsQ0FBeEIsQ0FISjtBQUlSbkMsV0FBSyxFQUFFLE9BSkM7QUFLUnNDLGFBQU8sRUFBRSxJQUxEO0FBTVJGLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixJQUFoQixFQUFzQixJQUF0QixFQUE0QixDQUE1QjtBQU5JO0FBYkg7QUF0RkksQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZGRjMzBhNDI3ZGM1MzA5NDMyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIEJveCwgSGVhZGluZywgVGV4dCwgTGluaywgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XG5cbmltcG9ydCBQYXR0ZXJuQkcgZnJvbSAnYXNzZXRzL3BhdHRlcm5CRy5wbmcnO1xuXG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgdGl0bGU6ICdTZXQgZGlzYnVyc2VtZW50IEluc3RydWN0aW9ucycsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiAnQXNzZW1ibHkgcmV0cmlldmVzIGZ1bmRzIGZyb20geW91ciBhY2NvdW50JyxcbiAgICB0ZXh0OlxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdGl0bGU6ICdBc3NlbWJseSBpbml0aWF0ZXMgZGlzYnVyc2VtZW50JyxcbiAgICB0ZXh0OlxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgdGl0bGU6ICdDdXN0b21lciByZWNlaXZlcyBmdW5kcyBwYXltZW50JyxcbiAgICB0ZXh0OlxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy4nLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgIHN4PXtzdHlsZXMud29ya2Zsb3d9XG4gICAgPlxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmZhcX0+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgIHNsb2dhbj1cIkJlYmVyYXBhIFBlcnRhbnlhYW4gVW11bVwiXG4gICAgICAgIHRpdGxlPVwiRnJlcXVlbnRseSBBc2tlZCBRdWVzdGlvblwiXG4gICAgICAgIGlzV2hpdGU9e3RydWV9XG4gICAgICAgIC8+XG4gICAgICAgICA8RmxleCBzeD17c3R5bGVzLmlucHV0R3JvdXB9PlxuICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImRvbWFpbk5hbWVcIiB2YXJpYW50PVwic3R5bGVzLnNyT25seVwiPlxuICAgICAgICAgICAgICAgIFlvdXIgRG9tYWluIE5hbWVcbiAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGlkPVwiZG9tYWluTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmRvbWFpbk5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgZG9tYWluIG5hbWVcIlxuICAgICAgICAgICAgICAvPiBcbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc3g9e3N0eWxlcy5zdWJtaXR9PlxuICAgICAgICAgICAgICBTdGFydCBmb3IgZnJlZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8VGV4dCBhcz1cInBcIiBzeD17c3R5bGVzLm5vdGV9PlxuICAgICAgICAgICAgICBObyBjcmVkaXQgY2FyZCByZXF1aXJlZC5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgey8qIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaWNvbkJveH0+IHtgMCR7aXRlbS5pZH1gfTwvQm94PlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT48L0hlYWRpbmc+XG4gICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy53cmFwcGVyLnN1YlRpdGxlfT57aXRlbS50ZXh0fTwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgICAgICkpfSAqL31cblxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc2VsZW5na2FwOntcbiAgICBjb2xvcjogJyNFNDQyMDAnLFxuICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICBob3ZlcjogJyNmZmYnLFxuICAgIGZvbnRTaXplOiAnMjVweCcsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICAvLyBib3hTaGFkb3c6ICcwIDBweCAycHggIzAwMCcsXG4gICAgICBiYWNrZ3JvdW5kOiAnI0U3NTUxOScsXG4gICAgICBjb2xvcjonI2ZmZidcbiAgICB9fSxcbiAgZmFxOntcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgfSxcbiAgd29ya2Zsb3c6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdiYWNrZ3JvdW5kJyxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtQYXR0ZXJuQkd9KWAsXG4gICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXG4gIH0sXG4gIGdyaWQ6IHtcbiAgICBtYjogLTEsXG4gICAgcHQ6IDAsXG4gICAgZ3JpZEdhcDogW1xuICAgICAgJzM1cHggMCcsXG4gICAgICBudWxsLFxuICAgICAgJzQ1cHggMzBweCcsXG4gICAgICBudWxsLFxuICAgICAgJzUwcHggMjVweCcsXG4gICAgICBudWxsLFxuICAgICAgbnVsbCxcbiAgICAgICc1MHB4IDY1cHgnLFxuICAgIF0sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xuICAgICAgJ3JlcGVhdCgxLDFmciknLFxuICAgICAgbnVsbCxcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcbiAgICAgIG51bGwsXG4gICAgICAncmVwZWF0KDQsMWZyKScsXG4gICAgXSxcbiAgfSxcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgJ2xlZnQnXSxcbiAgICB3aWR0aDogWycxMDAlJywgJzgwJScsICcxMDAlJ10sXG4gICAgbXg6IFsnYXV0byddLFxuICAgIHB4OiBbNCwgbnVsbCwgbnVsbCwgMF0sXG4gICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDcyLCBudWxsLCA5MF0sXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxuICAgICAgd2lkdGg6IDIxNSxcbiAgICAgIGhlaWdodDogNjAsXG4gICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjIwcHgpJzoge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJyY6bGFzdC1jaGlsZDo6YmVmb3JlJzoge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG5cbiAgaWNvbkJveDoge1xuICAgIHdpZHRoOiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc3MHB4J10sXG4gICAgaGVpZ2h0OiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc3MHB4J10sXG4gICAgZmxleFNocmluazogMCxcbiAgICBib3JkZXJSYWRpdXM6IFsxNSwgbnVsbCwgMjMsIG51bGwsIG51bGwsIDMwXSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG1iOiBbNSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNl0sXG4gICAgbXg6IFsnYXV0bycsIG51bGwsIDBdLFxuICAgIGZvbnRTaXplOiBbNiwgbnVsbCwgNywgbnVsbCwgbnVsbCwgJzMwcHgnXSxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGNvbG9yOiAnIzIzNDU4MicsXG4gIH0sXG4gIHdyYXBwZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBtdDogJy01cHgnLFxuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogWzMsIG51bGwsIDQsIG51bGwsIG51bGwsIDVdLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBsaW5lSGVpZ2h0OiBbMS40LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxLjU1XSxcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXG4gICAgICBtYjogWzIsIDNdLFxuICAgIH0sXG5cbiAgICBzdWJUaXRsZToge1xuICAgICAgZm9udFNpemU6IDEsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgbnVsbCwgMS45LCAyXSxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgb3BhY2l0eTogMC43NSxcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9