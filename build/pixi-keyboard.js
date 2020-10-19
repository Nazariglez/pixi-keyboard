var keyboard =
/******/ (function(modules) { // webpackBootstrap
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
/******/ ({

/***/ "./src/HotKey.ts":
/*!***********************!*\
  !*** ./src/HotKey.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Key_1 = __webpack_require__(/*! ./Key */ "./src/Key.ts");
var HotKey = /** @class */ (function () {
    function HotKey(key, manager) {
        this.key = key;
        this.manager = manager;
        this.isPressed = false;
        this.isDown = false;
        this.isReleased = false;
        this.ctrl = false;
        this.shift = false;
        this.alt = false;
    }
    HotKey.prototype.update = function () {
        this.isDown = this.manager.isDown(this.key);
        this.isPressed = this.manager.isPressed(this.key);
        this.isReleased = this.manager.isReleased(this.key);
        this.ctrl = this.manager.isDown(Key_1.default.CTRL);
        this.shift = this.manager.isDown(Key_1.default.SHIFT);
        this.alt = this.manager.isDown(Key_1.default.ALT);
    };
    HotKey.prototype.remove = function () {
        this.manager.removeHotKey(this.key);
    };
    return HotKey;
}());
exports.default = HotKey;


/***/ }),

/***/ "./src/Key.ts":
/*!********************!*\
  !*** ./src/Key.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Key;
(function (Key) {
    Key[Key["BACKSPACE"] = 8] = "BACKSPACE";
    Key[Key["TAB"] = 9] = "TAB";
    Key[Key["ENTER"] = 13] = "ENTER";
    Key[Key["SHIFT"] = 16] = "SHIFT";
    Key[Key["PAUSE"] = 19] = "PAUSE";
    Key[Key["CTRL"] = 17] = "CTRL";
    Key[Key["ALT"] = 18] = "ALT";
    Key[Key["CAPS_LOCK"] = 20] = "CAPS_LOCK";
    Key[Key["ESCAPE"] = 27] = "ESCAPE";
    Key[Key["SPACE"] = 32] = "SPACE";
    Key[Key["PAGE_UP"] = 33] = "PAGE_UP";
    Key[Key["PAGE_DOWN"] = 34] = "PAGE_DOWN";
    Key[Key["END"] = 35] = "END";
    Key[Key["HOME"] = 36] = "HOME";
    Key[Key["LEFT"] = 37] = "LEFT";
    Key[Key["UP"] = 38] = "UP";
    Key[Key["RIGHT"] = 39] = "RIGHT";
    Key[Key["DOWN"] = 40] = "DOWN";
    Key[Key["PRINT_SCREEN"] = 44] = "PRINT_SCREEN";
    Key[Key["INSERT"] = 45] = "INSERT";
    Key[Key["DELETE"] = 46] = "DELETE";
    Key[Key["_0"] = 48] = "_0";
    Key[Key["_1"] = 49] = "_1";
    Key[Key["_2"] = 50] = "_2";
    Key[Key["_3"] = 51] = "_3";
    Key[Key["_4"] = 52] = "_4";
    Key[Key["_5"] = 53] = "_5";
    Key[Key["_6"] = 54] = "_6";
    Key[Key["_7"] = 55] = "_7";
    Key[Key["_8"] = 56] = "_8";
    Key[Key["_9"] = 57] = "_9";
    Key[Key["A"] = 65] = "A";
    Key[Key["B"] = 66] = "B";
    Key[Key["C"] = 67] = "C";
    Key[Key["D"] = 68] = "D";
    Key[Key["E"] = 69] = "E";
    Key[Key["F"] = 70] = "F";
    Key[Key["G"] = 71] = "G";
    Key[Key["H"] = 72] = "H";
    Key[Key["I"] = 73] = "I";
    Key[Key["J"] = 74] = "J";
    Key[Key["K"] = 75] = "K";
    Key[Key["L"] = 76] = "L";
    Key[Key["M"] = 77] = "M";
    Key[Key["N"] = 78] = "N";
    Key[Key["O"] = 79] = "O";
    Key[Key["P"] = 80] = "P";
    Key[Key["Q"] = 81] = "Q";
    Key[Key["R"] = 82] = "R";
    Key[Key["S"] = 83] = "S";
    Key[Key["T"] = 84] = "T";
    Key[Key["U"] = 85] = "U";
    Key[Key["V"] = 86] = "V";
    Key[Key["W"] = 87] = "W";
    Key[Key["X"] = 88] = "X";
    Key[Key["Y"] = 89] = "Y";
    Key[Key["Z"] = 90] = "Z";
    Key[Key["CMD"] = 91] = "CMD";
    Key[Key["CMD_RIGHT"] = 93] = "CMD_RIGHT";
    Key[Key["NUM_0"] = 96] = "NUM_0";
    Key[Key["NUM_1"] = 97] = "NUM_1";
    Key[Key["NUM_2"] = 98] = "NUM_2";
    Key[Key["NUM_3"] = 99] = "NUM_3";
    Key[Key["NUM_4"] = 100] = "NUM_4";
    Key[Key["NUM_5"] = 101] = "NUM_5";
    Key[Key["NUM_6"] = 102] = "NUM_6";
    Key[Key["NUM_7"] = 103] = "NUM_7";
    Key[Key["NUM_8"] = 104] = "NUM_8";
    Key[Key["NUM_9"] = 105] = "NUM_9";
    Key[Key["MULTIPLY"] = 106] = "MULTIPLY";
    Key[Key["ADD"] = 107] = "ADD";
    Key[Key["SUBTRACT"] = 109] = "SUBTRACT";
    Key[Key["DECIMAL_POINT"] = 110] = "DECIMAL_POINT";
    Key[Key["DIVIDE"] = 111] = "DIVIDE";
    Key[Key["F1"] = 112] = "F1";
    Key[Key["F2"] = 113] = "F2";
    Key[Key["F3"] = 114] = "F3";
    Key[Key["F4"] = 115] = "F4";
    Key[Key["F5"] = 116] = "F5";
    Key[Key["F6"] = 117] = "F6";
    Key[Key["F7"] = 118] = "F7";
    Key[Key["F8"] = 119] = "F8";
    Key[Key["F9"] = 120] = "F9";
    Key[Key["F10"] = 121] = "F10";
    Key[Key["F11"] = 122] = "F11";
    Key[Key["F12"] = 123] = "F12";
    Key[Key["NUM_LOCK"] = 144] = "NUM_LOCK";
    Key[Key["SCROLL_LOCK"] = 145] = "SCROLL_LOCK";
    Key[Key["SEMI_COLON"] = 186] = "SEMI_COLON";
    Key[Key["EQUAL"] = 187] = "EQUAL";
    Key[Key["COMMA"] = 188] = "COMMA";
    Key[Key["DASH"] = 189] = "DASH";
    Key[Key["PERIOD"] = 190] = "PERIOD";
    Key[Key["FORWARD_SLASH"] = 191] = "FORWARD_SLASH";
    Key[Key["OPEN_BRACKET"] = 219] = "OPEN_BRACKET";
    Key[Key["BACK_SLASH"] = 220] = "BACK_SLASH";
    Key[Key["CLOSE_BRACKET"] = 221] = "CLOSE_BRACKET";
    Key[Key["SINGLE_QUOTE"] = 222] = "SINGLE_QUOTE";
})(Key || (Key = {}));
;
exports.default = Key;


/***/ }),

/***/ "./src/KeyboardManager.ts":
/*!********************************!*\
  !*** ./src/KeyboardManager.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(/*! pixi.js */ "pixi.js");
var HotKey_1 = __webpack_require__(/*! ./HotKey */ "./src/HotKey.ts");
var KeyboardManager = /** @class */ (function (_super) {
    __extends(KeyboardManager, _super);
    function KeyboardManager() {
        var _this = _super.call(this) || this;
        _this.isEnabled = false;
        _this.pressedKeys = [];
        _this.releasedKeys = [];
        _this.downKeys = [];
        _this.hotKeys = [];
        _this.preventDefaultKeys = [];
        return _this;
    }
    KeyboardManager.prototype.enable = function () {
        if (!this.isEnabled) {
            this.isEnabled = true;
            this._enableEvents();
        }
    };
    KeyboardManager.prototype._enableEvents = function () {
        window.addEventListener('keydown', this._onKeyDown.bind(this), true);
        window.addEventListener('keyup', this._onKeyUp.bind(this), true);
    };
    KeyboardManager.prototype.disable = function () {
        if (this.isEnabled) {
            this.isEnabled = false;
            this._disableEvents();
        }
    };
    KeyboardManager.prototype._disableEvents = function () {
        window.removeEventListener('keydown', this._onKeyDown, true);
        window.removeEventListener('keyup', this._onKeyUp, true);
    };
    KeyboardManager.prototype.setPreventDefault = function (key, value) {
        if (value === void 0) { value = true; }
        if (_isArray(key)) {
            for (var i = 0; i < key.length; i++) {
                this.preventDefaultKeys[key[i]] = value;
            }
        }
        else {
            this.preventDefaultKeys[key] = value;
        }
    };
    KeyboardManager.prototype._onKeyDown = function (evt) {
        var key = evt.which || evt.keyCode;
        console.log(key);
        if (this.preventDefaultKeys[key]) {
            evt.preventDefault();
        }
        if (!this.isDown(key)) {
            this.downKeys.push(key);
            this.pressedKeys[key] = true;
            this.emit('pressed', key);
        }
    };
    KeyboardManager.prototype._onKeyUp = function (evt) {
        var key = evt.which || evt.keyCode;
        if (this.preventDefaultKeys[key]) {
            evt.preventDefault();
        }
        if (this.isDown(key)) {
            this.pressedKeys[key] = false;
            this.releasedKeys[key] = true;
            var _index = this.downKeys.indexOf(key);
            if (_index !== -1)
                this.downKeys.splice(_index, 1);
            this.emit('released', key);
        }
    };
    KeyboardManager.prototype.isDown = function (key) {
        console.log(key, this.downKeys, this.downKeys.includes(key), this.downKeys.indexOf(key) !== -1);
        return (this.downKeys.indexOf(key) !== -1);
    };
    KeyboardManager.prototype.isPressed = function (key) {
        return !!this.pressedKeys[key];
    };
    KeyboardManager.prototype.isReleased = function (key) {
        return !!this.releasedKeys[key];
    };
    KeyboardManager.prototype.update = function () {
        this.hotKeys.forEach(function (key) { return key.update(); });
        for (var n = 0; n < this.downKeys.length; n++) {
            this.emit('down', this.downKeys[n]);
        }
        this.pressedKeys.length = 0;
        this.releasedKeys.length = 0;
    };
    KeyboardManager.prototype.getHotKey = function (key) {
        var hotKey = this.hotKeys[key] || new HotKey_1.default(key, this);
        this.hotKeys[key] = hotKey;
        return hotKey;
    };
    KeyboardManager.prototype.removeHotKey = function (key) {
        if (this.hotKeys[key]) {
            delete this.hotKeys[key];
        }
    };
    return KeyboardManager;
}(PIXI.utils.EventEmitter));
exports.default = KeyboardManager;
function _isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(/*! pixi.js */ "pixi.js");
var KeyboardManager_1 = __webpack_require__(/*! ./KeyboardManager */ "./src/KeyboardManager.ts");
var HotKey_1 = __webpack_require__(/*! ./HotKey */ "./src/HotKey.ts");
var Key_1 = __webpack_require__(/*! ./Key */ "./src/Key.ts");
var keyboard = {
    KeyboardManager: KeyboardManager_1.default,
    Key: Key_1.default,
    HotKey: HotKey_1.default
};
var AnyPIXI = PIXI;
if (!AnyPIXI.keyboard) {
    var keyboardManager = new KeyboardManager_1.default();
    keyboardManager.enable();
    AnyPIXI.keyboard = keyboard;
    AnyPIXI.keyboardManager = keyboardManager;
}
exports.default = keyboard;


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main.ts */"./src/main.ts");


/***/ }),

/***/ "pixi.js":
/*!***********************!*\
  !*** external "PIXI" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = PIXI;

/***/ })

/******/ });
//# sourceMappingURL=pixi-keyboard.js.map