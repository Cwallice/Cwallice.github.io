(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var DatePicker = require("../../src/DatePicker").DatePicker;

var DatePickerInput = (function (_React$Component) {
  function DatePickerInput(props) {
    _classCallCheck(this, DatePickerInput);

    _get(Object.getPrototypeOf(DatePickerInput.prototype), "constructor", this).call(this, props);
    this.onDateChange = this.onDateChange.bind(this);
    this.state = {
      formattedDate: "",
      visible: false
    };
    this.onClick = this.onClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onHide = this.onHide.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  _inherits(DatePickerInput, _React$Component);

  _createClass(DatePickerInput, [{
    key: "onClick",
    value: function onClick() {
      this.setState({ visible: true });
    }
  }, {
    key: "onDateChange",
    value: function onDateChange(date, formattedDate) {
      this.setState({ date: date, formattedDate: formattedDate });
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      if (e.keyCode === 13) {
        this.setState({ visible: true });
      }
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      var date = new Date(e.target.value);
      date = isNaN(+date) ? new Date() : date;
      this.setState({ date: date, formattedDate: e.target.value });
    }
  }, {
    key: "onHide",
    value: function onHide() {
      this.setState({ visible: false });
    }
  }, {
    key: "ensureMountElement",
    value: function ensureMountElement() {
      if (this.mountElement) {
        return;
      }

      var mountElement = document.createElement("div");
      document.body.appendChild(mountElement);
      this.mountElement = mountElement;
    }
  }, {
    key: "renderDatePicker",
    value: function renderDatePicker() {
      this.ensureMountElement();
      var boundaries = React.findDOMNode(this.refs.datepickerInput).getBoundingClientRect();
      React.render(React.createElement(DatePicker, { style: { position: "absolute",
          left: boundaries.left,
          top: boundaries.bottom + 2 },
        onDateChange: this.onDateChange,
        onHide: this.onHide,
        visible: this.state.visible,
        selectedDate: this.state.date }), this.mountElement);
    }
  }, {
    key: "disposeDatePicker",
    value: function disposeDatePicker() {
      React.unmountComponentAtNode(this.mountElement);
      this.mountElement.parentNode.removeChild(this.mountElement);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      React.findDOMNode(this.refs.datepickerInput).focus();
      this.renderDatePicker();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.renderDatePicker();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.disposeDatePicker();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "datepickerInput" },
        React.createElement("input", { placeholder: "Click or press enter",
          ref: "datepickerInput", type: "text",
          value: this.state.formattedDate,
          onKeyDown: this.onKeyDown,
          onChange: this.onChange,
          onClick: this.onClick, onTouchStart: this.onClick })
      );
    }
  }]);

  return DatePickerInput;
})(React.Component);

React.render(React.createElement(DatePickerInput, null), document.getElementById("datepicker"));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../src/DatePicker":26,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":12}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":13}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":14}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":15}],6:[function(require,module,exports){
"use strict";

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],7:[function(require,module,exports){
"use strict";

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

exports["default"] = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;

      _Object$defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

exports.__esModule = true;
},{"babel-runtime/core-js/object/define-property":4}],8:[function(require,module,exports){
"use strict";

var _Object$assign = require("babel-runtime/core-js/object/assign")["default"];

exports["default"] = _Object$assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/assign":2}],9:[function(require,module,exports){
"use strict";

var _Object$getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor")["default"];

exports["default"] = function get(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var object = _x,
        property = _x2,
        receiver = _x3;
    desc = parent = getter = undefined;
    _again = false;
    if (object === null) object = Function.prototype;

    var desc = _Object$getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        _x = parent;
        _x2 = property;
        _x3 = receiver;
        _again = true;
        continue _function;
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  }
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/get-own-property-descriptor":5}],10:[function(require,module,exports){
"use strict";

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

exports["default"] = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) subClass.__proto__ = superClass;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/create":3}],11:[function(require,module,exports){
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
};

exports.__esModule = true;
},{}],12:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/$').core.Object.assign;
},{"../../modules/$":21,"../../modules/es6.object.assign":22}],13:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":21}],14:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":21}],15:[function(require,module,exports){
var $ = require('../../modules/$');
require('../../modules/es6.object.statics-accept-primitives');
module.exports = function getOwnPropertyDescriptor(it, key){
  return $.getDesc(it, key);
};
},{"../../modules/$":21,"../../modules/es6.object.statics-accept-primitives":23}],16:[function(require,module,exports){
var $        = require('./$')
  , enumKeys = require('./$.enum-keys');
// 19.1.2.1 Object.assign(target, source, ...)
/* eslint-disable no-unused-vars */
module.exports = Object.assign || function assign(target, source){
/* eslint-enable no-unused-vars */
  var T = Object($.assertDefined(target))
    , l = arguments.length
    , i = 1;
  while(l > i){
    var S      = $.ES5Object(arguments[i++])
      , keys   = enumKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)T[key = keys[j++]] = S[key];
  }
  return T;
};
},{"./$":21,"./$.enum-keys":18}],17:[function(require,module,exports){
var $          = require('./$')
  , global     = $.g
  , core       = $.core
  , isFunction = $.isFunction;
function ctx(fn, that){
  return function(){
    return fn.apply(that, arguments);
  };
}
// type bitmap
$def.F = 1;  // forced
$def.G = 2;  // global
$def.S = 4;  // static
$def.P = 8;  // proto
$def.B = 16; // bind
$def.W = 32; // wrap
function $def(type, name, source){
  var key, own, out, exp
    , isGlobal = type & $def.G
    , isProto  = type & $def.P
    , target   = isGlobal ? global : type & $def.S
        ? global[name] : (global[name] || {}).prototype
    , exports  = isGlobal ? core : core[name] || (core[name] = {});
  if(isGlobal)source = name;
  for(key in source){
    // contains in native
    own = !(type & $def.F) && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    if(isGlobal && !isFunction(target[key]))exp = source[key];
    // bind timers to global for call from export context
    else if(type & $def.B && own)exp = ctx(out, global);
    // wrap global constructors for prevent change them in library
    else if(type & $def.W && target[key] == out)!function(C){
      exp = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      exp.prototype = C.prototype;
    }(out);
    else exp = isProto && isFunction(out) ? ctx(Function.call, out) : out;
    // export
    exports[key] = exp;
    if(isProto)(exports.prototype || (exports.prototype = {}))[key] = out;
  }
}
module.exports = $def;
},{"./$":21}],18:[function(require,module,exports){
var $ = require('./$');
module.exports = function(it){
  var keys       = $.getKeys(it)
    , getDesc    = $.getDesc
    , getSymbols = $.getSymbols;
  if(getSymbols)$.each.call(getSymbols(it), function(key){
    if(getDesc(it, key).enumerable)keys.push(key);
  });
  return keys;
};
},{"./$":21}],19:[function(require,module,exports){
module.exports = function($){
  $.FW   = false;
  $.path = $.core;
  return $;
};
},{}],20:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var $ = require('./$')
  , toString = {}.toString
  , getNames = $.getNames;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

function getWindowNames(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
}

module.exports.get = function getOwnPropertyNames(it){
  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
  return getNames($.toObject(it));
};
},{"./$":21}],21:[function(require,module,exports){
'use strict';
var global = typeof self != 'undefined' ? self : Function('return this')()
  , core   = {}
  , defineProperty = Object.defineProperty
  , hasOwnProperty = {}.hasOwnProperty
  , ceil  = Math.ceil
  , floor = Math.floor
  , max   = Math.max
  , min   = Math.min;
// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
var DESC = !!function(){
  try {
    return defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
  } catch(e){ /* empty */ }
}();
var hide = createDefiner(1);
// 7.1.4 ToInteger
function toInteger(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
}
function desc(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
}
function simpleSet(object, key, value){
  object[key] = value;
  return object;
}
function createDefiner(bitmap){
  return DESC ? function(object, key, value){
    return $.setDesc(object, key, desc(bitmap, value));
  } : simpleSet;
}

function isObject(it){
  return it !== null && (typeof it == 'object' || typeof it == 'function');
}
function isFunction(it){
  return typeof it == 'function';
}
function assertDefined(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
}

var $ = module.exports = require('./$.fw')({
  g: global,
  core: core,
  html: global.document && document.documentElement,
  // http://jsperf.com/core-js-isobject
  isObject:   isObject,
  isFunction: isFunction,
  that: function(){
    return this;
  },
  // 7.1.4 ToInteger
  toInteger: toInteger,
  // 7.1.15 ToLength
  toLength: function(it){
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  },
  toIndex: function(index, length){
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  },
  has: function(it, key){
    return hasOwnProperty.call(it, key);
  },
  create:     Object.create,
  getProto:   Object.getPrototypeOf,
  DESC:       DESC,
  desc:       desc,
  getDesc:    Object.getOwnPropertyDescriptor,
  setDesc:    defineProperty,
  setDescs:   Object.defineProperties,
  getKeys:    Object.keys,
  getNames:   Object.getOwnPropertyNames,
  getSymbols: Object.getOwnPropertySymbols,
  assertDefined: assertDefined,
  // Dummy, fix for not array-like ES3 string in es5 module
  ES5Object: Object,
  toObject: function(it){
    return $.ES5Object(assertDefined(it));
  },
  hide: hide,
  def: createDefiner(0),
  set: global.Symbol ? simpleSet : hide,
  each: [].forEach
});
/* eslint-disable no-undef */
if(typeof __e != 'undefined')__e = core;
if(typeof __g != 'undefined')__g = global;
},{"./$.fw":19}],22:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $def = require('./$.def');
$def($def.S, 'Object', {assign: require('./$.assign')});
},{"./$.assign":16,"./$.def":17}],23:[function(require,module,exports){
var $        = require('./$')
  , $def     = require('./$.def')
  , isObject = $.isObject
  , toObject = $.toObject;
$.each.call(('freeze,seal,preventExtensions,isFrozen,isSealed,isExtensible,' +
  'getOwnPropertyDescriptor,getPrototypeOf,keys,getOwnPropertyNames').split(',')
, function(KEY, ID){
  var fn     = ($.core.Object || {})[KEY] || Object[KEY]
    , forced = 0
    , method = {};
  method[KEY] = ID == 0 ? function freeze(it){
    return isObject(it) ? fn(it) : it;
  } : ID == 1 ? function seal(it){
    return isObject(it) ? fn(it) : it;
  } : ID == 2 ? function preventExtensions(it){
    return isObject(it) ? fn(it) : it;
  } : ID == 3 ? function isFrozen(it){
    return isObject(it) ? fn(it) : true;
  } : ID == 4 ? function isSealed(it){
    return isObject(it) ? fn(it) : true;
  } : ID == 5 ? function isExtensible(it){
    return isObject(it) ? fn(it) : false;
  } : ID == 6 ? function getOwnPropertyDescriptor(it, key){
    return fn(toObject(it), key);
  } : ID == 7 ? function getPrototypeOf(it){
    return fn(Object($.assertDefined(it)));
  } : ID == 8 ? function keys(it){
    return fn(toObject(it));
  } : require('./$.get-names').get;
  try {
    fn('z');
  } catch(e){
    forced = 1;
  }
  $def($def.S + $def.F * forced, 'Object', method);
});
},{"./$":21,"./$.def":17,"./$.get-names":20}],24:[function(require,module,exports){
/*!
  Copyright (c) 2015 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function () {
	'use strict';

	function classNames () {

		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if ('string' === argType || 'number' === argType) {
				classes += ' ' + arg;

			} else if (Array.isArray(arg)) {
				classes += ' ' + classNames.apply(null, arg);

			} else if ('object' === argType) {
				for (var key in arg) {
					if (arg.hasOwnProperty(key) && arg[key]) {
						classes += ' ' + key;
					}
				}
			}
		}

		return classes.substr(1);
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd){
		// AMD. Register as an anonymous module.
		define(function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}

}());

},{}],25:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var Modes = require("./infrastructure/Modes");

var BottomNavigation = (function (_React$Component) {
  function BottomNavigation() {
    _classCallCheck(this, BottomNavigation);

    _get(Object.getPrototypeOf(BottomNavigation.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(BottomNavigation, _React$Component);

  _createClass(BottomNavigation, [{
    key: "drillDown",
    value: function drillDown(timeframe) {
      var newTimeframe = new Date(+timeframe);
      this.props.drillDown(Modes.Monthly, newTimeframe);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "datepicker-nav-bottom" },
        React.createElement(
          "span",
          { onClick: this.drillDown.bind(this, this.props.selectedDate) },
          this.props.cultureProvider.localize("Selected")
        ),
        React.createElement(
          "span",
          { onClick: this.drillDown.bind(this, new Date()) },
          this.props.cultureProvider.localize("Today")
        )
      );
    }
  }]);

  return BottomNavigation;
})(React.Component);

exports["default"] = BottomNavigation;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./infrastructure/Modes":40,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10}],26:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

var _Object$assign = require("babel-runtime/core-js/object/assign")["default"];

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var YearlyPane = require("./YearlyPane");
var MonthlyPane = require("./MonthlyPane");
var YearsRangePane = require("./YearsRangePane");
var YearlyNavigation = require("./YearlyNavigation");
var MonthlyNavigation = require("./MonthlyNavigation");
var YearsRangeNavigation = require("./YearsRangeNavigation");
var BottomNavigation = require("./BottomNavigation");
var CultureProvider = require("./infrastructure/CultureProvider");
var Modes = require("./infrastructure/Modes");

var ModeViews = {};

ModeViews[Modes.Yearly] = [YearlyNavigation, YearlyPane, BottomNavigation];
ModeViews[Modes.Monthly] = [MonthlyNavigation, MonthlyPane, BottomNavigation];
ModeViews[Modes.Years] = [YearsRangeNavigation, YearsRangePane, BottomNavigation];

var ContentPane = (function (_React$Component) {
  function ContentPane() {
    _classCallCheck(this, ContentPane);

    _get(Object.getPrototypeOf(ContentPane.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(ContentPane, _React$Component);

  _createClass(ContentPane, [{
    key: "render",
    value: function render() {
      var _this = this;

      var components = this.props.cases[this.props.mode].map(function (c, i) {
        return React.createElement(c, _Object$assign({}, _this.props, {
          key: "c" + i + _this.props.mode,
          style: {}
        }));
      });
      return React.createElement(
        "div",
        { className: "datepicker-pane", style: this.props.style },
        components
      );
    }
  }]);

  return ContentPane;
})(React.Component);

function trimDate(date) {
  var splitted = CultureProvider.splitDate(date);
  return new Date(splitted.year, splitted.month, splitted.day);
}

var DatePicker = (function (_React$Component2) {
  function DatePicker(props) {
    _classCallCheck(this, DatePicker);

    _get(Object.getPrototypeOf(DatePicker.prototype), "constructor", this).call(this, props);
    this.switchMode = this.switchMode.bind(this);
    this.setTimeframe = this.setTimeframe.bind(this);
    this.setDate = this.setDate.bind(this);
    this.drillDown = this.drillDown.bind(this);
    this._trackOutsideClick = this._trackOutsideClick.bind(this);
    this._handleCloseKey = this._handleCloseKey.bind(this);
    this.state = this.initState(this.props, {});
  }

  _inherits(DatePicker, _React$Component2);

  _createClass(DatePicker, [{
    key: "initState",
    value: function initState(props, state) {
      var newstate = {};
      newstate.mode = props.mode || Modes.Monthly;
      if (props.selectedDate !== state.selectedDate || state.selectedDate === undefined) {
        newstate.selectedDate = trimDate(props.selectedDate || new Date());
        newstate.timeframe = state.selectedDate;
      }
      return newstate;
    }
  }, {
    key: "setTimeframe",
    value: function setTimeframe(newDate) {
      newDate = trimDate(newDate);
      this.setState({ timeframe: newDate });
    }
  }, {
    key: "switchMode",
    value: function switchMode(mode) {
      this.setState({ mode: mode });
    }
  }, {
    key: "setDate",
    value: function setDate(date) {
      date = trimDate(date);
      this.setState({ timeframe: date, mode: Modes.Monthly, selectedDate: date }, (function () {
        this.props.onDateChange(date, this.props.cultureProvider.formatted(date));
      }).bind(this));
    }
  }, {
    key: "drillDown",
    value: function drillDown(mode, timeframe) {
      this.setState({ mode: mode, timeframe: trimDate(timeframe) });
    }
  }, {
    key: "_trackOutsideClick",

    /*private sections*/
    value: function _trackOutsideClick(e) {
      if (!this.props.visible) {
        return;
      }
      var target = e.target;
      var root = React.findDOMNode(this);
      while (target) {
        if (target === root) {
          return;
        }
        target = target.parentElement;
      }
      this.props.onHide();
    }
  }, {
    key: "_handleCloseKey",
    value: function _handleCloseKey(e) {
      if (e.keyCode === 27) {
        this.props.onHide();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      this.setState(this.initState(newProps, this.state));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("mousedown", this._trackOutsideClick);
      document.addEventListener("touchstart", this._trackOutsideClick);
      document.addEventListener("keydown", this._handleCloseKey);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("mousedown", this._trackOutsideClick);
      document.removeEventListener("touchstart", this._trackOutsideClick);
      document.addEventListener("keydown", this._handleCloseKey);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.visible) {
        return null;
      }
      return React.createElement(ContentPane, _extends({}, this.props, {
        mode: this.state.mode,
        timeframe: this.state.timeframe,
        selectedDate: this.state.selectedDate,
        cases: ModeViews,
        setTimeframe: this.setTimeframe,
        setDate: this.setDate,
        drillDown: this.drillDown,
        switchMode: this.switchMode }));
    }
  }]);

  return DatePicker;
})(React.Component);

DatePicker.defaultProps = {
  cultureProvider: new CultureProvider(),
  visible: false,
  style: {},
  onHide: function onHide() {}
};

module.exports = {
  DatePicker: DatePicker,
  CultureProvider: CultureProvider
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./BottomNavigation":25,"./MonthlyNavigation":29,"./MonthlyPane":30,"./YearlyNavigation":34,"./YearlyPane":35,"./YearsRangeNavigation":36,"./YearsRangePane":37,"./infrastructure/CultureProvider":38,"./infrastructure/Modes":40,"babel-runtime/core-js/object/assign":2,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/extends":8,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10}],27:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var cn = require("classnames");
var today = new Date();
today = new Date(today.getFullYear(), today.getMonth(), today.getDate());

var DayCell = (function (_React$Component) {
  function DayCell(props) {
    _classCallCheck(this, DayCell);

    _get(Object.getPrototypeOf(DayCell.prototype), "constructor", this).call(this, props);
    this.onClick = this.onClick.bind(this);
  }

  _inherits(DayCell, _React$Component);

  _createClass(DayCell, [{
    key: "isSelected",
    value: function isSelected() {
      return +this.props.date === +this.props.selectedDate;
    }
  }, {
    key: "isToday",
    value: function isToday() {
      return +this.props.date === +today;
    }
  }, {
    key: "offTimeframe",
    value: function offTimeframe() {
      return this.props.date.getMonth() !== this.props.timeframe.getMonth();
    }
  }, {
    key: "onClick",
    value: function onClick() {
      this.props.setDate(this.props.date);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: cn("datepicker-date-cell", {
            "datepicker-today": !this.isSelected() && this.isToday(),
            "datepicker-selected": this.isSelected(),
            "datepicker-weekend": this.props.cultureProvider.isHoliday(this.props.date),
            "datepicker-timeframe-off": this.offTimeframe()
          }), onClick: this.onClick },
        this.props.date.getDate()
      );
    }
  }]);

  return DayCell;
})(React.Component);

DayCell.propTypes = {
  date: React.PropTypes.object.isRequired,
  setDate: React.PropTypes.func.isRequired
};

exports["default"] = DayCell;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10,"classnames":24}],28:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var Modes = require("./infrastructure/Modes");
var cn = require("classnames");

var MonthCell = (function (_React$Component) {
  function MonthCell(props) {
    _classCallCheck(this, MonthCell);

    _get(Object.getPrototypeOf(MonthCell.prototype), "constructor", this).call(this, props);
    this.onClick = this.onClick.bind(this);
  }

  _inherits(MonthCell, _React$Component);

  _createClass(MonthCell, [{
    key: "onClick",
    value: function onClick() {
      var timeframe = new Date(+this.props.timeframe);
      timeframe.setMonth(this.props.month);
      this.props.drillDown(Modes.Monthly, timeframe);
    }
  }, {
    key: "isSelected",
    value: function isSelected() {
      return this.props.month === this.props.selectedDate.getMonth() && this.props.selectedDate.getFullYear() === this.props.timeframe.getFullYear();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { onClick: this.onClick, className: cn("datepicker-month-cell", {
            "datepicker-selected": this.isSelected()
          }) },
        this.props.cultureProvider.monthNameShort(this.props.month)
      );
    }
  }]);

  return MonthCell;
})(React.Component);

MonthCell.propTypes = {
  month: React.PropTypes.number.isRequired,
  onSelect: React.PropTypes.func
};

exports["default"] = MonthCell;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./infrastructure/Modes":40,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10,"classnames":24}],29:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var NavigationPane = require("./NavigationPane");
var Direction = require("./infrastructure/Direction");
var Modes = require("./infrastructure/Modes");

var MonthlyNavigation = (function (_React$Component) {
  function MonthlyNavigation(props) {
    _classCallCheck(this, MonthlyNavigation);

    _get(Object.getPrototypeOf(MonthlyNavigation.prototype), "constructor", this).call(this, props);
    this.onNavigate = this.onNavigate.bind(this);
  }

  _inherits(MonthlyNavigation, _React$Component);

  _createClass(MonthlyNavigation, [{
    key: "onNavigate",
    value: function onNavigate(direction) {
      var dmonth = direction === Direction.Left ? -1 : 1;
      var newtimeframe = new Date(+this.props.timeframe);
      newtimeframe.setMonth(newtimeframe.getMonth() + dmonth);
      this.props.setTimeframe(newtimeframe);
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this.props.cultureProvider.monthName(this.props.timeframe.getMonth()) + " " + this.props.timeframe.getFullYear();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(NavigationPane, _extends({}, this.props, {
        nextMode: Modes.Yearly,
        title: this.getTitle(),
        onNavigate: this.onNavigate }));
    }
  }]);

  return MonthlyNavigation;
})(React.Component);

exports["default"] = MonthlyNavigation;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./NavigationPane":31,"./infrastructure/Direction":39,"./infrastructure/Modes":40,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/extends":8,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10}],30:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var DayCell = require("./DayCell");
var WeekHeaderCell = require("./WeekHeaderCell");
var DAYS_BLOCK_COLUMNS = 7;
var DAYS_BLOCK_ROWS = 5;
var DAY_TIMESPAN = 24 * 3600 * 1000;

var MonthlyPaneHeader = (function (_React$Component) {
  function MonthlyPaneHeader() {
    _classCallCheck(this, MonthlyPaneHeader);

    _get(Object.getPrototypeOf(MonthlyPaneHeader.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(MonthlyPaneHeader, _React$Component);

  _createClass(MonthlyPaneHeader, [{
    key: "render",
    value: function render() {
      var weekdays = [];
      for (var col = 0; col < DAYS_BLOCK_COLUMNS; col++) {
        weekdays.push(React.createElement(
          "th",
          { key: col + "mh" },
          React.createElement(WeekHeaderCell, {
            weekday: this.props.cultureProvider.dayNameShort(col) })
        ));
      }
      return React.createElement(
        "tr",
        null,
        weekdays
      );
    }
  }]);

  return MonthlyPaneHeader;
})(React.Component);

var MonthlyPaneCell = (function (_React$Component2) {
  function MonthlyPaneCell() {
    _classCallCheck(this, MonthlyPaneCell);

    _get(Object.getPrototypeOf(MonthlyPaneCell.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(MonthlyPaneCell, _React$Component2);

  _createClass(MonthlyPaneCell, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "td",
        null,
        React.createElement(DayCell, _extends({}, this.props, { date: this.props.date }))
      );
    }
  }]);

  return MonthlyPaneCell;
})(React.Component);

var MonthlyPaneRow = (function (_React$Component3) {
  function MonthlyPaneRow(props) {
    _classCallCheck(this, MonthlyPaneRow);

    _get(Object.getPrototypeOf(MonthlyPaneRow.prototype), "constructor", this).call(this, props);
  }

  _inherits(MonthlyPaneRow, _React$Component3);

  _createClass(MonthlyPaneRow, [{
    key: "render",
    value: function render() {
      var cells = [];
      for (var col = 0; col < DAYS_BLOCK_COLUMNS; col++) {
        cells.push(React.createElement(MonthlyPaneCell, _extends({}, this.props, {
          key: col + this.props.row * DAYS_BLOCK_COLUMNS,
          date: new Date(+this.props.startDate + DAY_TIMESPAN * col) })));
      }
      return React.createElement(
        "tr",
        null,
        cells
      );
    }
  }]);

  return MonthlyPaneRow;
})(React.Component);

var MonthlyPane = (function (_React$Component4) {
  function MonthlyPane() {
    _classCallCheck(this, MonthlyPane);

    _get(Object.getPrototypeOf(MonthlyPane.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(MonthlyPane, _React$Component4);

  _createClass(MonthlyPane, [{
    key: "getStartDate",
    value: function getStartDate() {
      var monthStart = new Date(this.props.timeframe.getFullYear(), this.props.timeframe.getMonth());
      var startDate = monthStart;
      var startdiff = monthStart.getDay() - this.props.cultureProvider.weekDayStart;

      if (startdiff > 0) {
        startDate = new Date(monthStart - DAY_TIMESPAN * startdiff);
      }
      return startDate;
    }
  }, {
    key: "render",
    value: function render() {
      var rows = [];
      var startDate = this.getStartDate();
      for (var row = 0; row < DAYS_BLOCK_ROWS; row++) {
        rows.push(React.createElement(MonthlyPaneRow, _extends({}, this.props, {
          key: row,
          row: row,
          startDate: new Date(+startDate + DAY_TIMESPAN * row * DAYS_BLOCK_COLUMNS) })));
      }
      return React.createElement(
        "div",
        null,
        React.createElement(
          "table",
          null,
          React.createElement(MonthlyPaneHeader, this.props),
          rows
        )
      );
    }
  }]);

  return MonthlyPane;
})(React.Component);

exports["default"] = MonthlyPane;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./DayCell":27,"./WeekHeaderCell":32,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/extends":8,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10}],31:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var Direction = require("./infrastructure/Direction.js");
var cn = require("classnames");

var NavButton = (function (_React$Component) {
  function NavButton(props) {
    _classCallCheck(this, NavButton);

    _get(Object.getPrototypeOf(NavButton.prototype), "constructor", this).call(this, props);
    this.onClick = this.onClick.bind(this);
  }

  _inherits(NavButton, _React$Component);

  _createClass(NavButton, [{
    key: "onClick",
    value: function onClick() {
      this.props.onNavigate(this.props.direction);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("span", {
        className: cn("datepicker-nav-button", {
          "arrow-left": this.props.direction === Direction.Left,
          "arrow-right": this.props.direction === Direction.Right
        }), onClick: this.onClick });
    }
  }]);

  return NavButton;
})(React.Component);

var NavigationPane = (function (_React$Component2) {
  function NavigationPane(props) {
    _classCallCheck(this, NavigationPane);

    _get(Object.getPrototypeOf(NavigationPane.prototype), "constructor", this).call(this, props);
    this.onSwitchMode = this.onSwitchMode.bind(this);
  }

  _inherits(NavigationPane, _React$Component2);

  _createClass(NavigationPane, [{
    key: "onSwitchMode",
    value: function onSwitchMode() {
      this.props.switchMode(this.props.nextMode);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "datepicker-nav-pane" },
        React.createElement(NavButton, _extends({}, this.props, { direction: Direction.Left, on: true })),
        React.createElement(
          "span",
          { className: "datepicker-nav-title", onClick: this.onSwitchMode },
          this.props.title
        ),
        React.createElement(NavButton, _extends({}, this.props, { direction: Direction.Right }))
      );
    }
  }]);

  return NavigationPane;
})(React.Component);

exports["default"] = NavigationPane;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./infrastructure/Direction.js":39,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/extends":8,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10,"classnames":24}],32:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var WeekHeaderCell = (function (_React$Component) {
  function WeekHeaderCell() {
    _classCallCheck(this, WeekHeaderCell);

    _get(Object.getPrototypeOf(WeekHeaderCell.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(WeekHeaderCell, _React$Component);

  _createClass(WeekHeaderCell, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "datepicker-weekheader-cell" },
        this.props.weekday.toUpperCase()
      );
    }
  }]);

  return WeekHeaderCell;
})(React.Component);

exports["default"] = WeekHeaderCell;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10}],33:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var Modes = require("./infrastructure/Modes");
var cn = require("classnames");

var YearCell = (function (_React$Component) {
  function YearCell(props) {
    _classCallCheck(this, YearCell);

    _get(Object.getPrototypeOf(YearCell.prototype), "constructor", this).call(this, props);
    this.onClick = this.onClick.bind(this);
  }

  _inherits(YearCell, _React$Component);

  _createClass(YearCell, [{
    key: "onClick",
    value: function onClick() {
      var timeframe = new Date(+this.props.timeframe);
      timeframe.setFullYear(this.props.year);
      this.props.drillDown(Modes.Yearly, timeframe);
    }
  }, {
    key: "isSelected",
    value: function isSelected() {
      return this.props.year === this.props.selectedDate.getFullYear();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: cn("datepicker-year-cell", {
            "datepicker-selected": this.isSelected()
          }),
          onClick: this.onClick },
        this.props.year
      );
    }
  }]);

  return YearCell;
})(React.Component);

YearCell.propTypes = {
  year: React.PropTypes.number.isRequired
};

exports["default"] = YearCell;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./infrastructure/Modes":40,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10,"classnames":24}],34:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var NavigationPane = require("./NavigationPane");
var Direction = require("./infrastructure/Direction");
var Modes = require("./infrastructure/Modes");

var YearlyNavigation = (function (_React$Component) {
  function YearlyNavigation(props) {
    _classCallCheck(this, YearlyNavigation);

    _get(Object.getPrototypeOf(YearlyNavigation.prototype), "constructor", this).call(this, props);
    this.onNavigate = this.onNavigate.bind(this);
  }

  _inherits(YearlyNavigation, _React$Component);

  _createClass(YearlyNavigation, [{
    key: "onNavigate",
    value: function onNavigate(direction) {
      var dyear = direction === Direction.Left ? -1 : 1;
      var newtimeframe = new Date(+this.props.timeframe);
      newtimeframe.setFullYear(newtimeframe.getFullYear() + dyear);
      this.props.setTimeframe(newtimeframe);
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this.props.timeframe.getFullYear();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(NavigationPane, _extends({}, this.props, {
        nextMode: Modes.Years,
        title: this.getTitle(),
        onNavigate: this.onNavigate }));
    }
  }]);

  return YearlyNavigation;
})(React.Component);

exports["default"] = YearlyNavigation;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./NavigationPane":31,"./infrastructure/Direction":39,"./infrastructure/Modes":40,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/extends":8,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10}],35:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var MonthCell = require("./MonthCell");
var MONTH_BLOCK_COLUMNS = 3;
var MONTH_BLOCK_ROWS = 4;

var YearlyPaneCell = (function (_React$Component) {
  function YearlyPaneCell() {
    _classCallCheck(this, YearlyPaneCell);

    _get(Object.getPrototypeOf(YearlyPaneCell.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(YearlyPaneCell, _React$Component);

  _createClass(YearlyPaneCell, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "td",
        null,
        _react2["default"].createElement(MonthCell, this.props)
      );
    }
  }]);

  return YearlyPaneCell;
})(_react2["default"].Component);

var YearlyPaneRow = (function (_React$Component2) {
  function YearlyPaneRow() {
    _classCallCheck(this, YearlyPaneRow);

    _get(Object.getPrototypeOf(YearlyPaneRow.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(YearlyPaneRow, _React$Component2);

  _createClass(YearlyPaneRow, [{
    key: "buildCell",
    value: function buildCell() {
      return _react2["default"].createElement(YearlyPaneCell, null);
    }
  }, {
    key: "render",
    value: function render() {
      var cells = [];
      for (var col = 0; col < MONTH_BLOCK_COLUMNS; col++) {
        cells.push(_react2["default"].createElement(YearlyPaneCell, _extends({
          key: col + "m" + this.props.startMonth
        }, this.props, {
          month: this.props.startMonth + col })));
      }
      return _react2["default"].createElement(
        "tr",
        null,
        cells
      );
    }
  }]);

  return YearlyPaneRow;
})(_react2["default"].Component);

var YearlyPane = (function (_React$Component3) {
  function YearlyPane() {
    _classCallCheck(this, YearlyPane);

    _get(Object.getPrototypeOf(YearlyPane.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(YearlyPane, _React$Component3);

  _createClass(YearlyPane, [{
    key: "render",
    value: function render() {
      var rows = [];
      for (var row = 0; row < MONTH_BLOCK_ROWS; row++) {
        rows.push(_react2["default"].createElement(YearlyPaneRow, _extends({}, this.props, {
          key: row + "m",
          startMonth: row * MONTH_BLOCK_COLUMNS })));
      }
      return _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement(
          "table",
          null,
          rows
        )
      );
    }
  }]);

  return YearlyPane;
})(_react2["default"].Component);

exports["default"] = YearlyPane;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./MonthCell":28,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/extends":8,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/interop-require-default":11}],36:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var NavigationPane = require("./NavigationPane");
var Direction = require("./infrastructure/Direction");
var Modes = require("./infrastructure/Modes");

var YearsRangeNavigation = (function (_React$Component) {
  function YearsRangeNavigation(props) {
    _classCallCheck(this, YearsRangeNavigation);

    _get(Object.getPrototypeOf(YearsRangeNavigation.prototype), "constructor", this).call(this, props);
    this.onNavigate = this.onNavigate.bind(this);
  }

  _inherits(YearsRangeNavigation, _React$Component);

  _createClass(YearsRangeNavigation, [{
    key: "onNavigate",
    value: function onNavigate(direction) {
      var drange = direction === Direction.Left ? -1 : 1;
      var newtimeframe = new Date(+this.props.timeframe);
      newtimeframe.setFullYear(newtimeframe.getFullYear() + drange * 16);
      this.props.setTimeframe(newtimeframe);
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      var start = (this.props.timeframe.getFullYear() / 16 | 0) * 16;
      return start + " - " + (start + 16);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(NavigationPane, _extends({}, this.props, {
        title: this.getTitle(),
        nextMode: Modes.Monthly,
        onNavigate: this.onNavigate }));
    }
  }]);

  return YearsRangeNavigation;
})(React.Component);

exports["default"] = YearsRangeNavigation;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./NavigationPane":31,"./infrastructure/Direction":39,"./infrastructure/Modes":40,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/extends":8,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10}],37:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var YearCell = require("./YearCell");
var YEARS_BLOCK_SIDE = 4;
var YEARS_BLOCK_SIZE = YEARS_BLOCK_SIDE * YEARS_BLOCK_SIDE;

var YearsPaneCell = (function (_React$Component) {
  function YearsPaneCell() {
    _classCallCheck(this, YearsPaneCell);

    _get(Object.getPrototypeOf(YearsPaneCell.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(YearsPaneCell, _React$Component);

  _createClass(YearsPaneCell, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "td",
        null,
        React.createElement(YearCell, this.props)
      );
    }
  }]);

  return YearsPaneCell;
})(React.Component);

var YearsPaneRow = (function (_React$Component2) {
  function YearsPaneRow() {
    _classCallCheck(this, YearsPaneRow);

    _get(Object.getPrototypeOf(YearsPaneRow.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(YearsPaneRow, _React$Component2);

  _createClass(YearsPaneRow, [{
    key: "render",
    value: function render() {
      var cells = [];
      for (var col = 0; col < YEARS_BLOCK_SIDE; col++) {
        cells.push(React.createElement(YearsPaneCell, _extends({}, this.props, {
          key: this.props.fromYear + col,
          year: this.props.fromYear + col
        })));
      }
      return React.createElement(
        "tr",
        null,
        cells
      );
    }
  }]);

  return YearsPaneRow;
})(React.Component);

var YearsRangePane = (function (_React$Component3) {
  function YearsRangePane() {
    _classCallCheck(this, YearsRangePane);

    _get(Object.getPrototypeOf(YearsRangePane.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(YearsRangePane, _React$Component3);

  _createClass(YearsRangePane, [{
    key: "render",
    value: function render() {
      var rows = [];

      var fromYear = (this.props.timeframe.getFullYear() / YEARS_BLOCK_SIZE | 0) * YEARS_BLOCK_SIZE;
      for (var row = 0; row < YEARS_BLOCK_SIDE; row++) {
        rows.push(React.createElement(YearsPaneRow, _extends({ key: row + "y",
          fromYear: fromYear + YEARS_BLOCK_SIDE * row
        }, this.props)));
      }
      return React.createElement(
        "div",
        null,
        React.createElement(
          "table",
          null,
          rows
        )
      );
    }
  }]);

  return YearsRangePane;
})(React.Component);

exports["default"] = YearsRangePane;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./YearCell":33,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/extends":8,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10}],38:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var weekDaysNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var CultureProvider = (function () {
  function CultureProvider() {
    var locale = arguments[0] === undefined ? "en-us" : arguments[0];
    var format = arguments[1] === undefined ? "dd/mm/yyyy" : arguments[1];

    _classCallCheck(this, CultureProvider);

    this.locale = locale;
    this.format = format;
    this.weekDayStart = 0;
  }

  _createClass(CultureProvider, [{
    key: "getWeekDaysNames",
    value: function getWeekDaysNames() {
      return weekDaysNames;
    }
  }, {
    key: "getMonthNames",
    value: function getMonthNames() {
      return monthNames;
    }
  }, {
    key: "monthName",
    value: function monthName(month) {
      return monthNames[month];
    }
  }, {
    key: "monthNameShort",
    value: function monthNameShort(month) {
      return this.monthName(month).slice(0, 3);
    }
  }, {
    key: "dayName",
    value: function dayName(day) {
      return weekDaysNames[day];
    }
  }, {
    key: "dayNameShort",
    value: function dayNameShort(day) {
      return this.dayName(day).slice(0, 2);
    }
  }, {
    key: "isHoliday",
    value: function isHoliday(date) {
      return date.getDay() % 6 === 0 || date.getDay() % 7 === 0;
    }
  }, {
    key: "localize",
    value: function localize(key) {
      return key;
    }
  }, {
    key: "formatted",
    value: function formatted(date) {
      //format ) {
      var sdate = CultureProvider.splitDate(date);
      //format = format || this.format;
      var formattedValue = [];
      formattedValue.push(("0" + sdate.month).slice(-2));
      formattedValue.push(("0" + sdate.day).slice(-2));
      formattedValue.push(("0000" + sdate.year).slice(-4));
      return formattedValue.join("/");
    }
  }], [{
    key: "splitDate",
    value: function splitDate(date) {
      return {
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()
      };
    }
  }]);

  return CultureProvider;
})();

exports["default"] = CultureProvider;
module.exports = exports["default"];

},{"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Direction = {
  Left: "left",
  Right: "right"
};

exports["default"] = Direction;
module.exports = exports["default"];

},{}],40:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Modes = {
  Yearly: "yearly",
  Monthly: "monthly",
  Years: "yearsrange"
};

exports["default"] = Modes;
module.exports = exports["default"];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL2V4YW1wbGUvanMvYXBwLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3MuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVmLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZW51bS1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZncuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nZXQtbmFtZXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnN0YXRpY3MtYWNjZXB0LXByaW1pdGl2ZXMuanMiLCJub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL0JvdHRvbU5hdmlnYXRpb24uanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9EYXRlUGlja2VyLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvRGF5Q2VsbC5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL01vbnRoQ2VsbC5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL01vbnRobHlOYXZpZ2F0aW9uLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvTW9udGhseVBhbmUuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9OYXZpZ2F0aW9uUGFuZS5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL1dlZWtIZWFkZXJDZWxsLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvWWVhckNlbGwuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9ZZWFybHlOYXZpZ2F0aW9uLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvWWVhcmx5UGFuZS5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL1llYXJzUmFuZ2VOYXZpZ2F0aW9uLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvWWVhcnNSYW5nZVBhbmUuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9pbmZyYXN0cnVjdHVyZS9DdWx0dXJlUHJvdmlkZXIuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9pbmZyYXN0cnVjdHVyZS9EaXJlY3Rpb24uanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9pbmZyYXN0cnVjdHVyZS9Nb2Rlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFFLE9BQU8sQ0FBRSxDQUFDO0FBQ2pDLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBRSxzQkFBc0IsQ0FBRSxDQUFDLFVBQVUsQ0FBQzs7SUFFMUQsZUFBZTtBQUNSLFdBRFAsZUFBZSxDQUNOLEtBQUssRUFBRzswQkFEakIsZUFBZTs7QUFFakIsK0JBRkUsZUFBZSw2Q0FFVixLQUFLLEVBQUc7QUFDZixRQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFDO0FBQ25ELFFBQUksQ0FBQyxLQUFLLEdBQUc7QUFDWCxtQkFBYSxFQUFFLEVBQUU7QUFDakIsYUFBTyxFQUFFLEtBQUs7S0FDZixDQUFDO0FBQ0YsUUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztBQUN6QyxRQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFDO0FBQzdDLFFBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7QUFDdkMsUUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LENBQUUsQ0FBRSxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQSxDQUFHLEtBQUssQ0FBRSxDQUFDLENBQUMsQ0FBRSxDQUFFLENBQUM7QUFDM0QsYUFBTyxjQUFjLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBRSxDQUFDO0tBQ25DOzs7V0FsQmUsbUJBQUUsSUFBSSxFQUFFO0FBQ3RCLGFBQU87QUFDTCxXQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUNuQixhQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUN0QixZQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRTtPQUN6QixDQUFDO0tBQ0g7OztTQWpDRyxlQUFlOzs7cUJBZ0ROLGVBQWU7Ozs7Ozs7OztBQ25EOUIsSUFBTSxTQUFTLEdBQUc7QUFDaEIsTUFBSSxFQUFFLE1BQU07QUFDWixPQUFLLEVBQUUsT0FBTztDQUNmLENBQUM7O3FCQUVhLFNBQVM7Ozs7Ozs7OztBQ0x4QixJQUFNLEtBQUssR0FBRztBQUNaLFFBQU0sRUFBRSxRQUFRO0FBQ2hCLFNBQU8sRUFBRSxTQUFTO0FBQ2xCLE9BQUssRUFBRSxZQUFZO0NBQ3BCLENBQUM7O3FCQUVhLEtBQUsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCBcInJlYWN0XCIgKTtcbmNvbnN0IERhdGVQaWNrZXIgPSByZXF1aXJlKCBcIi4uLy4uL3NyYy9EYXRlUGlja2VyXCIgKS5EYXRlUGlja2VyO1xuXG5jbGFzcyBEYXRlUGlja2VySW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLm9uRGF0ZUNoYW5nZSA9IHRoaXMub25EYXRlQ2hhbmdlLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm9ybWF0dGVkRGF0ZTogXCJcIixcbiAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCggdGhpcyApO1xuICAgIHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCggdGhpcyApO1xuICAgIHRoaXMub25IaWRlID0gdGhpcy5vbkhpZGUuYmluZCggdGhpcyApO1xuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQoIHRoaXMgKTtcbiAgfVxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoIHsgdmlzaWJsZTogdHJ1ZSB9ICk7XG4gIH1cbiAgb25EYXRlQ2hhbmdlKCBkYXRlLCBmb3JtYXR0ZWREYXRlICkge1xuICAgIHRoaXMuc2V0U3RhdGUoIHsgZGF0ZTogZGF0ZSwgZm9ybWF0dGVkRGF0ZTogZm9ybWF0dGVkRGF0ZSB9ICk7XG4gIH1cbiAgb25LZXlEb3duKCBlICkge1xuICAgIGlmKCBlLmtleUNvZGUgPT09IDEzICl7XG4gICAgICB0aGlzLnNldFN0YXRlKCB7IHZpc2libGU6IHRydWUgfSApO1xuICAgIH1cbiAgfVxuICBvbkNoYW5nZSggZSApIHtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCAgZS50YXJnZXQudmFsdWUgICk7XG4gICAgZGF0ZSA9IGlzTmFOKCArZGF0ZSApID8gbmV3IERhdGUoKSA6IGRhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSggeyBkYXRlOiBkYXRlLCBmb3JtYXR0ZWREYXRlOiBlLnRhcmdldC52YWx1ZSB9ICk7XG4gIH1cbiAgb25IaWRlKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSggeyB2aXNpYmxlOiBmYWxzZSB9ICk7XG4gIH1cbiAgZW5zdXJlTW91bnRFbGVtZW50KCkge1xuICAgIGlmKCB0aGlzLm1vdW50RWxlbWVudCApe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtb3VudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggbW91bnRFbGVtZW50ICk7XG4gICAgdGhpcy5tb3VudEVsZW1lbnQgPSBtb3VudEVsZW1lbnQ7XG4gIH1cbiAgcmVuZGVyRGF0ZVBpY2tlcigpe1xuICAgIHRoaXMuZW5zdXJlTW91bnRFbGVtZW50KCk7XG4gICAgdmFyIGJvdW5kYXJpZXMgPSBSZWFjdC5maW5kRE9NTm9kZSggdGhpcy5yZWZzLmRhdGVwaWNrZXJJbnB1dCApLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIFJlYWN0LnJlbmRlciggPERhdGVQaWNrZXIgc3R5bGU9eyB7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYm91bmRhcmllcy5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogYm91bmRhcmllcy5ib3R0b20gKyAyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGF0ZUNoYW5nZT17IHRoaXMub25EYXRlQ2hhbmdlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZSA9IHsgdGhpcy5vbkhpZGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17IHRoaXMuc3RhdGUudmlzaWJsZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERhdGU9eyB0aGlzLnN0YXRlLmRhdGUgfS8+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VudEVsZW1lbnQpO1xuICB9XG4gIGRpc3Bvc2VEYXRlUGlja2VyKCkge1xuICAgIFJlYWN0LnVubW91bnRDb21wb25lbnRBdE5vZGUoIHRoaXMubW91bnRFbGVtZW50ICk7XG4gICAgdGhpcy5tb3VudEVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggdGhpcy5tb3VudEVsZW1lbnQgKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBSZWFjdC5maW5kRE9NTm9kZSggdGhpcy5yZWZzLmRhdGVwaWNrZXJJbnB1dCApLmZvY3VzKCk7XG4gICAgdGhpcy5yZW5kZXJEYXRlUGlja2VyKCk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMucmVuZGVyRGF0ZVBpY2tlcigpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgdGhpcy5kaXNwb3NlRGF0ZVBpY2tlcigpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkYXRlcGlja2VySW5wdXRcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiQ2xpY2sgb3IgcHJlc3MgZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgcmVmPVwiZGF0ZXBpY2tlcklucHV0XCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9eyB0aGlzLnN0YXRlLmZvcm1hdHRlZERhdGUgfVxuICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbktleURvd24gfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlIH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uQ2xpY2sgfSBvblRvdWNoU3RhcnQ9eyB0aGlzLm9uQ2xpY2sgfS8+PC9kaXY+O1xuICB9XG59XG5cblJlYWN0LnJlbmRlcig8RGF0ZVBpY2tlcklucHV0Lz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBcImRhdGVwaWNrZXJcIiApICk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG5cbiAgICAgIF9PYmplY3QkZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGFzc2lnbiA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX09iamVjdCRhc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX09iamVjdCRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIGdldChfeCwgX3gyLCBfeDMpIHtcbiAgdmFyIF9hZ2FpbiA9IHRydWU7XG5cbiAgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7XG4gICAgdmFyIG9iamVjdCA9IF94LFxuICAgICAgICBwcm9wZXJ0eSA9IF94MixcbiAgICAgICAgcmVjZWl2ZXIgPSBfeDM7XG4gICAgZGVzYyA9IHBhcmVudCA9IGdldHRlciA9IHVuZGVmaW5lZDtcbiAgICBfYWdhaW4gPSBmYWxzZTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgICB2YXIgZGVzYyA9IF9PYmplY3QkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpO1xuXG4gICAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuXG4gICAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfeCA9IHBhcmVudDtcbiAgICAgICAgX3gyID0gcHJvcGVydHk7XG4gICAgICAgIF94MyA9IHJlY2VpdmVyO1xuICAgICAgICBfYWdhaW4gPSB0cnVlO1xuICAgICAgICBjb250aW51ZSBfZnVuY3Rpb247XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykge1xuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBkZXNjLmdldDtcblxuICAgICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX09iamVjdCRjcmVhdGUgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGVcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBfT2JqZWN0JGNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKS5jb3JlLk9iamVjdC5hc3NpZ247IiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlKFAsIEQpe1xuICByZXR1cm4gJC5jcmVhdGUoUCwgRCk7XG59OyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJC5zZXREZXNjKGl0LCBrZXksIGRlc2MpO1xufTsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnN0YXRpY3MtYWNjZXB0LXByaW1pdGl2ZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICByZXR1cm4gJC5nZXREZXNjKGl0LCBrZXkpO1xufTsiLCJ2YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGVudW1LZXlzID0gcmVxdWlyZSgnLi8kLmVudW0ta2V5cycpO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2Upe1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICB2YXIgVCA9IE9iamVjdCgkLmFzc2VydERlZmluZWQodGFyZ2V0KSlcbiAgICAsIGwgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpID0gMTtcbiAgd2hpbGUobCA+IGkpe1xuICAgIHZhciBTICAgICAgPSAkLkVTNU9iamVjdChhcmd1bWVudHNbaSsrXSlcbiAgICAgICwga2V5cyAgID0gZW51bUtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailUW2tleSA9IGtleXNbaisrXV0gPSBTW2tleV07XG4gIH1cbiAgcmV0dXJuIFQ7XG59OyIsInZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBnbG9iYWwgICAgID0gJC5nXG4gICwgY29yZSAgICAgICA9ICQuY29yZVxuICAsIGlzRnVuY3Rpb24gPSAkLmlzRnVuY3Rpb247XG5mdW5jdGlvbiBjdHgoZm4sIHRoYXQpe1xuICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn1cbi8vIHR5cGUgYml0bWFwXG4kZGVmLkYgPSAxOyAgLy8gZm9yY2VkXG4kZGVmLkcgPSAyOyAgLy8gZ2xvYmFsXG4kZGVmLlMgPSA0OyAgLy8gc3RhdGljXG4kZGVmLlAgPSA4OyAgLy8gcHJvdG9cbiRkZWYuQiA9IDE2OyAvLyBiaW5kXG4kZGVmLlcgPSAzMjsgLy8gd3JhcFxuZnVuY3Rpb24gJGRlZih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwXG4gICAgLCBpc0dsb2JhbCA9IHR5cGUgJiAkZGVmLkdcbiAgICAsIGlzUHJvdG8gID0gdHlwZSAmICRkZWYuUFxuICAgICwgdGFyZ2V0ICAgPSBpc0dsb2JhbCA/IGdsb2JhbCA6IHR5cGUgJiAkZGVmLlNcbiAgICAgICAgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KS5wcm90b3R5cGVcbiAgICAsIGV4cG9ydHMgID0gaXNHbG9iYWwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgaWYoaXNHbG9iYWwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICEodHlwZSAmICRkZWYuRikgJiYgdGFyZ2V0ICYmIGtleSBpbiB0YXJnZXQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBpZihpc0dsb2JhbCAmJiAhaXNGdW5jdGlvbih0YXJnZXRba2V5XSkpZXhwID0gc291cmNlW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBlbHNlIGlmKHR5cGUgJiAkZGVmLkIgJiYgb3duKWV4cCA9IGN0eChvdXQsIGdsb2JhbCk7XG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICBlbHNlIGlmKHR5cGUgJiAkZGVmLlcgJiYgdGFyZ2V0W2tleV0gPT0gb3V0KSFmdW5jdGlvbihDKXtcbiAgICAgIGV4cCA9IGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBDID8gbmV3IEMocGFyYW0pIDogQyhwYXJhbSk7XG4gICAgICB9O1xuICAgICAgZXhwLnByb3RvdHlwZSA9IEMucHJvdG90eXBlO1xuICAgIH0ob3V0KTtcbiAgICBlbHNlIGV4cCA9IGlzUHJvdG8gJiYgaXNGdW5jdGlvbihvdXQpID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0XG4gICAgZXhwb3J0c1trZXldID0gZXhwO1xuICAgIGlmKGlzUHJvdG8pKGV4cG9ydHMucHJvdG90eXBlIHx8IChleHBvcnRzLnByb3RvdHlwZSA9IHt9KSlba2V5XSA9IG91dDtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSAkZGVmOyIsInZhciAkID0gcmVxdWlyZSgnLi8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGtleXMgICAgICAgPSAkLmdldEtleXMoaXQpXG4gICAgLCBnZXREZXNjICAgID0gJC5nZXREZXNjXG4gICAgLCBnZXRTeW1ib2xzID0gJC5nZXRTeW1ib2xzO1xuICBpZihnZXRTeW1ib2xzKSQuZWFjaC5jYWxsKGdldFN5bWJvbHMoaXQpLCBmdW5jdGlvbihrZXkpe1xuICAgIGlmKGdldERlc2MoaXQsIGtleSkuZW51bWVyYWJsZSlrZXlzLnB1c2goa2V5KTtcbiAgfSk7XG4gIHJldHVybiBrZXlzO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCQpe1xuICAkLkZXICAgPSBmYWxzZTtcbiAgJC5wYXRoID0gJC5jb3JlO1xuICByZXR1cm4gJDtcbn07IiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xyXG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCB0b1N0cmluZyA9IHt9LnRvU3RyaW5nXHJcbiAgLCBnZXROYW1lcyA9ICQuZ2V0TmFtZXM7XHJcblxyXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXHJcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XHJcblxyXG5mdW5jdGlvbiBnZXRXaW5kb3dOYW1lcyhpdCl7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBnZXROYW1lcyhpdCk7XHJcbiAgfSBjYXRjaChlKXtcclxuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XHJcbiAgaWYod2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScpcmV0dXJuIGdldFdpbmRvd05hbWVzKGl0KTtcclxuICByZXR1cm4gZ2V0TmFtZXMoJC50b09iamVjdChpdCkpO1xyXG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpXG4gICwgY29yZSAgID0ge31cbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eVxuICAsIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHlcbiAgLCBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vclxuICAsIG1heCAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICA9IE1hdGgubWluO1xuLy8gVGhlIGVuZ2luZSB3b3JrcyBmaW5lIHdpdGggZGVzY3JpcHRvcnM/IFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHkuXG52YXIgREVTQyA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDI7IH19KS5hID09IDI7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcbnZhciBoaWRlID0gY3JlYXRlRGVmaW5lcigxKTtcbi8vIDcuMS40IFRvSW50ZWdlclxuZnVuY3Rpb24gdG9JbnRlZ2VyKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59XG5mdW5jdGlvbiBkZXNjKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn1cbmZ1bmN0aW9uIHNpbXBsZVNldChvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufVxuZnVuY3Rpb24gY3JlYXRlRGVmaW5lcihiaXRtYXApe1xuICByZXR1cm4gREVTQyA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gICAgcmV0dXJuICQuc2V0RGVzYyhvYmplY3QsIGtleSwgZGVzYyhiaXRtYXAsIHZhbHVlKSk7XG4gIH0gOiBzaW1wbGVTZXQ7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGl0KXtcbiAgcmV0dXJuIGl0ICE9PSBudWxsICYmICh0eXBlb2YgaXQgPT0gJ29iamVjdCcgfHwgdHlwZW9mIGl0ID09ICdmdW5jdGlvbicpO1xufVxuZnVuY3Rpb24gaXNGdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIGFzc2VydERlZmluZWQoaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59XG5cbnZhciAkID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuZncnKSh7XG4gIGc6IGdsb2JhbCxcbiAgY29yZTogY29yZSxcbiAgaHRtbDogZ2xvYmFsLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgLy8gaHR0cDovL2pzcGVyZi5jb20vY29yZS1qcy1pc29iamVjdFxuICBpc09iamVjdDogICBpc09iamVjdCxcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgdGhhdDogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLy8gNy4xLjQgVG9JbnRlZ2VyXG4gIHRvSW50ZWdlcjogdG9JbnRlZ2VyLFxuICAvLyA3LjEuMTUgVG9MZW5ndGhcbiAgdG9MZW5ndGg6IGZ1bmN0aW9uKGl0KXtcbiAgICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxuICB9LFxuICB0b0luZGV4OiBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gICAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG4gIH0sXG4gIGhhczogZnVuY3Rpb24oaXQsIGtleSl7XG4gICAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG4gIH0sXG4gIGNyZWF0ZTogICAgIE9iamVjdC5jcmVhdGUsXG4gIGdldFByb3RvOiAgIE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgREVTQzogICAgICAgREVTQyxcbiAgZGVzYzogICAgICAgZGVzYyxcbiAgZ2V0RGVzYzogICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgc2V0RGVzYzogICAgZGVmaW5lUHJvcGVydHksXG4gIHNldERlc2NzOiAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzLFxuICBnZXRLZXlzOiAgICBPYmplY3Qua2V5cyxcbiAgZ2V0TmFtZXM6ICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXG4gIGdldFN5bWJvbHM6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gIGFzc2VydERlZmluZWQ6IGFzc2VydERlZmluZWQsXG4gIC8vIER1bW15LCBmaXggZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmcgaW4gZXM1IG1vZHVsZVxuICBFUzVPYmplY3Q6IE9iamVjdCxcbiAgdG9PYmplY3Q6IGZ1bmN0aW9uKGl0KXtcbiAgICByZXR1cm4gJC5FUzVPYmplY3QoYXNzZXJ0RGVmaW5lZChpdCkpO1xuICB9LFxuICBoaWRlOiBoaWRlLFxuICBkZWY6IGNyZWF0ZURlZmluZXIoMCksXG4gIHNldDogZ2xvYmFsLlN5bWJvbCA/IHNpbXBsZVNldCA6IGhpZGUsXG4gIGVhY2g6IFtdLmZvckVhY2hcbn0pO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbmlmKHR5cGVvZiBfX2UgIT0gJ3VuZGVmaW5lZCcpX19lID0gY29yZTtcbmlmKHR5cGVvZiBfX2cgIT0gJ3VuZGVmaW5lZCcpX19nID0gZ2xvYmFsOyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGRlZiA9IHJlcXVpcmUoJy4vJC5kZWYnKTtcbiRkZWYoJGRlZi5TLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi8kLmFzc2lnbicpfSk7IiwidmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCAkZGVmICAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxuICAsIGlzT2JqZWN0ID0gJC5pc09iamVjdFxuICAsIHRvT2JqZWN0ID0gJC50b09iamVjdDtcbiQuZWFjaC5jYWxsKCgnZnJlZXplLHNlYWwscHJldmVudEV4dGVuc2lvbnMsaXNGcm96ZW4saXNTZWFsZWQsaXNFeHRlbnNpYmxlLCcgK1xuICAnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLGdldFByb3RvdHlwZU9mLGtleXMsZ2V0T3duUHJvcGVydHlOYW1lcycpLnNwbGl0KCcsJylcbiwgZnVuY3Rpb24oS0VZLCBJRCl7XG4gIHZhciBmbiAgICAgPSAoJC5jb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZm9yY2VkID0gMFxuICAgICwgbWV0aG9kID0ge307XG4gIG1ldGhvZFtLRVldID0gSUQgPT0gMCA/IGZ1bmN0aW9uIGZyZWV6ZShpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IGl0O1xuICB9IDogSUQgPT0gMSA/IGZ1bmN0aW9uIHNlYWwoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBpdDtcbiAgfSA6IElEID09IDIgPyBmdW5jdGlvbiBwcmV2ZW50RXh0ZW5zaW9ucyhpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IGl0O1xuICB9IDogSUQgPT0gMyA/IGZ1bmN0aW9uIGlzRnJvemVuKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogdHJ1ZTtcbiAgfSA6IElEID09IDQgPyBmdW5jdGlvbiBpc1NlYWxlZChpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IHRydWU7XG4gIH0gOiBJRCA9PSA1ID8gZnVuY3Rpb24gaXNFeHRlbnNpYmxlKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogZmFsc2U7XG4gIH0gOiBJRCA9PSA2ID8gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICAgIHJldHVybiBmbih0b09iamVjdChpdCksIGtleSk7XG4gIH0gOiBJRCA9PSA3ID8gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpe1xuICAgIHJldHVybiBmbihPYmplY3QoJC5hc3NlcnREZWZpbmVkKGl0KSkpO1xuICB9IDogSUQgPT0gOCA/IGZ1bmN0aW9uIGtleXMoaXQpe1xuICAgIHJldHVybiBmbih0b09iamVjdChpdCkpO1xuICB9IDogcmVxdWlyZSgnLi8kLmdldC1uYW1lcycpLmdldDtcbiAgdHJ5IHtcbiAgICBmbigneicpO1xuICB9IGNhdGNoKGUpe1xuICAgIGZvcmNlZCA9IDE7XG4gIH1cbiAgJGRlZigkZGVmLlMgKyAkZGVmLkYgKiBmb3JjZWQsICdPYmplY3QnLCBtZXRob2QpO1xufSk7IiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNSBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cblx0XHR2YXIgY2xhc3NlcyA9ICcnO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKCdzdHJpbmcnID09PSBhcmdUeXBlIHx8ICdudW1iZXInID09PSBhcmdUeXBlKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXJnO1xuXG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblxuXHRcdFx0fSBlbHNlIGlmICgnb2JqZWN0JyA9PT0gYXJnVHlwZSkge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGFyZy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGtleTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5zdWJzdHIoMSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCl7XG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cblxufSgpKTtcbiIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSggXCJyZWFjdFwiICk7XG5jb25zdCBNb2RlcyA9IHJlcXVpcmUoIFwiLi9pbmZyYXN0cnVjdHVyZS9Nb2Rlc1wiICk7XG5cbmNsYXNzIEJvdHRvbU5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGRyaWxsRG93biggdGltZWZyYW1lICkge1xuICAgIGxldCBuZXdUaW1lZnJhbWUgPSBuZXcgRGF0ZSggK3RpbWVmcmFtZSApO1xuICAgIHRoaXMucHJvcHMuZHJpbGxEb3duKCBNb2Rlcy5Nb250aGx5LCBuZXdUaW1lZnJhbWUgKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRhdGVwaWNrZXItbmF2LWJvdHRvbVwiPlxuICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsgdGhpcy5kcmlsbERvd24uYmluZCggdGhpcywgdGhpcy5wcm9wcy5zZWxlY3RlZERhdGUgKSB9PlxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jdWx0dXJlUHJvdmlkZXIubG9jYWxpemUoIFwiU2VsZWN0ZWRcIiApIH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsgdGhpcy5kcmlsbERvd24uYmluZCggdGhpcywgbmV3IERhdGUoKSApIH0+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmN1bHR1cmVQcm92aWRlci5sb2NhbGl6ZSggXCJUb2RheVwiICkgfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvdHRvbU5hdmlnYXRpb247XG4iLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoIFwicmVhY3RcIiApO1xuY29uc3QgWWVhcmx5UGFuZSA9IHJlcXVpcmUoIFwiLi9ZZWFybHlQYW5lXCIgKTtcbmNvbnN0IE1vbnRobHlQYW5lID0gcmVxdWlyZSggXCIuL01vbnRobHlQYW5lXCIgKTtcbmNvbnN0IFllYXJzUmFuZ2VQYW5lID0gcmVxdWlyZSggXCIuL1llYXJzUmFuZ2VQYW5lXCIgKTtcbmNvbnN0IFllYXJseU5hdmlnYXRpb24gPSByZXF1aXJlKCBcIi4vWWVhcmx5TmF2aWdhdGlvblwiICk7XG5jb25zdCBNb250aGx5TmF2aWdhdGlvbiA9IHJlcXVpcmUoIFwiLi9Nb250aGx5TmF2aWdhdGlvblwiICk7XG5jb25zdCBZZWFyc1JhbmdlTmF2aWdhdGlvbiA9IHJlcXVpcmUoIFwiLi9ZZWFyc1JhbmdlTmF2aWdhdGlvblwiICk7XG5jb25zdCBCb3R0b21OYXZpZ2F0aW9uID0gcmVxdWlyZSggXCIuL0JvdHRvbU5hdmlnYXRpb25cIiApO1xuY29uc3QgQ3VsdHVyZVByb3ZpZGVyID0gcmVxdWlyZSggXCIuL2luZnJhc3RydWN0dXJlL0N1bHR1cmVQcm92aWRlclwiICk7XG5jb25zdCBNb2RlcyA9IHJlcXVpcmUoIFwiLi9pbmZyYXN0cnVjdHVyZS9Nb2Rlc1wiICk7XG5cbmNvbnN0IE1vZGVWaWV3cyA9IHt9O1xuXG5Nb2RlVmlld3NbIE1vZGVzLlllYXJseSBdID0gWyBZZWFybHlOYXZpZ2F0aW9uLCBZZWFybHlQYW5lLCBCb3R0b21OYXZpZ2F0aW9uIF07XG5Nb2RlVmlld3NbIE1vZGVzLk1vbnRobHkgXSA9IFsgTW9udGhseU5hdmlnYXRpb24sIE1vbnRobHlQYW5lLCBCb3R0b21OYXZpZ2F0aW9uIF07XG5Nb2RlVmlld3NbIE1vZGVzLlllYXJzIF0gPSBbIFllYXJzUmFuZ2VOYXZpZ2F0aW9uLCBZZWFyc1JhbmdlUGFuZSwgQm90dG9tTmF2aWdhdGlvbiBdO1xuXG5cblxuY2xhc3MgQ29udGVudFBhbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY29tcG9uZW50cyA9IHRoaXMucHJvcHMuY2FzZXNbIHRoaXMucHJvcHMubW9kZSBdLm1hcChcbiAgICAgICAgICAoYywgaSkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudCggYywgT2JqZWN0LmFzc2lnbigge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImNcIiArIGkgKyB0aGlzLnByb3BzLm1vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApIClcbiAgICApO1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRhdGVwaWNrZXItcGFuZVwiIHN0eWxlPXsgdGhpcy5wcm9wcy5zdHlsZSB9PlxuICAgICAgICAgICAgICB7IGNvbXBvbmVudHMgfVxuICAgICAgICAgIDwvZGl2PjtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmltRGF0ZSggZGF0ZSApe1xuICB2YXIgc3BsaXR0ZWQgPSBDdWx0dXJlUHJvdmlkZXIuc3BsaXREYXRlKCBkYXRlICk7XG4gIHJldHVybiBuZXcgRGF0ZSggc3BsaXR0ZWQueWVhciwgc3BsaXR0ZWQubW9udGgsIHNwbGl0dGVkLmRheSApO1xufVxuXG5cbmNsYXNzIERhdGVQaWNrZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLnN3aXRjaE1vZGUgPSB0aGlzLnN3aXRjaE1vZGUuYmluZCggdGhpcyApO1xuICAgIHRoaXMuc2V0VGltZWZyYW1lID0gdGhpcy5zZXRUaW1lZnJhbWUuYmluZCggdGhpcyApO1xuICAgIHRoaXMuc2V0RGF0ZSA9IHRoaXMuc2V0RGF0ZS5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5kcmlsbERvd24gPSB0aGlzLmRyaWxsRG93bi5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5fdHJhY2tPdXRzaWRlQ2xpY2sgPSB0aGlzLl90cmFja091dHNpZGVDbGljay5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5faGFuZGxlQ2xvc2VLZXkgPSB0aGlzLl9oYW5kbGVDbG9zZUtleS5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuaW5pdFN0YXRlKCB0aGlzLnByb3BzLCB7fSApO1xuICB9XG4gIGluaXRTdGF0ZSggcHJvcHMsIHN0YXRlICl7XG4gICAgdmFyIG5ld3N0YXRlID0ge307XG4gICAgbmV3c3RhdGUubW9kZSA9IHByb3BzLm1vZGUgfHwgTW9kZXMuTW9udGhseTtcbiAgICBpZiggcHJvcHMuc2VsZWN0ZWREYXRlICE9PSBzdGF0ZS5zZWxlY3RlZERhdGUgfHwgc3RhdGUuc2VsZWN0ZWREYXRlID09PSB1bmRlZmluZWQgKXtcbiAgICAgIG5ld3N0YXRlLnNlbGVjdGVkRGF0ZSA9IHRyaW1EYXRlKCBwcm9wcy5zZWxlY3RlZERhdGUgfHwgbmV3IERhdGUoKSApO1xuICAgICAgbmV3c3RhdGUudGltZWZyYW1lID0gc3RhdGUuc2VsZWN0ZWREYXRlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3c3RhdGU7XG4gIH1cbiAgc2V0VGltZWZyYW1lKCBuZXdEYXRlICkge1xuICAgIG5ld0RhdGUgPSB0cmltRGF0ZSggbmV3RGF0ZSApO1xuICAgIHRoaXMuc2V0U3RhdGUoIHsgdGltZWZyYW1lOiBuZXdEYXRlIH0gKTtcbiAgfVxuICBzd2l0Y2hNb2RlKCBtb2RlICkge1xuICAgIHRoaXMuc2V0U3RhdGUoIHsgbW9kZTogbW9kZSB9ICk7XG4gIH1cbiAgc2V0RGF0ZSggZGF0ZSApe1xuICAgIGRhdGUgPSB0cmltRGF0ZSggZGF0ZSApO1xuICAgIHRoaXMuc2V0U3RhdGUoIHsgdGltZWZyYW1lOiBkYXRlICwgbW9kZTogTW9kZXMuTW9udGhseSwgc2VsZWN0ZWREYXRlOiBkYXRlIH0sIGZ1bmN0aW9uKCl7XG4gICAgICB0aGlzLnByb3BzLm9uRGF0ZUNoYW5nZSggZGF0ZSwgdGhpcy5wcm9wcy5jdWx0dXJlUHJvdmlkZXIuZm9ybWF0dGVkKCBkYXRlICkgKTtcbiAgICB9LmJpbmQoIHRoaXMgKSApO1xuICB9XG4gIGRyaWxsRG93biggbW9kZSwgdGltZWZyYW1lICl7XG4gICAgdGhpcy5zZXRTdGF0ZSggeyBtb2RlOiBtb2RlLCB0aW1lZnJhbWU6IHRyaW1EYXRlKCB0aW1lZnJhbWUgKSB9ICk7XG4gIH1cbiAgLypwcml2YXRlIHNlY3Rpb25zKi9cbiAgX3RyYWNrT3V0c2lkZUNsaWNrKCBlICkge1xuICAgIGlmICggIXRoaXMucHJvcHMudmlzaWJsZSApe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgbGV0IHJvb3QgPSBSZWFjdC5maW5kRE9NTm9kZSggdGhpcyApO1xuICAgIHdoaWxlKCB0YXJnZXQgKXtcbiAgICAgIGlmKCB0YXJnZXQgPT09IHJvb3QgKXtcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkhpZGUoKTtcbiAgfVxuICBfaGFuZGxlQ2xvc2VLZXkoIGUgKXtcbiAgICBpZiAoIGUua2V5Q29kZT09PTI3ICl7XG4gICAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCBuZXdQcm9wcyApe1xuICAgIHRoaXMuc2V0U3RhdGUoIHRoaXMuaW5pdFN0YXRlKCBuZXdQcm9wcywgdGhpcy5zdGF0ZSApICk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNlZG93blwiLCB0aGlzLl90cmFja091dHNpZGVDbGljayApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwidG91Y2hzdGFydFwiLCB0aGlzLl90cmFja091dHNpZGVDbGljayApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVDbG9zZUtleSApO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibW91c2Vkb3duXCIsIHRoaXMuX3RyYWNrT3V0c2lkZUNsaWNrICk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuX3RyYWNrT3V0c2lkZUNsaWNrICk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUNsb3NlS2V5ICk7XG5cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgaWYoICF0aGlzLnByb3BzLnZpc2libGUgKXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gPENvbnRlbnRQYW5lIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICBtb2RlPXsgdGhpcy5zdGF0ZS5tb2RlIH1cbiAgICAgICAgICAgICAgdGltZWZyYW1lID0geyB0aGlzLnN0YXRlLnRpbWVmcmFtZSB9XG4gICAgICAgICAgICAgIHNlbGVjdGVkRGF0ZT17IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRlIH1cbiAgICAgICAgICAgICAgY2FzZXM9eyBNb2RlVmlld3MgfVxuICAgICAgICAgICAgICBzZXRUaW1lZnJhbWU9eyB0aGlzLnNldFRpbWVmcmFtZSB9XG4gICAgICAgICAgICAgIHNldERhdGU9eyB0aGlzLnNldERhdGUgfVxuICAgICAgICAgICAgICBkcmlsbERvd249eyB0aGlzLmRyaWxsRG93biB9XG4gICAgICAgICAgICAgIHN3aXRjaE1vZGUgPXsgdGhpcy5zd2l0Y2hNb2RlIH0vPjtcbiAgfVxufVxuXG5EYXRlUGlja2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY3VsdHVyZVByb3ZpZGVyOiBuZXcgQ3VsdHVyZVByb3ZpZGVyKCksXG4gIHZpc2libGU6IGZhbHNlLFxuICBzdHlsZToge30sXG4gIG9uSGlkZTogZnVuY3Rpb24oKXt9XG59O1xuXG5tb2R1bGUuZXhwb3J0cz0ge1xuICBEYXRlUGlja2VyOiBEYXRlUGlja2VyLFxuICBDdWx0dXJlUHJvdmlkZXI6IEN1bHR1cmVQcm92aWRlclxufTtcbiIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSggXCJyZWFjdFwiICk7XG5jb25zdCBjbiA9IHJlcXVpcmUoIFwiY2xhc3NuYW1lc1wiICk7XG5sZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xudG9kYXkgPSBuZXcgRGF0ZSggdG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpICk7XG5cbmNsYXNzIERheUNlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCggdGhpcyApO1xuICB9XG4gIGlzU2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuICt0aGlzLnByb3BzLmRhdGUgPT09ICt0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZTtcbiAgfVxuICBpc1RvZGF5KCkge1xuICAgIHJldHVybiAgK3RoaXMucHJvcHMuZGF0ZSA9PT0gK3RvZGF5O1xuICB9XG4gIG9mZlRpbWVmcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRlLmdldE1vbnRoKCkgIT09IHRoaXMucHJvcHMudGltZWZyYW1lLmdldE1vbnRoKCk7XG4gIH1cbiAgb25DbGljaygpe1xuICAgIHRoaXMucHJvcHMuc2V0RGF0ZSggdGhpcy5wcm9wcy5kYXRlICk7XG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsgY24oIFwiZGF0ZXBpY2tlci1kYXRlLWNlbGxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlcGlja2VyLXRvZGF5XCI6ICF0aGlzLmlzU2VsZWN0ZWQoKSAmJiB0aGlzLmlzVG9kYXkoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZXBpY2tlci1zZWxlY3RlZFwiOiB0aGlzLmlzU2VsZWN0ZWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZXBpY2tlci13ZWVrZW5kXCI6IHRoaXMucHJvcHMuY3VsdHVyZVByb3ZpZGVyLmlzSG9saWRheSggdGhpcy5wcm9wcy5kYXRlICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVwaWNrZXItdGltZWZyYW1lLW9mZlwiOiB0aGlzLm9mZlRpbWVmcmFtZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApIH0gb25DbGljaz17IHRoaXMub25DbGljayB9PlxuICAgICAgICAgICAgeyB0aGlzLnByb3BzLmRhdGUuZ2V0RGF0ZSgpIH1cbiAgICAgICAgICA8L2Rpdj47XG4gIH1cbn1cblxuRGF5Q2VsbC5wcm9wVHlwZXMgPSB7XG4gIGRhdGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgc2V0RGF0ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF5Q2VsbDtcbiIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSggXCJyZWFjdFwiICk7XG5jb25zdCBNb2RlcyA9IHJlcXVpcmUoIFwiLi9pbmZyYXN0cnVjdHVyZS9Nb2Rlc1wiICk7XG5jb25zdCBjbiA9IHJlcXVpcmUoIFwiY2xhc3NuYW1lc1wiICk7XG5cbmNsYXNzIE1vbnRoQ2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICl7XG4gICAgc3VwZXIoIHByb3BzICk7XG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQoIHRoaXMgKTtcbiAgfVxuICBvbkNsaWNrKCkge1xuICAgIHZhciB0aW1lZnJhbWUgPSBuZXcgRGF0ZSggK3RoaXMucHJvcHMudGltZWZyYW1lICk7XG4gICAgdGltZWZyYW1lLnNldE1vbnRoKCB0aGlzLnByb3BzLm1vbnRoICk7XG4gICAgdGhpcy5wcm9wcy5kcmlsbERvd24oIE1vZGVzLk1vbnRobHksIHRpbWVmcmFtZSApO1xuICB9XG4gIGlzU2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMubW9udGggPT09IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlLmdldE1vbnRoKCkgJiZcbiAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKSA9PT0gdGhpcy5wcm9wcy50aW1lZnJhbWUuZ2V0RnVsbFllYXIoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgb25DbGljaz17IHRoaXMub25DbGljayB9IGNsYXNzTmFtZT17IGNuKCBcImRhdGVwaWNrZXItbW9udGgtY2VsbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZXBpY2tlci1zZWxlY3RlZFwiOiB0aGlzLmlzU2VsZWN0ZWQoKVxuICAgICAgICAgICAgICAgIH0gKSB9PlxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jdWx0dXJlUHJvdmlkZXIubW9udGhOYW1lU2hvcnQoIHRoaXMucHJvcHMubW9udGggKSB9XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbk1vbnRoQ2VsbC5wcm9wVHlwZXMgPSB7XG4gIG1vbnRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9uU2VsZWN0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9udGhDZWxsO1xuIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCBcInJlYWN0XCIgKTtcbmNvbnN0IE5hdmlnYXRpb25QYW5lID0gcmVxdWlyZSAoIFwiLi9OYXZpZ2F0aW9uUGFuZVwiICk7XG5jb25zdCBEaXJlY3Rpb24gPSByZXF1aXJlKCBcIi4vaW5mcmFzdHJ1Y3R1cmUvRGlyZWN0aW9uXCIgKTtcbmNvbnN0IE1vZGVzID0gcmVxdWlyZSggXCIuL2luZnJhc3RydWN0dXJlL01vZGVzXCIgKTtcblxuY2xhc3MgTW9udGhseU5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApe1xuICAgIHN1cGVyKCBwcm9wcyApO1xuICAgIHRoaXMub25OYXZpZ2F0ZSA9IHRoaXMub25OYXZpZ2F0ZS5iaW5kKCB0aGlzICk7XG4gIH1cbiAgb25OYXZpZ2F0ZSggZGlyZWN0aW9uICkge1xuICAgIGxldCBkbW9udGggPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5MZWZ0ID8gLTEgOiAxO1xuICAgIGxldCBuZXd0aW1lZnJhbWUgPSBuZXcgRGF0ZSggK3RoaXMucHJvcHMudGltZWZyYW1lICk7XG4gICAgbmV3dGltZWZyYW1lLnNldE1vbnRoKCBuZXd0aW1lZnJhbWUuZ2V0TW9udGgoKSArIGRtb250aCApO1xuICAgIHRoaXMucHJvcHMuc2V0VGltZWZyYW1lKCBuZXd0aW1lZnJhbWUgKTtcbiAgfVxuICBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jdWx0dXJlUHJvdmlkZXIubW9udGhOYW1lKCB0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRNb250aCgpICkgKyBcIiBcIiArICB0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRGdWxsWWVhcigpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPE5hdmlnYXRpb25QYW5lIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRNb2RlID0geyBNb2Rlcy5ZZWFybHkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsgdGhpcy5nZXRUaXRsZSgpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk5hdmlnYXRlPXsgdGhpcy5vbk5hdmlnYXRlIH0vPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb250aGx5TmF2aWdhdGlvbjtcbiIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSggXCJyZWFjdFwiICk7XG5jb25zdCBEYXlDZWxsID0gcmVxdWlyZSggXCIuL0RheUNlbGxcIiApO1xuY29uc3QgV2Vla0hlYWRlckNlbGwgPSByZXF1aXJlICggXCIuL1dlZWtIZWFkZXJDZWxsXCIgKTtcbmNvbnN0IERBWVNfQkxPQ0tfQ09MVU1OUyA9IDc7XG5jb25zdCBEQVlTX0JMT0NLX1JPV1MgPSA1O1xuY29uc3QgREFZX1RJTUVTUEFOID0gMjQgKiAzNjAwICogMTAwMDtcblxuY2xhc3MgTW9udGhseVBhbmVIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgd2Vla2RheXMgPSBbXTtcbiAgICBmb3IoIGxldCBjb2w9MDsgY29sPERBWVNfQkxPQ0tfQ09MVU1OUzsgY29sKysgKXtcbiAgICAgIHdlZWtkYXlzLnB1c2goIDx0aCBrZXk9eyBjb2wrXCJtaFwiIH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFdlZWtIZWFkZXJDZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrZGF5PXsgdGhpcy5wcm9wcy5jdWx0dXJlUHJvdmlkZXIuZGF5TmFtZVNob3J0KCBjb2wgKSB9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC90aD4gKTtcbiAgICB9XG4gICAgcmV0dXJuIDx0cj5cbiAgICAgICAgICB7IHdlZWtkYXlzIH1cbiAgICAgICAgICA8L3RyPjtcbiAgfVxufVxuXG5jbGFzcyBNb250aGx5UGFuZUNlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHRkPlxuICAgICAgICAgICAgICA8RGF5Q2VsbCB7Li4udGhpcy5wcm9wc30gZGF0ZT17IHRoaXMucHJvcHMuZGF0ZSB9Lz5cbiAgICAgICAgICAgIDwvdGQ+O1xuICB9XG59XG5cbmNsYXNzIE1vbnRobHlQYW5lUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKSB7XG4gICAgICBzdXBlciggcHJvcHMgKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgdmFyIGNlbGxzID0gW107XG4gICAgZm9yKCBsZXQgY29sPTA7IGNvbDxEQVlTX0JMT0NLX0NPTFVNTlM7IGNvbCsrICl7XG4gICAgICBjZWxscy5wdXNoKCA8TW9udGhseVBhbmVDZWxsXG4gICAgICAgIHsuLi50aGlzLnByb3BzIH1cbiAgICAgICAgIGtleT17IGNvbCArIHRoaXMucHJvcHMucm93ICogREFZU19CTE9DS19DT0xVTU5TIH1cbiAgICAgICAgIGRhdGU9eyBuZXcgRGF0ZSggK3RoaXMucHJvcHMuc3RhcnREYXRlICsgREFZX1RJTUVTUEFOICogY29sICl9Lz4gKTtcbiAgICB9XG4gICAgcmV0dXJuIDx0cj5cbiAgICAgICAgICAgICAgeyBjZWxscyB9XG4gICAgICAgICAgICA8L3RyPjtcbiAgfVxufVxuXG5jbGFzcyBNb250aGx5UGFuZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgZ2V0U3RhcnREYXRlKCl7XG4gICAgbGV0IG1vbnRoU3RhcnQgPSBuZXcgRGF0ZSggdGhpcy5wcm9wcy50aW1lZnJhbWUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRNb250aCgpICk7XG4gICAgbGV0IHN0YXJ0RGF0ZT1tb250aFN0YXJ0O1xuICAgIGxldCBzdGFydGRpZmYgPSBtb250aFN0YXJ0LmdldERheSgpIC0gdGhpcy5wcm9wcy5jdWx0dXJlUHJvdmlkZXIud2Vla0RheVN0YXJ0O1xuXG4gICAgaWYoIHN0YXJ0ZGlmZj4wICl7XG4gICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSggbW9udGhTdGFydCAtIERBWV9USU1FU1BBTiAqIHN0YXJ0ZGlmZiApO1xuICAgIH1cbiAgICByZXR1cm4gc3RhcnREYXRlO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcm93cyA9IFtdO1xuICAgIGxldCBzdGFydERhdGUgPSB0aGlzLmdldFN0YXJ0RGF0ZSgpO1xuICAgIGZvciggbGV0IHJvdz0wOyByb3c8REFZU19CTE9DS19ST1dTOyByb3crKyApe1xuICAgICAgcm93cy5wdXNoKCA8TW9udGhseVBhbmVSb3dcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIGtleT17IHJvdyB9XG4gICAgICAgICAgICAgICAgICAgIHJvdz17IHJvdyB9XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZT17IG5ldyBEYXRlKCArc3RhcnREYXRlICsgREFZX1RJTUVTUEFOICogcm93ICogREFZU19CTE9DS19DT0xVTU5TICkgfSAvPiApO1xuICAgIH1cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIDxNb250aGx5UGFuZUhlYWRlciB7Li4udGhpcy5wcm9wc30vPlxuICAgICAgICAgICAgICAgIHsgcm93cyB9XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vbnRobHlQYW5lO1xuIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCBcInJlYWN0XCIgKTtcbmNvbnN0IERpcmVjdGlvbiA9IHJlcXVpcmUoIFwiLi9pbmZyYXN0cnVjdHVyZS9EaXJlY3Rpb24uanNcIiApO1xuY29uc3QgY24gPSByZXF1aXJlKCBcImNsYXNzbmFtZXNcIiApO1xuXG5jbGFzcyBOYXZCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApe1xuICAgIHN1cGVyKCBwcm9wcyApO1xuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKCB0aGlzICk7XG4gIH1cbiAgb25DbGljaygpIHtcbiAgICB0aGlzLnByb3BzLm9uTmF2aWdhdGUoIHRoaXMucHJvcHMuZGlyZWN0aW9uICk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxzcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBjbiggXCJkYXRlcGlja2VyLW5hdi1idXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICBcImFycm93LWxlZnRcIjogdGhpcy5wcm9wcy5kaXJlY3Rpb24gPT09IERpcmVjdGlvbi5MZWZ0LFxuICAgICAgICAgICAgICAgICAgICBcImFycm93LXJpZ2h0XCI6IHRoaXMucHJvcHMuZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uUmlnaHRcbiAgICAgICAgICAgICAgICAgIH0gKSB9IG9uQ2xpY2s9eyB0aGlzLm9uQ2xpY2sgfT48L3NwYW4+O1xuICB9XG59XG5cbmNsYXNzIE5hdmlnYXRpb25QYW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKXtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLm9uU3dpdGNoTW9kZSA9IHRoaXMub25Td2l0Y2hNb2RlLmJpbmQoIHRoaXMgKTtcbiAgfVxuICBvblN3aXRjaE1vZGUoKSB7XG4gICAgdGhpcy5wcm9wcy5zd2l0Y2hNb2RlKCB0aGlzLnByb3BzLm5leHRNb2RlICk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRhdGVwaWNrZXItbmF2LXBhbmVcIj5cbiAgICAgICAgICAgICAgPE5hdkJ1dHRvbiB7Li4udGhpcy5wcm9wc30gZGlyZWN0aW9uPXsgRGlyZWN0aW9uLkxlZnQgfSBvbi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRhdGVwaWNrZXItbmF2LXRpdGxlXCIgb25DbGljaz17IHRoaXMub25Td2l0Y2hNb2RlIH0+eyB0aGlzLnByb3BzLnRpdGxlIH08L3NwYW4+XG4gICAgICAgICAgICAgIDxOYXZCdXR0b24gey4uLnRoaXMucHJvcHN9IGRpcmVjdGlvbj17IERpcmVjdGlvbi5SaWdodCB9Lz5cbiAgICAgICAgICAgIDwvZGl2PjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uUGFuZTtcbiIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSggXCJyZWFjdFwiICk7XG5cbmNsYXNzIFdlZWtIZWFkZXJDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICByZW5kZXIoKXtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkYXRlcGlja2VyLXdlZWtoZWFkZXItY2VsbFwiPnsgdGhpcy5wcm9wcy53ZWVrZGF5LnRvVXBwZXJDYXNlKCkgfTwvZGl2PjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWVrSGVhZGVyQ2VsbDtcbiIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSggXCJyZWFjdFwiICk7XG5jb25zdCBNb2RlcyA9IHJlcXVpcmUoIFwiLi9pbmZyYXN0cnVjdHVyZS9Nb2Rlc1wiICk7XG5jb25zdCBjbiA9IHJlcXVpcmUoIFwiY2xhc3NuYW1lc1wiICk7XG5jbGFzcyBZZWFyQ2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICl7XG4gICAgc3VwZXIoIHByb3BzICk7XG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQoIHRoaXMgKTtcbiAgfVxuICBvbkNsaWNrKCkge1xuICAgIHZhciB0aW1lZnJhbWUgPSBuZXcgRGF0ZSggK3RoaXMucHJvcHMudGltZWZyYW1lICk7XG4gICAgdGltZWZyYW1lLnNldEZ1bGxZZWFyKCB0aGlzLnByb3BzLnllYXIgKTtcbiAgICB0aGlzLnByb3BzLmRyaWxsRG93biggTW9kZXMuWWVhcmx5LCB0aW1lZnJhbWUgKTtcbiAgfVxuICBpc1NlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnllYXIgPT09IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlLmdldEZ1bGxZZWFyKCk7XG4gIH1cbiAgcmVuZGVyICgpe1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17IGNuKCBcImRhdGVwaWNrZXIteWVhci1jZWxsXCIsIHtcbiAgICAgICAgICAgICAgICAgIFwiZGF0ZXBpY2tlci1zZWxlY3RlZFwiOiB0aGlzLmlzU2VsZWN0ZWQoKVxuICAgICAgICAgICAgICAgIH0gKSB9XG4gICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vbkNsaWNrIH0+XG4gICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy55ZWFyIH1cbiAgICAgICAgICA8L2Rpdj47XG4gIH1cbn1cblxuWWVhckNlbGwucHJvcFR5cGVzID0ge1xuICAgIHllYXI6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgWWVhckNlbGw7XG4iLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoIFwicmVhY3RcIiApO1xuY29uc3QgTmF2aWdhdGlvblBhbmUgPSByZXF1aXJlICggXCIuL05hdmlnYXRpb25QYW5lXCIgKTtcbmNvbnN0IERpcmVjdGlvbiA9IHJlcXVpcmUoIFwiLi9pbmZyYXN0cnVjdHVyZS9EaXJlY3Rpb25cIiApO1xuY29uc3QgTW9kZXMgPSByZXF1aXJlKCBcIi4vaW5mcmFzdHJ1Y3R1cmUvTW9kZXNcIiApO1xuY2xhc3MgWWVhcmx5TmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICl7XG4gICAgc3VwZXIoIHByb3BzICk7XG4gICAgdGhpcy5vbk5hdmlnYXRlID0gdGhpcy5vbk5hdmlnYXRlLmJpbmQoIHRoaXMgKTtcbiAgfVxuICBvbk5hdmlnYXRlKCBkaXJlY3Rpb24gKSB7XG4gICAgbGV0IGR5ZWFyID0gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTGVmdCA/IC0xIDogMTtcbiAgICBsZXQgbmV3dGltZWZyYW1lID0gbmV3IERhdGUoICt0aGlzLnByb3BzLnRpbWVmcmFtZSApO1xuICAgIG5ld3RpbWVmcmFtZS5zZXRGdWxsWWVhciggbmV3dGltZWZyYW1lLmdldEZ1bGxZZWFyKCkgKyBkeWVhciApO1xuICAgIHRoaXMucHJvcHMuc2V0VGltZWZyYW1lKCBuZXd0aW1lZnJhbWUgKTtcbiAgfVxuICBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy50aW1lZnJhbWUuZ2V0RnVsbFllYXIoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxOYXZpZ2F0aW9uUGFuZSB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRNb2RlPXsgTW9kZXMuWWVhcnMgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsgdGhpcy5nZXRUaXRsZSgpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTmF2aWdhdGU9eyB0aGlzLm9uTmF2aWdhdGUgfS8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFllYXJseU5hdmlnYXRpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5jb25zdCBNb250aENlbGwgPSByZXF1aXJlKCBcIi4vTW9udGhDZWxsXCIgKTtcbmNvbnN0IE1PTlRIX0JMT0NLX0NPTFVNTlMgPSAzO1xuY29uc3QgTU9OVEhfQkxPQ0tfUk9XUyA9IDQ7XG5cbmNsYXNzIFllYXJseVBhbmVDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDx0ZD5cbiAgICAgICAgICAgICAgPE1vbnRoQ2VsbCB7IC4uLnRoaXMucHJvcHMgfS8+XG4gICAgICAgICAgICA8L3RkPjtcbiAgfVxufVxuXG5jbGFzcyBZZWFybHlQYW5lUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBidWlsZENlbGwoKSB7XG4gICAgcmV0dXJuIDxZZWFybHlQYW5lQ2VsbC8+O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY2VsbHMgPSBbXTtcbiAgICBmb3IoIGxldCBjb2w9MDsgY29sPE1PTlRIX0JMT0NLX0NPTFVNTlM7IGNvbCsrICl7XG4gICAgICBjZWxscy5wdXNoKCA8WWVhcmx5UGFuZUNlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGNvbCtcIm1cIit0aGlzLnByb3BzLnN0YXJ0TW9udGggfVxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aD0geyB0aGlzLnByb3BzLnN0YXJ0TW9udGggKyBjb2wgfS8+ICk7XG4gICAgfVxuICAgIHJldHVybiA8dHI+XG4gICAgICAgICAgICAgIHsgY2VsbHMgfVxuICAgICAgICAgICAgPC90cj47XG4gIH1cbn1cblxuY2xhc3MgWWVhcmx5UGFuZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCByb3dzID0gW107XG4gICAgZm9yKCBsZXQgcm93PTA7IHJvdzxNT05USF9CTE9DS19ST1dTOyByb3crKyApe1xuICAgICAgcm93cy5wdXNoKCA8WWVhcmx5UGFuZVJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyByb3cgKyBcIm1cIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydE1vbnRoPSB7IHJvdyAqIE1PTlRIX0JMT0NLX0NPTFVNTlMgfS8+ICApO1xuICAgIH1cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIHsgcm93cyB9XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFllYXJseVBhbmU7XG4iLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoIFwicmVhY3RcIiApO1xuY29uc3QgTmF2aWdhdGlvblBhbmUgPSByZXF1aXJlICggXCIuL05hdmlnYXRpb25QYW5lXCIgKTtcbmNvbnN0IERpcmVjdGlvbiA9IHJlcXVpcmUoIFwiLi9pbmZyYXN0cnVjdHVyZS9EaXJlY3Rpb25cIiApO1xuY29uc3QgTW9kZXMgPSByZXF1aXJlKCBcIi4vaW5mcmFzdHJ1Y3R1cmUvTW9kZXNcIiApO1xuXG5jbGFzcyBZZWFyc1JhbmdlTmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICl7XG4gICAgc3VwZXIoIHByb3BzICk7XG4gICAgdGhpcy5vbk5hdmlnYXRlID0gdGhpcy5vbk5hdmlnYXRlLmJpbmQoIHRoaXMgKTtcbiAgfVxuICBvbk5hdmlnYXRlKCBkaXJlY3Rpb24gKSB7XG4gICAgbGV0IGRyYW5nZSA9IGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkxlZnQgPyAtMSA6IDE7XG4gICAgdmFyIG5ld3RpbWVmcmFtZSA9IG5ldyBEYXRlKCArdGhpcy5wcm9wcy50aW1lZnJhbWUgKTtcbiAgICBuZXd0aW1lZnJhbWUuc2V0RnVsbFllYXIoIG5ld3RpbWVmcmFtZS5nZXRGdWxsWWVhcigpICsgZHJhbmdlKjE2ICk7XG4gICAgdGhpcy5wcm9wcy5zZXRUaW1lZnJhbWUoIG5ld3RpbWVmcmFtZSApO1xuICB9XG4gIGdldFRpdGxlKCkge1xuICAgIGxldCBzdGFydCA9ICggKCB0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRGdWxsWWVhcigpLzE2ICl8MCApICogMTY7XG4gICAgcmV0dXJuIHN0YXJ0ICsgXCIgLSBcIiArICggc3RhcnQgKyAxNiApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPE5hdmlnYXRpb25QYW5lIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsgdGhpcy5nZXRUaXRsZSgpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0TW9kZT17IE1vZGVzLk1vbnRobHkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTmF2aWdhdGU9eyB0aGlzLm9uTmF2aWdhdGUgfS8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFllYXJzUmFuZ2VOYXZpZ2F0aW9uO1xuIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCBcInJlYWN0XCIgKTtcbmNvbnN0IFllYXJDZWxsID0gcmVxdWlyZSggXCIuL1llYXJDZWxsXCIgKTtcbmNvbnN0IFlFQVJTX0JMT0NLX1NJREUgPSA0O1xuY29uc3QgWUVBUlNfQkxPQ0tfU0laRSA9IFlFQVJTX0JMT0NLX1NJREUgKiBZRUFSU19CTE9DS19TSURFO1xuXG5jbGFzcyBZZWFyc1BhbmVDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDx0ZD5cbiAgICAgICAgICAgICAgPFllYXJDZWxsIHsuLi50aGlzLnByb3BzIH0vPlxuICAgICAgICAgICAgPC90ZD47XG4gIH1cbn1cblxuY2xhc3MgWWVhcnNQYW5lUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIHJlbmRlcigpIHtcbiAgICAgIGxldCBjZWxscyA9IFtdO1xuICAgICAgZm9yKCBsZXQgY29sPTA7IGNvbDxZRUFSU19CTE9DS19TSURFOyBjb2wrKyApe1xuICAgICAgICBjZWxscy5wdXNoKCA8WWVhcnNQYW5lQ2VsbCB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgdGhpcy5wcm9wcy5mcm9tWWVhciArIGNvbCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXI9eyB0aGlzLnByb3BzLmZyb21ZZWFyICsgY29sIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gPHRyPlxuICAgICAgICAgICAgICAgIHsgY2VsbHMgfVxuICAgICAgICAgICAgPC90cj47XG4gICAgfVxufVxuXG5jbGFzcyBZZWFyc1JhbmdlUGFuZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcm93cyA9IFtdO1xuXG4gICAgbGV0IGZyb21ZZWFyID0gKCAodGhpcy5wcm9wcy50aW1lZnJhbWUuZ2V0RnVsbFllYXIoKS9ZRUFSU19CTE9DS19TSVpFKXwwICkgKiBZRUFSU19CTE9DS19TSVpFO1xuICAgIGZvciggbGV0IHJvdz0wOyByb3c8WUVBUlNfQkxPQ0tfU0lERTsgcm93KysgKXtcbiAgICAgIHJvd3MucHVzaCggPFllYXJzUGFuZVJvdyAga2V5PXsgcm93K1wieVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbVllYXI9eyBmcm9tWWVhciArIFlFQVJTX0JMT0NLX1NJREUgKiByb3cgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc30vPiApO1xuICAgIH1cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIHsgcm93cyB9XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFllYXJzUmFuZ2VQYW5lO1xuIiwiY29uc3Qgd2Vla0RheXNOYW1lcyA9IFsgXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiIF07XG5jb25zdCBtb250aE5hbWVzID0gWyBcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCIgXTtcblxuY2xhc3MgQ3VsdHVyZVByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IoIGxvY2FsZT1cImVuLXVzXCIsIGZvcm1hdD1cImRkL21tL3l5eXlcIiApe1xuICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgIHRoaXMuZm9ybWF0ID0gZm9ybWF0O1xuICAgIHRoaXMud2Vla0RheVN0YXJ0ID0gMDtcbiAgfVxuICBnZXRXZWVrRGF5c05hbWVzKCkge1xuICAgICAgcmV0dXJuIHdlZWtEYXlzTmFtZXM7XG4gIH1cbiAgZ2V0TW9udGhOYW1lcygpIHtcbiAgICAgIHJldHVybiBtb250aE5hbWVzO1xuICB9XG4gIG1vbnRoTmFtZSggbW9udGggKSB7XG4gICAgICByZXR1cm4gbW9udGhOYW1lc1sgbW9udGggXTtcbiAgfVxuICBtb250aE5hbWVTaG9ydCggbW9udGggKSB7XG4gICAgICByZXR1cm4gdGhpcy5tb250aE5hbWUoIG1vbnRoICkuc2xpY2UoIDAsIDMgKTtcbiAgfVxuICBkYXlOYW1lKCBkYXkgKSB7XG4gICAgICByZXR1cm4gd2Vla0RheXNOYW1lc1sgZGF5IF07XG4gIH1cbiAgZGF5TmFtZVNob3J0KCBkYXkgKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXlOYW1lKCBkYXkgKS5zbGljZSggMCwgMiApO1xuICB9XG4gIGlzSG9saWRheSggZGF0ZSApIHtcbiAgICAgcmV0dXJuIGRhdGUuZ2V0RGF5KCkgJSA2ID09PSAwIHx8IGRhdGUuZ2V0RGF5KCkgJSA3ID09PTA7XG4gIH1cbiAgc3RhdGljIHNwbGl0RGF0ZSggZGF0ZSApe1xuICAgIHJldHVybiB7XG4gICAgICBkYXk6IGRhdGUuZ2V0RGF0ZSgpLFxuICAgICAgbW9udGg6IGRhdGUuZ2V0TW9udGgoKSxcbiAgICAgIHllYXI6IGRhdGUuZ2V0RnVsbFllYXIoKVxuICAgIH07XG4gIH1cbiAgbG9jYWxpemUoIGtleSApIHtcbiAgICByZXR1cm4ga2V5O1xuICB9XG4gIGZvcm1hdHRlZCggZGF0ZSApeyAvL2Zvcm1hdCApIHtcbiAgICB2YXIgc2RhdGUgPSBDdWx0dXJlUHJvdmlkZXIuc3BsaXREYXRlKCBkYXRlICk7XG4gICAgLy9mb3JtYXQgPSBmb3JtYXQgfHwgdGhpcy5mb3JtYXQ7XG4gICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gW107XG4gICAgZm9ybWF0dGVkVmFsdWUucHVzaCggKCBcIjBcIiArIHNkYXRlLm1vbnRoICkuc2xpY2UoIC0yICkgKTtcbiAgICBmb3JtYXR0ZWRWYWx1ZS5wdXNoKCAoIFwiMFwiICsgc2RhdGUuZGF5ICkuc2xpY2UoIC0yICkgKTtcbiAgICBmb3JtYXR0ZWRWYWx1ZS5wdXNoKCAoIFwiMDAwMFwiICsgc2RhdGUueWVhciApLnNsaWNlKCAtNCApICk7XG4gICAgcmV0dXJuIGZvcm1hdHRlZFZhbHVlLmpvaW4oIFwiL1wiICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VsdHVyZVByb3ZpZGVyO1xuIiwiY29uc3QgRGlyZWN0aW9uID0ge1xuICBMZWZ0OiBcImxlZnRcIixcbiAgUmlnaHQ6IFwicmlnaHRcIlxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGlyZWN0aW9uO1xuIiwiY29uc3QgTW9kZXMgPSB7XG4gIFllYXJseTogXCJ5ZWFybHlcIixcbiAgTW9udGhseTogXCJtb250aGx5XCIsXG4gIFllYXJzOiBcInllYXJzcmFuZ2VcIlxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kZXM7XG4iXX0=
