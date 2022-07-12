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
    sx: styles.faq,
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
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    htmlFor: "username",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 3
    }
  }, "Username"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "username",
    id: "username",
    mb: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 3
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    htmlFor: "password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 3
    }
  }, "Password"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "password",
    name: "password",
    id: "password",
    mb: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 3
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 3
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    mb: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }), "Remember me")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    htmlFor: "sound",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 3
    }
  }, "Sound"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    name: "sound",
    id: "sound",
    mb: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 3
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, "Beep"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, "Boop"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, "Blip")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    htmlFor: "comment",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 3
    }
  }, "Comment"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Textarea"], {
    name: "comment",
    id: "comment",
    rows: 6,
    mb: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 3
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    mb: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 3
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
    name: "letter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }), " Alpha"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
    name: "letter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }), " Bravo"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
    name: "letter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }), " Charlie")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 3
    }
  }, "Slider"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Slider"], {
    mb: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 3
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
      justifyContent: 'center'
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
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto']
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NvbnRhY3QuanMiXSwibmFtZXMiOlsiQ29udGFjdCIsInN0eWxlcyIsImJhbm5lciIsImZhcSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNlbGVuZ2thcCIsImNvbG9yIiwiYmFja2dyb3VuZCIsImJvcmRlciIsImhvdmVyIiwiYm94U2hhZG93IiwianVzdGlmeUNvbnRlbnQiLCJ0ZXh0QWxpZ24iLCJwdCIsInBiIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJjb250ZW50IiwiYm90dG9tIiwibGVmdCIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZEltYWdlIiwiU2hhcGVMZWZ0IiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwicmlnaHQiLCJ0cmFuc3BhcmVudCIsIlNoYXBlUmlnaHQiLCJjb250YWluZXIiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImNvbnRlbnRCb3giLCJteCIsIm1iIiwiaW1hZ2VCb3giLCJpbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUNoQyxTQUNDO0FBQVMsTUFBRSxFQUFFQyxNQUFNLENBQUNDLE1BQXBCO0FBQTRCLE1BQUUsRUFBQyxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MscURBQUMsa0RBQUQ7QUFBVyxNQUFFLEVBQUVELE1BQU0sQ0FBQ0UsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLHFEQUFDLGlFQUFEO0FBQ0EsVUFBTSxFQUFDLDBCQURQO0FBRUEsU0FBSyxFQUFDLDJCQUZOO0FBR0EsV0FBTyxFQUFFLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBU0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUMsTUFBUjtBQUFlLFlBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLGFBQU9BLENBQUMsQ0FBQ0MsY0FBRixFQUFQO0FBQUEsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNKLHFEQUFDLDhDQUFEO0FBQU8sV0FBTyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESSxFQUVKLHFEQUFDLDhDQUFEO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsTUFBRSxFQUFDLFVBQTFCO0FBQXFDLE1BQUUsRUFBRSxDQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkksRUFHSixxREFBQyw4Q0FBRDtBQUFPLFdBQU8sRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEksRUFJSixxREFBQyw4Q0FBRDtBQUFPLFFBQUksRUFBQyxVQUFaO0FBQXVCLFFBQUksRUFBQyxVQUE1QjtBQUF1QyxNQUFFLEVBQUMsVUFBMUM7QUFBcUQsTUFBRSxFQUFFLENBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSSxFQUtKLHFEQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw4Q0FBRDtBQUFPLE1BQUUsRUFBRSxDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsZ0JBREYsQ0FMSSxFQVdKLHFEQUFDLDhDQUFEO0FBQU8sV0FBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhJLEVBWUoscURBQUMsK0NBQUQ7QUFBUSxRQUFJLEVBQUMsT0FBYjtBQUFxQixNQUFFLEVBQUMsT0FBeEI7QUFBZ0MsTUFBRSxFQUFFLENBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsQ0FaSSxFQWlCSixxREFBQyw4Q0FBRDtBQUFPLFdBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQkksRUFrQkoscURBQUMsaURBQUQ7QUFBVSxRQUFJLEVBQUMsU0FBZjtBQUF5QixNQUFFLEVBQUMsU0FBNUI7QUFBc0MsUUFBSSxFQUFFLENBQTVDO0FBQStDLE1BQUUsRUFBRSxDQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbEJJLEVBbUJKLHFEQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFFLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw4Q0FBRDtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixXQURGLEVBSUUscURBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDhDQUFEO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLFdBSkYsRUFPRSxxREFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsOENBQUQ7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsYUFQRixDQW5CSSxFQThCSixxREFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOUJJLEVBK0JKLHFEQUFDLCtDQUFEO0FBQVEsTUFBRSxFQUFFLENBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9CSSxFQWdDSixxREFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaENJLENBVEYsQ0FERCxDQUREO0FBbUREO0tBcER1QkwsTztBQXNEeEIsSUFBTUMsTUFBTSxHQUFHO0FBQ2JLLFdBQVMsRUFBQztBQUNSQyxTQUFLLEVBQUUsTUFEQztBQUVSQyxjQUFVLEVBQUUsU0FGSjtBQUdSQyxVQUFNLEVBQUMsbUJBSEM7QUFJUkMsU0FBSyxFQUFFLE1BSkM7QUFLUixlQUFXO0FBQ1RDLGVBQVMsRUFBRSxtQkFERjtBQUVUSixXQUFLLEVBQUM7QUFGRztBQUxILEdBREc7QUFVYkwsUUFBTSxFQUFFO0FBQ05VLGtCQUFjLEVBQUUsUUFEVjtBQUVKQyxhQUFTLEVBQUUsUUFGUDtBQUdOQyxNQUFFLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixPQUE1QixFQUFxQyxJQUFyQyxFQUEyQyxJQUEzQyxFQUFpRCxPQUFqRCxFQUEwRCxPQUExRCxDQUhFO0FBSU5DLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixFQUFhLElBQWIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsSUFBekIsRUFBK0IsQ0FBL0IsQ0FKRTtBQUtOUCxjQUFVLEVBQUUsRUFMTjtBQU1OUSxZQUFRLEVBQUUsVUFOSjtBQU9OQyxVQUFNLEVBQUUsQ0FQRjtBQVFOLGlCQUFhO0FBQ1hELGNBQVEsRUFBRSxVQURDO0FBRVhFLGFBQU8sRUFBRSxJQUZFO0FBR1hDLFlBQU0sRUFBRSxDQUhHO0FBSVhDLFVBQUksRUFBRSxDQUpLO0FBS1hDLFlBQU0sRUFBRSxNQUxHO0FBTVhDLFdBQUssRUFBRSxNQU5JO0FBT1hMLFlBQU0sRUFBRSxDQUFDLENBUEU7QUFRWE0scUJBQWUsZ0JBQVNDLHNEQUFULE1BUko7QUFTWEMsc0JBQWdCLGFBVEw7QUFVWEMsd0JBQWtCLEVBQUUsYUFWVDtBQVdYQyxvQkFBYyxFQUFFO0FBWEwsS0FSUDtBQXFCTixnQkFBWTtBQUNWWCxjQUFRLEVBQUUsVUFEQTtBQUVWRSxhQUFPLEVBQUUsSUFGQztBQUdWQyxZQUFNLEVBQUUsTUFIRTtBQUlWUyxXQUFLLEVBQUUsQ0FKRztBQUtWUCxZQUFNLEVBQUUsTUFMRTtBQU1WQyxXQUFLLEVBQUUsTUFORztBQU9WTyxpQkFBVyxFQUFFLE1BUEg7QUFRVlosWUFBTSxFQUFFLENBQUMsQ0FSQztBQVNWTSxxQkFBZSxnQkFBU08sdURBQVQsTUFUTDtBQVVWTCxzQkFBZ0IsYUFWTjtBQVdWQyx3QkFBa0IsRUFBRSxjQVhWO0FBWVZDLG9CQUFjLEVBQUU7QUFaTixLQXJCTjtBQW1DTkksYUFBUyxFQUFFO0FBQ1RDLGVBQVMsRUFBRSxTQURGO0FBRVRDLGFBQU8sRUFBRSxNQUZBO0FBR1RDLG1CQUFhLEVBQUUsUUFITjtBQUlUdEIsb0JBQWMsRUFBRTtBQUpQLEtBbkNMO0FBeUNOdUIsY0FBVSxFQUFFO0FBQ1ZiLFdBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLE9BQWhCLEVBQXlCLElBQXpCLEVBQStCLEtBQS9CLEVBQXNDLEtBQXRDLEVBQTZDLEtBQTdDLEVBQW9ELEtBQXBELENBREc7QUFFVmMsUUFBRSxFQUFFLE1BRk07QUFHVnZCLGVBQVMsRUFBRSxRQUhEO0FBSVZ3QixRQUFFLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUMsQ0FBakM7QUFKTSxLQXpDTjtBQStDTkMsWUFBUSxFQUFFO0FBQ1IxQixvQkFBYyxFQUFFLFFBRFI7QUFFUkMsZUFBUyxFQUFFLFFBRkg7QUFHUm9CLGFBQU8sRUFBRSxhQUhEO0FBSVJJLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBQyxDQUFYLEVBQWMsSUFBZCxFQUFvQixJQUFwQixFQUEwQixPQUExQixFQUFtQyxJQUFuQyxFQUF5QyxDQUFDLENBQTFDLENBSkk7QUFLUkUsU0FBRyxFQUFFO0FBQ0h2QixnQkFBUSxFQUFFLFVBRFA7QUFFSEssY0FBTSxFQUFFLENBQUMsR0FBRCxFQUFNLE1BQU47QUFGTDtBQUxHO0FBL0NKO0FBVkssQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MmI4YzI5MTMwNDRkYmUyZDBlMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBDb250YWluZXIsIEJveCwgSGVhZGluZywgVGV4dCwgSW1hZ2UsIEJ1dHRvbiwgTGluayxcbiAgTGFiZWwsXG4gIElucHV0LFxuICBTZWxlY3QsXG4gIFRleHRhcmVhLFxuICBSYWRpbyxcbiAgRmxleCxcbiAgQ2hlY2tib3gsXG4gIFNsaWRlcn0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IEJhbm5lckltZyBmcm9tICdhc3NldHMvc2hhcGVibmllZGMucG5nJztcbmltcG9ydCBTaGFwZUxlZnQgZnJvbSAnYXNzZXRzL2tpcmkucG5nJztcbmltcG9ydCBTaGFwZVJpZ2h0IGZyb20gJ2Fzc2V0cy9rYW5hbi5wbmcnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCkge1xuICByZXR1cm4gKFxuICAgPHNlY3Rpb24gc3g9e3N0eWxlcy5iYW5uZXJ9IGlkPVwiaG9tZVwiPlxuICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5mYXF9PlxuICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICBzbG9nYW49XCJCZWJlcmFwYSBQZXJ0YW55YWFuIFVtdW1cIlxuICAgICAgICB0aXRsZT1cIkZyZXF1ZW50bHkgQXNrZWQgUXVlc3Rpb25cIlxuICAgICAgICBpc1doaXRlPXtmYWxzZX1cbiAgICAgICAgLz5cblxuICAgICBcbiAgICAgIFxuICAgICAgPEJveCBhcz1cImZvcm1cIiBvblN1Ym1pdD17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XG4gIDxMYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTwvTGFiZWw+XG4gIDxJbnB1dCBuYW1lPVwidXNlcm5hbWVcIiBpZD1cInVzZXJuYW1lXCIgbWI9ezN9IC8+XG4gIDxMYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvTGFiZWw+XG4gIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgbWI9ezN9IC8+XG4gIDxCb3g+XG4gICAgPExhYmVsIG1iPXszfT5cbiAgICAgIDxDaGVja2JveCAvPlxuICAgICAgUmVtZW1iZXIgbWVcbiAgICA8L0xhYmVsPlxuICA8L0JveD5cbiAgPExhYmVsIGh0bWxGb3I9XCJzb3VuZFwiPlNvdW5kPC9MYWJlbD5cbiAgPFNlbGVjdCBuYW1lPVwic291bmRcIiBpZD1cInNvdW5kXCIgbWI9ezN9PlxuICAgIDxvcHRpb24+QmVlcDwvb3B0aW9uPlxuICAgIDxvcHRpb24+Qm9vcDwvb3B0aW9uPlxuICAgIDxvcHRpb24+QmxpcDwvb3B0aW9uPlxuICA8L1NlbGVjdD5cbiAgPExhYmVsIGh0bWxGb3I9XCJjb21tZW50XCI+Q29tbWVudDwvTGFiZWw+XG4gIDxUZXh0YXJlYSBuYW1lPVwiY29tbWVudFwiIGlkPVwiY29tbWVudFwiIHJvd3M9ezZ9IG1iPXszfSAvPlxuICA8RmxleCBtYj17M30+XG4gICAgPExhYmVsPlxuICAgICAgPFJhZGlvIG5hbWU9XCJsZXR0ZXJcIiAvPiBBbHBoYVxuICAgIDwvTGFiZWw+XG4gICAgPExhYmVsPlxuICAgICAgPFJhZGlvIG5hbWU9XCJsZXR0ZXJcIiAvPiBCcmF2b1xuICAgIDwvTGFiZWw+XG4gICAgPExhYmVsPlxuICAgICAgPFJhZGlvIG5hbWU9XCJsZXR0ZXJcIiAvPiBDaGFybGllXG4gICAgPC9MYWJlbD5cbiAgPC9GbGV4PlxuICA8TGFiZWw+U2xpZGVyPC9MYWJlbD5cbiAgPFNsaWRlciBtYj17M30gLz5cbiAgPEJ1dHRvbj5TdWJtaXQ8L0J1dHRvbj5cbjwvQm94PlxuXG5cbiAgICA8L0NvbnRhaW5lcj5cbiAgIFxuICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHNlbGVuZ2thcDp7XG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBiYWNrZ3JvdW5kOiAnI0U0NDIwMCcsXG4gICAgYm9yZGVyOicwcHggc29saWQgI0U1NTMwMCcsXG4gICAgaG92ZXI6ICcjZmZmJyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJveFNoYWRvdzogJzAgMXB4IDhweCAjRTQ0MjAwJyxcbiAgICAgIGNvbG9yOicjZmZmJ1xuICAgIH19LFxuICBiYW5uZXI6IHtcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIHB0OiBbJzE0MHB4JywgJzE0NXB4JywgJzE1NXB4JywgJzE3MHB4JywgbnVsbCwgbnVsbCwgJzE4MHB4JywgJzIxNXB4J10sXG4gICAgcGI6IFsyLCBudWxsLCAwLCBudWxsLCAyLCAwLCBudWxsLCA1XSxcbiAgICBiYWNrZ3JvdW5kOiAnJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB6SW5kZXg6IDIsXG4gICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgYm90dG9tOiA2LFxuICAgICAgbGVmdDogMCxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHpJbmRleDogLTEsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtTaGFwZUxlZnR9KWAsXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2JvdHRvbSBsZWZ0JyxcbiAgICAgIGJhY2tncm91bmRTaXplOiAnMzIlJyxcbiAgICB9LFxuICAgICcmOjphZnRlcic6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgYm90dG9tOiAnNjBweCcsXG4gICAgICByaWdodDogMCxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHRyYW5zcGFyZW50OiAnMTAwJScsXG4gICAgICB6SW5kZXg6IC0xLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7U2hhcGVSaWdodH0pYCxcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnYm90dG9tIHJpZ2h0JyxcbiAgICAgIGJhY2tncm91bmRTaXplOiAnMzIlJyxcbiAgICB9LFxuICAgIGNvbnRhaW5lcjoge1xuICAgICAgbWluSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICB9LFxuICAgIGNvbnRlbnRCb3g6IHtcbiAgICAgIHdpZHRoOiBbJzEwMCUnLCAnOTAlJywgJzUzNXB4JywgbnVsbCwgJzY3JScsICc2MCUnLCAnNjglJywgJzYwJSddLFxuICAgICAgbXg6ICdhdXRvJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBtYjogWyc0MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgN10sXG4gICAgfSxcbiAgICBpbWFnZUJveDoge1xuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBtYjogWzAsIG51bGwsIC02LCBudWxsLCBudWxsLCAnLTQwcHgnLCBudWxsLCAtM10sXG4gICAgICBpbWc6IHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGhlaWdodDogWzI0NSwgJ2F1dG8nXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9