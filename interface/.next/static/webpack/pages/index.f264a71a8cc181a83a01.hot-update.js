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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Mint\": function() { return /* binding */ Mint; }\n/* harmony export */ });\n/* harmony import */ var _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _contracts_useContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contracts/useContract */ \"./src/contracts/useContract.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/anr/Desktop/squid/interface/src/features/mint/mint.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Mint = function Mint() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      totalSupply = _useState[0],\n      setTotalSupply = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      userBalance = _useState2[0],\n      setUserBalance = _useState2[1];\n\n  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React)(),\n      account = _useWeb3React.account,\n      active = _useWeb3React.active;\n\n  var instance = (0,_contracts_useContract__WEBPACK_IMPORTED_MODULE_4__.useGreeterContract)(active);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    console.log('instance changed', instance);\n    if (!instance) return;\n    getTotalSupply();\n  }, [instance]);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    getUserTokenCount();\n  }, [account]);\n\n  var getTotalSupply = /*#__PURE__*/function () {\n    var _ref = (0,_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var test;\n      return _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return instance.totalSupply();\n\n            case 3:\n              test = _context.sent;\n              setTotalSupply(test.toNumber());\n              _context.next = 10;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }));\n\n    return function getTotalSupply() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var getUserTokenCount = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n      var test;\n      return _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              console.log(account);\n              _context2.next = 4;\n              return instance.balanceOf(account);\n\n            case 4:\n              test = _context2.sent;\n              console.log(test);\n              setUserBalance(test.toNumber());\n              _context2.next = 12;\n              break;\n\n            case 9:\n              _context2.prev = 9;\n              _context2.t0 = _context2[\"catch\"](0);\n              console.error(_context2.t0);\n\n            case 12:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 9]]);\n    }));\n\n    return function getUserTokenCount() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var mintToken = /*#__PURE__*/function () {\n    var _ref3 = (0,_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n      var test;\n      return _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.prev = 0;\n              console.log(instance);\n              _context3.next = 4;\n              return instance.createCard();\n\n            case 4:\n              test = _context3.sent;\n              _context3.next = 7;\n              return test.wait();\n\n            case 7:\n              _context3.next = 12;\n              break;\n\n            case 9:\n              _context3.prev = 9;\n              _context3.t0 = _context3[\"catch\"](0);\n              console.error(_context3.t0);\n\n            case 12:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[0, 9]]);\n    }));\n\n    return function mintToken() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [active && account && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n      children: [\"You have \", userBalance, \" cards\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 31\n    }, _this), instance && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n      children: [\"There are \", totalSupply, \" cards remaining\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 22\n    }, _this), instance && account && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n      onClick: mintToken,\n      children: \"Mint\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 33\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Mint, \"YU8ACyaYKTdSWlgIVw8QAB3Bi1U=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React, _contracts_useContract__WEBPACK_IMPORTED_MODULE_4__.useGreeterContract];\n});\n\n_c = Mint;\n\nvar _c;\n\n$RefreshReg$(_c, \"Mint\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvbWludC9taW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFHQTtBQUNBO0FBRUE7OztBQUVPLElBQU1NLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDdEIsa0JBQXNDTCwrQ0FBUSxDQUFDLENBQUQsQ0FBOUM7QUFBQSxNQUFPTSxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUFzQ1AsK0NBQVEsQ0FBQyxDQUFELENBQTlDO0FBQUEsTUFBT1EsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxzQkFBNEJSLDhEQUFZLEVBQXhDO0FBQUEsTUFBUVMsT0FBUixpQkFBUUEsT0FBUjtBQUFBLE1BQWlCQyxNQUFqQixpQkFBaUJBLE1BQWpCOztBQUNBLE1BQU1DLFFBQVEsR0FBR1YsMEVBQWtCLENBQUNTLE1BQUQsQ0FBbkM7QUFFQVosRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1pjLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQWdDRixRQUFoQztBQUNBLFFBQUcsQ0FBQ0EsUUFBSixFQUFjO0FBQ2RHLElBQUFBLGNBQWM7QUFDakIsR0FKUSxFQUlOLENBQUNILFFBQUQsQ0FKTSxDQUFUO0FBTUFiLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaaUIsSUFBQUEsaUJBQWlCO0FBQ3BCLEdBRlEsRUFFTixDQUFDTixPQUFELENBRk0sQ0FBVDs7QUFJQSxNQUFNSyxjQUFjO0FBQUEsMlRBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVJSCxRQUFRLENBQUNOLFdBQVQsRUFGSjs7QUFBQTtBQUVUVyxjQUFBQSxJQUZTO0FBR2ZWLGNBQUFBLGNBQWMsQ0FBQ1UsSUFBSSxDQUFDQyxRQUFMLEVBQUQsQ0FBZDtBQUhlO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBS2ZMLGNBQUFBLE9BQU8sQ0FBQ00sS0FBUjs7QUFMZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFkSixjQUFjO0FBQUE7QUFBQTtBQUFBLEtBQXBCOztBQVNBLE1BQU1DLGlCQUFpQjtBQUFBLDRUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWxCSCxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosT0FBWjtBQUZrQjtBQUFBLHFCQUdDRSxRQUFRLENBQUNRLFNBQVQsQ0FBbUJWLE9BQW5CLENBSEQ7O0FBQUE7QUFHWk8sY0FBQUEsSUFIWTtBQUlsQkosY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlHLElBQVo7QUFDQVIsY0FBQUEsY0FBYyxDQUFDUSxJQUFJLENBQUNDLFFBQUwsRUFBRCxDQUFkO0FBTGtCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBT2xCTCxjQUFBQSxPQUFPLENBQUNNLEtBQVI7O0FBUGtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWpCSCxpQkFBaUI7QUFBQTtBQUFBO0FBQUEsS0FBdkI7O0FBV0EsTUFBTUssU0FBUztBQUFBLDRUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVZSLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBRlU7QUFBQSxxQkFHU0EsUUFBUSxDQUFDVSxVQUFULEVBSFQ7O0FBQUE7QUFHSkwsY0FBQUEsSUFISTtBQUFBO0FBQUEscUJBSUpBLElBQUksQ0FBQ00sSUFBTCxFQUpJOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFNVlYsY0FBQUEsT0FBTyxDQUFDTSxLQUFSOztBQU5VO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVRFLFNBQVM7QUFBQTtBQUFBO0FBQUEsS0FBZjs7QUFVQSxzQkFDSTtBQUFBLGVBQ0NWLE1BQU0sSUFBSUQsT0FBVixpQkFBcUIsOERBQUMsa0RBQUQ7QUFBQSw4QkFBZ0JGLFdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUR0QixFQUVDSSxRQUFRLGlCQUFJLDhEQUFDLGtEQUFEO0FBQUEsK0JBQWlCTixXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGYixFQUdDTSxRQUFRLElBQUlGLE9BQVosaUJBQXVCLDhEQUFDLG9EQUFEO0FBQVEsYUFBTyxFQUFFVyxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUh4QjtBQUFBLGtCQURKO0FBT0gsQ0FyRE07O0dBQU1oQjtVQUdtQkosNERBQ1hDOzs7S0FKUkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL21pbnQvbWludC50c3g/NmUwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBhYmkgZnJvbSBcIi4vYWJpLmpzb25cIjtcbmltcG9ydCBwY2FiaSBmcm9tIFwiLi9wY2FiaS5qc29uXCI7XG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuaW1wb3J0IHsgdXNlR3JlZXRlckNvbnRyYWN0IH0gZnJvbSBcIi4uLy4uL2NvbnRyYWN0cy91c2VDb250cmFjdFwiO1xuXG5pbXBvcnQgeyBUZXh0LCBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgTWludCA9ICgpID0+IHtcbiAgICBjb25zdCBbdG90YWxTdXBwbHksIHNldFRvdGFsU3VwcGx5XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFt1c2VyQmFsYW5jZSwgc2V0VXNlckJhbGFuY2VdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgeyBhY2NvdW50LCBhY3RpdmUgfSA9IHVzZVdlYjNSZWFjdCgpO1xuICAgIGNvbnN0IGluc3RhbmNlID0gdXNlR3JlZXRlckNvbnRyYWN0KGFjdGl2ZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnaW5zdGFuY2UgY2hhbmdlZCcsIGluc3RhbmNlKTtcbiAgICAgICAgaWYoIWluc3RhbmNlKSByZXR1cm47XG4gICAgICAgIGdldFRvdGFsU3VwcGx5KCk7XG4gICAgfSwgW2luc3RhbmNlXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRVc2VyVG9rZW5Db3VudCgpO1xuICAgIH0sIFthY2NvdW50XSk7XG5cbiAgICBjb25zdCBnZXRUb3RhbFN1cHBseSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QgPSBhd2FpdCBpbnN0YW5jZS50b3RhbFN1cHBseSgpO1xuICAgICAgICAgICAgc2V0VG90YWxTdXBwbHkodGVzdC50b051bWJlcigpKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VXNlclRva2VuQ291bnQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY2NvdW50KTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QgPSBhd2FpdCBpbnN0YW5jZS5iYWxhbmNlT2YoYWNjb3VudCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXN0KTtcbiAgICAgICAgICAgIHNldFVzZXJCYWxhbmNlKHRlc3QudG9OdW1iZXIoKSlcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1pbnRUb2tlbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluc3RhbmNlKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QgPSBhd2FpdCBpbnN0YW5jZS5jcmVhdGVDYXJkKCk7XG4gICAgICAgICAgICBhd2FpdCB0ZXN0LndhaXQoKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIHthY3RpdmUgJiYgYWNjb3VudCAmJiA8VGV4dD5Zb3UgaGF2ZSB7dXNlckJhbGFuY2V9IGNhcmRzPC9UZXh0Pn1cbiAgICAgICAge2luc3RhbmNlICYmIDxUZXh0PlRoZXJlIGFyZSB7dG90YWxTdXBwbHl9IGNhcmRzIHJlbWFpbmluZzwvVGV4dD59XG4gICAgICAgIHtpbnN0YW5jZSAmJiBhY2NvdW50ICYmIDxCdXR0b24gb25DbGljaz17bWludFRva2VufT5NaW50PC9CdXR0b24+fVxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlV2ViM1JlYWN0IiwidXNlR3JlZXRlckNvbnRyYWN0IiwiVGV4dCIsIkJ1dHRvbiIsIk1pbnQiLCJ0b3RhbFN1cHBseSIsInNldFRvdGFsU3VwcGx5IiwidXNlckJhbGFuY2UiLCJzZXRVc2VyQmFsYW5jZSIsImFjY291bnQiLCJhY3RpdmUiLCJpbnN0YW5jZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRUb3RhbFN1cHBseSIsImdldFVzZXJUb2tlbkNvdW50IiwidGVzdCIsInRvTnVtYmVyIiwiZXJyb3IiLCJiYWxhbmNlT2YiLCJtaW50VG9rZW4iLCJjcmVhdGVDYXJkIiwid2FpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/mint/mint.tsx\n");

/***/ })

});