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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-webcam */ \"react-webcam\");\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsqr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsqr */ \"jsqr\");\n/* harmony import */ var jsqr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsqr__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst CameraApp = ()=>{\n    const webcamRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const checkUserMedia = async ()=>{\n            try {\n                await navigator.mediaDevices.getUserMedia({\n                    video: true\n                });\n                alert(\"Bạn đ\\xe3 cho ph\\xe9p truy cập camera\");\n            } catch (error) {\n                alert(\"Bạn kh\\xf4ng cho ph\\xe9p truy cập camera\");\n            }\n        };\n        checkUserMedia();\n        const interval = setInterval(()=>{\n            if (webcamRef.current && webcamRef.current.video && webcamRef.current.video.readyState === 4) {\n                const video = webcamRef.current.video;\n                const canvas = document.createElement(\"canvas\");\n                canvas.width = video.videoWidth;\n                canvas.height = video.videoHeight;\n                const ctx = canvas.getContext(\"2d\");\n                if (ctx && canvas) {\n                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);\n                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);\n                    const code = jsqr__WEBPACK_IMPORTED_MODULE_3___default()(imageData.data, canvas.width, canvas.height);\n                    if (code) {\n                        console.log(\"QR Code:\", code.data);\n                    }\n                }\n            }\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Camera App\"\n            }, void 0, false, {\n                fileName: \"/Users/llqv/Documents/Media/my-nextjs-project/container/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_webcam__WEBPACK_IMPORTED_MODULE_2___default()), {\n                audio: false,\n                ref: webcamRef\n            }, void 0, false, {\n                fileName: \"/Users/llqv/Documents/Media/my-nextjs-project/container/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/llqv/Documents/Media/my-nextjs-project/container/index.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CameraApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250YWluZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDakI7QUFDVjtBQUV4QixNQUFNSSxZQUFZLElBQU07SUFDdEIsTUFBTUMsWUFBWUwsbURBQVksQ0FBUyxJQUFJO0lBRTNDQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTU0saUJBQWlCLFVBQVk7WUFDakMsSUFBSTtnQkFDRixNQUFNQyxVQUFVQyxZQUFZLENBQUNDLFlBQVksQ0FBQztvQkFBRUMsT0FBTyxJQUFJO2dCQUFDO2dCQUN4REMsTUFBTTtZQUNSLEVBQUUsT0FBT0MsT0FBTztnQkFDZEQsTUFBTTtZQUNSO1FBQ0Y7UUFDQUw7UUFFQSxNQUFNTyxXQUFXQyxZQUFZLElBQU07WUFDakMsSUFBSVYsVUFBVVcsT0FBTyxJQUFJWCxVQUFVVyxPQUFPLENBQUNMLEtBQUssSUFBSU4sVUFBVVcsT0FBTyxDQUFDTCxLQUFLLENBQUNNLFVBQVUsS0FBSyxHQUFHO2dCQUM1RixNQUFNTixRQUFRTixVQUFVVyxPQUFPLENBQUNMLEtBQUs7Z0JBQ3JDLE1BQU1PLFNBQVNDLFNBQVNDLGFBQWEsQ0FBQztnQkFDdENGLE9BQU9HLEtBQUssR0FBR1YsTUFBTVcsVUFBVTtnQkFDL0JKLE9BQU9LLE1BQU0sR0FBR1osTUFBTWEsV0FBVztnQkFDakMsTUFBTUMsTUFBTVAsT0FBT1EsVUFBVSxDQUFDO2dCQUM5QixJQUFJRCxPQUFPUCxRQUFRO29CQUNqQk8sSUFBSUUsU0FBUyxDQUFDaEIsT0FBTyxHQUFHLEdBQUdPLE9BQU9HLEtBQUssRUFBRUgsT0FBT0ssTUFBTTtvQkFDdEQsTUFBTUssWUFBWUgsSUFBSUksWUFBWSxDQUFDLEdBQUcsR0FBR1gsT0FBT0csS0FBSyxFQUFFSCxPQUFPSyxNQUFNO29CQUNwRSxNQUFNTyxPQUFPM0IsMkNBQUlBLENBQUN5QixVQUFVRyxJQUFJLEVBQUViLE9BQU9HLEtBQUssRUFBRUgsT0FBT0ssTUFBTTtvQkFDN0QsSUFBSU8sTUFBTTt3QkFDUkUsUUFBUUMsR0FBRyxDQUFDLFlBQVlILEtBQUtDLElBQUk7b0JBQ25DLENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7UUFDSCxHQUFHO1FBQ0gsT0FBTyxJQUFNRyxjQUFjcEI7SUFDN0IsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNxQjs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNsQyxxREFBTUE7Z0JBQ0xtQyxPQUFPLEtBQUs7Z0JBQ1pDLEtBQUtqQzs7Ozs7Ozs7Ozs7O0FBSWI7QUFFQSxpRUFBZUQsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHRqcy1wcm9qZWN0Ly4vY29udGFpbmVyL2luZGV4LnRzeD9iYjAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFdlYmNhbSBmcm9tICdyZWFjdC13ZWJjYW0nO1xuaW1wb3J0IGpzUVIgZnJvbSAnanNxcic7XG5cbmNvbnN0IENhbWVyYUFwcCA9ICgpID0+IHtcbiAgY29uc3Qgd2ViY2FtUmVmID0gUmVhY3QudXNlUmVmPFdlYmNhbT4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjaGVja1VzZXJNZWRpYSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgdmlkZW86IHRydWUgfSk7XG4gICAgICAgIGFsZXJ0KCdC4bqhbiDEkcOjIGNobyBwaMOpcCB0cnV5IGPhuq1wIGNhbWVyYScpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgYWxlcnQoJ0LhuqFuIGtow7RuZyBjaG8gcGjDqXAgdHJ1eSBj4bqtcCBjYW1lcmEnKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNoZWNrVXNlck1lZGlhKCk7XG5cbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh3ZWJjYW1SZWYuY3VycmVudCAmJiB3ZWJjYW1SZWYuY3VycmVudC52aWRlbyAmJiB3ZWJjYW1SZWYuY3VycmVudC52aWRlby5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIGNvbnN0IHZpZGVvID0gd2ViY2FtUmVmLmN1cnJlbnQudmlkZW8gYXMgSFRNTFZpZGVvRWxlbWVudDtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB2aWRlby52aWRlb0hlaWdodDtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGlmIChjdHggJiYgY2FudmFzKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZSh2aWRlbywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgY29uc3QgY29kZSA9IGpzUVIoaW1hZ2VEYXRhLmRhdGEsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgaWYgKGNvZGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdRUiBDb2RlOicsIGNvZGUuZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkNhbWVyYSBBcHA8L2gxPlxuICAgICAgPFdlYmNhbVxuICAgICAgICBhdWRpbz17ZmFsc2V9XG4gICAgICAgIHJlZj17d2ViY2FtUmVmfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbWVyYUFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIldlYmNhbSIsImpzUVIiLCJDYW1lcmFBcHAiLCJ3ZWJjYW1SZWYiLCJ1c2VSZWYiLCJjaGVja1VzZXJNZWRpYSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInZpZGVvIiwiYWxlcnQiLCJlcnJvciIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50IiwicmVhZHlTdGF0ZSIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIndpZHRoIiwidmlkZW9XaWR0aCIsImhlaWdodCIsInZpZGVvSGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsImltYWdlRGF0YSIsImdldEltYWdlRGF0YSIsImNvZGUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJoMSIsImF1ZGlvIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./container/index.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/container */ \"./container/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst HomePage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/llqv/Documents/Media/my-nextjs-project/pages/index.tsx\",\n            lineNumber: 7,\n            columnNumber: 15\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/llqv/Documents/Media/my-nextjs-project/pages/index.tsx\",\n        lineNumber: 7,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNvQztBQUVWO0FBRTFCLE1BQU1FLFdBQXFCLElBQU07SUFDL0IscUJBQU8sOERBQUNDO2tCQUFJLDRFQUFDSCxrREFBU0E7Ozs7Ozs7Ozs7QUFDeEI7QUFFQSxpRUFBZUUsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHRqcy1wcm9qZWN0Ly4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdhaXRpbmdSb29tIGZyb20gJ0AvY29udGFpbmVyJztcbmltcG9ydCBDYW1lcmFBcHAgZnJvbSAnQC9jb250YWluZXInO1xuaW1wb3J0IEFwcCBmcm9tICdAL2NvbnRhaW5lcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBIb21lUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiA8ZGl2PjxDYW1lcmFBcHAvPjwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbIkNhbWVyYUFwcCIsIlJlYWN0IiwiSG9tZVBhZ2UiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "jsqr":
/*!***********************!*\
  !*** external "jsqr" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("jsqr");

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