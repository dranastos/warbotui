/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/center",{

/***/ "./hooks/useGlobal.js":
/*!****************************!*\
  !*** ./hooks/useGlobal.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useGlobal\": function() { return /* binding */ useGlobal; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _globalHook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globalHook */ \"./hooks/globalHook.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar actions = {\n  setSecurity: function setSecurity(store, security) {\n    if (security && security.startsWith('0x') && security.length == 42) {\n      store.setState({\n        security: security,\n        hasSecurity: true\n      });\n    } else {\n      store.setState({\n        security: '',\n        hasSecurity: false\n      });\n    }\n  },\n  setSecurityInfo: function setSecurityInfo(store, securityInfo) {\n    store.setState({\n      securityInfo: securityInfo\n    });\n  },\n  setVault: function setVault(store, vault) {\n    if (vault && vault.startsWith('0x') && vault.length == 42) {\n      store.setState({\n        vault: vault,\n        hasVault: true\n      });\n    } else {\n      store.setState({\n        vault: '',\n        hasVault: false\n      });\n    }\n  },\n  setBonus: function setBonus(store, bonus) {\n    if (bonus && bonus.startsWith('0x') && bonus.length == 42) {\n      store.setState({\n        bonus: bonus,\n        hasBonus: true\n      });\n    } else {\n      store.setState({\n        bonus: '',\n        hasBonus: false\n      });\n    }\n  },\n  setCenter: function setCenter(store, center) {\n    if (center && center.startsWith('0x') && center.length == 42) {\n      store.setState({\n        center: center,\n        hasCenter: true\n      });\n    } else {\n      store.setState({\n        center: '',\n        hasCenter: false\n      });\n    }\n  },\n  setWelfare: function setWelfare(store, welfare) {\n    console.log(\"SET WELFARE\");\n\n    if (welfare && welfare.startsWith('0x') && welfare.length == 42) {\n      store.setState({\n        welfare: welfare,\n        hasWelfare: true\n      });\n    } else {\n      store.setState({\n        welfare: '',\n        hasWelfare: false\n      });\n    }\n  },\n  setTestnet: function setTestnet(store) {\n    return store.setState({\n      chain: 97\n    });\n  },\n  setMainnet: function setMainnet(store) {\n    return store.setState({\n      chain: 56\n    });\n  },\n  addVaultCount: function addVaultCount(store) {\n    return store.setState({\n      vaultCount: store.state.vaultCount + 1\n    });\n  }\n};\nvar initialState = {\n  chain: 97,\n  // 56 - Mainnet | 97 - Testnet\n  security: '',\n  securityInfo: {},\n  hasSecurity: false,\n  vault: '',\n  hasVault: false,\n  center: '',\n  hasCenter: false,\n  bonus: '',\n  hasBonus: false,\n  welfare: '',\n  hasWelfare: false,\n  vaultCount: 0\n};\nvar useGlobal = (0,_globalHook__WEBPACK_IMPORTED_MODULE_1__.default)((react__WEBPACK_IMPORTED_MODULE_0___default()), initialState, actions);\n/* harmony default export */ __webpack_exports__[\"default\"] = (useGlobal);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlR2xvYmFsLmpzP2ViOTQiXSwibmFtZXMiOlsiYWN0aW9ucyIsInNldFNlY3VyaXR5Iiwic3RvcmUiLCJzZWN1cml0eSIsInN0YXJ0c1dpdGgiLCJsZW5ndGgiLCJzZXRTdGF0ZSIsImhhc1NlY3VyaXR5Iiwic2V0U2VjdXJpdHlJbmZvIiwic2VjdXJpdHlJbmZvIiwic2V0VmF1bHQiLCJ2YXVsdCIsImhhc1ZhdWx0Iiwic2V0Qm9udXMiLCJib251cyIsImhhc0JvbnVzIiwic2V0Q2VudGVyIiwiY2VudGVyIiwiaGFzQ2VudGVyIiwic2V0V2VsZmFyZSIsIndlbGZhcmUiLCJjb25zb2xlIiwibG9nIiwiaGFzV2VsZmFyZSIsInNldFRlc3RuZXQiLCJjaGFpbiIsInNldE1haW5uZXQiLCJhZGRWYXVsdENvdW50IiwidmF1bHRDb3VudCIsInN0YXRlIiwiaW5pdGlhbFN0YXRlIiwidXNlR2xvYmFsIiwiZ2xvYmFsSG9vayIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUc7QUFDZEMsYUFBVyxFQUFFLHFCQUFDQyxLQUFELEVBQVFDLFFBQVIsRUFBcUI7QUFDaEMsUUFBSUEsUUFBUSxJQUFJQSxRQUFRLENBQUNDLFVBQVQsQ0FBb0IsSUFBcEIsQ0FBWixJQUF5Q0QsUUFBUSxDQUFDRSxNQUFULElBQW1CLEVBQWhFLEVBQW9FO0FBQ2xFSCxXQUFLLENBQUNJLFFBQU4sQ0FBZTtBQUFFSCxnQkFBUSxFQUFSQSxRQUFGO0FBQVlJLG1CQUFXLEVBQUU7QUFBekIsT0FBZjtBQUNELEtBRkQsTUFFTztBQUNMTCxXQUFLLENBQUNJLFFBQU4sQ0FBZTtBQUFFSCxnQkFBUSxFQUFFLEVBQVo7QUFBZ0JJLG1CQUFXLEVBQUU7QUFBN0IsT0FBZjtBQUNEO0FBQ0YsR0FQYTtBQVFkQyxpQkFBZSxFQUFFLHlCQUFDTixLQUFELEVBQVFPLFlBQVIsRUFBeUI7QUFDeENQLFNB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RUFBRSxFQURZO0FBQ1I7QUFDWHRCLFVBQVEsRUFBRSxFQUZTO0FBR25CTSxjQUFZLEVBQUUsRUFISztBQUluQkYsYUFBVyxFQUFFLEtBSk07QUFLbkJJLE9BQUssRUFBRSxFQUxZO0FBTW5CQyxVQUFRLEVBQUUsS0FOUztBQU9uQkssUUFBTSxFQUFFLEVBUFc7QUFRbkJDLFdBQVMsRUFBRSxLQVJRO0FBU25CSixPQUFLLEVBQUUsRUFUWTtBQVVuQkMsVUFBUSxFQUFFLEtBVlM7QUFXbkJLLFNBQU8sRUFBRSxFQVhVO0FBWW5CRyxZQUFVLEVBQUUsS0FaTztBQWFuQkssWUFBVSxFQUFFO0FBYk8sQ0FBckI7QUFnQk8sSUFBTUcsU0FBUyxHQUFHQyxvREFBVSxDQUFDQyw4Q0FBRCxFQUFRSCxZQUFSLEVBQXNCOUIsT0FBdEIsQ0FBNUI7QUFFUCwrREFBZStCLFNBQWYiLCJmaWxlIjoiLi9ob29rcy91c2VHbG9iYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdsb2JhbEhvb2sgZnJvbSAnLi9nbG9iYWxIb29rJztcblxuY29uc3QgYWN0aW9ucyA9IHtcbiAgc2V0U2VjdXJpdHk6IChzdG9yZSwgc2VjdXJpdHkpID0+IHtcbiAgICBpZiAoc2VjdXJpdHkgJiYgc2VjdXJpdHkuc3RhcnRzV2l0aCgnMHgnKSAmJiBzZWN1cml0eS5sZW5ndGggPT0gNDIpIHtcbiAgICAgIHN0b3JlLnNldFN0YXRlKHsgc2VjdXJpdHksIGhhc1NlY3VyaXR5OiB0cnVlIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0b3JlLnNldFN0YXRlKHsgc2VjdXJpdHk6ICcnLCBoYXNTZWN1cml0eTogZmFsc2UgfSlcbiAgICB9XG4gIH0sXG4gIHNldFNlY3VyaXR5SW5mbzogKHN0b3JlLCBzZWN1cml0eUluZm8pID0+IHtcbiAgICBzdG9yZS5zZXRTdGF0ZSh7IHNlY3VyaXR5SW5mbyB9KVxuICB9LFxuICBzZXRWYXVsdDogKHN0b3JlLCB2YXVsdCkgPT4ge1xuICAgIGlmICh2YXVsdCAmJiB2YXVsdC5zdGFydHNXaXRoKCcweCcpICYmIHZhdWx0Lmxlbmd0aCA9PSA0Mikge1xuICAgICAgc3RvcmUuc2V0U3RhdGUoeyB2YXVsdCwgaGFzVmF1bHQ6IHRydWUgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3RvcmUuc2V0U3RhdGUoeyB2YXVsdDogJycsIGhhc1ZhdWx0OiBmYWxzZSB9KVxuICAgIH1cbiAgfSxcbiAgc2V0Qm9udXM6IChzdG9yZSwgYm9udXMpID0+IHtcbiAgICBpZiAoYm9udXMgJiYgYm9udXMuc3RhcnRzV2l0aCgnMHgnKSAmJiBib251cy5sZW5ndGggPT0gNDIpIHtcbiAgICAgIHN0b3JlLnNldFN0YXRlKHsgYm9udXMsIGhhc0JvbnVzOiB0cnVlIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0b3JlLnNldFN0YXRlKHsgYm9udXM6ICcnLCBoYXNCb251czogZmFsc2UgfSlcbiAgICB9XG4gIH0sXG4gIHNldENlbnRlcjogKHN0b3JlLCBjZW50ZXIpID0+IHtcbiAgICBpZiAoY2VudGVyICYmIGNlbnRlci5zdGFydHNXaXRoKCcweCcpICYmIGNlbnRlci5sZW5ndGggPT0gNDIpIHtcbiAgICAgIHN0b3JlLnNldFN0YXRlKHsgY2VudGVyLCBoYXNDZW50ZXI6IHRydWUgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3RvcmUuc2V0U3RhdGUoeyBjZW50ZXI6ICcnLCBoYXNDZW50ZXI6IGZhbHNlIH0pXG4gICAgfVxuICB9LFxuICBzZXRXZWxmYXJlOiAoc3RvcmUsIHdlbGZhcmUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNFVCBXRUxGQVJFXCIpXG4gICAgaWYgKHdlbGZhcmUgJiYgd2VsZmFyZS5zdGFydHNXaXRoKCcweCcpICYmIHdlbGZhcmUubGVuZ3RoID09IDQyKSB7XG4gICAgICBzdG9yZS5zZXRTdGF0ZSh7IHdlbGZhcmUsIGhhc1dlbGZhcmU6IHRydWUgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3RvcmUuc2V0U3RhdGUoeyB3ZWxmYXJlOiAnJywgaGFzV2VsZmFyZTogZmFsc2UgfSlcbiAgICB9XG4gIH0sXG4gIHNldFRlc3RuZXQ6IChzdG9yZSkgPT4gc3RvcmUuc2V0U3RhdGUoeyBjaGFpbjogOTcgfSksXG4gIHNldE1haW5uZXQ6IChzdG9yZSkgPT4gc3RvcmUuc2V0U3RhdGUoeyBjaGFpbjogNTYgfSksXG4gIGFkZFZhdWx0Q291bnQ6IChzdG9yZSkgPT4gc3RvcmUuc2V0U3RhdGUoeyB2YXVsdENvdW50OiBzdG9yZS5zdGF0ZS52YXVsdENvdW50ICsgMSB9KVxufVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGNoYWluOiA5NywgLy8gNTYgLSBNYWlubmV0IHwgOTcgLSBUZXN0bmV0XG4gIHNlY3VyaXR5OiAnJyxcbiAgc2VjdXJpdHlJbmZvOiB7fSxcbiAgaGFzU2VjdXJpdHk6IGZhbHNlLFxuICB2YXVsdDogJycsXG4gIGhhc1ZhdWx0OiBmYWxzZSxcbiAgY2VudGVyOiAnJyxcbiAgaGFzQ2VudGVyOiBmYWxzZSxcbiAgYm9udXM6ICcnLFxuICBoYXNCb251czogZmFsc2UsXG4gIHdlbGZhcmU6ICcnLFxuICBoYXNXZWxmYXJlOiBmYWxzZSxcbiAgdmF1bHRDb3VudDogMFxufVxuXG5leHBvcnQgY29uc3QgdXNlR2xvYmFsID0gZ2xvYmFsSG9vayhSZWFjdCwgaW5pdGlhbFN0YXRlLCBhY3Rpb25zKVxuXG5leHBvcnQgZGVmYXVsdCB1c2VHbG9iYWxcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useGlobal.js\n");

/***/ })

});