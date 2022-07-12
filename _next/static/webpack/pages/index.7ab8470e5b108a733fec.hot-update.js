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
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/patternBG.png */ "./src/assets/patternBG.png");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Portal E-Device\\Sample1\\nextjs_landing_page\\nextjs_landing_page\\src\\sections\\contact.js";

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
function Contact() {
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
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: styles.inputGroup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 10
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    htmlFor: "domainName",
    variant: "styles.srOnly",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, "Your Domain Name"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    id: "domainName",
    placeholder: "Your domain name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    variant: "primary",
    sx: styles.submit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "Start for free"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: styles.note,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "No credit card required."), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  })));
}
_c = Contact;
var styles = {
  selengkap: {
    color: '#E44200',
    background: '#fff',
    hover: '#fff',
    fontSize: '25px',
    '&:hover': {
      // boxShadow: '0 0px 2px #000',
      background: '#E75519',
      color: '#fff'
    }
  },
  faq: {
    justifyContent: 'center',
    textAlign: 'center'
  },
  workflow: {
    backgroundColor: 'background',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NvbnRhY3QuanMiXSwibmFtZXMiOlsiZGF0YSIsImlkIiwidGl0bGUiLCJ0ZXh0IiwiQ29udGFjdCIsInN0eWxlcyIsIndvcmtmbG93IiwiZmFxIiwiaW5wdXRHcm91cCIsInN1Ym1pdCIsIm5vdGUiLCJncmlkIiwic2VsZW5na2FwIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiaG92ZXIiLCJmb250U2l6ZSIsImp1c3RpZnlDb250ZW50IiwidGV4dEFsaWduIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZEltYWdlIiwiUGF0dGVybkJHIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwicG9zaXRpb24iLCJweSIsIm1iIiwicHQiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImNhcmQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIndpZHRoIiwibXgiLCJweCIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwiaWNvbkJveCIsImZsZXhTaHJpbmsiLCJib3JkZXJSYWRpdXMiLCJhbGlnbkl0ZW1zIiwiZm9udFdlaWdodCIsIndyYXBwZXIiLCJtdCIsImxpbmVIZWlnaHQiLCJwciIsInN1YlRpdGxlIiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUsK0JBRlQ7QUFHRUMsTUFBSSxFQUNGO0FBSkosQ0FEVyxFQU9YO0FBQ0VGLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSw0Q0FGVDtBQUdFQyxNQUFJLEVBQ0Y7QUFKSixDQVBXLEVBYVg7QUFDRUYsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLGlDQUZUO0FBR0VDLE1BQUksRUFDRjtBQUpKLENBYlcsRUFtQlg7QUFDRUYsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLGlDQUZUO0FBR0VDLE1BQUksRUFDRjtBQUpKLENBbkJXLENBQWI7QUEyQmUsU0FBU0MsT0FBVCxHQUFtQjtBQUNoQyxTQUNFO0FBQ0EsTUFBRSxFQUFFQyxNQUFNLENBQUNDLFFBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFLHFEQUFDLGtEQUFEO0FBQVcsTUFBRSxFQUFFRCxNQUFNLENBQUNFLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxpRUFBRDtBQUNBLFVBQU0sRUFBQywwQkFEUDtBQUVBLFNBQUssRUFBQywyQkFGTjtBQUdBLFdBQU8sRUFBRSxJQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1HLHFEQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFFRixNQUFNLENBQUNHLFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSyxxREFBQyw4Q0FBRDtBQUFPLFdBQU8sRUFBQyxZQUFmO0FBQTRCLFdBQU8sRUFBQyxlQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURMLEVBSUsscURBQUMsOENBQUQ7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLE1BQUUsRUFBQyxZQUZMO0FBR0UsZUFBVyxFQUFDLGtCQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKTCxDQU5ILEVBZ0JNLHFEQUFDLCtDQUFEO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsV0FBTyxFQUFDLFNBQTlCO0FBQXdDLE1BQUUsRUFBRUgsTUFBTSxDQUFDSSxNQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWhCTixFQW1CTSxxREFBQyw2Q0FBRDtBQUFNLE1BQUUsRUFBQyxHQUFUO0FBQWEsTUFBRSxFQUFFSixNQUFNLENBQUNLLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBbkJOLEVBc0JFLHFEQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFFTCxNQUFNLENBQUNNLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0QkYsQ0FIRixDQURGO0FBeUNEO0tBMUN1QlAsTztBQTRDeEIsSUFBTUMsTUFBTSxHQUFHO0FBQ2JPLFdBQVMsRUFBQztBQUNSQyxTQUFLLEVBQUUsU0FEQztBQUVSQyxjQUFVLEVBQUUsTUFGSjtBQUdSQyxTQUFLLEVBQUUsTUFIQztBQUlSQyxZQUFRLEVBQUUsTUFKRjtBQUtSLGVBQVc7QUFDVDtBQUNBRixnQkFBVSxFQUFFLFNBRkg7QUFHVEQsV0FBSyxFQUFDO0FBSEc7QUFMSCxHQURHO0FBV2JOLEtBQUcsRUFBQztBQUNGVSxrQkFBYyxFQUFFLFFBRGQ7QUFFRkMsYUFBUyxFQUFFO0FBRlQsR0FYUztBQWViWixVQUFRLEVBQUU7QUFDUmEsbUJBQWUsRUFBRSxZQURUO0FBRVJDLG1CQUFlLGdCQUFTQywyREFBVCxNQUZQO0FBR1JDLG9CQUFnQixhQUhSO0FBSVJDLHNCQUFrQixFQUFFLGVBSlo7QUFLUkMsa0JBQWMsRUFBRSxPQUxSO0FBTVJDLFlBQVEsRUFBRSxVQU5GO0FBT1JDLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsRUFBekI7QUFQSSxHQWZHO0FBd0JiZixNQUFJLEVBQUU7QUFDSmdCLE1BQUUsRUFBRSxDQUFDLENBREQ7QUFFSkMsTUFBRSxFQUFFLENBRkE7QUFHSkMsV0FBTyxFQUFFLENBQ1AsUUFETyxFQUVQLElBRk8sRUFHUCxXQUhPLEVBSVAsSUFKTyxFQUtQLFdBTE8sRUFNUCxJQU5PLEVBT1AsSUFQTyxFQVFQLFdBUk8sQ0FITDtBQWFKQyx1QkFBbUIsRUFBRSxDQUNuQixlQURtQixFQUVuQixJQUZtQixFQUduQixlQUhtQixFQUluQixJQUptQixFQUtuQixlQUxtQjtBQWJqQixHQXhCTztBQTZDYkMsTUFBSSxFQUFFO0FBQ0pDLFdBQU8sRUFBRSxNQURMO0FBRUpDLGlCQUFhLEVBQUUsUUFGWDtBQUdKUixZQUFRLEVBQUUsVUFITjtBQUlKUCxhQUFTLEVBQUUsQ0FBQyxRQUFELEVBQVcsSUFBWCxFQUFpQixNQUFqQixDQUpQO0FBS0pnQixTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixNQUFoQixDQUxIO0FBTUpDLE1BQUUsRUFBRSxDQUFDLE1BQUQsQ0FOQTtBQU9KQyxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsQ0FBaEIsQ0FQQTtBQVFKLGlCQUFhO0FBQ1hYLGNBQVEsRUFBRSxVQURDO0FBRVhZLGFBQU8sRUFBRSxJQUZFO0FBR1hDLFNBQUcsRUFBRSxDQUhNO0FBSVhDLFVBQUksRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixJQUFoQixFQUFzQixJQUF0QixFQUE0QixFQUE1QixFQUFnQyxJQUFoQyxFQUFzQyxFQUF0QyxDQUpLO0FBS1hqQixzQkFBZ0IsYUFMTDtBQU1YQyx3QkFBa0IsRUFBRSxlQU5UO0FBT1hXLFdBQUssRUFBRSxHQVBJO0FBUVhNLFlBQU0sRUFBRSxFQVJHO0FBU1gsOENBQXdDO0FBQ3RDUixlQUFPLEVBQUU7QUFENkI7QUFUN0IsS0FSVDtBQXFCSiw0QkFBd0I7QUFDdEJBLGFBQU8sRUFBRTtBQURhO0FBckJwQixHQTdDTztBQXVFYlMsU0FBTyxFQUFFO0FBQ1BQLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsTUFBZixFQUF1QixJQUF2QixFQUE2QixJQUE3QixFQUFtQyxNQUFuQyxDQURBO0FBRVBNLFVBQU0sRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsTUFBZixFQUF1QixJQUF2QixFQUE2QixJQUE3QixFQUFtQyxNQUFuQyxDQUZEO0FBR1BFLGNBQVUsRUFBRSxDQUhMO0FBSVBDLGdCQUFZLEVBQUUsQ0FBQyxFQUFELEVBQUssSUFBTCxFQUFXLEVBQVgsRUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLEVBQTNCLENBSlA7QUFLUHhCLG1CQUFlLEVBQUUsT0FMVjtBQU1QYSxXQUFPLEVBQUUsTUFORjtBQU9QWSxjQUFVLEVBQUUsUUFQTDtBQVFQakIsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLENBQTVCLENBUkc7QUFTUFEsTUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxDQUFmLENBVEc7QUFVUG5CLFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsTUFBekIsQ0FWSDtBQVdQNkIsY0FBVSxFQUFFLEdBWEw7QUFZUDVCLGtCQUFjLEVBQUUsUUFaVDtBQWFQSixTQUFLLEVBQUU7QUFiQSxHQXZFSTtBQXNGYmlDLFNBQU8sRUFBRTtBQUNQWixTQUFLLEVBQUUsTUFEQTtBQUVQRixXQUFPLEVBQUUsTUFGRjtBQUdQQyxpQkFBYSxFQUFFLFFBSFI7QUFJUGMsTUFBRSxFQUFFLE1BSkc7QUFLUDdDLFNBQUssRUFBRTtBQUNMYyxjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLENBQXpCLENBREw7QUFFTEgsV0FBSyxFQUFFLE9BRkY7QUFHTG1DLGdCQUFVLEVBQUUsQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFZLElBQVosRUFBa0IsSUFBbEIsRUFBd0IsSUFBeEIsRUFBOEIsSUFBOUIsQ0FIUDtBQUlMQyxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0IsSUFBdEIsRUFBNEIsQ0FBNUIsQ0FKQztBQUtMdEIsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUo7QUFMQyxLQUxBO0FBYVB1QixZQUFRLEVBQUU7QUFDUmxDLGNBQVEsRUFBRSxDQURGO0FBRVI2QixnQkFBVSxFQUFFLEdBRko7QUFHUkcsZ0JBQVUsRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixHQUFuQixFQUF3QixDQUF4QixDQUhKO0FBSVJuQyxXQUFLLEVBQUUsT0FKQztBQUtSc0MsYUFBTyxFQUFFLElBTEQ7QUFNUkYsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLENBQTVCO0FBTkk7QUFiSDtBQXRGSSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdhYjg0NzBlNWIxMDhhNzMzZmVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgQm94LCBIZWFkaW5nLCBUZXh0LCBMaW5rLCBCdXR0b24sIEZsZXgsIExhYmVsLCBJbnB1dCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xuXG5pbXBvcnQgUGF0dGVybkJHIGZyb20gJ2Fzc2V0cy9wYXR0ZXJuQkcucG5nJztcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiAnU2V0IGRpc2J1cnNlbWVudCBJbnN0cnVjdGlvbnMnLFxuICAgIHRleHQ6XG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogJ0Fzc2VtYmx5IHJldHJpZXZlcyBmdW5kcyBmcm9tIHlvdXIgYWNjb3VudCcsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiAnQXNzZW1ibHkgaW5pdGlhdGVzIGRpc2J1cnNlbWVudCcsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIHRpdGxlOiAnQ3VzdG9tZXIgcmVjZWl2ZXMgZnVuZHMgcGF5bWVudCcsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICBzeD17c3R5bGVzLndvcmtmbG93fVxuICAgID5cbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5mYXF9PlxuICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICBzbG9nYW49XCJCZWJlcmFwYSBQZXJ0YW55YWFuIFVtdW1cIlxuICAgICAgICB0aXRsZT1cIkZyZXF1ZW50bHkgQXNrZWQgUXVlc3Rpb25cIlxuICAgICAgICBpc1doaXRlPXt0cnVlfVxuICAgICAgICAvPlxuICAgICAgICAgPEZsZXggc3g9e3N0eWxlcy5pbnB1dEdyb3VwfT5cbiAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJkb21haW5OYW1lXCIgdmFyaWFudD1cInN0eWxlcy5zck9ubHlcIj5cbiAgICAgICAgICAgICAgICBZb3VyIERvbWFpbiBOYW1lXG4gICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBpZD1cImRvbWFpbk5hbWVcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBkb21haW4gbmFtZVwiXG4gICAgICAgICAgICAgIC8+IFxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cInByaW1hcnlcIiBzeD17c3R5bGVzLnN1Ym1pdH0+XG4gICAgICAgICAgICAgIFN0YXJ0IGZvciBmcmVlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMubm90ZX0+XG4gICAgICAgICAgICAgIE5vIGNyZWRpdCBjYXJkIHJlcXVpcmVkLlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxuICAgICAgICB7Lyoge2RhdGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNhcmR9IGtleT17aXRlbS5pZH0+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5pY29uQm94fT4ge2AwJHtpdGVtLmlkfWB9PC9Cb3g+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9PjwvSGVhZGluZz5cbiAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9PntpdGVtLnRleHR9PC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKSl9ICovfVxuXG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBzZWxlbmdrYXA6e1xuICAgIGNvbG9yOiAnI0U0NDIwMCcsXG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIGhvdmVyOiAnI2ZmZicsXG4gICAgZm9udFNpemU6ICcyNXB4JyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIC8vIGJveFNoYWRvdzogJzAgMHB4IDJweCAjMDAwJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjRTc1NTE5JyxcbiAgICAgIGNvbG9yOicjZmZmJ1xuICAgIH19LFxuICBmYXE6e1xuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB9LFxuICB3b3JrZmxvdzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ2JhY2tncm91bmQnLFxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1BhdHRlcm5CR30pYCxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBweTogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcbiAgfSxcbiAgZ3JpZDoge1xuICAgIG1iOiAtMSxcbiAgICBwdDogMCxcbiAgICBncmlkR2FwOiBbXG4gICAgICAnMzVweCAwJyxcbiAgICAgIG51bGwsXG4gICAgICAnNDVweCAzMHB4JyxcbiAgICAgIG51bGwsXG4gICAgICAnNTBweCAyNXB4JyxcbiAgICAgIG51bGwsXG4gICAgICBudWxsLFxuICAgICAgJzUwcHggNjVweCcsXG4gICAgXSxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXG4gICAgICAncmVwZWF0KDEsMWZyKScsXG4gICAgICBudWxsLFxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxuICAgICAgbnVsbCxcbiAgICAgICdyZXBlYXQoNCwxZnIpJyxcbiAgICBdLFxuICB9LFxuICBjYXJkOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCAnbGVmdCddLFxuICAgIHdpZHRoOiBbJzEwMCUnLCAnODAlJywgJzEwMCUnXSxcbiAgICBteDogWydhdXRvJ10sXG4gICAgcHg6IFs0LCBudWxsLCBudWxsLCAwXSxcbiAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNzIsIG51bGwsIDkwXSxcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXG4gICAgICB3aWR0aDogMjE1LFxuICAgICAgaGVpZ2h0OiA2MCxcbiAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMjBweCknOiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnJjpsYXN0LWNoaWxkOjpiZWZvcmUnOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgfSxcbiAgfSxcblxuICBpY29uQm94OiB7XG4gICAgd2lkdGg6IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzcwcHgnXSxcbiAgICBoZWlnaHQ6IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzcwcHgnXSxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIGJvcmRlclJhZGl1czogWzE1LCBudWxsLCAyMywgbnVsbCwgbnVsbCwgMzBdLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbWI6IFs1LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA2XSxcbiAgICBteDogWydhdXRvJywgbnVsbCwgMF0sXG4gICAgZm9udFNpemU6IFs2LCBudWxsLCA3LCBudWxsLCBudWxsLCAnMzBweCddLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgY29sb3I6ICcjMjM0NTgyJyxcbiAgfSxcbiAgd3JhcHBlcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIG10OiAnLTVweCcsXG4gICAgdGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgNCwgbnVsbCwgbnVsbCwgNV0sXG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjQsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDEuNTVdLFxuICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAyXSxcbiAgICAgIG1iOiBbMiwgM10sXG4gICAgfSxcblxuICAgIHN1YlRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogMSxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCBudWxsLCAxLjksIDJdLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBvcGFjaXR5OiAwLjc1LFxuICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA1XSxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=