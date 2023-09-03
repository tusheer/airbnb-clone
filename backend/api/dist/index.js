'use strict';

var We = require('@airbnb/trpc/express');
var It = require('cookie-parser');
var Nt = require('cors');
var Ft = require('express');
var T = require('@airbnb/database');
var schema = require('@airbnb/schema');
var drizzleOrm = require('drizzle-orm');
var server = require('@airbnb/trpc/server');
var yt = require('@airbnb/trpc/superjson');
var nanoid = require('nanoid');
var St = require('sharp');
var Ot = require('jsonwebtoken');
var Je = require('multer');

function _interopDefault(e) {
    return e && e.__esModule ? e : { default: e };
}

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(
                    n,
                    k,
                    d.get
                        ? d
                        : {
                              enumerable: true,
                              get: function () {
                                  return e[k];
                              },
                          }
                );
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var We__namespace = /*#__PURE__*/ _interopNamespace(We);
var It__default = /*#__PURE__*/ _interopDefault(It);
var Nt__default = /*#__PURE__*/ _interopDefault(Nt);
var Ft__default = /*#__PURE__*/ _interopDefault(Ft);
var T__default = /*#__PURE__*/ _interopDefault(T);
var yt__default = /*#__PURE__*/ _interopDefault(yt);
var St__default = /*#__PURE__*/ _interopDefault(St);
var Ot__default = /*#__PURE__*/ _interopDefault(Ot);
var Je__default = /*#__PURE__*/ _interopDefault(Je);

var Ye = Object.create;
var ie = Object.defineProperty;
var Qe = Object.getOwnPropertyDescriptor;
var Xe = Object.getOwnPropertyNames;
var er = Object.getPrototypeOf,
    rr = Object.prototype.hasOwnProperty;
var x = ((e) =>
    typeof require != 'undefined'
        ? require
        : typeof Proxy != 'undefined'
        ? new Proxy(e, { get: (r, t) => (typeof require != 'undefined' ? require : r)[t] })
        : e)(function (e) {
    if (typeof require != 'undefined') return require.apply(this, arguments);
    throw Error('Dynamic require of "' + e + '" is not supported');
});
var v = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var tr = (e, r, t, n) => {
    if ((r && typeof r == 'object') || typeof r == 'function')
        for (let o of Xe(r))
            !rr.call(e, o) && o !== t && ie(e, o, { get: () => r[o], enumerable: !(n = Qe(r, o)) || n.enumerable });
    return e;
};
var nr = (e, r, t) => (
    (t = e != null ? Ye(er(e)) : {}),
    tr(r || !e || !e.__esModule ? ie(t, 'default', { value: e, enumerable: !0 }) : t, e)
);
var fe = v((G, ce) => {
    var L = x('buffer'),
        w = L.Buffer;
    function ue(e, r) {
        for (var t in e) r[t] = e[t];
    }
    w.from && w.alloc && w.allocUnsafe && w.allocUnsafeSlow ? (ce.exports = L) : (ue(L, G), (G.Buffer = S));
    function S(e, r, t) {
        return w(e, r, t);
    }
    ue(w, S);
    S.from = function (e, r, t) {
        if (typeof e == 'number') throw new TypeError('Argument must not be a number');
        return w(e, r, t);
    };
    S.alloc = function (e, r, t) {
        if (typeof e != 'number') throw new TypeError('Argument must be a number');
        var n = w(e);
        return r !== void 0 ? (typeof t == 'string' ? n.fill(r, t) : n.fill(r)) : n.fill(0), n;
    };
    S.allocUnsafe = function (e) {
        if (typeof e != 'number') throw new TypeError('Argument must be a number');
        return w(e);
    };
    S.allocUnsafeSlow = function (e) {
        if (typeof e != 'number') throw new TypeError('Argument must be a number');
        return L.SlowBuffer(e);
    };
});
var pe = v((Ht, V) => {
    var or = fe().Buffer;
    V.exports = ir;
    V.exports.parse = le;
    var ar = /^ *(?:[Bb][Aa][Ss][Ii][Cc]) +([A-Za-z0-9._~+/-]+=*) *$/,
        sr = /^([^:]*):(.*)$/;
    function ir(e) {
        if (!e) throw new TypeError('argument req is required');
        if (typeof e != 'object') throw new TypeError('argument req is required to be an object');
        var r = cr(e);
        return le(r);
    }
    function ur(e) {
        return or.from(e, 'base64').toString();
    }
    function cr(e) {
        if (!e.headers || typeof e.headers != 'object')
            throw new TypeError('argument req is required to have headers property');
        return e.headers.authorization;
    }
    function le(e) {
        if (typeof e == 'string') {
            var r = ar.exec(e);
            if (r) {
                var t = sr.exec(ur(r[1]));
                if (t) return new fr(t[1], t[2]);
            }
        }
    }
    function fr(e, r) {
        (this.name = e), (this.pass = r);
    }
});
var me = v((Lt, de) => {
    var R = 1e3,
        U = R * 60,
        F = U * 60,
        I = F * 24,
        lr = I * 365.25;
    de.exports = function (e, r) {
        r = r || {};
        var t = typeof e;
        if (t === 'string' && e.length > 0) return pr(e);
        if (t === 'number' && isNaN(e) === !1) return r.long ? mr(e) : dr(e);
        throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(e));
    };
    function pr(e) {
        if (((e = String(e)), !(e.length > 100))) {
            var r =
                /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
                    e
                );
            if (r) {
                var t = parseFloat(r[1]),
                    n = (r[2] || 'ms').toLowerCase();
                switch (n) {
                    case 'years':
                    case 'year':
                    case 'yrs':
                    case 'yr':
                    case 'y':
                        return t * lr;
                    case 'days':
                    case 'day':
                    case 'd':
                        return t * I;
                    case 'hours':
                    case 'hour':
                    case 'hrs':
                    case 'hr':
                    case 'h':
                        return t * F;
                    case 'minutes':
                    case 'minute':
                    case 'mins':
                    case 'min':
                    case 'm':
                        return t * U;
                    case 'seconds':
                    case 'second':
                    case 'secs':
                    case 'sec':
                    case 's':
                        return t * R;
                    case 'milliseconds':
                    case 'millisecond':
                    case 'msecs':
                    case 'msec':
                    case 'ms':
                        return t;
                    default:
                        return;
                }
            }
        }
    }
    function dr(e) {
        return e >= I
            ? Math.round(e / I) + 'd'
            : e >= F
            ? Math.round(e / F) + 'h'
            : e >= U
            ? Math.round(e / U) + 'm'
            : e >= R
            ? Math.round(e / R) + 's'
            : e + 'ms';
    }
    function mr(e) {
        return M(e, I, 'day') || M(e, F, 'hour') || M(e, U, 'minute') || M(e, R, 'second') || e + ' ms';
    }
    function M(e, r, t) {
        if (!(e < r)) return e < r * 1.5 ? Math.floor(e / r) + ' ' + t : Math.ceil(e / r) + ' ' + t + 's';
    }
});
var Y = v((u, ge) => {
    u = ge.exports = Z.debug = Z.default = Z;
    u.coerce = br;
    u.disable = vr;
    u.enable = hr;
    u.enabled = yr;
    u.humanize = me();
    u.names = [];
    u.skips = [];
    u.formatters = {};
    var W;
    function gr(e) {
        var r = 0,
            t;
        for (t in e) (r = (r << 5) - r + e.charCodeAt(t)), (r |= 0);
        return u.colors[Math.abs(r) % u.colors.length];
    }
    function Z(e) {
        function r() {
            if (r.enabled) {
                var t = r,
                    n = +new Date(),
                    o = n - (W || n);
                (t.diff = o), (t.prev = W), (t.curr = n), (W = n);
                for (var a = new Array(arguments.length), s = 0; s < a.length; s++) a[s] = arguments[s];
                (a[0] = u.coerce(a[0])), typeof a[0] != 'string' && a.unshift('%O');
                var i = 0;
                (a[0] = a[0].replace(/%([a-zA-Z%])/g, function (l, b) {
                    if (l === '%%') return l;
                    i++;
                    var m = u.formatters[b];
                    if (typeof m == 'function') {
                        var f = a[i];
                        (l = m.call(t, f)), a.splice(i, 1), i--;
                    }
                    return l;
                })),
                    u.formatArgs.call(t, a);
                var d = r.log || u.log || console.log.bind(console);
                d.apply(t, a);
            }
        }
        return (
            (r.namespace = e),
            (r.enabled = u.enabled(e)),
            (r.useColors = u.useColors()),
            (r.color = gr(e)),
            typeof u.init == 'function' && u.init(r),
            r
        );
    }
    function hr(e) {
        u.save(e), (u.names = []), (u.skips = []);
        for (var r = (typeof e == 'string' ? e : '').split(/[\s,]+/), t = r.length, n = 0; n < t; n++)
            r[n] &&
                ((e = r[n].replace(/\*/g, '.*?')),
                e[0] === '-'
                    ? u.skips.push(new RegExp('^' + e.substr(1) + '$'))
                    : u.names.push(new RegExp('^' + e + '$')));
    }
    function vr() {
        u.enable('');
    }
    function yr(e) {
        var r, t;
        for (r = 0, t = u.skips.length; r < t; r++) if (u.skips[r].test(e)) return !1;
        for (r = 0, t = u.names.length; r < t; r++) if (u.names[r].test(e)) return !0;
        return !1;
    }
    function br(e) {
        return e instanceof Error ? e.stack || e.message : e;
    }
});
var ye = v((g, ve) => {
    g = ve.exports = Y();
    g.log = Er;
    g.formatArgs = Tr;
    g.save = kr;
    g.load = he;
    g.useColors = wr;
    g.storage = typeof chrome != 'undefined' && typeof chrome.storage != 'undefined' ? chrome.storage.local : _r();
    g.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];
    function wr() {
        return typeof window != 'undefined' && window.process && window.process.type === 'renderer'
            ? !0
            : (typeof document != 'undefined' &&
                  document.documentElement &&
                  document.documentElement.style &&
                  document.documentElement.style.WebkitAppearance) ||
                  (typeof window != 'undefined' &&
                      window.console &&
                      (window.console.firebug || (window.console.exception && window.console.table))) ||
                  (typeof navigator != 'undefined' &&
                      navigator.userAgent &&
                      navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                      parseInt(RegExp.$1, 10) >= 31) ||
                  (typeof navigator != 'undefined' &&
                      navigator.userAgent &&
                      navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }
    g.formatters.j = function (e) {
        try {
            return JSON.stringify(e);
        } catch (r) {
            return '[UnexpectedJSONParseError]: ' + r.message;
        }
    };
    function Tr(e) {
        var r = this.useColors;
        if (
            ((e[0] =
                (r ? '%c' : '') +
                this.namespace +
                (r ? ' %c' : ' ') +
                e[0] +
                (r ? '%c ' : ' ') +
                '+' +
                g.humanize(this.diff)),
            !!r)
        ) {
            var t = 'color: ' + this.color;
            e.splice(1, 0, t, 'color: inherit');
            var n = 0,
                o = 0;
            e[0].replace(/%[a-zA-Z%]/g, function (a) {
                a !== '%%' && (n++, a === '%c' && (o = n));
            }),
                e.splice(o, 0, t);
        }
    }
    function Er() {
        return (
            typeof console == 'object' && console.log && Function.prototype.apply.call(console.log, console, arguments)
        );
    }
    function kr(e) {
        try {
            e == null ? g.storage.removeItem('debug') : (g.storage.debug = e);
        } catch (r) {}
    }
    function he() {
        var e;
        try {
            e = g.storage.debug;
        } catch (r) {}
        return !e && typeof process != 'undefined' && 'env' in process && (e = process.env.DEBUG), e;
    }
    g.enable(he());
    function _r() {
        try {
            return window.localStorage;
        } catch (e) {}
    }
});
var Ee = v((p, Te) => {
    var be = x('tty'),
        N = x('util');
    p = Te.exports = Y();
    p.init = Rr;
    p.log = Ar;
    p.formatArgs = Cr;
    p.save = Or;
    p.load = we;
    p.useColors = Sr;
    p.colors = [6, 2, 3, 4, 5, 1];
    p.inspectOpts = Object.keys(process.env)
        .filter(function (e) {
            return /^debug_/i.test(e);
        })
        .reduce(function (e, r) {
            var t = r
                    .substring(6)
                    .toLowerCase()
                    .replace(/_([a-z])/g, function (o, a) {
                        return a.toUpperCase();
                    }),
                n = process.env[r];
            return (
                /^(yes|on|true|enabled)$/i.test(n)
                    ? (n = !0)
                    : /^(no|off|false|disabled)$/i.test(n)
                    ? (n = !1)
                    : n === 'null'
                    ? (n = null)
                    : (n = Number(n)),
                (e[t] = n),
                e
            );
        }, {});
    var C = parseInt(process.env.DEBUG_FD, 10) || 2;
    C !== 1 &&
        C !== 2 &&
        N.deprecate(
            function () {},
            'except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)'
        )();
    var xr = C === 1 ? process.stdout : C === 2 ? process.stderr : Pr(C);
    function Sr() {
        return 'colors' in p.inspectOpts ? !!p.inspectOpts.colors : be.isatty(C);
    }
    p.formatters.o = function (e) {
        return (
            (this.inspectOpts.colors = this.useColors),
            N.inspect(e, this.inspectOpts)
                .split(
                    `
`
                )
                .map(function (r) {
                    return r.trim();
                })
                .join(' ')
        );
    };
    p.formatters.O = function (e) {
        return (this.inspectOpts.colors = this.useColors), N.inspect(e, this.inspectOpts);
    };
    function Cr(e) {
        var r = this.namespace,
            t = this.useColors;
        if (t) {
            var n = this.color,
                o = '  \x1B[3' + n + ';1m' + r + ' \x1B[0m';
            (e[0] =
                o +
                e[0]
                    .split(
                        `
`
                    )
                    .join(
                        `
` + o
                    )),
                e.push('\x1B[3' + n + 'm+' + p.humanize(this.diff) + '\x1B[0m');
        } else e[0] = new Date().toUTCString() + ' ' + r + ' ' + e[0];
    }
    function Ar() {
        return xr.write(
            N.format.apply(N, arguments) +
                `
`
        );
    }
    function Or(e) {
        e == null ? delete process.env.DEBUG : (process.env.DEBUG = e);
    }
    function we() {
        return process.env.DEBUG;
    }
    function Pr(e) {
        var r,
            t = process.binding('tty_wrap');
        switch (t.guessHandleType(e)) {
            case 'TTY':
                (r = new be.WriteStream(e)), (r._type = 'tty'), r._handle && r._handle.unref && r._handle.unref();
                break;
            case 'FILE':
                var n = x('fs');
                (r = new n.SyncWriteStream(e, { autoClose: !1 })), (r._type = 'fs');
                break;
            case 'PIPE':
            case 'TCP':
                var o = x('net');
                (r = new o.Socket({ fd: e, readable: !1, writable: !0 })),
                    (r.readable = !1),
                    (r.read = null),
                    (r._type = 'pipe'),
                    r._handle && r._handle.unref && r._handle.unref();
                break;
            default:
                throw new Error('Implement me. Unknown stream file type!');
        }
        return (r.fd = e), (r._isStdio = !0), r;
    }
    function Rr(e) {
        e.inspectOpts = {};
        for (var r = Object.keys(p.inspectOpts), t = 0; t < r.length; t++) e.inspectOpts[r[t]] = p.inspectOpts[r[t]];
    }
    p.enable(we());
});
var ke = v((Mt, Q) => {
    typeof process != 'undefined' && process.type === 'renderer' ? (Q.exports = ye()) : (Q.exports = Ee());
});
var Ae = v((Bt, Ce) => {
    var Ur = x('path').relative;
    Ce.exports = jr;
    var Fr = process.cwd();
    function xe(e, r) {
        for (var t = e.split(/[ ,]+/), n = String(r).toLowerCase(), o = 0; o < t.length; o++) {
            var a = t[o];
            if (a && (a === '*' || a.toLowerCase() === n)) return !0;
        }
        return !1;
    }
    function Ir(e, r, t) {
        var n = Object.getOwnPropertyDescriptor(e, r),
            o = n.value;
        return (
            (n.get = function () {
                return o;
            }),
            n.writable &&
                (n.set = function (s) {
                    return (o = s);
                }),
            delete n.value,
            delete n.writable,
            Object.defineProperty(e, r, n),
            n
        );
    }
    function Nr(e) {
        for (var r = '', t = 0; t < e; t++) r += ', arg' + t;
        return r.substr(2);
    }
    function qr(e) {
        var r = this.name + ': ' + this.namespace;
        this.message && (r += ' deprecated ' + this.message);
        for (var t = 0; t < e.length; t++)
            r +=
                `
    at ` + e[t].toString();
        return r;
    }
    function jr(e) {
        if (!e) throw new TypeError('argument namespace is required');
        var r = K(),
            t = A(r[1]),
            n = t[0];
        function o(a) {
            B.call(o, a);
        }
        return (
            (o._file = n),
            (o._ignored = Hr(e)),
            (o._namespace = e),
            (o._traced = Lr(e)),
            (o._warned = Object.create(null)),
            (o.function = $r),
            (o.property = Jr),
            o
        );
    }
    function Dr(e, r) {
        var t = typeof e.listenerCount != 'function' ? e.listeners(r).length : e.listenerCount(r);
        return t > 0;
    }
    function Hr(e) {
        if (process.noDeprecation) return !0;
        var r = process.env.NO_DEPRECATION || '';
        return xe(r, e);
    }
    function Lr(e) {
        if (process.traceDeprecation) return !0;
        var r = process.env.TRACE_DEPRECATION || '';
        return xe(r, e);
    }
    function B(e, r) {
        var t = Dr(process, 'deprecation');
        if (!(!t && this._ignored)) {
            var n,
                o,
                a,
                s,
                i = 0,
                d = !1,
                l = K(),
                b = this._file;
            for (
                r ? ((s = r), (a = A(l[1])), (a.name = s.name), (b = a[0])) : ((i = 2), (s = A(l[i])), (a = s));
                i < l.length;
                i++
            )
                if (((n = A(l[i])), (o = n[0]), o === b)) d = !0;
                else if (o === this._file) b = this._file;
                else if (d) break;
            var m = n ? s.join(':') + '__' + n.join(':') : void 0;
            if (!(m !== void 0 && m in this._warned)) {
                this._warned[m] = !0;
                var f = e;
                if ((f || (f = a === s || !a.name ? _e(s) : _e(a)), t)) {
                    var E = Se(this._namespace, f, l.slice(i));
                    process.emit('deprecation', E);
                    return;
                }
                var D = process.stderr.isTTY ? Br : Mr,
                    H = D.call(this, f, n, l.slice(i));
                process.stderr.write(
                    H +
                        `
`,
                    'utf8'
                );
            }
        }
    }
    function A(e) {
        var r = e.getFileName() || '<anonymous>',
            t = e.getLineNumber(),
            n = e.getColumnNumber();
        e.isEval() && (r = e.getEvalOrigin() + ', ' + r);
        var o = [r, t, n];
        return (o.callSite = e), (o.name = e.getFunctionName()), o;
    }
    function _e(e) {
        var r = e.callSite,
            t = e.name;
        t || (t = '<anonymous@' + X(e) + '>');
        var n = r.getThis(),
            o = n && r.getTypeName();
        return (
            o === 'Object' && (o = void 0),
            o === 'Function' && (o = n.name || o),
            o && r.getMethodName() ? o + '.' + t : t
        );
    }
    function Mr(e, r, t) {
        var n = new Date().toUTCString(),
            o = n + ' ' + this._namespace + ' deprecated ' + e;
        if (this._traced) {
            for (var a = 0; a < t.length; a++)
                o +=
                    `
    at ` + t[a].toString();
            return o;
        }
        return r && (o += ' at ' + X(r)), o;
    }
    function Br(e, r, t) {
        var n = '\x1B[36;1m' + this._namespace + '\x1B[22;39m \x1B[33;1mdeprecated\x1B[22;39m \x1B[0m' + e + '\x1B[39m';
        if (this._traced) {
            for (var o = 0; o < t.length; o++)
                n +=
                    `
    \x1B[36mat ` +
                    t[o].toString() +
                    '\x1B[39m';
            return n;
        }
        return r && (n += ' \x1B[36m' + X(r) + '\x1B[39m'), n;
    }
    function X(e) {
        return Ur(Fr, e[0]) + ':' + e[1] + ':' + e[2];
    }
    function K() {
        var e = Error.stackTraceLimit,
            r = {},
            t = Error.prepareStackTrace;
        (Error.prepareStackTrace = Kr), (Error.stackTraceLimit = Math.max(10, e)), Error.captureStackTrace(r);
        var n = r.stack.slice(1);
        return (Error.prepareStackTrace = t), (Error.stackTraceLimit = e), n;
    }
    function Kr(e, r) {
        return r;
    }
    function $r(e, r) {
        if (typeof e != 'function') throw new TypeError('argument fn must be a function');
        var t = Nr(e.length),
            n = K(),
            o = A(n[1]);
        o.name = e.name;
        var a = new Function(
            'fn',
            'log',
            'deprecate',
            'message',
            'site',
            `"use strict"
return function (` +
                t +
                `) {log.call(deprecate, message, site)
return fn.apply(this, arguments)
}`
        )(e, B, this, r, o);
        return a;
    }
    function Jr(e, r, t) {
        if (!e || (typeof e != 'object' && typeof e != 'function')) throw new TypeError('argument obj must be object');
        var n = Object.getOwnPropertyDescriptor(e, r);
        if (!n) throw new TypeError('must call property on owner object');
        if (!n.configurable) throw new TypeError('property must be configurable');
        var o = this,
            a = K(),
            s = A(a[1]);
        (s.name = r), 'value' in n && (n = Ir(e, r));
        var i = n.get,
            d = n.set;
        typeof i == 'function' &&
            (n.get = function () {
                return B.call(o, t, s), i.apply(this, arguments);
            }),
            typeof d == 'function' &&
                (n.set = function () {
                    return B.call(o, t, s), d.apply(this, arguments);
                }),
            Object.defineProperty(e, r, n);
    }
    function Se(e, r, t) {
        var n = new Error(),
            o;
        return (
            Object.defineProperty(n, 'constructor', { value: Se }),
            Object.defineProperty(n, 'message', { configurable: !0, enumerable: !1, value: r, writable: !0 }),
            Object.defineProperty(n, 'name', {
                enumerable: !1,
                configurable: !0,
                value: 'DeprecationError',
                writable: !0,
            }),
            Object.defineProperty(n, 'namespace', { configurable: !0, enumerable: !1, value: e, writable: !0 }),
            Object.defineProperty(n, 'stack', {
                configurable: !0,
                enumerable: !1,
                get: function () {
                    return o !== void 0 ? o : (o = qr.call(this, t));
                },
                set: function (s) {
                    o = s;
                },
            }),
            n
        );
    }
});
var Pe = v((Kt, Oe) => {
    Oe.exports = zr;
    function zr(e, r) {
        if (!Array.isArray(e)) throw new TypeError('arg must be an array of [ee, events...] arrays');
        for (var t = [], n = 0; n < e.length; n++) {
            var o = e[n];
            if (!Array.isArray(o) || o.length < 2) throw new TypeError('each array member must be [ee, events...]');
            for (var a = o[0], s = 1; s < o.length; s++) {
                var i = o[s],
                    d = Gr(i, l);
                a.on(i, d), t.push({ ee: a, event: i, fn: d });
            }
        }
        function l() {
            b(), r.apply(null, arguments);
        }
        function b() {
            for (var f, E = 0; E < t.length; E++) (f = t[E]), f.ee.removeListener(f.event, f.fn);
        }
        function m(f) {
            r = f;
        }
        return (m.cancel = b), m;
    }
    function Gr(e, r) {
        return function (n) {
            for (var o = new Array(arguments.length), a = this, s = e === 'error' ? n : null, i = 0; i < o.length; i++)
                o[i] = arguments[i];
            r(s, a, e, o);
        };
    }
});
var Fe = v(($t, ee) => {
    ee.exports = Wr;
    ee.exports.isFinished = Ue;
    var Re = Pe(),
        Vr =
            typeof setImmediate == 'function'
                ? setImmediate
                : function (e) {
                      process.nextTick(e.bind.apply(e, arguments));
                  };
    function Wr(e, r) {
        return Ue(e) !== !1 ? (Vr(r, null, e), e) : (Yr(e, r), e);
    }
    function Ue(e) {
        var r = e.socket;
        if (typeof e.finished == 'boolean') return !!(e.finished || (r && !r.writable));
        if (typeof e.complete == 'boolean') return !!(e.upgrade || !r || !r.readable || (e.complete && !e.readable));
    }
    function Zr(e, r) {
        var t,
            n,
            o = !1;
        function a(i) {
            t.cancel(), n.cancel(), (o = !0), r(i);
        }
        t = n = Re([[e, 'end', 'finish']], a);
        function s(i) {
            e.removeListener('socket', s), !o && t === n && (n = Re([[i, 'error', 'close']], a));
        }
        if (e.socket) {
            s(e.socket);
            return;
        }
        e.on('socket', s), e.socket === void 0 && Xr(e, s);
    }
    function Yr(e, r) {
        var t = e.__onFinished;
        (!t || !t.queue) && ((t = e.__onFinished = Qr(e)), Zr(e, t)), t.queue.push(r);
    }
    function Qr(e) {
        function r(t) {
            if ((e.__onFinished === r && (e.__onFinished = null), !!r.queue)) {
                var n = r.queue;
                r.queue = null;
                for (var o = 0; o < n.length; o++) n[o](t, e);
            }
        }
        return (r.queue = []), r;
    }
    function Xr(e, r) {
        var t = e.assignSocket;
        typeof t == 'function' &&
            (e.assignSocket = function (o) {
                t.call(this, o), r(o);
            });
    }
});
var Ne = v((Jt, Ie) => {
    Ie.exports = rt;
    function et(e, r) {
        var t = !1;
        return function (o) {
            var a = ot.apply(this, arguments);
            return (
                t ||
                    ((t = !0),
                    r.call(this),
                    typeof a[0] == 'number' && this.statusCode !== a[0] && ((a[0] = this.statusCode), (a.length = 1))),
                e.apply(this, a)
            );
        };
    }
    function rt(e, r) {
        if (!e) throw new TypeError('argument res is required');
        if (typeof r != 'function') throw new TypeError('argument listener must be a function');
        e.writeHead = et(e.writeHead, r);
    }
    function tt(e, r) {
        for (var t = 0; t < r.length; t++) e.setHeader(r[t][0], r[t][1]);
    }
    function nt(e, r) {
        for (var t = Object.keys(r), n = 0; n < t.length; n++) {
            var o = t[n];
            o && e.setHeader(o, r[o]);
        }
    }
    function ot(e) {
        var r = arguments.length,
            t = r > 1 && typeof arguments[1] == 'string' ? 2 : 1,
            n = r >= t + 1 ? arguments[t] : void 0;
        (this.statusCode = e), Array.isArray(n) ? tt(this, n) : n && nt(this, n);
        for (var o = new Array(Math.min(r, t)), a = 0; a < o.length; a++) o[a] = arguments[a];
        return o;
    }
});
var De = v((zt, q) => {
    q.exports = c;
    q.exports.compile = te;
    q.exports.format = pt;
    q.exports.token = mt;
    var at = pe(),
        re = ke()('morgan'),
        J = Ae()('morgan'),
        st = Fe(),
        it = Ne(),
        ut = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        ct = 1e3;
    function c(e, r) {
        var t = e,
            n = r || {};
        e &&
            typeof e == 'object' &&
            ((n = e),
            (t = n.format || 'default'),
            J(
                'morgan(options): use morgan(' +
                    (typeof t == 'string' ? JSON.stringify(t) : 'format') +
                    ', options) instead'
            )),
            t === void 0 && J('undefined format: specify a format');
        var o = n.immediate,
            a = n.skip || !1,
            s = typeof t != 'function' ? dt(t) : t,
            i = n.buffer,
            d = n.stream || process.stdout;
        if (i) {
            J('buffer option');
            var l = typeof i != 'number' ? ct : i;
            d = lt(d, l);
        }
        return function (m, f, E) {
            (m._startAt = void 0),
                (m._startTime = void 0),
                (m._remoteAddress = je(m)),
                (f._startAt = void 0),
                (f._startTime = void 0),
                qe.call(m);
            function D() {
                if (a !== !1 && a(m, f)) {
                    re('skip request');
                    return;
                }
                var H = s(c, m, f);
                if (H == null) {
                    re('skip line');
                    return;
                }
                re('log request'),
                    d.write(
                        H +
                            `
`
                    );
            }
            o ? D() : (it(f, qe), st(f, D)), E();
        };
    }
    c.format(
        'combined',
        ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'
    );
    c.format(
        'common',
        ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'
    );
    c.format(
        'default',
        ':remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'
    );
    J.property(c, 'default', 'default format: use combined format');
    c.format(
        'short',
        ':remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms'
    );
    c.format('tiny', ':method :url :status :res[content-length] - :response-time ms');
    c.format('dev', function e(r, t, n) {
        var o = ne(n) ? n.statusCode : void 0,
            a = o >= 500 ? 31 : o >= 400 ? 33 : o >= 300 ? 36 : o >= 200 ? 32 : 0,
            s = e[a];
        return (
            s ||
                (s = e[a] =
                    te(
                        '\x1B[0m:method :url \x1B[' +
                            a +
                            'm:status\x1B[0m :response-time ms - :res[content-length]\x1B[0m'
                    )),
            s(r, t, n)
        );
    });
    c.token('url', function (r) {
        return r.originalUrl || r.url;
    });
    c.token('method', function (r) {
        return r.method;
    });
    c.token('response-time', function (r, t, n) {
        if (!(!r._startAt || !t._startAt)) {
            var o = (t._startAt[0] - r._startAt[0]) * 1e3 + (t._startAt[1] - r._startAt[1]) * 1e-6;
            return o.toFixed(n === void 0 ? 3 : n);
        }
    });
    c.token('total-time', function (r, t, n) {
        if (!(!r._startAt || !t._startAt)) {
            var o = process.hrtime(r._startAt),
                a = o[0] * 1e3 + o[1] * 1e-6;
            return a.toFixed(n === void 0 ? 3 : n);
        }
    });
    c.token('date', function (r, t, n) {
        var o = new Date();
        switch (n || 'web') {
            case 'clf':
                return ft(o);
            case 'iso':
                return o.toISOString();
            case 'web':
                return o.toUTCString();
        }
    });
    c.token('status', function (r, t) {
        return ne(t) ? String(t.statusCode) : void 0;
    });
    c.token('referrer', function (r) {
        return r.headers.referer || r.headers.referrer;
    });
    c.token('remote-addr', je);
    c.token('remote-user', function (r) {
        var t = at(r);
        return t ? t.name : void 0;
    });
    c.token('http-version', function (r) {
        return r.httpVersionMajor + '.' + r.httpVersionMinor;
    });
    c.token('user-agent', function (r) {
        return r.headers['user-agent'];
    });
    c.token('req', function (r, t, n) {
        var o = r.headers[n.toLowerCase()];
        return Array.isArray(o) ? o.join(', ') : o;
    });
    c.token('res', function (r, t, n) {
        if (ne(t)) {
            var o = t.getHeader(n);
            return Array.isArray(o) ? o.join(', ') : o;
        }
    });
    function ft(e) {
        var r = e.getUTCDate(),
            t = e.getUTCHours(),
            n = e.getUTCMinutes(),
            o = e.getUTCSeconds(),
            a = e.getUTCFullYear(),
            s = ut[e.getUTCMonth()];
        return $(r) + '/' + s + '/' + a + ':' + $(t) + ':' + $(n) + ':' + $(o) + ' +0000';
    }
    function te(e) {
        if (typeof e != 'string') throw new TypeError('argument format must be a string');
        var r = String(JSON.stringify(e)),
            t =
                `  "use strict"
  return ` +
                r.replace(/:([-\w]{2,})(?:\[([^\]]+)\])?/g, function (n, o, a) {
                    var s = 'req, res',
                        i = 'tokens[' + String(JSON.stringify(o)) + ']';
                    return (
                        a !== void 0 && (s += ', ' + String(JSON.stringify(a))),
                        `" +
    (` +
                            i +
                            '(' +
                            s +
                            ') || "-") + "'
                    );
                });
        return new Function('tokens, req, res', t);
    }
    function lt(e, r) {
        var t = [],
            n = null;
        function o() {
            (n = null), e.write(t.join('')), (t.length = 0);
        }
        function a(s) {
            n === null && (n = setTimeout(o, r)), t.push(s);
        }
        return { write: a };
    }
    function pt(e, r) {
        return (c[e] = r), this;
    }
    function dt(e) {
        var r = c[e] || e || c.default;
        return typeof r != 'function' ? te(r) : r;
    }
    function je(e) {
        return e.ip || e._remoteAddress || (e.connection && e.connection.remoteAddress) || void 0;
    }
    function ne(e) {
        return typeof e.headersSent != 'boolean' ? !!e._header : e.headersSent;
    }
    function $(e) {
        var r = String(e);
        return (r.length === 1 ? '0' : '') + r;
    }
    function qe() {
        (this._startAt = process.hrtime()), (this._startTime = new Date());
    }
    function mt(e, r) {
        return (c[e] = r), this;
    }
});
var Ze = nr(De());
var gt = {
        port: 8080,
        accessTokenExpiresIn: 1,
        refreshTokenExpiresIn: 60,
        origin: 'http://localhost:3000',
        redisCacheExpiresIn: 60,
        dbUri: process.env.POSTGRESQLURL,
        accessTokenPrivateKey: process.env.ACCESS_TOKEN_PRIVATE_KEY,
        accessTokenPublicKey: process.env.ACCESS_TOKEN_PUBLIC_KEY,
        refreshTokenPrivateKey: process.env.REFRESH_TOKEN_PRIVATE_KEY,
        refreshTokenPublicKey: process.env.REFRESH_TOKEN_PUBLIC_KEY,
    },
    j = gt;
var He = ({ req: e, res: r }) => ({ req: e, res: r }),
    oe = server.initTRPC.context().create({
        transformer: yt__default.default,
        errorFormatter(e) {
            let { shape: r, error: t } = e;
            return {
                ...r,
                data: {
                    ...r.data,
                    zodError: t.code === 'BAD_REQUEST' && t.cause instanceof schema.ZodError ? t.cause.flatten() : null,
                },
            };
        },
    });
oe.middleware;
var k = oe.procedure,
    z = oe.router;
var _t = z({
        getProperties: k.input(schema.propertyFilterQuerySchema.optional()).query(async ({ input: e }) => {
            let r = {
                    price:
                        e != null && e.price ? drizzleOrm.between(T.properties.price, e.price.min, e.price.max) : null,
                    bed: e != null && e.bed ? drizzleOrm.eq(T.properties.bed, e.bed) : null,
                    bath: e != null && e.bath ? drizzleOrm.eq(T.properties.bath, e.bath) : null,
                    region: e != null && e.region ? drizzleOrm.eq(T.properties.region, e.region) : null,
                    types: e != null && e.types ? drizzleOrm.eq(T.properties.types, e.types) : null,
                    placeType: e != null && e.placeType ? drizzleOrm.eq(T.properties.placeType, e.placeType) : null,
                    vat: e != null && e.vat ? drizzleOrm.eq(T.properties.vat, e.vat) : null,
                    tags: e != null && e.tags ? drizzleOrm.eq(T.tagsToProperties.tagId, e.tags) : null,
                },
                t = Object.entries(r)
                    .map(([, o]) => o)
                    .filter((o) => o !== null);
            return {
                property: (
                    await T__default.default
                        .selectDistinctOn([T.properties.id])
                        .from(T.properties)
                        .innerJoin(T.tagsToProperties, drizzleOrm.eq(T.properties.id, T.tagsToProperties.propertyId))
                        .where(drizzleOrm.or(...t))
                ).map((o) => o.properties),
            };
        }),
        createProperty: k
            .input(
                schema.propertyCreateSchema.extend({ tags: schema.z.array(schema.z.object({ id: schema.z.number() })) })
            )
            .mutation(async ({ input: e }) => {
                let r = await T__default.default.insert(T.properties).values(e).returning(),
                    t = e.tags.map((n) => ({ propertyId: r[0].id, tagId: n.id }));
                return await T__default.default.insert(T.tagsToProperties).values(t).returning(), r;
            }),
        deleteProperty: k
            .input(schema.z.object({ id: schema.z.number() }))
            .mutation(
                async ({ input: e }) => (
                    await T__default.default
                        .delete(T.tagsToProperties)
                        .where(drizzleOrm.eq(T.tagsToProperties.propertyId, e.id)),
                    await T__default.default
                        .delete(T.properties)
                        .where(drizzleOrm.eq(T.properties.id, e.id))
                        .returning()
                )
            ),
        getTags: k.query(async () => ({ tags: await T__default.default.query.propertyTags.findMany() })),
        createTag: k
            .input(schema.propertyTagCreateSchema)
            .mutation(async ({ input: e }) => await T__default.default.insert(T.propertyTags).values(e).returning()),
        deleteTag: k
            .input(schema.z.object({ id: schema.z.number() }))
            .mutation(
                async ({ input: e }) =>
                    await T__default.default
                        .delete(T.propertyTags)
                        .where(drizzleOrm.eq(T.propertyTags.id, e.id))
                        .returning()
            ),
    }),
    Le = _t;
var Ct = [
        { size: 'xsm', quality: 4 },
        { size: 'sm', quality: 10 },
        { size: 'md', quality: 40 },
        { size: 'lg', quality: 60 },
    ],
    Me = async (e, r) => {
        let t = e.file,
            n = e.body.blur_hash;
        if (!t || !n) return new Error('File is required');
        let o = [];
        await Promise.all(
            Ct.map(async ({ quality: a, size: s }) => {
                let i = t.originalname.replace(/\..+$/, ''),
                    d = `${s}-${i}-${Date.now()}${nanoid.nanoid(6)}.jpeg`,
                    l = `${__dirname}/../../uploads/images/${d}`;
                await St__default.default(t.buffer).toFormat('jpeg').jpeg({ quality: a }).toFile(l),
                    o.push({ url: `uploads/images/${d}`, size: s });
            })
        ),
            r.status(200).send({ message: 'SUCCESS', result: { sizes: o, originalFileName: t.originalname, hash: n } });
    };
var Be = (e, r) => {
    let t = Buffer.from(j[r], 'base64').toString('ascii');
    try {
        return Ot__default.default.verify(e, t);
    } catch (n) {
        throw new server.TRPCError({ code: 'UNAUTHORIZED', message: 'JWT Isssue', cause: n });
    }
};
var Pt = (e, r, t) => {
        try {
            let n = e.cookies.access_token,
                o = e.cookies.device_uid,
                a = e.cookies.refresh_token,
                s = e.cookies.logged_in;
            if (!n && !o && !a && !s) throw new Error('UNAUTHORIZED');
            if (!Be(n, 'accessTokenPrivateKey')) throw new Error('UNAUTHORIZED');
            return t();
        } catch (n) {
            throw new Error('UNAUTHORIZED');
        }
    },
    Ke = Pt;
var Rt = (e, r, t) => {
        console.log('Middleware Error Hadnling');
        let n = (e == null ? void 0 : e.statusCode) || 400,
            o = e.message || 'Something went wrong';
        t.status(n).json({
            success: !1,
            status: n,
            message: o,
            stack: process.env.NODE_ENV === 'development' ? e.stack : {},
        });
    },
    $e = Rt;
function Ut(e, r, t) {
    let n = Je__default.default.memoryStorage();
    return Je__default.default({
        storage: n,
        limits: { fileSize: r },
        fileFilter: (a, s, i) => {
            e.includes(s.mimetype) ? i(null, !0) : i(new Error(t));
        },
    });
}
var ze = Ut;
var se = Ft__default.default();
se.post('/image', Ke, ze(['image/jpeg', 'image/webp'], 1048576, 'Image allow only').single('image'), Me);
se.use($e);
var Ge = se;
var jt = z({ property: Le }),
    P = Ft__default.default();
process.env.NODE_ENV !== 'production' && P.use((0, Ze.default)('dev'));
P.use(It__default.default());
P.use(Nt__default.default({ origin: [j.origin, 'http://localhost:3000'], credentials: !0 }));
P.use('/api/trpc', We__namespace.createExpressMiddleware({ router: jt, createContext: He }));
P.use('/api/upload', Ge);
var Ve = j.port;
P.listen(Ve, () => {
    console.log(`\u{1F680} Server listening on port ${Ve}`);
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
*/

exports.appRouter = jt;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map
