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
      lineNumber: 20,
      columnNumber: 4
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
  }, "Submit")))));
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
      justifyContent: 'center',
      mb: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NvbnRhY3QuanMiXSwibmFtZXMiOlsiQ29udGFjdCIsInN0eWxlcyIsImJhbm5lciIsImNvbnRhaW5lciIsImltYWdlQm94IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VsZW5na2FwIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiaG92ZXIiLCJib3hTaGFkb3ciLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsInB0IiwicGIiLCJwb3NpdGlvbiIsInpJbmRleCIsImNvbnRlbnQiLCJib3R0b20iLCJsZWZ0IiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJTaGFwZUxlZnQiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJyaWdodCIsInRyYW5zcGFyZW50IiwiU2hhcGVSaWdodCIsIm1pbkhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWIiLCJjb250ZW50Qm94IiwibXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUNoQyxTQUNDO0FBQVMsTUFBRSxFQUFFQyxNQUFNLENBQUNDLE1BQXBCO0FBQTRCLE1BQUUsRUFBQyxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MscURBQUMsa0RBQUQ7QUFBVyxNQUFFLEVBQUVELE1BQU0sQ0FBQ0UsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLHFEQUFDLGlFQUFEO0FBQ0EsVUFBTSxFQUFDLDBCQURQO0FBRUEsU0FBSyxFQUFDLDJCQUZOO0FBR0EsV0FBTyxFQUFFLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJ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QUFjLElBQWQsRUFBb0IsSUFBcEIsRUFBMEIsT0FBMUIsRUFBbUMsSUFBbkMsRUFBeUMsQ0FBQyxDQUExQztBQUpJO0FBaERKO0FBVkssQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ZTc4MjBhNGI5NzA2M2UwYzFkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBDb250YWluZXIsIEJveCwgSGVhZGluZywgVGV4dCwgSW1hZ2UsIEJ1dHRvbiwgTGluayxcbiAgTGFiZWwsXG4gIElucHV0LFxuICBTZWxlY3QsXG4gIFRleHRhcmVhLFxuICBSYWRpbyxcbiAgRmxleCxcbiAgQ2hlY2tib3gsXG4gIFNsaWRlcn0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IEJhbm5lckltZyBmcm9tICdhc3NldHMvc2hhcGVibmllZGMucG5nJztcbmltcG9ydCBTaGFwZUxlZnQgZnJvbSAnYXNzZXRzL2tpcmkucG5nJztcbmltcG9ydCBTaGFwZVJpZ2h0IGZyb20gJ2Fzc2V0cy9rYW5hbi5wbmcnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCkge1xuICByZXR1cm4gKFxuICAgPHNlY3Rpb24gc3g9e3N0eWxlcy5iYW5uZXJ9IGlkPVwiaG9tZVwiPlxuICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICBzbG9nYW49XCJCZWJlcmFwYSBQZXJ0YW55YWFuIFVtdW1cIlxuICAgICAgICB0aXRsZT1cIkZyZXF1ZW50bHkgQXNrZWQgUXVlc3Rpb25cIlxuICAgICAgICBpc1doaXRlPXtmYWxzZX1cbiAgICAgICAgLz5cblxuICAgICAgPEJveCBzeD17c3R5bGVzLmJhbm5lci5pbWFnZUJveH0+XG4gICAgICBcbiAgICAgIDxCb3ggYXM9XCJmb3JtXCIgb25TdWJtaXQ9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxuICAgICAgPEZsZXggbWI9ezJ9PlxuICA8SW5wdXQgbmFtZT1cIm5hbWFcIiBpZD1cIm5hbWFcIiBtcj17M30vPlxuICA8SW5wdXQgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiICAvPlxuICA8L0ZsZXg+XG4gIDxCb3g+XG4gIDwvQm94PlxuICA8SW5wdXQgbmFtZT1cInN1YmplY3RcIiBpZD1cInN1YmplY3RcIiBtYj17M30gLz5cbiAgPExhYmVsIGh0bWxGb3I9XCJwZXNhblwiPlBlc2FuPC9MYWJlbD5cbiAgPFRleHRhcmVhIG5hbWU9XCJwZXNhblwiIGlkPVwicGVzYW5cIiByb3dzPXs2fSBtYj17M30gLz5cbiAgPExhYmVsPlNsaWRlcjwvTGFiZWw+XG4gIDxCdXR0b24+U3VibWl0PC9CdXR0b24+XG48L0JveD5cblxuICAgICAgPC9Cb3g+XG4gICAgPC9Db250YWluZXI+XG4gICBcbiAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBzZWxlbmdrYXA6e1xuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZDogJyNFNDQyMDAnLFxuICAgIGJvcmRlcjonMHB4IHNvbGlkICNFNTUzMDAnLFxuICAgIGhvdmVyOiAnI2ZmZicsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBib3hTaGFkb3c6ICcwIDFweCA4cHggI0U0NDIwMCcsXG4gICAgICBjb2xvcjonI2ZmZidcbiAgICB9fSxcbiAgYmFubmVyOiB7XG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBwdDogWycxNDBweCcsICcxNDVweCcsICcxNTVweCcsICcxNzBweCcsIG51bGwsIG51bGwsICcxODBweCcsICcyMTVweCddLFxuICAgIHBiOiBbMiwgbnVsbCwgMCwgbnVsbCwgMiwgMCwgbnVsbCwgNV0sXG4gICAgYmFja2dyb3VuZDogJycsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgekluZGV4OiAyLFxuICAgICcmOjpiZWZvcmUnOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGJvdHRvbTogNixcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB6SW5kZXg6IC0xLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7U2hhcGVMZWZ0fSlgLFxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdib3R0b20gbGVmdCcsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJzMyJScsXG4gICAgfSxcbiAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGJvdHRvbTogJzYwcHgnLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB0cmFuc3BhcmVudDogJzEwMCUnLFxuICAgICAgekluZGV4OiAtMSxcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1NoYXBlUmlnaHR9KWAsXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2JvdHRvbSByaWdodCcsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJzMyJScsXG4gICAgfSxcbiAgICBjb250YWluZXI6IHtcbiAgICAgIG1pbkhlaWdodDogJ2luaGVyaXQnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBtYjogN1xuICAgIH0sXG4gICAgY29udGVudEJveDoge1xuICAgICAgd2lkdGg6IFsnMTAwJScsICc5MCUnLCAnNTM1cHgnLCBudWxsLCAnNjclJywgJzYwJScsICc2OCUnLCAnNjAlJ10sXG4gICAgICBteDogJ2F1dG8nLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIG1iOiBbJzQwcHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA3XSxcbiAgICB9LFxuICAgIGltYWdlQm94OiB7XG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIG1iOiBbMCwgbnVsbCwgLTYsIG51bGwsIG51bGwsICctNDBweCcsIG51bGwsIC0zXSxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=