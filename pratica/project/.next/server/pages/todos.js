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
exports.id = "pages/todos";
exports.ids = ["pages/todos"];
exports.modules = {

/***/ "./styles/Todos.module.css":
/*!*********************************!*\
  !*** ./styles/Todos.module.css ***!
  \*********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"todolist\": \"Todos_todolist__jE1St\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvVG9kb3MubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvX3dvcmxkLy4vc3R5bGVzL1RvZG9zLm1vZHVsZS5jc3M/NGU2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0b2RvbGlzdFwiOiBcIlRvZG9zX3RvZG9saXN0X19qRTFTdFwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Todos.module.css\n");

/***/ }),

/***/ "./pages/todos.js":
/*!************************!*\
  !*** ./pages/todos.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todos),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Todos_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Todos.module.css */ \"./styles/Todos.module.css\");\n/* harmony import */ var _styles_Todos_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Todos_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Todos({ todos  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Tarefas para fazer\"\n            }, void 0, false, {\n                fileName: \"/home/willian/Documents/learning nextjs/pratica/project/pages/todos.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_styles_Todos_module_css__WEBPACK_IMPORTED_MODULE_1___default().todolist),\n                children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: todo.title\n                    }, todos.id, false, {\n                        fileName: \"/home/willian/Documents/learning nextjs/pratica/project/pages/todos.js\",\n                        lineNumber: 10,\n                        columnNumber: 21\n                    }, this)\n                )\n            }, void 0, false, {\n                fileName: \"/home/willian/Documents/learning nextjs/pratica/project/pages/todos.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\nasync function getStaticProps() {\n    const data = await fetch(\"https://jsonplaceholder.typicode.com/todos\");\n    const todos = await data.json();\n    return {\n        props: {\n            todos\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b2Rvcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUErQztBQUdoQyxTQUFTQyxLQUFLLENBQUMsRUFBRUMsS0FBSyxHQUFFLEVBQUU7SUFDckMscUJBQ0k7OzBCQUNJLDhEQUFDQyxJQUFFOzBCQUFDLG9CQUFrQjs7Ozs7b0JBQUs7MEJBQzNCLDhEQUFDQyxJQUFFO2dCQUFDQyxTQUFTLEVBQUVMLDBFQUFlOzBCQUN6QkUsS0FBSyxDQUFDSyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxpQkFDWiw4REFBQ0MsSUFBRTtrQ0FBaUJELElBQUksQ0FBQ0UsS0FBSzt1QkFBckJSLEtBQUssQ0FBQ1MsRUFBRTs7Ozs0QkFBbUI7Z0JBQ3ZDLENBQUM7Ozs7O29CQUNEOztvQkFDTixDQUNOO0NBQ0o7QUFFTSxlQUFlQyxjQUFjLEdBQUc7SUFDbkMsTUFBTUMsSUFBSSxHQUFHLE1BQU1DLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQztJQUV0RSxNQUFNWixLQUFLLEdBQUcsTUFBTVcsSUFBSSxDQUFDRSxJQUFJLEVBQUU7SUFFL0IsT0FBTztRQUNIQyxLQUFLLEVBQUU7WUFBRWQsS0FBSztTQUFFO0tBQ25CO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsb193b3JsZC8uL3BhZ2VzL3RvZG9zLmpzPzc3NDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1RvZG9zLm1vZHVsZS5jc3NcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9zKHsgdG9kb3MgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDE+VGFyZWZhcyBwYXJhIGZhemVyPC9oMT5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy50b2RvbGlzdH0+XG4gICAgICAgICAgICAgICAge3RvZG9zLm1hcCgodG9kbykgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt0b2Rvcy5pZH0+e3RvZG8udGl0bGV9PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvc1wiKVxuXG4gICAgY29uc3QgdG9kb3MgPSBhd2FpdCBkYXRhLmpzb24oKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHsgdG9kb3MgfVxuICAgIH1cbn0iXSwibmFtZXMiOlsic3R5bGVzIiwiVG9kb3MiLCJ0b2RvcyIsImgxIiwidWwiLCJjbGFzc05hbWUiLCJ0b2RvbGlzdCIsIm1hcCIsInRvZG8iLCJsaSIsInRpdGxlIiwiaWQiLCJnZXRTdGF0aWNQcm9wcyIsImRhdGEiLCJmZXRjaCIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/todos.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/todos.js"));
module.exports = __webpack_exports__;

})();