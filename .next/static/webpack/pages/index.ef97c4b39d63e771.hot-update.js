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

/***/ "./container/index.tsx":
/*!*****************************!*\
  !*** ./container/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-webcam */ \"./node_modules/react-webcam/dist/react-webcam.js\");\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst CameraApp = ()=>{\n    _s();\n    const [isCameraOn, setIsCameraOn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const webcamRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        startCamera();\n    }, []);\n    const startCamera = async ()=>{\n        try {\n            const stream = await navigator.mediaDevices.getUserMedia({\n                video: true,\n                audio: false\n            });\n            webcamRef.current.srcObject = stream;\n            setIsCameraOn(true);\n        } catch (error) {\n            console.log(\"Error starting camera stream\", error);\n            setIsCameraOn(false);\n        }\n    };\n    const stopCamera = ()=>{\n        setIsCameraOn(false);\n    };\n    const handleToggleCamera = ()=>{\n        if (isCameraOn) {\n            stopCamera();\n        } else {\n            startCamera();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Camera App\"\n            }, void 0, false, {\n                fileName: \"/Users/llqv/Documents/Media/my-nextjs-project/container/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            isCameraOn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_webcam__WEBPACK_IMPORTED_MODULE_2___default()), {\n                audio: false,\n                ref: webcamRef,\n                screenshotFormat: \"image/jpeg\"\n            }, void 0, false, {\n                fileName: \"/Users/llqv/Documents/Media/my-nextjs-project/container/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Camera is off\"\n            }, void 0, false, {\n                fileName: \"/Users/llqv/Documents/Media/my-nextjs-project/container/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleToggleCamera,\n                children: isCameraOn ? \"Turn off camera\" : \"Turn on camera\"\n            }, void 0, false, {\n                fileName: \"/Users/llqv/Documents/Media/my-nextjs-project/container/index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/llqv/Documents/Media/my-nextjs-project/container/index.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CameraApp, \"q68FdAioILq0VV2bBgnpkBoMSxU=\");\n_c = CameraApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CameraApp);\nvar _c;\n$RefreshReg$(_c, \"CameraApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250YWluZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyRDtBQUN6QjtBQUVsQyxNQUFNSyxZQUFZLElBQU07O0lBQ3RCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2xELE1BQU1PLFlBQVlMLDZDQUFNQSxDQUFDLElBQUk7SUFFN0JELGdEQUFTQSxDQUFDLElBQU07UUFDZE87SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQSxjQUFjLFVBQVk7UUFDOUIsSUFBSTtZQUNGLE1BQU1DLFNBQVMsTUFBTUMsVUFBVUMsWUFBWSxDQUFDQyxZQUFZLENBQUM7Z0JBQ3ZEQyxPQUFPLElBQUk7Z0JBQ1hDLE9BQU8sS0FBSztZQUNkO1lBQ0FQLFVBQVVRLE9BQU8sQ0FBQ0MsU0FBUyxHQUFHUDtZQUM5QkgsY0FBYyxJQUFJO1FBQ3BCLEVBQUUsT0FBT1csT0FBTztZQUNkQyxRQUFRQyxHQUFHLENBQUMsZ0NBQWdDRjtZQUM1Q1gsY0FBYyxLQUFLO1FBQ3JCO0lBQ0Y7SUFFQSxNQUFNYyxhQUFhLElBQU07UUFDdkJkLGNBQWMsS0FBSztJQUNyQjtJQUVBLE1BQU1lLHFCQUFxQixJQUFNO1FBQy9CLElBQUloQixZQUFZO1lBQ2RlO1FBQ0YsT0FBTztZQUNMWjtRQUNGLENBQUM7SUFDSDtJQUVBLHFCQUNFLDhEQUFDYzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7WUFDSGxCLDJCQUNDLDhEQUFDRixxREFBTUE7Z0JBQ0xXLE9BQU8sS0FBSztnQkFDWlUsS0FBS2pCO2dCQUNMa0Isa0JBQWlCOzs7OzswQ0FHbkIsOERBQUNIOzBCQUFJOzs7Ozt5QkFDTjswQkFDRCw4REFBQ0k7Z0JBQU9DLFNBQVNOOzBCQUNkaEIsYUFBYSxvQkFBb0IsZ0JBQWdCOzs7Ozs7Ozs7Ozs7QUFJMUQ7R0FuRE1EO0tBQUFBO0FBcUROLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRhaW5lci9pbmRleC50c3g/YmIwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFdlYmNhbSBmcm9tICdyZWFjdC13ZWJjYW0nO1xuXG5jb25zdCBDYW1lcmFBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0NhbWVyYU9uLCBzZXRJc0NhbWVyYU9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgd2ViY2FtUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3RhcnRDYW1lcmEoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHN0YXJ0Q2FtZXJhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XG4gICAgICAgIHZpZGVvOiB0cnVlLFxuICAgICAgICBhdWRpbzogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIHdlYmNhbVJlZi5jdXJyZW50LnNyY09iamVjdCA9IHN0cmVhbTtcbiAgICAgIHNldElzQ2FtZXJhT24odHJ1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBzdGFydGluZyBjYW1lcmEgc3RyZWFtJywgZXJyb3IpO1xuICAgICAgc2V0SXNDYW1lcmFPbihmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHN0b3BDYW1lcmEgPSAoKSA9PiB7XG4gICAgc2V0SXNDYW1lcmFPbihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlQ2FtZXJhID0gKCkgPT4ge1xuICAgIGlmIChpc0NhbWVyYU9uKSB7XG4gICAgICBzdG9wQ2FtZXJhKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0Q2FtZXJhKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5DYW1lcmEgQXBwPC9oMT5cbiAgICAgIHtpc0NhbWVyYU9uID8gKFxuICAgICAgICA8V2ViY2FtXG4gICAgICAgICAgYXVkaW89e2ZhbHNlfVxuICAgICAgICAgIHJlZj17d2ViY2FtUmVmfVxuICAgICAgICAgIHNjcmVlbnNob3RGb3JtYXQ9XCJpbWFnZS9qcGVnXCJcbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXY+Q2FtZXJhIGlzIG9mZjwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlVG9nZ2xlQ2FtZXJhfT5cbiAgICAgICAge2lzQ2FtZXJhT24gPyAnVHVybiBvZmYgY2FtZXJhJyA6ICdUdXJuIG9uIGNhbWVyYSd9XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbWVyYUFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiV2ViY2FtIiwiQ2FtZXJhQXBwIiwiaXNDYW1lcmFPbiIsInNldElzQ2FtZXJhT24iLCJ3ZWJjYW1SZWYiLCJzdGFydENhbWVyYSIsInN0cmVhbSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInZpZGVvIiwiYXVkaW8iLCJjdXJyZW50Iiwic3JjT2JqZWN0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3RvcENhbWVyYSIsImhhbmRsZVRvZ2dsZUNhbWVyYSIsImRpdiIsImgxIiwicmVmIiwic2NyZWVuc2hvdEZvcm1hdCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./container/index.tsx\n"));

/***/ })

});