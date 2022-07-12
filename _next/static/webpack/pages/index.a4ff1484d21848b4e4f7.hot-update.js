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
  }, "Select TLD"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    id: "tld",
    defaultValue: state.tld,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, tlds.map(function (tld, i) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("option", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    }, tld.label);
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "submit",
    variant: "primary",
    sx: styles.submit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "Start for free"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "p",
    sx: styles.note,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "No credit card required.")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "figure",
    sx: styles.illustration,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: assets_images_server_rack_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    loading: "lazy",
    alt: "sever-rack",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NvbnRhY3QuanMiXSwibmFtZXMiOlsidGxkcyIsImxhYmVsIiwidmFsdWUiLCJDb250YWN0IiwidXNlU3RhdGUiLCJkb21haW5OYW1lIiwidGxkIiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJpZCIsInN0eWxlcyIsInNlY3Rpb24iLCJncmlkIiwiZG9tYWluQ2FyZCIsImlucHV0R3JvdXAiLCJtYXAiLCJpIiwic3VibWl0Iiwibm90ZSIsImlsbHVzdHJhdGlvbiIsInNlcnZlclJhY2siLCJiYWNrZ3JvdW5kQ29sb3IiLCJwdCIsInBiIiwiZ2FwIiwiZGlzcGxheSIsIm1pbkhlaWdodCIsImFsaWduSXRlbXMiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiYmFja2dyb3VuZCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsInAiLCJtIiwibWF4V2lkdGgiLCJoMiIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiY29sb3IiLCJtYiIsImJvcmRlciIsInRoZW1lIiwiY29sb3JzIiwiYm9yZGVyQ29sb3IiLCJweCIsImlucHV0IiwicmdiYSIsIldlYmtpdEJveFNoYWRvdyIsInNlbGVjdCIsIm1pbldpZHRoIiwidGV4dFRyYW5zZm9ybSIsIm91dGxpbmUiLCJoZWlnaHQiLCJ3aWR0aCIsIm10IiwiZm9udFN0eWxlIiwidGV4dEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNYO0FBQ0VDLE9BQUssRUFBRSxNQURUO0FBRUVDLE9BQUssRUFBRTtBQUZULENBRFcsRUFLWDtBQUNF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QUFVO0FBQ1JDLGVBQU8sRUFBRTtBQURELE9BWEo7QUFjTixlQUFTO0FBQ1BiLGFBQUssRUFBRSxTQURBO0FBRVBjLGNBQU0sRUFBRSxFQUZEO0FBR1BDLGFBQUssRUFBRTtBQUhBO0FBZEg7QUF2QkUsR0FwQ0M7QUFnRmJ0QyxRQUFNLEVBQUU7QUFDTm9CLFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixDQUFoQixDQURKO0FBRU5tQixNQUFFLEVBQUUsQ0FBQyxDQUFELENBRkU7QUFHTjlCLGFBQVMsRUFBRSxDQUFDLEVBQUQsRUFBSyxJQUFMLEVBQVcsSUFBWCxFQUFpQixFQUFqQixDQUhMO0FBSU42QixTQUFLLEVBQUU7QUFKRCxHQWhGSztBQXNGYnJDLE1BQUksRUFBRTtBQUNKdUMsYUFBUyxFQUFFLFFBRFA7QUFFSnBCLFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixNQUFoQixDQUZOO0FBR0pDLGNBQVUsRUFBRSxJQUhSO0FBSUpvQixhQUFTLEVBQUUsUUFKUDtBQUtKbEIsU0FBSyxFQUFFUSxxREFBSSxDQUFDLFNBQUQsRUFBWSxHQUFaLENBTFA7QUFNSlEsTUFBRSxFQUFFLENBQUMsQ0FBRDtBQU5BO0FBdEZPLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTRmZjE0ODRkMjE4NDhiNGU0ZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHtcbiAganN4LFxuICBCb3gsXG4gIEZsZXgsXG4gIFRleHQsXG4gIElucHV0LFxuICBMYWJlbCxcbiAgQnV0dG9uLFxuICBTZWxlY3QsXG4gIEhlYWRpbmcsXG4gIENvbnRhaW5lcixcbn0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZ2JhIH0gZnJvbSAncG9saXNoZWQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnO1xuaW1wb3J0IHNlcnZlclJhY2sgZnJvbSAnYXNzZXRzL2ltYWdlcy9zZXJ2ZXItcmFjay5wbmcnO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XG5cbmNvbnN0IHRsZHMgPSBbXG4gIHtcbiAgICBsYWJlbDogJy5jb20nLFxuICAgIHZhbHVlOiAnZ21haWwuY29tJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnLm5ldCcsXG4gICAgdmFsdWU6ICcubmV0JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnLm9yZycsXG4gICAgdmFsdWU6ICcub3JnJyxcbiAgfSxcbl07XG5cbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIGRvbWFpbk5hbWU6ICcnLFxuICAgIHRsZDogJycsXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFN0YXRlKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgW2UudGFyZ2V0LmlkXTogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwiaG9tZVwiIHN4PXtzdHlsZXMuc2VjdGlvbn0+XG4gICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgc2xvZ2FuPVwiU3lhcmF0IGRhbiBkb2t1bWVuIG1lbmphZGlcIlxuICAgICAgICB0aXRsZT1cIk1lcmNoYW50IEJOSVwiXG4gICAgICAgIC8+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAgPEJveCBhcz1cImZvcm1cIiBzeD17c3R5bGVzLmRvbWFpbkNhcmR9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPEhlYWRpbmc+QnVpbHQgeW91ciBidXNpbmVzcyB3aXRoIGEgd2Vic2l0ZTwvSGVhZGluZz5cbiAgICAgICAgICAgIDxGbGV4IHN4PXtzdHlsZXMuaW5wdXRHcm91cH0+XG4gICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZG9tYWluTmFtZVwiIHZhcmlhbnQ9XCJzdHlsZXMuc3JPbmx5XCI+XG4gICAgICAgICAgICAgICAgWW91ciBEb21haW4gTmFtZVxuICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJkb21haW5OYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuZG9tYWluTmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBkb21haW4gbmFtZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwidGxkXCIgdmFyaWFudD1cInN0eWxlcy5zck9ubHlcIj5cbiAgICAgICAgICAgICAgICBTZWxlY3QgVExEXG4gICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgIDxTZWxlY3QgaWQ9XCJ0bGRcIiBkZWZhdWx0VmFsdWU9e3N0YXRlLnRsZH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAge3RsZHMubWFwKCh0bGQsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpfT57dGxkLmxhYmVsfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc3g9e3N0eWxlcy5zdWJtaXR9PlxuICAgICAgICAgICAgICBTdGFydCBmb3IgZnJlZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8VGV4dCBhcz1cInBcIiBzeD17c3R5bGVzLm5vdGV9PlxuICAgICAgICAgICAgICBObyBjcmVkaXQgY2FyZCByZXF1aXJlZC5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94IGFzPVwiZmlndXJlXCIgc3g9e3N0eWxlcy5pbGx1c3RyYXRpb259PlxuICAgICAgICAgICAgPEltYWdlIHNyYz17c2VydmVyUmFja30gbG9hZGluZz1cImxhenlcIiBhbHQ9XCJzZXZlci1yYWNrXCIgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc2VjdGlvbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxuICAgIHB0OiBbMTcsIG51bGwsIG51bGwsIDIwLCBudWxsXSxcbiAgICBwYjogWzYsIG51bGwsIG51bGwsIDEyLCAxNl0sXG4gIH0sXG4gIGdyaWQ6IHtcbiAgICBnYXA6IFsnMzBweCA2MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzMwcHggNDBweCcsICczMHB4IDYwcHgnXSxcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgbWluSGVpZ2h0OiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzY2dmgnLCAnODF2aCddLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcbiAgICAgICcxZnInLFxuICAgICAgbnVsbCxcbiAgICAgIG51bGwsXG4gICAgICBudWxsLFxuICAgICAgJ3JlcGVhdCgyLCAxZnIpJyxcbiAgICAgICc1MTBweCAxZnInLFxuICAgIF0sXG4gIH0sXG4gIGRvbWFpbkNhcmQ6IHtcbiAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgIGJveFNoYWRvdzogJzBweCAyNHB4IDUwcHggcmdiYSg1NCwgOTEsIDEyNSwgMC4wNSknLFxuICAgIGJvcmRlclJhZGl1czogMTAsXG4gICAgcDogWyczMHB4IDI1cHggNTBweCcsIG51bGwsIG51bGwsICc0MHB4IDQwcHggNjBweCddLFxuICAgIG06IFtudWxsLCBudWxsLCBudWxsLCAnMCBhdXRvJywgJ3Vuc2V0J10sXG4gICAgbWF4V2lkdGg6IFtudWxsLCBudWxsLCBudWxsLCA0ODAsICdub25lJ10sXG4gICAgaDI6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGZvbnRTaXplOiBbOCwgbnVsbCwgbnVsbCwgMTAsIDksIDE0XSxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMzYsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXG4gICAgICBjb2xvcjogJ3RleHRTZWNvbmRhcnknLFxuICAgICAgbWI6IFs1LCBudWxsLCBudWxsLCA3LCA4XSxcbiAgICB9LFxuICB9LFxuICBpbnB1dEdyb3VwOiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYm9yZGVyOiAodGhlbWUpID0+IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyQ29sb3J9YCxcbiAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgcHg6IFszLCBudWxsLCBudWxsLCA2XSxcbiAgICBpbnB1dDoge1xuICAgICAgYm9yZGVyOiAwLFxuICAgICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcbiAgICAgIG1pbkhlaWdodDogWzQ1LCBudWxsLCBudWxsLCA2MF0sXG4gICAgICBwOiAwLFxuICAgICAgJzpmb2N1cyc6IHtcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICB9LFxuICAgICAgJzo6cGxhY2Vob2xkZXInOiB7XG4gICAgICAgIGZvbnRTaXplOiAnMTVweCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEuMzMsXG4gICAgICAgIGNvbG9yOiByZ2JhKCcjMDIwNzNFJywgMC40KSxcbiAgICAgIH0sXG4gICAgICAnOi13ZWJraXQtYXV0b2ZpbGwnOiB7XG4gICAgICAgIFdlYmtpdEJveFNoYWRvdzogJzAgMCAwIDMwcHggd2hpdGUgaW5zZXQgIWltcG9ydGFudCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2VsZWN0OiB7XG4gICAgICBib3JkZXI6IDAsXG4gICAgICBjb2xvcjogJ3RleHRTZWNvbmRhcnknLFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgZm9udFNpemU6IFswLCBudWxsLCBudWxsLCAnMTVweCddLFxuICAgICAgbGluZUhlaWdodDogMS4zMyxcbiAgICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcbiAgICAgIG1pbkhlaWdodDogWzQ1LCBudWxsLCBudWxsLCA2MF0sXG4gICAgICBtaW5XaWR0aDogWzYwLCBudWxsLCBudWxsLCA3NV0sXG4gICAgICBwOiAwLFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAnOmZvY3VzJzoge1xuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgfSxcbiAgICAgICcrIHN2Zyc6IHtcbiAgICAgICAgY29sb3I6ICcjQTZBOEJCJyxcbiAgICAgICAgaGVpZ2h0OiA0MCxcbiAgICAgICAgd2lkdGg6IDQwLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBzdWJtaXQ6IHtcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxuICAgIG10OiBbNF0sXG4gICAgbWluSGVpZ2h0OiBbNDUsIG51bGwsIG51bGwsIDYwXSxcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9LFxuICBub3RlOiB7XG4gICAgZm9udFN0eWxlOiAnaXRhbGljJyxcbiAgICBmb250U2l6ZTogWzAsIG51bGwsIG51bGwsICcxNXB4J10sXG4gICAgbGluZUhlaWdodDogMS4zMyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGNvbG9yOiByZ2JhKCcjMDIwNzNFJywgMC41KSxcbiAgICBtdDogWzRdLFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=