webpackHotUpdate_N_E("pages/contact",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NvbnRhY3QuanMiXSwibmFtZXMiOlsiQ29udGFjdCIsInN0eWxlcyIsImJhbm5lciIsImltYWdlQm94IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VsZW5na2FwIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiaG92ZXIiLCJib3hTaGFkb3ciLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsInB0IiwicGIiLCJwb3NpdGlvbiIsIm1iIiwiekluZGV4IiwiY29udGVudCIsImJvdHRvbSIsImxlZnQiLCJoZWlnaHQiLCJ3aWR0aCIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsInJpZ2h0IiwidHJhbnNwYXJlbnQiLCJjb250YWluZXIiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImNvbnRlbnRCb3giLCJteCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FVQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE9BQVQsR0FBbUI7QUFDaEMsU0FDQztBQUFTLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUsscURBQUMsaUVBQUQ7QUFDQSxVQUFNLEVBQUMsMEJBRFA7QUFFQSxTQUFLLEVBQUMsMkJBRk47QUFHQSxXQUFPLEVBQUUsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkwsRUFRRyxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUQsTUFBTSxDQUFDQyxNQUFQLENBQWNDLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFQSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBQyxNQUFSO0FBQWUsWUFBUSxFQUFFLGtCQUFDQyxD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QVcsRUFBRSxNQVBIO0FBUVZWLFlBQU0sRUFBRSxDQUFDLENBUkM7QUFTVjtBQUNBTSxzQkFBZ0IsYUFWTjtBQVdWQyx3QkFBa0IsRUFBRSxjQVhWO0FBWVZDLG9CQUFjLEVBQUU7QUFaTixLQXRCTjtBQW9DTkcsYUFBUyxFQUFFO0FBQ1RDLGVBQVMsRUFBRSxTQURGO0FBRVRDLGFBQU8sRUFBRSxNQUZBO0FBR1RDLG1CQUFhLEVBQUUsUUFITjtBQUlUcEIsb0JBQWMsRUFBRSxRQUpQO0FBS1RLLFFBQUUsRUFBRTtBQUxLLEtBcENMO0FBMkNOZ0IsY0FBVSxFQUFFO0FBQ1ZWLFdBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLE9BQWhCLEVBQXlCLElBQXpCLEVBQStCLEtBQS9CLEVBQXNDLEtBQXRDLEVBQTZDLEtBQTdDLEVBQW9ELEtBQXBELENBREc7QUFFVlcsUUFBRSxFQUFFLE1BRk07QUFHVnJCLGVBQVMsRUFBRSxRQUhEO0FBSVZJLFFBQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixJQUFyQixFQUEyQixJQUEzQixFQUFpQyxDQUFqQztBQUpNLEtBM0NOO0FBaUROZCxZQUFRLEVBQUU7QUFDUlMsb0JBQWMsRUFBRSxRQURSO0FBRVJDLGVBQVMsRUFBRSxRQUZIO0FBR1JrQixhQUFPLEVBQUUsYUFIRDtBQUlSZCxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQUMsQ0FBWCxFQUFjLElBQWQsRUFBb0IsSUFBcEIsRUFBMEIsT0FBMUIsRUFBbUMsSUFBbkMsRUFBeUMsQ0FBQyxDQUExQztBQUpJO0FBakRKO0FBVkssQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250YWN0Ljk0NTAwZmQ5Y2RiZGM0MTBkYjEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IENvbnRhaW5lciwgQm94LCBIZWFkaW5nLCBUZXh0LCBJbWFnZSwgQnV0dG9uLCBMaW5rLFxuICBMYWJlbCxcbiAgSW5wdXQsXG4gIFNlbGVjdCxcbiAgVGV4dGFyZWEsXG4gIFJhZGlvLFxuICBGbGV4LFxuICBDaGVja2JveCxcbiAgU2xpZGVyfSBmcm9tICd0aGVtZS11aSc7XG4vLyBpbXBvcnQgQmFubmVySW1nIGZyb20gJ2Fzc2V0cy9zaGFwZWJuaWVkYy5wbmcnO1xuLy8gaW1wb3J0IFNoYXBlTGVmdCBmcm9tICdhc3NldHMva2lyaS5wbmcnO1xuLy8gaW1wb3J0IFNoYXBlUmlnaHQgZnJvbSAnYXNzZXRzL2thbmFuLnBuZyc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XG4gIHJldHVybiAoXG4gICA8c2VjdGlvbiBzeD17c3R5bGVzLmJhbm5lcn0+XG4gICAgXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgIHNsb2dhbj1cIkJlYmVyYXBhIFBlcnRhbnlhYW4gVW11bVwiXG4gICAgICAgIHRpdGxlPVwiRnJlcXVlbnRseSBBc2tlZCBRdWVzdGlvblwiXG4gICAgICAgIGlzV2hpdGU9e2ZhbHNlfVxuICAgICAgICAvPlxuXG4gICAgICA8Qm94IHN4PXtzdHlsZXMuYmFubmVyLmltYWdlQm94fT5cbiAgICAgIFxuICAgICAgPEJveCBhcz1cImZvcm1cIiBvblN1Ym1pdD17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XG4gICAgICA8RmxleCBtYj17Mn0+XG4gIDxJbnB1dCBuYW1lPVwibmFtYVwiIGlkPVwibmFtYVwiIG1yPXszfS8+XG4gIDxJbnB1dCBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgIC8+XG4gIDwvRmxleD5cbiAgPEJveD5cbiAgPC9Cb3g+XG4gIDxJbnB1dCBuYW1lPVwic3ViamVjdFwiIGlkPVwic3ViamVjdFwiIG1iPXszfSAvPlxuICA8TGFiZWwgaHRtbEZvcj1cInBlc2FuXCI+UGVzYW48L0xhYmVsPlxuICA8VGV4dGFyZWEgbmFtZT1cInBlc2FuXCIgaWQ9XCJwZXNhblwiIHJvd3M9ezZ9IG1iPXszfSAvPlxuICA8QnV0dG9uPlN1Ym1pdDwvQnV0dG9uPlxuPC9Cb3g+XG5cbiAgICAgIDwvQm94PlxuXG4gICBcbiAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBzZWxlbmdrYXA6e1xuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZDogJyNFNDQyMDAnLFxuICAgIGJvcmRlcjonMHB4IHNvbGlkICNFNTUzMDAnLFxuICAgIGhvdmVyOiAnI2ZmZicsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBib3hTaGFkb3c6ICcwIDFweCA4cHggI0U0NDIwMCcsXG4gICAgICBjb2xvcjonI2ZmZidcbiAgICB9fSxcbiAgYmFubmVyOiB7XG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBwdDogWycxMDBweCcsICcxMDVweCcsICcxMDVweCcsICcxMDBweCcsIG51bGwsIG51bGwsICcxMDBweCcsICcxMTVweCddLFxuICAgIHBiOiBbMiwgbnVsbCwgMCwgbnVsbCwgMiwgMCwgbnVsbCwgNV0sXG4gICAgYmFja2dyb3VuZDogJycsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgbWI6JzEwMHB4JyxcbiAgICB6SW5kZXg6IDIsXG4gICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgYm90dG9tOiA2LFxuICAgICAgbGVmdDogMCxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHpJbmRleDogLTEsXG4gICAgICAvLyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtTaGFwZUxlZnR9KWAsXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2JvdHRvbSBsZWZ0JyxcbiAgICAgIGJhY2tncm91bmRTaXplOiAnMzIlJyxcbiAgICB9LFxuICAgICcmOjphZnRlcic6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgYm90dG9tOiAnNjBweCcsXG4gICAgICByaWdodDogMCxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHRyYW5zcGFyZW50OiAnMTAwJScsXG4gICAgICB6SW5kZXg6IC0xLFxuICAgICAgLy8gYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7U2hhcGVSaWdodH0pYCxcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnYm90dG9tIHJpZ2h0JyxcbiAgICAgIGJhY2tncm91bmRTaXplOiAnMzIlJyxcbiAgICB9LFxuICAgIGNvbnRhaW5lcjoge1xuICAgICAgbWluSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIG1iOiAnNydcbiAgICB9LFxuICAgIGNvbnRlbnRCb3g6IHtcbiAgICAgIHdpZHRoOiBbJzEwMCUnLCAnOTAlJywgJzUzNXB4JywgbnVsbCwgJzY3JScsICc2MCUnLCAnNjglJywgJzYwJSddLFxuICAgICAgbXg6ICdhdXRvJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBtYjogWyc0MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgN10sXG4gICAgfSxcbiAgICBpbWFnZUJveDoge1xuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBtYjogWzAsIG51bGwsIC02LCBudWxsLCBudWxsLCAnLTQwcHgnLCBudWxsLCAtM10sXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9