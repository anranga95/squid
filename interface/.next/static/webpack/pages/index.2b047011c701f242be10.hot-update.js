"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/features/mint/mint.tsx":
/*!************************************!*\
  !*** ./src/features/mint/mint.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Mint\": function() { return /* binding */ Mint; }\n/* harmony export */ });\n/* harmony import */ var _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _contracts_useContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contracts/useContract */ \"./src/contracts/useContract.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/anr/Desktop/squid/interface/src/features/mint/mint.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Mint = function Mint() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      totalSupply = _useState[0],\n      setTotalSupply = _useState[1];\n\n  var instance = (0,_contracts_useContract__WEBPACK_IMPORTED_MODULE_4__.useGreeterContract)();\n\n  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React)(),\n      account = _useWeb3React.account,\n      active = _useWeb3React.active;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var doAsync = /*#__PURE__*/function () {\n      var _ref = (0,_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        return _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                console.log('in mint', instance);\n\n                if (instance) {\n                  _context.next = 3;\n                  break;\n                }\n\n                return _context.abrupt(\"return\");\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function doAsync() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    doAsync();\n  }, [instance]);\n\n  var getTotalSupply = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n      var test;\n      return _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              _context2.next = 3;\n              return instance.totalSupply();\n\n            case 3:\n              test = _context2.sent;\n              setTotalSupply(test.toNumber());\n              _context2.next = 10;\n              break;\n\n            case 7:\n              _context2.prev = 7;\n              _context2.t0 = _context2[\"catch\"](0);\n              console.error(_context2.t0);\n\n            case 10:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 7]]);\n    }));\n\n    return function getTotalSupply() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var mintToken = /*#__PURE__*/function () {\n    var _ref3 = (0,_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n      var test;\n      return _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.prev = 0;\n              _context3.next = 3;\n              return instance.createCard();\n\n            case 3:\n              test = _context3.sent;\n              _context3.next = 6;\n              return test.wait();\n\n            case 6:\n              _context3.next = 11;\n              break;\n\n            case 8:\n              _context3.prev = 8;\n              _context3.t0 = _context3[\"catch\"](0);\n              console.error(_context3.t0);\n\n            case 11:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[0, 8]]);\n    }));\n\n    return function mintToken() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [active && account && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n      children: [\"You have \", \" cards\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 31\n    }, _this), instance && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n      children: [\"There are \", totalSupply, \" cards remaining\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 22\n    }, _this), instance && account && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n      onClick: mintToken,\n      children: \"Mint\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 33\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Mint, \"FJmLcjJXhJWVUTy1Z0spF9GIk54=\", false, function () {\n  return [_contracts_useContract__WEBPACK_IMPORTED_MODULE_4__.useGreeterContract, _web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React];\n});\n\n_c = Mint;\n\nvar _c;\n\n$RefreshReg$(_c, \"Mint\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvbWludC9taW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFHQTtBQUNBO0FBRUE7OztBQUVPLElBQU1NLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDdEIsa0JBQXNDTCwrQ0FBUSxDQUFDLENBQUQsQ0FBOUM7QUFBQSxNQUFPTSxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLE1BQU1DLFFBQVEsR0FBR04sMEVBQWtCLEVBQW5DOztBQUNBLHNCQUEyQkQsOERBQVksRUFBdkM7QUFBQSxNQUFPUSxPQUFQLGlCQUFPQSxPQUFQO0FBQUEsTUFBZ0JDLE1BQWhCLGlCQUFnQkEsTUFBaEI7O0FBRUFYLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1ZLE9BQU87QUFBQSw2VEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1pDLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCTCxRQUF2Qjs7QUFEWSxvQkFFUkEsUUFGUTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFQRyxPQUFPO0FBQUE7QUFBQTtBQUFBLE9BQWI7O0FBS0FBLElBQUFBLE9BQU87QUFDVixHQVBRLEVBT04sQ0FBQ0gsUUFBRCxDQVBNLENBQVQ7O0FBU0EsTUFBTU0sY0FBYztBQUFBLDRUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFSU4sUUFBUSxDQUFDRixXQUFULEVBRko7O0FBQUE7QUFFVFMsY0FBQUEsSUFGUztBQUdmUixjQUFBQSxjQUFjLENBQUNRLElBQUksQ0FBQ0MsUUFBTCxFQUFELENBQWQ7QUFIZTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtmSixjQUFBQSxPQUFPLENBQUNLLEtBQVI7O0FBTGU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZEgsY0FBYztBQUFBO0FBQUE7QUFBQSxLQUFwQjs7QUFTQSxNQUFNSSxTQUFTO0FBQUEsNFRBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVTVixRQUFRLENBQUNXLFVBQVQsRUFGVDs7QUFBQTtBQUVKSixjQUFBQSxJQUZJO0FBQUE7QUFBQSxxQkFHSkEsSUFBSSxDQUFDSyxJQUFMLEVBSEk7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtWUixjQUFBQSxPQUFPLENBQUNLLEtBQVI7O0FBTFU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVEMsU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmOztBQVNBLHNCQUNJO0FBQUEsZUFDQ1IsTUFBTSxJQUFJRCxPQUFWLGlCQUFxQiw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUR0QixFQUVDRCxRQUFRLGlCQUFJLDhEQUFDLGtEQUFEO0FBQUEsK0JBQWlCRixXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGYixFQUdDRSxRQUFRLElBQUlDLE9BQVosaUJBQXVCLDhEQUFDLG9EQUFEO0FBQVEsYUFBTyxFQUFFUyxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUh4QjtBQUFBLGtCQURKO0FBT0gsQ0F2Q007O0dBQU1iO1VBRVFILHdFQUNVRDs7O0tBSGxCSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvbWludC9taW50LnRzeD82ZTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGFiaSBmcm9tIFwiLi9hYmkuanNvblwiO1xuaW1wb3J0IHBjYWJpIGZyb20gXCIuL3BjYWJpLmpzb25cIjtcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCI7XG5pbXBvcnQgeyB1c2VHcmVldGVyQ29udHJhY3QgfSBmcm9tIFwiLi4vLi4vY29udHJhY3RzL3VzZUNvbnRyYWN0XCI7XG5cbmltcG9ydCB7IFRleHQsIEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBNaW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IFt0b3RhbFN1cHBseSwgc2V0VG90YWxTdXBwbHldID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB1c2VHcmVldGVyQ29udHJhY3QoKTtcbiAgICBjb25zdCB7YWNjb3VudCwgYWN0aXZlIH0gPSB1c2VXZWIzUmVhY3QoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvQXN5bmMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW4gbWludCcsIGluc3RhbmNlKTtcbiAgICAgICAgICAgIGlmKCFpbnN0YW5jZSkgcmV0dXJuO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZG9Bc3luYygpXG4gICAgfSwgW2luc3RhbmNlXSk7XG5cbiAgICBjb25zdCBnZXRUb3RhbFN1cHBseSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QgPSBhd2FpdCBpbnN0YW5jZS50b3RhbFN1cHBseSgpO1xuICAgICAgICAgICAgc2V0VG90YWxTdXBwbHkodGVzdC50b051bWJlcigpKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbWludFRva2VuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdGVzdCA9IGF3YWl0IGluc3RhbmNlLmNyZWF0ZUNhcmQoKTtcbiAgICAgICAgICAgIGF3YWl0IHRlc3Qud2FpdCgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAge2FjdGl2ZSAmJiBhY2NvdW50ICYmIDxUZXh0PllvdSBoYXZlIHt9IGNhcmRzPC9UZXh0Pn1cbiAgICAgICAge2luc3RhbmNlICYmIDxUZXh0PlRoZXJlIGFyZSB7dG90YWxTdXBwbHl9IGNhcmRzIHJlbWFpbmluZzwvVGV4dD59XG4gICAgICAgIHtpbnN0YW5jZSAmJiBhY2NvdW50ICYmIDxCdXR0b24gb25DbGljaz17bWludFRva2VufT5NaW50PC9CdXR0b24+fVxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlV2ViM1JlYWN0IiwidXNlR3JlZXRlckNvbnRyYWN0IiwiVGV4dCIsIkJ1dHRvbiIsIk1pbnQiLCJ0b3RhbFN1cHBseSIsInNldFRvdGFsU3VwcGx5IiwiaW5zdGFuY2UiLCJhY2NvdW50IiwiYWN0aXZlIiwiZG9Bc3luYyIsImNvbnNvbGUiLCJsb2ciLCJnZXRUb3RhbFN1cHBseSIsInRlc3QiLCJ0b051bWJlciIsImVycm9yIiwibWludFRva2VuIiwiY3JlYXRlQ2FyZCIsIndhaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/features/mint/mint.tsx\n");

/***/ })

});