webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/contact.js":
/*!*********************************!*\
  !*** ./src/sections/contact.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/image */ "./src/components/image.js");
/* harmony import */ var assets_images_server_rack_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/server-rack.png */ "./src/assets/images/server-rack.png");
/* harmony import */ var assets_images_server_rack_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_images_server_rack_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");


var _this = undefined,
    _jsxFileName = "D:\\Portal E-Device\\Sample1\\nextjs_landing_page\\nextjs_landing_page\\src\\sections\\contact.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/** @jsx jsx */






var tlds = [{
  label: '.com',
  value: 'gmail.com'
}, {
  label: '.net',
  value: '.net'
}, {
  label: '.org',
  value: '.org'
}];

var Contact = function Contact() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    domainName: '',
    tld: ''
  }),
      state = _useState[0],
      setState = _useState[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
  };

  var handleChange = function handleChange(e) {
    setState(_objectSpread(_objectSpread({}, state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.id, e.target.value)));
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "section",
    id: "home",
    sx: styles.section,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    slogan: "Syarat dan dokumen menjadi",
    title: "Merchant BNI",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 8
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.grid,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "form",
    sx: styles.domainCard,
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "Built your business with a website"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    sx: styles.inputGroup,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    htmlFor: "domainName",
    variant: "styles.srOnly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, "Your Domain Name")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "submit",
    variant: "primary",
    sx: styles.submit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "Start for free"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "p",
    sx: styles.note,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "No credit card required.")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "figure",
    sx: styles.illustration,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: assets_images_server_rack_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    loading: "lazy",
    alt: "sever-rack",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  })))));
};

_s(Contact, "fOjN8fxQX6x+ZqzJiaRAzV5ruXs=");

_c = Contact;
/* harmony default export */ __webpack_exports__["default"] = (Contact);
var styles = {
  section: {
    backgroundColor: 'primary',
    pt: [17, null, null, 20, null],
    pb: [6, null, null, 12, 16]
  },
  grid: {
    gap: ['30px 60px', null, null, null, '30px 40px', '30px 60px'],
    display: 'grid',
    minHeight: [null, null, null, null, null, '66vh', '81vh'],
    alignItems: 'center',
    gridTemplateColumns: ['1fr', null, null, null, 'repeat(2, 1fr)', '510px 1fr']
  },
  domainCard: {
    background: 'white',
    boxShadow: '0px 24px 50px rgba(54, 91, 125, 0.05)',
    borderRadius: 10,
    p: ['30px 25px 50px', null, null, '40px 40px 60px'],
    m: [null, null, null, '0 auto', 'unset'],
    maxWidth: [null, null, null, 480, 'none'],
    h2: {
      fontWeight: 700,
      fontSize: [8, null, null, 10, 9, 14],
      lineHeight: 1.36,
      letterSpacing: 'heading',
      color: 'textSecondary',
      mb: [5, null, null, 7, 8]
    }
  },
  inputGroup: {
    alignItems: 'center',
    border: function border(theme) {
      return "1px solid ".concat(theme.colors.borderColor);
    },
    borderRadius: 5,
    px: [3, null, null, 6],
    input: {
      border: 0,
      borderRadius: 0,
      fontSize: [1, null, null, 2],
      minHeight: [45, null, null, 60],
      p: 0,
      ':focus': {
        boxShadow: 'none'
      },
      '::placeholder': {
        fontSize: '15px',
        lineHeight: 1.33,
        color: Object(polished__WEBPACK_IMPORTED_MODULE_3__["rgba"])('#02073E', 0.4)
      },
      ':-webkit-autofill': {
        WebkitBoxShadow: '0 0 0 30px white inset !important'
      }
    },
    select: {
      border: 0,
      color: 'textSecondary',
      fontWeight: 500,
      fontSize: [0, null, null, '15px'],
      lineHeight: 1.33,
      letterSpacing: 'heading',
      minHeight: [45, null, null, 60],
      minWidth: [60, null, null, 75],
      p: 0,
      textTransform: 'uppercase',
      ':focus': {
        outline: 0
      },
      '+ svg': {
        color: '#A6A8BB',
        height: 40,
        width: 40
      }
    }
  },
  submit: {
    fontSize: [1, null, null, 2],
    mt: [4],
    minHeight: [45, null, null, 60],
    width: '100%'
  },
  note: {
    fontStyle: 'italic',
    fontSize: [0, null, null, '15px'],
    lineHeight: 1.33,
    textAlign: 'center',
    color: Object(polished__WEBPACK_IMPORTED_MODULE_3__["rgba"])('#02073E', 0.5),
    mt: [4]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NvbnRhY3QuanMiXSwibmFtZXMiOlsidGxkcyIsImxhYmVsIiwidmFsdWUiLCJDb250YWN0IiwidXNlU3RhdGUiLCJkb21haW5OYW1lIiwidGxkIiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJpZCIsInN0eWxlcyIsInNlY3Rpb24iLCJncmlkIiwiZG9tYWluQ2FyZCIsImlucHV0R3JvdXAiLCJzdWJtaXQiLCJub3RlIiwiaWxsdXN0cmF0aW9uIiwic2VydmVyUmFjayIsImJhY2tncm91bmRDb2xvciIsInB0IiwicGIiLCJnYXAiLCJkaXNwbGF5IiwibWluSGVpZ2h0IiwiYWxpZ25JdGVtcyIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJiYWNrZ3JvdW5kIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwicCIsIm0iLCJtYXhXaWR0aCIsImgyIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImxldHRlclNwYWNpbmciLCJjb2xvciIsIm1iIiwiYm9yZGVyIiwidGhlbWUiLCJjb2xvcnMiLCJib3JkZXJDb2xvciIsInB4IiwiaW5wdXQiLCJyZ2JhIiwiV2Via2l0Qm94U2hhZG93Iiwic2VsZWN0IiwibWluV2lkdGgiLCJ0ZXh0VHJhbnNmb3JtIiwib3V0bGluZSIsImhlaWdodCIsIndpZHRoIiwibXQiLCJmb250U3R5bGUiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsT0FBSyxFQUFFLE1BRFQ7QUFFRUMsT0FBSyxFQUFFO0FBRlQsQ0FEVyxFQUtYO0FBQ0VELE9BQUssRUFB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L3BhZ2VzL2luZGV4LjQ5MTNmM2Q3MGM4NGIzMDNlYzg0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7XG4gIGpzeCxcbiAgQm94LFxuICBGbGV4LFxuICBUZXh0LFxuICBJbnB1dCxcbiAgTGFiZWwsXG4gIEJ1dHRvbixcbiAgU2VsZWN0LFxuICBIZWFkaW5nLFxuICBDb250YWluZXIsXG59IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmdiYSB9IGZyb20gJ3BvbGlzaGVkJztcbmltcG9ydCBJbWFnZSBmcm9tICdjb21wb25lbnRzL2ltYWdlJztcbmltcG9ydCBzZXJ2ZXJSYWNrIGZyb20gJ2Fzc2V0cy9pbWFnZXMvc2VydmVyLXJhY2sucG5nJztcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xuXG5jb25zdCB0bGRzID0gW1xuICB7XG4gICAgbGFiZWw6ICcuY29tJyxcbiAgICB2YWx1ZTogJ2dtYWlsLmNvbScsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJy5uZXQnLFxuICAgIHZhbHVlOiAnLm5ldCcsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJy5vcmcnLFxuICAgIHZhbHVlOiAnLm9yZycsXG4gIH0sXG5dO1xuXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICBkb21haW5OYW1lOiAnJyxcbiAgICB0bGQ6ICcnLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIFtlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBpZD1cImhvbWVcIiBzeD17c3R5bGVzLnNlY3Rpb259PlxuICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgIHNsb2dhbj1cIlN5YXJhdCBkYW4gZG9rdW1lbiBtZW5qYWRpXCJcbiAgICAgICAgdGl0bGU9XCJNZXJjaGFudCBCTklcIlxuICAgICAgICAvPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIDxCb3ggYXM9XCJmb3JtXCIgc3g9e3N0eWxlcy5kb21haW5DYXJkfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxIZWFkaW5nPkJ1aWx0IHlvdXIgYnVzaW5lc3Mgd2l0aCBhIHdlYnNpdGU8L0hlYWRpbmc+XG4gICAgICAgICAgICA8RmxleCBzeD17c3R5bGVzLmlucHV0R3JvdXB9PlxuICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImRvbWFpbk5hbWVcIiB2YXJpYW50PVwic3R5bGVzLnNyT25seVwiPlxuICAgICAgICAgICAgICAgIFlvdXIgRG9tYWluIE5hbWVcbiAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc3g9e3N0eWxlcy5zdWJtaXR9PlxuICAgICAgICAgICAgICBTdGFydCBmb3IgZnJlZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8VGV4dCBhcz1cInBcIiBzeD17c3R5bGVzLm5vdGV9PlxuICAgICAgICAgICAgICBObyBjcmVkaXQgY2FyZCByZXF1aXJlZC5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94IGFzPVwiZmlndXJlXCIgc3g9e3N0eWxlcy5pbGx1c3RyYXRpb259PlxuICAgICAgICAgICAgPEltYWdlIHNyYz17c2VydmVyUmFja30gbG9hZGluZz1cImxhenlcIiBhbHQ9XCJzZXZlci1yYWNrXCIgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc2VjdGlvbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxuICAgIHB0OiBbMTcsIG51bGwsIG51bGwsIDIwLCBudWxsXSxcbiAgICBwYjogWzYsIG51bGwsIG51bGwsIDEyLCAxNl0sXG4gIH0sXG4gIGdyaWQ6IHtcbiAgICBnYXA6IFsnMzBweCA2MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzMwcHggNDBweCcsICczMHB4IDYwcHgnXSxcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgbWluSGVpZ2h0OiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzY2dmgnLCAnODF2aCddLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcbiAgICAgICcxZnInLFxuICAgICAgbnVsbCxcbiAgICAgIG51bGwsXG4gICAgICBudWxsLFxuICAgICAgJ3JlcGVhdCgyLCAxZnIpJyxcbiAgICAgICc1MTBweCAxZnInLFxuICAgIF0sXG4gIH0sXG4gIGRvbWFpbkNhcmQ6IHtcbiAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgIGJveFNoYWRvdzogJzBweCAyNHB4IDUwcHggcmdiYSg1NCwgOTEsIDEyNSwgMC4wNSknLFxuICAgIGJvcmRlclJhZGl1czogMTAsXG4gICAgcDogWyczMHB4IDI1cHggNTBweCcsIG51bGwsIG51bGwsICc0MHB4IDQwcHggNjBweCddLFxuICAgIG06IFtudWxsLCBudWxsLCBudWxsLCAnMCBhdXRvJywgJ3Vuc2V0J10sXG4gICAgbWF4V2lkdGg6IFtudWxsLCBudWxsLCBudWxsLCA0ODAsICdub25lJ10sXG4gICAgaDI6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGZvbnRTaXplOiBbOCwgbnVsbCwgbnVsbCwgMTAsIDksIDE0XSxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMzYsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXG4gICAgICBjb2xvcjogJ3RleHRTZWNvbmRhcnknLFxuICAgICAgbWI6IFs1LCBudWxsLCBudWxsLCA3LCA4XSxcbiAgICB9LFxuICB9LFxuICBpbnB1dEdyb3VwOiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYm9yZGVyOiAodGhlbWUpID0+IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyQ29sb3J9YCxcbiAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgcHg6IFszLCBudWxsLCBudWxsLCA2XSxcbiAgICBpbnB1dDoge1xuICAgICAgYm9yZGVyOiAwLFxuICAgICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcbiAgICAgIG1pbkhlaWdodDogWzQ1LCBudWxsLCBudWxsLCA2MF0sXG4gICAgICBwOiAwLFxuICAgICAgJzpmb2N1cyc6IHtcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICB9LFxuICAgICAgJzo6cGxhY2Vob2xkZXInOiB7XG4gICAgICAgIGZvbnRTaXplOiAnMTVweCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEuMzMsXG4gICAgICAgIGNvbG9yOiByZ2JhKCcjMDIwNzNFJywgMC40KSxcbiAgICAgIH0sXG4gICAgICAnOi13ZWJraXQtYXV0b2ZpbGwnOiB7XG4gICAgICAgIFdlYmtpdEJveFNoYWRvdzogJzAgMCAwIDMwcHggd2hpdGUgaW5zZXQgIWltcG9ydGFudCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2VsZWN0OiB7XG4gICAgICBib3JkZXI6IDAsXG4gICAgICBjb2xvcjogJ3RleHRTZWNvbmRhcnknLFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgZm9udFNpemU6IFswLCBudWxsLCBudWxsLCAnMTVweCddLFxuICAgICAgbGluZUhlaWdodDogMS4zMyxcbiAgICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcbiAgICAgIG1pbkhlaWdodDogWzQ1LCBudWxsLCBudWxsLCA2MF0sXG4gICAgICBtaW5XaWR0aDogWzYwLCBudWxsLCBudWxsLCA3NV0sXG4gICAgICBwOiAwLFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAnOmZvY3VzJzoge1xuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgfSxcbiAgICAgICcrIHN2Zyc6IHtcbiAgICAgICAgY29sb3I6ICcjQTZBOEJCJyxcbiAgICAgICAgaGVpZ2h0OiA0MCxcbiAgICAgICAgd2lkdGg6IDQwLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBzdWJtaXQ6IHtcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxuICAgIG10OiBbNF0sXG4gICAgbWluSGVpZ2h0OiBbNDUsIG51bGwsIG51bGwsIDYwXSxcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9LFxuICBub3RlOiB7XG4gICAgZm9udFN0eWxlOiAnaXRhbGljJyxcbiAgICBmb250U2l6ZTogWzAsIG51bGwsIG51bGwsICcxNXB4J10sXG4gICAgbGluZUhlaWdodDogMS4zMyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGNvbG9yOiByZ2JhKCcjMDIwNzNFJywgMC41KSxcbiAgICBtdDogWzRdLFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=