(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core"], factory);
	else if(typeof exports === 'object')
		exports["ac-debug"] = factory(require("@angular/core"));
	else
		root["ac-debug"] = factory(root[undefined]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var debug_1 = __webpack_require__(1);
	exports.AcDebug = debug_1.AcDebug;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var AcDebug = (function () {
	    function AcDebug() {
	        this.position = 'top-left';
	    }
	    AcDebug.prototype._getPosition = function (style) {
	        if (this.position === 'top-left') {
	            return Object.assign(style, {
	                left: '0',
	                top: '0'
	            });
	        }
	    };
	    AcDebug.prototype.getStyles = function () {
	        return this._getPosition({
	            position: 'absolute'
	        });
	    };
	    Object.defineProperty(AcDebug.prototype, "containers", {
	        get: function () {
	            return Array.from(document.querySelectorAll('.ac-container'));
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AcDebug.prototype, "ui", {
	        get: function () {
	            return Array.from(document.querySelectorAll('.ac-ui'));
	        },
	        enumerable: true,
	        configurable: true
	    });
	    AcDebug.prototype.toggleUi = function () {
	        this.ui.forEach(function (ui) { return ui.classList.toggle('ac-active'); });
	    };
	    AcDebug.prototype.toggleContainer = function () {
	        this.containers.forEach(function (container) { return container.classList.toggle('ac-active'); });
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], AcDebug.prototype, "position", void 0);
	    AcDebug = __decorate([
	        core_1.Component({
	            selector: 'ac-debug',
	            styles: ["\n    .ac-ui.ac-active {\n      outline-color: red;\n      outline-style: solid;\n      transform: translateZ(0);\n    } \n    \n    .ac-container.ac-active {\n      outline-color: blue;\n      outline-style: solid;\n      transform: translateZ(0);      \n    } \n\n    .ac-debug-container {\n      width: 350px;\n      padding: 20px;\n      position: absolute;\n      margin-top: 100px;\n    }\n  "],
	            encapsulation: core_1.ViewEncapsulation.None,
	            template: "\n    <div class=\"ac-debug-container row between-xs\" [ngStyle]=\"getStyles()\">\n      <button (click)=\"toggleUi()\">toggle ui</button>\n      <button (click)=\"toggleContainer()\">toggle containers</button>\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AcDebug);
	    return AcDebug;
	}());
	exports.AcDebug = AcDebug;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=ac-debug.js.map