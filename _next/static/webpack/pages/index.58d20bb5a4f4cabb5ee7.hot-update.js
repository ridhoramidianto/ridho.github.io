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
    pt: ['100px', '105px', '105px', '100px', null, null, '100px', '115px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    background: '',
    pr: '50px',
    pl: '50px',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NvbnRhY3QuanMiXSwibmFtZXMiOlsiQ29udGFjdCIsInN0eWxlcyIsImJhbm5lciIsImltYWdlQm94IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VsZW5na2FwIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiaG92ZXIiLCJib3hTaGFkb3ciLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsInB0IiwicGIiLCJwciIsInBsIiwicG9zaXRpb24iLCJtYiIsInpJbmRleCIsImNvbnRlbnQiLCJib3R0b20iLCJsZWZ0IiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJyaWdodCIsInRyYW5zcGFyZW50IiwiY29udGFpbmVyIiwibWluSGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJjb250ZW50Qm94IiwibXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBVUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULEdBQW1CO0FBQ2hDLFNBQ0M7QUFBUyxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVLLHFEQUFDLGlFQUFEO0FBQ0EsVUFBTSxFQUFDLHFCQURQO0FBRUEsU0FBSyxFQUFDLFlBRk47QUFHQSxXQUFPLEVBQUUsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkwsRUFRRyxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUQsTUFBTSxDQUFDQyxNQUFQLENBQWNDLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFQSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBQyxNQUFSO0FBQWUsWUFBUSxFQUFF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ZTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3gsIEhlYWRpbmcsIFRleHQsIEltYWdlLCBCdXR0b24sIExpbmssXG4gIExhYmVsLFxuICBJbnB1dCxcbiAgU2VsZWN0LFxuICBUZXh0YXJlYSxcbiAgUmFkaW8sXG4gIEZsZXgsXG4gIENoZWNrYm94LFxuICBTbGlkZXJ9IGZyb20gJ3RoZW1lLXVpJztcbi8vIGltcG9ydCBCYW5uZXJJbWcgZnJvbSAnYXNzZXRzL3NoYXBlYm5pZWRjLnBuZyc7XG4vLyBpbXBvcnQgU2hhcGVMZWZ0IGZyb20gJ2Fzc2V0cy9raXJpLnBuZyc7XG4vLyBpbXBvcnQgU2hhcGVSaWdodCBmcm9tICdhc3NldHMva2FuYW4ucG5nJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgcmV0dXJuIChcbiAgIDxzZWN0aW9uIHN4PXtzdHlsZXMuYmFubmVyfT5cbiAgICBcbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgc2xvZ2FuPVwiS2lyaW1rYW4gUGVydGFueWFhblwiXG4gICAgICAgIHRpdGxlPVwiQ29udGFjdCBVc1wiXG4gICAgICAgIGlzV2hpdGU9e2ZhbHNlfVxuICAgICAgICAvPlxuXG4gICAgICA8Qm94IHN4PXtzdHlsZXMuYmFubmVyLmltYWdlQm94fT5cbiAgICAgIFxuICAgICAgPEJveCBhcz1cImZvcm1cIiBvblN1Ym1pdD17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XG4gICAgICA8RmxleCBtYj17Mn0+XG4gIDxJbnB1dCBuYW1lPVwibmFtYVwiIHBsYWNlaG9sZGVyPVwiTmFtYVwiIGlkPVwibmFtYVwiIG1yPXszfS8+XG4gIDxJbnB1dCBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgaWQ9XCJlbWFpbFwiICAvPlxuICA8L0ZsZXg+XG4gIDxCb3g+XG4gIDwvQm94PlxuICA8SW5wdXQgbmFtZT1cInN1YmplY3RcIiBwbGFjZWhvbGRlcj1cIlN1Ympla1wiIGlkPVwic3ViamVjdFwiIG1iPXszfSAvPlxuICA8TGFiZWwgaHRtbEZvcj1cInBlc2FuXCI+UGVzYW48L0xhYmVsPlxuICA8VGV4dGFyZWEgbmFtZT1cInBlc2FuXCIgaWQ9XCJwZXNhblwiIHJvd3M9ezZ9IG1iPXszfSAvPlxuICA8QnV0dG9uPlN1Ym1pdDwvQnV0dG9uPlxuPC9Cb3g+XG5cbiAgICAgIDwvQm94PlxuXG4gICBcbiAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBzZWxlbmdrYXA6e1xuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZDogJyNFNDQyMDAnLFxuICAgIGJvcmRlcjonMHB4IHNvbGlkICNFNTUzMDAnLFxuICAgIGhvdmVyOiAnI2ZmZicsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBib3hTaGFkb3c6ICcwIDFweCA4cHggI0U0NDIwMCcsXG4gICAgICBjb2xvcjonI2ZmZidcbiAgICB9fSxcbiAgYmFubmVyOiB7XG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBwdDogWycxMDBweCcsICcxMDVweCcsICcxMDVweCcsICcxMDBweCcsIG51bGwsIG51bGwsICcxMDBweCcsICcxMTVweCddLFxuICAgIHBiOiBbMiwgbnVsbCwgMCwgbnVsbCwgMiwgMCwgbnVsbCwgNV0sXG4gICAgYmFja2dyb3VuZDogJycsXG4gICAgcHI6ICc1MHB4JyxcbiAgICBwbDogJzUwcHgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG1iOicxMDBweCcsXG4gICAgekluZGV4OiAyLFxuICAgICcmOjpiZWZvcmUnOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGJvdHRvbTogNixcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB6SW5kZXg6IC0xLFxuICAgICAgLy8gYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7U2hhcGVMZWZ0fSlgLFxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdib3R0b20gbGVmdCcsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJzMyJScsXG4gICAgfSxcbiAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGJvdHRvbTogJzYwcHgnLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB0cmFuc3BhcmVudDogJzEwMCUnLFxuICAgICAgekluZGV4OiAtMSxcbiAgICAgIC8vIGJhY2tncm91bmRJbWFnZTogYHVybCgke1NoYXBlUmlnaHR9KWAsXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2JvdHRvbSByaWdodCcsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJzMyJScsXG4gICAgfSxcbiAgICBjb250YWluZXI6IHtcbiAgICAgIG1pbkhlaWdodDogJ2luaGVyaXQnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBtYjogJzcnXG4gICAgfSxcbiAgICBjb250ZW50Qm94OiB7XG4gICAgICB3aWR0aDogWycxMDAlJywgJzkwJScsICc1MzVweCcsIG51bGwsICc2NyUnLCAnNjAlJywgJzY4JScsICc2MCUnXSxcbiAgICAgIG14OiAnYXV0bycsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgbWI6IFsnNDBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDddLFxuICAgIH0sXG4gICAgaW1hZ2VCb3g6IHtcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgbWI6IFswLCBudWxsLCAtNiwgbnVsbCwgbnVsbCwgJy00MHB4JywgbnVsbCwgLTNdLFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==