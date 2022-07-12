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
  }, "Your Domain Name"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "text",
    id: "domainName",
    value: state.domainName,
    onChange: handleChange,
    placeholder: "Your domain name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    htmlFor: "tld",
    variant: "styles.srOnly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, "Select TLD")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "submit",
    variant: "primary",
    sx: styles.submit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, "Start for free"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "p",
    sx: styles.note,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, "No credit card required.")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "figure",
    sx: styles.illustration,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: assets_images_server_rack_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    loading: "lazy",
    alt: "sever-rack",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NvbnRhY3QuanMiXSwibmFtZXMiOlsidGxkcyIsImxhYmVsIiwidmFsdWUiLCJDb250YWN0IiwidXNlU3RhdGUiLCJkb21haW5OYW1lIiwidGxkIiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJpZCIsInN0eWxlcyIsInNlY3Rpb24iLCJncmlkIiwiZG9tYWluQ2FyZCIsImlucHV0R3JvdXAiLCJzdWJtaXQiLCJub3RlIiwiaWxsdXN0cmF0aW9uIiwic2VydmVyUmFjayIsImJhY2tncm91bmRDb2xvciIsInB0IiwicGIiLCJnYXAiLCJkaXNwbGF5IiwibWluSGVpZ2h0IiwiYWxpZ25JdGVtcyIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJiYWNrZ3JvdW5kIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwicCIsIm0iLCJtYXhXaWR0aCIsImgyIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImxldHRlclNwYWNpbmciLCJjb2xvciIsIm1iIiwiYm9yZGVyIiwidGhlbWUiLCJjb2xvcnMiLCJib3JkZXJDb2xvciIsInB4IiwiaW5wdXQiLCJyZ2JhIiwiV2Via2l0Qm94U2hhZG93Iiwic2VsZWN0IiwibWluV2lkdGgiLCJ0ZXh0VHJhbnNmb3JtIiwib3V0bGluZSIsImhlaWdodCIsIndpZHRoIiwibXQiLCJmb250U3R5bGUiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsT0FBSyxFQUFFLE1BRFQ7QUFFRUMsT0FBSyxFQUFFO0FBRlQsQ0FEVyxFQUtYO0FBQ0VELE9BQUssRUFB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RUFBRTtBQUpELEdBaEZLO0FBc0ZickMsTUFBSSxFQUFFO0FBQ0p1QyxhQUFTLEVBQUUsUUFEUDtBQUVKcEIsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLE1BQWhCLENBRk47QUFHSkMsY0FBVSxFQUFFLElBSFI7QUFJSm9CLGFBQVMsRUFBRSxRQUpQO0FBS0psQixTQUFLLEVBQUVRLHFEQUFJLENBQUMsU0FBRCxFQUFZLEdBQVosQ0FMUDtBQU1KUSxNQUFFLEVBQUUsQ0FBQyxDQUFEO0FBTkE7QUF0Rk8sQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jZjQzZDEwNjlkODAxM2Y3NGQ1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQge1xuICBqc3gsXG4gIEJveCxcbiAgRmxleCxcbiAgVGV4dCxcbiAgSW5wdXQsXG4gIExhYmVsLFxuICBCdXR0b24sXG4gIFNlbGVjdCxcbiAgSGVhZGluZyxcbiAgQ29udGFpbmVyLFxufSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnY29tcG9uZW50cy9pbWFnZSc7XG5pbXBvcnQgc2VydmVyUmFjayBmcm9tICdhc3NldHMvaW1hZ2VzL3NlcnZlci1yYWNrLnBuZyc7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcblxuY29uc3QgdGxkcyA9IFtcbiAge1xuICAgIGxhYmVsOiAnLmNvbScsXG4gICAgdmFsdWU6ICdnbWFpbC5jb20nLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICcubmV0JyxcbiAgICB2YWx1ZTogJy5uZXQnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICcub3JnJyxcbiAgICB2YWx1ZTogJy5vcmcnLFxuICB9LFxuXTtcblxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgZG9tYWluTmFtZTogJycsXG4gICAgdGxkOiAnJyxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coc3RhdGUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJob21lXCIgc3g9e3N0eWxlcy5zZWN0aW9ufT5cbiAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICBzbG9nYW49XCJTeWFyYXQgZGFuIGRva3VtZW4gbWVuamFkaVwiXG4gICAgICAgIHRpdGxlPVwiTWVyY2hhbnQgQk5JXCJcbiAgICAgICAgLz5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICA8Qm94IGFzPVwiZm9ybVwiIHN4PXtzdHlsZXMuZG9tYWluQ2FyZH0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8SGVhZGluZz5CdWlsdCB5b3VyIGJ1c2luZXNzIHdpdGggYSB3ZWJzaXRlPC9IZWFkaW5nPlxuICAgICAgICAgICAgPEZsZXggc3g9e3N0eWxlcy5pbnB1dEdyb3VwfT5cbiAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJkb21haW5OYW1lXCIgdmFyaWFudD1cInN0eWxlcy5zck9ubHlcIj5cbiAgICAgICAgICAgICAgICBZb3VyIERvbWFpbiBOYW1lXG4gICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBpZD1cImRvbWFpbk5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5kb21haW5OYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGRvbWFpbiBuYW1lXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJ0bGRcIiB2YXJpYW50PVwic3R5bGVzLnNyT25seVwiPlxuICAgICAgICAgICAgICAgIFNlbGVjdCBUTERcbiAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwicHJpbWFyeVwiIHN4PXtzdHlsZXMuc3VibWl0fT5cbiAgICAgICAgICAgICAgU3RhcnQgZm9yIGZyZWVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPFRleHQgYXM9XCJwXCIgc3g9e3N0eWxlcy5ub3RlfT5cbiAgICAgICAgICAgICAgTm8gY3JlZGl0IGNhcmQgcmVxdWlyZWQuXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveCBhcz1cImZpZ3VyZVwiIHN4PXtzdHlsZXMuaWxsdXN0cmF0aW9ufT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3NlcnZlclJhY2t9IGxvYWRpbmc9XCJsYXp5XCIgYWx0PVwic2V2ZXItcmFja1wiIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHNlY3Rpb246IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcbiAgICBwdDogWzE3LCBudWxsLCBudWxsLCAyMCwgbnVsbF0sXG4gICAgcGI6IFs2LCBudWxsLCBudWxsLCAxMiwgMTZdLFxuICB9LFxuICBncmlkOiB7XG4gICAgZ2FwOiBbJzMwcHggNjBweCcsIG51bGwsIG51bGwsIG51bGwsICczMHB4IDQwcHgnLCAnMzBweCA2MHB4J10sXG4gICAgZGlzcGxheTogJ2dyaWQnLFxuICAgIG1pbkhlaWdodDogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICc2NnZoJywgJzgxdmgnXSxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXG4gICAgICAnMWZyJyxcbiAgICAgIG51bGwsXG4gICAgICBudWxsLFxuICAgICAgbnVsbCxcbiAgICAgICdyZXBlYXQoMiwgMWZyKScsXG4gICAgICAnNTEwcHggMWZyJyxcbiAgICBdLFxuICB9LFxuICBkb21haW5DYXJkOiB7XG4gICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICBib3hTaGFkb3c6ICcwcHggMjRweCA1MHB4IHJnYmEoNTQsIDkxLCAxMjUsIDAuMDUpJyxcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgIHA6IFsnMzBweCAyNXB4IDUwcHgnLCBudWxsLCBudWxsLCAnNDBweCA0MHB4IDYwcHgnXSxcbiAgICBtOiBbbnVsbCwgbnVsbCwgbnVsbCwgJzAgYXV0bycsICd1bnNldCddLFxuICAgIG1heFdpZHRoOiBbbnVsbCwgbnVsbCwgbnVsbCwgNDgwLCAnbm9uZSddLFxuICAgIGgyOiB7XG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBmb250U2l6ZTogWzgsIG51bGwsIG51bGwsIDEwLCA5LCAxNF0sXG4gICAgICBsaW5lSGVpZ2h0OiAxLjM2LFxuICAgICAgbGV0dGVyU3BhY2luZzogJ2hlYWRpbmcnLFxuICAgICAgY29sb3I6ICd0ZXh0U2Vjb25kYXJ5JyxcbiAgICAgIG1iOiBbNSwgbnVsbCwgbnVsbCwgNywgOF0sXG4gICAgfSxcbiAgfSxcbiAgaW5wdXRHcm91cDoge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGJvcmRlcjogKHRoZW1lKSA9PiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlckNvbG9yfWAsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIHB4OiBbMywgbnVsbCwgbnVsbCwgNl0sXG4gICAgaW5wdXQ6IHtcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGJvcmRlclJhZGl1czogMCxcbiAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXG4gICAgICBtaW5IZWlnaHQ6IFs0NSwgbnVsbCwgbnVsbCwgNjBdLFxuICAgICAgcDogMCxcbiAgICAgICc6Zm9jdXMnOiB7XG4gICAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgfSxcbiAgICAgICc6OnBsYWNlaG9sZGVyJzoge1xuICAgICAgICBmb250U2l6ZTogJzE1cHgnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAxLjMzLFxuICAgICAgICBjb2xvcjogcmdiYSgnIzAyMDczRScsIDAuNCksXG4gICAgICB9LFxuICAgICAgJzotd2Via2l0LWF1dG9maWxsJzoge1xuICAgICAgICBXZWJraXRCb3hTaGFkb3c6ICcwIDAgMCAzMHB4IHdoaXRlIGluc2V0ICFpbXBvcnRhbnQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNlbGVjdDoge1xuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY29sb3I6ICd0ZXh0U2Vjb25kYXJ5JyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGZvbnRTaXplOiBbMCwgbnVsbCwgbnVsbCwgJzE1cHgnXSxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMzMsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXG4gICAgICBtaW5IZWlnaHQ6IFs0NSwgbnVsbCwgbnVsbCwgNjBdLFxuICAgICAgbWluV2lkdGg6IFs2MCwgbnVsbCwgbnVsbCwgNzVdLFxuICAgICAgcDogMCxcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgICAgJzpmb2N1cyc6IHtcbiAgICAgICAgb3V0bGluZTogMCxcbiAgICAgIH0sXG4gICAgICAnKyBzdmcnOiB7XG4gICAgICAgIGNvbG9yOiAnI0E2QThCQicsXG4gICAgICAgIGhlaWdodDogNDAsXG4gICAgICAgIHdpZHRoOiA0MCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgc3VibWl0OiB7XG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcbiAgICBtdDogWzRdLFxuICAgIG1pbkhlaWdodDogWzQ1LCBudWxsLCBudWxsLCA2MF0sXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfSxcbiAgbm90ZToge1xuICAgIGZvbnRTdHlsZTogJ2l0YWxpYycsXG4gICAgZm9udFNpemU6IFswLCBudWxsLCBudWxsLCAnMTVweCddLFxuICAgIGxpbmVIZWlnaHQ6IDEuMzMsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBjb2xvcjogcmdiYSgnIzAyMDczRScsIDAuNSksXG4gICAgbXQ6IFs0XSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9