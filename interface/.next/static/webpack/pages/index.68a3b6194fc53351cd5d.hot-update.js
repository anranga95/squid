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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Mint\": function() { return /* binding */ Mint; }\n/* harmony export */ });\n/* harmony import */ var _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _contracts_useContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contracts/useContract */ \"./src/contracts/useContract.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/anr/Desktop/squid/interface/src/features/mint/mint.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Mint = function Mint() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      totalSupply = _useState[0],\n      setTotalSupply = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      userBalance = _useState2[0],\n      setUserBalance = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      userTokenIds = _useState3[0],\n      setUserTokenIds = _useState3[1];\n\n  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React)(),\n      account = _useWeb3React.account,\n      active = _useWeb3React.active;\n\n  var instance = (0,_contracts_useContract__WEBPACK_IMPORTED_MODULE_4__.useGreeterContract)(active);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (!instance) return;\n    getTotalSupply();\n  }, [instance]);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (!account) return;\n    getUserTokenCount();\n  }, [account]);\n\n  var getTotalSupply = /*#__PURE__*/function () {\n    var _ref = (0,_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var test;\n      return _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return instance.totalSupply();\n\n            case 3:\n              test = _context.sent;\n              setTotalSupply(test.toNumber());\n              _context.next = 10;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }));\n\n    return function getTotalSupply() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var getUserTokenCount = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n      var test;\n      return _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              _context2.next = 3;\n              return instance.balanceOf(account);\n\n            case 3:\n              test = _context2.sent;\n              setUserBalance(test.toNumber());\n              _context2.next = 10;\n              break;\n\n            case 7:\n              _context2.prev = 7;\n              _context2.t0 = _context2[\"catch\"](0);\n              console.error(_context2.t0);\n\n            case 10:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 7]]);\n    }));\n\n    return function getUserTokenCount() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var getUserTokenIds = /*#__PURE__*/function () {\n    var _ref3 = (0,_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n      var test;\n      return _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.prev = 0;\n              _context3.next = 3;\n              return instance.tokensOfOwner(account);\n\n            case 3:\n              test = _context3.sent;\n              console.log(test);\n              _context3.next = 10;\n              break;\n\n            case 7:\n              _context3.prev = 7;\n              _context3.t0 = _context3[\"catch\"](0);\n              console.error(_context3.t0);\n\n            case 10:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[0, 7]]);\n    }));\n\n    return function getUserTokenIds() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var mintToken = /*#__PURE__*/function () {\n    var _ref4 = (0,_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {\n      var test;\n      return _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.prev = 0;\n              _context4.next = 3;\n              return instance.createCard();\n\n            case 3:\n              test = _context4.sent;\n              _context4.next = 6;\n              return test.wait();\n\n            case 6:\n              _context4.next = 11;\n              break;\n\n            case 8:\n              _context4.prev = 8;\n              _context4.t0 = _context4[\"catch\"](0);\n              console.error(_context4.t0);\n\n            case 11:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4, null, [[0, 8]]);\n    }));\n\n    return function mintToken() {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [active && account && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n      children: [\"You have \", userBalance, \" cards\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 31\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }, _this), userBalance && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n      onClick: getUserTokenIds,\n      children: \"Click to see Ids\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 25\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }, _this), userBalance && userTokenIds.length > 0 && JSON.stringify(userTokenIds), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }, _this), instance && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n      children: [\"There are \", totalSupply, \" cards remaining\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 22\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 14\n    }, _this), instance && account && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n      colorScheme: \"purple\",\n      size: \"lg\",\n      onClick: mintToken,\n      children: \"Mint\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 33\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Mint, \"x8MvFUfcPeZmzXYVxr1ZGWFdBj0=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React, _contracts_useContract__WEBPACK_IMPORTED_MODULE_4__.useGreeterContract];\n});\n\n_c = Mint;\n\nvar _c;\n\n$RefreshReg$(_c, \"Mint\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bWludC50c3g/NmUwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBhYmkgZnJvbSBcIi4vYWJpLmpzb25cIjtcbmltcG9ydCBwY2FiaSBmcm9tIFwiLi9wY2FiaS5qc29uXCI7XG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuaW1wb3J0IHsgdXNlR3JlZXRlckNvbnRyYWN0IH0gZnJvbSBcIi4uLy4uL2NvbnRyYWN0cy91c2VDb250cmFjdFwiO1xuXG5pbXBvcnQgeyBUZXh0LCBCdXR0b24sIEJveCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBNaW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IFt0b3RhbFN1cHBseSwgc2V0VG90YWxTdXBwbHldID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3VzZXJCYWxhbmNlLCBzZXRVc2VyQmFsYW5jZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbdXNlclRva2VuSWRzLCBzZXRVc2VyVG9rZW5JZHNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IHsgYWNjb3VudCwgYWN0aXZlIH0gPSB1c2VXZWIzUmVhY3QoKTtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHVzZUdyZWV0ZXJDb250cmFjdChhY3RpdmUpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoIWluc3RhbmNlKSByZXR1cm47XG4gICAgICAgIGdldFRvdGFsU3VwcGx5KCk7XG4gICAgfSwgW2luc3RhbmNlXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZighYWNjb3VudCkgcmV0dXJuXG4gICAgICAgIGdldFVzZXJUb2tlbkNvdW50KCk7XG4gICAgfSwgW2FjY291bnRdKTtcblxuICAgIGNvbnN0IGdldFRvdGFsU3VwcGx5ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdGVzdCA9IGF3YWl0IGluc3RhbmNlLnRvdGFsU3VwcGx5KCk7XG4gICAgICAgICAgICBzZXRUb3RhbFN1cHBseSh0ZXN0LnRvTnVtYmVyKCkpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRVc2VyVG9rZW5Db3VudCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QgPSBhd2FpdCBpbnN0YW5jZS5iYWxhbmNlT2YoYWNjb3VudCk7XG4gICAgICAgICAgICBzZXRVc2VyQmFsYW5jZSh0ZXN0LnRvTnVtYmVyKCkpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRVc2VyVG9rZW5JZHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB0ZXN0ID0gYXdhaXQgaW5zdGFuY2UudG9rZW5zT2ZPd25lcihhY2NvdW50KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlc3QpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbWludFRva2VuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdGVzdCA9IGF3YWl0IGluc3RhbmNlLmNyZWF0ZUNhcmQoKTtcbiAgICAgICAgICAgIGF3YWl0IHRlc3Qud2FpdCgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAge2FjdGl2ZSAmJiBhY2NvdW50ICYmIDxUZXh0PllvdSBoYXZlIHt1c2VyQmFsYW5jZX0gY2FyZHM8L1RleHQ+fVxuICAgICAgICA8YnIvPlxuICAgICAgICB7dXNlckJhbGFuY2UgJiYgPEJveCBvbkNsaWNrPXtnZXRVc2VyVG9rZW5JZHN9PkNsaWNrIHRvIHNlZSBJZHM8L0JveD59XG4gICAgICAgIDxici8+XG4gICAgICAgIHt1c2VyQmFsYW5jZSAmJiB1c2VyVG9rZW5JZHMubGVuZ3RoID4gMCAmJiBKU09OLnN0cmluZ2lmeSh1c2VyVG9rZW5JZHMpfVxuICAgICAgICA8YnIvPlxuICAgICAgICB7aW5zdGFuY2UgJiYgPFRleHQ+VGhlcmUgYXJlIHt0b3RhbFN1cHBseX0gY2FyZHMgcmVtYWluaW5nPC9UZXh0Pn1cbiAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICB7aW5zdGFuY2UgJiYgYWNjb3VudCAmJiA8QnV0dG9uIGNvbG9yU2NoZW1lPVwicHVycGxlXCIgc2l6ZT1cImxnXCIgb25DbGljaz17bWludFRva2VufT5NaW50PC9CdXR0b24+fVxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlV2ViM1JlYWN0IiwidXNlR3JlZXRlckNvbnRyYWN0IiwiVGV4dCIsIkJ1dHRvbiIsIkJveCIsIk1pbnQiLCJ0b3RhbFN1cHBseSIsInNldFRvdGFsU3VwcGx5IiwidXNlckJhbGFuY2UiLCJzZXRVc2VyQmFsYW5jZSIsInVzZXJUb2tlbklkcyIsInNldFVzZXJUb2tlbklkcyIsImFjY291bnQiLCJhY3RpdmUiLCJpbnN0YW5jZSIsImdldFRvdGFsU3VwcGx5IiwiZ2V0VXNlclRva2VuQ291bnQiLCJ0ZXN0IiwidG9OdW1iZXIiLCJjb25zb2xlIiwiZXJyb3IiLCJiYWxhbmNlT2YiLCJnZXRVc2VyVG9rZW5JZHMiLCJ0b2tlbnNPZk93bmVyIiwibG9nIiwibWludFRva2VuIiwiY3JlYXRlQ2FyZCIsIndhaXQiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/mint/mint.tsx\n");

/***/ })

});