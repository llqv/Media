"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./container/index.tsx":
/*!*****************************!*\
  !*** ./container/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-webcam */ \"react-webcam\");\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst CameraApp = ()=>{\n    const webcamRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const checkUserMedia = async ()=>{\n            try {\n                await navigator.mediaDevices.getUserMedia({\n                    video: true\n                });\n                alert(\"Bạn đ\\xe3 cho ph\\xe9p truy cập camera\");\n            } catch (error) {\n                alert(\"Bạn kh\\xf4ng cho ph\\xe9p truy cập camera\");\n            }\n        };\n        checkUserMedia();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Camera App\"\n            }, void 0, false, {\n                fileName: \"/Users/llqv/Documents/Media/my-nextjs-project/container/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_webcam__WEBPACK_IMPORTED_MODULE_2___default()), {\n                audio: false,\n                ref: webcamRef\n            }, void 0, false, {\n                fileName: \"/Users/llqv/Documents/Media/my-nextjs-project/container/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/llqv/Documents/Media/my-nextjs-project/container/index.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CameraApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250YWluZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2pCO0FBRWxDLE1BQU1HLFlBQVksSUFBTTtJQUN0QixNQUFNQyxZQUFZSixtREFBWSxDQUFDLElBQUk7SUFFbkNDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNSyxpQkFBaUIsVUFBWTtZQUNqQyxJQUFJO2dCQUNGLE1BQU1DLFVBQVVDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDO29CQUFFQyxPQUFPLElBQUk7Z0JBQUM7Z0JBQ3hEQyxNQUFNO1lBQ1IsRUFBRSxPQUFPQyxPQUFPO2dCQUNkRCxNQUFNO1lBQ1I7UUFDRjtRQUVBTDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDTzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNaLHFEQUFNQTtnQkFDTGEsT0FBTyxLQUFLO2dCQUNaQyxLQUFLWjs7Ozs7Ozs7Ozs7O0FBSWI7QUFFQSxpRUFBZUQsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHRqcy1wcm9qZWN0Ly4vY29udGFpbmVyL2luZGV4LnRzeD9iYjAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFdlYmNhbSBmcm9tICdyZWFjdC13ZWJjYW0nO1xuXG5jb25zdCBDYW1lcmFBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IHdlYmNhbVJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrVXNlck1lZGlhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyB2aWRlbzogdHJ1ZSB9KTtcbiAgICAgICAgYWxlcnQoJ0LhuqFuIMSRw6MgY2hvIHBow6lwIHRydXkgY+G6rXAgY2FtZXJhJyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBhbGVydCgnQuG6oW4ga2jDtG5nIGNobyBwaMOpcCB0cnV5IGPhuq1wIGNhbWVyYScpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjaGVja1VzZXJNZWRpYSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkNhbWVyYSBBcHA8L2gxPlxuICAgICAgPFdlYmNhbVxuICAgICAgICBhdWRpbz17ZmFsc2V9XG4gICAgICAgIHJlZj17d2ViY2FtUmVmfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbWVyYUFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIldlYmNhbSIsIkNhbWVyYUFwcCIsIndlYmNhbVJlZiIsInVzZVJlZiIsImNoZWNrVXNlck1lZGlhIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwidmlkZW8iLCJhbGVydCIsImVycm9yIiwiZGl2IiwiaDEiLCJhdWRpbyIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./container/index.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/container */ \"./container/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst HomePage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/llqv/Documents/Media/my-nextjs-project/pages/index.tsx\",\n            lineNumber: 7,\n            columnNumber: 15\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/llqv/Documents/Media/my-nextjs-project/pages/index.tsx\",\n        lineNumber: 7,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNvQztBQUVWO0FBRTFCLE1BQU1FLFdBQXFCLElBQU07SUFDL0IscUJBQU8sOERBQUNDO2tCQUFJLDRFQUFDSCxrREFBU0E7Ozs7Ozs7Ozs7QUFDeEI7QUFFQSxpRUFBZUUsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHRqcy1wcm9qZWN0Ly4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdhaXRpbmdSb29tIGZyb20gJ0AvY29udGFpbmVyJztcbmltcG9ydCBDYW1lcmFBcHAgZnJvbSAnQC9jb250YWluZXInO1xuaW1wb3J0IEFwcCBmcm9tICdAL2NvbnRhaW5lcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBIb21lUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiA8ZGl2PjxDYW1lcmFBcHAvPjwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbIkNhbWVyYUFwcCIsIlJlYWN0IiwiSG9tZVBhZ2UiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-webcam":
/*!*******************************!*\
  !*** external "react-webcam" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-webcam");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();