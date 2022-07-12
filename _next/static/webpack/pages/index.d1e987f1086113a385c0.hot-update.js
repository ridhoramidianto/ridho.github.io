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
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: styles.workflow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
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
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.card,
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.iconBox,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }, " ", "0".concat(item.id)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.wrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      sx: styles.wrapper.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }
    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      sx: styles.wrapper.subTitle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }
    }, item.text), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Link, {
      href: "/faqs",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Button, {
      variant: "primary",
      sx: styles.selengkap,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 5
      }
    }, "Selengkapnya"))));
  }))));
}
_c = WorkFlow;
var styles = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3dvcmtmbG93LmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwidGV4dCIsIldvcmtGbG93Iiwic3R5bGVzIiwid29ya2Zsb3ciLCJncmlkIiwibWFwIiwiaXRlbSIsImNhcmQiLCJpY29uQm94Iiwid3JhcHBlciIsInN1YlRpdGxlIiwic2VsZW5na2FwIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZEltYWdlIiwiUGF0dGVybkJHIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwicG9zaXRpb24iLCJweSIsIm1iIiwicHQiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwidGV4dEFsaWduIiwid2lkdGgiLCJteCIsInB4IiwiY29udGVudCIsInRvcCIsImxlZnQiLCJoZWlnaHQiLCJmbGV4U2hyaW5rIiwiYm9yZGVyUmFkaXVzIiwiYWxpZ25JdGVtcyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiLCJtdCIsImxpbmVIZWlnaHQiLCJwciIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLCtCQUZUO0FBR0VDLE1BQUksRUFDRjtBQUpKLENBRFcsRUFPWDtBQUNFRixJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUsNENBRlQ7QUFHRUMsTUFBSSxFQUNGO0FBSkosQ0FQVyxFQWFYO0FBQ0VGLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSxpQ0FGVDtBQUdFQyxNQUFJLEVBQ0Y7QUFKSixDQWJXLEVBbUJYO0FBQ0VGLElBQUUs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Z0JBQVUsRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixHQUFuQixFQUF3QixDQUF4QixDQUhKO0FBSVJGLFdBQUssRUFBRSxPQUpDO0FBS1JJLGFBQU8sRUFBRSxJQUxEO0FBTVJELFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixJQUFoQixFQUFzQixJQUF0QixFQUE0QixDQUE1QjtBQU5JO0FBYkg7QUF4RUksQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMWU5ODdmMTA4NjExM2EzODVjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIEJveCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xuXG5pbXBvcnQgUGF0dGVybkJHIGZyb20gJ2Fzc2V0cy9wYXR0ZXJuQkcucG5nJztcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiAnU2V0IGRpc2J1cnNlbWVudCBJbnN0cnVjdGlvbnMnLFxuICAgIHRleHQ6XG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogJ0Fzc2VtYmx5IHJldHJpZXZlcyBmdW5kcyBmcm9tIHlvdXIgYWNjb3VudCcsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiAnQXNzZW1ibHkgaW5pdGlhdGVzIGRpc2J1cnNlbWVudCcsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIHRpdGxlOiAnQ3VzdG9tZXIgcmVjZWl2ZXMgZnVuZHMgcGF5bWVudCcsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtGbG93KCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgc3g9e3N0eWxlcy53b3JrZmxvd31cbiAgICA+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICBzbG9nYW49XCJCZWJlcmFwYSBQZXJ0YW55YWFuIFVtdW1cIlxuICAgICAgICB0aXRsZT1cIkZyZXF1ZW50bHkgQXNrZWQgUXVlc3Rpb25cIlxuICAgICAgICBpc1doaXRlPXt0cnVlfVxuICAgICAgICAvPlxuICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0ga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmljb25Cb3h9PiB7YDAke2l0ZW0uaWR9YH08L0JveD5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+PC9IZWFkaW5nPlxuICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+e2l0ZW0udGV4dH08L1RleHQ+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9mYXFzXCI+XG4gICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHN4PXtzdHlsZXMuc2VsZW5na2FwfSA+U2VsZW5na2FwbnlhPC9CdXR0b24+XG4gICAgPC9MaW5rPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICB3b3JrZmxvdzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1BhdHRlcm5CR30pYCxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBweTogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcbiAgfSxcbiAgZ3JpZDoge1xuICAgIG1iOiAtMSxcbiAgICBwdDogMCxcbiAgICBncmlkR2FwOiBbXG4gICAgICAnMzVweCAwJyxcbiAgICAgIG51bGwsXG4gICAgICAnNDVweCAzMHB4JyxcbiAgICAgIG51bGwsXG4gICAgICAnNTBweCAyNXB4JyxcbiAgICAgIG51bGwsXG4gICAgICBudWxsLFxuICAgICAgJzUwcHggNjVweCcsXG4gICAgXSxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXG4gICAgICAncmVwZWF0KDEsMWZyKScsXG4gICAgICBudWxsLFxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxuICAgICAgbnVsbCxcbiAgICAgICdyZXBlYXQoNCwxZnIpJyxcbiAgICBdLFxuICB9LFxuICBjYXJkOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCAnbGVmdCddLFxuICAgIHdpZHRoOiBbJzEwMCUnLCAnODAlJywgJzEwMCUnXSxcbiAgICBteDogWydhdXRvJ10sXG4gICAgcHg6IFs0LCBudWxsLCBudWxsLCAwXSxcbiAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNzIsIG51bGwsIDkwXSxcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXG4gICAgICB3aWR0aDogMjE1LFxuICAgICAgaGVpZ2h0OiA2MCxcbiAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMjBweCknOiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnJjpsYXN0LWNoaWxkOjpiZWZvcmUnOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgfSxcbiAgfSxcblxuICBpY29uQm94OiB7XG4gICAgd2lkdGg6IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzcwcHgnXSxcbiAgICBoZWlnaHQ6IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzcwcHgnXSxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIGJvcmRlclJhZGl1czogWzE1LCBudWxsLCAyMywgbnVsbCwgbnVsbCwgMzBdLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbWI6IFs1LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA2XSxcbiAgICBteDogWydhdXRvJywgbnVsbCwgMF0sXG4gICAgZm9udFNpemU6IFs2LCBudWxsLCA3LCBudWxsLCBudWxsLCAnMzBweCddLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgY29sb3I6ICcjMjM0NTgyJyxcbiAgfSxcbiAgd3JhcHBlcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIG10OiAnLTVweCcsXG4gICAgdGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgNCwgbnVsbCwgbnVsbCwgNV0sXG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjQsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDEuNTVdLFxuICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAyXSxcbiAgICAgIG1iOiBbMiwgM10sXG4gICAgfSxcblxuICAgIHN1YlRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogMSxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCBudWxsLCAxLjksIDJdLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBvcGFjaXR5OiAwLjc1LFxuICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA1XSxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=