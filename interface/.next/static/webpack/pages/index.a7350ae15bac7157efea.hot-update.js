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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Mint\": function() { return /* binding */ Mint; }\n/* harmony export */ });\n/* harmony import */ var _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _contracts_useContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contracts/useContract */ \"./src/contracts/useContract.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/anr/Desktop/squid/interface/src/features/mint/mint.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Mint = function Mint() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      totalSupply = _useState[0],\n      setTotalSupply = _useState[1];\n\n  var instance = (0,_contracts_useContract__WEBPACK_IMPORTED_MODULE_4__.useGreeterContract)();\n\n  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React)(),\n      account = _useWeb3React.account,\n      active = _useWeb3React.active;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var doAsync = /*#__PURE__*/function () {\n      var _ref = (0,_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var test;\n        return _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                console.log(instance);\n\n                if (instance) {\n                  _context.next = 3;\n                  break;\n                }\n\n                return _context.abrupt(\"return\");\n\n              case 3:\n                _context.prev = 3;\n                _context.next = 6;\n                return instance.totalSupply();\n\n              case 6:\n                test = _context.sent;\n                console.log(test.toNumber()); // setTotalSupply(test.toNumber())\n\n                _context.next = 13;\n                break;\n\n              case 10:\n                _context.prev = 10;\n                _context.t0 = _context[\"catch\"](3);\n                console.error(_context.t0);\n\n              case 13:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[3, 10]]);\n      }));\n\n      return function doAsync() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    doAsync();\n  }, [instance]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [active && account && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n      children: [\"You have \", \" cards\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 31\n    }, _this), instance && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n      children: [\"There are \", totalSupply, \" cards remaining\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 22\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Mint, \"FJmLcjJXhJWVUTy1Z0spF9GIk54=\", false, function () {\n  return [_contracts_useContract__WEBPACK_IMPORTED_MODULE_4__.useGreeterContract, _web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React];\n});\n\n_c = Mint;\n\nvar _c;\n\n$RefreshReg$(_c, \"Mint\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvbWludC9taW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFHQTtBQUNBO0FBRUE7OztBQUVPLElBQU1LLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDdEIsa0JBQXNDSiwrQ0FBUSxDQUFDLENBQUQsQ0FBOUM7QUFBQSxNQUFPSyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLE1BQU1DLFFBQVEsR0FBR0wsMEVBQWtCLEVBQW5DOztBQUNBLHNCQUEyQkQsOERBQVksRUFBdkM7QUFBQSxNQUFPTyxPQUFQLGlCQUFPQSxPQUFQO0FBQUEsTUFBZ0JDLE1BQWhCLGlCQUFnQkEsTUFBaEI7O0FBRUFWLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1XLE9BQU87QUFBQSw2VEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWkMsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxRQUFaOztBQURZLG9CQUVSQSxRQUZRO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUlXQSxRQUFRLENBQUNGLFdBQVQsRUFKWDs7QUFBQTtBQUlGUSxnQkFBQUEsSUFKRTtBQUtSRixnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQUksQ0FBQ0MsUUFBTCxFQUFaLEVBTFEsQ0FNUjs7QUFOUTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVFSSCxnQkFBQUEsT0FBTyxDQUFDSSxLQUFSOztBQVJRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVBMLE9BQU87QUFBQTtBQUFBO0FBQUEsT0FBYjs7QUFXQUEsSUFBQUEsT0FBTztBQUNWLEdBYlEsRUFhTixDQUFDSCxRQUFELENBYk0sQ0FBVDtBQWdCQSxzQkFDSTtBQUFBLGVBQ0NFLE1BQU0sSUFBSUQsT0FBVixpQkFBcUIsOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEdEIsRUFFQ0QsUUFBUSxpQkFBSSw4REFBQyxrREFBRDtBQUFBLCtCQUFpQkYsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRmI7QUFBQSxrQkFESjtBQU1ILENBM0JNOztHQUFNRDtVQUVRRix3RUFDVUQ7OztLQUhsQkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL21pbnQvbWludC50c3g/NmUwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBhYmkgZnJvbSBcIi4vYWJpLmpzb25cIjtcbmltcG9ydCBwY2FiaSBmcm9tIFwiLi9wY2FiaS5qc29uXCI7XG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuaW1wb3J0IHsgdXNlR3JlZXRlckNvbnRyYWN0IH0gZnJvbSBcIi4uLy4uL2NvbnRyYWN0cy91c2VDb250cmFjdFwiO1xuXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IE1pbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgW3RvdGFsU3VwcGx5LCBzZXRUb3RhbFN1cHBseV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHVzZUdyZWV0ZXJDb250cmFjdCgpO1xuICAgIGNvbnN0IHthY2NvdW50LCBhY3RpdmUgfSA9IHVzZVdlYjNSZWFjdCgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZG9Bc3luYyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluc3RhbmNlKTtcbiAgICAgICAgICAgIGlmKCFpbnN0YW5jZSkgcmV0dXJuO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXN0ID0gYXdhaXQgaW5zdGFuY2UudG90YWxTdXBwbHkoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXN0LnRvTnVtYmVyKCkpO1xuICAgICAgICAgICAgICAgIC8vIHNldFRvdGFsU3VwcGx5KHRlc3QudG9OdW1iZXIoKSlcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRvQXN5bmMoKVxuICAgIH0sIFtpbnN0YW5jZV0pO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICB7YWN0aXZlICYmIGFjY291bnQgJiYgPFRleHQ+WW91IGhhdmUge30gY2FyZHM8L1RleHQ+fVxuICAgICAgICB7aW5zdGFuY2UgJiYgPFRleHQ+VGhlcmUgYXJlIHt0b3RhbFN1cHBseX0gY2FyZHMgcmVtYWluaW5nPC9UZXh0Pn1cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVdlYjNSZWFjdCIsInVzZUdyZWV0ZXJDb250cmFjdCIsIlRleHQiLCJNaW50IiwidG90YWxTdXBwbHkiLCJzZXRUb3RhbFN1cHBseSIsImluc3RhbmNlIiwiYWNjb3VudCIsImFjdGl2ZSIsImRvQXN5bmMiLCJjb25zb2xlIiwibG9nIiwidGVzdCIsInRvTnVtYmVyIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/features/mint/mint.tsx\n");

/***/ })

});