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

/***/ "./src/features/wallet/connect.tsx":
/*!*****************************************!*\
  !*** ./src/features/wallet/connect.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Connect\": function() { return /* binding */ Connect; }\n/* harmony export */ });\n/* harmony import */ var _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _connectors_metamask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connectors/metamask */ \"./src/features/wallet/connectors/metamask.ts\");\n/* harmony import */ var _connectors_wallet_connect_qr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connectors/wallet-connect-qr */ \"./src/features/wallet/connectors/wallet-connect-qr.ts\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/anr/Desktop/squid/interface/src/features/wallet/connect.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Connect = function Connect() {\n  _s();\n\n  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_4__.useWeb3React)(),\n      active = _useWeb3React.active,\n      account = _useWeb3React.account,\n      library = _useWeb3React.library,\n      connector = _useWeb3React.connector,\n      activate = _useWeb3React.activate,\n      deactivate = _useWeb3React.deactivate;\n\n  var _useColorMode = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorMode)(),\n      colorMode = _useColorMode.colorMode;\n\n  var textColor = {\n    light: 'gray.50',\n    dark: 'gray.700'\n  };\n\n  function connect(_x) {\n    return _connect.apply(this, arguments);\n  }\n\n  function _connect() {\n    _connect = (0,_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(provider) {\n      var pro;\n      return _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              pro = provider === 'metamask' ? _connectors_metamask__WEBPACK_IMPORTED_MODULE_2__.metamask : _connectors_wallet_connect_qr__WEBPACK_IMPORTED_MODULE_3__.walletConnect;\n              _context.next = 4;\n              return activate(pro);\n\n            case 4:\n              _context.next = 9;\n              break;\n\n            case 6:\n              _context.prev = 6;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 6]]);\n    }));\n    return _connect.apply(this, arguments);\n  }\n\n  function disconnect() {\n    return _disconnect.apply(this, arguments);\n  }\n\n  function _disconnect() {\n    _disconnect = (0,_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n      return _Users_anr_Desktop_squid_interface_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              try {\n                deactivate();\n              } catch (ex) {\n                console.log(ex);\n              }\n\n            case 1:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _disconnect.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuButton, {\n        as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button,\n        colorScheme: \"pink\",\n        children: active ? 'Welcome!' : 'Connect Wallet'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuList, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {\n          onClick: function onClick() {\n            return connect('metamask');\n          },\n          children: \"Metamask\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {\n          onClick: function onClick() {\n            return connect('walletConnect');\n          },\n          children: \"WalletConnect QR\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n      color: textColor[colorMode],\n      children: active ? \"Address: \".concat(account) : ''\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Connect, \"OcJlKrJpCjHWT9DveEzovrT1cA8=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_4__.useWeb3React, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorMode];\n});\n\n_c = Connect;\n\nvar _c;\n\n$RefreshReg$(_c, \"Connect\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvd2FsbGV0L2Nvbm5lY3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFTyxJQUFNVSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3pCLHNCQUFzRVIsOERBQVksRUFBbEY7QUFBQSxNQUFRUyxNQUFSLGlCQUFRQSxNQUFSO0FBQUEsTUFBZ0JDLE9BQWhCLGlCQUFnQkEsT0FBaEI7QUFBQSxNQUF5QkMsT0FBekIsaUJBQXlCQSxPQUF6QjtBQUFBLE1BQWtDQyxTQUFsQyxpQkFBa0NBLFNBQWxDO0FBQUEsTUFBNkNDLFFBQTdDLGlCQUE2Q0EsUUFBN0M7QUFBQSxNQUF1REMsVUFBdkQsaUJBQXVEQSxVQUF2RDs7QUFDQSxzQkFBc0JSLDhEQUFZLEVBQWxDO0FBQUEsTUFBUVMsU0FBUixpQkFBUUEsU0FBUjs7QUFDQSxNQUFNQyxTQUFTLEdBQUc7QUFBRUMsSUFBQUEsS0FBSyxFQUFFLFNBQVQ7QUFBb0JDLElBQUFBLElBQUksRUFBRTtBQUExQixHQUFsQjs7QUFIeUIsV0FLVkMsT0FMVTtBQUFBO0FBQUE7O0FBQUE7QUFBQSwyVEFLekIsaUJBQXVCQyxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVVQyxjQUFBQSxHQUZWLEdBRWdCRCxRQUFRLEtBQUssVUFBYixHQUEwQnRCLDBEQUExQixHQUFxQ0Msd0VBRnJEO0FBQUE7QUFBQSxxQkFHWWMsUUFBUSxDQUFDUSxHQUFELENBSHBCOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFNTUMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSOztBQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTHlCO0FBQUE7QUFBQTs7QUFBQSxXQWVSQyxVQWZRO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDhUQWV2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0Usa0JBQUk7QUFDRlYsZ0JBQUFBLFVBQVU7QUFDWCxlQUZELENBRUUsT0FBT1csRUFBUCxFQUFXO0FBQ1hILGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsRUFBWjtBQUNEOztBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBZnVCO0FBQUE7QUFBQTs7QUF1QnpCLHNCQUNFO0FBQUEsNEJBQ0EsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRSw4REFBQyx3REFBRDtBQUFZLFVBQUUsRUFBRXhCLG9EQUFoQjtBQUF3QixtQkFBVyxFQUFDLE1BQXBDO0FBQUEsa0JBQ0dRLE1BQU0sR0FBRyxVQUFILEdBQWdCO0FBRHpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFLDhEQUFDLHNEQUFEO0FBQUEsZ0NBQ0UsOERBQUMsc0RBQUQ7QUFBVSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1VLE9BQU8sQ0FBQyxVQUFELENBQWI7QUFBQSxXQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLHNEQUFEO0FBQVUsaUJBQU8sRUFBRTtBQUFBLG1CQUFNQSxPQUFPLENBQUMsZUFBRCxDQUFiO0FBQUEsV0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUFXQSw4REFBQyxrREFBRDtBQUFNLFdBQUssRUFBRUgsU0FBUyxDQUFDRCxTQUFELENBQXRCO0FBQUEsZ0JBQW9DTixNQUFNLHNCQUFlQyxPQUFmLElBQTJCO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYQTtBQUFBLGtCQURGO0FBZUgsQ0F0Q007O0dBQU1GO1VBQzZEUiw0REFDaERNOzs7S0FGYkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL3dhbGxldC9jb25uZWN0LnRzeD80NzQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ldGFtYXNrIH0gZnJvbSAnLi9jb25uZWN0b3JzL21ldGFtYXNrJztcbmltcG9ydCB7IHdhbGxldENvbm5lY3QgfSBmcm9tICcuL2Nvbm5lY3RvcnMvd2FsbGV0LWNvbm5lY3QtcXInO1xuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSc7XG5cbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uR3JvdXAsIE1lbnUsIE1lbnVJY29uLCBNZW51SXRlbSwgTWVudUJ1dHRvbiwgTWVudUxpc3QsIHVzZUNvbG9yTW9kZSwgVGV4dCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5leHBvcnQgY29uc3QgQ29ubmVjdCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGFjdGl2ZSwgYWNjb3VudCwgbGlicmFyeSwgY29ubmVjdG9yLCBhY3RpdmF0ZSwgZGVhY3RpdmF0ZSB9ID0gdXNlV2ViM1JlYWN0KCk7XG4gICAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpXG4gICAgY29uc3QgdGV4dENvbG9yID0geyBsaWdodDogJ2dyYXkuNTAnLCBkYXJrOiAnZ3JheS43MDAnIH07XG5cbiAgICBhc3luYyBmdW5jdGlvbiBjb25uZWN0KHByb3ZpZGVyOiBzdHJpbmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsZXQgcHJvID0gcHJvdmlkZXIgPT09ICdtZXRhbWFzaycgPyBtZXRhbWFzayA6IHdhbGxldENvbm5lY3Q7XG4gICAgICAgICAgYXdhaXQgYWN0aXZhdGUocHJvKVxuICAgICAgICAgIFxuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGV4KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXG4gICAgICBhc3luYyBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGRlYWN0aXZhdGUoKVxuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGV4KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICA8TWVudT5cbiAgICAgICAgPE1lbnVCdXR0b24gYXM9e0J1dHRvbn0gY29sb3JTY2hlbWU9XCJwaW5rXCI+XG4gICAgICAgICAge2FjdGl2ZSA/ICdXZWxjb21lIScgOiAnQ29ubmVjdCBXYWxsZXQnfVxuICAgICAgICA8L01lbnVCdXR0b24+XG4gICAgICAgIDxNZW51TGlzdD5cbiAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gY29ubmVjdCgnbWV0YW1hc2snKX0+TWV0YW1hc2s8L01lbnVJdGVtPlxuICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBjb25uZWN0KCd3YWxsZXRDb25uZWN0Jyl9PldhbGxldENvbm5lY3QgUVI8L01lbnVJdGVtPlxuICAgICAgICA8L01lbnVMaXN0PlxuICAgICAgPC9NZW51PlxuXG4gICAgICA8VGV4dCBjb2xvcj17dGV4dENvbG9yW2NvbG9yTW9kZV19PnthY3RpdmUgPyBgQWRkcmVzczogJHthY2NvdW50fWAgOiAnJ308L1RleHQ+XG4gICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbIm1ldGFtYXNrIiwid2FsbGV0Q29ubmVjdCIsInVzZVdlYjNSZWFjdCIsIkJ1dHRvbiIsIk1lbnUiLCJNZW51SXRlbSIsIk1lbnVCdXR0b24iLCJNZW51TGlzdCIsInVzZUNvbG9yTW9kZSIsIlRleHQiLCJDb25uZWN0IiwiYWN0aXZlIiwiYWNjb3VudCIsImxpYnJhcnkiLCJjb25uZWN0b3IiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJjb2xvck1vZGUiLCJ0ZXh0Q29sb3IiLCJsaWdodCIsImRhcmsiLCJjb25uZWN0IiwicHJvdmlkZXIiLCJwcm8iLCJjb25zb2xlIiwibG9nIiwiZGlzY29ubmVjdCIsImV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/wallet/connect.tsx\n");

/***/ })

});