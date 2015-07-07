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
      this.setState({ visible: !this.state.visible });
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd() {
      this.onClick();
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
        this.onClick();
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
    value: function onHide(e) {
      if (e && e.target === React.findDOMNode(this.refs.datepickerInput) && e.keyCode !== 27) {
        return;
      }
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
      this.props.onHide(e);
    }
  }, {
    key: "_handleCloseKey",
    value: function _handleCloseKey(e) {
      if (e.keyCode === 27) {
        this.props.onHide(e);
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
var DAYS_BLOCK_ROWS = 6;
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL2V4YW1wbGUvanMvYXBwLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3MuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVmLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZW51bS1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZncuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nZXQtbmFtZXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnN0YXRpY3MtYWNjZXB0LXByaW1pdGl2ZXMuanMiLCJub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL0JvdHRvbU5hdmlnYXRpb24uanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9EYXRlUGlja2VyLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvRGF5Q2VsbC5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL01vbnRoQ2VsbC5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL01vbnRobHlOYXZpZ2F0aW9uLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvTW9udGhseVBhbmUuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9OYXZpZ2F0aW9uUGFuZS5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL1dlZWtIZWFkZXJDZWxsLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvWWVhckNlbGwuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9ZZWFybHlOYXZpZ2F0aW9uLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvWWVhcmx5UGFuZS5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL1llYXJzUmFuZ2VOYXZpZ2F0aW9uLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvWWVhcnNSYW5nZVBhbmUuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9pbmZyYXN0cnVjdHVyZS9DdWx0dXJlUHJvdmlkZXIuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9pbmZyYXN0cnVjdHVyZS9EaXJlY3Rpb24uanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9pbmZyYXN0cnVjdHVyZS9Nb2Rlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFFLE9BQU8sQ0FBRSxDQUFDO0FBQ2pDLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBRSxzQkFBc0IsQ0FBRSxDQUFDLFVBQVUsQ0FBQzs7SUFFMUQsZUFBZTtBQUNSLFdBRFAsZUFBZSxDQUNOLEtBQUssRUFBRzswQkFEakIsZUFBZTs7QUFFakIsK0JBRkUsZUFBZSw2Q0FFVixLQUFLLEVBQUc7QUFDZixRQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFDO0FBQ25ELFFBQUksQ0FBQyxLQUFLLEdBQUc7QUFDWCxtQkFBYSxFQUFFLEVBQUU7QUFDakIsYUFBTyxFQUFFLEtBQUs7S0FDZixDQUFDO0FBQ0YsUUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztBQUN6QyxRQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFDO0FBQzdDLFFBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7QUFDdkMsUUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztHQUM1Qzs7WUFaRyxlQUFlOztlQUFmLGVBQWU7O1dBYVosbUJBQUc7QUFDUixVQUFJLENBQUMsUUFBUSxDQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBRSxDQUFDO0tBQ25EOzs7V0FDUyxzQkFBRTtBQUNWLFVBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNoQjs7O1dBQ1csc0JBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRztBQUNsQyxVQUFJLENBQUMsUUFBUSxDQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLENBQUUsQ0FBQztLQUMvRDs7O1dBQ1EsbUJBQUUsQ0FBQyxFQUFHO0FBQ2IsVUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLEVBQUUsRUFBRTtBQUNwQixZQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7T0FDaEI7S0FDRjs7O1dBQ08sa0JBQUUsQ0FBQyxFQUFHO0FBQ1osVUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUcsQ0FBQztBQUN4QyxVQUFJLEdBQUcsS0FBSyxDQUFFLENBQUMsSUFBSSxDQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDMUMsVUFBSSxDQUFDLFFBQVEsQ0FBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUUsQ0FBQztLQUNoRTs7O1dBQ0ssZ0JBQUUsQ0FBQyxFQUFFO0FBQ1QsVUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSSxFQUFFLEVBQUU7QUFDdkYsZUFBTztPQUNSO0FBQ0QsVUFBSSxDQUFDLFFBQVEsQ0FBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBRSxDQUFDO0tBQ3JDOzs7V0FDaUIsOEJBQUc7QUFDbkIsVUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQ3JCLGVBQU87T0FDUjs7QUFFRCxVQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFFLEtBQUssQ0FBRSxDQUFDO0FBQ25ELGNBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFFLFlBQVksQ0FBRSxDQUFDO0FBQzFDLFVBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0tBQ2xDOzs7V0FDZSw0QkFBRTtBQUNoQixVQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztBQUMxQixVQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQztBQUN4RixXQUFLLENBQUMsTUFBTSxDQUFFLG9CQUFDLFVBQVUsSUFBQyxLQUFLLEVBQUcsRUFBRSxRQUFRLEVBQUUsVUFBVTtBQUNwQixjQUFJLEVBQUUsVUFBVSxDQUFDLElBQUk7QUFDckIsYUFBRyxFQUFFLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEFBQy9CO0FBQ0Qsb0JBQVksRUFBRyxJQUFJLENBQUMsWUFBWSxBQUFFO0FBQ2xDLGNBQU0sRUFBSyxJQUFJLENBQUMsTUFBTSxBQUFFO0FBQ3hCLGVBQU8sRUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQUFBRTtBQUM5QixvQkFBWSxFQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxBQUFFLEdBQUUsRUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3BEOzs7V0FDZ0IsNkJBQUc7QUFDbEIsV0FBSyxDQUFDLHNCQUFzQixDQUFFLElBQUksQ0FBQyxZQUFZLENBQUUsQ0FBQztBQUNsRCxVQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLFlBQVksQ0FBRSxDQUFDO0tBQy9EOzs7V0FDZ0IsNkJBQUc7QUFDbEIsV0FBSyxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3ZELFVBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQ3pCOzs7V0FDaUIsOEJBQUc7QUFDbkIsVUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDekI7OztXQUNtQixnQ0FBRTtBQUNwQixVQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztLQUMxQjs7O1dBQ0ssa0JBQUc7QUFDUCxhQUFPOztVQUFLLFNBQVMsRUFBQyxpQkFBaUI7UUFDN0IsK0JBQU8sV0FBVyxFQUFDLHNCQUFzQjtBQUNyQyxhQUFHLEVBQUMsaUJBQWlCLEVBQUMsSUFBSSxFQUFDLE1BQU07QUFDakMsZUFBSyxFQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxBQUFFO0FBQ2xDLG1CQUFTLEVBQUcsSUFBSSxDQUFDLFNBQVMsQUFBRTtBQUM1QixrQkFBUSxFQUFHLElBQUksQ0FBQyxRQUFRLEFBQUU7QUFDMUIsaUJBQU8sRUFBRyxJQUFJLENBQUMsT0FBTyxBQUFFLEVBQUMsWUFBWSxFQUFHLElBQUksQ0FBQyxPQUFPLEFBQUUsR0FBRTtPQUFNLENBQUM7S0FDOUU7OztTQWxGRyxlQUFlO0dBQVMsS0FBSyxDQUFDLFNBQVM7O0FBcUY3QyxLQUFLLENBQUMsTUFBTSxDQUFDLG9CQUFDLGVBQWUsT0FBRSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUUsWUFBWSxDQUFFLENBQUUsQ0FBQzs7Ozs7QUN4RjNFOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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YyxDQUFDLElBQUksQ0FBRSxDQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFBLENBQUcsS0FBSyxDQUFFLENBQUMsQ0FBQyxDQUFFLENBQUUsQ0FBQztBQUN6RCxvQkFBYyxDQUFDLElBQUksQ0FBRSxDQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFBLENBQUcsS0FBSyxDQUFFLENBQUMsQ0FBQyxDQUFFLENBQUUsQ0FBQztBQUN2RCxvQkFBYyxDQUFDLElBQUksQ0FBRSxDQUFFLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFBLENBQUcsS0FBSyxDQUFFLENBQUMsQ0FBQyxDQUFFLENBQUUsQ0FBQztBQUMzRCxhQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFFLENBQUM7S0FDbkM7OztXQWxCZSxtQkFBRSxJQUFJLEVBQUU7QUFDdEIsYUFBTztBQUNMLFdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ25CLGFBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ3RCLFlBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFO09BQ3pCLENBQUM7S0FDSDs7O1NBakNHLGVBQWU7OztxQkFnRE4sZUFBZTs7Ozs7Ozs7O0FDbkQ5QixJQUFNLFNBQVMsR0FBRztBQUNoQixNQUFJLEVBQUUsTUFBTTtBQUNaLE9BQUssRUFBRSxPQUFPO0NBQ2YsQ0FBQzs7cUJBRWEsU0FBUzs7Ozs7Ozs7O0FDTHhCLElBQU0sS0FBSyxHQUFHO0FBQ1osUUFBTSxFQUFFLFFBQVE7QUFDaEIsU0FBTyxFQUFFLFNBQVM7QUFDbEIsT0FBSyxFQUFFLFlBQVk7Q0FDcEIsQ0FBQzs7cUJBRWEsS0FBSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoIFwicmVhY3RcIiApO1xuY29uc3QgRGF0ZVBpY2tlciA9IHJlcXVpcmUoIFwiLi4vLi4vc3JjL0RhdGVQaWNrZXJcIiApLkRhdGVQaWNrZXI7XG5cbmNsYXNzIERhdGVQaWNrZXJJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICkge1xuICAgIHN1cGVyKCBwcm9wcyApO1xuICAgIHRoaXMub25EYXRlQ2hhbmdlID0gdGhpcy5vbkRhdGVDaGFuZ2UuYmluZCggdGhpcyApO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb3JtYXR0ZWREYXRlOiBcIlwiLFxuICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICB9O1xuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5vbkhpZGUgPSB0aGlzLm9uSGlkZS5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCggdGhpcyApO1xuICB9XG4gIG9uQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSggeyB2aXNpYmxlOiAhdGhpcy5zdGF0ZS52aXNpYmxlIH0gKTtcbiAgfVxuICBvblRvdWNoRW5kKCl7XG4gICAgdGhpcy5vbkNsaWNrKCk7XG4gIH1cbiAgb25EYXRlQ2hhbmdlKCBkYXRlLCBmb3JtYXR0ZWREYXRlICkge1xuICAgIHRoaXMuc2V0U3RhdGUoIHsgZGF0ZTogZGF0ZSwgZm9ybWF0dGVkRGF0ZTogZm9ybWF0dGVkRGF0ZSB9ICk7XG4gIH1cbiAgb25LZXlEb3duKCBlICkge1xuICAgIGlmKCBlLmtleUNvZGUgPT09IDEzICl7XG4gICAgICB0aGlzLm9uQ2xpY2soKTtcbiAgICB9XG4gIH1cbiAgb25DaGFuZ2UoIGUgKSB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSggIGUudGFyZ2V0LnZhbHVlICApO1xuICAgIGRhdGUgPSBpc05hTiggK2RhdGUgKSA/IG5ldyBEYXRlKCkgOiBkYXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoIHsgZGF0ZTogZGF0ZSwgZm9ybWF0dGVkRGF0ZTogZS50YXJnZXQudmFsdWUgfSApO1xuICB9XG4gIG9uSGlkZSggZSApe1xuICAgIGlmKCBlICYmIGUudGFyZ2V0ID09PSBSZWFjdC5maW5kRE9NTm9kZSggdGhpcy5yZWZzLmRhdGVwaWNrZXJJbnB1dCApICYmIGUua2V5Q29kZSE9PSAyNyApe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKCB7IHZpc2libGU6IGZhbHNlIH0gKTtcbiAgfVxuICBlbnN1cmVNb3VudEVsZW1lbnQoKSB7XG4gICAgaWYoIHRoaXMubW91bnRFbGVtZW50ICl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG1vdW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBtb3VudEVsZW1lbnQgKTtcbiAgICB0aGlzLm1vdW50RWxlbWVudCA9IG1vdW50RWxlbWVudDtcbiAgfVxuICByZW5kZXJEYXRlUGlja2VyKCl7XG4gICAgdGhpcy5lbnN1cmVNb3VudEVsZW1lbnQoKTtcbiAgICB2YXIgYm91bmRhcmllcyA9IFJlYWN0LmZpbmRET01Ob2RlKCB0aGlzLnJlZnMuZGF0ZXBpY2tlcklucHV0ICkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgUmVhY3QucmVuZGVyKCA8RGF0ZVBpY2tlciBzdHlsZT17IHsgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBib3VuZGFyaWVzLmxlZnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBib3VuZGFyaWVzLmJvdHRvbSArIDIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EYXRlQ2hhbmdlPXsgdGhpcy5vbkRhdGVDaGFuZ2UgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlID0geyB0aGlzLm9uSGlkZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXsgdGhpcy5zdGF0ZS52aXNpYmxlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRGF0ZT17IHRoaXMuc3RhdGUuZGF0ZSB9Lz4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdW50RWxlbWVudCk7XG4gIH1cbiAgZGlzcG9zZURhdGVQaWNrZXIoKSB7XG4gICAgUmVhY3QudW5tb3VudENvbXBvbmVudEF0Tm9kZSggdGhpcy5tb3VudEVsZW1lbnQgKTtcbiAgICB0aGlzLm1vdW50RWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCB0aGlzLm1vdW50RWxlbWVudCApO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIFJlYWN0LmZpbmRET01Ob2RlKCB0aGlzLnJlZnMuZGF0ZXBpY2tlcklucHV0ICkuZm9jdXMoKTtcbiAgICB0aGlzLnJlbmRlckRhdGVQaWNrZXIoKTtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5yZW5kZXJEYXRlUGlja2VyKCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICB0aGlzLmRpc3Bvc2VEYXRlUGlja2VyKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRhdGVwaWNrZXJJbnB1dFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJDbGljayBvciBwcmVzcyBlbnRlclwiXG4gICAgICAgICAgICAgICAgICByZWY9XCJkYXRlcGlja2VySW5wdXRcIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17IHRoaXMuc3RhdGUuZm9ybWF0dGVkRGF0ZSB9XG4gICAgICAgICAgICAgICAgICBvbktleURvd249eyB0aGlzLm9uS2V5RG93biB9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2UgfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMub25DbGljayB9IG9uVG91Y2hTdGFydD17IHRoaXMub25DbGljayB9Lz48L2Rpdj47XG4gIH1cbn1cblxuUmVhY3QucmVuZGVyKDxEYXRlUGlja2VySW5wdXQvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIFwiZGF0ZXBpY2tlclwiICkgKTtcbiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcblxuICAgICAgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSkoKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkYXNzaWduID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduXCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfT2JqZWN0JGFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94Mykge1xuICB2YXIgX2FnYWluID0gdHJ1ZTtcblxuICBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHtcbiAgICB2YXIgb2JqZWN0ID0gX3gsXG4gICAgICAgIHByb3BlcnR5ID0gX3gyLFxuICAgICAgICByZWNlaXZlciA9IF94MztcbiAgICBkZXNjID0gcGFyZW50ID0gZ2V0dGVyID0gdW5kZWZpbmVkO1xuICAgIF9hZ2FpbiA9IGZhbHNlO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICAgIHZhciBkZXNjID0gX09iamVjdCRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7XG5cbiAgICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF94ID0gcGFyZW50O1xuICAgICAgICBfeDIgPSBwcm9wZXJ0eTtcbiAgICAgICAgX3gzID0gcmVjZWl2ZXI7XG4gICAgICAgIF9hZ2FpbiA9IHRydWU7XG4gICAgICAgIGNvbnRpbnVlIF9mdW5jdGlvbjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGNyZWF0ZSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IF9PYmplY3QkY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpLmNvcmUuT2JqZWN0LmFzc2lnbjsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCl7XG4gIHJldHVybiAkLmNyZWF0ZShQLCBEKTtcbn07IiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkLnNldERlc2MoaXQsIGtleSwgZGVzYyk7XG59OyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc3RhdGljcy1hY2NlcHQtcHJpbWl0aXZlcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIHJldHVybiAkLmdldERlc2MoaXQsIGtleSk7XG59OyIsInZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZW51bUtleXMgPSByZXF1aXJlKCcuLyQuZW51bS1rZXlzJyk7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG4gIHZhciBUID0gT2JqZWN0KCQuYXNzZXJ0RGVmaW5lZCh0YXJnZXQpKVxuICAgICwgbCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGkgPSAxO1xuICB3aGlsZShsID4gaSl7XG4gICAgdmFyIFMgICAgICA9ICQuRVM1T2JqZWN0KGFyZ3VtZW50c1tpKytdKVxuICAgICAgLCBrZXlzICAgPSBlbnVtS2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKVRba2V5ID0ga2V5c1tqKytdXSA9IFNba2V5XTtcbiAgfVxuICByZXR1cm4gVDtcbn07IiwidmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGdsb2JhbCAgICAgPSAkLmdcbiAgLCBjb3JlICAgICAgID0gJC5jb3JlXG4gICwgaXNGdW5jdGlvbiA9ICQuaXNGdW5jdGlvbjtcbmZ1bmN0aW9uIGN0eChmbiwgdGhhdCl7XG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufVxuLy8gdHlwZSBiaXRtYXBcbiRkZWYuRiA9IDE7ICAvLyBmb3JjZWRcbiRkZWYuRyA9IDI7ICAvLyBnbG9iYWxcbiRkZWYuUyA9IDQ7ICAvLyBzdGF0aWNcbiRkZWYuUCA9IDg7ICAvLyBwcm90b1xuJGRlZi5CID0gMTY7IC8vIGJpbmRcbiRkZWYuVyA9IDMyOyAvLyB3cmFwXG5mdW5jdGlvbiAkZGVmKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHBcbiAgICAsIGlzR2xvYmFsID0gdHlwZSAmICRkZWYuR1xuICAgICwgaXNQcm90byAgPSB0eXBlICYgJGRlZi5QXG4gICAgLCB0YXJnZXQgICA9IGlzR2xvYmFsID8gZ2xvYmFsIDogdHlwZSAmICRkZWYuU1xuICAgICAgICA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pLnByb3RvdHlwZVxuICAgICwgZXhwb3J0cyAgPSBpc0dsb2JhbCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICBpZihpc0dsb2JhbClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gISh0eXBlICYgJGRlZi5GKSAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGlmKGlzR2xvYmFsICYmICFpc0Z1bmN0aW9uKHRhcmdldFtrZXldKSlleHAgPSBzb3VyY2Vba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGVsc2UgaWYodHlwZSAmICRkZWYuQiAmJiBvd24pZXhwID0gY3R4KG91dCwgZ2xvYmFsKTtcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIGVsc2UgaWYodHlwZSAmICRkZWYuVyAmJiB0YXJnZXRba2V5XSA9PSBvdXQpIWZ1bmN0aW9uKEMpe1xuICAgICAgZXhwID0gZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcbiAgICAgIH07XG4gICAgICBleHAucHJvdG90eXBlID0gQy5wcm90b3R5cGU7XG4gICAgfShvdXQpO1xuICAgIGVsc2UgZXhwID0gaXNQcm90byAmJiBpc0Z1bmN0aW9uKG91dCkgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnRcbiAgICBleHBvcnRzW2tleV0gPSBleHA7XG4gICAgaWYoaXNQcm90bykoZXhwb3J0cy5wcm90b3R5cGUgfHwgKGV4cG9ydHMucHJvdG90eXBlID0ge30pKVtrZXldID0gb3V0O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9ICRkZWY7IiwidmFyICQgPSByZXF1aXJlKCcuLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIga2V5cyAgICAgICA9ICQuZ2V0S2V5cyhpdClcbiAgICAsIGdldERlc2MgICAgPSAkLmdldERlc2NcbiAgICAsIGdldFN5bWJvbHMgPSAkLmdldFN5bWJvbHM7XG4gIGlmKGdldFN5bWJvbHMpJC5lYWNoLmNhbGwoZ2V0U3ltYm9scyhpdCksIGZ1bmN0aW9uKGtleSl7XG4gICAgaWYoZ2V0RGVzYyhpdCwga2V5KS5lbnVtZXJhYmxlKWtleXMucHVzaChrZXkpO1xuICB9KTtcbiAgcmV0dXJuIGtleXM7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oJCl7XG4gICQuRlcgICA9IGZhbHNlO1xuICAkLnBhdGggPSAkLmNvcmU7XG4gIHJldHVybiAkO1xufTsiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XHJcbnZhciAkID0gcmVxdWlyZSgnLi8kJylcclxuICAsIHRvU3RyaW5nID0ge30udG9TdHJpbmdcclxuICAsIGdldE5hbWVzID0gJC5nZXROYW1lcztcclxuXHJcbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcclxuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcclxuXHJcbmZ1bmN0aW9uIGdldFdpbmRvd05hbWVzKGl0KXtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGdldE5hbWVzKGl0KTtcclxuICB9IGNhdGNoKGUpe1xyXG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5nZXQgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcclxuICBpZih3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJylyZXR1cm4gZ2V0V2luZG93TmFtZXMoaXQpO1xyXG4gIHJldHVybiBnZXROYW1lcygkLnRvT2JqZWN0KGl0KSk7XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKClcbiAgLCBjb3JlICAgPSB7fVxuICAsIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5XG4gICwgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eVxuICAsIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yXG4gICwgbWF4ICAgPSBNYXRoLm1heFxuICAsIG1pbiAgID0gTWF0aC5taW47XG4vLyBUaGUgZW5naW5lIHdvcmtzIGZpbmUgd2l0aCBkZXNjcmlwdG9ycz8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eS5cbnZhciBERVNDID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gMjsgfX0pLmEgPT0gMjtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xudmFyIGhpZGUgPSBjcmVhdGVEZWZpbmVyKDEpO1xuLy8gNy4xLjQgVG9JbnRlZ2VyXG5mdW5jdGlvbiB0b0ludGVnZXIoaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn1cbmZ1bmN0aW9uIGRlc2MoYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufVxuZnVuY3Rpb24gc2ltcGxlU2V0KG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59XG5mdW5jdGlvbiBjcmVhdGVEZWZpbmVyKGJpdG1hcCl7XG4gIHJldHVybiBERVNDID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgICByZXR1cm4gJC5zZXREZXNjKG9iamVjdCwga2V5LCBkZXNjKGJpdG1hcCwgdmFsdWUpKTtcbiAgfSA6IHNpbXBsZVNldDtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoaXQpe1xuICByZXR1cm4gaXQgIT09IG51bGwgJiYgKHR5cGVvZiBpdCA9PSAnb2JqZWN0JyB8fCB0eXBlb2YgaXQgPT0gJ2Z1bmN0aW9uJyk7XG59XG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gYXNzZXJ0RGVmaW5lZChpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn1cblxudmFyICQgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5mdycpKHtcbiAgZzogZ2xvYmFsLFxuICBjb3JlOiBjb3JlLFxuICBodG1sOiBnbG9iYWwuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAvLyBodHRwOi8vanNwZXJmLmNvbS9jb3JlLWpzLWlzb2JqZWN0XG4gIGlzT2JqZWN0OiAgIGlzT2JqZWN0LFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICB0aGF0OiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvLyA3LjEuNCBUb0ludGVnZXJcbiAgdG9JbnRlZ2VyOiB0b0ludGVnZXIsXG4gIC8vIDcuMS4xNSBUb0xlbmd0aFxuICB0b0xlbmd0aDogZnVuY3Rpb24oaXQpe1xuICAgIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG4gIH0sXG4gIHRvSW5kZXg6IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICAgIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbiAgfSxcbiAgaGFzOiBmdW5jdGlvbihpdCwga2V5KXtcbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbiAgfSxcbiAgY3JlYXRlOiAgICAgT2JqZWN0LmNyZWF0ZSxcbiAgZ2V0UHJvdG86ICAgT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICBERVNDOiAgICAgICBERVNDLFxuICBkZXNjOiAgICAgICBkZXNjLFxuICBnZXREZXNjOiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBzZXREZXNjOiAgICBkZWZpbmVQcm9wZXJ0eSxcbiAgc2V0RGVzY3M6ICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsXG4gIGdldEtleXM6ICAgIE9iamVjdC5rZXlzLFxuICBnZXROYW1lczogICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgZ2V0U3ltYm9sczogT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgYXNzZXJ0RGVmaW5lZDogYXNzZXJ0RGVmaW5lZCxcbiAgLy8gRHVtbXksIGZpeCBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZyBpbiBlczUgbW9kdWxlXG4gIEVTNU9iamVjdDogT2JqZWN0LFxuICB0b09iamVjdDogZnVuY3Rpb24oaXQpe1xuICAgIHJldHVybiAkLkVTNU9iamVjdChhc3NlcnREZWZpbmVkKGl0KSk7XG4gIH0sXG4gIGhpZGU6IGhpZGUsXG4gIGRlZjogY3JlYXRlRGVmaW5lcigwKSxcbiAgc2V0OiBnbG9iYWwuU3ltYm9sID8gc2ltcGxlU2V0IDogaGlkZSxcbiAgZWFjaDogW10uZm9yRWFjaFxufSk7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuaWYodHlwZW9mIF9fZSAhPSAndW5kZWZpbmVkJylfX2UgPSBjb3JlO1xuaWYodHlwZW9mIF9fZyAhPSAndW5kZWZpbmVkJylfX2cgPSBnbG9iYWw7IiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpO1xuJGRlZigkZGVmLlMsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuLyQuYXNzaWduJyl9KTsiLCJ2YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsICRkZWYgICAgID0gcmVxdWlyZSgnLi8kLmRlZicpXG4gICwgaXNPYmplY3QgPSAkLmlzT2JqZWN0XG4gICwgdG9PYmplY3QgPSAkLnRvT2JqZWN0O1xuJC5lYWNoLmNhbGwoKCdmcmVlemUsc2VhbCxwcmV2ZW50RXh0ZW5zaW9ucyxpc0Zyb3plbixpc1NlYWxlZCxpc0V4dGVuc2libGUsJyArXG4gICdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsZ2V0UHJvdG90eXBlT2Ysa2V5cyxnZXRPd25Qcm9wZXJ0eU5hbWVzJykuc3BsaXQoJywnKVxuLCBmdW5jdGlvbihLRVksIElEKXtcbiAgdmFyIGZuICAgICA9ICgkLmNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBmb3JjZWQgPSAwXG4gICAgLCBtZXRob2QgPSB7fTtcbiAgbWV0aG9kW0tFWV0gPSBJRCA9PSAwID8gZnVuY3Rpb24gZnJlZXplKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogaXQ7XG4gIH0gOiBJRCA9PSAxID8gZnVuY3Rpb24gc2VhbChpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IGl0O1xuICB9IDogSUQgPT0gMiA/IGZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogaXQ7XG4gIH0gOiBJRCA9PSAzID8gZnVuY3Rpb24gaXNGcm96ZW4oaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiB0cnVlO1xuICB9IDogSUQgPT0gNCA/IGZ1bmN0aW9uIGlzU2VhbGVkKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogdHJ1ZTtcbiAgfSA6IElEID09IDUgPyBmdW5jdGlvbiBpc0V4dGVuc2libGUoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBmYWxzZTtcbiAgfSA6IElEID09IDYgPyBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gICAgcmV0dXJuIGZuKHRvT2JqZWN0KGl0KSwga2V5KTtcbiAgfSA6IElEID09IDcgPyBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCl7XG4gICAgcmV0dXJuIGZuKE9iamVjdCgkLmFzc2VydERlZmluZWQoaXQpKSk7XG4gIH0gOiBJRCA9PSA4ID8gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuIGZuKHRvT2JqZWN0KGl0KSk7XG4gIH0gOiByZXF1aXJlKCcuLyQuZ2V0LW5hbWVzJykuZ2V0O1xuICB0cnkge1xuICAgIGZuKCd6Jyk7XG4gIH0gY2F0Y2goZSl7XG4gICAgZm9yY2VkID0gMTtcbiAgfVxuICAkZGVmKCRkZWYuUyArICRkZWYuRiAqIGZvcmNlZCwgJ09iamVjdCcsIG1ldGhvZCk7XG59KTsiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE1IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblxuXHRcdHZhciBjbGFzc2VzID0gJyc7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoJ3N0cmluZycgPT09IGFyZ1R5cGUgfHwgJ251bWJlcicgPT09IGFyZ1R5cGUpIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhcmc7XG5cblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCdvYmplY3QnID09PSBhcmdUeXBlKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoYXJnLmhhc093blByb3BlcnR5KGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsga2V5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLnN1YnN0cigxKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKXtcblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxuXG59KCkpO1xuIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCBcInJlYWN0XCIgKTtcbmNvbnN0IE1vZGVzID0gcmVxdWlyZSggXCIuL2luZnJhc3RydWN0dXJlL01vZGVzXCIgKTtcblxuY2xhc3MgQm90dG9tTmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgZHJpbGxEb3duKCB0aW1lZnJhbWUgKSB7XG4gICAgbGV0IG5ld1RpbWVmcmFtZSA9IG5ldyBEYXRlKCArdGltZWZyYW1lICk7XG4gICAgdGhpcy5wcm9wcy5kcmlsbERvd24oIE1vZGVzLk1vbnRobHksIG5ld1RpbWVmcmFtZSApO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci1uYXYtYm90dG9tXCI+XG4gICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eyB0aGlzLmRyaWxsRG93bi5iaW5kKCB0aGlzLCB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZSApIH0+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmN1bHR1cmVQcm92aWRlci5sb2NhbGl6ZSggXCJTZWxlY3RlZFwiICkgfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eyB0aGlzLmRyaWxsRG93bi5iaW5kKCB0aGlzLCBuZXcgRGF0ZSgpICkgfT5cbiAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuY3VsdHVyZVByb3ZpZGVyLmxvY2FsaXplKCBcIlRvZGF5XCIgKSB9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm90dG9tTmF2aWdhdGlvbjtcbiIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSggXCJyZWFjdFwiICk7XG5jb25zdCBZZWFybHlQYW5lID0gcmVxdWlyZSggXCIuL1llYXJseVBhbmVcIiApO1xuY29uc3QgTW9udGhseVBhbmUgPSByZXF1aXJlKCBcIi4vTW9udGhseVBhbmVcIiApO1xuY29uc3QgWWVhcnNSYW5nZVBhbmUgPSByZXF1aXJlKCBcIi4vWWVhcnNSYW5nZVBhbmVcIiApO1xuY29uc3QgWWVhcmx5TmF2aWdhdGlvbiA9IHJlcXVpcmUoIFwiLi9ZZWFybHlOYXZpZ2F0aW9uXCIgKTtcbmNvbnN0IE1vbnRobHlOYXZpZ2F0aW9uID0gcmVxdWlyZSggXCIuL01vbnRobHlOYXZpZ2F0aW9uXCIgKTtcbmNvbnN0IFllYXJzUmFuZ2VOYXZpZ2F0aW9uID0gcmVxdWlyZSggXCIuL1llYXJzUmFuZ2VOYXZpZ2F0aW9uXCIgKTtcbmNvbnN0IEJvdHRvbU5hdmlnYXRpb24gPSByZXF1aXJlKCBcIi4vQm90dG9tTmF2aWdhdGlvblwiICk7XG5jb25zdCBDdWx0dXJlUHJvdmlkZXIgPSByZXF1aXJlKCBcIi4vaW5mcmFzdHJ1Y3R1cmUvQ3VsdHVyZVByb3ZpZGVyXCIgKTtcbmNvbnN0IE1vZGVzID0gcmVxdWlyZSggXCIuL2luZnJhc3RydWN0dXJlL01vZGVzXCIgKTtcblxuY29uc3QgTW9kZVZpZXdzID0ge307XG5cbk1vZGVWaWV3c1sgTW9kZXMuWWVhcmx5IF0gPSBbIFllYXJseU5hdmlnYXRpb24sIFllYXJseVBhbmUsIEJvdHRvbU5hdmlnYXRpb24gXTtcbk1vZGVWaWV3c1sgTW9kZXMuTW9udGhseSBdID0gWyBNb250aGx5TmF2aWdhdGlvbiwgTW9udGhseVBhbmUsIEJvdHRvbU5hdmlnYXRpb24gXTtcbk1vZGVWaWV3c1sgTW9kZXMuWWVhcnMgXSA9IFsgWWVhcnNSYW5nZU5hdmlnYXRpb24sIFllYXJzUmFuZ2VQYW5lLCBCb3R0b21OYXZpZ2F0aW9uIF07XG5cblxuXG5jbGFzcyBDb250ZW50UGFuZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCBjb21wb25lbnRzID0gdGhpcy5wcm9wcy5jYXNlc1sgdGhpcy5wcm9wcy5tb2RlIF0ubWFwKFxuICAgICAgICAgIChjLCBpKSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KCBjLCBPYmplY3QuYXNzaWduKCB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY1wiICsgaSArIHRoaXMucHJvcHMubW9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICkgKVxuICAgICk7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci1wYW5lXCIgc3R5bGU9eyB0aGlzLnByb3BzLnN0eWxlIH0+XG4gICAgICAgICAgICAgIHsgY29tcG9uZW50cyB9XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyaW1EYXRlKCBkYXRlICl7XG4gIHZhciBzcGxpdHRlZCA9IEN1bHR1cmVQcm92aWRlci5zcGxpdERhdGUoIGRhdGUgKTtcbiAgcmV0dXJuIG5ldyBEYXRlKCBzcGxpdHRlZC55ZWFyLCBzcGxpdHRlZC5tb250aCwgc3BsaXR0ZWQuZGF5ICk7XG59XG5cblxuY2xhc3MgRGF0ZVBpY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICkge1xuICAgIHN1cGVyKCBwcm9wcyApO1xuICAgIHRoaXMuc3dpdGNoTW9kZSA9IHRoaXMuc3dpdGNoTW9kZS5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5zZXRUaW1lZnJhbWUgPSB0aGlzLnNldFRpbWVmcmFtZS5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5zZXREYXRlID0gdGhpcy5zZXREYXRlLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLmRyaWxsRG93biA9IHRoaXMuZHJpbGxEb3duLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLl90cmFja091dHNpZGVDbGljayA9IHRoaXMuX3RyYWNrT3V0c2lkZUNsaWNrLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLl9oYW5kbGVDbG9zZUtleSA9IHRoaXMuX2hhbmRsZUNsb3NlS2V5LmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5pbml0U3RhdGUoIHRoaXMucHJvcHMsIHt9ICk7XG4gIH1cbiAgaW5pdFN0YXRlKCBwcm9wcywgc3RhdGUgKXtcbiAgICB2YXIgbmV3c3RhdGUgPSB7fTtcbiAgICBuZXdzdGF0ZS5tb2RlID0gcHJvcHMubW9kZSB8fCBNb2Rlcy5Nb250aGx5O1xuICAgIGlmKCBwcm9wcy5zZWxlY3RlZERhdGUgIT09IHN0YXRlLnNlbGVjdGVkRGF0ZSB8fCBzdGF0ZS5zZWxlY3RlZERhdGUgPT09IHVuZGVmaW5lZCApe1xuICAgICAgbmV3c3RhdGUuc2VsZWN0ZWREYXRlID0gdHJpbURhdGUoIHByb3BzLnNlbGVjdGVkRGF0ZSB8fCBuZXcgRGF0ZSgpICk7XG4gICAgICBuZXdzdGF0ZS50aW1lZnJhbWUgPSBzdGF0ZS5zZWxlY3RlZERhdGU7XG4gICAgfVxuICAgIHJldHVybiBuZXdzdGF0ZTtcbiAgfVxuICBzZXRUaW1lZnJhbWUoIG5ld0RhdGUgKSB7XG4gICAgbmV3RGF0ZSA9IHRyaW1EYXRlKCBuZXdEYXRlICk7XG4gICAgdGhpcy5zZXRTdGF0ZSggeyB0aW1lZnJhbWU6IG5ld0RhdGUgfSApO1xuICB9XG4gIHN3aXRjaE1vZGUoIG1vZGUgKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSggeyBtb2RlOiBtb2RlIH0gKTtcbiAgfVxuICBzZXREYXRlKCBkYXRlICl7XG4gICAgZGF0ZSA9IHRyaW1EYXRlKCBkYXRlICk7XG4gICAgdGhpcy5zZXRTdGF0ZSggeyB0aW1lZnJhbWU6IGRhdGUgLCBtb2RlOiBNb2Rlcy5Nb250aGx5LCBzZWxlY3RlZERhdGU6IGRhdGUgfSwgZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMucHJvcHMub25EYXRlQ2hhbmdlKCBkYXRlLCB0aGlzLnByb3BzLmN1bHR1cmVQcm92aWRlci5mb3JtYXR0ZWQoIGRhdGUgKSApO1xuICAgIH0uYmluZCggdGhpcyApICk7XG4gIH1cbiAgZHJpbGxEb3duKCBtb2RlLCB0aW1lZnJhbWUgKXtcbiAgICB0aGlzLnNldFN0YXRlKCB7IG1vZGU6IG1vZGUsIHRpbWVmcmFtZTogdHJpbURhdGUoIHRpbWVmcmFtZSApIH0gKTtcbiAgfVxuICAvKnByaXZhdGUgc2VjdGlvbnMqL1xuICBfdHJhY2tPdXRzaWRlQ2xpY2soIGUgKSB7XG4gICAgaWYgKCAhdGhpcy5wcm9wcy52aXNpYmxlICl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBsZXQgcm9vdCA9IFJlYWN0LmZpbmRET01Ob2RlKCB0aGlzICk7XG4gICAgd2hpbGUoIHRhcmdldCApe1xuICAgICAgaWYoIHRhcmdldCA9PT0gcm9vdCApe1xuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uSGlkZSggZSApO1xuICB9XG4gIF9oYW5kbGVDbG9zZUtleSggZSApe1xuICAgIGlmICggZS5rZXlDb2RlPT09MjcgKXtcbiAgICAgIHRoaXMucHJvcHMub25IaWRlKCBlICk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoIG5ld1Byb3BzICl7XG4gICAgdGhpcy5zZXRTdGF0ZSggdGhpcy5pbml0U3RhdGUoIG5ld1Byb3BzLCB0aGlzLnN0YXRlICkgKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwibW91c2Vkb3duXCIsIHRoaXMuX3RyYWNrT3V0c2lkZUNsaWNrICk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuX3RyYWNrT3V0c2lkZUNsaWNrICk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUNsb3NlS2V5ICk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJtb3VzZWRvd25cIiwgdGhpcy5fdHJhY2tPdXRzaWRlQ2xpY2sgKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCBcInRvdWNoc3RhcnRcIiwgdGhpcy5fdHJhY2tPdXRzaWRlQ2xpY2sgKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcImtleWRvd25cIiwgdGhpcy5faGFuZGxlQ2xvc2VLZXkgKTtcblxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBpZiggIXRoaXMucHJvcHMudmlzaWJsZSApe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiA8Q29udGVudFBhbmUgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgIG1vZGU9eyB0aGlzLnN0YXRlLm1vZGUgfVxuICAgICAgICAgICAgICB0aW1lZnJhbWUgPSB7IHRoaXMuc3RhdGUudGltZWZyYW1lIH1cbiAgICAgICAgICAgICAgc2VsZWN0ZWREYXRlPXsgdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGUgfVxuICAgICAgICAgICAgICBjYXNlcz17IE1vZGVWaWV3cyB9XG4gICAgICAgICAgICAgIHNldFRpbWVmcmFtZT17IHRoaXMuc2V0VGltZWZyYW1lIH1cbiAgICAgICAgICAgICAgc2V0RGF0ZT17IHRoaXMuc2V0RGF0ZSB9XG4gICAgICAgICAgICAgIGRyaWxsRG93bj17IHRoaXMuZHJpbGxEb3duIH1cbiAgICAgICAgICAgICAgc3dpdGNoTW9kZSA9eyB0aGlzLnN3aXRjaE1vZGUgfS8+O1xuICB9XG59XG5cbkRhdGVQaWNrZXIuZGVmYXVsdFByb3BzID0ge1xuICBjdWx0dXJlUHJvdmlkZXI6IG5ldyBDdWx0dXJlUHJvdmlkZXIoKSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIHN0eWxlOiB7fSxcbiAgb25IaWRlOiBmdW5jdGlvbigpe31cbn07XG5cbm1vZHVsZS5leHBvcnRzPSB7XG4gIERhdGVQaWNrZXI6IERhdGVQaWNrZXIsXG4gIEN1bHR1cmVQcm92aWRlcjogQ3VsdHVyZVByb3ZpZGVyXG59O1xuIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCBcInJlYWN0XCIgKTtcbmNvbnN0IGNuID0gcmVxdWlyZSggXCJjbGFzc25hbWVzXCIgKTtcbmxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG50b2RheSA9IG5ldyBEYXRlKCB0b2RheS5nZXRGdWxsWWVhcigpLCB0b2RheS5nZXRNb250aCgpLCB0b2RheS5nZXREYXRlKCkgKTtcblxuY2xhc3MgRGF5Q2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICkge1xuICAgIHN1cGVyKCBwcm9wcyApO1xuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKCB0aGlzICk7XG4gIH1cbiAgaXNTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gK3RoaXMucHJvcHMuZGF0ZSA9PT0gK3RoaXMucHJvcHMuc2VsZWN0ZWREYXRlO1xuICB9XG4gIGlzVG9kYXkoKSB7XG4gICAgcmV0dXJuICArdGhpcy5wcm9wcy5kYXRlID09PSArdG9kYXk7XG4gIH1cbiAgb2ZmVGltZWZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGUuZ2V0TW9udGgoKSAhPT0gdGhpcy5wcm9wcy50aW1lZnJhbWUuZ2V0TW9udGgoKTtcbiAgfVxuICBvbkNsaWNrKCl7XG4gICAgdGhpcy5wcm9wcy5zZXREYXRlKCB0aGlzLnByb3BzLmRhdGUgKTtcbiAgfVxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9eyBjbiggXCJkYXRlcGlja2VyLWRhdGUtY2VsbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVwaWNrZXItdG9kYXlcIjogIXRoaXMuaXNTZWxlY3RlZCgpICYmIHRoaXMuaXNUb2RheSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlcGlja2VyLXNlbGVjdGVkXCI6IHRoaXMuaXNTZWxlY3RlZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlcGlja2VyLXdlZWtlbmRcIjogdGhpcy5wcm9wcy5jdWx0dXJlUHJvdmlkZXIuaXNIb2xpZGF5KCB0aGlzLnByb3BzLmRhdGUgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZXBpY2tlci10aW1lZnJhbWUtb2ZmXCI6IHRoaXMub2ZmVGltZWZyYW1lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICkgfSBvbkNsaWNrPXsgdGhpcy5vbkNsaWNrIH0+XG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuZGF0ZS5nZXREYXRlKCkgfVxuICAgICAgICAgIDwvZGl2PjtcbiAgfVxufVxuXG5EYXlDZWxsLnByb3BUeXBlcyA9IHtcbiAgZGF0ZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBzZXREYXRlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXlDZWxsO1xuIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCBcInJlYWN0XCIgKTtcbmNvbnN0IE1vZGVzID0gcmVxdWlyZSggXCIuL2luZnJhc3RydWN0dXJlL01vZGVzXCIgKTtcbmNvbnN0IGNuID0gcmVxdWlyZSggXCJjbGFzc25hbWVzXCIgKTtcblxuY2xhc3MgTW9udGhDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKXtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCggdGhpcyApO1xuICB9XG4gIG9uQ2xpY2soKSB7XG4gICAgdmFyIHRpbWVmcmFtZSA9IG5ldyBEYXRlKCArdGhpcy5wcm9wcy50aW1lZnJhbWUgKTtcbiAgICB0aW1lZnJhbWUuc2V0TW9udGgoIHRoaXMucHJvcHMubW9udGggKTtcbiAgICB0aGlzLnByb3BzLmRyaWxsRG93biggTW9kZXMuTW9udGhseSwgdGltZWZyYW1lICk7XG4gIH1cbiAgaXNTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5tb250aCA9PT0gdGhpcy5wcm9wcy5zZWxlY3RlZERhdGUuZ2V0TW9udGgoKSAmJlxuICAgICB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpID09PSB0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRGdWxsWWVhcigpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBvbkNsaWNrPXsgdGhpcy5vbkNsaWNrIH0gY2xhc3NOYW1lPXsgY24oIFwiZGF0ZXBpY2tlci1tb250aC1jZWxsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlcGlja2VyLXNlbGVjdGVkXCI6IHRoaXMuaXNTZWxlY3RlZCgpXG4gICAgICAgICAgICAgICAgfSApIH0+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmN1bHR1cmVQcm92aWRlci5tb250aE5hbWVTaG9ydCggdGhpcy5wcm9wcy5tb250aCApIH1cbiAgICAgICAgICA8L2Rpdj47XG4gIH1cbn1cblxuTW9udGhDZWxsLnByb3BUeXBlcyA9IHtcbiAgbW9udGg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgb25TZWxlY3Q6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb250aENlbGw7XG4iLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoIFwicmVhY3RcIiApO1xuY29uc3QgTmF2aWdhdGlvblBhbmUgPSByZXF1aXJlICggXCIuL05hdmlnYXRpb25QYW5lXCIgKTtcbmNvbnN0IERpcmVjdGlvbiA9IHJlcXVpcmUoIFwiLi9pbmZyYXN0cnVjdHVyZS9EaXJlY3Rpb25cIiApO1xuY29uc3QgTW9kZXMgPSByZXF1aXJlKCBcIi4vaW5mcmFzdHJ1Y3R1cmUvTW9kZXNcIiApO1xuXG5jbGFzcyBNb250aGx5TmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICl7XG4gICAgc3VwZXIoIHByb3BzICk7XG4gICAgdGhpcy5vbk5hdmlnYXRlID0gdGhpcy5vbk5hdmlnYXRlLmJpbmQoIHRoaXMgKTtcbiAgfVxuICBvbk5hdmlnYXRlKCBkaXJlY3Rpb24gKSB7XG4gICAgbGV0IGRtb250aCA9IGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkxlZnQgPyAtMSA6IDE7XG4gICAgbGV0IG5ld3RpbWVmcmFtZSA9IG5ldyBEYXRlKCArdGhpcy5wcm9wcy50aW1lZnJhbWUgKTtcbiAgICBuZXd0aW1lZnJhbWUuc2V0TW9udGgoIG5ld3RpbWVmcmFtZS5nZXRNb250aCgpICsgZG1vbnRoICk7XG4gICAgdGhpcy5wcm9wcy5zZXRUaW1lZnJhbWUoIG5ld3RpbWVmcmFtZSApO1xuICB9XG4gIGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmN1bHR1cmVQcm92aWRlci5tb250aE5hbWUoIHRoaXMucHJvcHMudGltZWZyYW1lLmdldE1vbnRoKCkgKSArIFwiIFwiICsgIHRoaXMucHJvcHMudGltZWZyYW1lLmdldEZ1bGxZZWFyKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8TmF2aWdhdGlvblBhbmUgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE1vZGUgPSB7IE1vZGVzLlllYXJseSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eyB0aGlzLmdldFRpdGxlKCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTmF2aWdhdGU9eyB0aGlzLm9uTmF2aWdhdGUgfS8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vbnRobHlOYXZpZ2F0aW9uO1xuIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCBcInJlYWN0XCIgKTtcbmNvbnN0IERheUNlbGwgPSByZXF1aXJlKCBcIi4vRGF5Q2VsbFwiICk7XG5jb25zdCBXZWVrSGVhZGVyQ2VsbCA9IHJlcXVpcmUgKCBcIi4vV2Vla0hlYWRlckNlbGxcIiApO1xuY29uc3QgREFZU19CTE9DS19DT0xVTU5TID0gNztcbmNvbnN0IERBWVNfQkxPQ0tfUk9XUyA9IDY7XG5jb25zdCBEQVlfVElNRVNQQU4gPSAyNCAqIDM2MDAgKiAxMDAwO1xuXG5jbGFzcyBNb250aGx5UGFuZUhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCB3ZWVrZGF5cyA9IFtdO1xuICAgIGZvciggbGV0IGNvbD0wOyBjb2w8REFZU19CTE9DS19DT0xVTU5TOyBjb2wrKyApe1xuICAgICAgd2Vla2RheXMucHVzaCggPHRoIGtleT17IGNvbCtcIm1oXCIgfT5cbiAgICAgICAgICAgICAgICAgICAgICA8V2Vla0hlYWRlckNlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtkYXk9eyB0aGlzLnByb3BzLmN1bHR1cmVQcm92aWRlci5kYXlOYW1lU2hvcnQoIGNvbCApIH0vPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPiApO1xuICAgIH1cbiAgICByZXR1cm4gPHRyPlxuICAgICAgICAgIHsgd2Vla2RheXMgfVxuICAgICAgICAgIDwvdHI+O1xuICB9XG59XG5cbmNsYXNzIE1vbnRobHlQYW5lQ2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8dGQ+XG4gICAgICAgICAgICAgIDxEYXlDZWxsIHsuLi50aGlzLnByb3BzfSBkYXRlPXsgdGhpcy5wcm9wcy5kYXRlIH0vPlxuICAgICAgICAgICAgPC90ZD47XG4gIH1cbn1cblxuY2xhc3MgTW9udGhseVBhbmVSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcbiAgICAgIHN1cGVyKCBwcm9wcyApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICB2YXIgY2VsbHMgPSBbXTtcbiAgICBmb3IoIGxldCBjb2w9MDsgY29sPERBWVNfQkxPQ0tfQ09MVU1OUzsgY29sKysgKXtcbiAgICAgIGNlbGxzLnB1c2goIDxNb250aGx5UGFuZUNlbGxcbiAgICAgICAgey4uLnRoaXMucHJvcHMgfVxuICAgICAgICAga2V5PXsgY29sICsgdGhpcy5wcm9wcy5yb3cgKiBEQVlTX0JMT0NLX0NPTFVNTlMgfVxuICAgICAgICAgZGF0ZT17IG5ldyBEYXRlKCArdGhpcy5wcm9wcy5zdGFydERhdGUgKyBEQVlfVElNRVNQQU4gKiBjb2wgKX0vPiApO1xuICAgIH1cbiAgICByZXR1cm4gPHRyPlxuICAgICAgICAgICAgICB7IGNlbGxzIH1cbiAgICAgICAgICAgIDwvdHI+O1xuICB9XG59XG5cbmNsYXNzIE1vbnRobHlQYW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBnZXRTdGFydERhdGUoKXtcbiAgICBsZXQgbW9udGhTdGFydCA9IG5ldyBEYXRlKCB0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGltZWZyYW1lLmdldE1vbnRoKCkgKTtcbiAgICBsZXQgc3RhcnREYXRlPW1vbnRoU3RhcnQ7XG4gICAgbGV0IHN0YXJ0ZGlmZiA9IG1vbnRoU3RhcnQuZ2V0RGF5KCkgLSB0aGlzLnByb3BzLmN1bHR1cmVQcm92aWRlci53ZWVrRGF5U3RhcnQ7XG5cbiAgICBpZiggc3RhcnRkaWZmPjAgKXtcbiAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCBtb250aFN0YXJ0IC0gREFZX1RJTUVTUEFOICogc3RhcnRkaWZmICk7XG4gICAgfVxuICAgIHJldHVybiBzdGFydERhdGU7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCByb3dzID0gW107XG4gICAgbGV0IHN0YXJ0RGF0ZSA9IHRoaXMuZ2V0U3RhcnREYXRlKCk7XG4gICAgZm9yKCBsZXQgcm93PTA7IHJvdzxEQVlTX0JMT0NLX1JPV1M7IHJvdysrICl7XG4gICAgICByb3dzLnB1c2goIDxNb250aGx5UGFuZVJvd1xuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAga2V5PXsgcm93IH1cbiAgICAgICAgICAgICAgICAgICAgcm93PXsgcm93IH1cbiAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlPXsgbmV3IERhdGUoICtzdGFydERhdGUgKyBEQVlfVElNRVNQQU4gKiByb3cgKiBEQVlTX0JMT0NLX0NPTFVNTlMgKSB9IC8+ICk7XG4gICAgfVxuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgPE1vbnRobHlQYW5lSGVhZGVyIHsuLi50aGlzLnByb3BzfS8+XG4gICAgICAgICAgICAgICAgeyByb3dzIH1cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9udGhseVBhbmU7XG4iLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoIFwicmVhY3RcIiApO1xuY29uc3QgRGlyZWN0aW9uID0gcmVxdWlyZSggXCIuL2luZnJhc3RydWN0dXJlL0RpcmVjdGlvbi5qc1wiICk7XG5jb25zdCBjbiA9IHJlcXVpcmUoIFwiY2xhc3NuYW1lc1wiICk7XG5cbmNsYXNzIE5hdkJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICl7XG4gICAgc3VwZXIoIHByb3BzICk7XG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQoIHRoaXMgKTtcbiAgfVxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMucHJvcHMub25OYXZpZ2F0ZSggdGhpcy5wcm9wcy5kaXJlY3Rpb24gKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGNuKCBcImRhdGVwaWNrZXItbmF2LWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIFwiYXJyb3ctbGVmdFwiOiB0aGlzLnByb3BzLmRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkxlZnQsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJyb3ctcmlnaHRcIjogdGhpcy5wcm9wcy5kaXJlY3Rpb24gPT09IERpcmVjdGlvbi5SaWdodFxuICAgICAgICAgICAgICAgICAgfSApIH0gb25DbGljaz17IHRoaXMub25DbGljayB9Pjwvc3Bhbj47XG4gIH1cbn1cblxuY2xhc3MgTmF2aWdhdGlvblBhbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApe1xuICAgIHN1cGVyKCBwcm9wcyApO1xuICAgIHRoaXMub25Td2l0Y2hNb2RlID0gdGhpcy5vblN3aXRjaE1vZGUuYmluZCggdGhpcyApO1xuICB9XG4gIG9uU3dpdGNoTW9kZSgpIHtcbiAgICB0aGlzLnByb3BzLnN3aXRjaE1vZGUoIHRoaXMucHJvcHMubmV4dE1vZGUgKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci1uYXYtcGFuZVwiPlxuICAgICAgICAgICAgICA8TmF2QnV0dG9uIHsuLi50aGlzLnByb3BzfSBkaXJlY3Rpb249eyBEaXJlY3Rpb24uTGVmdCB9IG9uLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci1uYXYtdGl0bGVcIiBvbkNsaWNrPXsgdGhpcy5vblN3aXRjaE1vZGUgfT57IHRoaXMucHJvcHMudGl0bGUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPE5hdkJ1dHRvbiB7Li4udGhpcy5wcm9wc30gZGlyZWN0aW9uPXsgRGlyZWN0aW9uLlJpZ2h0IH0vPlxuICAgICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25QYW5lO1xuIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCBcInJlYWN0XCIgKTtcblxuY2xhc3MgV2Vla0hlYWRlckNlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIHJlbmRlcigpe1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRhdGVwaWNrZXItd2Vla2hlYWRlci1jZWxsXCI+eyB0aGlzLnByb3BzLndlZWtkYXkudG9VcHBlckNhc2UoKSB9PC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlZWtIZWFkZXJDZWxsO1xuIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCBcInJlYWN0XCIgKTtcbmNvbnN0IE1vZGVzID0gcmVxdWlyZSggXCIuL2luZnJhc3RydWN0dXJlL01vZGVzXCIgKTtcbmNvbnN0IGNuID0gcmVxdWlyZSggXCJjbGFzc25hbWVzXCIgKTtcbmNsYXNzIFllYXJDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKXtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCggdGhpcyApO1xuICB9XG4gIG9uQ2xpY2soKSB7XG4gICAgdmFyIHRpbWVmcmFtZSA9IG5ldyBEYXRlKCArdGhpcy5wcm9wcy50aW1lZnJhbWUgKTtcbiAgICB0aW1lZnJhbWUuc2V0RnVsbFllYXIoIHRoaXMucHJvcHMueWVhciApO1xuICAgIHRoaXMucHJvcHMuZHJpbGxEb3duKCBNb2Rlcy5ZZWFybHksIHRpbWVmcmFtZSApO1xuICB9XG4gIGlzU2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMueWVhciA9PT0gdGhpcy5wcm9wcy5zZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgfVxuICByZW5kZXIgKCl7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsgY24oIFwiZGF0ZXBpY2tlci15ZWFyLWNlbGxcIiwge1xuICAgICAgICAgICAgICAgICAgXCJkYXRlcGlja2VyLXNlbGVjdGVkXCI6IHRoaXMuaXNTZWxlY3RlZCgpXG4gICAgICAgICAgICAgICAgfSApIH1cbiAgICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uQ2xpY2sgfT5cbiAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLnllYXIgfVxuICAgICAgICAgIDwvZGl2PjtcbiAgfVxufVxuXG5ZZWFyQ2VsbC5wcm9wVHlwZXMgPSB7XG4gICAgeWVhcjogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBZZWFyQ2VsbDtcbiIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSggXCJyZWFjdFwiICk7XG5jb25zdCBOYXZpZ2F0aW9uUGFuZSA9IHJlcXVpcmUgKCBcIi4vTmF2aWdhdGlvblBhbmVcIiApO1xuY29uc3QgRGlyZWN0aW9uID0gcmVxdWlyZSggXCIuL2luZnJhc3RydWN0dXJlL0RpcmVjdGlvblwiICk7XG5jb25zdCBNb2RlcyA9IHJlcXVpcmUoIFwiLi9pbmZyYXN0cnVjdHVyZS9Nb2Rlc1wiICk7XG5jbGFzcyBZZWFybHlOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKXtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLm9uTmF2aWdhdGUgPSB0aGlzLm9uTmF2aWdhdGUuYmluZCggdGhpcyApO1xuICB9XG4gIG9uTmF2aWdhdGUoIGRpcmVjdGlvbiApIHtcbiAgICBsZXQgZHllYXIgPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5MZWZ0ID8gLTEgOiAxO1xuICAgIGxldCBuZXd0aW1lZnJhbWUgPSBuZXcgRGF0ZSggK3RoaXMucHJvcHMudGltZWZyYW1lICk7XG4gICAgbmV3dGltZWZyYW1lLnNldEZ1bGxZZWFyKCBuZXd0aW1lZnJhbWUuZ2V0RnVsbFllYXIoKSArIGR5ZWFyICk7XG4gICAgdGhpcy5wcm9wcy5zZXRUaW1lZnJhbWUoIG5ld3RpbWVmcmFtZSApO1xuICB9XG4gIGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRGdWxsWWVhcigpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPE5hdmlnYXRpb25QYW5lIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE1vZGU9eyBNb2Rlcy5ZZWFycyB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eyB0aGlzLmdldFRpdGxlKCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25OYXZpZ2F0ZT17IHRoaXMub25OYXZpZ2F0ZSB9Lz47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgWWVhcmx5TmF2aWdhdGlvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IE1vbnRoQ2VsbCA9IHJlcXVpcmUoIFwiLi9Nb250aENlbGxcIiApO1xuY29uc3QgTU9OVEhfQkxPQ0tfQ09MVU1OUyA9IDM7XG5jb25zdCBNT05USF9CTE9DS19ST1dTID0gNDtcblxuY2xhc3MgWWVhcmx5UGFuZUNlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHRkPlxuICAgICAgICAgICAgICA8TW9udGhDZWxsIHsgLi4udGhpcy5wcm9wcyB9Lz5cbiAgICAgICAgICAgIDwvdGQ+O1xuICB9XG59XG5cbmNsYXNzIFllYXJseVBhbmVSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGJ1aWxkQ2VsbCgpIHtcbiAgICByZXR1cm4gPFllYXJseVBhbmVDZWxsLz47XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjZWxscyA9IFtdO1xuICAgIGZvciggbGV0IGNvbD0wOyBjb2w8TU9OVEhfQkxPQ0tfQ09MVU1OUzsgY29sKysgKXtcbiAgICAgIGNlbGxzLnB1c2goIDxZZWFybHlQYW5lQ2VsbFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgY29sK1wibVwiK3RoaXMucHJvcHMuc3RhcnRNb250aCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoPSB7IHRoaXMucHJvcHMuc3RhcnRNb250aCArIGNvbCB9Lz4gKTtcbiAgICB9XG4gICAgcmV0dXJuIDx0cj5cbiAgICAgICAgICAgICAgeyBjZWxscyB9XG4gICAgICAgICAgICA8L3RyPjtcbiAgfVxufVxuXG5jbGFzcyBZZWFybHlQYW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICByZW5kZXIoKSB7XG4gICAgbGV0IHJvd3MgPSBbXTtcbiAgICBmb3IoIGxldCByb3c9MDsgcm93PE1PTlRIX0JMT0NLX1JPV1M7IHJvdysrICl7XG4gICAgICByb3dzLnB1c2goIDxZZWFybHlQYW5lUm93XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IHJvdyArIFwibVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0TW9udGg9IHsgcm93ICogTU9OVEhfQkxPQ0tfQ09MVU1OUyB9Lz4gICk7XG4gICAgfVxuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgeyByb3dzIH1cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgWWVhcmx5UGFuZTtcbiIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSggXCJyZWFjdFwiICk7XG5jb25zdCBOYXZpZ2F0aW9uUGFuZSA9IHJlcXVpcmUgKCBcIi4vTmF2aWdhdGlvblBhbmVcIiApO1xuY29uc3QgRGlyZWN0aW9uID0gcmVxdWlyZSggXCIuL2luZnJhc3RydWN0dXJlL0RpcmVjdGlvblwiICk7XG5jb25zdCBNb2RlcyA9IHJlcXVpcmUoIFwiLi9pbmZyYXN0cnVjdHVyZS9Nb2Rlc1wiICk7XG5cbmNsYXNzIFllYXJzUmFuZ2VOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKXtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLm9uTmF2aWdhdGUgPSB0aGlzLm9uTmF2aWdhdGUuYmluZCggdGhpcyApO1xuICB9XG4gIG9uTmF2aWdhdGUoIGRpcmVjdGlvbiApIHtcbiAgICBsZXQgZHJhbmdlID0gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTGVmdCA/IC0xIDogMTtcbiAgICB2YXIgbmV3dGltZWZyYW1lID0gbmV3IERhdGUoICt0aGlzLnByb3BzLnRpbWVmcmFtZSApO1xuICAgIG5ld3RpbWVmcmFtZS5zZXRGdWxsWWVhciggbmV3dGltZWZyYW1lLmdldEZ1bGxZZWFyKCkgKyBkcmFuZ2UqMTYgKTtcbiAgICB0aGlzLnByb3BzLnNldFRpbWVmcmFtZSggbmV3dGltZWZyYW1lICk7XG4gIH1cbiAgZ2V0VGl0bGUoKSB7XG4gICAgbGV0IHN0YXJ0ID0gKCAoIHRoaXMucHJvcHMudGltZWZyYW1lLmdldEZ1bGxZZWFyKCkvMTYgKXwwICkgKiAxNjtcbiAgICByZXR1cm4gc3RhcnQgKyBcIiAtIFwiICsgKCBzdGFydCArIDE2ICk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8TmF2aWdhdGlvblBhbmUgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eyB0aGlzLmdldFRpdGxlKCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRNb2RlPXsgTW9kZXMuTW9udGhseSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25OYXZpZ2F0ZT17IHRoaXMub25OYXZpZ2F0ZSB9Lz47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgWWVhcnNSYW5nZU5hdmlnYXRpb247XG4iLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoIFwicmVhY3RcIiApO1xuY29uc3QgWWVhckNlbGwgPSByZXF1aXJlKCBcIi4vWWVhckNlbGxcIiApO1xuY29uc3QgWUVBUlNfQkxPQ0tfU0lERSA9IDQ7XG5jb25zdCBZRUFSU19CTE9DS19TSVpFID0gWUVBUlNfQkxPQ0tfU0lERSAqIFlFQVJTX0JMT0NLX1NJREU7XG5cbmNsYXNzIFllYXJzUGFuZUNlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHRkPlxuICAgICAgICAgICAgICA8WWVhckNlbGwgey4uLnRoaXMucHJvcHMgfS8+XG4gICAgICAgICAgICA8L3RkPjtcbiAgfVxufVxuXG5jbGFzcyBZZWFyc1BhbmVSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgcmVuZGVyKCkge1xuICAgICAgbGV0IGNlbGxzID0gW107XG4gICAgICBmb3IoIGxldCBjb2w9MDsgY29sPFlFQVJTX0JMT0NLX1NJREU7IGNvbCsrICl7XG4gICAgICAgIGNlbGxzLnB1c2goIDxZZWFyc1BhbmVDZWxsIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyB0aGlzLnByb3BzLmZyb21ZZWFyICsgY29sIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhcj17IHRoaXMucHJvcHMuZnJvbVllYXIgKyBjb2wgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiA8dHI+XG4gICAgICAgICAgICAgICAgeyBjZWxscyB9XG4gICAgICAgICAgICA8L3RyPjtcbiAgICB9XG59XG5cbmNsYXNzIFllYXJzUmFuZ2VQYW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCByb3dzID0gW107XG5cbiAgICBsZXQgZnJvbVllYXIgPSAoICh0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRGdWxsWWVhcigpL1lFQVJTX0JMT0NLX1NJWkUpfDAgKSAqIFlFQVJTX0JMT0NLX1NJWkU7XG4gICAgZm9yKCBsZXQgcm93PTA7IHJvdzxZRUFSU19CTE9DS19TSURFOyByb3crKyApe1xuICAgICAgcm93cy5wdXNoKCA8WWVhcnNQYW5lUm93ICBrZXk9eyByb3crXCJ5XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tWWVhcj17IGZyb21ZZWFyICsgWUVBUlNfQkxPQ0tfU0lERSAqIHJvdyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfS8+ICk7XG4gICAgfVxuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgeyByb3dzIH1cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgWWVhcnNSYW5nZVBhbmU7XG4iLCJjb25zdCB3ZWVrRGF5c05hbWVzID0gWyBcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCIgXTtcbmNvbnN0IG1vbnRoTmFtZXMgPSBbIFwiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIiBdO1xuXG5jbGFzcyBDdWx0dXJlUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvciggbG9jYWxlPVwiZW4tdXNcIiwgZm9ybWF0PVwiZGQvbW0veXl5eVwiICl7XG4gICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgdGhpcy5mb3JtYXQgPSBmb3JtYXQ7XG4gICAgdGhpcy53ZWVrRGF5U3RhcnQgPSAwO1xuICB9XG4gIGdldFdlZWtEYXlzTmFtZXMoKSB7XG4gICAgICByZXR1cm4gd2Vla0RheXNOYW1lcztcbiAgfVxuICBnZXRNb250aE5hbWVzKCkge1xuICAgICAgcmV0dXJuIG1vbnRoTmFtZXM7XG4gIH1cbiAgbW9udGhOYW1lKCBtb250aCApIHtcbiAgICAgIHJldHVybiBtb250aE5hbWVzWyBtb250aCBdO1xuICB9XG4gIG1vbnRoTmFtZVNob3J0KCBtb250aCApIHtcbiAgICAgIHJldHVybiB0aGlzLm1vbnRoTmFtZSggbW9udGggKS5zbGljZSggMCwgMyApO1xuICB9XG4gIGRheU5hbWUoIGRheSApIHtcbiAgICAgIHJldHVybiB3ZWVrRGF5c05hbWVzWyBkYXkgXTtcbiAgfVxuICBkYXlOYW1lU2hvcnQoIGRheSApIHtcbiAgICAgIHJldHVybiB0aGlzLmRheU5hbWUoIGRheSApLnNsaWNlKCAwLCAyICk7XG4gIH1cbiAgaXNIb2xpZGF5KCBkYXRlICkge1xuICAgICByZXR1cm4gZGF0ZS5nZXREYXkoKSAlIDYgPT09IDAgfHwgZGF0ZS5nZXREYXkoKSAlIDcgPT09MDtcbiAgfVxuICBzdGF0aWMgc3BsaXREYXRlKCBkYXRlICl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRheTogZGF0ZS5nZXREYXRlKCksXG4gICAgICBtb250aDogZGF0ZS5nZXRNb250aCgpLFxuICAgICAgeWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgfTtcbiAgfVxuICBsb2NhbGl6ZSgga2V5ICkge1xuICAgIHJldHVybiBrZXk7XG4gIH1cbiAgZm9ybWF0dGVkKCBkYXRlICl7IC8vZm9ybWF0ICkge1xuICAgIHZhciBzZGF0ZSA9IEN1bHR1cmVQcm92aWRlci5zcGxpdERhdGUoIGRhdGUgKTtcbiAgICAvL2Zvcm1hdCA9IGZvcm1hdCB8fCB0aGlzLmZvcm1hdDtcbiAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSBbXTtcbiAgICBmb3JtYXR0ZWRWYWx1ZS5wdXNoKCAoIFwiMFwiICsgc2RhdGUubW9udGggKS5zbGljZSggLTIgKSApO1xuICAgIGZvcm1hdHRlZFZhbHVlLnB1c2goICggXCIwXCIgKyBzZGF0ZS5kYXkgKS5zbGljZSggLTIgKSApO1xuICAgIGZvcm1hdHRlZFZhbHVlLnB1c2goICggXCIwMDAwXCIgKyBzZGF0ZS55ZWFyICkuc2xpY2UoIC00ICkgKTtcbiAgICByZXR1cm4gZm9ybWF0dGVkVmFsdWUuam9pbiggXCIvXCIgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdWx0dXJlUHJvdmlkZXI7XG4iLCJjb25zdCBEaXJlY3Rpb24gPSB7XG4gIExlZnQ6IFwibGVmdFwiLFxuICBSaWdodDogXCJyaWdodFwiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXJlY3Rpb247XG4iLCJjb25zdCBNb2RlcyA9IHtcbiAgWWVhcmx5OiBcInllYXJseVwiLFxuICBNb250aGx5OiBcIm1vbnRobHlcIixcbiAgWWVhcnM6IFwieWVhcnNyYW5nZVwiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2RlcztcbiJdfQ==
