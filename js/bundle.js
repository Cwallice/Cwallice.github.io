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
      var translate = "translateY(" + boundaries.bottom + "px)" + " translateX(" + boundaries.left + "px)";
      _react2["default"].render(_react2["default"].createElement(_srcDatePicker.DatePicker, { style: {
          transform: translate,
          position: "absolute",
          top: 0,
          left: 0
        },
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL2V4YW1wbGUvanMvYXBwLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3MuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVmLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZW51bS1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZncuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nZXQtbmFtZXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnN0YXRpY3MtYWNjZXB0LXByaW1pdGl2ZXMuanMiLCJub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL0JvdHRvbU5hdmlnYXRpb24uanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9EYXRlUGlja2VyLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvRGF5Q2VsbC5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL01vbnRoQ2VsbC5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL01vbnRobHlOYXZpZ2F0aW9uLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvTW9udGhseVBhbmUuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9OYXZpZ2F0aW9uUGFuZS5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL1dlZWtIZWFkZXJDZWxsLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvWWVhckNlbGwuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9ZZWFybHlOYXZpZ2F0aW9uLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvWWVhcmx5UGFuZS5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL1llYXJzUmFuZ2VOYXZpZ2F0aW9uLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvWWVhcnNSYW5nZVBhbmUuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9pbmZyYXN0cnVjdHVyZS9DdWx0dXJlUHJvdmlkZXIuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9pbmZyYXN0cnVjdHVyZS9EaXJlY3Rpb24uanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9pbmZyYXN0cnVjdHVyZS9Nb2Rlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7cUJDQWtCLE9BQU87Ozs7NkJBQ0Usc0JBQXNCOztJQUUzQyxlQUFlO0FBQ1IsV0FEUCxlQUFlLENBQ04sS0FBSyxFQUFHOzBCQURqQixlQUFlOztBQUVqQiwrQkFGRSxlQUFlLDZDQUVWLEtBQUssRUFBRztBQUNmLFFBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7QUFDbkQsUUFBSSxDQUFDLEtBQUssR0FBRztBQUNYLG1CQUFhLEVBQUUsRUFBRTtBQUNqQixhQUFPLEVBQUUsS0FBSztLQUNmLENBQUM7QUFDRixRQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFDO0FBQ3pDLFFBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7QUFDN0MsUUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztBQUN2QyxRQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFDO0dBQzVDOztZQVpH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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0FBRSxDQUFFLENBQUM7QUFDdkQsb0JBQWMsQ0FBQyxJQUFJLENBQUUsQ0FBRSxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQSxDQUFHLEtBQUssQ0FBRSxDQUFDLENBQUMsQ0FBRSxDQUFFLENBQUM7QUFDM0QsYUFBTyxjQUFjLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBRSxDQUFDO0tBQ25DOzs7V0FsQmUsbUJBQUUsSUFBSSxFQUFFO0FBQ3RCLGFBQU87QUFDTCxXQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUNuQixhQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUN0QixZQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRTtPQUN6QixDQUFDO0tBQ0g7OztTQWpDRyxlQUFlOzs7cUJBZ0ROLGVBQWU7Ozs7Ozs7OztBQ25EOUIsSUFBTSxTQUFTLEdBQUc7QUFDaEIsTUFBSSxFQUFFLE1BQU07QUFDWixPQUFLLEVBQUUsT0FBTztDQUNmLENBQUM7O3FCQUVhLFNBQVM7Ozs7Ozs7OztBQ0x4QixJQUFNLEtBQUssR0FBRztBQUNaLFFBQU0sRUFBRSxRQUFRO0FBQ2hCLFNBQU8sRUFBRSxTQUFTO0FBQ2xCLE9BQUssRUFBRSxZQUFZO0NBQ3BCLENBQUM7O3FCQUVhLEtBQUsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCIuLi8uLi9zcmMvRGF0ZVBpY2tlclwiO1xuXG5jbGFzcyBEYXRlUGlja2VySW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLm9uRGF0ZUNoYW5nZSA9IHRoaXMub25EYXRlQ2hhbmdlLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm9ybWF0dGVkRGF0ZTogXCJcIixcbiAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCggdGhpcyApO1xuICAgIHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCggdGhpcyApO1xuICAgIHRoaXMub25IaWRlID0gdGhpcy5vbkhpZGUuYmluZCggdGhpcyApO1xuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQoIHRoaXMgKTtcbiAgfVxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoIHsgdmlzaWJsZTogIXRoaXMuc3RhdGUudmlzaWJsZSB9ICk7XG4gIH1cbiAgb25EYXRlQ2hhbmdlKCBkYXRlLCBmb3JtYXR0ZWREYXRlICkge1xuICAgIHRoaXMuc2V0U3RhdGUoIHsgZGF0ZTogZGF0ZSwgZm9ybWF0dGVkRGF0ZTogZm9ybWF0dGVkRGF0ZSB9ICk7XG4gIH1cbiAgb25LZXlEb3duKCBlICkge1xuICAgIGlmKCBlLmtleUNvZGUgPT09IDEzICl7XG4gICAgICB0aGlzLm9uQ2xpY2soKTtcbiAgICB9XG4gIH1cbiAgb25DaGFuZ2UoIGUgKSB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSggIGUudGFyZ2V0LnZhbHVlICApO1xuICAgIGRhdGUgPSBpc05hTiggK2RhdGUgKSA/IG5ldyBEYXRlKCkgOiBkYXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoIHsgZGF0ZTogZGF0ZSwgZm9ybWF0dGVkRGF0ZTogZS50YXJnZXQudmFsdWUgfSApO1xuICB9XG4gIG9uSGlkZSggZSApe1xuICAgIGlmKCBlICYmIGUudGFyZ2V0ID09PSBSZWFjdC5maW5kRE9NTm9kZSggdGhpcy5yZWZzLmRhdGVwaWNrZXJJbnB1dCApICYmIGUua2V5Q29kZSE9PSAyNyApe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKCB7IHZpc2libGU6IGZhbHNlIH0gKTtcbiAgfVxuICBlbnN1cmVNb3VudEVsZW1lbnQoKSB7XG4gICAgaWYoIHRoaXMubW91bnRFbGVtZW50ICl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG1vdW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBtb3VudEVsZW1lbnQgKTtcbiAgICB0aGlzLm1vdW50RWxlbWVudCA9IG1vdW50RWxlbWVudDtcbiAgfVxuICByZW5kZXJEYXRlUGlja2VyKCl7XG4gICAgdGhpcy5lbnN1cmVNb3VudEVsZW1lbnQoKTtcbiAgICBsZXQgYm91bmRhcmllcyA9IFJlYWN0LmZpbmRET01Ob2RlKCB0aGlzLnJlZnMuZGF0ZXBpY2tlcklucHV0ICkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IHRyYW5zbGF0ZSA9IFwidHJhbnNsYXRlWShcIiArIGJvdW5kYXJpZXMuYm90dG9tICsgXCJweClcIiArIFwiIHRyYW5zbGF0ZVgoXCIrYm91bmRhcmllcy5sZWZ0ICtcInB4KVwiO1xuICAgIFJlYWN0LnJlbmRlciggPERhdGVQaWNrZXIgc3R5bGU9eyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGF0ZUNoYW5nZT17IHRoaXMub25EYXRlQ2hhbmdlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZSA9IHsgdGhpcy5vbkhpZGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17IHRoaXMuc3RhdGUudmlzaWJsZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERhdGU9eyB0aGlzLnN0YXRlLmRhdGUgfS8+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VudEVsZW1lbnQpO1xuICB9XG4gIGRpc3Bvc2VEYXRlUGlja2VyKCkge1xuICAgIFJlYWN0LnVubW91bnRDb21wb25lbnRBdE5vZGUoIHRoaXMubW91bnRFbGVtZW50ICk7XG4gICAgdGhpcy5tb3VudEVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggdGhpcy5tb3VudEVsZW1lbnQgKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBSZWFjdC5maW5kRE9NTm9kZSggdGhpcy5yZWZzLmRhdGVwaWNrZXJJbnB1dCApLmZvY3VzKCk7XG4gICAgdGhpcy5yZW5kZXJEYXRlUGlja2VyKCk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMucmVuZGVyRGF0ZVBpY2tlcigpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgdGhpcy5kaXNwb3NlRGF0ZVBpY2tlcigpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkYXRlcGlja2VySW5wdXRcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiQ2xpY2sgb3IgcHJlc3MgZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgcmVmPVwiZGF0ZXBpY2tlcklucHV0XCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9eyB0aGlzLnN0YXRlLmZvcm1hdHRlZERhdGUgfVxuICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbktleURvd24gfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlIH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uQ2xpY2sgfSAvPjwvZGl2PjtcbiAgfVxufVxuXG5SZWFjdC5yZW5kZXIoPERhdGVQaWNrZXJJbnB1dC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggXCJkYXRlcGlja2VyXCIgKSApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuXG4gICAgICBfT2JqZWN0JGRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KSgpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX09iamVjdCRhc3NpZ24gPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ25cIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9PYmplY3QkYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiBnZXQoX3gsIF94MiwgX3gzKSB7XG4gIHZhciBfYWdhaW4gPSB0cnVlO1xuXG4gIF9mdW5jdGlvbjogd2hpbGUgKF9hZ2Fpbikge1xuICAgIHZhciBvYmplY3QgPSBfeCxcbiAgICAgICAgcHJvcGVydHkgPSBfeDIsXG4gICAgICAgIHJlY2VpdmVyID0gX3gzO1xuICAgIGRlc2MgPSBwYXJlbnQgPSBnZXR0ZXIgPSB1bmRlZmluZWQ7XG4gICAgX2FnYWluID0gZmFsc2U7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gICAgdmFyIGRlc2MgPSBfT2JqZWN0JGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTtcblxuICAgIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcblxuICAgICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3ggPSBwYXJlbnQ7XG4gICAgICAgIF94MiA9IHByb3BlcnR5O1xuICAgICAgICBfeDMgPSByZWNlaXZlcjtcbiAgICAgICAgX2FnYWluID0gdHJ1ZTtcbiAgICAgICAgY29udGludWUgX2Z1bmN0aW9uO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHtcbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkY3JlYXRlID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gX09iamVjdCRjcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJykuY29yZS5PYmplY3QuYXNzaWduOyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKXtcbiAgcmV0dXJuICQuY3JlYXRlKFAsIEQpO1xufTsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICQuc2V0RGVzYyhpdCwga2V5LCBkZXNjKTtcbn07IiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zdGF0aWNzLWFjY2VwdC1wcmltaXRpdmVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgcmV0dXJuICQuZ2V0RGVzYyhpdCwga2V5KTtcbn07IiwidmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vJC5lbnVtLWtleXMnKTtcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXtcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgdmFyIFQgPSBPYmplY3QoJC5hc3NlcnREZWZpbmVkKHRhcmdldCkpXG4gICAgLCBsID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaSA9IDE7XG4gIHdoaWxlKGwgPiBpKXtcbiAgICB2YXIgUyAgICAgID0gJC5FUzVPYmplY3QoYXJndW1lbnRzW2krK10pXG4gICAgICAsIGtleXMgICA9IGVudW1LZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopVFtrZXkgPSBrZXlzW2orK11dID0gU1trZXldO1xuICB9XG4gIHJldHVybiBUO1xufTsiLCJ2YXIgJCAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZ2xvYmFsICAgICA9ICQuZ1xuICAsIGNvcmUgICAgICAgPSAkLmNvcmVcbiAgLCBpc0Z1bmN0aW9uID0gJC5pc0Z1bmN0aW9uO1xuZnVuY3Rpb24gY3R4KGZuLCB0aGF0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59XG4vLyB0eXBlIGJpdG1hcFxuJGRlZi5GID0gMTsgIC8vIGZvcmNlZFxuJGRlZi5HID0gMjsgIC8vIGdsb2JhbFxuJGRlZi5TID0gNDsgIC8vIHN0YXRpY1xuJGRlZi5QID0gODsgIC8vIHByb3RvXG4kZGVmLkIgPSAxNjsgLy8gYmluZFxuJGRlZi5XID0gMzI7IC8vIHdyYXBcbmZ1bmN0aW9uICRkZWYodHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cFxuICAgICwgaXNHbG9iYWwgPSB0eXBlICYgJGRlZi5HXG4gICAgLCBpc1Byb3RvICA9IHR5cGUgJiAkZGVmLlBcbiAgICAsIHRhcmdldCAgID0gaXNHbG9iYWwgPyBnbG9iYWwgOiB0eXBlICYgJGRlZi5TXG4gICAgICAgID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSkucHJvdG90eXBlXG4gICAgLCBleHBvcnRzICA9IGlzR2xvYmFsID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIGlmKGlzR2xvYmFsKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhKHR5cGUgJiAkZGVmLkYpICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0O1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgaWYoaXNHbG9iYWwgJiYgIWlzRnVuY3Rpb24odGFyZ2V0W2tleV0pKWV4cCA9IHNvdXJjZVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZWxzZSBpZih0eXBlICYgJGRlZi5CICYmIG93billeHAgPSBjdHgob3V0LCBnbG9iYWwpO1xuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgZWxzZSBpZih0eXBlICYgJGRlZi5XICYmIHRhcmdldFtrZXldID09IG91dCkhZnVuY3Rpb24oQyl7XG4gICAgICBleHAgPSBmdW5jdGlvbihwYXJhbSl7XG4gICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgQyA/IG5ldyBDKHBhcmFtKSA6IEMocGFyYW0pO1xuICAgICAgfTtcbiAgICAgIGV4cC5wcm90b3R5cGUgPSBDLnByb3RvdHlwZTtcbiAgICB9KG91dCk7XG4gICAgZWxzZSBleHAgPSBpc1Byb3RvICYmIGlzRnVuY3Rpb24ob3V0KSA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydFxuICAgIGV4cG9ydHNba2V5XSA9IGV4cDtcbiAgICBpZihpc1Byb3RvKShleHBvcnRzLnByb3RvdHlwZSB8fCAoZXhwb3J0cy5wcm90b3R5cGUgPSB7fSkpW2tleV0gPSBvdXQ7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gJGRlZjsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4vJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBrZXlzICAgICAgID0gJC5nZXRLZXlzKGl0KVxuICAgICwgZ2V0RGVzYyAgICA9ICQuZ2V0RGVzY1xuICAgICwgZ2V0U3ltYm9scyA9ICQuZ2V0U3ltYm9scztcbiAgaWYoZ2V0U3ltYm9scykkLmVhY2guY2FsbChnZXRTeW1ib2xzKGl0KSwgZnVuY3Rpb24oa2V5KXtcbiAgICBpZihnZXREZXNjKGl0LCBrZXkpLmVudW1lcmFibGUpa2V5cy5wdXNoKGtleSk7XG4gIH0pO1xuICByZXR1cm4ga2V5cztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigkKXtcbiAgJC5GVyAgID0gZmFsc2U7XG4gICQucGF0aCA9ICQuY29yZTtcbiAgcmV0dXJuICQ7XG59OyIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcclxudmFyICQgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgdG9TdHJpbmcgPSB7fS50b1N0cmluZ1xyXG4gICwgZ2V0TmFtZXMgPSAkLmdldE5hbWVzO1xyXG5cclxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xyXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xyXG5cclxuZnVuY3Rpb24gZ2V0V2luZG93TmFtZXMoaXQpe1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gZ2V0TmFtZXMoaXQpO1xyXG4gIH0gY2F0Y2goZSl7XHJcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLmdldCA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xyXG4gIGlmKHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nKXJldHVybiBnZXRXaW5kb3dOYW1lcyhpdCk7XHJcbiAgcmV0dXJuIGdldE5hbWVzKCQudG9PYmplY3QoaXQpKTtcclxufTsiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKVxuICAsIGNvcmUgICA9IHt9XG4gICwgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHlcbiAgLCBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5XG4gICwgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3JcbiAgLCBtYXggICA9IE1hdGgubWF4XG4gICwgbWluICAgPSBNYXRoLm1pbjtcbi8vIFRoZSBlbmdpbmUgd29ya3MgZmluZSB3aXRoIGRlc2NyaXB0b3JzPyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5LlxudmFyIERFU0MgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiAyOyB9fSkuYSA9PSAyO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG52YXIgaGlkZSA9IGNyZWF0ZURlZmluZXIoMSk7XG4vLyA3LjEuNCBUb0ludGVnZXJcbmZ1bmN0aW9uIHRvSW50ZWdlcihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufVxuZnVuY3Rpb24gZGVzYyhiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59XG5mdW5jdGlvbiBzaW1wbGVTZXQob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZURlZmluZXIoYml0bWFwKXtcbiAgcmV0dXJuIERFU0MgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICAgIHJldHVybiAkLnNldERlc2Mob2JqZWN0LCBrZXksIGRlc2MoYml0bWFwLCB2YWx1ZSkpO1xuICB9IDogc2ltcGxlU2V0O1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChpdCl7XG4gIHJldHVybiBpdCAhPT0gbnVsbCAmJiAodHlwZW9mIGl0ID09ICdvYmplY3QnIHx8IHR5cGVvZiBpdCA9PSAnZnVuY3Rpb24nKTtcbn1cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBhc3NlcnREZWZpbmVkKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufVxuXG52YXIgJCA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmZ3Jykoe1xuICBnOiBnbG9iYWwsXG4gIGNvcmU6IGNvcmUsXG4gIGh0bWw6IGdsb2JhbC5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2NvcmUtanMtaXNvYmplY3RcbiAgaXNPYmplY3Q6ICAgaXNPYmplY3QsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIHRoYXQ6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIC8vIDcuMS40IFRvSW50ZWdlclxuICB0b0ludGVnZXI6IHRvSW50ZWdlcixcbiAgLy8gNy4xLjE1IFRvTGVuZ3RoXG4gIHRvTGVuZ3RoOiBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbiAgfSxcbiAgdG9JbmRleDogZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gICAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICAgIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xuICB9LFxuICBoYXM6IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICAgIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xuICB9LFxuICBjcmVhdGU6ICAgICBPYmplY3QuY3JlYXRlLFxuICBnZXRQcm90bzogICBPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gIERFU0M6ICAgICAgIERFU0MsXG4gIGRlc2M6ICAgICAgIGRlc2MsXG4gIGdldERlc2M6ICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIHNldERlc2M6ICAgIGRlZmluZVByb3BlcnR5LFxuICBzZXREZXNjczogICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyxcbiAgZ2V0S2V5czogICAgT2JqZWN0LmtleXMsXG4gIGdldE5hbWVzOiAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICBnZXRTeW1ib2xzOiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICBhc3NlcnREZWZpbmVkOiBhc3NlcnREZWZpbmVkLFxuICAvLyBEdW1teSwgZml4IGZvciBub3QgYXJyYXktbGlrZSBFUzMgc3RyaW5nIGluIGVzNSBtb2R1bGVcbiAgRVM1T2JqZWN0OiBPYmplY3QsXG4gIHRvT2JqZWN0OiBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuICQuRVM1T2JqZWN0KGFzc2VydERlZmluZWQoaXQpKTtcbiAgfSxcbiAgaGlkZTogaGlkZSxcbiAgZGVmOiBjcmVhdGVEZWZpbmVyKDApLFxuICBzZXQ6IGdsb2JhbC5TeW1ib2wgPyBzaW1wbGVTZXQgOiBoaWRlLFxuICBlYWNoOiBbXS5mb3JFYWNoXG59KTtcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5pZih0eXBlb2YgX19lICE9ICd1bmRlZmluZWQnKV9fZSA9IGNvcmU7XG5pZih0eXBlb2YgX19nICE9ICd1bmRlZmluZWQnKV9fZyA9IGdsb2JhbDsiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJyk7XG4kZGVmKCRkZWYuUywgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vJC5hc3NpZ24nKX0pOyIsInZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgJGRlZiAgICAgPSByZXF1aXJlKCcuLyQuZGVmJylcbiAgLCBpc09iamVjdCA9ICQuaXNPYmplY3RcbiAgLCB0b09iamVjdCA9ICQudG9PYmplY3Q7XG4kLmVhY2guY2FsbCgoJ2ZyZWV6ZSxzZWFsLHByZXZlbnRFeHRlbnNpb25zLGlzRnJvemVuLGlzU2VhbGVkLGlzRXh0ZW5zaWJsZSwnICtcbiAgJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcixnZXRQcm90b3R5cGVPZixrZXlzLGdldE93blByb3BlcnR5TmFtZXMnKS5zcGxpdCgnLCcpXG4sIGZ1bmN0aW9uKEtFWSwgSUQpe1xuICB2YXIgZm4gICAgID0gKCQuY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGZvcmNlZCA9IDBcbiAgICAsIG1ldGhvZCA9IHt9O1xuICBtZXRob2RbS0VZXSA9IElEID09IDAgPyBmdW5jdGlvbiBmcmVlemUoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBpdDtcbiAgfSA6IElEID09IDEgPyBmdW5jdGlvbiBzZWFsKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogaXQ7XG4gIH0gOiBJRCA9PSAyID8gZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnMoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBpdDtcbiAgfSA6IElEID09IDMgPyBmdW5jdGlvbiBpc0Zyb3plbihpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IHRydWU7XG4gIH0gOiBJRCA9PSA0ID8gZnVuY3Rpb24gaXNTZWFsZWQoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiB0cnVlO1xuICB9IDogSUQgPT0gNSA/IGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZShpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IGZhbHNlO1xuICB9IDogSUQgPT0gNiA/IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgICByZXR1cm4gZm4odG9PYmplY3QoaXQpLCBrZXkpO1xuICB9IDogSUQgPT0gNyA/IGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KXtcbiAgICByZXR1cm4gZm4oT2JqZWN0KCQuYXNzZXJ0RGVmaW5lZChpdCkpKTtcbiAgfSA6IElEID09IDggPyBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gZm4odG9PYmplY3QoaXQpKTtcbiAgfSA6IHJlcXVpcmUoJy4vJC5nZXQtbmFtZXMnKS5nZXQ7XG4gIHRyeSB7XG4gICAgZm4oJ3onKTtcbiAgfSBjYXRjaChlKXtcbiAgICBmb3JjZWQgPSAxO1xuICB9XG4gICRkZWYoJGRlZi5TICsgJGRlZi5GICogZm9yY2VkLCAnT2JqZWN0JywgbWV0aG9kKTtcbn0pOyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTUgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXG5cdFx0dmFyIGNsYXNzZXMgPSAnJztcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmICgnc3RyaW5nJyA9PT0gYXJnVHlwZSB8fCAnbnVtYmVyJyA9PT0gYXJnVHlwZSkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGFyZztcblxuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cblx0XHRcdH0gZWxzZSBpZiAoJ29iamVjdCcgPT09IGFyZ1R5cGUpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChhcmcuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBrZXk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuc3Vic3RyKDEpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpe1xuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG5cbn0oKSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAgXCJyZWFjdFwiO1xuaW1wb3J0IE1vZGVzIGZyb20gIFwiLi9pbmZyYXN0cnVjdHVyZS9Nb2Rlc1wiO1xuXG5jbGFzcyBCb3R0b21OYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBkcmlsbERvd24oIHRpbWVmcmFtZSApIHtcbiAgICBsZXQgbmV3VGltZWZyYW1lID0gbmV3IERhdGUoICt0aW1lZnJhbWUgKTtcbiAgICB0aGlzLnByb3BzLmRyaWxsRG93biggTW9kZXMuTW9udGhseSwgbmV3VGltZWZyYW1lICk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkYXRlcGlja2VyLW5hdi1ib3R0b21cIj5cbiAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17IHRoaXMuZHJpbGxEb3duLmJpbmQoIHRoaXMsIHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlICkgfT5cbiAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuY3VsdHVyZVByb3ZpZGVyLmxvY2FsaXplKCBcIlNlbGVjdGVkXCIgKSB9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17IHRoaXMuZHJpbGxEb3duLmJpbmQoIHRoaXMsIG5ldyBEYXRlKCkgKSB9PlxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jdWx0dXJlUHJvdmlkZXIubG9jYWxpemUoIFwiVG9kYXlcIiApIH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb3R0b21OYXZpZ2F0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFllYXJseVBhbmUgZnJvbSAgXCIuL1llYXJseVBhbmVcIjtcbmltcG9ydCBNb250aGx5UGFuZSBmcm9tIFwiLi9Nb250aGx5UGFuZVwiO1xuaW1wb3J0IFllYXJzUmFuZ2VQYW5lIGZyb20gXCIuL1llYXJzUmFuZ2VQYW5lXCIgO1xuaW1wb3J0IFllYXJseU5hdmlnYXRpb24gZnJvbSBcIi4vWWVhcmx5TmF2aWdhdGlvblwiO1xuaW1wb3J0IE1vbnRobHlOYXZpZ2F0aW9uIGZyb20gXCIuL01vbnRobHlOYXZpZ2F0aW9uXCI7XG5pbXBvcnQgWWVhcnNSYW5nZU5hdmlnYXRpb24gZnJvbSBcIi4vWWVhcnNSYW5nZU5hdmlnYXRpb25cIjtcbmltcG9ydCBCb3R0b21OYXZpZ2F0aW9uIGZyb20gXCIuL0JvdHRvbU5hdmlnYXRpb25cIjtcbmltcG9ydCBDdWx0dXJlUHJvdmlkZXIgZnJvbSBcIi4vaW5mcmFzdHJ1Y3R1cmUvQ3VsdHVyZVByb3ZpZGVyXCI7XG5pbXBvcnQgTW9kZXMgZnJvbSBcIi4vaW5mcmFzdHJ1Y3R1cmUvTW9kZXNcIjtcblxuY29uc3QgTW9kZVZpZXdzID0ge307XG5cbk1vZGVWaWV3c1sgTW9kZXMuWWVhcmx5IF0gPSBbIFllYXJseU5hdmlnYXRpb24sIFllYXJseVBhbmUsIEJvdHRvbU5hdmlnYXRpb24gXTtcbk1vZGVWaWV3c1sgTW9kZXMuTW9udGhseSBdID0gWyBNb250aGx5TmF2aWdhdGlvbiwgTW9udGhseVBhbmUsIEJvdHRvbU5hdmlnYXRpb24gXTtcbk1vZGVWaWV3c1sgTW9kZXMuWWVhcnMgXSA9IFsgWWVhcnNSYW5nZU5hdmlnYXRpb24sIFllYXJzUmFuZ2VQYW5lLCBCb3R0b21OYXZpZ2F0aW9uIF07XG5cblxuXG5jbGFzcyBDb250ZW50UGFuZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCBjb21wb25lbnRzID0gdGhpcy5wcm9wcy5jYXNlc1sgdGhpcy5wcm9wcy5tb2RlIF0ubWFwKFxuICAgICAgICAgIChjLCBpKSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KCBjLCBPYmplY3QuYXNzaWduKCB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY1wiICsgaSArIHRoaXMucHJvcHMubW9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICkgKVxuICAgICk7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci1wYW5lXCIgc3R5bGU9eyB0aGlzLnByb3BzLnN0eWxlIH0+XG4gICAgICAgICAgICAgIHsgY29tcG9uZW50cyB9XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyaW1EYXRlKCBkYXRlICl7XG4gIHZhciBzcGxpdHRlZCA9IEN1bHR1cmVQcm92aWRlci5zcGxpdERhdGUoIGRhdGUgKTtcbiAgcmV0dXJuIG5ldyBEYXRlKCBzcGxpdHRlZC55ZWFyLCBzcGxpdHRlZC5tb250aCwgc3BsaXR0ZWQuZGF5ICk7XG59XG5cblxuY2xhc3MgRGF0ZVBpY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICkge1xuICAgIHN1cGVyKCBwcm9wcyApO1xuICAgIHRoaXMuc3dpdGNoTW9kZSA9IHRoaXMuc3dpdGNoTW9kZS5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5zZXRUaW1lZnJhbWUgPSB0aGlzLnNldFRpbWVmcmFtZS5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5zZXREYXRlID0gdGhpcy5zZXREYXRlLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLmRyaWxsRG93biA9IHRoaXMuZHJpbGxEb3duLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLl90cmFja091dHNpZGVDbGljayA9IHRoaXMuX3RyYWNrT3V0c2lkZUNsaWNrLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLl9oYW5kbGVDbG9zZUtleSA9IHRoaXMuX2hhbmRsZUNsb3NlS2V5LmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5pbml0U3RhdGUoIHRoaXMucHJvcHMsIHt9ICk7XG4gIH1cbiAgaW5pdFN0YXRlKCBwcm9wcywgc3RhdGUgKXtcbiAgICB2YXIgbmV3c3RhdGUgPSB7fTtcbiAgICBuZXdzdGF0ZS5tb2RlID0gcHJvcHMubW9kZSB8fCBNb2Rlcy5Nb250aGx5O1xuICAgIGlmKCBwcm9wcy5zZWxlY3RlZERhdGUgIT09IHN0YXRlLnNlbGVjdGVkRGF0ZSB8fCBzdGF0ZS5zZWxlY3RlZERhdGUgPT09IHVuZGVmaW5lZCApe1xuICAgICAgbmV3c3RhdGUuc2VsZWN0ZWREYXRlID0gdHJpbURhdGUoIHByb3BzLnNlbGVjdGVkRGF0ZSB8fCBuZXcgRGF0ZSgpICk7XG4gICAgICBuZXdzdGF0ZS50aW1lZnJhbWUgPSBzdGF0ZS5zZWxlY3RlZERhdGU7XG4gICAgfVxuICAgIHJldHVybiBuZXdzdGF0ZTtcbiAgfVxuICBzZXRUaW1lZnJhbWUoIG5ld0RhdGUgKSB7XG4gICAgbmV3RGF0ZSA9IHRyaW1EYXRlKCBuZXdEYXRlICk7XG4gICAgdGhpcy5zZXRTdGF0ZSggeyB0aW1lZnJhbWU6IG5ld0RhdGUgfSApO1xuICB9XG4gIHN3aXRjaE1vZGUoIG1vZGUgKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSggeyBtb2RlOiBtb2RlIH0gKTtcbiAgfVxuICBzZXREYXRlKCBkYXRlICl7XG4gICAgZGF0ZSA9IHRyaW1EYXRlKCBkYXRlICk7XG4gICAgdGhpcy5zZXRTdGF0ZSggeyB0aW1lZnJhbWU6IGRhdGUgLCBtb2RlOiBNb2Rlcy5Nb250aGx5LCBzZWxlY3RlZERhdGU6IGRhdGUgfSxcbiAgICAgICgpPT4geyB0aGlzLnByb3BzLm9uRGF0ZUNoYW5nZSggZGF0ZSwgdGhpcy5wcm9wcy5jdWx0dXJlUHJvdmlkZXIuZm9ybWF0dGVkKCBkYXRlICkgKTsgfVxuICAgICk7XG4gIH1cbiAgZHJpbGxEb3duKCBtb2RlLCB0aW1lZnJhbWUgKXtcbiAgICB0aGlzLnNldFN0YXRlKCB7IG1vZGU6IG1vZGUsIHRpbWVmcmFtZTogdHJpbURhdGUoIHRpbWVmcmFtZSApIH0gKTtcbiAgfVxuICAvKnByaXZhdGUgc2VjdGlvbnMqL1xuICBfdHJhY2tPdXRzaWRlQ2xpY2soIGUgKSB7XG4gICAgaWYgKCAhdGhpcy5wcm9wcy52aXNpYmxlICl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBsZXQgcm9vdCA9IFJlYWN0LmZpbmRET01Ob2RlKCB0aGlzICk7XG4gICAgd2hpbGUoIHRhcmdldCApe1xuICAgICAgaWYoIHRhcmdldCA9PT0gcm9vdCApe1xuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uSGlkZSggZSApO1xuICB9XG4gIF9oYW5kbGVDbG9zZUtleSggZSApe1xuICAgIGlmICggZS5rZXlDb2RlPT09MjcgKXtcbiAgICAgIHRoaXMucHJvcHMub25IaWRlKCBlICk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoIG5ld1Byb3BzICl7XG4gICAgdGhpcy5zZXRTdGF0ZSggdGhpcy5pbml0U3RhdGUoIG5ld1Byb3BzLCB0aGlzLnN0YXRlICkgKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwibW91c2Vkb3duXCIsIHRoaXMuX3RyYWNrT3V0c2lkZUNsaWNrICk7XG4gICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuX3RyYWNrT3V0c2lkZUNsaWNrICk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUNsb3NlS2V5ICk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJtb3VzZWRvd25cIiwgdGhpcy5fdHJhY2tPdXRzaWRlQ2xpY2sgKTtcbiAgICAvLyBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCBcInRvdWNoc3RhcnRcIiwgdGhpcy5fdHJhY2tPdXRzaWRlQ2xpY2sgKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCBcImtleWRvd25cIiwgdGhpcy5faGFuZGxlQ2xvc2VLZXkgKTtcblxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBpZiggIXRoaXMucHJvcHMudmlzaWJsZSApe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiA8Q29udGVudFBhbmUgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgIG1vZGU9eyB0aGlzLnN0YXRlLm1vZGUgfVxuICAgICAgICAgICAgICB0aW1lZnJhbWUgPSB7IHRoaXMuc3RhdGUudGltZWZyYW1lIH1cbiAgICAgICAgICAgICAgc2VsZWN0ZWREYXRlPXsgdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGUgfVxuICAgICAgICAgICAgICBjYXNlcz17IE1vZGVWaWV3cyB9XG4gICAgICAgICAgICAgIHNldFRpbWVmcmFtZT17IHRoaXMuc2V0VGltZWZyYW1lIH1cbiAgICAgICAgICAgICAgc2V0RGF0ZT17IHRoaXMuc2V0RGF0ZSB9XG4gICAgICAgICAgICAgIGRyaWxsRG93bj17IHRoaXMuZHJpbGxEb3duIH1cbiAgICAgICAgICAgICAgc3dpdGNoTW9kZSA9eyB0aGlzLnN3aXRjaE1vZGUgfS8+O1xuICB9XG59XG5cbkRhdGVQaWNrZXIuZGVmYXVsdFByb3BzID0ge1xuICBjdWx0dXJlUHJvdmlkZXI6IG5ldyBDdWx0dXJlUHJvdmlkZXIoKSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIHN0eWxlOiB7fSxcbiAgb25IaWRlOiBmdW5jdGlvbigpe31cbn07XG5cbmV4cG9ydCB7IERhdGVQaWNrZXIsIEN1bHR1cmVQcm92aWRlciB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XG5sZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xudG9kYXkgPSBuZXcgRGF0ZSggdG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpICk7XG5cbmNsYXNzIERheUNlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCggdGhpcyApO1xuICB9XG4gIGlzU2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuICt0aGlzLnByb3BzLmRhdGUgPT09ICt0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZTtcbiAgfVxuICBpc1RvZGF5KCkge1xuICAgIHJldHVybiAgK3RoaXMucHJvcHMuZGF0ZSA9PT0gK3RvZGF5O1xuICB9XG4gIG9mZlRpbWVmcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRlLmdldE1vbnRoKCkgIT09IHRoaXMucHJvcHMudGltZWZyYW1lLmdldE1vbnRoKCk7XG4gIH1cbiAgb25DbGljaygpe1xuICAgIHRoaXMucHJvcHMuc2V0RGF0ZSggdGhpcy5wcm9wcy5kYXRlICk7XG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsgY24oIFwiZGF0ZXBpY2tlci1kYXRlLWNlbGxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlcGlja2VyLXRvZGF5XCI6ICF0aGlzLmlzU2VsZWN0ZWQoKSAmJiB0aGlzLmlzVG9kYXkoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZXBpY2tlci1zZWxlY3RlZFwiOiB0aGlzLmlzU2VsZWN0ZWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZXBpY2tlci13ZWVrZW5kXCI6IHRoaXMucHJvcHMuY3VsdHVyZVByb3ZpZGVyLmlzSG9saWRheSggdGhpcy5wcm9wcy5kYXRlICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVwaWNrZXItdGltZWZyYW1lLW9mZlwiOiB0aGlzLm9mZlRpbWVmcmFtZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApIH0gb25DbGljaz17IHRoaXMub25DbGljayB9PlxuICAgICAgICAgICAgeyB0aGlzLnByb3BzLmRhdGUuZ2V0RGF0ZSgpIH1cbiAgICAgICAgICA8L2Rpdj47XG4gIH1cbn1cblxuRGF5Q2VsbC5wcm9wVHlwZXMgPSB7XG4gIGRhdGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgc2V0RGF0ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF5Q2VsbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNb2RlcyBmcm9tIFwiLi9pbmZyYXN0cnVjdHVyZS9Nb2Rlc1wiO1xuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmNsYXNzIE1vbnRoQ2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICl7XG4gICAgc3VwZXIoIHByb3BzICk7XG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQoIHRoaXMgKTtcbiAgfVxuICBvbkNsaWNrKCkge1xuICAgIHZhciB0aW1lZnJhbWUgPSBuZXcgRGF0ZSggK3RoaXMucHJvcHMudGltZWZyYW1lICk7XG4gICAgdGltZWZyYW1lLnNldE1vbnRoKCB0aGlzLnByb3BzLm1vbnRoICk7XG4gICAgdGhpcy5wcm9wcy5kcmlsbERvd24oIE1vZGVzLk1vbnRobHksIHRpbWVmcmFtZSApO1xuICB9XG4gIGlzU2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMubW9udGggPT09IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlLmdldE1vbnRoKCkgJiZcbiAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKSA9PT0gdGhpcy5wcm9wcy50aW1lZnJhbWUuZ2V0RnVsbFllYXIoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgb25DbGljaz17IHRoaXMub25DbGljayB9IGNsYXNzTmFtZT17IGNuKCBcImRhdGVwaWNrZXItbW9udGgtY2VsbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZXBpY2tlci1zZWxlY3RlZFwiOiB0aGlzLmlzU2VsZWN0ZWQoKVxuICAgICAgICAgICAgICAgIH0gKSB9PlxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jdWx0dXJlUHJvdmlkZXIubW9udGhOYW1lU2hvcnQoIHRoaXMucHJvcHMubW9udGggKSB9XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbk1vbnRoQ2VsbC5wcm9wVHlwZXMgPSB7XG4gIG1vbnRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9uU2VsZWN0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9udGhDZWxsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdmlnYXRpb25QYW5lIGZyb20gXCIuL05hdmlnYXRpb25QYW5lXCI7XG5pbXBvcnQgRGlyZWN0aW9uIGZyb20gXCIuL2luZnJhc3RydWN0dXJlL0RpcmVjdGlvblwiO1xuaW1wb3J0IE1vZGVzIGZyb20gXCIuL2luZnJhc3RydWN0dXJlL01vZGVzXCI7XG5cbmNsYXNzIE1vbnRobHlOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKXtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLm9uTmF2aWdhdGUgPSB0aGlzLm9uTmF2aWdhdGUuYmluZCggdGhpcyApO1xuICB9XG4gIG9uTmF2aWdhdGUoIGRpcmVjdGlvbiApIHtcbiAgICBsZXQgZG1vbnRoID0gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTGVmdCA/IC0xIDogMTtcbiAgICBsZXQgbmV3dGltZWZyYW1lID0gbmV3IERhdGUoICt0aGlzLnByb3BzLnRpbWVmcmFtZSApO1xuICAgIG5ld3RpbWVmcmFtZS5zZXRNb250aCggbmV3dGltZWZyYW1lLmdldE1vbnRoKCkgKyBkbW9udGggKTtcbiAgICB0aGlzLnByb3BzLnNldFRpbWVmcmFtZSggbmV3dGltZWZyYW1lICk7XG4gIH1cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY3VsdHVyZVByb3ZpZGVyLm1vbnRoTmFtZSggdGhpcy5wcm9wcy50aW1lZnJhbWUuZ2V0TW9udGgoKSApICsgXCIgXCIgKyAgdGhpcy5wcm9wcy50aW1lZnJhbWUuZ2V0RnVsbFllYXIoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxOYXZpZ2F0aW9uUGFuZSB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0TW9kZSA9IHsgTW9kZXMuWWVhcmx5IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17IHRoaXMuZ2V0VGl0bGUoKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25OYXZpZ2F0ZT17IHRoaXMub25OYXZpZ2F0ZSB9Lz47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9udGhseU5hdmlnYXRpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGF5Q2VsbCBmcm9tIFwiLi9EYXlDZWxsXCI7XG5pbXBvcnQgV2Vla0hlYWRlckNlbGwgZnJvbSBcIi4vV2Vla0hlYWRlckNlbGxcIjtcbmNvbnN0IERBWVNfQkxPQ0tfQ09MVU1OUyA9IDc7XG5jb25zdCBEQVlTX0JMT0NLX1JPV1MgPSA2O1xuY29uc3QgREFZX1RJTUVTUEFOID0gMjQgKiAzNjAwICogMTAwMDtcblxuY2xhc3MgTW9udGhseVBhbmVIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgd2Vla2RheXMgPSBbXTtcbiAgICBmb3IoIGxldCBjb2w9MDsgY29sPERBWVNfQkxPQ0tfQ09MVU1OUzsgY29sKysgKXtcbiAgICAgIHdlZWtkYXlzLnB1c2goIDx0aCBrZXk9eyBjb2wrXCJtaFwiIH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFdlZWtIZWFkZXJDZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrZGF5PXsgdGhpcy5wcm9wcy5jdWx0dXJlUHJvdmlkZXIuZGF5TmFtZVNob3J0KCBjb2wgKSB9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC90aD4gKTtcbiAgICB9XG4gICAgcmV0dXJuIDx0cj5cbiAgICAgICAgICB7IHdlZWtkYXlzIH1cbiAgICAgICAgICA8L3RyPjtcbiAgfVxufVxuXG5jbGFzcyBNb250aGx5UGFuZUNlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHRkPlxuICAgICAgICAgICAgICA8RGF5Q2VsbCB7Li4udGhpcy5wcm9wc30gZGF0ZT17IHRoaXMucHJvcHMuZGF0ZSB9Lz5cbiAgICAgICAgICAgIDwvdGQ+O1xuICB9XG59XG5cbmNsYXNzIE1vbnRobHlQYW5lUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKSB7XG4gICAgICBzdXBlciggcHJvcHMgKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgdmFyIGNlbGxzID0gW107XG4gICAgZm9yKCBsZXQgY29sPTA7IGNvbDxEQVlTX0JMT0NLX0NPTFVNTlM7IGNvbCsrICl7XG4gICAgICBjZWxscy5wdXNoKCA8TW9udGhseVBhbmVDZWxsXG4gICAgICAgIHsuLi50aGlzLnByb3BzIH1cbiAgICAgICAgIGtleT17IGNvbCArIHRoaXMucHJvcHMucm93ICogREFZU19CTE9DS19DT0xVTU5TIH1cbiAgICAgICAgIGRhdGU9eyBuZXcgRGF0ZSggK3RoaXMucHJvcHMuc3RhcnREYXRlICsgREFZX1RJTUVTUEFOICogY29sICl9Lz4gKTtcbiAgICB9XG4gICAgcmV0dXJuIDx0cj5cbiAgICAgICAgICAgICAgeyBjZWxscyB9XG4gICAgICAgICAgICA8L3RyPjtcbiAgfVxufVxuXG5jbGFzcyBNb250aGx5UGFuZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgZ2V0U3RhcnREYXRlKCl7XG4gICAgbGV0IG1vbnRoU3RhcnQgPSBuZXcgRGF0ZSggdGhpcy5wcm9wcy50aW1lZnJhbWUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRNb250aCgpICk7XG4gICAgbGV0IHN0YXJ0RGF0ZT1tb250aFN0YXJ0O1xuICAgIGxldCBzdGFydGRpZmYgPSBtb250aFN0YXJ0LmdldERheSgpIC0gdGhpcy5wcm9wcy5jdWx0dXJlUHJvdmlkZXIud2Vla0RheVN0YXJ0O1xuXG4gICAgaWYoIHN0YXJ0ZGlmZj4wICl7XG4gICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSggbW9udGhTdGFydCAtIERBWV9USU1FU1BBTiAqIHN0YXJ0ZGlmZiApO1xuICAgIH1cbiAgICByZXR1cm4gc3RhcnREYXRlO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcm93cyA9IFtdO1xuICAgIGxldCBzdGFydERhdGUgPSB0aGlzLmdldFN0YXJ0RGF0ZSgpO1xuICAgIGZvciggbGV0IHJvdz0wOyByb3c8REFZU19CTE9DS19ST1dTOyByb3crKyApe1xuICAgICAgcm93cy5wdXNoKCA8TW9udGhseVBhbmVSb3dcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIGtleT17IHJvdyB9XG4gICAgICAgICAgICAgICAgICAgIHJvdz17IHJvdyB9XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZT17IG5ldyBEYXRlKCArc3RhcnREYXRlICsgREFZX1RJTUVTUEFOICogcm93ICogREFZU19CTE9DS19DT0xVTU5TICkgfSAvPiApO1xuICAgIH1cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIDxNb250aGx5UGFuZUhlYWRlciB7Li4udGhpcy5wcm9wc30vPlxuICAgICAgICAgICAgICAgIHsgcm93cyB9XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vbnRobHlQYW5lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERpcmVjdGlvbiBmcm9tXCIuL2luZnJhc3RydWN0dXJlL0RpcmVjdGlvbi5qc1wiO1xuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmNsYXNzIE5hdkJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICl7XG4gICAgc3VwZXIoIHByb3BzICk7XG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQoIHRoaXMgKTtcbiAgfVxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMucHJvcHMub25OYXZpZ2F0ZSggdGhpcy5wcm9wcy5kaXJlY3Rpb24gKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGNuKCBcImRhdGVwaWNrZXItbmF2LWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIFwiYXJyb3ctbGVmdFwiOiB0aGlzLnByb3BzLmRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkxlZnQsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJyb3ctcmlnaHRcIjogdGhpcy5wcm9wcy5kaXJlY3Rpb24gPT09IERpcmVjdGlvbi5SaWdodFxuICAgICAgICAgICAgICAgICAgfSApIH0gb25DbGljaz17IHRoaXMub25DbGljayB9Pjwvc3Bhbj47XG4gIH1cbn1cblxuY2xhc3MgTmF2aWdhdGlvblBhbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApe1xuICAgIHN1cGVyKCBwcm9wcyApO1xuICAgIHRoaXMub25Td2l0Y2hNb2RlID0gdGhpcy5vblN3aXRjaE1vZGUuYmluZCggdGhpcyApO1xuICB9XG4gIG9uU3dpdGNoTW9kZSgpIHtcbiAgICB0aGlzLnByb3BzLnN3aXRjaE1vZGUoIHRoaXMucHJvcHMubmV4dE1vZGUgKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci1uYXYtcGFuZVwiPlxuICAgICAgICAgICAgICA8TmF2QnV0dG9uIHsuLi50aGlzLnByb3BzfSBkaXJlY3Rpb249eyBEaXJlY3Rpb24uTGVmdCB9IG9uLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci1uYXYtdGl0bGVcIiBvbkNsaWNrPXsgdGhpcy5vblN3aXRjaE1vZGUgfT57IHRoaXMucHJvcHMudGl0bGUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPE5hdkJ1dHRvbiB7Li4udGhpcy5wcm9wc30gZGlyZWN0aW9uPXsgRGlyZWN0aW9uLlJpZ2h0IH0vPlxuICAgICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25QYW5lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBXZWVrSGVhZGVyQ2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci13ZWVraGVhZGVyLWNlbGxcIj57IHRoaXMucHJvcHMud2Vla2RheS50b1VwcGVyQ2FzZSgpIH08L2Rpdj47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2Vla0hlYWRlckNlbGw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW9kZXMgZnJvbSBcIi4vaW5mcmFzdHJ1Y3R1cmUvTW9kZXNcIjtcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuY2xhc3MgWWVhckNlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApe1xuICAgIHN1cGVyKCBwcm9wcyApO1xuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKCB0aGlzICk7XG4gIH1cbiAgb25DbGljaygpIHtcbiAgICB2YXIgdGltZWZyYW1lID0gbmV3IERhdGUoICt0aGlzLnByb3BzLnRpbWVmcmFtZSApO1xuICAgIHRpbWVmcmFtZS5zZXRGdWxsWWVhciggdGhpcy5wcm9wcy55ZWFyICk7XG4gICAgdGhpcy5wcm9wcy5kcmlsbERvd24oIE1vZGVzLlllYXJseSwgdGltZWZyYW1lICk7XG4gIH1cbiAgaXNTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy55ZWFyID09PSB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpO1xuICB9XG4gIHJlbmRlciAoKXtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9eyBjbiggXCJkYXRlcGlja2VyLXllYXItY2VsbFwiLCB7XG4gICAgICAgICAgICAgICAgICBcImRhdGVwaWNrZXItc2VsZWN0ZWRcIjogdGhpcy5pc1NlbGVjdGVkKClcbiAgICAgICAgICAgICAgICB9ICkgfVxuICAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMub25DbGljayB9PlxuICAgICAgICAgICAgICB7IHRoaXMucHJvcHMueWVhciB9XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cblllYXJDZWxsLnByb3BUeXBlcyA9IHtcbiAgICB5ZWFyOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFllYXJDZWxsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdmlnYXRpb25QYW5lIGZyb20gXCIuL05hdmlnYXRpb25QYW5lXCI7XG5pbXBvcnQgRGlyZWN0aW9uIGZyb20gXCIuL2luZnJhc3RydWN0dXJlL0RpcmVjdGlvblwiO1xuaW1wb3J0IE1vZGVzIGZyb20gXCIuL2luZnJhc3RydWN0dXJlL01vZGVzXCI7XG5jbGFzcyBZZWFybHlOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKXtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLm9uTmF2aWdhdGUgPSB0aGlzLm9uTmF2aWdhdGUuYmluZCggdGhpcyApO1xuICB9XG4gIG9uTmF2aWdhdGUoIGRpcmVjdGlvbiApIHtcbiAgICBsZXQgZHllYXIgPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5MZWZ0ID8gLTEgOiAxO1xuICAgIGxldCBuZXd0aW1lZnJhbWUgPSBuZXcgRGF0ZSggK3RoaXMucHJvcHMudGltZWZyYW1lICk7XG4gICAgbmV3dGltZWZyYW1lLnNldEZ1bGxZZWFyKCBuZXd0aW1lZnJhbWUuZ2V0RnVsbFllYXIoKSArIGR5ZWFyICk7XG4gICAgdGhpcy5wcm9wcy5zZXRUaW1lZnJhbWUoIG5ld3RpbWVmcmFtZSApO1xuICB9XG4gIGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRGdWxsWWVhcigpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPE5hdmlnYXRpb25QYW5lIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE1vZGU9eyBNb2Rlcy5ZZWFycyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17IHRoaXMuZ2V0VGl0bGUoKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbk5hdmlnYXRlPXsgdGhpcy5vbk5hdmlnYXRlIH0vPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBZZWFybHlOYXZpZ2F0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1vbnRoQ2VsbCBmcm9tIFwiLi9Nb250aENlbGxcIjtcbmNvbnN0IE1PTlRIX0JMT0NLX0NPTFVNTlMgPSAzO1xuY29uc3QgTU9OVEhfQkxPQ0tfUk9XUyA9IDQ7XG5cbmNsYXNzIFllYXJseVBhbmVDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDx0ZD5cbiAgICAgICAgICAgICAgPE1vbnRoQ2VsbCB7IC4uLnRoaXMucHJvcHMgfS8+XG4gICAgICAgICAgICA8L3RkPjtcbiAgfVxufVxuXG5jbGFzcyBZZWFybHlQYW5lUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBidWlsZENlbGwoKSB7XG4gICAgcmV0dXJuIDxZZWFybHlQYW5lQ2VsbC8+O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY2VsbHMgPSBbXTtcbiAgICBmb3IoIGxldCBjb2w9MDsgY29sPE1PTlRIX0JMT0NLX0NPTFVNTlM7IGNvbCsrICl7XG4gICAgICBjZWxscy5wdXNoKCA8WWVhcmx5UGFuZUNlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGNvbCtcIm1cIit0aGlzLnByb3BzLnN0YXJ0TW9udGggfVxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aD0geyB0aGlzLnByb3BzLnN0YXJ0TW9udGggKyBjb2wgfS8+ICk7XG4gICAgfVxuICAgIHJldHVybiA8dHI+XG4gICAgICAgICAgICAgIHsgY2VsbHMgfVxuICAgICAgICAgICAgPC90cj47XG4gIH1cbn1cblxuY2xhc3MgWWVhcmx5UGFuZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCByb3dzID0gW107XG4gICAgZm9yKCBsZXQgcm93PTA7IHJvdzxNT05USF9CTE9DS19ST1dTOyByb3crKyApe1xuICAgICAgcm93cy5wdXNoKCA8WWVhcmx5UGFuZVJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyByb3cgKyBcIm1cIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydE1vbnRoPSB7IHJvdyAqIE1PTlRIX0JMT0NLX0NPTFVNTlMgfS8+ICApO1xuICAgIH1cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIHsgcm93cyB9XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFllYXJseVBhbmU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2aWdhdGlvblBhbmUgZnJvbSBcIi4vTmF2aWdhdGlvblBhbmVcIjtcbmltcG9ydCBEaXJlY3Rpb24gZnJvbSBcIi4vaW5mcmFzdHJ1Y3R1cmUvRGlyZWN0aW9uXCI7XG5pbXBvcnQgTW9kZXMgZnJvbSBcIi4vaW5mcmFzdHJ1Y3R1cmUvTW9kZXNcIjtcblxuY2xhc3MgWWVhcnNSYW5nZU5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApe1xuICAgIHN1cGVyKCBwcm9wcyApO1xuICAgIHRoaXMub25OYXZpZ2F0ZSA9IHRoaXMub25OYXZpZ2F0ZS5iaW5kKCB0aGlzICk7XG4gIH1cbiAgb25OYXZpZ2F0ZSggZGlyZWN0aW9uICkge1xuICAgIGxldCBkcmFuZ2UgPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5MZWZ0ID8gLTEgOiAxO1xuICAgIHZhciBuZXd0aW1lZnJhbWUgPSBuZXcgRGF0ZSggK3RoaXMucHJvcHMudGltZWZyYW1lICk7XG4gICAgbmV3dGltZWZyYW1lLnNldEZ1bGxZZWFyKCBuZXd0aW1lZnJhbWUuZ2V0RnVsbFllYXIoKSArIGRyYW5nZSoxNiApO1xuICAgIHRoaXMucHJvcHMuc2V0VGltZWZyYW1lKCBuZXd0aW1lZnJhbWUgKTtcbiAgfVxuICBnZXRUaXRsZSgpIHtcbiAgICBsZXQgc3RhcnQgPSAoICggdGhpcy5wcm9wcy50aW1lZnJhbWUuZ2V0RnVsbFllYXIoKS8xNiApfDAgKSAqIDE2O1xuICAgIHJldHVybiBzdGFydCArIFwiIC0gXCIgKyAoIHN0YXJ0ICsgMTYgKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxOYXZpZ2F0aW9uUGFuZSB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17IHRoaXMuZ2V0VGl0bGUoKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE1vZGU9eyBNb2Rlcy5Nb250aGx5IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk5hdmlnYXRlPXsgdGhpcy5vbk5hdmlnYXRlIH0vPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBZZWFyc1JhbmdlTmF2aWdhdGlvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBZZWFyQ2VsbCBmcm9tIFwiLi9ZZWFyQ2VsbFwiO1xuY29uc3QgWUVBUlNfQkxPQ0tfU0lERSA9IDQ7XG5jb25zdCBZRUFSU19CTE9DS19TSVpFID0gWUVBUlNfQkxPQ0tfU0lERSAqIFlFQVJTX0JMT0NLX1NJREU7XG5cbmNsYXNzIFllYXJzUGFuZUNlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHRkPlxuICAgICAgICAgICAgICA8WWVhckNlbGwgey4uLnRoaXMucHJvcHMgfS8+XG4gICAgICAgICAgICA8L3RkPjtcbiAgfVxufVxuXG5jbGFzcyBZZWFyc1BhbmVSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgcmVuZGVyKCkge1xuICAgICAgbGV0IGNlbGxzID0gW107XG4gICAgICBmb3IoIGxldCBjb2w9MDsgY29sPFlFQVJTX0JMT0NLX1NJREU7IGNvbCsrICl7XG4gICAgICAgIGNlbGxzLnB1c2goIDxZZWFyc1BhbmVDZWxsIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyB0aGlzLnByb3BzLmZyb21ZZWFyICsgY29sIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhcj17IHRoaXMucHJvcHMuZnJvbVllYXIgKyBjb2wgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiA8dHI+XG4gICAgICAgICAgICAgICAgeyBjZWxscyB9XG4gICAgICAgICAgICA8L3RyPjtcbiAgICB9XG59XG5cbmNsYXNzIFllYXJzUmFuZ2VQYW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCByb3dzID0gW107XG5cbiAgICBsZXQgZnJvbVllYXIgPSAoICh0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRGdWxsWWVhcigpL1lFQVJTX0JMT0NLX1NJWkUpfDAgKSAqIFlFQVJTX0JMT0NLX1NJWkU7XG4gICAgZm9yKCBsZXQgcm93PTA7IHJvdzxZRUFSU19CTE9DS19TSURFOyByb3crKyApe1xuICAgICAgcm93cy5wdXNoKCA8WWVhcnNQYW5lUm93ICBrZXk9eyByb3crXCJ5XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tWWVhcj17IGZyb21ZZWFyICsgWUVBUlNfQkxPQ0tfU0lERSAqIHJvdyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfS8+ICk7XG4gICAgfVxuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgeyByb3dzIH1cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgWWVhcnNSYW5nZVBhbmU7XG4iLCJjb25zdCB3ZWVrRGF5c05hbWVzID0gWyBcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCIgXTtcbmNvbnN0IG1vbnRoTmFtZXMgPSBbIFwiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIiBdO1xuXG5jbGFzcyBDdWx0dXJlUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvciggbG9jYWxlPVwiZW4tdXNcIiwgZm9ybWF0PVwiZGQvbW0veXl5eVwiICl7XG4gICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgdGhpcy5mb3JtYXQgPSBmb3JtYXQ7XG4gICAgdGhpcy53ZWVrRGF5U3RhcnQgPSAwO1xuICB9XG4gIGdldFdlZWtEYXlzTmFtZXMoKSB7XG4gICAgICByZXR1cm4gd2Vla0RheXNOYW1lcztcbiAgfVxuICBnZXRNb250aE5hbWVzKCkge1xuICAgICAgcmV0dXJuIG1vbnRoTmFtZXM7XG4gIH1cbiAgbW9udGhOYW1lKCBtb250aCApIHtcbiAgICAgIHJldHVybiBtb250aE5hbWVzWyBtb250aCBdO1xuICB9XG4gIG1vbnRoTmFtZVNob3J0KCBtb250aCApIHtcbiAgICAgIHJldHVybiB0aGlzLm1vbnRoTmFtZSggbW9udGggKS5zbGljZSggMCwgMyApO1xuICB9XG4gIGRheU5hbWUoIGRheSApIHtcbiAgICAgIHJldHVybiB3ZWVrRGF5c05hbWVzWyBkYXkgXTtcbiAgfVxuICBkYXlOYW1lU2hvcnQoIGRheSApIHtcbiAgICAgIHJldHVybiB0aGlzLmRheU5hbWUoIGRheSApLnNsaWNlKCAwLCAyICk7XG4gIH1cbiAgaXNIb2xpZGF5KCBkYXRlICkge1xuICAgICByZXR1cm4gZGF0ZS5nZXREYXkoKSAlIDYgPT09IDAgfHwgZGF0ZS5nZXREYXkoKSAlIDcgPT09MDtcbiAgfVxuICBzdGF0aWMgc3BsaXREYXRlKCBkYXRlICl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRheTogZGF0ZS5nZXREYXRlKCksXG4gICAgICBtb250aDogZGF0ZS5nZXRNb250aCgpLFxuICAgICAgeWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgfTtcbiAgfVxuICBsb2NhbGl6ZSgga2V5ICkge1xuICAgIHJldHVybiBrZXk7XG4gIH1cbiAgZm9ybWF0dGVkKCBkYXRlICl7IC8vZm9ybWF0ICkge1xuICAgIHZhciBzZGF0ZSA9IEN1bHR1cmVQcm92aWRlci5zcGxpdERhdGUoIGRhdGUgKTtcbiAgICAvL2Zvcm1hdCA9IGZvcm1hdCB8fCB0aGlzLmZvcm1hdDtcbiAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSBbXTtcbiAgICBmb3JtYXR0ZWRWYWx1ZS5wdXNoKCAoIFwiMFwiICsgc2RhdGUubW9udGggKS5zbGljZSggLTIgKSApO1xuICAgIGZvcm1hdHRlZFZhbHVlLnB1c2goICggXCIwXCIgKyBzZGF0ZS5kYXkgKS5zbGljZSggLTIgKSApO1xuICAgIGZvcm1hdHRlZFZhbHVlLnB1c2goICggXCIwMDAwXCIgKyBzZGF0ZS55ZWFyICkuc2xpY2UoIC00ICkgKTtcbiAgICByZXR1cm4gZm9ybWF0dGVkVmFsdWUuam9pbiggXCIvXCIgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdWx0dXJlUHJvdmlkZXI7XG4iLCJjb25zdCBEaXJlY3Rpb24gPSB7XG4gIExlZnQ6IFwibGVmdFwiLFxuICBSaWdodDogXCJyaWdodFwiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXJlY3Rpb247XG4iLCJjb25zdCBNb2RlcyA9IHtcbiAgWWVhcmx5OiBcInllYXJseVwiLFxuICBNb250aGx5OiBcIm1vbnRobHlcIixcbiAgWWVhcnM6IFwieWVhcnNyYW5nZVwiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2RlcztcbiJdfQ==
