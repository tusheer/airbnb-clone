'use strict';
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function () {
        var self = this,
            args = arguments;
        return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [null];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get(target, property, receiver) {
    if (typeof Reflect !== 'undefined' && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
          };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
        throw new TypeError('Super expression must either be null or a function');
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true,
        },
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== 'undefined' && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf('[native code]') !== -1;
}
function _iterable_to_array(iter) {
    if ((typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) || iter['@@iterator'] != null)
        return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator'];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally {
        try {
            if (!_n && _i['return'] != null) _i['return']();
        } finally {
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
}
function _non_iterable_spread() {
    throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
}
function _object_spread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(
                Object.getOwnPropertySymbols(source).filter(function (sym) {
                    return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                })
            );
        }
        ownKeys.forEach(function (key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === 'object' || typeof call === 'function')) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of =
        Object.setPrototypeOf ||
        function setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return (
        _array_with_holes(arr) ||
        _iterable_to_array_limit(arr, i) ||
        _unsupported_iterable_to_array(arr, i) ||
        _non_iterable_rest()
    );
}
function _super_prop_base(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _to_consumable_array(arr) {
    return (
        _array_without_holes(arr) ||
        _iterable_to_array(arr) ||
        _unsupported_iterable_to_array(arr) ||
        _non_iterable_spread()
    );
}
function _type_of(obj) {
    '@swc/helpers - typeof';
    return obj && typeof Symbol !== 'undefined' && obj.constructor === Symbol ? 'symbol' : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === 'string') return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === 'Object' && o.constructor) n = o.constructor.name;
    if (n === 'Map' || n === 'Set') return Array.from(n);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === 'function' ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== 'function') {
            throw new TypeError('Super expression must either be null or a function');
        }
        if (typeof _cache !== 'undefined') {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true,
            },
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === 'function') return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived),
            result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _ts_generator(thisArg, body) {
    var f,
        y,
        t,
        g,
        _ = {
            label: 0,
            sent: function () {
                if (t[0] & 1) throw t[1];
                return t[1];
            },
            trys: [],
            ops: [],
        };
    return (
        (g = {
            next: verb(0),
            throw: verb(1),
            return: verb(2),
        }),
        typeof Symbol === 'function' &&
            (g[Symbol.iterator] = function () {
                return this;
            }),
        g
    );
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError('Generator is already executing.');
        while (_)
            try {
                if (
                    ((f = 1),
                    y &&
                        (t =
                            op[0] & 2
                                ? y['return']
                                : op[0]
                                ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                                : y.next) &&
                        !(t = t.call(y, op[1])).done)
                )
                    return t;
                if (((y = 0), t)) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return {
                            value: op[1],
                            done: false,
                        };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];
                y = 0;
            } finally {
                f = t = 0;
            }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true,
        };
    }
}
var _globalThis_process_env,
    _globalThis_process,
    _globalThis_process_env1,
    _globalThis_process1,
    _globalThis_process_env2,
    _globalThis_process2;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = function (target, value) {
    return __defProp(target, 'name', {
        value: value,
        configurable: true,
    });
};
var __commonJS = function (cb, mod2) {
    return function __require() {
        return (
            mod2 ||
                (0, cb[__getOwnPropNames(cb)[0]])(
                    (mod2 = {
                        exports: {},
                    }).exports,
                    mod2
                ),
            mod2.exports
        );
    };
};
var __export = function (target, all) {
    for (var name in all)
        __defProp(target, name, {
            get: all[name],
            enumerable: true,
        });
};
var __copyProps = function (to, from, except, desc) {
    if ((from && typeof from === 'object') || typeof from === 'function') {
        var _iteratorNormalCompletion = true,
            _didIteratorError = false,
            _iteratorError = undefined;
        try {
            var _loop = function () {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except)
                    __defProp(to, key, {
                        get: function () {
                            return from[key];
                        },
                        enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
                    });
            };
            for (
                var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step;
                !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                _iteratorNormalCompletion = true
            )
                _loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function (mod2, isNodeMode, target) {
    return (
        (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}),
        __copyProps(
            // If the importer is in node compatibility mode or this is not an ESM
            // file that has been converted to a CommonJS file using a Babel-
            // compatible transform (i.e. "__esModule" has not been set), then set
            // "default" to the CommonJS "module.exports" for node compatibility.
            isNodeMode || !mod2 || !mod2.__esModule
                ? __defProp(target, 'default', {
                      value: mod2,
                      enumerable: true,
                  })
                : target,
            mod2
        )
    );
};
var __toCommonJS = function (mod2) {
    return __copyProps(
        __defProp({}, '__esModule', {
            value: true,
        }),
        mod2
    );
};
// ../../node_modules/basic-auth/node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
    '../../node_modules/basic-auth/node_modules/safe-buffer/index.js': function (exports, module2) {
        'use strict';
        var copyProps = function copyProps(src, dst) {
            for (var key in src) {
                dst[key] = src[key];
            }
        };
        var SafeBuffer = function SafeBuffer(arg, encodingOrOffset, length) {
            return Buffer2(arg, encodingOrOffset, length);
        };
        var buffer = require('buffer');
        var Buffer2 = buffer.Buffer;
        __name(copyProps, 'copyProps');
        if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
            module2.exports = buffer;
        } else {
            copyProps(buffer, exports);
            exports.Buffer = SafeBuffer;
        }
        __name(SafeBuffer, 'SafeBuffer');
        copyProps(Buffer2, SafeBuffer);
        SafeBuffer.from = function (arg, encodingOrOffset, length) {
            if (typeof arg === 'number') {
                throw new TypeError('Argument must not be a number');
            }
            return Buffer2(arg, encodingOrOffset, length);
        };
        SafeBuffer.alloc = function (size, fill, encoding) {
            if (typeof size !== 'number') {
                throw new TypeError('Argument must be a number');
            }
            var buf = Buffer2(size);
            if (fill !== void 0) {
                if (typeof encoding === 'string') {
                    buf.fill(fill, encoding);
                } else {
                    buf.fill(fill);
                }
            } else {
                buf.fill(0);
            }
            return buf;
        };
        SafeBuffer.allocUnsafe = function (size) {
            if (typeof size !== 'number') {
                throw new TypeError('Argument must be a number');
            }
            return Buffer2(size);
        };
        SafeBuffer.allocUnsafeSlow = function (size) {
            if (typeof size !== 'number') {
                throw new TypeError('Argument must be a number');
            }
            return buffer.SlowBuffer(size);
        };
    },
});
// ../../node_modules/basic-auth/index.js
var require_basic_auth = __commonJS({
    '../../node_modules/basic-auth/index.js': function (exports, module2) {
        'use strict';
        var auth = function auth(req) {
            if (!req) {
                throw new TypeError('argument req is required');
            }
            if (typeof req !== 'object') {
                throw new TypeError('argument req is required to be an object');
            }
            var header = getAuthorization(req);
            return parse2(header);
        };
        var decodeBase64 = function decodeBase64(str) {
            return Buffer2.from(str, 'base64').toString();
        };
        var getAuthorization = function getAuthorization(req) {
            if (!req.headers || typeof req.headers !== 'object') {
                throw new TypeError('argument req is required to have headers property');
            }
            return req.headers.authorization;
        };
        var parse2 = function parse2(string) {
            if (typeof string !== 'string') {
                return void 0;
            }
            var match = CREDENTIALS_REGEXP.exec(string);
            if (!match) {
                return void 0;
            }
            var userPass = USER_PASS_REGEXP.exec(decodeBase64(match[1]));
            if (!userPass) {
                return void 0;
            }
            return new Credentials(userPass[1], userPass[2]);
        };
        var Credentials = function Credentials(name, pass) {
            this.name = name;
            this.pass = pass;
        };
        var Buffer2 = require_safe_buffer().Buffer;
        module2.exports = auth;
        module2.exports.parse = parse2;
        var CREDENTIALS_REGEXP = /^ *(?:[Bb][Aa][Ss][Ii][Cc]) +([A-Za-z0-9._~+/-]+=*) *$/;
        var USER_PASS_REGEXP = /^([^:]*):(.*)$/;
        __name(auth, 'auth');
        __name(decodeBase64, 'decodeBase64');
        __name(getAuthorization, 'getAuthorization');
        __name(parse2, 'parse');
        __name(Credentials, 'Credentials');
    },
});
// ../../node_modules/morgan/node_modules/ms/index.js
var require_ms = __commonJS({
    '../../node_modules/morgan/node_modules/ms/index.js': function (exports, module2) {
        'use strict';
        var parse2 = function parse2(str) {
            str = String(str);
            if (str.length > 100) {
                return;
            }
            var match =
                /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
                    str
                );
            if (!match) {
                return;
            }
            var n2 = parseFloat(match[1]);
            var type = (match[2] || 'ms').toLowerCase();
            switch (type) {
                case 'years':
                case 'year':
                case 'yrs':
                case 'yr':
                case 'y':
                    return n2 * y;
                case 'days':
                case 'day':
                case 'd':
                    return n2 * d;
                case 'hours':
                case 'hour':
                case 'hrs':
                case 'hr':
                case 'h':
                    return n2 * h;
                case 'minutes':
                case 'minute':
                case 'mins':
                case 'min':
                case 'm':
                    return n2 * m2;
                case 'seconds':
                case 'second':
                case 'secs':
                case 'sec':
                case 's':
                    return n2 * s2;
                case 'milliseconds':
                case 'millisecond':
                case 'msecs':
                case 'msec':
                case 'ms':
                    return n2;
                default:
                    return void 0;
            }
        };
        var fmtShort = function fmtShort(ms) {
            if (ms >= d) {
                return Math.round(ms / d) + 'd';
            }
            if (ms >= h) {
                return Math.round(ms / h) + 'h';
            }
            if (ms >= m2) {
                return Math.round(ms / m2) + 'm';
            }
            if (ms >= s2) {
                return Math.round(ms / s2) + 's';
            }
            return ms + 'ms';
        };
        var fmtLong = function fmtLong(ms) {
            return (
                plural(ms, d, 'day') ||
                plural(ms, h, 'hour') ||
                plural(ms, m2, 'minute') ||
                plural(ms, s2, 'second') ||
                ms + ' ms'
            );
        };
        var plural = function plural(ms, n2, name) {
            if (ms < n2) {
                return;
            }
            if (ms < n2 * 1.5) {
                return Math.floor(ms / n2) + ' ' + name;
            }
            return Math.ceil(ms / n2) + ' ' + name + 's';
        };
        var s2 = 1e3;
        var m2 = s2 * 60;
        var h = m2 * 60;
        var d = h * 24;
        var y = d * 365.25;
        module2.exports = function (val, options) {
            options = options || {};
            var type = typeof val === 'undefined' ? 'undefined' : _type_of(val);
            if (type === 'string' && val.length > 0) {
                return parse2(val);
            } else if (type === 'number' && isNaN(val) === false) {
                return options.long ? fmtLong(val) : fmtShort(val);
            }
            throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
        };
        __name(parse2, 'parse');
        __name(fmtShort, 'fmtShort');
        __name(fmtLong, 'fmtLong');
        __name(plural, 'plural');
    },
});
// ../../node_modules/morgan/node_modules/debug/src/debug.js
var require_debug = __commonJS({
    '../../node_modules/morgan/node_modules/debug/src/debug.js': function (exports, module2) {
        'use strict';
        var selectColor = function selectColor(namespace) {
            var hash = 0,
                i2;
            for (i2 in namespace) {
                hash = (hash << 5) - hash + namespace.charCodeAt(i2);
                hash |= 0;
            }
            return exports.colors[Math.abs(hash) % exports.colors.length];
        };
        var createDebug = function createDebug(namespace) {
            function debug() {
                if (!debug.enabled) return;
                var self = debug;
                var curr = +(/* @__PURE__ */ new Date());
                var ms = curr - (prevTime || curr);
                self.diff = ms;
                self.prev = prevTime;
                self.curr = curr;
                prevTime = curr;
                var args = new Array(arguments.length);
                for (var i2 = 0; i2 < args.length; i2++) {
                    args[i2] = arguments[i2];
                }
                args[0] = exports.coerce(args[0]);
                if ('string' !== typeof args[0]) {
                    args.unshift('%O');
                }
                var index = 0;
                args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
                    if (match === '%%') return match;
                    index++;
                    var formatter = exports.formatters[format];
                    if ('function' === typeof formatter) {
                        var val = args[index];
                        match = formatter.call(self, val);
                        args.splice(index, 1);
                        index--;
                    }
                    return match;
                });
                exports.formatArgs.call(self, args);
                var logFn = debug.log || exports.log || console.log.bind(console);
                logFn.apply(self, args);
            }
            __name(debug, 'debug');
            debug.namespace = namespace;
            debug.enabled = exports.enabled(namespace);
            debug.useColors = exports.useColors();
            debug.color = selectColor(namespace);
            if ('function' === typeof exports.init) {
                exports.init(debug);
            }
            return debug;
        };
        var enable = function enable(namespaces) {
            exports.save(namespaces);
            exports.names = [];
            exports.skips = [];
            var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
            var len = split.length;
            for (var i2 = 0; i2 < len; i2++) {
                if (!split[i2]) continue;
                namespaces = split[i2].replace(/\*/g, '.*?');
                if (namespaces[0] === '-') {
                    exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
                } else {
                    exports.names.push(new RegExp('^' + namespaces + '$'));
                }
            }
        };
        var disable = function disable() {
            exports.enable('');
        };
        var enabled = function enabled(name) {
            var i2, len;
            for (i2 = 0, len = exports.skips.length; i2 < len; i2++) {
                if (exports.skips[i2].test(name)) {
                    return false;
                }
            }
            for (i2 = 0, len = exports.names.length; i2 < len; i2++) {
                if (exports.names[i2].test(name)) {
                    return true;
                }
            }
            return false;
        };
        var coerce2 = function coerce2(val) {
            if (_instanceof(val, Error)) return val.stack || val.message;
            return val;
        };
        exports = module2.exports = createDebug.debug = createDebug['default'] = createDebug;
        exports.coerce = coerce2;
        exports.disable = disable;
        exports.enable = enable;
        exports.enabled = enabled;
        exports.humanize = require_ms();
        exports.names = [];
        exports.skips = [];
        exports.formatters = {};
        var prevTime;
        __name(selectColor, 'selectColor');
        __name(createDebug, 'createDebug');
        __name(enable, 'enable');
        __name(disable, 'disable');
        __name(enabled, 'enabled');
        __name(coerce2, 'coerce');
    },
});
// ../../node_modules/morgan/node_modules/debug/src/browser.js
var require_browser = __commonJS({
    '../../node_modules/morgan/node_modules/debug/src/browser.js': function (exports, module2) {
        'use strict';
        var useColors = function useColors() {
            if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
                return true;
            }
            return (
                (typeof document !== 'undefined' &&
                    document.documentElement &&
                    document.documentElement.style &&
                    document.documentElement.style.WebkitAppearance) || // is firebug? http://stackoverflow.com/a/398120/376773
                (typeof window !== 'undefined' &&
                    window.console &&
                    (window.console.firebug || (window.console.exception && window.console.table))) || // is firefox >= v31?
                // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
                (typeof navigator !== 'undefined' &&
                    navigator.userAgent &&
                    navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                    parseInt(RegExp.$1, 10) >= 31) || // double check webkit in userAgent just in case we are in a worker
                (typeof navigator !== 'undefined' &&
                    navigator.userAgent &&
                    navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            );
        };
        var formatArgs = function formatArgs(args) {
            var useColors2 = this.useColors;
            args[0] =
                (useColors2 ? '%c' : '') +
                this.namespace +
                (useColors2 ? ' %c' : ' ') +
                args[0] +
                (useColors2 ? '%c ' : ' ') +
                '+' +
                exports.humanize(this.diff);
            if (!useColors2) return;
            var c = 'color: ' + this.color;
            args.splice(1, 0, c, 'color: inherit');
            var index = 0;
            var lastC = 0;
            args[0].replace(/%[a-zA-Z%]/g, function (match) {
                if ('%%' === match) return;
                index++;
                if ('%c' === match) {
                    lastC = index;
                }
            });
            args.splice(lastC, 0, c);
        };
        var log = function log() {
            return (
                'object' === typeof console &&
                console.log &&
                Function.prototype.apply.call(console.log, console, arguments)
            );
        };
        var save = function save(namespaces) {
            try {
                if (null == namespaces) {
                    exports.storage.removeItem('debug');
                } else {
                    exports.storage.debug = namespaces;
                }
            } catch (e2) {}
        };
        var load = function load() {
            var r2;
            try {
                r2 = exports.storage.debug;
            } catch (e2) {}
            if (!r2 && typeof process !== 'undefined' && 'env' in process) {
                r2 = process.env.DEBUG;
            }
            return r2;
        };
        var localstorage = function localstorage() {
            try {
                return window.localStorage;
            } catch (e2) {}
        };
        exports = module2.exports = require_debug();
        exports.log = log;
        exports.formatArgs = formatArgs;
        exports.save = save;
        exports.load = load;
        exports.useColors = useColors;
        exports.storage =
            'undefined' != typeof chrome && 'undefined' != typeof chrome.storage
                ? chrome.storage.local
                : localstorage();
        exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];
        __name(useColors, 'useColors');
        exports.formatters.j = function (v) {
            try {
                return JSON.stringify(v);
            } catch (err) {
                return '[UnexpectedJSONParseError]: ' + err.message;
            }
        };
        __name(formatArgs, 'formatArgs');
        __name(log, 'log');
        __name(save, 'save');
        __name(load, 'load');
        exports.enable(load());
        __name(localstorage, 'localstorage');
    },
});
// ../../node_modules/morgan/node_modules/debug/src/node.js
var require_node = __commonJS({
    '../../node_modules/morgan/node_modules/debug/src/node.js': function (exports, module2) {
        'use strict';
        var useColors = function useColors() {
            return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(fd);
        };
        var formatArgs = function formatArgs(args) {
            var name = this.namespace;
            var useColors2 = this.useColors;
            if (useColors2) {
                var c = this.color;
                var prefix = '  \x1b[3' + c + ';1m' + name + ' \x1b[0m';
                args[0] = prefix + args[0].split('\n').join('\n' + prefix);
                args.push('\x1b[3' + c + 'm+' + exports.humanize(this.diff) + '\x1b[0m');
            } else {
                args[0] = /* @__PURE__ */ new Date().toUTCString() + ' ' + name + ' ' + args[0];
            }
        };
        var log = function log() {
            return stream.write(util2.format.apply(util2, arguments) + '\n');
        };
        var save = function save(namespaces) {
            if (null == namespaces) {
                delete process.env.DEBUG;
            } else {
                process.env.DEBUG = namespaces;
            }
        };
        var load = function load() {
            return process.env.DEBUG;
        };
        var createWritableStdioStream = function createWritableStdioStream(fd2) {
            var stream2;
            var tty_wrap = process.binding('tty_wrap');
            switch (tty_wrap.guessHandleType(fd2)) {
                case 'TTY':
                    stream2 = new tty.WriteStream(fd2);
                    stream2._type = 'tty';
                    if (stream2._handle && stream2._handle.unref) {
                        stream2._handle.unref();
                    }
                    break;
                case 'FILE':
                    var fs = require('fs');
                    stream2 = new fs.SyncWriteStream(fd2, {
                        autoClose: false,
                    });
                    stream2._type = 'fs';
                    break;
                case 'PIPE':
                case 'TCP':
                    var net = require('net');
                    stream2 = new net.Socket({
                        fd: fd2,
                        readable: false,
                        writable: true,
                    });
                    stream2.readable = false;
                    stream2.read = null;
                    stream2._type = 'pipe';
                    if (stream2._handle && stream2._handle.unref) {
                        stream2._handle.unref();
                    }
                    break;
                default:
                    throw new Error('Implement me. Unknown stream file type!');
            }
            stream2.fd = fd2;
            stream2._isStdio = true;
            return stream2;
        };
        var init = function init(debug) {
            debug.inspectOpts = {};
            var keys = Object.keys(exports.inspectOpts);
            for (var i2 = 0; i2 < keys.length; i2++) {
                debug.inspectOpts[keys[i2]] = exports.inspectOpts[keys[i2]];
            }
        };
        var tty = require('tty');
        var util2 = require('util');
        exports = module2.exports = require_debug();
        exports.init = init;
        exports.log = log;
        exports.formatArgs = formatArgs;
        exports.save = save;
        exports.load = load;
        exports.useColors = useColors;
        exports.colors = [6, 2, 3, 4, 5, 1];
        exports.inspectOpts = Object.keys(process.env)
            .filter(function (key) {
                return /^debug_/i.test(key);
            })
            .reduce(function (obj, key) {
                var prop = key
                    .substring(6)
                    .toLowerCase()
                    .replace(/_([a-z])/g, function (_, k) {
                        return k.toUpperCase();
                    });
                var val = process.env[key];
                if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
                else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
                else if (val === 'null') val = null;
                else val = Number(val);
                obj[prop] = val;
                return obj;
            }, {});
        var fd = parseInt(process.env.DEBUG_FD, 10) || 2;
        if (1 !== fd && 2 !== fd) {
            util2.deprecate(
                function () {},
                'except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)'
            )();
        }
        var stream = 1 === fd ? process.stdout : 2 === fd ? process.stderr : createWritableStdioStream(fd);
        __name(useColors, 'useColors');
        exports.formatters.o = function (v) {
            this.inspectOpts.colors = this.useColors;
            return util2
                .inspect(v, this.inspectOpts)
                .split('\n')
                .map(function (str) {
                    return str.trim();
                })
                .join(' ');
        };
        exports.formatters.O = function (v) {
            this.inspectOpts.colors = this.useColors;
            return util2.inspect(v, this.inspectOpts);
        };
        __name(formatArgs, 'formatArgs');
        __name(log, 'log');
        __name(save, 'save');
        __name(load, 'load');
        __name(createWritableStdioStream, 'createWritableStdioStream');
        __name(init, 'init');
        exports.enable(load());
    },
});
// ../../node_modules/morgan/node_modules/debug/src/index.js
var require_src = __commonJS({
    '../../node_modules/morgan/node_modules/debug/src/index.js': function (exports, module2) {
        'use strict';
        if (typeof process !== 'undefined' && process.type === 'renderer') {
            module2.exports = require_browser();
        } else {
            module2.exports = require_node();
        }
    },
});
// ../../node_modules/depd/index.js
var require_depd = __commonJS({
    '../../node_modules/depd/index.js': function (exports, module2) {
        'use strict';
        var containsNamespace = function containsNamespace(str, namespace) {
            var vals = str.split(/[ ,]+/);
            var ns = String(namespace).toLowerCase();
            for (var i2 = 0; i2 < vals.length; i2++) {
                var val = vals[i2];
                if (val && (val === '*' || val.toLowerCase() === ns)) {
                    return true;
                }
            }
            return false;
        };
        var convertDataDescriptorToAccessor = function convertDataDescriptorToAccessor(obj, prop, message) {
            var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
            var value = descriptor.value;
            descriptor.get = /* @__PURE__ */ __name(function getter() {
                return value;
            }, 'getter');
            if (descriptor.writable) {
                descriptor.set = /* @__PURE__ */ __name(function setter(val) {
                    return (value = val);
                }, 'setter');
            }
            delete descriptor.value;
            delete descriptor.writable;
            Object.defineProperty(obj, prop, descriptor);
            return descriptor;
        };
        var createArgumentsString = function createArgumentsString(arity) {
            var str = '';
            for (var i2 = 0; i2 < arity; i2++) {
                str += ', arg' + i2;
            }
            return str.substr(2);
        };
        var createStackString = function createStackString(stack) {
            var str = this.name + ': ' + this.namespace;
            if (this.message) {
                str += ' deprecated ' + this.message;
            }
            for (var i2 = 0; i2 < stack.length; i2++) {
                str += '\n    at ' + stack[i2].toString();
            }
            return str;
        };
        var depd = function depd(namespace) {
            if (!namespace) {
                throw new TypeError('argument namespace is required');
            }
            var stack = getStack();
            var site = callSiteLocation(stack[1]);
            var file = site[0];
            function deprecate(message) {
                log.call(deprecate, message);
            }
            __name(deprecate, 'deprecate');
            deprecate._file = file;
            deprecate._ignored = isignored(namespace);
            deprecate._namespace = namespace;
            deprecate._traced = istraced(namespace);
            deprecate._warned = /* @__PURE__ */ Object.create(null);
            deprecate.function = wrapfunction;
            deprecate.property = wrapproperty;
            return deprecate;
        };
        var eehaslisteners = function eehaslisteners(emitter, type) {
            var count =
                typeof emitter.listenerCount !== 'function'
                    ? emitter.listeners(type).length
                    : emitter.listenerCount(type);
            return count > 0;
        };
        var isignored = function isignored(namespace) {
            if (process.noDeprecation) {
                return true;
            }
            var str = process.env.NO_DEPRECATION || '';
            return containsNamespace(str, namespace);
        };
        var istraced = function istraced(namespace) {
            if (process.traceDeprecation) {
                return true;
            }
            var str = process.env.TRACE_DEPRECATION || '';
            return containsNamespace(str, namespace);
        };
        var log = function log(message, site) {
            var haslisteners = eehaslisteners(process, 'deprecation');
            if (!haslisteners && this._ignored) {
                return;
            }
            var caller;
            var callFile;
            var callSite;
            var depSite;
            var i2 = 0;
            var seen = false;
            var stack = getStack();
            var file = this._file;
            if (site) {
                depSite = site;
                callSite = callSiteLocation(stack[1]);
                callSite.name = depSite.name;
                file = callSite[0];
            } else {
                i2 = 2;
                depSite = callSiteLocation(stack[i2]);
                callSite = depSite;
            }
            for (; i2 < stack.length; i2++) {
                caller = callSiteLocation(stack[i2]);
                callFile = caller[0];
                if (callFile === file) {
                    seen = true;
                } else if (callFile === this._file) {
                    file = this._file;
                } else if (seen) {
                    break;
                }
            }
            var key = caller ? depSite.join(':') + '__' + caller.join(':') : void 0;
            if (key !== void 0 && key in this._warned) {
                return;
            }
            this._warned[key] = true;
            var msg = message;
            if (!msg) {
                msg = callSite === depSite || !callSite.name ? defaultMessage(depSite) : defaultMessage(callSite);
            }
            if (haslisteners) {
                var err = DeprecationError(this._namespace, msg, stack.slice(i2));
                process.emit('deprecation', err);
                return;
            }
            var format = process.stderr.isTTY ? formatColor : formatPlain;
            var output = format.call(this, msg, caller, stack.slice(i2));
            process.stderr.write(output + '\n', 'utf8');
        };
        var callSiteLocation = function callSiteLocation(callSite) {
            var file = callSite.getFileName() || '<anonymous>';
            var line = callSite.getLineNumber();
            var colm = callSite.getColumnNumber();
            if (callSite.isEval()) {
                file = callSite.getEvalOrigin() + ', ' + file;
            }
            var site = [file, line, colm];
            site.callSite = callSite;
            site.name = callSite.getFunctionName();
            return site;
        };
        var defaultMessage = function defaultMessage(site) {
            var callSite = site.callSite;
            var funcName = site.name;
            if (!funcName) {
                funcName = '<anonymous@' + formatLocation(site) + '>';
            }
            var context = callSite.getThis();
            var typeName = context && callSite.getTypeName();
            if (typeName === 'Object') {
                typeName = void 0;
            }
            if (typeName === 'Function') {
                typeName = context.name || typeName;
            }
            return typeName && callSite.getMethodName() ? typeName + '.' + funcName : funcName;
        };
        var formatPlain = function formatPlain(msg, caller, stack) {
            var timestamp2 = /* @__PURE__ */ new Date().toUTCString();
            var formatted = timestamp2 + ' ' + this._namespace + ' deprecated ' + msg;
            if (this._traced) {
                for (var i2 = 0; i2 < stack.length; i2++) {
                    formatted += '\n    at ' + stack[i2].toString();
                }
                return formatted;
            }
            if (caller) {
                formatted += ' at ' + formatLocation(caller);
            }
            return formatted;
        };
        var formatColor = function formatColor(msg, caller, stack) {
            var formatted =
                '\x1b[36;1m' +
                this._namespace +
                '\x1b[22;39m \x1b[33;1mdeprecated\x1b[22;39m \x1b[0m' +
                msg +
                '\x1b[39m';
            if (this._traced) {
                for (var i2 = 0; i2 < stack.length; i2++) {
                    formatted += '\n    \x1b[36mat ' + stack[i2].toString() + '\x1b[39m';
                }
                return formatted;
            }
            if (caller) {
                formatted += ' \x1b[36m' + formatLocation(caller) + '\x1b[39m';
            }
            return formatted;
        };
        var formatLocation = function formatLocation(callSite) {
            return relative(basePath, callSite[0]) + ':' + callSite[1] + ':' + callSite[2];
        };
        var getStack = function getStack() {
            var limit = Error.stackTraceLimit;
            var obj = {};
            var prep = Error.prepareStackTrace;
            Error.prepareStackTrace = prepareObjectStackTrace;
            Error.stackTraceLimit = Math.max(10, limit);
            Error.captureStackTrace(obj);
            var stack = obj.stack.slice(1);
            Error.prepareStackTrace = prep;
            Error.stackTraceLimit = limit;
            return stack;
        };
        var prepareObjectStackTrace = function prepareObjectStackTrace(obj, stack) {
            return stack;
        };
        var wrapfunction = function wrapfunction(fn, message) {
            if (typeof fn !== 'function') {
                throw new TypeError('argument fn must be a function');
            }
            var args = createArgumentsString(fn.length);
            var stack = getStack();
            var site = callSiteLocation(stack[1]);
            site.name = fn.name;
            var deprecatedfn = new Function(
                'fn',
                'log',
                'deprecate',
                'message',
                'site',
                '"use strict"\nreturn function (' +
                    args +
                    ') {log.call(deprecate, message, site)\nreturn fn.apply(this, arguments)\n}'
            )(fn, log, this, message, site);
            return deprecatedfn;
        };
        var wrapproperty = function wrapproperty(obj, prop, message) {
            if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
                throw new TypeError('argument obj must be object');
            }
            var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
            if (!descriptor) {
                throw new TypeError('must call property on owner object');
            }
            if (!descriptor.configurable) {
                throw new TypeError('property must be configurable');
            }
            var deprecate = this;
            var stack = getStack();
            var site = callSiteLocation(stack[1]);
            site.name = prop;
            if ('value' in descriptor) {
                descriptor = convertDataDescriptorToAccessor(obj, prop, message);
            }
            var get = descriptor.get;
            var set = descriptor.set;
            if (typeof get === 'function') {
                descriptor.get = /* @__PURE__ */ __name(function getter() {
                    log.call(deprecate, message, site);
                    return get.apply(this, arguments);
                }, 'getter');
            }
            if (typeof set === 'function') {
                descriptor.set = /* @__PURE__ */ __name(function setter() {
                    log.call(deprecate, message, site);
                    return set.apply(this, arguments);
                }, 'setter');
            }
            Object.defineProperty(obj, prop, descriptor);
        };
        var relative = require('path').relative;
        module2.exports = depd;
        var basePath = process.cwd();
        __name(containsNamespace, 'containsNamespace');
        __name(convertDataDescriptorToAccessor, 'convertDataDescriptorToAccessor');
        __name(createArgumentsString, 'createArgumentsString');
        __name(createStackString, 'createStackString');
        __name(depd, 'depd');
        __name(eehaslisteners, 'eehaslisteners');
        __name(isignored, 'isignored');
        __name(istraced, 'istraced');
        __name(log, 'log');
        __name(callSiteLocation, 'callSiteLocation');
        __name(defaultMessage, 'defaultMessage');
        __name(formatPlain, 'formatPlain');
        __name(formatColor, 'formatColor');
        __name(formatLocation, 'formatLocation');
        __name(getStack, 'getStack');
        __name(prepareObjectStackTrace, 'prepareObjectStackTrace');
        __name(wrapfunction, 'wrapfunction');
        __name(wrapproperty, 'wrapproperty');
        function DeprecationError(namespace, message, stack) {
            var error = new Error();
            var stackString;
            Object.defineProperty(error, 'constructor', {
                value: DeprecationError,
            });
            Object.defineProperty(error, 'message', {
                configurable: true,
                enumerable: false,
                value: message,
                writable: true,
            });
            Object.defineProperty(error, 'name', {
                enumerable: false,
                configurable: true,
                value: 'DeprecationError',
                writable: true,
            });
            Object.defineProperty(error, 'namespace', {
                configurable: true,
                enumerable: false,
                value: namespace,
                writable: true,
            });
            Object.defineProperty(error, 'stack', {
                configurable: true,
                enumerable: false,
                get: function get() {
                    if (stackString !== void 0) {
                        return stackString;
                    }
                    return (stackString = createStackString.call(this, stack));
                },
                set: /* @__PURE__ */ __name(function setter(val) {
                    stackString = val;
                }, 'setter'),
            });
            return error;
        }
        __name(DeprecationError, 'DeprecationError');
    },
});
// ../../node_modules/ee-first/index.js
var require_ee_first = __commonJS({
    '../../node_modules/ee-first/index.js': function (exports, module2) {
        'use strict';
        var first = function first(stuff, done) {
            if (!Array.isArray(stuff)) throw new TypeError('arg must be an array of [ee, events...] arrays');
            var cleanups = [];
            for (var i2 = 0; i2 < stuff.length; i2++) {
                var arr = stuff[i2];
                if (!Array.isArray(arr) || arr.length < 2)
                    throw new TypeError('each array member must be [ee, events...]');
                var ee = arr[0];
                for (var j = 1; j < arr.length; j++) {
                    var event = arr[j];
                    var fn = listener(event, callback);
                    ee.on(event, fn);
                    cleanups.push({
                        ee: ee,
                        event: event,
                        fn: fn,
                    });
                }
            }
            function callback() {
                cleanup();
                done.apply(null, arguments);
            }
            __name(callback, 'callback');
            function cleanup() {
                var x;
                for (var i3 = 0; i3 < cleanups.length; i3++) {
                    x = cleanups[i3];
                    x.ee.removeListener(x.event, x.fn);
                }
            }
            __name(cleanup, 'cleanup');
            function thunk(fn2) {
                done = fn2;
            }
            __name(thunk, 'thunk');
            thunk.cancel = cleanup;
            return thunk;
        };
        var listener = function listener(event, done) {
            return /* @__PURE__ */ __name(function onevent(arg1) {
                var args = new Array(arguments.length);
                var ee = this;
                var err = event === 'error' ? arg1 : null;
                for (var i2 = 0; i2 < args.length; i2++) {
                    args[i2] = arguments[i2];
                }
                done(err, ee, event, args);
            }, 'onevent');
        };
        module2.exports = first;
        __name(first, 'first');
        __name(listener, 'listener');
    },
});
// ../../node_modules/morgan/node_modules/on-finished/index.js
var require_on_finished = __commonJS({
    '../../node_modules/morgan/node_modules/on-finished/index.js': function (exports, module2) {
        'use strict';
        var onFinished = function onFinished(msg, listener) {
            if (isFinished(msg) !== false) {
                defer(listener, null, msg);
                return msg;
            }
            attachListener(msg, listener);
            return msg;
        };
        var isFinished = function isFinished(msg) {
            var socket = msg.socket;
            if (typeof msg.finished === 'boolean') {
                return Boolean(msg.finished || (socket && !socket.writable));
            }
            if (typeof msg.complete === 'boolean') {
                return Boolean(msg.upgrade || !socket || !socket.readable || (msg.complete && !msg.readable));
            }
            return void 0;
        };
        var attachFinishedListener = function attachFinishedListener(msg, callback) {
            var eeMsg;
            var eeSocket;
            var finished = false;
            function onFinish(error) {
                eeMsg.cancel();
                eeSocket.cancel();
                finished = true;
                callback(error);
            }
            __name(onFinish, 'onFinish');
            eeMsg = eeSocket = first([[msg, 'end', 'finish']], onFinish);
            function onSocket(socket) {
                msg.removeListener('socket', onSocket);
                if (finished) return;
                if (eeMsg !== eeSocket) return;
                eeSocket = first([[socket, 'error', 'close']], onFinish);
            }
            __name(onSocket, 'onSocket');
            if (msg.socket) {
                onSocket(msg.socket);
                return;
            }
            msg.on('socket', onSocket);
            if (msg.socket === void 0) {
                patchAssignSocket(msg, onSocket);
            }
        };
        var attachListener = function attachListener(msg, listener) {
            var attached = msg.__onFinished;
            if (!attached || !attached.queue) {
                attached = msg.__onFinished = createListener(msg);
                attachFinishedListener(msg, attached);
            }
            attached.queue.push(listener);
        };
        var createListener = function createListener(msg) {
            function listener(err) {
                if (msg.__onFinished === listener) msg.__onFinished = null;
                if (!listener.queue) return;
                var queue = listener.queue;
                listener.queue = null;
                for (var i2 = 0; i2 < queue.length; i2++) {
                    queue[i2](err, msg);
                }
            }
            __name(listener, 'listener');
            listener.queue = [];
            return listener;
        };
        var patchAssignSocket = function patchAssignSocket(res, callback) {
            var assignSocket = res.assignSocket;
            if (typeof assignSocket !== 'function') return;
            res.assignSocket = /* @__PURE__ */ __name(function _assignSocket(socket) {
                assignSocket.call(this, socket);
                callback(socket);
            }, '_assignSocket');
        };
        module2.exports = onFinished;
        module2.exports.isFinished = isFinished;
        var first = require_ee_first();
        var defer =
            typeof setImmediate === 'function'
                ? setImmediate
                : function defer(fn) {
                      process.nextTick(fn.bind.apply(fn, arguments));
                  };
        __name(onFinished, 'onFinished');
        __name(isFinished, 'isFinished');
        __name(attachFinishedListener, 'attachFinishedListener');
        __name(attachListener, 'attachListener');
        __name(createListener, 'createListener');
        __name(patchAssignSocket, 'patchAssignSocket');
    },
});
// ../../node_modules/on-headers/index.js
var require_on_headers = __commonJS({
    '../../node_modules/on-headers/index.js': function (exports, module2) {
        'use strict';
        var createWriteHead = function createWriteHead(prevWriteHead, listener) {
            var fired = false;
            return /* @__PURE__ */ __name(function writeHead(statusCode) {
                var args = setWriteHeadHeaders.apply(this, arguments);
                if (!fired) {
                    fired = true;
                    listener.call(this);
                    if (typeof args[0] === 'number' && this.statusCode !== args[0]) {
                        args[0] = this.statusCode;
                        args.length = 1;
                    }
                }
                return prevWriteHead.apply(this, args);
            }, 'writeHead');
        };
        var onHeaders = function onHeaders(res, listener) {
            if (!res) {
                throw new TypeError('argument res is required');
            }
            if (typeof listener !== 'function') {
                throw new TypeError('argument listener must be a function');
            }
            res.writeHead = createWriteHead(res.writeHead, listener);
        };
        var setHeadersFromArray = function setHeadersFromArray(res, headers) {
            for (var i2 = 0; i2 < headers.length; i2++) {
                res.setHeader(headers[i2][0], headers[i2][1]);
            }
        };
        var setHeadersFromObject = function setHeadersFromObject(res, headers) {
            var keys = Object.keys(headers);
            for (var i2 = 0; i2 < keys.length; i2++) {
                var k = keys[i2];
                if (k) res.setHeader(k, headers[k]);
            }
        };
        var setWriteHeadHeaders = function setWriteHeadHeaders(statusCode) {
            var length = arguments.length;
            var headerIndex = length > 1 && typeof arguments[1] === 'string' ? 2 : 1;
            var headers = length >= headerIndex + 1 ? arguments[headerIndex] : void 0;
            this.statusCode = statusCode;
            if (Array.isArray(headers)) {
                setHeadersFromArray(this, headers);
            } else if (headers) {
                setHeadersFromObject(this, headers);
            }
            var args = new Array(Math.min(length, headerIndex));
            for (var i2 = 0; i2 < args.length; i2++) {
                args[i2] = arguments[i2];
            }
            return args;
        };
        module2.exports = onHeaders;
        __name(createWriteHead, 'createWriteHead');
        __name(onHeaders, 'onHeaders');
        __name(setHeadersFromArray, 'setHeadersFromArray');
        __name(setHeadersFromObject, 'setHeadersFromObject');
        __name(setWriteHeadHeaders, 'setWriteHeadHeaders');
    },
});
// ../../node_modules/morgan/index.js
var require_morgan = __commonJS({
    '../../node_modules/morgan/index.js': function (exports, module2) {
        'use strict';
        var clfdate = function clfdate(dateTime) {
            var date = dateTime.getUTCDate();
            var hour = dateTime.getUTCHours();
            var mins = dateTime.getUTCMinutes();
            var secs = dateTime.getUTCSeconds();
            var year = dateTime.getUTCFullYear();
            var month = CLF_MONTH[dateTime.getUTCMonth()];
            return (
                pad2(date) +
                '/' +
                month +
                '/' +
                year +
                ':' +
                pad2(hour) +
                ':' +
                pad2(mins) +
                ':' +
                pad2(secs) +
                ' +0000'
            );
        };
        var compile = function compile(format2) {
            if (typeof format2 !== 'string') {
                throw new TypeError('argument format must be a string');
            }
            var fmt = String(JSON.stringify(format2));
            var js =
                '  "use strict"\n  return ' +
                fmt.replace(/:([-\w]{2,})(?:\[([^\]]+)\])?/g, function (_, name, arg) {
                    var tokenArguments = 'req, res';
                    var tokenFunction = 'tokens[' + String(JSON.stringify(name)) + ']';
                    if (arg !== void 0) {
                        tokenArguments += ', ' + String(JSON.stringify(arg));
                    }
                    return '" +\n    (' + tokenFunction + '(' + tokenArguments + ') || "-") + "';
                });
            return new Function('tokens, req, res', js);
        };
        var createBufferStream = function createBufferStream(stream, interval) {
            var buf = [];
            var timer = null;
            function flush() {
                timer = null;
                stream.write(buf.join(''));
                buf.length = 0;
            }
            __name(flush, 'flush');
            function write(str) {
                if (timer === null) {
                    timer = setTimeout(flush, interval);
                }
                buf.push(str);
            }
            __name(write, 'write');
            return {
                write: write,
            };
        };
        var format = function format(name, fmt) {
            morgan2[name] = fmt;
            return this;
        };
        var getFormatFunction = function getFormatFunction(name) {
            var fmt = morgan2[name] || name || morgan2.default;
            return typeof fmt !== 'function' ? compile(fmt) : fmt;
        };
        var getip = function getip(req) {
            return req.ip || req._remoteAddress || (req.connection && req.connection.remoteAddress) || void 0;
        };
        var headersSent = function headersSent(res) {
            return typeof res.headersSent !== 'boolean' ? Boolean(res._header) : res.headersSent;
        };
        var pad2 = function pad2(num) {
            var str = String(num);
            return (str.length === 1 ? '0' : '') + str;
        };
        var recordStartTime = function recordStartTime() {
            this._startAt = process.hrtime();
            this._startTime = /* @__PURE__ */ new Date();
        };
        var token = function token(name, fn) {
            morgan2[name] = fn;
            return this;
        };
        module2.exports = morgan2;
        module2.exports.compile = compile;
        module2.exports.format = format;
        module2.exports.token = token;
        var auth = require_basic_auth();
        var debug = require_src()('morgan');
        var deprecate = require_depd()('morgan');
        var onFinished = require_on_finished();
        var onHeaders = require_on_headers();
        var CLF_MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var DEFAULT_BUFFER_DURATION = 1e3;
        function morgan2(format2, options) {
            var fmt = format2;
            var opts = options || {};
            if (format2 && typeof format2 === 'object') {
                opts = format2;
                fmt = opts.format || 'default';
                deprecate(
                    'morgan(options): use morgan(' +
                        (typeof fmt === 'string' ? JSON.stringify(fmt) : 'format') +
                        ', options) instead'
                );
            }
            if (fmt === void 0) {
                deprecate('undefined format: specify a format');
            }
            var immediate = opts.immediate;
            var skip = opts.skip || false;
            var formatLine = typeof fmt !== 'function' ? getFormatFunction(fmt) : fmt;
            var buffer = opts.buffer;
            var stream = opts.stream || process.stdout;
            if (buffer) {
                deprecate('buffer option');
                var interval = typeof buffer !== 'number' ? DEFAULT_BUFFER_DURATION : buffer;
                stream = createBufferStream(stream, interval);
            }
            return /* @__PURE__ */ __name(function logger(req, res, next) {
                req._startAt = void 0;
                req._startTime = void 0;
                req._remoteAddress = getip(req);
                res._startAt = void 0;
                res._startTime = void 0;
                recordStartTime.call(req);
                function logRequest() {
                    if (skip !== false && skip(req, res)) {
                        debug('skip request');
                        return;
                    }
                    var line = formatLine(morgan2, req, res);
                    if (line == null) {
                        debug('skip line');
                        return;
                    }
                    debug('log request');
                    stream.write(line + '\n');
                }
                __name(logRequest, 'logRequest');
                if (immediate) {
                    logRequest();
                } else {
                    onHeaders(res, recordStartTime);
                    onFinished(res, logRequest);
                }
                next();
            }, 'logger');
        }
        __name(morgan2, 'morgan');
        morgan2.format(
            'combined',
            ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'
        );
        morgan2.format(
            'common',
            ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'
        );
        morgan2.format(
            'default',
            ':remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'
        );
        deprecate.property(morgan2, 'default', 'default format: use combined format');
        morgan2.format(
            'short',
            ':remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms'
        );
        morgan2.format('tiny', ':method :url :status :res[content-length] - :response-time ms');
        morgan2.format(
            'dev',
            /* @__PURE__ */ __name(function developmentFormatLine(tokens, req, res) {
                var status = headersSent(res) ? res.statusCode : void 0;
                var color = status >= 500 ? 31 : status >= 400 ? 33 : status >= 300 ? 36 : status >= 200 ? 32 : 0;
                var fn = developmentFormatLine[color];
                if (!fn) {
                    fn = developmentFormatLine[color] = compile(
                        '\x1b[0m:method :url \x1b[' +
                            color +
                            'm:status\x1b[0m :response-time ms - :res[content-length]\x1b[0m'
                    );
                }
                return fn(tokens, req, res);
            }, 'developmentFormatLine')
        );
        morgan2.token(
            'url',
            /* @__PURE__ */ __name(function getUrlToken(req) {
                return req.originalUrl || req.url;
            }, 'getUrlToken')
        );
        morgan2.token(
            'method',
            /* @__PURE__ */ __name(function getMethodToken(req) {
                return req.method;
            }, 'getMethodToken')
        );
        morgan2.token(
            'response-time',
            /* @__PURE__ */ __name(function getResponseTimeToken(req, res, digits) {
                if (!req._startAt || !res._startAt) {
                    return;
                }
                var ms = (res._startAt[0] - req._startAt[0]) * 1e3 + (res._startAt[1] - req._startAt[1]) * 1e-6;
                return ms.toFixed(digits === void 0 ? 3 : digits);
            }, 'getResponseTimeToken')
        );
        morgan2.token(
            'total-time',
            /* @__PURE__ */ __name(function getTotalTimeToken(req, res, digits) {
                if (!req._startAt || !res._startAt) {
                    return;
                }
                var elapsed = process.hrtime(req._startAt);
                var ms = elapsed[0] * 1e3 + elapsed[1] * 1e-6;
                return ms.toFixed(digits === void 0 ? 3 : digits);
            }, 'getTotalTimeToken')
        );
        morgan2.token(
            'date',
            /* @__PURE__ */ __name(function getDateToken(req, res, format2) {
                var date = /* @__PURE__ */ new Date();
                switch (format2 || 'web') {
                    case 'clf':
                        return clfdate(date);
                    case 'iso':
                        return date.toISOString();
                    case 'web':
                        return date.toUTCString();
                }
            }, 'getDateToken')
        );
        morgan2.token(
            'status',
            /* @__PURE__ */ __name(function getStatusToken(req, res) {
                return headersSent(res) ? String(res.statusCode) : void 0;
            }, 'getStatusToken')
        );
        morgan2.token(
            'referrer',
            /* @__PURE__ */ __name(function getReferrerToken(req) {
                return req.headers.referer || req.headers.referrer;
            }, 'getReferrerToken')
        );
        morgan2.token('remote-addr', getip);
        morgan2.token(
            'remote-user',
            /* @__PURE__ */ __name(function getRemoteUserToken(req) {
                var credentials = auth(req);
                return credentials ? credentials.name : void 0;
            }, 'getRemoteUserToken')
        );
        morgan2.token(
            'http-version',
            /* @__PURE__ */ __name(function getHttpVersionToken(req) {
                return req.httpVersionMajor + '.' + req.httpVersionMinor;
            }, 'getHttpVersionToken')
        );
        morgan2.token(
            'user-agent',
            /* @__PURE__ */ __name(function getUserAgentToken(req) {
                return req.headers['user-agent'];
            }, 'getUserAgentToken')
        );
        morgan2.token(
            'req',
            /* @__PURE__ */ __name(function getRequestToken(req, res, field) {
                var header = req.headers[field.toLowerCase()];
                return Array.isArray(header) ? header.join(', ') : header;
            }, 'getRequestToken')
        );
        morgan2.token(
            'res',
            /* @__PURE__ */ __name(function getResponseHeader(req, res, field) {
                if (!headersSent(res)) {
                    return void 0;
                }
                var header = res.getHeader(field);
                return Array.isArray(header) ? header.join(', ') : header;
            }, 'getResponseHeader')
        );
        __name(clfdate, 'clfdate');
        __name(compile, 'compile');
        __name(createBufferStream, 'createBufferStream');
        __name(format, 'format');
        __name(getFormatFunction, 'getFormatFunction');
        __name(getip, 'getip');
        __name(headersSent, 'headersSent');
        __name(pad2, 'pad2');
        __name(recordStartTime, 'recordStartTime');
        __name(token, 'token');
    },
});
// ../../node_modules/@neondatabase/serverless/index.js
var require_serverless = __commonJS({
    '../../node_modules/@neondatabase/serverless/index.js': function (exports, module2) {
        'use strict';
        var $e = function $e(r2) {
            var e2 = 1779033703,
                t2 = 3144134277,
                n2 = 1013904242,
                i2 = 2773480762,
                s2 = 1359893119,
                o2 = 2600822924,
                u = 528734635,
                c = 1541459225,
                h = 0,
                l2 = 0,
                m2 = [
                    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221,
                    3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580,
                    3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
                    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895,
                    666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
                    2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
                    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
                    1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298,
                ],
                E = a2(function (A, g) {
                    return (A >>> g) | (A << (32 - g));
                }, 'rrot'),
                _ = new Uint32Array(64),
                P = new Uint8Array(64),
                N = a2(function () {
                    for (var L = 0, G = 0; L < 16; L++, G += 4)
                        _[L] = (P[G] << 24) | (P[G + 1] << 16) | (P[G + 2] << 8) | P[G + 3];
                    for (var L1 = 16; L1 < 64; L1++) {
                        var G1 = E(_[L1 - 15], 7) ^ E(_[L1 - 15], 18) ^ (_[L1 - 15] >>> 3),
                            he = E(_[L1 - 2], 17) ^ E(_[L1 - 2], 19) ^ (_[L1 - 2] >>> 10);
                        _[L1] = (_[L1 - 16] + G1 + _[L1 - 7] + he) | 0;
                    }
                    var A = e2,
                        g = t2,
                        D = n2,
                        H = i2,
                        Q = s2,
                        W = o2,
                        ce = u,
                        ye = c;
                    for (var L2 = 0; L2 < 64; L2++) {
                        var G2 = E(Q, 6) ^ E(Q, 11) ^ E(Q, 25),
                            he1 = (Q & W) ^ (~Q & ce),
                            me = (ye + G2 + he1 + m2[L2] + _[L2]) | 0,
                            ve = E(A, 2) ^ E(A, 13) ^ E(A, 22),
                            le = (A & g) ^ (A & D) ^ (g & D),
                            se = (ve + le) | 0;
                        (ye = ce),
                            (ce = W),
                            (W = Q),
                            (Q = (H + me) | 0),
                            (H = D),
                            (D = g),
                            (g = A),
                            (A = (me + se) | 0);
                    }
                    (e2 = (e2 + A) | 0),
                        (t2 = (t2 + g) | 0),
                        (n2 = (n2 + D) | 0),
                        (i2 = (i2 + H) | 0),
                        (s2 = (s2 + Q) | 0),
                        (o2 = (o2 + W) | 0),
                        (u = (u + ce) | 0),
                        (c = (c + ye) | 0),
                        (l2 = 0);
                }, 'process'),
                X = a2(function (A) {
                    typeof A == 'string' && (A = new TextEncoder().encode(A));
                    for (var g = 0; g < A.length; g++) (P[l2++] = A[g]), l2 === 64 && N();
                    h += A.length;
                }, 'add'),
                de = a2(function () {
                    if (((P[l2++] = 128), l2 == 64 && N(), l2 + 8 > 64)) {
                        for (; l2 < 64; ) P[l2++] = 0;
                        N();
                    }
                    for (; l2 < 58; ) P[l2++] = 0;
                    var A = h * 8;
                    (P[l2++] = (A / 1099511627776) & 255),
                        (P[l2++] = (A / 4294967296) & 255),
                        (P[l2++] = A >>> 24),
                        (P[l2++] = (A >>> 16) & 255),
                        (P[l2++] = (A >>> 8) & 255),
                        (P[l2++] = A & 255),
                        N();
                    var g = new Uint8Array(32);
                    return (
                        (g[0] = e2 >>> 24),
                        (g[1] = (e2 >>> 16) & 255),
                        (g[2] = (e2 >>> 8) & 255),
                        (g[3] = e2 & 255),
                        (g[4] = t2 >>> 24),
                        (g[5] = (t2 >>> 16) & 255),
                        (g[6] = (t2 >>> 8) & 255),
                        (g[7] = t2 & 255),
                        (g[8] = n2 >>> 24),
                        (g[9] = (n2 >>> 16) & 255),
                        (g[10] = (n2 >>> 8) & 255),
                        (g[11] = n2 & 255),
                        (g[12] = i2 >>> 24),
                        (g[13] = (i2 >>> 16) & 255),
                        (g[14] = (i2 >>> 8) & 255),
                        (g[15] = i2 & 255),
                        (g[16] = s2 >>> 24),
                        (g[17] = (s2 >>> 16) & 255),
                        (g[18] = (s2 >>> 8) & 255),
                        (g[19] = s2 & 255),
                        (g[20] = o2 >>> 24),
                        (g[21] = (o2 >>> 16) & 255),
                        (g[22] = (o2 >>> 8) & 255),
                        (g[23] = o2 & 255),
                        (g[24] = u >>> 24),
                        (g[25] = (u >>> 16) & 255),
                        (g[26] = (u >>> 8) & 255),
                        (g[27] = u & 255),
                        (g[28] = c >>> 24),
                        (g[29] = (c >>> 16) & 255),
                        (g[30] = (c >>> 8) & 255),
                        (g[31] = c & 255),
                        g
                    );
                }, 'digest');
            return r2 === void 0
                ? {
                      add: X,
                      digest: de,
                  }
                : (X(r2), de());
        };
        var Go = function Go(r2) {
            return w.getRandomValues(d.alloc(r2));
        };
        var $o = function $o(r2) {
            if (r2 === 'sha256')
                return {
                    update: function update(e2) {
                        return {
                            digest: function digest() {
                                return d.from($e(e2));
                            },
                        };
                    },
                };
            if (r2 === 'md5')
                return {
                    update: function update(e2) {
                        return {
                            digest: function digest() {
                                return typeof e2 == 'string' ? Ke.hashStr(e2) : Ke.hashByteArray(e2);
                            },
                        };
                    },
                };
            throw new Error("Hash type '".concat(r2, "' not supported"));
        };
        var Ko = function Ko(r2, e2) {
            if (r2 !== 'sha256') throw new Error("Only sha256 is supported (requested: '".concat(r2, "')"));
            return {
                update: function update(t2) {
                    return {
                        digest: function digest() {
                            typeof e2 == 'string' && (e2 = new TextEncoder().encode(e2)),
                                typeof t2 == 'string' && (t2 = new TextEncoder().encode(t2));
                            var n2 = e2.length;
                            if (n2 > 64) e2 = $e(e2);
                            else if (n2 < 64) {
                                var c = new Uint8Array(64);
                                c.set(e2), (e2 = c);
                            }
                            var i2 = new Uint8Array(64),
                                s2 = new Uint8Array(64);
                            for (var c1 = 0; c1 < 64; c1++) (i2[c1] = 54 ^ e2[c1]), (s2[c1] = 92 ^ e2[c1]);
                            var o2 = new Uint8Array(t2.length + 64);
                            o2.set(i2, 0), o2.set(t2, 64);
                            var u = new Uint8Array(64 + 32);
                            return u.set(s2, 0), u.set($e(o2), 64), d.from($e(u));
                        },
                    };
                },
            };
        };
        var iu = function iu() {
            for (var _len = arguments.length, r2 = new Array(_len), _key = 0; _key < _len; _key++) {
                r2[_key] = arguments[_key];
            }
            return r2.join('/');
        };
        var su = function su(r2, e2) {
            e2(new Error('No filesystem'));
        };
        var fr = function fr(r2) {
            var e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            var _ref = new URL(r2),
                t2 = _ref.protocol,
                n2 = 'http:' + r2.substring(t2.length),
                _ref1 = new URL(n2),
                i2 = _ref1.username,
                s2 = _ref1.password,
                o2 = _ref1.host,
                u = _ref1.hostname,
                c = _ref1.port,
                h = _ref1.pathname,
                l2 = _ref1.search,
                m2 = _ref1.searchParams,
                E = _ref1.hash;
            s2 = decodeURIComponent(s2);
            var _ = i2 + ':' + s2,
                P = e2 ? Object.fromEntries(m2.entries()) : l2;
            return {
                href: r2,
                protocol: t2,
                auth: _,
                username: i2,
                password: s2,
                host: o2,
                hostname: u,
                port: c,
                pathname: h,
                search: l2,
                query: P,
                hash: E,
            };
        };
        var Lu = function Lu(r2) {
            return 0;
        };
        var lc = function lc(param) {
            var r2 = param.socket,
                e2 = param.servername;
            return r2.startTls(e2), r2;
        };
        var xn = function xn(r2) {
            var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                e2 = _ref.arrayMode,
                t2 = _ref.fullResults,
                n2 = _ref.fetchOptions,
                i2 = _ref.isolationLevel,
                s2 = _ref.readOnly,
                o2 = _ref.deferrable,
                u = _ref.queryCallback,
                c = _ref.resultCallback;
            if (!r2)
                throw new Error(
                    'No database connection string was provided to `neon()`. Perhaps an environment variable has not been set?'
                );
            var h;
            try {
                h = fr(r2);
            } catch (e) {
                throw new Error(
                    'Database connection string provided to `neon()` is not a valid URL. Connection string: ' +
                        String(r2)
                );
            }
            var l2 = h.protocol,
                m2 = h.username,
                E = h.password,
                _ = h.hostname,
                P = h.port,
                N = h.pathname;
            if ((l2 !== 'postgres:' && l2 !== 'postgresql:') || !m2 || !E || !_ || !N)
                throw new Error(
                    'Database connection string format for `neon()` should be: postgresql://user:password@host.tld/dbname?option=value'
                );
            function X(A) {
                for (
                    var _len = arguments.length, g = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
                    _key < _len;
                    _key++
                ) {
                    g[_key - 1] = arguments[_key];
                }
                var D, H;
                var _g_;
                if (typeof A == 'string') (D = A), (H = g[1]), (g = (_g_ = g[0]) !== null && _g_ !== void 0 ? _g_ : []);
                else {
                    D = '';
                    for (var W = 0; W < A.length; W++) (D += A[W]), W < g.length && (D += '$' + (W + 1));
                }
                g = g.map(function (W) {
                    return (0, Zs.prepareValue)(W);
                });
                var Q = {
                    query: D,
                    params: g,
                };
                return u && u(Q), Nc(de, Q, H);
            }
            __name(X, 'X');
            a2(X, 'resolve'),
                (X.transaction = (function () {
                    var _ref = _async_to_generator(function (A, g) {
                        var D;
                        return _ts_generator(this, function (_state) {
                            if ((typeof A == 'function' && (A = A(X)), !Array.isArray(A))) throw new Error(zs);
                            D = A.map(function (H) {
                                if (H[Symbol.toStringTag] !== 'NeonQueryPromise') throw new Error(zs);
                                return H.parameterizedQuery;
                            });
                            return [2, de(D, g)];
                        });
                    });
                    return function (A, g) {
                        return _ref.apply(this, arguments);
                    };
                })());
            function de(A, g) {
                return _de.apply(this, arguments);
            }
            function _de() {
                _de = _async_to_generator(function (A, g) {
                    var D, H, Q, W, ce, ye, L, G, he, me, ve, le, se, oe, $, _$oe, $1, _$oe1, _ref, $2, ie, Ce, $3;
                    return _ts_generator(this, function (_state) {
                        switch (_state.label) {
                            case 0:
                                (D = n2 !== null && n2 !== void 0 ? n2 : {}),
                                    (H = Se.fetchEndpoint),
                                    (Q = Se.fetchConnectionCache),
                                    (W = Se.fetchFunction),
                                    (ce = typeof H == 'function' ? H(_, P) : H),
                                    (ye = Array.isArray(A)
                                        ? {
                                              queries: A,
                                          }
                                        : A),
                                    (L = e2 !== null && e2 !== void 0 ? e2 : false),
                                    (G = t2 !== null && t2 !== void 0 ? t2 : false),
                                    (he = i2),
                                    (me = s2),
                                    (ve = o2);
                                g !== void 0 &&
                                    (g.arrayMode !== void 0 && (L = g.arrayMode),
                                    g.fullResults !== void 0 && (G = g.fullResults),
                                    g.fetchOptions !== void 0 && (D = _object_spread({}, D, g.fetchOptions)),
                                    g.isolationLevel !== void 0 && (he = g.isolationLevel),
                                    g.readOnly !== void 0 && (me = g.readOnly),
                                    g.deferrable !== void 0 && (ve = g.deferrable));
                                le = {
                                    'Neon-Connection-String': r2,
                                    'Neon-Raw-Text-Output': 'true',
                                    'Neon-Array-Mode': 'true',
                                };
                                Q === true && (le['Neon-Pool-Opt-In'] = 'true'),
                                    Array.isArray(A) &&
                                        (he !== void 0 && (le['Neon-Batch-Isolation-Level'] = he),
                                        me !== void 0 && (le['Neon-Batch-Read-Only'] = String(me)),
                                        ve !== void 0 && (le['Neon-Batch-Deferrable'] = String(ve)));
                                _state.label = 1;
                            case 1:
                                _state.trys.push([1, 3, , 4]);
                                return [
                                    4,
                                    (W !== null && W !== void 0 ? W : fetch)(
                                        ce,
                                        _object_spread(
                                            {
                                                method: 'POST',
                                                body: JSON.stringify(ye),
                                                headers: le,
                                            },
                                            D
                                        )
                                    ),
                                ];
                            case 2:
                                se = _state.sent();
                                return [3, 4];
                            case 3:
                                oe = _state.sent();
                                $ = new Ee('Error connecting to database: '.concat(oe.message));
                                throw (($.sourceError = oe), $);
                            case 4:
                                if (!se.ok) return [3, 6];
                                return [4, se.json()];
                            case 5:
                                _$oe = _state.sent();
                                if (Array.isArray(A)) {
                                    $1 = _$oe.results;
                                    if (!Array.isArray($1))
                                        throw new Ee('Neon internal error: unexpected result format');
                                    return [
                                        2,
                                        $1.map(function (ie, Ce) {
                                            return Ys(ie, {
                                                arrayMode: L,
                                                fullResults: G,
                                                parameterizedQuery: A[Ce],
                                                resultCallback: c,
                                            });
                                        }),
                                    ];
                                } else
                                    return [
                                        2,
                                        Ys(_$oe, {
                                            arrayMode: L,
                                            fullResults: G,
                                            parameterizedQuery: A,
                                            resultCallback: c,
                                        }),
                                    ];
                                return [3, 10];
                            case 6:
                                _$oe1 = se.status;
                                if (!(_$oe1 === 400)) return [3, 8];
                                return [4, se.json()];
                            case 7:
                                (_ref = _state.sent()), ($2 = _ref.message), (ie = _ref.code), (Ce = new Ee($2));
                                throw ((Ce.code = ie), Ce);
                            case 8:
                                return [4, se.text()];
                            case 9:
                                $3 = _state.sent();
                                throw new Ee('Server error (HTTP status '.concat(_$oe1, '): ').concat($3));
                            case 10:
                                return [2];
                        }
                    });
                });
                return _de.apply(this, arguments);
            }
            __name(de, 'de');
            return a2(de, 'execute'), X;
        };
        var Nc = function Nc(r2, e2, t2) {
            var _obj;
            return (
                (_obj = {}),
                _define_property(_obj, Symbol.toStringTag, 'NeonQueryPromise'),
                _define_property(_obj, 'parameterizedQuery', e2),
                _define_property(_obj, 'opts', t2),
                _define_property(_obj, 'then', function (n2, i2) {
                    return r2(e2, t2).then(n2, i2);
                }),
                _define_property(_obj, 'catch', function (n2) {
                    return r2(e2, t2).catch(n2);
                }),
                _define_property(_obj, 'finally', function (n2) {
                    return r2(e2, t2).finally(n2);
                }),
                _obj
            );
        };
        var Ys = function Ys(r2, param) {
            var e2 = param.arrayMode,
                t2 = param.fullResults,
                n2 = param.parameterizedQuery,
                i2 = param.resultCallback;
            var s2 = r2.fields.map(function (c) {
                    return c.name;
                }),
                o2 = r2.fields.map(function (c) {
                    return J.types.getTypeParser(c.dataTypeID);
                }),
                u =
                    e2 === true
                        ? r2.rows.map(function (c) {
                              return c.map(function (h, l2) {
                                  return h === null ? null : o2[l2](h);
                              });
                          })
                        : r2.rows.map(function (c) {
                              return Object.fromEntries(
                                  c.map(function (h, l2) {
                                      return [s2[l2], h === null ? null : o2[l2](h)];
                                  })
                              );
                          });
            return (
                i2 &&
                    i2(n2, r2, u, {
                        arrayMode: e2,
                        fullResults: t2,
                    }),
                t2 ? ((r2.viaNeonFetch = true), (r2.rowAsArray = e2), (r2.rows = u), r2) : u
            );
        };
        var Qc = function Qc(r2, e2) {
            if (e2)
                return {
                    callback: e2,
                    result: void 0,
                };
            var t2,
                n2,
                i2 = a2(function (o2, u) {
                    o2 ? t2(o2) : n2(u);
                }, 'cb'),
                s2 = new r2(function (o2, u) {
                    (n2 = o2), (t2 = u);
                });
            return {
                callback: i2,
                result: s2,
            };
        };
        var Xs = Object.create;
        var Ie = Object.defineProperty;
        var eo = Object.getOwnPropertyDescriptor;
        var to = Object.getOwnPropertyNames;
        var ro = Object.getPrototypeOf;
        var no = Object.prototype.hasOwnProperty;
        var io = /* @__PURE__ */ __name(function (r2, e2, t2) {
            return e2 in r2
                ? Ie(r2, e2, {
                      enumerable: true,
                      configurable: true,
                      writable: true,
                      value: t2,
                  })
                : (r2[e2] = t2);
        }, 'io');
        var a2 = /* @__PURE__ */ __name(function (r2, e2) {
            return Ie(r2, 'name', {
                value: e2,
                configurable: true,
            });
        }, 'a');
        var K = /* @__PURE__ */ __name(function (r2, e2) {
            return function () {
                return r2 && (e2 = r2((r2 = 0))), e2;
            };
        }, 'K');
        var I = /* @__PURE__ */ __name(function (r2, e2) {
            return function () {
                return (
                    e2 ||
                        r2(
                            (e2 = {
                                exports: {},
                            }).exports,
                            e2
                        ),
                    e2.exports
                );
            };
        }, 'I');
        var ee = /* @__PURE__ */ __name(function (r2, e2) {
            for (var t2 in e2)
                Ie(r2, t2, {
                    get: e2[t2],
                    enumerable: true,
                });
        }, 'ee');
        var Cn = /* @__PURE__ */ __name(function (r2, e2, t2, n2) {
            var _iteratorNormalCompletion = true,
                _didIteratorError = false,
                _iteratorError = undefined;
            if ((e2 && typeof e2 == 'object') || typeof e2 == 'function')
                try {
                    var _loop = function () {
                        var i2 = _step.value;
                        !no.call(r2, i2) &&
                            i2 !== t2 &&
                            Ie(r2, i2, {
                                get: function () {
                                    return e2[i2];
                                },
                                enumerable: !(n2 = eo(e2, i2)) || n2.enumerable,
                            });
                    };
                    for (
                        var _iterator = to(e2)[Symbol.iterator](), _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                        _iteratorNormalCompletion = true
                    )
                        _loop();
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            return r2;
        }, 'Cn');
        var We = /* @__PURE__ */ __name(function (r2, e2, t2) {
            return (
                (t2 = r2 != null ? Xs(ro(r2)) : {}),
                Cn(
                    e2 || !r2 || !r2.__esModule
                        ? Ie(t2, 'default', {
                              value: r2,
                              enumerable: true,
                          })
                        : t2,
                    r2
                )
            );
        }, 'We');
        var O = /* @__PURE__ */ __name(function (r2) {
            return Cn(
                Ie({}, '__esModule', {
                    value: true,
                }),
                r2
            );
        }, 'O');
        var T = /* @__PURE__ */ __name(function (r2, e2, t2) {
            return io(r2, (typeof e2 === 'undefined' ? 'undefined' : _type_of(e2)) != 'symbol' ? e2 + '' : e2, t2), t2;
        }, 'T');
        var Pn = I(function (it) {
            'use strict';
            var Tn = function Tn(r2) {
                var e2 = r2.length;
                if (e2 % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
                var t2 = r2.indexOf('=');
                t2 === -1 && (t2 = e2);
                var n2 = t2 === e2 ? 0 : 4 - (t2 % 4);
                return [t2, n2];
            };
            var oo = function oo(r2) {
                var e2 = Tn(r2),
                    t2 = e2[0],
                    n2 = e2[1];
                return ((t2 + n2) * 3) / 4 - n2;
            };
            var ao = function ao(r2, e2, t2) {
                return ((e2 + t2) * 3) / 4 - t2;
            };
            var uo = function uo(r2) {
                var e2,
                    t2 = Tn(r2),
                    n2 = t2[0],
                    i2 = t2[1],
                    s2 = new so(ao(r2, n2, i2)),
                    o2 = 0,
                    u = i2 > 0 ? n2 - 4 : n2,
                    c;
                for (c = 0; c < u; c += 4)
                    (e2 =
                        (te[r2.charCodeAt(c)] << 18) |
                        (te[r2.charCodeAt(c + 1)] << 12) |
                        (te[r2.charCodeAt(c + 2)] << 6) |
                        te[r2.charCodeAt(c + 3)]),
                        (s2[o2++] = (e2 >> 16) & 255),
                        (s2[o2++] = (e2 >> 8) & 255),
                        (s2[o2++] = e2 & 255);
                return (
                    i2 === 2 &&
                        ((e2 = (te[r2.charCodeAt(c)] << 2) | (te[r2.charCodeAt(c + 1)] >> 4)), (s2[o2++] = e2 & 255)),
                    i2 === 1 &&
                        ((e2 =
                            (te[r2.charCodeAt(c)] << 10) |
                            (te[r2.charCodeAt(c + 1)] << 4) |
                            (te[r2.charCodeAt(c + 2)] >> 2)),
                        (s2[o2++] = (e2 >> 8) & 255),
                        (s2[o2++] = e2 & 255)),
                    s2
                );
            };
            var co = function co(r2) {
                return ae[(r2 >> 18) & 63] + ae[(r2 >> 12) & 63] + ae[(r2 >> 6) & 63] + ae[r2 & 63];
            };
            var ho = function ho(r2, e2, t2) {
                for (var n2, i2 = [], s2 = e2; s2 < t2; s2 += 3)
                    (n2 = ((r2[s2] << 16) & 16711680) + ((r2[s2 + 1] << 8) & 65280) + (r2[s2 + 2] & 255)),
                        i2.push(co(n2));
                return i2.join('');
            };
            var lo = function lo(r2) {
                for (var e2, t2 = r2.length, n2 = t2 % 3, i2 = [], s2 = 16383, o2 = 0, u = t2 - n2; o2 < u; o2 += s2)
                    i2.push(ho(r2, o2, o2 + s2 > u ? u : o2 + s2));
                return (
                    n2 === 1
                        ? ((e2 = r2[t2 - 1]), i2.push(ae[e2 >> 2] + ae[(e2 << 4) & 63] + '=='))
                        : n2 === 2 &&
                          ((e2 = (r2[t2 - 2] << 8) + r2[t2 - 1]),
                          i2.push(ae[e2 >> 10] + ae[(e2 >> 4) & 63] + ae[(e2 << 2) & 63] + '=')),
                    i2.join('')
                );
            };
            p2();
            it.byteLength = oo;
            it.toByteArray = uo;
            it.fromByteArray = lo;
            var ae = [],
                te = [],
                so =
                    (typeof Uint8Array === 'undefined' ? 'undefined' : _type_of(Uint8Array)) < 'u' ? Uint8Array : Array,
                Tt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
            for (_e = 0, In = Tt.length; _e < In; ++_e) (ae[_e] = Tt[_e]), (te[Tt.charCodeAt(_e)] = _e);
            var _e, In;
            te['-'.charCodeAt(0)] = 62;
            te['_'.charCodeAt(0)] = 63;
            __name(Tn, 'Tn');
            a2(Tn, 'getLens');
            __name(oo, 'oo');
            a2(oo, 'byteLength');
            __name(ao, 'ao');
            a2(ao, '_byteLength');
            __name(uo, 'uo');
            a2(uo, 'toByteArray');
            __name(co, 'co');
            a2(co, 'tripletToBase64');
            __name(ho, 'ho');
            a2(ho, 'encodeChunk');
            __name(lo, 'lo');
            a2(lo, 'fromByteArray');
        });
        var Bn = I(function (Pt) {
            p2();
            Pt.read = function (r2, e2, t2, n2, i2) {
                var s2,
                    o2,
                    u = i2 * 8 - n2 - 1,
                    c = (1 << u) - 1,
                    h = c >> 1,
                    l2 = -7,
                    m2 = t2 ? i2 - 1 : 0,
                    E = t2 ? -1 : 1,
                    _ = r2[e2 + m2];
                for (
                    m2 += E, s2 = _ & ((1 << -l2) - 1), _ >>= -l2, l2 += u;
                    l2 > 0;
                    s2 = s2 * 256 + r2[e2 + m2], m2 += E, l2 -= 8
                );
                for (
                    o2 = s2 & ((1 << -l2) - 1), s2 >>= -l2, l2 += n2;
                    l2 > 0;
                    o2 = o2 * 256 + r2[e2 + m2], m2 += E, l2 -= 8
                );
                if (s2 === 0) s2 = 1 - h;
                else {
                    if (s2 === c) return o2 ? NaN : (_ ? -1 : 1) * (1 / 0);
                    (o2 = o2 + Math.pow(2, n2)), (s2 = s2 - h);
                }
                return (_ ? -1 : 1) * o2 * Math.pow(2, s2 - n2);
            };
            Pt.write = function (r2, e2, t2, n2, i2, s2) {
                var o2,
                    u,
                    c,
                    h = s2 * 8 - i2 - 1,
                    l2 = (1 << h) - 1,
                    m2 = l2 >> 1,
                    E = i2 === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    _ = n2 ? 0 : s2 - 1,
                    P = n2 ? 1 : -1,
                    N = e2 < 0 || (e2 === 0 && 1 / e2 < 0) ? 1 : 0;
                for (
                    e2 = Math.abs(e2),
                        isNaN(e2) || e2 === 1 / 0
                            ? ((u = isNaN(e2) ? 1 : 0), (o2 = l2))
                            : ((o2 = Math.floor(Math.log(e2) / Math.LN2)),
                              e2 * (c = Math.pow(2, -o2)) < 1 && (o2--, (c *= 2)),
                              o2 + m2 >= 1 ? (e2 += E / c) : (e2 += E * Math.pow(2, 1 - m2)),
                              e2 * c >= 2 && (o2++, (c /= 2)),
                              o2 + m2 >= l2
                                  ? ((u = 0), (o2 = l2))
                                  : o2 + m2 >= 1
                                  ? ((u = (e2 * c - 1) * Math.pow(2, i2)), (o2 = o2 + m2))
                                  : ((u = e2 * Math.pow(2, m2 - 1) * Math.pow(2, i2)), (o2 = 0)));
                    i2 >= 8;
                    r2[t2 + _] = u & 255, _ += P, u /= 256, i2 -= 8
                );
                for (o2 = (o2 << i2) | u, h += i2; h > 0; r2[t2 + _] = o2 & 255, _ += P, o2 /= 256, h -= 8);
                r2[t2 + _ - P] |= N * 128;
            };
        });
        var Kn = I(function (Le) {
            'use strict';
            var fo = function fo() {
                try {
                    var r2 = new Uint8Array(1),
                        e2 = {
                            foo: function foo() {
                                return 42;
                            },
                        };
                    return (
                        Object.setPrototypeOf(e2, Uint8Array.prototype), Object.setPrototypeOf(r2, e2), r2.foo() === 42
                    );
                } catch (e) {
                    return false;
                }
            };
            var fe = function fe(r2) {
                if (r2 > st) throw new RangeError('The value "' + r2 + '" is invalid for option "size"');
                var e2 = new Uint8Array(r2);
                return Object.setPrototypeOf(e2, f2.prototype), e2;
            };
            var f2 = function f2(r2, e2, t2) {
                if (typeof r2 == 'number') {
                    if (typeof e2 == 'string')
                        throw new TypeError('The "string" argument must be of type string. Received type number');
                    return Mt(r2);
                }
                return Dn(r2, e2, t2);
            };
            var Dn = function Dn(r2, e2, t2) {
                if (typeof r2 == 'string') return yo(r2, e2);
                if (ArrayBuffer.isView(r2)) return mo(r2);
                if (r2 == null)
                    throw new TypeError(
                        'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                            (typeof r2 === 'undefined' ? 'undefined' : _type_of(r2))
                    );
                if (
                    ue(r2, ArrayBuffer) ||
                    (r2 && ue(r2.buffer, ArrayBuffer)) ||
                    ((typeof SharedArrayBuffer === 'undefined' ? 'undefined' : _type_of(SharedArrayBuffer)) < 'u' &&
                        (ue(r2, SharedArrayBuffer) || (r2 && ue(r2.buffer, SharedArrayBuffer))))
                )
                    return Rt(r2, e2, t2);
                if (typeof r2 == 'number')
                    throw new TypeError('The "value" argument must not be of type number. Received type number');
                var n2 = r2.valueOf && r2.valueOf();
                if (n2 != null && n2 !== r2) return f2.from(n2, e2, t2);
                var i2 = go(r2);
                if (i2) return i2;
                if (
                    (typeof Symbol === 'undefined' ? 'undefined' : _type_of(Symbol)) < 'u' &&
                    Symbol.toPrimitive != null &&
                    typeof r2[Symbol.toPrimitive] == 'function'
                )
                    return f2.from(r2[Symbol.toPrimitive]('string'), e2, t2);
                throw new TypeError(
                    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                        (typeof r2 === 'undefined' ? 'undefined' : _type_of(r2))
                );
            };
            var On = function On(r2) {
                if (typeof r2 != 'number') throw new TypeError('"size" argument must be of type number');
                if (r2 < 0) throw new RangeError('The value "' + r2 + '" is invalid for option "size"');
            };
            var po = function po(r2, e2, t2) {
                return (
                    On(r2),
                    r2 <= 0
                        ? fe(r2)
                        : e2 !== void 0
                        ? typeof t2 == 'string'
                            ? fe(r2).fill(e2, t2)
                            : fe(r2).fill(e2)
                        : fe(r2)
                );
            };
            var Mt = function Mt(r2) {
                return On(r2), fe(r2 < 0 ? 0 : Dt(r2) | 0);
            };
            var yo = function yo(r2, e2) {
                if (((typeof e2 != 'string' || e2 === '') && (e2 = 'utf8'), !f2.isEncoding(e2)))
                    throw new TypeError('Unknown encoding: ' + e2);
                var t2 = kn(r2, e2) | 0,
                    n2 = fe(t2),
                    i2 = n2.write(r2, e2);
                return i2 !== t2 && (n2 = n2.slice(0, i2)), n2;
            };
            var Lt = function Lt(r2) {
                var e2 = r2.length < 0 ? 0 : Dt(r2.length) | 0,
                    t2 = fe(e2);
                for (var n2 = 0; n2 < e2; n2 += 1) t2[n2] = r2[n2] & 255;
                return t2;
            };
            var mo = function mo(r2) {
                if (ue(r2, Uint8Array)) {
                    var e2 = new Uint8Array(r2);
                    return Rt(e2.buffer, e2.byteOffset, e2.byteLength);
                }
                return Lt(r2);
            };
            var Rt = function Rt(r2, e2, t2) {
                if (e2 < 0 || r2.byteLength < e2) throw new RangeError('"offset" is outside of buffer bounds');
                if (r2.byteLength < e2 + (t2 || 0)) throw new RangeError('"length" is outside of buffer bounds');
                var n2;
                return (
                    e2 === void 0 && t2 === void 0
                        ? (n2 = new Uint8Array(r2))
                        : t2 === void 0
                        ? (n2 = new Uint8Array(r2, e2))
                        : (n2 = new Uint8Array(r2, e2, t2)),
                    Object.setPrototypeOf(n2, f2.prototype),
                    n2
                );
            };
            var go = function go(r2) {
                if (f2.isBuffer(r2)) {
                    var e2 = Dt(r2.length) | 0,
                        t2 = fe(e2);
                    return t2.length === 0 || r2.copy(t2, 0, 0, e2), t2;
                }
                if (r2.length !== void 0) return typeof r2.length != 'number' || kt(r2.length) ? fe(0) : Lt(r2);
                if (r2.type === 'Buffer' && Array.isArray(r2.data)) return Lt(r2.data);
            };
            var Dt = function Dt(r2) {
                if (r2 >= st)
                    throw new RangeError(
                        'Attempt to allocate Buffer larger than maximum size: 0x' + st.toString(16) + ' bytes'
                    );
                return r2 | 0;
            };
            var wo = function wo(r2) {
                return +r2 != r2 && (r2 = 0), f2.alloc(+r2);
            };
            var kn = function kn(r2, e2) {
                if (f2.isBuffer(r2)) return r2.length;
                if (ArrayBuffer.isView(r2) || ue(r2, ArrayBuffer)) return r2.byteLength;
                if (typeof r2 != 'string')
                    throw new TypeError(
                        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                            (typeof r2 === 'undefined' ? 'undefined' : _type_of(r2))
                    );
                var t2 = r2.length,
                    n2 = arguments.length > 2 && arguments[2] === true;
                if (!n2 && t2 === 0) return 0;
                var i2 = false;
                for (;;)
                    switch (e2) {
                        case 'ascii':
                        case 'latin1':
                        case 'binary':
                            return t2;
                        case 'utf8':
                        case 'utf-8':
                            return Ft(r2).length;
                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le':
                            return t2 * 2;
                        case 'hex':
                            return t2 >>> 1;
                        case 'base64':
                            return $n(r2).length;
                        default:
                            if (i2) return n2 ? -1 : Ft(r2).length;
                            (e2 = ('' + e2).toLowerCase()), (i2 = true);
                    }
            };
            var bo = function bo(r2, e2, t2) {
                var n2 = false;
                if (
                    ((e2 === void 0 || e2 < 0) && (e2 = 0),
                    e2 > this.length ||
                        ((t2 === void 0 || t2 > this.length) && (t2 = this.length), t2 <= 0) ||
                        ((t2 >>>= 0), (e2 >>>= 0), t2 <= e2))
                )
                    return '';
                for (r2 || (r2 = 'utf8'); ; )
                    switch (r2) {
                        case 'hex':
                            return Po(this, e2, t2);
                        case 'utf8':
                        case 'utf-8':
                            return qn(this, e2, t2);
                        case 'ascii':
                            return Io(this, e2, t2);
                        case 'latin1':
                        case 'binary':
                            return To(this, e2, t2);
                        case 'base64':
                            return Ao(this, e2, t2);
                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le':
                            return Bo(this, e2, t2);
                        default:
                            if (n2) throw new TypeError('Unknown encoding: ' + r2);
                            (r2 = (r2 + '').toLowerCase()), (n2 = true);
                    }
            };
            var Ae = function Ae(r2, e2, t2) {
                var n2 = r2[e2];
                (r2[e2] = r2[t2]), (r2[t2] = n2);
            };
            var Un = function Un(r2, e2, t2, n2, i2) {
                if (r2.length === 0) return -1;
                if (
                    (typeof t2 == 'string'
                        ? ((n2 = t2), (t2 = 0))
                        : t2 > 2147483647
                        ? (t2 = 2147483647)
                        : t2 < -2147483648 && (t2 = -2147483648),
                    (t2 = +t2),
                    kt(t2) && (t2 = i2 ? 0 : r2.length - 1),
                    t2 < 0 && (t2 = r2.length + t2),
                    t2 >= r2.length)
                ) {
                    if (i2) return -1;
                    t2 = r2.length - 1;
                } else if (t2 < 0)
                    if (i2) t2 = 0;
                    else return -1;
                if ((typeof e2 == 'string' && (e2 = f2.from(e2, n2)), f2.isBuffer(e2)))
                    return e2.length === 0 ? -1 : Rn(r2, e2, t2, n2, i2);
                if (typeof e2 == 'number')
                    return (
                        (e2 = e2 & 255),
                        typeof Uint8Array.prototype.indexOf == 'function'
                            ? i2
                                ? Uint8Array.prototype.indexOf.call(r2, e2, t2)
                                : Uint8Array.prototype.lastIndexOf.call(r2, e2, t2)
                            : Rn(r2, [e2], t2, n2, i2)
                    );
                throw new TypeError('val must be string, number or Buffer');
            };
            var Rn = function Rn(r2, e2, t2, n2, i2) {
                var s2 = 1,
                    o2 = r2.length,
                    u = e2.length;
                if (
                    n2 !== void 0 &&
                    ((n2 = String(n2).toLowerCase()),
                    n2 === 'ucs2' || n2 === 'ucs-2' || n2 === 'utf16le' || n2 === 'utf-16le')
                ) {
                    if (r2.length < 2 || e2.length < 2) return -1;
                    (s2 = 2), (o2 /= 2), (u /= 2), (t2 /= 2);
                }
                function c(l2, m2) {
                    return s2 === 1 ? l2[m2] : l2.readUInt16BE(m2 * s2);
                }
                __name(c, 'c');
                a2(c, 'read');
                var h;
                if (i2) {
                    var l2 = -1;
                    for (h = t2; h < o2; h++)
                        if (c(r2, h) === c(e2, l2 === -1 ? 0 : h - l2)) {
                            if ((l2 === -1 && (l2 = h), h - l2 + 1 === u)) return l2 * s2;
                        } else l2 !== -1 && (h -= h - l2), (l2 = -1);
                } else
                    for (t2 + u > o2 && (t2 = o2 - u), h = t2; h >= 0; h--) {
                        var l21 = true;
                        for (var m2 = 0; m2 < u; m2++)
                            if (c(r2, h + m2) !== c(e2, m2)) {
                                l21 = false;
                                break;
                            }
                        if (l21) return h;
                    }
                return -1;
            };
            var So = function So(r2, e2, t2, n2) {
                t2 = Number(t2) || 0;
                var i2 = r2.length - t2;
                n2 ? ((n2 = Number(n2)), n2 > i2 && (n2 = i2)) : (n2 = i2);
                var s2 = e2.length;
                n2 > s2 / 2 && (n2 = s2 / 2);
                var o2;
                for (o2 = 0; o2 < n2; ++o2) {
                    var u = parseInt(e2.substr(o2 * 2, 2), 16);
                    if (kt(u)) return o2;
                    r2[t2 + o2] = u;
                }
                return o2;
            };
            var xo = function xo(r2, e2, t2, n2) {
                return ot(Ft(e2, r2.length - t2), r2, t2, n2);
            };
            var Eo = function Eo(r2, e2, t2, n2) {
                return ot(Mo(e2), r2, t2, n2);
            };
            var vo = function vo(r2, e2, t2, n2) {
                return ot($n(e2), r2, t2, n2);
            };
            var _o = function _o(r2, e2, t2, n2) {
                return ot(Do(e2, r2.length - t2), r2, t2, n2);
            };
            var Ao = function Ao(r2, e2, t2) {
                return e2 === 0 && t2 === r2.length ? Bt.fromByteArray(r2) : Bt.fromByteArray(r2.slice(e2, t2));
            };
            var qn = function qn(r2, e2, t2) {
                t2 = Math.min(r2.length, t2);
                var n2 = [],
                    i2 = e2;
                for (; i2 < t2; ) {
                    var s2 = r2[i2],
                        o2 = null,
                        u = s2 > 239 ? 4 : s2 > 223 ? 3 : s2 > 191 ? 2 : 1;
                    if (i2 + u <= t2) {
                        var c = void 0,
                            h = void 0,
                            l2 = void 0,
                            m2 = void 0;
                        switch (u) {
                            case 1:
                                s2 < 128 && (o2 = s2);
                                break;
                            case 2:
                                (c = r2[i2 + 1]),
                                    (c & 192) === 128 && ((m2 = ((s2 & 31) << 6) | (c & 63)), m2 > 127 && (o2 = m2));
                                break;
                            case 3:
                                (c = r2[i2 + 1]),
                                    (h = r2[i2 + 2]),
                                    (c & 192) === 128 &&
                                        (h & 192) === 128 &&
                                        ((m2 = ((s2 & 15) << 12) | ((c & 63) << 6) | (h & 63)),
                                        m2 > 2047 && (m2 < 55296 || m2 > 57343) && (o2 = m2));
                                break;
                            case 4:
                                (c = r2[i2 + 1]),
                                    (h = r2[i2 + 2]),
                                    (l2 = r2[i2 + 3]),
                                    (c & 192) === 128 &&
                                        (h & 192) === 128 &&
                                        (l2 & 192) === 128 &&
                                        ((m2 = ((s2 & 15) << 18) | ((c & 63) << 12) | ((h & 63) << 6) | (l2 & 63)),
                                        m2 > 65535 && m2 < 1114112 && (o2 = m2));
                        }
                    }
                    o2 === null
                        ? ((o2 = 65533), (u = 1))
                        : o2 > 65535 &&
                          ((o2 -= 65536), n2.push(((o2 >>> 10) & 1023) | 55296), (o2 = 56320 | (o2 & 1023))),
                        n2.push(o2),
                        (i2 += u);
                }
                return Co(n2);
            };
            var Co = function Co(r2) {
                var e2 = r2.length;
                if (e2 <= Fn) return String.fromCharCode.apply(String, r2);
                var t2 = '',
                    n2 = 0;
                for (; n2 < e2; ) t2 += String.fromCharCode.apply(String, r2.slice(n2, (n2 += Fn)));
                return t2;
            };
            var Io = function Io(r2, e2, t2) {
                var n2 = '';
                t2 = Math.min(r2.length, t2);
                for (var i2 = e2; i2 < t2; ++i2) n2 += String.fromCharCode(r2[i2] & 127);
                return n2;
            };
            var To = function To(r2, e2, t2) {
                var n2 = '';
                t2 = Math.min(r2.length, t2);
                for (var i2 = e2; i2 < t2; ++i2) n2 += String.fromCharCode(r2[i2]);
                return n2;
            };
            var Po = function Po(r2, e2, t2) {
                var n2 = r2.length;
                (!e2 || e2 < 0) && (e2 = 0), (!t2 || t2 < 0 || t2 > n2) && (t2 = n2);
                var i2 = '';
                for (var s2 = e2; s2 < t2; ++s2) i2 += Oo[r2[s2]];
                return i2;
            };
            var Bo = function Bo(r2, e2, t2) {
                var n2 = r2.slice(e2, t2),
                    i2 = '';
                for (var s2 = 0; s2 < n2.length - 1; s2 += 2) i2 += String.fromCharCode(n2[s2] + n2[s2 + 1] * 256);
                return i2;
            };
            var U = function U(r2, e2, t2) {
                if (r2 % 1 !== 0 || r2 < 0) throw new RangeError('offset is not uint');
                if (r2 + e2 > t2) throw new RangeError('Trying to access beyond buffer length');
            };
            var z2 = function z2(r2, e2, t2, n2, i2, s2) {
                if (!f2.isBuffer(r2)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (e2 > i2 || e2 < s2) throw new RangeError('"value" argument is out of bounds');
                if (t2 + n2 > r2.length) throw new RangeError('Index out of range');
            };
            var Nn = function Nn(r2, e2, t2, n2, i2) {
                Gn(e2, n2, i2, r2, t2, 7);
                var s2 = Number(e2 & BigInt(4294967295));
                (r2[t2++] = s2),
                    (s2 = s2 >> 8),
                    (r2[t2++] = s2),
                    (s2 = s2 >> 8),
                    (r2[t2++] = s2),
                    (s2 = s2 >> 8),
                    (r2[t2++] = s2);
                var o2 = Number((e2 >> BigInt(32)) & BigInt(4294967295));
                return (
                    (r2[t2++] = o2),
                    (o2 = o2 >> 8),
                    (r2[t2++] = o2),
                    (o2 = o2 >> 8),
                    (r2[t2++] = o2),
                    (o2 = o2 >> 8),
                    (r2[t2++] = o2),
                    t2
                );
            };
            var Qn = function Qn(r2, e2, t2, n2, i2) {
                Gn(e2, n2, i2, r2, t2, 7);
                var s2 = Number(e2 & BigInt(4294967295));
                (r2[t2 + 7] = s2),
                    (s2 = s2 >> 8),
                    (r2[t2 + 6] = s2),
                    (s2 = s2 >> 8),
                    (r2[t2 + 5] = s2),
                    (s2 = s2 >> 8),
                    (r2[t2 + 4] = s2);
                var o2 = Number((e2 >> BigInt(32)) & BigInt(4294967295));
                return (
                    (r2[t2 + 3] = o2),
                    (o2 = o2 >> 8),
                    (r2[t2 + 2] = o2),
                    (o2 = o2 >> 8),
                    (r2[t2 + 1] = o2),
                    (o2 = o2 >> 8),
                    (r2[t2] = o2),
                    t2 + 8
                );
            };
            var Wn = function Wn(r2, e2, t2, n2, i2, s2) {
                if (t2 + n2 > r2.length) throw new RangeError('Index out of range');
                if (t2 < 0) throw new RangeError('Index out of range');
            };
            var jn = function jn(r2, e2, t2, n2, i2) {
                return (
                    (e2 = +e2),
                    (t2 = t2 >>> 0),
                    i2 || Wn(r2, e2, t2, 4, 34028234663852886e22, -34028234663852886e22),
                    Pe.write(r2, e2, t2, n2, 23, 4),
                    t2 + 4
                );
            };
            var Hn = function Hn(r2, e2, t2, n2, i2) {
                return (
                    (e2 = +e2),
                    (t2 = t2 >>> 0),
                    i2 || Wn(r2, e2, t2, 8, 17976931348623157e292, -17976931348623157e292),
                    Pe.write(r2, e2, t2, n2, 52, 8),
                    t2 + 8
                );
            };
            var Ot = function Ot(r2, e2, t2) {
                var _a4;
                var n2;
                Te[r2] =
                    ((n2 =
                        ((_a4 = /*#__PURE__*/ (function (t2) {
                            _inherits(_a4, t2);
                            var _super = _create_super(_a4);
                            function _a4() {
                                _class_call_check(this, _a4);
                                var _this;
                                (_this = _super.call(this)),
                                    Object.defineProperty(_assert_this_initialized(_this), 'message', {
                                        value: e2.apply(_assert_this_initialized(_this), arguments),
                                        writable: true,
                                        configurable: true,
                                    }),
                                    (_this.name = ''.concat(_this.name, ' [').concat(r2, ']')),
                                    _this.stack,
                                    delete _this.name;
                                return _possible_constructor_return(_this);
                            }
                            _create_class(_a4, [
                                {
                                    key: 'code',
                                    get: function get() {
                                        return r2;
                                    },
                                    set: function set(s2) {
                                        Object.defineProperty(this, 'code', {
                                            configurable: true,
                                            enumerable: true,
                                            value: s2,
                                            writable: true,
                                        });
                                    },
                                },
                                {
                                    key: 'toString',
                                    value: function toString() {
                                        return ''.concat(this.name, ' [').concat(r2, ']: ').concat(this.message);
                                    },
                                },
                            ]);
                            return _a4;
                        })(t2)),
                        __name(_a4, 'n'),
                        _a4)),
                    a2(n2, 'NodeError'),
                    n2);
            };
            var Mn = function Mn(r2) {
                var e2 = '',
                    t2 = r2.length,
                    n2 = r2[0] === '-' ? 1 : 0;
                for (; t2 >= n2 + 4; t2 -= 3) e2 = '_'.concat(r2.slice(t2 - 3, t2)).concat(e2);
                return ''.concat(r2.slice(0, t2)).concat(e2);
            };
            var Lo = function Lo(r2, e2, t2) {
                Be(e2, 'offset'), (r2[e2] === void 0 || r2[e2 + t2] === void 0) && je(e2, r2.length - (t2 + 1));
            };
            var Gn = function Gn(r2, e2, t2, n2, i2, s2) {
                if (r2 > t2 || r2 < e2) {
                    var o2 = (typeof e2 === 'undefined' ? 'undefined' : _type_of(e2)) == 'bigint' ? 'n' : '',
                        u;
                    throw (
                        (s2 > 3
                            ? e2 === 0 || e2 === BigInt(0)
                                ? (u = '>= 0'
                                      .concat(o2, ' and < 2')
                                      .concat(o2, ' ** ')
                                      .concat((s2 + 1) * 8)
                                      .concat(o2))
                                : (u = '>= -(2'
                                      .concat(o2, ' ** ')
                                      .concat((s2 + 1) * 8 - 1)
                                      .concat(o2, ') and < 2 ** ')
                                      .concat((s2 + 1) * 8 - 1)
                                      .concat(o2))
                            : (u = '>= '.concat(e2).concat(o2, ' and <= ').concat(t2).concat(o2)),
                        new Te.ERR_OUT_OF_RANGE('value', u, r2))
                    );
                }
                Lo(n2, i2, s2);
            };
            var Be = function Be(r2, e2) {
                if (typeof r2 != 'number') throw new Te.ERR_INVALID_ARG_TYPE(e2, 'number', r2);
            };
            var je = function je(r2, e2, t2) {
                throw Math.floor(r2) !== r2
                    ? (Be(r2, t2), new Te.ERR_OUT_OF_RANGE(t2 || 'offset', 'an integer', r2))
                    : e2 < 0
                    ? new Te.ERR_BUFFER_OUT_OF_BOUNDS()
                    : new Te.ERR_OUT_OF_RANGE(t2 || 'offset', '>= '.concat(t2 ? 1 : 0, ' and <= ').concat(e2), r2);
            };
            var Fo = function Fo(r2) {
                if (((r2 = r2.split('=')[0]), (r2 = r2.trim().replace(Ro, '')), r2.length < 2)) return '';
                for (; r2.length % 4 !== 0; ) r2 = r2 + '=';
                return r2;
            };
            var Ft = function Ft(r2, e2) {
                e2 = e2 || 1 / 0;
                var t2,
                    n2 = r2.length,
                    i2 = null,
                    s2 = [];
                for (var o2 = 0; o2 < n2; ++o2) {
                    if (((t2 = r2.charCodeAt(o2)), t2 > 55295 && t2 < 57344)) {
                        if (!i2) {
                            if (t2 > 56319) {
                                (e2 -= 3) > -1 && s2.push(239, 191, 189);
                                continue;
                            } else if (o2 + 1 === n2) {
                                (e2 -= 3) > -1 && s2.push(239, 191, 189);
                                continue;
                            }
                            i2 = t2;
                            continue;
                        }
                        if (t2 < 56320) {
                            (e2 -= 3) > -1 && s2.push(239, 191, 189), (i2 = t2);
                            continue;
                        }
                        t2 = (((i2 - 55296) << 10) | (t2 - 56320)) + 65536;
                    } else i2 && (e2 -= 3) > -1 && s2.push(239, 191, 189);
                    if (((i2 = null), t2 < 128)) {
                        if ((e2 -= 1) < 0) break;
                        s2.push(t2);
                    } else if (t2 < 2048) {
                        if ((e2 -= 2) < 0) break;
                        s2.push((t2 >> 6) | 192, (t2 & 63) | 128);
                    } else if (t2 < 65536) {
                        if ((e2 -= 3) < 0) break;
                        s2.push((t2 >> 12) | 224, ((t2 >> 6) & 63) | 128, (t2 & 63) | 128);
                    } else if (t2 < 1114112) {
                        if ((e2 -= 4) < 0) break;
                        s2.push((t2 >> 18) | 240, ((t2 >> 12) & 63) | 128, ((t2 >> 6) & 63) | 128, (t2 & 63) | 128);
                    } else throw new Error('Invalid code point');
                }
                return s2;
            };
            var Mo = function Mo(r2) {
                var e2 = [];
                for (var t2 = 0; t2 < r2.length; ++t2) e2.push(r2.charCodeAt(t2) & 255);
                return e2;
            };
            var Do = function Do(r2, e2) {
                var t2,
                    n2,
                    i2,
                    s2 = [];
                for (var o2 = 0; o2 < r2.length && !((e2 -= 2) < 0); ++o2)
                    (t2 = r2.charCodeAt(o2)), (n2 = t2 >> 8), (i2 = t2 % 256), s2.push(i2), s2.push(n2);
                return s2;
            };
            var $n = function $n(r2) {
                return Bt.toByteArray(Fo(r2));
            };
            var ot = function ot(r2, e2, t2, n2) {
                var i2;
                for (i2 = 0; i2 < n2 && !(i2 + t2 >= e2.length || i2 >= r2.length); ++i2) e2[i2 + t2] = r2[i2];
                return i2;
            };
            var ue = function ue(r2, e2) {
                return (
                    _instanceof(r2, e2) ||
                    (r2 != null &&
                        r2.constructor != null &&
                        r2.constructor.name != null &&
                        r2.constructor.name === e2.name)
                );
            };
            var kt = function kt(r2) {
                return r2 !== r2;
            };
            var ge = function ge(r2) {
                return (typeof BigInt === 'undefined' ? 'undefined' : _type_of(BigInt)) > 'u' ? ko : r2;
            };
            var ko = function ko() {
                throw new Error('BigInt not supported');
            };
            p2();
            var Bt = Pn(),
                Pe = Bn(),
                Ln =
                    typeof Symbol == 'function' && typeof Symbol.for == 'function'
                        ? Symbol.for('nodejs.util.inspect.custom')
                        : null;
            Le.Buffer = f2;
            Le.SlowBuffer = wo;
            Le.INSPECT_MAX_BYTES = 50;
            var st = 2147483647;
            Le.kMaxLength = st;
            f2.TYPED_ARRAY_SUPPORT = fo();
            !f2.TYPED_ARRAY_SUPPORT &&
                (typeof console === 'undefined' ? 'undefined' : _type_of(console)) < 'u' &&
                typeof console.error == 'function' &&
                console.error(
                    'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
                );
            __name(fo, 'fo');
            a2(fo, 'typedArraySupport');
            Object.defineProperty(f2.prototype, 'parent', {
                enumerable: true,
                get: function get() {
                    if (f2.isBuffer(this)) return this.buffer;
                },
            });
            Object.defineProperty(f2.prototype, 'offset', {
                enumerable: true,
                get: function get() {
                    if (f2.isBuffer(this)) return this.byteOffset;
                },
            });
            __name(fe, 'fe');
            a2(fe, 'createBuffer');
            __name(f2, 'f');
            a2(f2, 'Buffer');
            f2.poolSize = 8192;
            __name(Dn, 'Dn');
            a2(Dn, 'from');
            f2.from = function (r2, e2, t2) {
                return Dn(r2, e2, t2);
            };
            Object.setPrototypeOf(f2.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(f2, Uint8Array);
            __name(On, 'On');
            a2(On, 'assertSize');
            __name(po, 'po');
            a2(po, 'alloc');
            f2.alloc = function (r2, e2, t2) {
                return po(r2, e2, t2);
            };
            __name(Mt, 'Mt');
            a2(Mt, 'allocUnsafe');
            f2.allocUnsafe = function (r2) {
                return Mt(r2);
            };
            f2.allocUnsafeSlow = function (r2) {
                return Mt(r2);
            };
            __name(yo, 'yo');
            a2(yo, 'fromString');
            __name(Lt, 'Lt');
            a2(Lt, 'fromArrayLike');
            __name(mo, 'mo');
            a2(mo, 'fromArrayView');
            __name(Rt, 'Rt');
            a2(Rt, 'fromArrayBuffer');
            __name(go, 'go');
            a2(go, 'fromObject');
            __name(Dt, 'Dt');
            a2(Dt, 'checked');
            __name(wo, 'wo');
            a2(wo, 'SlowBuffer');
            f2.isBuffer = a2(function (e2) {
                return e2 != null && e2._isBuffer === true && e2 !== f2.prototype;
            }, 'isBuffer');
            f2.compare = a2(function (e2, t2) {
                if (
                    (ue(e2, Uint8Array) && (e2 = f2.from(e2, e2.offset, e2.byteLength)),
                    ue(t2, Uint8Array) && (t2 = f2.from(t2, t2.offset, t2.byteLength)),
                    !f2.isBuffer(e2) || !f2.isBuffer(t2))
                )
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (e2 === t2) return 0;
                var n2 = e2.length,
                    i2 = t2.length;
                for (var s2 = 0, o2 = Math.min(n2, i2); s2 < o2; ++s2)
                    if (e2[s2] !== t2[s2]) {
                        (n2 = e2[s2]), (i2 = t2[s2]);
                        break;
                    }
                return n2 < i2 ? -1 : i2 < n2 ? 1 : 0;
            }, 'compare');
            f2.isEncoding = a2(function (e2) {
                switch (String(e2).toLowerCase()) {
                    case 'hex':
                    case 'utf8':
                    case 'utf-8':
                    case 'ascii':
                    case 'latin1':
                    case 'binary':
                    case 'base64':
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                        return true;
                    default:
                        return false;
                }
            }, 'isEncoding');
            f2.concat = a2(function (e2, t2) {
                if (!Array.isArray(e2)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (e2.length === 0) return f2.alloc(0);
                var n2;
                if (t2 === void 0) for (t2 = 0, n2 = 0; n2 < e2.length; ++n2) t2 += e2[n2].length;
                var i2 = f2.allocUnsafe(t2),
                    s2 = 0;
                for (n2 = 0; n2 < e2.length; ++n2) {
                    var o2 = e2[n2];
                    if (ue(o2, Uint8Array))
                        s2 + o2.length > i2.length
                            ? (f2.isBuffer(o2) || (o2 = f2.from(o2)), o2.copy(i2, s2))
                            : Uint8Array.prototype.set.call(i2, o2, s2);
                    else if (f2.isBuffer(o2)) o2.copy(i2, s2);
                    else throw new TypeError('"list" argument must be an Array of Buffers');
                    s2 += o2.length;
                }
                return i2;
            }, 'concat');
            __name(kn, 'kn');
            a2(kn, 'byteLength');
            f2.byteLength = kn;
            __name(bo, 'bo');
            a2(bo, 'slowToString');
            f2.prototype._isBuffer = true;
            __name(Ae, 'Ae');
            a2(Ae, 'swap');
            f2.prototype.swap16 = a2(function () {
                var e2 = this.length;
                if (e2 % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
                for (var t2 = 0; t2 < e2; t2 += 2) Ae(this, t2, t2 + 1);
                return this;
            }, 'swap16');
            f2.prototype.swap32 = a2(function () {
                var e2 = this.length;
                if (e2 % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
                for (var t2 = 0; t2 < e2; t2 += 4) Ae(this, t2, t2 + 3), Ae(this, t2 + 1, t2 + 2);
                return this;
            }, 'swap32');
            f2.prototype.swap64 = a2(function () {
                var e2 = this.length;
                if (e2 % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
                for (var t2 = 0; t2 < e2; t2 += 8)
                    Ae(this, t2, t2 + 7), Ae(this, t2 + 1, t2 + 6), Ae(this, t2 + 2, t2 + 5), Ae(this, t2 + 3, t2 + 4);
                return this;
            }, 'swap64');
            f2.prototype.toString = a2(function () {
                var e2 = this.length;
                return e2 === 0 ? '' : arguments.length === 0 ? qn(this, 0, e2) : bo.apply(this, arguments);
            }, 'toString');
            f2.prototype.toLocaleString = f2.prototype.toString;
            f2.prototype.equals = a2(function (e2) {
                if (!f2.isBuffer(e2)) throw new TypeError('Argument must be a Buffer');
                return this === e2 ? true : f2.compare(this, e2) === 0;
            }, 'equals');
            f2.prototype.inspect = a2(function () {
                var e2 = '',
                    t2 = Le.INSPECT_MAX_BYTES;
                return (
                    (e2 = this.toString('hex', 0, t2)
                        .replace(/(.{2})/g, '$1 ')
                        .trim()),
                    this.length > t2 && (e2 += ' ... '),
                    '<Buffer ' + e2 + '>'
                );
            }, 'inspect');
            Ln && (f2.prototype[Ln] = f2.prototype.inspect);
            f2.prototype.compare = a2(function (e2, t2, n2, i2, s2) {
                if ((ue(e2, Uint8Array) && (e2 = f2.from(e2, e2.offset, e2.byteLength)), !f2.isBuffer(e2)))
                    throw new TypeError(
                        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                            (typeof e2 === 'undefined' ? 'undefined' : _type_of(e2))
                    );
                if (
                    (t2 === void 0 && (t2 = 0),
                    n2 === void 0 && (n2 = e2 ? e2.length : 0),
                    i2 === void 0 && (i2 = 0),
                    s2 === void 0 && (s2 = this.length),
                    t2 < 0 || n2 > e2.length || i2 < 0 || s2 > this.length)
                )
                    throw new RangeError('out of range index');
                if (i2 >= s2 && t2 >= n2) return 0;
                if (i2 >= s2) return -1;
                if (t2 >= n2) return 1;
                if (((t2 >>>= 0), (n2 >>>= 0), (i2 >>>= 0), (s2 >>>= 0), this === e2)) return 0;
                var o2 = s2 - i2,
                    u = n2 - t2,
                    c = Math.min(o2, u),
                    h = this.slice(i2, s2),
                    l2 = e2.slice(t2, n2);
                for (var m2 = 0; m2 < c; ++m2)
                    if (h[m2] !== l2[m2]) {
                        (o2 = h[m2]), (u = l2[m2]);
                        break;
                    }
                return o2 < u ? -1 : u < o2 ? 1 : 0;
            }, 'compare');
            __name(Un, 'Un');
            a2(Un, 'bidirectionalIndexOf');
            __name(Rn, 'Rn');
            a2(Rn, 'arrayIndexOf');
            f2.prototype.includes = a2(function (e2, t2, n2) {
                return this.indexOf(e2, t2, n2) !== -1;
            }, 'includes');
            f2.prototype.indexOf = a2(function (e2, t2, n2) {
                return Un(this, e2, t2, n2, true);
            }, 'indexOf');
            f2.prototype.lastIndexOf = a2(function (e2, t2, n2) {
                return Un(this, e2, t2, n2, false);
            }, 'lastIndexOf');
            __name(So, 'So');
            a2(So, 'hexWrite');
            __name(xo, 'xo');
            a2(xo, 'utf8Write');
            __name(Eo, 'Eo');
            a2(Eo, 'asciiWrite');
            __name(vo, 'vo');
            a2(vo, 'base64Write');
            __name(_o, '_o');
            a2(_o, 'ucs2Write');
            f2.prototype.write = a2(function (e2, t2, n2, i2) {
                if (t2 === void 0) (i2 = 'utf8'), (n2 = this.length), (t2 = 0);
                else if (n2 === void 0 && typeof t2 == 'string') (i2 = t2), (n2 = this.length), (t2 = 0);
                else if (isFinite(t2))
                    (t2 = t2 >>> 0),
                        isFinite(n2) ? ((n2 = n2 >>> 0), i2 === void 0 && (i2 = 'utf8')) : ((i2 = n2), (n2 = void 0));
                else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
                var s2 = this.length - t2;
                if (
                    ((n2 === void 0 || n2 > s2) && (n2 = s2), (e2.length > 0 && (n2 < 0 || t2 < 0)) || t2 > this.length)
                )
                    throw new RangeError('Attempt to write outside buffer bounds');
                i2 || (i2 = 'utf8');
                var o2 = false;
                for (;;)
                    switch (i2) {
                        case 'hex':
                            return So(this, e2, t2, n2);
                        case 'utf8':
                        case 'utf-8':
                            return xo(this, e2, t2, n2);
                        case 'ascii':
                        case 'latin1':
                        case 'binary':
                            return Eo(this, e2, t2, n2);
                        case 'base64':
                            return vo(this, e2, t2, n2);
                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le':
                            return _o(this, e2, t2, n2);
                        default:
                            if (o2) throw new TypeError('Unknown encoding: ' + i2);
                            (i2 = ('' + i2).toLowerCase()), (o2 = true);
                    }
            }, 'write');
            f2.prototype.toJSON = a2(function () {
                return {
                    type: 'Buffer',
                    data: Array.prototype.slice.call(this._arr || this, 0),
                };
            }, 'toJSON');
            __name(Ao, 'Ao');
            a2(Ao, 'base64Slice');
            __name(qn, 'qn');
            a2(qn, 'utf8Slice');
            var Fn = 4096;
            __name(Co, 'Co');
            a2(Co, 'decodeCodePointsArray');
            __name(Io, 'Io');
            a2(Io, 'asciiSlice');
            __name(To, 'To');
            a2(To, 'latin1Slice');
            __name(Po, 'Po');
            a2(Po, 'hexSlice');
            __name(Bo, 'Bo');
            a2(Bo, 'utf16leSlice');
            f2.prototype.slice = a2(function (e2, t2) {
                var n2 = this.length;
                (e2 = ~~e2),
                    (t2 = t2 === void 0 ? n2 : ~~t2),
                    e2 < 0 ? ((e2 += n2), e2 < 0 && (e2 = 0)) : e2 > n2 && (e2 = n2),
                    t2 < 0 ? ((t2 += n2), t2 < 0 && (t2 = 0)) : t2 > n2 && (t2 = n2),
                    t2 < e2 && (t2 = e2);
                var i2 = this.subarray(e2, t2);
                return Object.setPrototypeOf(i2, f2.prototype), i2;
            }, 'slice');
            __name(U, 'U');
            a2(U, 'checkOffset');
            f2.prototype.readUintLE = f2.prototype.readUIntLE = a2(function (e2, t2, n2) {
                (e2 = e2 >>> 0), (t2 = t2 >>> 0), n2 || U(e2, t2, this.length);
                var i2 = this[e2],
                    s2 = 1,
                    o2 = 0;
                for (; ++o2 < t2 && (s2 *= 256); ) i2 += this[e2 + o2] * s2;
                return i2;
            }, 'readUIntLE');
            f2.prototype.readUintBE = f2.prototype.readUIntBE = a2(function (e2, t2, n2) {
                (e2 = e2 >>> 0), (t2 = t2 >>> 0), n2 || U(e2, t2, this.length);
                var i2 = this[e2 + --t2],
                    s2 = 1;
                for (; t2 > 0 && (s2 *= 256); ) i2 += this[e2 + --t2] * s2;
                return i2;
            }, 'readUIntBE');
            f2.prototype.readUint8 = f2.prototype.readUInt8 = a2(function (e2, t2) {
                return (e2 = e2 >>> 0), t2 || U(e2, 1, this.length), this[e2];
            }, 'readUInt8');
            f2.prototype.readUint16LE = f2.prototype.readUInt16LE = a2(function (e2, t2) {
                return (e2 = e2 >>> 0), t2 || U(e2, 2, this.length), this[e2] | (this[e2 + 1] << 8);
            }, 'readUInt16LE');
            f2.prototype.readUint16BE = f2.prototype.readUInt16BE = a2(function (e2, t2) {
                return (e2 = e2 >>> 0), t2 || U(e2, 2, this.length), (this[e2] << 8) | this[e2 + 1];
            }, 'readUInt16BE');
            f2.prototype.readUint32LE = f2.prototype.readUInt32LE = a2(function (e2, t2) {
                return (
                    (e2 = e2 >>> 0),
                    t2 || U(e2, 4, this.length),
                    (this[e2] | (this[e2 + 1] << 8) | (this[e2 + 2] << 16)) + this[e2 + 3] * 16777216
                );
            }, 'readUInt32LE');
            f2.prototype.readUint32BE = f2.prototype.readUInt32BE = a2(function (e2, t2) {
                return (
                    (e2 = e2 >>> 0),
                    t2 || U(e2, 4, this.length),
                    this[e2] * 16777216 + ((this[e2 + 1] << 16) | (this[e2 + 2] << 8) | this[e2 + 3])
                );
            }, 'readUInt32BE');
            f2.prototype.readBigUInt64LE = ge(
                a2(function (e2) {
                    (e2 = e2 >>> 0), Be(e2, 'offset');
                    var t2 = this[e2],
                        n2 = this[e2 + 7];
                    (t2 === void 0 || n2 === void 0) && je(e2, this.length - 8);
                    var i2 =
                            t2 +
                            this[++e2] * Math.pow(2, 8) +
                            this[++e2] * Math.pow(2, 16) +
                            this[++e2] * Math.pow(2, 24),
                        s2 =
                            this[++e2] +
                            this[++e2] * Math.pow(2, 8) +
                            this[++e2] * Math.pow(2, 16) +
                            n2 * Math.pow(2, 24);
                    return BigInt(i2) + (BigInt(s2) << BigInt(32));
                }, 'readBigUInt64LE')
            );
            f2.prototype.readBigUInt64BE = ge(
                a2(function (e2) {
                    (e2 = e2 >>> 0), Be(e2, 'offset');
                    var t2 = this[e2],
                        n2 = this[e2 + 7];
                    (t2 === void 0 || n2 === void 0) && je(e2, this.length - 8);
                    var i2 =
                            t2 * Math.pow(2, 24) +
                            this[++e2] * Math.pow(2, 16) +
                            this[++e2] * Math.pow(2, 8) +
                            this[++e2],
                        s2 =
                            this[++e2] * Math.pow(2, 24) +
                            this[++e2] * Math.pow(2, 16) +
                            this[++e2] * Math.pow(2, 8) +
                            n2;
                    return (BigInt(i2) << BigInt(32)) + BigInt(s2);
                }, 'readBigUInt64BE')
            );
            f2.prototype.readIntLE = a2(function (e2, t2, n2) {
                (e2 = e2 >>> 0), (t2 = t2 >>> 0), n2 || U(e2, t2, this.length);
                var i2 = this[e2],
                    s2 = 1,
                    o2 = 0;
                for (; ++o2 < t2 && (s2 *= 256); ) i2 += this[e2 + o2] * s2;
                return (s2 *= 128), i2 >= s2 && (i2 -= Math.pow(2, 8 * t2)), i2;
            }, 'readIntLE');
            f2.prototype.readIntBE = a2(function (e2, t2, n2) {
                (e2 = e2 >>> 0), (t2 = t2 >>> 0), n2 || U(e2, t2, this.length);
                var i2 = t2,
                    s2 = 1,
                    o2 = this[e2 + --i2];
                for (; i2 > 0 && (s2 *= 256); ) o2 += this[e2 + --i2] * s2;
                return (s2 *= 128), o2 >= s2 && (o2 -= Math.pow(2, 8 * t2)), o2;
            }, 'readIntBE');
            f2.prototype.readInt8 = a2(function (e2, t2) {
                return (
                    (e2 = e2 >>> 0), t2 || U(e2, 1, this.length), this[e2] & 128 ? (255 - this[e2] + 1) * -1 : this[e2]
                );
            }, 'readInt8');
            f2.prototype.readInt16LE = a2(function (e2, t2) {
                (e2 = e2 >>> 0), t2 || U(e2, 2, this.length);
                var n2 = this[e2] | (this[e2 + 1] << 8);
                return n2 & 32768 ? n2 | 4294901760 : n2;
            }, 'readInt16LE');
            f2.prototype.readInt16BE = a2(function (e2, t2) {
                (e2 = e2 >>> 0), t2 || U(e2, 2, this.length);
                var n2 = this[e2 + 1] | (this[e2] << 8);
                return n2 & 32768 ? n2 | 4294901760 : n2;
            }, 'readInt16BE');
            f2.prototype.readInt32LE = a2(function (e2, t2) {
                return (
                    (e2 = e2 >>> 0),
                    t2 || U(e2, 4, this.length),
                    this[e2] | (this[e2 + 1] << 8) | (this[e2 + 2] << 16) | (this[e2 + 3] << 24)
                );
            }, 'readInt32LE');
            f2.prototype.readInt32BE = a2(function (e2, t2) {
                return (
                    (e2 = e2 >>> 0),
                    t2 || U(e2, 4, this.length),
                    (this[e2] << 24) | (this[e2 + 1] << 16) | (this[e2 + 2] << 8) | this[e2 + 3]
                );
            }, 'readInt32BE');
            f2.prototype.readBigInt64LE = ge(
                a2(function (e2) {
                    (e2 = e2 >>> 0), Be(e2, 'offset');
                    var t2 = this[e2],
                        n2 = this[e2 + 7];
                    (t2 === void 0 || n2 === void 0) && je(e2, this.length - 8);
                    var i2 = this[e2 + 4] + this[e2 + 5] * Math.pow(2, 8) + this[e2 + 6] * Math.pow(2, 16) + (n2 << 24);
                    return (
                        (BigInt(i2) << BigInt(32)) +
                        BigInt(
                            t2 +
                                this[++e2] * Math.pow(2, 8) +
                                this[++e2] * Math.pow(2, 16) +
                                this[++e2] * Math.pow(2, 24)
                        )
                    );
                }, 'readBigInt64LE')
            );
            f2.prototype.readBigInt64BE = ge(
                a2(function (e2) {
                    (e2 = e2 >>> 0), Be(e2, 'offset');
                    var t2 = this[e2],
                        n2 = this[e2 + 7];
                    (t2 === void 0 || n2 === void 0) && je(e2, this.length - 8);
                    var i2 = (t2 << 24) + this[++e2] * Math.pow(2, 16) + this[++e2] * Math.pow(2, 8) + this[++e2];
                    return (
                        (BigInt(i2) << BigInt(32)) +
                        BigInt(
                            this[++e2] * Math.pow(2, 24) +
                                this[++e2] * Math.pow(2, 16) +
                                this[++e2] * Math.pow(2, 8) +
                                n2
                        )
                    );
                }, 'readBigInt64BE')
            );
            f2.prototype.readFloatLE = a2(function (e2, t2) {
                return (e2 = e2 >>> 0), t2 || U(e2, 4, this.length), Pe.read(this, e2, true, 23, 4);
            }, 'readFloatLE');
            f2.prototype.readFloatBE = a2(function (e2, t2) {
                return (e2 = e2 >>> 0), t2 || U(e2, 4, this.length), Pe.read(this, e2, false, 23, 4);
            }, 'readFloatBE');
            f2.prototype.readDoubleLE = a2(function (e2, t2) {
                return (e2 = e2 >>> 0), t2 || U(e2, 8, this.length), Pe.read(this, e2, true, 52, 8);
            }, 'readDoubleLE');
            f2.prototype.readDoubleBE = a2(function (e2, t2) {
                return (e2 = e2 >>> 0), t2 || U(e2, 8, this.length), Pe.read(this, e2, false, 52, 8);
            }, 'readDoubleBE');
            __name(z2, 'z');
            a2(z2, 'checkInt');
            f2.prototype.writeUintLE = f2.prototype.writeUIntLE = a2(function (e2, t2, n2, i2) {
                if (((e2 = +e2), (t2 = t2 >>> 0), (n2 = n2 >>> 0), !i2)) {
                    var u = Math.pow(2, 8 * n2) - 1;
                    z2(this, e2, t2, n2, u, 0);
                }
                var s2 = 1,
                    o2 = 0;
                for (this[t2] = e2 & 255; ++o2 < n2 && (s2 *= 256); ) this[t2 + o2] = (e2 / s2) & 255;
                return t2 + n2;
            }, 'writeUIntLE');
            f2.prototype.writeUintBE = f2.prototype.writeUIntBE = a2(function (e2, t2, n2, i2) {
                if (((e2 = +e2), (t2 = t2 >>> 0), (n2 = n2 >>> 0), !i2)) {
                    var u = Math.pow(2, 8 * n2) - 1;
                    z2(this, e2, t2, n2, u, 0);
                }
                var s2 = n2 - 1,
                    o2 = 1;
                for (this[t2 + s2] = e2 & 255; --s2 >= 0 && (o2 *= 256); ) this[t2 + s2] = (e2 / o2) & 255;
                return t2 + n2;
            }, 'writeUIntBE');
            f2.prototype.writeUint8 = f2.prototype.writeUInt8 = a2(function (e2, t2, n2) {
                return (e2 = +e2), (t2 = t2 >>> 0), n2 || z2(this, e2, t2, 1, 255, 0), (this[t2] = e2 & 255), t2 + 1;
            }, 'writeUInt8');
            f2.prototype.writeUint16LE = f2.prototype.writeUInt16LE = a2(function (e2, t2, n2) {
                return (
                    (e2 = +e2),
                    (t2 = t2 >>> 0),
                    n2 || z2(this, e2, t2, 2, 65535, 0),
                    (this[t2] = e2 & 255),
                    (this[t2 + 1] = e2 >>> 8),
                    t2 + 2
                );
            }, 'writeUInt16LE');
            f2.prototype.writeUint16BE = f2.prototype.writeUInt16BE = a2(function (e2, t2, n2) {
                return (
                    (e2 = +e2),
                    (t2 = t2 >>> 0),
                    n2 || z2(this, e2, t2, 2, 65535, 0),
                    (this[t2] = e2 >>> 8),
                    (this[t2 + 1] = e2 & 255),
                    t2 + 2
                );
            }, 'writeUInt16BE');
            f2.prototype.writeUint32LE = f2.prototype.writeUInt32LE = a2(function (e2, t2, n2) {
                return (
                    (e2 = +e2),
                    (t2 = t2 >>> 0),
                    n2 || z2(this, e2, t2, 4, 4294967295, 0),
                    (this[t2 + 3] = e2 >>> 24),
                    (this[t2 + 2] = e2 >>> 16),
                    (this[t2 + 1] = e2 >>> 8),
                    (this[t2] = e2 & 255),
                    t2 + 4
                );
            }, 'writeUInt32LE');
            f2.prototype.writeUint32BE = f2.prototype.writeUInt32BE = a2(function (e2, t2, n2) {
                return (
                    (e2 = +e2),
                    (t2 = t2 >>> 0),
                    n2 || z2(this, e2, t2, 4, 4294967295, 0),
                    (this[t2] = e2 >>> 24),
                    (this[t2 + 1] = e2 >>> 16),
                    (this[t2 + 2] = e2 >>> 8),
                    (this[t2 + 3] = e2 & 255),
                    t2 + 4
                );
            }, 'writeUInt32BE');
            __name(Nn, 'Nn');
            a2(Nn, 'wrtBigUInt64LE');
            __name(Qn, 'Qn');
            a2(Qn, 'wrtBigUInt64BE');
            f2.prototype.writeBigUInt64LE = ge(
                a2(function (e2) {
                    var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                    return Nn(this, e2, t2, BigInt(0), BigInt('0xffffffffffffffff'));
                }, 'writeBigUInt64LE')
            );
            f2.prototype.writeBigUInt64BE = ge(
                a2(function (e2) {
                    var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                    return Qn(this, e2, t2, BigInt(0), BigInt('0xffffffffffffffff'));
                }, 'writeBigUInt64BE')
            );
            f2.prototype.writeIntLE = a2(function (e2, t2, n2, i2) {
                if (((e2 = +e2), (t2 = t2 >>> 0), !i2)) {
                    var c = Math.pow(2, 8 * n2 - 1);
                    z2(this, e2, t2, n2, c - 1, -c);
                }
                var s2 = 0,
                    o2 = 1,
                    u = 0;
                for (this[t2] = e2 & 255; ++s2 < n2 && (o2 *= 256); )
                    e2 < 0 && u === 0 && this[t2 + s2 - 1] !== 0 && (u = 1),
                        (this[t2 + s2] = (((e2 / o2) >> 0) - u) & 255);
                return t2 + n2;
            }, 'writeIntLE');
            f2.prototype.writeIntBE = a2(function (e2, t2, n2, i2) {
                if (((e2 = +e2), (t2 = t2 >>> 0), !i2)) {
                    var c = Math.pow(2, 8 * n2 - 1);
                    z2(this, e2, t2, n2, c - 1, -c);
                }
                var s2 = n2 - 1,
                    o2 = 1,
                    u = 0;
                for (this[t2 + s2] = e2 & 255; --s2 >= 0 && (o2 *= 256); )
                    e2 < 0 && u === 0 && this[t2 + s2 + 1] !== 0 && (u = 1),
                        (this[t2 + s2] = (((e2 / o2) >> 0) - u) & 255);
                return t2 + n2;
            }, 'writeIntBE');
            f2.prototype.writeInt8 = a2(function (e2, t2, n2) {
                return (
                    (e2 = +e2),
                    (t2 = t2 >>> 0),
                    n2 || z2(this, e2, t2, 1, 127, -128),
                    e2 < 0 && (e2 = 255 + e2 + 1),
                    (this[t2] = e2 & 255),
                    t2 + 1
                );
            }, 'writeInt8');
            f2.prototype.writeInt16LE = a2(function (e2, t2, n2) {
                return (
                    (e2 = +e2),
                    (t2 = t2 >>> 0),
                    n2 || z2(this, e2, t2, 2, 32767, -32768),
                    (this[t2] = e2 & 255),
                    (this[t2 + 1] = e2 >>> 8),
                    t2 + 2
                );
            }, 'writeInt16LE');
            f2.prototype.writeInt16BE = a2(function (e2, t2, n2) {
                return (
                    (e2 = +e2),
                    (t2 = t2 >>> 0),
                    n2 || z2(this, e2, t2, 2, 32767, -32768),
                    (this[t2] = e2 >>> 8),
                    (this[t2 + 1] = e2 & 255),
                    t2 + 2
                );
            }, 'writeInt16BE');
            f2.prototype.writeInt32LE = a2(function (e2, t2, n2) {
                return (
                    (e2 = +e2),
                    (t2 = t2 >>> 0),
                    n2 || z2(this, e2, t2, 4, 2147483647, -2147483648),
                    (this[t2] = e2 & 255),
                    (this[t2 + 1] = e2 >>> 8),
                    (this[t2 + 2] = e2 >>> 16),
                    (this[t2 + 3] = e2 >>> 24),
                    t2 + 4
                );
            }, 'writeInt32LE');
            f2.prototype.writeInt32BE = a2(function (e2, t2, n2) {
                return (
                    (e2 = +e2),
                    (t2 = t2 >>> 0),
                    n2 || z2(this, e2, t2, 4, 2147483647, -2147483648),
                    e2 < 0 && (e2 = 4294967295 + e2 + 1),
                    (this[t2] = e2 >>> 24),
                    (this[t2 + 1] = e2 >>> 16),
                    (this[t2 + 2] = e2 >>> 8),
                    (this[t2 + 3] = e2 & 255),
                    t2 + 4
                );
            }, 'writeInt32BE');
            f2.prototype.writeBigInt64LE = ge(
                a2(function (e2) {
                    var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                    return Nn(this, e2, t2, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
                }, 'writeBigInt64LE')
            );
            f2.prototype.writeBigInt64BE = ge(
                a2(function (e2) {
                    var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                    return Qn(this, e2, t2, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
                }, 'writeBigInt64BE')
            );
            __name(Wn, 'Wn');
            a2(Wn, 'checkIEEE754');
            __name(jn, 'jn');
            a2(jn, 'writeFloat');
            f2.prototype.writeFloatLE = a2(function (e2, t2, n2) {
                return jn(this, e2, t2, true, n2);
            }, 'writeFloatLE');
            f2.prototype.writeFloatBE = a2(function (e2, t2, n2) {
                return jn(this, e2, t2, false, n2);
            }, 'writeFloatBE');
            __name(Hn, 'Hn');
            a2(Hn, 'writeDouble');
            f2.prototype.writeDoubleLE = a2(function (e2, t2, n2) {
                return Hn(this, e2, t2, true, n2);
            }, 'writeDoubleLE');
            f2.prototype.writeDoubleBE = a2(function (e2, t2, n2) {
                return Hn(this, e2, t2, false, n2);
            }, 'writeDoubleBE');
            f2.prototype.copy = a2(function (e2, t2, n2, i2) {
                if (!f2.isBuffer(e2)) throw new TypeError('argument should be a Buffer');
                if (
                    (n2 || (n2 = 0),
                    !i2 && i2 !== 0 && (i2 = this.length),
                    t2 >= e2.length && (t2 = e2.length),
                    t2 || (t2 = 0),
                    i2 > 0 && i2 < n2 && (i2 = n2),
                    i2 === n2 || e2.length === 0 || this.length === 0)
                )
                    return 0;
                if (t2 < 0) throw new RangeError('targetStart out of bounds');
                if (n2 < 0 || n2 >= this.length) throw new RangeError('Index out of range');
                if (i2 < 0) throw new RangeError('sourceEnd out of bounds');
                i2 > this.length && (i2 = this.length), e2.length - t2 < i2 - n2 && (i2 = e2.length - t2 + n2);
                var s2 = i2 - n2;
                return (
                    this === e2 && typeof Uint8Array.prototype.copyWithin == 'function'
                        ? this.copyWithin(t2, n2, i2)
                        : Uint8Array.prototype.set.call(e2, this.subarray(n2, i2), t2),
                    s2
                );
            }, 'copy');
            f2.prototype.fill = a2(function (e2, t2, n2, i2) {
                if (typeof e2 == 'string') {
                    if (
                        (typeof t2 == 'string'
                            ? ((i2 = t2), (t2 = 0), (n2 = this.length))
                            : typeof n2 == 'string' && ((i2 = n2), (n2 = this.length)),
                        i2 !== void 0 && typeof i2 != 'string')
                    )
                        throw new TypeError('encoding must be a string');
                    if (typeof i2 == 'string' && !f2.isEncoding(i2)) throw new TypeError('Unknown encoding: ' + i2);
                    if (e2.length === 1) {
                        var o2 = e2.charCodeAt(0);
                        ((i2 === 'utf8' && o2 < 128) || i2 === 'latin1') && (e2 = o2);
                    }
                } else typeof e2 == 'number' ? (e2 = e2 & 255) : typeof e2 == 'boolean' && (e2 = Number(e2));
                if (t2 < 0 || this.length < t2 || this.length < n2) throw new RangeError('Out of range index');
                if (n2 <= t2) return this;
                (t2 = t2 >>> 0), (n2 = n2 === void 0 ? this.length : n2 >>> 0), e2 || (e2 = 0);
                var s2;
                if (typeof e2 == 'number') for (s2 = t2; s2 < n2; ++s2) this[s2] = e2;
                else {
                    var o21 = f2.isBuffer(e2) ? e2 : f2.from(e2, i2),
                        u = o21.length;
                    if (u === 0) throw new TypeError('The value "' + e2 + '" is invalid for argument "value"');
                    for (s2 = 0; s2 < n2 - t2; ++s2) this[s2 + t2] = o21[s2 % u];
                }
                return this;
            }, 'fill');
            var Te = {};
            __name(Ot, 'Ot');
            a2(Ot, 'E');
            Ot(
                'ERR_BUFFER_OUT_OF_BOUNDS',
                function (r2) {
                    return r2
                        ? ''.concat(r2, ' is outside of buffer bounds')
                        : 'Attempt to access memory outside buffer bounds';
                },
                RangeError
            );
            Ot(
                'ERR_INVALID_ARG_TYPE',
                function (r2, e2) {
                    return 'The "'
                        .concat(r2, '" argument must be of type number. Received type ')
                        .concat(typeof e2 === 'undefined' ? 'undefined' : _type_of(e2));
                },
                TypeError
            );
            Ot(
                'ERR_OUT_OF_RANGE',
                function (r2, e2, t2) {
                    var n2 = 'The value of "'.concat(r2, '" is out of range.'),
                        i2 = t2;
                    return (
                        Number.isInteger(t2) && Math.abs(t2) > Math.pow(2, 32)
                            ? (i2 = Mn(String(t2)))
                            : (typeof t2 === 'undefined' ? 'undefined' : _type_of(t2)) == 'bigint' &&
                              ((i2 = String(t2)),
                              (t2 > Math.pow(BigInt(2), BigInt(32)) || t2 < -Math.pow(BigInt(2), BigInt(32))) &&
                                  (i2 = Mn(i2)),
                              (i2 += 'n')),
                        (n2 += ' It must be '.concat(e2, '. Received ').concat(i2)),
                        n2
                    );
                },
                RangeError
            );
            __name(Mn, 'Mn');
            a2(Mn, 'addNumericalSeparator');
            __name(Lo, 'Lo');
            a2(Lo, 'checkBounds');
            __name(Gn, 'Gn');
            a2(Gn, 'checkIntBI');
            __name(Be, 'Be');
            a2(Be, 'validateNumber');
            __name(je, 'je');
            a2(je, 'boundsError');
            var Ro = /[^+/0-9A-Za-z-_]/g;
            __name(Fo, 'Fo');
            a2(Fo, 'base64clean');
            __name(Ft, 'Ft');
            a2(Ft, 'utf8ToBytes');
            __name(Mo, 'Mo');
            a2(Mo, 'asciiToBytes');
            __name(Do, 'Do');
            a2(Do, 'utf16leToBytes');
            __name($n, '$n');
            a2($n, 'base64ToBytes');
            __name(ot, 'ot');
            a2(ot, 'blitBuffer');
            __name(ue, 'ue');
            a2(ue, 'isInstance');
            __name(kt, 'kt');
            a2(kt, 'numberIsNaN');
            var Oo = (function () {
                var r2 = '0123456789abcdef',
                    e2 = new Array(256);
                for (var t2 = 0; t2 < 16; ++t2) {
                    var n2 = t2 * 16;
                    for (var i2 = 0; i2 < 16; ++i2) e2[n2 + i2] = r2[t2] + r2[i2];
                }
                return e2;
            })();
            __name(ge, 'ge');
            a2(ge, 'defineBigIntMethod');
            __name(ko, 'ko');
            a2(ko, 'BufferBigIntNotDefined');
        });
        var b2;
        var S;
        var v;
        var w;
        var d;
        var y;
        var p2 = K(function () {
            'use strict';
            var _globalThis_setImmediate, _globalThis_clearImmediate, _globalThis_crypto;
            (b2 = globalThis),
                (S =
                    (_globalThis_setImmediate = globalThis.setImmediate) !== null && _globalThis_setImmediate !== void 0
                        ? _globalThis_setImmediate
                        : function (r2) {
                              return setTimeout(r2, 0);
                          }),
                (v =
                    (_globalThis_clearImmediate = globalThis.clearImmediate) !== null &&
                    _globalThis_clearImmediate !== void 0
                        ? _globalThis_clearImmediate
                        : function (r2) {
                              return clearTimeout(r2);
                          }),
                (w =
                    (_globalThis_crypto = globalThis.crypto) !== null && _globalThis_crypto !== void 0
                        ? _globalThis_crypto
                        : {});
            var _w_subtle;
            (_w_subtle = w.subtle) !== null && _w_subtle !== void 0 ? _w_subtle : (w.subtle = {});
            var _globalThis_process;
            (d =
                typeof globalThis.Buffer == 'function' && typeof globalThis.Buffer.allocUnsafe == 'function'
                    ? globalThis.Buffer
                    : Kn().Buffer),
                (y =
                    (_globalThis_process = globalThis.process) !== null && _globalThis_process !== void 0
                        ? _globalThis_process
                        : {});
            var _y_env;
            (_y_env = y.env) !== null && _y_env !== void 0 ? _y_env : (y.env = {});
            try {
                y.nextTick(function () {});
            } catch (e) {
                var e2 = Promise.resolve();
                y.nextTick = e2.then.bind(e2);
            }
        });
        var we = I(function (Xc, Ut) {
            'use strict';
            var Uo = function Uo(r2) {
                console && console.warn && console.warn(r2);
            };
            var ut = function ut(r2) {
                if (typeof r2 != 'function')
                    throw new TypeError(
                        'The "listener" argument must be of type Function. Received type ' +
                            (typeof r2 === 'undefined' ? 'undefined' : _type_of(r2))
                    );
            };
            var Zn = function Zn(r2) {
                return r2._maxListeners === void 0 ? B.defaultMaxListeners : r2._maxListeners;
            };
            var Jn = function Jn(r2, e2, t2, n2) {
                var i2, s2, o2;
                if (
                    (ut(t2),
                    (s2 = r2._events),
                    s2 === void 0
                        ? ((s2 = r2._events = /* @__PURE__ */ Object.create(null)), (r2._eventsCount = 0))
                        : (s2.newListener !== void 0 &&
                              (r2.emit('newListener', e2, t2.listener ? t2.listener : t2), (s2 = r2._events)),
                          (o2 = s2[e2])),
                    o2 === void 0)
                )
                    (o2 = s2[e2] = t2), ++r2._eventsCount;
                else if (
                    (typeof o2 == 'function'
                        ? (o2 = s2[e2] = n2 ? [t2, o2] : [o2, t2])
                        : n2
                        ? o2.unshift(t2)
                        : o2.push(t2),
                    (i2 = Zn(r2)),
                    i2 > 0 && o2.length > i2 && !o2.warned)
                ) {
                    o2.warned = true;
                    var u = new Error(
                        'Possible EventEmitter memory leak detected. ' +
                            o2.length +
                            ' ' +
                            String(e2) +
                            ' listeners added. Use emitter.setMaxListeners() to increase limit'
                    );
                    (u.name = 'MaxListenersExceededWarning'),
                        (u.emitter = r2),
                        (u.type = e2),
                        (u.count = o2.length),
                        Uo(u);
                }
                return r2;
            };
            var qo = function qo() {
                if (!this.fired)
                    return (
                        this.target.removeListener(this.type, this.wrapFn),
                        (this.fired = true),
                        arguments.length === 0
                            ? this.listener.call(this.target)
                            : this.listener.apply(this.target, arguments)
                    );
            };
            var Xn = function Xn(r2, e2, t2) {
                var n2 = {
                        fired: false,
                        wrapFn: void 0,
                        target: r2,
                        type: e2,
                        listener: t2,
                    },
                    i2 = qo.bind(n2);
                return (i2.listener = t2), (n2.wrapFn = i2), i2;
            };
            var ei = function ei(r2, e2, t2) {
                var n2 = r2._events;
                if (n2 === void 0) return [];
                var i2 = n2[e2];
                return i2 === void 0
                    ? []
                    : typeof i2 == 'function'
                    ? t2
                        ? [i2.listener || i2]
                        : [i2]
                    : t2
                    ? Qo(i2)
                    : ri(i2, i2.length);
            };
            var ti = function ti(r2) {
                var e2 = this._events;
                if (e2 !== void 0) {
                    var t2 = e2[r2];
                    if (typeof t2 == 'function') return 1;
                    if (t2 !== void 0) return t2.length;
                }
                return 0;
            };
            var ri = function ri(r2, e2) {
                for (var t2 = new Array(e2), n2 = 0; n2 < e2; ++n2) t2[n2] = r2[n2];
                return t2;
            };
            var No = function No(r2, e2) {
                for (; e2 + 1 < r2.length; e2++) r2[e2] = r2[e2 + 1];
                r2.pop();
            };
            var Qo = function Qo(r2) {
                for (var e2 = new Array(r2.length), t2 = 0; t2 < e2.length; ++t2) e2[t2] = r2[t2].listener || r2[t2];
                return e2;
            };
            var Wo = function Wo(r2, e2) {
                return new Promise(function (t2, n2) {
                    function i2(o2) {
                        r2.removeListener(e2, s2), n2(o2);
                    }
                    __name(i2, 'i');
                    a2(i2, 'errorListener');
                    function s2() {
                        typeof r2.removeListener == 'function' && r2.removeListener('error', i2),
                            t2([].slice.call(arguments));
                    }
                    __name(s2, 's');
                    a2(s2, 'resolver'),
                        ni(r2, e2, s2, {
                            once: true,
                        }),
                        e2 !== 'error' &&
                            jo(r2, i2, {
                                once: true,
                            });
                });
            };
            var jo = function jo(r2, e2, t2) {
                typeof r2.on == 'function' && ni(r2, 'error', e2, t2);
            };
            var ni = function ni(r2, e2, t2, n2) {
                if (typeof r2.on == 'function') n2.once ? r2.once(e2, t2) : r2.on(e2, t2);
                else if (typeof r2.addEventListener == 'function')
                    r2.addEventListener(
                        e2,
                        a2(
                            /* @__PURE__ */ __name(function i2(s2) {
                                n2.once && r2.removeEventListener(e2, i2), t2(s2);
                            }, 'i'),
                            'wrapListener'
                        )
                    );
                else
                    throw new TypeError(
                        'The "emitter" argument must be of type EventEmitter. Received type ' +
                            (typeof r2 === 'undefined' ? 'undefined' : _type_of(r2))
                    );
            };
            p2();
            var Re = typeof Reflect == 'object' ? Reflect : null,
                Vn =
                    Re && typeof Re.apply == 'function'
                        ? Re.apply
                        : a2(function (e2, t2, n2) {
                              return Function.prototype.apply.call(e2, t2, n2);
                          }, 'ReflectApply'),
                at;
            Re && typeof Re.ownKeys == 'function'
                ? (at = Re.ownKeys)
                : Object.getOwnPropertySymbols
                ? (at = a2(function (e2) {
                      return Object.getOwnPropertyNames(e2).concat(Object.getOwnPropertySymbols(e2));
                  }, 'ReflectOwnKeys'))
                : (at = a2(function (e2) {
                      return Object.getOwnPropertyNames(e2);
                  }, 'ReflectOwnKeys'));
            __name(Uo, 'Uo');
            a2(Uo, 'ProcessEmitWarning');
            var Yn =
                Number.isNaN ||
                a2(function (e2) {
                    return e2 !== e2;
                }, 'NumberIsNaN');
            function B() {
                B.init.call(this);
            }
            __name(B, 'B');
            a2(B, 'EventEmitter');
            Ut.exports = B;
            Ut.exports.once = Wo;
            B.EventEmitter = B;
            B.prototype._events = void 0;
            B.prototype._eventsCount = 0;
            B.prototype._maxListeners = void 0;
            var zn = 10;
            __name(ut, 'ut');
            a2(ut, 'checkListener');
            Object.defineProperty(B, 'defaultMaxListeners', {
                enumerable: true,
                get: function get() {
                    return zn;
                },
                set: function set(r2) {
                    if (typeof r2 != 'number' || r2 < 0 || Yn(r2))
                        throw new RangeError(
                            'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                                r2 +
                                '.'
                        );
                    zn = r2;
                },
            });
            B.init = function () {
                (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) &&
                    ((this._events = /* @__PURE__ */ Object.create(null)), (this._eventsCount = 0)),
                    (this._maxListeners = this._maxListeners || void 0);
            };
            B.prototype.setMaxListeners = a2(function (e2) {
                if (typeof e2 != 'number' || e2 < 0 || Yn(e2))
                    throw new RangeError(
                        'The value of "n" is out of range. It must be a non-negative number. Received ' + e2 + '.'
                    );
                return (this._maxListeners = e2), this;
            }, 'setMaxListeners');
            __name(Zn, 'Zn');
            a2(Zn, '_getMaxListeners');
            B.prototype.getMaxListeners = a2(function () {
                return Zn(this);
            }, 'getMaxListeners');
            B.prototype.emit = a2(function (e2) {
                for (var t2 = [], n2 = 1; n2 < arguments.length; n2++) t2.push(arguments[n2]);
                var i2 = e2 === 'error',
                    s2 = this._events;
                if (s2 !== void 0) i2 = i2 && s2.error === void 0;
                else if (!i2) return false;
                if (i2) {
                    var o2;
                    if ((t2.length > 0 && (o2 = t2[0]), _instanceof(o2, Error))) throw o2;
                    var u = new Error('Unhandled error.' + (o2 ? ' (' + o2.message + ')' : ''));
                    throw ((u.context = o2), u);
                }
                var c = s2[e2];
                if (c === void 0) return false;
                if (typeof c == 'function') Vn(c, this, t2);
                else for (var h = c.length, l2 = ri(c, h), n2 = 0; n2 < h; ++n2) Vn(l2[n2], this, t2);
                return true;
            }, 'emit');
            __name(Jn, 'Jn');
            a2(Jn, '_addListener');
            B.prototype.addListener = a2(function (e2, t2) {
                return Jn(this, e2, t2, false);
            }, 'addListener');
            B.prototype.on = B.prototype.addListener;
            B.prototype.prependListener = a2(function (e2, t2) {
                return Jn(this, e2, t2, true);
            }, 'prependListener');
            __name(qo, 'qo');
            a2(qo, 'onceWrapper');
            __name(Xn, 'Xn');
            a2(Xn, '_onceWrap');
            B.prototype.once = a2(function (e2, t2) {
                return ut(t2), this.on(e2, Xn(this, e2, t2)), this;
            }, 'once');
            B.prototype.prependOnceListener = a2(function (e2, t2) {
                return ut(t2), this.prependListener(e2, Xn(this, e2, t2)), this;
            }, 'prependOnceListener');
            B.prototype.removeListener = a2(function (e2, t2) {
                var n2, i2, s2, o2, u;
                if ((ut(t2), (i2 = this._events), i2 === void 0)) return this;
                if (((n2 = i2[e2]), n2 === void 0)) return this;
                if (n2 === t2 || n2.listener === t2)
                    --this._eventsCount === 0
                        ? (this._events = /* @__PURE__ */ Object.create(null))
                        : (delete i2[e2], i2.removeListener && this.emit('removeListener', e2, n2.listener || t2));
                else if (typeof n2 != 'function') {
                    for (s2 = -1, o2 = n2.length - 1; o2 >= 0; o2--)
                        if (n2[o2] === t2 || n2[o2].listener === t2) {
                            (u = n2[o2].listener), (s2 = o2);
                            break;
                        }
                    if (s2 < 0) return this;
                    s2 === 0 ? n2.shift() : No(n2, s2),
                        n2.length === 1 && (i2[e2] = n2[0]),
                        i2.removeListener !== void 0 && this.emit('removeListener', e2, u || t2);
                }
                return this;
            }, 'removeListener');
            B.prototype.off = B.prototype.removeListener;
            B.prototype.removeAllListeners = a2(function (e2) {
                var t2, n2, i2;
                if (((n2 = this._events), n2 === void 0)) return this;
                if (n2.removeListener === void 0)
                    return (
                        arguments.length === 0
                            ? ((this._events = /* @__PURE__ */ Object.create(null)), (this._eventsCount = 0))
                            : n2[e2] !== void 0 &&
                              (--this._eventsCount === 0
                                  ? (this._events = /* @__PURE__ */ Object.create(null))
                                  : delete n2[e2]),
                        this
                    );
                if (arguments.length === 0) {
                    var s2 = Object.keys(n2),
                        o2;
                    for (i2 = 0; i2 < s2.length; ++i2)
                        (o2 = s2[i2]), o2 !== 'removeListener' && this.removeAllListeners(o2);
                    return (
                        this.removeAllListeners('removeListener'),
                        (this._events = /* @__PURE__ */ Object.create(null)),
                        (this._eventsCount = 0),
                        this
                    );
                }
                if (((t2 = n2[e2]), typeof t2 == 'function')) this.removeListener(e2, t2);
                else if (t2 !== void 0) for (i2 = t2.length - 1; i2 >= 0; i2--) this.removeListener(e2, t2[i2]);
                return this;
            }, 'removeAllListeners');
            __name(ei, 'ei');
            a2(ei, '_listeners');
            B.prototype.listeners = a2(function (e2) {
                return ei(this, e2, true);
            }, 'listeners');
            B.prototype.rawListeners = a2(function (e2) {
                return ei(this, e2, false);
            }, 'rawListeners');
            B.listenerCount = function (r2, e2) {
                return typeof r2.listenerCount == 'function' ? r2.listenerCount(e2) : ti.call(r2, e2);
            };
            B.prototype.listenerCount = ti;
            __name(ti, 'ti');
            a2(ti, 'listenerCount');
            B.prototype.eventNames = a2(function () {
                return this._eventsCount > 0 ? at(this._events) : [];
            }, 'eventNames');
            __name(ri, 'ri');
            a2(ri, 'arrayClone');
            __name(No, 'No');
            a2(No, 'spliceOne');
            __name(Qo, 'Qo');
            a2(Qo, 'unwrapListeners');
            __name(Wo, 'Wo');
            a2(Wo, 'once');
            __name(jo, 'jo');
            a2(jo, 'addErrorHandlerIfEventEmitter');
            __name(ni, 'ni');
            a2(ni, 'eventTargetAgnosticAddListener');
        });
        var He = {};
        ee(He, {
            default: function () {
                return Ho;
            },
        });
        var Ho;
        var Ge = K(function () {
            p2();
            Ho = {};
        });
        __name($e, '$e');
        var ii = K(function () {
            'use strict';
            p2();
            a2($e, 'sha256');
        });
        var k;
        var Ke;
        var si = K(function () {
            'use strict';
            var _a4;
            p2();
            k =
                ((_a4 = /*#__PURE__*/ (function () {
                    function _a41() {
                        _class_call_check(this, _a41);
                        T(this, '_dataLength', 0);
                        T(this, '_bufferLength', 0);
                        T(this, '_state', new Int32Array(4));
                        T(this, '_buffer', new ArrayBuffer(68));
                        T(this, '_buffer8');
                        T(this, '_buffer32');
                        (this._buffer8 = new Uint8Array(this._buffer, 0, 68)),
                            (this._buffer32 = new Uint32Array(this._buffer, 0, 17)),
                            this.start();
                    }
                    _create_class(
                        _a41,
                        [
                            {
                                key: 'start',
                                value: function start() {
                                    return (
                                        (this._dataLength = 0),
                                        (this._bufferLength = 0),
                                        this._state.set(_a4.stateIdentity),
                                        this
                                    );
                                },
                            },
                            {
                                key: 'appendStr',
                                value: function appendStr(e2) {
                                    var t2 = this._buffer8,
                                        n2 = this._buffer32,
                                        i2 = this._bufferLength,
                                        s2,
                                        o2;
                                    for (o2 = 0; o2 < e2.length; o2 += 1) {
                                        if (((s2 = e2.charCodeAt(o2)), s2 < 128)) t2[i2++] = s2;
                                        else if (s2 < 2048) (t2[i2++] = (s2 >>> 6) + 192), (t2[i2++] = (s2 & 63) | 128);
                                        else if (s2 < 55296 || s2 > 56319)
                                            (t2[i2++] = (s2 >>> 12) + 224),
                                                (t2[i2++] = ((s2 >>> 6) & 63) | 128),
                                                (t2[i2++] = (s2 & 63) | 128);
                                        else {
                                            if (
                                                ((s2 = (s2 - 55296) * 1024 + (e2.charCodeAt(++o2) - 56320) + 65536),
                                                s2 > 1114111)
                                            )
                                                throw new Error('Unicode standard supports code points up to U+10FFFF');
                                            (t2[i2++] = (s2 >>> 18) + 240),
                                                (t2[i2++] = ((s2 >>> 12) & 63) | 128),
                                                (t2[i2++] = ((s2 >>> 6) & 63) | 128),
                                                (t2[i2++] = (s2 & 63) | 128);
                                        }
                                        i2 >= 64 &&
                                            ((this._dataLength += 64),
                                            _a4._md5cycle(this._state, n2),
                                            (i2 -= 64),
                                            (n2[0] = n2[16]));
                                    }
                                    return (this._bufferLength = i2), this;
                                },
                            },
                            {
                                key: 'appendAsciiStr',
                                value: function appendAsciiStr(e2) {
                                    var t2 = this._buffer8,
                                        n2 = this._buffer32,
                                        i2 = this._bufferLength,
                                        s2,
                                        o2 = 0;
                                    for (;;) {
                                        for (s2 = Math.min(e2.length - o2, 64 - i2); s2--; )
                                            t2[i2++] = e2.charCodeAt(o2++);
                                        if (i2 < 64) break;
                                        (this._dataLength += 64), _a4._md5cycle(this._state, n2), (i2 = 0);
                                    }
                                    return (this._bufferLength = i2), this;
                                },
                            },
                            {
                                key: 'appendByteArray',
                                value: function appendByteArray(e2) {
                                    var t2 = this._buffer8,
                                        n2 = this._buffer32,
                                        i2 = this._bufferLength,
                                        s2,
                                        o2 = 0;
                                    for (;;) {
                                        for (s2 = Math.min(e2.length - o2, 64 - i2); s2--; ) t2[i2++] = e2[o2++];
                                        if (i2 < 64) break;
                                        (this._dataLength += 64), _a4._md5cycle(this._state, n2), (i2 = 0);
                                    }
                                    return (this._bufferLength = i2), this;
                                },
                            },
                            {
                                key: 'getState',
                                value: function getState() {
                                    var e2 = this._state;
                                    return {
                                        buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
                                        buflen: this._bufferLength,
                                        length: this._dataLength,
                                        state: [e2[0], e2[1], e2[2], e2[3]],
                                    };
                                },
                            },
                            {
                                key: 'setState',
                                value: function setState(e2) {
                                    var t2 = e2.buffer,
                                        n2 = e2.state,
                                        i2 = this._state,
                                        s2;
                                    for (
                                        this._dataLength = e2.length,
                                            this._bufferLength = e2.buflen,
                                            i2[0] = n2[0],
                                            i2[1] = n2[1],
                                            i2[2] = n2[2],
                                            i2[3] = n2[3],
                                            s2 = 0;
                                        s2 < t2.length;
                                        s2 += 1
                                    )
                                        this._buffer8[s2] = t2.charCodeAt(s2);
                                },
                            },
                            {
                                key: 'end',
                                value: function end() {
                                    var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
                                    var t2 = this._bufferLength,
                                        n2 = this._buffer8,
                                        i2 = this._buffer32,
                                        s2 = (t2 >> 2) + 1;
                                    this._dataLength += t2;
                                    var o2 = this._dataLength * 8;
                                    if (
                                        ((n2[t2] = 128),
                                        (n2[t2 + 1] = n2[t2 + 2] = n2[t2 + 3] = 0),
                                        i2.set(_a4.buffer32Identity.subarray(s2), s2),
                                        t2 > 55 && (_a4._md5cycle(this._state, i2), i2.set(_a4.buffer32Identity)),
                                        o2 <= 4294967295)
                                    )
                                        i2[14] = o2;
                                    else {
                                        var u = o2.toString(16).match(/(.*?)(.{0,8})$/);
                                        if (u === null) return;
                                        var c = parseInt(u[2], 16),
                                            h = parseInt(u[1], 16) || 0;
                                        (i2[14] = c), (i2[15] = h);
                                    }
                                    return _a4._md5cycle(this._state, i2), e2 ? this._state : _a4._hex(this._state);
                                },
                            },
                        ],
                        [
                            {
                                key: 'hashByteArray',
                                value: function hashByteArray(e2) {
                                    var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                                    return this.onePassHasher.start().appendByteArray(e2).end(t2);
                                },
                            },
                            {
                                key: 'hashStr',
                                value: function hashStr(e2) {
                                    var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                                    return this.onePassHasher.start().appendStr(e2).end(t2);
                                },
                            },
                            {
                                key: 'hashAsciiStr',
                                value: function hashAsciiStr(e2) {
                                    var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                                    return this.onePassHasher.start().appendAsciiStr(e2).end(t2);
                                },
                            },
                            {
                                key: '_hex',
                                value: function _hex(e2) {
                                    var t2 = _a4.hexChars,
                                        n2 = _a4.hexOut,
                                        i2,
                                        s2,
                                        o2,
                                        u;
                                    for (u = 0; u < 4; u += 1)
                                        for (s2 = u * 8, i2 = e2[u], o2 = 0; o2 < 8; o2 += 2)
                                            (n2[s2 + 1 + o2] = t2.charAt(i2 & 15)),
                                                (i2 >>>= 4),
                                                (n2[s2 + 0 + o2] = t2.charAt(i2 & 15)),
                                                (i2 >>>= 4);
                                    return n2.join('');
                                },
                            },
                            {
                                key: '_md5cycle',
                                value: function _md5cycle(e2, t2) {
                                    var n2 = e2[0],
                                        i2 = e2[1],
                                        s2 = e2[2],
                                        o2 = e2[3];
                                    (n2 += (((i2 & s2) | (~i2 & o2)) + t2[0] - 680876936) | 0),
                                        (n2 = (((n2 << 7) | (n2 >>> 25)) + i2) | 0),
                                        (o2 += (((n2 & i2) | (~n2 & s2)) + t2[1] - 389564586) | 0),
                                        (o2 = (((o2 << 12) | (o2 >>> 20)) + n2) | 0),
                                        (s2 += (((o2 & n2) | (~o2 & i2)) + t2[2] + 606105819) | 0),
                                        (s2 = (((s2 << 17) | (s2 >>> 15)) + o2) | 0),
                                        (i2 += (((s2 & o2) | (~s2 & n2)) + t2[3] - 1044525330) | 0),
                                        (i2 = (((i2 << 22) | (i2 >>> 10)) + s2) | 0),
                                        (n2 += (((i2 & s2) | (~i2 & o2)) + t2[4] - 176418897) | 0),
                                        (n2 = (((n2 << 7) | (n2 >>> 25)) + i2) | 0),
                                        (o2 += (((n2 & i2) | (~n2 & s2)) + t2[5] + 1200080426) | 0),
                                        (o2 = (((o2 << 12) | (o2 >>> 20)) + n2) | 0),
                                        (s2 += (((o2 & n2) | (~o2 & i2)) + t2[6] - 1473231341) | 0),
                                        (s2 = (((s2 << 17) | (s2 >>> 15)) + o2) | 0),
                                        (i2 += (((s2 & o2) | (~s2 & n2)) + t2[7] - 45705983) | 0),
                                        (i2 = (((i2 << 22) | (i2 >>> 10)) + s2) | 0),
                                        (n2 += (((i2 & s2) | (~i2 & o2)) + t2[8] + 1770035416) | 0),
                                        (n2 = (((n2 << 7) | (n2 >>> 25)) + i2) | 0),
                                        (o2 += (((n2 & i2) | (~n2 & s2)) + t2[9] - 1958414417) | 0),
                                        (o2 = (((o2 << 12) | (o2 >>> 20)) + n2) | 0),
                                        (s2 += (((o2 & n2) | (~o2 & i2)) + t2[10] - 42063) | 0),
                                        (s2 = (((s2 << 17) | (s2 >>> 15)) + o2) | 0),
                                        (i2 += (((s2 & o2) | (~s2 & n2)) + t2[11] - 1990404162) | 0),
                                        (i2 = (((i2 << 22) | (i2 >>> 10)) + s2) | 0),
                                        (n2 += (((i2 & s2) | (~i2 & o2)) + t2[12] + 1804603682) | 0),
                                        (n2 = (((n2 << 7) | (n2 >>> 25)) + i2) | 0),
                                        (o2 += (((n2 & i2) | (~n2 & s2)) + t2[13] - 40341101) | 0),
                                        (o2 = (((o2 << 12) | (o2 >>> 20)) + n2) | 0),
                                        (s2 += (((o2 & n2) | (~o2 & i2)) + t2[14] - 1502002290) | 0),
                                        (s2 = (((s2 << 17) | (s2 >>> 15)) + o2) | 0),
                                        (i2 += (((s2 & o2) | (~s2 & n2)) + t2[15] + 1236535329) | 0),
                                        (i2 = (((i2 << 22) | (i2 >>> 10)) + s2) | 0),
                                        (n2 += (((i2 & o2) | (s2 & ~o2)) + t2[1] - 165796510) | 0),
                                        (n2 = (((n2 << 5) | (n2 >>> 27)) + i2) | 0),
                                        (o2 += (((n2 & s2) | (i2 & ~s2)) + t2[6] - 1069501632) | 0),
                                        (o2 = (((o2 << 9) | (o2 >>> 23)) + n2) | 0),
                                        (s2 += (((o2 & i2) | (n2 & ~i2)) + t2[11] + 643717713) | 0),
                                        (s2 = (((s2 << 14) | (s2 >>> 18)) + o2) | 0),
                                        (i2 += (((s2 & n2) | (o2 & ~n2)) + t2[0] - 373897302) | 0),
                                        (i2 = (((i2 << 20) | (i2 >>> 12)) + s2) | 0),
                                        (n2 += (((i2 & o2) | (s2 & ~o2)) + t2[5] - 701558691) | 0),
                                        (n2 = (((n2 << 5) | (n2 >>> 27)) + i2) | 0),
                                        (o2 += (((n2 & s2) | (i2 & ~s2)) + t2[10] + 38016083) | 0),
                                        (o2 = (((o2 << 9) | (o2 >>> 23)) + n2) | 0),
                                        (s2 += (((o2 & i2) | (n2 & ~i2)) + t2[15] - 660478335) | 0),
                                        (s2 = (((s2 << 14) | (s2 >>> 18)) + o2) | 0),
                                        (i2 += (((s2 & n2) | (o2 & ~n2)) + t2[4] - 405537848) | 0),
                                        (i2 = (((i2 << 20) | (i2 >>> 12)) + s2) | 0),
                                        (n2 += (((i2 & o2) | (s2 & ~o2)) + t2[9] + 568446438) | 0),
                                        (n2 = (((n2 << 5) | (n2 >>> 27)) + i2) | 0),
                                        (o2 += (((n2 & s2) | (i2 & ~s2)) + t2[14] - 1019803690) | 0),
                                        (o2 = (((o2 << 9) | (o2 >>> 23)) + n2) | 0),
                                        (s2 += (((o2 & i2) | (n2 & ~i2)) + t2[3] - 187363961) | 0),
                                        (s2 = (((s2 << 14) | (s2 >>> 18)) + o2) | 0),
                                        (i2 += (((s2 & n2) | (o2 & ~n2)) + t2[8] + 1163531501) | 0),
                                        (i2 = (((i2 << 20) | (i2 >>> 12)) + s2) | 0),
                                        (n2 += (((i2 & o2) | (s2 & ~o2)) + t2[13] - 1444681467) | 0),
                                        (n2 = (((n2 << 5) | (n2 >>> 27)) + i2) | 0),
                                        (o2 += (((n2 & s2) | (i2 & ~s2)) + t2[2] - 51403784) | 0),
                                        (o2 = (((o2 << 9) | (o2 >>> 23)) + n2) | 0),
                                        (s2 += (((o2 & i2) | (n2 & ~i2)) + t2[7] + 1735328473) | 0),
                                        (s2 = (((s2 << 14) | (s2 >>> 18)) + o2) | 0),
                                        (i2 += (((s2 & n2) | (o2 & ~n2)) + t2[12] - 1926607734) | 0),
                                        (i2 = (((i2 << 20) | (i2 >>> 12)) + s2) | 0),
                                        (n2 += ((i2 ^ s2 ^ o2) + t2[5] - 378558) | 0),
                                        (n2 = (((n2 << 4) | (n2 >>> 28)) + i2) | 0),
                                        (o2 += ((n2 ^ i2 ^ s2) + t2[8] - 2022574463) | 0),
                                        (o2 = (((o2 << 11) | (o2 >>> 21)) + n2) | 0),
                                        (s2 += ((o2 ^ n2 ^ i2) + t2[11] + 1839030562) | 0),
                                        (s2 = (((s2 << 16) | (s2 >>> 16)) + o2) | 0),
                                        (i2 += ((s2 ^ o2 ^ n2) + t2[14] - 35309556) | 0),
                                        (i2 = (((i2 << 23) | (i2 >>> 9)) + s2) | 0),
                                        (n2 += ((i2 ^ s2 ^ o2) + t2[1] - 1530992060) | 0),
                                        (n2 = (((n2 << 4) | (n2 >>> 28)) + i2) | 0),
                                        (o2 += ((n2 ^ i2 ^ s2) + t2[4] + 1272893353) | 0),
                                        (o2 = (((o2 << 11) | (o2 >>> 21)) + n2) | 0),
                                        (s2 += ((o2 ^ n2 ^ i2) + t2[7] - 155497632) | 0),
                                        (s2 = (((s2 << 16) | (s2 >>> 16)) + o2) | 0),
                                        (i2 += ((s2 ^ o2 ^ n2) + t2[10] - 1094730640) | 0),
                                        (i2 = (((i2 << 23) | (i2 >>> 9)) + s2) | 0),
                                        (n2 += ((i2 ^ s2 ^ o2) + t2[13] + 681279174) | 0),
                                        (n2 = (((n2 << 4) | (n2 >>> 28)) + i2) | 0),
                                        (o2 += ((n2 ^ i2 ^ s2) + t2[0] - 358537222) | 0),
                                        (o2 = (((o2 << 11) | (o2 >>> 21)) + n2) | 0),
                                        (s2 += ((o2 ^ n2 ^ i2) + t2[3] - 722521979) | 0),
                                        (s2 = (((s2 << 16) | (s2 >>> 16)) + o2) | 0),
                                        (i2 += ((s2 ^ o2 ^ n2) + t2[6] + 76029189) | 0),
                                        (i2 = (((i2 << 23) | (i2 >>> 9)) + s2) | 0),
                                        (n2 += ((i2 ^ s2 ^ o2) + t2[9] - 640364487) | 0),
                                        (n2 = (((n2 << 4) | (n2 >>> 28)) + i2) | 0),
                                        (o2 += ((n2 ^ i2 ^ s2) + t2[12] - 421815835) | 0),
                                        (o2 = (((o2 << 11) | (o2 >>> 21)) + n2) | 0),
                                        (s2 += ((o2 ^ n2 ^ i2) + t2[15] + 530742520) | 0),
                                        (s2 = (((s2 << 16) | (s2 >>> 16)) + o2) | 0),
                                        (i2 += ((s2 ^ o2 ^ n2) + t2[2] - 995338651) | 0),
                                        (i2 = (((i2 << 23) | (i2 >>> 9)) + s2) | 0),
                                        (n2 += ((s2 ^ (i2 | ~o2)) + t2[0] - 198630844) | 0),
                                        (n2 = (((n2 << 6) | (n2 >>> 26)) + i2) | 0),
                                        (o2 += ((i2 ^ (n2 | ~s2)) + t2[7] + 1126891415) | 0),
                                        (o2 = (((o2 << 10) | (o2 >>> 22)) + n2) | 0),
                                        (s2 += ((n2 ^ (o2 | ~i2)) + t2[14] - 1416354905) | 0),
                                        (s2 = (((s2 << 15) | (s2 >>> 17)) + o2) | 0),
                                        (i2 += ((o2 ^ (s2 | ~n2)) + t2[5] - 57434055) | 0),
                                        (i2 = (((i2 << 21) | (i2 >>> 11)) + s2) | 0),
                                        (n2 += ((s2 ^ (i2 | ~o2)) + t2[12] + 1700485571) | 0),
                                        (n2 = (((n2 << 6) | (n2 >>> 26)) + i2) | 0),
                                        (o2 += ((i2 ^ (n2 | ~s2)) + t2[3] - 1894986606) | 0),
                                        (o2 = (((o2 << 10) | (o2 >>> 22)) + n2) | 0),
                                        (s2 += ((n2 ^ (o2 | ~i2)) + t2[10] - 1051523) | 0),
                                        (s2 = (((s2 << 15) | (s2 >>> 17)) + o2) | 0),
                                        (i2 += ((o2 ^ (s2 | ~n2)) + t2[1] - 2054922799) | 0),
                                        (i2 = (((i2 << 21) | (i2 >>> 11)) + s2) | 0),
                                        (n2 += ((s2 ^ (i2 | ~o2)) + t2[8] + 1873313359) | 0),
                                        (n2 = (((n2 << 6) | (n2 >>> 26)) + i2) | 0),
                                        (o2 += ((i2 ^ (n2 | ~s2)) + t2[15] - 30611744) | 0),
                                        (o2 = (((o2 << 10) | (o2 >>> 22)) + n2) | 0),
                                        (s2 += ((n2 ^ (o2 | ~i2)) + t2[6] - 1560198380) | 0),
                                        (s2 = (((s2 << 15) | (s2 >>> 17)) + o2) | 0),
                                        (i2 += ((o2 ^ (s2 | ~n2)) + t2[13] + 1309151649) | 0),
                                        (i2 = (((i2 << 21) | (i2 >>> 11)) + s2) | 0),
                                        (n2 += ((s2 ^ (i2 | ~o2)) + t2[4] - 145523070) | 0),
                                        (n2 = (((n2 << 6) | (n2 >>> 26)) + i2) | 0),
                                        (o2 += ((i2 ^ (n2 | ~s2)) + t2[11] - 1120210379) | 0),
                                        (o2 = (((o2 << 10) | (o2 >>> 22)) + n2) | 0),
                                        (s2 += ((n2 ^ (o2 | ~i2)) + t2[2] + 718787259) | 0),
                                        (s2 = (((s2 << 15) | (s2 >>> 17)) + o2) | 0),
                                        (i2 += ((o2 ^ (s2 | ~n2)) + t2[9] - 343485551) | 0),
                                        (i2 = (((i2 << 21) | (i2 >>> 11)) + s2) | 0),
                                        (e2[0] = (n2 + e2[0]) | 0),
                                        (e2[1] = (i2 + e2[1]) | 0),
                                        (e2[2] = (s2 + e2[2]) | 0),
                                        (e2[3] = (o2 + e2[3]) | 0);
                                },
                            },
                        ]
                    );
                    return _a41;
                })()),
                __name(_a4, 'k'),
                _a4);
            a2(k, 'Md5'),
                T(k, 'stateIdentity', new Int32Array([1732584193, -271733879, -1732584194, 271733878])),
                T(k, 'buffer32Identity', new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
                T(k, 'hexChars', '0123456789abcdef'),
                T(k, 'hexOut', []),
                T(k, 'onePassHasher', new k());
            Ke = k;
        });
        var qt = {};
        ee(qt, {
            createHash: function () {
                return $o;
            },
            createHmac: function () {
                return Ko;
            },
            randomBytes: function () {
                return Go;
            },
        });
        __name(Go, 'Go');
        __name($o, '$o');
        __name(Ko, 'Ko');
        var Nt = K(function () {
            p2();
            ii();
            si();
            a2(Go, 'randomBytes');
            a2($o, 'createHash');
            a2(Ko, 'createHmac');
        });
        var Wt = I(function (oi) {
            'use strict';
            var Vo = function Vo(r2) {
                return r2;
            };
            var _a4;
            p2();
            oi.parse = function (r2, e2) {
                return new Qt(r2, e2).parse();
            };
            var ct =
                ((_a4 = /*#__PURE__*/ (function () {
                    function _a41(e2, t2) {
                        _class_call_check(this, _a41);
                        (this.source = e2),
                            (this.transform = t2 || Vo),
                            (this.position = 0),
                            (this.entries = []),
                            (this.recorded = []),
                            (this.dimension = 0);
                    }
                    _create_class(_a41, [
                        {
                            key: 'isEof',
                            value: function isEof() {
                                return this.position >= this.source.length;
                            },
                        },
                        {
                            key: 'nextCharacter',
                            value: function nextCharacter() {
                                var e2 = this.source[this.position++];
                                return e2 === '\\'
                                    ? {
                                          value: this.source[this.position++],
                                          escaped: true,
                                      }
                                    : {
                                          value: e2,
                                          escaped: false,
                                      };
                            },
                        },
                        {
                            key: 'record',
                            value: function record(e2) {
                                this.recorded.push(e2);
                            },
                        },
                        {
                            key: 'newEntry',
                            value: function newEntry(e2) {
                                var t2;
                                (this.recorded.length > 0 || e2) &&
                                    ((t2 = this.recorded.join('')),
                                    t2 === 'NULL' && !e2 && (t2 = null),
                                    t2 !== null && (t2 = this.transform(t2)),
                                    this.entries.push(t2),
                                    (this.recorded = []));
                            },
                        },
                        {
                            key: 'consumeDimensions',
                            value: function consumeDimensions() {
                                if (this.source[0] === '[')
                                    for (; !this.isEof(); ) {
                                        var e2 = this.nextCharacter();
                                        if (e2.value === '=') break;
                                    }
                            },
                        },
                        {
                            key: 'parse',
                            value: function parse(e2) {
                                var t2, n2, i2;
                                for (this.consumeDimensions(); !this.isEof(); )
                                    if (((t2 = this.nextCharacter()), t2.value === '{' && !i2))
                                        this.dimension++,
                                            this.dimension > 1 &&
                                                ((n2 = new _a4(this.source.substr(this.position - 1), this.transform)),
                                                this.entries.push(n2.parse(true)),
                                                (this.position += n2.position - 2));
                                    else if (t2.value === '}' && !i2) {
                                        if ((this.dimension--, !this.dimension && (this.newEntry(), e2)))
                                            return this.entries;
                                    } else
                                        t2.value === '"' && !t2.escaped
                                            ? (i2 && this.newEntry(true), (i2 = !i2))
                                            : t2.value === ',' && !i2
                                            ? this.newEntry()
                                            : this.record(t2.value);
                                if (this.dimension !== 0) throw new Error('array dimension not balanced');
                                return this.entries;
                            },
                        },
                    ]);
                    return _a41;
                })()),
                __name(_a4, 'ct'),
                _a4);
            a2(ct, 'ArrayParser');
            var Qt = ct;
            __name(Vo, 'Vo');
            a2(Vo, 'identity');
        });
        var jt = I(function (mh, ai) {
            p2();
            var zo = Wt();
            ai.exports = {
                create: function create(r2, e2) {
                    return {
                        parse: function parse() {
                            return zo.parse(r2, e2);
                        },
                    };
                },
            };
        });
        var hi = I(function (wh, ci) {
            'use strict';
            var ea = function ea(r2) {
                var e2 = Zo.exec(r2);
                if (e2) {
                    var t2 = parseInt(e2[1], 10),
                        n2 = !!e2[4];
                    n2 && (t2 = ui(t2));
                    var i2 = parseInt(e2[2], 10) - 1,
                        s2 = e2[3],
                        o2 = new Date(t2, i2, s2);
                    return Ht(t2) && o2.setFullYear(t2), o2;
                }
            };
            var ta = function ta(r2) {
                if (r2.endsWith('+00')) return 0;
                var e2 = Jo.exec(r2.split(' ')[1]);
                if (e2) {
                    var t2 = e2[1];
                    if (t2 === 'Z') return 0;
                    var n2 = t2 === '-' ? -1 : 1,
                        i2 = parseInt(e2[2], 10) * 3600 + parseInt(e2[3] || 0, 10) * 60 + parseInt(e2[4] || 0, 10);
                    return i2 * n2 * 1e3;
                }
            };
            var ui = function ui(r2) {
                return -(r2 - 1);
            };
            var Ht = function Ht(r2) {
                return r2 >= 0 && r2 < 100;
            };
            p2();
            var Yo = /(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/,
                Zo = /^(\d{1,})-(\d{2})-(\d{2})( BC)?$/,
                Jo = /([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/,
                Xo = /^-?infinity$/;
            ci.exports = a2(function (e2) {
                if (Xo.test(e2)) return Number(e2.replace('i', 'I'));
                var t2 = Yo.exec(e2);
                if (!t2) return ea(e2) || null;
                var n2 = !!t2[8],
                    i2 = parseInt(t2[1], 10);
                n2 && (i2 = ui(i2));
                var s2 = parseInt(t2[2], 10) - 1,
                    o2 = t2[3],
                    u = parseInt(t2[4], 10),
                    c = parseInt(t2[5], 10),
                    h = parseInt(t2[6], 10),
                    l2 = t2[7];
                l2 = l2 ? 1e3 * parseFloat(l2) : 0;
                var m2,
                    E = ta(e2);
                return (
                    E != null
                        ? ((m2 = new Date(Date.UTC(i2, s2, o2, u, c, h, l2))),
                          Ht(i2) && m2.setUTCFullYear(i2),
                          E !== 0 && m2.setTime(m2.getTime() - E))
                        : ((m2 = new Date(i2, s2, o2, u, c, h, l2)), Ht(i2) && m2.setFullYear(i2)),
                    m2
                );
            }, 'parseDate');
            __name(ea, 'ea');
            a2(ea, 'getDate');
            __name(ta, 'ta');
            a2(ta, 'timeZoneOffset');
            __name(ui, 'ui');
            a2(ui, 'bcYearToNegativeYear');
            __name(Ht, 'Ht');
            a2(Ht, 'is0To99');
        });
        var fi = I(function (xh, li) {
            var na = function na(r2) {
                for (var e2 = 1; e2 < arguments.length; e2++) {
                    var t2 = arguments[e2];
                    for (var n2 in t2) ra.call(t2, n2) && (r2[n2] = t2[n2]);
                }
                return r2;
            };
            p2();
            li.exports = na;
            var ra = Object.prototype.hasOwnProperty;
            __name(na, 'na');
            a2(na, 'extend');
        });
        var yi = I(function (_h, di) {
            'use strict';
            var ya = function ya(r2) {
                var e2 = r2 + '000000'.slice(r2.length);
                return parseInt(e2, 10) / 1e3;
            };
            var ma = function ma(r2) {
                if (!r2) return {};
                var e2 = pa.exec(r2),
                    t2 = e2[8] === '-';
                return Object.keys(pi).reduce(function (n2, i2) {
                    var s2 = pi[i2],
                        o2 = e2[s2];
                    return (
                        !o2 ||
                            ((o2 = i2 === 'milliseconds' ? ya(o2) : parseInt(o2, 10)), !o2) ||
                            (t2 && ~da.indexOf(i2) && (o2 *= -1), (n2[i2] = o2)),
                        n2
                    );
                }, {});
            };
            p2();
            var ia = fi();
            di.exports = Fe;
            function Fe(r2) {
                if (!_instanceof(this, Fe)) return new Fe(r2);
                ia(this, ma(r2));
            }
            __name(Fe, 'Fe');
            a2(Fe, 'PostgresInterval');
            var sa = ['seconds', 'minutes', 'hours', 'days', 'months', 'years'];
            Fe.prototype.toPostgres = function () {
                var r2 = sa.filter(this.hasOwnProperty, this);
                return (
                    this.milliseconds && r2.indexOf('seconds') < 0 && r2.push('seconds'),
                    r2.length === 0
                        ? '0'
                        : r2
                              .map(function (e2) {
                                  var t2 = this[e2] || 0;
                                  return (
                                      e2 === 'seconds' &&
                                          this.milliseconds &&
                                          (t2 = (t2 + this.milliseconds / 1e3).toFixed(6).replace(/\.?0+$/, '')),
                                      t2 + ' ' + e2
                                  );
                              }, this)
                              .join(' ')
                );
            };
            var oa = {
                    years: 'Y',
                    months: 'M',
                    days: 'D',
                    hours: 'H',
                    minutes: 'M',
                    seconds: 'S',
                },
                aa = ['years', 'months', 'days'],
                ua = ['hours', 'minutes', 'seconds'];
            Fe.prototype.toISOString = Fe.prototype.toISO = function () {
                var t2 = function t2(n2) {
                    var i2 = this[n2] || 0;
                    return (
                        n2 === 'seconds' &&
                            this.milliseconds &&
                            (i2 = (i2 + this.milliseconds / 1e3).toFixed(6).replace(/0+$/, '')),
                        i2 + oa[n2]
                    );
                };
                var r2 = aa.map(t2, this).join(''),
                    e2 = ua.map(t2, this).join('');
                return 'P' + r2 + 'T' + e2;
                __name(t2, 't');
            };
            var Gt = '([+-]?\\d+)',
                ca = Gt + '\\s+years?',
                ha = Gt + '\\s+mons?',
                la = Gt + '\\s+days?',
                fa = '([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?',
                pa = new RegExp(
                    [ca, ha, la, fa]
                        .map(function (r2) {
                            return '(' + r2 + ')?';
                        })
                        .join('\\s*')
                ),
                pi = {
                    years: 2,
                    months: 4,
                    days: 6,
                    hours: 9,
                    minutes: 10,
                    seconds: 11,
                    milliseconds: 12,
                },
                da = ['hours', 'minutes', 'seconds', 'milliseconds'];
            __name(ya, 'ya');
            a2(ya, 'parseMilliseconds');
            __name(ma, 'ma');
            a2(ma, 'parse');
        });
        var gi = I(function (Ih, mi) {
            'use strict';
            p2();
            mi.exports = a2(function (e2) {
                if (/^\\x/.test(e2)) return new d(e2.substr(2), 'hex');
                for (var t2 = '', n2 = 0; n2 < e2.length; )
                    if (e2[n2] !== '\\') (t2 += e2[n2]), ++n2;
                    else if (/[0-7]{3}/.test(e2.substr(n2 + 1, 3)))
                        (t2 += String.fromCharCode(parseInt(e2.substr(n2 + 1, 3), 8))), (n2 += 4);
                    else {
                        for (var i2 = 1; n2 + i2 < e2.length && e2[n2 + i2] === '\\'; ) i2++;
                        for (var s2 = 0; s2 < Math.floor(i2 / 2); ++s2) t2 += '\\';
                        n2 += Math.floor(i2 / 2) * 2;
                    }
                return new d(t2, 'binary');
            }, 'parseBytea');
        });
        var _i = I(function (Bh, vi) {
            var lt = function lt(r2) {
                return a2(function (t2) {
                    return t2 === null ? t2 : r2(t2);
                }, 'nullAllowed');
            };
            var xi = function xi(r2) {
                return r2 === null
                    ? r2
                    : r2 === 'TRUE' ||
                          r2 === 't' ||
                          r2 === 'true' ||
                          r2 === 'y' ||
                          r2 === 'yes' ||
                          r2 === 'on' ||
                          r2 === '1';
            };
            var ga = function ga(r2) {
                return r2 ? Ve.parse(r2, xi) : null;
            };
            var wa = function wa(r2) {
                return parseInt(r2, 10);
            };
            var $t = function $t(r2) {
                return r2 ? Ve.parse(r2, lt(wa)) : null;
            };
            var ba = function ba(r2) {
                return r2
                    ? Ve.parse(
                          r2,
                          lt(function (e2) {
                              return Ei(e2).trim();
                          })
                      )
                    : null;
            };
            p2();
            var Ve = Wt(),
                ze = jt(),
                ht = hi(),
                bi = yi(),
                Si = gi();
            __name(lt, 'lt');
            a2(lt, 'allowNull');
            __name(xi, 'xi');
            a2(xi, 'parseBool');
            __name(ga, 'ga');
            a2(ga, 'parseBoolArray');
            __name(wa, 'wa');
            a2(wa, 'parseBaseTenInt');
            __name($t, '$t');
            a2($t, 'parseIntegerArray');
            __name(ba, 'ba');
            a2(ba, 'parseBigIntegerArray');
            var Sa = a2(function (r2) {
                    if (!r2) return null;
                    var e2 = ze.create(r2, function (t2) {
                        return t2 !== null && (t2 = Yt(t2)), t2;
                    });
                    return e2.parse();
                }, 'parsePointArray'),
                Kt = a2(function (r2) {
                    if (!r2) return null;
                    var e2 = ze.create(r2, function (t2) {
                        return t2 !== null && (t2 = parseFloat(t2)), t2;
                    });
                    return e2.parse();
                }, 'parseFloatArray'),
                re = a2(function (r2) {
                    if (!r2) return null;
                    var e2 = ze.create(r2);
                    return e2.parse();
                }, 'parseStringArray'),
                Vt = a2(function (r2) {
                    if (!r2) return null;
                    var e2 = ze.create(r2, function (t2) {
                        return t2 !== null && (t2 = ht(t2)), t2;
                    });
                    return e2.parse();
                }, 'parseDateArray'),
                xa = a2(function (r2) {
                    if (!r2) return null;
                    var e2 = ze.create(r2, function (t2) {
                        return t2 !== null && (t2 = bi(t2)), t2;
                    });
                    return e2.parse();
                }, 'parseIntervalArray'),
                Ea = a2(function (r2) {
                    return r2 ? Ve.parse(r2, lt(Si)) : null;
                }, 'parseByteAArray'),
                zt = a2(function (r2) {
                    return parseInt(r2, 10);
                }, 'parseInteger'),
                Ei = a2(function (r2) {
                    var e2 = String(r2);
                    return /^\d+$/.test(e2) ? e2 : r2;
                }, 'parseBigInteger'),
                wi = a2(function (r2) {
                    return r2 ? Ve.parse(r2, lt(JSON.parse)) : null;
                }, 'parseJsonArray'),
                Yt = a2(function (r2) {
                    return r2[0] !== '('
                        ? null
                        : ((r2 = r2.substring(1, r2.length - 1).split(',')),
                          {
                              x: parseFloat(r2[0]),
                              y: parseFloat(r2[1]),
                          });
                }, 'parsePoint'),
                va = a2(function (r2) {
                    if (r2[0] !== '<' && r2[1] !== '(') return null;
                    for (var e2 = '(', t2 = '', n2 = false, i2 = 2; i2 < r2.length - 1; i2++) {
                        if ((n2 || (e2 += r2[i2]), r2[i2] === ')')) {
                            n2 = true;
                            continue;
                        } else if (!n2) continue;
                        r2[i2] !== ',' && (t2 += r2[i2]);
                    }
                    var s2 = Yt(e2);
                    return (s2.radius = parseFloat(t2)), s2;
                }, 'parseCircle'),
                _a4 = a2(function (r2) {
                    r2(20, Ei),
                        r2(21, zt),
                        r2(23, zt),
                        r2(26, zt),
                        r2(700, parseFloat),
                        r2(701, parseFloat),
                        r2(16, xi),
                        r2(1082, ht),
                        r2(1114, ht),
                        r2(1184, ht),
                        r2(600, Yt),
                        r2(651, re),
                        r2(718, va),
                        r2(1e3, ga),
                        r2(1001, Ea),
                        r2(1005, $t),
                        r2(1007, $t),
                        r2(1028, $t),
                        r2(1016, ba),
                        r2(1017, Sa),
                        r2(1021, Kt),
                        r2(1022, Kt),
                        r2(1231, Kt),
                        r2(1014, re),
                        r2(1015, re),
                        r2(1008, re),
                        r2(1009, re),
                        r2(1040, re),
                        r2(1041, re),
                        r2(1115, Vt),
                        r2(1182, Vt),
                        r2(1185, Vt),
                        r2(1186, bi),
                        r2(1187, xa),
                        r2(17, Si),
                        r2(114, JSON.parse.bind(JSON)),
                        r2(3802, JSON.parse.bind(JSON)),
                        r2(199, wi),
                        r2(3807, wi),
                        r2(3907, re),
                        r2(2951, re),
                        r2(791, re),
                        r2(1183, re),
                        r2(1270, re);
                }, 'init');
            vi.exports = {
                init: _a4,
            };
        });
        var Ci = I(function (Fh, Ai) {
            'use strict';
            var Aa = function Aa(r2) {
                var e2 = r2.readInt32BE(0),
                    t2 = r2.readUInt32BE(4),
                    n2 = '';
                e2 < 0 && ((e2 = ~e2 + (t2 === 0)), (t2 = (~t2 + 1) >>> 0), (n2 = '-'));
                var i2 = '',
                    s2,
                    o2,
                    u,
                    c,
                    h,
                    l2;
                {
                    if (
                        ((s2 = e2 % Y),
                        (e2 = (e2 / Y) >>> 0),
                        (o2 = 4294967296 * s2 + t2),
                        (t2 = (o2 / Y) >>> 0),
                        (u = '' + (o2 - Y * t2)),
                        t2 === 0 && e2 === 0)
                    )
                        return n2 + u + i2;
                    for (c = '', h = 6 - u.length, l2 = 0; l2 < h; l2++) c += '0';
                    i2 = c + u + i2;
                }
                {
                    if (
                        ((s2 = e2 % Y),
                        (e2 = (e2 / Y) >>> 0),
                        (o2 = 4294967296 * s2 + t2),
                        (t2 = (o2 / Y) >>> 0),
                        (u = '' + (o2 - Y * t2)),
                        t2 === 0 && e2 === 0)
                    )
                        return n2 + u + i2;
                    for (c = '', h = 6 - u.length, l2 = 0; l2 < h; l2++) c += '0';
                    i2 = c + u + i2;
                }
                {
                    if (
                        ((s2 = e2 % Y),
                        (e2 = (e2 / Y) >>> 0),
                        (o2 = 4294967296 * s2 + t2),
                        (t2 = (o2 / Y) >>> 0),
                        (u = '' + (o2 - Y * t2)),
                        t2 === 0 && e2 === 0)
                    )
                        return n2 + u + i2;
                    for (c = '', h = 6 - u.length, l2 = 0; l2 < h; l2++) c += '0';
                    i2 = c + u + i2;
                }
                return (s2 = e2 % Y), (o2 = 4294967296 * s2 + t2), (u = '' + (o2 % Y)), n2 + u + i2;
            };
            p2();
            var Y = 1e6;
            __name(Aa, 'Aa');
            a2(Aa, 'readInt8');
            Ai.exports = Aa;
        });
        var Li = I(function (Oh, Bi) {
            p2();
            var Ca = Ci(),
                R = a2(function (r2, e2, t2, n2, i2) {
                    (t2 = t2 || 0),
                        (n2 = n2 || false),
                        (i2 =
                            i2 ||
                            function (_, P, N) {
                                return _ * Math.pow(2, N) + P;
                            });
                    var s2 = t2 >> 3,
                        o2 = a2(function (_) {
                            return n2 ? ~_ & 255 : _;
                        }, 'inv'),
                        u = 255,
                        c = 8 - (t2 % 8);
                    e2 < c && ((u = (255 << (8 - e2)) & 255), (c = e2)), t2 && (u = u >> t2 % 8);
                    var h = 0;
                    (t2 % 8) + e2 >= 8 && (h = i2(0, o2(r2[s2]) & u, c));
                    for (var l2 = (e2 + t2) >> 3, m2 = s2 + 1; m2 < l2; m2++) h = i2(h, o2(r2[m2]), 8);
                    var E = (e2 + t2) % 8;
                    return E > 0 && (h = i2(h, o2(r2[l2]) >> (8 - E), E)), h;
                }, 'parseBits'),
                Pi = a2(function (r2, e2, t2) {
                    var n2 = Math.pow(2, t2 - 1) - 1,
                        i2 = R(r2, 1),
                        s2 = R(r2, t2, 1);
                    if (s2 === 0) return 0;
                    var o2 = 1,
                        u = a2(function (h, l2, m2) {
                            h === 0 && (h = 1);
                            for (var E = 1; E <= m2; E++) (o2 /= 2), (l2 & (1 << (m2 - E))) > 0 && (h += o2);
                            return h;
                        }, 'parsePrecisionBits'),
                        c = R(r2, e2, t2 + 1, false, u);
                    return s2 == Math.pow(2, t2 + 1) - 1
                        ? c === 0
                            ? i2 === 0
                                ? 1 / 0
                                : -1 / 0
                            : NaN
                        : (i2 === 0 ? 1 : -1) * Math.pow(2, s2 - n2) * c;
                }, 'parseFloatFromBits'),
                Ia = a2(function (r2) {
                    return R(r2, 1) == 1 ? -1 * (R(r2, 15, 1, true) + 1) : R(r2, 15, 1);
                }, 'parseInt16'),
                Ii = a2(function (r2) {
                    return R(r2, 1) == 1 ? -1 * (R(r2, 31, 1, true) + 1) : R(r2, 31, 1);
                }, 'parseInt32'),
                Ta = a2(function (r2) {
                    return Pi(r2, 23, 8);
                }, 'parseFloat32'),
                Pa = a2(function (r2) {
                    return Pi(r2, 52, 11);
                }, 'parseFloat64'),
                Ba = a2(function (r2) {
                    var e2 = R(r2, 16, 32);
                    if (e2 == 49152) return NaN;
                    for (var t2 = Math.pow(1e4, R(r2, 16, 16)), n2 = 0, i2 = [], s2 = R(r2, 16), o2 = 0; o2 < s2; o2++)
                        (n2 += R(r2, 16, 64 + 16 * o2) * t2), (t2 /= 1e4);
                    var u = Math.pow(10, R(r2, 16, 48));
                    return ((e2 === 0 ? 1 : -1) * Math.round(n2 * u)) / u;
                }, 'parseNumeric'),
                Ti = a2(function (r2, e2) {
                    var t2 = R(e2, 1),
                        n2 = R(e2, 63, 1),
                        i2 = new Date(((t2 === 0 ? 1 : -1) * n2) / 1e3 + 9466848e5);
                    return (
                        r2 || i2.setTime(i2.getTime() + i2.getTimezoneOffset() * 6e4),
                        (i2.usec = n2 % 1e3),
                        (i2.getMicroSeconds = function () {
                            return this.usec;
                        }),
                        (i2.setMicroSeconds = function (s2) {
                            this.usec = s2;
                        }),
                        (i2.getUTCMicroSeconds = function () {
                            return this.usec;
                        }),
                        i2
                    );
                }, 'parseDate'),
                Ye = a2(function (r2) {
                    for (
                        var e2 = R(r2, 32), t2 = R(r2, 32, 32), n2 = R(r2, 32, 64), i2 = 96, s2 = [], o2 = 0;
                        o2 < e2;
                        o2++
                    )
                        (s2[o2] = R(r2, 32, i2)), (i2 += 32), (i2 += 32);
                    var u = a2(function (h) {
                            var l2 = R(r2, 32, i2);
                            if (((i2 += 32), l2 == 4294967295)) return null;
                            var m2;
                            if (h == 23 || h == 20) return (m2 = R(r2, l2 * 8, i2)), (i2 += l2 * 8), m2;
                            if (h == 25) return (m2 = r2.toString(this.encoding, i2 >> 3, (i2 += l2 << 3) >> 3)), m2;
                            console.log('ERROR: ElementType not implemented: ' + h);
                        }, 'parseElement'),
                        c = a2(function (h, l2) {
                            var m2 = [],
                                E;
                            if (h.length > 1) {
                                var _ = h.shift();
                                for (E = 0; E < _; E++) m2[E] = c(h, l2);
                                h.unshift(_);
                            } else for (E = 0; E < h[0]; E++) m2[E] = u(l2);
                            return m2;
                        }, 'parse');
                    return c(s2, n2);
                }, 'parseArray'),
                La = a2(function (r2) {
                    return r2.toString('utf8');
                }, 'parseText'),
                Ra = a2(function (r2) {
                    return r2 === null ? null : R(r2, 8) > 0;
                }, 'parseBool'),
                Fa = a2(function (r2) {
                    r2(20, Ca),
                        r2(21, Ia),
                        r2(23, Ii),
                        r2(26, Ii),
                        r2(1700, Ba),
                        r2(700, Ta),
                        r2(701, Pa),
                        r2(16, Ra),
                        r2(1114, Ti.bind(null, false)),
                        r2(1184, Ti.bind(null, true)),
                        r2(1e3, Ye),
                        r2(1007, Ye),
                        r2(1016, Ye),
                        r2(1008, Ye),
                        r2(1009, Ye),
                        r2(25, La);
                }, 'init');
            Bi.exports = {
                init: Fa,
            };
        });
        var Fi = I(function (qh, Ri) {
            p2();
            Ri.exports = {
                BOOL: 16,
                BYTEA: 17,
                CHAR: 18,
                INT8: 20,
                INT2: 21,
                INT4: 23,
                REGPROC: 24,
                TEXT: 25,
                OID: 26,
                TID: 27,
                XID: 28,
                CID: 29,
                JSON: 114,
                XML: 142,
                PG_NODE_TREE: 194,
                SMGR: 210,
                PATH: 602,
                POLYGON: 604,
                CIDR: 650,
                FLOAT4: 700,
                FLOAT8: 701,
                ABSTIME: 702,
                RELTIME: 703,
                TINTERVAL: 704,
                CIRCLE: 718,
                MACADDR8: 774,
                MONEY: 790,
                MACADDR: 829,
                INET: 869,
                ACLITEM: 1033,
                BPCHAR: 1042,
                VARCHAR: 1043,
                DATE: 1082,
                TIME: 1083,
                TIMESTAMP: 1114,
                TIMESTAMPTZ: 1184,
                INTERVAL: 1186,
                TIMETZ: 1266,
                BIT: 1560,
                VARBIT: 1562,
                NUMERIC: 1700,
                REFCURSOR: 1790,
                REGPROCEDURE: 2202,
                REGOPER: 2203,
                REGOPERATOR: 2204,
                REGCLASS: 2205,
                REGTYPE: 2206,
                UUID: 2950,
                TXID_SNAPSHOT: 2970,
                PG_LSN: 3220,
                PG_NDISTINCT: 3361,
                PG_DEPENDENCIES: 3402,
                TSVECTOR: 3614,
                TSQUERY: 3615,
                GTSVECTOR: 3642,
                REGCONFIG: 3734,
                REGDICTIONARY: 3769,
                JSONB: 3802,
                REGNAMESPACE: 4089,
                REGROLE: 4096,
            };
        });
        var Xe = I(function (Je) {
            var Mi = function Mi(r2) {
                return String(r2);
            };
            var Ua = function Ua(r2, e2) {
                return (e2 = e2 || 'text'), (Ze[e2] && Ze[e2][r2]) || Mi;
            };
            var qa = function qa(r2, e2, t2) {
                typeof e2 == 'function' && ((t2 = e2), (e2 = 'text')), (Ze[e2][r2] = t2);
            };
            p2();
            var Ma = _i(),
                Da = Li(),
                Oa = jt(),
                ka = Fi();
            Je.getTypeParser = Ua;
            Je.setTypeParser = qa;
            Je.arrayParser = Oa;
            Je.builtins = ka;
            var Ze = {
                text: {},
                binary: {},
            };
            __name(Mi, 'Mi');
            a2(Mi, 'noParse');
            __name(Ua, 'Ua');
            a2(Ua, 'getTypeParser');
            __name(qa, 'qa');
            a2(qa, 'setTypeParser');
            Ma.init(function (r2, e2) {
                Ze.text[r2] = e2;
            });
            Da.init(function (r2, e2) {
                Ze.binary[r2] = e2;
            });
        });
        var et = I(function (Hh, Zt) {
            'use strict';
            p2();
            Zt.exports = {
                host: 'localhost',
                user: y.platform === 'win32' ? y.env.USERNAME : y.env.USER,
                database: void 0,
                password: null,
                connectionString: void 0,
                port: 5432,
                rows: 0,
                binary: false,
                max: 10,
                idleTimeoutMillis: 3e4,
                client_encoding: '',
                ssl: false,
                application_name: void 0,
                fallback_application_name: void 0,
                options: void 0,
                parseInputDatesAsUTC: false,
                statement_timeout: false,
                lock_timeout: false,
                idle_in_transaction_session_timeout: false,
                query_timeout: false,
                connect_timeout: 0,
                keepalives: 1,
                keepalives_idle: 0,
            };
            var Me = Xe(),
                Na = Me.getTypeParser(20, 'text'),
                Qa = Me.getTypeParser(1016, 'text');
            Zt.exports.__defineSetter__('parseInt8', function (r2) {
                Me.setTypeParser(20, 'text', r2 ? Me.getTypeParser(23, 'text') : Na),
                    Me.setTypeParser(1016, 'text', r2 ? Me.getTypeParser(1007, 'text') : Qa);
            });
        });
        var tt = I(function ($h, Oi) {
            'use strict';
            var Ha = function Ha(r2) {
                var e2 = r2.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
                return '"' + e2 + '"';
            };
            var Ga = function Ga(r2, e2) {
                if (r2 && typeof r2.toPostgres == 'function') {
                    if (((e2 = e2 || []), e2.indexOf(r2) !== -1))
                        throw new Error('circular reference detected while preparing "' + r2 + '" for query');
                    return e2.push(r2), ft(r2.toPostgres(ft), e2);
                }
                return JSON.stringify(r2);
            };
            var j = function j(r2, e2) {
                for (r2 = '' + r2; r2.length < e2; ) r2 = '0' + r2;
                return r2;
            };
            var $a = function $a(r2) {
                var e2 = -r2.getTimezoneOffset(),
                    t2 = r2.getFullYear(),
                    n2 = t2 < 1;
                n2 && (t2 = Math.abs(t2) + 1);
                var i2 =
                    j(t2, 4) +
                    '-' +
                    j(r2.getMonth() + 1, 2) +
                    '-' +
                    j(r2.getDate(), 2) +
                    'T' +
                    j(r2.getHours(), 2) +
                    ':' +
                    j(r2.getMinutes(), 2) +
                    ':' +
                    j(r2.getSeconds(), 2) +
                    '.' +
                    j(r2.getMilliseconds(), 3);
                return (
                    e2 < 0 ? ((i2 += '-'), (e2 *= -1)) : (i2 += '+'),
                    (i2 += j(Math.floor(e2 / 60), 2) + ':' + j(e2 % 60, 2)),
                    n2 && (i2 += ' BC'),
                    i2
                );
            };
            var Ka = function Ka(r2) {
                var e2 = r2.getUTCFullYear(),
                    t2 = e2 < 1;
                t2 && (e2 = Math.abs(e2) + 1);
                var n2 =
                    j(e2, 4) +
                    '-' +
                    j(r2.getUTCMonth() + 1, 2) +
                    '-' +
                    j(r2.getUTCDate(), 2) +
                    'T' +
                    j(r2.getUTCHours(), 2) +
                    ':' +
                    j(r2.getUTCMinutes(), 2) +
                    ':' +
                    j(r2.getUTCSeconds(), 2) +
                    '.' +
                    j(r2.getUTCMilliseconds(), 3);
                return (n2 += '+00:00'), t2 && (n2 += ' BC'), n2;
            };
            var Va = function Va(r2, e2, t2) {
                return (
                    (r2 =
                        typeof r2 == 'string'
                            ? {
                                  text: r2,
                              }
                            : r2),
                    e2 && (typeof e2 == 'function' ? (r2.callback = e2) : (r2.values = e2)),
                    t2 && (r2.callback = t2),
                    r2
                );
            };
            p2();
            var Wa = (Nt(), O(qt)),
                ja = et();
            __name(Ha, 'Ha');
            a2(Ha, 'escapeElement');
            function Di(r2) {
                for (var e2 = '{', t2 = 0; t2 < r2.length; t2++)
                    t2 > 0 && (e2 = e2 + ','),
                        r2[t2] === null || _type_of(r2[t2]) > 'u'
                            ? (e2 = e2 + 'NULL')
                            : Array.isArray(r2[t2])
                            ? (e2 = e2 + Di(r2[t2]))
                            : _instanceof(r2[t2], d)
                            ? (e2 += '\\\\x' + r2[t2].toString('hex'))
                            : (e2 += Ha(ft(r2[t2])));
                return (e2 = e2 + '}'), e2;
            }
            __name(Di, 'Di');
            a2(Di, 'arrayString');
            var ft = a2(function (r2, e2) {
                if (r2 == null) return null;
                if (_instanceof(r2, d)) return r2;
                if (ArrayBuffer.isView(r2)) {
                    var t2 = d.from(r2.buffer, r2.byteOffset, r2.byteLength);
                    return t2.length === r2.byteLength ? t2 : t2.slice(r2.byteOffset, r2.byteOffset + r2.byteLength);
                }
                return _instanceof(r2, Date)
                    ? ja.parseInputDatesAsUTC
                        ? Ka(r2)
                        : $a(r2)
                    : Array.isArray(r2)
                    ? Di(r2)
                    : typeof r2 == 'object'
                    ? Ga(r2, e2)
                    : r2.toString();
            }, 'prepareValue');
            __name(Ga, 'Ga');
            a2(Ga, 'prepareObject');
            __name(j, 'j');
            a2(j, 'pad');
            __name($a, '$a');
            a2($a, 'dateToString');
            __name(Ka, 'Ka');
            a2(Ka, 'dateToStringUTC');
            __name(Va, 'Va');
            a2(Va, 'normalizeQueryConfig');
            var Jt = a2(function (r2) {
                    return Wa.createHash('md5').update(r2, 'utf-8').digest('hex');
                }, 'md5'),
                za = a2(function (r2, e2, t2) {
                    var n2 = Jt(e2 + r2),
                        i2 = Jt(d.concat([d.from(n2), t2]));
                    return 'md5' + i2;
                }, 'postgresMd5PasswordHash');
            Oi.exports = {
                prepareValue: a2(function (e2) {
                    return ft(e2);
                }, 'prepareValueWrapper'),
                normalizeQueryConfig: Va,
                postgresMd5PasswordHash: za,
                md5: Jt,
            };
        });
        var Qi = I(function (zh, Ni) {
            'use strict';
            var Ya = function Ya(r2) {
                if (r2.indexOf('SCRAM-SHA-256') === -1)
                    throw new Error('SASL: Only mechanism SCRAM-SHA-256 is currently supported');
                var e2 = Xt.randomBytes(18).toString('base64');
                return {
                    mechanism: 'SCRAM-SHA-256',
                    clientNonce: e2,
                    response: 'n,,n=*,r=' + e2,
                    message: 'SASLInitialResponse',
                };
            };
            var Za = function Za(r2, e2, t2) {
                if (r2.message !== 'SASLInitialResponse')
                    throw new Error('SASL: Last message was not SASLInitialResponse');
                if (typeof e2 != 'string')
                    throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string');
                if (typeof t2 != 'string')
                    throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a string');
                var n2 = eu(t2);
                if (n2.nonce.startsWith(r2.clientNonce)) {
                    if (n2.nonce.length === r2.clientNonce.length)
                        throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short');
                } else
                    throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce');
                var i2 = d.from(n2.salt, 'base64'),
                    s2 = nu(e2, i2, n2.iteration),
                    o2 = De(s2, 'Client Key'),
                    u = ru(o2),
                    c = 'n=*,r=' + r2.clientNonce,
                    h = 'r=' + n2.nonce + ',s=' + n2.salt + ',i=' + n2.iteration,
                    l2 = 'c=biws,r=' + n2.nonce,
                    m2 = c + ',' + h + ',' + l2,
                    E = De(u, m2),
                    _ = qi(o2, E),
                    P = _.toString('base64'),
                    N = De(s2, 'Server Key'),
                    X = De(N, m2);
                (r2.message = 'SASLResponse'),
                    (r2.serverSignature = X.toString('base64')),
                    (r2.response = l2 + ',p=' + P);
            };
            var Ja = function Ja(r2, e2) {
                if (r2.message !== 'SASLResponse') throw new Error('SASL: Last message was not SASLResponse');
                if (typeof e2 != 'string')
                    throw new Error('SASL: SCRAM-SERVER-FINAL-MESSAGE: serverData must be a string');
                var _tu = tu(e2),
                    t2 = _tu.serverSignature;
                if (t2 !== r2.serverSignature)
                    throw new Error('SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature does not match');
            };
            var Xa = function Xa(r2) {
                if (typeof r2 != 'string') throw new TypeError('SASL: text must be a string');
                return r2
                    .split('')
                    .map(function (e2, t2) {
                        return r2.charCodeAt(t2);
                    })
                    .every(function (e2) {
                        return (e2 >= 33 && e2 <= 43) || (e2 >= 45 && e2 <= 126);
                    });
            };
            var ki = function ki(r2) {
                return /^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(r2);
            };
            var Ui = function Ui(r2) {
                if (typeof r2 != 'string') throw new TypeError('SASL: attribute pairs text must be a string');
                return new Map(
                    r2.split(',').map(function (e2) {
                        if (!/^.=/.test(e2)) throw new Error('SASL: Invalid attribute pair entry');
                        var t2 = e2[0],
                            n2 = e2.substring(2);
                        return [t2, n2];
                    })
                );
            };
            var eu = function eu(r2) {
                var e2 = Ui(r2),
                    t2 = e2.get('r');
                if (t2) {
                    if (!Xa(t2))
                        throw new Error(
                            'SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce must only contain printable characters'
                        );
                } else throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing');
                var n2 = e2.get('s');
                if (n2) {
                    if (!ki(n2)) throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64');
                } else throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing');
                var i2 = e2.get('i');
                if (i2) {
                    if (!/^[1-9][0-9]*$/.test(i2))
                        throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration count');
                } else throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing');
                var s2 = parseInt(i2, 10);
                return {
                    nonce: t2,
                    salt: n2,
                    iteration: s2,
                };
            };
            var tu = function tu(r2) {
                var t2 = Ui(r2).get('v');
                if (t2) {
                    if (!ki(t2)) throw new Error('SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64');
                } else throw new Error('SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing');
                return {
                    serverSignature: t2,
                };
            };
            var qi = function qi(r2, e2) {
                if (!d.isBuffer(r2)) throw new TypeError('first argument must be a Buffer');
                if (!d.isBuffer(e2)) throw new TypeError('second argument must be a Buffer');
                if (r2.length !== e2.length) throw new Error('Buffer lengths must match');
                if (r2.length === 0) throw new Error('Buffers cannot be empty');
                return d.from(
                    r2.map(function (t2, n2) {
                        return r2[n2] ^ e2[n2];
                    })
                );
            };
            var ru = function ru(r2) {
                return Xt.createHash('sha256').update(r2).digest();
            };
            var De = function De(r2, e2) {
                return Xt.createHmac('sha256', r2).update(e2).digest();
            };
            var nu = function nu(r2, e2, t2) {
                for (var n2 = De(r2, d.concat([e2, d.from([0, 0, 0, 1])])), i2 = n2, s2 = 0; s2 < t2 - 1; s2++)
                    (n2 = De(r2, n2)), (i2 = qi(i2, n2));
                return i2;
            };
            p2();
            var Xt = (Nt(), O(qt));
            __name(Ya, 'Ya');
            a2(Ya, 'startSession');
            __name(Za, 'Za');
            a2(Za, 'continueSession');
            __name(Ja, 'Ja');
            a2(Ja, 'finalizeSession');
            __name(Xa, 'Xa');
            a2(Xa, 'isPrintableChars');
            __name(ki, 'ki');
            a2(ki, 'isBase64');
            __name(Ui, 'Ui');
            a2(Ui, 'parseAttributePairs');
            __name(eu, 'eu');
            a2(eu, 'parseServerFirstMessage');
            __name(tu, 'tu');
            a2(tu, 'parseServerFinalMessage');
            __name(qi, 'qi');
            a2(qi, 'xorBuffers');
            __name(ru, 'ru');
            a2(ru, 'sha256');
            __name(De, 'De');
            a2(De, 'hmacSha256');
            __name(nu, 'nu');
            a2(nu, 'Hi');
            Ni.exports = {
                startSession: Ya,
                continueSession: Za,
                finalizeSession: Ja,
            };
        });
        var er = {};
        ee(er, {
            join: function () {
                return iu;
            },
        });
        __name(iu, 'iu');
        var tr = K(function () {
            p2();
            a2(iu, 'join');
        });
        var rr = {};
        ee(rr, {
            stat: function () {
                return su;
            },
        });
        __name(su, 'su');
        var nr = K(function () {
            p2();
            a2(su, 'stat');
        });
        var ir = {};
        ee(ir, {
            default: function () {
                return ou;
            },
        });
        var ou;
        var sr = K(function () {
            p2();
            ou = {};
        });
        var Wi = {};
        ee(Wi, {
            StringDecoder: function () {
                return or2;
            },
        });
        var ar;
        var or2;
        var ji = K(function () {
            var _a4;
            p2();
            ar =
                ((_a4 = /*#__PURE__*/ (function () {
                    function _a4(e2) {
                        _class_call_check(this, _a4);
                        T(this, 'td');
                        this.td = new TextDecoder(e2);
                    }
                    _create_class(_a4, [
                        {
                            key: 'write',
                            value: function write(e2) {
                                return this.td.decode(e2, {
                                    stream: true,
                                });
                            },
                        },
                        {
                            key: 'end',
                            value: function end(e2) {
                                return this.td.decode(e2);
                            },
                        },
                    ]);
                    return _a4;
                })()),
                __name(_a4, 'ar'),
                _a4);
            a2(ar, 'StringDecoder');
            or2 = ar;
        });
        var Ki = I(function (sl, $i) {
            'use strict';
            var cu = function cu(r2, e2, t2) {
                var n2;
                if (this.overflow) {
                    if (((n2 = this[pt].write(r2).split(this.matcher)), n2.length === 1)) return t2();
                    n2.shift(), (this.overflow = false);
                } else (this[be] += this[pt].write(r2)), (n2 = this[be].split(this.matcher));
                this[be] = n2.pop();
                for (var i2 = 0; i2 < n2.length; i2++)
                    try {
                        Gi(this, this.mapper(n2[i2]));
                    } catch (s2) {
                        return t2(s2);
                    }
                if (((this.overflow = this[be].length > this.maxLength), this.overflow && !this.skipOverflow)) {
                    t2(new Error('maximum buffer reached'));
                    return;
                }
                t2();
            };
            var hu = function hu(r2) {
                if (((this[be] += this[pt].end()), this[be]))
                    try {
                        Gi(this, this.mapper(this[be]));
                    } catch (e2) {
                        return r2(e2);
                    }
                r2();
            };
            var Gi = function Gi(r2, e2) {
                e2 !== void 0 && r2.push(e2);
            };
            var Hi = function Hi(r2) {
                return r2;
            };
            var lu = function lu(r2, e2, t2) {
                switch (((r2 = r2 || /\r?\n/), (e2 = e2 || Hi), (t2 = t2 || {}), arguments.length)) {
                    case 1:
                        typeof r2 == 'function'
                            ? ((e2 = r2), (r2 = /\r?\n/))
                            : typeof r2 == 'object' &&
                              !_instanceof(r2, RegExp) &&
                              !r2[Symbol.split] &&
                              ((t2 = r2), (r2 = /\r?\n/));
                        break;
                    case 2:
                        typeof r2 == 'function'
                            ? ((t2 = e2), (e2 = r2), (r2 = /\r?\n/))
                            : typeof e2 == 'object' && ((t2 = e2), (e2 = Hi));
                }
                (t2 = Object.assign({}, t2)),
                    (t2.autoDestroy = true),
                    (t2.transform = cu),
                    (t2.flush = hu),
                    (t2.readableObjectMode = true);
                var n2 = new au(t2);
                return (
                    (n2[be] = ''),
                    (n2[pt] = new uu('utf8')),
                    (n2.matcher = r2),
                    (n2.mapper = e2),
                    (n2.maxLength = t2.maxLength),
                    (n2.skipOverflow = t2.skipOverflow || false),
                    (n2.overflow = false),
                    (n2._destroy = function (i2, s2) {
                        (this._writableState.errorEmitted = false), s2(i2);
                    }),
                    n2
                );
            };
            p2();
            var _ref = (sr(), O(ir)),
                au = _ref.Transform,
                _ref1 = (ji(), O(Wi)),
                uu = _ref1.StringDecoder,
                be = Symbol('last'),
                pt = Symbol('decoder');
            __name(cu, 'cu');
            a2(cu, 'transform');
            __name(hu, 'hu');
            a2(hu, 'flush');
            __name(Gi, 'Gi');
            a2(Gi, 'push');
            __name(Hi, 'Hi');
            a2(Hi, 'noop');
            __name(lu, 'lu');
            a2(lu, 'split');
            $i.exports = lu;
        });
        var Yi = I(function (ul, pe) {
            'use strict';
            var bu = function bu(r2) {
                return (r2 & gu) == wu;
            };
            var cr = function cr() {
                var r2 = _instanceof(rt, fu) && rt.writable === true;
                if (r2) {
                    var e2 = Array.prototype.slice.call(arguments).concat('\n');
                    rt.write(zi.format.apply(zi, e2));
                }
            };
            p2();
            var Vi = (tr(), O(er)),
                fu = (sr(), O(ir)).Stream,
                pu = Ki(),
                zi = (Ge(), O(He)),
                du = 5432,
                dt = y.platform === 'win32',
                rt = y.stderr,
                yu = 56,
                mu = 7,
                gu = 61440,
                wu = 32768;
            __name(bu, 'bu');
            a2(bu, 'isRegFile');
            var Oe = ['host', 'port', 'database', 'user', 'password'],
                ur = Oe.length,
                Su = Oe[ur - 1];
            __name(cr, 'cr');
            a2(cr, 'warn');
            Object.defineProperty(pe.exports, 'isWin', {
                get: function get() {
                    return dt;
                },
                set: function set(r2) {
                    dt = r2;
                },
            });
            pe.exports.warnTo = function (r2) {
                var e2 = rt;
                return (rt = r2), e2;
            };
            pe.exports.getFileName = function (r2) {
                var e2 = r2 || y.env,
                    t2 =
                        e2.PGPASSFILE ||
                        (dt
                            ? Vi.join(e2.APPDATA || './', 'postgresql', 'pgpass.conf')
                            : Vi.join(e2.HOME || './', '.pgpass'));
                return t2;
            };
            pe.exports.usePgPass = function (r2, e2) {
                return Object.prototype.hasOwnProperty.call(y.env, 'PGPASSWORD')
                    ? false
                    : dt
                    ? true
                    : ((e2 = e2 || '<unkn>'),
                      bu(r2.mode)
                          ? r2.mode & (yu | mu)
                              ? (cr(
                                    'WARNING: password file "%s" has group or world access; permissions should be u=rw (0600) or less',
                                    e2
                                ),
                                false)
                              : true
                          : (cr('WARNING: password file "%s" is not a plain file', e2), false));
            };
            var xu = (pe.exports.match = function xu(r2, e2) {
                return Oe.slice(0, -1).reduce(function (t2, n2, i2) {
                    return i2 == 1 && Number(r2[n2] || du) === Number(e2[n2])
                        ? t2 && true
                        : t2 && (e2[n2] === '*' || e2[n2] === r2[n2]);
                }, true);
            });
            pe.exports.getPassword = function (r2, e2, t2) {
                var s2 = function s2(c) {
                    var h = Eu(c);
                    h && vu(h) && xu(r2, h) && ((n2 = h[Su]), i2.end());
                };
                var n2,
                    i2 = e2.pipe(pu());
                __name(s2, 's');
                a2(s2, 'onLine');
                var o2 = a2(function () {
                        e2.destroy(), t2(n2);
                    }, 'onEnd'),
                    u = a2(function (c) {
                        e2.destroy(), cr('WARNING: error on reading file: %s', c), t2(void 0);
                    }, 'onErr');
                e2.on('error', u), i2.on('data', s2).on('end', o2).on('error', u);
            };
            var Eu = (pe.exports.parseLine = function Eu(r2) {
                    if (r2.length < 11 || r2.match(/^\s+#/)) return null;
                    for (
                        var e2 = '',
                            t2 = '',
                            n2 = 0,
                            i2 = 0,
                            s2 = 0,
                            o2 = {},
                            u = false,
                            c = a2(function (l2, m2, E) {
                                var _ = r2.substring(m2, E);
                                Object.hasOwnProperty.call(y.env, 'PGPASS_NO_DEESCAPE') ||
                                    (_ = _.replace(/\\([:\\])/g, '$1')),
                                    (o2[Oe[l2]] = _);
                            }, 'addToObj'),
                            h = 0;
                        h < r2.length - 1;
                        h += 1
                    ) {
                        if (((e2 = r2.charAt(h + 1)), (t2 = r2.charAt(h)), (u = n2 == ur - 1), u)) {
                            c(n2, i2);
                            break;
                        }
                        h >= 0 && e2 == ':' && t2 !== '\\' && (c(n2, i2, h + 1), (i2 = h + 2), (n2 += 1));
                    }
                    return (o2 = Object.keys(o2).length === ur ? o2 : null), o2;
                }),
                vu = (pe.exports.isValidEntry = function vu(r2) {
                    for (
                        var e2 = {
                                0: function (o2) {
                                    return o2.length > 0;
                                },
                                1: function (o2) {
                                    return o2 === '*'
                                        ? true
                                        : ((o2 = Number(o2)),
                                          isFinite(o2) && o2 > 0 && o2 < 9007199254740992 && Math.floor(o2) === o2);
                                },
                                2: function (o2) {
                                    return o2.length > 0;
                                },
                                3: function (o2) {
                                    return o2.length > 0;
                                },
                                4: function (o2) {
                                    return o2.length > 0;
                                },
                            },
                            t2 = 0;
                        t2 < Oe.length;
                        t2 += 1
                    ) {
                        var n2 = e2[t2],
                            i2 = r2[Oe[t2]] || '',
                            s2 = n2(i2);
                        if (!s2) return false;
                    }
                    return true;
                });
        });
        var Ji = I(function (fl, hr) {
            'use strict';
            p2();
            var ll = (tr(), O(er)),
                Zi = (nr(), O(rr)),
                yt = Yi();
            hr.exports = function (r2, e2) {
                var t2 = yt.getFileName();
                Zi.stat(t2, function (n2, i2) {
                    if (n2 || !yt.usePgPass(i2, t2)) return e2(void 0);
                    var s2 = Zi.createReadStream(t2);
                    yt.getPassword(r2, s2, e2);
                });
            };
            hr.exports.warnTo = yt.warnTo;
        });
        var lr = I(function (dl, Xi) {
            'use strict';
            var mt = function mt(r2) {
                (this._types = r2 || _u), (this.text = {}), (this.binary = {});
            };
            p2();
            var _u = Xe();
            __name(mt, 'mt');
            a2(mt, 'TypeOverrides');
            mt.prototype.getOverrides = function (r2) {
                switch (r2) {
                    case 'text':
                        return this.text;
                    case 'binary':
                        return this.binary;
                    default:
                        return {};
                }
            };
            mt.prototype.setTypeParser = function (r2, e2, t2) {
                typeof e2 == 'function' && ((t2 = e2), (e2 = 'text')), (this.getOverrides(e2)[r2] = t2);
            };
            mt.prototype.getTypeParser = function (r2, e2) {
                return (e2 = e2 || 'text'), this.getOverrides(e2)[r2] || this._types.getTypeParser(r2, e2);
            };
            Xi.exports = mt;
        });
        var es = {};
        ee(es, {
            default: function () {
                return Au;
            },
        });
        var Au;
        var ts = K(function () {
            p2();
            Au = {};
        });
        var rs = {};
        ee(rs, {
            parse: function () {
                return fr;
            },
        });
        __name(fr, 'fr');
        var pr = K(function () {
            'use strict';
            p2();
            a2(fr, 'parse');
        });
        var is = I(function (Sl, ns) {
            'use strict';
            var yr = function yr(r2) {
                if (r2.charAt(0) === '/') {
                    var t2 = r2.split(' ');
                    return {
                        host: t2[0],
                        database: t2[1],
                    };
                }
                var e2 = Cu.parse(
                        / |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(r2) ? encodeURI(r2).replace(/\%25(\d\d)/g, '%$1') : r2,
                        true
                    ),
                    t2 = e2.query;
                for (var n2 in t2) Array.isArray(t2[n2]) && (t2[n2] = t2[n2][t2[n2].length - 1]);
                var i2 = (e2.auth || ':').split(':');
                if (
                    ((t2.user = i2[0]),
                    (t2.password = i2.splice(1).join(':')),
                    (t2.port = e2.port),
                    e2.protocol == 'socket:')
                )
                    return (
                        (t2.host = decodeURI(e2.pathname)),
                        (t2.database = e2.query.db),
                        (t2.client_encoding = e2.query.encoding),
                        t2
                    );
                t2.host || (t2.host = e2.hostname);
                var s2 = e2.pathname;
                if (!t2.host && s2 && /^%2f/i.test(s2)) {
                    var o2 = s2.split('/');
                    (t2.host = decodeURIComponent(o2[0])), (s2 = o2.splice(1).join('/'));
                }
                switch (
                    (s2 && s2.charAt(0) === '/' && (s2 = s2.slice(1) || null),
                    (t2.database = s2 && decodeURI(s2)),
                    (t2.ssl === 'true' || t2.ssl === '1') && (t2.ssl = true),
                    t2.ssl === '0' && (t2.ssl = false),
                    (t2.sslcert || t2.sslkey || t2.sslrootcert || t2.sslmode) && (t2.ssl = {}),
                    t2.sslcert && (t2.ssl.cert = dr.readFileSync(t2.sslcert).toString()),
                    t2.sslkey && (t2.ssl.key = dr.readFileSync(t2.sslkey).toString()),
                    t2.sslrootcert && (t2.ssl.ca = dr.readFileSync(t2.sslrootcert).toString()),
                    t2.sslmode)
                ) {
                    case 'disable': {
                        t2.ssl = false;
                        break;
                    }
                    case 'prefer':
                    case 'require':
                    case 'verify-ca':
                    case 'verify-full':
                        break;
                    case 'no-verify': {
                        t2.ssl.rejectUnauthorized = false;
                        break;
                    }
                }
                return t2;
            };
            p2();
            var Cu = (pr(), O(rs)),
                dr = (nr(), O(rr));
            __name(yr, 'yr');
            a2(yr, 'parse');
            ns.exports = yr;
            yr.parse = yr;
        });
        var gt = I(function (vl, as) {
            'use strict';
            var _a4;
            p2();
            var Iu = (ts(), O(es)),
                os = et(),
                ss = is().parse,
                V = a2(function (r2, e2, t2) {
                    return (
                        t2 === void 0 ? (t2 = y.env['PG' + r2.toUpperCase()]) : t2 === false || (t2 = y.env[t2]),
                        e2[r2] || t2 || os[r2]
                    );
                }, 'val'),
                Tu = a2(function () {
                    switch (y.env.PGSSLMODE) {
                        case 'disable':
                            return false;
                        case 'prefer':
                        case 'require':
                        case 'verify-ca':
                        case 'verify-full':
                            return true;
                        case 'no-verify':
                            return {
                                rejectUnauthorized: false,
                            };
                    }
                    return os.ssl;
                }, 'readSSLConfigFromEnvironment'),
                ke = a2(function (r2) {
                    return "'" + ('' + r2).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
                }, 'quoteParamValue'),
                ne = a2(function (r2, e2, t2) {
                    var n2 = e2[t2];
                    n2 != null && r2.push(t2 + '=' + ke(n2));
                }, 'add'),
                gr =
                    ((_a4 = /*#__PURE__*/ (function () {
                        function _a4(e2) {
                            _class_call_check(this, _a4);
                            (e2 = typeof e2 == 'string' ? ss(e2) : e2 || {}),
                                e2.connectionString && (e2 = Object.assign({}, e2, ss(e2.connectionString))),
                                (this.user = V('user', e2)),
                                (this.database = V('database', e2)),
                                this.database === void 0 && (this.database = this.user),
                                (this.port = parseInt(V('port', e2), 10)),
                                (this.host = V('host', e2)),
                                Object.defineProperty(this, 'password', {
                                    configurable: true,
                                    enumerable: false,
                                    writable: true,
                                    value: V('password', e2),
                                }),
                                (this.binary = V('binary', e2)),
                                (this.options = V('options', e2)),
                                (this.ssl = _type_of(e2.ssl) > 'u' ? Tu() : e2.ssl),
                                typeof this.ssl == 'string' && this.ssl === 'true' && (this.ssl = true),
                                this.ssl === 'no-verify' &&
                                    (this.ssl = {
                                        rejectUnauthorized: false,
                                    }),
                                this.ssl &&
                                    this.ssl.key &&
                                    Object.defineProperty(this.ssl, 'key', {
                                        enumerable: false,
                                    }),
                                (this.client_encoding = V('client_encoding', e2)),
                                (this.replication = V('replication', e2)),
                                (this.isDomainSocket = !(this.host || '').indexOf('/')),
                                (this.application_name = V('application_name', e2, 'PGAPPNAME')),
                                (this.fallback_application_name = V('fallback_application_name', e2, false)),
                                (this.statement_timeout = V('statement_timeout', e2, false)),
                                (this.lock_timeout = V('lock_timeout', e2, false)),
                                (this.idle_in_transaction_session_timeout = V(
                                    'idle_in_transaction_session_timeout',
                                    e2,
                                    false
                                )),
                                (this.query_timeout = V('query_timeout', e2, false)),
                                e2.connectionTimeoutMillis === void 0
                                    ? (this.connect_timeout = y.env.PGCONNECT_TIMEOUT || 0)
                                    : (this.connect_timeout = Math.floor(e2.connectionTimeoutMillis / 1e3)),
                                e2.keepAlive === false
                                    ? (this.keepalives = 0)
                                    : e2.keepAlive === true && (this.keepalives = 1),
                                typeof e2.keepAliveInitialDelayMillis == 'number' &&
                                    (this.keepalives_idle = Math.floor(e2.keepAliveInitialDelayMillis / 1e3));
                        }
                        _create_class(_a4, [
                            {
                                key: 'getLibpqConnectionString',
                                value: function getLibpqConnectionString(e2) {
                                    var t2 = [];
                                    ne(t2, this, 'user'),
                                        ne(t2, this, 'password'),
                                        ne(t2, this, 'port'),
                                        ne(t2, this, 'application_name'),
                                        ne(t2, this, 'fallback_application_name'),
                                        ne(t2, this, 'connect_timeout'),
                                        ne(t2, this, 'options');
                                    var n2 =
                                        typeof this.ssl == 'object'
                                            ? this.ssl
                                            : this.ssl
                                            ? {
                                                  sslmode: this.ssl,
                                              }
                                            : {};
                                    if (
                                        (ne(t2, n2, 'sslmode'),
                                        ne(t2, n2, 'sslca'),
                                        ne(t2, n2, 'sslkey'),
                                        ne(t2, n2, 'sslcert'),
                                        ne(t2, n2, 'sslrootcert'),
                                        this.database && t2.push('dbname=' + ke(this.database)),
                                        this.replication && t2.push('replication=' + ke(this.replication)),
                                        this.host && t2.push('host=' + ke(this.host)),
                                        this.isDomainSocket)
                                    )
                                        return e2(null, t2.join(' '));
                                    this.client_encoding && t2.push('client_encoding=' + ke(this.client_encoding)),
                                        Iu.lookup(this.host, function (i2, s2) {
                                            return i2
                                                ? e2(i2, null)
                                                : (t2.push('hostaddr=' + ke(s2)), e2(null, t2.join(' ')));
                                        });
                                },
                            },
                        ]);
                        return _a4;
                    })()),
                    __name(_a4, 'gr'),
                    _a4);
            a2(gr, 'ConnectionParameters');
            var mr = gr;
            as.exports = mr;
        });
        var hs = I(function (Cl, cs) {
            'use strict';
            var _a4;
            p2();
            var Pu = Xe(),
                us = /^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/,
                br =
                    ((_a4 = /*#__PURE__*/ (function () {
                        function _a4(e2, t2) {
                            _class_call_check(this, _a4);
                            (this.command = null),
                                (this.rowCount = null),
                                (this.oid = null),
                                (this.rows = []),
                                (this.fields = []),
                                (this._parsers = void 0),
                                (this._types = t2),
                                (this.RowCtor = null),
                                (this.rowAsArray = e2 === 'array'),
                                this.rowAsArray && (this.parseRow = this._parseRowAsArray);
                        }
                        _create_class(_a4, [
                            {
                                key: 'addCommandComplete',
                                value: function addCommandComplete(e2) {
                                    var t2;
                                    e2.text ? (t2 = us.exec(e2.text)) : (t2 = us.exec(e2.command)),
                                        t2 &&
                                            ((this.command = t2[1]),
                                            t2[3]
                                                ? ((this.oid = parseInt(t2[2], 10)),
                                                  (this.rowCount = parseInt(t2[3], 10)))
                                                : t2[2] && (this.rowCount = parseInt(t2[2], 10)));
                                },
                            },
                            {
                                key: '_parseRowAsArray',
                                value: function _parseRowAsArray(e2) {
                                    for (var t2 = new Array(e2.length), n2 = 0, i2 = e2.length; n2 < i2; n2++) {
                                        var s2 = e2[n2];
                                        s2 !== null ? (t2[n2] = this._parsers[n2](s2)) : (t2[n2] = null);
                                    }
                                    return t2;
                                },
                            },
                            {
                                key: 'parseRow',
                                value: function parseRow(e2) {
                                    for (var t2 = {}, n2 = 0, i2 = e2.length; n2 < i2; n2++) {
                                        var s2 = e2[n2],
                                            o2 = this.fields[n2].name;
                                        s2 !== null ? (t2[o2] = this._parsers[n2](s2)) : (t2[o2] = null);
                                    }
                                    return t2;
                                },
                            },
                            {
                                key: 'addRow',
                                value: function addRow(e2) {
                                    this.rows.push(e2);
                                },
                            },
                            {
                                key: 'addFields',
                                value: function addFields(e2) {
                                    (this.fields = e2), this.fields.length && (this._parsers = new Array(e2.length));
                                    for (var t2 = 0; t2 < e2.length; t2++) {
                                        var n2 = e2[t2];
                                        this._types
                                            ? (this._parsers[t2] = this._types.getTypeParser(
                                                  n2.dataTypeID,
                                                  n2.format || 'text'
                                              ))
                                            : (this._parsers[t2] = Pu.getTypeParser(
                                                  n2.dataTypeID,
                                                  n2.format || 'text'
                                              ));
                                    }
                                },
                            },
                        ]);
                        return _a4;
                    })()),
                    __name(_a4, 'br'),
                    _a4);
            a2(br, 'Result');
            var wr = br;
            cs.exports = wr;
        });
        var ds = I(function (Pl, ps) {
            'use strict';
            var _a4;
            p2();
            var _we = we(),
                Bu = _we.EventEmitter,
                ls = hs(),
                fs = tt(),
                xr =
                    ((_a4 = /*#__PURE__*/ (function (Bu) {
                        _inherits(_a4, Bu);
                        var _super = _create_super(_a4);
                        function _a4(e2, t2, n2) {
                            _class_call_check(this, _a4);
                            var _this;
                            (_this = _super.call(this)),
                                (e2 = fs.normalizeQueryConfig(e2, t2, n2)),
                                (_this.text = e2.text),
                                (_this.values = e2.values),
                                (_this.rows = e2.rows),
                                (_this.types = e2.types),
                                (_this.name = e2.name),
                                (_this.binary = e2.binary),
                                (_this.portal = e2.portal || ''),
                                (_this.callback = e2.callback),
                                (_this._rowMode = e2.rowMode),
                                y.domain && e2.callback && (_this.callback = y.domain.bind(e2.callback)),
                                (_this._result = new ls(_this._rowMode, _this.types)),
                                (_this._results = _this._result),
                                (_this.isPreparedStatement = false),
                                (_this._canceledDueToError = false),
                                (_this._promise = null);
                            return _possible_constructor_return(_this);
                        }
                        _create_class(_a4, [
                            {
                                key: 'requiresPreparation',
                                value: function requiresPreparation() {
                                    return this.name || this.rows
                                        ? true
                                        : !this.text || !this.values
                                        ? false
                                        : this.values.length > 0;
                                },
                            },
                            {
                                key: '_checkForMultirow',
                                value: function _checkForMultirow() {
                                    this._result.command &&
                                        (Array.isArray(this._results) || (this._results = [this._result]),
                                        (this._result = new ls(this._rowMode, this.types)),
                                        this._results.push(this._result));
                                },
                            },
                            {
                                key: 'handleRowDescription',
                                value: function handleRowDescription(e2) {
                                    this._checkForMultirow(),
                                        this._result.addFields(e2.fields),
                                        (this._accumulateRows = this.callback || !this.listeners('row').length);
                                },
                            },
                            {
                                key: 'handleDataRow',
                                value: function handleDataRow(e2) {
                                    var t2;
                                    if (!this._canceledDueToError) {
                                        try {
                                            t2 = this._result.parseRow(e2.fields);
                                        } catch (n2) {
                                            this._canceledDueToError = n2;
                                            return;
                                        }
                                        this.emit('row', t2, this._result),
                                            this._accumulateRows && this._result.addRow(t2);
                                    }
                                },
                            },
                            {
                                key: 'handleCommandComplete',
                                value: function handleCommandComplete(e2, t2) {
                                    this._checkForMultirow(),
                                        this._result.addCommandComplete(e2),
                                        this.rows && t2.sync();
                                },
                            },
                            {
                                key: 'handleEmptyQuery',
                                value: function handleEmptyQuery(e2) {
                                    this.rows && e2.sync();
                                },
                            },
                            {
                                key: 'handleError',
                                value: function handleError(e2, t2) {
                                    if (
                                        (this._canceledDueToError &&
                                            ((e2 = this._canceledDueToError), (this._canceledDueToError = false)),
                                        this.callback)
                                    )
                                        return this.callback(e2);
                                    this.emit('error', e2);
                                },
                            },
                            {
                                key: 'handleReadyForQuery',
                                value: function handleReadyForQuery(e2) {
                                    if (this._canceledDueToError) return this.handleError(this._canceledDueToError, e2);
                                    if (this.callback)
                                        try {
                                            this.callback(null, this._results);
                                        } catch (t2) {
                                            y.nextTick(function () {
                                                throw t2;
                                            });
                                        }
                                    this.emit('end', this._results);
                                },
                            },
                            {
                                key: 'submit',
                                value: function submit(e2) {
                                    if (typeof this.text != 'string' && typeof this.name != 'string')
                                        return new Error(
                                            'A query must have either text or a name. Supplying neither is unsupported.'
                                        );
                                    var t2 = e2.parsedStatements[this.name];
                                    return this.text && t2 && this.text !== t2
                                        ? new Error(
                                              "Prepared statements must be unique - '".concat(
                                                  this.name,
                                                  "' was used for a different statement"
                                              )
                                          )
                                        : this.values && !Array.isArray(this.values)
                                        ? new Error('Query values must be an array')
                                        : (this.requiresPreparation() ? this.prepare(e2) : e2.query(this.text), null);
                                },
                            },
                            {
                                key: 'hasBeenParsed',
                                value: function hasBeenParsed(e2) {
                                    return this.name && e2.parsedStatements[this.name];
                                },
                            },
                            {
                                key: 'handlePortalSuspended',
                                value: function handlePortalSuspended(e2) {
                                    this._getRows(e2, this.rows);
                                },
                            },
                            {
                                key: '_getRows',
                                value: function _getRows(e2, t2) {
                                    e2.execute({
                                        portal: this.portal,
                                        rows: t2,
                                    }),
                                        t2 ? e2.flush() : e2.sync();
                                },
                            },
                            {
                                key: 'prepare',
                                value: function prepare(e2) {
                                    (this.isPreparedStatement = true),
                                        this.hasBeenParsed(e2) ||
                                            e2.parse({
                                                text: this.text,
                                                name: this.name,
                                                types: this.types,
                                            });
                                    try {
                                        e2.bind({
                                            portal: this.portal,
                                            statement: this.name,
                                            values: this.values,
                                            binary: this.binary,
                                            valueMapper: fs.prepareValue,
                                        });
                                    } catch (t2) {
                                        this.handleError(t2, e2);
                                        return;
                                    }
                                    e2.describe({
                                        type: 'P',
                                        name: this.portal || '',
                                    }),
                                        this._getRows(e2, this.rows);
                                },
                            },
                            {
                                key: 'handleCopyInResponse',
                                value: function handleCopyInResponse(e2) {
                                    e2.sendCopyFail('No source stream defined');
                                },
                            },
                            {
                                key: 'handleCopyData',
                                value: function handleCopyData(e2, t2) {},
                            },
                        ]);
                        return _a4;
                    })(Bu)),
                    __name(_a4, 'xr'),
                    _a4);
            a2(xr, 'Query');
            var Sr = xr;
            ps.exports = Sr;
        });
        var ms = {};
        ee(ms, {
            Socket: function () {
                return Se;
            },
            isIP: function () {
                return Lu;
            },
        });
        __name(Lu, 'Lu');
        var ys;
        var x;
        var Se;
        var wt = K(function () {
            'use strict';
            var _a4;
            p2();
            ys = We(we(), 1);
            a2(Lu, 'isIP');
            x =
                ((_a4 = /*#__PURE__*/ (function (_ys_EventEmitter) {
                    _inherits(_a41, _ys_EventEmitter);
                    var _super = _create_super(_a41);
                    function _a41() {
                        _class_call_check(this, _a41);
                        var _this;
                        _this = _super.call.apply(_super, [this].concat(Array.prototype.slice.call(arguments)));
                        T(_assert_this_initialized(_this), 'opts', {});
                        T(_assert_this_initialized(_this), 'connecting', false);
                        T(_assert_this_initialized(_this), 'pending', true);
                        T(_assert_this_initialized(_this), 'writable', true);
                        T(_assert_this_initialized(_this), 'encrypted', false);
                        T(_assert_this_initialized(_this), 'authorized', false);
                        T(_assert_this_initialized(_this), 'destroyed', false);
                        T(_assert_this_initialized(_this), 'ws', null);
                        T(_assert_this_initialized(_this), 'writeBuffer');
                        T(_assert_this_initialized(_this), 'tlsState', 0);
                        T(_assert_this_initialized(_this), 'tlsRead');
                        T(_assert_this_initialized(_this), 'tlsWrite');
                        return _this;
                    }
                    _create_class(
                        _a41,
                        [
                            {
                                key: 'webSocketConstructor',
                                get: function get() {
                                    var _this_opts_webSocketConstructor;
                                    return (_this_opts_webSocketConstructor = this.opts.webSocketConstructor) !==
                                        null && _this_opts_webSocketConstructor !== void 0
                                        ? _this_opts_webSocketConstructor
                                        : _a4.webSocketConstructor;
                                },
                                set: function set(t2) {
                                    this.opts.webSocketConstructor = t2;
                                },
                            },
                            {
                                key: 'wsProxy',
                                get: function get() {
                                    var _this_opts_wsProxy;
                                    return (_this_opts_wsProxy = this.opts.wsProxy) !== null &&
                                        _this_opts_wsProxy !== void 0
                                        ? _this_opts_wsProxy
                                        : _a4.wsProxy;
                                },
                                set: function set(t2) {
                                    this.opts.wsProxy = t2;
                                },
                            },
                            {
                                key: 'coalesceWrites',
                                get: function get() {
                                    var _this_opts_coalesceWrites;
                                    return (_this_opts_coalesceWrites = this.opts.coalesceWrites) !== null &&
                                        _this_opts_coalesceWrites !== void 0
                                        ? _this_opts_coalesceWrites
                                        : _a4.coalesceWrites;
                                },
                                set: function set(t2) {
                                    this.opts.coalesceWrites = t2;
                                },
                            },
                            {
                                key: 'useSecureWebSocket',
                                get: function get() {
                                    var _this_opts_useSecureWebSocket;
                                    return (_this_opts_useSecureWebSocket = this.opts.useSecureWebSocket) !== null &&
                                        _this_opts_useSecureWebSocket !== void 0
                                        ? _this_opts_useSecureWebSocket
                                        : _a4.useSecureWebSocket;
                                },
                                set: function set(t2) {
                                    this.opts.useSecureWebSocket = t2;
                                },
                            },
                            {
                                key: 'forceDisablePgSSL',
                                get: function get() {
                                    var _this_opts_forceDisablePgSSL;
                                    return (_this_opts_forceDisablePgSSL = this.opts.forceDisablePgSSL) !== null &&
                                        _this_opts_forceDisablePgSSL !== void 0
                                        ? _this_opts_forceDisablePgSSL
                                        : _a4.forceDisablePgSSL;
                                },
                                set: function set(t2) {
                                    this.opts.forceDisablePgSSL = t2;
                                },
                            },
                            {
                                key: 'disableSNI',
                                get: function get() {
                                    var _this_opts_disableSNI;
                                    return (_this_opts_disableSNI = this.opts.disableSNI) !== null &&
                                        _this_opts_disableSNI !== void 0
                                        ? _this_opts_disableSNI
                                        : _a4.disableSNI;
                                },
                                set: function set(t2) {
                                    this.opts.disableSNI = t2;
                                },
                            },
                            {
                                key: 'pipelineConnect',
                                get: function get() {
                                    var _this_opts_pipelineConnect;
                                    return (_this_opts_pipelineConnect = this.opts.pipelineConnect) !== null &&
                                        _this_opts_pipelineConnect !== void 0
                                        ? _this_opts_pipelineConnect
                                        : _a4.pipelineConnect;
                                },
                                set: function set(t2) {
                                    this.opts.pipelineConnect = t2;
                                },
                            },
                            {
                                key: 'subtls',
                                get: function get() {
                                    var _this_opts_subtls;
                                    return (_this_opts_subtls = this.opts.subtls) !== null &&
                                        _this_opts_subtls !== void 0
                                        ? _this_opts_subtls
                                        : _a4.subtls;
                                },
                                set: function set(t2) {
                                    this.opts.subtls = t2;
                                },
                            },
                            {
                                key: 'pipelineTLS',
                                get: function get() {
                                    var _this_opts_pipelineTLS;
                                    return (_this_opts_pipelineTLS = this.opts.pipelineTLS) !== null &&
                                        _this_opts_pipelineTLS !== void 0
                                        ? _this_opts_pipelineTLS
                                        : _a4.pipelineTLS;
                                },
                                set: function set(t2) {
                                    this.opts.pipelineTLS = t2;
                                },
                            },
                            {
                                key: 'rootCerts',
                                get: function get() {
                                    var _this_opts_rootCerts;
                                    return (_this_opts_rootCerts = this.opts.rootCerts) !== null &&
                                        _this_opts_rootCerts !== void 0
                                        ? _this_opts_rootCerts
                                        : _a4.rootCerts;
                                },
                                set: function set(t2) {
                                    this.opts.rootCerts = t2;
                                },
                            },
                            {
                                key: 'wsProxyAddrForHost',
                                value: function wsProxyAddrForHost(t2, n2) {
                                    var i2 = this.wsProxy;
                                    if (i2 === void 0)
                                        throw new Error(
                                            'No WebSocket proxy is configured. Please refer to https://github.com/neondatabase/serverless#run-your-own-websocket-proxy'
                                        );
                                    return typeof i2 == 'function'
                                        ? i2(t2, n2)
                                        : ''.concat(i2, '?address=').concat(t2, ':').concat(n2);
                                },
                            },
                            {
                                key: 'setNoDelay',
                                value: function setNoDelay() {
                                    return this;
                                },
                            },
                            {
                                key: 'setKeepAlive',
                                value: function setKeepAlive() {
                                    return this;
                                },
                            },
                            {
                                key: 'ref',
                                value: function ref() {
                                    return this;
                                },
                            },
                            {
                                key: 'unref',
                                value: function unref() {
                                    return this;
                                },
                            },
                            {
                                key: 'connect',
                                value: function connect(t2, n2, i2) {
                                    var _this = this;
                                    return _async_to_generator(function () {
                                        var s2;
                                        return _ts_generator(this, function (_state) {
                                            switch (_state.label) {
                                                case 0:
                                                    (_this.connecting = true), i2 && _this.once('connect', i2);
                                                    try {
                                                        s2 = _this.wsProxyAddrForHost(
                                                            n2,
                                                            typeof t2 == 'string' ? parseInt(t2, 10) : t2
                                                        );
                                                    } catch (o2) {
                                                        _this.emit('error', o2), _this.emit('close');
                                                        return [2];
                                                    }
                                                    return [
                                                        4,
                                                        new Promise(
                                                            (function () {
                                                                var _ref = _async_to_generator(function (o2) {
                                                                    var c, h, u, h1, e;
                                                                    return _ts_generator(this, function (_state) {
                                                                        switch (_state.label) {
                                                                            case 0:
                                                                                _state.trys.push([0, 1, , 6]);
                                                                                c =
                                                                                    (_this.useSecureWebSocket
                                                                                        ? 'wss:'
                                                                                        : 'ws:') +
                                                                                    '//' +
                                                                                    s2;
                                                                                if (
                                                                                    _this.webSocketConstructor !==
                                                                                    void 0
                                                                                )
                                                                                    h = new _this.webSocketConstructor(
                                                                                        c
                                                                                    );
                                                                                else
                                                                                    try {
                                                                                        h = new WebSocket(c);
                                                                                    } catch (e) {
                                                                                        h = new __unstable_WebSocket(c);
                                                                                    }
                                                                                h.addEventListener('open', function () {
                                                                                    o2(h);
                                                                                });
                                                                                return [3, 6];
                                                                            case 1:
                                                                                u = _state.sent();
                                                                                _state.label = 2;
                                                                            case 2:
                                                                                _state.trys.push([2, 4, , 5]);
                                                                                h1 =
                                                                                    (_this.useSecureWebSocket
                                                                                        ? 'https:'
                                                                                        : 'http:') +
                                                                                    '//' +
                                                                                    s2;
                                                                                return [
                                                                                    4,
                                                                                    fetch(h1, {
                                                                                        headers: {
                                                                                            Upgrade: 'websocket',
                                                                                        },
                                                                                    }).then(function (l2) {
                                                                                        var m2 = l2.webSocket;
                                                                                        if (m2 == null) throw u;
                                                                                        m2.accept(), o2(m2);
                                                                                    }),
                                                                                ];
                                                                            case 3:
                                                                                _state.sent();
                                                                                return [3, 5];
                                                                            case 4:
                                                                                e = _state.sent();
                                                                                _this.emit(
                                                                                    'error',
                                                                                    new Error(
                                                                                        'All attempts to open a WebSocket to connect to the database failed. Please refer to https://github.com/neondatabase/serverless#run-on-node'
                                                                                    )
                                                                                ),
                                                                                    _this.emit('close');
                                                                                return [2];
                                                                            case 5:
                                                                                return [3, 6];
                                                                            case 6:
                                                                                return [2];
                                                                        }
                                                                    });
                                                                });
                                                                return function (o2) {
                                                                    return _ref.apply(this, arguments);
                                                                };
                                                            })()
                                                        ),
                                                    ];
                                                case 1:
                                                    return [
                                                        2,
                                                        ((_this.ws = _state.sent()),
                                                        (_this.ws.binaryType = 'arraybuffer'),
                                                        _this.ws.addEventListener('error', function (o2) {
                                                            _this.emit('error', o2), _this.emit('close');
                                                        }),
                                                        _this.ws.addEventListener('close', function () {
                                                            _this.emit('close');
                                                        }),
                                                        _this.ws.addEventListener('message', function (o2) {
                                                            if (_this.tlsState === 0) {
                                                                var u = d.from(o2.data);
                                                                _this.emit('data', u);
                                                            }
                                                        }),
                                                        (_this.connecting = false),
                                                        (_this.pending = false),
                                                        _this.emit('connect'),
                                                        _this.emit('ready'),
                                                        _this),
                                                    ];
                                            }
                                        });
                                    })();
                                },
                            },
                            {
                                key: 'startTls',
                                value: function startTls(t2) {
                                    var _this = this;
                                    return _async_to_generator(function () {
                                        var n2, i2, s2, o2, _ref, u, c;
                                        return _ts_generator(this, function (_state) {
                                            switch (_state.label) {
                                                case 0:
                                                    if (_this.subtls === void 0)
                                                        throw new Error(
                                                            'For Postgres SSL connections, you must set `neonConfig.subtls` to the subtls library. See https://github.com/neondatabase/serverless/blob/main/CONFIG.md for more information.'
                                                        );
                                                    _this.tlsState = 1;
                                                    (n2 = _this.subtls.TrustedCert.fromPEM(_this.rootCerts)),
                                                        (i2 = new _this.subtls.WebSocketReadQueue(_this.ws)),
                                                        (s2 = i2.read.bind(i2)),
                                                        (o2 = _this.rawWrite.bind(_this));
                                                    return [
                                                        4,
                                                        _this.subtls.startTls(t2, n2, s2, o2, {
                                                            useSNI: !_this.disableSNI,
                                                            expectPreData: _this.pipelineTLS
                                                                ? new Uint8Array([83])
                                                                : void 0,
                                                        }),
                                                    ];
                                                case 1:
                                                    (_ref = _sliced_to_array.apply(void 0, [_state.sent(), 2])),
                                                        (u = _ref[0]),
                                                        (c = _ref[1]);
                                                    (_this.tlsRead = u),
                                                        (_this.tlsWrite = c),
                                                        (_this.tlsState = 2),
                                                        (_this.encrypted = true),
                                                        (_this.authorized = true),
                                                        _this.emit('secureConnection', _this),
                                                        _this.tlsReadLoop();
                                                    return [2];
                                            }
                                        });
                                    })();
                                },
                            },
                            {
                                key: 'tlsReadLoop',
                                value: function tlsReadLoop() {
                                    var _this = this;
                                    return _async_to_generator(function () {
                                        var t2, n2;
                                        return _ts_generator(this, function (_state) {
                                            switch (_state.label) {
                                                case 0:
                                                    return [4, _this.tlsRead()];
                                                case 1:
                                                    t2 = _state.sent();
                                                    if (t2 === void 0) return [3, 3];
                                                    {
                                                        n2 = d.from(t2);
                                                        _this.emit('data', n2);
                                                    }
                                                    _state.label = 2;
                                                case 2:
                                                    return [3, 0];
                                                case 3:
                                                    return [2];
                                            }
                                        });
                                    })();
                                },
                            },
                            {
                                key: 'rawWrite',
                                value: function rawWrite(t2) {
                                    var _this = this;
                                    if (!this.coalesceWrites) {
                                        this.ws.send(t2);
                                        return;
                                    }
                                    if (this.writeBuffer === void 0)
                                        (this.writeBuffer = t2),
                                            setTimeout(function () {
                                                _this.ws.send(_this.writeBuffer), (_this.writeBuffer = void 0);
                                            }, 0);
                                    else {
                                        var n2 = new Uint8Array(this.writeBuffer.length + t2.length);
                                        n2.set(this.writeBuffer),
                                            n2.set(t2, this.writeBuffer.length),
                                            (this.writeBuffer = n2);
                                    }
                                },
                            },
                            {
                                key: 'write',
                                value: function write(t2) {
                                    var n2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'utf8',
                                        i2 =
                                            arguments.length > 2 && arguments[2] !== void 0
                                                ? arguments[2]
                                                : function (s2) {};
                                    var _this = this;
                                    return t2.length === 0
                                        ? i2()
                                        : (typeof t2 == 'string' && (t2 = d.from(t2, n2)),
                                          this.tlsState === 0
                                              ? this.rawWrite(t2)
                                              : this.tlsState === 1
                                              ? this.once('secureConnection', function () {
                                                    return _this.write(t2, n2, i2);
                                                })
                                              : this.tlsWrite(t2),
                                          true);
                                },
                            },
                            {
                                key: 'end',
                                value: function end() {
                                    var t2 =
                                            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d.alloc(0),
                                        n2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'utf8',
                                        i2 = arguments.length > 2 ? arguments[2] : void 0;
                                    var _this = this;
                                    return (
                                        this.write(t2, n2, function () {
                                            _this.ws.close(), i2 && i2();
                                        }),
                                        this
                                    );
                                },
                            },
                            {
                                key: 'destroy',
                                value: function destroy() {
                                    return (this.destroyed = true), this.end();
                                },
                            },
                        ],
                        [
                            {
                                key: 'poolQueryViaFetch',
                                get: function get() {
                                    var _a4_opts_poolQueryViaFetch;
                                    return (_a4_opts_poolQueryViaFetch = _a4.opts.poolQueryViaFetch) !== null &&
                                        _a4_opts_poolQueryViaFetch !== void 0
                                        ? _a4_opts_poolQueryViaFetch
                                        : _a4.defaults.poolQueryViaFetch;
                                },
                                set: function set(t2) {
                                    _a4.opts.poolQueryViaFetch = t2;
                                },
                            },
                            {
                                key: 'fetchEndpoint',
                                get: function get() {
                                    var _a4_opts_fetchEndpoint;
                                    return (_a4_opts_fetchEndpoint = _a4.opts.fetchEndpoint) !== null &&
                                        _a4_opts_fetchEndpoint !== void 0
                                        ? _a4_opts_fetchEndpoint
                                        : _a4.defaults.fetchEndpoint;
                                },
                                set: function set(t2) {
                                    _a4.opts.fetchEndpoint = t2;
                                },
                            },
                            {
                                key: 'fetchConnectionCache',
                                get: function get() {
                                    var _a4_opts_fetchConnectionCache;
                                    return (_a4_opts_fetchConnectionCache = _a4.opts.fetchConnectionCache) !== null &&
                                        _a4_opts_fetchConnectionCache !== void 0
                                        ? _a4_opts_fetchConnectionCache
                                        : _a4.defaults.fetchConnectionCache;
                                },
                                set: function set(t2) {
                                    _a4.opts.fetchConnectionCache = t2;
                                },
                            },
                            {
                                key: 'fetchFunction',
                                get: function get() {
                                    var _a4_opts_fetchFunction;
                                    return (_a4_opts_fetchFunction = _a4.opts.fetchFunction) !== null &&
                                        _a4_opts_fetchFunction !== void 0
                                        ? _a4_opts_fetchFunction
                                        : _a4.defaults.fetchFunction;
                                },
                                set: function set(t2) {
                                    _a4.opts.fetchFunction = t2;
                                },
                            },
                            {
                                key: 'webSocketConstructor',
                                get: function get() {
                                    var _a4_opts_webSocketConstructor;
                                    return (_a4_opts_webSocketConstructor = _a4.opts.webSocketConstructor) !== null &&
                                        _a4_opts_webSocketConstructor !== void 0
                                        ? _a4_opts_webSocketConstructor
                                        : _a4.defaults.webSocketConstructor;
                                },
                                set: function set(t2) {
                                    _a4.opts.webSocketConstructor = t2;
                                },
                            },
                            {
                                key: 'wsProxy',
                                get: function get() {
                                    var _a4_opts_wsProxy;
                                    return (_a4_opts_wsProxy = _a4.opts.wsProxy) !== null && _a4_opts_wsProxy !== void 0
                                        ? _a4_opts_wsProxy
                                        : _a4.defaults.wsProxy;
                                },
                                set: function set(t2) {
                                    _a4.opts.wsProxy = t2;
                                },
                            },
                            {
                                key: 'coalesceWrites',
                                get: function get() {
                                    var _a4_opts_coalesceWrites;
                                    return (_a4_opts_coalesceWrites = _a4.opts.coalesceWrites) !== null &&
                                        _a4_opts_coalesceWrites !== void 0
                                        ? _a4_opts_coalesceWrites
                                        : _a4.defaults.coalesceWrites;
                                },
                                set: function set(t2) {
                                    _a4.opts.coalesceWrites = t2;
                                },
                            },
                            {
                                key: 'useSecureWebSocket',
                                get: function get() {
                                    var _a4_opts_useSecureWebSocket;
                                    return (_a4_opts_useSecureWebSocket = _a4.opts.useSecureWebSocket) !== null &&
                                        _a4_opts_useSecureWebSocket !== void 0
                                        ? _a4_opts_useSecureWebSocket
                                        : _a4.defaults.useSecureWebSocket;
                                },
                                set: function set(t2) {
                                    _a4.opts.useSecureWebSocket = t2;
                                },
                            },
                            {
                                key: 'forceDisablePgSSL',
                                get: function get() {
                                    var _a4_opts_forceDisablePgSSL;
                                    return (_a4_opts_forceDisablePgSSL = _a4.opts.forceDisablePgSSL) !== null &&
                                        _a4_opts_forceDisablePgSSL !== void 0
                                        ? _a4_opts_forceDisablePgSSL
                                        : _a4.defaults.forceDisablePgSSL;
                                },
                                set: function set(t2) {
                                    _a4.opts.forceDisablePgSSL = t2;
                                },
                            },
                            {
                                key: 'disableSNI',
                                get: function get() {
                                    var _a4_opts_disableSNI;
                                    return (_a4_opts_disableSNI = _a4.opts.disableSNI) !== null &&
                                        _a4_opts_disableSNI !== void 0
                                        ? _a4_opts_disableSNI
                                        : _a4.defaults.disableSNI;
                                },
                                set: function set(t2) {
                                    _a4.opts.disableSNI = t2;
                                },
                            },
                            {
                                key: 'pipelineConnect',
                                get: function get() {
                                    var _a4_opts_pipelineConnect;
                                    return (_a4_opts_pipelineConnect = _a4.opts.pipelineConnect) !== null &&
                                        _a4_opts_pipelineConnect !== void 0
                                        ? _a4_opts_pipelineConnect
                                        : _a4.defaults.pipelineConnect;
                                },
                                set: function set(t2) {
                                    _a4.opts.pipelineConnect = t2;
                                },
                            },
                            {
                                key: 'subtls',
                                get: function get() {
                                    var _a4_opts_subtls;
                                    return (_a4_opts_subtls = _a4.opts.subtls) !== null && _a4_opts_subtls !== void 0
                                        ? _a4_opts_subtls
                                        : _a4.defaults.subtls;
                                },
                                set: function set(t2) {
                                    _a4.opts.subtls = t2;
                                },
                            },
                            {
                                key: 'pipelineTLS',
                                get: function get() {
                                    var _a4_opts_pipelineTLS;
                                    return (_a4_opts_pipelineTLS = _a4.opts.pipelineTLS) !== null &&
                                        _a4_opts_pipelineTLS !== void 0
                                        ? _a4_opts_pipelineTLS
                                        : _a4.defaults.pipelineTLS;
                                },
                                set: function set(t2) {
                                    _a4.opts.pipelineTLS = t2;
                                },
                            },
                            {
                                key: 'rootCerts',
                                get: function get() {
                                    var _a4_opts_rootCerts;
                                    return (_a4_opts_rootCerts = _a4.opts.rootCerts) !== null &&
                                        _a4_opts_rootCerts !== void 0
                                        ? _a4_opts_rootCerts
                                        : _a4.defaults.rootCerts;
                                },
                                set: function set(t2) {
                                    _a4.opts.rootCerts = t2;
                                },
                            },
                        ]
                    );
                    return _a41;
                })(ys.EventEmitter)),
                __name(_a4, 'x'),
                _a4);
            a2(x, 'Socket'),
                T(x, 'defaults', {
                    poolQueryViaFetch: false,
                    fetchEndpoint: function (t2) {
                        return 'https://' + t2 + '/sql';
                    },
                    fetchConnectionCache: false,
                    fetchFunction: void 0,
                    webSocketConstructor: void 0,
                    wsProxy: function (t2) {
                        return t2 + '/v2';
                    },
                    useSecureWebSocket: true,
                    forceDisablePgSSL: true,
                    coalesceWrites: true,
                    pipelineConnect: 'password',
                    subtls: void 0,
                    rootCerts: '',
                    pipelineTLS: false,
                    disableSNI: false,
                }),
                T(x, 'opts', {});
            Se = x;
        });
        var Yr = I(function (C) {
            'use strict';
            var _a4, _b, _c, _d, _e, _f, _g, _h, _i2, _j, _k, _l, _m, _n2;
            p2();
            Object.defineProperty(C, '__esModule', {
                value: true,
            });
            C.NoticeMessage =
                C.DataRowMessage =
                C.CommandCompleteMessage =
                C.ReadyForQueryMessage =
                C.NotificationResponseMessage =
                C.BackendKeyDataMessage =
                C.AuthenticationMD5Password =
                C.ParameterStatusMessage =
                C.ParameterDescriptionMessage =
                C.RowDescriptionMessage =
                C.Field =
                C.CopyResponse =
                C.CopyDataMessage =
                C.DatabaseError =
                C.copyDone =
                C.emptyQuery =
                C.replicationStart =
                C.portalSuspended =
                C.noData =
                C.closeComplete =
                C.bindComplete =
                C.parseComplete =
                    void 0;
            C.parseComplete = {
                name: 'parseComplete',
                length: 5,
            };
            C.bindComplete = {
                name: 'bindComplete',
                length: 5,
            };
            C.closeComplete = {
                name: 'closeComplete',
                length: 5,
            };
            C.noData = {
                name: 'noData',
                length: 5,
            };
            C.portalSuspended = {
                name: 'portalSuspended',
                length: 5,
            };
            C.replicationStart = {
                name: 'replicationStart',
                length: 4,
            };
            C.emptyQuery = {
                name: 'emptyQuery',
                length: 4,
            };
            C.copyDone = {
                name: 'copyDone',
                length: 4,
            };
            var Or =
                ((_a4 = /*#__PURE__*/ (function (Error1) {
                    _inherits(_a4, Error1);
                    var _super = _create_super(_a4);
                    function _a4(e2, t2, n2) {
                        _class_call_check(this, _a4);
                        var _this;
                        (_this = _super.call(this, e2)), (_this.length = t2), (_this.name = n2);
                        return _possible_constructor_return(_this);
                    }
                    return _a4;
                })(_wrap_native_super(Error))),
                __name(_a4, 'Or'),
                _a4);
            a2(Or, 'DatabaseError');
            var Er = Or;
            C.DatabaseError = Er;
            var kr =
                ((_b = function _b(e2, t2) {
                    _class_call_check(this, _b);
                    (this.length = e2), (this.chunk = t2), (this.name = 'copyData');
                }),
                __name(_b, 'kr'),
                _b);
            a2(kr, 'CopyDataMessage');
            var vr = kr;
            C.CopyDataMessage = vr;
            var Ur =
                ((_c = function _c(e2, t2, n2, i2) {
                    _class_call_check(this, _c);
                    (this.length = e2), (this.name = t2), (this.binary = n2), (this.columnTypes = new Array(i2));
                }),
                __name(_c, 'Ur'),
                _c);
            a2(Ur, 'CopyResponse');
            var _r = Ur;
            C.CopyResponse = _r;
            var qr =
                ((_d = function _d(e2, t2, n2, i2, s2, o2, u) {
                    _class_call_check(this, _d);
                    (this.name = e2),
                        (this.tableID = t2),
                        (this.columnID = n2),
                        (this.dataTypeID = i2),
                        (this.dataTypeSize = s2),
                        (this.dataTypeModifier = o2),
                        (this.format = u);
                }),
                __name(_d, 'qr'),
                _d);
            a2(qr, 'Field');
            var Ar = qr;
            C.Field = Ar;
            var Nr =
                ((_e = function _e(e2, t2) {
                    _class_call_check(this, _e);
                    (this.length = e2),
                        (this.fieldCount = t2),
                        (this.name = 'rowDescription'),
                        (this.fields = new Array(this.fieldCount));
                }),
                __name(_e, 'Nr'),
                _e);
            a2(Nr, 'RowDescriptionMessage');
            var Cr = Nr;
            C.RowDescriptionMessage = Cr;
            var Qr =
                ((_f = function _f(e2, t2) {
                    _class_call_check(this, _f);
                    (this.length = e2),
                        (this.parameterCount = t2),
                        (this.name = 'parameterDescription'),
                        (this.dataTypeIDs = new Array(this.parameterCount));
                }),
                __name(_f, 'Qr'),
                _f);
            a2(Qr, 'ParameterDescriptionMessage');
            var Ir = Qr;
            C.ParameterDescriptionMessage = Ir;
            var Wr =
                ((_g = function _g(e2, t2, n2) {
                    _class_call_check(this, _g);
                    (this.length = e2),
                        (this.parameterName = t2),
                        (this.parameterValue = n2),
                        (this.name = 'parameterStatus');
                }),
                __name(_g, 'Wr'),
                _g);
            a2(Wr, 'ParameterStatusMessage');
            var Tr = Wr;
            C.ParameterStatusMessage = Tr;
            var jr =
                ((_h = function _h(e2, t2) {
                    _class_call_check(this, _h);
                    (this.length = e2), (this.salt = t2), (this.name = 'authenticationMD5Password');
                }),
                __name(_h, 'jr'),
                _h);
            a2(jr, 'AuthenticationMD5Password');
            var Pr = jr;
            C.AuthenticationMD5Password = Pr;
            var Hr =
                ((_i2 = function _i2(e2, t2, n2) {
                    _class_call_check(this, _i2);
                    (this.length = e2), (this.processID = t2), (this.secretKey = n2), (this.name = 'backendKeyData');
                }),
                __name(_i2, 'Hr'),
                _i2);
            a2(Hr, 'BackendKeyDataMessage');
            var Br = Hr;
            C.BackendKeyDataMessage = Br;
            var Gr =
                ((_j = function _j(e2, t2, n2, i2) {
                    _class_call_check(this, _j);
                    (this.length = e2),
                        (this.processId = t2),
                        (this.channel = n2),
                        (this.payload = i2),
                        (this.name = 'notification');
                }),
                __name(_j, 'Gr'),
                _j);
            a2(Gr, 'NotificationResponseMessage');
            var Lr = Gr;
            C.NotificationResponseMessage = Lr;
            var $r =
                ((_k = function _k(e2, t2) {
                    _class_call_check(this, _k);
                    (this.length = e2), (this.status = t2), (this.name = 'readyForQuery');
                }),
                __name(_k, '$r'),
                _k);
            a2($r, 'ReadyForQueryMessage');
            var Rr = $r;
            C.ReadyForQueryMessage = Rr;
            var Kr =
                ((_l = function _l(e2, t2) {
                    _class_call_check(this, _l);
                    (this.length = e2), (this.text = t2), (this.name = 'commandComplete');
                }),
                __name(_l, 'Kr'),
                _l);
            a2(Kr, 'CommandCompleteMessage');
            var Fr = Kr;
            C.CommandCompleteMessage = Fr;
            var Vr =
                ((_m = function _m(e2, t2) {
                    _class_call_check(this, _m);
                    (this.length = e2), (this.fields = t2), (this.name = 'dataRow'), (this.fieldCount = t2.length);
                }),
                __name(_m, 'Vr'),
                _m);
            a2(Vr, 'DataRowMessage');
            var Mr = Vr;
            C.DataRowMessage = Mr;
            var zr =
                ((_n2 = function _n2(e2, t2) {
                    _class_call_check(this, _n2);
                    (this.length = e2), (this.message = t2), (this.name = 'notice');
                }),
                __name(_n2, 'zr'),
                _n2);
            a2(zr, 'NoticeMessage');
            var Dr = zr;
            C.NoticeMessage = Dr;
        });
        var gs = I(function (bt) {
            'use strict';
            var _a4;
            p2();
            Object.defineProperty(bt, '__esModule', {
                value: true,
            });
            bt.Writer = void 0;
            var Jr =
                ((_a4 = /*#__PURE__*/ (function () {
                    function _a4() {
                        var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 256;
                        _class_call_check(this, _a4);
                        (this.size = e2),
                            (this.offset = 5),
                            (this.headerPosition = 0),
                            (this.buffer = d.allocUnsafe(e2));
                    }
                    _create_class(_a4, [
                        {
                            key: 'ensure',
                            value: function ensure(e2) {
                                var t2 = this.buffer.length - this.offset;
                                if (t2 < e2) {
                                    var n2 = this.buffer,
                                        i2 = n2.length + (n2.length >> 1) + e2;
                                    (this.buffer = d.allocUnsafe(i2)), n2.copy(this.buffer);
                                }
                            },
                        },
                        {
                            key: 'addInt32',
                            value: function addInt32(e2) {
                                return (
                                    this.ensure(4),
                                    (this.buffer[this.offset++] = (e2 >>> 24) & 255),
                                    (this.buffer[this.offset++] = (e2 >>> 16) & 255),
                                    (this.buffer[this.offset++] = (e2 >>> 8) & 255),
                                    (this.buffer[this.offset++] = (e2 >>> 0) & 255),
                                    this
                                );
                            },
                        },
                        {
                            key: 'addInt16',
                            value: function addInt16(e2) {
                                return (
                                    this.ensure(2),
                                    (this.buffer[this.offset++] = (e2 >>> 8) & 255),
                                    (this.buffer[this.offset++] = (e2 >>> 0) & 255),
                                    this
                                );
                            },
                        },
                        {
                            key: 'addCString',
                            value: function addCString(e2) {
                                if (!e2) this.ensure(1);
                                else {
                                    var t2 = d.byteLength(e2);
                                    this.ensure(t2 + 1),
                                        this.buffer.write(e2, this.offset, 'utf-8'),
                                        (this.offset += t2);
                                }
                                return (this.buffer[this.offset++] = 0), this;
                            },
                        },
                        {
                            key: 'addString',
                            value: function addString() {
                                var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
                                var t2 = d.byteLength(e2);
                                return this.ensure(t2), this.buffer.write(e2, this.offset), (this.offset += t2), this;
                            },
                        },
                        {
                            key: 'add',
                            value: function add(e2) {
                                return (
                                    this.ensure(e2.length),
                                    e2.copy(this.buffer, this.offset),
                                    (this.offset += e2.length),
                                    this
                                );
                            },
                        },
                        {
                            key: 'join',
                            value: function join(e2) {
                                if (e2) {
                                    this.buffer[this.headerPosition] = e2;
                                    var t2 = this.offset - (this.headerPosition + 1);
                                    this.buffer.writeInt32BE(t2, this.headerPosition + 1);
                                }
                                return this.buffer.slice(e2 ? 0 : 5, this.offset);
                            },
                        },
                        {
                            key: 'flush',
                            value: function flush(e2) {
                                var t2 = this.join(e2);
                                return (
                                    (this.offset = 5),
                                    (this.headerPosition = 0),
                                    (this.buffer = d.allocUnsafe(this.size)),
                                    t2
                                );
                            },
                        },
                    ]);
                    return _a4;
                })()),
                __name(_a4, 'Jr'),
                _a4);
            a2(Jr, 'Writer');
            var Zr = Jr;
            bt.Writer = Zr;
        });
        var bs = I(function (xt) {
            'use strict';
            p2();
            Object.defineProperty(xt, '__esModule', {
                value: true,
            });
            xt.serialize = void 0;
            var Xr = gs(),
                F = new Xr.Writer(),
                Ru = a2(function (r2) {
                    F.addInt16(3).addInt16(0);
                    var _iteratorNormalCompletion = true,
                        _didIteratorError = false,
                        _iteratorError = undefined;
                    try {
                        for (
                            var _iterator = Object.keys(r2)[Symbol.iterator](), _step;
                            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                            _iteratorNormalCompletion = true
                        ) {
                            var n2 = _step.value;
                            F.addCString(n2).addCString(r2[n2]);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    F.addCString('client_encoding').addCString('UTF8');
                    var e2 = F.addCString('').flush(),
                        t2 = e2.length + 4;
                    return new Xr.Writer().addInt32(t2).add(e2).flush();
                }, 'startup'),
                Fu = a2(function () {
                    var r2 = d.allocUnsafe(8);
                    return r2.writeInt32BE(8, 0), r2.writeInt32BE(80877103, 4), r2;
                }, 'requestSsl'),
                Mu = a2(function (r2) {
                    return F.addCString(r2).flush(112);
                }, 'password'),
                Du = a2(function (r2, e2) {
                    return F.addCString(r2).addInt32(d.byteLength(e2)).addString(e2), F.flush(112);
                }, 'sendSASLInitialResponseMessage'),
                Ou = a2(function (r2) {
                    return F.addString(r2).flush(112);
                }, 'sendSCRAMClientFinalMessage'),
                ku = a2(function (r2) {
                    return F.addCString(r2).flush(81);
                }, 'query'),
                ws = [],
                Uu = a2(function (r2) {
                    var e2 = r2.name || '';
                    e2.length > 63 &&
                        (console.error('Warning! Postgres only supports 63 characters for query names.'),
                        console.error('You supplied %s (%s)', e2, e2.length),
                        console.error('This can cause conflicts and silent errors executing queries'));
                    var t2 = r2.types || ws;
                    for (
                        var n2 = t2.length, i2 = F.addCString(e2).addCString(r2.text).addInt16(n2), s2 = 0;
                        s2 < n2;
                        s2++
                    )
                        i2.addInt32(t2[s2]);
                    return F.flush(80);
                }, 'parse'),
                Ue = new Xr.Writer(),
                qu = a2(function (r2, e2) {
                    for (var t2 = 0; t2 < r2.length; t2++) {
                        var n2 = e2 ? e2(r2[t2], t2) : r2[t2];
                        n2 == null
                            ? (F.addInt16(0), Ue.addInt32(-1))
                            : _instanceof(n2, d)
                            ? (F.addInt16(1), Ue.addInt32(n2.length), Ue.add(n2))
                            : (F.addInt16(0), Ue.addInt32(d.byteLength(n2)), Ue.addString(n2));
                    }
                }, 'writeValues'),
                Nu = a2(function () {
                    var r2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var e2 = r2.portal || '',
                        t2 = r2.statement || '',
                        n2 = r2.binary || false,
                        i2 = r2.values || ws,
                        s2 = i2.length;
                    return (
                        F.addCString(e2).addCString(t2),
                        F.addInt16(s2),
                        qu(i2, r2.valueMapper),
                        F.addInt16(s2),
                        F.add(Ue.flush()),
                        F.addInt16(n2 ? 1 : 0),
                        F.flush(66)
                    );
                }, 'bind'),
                Qu = d.from([69, 0, 0, 0, 9, 0, 0, 0, 0, 0]),
                Wu = a2(function (r2) {
                    if (!r2 || (!r2.portal && !r2.rows)) return Qu;
                    var e2 = r2.portal || '',
                        t2 = r2.rows || 0,
                        n2 = d.byteLength(e2),
                        i2 = 4 + n2 + 1 + 4,
                        s2 = d.allocUnsafe(1 + i2);
                    return (
                        (s2[0] = 69),
                        s2.writeInt32BE(i2, 1),
                        s2.write(e2, 5, 'utf-8'),
                        (s2[n2 + 5] = 0),
                        s2.writeUInt32BE(t2, s2.length - 4),
                        s2
                    );
                }, 'execute'),
                ju = a2(function (r2, e2) {
                    var t2 = d.allocUnsafe(16);
                    return (
                        t2.writeInt32BE(16, 0),
                        t2.writeInt16BE(1234, 4),
                        t2.writeInt16BE(5678, 6),
                        t2.writeInt32BE(r2, 8),
                        t2.writeInt32BE(e2, 12),
                        t2
                    );
                }, 'cancel'),
                en = a2(function (r2, e2) {
                    var n2 = 4 + d.byteLength(e2) + 1,
                        i2 = d.allocUnsafe(1 + n2);
                    return (i2[0] = r2), i2.writeInt32BE(n2, 1), i2.write(e2, 5, 'utf-8'), (i2[n2] = 0), i2;
                }, 'cstringMessage'),
                Hu = F.addCString('P').flush(68),
                Gu = F.addCString('S').flush(68),
                $u = a2(function (r2) {
                    return r2.name ? en(68, ''.concat(r2.type).concat(r2.name || '')) : r2.type === 'P' ? Hu : Gu;
                }, 'describe'),
                Ku = a2(function (r2) {
                    var e2 = ''.concat(r2.type).concat(r2.name || '');
                    return en(67, e2);
                }, 'close'),
                Vu = a2(function (r2) {
                    return F.add(r2).flush(100);
                }, 'copyData'),
                zu = a2(function (r2) {
                    return en(102, r2);
                }, 'copyFail'),
                St = a2(function (r2) {
                    return d.from([r2, 0, 0, 0, 4]);
                }, 'codeOnlyBuffer'),
                Yu = St(72),
                Zu = St(83),
                Ju = St(88),
                Xu = St(99),
                ec = {
                    startup: Ru,
                    password: Mu,
                    requestSsl: Fu,
                    sendSASLInitialResponseMessage: Du,
                    sendSCRAMClientFinalMessage: Ou,
                    query: ku,
                    parse: Uu,
                    bind: Nu,
                    execute: Wu,
                    describe: $u,
                    close: Ku,
                    flush: function () {
                        return Yu;
                    },
                    sync: function () {
                        return Zu;
                    },
                    end: function () {
                        return Ju;
                    },
                    copyData: Vu,
                    copyDone: function () {
                        return Xu;
                    },
                    copyFail: zu,
                    cancel: ju,
                };
            xt.serialize = ec;
        });
        var Ss = I(function (Et) {
            'use strict';
            var _a4;
            p2();
            Object.defineProperty(Et, '__esModule', {
                value: true,
            });
            Et.BufferReader = void 0;
            var tc = d.allocUnsafe(0),
                rn =
                    ((_a4 = /*#__PURE__*/ (function () {
                        function _a4() {
                            var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                            _class_call_check(this, _a4);
                            (this.offset = e2), (this.buffer = tc), (this.encoding = 'utf-8');
                        }
                        _create_class(_a4, [
                            {
                                key: 'setBuffer',
                                value: function setBuffer(e2, t2) {
                                    (this.offset = e2), (this.buffer = t2);
                                },
                            },
                            {
                                key: 'int16',
                                value: function int16() {
                                    var e2 = this.buffer.readInt16BE(this.offset);
                                    return (this.offset += 2), e2;
                                },
                            },
                            {
                                key: 'byte',
                                value: function byte() {
                                    var e2 = this.buffer[this.offset];
                                    return this.offset++, e2;
                                },
                            },
                            {
                                key: 'int32',
                                value: function int32() {
                                    var e2 = this.buffer.readInt32BE(this.offset);
                                    return (this.offset += 4), e2;
                                },
                            },
                            {
                                key: 'string',
                                value: function string(e2) {
                                    var t2 = this.buffer.toString(this.encoding, this.offset, this.offset + e2);
                                    return (this.offset += e2), t2;
                                },
                            },
                            {
                                key: 'cstring',
                                value: function cstring() {
                                    var e2 = this.offset,
                                        t2 = e2;
                                    for (; this.buffer[t2++] !== 0; );
                                    return (this.offset = t2), this.buffer.toString(this.encoding, e2, t2 - 1);
                                },
                            },
                            {
                                key: 'bytes',
                                value: function bytes(e2) {
                                    var t2 = this.buffer.slice(this.offset, this.offset + e2);
                                    return (this.offset += e2), t2;
                                },
                            },
                        ]);
                        return _a4;
                    })()),
                    __name(_a4, 'rn'),
                    _a4);
            a2(rn, 'BufferReader');
            var tn = rn;
            Et.BufferReader = tn;
        });
        var xs = {};
        ee(xs, {
            default: function () {
                return rc;
            },
        });
        var rc;
        var Es = K(function () {
            p2();
            rc = {};
        });
        var As = I(function (qe) {
            'use strict';
            var _a4;
            p2();
            var nc =
                (qe && qe.__importDefault) ||
                function (r2) {
                    return r2 && r2.__esModule
                        ? r2
                        : {
                              default: r2,
                          };
                };
            Object.defineProperty(qe, '__esModule', {
                value: true,
            });
            qe.Parser = void 0;
            var M = Yr(),
                ic = Ss(),
                sc = nc((Es(), O(xs))),
                nn = 1,
                oc = 4,
                vs = nn + oc,
                _s = d.allocUnsafe(0),
                on =
                    ((_a4 = /*#__PURE__*/ (function () {
                        function _a4(e2) {
                            _class_call_check(this, _a4);
                            var _e2, _e21;
                            if (
                                ((this.buffer = _s),
                                (this.bufferLength = 0),
                                (this.bufferOffset = 0),
                                (this.reader = new ic.BufferReader()),
                                ((_e2 = e2) === null || _e2 === void 0 ? void 0 : _e2.mode) === 'binary')
                            )
                                throw new Error('Binary mode not supported yet');
                            this.mode = ((_e21 = e2) === null || _e21 === void 0 ? void 0 : _e21.mode) || 'text';
                        }
                        _create_class(_a4, [
                            {
                                key: 'parse',
                                value: function parse(e2, t2) {
                                    this.mergeBuffer(e2);
                                    var n2 = this.bufferOffset + this.bufferLength,
                                        i2 = this.bufferOffset;
                                    for (; i2 + vs <= n2; ) {
                                        var s2 = this.buffer[i2],
                                            o2 = this.buffer.readUInt32BE(i2 + nn),
                                            u = nn + o2;
                                        if (u + i2 <= n2) {
                                            var c = this.handlePacket(i2 + vs, s2, o2, this.buffer);
                                            t2(c), (i2 += u);
                                        } else break;
                                    }
                                    i2 === n2
                                        ? ((this.buffer = _s), (this.bufferLength = 0), (this.bufferOffset = 0))
                                        : ((this.bufferLength = n2 - i2), (this.bufferOffset = i2));
                                },
                            },
                            {
                                key: 'mergeBuffer',
                                value: function mergeBuffer(e2) {
                                    if (this.bufferLength > 0) {
                                        var t2 = this.bufferLength + e2.byteLength;
                                        if (t2 + this.bufferOffset > this.buffer.byteLength) {
                                            var i2;
                                            if (t2 <= this.buffer.byteLength && this.bufferOffset >= this.bufferLength)
                                                i2 = this.buffer;
                                            else {
                                                var s2 = this.buffer.byteLength * 2;
                                                for (; t2 >= s2; ) s2 *= 2;
                                                i2 = d.allocUnsafe(s2);
                                            }
                                            this.buffer.copy(
                                                i2,
                                                0,
                                                this.bufferOffset,
                                                this.bufferOffset + this.bufferLength
                                            ),
                                                (this.buffer = i2),
                                                (this.bufferOffset = 0);
                                        }
                                        e2.copy(this.buffer, this.bufferOffset + this.bufferLength),
                                            (this.bufferLength = t2);
                                    } else
                                        (this.buffer = e2),
                                            (this.bufferOffset = 0),
                                            (this.bufferLength = e2.byteLength);
                                },
                            },
                            {
                                key: 'handlePacket',
                                value: function handlePacket(e2, t2, n2, i2) {
                                    switch (t2) {
                                        case 50:
                                            return M.bindComplete;
                                        case 49:
                                            return M.parseComplete;
                                        case 51:
                                            return M.closeComplete;
                                        case 110:
                                            return M.noData;
                                        case 115:
                                            return M.portalSuspended;
                                        case 99:
                                            return M.copyDone;
                                        case 87:
                                            return M.replicationStart;
                                        case 73:
                                            return M.emptyQuery;
                                        case 68:
                                            return this.parseDataRowMessage(e2, n2, i2);
                                        case 67:
                                            return this.parseCommandCompleteMessage(e2, n2, i2);
                                        case 90:
                                            return this.parseReadyForQueryMessage(e2, n2, i2);
                                        case 65:
                                            return this.parseNotificationMessage(e2, n2, i2);
                                        case 82:
                                            return this.parseAuthenticationResponse(e2, n2, i2);
                                        case 83:
                                            return this.parseParameterStatusMessage(e2, n2, i2);
                                        case 75:
                                            return this.parseBackendKeyData(e2, n2, i2);
                                        case 69:
                                            return this.parseErrorMessage(e2, n2, i2, 'error');
                                        case 78:
                                            return this.parseErrorMessage(e2, n2, i2, 'notice');
                                        case 84:
                                            return this.parseRowDescriptionMessage(e2, n2, i2);
                                        case 116:
                                            return this.parseParameterDescriptionMessage(e2, n2, i2);
                                        case 71:
                                            return this.parseCopyInMessage(e2, n2, i2);
                                        case 72:
                                            return this.parseCopyOutMessage(e2, n2, i2);
                                        case 100:
                                            return this.parseCopyData(e2, n2, i2);
                                        default:
                                            sc.default.fail('unknown message code: '.concat(t2.toString(16)));
                                    }
                                },
                            },
                            {
                                key: 'parseReadyForQueryMessage',
                                value: function parseReadyForQueryMessage(e2, t2, n2) {
                                    this.reader.setBuffer(e2, n2);
                                    var i2 = this.reader.string(1);
                                    return new M.ReadyForQueryMessage(t2, i2);
                                },
                            },
                            {
                                key: 'parseCommandCompleteMessage',
                                value: function parseCommandCompleteMessage(e2, t2, n2) {
                                    this.reader.setBuffer(e2, n2);
                                    var i2 = this.reader.cstring();
                                    return new M.CommandCompleteMessage(t2, i2);
                                },
                            },
                            {
                                key: 'parseCopyData',
                                value: function parseCopyData(e2, t2, n2) {
                                    var i2 = n2.slice(e2, e2 + (t2 - 4));
                                    return new M.CopyDataMessage(t2, i2);
                                },
                            },
                            {
                                key: 'parseCopyInMessage',
                                value: function parseCopyInMessage(e2, t2, n2) {
                                    return this.parseCopyMessage(e2, t2, n2, 'copyInResponse');
                                },
                            },
                            {
                                key: 'parseCopyOutMessage',
                                value: function parseCopyOutMessage(e2, t2, n2) {
                                    return this.parseCopyMessage(e2, t2, n2, 'copyOutResponse');
                                },
                            },
                            {
                                key: 'parseCopyMessage',
                                value: function parseCopyMessage(e2, t2, n2, i2) {
                                    this.reader.setBuffer(e2, n2);
                                    var s2 = this.reader.byte() !== 0,
                                        o2 = this.reader.int16(),
                                        u = new M.CopyResponse(t2, i2, s2, o2);
                                    for (var c = 0; c < o2; c++) u.columnTypes[c] = this.reader.int16();
                                    return u;
                                },
                            },
                            {
                                key: 'parseNotificationMessage',
                                value: function parseNotificationMessage(e2, t2, n2) {
                                    this.reader.setBuffer(e2, n2);
                                    var i2 = this.reader.int32(),
                                        s2 = this.reader.cstring(),
                                        o2 = this.reader.cstring();
                                    return new M.NotificationResponseMessage(t2, i2, s2, o2);
                                },
                            },
                            {
                                key: 'parseRowDescriptionMessage',
                                value: function parseRowDescriptionMessage(e2, t2, n2) {
                                    this.reader.setBuffer(e2, n2);
                                    var i2 = this.reader.int16(),
                                        s2 = new M.RowDescriptionMessage(t2, i2);
                                    for (var o2 = 0; o2 < i2; o2++) s2.fields[o2] = this.parseField();
                                    return s2;
                                },
                            },
                            {
                                key: 'parseField',
                                value: function parseField() {
                                    var e2 = this.reader.cstring(),
                                        t2 = this.reader.int32(),
                                        n2 = this.reader.int16(),
                                        i2 = this.reader.int32(),
                                        s2 = this.reader.int16(),
                                        o2 = this.reader.int32(),
                                        u = this.reader.int16() === 0 ? 'text' : 'binary';
                                    return new M.Field(e2, t2, n2, i2, s2, o2, u);
                                },
                            },
                            {
                                key: 'parseParameterDescriptionMessage',
                                value: function parseParameterDescriptionMessage(e2, t2, n2) {
                                    this.reader.setBuffer(e2, n2);
                                    var i2 = this.reader.int16(),
                                        s2 = new M.ParameterDescriptionMessage(t2, i2);
                                    for (var o2 = 0; o2 < i2; o2++) s2.dataTypeIDs[o2] = this.reader.int32();
                                    return s2;
                                },
                            },
                            {
                                key: 'parseDataRowMessage',
                                value: function parseDataRowMessage(e2, t2, n2) {
                                    this.reader.setBuffer(e2, n2);
                                    var i2 = this.reader.int16(),
                                        s2 = new Array(i2);
                                    for (var o2 = 0; o2 < i2; o2++) {
                                        var u = this.reader.int32();
                                        s2[o2] = u === -1 ? null : this.reader.string(u);
                                    }
                                    return new M.DataRowMessage(t2, s2);
                                },
                            },
                            {
                                key: 'parseParameterStatusMessage',
                                value: function parseParameterStatusMessage(e2, t2, n2) {
                                    this.reader.setBuffer(e2, n2);
                                    var i2 = this.reader.cstring(),
                                        s2 = this.reader.cstring();
                                    return new M.ParameterStatusMessage(t2, i2, s2);
                                },
                            },
                            {
                                key: 'parseBackendKeyData',
                                value: function parseBackendKeyData(e2, t2, n2) {
                                    this.reader.setBuffer(e2, n2);
                                    var i2 = this.reader.int32(),
                                        s2 = this.reader.int32();
                                    return new M.BackendKeyDataMessage(t2, i2, s2);
                                },
                            },
                            {
                                key: 'parseAuthenticationResponse',
                                value: function parseAuthenticationResponse(e2, t2, n2) {
                                    this.reader.setBuffer(e2, n2);
                                    var i2 = this.reader.int32(),
                                        s2 = {
                                            name: 'authenticationOk',
                                            length: t2,
                                        };
                                    switch (i2) {
                                        case 0:
                                            break;
                                        case 3:
                                            s2.length === 8 && (s2.name = 'authenticationCleartextPassword');
                                            break;
                                        case 5:
                                            if (s2.length === 12) {
                                                s2.name = 'authenticationMD5Password';
                                                var u = this.reader.bytes(4);
                                                return new M.AuthenticationMD5Password(t2, u);
                                            }
                                            break;
                                        case 10:
                                            (s2.name = 'authenticationSASL'), (s2.mechanisms = []);
                                            var o2;
                                            do (o2 = this.reader.cstring()), o2 && s2.mechanisms.push(o2);
                                            while (o2);
                                            break;
                                        case 11:
                                            (s2.name = 'authenticationSASLContinue'),
                                                (s2.data = this.reader.string(t2 - 8));
                                            break;
                                        case 12:
                                            (s2.name = 'authenticationSASLFinal'),
                                                (s2.data = this.reader.string(t2 - 8));
                                            break;
                                        default:
                                            throw new Error('Unknown authenticationOk message type ' + i2);
                                    }
                                    return s2;
                                },
                            },
                            {
                                key: 'parseErrorMessage',
                                value: function parseErrorMessage(e2, t2, n2, i2) {
                                    this.reader.setBuffer(e2, n2);
                                    var s2 = {},
                                        o2 = this.reader.string(1);
                                    for (; o2 !== '\x00'; )
                                        (s2[o2] = this.reader.cstring()), (o2 = this.reader.string(1));
                                    var u = s2.M,
                                        c =
                                            i2 === 'notice'
                                                ? new M.NoticeMessage(t2, u)
                                                : new M.DatabaseError(u, t2, i2);
                                    return (
                                        (c.severity = s2.S),
                                        (c.code = s2.C),
                                        (c.detail = s2.D),
                                        (c.hint = s2.H),
                                        (c.position = s2.P),
                                        (c.internalPosition = s2.p),
                                        (c.internalQuery = s2.q),
                                        (c.where = s2.W),
                                        (c.schema = s2.s),
                                        (c.table = s2.t),
                                        (c.column = s2.c),
                                        (c.dataType = s2.d),
                                        (c.constraint = s2.n),
                                        (c.file = s2.F),
                                        (c.line = s2.L),
                                        (c.routine = s2.R),
                                        c
                                    );
                                },
                            },
                        ]);
                        return _a4;
                    })()),
                    __name(_a4, 'on'),
                    _a4);
            a2(on, 'Parser');
            var sn = on;
            qe.Parser = sn;
        });
        var an = I(function (xe) {
            'use strict';
            var hc = function hc(r2, e2) {
                var t2 = new cc.Parser();
                return (
                    r2.on('data', function (n2) {
                        return t2.parse(n2, e2);
                    }),
                    new Promise(function (n2) {
                        return r2.on('end', function () {
                            return n2();
                        });
                    })
                );
            };
            p2();
            Object.defineProperty(xe, '__esModule', {
                value: true,
            });
            xe.DatabaseError = xe.serialize = xe.parse = void 0;
            var ac = Yr();
            Object.defineProperty(xe, 'DatabaseError', {
                enumerable: true,
                get: function get() {
                    return ac.DatabaseError;
                },
            });
            var uc = bs();
            Object.defineProperty(xe, 'serialize', {
                enumerable: true,
                get: function get() {
                    return uc.serialize;
                },
            });
            var cc = As();
            __name(hc, 'hc');
            a2(hc, 'parse');
            xe.parse = hc;
        });
        var Cs = {};
        ee(Cs, {
            connect: function () {
                return lc;
            },
        });
        __name(lc, 'lc');
        var Is = K(function () {
            p2();
            a2(lc, 'connect');
        });
        var hn = I(function (tf, Bs) {
            'use strict';
            var _a4;
            p2();
            var Ts = (wt(), O(ms)),
                fc = we().EventEmitter,
                _an = an(),
                pc = _an.parse,
                q = _an.serialize,
                Ps = q.flush(),
                dc = q.sync(),
                yc = q.end(),
                cn =
                    ((_a4 = /*#__PURE__*/ (function (fc) {
                        _inherits(_a4, fc);
                        var _super = _create_super(_a4);
                        function _a4(e2) {
                            _class_call_check(this, _a4);
                            var _this;
                            (_this = _super.call(this)),
                                (e2 = e2 || {}),
                                (_this.stream = e2.stream || new Ts.Socket()),
                                (_this._keepAlive = e2.keepAlive),
                                (_this._keepAliveInitialDelayMillis = e2.keepAliveInitialDelayMillis),
                                (_this.lastBuffer = false),
                                (_this.parsedStatements = {}),
                                (_this.ssl = e2.ssl || false),
                                (_this._ending = false),
                                (_this._emitMessage = false);
                            var t2 = _assert_this_initialized(_this);
                            _this.on('newListener', function (n2) {
                                n2 === 'message' && (t2._emitMessage = true);
                            });
                            return _possible_constructor_return(_this);
                        }
                        _create_class(_a4, [
                            {
                                key: 'connect',
                                value: function connect(e2, t2) {
                                    var n2 = this;
                                    (this._connecting = true),
                                        this.stream.setNoDelay(true),
                                        this.stream.connect(e2, t2),
                                        this.stream.once('connect', function () {
                                            n2._keepAlive &&
                                                n2.stream.setKeepAlive(true, n2._keepAliveInitialDelayMillis),
                                                n2.emit('connect');
                                        });
                                    var i2 = a2(function (s2) {
                                        (n2._ending && (s2.code === 'ECONNRESET' || s2.code === 'EPIPE')) ||
                                            n2.emit('error', s2);
                                    }, 'reportStreamError');
                                    if (
                                        (this.stream.on('error', i2),
                                        this.stream.on('close', function () {
                                            n2.emit('end');
                                        }),
                                        !this.ssl)
                                    )
                                        return this.attachListeners(this.stream);
                                    this.stream.once('data', function (s2) {
                                        var o2 = s2.toString('utf8');
                                        switch (o2) {
                                            case 'S':
                                                break;
                                            case 'N':
                                                return (
                                                    n2.stream.end(),
                                                    n2.emit(
                                                        'error',
                                                        new Error('The server does not support SSL connections')
                                                    )
                                                );
                                            default:
                                                return (
                                                    n2.stream.end(),
                                                    n2.emit(
                                                        'error',
                                                        new Error('There was an error establishing an SSL connection')
                                                    )
                                                );
                                        }
                                        var u = (Is(), O(Cs));
                                        var c = {
                                            socket: n2.stream,
                                        };
                                        n2.ssl !== true &&
                                            (Object.assign(c, n2.ssl), 'key' in n2.ssl && (c.key = n2.ssl.key)),
                                            Ts.isIP(t2) === 0 && (c.servername = t2);
                                        try {
                                            n2.stream = u.connect(c);
                                        } catch (h) {
                                            return n2.emit('error', h);
                                        }
                                        n2.attachListeners(n2.stream), n2.stream.on('error', i2), n2.emit('sslconnect');
                                    });
                                },
                            },
                            {
                                key: 'attachListeners',
                                value: function attachListeners(e2) {
                                    var _this = this;
                                    e2.on('end', function () {
                                        _this.emit('end');
                                    }),
                                        pc(e2, function (t2) {
                                            var n2 = t2.name === 'error' ? 'errorMessage' : t2.name;
                                            _this._emitMessage && _this.emit('message', t2), _this.emit(n2, t2);
                                        });
                                },
                            },
                            {
                                key: 'requestSsl',
                                value: function requestSsl() {
                                    this.stream.write(q.requestSsl());
                                },
                            },
                            {
                                key: 'startup',
                                value: function startup(e2) {
                                    this.stream.write(q.startup(e2));
                                },
                            },
                            {
                                key: 'cancel',
                                value: function cancel(e2, t2) {
                                    this._send(q.cancel(e2, t2));
                                },
                            },
                            {
                                key: 'password',
                                value: function password(e2) {
                                    this._send(q.password(e2));
                                },
                            },
                            {
                                key: 'sendSASLInitialResponseMessage',
                                value: function sendSASLInitialResponseMessage(e2, t2) {
                                    this._send(q.sendSASLInitialResponseMessage(e2, t2));
                                },
                            },
                            {
                                key: 'sendSCRAMClientFinalMessage',
                                value: function sendSCRAMClientFinalMessage(e2) {
                                    this._send(q.sendSCRAMClientFinalMessage(e2));
                                },
                            },
                            {
                                key: '_send',
                                value: function _send(e2) {
                                    return this.stream.writable ? this.stream.write(e2) : false;
                                },
                            },
                            {
                                key: 'query',
                                value: function query(e2) {
                                    this._send(q.query(e2));
                                },
                            },
                            {
                                key: 'parse',
                                value: function parse(e2) {
                                    this._send(q.parse(e2));
                                },
                            },
                            {
                                key: 'bind',
                                value: function bind(e2) {
                                    this._send(q.bind(e2));
                                },
                            },
                            {
                                key: 'execute',
                                value: function execute(e2) {
                                    this._send(q.execute(e2));
                                },
                            },
                            {
                                key: 'flush',
                                value: function flush() {
                                    this.stream.writable && this.stream.write(Ps);
                                },
                            },
                            {
                                key: 'sync',
                                value: function sync() {
                                    (this._ending = true), this._send(Ps), this._send(dc);
                                },
                            },
                            {
                                key: 'ref',
                                value: function ref() {
                                    this.stream.ref();
                                },
                            },
                            {
                                key: 'unref',
                                value: function unref() {
                                    this.stream.unref();
                                },
                            },
                            {
                                key: 'end',
                                value: function end() {
                                    var _this = this;
                                    if (((this._ending = true), !this._connecting || !this.stream.writable)) {
                                        this.stream.end();
                                        return;
                                    }
                                    return this.stream.write(yc, function () {
                                        _this.stream.end();
                                    });
                                },
                            },
                            {
                                key: 'close',
                                value: function close(e2) {
                                    this._send(q.close(e2));
                                },
                            },
                            {
                                key: 'describe',
                                value: function describe(e2) {
                                    this._send(q.describe(e2));
                                },
                            },
                            {
                                key: 'sendCopyFromChunk',
                                value: function sendCopyFromChunk(e2) {
                                    this._send(q.copyData(e2));
                                },
                            },
                            {
                                key: 'endCopyFrom',
                                value: function endCopyFrom() {
                                    this._send(q.copyDone());
                                },
                            },
                            {
                                key: 'sendCopyFail',
                                value: function sendCopyFail(e2) {
                                    this._send(q.copyFail(e2));
                                },
                            },
                        ]);
                        return _a4;
                    })(fc)),
                    __name(_a4, 'cn'),
                    _a4);
            a2(cn, 'Connection');
            var un = cn;
            Bs.exports = un;
        });
        var Fs = I(function (of, Rs) {
            'use strict';
            var _a4;
            p2();
            var mc = we().EventEmitter,
                sf = (Ge(), O(He)),
                gc = tt(),
                ln = Qi(),
                wc = Ji(),
                bc = lr(),
                Sc = gt(),
                Ls = ds(),
                xc = et(),
                Ec = hn(),
                fn =
                    ((_a4 = /*#__PURE__*/ (function (mc) {
                        _inherits(_a4, mc);
                        var _super = _create_super(_a4);
                        function _a4(e2) {
                            _class_call_check(this, _a4);
                            var _this;
                            (_this = _super.call(this)),
                                (_this.connectionParameters = new Sc(e2)),
                                (_this.user = _this.connectionParameters.user),
                                (_this.database = _this.connectionParameters.database),
                                (_this.port = _this.connectionParameters.port),
                                (_this.host = _this.connectionParameters.host),
                                Object.defineProperty(_assert_this_initialized(_this), 'password', {
                                    configurable: true,
                                    enumerable: false,
                                    writable: true,
                                    value: _this.connectionParameters.password,
                                }),
                                (_this.replication = _this.connectionParameters.replication);
                            var t2 = e2 || {};
                            (_this._Promise = t2.Promise || b2.Promise),
                                (_this._types = new bc(t2.types)),
                                (_this._ending = false),
                                (_this._connecting = false),
                                (_this._connected = false),
                                (_this._connectionError = false),
                                (_this._queryable = true),
                                (_this.connection =
                                    t2.connection ||
                                    new Ec({
                                        stream: t2.stream,
                                        ssl: _this.connectionParameters.ssl,
                                        keepAlive: t2.keepAlive || false,
                                        keepAliveInitialDelayMillis: t2.keepAliveInitialDelayMillis || 0,
                                        encoding: _this.connectionParameters.client_encoding || 'utf8',
                                    })),
                                (_this.queryQueue = []),
                                (_this.binary = t2.binary || xc.binary),
                                (_this.processID = null),
                                (_this.secretKey = null),
                                (_this.ssl = _this.connectionParameters.ssl || false),
                                _this.ssl &&
                                    _this.ssl.key &&
                                    Object.defineProperty(_this.ssl, 'key', {
                                        enumerable: false,
                                    }),
                                (_this._connectionTimeoutMillis = t2.connectionTimeoutMillis || 0);
                            return _possible_constructor_return(_this);
                        }
                        _create_class(_a4, [
                            {
                                key: '_errorAllQueries',
                                value: function _errorAllQueries(e2) {
                                    var _this = this;
                                    var t2 = a2(function (n2) {
                                        y.nextTick(function () {
                                            n2.handleError(e2, _this.connection);
                                        });
                                    }, 'enqueueError');
                                    this.activeQuery && (t2(this.activeQuery), (this.activeQuery = null)),
                                        this.queryQueue.forEach(t2),
                                        (this.queryQueue.length = 0);
                                },
                            },
                            {
                                key: '_connect',
                                value: function _connect(e2) {
                                    var _this = this;
                                    var t2 = this,
                                        n2 = this.connection;
                                    if (((this._connectionCallback = e2), this._connecting || this._connected)) {
                                        var i2 = new Error(
                                            'Client has already been connected. You cannot reuse a client.'
                                        );
                                        y.nextTick(function () {
                                            e2(i2);
                                        });
                                        return;
                                    }
                                    (this._connecting = true),
                                        this.connectionTimeoutHandle,
                                        this._connectionTimeoutMillis > 0 &&
                                            (this.connectionTimeoutHandle = setTimeout(function () {
                                                (n2._ending = true), n2.stream.destroy(new Error('timeout expired'));
                                            }, this._connectionTimeoutMillis)),
                                        this.host && this.host.indexOf('/') === 0
                                            ? n2.connect(this.host + '/.s.PGSQL.' + this.port)
                                            : n2.connect(this.port, this.host),
                                        n2.on('connect', function () {
                                            t2.ssl ? n2.requestSsl() : n2.startup(t2.getStartupConf());
                                        }),
                                        n2.on('sslconnect', function () {
                                            n2.startup(t2.getStartupConf());
                                        }),
                                        this._attachListeners(n2),
                                        n2.once('end', function () {
                                            var i2 = _this._ending
                                                ? new Error('Connection terminated')
                                                : new Error('Connection terminated unexpectedly');
                                            clearTimeout(_this.connectionTimeoutHandle),
                                                _this._errorAllQueries(i2),
                                                _this._ending ||
                                                    (_this._connecting && !_this._connectionError
                                                        ? _this._connectionCallback
                                                            ? _this._connectionCallback(i2)
                                                            : _this._handleErrorEvent(i2)
                                                        : _this._connectionError || _this._handleErrorEvent(i2)),
                                                y.nextTick(function () {
                                                    _this.emit('end');
                                                });
                                        });
                                },
                            },
                            {
                                key: 'connect',
                                value: function connect(e2) {
                                    var _this = this;
                                    if (e2) {
                                        this._connect(e2);
                                        return;
                                    }
                                    return new this._Promise(function (t2, n2) {
                                        _this._connect(function (i2) {
                                            i2 ? n2(i2) : t2();
                                        });
                                    });
                                },
                            },
                            {
                                key: '_attachListeners',
                                value: function _attachListeners(e2) {
                                    e2.on(
                                        'authenticationCleartextPassword',
                                        this._handleAuthCleartextPassword.bind(this)
                                    ),
                                        e2.on('authenticationMD5Password', this._handleAuthMD5Password.bind(this)),
                                        e2.on('authenticationSASL', this._handleAuthSASL.bind(this)),
                                        e2.on('authenticationSASLContinue', this._handleAuthSASLContinue.bind(this)),
                                        e2.on('authenticationSASLFinal', this._handleAuthSASLFinal.bind(this)),
                                        e2.on('backendKeyData', this._handleBackendKeyData.bind(this)),
                                        e2.on('error', this._handleErrorEvent.bind(this)),
                                        e2.on('errorMessage', this._handleErrorMessage.bind(this)),
                                        e2.on('readyForQuery', this._handleReadyForQuery.bind(this)),
                                        e2.on('notice', this._handleNotice.bind(this)),
                                        e2.on('rowDescription', this._handleRowDescription.bind(this)),
                                        e2.on('dataRow', this._handleDataRow.bind(this)),
                                        e2.on('portalSuspended', this._handlePortalSuspended.bind(this)),
                                        e2.on('emptyQuery', this._handleEmptyQuery.bind(this)),
                                        e2.on('commandComplete', this._handleCommandComplete.bind(this)),
                                        e2.on('parseComplete', this._handleParseComplete.bind(this)),
                                        e2.on('copyInResponse', this._handleCopyInResponse.bind(this)),
                                        e2.on('copyData', this._handleCopyData.bind(this)),
                                        e2.on('notification', this._handleNotification.bind(this));
                                },
                            },
                            {
                                key: '_checkPgPass',
                                value: function _checkPgPass(e2) {
                                    var _this = this;
                                    var t2 = this.connection;
                                    typeof this.password == 'function'
                                        ? this._Promise
                                              .resolve()
                                              .then(function () {
                                                  return _this.password();
                                              })
                                              .then(function (n2) {
                                                  if (n2 !== void 0) {
                                                      if (typeof n2 != 'string') {
                                                          t2.emit('error', new TypeError('Password must be a string'));
                                                          return;
                                                      }
                                                      _this.connectionParameters.password = _this.password = n2;
                                                  } else _this.connectionParameters.password = _this.password = null;
                                                  e2();
                                              })
                                              .catch(function (n2) {
                                                  t2.emit('error', n2);
                                              })
                                        : this.password !== null
                                        ? e2()
                                        : wc(this.connectionParameters, function (n2) {
                                              n2 !== void 0 &&
                                                  (_this.connectionParameters.password = _this.password = n2),
                                                  e2();
                                          });
                                },
                            },
                            {
                                key: '_handleAuthCleartextPassword',
                                value: function _handleAuthCleartextPassword(e2) {
                                    var _this = this;
                                    this._checkPgPass(function () {
                                        _this.connection.password(_this.password);
                                    });
                                },
                            },
                            {
                                key: '_handleAuthMD5Password',
                                value: function _handleAuthMD5Password(e2) {
                                    var _this = this;
                                    this._checkPgPass(function () {
                                        var t2 = gc.postgresMd5PasswordHash(_this.user, _this.password, e2.salt);
                                        _this.connection.password(t2);
                                    });
                                },
                            },
                            {
                                key: '_handleAuthSASL',
                                value: function _handleAuthSASL(e2) {
                                    var _this = this;
                                    this._checkPgPass(function () {
                                        (_this.saslSession = ln.startSession(e2.mechanisms)),
                                            _this.connection.sendSASLInitialResponseMessage(
                                                _this.saslSession.mechanism,
                                                _this.saslSession.response
                                            );
                                    });
                                },
                            },
                            {
                                key: '_handleAuthSASLContinue',
                                value: function _handleAuthSASLContinue(e2) {
                                    ln.continueSession(this.saslSession, this.password, e2.data),
                                        this.connection.sendSCRAMClientFinalMessage(this.saslSession.response);
                                },
                            },
                            {
                                key: '_handleAuthSASLFinal',
                                value: function _handleAuthSASLFinal(e2) {
                                    ln.finalizeSession(this.saslSession, e2.data), (this.saslSession = null);
                                },
                            },
                            {
                                key: '_handleBackendKeyData',
                                value: function _handleBackendKeyData(e2) {
                                    (this.processID = e2.processID), (this.secretKey = e2.secretKey);
                                },
                            },
                            {
                                key: '_handleReadyForQuery',
                                value: function _handleReadyForQuery(e2) {
                                    this._connecting &&
                                        ((this._connecting = false),
                                        (this._connected = true),
                                        clearTimeout(this.connectionTimeoutHandle),
                                        this._connectionCallback &&
                                            (this._connectionCallback(null, this), (this._connectionCallback = null)),
                                        this.emit('connect'));
                                    var _this = this,
                                        t2 = _this.activeQuery;
                                    (this.activeQuery = null),
                                        (this.readyForQuery = true),
                                        t2 && t2.handleReadyForQuery(this.connection),
                                        this._pulseQueryQueue();
                                },
                            },
                            {
                                key: '_handleErrorWhileConnecting',
                                value: function _handleErrorWhileConnecting(e2) {
                                    if (!this._connectionError) {
                                        if (
                                            ((this._connectionError = true),
                                            clearTimeout(this.connectionTimeoutHandle),
                                            this._connectionCallback)
                                        )
                                            return this._connectionCallback(e2);
                                        this.emit('error', e2);
                                    }
                                },
                            },
                            {
                                key: '_handleErrorEvent',
                                value: function _handleErrorEvent(e2) {
                                    if (this._connecting) return this._handleErrorWhileConnecting(e2);
                                    (this._queryable = false), this._errorAllQueries(e2), this.emit('error', e2);
                                },
                            },
                            {
                                key: '_handleErrorMessage',
                                value: function _handleErrorMessage(e2) {
                                    if (this._connecting) return this._handleErrorWhileConnecting(e2);
                                    var t2 = this.activeQuery;
                                    if (!t2) {
                                        this._handleErrorEvent(e2);
                                        return;
                                    }
                                    (this.activeQuery = null), t2.handleError(e2, this.connection);
                                },
                            },
                            {
                                key: '_handleRowDescription',
                                value: function _handleRowDescription(e2) {
                                    this.activeQuery.handleRowDescription(e2);
                                },
                            },
                            {
                                key: '_handleDataRow',
                                value: function _handleDataRow(e2) {
                                    this.activeQuery.handleDataRow(e2);
                                },
                            },
                            {
                                key: '_handlePortalSuspended',
                                value: function _handlePortalSuspended(e2) {
                                    this.activeQuery.handlePortalSuspended(this.connection);
                                },
                            },
                            {
                                key: '_handleEmptyQuery',
                                value: function _handleEmptyQuery(e2) {
                                    this.activeQuery.handleEmptyQuery(this.connection);
                                },
                            },
                            {
                                key: '_handleCommandComplete',
                                value: function _handleCommandComplete(e2) {
                                    this.activeQuery.handleCommandComplete(e2, this.connection);
                                },
                            },
                            {
                                key: '_handleParseComplete',
                                value: function _handleParseComplete(e2) {
                                    this.activeQuery.name &&
                                        (this.connection.parsedStatements[this.activeQuery.name] =
                                            this.activeQuery.text);
                                },
                            },
                            {
                                key: '_handleCopyInResponse',
                                value: function _handleCopyInResponse(e2) {
                                    this.activeQuery.handleCopyInResponse(this.connection);
                                },
                            },
                            {
                                key: '_handleCopyData',
                                value: function _handleCopyData(e2) {
                                    this.activeQuery.handleCopyData(e2, this.connection);
                                },
                            },
                            {
                                key: '_handleNotification',
                                value: function _handleNotification(e2) {
                                    this.emit('notification', e2);
                                },
                            },
                            {
                                key: '_handleNotice',
                                value: function _handleNotice(e2) {
                                    this.emit('notice', e2);
                                },
                            },
                            {
                                key: 'getStartupConf',
                                value: function getStartupConf() {
                                    var e2 = this.connectionParameters,
                                        t2 = {
                                            user: e2.user,
                                            database: e2.database,
                                        },
                                        n2 = e2.application_name || e2.fallback_application_name;
                                    return (
                                        n2 && (t2.application_name = n2),
                                        e2.replication && (t2.replication = '' + e2.replication),
                                        e2.statement_timeout &&
                                            (t2.statement_timeout = String(parseInt(e2.statement_timeout, 10))),
                                        e2.lock_timeout && (t2.lock_timeout = String(parseInt(e2.lock_timeout, 10))),
                                        e2.idle_in_transaction_session_timeout &&
                                            (t2.idle_in_transaction_session_timeout = String(
                                                parseInt(e2.idle_in_transaction_session_timeout, 10)
                                            )),
                                        e2.options && (t2.options = e2.options),
                                        t2
                                    );
                                },
                            },
                            {
                                key: 'cancel',
                                value: function cancel(e2, t2) {
                                    if (e2.activeQuery === t2) {
                                        var n2 = this.connection;
                                        this.host && this.host.indexOf('/') === 0
                                            ? n2.connect(this.host + '/.s.PGSQL.' + this.port)
                                            : n2.connect(this.port, this.host),
                                            n2.on('connect', function () {
                                                n2.cancel(e2.processID, e2.secretKey);
                                            });
                                    } else
                                        e2.queryQueue.indexOf(t2) !== -1 &&
                                            e2.queryQueue.splice(e2.queryQueue.indexOf(t2), 1);
                                },
                            },
                            {
                                key: 'setTypeParser',
                                value: function setTypeParser(e2, t2, n2) {
                                    return this._types.setTypeParser(e2, t2, n2);
                                },
                            },
                            {
                                key: 'getTypeParser',
                                value: function getTypeParser(e2, t2) {
                                    return this._types.getTypeParser(e2, t2);
                                },
                            },
                            {
                                key: 'escapeIdentifier',
                                value: function escapeIdentifier(e2) {
                                    return '"' + e2.replace(/"/g, '""') + '"';
                                },
                            },
                            {
                                key: 'escapeLiteral',
                                value: function escapeLiteral(e2) {
                                    for (var t2 = false, n2 = "'", i2 = 0; i2 < e2.length; i2++) {
                                        var s2 = e2[i2];
                                        s2 === "'"
                                            ? (n2 += s2 + s2)
                                            : s2 === '\\'
                                            ? ((n2 += s2 + s2), (t2 = true))
                                            : (n2 += s2);
                                    }
                                    return (n2 += "'"), t2 === true && (n2 = ' E' + n2), n2;
                                },
                            },
                            {
                                key: '_pulseQueryQueue',
                                value: function _pulseQueryQueue() {
                                    var _this = this;
                                    if (this.readyForQuery === true)
                                        if (((this.activeQuery = this.queryQueue.shift()), this.activeQuery)) {
                                            (this.readyForQuery = false), (this.hasExecuted = true);
                                            var e2 = this.activeQuery.submit(this.connection);
                                            e2 &&
                                                y.nextTick(function () {
                                                    _this.activeQuery.handleError(e2, _this.connection),
                                                        (_this.readyForQuery = true),
                                                        _this._pulseQueryQueue();
                                                });
                                        } else this.hasExecuted && ((this.activeQuery = null), this.emit('drain'));
                                },
                            },
                            {
                                key: 'query',
                                value: function query(e2, t2, n2) {
                                    var _this = this;
                                    var i2, s2, o2, u, c;
                                    if (e2 == null) throw new TypeError('Client was passed a null or undefined query');
                                    return (
                                        typeof e2.submit == 'function'
                                            ? ((o2 = e2.query_timeout || this.connectionParameters.query_timeout),
                                              (s2 = i2 = e2),
                                              typeof t2 == 'function' && (i2.callback = i2.callback || t2))
                                            : ((o2 = this.connectionParameters.query_timeout),
                                              (i2 = new Ls(e2, t2, n2)),
                                              i2.callback ||
                                                  (s2 = new this._Promise(function (h, l2) {
                                                      i2.callback = function (m2, E) {
                                                          return m2 ? l2(m2) : h(E);
                                                      };
                                                  }))),
                                        o2 &&
                                            ((c = i2.callback),
                                            (u = setTimeout(function () {
                                                var h = new Error('Query read timeout');
                                                y.nextTick(function () {
                                                    i2.handleError(h, _this.connection);
                                                }),
                                                    c(h),
                                                    (i2.callback = function () {});
                                                var l2 = _this.queryQueue.indexOf(i2);
                                                l2 > -1 && _this.queryQueue.splice(l2, 1), _this._pulseQueryQueue();
                                            }, o2)),
                                            (i2.callback = function (h, l2) {
                                                clearTimeout(u), c(h, l2);
                                            })),
                                        this.binary && !i2.binary && (i2.binary = true),
                                        i2._result && !i2._result._types && (i2._result._types = this._types),
                                        this._queryable
                                            ? this._ending
                                                ? (y.nextTick(function () {
                                                      i2.handleError(
                                                          new Error('Client was closed and is not queryable'),
                                                          _this.connection
                                                      );
                                                  }),
                                                  s2)
                                                : (this.queryQueue.push(i2), this._pulseQueryQueue(), s2)
                                            : (y.nextTick(function () {
                                                  i2.handleError(
                                                      new Error(
                                                          'Client has encountered a connection error and is not queryable'
                                                      ),
                                                      _this.connection
                                                  );
                                              }),
                                              s2)
                                    );
                                },
                            },
                            {
                                key: 'ref',
                                value: function ref() {
                                    this.connection.ref();
                                },
                            },
                            {
                                key: 'unref',
                                value: function unref() {
                                    this.connection.unref();
                                },
                            },
                            {
                                key: 'end',
                                value: function end(e2) {
                                    var _this = this;
                                    if (((this._ending = true), !this.connection._connecting))
                                        if (e2) e2();
                                        else return this._Promise.resolve();
                                    if (
                                        (this.activeQuery || !this._queryable
                                            ? this.connection.stream.destroy()
                                            : this.connection.end(),
                                        e2)
                                    )
                                        this.connection.once('end', e2);
                                    else
                                        return new this._Promise(function (t2) {
                                            _this.connection.once('end', t2);
                                        });
                                },
                            },
                        ]);
                        return _a4;
                    })(mc)),
                    __name(_a4, 'fn'),
                    _a4);
            a2(fn, 'Client');
            var vt = fn;
            vt.Query = Ls;
            Rs.exports = vt;
        });
        var ks = I(function (cf, Os) {
            'use strict';
            var _c = function _c() {
                throw new Error('Release called on client which has already been released to the pool.');
            };
            var _t = function _t(r2, e2) {
                if (e2)
                    return {
                        callback: e2,
                        result: void 0,
                    };
                var t2,
                    n2,
                    i2 = a2(function (o2, u) {
                        o2 ? t2(o2) : n2(u);
                    }, 'cb'),
                    s2 = new r2(function (o2, u) {
                        (n2 = o2), (t2 = u);
                    }).catch(function (o2) {
                        throw (Error.captureStackTrace(o2), o2);
                    });
                return {
                    callback: i2,
                    result: s2,
                };
            };
            var Ac = function Ac(r2, e2) {
                return a2(
                    /* @__PURE__ */ __name(function t2(n2) {
                        (n2.client = e2),
                            e2.removeListener('error', t2),
                            e2.on('error', function () {
                                r2.log('additional client error after disconnection due to error', n2);
                            }),
                            r2._remove(e2),
                            r2.emit('error', n2, e2);
                    }, 't'),
                    'idleListener'
                );
            };
            var _a4, _b, _c2;
            p2();
            var vc = we().EventEmitter,
                Ms = a2(function () {}, 'NOOP'),
                Ds = a2(function (r2, e2) {
                    var t2 = r2.findIndex(e2);
                    return t2 === -1 ? void 0 : r2.splice(t2, 1)[0];
                }, 'removeWhere'),
                yn =
                    ((_a4 = function _a4(e2, t2, n2) {
                        _class_call_check(this, _a4);
                        (this.client = e2), (this.idleListener = t2), (this.timeoutId = n2);
                    }),
                    __name(_a4, 'yn'),
                    _a4);
            a2(yn, 'IdleItem');
            var pn = yn,
                mn =
                    ((_b = function _b(e2) {
                        _class_call_check(this, _b);
                        this.callback = e2;
                    }),
                    __name(_b, 'mn'),
                    _b);
            a2(mn, 'PendingItem');
            var Ne = mn;
            __name(_c, '_c');
            a2(_c, 'throwOnDoubleRelease');
            __name(_t, '_t');
            a2(_t, 'promisify');
            __name(Ac, 'Ac');
            a2(Ac, 'makeIdleListener');
            var gn =
                ((_c2 = /*#__PURE__*/ (function (vc) {
                    _inherits(_c2, vc);
                    var _super = _create_super(_c2);
                    function _c2(e2, t2) {
                        _class_call_check(this, _c2);
                        var _this;
                        (_this = _super.call(this)),
                            (_this.options = Object.assign({}, e2)),
                            e2 != null &&
                                'password' in e2 &&
                                Object.defineProperty(_this.options, 'password', {
                                    configurable: true,
                                    enumerable: false,
                                    writable: true,
                                    value: e2.password,
                                }),
                            e2 != null &&
                                e2.ssl &&
                                e2.ssl.key &&
                                Object.defineProperty(_this.options.ssl, 'key', {
                                    enumerable: false,
                                }),
                            (_this.options.max = _this.options.max || _this.options.poolSize || 10),
                            (_this.options.maxUses = _this.options.maxUses || 1 / 0),
                            (_this.options.allowExitOnIdle = _this.options.allowExitOnIdle || false),
                            (_this.options.maxLifetimeSeconds = _this.options.maxLifetimeSeconds || 0),
                            (_this.log = _this.options.log || function () {}),
                            (_this.Client = _this.options.Client || t2 || At().Client),
                            (_this.Promise = _this.options.Promise || b2.Promise),
                            _type_of(_this.options.idleTimeoutMillis) > 'u' && (_this.options.idleTimeoutMillis = 1e4),
                            (_this._clients = []),
                            (_this._idle = []),
                            (_this._expired = /* @__PURE__ */ new WeakSet()),
                            (_this._pendingQueue = []),
                            (_this._endCallback = void 0),
                            (_this.ending = false),
                            (_this.ended = false);
                        return _possible_constructor_return(_this);
                    }
                    _create_class(_c2, [
                        {
                            key: '_isFull',
                            value: function _isFull() {
                                return this._clients.length >= this.options.max;
                            },
                        },
                        {
                            key: '_pulseQueue',
                            value: function _pulseQueue() {
                                var _this = this;
                                if ((this.log('pulse queue'), this.ended)) {
                                    this.log('pulse queue ended');
                                    return;
                                }
                                if (this.ending) {
                                    this.log('pulse queue on ending'),
                                        this._idle.length &&
                                            this._idle.slice().map(function (t2) {
                                                _this._remove(t2.client);
                                            }),
                                        this._clients.length || ((this.ended = true), this._endCallback());
                                    return;
                                }
                                if (!this._pendingQueue.length) {
                                    this.log('no queued requests');
                                    return;
                                }
                                if (!this._idle.length && this._isFull()) return;
                                var e2 = this._pendingQueue.shift();
                                if (this._idle.length) {
                                    var t2 = this._idle.pop();
                                    clearTimeout(t2.timeoutId);
                                    var n2 = t2.client;
                                    n2.ref && n2.ref();
                                    var i2 = t2.idleListener;
                                    return this._acquireClient(n2, e2, i2, false);
                                }
                                if (!this._isFull()) return this.newClient(e2);
                                throw new Error('unexpected condition');
                            },
                        },
                        {
                            key: '_remove',
                            value: function _remove(e2) {
                                var t2 = Ds(this._idle, function (n2) {
                                    return n2.client === e2;
                                });
                                t2 !== void 0 && clearTimeout(t2.timeoutId),
                                    (this._clients = this._clients.filter(function (n2) {
                                        return n2 !== e2;
                                    })),
                                    e2.end(),
                                    this.emit('remove', e2);
                            },
                        },
                        {
                            key: 'connect',
                            value: function connect(e2) {
                                var _this = this;
                                if (this.ending) {
                                    var i2 = new Error('Cannot use a pool after calling end on the pool');
                                    return e2 ? e2(i2) : this.Promise.reject(i2);
                                }
                                var t2 = _t(this.Promise, e2),
                                    n2 = t2.result;
                                if (this._isFull() || this._idle.length) {
                                    if (
                                        (this._idle.length &&
                                            y.nextTick(function () {
                                                return _this._pulseQueue();
                                            }),
                                        !this.options.connectionTimeoutMillis)
                                    )
                                        return this._pendingQueue.push(new Ne(t2.callback)), n2;
                                    var i21 = a2(function (u, c, h) {
                                            clearTimeout(o2), t2.callback(u, c, h);
                                        }, 'queueCallback'),
                                        s2 = new Ne(i21),
                                        o2 = setTimeout(function () {
                                            Ds(_this._pendingQueue, function (u) {
                                                return u.callback === i21;
                                            }),
                                                (s2.timedOut = true),
                                                t2.callback(new Error('timeout exceeded when trying to connect'));
                                        }, this.options.connectionTimeoutMillis);
                                    return this._pendingQueue.push(s2), n2;
                                }
                                return this.newClient(new Ne(t2.callback)), n2;
                            },
                        },
                        {
                            key: 'newClient',
                            value: function newClient(e2) {
                                var _this = this;
                                var t2 = new this.Client(this.options);
                                this._clients.push(t2);
                                var n2 = Ac(this, t2);
                                this.log('checking client timeout');
                                var i2,
                                    s2 = false;
                                this.options.connectionTimeoutMillis &&
                                    (i2 = setTimeout(function () {
                                        _this.log('ending client due to timeout'),
                                            (s2 = true),
                                            t2.connection ? t2.connection.stream.destroy() : t2.end();
                                    }, this.options.connectionTimeoutMillis)),
                                    this.log('connecting new client'),
                                    t2.connect(function (o2) {
                                        if ((i2 && clearTimeout(i2), t2.on('error', n2), o2))
                                            _this.log('client failed to connect', o2),
                                                (_this._clients = _this._clients.filter(function (u) {
                                                    return u !== t2;
                                                })),
                                                s2 && (o2.message = 'Connection terminated due to connection timeout'),
                                                _this._pulseQueue(),
                                                e2.timedOut || e2.callback(o2, void 0, Ms);
                                        else {
                                            if (
                                                (_this.log('new client connected'),
                                                _this.options.maxLifetimeSeconds !== 0)
                                            ) {
                                                var u = setTimeout(function () {
                                                    _this.log('ending client due to expired lifetime'),
                                                        _this._expired.add(t2),
                                                        _this._idle.findIndex(function (h) {
                                                            return h.client === t2;
                                                        }) !== -1 &&
                                                            _this._acquireClient(
                                                                t2,
                                                                new Ne(function (h, l2, m2) {
                                                                    return m2();
                                                                }),
                                                                n2,
                                                                false
                                                            );
                                                }, _this.options.maxLifetimeSeconds * 1e3);
                                                u.unref(),
                                                    t2.once('end', function () {
                                                        return clearTimeout(u);
                                                    });
                                            }
                                            return _this._acquireClient(t2, e2, n2, true);
                                        }
                                    });
                            },
                        },
                        {
                            key: '_acquireClient',
                            value: function _acquireClient(e2, t2, n2, i2) {
                                i2 && this.emit('connect', e2),
                                    this.emit('acquire', e2),
                                    (e2.release = this._releaseOnce(e2, n2)),
                                    e2.removeListener('error', n2),
                                    t2.timedOut
                                        ? i2 && this.options.verify
                                            ? this.options.verify(e2, e2.release)
                                            : e2.release()
                                        : i2 && this.options.verify
                                        ? this.options.verify(e2, function (s2) {
                                              if (s2) return e2.release(s2), t2.callback(s2, void 0, Ms);
                                              t2.callback(void 0, e2, e2.release);
                                          })
                                        : t2.callback(void 0, e2, e2.release);
                            },
                        },
                        {
                            key: '_releaseOnce',
                            value: function _releaseOnce(e2, t2) {
                                var _this = this;
                                var n2 = false;
                                return function (i2) {
                                    n2 && _c(), (n2 = true), _this._release(e2, t2, i2);
                                };
                            },
                        },
                        {
                            key: '_release',
                            value: function _release(e2, t2, n2) {
                                var _this = this;
                                if (
                                    (e2.on('error', t2),
                                    (e2._poolUseCount = (e2._poolUseCount || 0) + 1),
                                    this.emit('release', n2, e2),
                                    n2 ||
                                        this.ending ||
                                        !e2._queryable ||
                                        e2._ending ||
                                        e2._poolUseCount >= this.options.maxUses)
                                ) {
                                    e2._poolUseCount >= this.options.maxUses && this.log('remove expended client'),
                                        this._remove(e2),
                                        this._pulseQueue();
                                    return;
                                }
                                if (this._expired.has(e2)) {
                                    this.log('remove expired client'),
                                        this._expired.delete(e2),
                                        this._remove(e2),
                                        this._pulseQueue();
                                    return;
                                }
                                var s2;
                                this.options.idleTimeoutMillis &&
                                    ((s2 = setTimeout(function () {
                                        _this.log('remove idle client'), _this._remove(e2);
                                    }, this.options.idleTimeoutMillis)),
                                    this.options.allowExitOnIdle && s2.unref()),
                                    this.options.allowExitOnIdle && e2.unref(),
                                    this._idle.push(new pn(e2, t2, s2)),
                                    this._pulseQueue();
                            },
                        },
                        {
                            key: 'query',
                            value: function query(e2, t2, n2) {
                                var _this = this;
                                if (typeof e2 == 'function') {
                                    var s2 = _t(this.Promise, e2);
                                    return (
                                        S(function () {
                                            return s2.callback(
                                                new Error(
                                                    'Passing a function as the first parameter to pool.query is not supported'
                                                )
                                            );
                                        }),
                                        s2.result
                                    );
                                }
                                typeof t2 == 'function' && ((n2 = t2), (t2 = void 0));
                                var i2 = _t(this.Promise, n2);
                                return (
                                    (n2 = i2.callback),
                                    this.connect(function (s2, o2) {
                                        if (s2) return n2(s2);
                                        var u = false,
                                            c = a2(function (h) {
                                                u || ((u = true), o2.release(h), n2(h));
                                            }, 'onError');
                                        o2.once('error', c), _this.log('dispatching query');
                                        try {
                                            o2.query(e2, t2, function (h, l2) {
                                                if ((_this.log('query dispatched'), o2.removeListener('error', c), !u))
                                                    return (u = true), o2.release(h), h ? n2(h) : n2(void 0, l2);
                                            });
                                        } catch (h) {
                                            return o2.release(h), n2(h);
                                        }
                                    }),
                                    i2.result
                                );
                            },
                        },
                        {
                            key: 'end',
                            value: function end(e2) {
                                if ((this.log('ending'), this.ending)) {
                                    var n2 = new Error('Called end on pool more than once');
                                    return e2 ? e2(n2) : this.Promise.reject(n2);
                                }
                                this.ending = true;
                                var t2 = _t(this.Promise, e2);
                                return (this._endCallback = t2.callback), this._pulseQueue(), t2.result;
                            },
                        },
                        {
                            key: 'waitingCount',
                            get: function get() {
                                return this._pendingQueue.length;
                            },
                        },
                        {
                            key: 'idleCount',
                            get: function get() {
                                return this._idle.length;
                            },
                        },
                        {
                            key: 'expiredCount',
                            get: function get() {
                                var _this = this;
                                return this._clients.reduce(function (e2, t2) {
                                    return e2 + (_this._expired.has(t2) ? 1 : 0);
                                }, 0);
                            },
                        },
                        {
                            key: 'totalCount',
                            get: function get() {
                                return this._clients.length;
                            },
                        },
                    ]);
                    return _c2;
                })(vc)),
                __name(_c2, 'gn'),
                _c2);
            a2(gn, 'Pool');
            var dn = gn;
            Os.exports = dn;
        });
        var Us = {};
        ee(Us, {
            default: function () {
                return Cc;
            },
        });
        var Cc;
        var qs = K(function () {
            p2();
            Cc = {};
        });
        var Ns = I(function (pf, Ic) {
            Ic.exports = {
                name: 'pg',
                version: '8.8.0',
                description: 'PostgreSQL client - pure javascript & libpq with the same API',
                keywords: ['database', 'libpq', 'pg', 'postgre', 'postgres', 'postgresql', 'rdbms'],
                homepage: 'https://github.com/brianc/node-postgres',
                repository: {
                    type: 'git',
                    url: 'git://github.com/brianc/node-postgres.git',
                    directory: 'packages/pg',
                },
                author: 'Brian Carlson <brian.m.carlson@gmail.com>',
                main: './lib',
                dependencies: {
                    'buffer-writer': '2.0.0',
                    'packet-reader': '1.0.0',
                    'pg-connection-string': '^2.5.0',
                    'pg-pool': '^3.5.2',
                    'pg-protocol': '^1.5.0',
                    'pg-types': '^2.1.0',
                    pgpass: '1.x',
                },
                devDependencies: {
                    async: '2.6.4',
                    bluebird: '3.5.2',
                    co: '4.6.0',
                    'pg-copy-streams': '0.3.0',
                },
                peerDependencies: {
                    'pg-native': '>=3.0.1',
                },
                peerDependenciesMeta: {
                    'pg-native': {
                        optional: true,
                    },
                },
                scripts: {
                    test: 'make test-all',
                },
                files: ['lib', 'SPONSORS.md'],
                license: 'MIT',
                engines: {
                    node: '>= 8.0.0',
                },
                gitHead: 'c99fb2c127ddf8d712500db2c7b9a5491a178655',
            };
        });
        var js = I(function (df, Ws) {
            'use strict';
            p2();
            var Qs = we().EventEmitter,
                Tc = (Ge(), O(He)),
                wn = tt(),
                Qe = (Ws.exports = function Qe(r2, e2, t2) {
                    Qs.call(this),
                        (r2 = wn.normalizeQueryConfig(r2, e2, t2)),
                        (this.text = r2.text),
                        (this.values = r2.values),
                        (this.name = r2.name),
                        (this.callback = r2.callback),
                        (this.state = 'new'),
                        (this._arrayMode = r2.rowMode === 'array'),
                        (this._emitRowEvents = false),
                        this.on(
                            'newListener',
                            function (n2) {
                                n2 === 'row' && (this._emitRowEvents = true);
                            }.bind(this)
                        );
                });
            Tc.inherits(Qe, Qs);
            var Pc = {
                sqlState: 'code',
                statementPosition: 'position',
                messagePrimary: 'message',
                context: 'where',
                schemaName: 'schema',
                tableName: 'table',
                columnName: 'column',
                dataTypeName: 'dataType',
                constraintName: 'constraint',
                sourceFile: 'file',
                sourceLine: 'line',
                sourceFunction: 'routine',
            };
            Qe.prototype.handleError = function (r2) {
                var e2 = this.native.pq.resultErrorFields();
                if (e2)
                    for (var t2 in e2) {
                        var n2 = Pc[t2] || t2;
                        r2[n2] = e2[t2];
                    }
                this.callback ? this.callback(r2) : this.emit('error', r2), (this.state = 'error');
            };
            Qe.prototype.then = function (r2, e2) {
                return this._getPromise().then(r2, e2);
            };
            Qe.prototype.catch = function (r2) {
                return this._getPromise().catch(r2);
            };
            Qe.prototype._getPromise = function () {
                return this._promise
                    ? this._promise
                    : ((this._promise = new Promise(
                          function (r2, e2) {
                              this._once('end', r2), this._once('error', e2);
                          }.bind(this)
                      )),
                      this._promise);
            };
            Qe.prototype.submit = function (r2) {
                this.state = 'running';
                var e2 = this;
                (this.native = r2.native), (r2.native.arrayMode = this._arrayMode);
                var t2 = a2(function (s2, o2, u) {
                    if (
                        ((r2.native.arrayMode = false),
                        S(function () {
                            e2.emit('_done');
                        }),
                        s2)
                    )
                        return e2.handleError(s2);
                    e2._emitRowEvents &&
                        (u.length > 1
                            ? o2.forEach(function (c, h) {
                                  c.forEach(function (l2) {
                                      e2.emit('row', l2, u[h]);
                                  });
                              })
                            : o2.forEach(function (c) {
                                  e2.emit('row', c, u);
                              })),
                        (e2.state = 'end'),
                        e2.emit('end', u),
                        e2.callback && e2.callback(null, u);
                }, 'after');
                if ((y.domain && (t2 = y.domain.bind(t2)), this.name)) {
                    this.name.length > 63 &&
                        (console.error('Warning! Postgres only supports 63 characters for query names.'),
                        console.error('You supplied %s (%s)', this.name, this.name.length),
                        console.error('This can cause conflicts and silent errors executing queries'));
                    var n2 = (this.values || []).map(wn.prepareValue);
                    if (r2.namedQueries[this.name]) {
                        if (this.text && r2.namedQueries[this.name] !== this.text) {
                            var s2 = new Error(
                                "Prepared statements must be unique - '".concat(
                                    this.name,
                                    "' was used for a different statement"
                                )
                            );
                            return t2(s2);
                        }
                        return r2.native.execute(this.name, n2, t2);
                    }
                    return r2.native.prepare(this.name, this.text, n2.length, function (s2) {
                        return s2 ? t2(s2) : ((r2.namedQueries[e2.name] = e2.text), e2.native.execute(e2.name, n2, t2));
                    });
                } else if (this.values) {
                    if (!Array.isArray(this.values)) {
                        var s21 = new Error('Query values must be an array');
                        return t2(s21);
                    }
                    var i2 = this.values.map(wn.prepareValue);
                    r2.native.query(this.text, i2, t2);
                } else r2.native.query(this.text, t2);
            };
        });
        var Ks = I(function (wf, $s) {
            'use strict';
            p2();
            var Bc = (qs(), O(Us)),
                Lc = lr(),
                gf = Ns(),
                Hs = we().EventEmitter,
                Rc = (Ge(), O(He)),
                Fc = gt(),
                Gs = js(),
                Z = ($s.exports = function Z(r2) {
                    Hs.call(this),
                        (r2 = r2 || {}),
                        (this._Promise = r2.Promise || b2.Promise),
                        (this._types = new Lc(r2.types)),
                        (this.native = new Bc({
                            types: this._types,
                        })),
                        (this._queryQueue = []),
                        (this._ending = false),
                        (this._connecting = false),
                        (this._connected = false),
                        (this._queryable = true);
                    var e2 = (this.connectionParameters = new Fc(r2));
                    (this.user = e2.user),
                        Object.defineProperty(this, 'password', {
                            configurable: true,
                            enumerable: false,
                            writable: true,
                            value: e2.password,
                        }),
                        (this.database = e2.database),
                        (this.host = e2.host),
                        (this.port = e2.port),
                        (this.namedQueries = {});
                });
            Z.Query = Gs;
            Rc.inherits(Z, Hs);
            Z.prototype._errorAllQueries = function (r2) {
                var _this = this;
                var e2 = a2(function (t2) {
                    y.nextTick(function () {
                        (t2.native = _this.native), t2.handleError(r2);
                    });
                }, 'enqueueError');
                this._hasActiveQuery() && (e2(this._activeQuery), (this._activeQuery = null)),
                    this._queryQueue.forEach(e2),
                    (this._queryQueue.length = 0);
            };
            Z.prototype._connect = function (r2) {
                var e2 = this;
                if (this._connecting) {
                    y.nextTick(function () {
                        return r2(new Error('Client has already been connected. You cannot reuse a client.'));
                    });
                    return;
                }
                (this._connecting = true),
                    this.connectionParameters.getLibpqConnectionString(function (t2, n2) {
                        if (t2) return r2(t2);
                        e2.native.connect(n2, function (i2) {
                            if (i2) return e2.native.end(), r2(i2);
                            (e2._connected = true),
                                e2.native.on('error', function (s2) {
                                    (e2._queryable = false), e2._errorAllQueries(s2), e2.emit('error', s2);
                                }),
                                e2.native.on('notification', function (s2) {
                                    e2.emit('notification', {
                                        channel: s2.relname,
                                        payload: s2.extra,
                                    });
                                }),
                                e2.emit('connect'),
                                e2._pulseQueryQueue(true),
                                r2();
                        });
                    });
            };
            Z.prototype.connect = function (r2) {
                var _this = this;
                if (r2) {
                    this._connect(r2);
                    return;
                }
                return new this._Promise(function (e2, t2) {
                    _this._connect(function (n2) {
                        n2 ? t2(n2) : e2();
                    });
                });
            };
            Z.prototype.query = function (r2, e2, t2) {
                var _this = this;
                var n2, i2, s2, o2, u;
                if (r2 == null) throw new TypeError('Client was passed a null or undefined query');
                if (typeof r2.submit == 'function')
                    (s2 = r2.query_timeout || this.connectionParameters.query_timeout),
                        (i2 = n2 = r2),
                        typeof e2 == 'function' && (r2.callback = e2);
                else if (((s2 = this.connectionParameters.query_timeout), (n2 = new Gs(r2, e2, t2)), !n2.callback)) {
                    var c, h;
                    (i2 = new this._Promise(function (l2, m2) {
                        (c = l2), (h = m2);
                    })),
                        (n2.callback = function (l2, m2) {
                            return l2 ? h(l2) : c(m2);
                        });
                }
                return (
                    s2 &&
                        ((u = n2.callback),
                        (o2 = setTimeout(function () {
                            var c = new Error('Query read timeout');
                            y.nextTick(function () {
                                n2.handleError(c, _this.connection);
                            }),
                                u(c),
                                (n2.callback = function () {});
                            var h = _this._queryQueue.indexOf(n2);
                            h > -1 && _this._queryQueue.splice(h, 1), _this._pulseQueryQueue();
                        }, s2)),
                        (n2.callback = function (c, h) {
                            clearTimeout(o2), u(c, h);
                        })),
                    this._queryable
                        ? this._ending
                            ? ((n2.native = this.native),
                              y.nextTick(function () {
                                  n2.handleError(new Error('Client was closed and is not queryable'));
                              }),
                              i2)
                            : (this._queryQueue.push(n2), this._pulseQueryQueue(), i2)
                        : ((n2.native = this.native),
                          y.nextTick(function () {
                              n2.handleError(
                                  new Error('Client has encountered a connection error and is not queryable')
                              );
                          }),
                          i2)
                );
            };
            Z.prototype.end = function (r2) {
                var e2 = this;
                (this._ending = true), this._connected || this.once('connect', this.end.bind(this, r2));
                var t2;
                return (
                    r2 ||
                        (t2 = new this._Promise(function (n2, i2) {
                            r2 = a2(function (s2) {
                                return s2 ? i2(s2) : n2();
                            }, 'cb');
                        })),
                    this.native.end(function () {
                        e2._errorAllQueries(new Error('Connection terminated')),
                            y.nextTick(function () {
                                e2.emit('end'), r2 && r2();
                            });
                    }),
                    t2
                );
            };
            Z.prototype._hasActiveQuery = function () {
                return this._activeQuery && this._activeQuery.state !== 'error' && this._activeQuery.state !== 'end';
            };
            Z.prototype._pulseQueryQueue = function (r2) {
                if (this._connected && !this._hasActiveQuery()) {
                    var e2 = this._queryQueue.shift();
                    if (!e2) {
                        r2 || this.emit('drain');
                        return;
                    }
                    (this._activeQuery = e2), e2.submit(this);
                    var t2 = this;
                    e2.once('_done', function () {
                        t2._pulseQueryQueue();
                    });
                }
            };
            Z.prototype.cancel = function (r2) {
                this._activeQuery === r2
                    ? this.native.cancel(function () {})
                    : this._queryQueue.indexOf(r2) !== -1 && this._queryQueue.splice(this._queryQueue.indexOf(r2), 1);
            };
            Z.prototype.ref = function () {};
            Z.prototype.unref = function () {};
            Z.prototype.setTypeParser = function (r2, e2, t2) {
                return this._types.setTypeParser(r2, e2, t2);
            };
            Z.prototype.getTypeParser = function (r2, e2) {
                return this._types.getTypeParser(r2, e2);
            };
        });
        var bn = I(function (xf, Vs) {
            'use strict';
            p2();
            Vs.exports = Ks();
        });
        var At = I(function (vf, nt) {
            'use strict';
            p2();
            var Mc = Fs(),
                Dc = et(),
                Oc = hn(),
                kc = ks(),
                _an = an(),
                Uc = _an.DatabaseError,
                qc = a2(function (r2) {
                    var _a4;
                    var e2;
                    return (
                        (e2 =
                            ((_a4 = /*#__PURE__*/ (function (kc) {
                                _inherits(_a4, kc);
                                var _super = _create_super(_a4);
                                function _a4(n2) {
                                    _class_call_check(this, _a4);
                                    return _super.call(this, n2, r2);
                                }
                                return _a4;
                            })(kc)),
                            __name(_a4, 'e'),
                            _a4)),
                        a2(e2, 'BoundPool'),
                        e2
                    );
                }, 'poolFactory'),
                Sn = a2(function (r2) {
                    (this.defaults = Dc),
                        (this.Client = r2),
                        (this.Query = this.Client.Query),
                        (this.Pool = qc(this.Client)),
                        (this._pools = []),
                        (this.Connection = Oc),
                        (this.types = Xe()),
                        (this.DatabaseError = Uc);
                }, 'PG');
            _type_of(y.env.NODE_PG_FORCE_NATIVE) < 'u'
                ? (nt.exports = new Sn(bn()))
                : ((nt.exports = new Sn(Mc)),
                  Object.defineProperty(nt.exports, 'native', {
                      configurable: true,
                      enumerable: false,
                      get: function get() {
                          var r2 = null;
                          try {
                              r2 = new Sn(bn());
                          } catch (e2) {
                              if (e2.code !== 'MODULE_NOT_FOUND') throw e2;
                          }
                          return (
                              Object.defineProperty(nt.exports, 'native', {
                                  value: r2,
                              }),
                              r2
                          );
                      },
                  }));
        });
        var Wc = {};
        ee(Wc, {
            Client: function () {
                return Ct;
            },
            ClientBase: function () {
                return J.ClientBase;
            },
            Connection: function () {
                return J.Connection;
            },
            DatabaseError: function () {
                return J.DatabaseError;
            },
            NeonDbError: function () {
                return Ee;
            },
            Pool: function () {
                return vn;
            },
            Query: function () {
                return J.Query;
            },
            defaults: function () {
                return J.defaults;
            },
            neon: function () {
                return xn;
            },
            neonConfig: function () {
                return Se;
            },
            types: function () {
                return J.types;
            },
        });
        module2.exports = O(Wc);
        p2();
        var It = We(At());
        wt();
        p2();
        pr();
        wt();
        var Zs = We(tt());
        var _a;
        var En =
            ((_a = /*#__PURE__*/ (function (Error1) {
                _inherits(_a, Error1);
                var _super = _create_super(_a);
                function _a() {
                    _class_call_check(this, _a);
                    var _this;
                    _this = _super.call.apply(_super, [this].concat(Array.prototype.slice.call(arguments)));
                    T(_assert_this_initialized(_this), 'name', 'NeonDbError');
                    T(_assert_this_initialized(_this), 'code', null);
                    T(_assert_this_initialized(_this), 'sourceError');
                    return _this;
                }
                return _a;
            })(_wrap_native_super(Error))),
            __name(_a, 'En'),
            _a);
        a2(En, 'NeonDbError');
        var Ee = En;
        var zs = 'transaction() expects an array of queries, or a function returning an array of queries';
        __name(xn, 'xn');
        a2(xn, 'neon');
        __name(Nc, 'Nc');
        a2(Nc, 'createNeonQueryPromise');
        __name(Ys, 'Ys');
        a2(Ys, 'processQueryResult');
        var Js = We(gt());
        var J = We(At());
        var _a2;
        var _n =
            ((_a2 = /*#__PURE__*/ (function (_It_Client) {
                _inherits(_a2, _It_Client);
                var _super = _create_super(_a2);
                function _a2(t2) {
                    _class_call_check(this, _a2);
                    var _this;
                    _this = _super.call(this, t2);
                    _this.config = t2;
                    return _this;
                }
                _create_class(_a2, [
                    {
                        key: 'neonConfig',
                        get: function get() {
                            return this.connection.stream;
                        },
                    },
                    {
                        key: 'connect',
                        value: function connect(t2) {
                            var _this = this;
                            var _this_config, _this_config1;
                            var _this1 = this,
                                n2 = _this1.neonConfig;
                            n2.forceDisablePgSSL && (this.ssl = this.connection.ssl = false),
                                this.ssl &&
                                    n2.useSecureWebSocket &&
                                    console.warn(
                                        'SSL is enabled for both Postgres (e.g. ?sslmode=require in the connection string + forceDisablePgSSL = false) and the WebSocket tunnel (useSecureWebSocket = true). Double encryption will increase latency and CPU usage. It may be appropriate to disable SSL in the Postgres connection parameters or set forceDisablePgSSL = true.'
                                    );
                            var _y_env_USER;
                            var i2 =
                                    ((_this_config = this.config) === null || _this_config === void 0
                                        ? void 0
                                        : _this_config.host) !== void 0 ||
                                    ((_this_config1 = this.config) === null || _this_config1 === void 0
                                        ? void 0
                                        : _this_config1.connectionString) !== void 0 ||
                                    y.env.PGHOST !== void 0,
                                s2 =
                                    (_y_env_USER = y.env.USER) !== null && _y_env_USER !== void 0
                                        ? _y_env_USER
                                        : y.env.USERNAME;
                            if (
                                !i2 &&
                                this.host === 'localhost' &&
                                this.user === s2 &&
                                this.database === s2 &&
                                this.password === null
                            )
                                throw new Error(
                                    'No database host or connection string was set, and key parameters have default values (host: localhost, user: '
                                        .concat(s2, ', db: ')
                                        .concat(
                                            s2,
                                            ", password: null). Is an environment variable missing? Alternatively, if you intended to connect with these parameters, please set the host to 'localhost' explicitly."
                                        )
                                );
                            var o2 = _get(_get_prototype_of(_a2.prototype), 'connect', this).call(this, t2),
                                u = n2.pipelineTLS && this.ssl,
                                c = n2.pipelineConnect === 'password';
                            if (!u && !n2.pipelineConnect) return o2;
                            var h = this.connection;
                            if (
                                (u &&
                                    h.on('connect', function () {
                                        return h.stream.emit('data', 'S');
                                    }),
                                c)
                            ) {
                                h.removeAllListeners('authenticationCleartextPassword'),
                                    h.removeAllListeners('readyForQuery'),
                                    h.once('readyForQuery', function () {
                                        return h.on('readyForQuery', _this._handleReadyForQuery.bind(_this));
                                    });
                                var l2 = this.ssl ? 'sslconnect' : 'connect';
                                h.on(l2, function () {
                                    _this._handleAuthCleartextPassword(), _this._handleReadyForQuery();
                                });
                            }
                            return o2;
                        },
                    },
                    {
                        key: '_handleAuthSASLContinue',
                        value: function _handleAuthSASLContinue(t2) {
                            var _this = this;
                            return _async_to_generator(function () {
                                var n2,
                                    i2,
                                    s2,
                                    o2,
                                    u,
                                    c,
                                    h,
                                    l2,
                                    m2,
                                    E,
                                    _,
                                    P,
                                    N,
                                    X,
                                    _1,
                                    de,
                                    _2,
                                    A,
                                    g,
                                    D,
                                    H,
                                    Q,
                                    W,
                                    ce,
                                    ye,
                                    L,
                                    _3,
                                    G,
                                    he,
                                    me,
                                    _4,
                                    ve,
                                    le,
                                    se,
                                    oe,
                                    _5;
                                return _ts_generator(this, function (_state) {
                                    switch (_state.label) {
                                        case 0:
                                            (n2 = _this.saslSession), (i2 = _this.password), (s2 = t2.data);
                                            if (
                                                n2.message !== 'SASLInitialResponse' ||
                                                typeof i2 != 'string' ||
                                                typeof s2 != 'string'
                                            )
                                                throw new Error('SASL: protocol error');
                                            (o2 = Object.fromEntries(
                                                s2.split(',').map(function ($) {
                                                    if (!/^.=/.test($))
                                                        throw new Error('SASL: Invalid attribute pair entry');
                                                    var ie = $[0],
                                                        Ce = $.substring(2);
                                                    return [ie, Ce];
                                                })
                                            )),
                                                (u = o2.r),
                                                (c = o2.s),
                                                (h = o2.i);
                                            if (!u || !/^[!-+--~]+$/.test(u))
                                                throw new Error(
                                                    'SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing/unprintable'
                                                );
                                            if (
                                                !c ||
                                                !/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(
                                                    c
                                                )
                                            )
                                                throw new Error(
                                                    'SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base64'
                                                );
                                            if (!h || !/^[1-9][0-9]*$/.test(h))
                                                throw new Error(
                                                    'SASL: SCRAM-SERVER-FIRST-MESSAGE: missing/invalid iteration count'
                                                );
                                            if (!u.startsWith(n2.clientNonce))
                                                throw new Error(
                                                    'SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce'
                                                );
                                            if (u.length === n2.clientNonce.length)
                                                throw new Error(
                                                    'SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short'
                                                );
                                            (l2 = parseInt(h, 10)),
                                                (m2 = d.from(c, 'base64')),
                                                (E = new TextEncoder()),
                                                (_ = E.encode(i2));
                                            return [
                                                4,
                                                w.subtle.importKey(
                                                    'raw',
                                                    _,
                                                    {
                                                        name: 'HMAC',
                                                        hash: {
                                                            name: 'SHA-256',
                                                        },
                                                    },
                                                    false,
                                                    ['sign']
                                                ),
                                            ];
                                        case 1:
                                            P = _state.sent();
                                            _1 = Uint8Array.bind;
                                            return [4, w.subtle.sign('HMAC', P, d.concat([m2, d.from([0, 0, 0, 1])]))];
                                        case 2:
                                            (N = new (_1.apply(Uint8Array, [void 0, _state.sent()]))()), (X = N);
                                            de = 0;
                                            _state.label = 3;
                                        case 3:
                                            if (!(de < l2 - 1)) return [3, 6];
                                            _2 = Uint8Array.bind;
                                            return [4, w.subtle.sign('HMAC', P, N)];
                                        case 4:
                                            (N = new (_2.apply(Uint8Array, [void 0, _state.sent()]))()),
                                                (X = d.from(
                                                    X.map(function ($, ie) {
                                                        return X[ie] ^ N[ie];
                                                    })
                                                ));
                                            _state.label = 5;
                                        case 5:
                                            de++;
                                            return [3, 3];
                                        case 6:
                                            A = X;
                                            return [
                                                4,
                                                w.subtle.importKey(
                                                    'raw',
                                                    A,
                                                    {
                                                        name: 'HMAC',
                                                        hash: {
                                                            name: 'SHA-256',
                                                        },
                                                    },
                                                    false,
                                                    ['sign']
                                                ),
                                            ];
                                        case 7:
                                            g = _state.sent();
                                            _3 = Uint8Array.bind;
                                            return [4, w.subtle.sign('HMAC', g, E.encode('Client Key'))];
                                        case 8:
                                            D = new (_3.apply(Uint8Array, [void 0, _state.sent()]))();
                                            return [4, w.subtle.digest('SHA-256', D)];
                                        case 9:
                                            (H = _state.sent()),
                                                (Q = 'n=*,r=' + n2.clientNonce),
                                                (W = 'r=' + u + ',s=' + c + ',i=' + l2),
                                                (ce = 'c=biws,r=' + u),
                                                (ye = Q + ',' + W + ',' + ce);
                                            return [
                                                4,
                                                w.subtle.importKey(
                                                    'raw',
                                                    H,
                                                    {
                                                        name: 'HMAC',
                                                        hash: {
                                                            name: 'SHA-256',
                                                        },
                                                    },
                                                    false,
                                                    ['sign']
                                                ),
                                            ];
                                        case 10:
                                            L = _state.sent();
                                            _4 = Uint8Array.bind;
                                            return [4, w.subtle.sign('HMAC', L, E.encode(ye))];
                                        case 11:
                                            (G = new (_4.apply(Uint8Array, [void 0, _state.sent()]))()),
                                                (he = d.from(
                                                    D.map(function ($, ie) {
                                                        return D[ie] ^ G[ie];
                                                    })
                                                )),
                                                (me = he.toString('base64'));
                                            return [
                                                4,
                                                w.subtle.importKey(
                                                    'raw',
                                                    A,
                                                    {
                                                        name: 'HMAC',
                                                        hash: {
                                                            name: 'SHA-256',
                                                        },
                                                    },
                                                    false,
                                                    ['sign']
                                                ),
                                            ];
                                        case 12:
                                            ve = _state.sent();
                                            return [4, w.subtle.sign('HMAC', ve, E.encode('Server Key'))];
                                        case 13:
                                            le = _state.sent();
                                            return [
                                                4,
                                                w.subtle.importKey(
                                                    'raw',
                                                    le,
                                                    {
                                                        name: 'HMAC',
                                                        hash: {
                                                            name: 'SHA-256',
                                                        },
                                                    },
                                                    false,
                                                    ['sign']
                                                ),
                                            ];
                                        case 14:
                                            se = _state.sent();
                                            _5 = d.from;
                                            return [4, w.subtle.sign('HMAC', se, E.encode(ye))];
                                        case 15:
                                            oe = _5.apply(d, [_state.sent()]);
                                            (n2.message = 'SASLResponse'),
                                                (n2.serverSignature = oe.toString('base64')),
                                                (n2.response = ce + ',p=' + me),
                                                _this.connection.sendSCRAMClientFinalMessage(
                                                    _this.saslSession.response
                                                );
                                            return [2];
                                    }
                                });
                            })();
                        },
                    },
                ]);
                return _a2;
            })(It.Client)),
            __name(_a2, '_n'),
            _a2);
        a2(_n, 'NeonClient');
        var Ct = _n;
        __name(Qc, 'Qc');
        a2(Qc, 'promisify');
        var _a3;
        var An =
            ((_a3 = /*#__PURE__*/ (function (_It_Pool) {
                _inherits(_a3, _It_Pool);
                var _super = _create_super(_a3);
                function _a3() {
                    _class_call_check(this, _a3);
                    var _this;
                    _this = _super.call.apply(_super, [this].concat(Array.prototype.slice.call(arguments)));
                    T(_assert_this_initialized(_this), 'Client', Ct);
                    T(_assert_this_initialized(_this), 'hasFetchUnsupportedListeners', false);
                    return _this;
                }
                _create_class(_a3, [
                    {
                        key: 'on',
                        value: function on(t2, n2) {
                            return (
                                t2 !== 'error' && (this.hasFetchUnsupportedListeners = true),
                                _get(_get_prototype_of(_a3.prototype), 'on', this).call(this, t2, n2)
                            );
                        },
                    },
                    {
                        key: 'query',
                        value: function query(t2, n2, i2) {
                            if (!Se.poolQueryViaFetch || this.hasFetchUnsupportedListeners || typeof t2 == 'function')
                                return _get(_get_prototype_of(_a3.prototype), 'query', this).call(this, t2, n2, i2);
                            typeof n2 == 'function' && ((i2 = n2), (n2 = void 0));
                            var s2 = Qc(this.Promise, i2);
                            i2 = s2.callback;
                            try {
                                var _ref;
                                var _$o2 = new Js.default(this.options),
                                    u = encodeURIComponent,
                                    c = encodeURI,
                                    h = 'postgresql://'
                                        .concat(u(_$o2.user), ':')
                                        .concat(u(_$o2.password), '@')
                                        .concat(u(_$o2.host), '/')
                                        .concat(c(_$o2.database)),
                                    l2 = typeof t2 == 'string' ? t2 : t2.text,
                                    m2 =
                                        (_ref = n2 !== null && n2 !== void 0 ? n2 : t2.values) !== null &&
                                        _ref !== void 0
                                            ? _ref
                                            : [];
                                xn(h, {
                                    fullResults: true,
                                    arrayMode: t2.rowMode === 'array',
                                })(l2, m2)
                                    .then(function (_) {
                                        return i2(void 0, _);
                                    })
                                    .catch(function (_) {
                                        return i2(_);
                                    });
                            } catch (o2) {
                                i2(o2);
                            }
                            return s2.result;
                        },
                    },
                ]);
                return _a3;
            })(It.Pool)),
            __name(_a3, 'An'),
            _a3);
        a2(An, 'NeonPool');
        var vn = An;
    },
});
// index.ts
var api_exports = {};
__export(api_exports, {
    appRouter: function () {
        return appRouter;
    },
});
module.exports = __toCommonJS(api_exports);
// ../../node_modules/@trpc/server/dist/codes-c924c3db.mjs
function invert(obj) {
    var newObj = /* @__PURE__ */ Object.create(null);
    for (var key in obj) {
        var v = obj[key];
        newObj[v] = key;
    }
    return newObj;
}
__name(invert, 'invert');
var TRPC_ERROR_CODES_BY_KEY = {
    /**
     * Invalid JSON was received by the server.
     * An error occurred on the server while parsing the JSON text.
     */ PARSE_ERROR: -32700,
    /**
     * The JSON sent is not a valid Request object.
     */ BAD_REQUEST: -32600,
    // Internal JSON-RPC error
    INTERNAL_SERVER_ERROR: -32603,
    NOT_IMPLEMENTED: -32603,
    // Implementation specific errors
    UNAUTHORIZED: -32001,
    FORBIDDEN: -32003,
    NOT_FOUND: -32004,
    METHOD_NOT_SUPPORTED: -32005,
    TIMEOUT: -32008,
    CONFLICT: -32009,
    PRECONDITION_FAILED: -32012,
    PAYLOAD_TOO_LARGE: -32013,
    UNPROCESSABLE_CONTENT: -32022,
    TOO_MANY_REQUESTS: -32029,
    CLIENT_CLOSED_REQUEST: -32099,
};
var TRPC_ERROR_CODES_BY_NUMBER = invert(TRPC_ERROR_CODES_BY_KEY);
// ../../node_modules/@trpc/server/dist/index-f91d720c.mjs
var TRPC_ERROR_CODES_BY_NUMBER2 = invert(TRPC_ERROR_CODES_BY_KEY);
var JSONRPC2_TO_HTTP_CODE = {
    PARSE_ERROR: 400,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    METHOD_NOT_SUPPORTED: 405,
    TIMEOUT: 408,
    CONFLICT: 409,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TOO_LARGE: 413,
    UNPROCESSABLE_CONTENT: 422,
    TOO_MANY_REQUESTS: 429,
    CLIENT_CLOSED_REQUEST: 499,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
};
function getStatusCodeFromKey(code) {
    var _JSONRPC2_TO_HTTP_CODE_code;
    return (_JSONRPC2_TO_HTTP_CODE_code = JSONRPC2_TO_HTTP_CODE[code]) !== null &&
        _JSONRPC2_TO_HTTP_CODE_code !== void 0
        ? _JSONRPC2_TO_HTTP_CODE_code
        : 500;
}
__name(getStatusCodeFromKey, 'getStatusCodeFromKey');
function getHTTPStatusCode(json2) {
    var arr = Array.isArray(json2) ? json2 : [json2];
    var httpStatuses = new Set(
        arr.map(function (res) {
            if ('error' in res) {
                var data = res.error.data;
                if (typeof data.httpStatus === 'number') {
                    return data.httpStatus;
                }
                var code = TRPC_ERROR_CODES_BY_NUMBER2[res.error.code];
                return getStatusCodeFromKey(code);
            }
            return 200;
        })
    );
    if (httpStatuses.size !== 1) {
        return 207;
    }
    var httpStatus = httpStatuses.values().next().value;
    return httpStatus;
}
__name(getHTTPStatusCode, 'getHTTPStatusCode');
function getHTTPStatusCodeFromError(error) {
    return getStatusCodeFromKey(error.code);
}
__name(getHTTPStatusCodeFromError, 'getHTTPStatusCodeFromError');
var noop = /* @__PURE__ */ __name(function () {}, 'noop');
function createInnerProxy(callback, path) {
    var proxy = new Proxy(noop, {
        get: function get(_obj, key) {
            if (typeof key !== 'string' || key === 'then') {
                return void 0;
            }
            return createInnerProxy(callback, _to_consumable_array(path).concat([key]));
        },
        apply: function apply(_1, _2, args) {
            var isApply = path[path.length - 1] === 'apply';
            return callback({
                args: isApply ? (args.length >= 2 ? args[1] : []) : args,
                path: isApply ? path.slice(0, -1) : path,
            });
        },
    });
    return proxy;
}
__name(createInnerProxy, 'createInnerProxy');
var createRecursiveProxy = /* @__PURE__ */ __name(function (callback) {
    return createInnerProxy(callback, []);
}, 'createRecursiveProxy');
var createFlatProxy = /* @__PURE__ */ __name(function (callback) {
    return new Proxy(noop, {
        get: function get(_obj, name) {
            if (typeof name !== 'string' || name === 'then') {
                return void 0;
            }
            return callback(name);
        },
    });
}, 'createFlatProxy');
// ../../node_modules/@trpc/server/dist/TRPCError-6a1653a4.mjs
function isObject(value) {
    return !!value && !Array.isArray(value) && typeof value === 'object';
}
__name(isObject, 'isObject');
function getTRPCErrorFromUnknown(cause) {
    if (_instanceof(cause, TRPCError)) {
        return cause;
    }
    var trpcError = new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        cause: cause,
    });
    if (_instanceof(cause, Error) && cause.stack) {
        trpcError.stack = cause.stack;
    }
    return trpcError;
}
__name(getTRPCErrorFromUnknown, 'getTRPCErrorFromUnknown');
var _UnknownCauseError = /*#__PURE__*/ (function (Error1) {
    _inherits(_UnknownCauseError, Error1);
    var _super = _create_super(_UnknownCauseError);
    function _UnknownCauseError() {
        _class_call_check(this, _UnknownCauseError);
        return _super.apply(this, arguments);
    }
    return _UnknownCauseError;
})(_wrap_native_super(Error));
__name(_UnknownCauseError, 'UnknownCauseError');
var UnknownCauseError = _UnknownCauseError;
function getCauseFromUnknown(cause) {
    if (_instanceof(cause, Error)) {
        return cause;
    }
    var type = typeof cause === 'undefined' ? 'undefined' : _type_of(cause);
    if (type === 'undefined' || type === 'function' || cause === null) {
        return void 0;
    }
    if (type !== 'object') {
        return new Error(String(cause));
    }
    if (isObject(cause)) {
        var err = new UnknownCauseError();
        for (var key in cause) {
            err[key] = cause[key];
        }
        return err;
    }
    return void 0;
}
__name(getCauseFromUnknown, 'getCauseFromUnknown');
var _TRPCError = /*#__PURE__*/ (function (Error1) {
    _inherits(_TRPCError, Error1);
    var _super = _create_super(_TRPCError);
    function _TRPCError(opts) {
        _class_call_check(this, _TRPCError);
        var _this;
        var _cause;
        var cause = getCauseFromUnknown(opts.cause);
        var _opts_message, _ref;
        var message =
            (_ref =
                (_opts_message = opts.message) !== null && _opts_message !== void 0
                    ? _opts_message
                    : (_cause = cause) === null || _cause === void 0
                    ? void 0
                    : _cause.message) !== null && _ref !== void 0
                ? _ref
                : opts.code;
        _this = _super.call(this, message, {
            cause: cause,
        });
        _this.code = opts.code;
        _this.name = _this.constructor.name;
        return _this;
    }
    return _TRPCError;
})(_wrap_native_super(Error));
__name(_TRPCError, 'TRPCError');
var TRPCError = _TRPCError;
// ../../node_modules/@trpc/server/dist/config-cd32070b.mjs
function getDataTransformer(transformer) {
    if ('input' in transformer) {
        return transformer;
    }
    return {
        input: transformer,
        output: transformer,
    };
}
__name(getDataTransformer, 'getDataTransformer');
var defaultTransformer = {
    _default: true,
    input: {
        serialize: function (obj) {
            return obj;
        },
        deserialize: function (obj) {
            return obj;
        },
    },
    output: {
        serialize: function (obj) {
            return obj;
        },
        deserialize: function (obj) {
            return obj;
        },
    },
};
var defaultFormatter = /* @__PURE__ */ __name(function (param) {
    var shape = param.shape;
    return shape;
}, 'defaultFormatter');
function omitPrototype(obj) {
    return Object.assign(/* @__PURE__ */ Object.create(null), obj);
}
__name(omitPrototype, 'omitPrototype');
var procedureTypes = ['query', 'mutation', 'subscription'];
function isRouter(procedureOrRouter) {
    return 'router' in procedureOrRouter._def;
}
__name(isRouter, 'isRouter');
var emptyRouter = {
    _ctx: null,
    _errorShape: null,
    _meta: null,
    queries: {},
    mutations: {},
    subscriptions: {},
    errorFormatter: defaultFormatter,
    transformer: defaultTransformer,
};
var reservedWords = [
    /**
     * Then is a reserved word because otherwise we can't return a promise that returns a Proxy
     * since JS will think that `.then` is something that exists
     */ 'then',
];
function createRouterFactory(config2) {
    return /* @__PURE__ */ __name(function createRouterInner(procedures) {
        var reservedWordsUsed = new Set(
            Object.keys(procedures).filter(function (v) {
                return reservedWords.includes(v);
            })
        );
        if (reservedWordsUsed.size > 0) {
            throw new Error('Reserved words used in `router({})` call: ' + Array.from(reservedWordsUsed).join(', '));
        }
        var routerProcedures = omitPrototype({});
        function recursiveGetPaths(procedures2) {
            var path = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
            var _iteratorNormalCompletion = true,
                _didIteratorError = false,
                _iteratorError = undefined;
            try {
                for (
                    var _iterator = Object.entries(procedures2 !== null && procedures2 !== void 0 ? procedures2 : {})[
                            Symbol.iterator
                        ](),
                        _step;
                    !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                    _iteratorNormalCompletion = true
                ) {
                    var _step_value = _sliced_to_array(_step.value, 2),
                        key = _step_value[0],
                        procedureOrRouter = _step_value[1];
                    var newPath = ''.concat(path).concat(key);
                    if (isRouter(procedureOrRouter)) {
                        recursiveGetPaths(procedureOrRouter._def.procedures, ''.concat(newPath, '.'));
                        continue;
                    }
                    if (routerProcedures[newPath]) {
                        throw new Error('Duplicate key: '.concat(newPath));
                    }
                    routerProcedures[newPath] = procedureOrRouter;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
        __name(recursiveGetPaths, 'recursiveGetPaths');
        recursiveGetPaths(procedures);
        var _def = _object_spread_props(
            _object_spread(
                {
                    _config: config2,
                    router: true,
                    procedures: routerProcedures,
                },
                emptyRouter
            ),
            {
                record: procedures,
                queries: Object.entries(routerProcedures)
                    .filter(function (pair) {
                        return pair[1]._def.query;
                    })
                    .reduce(function (acc, param) {
                        var _param = _sliced_to_array(param, 2),
                            key = _param[0],
                            val = _param[1];
                        return _object_spread_props(_object_spread({}, acc), _define_property({}, key, val));
                    }, {}),
                mutations: Object.entries(routerProcedures)
                    .filter(function (pair) {
                        return pair[1]._def.mutation;
                    })
                    .reduce(function (acc, param) {
                        var _param = _sliced_to_array(param, 2),
                            key = _param[0],
                            val = _param[1];
                        return _object_spread_props(_object_spread({}, acc), _define_property({}, key, val));
                    }, {}),
                subscriptions: Object.entries(routerProcedures)
                    .filter(function (pair) {
                        return pair[1]._def.subscription;
                    })
                    .reduce(function (acc, param) {
                        var _param = _sliced_to_array(param, 2),
                            key = _param[0],
                            val = _param[1];
                        return _object_spread_props(_object_spread({}, acc), _define_property({}, key, val));
                    }, {}),
            }
        );
        var router2 = _object_spread_props(_object_spread({}, procedures), {
            _def: _def,
            createCaller: function createCaller(ctx) {
                var proxy = createRecursiveProxy(function (param) {
                    var path = param.path,
                        args = param.args;
                    if (path.length === 1 && procedureTypes.includes(path[0])) {
                        return callProcedure({
                            procedures: _def.procedures,
                            path: args[0],
                            rawInput: args[1],
                            ctx: ctx,
                            type: path[0],
                        });
                    }
                    var fullPath = path.join('.');
                    var procedure = _def.procedures[fullPath];
                    var type = 'query';
                    if (procedure._def.mutation) {
                        type = 'mutation';
                    } else if (procedure._def.subscription) {
                        type = 'subscription';
                    }
                    return procedure({
                        path: fullPath,
                        rawInput: args[0],
                        ctx: ctx,
                        type: type,
                    });
                });
                return proxy;
            },
            getErrorShape: function getErrorShape(opts) {
                var path = opts.path,
                    error = opts.error;
                var code = opts.error.code;
                var shape = {
                    message: error.message,
                    code: TRPC_ERROR_CODES_BY_KEY[code],
                    data: {
                        code: code,
                        httpStatus: getHTTPStatusCodeFromError(error),
                    },
                };
                if (config2.isDev && typeof opts.error.stack === 'string') {
                    shape.data.stack = opts.error.stack;
                }
                if (typeof path === 'string') {
                    shape.data.path = path;
                }
                return this._def._config.errorFormatter(
                    _object_spread_props(_object_spread({}, opts), {
                        shape: shape,
                    })
                );
            },
        });
        return router2;
    }, 'createRouterInner');
}
__name(createRouterFactory, 'createRouterFactory');
function callProcedure(opts) {
    var _opts_procedures_path;
    var type = opts.type,
        path = opts.path;
    if (
        !(path in opts.procedures) ||
        !((_opts_procedures_path = opts.procedures[path]) === null || _opts_procedures_path === void 0
            ? void 0
            : _opts_procedures_path._def[type])
    ) {
        throw new TRPCError({
            code: 'NOT_FOUND',
            message: 'No "'.concat(type, '"-procedure on path "').concat(path, '"'),
        });
    }
    var procedure = opts.procedures[path];
    return procedure(opts);
}
__name(callProcedure, 'callProcedure');
var isServerDefault =
    typeof window === 'undefined' ||
    'Deno' in window ||
    ((_globalThis_process = globalThis.process) === null || _globalThis_process === void 0
        ? void 0
        : (_globalThis_process_env = _globalThis_process.env) === null || _globalThis_process_env === void 0
        ? void 0
        : _globalThis_process_env.NODE_ENV) === 'test' ||
    !!((_globalThis_process1 = globalThis.process) === null || _globalThis_process1 === void 0
        ? void 0
        : (_globalThis_process_env1 = _globalThis_process1.env) === null || _globalThis_process_env1 === void 0
        ? void 0
        : _globalThis_process_env1.JEST_WORKER_ID) ||
    !!((_globalThis_process2 = globalThis.process) === null || _globalThis_process2 === void 0
        ? void 0
        : (_globalThis_process_env2 = _globalThis_process2.env) === null || _globalThis_process_env2 === void 0
        ? void 0
        : _globalThis_process_env2.VITEST_WORKER_ID);
// ../../node_modules/@trpc/server/dist/transformTRPCResponse-1153b421.mjs
function getErrorShape(opts) {
    var path = opts.path,
        error = opts.error,
        config2 = opts.config;
    var code = opts.error.code;
    var shape = {
        message: error.message,
        code: TRPC_ERROR_CODES_BY_KEY[code],
        data: {
            code: code,
            httpStatus: getHTTPStatusCodeFromError(error),
        },
    };
    if (config2.isDev && typeof opts.error.stack === 'string') {
        shape.data.stack = opts.error.stack;
    }
    if (typeof path === 'string') {
        shape.data.path = path;
    }
    return config2.errorFormatter(
        _object_spread_props(_object_spread({}, opts), {
            shape: shape,
        })
    );
}
__name(getErrorShape, 'getErrorShape');
function transformTRPCResponseItem(config2, item) {
    if ('error' in item) {
        return _object_spread_props(_object_spread({}, item), {
            error: config2.transformer.output.serialize(item.error),
        });
    }
    if ('data' in item.result) {
        return _object_spread_props(_object_spread({}, item), {
            result: _object_spread_props(_object_spread({}, item.result), {
                data: config2.transformer.output.serialize(item.result.data),
            }),
        });
    }
    return item;
}
__name(transformTRPCResponseItem, 'transformTRPCResponseItem');
function transformTRPCResponse(config2, itemOrItems) {
    return Array.isArray(itemOrItems)
        ? itemOrItems.map(function (item) {
              return transformTRPCResponseItem(config2, item);
          })
        : transformTRPCResponseItem(config2, itemOrItems);
}
__name(transformTRPCResponse, 'transformTRPCResponse');
// ../../node_modules/@trpc/server/dist/contentType-53e30af8.mjs
function getRawProcedureInputOrThrow(opts) {
    var req = opts.req;
    try {
        if (req.method === 'GET') {
            if (!req.query.has('input')) {
                return void 0;
            }
            var raw = req.query.get('input');
            return JSON.parse(raw);
        }
        if (!opts.preprocessedBody && typeof req.body === 'string') {
            return req.body.length === 0 ? void 0 : JSON.parse(req.body);
        }
        return req.body;
    } catch (cause) {
        throw new TRPCError({
            code: 'PARSE_ERROR',
            cause: cause,
        });
    }
}
__name(getRawProcedureInputOrThrow, 'getRawProcedureInputOrThrow');
var deserializeInputValue = /* @__PURE__ */ __name(function (rawValue, transformer) {
    return typeof rawValue !== 'undefined' ? transformer.input.deserialize(rawValue) : rawValue;
}, 'deserializeInputValue');
var getJsonContentTypeInputs = /* @__PURE__ */ __name(function (opts) {
    var rawInput = getRawProcedureInputOrThrow(opts);
    var transformer = opts.router._def._config.transformer;
    if (!opts.isBatchCall) {
        return {
            0: deserializeInputValue(rawInput, transformer),
        };
    }
    if (rawInput == null || typeof rawInput !== 'object' || Array.isArray(rawInput)) {
        throw new TRPCError({
            code: 'BAD_REQUEST',
            message: '"input" needs to be an object when doing a batch call',
        });
    }
    var input = {};
    for (var key in rawInput) {
        var k = key;
        var rawValue = rawInput[k];
        var value = deserializeInputValue(rawValue, transformer);
        input[k] = value;
    }
    return input;
}, 'getJsonContentTypeInputs');
// ../../node_modules/@trpc/server/dist/resolveHTTPResponse-67085326.mjs
var HTTP_METHOD_PROCEDURE_TYPE_MAP = {
    GET: 'query',
    POST: 'mutation',
};
var fallbackContentTypeHandler = {
    getInputs: getJsonContentTypeInputs,
};
function initResponse(initOpts) {
    var _responseMeta;
    var ctx = initOpts.ctx,
        paths = initOpts.paths,
        type = initOpts.type,
        responseMeta = initOpts.responseMeta,
        untransformedJSON = initOpts.untransformedJSON,
        _initOpts_errors = initOpts.errors,
        errors = _initOpts_errors === void 0 ? [] : _initOpts_errors;
    var status = untransformedJSON ? getHTTPStatusCode(untransformedJSON) : 200;
    var headers = {
        'Content-Type': 'application/json',
    };
    var eagerGeneration = !untransformedJSON;
    var data = eagerGeneration ? [] : Array.isArray(untransformedJSON) ? untransformedJSON : [untransformedJSON];
    var _responseMeta1;
    var meta =
        (_responseMeta1 =
            (_responseMeta = responseMeta) === null || _responseMeta === void 0
                ? void 0
                : _responseMeta({
                      ctx: ctx,
                      paths: paths,
                      type: type,
                      data: data,
                      errors: errors,
                      eagerGeneration: eagerGeneration,
                  })) !== null && _responseMeta1 !== void 0
            ? _responseMeta1
            : {};
    var _meta_headers;
    var _iteratorNormalCompletion = true,
        _didIteratorError = false,
        _iteratorError = undefined;
    try {
        for (
            var _iterator = Object.entries(
                    (_meta_headers = meta.headers) !== null && _meta_headers !== void 0 ? _meta_headers : {}
                )[Symbol.iterator](),
                _step;
            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
            _iteratorNormalCompletion = true
        ) {
            var _step_value = _sliced_to_array(_step.value, 2),
                key = _step_value[0],
                value = _step_value[1];
            headers[key] = value;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    if (meta.status) {
        status = meta.status;
    }
    return {
        status: status,
        headers: headers,
    };
}
__name(initResponse, 'initResponse');
function inputToProcedureCall(procedureOpts) {
    return _inputToProcedureCall.apply(this, arguments);
}
function _inputToProcedureCall() {
    _inputToProcedureCall = _async_to_generator(function (procedureOpts) {
        var opts, ctx, type, input, path, data, cause, _opts_onError, _opts, error;
        return _ts_generator(this, function (_state) {
            switch (_state.label) {
                case 0:
                    (opts = procedureOpts.opts),
                        (ctx = procedureOpts.ctx),
                        (type = procedureOpts.type),
                        (input = procedureOpts.input),
                        (path = procedureOpts.path);
                    _state.label = 1;
                case 1:
                    _state.trys.push([1, 3, , 4]);
                    return [
                        4,
                        callProcedure({
                            procedures: opts.router._def.procedures,
                            path: path,
                            rawInput: input,
                            ctx: ctx,
                            type: type,
                        }),
                    ];
                case 2:
                    data = _state.sent();
                    return [
                        2,
                        {
                            result: {
                                data: data,
                            },
                        },
                    ];
                case 3:
                    cause = _state.sent();
                    error = getTRPCErrorFromUnknown(cause);
                    (_opts_onError = (_opts = opts).onError) === null || _opts_onError === void 0
                        ? void 0
                        : _opts_onError.call(_opts, {
                              error: error,
                              path: path,
                              input: input,
                              ctx: ctx,
                              type: type,
                              req: opts.req,
                          });
                    return [
                        2,
                        {
                            error: getErrorShape({
                                config: opts.router._def._config,
                                error: error,
                                type: type,
                                path: path,
                                input: input,
                                ctx: ctx,
                            }),
                        },
                    ];
                case 4:
                    return [2];
            }
        });
    });
    return _inputToProcedureCall.apply(this, arguments);
}
__name(inputToProcedureCall, 'inputToProcedureCall');
function caughtErrorToData(cause, errorOpts) {
    var _onError;
    var _errorOpts_opts = errorOpts.opts,
        router2 = _errorOpts_opts.router,
        req = _errorOpts_opts.req,
        onError = _errorOpts_opts.onError;
    var error = getTRPCErrorFromUnknown(cause);
    (_onError = onError) === null || _onError === void 0
        ? void 0
        : _onError({
              error: error,
              path: errorOpts.path,
              input: errorOpts.input,
              ctx: errorOpts.ctx,
              type: errorOpts.type,
              req: req,
          });
    var untransformedJSON = {
        error: getErrorShape({
            config: router2._def._config,
            error: error,
            type: errorOpts.type,
            path: errorOpts.path,
            input: errorOpts.input,
            ctx: errorOpts.ctx,
        }),
    };
    var transformedJSON = transformTRPCResponse(router2._def._config, untransformedJSON);
    var body = JSON.stringify(transformedJSON);
    return {
        error: error,
        untransformedJSON: untransformedJSON,
        body: body,
    };
}
__name(caughtErrorToData, 'caughtErrorToData');
function resolveHTTPResponse(opts) {
    return _resolveHTTPResponse.apply(this, arguments);
}
function _resolveHTTPResponse() {
    _resolveHTTPResponse = _async_to_generator(function (opts) {
        var _opts_batching,
            router2,
            req,
            unstable_onHead,
            unstable_onChunk,
            _unstable_onHead,
            _unstable_onChunk,
            headResponse,
            _opts_contentTypeHandler,
            contentTypeHandler,
            _opts_batching_enabled,
            batchingEnabled,
            _HTTP_METHOD_PROCEDURE_TYPE_MAP_req_method,
            type,
            ctx,
            paths,
            isBatchCall,
            isStreamCall,
            _opts_preprocessedBody,
            inputs,
            promises,
            _unstable_onHead1,
            _unstable_onChunk1,
            untransformedJSON,
            errors,
            headResponse1,
            result,
            transformedJSON,
            body,
            headResponse2,
            indexedPromises,
            _iteratorNormalCompletion,
            _didIteratorError,
            _iteratorError,
            _iterator,
            _step,
            _,
            _ref,
            index,
            untransformedJSON1,
            transformedJSON1,
            body1,
            path,
            input,
            _caughtErrorToData,
            body2,
            err,
            cause1,
            _unstable_onHead2,
            _unstable_onChunk2,
            _caughtErrorToData1,
            error,
            untransformedJSON2,
            body3,
            headResponse3;
        return _ts_generator(this, function (_state) {
            switch (_state.label) {
                case 0:
                    (router2 = opts.router),
                        (req = opts.req),
                        (unstable_onHead = opts.unstable_onHead),
                        (unstable_onChunk = opts.unstable_onChunk);
                    if (req.method === 'HEAD') {
                        headResponse = {
                            status: 204,
                        };
                        (_unstable_onHead = unstable_onHead) === null || _unstable_onHead === void 0
                            ? void 0
                            : _unstable_onHead(headResponse, false);
                        (_unstable_onChunk = unstable_onChunk) === null || _unstable_onChunk === void 0
                            ? void 0
                            : _unstable_onChunk([-1, '']);
                        return [2, headResponse];
                    }
                    contentTypeHandler =
                        (_opts_contentTypeHandler = opts.contentTypeHandler) !== null &&
                        _opts_contentTypeHandler !== void 0
                            ? _opts_contentTypeHandler
                            : fallbackContentTypeHandler;
                    batchingEnabled =
                        (_opts_batching_enabled =
                            (_opts_batching = opts.batching) === null || _opts_batching === void 0
                                ? void 0
                                : _opts_batching.enabled) !== null && _opts_batching_enabled !== void 0
                            ? _opts_batching_enabled
                            : true;
                    type =
                        (_HTTP_METHOD_PROCEDURE_TYPE_MAP_req_method = HTTP_METHOD_PROCEDURE_TYPE_MAP[req.method]) !==
                            null && _HTTP_METHOD_PROCEDURE_TYPE_MAP_req_method !== void 0
                            ? _HTTP_METHOD_PROCEDURE_TYPE_MAP_req_method
                            : 'unknown';
                    ctx = void 0;
                    isBatchCall = !!req.query.get('batch');
                    isStreamCall =
                        isBatchCall &&
                        unstable_onHead &&
                        unstable_onChunk &&
                        req.headers['trpc-batch-mode'] === 'stream';
                    _state.label = 1;
                case 1:
                    _state.trys.push([1, 14, , 15]);
                    return [4, opts.createContext()];
                case 2:
                    ctx = _state.sent();
                    if (opts.error) {
                        throw opts.error;
                    }
                    if (isBatchCall && !batchingEnabled) {
                        throw new Error('Batching is not enabled on the server');
                    }
                    if (type === 'subscription') {
                        throw new TRPCError({
                            message: 'Subscriptions should use wsLink',
                            code: 'METHOD_NOT_SUPPORTED',
                        });
                    }
                    if (type === 'unknown') {
                        throw new TRPCError({
                            message: 'Unexpected request method '.concat(req.method),
                            code: 'METHOD_NOT_SUPPORTED',
                        });
                    }
                    return [
                        4,
                        contentTypeHandler.getInputs({
                            isBatchCall: isBatchCall,
                            req: req,
                            router: router2,
                            preprocessedBody:
                                (_opts_preprocessedBody = opts.preprocessedBody) !== null &&
                                _opts_preprocessedBody !== void 0
                                    ? _opts_preprocessedBody
                                    : false,
                        }),
                    ];
                case 3:
                    inputs = _state.sent();
                    paths = isBatchCall ? decodeURIComponent(opts.path).split(',') : [opts.path];
                    promises = paths.map(function (path, index) {
                        return inputToProcedureCall({
                            opts: opts,
                            ctx: ctx,
                            type: type,
                            input: inputs[index],
                            path: path,
                        });
                    });
                    if (!!isStreamCall) return [3, 5];
                    return [4, Promise.all(promises)];
                case 4:
                    untransformedJSON = _state.sent();
                    errors = untransformedJSON.flatMap(function (response) {
                        return 'error' in response ? [response.error] : [];
                    });
                    headResponse1 = initResponse({
                        ctx: ctx,
                        paths: paths,
                        type: type,
                        responseMeta: opts.responseMeta,
                        untransformedJSON: untransformedJSON,
                        errors: errors,
                    });
                    (_unstable_onHead1 = unstable_onHead) === null || _unstable_onHead1 === void 0
                        ? void 0
                        : _unstable_onHead1(headResponse1, false);
                    result = isBatchCall ? untransformedJSON : untransformedJSON[0];
                    transformedJSON = transformTRPCResponse(router2._def._config, result);
                    body = JSON.stringify(transformedJSON);
                    (_unstable_onChunk1 = unstable_onChunk) === null || _unstable_onChunk1 === void 0
                        ? void 0
                        : _unstable_onChunk1([-1, body]);
                    return [
                        2,
                        {
                            status: headResponse1.status,
                            headers: headResponse1.headers,
                            body: body,
                        },
                    ];
                case 5:
                    headResponse2 = initResponse({
                        ctx: ctx,
                        paths: paths,
                        type: type,
                        responseMeta: opts.responseMeta,
                    });
                    unstable_onHead(headResponse2, true);
                    indexedPromises = new Map(
                        promises.map(function (promise, index) {
                            return [
                                index,
                                promise.then(function (r2) {
                                    return [index, r2];
                                }),
                            ];
                        })
                    );
                    (_iteratorNormalCompletion = true), (_didIteratorError = false), (_iteratorError = undefined);
                    _state.label = 6;
                case 6:
                    _state.trys.push([6, 11, 12, 13]);
                    _iterator = paths[Symbol.iterator]();
                    _state.label = 7;
                case 7:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [3, 10];
                    _ = _step.value;
                    return [4, Promise.race(indexedPromises.values())];
                case 8:
                    (_ref = _sliced_to_array.apply(void 0, [_state.sent(), 2])),
                        (index = _ref[0]),
                        (untransformedJSON1 = _ref[1]);
                    indexedPromises.delete(index);
                    try {
                        transformedJSON1 = transformTRPCResponse(router2._def._config, untransformedJSON1);
                        body1 = JSON.stringify(transformedJSON1);
                        unstable_onChunk([index, body1]);
                    } catch (cause) {
                        path = paths[index];
                        input = inputs[index];
                        (_caughtErrorToData = caughtErrorToData(cause, {
                            opts: opts,
                            ctx: ctx,
                            type: type,
                            path: path,
                            input: input,
                        })),
                            (body2 = _caughtErrorToData.body);
                        unstable_onChunk([index, body2]);
                    }
                    _state.label = 9;
                case 9:
                    _iteratorNormalCompletion = true;
                    return [3, 7];
                case 10:
                    return [3, 13];
                case 11:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [3, 13];
                case 12:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [7];
                case 13:
                    return [2];
                case 14:
                    cause1 = _state.sent();
                    (_caughtErrorToData1 = caughtErrorToData(cause1, {
                        opts: opts,
                        ctx: ctx,
                        type: type,
                    })),
                        (error = _caughtErrorToData1.error),
                        (untransformedJSON2 = _caughtErrorToData1.untransformedJSON),
                        (body3 = _caughtErrorToData1.body);
                    headResponse3 = initResponse({
                        ctx: ctx,
                        paths: paths,
                        type: type,
                        responseMeta: opts.responseMeta,
                        untransformedJSON: untransformedJSON2,
                        errors: [error],
                    });
                    (_unstable_onHead2 = unstable_onHead) === null || _unstable_onHead2 === void 0
                        ? void 0
                        : _unstable_onHead2(headResponse3, false);
                    (_unstable_onChunk2 = unstable_onChunk) === null || _unstable_onChunk2 === void 0
                        ? void 0
                        : _unstable_onChunk2([-1, body3]);
                    return [
                        2,
                        {
                            status: headResponse3.status,
                            headers: headResponse3.headers,
                            body: body3,
                        },
                    ];
                case 15:
                    return [2];
            }
        });
    });
    return _resolveHTTPResponse.apply(this, arguments);
}
__name(resolveHTTPResponse, 'resolveHTTPResponse');
// ../../node_modules/@trpc/server/dist/batchStreamFormatter-fc1ffb26.mjs
function getBatchStreamFormatter() {
    var format = function format(index, string) {
        var prefix = first ? '{' : ',';
        first = false;
        return ''.concat(prefix, '"').concat(index, '":').concat(string, '\n');
    };
    var first = true;
    __name(format, 'format');
    format.end = function () {
        return '}';
    };
    return format;
}
__name(getBatchStreamFormatter, 'getBatchStreamFormatter');
// ../../node_modules/@trpc/server/dist/contentType-3194ed5f.mjs
function createNodeHTTPContentTypeHandler(contentTypeHandler) {
    return function () {
        return contentTypeHandler;
    };
}
__name(createNodeHTTPContentTypeHandler, 'createNodeHTTPContentTypeHandler');
function getPostBody(opts) {
    return _getPostBody.apply(this, arguments);
}
function _getPostBody() {
    _getPostBody = // ../../node_modules/@trpc/server/dist/adapters/node-http/content-type/json/index.mjs
        _async_to_generator(function (opts) {
            var req, _opts_maxBodySize, maxBodySize;
            return _ts_generator(this, function (_state) {
                (req = opts.req),
                    (_opts_maxBodySize = opts.maxBodySize),
                    (maxBodySize = _opts_maxBodySize === void 0 ? Infinity : _opts_maxBodySize);
                return [
                    2,
                    new Promise(function (resolve) {
                        if ('body' in req) {
                            var _req_headers_contenttype;
                            resolve({
                                ok: true,
                                data: req.body,
                                // If the request headers specifies a content-type, we assume that the body has been preprocessed
                                preprocessed: !!((_req_headers_contenttype = req.headers['content-type']) === null ||
                                _req_headers_contenttype === void 0
                                    ? void 0
                                    : _req_headers_contenttype.startsWith('application/json')),
                            });
                            return;
                        }
                        var body = '';
                        var hasBody = false;
                        req.on('data', function (data) {
                            body += data;
                            hasBody = true;
                            if (body.length > maxBodySize) {
                                resolve({
                                    ok: false,
                                    error: new TRPCError({
                                        code: 'PAYLOAD_TOO_LARGE',
                                    }),
                                });
                                req.socket.destroy();
                            }
                        });
                        req.on('end', function () {
                            resolve({
                                ok: true,
                                data: hasBody ? body : void 0,
                                preprocessed: false,
                            });
                        });
                    }),
                ];
            });
        });
    return _getPostBody.apply(this, arguments);
}
__name(getPostBody, 'getPostBody');
var nodeHTTPJSONContentTypeHandler = createNodeHTTPContentTypeHandler({
    isMatch: function isMatch(opts) {
        var _opts_req_headers_contenttype;
        return !!((_opts_req_headers_contenttype = opts.req.headers['content-type']) === null ||
        _opts_req_headers_contenttype === void 0
            ? void 0
            : _opts_req_headers_contenttype.startsWith('application/json'));
    },
    getBody: getPostBody,
    getInputs: getJsonContentTypeInputs,
});
// ../../node_modules/@trpc/server/dist/nodeHTTPRequestHandler-a3cc8c22.mjs
var defaultJSONContentTypeHandler = nodeHTTPJSONContentTypeHandler();
function nodeHTTPRequestHandler(opts) {
    return _nodeHTTPRequestHandler.apply(this, arguments);
}
function _nodeHTTPRequestHandler() {
    _nodeHTTPRequestHandler = _async_to_generator(function (opts) {
        var _opts_middleware, handleViaMiddleware;
        return _ts_generator(this, function (_state) {
            handleViaMiddleware =
                (_opts_middleware = opts.middleware) !== null && _opts_middleware !== void 0
                    ? _opts_middleware
                    : function (_req, _res, next) {
                          return next();
                      };
            return [
                2,
                handleViaMiddleware(
                    opts.req,
                    opts.res,
                    (function () {
                        var _ref = _async_to_generator(function (err1) {
                            var createContext2,
                                query,
                                jsonContentTypeHandler,
                                _opts_experimental_contentTypeHandlers,
                                contentTypeHandlers,
                                _contentTypeHandlers_find,
                                contentTypeHandler,
                                bodyResult,
                                req,
                                isStream,
                                formatter,
                                unstable_onHead,
                                unstable_onChunk;
                            return _ts_generator(this, function (_state) {
                                switch (_state.label) {
                                    case 0:
                                        if (err1) throw err1;
                                        createContext2 = /* @__PURE__ */ __name(
                                            /*#__PURE__*/ _async_to_generator(function () {
                                                var _opts_createContext, _opts;
                                                return _ts_generator(this, function (_state) {
                                                    switch (_state.label) {
                                                        case 0:
                                                            return [
                                                                4,
                                                                (_opts_createContext = (_opts = opts).createContext) ===
                                                                    null || _opts_createContext === void 0
                                                                    ? void 0
                                                                    : _opts_createContext.call(_opts, opts),
                                                            ];
                                                        case 1:
                                                            return [2, _state.sent()];
                                                    }
                                                });
                                            }),
                                            'createContext'
                                        );
                                        query = opts.req.query
                                            ? new URLSearchParams(opts.req.query)
                                            : new URLSearchParams(opts.req.url.split('?')[1]);
                                        jsonContentTypeHandler = defaultJSONContentTypeHandler;
                                        contentTypeHandlers =
                                            (_opts_experimental_contentTypeHandlers =
                                                opts.experimental_contentTypeHandlers) !== null &&
                                            _opts_experimental_contentTypeHandlers !== void 0
                                                ? _opts_experimental_contentTypeHandlers
                                                : [jsonContentTypeHandler];
                                        contentTypeHandler =
                                            (_contentTypeHandlers_find = contentTypeHandlers.find(function (handler) {
                                                return handler.isMatch(
                                                    _object_spread_props(_object_spread({}, opts), {
                                                        query: query,
                                                    })
                                                );
                                            })) !== null && _contentTypeHandlers_find !== void 0
                                                ? _contentTypeHandlers_find // fallback to json
                                                : jsonContentTypeHandler;
                                        return [
                                            4,
                                            contentTypeHandler.getBody(
                                                _object_spread_props(_object_spread({}, opts), {
                                                    query: query,
                                                })
                                            ),
                                        ];
                                    case 1:
                                        bodyResult = _state.sent();
                                        req = {
                                            method: opts.req.method,
                                            headers: opts.req.headers,
                                            query: query,
                                            body: bodyResult.ok ? bodyResult.data : void 0,
                                        };
                                        isStream = false;
                                        unstable_onHead = /* @__PURE__ */ __name(function (head, isStreaming) {
                                            if (
                                                'status' in head &&
                                                (!opts.res.statusCode || opts.res.statusCode === 200)
                                            ) {
                                                opts.res.statusCode = head.status;
                                            }
                                            var _head_headers;
                                            var _iteratorNormalCompletion = true,
                                                _didIteratorError = false,
                                                _iteratorError = undefined;
                                            try {
                                                for (
                                                    var _iterator = Object.entries(
                                                            (_head_headers = head.headers) !== null &&
                                                                _head_headers !== void 0
                                                                ? _head_headers
                                                                : {}
                                                        )[Symbol.iterator](),
                                                        _step;
                                                    !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                                                    _iteratorNormalCompletion = true
                                                ) {
                                                    var _step_value = _sliced_to_array(_step.value, 2),
                                                        key = _step_value[0],
                                                        value = _step_value[1];
                                                    if (typeof value === 'undefined') {
                                                        continue;
                                                    }
                                                    opts.res.setHeader(key, value);
                                                }
                                            } catch (err) {
                                                _didIteratorError = true;
                                                _iteratorError = err;
                                            } finally {
                                                try {
                                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                                        _iterator.return();
                                                    }
                                                } finally {
                                                    if (_didIteratorError) {
                                                        throw _iteratorError;
                                                    }
                                                }
                                            }
                                            if (isStreaming) {
                                                opts.res.setHeader('Transfer-Encoding', 'chunked');
                                                var vary = opts.res.getHeader('Vary');
                                                opts.res.setHeader(
                                                    'Vary',
                                                    vary ? 'trpc-batch-mode, ' + vary : 'trpc-batch-mode'
                                                );
                                                isStream = true;
                                                formatter = getBatchStreamFormatter();
                                                opts.res.flushHeaders();
                                            }
                                        }, 'unstable_onHead');
                                        unstable_onChunk = /* @__PURE__ */ __name(function (param) {
                                            var _param = _sliced_to_array(param, 2),
                                                index = _param[0],
                                                string = _param[1];
                                            if (index === -1) {
                                                opts.res.end(string);
                                            } else {
                                                var _opts_res_flush, _opts_res;
                                                opts.res.write(formatter(index, string));
                                                (_opts_res_flush = (_opts_res = opts.res).flush) === null ||
                                                _opts_res_flush === void 0
                                                    ? void 0
                                                    : _opts_res_flush.call(_opts_res);
                                            }
                                        }, 'unstable_onChunk');
                                        return [
                                            4,
                                            resolveHTTPResponse({
                                                batching: opts.batching,
                                                responseMeta: opts.responseMeta,
                                                path: opts.path,
                                                createContext: createContext2,
                                                router: opts.router,
                                                req: req,
                                                error: bodyResult.ok ? null : bodyResult.error,
                                                preprocessedBody: bodyResult.ok ? bodyResult.preprocessed : false,
                                                onError: function onError(o2) {
                                                    var _opts_onError, _opts;
                                                    (_opts = opts) === null || _opts === void 0
                                                        ? void 0
                                                        : (_opts_onError = _opts.onError) === null ||
                                                          _opts_onError === void 0
                                                        ? void 0
                                                        : _opts_onError.call(
                                                              _opts,
                                                              _object_spread_props(_object_spread({}, o2), {
                                                                  req: opts.req,
                                                              })
                                                          );
                                                },
                                                contentTypeHandler: contentTypeHandler,
                                                unstable_onHead: unstable_onHead,
                                                unstable_onChunk: unstable_onChunk,
                                            }),
                                        ];
                                    case 2:
                                        _state.sent();
                                        if (isStream) {
                                            opts.res.write(formatter.end());
                                            opts.res.end();
                                        }
                                        return [2, opts.res];
                                }
                            });
                        });
                        return function (err) {
                            return _ref.apply(this, arguments);
                        };
                    })()
                ),
            ];
        });
    });
    return _nodeHTTPRequestHandler.apply(this, arguments);
}
__name(nodeHTTPRequestHandler, 'nodeHTTPRequestHandler');
// ../../node_modules/@trpc/server/dist/adapters/express.mjs
function createExpressMiddleware(opts) {
    return (function () {
        var _ref = _async_to_generator(function (req, res) {
            var endpoint;
            return _ts_generator(this, function (_state) {
                switch (_state.label) {
                    case 0:
                        endpoint = req.path.slice(1);
                        return [
                            4,
                            nodeHTTPRequestHandler(
                                _object_spread_props(_object_spread({}, opts), {
                                    req: req,
                                    res: res,
                                    path: endpoint,
                                })
                            ),
                        ];
                    case 1:
                        _state.sent();
                        return [2];
                }
            });
        });
        return function (req, res) {
            return _ref.apply(this, arguments);
        };
    })();
}
__name(createExpressMiddleware, 'createExpressMiddleware');
// index.ts
var import_cookie_parser = __toESM(require('cookie-parser'));
var import_cors = __toESM(require('cors'));
var import_express = __toESM(require('express'));
var import_morgan = __toESM(require_morgan());
// config/default.ts
var customConfig = {
    port: Number(process.env.PORT) || 8080,
    accessTokenExpiresIn: 1,
    refreshTokenExpiresIn: 60,
    origin: 'http://localhost:3000',
    redisCacheExpiresIn: 60,
    dbUri: process.env.POSTGRESQLURL,
    accessTokenPrivateKey: process.env.ACCESS_TOKEN_PRIVATE_KEY,
    accessTokenPublicKey: process.env.ACCESS_TOKEN_PUBLIC_KEY,
    refreshTokenPrivateKey: process.env.REFRESH_TOKEN_PRIVATE_KEY,
    refreshTokenPublicKey: process.env.REFRESH_TOKEN_PUBLIC_KEY,
};
var default_default = customConfig;
// ../../node_modules/@neondatabase/serverless/index.mjs
var import_index = __toESM(require_serverless(), 1);
var Client = import_index.default.Client;
var ClientBase = import_index.default.ClientBase;
var Connection = import_index.default.Connection;
var DatabaseError = import_index.default.DatabaseError;
var NeonDbError = import_index.default.NeonDbError;
var Pool = import_index.default.Pool;
var Query = import_index.default.Query;
var defaults = import_index.default.defaults;
var neon = import_index.default.neon;
var neonConfig = import_index.default.neonConfig;
var types = import_index.default.types;
// ../../packages/database/index.ts
var import_dotenv = require('dotenv');
var import_neon_http = require('drizzle-orm/neon-http');
// ../../packages/database/schema/index.ts
var schema_exports = {};
__export(schema_exports, {
    properties: function () {
        return properties;
    },
    propertiesRelations: function () {
        return propertiesRelations;
    },
    propertyTags: function () {
        return propertyTags;
    },
    propertyTagsRelations: function () {
        return propertyTagsRelations;
    },
    tagsToProperties: function () {
        return tagsToProperties;
    },
    tagsTopropertiesRelations: function () {
        return tagsTopropertiesRelations;
    },
});
// ../../packages/database/schema/property.ts
var import_drizzle_orm = require('drizzle-orm');
var import_pg_core = require('drizzle-orm/pg-core');
var propertyTags = (0, import_pg_core.pgTable)('property_tags', {
    id: (0, import_pg_core.serial)('id').primaryKey(),
    name: (0, import_pg_core.varchar)('name').notNull(),
    image: (0, import_pg_core.text)('image').notNull(),
});
var propertyTagsRelations = (0, import_drizzle_orm.relations)(propertyTags, function (param) {
    var many = param.many;
    return {
        tagsToProperties: many(tagsToProperties),
    };
});
var properties = (0, import_pg_core.pgTable)('properties', {
    id: (0, import_pg_core.serial)('id').primaryKey(),
    name: (0, import_pg_core.varchar)('name').notNull(),
    description: (0, import_pg_core.text)('description').notNull(),
    location: (0, import_pg_core.text)('location').notNull(),
    ownerName: (0, import_pg_core.text)('owerName').notNull(),
    ownerPhone: (0, import_pg_core.text)('owerPhone').notNull(),
    price: (0, import_pg_core.integer)('price'),
    bed: (0, import_pg_core.integer)('bed').notNull(),
    bath: (0, import_pg_core.integer)('bath').notNull(),
    area: (0, import_pg_core.integer)('area').notNull(),
    created_at: (0, import_pg_core.timestamp)('created_at').defaultNow(),
    updated_at: (0, import_pg_core.timestamp)('updated_at'),
    rating: (0, import_pg_core.real)('rating'),
    region: (0, import_pg_core.text)('region', {
        enum: ['europe', 'canada', 'asia', 'united_kingdom', 'united_states'],
    }).default('united_states'),
    types: (0, import_pg_core.text)('types', {
        enum: ['house', 'apartment', 'guesthouse', 'hotel'],
    }).default('house'),
    images: (0, import_pg_core.json)('images').$type().default([]),
    placeType: (0, import_pg_core.text)('placeType', {
        enum: ['room', 'entire_home'],
    }).default('room'),
    vat: (0, import_pg_core.boolean)('vat').default(false),
});
var propertiesRelations = (0, import_drizzle_orm.relations)(properties, function (param) {
    var many = param.many;
    return {
        tagsToProperties: many(tagsToProperties),
    };
});
var tagsToProperties = (0, import_pg_core.pgTable)(
    'tags_to_properties',
    {
        propertyId: (0, import_pg_core.integer)('propertyId')
            .notNull()
            .references(function () {
                return properties.id;
            }),
        tagId: (0, import_pg_core.integer)('tagId')
            .notNull()
            .references(function () {
                return propertyTags.id;
            }),
    },
    function (t2) {
        return {
            pk: (0, import_pg_core.primaryKey)(t2.propertyId, t2.tagId),
        };
    }
);
var tagsTopropertiesRelations = (0, import_drizzle_orm.relations)(tagsToProperties, function (param) {
    var one = param.one;
    return {
        properties: one(properties, {
            fields: [tagsToProperties.propertyId],
            references: [properties.id],
        }),
        images: one(propertyTags, {
            fields: [tagsToProperties.tagId],
            references: [propertyTags.id],
        }),
    };
});
// ../../packages/database/index.ts
(0, import_dotenv.config)();
neonConfig.fetchConnectionCache = true;
var sql = neon(process.env.DATABASE_URL);
var db = (0, import_neon_http.drizzle)(sql, {
    schema: schema_exports,
});
var database_default = db;
// ../../node_modules/zod/lib/index.mjs
var util;
(function (util2) {
    var assertIs = function assertIs(_arg) {};
    var assertNever = function assertNever(_x) {
        throw new Error();
    };
    var joinValues = function joinValues(array) {
        var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ' | ';
        return array
            .map(function (val) {
                return typeof val === 'string' ? "'".concat(val, "'") : val;
            })
            .join(separator);
    };
    util2.assertEqual = function (val) {
        return val;
    };
    __name(assertIs, 'assertIs');
    util2.assertIs = assertIs;
    __name(assertNever, 'assertNever');
    util2.assertNever = assertNever;
    util2.arrayToEnum = function (items) {
        var obj = {};
        var _iteratorNormalCompletion = true,
            _didIteratorError = false,
            _iteratorError = undefined;
        try {
            for (
                var _iterator = items[Symbol.iterator](), _step;
                !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                _iteratorNormalCompletion = true
            ) {
                var item = _step.value;
                obj[item] = item;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return obj;
    };
    util2.getValidEnumValues = function (obj) {
        var validKeys = util2.objectKeys(obj).filter(function (k) {
            return typeof obj[obj[k]] !== 'number';
        });
        var filtered = {};
        var _iteratorNormalCompletion = true,
            _didIteratorError = false,
            _iteratorError = undefined;
        try {
            for (
                var _iterator = validKeys[Symbol.iterator](), _step;
                !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                _iteratorNormalCompletion = true
            ) {
                var k = _step.value;
                filtered[k] = obj[k];
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return util2.objectValues(filtered);
    };
    util2.objectValues = function (obj) {
        return util2.objectKeys(obj).map(function (e2) {
            return obj[e2];
        });
    };
    util2.objectKeys =
        typeof Object.keys === 'function'
            ? function (obj) {
                  return Object.keys(obj);
              }
            : function (object) {
                  var keys = [];
                  for (var key in object) {
                      if (Object.prototype.hasOwnProperty.call(object, key)) {
                          keys.push(key);
                      }
                  }
                  return keys;
              };
    util2.find = function (arr, checker) {
        var _iteratorNormalCompletion = true,
            _didIteratorError = false,
            _iteratorError = undefined;
        try {
            for (
                var _iterator = arr[Symbol.iterator](), _step;
                !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                _iteratorNormalCompletion = true
            ) {
                var item = _step.value;
                if (checker(item)) return item;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return void 0;
    };
    util2.isInteger =
        typeof Number.isInteger === 'function'
            ? function (val) {
                  return Number.isInteger(val);
              }
            : function (val) {
                  return typeof val === 'number' && isFinite(val) && Math.floor(val) === val;
              };
    __name(joinValues, 'joinValues');
    util2.joinValues = joinValues;
    util2.jsonStringifyReplacer = function (_, value) {
        if ((typeof value === 'undefined' ? 'undefined' : _type_of(value)) === 'bigint') {
            return value.toString();
        }
        return value;
    };
})(util || (util = {}));
var objectUtil;
(function (objectUtil2) {
    objectUtil2.mergeShapes = function (first, second) {
        return _object_spread({}, first, second);
    };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
    'string',
    'nan',
    'number',
    'integer',
    'float',
    'boolean',
    'date',
    'bigint',
    'symbol',
    'function',
    'undefined',
    'null',
    'array',
    'object',
    'unknown',
    'promise',
    'void',
    'never',
    'map',
    'set',
]);
var getParsedType = /* @__PURE__ */ __name(function (data) {
    var t2 = typeof data === 'undefined' ? 'undefined' : _type_of(data);
    switch (t2) {
        case 'undefined':
            return ZodParsedType.undefined;
        case 'string':
            return ZodParsedType.string;
        case 'number':
            return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
        case 'boolean':
            return ZodParsedType.boolean;
        case 'function':
            return ZodParsedType.function;
        case 'bigint':
            return ZodParsedType.bigint;
        case 'symbol':
            return ZodParsedType.symbol;
        case 'object':
            if (Array.isArray(data)) {
                return ZodParsedType.array;
            }
            if (data === null) {
                return ZodParsedType.null;
            }
            if (data.then && typeof data.then === 'function' && data.catch && typeof data.catch === 'function') {
                return ZodParsedType.promise;
            }
            if (typeof Map !== 'undefined' && _instanceof(data, Map)) {
                return ZodParsedType.map;
            }
            if (typeof Set !== 'undefined' && _instanceof(data, Set)) {
                return ZodParsedType.set;
            }
            if (typeof Date !== 'undefined' && _instanceof(data, Date)) {
                return ZodParsedType.date;
            }
            return ZodParsedType.object;
        default:
            return ZodParsedType.unknown;
    }
}, 'getParsedType');
var ZodIssueCode = util.arrayToEnum([
    'invalid_type',
    'invalid_literal',
    'custom',
    'invalid_union',
    'invalid_union_discriminator',
    'invalid_enum_value',
    'unrecognized_keys',
    'invalid_arguments',
    'invalid_return_type',
    'invalid_date',
    'invalid_string',
    'too_small',
    'too_big',
    'invalid_intersection_types',
    'not_multiple_of',
    'not_finite',
]);
var quotelessJson = /* @__PURE__ */ __name(function (obj) {
    var json2 = JSON.stringify(obj, null, 2);
    return json2.replace(/"([^"]+)":/g, '$1:');
}, 'quotelessJson');
var _ZodError = /*#__PURE__*/ (function _target(Error1) {
    _inherits(_ZodError, Error1);
    var _super = _create_super(_ZodError);
    function _ZodError(issues) {
        _class_call_check(this, _ZodError);
        var _this;
        _this = _super.call(this);
        _this.issues = [];
        _this.addIssue = function (sub) {
            _this.issues = _to_consumable_array(_this.issues).concat([sub]);
        };
        _this.addIssues = function () {
            var subs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            _this.issues = _to_consumable_array(_this.issues).concat(_to_consumable_array(subs));
        };
        var actualProto = (_instanceof(this, _ZodError) ? this.constructor : void 0).prototype;
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(_assert_this_initialized(_this), actualProto);
        } else {
            _this.__proto__ = actualProto;
        }
        _this.name = 'ZodError';
        _this.issues = issues;
        return _this;
    }
    _create_class(_ZodError, [
        {
            key: 'errors',
            get: function get() {
                return this.issues;
            },
        },
        {
            key: 'format',
            value: function format(_mapper) {
                var mapper =
                    _mapper ||
                    function (issue) {
                        return issue.message;
                    };
                var fieldErrors = {
                    _errors: [],
                };
                var processError = /* @__PURE__ */ __name(function (error) {
                    var _iteratorNormalCompletion = true,
                        _didIteratorError = false,
                        _iteratorError = undefined;
                    try {
                        for (
                            var _iterator = error.issues[Symbol.iterator](), _step;
                            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                            _iteratorNormalCompletion = true
                        ) {
                            var issue = _step.value;
                            if (issue.code === 'invalid_union') {
                                issue.unionErrors.map(processError);
                            } else if (issue.code === 'invalid_return_type') {
                                processError(issue.returnTypeError);
                            } else if (issue.code === 'invalid_arguments') {
                                processError(issue.argumentsError);
                            } else if (issue.path.length === 0) {
                                fieldErrors._errors.push(mapper(issue));
                            } else {
                                var curr = fieldErrors;
                                var i2 = 0;
                                while (i2 < issue.path.length) {
                                    var el = issue.path[i2];
                                    var terminal = i2 === issue.path.length - 1;
                                    if (!terminal) {
                                        curr[el] = curr[el] || {
                                            _errors: [],
                                        };
                                    } else {
                                        curr[el] = curr[el] || {
                                            _errors: [],
                                        };
                                        curr[el]._errors.push(mapper(issue));
                                    }
                                    curr = curr[el];
                                    i2++;
                                }
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }, 'processError');
                processError(this);
                return fieldErrors;
            },
        },
        {
            key: 'toString',
            value: function toString() {
                return this.message;
            },
        },
        {
            key: 'message',
            get: function get() {
                return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
            },
        },
        {
            key: 'isEmpty',
            get: function get() {
                return this.issues.length === 0;
            },
        },
        {
            key: 'flatten',
            value: function flatten() {
                var mapper =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : function (issue) {
                              return issue.message;
                          };
                var fieldErrors = {};
                var formErrors = [];
                var _iteratorNormalCompletion = true,
                    _didIteratorError = false,
                    _iteratorError = undefined;
                try {
                    for (
                        var _iterator = this.issues[Symbol.iterator](), _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                        _iteratorNormalCompletion = true
                    ) {
                        var sub = _step.value;
                        if (sub.path.length > 0) {
                            fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
                            fieldErrors[sub.path[0]].push(mapper(sub));
                        } else {
                            formErrors.push(mapper(sub));
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return {
                    formErrors: formErrors,
                    fieldErrors: fieldErrors,
                };
            },
        },
        {
            key: 'formErrors',
            get: function get() {
                return this.flatten();
            },
        },
    ]);
    return _ZodError;
})(_wrap_native_super(Error));
__name(_ZodError, 'ZodError');
var ZodError = _ZodError;
ZodError.create = function (issues) {
    var error = new ZodError(issues);
    return error;
};
var errorMap = /* @__PURE__ */ __name(function (issue, _ctx) {
    var message;
    switch (issue.code) {
        case ZodIssueCode.invalid_type:
            if (issue.received === ZodParsedType.undefined) {
                message = 'Required';
            } else {
                message = 'Expected '.concat(issue.expected, ', received ').concat(issue.received);
            }
            break;
        case ZodIssueCode.invalid_literal:
            message = 'Invalid literal value, expected '.concat(
                JSON.stringify(issue.expected, util.jsonStringifyReplacer)
            );
            break;
        case ZodIssueCode.unrecognized_keys:
            message = 'Unrecognized key(s) in object: '.concat(util.joinValues(issue.keys, ', '));
            break;
        case ZodIssueCode.invalid_union:
            message = 'Invalid input';
            break;
        case ZodIssueCode.invalid_union_discriminator:
            message = 'Invalid discriminator value. Expected '.concat(util.joinValues(issue.options));
            break;
        case ZodIssueCode.invalid_enum_value:
            message = 'Invalid enum value. Expected '
                .concat(util.joinValues(issue.options), ", received '")
                .concat(issue.received, "'");
            break;
        case ZodIssueCode.invalid_arguments:
            message = 'Invalid function arguments';
            break;
        case ZodIssueCode.invalid_return_type:
            message = 'Invalid function return type';
            break;
        case ZodIssueCode.invalid_date:
            message = 'Invalid date';
            break;
        case ZodIssueCode.invalid_string:
            if (typeof issue.validation === 'object') {
                if ('includes' in issue.validation) {
                    message = 'Invalid input: must include "'.concat(issue.validation.includes, '"');
                    if (typeof issue.validation.position === 'number') {
                        message = ''
                            .concat(message, ' at one or more positions greater than or equal to ')
                            .concat(issue.validation.position);
                    }
                } else if ('startsWith' in issue.validation) {
                    message = 'Invalid input: must start with "'.concat(issue.validation.startsWith, '"');
                } else if ('endsWith' in issue.validation) {
                    message = 'Invalid input: must end with "'.concat(issue.validation.endsWith, '"');
                } else {
                    util.assertNever(issue.validation);
                }
            } else if (issue.validation !== 'regex') {
                message = 'Invalid '.concat(issue.validation);
            } else {
                message = 'Invalid';
            }
            break;
        case ZodIssueCode.too_small:
            if (issue.type === 'array')
                message = 'Array must contain '
                    .concat(issue.exact ? 'exactly' : issue.inclusive ? 'at least' : 'more than', ' ')
                    .concat(issue.minimum, ' element(s)');
            else if (issue.type === 'string')
                message = 'String must contain '
                    .concat(issue.exact ? 'exactly' : issue.inclusive ? 'at least' : 'over', ' ')
                    .concat(issue.minimum, ' character(s)');
            else if (issue.type === 'number')
                message = 'Number must be '
                    .concat(
                        issue.exact
                            ? 'exactly equal to '
                            : issue.inclusive
                            ? 'greater than or equal to '
                            : 'greater than '
                    )
                    .concat(issue.minimum);
            else if (issue.type === 'date')
                message = 'Date must be '
                    .concat(
                        issue.exact
                            ? 'exactly equal to '
                            : issue.inclusive
                            ? 'greater than or equal to '
                            : 'greater than '
                    )
                    .concat(new Date(Number(issue.minimum)));
            else message = 'Invalid input';
            break;
        case ZodIssueCode.too_big:
            if (issue.type === 'array')
                message = 'Array must contain '
                    .concat(issue.exact ? 'exactly' : issue.inclusive ? 'at most' : 'less than', ' ')
                    .concat(issue.maximum, ' element(s)');
            else if (issue.type === 'string')
                message = 'String must contain '
                    .concat(issue.exact ? 'exactly' : issue.inclusive ? 'at most' : 'under', ' ')
                    .concat(issue.maximum, ' character(s)');
            else if (issue.type === 'number')
                message = 'Number must be '
                    .concat(issue.exact ? 'exactly' : issue.inclusive ? 'less than or equal to' : 'less than', ' ')
                    .concat(issue.maximum);
            else if (issue.type === 'bigint')
                message = 'BigInt must be '
                    .concat(issue.exact ? 'exactly' : issue.inclusive ? 'less than or equal to' : 'less than', ' ')
                    .concat(issue.maximum);
            else if (issue.type === 'date')
                message = 'Date must be '
                    .concat(
                        issue.exact ? 'exactly' : issue.inclusive ? 'smaller than or equal to' : 'smaller than',
                        ' '
                    )
                    .concat(new Date(Number(issue.maximum)));
            else message = 'Invalid input';
            break;
        case ZodIssueCode.custom:
            message = 'Invalid input';
            break;
        case ZodIssueCode.invalid_intersection_types:
            message = 'Intersection results could not be merged';
            break;
        case ZodIssueCode.not_multiple_of:
            message = 'Number must be a multiple of '.concat(issue.multipleOf);
            break;
        case ZodIssueCode.not_finite:
            message = 'Number must be finite';
            break;
        default:
            message = _ctx.defaultError;
            util.assertNever(issue);
    }
    return {
        message: message,
    };
}, 'errorMap');
var overrideErrorMap = errorMap;
function setErrorMap(map) {
    overrideErrorMap = map;
}
__name(setErrorMap, 'setErrorMap');
function getErrorMap() {
    return overrideErrorMap;
}
__name(getErrorMap, 'getErrorMap');
var makeIssue = /* @__PURE__ */ __name(function (params) {
    var data = params.data,
        path = params.path,
        errorMaps = params.errorMaps,
        issueData = params.issueData;
    var fullPath = _to_consumable_array(path).concat(_to_consumable_array(issueData.path || []));
    var fullIssue = _object_spread_props(_object_spread({}, issueData), {
        path: fullPath,
    });
    var errorMessage = '';
    var maps = errorMaps
        .filter(function (m2) {
            return !!m2;
        })
        .slice()
        .reverse();
    var _iteratorNormalCompletion = true,
        _didIteratorError = false,
        _iteratorError = undefined;
    try {
        for (
            var _iterator = maps[Symbol.iterator](), _step;
            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
            _iteratorNormalCompletion = true
        ) {
            var map = _step.value;
            errorMessage = map(fullIssue, {
                data: data,
                defaultError: errorMessage,
            }).message;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return _object_spread_props(_object_spread({}, issueData), {
        path: fullPath,
        message: issueData.message || errorMessage,
    });
}, 'makeIssue');
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
    var issue = makeIssue({
        issueData: issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), errorMap].filter(function (x) {
            return !!x;
        }),
    });
    ctx.common.issues.push(issue);
}
__name(addIssueToContext, 'addIssueToContext');
var _ParseStatus = /*#__PURE__*/ (function () {
    function _ParseStatus() {
        _class_call_check(this, _ParseStatus);
        this.value = 'valid';
    }
    _create_class(
        _ParseStatus,
        [
            {
                key: 'dirty',
                value: function dirty() {
                    if (this.value === 'valid') this.value = 'dirty';
                },
            },
            {
                key: 'abort',
                value: function abort() {
                    if (this.value !== 'aborted') this.value = 'aborted';
                },
            },
        ],
        [
            {
                key: 'mergeArray',
                value: function mergeArray(status, results) {
                    var arrayValue = [];
                    var _iteratorNormalCompletion = true,
                        _didIteratorError = false,
                        _iteratorError = undefined;
                    try {
                        for (
                            var _iterator = results[Symbol.iterator](), _step;
                            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                            _iteratorNormalCompletion = true
                        ) {
                            var s2 = _step.value;
                            if (s2.status === 'aborted') return INVALID;
                            if (s2.status === 'dirty') status.dirty();
                            arrayValue.push(s2.value);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    return {
                        status: status.value,
                        value: arrayValue,
                    };
                },
            },
            {
                key: 'mergeObjectAsync',
                value: function mergeObjectAsync(status, pairs) {
                    return _async_to_generator(function () {
                        var syncPairs,
                            _iteratorNormalCompletion,
                            _didIteratorError,
                            _iteratorError,
                            _iterator,
                            _step,
                            pair,
                            _,
                            _tmp,
                            err;
                        return _ts_generator(this, function (_state) {
                            switch (_state.label) {
                                case 0:
                                    syncPairs = [];
                                    (_iteratorNormalCompletion = true),
                                        (_didIteratorError = false),
                                        (_iteratorError = undefined);
                                    _state.label = 1;
                                case 1:
                                    _state.trys.push([1, 7, 8, 9]);
                                    _iterator = pairs[Symbol.iterator]();
                                    _state.label = 2;
                                case 2:
                                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [3, 6];
                                    pair = _step.value;
                                    _ = syncPairs.push;
                                    _tmp = {};
                                    return [4, pair.key];
                                case 3:
                                    _tmp.key = _state.sent();
                                    return [4, pair.value];
                                case 4:
                                    _.apply(syncPairs, [((_tmp.value = _state.sent()), _tmp)]);
                                    _state.label = 5;
                                case 5:
                                    _iteratorNormalCompletion = true;
                                    return [3, 2];
                                case 6:
                                    return [3, 9];
                                case 7:
                                    err = _state.sent();
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                    return [3, 9];
                                case 8:
                                    try {
                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                            _iterator.return();
                                        }
                                    } finally {
                                        if (_didIteratorError) {
                                            throw _iteratorError;
                                        }
                                    }
                                    return [7];
                                case 9:
                                    return [2, _ParseStatus.mergeObjectSync(status, syncPairs)];
                            }
                        });
                    })();
                },
            },
            {
                key: 'mergeObjectSync',
                value: function mergeObjectSync(status, pairs) {
                    var finalObject = {};
                    var _iteratorNormalCompletion = true,
                        _didIteratorError = false,
                        _iteratorError = undefined;
                    try {
                        for (
                            var _iterator = pairs[Symbol.iterator](), _step;
                            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                            _iteratorNormalCompletion = true
                        ) {
                            var pair = _step.value;
                            var key = pair.key,
                                value = pair.value;
                            if (key.status === 'aborted') return INVALID;
                            if (value.status === 'aborted') return INVALID;
                            if (key.status === 'dirty') status.dirty();
                            if (value.status === 'dirty') status.dirty();
                            if (key.value !== '__proto__' && (typeof value.value !== 'undefined' || pair.alwaysSet)) {
                                finalObject[key.value] = value.value;
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    return {
                        status: status.value,
                        value: finalObject,
                    };
                },
            },
        ]
    );
    return _ParseStatus;
})();
__name(_ParseStatus, 'ParseStatus');
var ParseStatus = _ParseStatus;
var INVALID = Object.freeze({
    status: 'aborted',
});
var DIRTY = /* @__PURE__ */ __name(function (value) {
    return {
        status: 'dirty',
        value: value,
    };
}, 'DIRTY');
var OK = /* @__PURE__ */ __name(function (value) {
    return {
        status: 'valid',
        value: value,
    };
}, 'OK');
var isAborted = /* @__PURE__ */ __name(function (x) {
    return x.status === 'aborted';
}, 'isAborted');
var isDirty = /* @__PURE__ */ __name(function (x) {
    return x.status === 'dirty';
}, 'isDirty');
var isValid = /* @__PURE__ */ __name(function (x) {
    return x.status === 'valid';
}, 'isValid');
var isAsync = /* @__PURE__ */ __name(function (x) {
    return typeof Promise !== 'undefined' && _instanceof(x, Promise);
}, 'isAsync');
var errorUtil;
(function (errorUtil2) {
    errorUtil2.errToObj = function (message) {
        return typeof message === 'string'
            ? {
                  message: message,
              }
            : message || {};
    };
    errorUtil2.toString = function (message) {
        return typeof message === 'string'
            ? message
            : message === null || message === void 0
            ? void 0
            : message.message;
    };
})(errorUtil || (errorUtil = {}));
var _ParseInputLazyPath = /*#__PURE__*/ (function () {
    function _ParseInputLazyPath(parent, value, path, key) {
        _class_call_check(this, _ParseInputLazyPath);
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
    }
    _create_class(_ParseInputLazyPath, [
        {
            key: 'path',
            get: function get() {
                if (!this._cachedPath.length) {
                    if (_instanceof(this._key, Array)) {
                        var _this__cachedPath;
                        (_this__cachedPath = this._cachedPath).push.apply(
                            _this__cachedPath,
                            _to_consumable_array(this._path).concat(_to_consumable_array(this._key))
                        );
                    } else {
                        var _this__cachedPath1;
                        (_this__cachedPath1 = this._cachedPath).push.apply(
                            _this__cachedPath1,
                            _to_consumable_array(this._path).concat([this._key])
                        );
                    }
                }
                return this._cachedPath;
            },
        },
    ]);
    return _ParseInputLazyPath;
})();
__name(_ParseInputLazyPath, 'ParseInputLazyPath');
var ParseInputLazyPath = _ParseInputLazyPath;
var handleResult = /* @__PURE__ */ __name(function (ctx, result) {
    if (isValid(result)) {
        return {
            success: true,
            data: result.value,
        };
    } else {
        if (!ctx.common.issues.length) {
            throw new Error('Validation failed but no issues detected.');
        }
        return {
            success: false,
            get error() {
                if (this._error) return this._error;
                var error = new ZodError(ctx.common.issues);
                this._error = error;
                return this._error;
            },
        };
    }
}, 'handleResult');
function processCreateParams(params) {
    if (!params) return {};
    var errorMap2 = params.errorMap,
        invalid_type_error = params.invalid_type_error,
        required_error = params.required_error,
        description = params.description;
    if (errorMap2 && (invalid_type_error || required_error)) {
        throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
    }
    if (errorMap2)
        return {
            errorMap: errorMap2,
            description: description,
        };
    var customMap = /* @__PURE__ */ __name(function (iss, ctx) {
        if (iss.code !== 'invalid_type')
            return {
                message: ctx.defaultError,
            };
        if (typeof ctx.data === 'undefined') {
            return {
                message: required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError,
            };
        }
        return {
            message:
                invalid_type_error !== null && invalid_type_error !== void 0 ? invalid_type_error : ctx.defaultError,
        };
    }, 'customMap');
    return {
        errorMap: customMap,
        description: description,
    };
}
__name(processCreateParams, 'processCreateParams');
var _ZodType = /*#__PURE__*/ (function () {
    function _ZodType(def) {
        _class_call_check(this, _ZodType);
        this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
    }
    _create_class(_ZodType, [
        {
            key: 'description',
            get: function get() {
                return this._def.description;
            },
        },
        {
            key: '_getType',
            value: function _getType(input) {
                return getParsedType(input.data);
            },
        },
        {
            key: '_getOrReturnCtx',
            value: function _getOrReturnCtx(input, ctx) {
                return (
                    ctx || {
                        common: input.parent.common,
                        data: input.data,
                        parsedType: getParsedType(input.data),
                        schemaErrorMap: this._def.errorMap,
                        path: input.path,
                        parent: input.parent,
                    }
                );
            },
        },
        {
            key: '_processInputParams',
            value: function _processInputParams(input) {
                return {
                    status: new ParseStatus(),
                    ctx: {
                        common: input.parent.common,
                        data: input.data,
                        parsedType: getParsedType(input.data),
                        schemaErrorMap: this._def.errorMap,
                        path: input.path,
                        parent: input.parent,
                    },
                };
            },
        },
        {
            key: '_parseSync',
            value: function _parseSync(input) {
                var result = this._parse(input);
                if (isAsync(result)) {
                    throw new Error('Synchronous parse encountered promise.');
                }
                return result;
            },
        },
        {
            key: '_parseAsync',
            value: function _parseAsync(input) {
                var result = this._parse(input);
                return Promise.resolve(result);
            },
        },
        {
            key: 'parse',
            value: function parse(data, params) {
                var result = this.safeParse(data, params);
                if (result.success) return result.data;
                throw result.error;
            },
        },
        {
            key: 'safeParse',
            value: function safeParse(data, params) {
                var _a;
                var ctx = {
                    common: {
                        issues: [],
                        async:
                            (_a = params === null || params === void 0 ? void 0 : params.async) !== null &&
                            _a !== void 0
                                ? _a
                                : false,
                        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
                    },
                    path: (params === null || params === void 0 ? void 0 : params.path) || [],
                    schemaErrorMap: this._def.errorMap,
                    parent: null,
                    data: data,
                    parsedType: getParsedType(data),
                };
                var result = this._parseSync({
                    data: data,
                    path: ctx.path,
                    parent: ctx,
                });
                return handleResult(ctx, result);
            },
        },
        {
            key: 'parseAsync',
            value: function parseAsync(data, params) {
                var _this = this;
                return _async_to_generator(function () {
                    var result;
                    return _ts_generator(this, function (_state) {
                        switch (_state.label) {
                            case 0:
                                return [4, _this.safeParseAsync(data, params)];
                            case 1:
                                result = _state.sent();
                                if (result.success) return [2, result.data];
                                throw result.error;
                        }
                    });
                })();
            },
        },
        {
            key: 'safeParseAsync',
            value: function safeParseAsync(data, params) {
                var _this = this;
                return _async_to_generator(function () {
                    var ctx, maybeAsyncResult, result;
                    return _ts_generator(this, function (_state) {
                        switch (_state.label) {
                            case 0:
                                ctx = {
                                    common: {
                                        issues: [],
                                        contextualErrorMap:
                                            params === null || params === void 0 ? void 0 : params.errorMap,
                                        async: true,
                                    },
                                    path: (params === null || params === void 0 ? void 0 : params.path) || [],
                                    schemaErrorMap: _this._def.errorMap,
                                    parent: null,
                                    data: data,
                                    parsedType: getParsedType(data),
                                };
                                maybeAsyncResult = _this._parse({
                                    data: data,
                                    path: ctx.path,
                                    parent: ctx,
                                });
                                return [
                                    4,
                                    isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult),
                                ];
                            case 1:
                                result = _state.sent();
                                return [2, handleResult(ctx, result)];
                        }
                    });
                })();
            },
        },
        {
            key: 'refine',
            value: function refine(check, message) {
                var getIssueProperties = /* @__PURE__ */ __name(function (val) {
                    if (typeof message === 'string' || typeof message === 'undefined') {
                        return {
                            message: message,
                        };
                    } else if (typeof message === 'function') {
                        return message(val);
                    } else {
                        return message;
                    }
                }, 'getIssueProperties');
                return this._refinement(function (val, ctx) {
                    var result = check(val);
                    var setError = /* @__PURE__ */ __name(function () {
                        return ctx.addIssue(
                            _object_spread(
                                {
                                    code: ZodIssueCode.custom,
                                },
                                getIssueProperties(val)
                            )
                        );
                    }, 'setError');
                    if (typeof Promise !== 'undefined' && _instanceof(result, Promise)) {
                        return result.then(function (data) {
                            if (!data) {
                                setError();
                                return false;
                            } else {
                                return true;
                            }
                        });
                    }
                    if (!result) {
                        setError();
                        return false;
                    } else {
                        return true;
                    }
                });
            },
        },
        {
            key: 'refinement',
            value: function refinement(check, refinementData) {
                return this._refinement(function (val, ctx) {
                    if (!check(val)) {
                        ctx.addIssue(typeof refinementData === 'function' ? refinementData(val, ctx) : refinementData);
                        return false;
                    } else {
                        return true;
                    }
                });
            },
        },
        {
            key: '_refinement',
            value: function _refinement(refinement) {
                return new ZodEffects({
                    schema: this,
                    typeName: ZodFirstPartyTypeKind.ZodEffects,
                    effect: {
                        type: 'refinement',
                        refinement: refinement,
                    },
                });
            },
        },
        {
            key: 'superRefine',
            value: function superRefine(refinement) {
                return this._refinement(refinement);
            },
        },
        {
            key: 'optional',
            value: function optional() {
                return ZodOptional.create(this, this._def);
            },
        },
        {
            key: 'nullable',
            value: function nullable() {
                return ZodNullable.create(this, this._def);
            },
        },
        {
            key: 'nullish',
            value: function nullish() {
                return this.nullable().optional();
            },
        },
        {
            key: 'array',
            value: function array() {
                return ZodArray.create(this, this._def);
            },
        },
        {
            key: 'promise',
            value: function promise() {
                return ZodPromise.create(this, this._def);
            },
        },
        {
            key: 'or',
            value: function or(option) {
                return ZodUnion.create([this, option], this._def);
            },
        },
        {
            key: 'and',
            value: function and(incoming) {
                return ZodIntersection.create(this, incoming, this._def);
            },
        },
        {
            key: 'transform',
            value: function transform(transform) {
                return new ZodEffects(
                    _object_spread_props(_object_spread({}, processCreateParams(this._def)), {
                        schema: this,
                        typeName: ZodFirstPartyTypeKind.ZodEffects,
                        effect: {
                            type: 'transform',
                            transform: transform,
                        },
                    })
                );
            },
        },
        {
            key: 'default',
            value: function _default(def) {
                var defaultValueFunc =
                    typeof def === 'function'
                        ? def
                        : function () {
                              return def;
                          };
                return new ZodDefault(
                    _object_spread_props(_object_spread({}, processCreateParams(this._def)), {
                        innerType: this,
                        defaultValue: defaultValueFunc,
                        typeName: ZodFirstPartyTypeKind.ZodDefault,
                    })
                );
            },
        },
        {
            key: 'brand',
            value: function brand() {
                return new ZodBranded(
                    _object_spread(
                        {
                            typeName: ZodFirstPartyTypeKind.ZodBranded,
                            type: this,
                        },
                        processCreateParams(this._def)
                    )
                );
            },
        },
        {
            key: 'catch',
            value: function _catch(def) {
                var catchValueFunc =
                    typeof def === 'function'
                        ? def
                        : function () {
                              return def;
                          };
                return new ZodCatch(
                    _object_spread_props(_object_spread({}, processCreateParams(this._def)), {
                        innerType: this,
                        catchValue: catchValueFunc,
                        typeName: ZodFirstPartyTypeKind.ZodCatch,
                    })
                );
            },
        },
        {
            key: 'describe',
            value: function describe(description) {
                var This = this.constructor;
                return new This(
                    _object_spread_props(_object_spread({}, this._def), {
                        description: description,
                    })
                );
            },
        },
        {
            key: 'pipe',
            value: function pipe(target) {
                return ZodPipeline.create(this, target);
            },
        },
        {
            key: 'readonly',
            value: function readonly() {
                return ZodReadonly.create(this);
            },
        },
        {
            key: 'isOptional',
            value: function isOptional() {
                return this.safeParse(void 0).success;
            },
        },
        {
            key: 'isNullable',
            value: function isNullable() {
                return this.safeParse(null).success;
            },
        },
    ]);
    return _ZodType;
})();
__name(_ZodType, 'ZodType');
var ZodType = _ZodType;
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[a-z][a-z0-9]*$/;
var ulidRegex = /[0-9A-HJKMNP-TV-Z]{26}/;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var emailRegex = /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var emojiRegex = RegExp('^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$', 'u');
var ipv4Regex =
    /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
var ipv6Regex =
    /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
var datetimeRegex = /* @__PURE__ */ __name(function (args) {
    if (args.precision) {
        if (args.offset) {
            return new RegExp(
                '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{'.concat(
                    args.precision,
                    '}(([+-]\\d{2}(:?\\d{2})?)|Z)$'
                )
            );
        } else {
            return new RegExp('^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{'.concat(args.precision, '}Z$'));
        }
    } else if (args.precision === 0) {
        if (args.offset) {
            return new RegExp('^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$');
        } else {
            return new RegExp('^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$');
        }
    } else {
        if (args.offset) {
            return new RegExp('^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$');
        } else {
            return new RegExp('^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$');
        }
    }
}, 'datetimeRegex');
function isValidIP(ip, version) {
    if ((version === 'v4' || !version) && ipv4Regex.test(ip)) {
        return true;
    }
    if ((version === 'v6' || !version) && ipv6Regex.test(ip)) {
        return true;
    }
    return false;
}
__name(isValidIP, 'isValidIP');
var _ZodString = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodString, ZodType);
    var _super = _create_super(_ZodString);
    function _ZodString() {
        _class_call_check(this, _ZodString);
        var _this;
        _this = _super.call.apply(_super, [this].concat(Array.prototype.slice.call(arguments)));
        _this._regex = function (regex, validation, message) {
            return _this.refinement(
                function (data) {
                    return regex.test(data);
                },
                _object_spread(
                    {
                        validation: validation,
                        code: ZodIssueCode.invalid_string,
                    },
                    errorUtil.errToObj(message)
                )
            );
        };
        _this.nonempty = function (message) {
            return _this.min(1, errorUtil.errToObj(message));
        };
        _this.trim = function () {
            return new _ZodString(
                _object_spread_props(_object_spread({}, _this._def), {
                    checks: _to_consumable_array(_this._def.checks).concat([
                        {
                            kind: 'trim',
                        },
                    ]),
                })
            );
        };
        _this.toLowerCase = function () {
            return new _ZodString(
                _object_spread_props(_object_spread({}, _this._def), {
                    checks: _to_consumable_array(_this._def.checks).concat([
                        {
                            kind: 'toLowerCase',
                        },
                    ]),
                })
            );
        };
        _this.toUpperCase = function () {
            return new _ZodString(
                _object_spread_props(_object_spread({}, _this._def), {
                    checks: _to_consumable_array(_this._def.checks).concat([
                        {
                            kind: 'toUpperCase',
                        },
                    ]),
                })
            );
        };
        return _this;
    }
    _create_class(_ZodString, [
        {
            key: '_parse',
            value: function _parse(input) {
                if (this._def.coerce) {
                    input.data = String(input.data);
                }
                var parsedType = this._getType(input);
                if (parsedType !== ZodParsedType.string) {
                    var ctx2 = this._getOrReturnCtx(input);
                    addIssueToContext(ctx2, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.string,
                        received: ctx2.parsedType,
                    });
                    return INVALID;
                }
                var status = new ParseStatus();
                var ctx = void 0;
                var _iteratorNormalCompletion = true,
                    _didIteratorError = false,
                    _iteratorError = undefined;
                try {
                    for (
                        var _iterator = this._def.checks[Symbol.iterator](), _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                        _iteratorNormalCompletion = true
                    ) {
                        var check = _step.value;
                        if (check.kind === 'min') {
                            if (input.data.length < check.value) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                addIssueToContext(ctx, {
                                    code: ZodIssueCode.too_small,
                                    minimum: check.value,
                                    type: 'string',
                                    inclusive: true,
                                    exact: false,
                                    message: check.message,
                                });
                                status.dirty();
                            }
                        } else if (check.kind === 'max') {
                            if (input.data.length > check.value) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                addIssueToContext(ctx, {
                                    code: ZodIssueCode.too_big,
                                    maximum: check.value,
                                    type: 'string',
                                    inclusive: true,
                                    exact: false,
                                    message: check.message,
                                });
                                status.dirty();
                            }
                        } else if (check.kind === 'length') {
                            var tooBig = input.data.length > check.value;
                            var tooSmall = input.data.length < check.value;
                            if (tooBig || tooSmall) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                if (tooBig) {
                                    addIssueToContext(ctx, {
                                        code: ZodIssueCode.too_big,
                                        maximum: check.value,
                                        type: 'string',
                                        inclusive: true,
                                        exact: true,
                                        message: check.message,
                                    });
                                } else if (tooSmall) {
                                    addIssueToContext(ctx, {
                                        code: ZodIssueCode.too_small,
                                        minimum: check.value,
                                        type: 'string',
                                        inclusive: true,
                                        exact: true,
                                        message: check.message,
                                    });
                                }
                                status.dirty();
                            }
                        } else if (check.kind === 'email') {
                            if (!emailRegex.test(input.data)) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                addIssueToContext(ctx, {
                                    validation: 'email',
                                    code: ZodIssueCode.invalid_string,
                                    message: check.message,
                                });
                                status.dirty();
                            }
                        } else if (check.kind === 'emoji') {
                            if (!emojiRegex.test(input.data)) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                addIssueToContext(ctx, {
                                    validation: 'emoji',
                                    code: ZodIssueCode.invalid_string,
                                    message: check.message,
                                });
                                status.dirty();
                            }
                        } else if (check.kind === 'uuid') {
                            if (!uuidRegex.test(input.data)) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                addIssueToContext(ctx, {
                                    validation: 'uuid',
                                    code: ZodIssueCode.invalid_string,
                                    message: check.message,
                                });
                                status.dirty();
                            }
                        } else if (check.kind === 'cuid') {
                            if (!cuidRegex.test(input.data)) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                addIssueToContext(ctx, {
                                    validation: 'cuid',
                                    code: ZodIssueCode.invalid_string,
                                    message: check.message,
                                });
                                status.dirty();
                            }
                        } else if (check.kind === 'cuid2') {
                            if (!cuid2Regex.test(input.data)) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                addIssueToContext(ctx, {
                                    validation: 'cuid2',
                                    code: ZodIssueCode.invalid_string,
                                    message: check.message,
                                });
                                status.dirty();
                            }
                        } else if (check.kind === 'ulid') {
                            if (!ulidRegex.test(input.data)) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                addIssueToContext(ctx, {
                                    validation: 'ulid',
                                    code: ZodIssueCode.invalid_string,
                                    message: check.message,
                                });
                                status.dirty();
                            }
                        } else if (check.kind === 'url') {
                            try {
                                new URL(input.data);
                            } catch (_a) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                addIssueToContext(ctx, {
                                    validation: 'url',
                                    code: ZodIssueCode.invalid_string,
                                    message: check.message,
                                });
                                status.dirty();
                            }
                        } else if (check.kind === 'regex') {
                            check.regex.lastIndex = 0;
                            var testResult = check.regex.test(input.data);
                            if (!testResult) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                addIssueToContext(ctx, {
                                    validation: 'regex',
                                    code: ZodIssueCode.invalid_string,
                                    message: check.message,
                                });
                                status.dirty();
                            }
                        } else if (check.kind === 'trim') {
                            input.data = input.data.trim();
                        } else if (check.kind === 'includes') {
                            if (!input.data.includes(check.value, check.position)) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                addIssueToContext(ctx, {
                                    code: ZodIssueCode.invalid_string,
                                    validation: {
                                        includes: check.value,
                                        position: check.position,
                                    },
                                    message: check.message,
                                });
                                status.dirty();
                            }
                        } else if (check.kind === 'toLowerCase') {
                            input.data = input.data.toLowerCase();
                        } else if (check.kind === 'toUpperCase') {
                            input.data = input.data.toUpperCase();
                        } else if (check.kind === 'startsWith') {
                            if (!input.data.startsWith(check.value)) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                addIssueToContext(ctx, {
                                    code: ZodIssueCode.invalid_string,
                                    validation: {
                                        startsWith: check.value,
                                    },
                                    message: check.message,
                                });
                                status.dirty();
                            }
                        } else if (check.kind === 'endsWith') {
                            if (!input.data.endsWith(check.value)) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                addIssueToContext(ctx, {
                                    code: ZodIssueCode.invalid_string,
                                    validation: {
                                        endsWith: check.value,
                                    },
                                    message: check.message,
                                });
                                status.dirty();
                            }
                        } else if (check.kind === 'datetime') {
                            var regex = datetimeRegex(check);
                            if (!regex.test(input.data)) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                addIssueToContext(ctx, {
                                    code: ZodIssueCode.invalid_string,
                                    validation: 'datetime',
                                    message: check.message,
                                });
                                status.dirty();
                            }
                        } else if (check.kind === 'ip') {
                            if (!isValidIP(input.data, check.version)) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                addIssueToContext(ctx, {
                                    validation: 'ip',
                                    code: ZodIssueCode.invalid_string,
                                    message: check.message,
                                });
                                status.dirty();
                            }
                        } else {
                            util.assertNever(check);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return {
                    status: status.value,
                    value: input.data,
                };
            },
        },
        {
            key: '_addCheck',
            value: function _addCheck(check) {
                return new _ZodString(
                    _object_spread_props(_object_spread({}, this._def), {
                        checks: _to_consumable_array(this._def.checks).concat([check]),
                    })
                );
            },
        },
        {
            key: 'email',
            value: function email(message) {
                return this._addCheck(
                    _object_spread(
                        {
                            kind: 'email',
                        },
                        errorUtil.errToObj(message)
                    )
                );
            },
        },
        {
            key: 'url',
            value: function url(message) {
                return this._addCheck(
                    _object_spread(
                        {
                            kind: 'url',
                        },
                        errorUtil.errToObj(message)
                    )
                );
            },
        },
        {
            key: 'emoji',
            value: function emoji(message) {
                return this._addCheck(
                    _object_spread(
                        {
                            kind: 'emoji',
                        },
                        errorUtil.errToObj(message)
                    )
                );
            },
        },
        {
            key: 'uuid',
            value: function uuid(message) {
                return this._addCheck(
                    _object_spread(
                        {
                            kind: 'uuid',
                        },
                        errorUtil.errToObj(message)
                    )
                );
            },
        },
        {
            key: 'cuid',
            value: function cuid(message) {
                return this._addCheck(
                    _object_spread(
                        {
                            kind: 'cuid',
                        },
                        errorUtil.errToObj(message)
                    )
                );
            },
        },
        {
            key: 'cuid2',
            value: function cuid2(message) {
                return this._addCheck(
                    _object_spread(
                        {
                            kind: 'cuid2',
                        },
                        errorUtil.errToObj(message)
                    )
                );
            },
        },
        {
            key: 'ulid',
            value: function ulid(message) {
                return this._addCheck(
                    _object_spread(
                        {
                            kind: 'ulid',
                        },
                        errorUtil.errToObj(message)
                    )
                );
            },
        },
        {
            key: 'ip',
            value: function ip(options) {
                return this._addCheck(
                    _object_spread(
                        {
                            kind: 'ip',
                        },
                        errorUtil.errToObj(options)
                    )
                );
            },
        },
        {
            key: 'datetime',
            value: function datetime(options) {
                var _a;
                if (typeof options === 'string') {
                    return this._addCheck({
                        kind: 'datetime',
                        precision: null,
                        offset: false,
                        message: options,
                    });
                }
                return this._addCheck(
                    _object_spread(
                        {
                            kind: 'datetime',
                            precision:
                                typeof (options === null || options === void 0 ? void 0 : options.precision) ===
                                'undefined'
                                    ? null
                                    : options === null || options === void 0
                                    ? void 0
                                    : options.precision,
                            offset:
                                (_a = options === null || options === void 0 ? void 0 : options.offset) !== null &&
                                _a !== void 0
                                    ? _a
                                    : false,
                        },
                        errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
                    )
                );
            },
        },
        {
            key: 'regex',
            value: function regex(regex, message) {
                return this._addCheck(
                    _object_spread(
                        {
                            kind: 'regex',
                            regex: regex,
                        },
                        errorUtil.errToObj(message)
                    )
                );
            },
        },
        {
            key: 'includes',
            value: function includes(value, options) {
                return this._addCheck(
                    _object_spread(
                        {
                            kind: 'includes',
                            value: value,
                            position: options === null || options === void 0 ? void 0 : options.position,
                        },
                        errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
                    )
                );
            },
        },
        {
            key: 'startsWith',
            value: function startsWith(value, message) {
                return this._addCheck(
                    _object_spread(
                        {
                            kind: 'startsWith',
                            value: value,
                        },
                        errorUtil.errToObj(message)
                    )
                );
            },
        },
        {
            key: 'endsWith',
            value: function endsWith(value, message) {
                return this._addCheck(
                    _object_spread(
                        {
                            kind: 'endsWith',
                            value: value,
                        },
                        errorUtil.errToObj(message)
                    )
                );
            },
        },
        {
            key: 'min',
            value: function min(minLength, message) {
                return this._addCheck(
                    _object_spread(
                        {
                            kind: 'min',
                            value: minLength,
                        },
                        errorUtil.errToObj(message)
                    )
                );
            },
        },
        {
            key: 'max',
            value: function max(maxLength, message) {
                return this._addCheck(
                    _object_spread(
                        {
                            kind: 'max',
                            value: maxLength,
                        },
                        errorUtil.errToObj(message)
                    )
                );
            },
        },
        {
            key: 'length',
            value: function length(len, message) {
                return this._addCheck(
                    _object_spread(
                        {
                            kind: 'length',
                            value: len,
                        },
                        errorUtil.errToObj(message)
                    )
                );
            },
        },
        {
            key: 'isDatetime',
            get: function get() {
                return !!this._def.checks.find(function (ch) {
                    return ch.kind === 'datetime';
                });
            },
        },
        {
            key: 'isEmail',
            get: function get() {
                return !!this._def.checks.find(function (ch) {
                    return ch.kind === 'email';
                });
            },
        },
        {
            key: 'isURL',
            get: function get() {
                return !!this._def.checks.find(function (ch) {
                    return ch.kind === 'url';
                });
            },
        },
        {
            key: 'isEmoji',
            get: function get() {
                return !!this._def.checks.find(function (ch) {
                    return ch.kind === 'emoji';
                });
            },
        },
        {
            key: 'isUUID',
            get: function get() {
                return !!this._def.checks.find(function (ch) {
                    return ch.kind === 'uuid';
                });
            },
        },
        {
            key: 'isCUID',
            get: function get() {
                return !!this._def.checks.find(function (ch) {
                    return ch.kind === 'cuid';
                });
            },
        },
        {
            key: 'isCUID2',
            get: function get() {
                return !!this._def.checks.find(function (ch) {
                    return ch.kind === 'cuid2';
                });
            },
        },
        {
            key: 'isULID',
            get: function get() {
                return !!this._def.checks.find(function (ch) {
                    return ch.kind === 'ulid';
                });
            },
        },
        {
            key: 'isIP',
            get: function get() {
                return !!this._def.checks.find(function (ch) {
                    return ch.kind === 'ip';
                });
            },
        },
        {
            key: 'minLength',
            get: function get() {
                var min = null;
                var _iteratorNormalCompletion = true,
                    _didIteratorError = false,
                    _iteratorError = undefined;
                try {
                    for (
                        var _iterator = this._def.checks[Symbol.iterator](), _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                        _iteratorNormalCompletion = true
                    ) {
                        var ch = _step.value;
                        if (ch.kind === 'min') {
                            if (min === null || ch.value > min) min = ch.value;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return min;
            },
        },
        {
            key: 'maxLength',
            get: function get() {
                var max = null;
                var _iteratorNormalCompletion = true,
                    _didIteratorError = false,
                    _iteratorError = undefined;
                try {
                    for (
                        var _iterator = this._def.checks[Symbol.iterator](), _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                        _iteratorNormalCompletion = true
                    ) {
                        var ch = _step.value;
                        if (ch.kind === 'max') {
                            if (max === null || ch.value < max) max = ch.value;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return max;
            },
        },
    ]);
    return _ZodString;
})(ZodType);
__name(_ZodString, 'ZodString');
var ZodString = _ZodString;
ZodString.create = function (params) {
    var _a;
    return new ZodString(
        _object_spread(
            {
                checks: [],
                typeName: ZodFirstPartyTypeKind.ZodString,
                coerce:
                    (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0
                        ? _a
                        : false,
            },
            processCreateParams(params)
        )
    );
};
function floatSafeRemainder(val, step) {
    var valDecCount = (val.toString().split('.')[1] || '').length;
    var stepDecCount = (step.toString().split('.')[1] || '').length;
    var decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    var valInt = parseInt(val.toFixed(decCount).replace('.', ''));
    var stepInt = parseInt(step.toFixed(decCount).replace('.', ''));
    return (valInt % stepInt) / Math.pow(10, decCount);
}
__name(floatSafeRemainder, 'floatSafeRemainder');
var _ZodNumber = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodNumber, ZodType);
    var _super = _create_super(_ZodNumber);
    function _ZodNumber() {
        _class_call_check(this, _ZodNumber);
        var _this;
        _this = _super.call.apply(_super, [this].concat(Array.prototype.slice.call(arguments)));
        _this.min = _this.gte;
        _this.max = _this.lte;
        _this.step = _this.multipleOf;
        return _this;
    }
    _create_class(_ZodNumber, [
        {
            key: '_parse',
            value: function _parse(input) {
                if (this._def.coerce) {
                    input.data = Number(input.data);
                }
                var parsedType = this._getType(input);
                if (parsedType !== ZodParsedType.number) {
                    var ctx2 = this._getOrReturnCtx(input);
                    addIssueToContext(ctx2, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.number,
                        received: ctx2.parsedType,
                    });
                    return INVALID;
                }
                var ctx = void 0;
                var status = new ParseStatus();
                var _iteratorNormalCompletion = true,
                    _didIteratorError = false,
                    _iteratorError = undefined;
                try {
                    for (
                        var _iterator = this._def.checks[Symbol.iterator](), _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                        _iteratorNormalCompletion = true
                    ) {
                        var check = _step.value;
                        if (check.kind === 'int') {
                            if (!util.isInteger(input.data)) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                addIssueToContext(ctx, {
                                    code: ZodIssueCode.invalid_type,
                                    expected: 'integer',
                                    received: 'float',
                                    message: check.message,
                                });
                                status.dirty();
                            }
                        } else if (check.kind === 'min') {
                            var tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                            if (tooSmall) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                addIssueToContext(ctx, {
                                    code: ZodIssueCode.too_small,
                                    minimum: check.value,
                                    type: 'number',
                                    inclusive: check.inclusive,
                                    exact: false,
                                    message: check.message,
                                });
                                status.dirty();
                            }
                        } else if (check.kind === 'max') {
                            var tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                            if (tooBig) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                addIssueToContext(ctx, {
                                    code: ZodIssueCode.too_big,
                                    maximum: check.value,
                                    type: 'number',
                                    inclusive: check.inclusive,
                                    exact: false,
                                    message: check.message,
                                });
                                status.dirty();
                            }
                        } else if (check.kind === 'multipleOf') {
                            if (floatSafeRemainder(input.data, check.value) !== 0) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                addIssueToContext(ctx, {
                                    code: ZodIssueCode.not_multiple_of,
                                    multipleOf: check.value,
                                    message: check.message,
                                });
                                status.dirty();
                            }
                        } else if (check.kind === 'finite') {
                            if (!Number.isFinite(input.data)) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                addIssueToContext(ctx, {
                                    code: ZodIssueCode.not_finite,
                                    message: check.message,
                                });
                                status.dirty();
                            }
                        } else {
                            util.assertNever(check);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return {
                    status: status.value,
                    value: input.data,
                };
            },
        },
        {
            key: 'gte',
            value: function gte(value, message) {
                return this.setLimit('min', value, true, errorUtil.toString(message));
            },
        },
        {
            key: 'gt',
            value: function gt(value, message) {
                return this.setLimit('min', value, false, errorUtil.toString(message));
            },
        },
        {
            key: 'lte',
            value: function lte(value, message) {
                return this.setLimit('max', value, true, errorUtil.toString(message));
            },
        },
        {
            key: 'lt',
            value: function lt(value, message) {
                return this.setLimit('max', value, false, errorUtil.toString(message));
            },
        },
        {
            key: 'setLimit',
            value: function setLimit(kind, value, inclusive, message) {
                return new _ZodNumber(
                    _object_spread_props(_object_spread({}, this._def), {
                        checks: _to_consumable_array(this._def.checks).concat([
                            {
                                kind: kind,
                                value: value,
                                inclusive: inclusive,
                                message: errorUtil.toString(message),
                            },
                        ]),
                    })
                );
            },
        },
        {
            key: '_addCheck',
            value: function _addCheck(check) {
                return new _ZodNumber(
                    _object_spread_props(_object_spread({}, this._def), {
                        checks: _to_consumable_array(this._def.checks).concat([check]),
                    })
                );
            },
        },
        {
            key: 'int',
            value: function int(message) {
                return this._addCheck({
                    kind: 'int',
                    message: errorUtil.toString(message),
                });
            },
        },
        {
            key: 'positive',
            value: function positive(message) {
                return this._addCheck({
                    kind: 'min',
                    value: 0,
                    inclusive: false,
                    message: errorUtil.toString(message),
                });
            },
        },
        {
            key: 'negative',
            value: function negative(message) {
                return this._addCheck({
                    kind: 'max',
                    value: 0,
                    inclusive: false,
                    message: errorUtil.toString(message),
                });
            },
        },
        {
            key: 'nonpositive',
            value: function nonpositive(message) {
                return this._addCheck({
                    kind: 'max',
                    value: 0,
                    inclusive: true,
                    message: errorUtil.toString(message),
                });
            },
        },
        {
            key: 'nonnegative',
            value: function nonnegative(message) {
                return this._addCheck({
                    kind: 'min',
                    value: 0,
                    inclusive: true,
                    message: errorUtil.toString(message),
                });
            },
        },
        {
            key: 'multipleOf',
            value: function multipleOf(value, message) {
                return this._addCheck({
                    kind: 'multipleOf',
                    value: value,
                    message: errorUtil.toString(message),
                });
            },
        },
        {
            key: 'finite',
            value: function finite(message) {
                return this._addCheck({
                    kind: 'finite',
                    message: errorUtil.toString(message),
                });
            },
        },
        {
            key: 'safe',
            value: function safe(message) {
                return this._addCheck({
                    kind: 'min',
                    inclusive: true,
                    value: Number.MIN_SAFE_INTEGER,
                    message: errorUtil.toString(message),
                })._addCheck({
                    kind: 'max',
                    inclusive: true,
                    value: Number.MAX_SAFE_INTEGER,
                    message: errorUtil.toString(message),
                });
            },
        },
        {
            key: 'minValue',
            get: function get() {
                var min = null;
                var _iteratorNormalCompletion = true,
                    _didIteratorError = false,
                    _iteratorError = undefined;
                try {
                    for (
                        var _iterator = this._def.checks[Symbol.iterator](), _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                        _iteratorNormalCompletion = true
                    ) {
                        var ch = _step.value;
                        if (ch.kind === 'min') {
                            if (min === null || ch.value > min) min = ch.value;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return min;
            },
        },
        {
            key: 'maxValue',
            get: function get() {
                var max = null;
                var _iteratorNormalCompletion = true,
                    _didIteratorError = false,
                    _iteratorError = undefined;
                try {
                    for (
                        var _iterator = this._def.checks[Symbol.iterator](), _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                        _iteratorNormalCompletion = true
                    ) {
                        var ch = _step.value;
                        if (ch.kind === 'max') {
                            if (max === null || ch.value < max) max = ch.value;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return max;
            },
        },
        {
            key: 'isInt',
            get: function get() {
                return !!this._def.checks.find(function (ch) {
                    return ch.kind === 'int' || (ch.kind === 'multipleOf' && util.isInteger(ch.value));
                });
            },
        },
        {
            key: 'isFinite',
            get: function get() {
                var max = null,
                    min = null;
                var _iteratorNormalCompletion = true,
                    _didIteratorError = false,
                    _iteratorError = undefined;
                try {
                    for (
                        var _iterator = this._def.checks[Symbol.iterator](), _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                        _iteratorNormalCompletion = true
                    ) {
                        var ch = _step.value;
                        if (ch.kind === 'finite' || ch.kind === 'int' || ch.kind === 'multipleOf') {
                            return true;
                        } else if (ch.kind === 'min') {
                            if (min === null || ch.value > min) min = ch.value;
                        } else if (ch.kind === 'max') {
                            if (max === null || ch.value < max) max = ch.value;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return Number.isFinite(min) && Number.isFinite(max);
            },
        },
    ]);
    return _ZodNumber;
})(ZodType);
__name(_ZodNumber, 'ZodNumber');
var ZodNumber = _ZodNumber;
ZodNumber.create = function (params) {
    return new ZodNumber(
        _object_spread(
            {
                checks: [],
                typeName: ZodFirstPartyTypeKind.ZodNumber,
                coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
            },
            processCreateParams(params)
        )
    );
};
var _ZodBigInt = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodBigInt, ZodType);
    var _super = _create_super(_ZodBigInt);
    function _ZodBigInt() {
        _class_call_check(this, _ZodBigInt);
        var _this;
        _this = _super.call.apply(_super, [this].concat(Array.prototype.slice.call(arguments)));
        _this.min = _this.gte;
        _this.max = _this.lte;
        return _this;
    }
    _create_class(_ZodBigInt, [
        {
            key: '_parse',
            value: function _parse(input) {
                if (this._def.coerce) {
                    input.data = BigInt(input.data);
                }
                var parsedType = this._getType(input);
                if (parsedType !== ZodParsedType.bigint) {
                    var ctx2 = this._getOrReturnCtx(input);
                    addIssueToContext(ctx2, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.bigint,
                        received: ctx2.parsedType,
                    });
                    return INVALID;
                }
                var ctx = void 0;
                var status = new ParseStatus();
                var _iteratorNormalCompletion = true,
                    _didIteratorError = false,
                    _iteratorError = undefined;
                try {
                    for (
                        var _iterator = this._def.checks[Symbol.iterator](), _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                        _iteratorNormalCompletion = true
                    ) {
                        var check = _step.value;
                        if (check.kind === 'min') {
                            var tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                            if (tooSmall) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                addIssueToContext(ctx, {
                                    code: ZodIssueCode.too_small,
                                    type: 'bigint',
                                    minimum: check.value,
                                    inclusive: check.inclusive,
                                    message: check.message,
                                });
                                status.dirty();
                            }
                        } else if (check.kind === 'max') {
                            var tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                            if (tooBig) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                addIssueToContext(ctx, {
                                    code: ZodIssueCode.too_big,
                                    type: 'bigint',
                                    maximum: check.value,
                                    inclusive: check.inclusive,
                                    message: check.message,
                                });
                                status.dirty();
                            }
                        } else if (check.kind === 'multipleOf') {
                            if (input.data % check.value !== BigInt(0)) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                addIssueToContext(ctx, {
                                    code: ZodIssueCode.not_multiple_of,
                                    multipleOf: check.value,
                                    message: check.message,
                                });
                                status.dirty();
                            }
                        } else {
                            util.assertNever(check);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return {
                    status: status.value,
                    value: input.data,
                };
            },
        },
        {
            key: 'gte',
            value: function gte(value, message) {
                return this.setLimit('min', value, true, errorUtil.toString(message));
            },
        },
        {
            key: 'gt',
            value: function gt(value, message) {
                return this.setLimit('min', value, false, errorUtil.toString(message));
            },
        },
        {
            key: 'lte',
            value: function lte(value, message) {
                return this.setLimit('max', value, true, errorUtil.toString(message));
            },
        },
        {
            key: 'lt',
            value: function lt(value, message) {
                return this.setLimit('max', value, false, errorUtil.toString(message));
            },
        },
        {
            key: 'setLimit',
            value: function setLimit(kind, value, inclusive, message) {
                return new _ZodBigInt(
                    _object_spread_props(_object_spread({}, this._def), {
                        checks: _to_consumable_array(this._def.checks).concat([
                            {
                                kind: kind,
                                value: value,
                                inclusive: inclusive,
                                message: errorUtil.toString(message),
                            },
                        ]),
                    })
                );
            },
        },
        {
            key: '_addCheck',
            value: function _addCheck(check) {
                return new _ZodBigInt(
                    _object_spread_props(_object_spread({}, this._def), {
                        checks: _to_consumable_array(this._def.checks).concat([check]),
                    })
                );
            },
        },
        {
            key: 'positive',
            value: function positive(message) {
                return this._addCheck({
                    kind: 'min',
                    value: BigInt(0),
                    inclusive: false,
                    message: errorUtil.toString(message),
                });
            },
        },
        {
            key: 'negative',
            value: function negative(message) {
                return this._addCheck({
                    kind: 'max',
                    value: BigInt(0),
                    inclusive: false,
                    message: errorUtil.toString(message),
                });
            },
        },
        {
            key: 'nonpositive',
            value: function nonpositive(message) {
                return this._addCheck({
                    kind: 'max',
                    value: BigInt(0),
                    inclusive: true,
                    message: errorUtil.toString(message),
                });
            },
        },
        {
            key: 'nonnegative',
            value: function nonnegative(message) {
                return this._addCheck({
                    kind: 'min',
                    value: BigInt(0),
                    inclusive: true,
                    message: errorUtil.toString(message),
                });
            },
        },
        {
            key: 'multipleOf',
            value: function multipleOf(value, message) {
                return this._addCheck({
                    kind: 'multipleOf',
                    value: value,
                    message: errorUtil.toString(message),
                });
            },
        },
        {
            key: 'minValue',
            get: function get() {
                var min = null;
                var _iteratorNormalCompletion = true,
                    _didIteratorError = false,
                    _iteratorError = undefined;
                try {
                    for (
                        var _iterator = this._def.checks[Symbol.iterator](), _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                        _iteratorNormalCompletion = true
                    ) {
                        var ch = _step.value;
                        if (ch.kind === 'min') {
                            if (min === null || ch.value > min) min = ch.value;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return min;
            },
        },
        {
            key: 'maxValue',
            get: function get() {
                var max = null;
                var _iteratorNormalCompletion = true,
                    _didIteratorError = false,
                    _iteratorError = undefined;
                try {
                    for (
                        var _iterator = this._def.checks[Symbol.iterator](), _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                        _iteratorNormalCompletion = true
                    ) {
                        var ch = _step.value;
                        if (ch.kind === 'max') {
                            if (max === null || ch.value < max) max = ch.value;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return max;
            },
        },
    ]);
    return _ZodBigInt;
})(ZodType);
__name(_ZodBigInt, 'ZodBigInt');
var ZodBigInt = _ZodBigInt;
ZodBigInt.create = function (params) {
    var _a;
    return new ZodBigInt(
        _object_spread(
            {
                checks: [],
                typeName: ZodFirstPartyTypeKind.ZodBigInt,
                coerce:
                    (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0
                        ? _a
                        : false,
            },
            processCreateParams(params)
        )
    );
};
var _ZodBoolean = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodBoolean, ZodType);
    var _super = _create_super(_ZodBoolean);
    function _ZodBoolean() {
        _class_call_check(this, _ZodBoolean);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodBoolean, [
        {
            key: '_parse',
            value: function _parse(input) {
                if (this._def.coerce) {
                    input.data = Boolean(input.data);
                }
                var parsedType = this._getType(input);
                if (parsedType !== ZodParsedType.boolean) {
                    var ctx = this._getOrReturnCtx(input);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.boolean,
                        received: ctx.parsedType,
                    });
                    return INVALID;
                }
                return OK(input.data);
            },
        },
    ]);
    return _ZodBoolean;
})(ZodType);
__name(_ZodBoolean, 'ZodBoolean');
var ZodBoolean = _ZodBoolean;
ZodBoolean.create = function (params) {
    return new ZodBoolean(
        _object_spread(
            {
                typeName: ZodFirstPartyTypeKind.ZodBoolean,
                coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
            },
            processCreateParams(params)
        )
    );
};
var _ZodDate = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodDate, ZodType);
    var _super = _create_super(_ZodDate);
    function _ZodDate() {
        _class_call_check(this, _ZodDate);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodDate, [
        {
            key: '_parse',
            value: function _parse(input) {
                if (this._def.coerce) {
                    input.data = new Date(input.data);
                }
                var parsedType = this._getType(input);
                if (parsedType !== ZodParsedType.date) {
                    var ctx2 = this._getOrReturnCtx(input);
                    addIssueToContext(ctx2, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.date,
                        received: ctx2.parsedType,
                    });
                    return INVALID;
                }
                if (isNaN(input.data.getTime())) {
                    var ctx21 = this._getOrReturnCtx(input);
                    addIssueToContext(ctx21, {
                        code: ZodIssueCode.invalid_date,
                    });
                    return INVALID;
                }
                var status = new ParseStatus();
                var ctx = void 0;
                var _iteratorNormalCompletion = true,
                    _didIteratorError = false,
                    _iteratorError = undefined;
                try {
                    for (
                        var _iterator = this._def.checks[Symbol.iterator](), _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                        _iteratorNormalCompletion = true
                    ) {
                        var check = _step.value;
                        if (check.kind === 'min') {
                            if (input.data.getTime() < check.value) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                addIssueToContext(ctx, {
                                    code: ZodIssueCode.too_small,
                                    message: check.message,
                                    inclusive: true,
                                    exact: false,
                                    minimum: check.value,
                                    type: 'date',
                                });
                                status.dirty();
                            }
                        } else if (check.kind === 'max') {
                            if (input.data.getTime() > check.value) {
                                ctx = this._getOrReturnCtx(input, ctx);
                                addIssueToContext(ctx, {
                                    code: ZodIssueCode.too_big,
                                    message: check.message,
                                    inclusive: true,
                                    exact: false,
                                    maximum: check.value,
                                    type: 'date',
                                });
                                status.dirty();
                            }
                        } else {
                            util.assertNever(check);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return {
                    status: status.value,
                    value: new Date(input.data.getTime()),
                };
            },
        },
        {
            key: '_addCheck',
            value: function _addCheck(check) {
                return new _ZodDate(
                    _object_spread_props(_object_spread({}, this._def), {
                        checks: _to_consumable_array(this._def.checks).concat([check]),
                    })
                );
            },
        },
        {
            key: 'min',
            value: function min(minDate, message) {
                return this._addCheck({
                    kind: 'min',
                    value: minDate.getTime(),
                    message: errorUtil.toString(message),
                });
            },
        },
        {
            key: 'max',
            value: function max(maxDate, message) {
                return this._addCheck({
                    kind: 'max',
                    value: maxDate.getTime(),
                    message: errorUtil.toString(message),
                });
            },
        },
        {
            key: 'minDate',
            get: function get() {
                var min = null;
                var _iteratorNormalCompletion = true,
                    _didIteratorError = false,
                    _iteratorError = undefined;
                try {
                    for (
                        var _iterator = this._def.checks[Symbol.iterator](), _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                        _iteratorNormalCompletion = true
                    ) {
                        var ch = _step.value;
                        if (ch.kind === 'min') {
                            if (min === null || ch.value > min) min = ch.value;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return min != null ? new Date(min) : null;
            },
        },
        {
            key: 'maxDate',
            get: function get() {
                var max = null;
                var _iteratorNormalCompletion = true,
                    _didIteratorError = false,
                    _iteratorError = undefined;
                try {
                    for (
                        var _iterator = this._def.checks[Symbol.iterator](), _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                        _iteratorNormalCompletion = true
                    ) {
                        var ch = _step.value;
                        if (ch.kind === 'max') {
                            if (max === null || ch.value < max) max = ch.value;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return max != null ? new Date(max) : null;
            },
        },
    ]);
    return _ZodDate;
})(ZodType);
__name(_ZodDate, 'ZodDate');
var ZodDate = _ZodDate;
ZodDate.create = function (params) {
    return new ZodDate(
        _object_spread(
            {
                checks: [],
                coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
                typeName: ZodFirstPartyTypeKind.ZodDate,
            },
            processCreateParams(params)
        )
    );
};
var _ZodSymbol = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodSymbol, ZodType);
    var _super = _create_super(_ZodSymbol);
    function _ZodSymbol() {
        _class_call_check(this, _ZodSymbol);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodSymbol, [
        {
            key: '_parse',
            value: function _parse(input) {
                var parsedType = this._getType(input);
                if (parsedType !== ZodParsedType.symbol) {
                    var ctx = this._getOrReturnCtx(input);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.symbol,
                        received: ctx.parsedType,
                    });
                    return INVALID;
                }
                return OK(input.data);
            },
        },
    ]);
    return _ZodSymbol;
})(ZodType);
__name(_ZodSymbol, 'ZodSymbol');
var ZodSymbol = _ZodSymbol;
ZodSymbol.create = function (params) {
    return new ZodSymbol(
        _object_spread(
            {
                typeName: ZodFirstPartyTypeKind.ZodSymbol,
            },
            processCreateParams(params)
        )
    );
};
var _ZodUndefined = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodUndefined, ZodType);
    var _super = _create_super(_ZodUndefined);
    function _ZodUndefined() {
        _class_call_check(this, _ZodUndefined);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodUndefined, [
        {
            key: '_parse',
            value: function _parse(input) {
                var parsedType = this._getType(input);
                if (parsedType !== ZodParsedType.undefined) {
                    var ctx = this._getOrReturnCtx(input);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.undefined,
                        received: ctx.parsedType,
                    });
                    return INVALID;
                }
                return OK(input.data);
            },
        },
    ]);
    return _ZodUndefined;
})(ZodType);
__name(_ZodUndefined, 'ZodUndefined');
var ZodUndefined = _ZodUndefined;
ZodUndefined.create = function (params) {
    return new ZodUndefined(
        _object_spread(
            {
                typeName: ZodFirstPartyTypeKind.ZodUndefined,
            },
            processCreateParams(params)
        )
    );
};
var _ZodNull = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodNull, ZodType);
    var _super = _create_super(_ZodNull);
    function _ZodNull() {
        _class_call_check(this, _ZodNull);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodNull, [
        {
            key: '_parse',
            value: function _parse(input) {
                var parsedType = this._getType(input);
                if (parsedType !== ZodParsedType.null) {
                    var ctx = this._getOrReturnCtx(input);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.null,
                        received: ctx.parsedType,
                    });
                    return INVALID;
                }
                return OK(input.data);
            },
        },
    ]);
    return _ZodNull;
})(ZodType);
__name(_ZodNull, 'ZodNull');
var ZodNull = _ZodNull;
ZodNull.create = function (params) {
    return new ZodNull(
        _object_spread(
            {
                typeName: ZodFirstPartyTypeKind.ZodNull,
            },
            processCreateParams(params)
        )
    );
};
var _ZodAny = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodAny, ZodType);
    var _super = _create_super(_ZodAny);
    function _ZodAny() {
        _class_call_check(this, _ZodAny);
        var _this;
        _this = _super.call.apply(_super, [this].concat(Array.prototype.slice.call(arguments)));
        _this._any = true;
        return _this;
    }
    _create_class(_ZodAny, [
        {
            key: '_parse',
            value: function _parse(input) {
                return OK(input.data);
            },
        },
    ]);
    return _ZodAny;
})(ZodType);
__name(_ZodAny, 'ZodAny');
var ZodAny = _ZodAny;
ZodAny.create = function (params) {
    return new ZodAny(
        _object_spread(
            {
                typeName: ZodFirstPartyTypeKind.ZodAny,
            },
            processCreateParams(params)
        )
    );
};
var _ZodUnknown = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodUnknown, ZodType);
    var _super = _create_super(_ZodUnknown);
    function _ZodUnknown() {
        _class_call_check(this, _ZodUnknown);
        var _this;
        _this = _super.call.apply(_super, [this].concat(Array.prototype.slice.call(arguments)));
        _this._unknown = true;
        return _this;
    }
    _create_class(_ZodUnknown, [
        {
            key: '_parse',
            value: function _parse(input) {
                return OK(input.data);
            },
        },
    ]);
    return _ZodUnknown;
})(ZodType);
__name(_ZodUnknown, 'ZodUnknown');
var ZodUnknown = _ZodUnknown;
ZodUnknown.create = function (params) {
    return new ZodUnknown(
        _object_spread(
            {
                typeName: ZodFirstPartyTypeKind.ZodUnknown,
            },
            processCreateParams(params)
        )
    );
};
var _ZodNever = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodNever, ZodType);
    var _super = _create_super(_ZodNever);
    function _ZodNever() {
        _class_call_check(this, _ZodNever);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodNever, [
        {
            key: '_parse',
            value: function _parse(input) {
                var ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.never,
                    received: ctx.parsedType,
                });
                return INVALID;
            },
        },
    ]);
    return _ZodNever;
})(ZodType);
__name(_ZodNever, 'ZodNever');
var ZodNever = _ZodNever;
ZodNever.create = function (params) {
    return new ZodNever(
        _object_spread(
            {
                typeName: ZodFirstPartyTypeKind.ZodNever,
            },
            processCreateParams(params)
        )
    );
};
var _ZodVoid = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodVoid, ZodType);
    var _super = _create_super(_ZodVoid);
    function _ZodVoid() {
        _class_call_check(this, _ZodVoid);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodVoid, [
        {
            key: '_parse',
            value: function _parse(input) {
                var parsedType = this._getType(input);
                if (parsedType !== ZodParsedType.undefined) {
                    var ctx = this._getOrReturnCtx(input);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.void,
                        received: ctx.parsedType,
                    });
                    return INVALID;
                }
                return OK(input.data);
            },
        },
    ]);
    return _ZodVoid;
})(ZodType);
__name(_ZodVoid, 'ZodVoid');
var ZodVoid = _ZodVoid;
ZodVoid.create = function (params) {
    return new ZodVoid(
        _object_spread(
            {
                typeName: ZodFirstPartyTypeKind.ZodVoid,
            },
            processCreateParams(params)
        )
    );
};
var _ZodArray = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodArray, ZodType);
    var _super = _create_super(_ZodArray);
    function _ZodArray() {
        _class_call_check(this, _ZodArray);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodArray, [
        {
            key: '_parse',
            value: function _parse(input) {
                var _this__processInputParams = this._processInputParams(input),
                    ctx = _this__processInputParams.ctx,
                    status = _this__processInputParams.status;
                var def = this._def;
                if (ctx.parsedType !== ZodParsedType.array) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.array,
                        received: ctx.parsedType,
                    });
                    return INVALID;
                }
                if (def.exactLength !== null) {
                    var tooBig = ctx.data.length > def.exactLength.value;
                    var tooSmall = ctx.data.length < def.exactLength.value;
                    if (tooBig || tooSmall) {
                        addIssueToContext(ctx, {
                            code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
                            minimum: tooSmall ? def.exactLength.value : void 0,
                            maximum: tooBig ? def.exactLength.value : void 0,
                            type: 'array',
                            inclusive: true,
                            exact: true,
                            message: def.exactLength.message,
                        });
                        status.dirty();
                    }
                }
                if (def.minLength !== null) {
                    if (ctx.data.length < def.minLength.value) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_small,
                            minimum: def.minLength.value,
                            type: 'array',
                            inclusive: true,
                            exact: false,
                            message: def.minLength.message,
                        });
                        status.dirty();
                    }
                }
                if (def.maxLength !== null) {
                    if (ctx.data.length > def.maxLength.value) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_big,
                            maximum: def.maxLength.value,
                            type: 'array',
                            inclusive: true,
                            exact: false,
                            message: def.maxLength.message,
                        });
                        status.dirty();
                    }
                }
                if (ctx.common.async) {
                    return Promise.all(
                        _to_consumable_array(ctx.data).map(function (item, i2) {
                            return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i2));
                        })
                    ).then(function (result2) {
                        return ParseStatus.mergeArray(status, result2);
                    });
                }
                var result = _to_consumable_array(ctx.data).map(function (item, i2) {
                    return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i2));
                });
                return ParseStatus.mergeArray(status, result);
            },
        },
        {
            key: 'element',
            get: function get() {
                return this._def.type;
            },
        },
        {
            key: 'min',
            value: function min(minLength, message) {
                return new _ZodArray(
                    _object_spread_props(_object_spread({}, this._def), {
                        minLength: {
                            value: minLength,
                            message: errorUtil.toString(message),
                        },
                    })
                );
            },
        },
        {
            key: 'max',
            value: function max(maxLength, message) {
                return new _ZodArray(
                    _object_spread_props(_object_spread({}, this._def), {
                        maxLength: {
                            value: maxLength,
                            message: errorUtil.toString(message),
                        },
                    })
                );
            },
        },
        {
            key: 'length',
            value: function length(len, message) {
                return new _ZodArray(
                    _object_spread_props(_object_spread({}, this._def), {
                        exactLength: {
                            value: len,
                            message: errorUtil.toString(message),
                        },
                    })
                );
            },
        },
        {
            key: 'nonempty',
            value: function nonempty(message) {
                return this.min(1, message);
            },
        },
    ]);
    return _ZodArray;
})(ZodType);
__name(_ZodArray, 'ZodArray');
var ZodArray = _ZodArray;
ZodArray.create = function (schema, params) {
    return new ZodArray(
        _object_spread(
            {
                type: schema,
                minLength: null,
                maxLength: null,
                exactLength: null,
                typeName: ZodFirstPartyTypeKind.ZodArray,
            },
            processCreateParams(params)
        )
    );
};
function deepPartialify(schema) {
    if (_instanceof(schema, ZodObject)) {
        var newShape = {};
        for (var key in schema.shape) {
            var fieldSchema = schema.shape[key];
            newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
        }
        return new ZodObject(
            _object_spread_props(_object_spread({}, schema._def), {
                shape: function () {
                    return newShape;
                },
            })
        );
    } else if (_instanceof(schema, ZodArray)) {
        return new ZodArray(
            _object_spread_props(_object_spread({}, schema._def), {
                type: deepPartialify(schema.element),
            })
        );
    } else if (_instanceof(schema, ZodOptional)) {
        return ZodOptional.create(deepPartialify(schema.unwrap()));
    } else if (_instanceof(schema, ZodNullable)) {
        return ZodNullable.create(deepPartialify(schema.unwrap()));
    } else if (_instanceof(schema, ZodTuple)) {
        return ZodTuple.create(
            schema.items.map(function (item) {
                return deepPartialify(item);
            })
        );
    } else {
        return schema;
    }
}
__name(deepPartialify, 'deepPartialify');
var _ZodObject = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodObject, ZodType);
    var _super = _create_super(_ZodObject);
    function _ZodObject() {
        _class_call_check(this, _ZodObject);
        var _this;
        _this = _super.call.apply(_super, [this].concat(Array.prototype.slice.call(arguments)));
        _this._cached = null;
        _this.nonstrict = _this.passthrough;
        _this.augment = _this.extend;
        return _this;
    }
    _create_class(_ZodObject, [
        {
            key: '_getCached',
            value: function _getCached() {
                if (this._cached !== null) return this._cached;
                var shape = this._def.shape();
                var keys = util.objectKeys(shape);
                return (this._cached = {
                    shape: shape,
                    keys: keys,
                });
            },
        },
        {
            key: '_parse',
            value: function _parse(input) {
                var parsedType = this._getType(input);
                if (parsedType !== ZodParsedType.object) {
                    var ctx2 = this._getOrReturnCtx(input);
                    addIssueToContext(ctx2, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.object,
                        received: ctx2.parsedType,
                    });
                    return INVALID;
                }
                var _this__processInputParams = this._processInputParams(input),
                    status = _this__processInputParams.status,
                    ctx = _this__processInputParams.ctx;
                var _this__getCached = this._getCached(),
                    shape = _this__getCached.shape,
                    shapeKeys = _this__getCached.keys;
                var extraKeys = [];
                if (!(_instanceof(this._def.catchall, ZodNever) && this._def.unknownKeys === 'strip')) {
                    for (var key in ctx.data) {
                        if (!shapeKeys.includes(key)) {
                            extraKeys.push(key);
                        }
                    }
                }
                var pairs = [];
                var _iteratorNormalCompletion = true,
                    _didIteratorError = false,
                    _iteratorError = undefined;
                try {
                    for (
                        var _iterator = shapeKeys[Symbol.iterator](), _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                        _iteratorNormalCompletion = true
                    ) {
                        var key1 = _step.value;
                        var keyValidator = shape[key1];
                        var value = ctx.data[key1];
                        pairs.push({
                            key: {
                                status: 'valid',
                                value: key1,
                            },
                            value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key1)),
                            alwaysSet: key1 in ctx.data,
                        });
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                if (_instanceof(this._def.catchall, ZodNever)) {
                    var unknownKeys = this._def.unknownKeys;
                    if (unknownKeys === 'passthrough') {
                        var _iteratorNormalCompletion1 = true,
                            _didIteratorError1 = false,
                            _iteratorError1 = undefined;
                        try {
                            for (
                                var _iterator1 = extraKeys[Symbol.iterator](), _step1;
                                !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done);
                                _iteratorNormalCompletion1 = true
                            ) {
                                var key2 = _step1.value;
                                pairs.push({
                                    key: {
                                        status: 'valid',
                                        value: key2,
                                    },
                                    value: {
                                        status: 'valid',
                                        value: ctx.data[key2],
                                    },
                                });
                            }
                        } catch (err) {
                            _didIteratorError1 = true;
                            _iteratorError1 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                    _iterator1.return();
                                }
                            } finally {
                                if (_didIteratorError1) {
                                    throw _iteratorError1;
                                }
                            }
                        }
                    } else if (unknownKeys === 'strict') {
                        if (extraKeys.length > 0) {
                            addIssueToContext(ctx, {
                                code: ZodIssueCode.unrecognized_keys,
                                keys: extraKeys,
                            });
                            status.dirty();
                        }
                    } else if (unknownKeys === 'strip');
                    else {
                        throw new Error('Internal ZodObject error: invalid unknownKeys value.');
                    }
                } else {
                    var catchall = this._def.catchall;
                    var _iteratorNormalCompletion2 = true,
                        _didIteratorError2 = false,
                        _iteratorError2 = undefined;
                    try {
                        for (
                            var _iterator2 = extraKeys[Symbol.iterator](), _step2;
                            !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
                            _iteratorNormalCompletion2 = true
                        ) {
                            var key3 = _step2.value;
                            var value1 = ctx.data[key3];
                            pairs.push({
                                key: {
                                    status: 'valid',
                                    value: key3,
                                },
                                value: catchall._parse(new ParseInputLazyPath(ctx, value1, ctx.path, key3)),
                                alwaysSet: key3 in ctx.data,
                            });
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }
                if (ctx.common.async) {
                    return Promise.resolve()
                        .then(
                            /*#__PURE__*/ _async_to_generator(function () {
                                var syncPairs,
                                    _iteratorNormalCompletion,
                                    _didIteratorError,
                                    _iteratorError,
                                    _iterator,
                                    _step,
                                    pair,
                                    key,
                                    _,
                                    _tmp,
                                    err;
                                return _ts_generator(this, function (_state) {
                                    switch (_state.label) {
                                        case 0:
                                            syncPairs = [];
                                            (_iteratorNormalCompletion = true),
                                                (_didIteratorError = false),
                                                (_iteratorError = undefined);
                                            _state.label = 1;
                                        case 1:
                                            _state.trys.push([1, 7, 8, 9]);
                                            _iterator = pairs[Symbol.iterator]();
                                            _state.label = 2;
                                        case 2:
                                            if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done))
                                                return [3, 6];
                                            pair = _step.value;
                                            return [4, pair.key];
                                        case 3:
                                            key = _state.sent();
                                            _ = syncPairs.push;
                                            _tmp = {
                                                key: key,
                                            };
                                            return [4, pair.value];
                                        case 4:
                                            _.apply(syncPairs, [
                                                ((_tmp.value = _state.sent()), (_tmp.alwaysSet = pair.alwaysSet), _tmp),
                                            ]);
                                            _state.label = 5;
                                        case 5:
                                            _iteratorNormalCompletion = true;
                                            return [3, 2];
                                        case 6:
                                            return [3, 9];
                                        case 7:
                                            err = _state.sent();
                                            _didIteratorError = true;
                                            _iteratorError = err;
                                            return [3, 9];
                                        case 8:
                                            try {
                                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                                    _iterator.return();
                                                }
                                            } finally {
                                                if (_didIteratorError) {
                                                    throw _iteratorError;
                                                }
                                            }
                                            return [7];
                                        case 9:
                                            return [2, syncPairs];
                                    }
                                });
                            })
                        )
                        .then(function (syncPairs) {
                            return ParseStatus.mergeObjectSync(status, syncPairs);
                        });
                } else {
                    return ParseStatus.mergeObjectSync(status, pairs);
                }
            },
        },
        {
            key: 'shape',
            get: function get() {
                return this._def.shape();
            },
        },
        {
            key: 'strict',
            value: function strict(message) {
                var _this = this;
                errorUtil.errToObj;
                return new _ZodObject(
                    _object_spread(
                        _object_spread_props(_object_spread({}, this._def), {
                            unknownKeys: 'strict',
                        }),
                        message !== void 0
                            ? {
                                  errorMap: function (issue, ctx) {
                                      var _a, _b, _c, _d;
                                      var defaultError =
                                          (_c =
                                              (_b = (_a = _this._def).errorMap) === null || _b === void 0
                                                  ? void 0
                                                  : _b.call(_a, issue, ctx).message) !== null && _c !== void 0
                                              ? _c
                                              : ctx.defaultError;
                                      if (issue.code === 'unrecognized_keys')
                                          return {
                                              message:
                                                  (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0
                                                      ? _d
                                                      : defaultError,
                                          };
                                      return {
                                          message: defaultError,
                                      };
                                  },
                              }
                            : {}
                    )
                );
            },
        },
        {
            key: 'strip',
            value: function strip() {
                return new _ZodObject(
                    _object_spread_props(_object_spread({}, this._def), {
                        unknownKeys: 'strip',
                    })
                );
            },
        },
        {
            key: 'passthrough',
            value: function passthrough() {
                return new _ZodObject(
                    _object_spread_props(_object_spread({}, this._def), {
                        unknownKeys: 'passthrough',
                    })
                );
            },
        },
        {
            // const AugmentFactory =
            //   <Def extends ZodObjectDef>(def: Def) =>
            //   <Augmentation extends ZodRawShape>(
            //     augmentation: Augmentation
            //   ): ZodObject<
            //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
            //     Def["unknownKeys"],
            //     Def["catchall"]
            //   > => {
            //     return new ZodObject({
            //       ...def,
            //       shape: () => ({
            //         ...def.shape(),
            //         ...augmentation,
            //       }),
            //     }) as any;
            //   };
            key: 'extend',
            value: function extend(augmentation) {
                var _this = this;
                return new _ZodObject(
                    _object_spread_props(_object_spread({}, this._def), {
                        shape: function () {
                            return _object_spread({}, _this._def.shape(), augmentation);
                        },
                    })
                );
            },
        },
        {
            /**
             * Prior to zod@1.0.12 there was a bug in the
             * inferred type of merged objects. Please
             * upgrade if you are experiencing issues.
             */ key: 'merge',
            value: function merge(merging) {
                var _this = this;
                var merged = new _ZodObject({
                    unknownKeys: merging._def.unknownKeys,
                    catchall: merging._def.catchall,
                    shape: function () {
                        return _object_spread({}, _this._def.shape(), merging._def.shape());
                    },
                    typeName: ZodFirstPartyTypeKind.ZodObject,
                });
                return merged;
            },
        },
        {
            // merge<
            //   Incoming extends AnyZodObject,
            //   Augmentation extends Incoming["shape"],
            //   NewOutput extends {
            //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
            //       ? Augmentation[k]["_output"]
            //       : k extends keyof Output
            //       ? Output[k]
            //       : never;
            //   },
            //   NewInput extends {
            //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
            //       ? Augmentation[k]["_input"]
            //       : k extends keyof Input
            //       ? Input[k]
            //       : never;
            //   }
            // >(
            //   merging: Incoming
            // ): ZodObject<
            //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
            //   Incoming["_def"]["unknownKeys"],
            //   Incoming["_def"]["catchall"],
            //   NewOutput,
            //   NewInput
            // > {
            //   const merged: any = new ZodObject({
            //     unknownKeys: merging._def.unknownKeys,
            //     catchall: merging._def.catchall,
            //     shape: () =>
            //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
            //     typeName: ZodFirstPartyTypeKind.ZodObject,
            //   }) as any;
            //   return merged;
            // }
            key: 'setKey',
            value: function setKey(key, schema) {
                return this.augment(_define_property({}, key, schema));
            },
        },
        {
            // merge<Incoming extends AnyZodObject>(
            //   merging: Incoming
            // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
            // ZodObject<
            //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
            //   Incoming["_def"]["unknownKeys"],
            //   Incoming["_def"]["catchall"]
            // > {
            //   // const mergedShape = objectUtil.mergeShapes(
            //   //   this._def.shape(),
            //   //   merging._def.shape()
            //   // );
            //   const merged: any = new ZodObject({
            //     unknownKeys: merging._def.unknownKeys,
            //     catchall: merging._def.catchall,
            //     shape: () =>
            //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
            //     typeName: ZodFirstPartyTypeKind.ZodObject,
            //   }) as any;
            //   return merged;
            // }
            key: 'catchall',
            value: function catchall(index) {
                return new _ZodObject(
                    _object_spread_props(_object_spread({}, this._def), {
                        catchall: index,
                    })
                );
            },
        },
        {
            key: 'pick',
            value: function pick(mask) {
                var _this = this;
                var shape = {};
                util.objectKeys(mask).forEach(function (key) {
                    if (mask[key] && _this.shape[key]) {
                        shape[key] = _this.shape[key];
                    }
                });
                return new _ZodObject(
                    _object_spread_props(_object_spread({}, this._def), {
                        shape: function () {
                            return shape;
                        },
                    })
                );
            },
        },
        {
            key: 'omit',
            value: function omit(mask) {
                var _this = this;
                var shape = {};
                util.objectKeys(this.shape).forEach(function (key) {
                    if (!mask[key]) {
                        shape[key] = _this.shape[key];
                    }
                });
                return new _ZodObject(
                    _object_spread_props(_object_spread({}, this._def), {
                        shape: function () {
                            return shape;
                        },
                    })
                );
            },
        },
        {
            /**
             * @deprecated
             */ key: 'deepPartial',
            value: function deepPartial() {
                return deepPartialify(this);
            },
        },
        {
            key: 'partial',
            value: function partial(mask) {
                var _this = this;
                var newShape = {};
                util.objectKeys(this.shape).forEach(function (key) {
                    var fieldSchema = _this.shape[key];
                    if (mask && !mask[key]) {
                        newShape[key] = fieldSchema;
                    } else {
                        newShape[key] = fieldSchema.optional();
                    }
                });
                return new _ZodObject(
                    _object_spread_props(_object_spread({}, this._def), {
                        shape: function () {
                            return newShape;
                        },
                    })
                );
            },
        },
        {
            key: 'required',
            value: function required(mask) {
                var _this = this;
                var newShape = {};
                util.objectKeys(this.shape).forEach(function (key) {
                    if (mask && !mask[key]) {
                        newShape[key] = _this.shape[key];
                    } else {
                        var fieldSchema = _this.shape[key];
                        var newField = fieldSchema;
                        while (_instanceof(newField, ZodOptional)) {
                            newField = newField._def.innerType;
                        }
                        newShape[key] = newField;
                    }
                });
                return new _ZodObject(
                    _object_spread_props(_object_spread({}, this._def), {
                        shape: function () {
                            return newShape;
                        },
                    })
                );
            },
        },
        {
            key: 'keyof',
            value: function keyof() {
                return createZodEnum(util.objectKeys(this.shape));
            },
        },
    ]);
    return _ZodObject;
})(ZodType);
__name(_ZodObject, 'ZodObject');
var ZodObject = _ZodObject;
ZodObject.create = function (shape, params) {
    return new ZodObject(
        _object_spread(
            {
                shape: function () {
                    return shape;
                },
                unknownKeys: 'strip',
                catchall: ZodNever.create(),
                typeName: ZodFirstPartyTypeKind.ZodObject,
            },
            processCreateParams(params)
        )
    );
};
ZodObject.strictCreate = function (shape, params) {
    return new ZodObject(
        _object_spread(
            {
                shape: function () {
                    return shape;
                },
                unknownKeys: 'strict',
                catchall: ZodNever.create(),
                typeName: ZodFirstPartyTypeKind.ZodObject,
            },
            processCreateParams(params)
        )
    );
};
ZodObject.lazycreate = function (shape, params) {
    return new ZodObject(
        _object_spread(
            {
                shape: shape,
                unknownKeys: 'strip',
                catchall: ZodNever.create(),
                typeName: ZodFirstPartyTypeKind.ZodObject,
            },
            processCreateParams(params)
        )
    );
};
var _ZodUnion = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodUnion, ZodType);
    var _super = _create_super(_ZodUnion);
    function _ZodUnion() {
        _class_call_check(this, _ZodUnion);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodUnion, [
        {
            key: '_parse',
            value: function _parse(input) {
                var handleResults = function handleResults(results) {
                    var _iteratorNormalCompletion = true,
                        _didIteratorError = false,
                        _iteratorError = undefined;
                    try {
                        for (
                            var _iterator = results[Symbol.iterator](), _step;
                            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                            _iteratorNormalCompletion = true
                        ) {
                            var result = _step.value;
                            if (result.result.status === 'valid') {
                                return result.result;
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    var _iteratorNormalCompletion1 = true,
                        _didIteratorError1 = false,
                        _iteratorError1 = undefined;
                    try {
                        for (
                            var _iterator1 = results[Symbol.iterator](), _step1;
                            !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done);
                            _iteratorNormalCompletion1 = true
                        ) {
                            var result1 = _step1.value;
                            if (result1.result.status === 'dirty') {
                                var _ctx_common_issues;
                                (_ctx_common_issues = ctx.common.issues).push.apply(
                                    _ctx_common_issues,
                                    _to_consumable_array(result1.ctx.common.issues)
                                );
                                return result1.result;
                            }
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally {
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                    var unionErrors = results.map(function (result) {
                        return new ZodError(result.ctx.common.issues);
                    });
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_union,
                        unionErrors: unionErrors,
                    });
                    return INVALID;
                };
                var ctx = this._processInputParams(input).ctx;
                var options = this._def.options;
                __name(handleResults, 'handleResults');
                if (ctx.common.async) {
                    return Promise.all(
                        options.map(
                            (function () {
                                var _ref = _async_to_generator(function (option) {
                                    var childCtx, _tmp;
                                    return _ts_generator(this, function (_state) {
                                        switch (_state.label) {
                                            case 0:
                                                childCtx = _object_spread_props(_object_spread({}, ctx), {
                                                    common: _object_spread_props(_object_spread({}, ctx.common), {
                                                        issues: [],
                                                    }),
                                                    parent: null,
                                                });
                                                _tmp = {};
                                                return [
                                                    4,
                                                    option._parseAsync({
                                                        data: ctx.data,
                                                        path: ctx.path,
                                                        parent: childCtx,
                                                    }),
                                                ];
                                            case 1:
                                                return [
                                                    2,
                                                    ((_tmp.result = _state.sent()), (_tmp.ctx = childCtx), _tmp),
                                                ];
                                        }
                                    });
                                });
                                return function (option) {
                                    return _ref.apply(this, arguments);
                                };
                            })()
                        )
                    ).then(handleResults);
                } else {
                    var dirty = void 0;
                    var issues = [];
                    var _iteratorNormalCompletion = true,
                        _didIteratorError = false,
                        _iteratorError = undefined;
                    try {
                        for (
                            var _iterator = options[Symbol.iterator](), _step;
                            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                            _iteratorNormalCompletion = true
                        ) {
                            var option = _step.value;
                            var childCtx = _object_spread_props(_object_spread({}, ctx), {
                                common: _object_spread_props(_object_spread({}, ctx.common), {
                                    issues: [],
                                }),
                                parent: null,
                            });
                            var result = option._parseSync({
                                data: ctx.data,
                                path: ctx.path,
                                parent: childCtx,
                            });
                            if (result.status === 'valid') {
                                return result;
                            } else if (result.status === 'dirty' && !dirty) {
                                dirty = {
                                    result: result,
                                    ctx: childCtx,
                                };
                            }
                            if (childCtx.common.issues.length) {
                                issues.push(childCtx.common.issues);
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    if (dirty) {
                        var _ctx_common_issues;
                        (_ctx_common_issues = ctx.common.issues).push.apply(
                            _ctx_common_issues,
                            _to_consumable_array(dirty.ctx.common.issues)
                        );
                        return dirty.result;
                    }
                    var unionErrors = issues.map(function (issues2) {
                        return new ZodError(issues2);
                    });
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_union,
                        unionErrors: unionErrors,
                    });
                    return INVALID;
                }
            },
        },
        {
            key: 'options',
            get: function get() {
                return this._def.options;
            },
        },
    ]);
    return _ZodUnion;
})(ZodType);
__name(_ZodUnion, 'ZodUnion');
var ZodUnion = _ZodUnion;
ZodUnion.create = function (types2, params) {
    return new ZodUnion(
        _object_spread(
            {
                options: types2,
                typeName: ZodFirstPartyTypeKind.ZodUnion,
            },
            processCreateParams(params)
        )
    );
};
var getDiscriminator = /* @__PURE__ */ __name(function (type) {
    if (_instanceof(type, ZodLazy)) {
        return getDiscriminator(type.schema);
    } else if (_instanceof(type, ZodEffects)) {
        return getDiscriminator(type.innerType());
    } else if (_instanceof(type, ZodLiteral)) {
        return [type.value];
    } else if (_instanceof(type, ZodEnum)) {
        return type.options;
    } else if (_instanceof(type, ZodNativeEnum)) {
        return Object.keys(type.enum);
    } else if (_instanceof(type, ZodDefault)) {
        return getDiscriminator(type._def.innerType);
    } else if (_instanceof(type, ZodUndefined)) {
        return [void 0];
    } else if (_instanceof(type, ZodNull)) {
        return [null];
    } else {
        return null;
    }
}, 'getDiscriminator');
var _ZodDiscriminatedUnion = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodDiscriminatedUnion, ZodType);
    var _super = _create_super(_ZodDiscriminatedUnion);
    function _ZodDiscriminatedUnion() {
        _class_call_check(this, _ZodDiscriminatedUnion);
        return _super.apply(this, arguments);
    }
    _create_class(
        _ZodDiscriminatedUnion,
        [
            {
                key: '_parse',
                value: function _parse(input) {
                    var ctx = this._processInputParams(input).ctx;
                    if (ctx.parsedType !== ZodParsedType.object) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.invalid_type,
                            expected: ZodParsedType.object,
                            received: ctx.parsedType,
                        });
                        return INVALID;
                    }
                    var discriminator = this.discriminator;
                    var discriminatorValue = ctx.data[discriminator];
                    var option = this.optionsMap.get(discriminatorValue);
                    if (!option) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.invalid_union_discriminator,
                            options: Array.from(this.optionsMap.keys()),
                            path: [discriminator],
                        });
                        return INVALID;
                    }
                    if (ctx.common.async) {
                        return option._parseAsync({
                            data: ctx.data,
                            path: ctx.path,
                            parent: ctx,
                        });
                    } else {
                        return option._parseSync({
                            data: ctx.data,
                            path: ctx.path,
                            parent: ctx,
                        });
                    }
                },
            },
            {
                key: 'discriminator',
                get: function get() {
                    return this._def.discriminator;
                },
            },
            {
                key: 'options',
                get: function get() {
                    return this._def.options;
                },
            },
            {
                key: 'optionsMap',
                get: function get() {
                    return this._def.optionsMap;
                },
            },
        ],
        [
            {
                key: 'create',
                value: /**
                 * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
                 * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
                 * have a different value for each object in the union.
                 * @param discriminator the name of the discriminator property
                 * @param types an array of object schemas
                 * @param params
                 */ function create(discriminator, options, params) {
                    var optionsMap = /* @__PURE__ */ new Map();
                    var _iteratorNormalCompletion = true,
                        _didIteratorError = false,
                        _iteratorError = undefined;
                    try {
                        for (
                            var _iterator = options[Symbol.iterator](), _step;
                            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                            _iteratorNormalCompletion = true
                        ) {
                            var type = _step.value;
                            var discriminatorValues = getDiscriminator(type.shape[discriminator]);
                            if (!discriminatorValues) {
                                throw new Error(
                                    'A discriminator value for key `'.concat(
                                        discriminator,
                                        '` could not be extracted from all schema options'
                                    )
                                );
                            }
                            var _iteratorNormalCompletion1 = true,
                                _didIteratorError1 = false,
                                _iteratorError1 = undefined;
                            try {
                                for (
                                    var _iterator1 = discriminatorValues[Symbol.iterator](), _step1;
                                    !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done);
                                    _iteratorNormalCompletion1 = true
                                ) {
                                    var value = _step1.value;
                                    if (optionsMap.has(value)) {
                                        throw new Error(
                                            'Discriminator property '
                                                .concat(String(discriminator), ' has duplicate value ')
                                                .concat(String(value))
                                        );
                                    }
                                    optionsMap.set(value, type);
                                }
                            } catch (err) {
                                _didIteratorError1 = true;
                                _iteratorError1 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                        _iterator1.return();
                                    }
                                } finally {
                                    if (_didIteratorError1) {
                                        throw _iteratorError1;
                                    }
                                }
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    return new _ZodDiscriminatedUnion(
                        _object_spread(
                            {
                                typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
                                discriminator: discriminator,
                                options: options,
                                optionsMap: optionsMap,
                            },
                            processCreateParams(params)
                        )
                    );
                },
            },
        ]
    );
    return _ZodDiscriminatedUnion;
})(ZodType);
__name(_ZodDiscriminatedUnion, 'ZodDiscriminatedUnion');
var ZodDiscriminatedUnion = _ZodDiscriminatedUnion;
function mergeValues(a2, b2) {
    var aType = getParsedType(a2);
    var bType = getParsedType(b2);
    if (a2 === b2) {
        return {
            valid: true,
            data: a2,
        };
    } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
        var bKeys = util.objectKeys(b2);
        var sharedKeys = util.objectKeys(a2).filter(function (key) {
            return bKeys.indexOf(key) !== -1;
        });
        var newObj = _object_spread({}, a2, b2);
        var _iteratorNormalCompletion = true,
            _didIteratorError = false,
            _iteratorError = undefined;
        try {
            for (
                var _iterator = sharedKeys[Symbol.iterator](), _step;
                !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                _iteratorNormalCompletion = true
            ) {
                var key = _step.value;
                var sharedValue = mergeValues(a2[key], b2[key]);
                if (!sharedValue.valid) {
                    return {
                        valid: false,
                    };
                }
                newObj[key] = sharedValue.data;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return {
            valid: true,
            data: newObj,
        };
    } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
        if (a2.length !== b2.length) {
            return {
                valid: false,
            };
        }
        var newArray = [];
        for (var index = 0; index < a2.length; index++) {
            var itemA = a2[index];
            var itemB = b2[index];
            var sharedValue1 = mergeValues(itemA, itemB);
            if (!sharedValue1.valid) {
                return {
                    valid: false,
                };
            }
            newArray.push(sharedValue1.data);
        }
        return {
            valid: true,
            data: newArray,
        };
    } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a2 === +b2) {
        return {
            valid: true,
            data: a2,
        };
    } else {
        return {
            valid: false,
        };
    }
}
__name(mergeValues, 'mergeValues');
var _ZodIntersection = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodIntersection, ZodType);
    var _super = _create_super(_ZodIntersection);
    function _ZodIntersection() {
        _class_call_check(this, _ZodIntersection);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodIntersection, [
        {
            key: '_parse',
            value: function _parse(input) {
                var _this__processInputParams = this._processInputParams(input),
                    status = _this__processInputParams.status,
                    ctx = _this__processInputParams.ctx;
                var handleParsed = /* @__PURE__ */ __name(function (parsedLeft, parsedRight) {
                    if (isAborted(parsedLeft) || isAborted(parsedRight)) {
                        return INVALID;
                    }
                    var merged = mergeValues(parsedLeft.value, parsedRight.value);
                    if (!merged.valid) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.invalid_intersection_types,
                        });
                        return INVALID;
                    }
                    if (isDirty(parsedLeft) || isDirty(parsedRight)) {
                        status.dirty();
                    }
                    return {
                        status: status.value,
                        value: merged.data,
                    };
                }, 'handleParsed');
                if (ctx.common.async) {
                    return Promise.all([
                        this._def.left._parseAsync({
                            data: ctx.data,
                            path: ctx.path,
                            parent: ctx,
                        }),
                        this._def.right._parseAsync({
                            data: ctx.data,
                            path: ctx.path,
                            parent: ctx,
                        }),
                    ]).then(function (param) {
                        var _param = _sliced_to_array(param, 2),
                            left = _param[0],
                            right = _param[1];
                        return handleParsed(left, right);
                    });
                } else {
                    return handleParsed(
                        this._def.left._parseSync({
                            data: ctx.data,
                            path: ctx.path,
                            parent: ctx,
                        }),
                        this._def.right._parseSync({
                            data: ctx.data,
                            path: ctx.path,
                            parent: ctx,
                        })
                    );
                }
            },
        },
    ]);
    return _ZodIntersection;
})(ZodType);
__name(_ZodIntersection, 'ZodIntersection');
var ZodIntersection = _ZodIntersection;
ZodIntersection.create = function (left, right, params) {
    return new ZodIntersection(
        _object_spread(
            {
                left: left,
                right: right,
                typeName: ZodFirstPartyTypeKind.ZodIntersection,
            },
            processCreateParams(params)
        )
    );
};
var _ZodTuple = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodTuple, ZodType);
    var _super = _create_super(_ZodTuple);
    function _ZodTuple() {
        _class_call_check(this, _ZodTuple);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodTuple, [
        {
            key: '_parse',
            value: function _parse(input) {
                var _this = this;
                var _this__processInputParams = this._processInputParams(input),
                    status = _this__processInputParams.status,
                    ctx = _this__processInputParams.ctx;
                if (ctx.parsedType !== ZodParsedType.array) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.array,
                        received: ctx.parsedType,
                    });
                    return INVALID;
                }
                if (ctx.data.length < this._def.items.length) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: this._def.items.length,
                        inclusive: true,
                        exact: false,
                        type: 'array',
                    });
                    return INVALID;
                }
                var rest = this._def.rest;
                if (!rest && ctx.data.length > this._def.items.length) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: this._def.items.length,
                        inclusive: true,
                        exact: false,
                        type: 'array',
                    });
                    status.dirty();
                }
                var items = _to_consumable_array(ctx.data)
                    .map(function (item, itemIndex) {
                        var schema = _this._def.items[itemIndex] || _this._def.rest;
                        if (!schema) return null;
                        return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
                    })
                    .filter(function (x) {
                        return !!x;
                    });
                if (ctx.common.async) {
                    return Promise.all(items).then(function (results) {
                        return ParseStatus.mergeArray(status, results);
                    });
                } else {
                    return ParseStatus.mergeArray(status, items);
                }
            },
        },
        {
            key: 'items',
            get: function get() {
                return this._def.items;
            },
        },
        {
            key: 'rest',
            value: function rest(rest) {
                return new _ZodTuple(
                    _object_spread_props(_object_spread({}, this._def), {
                        rest: rest,
                    })
                );
            },
        },
    ]);
    return _ZodTuple;
})(ZodType);
__name(_ZodTuple, 'ZodTuple');
var ZodTuple = _ZodTuple;
ZodTuple.create = function (schemas, params) {
    if (!Array.isArray(schemas)) {
        throw new Error('You must pass an array of schemas to z.tuple([ ... ])');
    }
    return new ZodTuple(
        _object_spread(
            {
                items: schemas,
                typeName: ZodFirstPartyTypeKind.ZodTuple,
                rest: null,
            },
            processCreateParams(params)
        )
    );
};
var _ZodRecord = /*#__PURE__*/ (function (ZodType1) {
    _inherits(_ZodRecord, ZodType1);
    var _super = _create_super(_ZodRecord);
    function _ZodRecord() {
        _class_call_check(this, _ZodRecord);
        return _super.apply(this, arguments);
    }
    _create_class(
        _ZodRecord,
        [
            {
                key: 'keySchema',
                get: function get() {
                    return this._def.keyType;
                },
            },
            {
                key: 'valueSchema',
                get: function get() {
                    return this._def.valueType;
                },
            },
            {
                key: '_parse',
                value: function _parse(input) {
                    var _this__processInputParams = this._processInputParams(input),
                        status = _this__processInputParams.status,
                        ctx = _this__processInputParams.ctx;
                    if (ctx.parsedType !== ZodParsedType.object) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.invalid_type,
                            expected: ZodParsedType.object,
                            received: ctx.parsedType,
                        });
                        return INVALID;
                    }
                    var pairs = [];
                    var keyType = this._def.keyType;
                    var valueType = this._def.valueType;
                    for (var key in ctx.data) {
                        pairs.push({
                            key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
                            value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
                        });
                    }
                    if (ctx.common.async) {
                        return ParseStatus.mergeObjectAsync(status, pairs);
                    } else {
                        return ParseStatus.mergeObjectSync(status, pairs);
                    }
                },
            },
            {
                key: 'element',
                get: function get() {
                    return this._def.valueType;
                },
            },
        ],
        [
            {
                key: 'create',
                value: function create(first, second, third) {
                    if (_instanceof(second, ZodType)) {
                        return new _ZodRecord(
                            _object_spread(
                                {
                                    keyType: first,
                                    valueType: second,
                                    typeName: ZodFirstPartyTypeKind.ZodRecord,
                                },
                                processCreateParams(third)
                            )
                        );
                    }
                    return new _ZodRecord(
                        _object_spread(
                            {
                                keyType: ZodString.create(),
                                valueType: first,
                                typeName: ZodFirstPartyTypeKind.ZodRecord,
                            },
                            processCreateParams(second)
                        )
                    );
                },
            },
        ]
    );
    return _ZodRecord;
})(ZodType);
__name(_ZodRecord, 'ZodRecord');
var ZodRecord = _ZodRecord;
var _ZodMap = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodMap, ZodType);
    var _super = _create_super(_ZodMap);
    function _ZodMap() {
        _class_call_check(this, _ZodMap);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodMap, [
        {
            key: 'keySchema',
            get: function get() {
                return this._def.keyType;
            },
        },
        {
            key: 'valueSchema',
            get: function get() {
                return this._def.valueType;
            },
        },
        {
            key: '_parse',
            value: function _parse(input) {
                var _this__processInputParams = this._processInputParams(input),
                    status = _this__processInputParams.status,
                    ctx = _this__processInputParams.ctx;
                if (ctx.parsedType !== ZodParsedType.map) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.map,
                        received: ctx.parsedType,
                    });
                    return INVALID;
                }
                var keyType = this._def.keyType;
                var valueType = this._def.valueType;
                var pairs = _to_consumable_array(ctx.data.entries()).map(function (param, index) {
                    var _param = _sliced_to_array(param, 2),
                        key = _param[0],
                        value = _param[1];
                    return {
                        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, 'key'])),
                        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, 'value'])),
                    };
                });
                if (ctx.common.async) {
                    var finalMap = /* @__PURE__ */ new Map();
                    return Promise.resolve().then(
                        /*#__PURE__*/ _async_to_generator(function () {
                            var _iteratorNormalCompletion,
                                _didIteratorError,
                                _iteratorError,
                                _iterator,
                                _step,
                                pair,
                                key,
                                value,
                                err;
                            return _ts_generator(this, function (_state) {
                                switch (_state.label) {
                                    case 0:
                                        (_iteratorNormalCompletion = true),
                                            (_didIteratorError = false),
                                            (_iteratorError = undefined);
                                        _state.label = 1;
                                    case 1:
                                        _state.trys.push([1, 7, 8, 9]);
                                        _iterator = pairs[Symbol.iterator]();
                                        _state.label = 2;
                                    case 2:
                                        if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done))
                                            return [3, 6];
                                        pair = _step.value;
                                        return [4, pair.key];
                                    case 3:
                                        key = _state.sent();
                                        return [4, pair.value];
                                    case 4:
                                        value = _state.sent();
                                        if (key.status === 'aborted' || value.status === 'aborted') {
                                            return [2, INVALID];
                                        }
                                        if (key.status === 'dirty' || value.status === 'dirty') {
                                            status.dirty();
                                        }
                                        finalMap.set(key.value, value.value);
                                        _state.label = 5;
                                    case 5:
                                        _iteratorNormalCompletion = true;
                                        return [3, 2];
                                    case 6:
                                        return [3, 9];
                                    case 7:
                                        err = _state.sent();
                                        _didIteratorError = true;
                                        _iteratorError = err;
                                        return [3, 9];
                                    case 8:
                                        try {
                                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                                _iterator.return();
                                            }
                                        } finally {
                                            if (_didIteratorError) {
                                                throw _iteratorError;
                                            }
                                        }
                                        return [7];
                                    case 9:
                                        return [
                                            2,
                                            {
                                                status: status.value,
                                                value: finalMap,
                                            },
                                        ];
                                }
                            });
                        })
                    );
                } else {
                    var finalMap1 = /* @__PURE__ */ new Map();
                    var _iteratorNormalCompletion = true,
                        _didIteratorError = false,
                        _iteratorError = undefined;
                    try {
                        for (
                            var _iterator = pairs[Symbol.iterator](), _step;
                            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                            _iteratorNormalCompletion = true
                        ) {
                            var pair = _step.value;
                            var key = pair.key;
                            var value = pair.value;
                            if (key.status === 'aborted' || value.status === 'aborted') {
                                return INVALID;
                            }
                            if (key.status === 'dirty' || value.status === 'dirty') {
                                status.dirty();
                            }
                            finalMap1.set(key.value, value.value);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    return {
                        status: status.value,
                        value: finalMap1,
                    };
                }
            },
        },
    ]);
    return _ZodMap;
})(ZodType);
__name(_ZodMap, 'ZodMap');
var ZodMap = _ZodMap;
ZodMap.create = function (keyType, valueType, params) {
    return new ZodMap(
        _object_spread(
            {
                valueType: valueType,
                keyType: keyType,
                typeName: ZodFirstPartyTypeKind.ZodMap,
            },
            processCreateParams(params)
        )
    );
};
var _ZodSet = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodSet, ZodType);
    var _super = _create_super(_ZodSet);
    function _ZodSet() {
        _class_call_check(this, _ZodSet);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodSet, [
        {
            key: '_parse',
            value: function _parse(input) {
                var finalizeSet = function finalizeSet(elements2) {
                    var parsedSet = /* @__PURE__ */ new Set();
                    var _iteratorNormalCompletion = true,
                        _didIteratorError = false,
                        _iteratorError = undefined;
                    try {
                        for (
                            var _iterator = elements2[Symbol.iterator](), _step;
                            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                            _iteratorNormalCompletion = true
                        ) {
                            var element = _step.value;
                            if (element.status === 'aborted') return INVALID;
                            if (element.status === 'dirty') status.dirty();
                            parsedSet.add(element.value);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    return {
                        status: status.value,
                        value: parsedSet,
                    };
                };
                var _this__processInputParams = this._processInputParams(input),
                    status = _this__processInputParams.status,
                    ctx = _this__processInputParams.ctx;
                if (ctx.parsedType !== ZodParsedType.set) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.set,
                        received: ctx.parsedType,
                    });
                    return INVALID;
                }
                var def = this._def;
                if (def.minSize !== null) {
                    if (ctx.data.size < def.minSize.value) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_small,
                            minimum: def.minSize.value,
                            type: 'set',
                            inclusive: true,
                            exact: false,
                            message: def.minSize.message,
                        });
                        status.dirty();
                    }
                }
                if (def.maxSize !== null) {
                    if (ctx.data.size > def.maxSize.value) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_big,
                            maximum: def.maxSize.value,
                            type: 'set',
                            inclusive: true,
                            exact: false,
                            message: def.maxSize.message,
                        });
                        status.dirty();
                    }
                }
                var valueType = this._def.valueType;
                __name(finalizeSet, 'finalizeSet');
                var elements = _to_consumable_array(ctx.data.values()).map(function (item, i2) {
                    return valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i2));
                });
                if (ctx.common.async) {
                    return Promise.all(elements).then(function (elements2) {
                        return finalizeSet(elements2);
                    });
                } else {
                    return finalizeSet(elements);
                }
            },
        },
        {
            key: 'min',
            value: function min(minSize, message) {
                return new _ZodSet(
                    _object_spread_props(_object_spread({}, this._def), {
                        minSize: {
                            value: minSize,
                            message: errorUtil.toString(message),
                        },
                    })
                );
            },
        },
        {
            key: 'max',
            value: function max(maxSize, message) {
                return new _ZodSet(
                    _object_spread_props(_object_spread({}, this._def), {
                        maxSize: {
                            value: maxSize,
                            message: errorUtil.toString(message),
                        },
                    })
                );
            },
        },
        {
            key: 'size',
            value: function size(size, message) {
                return this.min(size, message).max(size, message);
            },
        },
        {
            key: 'nonempty',
            value: function nonempty(message) {
                return this.min(1, message);
            },
        },
    ]);
    return _ZodSet;
})(ZodType);
__name(_ZodSet, 'ZodSet');
var ZodSet = _ZodSet;
ZodSet.create = function (valueType, params) {
    return new ZodSet(
        _object_spread(
            {
                valueType: valueType,
                minSize: null,
                maxSize: null,
                typeName: ZodFirstPartyTypeKind.ZodSet,
            },
            processCreateParams(params)
        )
    );
};
var _ZodFunction = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodFunction, ZodType);
    var _super = _create_super(_ZodFunction);
    function _ZodFunction() {
        _class_call_check(this, _ZodFunction);
        var _this;
        _this = _super.call.apply(_super, [this].concat(Array.prototype.slice.call(arguments)));
        _this.validate = _this.implement;
        return _this;
    }
    _create_class(
        _ZodFunction,
        [
            {
                key: '_parse',
                value: function _parse(input) {
                    var makeArgsIssue = function makeArgsIssue(args, error) {
                        return makeIssue({
                            data: args,
                            path: ctx.path,
                            errorMaps: [
                                ctx.common.contextualErrorMap,
                                ctx.schemaErrorMap,
                                getErrorMap(),
                                errorMap,
                            ].filter(function (x) {
                                return !!x;
                            }),
                            issueData: {
                                code: ZodIssueCode.invalid_arguments,
                                argumentsError: error,
                            },
                        });
                    };
                    var makeReturnsIssue = function makeReturnsIssue(returns, error) {
                        return makeIssue({
                            data: returns,
                            path: ctx.path,
                            errorMaps: [
                                ctx.common.contextualErrorMap,
                                ctx.schemaErrorMap,
                                getErrorMap(),
                                errorMap,
                            ].filter(function (x) {
                                return !!x;
                            }),
                            issueData: {
                                code: ZodIssueCode.invalid_return_type,
                                returnTypeError: error,
                            },
                        });
                    };
                    var ctx = this._processInputParams(input).ctx;
                    if (ctx.parsedType !== ZodParsedType.function) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.invalid_type,
                            expected: ZodParsedType.function,
                            received: ctx.parsedType,
                        });
                        return INVALID;
                    }
                    __name(makeArgsIssue, 'makeArgsIssue');
                    __name(makeReturnsIssue, 'makeReturnsIssue');
                    var params = {
                        errorMap: ctx.common.contextualErrorMap,
                    };
                    var fn = ctx.data;
                    if (_instanceof(this._def.returns, ZodPromise)) {
                        var me = this;
                        return OK(
                            /*#__PURE__*/ _async_to_generator(function () {
                                var _len, args, _key, error, parsedArgs, result, parsedReturns;
                                var _arguments = arguments;
                                return _ts_generator(this, function (_state) {
                                    switch (_state.label) {
                                        case 0:
                                            for (
                                                _len = _arguments.length, args = new Array(_len), _key = 0;
                                                _key < _len;
                                                _key++
                                            ) {
                                                args[_key] = _arguments[_key];
                                            }
                                            error = new ZodError([]);
                                            return [
                                                4,
                                                me._def.args.parseAsync(args, params).catch(function (e2) {
                                                    error.addIssue(makeArgsIssue(args, e2));
                                                    throw error;
                                                }),
                                            ];
                                        case 1:
                                            parsedArgs = _state.sent();
                                            return [4, Reflect.apply(fn, this, parsedArgs)];
                                        case 2:
                                            result = _state.sent();
                                            return [
                                                4,
                                                me._def.returns._def.type
                                                    .parseAsync(result, params)
                                                    .catch(function (e2) {
                                                        error.addIssue(makeReturnsIssue(result, e2));
                                                        throw error;
                                                    }),
                                            ];
                                        case 3:
                                            parsedReturns = _state.sent();
                                            return [2, parsedReturns];
                                    }
                                });
                            })
                        );
                    } else {
                        var me1 = this;
                        return OK(function () {
                            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                                args[_key] = arguments[_key];
                            }
                            var parsedArgs = me1._def.args.safeParse(args, params);
                            if (!parsedArgs.success) {
                                throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
                            }
                            var result = Reflect.apply(fn, this, parsedArgs.data);
                            var parsedReturns = me1._def.returns.safeParse(result, params);
                            if (!parsedReturns.success) {
                                throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
                            }
                            return parsedReturns.data;
                        });
                    }
                },
            },
            {
                key: 'parameters',
                value: function parameters() {
                    return this._def.args;
                },
            },
            {
                key: 'returnType',
                value: function returnType() {
                    return this._def.returns;
                },
            },
            {
                key: 'args',
                value: function args() {
                    for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
                        items[_key] = arguments[_key];
                    }
                    return new _ZodFunction(
                        _object_spread_props(_object_spread({}, this._def), {
                            args: ZodTuple.create(items).rest(ZodUnknown.create()),
                        })
                    );
                },
            },
            {
                key: 'returns',
                value: function returns(returnType) {
                    return new _ZodFunction(
                        _object_spread_props(_object_spread({}, this._def), {
                            returns: returnType,
                        })
                    );
                },
            },
            {
                key: 'implement',
                value: function implement(func) {
                    var validatedFunc = this.parse(func);
                    return validatedFunc;
                },
            },
            {
                key: 'strictImplement',
                value: function strictImplement(func) {
                    var validatedFunc = this.parse(func);
                    return validatedFunc;
                },
            },
        ],
        [
            {
                key: 'create',
                value: function create(args, returns, params) {
                    return new _ZodFunction(
                        _object_spread(
                            {
                                args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
                                returns: returns || ZodUnknown.create(),
                                typeName: ZodFirstPartyTypeKind.ZodFunction,
                            },
                            processCreateParams(params)
                        )
                    );
                },
            },
        ]
    );
    return _ZodFunction;
})(ZodType);
__name(_ZodFunction, 'ZodFunction');
var ZodFunction = _ZodFunction;
var _ZodLazy = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodLazy, ZodType);
    var _super = _create_super(_ZodLazy);
    function _ZodLazy() {
        _class_call_check(this, _ZodLazy);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodLazy, [
        {
            key: 'schema',
            get: function get() {
                return this._def.getter();
            },
        },
        {
            key: '_parse',
            value: function _parse(input) {
                var ctx = this._processInputParams(input).ctx;
                var lazySchema = this._def.getter();
                return lazySchema._parse({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
            },
        },
    ]);
    return _ZodLazy;
})(ZodType);
__name(_ZodLazy, 'ZodLazy');
var ZodLazy = _ZodLazy;
ZodLazy.create = function (getter, params) {
    return new ZodLazy(
        _object_spread(
            {
                getter: getter,
                typeName: ZodFirstPartyTypeKind.ZodLazy,
            },
            processCreateParams(params)
        )
    );
};
var _ZodLiteral = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodLiteral, ZodType);
    var _super = _create_super(_ZodLiteral);
    function _ZodLiteral() {
        _class_call_check(this, _ZodLiteral);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodLiteral, [
        {
            key: '_parse',
            value: function _parse(input) {
                if (input.data !== this._def.value) {
                    var ctx = this._getOrReturnCtx(input);
                    addIssueToContext(ctx, {
                        received: ctx.data,
                        code: ZodIssueCode.invalid_literal,
                        expected: this._def.value,
                    });
                    return INVALID;
                }
                return {
                    status: 'valid',
                    value: input.data,
                };
            },
        },
        {
            key: 'value',
            get: function get() {
                return this._def.value;
            },
        },
    ]);
    return _ZodLiteral;
})(ZodType);
__name(_ZodLiteral, 'ZodLiteral');
var ZodLiteral = _ZodLiteral;
ZodLiteral.create = function (value, params) {
    return new ZodLiteral(
        _object_spread(
            {
                value: value,
                typeName: ZodFirstPartyTypeKind.ZodLiteral,
            },
            processCreateParams(params)
        )
    );
};
function createZodEnum(values, params) {
    return new ZodEnum(
        _object_spread(
            {
                values: values,
                typeName: ZodFirstPartyTypeKind.ZodEnum,
            },
            processCreateParams(params)
        )
    );
}
__name(createZodEnum, 'createZodEnum');
var _ZodEnum = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodEnum, ZodType);
    var _super = _create_super(_ZodEnum);
    function _ZodEnum() {
        _class_call_check(this, _ZodEnum);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodEnum, [
        {
            key: '_parse',
            value: function _parse(input) {
                if (typeof input.data !== 'string') {
                    var ctx = this._getOrReturnCtx(input);
                    var expectedValues = this._def.values;
                    addIssueToContext(ctx, {
                        expected: util.joinValues(expectedValues),
                        received: ctx.parsedType,
                        code: ZodIssueCode.invalid_type,
                    });
                    return INVALID;
                }
                if (this._def.values.indexOf(input.data) === -1) {
                    var ctx1 = this._getOrReturnCtx(input);
                    var expectedValues1 = this._def.values;
                    addIssueToContext(ctx1, {
                        received: ctx1.data,
                        code: ZodIssueCode.invalid_enum_value,
                        options: expectedValues1,
                    });
                    return INVALID;
                }
                return OK(input.data);
            },
        },
        {
            key: 'options',
            get: function get() {
                return this._def.values;
            },
        },
        {
            key: 'enum',
            get: function get() {
                var enumValues = {};
                var _iteratorNormalCompletion = true,
                    _didIteratorError = false,
                    _iteratorError = undefined;
                try {
                    for (
                        var _iterator = this._def.values[Symbol.iterator](), _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                        _iteratorNormalCompletion = true
                    ) {
                        var val = _step.value;
                        enumValues[val] = val;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return enumValues;
            },
        },
        {
            key: 'Values',
            get: function get() {
                var enumValues = {};
                var _iteratorNormalCompletion = true,
                    _didIteratorError = false,
                    _iteratorError = undefined;
                try {
                    for (
                        var _iterator = this._def.values[Symbol.iterator](), _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                        _iteratorNormalCompletion = true
                    ) {
                        var val = _step.value;
                        enumValues[val] = val;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return enumValues;
            },
        },
        {
            key: 'Enum',
            get: function get() {
                var enumValues = {};
                var _iteratorNormalCompletion = true,
                    _didIteratorError = false,
                    _iteratorError = undefined;
                try {
                    for (
                        var _iterator = this._def.values[Symbol.iterator](), _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                        _iteratorNormalCompletion = true
                    ) {
                        var val = _step.value;
                        enumValues[val] = val;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return enumValues;
            },
        },
        {
            key: 'extract',
            value: function extract(values) {
                return _ZodEnum.create(values);
            },
        },
        {
            key: 'exclude',
            value: function exclude(values) {
                return _ZodEnum.create(
                    this.options.filter(function (opt) {
                        return !values.includes(opt);
                    })
                );
            },
        },
    ]);
    return _ZodEnum;
})(ZodType);
__name(_ZodEnum, 'ZodEnum');
var ZodEnum = _ZodEnum;
ZodEnum.create = createZodEnum;
var _ZodNativeEnum = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodNativeEnum, ZodType);
    var _super = _create_super(_ZodNativeEnum);
    function _ZodNativeEnum() {
        _class_call_check(this, _ZodNativeEnum);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodNativeEnum, [
        {
            key: '_parse',
            value: function _parse(input) {
                var nativeEnumValues = util.getValidEnumValues(this._def.values);
                var ctx = this._getOrReturnCtx(input);
                if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
                    var expectedValues = util.objectValues(nativeEnumValues);
                    addIssueToContext(ctx, {
                        expected: util.joinValues(expectedValues),
                        received: ctx.parsedType,
                        code: ZodIssueCode.invalid_type,
                    });
                    return INVALID;
                }
                if (nativeEnumValues.indexOf(input.data) === -1) {
                    var expectedValues1 = util.objectValues(nativeEnumValues);
                    addIssueToContext(ctx, {
                        received: ctx.data,
                        code: ZodIssueCode.invalid_enum_value,
                        options: expectedValues1,
                    });
                    return INVALID;
                }
                return OK(input.data);
            },
        },
        {
            key: 'enum',
            get: function get() {
                return this._def.values;
            },
        },
    ]);
    return _ZodNativeEnum;
})(ZodType);
__name(_ZodNativeEnum, 'ZodNativeEnum');
var ZodNativeEnum = _ZodNativeEnum;
ZodNativeEnum.create = function (values, params) {
    return new ZodNativeEnum(
        _object_spread(
            {
                values: values,
                typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
            },
            processCreateParams(params)
        )
    );
};
var _ZodPromise = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodPromise, ZodType);
    var _super = _create_super(_ZodPromise);
    function _ZodPromise() {
        _class_call_check(this, _ZodPromise);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodPromise, [
        {
            key: 'unwrap',
            value: function unwrap() {
                return this._def.type;
            },
        },
        {
            key: '_parse',
            value: function _parse(input) {
                var _this = this;
                var ctx = this._processInputParams(input).ctx;
                if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.promise,
                        received: ctx.parsedType,
                    });
                    return INVALID;
                }
                var promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
                return OK(
                    promisified.then(function (data) {
                        return _this._def.type.parseAsync(data, {
                            path: ctx.path,
                            errorMap: ctx.common.contextualErrorMap,
                        });
                    })
                );
            },
        },
    ]);
    return _ZodPromise;
})(ZodType);
__name(_ZodPromise, 'ZodPromise');
var ZodPromise = _ZodPromise;
ZodPromise.create = function (schema, params) {
    return new ZodPromise(
        _object_spread(
            {
                type: schema,
                typeName: ZodFirstPartyTypeKind.ZodPromise,
            },
            processCreateParams(params)
        )
    );
};
var _ZodEffects = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodEffects, ZodType);
    var _super = _create_super(_ZodEffects);
    function _ZodEffects() {
        _class_call_check(this, _ZodEffects);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodEffects, [
        {
            key: 'innerType',
            value: function innerType() {
                return this._def.schema;
            },
        },
        {
            key: 'sourceType',
            value: function sourceType() {
                return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects
                    ? this._def.schema.sourceType()
                    : this._def.schema;
            },
        },
        {
            key: '_parse',
            value: function _parse(input) {
                var _this = this;
                var _this__processInputParams = this._processInputParams(input),
                    status = _this__processInputParams.status,
                    ctx = _this__processInputParams.ctx;
                var effect = this._def.effect || null;
                var checkCtx = {
                    addIssue: function (arg) {
                        addIssueToContext(ctx, arg);
                        if (arg.fatal) {
                            status.abort();
                        } else {
                            status.dirty();
                        }
                    },
                    get path() {
                        return ctx.path;
                    },
                };
                checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
                if (effect.type === 'preprocess') {
                    var processed = effect.transform(ctx.data, checkCtx);
                    if (ctx.common.issues.length) {
                        return {
                            status: 'dirty',
                            value: ctx.data,
                        };
                    }
                    if (ctx.common.async) {
                        return Promise.resolve(processed).then(function (processed2) {
                            return _this._def.schema._parseAsync({
                                data: processed2,
                                path: ctx.path,
                                parent: ctx,
                            });
                        });
                    } else {
                        return this._def.schema._parseSync({
                            data: processed,
                            path: ctx.path,
                            parent: ctx,
                        });
                    }
                }
                if (effect.type === 'refinement') {
                    var executeRefinement = /* @__PURE__ */ __name(function (acc) {
                        var result = effect.refinement(acc, checkCtx);
                        if (ctx.common.async) {
                            return Promise.resolve(result);
                        }
                        if (_instanceof(result, Promise)) {
                            throw new Error(
                                'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.'
                            );
                        }
                        return acc;
                    }, 'executeRefinement');
                    if (ctx.common.async === false) {
                        var inner = this._def.schema._parseSync({
                            data: ctx.data,
                            path: ctx.path,
                            parent: ctx,
                        });
                        if (inner.status === 'aborted') return INVALID;
                        if (inner.status === 'dirty') status.dirty();
                        executeRefinement(inner.value);
                        return {
                            status: status.value,
                            value: inner.value,
                        };
                    } else {
                        return this._def.schema
                            ._parseAsync({
                                data: ctx.data,
                                path: ctx.path,
                                parent: ctx,
                            })
                            .then(function (inner) {
                                if (inner.status === 'aborted') return INVALID;
                                if (inner.status === 'dirty') status.dirty();
                                return executeRefinement(inner.value).then(function () {
                                    return {
                                        status: status.value,
                                        value: inner.value,
                                    };
                                });
                            });
                    }
                }
                if (effect.type === 'transform') {
                    if (ctx.common.async === false) {
                        var base = this._def.schema._parseSync({
                            data: ctx.data,
                            path: ctx.path,
                            parent: ctx,
                        });
                        if (!isValid(base)) return base;
                        var result = effect.transform(base.value, checkCtx);
                        if (_instanceof(result, Promise)) {
                            throw new Error(
                                'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.'
                            );
                        }
                        return {
                            status: status.value,
                            value: result,
                        };
                    } else {
                        return this._def.schema
                            ._parseAsync({
                                data: ctx.data,
                                path: ctx.path,
                                parent: ctx,
                            })
                            .then(function (base) {
                                if (!isValid(base)) return base;
                                return Promise.resolve(effect.transform(base.value, checkCtx)).then(function (result) {
                                    return {
                                        status: status.value,
                                        value: result,
                                    };
                                });
                            });
                    }
                }
                util.assertNever(effect);
            },
        },
    ]);
    return _ZodEffects;
})(ZodType);
__name(_ZodEffects, 'ZodEffects');
var ZodEffects = _ZodEffects;
ZodEffects.create = function (schema, effect, params) {
    return new ZodEffects(
        _object_spread(
            {
                schema: schema,
                typeName: ZodFirstPartyTypeKind.ZodEffects,
                effect: effect,
            },
            processCreateParams(params)
        )
    );
};
ZodEffects.createWithPreprocess = function (preprocess, schema, params) {
    return new ZodEffects(
        _object_spread(
            {
                schema: schema,
                effect: {
                    type: 'preprocess',
                    transform: preprocess,
                },
                typeName: ZodFirstPartyTypeKind.ZodEffects,
            },
            processCreateParams(params)
        )
    );
};
var _ZodOptional = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodOptional, ZodType);
    var _super = _create_super(_ZodOptional);
    function _ZodOptional() {
        _class_call_check(this, _ZodOptional);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodOptional, [
        {
            key: '_parse',
            value: function _parse(input) {
                var parsedType = this._getType(input);
                if (parsedType === ZodParsedType.undefined) {
                    return OK(void 0);
                }
                return this._def.innerType._parse(input);
            },
        },
        {
            key: 'unwrap',
            value: function unwrap() {
                return this._def.innerType;
            },
        },
    ]);
    return _ZodOptional;
})(ZodType);
__name(_ZodOptional, 'ZodOptional');
var ZodOptional = _ZodOptional;
ZodOptional.create = function (type, params) {
    return new ZodOptional(
        _object_spread(
            {
                innerType: type,
                typeName: ZodFirstPartyTypeKind.ZodOptional,
            },
            processCreateParams(params)
        )
    );
};
var _ZodNullable = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodNullable, ZodType);
    var _super = _create_super(_ZodNullable);
    function _ZodNullable() {
        _class_call_check(this, _ZodNullable);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodNullable, [
        {
            key: '_parse',
            value: function _parse(input) {
                var parsedType = this._getType(input);
                if (parsedType === ZodParsedType.null) {
                    return OK(null);
                }
                return this._def.innerType._parse(input);
            },
        },
        {
            key: 'unwrap',
            value: function unwrap() {
                return this._def.innerType;
            },
        },
    ]);
    return _ZodNullable;
})(ZodType);
__name(_ZodNullable, 'ZodNullable');
var ZodNullable = _ZodNullable;
ZodNullable.create = function (type, params) {
    return new ZodNullable(
        _object_spread(
            {
                innerType: type,
                typeName: ZodFirstPartyTypeKind.ZodNullable,
            },
            processCreateParams(params)
        )
    );
};
var _ZodDefault = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodDefault, ZodType);
    var _super = _create_super(_ZodDefault);
    function _ZodDefault() {
        _class_call_check(this, _ZodDefault);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodDefault, [
        {
            key: '_parse',
            value: function _parse(input) {
                var ctx = this._processInputParams(input).ctx;
                var data = ctx.data;
                if (ctx.parsedType === ZodParsedType.undefined) {
                    data = this._def.defaultValue();
                }
                return this._def.innerType._parse({
                    data: data,
                    path: ctx.path,
                    parent: ctx,
                });
            },
        },
        {
            key: 'removeDefault',
            value: function removeDefault() {
                return this._def.innerType;
            },
        },
    ]);
    return _ZodDefault;
})(ZodType);
__name(_ZodDefault, 'ZodDefault');
var ZodDefault = _ZodDefault;
ZodDefault.create = function (type, params) {
    return new ZodDefault(
        _object_spread(
            {
                innerType: type,
                typeName: ZodFirstPartyTypeKind.ZodDefault,
                defaultValue:
                    typeof params.default === 'function'
                        ? params.default
                        : function () {
                              return params.default;
                          },
            },
            processCreateParams(params)
        )
    );
};
var _ZodCatch = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodCatch, ZodType);
    var _super = _create_super(_ZodCatch);
    function _ZodCatch() {
        _class_call_check(this, _ZodCatch);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodCatch, [
        {
            key: '_parse',
            value: function _parse(input) {
                var _this = this;
                var ctx = this._processInputParams(input).ctx;
                var newCtx = _object_spread_props(_object_spread({}, ctx), {
                    common: _object_spread_props(_object_spread({}, ctx.common), {
                        issues: [],
                    }),
                });
                var result = this._def.innerType._parse({
                    data: newCtx.data,
                    path: newCtx.path,
                    parent: _object_spread({}, newCtx),
                });
                if (isAsync(result)) {
                    return result.then(function (result2) {
                        return {
                            status: 'valid',
                            value:
                                result2.status === 'valid'
                                    ? result2.value
                                    : _this._def.catchValue({
                                          get error() {
                                              return new ZodError(newCtx.common.issues);
                                          },
                                          input: newCtx.data,
                                      }),
                        };
                    });
                } else {
                    return {
                        status: 'valid',
                        value:
                            result.status === 'valid'
                                ? result.value
                                : this._def.catchValue({
                                      get error() {
                                          return new ZodError(newCtx.common.issues);
                                      },
                                      input: newCtx.data,
                                  }),
                    };
                }
            },
        },
        {
            key: 'removeCatch',
            value: function removeCatch() {
                return this._def.innerType;
            },
        },
    ]);
    return _ZodCatch;
})(ZodType);
__name(_ZodCatch, 'ZodCatch');
var ZodCatch = _ZodCatch;
ZodCatch.create = function (type, params) {
    return new ZodCatch(
        _object_spread(
            {
                innerType: type,
                typeName: ZodFirstPartyTypeKind.ZodCatch,
                catchValue:
                    typeof params.catch === 'function'
                        ? params.catch
                        : function () {
                              return params.catch;
                          },
            },
            processCreateParams(params)
        )
    );
};
var _ZodNaN = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodNaN, ZodType);
    var _super = _create_super(_ZodNaN);
    function _ZodNaN() {
        _class_call_check(this, _ZodNaN);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodNaN, [
        {
            key: '_parse',
            value: function _parse(input) {
                var parsedType = this._getType(input);
                if (parsedType !== ZodParsedType.nan) {
                    var ctx = this._getOrReturnCtx(input);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.nan,
                        received: ctx.parsedType,
                    });
                    return INVALID;
                }
                return {
                    status: 'valid',
                    value: input.data,
                };
            },
        },
    ]);
    return _ZodNaN;
})(ZodType);
__name(_ZodNaN, 'ZodNaN');
var ZodNaN = _ZodNaN;
ZodNaN.create = function (params) {
    return new ZodNaN(
        _object_spread(
            {
                typeName: ZodFirstPartyTypeKind.ZodNaN,
            },
            processCreateParams(params)
        )
    );
};
var BRAND = Symbol('zod_brand');
var _ZodBranded = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodBranded, ZodType);
    var _super = _create_super(_ZodBranded);
    function _ZodBranded() {
        _class_call_check(this, _ZodBranded);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodBranded, [
        {
            key: '_parse',
            value: function _parse(input) {
                var ctx = this._processInputParams(input).ctx;
                var data = ctx.data;
                return this._def.type._parse({
                    data: data,
                    path: ctx.path,
                    parent: ctx,
                });
            },
        },
        {
            key: 'unwrap',
            value: function unwrap() {
                return this._def.type;
            },
        },
    ]);
    return _ZodBranded;
})(ZodType);
__name(_ZodBranded, 'ZodBranded');
var ZodBranded = _ZodBranded;
var _ZodPipeline = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodPipeline, ZodType);
    var _super = _create_super(_ZodPipeline);
    function _ZodPipeline() {
        _class_call_check(this, _ZodPipeline);
        return _super.apply(this, arguments);
    }
    _create_class(
        _ZodPipeline,
        [
            {
                key: '_parse',
                value: function _parse(input) {
                    var _this__processInputParams = this._processInputParams(input),
                        status = _this__processInputParams.status,
                        ctx = _this__processInputParams.ctx;
                    if (ctx.common.async) {
                        var _this = this;
                        var handleAsync = /* @__PURE__ */ __name(
                            /*#__PURE__*/ _async_to_generator(function () {
                                var inResult;
                                return _ts_generator(this, function (_state) {
                                    switch (_state.label) {
                                        case 0:
                                            return [
                                                4,
                                                _this._def.in._parseAsync({
                                                    data: ctx.data,
                                                    path: ctx.path,
                                                    parent: ctx,
                                                }),
                                            ];
                                        case 1:
                                            inResult = _state.sent();
                                            if (inResult.status === 'aborted') return [2, INVALID];
                                            if (inResult.status === 'dirty') {
                                                status.dirty();
                                                return [2, DIRTY(inResult.value)];
                                            } else {
                                                return [
                                                    2,
                                                    _this._def.out._parseAsync({
                                                        data: inResult.value,
                                                        path: ctx.path,
                                                        parent: ctx,
                                                    }),
                                                ];
                                            }
                                            return [2];
                                    }
                                });
                            }),
                            'handleAsync'
                        );
                        return handleAsync();
                    } else {
                        var inResult = this._def.in._parseSync({
                            data: ctx.data,
                            path: ctx.path,
                            parent: ctx,
                        });
                        if (inResult.status === 'aborted') return INVALID;
                        if (inResult.status === 'dirty') {
                            status.dirty();
                            return {
                                status: 'dirty',
                                value: inResult.value,
                            };
                        } else {
                            return this._def.out._parseSync({
                                data: inResult.value,
                                path: ctx.path,
                                parent: ctx,
                            });
                        }
                    }
                },
            },
        ],
        [
            {
                key: 'create',
                value: function create(a2, b2) {
                    return new _ZodPipeline({
                        in: a2,
                        out: b2,
                        typeName: ZodFirstPartyTypeKind.ZodPipeline,
                    });
                },
            },
        ]
    );
    return _ZodPipeline;
})(ZodType);
__name(_ZodPipeline, 'ZodPipeline');
var ZodPipeline = _ZodPipeline;
var _ZodReadonly = /*#__PURE__*/ (function (ZodType) {
    _inherits(_ZodReadonly, ZodType);
    var _super = _create_super(_ZodReadonly);
    function _ZodReadonly() {
        _class_call_check(this, _ZodReadonly);
        return _super.apply(this, arguments);
    }
    _create_class(_ZodReadonly, [
        {
            key: '_parse',
            value: function _parse(input) {
                var result = this._def.innerType._parse(input);
                if (isValid(result)) {
                    result.value = Object.freeze(result.value);
                }
                return result;
            },
        },
    ]);
    return _ZodReadonly;
})(ZodType);
__name(_ZodReadonly, 'ZodReadonly');
var ZodReadonly = _ZodReadonly;
ZodReadonly.create = function (type, params) {
    return new ZodReadonly(
        _object_spread(
            {
                innerType: type,
                typeName: ZodFirstPartyTypeKind.ZodReadonly,
            },
            processCreateParams(params)
        )
    );
};
var custom = /* @__PURE__ */ __name(function (check) {
    var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        fatal = arguments.length > 2 ? arguments[2] : void 0;
    if (check)
        return ZodAny.create().superRefine(function (data, ctx) {
            var _a, _b;
            if (!check(data)) {
                var p2 =
                    typeof params === 'function'
                        ? params(data)
                        : typeof params === 'string'
                        ? {
                              message: params,
                          }
                        : params;
                var _fatal =
                    (_b = (_a = p2.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
                var p22 =
                    typeof p2 === 'string'
                        ? {
                              message: p2,
                          }
                        : p2;
                ctx.addIssue(
                    _object_spread_props(
                        _object_spread(
                            {
                                code: 'custom',
                            },
                            p22
                        ),
                        {
                            fatal: _fatal,
                        }
                    )
                );
            }
        });
    return ZodAny.create();
}, 'custom');
var late = {
    object: ZodObject.lazycreate,
};
var ZodFirstPartyTypeKind;
(function (ZodFirstPartyTypeKind2) {
    ZodFirstPartyTypeKind2['ZodString'] = 'ZodString';
    ZodFirstPartyTypeKind2['ZodNumber'] = 'ZodNumber';
    ZodFirstPartyTypeKind2['ZodNaN'] = 'ZodNaN';
    ZodFirstPartyTypeKind2['ZodBigInt'] = 'ZodBigInt';
    ZodFirstPartyTypeKind2['ZodBoolean'] = 'ZodBoolean';
    ZodFirstPartyTypeKind2['ZodDate'] = 'ZodDate';
    ZodFirstPartyTypeKind2['ZodSymbol'] = 'ZodSymbol';
    ZodFirstPartyTypeKind2['ZodUndefined'] = 'ZodUndefined';
    ZodFirstPartyTypeKind2['ZodNull'] = 'ZodNull';
    ZodFirstPartyTypeKind2['ZodAny'] = 'ZodAny';
    ZodFirstPartyTypeKind2['ZodUnknown'] = 'ZodUnknown';
    ZodFirstPartyTypeKind2['ZodNever'] = 'ZodNever';
    ZodFirstPartyTypeKind2['ZodVoid'] = 'ZodVoid';
    ZodFirstPartyTypeKind2['ZodArray'] = 'ZodArray';
    ZodFirstPartyTypeKind2['ZodObject'] = 'ZodObject';
    ZodFirstPartyTypeKind2['ZodUnion'] = 'ZodUnion';
    ZodFirstPartyTypeKind2['ZodDiscriminatedUnion'] = 'ZodDiscriminatedUnion';
    ZodFirstPartyTypeKind2['ZodIntersection'] = 'ZodIntersection';
    ZodFirstPartyTypeKind2['ZodTuple'] = 'ZodTuple';
    ZodFirstPartyTypeKind2['ZodRecord'] = 'ZodRecord';
    ZodFirstPartyTypeKind2['ZodMap'] = 'ZodMap';
    ZodFirstPartyTypeKind2['ZodSet'] = 'ZodSet';
    ZodFirstPartyTypeKind2['ZodFunction'] = 'ZodFunction';
    ZodFirstPartyTypeKind2['ZodLazy'] = 'ZodLazy';
    ZodFirstPartyTypeKind2['ZodLiteral'] = 'ZodLiteral';
    ZodFirstPartyTypeKind2['ZodEnum'] = 'ZodEnum';
    ZodFirstPartyTypeKind2['ZodEffects'] = 'ZodEffects';
    ZodFirstPartyTypeKind2['ZodNativeEnum'] = 'ZodNativeEnum';
    ZodFirstPartyTypeKind2['ZodOptional'] = 'ZodOptional';
    ZodFirstPartyTypeKind2['ZodNullable'] = 'ZodNullable';
    ZodFirstPartyTypeKind2['ZodDefault'] = 'ZodDefault';
    ZodFirstPartyTypeKind2['ZodCatch'] = 'ZodCatch';
    ZodFirstPartyTypeKind2['ZodPromise'] = 'ZodPromise';
    ZodFirstPartyTypeKind2['ZodBranded'] = 'ZodBranded';
    ZodFirstPartyTypeKind2['ZodPipeline'] = 'ZodPipeline';
    ZodFirstPartyTypeKind2['ZodReadonly'] = 'ZodReadonly';
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = /* @__PURE__ */ __name(function (cls) {
    var params =
        arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : {
                  message: 'Input not instance of '.concat(cls.name),
              };
    return custom(function (data) {
        return _instanceof(data, cls);
    }, params);
}, 'instanceOfType');
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = /* @__PURE__ */ __name(function () {
    return stringType().optional();
}, 'ostring');
var onumber = /* @__PURE__ */ __name(function () {
    return numberType().optional();
}, 'onumber');
var oboolean = /* @__PURE__ */ __name(function () {
    return booleanType().optional();
}, 'oboolean');
var coerce = {
    string: function (arg) {
        return ZodString.create(
            _object_spread_props(_object_spread({}, arg), {
                coerce: true,
            })
        );
    },
    number: function (arg) {
        return ZodNumber.create(
            _object_spread_props(_object_spread({}, arg), {
                coerce: true,
            })
        );
    },
    boolean: function (arg) {
        return ZodBoolean.create(
            _object_spread_props(_object_spread({}, arg), {
                coerce: true,
            })
        );
    },
    bigint: function (arg) {
        return ZodBigInt.create(
            _object_spread_props(_object_spread({}, arg), {
                coerce: true,
            })
        );
    },
    date: function (arg) {
        return ZodDate.create(
            _object_spread_props(_object_spread({}, arg), {
                coerce: true,
            })
        );
    },
};
var NEVER = INVALID;
var z = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    defaultErrorMap: errorMap,
    setErrorMap: setErrorMap,
    getErrorMap: getErrorMap,
    makeIssue: makeIssue,
    EMPTY_PATH: EMPTY_PATH,
    addIssueToContext: addIssueToContext,
    ParseStatus: ParseStatus,
    INVALID: INVALID,
    DIRTY: DIRTY,
    OK: OK,
    isAborted: isAborted,
    isDirty: isDirty,
    isValid: isValid,
    isAsync: isAsync,
    get util() {
        return util;
    },
    get objectUtil() {
        return objectUtil;
    },
    ZodParsedType: ZodParsedType,
    getParsedType: getParsedType,
    ZodType: ZodType,
    ZodString: ZodString,
    ZodNumber: ZodNumber,
    ZodBigInt: ZodBigInt,
    ZodBoolean: ZodBoolean,
    ZodDate: ZodDate,
    ZodSymbol: ZodSymbol,
    ZodUndefined: ZodUndefined,
    ZodNull: ZodNull,
    ZodAny: ZodAny,
    ZodUnknown: ZodUnknown,
    ZodNever: ZodNever,
    ZodVoid: ZodVoid,
    ZodArray: ZodArray,
    ZodObject: ZodObject,
    ZodUnion: ZodUnion,
    ZodDiscriminatedUnion: ZodDiscriminatedUnion,
    ZodIntersection: ZodIntersection,
    ZodTuple: ZodTuple,
    ZodRecord: ZodRecord,
    ZodMap: ZodMap,
    ZodSet: ZodSet,
    ZodFunction: ZodFunction,
    ZodLazy: ZodLazy,
    ZodLiteral: ZodLiteral,
    ZodEnum: ZodEnum,
    ZodNativeEnum: ZodNativeEnum,
    ZodPromise: ZodPromise,
    ZodEffects: ZodEffects,
    ZodTransformer: ZodEffects,
    ZodOptional: ZodOptional,
    ZodNullable: ZodNullable,
    ZodDefault: ZodDefault,
    ZodCatch: ZodCatch,
    ZodNaN: ZodNaN,
    BRAND: BRAND,
    ZodBranded: ZodBranded,
    ZodPipeline: ZodPipeline,
    ZodReadonly: ZodReadonly,
    custom: custom,
    Schema: ZodType,
    ZodSchema: ZodType,
    late: late,
    get ZodFirstPartyTypeKind() {
        return ZodFirstPartyTypeKind;
    },
    coerce: coerce,
    any: anyType,
    array: arrayType,
    bigint: bigIntType,
    boolean: booleanType,
    date: dateType,
    discriminatedUnion: discriminatedUnionType,
    effect: effectsType,
    enum: enumType,
    function: functionType,
    instanceof: instanceOfType,
    intersection: intersectionType,
    lazy: lazyType,
    literal: literalType,
    map: mapType,
    nan: nanType,
    nativeEnum: nativeEnumType,
    never: neverType,
    null: nullType,
    nullable: nullableType,
    number: numberType,
    object: objectType,
    oboolean: oboolean,
    onumber: onumber,
    optional: optionalType,
    ostring: ostring,
    pipeline: pipelineType,
    preprocess: preprocessType,
    promise: promiseType,
    record: recordType,
    set: setType,
    strictObject: strictObjectType,
    string: stringType,
    symbol: symbolType,
    transformer: effectsType,
    tuple: tupleType,
    undefined: undefinedType,
    union: unionType,
    unknown: unknownType,
    void: voidType,
    NEVER: NEVER,
    ZodIssueCode: ZodIssueCode,
    quotelessJson: quotelessJson,
    ZodError: ZodError,
});
// ../../node_modules/drizzle-zod/index.mjs
var import_drizzle_orm2 = require('drizzle-orm');
var import_mysql_core = require('drizzle-orm/mysql-core');
var import_pg_core2 = require('drizzle-orm/pg-core');
var import_sqlite_core = require('drizzle-orm/sqlite-core');
var m = z.union([z.string(), z.number(), z.boolean(), z.null()]);
var f = z.lazy(function () {
    return z.union([m, z.array(f), z.record(f)]);
});
function b(t2, n2) {
    var r2 = (0, import_drizzle_orm2.getTableColumns)(t2),
        o2 = Object.entries(r2);
    var i2 = Object.fromEntries(
        o2.map(function (param) {
            var _param = _sliced_to_array(param, 2),
                e2 = _param[0],
                t3 = _param[1];
            return [e2, p(t3)];
        })
    );
    n2 &&
        (i2 = Object.assign(
            i2,
            Object.fromEntries(
                Object.entries(n2).map(function (param) {
                    var _param = _sliced_to_array(param, 2),
                        e2 = _param[0],
                        t3 = _param[1];
                    return [e2, 'function' == typeof t3 ? t3(i2) : t3];
                })
            )
        ));
    var _iteratorNormalCompletion = true,
        _didIteratorError = false,
        _iteratorError = undefined;
    try {
        for (
            var _iterator = o2[Symbol.iterator](), _step;
            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
            _iteratorNormalCompletion = true
        ) {
            var _step_value = _sliced_to_array(_step.value, 2),
                e2 = _step_value[0],
                t3 = _step_value[1];
            t3.notNull || (i2[e2] = i2[e2].nullable());
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return z.object(i2);
}
__name(b, 'b');
function p(e2) {
    var m2;
    if (
        ((function (e3) {
            return 'enumValues' in e3 && Array.isArray(e3.enumValues) && e3.enumValues.length > 0;
        })(e2) && (m2 = e2.enumValues.length ? z.enum(e2.enumValues) : z.string()),
        !m2)
    ) {
        if ((0, import_drizzle_orm2.is)(e2, import_pg_core2.PgUUID)) m2 = z.string().uuid();
        else if ('custom' === e2.dataType) m2 = z.any();
        else if ('json' === e2.dataType) m2 = f;
        else if ('array' === e2.dataType) m2 = z.array(p(e2.baseColumn));
        else if ('number' === e2.dataType) m2 = z.number();
        else if ('bigint' === e2.dataType) m2 = z.bigint();
        else if ('boolean' === e2.dataType) m2 = z.boolean();
        else if ('date' === e2.dataType) m2 = z.date();
        else if ('string' === e2.dataType) {
            var i2 = z.string();
            ((0, import_drizzle_orm2.is)(e2, import_pg_core2.PgChar) ||
                (0, import_drizzle_orm2.is)(e2, import_pg_core2.PgVarchar) ||
                (0, import_drizzle_orm2.is)(e2, import_mysql_core.MySqlVarChar) ||
                (0, import_drizzle_orm2.is)(e2, import_mysql_core.MySqlVarBinary) ||
                (0, import_drizzle_orm2.is)(e2, import_mysql_core.MySqlChar) ||
                (0, import_drizzle_orm2.is)(e2, import_sqlite_core.SQLiteText)) &&
                'number' == typeof e2.length &&
                (i2 = i2.max(e2.length)),
                (m2 = i2);
        }
    }
    return m2 || (m2 = z.any()), m2;
}
__name(p, 'p');
// ../../packages/schema/property/index.ts
var propertyCreateSchema = b(properties, {
    images: z
        .array(
            z.object({
                url: z.string(),
            })
        )
        .min(1),
}).omit({
    id: true,
    created_at: true,
    updated_at: true,
});
var propertyTagCreateSchema = b(propertyTags).omit({
    id: true,
});
var propertySchema = b(properties);
var propertyFilterQuerySchema = z.object({
    price: z
        .object({
            min: z.number(),
            max: z.number(),
        })
        .optional(),
    bed: z.number().optional(),
    bath: z.number().optional(),
    region: propertyCreateSchema.shape.region.optional(),
    types: propertyCreateSchema.shape.types.optional(),
    placeType: propertyCreateSchema.shape.placeType.optional(),
    tags: z.number().optional(),
    vat: z.boolean().optional(),
});
// router/property/index.ts
var import_drizzle_orm3 = require('drizzle-orm');
// ../../node_modules/@trpc/server/dist/index.mjs
function getParseFn(procedureParser) {
    var parser = procedureParser;
    if (typeof parser === 'function') {
        return parser;
    }
    if (typeof parser.parseAsync === 'function') {
        return parser.parseAsync.bind(parser);
    }
    if (typeof parser.parse === 'function') {
        return parser.parse.bind(parser);
    }
    if (typeof parser.validateSync === 'function') {
        return parser.validateSync.bind(parser);
    }
    if (typeof parser.create === 'function') {
        return parser.create.bind(parser);
    }
    if (typeof parser.assert === 'function') {
        return function (value) {
            parser.assert(value);
            return value;
        };
    }
    throw new Error('Could not find a validator fn');
}
__name(getParseFn, 'getParseFn');
function mergeWithoutOverrides(obj1) {
    for (var _len = arguments.length, objs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        objs[_key - 1] = arguments[_key];
    }
    var newObj = Object.assign(/* @__PURE__ */ Object.create(null), obj1);
    var _iteratorNormalCompletion = true,
        _didIteratorError = false,
        _iteratorError = undefined;
    try {
        for (
            var _iterator = objs[Symbol.iterator](), _step;
            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
            _iteratorNormalCompletion = true
        ) {
            var overrides = _step.value;
            for (var key in overrides) {
                if (key in newObj && newObj[key] !== overrides[key]) {
                    throw new Error('Duplicate key '.concat(key));
                }
                newObj[key] = overrides[key];
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return newObj;
}
__name(mergeWithoutOverrides, 'mergeWithoutOverrides');
function createMiddlewareFactory() {
    var createMiddleware = function createMiddleware(fn) {
        return createMiddlewareInner([fn]);
    };
    function createMiddlewareInner(middlewares) {
        return {
            _middlewares: middlewares,
            unstable_pipe: function unstable_pipe(middlewareBuilderOrFn) {
                var pipedMiddleware =
                    '_middlewares' in middlewareBuilderOrFn
                        ? middlewareBuilderOrFn._middlewares
                        : [middlewareBuilderOrFn];
                return createMiddlewareInner(
                    _to_consumable_array(middlewares).concat(_to_consumable_array(pipedMiddleware))
                );
            },
        };
    }
    __name(createMiddlewareInner, 'createMiddlewareInner');
    __name(createMiddleware, 'createMiddleware');
    return createMiddleware;
}
__name(createMiddlewareFactory, 'createMiddlewareFactory');
function isPlainObject(obj) {
    return obj && typeof obj === 'object' && !Array.isArray(obj);
}
__name(isPlainObject, 'isPlainObject');
function createInputMiddleware(parse2) {
    var inputMiddleware = /* @__PURE__ */ __name(
        (function () {
            var _ref = _async_to_generator(function (param) {
                var next, rawInput, input, parsedInput, cause, combinedInput;
                return _ts_generator(this, function (_state) {
                    switch (_state.label) {
                        case 0:
                            (next = param.next), (rawInput = param.rawInput), (input = param.input);
                            _state.label = 1;
                        case 1:
                            _state.trys.push([1, 3, , 4]);
                            return [4, parse2(rawInput)];
                        case 2:
                            parsedInput = _state.sent();
                            return [3, 4];
                        case 3:
                            cause = _state.sent();
                            throw new TRPCError({
                                code: 'BAD_REQUEST',
                                cause: cause,
                            });
                        case 4:
                            combinedInput =
                                isPlainObject(input) && isPlainObject(parsedInput)
                                    ? _object_spread({}, input, parsedInput)
                                    : parsedInput;
                            return [
                                2,
                                next({
                                    input: combinedInput,
                                }),
                            ];
                    }
                });
            });
            return function (_) {
                return _ref.apply(this, arguments);
            };
        })(),
        'inputMiddleware'
    );
    inputMiddleware._type = 'input';
    return inputMiddleware;
}
__name(createInputMiddleware, 'createInputMiddleware');
function createOutputMiddleware(parse2) {
    var outputMiddleware = /* @__PURE__ */ __name(
        (function () {
            var _ref = _async_to_generator(function (param) {
                var next, result, data, cause;
                return _ts_generator(this, function (_state) {
                    switch (_state.label) {
                        case 0:
                            next = param.next;
                            return [4, next()];
                        case 1:
                            result = _state.sent();
                            if (!result.ok) {
                                return [2, result];
                            }
                            _state.label = 2;
                        case 2:
                            _state.trys.push([2, 4, , 5]);
                            return [4, parse2(result.data)];
                        case 3:
                            data = _state.sent();
                            return [
                                2,
                                _object_spread_props(_object_spread({}, result), {
                                    data: data,
                                }),
                            ];
                        case 4:
                            cause = _state.sent();
                            throw new TRPCError({
                                message: 'Output validation failed',
                                code: 'INTERNAL_SERVER_ERROR',
                                cause: cause,
                            });
                        case 5:
                            return [2];
                    }
                });
            });
            return function (_) {
                return _ref.apply(this, arguments);
            };
        })(),
        'outputMiddleware'
    );
    outputMiddleware._type = 'output';
    return outputMiddleware;
}
__name(createOutputMiddleware, 'createOutputMiddleware');
var middlewareMarker = 'middlewareMarker';
function createNewBuilder(def1, def2) {
    var _def2_middlewares = def2.middlewares,
        middlewares = _def2_middlewares === void 0 ? [] : _def2_middlewares,
        inputs = def2.inputs,
        meta = def2.meta,
        rest = _object_without_properties(def2, ['middlewares', 'inputs', 'meta']);
    return createBuilder(
        _object_spread_props(_object_spread({}, mergeWithoutOverrides(def1, rest)), {
            inputs: _to_consumable_array(def1.inputs).concat(
                _to_consumable_array(inputs !== null && inputs !== void 0 ? inputs : [])
            ),
            middlewares: _to_consumable_array(def1.middlewares).concat(_to_consumable_array(middlewares)),
            meta:
                def1.meta && meta
                    ? _object_spread({}, def1.meta, meta)
                    : meta !== null && meta !== void 0
                    ? meta
                    : def1.meta,
        })
    );
}
__name(createNewBuilder, 'createNewBuilder');
function createBuilder() {
    var initDef = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _def = _object_spread(
        {
            inputs: [],
            middlewares: [],
        },
        initDef
    );
    return {
        _def: _def,
        input: function input(input) {
            var parser = getParseFn(input);
            return createNewBuilder(_def, {
                inputs: [input],
                middlewares: [createInputMiddleware(parser)],
            });
        },
        output: function output(output) {
            var parseOutput = getParseFn(output);
            return createNewBuilder(_def, {
                output: output,
                middlewares: [createOutputMiddleware(parseOutput)],
            });
        },
        meta: function meta(meta) {
            return createNewBuilder(_def, {
                meta: meta,
            });
        },
        /**
         * @deprecated
         * This functionality is deprecated and will be removed in the next major version.
         */ unstable_concat: function unstable_concat(builder) {
            return createNewBuilder(_def, builder._def);
        },
        use: function use(middlewareBuilderOrFn) {
            var middlewares =
                '_middlewares' in middlewareBuilderOrFn ? middlewareBuilderOrFn._middlewares : [middlewareBuilderOrFn];
            return createNewBuilder(_def, {
                middlewares: middlewares,
            });
        },
        query: function query(resolver) {
            return createResolver(
                _object_spread_props(_object_spread({}, _def), {
                    query: true,
                }),
                resolver
            );
        },
        mutation: function mutation(resolver) {
            return createResolver(
                _object_spread_props(_object_spread({}, _def), {
                    mutation: true,
                }),
                resolver
            );
        },
        subscription: function subscription(resolver) {
            return createResolver(
                _object_spread_props(_object_spread({}, _def), {
                    subscription: true,
                }),
                resolver
            );
        },
    };
}
__name(createBuilder, 'createBuilder');
function createResolver(_def, resolver) {
    var finalBuilder = createNewBuilder(_def, {
        resolver: resolver,
        middlewares: [
            /* @__PURE__ */ __name(
                (function () {
                    var _resolveMiddleware = _async_to_generator(function (opts) {
                        var data;
                        return _ts_generator(this, function (_state) {
                            switch (_state.label) {
                                case 0:
                                    return [4, resolver(opts)];
                                case 1:
                                    data = _state.sent();
                                    return [
                                        2,
                                        {
                                            marker: middlewareMarker,
                                            ok: true,
                                            data: data,
                                            ctx: opts.ctx,
                                        },
                                    ];
                            }
                        });
                    });
                    function resolveMiddleware(opts) {
                        return _resolveMiddleware.apply(this, arguments);
                    }
                    return resolveMiddleware;
                })(),
                'resolveMiddleware'
            ),
        ],
    });
    return createProcedureCaller(finalBuilder._def);
}
__name(createResolver, 'createResolver');
var codeblock =
    "\nIf you want to call this function on the server, you do the following:\nThis is a client-only function.\n\nconst caller = appRouter.createCaller({\n  /* ... your context */\n});\n\nconst result = await caller.call('myProcedure', input);\n".trim();
function createProcedureCaller(_def) {
    var procedure = /* @__PURE__ */ __name(
        (function () {
            var _resolve = _async_to_generator(function (opts) {
                var callRecursive, result;
                return _ts_generator(this, function (_state) {
                    switch (_state.label) {
                        case 0:
                            if (!opts || !('rawInput' in opts)) {
                                throw new Error(codeblock);
                            }
                            callRecursive = /* @__PURE__ */ __name(
                                /*#__PURE__*/ _async_to_generator(function () {
                                    var callOpts, middleware2, _callOpts_rawInput, result2, cause;
                                    var _arguments = arguments;
                                    return _ts_generator(this, function (_state) {
                                        switch (_state.label) {
                                            case 0:
                                                callOpts =
                                                    _arguments.length > 0 && _arguments[0] !== void 0
                                                        ? _arguments[0]
                                                        : {
                                                              index: 0,
                                                              ctx: opts.ctx,
                                                          };
                                                _state.label = 1;
                                            case 1:
                                                _state.trys.push([1, 3, , 4]);
                                                middleware2 = _def.middlewares[callOpts.index];
                                                return [
                                                    4,
                                                    middleware2({
                                                        ctx: callOpts.ctx,
                                                        type: opts.type,
                                                        path: opts.path,
                                                        rawInput:
                                                            (_callOpts_rawInput = callOpts.rawInput) !== null &&
                                                            _callOpts_rawInput !== void 0
                                                                ? _callOpts_rawInput
                                                                : opts.rawInput,
                                                        meta: _def.meta,
                                                        input: callOpts.input,
                                                        next: function next(_nextOpts) {
                                                            var nextOpts = _nextOpts;
                                                            return callRecursive({
                                                                index: callOpts.index + 1,
                                                                ctx:
                                                                    nextOpts && 'ctx' in nextOpts
                                                                        ? _object_spread({}, callOpts.ctx, nextOpts.ctx)
                                                                        : callOpts.ctx,
                                                                input:
                                                                    nextOpts && 'input' in nextOpts
                                                                        ? nextOpts.input
                                                                        : callOpts.input,
                                                                rawInput:
                                                                    nextOpts && 'rawInput' in nextOpts
                                                                        ? nextOpts.rawInput
                                                                        : callOpts.rawInput,
                                                            });
                                                        },
                                                    }),
                                                ];
                                            case 2:
                                                result2 = _state.sent();
                                                return [2, result2];
                                            case 3:
                                                cause = _state.sent();
                                                return [
                                                    2,
                                                    {
                                                        ok: false,
                                                        error: getTRPCErrorFromUnknown(cause),
                                                        marker: middlewareMarker,
                                                    },
                                                ];
                                            case 4:
                                                return [2];
                                        }
                                    });
                                }),
                                'callRecursive'
                            );
                            return [4, callRecursive()];
                        case 1:
                            result = _state.sent();
                            if (!result) {
                                throw new TRPCError({
                                    code: 'INTERNAL_SERVER_ERROR',
                                    message: 'No result from middlewares - did you forget to `return next()`?',
                                });
                            }
                            if (!result.ok) {
                                throw result.error;
                            }
                            return [2, result.data];
                    }
                });
            });
            function resolve(opts) {
                return _resolve.apply(this, arguments);
            }
            return resolve;
        })(),
        'resolve'
    );
    procedure._def = _def;
    procedure.meta = _def.meta;
    return procedure;
}
__name(createProcedureCaller, 'createProcedureCaller');
function mergeRouters() {
    for (var _len = arguments.length, routerList = new Array(_len), _key = 0; _key < _len; _key++) {
        routerList[_key] = arguments[_key];
    }
    var _routerList_;
    var record = mergeWithoutOverrides.apply(
        void 0,
        [{}].concat(
            _to_consumable_array(
                routerList.map(function (r2) {
                    return r2._def.record;
                })
            )
        )
    );
    var errorFormatter = routerList.reduce(function (currentErrorFormatter, nextRouter) {
        if (nextRouter._def._config.errorFormatter && nextRouter._def._config.errorFormatter !== defaultFormatter) {
            if (
                currentErrorFormatter !== defaultFormatter &&
                currentErrorFormatter !== nextRouter._def._config.errorFormatter
            ) {
                throw new Error('You seem to have several error formatters');
            }
            return nextRouter._def._config.errorFormatter;
        }
        return currentErrorFormatter;
    }, defaultFormatter);
    var transformer = routerList.reduce(function (prev, current) {
        if (current._def._config.transformer && current._def._config.transformer !== defaultTransformer) {
            if (prev !== defaultTransformer && prev !== current._def._config.transformer) {
                throw new Error('You seem to have several transformers');
            }
            return current._def._config.transformer;
        }
        return prev;
    }, defaultTransformer);
    var router2 = createRouterFactory({
        errorFormatter: errorFormatter,
        transformer: transformer,
        isDev: routerList.some(function (r2) {
            return r2._def._config.isDev;
        }),
        allowOutsideOfServer: routerList.some(function (r2) {
            return r2._def._config.allowOutsideOfServer;
        }),
        isServer: routerList.some(function (r2) {
            return r2._def._config.isServer;
        }),
        $types:
            (_routerList_ = routerList[0]) === null || _routerList_ === void 0
                ? void 0
                : _routerList_._def._config.$types,
    })(record);
    return router2;
}
__name(mergeRouters, 'mergeRouters');
var _TRPCBuilder = /*#__PURE__*/ (function () {
    function _TRPCBuilder() {
        _class_call_check(this, _TRPCBuilder);
    }
    _create_class(_TRPCBuilder, [
        {
            key: 'context',
            value: function context() {
                return new _TRPCBuilder();
            },
        },
        {
            key: 'meta',
            value: function meta() {
                return new _TRPCBuilder();
            },
        },
        {
            key: 'create',
            value: function create(options) {
                return createTRPCInner()(options);
            },
        },
    ]);
    return _TRPCBuilder;
})();
__name(_TRPCBuilder, 'TRPCBuilder');
var TRPCBuilder = _TRPCBuilder;
var initTRPC = new TRPCBuilder();
function createTRPCInner() {
    return /* @__PURE__ */ __name(function initTRPCInner(runtime) {
        var _runtime,
            _runtime1,
            _runtime2,
            _globalThis_process_env,
            _globalThis_process,
            _runtime3,
            _runtime4,
            _runtime5;
        var _runtime_errorFormatter;
        var errorFormatter =
            (_runtime_errorFormatter =
                (_runtime = runtime) === null || _runtime === void 0 ? void 0 : _runtime.errorFormatter) !== null &&
            _runtime_errorFormatter !== void 0
                ? _runtime_errorFormatter
                : defaultFormatter;
        var _runtime_transformer;
        var transformer = getDataTransformer(
            (_runtime_transformer =
                (_runtime1 = runtime) === null || _runtime1 === void 0 ? void 0 : _runtime1.transformer) !== null &&
                _runtime_transformer !== void 0
                ? _runtime_transformer
                : defaultTransformer
        );
        var _runtime_isDev, _runtime_allowOutsideOfServer, _runtime_isServer;
        var config2 = {
            transformer: transformer,
            isDev:
                (_runtime_isDev = (_runtime2 = runtime) === null || _runtime2 === void 0 ? void 0 : _runtime2.isDev) !==
                    null && _runtime_isDev !== void 0
                    ? _runtime_isDev
                    : ((_globalThis_process = globalThis.process) === null || _globalThis_process === void 0
                          ? void 0
                          : (_globalThis_process_env = _globalThis_process.env) === null ||
                            _globalThis_process_env === void 0
                          ? void 0
                          : _globalThis_process_env.NODE_ENV) !== 'production',
            allowOutsideOfServer:
                (_runtime_allowOutsideOfServer =
                    (_runtime3 = runtime) === null || _runtime3 === void 0
                        ? void 0
                        : _runtime3.allowOutsideOfServer) !== null && _runtime_allowOutsideOfServer !== void 0
                    ? _runtime_allowOutsideOfServer
                    : false,
            errorFormatter: errorFormatter,
            isServer:
                (_runtime_isServer =
                    (_runtime4 = runtime) === null || _runtime4 === void 0 ? void 0 : _runtime4.isServer) !== null &&
                _runtime_isServer !== void 0
                    ? _runtime_isServer
                    : isServerDefault,
            /**
             * @internal
             */ $types: createFlatProxy(function (key) {
                throw new Error('Tried to access "$types.'.concat(key, '" which is not available at runtime'));
            }),
        };
        {
            var _runtime6, _runtime7;
            var _runtime_isServer1;
            var isServer =
                (_runtime_isServer1 =
                    (_runtime6 = runtime) === null || _runtime6 === void 0 ? void 0 : _runtime6.isServer) !== null &&
                _runtime_isServer1 !== void 0
                    ? _runtime_isServer1
                    : isServerDefault;
            if (
                !isServer &&
                ((_runtime7 = runtime) === null || _runtime7 === void 0 ? void 0 : _runtime7.allowOutsideOfServer) !==
                    true
            ) {
                throw new Error(
                    "You're trying to use @trpc/server in a non-server environment. This is not supported by default."
                );
            }
        }
        return {
            /**
             * These are just types, they can't be used
             * @internal
             */ _config: config2,
            /**
             * Builder object for creating procedures
             */ procedure: createBuilder({
                meta: (_runtime5 = runtime) === null || _runtime5 === void 0 ? void 0 : _runtime5.defaultMeta,
            }),
            /**
             * Create reusable middlewares
             */ middleware: createMiddlewareFactory(),
            /**
             * Create a router
             */ router: createRouterFactory(config2),
            /**
             * Merge Routers
             */ mergeRouters: mergeRouters,
        };
    }, 'initTRPCInner');
}
__name(createTRPCInner, 'createTRPCInner');
// ../../node_modules/superjson/dist/esm/double-indexed-kv.js
var DoubleIndexedKV = /** @class */ (function () {
    var DoubleIndexedKV2 = function DoubleIndexedKV2() {
        this.keyToValue = /* @__PURE__ */ new Map();
        this.valueToKey = /* @__PURE__ */ new Map();
    };
    __name(DoubleIndexedKV2, 'DoubleIndexedKV');
    DoubleIndexedKV2.prototype.set = function (key, value) {
        this.keyToValue.set(key, value);
        this.valueToKey.set(value, key);
    };
    DoubleIndexedKV2.prototype.getByKey = function (key) {
        return this.keyToValue.get(key);
    };
    DoubleIndexedKV2.prototype.getByValue = function (value) {
        return this.valueToKey.get(value);
    };
    DoubleIndexedKV2.prototype.clear = function () {
        this.keyToValue.clear();
        this.valueToKey.clear();
    };
    return DoubleIndexedKV2;
})();
// ../../node_modules/superjson/dist/esm/registry.js
var Registry = /** @class */ (function () {
    var Registry2 = function Registry2(generateIdentifier) {
        this.generateIdentifier = generateIdentifier;
        this.kv = new DoubleIndexedKV();
    };
    __name(Registry2, 'Registry');
    Registry2.prototype.register = function (value, identifier) {
        if (this.kv.getByValue(value)) {
            return;
        }
        if (!identifier) {
            identifier = this.generateIdentifier(value);
        }
        this.kv.set(identifier, value);
    };
    Registry2.prototype.clear = function () {
        this.kv.clear();
    };
    Registry2.prototype.getIdentifier = function (value) {
        return this.kv.getByValue(value);
    };
    Registry2.prototype.getValue = function (identifier) {
        return this.kv.getByKey(identifier);
    };
    return Registry2;
})();
// ../../node_modules/superjson/dist/esm/class-registry.js
var __extends = (function () {
    var extendStatics = /* @__PURE__ */ __name(function (d, b2) {
        extendStatics =
            Object.setPrototypeOf ||
            (_instanceof(
                {
                    __proto__: [],
                },
                Array
            ) &&
                function (d2, b3) {
                    d2.__proto__ = b3;
                }) ||
            function (d2, b3) {
                for (var p2 in b3) if (Object.prototype.hasOwnProperty.call(b3, p2)) d2[p2] = b3[p2];
            };
        return extendStatics(d, b2);
    }, 'extendStatics');
    return function (d, b2) {
        var __ = function __() {
            this.constructor = d;
        };
        if (typeof b2 !== 'function' && b2 !== null)
            throw new TypeError('Class extends value ' + String(b2) + ' is not a constructor or null');
        extendStatics(d, b2);
        __name(__, '__');
        d.prototype = b2 === null ? Object.create(b2) : ((__.prototype = b2.prototype), new __());
    };
})();
var ClassRegistry = /** @class */ (function (_super) {
    var ClassRegistry2 = function ClassRegistry2() {
        var _this =
            _super.call(this, function (c) {
                return c.name;
            }) || this;
        _this.classToAllowedProps = /* @__PURE__ */ new Map();
        return _this;
    };
    __extends(ClassRegistry2, _super);
    __name(ClassRegistry2, 'ClassRegistry');
    ClassRegistry2.prototype.register = function (value, options) {
        if (typeof options === 'object') {
            if (options.allowProps) {
                this.classToAllowedProps.set(value, options.allowProps);
            }
            _super.prototype.register.call(this, value, options.identifier);
        } else {
            _super.prototype.register.call(this, value, options);
        }
    };
    ClassRegistry2.prototype.getAllowedProps = function (value) {
        return this.classToAllowedProps.get(value);
    };
    return ClassRegistry2;
})(Registry);
// ../../node_modules/superjson/dist/esm/util.js
var __read = function __read(o2, n2) {
    var m2 = typeof Symbol === 'function' && o2[Symbol.iterator];
    if (!m2) return o2;
    var i2 = m2.call(o2),
        r2,
        ar = [],
        e2;
    try {
        while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done) ar.push(r2.value);
    } catch (error) {
        e2 = {
            error: error,
        };
    } finally {
        try {
            if (r2 && !r2.done && (m2 = i2['return'])) m2.call(i2);
        } finally {
            if (e2) throw e2.error;
        }
    }
    return ar;
};
function valuesOfObj(record) {
    if ('values' in Object) {
        return Object.values(record);
    }
    var values = [];
    for (var key in record) {
        if (record.hasOwnProperty(key)) {
            values.push(record[key]);
        }
    }
    return values;
}
__name(valuesOfObj, 'valuesOfObj');
function find(record, predicate) {
    var values = valuesOfObj(record);
    if ('find' in values) {
        return values.find(predicate);
    }
    var valuesNotNever = values;
    for (var i2 = 0; i2 < valuesNotNever.length; i2++) {
        var value = valuesNotNever[i2];
        if (predicate(value)) {
            return value;
        }
    }
    return void 0;
}
__name(find, 'find');
function forEach(record, run) {
    Object.entries(record).forEach(function (_a) {
        var _b = __read(_a, 2),
            key = _b[0],
            value = _b[1];
        return run(value, key);
    });
}
__name(forEach, 'forEach');
function includes(arr, value) {
    return arr.indexOf(value) !== -1;
}
__name(includes, 'includes');
function findArr(record, predicate) {
    for (var i2 = 0; i2 < record.length; i2++) {
        var value = record[i2];
        if (predicate(value)) {
            return value;
        }
    }
    return void 0;
}
__name(findArr, 'findArr');
// ../../node_modules/superjson/dist/esm/custom-transformer-registry.js
var CustomTransformerRegistry = /** @class */ (function () {
    var CustomTransformerRegistry2 = function CustomTransformerRegistry2() {
        this.transfomers = {};
    };
    __name(CustomTransformerRegistry2, 'CustomTransformerRegistry');
    CustomTransformerRegistry2.prototype.register = function (transformer) {
        this.transfomers[transformer.name] = transformer;
    };
    CustomTransformerRegistry2.prototype.findApplicable = function (v) {
        return find(this.transfomers, function (transformer) {
            return transformer.isApplicable(v);
        });
    };
    CustomTransformerRegistry2.prototype.findByName = function (name) {
        return this.transfomers[name];
    };
    return CustomTransformerRegistry2;
})();
// ../../node_modules/superjson/dist/esm/is.js
var getType = /* @__PURE__ */ __name(function (payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
}, 'getType');
var isUndefined = /* @__PURE__ */ __name(function (payload) {
    return typeof payload === 'undefined';
}, 'isUndefined');
var isNull = /* @__PURE__ */ __name(function (payload) {
    return payload === null;
}, 'isNull');
var isPlainObject2 = /* @__PURE__ */ __name(function (payload) {
    if (typeof payload !== 'object' || payload === null) return false;
    if (payload === Object.prototype) return false;
    if (Object.getPrototypeOf(payload) === null) return true;
    return Object.getPrototypeOf(payload) === Object.prototype;
}, 'isPlainObject');
var isEmptyObject = /* @__PURE__ */ __name(function (payload) {
    return isPlainObject2(payload) && Object.keys(payload).length === 0;
}, 'isEmptyObject');
var isArray = /* @__PURE__ */ __name(function (payload) {
    return Array.isArray(payload);
}, 'isArray');
var isString = /* @__PURE__ */ __name(function (payload) {
    return typeof payload === 'string';
}, 'isString');
var isNumber = /* @__PURE__ */ __name(function (payload) {
    return typeof payload === 'number' && !isNaN(payload);
}, 'isNumber');
var isBoolean = /* @__PURE__ */ __name(function (payload) {
    return typeof payload === 'boolean';
}, 'isBoolean');
var isRegExp = /* @__PURE__ */ __name(function (payload) {
    return _instanceof(payload, RegExp);
}, 'isRegExp');
var isMap = /* @__PURE__ */ __name(function (payload) {
    return _instanceof(payload, Map);
}, 'isMap');
var isSet = /* @__PURE__ */ __name(function (payload) {
    return _instanceof(payload, Set);
}, 'isSet');
var isSymbol = /* @__PURE__ */ __name(function (payload) {
    return getType(payload) === 'Symbol';
}, 'isSymbol');
var isDate = /* @__PURE__ */ __name(function (payload) {
    return _instanceof(payload, Date) && !isNaN(payload.valueOf());
}, 'isDate');
var isError = /* @__PURE__ */ __name(function (payload) {
    return _instanceof(payload, Error);
}, 'isError');
var isNaNValue = /* @__PURE__ */ __name(function (payload) {
    return typeof payload === 'number' && isNaN(payload);
}, 'isNaNValue');
var isPrimitive = /* @__PURE__ */ __name(function (payload) {
    return (
        isBoolean(payload) ||
        isNull(payload) ||
        isUndefined(payload) ||
        isNumber(payload) ||
        isString(payload) ||
        isSymbol(payload)
    );
}, 'isPrimitive');
var isBigint = /* @__PURE__ */ __name(function (payload) {
    return (typeof payload === 'undefined' ? 'undefined' : _type_of(payload)) === 'bigint';
}, 'isBigint');
var isInfinite = /* @__PURE__ */ __name(function (payload) {
    return payload === Infinity || payload === -Infinity;
}, 'isInfinite');
var isTypedArray = /* @__PURE__ */ __name(function (payload) {
    return ArrayBuffer.isView(payload) && !_instanceof(payload, DataView);
}, 'isTypedArray');
var isURL = /* @__PURE__ */ __name(function (payload) {
    return _instanceof(payload, URL);
}, 'isURL');
// ../../node_modules/superjson/dist/esm/pathstringifier.js
var escapeKey = /* @__PURE__ */ __name(function (key) {
    return key.replace(/\./g, '\\.');
}, 'escapeKey');
var stringifyPath = /* @__PURE__ */ __name(function (path) {
    return path.map(String).map(escapeKey).join('.');
}, 'stringifyPath');
var parsePath = /* @__PURE__ */ __name(function (string) {
    var result = [];
    var segment = '';
    for (var i2 = 0; i2 < string.length; i2++) {
        var char = string.charAt(i2);
        var isEscapedDot = char === '\\' && string.charAt(i2 + 1) === '.';
        if (isEscapedDot) {
            segment += '.';
            i2++;
            continue;
        }
        var isEndOfSegment = char === '.';
        if (isEndOfSegment) {
            result.push(segment);
            segment = '';
            continue;
        }
        segment += char;
    }
    var lastSegment = segment;
    result.push(lastSegment);
    return result;
}, 'parsePath');
// ../../node_modules/superjson/dist/esm/transformer.js
var __assign = function __assign1() {
    __assign =
        Object.assign ||
        function (t2) {
            for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
                s2 = arguments[i2];
                for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2)) t2[p2] = s2[p2];
            }
            return t2;
        };
    return __assign.apply(this, arguments);
};
var __read2 = function __read2(o2, n2) {
    var m2 = typeof Symbol === 'function' && o2[Symbol.iterator];
    if (!m2) return o2;
    var i2 = m2.call(o2),
        r2,
        ar = [],
        e2;
    try {
        while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done) ar.push(r2.value);
    } catch (error) {
        e2 = {
            error: error,
        };
    } finally {
        try {
            if (r2 && !r2.done && (m2 = i2['return'])) m2.call(i2);
        } finally {
            if (e2) throw e2.error;
        }
    }
    return ar;
};
var __spreadArray = function __spreadArray(to, from) {
    for (var i2 = 0, il = from.length, j = to.length; i2 < il; i2++, j++) to[j] = from[i2];
    return to;
};
function simpleTransformation(isApplicable, annotation, transform, untransform) {
    return {
        isApplicable: isApplicable,
        annotation: annotation,
        transform: transform,
        untransform: untransform,
    };
}
__name(simpleTransformation, 'simpleTransformation');
var simpleRules = [
    simpleTransformation(
        isUndefined,
        'undefined',
        function () {
            return null;
        },
        function () {
            return void 0;
        }
    ),
    simpleTransformation(
        isBigint,
        'bigint',
        function (v) {
            return v.toString();
        },
        function (v) {
            if (typeof BigInt !== 'undefined') {
                return BigInt(v);
            }
            console.error('Please add a BigInt polyfill.');
            return v;
        }
    ),
    simpleTransformation(
        isDate,
        'Date',
        function (v) {
            return v.toISOString();
        },
        function (v) {
            return new Date(v);
        }
    ),
    simpleTransformation(
        isError,
        'Error',
        function (v, superJson) {
            var baseError = {
                name: v.name,
                message: v.message,
            };
            superJson.allowedErrorProps.forEach(function (prop) {
                baseError[prop] = v[prop];
            });
            return baseError;
        },
        function (v, superJson) {
            var e2 = new Error(v.message);
            e2.name = v.name;
            e2.stack = v.stack;
            superJson.allowedErrorProps.forEach(function (prop) {
                e2[prop] = v[prop];
            });
            return e2;
        }
    ),
    simpleTransformation(
        isRegExp,
        'regexp',
        function (v) {
            return '' + v;
        },
        function (regex) {
            var body = regex.slice(1, regex.lastIndexOf('/'));
            var flags = regex.slice(regex.lastIndexOf('/') + 1);
            return new RegExp(body, flags);
        }
    ),
    simpleTransformation(
        isSet,
        'set', // (sets only exist in es6+)
        // eslint-disable-next-line es5/no-es6-methods
        function (v) {
            return __spreadArray([], __read2(v.values()));
        },
        function (v) {
            return new Set(v);
        }
    ),
    simpleTransformation(
        isMap,
        'map',
        function (v) {
            return __spreadArray([], __read2(v.entries()));
        },
        function (v) {
            return new Map(v);
        }
    ),
    simpleTransformation(
        function (v) {
            return isNaNValue(v) || isInfinite(v);
        },
        'number',
        function (v) {
            if (isNaNValue(v)) {
                return 'NaN';
            }
            if (v > 0) {
                return 'Infinity';
            } else {
                return '-Infinity';
            }
        },
        Number
    ),
    simpleTransformation(
        function (v) {
            return v === 0 && 1 / v === -Infinity;
        },
        'number',
        function () {
            return '-0';
        },
        Number
    ),
    simpleTransformation(
        isURL,
        'URL',
        function (v) {
            return v.toString();
        },
        function (v) {
            return new URL(v);
        }
    ),
];
function compositeTransformation(isApplicable, annotation, transform, untransform) {
    return {
        isApplicable: isApplicable,
        annotation: annotation,
        transform: transform,
        untransform: untransform,
    };
}
__name(compositeTransformation, 'compositeTransformation');
var symbolRule = compositeTransformation(
    function (s2, superJson) {
        if (isSymbol(s2)) {
            var isRegistered = !!superJson.symbolRegistry.getIdentifier(s2);
            return isRegistered;
        }
        return false;
    },
    function (s2, superJson) {
        var identifier = superJson.symbolRegistry.getIdentifier(s2);
        return ['symbol', identifier];
    },
    function (v) {
        return v.description;
    },
    function (_, a2, superJson) {
        var value = superJson.symbolRegistry.getValue(a2[1]);
        if (!value) {
            throw new Error('Trying to deserialize unknown symbol');
        }
        return value;
    }
);
var constructorToName = [
    Int8Array,
    Uint8Array,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    Uint8ClampedArray,
].reduce(function (obj, ctor) {
    obj[ctor.name] = ctor;
    return obj;
}, {});
var typedArrayRule = compositeTransformation(
    isTypedArray,
    function (v) {
        return ['typed-array', v.constructor.name];
    },
    function (v) {
        return __spreadArray([], __read2(v));
    },
    function (v, a2) {
        var ctor = constructorToName[a2[1]];
        if (!ctor) {
            throw new Error('Trying to deserialize unknown typed array');
        }
        return new ctor(v);
    }
);
function isInstanceOfRegisteredClass(potentialClass, superJson) {
    if (potentialClass === null || potentialClass === void 0 ? void 0 : potentialClass.constructor) {
        var isRegistered = !!superJson.classRegistry.getIdentifier(potentialClass.constructor);
        return isRegistered;
    }
    return false;
}
__name(isInstanceOfRegisteredClass, 'isInstanceOfRegisteredClass');
var classRule = compositeTransformation(
    isInstanceOfRegisteredClass,
    function (clazz, superJson) {
        var identifier = superJson.classRegistry.getIdentifier(clazz.constructor);
        return ['class', identifier];
    },
    function (clazz, superJson) {
        var allowedProps = superJson.classRegistry.getAllowedProps(clazz.constructor);
        if (!allowedProps) {
            return __assign({}, clazz);
        }
        var result = {};
        allowedProps.forEach(function (prop) {
            result[prop] = clazz[prop];
        });
        return result;
    },
    function (v, a2, superJson) {
        var clazz = superJson.classRegistry.getValue(a2[1]);
        if (!clazz) {
            throw new Error(
                'Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564'
            );
        }
        return Object.assign(Object.create(clazz.prototype), v);
    }
);
var customRule = compositeTransformation(
    function (value, superJson) {
        return !!superJson.customTransformerRegistry.findApplicable(value);
    },
    function (value, superJson) {
        var transformer = superJson.customTransformerRegistry.findApplicable(value);
        return ['custom', transformer.name];
    },
    function (value, superJson) {
        var transformer = superJson.customTransformerRegistry.findApplicable(value);
        return transformer.serialize(value);
    },
    function (v, a2, superJson) {
        var transformer = superJson.customTransformerRegistry.findByName(a2[1]);
        if (!transformer) {
            throw new Error('Trying to deserialize unknown custom value');
        }
        return transformer.deserialize(v);
    }
);
var compositeRules = [classRule, symbolRule, customRule, typedArrayRule];
var transformValue = /* @__PURE__ */ __name(function (value, superJson) {
    var applicableCompositeRule = findArr(compositeRules, function (rule) {
        return rule.isApplicable(value, superJson);
    });
    if (applicableCompositeRule) {
        return {
            value: applicableCompositeRule.transform(value, superJson),
            type: applicableCompositeRule.annotation(value, superJson),
        };
    }
    var applicableSimpleRule = findArr(simpleRules, function (rule) {
        return rule.isApplicable(value, superJson);
    });
    if (applicableSimpleRule) {
        return {
            value: applicableSimpleRule.transform(value, superJson),
            type: applicableSimpleRule.annotation,
        };
    }
    return void 0;
}, 'transformValue');
var simpleRulesByAnnotation = {};
simpleRules.forEach(function (rule) {
    simpleRulesByAnnotation[rule.annotation] = rule;
});
var untransformValue = /* @__PURE__ */ __name(function (json2, type, superJson) {
    if (isArray(type)) {
        switch (type[0]) {
            case 'symbol':
                return symbolRule.untransform(json2, type, superJson);
            case 'class':
                return classRule.untransform(json2, type, superJson);
            case 'custom':
                return customRule.untransform(json2, type, superJson);
            case 'typed-array':
                return typedArrayRule.untransform(json2, type, superJson);
            default:
                throw new Error('Unknown transformation: ' + type);
        }
    } else {
        var transformation = simpleRulesByAnnotation[type];
        if (!transformation) {
            throw new Error('Unknown transformation: ' + type);
        }
        return transformation.untransform(json2, superJson);
    }
}, 'untransformValue');
// ../../node_modules/superjson/dist/esm/accessDeep.js
var getNthKey = /* @__PURE__ */ __name(function (value, n2) {
    var keys = value.keys();
    while (n2 > 0) {
        keys.next();
        n2--;
    }
    return keys.next().value;
}, 'getNthKey');
function validatePath(path) {
    if (includes(path, '__proto__')) {
        throw new Error('__proto__ is not allowed as a property');
    }
    if (includes(path, 'prototype')) {
        throw new Error('prototype is not allowed as a property');
    }
    if (includes(path, 'constructor')) {
        throw new Error('constructor is not allowed as a property');
    }
}
__name(validatePath, 'validatePath');
var getDeep = /* @__PURE__ */ __name(function (object, path) {
    validatePath(path);
    for (var i2 = 0; i2 < path.length; i2++) {
        var key = path[i2];
        if (isSet(object)) {
            object = getNthKey(object, +key);
        } else if (isMap(object)) {
            var row = +key;
            var type = +path[++i2] === 0 ? 'key' : 'value';
            var keyOfRow = getNthKey(object, row);
            switch (type) {
                case 'key':
                    object = keyOfRow;
                    break;
                case 'value':
                    object = object.get(keyOfRow);
                    break;
            }
        } else {
            object = object[key];
        }
    }
    return object;
}, 'getDeep');
var setDeep = /* @__PURE__ */ __name(function (object, path, mapper) {
    validatePath(path);
    if (path.length === 0) {
        return mapper(object);
    }
    var parent = object;
    for (var i2 = 0; i2 < path.length - 1; i2++) {
        var key = path[i2];
        if (isArray(parent)) {
            var index = +key;
            parent = parent[index];
        } else if (isPlainObject2(parent)) {
            parent = parent[key];
        } else if (isSet(parent)) {
            var row = +key;
            parent = getNthKey(parent, row);
        } else if (isMap(parent)) {
            var isEnd = i2 === path.length - 2;
            if (isEnd) {
                break;
            }
            var row = +key;
            var type = +path[++i2] === 0 ? 'key' : 'value';
            var keyOfRow = getNthKey(parent, row);
            switch (type) {
                case 'key':
                    parent = keyOfRow;
                    break;
                case 'value':
                    parent = parent.get(keyOfRow);
                    break;
            }
        }
    }
    var lastKey = path[path.length - 1];
    if (isArray(parent)) {
        parent[+lastKey] = mapper(parent[+lastKey]);
    } else if (isPlainObject2(parent)) {
        parent[lastKey] = mapper(parent[lastKey]);
    }
    if (isSet(parent)) {
        var oldValue = getNthKey(parent, +lastKey);
        var newValue = mapper(oldValue);
        if (oldValue !== newValue) {
            parent['delete'](oldValue);
            parent.add(newValue);
        }
    }
    if (isMap(parent)) {
        var row = +path[path.length - 2];
        var keyToRow = getNthKey(parent, row);
        var type = +lastKey === 0 ? 'key' : 'value';
        switch (type) {
            case 'key': {
                var newKey = mapper(keyToRow);
                parent.set(newKey, parent.get(keyToRow));
                if (newKey !== keyToRow) {
                    parent['delete'](keyToRow);
                }
                break;
            }
            case 'value': {
                parent.set(keyToRow, mapper(parent.get(keyToRow)));
                break;
            }
        }
    }
    return object;
}, 'setDeep');
// ../../node_modules/superjson/dist/esm/plainer.js
var __read3 = function __read3(o2, n2) {
    var m2 = typeof Symbol === 'function' && o2[Symbol.iterator];
    if (!m2) return o2;
    var i2 = m2.call(o2),
        r2,
        ar = [],
        e2;
    try {
        while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done) ar.push(r2.value);
    } catch (error) {
        e2 = {
            error: error,
        };
    } finally {
        try {
            if (r2 && !r2.done && (m2 = i2['return'])) m2.call(i2);
        } finally {
            if (e2) throw e2.error;
        }
    }
    return ar;
};
var __spreadArray2 = function __spreadArray2(to, from) {
    for (var i2 = 0, il = from.length, j = to.length; i2 < il; i2++, j++) to[j] = from[i2];
    return to;
};
function traverse(tree, walker2, origin) {
    if (origin === void 0) {
        origin = [];
    }
    if (!tree) {
        return;
    }
    if (!isArray(tree)) {
        forEach(tree, function (subtree, key) {
            return traverse(
                subtree,
                walker2,
                __spreadArray2(__spreadArray2([], __read3(origin)), __read3(parsePath(key)))
            );
        });
        return;
    }
    var _a = __read3(tree, 2),
        nodeValue = _a[0],
        children = _a[1];
    if (children) {
        forEach(children, function (child, key) {
            traverse(child, walker2, __spreadArray2(__spreadArray2([], __read3(origin)), __read3(parsePath(key))));
        });
    }
    walker2(nodeValue, origin);
}
__name(traverse, 'traverse');
function applyValueAnnotations(plain, annotations, superJson) {
    traverse(annotations, function (type, path) {
        plain = setDeep(plain, path, function (v) {
            return untransformValue(v, type, superJson);
        });
    });
    return plain;
}
__name(applyValueAnnotations, 'applyValueAnnotations');
function applyReferentialEqualityAnnotations(plain, annotations) {
    var apply = function apply(identicalPaths, path) {
        var object = getDeep(plain, parsePath(path));
        identicalPaths.map(parsePath).forEach(function (identicalObjectPath) {
            plain = setDeep(plain, identicalObjectPath, function () {
                return object;
            });
        });
    };
    __name(apply, 'apply');
    if (isArray(annotations)) {
        var _a = __read3(annotations, 2),
            root = _a[0],
            other = _a[1];
        root.forEach(function (identicalPath) {
            plain = setDeep(plain, parsePath(identicalPath), function () {
                return plain;
            });
        });
        if (other) {
            forEach(other, apply);
        }
    } else {
        forEach(annotations, apply);
    }
    return plain;
}
__name(applyReferentialEqualityAnnotations, 'applyReferentialEqualityAnnotations');
var isDeep = /* @__PURE__ */ __name(function (object, superJson) {
    return (
        isPlainObject2(object) ||
        isArray(object) ||
        isMap(object) ||
        isSet(object) ||
        isInstanceOfRegisteredClass(object, superJson)
    );
}, 'isDeep');
function addIdentity(object, path, identities) {
    var existingSet = identities.get(object);
    if (existingSet) {
        existingSet.push(path);
    } else {
        identities.set(object, [path]);
    }
}
__name(addIdentity, 'addIdentity');
function generateReferentialEqualityAnnotations(identitites) {
    var result = {};
    var rootEqualityPaths = void 0;
    identitites.forEach(function (paths) {
        if (paths.length <= 1) {
            return;
        }
        var _a = __read3(
                paths
                    .map(function (path) {
                        return path.map(String);
                    })
                    .sort(function (a2, b2) {
                        return a2.length - b2.length;
                    })
            ),
            shortestPath = _a[0],
            identicalPaths = _a.slice(1);
        if (shortestPath.length === 0) {
            rootEqualityPaths = identicalPaths.map(stringifyPath);
        } else {
            result[stringifyPath(shortestPath)] = identicalPaths.map(stringifyPath);
        }
    });
    if (rootEqualityPaths) {
        if (isEmptyObject(result)) {
            return [rootEqualityPaths];
        } else {
            return [rootEqualityPaths, result];
        }
    } else {
        return isEmptyObject(result) ? void 0 : result;
    }
}
__name(generateReferentialEqualityAnnotations, 'generateReferentialEqualityAnnotations');
var walker = /* @__PURE__ */ __name(function (
    object,
    identities,
    superJson,
    dedupe,
    path,
    objectsInThisPath,
    seenObjects
) {
    var _a;
    if (path === void 0) {
        path = [];
    }
    if (objectsInThisPath === void 0) {
        objectsInThisPath = [];
    }
    if (seenObjects === void 0) {
        seenObjects = /* @__PURE__ */ new Map();
    }
    var primitive = isPrimitive(object);
    if (!primitive) {
        addIdentity(object, path, identities);
        var seen = seenObjects.get(object);
        if (seen) {
            return dedupe
                ? {
                      transformedValue: null,
                  }
                : seen;
        }
    }
    if (!isDeep(object, superJson)) {
        var transformed_1 = transformValue(object, superJson);
        var result_1 = transformed_1
            ? {
                  transformedValue: transformed_1.value,
                  annotations: [transformed_1.type],
              }
            : {
                  transformedValue: object,
              };
        if (!primitive) {
            seenObjects.set(object, result_1);
        }
        return result_1;
    }
    if (includes(objectsInThisPath, object)) {
        return {
            transformedValue: null,
        };
    }
    var transformationResult = transformValue(object, superJson);
    var transformed =
        (_a =
            transformationResult === null || transformationResult === void 0 ? void 0 : transformationResult.value) !==
            null && _a !== void 0
            ? _a
            : object;
    var transformedValue = isArray(transformed) ? [] : {};
    var innerAnnotations = {};
    forEach(transformed, function (value, index) {
        var recursiveResult = walker(
            value,
            identities,
            superJson,
            dedupe,
            __spreadArray2(__spreadArray2([], __read3(path)), [index]),
            __spreadArray2(__spreadArray2([], __read3(objectsInThisPath)), [object]),
            seenObjects
        );
        transformedValue[index] = recursiveResult.transformedValue;
        if (isArray(recursiveResult.annotations)) {
            innerAnnotations[index] = recursiveResult.annotations;
        } else if (isPlainObject2(recursiveResult.annotations)) {
            forEach(recursiveResult.annotations, function (tree, key) {
                innerAnnotations[escapeKey(index) + '.' + key] = tree;
            });
        }
    });
    var result = isEmptyObject(innerAnnotations)
        ? {
              transformedValue: transformedValue,
              annotations: !!transformationResult ? [transformationResult.type] : void 0,
          }
        : {
              transformedValue: transformedValue,
              annotations: !!transformationResult ? [transformationResult.type, innerAnnotations] : innerAnnotations,
          };
    if (!primitive) {
        seenObjects.set(object, result);
    }
    return result;
}, 'walker');
// ../../node_modules/is-what/dist/index.js
function getType2(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
}
__name(getType2, 'getType');
function isUndefined2(payload) {
    return getType2(payload) === 'Undefined';
}
__name(isUndefined2, 'isUndefined');
function isNull2(payload) {
    return getType2(payload) === 'Null';
}
__name(isNull2, 'isNull');
function isPlainObject3(payload) {
    if (getType2(payload) !== 'Object') return false;
    var prototype = Object.getPrototypeOf(payload);
    return !!prototype && prototype.constructor === Object && prototype === Object.prototype;
}
__name(isPlainObject3, 'isPlainObject');
function isArray2(payload) {
    return getType2(payload) === 'Array';
}
__name(isArray2, 'isArray');
var isNullOrUndefined = isOneOf(isNull2, isUndefined2);
function isOneOf(a2, b2, c, d, e2) {
    return function (value) {
        return a2(value) || b2(value) || (!!c && c(value)) || (!!d && d(value)) || (!!e2 && e2(value));
    };
}
__name(isOneOf, 'isOneOf');
// ../../node_modules/copy-anything/dist/index.js
function assignProp(carry, key, newVal, originalObject, includeNonenumerable) {
    var propType = {}.propertyIsEnumerable.call(originalObject, key) ? 'enumerable' : 'nonenumerable';
    if (propType === 'enumerable') carry[key] = newVal;
    if (includeNonenumerable && propType === 'nonenumerable') {
        Object.defineProperty(carry, key, {
            value: newVal,
            enumerable: false,
            writable: true,
            configurable: true,
        });
    }
}
__name(assignProp, 'assignProp');
function copy(target) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (isArray2(target)) {
        return target.map(function (item) {
            return copy(item, options);
        });
    }
    if (!isPlainObject3(target)) {
        return target;
    }
    var props = Object.getOwnPropertyNames(target);
    var symbols = Object.getOwnPropertySymbols(target);
    return _to_consumable_array(props)
        .concat(_to_consumable_array(symbols))
        .reduce(function (carry, key) {
            if (isArray2(options.props) && !options.props.includes(key)) {
                return carry;
            }
            var val = target[key];
            var newVal = copy(val, options);
            assignProp(carry, key, newVal, target, options.nonenumerable);
            return carry;
        }, {});
}
__name(copy, 'copy');
// ../../node_modules/superjson/dist/esm/index.js
var __assign2 = function __assign21() {
    __assign2 =
        Object.assign ||
        function (t2) {
            for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
                s2 = arguments[i2];
                for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2)) t2[p2] = s2[p2];
            }
            return t2;
        };
    return __assign2.apply(this, arguments);
};
var __read4 = function __read4(o2, n2) {
    var m2 = typeof Symbol === 'function' && o2[Symbol.iterator];
    if (!m2) return o2;
    var i2 = m2.call(o2),
        r2,
        ar = [],
        e2;
    try {
        while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done) ar.push(r2.value);
    } catch (error) {
        e2 = {
            error: error,
        };
    } finally {
        try {
            if (r2 && !r2.done && (m2 = i2['return'])) m2.call(i2);
        } finally {
            if (e2) throw e2.error;
        }
    }
    return ar;
};
var __spreadArray3 = function __spreadArray3(to, from) {
    for (var i2 = 0, il = from.length, j = to.length; i2 < il; i2++, j++) to[j] = from[i2];
    return to;
};
var SuperJSON = /** @class */ (function () {
    var SuperJSON2 = function SuperJSON2(_a) {
        var _b = _a === void 0 ? {} : _a,
            _c = _b.dedupe,
            dedupe = _c === void 0 ? false : _c;
        this.classRegistry = new ClassRegistry();
        this.symbolRegistry = new Registry(function (s2) {
            var _a2;
            return (_a2 = s2.description) !== null && _a2 !== void 0 ? _a2 : '';
        });
        this.customTransformerRegistry = new CustomTransformerRegistry();
        this.allowedErrorProps = [];
        this.dedupe = dedupe;
    };
    __name(SuperJSON2, 'SuperJSON');
    SuperJSON2.prototype.serialize = function (object) {
        var identities = /* @__PURE__ */ new Map();
        var output = walker(object, identities, this, this.dedupe);
        var res = {
            json: output.transformedValue,
        };
        if (output.annotations) {
            res.meta = __assign2(__assign2({}, res.meta), {
                values: output.annotations,
            });
        }
        var equalityAnnotations = generateReferentialEqualityAnnotations(identities);
        if (equalityAnnotations) {
            res.meta = __assign2(__assign2({}, res.meta), {
                referentialEqualities: equalityAnnotations,
            });
        }
        return res;
    };
    SuperJSON2.prototype.deserialize = function (payload) {
        var json2 = payload.json,
            meta = payload.meta;
        var result = copy(json2);
        if (meta === null || meta === void 0 ? void 0 : meta.values) {
            result = applyValueAnnotations(result, meta.values, this);
        }
        if (meta === null || meta === void 0 ? void 0 : meta.referentialEqualities) {
            result = applyReferentialEqualityAnnotations(result, meta.referentialEqualities);
        }
        return result;
    };
    SuperJSON2.prototype.stringify = function (object) {
        return JSON.stringify(this.serialize(object));
    };
    SuperJSON2.prototype.parse = function (string) {
        return this.deserialize(JSON.parse(string));
    };
    SuperJSON2.prototype.registerClass = function (v, options) {
        this.classRegistry.register(v, options);
    };
    SuperJSON2.prototype.registerSymbol = function (v, identifier) {
        this.symbolRegistry.register(v, identifier);
    };
    SuperJSON2.prototype.registerCustom = function (transformer, name) {
        this.customTransformerRegistry.register(
            __assign2(
                {
                    name: name,
                },
                transformer
            )
        );
    };
    SuperJSON2.prototype.allowErrorProps = function () {
        var _a;
        var props = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            props[_i] = arguments[_i];
        }
        (_a = this.allowedErrorProps).push.apply(_a, __spreadArray3([], __read4(props)));
    };
    SuperJSON2.defaultInstance = new SuperJSON2();
    SuperJSON2.serialize = SuperJSON2.defaultInstance.serialize.bind(SuperJSON2.defaultInstance);
    SuperJSON2.deserialize = SuperJSON2.defaultInstance.deserialize.bind(SuperJSON2.defaultInstance);
    SuperJSON2.stringify = SuperJSON2.defaultInstance.stringify.bind(SuperJSON2.defaultInstance);
    SuperJSON2.parse = SuperJSON2.defaultInstance.parse.bind(SuperJSON2.defaultInstance);
    SuperJSON2.registerClass = SuperJSON2.defaultInstance.registerClass.bind(SuperJSON2.defaultInstance);
    SuperJSON2.registerSymbol = SuperJSON2.defaultInstance.registerSymbol.bind(SuperJSON2.defaultInstance);
    SuperJSON2.registerCustom = SuperJSON2.defaultInstance.registerCustom.bind(SuperJSON2.defaultInstance);
    SuperJSON2.allowErrorProps = SuperJSON2.defaultInstance.allowErrorProps.bind(SuperJSON2.defaultInstance);
    return SuperJSON2;
})();
var esm_default = SuperJSON;
var serialize = SuperJSON.serialize;
var deserialize = SuperJSON.deserialize;
var stringify = SuperJSON.stringify;
var parse = SuperJSON.parse;
var registerClass = SuperJSON.registerClass;
var registerCustom = SuperJSON.registerCustom;
var registerSymbol = SuperJSON.registerSymbol;
var allowErrorProps = SuperJSON.allowErrorProps;
// ../../packages/trpc/superjson.ts
var superjson_default = esm_default;
// utils/trpc.ts
var createContext = /* @__PURE__ */ __name(function (param) {
    var req = param.req,
        res = param.res;
    return {
        req: req,
        res: res,
    };
}, 'createContext');
var trpc = initTRPC.context().create({
    transformer: superjson_default,
    errorFormatter: function errorFormatter(opts) {
        var shape = opts.shape,
            error = opts.error;
        return _object_spread_props(_object_spread({}, shape), {
            data: _object_spread_props(_object_spread({}, shape.data), {
                zodError:
                    error.code === 'BAD_REQUEST' && _instanceof(error.cause, ZodError) ? error.cause.flatten() : null,
            }),
        });
    },
});
var middleware = trpc.middleware;
var publicProcedure = trpc.procedure;
var router = trpc.router;
// router/property/index.ts
var propertyRoute = router({
    getProperties: publicProcedure.input(propertyFilterQuerySchema.optional()).query(
        (function () {
            var _ref = _async_to_generator(function (param) {
                var input,
                    _input,
                    _input1,
                    _input2,
                    _input3,
                    _input4,
                    _input5,
                    _input6,
                    _input7,
                    sqlPattern,
                    sqlPatternKeys,
                    property;
                return _ts_generator(this, function (_state) {
                    switch (_state.label) {
                        case 0:
                            input = param.input;
                            sqlPattern = {
                                price: ((_input = input) === null || _input === void 0 ? void 0 : _input.price)
                                    ? (0, import_drizzle_orm3.between)(
                                          properties.price,
                                          input.price.min,
                                          input.price.max
                                      )
                                    : null,
                                bed: ((_input1 = input) === null || _input1 === void 0 ? void 0 : _input1.bed)
                                    ? (0, import_drizzle_orm3.eq)(properties.bed, input.bed)
                                    : null,
                                bath: ((_input2 = input) === null || _input2 === void 0 ? void 0 : _input2.bath)
                                    ? (0, import_drizzle_orm3.eq)(properties.bath, input.bath)
                                    : null,
                                region: ((_input3 = input) === null || _input3 === void 0 ? void 0 : _input3.region)
                                    ? (0, import_drizzle_orm3.eq)(properties.region, input.region)
                                    : null,
                                types: ((_input4 = input) === null || _input4 === void 0 ? void 0 : _input4.types)
                                    ? (0, import_drizzle_orm3.eq)(properties.types, input.types)
                                    : null,
                                placeType: (
                                    (_input5 = input) === null || _input5 === void 0 ? void 0 : _input5.placeType
                                )
                                    ? (0, import_drizzle_orm3.eq)(properties.placeType, input.placeType)
                                    : null,
                                vat: ((_input6 = input) === null || _input6 === void 0 ? void 0 : _input6.vat)
                                    ? (0, import_drizzle_orm3.eq)(properties.vat, input.vat)
                                    : null,
                                tags: ((_input7 = input) === null || _input7 === void 0 ? void 0 : _input7.tags)
                                    ? (0, import_drizzle_orm3.eq)(tagsToProperties.tagId, input.tags)
                                    : null,
                            };
                            sqlPatternKeys = Object.entries(sqlPattern)
                                .map(function (param) {
                                    var _param = _sliced_to_array(param, 2),
                                        d = _param[1];
                                    return d;
                                })
                                .filter(function (d) {
                                    return d !== null;
                                });
                            return [
                                4,
                                database_default
                                    .selectDistinctOn([properties.id])
                                    .from(properties)
                                    .innerJoin(
                                        tagsToProperties,
                                        (0, import_drizzle_orm3.eq)(properties.id, tagsToProperties.propertyId)
                                    )
                                    .where(
                                        (0, import_drizzle_orm3.or).apply(this, _to_consumable_array(sqlPatternKeys))
                                    ),
                            ];
                        case 1:
                            property = _state.sent();
                            return [
                                2,
                                {
                                    property: property.map(function (property2) {
                                        return property2.properties;
                                    }),
                                },
                            ];
                    }
                });
            });
            return function (_) {
                return _ref.apply(this, arguments);
            };
        })()
    ),
    createProperty: publicProcedure
        .input(
            propertyCreateSchema.extend({
                tags: z.array(
                    z.object({
                        id: z.number(),
                    })
                ),
            })
        )
        .mutation(
            (function () {
                var _ref = _async_to_generator(function (param) {
                    var input, property, tagsInProperty;
                    return _ts_generator(this, function (_state) {
                        switch (_state.label) {
                            case 0:
                                input = param.input;
                                return [4, database_default.insert(properties).values(input).returning()];
                            case 1:
                                property = _state.sent();
                                tagsInProperty = input.tags.map(function (tag) {
                                    return {
                                        propertyId: property[0].id,
                                        tagId: tag.id,
                                    };
                                });
                                return [
                                    4,
                                    database_default.insert(tagsToProperties).values(tagsInProperty).returning(),
                                ];
                            case 2:
                                _state.sent();
                                return [2, property];
                        }
                    });
                });
                return function (_) {
                    return _ref.apply(this, arguments);
                };
            })()
        ),
    deleteProperty: publicProcedure
        .input(
            z.object({
                id: z.number(),
            })
        )
        .mutation(
            (function () {
                var _ref = _async_to_generator(function (param) {
                    var input, property;
                    return _ts_generator(this, function (_state) {
                        switch (_state.label) {
                            case 0:
                                input = param.input;
                                return [
                                    4,
                                    database_default
                                        .delete(tagsToProperties)
                                        .where((0, import_drizzle_orm3.eq)(tagsToProperties.propertyId, input.id)),
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    database_default
                                        .delete(properties)
                                        .where((0, import_drizzle_orm3.eq)(properties.id, input.id))
                                        .returning(),
                                ];
                            case 2:
                                property = _state.sent();
                                return [2, property];
                        }
                    });
                });
                return function (_) {
                    return _ref.apply(this, arguments);
                };
            })()
        ),
    getTags: publicProcedure.query(
        /*#__PURE__*/ _async_to_generator(function () {
            var tags;
            return _ts_generator(this, function (_state) {
                switch (_state.label) {
                    case 0:
                        return [4, database_default.query.propertyTags.findMany()];
                    case 1:
                        tags = _state.sent();
                        return [
                            2,
                            {
                                tags: tags,
                            },
                        ];
                }
            });
        })
    ),
    createTag: publicProcedure.input(propertyTagCreateSchema).mutation(
        (function () {
            var _ref = _async_to_generator(function (param) {
                var input, tag;
                return _ts_generator(this, function (_state) {
                    switch (_state.label) {
                        case 0:
                            input = param.input;
                            return [4, database_default.insert(propertyTags).values(input).returning()];
                        case 1:
                            tag = _state.sent();
                            return [2, tag];
                    }
                });
            });
            return function (_) {
                return _ref.apply(this, arguments);
            };
        })()
    ),
    deleteTag: publicProcedure
        .input(
            z.object({
                id: z.number(),
            })
        )
        .mutation(
            (function () {
                var _ref = _async_to_generator(function (param) {
                    var input, tag;
                    return _ts_generator(this, function (_state) {
                        switch (_state.label) {
                            case 0:
                                input = param.input;
                                return [
                                    4,
                                    database_default
                                        .delete(propertyTags)
                                        .where((0, import_drizzle_orm3.eq)(propertyTags.id, input.id))
                                        .returning(),
                                ];
                            case 1:
                                tag = _state.sent();
                                return [2, tag];
                        }
                    });
                });
                return function (_) {
                    return _ref.apply(this, arguments);
                };
            })()
        ),
});
var property_default = propertyRoute;
// index.ts
var appRouter = router({
    property: property_default,
});
var app = (0, import_express.default)();
if (false) app.use((0, import_morgan.default)('dev'));
app.use((0, import_cookie_parser.default)());
app.use((0, import_cors.default)());
app.use(
    '/api/trpc',
    createExpressMiddleware({
        router: appRouter,
        createContext: createContext,
    })
);
app.use('/test', function (req, res) {
    res.send('Hello World');
});
var port = default_default.port;
app.listen(port, function () {
    console.log('\uD83D\uDE80 Server listening on port '.concat(port));
});
// Annotate the CommonJS export names for ESM import in node:
0 &&
    (module.exports = {
        appRouter: appRouter,
    }); /*! Bundled license information:

basic-auth/index.js:
  (*!
   * basic-auth
   * Copyright(c) 2013 TJ Holowaychuk
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2015-2016 Douglas Christopher Wilson
   * MIT Licensed
   *)

depd/index.js:
  (*!
   * depd
   * Copyright(c) 2014-2018 Douglas Christopher Wilson
   * MIT Licensed
   *)

ee-first/index.js:
  (*!
   * ee-first
   * Copyright(c) 2014 Jonathan Ong
   * MIT Licensed
   *)

on-finished/index.js:
  (*!
   * on-finished
   * Copyright(c) 2013 Jonathan Ong
   * Copyright(c) 2014 Douglas Christopher Wilson
   * MIT Licensed
   *)

on-headers/index.js:
  (*!
   * on-headers
   * Copyright(c) 2014 Douglas Christopher Wilson
   * MIT Licensed
   *)

morgan/index.js:
  (*!
   * morgan
   * Copyright(c) 2010 Sencha Inc.
   * Copyright(c) 2011 TJ Holowaychuk
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2014-2017 Douglas Christopher Wilson
   * MIT Licensed
   *)

@neondatabase/serverless/index.js:
  (*! Bundled license information:
  
  ieee754/index.js:
    (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
  
  buffer/index.js:
    (*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     *)
  *)

@trpc/server/dist/resolveHTTPResponse-67085326.mjs:
  (* istanbul ignore if -- @preserve *)

@trpc/server/dist/nodeHTTPRequestHandler-a3cc8c22.mjs:
  (* istanbul ignore if -- @preserve *)
*/
