/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./hooks/useSecurity.js":
/*!******************************!*\
  !*** ./hooks/useSecurity.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3_eth_contract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3-eth-contract */ \"./node_modules/web3-eth-contract/lib/index.js\");\n/* harmony import */ var web3_eth_contract__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3_eth_contract__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _build_contracts_SocialSecurity_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../build/contracts/SocialSecurity.json */ \"./build/contracts/SocialSecurity.json\");\n/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useWeb3 */ \"./hooks/useWeb3.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar useSecurity = function useSecurity(address) {\n  _s();\n\n  var web3 = (0,_useWeb3__WEBPACK_IMPORTED_MODULE_5__.default)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),\n      contract = _useState[0],\n      setContract = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      changed = _useState2[0],\n      setChanged = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (address) {\n      web3_eth_contract__WEBPACK_IMPORTED_MODULE_3___default().setProvider(web3.givenProvider);\n      setContract(new (web3_eth_contract__WEBPACK_IMPORTED_MODULE_3___default())(_build_contracts_SocialSecurity_json__WEBPACK_IMPORTED_MODULE_4__.abi, address));\n      setChanged(true);\n      console.log(\"SOCIAL SECURITY ADDRESS\", address);\n    } else {\n      console.log(\"SOCIAL SECURITY ADDRESS NOT SET\");\n    }\n  }, [address]);\n\n  var getField = /*#__PURE__*/function () {\n    var _ref = (0,_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(field) {\n      return _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!changed) {\n                _context.next = 4;\n                break;\n              }\n\n              _context.next = 3;\n              return contract.methods[field]().call();\n\n            case 3:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 4:\n              return _context.abrupt(\"return\", false);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getField(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var sendTx = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(field, wallet) {\n      var _contract$methods,\n          _len,\n          rest,\n          _key,\n          _args2 = arguments;\n\n      return _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              if (!contract) {\n                _context2.next = 5;\n                break;\n              }\n\n              for (_len = _args2.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n                rest[_key - 2] = _args2[_key];\n              }\n\n              _context2.next = 4;\n              return (_contract$methods = contract.methods)[field].apply(_contract$methods, rest).send({\n                from: wallet,\n                to: address\n              });\n\n            case 4:\n              return _context2.abrupt(\"return\", _context2.sent);\n\n            case 5:\n              return _context2.abrupt(\"return\", false);\n\n            case 6:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function sendTx(_x2, _x3) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return [contract.methods, web3, getField, sendTx];\n};\n\n_s(useSecurity, \"v7Umq2WM90RmwHSRE0DFtSxEWJ4=\", false, function () {\n  return [_useWeb3__WEBPACK_IMPORTED_MODULE_5__.default];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useSecurity);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlU2VjdXJpdHkuanM/OTM4YiJdLCJuYW1lcyI6WyJ1c2VTZWN1cml0eSIsImFkZHJlc3MiLCJ3ZWIzIiwidXNlV2ViMyIsInVzZVN0YXRlIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsImNoYW5nZWQiLCJzZXRDaGFuZ2VkIiwidXNlRWZmZWN0IiwiQ29udHJhY3QiLCJnaXZlblByb3ZpZGVyIiwiU1NlY3VyaXR5IiwiY29uc29sZSIsImxvZyIsImdldEZpZWxkIiwiZmllbGQiLCJtZXRob2RzIiwiY2FsbCIsInNlbmRUeCIsIndhbGxldCIsInJlc3QiLCJzZW5kIiwiZnJvbSIsInRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsT0FBRCxFQUFhO0FBQUE7O0FBQy9CLE1BQU1DLElBQUksR0FBR0MsaURBQU8sRUFBcEI7O0FBRCtCLGtCQUVDQywrQ0FBUSxDQUFDLEVBQUQsQ0FGVDtBQUFBLE1BRXhCQyxRQUZ3QjtBQUFBLE1BRWRDLFdBRmM7O0FBQUEsbUJBR0RGLCtDQUFRLENBQUMsS0FBRCxDQUhQO0FBQUEsTUFHeEJHLE9BSHdCO0FBQUEsTUFHZkMsVUFIZTs7QUFLL0JDLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlSLE9BQUosRUFBYTtBQUNYUywwRUFBQSxDQUFxQlIsSUFBSSxDQUFDUyxhQUExQjtBQUNBTCxpQkFBVyxDQUFDLElBQUlJLDBEQUFKLENBQWFFLHFFQUFiLEVBQTRCWCxPQUE1QixDQUFELENBQVg7QUFDQU8sZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQUssYUFBTyxDQUFDQyxHQUFSLENBQVkseUJBQVosRUFBdUNiLE9BQXZDO0FBQ0QsS0FMRCxNQUtPO0FBQ0xZLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGlDQUFaO0FBQ0Q7QUFDRixHQVRRLEVBU04sQ0FBQ2IsT0FBRCxDQVRNLENBQVQ7O0FBV0EsTUFBTWMsUUFBUTtBQUFBLG1UQUFHLGlCQUFNQyxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDWFQsT0FEVztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQUVBRixRQUFRLENBQUNZLE9BQVQsQ0FBaUJELEtBQWpCLElBQTBCRSxJQUExQixFQUZBOztBQUFBO0FBQUE7O0FBQUE7QUFBQSwrQ0FJUixLQUpROztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJILFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFPQSxNQUFNSSxNQUFNO0FBQUEsb1RBQUcsa0JBQU1ILEtBQU4sRUFBYUksTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDVGYsUUFEUztBQUFBO0FBQUE7QUFBQTs7QUFBQSx5Q0FBd0JnQixJQUF4QjtBQUF3QkEsb0JBQXhCO0FBQUE7O0FBQUE7QUFBQSxxQkFFRSxxQkFBQWhCLFFBQVEsQ0FBQ1ksT0FBVCxFQUFpQkQsS0FBakIsMkJBQTJCSyxJQUEzQixFQUFpQ0MsSUFBakMsQ0FBc0M7QUFBRUMsb0JBQUksRUFBRUgsTUFBUjtBQUFnQkksa0JBQUUsRUFBRXZCO0FBQXBCLGVBQXRDLENBRkY7O0FBQUE7QUFBQTs7QUFBQTtBQUFBLGdEQUlOLEtBSk07O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBTmtCLE1BQU07QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUFPQSxTQUFPLENBQUNkLFFBQVEsQ0FBQ1ksT0FBVixFQUFtQmYsSUFBbkIsRUFBeUJhLFFBQXpCLEVBQW1DSSxNQUFuQyxDQUFQO0FBQ0QsQ0EvQkQ7O0dBQU1uQixXO1VBQ1NHLDZDOzs7QUFnQ2YsK0RBQWVILFdBQWYiLCJmaWxlIjoiLi9ob29rcy91c2VTZWN1cml0eS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDb250cmFjdCBmcm9tICd3ZWIzLWV0aC1jb250cmFjdCdcbmltcG9ydCBTU2VjdXJpdHkgZnJvbSAnLi4vYnVpbGQvY29udHJhY3RzL1NvY2lhbFNlY3VyaXR5Lmpzb24nXG5pbXBvcnQgdXNlV2ViMyBmcm9tICcuL3VzZVdlYjMnXG5cbmNvbnN0IHVzZVNlY3VyaXR5ID0gKGFkZHJlc3MpID0+IHtcbiAgY29uc3Qgd2ViMyA9IHVzZVdlYjMoKVxuICBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlKHt9KVxuICBjb25zdCBbY2hhbmdlZCwgc2V0Q2hhbmdlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhZGRyZXNzKSB7XG4gICAgICBDb250cmFjdC5zZXRQcm92aWRlcih3ZWIzLmdpdmVuUHJvdmlkZXIpXG4gICAgICBzZXRDb250cmFjdChuZXcgQ29udHJhY3QoU1NlY3VyaXR5LmFiaSwgYWRkcmVzcykpXG4gICAgICBzZXRDaGFuZ2VkKHRydWUpXG4gICAgICBjb25zb2xlLmxvZyhcIlNPQ0lBTCBTRUNVUklUWSBBRERSRVNTXCIsIGFkZHJlc3MpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU09DSUFMIFNFQ1VSSVRZIEFERFJFU1MgTk9UIFNFVFwiKVxuICAgIH1cbiAgfSwgW2FkZHJlc3NdKVxuXG4gIGNvbnN0IGdldEZpZWxkID0gYXN5bmMoZmllbGQpID0+IHtcbiAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgcmV0dXJuIGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHNbZmllbGRdKCkuY2FsbCgpXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29uc3Qgc2VuZFR4ID0gYXN5bmMoZmllbGQsIHdhbGxldCwgLi4ucmVzdCkgPT4ge1xuICAgIGlmIChjb250cmFjdCkge1xuICAgICAgcmV0dXJuIGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHNbZmllbGRdKC4uLnJlc3QpLnNlbmQoeyBmcm9tOiB3YWxsZXQsIHRvOiBhZGRyZXNzIH0pXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIFtjb250cmFjdC5tZXRob2RzLCB3ZWIzLCBnZXRGaWVsZCwgc2VuZFR4XVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VTZWN1cml0eVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useSecurity.js\n");

/***/ })

});