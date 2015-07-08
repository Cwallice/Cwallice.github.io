(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var _srcDatePicker = require("../../src/DatePicker");

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
      if (e && e.target === _react2["default"].findDOMNode(this.refs.datepickerInput) && e.keyCode !== 27) {
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
      var boundaries = _react2["default"].findDOMNode(this.refs.datepickerInput).getBoundingClientRect();
      _react2["default"].render(_react2["default"].createElement(_srcDatePicker.DatePicker, { style: { position: "absolute",
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
      _react2["default"].unmountComponentAtNode(this.mountElement);
      this.mountElement.parentNode.removeChild(this.mountElement);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      _react2["default"].findDOMNode(this.refs.datepickerInput).focus();
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
      return _react2["default"].createElement(
        "div",
        { className: "datepickerInput" },
        _react2["default"].createElement("input", { placeholder: "Click or press enter",
          ref: "datepickerInput", type: "text",
          value: this.state.formattedDate,
          onKeyDown: this.onKeyDown,
          onChange: this.onChange,
          onClick: this.onClick })
      );
    }
  }]);

  return DatePickerInput;
})(_react2["default"].Component);

_react2["default"].render(_react2["default"].createElement(DatePickerInput, null), document.getElementById("datepicker"));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../src/DatePicker":26,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/interop-require-default":11}],2:[function(require,module,exports){
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

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var _infrastructureModes = require("./infrastructure/Modes");

var _infrastructureModes2 = _interopRequireDefault(_infrastructureModes);

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
      this.props.drillDown(_infrastructureModes2["default"].Monthly, newTimeframe);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "datepicker-nav-bottom" },
        _react2["default"].createElement(
          "span",
          { onClick: this.drillDown.bind(this, this.props.selectedDate) },
          this.props.cultureProvider.localize("Selected")
        ),
        _react2["default"].createElement(
          "span",
          { onClick: this.drillDown.bind(this, new Date()) },
          this.props.cultureProvider.localize("Today")
        )
      );
    }
  }]);

  return BottomNavigation;
})(_react2["default"].Component);

exports["default"] = BottomNavigation;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./infrastructure/Modes":40,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/interop-require-default":11}],26:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

var _Object$assign = require("babel-runtime/core-js/object/assign")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var _YearlyPane = require("./YearlyPane");

var _YearlyPane2 = _interopRequireDefault(_YearlyPane);

var _MonthlyPane = require("./MonthlyPane");

var _MonthlyPane2 = _interopRequireDefault(_MonthlyPane);

var _YearsRangePane = require("./YearsRangePane");

var _YearsRangePane2 = _interopRequireDefault(_YearsRangePane);

var _YearlyNavigation = require("./YearlyNavigation");

var _YearlyNavigation2 = _interopRequireDefault(_YearlyNavigation);

var _MonthlyNavigation = require("./MonthlyNavigation");

var _MonthlyNavigation2 = _interopRequireDefault(_MonthlyNavigation);

var _YearsRangeNavigation = require("./YearsRangeNavigation");

var _YearsRangeNavigation2 = _interopRequireDefault(_YearsRangeNavigation);

var _BottomNavigation = require("./BottomNavigation");

var _BottomNavigation2 = _interopRequireDefault(_BottomNavigation);

var _infrastructureCultureProvider = require("./infrastructure/CultureProvider");

var _infrastructureCultureProvider2 = _interopRequireDefault(_infrastructureCultureProvider);

var _infrastructureModes = require("./infrastructure/Modes");

var _infrastructureModes2 = _interopRequireDefault(_infrastructureModes);

var ModeViews = {};

ModeViews[_infrastructureModes2["default"].Yearly] = [_YearlyNavigation2["default"], _YearlyPane2["default"], _BottomNavigation2["default"]];
ModeViews[_infrastructureModes2["default"].Monthly] = [_MonthlyNavigation2["default"], _MonthlyPane2["default"], _BottomNavigation2["default"]];
ModeViews[_infrastructureModes2["default"].Years] = [_YearsRangeNavigation2["default"], _YearsRangePane2["default"], _BottomNavigation2["default"]];

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
        return _react2["default"].createElement(c, _Object$assign({}, _this.props, {
          key: "c" + i + _this.props.mode,
          style: {}
        }));
      });
      return _react2["default"].createElement(
        "div",
        { className: "datepicker-pane", style: this.props.style },
        components
      );
    }
  }]);

  return ContentPane;
})(_react2["default"].Component);

function trimDate(date) {
  var splitted = _infrastructureCultureProvider2["default"].splitDate(date);
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
      newstate.mode = props.mode || _infrastructureModes2["default"].Monthly;
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
      var _this2 = this;

      date = trimDate(date);
      this.setState({ timeframe: date, mode: _infrastructureModes2["default"].Monthly, selectedDate: date }, function () {
        _this2.props.onDateChange(date, _this2.props.cultureProvider.formatted(date));
      });
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
      var root = _react2["default"].findDOMNode(this);
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
      // document.addEventListener( "touchstart", this._trackOutsideClick );
      document.addEventListener("keydown", this._handleCloseKey);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("mousedown", this._trackOutsideClick);
      // document.removeEventListener( "touchstart", this._trackOutsideClick );
      document.removeEventListener("keydown", this._handleCloseKey);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.visible) {
        return null;
      }
      return _react2["default"].createElement(ContentPane, _extends({}, this.props, {
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
})(_react2["default"].Component);

DatePicker.defaultProps = {
  cultureProvider: new _infrastructureCultureProvider2["default"](),
  visible: false,
  style: {},
  onHide: function onHide() {}
};

exports.DatePicker = DatePicker;
exports.CultureProvider = _infrastructureCultureProvider2["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./BottomNavigation":25,"./MonthlyNavigation":29,"./MonthlyPane":30,"./YearlyNavigation":34,"./YearlyPane":35,"./YearsRangeNavigation":36,"./YearsRangePane":37,"./infrastructure/CultureProvider":38,"./infrastructure/Modes":40,"babel-runtime/core-js/object/assign":2,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/extends":8,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/interop-require-default":11}],27:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

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
      return _react2["default"].createElement(
        "div",
        { className: (0, _classnames2["default"])("datepicker-date-cell", {
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
})(_react2["default"].Component);

DayCell.propTypes = {
  date: _react2["default"].PropTypes.object.isRequired,
  setDate: _react2["default"].PropTypes.func.isRequired
};

exports["default"] = DayCell;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/interop-require-default":11,"classnames":24}],28:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var _infrastructureModes = require("./infrastructure/Modes");

var _infrastructureModes2 = _interopRequireDefault(_infrastructureModes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

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
      this.props.drillDown(_infrastructureModes2["default"].Monthly, timeframe);
    }
  }, {
    key: "isSelected",
    value: function isSelected() {
      return this.props.month === this.props.selectedDate.getMonth() && this.props.selectedDate.getFullYear() === this.props.timeframe.getFullYear();
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { onClick: this.onClick, className: (0, _classnames2["default"])("datepicker-month-cell", {
            "datepicker-selected": this.isSelected()
          }) },
        this.props.cultureProvider.monthNameShort(this.props.month)
      );
    }
  }]);

  return MonthCell;
})(_react2["default"].Component);

MonthCell.propTypes = {
  month: _react2["default"].PropTypes.number.isRequired,
  onSelect: _react2["default"].PropTypes.func
};

exports["default"] = MonthCell;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./infrastructure/Modes":40,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/interop-require-default":11,"classnames":24}],29:[function(require,module,exports){
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

var _NavigationPane = require("./NavigationPane");

var _NavigationPane2 = _interopRequireDefault(_NavigationPane);

var _infrastructureDirection = require("./infrastructure/Direction");

var _infrastructureDirection2 = _interopRequireDefault(_infrastructureDirection);

var _infrastructureModes = require("./infrastructure/Modes");

var _infrastructureModes2 = _interopRequireDefault(_infrastructureModes);

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
      var dmonth = direction === _infrastructureDirection2["default"].Left ? -1 : 1;
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
      return _react2["default"].createElement(_NavigationPane2["default"], _extends({}, this.props, {
        nextMode: _infrastructureModes2["default"].Yearly,
        title: this.getTitle(),
        onNavigate: this.onNavigate }));
    }
  }]);

  return MonthlyNavigation;
})(_react2["default"].Component);

exports["default"] = MonthlyNavigation;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./NavigationPane":31,"./infrastructure/Direction":39,"./infrastructure/Modes":40,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/extends":8,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/interop-require-default":11}],30:[function(require,module,exports){
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

var _DayCell = require("./DayCell");

var _DayCell2 = _interopRequireDefault(_DayCell);

var _WeekHeaderCell = require("./WeekHeaderCell");

var _WeekHeaderCell2 = _interopRequireDefault(_WeekHeaderCell);

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
        weekdays.push(_react2["default"].createElement(
          "th",
          { key: col + "mh" },
          _react2["default"].createElement(_WeekHeaderCell2["default"], {
            weekday: this.props.cultureProvider.dayNameShort(col) })
        ));
      }
      return _react2["default"].createElement(
        "tr",
        null,
        weekdays
      );
    }
  }]);

  return MonthlyPaneHeader;
})(_react2["default"].Component);

var MonthlyPaneCell = (function (_React$Component2) {
  function MonthlyPaneCell() {
    _classCallCheck(this, MonthlyPaneCell);

    _get(Object.getPrototypeOf(MonthlyPaneCell.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(MonthlyPaneCell, _React$Component2);

  _createClass(MonthlyPaneCell, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "td",
        null,
        _react2["default"].createElement(_DayCell2["default"], _extends({}, this.props, { date: this.props.date }))
      );
    }
  }]);

  return MonthlyPaneCell;
})(_react2["default"].Component);

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
        cells.push(_react2["default"].createElement(MonthlyPaneCell, _extends({}, this.props, {
          key: col + this.props.row * DAYS_BLOCK_COLUMNS,
          date: new Date(+this.props.startDate + DAY_TIMESPAN * col) })));
      }
      return _react2["default"].createElement(
        "tr",
        null,
        cells
      );
    }
  }]);

  return MonthlyPaneRow;
})(_react2["default"].Component);

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
        rows.push(_react2["default"].createElement(MonthlyPaneRow, _extends({}, this.props, {
          key: row,
          row: row,
          startDate: new Date(+startDate + DAY_TIMESPAN * row * DAYS_BLOCK_COLUMNS) })));
      }
      return _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement(
          "table",
          null,
          _react2["default"].createElement(MonthlyPaneHeader, this.props),
          rows
        )
      );
    }
  }]);

  return MonthlyPane;
})(_react2["default"].Component);

exports["default"] = MonthlyPane;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./DayCell":27,"./WeekHeaderCell":32,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/extends":8,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/interop-require-default":11}],31:[function(require,module,exports){
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

var _infrastructureDirectionJs = require("./infrastructure/Direction.js");

var _infrastructureDirectionJs2 = _interopRequireDefault(_infrastructureDirectionJs);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

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
      return _react2["default"].createElement("span", {
        className: (0, _classnames2["default"])("datepicker-nav-button", {
          "arrow-left": this.props.direction === _infrastructureDirectionJs2["default"].Left,
          "arrow-right": this.props.direction === _infrastructureDirectionJs2["default"].Right
        }), onClick: this.onClick });
    }
  }]);

  return NavButton;
})(_react2["default"].Component);

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
      return _react2["default"].createElement(
        "div",
        { className: "datepicker-nav-pane" },
        _react2["default"].createElement(NavButton, _extends({}, this.props, { direction: _infrastructureDirectionJs2["default"].Left, on: true })),
        _react2["default"].createElement(
          "span",
          { className: "datepicker-nav-title", onClick: this.onSwitchMode },
          this.props.title
        ),
        _react2["default"].createElement(NavButton, _extends({}, this.props, { direction: _infrastructureDirectionJs2["default"].Right }))
      );
    }
  }]);

  return NavigationPane;
})(_react2["default"].Component);

exports["default"] = NavigationPane;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./infrastructure/Direction.js":39,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/extends":8,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/interop-require-default":11,"classnames":24}],32:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var WeekHeaderCell = (function (_React$Component) {
  function WeekHeaderCell() {
    _classCallCheck(this, WeekHeaderCell);

    _get(Object.getPrototypeOf(WeekHeaderCell.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(WeekHeaderCell, _React$Component);

  _createClass(WeekHeaderCell, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "datepicker-weekheader-cell" },
        this.props.weekday.toUpperCase()
      );
    }
  }]);

  return WeekHeaderCell;
})(_react2["default"].Component);

exports["default"] = WeekHeaderCell;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/interop-require-default":11}],33:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var _infrastructureModes = require("./infrastructure/Modes");

var _infrastructureModes2 = _interopRequireDefault(_infrastructureModes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

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
      this.props.drillDown(_infrastructureModes2["default"].Yearly, timeframe);
    }
  }, {
    key: "isSelected",
    value: function isSelected() {
      return this.props.year === this.props.selectedDate.getFullYear();
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: (0, _classnames2["default"])("datepicker-year-cell", {
            "datepicker-selected": this.isSelected()
          }),
          onClick: this.onClick },
        this.props.year
      );
    }
  }]);

  return YearCell;
})(_react2["default"].Component);

YearCell.propTypes = {
  year: _react2["default"].PropTypes.number.isRequired
};

exports["default"] = YearCell;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./infrastructure/Modes":40,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/interop-require-default":11,"classnames":24}],34:[function(require,module,exports){
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

var _NavigationPane = require("./NavigationPane");

var _NavigationPane2 = _interopRequireDefault(_NavigationPane);

var _infrastructureDirection = require("./infrastructure/Direction");

var _infrastructureDirection2 = _interopRequireDefault(_infrastructureDirection);

var _infrastructureModes = require("./infrastructure/Modes");

var _infrastructureModes2 = _interopRequireDefault(_infrastructureModes);

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
      var dyear = direction === _infrastructureDirection2["default"].Left ? -1 : 1;
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
      return _react2["default"].createElement(_NavigationPane2["default"], _extends({}, this.props, {
        nextMode: _infrastructureModes2["default"].Years,
        title: this.getTitle(),
        onNavigate: this.onNavigate }));
    }
  }]);

  return YearlyNavigation;
})(_react2["default"].Component);

exports["default"] = YearlyNavigation;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./NavigationPane":31,"./infrastructure/Direction":39,"./infrastructure/Modes":40,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/extends":8,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/interop-require-default":11}],35:[function(require,module,exports){
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

var _MonthCell = require("./MonthCell");

var _MonthCell2 = _interopRequireDefault(_MonthCell);

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
        _react2["default"].createElement(_MonthCell2["default"], this.props)
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

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var _NavigationPane = require("./NavigationPane");

var _NavigationPane2 = _interopRequireDefault(_NavigationPane);

var _infrastructureDirection = require("./infrastructure/Direction");

var _infrastructureDirection2 = _interopRequireDefault(_infrastructureDirection);

var _infrastructureModes = require("./infrastructure/Modes");

var _infrastructureModes2 = _interopRequireDefault(_infrastructureModes);

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
      var drange = direction === _infrastructureDirection2["default"].Left ? -1 : 1;
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
      return _react2["default"].createElement(_NavigationPane2["default"], _extends({}, this.props, {
        title: this.getTitle(),
        nextMode: _infrastructureModes2["default"].Monthly,
        onNavigate: this.onNavigate }));
    }
  }]);

  return YearsRangeNavigation;
})(_react2["default"].Component);

exports["default"] = YearsRangeNavigation;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./NavigationPane":31,"./infrastructure/Direction":39,"./infrastructure/Modes":40,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/extends":8,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/interop-require-default":11}],37:[function(require,module,exports){
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

var _YearCell = require("./YearCell");

var _YearCell2 = _interopRequireDefault(_YearCell);

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
      return _react2["default"].createElement(
        "td",
        null,
        _react2["default"].createElement(_YearCell2["default"], this.props)
      );
    }
  }]);

  return YearsPaneCell;
})(_react2["default"].Component);

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
        cells.push(_react2["default"].createElement(YearsPaneCell, _extends({}, this.props, {
          key: this.props.fromYear + col,
          year: this.props.fromYear + col
        })));
      }
      return _react2["default"].createElement(
        "tr",
        null,
        cells
      );
    }
  }]);

  return YearsPaneRow;
})(_react2["default"].Component);

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
        rows.push(_react2["default"].createElement(YearsPaneRow, _extends({ key: row + "y",
          fromYear: fromYear + YEARS_BLOCK_SIDE * row
        }, this.props)));
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

  return YearsRangePane;
})(_react2["default"].Component);

exports["default"] = YearsRangePane;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./YearCell":33,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/extends":8,"babel-runtime/helpers/get":9,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/interop-require-default":11}],38:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL2V4YW1wbGUvanMvYXBwLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3MuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVmLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZW51bS1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZncuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nZXQtbmFtZXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnN0YXRpY3MtYWNjZXB0LXByaW1pdGl2ZXMuanMiLCJub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL0JvdHRvbU5hdmlnYXRpb24uanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9EYXRlUGlja2VyLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvRGF5Q2VsbC5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL01vbnRoQ2VsbC5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL01vbnRobHlOYXZpZ2F0aW9uLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvTW9udGhseVBhbmUuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9OYXZpZ2F0aW9uUGFuZS5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL1dlZWtIZWFkZXJDZWxsLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvWWVhckNlbGwuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9ZZWFybHlOYXZpZ2F0aW9uLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvWWVhcmx5UGFuZS5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL1llYXJzUmFuZ2VOYXZpZ2F0aW9uLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvWWVhcnNSYW5nZVBhbmUuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9pbmZyYXN0cnVjdHVyZS9DdWx0dXJlUHJvdmlkZXIuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9pbmZyYXN0cnVjdHVyZS9EaXJlY3Rpb24uanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9pbmZyYXN0cnVjdHVyZS9Nb2Rlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7cUJDQWtCLE9BQU87Ozs7NkJBQ0Usc0JBQXNCOztJQUUzQyxlQUFlO0FBQ1IsV0FEUCxlQUFlLENBQ04sS0FBSyxFQUFHOzBCQURqQixlQUFlOztBQUVqQiwrQkFGRSxlQUFlLDZDQUVWLEtBQUssRUFBRztBQUNmLFFBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7QUFDbkQsUUFBSSxDQUFDLEtBQUssR0FBRztBQUNYLG1CQUFhLEVBQUUsRUFBRTtBQUNqQixhQUFPLEVBQUUsS0FBSztLQUNmLENBQUM7QUFDRixRQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFDO0FBQ3pDLFFBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7QUFDN0MsUUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztBQUN2QyxRQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFDO0dBQzVDOztZQVpH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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0FBQyxDQUFDLENBQUUsQ0FBRSxDQUFDO0FBQzNELGFBQU8sY0FBYyxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUUsQ0FBQztLQUNuQzs7O1dBbEJlLG1CQUFFLElBQUksRUFBRTtBQUN0QixhQUFPO0FBQ0wsV0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDbkIsYUFBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDdEIsWUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUU7T0FDekIsQ0FBQztLQUNIOzs7U0FqQ0csZUFBZTs7O3FCQWdETixlQUFlOzs7Ozs7Ozs7QUNuRDlCLElBQU0sU0FBUyxHQUFHO0FBQ2hCLE1BQUksRUFBRSxNQUFNO0FBQ1osT0FBSyxFQUFFLE9BQU87Q0FDZixDQUFDOztxQkFFYSxTQUFTOzs7Ozs7Ozs7QUNMeEIsSUFBTSxLQUFLLEdBQUc7QUFDWixRQUFNLEVBQUUsUUFBUTtBQUNoQixTQUFPLEVBQUUsU0FBUztBQUNsQixPQUFLLEVBQUUsWUFBWTtDQUNwQixDQUFDOztxQkFFYSxLQUFLIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwiLi4vLi4vc3JjL0RhdGVQaWNrZXJcIjtcblxuY2xhc3MgRGF0ZVBpY2tlcklucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKSB7XG4gICAgc3VwZXIoIHByb3BzICk7XG4gICAgdGhpcy5vbkRhdGVDaGFuZ2UgPSB0aGlzLm9uRGF0ZUNoYW5nZS5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvcm1hdHRlZERhdGU6IFwiXCIsXG4gICAgICB2aXNpYmxlOiBmYWxzZVxuICAgIH07XG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLm9uSGlkZSA9IHRoaXMub25IaWRlLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKCB0aGlzICk7XG4gIH1cbiAgb25DbGljaygpIHtcbiAgICB0aGlzLnNldFN0YXRlKCB7IHZpc2libGU6ICF0aGlzLnN0YXRlLnZpc2libGUgfSApO1xuICB9XG4gIG9uRGF0ZUNoYW5nZSggZGF0ZSwgZm9ybWF0dGVkRGF0ZSApIHtcbiAgICB0aGlzLnNldFN0YXRlKCB7IGRhdGU6IGRhdGUsIGZvcm1hdHRlZERhdGU6IGZvcm1hdHRlZERhdGUgfSApO1xuICB9XG4gIG9uS2V5RG93biggZSApIHtcbiAgICBpZiggZS5rZXlDb2RlID09PSAxMyApe1xuICAgICAgdGhpcy5vbkNsaWNrKCk7XG4gICAgfVxuICB9XG4gIG9uQ2hhbmdlKCBlICkge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoICBlLnRhcmdldC52YWx1ZSAgKTtcbiAgICBkYXRlID0gaXNOYU4oICtkYXRlICkgPyBuZXcgRGF0ZSgpIDogZGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKCB7IGRhdGU6IGRhdGUsIGZvcm1hdHRlZERhdGU6IGUudGFyZ2V0LnZhbHVlIH0gKTtcbiAgfVxuICBvbkhpZGUoIGUgKXtcbiAgICBpZiggZSAmJiBlLnRhcmdldCA9PT0gUmVhY3QuZmluZERPTU5vZGUoIHRoaXMucmVmcy5kYXRlcGlja2VySW5wdXQgKSAmJiBlLmtleUNvZGUhPT0gMjcgKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSggeyB2aXNpYmxlOiBmYWxzZSB9ICk7XG4gIH1cbiAgZW5zdXJlTW91bnRFbGVtZW50KCkge1xuICAgIGlmKCB0aGlzLm1vdW50RWxlbWVudCApe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtb3VudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggbW91bnRFbGVtZW50ICk7XG4gICAgdGhpcy5tb3VudEVsZW1lbnQgPSBtb3VudEVsZW1lbnQ7XG4gIH1cbiAgcmVuZGVyRGF0ZVBpY2tlcigpe1xuICAgIHRoaXMuZW5zdXJlTW91bnRFbGVtZW50KCk7XG4gICAgdmFyIGJvdW5kYXJpZXMgPSBSZWFjdC5maW5kRE9NTm9kZSggdGhpcy5yZWZzLmRhdGVwaWNrZXJJbnB1dCApLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIFJlYWN0LnJlbmRlciggPERhdGVQaWNrZXIgc3R5bGU9eyB7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYm91bmRhcmllcy5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogYm91bmRhcmllcy5ib3R0b20gKyAyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGF0ZUNoYW5nZT17IHRoaXMub25EYXRlQ2hhbmdlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZSA9IHsgdGhpcy5vbkhpZGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17IHRoaXMuc3RhdGUudmlzaWJsZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERhdGU9eyB0aGlzLnN0YXRlLmRhdGUgfS8+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VudEVsZW1lbnQpO1xuICB9XG4gIGRpc3Bvc2VEYXRlUGlja2VyKCkge1xuICAgIFJlYWN0LnVubW91bnRDb21wb25lbnRBdE5vZGUoIHRoaXMubW91bnRFbGVtZW50ICk7XG4gICAgdGhpcy5tb3VudEVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggdGhpcy5tb3VudEVsZW1lbnQgKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBSZWFjdC5maW5kRE9NTm9kZSggdGhpcy5yZWZzLmRhdGVwaWNrZXJJbnB1dCApLmZvY3VzKCk7XG4gICAgdGhpcy5yZW5kZXJEYXRlUGlja2VyKCk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMucmVuZGVyRGF0ZVBpY2tlcigpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgdGhpcy5kaXNwb3NlRGF0ZVBpY2tlcigpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkYXRlcGlja2VySW5wdXRcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiQ2xpY2sgb3IgcHJlc3MgZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgcmVmPVwiZGF0ZXBpY2tlcklucHV0XCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9eyB0aGlzLnN0YXRlLmZvcm1hdHRlZERhdGUgfVxuICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbktleURvd24gfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlIH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uQ2xpY2sgfSAvPjwvZGl2PjtcbiAgfVxufVxuXG5SZWFjdC5yZW5kZXIoPERhdGVQaWNrZXJJbnB1dC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggXCJkYXRlcGlja2VyXCIgKSApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuXG4gICAgICBfT2JqZWN0JGRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KSgpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX09iamVjdCRhc3NpZ24gPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ25cIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9PYmplY3QkYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiBnZXQoX3gsIF94MiwgX3gzKSB7XG4gIHZhciBfYWdhaW4gPSB0cnVlO1xuXG4gIF9mdW5jdGlvbjogd2hpbGUgKF9hZ2Fpbikge1xuICAgIHZhciBvYmplY3QgPSBfeCxcbiAgICAgICAgcHJvcGVydHkgPSBfeDIsXG4gICAgICAgIHJlY2VpdmVyID0gX3gzO1xuICAgIGRlc2MgPSBwYXJlbnQgPSBnZXR0ZXIgPSB1bmRlZmluZWQ7XG4gICAgX2FnYWluID0gZmFsc2U7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gICAgdmFyIGRlc2MgPSBfT2JqZWN0JGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTtcblxuICAgIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcblxuICAgICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3ggPSBwYXJlbnQ7XG4gICAgICAgIF94MiA9IHByb3BlcnR5O1xuICAgICAgICBfeDMgPSByZWNlaXZlcjtcbiAgICAgICAgX2FnYWluID0gdHJ1ZTtcbiAgICAgICAgY29udGludWUgX2Z1bmN0aW9uO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHtcbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkY3JlYXRlID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gX09iamVjdCRjcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJykuY29yZS5PYmplY3QuYXNzaWduOyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKXtcbiAgcmV0dXJuICQuY3JlYXRlKFAsIEQpO1xufTsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICQuc2V0RGVzYyhpdCwga2V5LCBkZXNjKTtcbn07IiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zdGF0aWNzLWFjY2VwdC1wcmltaXRpdmVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgcmV0dXJuICQuZ2V0RGVzYyhpdCwga2V5KTtcbn07IiwidmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vJC5lbnVtLWtleXMnKTtcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXtcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgdmFyIFQgPSBPYmplY3QoJC5hc3NlcnREZWZpbmVkKHRhcmdldCkpXG4gICAgLCBsID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaSA9IDE7XG4gIHdoaWxlKGwgPiBpKXtcbiAgICB2YXIgUyAgICAgID0gJC5FUzVPYmplY3QoYXJndW1lbnRzW2krK10pXG4gICAgICAsIGtleXMgICA9IGVudW1LZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopVFtrZXkgPSBrZXlzW2orK11dID0gU1trZXldO1xuICB9XG4gIHJldHVybiBUO1xufTsiLCJ2YXIgJCAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZ2xvYmFsICAgICA9ICQuZ1xuICAsIGNvcmUgICAgICAgPSAkLmNvcmVcbiAgLCBpc0Z1bmN0aW9uID0gJC5pc0Z1bmN0aW9uO1xuZnVuY3Rpb24gY3R4KGZuLCB0aGF0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59XG4vLyB0eXBlIGJpdG1hcFxuJGRlZi5GID0gMTsgIC8vIGZvcmNlZFxuJGRlZi5HID0gMjsgIC8vIGdsb2JhbFxuJGRlZi5TID0gNDsgIC8vIHN0YXRpY1xuJGRlZi5QID0gODsgIC8vIHByb3RvXG4kZGVmLkIgPSAxNjsgLy8gYmluZFxuJGRlZi5XID0gMzI7IC8vIHdyYXBcbmZ1bmN0aW9uICRkZWYodHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cFxuICAgICwgaXNHbG9iYWwgPSB0eXBlICYgJGRlZi5HXG4gICAgLCBpc1Byb3RvICA9IHR5cGUgJiAkZGVmLlBcbiAgICAsIHRhcmdldCAgID0gaXNHbG9iYWwgPyBnbG9iYWwgOiB0eXBlICYgJGRlZi5TXG4gICAgICAgID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSkucHJvdG90eXBlXG4gICAgLCBleHBvcnRzICA9IGlzR2xvYmFsID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIGlmKGlzR2xvYmFsKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhKHR5cGUgJiAkZGVmLkYpICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0O1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgaWYoaXNHbG9iYWwgJiYgIWlzRnVuY3Rpb24odGFyZ2V0W2tleV0pKWV4cCA9IHNvdXJjZVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZWxzZSBpZih0eXBlICYgJGRlZi5CICYmIG93billeHAgPSBjdHgob3V0LCBnbG9iYWwpO1xuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgZWxzZSBpZih0eXBlICYgJGRlZi5XICYmIHRhcmdldFtrZXldID09IG91dCkhZnVuY3Rpb24oQyl7XG4gICAgICBleHAgPSBmdW5jdGlvbihwYXJhbSl7XG4gICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgQyA/IG5ldyBDKHBhcmFtKSA6IEMocGFyYW0pO1xuICAgICAgfTtcbiAgICAgIGV4cC5wcm90b3R5cGUgPSBDLnByb3RvdHlwZTtcbiAgICB9KG91dCk7XG4gICAgZWxzZSBleHAgPSBpc1Byb3RvICYmIGlzRnVuY3Rpb24ob3V0KSA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydFxuICAgIGV4cG9ydHNba2V5XSA9IGV4cDtcbiAgICBpZihpc1Byb3RvKShleHBvcnRzLnByb3RvdHlwZSB8fCAoZXhwb3J0cy5wcm90b3R5cGUgPSB7fSkpW2tleV0gPSBvdXQ7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gJGRlZjsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4vJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBrZXlzICAgICAgID0gJC5nZXRLZXlzKGl0KVxuICAgICwgZ2V0RGVzYyAgICA9ICQuZ2V0RGVzY1xuICAgICwgZ2V0U3ltYm9scyA9ICQuZ2V0U3ltYm9scztcbiAgaWYoZ2V0U3ltYm9scykkLmVhY2guY2FsbChnZXRTeW1ib2xzKGl0KSwgZnVuY3Rpb24oa2V5KXtcbiAgICBpZihnZXREZXNjKGl0LCBrZXkpLmVudW1lcmFibGUpa2V5cy5wdXNoKGtleSk7XG4gIH0pO1xuICByZXR1cm4ga2V5cztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigkKXtcbiAgJC5GVyAgID0gZmFsc2U7XG4gICQucGF0aCA9ICQuY29yZTtcbiAgcmV0dXJuICQ7XG59OyIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcclxudmFyICQgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgdG9TdHJpbmcgPSB7fS50b1N0cmluZ1xyXG4gICwgZ2V0TmFtZXMgPSAkLmdldE5hbWVzO1xyXG5cclxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xyXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xyXG5cclxuZnVuY3Rpb24gZ2V0V2luZG93TmFtZXMoaXQpe1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gZ2V0TmFtZXMoaXQpO1xyXG4gIH0gY2F0Y2goZSl7XHJcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLmdldCA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xyXG4gIGlmKHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nKXJldHVybiBnZXRXaW5kb3dOYW1lcyhpdCk7XHJcbiAgcmV0dXJuIGdldE5hbWVzKCQudG9PYmplY3QoaXQpKTtcclxufTsiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKVxuICAsIGNvcmUgICA9IHt9XG4gICwgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHlcbiAgLCBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5XG4gICwgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3JcbiAgLCBtYXggICA9IE1hdGgubWF4XG4gICwgbWluICAgPSBNYXRoLm1pbjtcbi8vIFRoZSBlbmdpbmUgd29ya3MgZmluZSB3aXRoIGRlc2NyaXB0b3JzPyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5LlxudmFyIERFU0MgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiAyOyB9fSkuYSA9PSAyO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG52YXIgaGlkZSA9IGNyZWF0ZURlZmluZXIoMSk7XG4vLyA3LjEuNCBUb0ludGVnZXJcbmZ1bmN0aW9uIHRvSW50ZWdlcihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufVxuZnVuY3Rpb24gZGVzYyhiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59XG5mdW5jdGlvbiBzaW1wbGVTZXQob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZURlZmluZXIoYml0bWFwKXtcbiAgcmV0dXJuIERFU0MgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICAgIHJldHVybiAkLnNldERlc2Mob2JqZWN0LCBrZXksIGRlc2MoYml0bWFwLCB2YWx1ZSkpO1xuICB9IDogc2ltcGxlU2V0O1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChpdCl7XG4gIHJldHVybiBpdCAhPT0gbnVsbCAmJiAodHlwZW9mIGl0ID09ICdvYmplY3QnIHx8IHR5cGVvZiBpdCA9PSAnZnVuY3Rpb24nKTtcbn1cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBhc3NlcnREZWZpbmVkKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufVxuXG52YXIgJCA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmZ3Jykoe1xuICBnOiBnbG9iYWwsXG4gIGNvcmU6IGNvcmUsXG4gIGh0bWw6IGdsb2JhbC5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2NvcmUtanMtaXNvYmplY3RcbiAgaXNPYmplY3Q6ICAgaXNPYmplY3QsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIHRoYXQ6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIC8vIDcuMS40IFRvSW50ZWdlclxuICB0b0ludGVnZXI6IHRvSW50ZWdlcixcbiAgLy8gNy4xLjE1IFRvTGVuZ3RoXG4gIHRvTGVuZ3RoOiBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbiAgfSxcbiAgdG9JbmRleDogZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gICAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICAgIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xuICB9LFxuICBoYXM6IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICAgIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xuICB9LFxuICBjcmVhdGU6ICAgICBPYmplY3QuY3JlYXRlLFxuICBnZXRQcm90bzogICBPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gIERFU0M6ICAgICAgIERFU0MsXG4gIGRlc2M6ICAgICAgIGRlc2MsXG4gIGdldERlc2M6ICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIHNldERlc2M6ICAgIGRlZmluZVByb3BlcnR5LFxuICBzZXREZXNjczogICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyxcbiAgZ2V0S2V5czogICAgT2JqZWN0LmtleXMsXG4gIGdldE5hbWVzOiAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICBnZXRTeW1ib2xzOiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICBhc3NlcnREZWZpbmVkOiBhc3NlcnREZWZpbmVkLFxuICAvLyBEdW1teSwgZml4IGZvciBub3QgYXJyYXktbGlrZSBFUzMgc3RyaW5nIGluIGVzNSBtb2R1bGVcbiAgRVM1T2JqZWN0OiBPYmplY3QsXG4gIHRvT2JqZWN0OiBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuICQuRVM1T2JqZWN0KGFzc2VydERlZmluZWQoaXQpKTtcbiAgfSxcbiAgaGlkZTogaGlkZSxcbiAgZGVmOiBjcmVhdGVEZWZpbmVyKDApLFxuICBzZXQ6IGdsb2JhbC5TeW1ib2wgPyBzaW1wbGVTZXQgOiBoaWRlLFxuICBlYWNoOiBbXS5mb3JFYWNoXG59KTtcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5pZih0eXBlb2YgX19lICE9ICd1bmRlZmluZWQnKV9fZSA9IGNvcmU7XG5pZih0eXBlb2YgX19nICE9ICd1bmRlZmluZWQnKV9fZyA9IGdsb2JhbDsiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJyk7XG4kZGVmKCRkZWYuUywgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vJC5hc3NpZ24nKX0pOyIsInZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgJGRlZiAgICAgPSByZXF1aXJlKCcuLyQuZGVmJylcbiAgLCBpc09iamVjdCA9ICQuaXNPYmplY3RcbiAgLCB0b09iamVjdCA9ICQudG9PYmplY3Q7XG4kLmVhY2guY2FsbCgoJ2ZyZWV6ZSxzZWFsLHByZXZlbnRFeHRlbnNpb25zLGlzRnJvemVuLGlzU2VhbGVkLGlzRXh0ZW5zaWJsZSwnICtcbiAgJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcixnZXRQcm90b3R5cGVPZixrZXlzLGdldE93blByb3BlcnR5TmFtZXMnKS5zcGxpdCgnLCcpXG4sIGZ1bmN0aW9uKEtFWSwgSUQpe1xuICB2YXIgZm4gICAgID0gKCQuY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGZvcmNlZCA9IDBcbiAgICAsIG1ldGhvZCA9IHt9O1xuICBtZXRob2RbS0VZXSA9IElEID09IDAgPyBmdW5jdGlvbiBmcmVlemUoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBpdDtcbiAgfSA6IElEID09IDEgPyBmdW5jdGlvbiBzZWFsKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogaXQ7XG4gIH0gOiBJRCA9PSAyID8gZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnMoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBpdDtcbiAgfSA6IElEID09IDMgPyBmdW5jdGlvbiBpc0Zyb3plbihpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IHRydWU7XG4gIH0gOiBJRCA9PSA0ID8gZnVuY3Rpb24gaXNTZWFsZWQoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiB0cnVlO1xuICB9IDogSUQgPT0gNSA/IGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZShpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IGZhbHNlO1xuICB9IDogSUQgPT0gNiA/IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgICByZXR1cm4gZm4odG9PYmplY3QoaXQpLCBrZXkpO1xuICB9IDogSUQgPT0gNyA/IGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KXtcbiAgICByZXR1cm4gZm4oT2JqZWN0KCQuYXNzZXJ0RGVmaW5lZChpdCkpKTtcbiAgfSA6IElEID09IDggPyBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gZm4odG9PYmplY3QoaXQpKTtcbiAgfSA6IHJlcXVpcmUoJy4vJC5nZXQtbmFtZXMnKS5nZXQ7XG4gIHRyeSB7XG4gICAgZm4oJ3onKTtcbiAgfSBjYXRjaChlKXtcbiAgICBmb3JjZWQgPSAxO1xuICB9XG4gICRkZWYoJGRlZi5TICsgJGRlZi5GICogZm9yY2VkLCAnT2JqZWN0JywgbWV0aG9kKTtcbn0pOyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTUgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXG5cdFx0dmFyIGNsYXNzZXMgPSAnJztcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmICgnc3RyaW5nJyA9PT0gYXJnVHlwZSB8fCAnbnVtYmVyJyA9PT0gYXJnVHlwZSkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGFyZztcblxuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cblx0XHRcdH0gZWxzZSBpZiAoJ29iamVjdCcgPT09IGFyZ1R5cGUpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChhcmcuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBrZXk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuc3Vic3RyKDEpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpe1xuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG5cbn0oKSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAgXCJyZWFjdFwiO1xuaW1wb3J0IE1vZGVzIGZyb20gIFwiLi9pbmZyYXN0cnVjdHVyZS9Nb2Rlc1wiO1xuXG5jbGFzcyBCb3R0b21OYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBkcmlsbERvd24oIHRpbWVmcmFtZSApIHtcbiAgICBsZXQgbmV3VGltZWZyYW1lID0gbmV3IERhdGUoICt0aW1lZnJhbWUgKTtcbiAgICB0aGlzLnByb3BzLmRyaWxsRG93biggTW9kZXMuTW9udGhseSwgbmV3VGltZWZyYW1lICk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkYXRlcGlja2VyLW5hdi1ib3R0b21cIj5cbiAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17IHRoaXMuZHJpbGxEb3duLmJpbmQoIHRoaXMsIHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlICkgfT5cbiAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuY3VsdHVyZVByb3ZpZGVyLmxvY2FsaXplKCBcIlNlbGVjdGVkXCIgKSB9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17IHRoaXMuZHJpbGxEb3duLmJpbmQoIHRoaXMsIG5ldyBEYXRlKCkgKSB9PlxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jdWx0dXJlUHJvdmlkZXIubG9jYWxpemUoIFwiVG9kYXlcIiApIH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb3R0b21OYXZpZ2F0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFllYXJseVBhbmUgZnJvbSAgXCIuL1llYXJseVBhbmVcIjtcbmltcG9ydCBNb250aGx5UGFuZSBmcm9tIFwiLi9Nb250aGx5UGFuZVwiO1xuaW1wb3J0IFllYXJzUmFuZ2VQYW5lIGZyb20gXCIuL1llYXJzUmFuZ2VQYW5lXCIgO1xuaW1wb3J0IFllYXJseU5hdmlnYXRpb24gZnJvbSBcIi4vWWVhcmx5TmF2aWdhdGlvblwiO1xuaW1wb3J0IE1vbnRobHlOYXZpZ2F0aW9uIGZyb20gXCIuL01vbnRobHlOYXZpZ2F0aW9uXCI7XG5pbXBvcnQgWWVhcnNSYW5nZU5hdmlnYXRpb24gZnJvbSBcIi4vWWVhcnNSYW5nZU5hdmlnYXRpb25cIjtcbmltcG9ydCBCb3R0b21OYXZpZ2F0aW9uIGZyb20gXCIuL0JvdHRvbU5hdmlnYXRpb25cIjtcbmltcG9ydCBDdWx0dXJlUHJvdmlkZXIgZnJvbSBcIi4vaW5mcmFzdHJ1Y3R1cmUvQ3VsdHVyZVByb3ZpZGVyXCI7XG5pbXBvcnQgTW9kZXMgZnJvbSBcIi4vaW5mcmFzdHJ1Y3R1cmUvTW9kZXNcIjtcblxuY29uc3QgTW9kZVZpZXdzID0ge307XG5cbk1vZGVWaWV3c1sgTW9kZXMuWWVhcmx5IF0gPSBbIFllYXJseU5hdmlnYXRpb24sIFllYXJseVBhbmUsIEJvdHRvbU5hdmlnYXRpb24gXTtcbk1vZGVWaWV3c1sgTW9kZXMuTW9udGhseSBdID0gWyBNb250aGx5TmF2aWdhdGlvbiwgTW9udGhseVBhbmUsIEJvdHRvbU5hdmlnYXRpb24gXTtcbk1vZGVWaWV3c1sgTW9kZXMuWWVhcnMgXSA9IFsgWWVhcnNSYW5nZU5hdmlnYXRpb24sIFllYXJzUmFuZ2VQYW5lLCBCb3R0b21OYXZpZ2F0aW9uIF07XG5cblxuXG5jbGFzcyBDb250ZW50UGFuZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCBjb21wb25lbnRzID0gdGhpcy5wcm9wcy5jYXNlc1sgdGhpcy5wcm9wcy5tb2RlIF0ubWFwKFxuICAgICAgICAgIChjLCBpKSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KCBjLCBPYmplY3QuYXNzaWduKCB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY1wiICsgaSArIHRoaXMucHJvcHMubW9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICkgKVxuICAgICk7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci1wYW5lXCIgc3R5bGU9eyB0aGlzLnByb3BzLnN0eWxlIH0+XG4gICAgICAgICAgICAgIHsgY29tcG9uZW50cyB9XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyaW1EYXRlKCBkYXRlICl7XG4gIHZhciBzcGxpdHRlZCA9IEN1bHR1cmVQcm92aWRlci5zcGxpdERhdGUoIGRhdGUgKTtcbiAgcmV0dXJuIG5ldyBEYXRlKCBzcGxpdHRlZC55ZWFyLCBzcGxpdHRlZC5tb250aCwgc3BsaXR0ZWQuZGF5ICk7XG59XG5cblxuY2xhc3MgRGF0ZVBpY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICkge1xuICAgIHN1cGVyKCBwcm9wcyApO1xuICAgIHRoaXMuc3dpdGNoTW9kZSA9IHRoaXMuc3dpdGNoTW9kZS5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5zZXRUaW1lZnJhbWUgPSB0aGlzLnNldFRpbWVmcmFtZS5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5zZXREYXRlID0gdGhpcy5zZXREYXRlLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLmRyaWxsRG93biA9IHRoaXMuZHJpbGxEb3duLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLl90cmFja091dHNpZGVDbGljayA9IHRoaXMuX3RyYWNrT3V0c2lkZUNsaWNrLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLl9oYW5kbGVDbG9zZUtleSA9IHRoaXMuX2hhbmRsZUNsb3NlS2V5LmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5pbml0U3RhdGUoIHRoaXMucHJvcHMsIHt9ICk7XG4gIH1cbiAgaW5pdFN0YXRlKCBwcm9wcywgc3RhdGUgKXtcbiAgICB2YXIgbmV3c3RhdGUgPSB7fTtcbiAgICBuZXdzdGF0ZS5tb2RlID0gcHJvcHMubW9kZSB8fCBNb2Rlcy5Nb250aGx5O1xuICAgIGlmKCBwcm9wcy5zZWxlY3RlZERhdGUgIT09IHN0YXRlLnNlbGVjdGVkRGF0ZSB8fCBzdGF0ZS5zZWxlY3RlZERhdGUgPT09IHVuZGVmaW5lZCApe1xuICAgICAgbmV3c3RhdGUuc2VsZWN0ZWREYXRlID0gdHJpbURhdGUoIHByb3BzLnNlbGVjdGVkRGF0ZSB8fCBuZXcgRGF0ZSgpICk7XG4gICAgICBuZXdzdGF0ZS50aW1lZnJhbWUgPSBzdGF0ZS5zZWxlY3RlZERhdGU7XG4gICAgfVxuICAgIHJldHVybiBuZXdzdGF0ZTtcbiAgfVxuICBzZXRUaW1lZnJhbWUoIG5ld0RhdGUgKSB7XG4gICAgbmV3RGF0ZSA9IHRyaW1EYXRlKCBuZXdEYXRlICk7XG4gICAgdGhpcy5zZXRTdGF0ZSggeyB0aW1lZnJhbWU6IG5ld0RhdGUgfSApO1xuICB9XG4gIHN3aXRjaE1vZGUoIG1vZGUgKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSggeyBtb2RlOiBtb2RlIH0gKTtcbiAgfVxuICBzZXREYXRlKCBkYXRlICl7XG4gICAgZGF0ZSA9IHRyaW1EYXRlKCBkYXRlICk7XG4gICAgdGhpcy5zZXRTdGF0ZSggeyB0aW1lZnJhbWU6IGRhdGUgLCBtb2RlOiBNb2Rlcy5Nb250aGx5LCBzZWxlY3RlZERhdGU6IGRhdGUgfSxcbiAgICAgICgpPT4geyB0aGlzLnByb3BzLm9uRGF0ZUNoYW5nZSggZGF0ZSwgdGhpcy5wcm9wcy5jdWx0dXJlUHJvdmlkZXIuZm9ybWF0dGVkKCBkYXRlICkgKTsgfVxuICAgICk7XG4gIH1cbiAgZHJpbGxEb3duKCBtb2RlLCB0aW1lZnJhbWUgKXtcbiAgICB0aGlzLnNldFN0YXRlKCB7IG1vZGU6IG1vZGUsIHRpbWVmcmFtZTogdHJpbURhdGUoIHRpbWVmcmFtZSApIH0gKTtcbiAgfVxuICAvKnByaXZhdGUgc2VjdGlvbnMqL1xuICBfdHJhY2tPdXRzaWRlQ2xpY2soIGUgKSB7XG4gICAgaWYgKCAhdGhpcy5wcm9wcy52aXNpYmxlICl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBsZXQgcm9vdCA9IFJlYWN0LmZpbmRET01Ob2RlKCB0aGlzICk7XG4gICAgd2hpbGUoIHRhcmdldCApe1xuICAgICAgaWYoIHRhcmdldCA9PT0gcm9vdCApe1xuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uSGlkZSggZSApO1xuICB9XG4gIF9oYW5kbGVDbG9zZUtleSggZSApe1xuICAgIGlmICggZS5rZXlDb2RlPT09MjcgKXtcbiAgICAgIHRoaXMucHJvcHMub25IaWRlKCBlICk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoIG5ld1Byb3BzICl7XG4gICAgdGhpcy5zZXRTdGF0ZSggdGhpcy5pbml0U3RhdGUoIG5ld1Byb3BzLCB0aGlzLnN0YXRlICkgKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwibW91c2Vkb3duXCIsIHRoaXMuX3RyYWNrT3V0c2lkZUNsaWNrICk7XG4gICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuX3RyYWNrT3V0c2lkZUNsaWNrICk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUNsb3NlS2V5ICk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJtb3VzZWRvd25cIiwgdGhpcy5fdHJhY2tPdXRzaWRlQ2xpY2sgKTtcbiAgICAvLyBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCBcInRvdWNoc3RhcnRcIiwgdGhpcy5fdHJhY2tPdXRzaWRlQ2xpY2sgKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCBcImtleWRvd25cIiwgdGhpcy5faGFuZGxlQ2xvc2VLZXkgKTtcblxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBpZiggIXRoaXMucHJvcHMudmlzaWJsZSApe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiA8Q29udGVudFBhbmUgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgIG1vZGU9eyB0aGlzLnN0YXRlLm1vZGUgfVxuICAgICAgICAgICAgICB0aW1lZnJhbWUgPSB7IHRoaXMuc3RhdGUudGltZWZyYW1lIH1cbiAgICAgICAgICAgICAgc2VsZWN0ZWREYXRlPXsgdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGUgfVxuICAgICAgICAgICAgICBjYXNlcz17IE1vZGVWaWV3cyB9XG4gICAgICAgICAgICAgIHNldFRpbWVmcmFtZT17IHRoaXMuc2V0VGltZWZyYW1lIH1cbiAgICAgICAgICAgICAgc2V0RGF0ZT17IHRoaXMuc2V0RGF0ZSB9XG4gICAgICAgICAgICAgIGRyaWxsRG93bj17IHRoaXMuZHJpbGxEb3duIH1cbiAgICAgICAgICAgICAgc3dpdGNoTW9kZSA9eyB0aGlzLnN3aXRjaE1vZGUgfS8+O1xuICB9XG59XG5cbkRhdGVQaWNrZXIuZGVmYXVsdFByb3BzID0ge1xuICBjdWx0dXJlUHJvdmlkZXI6IG5ldyBDdWx0dXJlUHJvdmlkZXIoKSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIHN0eWxlOiB7fSxcbiAgb25IaWRlOiBmdW5jdGlvbigpe31cbn07XG5cbmV4cG9ydCB7IERhdGVQaWNrZXIsIEN1bHR1cmVQcm92aWRlciB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XG5sZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xudG9kYXkgPSBuZXcgRGF0ZSggdG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpICk7XG5cbmNsYXNzIERheUNlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCggdGhpcyApO1xuICB9XG4gIGlzU2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuICt0aGlzLnByb3BzLmRhdGUgPT09ICt0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZTtcbiAgfVxuICBpc1RvZGF5KCkge1xuICAgIHJldHVybiAgK3RoaXMucHJvcHMuZGF0ZSA9PT0gK3RvZGF5O1xuICB9XG4gIG9mZlRpbWVmcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRlLmdldE1vbnRoKCkgIT09IHRoaXMucHJvcHMudGltZWZyYW1lLmdldE1vbnRoKCk7XG4gIH1cbiAgb25DbGljaygpe1xuICAgIHRoaXMucHJvcHMuc2V0RGF0ZSggdGhpcy5wcm9wcy5kYXRlICk7XG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsgY24oIFwiZGF0ZXBpY2tlci1kYXRlLWNlbGxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlcGlja2VyLXRvZGF5XCI6ICF0aGlzLmlzU2VsZWN0ZWQoKSAmJiB0aGlzLmlzVG9kYXkoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZXBpY2tlci1zZWxlY3RlZFwiOiB0aGlzLmlzU2VsZWN0ZWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZXBpY2tlci13ZWVrZW5kXCI6IHRoaXMucHJvcHMuY3VsdHVyZVByb3ZpZGVyLmlzSG9saWRheSggdGhpcy5wcm9wcy5kYXRlICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVwaWNrZXItdGltZWZyYW1lLW9mZlwiOiB0aGlzLm9mZlRpbWVmcmFtZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApIH0gb25DbGljaz17IHRoaXMub25DbGljayB9PlxuICAgICAgICAgICAgeyB0aGlzLnByb3BzLmRhdGUuZ2V0RGF0ZSgpIH1cbiAgICAgICAgICA8L2Rpdj47XG4gIH1cbn1cblxuRGF5Q2VsbC5wcm9wVHlwZXMgPSB7XG4gIGRhdGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgc2V0RGF0ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF5Q2VsbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNb2RlcyBmcm9tIFwiLi9pbmZyYXN0cnVjdHVyZS9Nb2Rlc1wiO1xuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmNsYXNzIE1vbnRoQ2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICl7XG4gICAgc3VwZXIoIHByb3BzICk7XG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQoIHRoaXMgKTtcbiAgfVxuICBvbkNsaWNrKCkge1xuICAgIHZhciB0aW1lZnJhbWUgPSBuZXcgRGF0ZSggK3RoaXMucHJvcHMudGltZWZyYW1lICk7XG4gICAgdGltZWZyYW1lLnNldE1vbnRoKCB0aGlzLnByb3BzLm1vbnRoICk7XG4gICAgdGhpcy5wcm9wcy5kcmlsbERvd24oIE1vZGVzLk1vbnRobHksIHRpbWVmcmFtZSApO1xuICB9XG4gIGlzU2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMubW9udGggPT09IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlLmdldE1vbnRoKCkgJiZcbiAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKSA9PT0gdGhpcy5wcm9wcy50aW1lZnJhbWUuZ2V0RnVsbFllYXIoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgb25DbGljaz17IHRoaXMub25DbGljayB9IGNsYXNzTmFtZT17IGNuKCBcImRhdGVwaWNrZXItbW9udGgtY2VsbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZXBpY2tlci1zZWxlY3RlZFwiOiB0aGlzLmlzU2VsZWN0ZWQoKVxuICAgICAgICAgICAgICAgIH0gKSB9PlxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jdWx0dXJlUHJvdmlkZXIubW9udGhOYW1lU2hvcnQoIHRoaXMucHJvcHMubW9udGggKSB9XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbk1vbnRoQ2VsbC5wcm9wVHlwZXMgPSB7XG4gIG1vbnRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9uU2VsZWN0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9udGhDZWxsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdmlnYXRpb25QYW5lIGZyb20gXCIuL05hdmlnYXRpb25QYW5lXCI7XG5pbXBvcnQgRGlyZWN0aW9uIGZyb20gXCIuL2luZnJhc3RydWN0dXJlL0RpcmVjdGlvblwiO1xuaW1wb3J0IE1vZGVzIGZyb20gXCIuL2luZnJhc3RydWN0dXJlL01vZGVzXCI7XG5cbmNsYXNzIE1vbnRobHlOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKXtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLm9uTmF2aWdhdGUgPSB0aGlzLm9uTmF2aWdhdGUuYmluZCggdGhpcyApO1xuICB9XG4gIG9uTmF2aWdhdGUoIGRpcmVjdGlvbiApIHtcbiAgICBsZXQgZG1vbnRoID0gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTGVmdCA/IC0xIDogMTtcbiAgICBsZXQgbmV3dGltZWZyYW1lID0gbmV3IERhdGUoICt0aGlzLnByb3BzLnRpbWVmcmFtZSApO1xuICAgIG5ld3RpbWVmcmFtZS5zZXRNb250aCggbmV3dGltZWZyYW1lLmdldE1vbnRoKCkgKyBkbW9udGggKTtcbiAgICB0aGlzLnByb3BzLnNldFRpbWVmcmFtZSggbmV3dGltZWZyYW1lICk7XG4gIH1cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY3VsdHVyZVByb3ZpZGVyLm1vbnRoTmFtZSggdGhpcy5wcm9wcy50aW1lZnJhbWUuZ2V0TW9udGgoKSApICsgXCIgXCIgKyAgdGhpcy5wcm9wcy50aW1lZnJhbWUuZ2V0RnVsbFllYXIoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxOYXZpZ2F0aW9uUGFuZSB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0TW9kZSA9IHsgTW9kZXMuWWVhcmx5IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17IHRoaXMuZ2V0VGl0bGUoKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25OYXZpZ2F0ZT17IHRoaXMub25OYXZpZ2F0ZSB9Lz47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9udGhseU5hdmlnYXRpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGF5Q2VsbCBmcm9tIFwiLi9EYXlDZWxsXCI7XG5pbXBvcnQgV2Vla0hlYWRlckNlbGwgZnJvbSBcIi4vV2Vla0hlYWRlckNlbGxcIjtcbmNvbnN0IERBWVNfQkxPQ0tfQ09MVU1OUyA9IDc7XG5jb25zdCBEQVlTX0JMT0NLX1JPV1MgPSA2O1xuY29uc3QgREFZX1RJTUVTUEFOID0gMjQgKiAzNjAwICogMTAwMDtcblxuY2xhc3MgTW9udGhseVBhbmVIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgd2Vla2RheXMgPSBbXTtcbiAgICBmb3IoIGxldCBjb2w9MDsgY29sPERBWVNfQkxPQ0tfQ09MVU1OUzsgY29sKysgKXtcbiAgICAgIHdlZWtkYXlzLnB1c2goIDx0aCBrZXk9eyBjb2wrXCJtaFwiIH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFdlZWtIZWFkZXJDZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrZGF5PXsgdGhpcy5wcm9wcy5jdWx0dXJlUHJvdmlkZXIuZGF5TmFtZVNob3J0KCBjb2wgKSB9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC90aD4gKTtcbiAgICB9XG4gICAgcmV0dXJuIDx0cj5cbiAgICAgICAgICB7IHdlZWtkYXlzIH1cbiAgICAgICAgICA8L3RyPjtcbiAgfVxufVxuXG5jbGFzcyBNb250aGx5UGFuZUNlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHRkPlxuICAgICAgICAgICAgICA8RGF5Q2VsbCB7Li4udGhpcy5wcm9wc30gZGF0ZT17IHRoaXMucHJvcHMuZGF0ZSB9Lz5cbiAgICAgICAgICAgIDwvdGQ+O1xuICB9XG59XG5cbmNsYXNzIE1vbnRobHlQYW5lUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKSB7XG4gICAgICBzdXBlciggcHJvcHMgKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgdmFyIGNlbGxzID0gW107XG4gICAgZm9yKCBsZXQgY29sPTA7IGNvbDxEQVlTX0JMT0NLX0NPTFVNTlM7IGNvbCsrICl7XG4gICAgICBjZWxscy5wdXNoKCA8TW9udGhseVBhbmVDZWxsXG4gICAgICAgIHsuLi50aGlzLnByb3BzIH1cbiAgICAgICAgIGtleT17IGNvbCArIHRoaXMucHJvcHMucm93ICogREFZU19CTE9DS19DT0xVTU5TIH1cbiAgICAgICAgIGRhdGU9eyBuZXcgRGF0ZSggK3RoaXMucHJvcHMuc3RhcnREYXRlICsgREFZX1RJTUVTUEFOICogY29sICl9Lz4gKTtcbiAgICB9XG4gICAgcmV0dXJuIDx0cj5cbiAgICAgICAgICAgICAgeyBjZWxscyB9XG4gICAgICAgICAgICA8L3RyPjtcbiAgfVxufVxuXG5jbGFzcyBNb250aGx5UGFuZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgZ2V0U3RhcnREYXRlKCl7XG4gICAgbGV0IG1vbnRoU3RhcnQgPSBuZXcgRGF0ZSggdGhpcy5wcm9wcy50aW1lZnJhbWUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRNb250aCgpICk7XG4gICAgbGV0IHN0YXJ0RGF0ZT1tb250aFN0YXJ0O1xuICAgIGxldCBzdGFydGRpZmYgPSBtb250aFN0YXJ0LmdldERheSgpIC0gdGhpcy5wcm9wcy5jdWx0dXJlUHJvdmlkZXIud2Vla0RheVN0YXJ0O1xuXG4gICAgaWYoIHN0YXJ0ZGlmZj4wICl7XG4gICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSggbW9udGhTdGFydCAtIERBWV9USU1FU1BBTiAqIHN0YXJ0ZGlmZiApO1xuICAgIH1cbiAgICByZXR1cm4gc3RhcnREYXRlO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcm93cyA9IFtdO1xuICAgIGxldCBzdGFydERhdGUgPSB0aGlzLmdldFN0YXJ0RGF0ZSgpO1xuICAgIGZvciggbGV0IHJvdz0wOyByb3c8REFZU19CTE9DS19ST1dTOyByb3crKyApe1xuICAgICAgcm93cy5wdXNoKCA8TW9udGhseVBhbmVSb3dcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIGtleT17IHJvdyB9XG4gICAgICAgICAgICAgICAgICAgIHJvdz17IHJvdyB9XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZT17IG5ldyBEYXRlKCArc3RhcnREYXRlICsgREFZX1RJTUVTUEFOICogcm93ICogREFZU19CTE9DS19DT0xVTU5TICkgfSAvPiApO1xuICAgIH1cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIDxNb250aGx5UGFuZUhlYWRlciB7Li4udGhpcy5wcm9wc30vPlxuICAgICAgICAgICAgICAgIHsgcm93cyB9XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vbnRobHlQYW5lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERpcmVjdGlvbiBmcm9tXCIuL2luZnJhc3RydWN0dXJlL0RpcmVjdGlvbi5qc1wiO1xuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmNsYXNzIE5hdkJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICl7XG4gICAgc3VwZXIoIHByb3BzICk7XG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQoIHRoaXMgKTtcbiAgfVxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMucHJvcHMub25OYXZpZ2F0ZSggdGhpcy5wcm9wcy5kaXJlY3Rpb24gKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGNuKCBcImRhdGVwaWNrZXItbmF2LWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIFwiYXJyb3ctbGVmdFwiOiB0aGlzLnByb3BzLmRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkxlZnQsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJyb3ctcmlnaHRcIjogdGhpcy5wcm9wcy5kaXJlY3Rpb24gPT09IERpcmVjdGlvbi5SaWdodFxuICAgICAgICAgICAgICAgICAgfSApIH0gb25DbGljaz17IHRoaXMub25DbGljayB9Pjwvc3Bhbj47XG4gIH1cbn1cblxuY2xhc3MgTmF2aWdhdGlvblBhbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApe1xuICAgIHN1cGVyKCBwcm9wcyApO1xuICAgIHRoaXMub25Td2l0Y2hNb2RlID0gdGhpcy5vblN3aXRjaE1vZGUuYmluZCggdGhpcyApO1xuICB9XG4gIG9uU3dpdGNoTW9kZSgpIHtcbiAgICB0aGlzLnByb3BzLnN3aXRjaE1vZGUoIHRoaXMucHJvcHMubmV4dE1vZGUgKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci1uYXYtcGFuZVwiPlxuICAgICAgICAgICAgICA8TmF2QnV0dG9uIHsuLi50aGlzLnByb3BzfSBkaXJlY3Rpb249eyBEaXJlY3Rpb24uTGVmdCB9IG9uLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci1uYXYtdGl0bGVcIiBvbkNsaWNrPXsgdGhpcy5vblN3aXRjaE1vZGUgfT57IHRoaXMucHJvcHMudGl0bGUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPE5hdkJ1dHRvbiB7Li4udGhpcy5wcm9wc30gZGlyZWN0aW9uPXsgRGlyZWN0aW9uLlJpZ2h0IH0vPlxuICAgICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25QYW5lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBXZWVrSGVhZGVyQ2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci13ZWVraGVhZGVyLWNlbGxcIj57IHRoaXMucHJvcHMud2Vla2RheS50b1VwcGVyQ2FzZSgpIH08L2Rpdj47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2Vla0hlYWRlckNlbGw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW9kZXMgZnJvbSBcIi4vaW5mcmFzdHJ1Y3R1cmUvTW9kZXNcIjtcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuY2xhc3MgWWVhckNlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApe1xuICAgIHN1cGVyKCBwcm9wcyApO1xuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKCB0aGlzICk7XG4gIH1cbiAgb25DbGljaygpIHtcbiAgICB2YXIgdGltZWZyYW1lID0gbmV3IERhdGUoICt0aGlzLnByb3BzLnRpbWVmcmFtZSApO1xuICAgIHRpbWVmcmFtZS5zZXRGdWxsWWVhciggdGhpcy5wcm9wcy55ZWFyICk7XG4gICAgdGhpcy5wcm9wcy5kcmlsbERvd24oIE1vZGVzLlllYXJseSwgdGltZWZyYW1lICk7XG4gIH1cbiAgaXNTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy55ZWFyID09PSB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpO1xuICB9XG4gIHJlbmRlciAoKXtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9eyBjbiggXCJkYXRlcGlja2VyLXllYXItY2VsbFwiLCB7XG4gICAgICAgICAgICAgICAgICBcImRhdGVwaWNrZXItc2VsZWN0ZWRcIjogdGhpcy5pc1NlbGVjdGVkKClcbiAgICAgICAgICAgICAgICB9ICkgfVxuICAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMub25DbGljayB9PlxuICAgICAgICAgICAgICB7IHRoaXMucHJvcHMueWVhciB9XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cblllYXJDZWxsLnByb3BUeXBlcyA9IHtcbiAgICB5ZWFyOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFllYXJDZWxsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdmlnYXRpb25QYW5lIGZyb20gXCIuL05hdmlnYXRpb25QYW5lXCI7XG5pbXBvcnQgRGlyZWN0aW9uIGZyb20gXCIuL2luZnJhc3RydWN0dXJlL0RpcmVjdGlvblwiO1xuaW1wb3J0IE1vZGVzIGZyb20gXCIuL2luZnJhc3RydWN0dXJlL01vZGVzXCI7XG5jbGFzcyBZZWFybHlOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKXtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLm9uTmF2aWdhdGUgPSB0aGlzLm9uTmF2aWdhdGUuYmluZCggdGhpcyApO1xuICB9XG4gIG9uTmF2aWdhdGUoIGRpcmVjdGlvbiApIHtcbiAgICBsZXQgZHllYXIgPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5MZWZ0ID8gLTEgOiAxO1xuICAgIGxldCBuZXd0aW1lZnJhbWUgPSBuZXcgRGF0ZSggK3RoaXMucHJvcHMudGltZWZyYW1lICk7XG4gICAgbmV3dGltZWZyYW1lLnNldEZ1bGxZZWFyKCBuZXd0aW1lZnJhbWUuZ2V0RnVsbFllYXIoKSArIGR5ZWFyICk7XG4gICAgdGhpcy5wcm9wcy5zZXRUaW1lZnJhbWUoIG5ld3RpbWVmcmFtZSApO1xuICB9XG4gIGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRGdWxsWWVhcigpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPE5hdmlnYXRpb25QYW5lIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE1vZGU9eyBNb2Rlcy5ZZWFycyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17IHRoaXMuZ2V0VGl0bGUoKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbk5hdmlnYXRlPXsgdGhpcy5vbk5hdmlnYXRlIH0vPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBZZWFybHlOYXZpZ2F0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1vbnRoQ2VsbCBmcm9tIFwiLi9Nb250aENlbGxcIjtcbmNvbnN0IE1PTlRIX0JMT0NLX0NPTFVNTlMgPSAzO1xuY29uc3QgTU9OVEhfQkxPQ0tfUk9XUyA9IDQ7XG5cbmNsYXNzIFllYXJseVBhbmVDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDx0ZD5cbiAgICAgICAgICAgICAgPE1vbnRoQ2VsbCB7IC4uLnRoaXMucHJvcHMgfS8+XG4gICAgICAgICAgICA8L3RkPjtcbiAgfVxufVxuXG5jbGFzcyBZZWFybHlQYW5lUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBidWlsZENlbGwoKSB7XG4gICAgcmV0dXJuIDxZZWFybHlQYW5lQ2VsbC8+O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY2VsbHMgPSBbXTtcbiAgICBmb3IoIGxldCBjb2w9MDsgY29sPE1PTlRIX0JMT0NLX0NPTFVNTlM7IGNvbCsrICl7XG4gICAgICBjZWxscy5wdXNoKCA8WWVhcmx5UGFuZUNlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGNvbCtcIm1cIit0aGlzLnByb3BzLnN0YXJ0TW9udGggfVxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aD0geyB0aGlzLnByb3BzLnN0YXJ0TW9udGggKyBjb2wgfS8+ICk7XG4gICAgfVxuICAgIHJldHVybiA8dHI+XG4gICAgICAgICAgICAgIHsgY2VsbHMgfVxuICAgICAgICAgICAgPC90cj47XG4gIH1cbn1cblxuY2xhc3MgWWVhcmx5UGFuZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCByb3dzID0gW107XG4gICAgZm9yKCBsZXQgcm93PTA7IHJvdzxNT05USF9CTE9DS19ST1dTOyByb3crKyApe1xuICAgICAgcm93cy5wdXNoKCA8WWVhcmx5UGFuZVJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyByb3cgKyBcIm1cIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydE1vbnRoPSB7IHJvdyAqIE1PTlRIX0JMT0NLX0NPTFVNTlMgfS8+ICApO1xuICAgIH1cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIHsgcm93cyB9XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFllYXJseVBhbmU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2aWdhdGlvblBhbmUgZnJvbSBcIi4vTmF2aWdhdGlvblBhbmVcIjtcbmltcG9ydCBEaXJlY3Rpb24gZnJvbSBcIi4vaW5mcmFzdHJ1Y3R1cmUvRGlyZWN0aW9uXCI7XG5pbXBvcnQgTW9kZXMgZnJvbSBcIi4vaW5mcmFzdHJ1Y3R1cmUvTW9kZXNcIjtcblxuY2xhc3MgWWVhcnNSYW5nZU5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApe1xuICAgIHN1cGVyKCBwcm9wcyApO1xuICAgIHRoaXMub25OYXZpZ2F0ZSA9IHRoaXMub25OYXZpZ2F0ZS5iaW5kKCB0aGlzICk7XG4gIH1cbiAgb25OYXZpZ2F0ZSggZGlyZWN0aW9uICkge1xuICAgIGxldCBkcmFuZ2UgPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5MZWZ0ID8gLTEgOiAxO1xuICAgIHZhciBuZXd0aW1lZnJhbWUgPSBuZXcgRGF0ZSggK3RoaXMucHJvcHMudGltZWZyYW1lICk7XG4gICAgbmV3dGltZWZyYW1lLnNldEZ1bGxZZWFyKCBuZXd0aW1lZnJhbWUuZ2V0RnVsbFllYXIoKSArIGRyYW5nZSoxNiApO1xuICAgIHRoaXMucHJvcHMuc2V0VGltZWZyYW1lKCBuZXd0aW1lZnJhbWUgKTtcbiAgfVxuICBnZXRUaXRsZSgpIHtcbiAgICBsZXQgc3RhcnQgPSAoICggdGhpcy5wcm9wcy50aW1lZnJhbWUuZ2V0RnVsbFllYXIoKS8xNiApfDAgKSAqIDE2O1xuICAgIHJldHVybiBzdGFydCArIFwiIC0gXCIgKyAoIHN0YXJ0ICsgMTYgKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxOYXZpZ2F0aW9uUGFuZSB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17IHRoaXMuZ2V0VGl0bGUoKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE1vZGU9eyBNb2Rlcy5Nb250aGx5IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk5hdmlnYXRlPXsgdGhpcy5vbk5hdmlnYXRlIH0vPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBZZWFyc1JhbmdlTmF2aWdhdGlvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBZZWFyQ2VsbCBmcm9tIFwiLi9ZZWFyQ2VsbFwiO1xuY29uc3QgWUVBUlNfQkxPQ0tfU0lERSA9IDQ7XG5jb25zdCBZRUFSU19CTE9DS19TSVpFID0gWUVBUlNfQkxPQ0tfU0lERSAqIFlFQVJTX0JMT0NLX1NJREU7XG5cbmNsYXNzIFllYXJzUGFuZUNlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHRkPlxuICAgICAgICAgICAgICA8WWVhckNlbGwgey4uLnRoaXMucHJvcHMgfS8+XG4gICAgICAgICAgICA8L3RkPjtcbiAgfVxufVxuXG5jbGFzcyBZZWFyc1BhbmVSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgcmVuZGVyKCkge1xuICAgICAgbGV0IGNlbGxzID0gW107XG4gICAgICBmb3IoIGxldCBjb2w9MDsgY29sPFlFQVJTX0JMT0NLX1NJREU7IGNvbCsrICl7XG4gICAgICAgIGNlbGxzLnB1c2goIDxZZWFyc1BhbmVDZWxsIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyB0aGlzLnByb3BzLmZyb21ZZWFyICsgY29sIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhcj17IHRoaXMucHJvcHMuZnJvbVllYXIgKyBjb2wgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiA8dHI+XG4gICAgICAgICAgICAgICAgeyBjZWxscyB9XG4gICAgICAgICAgICA8L3RyPjtcbiAgICB9XG59XG5cbmNsYXNzIFllYXJzUmFuZ2VQYW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCByb3dzID0gW107XG5cbiAgICBsZXQgZnJvbVllYXIgPSAoICh0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRGdWxsWWVhcigpL1lFQVJTX0JMT0NLX1NJWkUpfDAgKSAqIFlFQVJTX0JMT0NLX1NJWkU7XG4gICAgZm9yKCBsZXQgcm93PTA7IHJvdzxZRUFSU19CTE9DS19TSURFOyByb3crKyApe1xuICAgICAgcm93cy5wdXNoKCA8WWVhcnNQYW5lUm93ICBrZXk9eyByb3crXCJ5XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tWWVhcj17IGZyb21ZZWFyICsgWUVBUlNfQkxPQ0tfU0lERSAqIHJvdyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfS8+ICk7XG4gICAgfVxuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgeyByb3dzIH1cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgWWVhcnNSYW5nZVBhbmU7XG4iLCJjb25zdCB3ZWVrRGF5c05hbWVzID0gWyBcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCIgXTtcbmNvbnN0IG1vbnRoTmFtZXMgPSBbIFwiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIiBdO1xuXG5jbGFzcyBDdWx0dXJlUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvciggbG9jYWxlPVwiZW4tdXNcIiwgZm9ybWF0PVwiZGQvbW0veXl5eVwiICl7XG4gICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgdGhpcy5mb3JtYXQgPSBmb3JtYXQ7XG4gICAgdGhpcy53ZWVrRGF5U3RhcnQgPSAwO1xuICB9XG4gIGdldFdlZWtEYXlzTmFtZXMoKSB7XG4gICAgICByZXR1cm4gd2Vla0RheXNOYW1lcztcbiAgfVxuICBnZXRNb250aE5hbWVzKCkge1xuICAgICAgcmV0dXJuIG1vbnRoTmFtZXM7XG4gIH1cbiAgbW9udGhOYW1lKCBtb250aCApIHtcbiAgICAgIHJldHVybiBtb250aE5hbWVzWyBtb250aCBdO1xuICB9XG4gIG1vbnRoTmFtZVNob3J0KCBtb250aCApIHtcbiAgICAgIHJldHVybiB0aGlzLm1vbnRoTmFtZSggbW9udGggKS5zbGljZSggMCwgMyApO1xuICB9XG4gIGRheU5hbWUoIGRheSApIHtcbiAgICAgIHJldHVybiB3ZWVrRGF5c05hbWVzWyBkYXkgXTtcbiAgfVxuICBkYXlOYW1lU2hvcnQoIGRheSApIHtcbiAgICAgIHJldHVybiB0aGlzLmRheU5hbWUoIGRheSApLnNsaWNlKCAwLCAyICk7XG4gIH1cbiAgaXNIb2xpZGF5KCBkYXRlICkge1xuICAgICByZXR1cm4gZGF0ZS5nZXREYXkoKSAlIDYgPT09IDAgfHwgZGF0ZS5nZXREYXkoKSAlIDcgPT09MDtcbiAgfVxuICBzdGF0aWMgc3BsaXREYXRlKCBkYXRlICl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRheTogZGF0ZS5nZXREYXRlKCksXG4gICAgICBtb250aDogZGF0ZS5nZXRNb250aCgpLFxuICAgICAgeWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgfTtcbiAgfVxuICBsb2NhbGl6ZSgga2V5ICkge1xuICAgIHJldHVybiBrZXk7XG4gIH1cbiAgZm9ybWF0dGVkKCBkYXRlICl7IC8vZm9ybWF0ICkge1xuICAgIHZhciBzZGF0ZSA9IEN1bHR1cmVQcm92aWRlci5zcGxpdERhdGUoIGRhdGUgKTtcbiAgICAvL2Zvcm1hdCA9IGZvcm1hdCB8fCB0aGlzLmZvcm1hdDtcbiAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSBbXTtcbiAgICBmb3JtYXR0ZWRWYWx1ZS5wdXNoKCAoIFwiMFwiICsgc2RhdGUubW9udGggKS5zbGljZSggLTIgKSApO1xuICAgIGZvcm1hdHRlZFZhbHVlLnB1c2goICggXCIwXCIgKyBzZGF0ZS5kYXkgKS5zbGljZSggLTIgKSApO1xuICAgIGZvcm1hdHRlZFZhbHVlLnB1c2goICggXCIwMDAwXCIgKyBzZGF0ZS55ZWFyICkuc2xpY2UoIC00ICkgKTtcbiAgICByZXR1cm4gZm9ybWF0dGVkVmFsdWUuam9pbiggXCIvXCIgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdWx0dXJlUHJvdmlkZXI7XG4iLCJjb25zdCBEaXJlY3Rpb24gPSB7XG4gIExlZnQ6IFwibGVmdFwiLFxuICBSaWdodDogXCJyaWdodFwiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXJlY3Rpb247XG4iLCJjb25zdCBNb2RlcyA9IHtcbiAgWWVhcmx5OiBcInllYXJseVwiLFxuICBNb250aGx5OiBcIm1vbnRobHlcIixcbiAgWWVhcnM6IFwieWVhcnNyYW5nZVwiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2RlcztcbiJdfQ==
