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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    slogan: "Kirimkan Pertanyaan",
    title: "Contact Us",
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
    placeholder: "Nama",
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
    placeholder: "Email",
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
    placeholder: "Subjek",
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
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
    pt: ['50px', '55px', '55px', '50px', null, null, '50px', '55px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    background: '',
    position: 'relative',
    mb: '100px',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NvbnRhY3QuanMiXSwibmFtZXMiOlsiQ29udGFjdCIsInN0eWxlcyIsImJhbm5lciIsImltYWdlQm94IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VsZW5na2FwIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiaG92ZXIiLCJib3hTaGFkb3ciLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsInB0IiwicGIiLCJwb3NpdGlvbiIsIm1iIiwiekluZGV4IiwiY29udGVudCIsImJvdHRvbSIsImxlZnQiLCJoZWlnaHQiLCJ3aWR0aCIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsInJpZ2h0IiwidHJhbnNwYXJlbnQiLCJjb250YWluZXIiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImNvbnRlbnRCb3giLCJteCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FVQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE9BQVQsR0FBbUI7QUFDaEMsU0FDQztBQUFTLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUsscURBQUMsaUVBQUQ7QUFDQSxVQUFNLEVBQUMscUJBRFA7QUFFQSxTQUFLLEVBQUMsWUFGTjtBQUdBLFdBQU8sRUFBRSxLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGTCxFQVFHLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFRCxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVBLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFDLE1BQVI7QUFBZSxZQUFRLEVBQUUsa0JBQUNDLENB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QUFLLEVBQUUsQ0FKRztBQUtWTCxZQUFNLEVBQUUsTUFMRTtBQU1WQyxXQUFLLEVBQUUsTUFORztBQU9WSyxpQkFBVyxFQUFFLE1BUEg7QUFRVlYsWUFBTSxFQUFFLENBQUMsQ0FSQztBQVNWO0FBQ0FNLHNCQUFnQixhQVZOO0FBV1ZDLHdCQUFrQixFQUFFLGNBWFY7QUFZVkMsb0JBQWMsRUFBRTtBQVpOLEtBdEJOO0FBb0NORyxhQUFTLEVBQUU7QUFDVEMsZUFBUyxFQUFFLFNBREY7QUFFVEMsYUFBTyxFQUFFLE1BRkE7QUFHVEMsbUJBQWEsRUFBRSxRQUhOO0FBSVRwQixvQkFBYyxFQUFFLFFBSlA7QUFLVEssUUFBRSxFQUFFO0FBTEssS0FwQ0w7QUEyQ05nQixjQUFVLEVBQUU7QUFDVlYsV0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsT0FBaEIsRUFBeUIsSUFBekIsRUFBK0IsS0FBL0IsRUFBc0MsS0FBdEMsRUFBNkMsS0FBN0MsRUFBb0QsS0FBcEQsQ0FERztBQUVWVyxRQUFFLEVBQUUsTUFGTTtBQUdWckIsZUFBUyxFQUFFLFFBSEQ7QUFJVkksUUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLElBQTNCLEVBQWlDLENBQWpDO0FBSk0sS0EzQ047QUFpRE5kLFlBQVEsRUFBRTtBQUNSUyxvQkFBYyxFQUFFLFFBRFI7QUFFUkMsZUFBUyxFQUFFLFFBRkg7QUFHUmtCLGFBQU8sRUFBRSxhQUhEO0FBSVJkLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBQyxDQUFYLEVBQWMsSUFBZCxFQUFvQixJQUFwQixFQUEwQixPQUExQixFQUFtQyxJQUFuQyxFQUF5QyxDQUFDLENBQTFDO0FBSkk7QUFqREo7QUFWSyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ5MzU1MTlmOGFjNzE1MTQ2MDg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IENvbnRhaW5lciwgQm94LCBIZWFkaW5nLCBUZXh0LCBJbWFnZSwgQnV0dG9uLCBMaW5rLFxuICBMYWJlbCxcbiAgSW5wdXQsXG4gIFNlbGVjdCxcbiAgVGV4dGFyZWEsXG4gIFJhZGlvLFxuICBGbGV4LFxuICBDaGVja2JveCxcbiAgU2xpZGVyfSBmcm9tICd0aGVtZS11aSc7XG4vLyBpbXBvcnQgQmFubmVySW1nIGZyb20gJ2Fzc2V0cy9zaGFwZWJuaWVkYy5wbmcnO1xuLy8gaW1wb3J0IFNoYXBlTGVmdCBmcm9tICdhc3NldHMva2lyaS5wbmcnO1xuLy8gaW1wb3J0IFNoYXBlUmlnaHQgZnJvbSAnYXNzZXRzL2thbmFuLnBuZyc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XG4gIHJldHVybiAoXG4gICA8c2VjdGlvbiBzeD17c3R5bGVzLmJhbm5lcn0+XG4gICAgXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgIHNsb2dhbj1cIktpcmlta2FuIFBlcnRhbnlhYW5cIlxuICAgICAgICB0aXRsZT1cIkNvbnRhY3QgVXNcIlxuICAgICAgICBpc1doaXRlPXtmYWxzZX1cbiAgICAgICAgLz5cblxuICAgICAgPEJveCBzeD17c3R5bGVzLmJhbm5lci5pbWFnZUJveH0+XG4gICAgICBcbiAgICAgIDxCb3ggYXM9XCJmb3JtXCIgb25TdWJtaXQ9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxuICAgICAgPEZsZXggbWI9ezJ9PlxuICA8SW5wdXQgbmFtZT1cIm5hbWFcIiBwbGFjZWhvbGRlcj1cIk5hbWFcIiBpZD1cIm5hbWFcIiBtcj17M30vPlxuICA8SW5wdXQgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIGlkPVwiZW1haWxcIiAgLz5cbiAgPC9GbGV4PlxuICA8Qm94PlxuICA8L0JveD5cbiAgPElucHV0IG5hbWU9XCJzdWJqZWN0XCIgcGxhY2Vob2xkZXI9XCJTdWJqZWtcIiBpZD1cInN1YmplY3RcIiBtYj17M30gLz5cbiAgPExhYmVsIGh0bWxGb3I9XCJwZXNhblwiPlBlc2FuPC9MYWJlbD5cbiAgPFRleHRhcmVhIG5hbWU9XCJwZXNhblwiIGlkPVwicGVzYW5cIiByb3dzPXs2fSBtYj17M30gLz5cbiAgPEJ1dHRvbj5TdWJtaXQ8L0J1dHRvbj5cbjwvQm94PlxuXG4gICAgICA8L0JveD5cblxuICAgXG4gICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc2VsZW5na2FwOntcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJhY2tncm91bmQ6ICcjRTQ0MjAwJyxcbiAgICBib3JkZXI6JzBweCBzb2xpZCAjRTU1MzAwJyxcbiAgICBob3ZlcjogJyNmZmYnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYm94U2hhZG93OiAnMCAxcHggOHB4ICNFNDQyMDAnLFxuICAgICAgY29sb3I6JyNmZmYnXG4gICAgfX0sXG4gIGJhbm5lcjoge1xuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgcHQ6IFsnNTBweCcsICc1NXB4JywgJzU1cHgnLCAnNTBweCcsIG51bGwsIG51bGwsICc1MHB4JywgJzU1cHgnXSxcbiAgICBwYjogWzIsIG51bGwsIDAsIG51bGwsIDIsIDAsIG51bGwsIDVdLFxuICAgIGJhY2tncm91bmQ6ICcnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG1iOicxMDBweCcsXG4gICAgekluZGV4OiAyLFxuICAgICcmOjpiZWZvcmUnOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGJvdHRvbTogNixcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB6SW5kZXg6IC0xLFxuICAgICAgLy8gYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7U2hhcGVMZWZ0fSlgLFxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdib3R0b20gbGVmdCcsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJzMyJScsXG4gICAgfSxcbiAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGJvdHRvbTogJzYwcHgnLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB0cmFuc3BhcmVudDogJzEwMCUnLFxuICAgICAgekluZGV4OiAtMSxcbiAgICAgIC8vIGJhY2tncm91bmRJbWFnZTogYHVybCgke1NoYXBlUmlnaHR9KWAsXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2JvdHRvbSByaWdodCcsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJzMyJScsXG4gICAgfSxcbiAgICBjb250YWluZXI6IHtcbiAgICAgIG1pbkhlaWdodDogJ2luaGVyaXQnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBtYjogJzcnXG4gICAgfSxcbiAgICBjb250ZW50Qm94OiB7XG4gICAgICB3aWR0aDogWycxMDAlJywgJzkwJScsICc1MzVweCcsIG51bGwsICc2NyUnLCAnNjAlJywgJzY4JScsICc2MCUnXSxcbiAgICAgIG14OiAnYXV0bycsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgbWI6IFsnNDBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDddLFxuICAgIH0sXG4gICAgaW1hZ2VCb3g6IHtcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgbWI6IFswLCBudWxsLCAtNiwgbnVsbCwgbnVsbCwgJy00MHB4JywgbnVsbCwgLTNdLFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==