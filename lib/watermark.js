(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WaterMark"] = factory();
	else
		root["WaterMark"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

var WaterMark = /*#__PURE__*/function () {
  function WaterMark(options) {
    _classCallCheck(this, WaterMark);

    _defineProperty(this, "defaultOpts", {
      id: 'water-mark',
      height: 100,
      width: 150,
      font: '10px sans-serif',
      rotate: -30,
      fillStyle: '#ccc',
      opacity: 1.0,
      text: ''
    });

    this._cfg = _objectSpread(_objectSpread({}, this.defaultOpts), options);
    this.createObserver();
    this.createCanvas();
    this.load();
  }

  _createClass(WaterMark, [{
    key: "set",
    value: function set(key, value) {
      this._cfg[key] = value;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this._cfg[key];
    }
  }, {
    key: "createObserver",
    value: function createObserver() {
      this.createDomObserver();
      this.createBodyObserver();
    } // 水印的载体div

  }, {
    key: "createDomObserver",
    value: function createDomObserver() {
      var _this = this;

      this.observer = new MutationObserver(function () {
        _this.remove();
      });
    }
  }, {
    key: "createBodyObserver",
    value: function createBodyObserver() {
      var _this2 = this;

      this.bodyObserver = new MutationObserver(function (mutationList) {
        if (mutationList[0].removedNodes.length && mutationList[0].removedNodes[0].id === _this2.get('id')) {
          _this2.load();
        }
      });
    }
  }, {
    key: "createCanvas",
    value: function createCanvas() {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var height = this.get('height');
      var width = this.get('width');
      canvas.height = height;
      canvas.width = width;
      var font = this.get('font');
      var text = this.get('text');
      var rotate = this.get('rotate');
      var fillStyle = this.get('fillStyle');
      var opacity = this.get('opacity');
      ctx.fillStyle = fillStyle;
      ctx.font = font;
      ctx.globalAlpha = opacity;
      ctx.rotate(rotate / Math.PI * 2);
      ctx.translate(0, height / 2);
      ctx.fillText(text, 0, height / 2);
      this.set('canvas', canvas);
      this.set('ctx', ctx);
    }
  }, {
    key: "observe",
    value: function observe() {
      this.domObserve();
      this.bodyObserve();
    }
  }, {
    key: "domObserve",
    value: function domObserve() {
      var dom = this.get('dom');
      this.observer.observe(dom, {
        childList: true,
        attributes: true,
        characterData: true
      });
    }
  }, {
    key: "bodyObserve",
    value: function bodyObserve() {
      var body = document.querySelector('body');
      this.bodyObserver.observe(body, {
        childList: true
      });
    }
  }, {
    key: "remove",
    value: function remove() {
      var body = document.querySelector('body');
      var dom = this.get('dom');
      body.removeChild(dom);
      this.set('dom', null);
    }
  }, {
    key: "load",
    value: function load() {
      var canvas = this.get('canvas');
      var img = canvas.toDataURL('image/png', 1.0);
      var body = document.querySelector('body');
      var dom = document.createElement('div');
      dom.setAttribute('id', this.get('id'));
      dom.setAttribute('style', "\n      background-image:url(".concat(img, "); \n      height: 100%; \n      position: fixed; \n      left: 0; \n      top: 0; \n      bottom: 0; \n      right: 0;\n      pointer-events: none;\n      z-index: 9999\n      "));
      this.set('dom', dom);
      body.appendChild(dom);
      this.observe();
    }
  }]);

  return WaterMark;
}();

/* harmony default export */ __webpack_exports__["default"] = (WaterMark);

/***/ })
/******/ ])["default"];
});