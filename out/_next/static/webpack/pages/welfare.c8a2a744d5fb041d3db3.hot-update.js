/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/welfare",{

/***/ "./pages/welfare.js":
/*!**************************!*\
  !*** ./pages/welfare.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CommandCenter; }\n/* harmony export */ });\n/* harmony import */ var _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! use-wallet */ \"./node_modules/use-wallet/dist/index.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _layouts_PublicLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layouts/PublicLayout */ \"./layouts/PublicLayout.js\");\n/* harmony import */ var _hooks_useGlobal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useGlobal */ \"./hooks/useGlobal.js\");\n/* harmony import */ var _hooks_useWelfare__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useWelfare */ \"./hooks/useWelfare.js\");\n/* harmony import */ var _hooks_useFree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useFree */ \"./hooks/useFree.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/macbookpro/Dean/welfare/pages/welfare.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Title = antd__WEBPACK_IMPORTED_MODULE_11__.Typography.Title,\n    Text = antd__WEBPACK_IMPORTED_MODULE_11__.Typography.Text;\nvar Item = antd__WEBPACK_IMPORTED_MODULE_11__.Descriptions.Item; // COMMAND CENTER: 0xe73C89DFA51E82e7895b0E9E9B8E9b1b4A91b2b6\n// BONUS: 0xEeCFE0b4c47cb5d61F180d721674a405A86FB53c\n// WELFARE ADDRESS: 0xbEDA6Df7a5bCA914915fb80D13c1b6b32dF8F8ab\n// SOCIAL SECURITY: 0x5d09f5E94f8f2cAb11DB1A7D1C71cdd80E7c0e69\n// FREE TOKENS: 0xb5B8cD15Eac571F3d733e3F4ad01143D1548C6ce\n\nfunction CommandCenter() {\n  _s();\n\n  var _this = this;\n\n  var wallet = (0,use_wallet__WEBPACK_IMPORTED_MODULE_12__.useWallet)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),\n      address = _useState[0],\n      setAddress = _useState[1];\n\n  var _useGlobal = (0,_hooks_useGlobal__WEBPACK_IMPORTED_MODULE_8__.default)(['chain', 'security', 'hasSecurity', 'vault', 'hasVault']),\n      _useGlobal2 = (0,_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useGlobal, 2),\n      state = _useGlobal2[0],\n      actions = _useGlobal2[1];\n\n  var _useWelfare = (0,_hooks_useWelfare__WEBPACK_IMPORTED_MODULE_9__.default)(state.welfare),\n      _useWelfare2 = (0,_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useWelfare, 2),\n      contract = _useWelfare2[0],\n      web3 = _useWelfare2[1];\n\n  var _useFree = (0,_hooks_useFree__WEBPACK_IMPORTED_MODULE_10__.default)('0xb5B8cD15Eac571F3d733e3F4ad01143D1548C6ce'),\n      _useFree2 = (0,_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useFree, 1),\n      free = _useFree2[0];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),\n      show = _useState2[0],\n      setShow = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),\n      data = _useState3[0],\n      setData = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),\n      loading = _useState4[0],\n      setLoading = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    if (wallet.status == 'connected' && state.hasWelfare) {\n      console.log(\"WELFARE\", state);\n    }\n  }, [wallet.status, state.hasWelfare]);\n  var renderActions = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function () {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_11__.Row, {\n      gutter: 20,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_11__.Col, {\n        span: 8,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_11__.Statistic, {\n          title: \"Balance\",\n          value: data.balance\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }, _this);\n  }, [state, wallet]);\n\n  var claimFree = /*#__PURE__*/function () {\n    var _ref = (0,_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n      var tx;\n      return _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              setLoading(true);\n              _context.next = 3;\n              return free.claim('0xbEDA6Df7a5bCA914915fb80D13c1b6b32dF8F8ab', web3.utils.toWei('100000', 'gwei')).send({\n                from: wallet.account,\n                to: '0xb5B8cD15Eac571F3d733e3F4ad01143D1548C6ce'\n              });\n\n            case 3:\n              tx = _context.sent;\n\n              if (tx.status) {\n                antd__WEBPACK_IMPORTED_MODULE_11__.notification.success({\n                  message: 'Claim Successful',\n                  description: tx.transactionHash\n                });\n              }\n\n              setLoading(false);\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function claimFree() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_layouts_PublicLayout__WEBPACK_IMPORTED_MODULE_7__.default, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      style: {\n        padding: \"20px 0px\"\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Title, {\n        level: 2,\n        children: \"Welfare\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this), state.hasWelfare && renderActions()]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CommandCenter, \"ifb4Rj9y8lkrJoknwb4EzstUHF0=\", false, function () {\n  return [use_wallet__WEBPACK_IMPORTED_MODULE_12__.useWallet, _hooks_useGlobal__WEBPACK_IMPORTED_MODULE_8__.default, _hooks_useWelfare__WEBPACK_IMPORTED_MODULE_9__.default, _hooks_useFree__WEBPACK_IMPORTED_MODULE_10__.default];\n});\n\n_c = CommandCenter;\n\nvar _c;\n\n$RefreshReg$(_c, \"CommandCenter\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2VsZmFyZS5qcz83OWMwIl0sIm5hbWVzIjpbIlRpdGxlIiwiVHlwb2dyYXBoeSIsIlRleHQiLCJJdGVtIiwiRGVzY3JpcHRpb25zIiwiQ29tbWFuZENlbnRlciIsIndhbGxldCIsInVzZVdhbGxldCIsInVzZVN0YXRlIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJ1c2VHbG9iYWwiLCJzdGF0ZSIsImFjdGlvbnMiLCJ1c2VXZWxmYXJlIiwid2VsZmFyZSIsImNvbnRyYWN0Iiwid2ViMyIsInVzZUZyZWUiLCJmcmVlIiwic2hvdyIsInNldFNob3ciLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0Iiwic3RhdHVzIiwiaGFzV2VsZmFyZSIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJBY3Rpb25zIiwidXNlQ2FsbGJhY2siLCJiYWxhbmNlIiwiY2xhaW1GcmVlIiwiY2xhaW0iLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJhY2NvdW50IiwidG8iLCJ0eCIsIm5vdGlmaWNhdGlvbiIsIm1lc3NhZ2UiLCJkZXNjcmlwdGlvbiIsInRyYW5zYWN0aW9uSGFzaCIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7SUFFUUEsSyxHQUFnQkMsbUQ7SUFBVEMsSSxHQUFTRCxrRDtJQUNoQkUsSSxHQUFTQyxvRCxFQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNDLGFBQVQsR0FBeUI7QUFBQTs7QUFBQTs7QUFDdEMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFEc0Msa0JBRVJDLCtDQUFRLENBQUMsS0FBRCxDQUZBO0FBQUEsTUFFL0JDLE9BRitCO0FBQUEsTUFFdEJDLFVBRnNCOztBQUFBLG1CQUdiQyx5REFBUyxDQUFD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O0dBakR1QjFCLGE7VUFDUEUsa0QsRUFFVUkscUQsRUFDQUcsc0QsRUFDVkksb0Q7OztLQUxPYixhIiwiZmlsZSI6Ii4vcGFnZXMvd2VsZmFyZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICd1c2Utd2FsbGV0J1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQge1xuICBMYXlvdXQsIE1lbnUsIEJyZWFkY3J1bWIsIFR5cG9ncmFwaHksIFNwYWNlLCBTcGluLCBBbGVydCxcbiAgVGFicywgU3RhdGlzdGljLCBSb3csIENvbCwgQ2FyZCwgU2xpZGVyLCBGb3JtLCBCdXR0b24sIElucHV0LCBEZXNjcmlwdGlvbnMsXG4gIG5vdGlmaWNhdGlvblxufSBmcm9tICdhbnRkJ1xuXG5pbXBvcnQgUHVibGljTGF5b3V0IGZyb20gJy4uL2xheW91dHMvUHVibGljTGF5b3V0J1xuXG5pbXBvcnQgdXNlR2xvYmFsIGZyb20gJy4uL2hvb2tzL3VzZUdsb2JhbCdcbmltcG9ydCB1c2VXZWxmYXJlIGZyb20gJy4uL2hvb2tzL3VzZVdlbGZhcmUnXG5pbXBvcnQgdXNlRnJlZSBmcm9tICcuLi9ob29rcy91c2VGcmVlJ1xuXG5jb25zdCB7IFRpdGxlLCBUZXh0IH0gPSBUeXBvZ3JhcGh5XG5jb25zdCB7IEl0ZW0gfSA9IERlc2NyaXB0aW9uc1xuXG4vLyBDT01NQU5EIENFTlRFUjogMHhlNzNDODlERkE1MUU4MmU3ODk1YjBFOUU5QjhFOWIxYjRBOTFiMmI2XG4vLyBCT05VUzogMHhFZUNGRTBiNGM0N2NiNWQ2MUYxODBkNzIxNjc0YTQwNUE4NkZCNTNjXG4vLyBXRUxGQVJFIEFERFJFU1M6IDB4YkVEQTZEZjdhNWJDQTkxNDkxNWZiODBEMTNjMWI2YjMyZEY4RjhhYlxuLy8gU09DSUFMIFNFQ1VSSVRZOiAweDVkMDlmNUU5NGY4ZjJjQWIxMURCMUE3RDFDNzFjZGQ4MEU3YzBlNjlcbi8vIEZSRUUgVE9LRU5TOiAweGI1QjhjRDE1RWFjNTcxRjNkNzMzZTNGNGFkMDExNDNEMTU0OEM2Y2VcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tbWFuZENlbnRlcigpIHtcbiAgY29uc3Qgd2FsbGV0ID0gdXNlV2FsbGV0KClcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzdGF0ZSwgYWN0aW9uc10gPSB1c2VHbG9iYWwoWydjaGFpbicsICdzZWN1cml0eScsICdoYXNTZWN1cml0eScsICd2YXVsdCcsICdoYXNWYXVsdCddKVxuICBjb25zdCBbY29udHJhY3QsIHdlYjNdID0gdXNlV2VsZmFyZShzdGF0ZS53ZWxmYXJlKVxuICBjb25zdCBbZnJlZV0gPSB1c2VGcmVlKCcweGI1QjhjRDE1RWFjNTcxRjNkNzMzZTNGNGFkMDExNDNEMTU0OEM2Y2UnKVxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHdhbGxldC5zdGF0dXMgPT0gJ2Nvbm5lY3RlZCcgJiYgc3RhdGUuaGFzV2VsZmFyZSkge1xuICAgICAgY29uc29sZS5sb2coXCJXRUxGQVJFXCIsIHN0YXRlKVxuICAgIH1cbiAgfSwgW3dhbGxldC5zdGF0dXMsIHN0YXRlLmhhc1dlbGZhcmVdKVxuXG4gIGNvbnN0IHJlbmRlckFjdGlvbnMgPSB1c2VDYWxsYmFjaygoKSA9PiAoXG4gICAgPFJvdyBndXR0ZXI9ezIwfT5cbiAgICAgIDxDb2wgc3Bhbj17OH0+XG4gICAgICAgIDxTdGF0aXN0aWMgdGl0bGU9XCJCYWxhbmNlXCIgdmFsdWU9e2RhdGEuYmFsYW5jZX0gLz5cbiAgICAgIDwvQ29sPlxuICAgIDwvUm93PlxuICApLCBbc3RhdGUsIHdhbGxldF0pXG5cbiAgY29uc3QgY2xhaW1GcmVlID0gYXN5bmMoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIGNvbnN0IHR4ID0gYXdhaXQgZnJlZS5jbGFpbSgnMHhiRURBNkRmN2E1YkNBOTE0OTE1ZmI4MEQxM2MxYjZiMzJkRjhGOGFiJywgd2ViMy51dGlscy50b1dlaSgnMTAwMDAwJywgJ2d3ZWknKSkuc2VuZCh7XG4gICAgICBmcm9tOiB3YWxsZXQuYWNjb3VudCxcbiAgICAgIHRvOiAnMHhiNUI4Y0QxNUVhYzU3MUYzZDczM2UzRjRhZDAxMTQzRDE1NDhDNmNlJ1xuICAgIH0pXG4gICAgaWYgKHR4LnN0YXR1cykge1xuICAgICAgbm90aWZpY2F0aW9uLnN1Y2Nlc3Moe1xuICAgICAgICBtZXNzYWdlOiAnQ2xhaW0gU3VjY2Vzc2Z1bCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0eC50cmFuc2FjdGlvbkhhc2hcbiAgICAgIH0pXG4gICAgfVxuICAgIHNldExvYWRpbmcoZmFsc2UpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxQdWJsaWNMYXlvdXQ+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IGAyMHB4IDBweGAgfX0+XG4gICAgICAgIDxUaXRsZSBsZXZlbD17Mn0+V2VsZmFyZTwvVGl0bGU+XG5cbiAgICAgICAgeyBzdGF0ZS5oYXNXZWxmYXJlICYmIHJlbmRlckFjdGlvbnMoKSB9XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvUHVibGljTGF5b3V0PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/welfare.js\n");

/***/ })

});