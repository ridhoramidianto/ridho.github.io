webpackHotUpdate_N_E("pages/edc",{

/***/ "./src/components/price-card.js":
/*!**************************************!*\
  !*** ./src/components/price-card.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PriceCard; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./src/components/list.js");
var _jsxFileName = "D:\\Portal E-Device\\Sample1\\nextjs_landing_page\\nextjs_landing_page\\src\\components\\price-card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function PriceCard(_ref) {
  var _ref$data = _ref.data,
      header = _ref$data.header,
      name = _ref$data.name,
      description = _ref$data.description,
      priceWithUnit = _ref$data.priceWithUnit,
      anotherOption = _ref$data.anotherOption,
      points = _ref$data.points;
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    className: header ? 'package__card active' : 'package__card',
    sx: styles.pricingBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }
  }, header && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    sx: styles.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 16
    }
  }, header), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: "package__header",
    sx: styles.pricingHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    className: "package__name",
    variant: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, name), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    as: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, description)), __jsx(_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: points,
    childStyle: styles.listItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    className: "package__price",
    sx: styles.price,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, priceWithUnit, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "/Monthly")), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: styles.buttonGroup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: "primary",
    "aria-label": buttonText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, buttonText), anotherOption && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: "textButton",
    className: "free__trial",
    "aria-label": anotherOption,
    sx: {
      color: 'black'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, anotherOption))));
}
_c = PriceCard;
var styles = {
  pricingBox: {
    borderRadius: 20,
    position: 'relative',
    transition: 'all 0.3s',
    p: ['35px 25px', null, null, '40px'],
    width: ['100%', '75%', '100%'],
    mb: '40px',
    mt: '40px',
    mx: [0, 'auto', 0],
    '&:before': {
      position: 'absolute',
      content: "''",
      width: '100%',
      top: 0,
      left: 0,
      height: '100%',
      border: '1px solid rgba(38, 78, 118, 0.1)',
      borderRadius: 'inherit',
      transition: 'all 0.3s',
      zIndex: -1
    },
    '&:hover': {
      boxShadow: '0px 4px 25px rgba(38, 78, 118, 0.1) !important',
      '&:before': {
        opacity: 0
      }
    }
  },
  header: {
    height: ['28px', null, null, '32px'],
    backgroundColor: 'yellow',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: 1,
    lineHeight: 1.2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    position: 'absolute',
    top: '-17px',
    letterSpacing: '-.14px',
    px: '12px'
  },
  pricingHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: ['30px', null, null, null, '40px'],
    p: {
      fontSize: [1, 2],
      color: 'text',
      lineHeight: 'heading'
    },
    '.package__name': {
      marginBottom: [1, null, 2]
    }
  },
  price: {
    fontWeight: 500,
    fontSize: [4, null, 5, null, '30px'],
    lineHeight: 1,
    letterSpacing: '-0.55px',
    color: 'text',
    marginBottom: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pt: [4, 6],
    '> span': {
      position: 'relative',
      pl: '3px',
      display: 'inline-block',
      fontSize: [1, 2],
      fontWeight: 'normal'
    }
  },
  listItem: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: [1, 2],
    lineHeight: [1.75, 1.6],
    mb: 3,
    alignItems: 'flex-start',
    color: 'text',
    '&.closed': {
      opacity: 0.55,
      button: {
        color: '#788FB5'
      }
    }
  },
  buttonGroup: {
    textAlign: 'center',
    mt: ['30px', null, null, null, '35px'],
    '.free__trail': {
      color: 'secondary',
      width: '100%',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: ['14px', 1],
      p: '20px 0 0'
    }
  }
};

var _c;

$RefreshReg$(_c, "PriceCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJpY2UtY2FyZC5qcyJdLCJuYW1lcyI6WyJQcmljZUNhcmQiLCJkYXRhIiwiaGVhZGVyIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2VXaXRoVW5pdCIsImFub3RoZXJPcHRpb24iLCJwb2ludHMiLCJzdHlsZXMiLCJwcmljaW5nQm94IiwicHJpY2luZ0hlYWRlciIsImxpc3RJdGVtIiwicHJpY2UiLCJidXR0b25Hcm91cCIsImJ1dHRvblRleHQiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwidHJhbnNpdGlvbiIsInAiLCJ3aWR0aCIsIm1iIiwibXQiLCJteCIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwiYm9yZGVyIiwiekluZGV4IiwiYm94U2hhZG93Iiwib3BhY2l0eSIsImJhY2tncm91bmRDb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibGV0dGVyU3BhY2luZyIsInB4IiwibWFyZ2luQm90dG9tIiwicHQiLCJwbCIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJidXR0b24iLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsT0FTWjtBQUFBLHVCQVJEQyxJQVFDO0FBQUEsTUFQQ0MsTUFPRCxhQVBDQSxNQU9EO0FBQUEsTUFOQ0MsSUFNRCxhQU5DQSxJQU1EO0FBQUEsTUFMQ0MsV0FLRCxhQUxDQSxXQUtEO0FBQUEsTUFKQ0MsYUFJRCxhQUpDQSxhQUlEO0FBQUEsTUFIQ0MsYUFHRCxhQUhDQSxhQUdEO0FBQUEsTUFGQ0MsTUFFRCxhQUZDQSxNQUVEO0FBQ0QsU0FDQyxNQUFDLDZDQUFEO0FBQ0EsYUFBUyxFQUFFTCxNQUFNLEdBQUcsc0JBQUgsR0FBNEIsZUFEN0M7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ZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VkYy42Y2EzNGIyMzQ3YTZjMTA2MzUyNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBDYXJkLCBUZXh0LCBIZWFkaW5nLCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpY2VDYXJkKHtcbiAgZGF0YToge1xuICAgIGhlYWRlcixcbiAgICBuYW1lLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIHByaWNlV2l0aFVuaXQsXG4gICAgYW5vdGhlck9wdGlvbixcbiAgICBwb2ludHMsXG4gIH0sXG59KSB7XG4gIHJldHVybiAoXG4gICA8Q2FyZFxuICAgY2xhc3NOYW1lPXtoZWFkZXIgPyAncGFja2FnZV9fY2FyZCBhY3RpdmUnIDogJ3BhY2thZ2VfX2NhcmQnfVxuICAgc3g9e3N0eWxlcy5wcmljaW5nQm94fVxuICAgPlxuICAgIHtoZWFkZXIgJiYgPFRleHQgc3g9e3N0eWxlcy5oZWFkZXJ9PntoZWFkZXJ9PC9UZXh0Pn1cbiAgICA8Qm94PlxuICAgICAgPEJveCBjbGFzc05hbWU9XCJwYWNrYWdlX19oZWFkZXJcIiBzeD17c3R5bGVzLnByaWNpbmdIZWFkZXJ9ID5cbiAgICAgIDxIZWFkaW5nIGNsYXNzTmFtZT1cInBhY2thZ2VfX25hbWVcIiB2YXJpYW50PVwidGl0bGVcIj5cbiAgICAgICAge25hbWV9XG4gICAgICA8L0hlYWRpbmc+XG4gICAgICA8VGV4dCBhcz1cInBcIj57ZGVzY3JpcHRpb259PC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgICA8TGlzdCBpdGVtcz17cG9pbnRzfSBjaGlsZFN0eWxlPXtzdHlsZXMubGlzdEl0ZW19Lz5cbiAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInBhY2thZ2VfX3ByaWNlXCIgc3g9e3N0eWxlcy5wcmljZX0+XG4gICAgICAgIHtwcmljZVdpdGhVbml0fVxuICAgICAgICA8c3Bhbj4vTW9udGhseTwvc3Bhbj5cbiAgICAgIDwvVGV4dD5cbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5idXR0b25Hcm91cH0+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBhcmlhLWxhYmVsPXtidXR0b25UZXh0fT5cbiAgICAgICAge2J1dHRvblRleHR9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICB7YW5vdGhlck9wdGlvbiAmJiAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0QnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmcmVlX190cmlhbFwiXG4gICAgICAgICAgYXJpYS1sYWJlbD17YW5vdGhlck9wdGlvbn1cbiAgICAgICAgICBzeD17e2NvbG9yOiAnYmxhY2snfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YW5vdGhlck9wdGlvbn1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICAgPC9DYXJkPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHByaWNpbmdCb3g6IHtcbiAgICBib3JkZXJSYWRpdXM6IDIwLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gICAgcDogWyczNXB4IDI1cHgnLCBudWxsLCBudWxsLCAnNDBweCddLFxuICAgIHdpZHRoOiBbJzEwMCUnLCAnNzUlJywgJzEwMCUnXSxcbiAgICBtYjogJzQwcHgnLFxuICAgIG10OiAnNDBweCcsXG4gICAgbXg6IFswLCAnYXV0bycsIDBdLFxuICAgICcmOmJlZm9yZSc6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgY29udGVudDogXCInJ1wiLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpJyxcbiAgICAgIGJvcmRlclJhZGl1czogJ2luaGVyaXQnLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgICAgIHpJbmRleDogLTEsXG4gICAgfSxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJveFNoYWRvdzogJzBweCA0cHggMjVweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpICFpbXBvcnRhbnQnLFxuICAgICAgJyY6YmVmb3JlJzoge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBoZWFkZXI6IHtcbiAgICBoZWlnaHQ6IFsnMjhweCcsIG51bGwsIG51bGwsICczMnB4J10sXG4gICAgYmFja2dyb3VuZENvbG9yOiAneWVsbG93JyxcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogMSxcbiAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICctMTdweCcsXG4gICAgbGV0dGVyU3BhY2luZzogJy0uMTRweCcsXG4gICAgcHg6ICcxMnB4JyxcbiAgfSxcbiAgcHJpY2luZ0hlYWRlcjoge1xuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgIG1iOiBbJzMwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnNDBweCddLFxuICAgIHA6IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgMl0sXG4gICAgICBjb2xvcjogJ3RleHQnLFxuICAgICAgbGluZUhlaWdodDogJ2hlYWRpbmcnLFxuICAgIH0sXG4gICAgJy5wYWNrYWdlX19uYW1lJzoge1xuICAgICAgbWFyZ2luQm90dG9tOiBbMSwgbnVsbCwgMl0sXG4gICAgfSxcbiAgfSxcbiAgcHJpY2U6IHtcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgZm9udFNpemU6IFs0LCBudWxsLCA1LCBudWxsLCAnMzBweCddLFxuICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjU1cHgnLFxuICAgIGNvbG9yOiAndGV4dCcsXG4gICAgbWFyZ2luQm90dG9tOiAyLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgcHQ6IFs0LCA2XSxcbiAgICAnPiBzcGFuJzoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBwbDogJzNweCcsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGZvbnRTaXplOiBbMSwgMl0sXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICB9LFxuICB9LFxuICBsaXN0SXRlbToge1xuICAgIGZvbnRGYW1pbHk6ICdETSBTYW5zJyxcbiAgICBmb250U3R5bGU6ICdub3JtYWwnLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIGZvbnRTaXplOiBbMSwgMl0sXG4gICAgbGluZUhlaWdodDogWzEuNzUsIDEuNl0sXG4gICAgbWI6IDMsXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgIGNvbG9yOiAndGV4dCcsXG4gICAgJyYuY2xvc2VkJzoge1xuICAgICAgb3BhY2l0eTogMC41NSxcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICBjb2xvcjogJyM3ODhGQjUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBidXR0b25Hcm91cDoge1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgbXQ6IFsnMzBweCcsIG51bGwsIG51bGwsIG51bGwsICczNXB4J10sXG4gICAgJy5mcmVlX190cmFpbCc6IHtcbiAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBmb250U2l6ZTogWycxNHB4JywgMV0sXG4gICAgICBwOiAnMjBweCAwIDAnLFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==