webpackHotUpdate_N_E("pages/edc",{

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ({
  // example colors with dark mode
  colors: {
    text: '#343D48',
    // body color and primary color
    text_secondary: '#02073E',
    // secondary body color
    heading: '#0F2137',
    // primary heading color
    heading_secondary: '#0F2137',
    // heading color
    background: '#FFFFFF',
    // body background color
    background_secondary: '#F9FBFD',
    // secondary background color
    border_color: '#E5ECF4',
    // border color
    yellow: '#FFA740',
    // border color
    primary: '#E44200',
    // primary button and link color
    secondary: '#2563FF',
    // secondary color - can be used for hover states
    muted: '#E4E4E4',
    // muted color
    accent: '#609',
    // a contrast color for emphasizing UI
    // highlight	a background color for highlighting text
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111'
      }
    }
  },
  breakpoints: ['480px', '640px', '768px', '1024px', '1220px', '1366px', '1620px'],
  fonts: {
    body: "'DM Sans', sans-serif",
    heading: "'DM Sans', sans-serif"
  },
  fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
  fontWeights: {
    body: 'normal',
    heading: 500,
    bold: 700
  },
  lineHeights: {
    body: 1.8,
    heading: 1.5
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px'
  },
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: ['100%', null, null, '780px', '1020px', '1200px', null, '1310px'],
      px: [4, 6]
    },
    header: {
      color: '#02073E',
      fontWeight: 'normal',
      py: 3,
      position: 'absolute',
      width: '100%'
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    main: {}
  },
  section: {
    keuntungan: {
      pt: [8, null, 9, null, null, 10],
      pb: ['90px', null, 9, null, null, 10, null, '165px']
    },
    feature: {
      pb: [8, null, 9, null, null, 10, null, '170px']
    },
    news: {
      pb: [8, null, 9, null, null, 10, null, '170px']
    },
    portofolio: {
      pb: [8, null, 9, null, null, 10, null, '170px'],
      overflow: 'hidden'
    },
    testimonial: {
      pt: [8, null, 8, '70px', null, 8, null, '145px'],
      pb: ['90px', null, 9, null, null, 10, null, '190px'],
      overflow: 'hidden'
    },
    services: {
      pb: ['90px', null, 9, null, null, 10, null, '150px']
    },
    pricing: {
      justifyContent: 'center',
      pt: [8, null, 9, null, null, 10, null, '180px'],
      pb: ['90px', null, 9, null, null, 10, null, '180px']
    }
  },
  sectionHeader: {
    width: ['100%', null, '540px'],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: ['-3px', null, -1],
    marginBottom: ['50px', null, '60px', null, null, '65px', null, '80px'],
    mx: 'auto',
    title: {
      fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
      color: 'heading',
      lineHeight: [1.3, null, null, 1.25],
      textAlign: 'center',
      fontWeight: '700',
      letterSpacing: '-.5px'
    },
    subTitle: {
      fontSize: [0, '13px', null, '14px'],
      color: 'primary',
      textAlign: 'center',
      letterSpacing: ['1.5px', null, '2px'],
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: 2,
      lineHeight: 1.5
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [4],
      letterSpacing: '-.55px',
      color: 'heading'
    },
    heroPrimary: {
      color: 'heading',
      fontSize: ['32px', '36px', '42px', '40px', '42px', '52px', '58px', '66px'],
      lineHeight: [1.3, null, null, null, null, 1.2],
      fontWeight: 700,
      mb: [4, null, null, null, null, 5]
    },
    heroSecondary: {
      fontSize: [2, null, '17px', null, null, '19px', 4],
      lineHeight: [1.9, null, null, 2],
      fontWeight: 'body',
      mb: 5,
      px: [0, null, 5, 6, null, 8, 9],
      color: 'heading'
    },
    title: {
      // extends the text.heading styles
      variant: 'text.heading',
      fontWeight: 'bold',
      fontSize: [3, null, 4],
      lineHeight: 1.25,
      mb: 1
    },
    lead: {
      fontSize: 40,
      fontFamily: 'DM Sans',
      fontWeight: '500',
      lineHeight: '60px',
      letterSpacing: '-1.5px',
      color: '#0F2137'
    },
    muted: {
      lineHeight: '26px',
      color: 'muted'
    },
    secondary: {
      fontWeight: 500,
      color: '#00A99D',
      lineHeight: '40px'
    }
  },
  links: {
    "default": {
      cursor: 'pointer'
    },
    bold: {
      fontWeight: 'bold'
    },
    nav: {
      display: ['none', null, 'inline-block'],
      px: 25,
      fontWeight: 'normal'
    },
    blog: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      transition: 'color 0.25s',
      '&:hover': {
        color: 'primary'
      }
    },
    footer: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none'
    },
    logo: {
      display: 'flex'
    }
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999
    }
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, 'none']
    },
    // default variant for MenuButton
    // you can reference other values defined in the theme
    defaultBtn: {
      borderRadius: '45px',
      fontSize: ['14px', null, null, 2],
      letterSpacings: '-0.15px',
      padding: ['12px 20px', null, '15px 30px'],
      fontFamily: 'body',
      cursor: 'pointer',
      lineHeight: 1.2,
      transition: 'all 0.25s',
      fontWeight: 500,
      '&:focus': {
        outline: 0
      }
    },
    primary: {
      variant: 'buttons.defaultBtn',
      color: 'white',
      bg: 'primary',
      '&:hover': {
        boxShadow: 'rgba(233, 76, 84, 0.57) 0px 9px 20px -5px'
      }
    },
    whiteButton: {
      variant: 'buttons.defaultBtn',
      color: 'heading_secondary',
      bg: 'white',
      '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 12px 24px -10px'
      }
    },
    secondary: {
      variant: 'buttons.defaultBtn',
      border: '2px solid',
      borderColor: 'primary',
      color: 'primary',
      bg: 'transparent',
      padding: ['10px 15px', null, '15px 30px'],
      '&:hover': {
        color: 'white',
        bg: 'primary'
      }
    },
    textButton: {
      variant: 'buttons.defaultBtn',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      color: 'white',
      svg: {
        fontSize: [4, 6],
        mr: 2
      }
    }
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4
    },
    offer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
      minHeight: 130,
      m: 2,
      background: '#FFFFFF',
      border: '1px solid #EDEFF6',
      borderRadius: 5
    },
    featureCard: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      p: 3
    }
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold'
    },
    input: {
      borderRadius: 8,
      borderColor: 'border_color',
      height: 60,
      '&:focus': {
        borderColor: 'primary',
        boxShadow: function boxShadow(t) {
          return "0 0 0 2px ".concat(t.colors.primary);
        },
        outline: 'none'
      }
    }
  },
  badges: {
    primary: {
      color: 'background',
      bg: '#28A5FF',
      borderRadius: 30,
      p: '3px 11px',
      fontSize: 1,
      letterSpacing: '-0.5px'
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px'
    }
  },
  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSmoothing: 'antialiased',
      // Modal Global Style
      '.modal-video-close-btn': {
        cursor: 'pointer'
      },
      '.modal-video-movie-wrap': {
        margin: 6,
        width: 'auto'
      }
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7'
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none'
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important'
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsInRleHQiLCJ0ZXh0X3NlY29uZGFyeSIsImhlYWRpbmciLCJoZWFkaW5nX3NlY29uZGFyeSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kX3NlY29uZGFyeSIsImJvcmRlcl9jb2xvciIsInllbGxvdyIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJtdXRlZCIsImFjY2VudCIsIm1vZGVzIiwiZGFyayIsImJyZWFrcG9pbnRzIiwiZm9udHMiLCJib2R5IiwiZm9udFNpemVzIiwiZm9udFdlaWdodHMiLCJib2xkIiwibGluZUhlaWdodHMiLCJsZXR0ZXJTcGFjaW5ncyIsImNhcHMiLCJzcGFjZSIsImxheW91dCIsImNvbnRhaW5lciIsIm1heFdpZHRoIiwicHgiLCJoZWFkZXIiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJweSIsInBvc2l0aW9uIiwid2lkdGgiLCJ0b29sYmFyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1haW4iLCJzZWN0aW9uIiwia2V1bnR1bmdhbiIsInB0IiwicGIiLCJmZWF0dXJlIiwibmV3cyIsInBvcnRvZm9saW8iLCJvdmVyZmxvdyIsInRlc3RpbW9uaWFsIiwic2VydmljZXMiLCJwcmljaW5nIiwic2VjdGlvbkhlYWRlciIsImZsZXhEaXJlY3Rpb24iLCJtdCIsIm1hcmdpbkJvdHRvbSIsIm14IiwidGl0bGUiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJ0ZXh0QWxpZ24iLCJsZXR0ZXJTcGFjaW5nIiwic3ViVGl0bGUiLCJ0ZXh0VHJhbnNmb3JtIiwibWIiLCJmb250RmFtaWx5IiwiaGVyb1ByaW1hcnkiLCJoZXJvU2Vjb25kYXJ5IiwidmFyaWFudCIsImxlYWQiLCJsaW5rcyIsImN1cnNvciIsIm5hdiIsImJsb2ciLCJ0ZXh0RGVjb3JhdGlvbiIsInRyYW5zaXRpb24iLCJmb290ZXIiLCJsb2dvIiwiaW1hZ2VzIiwiYXZhdGFyIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYnV0dG9ucyIsIm1lbnUiLCJkZWZhdWx0QnRuIiwicGFkZGluZyIsIm91dGxpbmUiLCJiZyIsImJveFNoYWRvdyIsIndoaXRlQnV0dG9uIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJ0ZXh0QnV0dG9uIiwiYmFja2dyb3VuZENvbG9yIiwic3ZnIiwibXIiLCJjYXJkcyIsIm9mZmVyIiwiZmxleCIsIm1pbkhlaWdodCIsIm0iLCJmZWF0dXJlQ2FyZCIsInAiLCJmb3JtcyIsImxhYmVsIiwiaW5wdXQiLCJ0IiwiYmFkZ2VzIiwic3R5bGVzIiwicm9vdCIsImZvbnRTbW9vdGhpbmciLCJtYXJnaW4iLCJociIsImJvcmRlckJvdHRvbSIsInVsIiwibGlzdFN0eWxlIiwic3JPbmx5IiwiY2xpcCIsImNsaXBQYXRoIiwid2hpdGVTcGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUEsOENBQWU7QUFDYjtBQUNBQSxRQUFNLEVBQUU7QUFDTkMsUUFBSSxFQUFFLFNBREE7QUFDVztBQUNqQkMsa0JBQWMsRUFBRSxTQUZWO0FBRXFCO0FBQzNCQyxXQUFPLEVBQUUsU0FISDtBQUdjO0FBQ3BCQyxxQkFBaUIsRUFBRSxTQUpiO0FBSXdCO0FBQzlCQyxjQUFVLEVBQUUsU0FMTjtBQUtpQjtBQUN2QkMsd0JBQW9CLEVBQUUsU0FOaEI7QUFNMkI7QUFDakNDLGdCQUFZLEVBQUUsU0FQUjtBQU9tQjtBQUN6QkMsVUFBTSxFQUFFLFNBUkY7QUFRYTtBQUNuQkMsV0FBTyxFQUFFLFNBVEg7QUFTYztBQUNwQkMsYUFBUyxFQUFFLFNBVkw7QUFVZ0I7QUFDdEJDLFNBQUssRUFBRSxTQVhEO0FBV1k7QUFDbEJDLFVBQU0sRUFBRSxNQVpGO0FBWVU7QUFFaEI7QUFDQUMsU0FBSyxFQUFFO0FBQ0xDLFVBQUksRUFBRTtBQUNKYixZQUFJLEVBQUUsTUFERjtBQUVKSSxrQkFBVSxFQUFFLE1BRlI7QUFHSkksZUFBTyxFQUFFLE1BSEw7QUFJ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TSxFQUFFLGNBREY7QUFFTjJCLFVBQUksRUFBRSxxQ0FGQTtBQUdOQyxjQUFRLEVBQUUsdUJBSEo7QUFJTnRDLFlBQU0sRUFBRSxnQkFKRjtBQUtOK0IsWUFBTSxFQUFFLGlCQUxGO0FBTU4vRCxjQUFRLEVBQUUsbUJBTko7QUFPTnFDLGFBQU8sRUFBRSxjQVBIO0FBUU5uRCxjQUFRLEVBQUUscUJBUko7QUFTTkMsV0FBSyxFQUFFLGdCQVREO0FBVU5vRixnQkFBVSxFQUFFO0FBVk47QUExQkY7QUFyV0ssQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lZGMuYzJmMzc5MjRlODVkNTQwMDc4ZjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gZXhhbXBsZSBjb2xvcnMgd2l0aCBkYXJrIG1vZGVcbiAgY29sb3JzOiB7XG4gICAgdGV4dDogJyMzNDNENDgnLCAvLyBib2R5IGNvbG9yIGFuZCBwcmltYXJ5IGNvbG9yXG4gICAgdGV4dF9zZWNvbmRhcnk6ICcjMDIwNzNFJywgLy8gc2Vjb25kYXJ5IGJvZHkgY29sb3JcbiAgICBoZWFkaW5nOiAnIzBGMjEzNycsIC8vIHByaW1hcnkgaGVhZGluZyBjb2xvclxuICAgIGhlYWRpbmdfc2Vjb25kYXJ5OiAnIzBGMjEzNycsIC8vIGhlYWRpbmcgY29sb3JcbiAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsIC8vIGJvZHkgYmFja2dyb3VuZCBjb2xvclxuICAgIGJhY2tncm91bmRfc2Vjb25kYXJ5OiAnI0Y5RkJGRCcsIC8vIHNlY29uZGFyeSBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgYm9yZGVyX2NvbG9yOiAnI0U1RUNGNCcsIC8vIGJvcmRlciBjb2xvclxuICAgIHllbGxvdzogJyNGRkE3NDAnLCAvLyBib3JkZXIgY29sb3JcbiAgICBwcmltYXJ5OiAnI0U0NDIwMCcsIC8vIHByaW1hcnkgYnV0dG9uIGFuZCBsaW5rIGNvbG9yXG4gICAgc2Vjb25kYXJ5OiAnIzI1NjNGRicsIC8vIHNlY29uZGFyeSBjb2xvciAtIGNhbiBiZSB1c2VkIGZvciBob3ZlciBzdGF0ZXNcbiAgICBtdXRlZDogJyNFNEU0RTQnLCAvLyBtdXRlZCBjb2xvclxuICAgIGFjY2VudDogJyM2MDknLCAvLyBhIGNvbnRyYXN0IGNvbG9yIGZvciBlbXBoYXNpemluZyBVSVxuXG4gICAgLy8gaGlnaGxpZ2h0XHRhIGJhY2tncm91bmQgY29sb3IgZm9yIGhpZ2hsaWdodGluZyB0ZXh0XG4gICAgbW9kZXM6IHtcbiAgICAgIGRhcms6IHtcbiAgICAgICAgdGV4dDogJyNmZmYnLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnIzAwMCcsXG4gICAgICAgIHByaW1hcnk6ICcjMGNmJyxcbiAgICAgICAgc2Vjb25kYXJ5OiAnIzA5YycsXG4gICAgICAgIG11dGVkOiAnIzExMScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiBbXG4gICAgJzQ4MHB4JyxcbiAgICAnNjQwcHgnLFxuICAgICc3NjhweCcsXG4gICAgJzEwMjRweCcsXG4gICAgJzEyMjBweCcsXG4gICAgJzEzNjZweCcsXG4gICAgJzE2MjBweCcsXG4gIF0sXG4gIGZvbnRzOiB7XG4gICAgYm9keTogXCInRE0gU2FucycsIHNhbnMtc2VyaWZcIixcbiAgICBoZWFkaW5nOiBcIidETSBTYW5zJywgc2Fucy1zZXJpZlwiLFxuICB9LFxuICBmb250U2l6ZXM6IFsxMiwgMTUsIDE2LCAxOCwgMjAsIDIyLCAyNCwgMjgsIDMyLCAzNiwgNDIsIDQ4LCA1MiwgNjRdLFxuICBmb250V2VpZ2h0czoge1xuICAgIGJvZHk6ICdub3JtYWwnLFxuICAgIGhlYWRpbmc6IDUwMCxcbiAgICBib2xkOiA3MDAsXG4gIH0sXG4gIGxpbmVIZWlnaHRzOiB7XG4gICAgYm9keTogMS44LFxuICAgIGhlYWRpbmc6IDEuNSxcbiAgfSxcbiAgbGV0dGVyU3BhY2luZ3M6IHtcbiAgICBib2R5OiAnbm9ybWFsJyxcbiAgICBjYXBzOiAnMC4yZW0nLFxuICAgIGhlYWRpbmc6ICctMC41cHgnLFxuICB9LFxuICBzcGFjZTogWzAsIDUsIDEwLCAxNSwgMjAsIDI1LCAzMCwgNTAsIDgwLCAxMDAsIDEyMCwgMTUwXSxcbiAgLy8gdmFyaWFudHMgY2FuIHVzZSBjdXN0b20sIHVzZXItZGVmaW5lZCBuYW1lc1xuICBsYXlvdXQ6IHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgIG1heFdpZHRoOiBbXG4gICAgICAgICcxMDAlJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgJzc4MHB4JyxcbiAgICAgICAgJzEwMjBweCcsXG4gICAgICAgICcxMjAwcHgnLFxuICAgICAgICBudWxsLFxuICAgICAgICAnMTMxMHB4JyxcbiAgICAgIF0sXG4gICAgICBweDogWzQsIDZdLFxuICAgIH0sXG4gICAgaGVhZGVyOiB7XG4gICAgICBjb2xvcjogJyMwMjA3M0UnLFxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICBweTogMyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICAgIHRvb2xiYXI6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICB9LFxuICAgIG1haW46IHt9LFxuICB9LFxuICBzZWN0aW9uOiB7XG4gICAga2V1bnR1bmdhbjoge1xuICAgICAgcHQ6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXG4gICAgICBwYjogWyc5MHB4JywgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxNjVweCddLFxuICAgIH0sXG4gICAgZmVhdHVyZToge1xuICAgICAgcGI6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE3MHB4J10sXG4gICAgfSxcbiAgICBuZXdzOiB7XG4gICAgICBwYjogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCAnMTcwcHgnXSxcbiAgICB9LFxuICAgIHBvcnRvZm9saW86IHtcbiAgICAgIHBiOiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxNzBweCddLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIH0sXG4gICAgdGVzdGltb25pYWw6IHtcbiAgICAgIHB0OiBbOCwgbnVsbCwgOCwgJzcwcHgnLCBudWxsLCA4LCBudWxsLCAnMTQ1cHgnXSxcbiAgICAgIHBiOiBbJzkwcHgnLCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE5MHB4J10sXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgfSxcbiAgICBzZXJ2aWNlczoge1xuICAgICAgcGI6IFsnOTBweCcsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCAnMTUwcHgnXSxcbiAgICB9LFxuICAgIHByaWNpbmc6IHtcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIHB0OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxODBweCddLFxuICAgICAgcGI6IFsnOTBweCcsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCAnMTgwcHgnXSxcbiAgICB9LFxuICB9LFxuICBzZWN0aW9uSGVhZGVyOiB7XG4gICAgd2lkdGg6IFsnMTAwJScsIG51bGwsICc1NDBweCddLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtdDogWyctM3B4JywgbnVsbCwgLTFdLFxuICAgIG1hcmdpbkJvdHRvbTogWyc1MHB4JywgbnVsbCwgJzYwcHgnLCBudWxsLCBudWxsLCAnNjVweCcsIG51bGwsICc4MHB4J10sXG4gICAgbXg6ICdhdXRvJyxcbiAgICB0aXRsZToge1xuICAgICAgZm9udFNpemU6IFsnMjRweCcsIG51bGwsICcyOHB4JywgbnVsbCwgbnVsbCwgJzMycHgnLCBudWxsLCAnMzZweCddLFxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjMsIG51bGwsIG51bGwsIDEuMjVdLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxuICAgICAgbGV0dGVyU3BhY2luZzogJy0uNXB4JyxcbiAgICB9LFxuXG4gICAgc3ViVGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiBbMCwgJzEzcHgnLCBudWxsLCAnMTRweCddLFxuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiBbJzEuNXB4JywgbnVsbCwgJzJweCddLFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcbiAgICAgIG1iOiAyLFxuICAgICAgbGluZUhlaWdodDogMS41LFxuICAgIH0sXG4gIH0sXG4gIHRleHQ6IHtcbiAgICBoZWFkaW5nOiB7XG4gICAgICBmb250RmFtaWx5OiAnaGVhZGluZycsXG4gICAgICBsaW5lSGVpZ2h0OiAnaGVhZGluZycsXG4gICAgICBmb250V2VpZ2h0OiAnaGVhZGluZycsXG4gICAgICBmb250U2l6ZTogWzRdLFxuICAgICAgbGV0dGVyU3BhY2luZzogJy0uNTVweCcsXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxuICAgIH0sXG4gICAgaGVyb1ByaW1hcnk6IHtcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXG4gICAgICBmb250U2l6ZTogW1xuICAgICAgICAnMzJweCcsXG4gICAgICAgICczNnB4JyxcbiAgICAgICAgJzQycHgnLFxuICAgICAgICAnNDBweCcsXG4gICAgICAgICc0MnB4JyxcbiAgICAgICAgJzUycHgnLFxuICAgICAgICAnNThweCcsXG4gICAgICAgICc2NnB4JyxcbiAgICAgIF0sXG4gICAgICBsaW5lSGVpZ2h0OiBbMS4zLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxLjJdLFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgbWI6IFs0LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA1XSxcbiAgICB9LFxuICAgIGhlcm9TZWNvbmRhcnk6IHtcbiAgICAgIGZvbnRTaXplOiBbMiwgbnVsbCwgJzE3cHgnLCBudWxsLCBudWxsLCAnMTlweCcsIDRdLFxuICAgICAgbGluZUhlaWdodDogWzEuOSwgbnVsbCwgbnVsbCwgMl0sXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXG4gICAgICBtYjogNSxcbiAgICAgIHB4OiBbMCwgbnVsbCwgNSwgNiwgbnVsbCwgOCwgOV0sXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIC8vIGV4dGVuZHMgdGhlIHRleHQuaGVhZGluZyBzdHlsZXNcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0LmhlYWRpbmcnLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgZm9udFNpemU6IFszLCBudWxsLCA0XSxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMjUsXG4gICAgICBtYjogMSxcbiAgICB9LFxuICAgIGxlYWQ6IHtcbiAgICAgIGZvbnRTaXplOiA0MCxcbiAgICAgIGZvbnRGYW1pbHk6ICdETSBTYW5zJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICAgICAgbGluZUhlaWdodDogJzYwcHgnLFxuICAgICAgbGV0dGVyU3BhY2luZzogJy0xLjVweCcsXG4gICAgICBjb2xvcjogJyMwRjIxMzcnLFxuICAgIH0sXG4gICAgbXV0ZWQ6IHtcbiAgICAgIGxpbmVIZWlnaHQ6ICcyNnB4JyxcbiAgICAgIGNvbG9yOiAnbXV0ZWQnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBjb2xvcjogJyMwMEE5OUQnLFxuICAgICAgbGluZUhlaWdodDogJzQwcHgnLFxuICAgIH0sXG4gIH0sXG4gIGxpbmtzOiB7XG4gICAgZGVmYXVsdDoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgfSxcbiAgICBib2xkOiB7XG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgfSxcbiAgICBuYXY6IHtcbiAgICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcbiAgICAgIHB4OiAyNSxcbiAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIH0sXG4gICAgYmxvZzoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHB4OiAwLFxuICAgICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgdHJhbnNpdGlvbjogJ2NvbG9yIDAuMjVzJyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHB4OiAwLFxuICAgICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgfSxcbiAgICBsb2dvOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgfSxcbiAgfSxcbiAgaW1hZ2VzOiB7XG4gICAgYXZhdGFyOiB7XG4gICAgICB3aWR0aDogNDgsXG4gICAgICBoZWlnaHQ6IDQ4LFxuICAgICAgYm9yZGVyUmFkaXVzOiA5OTk5OSxcbiAgICB9LFxuICB9LFxuICAvLyB2YXJpYW50cyBmb3IgYnV0dG9uc1xuICBidXR0b25zOiB7XG4gICAgbWVudToge1xuICAgICAgZGlzcGxheTogW251bGwsIG51bGwsICdub25lJ10sXG4gICAgfSwgLy8gZGVmYXVsdCB2YXJpYW50IGZvciBNZW51QnV0dG9uXG4gICAgLy8geW91IGNhbiByZWZlcmVuY2Ugb3RoZXIgdmFsdWVzIGRlZmluZWQgaW4gdGhlIHRoZW1lXG4gICAgZGVmYXVsdEJ0bjoge1xuICAgICAgYm9yZGVyUmFkaXVzOiAnNDVweCcsXG4gICAgICBmb250U2l6ZTogWycxNHB4JywgbnVsbCwgbnVsbCwgMl0sXG4gICAgICBsZXR0ZXJTcGFjaW5nczogJy0wLjE1cHgnLFxuICAgICAgcGFkZGluZzogWycxMnB4IDIwcHgnLCBudWxsLCAnMTVweCAzMHB4J10sXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIG91dGxpbmU6IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcHJpbWFyeToge1xuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIGJnOiAncHJpbWFyeScsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYm94U2hhZG93OiAncmdiYSgyMzMsIDc2LCA4NCwgMC41NykgMHB4IDlweCAyMHB4IC01cHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHdoaXRlQnV0dG9uOiB7XG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxuICAgICAgYmc6ICd3aGl0ZScsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYm94U2hhZG93OiAncmdiYSgwLCAwLCAwLCAwLjUpIDBweCAxMnB4IDI0cHggLTEwcHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXG4gICAgICBib3JkZXI6ICcycHggc29saWQnLFxuICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICBiZzogJ3RyYW5zcGFyZW50JyxcbiAgICAgIHBhZGRpbmc6IFsnMTBweCAxNXB4JywgbnVsbCwgJzE1cHggMzBweCddLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICBiZzogJ3ByaW1hcnknLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHRleHRCdXR0b246IHtcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIHN2Zzoge1xuICAgICAgICBmb250U2l6ZTogWzQsIDZdLFxuICAgICAgICBtcjogMixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgY2FyZHM6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBwYWRkaW5nOiAyLFxuICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgIH0sXG4gICAgb2ZmZXI6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBmbGV4OiBbJzEgMSBjYWxjKDUwJSAtIDE2cHgpJywgJzEgMSAyMCUnXSxcbiAgICAgIG1pbkhlaWdodDogMTMwLFxuICAgICAgbTogMixcbiAgICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjRURFRkY2JyxcbiAgICAgIGJvcmRlclJhZGl1czogNSxcbiAgICB9LFxuICAgIGZlYXR1cmVDYXJkOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgIHA6IDMsXG4gICAgfSxcbiAgfSxcbiAgZm9ybXM6IHtcbiAgICBsYWJlbDoge1xuICAgICAgZm9udFNpemU6IDEsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgfSxcbiAgICBpbnB1dDoge1xuICAgICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgICAgYm9yZGVyQ29sb3I6ICdib3JkZXJfY29sb3InLFxuICAgICAgaGVpZ2h0OiA2MCxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnknLFxuICAgICAgICBib3hTaGFkb3c6ICh0KSA9PiBgMCAwIDAgMnB4ICR7dC5jb2xvcnMucHJpbWFyeX1gLFxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgYmFkZ2VzOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgY29sb3I6ICdiYWNrZ3JvdW5kJyxcbiAgICAgIGJnOiAnIzI4QTVGRicsXG4gICAgICBib3JkZXJSYWRpdXM6IDMwLFxuICAgICAgcDogJzNweCAxMXB4JyxcbiAgICAgIGZvbnRTaXplOiAxLFxuICAgICAgbGV0dGVyU3BhY2luZzogJy0wLjVweCcsXG4gICAgfSxcbiAgICBvdXRsaW5lOiB7XG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXG4gICAgICBib3hTaGFkb3c6ICdpbnNldCAwIDAgMCAxcHgnLFxuICAgIH0sXG4gIH0sXG5cbiAgc3R5bGVzOiB7XG4gICAgLy8gVG8gYWRkIGJhc2UsIHRvcC1sZXZlbCBzdHlsZXMgdG8gdGhlIDxib2R5PiBlbGVtZW50LCB1c2UgdGhlbWUuc3R5bGVzLnJvb3QuXG4gICAgcm9vdDoge1xuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxuICAgICAgbGluZUhlaWdodDogJ2JvZHknLFxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxuICAgICAgZm9udFNtb290aGluZzogJ2FudGlhbGlhc2VkJyxcbiAgICAgIC8vIE1vZGFsIEdsb2JhbCBTdHlsZVxuICAgICAgJy5tb2RhbC12aWRlby1jbG9zZS1idG4nOiB7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgfSxcbiAgICAgICcubW9kYWwtdmlkZW8tbW92aWUtd3JhcCc6IHtcbiAgICAgICAgbWFyZ2luOiA2LFxuICAgICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIERpdmlkZXIgc3R5bGVzXG4gICAgaHI6IHtcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCcsXG4gICAgICBib3JkZXJDb2xvcjogJyNEOUUwRTcnLFxuICAgIH0sXG4gICAgLy8gYWxzbyB5b3UgY2FuIHVzZSBvdGhlciBIVE1MIGVsZW1lbnRzIHN0eWxlIGhlcmVcbiAgICB1bDoge1xuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgfSxcbiAgICBzck9ubHk6IHtcbiAgICAgIGJvcmRlcjogJzAgIWltcG9ydGFudCcsXG4gICAgICBjbGlwOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpICFpbXBvcnRhbnQnLFxuICAgICAgY2xpcFBhdGg6ICdpbnNldCg1MCUpICFpbXBvcnRhbnQnLFxuICAgICAgaGVpZ2h0OiAnMXB4ICFpbXBvcnRhbnQnLFxuICAgICAgbWFyZ2luOiAnLTFweCAhaW1wb3J0YW50JyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuICFpbXBvcnRhbnQnLFxuICAgICAgcGFkZGluZzogJzAgIWltcG9ydGFudCcsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlICFpbXBvcnRhbnQnLFxuICAgICAgd2lkdGg6ICcxcHggIWltcG9ydGFudCcsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwICFpbXBvcnRhbnQnLFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==