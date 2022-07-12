webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/service-section.js":
/*!*****************************************!*\
  !*** ./src/sections/service-section.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tutorial; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-modal-video */ "./node_modules/react-modal-video/lib/index.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var assets_thumb_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/thumb.png */ "./src/assets/thumb.png");
/* harmony import */ var assets_thumb_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_thumb_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_video_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/video.png */ "./src/assets/video.png");
/* harmony import */ var assets_video_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_video_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_key_feature_3s_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/key-feature/3s.png */ "./src/assets/key-feature/3s.png");
/* harmony import */ var assets_key_feature_3s_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_3s_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_key_feature_4s_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/key-feature/4s.png */ "./src/assets/key-feature/4s.png");
/* harmony import */ var assets_key_feature_4s_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_4s_png__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "D:\\Portal E-Device\\Sample1\\nextjs_landing_page\\nextjs_landing_page\\src\\sections\\service-section.js",
    _s = $RefreshSig$(),
    _templateObject;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */










var data = {
  subTitle: 'Tutorial',
  title: 'Penggunaan EDC BNI',
  features: [{
    id: 1,
    imgSrc: assets_key_feature_3s_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    altText: 'Kemudahan',
    title: 'Kemudahan',
    text: 'Kemudahan penggunaan EDC dalam bertransaksi serta mempermudah konsumen dalam melakukan pembayaran '
  }, {
    id: 2,
    imgSrc: assets_key_feature_4s_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    altText: 'Keamanan',
    title: 'Keamanan',
    text: 'Transaksi dengan menggunakan EDC akan lebih aman dan cashless.'
  }]
};
function Tutorial() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      videoOpen = _useState[0],
      setVideoOpen = _useState[1];

  var handleClick = function handleClick(e) {
    e.preventDefault();
    setVideoOpen(true);
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("section", {
    sx: {
      variant: 'section.services'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: assets_thumb_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "Thumbnail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    sx: styles.videoBtn,
    onClick: handleClick,
    "aria-label": "PlayButton",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoIosPlay"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.shapeBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: assets_video_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "video edc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_4__["default"], {
    subTitle: data.subTitle,
    title: data.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, data.features.map(function (feature) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.card,
      key: feature.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: feature.imgSrc,
      alt: feature.altText,
      sx: styles.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.wrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      sx: styles.wrapper.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, feature.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      sx: styles.wrapper.subTitle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 15
      }
    }, feature.text)));
  })))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_modal_video__WEBPACK_IMPORTED_MODULE_5___default.a, {
    channel: "youtube",
    isOpen: videoOpen,
    videoId: "yFjSgDKCiFM",
    onClose: function onClose() {
      return setVideoOpen(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }));
}

_s(Tutorial, "fjrTXSMqqo5cVpzR03nEXJYpFAo=");

_c = Tutorial;
var playPluse = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);\n    opacity: 1;\n  }\n\n  to {\n\ttransform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);\n    opacity: 0;\n  }\n"])));
var styles = {
  portofolio: {
    py: [0, null, null, 2, null, 7],
    position: 'relative'
  },
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, 7],
    mt: [100]
  },
  thumbnail: {
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto']
    }
  },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block']
  },
  videoBtn: {
    zIndex: 2,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: ['60px', null, '80px', null, '100px'],
    height: ['60px', null, '80px', null, '100px'],
    p: '0px !important',
    backgroundColor: 'transparent',
    '&::before': {
      position: 'absolute',
      content: '""',
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      display: 'block',
      width: ['60px', null, '80px', null, '100px'],
      height: ['60px', null, '80px', null, '100px'],
      backgroundColor: '#E44200',
      borderRadius: '50%',
      animation: "".concat(playPluse, " 1.5s ease-out infinite"),
      opacity: 0.5
    },
    '> span': {
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: 'inherit',
      height: 'inherit',
      textAlign: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.5s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2
    },
    svg: {
      fontSize: [40, null, 48, null, 62]
    }
  },
  contentBox: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left']
  },
  grid: {
    pr: [2, 0, null, null, 6, '70px'],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: 'auto',
    width: ['100%', 370, 420, '100%'],
    gridGap: ['35px 0', null, null, null, '50px 0'],
    gridTemplateColumns: ['repeat(1,1fr)']
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s'
  },
  icon: {
    width: ['95px', null, null, null, '95px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, null, null, null, 4]
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3]
    },
    subTitle: {
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9,
      color: ''
    }
  },
  videoWrapper: {
    maxWidth: '100%',
    position: 'relative',
    width: '900px',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%'
    },
    iframe: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0
    }
  }
};

var _c;

$RefreshReg$(_c, "Tutorial");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3NlcnZpY2Utc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJkYXRhIiwic3ViVGl0bGUiLCJ0aXRsZSIsImZlYXR1cmVzIiwiaWQiLCJpbWdTcmMiLCJTbWFydCIsImFsdFRleHQiLCJ0ZXh0IiwiU2VjdXJlIiwiVHV0b3JpYWwiLCJ1c2VTdGF0ZSIsInZpZGVvT3BlbiIsInNldFZpZGVvT3BlbiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFyaWFudCIsInN0eWxlcyIsImNvbnRhaW5lckJveCIsInRodW1ibmFpbCIsIlNlcnZpY2VUaHVtYiIsInZpZGVvQnRuIiwic2hhcGVCb3giLCJzaGFwZVBhdHRlcm4iLCJjb250ZW50Qm94IiwiZ3JpZCIsIm1hcCIsImZlYXR1cmUiLCJjYXJkIiwiaWNvbiIsIndyYXBwZXIiLCJwbGF5UGx1c2UiLCJrZXlmcmFtZXMiLCJwb3J0b2ZvbGlvIiwicHkiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwicGIiLCJtdCIsIm1yIiwib3JkZXIiLCJtbCIsInpJbmRleCIsImhlaWdodCIsImJvdHRvbSIsImxlZnQiLCJ0b3AiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsInAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb250ZW50IiwiYm9yZGVyUmFkaXVzIiwiYW5pbWF0aW9uIiwib3BhY2l0eSIsInRleHRBbGlnbiIsImN1cnNvciIsInRyYW5zaXRpb24iLCJzdmciLCJmb250U2l6ZSIsImZsZXhTaHJpbmsiLCJtYiIsInByIiwicGwiLCJwdCIsIm14IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJjb2xvciIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0IiwidmlkZW9XcmFwcGVyIiwibWF4V2lkdGgiLCJwYWRkaW5nVG9wIiwiaWZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7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RSxHQUhKO0FBSVJELFdBQUssRUFBRTtBQUpDO0FBZEgsR0FyR0k7QUEwSGJHLGNBQVksRUFBRTtBQUNaQyxZQUFRLEVBQUUsTUFERTtBQUVaeEMsWUFBUSxFQUFFLFVBRkU7QUFHWmdCLFNBQUssRUFBRSxPQUhLO0FBSVosZ0JBQVk7QUFDVkcsYUFBTyxFQUFFLElBREM7QUFFVmxCLGFBQU8sRUFBRSxPQUZDO0FBR1Z3QyxnQkFBVSxFQUFFO0FBSEYsS0FKQTtBQVNaQyxVQUFNLEVBQUU7QUFDTjFCLFdBQUssRUFBRSxNQUREO0FBRU5MLFlBQU0sRUFBRSxNQUZGO0FBR05YLGNBQVEsRUFBRSxVQUhKO0FBSU5jLFNBQUcsRUFBRSxDQUpDO0FBS05ELFVBQUksRUFBRTtBQUxBO0FBVEk7QUExSEQsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ODk1ZmFhNjAzMDhkMTkyN2I1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgQm94LCBHcmlkLCBUZXh0LCBIZWFkaW5nLCBCdXR0b24sIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgVGV4dEZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy90ZXh0LWZlYXR1cmUnO1xuaW1wb3J0IE1vZGFsVmlkZW8gZnJvbSAncmVhY3QtbW9kYWwtdmlkZW8nO1xuaW1wb3J0IHsgSW9Jb3NQbGF5IH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuXG5pbXBvcnQgU2VydmljZVRodW1iIGZyb20gJ2Fzc2V0cy90aHVtYi5wbmcnO1xuaW1wb3J0IHNoYXBlUGF0dGVybiBmcm9tICdhc3NldHMvdmlkZW8ucG5nJztcblxuaW1wb3J0IFNtYXJ0IGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS8zcy5wbmcnO1xuaW1wb3J0IFNlY3VyZSBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvNHMucG5nJztcblxuY29uc3QgZGF0YSA9IHtcbiAgc3ViVGl0bGU6ICdUdXRvcmlhbCcsXG4gIHRpdGxlOiAnUGVuZ2d1bmFhbiBFREMgQk5JJyxcbiAgZmVhdHVyZXM6IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIGltZ1NyYzogU21hcnQsXG4gICAgICBhbHRUZXh0OiAnS2VtdWRhaGFuJyxcbiAgICAgIHRpdGxlOiAnS2VtdWRhaGFuJyxcbiAgICAgIHRleHQ6XG4gICAgICAgICdLZW11ZGFoYW4gcGVuZ2d1bmFhbiBFREMgZGFsYW0gYmVydHJhbnNha3NpIHNlcnRhIG1lbXBlcm11ZGFoIGtvbnN1bWVuIGRhbGFtIG1lbGFrdWthbiBwZW1iYXlhcmFuICcsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIGltZ1NyYzogU2VjdXJlLFxuICAgICAgYWx0VGV4dDogJ0tlYW1hbmFuJyxcbiAgICAgIHRpdGxlOiAnS2VhbWFuYW4nLFxuICAgICAgdGV4dDpcbiAgICAgICAgJ1RyYW5zYWtzaSBkZW5nYW4gbWVuZ2d1bmFrYW4gRURDIGFrYW4gbGViaWggYW1hbiBkYW4gY2FzaGxlc3MuJyxcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHV0b3JpYWwoKSB7XG4gIGNvbnN0IFt2aWRlb09wZW4sIHNldFZpZGVvT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0VmlkZW9PcGVuKHRydWUpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24uc2VydmljZXMnIH19PlxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lckJveH0+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy50aHVtYm5haWx9PlxuICAgICAgICAgIDxJbWFnZSBzcmM9e1NlcnZpY2VUaHVtYn0gYWx0PVwiVGh1bWJuYWlsXCIgLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBzeD17c3R5bGVzLnZpZGVvQnRufVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiUGxheUJ1dHRvblwiPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxJb0lvc1BsYXkgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuc2hhcGVCb3h9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz17c2hhcGVQYXR0ZXJufSBhbHQ9XCJ2aWRlbyBlZGNcIiAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnRCb3h9PlxuICAgICAgICAgIDxUZXh0RmVhdHVyZSBzdWJUaXRsZT17ZGF0YS5zdWJUaXRsZX0gdGl0bGU9e2RhdGEudGl0bGV9IC8+XG4gICAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICAgIHtkYXRhLmZlYXR1cmVzLm1hcCgoZmVhdHVyZSkgPT4gKFxuICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0ga2V5PXtmZWF0dXJlLmlkfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtmZWF0dXJlLmltZ1NyY30gYWx0PXtmZWF0dXJlLmFsdFRleHR9IHN4PXtzdHlsZXMuaWNvbn0gLz5cbiAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+XG4gICAgICAgICAgICAgICAgICB7ZmVhdHVyZS50aXRsZX08L0hlYWRpbmc+XG4gICAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+XG4gICAgICAgICAgICAgICAge2ZlYXR1cmUudGV4dH1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8TW9kYWxWaWRlb1xuICAgICAgY2hhbm5lbD0neW91dHViZSdcbiAgICAgIGlzT3Blbj17dmlkZW9PcGVufVxuICAgICAgdmlkZW9JZD1cInlGalNnREtDaUZNXCJcbiAgICAgIG9uQ2xvc2U9eygpID0+IHNldFZpZGVvT3BlbihmYWxzZSl9XG4gICAgICAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3QgcGxheVBsdXNlID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVaKDApIHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVooMCkgc2NhbGUoMS41KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5gO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHBvcnRvZm9saW86IHtcbiAgICBweTogWzAsIG51bGwsIG51bGwsIDIsIG51bGwsIDddLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB9LFxuICBjb250YWluZXJCb3g6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogWydmbGV4LXN0YXJ0JywgbnVsbCwgbnVsbCwgJ2NlbnRlciddLFxuICAgIGp1c3RpZnlDb250ZW50OiBbJ2ZsZXgtc3RhcnQnLCBudWxsLCBudWxsLCAnc3BhY2UtYmV0d2VlbiddLFxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgbnVsbCwgbnVsbCwgJ3JvdyddLFxuICAgIHBiOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgN10sXG4gICAgbXQ6IFsxMDBdXG4gIH0sXG4gIHRodW1ibmFpbDoge1xuICAgIG1yOiBbJ2F1dG8nLCBudWxsLCBudWxsLCA2LCA2MCwgODVdLFxuICAgIG9yZGVyOiBbMiwgbnVsbCwgbnVsbCwgMF0sXG4gICAgbWw6IFsnYXV0bycsIG51bGwsIG51bGwsIDBdLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgJz4gaW1nJzoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB6SW5kZXg6IDEsXG4gICAgICBoZWlnaHQ6IFszMTAsICdhdXRvJ10sXG4gICAgfSxcbiAgfSxcbiAgc2hhcGVCb3g6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206IC02OCxcbiAgICBsZWZ0OiAtMTYwLFxuICAgIHpJbmRleDogLTEsXG4gICAgZGlzcGxheTogWydub25lJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ2lubGluZS1ibG9jayddLFxuICB9LFxuICB2aWRlb0J0bjoge1xuICAgIHpJbmRleDogMixcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgd2lkdGg6IFsnNjBweCcsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXG4gICAgaGVpZ2h0OiBbJzYwcHgnLCBudWxsLCAnODBweCcsIG51bGwsICcxMDBweCddLFxuICAgIHA6ICcwcHggIWltcG9ydGFudCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICcmOjpiZWZvcmUnOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgdG9wOiAnNTAlJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKScsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgd2lkdGg6IFsnNjBweCcsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXG4gICAgICBoZWlnaHQ6IFsnNjBweCcsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRTQ0MjAwJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBhbmltYXRpb246IGAke3BsYXlQbHVzZX0gMS41cyBlYXNlLW91dCBpbmZpbml0ZWAsXG4gICAgICBvcGFjaXR5OiAwLjUsXG4gICAgfSxcbiAgICAnPiBzcGFuJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyxcbiAgICAgIHdpZHRoOiAnaW5oZXJpdCcsXG4gICAgICBoZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuNXMnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHpJbmRleDogMixcbiAgICB9LFxuICAgIHN2Zzoge1xuICAgICAgZm9udFNpemU6IFs0MCwgbnVsbCwgNDgsIG51bGwsIDYyXSxcbiAgICB9LFxuICB9LFxuICBjb250ZW50Qm94OiB7XG4gICAgd2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsIDMxNSwgMzkwLCA0NTAsIG51bGwsIDUwMF0sXG4gICAgZmxleFNocmluazogMCxcbiAgICBtYjogWzcsIG51bGwsIDYwLCAwXSxcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcbiAgfSxcbiAgZ3JpZDoge1xuICAgIHByOiBbMiwgMCwgbnVsbCwgbnVsbCwgNiwgJzcwcHgnXSxcbiAgICBwbDogWzIsIDBdLFxuICAgIHB0OiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgM10sXG4gICAgbXg6ICdhdXRvJyxcbiAgICB3aWR0aDogWycxMDAlJywgMzcwLCA0MjAsICcxMDAlJ10sXG4gICAgZ3JpZEdhcDogWyczNXB4IDAnLCBudWxsLCBudWxsLCBudWxsLCAnNTBweCAwJ10sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogWydyZXBlYXQoMSwxZnIpJ10sXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gIH0sXG5cbiAgaWNvbjoge1xuICAgIHdpZHRoOiBbJzk1cHgnLCBudWxsLCBudWxsLCBudWxsLCAnOTVweCddLFxuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgbXI6IFszLCBudWxsLCBudWxsLCBudWxsLCA0XSxcbiAgfSxcbiAgd3JhcHBlcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIG10OiAnLTVweCcsXG4gICAgdGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiAzLFxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBtYjogWzIsIG51bGwsIDMsIDIsIDNdLFxuICAgIH0sXG5cbiAgICBzdWJUaXRsZToge1xuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAnMTRweCcsIDFdLFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbGluZUhlaWdodDogMS45LFxuICAgICAgY29sb3I6ICcnXG4gICAgfSxcbiAgfSxcbiAgdmlkZW9XcmFwcGVyOiB7XG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB3aWR0aDogJzkwMHB4JyxcbiAgICAnJjpiZWZvcmUnOiB7XG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgcGFkZGluZ1RvcDogJzU2LjI1JScsXG4gICAgfSxcbiAgICBpZnJhbWU6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=