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

/***/ "./src/contracts/useContract.ts":
/*!**************************************!*\
  !*** ./src/contracts/useContract.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useGreeterContract\": function() { return /* binding */ useGreeterContract; }\n/* harmony export */ });\n/* harmony import */ var _localhost_PlayerCard_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localhost/PlayerCard.json */ \"./src/contracts/localhost/PlayerCard.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar useGreeterContract = function useGreeterContract() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      contractInstance = _useState[0],\n      setContractInstance = _useState[1];\n\n  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)(),\n      account = _useWeb3React.account,\n      active = _useWeb3React.active,\n      connector = _useWeb3React.connector,\n      library = _useWeb3React.library; // const deployments = deploymentJson as IDeployment;\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    console.log('contractInstance before' + contractInstance);\n    var provider = ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.getDefaultProvider(\"http://localhost:8545\");\n    var greeter = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(_localhost_PlayerCard_json__WEBPACK_IMPORTED_MODULE_0__.address, _localhost_PlayerCard_json__WEBPACK_IMPORTED_MODULE_0__.abi, provider);\n\n    if (account && library) {\n      greeter.connect(library);\n    }\n\n    setContractInstance(greeter);\n    console.log('contractInstance after' + contractInstance);\n  }, [account]);\n  return contractInstance;\n};\n\n_s(useGreeterContract, \"1+PXM315o+KdqakBcobjMoZOqWE=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udHJhY3RzL3VzZUNvbnRyYWN0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR08sSUFBTUssa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQUE7O0FBQ3RDLGtCQUFnREYsK0NBQVEsQ0FBQyxJQUFELENBQXhEO0FBQUEsTUFBT0csZ0JBQVA7QUFBQSxNQUF5QkMsbUJBQXpCOztBQUNBLHNCQUFnREwsOERBQVksRUFBNUQ7QUFBQSxNQUFRTSxPQUFSLGlCQUFRQSxPQUFSO0FBQUEsTUFBaUJDLE1BQWpCLGlCQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsU0FBekIsaUJBQXlCQSxTQUF6QjtBQUFBLE1BQW9DQyxPQUFwQyxpQkFBb0NBLE9BQXBDLENBRnNDLENBR3RDOzs7QUFFQVAsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RRLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDRCQUE0QlAsZ0JBQXhDO0FBQ0EsUUFBSVEsUUFBUSxHQUFHYiw2REFBQSxDQUEwQix1QkFBMUIsQ0FBZjtBQUNBLFFBQU1lLE9BQU8sR0FBRyxJQUFJZixtREFBSixDQUNaRCwrREFEWSxFQUVaQSwyREFGWSxFQUdaYyxRQUhZLENBQWhCOztBQU1FLFFBQUdOLE9BQU8sSUFBSUcsT0FBZCxFQUF1QjtBQUNyQkssTUFBQUEsT0FBTyxDQUFDSSxPQUFSLENBQWdCVCxPQUFoQjtBQUNEOztBQUNISixJQUFBQSxtQkFBbUIsQ0FBQ1MsT0FBRCxDQUFuQjtBQUNBSixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBMkJQLGdCQUF2QztBQUNELEdBZFEsRUFjTixDQUFDRSxPQUFELENBZE0sQ0FBVDtBQWdCQSxTQUFPRixnQkFBUDtBQUNELENBdEJNOztHQUFNRDtVQUVxQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRyYWN0cy91c2VDb250cmFjdC50cz84ZTI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElEZXBsb3ltZW50IH0gZnJvbSBcIi4vZGVwbG95bWVudC5pbnRlcmZhY2VcIjtcbmltcG9ydCBkZXBsb3ltZW50SnNvbiBmcm9tICcuL2xvY2FsaG9zdC9QbGF5ZXJDYXJkLmpzb24nO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQbGF5ZXJDYXJkIH0gZnJvbSBcIi4vdHlwZWNoYWluL1BsYXllckNhcmRcIjtcblxuZXhwb3J0IGNvbnN0IHVzZUdyZWV0ZXJDb250cmFjdCA9ICgpID0+IHtcbiAgY29uc3QgW2NvbnRyYWN0SW5zdGFuY2UsIHNldENvbnRyYWN0SW5zdGFuY2VdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHsgYWNjb3VudCwgYWN0aXZlLCBjb25uZWN0b3IsIGxpYnJhcnkgfSA9IHVzZVdlYjNSZWFjdCgpO1xuICAvLyBjb25zdCBkZXBsb3ltZW50cyA9IGRlcGxveW1lbnRKc29uIGFzIElEZXBsb3ltZW50O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2NvbnRyYWN0SW5zdGFuY2UgYmVmb3JlJyArIGNvbnRyYWN0SW5zdGFuY2UpO1xuICAgIGxldCBwcm92aWRlciA9IGV0aGVycy5nZXREZWZhdWx0UHJvdmlkZXIoXCJodHRwOi8vbG9jYWxob3N0Ojg1NDVcIik7XG4gICAgY29uc3QgZ3JlZXRlciA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICAgIGRlcGxveW1lbnRKc29uLmFkZHJlc3MsXG4gICAgICAgIGRlcGxveW1lbnRKc29uLmFiaSwgXG4gICAgICAgIHByb3ZpZGVyXG4gICAgICApO1xuICAgIFxuICAgICAgaWYoYWNjb3VudCAmJiBsaWJyYXJ5KSB7XG4gICAgICAgIGdyZWV0ZXIuY29ubmVjdChsaWJyYXJ5KTtcbiAgICAgIH1cbiAgICBzZXRDb250cmFjdEluc3RhbmNlKGdyZWV0ZXIpO1xuICAgIGNvbnNvbGUubG9nKCdjb250cmFjdEluc3RhbmNlIGFmdGVyJyArIGNvbnRyYWN0SW5zdGFuY2UpO1xuICB9LCBbYWNjb3VudF0pO1xuXG4gIHJldHVybiBjb250cmFjdEluc3RhbmNlIGFzIFBsYXllckNhcmQ7XG59Il0sIm5hbWVzIjpbImRlcGxveW1lbnRKc29uIiwiZXRoZXJzIiwidXNlV2ViM1JlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VHcmVldGVyQ29udHJhY3QiLCJjb250cmFjdEluc3RhbmNlIiwic2V0Q29udHJhY3RJbnN0YW5jZSIsImFjY291bnQiLCJhY3RpdmUiLCJjb25uZWN0b3IiLCJsaWJyYXJ5IiwiY29uc29sZSIsImxvZyIsInByb3ZpZGVyIiwiZ2V0RGVmYXVsdFByb3ZpZGVyIiwiZ3JlZXRlciIsIkNvbnRyYWN0IiwiYWRkcmVzcyIsImFiaSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contracts/useContract.ts\n");

/***/ })

});