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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ベクトルの演算をするクラス
 */
var PVector = function () {

  /**
   * @param {number} x - x方向のベクトル
   * @param {number} y - y方向のベクトル
   */
  function PVector(x, y) {
    _classCallCheck(this, PVector);

    this.x = x ? x : 0;
    this.y = y ? y : 0;
  }

  /**
   * 加算
   */


  _createClass(PVector, [{
    key: "add",
    value: function add(v) {
      this.x = this.x + v.x;
      this.y = this.y + v.y;
    }

    /**
     * 減算
     */

  }, {
    key: "sub",
    value: function sub(v) {
      this.x = this.x - v.x;
      this.y = this.y - v.y;
    }

    /**
     * 掛け算
     */

  }, {
    key: "mult",
    value: function mult(n) {
      this.x = this.x * n;
      this.y = this.y * n;
    }

    /**
     * 割り算
     */

  }, {
    key: "div",
    value: function div(n) {
      this.x = this.x / n;
      this.y = this.y / n;
    }

    /**
     * ベクトルの大きさを返す
     */

  }, {
    key: "mag",
    value: function mag() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     * 正規化（ベクトルの大きさを維持しつつ、大きさを1にすること）
     */

  }, {
    key: "normalize",
    value: function normalize() {
      var m = this.mag();

      if (m !== 0) {
        this.div(m);
      }
    }

    /**
     * ベクトルの大きさが引数maxより大きい場合、ベクトルの大きさをmaxにする。
     * @param {number} max - ベクトルの最大値
     */

  }, {
    key: "limit",
    value: function limit(max) {
      var m = this.mag();

      if (m > max) {
        this.normalize();
        this.mult(max);
      }
    }
  }, {
    key: "set",
    value: function set(x, y) {
      this.x = x;
      this.y = y;
    }
  }, {
    key: "get",
    value: function get() {
      return {
        x: this.x,
        y: this.y
      };
    }
  }], [{
    key: "random2D",
    value: function random2D() {
      this.x = Math.random() * 2 - 1;
      this.y = Math.random() * 2 - 1;

      this.staticNormalize();

      return {
        x: this.x,
        y: this.y
      };
    }
  }, {
    key: "sub",
    value: function sub(v1, v2) {
      return {
        x: v1.x - v2.x,
        y: v1.y - v2.y
      };
    }
  }, {
    key: "staticNormalize",
    value: function staticNormalize() {
      var m = this.staticMag();

      if (m !== 0) {
        this.staticDiv(m);
      }
    }
  }, {
    key: "staticMag",
    value: function staticMag() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }, {
    key: "staticDiv",
    value: function staticDiv(n) {
      this.x = this.x / n;
      this.y = this.y / n;
    }
  }, {
    key: "staticDiv2",
    value: function staticDiv2(n1, n2) {
      var x = n1.x / n2;
      var y = n1.y / n2;

      return {
        x: x,
        y: y
      };
    }

    /**
     * @method constrain
     * @param  {Number} n    number to constrain
     * @param  {Number} min  minimum limit
     * @param  {Number} max  maximum limit
     * @return {Number}      constrained number
     */

  }, {
    key: "constrain",
    value: function constrain(n, min, max) {
      return Math.max(Math.min(n, max), min);
    }
  }]);

  return PVector;
}();

exports.default = PVector;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = random;
function random(min, max) {
  return Math.random() * (max + 1 - min) + min;
}

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PVector = __webpack_require__(0);

var _PVector2 = _interopRequireDefault(_PVector);

var _random = __webpack_require__(1);

var _random2 = _interopRequireDefault(_random);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Liquid = function () {
  function Liquid(ctx, x, y, w, h, c) {
    _classCallCheck(this, Liquid);

    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
  }

  _createClass(Liquid, [{
    key: 'draw',
    value: function draw() {
      this.ctx.globalAlpha = 0.5;
      this.ctx.fillStyle = 'rgb(0, 0, 255)';
      this.ctx.fillRect(this.x, this.y, this.w, this.h);
      this.ctx.globalAlpha = 1;
    }
  }, {
    key: 'contains',
    value: function contains(mover) {
      var liquid = mover.location;

      return liquid.x > this.x && liquid.x < this.x + this.w && liquid.y > this.y && liquid.y < this.y + this.h;
    }
  }, {
    key: 'drag',
    value: function drag(mover) {
      var speed = mover.velocity.mag();
      var dragMagnitude = this.c * speed * speed;
      var dragForce = new _PVector2.default(mover.velocity.x, mover.velocity.y);

      dragForce.mult(-1);
      dragForce.normalize();
      dragForce.mult(dragMagnitude);

      return dragForce;
    }
  }]);

  return Liquid;
}();

var Mover = function () {
  _createClass(Mover, [{
    key: 'applyForce',
    value: function applyForce(force) {
      var f = force.get();

      // 力を質量で除算
      f.x = f.x / this.mass;
      f.y = f.y / this.mass;
      this.acceleration.add(f);
    }
  }]);

  function Mover(x, y, mass) {
    _classCallCheck(this, Mover);

    // Canvas Setup
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');

    // Vector Setup
    this.location = new _PVector2.default(x, y);
    this.velocity = new _PVector2.default(0, 0);
    this.acceleration = new _PVector2.default(0, 0);
    this.mass = mass;
    this.gravity = new _PVector2.default(0, 0.1 * mass);
  }

  _createClass(Mover, [{
    key: 'update',
    value: function update() {
      this.applyForce(this.gravity);
      this.velocity.add(this.acceleration);
      this.location.add(this.velocity);
      this.acceleration.mult(0);
    }
  }, {
    key: 'checkEdges',
    value: function checkEdges() {
      if (this.location.x > this.cw) {
        this.location.x = this.cw;
        this.velocity.x *= -1;
      } else if (this.location.x < 0) {
        this.location.x = 0;
        this.velocity.x *= -1;
      }

      if (this.location.y > this.ch) {
        this.location.y = this.ch;
        this.velocity.y *= -1;
      } else if (this.location.y < 0) {
        this.location.y = 0;
        this.velocity.y *= -1;
      }
    }
  }, {
    key: 'draw',
    value: function draw() {
      this.ctx.fillStyle = 'white';
      this.ctx.beginPath();
      this.ctx.arc(this.location.x, this.location.y, this.mass, 0, 2 * Math.PI);
      this.ctx.fill();
    }
  }]);

  return Mover;
}();

var Movers = function () {
  function Movers() {
    _classCallCheck(this, Movers);

    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.movers = [];
    this.count = 30;
    this.liquid = new Liquid(this.ctx, 0, this.ch / 2, this.cw, this.ch, 0.5);

    this.animation = this.animation.bind(this);

    for (var i = 0; i < this.count; i += 1) {
      this.movers.push(new Mover((0, _random2.default)(0, this.cw), (0, _random2.default)(0, 100), (0, _random2.default)(5, 15)));
    }
  }

  _createClass(Movers, [{
    key: 'animation',
    value: function animation() {
      window.requestAnimationFrame(this.animation);
      this.update();
      this.checkEdges();
      this.draw();
    }
  }, {
    key: 'update',
    value: function update() {
      var _this = this;

      this.movers.forEach(function (mover) {
        if (_this.liquid.contains(mover)) {
          var dragForce = _this.liquid.drag(mover);
          mover.applyForce(dragForce);
        }
        mover.update();
      });
    }
  }, {
    key: 'checkEdges',
    value: function checkEdges() {
      this.movers.forEach(function (mover) {
        mover.checkEdges();
      });
    }
  }, {
    key: 'draw',
    value: function draw() {
      this.ctx.clearRect(0, 0, this.cw, this.ch);
      this.liquid.draw();
      this.movers.forEach(function (mover) {
        mover.draw();
      });
    }
  }]);

  return Movers;
}();

var movers = new Movers();

movers.animation();

/***/ })

/******/ });