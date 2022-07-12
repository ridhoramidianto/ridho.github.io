webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/workflow.js":
/*!**********************************!*\
  !*** ./src/sections/workflow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkFlow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/patternBG.png */ "./src/assets/patternBG.png");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Portal E-Device\\Sample1\\nextjs_landing_page\\nextjs_landing_page\\src\\sections\\workflow.js";

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
function WorkFlow() {
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
_c = WorkFlow;
var styles = {
  selengkap: {
    color: '#E44200',
    background: '#fff',
    border: '0px solid #E55300',
    hover: '#fff',
    '&:hover': {
      boxShadow: '0 1px 2px #000'
    }
  },
  faq: {
    justifyContent: 'center',
    textAlign: 'center'
  },
  workflow: {
    backgroundColor: 'primary',
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

$RefreshReg$(_c, "WorkFlow");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3dvcmtmbG93LmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwidGV4dCIsIldvcmtGbG93Iiwic3R5bGVzIiwid29ya2Zsb3ciLCJmYXEiLCJzZWxlbmdrYXAiLCJncmlkIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiaG92ZXIiLCJib3hTaGFkb3ciLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRJbWFnZSIsIlBhdHRlcm5CRyIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsInBvc2l0aW9uIiwicHkiLCJtYiIsInB0IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJjYXJkIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsIm14IiwicHgiLCJjb250ZW50IiwidG9wIiwibGVmdCIsImhlaWdodCIsImljb25Cb3giLCJmbGV4U2hyaW5rIiwiYm9yZGVyUmFkaXVzIiwiYWxpZ25JdGVtcyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIndyYXBwZXIiLCJtdCIsImxpbmVIZWlnaHQiLCJwciIsInN1YlRpdGxlIiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUsK0JBRlQ7QUFHRUMsTUFBSSxFQUNGO0FBSkosQ0FEVyxFQU9YO0FBQ0VGLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSw0Q0FGVDtBQUdFQyxNQUFJLEVBQ0Y7QUFKSixDQVBXLEVBYVg7QUFDRUYsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLGlDQUZUO0FBR0VDLE1B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QWMsRUFBRSxRQVpUO0FBYVBMLFNBQUssRUFBRTtBQWJBLEdBckVJO0FBb0ZibUMsU0FBTyxFQUFFO0FBQ1BiLFNBQUssRUFBRSxNQURBO0FBRVBGLFdBQU8sRUFBRSxNQUZGO0FBR1BDLGlCQUFhLEVBQUUsUUFIUjtBQUlQZSxNQUFFLEVBQUUsTUFKRztBQUtQNUMsU0FBSyxFQUFFO0FBQ0x5QyxjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLENBQXpCLENBREw7QUFFTGpDLFdBQUssRUFBRSxPQUZGO0FBR0xxQyxnQkFBVSxFQUFFLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBWSxJQUFaLEVBQWtCLElBQWxCLEVBQXdCLElBQXhCLEVBQThCLElBQTlCLENBSFA7QUFJTEMsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLENBQTVCLENBSkM7QUFLTHZCLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKO0FBTEMsS0FMQTtBQWFQd0IsWUFBUSxFQUFFO0FBQ1JOLGNBQVEsRUFBRSxDQURGO0FBRVJDLGdCQUFVLEVBQUUsR0FGSjtBQUdSRyxnQkFBVSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLEdBQW5CLEVBQXdCLENBQXhCLENBSEo7QUFJUnJDLFdBQUssRUFBRSxPQUpDO0FBS1J3QyxhQUFPLEVBQUUsSUFMRDtBQU1SRixRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0IsSUFBdEIsRUFBNEIsQ0FBNUI7QUFOSTtBQWJIO0FBcEZJLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWVmODQzZWY1ZDRjNDlmNTY5ZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkLCBCb3gsIEhlYWRpbmcsIFRleHQsIExpbmssIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xuXG5pbXBvcnQgUGF0dGVybkJHIGZyb20gJ2Fzc2V0cy9wYXR0ZXJuQkcucG5nJztcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiAnU2V0IGRpc2J1cnNlbWVudCBJbnN0cnVjdGlvbnMnLFxuICAgIHRleHQ6XG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogJ0Fzc2VtYmx5IHJldHJpZXZlcyBmdW5kcyBmcm9tIHlvdXIgYWNjb3VudCcsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiAnQXNzZW1ibHkgaW5pdGlhdGVzIGRpc2J1cnNlbWVudCcsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIHRpdGxlOiAnQ3VzdG9tZXIgcmVjZWl2ZXMgZnVuZHMgcGF5bWVudCcsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtGbG93KCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgc3g9e3N0eWxlcy53b3JrZmxvd31cbiAgICA+XG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuZmFxfT5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgc2xvZ2FuPVwiQmViZXJhcGEgUGVydGFueWFhbiBVbXVtXCJcbiAgICAgICAgdGl0bGU9XCJGcmVxdWVudGx5IEFza2VkIFF1ZXN0aW9uXCJcbiAgICAgICAgaXNXaGl0ZT17dHJ1ZX1cbiAgICAgICAgLz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2ZhcXNcIj5cbiAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc3g9e3N0eWxlcy5zZWxlbmdrYXB9ID5TZWxlbmdrYXBueWE8L0J1dHRvbj5cbiAgICA8L0xpbms+XG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgIHsvKiB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0ga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmljb25Cb3h9PiB7YDAke2l0ZW0uaWR9YH08L0JveD5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+PC9IZWFkaW5nPlxuICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+e2l0ZW0udGV4dH08L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgICApKX0gKi99XG5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHNlbGVuZ2thcDp7XG4gICAgY29sb3I6ICcjRTQ0MjAwJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgYm9yZGVyOicwcHggc29saWQgI0U1NTMwMCcsXG4gICAgaG92ZXI6ICcjZmZmJyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJveFNoYWRvdzogJzAgMXB4IDJweCAjMDAwJyxcbiAgICB9fSxcbiAgZmFxOntcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgfSxcbiAgd29ya2Zsb3c6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtQYXR0ZXJuQkd9KWAsXG4gICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXG4gIH0sXG4gIGdyaWQ6IHtcbiAgICBtYjogLTEsXG4gICAgcHQ6IDAsXG4gICAgZ3JpZEdhcDogW1xuICAgICAgJzM1cHggMCcsXG4gICAgICBudWxsLFxuICAgICAgJzQ1cHggMzBweCcsXG4gICAgICBudWxsLFxuICAgICAgJzUwcHggMjVweCcsXG4gICAgICBudWxsLFxuICAgICAgbnVsbCxcbiAgICAgICc1MHB4IDY1cHgnLFxuICAgIF0sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xuICAgICAgJ3JlcGVhdCgxLDFmciknLFxuICAgICAgbnVsbCxcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcbiAgICAgIG51bGwsXG4gICAgICAncmVwZWF0KDQsMWZyKScsXG4gICAgXSxcbiAgfSxcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgJ2xlZnQnXSxcbiAgICB3aWR0aDogWycxMDAlJywgJzgwJScsICcxMDAlJ10sXG4gICAgbXg6IFsnYXV0byddLFxuICAgIHB4OiBbNCwgbnVsbCwgbnVsbCwgMF0sXG4gICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDcyLCBudWxsLCA5MF0sXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxuICAgICAgd2lkdGg6IDIxNSxcbiAgICAgIGhlaWdodDogNjAsXG4gICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjIwcHgpJzoge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJyY6bGFzdC1jaGlsZDo6YmVmb3JlJzoge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG5cbiAgaWNvbkJveDoge1xuICAgIHdpZHRoOiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc3MHB4J10sXG4gICAgaGVpZ2h0OiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc3MHB4J10sXG4gICAgZmxleFNocmluazogMCxcbiAgICBib3JkZXJSYWRpdXM6IFsxNSwgbnVsbCwgMjMsIG51bGwsIG51bGwsIDMwXSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG1iOiBbNSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNl0sXG4gICAgbXg6IFsnYXV0bycsIG51bGwsIDBdLFxuICAgIGZvbnRTaXplOiBbNiwgbnVsbCwgNywgbnVsbCwgbnVsbCwgJzMwcHgnXSxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGNvbG9yOiAnIzIzNDU4MicsXG4gIH0sXG4gIHdyYXBwZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBtdDogJy01cHgnLFxuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogWzMsIG51bGwsIDQsIG51bGwsIG51bGwsIDVdLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBsaW5lSGVpZ2h0OiBbMS40LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxLjU1XSxcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXG4gICAgICBtYjogWzIsIDNdLFxuICAgIH0sXG5cbiAgICBzdWJUaXRsZToge1xuICAgICAgZm9udFNpemU6IDEsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgbnVsbCwgMS45LCAyXSxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgb3BhY2l0eTogMC43NSxcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9