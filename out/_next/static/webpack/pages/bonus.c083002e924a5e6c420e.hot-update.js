/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/bonus",{

/***/ "./pages/bonus.js":
/*!************************!*\
  !*** ./pages/bonus.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BonusVault; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! use-wallet */ \"./node_modules/use-wallet/dist/index.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _layouts_PublicLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layouts/PublicLayout */ \"./layouts/PublicLayout.js\");\n/* harmony import */ var _hooks_useGlobal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useGlobal */ \"./hooks/useGlobal.js\");\n/* harmony import */ var _hooks_useBonus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useBonus */ \"./hooks/useBonus.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/macbookpro/Dean/welfare/pages/bonus.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Title = antd__WEBPACK_IMPORTED_MODULE_10__.Typography.Title,\n    Text = antd__WEBPACK_IMPORTED_MODULE_10__.Typography.Text;\nvar Item = antd__WEBPACK_IMPORTED_MODULE_10__.Descriptions.Item; // COMMAND CENTER: 0xe73C89DFA51E82e7895b0E9E9B8E9b1b4A91b2b6\n// BONUS: 0xEeCFE0b4c47cb5d61F180d721674a405A86FB53c\n// WELFARE ADDRESS: 0xbEDA6Df7a5bCA914915fb80D13c1b6b32dF8F8ab\n// SOCIAL SECURITY: 0x5d09f5E94f8f2cAb11DB1A7D1C71cdd80E7c0e69\n\nfunction BonusVault() {\n  _s();\n\n  var _this = this;\n\n  var wallet = (0,use_wallet__WEBPACK_IMPORTED_MODULE_11__.useWallet)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),\n      address = _useState[0],\n      setAddress = _useState[1];\n\n  var _useGlobal = (0,_hooks_useGlobal__WEBPACK_IMPORTED_MODULE_8__.default)(['chain', 'bonus', 'hasBonus']),\n      _useGlobal2 = (0,_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useGlobal, 2),\n      state = _useGlobal2[0],\n      actions = _useGlobal2[1];\n\n  var _useBonus = (0,_hooks_useBonus__WEBPACK_IMPORTED_MODULE_9__.default)(state.bonus),\n      bonus = _useBonus.bonus,\n      web3 = _useBonus.web3,\n      connected = _useBonus.connected;\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),\n      show = _useState2[0],\n      setShow = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),\n      data = _useState3[0],\n      setData = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0),\n      counter = _useState4[0],\n      setCounter = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),\n      loading = _useState5[0],\n      setLoading = _useState5[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    console.log(\"STATE\", state);\n\n    if (wallet.status == 'connected' && state.hasBonus) {\n      getInfo();\n    }\n  }, [wallet.status, state.hasBonus]);\n\n  var getInfo = /*#__PURE__*/function () {\n    var _ref = (0,_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var welfareAddr, securityAddr, centerAddr;\n      return _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              setLoading(true);\n              _context.next = 3;\n              return contract.welfarecontract().call();\n\n            case 3:\n              welfareAddr = _context.sent;\n              _context.next = 6;\n              return contract.socialsecuritycontract().call();\n\n            case 6:\n              securityAddr = _context.sent;\n              _context.next = 9;\n              return contract.ComradeCommandCenterAddress().call();\n\n            case 9:\n              centerAddr = _context.sent;\n              setData({\n                centerAddr: centerAddr,\n                securityAddr: securityAddr,\n                welfareAddr: welfareAddr\n              });\n              setLoading(false);\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getInfo() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var updateInfo = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(field, value) {\n      var tx;\n      return _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              setLoading(true);\n\n              if (!(value.startsWith('0x') && value.length == 42)) {\n                _context2.next = 8;\n                break;\n              }\n\n              _context2.next = 4;\n              return contract[field](value).send({\n                from: wallet.account,\n                to: state.center\n              });\n\n            case 4:\n              tx = _context2.sent;\n\n              if (tx.status) {\n                antd__WEBPACK_IMPORTED_MODULE_10__.notification.success({\n                  message: 'Update Successful',\n                  description: tx.transactionHash\n                });\n              }\n\n              _context2.next = 9;\n              break;\n\n            case 8:\n              antd__WEBPACK_IMPORTED_MODULE_10__.notification.error({\n                message: 'Update Failed',\n                description: 'Address Incorrect'\n              });\n\n            case 9:\n              setLoading(false);\n\n            case 10:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function updateInfo(_x, _x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var updateBonusVault = /*#__PURE__*/function () {\n    var _ref3 = (0,_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n      var tx;\n      return _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return contract.updateBonusVaultAddress().send({\n                from: wallet.account,\n                to: state.center\n              });\n\n            case 2:\n              tx = _context3.sent;\n\n              if (tx.status) {\n                antd__WEBPACK_IMPORTED_MODULE_10__.notification.success({\n                  message: 'Update Successful',\n                  description: tx.transactionHash\n                });\n              }\n\n            case 4:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function updateBonusVault() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var renderDashboard = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function () {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Row, {\n      gutter: [20, 20],\n      style: {\n        marginTop: 20\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Col, {\n        span: 12,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Card, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Button, {\n            onClick: updateBonusVault,\n            size: \"large\",\n            type: \"primary\",\n            children: \"Update Bonus Vault\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Col, {\n        span: 24,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Card, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Statistic, {\n            title: \"Command Center Address\",\n            value: data.centerAddr\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Input.Search, {\n            placeholder: \"Change Command Center Address\",\n            enterButton: \"Update\",\n            size: \"large\",\n            onSearch: function onSearch(value) {\n              return updateInfo('updateCommandCenter', value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 11\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Col, {\n        span: 24,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Card, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Statistic, {\n            title: \"Security Address\",\n            value: data.securityAddr\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Input.Search, {\n            placeholder: \"Change Security Address\",\n            enterButton: \"Update\",\n            size: \"large\",\n            onSearch: function onSearch(value) {\n              return updateInfo('updateSSAddress', value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 11\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Col, {\n        span: 24,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Card, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Statistic, {\n            title: \"Welfare Address\",\n            value: data.welfareAddr\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Input.Search, {\n            placeholder: \"Change Welfare Address\",\n            enterButton: \"Update\",\n            size: \"large\",\n            onSearch: function onSearch(value) {\n              return updateInfo('updateWelfareAddress', value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 11\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 5\n    }, _this);\n  }, [data]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_PublicLayout__WEBPACK_IMPORTED_MODULE_7__.default, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: {\n        padding: \"20px 0px\"\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n        level: 2,\n        children: \"Bonus Vault\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 9\n      }, this), state.hasBonus && renderDashboard()]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 123,\n    columnNumber: 5\n  }, this);\n}\n\n_s(BonusVault, \"sB/6Gesdafd3aYeh2heNrjVjnhM=\", false, function () {\n  return [use_wallet__WEBPACK_IMPORTED_MODULE_11__.useWallet, _hooks_useGlobal__WEBPACK_IMPORTED_MODULE_8__.default, _hooks_useBonus__WEBPACK_IMPORTED_MODULE_9__.default];\n});\n\n_c = BonusVault;\n\nvar _c;\n\n$RefreshReg$(_c, \"BonusVault\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9udXMuanM/YTNmNyJdLCJuYW1lcyI6WyJUaXRsZSIsIlR5cG9ncmFwaHkiLCJUZXh0IiwiSXRlbSIsIkRlc2NyaXB0aW9ucyIsIkJvbnVzVmF1bHQiLCJ3YWxsZXQiLCJ1c2VXYWxsZXQiLCJ1c2VTdGF0ZSIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwidXNlR2xvYmFsIiwic3RhdGUiLCJhY3Rpb25zIiwidXNlQm9udXMiLCJib251cyIsIndlYjMiLCJjb25uZWN0ZWQiLCJzaG93Iiwic2V0U2hvdyIsImRhdGEiLCJzZXREYXRhIiwiY291bnRlciIsInNldENvdW50ZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJoYXNCb251cyIsImdldEluZm8iLCJjb250cmFjdCIsIndlbGZhcmVjb250cmFjdCIsImNhbGwiLCJ3ZWxmYXJlQWRkciIsInNvY2lhbHNlY3VyaXR5Y29udHJhY3QiLCJzZWN1cml0eUFkZHIiLCJDb21yYWRlQ29tbWFuZENlbnRlckFkZHJlc3MiLCJjZW50ZXJBZGRyIiwidXBkYXRlSW5mbyIsImZpZWxkIiwidmFsdWUiLCJzdGFydHNXaXRoIiwibGVuZ3RoIiwic2VuZCIsImZyb20iLCJhY2NvdW50IiwidG8iLCJjZW50ZXIiLCJ0eCIsIm5vdGlmaWNhdGlvbiIsIm1lc3NhZ2UiLCJkZXNjcmlwdGlvbiIsInRyYW5zYWN0aW9uSGFzaCIsInVwZGF0ZUJvbnVzVmF1bHQiLCJ1cGRhdGVCb251c1ZhdWx0QWRkcmVzcyIsInJlbmRlckRhc2hib2FyZCIsInVzZUNhbGxiYWNrIiwibWFyZ2luVG9wIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtJQUVRQSxLLEdBQWdCQyxtRDtJQUFUQyxJLEdBQVNELGtEO0lB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O0FBQUE7QUFBQSxVQURGO0FBU0Q7O0dBM0d1QnBELFU7VUFDUEUsa0QsRUFFVUkscUQsRUFDVUcsb0Q7OztLQUpiVCxVIiwiZmlsZSI6Ii4vcGFnZXMvYm9udXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAndXNlLXdhbGxldCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHtcbiAgTGF5b3V0LCBNZW51LCBCcmVhZGNydW1iLCBUeXBvZ3JhcGh5LCBTcGFjZSwgU3BpbiwgQWxlcnQsXG4gIFRhYnMsIFN0YXRpc3RpYywgUm93LCBDb2wsIENhcmQsIFNsaWRlciwgRm9ybSwgQnV0dG9uLCBJbnB1dCwgRGVzY3JpcHRpb25zLFxuICBub3RpZmljYXRpb25cbn0gZnJvbSAnYW50ZCdcblxuaW1wb3J0IFB1YmxpY0xheW91dCBmcm9tICcuLi9sYXlvdXRzL1B1YmxpY0xheW91dCdcblxuaW1wb3J0IHVzZUdsb2JhbCBmcm9tICcuLi9ob29rcy91c2VHbG9iYWwnXG5pbXBvcnQgdXNlQm9udXMgZnJvbSAnLi4vaG9va3MvdXNlQm9udXMnXG5cbmNvbnN0IHsgVGl0bGUsIFRleHQgfSA9IFR5cG9ncmFwaHlcbmNvbnN0IHsgSXRlbSB9ID0gRGVzY3JpcHRpb25zXG5cbi8vIENPTU1BTkQgQ0VOVEVSOiAweGU3M0M4OURGQTUxRTgyZTc4OTViMEU5RTlCOEU5YjFiNEE5MWIyYjZcbi8vIEJPTlVTOiAweEVlQ0ZFMGI0YzQ3Y2I1ZDYxRjE4MGQ3MjE2NzRhNDA1QTg2RkI1M2Ncbi8vIFdFTEZBUkUgQUREUkVTUzogMHhiRURBNkRmN2E1YkNBOTE0OTE1ZmI4MEQxM2MxYjZiMzJkRjhGOGFiXG4vLyBTT0NJQUwgU0VDVVJJVFk6IDB4NWQwOWY1RTk0ZjhmMmNBYjExREIxQTdEMUM3MWNkZDgwRTdjMGU2OVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb251c1ZhdWx0KCkge1xuICBjb25zdCB3YWxsZXQgPSB1c2VXYWxsZXQoKVxuICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3N0YXRlLCBhY3Rpb25zXSA9IHVzZUdsb2JhbChbJ2NoYWluJywgJ2JvbnVzJywgJ2hhc0JvbnVzJ10pXG4gIGNvbnN0IHsgYm9udXMsIHdlYjMsIGNvbm5lY3RlZCB9ID0gdXNlQm9udXMoc3RhdGUuYm9udXMpXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7IH0pXG4gIGNvbnN0IFtjb3VudGVyLCBzZXRDb3VudGVyXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTVEFURVwiLCBzdGF0ZSlcbiAgICBpZiAod2FsbGV0LnN0YXR1cyA9PSAnY29ubmVjdGVkJyAmJiBzdGF0ZS5oYXNCb251cykge1xuICAgICAgZ2V0SW5mbygpXG4gICAgfVxuICB9LCBbd2FsbGV0LnN0YXR1cywgc3RhdGUuaGFzQm9udXNdKVxuXG4gIGNvbnN0IGdldEluZm8gPSBhc3luYygpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgY29uc3Qgd2VsZmFyZUFkZHIgPSBhd2FpdCBjb250cmFjdC53ZWxmYXJlY29udHJhY3QoKS5jYWxsKClcbiAgICBjb25zdCBzZWN1cml0eUFkZHIgPSBhd2FpdCBjb250cmFjdC5zb2NpYWxzZWN1cml0eWNvbnRyYWN0KCkuY2FsbCgpXG4gICAgY29uc3QgY2VudGVyQWRkciA9IGF3YWl0IGNvbnRyYWN0LkNvbXJhZGVDb21tYW5kQ2VudGVyQWRkcmVzcygpLmNhbGwoKVxuICAgIHNldERhdGEoeyBjZW50ZXJBZGRyLCBzZWN1cml0eUFkZHIsIHdlbGZhcmVBZGRyIH0pXG4gICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZUluZm8gPSBhc3luYyhmaWVsZCwgdmFsdWUpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoJzB4JykgJiYgdmFsdWUubGVuZ3RoID09IDQyKSB7XG4gICAgICBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0W2ZpZWxkXSh2YWx1ZSkuc2VuZCh7IGZyb206IHdhbGxldC5hY2NvdW50LCB0bzogc3RhdGUuY2VudGVyIH0pXG4gICAgICBpZiAodHguc3RhdHVzKSB7XG4gICAgICAgIG5vdGlmaWNhdGlvbi5zdWNjZXNzKHtcbiAgICAgICAgICBtZXNzYWdlOiAnVXBkYXRlIFN1Y2Nlc3NmdWwnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiB0eC50cmFuc2FjdGlvbkhhc2gsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vdGlmaWNhdGlvbi5lcnJvcih7XG4gICAgICAgIG1lc3NhZ2U6ICdVcGRhdGUgRmFpbGVkJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBZGRyZXNzIEluY29ycmVjdCdcbiAgICAgIH0pXG4gICAgfVxuICAgIHNldExvYWRpbmcoZmFsc2UpXG4gIH1cblxuICBjb25zdCB1cGRhdGVCb251c1ZhdWx0ID0gYXN5bmMoKSA9PiB7XG4gICAgY29uc3QgdHggPSBhd2FpdCBjb250cmFjdC51cGRhdGVCb251c1ZhdWx0QWRkcmVzcygpLnNlbmQoeyBmcm9tOiB3YWxsZXQuYWNjb3VudCwgdG86IHN0YXRlLmNlbnRlciB9KVxuICAgIGlmICh0eC5zdGF0dXMpIHtcbiAgICAgIG5vdGlmaWNhdGlvbi5zdWNjZXNzKHtcbiAgICAgICAgbWVzc2FnZTogJ1VwZGF0ZSBTdWNjZXNzZnVsJyxcbiAgICAgICAgZGVzY3JpcHRpb246IHR4LnRyYW5zYWN0aW9uSGFzaCxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVuZGVyRGFzaGJvYXJkID0gdXNlQ2FsbGJhY2soKCkgPT4gKFxuICAgIDxSb3cgZ3V0dGVyPXtbMjAsIDIwXX0gc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCB9fT5cbiAgICAgIDxDb2wgc3Bhbj17MTJ9PlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3VwZGF0ZUJvbnVzVmF1bHR9IHNpemU9XCJsYXJnZVwiIHR5cGU9XCJwcmltYXJ5XCI+VXBkYXRlIEJvbnVzIFZhdWx0PC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvQ29sPlxuICAgICAgPENvbCBzcGFuPXsyNH0+XG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgIDxTdGF0aXN0aWMgdGl0bGU9XCJDb21tYW5kIENlbnRlciBBZGRyZXNzXCIgdmFsdWU9e2RhdGEuY2VudGVyQWRkcn0gLz5cbiAgICAgICAgICA8SW5wdXQuU2VhcmNoXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNoYW5nZSBDb21tYW5kIENlbnRlciBBZGRyZXNzXCJcbiAgICAgICAgICAgIGVudGVyQnV0dG9uPVwiVXBkYXRlXCJcbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBvblNlYXJjaD17dmFsdWUgPT4gdXBkYXRlSW5mbygndXBkYXRlQ29tbWFuZENlbnRlcicsIHZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvQ29sPlxuICAgICAgPENvbCBzcGFuPXsyNH0+XG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgIDxTdGF0aXN0aWMgdGl0bGU9XCJTZWN1cml0eSBBZGRyZXNzXCIgdmFsdWU9e2RhdGEuc2VjdXJpdHlBZGRyfSAvPlxuICAgICAgICAgIDxJbnB1dC5TZWFyY2hcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hhbmdlIFNlY3VyaXR5IEFkZHJlc3NcIlxuICAgICAgICAgICAgZW50ZXJCdXR0b249XCJVcGRhdGVcIlxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgIG9uU2VhcmNoPXt2YWx1ZSA9PiB1cGRhdGVJbmZvKCd1cGRhdGVTU0FkZHJlc3MnLCB2YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L0NvbD5cbiAgICAgIDxDb2wgc3Bhbj17MjR9PlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8U3RhdGlzdGljIHRpdGxlPVwiV2VsZmFyZSBBZGRyZXNzXCIgdmFsdWU9e2RhdGEud2VsZmFyZUFkZHJ9IC8+XG4gICAgICAgICAgPElucHV0LlNlYXJjaFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaGFuZ2UgV2VsZmFyZSBBZGRyZXNzXCJcbiAgICAgICAgICAgIGVudGVyQnV0dG9uPVwiVXBkYXRlXCJcbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBvblNlYXJjaD17dmFsdWUgPT4gdXBkYXRlSW5mbygndXBkYXRlV2VsZmFyZUFkZHJlc3MnLCB2YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L0NvbD5cbiAgICA8L1Jvdz5cbiAgKSwgW2RhdGFdKVxuXG4gIHJldHVybiAoXG4gICAgPFB1YmxpY0xheW91dD5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogYDIwcHggMHB4YCB9fT5cbiAgICAgICAgPFRpdGxlIGxldmVsPXsyfT5Cb251cyBWYXVsdDwvVGl0bGU+XG4gICAgICAgIHsgc3RhdGUuaGFzQm9udXMgJiYgcmVuZGVyRGFzaGJvYXJkKCkgfVxuXG4gICAgICA8L2Rpdj5cbiAgICA8L1B1YmxpY0xheW91dD5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/bonus.js\n");

/***/ })

});