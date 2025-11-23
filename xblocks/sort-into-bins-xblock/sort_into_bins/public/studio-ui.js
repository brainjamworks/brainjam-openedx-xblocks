var Um = Object.defineProperty;
var Hm = (e, t, n) => t in e ? Um(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ic = (e, t, n) => Hm(e, typeof t != "symbol" ? t + "" : t, n);
function Fr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var kf = { exports: {} }, sa = {}, Cf = { exports: {} }, G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ii = Symbol.for("react.element"), Wm = Symbol.for("react.portal"), Qm = Symbol.for("react.fragment"), Gm = Symbol.for("react.strict_mode"), Km = Symbol.for("react.profiler"), Ym = Symbol.for("react.provider"), qm = Symbol.for("react.context"), Xm = Symbol.for("react.forward_ref"), Zm = Symbol.for("react.suspense"), Jm = Symbol.for("react.memo"), ev = Symbol.for("react.lazy"), Fc = Symbol.iterator;
function tv(e) {
  return e === null || typeof e != "object" ? null : (e = Fc && e[Fc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var _f = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Sf = Object.assign, Af = {};
function Rr(e, t, n) {
  this.props = e, this.context = t, this.refs = Af, this.updater = n || _f;
}
Rr.prototype.isReactComponent = {};
Rr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Rr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Tf() {
}
Tf.prototype = Rr.prototype;
function Ml(e, t, n) {
  this.props = e, this.context = t, this.refs = Af, this.updater = n || _f;
}
var bl = Ml.prototype = new Tf();
bl.constructor = Ml;
Sf(bl, Rr.prototype);
bl.isPureReactComponent = !0;
var Rc = Array.isArray, Nf = Object.prototype.hasOwnProperty, Ll = { current: null }, If = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ff(e, t, n) {
  var r, i = {}, s = null, a = null;
  if (t != null) for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (s = "" + t.key), t) Nf.call(t, r) && !If.hasOwnProperty(r) && (i[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) i.children = n;
  else if (1 < o) {
    for (var l = Array(o), u = 0; u < o; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) i[r] === void 0 && (i[r] = o[r]);
  return { $$typeof: Ii, type: e, key: s, ref: a, props: i, _owner: Ll.current };
}
function nv(e, t) {
  return { $$typeof: Ii, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Bl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ii;
}
function rv(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Pc = /\/+/g;
function Ka(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? rv("" + e.key) : t.toString(36);
}
function fs(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else switch (s) {
    case "string":
    case "number":
      a = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Ii:
        case Wm:
          a = !0;
      }
  }
  if (a) return a = e, i = i(a), e = r === "" ? "." + Ka(a, 0) : r, Rc(i) ? (n = "", e != null && (n = e.replace(Pc, "$&/") + "/"), fs(i, t, n, "", function(u) {
    return u;
  })) : i != null && (Bl(i) && (i = nv(i, n + (!i.key || a && a.key === i.key ? "" : ("" + i.key).replace(Pc, "$&/") + "/") + e)), t.push(i)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", Rc(e)) for (var o = 0; o < e.length; o++) {
    s = e[o];
    var l = r + Ka(s, o);
    a += fs(s, t, n, l, i);
  }
  else if (l = tv(e), typeof l == "function") for (e = l.call(e), o = 0; !(s = e.next()).done; ) s = s.value, l = r + Ka(s, o++), a += fs(s, t, n, l, i);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function Wi(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return fs(e, r, "", "", function(s) {
    return t.call(n, s, i++);
  }), r;
}
function iv(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ve = { current: null }, ps = { transition: null }, sv = { ReactCurrentDispatcher: Ve, ReactCurrentBatchConfig: ps, ReactCurrentOwner: Ll };
function Rf() {
  throw Error("act(...) is not supported in production builds of React.");
}
G.Children = { map: Wi, forEach: function(e, t, n) {
  Wi(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Wi(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Wi(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Bl(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
G.Component = Rr;
G.Fragment = Qm;
G.Profiler = Km;
G.PureComponent = Ml;
G.StrictMode = Gm;
G.Suspense = Zm;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sv;
G.act = Rf;
G.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Sf({}, e.props), i = e.key, s = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, a = Ll.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (l in t) Nf.call(t, l) && !If.hasOwnProperty(l) && (r[l] = t[l] === void 0 && o !== void 0 ? o[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    o = Array(l);
    for (var u = 0; u < l; u++) o[u] = arguments[u + 2];
    r.children = o;
  }
  return { $$typeof: Ii, type: e.type, key: i, ref: s, props: r, _owner: a };
};
G.createContext = function(e) {
  return e = { $$typeof: qm, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Ym, _context: e }, e.Consumer = e;
};
G.createElement = Ff;
G.createFactory = function(e) {
  var t = Ff.bind(null, e);
  return t.type = e, t;
};
G.createRef = function() {
  return { current: null };
};
G.forwardRef = function(e) {
  return { $$typeof: Xm, render: e };
};
G.isValidElement = Bl;
G.lazy = function(e) {
  return { $$typeof: ev, _payload: { _status: -1, _result: e }, _init: iv };
};
G.memo = function(e, t) {
  return { $$typeof: Jm, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function(e) {
  var t = ps.transition;
  ps.transition = {};
  try {
    e();
  } finally {
    ps.transition = t;
  }
};
G.unstable_act = Rf;
G.useCallback = function(e, t) {
  return Ve.current.useCallback(e, t);
};
G.useContext = function(e) {
  return Ve.current.useContext(e);
};
G.useDebugValue = function() {
};
G.useDeferredValue = function(e) {
  return Ve.current.useDeferredValue(e);
};
G.useEffect = function(e, t) {
  return Ve.current.useEffect(e, t);
};
G.useId = function() {
  return Ve.current.useId();
};
G.useImperativeHandle = function(e, t, n) {
  return Ve.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function(e, t) {
  return Ve.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function(e, t) {
  return Ve.current.useLayoutEffect(e, t);
};
G.useMemo = function(e, t) {
  return Ve.current.useMemo(e, t);
};
G.useReducer = function(e, t, n) {
  return Ve.current.useReducer(e, t, n);
};
G.useRef = function(e) {
  return Ve.current.useRef(e);
};
G.useState = function(e) {
  return Ve.current.useState(e);
};
G.useSyncExternalStore = function(e, t, n) {
  return Ve.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function() {
  return Ve.current.useTransition();
};
G.version = "18.3.1";
Cf.exports = G;
var C = Cf.exports;
const h = /* @__PURE__ */ Fr(C);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var av = C, ov = Symbol.for("react.element"), lv = Symbol.for("react.fragment"), uv = Object.prototype.hasOwnProperty, cv = av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, dv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Pf(e, t, n) {
  var r, i = {}, s = null, a = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t) uv.call(t, r) && !dv.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: ov, type: e, key: s, ref: a, props: i, _owner: cv.current };
}
sa.Fragment = lv;
sa.jsx = Pf;
sa.jsxs = Pf;
kf.exports = sa;
var k = kf.exports, Of = { exports: {} }, tt = {}, Df = { exports: {} }, Mf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(R, b) {
    var L = R.length;
    R.push(b);
    e: for (; 0 < L; ) {
      var Q = L - 1 >>> 1, $ = R[Q];
      if (0 < i($, b)) R[Q] = b, R[L] = $, L = Q;
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var b = R[0], L = R.pop();
    if (L !== b) {
      R[0] = L;
      e: for (var Q = 0, $ = R.length, pt = $ >>> 1; Q < pt; ) {
        var ke = 2 * (Q + 1) - 1, Oe = R[ke], De = ke + 1, ht = R[De];
        if (0 > i(Oe, L)) De < $ && 0 > i(ht, Oe) ? (R[Q] = ht, R[De] = L, Q = De) : (R[Q] = Oe, R[ke] = L, Q = ke);
        else if (De < $ && 0 > i(ht, L)) R[Q] = ht, R[De] = L, Q = De;
        else break e;
      }
    }
    return b;
  }
  function i(R, b) {
    var L = R.sortIndex - b.sortIndex;
    return L !== 0 ? L : R.id - b.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function() {
      return s.now();
    };
  } else {
    var a = Date, o = a.now();
    e.unstable_now = function() {
      return a.now() - o;
    };
  }
  var l = [], u = [], c = 1, p = null, f = 3, g = !1, w = !1, E = !1, _ = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(R) {
    for (var b = n(u); b !== null; ) {
      if (b.callback === null) r(u);
      else if (b.startTime <= R) r(u), b.sortIndex = b.expirationTime, t(l, b);
      else break;
      b = n(u);
    }
  }
  function x(R) {
    if (E = !1, y(R), !w) if (n(l) !== null) w = !0, Z(S);
    else {
      var b = n(u);
      b !== null && Y(x, b.startTime - R);
    }
  }
  function S(R, b) {
    w = !1, E && (E = !1, v(N), N = -1), g = !0;
    var L = f;
    try {
      for (y(b), p = n(l); p !== null && (!(p.expirationTime > b) || R && !z()); ) {
        var Q = p.callback;
        if (typeof Q == "function") {
          p.callback = null, f = p.priorityLevel;
          var $ = Q(p.expirationTime <= b);
          b = e.unstable_now(), typeof $ == "function" ? p.callback = $ : p === n(l) && r(l), y(b);
        } else r(l);
        p = n(l);
      }
      if (p !== null) var pt = !0;
      else {
        var ke = n(u);
        ke !== null && Y(x, ke.startTime - b), pt = !1;
      }
      return pt;
    } finally {
      p = null, f = L, g = !1;
    }
  }
  var A = !1, T = null, N = -1, O = 5, P = -1;
  function z() {
    return !(e.unstable_now() - P < O);
  }
  function j() {
    if (T !== null) {
      var R = e.unstable_now();
      P = R;
      var b = !0;
      try {
        b = T(!0, R);
      } finally {
        b ? H() : (A = !1, T = null);
      }
    } else A = !1;
  }
  var H;
  if (typeof m == "function") H = function() {
    m(j);
  };
  else if (typeof MessageChannel < "u") {
    var ie = new MessageChannel(), de = ie.port2;
    ie.port1.onmessage = j, H = function() {
      de.postMessage(null);
    };
  } else H = function() {
    _(j, 0);
  };
  function Z(R) {
    T = R, A || (A = !0, H());
  }
  function Y(R, b) {
    N = _(function() {
      R(e.unstable_now());
    }, b);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
    R.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, Z(S));
  }, e.unstable_forceFrameRate = function(R) {
    0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < R ? Math.floor(1e3 / R) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(R) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = f;
    }
    var L = f;
    f = b;
    try {
      return R();
    } finally {
      f = L;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(R, b) {
    switch (R) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        R = 3;
    }
    var L = f;
    f = R;
    try {
      return b();
    } finally {
      f = L;
    }
  }, e.unstable_scheduleCallback = function(R, b, L) {
    var Q = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? Q + L : Q) : L = Q, R) {
      case 1:
        var $ = -1;
        break;
      case 2:
        $ = 250;
        break;
      case 5:
        $ = 1073741823;
        break;
      case 4:
        $ = 1e4;
        break;
      default:
        $ = 5e3;
    }
    return $ = L + $, R = { id: c++, callback: b, priorityLevel: R, startTime: L, expirationTime: $, sortIndex: -1 }, L > Q ? (R.sortIndex = L, t(u, R), n(l) === null && R === n(u) && (E ? (v(N), N = -1) : E = !0, Y(x, L - Q))) : (R.sortIndex = $, t(l, R), w || g || (w = !0, Z(S))), R;
  }, e.unstable_shouldYield = z, e.unstable_wrapCallback = function(R) {
    var b = f;
    return function() {
      var L = f;
      f = b;
      try {
        return R.apply(this, arguments);
      } finally {
        f = L;
      }
    };
  };
})(Mf);
Df.exports = Mf;
var fv = Df.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pv = C, Je = fv;
function I(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var bf = /* @__PURE__ */ new Set(), ui = {};
function jn(e, t) {
  gr(e, t), gr(e + "Capture", t);
}
function gr(e, t) {
  for (ui[e] = t, e = 0; e < t.length; e++) bf.add(t[e]);
}
var jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Fo = Object.prototype.hasOwnProperty, hv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Oc = {}, Dc = {};
function mv(e) {
  return Fo.call(Dc, e) ? !0 : Fo.call(Oc, e) ? !1 : hv.test(e) ? Dc[e] = !0 : (Oc[e] = !0, !1);
}
function vv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function gv(e, t, n, r) {
  if (t === null || typeof t > "u" || vv(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function je(e, t, n, r, i, s, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = a;
}
var Ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ae[e] = new je(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ae[t] = new je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ae[e] = new je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ae[e] = new je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ae[e] = new je(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ae[e] = new je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ae[e] = new je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ae[e] = new je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ae[e] = new je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Vl = /[\-:]([a-z])/g;
function jl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Vl,
    jl
  );
  Ae[t] = new je(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Vl, jl);
  Ae[t] = new je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Vl, jl);
  Ae[t] = new je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ae[e] = new je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ae.xlinkHref = new je("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ae[e] = new je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $l(e, t, n, r) {
  var i = Ae.hasOwnProperty(t) ? Ae[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (gv(t, n, i, r) && (n = null), r || i === null ? mv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Gt = pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Qi = Symbol.for("react.element"), qn = Symbol.for("react.portal"), Xn = Symbol.for("react.fragment"), zl = Symbol.for("react.strict_mode"), Ro = Symbol.for("react.profiler"), Lf = Symbol.for("react.provider"), Bf = Symbol.for("react.context"), Ul = Symbol.for("react.forward_ref"), Po = Symbol.for("react.suspense"), Oo = Symbol.for("react.suspense_list"), Hl = Symbol.for("react.memo"), Xt = Symbol.for("react.lazy"), Vf = Symbol.for("react.offscreen"), Mc = Symbol.iterator;
function Br(e) {
  return e === null || typeof e != "object" ? null : (e = Mc && e[Mc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var oe = Object.assign, Ya;
function Gr(e) {
  if (Ya === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ya = t && t[1] || "";
  }
  return `
` + Ya + e;
}
var qa = !1;
function Xa(e, t) {
  if (!e || qa) return "";
  qa = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var i = u.stack.split(`
`), s = r.stack.split(`
`), a = i.length - 1, o = s.length - 1; 1 <= a && 0 <= o && i[a] !== s[o]; ) o--;
      for (; 1 <= a && 0 <= o; a--, o--) if (i[a] !== s[o]) {
        if (a !== 1 || o !== 1)
          do
            if (a--, o--, 0 > o || i[a] !== s[o]) {
              var l = `
` + i[a].replace(" at new ", " at ");
              return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
            }
          while (1 <= a && 0 <= o);
        break;
      }
    }
  } finally {
    qa = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Gr(e) : "";
}
function yv(e) {
  switch (e.tag) {
    case 5:
      return Gr(e.type);
    case 16:
      return Gr("Lazy");
    case 13:
      return Gr("Suspense");
    case 19:
      return Gr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Xa(e.type, !1), e;
    case 11:
      return e = Xa(e.type.render, !1), e;
    case 1:
      return e = Xa(e.type, !0), e;
    default:
      return "";
  }
}
function Do(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Xn:
      return "Fragment";
    case qn:
      return "Portal";
    case Ro:
      return "Profiler";
    case zl:
      return "StrictMode";
    case Po:
      return "Suspense";
    case Oo:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Bf:
      return (e.displayName || "Context") + ".Consumer";
    case Lf:
      return (e._context.displayName || "Context") + ".Provider";
    case Ul:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Hl:
      return t = e.displayName || null, t !== null ? t : Do(e.type) || "Memo";
    case Xt:
      t = e._payload, e = e._init;
      try {
        return Do(e(t));
      } catch {
      }
  }
  return null;
}
function Ev(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Do(t);
    case 8:
      return t === zl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function hn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function jf(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function wv(e) {
  var t = jf(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, s = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(a) {
      r = "" + a, s.call(this, a);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(a) {
      r = "" + a;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Gi(e) {
  e._valueTracker || (e._valueTracker = wv(e));
}
function $f(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = jf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function As(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Mo(e, t) {
  var n = t.checked;
  return oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function bc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = hn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function zf(e, t) {
  t = t.checked, t != null && $l(e, "checked", t, !1);
}
function bo(e, t) {
  zf(e, t);
  var n = hn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Lo(e, t.type, n) : t.hasOwnProperty("defaultValue") && Lo(e, t.type, hn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Lc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Lo(e, t, n) {
  (t !== "number" || As(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Kr = Array.isArray;
function dr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + hn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Bo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Bc(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(I(92));
      if (Kr(n)) {
        if (1 < n.length) throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: hn(n) };
}
function Uf(e, t) {
  var n = hn(t.value), r = hn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Vc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Hf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Vo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Hf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ki, Wf = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Ki = Ki || document.createElement("div"), Ki.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ki.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function ci(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Zr = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, xv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Zr).forEach(function(e) {
  xv.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Zr[t] = Zr[e];
  });
});
function Qf(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Zr.hasOwnProperty(e) && Zr[e] ? ("" + t).trim() : t + "px";
}
function Gf(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = Qf(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var kv = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function jo(e, t) {
  if (t) {
    if (kv[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(I(62));
  }
}
function $o(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var zo = null;
function Wl(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Uo = null, fr = null, pr = null;
function jc(e) {
  if (e = Pi(e)) {
    if (typeof Uo != "function") throw Error(I(280));
    var t = e.stateNode;
    t && (t = ca(t), Uo(e.stateNode, e.type, t));
  }
}
function Kf(e) {
  fr ? pr ? pr.push(e) : pr = [e] : fr = e;
}
function Yf() {
  if (fr) {
    var e = fr, t = pr;
    if (pr = fr = null, jc(e), t) for (e = 0; e < t.length; e++) jc(t[e]);
  }
}
function qf(e, t) {
  return e(t);
}
function Xf() {
}
var Za = !1;
function Zf(e, t, n) {
  if (Za) return e(t, n);
  Za = !0;
  try {
    return qf(e, t, n);
  } finally {
    Za = !1, (fr !== null || pr !== null) && (Xf(), Yf());
  }
}
function di(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ca(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(I(231, t, typeof n));
  return n;
}
var Ho = !1;
if (jt) try {
  var Vr = {};
  Object.defineProperty(Vr, "passive", { get: function() {
    Ho = !0;
  } }), window.addEventListener("test", Vr, Vr), window.removeEventListener("test", Vr, Vr);
} catch {
  Ho = !1;
}
function Cv(e, t, n, r, i, s, a, o, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Jr = !1, Ts = null, Ns = !1, Wo = null, _v = { onError: function(e) {
  Jr = !0, Ts = e;
} };
function Sv(e, t, n, r, i, s, a, o, l) {
  Jr = !1, Ts = null, Cv.apply(_v, arguments);
}
function Av(e, t, n, r, i, s, a, o, l) {
  if (Sv.apply(this, arguments), Jr) {
    if (Jr) {
      var u = Ts;
      Jr = !1, Ts = null;
    } else throw Error(I(198));
    Ns || (Ns = !0, Wo = u);
  }
}
function $n(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Jf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function $c(e) {
  if ($n(e) !== e) throw Error(I(188));
}
function Tv(e) {
  var t = e.alternate;
  if (!t) {
    if (t = $n(e), t === null) throw Error(I(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return $c(i), e;
        if (s === r) return $c(i), t;
        s = s.sibling;
      }
      throw Error(I(188));
    }
    if (n.return !== r.return) n = i, r = s;
    else {
      for (var a = !1, o = i.child; o; ) {
        if (o === n) {
          a = !0, n = i, r = s;
          break;
        }
        if (o === r) {
          a = !0, r = i, n = s;
          break;
        }
        o = o.sibling;
      }
      if (!a) {
        for (o = s.child; o; ) {
          if (o === n) {
            a = !0, n = s, r = i;
            break;
          }
          if (o === r) {
            a = !0, r = s, n = i;
            break;
          }
          o = o.sibling;
        }
        if (!a) throw Error(I(189));
      }
    }
    if (n.alternate !== r) throw Error(I(190));
  }
  if (n.tag !== 3) throw Error(I(188));
  return n.stateNode.current === n ? e : t;
}
function ep(e) {
  return e = Tv(e), e !== null ? tp(e) : null;
}
function tp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = tp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var np = Je.unstable_scheduleCallback, zc = Je.unstable_cancelCallback, Nv = Je.unstable_shouldYield, Iv = Je.unstable_requestPaint, ce = Je.unstable_now, Fv = Je.unstable_getCurrentPriorityLevel, Ql = Je.unstable_ImmediatePriority, rp = Je.unstable_UserBlockingPriority, Is = Je.unstable_NormalPriority, Rv = Je.unstable_LowPriority, ip = Je.unstable_IdlePriority, aa = null, It = null;
function Pv(e) {
  if (It && typeof It.onCommitFiberRoot == "function") try {
    It.onCommitFiberRoot(aa, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var wt = Math.clz32 ? Math.clz32 : Mv, Ov = Math.log, Dv = Math.LN2;
function Mv(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Ov(e) / Dv | 0) | 0;
}
var Yi = 64, qi = 4194304;
function Yr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Fs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, s = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var o = a & ~i;
    o !== 0 ? r = Yr(o) : (s &= a, s !== 0 && (r = Yr(s)));
  } else a = n & ~i, a !== 0 ? r = Yr(a) : s !== 0 && (r = Yr(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - wt(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function bv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Lv(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var a = 31 - wt(s), o = 1 << a, l = i[a];
    l === -1 ? (!(o & n) || o & r) && (i[a] = bv(o, t)) : l <= t && (e.expiredLanes |= o), s &= ~o;
  }
}
function Qo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function sp() {
  var e = Yi;
  return Yi <<= 1, !(Yi & 4194240) && (Yi = 64), e;
}
function Ja(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Fi(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - wt(t), e[t] = n;
}
function Bv(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - wt(n), s = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s;
  }
}
function Gl(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - wt(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var q = 0;
function ap(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var op, Kl, lp, up, cp, Go = !1, Xi = [], sn = null, an = null, on = null, fi = /* @__PURE__ */ new Map(), pi = /* @__PURE__ */ new Map(), en = [], Vv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Uc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      sn = null;
      break;
    case "dragenter":
    case "dragleave":
      an = null;
      break;
    case "mouseover":
    case "mouseout":
      on = null;
      break;
    case "pointerover":
    case "pointerout":
      fi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      pi.delete(t.pointerId);
  }
}
function jr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [i] }, t !== null && (t = Pi(t), t !== null && Kl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function jv(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return sn = jr(sn, e, t, n, r, i), !0;
    case "dragenter":
      return an = jr(an, e, t, n, r, i), !0;
    case "mouseover":
      return on = jr(on, e, t, n, r, i), !0;
    case "pointerover":
      var s = i.pointerId;
      return fi.set(s, jr(fi.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return s = i.pointerId, pi.set(s, jr(pi.get(s) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function dp(e) {
  var t = An(e.target);
  if (t !== null) {
    var n = $n(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Jf(n), t !== null) {
          e.blockedOn = t, cp(e.priority, function() {
            lp(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function hs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ko(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      zo = r, n.target.dispatchEvent(r), zo = null;
    } else return t = Pi(n), t !== null && Kl(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Hc(e, t, n) {
  hs(e) && n.delete(t);
}
function $v() {
  Go = !1, sn !== null && hs(sn) && (sn = null), an !== null && hs(an) && (an = null), on !== null && hs(on) && (on = null), fi.forEach(Hc), pi.forEach(Hc);
}
function $r(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Go || (Go = !0, Je.unstable_scheduleCallback(Je.unstable_NormalPriority, $v)));
}
function hi(e) {
  function t(i) {
    return $r(i, e);
  }
  if (0 < Xi.length) {
    $r(Xi[0], e);
    for (var n = 1; n < Xi.length; n++) {
      var r = Xi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (sn !== null && $r(sn, e), an !== null && $r(an, e), on !== null && $r(on, e), fi.forEach(t), pi.forEach(t), n = 0; n < en.length; n++) r = en[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < en.length && (n = en[0], n.blockedOn === null); ) dp(n), n.blockedOn === null && en.shift();
}
var hr = Gt.ReactCurrentBatchConfig, Rs = !0;
function zv(e, t, n, r) {
  var i = q, s = hr.transition;
  hr.transition = null;
  try {
    q = 1, Yl(e, t, n, r);
  } finally {
    q = i, hr.transition = s;
  }
}
function Uv(e, t, n, r) {
  var i = q, s = hr.transition;
  hr.transition = null;
  try {
    q = 4, Yl(e, t, n, r);
  } finally {
    q = i, hr.transition = s;
  }
}
function Yl(e, t, n, r) {
  if (Rs) {
    var i = Ko(e, t, n, r);
    if (i === null) uo(e, t, r, Ps, n), Uc(e, r);
    else if (jv(i, e, t, n, r)) r.stopPropagation();
    else if (Uc(e, r), t & 4 && -1 < Vv.indexOf(e)) {
      for (; i !== null; ) {
        var s = Pi(i);
        if (s !== null && op(s), s = Ko(e, t, n, r), s === null && uo(e, t, r, Ps, n), s === i) break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else uo(e, t, r, null, n);
  }
}
var Ps = null;
function Ko(e, t, n, r) {
  if (Ps = null, e = Wl(r), e = An(e), e !== null) if (t = $n(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Jf(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ps = e, null;
}
function fp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Fv()) {
        case Ql:
          return 1;
        case rp:
          return 4;
        case Is:
        case Rv:
          return 16;
        case ip:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nn = null, ql = null, ms = null;
function pp() {
  if (ms) return ms;
  var e, t = ql, n = t.length, r, i = "value" in nn ? nn.value : nn.textContent, s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[s - r]; r++) ;
  return ms = i.slice(e, 1 < r ? 1 - r : void 0);
}
function vs(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Zi() {
  return !0;
}
function Wc() {
  return !1;
}
function nt(e) {
  function t(n, r, i, s, a) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = a, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(s) : s[o]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Zi : Wc, this.isPropagationStopped = Wc, this;
  }
  return oe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Zi);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Zi);
  }, persist: function() {
  }, isPersistent: Zi }), t;
}
var Pr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Xl = nt(Pr), Ri = oe({}, Pr, { view: 0, detail: 0 }), Hv = nt(Ri), eo, to, zr, oa = oe({}, Ri, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Zl, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== zr && (zr && e.type === "mousemove" ? (eo = e.screenX - zr.screenX, to = e.screenY - zr.screenY) : to = eo = 0, zr = e), eo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : to;
} }), Qc = nt(oa), Wv = oe({}, oa, { dataTransfer: 0 }), Qv = nt(Wv), Gv = oe({}, Ri, { relatedTarget: 0 }), no = nt(Gv), Kv = oe({}, Pr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Yv = nt(Kv), qv = oe({}, Pr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Xv = nt(qv), Zv = oe({}, Pr, { data: 0 }), Gc = nt(Zv), Jv = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, eg = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, tg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function ng(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = tg[e]) ? !!t[e] : !1;
}
function Zl() {
  return ng;
}
var rg = oe({}, Ri, { key: function(e) {
  if (e.key) {
    var t = Jv[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = vs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? eg[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Zl, charCode: function(e) {
  return e.type === "keypress" ? vs(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? vs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), ig = nt(rg), sg = oe({}, oa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Kc = nt(sg), ag = oe({}, Ri, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Zl }), og = nt(ag), lg = oe({}, Pr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ug = nt(lg), cg = oe({}, oa, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), dg = nt(cg), fg = [9, 13, 27, 32], Jl = jt && "CompositionEvent" in window, ei = null;
jt && "documentMode" in document && (ei = document.documentMode);
var pg = jt && "TextEvent" in window && !ei, hp = jt && (!Jl || ei && 8 < ei && 11 >= ei), Yc = " ", qc = !1;
function mp(e, t) {
  switch (e) {
    case "keyup":
      return fg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function vp(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Zn = !1;
function hg(e, t) {
  switch (e) {
    case "compositionend":
      return vp(t);
    case "keypress":
      return t.which !== 32 ? null : (qc = !0, Yc);
    case "textInput":
      return e = t.data, e === Yc && qc ? null : e;
    default:
      return null;
  }
}
function mg(e, t) {
  if (Zn) return e === "compositionend" || !Jl && mp(e, t) ? (e = pp(), ms = ql = nn = null, Zn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return hp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var vg = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Xc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!vg[e.type] : t === "textarea";
}
function gp(e, t, n, r) {
  Kf(r), t = Os(t, "onChange"), 0 < t.length && (n = new Xl("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ti = null, mi = null;
function gg(e) {
  Np(e, 0);
}
function la(e) {
  var t = tr(e);
  if ($f(t)) return e;
}
function yg(e, t) {
  if (e === "change") return t;
}
var yp = !1;
if (jt) {
  var ro;
  if (jt) {
    var io = "oninput" in document;
    if (!io) {
      var Zc = document.createElement("div");
      Zc.setAttribute("oninput", "return;"), io = typeof Zc.oninput == "function";
    }
    ro = io;
  } else ro = !1;
  yp = ro && (!document.documentMode || 9 < document.documentMode);
}
function Jc() {
  ti && (ti.detachEvent("onpropertychange", Ep), mi = ti = null);
}
function Ep(e) {
  if (e.propertyName === "value" && la(mi)) {
    var t = [];
    gp(t, mi, e, Wl(e)), Zf(gg, t);
  }
}
function Eg(e, t, n) {
  e === "focusin" ? (Jc(), ti = t, mi = n, ti.attachEvent("onpropertychange", Ep)) : e === "focusout" && Jc();
}
function wg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return la(mi);
}
function xg(e, t) {
  if (e === "click") return la(t);
}
function kg(e, t) {
  if (e === "input" || e === "change") return la(t);
}
function Cg(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var kt = typeof Object.is == "function" ? Object.is : Cg;
function vi(e, t) {
  if (kt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Fo.call(t, i) || !kt(e[i], t[i])) return !1;
  }
  return !0;
}
function ed(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function td(e, t) {
  var n = ed(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ed(n);
  }
}
function wp(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? wp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function xp() {
  for (var e = window, t = As(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = As(e.document);
  }
  return t;
}
function eu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function _g(e) {
  var t = xp(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && wp(n.ownerDocument.documentElement, n)) {
    if (r !== null && eu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, s = Math.min(r.start, i);
        r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = td(n, s);
        var a = td(
          n,
          r
        );
        i && a && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Sg = jt && "documentMode" in document && 11 >= document.documentMode, Jn = null, Yo = null, ni = null, qo = !1;
function nd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  qo || Jn == null || Jn !== As(r) || (r = Jn, "selectionStart" in r && eu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ni && vi(ni, r) || (ni = r, r = Os(Yo, "onSelect"), 0 < r.length && (t = new Xl("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Jn)));
}
function Ji(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var er = { animationend: Ji("Animation", "AnimationEnd"), animationiteration: Ji("Animation", "AnimationIteration"), animationstart: Ji("Animation", "AnimationStart"), transitionend: Ji("Transition", "TransitionEnd") }, so = {}, kp = {};
jt && (kp = document.createElement("div").style, "AnimationEvent" in window || (delete er.animationend.animation, delete er.animationiteration.animation, delete er.animationstart.animation), "TransitionEvent" in window || delete er.transitionend.transition);
function ua(e) {
  if (so[e]) return so[e];
  if (!er[e]) return e;
  var t = er[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in kp) return so[e] = t[n];
  return e;
}
var Cp = ua("animationend"), _p = ua("animationiteration"), Sp = ua("animationstart"), Ap = ua("transitionend"), Tp = /* @__PURE__ */ new Map(), rd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function yn(e, t) {
  Tp.set(e, t), jn(t, [e]);
}
for (var ao = 0; ao < rd.length; ao++) {
  var oo = rd[ao], Ag = oo.toLowerCase(), Tg = oo[0].toUpperCase() + oo.slice(1);
  yn(Ag, "on" + Tg);
}
yn(Cp, "onAnimationEnd");
yn(_p, "onAnimationIteration");
yn(Sp, "onAnimationStart");
yn("dblclick", "onDoubleClick");
yn("focusin", "onFocus");
yn("focusout", "onBlur");
yn(Ap, "onTransitionEnd");
gr("onMouseEnter", ["mouseout", "mouseover"]);
gr("onMouseLeave", ["mouseout", "mouseover"]);
gr("onPointerEnter", ["pointerout", "pointerover"]);
gr("onPointerLeave", ["pointerout", "pointerover"]);
jn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
jn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
jn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
jn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var qr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ng = new Set("cancel close invalid load scroll toggle".split(" ").concat(qr));
function id(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Av(r, t, void 0, e), e.currentTarget = null;
}
function Np(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var a = r.length - 1; 0 <= a; a--) {
        var o = r[a], l = o.instance, u = o.currentTarget;
        if (o = o.listener, l !== s && i.isPropagationStopped()) break e;
        id(i, o, u), s = l;
      }
      else for (a = 0; a < r.length; a++) {
        if (o = r[a], l = o.instance, u = o.currentTarget, o = o.listener, l !== s && i.isPropagationStopped()) break e;
        id(i, o, u), s = l;
      }
    }
  }
  if (Ns) throw e = Wo, Ns = !1, Wo = null, e;
}
function te(e, t) {
  var n = t[tl];
  n === void 0 && (n = t[tl] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Ip(t, e, 2, !1), n.add(r));
}
function lo(e, t, n) {
  var r = 0;
  t && (r |= 4), Ip(n, e, r, t);
}
var es = "_reactListening" + Math.random().toString(36).slice(2);
function gi(e) {
  if (!e[es]) {
    e[es] = !0, bf.forEach(function(n) {
      n !== "selectionchange" && (Ng.has(n) || lo(n, !1, e), lo(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[es] || (t[es] = !0, lo("selectionchange", !1, t));
  }
}
function Ip(e, t, n, r) {
  switch (fp(t)) {
    case 1:
      var i = zv;
      break;
    case 4:
      i = Uv;
      break;
    default:
      i = Yl;
  }
  n = i.bind(null, t, n, e), i = void 0, !Ho || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function uo(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var a = r.tag;
    if (a === 3 || a === 4) {
      var o = r.stateNode.containerInfo;
      if (o === i || o.nodeType === 8 && o.parentNode === i) break;
      if (a === 4) for (a = r.return; a !== null; ) {
        var l = a.tag;
        if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
        a = a.return;
      }
      for (; o !== null; ) {
        if (a = An(o), a === null) return;
        if (l = a.tag, l === 5 || l === 6) {
          r = s = a;
          continue e;
        }
        o = o.parentNode;
      }
    }
    r = r.return;
  }
  Zf(function() {
    var u = s, c = Wl(n), p = [];
    e: {
      var f = Tp.get(e);
      if (f !== void 0) {
        var g = Xl, w = e;
        switch (e) {
          case "keypress":
            if (vs(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = ig;
            break;
          case "focusin":
            w = "focus", g = no;
            break;
          case "focusout":
            w = "blur", g = no;
            break;
          case "beforeblur":
          case "afterblur":
            g = no;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Qc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Qv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = og;
            break;
          case Cp:
          case _p:
          case Sp:
            g = Yv;
            break;
          case Ap:
            g = ug;
            break;
          case "scroll":
            g = Hv;
            break;
          case "wheel":
            g = dg;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Xv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Kc;
        }
        var E = (t & 4) !== 0, _ = !E && e === "scroll", v = E ? f !== null ? f + "Capture" : null : f;
        E = [];
        for (var m = u, y; m !== null; ) {
          y = m;
          var x = y.stateNode;
          if (y.tag === 5 && x !== null && (y = x, v !== null && (x = di(m, v), x != null && E.push(yi(m, x, y)))), _) break;
          m = m.return;
        }
        0 < E.length && (f = new g(f, w, null, n, c), p.push({ event: f, listeners: E }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", f && n !== zo && (w = n.relatedTarget || n.fromElement) && (An(w) || w[$t])) break e;
        if ((g || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = u, w = w ? An(w) : null, w !== null && (_ = $n(w), w !== _ || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = u), g !== w)) {
          if (E = Qc, x = "onMouseLeave", v = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (E = Kc, x = "onPointerLeave", v = "onPointerEnter", m = "pointer"), _ = g == null ? f : tr(g), y = w == null ? f : tr(w), f = new E(x, m + "leave", g, n, c), f.target = _, f.relatedTarget = y, x = null, An(c) === u && (E = new E(v, m + "enter", w, n, c), E.target = y, E.relatedTarget = _, x = E), _ = x, g && w) t: {
            for (E = g, v = w, m = 0, y = E; y; y = Kn(y)) m++;
            for (y = 0, x = v; x; x = Kn(x)) y++;
            for (; 0 < m - y; ) E = Kn(E), m--;
            for (; 0 < y - m; ) v = Kn(v), y--;
            for (; m--; ) {
              if (E === v || v !== null && E === v.alternate) break t;
              E = Kn(E), v = Kn(v);
            }
            E = null;
          }
          else E = null;
          g !== null && sd(p, f, g, E, !1), w !== null && _ !== null && sd(p, _, w, E, !0);
        }
      }
      e: {
        if (f = u ? tr(u) : window, g = f.nodeName && f.nodeName.toLowerCase(), g === "select" || g === "input" && f.type === "file") var S = yg;
        else if (Xc(f)) if (yp) S = kg;
        else {
          S = wg;
          var A = Eg;
        }
        else (g = f.nodeName) && g.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (S = xg);
        if (S && (S = S(e, u))) {
          gp(p, S, n, c);
          break e;
        }
        A && A(e, f, u), e === "focusout" && (A = f._wrapperState) && A.controlled && f.type === "number" && Lo(f, "number", f.value);
      }
      switch (A = u ? tr(u) : window, e) {
        case "focusin":
          (Xc(A) || A.contentEditable === "true") && (Jn = A, Yo = u, ni = null);
          break;
        case "focusout":
          ni = Yo = Jn = null;
          break;
        case "mousedown":
          qo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          qo = !1, nd(p, n, c);
          break;
        case "selectionchange":
          if (Sg) break;
        case "keydown":
        case "keyup":
          nd(p, n, c);
      }
      var T;
      if (Jl) e: {
        switch (e) {
          case "compositionstart":
            var N = "onCompositionStart";
            break e;
          case "compositionend":
            N = "onCompositionEnd";
            break e;
          case "compositionupdate":
            N = "onCompositionUpdate";
            break e;
        }
        N = void 0;
      }
      else Zn ? mp(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (hp && n.locale !== "ko" && (Zn || N !== "onCompositionStart" ? N === "onCompositionEnd" && Zn && (T = pp()) : (nn = c, ql = "value" in nn ? nn.value : nn.textContent, Zn = !0)), A = Os(u, N), 0 < A.length && (N = new Gc(N, e, null, n, c), p.push({ event: N, listeners: A }), T ? N.data = T : (T = vp(n), T !== null && (N.data = T)))), (T = pg ? hg(e, n) : mg(e, n)) && (u = Os(u, "onBeforeInput"), 0 < u.length && (c = new Gc("onBeforeInput", "beforeinput", null, n, c), p.push({ event: c, listeners: u }), c.data = T));
    }
    Np(p, t);
  });
}
function yi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Os(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, s = i.stateNode;
    i.tag === 5 && s !== null && (i = s, s = di(e, n), s != null && r.unshift(yi(e, s, i)), s = di(e, t), s != null && r.push(yi(e, s, i))), e = e.return;
  }
  return r;
}
function Kn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function sd(e, t, n, r, i) {
  for (var s = t._reactName, a = []; n !== null && n !== r; ) {
    var o = n, l = o.alternate, u = o.stateNode;
    if (l !== null && l === r) break;
    o.tag === 5 && u !== null && (o = u, i ? (l = di(n, s), l != null && a.unshift(yi(n, l, o))) : i || (l = di(n, s), l != null && a.push(yi(n, l, o)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Ig = /\r\n?/g, Fg = /\u0000|\uFFFD/g;
function ad(e) {
  return (typeof e == "string" ? e : "" + e).replace(Ig, `
`).replace(Fg, "");
}
function ts(e, t, n) {
  if (t = ad(t), ad(e) !== t && n) throw Error(I(425));
}
function Ds() {
}
var Xo = null, Zo = null;
function Jo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var el = typeof setTimeout == "function" ? setTimeout : void 0, Rg = typeof clearTimeout == "function" ? clearTimeout : void 0, od = typeof Promise == "function" ? Promise : void 0, Pg = typeof queueMicrotask == "function" ? queueMicrotask : typeof od < "u" ? function(e) {
  return od.resolve(null).then(e).catch(Og);
} : el;
function Og(e) {
  setTimeout(function() {
    throw e;
  });
}
function co(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), hi(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  hi(t);
}
function ln(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ld(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Or = Math.random().toString(36).slice(2), Tt = "__reactFiber$" + Or, Ei = "__reactProps$" + Or, $t = "__reactContainer$" + Or, tl = "__reactEvents$" + Or, Dg = "__reactListeners$" + Or, Mg = "__reactHandles$" + Or;
function An(e) {
  var t = e[Tt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[$t] || n[Tt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ld(e); e !== null; ) {
        if (n = e[Tt]) return n;
        e = ld(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Pi(e) {
  return e = e[Tt] || e[$t], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function tr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(I(33));
}
function ca(e) {
  return e[Ei] || null;
}
var nl = [], nr = -1;
function En(e) {
  return { current: e };
}
function ne(e) {
  0 > nr || (e.current = nl[nr], nl[nr] = null, nr--);
}
function ee(e, t) {
  nr++, nl[nr] = e.current, e.current = t;
}
var mn = {}, Pe = En(mn), He = En(!1), Dn = mn;
function yr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, s;
  for (s in n) i[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function We(e) {
  return e = e.childContextTypes, e != null;
}
function Ms() {
  ne(He), ne(Pe);
}
function ud(e, t, n) {
  if (Pe.current !== mn) throw Error(I(168));
  ee(Pe, t), ee(He, n);
}
function Fp(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(I(108, Ev(e) || "Unknown", i));
  return oe({}, n, r);
}
function bs(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || mn, Dn = Pe.current, ee(Pe, e), ee(He, He.current), !0;
}
function cd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(I(169));
  n ? (e = Fp(e, t, Dn), r.__reactInternalMemoizedMergedChildContext = e, ne(He), ne(Pe), ee(Pe, e)) : ne(He), ee(He, n);
}
var Mt = null, da = !1, fo = !1;
function Rp(e) {
  Mt === null ? Mt = [e] : Mt.push(e);
}
function bg(e) {
  da = !0, Rp(e);
}
function wn() {
  if (!fo && Mt !== null) {
    fo = !0;
    var e = 0, t = q;
    try {
      var n = Mt;
      for (q = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Mt = null, da = !1;
    } catch (i) {
      throw Mt !== null && (Mt = Mt.slice(e + 1)), np(Ql, wn), i;
    } finally {
      q = t, fo = !1;
    }
  }
  return null;
}
var rr = [], ir = 0, Ls = null, Bs = 0, it = [], st = 0, Mn = null, Lt = 1, Bt = "";
function kn(e, t) {
  rr[ir++] = Bs, rr[ir++] = Ls, Ls = e, Bs = t;
}
function Pp(e, t, n) {
  it[st++] = Lt, it[st++] = Bt, it[st++] = Mn, Mn = e;
  var r = Lt;
  e = Bt;
  var i = 32 - wt(r) - 1;
  r &= ~(1 << i), n += 1;
  var s = 32 - wt(t) + i;
  if (30 < s) {
    var a = i - i % 5;
    s = (r & (1 << a) - 1).toString(32), r >>= a, i -= a, Lt = 1 << 32 - wt(t) + i | n << i | r, Bt = s + e;
  } else Lt = 1 << s | n << i | r, Bt = e;
}
function tu(e) {
  e.return !== null && (kn(e, 1), Pp(e, 1, 0));
}
function nu(e) {
  for (; e === Ls; ) Ls = rr[--ir], rr[ir] = null, Bs = rr[--ir], rr[ir] = null;
  for (; e === Mn; ) Mn = it[--st], it[st] = null, Bt = it[--st], it[st] = null, Lt = it[--st], it[st] = null;
}
var Ze = null, Xe = null, re = !1, Et = null;
function Op(e, t) {
  var n = at(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function dd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ze = e, Xe = ln(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ze = e, Xe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Mn !== null ? { id: Lt, overflow: Bt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = at(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ze = e, Xe = null, !0) : !1;
    default:
      return !1;
  }
}
function rl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function il(e) {
  if (re) {
    var t = Xe;
    if (t) {
      var n = t;
      if (!dd(e, t)) {
        if (rl(e)) throw Error(I(418));
        t = ln(n.nextSibling);
        var r = Ze;
        t && dd(e, t) ? Op(r, n) : (e.flags = e.flags & -4097 | 2, re = !1, Ze = e);
      }
    } else {
      if (rl(e)) throw Error(I(418));
      e.flags = e.flags & -4097 | 2, re = !1, Ze = e;
    }
  }
}
function fd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ze = e;
}
function ns(e) {
  if (e !== Ze) return !1;
  if (!re) return fd(e), re = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Jo(e.type, e.memoizedProps)), t && (t = Xe)) {
    if (rl(e)) throw Dp(), Error(I(418));
    for (; t; ) Op(e, t), t = ln(t.nextSibling);
  }
  if (fd(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Xe = ln(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Xe = null;
    }
  } else Xe = Ze ? ln(e.stateNode.nextSibling) : null;
  return !0;
}
function Dp() {
  for (var e = Xe; e; ) e = ln(e.nextSibling);
}
function Er() {
  Xe = Ze = null, re = !1;
}
function ru(e) {
  Et === null ? Et = [e] : Et.push(e);
}
var Lg = Gt.ReactCurrentBatchConfig;
function Ur(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(I(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(I(147, e));
      var i = r, s = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(a) {
        var o = i.refs;
        a === null ? delete o[s] : o[s] = a;
      }, t._stringRef = s, t);
    }
    if (typeof e != "string") throw Error(I(284));
    if (!n._owner) throw Error(I(290, e));
  }
  return e;
}
function rs(e, t) {
  throw e = Object.prototype.toString.call(t), Error(I(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function pd(e) {
  var t = e._init;
  return t(e._payload);
}
function Mp(e) {
  function t(v, m) {
    if (e) {
      var y = v.deletions;
      y === null ? (v.deletions = [m], v.flags |= 16) : y.push(m);
    }
  }
  function n(v, m) {
    if (!e) return null;
    for (; m !== null; ) t(v, m), m = m.sibling;
    return null;
  }
  function r(v, m) {
    for (v = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? v.set(m.key, m) : v.set(m.index, m), m = m.sibling;
    return v;
  }
  function i(v, m) {
    return v = fn(v, m), v.index = 0, v.sibling = null, v;
  }
  function s(v, m, y) {
    return v.index = y, e ? (y = v.alternate, y !== null ? (y = y.index, y < m ? (v.flags |= 2, m) : y) : (v.flags |= 2, m)) : (v.flags |= 1048576, m);
  }
  function a(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function o(v, m, y, x) {
    return m === null || m.tag !== 6 ? (m = Eo(y, v.mode, x), m.return = v, m) : (m = i(m, y), m.return = v, m);
  }
  function l(v, m, y, x) {
    var S = y.type;
    return S === Xn ? c(v, m, y.props.children, x, y.key) : m !== null && (m.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Xt && pd(S) === m.type) ? (x = i(m, y.props), x.ref = Ur(v, m, y), x.return = v, x) : (x = Cs(y.type, y.key, y.props, null, v.mode, x), x.ref = Ur(v, m, y), x.return = v, x);
  }
  function u(v, m, y, x) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== y.containerInfo || m.stateNode.implementation !== y.implementation ? (m = wo(y, v.mode, x), m.return = v, m) : (m = i(m, y.children || []), m.return = v, m);
  }
  function c(v, m, y, x, S) {
    return m === null || m.tag !== 7 ? (m = Rn(y, v.mode, x, S), m.return = v, m) : (m = i(m, y), m.return = v, m);
  }
  function p(v, m, y) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return m = Eo("" + m, v.mode, y), m.return = v, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Qi:
          return y = Cs(m.type, m.key, m.props, null, v.mode, y), y.ref = Ur(v, null, m), y.return = v, y;
        case qn:
          return m = wo(m, v.mode, y), m.return = v, m;
        case Xt:
          var x = m._init;
          return p(v, x(m._payload), y);
      }
      if (Kr(m) || Br(m)) return m = Rn(m, v.mode, y, null), m.return = v, m;
      rs(v, m);
    }
    return null;
  }
  function f(v, m, y, x) {
    var S = m !== null ? m.key : null;
    if (typeof y == "string" && y !== "" || typeof y == "number") return S !== null ? null : o(v, m, "" + y, x);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Qi:
          return y.key === S ? l(v, m, y, x) : null;
        case qn:
          return y.key === S ? u(v, m, y, x) : null;
        case Xt:
          return S = y._init, f(
            v,
            m,
            S(y._payload),
            x
          );
      }
      if (Kr(y) || Br(y)) return S !== null ? null : c(v, m, y, x, null);
      rs(v, y);
    }
    return null;
  }
  function g(v, m, y, x, S) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return v = v.get(y) || null, o(m, v, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Qi:
          return v = v.get(x.key === null ? y : x.key) || null, l(m, v, x, S);
        case qn:
          return v = v.get(x.key === null ? y : x.key) || null, u(m, v, x, S);
        case Xt:
          var A = x._init;
          return g(v, m, y, A(x._payload), S);
      }
      if (Kr(x) || Br(x)) return v = v.get(y) || null, c(m, v, x, S, null);
      rs(m, x);
    }
    return null;
  }
  function w(v, m, y, x) {
    for (var S = null, A = null, T = m, N = m = 0, O = null; T !== null && N < y.length; N++) {
      T.index > N ? (O = T, T = null) : O = T.sibling;
      var P = f(v, T, y[N], x);
      if (P === null) {
        T === null && (T = O);
        break;
      }
      e && T && P.alternate === null && t(v, T), m = s(P, m, N), A === null ? S = P : A.sibling = P, A = P, T = O;
    }
    if (N === y.length) return n(v, T), re && kn(v, N), S;
    if (T === null) {
      for (; N < y.length; N++) T = p(v, y[N], x), T !== null && (m = s(T, m, N), A === null ? S = T : A.sibling = T, A = T);
      return re && kn(v, N), S;
    }
    for (T = r(v, T); N < y.length; N++) O = g(T, v, N, y[N], x), O !== null && (e && O.alternate !== null && T.delete(O.key === null ? N : O.key), m = s(O, m, N), A === null ? S = O : A.sibling = O, A = O);
    return e && T.forEach(function(z) {
      return t(v, z);
    }), re && kn(v, N), S;
  }
  function E(v, m, y, x) {
    var S = Br(y);
    if (typeof S != "function") throw Error(I(150));
    if (y = S.call(y), y == null) throw Error(I(151));
    for (var A = S = null, T = m, N = m = 0, O = null, P = y.next(); T !== null && !P.done; N++, P = y.next()) {
      T.index > N ? (O = T, T = null) : O = T.sibling;
      var z = f(v, T, P.value, x);
      if (z === null) {
        T === null && (T = O);
        break;
      }
      e && T && z.alternate === null && t(v, T), m = s(z, m, N), A === null ? S = z : A.sibling = z, A = z, T = O;
    }
    if (P.done) return n(
      v,
      T
    ), re && kn(v, N), S;
    if (T === null) {
      for (; !P.done; N++, P = y.next()) P = p(v, P.value, x), P !== null && (m = s(P, m, N), A === null ? S = P : A.sibling = P, A = P);
      return re && kn(v, N), S;
    }
    for (T = r(v, T); !P.done; N++, P = y.next()) P = g(T, v, N, P.value, x), P !== null && (e && P.alternate !== null && T.delete(P.key === null ? N : P.key), m = s(P, m, N), A === null ? S = P : A.sibling = P, A = P);
    return e && T.forEach(function(j) {
      return t(v, j);
    }), re && kn(v, N), S;
  }
  function _(v, m, y, x) {
    if (typeof y == "object" && y !== null && y.type === Xn && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Qi:
          e: {
            for (var S = y.key, A = m; A !== null; ) {
              if (A.key === S) {
                if (S = y.type, S === Xn) {
                  if (A.tag === 7) {
                    n(v, A.sibling), m = i(A, y.props.children), m.return = v, v = m;
                    break e;
                  }
                } else if (A.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Xt && pd(S) === A.type) {
                  n(v, A.sibling), m = i(A, y.props), m.ref = Ur(v, A, y), m.return = v, v = m;
                  break e;
                }
                n(v, A);
                break;
              } else t(v, A);
              A = A.sibling;
            }
            y.type === Xn ? (m = Rn(y.props.children, v.mode, x, y.key), m.return = v, v = m) : (x = Cs(y.type, y.key, y.props, null, v.mode, x), x.ref = Ur(v, m, y), x.return = v, v = x);
          }
          return a(v);
        case qn:
          e: {
            for (A = y.key; m !== null; ) {
              if (m.key === A) if (m.tag === 4 && m.stateNode.containerInfo === y.containerInfo && m.stateNode.implementation === y.implementation) {
                n(v, m.sibling), m = i(m, y.children || []), m.return = v, v = m;
                break e;
              } else {
                n(v, m);
                break;
              }
              else t(v, m);
              m = m.sibling;
            }
            m = wo(y, v.mode, x), m.return = v, v = m;
          }
          return a(v);
        case Xt:
          return A = y._init, _(v, m, A(y._payload), x);
      }
      if (Kr(y)) return w(v, m, y, x);
      if (Br(y)) return E(v, m, y, x);
      rs(v, y);
    }
    return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, m !== null && m.tag === 6 ? (n(v, m.sibling), m = i(m, y), m.return = v, v = m) : (n(v, m), m = Eo(y, v.mode, x), m.return = v, v = m), a(v)) : n(v, m);
  }
  return _;
}
var wr = Mp(!0), bp = Mp(!1), Vs = En(null), js = null, sr = null, iu = null;
function su() {
  iu = sr = js = null;
}
function au(e) {
  var t = Vs.current;
  ne(Vs), e._currentValue = t;
}
function sl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function mr(e, t) {
  js = e, iu = sr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ue = !0), e.firstContext = null);
}
function lt(e) {
  var t = e._currentValue;
  if (iu !== e) if (e = { context: e, memoizedValue: t, next: null }, sr === null) {
    if (js === null) throw Error(I(308));
    sr = e, js.dependencies = { lanes: 0, firstContext: e };
  } else sr = sr.next = e;
  return t;
}
var Tn = null;
function ou(e) {
  Tn === null ? Tn = [e] : Tn.push(e);
}
function Lp(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, ou(t)) : (n.next = i.next, i.next = n), t.interleaved = n, zt(e, r);
}
function zt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Zt = !1;
function lu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Bp(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Vt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function un(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, K & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, zt(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, ou(r)) : (t.next = i.next, i.next = t), r.interleaved = t, zt(e, n);
}
function gs(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Gl(e, n);
  }
}
function hd(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, s = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        s === null ? i = s = a : s = s.next = a, n = n.next;
      } while (n !== null);
      s === null ? i = s = t : s = s.next = t;
    } else i = s = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: s, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function $s(e, t, n, r) {
  var i = e.updateQueue;
  Zt = !1;
  var s = i.firstBaseUpdate, a = i.lastBaseUpdate, o = i.shared.pending;
  if (o !== null) {
    i.shared.pending = null;
    var l = o, u = l.next;
    l.next = null, a === null ? s = u : a.next = u, a = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, o = c.lastBaseUpdate, o !== a && (o === null ? c.firstBaseUpdate = u : o.next = u, c.lastBaseUpdate = l));
  }
  if (s !== null) {
    var p = i.baseState;
    a = 0, c = u = l = null, o = s;
    do {
      var f = o.lane, g = o.eventTime;
      if ((r & f) === f) {
        c !== null && (c = c.next = {
          eventTime: g,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var w = e, E = o;
          switch (f = t, g = n, E.tag) {
            case 1:
              if (w = E.payload, typeof w == "function") {
                p = w.call(g, p, f);
                break e;
              }
              p = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = E.payload, f = typeof w == "function" ? w.call(g, p, f) : w, f == null) break e;
              p = oe({}, p, f);
              break e;
            case 2:
              Zt = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (e.flags |= 64, f = i.effects, f === null ? i.effects = [o] : f.push(o));
      } else g = { eventTime: g, lane: f, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, c === null ? (u = c = g, l = p) : c = c.next = g, a |= f;
      if (o = o.next, o === null) {
        if (o = i.shared.pending, o === null) break;
        f = o, o = f.next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = p), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        a |= i.lane, i = i.next;
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    Ln |= a, e.lanes = a, e.memoizedState = p;
  }
}
function md(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(I(191, i));
      i.call(r);
    }
  }
}
var Oi = {}, Ft = En(Oi), wi = En(Oi), xi = En(Oi);
function Nn(e) {
  if (e === Oi) throw Error(I(174));
  return e;
}
function uu(e, t) {
  switch (ee(xi, t), ee(wi, e), ee(Ft, Oi), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Vo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Vo(t, e);
  }
  ne(Ft), ee(Ft, t);
}
function xr() {
  ne(Ft), ne(wi), ne(xi);
}
function Vp(e) {
  Nn(xi.current);
  var t = Nn(Ft.current), n = Vo(t, e.type);
  t !== n && (ee(wi, e), ee(Ft, n));
}
function cu(e) {
  wi.current === e && (ne(Ft), ne(wi));
}
var se = En(0);
function zs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var po = [];
function du() {
  for (var e = 0; e < po.length; e++) po[e]._workInProgressVersionPrimary = null;
  po.length = 0;
}
var ys = Gt.ReactCurrentDispatcher, ho = Gt.ReactCurrentBatchConfig, bn = 0, ae = null, he = null, ye = null, Us = !1, ri = !1, ki = 0, Bg = 0;
function Te() {
  throw Error(I(321));
}
function fu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!kt(e[n], t[n])) return !1;
  return !0;
}
function pu(e, t, n, r, i, s) {
  if (bn = s, ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ys.current = e === null || e.memoizedState === null ? zg : Ug, e = n(r, i), ri) {
    s = 0;
    do {
      if (ri = !1, ki = 0, 25 <= s) throw Error(I(301));
      s += 1, ye = he = null, t.updateQueue = null, ys.current = Hg, e = n(r, i);
    } while (ri);
  }
  if (ys.current = Hs, t = he !== null && he.next !== null, bn = 0, ye = he = ae = null, Us = !1, t) throw Error(I(300));
  return e;
}
function hu() {
  var e = ki !== 0;
  return ki = 0, e;
}
function At() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ye === null ? ae.memoizedState = ye = e : ye = ye.next = e, ye;
}
function ut() {
  if (he === null) {
    var e = ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = he.next;
  var t = ye === null ? ae.memoizedState : ye.next;
  if (t !== null) ye = t, he = e;
  else {
    if (e === null) throw Error(I(310));
    he = e, e = { memoizedState: he.memoizedState, baseState: he.baseState, baseQueue: he.baseQueue, queue: he.queue, next: null }, ye === null ? ae.memoizedState = ye = e : ye = ye.next = e;
  }
  return ye;
}
function Ci(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function mo(e) {
  var t = ut(), n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = he, i = r.baseQueue, s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var a = i.next;
      i.next = s.next, s.next = a;
    }
    r.baseQueue = i = s, n.pending = null;
  }
  if (i !== null) {
    s = i.next, r = r.baseState;
    var o = a = null, l = null, u = s;
    do {
      var c = u.lane;
      if ((bn & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var p = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (o = l = p, a = r) : l = l.next = p, ae.lanes |= c, Ln |= c;
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? a = r : l.next = o, kt(r, t.memoizedState) || (Ue = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      s = i.lane, ae.lanes |= s, Ln |= s, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function vo(e) {
  var t = ut(), n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = i = i.next;
    do
      s = e(s, a.action), a = a.next;
    while (a !== i);
    kt(s, t.memoizedState) || (Ue = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function jp() {
}
function $p(e, t) {
  var n = ae, r = ut(), i = t(), s = !kt(r.memoizedState, i);
  if (s && (r.memoizedState = i, Ue = !0), r = r.queue, mu(Hp.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || ye !== null && ye.memoizedState.tag & 1) {
    if (n.flags |= 2048, _i(9, Up.bind(null, n, r, i, t), void 0, null), we === null) throw Error(I(349));
    bn & 30 || zp(n, t, i);
  }
  return i;
}
function zp(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ae.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Up(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Wp(t) && Qp(e);
}
function Hp(e, t, n) {
  return n(function() {
    Wp(t) && Qp(e);
  });
}
function Wp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !kt(e, n);
  } catch {
    return !0;
  }
}
function Qp(e) {
  var t = zt(e, 1);
  t !== null && xt(t, e, 1, -1);
}
function vd(e) {
  var t = At();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ci, lastRenderedState: e }, t.queue = e, e = e.dispatch = $g.bind(null, ae, e), [t.memoizedState, e];
}
function _i(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ae.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Gp() {
  return ut().memoizedState;
}
function Es(e, t, n, r) {
  var i = At();
  ae.flags |= e, i.memoizedState = _i(1 | t, n, void 0, r === void 0 ? null : r);
}
function fa(e, t, n, r) {
  var i = ut();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (he !== null) {
    var a = he.memoizedState;
    if (s = a.destroy, r !== null && fu(r, a.deps)) {
      i.memoizedState = _i(t, n, s, r);
      return;
    }
  }
  ae.flags |= e, i.memoizedState = _i(1 | t, n, s, r);
}
function gd(e, t) {
  return Es(8390656, 8, e, t);
}
function mu(e, t) {
  return fa(2048, 8, e, t);
}
function Kp(e, t) {
  return fa(4, 2, e, t);
}
function Yp(e, t) {
  return fa(4, 4, e, t);
}
function qp(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Xp(e, t, n) {
  return n = n != null ? n.concat([e]) : null, fa(4, 4, qp.bind(null, t, e), n);
}
function vu() {
}
function Zp(e, t) {
  var n = ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Jp(e, t) {
  var n = ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function eh(e, t, n) {
  return bn & 21 ? (kt(n, t) || (n = sp(), ae.lanes |= n, Ln |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ue = !0), e.memoizedState = n);
}
function Vg(e, t) {
  var n = q;
  q = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ho.transition;
  ho.transition = {};
  try {
    e(!1), t();
  } finally {
    q = n, ho.transition = r;
  }
}
function th() {
  return ut().memoizedState;
}
function jg(e, t, n) {
  var r = dn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, nh(e)) rh(t, n);
  else if (n = Lp(e, t, n, r), n !== null) {
    var i = Be();
    xt(n, e, r, i), ih(n, t, r);
  }
}
function $g(e, t, n) {
  var r = dn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (nh(e)) rh(t, i);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var a = t.lastRenderedState, o = s(a, n);
      if (i.hasEagerState = !0, i.eagerState = o, kt(o, a)) {
        var l = t.interleaved;
        l === null ? (i.next = i, ou(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = Lp(e, t, i, r), n !== null && (i = Be(), xt(n, e, r, i), ih(n, t, r));
  }
}
function nh(e) {
  var t = e.alternate;
  return e === ae || t !== null && t === ae;
}
function rh(e, t) {
  ri = Us = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function ih(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Gl(e, n);
  }
}
var Hs = { readContext: lt, useCallback: Te, useContext: Te, useEffect: Te, useImperativeHandle: Te, useInsertionEffect: Te, useLayoutEffect: Te, useMemo: Te, useReducer: Te, useRef: Te, useState: Te, useDebugValue: Te, useDeferredValue: Te, useTransition: Te, useMutableSource: Te, useSyncExternalStore: Te, useId: Te, unstable_isNewReconciler: !1 }, zg = { readContext: lt, useCallback: function(e, t) {
  return At().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: lt, useEffect: gd, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Es(
    4194308,
    4,
    qp.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Es(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Es(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = At();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = At();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = jg.bind(null, ae, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = At();
  return e = { current: e }, t.memoizedState = e;
}, useState: vd, useDebugValue: vu, useDeferredValue: function(e) {
  return At().memoizedState = e;
}, useTransition: function() {
  var e = vd(!1), t = e[0];
  return e = Vg.bind(null, e[1]), At().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ae, i = At();
  if (re) {
    if (n === void 0) throw Error(I(407));
    n = n();
  } else {
    if (n = t(), we === null) throw Error(I(349));
    bn & 30 || zp(r, t, n);
  }
  i.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return i.queue = s, gd(Hp.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, _i(9, Up.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = At(), t = we.identifierPrefix;
  if (re) {
    var n = Bt, r = Lt;
    n = (r & ~(1 << 32 - wt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ki++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Bg++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Ug = {
  readContext: lt,
  useCallback: Zp,
  useContext: lt,
  useEffect: mu,
  useImperativeHandle: Xp,
  useInsertionEffect: Kp,
  useLayoutEffect: Yp,
  useMemo: Jp,
  useReducer: mo,
  useRef: Gp,
  useState: function() {
    return mo(Ci);
  },
  useDebugValue: vu,
  useDeferredValue: function(e) {
    var t = ut();
    return eh(t, he.memoizedState, e);
  },
  useTransition: function() {
    var e = mo(Ci)[0], t = ut().memoizedState;
    return [e, t];
  },
  useMutableSource: jp,
  useSyncExternalStore: $p,
  useId: th,
  unstable_isNewReconciler: !1
}, Hg = { readContext: lt, useCallback: Zp, useContext: lt, useEffect: mu, useImperativeHandle: Xp, useInsertionEffect: Kp, useLayoutEffect: Yp, useMemo: Jp, useReducer: vo, useRef: Gp, useState: function() {
  return vo(Ci);
}, useDebugValue: vu, useDeferredValue: function(e) {
  var t = ut();
  return he === null ? t.memoizedState = e : eh(t, he.memoizedState, e);
}, useTransition: function() {
  var e = vo(Ci)[0], t = ut().memoizedState;
  return [e, t];
}, useMutableSource: jp, useSyncExternalStore: $p, useId: th, unstable_isNewReconciler: !1 };
function vt(e, t) {
  if (e && e.defaultProps) {
    t = oe({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function al(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var pa = { isMounted: function(e) {
  return (e = e._reactInternals) ? $n(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Be(), i = dn(e), s = Vt(r, i);
  s.payload = t, n != null && (s.callback = n), t = un(e, s, i), t !== null && (xt(t, e, i, r), gs(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Be(), i = dn(e), s = Vt(r, i);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = un(e, s, i), t !== null && (xt(t, e, i, r), gs(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Be(), r = dn(e), i = Vt(n, r);
  i.tag = 2, t != null && (i.callback = t), t = un(e, i, r), t !== null && (xt(t, e, r, n), gs(t, e, r));
} };
function yd(e, t, n, r, i, s, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, a) : t.prototype && t.prototype.isPureReactComponent ? !vi(n, r) || !vi(i, s) : !0;
}
function sh(e, t, n) {
  var r = !1, i = mn, s = t.contextType;
  return typeof s == "object" && s !== null ? s = lt(s) : (i = We(t) ? Dn : Pe.current, r = t.contextTypes, s = (r = r != null) ? yr(e, i) : mn), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = pa, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function Ed(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && pa.enqueueReplaceState(t, t.state, null);
}
function ol(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, lu(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? i.context = lt(s) : (s = We(t) ? Dn : Pe.current, i.context = yr(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (al(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && pa.enqueueReplaceState(i, i.state, null), $s(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function kr(e, t) {
  try {
    var n = "", r = t;
    do
      n += yv(r), r = r.return;
    while (r);
    var i = n;
  } catch (s) {
    i = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function go(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ll(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Wg = typeof WeakMap == "function" ? WeakMap : Map;
function ah(e, t, n) {
  n = Vt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Qs || (Qs = !0, yl = r), ll(e, t);
  }, n;
}
function oh(e, t, n) {
  n = Vt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      ll(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    ll(e, t), typeof r != "function" && (cn === null ? cn = /* @__PURE__ */ new Set([this]) : cn.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function wd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Wg();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = s0.bind(null, e, t, n), t.then(e, e));
}
function xd(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function kd(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Vt(-1, 1), t.tag = 2, un(n, t, 1))), n.lanes |= 1), e);
}
var Qg = Gt.ReactCurrentOwner, Ue = !1;
function Le(e, t, n, r) {
  t.child = e === null ? bp(t, null, n, r) : wr(t, e.child, n, r);
}
function Cd(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return mr(t, i), r = pu(e, t, n, r, s, i), n = hu(), e !== null && !Ue ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Ut(e, t, i)) : (re && n && tu(t), t.flags |= 1, Le(e, t, r, i), t.child);
}
function _d(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !_u(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, lh(e, t, s, r, i)) : (e = Cs(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & i)) {
    var a = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : vi, n(a, r) && e.ref === t.ref) return Ut(e, t, i);
  }
  return t.flags |= 1, e = fn(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function lh(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (vi(s, r) && e.ref === t.ref) if (Ue = !1, t.pendingProps = r = s, (e.lanes & i) !== 0) e.flags & 131072 && (Ue = !0);
    else return t.lanes = e.lanes, Ut(e, t, i);
  }
  return ul(e, t, n, r, i);
}
function uh(e, t, n) {
  var r = t.pendingProps, i = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ee(or, Ye), Ye |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ee(or, Ye), Ye |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, ee(or, Ye), Ye |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, ee(or, Ye), Ye |= r;
  return Le(e, t, i, n), t.child;
}
function ch(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ul(e, t, n, r, i) {
  var s = We(n) ? Dn : Pe.current;
  return s = yr(t, s), mr(t, i), n = pu(e, t, n, r, s, i), r = hu(), e !== null && !Ue ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Ut(e, t, i)) : (re && r && tu(t), t.flags |= 1, Le(e, t, n, i), t.child);
}
function Sd(e, t, n, r, i) {
  if (We(n)) {
    var s = !0;
    bs(t);
  } else s = !1;
  if (mr(t, i), t.stateNode === null) ws(e, t), sh(t, n, r), ol(t, n, r, i), r = !0;
  else if (e === null) {
    var a = t.stateNode, o = t.memoizedProps;
    a.props = o;
    var l = a.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = lt(u) : (u = We(n) ? Dn : Pe.current, u = yr(t, u));
    var c = n.getDerivedStateFromProps, p = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    p || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== r || l !== u) && Ed(t, a, r, u), Zt = !1;
    var f = t.memoizedState;
    a.state = f, $s(t, r, a, i), l = t.memoizedState, o !== r || f !== l || He.current || Zt ? (typeof c == "function" && (al(t, n, c, r), l = t.memoizedState), (o = Zt || yd(t, n, o, r, f, l, u)) ? (p || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = u, r = o) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, Bp(e, t), o = t.memoizedProps, u = t.type === t.elementType ? o : vt(t.type, o), a.props = u, p = t.pendingProps, f = a.context, l = n.contextType, typeof l == "object" && l !== null ? l = lt(l) : (l = We(n) ? Dn : Pe.current, l = yr(t, l));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== p || f !== l) && Ed(t, a, r, l), Zt = !1, f = t.memoizedState, a.state = f, $s(t, r, a, i);
    var w = t.memoizedState;
    o !== p || f !== w || He.current || Zt ? (typeof g == "function" && (al(t, n, g, r), w = t.memoizedState), (u = Zt || yd(t, n, u, r, f, w, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, w, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, w, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), a.props = r, a.state = w, a.context = l, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return cl(e, t, n, r, s, i);
}
function cl(e, t, n, r, i, s) {
  ch(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return i && cd(t, n, !1), Ut(e, t, s);
  r = t.stateNode, Qg.current = t;
  var o = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = wr(t, e.child, null, s), t.child = wr(t, null, o, s)) : Le(e, t, o, s), t.memoizedState = r.state, i && cd(t, n, !0), t.child;
}
function dh(e) {
  var t = e.stateNode;
  t.pendingContext ? ud(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ud(e, t.context, !1), uu(e, t.containerInfo);
}
function Ad(e, t, n, r, i) {
  return Er(), ru(i), t.flags |= 256, Le(e, t, n, r), t.child;
}
var dl = { dehydrated: null, treeContext: null, retryLane: 0 };
function fl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function fh(e, t, n) {
  var r = t.pendingProps, i = se.current, s = !1, a = (t.flags & 128) !== 0, o;
  if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), o ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), ee(se, i & 1), e === null)
    return il(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, a = { mode: "hidden", children: a }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = a) : s = va(a, r, 0, null), e = Rn(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = fl(n), t.memoizedState = dl, e) : gu(t, a));
  if (i = e.memoizedState, i !== null && (o = i.dehydrated, o !== null)) return Gg(e, t, a, r, o, i, n);
  if (s) {
    s = r.fallback, a = t.mode, i = e.child, o = i.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = fn(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), o !== null ? s = fn(o, s) : (s = Rn(s, a, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, a = e.child.memoizedState, a = a === null ? fl(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, s.memoizedState = a, s.childLanes = e.childLanes & ~n, t.memoizedState = dl, r;
  }
  return s = e.child, e = s.sibling, r = fn(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function gu(e, t) {
  return t = va({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function is(e, t, n, r) {
  return r !== null && ru(r), wr(t, e.child, null, n), e = gu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Gg(e, t, n, r, i, s, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = go(Error(I(422))), is(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = va({ mode: "visible", children: r.children }, i, 0, null), s = Rn(s, i, a, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && wr(t, e.child, null, a), t.child.memoizedState = fl(a), t.memoizedState = dl, s);
  if (!(t.mode & 1)) return is(e, t, a, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var o = r.dgst;
    return r = o, s = Error(I(419)), r = go(s, r, void 0), is(e, t, a, r);
  }
  if (o = (a & e.childLanes) !== 0, Ue || o) {
    if (r = we, r !== null) {
      switch (a & -a) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (r.suspendedLanes | a) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, zt(e, i), xt(r, e, i, -1));
    }
    return Cu(), r = go(Error(I(421))), is(e, t, a, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = a0.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, Xe = ln(i.nextSibling), Ze = t, re = !0, Et = null, e !== null && (it[st++] = Lt, it[st++] = Bt, it[st++] = Mn, Lt = e.id, Bt = e.overflow, Mn = t), t = gu(t, r.children), t.flags |= 4096, t);
}
function Td(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), sl(e.return, t, n);
}
function yo(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i);
}
function ph(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, s = r.tail;
  if (Le(e, t, r.children, n), r = se.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Td(e, n, t);
      else if (e.tag === 19) Td(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (ee(se, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && zs(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), yo(t, !1, i, n, s);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && zs(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      yo(t, !0, n, null, s);
      break;
    case "together":
      yo(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ws(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ut(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ln |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(I(153));
  if (t.child !== null) {
    for (e = t.child, n = fn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = fn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Kg(e, t, n) {
  switch (t.tag) {
    case 3:
      dh(t), Er();
      break;
    case 5:
      Vp(t);
      break;
    case 1:
      We(t.type) && bs(t);
      break;
    case 4:
      uu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      ee(Vs, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ee(se, se.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? fh(e, t, n) : (ee(se, se.current & 1), e = Ut(e, t, n), e !== null ? e.sibling : null);
      ee(se, se.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return ph(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ee(se, se.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, uh(e, t, n);
  }
  return Ut(e, t, n);
}
var hh, pl, mh, vh;
hh = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
pl = function() {
};
mh = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, Nn(Ft.current);
    var s = null;
    switch (n) {
      case "input":
        i = Mo(e, i), r = Mo(e, r), s = [];
        break;
      case "select":
        i = oe({}, i, { value: void 0 }), r = oe({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        i = Bo(e, i), r = Bo(e, r), s = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ds);
    }
    jo(n, r);
    var a;
    n = null;
    for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var o = i[u];
      for (a in o) o.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ui.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (o = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== o && (l != null || o != null)) if (u === "style") if (o) {
        for (a in o) !o.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
        for (a in l) l.hasOwnProperty(a) && o[a] !== l[a] && (n || (n = {}), n[a] = l[a]);
      } else n || (s || (s = []), s.push(
        u,
        n
      )), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, o = o ? o.__html : void 0, l != null && o !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ui.hasOwnProperty(u) ? (l != null && u === "onScroll" && te("scroll", e), s || o === l || (s = [])) : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
vh = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Hr(e, t) {
  if (!re) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function Ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Yg(e, t, n) {
  var r = t.pendingProps;
  switch (nu(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ne(t), null;
    case 1:
      return We(t.type) && Ms(), Ne(t), null;
    case 3:
      return r = t.stateNode, xr(), ne(He), ne(Pe), du(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ns(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Et !== null && (xl(Et), Et = null))), pl(e, t), Ne(t), null;
    case 5:
      cu(t);
      var i = Nn(xi.current);
      if (n = t.type, e !== null && t.stateNode != null) mh(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(I(166));
          return Ne(t), null;
        }
        if (e = Nn(Ft.current), ns(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[Tt] = t, r[Ei] = s, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              te("cancel", r), te("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              te("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < qr.length; i++) te(qr[i], r);
              break;
            case "source":
              te("error", r);
              break;
            case "img":
            case "image":
            case "link":
              te(
                "error",
                r
              ), te("load", r);
              break;
            case "details":
              te("toggle", r);
              break;
            case "input":
              bc(r, s), te("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, te("invalid", r);
              break;
            case "textarea":
              Bc(r, s), te("invalid", r);
          }
          jo(n, s), i = null;
          for (var a in s) if (s.hasOwnProperty(a)) {
            var o = s[a];
            a === "children" ? typeof o == "string" ? r.textContent !== o && (s.suppressHydrationWarning !== !0 && ts(r.textContent, o, e), i = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (s.suppressHydrationWarning !== !0 && ts(
              r.textContent,
              o,
              e
            ), i = ["children", "" + o]) : ui.hasOwnProperty(a) && o != null && a === "onScroll" && te("scroll", r);
          }
          switch (n) {
            case "input":
              Gi(r), Lc(r, s, !0);
              break;
            case "textarea":
              Gi(r), Vc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Ds);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Hf(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[Tt] = t, e[Ei] = r, hh(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = $o(n, r), n) {
              case "dialog":
                te("cancel", e), te("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                te("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < qr.length; i++) te(qr[i], e);
                i = r;
                break;
              case "source":
                te("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                te(
                  "error",
                  e
                ), te("load", e), i = r;
                break;
              case "details":
                te("toggle", e), i = r;
                break;
              case "input":
                bc(e, r), i = Mo(e, r), te("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = oe({}, r, { value: void 0 }), te("invalid", e);
                break;
              case "textarea":
                Bc(e, r), i = Bo(e, r), te("invalid", e);
                break;
              default:
                i = r;
            }
            jo(n, i), o = i;
            for (s in o) if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "style" ? Gf(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Wf(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && ci(e, l) : typeof l == "number" && ci(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (ui.hasOwnProperty(s) ? l != null && s === "onScroll" && te("scroll", e) : l != null && $l(e, s, l, a));
            }
            switch (n) {
              case "input":
                Gi(e), Lc(e, r, !1);
                break;
              case "textarea":
                Gi(e), Vc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + hn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? dr(e, !!r.multiple, s, !1) : r.defaultValue != null && dr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ds);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Ne(t), null;
    case 6:
      if (e && t.stateNode != null) vh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
        if (n = Nn(xi.current), Nn(Ft.current), ns(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Tt] = t, (s = r.nodeValue !== n) && (e = Ze, e !== null)) switch (e.tag) {
            case 3:
              ts(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ts(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Tt] = t, t.stateNode = r;
      }
      return Ne(t), null;
    case 13:
      if (ne(se), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (re && Xe !== null && t.mode & 1 && !(t.flags & 128)) Dp(), Er(), t.flags |= 98560, s = !1;
        else if (s = ns(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(I(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(I(317));
            s[Tt] = t;
          } else Er(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ne(t), s = !1;
        } else Et !== null && (xl(Et), Et = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || se.current & 1 ? me === 0 && (me = 3) : Cu())), t.updateQueue !== null && (t.flags |= 4), Ne(t), null);
    case 4:
      return xr(), pl(e, t), e === null && gi(t.stateNode.containerInfo), Ne(t), null;
    case 10:
      return au(t.type._context), Ne(t), null;
    case 17:
      return We(t.type) && Ms(), Ne(t), null;
    case 19:
      if (ne(se), s = t.memoizedState, s === null) return Ne(t), null;
      if (r = (t.flags & 128) !== 0, a = s.rendering, a === null) if (r) Hr(s, !1);
      else {
        if (me !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (a = zs(e), a !== null) {
            for (t.flags |= 128, Hr(s, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, a = s.alternate, a === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = a.childLanes, s.lanes = a.lanes, s.child = a.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = a.memoizedProps, s.memoizedState = a.memoizedState, s.updateQueue = a.updateQueue, s.type = a.type, e = a.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ee(se, se.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && ce() > Cr && (t.flags |= 128, r = !0, Hr(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = zs(a), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Hr(s, !0), s.tail === null && s.tailMode === "hidden" && !a.alternate && !re) return Ne(t), null;
        } else 2 * ce() - s.renderingStartTime > Cr && n !== 1073741824 && (t.flags |= 128, r = !0, Hr(s, !1), t.lanes = 4194304);
        s.isBackwards ? (a.sibling = t.child, t.child = a) : (n = s.last, n !== null ? n.sibling = a : t.child = a, s.last = a);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = ce(), t.sibling = null, n = se.current, ee(se, r ? n & 1 | 2 : n & 1), t) : (Ne(t), null);
    case 22:
    case 23:
      return ku(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ye & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ne(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function qg(e, t) {
  switch (nu(t), t.tag) {
    case 1:
      return We(t.type) && Ms(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return xr(), ne(He), ne(Pe), du(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return cu(t), null;
    case 13:
      if (ne(se), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(I(340));
        Er();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ne(se), null;
    case 4:
      return xr(), null;
    case 10:
      return au(t.type._context), null;
    case 22:
    case 23:
      return ku(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ss = !1, Ie = !1, Xg = typeof WeakSet == "function" ? WeakSet : Set, D = null;
function ar(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    le(e, t, r);
  }
  else n.current = null;
}
function hl(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var Nd = !1;
function Zg(e, t) {
  if (Xo = Rs, e = xp(), eu(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var i = r.anchorOffset, s = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, s.nodeType;
        } catch {
          n = null;
          break e;
        }
        var a = 0, o = -1, l = -1, u = 0, c = 0, p = e, f = null;
        t: for (; ; ) {
          for (var g; p !== n || i !== 0 && p.nodeType !== 3 || (o = a + i), p !== s || r !== 0 && p.nodeType !== 3 || (l = a + r), p.nodeType === 3 && (a += p.nodeValue.length), (g = p.firstChild) !== null; )
            f = p, p = g;
          for (; ; ) {
            if (p === e) break t;
            if (f === n && ++u === i && (o = a), f === s && ++c === r && (l = a), (g = p.nextSibling) !== null) break;
            p = f, f = p.parentNode;
          }
          p = g;
        }
        n = o === -1 || l === -1 ? null : { start: o, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Zo = { focusedElem: e, selectionRange: n }, Rs = !1, D = t; D !== null; ) if (t = D, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, D = e;
  else for (; D !== null; ) {
    t = D;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var E = w.memoizedProps, _ = w.memoizedState, v = t.stateNode, m = v.getSnapshotBeforeUpdate(t.elementType === t.type ? E : vt(t.type, E), _);
            v.__reactInternalSnapshotBeforeUpdate = m;
          }
          break;
        case 3:
          var y = t.stateNode.containerInfo;
          y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(I(163));
      }
    } catch (x) {
      le(t, t.return, x);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, D = e;
      break;
    }
    D = t.return;
  }
  return w = Nd, Nd = !1, w;
}
function ii(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        i.destroy = void 0, s !== void 0 && hl(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ha(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ml(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function gh(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, gh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Tt], delete t[Ei], delete t[tl], delete t[Dg], delete t[Mg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function yh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Id(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || yh(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function vl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ds));
  else if (r !== 4 && (e = e.child, e !== null)) for (vl(e, t, n), e = e.sibling; e !== null; ) vl(e, t, n), e = e.sibling;
}
function gl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (gl(e, t, n), e = e.sibling; e !== null; ) gl(e, t, n), e = e.sibling;
}
var _e = null, gt = !1;
function qt(e, t, n) {
  for (n = n.child; n !== null; ) Eh(e, t, n), n = n.sibling;
}
function Eh(e, t, n) {
  if (It && typeof It.onCommitFiberUnmount == "function") try {
    It.onCommitFiberUnmount(aa, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ie || ar(n, t);
    case 6:
      var r = _e, i = gt;
      _e = null, qt(e, t, n), _e = r, gt = i, _e !== null && (gt ? (e = _e, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : _e.removeChild(n.stateNode));
      break;
    case 18:
      _e !== null && (gt ? (e = _e, n = n.stateNode, e.nodeType === 8 ? co(e.parentNode, n) : e.nodeType === 1 && co(e, n), hi(e)) : co(_e, n.stateNode));
      break;
    case 4:
      r = _e, i = gt, _e = n.stateNode.containerInfo, gt = !0, qt(e, t, n), _e = r, gt = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ie && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var s = i, a = s.destroy;
          s = s.tag, a !== void 0 && (s & 2 || s & 4) && hl(n, t, a), i = i.next;
        } while (i !== r);
      }
      qt(e, t, n);
      break;
    case 1:
      if (!Ie && (ar(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (o) {
        le(n, t, o);
      }
      qt(e, t, n);
      break;
    case 21:
      qt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ie = (r = Ie) || n.memoizedState !== null, qt(e, t, n), Ie = r) : qt(e, t, n);
      break;
    default:
      qt(e, t, n);
  }
}
function Fd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Xg()), t.forEach(function(r) {
      var i = o0.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function mt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var s = e, a = t, o = a;
      e: for (; o !== null; ) {
        switch (o.tag) {
          case 5:
            _e = o.stateNode, gt = !1;
            break e;
          case 3:
            _e = o.stateNode.containerInfo, gt = !0;
            break e;
          case 4:
            _e = o.stateNode.containerInfo, gt = !0;
            break e;
        }
        o = o.return;
      }
      if (_e === null) throw Error(I(160));
      Eh(s, a, i), _e = null, gt = !1;
      var l = i.alternate;
      l !== null && (l.return = null), i.return = null;
    } catch (u) {
      le(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) wh(t, e), t = t.sibling;
}
function wh(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (mt(t, e), St(e), r & 4) {
        try {
          ii(3, e, e.return), ha(3, e);
        } catch (E) {
          le(e, e.return, E);
        }
        try {
          ii(5, e, e.return);
        } catch (E) {
          le(e, e.return, E);
        }
      }
      break;
    case 1:
      mt(t, e), St(e), r & 512 && n !== null && ar(n, n.return);
      break;
    case 5:
      if (mt(t, e), St(e), r & 512 && n !== null && ar(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          ci(i, "");
        } catch (E) {
          le(e, e.return, E);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var s = e.memoizedProps, a = n !== null ? n.memoizedProps : s, o = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          o === "input" && s.type === "radio" && s.name != null && zf(i, s), $o(o, a);
          var u = $o(o, s);
          for (a = 0; a < l.length; a += 2) {
            var c = l[a], p = l[a + 1];
            c === "style" ? Gf(i, p) : c === "dangerouslySetInnerHTML" ? Wf(i, p) : c === "children" ? ci(i, p) : $l(i, c, p, u);
          }
          switch (o) {
            case "input":
              bo(i, s);
              break;
            case "textarea":
              Uf(i, s);
              break;
            case "select":
              var f = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!s.multiple;
              var g = s.value;
              g != null ? dr(i, !!s.multiple, g, !1) : f !== !!s.multiple && (s.defaultValue != null ? dr(
                i,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : dr(i, !!s.multiple, s.multiple ? [] : "", !1));
          }
          i[Ei] = s;
        } catch (E) {
          le(e, e.return, E);
        }
      }
      break;
    case 6:
      if (mt(t, e), St(e), r & 4) {
        if (e.stateNode === null) throw Error(I(162));
        i = e.stateNode, s = e.memoizedProps;
        try {
          i.nodeValue = s;
        } catch (E) {
          le(e, e.return, E);
        }
      }
      break;
    case 3:
      if (mt(t, e), St(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        hi(t.containerInfo);
      } catch (E) {
        le(e, e.return, E);
      }
      break;
    case 4:
      mt(t, e), St(e);
      break;
    case 13:
      mt(t, e), St(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (wu = ce())), r & 4 && Fd(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ie = (u = Ie) || c, mt(t, e), Ie = u) : mt(t, e), St(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (D = e, c = e.child; c !== null; ) {
          for (p = D = c; D !== null; ) {
            switch (f = D, g = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ii(4, f, f.return);
                break;
              case 1:
                ar(f, f.return);
                var w = f.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (E) {
                    le(r, n, E);
                  }
                }
                break;
              case 5:
                ar(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  Pd(p);
                  continue;
                }
            }
            g !== null ? (g.return = f, D = g) : Pd(p);
          }
          c = c.sibling;
        }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p;
              try {
                i = p.stateNode, u ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (o = p.stateNode, l = p.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, o.style.display = Qf("display", a));
              } catch (E) {
                le(e, e.return, E);
              }
            }
          } else if (p.tag === 6) {
            if (c === null) try {
              p.stateNode.nodeValue = u ? "" : p.memoizedProps;
            } catch (E) {
              le(e, e.return, E);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            c === p && (c = null), p = p.return;
          }
          c === p && (c = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      mt(t, e), St(e), r & 4 && Fd(e);
      break;
    case 21:
      break;
    default:
      mt(
        t,
        e
      ), St(e);
  }
}
function St(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (yh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(I(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (ci(i, ""), r.flags &= -33);
          var s = Id(e);
          gl(e, s, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, o = Id(e);
          vl(e, o, a);
          break;
        default:
          throw Error(I(161));
      }
    } catch (l) {
      le(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Jg(e, t, n) {
  D = e, xh(e);
}
function xh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var i = D, s = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || ss;
      if (!a) {
        var o = i.alternate, l = o !== null && o.memoizedState !== null || Ie;
        o = ss;
        var u = Ie;
        if (ss = a, (Ie = l) && !u) for (D = i; D !== null; ) a = D, l = a.child, a.tag === 22 && a.memoizedState !== null ? Od(i) : l !== null ? (l.return = a, D = l) : Od(i);
        for (; s !== null; ) D = s, xh(s), s = s.sibling;
        D = i, ss = o, Ie = u;
      }
      Rd(e);
    } else i.subtreeFlags & 8772 && s !== null ? (s.return = i, D = s) : Rd(e);
  }
}
function Rd(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ie || ha(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ie) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : vt(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && md(t, s, r);
            break;
          case 3:
            var a = t.updateQueue;
            if (a !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              md(t, a, n);
            }
            break;
          case 5:
            var o = t.stateNode;
            if (n === null && t.flags & 4) {
              n = o;
              var l = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && n.focus();
                  break;
                case "img":
                  l.src && (n.src = l.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var c = u.memoizedState;
                if (c !== null) {
                  var p = c.dehydrated;
                  p !== null && hi(p);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(I(163));
        }
        Ie || t.flags & 512 && ml(t);
      } catch (f) {
        le(t, t.return, f);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, D = n;
      break;
    }
    D = t.return;
  }
}
function Pd(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, D = n;
      break;
    }
    D = t.return;
  }
}
function Od(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ha(4, t);
          } catch (l) {
            le(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              le(t, i, l);
            }
          }
          var s = t.return;
          try {
            ml(t);
          } catch (l) {
            le(t, s, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            ml(t);
          } catch (l) {
            le(t, a, l);
          }
      }
    } catch (l) {
      le(t, t.return, l);
    }
    if (t === e) {
      D = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      o.return = t.return, D = o;
      break;
    }
    D = t.return;
  }
}
var e0 = Math.ceil, Ws = Gt.ReactCurrentDispatcher, yu = Gt.ReactCurrentOwner, ot = Gt.ReactCurrentBatchConfig, K = 0, we = null, fe = null, Se = 0, Ye = 0, or = En(0), me = 0, Si = null, Ln = 0, ma = 0, Eu = 0, si = null, ze = null, wu = 0, Cr = 1 / 0, Dt = null, Qs = !1, yl = null, cn = null, as = !1, rn = null, Gs = 0, ai = 0, El = null, xs = -1, ks = 0;
function Be() {
  return K & 6 ? ce() : xs !== -1 ? xs : xs = ce();
}
function dn(e) {
  return e.mode & 1 ? K & 2 && Se !== 0 ? Se & -Se : Lg.transition !== null ? (ks === 0 && (ks = sp()), ks) : (e = q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : fp(e.type)), e) : 1;
}
function xt(e, t, n, r) {
  if (50 < ai) throw ai = 0, El = null, Error(I(185));
  Fi(e, n, r), (!(K & 2) || e !== we) && (e === we && (!(K & 2) && (ma |= n), me === 4 && tn(e, Se)), Qe(e, r), n === 1 && K === 0 && !(t.mode & 1) && (Cr = ce() + 500, da && wn()));
}
function Qe(e, t) {
  var n = e.callbackNode;
  Lv(e, t);
  var r = Fs(e, e === we ? Se : 0);
  if (r === 0) n !== null && zc(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && zc(n), t === 1) e.tag === 0 ? bg(Dd.bind(null, e)) : Rp(Dd.bind(null, e)), Pg(function() {
      !(K & 6) && wn();
    }), n = null;
    else {
      switch (ap(r)) {
        case 1:
          n = Ql;
          break;
        case 4:
          n = rp;
          break;
        case 16:
          n = Is;
          break;
        case 536870912:
          n = ip;
          break;
        default:
          n = Is;
      }
      n = Ih(n, kh.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function kh(e, t) {
  if (xs = -1, ks = 0, K & 6) throw Error(I(327));
  var n = e.callbackNode;
  if (vr() && e.callbackNode !== n) return null;
  var r = Fs(e, e === we ? Se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ks(e, r);
  else {
    t = r;
    var i = K;
    K |= 2;
    var s = _h();
    (we !== e || Se !== t) && (Dt = null, Cr = ce() + 500, Fn(e, t));
    do
      try {
        r0();
        break;
      } catch (o) {
        Ch(e, o);
      }
    while (!0);
    su(), Ws.current = s, K = i, fe !== null ? t = 0 : (we = null, Se = 0, t = me);
  }
  if (t !== 0) {
    if (t === 2 && (i = Qo(e), i !== 0 && (r = i, t = wl(e, i))), t === 1) throw n = Si, Fn(e, 0), tn(e, r), Qe(e, ce()), n;
    if (t === 6) tn(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !t0(i) && (t = Ks(e, r), t === 2 && (s = Qo(e), s !== 0 && (r = s, t = wl(e, s))), t === 1)) throw n = Si, Fn(e, 0), tn(e, r), Qe(e, ce()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          Cn(e, ze, Dt);
          break;
        case 3:
          if (tn(e, r), (r & 130023424) === r && (t = wu + 500 - ce(), 10 < t)) {
            if (Fs(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              Be(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = el(Cn.bind(null, e, ze, Dt), t);
            break;
          }
          Cn(e, ze, Dt);
          break;
        case 4:
          if (tn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - wt(r);
            s = 1 << a, a = t[a], a > i && (i = a), r &= ~s;
          }
          if (r = i, r = ce() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * e0(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = el(Cn.bind(null, e, ze, Dt), r);
            break;
          }
          Cn(e, ze, Dt);
          break;
        case 5:
          Cn(e, ze, Dt);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return Qe(e, ce()), e.callbackNode === n ? kh.bind(null, e) : null;
}
function wl(e, t) {
  var n = si;
  return e.current.memoizedState.isDehydrated && (Fn(e, t).flags |= 256), e = Ks(e, t), e !== 2 && (t = ze, ze = n, t !== null && xl(t)), e;
}
function xl(e) {
  ze === null ? ze = e : ze.push.apply(ze, e);
}
function t0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], s = i.getSnapshot;
        i = i.value;
        try {
          if (!kt(s(), i)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function tn(e, t) {
  for (t &= ~Eu, t &= ~ma, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - wt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Dd(e) {
  if (K & 6) throw Error(I(327));
  vr();
  var t = Fs(e, 0);
  if (!(t & 1)) return Qe(e, ce()), null;
  var n = Ks(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Qo(e);
    r !== 0 && (t = r, n = wl(e, r));
  }
  if (n === 1) throw n = Si, Fn(e, 0), tn(e, t), Qe(e, ce()), n;
  if (n === 6) throw Error(I(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Cn(e, ze, Dt), Qe(e, ce()), null;
}
function xu(e, t) {
  var n = K;
  K |= 1;
  try {
    return e(t);
  } finally {
    K = n, K === 0 && (Cr = ce() + 500, da && wn());
  }
}
function Bn(e) {
  rn !== null && rn.tag === 0 && !(K & 6) && vr();
  var t = K;
  K |= 1;
  var n = ot.transition, r = q;
  try {
    if (ot.transition = null, q = 1, e) return e();
  } finally {
    q = r, ot.transition = n, K = t, !(K & 6) && wn();
  }
}
function ku() {
  Ye = or.current, ne(or);
}
function Fn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Rg(n)), fe !== null) for (n = fe.return; n !== null; ) {
    var r = n;
    switch (nu(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ms();
        break;
      case 3:
        xr(), ne(He), ne(Pe), du();
        break;
      case 5:
        cu(r);
        break;
      case 4:
        xr();
        break;
      case 13:
        ne(se);
        break;
      case 19:
        ne(se);
        break;
      case 10:
        au(r.type._context);
        break;
      case 22:
      case 23:
        ku();
    }
    n = n.return;
  }
  if (we = e, fe = e = fn(e.current, null), Se = Ye = t, me = 0, Si = null, Eu = ma = Ln = 0, ze = si = null, Tn !== null) {
    for (t = 0; t < Tn.length; t++) if (n = Tn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, s = n.pending;
      if (s !== null) {
        var a = s.next;
        s.next = i, r.next = a;
      }
      n.pending = r;
    }
    Tn = null;
  }
  return e;
}
function Ch(e, t) {
  do {
    var n = fe;
    try {
      if (su(), ys.current = Hs, Us) {
        for (var r = ae.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        Us = !1;
      }
      if (bn = 0, ye = he = ae = null, ri = !1, ki = 0, yu.current = null, n === null || n.return === null) {
        me = 1, Si = t, fe = null;
        break;
      }
      e: {
        var s = e, a = n.return, o = n, l = t;
        if (t = Se, o.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = o, p = c.tag;
          if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var g = xd(a);
          if (g !== null) {
            g.flags &= -257, kd(g, a, o, s, t), g.mode & 1 && wd(s, u, t), t = g, l = u;
            var w = t.updateQueue;
            if (w === null) {
              var E = /* @__PURE__ */ new Set();
              E.add(l), t.updateQueue = E;
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              wd(s, u, t), Cu();
              break e;
            }
            l = Error(I(426));
          }
        } else if (re && o.mode & 1) {
          var _ = xd(a);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), kd(_, a, o, s, t), ru(kr(l, o));
            break e;
          }
        }
        s = l = kr(l, o), me !== 4 && (me = 2), si === null ? si = [s] : si.push(s), s = a;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var v = ah(s, l, t);
              hd(s, v);
              break e;
            case 1:
              o = l;
              var m = s.type, y = s.stateNode;
              if (!(s.flags & 128) && (typeof m.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (cn === null || !cn.has(y)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var x = oh(s, o, t);
                hd(s, x);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Ah(n);
    } catch (S) {
      t = S, fe === n && n !== null && (fe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function _h() {
  var e = Ws.current;
  return Ws.current = Hs, e === null ? Hs : e;
}
function Cu() {
  (me === 0 || me === 3 || me === 2) && (me = 4), we === null || !(Ln & 268435455) && !(ma & 268435455) || tn(we, Se);
}
function Ks(e, t) {
  var n = K;
  K |= 2;
  var r = _h();
  (we !== e || Se !== t) && (Dt = null, Fn(e, t));
  do
    try {
      n0();
      break;
    } catch (i) {
      Ch(e, i);
    }
  while (!0);
  if (su(), K = n, Ws.current = r, fe !== null) throw Error(I(261));
  return we = null, Se = 0, me;
}
function n0() {
  for (; fe !== null; ) Sh(fe);
}
function r0() {
  for (; fe !== null && !Nv(); ) Sh(fe);
}
function Sh(e) {
  var t = Nh(e.alternate, e, Ye);
  e.memoizedProps = e.pendingProps, t === null ? Ah(e) : fe = t, yu.current = null;
}
function Ah(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = qg(n, t), n !== null) {
        n.flags &= 32767, fe = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        me = 6, fe = null;
        return;
      }
    } else if (n = Yg(n, t, Ye), n !== null) {
      fe = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      fe = t;
      return;
    }
    fe = t = e;
  } while (t !== null);
  me === 0 && (me = 5);
}
function Cn(e, t, n) {
  var r = q, i = ot.transition;
  try {
    ot.transition = null, q = 1, i0(e, t, n, r);
  } finally {
    ot.transition = i, q = r;
  }
  return null;
}
function i0(e, t, n, r) {
  do
    vr();
  while (rn !== null);
  if (K & 6) throw Error(I(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(I(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (Bv(e, s), e === we && (fe = we = null, Se = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || as || (as = !0, Ih(Is, function() {
    return vr(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = ot.transition, ot.transition = null;
    var a = q;
    q = 1;
    var o = K;
    K |= 4, yu.current = null, Zg(e, n), wh(n, e), _g(Zo), Rs = !!Xo, Zo = Xo = null, e.current = n, Jg(n), Iv(), K = o, q = a, ot.transition = s;
  } else e.current = n;
  if (as && (as = !1, rn = e, Gs = i), s = e.pendingLanes, s === 0 && (cn = null), Pv(n.stateNode), Qe(e, ce()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Qs) throw Qs = !1, e = yl, yl = null, e;
  return Gs & 1 && e.tag !== 0 && vr(), s = e.pendingLanes, s & 1 ? e === El ? ai++ : (ai = 0, El = e) : ai = 0, wn(), null;
}
function vr() {
  if (rn !== null) {
    var e = ap(Gs), t = ot.transition, n = q;
    try {
      if (ot.transition = null, q = 16 > e ? 16 : e, rn === null) var r = !1;
      else {
        if (e = rn, rn = null, Gs = 0, K & 6) throw Error(I(331));
        var i = K;
        for (K |= 4, D = e.current; D !== null; ) {
          var s = D, a = s.child;
          if (D.flags & 16) {
            var o = s.deletions;
            if (o !== null) {
              for (var l = 0; l < o.length; l++) {
                var u = o[l];
                for (D = u; D !== null; ) {
                  var c = D;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ii(8, c, s);
                  }
                  var p = c.child;
                  if (p !== null) p.return = c, D = p;
                  else for (; D !== null; ) {
                    c = D;
                    var f = c.sibling, g = c.return;
                    if (gh(c), c === u) {
                      D = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = g, D = f;
                      break;
                    }
                    D = g;
                  }
                }
              }
              var w = s.alternate;
              if (w !== null) {
                var E = w.child;
                if (E !== null) {
                  w.child = null;
                  do {
                    var _ = E.sibling;
                    E.sibling = null, E = _;
                  } while (E !== null);
                }
              }
              D = s;
            }
          }
          if (s.subtreeFlags & 2064 && a !== null) a.return = s, D = a;
          else e: for (; D !== null; ) {
            if (s = D, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                ii(9, s, s.return);
            }
            var v = s.sibling;
            if (v !== null) {
              v.return = s.return, D = v;
              break e;
            }
            D = s.return;
          }
        }
        var m = e.current;
        for (D = m; D !== null; ) {
          a = D;
          var y = a.child;
          if (a.subtreeFlags & 2064 && y !== null) y.return = a, D = y;
          else e: for (a = m; D !== null; ) {
            if (o = D, o.flags & 2048) try {
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  ha(9, o);
              }
            } catch (S) {
              le(o, o.return, S);
            }
            if (o === a) {
              D = null;
              break e;
            }
            var x = o.sibling;
            if (x !== null) {
              x.return = o.return, D = x;
              break e;
            }
            D = o.return;
          }
        }
        if (K = i, wn(), It && typeof It.onPostCommitFiberRoot == "function") try {
          It.onPostCommitFiberRoot(aa, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      q = n, ot.transition = t;
    }
  }
  return !1;
}
function Md(e, t, n) {
  t = kr(n, t), t = ah(e, t, 1), e = un(e, t, 1), t = Be(), e !== null && (Fi(e, 1, t), Qe(e, t));
}
function le(e, t, n) {
  if (e.tag === 3) Md(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Md(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (cn === null || !cn.has(r))) {
        e = kr(n, e), e = oh(t, e, 1), t = un(t, e, 1), e = Be(), t !== null && (Fi(t, 1, e), Qe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function s0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Be(), e.pingedLanes |= e.suspendedLanes & n, we === e && (Se & n) === n && (me === 4 || me === 3 && (Se & 130023424) === Se && 500 > ce() - wu ? Fn(e, 0) : Eu |= n), Qe(e, t);
}
function Th(e, t) {
  t === 0 && (e.mode & 1 ? (t = qi, qi <<= 1, !(qi & 130023424) && (qi = 4194304)) : t = 1);
  var n = Be();
  e = zt(e, t), e !== null && (Fi(e, t, n), Qe(e, n));
}
function a0(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Th(e, n);
}
function o0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(I(314));
  }
  r !== null && r.delete(t), Th(e, n);
}
var Nh;
Nh = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || He.current) Ue = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ue = !1, Kg(e, t, n);
    Ue = !!(e.flags & 131072);
  }
  else Ue = !1, re && t.flags & 1048576 && Pp(t, Bs, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ws(e, t), e = t.pendingProps;
      var i = yr(t, Pe.current);
      mr(t, n), i = pu(null, t, r, e, i, n);
      var s = hu();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, We(r) ? (s = !0, bs(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, lu(t), i.updater = pa, t.stateNode = i, i._reactInternals = t, ol(t, r, e, n), t = cl(null, t, r, !0, s, n)) : (t.tag = 0, re && s && tu(t), Le(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ws(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = u0(r), e = vt(r, e), i) {
          case 0:
            t = ul(null, t, r, e, n);
            break e;
          case 1:
            t = Sd(null, t, r, e, n);
            break e;
          case 11:
            t = Cd(null, t, r, e, n);
            break e;
          case 14:
            t = _d(null, t, r, vt(r.type, e), n);
            break e;
        }
        throw Error(I(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : vt(r, i), ul(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : vt(r, i), Sd(e, t, r, i, n);
    case 3:
      e: {
        if (dh(t), e === null) throw Error(I(387));
        r = t.pendingProps, s = t.memoizedState, i = s.element, Bp(e, t), $s(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          i = kr(Error(I(423)), t), t = Ad(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = kr(Error(I(424)), t), t = Ad(e, t, r, n, i);
          break e;
        } else for (Xe = ln(t.stateNode.containerInfo.firstChild), Ze = t, re = !0, Et = null, n = bp(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Er(), r === i) {
            t = Ut(e, t, n);
            break e;
          }
          Le(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Vp(t), e === null && il(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, a = i.children, Jo(r, i) ? a = null : s !== null && Jo(r, s) && (t.flags |= 32), ch(e, t), Le(e, t, a, n), t.child;
    case 6:
      return e === null && il(t), null;
    case 13:
      return fh(e, t, n);
    case 4:
      return uu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = wr(t, null, r, n) : Le(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : vt(r, i), Cd(e, t, r, i, n);
    case 7:
      return Le(e, t, t.pendingProps, n), t.child;
    case 8:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, a = i.value, ee(Vs, r._currentValue), r._currentValue = a, s !== null) if (kt(s.value, a)) {
          if (s.children === i.children && !He.current) {
            t = Ut(e, t, n);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var o = s.dependencies;
          if (o !== null) {
            a = s.child;
            for (var l = o.firstContext; l !== null; ) {
              if (l.context === r) {
                if (s.tag === 1) {
                  l = Vt(-1, n & -n), l.tag = 2;
                  var u = s.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), sl(
                  s.return,
                  n,
                  t
                ), o.lanes |= n;
                break;
              }
              l = l.next;
            }
          } else if (s.tag === 10) a = s.type === t.type ? null : s.child;
          else if (s.tag === 18) {
            if (a = s.return, a === null) throw Error(I(341));
            a.lanes |= n, o = a.alternate, o !== null && (o.lanes |= n), sl(a, n, t), a = s.sibling;
          } else a = s.child;
          if (a !== null) a.return = s;
          else for (a = s; a !== null; ) {
            if (a === t) {
              a = null;
              break;
            }
            if (s = a.sibling, s !== null) {
              s.return = a.return, a = s;
              break;
            }
            a = a.return;
          }
          s = a;
        }
        Le(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, mr(t, n), i = lt(i), r = r(i), t.flags |= 1, Le(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = vt(r, t.pendingProps), i = vt(r.type, i), _d(e, t, r, i, n);
    case 15:
      return lh(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : vt(r, i), ws(e, t), t.tag = 1, We(r) ? (e = !0, bs(t)) : e = !1, mr(t, n), sh(t, r, i), ol(t, r, i, n), cl(null, t, r, !0, e, n);
    case 19:
      return ph(e, t, n);
    case 22:
      return uh(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function Ih(e, t) {
  return np(e, t);
}
function l0(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function at(e, t, n, r) {
  return new l0(e, t, n, r);
}
function _u(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function u0(e) {
  if (typeof e == "function") return _u(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ul) return 11;
    if (e === Hl) return 14;
  }
  return 2;
}
function fn(e, t) {
  var n = e.alternate;
  return n === null ? (n = at(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Cs(e, t, n, r, i, s) {
  var a = 2;
  if (r = e, typeof e == "function") _u(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else e: switch (e) {
    case Xn:
      return Rn(n.children, i, s, t);
    case zl:
      a = 8, i |= 8;
      break;
    case Ro:
      return e = at(12, n, t, i | 2), e.elementType = Ro, e.lanes = s, e;
    case Po:
      return e = at(13, n, t, i), e.elementType = Po, e.lanes = s, e;
    case Oo:
      return e = at(19, n, t, i), e.elementType = Oo, e.lanes = s, e;
    case Vf:
      return va(n, i, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Lf:
          a = 10;
          break e;
        case Bf:
          a = 9;
          break e;
        case Ul:
          a = 11;
          break e;
        case Hl:
          a = 14;
          break e;
        case Xt:
          a = 16, r = null;
          break e;
      }
      throw Error(I(130, e == null ? e : typeof e, ""));
  }
  return t = at(a, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t;
}
function Rn(e, t, n, r) {
  return e = at(7, e, r, t), e.lanes = n, e;
}
function va(e, t, n, r) {
  return e = at(22, e, r, t), e.elementType = Vf, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Eo(e, t, n) {
  return e = at(6, e, null, t), e.lanes = n, e;
}
function wo(e, t, n) {
  return t = at(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function c0(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ja(0), this.expirationTimes = Ja(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ja(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Su(e, t, n, r, i, s, a, o, l) {
  return e = new c0(e, t, n, o, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = at(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, lu(s), e;
}
function d0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: qn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Fh(e) {
  if (!e) return mn;
  e = e._reactInternals;
  e: {
    if ($n(e) !== e || e.tag !== 1) throw Error(I(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (We(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(I(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (We(n)) return Fp(e, n, t);
  }
  return t;
}
function Rh(e, t, n, r, i, s, a, o, l) {
  return e = Su(n, r, !0, e, i, s, a, o, l), e.context = Fh(null), n = e.current, r = Be(), i = dn(n), s = Vt(r, i), s.callback = t ?? null, un(n, s, i), e.current.lanes = i, Fi(e, i, r), Qe(e, r), e;
}
function ga(e, t, n, r) {
  var i = t.current, s = Be(), a = dn(i);
  return n = Fh(n), t.context === null ? t.context = n : t.pendingContext = n, t = Vt(s, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = un(i, t, a), e !== null && (xt(e, i, a, s), gs(e, i, a)), a;
}
function Ys(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function bd(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Au(e, t) {
  bd(e, t), (e = e.alternate) && bd(e, t);
}
function f0() {
  return null;
}
var Ph = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Tu(e) {
  this._internalRoot = e;
}
ya.prototype.render = Tu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(I(409));
  ga(e, t, null, null);
};
ya.prototype.unmount = Tu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Bn(function() {
      ga(null, e, null, null);
    }), t[$t] = null;
  }
};
function ya(e) {
  this._internalRoot = e;
}
ya.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = up();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < en.length && t !== 0 && t < en[n].priority; n++) ;
    en.splice(n, 0, e), n === 0 && dp(e);
  }
};
function Nu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ea(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ld() {
}
function p0(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var u = Ys(a);
        s.call(u);
      };
    }
    var a = Rh(t, r, e, 0, null, !1, !1, "", Ld);
    return e._reactRootContainer = a, e[$t] = a.current, gi(e.nodeType === 8 ? e.parentNode : e), Bn(), a;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var u = Ys(l);
      o.call(u);
    };
  }
  var l = Su(e, 0, !1, null, null, !1, !1, "", Ld);
  return e._reactRootContainer = l, e[$t] = l.current, gi(e.nodeType === 8 ? e.parentNode : e), Bn(function() {
    ga(t, l, n, r);
  }), l;
}
function wa(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof i == "function") {
      var o = i;
      i = function() {
        var l = Ys(a);
        o.call(l);
      };
    }
    ga(t, a, e, i);
  } else a = p0(n, t, e, i, r);
  return Ys(a);
}
op = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Yr(t.pendingLanes);
        n !== 0 && (Gl(t, n | 1), Qe(t, ce()), !(K & 6) && (Cr = ce() + 500, wn()));
      }
      break;
    case 13:
      Bn(function() {
        var r = zt(e, 1);
        if (r !== null) {
          var i = Be();
          xt(r, e, 1, i);
        }
      }), Au(e, 1);
  }
};
Kl = function(e) {
  if (e.tag === 13) {
    var t = zt(e, 134217728);
    if (t !== null) {
      var n = Be();
      xt(t, e, 134217728, n);
    }
    Au(e, 134217728);
  }
};
lp = function(e) {
  if (e.tag === 13) {
    var t = dn(e), n = zt(e, t);
    if (n !== null) {
      var r = Be();
      xt(n, e, t, r);
    }
    Au(e, t);
  }
};
up = function() {
  return q;
};
cp = function(e, t) {
  var n = q;
  try {
    return q = e, t();
  } finally {
    q = n;
  }
};
Uo = function(e, t, n) {
  switch (t) {
    case "input":
      if (bo(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ca(r);
            if (!i) throw Error(I(90));
            $f(r), bo(r, i);
          }
        }
      }
      break;
    case "textarea":
      Uf(e, n);
      break;
    case "select":
      t = n.value, t != null && dr(e, !!n.multiple, t, !1);
  }
};
qf = xu;
Xf = Bn;
var h0 = { usingClientEntryPoint: !1, Events: [Pi, tr, ca, Kf, Yf, xu] }, Wr = { findFiberByHostInstance: An, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, m0 = { bundleType: Wr.bundleType, version: Wr.version, rendererPackageName: Wr.rendererPackageName, rendererConfig: Wr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Gt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = ep(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Wr.findFiberByHostInstance || f0, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var os = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!os.isDisabled && os.supportsFiber) try {
    aa = os.inject(m0), It = os;
  } catch {
  }
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = h0;
tt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Nu(t)) throw Error(I(200));
  return d0(e, t, null, n);
};
tt.createRoot = function(e, t) {
  if (!Nu(e)) throw Error(I(299));
  var n = !1, r = "", i = Ph;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Su(e, 1, !1, null, null, n, !1, r, i), e[$t] = t.current, gi(e.nodeType === 8 ? e.parentNode : e), new Tu(t);
};
tt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(I(188)) : (e = Object.keys(e).join(","), Error(I(268, e)));
  return e = ep(t), e = e === null ? null : e.stateNode, e;
};
tt.flushSync = function(e) {
  return Bn(e);
};
tt.hydrate = function(e, t, n) {
  if (!Ea(t)) throw Error(I(200));
  return wa(null, e, t, !0, n);
};
tt.hydrateRoot = function(e, t, n) {
  if (!Nu(e)) throw Error(I(405));
  var r = n != null && n.hydratedSources || null, i = !1, s = "", a = Ph;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Rh(t, null, e, 1, n ?? null, i, !1, s, a), e[$t] = t.current, gi(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new ya(t);
};
tt.render = function(e, t, n) {
  if (!Ea(t)) throw Error(I(200));
  return wa(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function(e) {
  if (!Ea(e)) throw Error(I(40));
  return e._reactRootContainer ? (Bn(function() {
    wa(null, null, e, !1, function() {
      e._reactRootContainer = null, e[$t] = null;
    });
  }), !0) : !1;
};
tt.unstable_batchedUpdates = xu;
tt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ea(n)) throw Error(I(200));
  if (e == null || e._reactInternals === void 0) throw Error(I(38));
  return wa(e, t, n, !1, r);
};
tt.version = "18.3.1-next-f1338f8080-20240426";
function Oh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Oh);
    } catch (e) {
      console.error(e);
    }
}
Oh(), Of.exports = tt;
var Dh = Of.exports;
const lr = /* @__PURE__ */ Fr(Dh);
var Mh, Bd = Dh;
Mh = Bd.createRoot, Bd.hydrateRoot;
var bh = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var s = "", a = 0; a < arguments.length; a++) {
        var o = arguments[a];
        o && (s = i(s, r(o)));
      }
      return s;
    }
    function r(s) {
      if (typeof s == "string" || typeof s == "number")
        return s;
      if (typeof s != "object")
        return "";
      if (Array.isArray(s))
        return n.apply(null, s);
      if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
        return s.toString();
      var a = "";
      for (var o in s)
        t.call(s, o) && s[o] && (a = i(a, o));
      return a;
    }
    function i(s, a) {
      return a ? s ? s + " " + a : s + a : s;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(bh);
var v0 = bh.exports;
const M = /* @__PURE__ */ Fr(v0);
function V() {
  return V = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, V.apply(null, arguments);
}
function J(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
var Iu = /* @__PURE__ */ h.createContext({});
Iu.Consumer;
Iu.Provider;
function ve(e, t) {
  var n = C.useContext(Iu);
  return e || n[t] || t;
}
function g0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.filter(function(r) {
    return r != null;
  }).reduce(function(r, i) {
    if (typeof i != "function")
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    return r === null ? i : function() {
      for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
        o[l] = arguments[l];
      r.apply(this, o), i.apply(this, o);
    };
  }, null);
}
var y0 = ["as", "disabled", "onKeyDown"];
function Vd(e) {
  return !e || e.trim() === "#";
}
var Fu = /* @__PURE__ */ h.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, s = e.onKeyDown, a = J(e, y0), o = function(c) {
    var p = a.href, f = a.onClick;
    if ((i || Vd(p)) && c.preventDefault(), i) {
      c.stopPropagation();
      return;
    }
    f && f(c);
  }, l = function(c) {
    c.key === " " && (c.preventDefault(), o(c));
  };
  return Vd(a.href) && (a.role = a.role || "button", a.href = a.href || "#"), i && (a.tabIndex = -1, a["aria-disabled"] = !0), /* @__PURE__ */ h.createElement(r, V({
    ref: t
  }, a, {
    onClick: o,
    onKeyDown: g0(l, s)
  }));
});
Fu.displayName = "SafeAnchor";
var E0 = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"], w0 = {
  variant: "primary",
  active: !1,
  disabled: !1
}, Ru = /* @__PURE__ */ h.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.size, s = e.active, a = e.className, o = e.block, l = e.type, u = e.as, c = J(e, E0), p = ve(n, "btn"), f = M(a, p, s && "active", r && p + "-" + r, o && p + "-block", i && p + "-" + i);
  if (c.href)
    return /* @__PURE__ */ h.createElement(Fu, V({}, c, {
      as: u,
      ref: t,
      className: M(f, c.disabled && "disabled")
    }));
  t && (c.ref = t), l ? c.type = l : u || (c.type = "button");
  var g = u || "button";
  return /* @__PURE__ */ h.createElement(g, V({}, c, {
    className: f
  }));
});
Ru.displayName = "Button";
Ru.defaultProps = w0;
var Lh = { exports: {} }, x0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", k0 = x0, C0 = k0;
function Bh() {
}
function Vh() {
}
Vh.resetWarningCache = Bh;
var _0 = function() {
  function e(r, i, s, a, o, l) {
    if (l !== C0) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw u.name = "Invariant Violation", u;
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Vh,
    resetWarningCache: Bh
  };
  return n.PropTypes = n, n;
};
Lh.exports = _0();
var S0 = Lh.exports;
const d = /* @__PURE__ */ Fr(S0);
let jd = 0;
const Pu = (e = "id") => (jd += 1, `${e}${jd}`);
let ur = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function jh(e, t, n) {
  class r extends h.Component {
    constructor(s) {
      super(s), this.transformProps = this.transformProps.bind(this);
    }
    warn(s) {
    }
    transformProps(s, a) {
      if (n[a] === void 0)
        return s[a] = this.props[a], s;
      const {
        deprType: o,
        newName: l,
        expect: u,
        transform: c,
        message: p
      } = n[a];
      switch (o) {
        case ur.MOVED:
          this.warn(`${t}: The prop '${a}' has been moved to '${l}'.`), s[l] = this.props[a];
          break;
        case ur.REMOVED:
          this.warn(`${t}: The prop '${a}' has been removed. '${p}'`);
          break;
        case ur.FORMAT:
          u(this.props[a]) ? s[a] = this.props[a] : (this.warn(`${t}: The prop '${a}' expects a new format. ${p}`), s[a] = c(this.props[a], this.props));
          break;
        case ur.MOVED_AND_FORMAT: {
          const f = this.props[a];
          let g = `${t}: The prop '${a}' has been moved to '${l}'`;
          u && !u(f) && (g += " and expects a new format"), g += p ? `. ${p}` : "", this.warn(g), s[l] = c ? c(f, this.props) : f;
          break;
        }
        default:
          s[a] = this.props[a];
          break;
      }
      return s;
    }
    render() {
      const {
        children: s,
        ...a
      } = Object.keys(this.props).reduce(this.transformProps, {});
      return /* @__PURE__ */ h.createElement(e, {
        ...a
      }, this.props.children || s);
    }
  }
  return (
    // eslint-disable-next-line react/static-property-placement
    Ic(r, "displayName", `withDeprecatedProps(${t})`), r
  );
}
function Ou({
  src: e,
  id: t,
  className: n,
  hidden: r,
  screenReaderText: i,
  svgAttrs: s,
  size: a,
  ...o
}) {
  if (e) {
    const l = s["aria-label"] || s["aria-labelledby"], u = {
      ...s
    };
    return l || (u["aria-label"] = void 0, u["aria-hidden"] = !0), /* @__PURE__ */ h.createElement("span", {
      className: M("pgn__icon", {
        [`pgn__icon__${a}`]: !!a
      }, n),
      id: t,
      ...o
    }, /* @__PURE__ */ h.createElement(e, {
      role: "img",
      focusable: !1,
      ...u
    }), i && /* @__PURE__ */ h.createElement("span", {
      className: "sr-only"
    }, i));
  }
  return /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement("span", {
    id: t || Pu("Icon"),
    className: n,
    "aria-hidden": r
  }), i && /* @__PURE__ */ h.createElement("span", {
    className: "sr-only"
  }, i));
}
Ou.propTypes = {
  /**
   * An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';`
   */
  src: d.elementType,
  /** HTML element attributes to pass through to the underlying svg element */
  svgAttrs: d.shape({
    "aria-label": d.string,
    "aria-labelledby": d.string
  }),
  /**
   * the `id` property of the Icon element, by default this value is generated
   * with the `newId` function with the `prefix` of `Icon`.
   */
  id: d.string,
  /** The size of the icon. */
  size: d.oneOf(["xs", "sm", "md", "lg"]),
  /** A class name that will define what the Icon looks like. */
  className: d.string,
  /**
   * a boolean that determines the value of `aria-hidden` attribute on the Icon span,
   * this value is `true` by default.
   */
  hidden: d.bool,
  /**
   * a string or an element that will be used on a secondary span leveraging the `sr-only` style
   * for screenreader only text, this value is `undefined` by default. This value is recommended for use unless
   * the Icon is being used in a way that is purely decorative or provides no additional context for screen
   * reader users. This field should be thought of the same way an `alt` attribute would be used for `image` tags.
   */
  screenReaderText: d.oneOfType([d.string, d.element])
};
Ou.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const Ht = jh(Ou, "Icon", {
  className: {
    deprType: ur.FORMAT,
    expect: (e) => typeof e == "string",
    transform: (e) => Array.isArray(e) ? e.join(" ") : e,
    message: "It should be a string."
  }
}), Ee = /* @__PURE__ */ h.forwardRef(({
  children: e,
  iconAfter: t,
  iconBefore: n,
  size: r,
  ...i
}, s) => /* @__PURE__ */ h.createElement(Ru, {
  size: r,
  ...i,
  className: M(i.className),
  ref: s
}, n && /* @__PURE__ */ h.createElement(Ht, {
  className: "btn-icon-before",
  size: r,
  src: n
}), e, t && /* @__PURE__ */ h.createElement(Ht, {
  className: "btn-icon-after",
  size: r,
  src: t
})));
function $d(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function A0(e) {
  var t = T0(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function T0(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function $h(e, t, n) {
  var r = C.useRef(e !== void 0), i = C.useState(t), s = i[0], a = i[1], o = e !== void 0, l = r.current;
  return r.current = o, !o && l && s !== t && a(t), [o ? e : s, C.useCallback(function(u) {
    for (var c = arguments.length, p = new Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++)
      p[f - 1] = arguments[f];
    n && n.apply(void 0, [u].concat(p)), a(u);
  }, [n])];
}
function N0(e, t) {
  return Object.keys(t).reduce(function(n, r) {
    var i, s = n, a = s[$d(r)], o = s[r], l = J(s, [$d(r), r].map(A0)), u = t[r], c = $h(o, a, e[u]), p = c[0], f = c[1];
    return V({}, l, (i = {}, i[r] = p, i[u] = f, i));
  }, e);
}
function kl(e, t) {
  return kl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, kl(e, t);
}
function zh(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, kl(e, t);
}
function Du(e) {
  return e && e.ownerDocument || document;
}
function I0(e) {
  var t = Du(e);
  return t && t.defaultView || window;
}
function F0(e, t) {
  return I0(e).getComputedStyle(e, t);
}
var R0 = /([A-Z])/g;
function P0(e) {
  return e.replace(R0, "-$1").toLowerCase();
}
var O0 = /^ms-/;
function ls(e) {
  return P0(e).replace(O0, "-ms-");
}
var D0 = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function M0(e) {
  return !!(e && D0.test(e));
}
function Uh(e, t) {
  var n = "", r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(ls(t)) || F0(e).getPropertyValue(ls(t));
  Object.keys(t).forEach(function(i) {
    var s = t[i];
    !s && s !== 0 ? e.style.removeProperty(ls(i)) : M0(i) ? r += i + "(" + s + ") " : n += ls(i) + ": " + s + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
const zd = {
  disabled: !1
}, Hh = h.createContext(null);
var b0 = function(t) {
  return t.scrollTop;
}, Xr = "unmounted", _n = "exited", Jt = "entering", Sn = "entered", Cl = "exiting", Kt = /* @__PURE__ */ function(e) {
  zh(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = i, o = a && !a.isMounting ? r.enter : r.appear, l;
    return s.appearStatus = null, r.in ? o ? (l = _n, s.appearStatus = Jt) : l = Sn : r.unmountOnExit || r.mountOnEnter ? l = Xr : l = _n, s.state = {
      status: l
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === Xr ? {
      status: _n
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var s = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Jt && a !== Sn && (s = Jt) : (a === Jt || a === Sn) && (s = Cl);
    }
    this.updateStatus(!1, s);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, s, a, o;
    return s = a = o = i, i != null && typeof i != "number" && (s = i.exit, a = i.enter, o = i.appear !== void 0 ? i.appear : a), {
      exit: s,
      enter: a,
      appear: o
    };
  }, n.updateStatus = function(i, s) {
    if (i === void 0 && (i = !1), s !== null)
      if (this.cancelNextCallback(), s === Jt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : lr.findDOMNode(this);
          a && b0(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === _n && this.setState({
      status: Xr
    });
  }, n.performEnter = function(i) {
    var s = this, a = this.props.enter, o = this.context ? this.context.isMounting : i, l = this.props.nodeRef ? [o] : [lr.findDOMNode(this), o], u = l[0], c = l[1], p = this.getTimeouts(), f = o ? p.appear : p.enter;
    if (!i && !a || zd.disabled) {
      this.safeSetState({
        status: Sn
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, c), this.safeSetState({
      status: Jt
    }, function() {
      s.props.onEntering(u, c), s.onTransitionEnd(f, function() {
        s.safeSetState({
          status: Sn
        }, function() {
          s.props.onEntered(u, c);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), o = this.props.nodeRef ? void 0 : lr.findDOMNode(this);
    if (!s || zd.disabled) {
      this.safeSetState({
        status: _n
      }, function() {
        i.props.onExited(o);
      });
      return;
    }
    this.props.onExit(o), this.safeSetState({
      status: Cl
    }, function() {
      i.props.onExiting(o), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: _n
        }, function() {
          i.props.onExited(o);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, s) {
    s = this.setNextCallback(s), this.setState(i, s);
  }, n.setNextCallback = function(i) {
    var s = this, a = !0;
    return this.nextCallback = function(o) {
      a && (a = !1, s.nextCallback = null, i(o));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, s) {
    this.setNextCallback(s);
    var a = this.props.nodeRef ? this.props.nodeRef.current : lr.findDOMNode(this), o = i == null && !this.props.addEndListener;
    if (!a || o) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = l[0], c = l[1];
      this.props.addEndListener(u, c);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === Xr)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var o = J(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ h.createElement(Hh.Provider, {
        value: null
      }, typeof a == "function" ? a(i, o) : h.cloneElement(h.Children.only(a), o))
    );
  }, t;
}(h.Component);
Kt.contextType = Hh;
Kt.propTypes = {};
function Yn() {
}
Kt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Yn,
  onEntering: Yn,
  onEntered: Yn,
  onExit: Yn,
  onExiting: Yn,
  onExited: Yn
};
Kt.UNMOUNTED = Xr;
Kt.EXITED = _n;
Kt.ENTERING = Jt;
Kt.ENTERED = Sn;
Kt.EXITING = Cl;
const L0 = !!(typeof window < "u" && window.document && window.document.createElement);
var _l = !1, Sl = !1;
try {
  var xo = {
    get passive() {
      return _l = !0;
    },
    get once() {
      return Sl = _l = !0;
    }
  };
  L0 && (window.addEventListener("test", xo, xo), window.removeEventListener("test", xo, !0));
} catch {
}
function B0(e, t, n, r) {
  if (r && typeof r != "boolean" && !Sl) {
    var i = r.once, s = r.capture, a = n;
    !Sl && i && (a = n.__once || function o(l) {
      this.removeEventListener(t, o, s), n.call(this, l);
    }, n.__once = a), e.addEventListener(t, a, _l ? r : s);
  }
  e.addEventListener(t, n, r);
}
function V0(e, t, n, r) {
  var i = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
function cr(e, t, n, r) {
  return B0(e, t, n, r), function() {
    V0(e, t, n, r);
  };
}
function j0(e, t, n, r) {
  if (r === void 0 && (r = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, n, r), e.dispatchEvent(i);
  }
}
function $0(e) {
  var t = Uh(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function z0(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1, i = setTimeout(function() {
    r || j0(e, "transitionend", !0);
  }, t + n), s = cr(e, "transitionend", function() {
    r = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), s();
  };
}
function U0(e, t, n, r) {
  n == null && (n = $0(e) || 0);
  var i = z0(e, n, r), s = cr(e, "transitionend", t);
  return function() {
    i(), s();
  };
}
function Ud(e, t) {
  var n = Uh(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function H0(e, t) {
  var n = Ud(e, "transitionDuration"), r = Ud(e, "transitionDelay"), i = U0(e, function(s) {
    s.target === e && (i(), t(s));
  }, n + r);
}
function W0(e) {
  e.offsetHeight;
}
function Q0(e) {
  const t = C.useRef(e);
  return C.useEffect(() => {
    t.current = e;
  }, [e]), t;
}
function Al(e) {
  const t = Q0(e);
  return C.useCallback(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
var G0 = ["className", "children"], us, K0 = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1
}, Y0 = (us = {}, us[Jt] = "show", us[Sn] = "show", us), Dr = /* @__PURE__ */ h.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = J(e, G0), s = C.useCallback(function(a) {
    W0(a), i.onEnter && i.onEnter(a);
  }, [i]);
  return /* @__PURE__ */ h.createElement(Kt, V({
    ref: t,
    addEndListener: H0
  }, i, {
    onEnter: s
  }), function(a, o) {
    return /* @__PURE__ */ h.cloneElement(r, V({}, o, {
      className: M("fade", n, r.props.className, Y0[a])
    }));
  });
});
Dr.defaultProps = K0;
Dr.displayName = "Fade";
var q0 = ["label", "onClick", "className"], X0 = {
  label: d.string.isRequired,
  onClick: d.func
}, Z0 = {
  label: "Close"
}, xa = /* @__PURE__ */ h.forwardRef(function(e, t) {
  var n = e.label, r = e.onClick, i = e.className, s = J(e, q0);
  return /* @__PURE__ */ h.createElement("button", V({
    ref: t,
    type: "button",
    className: M("close", i),
    onClick: r
  }, s), /* @__PURE__ */ h.createElement("span", {
    "aria-hidden": "true"
  }, "×"), /* @__PURE__ */ h.createElement("span", {
    className: "sr-only"
  }, n));
});
xa.displayName = "CloseButton";
xa.propTypes = X0;
xa.defaultProps = Z0;
const Wh = function(e) {
  return /* @__PURE__ */ h.forwardRef(function(t, n) {
    return /* @__PURE__ */ h.createElement("div", V({}, t, {
      ref: n,
      className: M(t.className, e)
    }));
  });
};
var J0 = /-(.)/g;
function ey(e) {
  return e.replace(J0, function(t, n) {
    return n.toUpperCase();
  });
}
var ty = ["className", "bsPrefix", "as"], ny = function(t) {
  return t[0].toUpperCase() + ey(t).slice(1);
};
function Mu(e, t) {
  var n = t === void 0 ? {} : t, r = n.displayName, i = r === void 0 ? ny(e) : r, s = n.Component, a = n.defaultProps, o = /* @__PURE__ */ h.forwardRef(function(l, u) {
    var c = l.className, p = l.bsPrefix, f = l.as, g = f === void 0 ? s || "div" : f, w = J(l, ty), E = ve(p, e);
    return /* @__PURE__ */ h.createElement(g, V({
      ref: u,
      className: M(c, E)
    }, w));
  });
  return o.defaultProps = a, o.displayName = i, o;
}
var ry = ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"], Qh = Wh("h4");
Qh.displayName = "DivStyledAsH4";
var iy = Mu("alert-heading", {
  Component: Qh
}), sy = Mu("alert-link", {
  Component: Fu
}), ay = {
  show: !0,
  transition: Dr,
  closeLabel: "Close alert"
}, zn = /* @__PURE__ */ h.forwardRef(function(e, t) {
  var n = N0(e, {
    show: "onClose"
  }), r = n.bsPrefix, i = n.show, s = n.closeLabel, a = n.className, o = n.children, l = n.variant, u = n.onClose, c = n.dismissible, p = n.transition, f = J(n, ry), g = ve(r, "alert"), w = Al(function(v) {
    u && u(!1, v);
  }), E = p === !0 ? Dr : p, _ = /* @__PURE__ */ h.createElement("div", V({
    role: "alert"
  }, E ? void 0 : f, {
    ref: t,
    className: M(a, g, l && g + "-" + l, c && g + "-dismissible")
  }), c && /* @__PURE__ */ h.createElement(xa, {
    onClick: w,
    label: s
  }), o);
  return E ? /* @__PURE__ */ h.createElement(E, V({
    unmountOnExit: !0
  }, f, {
    ref: void 0,
    in: i
  }), _) : i ? _ : null;
});
zn.displayName = "Alert";
zn.defaultProps = ay;
zn.Link = sy;
zn.Heading = iy;
function Gh() {
  const e = C.useRef(!0), t = C.useRef(() => e.current);
  return C.useEffect(() => (e.current = !0, () => {
    e.current = !1;
  }), []), t.current;
}
function oy(e) {
  const t = C.useRef(e);
  return t.current = e, t;
}
function ly(e) {
  const t = oy(e);
  C.useEffect(() => () => t.current(), []);
}
const Tl = 2 ** 31 - 1;
function Kh(e, t, n) {
  const r = n - Date.now();
  e.current = r <= Tl ? setTimeout(t, r) : setTimeout(() => Kh(e, t, n), Tl);
}
function uy() {
  const e = Gh(), t = C.useRef();
  return ly(() => clearTimeout(t.current)), C.useMemo(() => {
    const n = () => clearTimeout(t.current);
    function r(i, s = 0) {
      e() && (n(), s <= Tl ? t.current = setTimeout(i, s) : Kh(t, i, Date.now() + s));
    }
    return {
      set: r,
      clear: n,
      handleRef: t
    };
  }, []);
}
var cy = ["bsPrefix", "className", "as"], dy = ["xl", "lg", "md", "sm", "xs"], Yh = /* @__PURE__ */ h.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.as, s = i === void 0 ? "div" : i, a = J(e, cy), o = ve(n, "col"), l = [], u = [];
    return dy.forEach(function(c) {
      var p = a[c];
      delete a[c];
      var f, g, w;
      if (typeof p == "object" && p != null) {
        var E = p.span;
        f = E === void 0 ? !0 : E, g = p.offset, w = p.order;
      } else
        f = p;
      var _ = c !== "xs" ? "-" + c : "";
      f && l.push(f === !0 ? "" + o + _ : "" + o + _ + "-" + f), w != null && u.push("order" + _ + "-" + w), g != null && u.push("offset" + _ + "-" + g);
    }), l.length || l.push(o), /* @__PURE__ */ h.createElement(s, V({}, a, {
      ref: t,
      className: M.apply(void 0, [r].concat(l, u))
    }));
  }
);
Yh.displayName = "Col";
function Hd() {
  return C.useState(null);
}
function fy(e) {
  const t = Gh();
  return [e[0], C.useCallback((n) => {
    if (t())
      return e[1](n);
  }, [t, e[1]])];
}
var Ge = "top", ct = "bottom", dt = "right", Ke = "left", bu = "auto", Di = [Ge, ct, dt, Ke], _r = "start", Ai = "end", py = "clippingParents", qh = "viewport", Qr = "popper", hy = "reference", Wd = /* @__PURE__ */ Di.reduce(function(e, t) {
  return e.concat([t + "-" + _r, t + "-" + Ai]);
}, []), Lu = /* @__PURE__ */ [].concat(Di, [bu]).reduce(function(e, t) {
  return e.concat([t, t + "-" + _r, t + "-" + Ai]);
}, []), my = "beforeRead", vy = "read", gy = "afterRead", yy = "beforeMain", Ey = "main", wy = "afterMain", xy = "beforeWrite", ky = "write", Cy = "afterWrite", _y = [my, vy, gy, yy, Ey, wy, xy, ky, Cy];
function Rt(e) {
  return e.split("-")[0];
}
function et(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Vn(e) {
  var t = et(e).Element;
  return e instanceof t || e instanceof Element;
}
function Pt(e) {
  var t = et(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Bu(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = et(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Pn = Math.max, qs = Math.min, Sr = Math.round;
function Nl() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Xh() {
  return !/^((?!chrome|android).)*safari/i.test(Nl());
}
function Ar(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, s = 1;
  t && Pt(e) && (i = e.offsetWidth > 0 && Sr(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Sr(r.height) / e.offsetHeight || 1);
  var a = Vn(e) ? et(e) : window, o = a.visualViewport, l = !Xh() && n, u = (r.left + (l && o ? o.offsetLeft : 0)) / i, c = (r.top + (l && o ? o.offsetTop : 0)) / s, p = r.width / i, f = r.height / s;
  return {
    width: p,
    height: f,
    top: c,
    right: u + p,
    bottom: c + f,
    left: u,
    x: u,
    y: c
  };
}
function Vu(e) {
  var t = Ar(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Zh(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Bu(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function vn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Wt(e) {
  return et(e).getComputedStyle(e);
}
function Sy(e) {
  return ["table", "td", "th"].indexOf(vn(e)) >= 0;
}
function xn(e) {
  return ((Vn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function ka(e) {
  return vn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Bu(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    xn(e)
  );
}
function Qd(e) {
  return !Pt(e) || // https://github.com/popperjs/popper-core/issues/837
  Wt(e).position === "fixed" ? null : e.offsetParent;
}
function Ay(e) {
  var t = /firefox/i.test(Nl()), n = /Trident/i.test(Nl());
  if (n && Pt(e)) {
    var r = Wt(e);
    if (r.position === "fixed")
      return null;
  }
  var i = ka(e);
  for (Bu(i) && (i = i.host); Pt(i) && ["html", "body"].indexOf(vn(i)) < 0; ) {
    var s = Wt(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Mi(e) {
  for (var t = et(e), n = Qd(e); n && Sy(n) && Wt(n).position === "static"; )
    n = Qd(n);
  return n && (vn(n) === "html" || vn(n) === "body" && Wt(n).position === "static") ? t : n || Ay(e) || t;
}
function ju(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function oi(e, t, n) {
  return Pn(e, qs(t, n));
}
function Ty(e, t, n) {
  var r = oi(e, t, n);
  return r > n ? n : r;
}
function Jh() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function em(e) {
  return Object.assign({}, Jh(), e);
}
function tm(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Ny = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, em(typeof t != "number" ? t : tm(t, Di));
};
function Iy(e) {
  var t, n = e.state, r = e.name, i = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, o = Rt(n.placement), l = ju(o), u = [Ke, dt].indexOf(o) >= 0, c = u ? "height" : "width";
  if (!(!s || !a)) {
    var p = Ny(i.padding, n), f = Vu(s), g = l === "y" ? Ge : Ke, w = l === "y" ? ct : dt, E = n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c], _ = a[l] - n.rects.reference[l], v = Mi(s), m = v ? l === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, y = E / 2 - _ / 2, x = p[g], S = m - f[c] - p[w], A = m / 2 - f[c] / 2 + y, T = oi(x, A, S), N = l;
    n.modifiersData[r] = (t = {}, t[N] = T, t.centerOffset = T - A, t);
  }
}
function Fy(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Zh(t.elements.popper, i) && (t.elements.arrow = i));
}
const Ry = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Iy,
  effect: Fy,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Tr(e) {
  return e.split("-")[1];
}
var Py = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Oy(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: Sr(n * i) / i || 0,
    y: Sr(r * i) / i || 0
  };
}
function Gd(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, s = e.variation, a = e.offsets, o = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, p = e.isFixed, f = a.x, g = f === void 0 ? 0 : f, w = a.y, E = w === void 0 ? 0 : w, _ = typeof c == "function" ? c({
    x: g,
    y: E
  }) : {
    x: g,
    y: E
  };
  g = _.x, E = _.y;
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), y = Ke, x = Ge, S = window;
  if (u) {
    var A = Mi(n), T = "clientHeight", N = "clientWidth";
    if (A === et(n) && (A = xn(n), Wt(A).position !== "static" && o === "absolute" && (T = "scrollHeight", N = "scrollWidth")), A = A, i === Ge || (i === Ke || i === dt) && s === Ai) {
      x = ct;
      var O = p && A === S && S.visualViewport ? S.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        A[T]
      );
      E -= O - r.height, E *= l ? 1 : -1;
    }
    if (i === Ke || (i === Ge || i === ct) && s === Ai) {
      y = dt;
      var P = p && A === S && S.visualViewport ? S.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        A[N]
      );
      g -= P - r.width, g *= l ? 1 : -1;
    }
  }
  var z = Object.assign({
    position: o
  }, u && Py), j = c === !0 ? Oy({
    x: g,
    y: E
  }, et(n)) : {
    x: g,
    y: E
  };
  if (g = j.x, E = j.y, l) {
    var H;
    return Object.assign({}, z, (H = {}, H[x] = m ? "0" : "", H[y] = v ? "0" : "", H.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + E + "px)" : "translate3d(" + g + "px, " + E + "px, 0)", H));
  }
  return Object.assign({}, z, (t = {}, t[x] = m ? E + "px" : "", t[y] = v ? g + "px" : "", t.transform = "", t));
}
function Dy(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, s = n.adaptive, a = s === void 0 ? !0 : s, o = n.roundOffsets, l = o === void 0 ? !0 : o, u = {
    placement: Rt(t.placement),
    variation: Tr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Gd(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Gd(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const My = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Dy,
  data: {}
};
var cs = {
  passive: !0
};
function by(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, s = i === void 0 ? !0 : i, a = r.resize, o = a === void 0 ? !0 : a, l = et(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, cs);
  }), o && l.addEventListener("resize", n.update, cs), function() {
    s && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, cs);
    }), o && l.removeEventListener("resize", n.update, cs);
  };
}
const Ly = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: by,
  data: {}
};
var By = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function _s(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return By[t];
  });
}
var Vy = {
  start: "end",
  end: "start"
};
function Kd(e) {
  return e.replace(/start|end/g, function(t) {
    return Vy[t];
  });
}
function $u(e) {
  var t = et(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function zu(e) {
  return Ar(xn(e)).left + $u(e).scrollLeft;
}
function jy(e, t) {
  var n = et(e), r = xn(e), i = n.visualViewport, s = r.clientWidth, a = r.clientHeight, o = 0, l = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = Xh();
    (u || !u && t === "fixed") && (o = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: o + zu(e),
    y: l
  };
}
function $y(e) {
  var t, n = xn(e), r = $u(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = Pn(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Pn(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), o = -r.scrollLeft + zu(e), l = -r.scrollTop;
  return Wt(i || n).direction === "rtl" && (o += Pn(n.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: o,
    y: l
  };
}
function Uu(e) {
  var t = Wt(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function nm(e) {
  return ["html", "body", "#document"].indexOf(vn(e)) >= 0 ? e.ownerDocument.body : Pt(e) && Uu(e) ? e : nm(ka(e));
}
function li(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = nm(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = et(r), a = i ? [s].concat(s.visualViewport || [], Uu(r) ? r : []) : r, o = t.concat(a);
  return i ? o : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    o.concat(li(ka(a)))
  );
}
function Il(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function zy(e, t) {
  var n = Ar(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Yd(e, t, n) {
  return t === qh ? Il(jy(e, n)) : Vn(t) ? zy(t, n) : Il($y(xn(e)));
}
function Uy(e) {
  var t = li(ka(e)), n = ["absolute", "fixed"].indexOf(Wt(e).position) >= 0, r = n && Pt(e) ? Mi(e) : e;
  return Vn(r) ? t.filter(function(i) {
    return Vn(i) && Zh(i, r) && vn(i) !== "body";
  }) : [];
}
function Hy(e, t, n, r) {
  var i = t === "clippingParents" ? Uy(e) : [].concat(t), s = [].concat(i, [n]), a = s[0], o = s.reduce(function(l, u) {
    var c = Yd(e, u, r);
    return l.top = Pn(c.top, l.top), l.right = qs(c.right, l.right), l.bottom = qs(c.bottom, l.bottom), l.left = Pn(c.left, l.left), l;
  }, Yd(e, a, r));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function rm(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? Rt(r) : null, s = r ? Tr(r) : null, a = t.x + t.width / 2 - n.width / 2, o = t.y + t.height / 2 - n.height / 2, l;
  switch (i) {
    case Ge:
      l = {
        x: a,
        y: t.y - n.height
      };
      break;
    case ct:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case dt:
      l = {
        x: t.x + t.width,
        y: o
      };
      break;
    case Ke:
      l = {
        x: t.x - n.width,
        y: o
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = i ? ju(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (s) {
      case _r:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case Ai:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function Ti(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, s = n.strategy, a = s === void 0 ? e.strategy : s, o = n.boundary, l = o === void 0 ? py : o, u = n.rootBoundary, c = u === void 0 ? qh : u, p = n.elementContext, f = p === void 0 ? Qr : p, g = n.altBoundary, w = g === void 0 ? !1 : g, E = n.padding, _ = E === void 0 ? 0 : E, v = em(typeof _ != "number" ? _ : tm(_, Di)), m = f === Qr ? hy : Qr, y = e.rects.popper, x = e.elements[w ? m : f], S = Hy(Vn(x) ? x : x.contextElement || xn(e.elements.popper), l, c, a), A = Ar(e.elements.reference), T = rm({
    reference: A,
    element: y,
    placement: i
  }), N = Il(Object.assign({}, y, T)), O = f === Qr ? N : A, P = {
    top: S.top - O.top + v.top,
    bottom: O.bottom - S.bottom + v.bottom,
    left: S.left - O.left + v.left,
    right: O.right - S.right + v.right
  }, z = e.modifiersData.offset;
  if (f === Qr && z) {
    var j = z[i];
    Object.keys(P).forEach(function(H) {
      var ie = [dt, ct].indexOf(H) >= 0 ? 1 : -1, de = [Ge, ct].indexOf(H) >= 0 ? "y" : "x";
      P[H] += j[de] * ie;
    });
  }
  return P;
}
function Wy(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, s = n.rootBoundary, a = n.padding, o = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Lu : l, c = Tr(r), p = c ? o ? Wd : Wd.filter(function(w) {
    return Tr(w) === c;
  }) : Di, f = p.filter(function(w) {
    return u.indexOf(w) >= 0;
  });
  f.length === 0 && (f = p);
  var g = f.reduce(function(w, E) {
    return w[E] = Ti(e, {
      placement: E,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[Rt(E)], w;
  }, {});
  return Object.keys(g).sort(function(w, E) {
    return g[w] - g[E];
  });
}
function Qy(e) {
  if (Rt(e) === bu)
    return [];
  var t = _s(e);
  return [Kd(e), t, Kd(t)];
}
function Gy(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, s = i === void 0 ? !0 : i, a = n.altAxis, o = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, c = n.boundary, p = n.rootBoundary, f = n.altBoundary, g = n.flipVariations, w = g === void 0 ? !0 : g, E = n.allowedAutoPlacements, _ = t.options.placement, v = Rt(_), m = v === _, y = l || (m || !w ? [_s(_)] : Qy(_)), x = [_].concat(y).reduce(function(ke, Oe) {
      return ke.concat(Rt(Oe) === bu ? Wy(t, {
        placement: Oe,
        boundary: c,
        rootBoundary: p,
        padding: u,
        flipVariations: w,
        allowedAutoPlacements: E
      }) : Oe);
    }, []), S = t.rects.reference, A = t.rects.popper, T = /* @__PURE__ */ new Map(), N = !0, O = x[0], P = 0; P < x.length; P++) {
      var z = x[P], j = Rt(z), H = Tr(z) === _r, ie = [Ge, ct].indexOf(j) >= 0, de = ie ? "width" : "height", Z = Ti(t, {
        placement: z,
        boundary: c,
        rootBoundary: p,
        altBoundary: f,
        padding: u
      }), Y = ie ? H ? dt : Ke : H ? ct : Ge;
      S[de] > A[de] && (Y = _s(Y));
      var R = _s(Y), b = [];
      if (s && b.push(Z[j] <= 0), o && b.push(Z[Y] <= 0, Z[R] <= 0), b.every(function(ke) {
        return ke;
      })) {
        O = z, N = !1;
        break;
      }
      T.set(z, b);
    }
    if (N)
      for (var L = w ? 3 : 1, Q = function(Oe) {
        var De = x.find(function(ht) {
          var Ot = T.get(ht);
          if (Ot)
            return Ot.slice(0, Oe).every(function(Wn) {
              return Wn;
            });
        });
        if (De)
          return O = De, "break";
      }, $ = L; $ > 0; $--) {
        var pt = Q($);
        if (pt === "break") break;
      }
    t.placement !== O && (t.modifiersData[r]._skip = !0, t.placement = O, t.reset = !0);
  }
}
const Ky = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Gy,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function qd(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function Xd(e) {
  return [Ge, dt, ct, Ke].some(function(t) {
    return e[t] >= 0;
  });
}
function Yy(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, s = t.modifiersData.preventOverflow, a = Ti(t, {
    elementContext: "reference"
  }), o = Ti(t, {
    altBoundary: !0
  }), l = qd(a, r), u = qd(o, i, s), c = Xd(l), p = Xd(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: p
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": p
  });
}
const qy = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Yy
};
function Xy(e, t, n) {
  var r = Rt(e), i = [Ke, Ge].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = s[0], o = s[1];
  return a = a || 0, o = (o || 0) * i, [Ke, dt].indexOf(r) >= 0 ? {
    x: o,
    y: a
  } : {
    x: a,
    y: o
  };
}
function Zy(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, s = i === void 0 ? [0, 0] : i, a = Lu.reduce(function(c, p) {
    return c[p] = Xy(p, t.rects, s), c;
  }, {}), o = a[t.placement], l = o.x, u = o.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const Jy = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Zy
};
function e1(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = rm({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const t1 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: e1,
  data: {}
};
function n1(e) {
  return e === "x" ? "y" : "x";
}
function r1(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, s = i === void 0 ? !0 : i, a = n.altAxis, o = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, p = n.padding, f = n.tether, g = f === void 0 ? !0 : f, w = n.tetherOffset, E = w === void 0 ? 0 : w, _ = Ti(t, {
    boundary: l,
    rootBoundary: u,
    padding: p,
    altBoundary: c
  }), v = Rt(t.placement), m = Tr(t.placement), y = !m, x = ju(v), S = n1(x), A = t.modifiersData.popperOffsets, T = t.rects.reference, N = t.rects.popper, O = typeof E == "function" ? E(Object.assign({}, t.rects, {
    placement: t.placement
  })) : E, P = typeof O == "number" ? {
    mainAxis: O,
    altAxis: O
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, O), z = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, j = {
    x: 0,
    y: 0
  };
  if (A) {
    if (s) {
      var H, ie = x === "y" ? Ge : Ke, de = x === "y" ? ct : dt, Z = x === "y" ? "height" : "width", Y = A[x], R = Y + _[ie], b = Y - _[de], L = g ? -N[Z] / 2 : 0, Q = m === _r ? T[Z] : N[Z], $ = m === _r ? -N[Z] : -T[Z], pt = t.elements.arrow, ke = g && pt ? Vu(pt) : {
        width: 0,
        height: 0
      }, Oe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Jh(), De = Oe[ie], ht = Oe[de], Ot = oi(0, T[Z], ke[Z]), Wn = y ? T[Z] / 2 - L - Ot - De - P.mainAxis : Q - Ot - De - P.mainAxis, $i = y ? -T[Z] / 2 + L + Ot + ht + P.mainAxis : $ + Ot + ht + P.mainAxis, Qn = t.elements.arrow && Mi(t.elements.arrow), zi = Qn ? x === "y" ? Qn.clientTop || 0 : Qn.clientLeft || 0 : 0, Ui = (H = z == null ? void 0 : z[x]) != null ? H : 0, Qa = Y + Wn - Ui - zi, Ga = Y + $i - Ui, Gn = oi(g ? qs(R, Qa) : R, Y, g ? Pn(b, Ga) : b);
      A[x] = Gn, j[x] = Gn - Y;
    }
    if (o) {
      var pe, $e = x === "x" ? Ge : Ke, Me = x === "x" ? ct : dt, ge = A[S], Yt = S === "y" ? "height" : "width", Hi = ge + _[$e], br = ge - _[Me], Lr = [Ge, Ke].indexOf(v) !== -1, Sc = (pe = z == null ? void 0 : z[S]) != null ? pe : 0, Ac = Lr ? Hi : ge - T[Yt] - N[Yt] - Sc + P.altAxis, Tc = Lr ? ge + T[Yt] + N[Yt] - Sc - P.altAxis : br, Nc = g && Lr ? Ty(Ac, ge, Tc) : oi(g ? Ac : Hi, ge, g ? Tc : br);
      A[S] = Nc, j[S] = Nc - ge;
    }
    t.modifiersData[r] = j;
  }
}
const i1 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: r1,
  requiresIfExists: ["offset"]
};
function s1(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function a1(e) {
  return e === et(e) || !Pt(e) ? $u(e) : s1(e);
}
function o1(e) {
  var t = e.getBoundingClientRect(), n = Sr(t.width) / e.offsetWidth || 1, r = Sr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function l1(e, t, n) {
  n === void 0 && (n = !1);
  var r = Pt(t), i = Pt(t) && o1(t), s = xn(t), a = Ar(e, i, n), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((vn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Uu(s)) && (o = a1(t)), Pt(t) ? (l = Ar(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = zu(s))), {
    x: a.left + o.scrollLeft - l.x,
    y: a.top + o.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function u1(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function i(s) {
    n.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(o) {
      if (!n.has(o)) {
        var l = t.get(o);
        l && i(l);
      }
    }), r.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || i(s);
  }), r;
}
function c1(e) {
  var t = u1(e);
  return _y.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function d1(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function f1(e) {
  var t = e.reduce(function(n, r) {
    var i = n[r.name];
    return n[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Zd = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Jd() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function p1(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, s = i === void 0 ? Zd : i;
  return function(o, l, u) {
    u === void 0 && (u = s);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Zd, s),
      modifiersData: {},
      elements: {
        reference: o,
        popper: l
      },
      attributes: {},
      styles: {}
    }, p = [], f = !1, g = {
      state: c,
      setOptions: function(v) {
        var m = typeof v == "function" ? v(c.options) : v;
        E(), c.options = Object.assign({}, s, c.options, m), c.scrollParents = {
          reference: Vn(o) ? li(o) : o.contextElement ? li(o.contextElement) : [],
          popper: li(l)
        };
        var y = c1(f1([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = y.filter(function(x) {
          return x.enabled;
        }), w(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var v = c.elements, m = v.reference, y = v.popper;
          if (Jd(m, y)) {
            c.rects = {
              reference: l1(m, Mi(y), c.options.strategy === "fixed"),
              popper: Vu(y)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(P) {
              return c.modifiersData[P.name] = Object.assign({}, P.data);
            });
            for (var x = 0; x < c.orderedModifiers.length; x++) {
              if (c.reset === !0) {
                c.reset = !1, x = -1;
                continue;
              }
              var S = c.orderedModifiers[x], A = S.fn, T = S.options, N = T === void 0 ? {} : T, O = S.name;
              typeof A == "function" && (c = A({
                state: c,
                options: N,
                name: O,
                instance: g
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: d1(function() {
        return new Promise(function(_) {
          g.forceUpdate(), _(c);
        });
      }),
      destroy: function() {
        E(), f = !0;
      }
    };
    if (!Jd(o, l))
      return g;
    g.setOptions(u).then(function(_) {
      !f && u.onFirstUpdate && u.onFirstUpdate(_);
    });
    function w() {
      c.orderedModifiers.forEach(function(_) {
        var v = _.name, m = _.options, y = m === void 0 ? {} : m, x = _.effect;
        if (typeof x == "function") {
          var S = x({
            state: c,
            name: v,
            instance: g,
            options: y
          }), A = function() {
          };
          p.push(S || A);
        }
      });
    }
    function E() {
      p.forEach(function(_) {
        return _();
      }), p = [];
    }
    return g;
  };
}
var h1 = p1({
  defaultModifiers: [qy, t1, My, Ly, Jy, Ky, i1, Ry]
}), ef = function(t) {
  return {
    position: t,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
}, m1 = {
  name: "applyStyles",
  enabled: !1
}, v1 = {
  name: "ariaDescribedBy",
  enabled: !0,
  phase: "afterWrite",
  effect: function(t) {
    var n = t.state;
    return function() {
      var r = n.elements, i = r.reference, s = r.popper;
      if ("removeAttribute" in i) {
        var a = (i.getAttribute("aria-describedby") || "").split(",").filter(function(o) {
          return o.trim() !== s.id;
        });
        a.length ? i.setAttribute("aria-describedby", a.join(",")) : i.removeAttribute("aria-describedby");
      }
    };
  },
  fn: function(t) {
    var n, r = t.state, i = r.elements, s = i.popper, a = i.reference, o = (n = s.getAttribute("role")) == null ? void 0 : n.toLowerCase();
    if (s.id && o === "tooltip" && "setAttribute" in a) {
      var l = a.getAttribute("aria-describedby");
      if (l && l.split(",").indexOf(s.id) !== -1)
        return;
      a.setAttribute("aria-describedby", l ? l + "," + s.id : s.id);
    }
  }
}, g1 = [];
function y1(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.enabled, s = i === void 0 ? !0 : i, a = r.placement, o = a === void 0 ? "bottom" : a, l = r.strategy, u = l === void 0 ? "absolute" : l, c = r.modifiers, p = c === void 0 ? g1 : c, f = J(r, ["enabled", "placement", "strategy", "modifiers"]), g = C.useRef(), w = C.useCallback(function() {
    var x;
    (x = g.current) == null || x.update();
  }, []), E = C.useCallback(function() {
    var x;
    (x = g.current) == null || x.forceUpdate();
  }, []), _ = fy(C.useState({
    placement: o,
    update: w,
    forceUpdate: E,
    attributes: {},
    styles: {
      popper: ef(u),
      arrow: {}
    }
  })), v = _[0], m = _[1], y = C.useMemo(function() {
    return {
      name: "updateStateModifier",
      enabled: !0,
      phase: "write",
      requires: ["computeStyles"],
      fn: function(S) {
        var A = S.state, T = {}, N = {};
        Object.keys(A.elements).forEach(function(O) {
          T[O] = A.styles[O], N[O] = A.attributes[O];
        }), m({
          state: A,
          styles: T,
          attributes: N,
          update: w,
          forceUpdate: E,
          placement: A.placement
        });
      }
    };
  }, [w, E, m]);
  return C.useEffect(function() {
    !g.current || !s || g.current.setOptions({
      placement: o,
      strategy: u,
      modifiers: [].concat(p, [y, m1])
    });
  }, [u, o, y, s]), C.useEffect(function() {
    if (!(!s || e == null || t == null))
      return g.current = h1(e, t, V({}, f, {
        placement: o,
        strategy: u,
        modifiers: [].concat(p, [v1, y])
      })), function() {
        g.current != null && (g.current.destroy(), g.current = void 0, m(function(x) {
          return V({}, x, {
            attributes: {},
            styles: {
              popper: ef(u)
            }
          });
        }));
      };
  }, [s, e, t]), v;
}
function im(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
var E1 = function() {
}, w1 = E1;
const x1 = /* @__PURE__ */ Fr(w1);
function Xs(e) {
  return e && "setState" in e ? lr.findDOMNode(e) : e ?? null;
}
const k1 = function(e) {
  return Du(Xs(e));
};
var C1 = 27, tf = function() {
};
function _1(e) {
  return e.button === 0;
}
function S1(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var nf = function(t) {
  return t && ("current" in t ? t.current : t);
};
function A1(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.disabled, s = r.clickTrigger, a = s === void 0 ? "click" : s, o = C.useRef(!1), l = t || tf, u = C.useCallback(function(f) {
    var g, w = nf(e);
    x1(!!w, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), o.current = !w || S1(f) || !_1(f) || !!im(w, (g = f.composedPath == null ? void 0 : f.composedPath()[0]) != null ? g : f.target);
  }, [e]), c = Al(function(f) {
    o.current || l(f);
  }), p = Al(function(f) {
    f.keyCode === C1 && l(f);
  });
  C.useEffect(function() {
    if (!(i || e == null)) {
      var f = window.event, g = k1(nf(e)), w = cr(g, a, u, !0), E = cr(g, a, function(m) {
        if (m === f) {
          f = void 0;
          return;
        }
        c(m);
      }), _ = cr(g, "keyup", function(m) {
        if (m === f) {
          f = void 0;
          return;
        }
        p(m);
      }), v = [];
      return "ontouchstart" in g.documentElement && (v = [].slice.call(g.body.children).map(function(m) {
        return cr(m, "mousemove", tf);
      })), function() {
        w(), E(), _(), v.forEach(function(m) {
          return m();
        });
      };
    }
  }, [e, i, a, u, c, p]);
}
function T1(e) {
  var t = {};
  return Array.isArray(e) ? (e == null || e.forEach(function(n) {
    t[n.name] = n;
  }), t) : e || t;
}
function N1(e) {
  return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
    return e[t].name = t, e[t];
  });
}
function I1(e) {
  var t, n, r, i, s = e.enabled, a = e.enableEvents, o = e.placement, l = e.flip, u = e.offset, c = e.fixed, p = e.containerPadding, f = e.arrowElement, g = e.popperConfig, w = g === void 0 ? {} : g, E = T1(w.modifiers);
  return V({}, w, {
    placement: o,
    enabled: s,
    strategy: c ? "fixed" : w.strategy,
    modifiers: N1(V({}, E, {
      eventListeners: {
        enabled: a
      },
      preventOverflow: V({}, E.preventOverflow, {
        options: p ? V({
          padding: p
        }, (t = E.preventOverflow) == null ? void 0 : t.options) : (n = E.preventOverflow) == null ? void 0 : n.options
      }),
      offset: {
        options: V({
          offset: u
        }, (r = E.offset) == null ? void 0 : r.options)
      },
      arrow: V({}, E.arrow, {
        enabled: !!f,
        options: V({}, (i = E.arrow) == null ? void 0 : i.options, {
          element: f
        })
      }),
      flip: V({
        enabled: !!l
      }, E.flip)
    }))
  });
}
const rf = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function F1(e, t) {
  const n = rf(e), r = rf(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function R1(e, t) {
  return C.useMemo(() => F1(e, t), [e, t]);
}
function ko(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function Co(e) {
  var t = window.getComputedStyle(e), n = parseFloat(t.marginTop) || 0, r = parseFloat(t.marginRight) || 0, i = parseFloat(t.marginBottom) || 0, s = parseFloat(t.marginLeft) || 0;
  return {
    top: n,
    right: r,
    bottom: i,
    left: s
  };
}
function P1() {
  var e = C.useRef(null), t = C.useRef(null), n = C.useRef(null), r = ve(void 0, "popover"), i = ve(void 0, "dropdown-menu"), s = C.useCallback(function(u) {
    !u || !(ko(u, r) || ko(u, i)) || (t.current = Co(u), u.style.margin = "0", e.current = u);
  }, [r, i]), a = C.useMemo(function() {
    return {
      name: "offset",
      options: {
        offset: function(c) {
          var p = c.placement;
          if (!t.current) return [0, 0];
          var f = t.current, g = f.top, w = f.left, E = f.bottom, _ = f.right;
          switch (p.split("-")[0]) {
            case "top":
              return [0, E];
            case "left":
              return [0, _];
            case "bottom":
              return [0, g];
            case "right":
              return [0, w];
            default:
              return [0, 0];
          }
        }
      }
    };
  }, [t]), o = C.useMemo(function() {
    return {
      name: "arrow",
      options: {
        padding: function() {
          if (!n.current)
            return 0;
          var c = n.current, p = c.top, f = c.right, g = p || f;
          return {
            top: g,
            left: g,
            right: g,
            bottom: g
          };
        }
      }
    };
  }, [n]), l = C.useMemo(function() {
    return {
      name: "popoverArrowMargins",
      enabled: !0,
      phase: "main",
      fn: function() {
      },
      requiresIfExists: ["arrow"],
      effect: function(c) {
        var p = c.state;
        if (!(!e.current || !p.elements.arrow || !ko(e.current, r))) {
          if (p.modifiersData["arrow#persistent"]) {
            var f = Co(p.elements.arrow), g = f.top, w = f.right, E = g || w;
            p.modifiersData["arrow#persistent"].padding = {
              top: E,
              left: E,
              right: E,
              bottom: E
            };
          } else
            n.current = Co(p.elements.arrow);
          return p.elements.arrow.style.margin = "0", function() {
            p.elements.arrow && (p.elements.arrow.style.margin = "");
          };
        }
      }
    };
  }, [r]);
  return [s, [a, o, l]];
}
var sf = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    return function(s, a, o, l, u) {
      var c = o || "<<anonymous>>", p = u || a;
      if (s[a] == null)
        return new Error("The " + l + " `" + p + "` is required to make " + ("`" + c + "` accessible for users of assistive ") + "technologies such as screen readers.");
      for (var f = arguments.length, g = Array(f > 5 ? f - 5 : 0), w = 5; w < f; w++)
        g[w - 5] = arguments[w];
      return r.apply(void 0, [s, a, o, l, u].concat(g));
    };
  }
  e.exports = t.default;
})(sf, sf.exports);
var af = { exports: {} }, Fl = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    function i(a, o, l, u, c, p) {
      var f = u || "<<anonymous>>", g = p || l;
      if (o[l] == null)
        return a ? new Error("Required " + c + " `" + g + "` was not specified " + ("in `" + f + "`.")) : null;
      for (var w = arguments.length, E = Array(w > 6 ? w - 6 : 0), _ = 6; _ < w; _++)
        E[_ - 6] = arguments[_];
      return r.apply(void 0, [o, l, f, c, g].concat(E));
    }
    var s = i.bind(null, !1);
    return s.isRequired = i.bind(null, !0), s;
  }
  e.exports = t.default;
})(Fl, Fl.exports);
var O1 = Fl.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var n = O1, r = i(n);
  function i(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function s() {
    for (var a = arguments.length, o = Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    function u() {
      for (var c = arguments.length, p = Array(c), f = 0; f < c; f++)
        p[f] = arguments[f];
      var g = null;
      return o.forEach(function(w) {
        if (g == null) {
          var E = w.apply(void 0, p);
          E != null && (g = E);
        }
      }), g;
    }
    return (0, r.default)(u);
  }
  e.exports = t.default;
})(af, af.exports);
var D1 = ["as", "className", "type", "tooltip"], M1 = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: d.string,
  /** Display feedback as a tooltip. */
  tooltip: d.bool,
  as: d.elementType
}, bi = /* @__PURE__ */ h.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.as, r = n === void 0 ? "div" : n, i = e.className, s = e.type, a = s === void 0 ? "valid" : s, o = e.tooltip, l = o === void 0 ? !1 : o, u = J(e, D1);
    return /* @__PURE__ */ h.createElement(r, V({}, u, {
      ref: t,
      className: M(i, a + "-" + (l ? "tooltip" : "feedback"))
    }));
  }
);
bi.displayName = "Feedback";
bi.propTypes = M1;
var Ct = /* @__PURE__ */ h.createContext({
  controlId: void 0
}), b1 = ["id", "bsPrefix", "bsCustomPrefix", "className", "type", "isValid", "isInvalid", "isStatic", "as"], Hu = /* @__PURE__ */ h.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, s = e.className, a = e.type, o = a === void 0 ? "checkbox" : a, l = e.isValid, u = l === void 0 ? !1 : l, c = e.isInvalid, p = c === void 0 ? !1 : c, f = e.isStatic, g = e.as, w = g === void 0 ? "input" : g, E = J(e, b1), _ = C.useContext(Ct), v = _.controlId, m = _.custom, y = m ? [i, "custom-control-input"] : [r, "form-check-input"], x = y[0], S = y[1];
  return r = ve(x, S), /* @__PURE__ */ h.createElement(w, V({}, E, {
    ref: t,
    type: o,
    id: n || v,
    className: M(s, r, u && "is-valid", p && "is-invalid", f && "position-static")
  }));
});
Hu.displayName = "FormCheckInput";
var L1 = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"], Wu = /* @__PURE__ */ h.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, s = e.htmlFor, a = J(e, L1), o = C.useContext(Ct), l = o.controlId, u = o.custom, c = u ? [r, "custom-control-label"] : [n, "form-check-label"], p = c[0], f = c[1];
  return n = ve(p, f), /* @__PURE__ */ h.createElement("label", V({}, a, {
    ref: t,
    htmlFor: s || l,
    className: M(i, n)
  }));
});
Wu.displayName = "FormCheckLabel";
var B1 = ["id", "bsPrefix", "bsCustomPrefix", "inline", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "title", "type", "label", "children", "custom", "as"], Un = /* @__PURE__ */ h.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, s = e.inline, a = s === void 0 ? !1 : s, o = e.disabled, l = o === void 0 ? !1 : o, u = e.isValid, c = u === void 0 ? !1 : u, p = e.isInvalid, f = p === void 0 ? !1 : p, g = e.feedbackTooltip, w = g === void 0 ? !1 : g, E = e.feedback, _ = e.className, v = e.style, m = e.title, y = m === void 0 ? "" : m, x = e.type, S = x === void 0 ? "checkbox" : x, A = e.label, T = e.children, N = e.custom, O = e.as, P = O === void 0 ? "input" : O, z = J(e, B1), j = S === "switch" ? !0 : N, H = j ? [i, "custom-control"] : [r, "form-check"], ie = H[0], de = H[1];
  r = ve(ie, de);
  var Z = C.useContext(Ct), Y = Z.controlId, R = C.useMemo(function() {
    return {
      controlId: n || Y,
      custom: j
    };
  }, [Y, j, n]), b = j || A != null && A !== !1 && !T, L = /* @__PURE__ */ h.createElement(Hu, V({}, z, {
    type: S === "switch" ? "checkbox" : S,
    ref: t,
    isValid: c,
    isInvalid: f,
    isStatic: !b,
    disabled: l,
    as: P
  }));
  return /* @__PURE__ */ h.createElement(Ct.Provider, {
    value: R
  }, /* @__PURE__ */ h.createElement("div", {
    style: v,
    className: M(_, r, j && "custom-" + S, a && r + "-inline")
  }, T || /* @__PURE__ */ h.createElement(h.Fragment, null, L, b && /* @__PURE__ */ h.createElement(Wu, {
    title: y
  }, A), (c || f) && /* @__PURE__ */ h.createElement(bi, {
    type: c ? "valid" : "invalid",
    tooltip: w
  }, E))));
});
Un.displayName = "FormCheck";
Un.Input = Hu;
Un.Label = Wu;
var V1 = ["id", "bsPrefix", "bsCustomPrefix", "className", "isValid", "isInvalid", "lang", "as"], Qu = /* @__PURE__ */ h.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, s = e.className, a = e.isValid, o = e.isInvalid, l = e.lang, u = e.as, c = u === void 0 ? "input" : u, p = J(e, V1), f = C.useContext(Ct), g = f.controlId, w = f.custom, E = "file", _ = w ? [i, "custom-file-input"] : [r, "form-control-file"], v = _[0], m = _[1];
  return r = ve(v, m), /* @__PURE__ */ h.createElement(c, V({}, p, {
    ref: t,
    id: n || g,
    type: E,
    lang: l,
    className: M(s, r, a && "is-valid", o && "is-invalid")
  }));
});
Qu.displayName = "FormFileInput";
var j1 = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"], Zs = /* @__PURE__ */ h.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, s = e.htmlFor, a = J(e, j1), o = C.useContext(Ct), l = o.controlId, u = o.custom, c = u ? [r, "custom-file-label"] : [n, "form-file-label"], p = c[0], f = c[1];
  return n = ve(p, f), /* @__PURE__ */ h.createElement("label", V({}, a, {
    ref: t,
    htmlFor: s || l,
    className: M(i, n),
    "data-browse": a["data-browse"]
  }));
});
Zs.displayName = "FormFileLabel";
var $1 = ["id", "bsPrefix", "bsCustomPrefix", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "label", "children", "custom", "lang", "data-browse", "as", "inputAs"], Ca = /* @__PURE__ */ h.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, s = e.disabled, a = s === void 0 ? !1 : s, o = e.isValid, l = o === void 0 ? !1 : o, u = e.isInvalid, c = u === void 0 ? !1 : u, p = e.feedbackTooltip, f = p === void 0 ? !1 : p, g = e.feedback, w = e.className, E = e.style, _ = e.label, v = e.children, m = e.custom, y = e.lang, x = e["data-browse"], S = e.as, A = S === void 0 ? "div" : S, T = e.inputAs, N = T === void 0 ? "input" : T, O = J(e, $1), P = m ? [i, "custom"] : [r, "form-file"], z = P[0], j = P[1];
  r = ve(z, j);
  var H = "file", ie = C.useContext(Ct), de = ie.controlId, Z = C.useMemo(function() {
    return {
      controlId: n || de,
      custom: m
    };
  }, [de, m, n]), Y = _ != null && _ !== !1 && !v, R = /* @__PURE__ */ h.createElement(Qu, V({}, O, {
    ref: t,
    isValid: l,
    isInvalid: c,
    disabled: a,
    as: N,
    lang: y
  }));
  return /* @__PURE__ */ h.createElement(Ct.Provider, {
    value: Z
  }, /* @__PURE__ */ h.createElement(A, {
    style: E,
    className: M(w, r, m && "custom-" + H)
  }, v || /* @__PURE__ */ h.createElement(h.Fragment, null, m ? /* @__PURE__ */ h.createElement(h.Fragment, null, R, Y && /* @__PURE__ */ h.createElement(Zs, {
    "data-browse": x
  }, _)) : /* @__PURE__ */ h.createElement(h.Fragment, null, Y && /* @__PURE__ */ h.createElement(Zs, null, _), R), (l || c) && /* @__PURE__ */ h.createElement(bi, {
    type: l ? "valid" : "invalid",
    tooltip: f
  }, g))));
});
Ca.displayName = "FormFile";
Ca.Input = Qu;
Ca.Label = Zs;
var z1 = ["bsPrefix", "bsCustomPrefix", "type", "size", "htmlSize", "id", "className", "isValid", "isInvalid", "plaintext", "readOnly", "custom", "as"], sm = /* @__PURE__ */ h.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.type, s = e.size, a = e.htmlSize, o = e.id, l = e.className, u = e.isValid, c = u === void 0 ? !1 : u, p = e.isInvalid, f = p === void 0 ? !1 : p, g = e.plaintext, w = e.readOnly, E = e.custom, _ = e.as, v = _ === void 0 ? "input" : _, m = J(e, z1), y = C.useContext(Ct), x = y.controlId, S = E ? [r, "custom"] : [n, "form-control"], A = S[0], T = S[1];
  n = ve(A, T);
  var N;
  if (g) {
    var O;
    N = (O = {}, O[n + "-plaintext"] = !0, O);
  } else if (i === "file") {
    var P;
    N = (P = {}, P[n + "-file"] = !0, P);
  } else if (i === "range") {
    var z;
    N = (z = {}, z[n + "-range"] = !0, z);
  } else if (v === "select" && E) {
    var j;
    N = (j = {}, j[n + "-select"] = !0, j[n + "-select-" + s] = s, j);
  } else {
    var H;
    N = (H = {}, H[n] = !0, H[n + "-" + s] = s, H);
  }
  return /* @__PURE__ */ h.createElement(v, V({}, m, {
    type: i,
    size: a,
    ref: t,
    readOnly: w,
    id: o || x,
    className: M(l, N, c && "is-valid", f && "is-invalid")
  }));
});
sm.displayName = "FormControl";
const am = Object.assign(sm, {
  Feedback: bi
});
var U1 = ["bsPrefix", "className", "children", "controlId", "as"], om = /* @__PURE__ */ h.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.className, i = e.children, s = e.controlId, a = e.as, o = a === void 0 ? "div" : a, l = J(e, U1);
  n = ve(n, "form-group");
  var u = C.useMemo(function() {
    return {
      controlId: s
    };
  }, [s]);
  return /* @__PURE__ */ h.createElement(Ct.Provider, {
    value: u
  }, /* @__PURE__ */ h.createElement(o, V({}, l, {
    ref: t,
    className: M(r, n)
  }), i));
});
om.displayName = "FormGroup";
var H1 = ["as", "bsPrefix", "column", "srOnly", "className", "htmlFor"], W1 = {
  column: !1,
  srOnly: !1
}, Gu = /* @__PURE__ */ h.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "label" : n, i = e.bsPrefix, s = e.column, a = e.srOnly, o = e.className, l = e.htmlFor, u = J(e, H1), c = C.useContext(Ct), p = c.controlId;
  i = ve(i, "form-label");
  var f = "col-form-label";
  typeof s == "string" && (f = f + " " + f + "-" + s);
  var g = M(o, i, a && "sr-only", s && f);
  return l = l || p, s ? /* @__PURE__ */ h.createElement(Yh, V({
    ref: t,
    as: "label",
    className: g,
    htmlFor: l
  }, u)) : (
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    /* @__PURE__ */ h.createElement(r, V({
      ref: t,
      className: g,
      htmlFor: l
    }, u))
  );
});
Gu.displayName = "FormLabel";
Gu.defaultProps = W1;
var Q1 = ["bsPrefix", "className", "as", "muted"], lm = /* @__PURE__ */ h.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.as, s = i === void 0 ? "small" : i, a = e.muted, o = J(e, Q1);
    return n = ve(n, "form-text"), /* @__PURE__ */ h.createElement(s, V({}, o, {
      ref: t,
      className: M(r, n, a && "text-muted")
    }));
  }
);
lm.displayName = "FormText";
var _a = /* @__PURE__ */ h.forwardRef(function(e, t) {
  return /* @__PURE__ */ h.createElement(Un, V({}, e, {
    ref: t,
    type: "switch"
  }));
});
_a.displayName = "Switch";
_a.Input = Un.Input;
_a.Label = Un.Label;
var G1 = ["bsPrefix", "inline", "className", "validated", "as"], K1 = Mu("form-row"), Y1 = {
  inline: !1
}, _t = /* @__PURE__ */ h.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.inline, i = e.className, s = e.validated, a = e.as, o = a === void 0 ? "form" : a, l = J(e, G1);
  return n = ve(n, "form"), /* @__PURE__ */ h.createElement(o, V({}, l, {
    ref: t,
    className: M(i, s && "was-validated", r && n + "-inline")
  }));
});
_t.displayName = "Form";
_t.defaultProps = Y1;
_t.Row = K1;
_t.Group = om;
_t.Control = am;
_t.Check = Un;
_t.File = Ca;
_t.Switch = _a;
_t.Label = Gu;
_t.Text = lm;
var _o = function(t) {
  var n;
  return typeof document > "u" ? null : t == null ? Du().body : (typeof t == "function" && (t = t()), t && "current" in t && (t = t.current), (n = t) != null && n.nodeType && t || null);
};
function of(e, t) {
  var n = C.useState(function() {
    return _o(e);
  }), r = n[0], i = n[1];
  if (!r) {
    var s = _o(e);
    s && i(s);
  }
  return C.useEffect(function() {
  }, [t, r]), C.useEffect(function() {
    var a = _o(e);
    a !== r && i(a);
  }, [e, r]), r;
}
var Ku = /* @__PURE__ */ h.forwardRef(function(e, t) {
  var n = e.flip, r = e.offset, i = e.placement, s = e.containerPadding, a = s === void 0 ? 5 : s, o = e.popperConfig, l = o === void 0 ? {} : o, u = e.transition, c = Hd(), p = c[0], f = c[1], g = Hd(), w = g[0], E = g[1], _ = R1(f, t), v = of(e.container), m = of(e.target), y = C.useState(!e.show), x = y[0], S = y[1], A = y1(m, p, I1({
    placement: i,
    enableEvents: !!e.show,
    containerPadding: a || 5,
    flip: n,
    offset: r,
    arrowElement: w,
    popperConfig: l
  })), T = A.styles, N = A.attributes, O = J(A, ["styles", "attributes"]);
  e.show ? x && S(!1) : !e.transition && !x && S(!0);
  var P = function() {
    S(!0), e.onExited && e.onExited.apply(e, arguments);
  }, z = e.show || u && !x;
  if (A1(p, e.onHide, {
    disabled: !e.rootClose || e.rootCloseDisabled,
    clickTrigger: e.rootCloseEvent
  }), !z)
    return null;
  var j = e.children(V({}, O, {
    show: !!e.show,
    props: V({}, N.popper, {
      style: T.popper,
      ref: _
    }),
    arrowProps: V({}, N.arrow, {
      style: T.arrow,
      ref: E
    })
  }));
  if (u) {
    var H = e.onExit, ie = e.onExiting, de = e.onEnter, Z = e.onEntering, Y = e.onEntered;
    j = /* @__PURE__ */ h.createElement(u, {
      in: e.show,
      appear: !0,
      onExit: H,
      onExiting: ie,
      onExited: P,
      onEnter: de,
      onEntering: Z,
      onEntered: Y
    }, j);
  }
  return v ? /* @__PURE__ */ lr.createPortal(j, v) : null;
});
Ku.displayName = "Overlay";
Ku.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: d.bool,
  /** Specify where the overlay element is positioned in relation to the target element */
  placement: d.oneOf(Lu),
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */
  target: d.any,
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: d.any,
  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: d.bool,
  /**
   * A render prop that returns an element to overlay and position. See
   * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
   *
   * @type {Function ({
   *   show: boolean,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *     [string]: string | number,
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     [string]: string | number,
   *   },
   * }) => React.Element}
   */
  children: d.func.isRequired,
  /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
   */
  containerPadding: d.number,
  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: d.object,
  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: d.bool,
  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent: d.oneOf(["click", "mousedown"]),
  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled: d.bool,
  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide: function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    if (t.rootClose) {
      var s;
      return (s = d.func).isRequired.apply(s, [t].concat(r));
    }
    return d.func.apply(d, [t].concat(r));
  },
  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  // @ts-ignore
  transition: d.elementType,
  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: d.func,
  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: d.func,
  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: d.func,
  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: d.func,
  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: d.func,
  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: d.func
};
var q1 = ["children", "transition", "popperConfig"], X1 = ["props", "arrowProps", "show", "update", "forceUpdate", "placement", "state"], Z1 = {
  transition: Dr,
  rootClose: !1,
  show: !1,
  placement: "top"
};
function J1(e, t) {
  var n = e.ref, r = t.ref;
  e.ref = n.__wrapped || (n.__wrapped = function(i) {
    return n(Xs(i));
  }), t.ref = r.__wrapped || (r.__wrapped = function(i) {
    return r(Xs(i));
  });
}
function um(e) {
  var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, s = J(e, q1), a = C.useRef({}), o = P1(), l = o[0], u = o[1], c = n === !0 ? Dr : n || null;
  return /* @__PURE__ */ h.createElement(Ku, V({}, s, {
    ref: l,
    popperConfig: V({}, i, {
      modifiers: u.concat(i.modifiers || [])
    }),
    transition: c
  }), function(p) {
    var f, g = p.props, w = p.arrowProps, E = p.show, _ = p.update;
    p.forceUpdate;
    var v = p.placement, m = p.state, y = J(p, X1);
    J1(g, w);
    var x = Object.assign(a.current, {
      state: m,
      scheduleUpdate: _,
      placement: v,
      outOfBoundaries: (m == null || (f = m.modifiersData.hide) == null ? void 0 : f.isReferenceHidden) || !1
    });
    return typeof t == "function" ? t(V({}, y, g, {
      placement: v,
      show: E
    }, !n && E && {
      className: "show"
    }, {
      popper: x,
      arrowProps: w
    })) : /* @__PURE__ */ h.cloneElement(t, V({}, y, g, {
      placement: v,
      arrowProps: w,
      popper: x,
      className: M(t.props.className, !n && E && "show"),
      style: V({}, t.props.style, g.style)
    }));
  });
}
um.defaultProps = Z1;
var eE = ["trigger", "overlay", "children", "popperConfig", "show", "defaultShow", "onToggle", "delay", "placement", "flip"], tE = /* @__PURE__ */ function(e) {
  zh(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return n.render = function() {
    return this.props.children;
  }, t;
}(h.Component);
function nE(e) {
  return e && typeof e == "object" ? e : {
    show: e,
    hide: e
  };
}
function lf(e, t, n) {
  var r = t[0], i = r.currentTarget, s = r.relatedTarget || r.nativeEvent[n];
  (!s || s !== i) && !im(i, s) && e.apply(void 0, t);
}
var rE = {
  defaultShow: !1,
  trigger: ["hover", "focus"]
};
function cm(e) {
  var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, s = i === void 0 ? {} : i, a = e.show, o = e.defaultShow, l = o === void 0 ? !1 : o, u = e.onToggle, c = e.delay, p = e.placement, f = e.flip, g = f === void 0 ? p && p.indexOf("auto") !== -1 : f, w = J(e, eE), E = C.useRef(null), _ = uy(), v = C.useRef(""), m = $h(a, l, u), y = m[0], x = m[1], S = nE(c), A = typeof r != "function" ? h.Children.only(r).props : {}, T = A.onFocus, N = A.onBlur, O = A.onClick, P = C.useCallback(function() {
    return Xs(E.current);
  }, []), z = C.useCallback(function() {
    if (_.clear(), v.current = "show", !S.show) {
      x(!0);
      return;
    }
    _.set(function() {
      v.current === "show" && x(!0);
    }, S.show);
  }, [S.show, x, _]), j = C.useCallback(function() {
    if (_.clear(), v.current = "hide", !S.hide) {
      x(!1);
      return;
    }
    _.set(function() {
      v.current === "hide" && x(!1);
    }, S.hide);
  }, [S.hide, x, _]), H = C.useCallback(function() {
    z();
    for (var L = arguments.length, Q = new Array(L), $ = 0; $ < L; $++)
      Q[$] = arguments[$];
    T == null || T.apply(void 0, Q);
  }, [z, T]), ie = C.useCallback(function() {
    j();
    for (var L = arguments.length, Q = new Array(L), $ = 0; $ < L; $++)
      Q[$] = arguments[$];
    N == null || N.apply(void 0, Q);
  }, [j, N]), de = C.useCallback(function() {
    x(!y), O && O.apply(void 0, arguments);
  }, [O, x, y]), Z = C.useCallback(function() {
    for (var L = arguments.length, Q = new Array(L), $ = 0; $ < L; $++)
      Q[$] = arguments[$];
    lf(z, Q, "fromElement");
  }, [z]), Y = C.useCallback(function() {
    for (var L = arguments.length, Q = new Array(L), $ = 0; $ < L; $++)
      Q[$] = arguments[$];
    lf(j, Q, "toElement");
  }, [j]), R = t == null ? [] : [].concat(t), b = {};
  return R.indexOf("click") !== -1 && (b.onClick = de), R.indexOf("focus") !== -1 && (b.onFocus = H, b.onBlur = ie), R.indexOf("hover") !== -1 && (b.onMouseOver = Z, b.onMouseOut = Y), /* @__PURE__ */ h.createElement(h.Fragment, null, typeof r == "function" ? r(V({}, b, {
    ref: E
  })) : /* @__PURE__ */ h.createElement(tE, {
    ref: E
  }, /* @__PURE__ */ C.cloneElement(r, b)), /* @__PURE__ */ h.createElement(um, V({}, w, {
    show: y,
    onHide: j,
    flip: g,
    placement: p,
    popperConfig: s,
    target: P
  }), n));
}
cm.defaultProps = rE;
var iE = ["bsPrefix", "variant", "animation", "size", "children", "as", "className"], dm = /* @__PURE__ */ h.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.animation, s = e.size, a = e.children, o = e.as, l = o === void 0 ? "div" : o, u = e.className, c = J(e, iE);
  n = ve(n, "spinner");
  var p = n + "-" + i;
  return /* @__PURE__ */ h.createElement(l, V({
    ref: t
  }, c, {
    className: M(u, p, s && p + "-" + s, r && "text-" + r)
  }), a);
});
dm.displayName = "Spinner";
var sE = ["bsPrefix", "placement", "className", "style", "children", "arrowProps", "popper", "show"], aE = {
  placement: "right"
}, Sa = /* @__PURE__ */ h.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.placement, i = e.className, s = e.style, a = e.children, o = e.arrowProps;
  e.popper, e.show;
  var l = J(e, sE);
  n = ve(n, "tooltip");
  var u = (r == null ? void 0 : r.split("-")) || [], c = u[0];
  return /* @__PURE__ */ h.createElement("div", V({
    ref: t,
    style: s,
    role: "tooltip",
    "x-placement": c,
    className: M(i, n, "bs-tooltip-" + c)
  }, l), /* @__PURE__ */ h.createElement("div", V({
    className: "arrow"
  }, o)), /* @__PURE__ */ h.createElement("div", {
    className: n + "-inner"
  }, a));
});
Sa.defaultProps = aE;
Sa.displayName = "Tooltip";
var Js = function() {
  return Js = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Js.apply(this, arguments);
};
function ea(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function Li(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, s; r < i; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function Bi(e, t) {
  var n = t && t.cache ? t.cache : fE, r = t && t.serializer ? t.serializer : dE, i = t && t.strategy ? t.strategy : uE;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function oE(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function lE(e, t, n, r) {
  var i = oE(r) ? r : n(r), s = t.get(i);
  return typeof s > "u" && (s = e.call(this, r), t.set(i, s)), s;
}
function fm(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), s = t.get(i);
  return typeof s > "u" && (s = e.apply(this, r), t.set(i, s)), s;
}
function pm(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function uE(e, t) {
  var n = e.length === 1 ? lE : fm;
  return pm(e, this, n, t.cache.create(), t.serializer);
}
function cE(e, t) {
  return pm(e, this, fm, t.cache.create(), t.serializer);
}
var dE = function() {
  return JSON.stringify(arguments);
};
function Yu() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
Yu.prototype.get = function(e) {
  return this.cache[e];
};
Yu.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var fE = {
  create: function() {
    return new Yu();
  }
}, Vi = {
  variadic: cE
};
function pE(e, t, n) {
  if (n === void 0 && (n = Error), !e)
    throw new n(t);
}
Bi(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.NumberFormat).bind.apply(e, Li([void 0], t, !1)))();
}, {
  strategy: Vi.variadic
});
Bi(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.DateTimeFormat).bind.apply(e, Li([void 0], t, !1)))();
}, {
  strategy: Vi.variadic
});
Bi(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.PluralRules).bind.apply(e, Li([void 0], t, !1)))();
}, {
  strategy: Vi.variadic
});
Bi(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.Locale).bind.apply(e, Li([void 0], t, !1)))();
}, {
  strategy: Vi.variadic
});
Bi(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.ListFormat).bind.apply(e, Li([void 0], t, !1)))();
}, {
  strategy: Vi.variadic
});
var hE = function(e) {
}, mE = function(e) {
}, vE = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: hE,
  onWarn: mE
};
function gE(e) {
  pE(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
Js(Js({}, vE), { textComponent: C.Fragment });
function uf(e, t) {
  if (e === t)
    return !0;
  if (!e || !t)
    return !1;
  var n = Object.keys(e), r = Object.keys(t), i = n.length;
  if (r.length !== i)
    return !1;
  for (var s = 0; s < i; s++) {
    var a = n[s];
    if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a))
      return !1;
  }
  return !0;
}
var hm = { exports: {} }, X = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe = typeof Symbol == "function" && Symbol.for, qu = xe ? Symbol.for("react.element") : 60103, Xu = xe ? Symbol.for("react.portal") : 60106, Aa = xe ? Symbol.for("react.fragment") : 60107, Ta = xe ? Symbol.for("react.strict_mode") : 60108, Na = xe ? Symbol.for("react.profiler") : 60114, Ia = xe ? Symbol.for("react.provider") : 60109, Fa = xe ? Symbol.for("react.context") : 60110, Zu = xe ? Symbol.for("react.async_mode") : 60111, Ra = xe ? Symbol.for("react.concurrent_mode") : 60111, Pa = xe ? Symbol.for("react.forward_ref") : 60112, Oa = xe ? Symbol.for("react.suspense") : 60113, yE = xe ? Symbol.for("react.suspense_list") : 60120, Da = xe ? Symbol.for("react.memo") : 60115, Ma = xe ? Symbol.for("react.lazy") : 60116, EE = xe ? Symbol.for("react.block") : 60121, wE = xe ? Symbol.for("react.fundamental") : 60117, xE = xe ? Symbol.for("react.responder") : 60118, kE = xe ? Symbol.for("react.scope") : 60119;
function rt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case qu:
        switch (e = e.type, e) {
          case Zu:
          case Ra:
          case Aa:
          case Na:
          case Ta:
          case Oa:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Fa:
              case Pa:
              case Ma:
              case Da:
              case Ia:
                return e;
              default:
                return t;
            }
        }
      case Xu:
        return t;
    }
  }
}
function mm(e) {
  return rt(e) === Ra;
}
X.AsyncMode = Zu;
X.ConcurrentMode = Ra;
X.ContextConsumer = Fa;
X.ContextProvider = Ia;
X.Element = qu;
X.ForwardRef = Pa;
X.Fragment = Aa;
X.Lazy = Ma;
X.Memo = Da;
X.Portal = Xu;
X.Profiler = Na;
X.StrictMode = Ta;
X.Suspense = Oa;
X.isAsyncMode = function(e) {
  return mm(e) || rt(e) === Zu;
};
X.isConcurrentMode = mm;
X.isContextConsumer = function(e) {
  return rt(e) === Fa;
};
X.isContextProvider = function(e) {
  return rt(e) === Ia;
};
X.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qu;
};
X.isForwardRef = function(e) {
  return rt(e) === Pa;
};
X.isFragment = function(e) {
  return rt(e) === Aa;
};
X.isLazy = function(e) {
  return rt(e) === Ma;
};
X.isMemo = function(e) {
  return rt(e) === Da;
};
X.isPortal = function(e) {
  return rt(e) === Xu;
};
X.isProfiler = function(e) {
  return rt(e) === Na;
};
X.isStrictMode = function(e) {
  return rt(e) === Ta;
};
X.isSuspense = function(e) {
  return rt(e) === Oa;
};
X.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Aa || e === Ra || e === Na || e === Ta || e === Oa || e === yE || typeof e == "object" && e !== null && (e.$$typeof === Ma || e.$$typeof === Da || e.$$typeof === Ia || e.$$typeof === Fa || e.$$typeof === Pa || e.$$typeof === wE || e.$$typeof === xE || e.$$typeof === kE || e.$$typeof === EE);
};
X.typeOf = rt;
hm.exports = X;
var CE = hm.exports, vm = CE, _E = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, SE = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, gm = {};
gm[vm.ForwardRef] = _E;
gm[vm.Memo] = SE;
var Ju = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = C.createContext(null)) : C.createContext(null);
Ju.Consumer;
Ju.Provider;
var AE = Ju;
function ba() {
  var e = C.useContext(AE);
  return gE(e), e;
}
var Rl;
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(Rl || (Rl = {}));
var Pl;
(function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(Pl || (Pl = {}));
function ym(e) {
  var t = function(n) {
    var r = ba(), i = n.value, s = n.children, a = ea(n, ["value", "children"]), o = typeof i == "string" ? new Date(i || 0) : i, l = e === "formatDate" ? r.formatDateToParts(o, a) : r.formatTimeToParts(o, a);
    return s(l);
  };
  return t.displayName = Pl[e], t;
}
function ji(e) {
  var t = function(n) {
    var r = ba(), i = n.value, s = n.children, a = ea(
      n,
      ["value", "children"]
    ), o = r[e](i, a);
    if (typeof s == "function")
      return s(o);
    var l = r.textComponent || C.Fragment;
    return C.createElement(l, null, o);
  };
  return t.displayName = Rl[e], t;
}
function TE(e, t) {
  var n = e.values, r = ea(e, ["values"]), i = t.values, s = ea(t, ["values"]);
  return uf(i, n) && uf(r, s);
}
function Em(e) {
  var t = ba(), n = t.formatMessage, r = t.textComponent, i = r === void 0 ? C.Fragment : r, s = e.id, a = e.description, o = e.defaultMessage, l = e.values, u = e.children, c = e.tagName, p = c === void 0 ? i : c, f = e.ignoreTag, g = { id: s, description: a, defaultMessage: o }, w = n(g, l, {
    ignoreTag: f
  });
  return typeof u == "function" ? u(Array.isArray(w) ? w : [w]) : p ? C.createElement(p, null, C.Children.toArray(w)) : C.createElement(C.Fragment, null, w);
}
Em.displayName = "FormattedMessage";
var wm = C.memo(Em, TE);
wm.displayName = "MemoizedFormattedMessage";
ji("formatDate");
ji("formatTime");
ji("formatNumber");
ji("formatList");
ji("formatDisplayName");
ym("formatDate");
ym("formatTime");
var ec = {};
ec.match = OE;
ec.parse = xm;
var NE = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, IE = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, FE = /^(?:(min|max)-)?(.+)/, RE = /(em|rem|px|cm|mm|in|pt|pc)?$/, PE = /(dpi|dpcm|dppx)?$/;
function OE(e, t) {
  return xm(e).some(function(n) {
    var r = n.inverse, i = n.type === "all" || t.type === n.type;
    if (i && r || !(i || r))
      return !1;
    var s = n.expressions.every(function(a) {
      var o = a.feature, l = a.modifier, u = a.value, c = t[o];
      if (!c)
        return !1;
      switch (o) {
        case "orientation":
        case "scan":
          return c.toLowerCase() === u.toLowerCase();
        case "width":
        case "height":
        case "device-width":
        case "device-height":
          u = ff(u), c = ff(c);
          break;
        case "resolution":
          u = df(u), c = df(c);
          break;
        case "aspect-ratio":
        case "device-aspect-ratio":
        case /* Deprecated */
        "device-pixel-ratio":
          u = cf(u), c = cf(c);
          break;
        case "grid":
        case "color":
        case "color-index":
        case "monochrome":
          u = parseInt(u, 10) || 1, c = parseInt(c, 10) || 0;
          break;
      }
      switch (l) {
        case "min":
          return c >= u;
        case "max":
          return c <= u;
        default:
          return c === u;
      }
    });
    return s && !r || !s && r;
  });
}
function xm(e) {
  return e.split(",").map(function(t) {
    t = t.trim();
    var n = t.match(NE), r = n[1], i = n[2], s = n[3] || "", a = {};
    return a.inverse = !!r && r.toLowerCase() === "not", a.type = i ? i.toLowerCase() : "all", s = s.match(/\([^\)]+\)/g) || [], a.expressions = s.map(function(o) {
      var l = o.match(IE), u = l[1].toLowerCase().match(FE);
      return {
        modifier: u[1],
        feature: u[2],
        value: l[2]
      };
    }), a;
  });
}
function cf(e) {
  var t = Number(e), n;
  return t || (n = e.match(/^(\d+)\s*\/\s*(\d+)$/), t = n[1] / n[2]), t;
}
function df(e) {
  var t = parseFloat(e), n = String(e).match(PE)[1];
  switch (n) {
    case "dpcm":
      return t / 2.54;
    case "dppx":
      return t * 96;
    default:
      return t;
  }
}
function ff(e) {
  var t = parseFloat(e), n = String(e).match(RE)[1];
  switch (n) {
    case "em":
      return t * 16;
    case "rem":
      return t * 16;
    case "cm":
      return t * 96 / 2.54;
    case "mm":
      return t * 96 / 2.54 / 10;
    case "in":
      return t * 96;
    case "pt":
      return t * 72;
    case "pc":
      return t * 72 / 12;
    default:
      return t;
  }
}
var DE = ec.match, pf = typeof window < "u" ? window.matchMedia : null;
function ME(e, t, n) {
  var r = this, i;
  pf && !n && (i = pf.call(window, e)), i ? (this.matches = i.matches, this.media = i.media, i.addListener(o)) : (this.matches = DE(e, t), this.media = e), this.addListener = s, this.removeListener = a, this.dispose = l;
  function s(u) {
    i && i.addListener(u);
  }
  function a(u) {
    i && i.removeListener(u);
  }
  function o(u) {
    r.matches = u.matches, r.media = u.media;
  }
  function l() {
    i && i.removeListener(o);
  }
}
function bE(e, t, n) {
  return new ME(e, t, n);
}
var LE = bE;
const BE = /* @__PURE__ */ Fr(LE);
var VE = /[A-Z]/g, jE = /^ms-/, So = {};
function $E(e) {
  return "-" + e.toLowerCase();
}
function km(e) {
  if (So.hasOwnProperty(e))
    return So[e];
  var t = e.replace(VE, $E);
  return So[e] = jE.test(t) ? "-" + t : t;
}
function zE(e, t) {
  if (e === t)
    return !0;
  if (!e || !t)
    return !1;
  const n = Object.keys(e), r = Object.keys(t), i = n.length;
  if (r.length !== i)
    return !1;
  for (let s = 0; s < i; s++) {
    const a = n[s];
    if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a))
      return !1;
  }
  return !0;
}
const be = d.oneOfType([d.string, d.number]), Cm = {
  all: d.bool,
  grid: d.bool,
  aural: d.bool,
  braille: d.bool,
  handheld: d.bool,
  print: d.bool,
  projection: d.bool,
  screen: d.bool,
  tty: d.bool,
  tv: d.bool,
  embossed: d.bool
}, UE = {
  orientation: d.oneOf(["portrait", "landscape"]),
  scan: d.oneOf(["progressive", "interlace"]),
  aspectRatio: d.string,
  deviceAspectRatio: d.string,
  height: be,
  deviceHeight: be,
  width: be,
  deviceWidth: be,
  color: d.bool,
  colorIndex: d.bool,
  monochrome: d.bool,
  resolution: be,
  type: Object.keys(Cm)
}, { type: Fx, ...HE } = UE, WE = {
  minAspectRatio: d.string,
  maxAspectRatio: d.string,
  minDeviceAspectRatio: d.string,
  maxDeviceAspectRatio: d.string,
  minHeight: be,
  maxHeight: be,
  minDeviceHeight: be,
  maxDeviceHeight: be,
  minWidth: be,
  maxWidth: be,
  minDeviceWidth: be,
  maxDeviceWidth: be,
  minColor: d.number,
  maxColor: d.number,
  minColorIndex: d.number,
  maxColorIndex: d.number,
  minMonochrome: d.number,
  maxMonochrome: d.number,
  minResolution: be,
  maxResolution: be,
  ...HE
}, QE = { ...Cm, ...WE };
var GE = {
  all: QE
};
const KE = (e) => `not ${e}`, YE = (e, t) => {
  const n = km(e);
  return typeof t == "number" && (t = `${t}px`), t === !0 ? n : t === !1 ? KE(n) : `(${n}: ${t})`;
}, qE = (e) => e.join(" and "), XE = (e) => {
  const t = [];
  return Object.keys(GE.all).forEach((n) => {
    const r = e[n];
    r != null && t.push(YE(n, r));
  }), qE(t);
}, ZE = C.createContext(void 0), JE = (e) => e.query || XE(e), hf = (e) => e ? Object.keys(e).reduce((n, r) => (n[km(r)] = e[r], n), {}) : void 0, _m = () => {
  const e = C.useRef(!1);
  return C.useEffect(() => {
    e.current = !0;
  }, []), e.current;
}, ew = (e) => {
  const t = C.useContext(ZE), n = () => hf(e) || hf(t), [r, i] = C.useState(n);
  return C.useEffect(() => {
    const s = n();
    zE(r, s) || i(s);
  }, [e, t]), r;
}, tw = (e) => {
  const t = () => JE(e), [n, r] = C.useState(t);
  return C.useEffect(() => {
    const i = t();
    n !== i && r(i);
  }, [e]), n;
}, nw = (e, t) => {
  const n = () => BE(e, t || {}, !!t), [r, i] = C.useState(n), s = _m();
  return C.useEffect(() => {
    if (s) {
      const a = n();
      return i(a), () => {
        a && a.dispose();
      };
    }
  }, [e, t]), r;
}, rw = (e) => {
  const [t, n] = C.useState(e.matches);
  return C.useEffect(() => {
    const r = (i) => {
      n(i.matches);
    };
    return e.addListener(r), n(e.matches), () => {
      e.removeListener(r);
    };
  }, [e]), t;
}, iw = (e, t, n) => {
  const r = ew(t), i = tw(e);
  if (!i)
    throw new Error("Invalid or missing MediaQuery!");
  const s = nw(i, r), a = rw(s);
  return _m(), C.useEffect(() => {
  }, [a]), C.useEffect(() => () => {
    s && s.dispose();
  }, []), a;
}, sw = "576px", aw = {
  sm: sw
}, {
  sm: ow
} = aw, lw = {
  extraSmall: {
    maxWidth: parseFloat(ow) || 575.98
  }
};
function Ol({
  as: e = "div",
  isStacked: t = !1,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ h.createElement(e, {
    ...r,
    className: M(r.className, {
      "pgn__action-row": !t,
      "pgn__action-row-stacked": t
    })
  }, n);
}
function uw() {
  return /* @__PURE__ */ h.createElement("span", {
    className: "pgn__action-row-spacer"
  });
}
Ol.Spacer = uw;
const tc = /* @__PURE__ */ C.forwardRef(({
  children: e,
  icon: t,
  actions: n,
  dismissible: r = !1,
  onClose: i = () => {
  },
  closeLabel: s,
  stacked: a = !1,
  show: o = !0,
  ...l
}, u) => {
  const [c, p] = C.useState(a), f = iw({
    maxWidth: lw.extraSmall.maxWidth
  }), g = "sm";
  C.useEffect(() => {
    p(f ? !0 : a);
  }, [f, a]);
  const w = C.useCallback((E) => {
    const _ = {
      size: g,
      key: E.props.children
    };
    return /* @__PURE__ */ C.cloneElement(E, _);
  }, []);
  return /* @__PURE__ */ h.createElement(zn, {
    ...l,
    className: M("alert-content", l.className),
    show: o,
    ref: u
  }, t && /* @__PURE__ */ h.createElement(Ht, {
    src: t,
    className: "alert-icon"
  }), /* @__PURE__ */ h.createElement("div", {
    className: M({
      "pgn__alert-message-wrapper": !c,
      "pgn__alert-message-wrapper-stacked": c
    })
  }, /* @__PURE__ */ h.createElement("div", {
    className: "alert-message-content"
  }, e), (r || n && n.length > 0) && /* @__PURE__ */ h.createElement(Ol, {
    className: "pgn__alert-actions"
  }, /* @__PURE__ */ h.createElement(Ol.Spacer, null), r && /* @__PURE__ */ h.createElement(Ee, {
    size: g,
    variant: "tertiary",
    onClick: i
  }, s || /* @__PURE__ */ h.createElement(wm, {
    id: "pgn.Alert.closeLabel",
    defaultMessage: "Dismiss",
    description: "Label of a close button on Alert component"
  })), n && n.map(w))));
}), Sm = Wh("h4");
Sm.displayName = "DivStyledAsH4";
function cw({
  as: e = Sm,
  bsPrefix: t = "alert-heading",
  ...n
}) {
  return /* @__PURE__ */ h.createElement(zn.Heading, {
    as: e,
    bsPrefix: t,
    ...n
  });
}
function dw({
  as: e = "a",
  bsPrefix: t = "alert-link",
  ...n
}) {
  return /* @__PURE__ */ h.createElement(zn.Link, {
    as: e,
    bsPrefix: t,
    ...n
  });
}
tc.Heading = cw;
tc.Link = dw;
function fw() {
  const e = "csrftoken", t = document.cookie.split(";");
  for (let r = 0; r < t.length; r++) {
    const i = t[r].trim();
    if (i.startsWith(e + "="))
      return i.substring(e.length + 1);
  }
  const n = document.querySelector('meta[name="csrf-token"]');
  return n ? n.getAttribute("content") || "" : (console.warn("CSRF token not found"), "");
}
async function pw(e, t, n = {}) {
  const r = e.handlerUrl(e.element, t);
  try {
    const i = await fetch(r, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": fw()
        // ARCHITECTURAL: CSRF protection
      },
      body: JSON.stringify(n)
    });
    if (!i.ok)
      throw new Error(`HTTP ${i.status}: ${i.statusText}`);
    return await i.json();
  } catch (i) {
    return console.error(`XBlock handler error (${t}):`, i), {
      success: !1,
      error: i instanceof Error ? i.message : "Unknown error occurred"
    };
  }
}
function pn(e) {
  return typeof e == "string" || e instanceof String;
}
function mf(e) {
  var t;
  return typeof e == "object" && e != null && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function Am(e, t) {
  return Array.isArray(t) ? Am(e, (n, r) => t.includes(r)) : Object.entries(e).reduce((n, r) => {
    let [i, s] = r;
    return t(s, i) && (n[i] = s), n;
  }, {});
}
const B = {
  NONE: "NONE",
  LEFT: "LEFT",
  FORCE_LEFT: "FORCE_LEFT",
  RIGHT: "RIGHT",
  FORCE_RIGHT: "FORCE_RIGHT"
};
function hw(e) {
  switch (e) {
    case B.LEFT:
      return B.FORCE_LEFT;
    case B.RIGHT:
      return B.FORCE_RIGHT;
    default:
      return e;
  }
}
function Ao(e) {
  return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function ta(e, t) {
  if (t === e) return !0;
  const n = Array.isArray(t), r = Array.isArray(e);
  let i;
  if (n && r) {
    if (t.length != e.length) return !1;
    for (i = 0; i < t.length; i++) if (!ta(t[i], e[i])) return !1;
    return !0;
  }
  if (n != r) return !1;
  if (t && e && typeof t == "object" && typeof e == "object") {
    const s = t instanceof Date, a = e instanceof Date;
    if (s && a) return t.getTime() == e.getTime();
    if (s != a) return !1;
    const o = t instanceof RegExp, l = e instanceof RegExp;
    if (o && l) return t.toString() == e.toString();
    if (o != l) return !1;
    const u = Object.keys(t);
    for (i = 0; i < u.length; i++) if (!Object.prototype.hasOwnProperty.call(e, u[i])) return !1;
    for (i = 0; i < u.length; i++) if (!ta(e[u[i]], t[u[i]])) return !1;
    return !0;
  } else if (t && e && typeof t == "function" && typeof e == "function")
    return t.toString() === e.toString();
  return !1;
}
class mw {
  /** Current input value */
  /** Current cursor position */
  /** Old input value */
  /** Old selection */
  constructor(t) {
    for (Object.assign(this, t); this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos); )
      --this.oldSelection.start;
    if (this.insertedCount)
      for (; this.value.slice(this.cursorPos) !== this.oldValue.slice(this.oldSelection.end); )
        this.value.length - this.cursorPos < this.oldValue.length - this.oldSelection.end ? ++this.oldSelection.end : ++this.cursorPos;
  }
  /** Start changing position */
  get startChangePos() {
    return Math.min(this.cursorPos, this.oldSelection.start);
  }
  /** Inserted symbols count */
  get insertedCount() {
    return this.cursorPos - this.startChangePos;
  }
  /** Inserted symbols */
  get inserted() {
    return this.value.substr(this.startChangePos, this.insertedCount);
  }
  /** Removed symbols count */
  get removedCount() {
    return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
    this.oldValue.length - this.value.length, 0);
  }
  /** Removed symbols */
  get removed() {
    return this.oldValue.substr(this.startChangePos, this.removedCount);
  }
  /** Unchanged head symbols */
  get head() {
    return this.value.substring(0, this.startChangePos);
  }
  /** Unchanged tail symbols */
  get tail() {
    return this.value.substring(this.startChangePos + this.insertedCount);
  }
  /** Remove direction */
  get removeDirection() {
    return !this.removedCount || this.insertedCount ? B.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
    this.oldSelection.end === this.oldSelection.start ? B.RIGHT : B.LEFT;
  }
}
function U(e, t) {
  return new U.InputMask(e, t);
}
function Tm(e) {
  if (e == null) throw new Error("mask property should be defined");
  return e instanceof RegExp ? U.MaskedRegExp : pn(e) ? U.MaskedPattern : e === Date ? U.MaskedDate : e === Number ? U.MaskedNumber : Array.isArray(e) || e === Array ? U.MaskedDynamic : U.Masked && e.prototype instanceof U.Masked ? e : U.Masked && e instanceof U.Masked ? e.constructor : e instanceof Function ? U.MaskedFunction : (console.warn("Mask not found for mask", e), U.Masked);
}
function Ni(e) {
  if (!e) throw new Error("Options in not defined");
  if (U.Masked) {
    if (e.prototype instanceof U.Masked) return {
      mask: e
    };
    const {
      mask: t = void 0,
      ...n
    } = e instanceof U.Masked ? {
      mask: e
    } : mf(e) && e.mask instanceof U.Masked ? e : {};
    if (t) {
      const r = t.mask;
      return {
        ...Am(t, (i, s) => !s.startsWith("_")),
        mask: t.constructor,
        _mask: r,
        ...n
      };
    }
  }
  return mf(e) ? {
    ...e
  } : {
    mask: e
  };
}
function Qt(e) {
  if (U.Masked && e instanceof U.Masked) return e;
  const t = Ni(e), n = Tm(t.mask);
  if (!n) throw new Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
  return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
U.createMask = Qt;
class nc {
  /** */
  /** */
  /** */
  /** Safely returns selection start */
  get selectionStart() {
    let t;
    try {
      t = this._unsafeSelectionStart;
    } catch {
    }
    return t ?? this.value.length;
  }
  /** Safely returns selection end */
  get selectionEnd() {
    let t;
    try {
      t = this._unsafeSelectionEnd;
    } catch {
    }
    return t ?? this.value.length;
  }
  /** Safely sets element selection */
  select(t, n) {
    if (!(t == null || n == null || t === this.selectionStart && n === this.selectionEnd))
      try {
        this._unsafeSelect(t, n);
      } catch {
      }
  }
  /** */
  get isActive() {
    return !1;
  }
  /** */
  /** */
  /** */
}
U.MaskElement = nc;
const vf = 90, vw = 89;
class La extends nc {
  /** HTMLElement to use mask on */
  constructor(t) {
    super(), this.input = t, this._onKeydown = this._onKeydown.bind(this), this._onInput = this._onInput.bind(this), this._onBeforeinput = this._onBeforeinput.bind(this), this._onCompositionEnd = this._onCompositionEnd.bind(this);
  }
  get rootElement() {
    var t, n, r;
    return (t = (n = (r = this.input).getRootNode) == null ? void 0 : n.call(r)) != null ? t : document;
  }
  /** Is element in focus */
  get isActive() {
    return this.input === this.rootElement.activeElement;
  }
  /** Binds HTMLElement events to mask internal events */
  bindEvents(t) {
    this.input.addEventListener("keydown", this._onKeydown), this.input.addEventListener("input", this._onInput), this.input.addEventListener("beforeinput", this._onBeforeinput), this.input.addEventListener("compositionend", this._onCompositionEnd), this.input.addEventListener("drop", t.drop), this.input.addEventListener("click", t.click), this.input.addEventListener("focus", t.focus), this.input.addEventListener("blur", t.commit), this._handlers = t;
  }
  _onKeydown(t) {
    if (this._handlers.redo && (t.keyCode === vf && t.shiftKey && (t.metaKey || t.ctrlKey) || t.keyCode === vw && t.ctrlKey))
      return t.preventDefault(), this._handlers.redo(t);
    if (this._handlers.undo && t.keyCode === vf && (t.metaKey || t.ctrlKey))
      return t.preventDefault(), this._handlers.undo(t);
    t.isComposing || this._handlers.selectionChange(t);
  }
  _onBeforeinput(t) {
    if (t.inputType === "historyUndo" && this._handlers.undo)
      return t.preventDefault(), this._handlers.undo(t);
    if (t.inputType === "historyRedo" && this._handlers.redo)
      return t.preventDefault(), this._handlers.redo(t);
  }
  _onCompositionEnd(t) {
    this._handlers.input(t);
  }
  _onInput(t) {
    t.isComposing || this._handlers.input(t);
  }
  /** Unbinds HTMLElement events to mask internal events */
  unbindEvents() {
    this.input.removeEventListener("keydown", this._onKeydown), this.input.removeEventListener("input", this._onInput), this.input.removeEventListener("beforeinput", this._onBeforeinput), this.input.removeEventListener("compositionend", this._onCompositionEnd), this.input.removeEventListener("drop", this._handlers.drop), this.input.removeEventListener("click", this._handlers.click), this.input.removeEventListener("focus", this._handlers.focus), this.input.removeEventListener("blur", this._handlers.commit), this._handlers = {};
  }
}
U.HTMLMaskElement = La;
class gw extends La {
  /** InputElement to use mask on */
  constructor(t) {
    super(t), this.input = t;
  }
  /** Returns InputElement selection start */
  get _unsafeSelectionStart() {
    return this.input.selectionStart != null ? this.input.selectionStart : this.value.length;
  }
  /** Returns InputElement selection end */
  get _unsafeSelectionEnd() {
    return this.input.selectionEnd;
  }
  /** Sets InputElement selection */
  _unsafeSelect(t, n) {
    this.input.setSelectionRange(t, n);
  }
  get value() {
    return this.input.value;
  }
  set value(t) {
    this.input.value = t;
  }
}
U.HTMLMaskElement = La;
class Nm extends La {
  /** Returns HTMLElement selection start */
  get _unsafeSelectionStart() {
    const t = this.rootElement, n = t.getSelection && t.getSelection(), r = n && n.anchorOffset, i = n && n.focusOffset;
    return i == null || r == null || r < i ? r : i;
  }
  /** Returns HTMLElement selection end */
  get _unsafeSelectionEnd() {
    const t = this.rootElement, n = t.getSelection && t.getSelection(), r = n && n.anchorOffset, i = n && n.focusOffset;
    return i == null || r == null || r > i ? r : i;
  }
  /** Sets HTMLElement selection */
  _unsafeSelect(t, n) {
    if (!this.rootElement.createRange) return;
    const r = this.rootElement.createRange();
    r.setStart(this.input.firstChild || this.input, t), r.setEnd(this.input.lastChild || this.input, n);
    const i = this.rootElement, s = i.getSelection && i.getSelection();
    s && (s.removeAllRanges(), s.addRange(r));
  }
  /** HTMLElement value */
  get value() {
    return this.input.textContent || "";
  }
  set value(t) {
    this.input.textContent = t;
  }
}
U.HTMLContenteditableMaskElement = Nm;
class Ba {
  constructor() {
    this.states = [], this.currentIndex = 0;
  }
  get currentState() {
    return this.states[this.currentIndex];
  }
  get isEmpty() {
    return this.states.length === 0;
  }
  push(t) {
    this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1), this.states.push(t), this.states.length > Ba.MAX_LENGTH && this.states.shift(), this.currentIndex = this.states.length - 1;
  }
  go(t) {
    return this.currentIndex = Math.min(Math.max(this.currentIndex + t, 0), this.states.length - 1), this.currentState;
  }
  undo() {
    return this.go(-1);
  }
  redo() {
    return this.go(1);
  }
  clear() {
    this.states.length = 0, this.currentIndex = 0;
  }
}
Ba.MAX_LENGTH = 100;
class yw {
  /**
    View element
  */
  /** Internal {@link Masked} model */
  constructor(t, n) {
    this.el = t instanceof nc ? t : t.isContentEditable && t.tagName !== "INPUT" && t.tagName !== "TEXTAREA" ? new Nm(t) : new gw(t), this.masked = Qt(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new Ba(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
  }
  maskEquals(t) {
    var n;
    return t == null || ((n = this.masked) == null ? void 0 : n.maskEquals(t));
  }
  /** Masked */
  get mask() {
    return this.masked.mask;
  }
  set mask(t) {
    if (this.maskEquals(t)) return;
    if (!(t instanceof U.Masked) && this.masked.constructor === Tm(t)) {
      this.masked.updateOptions({
        mask: t
      });
      return;
    }
    const n = t instanceof U.Masked ? t : Qt({
      mask: t
    });
    n.unmaskedValue = this.masked.unmaskedValue, this.masked = n;
  }
  /** Raw value */
  get value() {
    return this._value;
  }
  set value(t) {
    this.value !== t && (this.masked.value = t, this.updateControl("auto"));
  }
  /** Unmasked value */
  get unmaskedValue() {
    return this._unmaskedValue;
  }
  set unmaskedValue(t) {
    this.unmaskedValue !== t && (this.masked.unmaskedValue = t, this.updateControl("auto"));
  }
  /** Raw input value */
  get rawInputValue() {
    return this._rawInputValue;
  }
  set rawInputValue(t) {
    this.rawInputValue !== t && (this.masked.rawInputValue = t, this.updateControl(), this.alignCursor());
  }
  /** Typed unmasked value */
  get typedValue() {
    return this.masked.typedValue;
  }
  set typedValue(t) {
    this.masked.typedValueEquals(t) || (this.masked.typedValue = t, this.updateControl("auto"));
  }
  /** Display value */
  get displayValue() {
    return this.masked.displayValue;
  }
  /** Starts listening to element events */
  _bindEvents() {
    this.el.bindEvents({
      selectionChange: this._saveSelection,
      input: this._onInput,
      drop: this._onDrop,
      click: this._onClick,
      focus: this._onFocus,
      commit: this._onChange,
      undo: this._onUndo,
      redo: this._onRedo
    });
  }
  /** Stops listening to element events */
  _unbindEvents() {
    this.el && this.el.unbindEvents();
  }
  /** Fires custom event */
  _fireEvent(t, n) {
    const r = this._listeners[t];
    r && r.forEach((i) => i(n));
  }
  /** Current selection start */
  get selectionStart() {
    return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
  }
  /** Current cursor position */
  get cursorPos() {
    return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
  }
  set cursorPos(t) {
    !this.el || !this.el.isActive || (this.el.select(t, t), this._saveSelection());
  }
  /** Stores current selection */
  _saveSelection() {
    this.displayValue !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."), this._selection = {
      start: this.selectionStart,
      end: this.cursorPos
    };
  }
  /** Syncronizes model value from view */
  updateValue() {
    this.masked.value = this.el.value, this._value = this.masked.value, this._unmaskedValue = this.masked.unmaskedValue, this._rawInputValue = this.masked.rawInputValue;
  }
  /** Syncronizes view from model value, fires change events */
  updateControl(t) {
    const n = this.masked.unmaskedValue, r = this.masked.value, i = this.masked.rawInputValue, s = this.displayValue, a = this.unmaskedValue !== n || this.value !== r || this._rawInputValue !== i;
    this._unmaskedValue = n, this._value = r, this._rawInputValue = i, this.el.value !== s && (this.el.value = s), t === "auto" ? this.alignCursor() : t != null && (this.cursorPos = t), a && this._fireChangeEvents(), !this._historyChanging && (a || this.history.isEmpty) && this.history.push({
      unmaskedValue: n,
      selection: {
        start: this.selectionStart,
        end: this.cursorPos
      }
    });
  }
  /** Updates options with deep equal check, recreates {@link Masked} model if mask type changes */
  updateOptions(t) {
    const {
      mask: n,
      ...r
    } = t, i = !this.maskEquals(n), s = this.masked.optionsIsChanged(r);
    i && (this.mask = n), s && this.masked.updateOptions(r), (i || s) && this.updateControl();
  }
  /** Updates cursor */
  updateCursor(t) {
    t != null && (this.cursorPos = t, this._delayUpdateCursor(t));
  }
  /** Delays cursor update to support mobile browsers */
  _delayUpdateCursor(t) {
    this._abortUpdateCursor(), this._changingCursorPos = t, this._cursorChanging = setTimeout(() => {
      this.el && (this.cursorPos = this._changingCursorPos, this._abortUpdateCursor());
    }, 10);
  }
  /** Fires custom events */
  _fireChangeEvents() {
    this._fireEvent("accept", this._inputEvent), this.masked.isComplete && this._fireEvent("complete", this._inputEvent);
  }
  /** Aborts delayed cursor update */
  _abortUpdateCursor() {
    this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging);
  }
  /** Aligns cursor to nearest available position */
  alignCursor() {
    this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, B.LEFT));
  }
  /** Aligns cursor only if selection is empty */
  alignCursorFriendly() {
    this.selectionStart === this.cursorPos && this.alignCursor();
  }
  /** Adds listener on custom event */
  on(t, n) {
    return this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(n), this;
  }
  /** Removes custom event listener */
  off(t, n) {
    if (!this._listeners[t]) return this;
    if (!n)
      return delete this._listeners[t], this;
    const r = this._listeners[t].indexOf(n);
    return r >= 0 && this._listeners[t].splice(r, 1), this;
  }
  /** Handles view input event */
  _onInput(t) {
    this._inputEvent = t, this._abortUpdateCursor();
    const n = new mw({
      // new state
      value: this.el.value,
      cursorPos: this.cursorPos,
      // old state
      oldValue: this.displayValue,
      oldSelection: this._selection
    }), r = this.masked.rawInputValue, i = this.masked.splice(n.startChangePos, n.removed.length, n.inserted, n.removeDirection, {
      input: !0,
      raw: !0
    }).offset, s = r === this.masked.rawInputValue ? n.removeDirection : B.NONE;
    let a = this.masked.nearestInputPos(n.startChangePos + i, s);
    s !== B.NONE && (a = this.masked.nearestInputPos(a, B.NONE)), this.updateControl(a), delete this._inputEvent;
  }
  /** Handles view change event and commits model value */
  _onChange() {
    this.displayValue !== this.el.value && this.updateValue(), this.masked.doCommit(), this.updateControl(), this._saveSelection();
  }
  /** Handles view drop event, prevents by default */
  _onDrop(t) {
    t.preventDefault(), t.stopPropagation();
  }
  /** Restore last selection on focus */
  _onFocus(t) {
    this.alignCursorFriendly();
  }
  /** Restore last selection on focus */
  _onClick(t) {
    this.alignCursorFriendly();
  }
  _onUndo() {
    this._applyHistoryState(this.history.undo());
  }
  _onRedo() {
    this._applyHistoryState(this.history.redo());
  }
  _applyHistoryState(t) {
    t && (this._historyChanging = !0, this.unmaskedValue = t.unmaskedValue, this.el.select(t.selection.start, t.selection.end), this._saveSelection(), this._historyChanging = !1);
  }
  /** Unbind view events and removes element reference */
  destroy() {
    this._unbindEvents(), this._listeners.length = 0, delete this.el;
  }
}
U.InputMask = yw;
class W {
  /** Inserted symbols */
  /** Additional offset if any changes occurred before tail */
  /** Raw inserted is used by dynamic mask */
  /** Can skip chars */
  static normalize(t) {
    return Array.isArray(t) ? t : [t, new W()];
  }
  constructor(t) {
    Object.assign(this, {
      inserted: "",
      rawInserted: "",
      tailShift: 0,
      skip: !1
    }, t);
  }
  /** Aggregate changes */
  aggregate(t) {
    return this.inserted += t.inserted, this.rawInserted += t.rawInserted, this.tailShift += t.tailShift, this.skip = this.skip || t.skip, this;
  }
  /** Total offset considering all changes */
  get offset() {
    return this.tailShift + this.inserted.length;
  }
  get consumed() {
    return !!this.rawInserted || this.skip;
  }
  equals(t) {
    return this.inserted === t.inserted && this.tailShift === t.tailShift && this.rawInserted === t.rawInserted && this.skip === t.skip;
  }
}
U.ChangeDetails = W;
class Nt {
  /** Tail value as string */
  /** Tail start position */
  /** Start position */
  constructor(t, n, r) {
    t === void 0 && (t = ""), n === void 0 && (n = 0), this.value = t, this.from = n, this.stop = r;
  }
  toString() {
    return this.value;
  }
  extend(t) {
    this.value += String(t);
  }
  appendTo(t) {
    return t.append(this.toString(), {
      tail: !0
    }).aggregate(t._appendPlaceholder());
  }
  get state() {
    return {
      value: this.value,
      from: this.from,
      stop: this.stop
    };
  }
  set state(t) {
    Object.assign(this, t);
  }
  unshift(t) {
    if (!this.value.length || t != null && this.from >= t) return "";
    const n = this.value[0];
    return this.value = this.value.slice(1), n;
  }
  shift() {
    if (!this.value.length) return "";
    const t = this.value[this.value.length - 1];
    return this.value = this.value.slice(0, -1), t;
  }
}
class Fe {
  /** */
  /** */
  /** Transforms value before mask processing */
  /** Transforms each char before mask processing */
  /** Validates if value is acceptable */
  /** Does additional processing at the end of editing */
  /** Format typed value to string */
  /** Parse string to get typed value */
  /** Enable characters overwriting */
  /** */
  /** */
  /** */
  /** */
  constructor(t) {
    this._value = "", this._update({
      ...Fe.DEFAULTS,
      ...t
    }), this._initialized = !0;
  }
  /** Sets and applies new options */
  updateOptions(t) {
    this.optionsIsChanged(t) && this.withValueRefresh(this._update.bind(this, t));
  }
  /** Sets new options */
  _update(t) {
    Object.assign(this, t);
  }
  /** Mask state */
  get state() {
    return {
      _value: this.value,
      _rawInputValue: this.rawInputValue
    };
  }
  set state(t) {
    this._value = t._value;
  }
  /** Resets value */
  reset() {
    this._value = "";
  }
  get value() {
    return this._value;
  }
  set value(t) {
    this.resolve(t, {
      input: !0
    });
  }
  /** Resolve new value */
  resolve(t, n) {
    n === void 0 && (n = {
      input: !0
    }), this.reset(), this.append(t, n, ""), this.doCommit();
  }
  get unmaskedValue() {
    return this.value;
  }
  set unmaskedValue(t) {
    this.resolve(t, {});
  }
  get typedValue() {
    return this.parse ? this.parse(this.value, this) : this.unmaskedValue;
  }
  set typedValue(t) {
    this.format ? this.value = this.format(t, this) : this.unmaskedValue = String(t);
  }
  /** Value that includes raw user input */
  get rawInputValue() {
    return this.extractInput(0, this.displayValue.length, {
      raw: !0
    });
  }
  set rawInputValue(t) {
    this.resolve(t, {
      raw: !0
    });
  }
  get displayValue() {
    return this.value;
  }
  get isComplete() {
    return !0;
  }
  get isFilled() {
    return this.isComplete;
  }
  /** Finds nearest input position in direction */
  nearestInputPos(t, n) {
    return t;
  }
  totalInputPositions(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), Math.min(this.displayValue.length, n - t);
  }
  /** Extracts value in range considering flags */
  extractInput(t, n, r) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), this.displayValue.slice(t, n);
  }
  /** Extracts tail in range */
  extractTail(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), new Nt(this.extractInput(t, n), t);
  }
  /** Appends tail */
  appendTail(t) {
    return pn(t) && (t = new Nt(String(t))), t.appendTo(this);
  }
  /** Appends char */
  _appendCharRaw(t, n) {
    return t ? (this._value += t, new W({
      inserted: t,
      rawInserted: t
    })) : new W();
  }
  /** Appends char */
  _appendChar(t, n, r) {
    n === void 0 && (n = {});
    const i = this.state;
    let s;
    if ([t, s] = this.doPrepareChar(t, n), t && (s = s.aggregate(this._appendCharRaw(t, n)), !s.rawInserted && this.autofix === "pad")) {
      const a = this.state;
      this.state = i;
      let o = this.pad(n);
      const l = this._appendCharRaw(t, n);
      o = o.aggregate(l), l.rawInserted || o.equals(s) ? s = o : this.state = a;
    }
    if (s.inserted) {
      let a, o = this.doValidate(n) !== !1;
      if (o && r != null) {
        const l = this.state;
        if (this.overwrite === !0) {
          a = r.state;
          for (let c = 0; c < s.rawInserted.length; ++c)
            r.unshift(this.displayValue.length - s.tailShift);
        }
        let u = this.appendTail(r);
        if (o = u.rawInserted.length === r.toString().length, !(o && u.inserted) && this.overwrite === "shift") {
          this.state = l, a = r.state;
          for (let c = 0; c < s.rawInserted.length; ++c)
            r.shift();
          u = this.appendTail(r), o = u.rawInserted.length === r.toString().length;
        }
        o && u.inserted && (this.state = l);
      }
      o || (s = new W(), this.state = i, r && a && (r.state = a));
    }
    return s;
  }
  /** Appends optional placeholder at the end */
  _appendPlaceholder() {
    return new W();
  }
  /** Appends optional eager placeholder at the end */
  _appendEager() {
    return new W();
  }
  /** Appends symbols considering flags */
  append(t, n, r) {
    if (!pn(t)) throw new Error("value should be string");
    const i = pn(r) ? new Nt(String(r)) : r;
    n != null && n.tail && (n._beforeTailState = this.state);
    let s;
    [t, s] = this.doPrepare(t, n);
    for (let a = 0; a < t.length; ++a) {
      const o = this._appendChar(t[a], n, i);
      if (!o.rawInserted && !this.doSkipInvalid(t[a], n, i)) break;
      s.aggregate(o);
    }
    return (this.eager === !0 || this.eager === "append") && n != null && n.input && t && s.aggregate(this._appendEager()), i != null && (s.tailShift += this.appendTail(i).tailShift), s;
  }
  remove(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), this._value = this.displayValue.slice(0, t) + this.displayValue.slice(n), new W();
  }
  /** Calls function and reapplies current value */
  withValueRefresh(t) {
    if (this._refreshing || !this._initialized) return t();
    this._refreshing = !0;
    const n = this.rawInputValue, r = this.value, i = t();
    return this.rawInputValue = n, this.value && this.value !== r && r.indexOf(this.value) === 0 && (this.append(r.slice(this.displayValue.length), {}, ""), this.doCommit()), delete this._refreshing, i;
  }
  runIsolated(t) {
    if (this._isolated || !this._initialized) return t(this);
    this._isolated = !0;
    const n = this.state, r = t(this);
    return this.state = n, delete this._isolated, r;
  }
  doSkipInvalid(t, n, r) {
    return !!this.skipInvalid;
  }
  /** Prepares string before mask processing */
  doPrepare(t, n) {
    return n === void 0 && (n = {}), W.normalize(this.prepare ? this.prepare(t, this, n) : t);
  }
  /** Prepares each char before mask processing */
  doPrepareChar(t, n) {
    return n === void 0 && (n = {}), W.normalize(this.prepareChar ? this.prepareChar(t, this, n) : t);
  }
  /** Validates if value is acceptable */
  doValidate(t) {
    return (!this.validate || this.validate(this.value, this, t)) && (!this.parent || this.parent.doValidate(t));
  }
  /** Does additional processing at the end of editing */
  doCommit() {
    this.commit && this.commit(this.value, this);
  }
  splice(t, n, r, i, s) {
    r === void 0 && (r = ""), i === void 0 && (i = B.NONE), s === void 0 && (s = {
      input: !0
    });
    const a = t + n, o = this.extractTail(a), l = this.eager === !0 || this.eager === "remove";
    let u;
    l && (i = hw(i), u = this.extractInput(0, a, {
      raw: !0
    }));
    let c = t;
    const p = new W();
    if (i !== B.NONE && (c = this.nearestInputPos(t, n > 1 && t !== 0 && !l ? B.NONE : i), p.tailShift = c - t), p.aggregate(this.remove(c)), l && i !== B.NONE && u === this.rawInputValue)
      if (i === B.FORCE_LEFT) {
        let f;
        for (; u === this.rawInputValue && (f = this.displayValue.length); )
          p.aggregate(new W({
            tailShift: -1
          })).aggregate(this.remove(f - 1));
      } else i === B.FORCE_RIGHT && o.unshift();
    return p.aggregate(this.append(r, s, o));
  }
  maskEquals(t) {
    return this.mask === t;
  }
  optionsIsChanged(t) {
    return !ta(this, t);
  }
  typedValueEquals(t) {
    const n = this.typedValue;
    return t === n || Fe.EMPTY_VALUES.includes(t) && Fe.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
  }
  pad(t) {
    return new W();
  }
}
Fe.DEFAULTS = {
  skipInvalid: !0
};
Fe.EMPTY_VALUES = [void 0, null, ""];
U.Masked = Fe;
class In {
  /** */
  constructor(t, n) {
    t === void 0 && (t = []), n === void 0 && (n = 0), this.chunks = t, this.from = n;
  }
  toString() {
    return this.chunks.map(String).join("");
  }
  extend(t) {
    if (!String(t)) return;
    t = pn(t) ? new Nt(String(t)) : t;
    const n = this.chunks[this.chunks.length - 1], r = n && // if stops are same or tail has no stop
    (n.stop === t.stop || t.stop == null) && // if tail chunk goes just after last chunk
    t.from === n.from + n.toString().length;
    if (t instanceof Nt)
      r ? n.extend(t.toString()) : this.chunks.push(t);
    else if (t instanceof In) {
      if (t.stop == null) {
        let i;
        for (; t.chunks.length && t.chunks[0].stop == null; )
          i = t.chunks.shift(), i.from += t.from, this.extend(i);
      }
      t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
    }
  }
  appendTo(t) {
    if (!(t instanceof U.MaskedPattern))
      return new Nt(this.toString()).appendTo(t);
    const n = new W();
    for (let r = 0; r < this.chunks.length; ++r) {
      const i = this.chunks[r], s = t._mapPosToBlock(t.displayValue.length), a = i.stop;
      let o;
      if (a != null && // if block not found or stop is behind lastBlock
      (!s || s.index <= a) && ((i instanceof In || // for continuous block also check if stop is exist
      t._stops.indexOf(a) >= 0) && n.aggregate(t._appendPlaceholder(a)), o = i instanceof In && t._blocks[a]), o) {
        const l = o.appendTail(i);
        n.aggregate(l);
        const u = i.toString().slice(l.rawInserted.length);
        u && n.aggregate(t.append(u, {
          tail: !0
        }));
      } else
        n.aggregate(t.append(i.toString(), {
          tail: !0
        }));
    }
    return n;
  }
  get state() {
    return {
      chunks: this.chunks.map((t) => t.state),
      from: this.from,
      stop: this.stop,
      blockIndex: this.blockIndex
    };
  }
  set state(t) {
    const {
      chunks: n,
      ...r
    } = t;
    Object.assign(this, r), this.chunks = n.map((i) => {
      const s = "chunks" in i ? new In() : new Nt();
      return s.state = i, s;
    });
  }
  unshift(t) {
    if (!this.chunks.length || t != null && this.from >= t) return "";
    const n = t != null ? t - this.from : t;
    let r = 0;
    for (; r < this.chunks.length; ) {
      const i = this.chunks[r], s = i.unshift(n);
      if (i.toString()) {
        if (!s) break;
        ++r;
      } else
        this.chunks.splice(r, 1);
      if (s) return s;
    }
    return "";
  }
  shift() {
    if (!this.chunks.length) return "";
    let t = this.chunks.length - 1;
    for (; 0 <= t; ) {
      const n = this.chunks[t], r = n.shift();
      if (n.toString()) {
        if (!r) break;
        --t;
      } else
        this.chunks.splice(t, 1);
      if (r) return r;
    }
    return "";
  }
}
class Ew {
  constructor(t, n) {
    this.masked = t, this._log = [];
    const {
      offset: r,
      index: i
    } = t._mapPosToBlock(n) || (n < 0 ? (
      // first
      {
        index: 0,
        offset: 0
      }
    ) : (
      // last
      {
        index: this.masked._blocks.length,
        offset: 0
      }
    ));
    this.offset = r, this.index = i, this.ok = !1;
  }
  get block() {
    return this.masked._blocks[this.index];
  }
  get pos() {
    return this.masked._blockStartPos(this.index) + this.offset;
  }
  get state() {
    return {
      index: this.index,
      offset: this.offset,
      ok: this.ok
    };
  }
  set state(t) {
    Object.assign(this, t);
  }
  pushState() {
    this._log.push(this.state);
  }
  popState() {
    const t = this._log.pop();
    return t && (this.state = t), t;
  }
  bindBlock() {
    this.block || (this.index < 0 && (this.index = 0, this.offset = 0), this.index >= this.masked._blocks.length && (this.index = this.masked._blocks.length - 1, this.offset = this.block.displayValue.length));
  }
  _pushLeft(t) {
    for (this.pushState(), this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((n = this.block) == null ? void 0 : n.displayValue.length) || 0) {
      var n;
      if (t()) return this.ok = !0;
    }
    return this.ok = !1;
  }
  _pushRight(t) {
    for (this.pushState(), this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0)
      if (t()) return this.ok = !0;
    return this.ok = !1;
  }
  pushLeftBeforeFilled() {
    return this._pushLeft(() => {
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, B.FORCE_LEFT), this.offset !== 0))
        return !0;
    });
  }
  pushLeftBeforeInput() {
    return this._pushLeft(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, B.LEFT), !0;
    });
  }
  pushLeftBeforeRequired() {
    return this._pushLeft(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, B.LEFT), !0;
    });
  }
  pushRightBeforeFilled() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, B.FORCE_RIGHT), this.offset !== this.block.value.length))
        return !0;
    });
  }
  pushRightBeforeInput() {
    return this._pushRight(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, B.NONE), !0;
    });
  }
  pushRightBeforeRequired() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, B.NONE), !0;
    });
  }
}
class Im {
  /** */
  /** */
  /** */
  /** */
  /** */
  /** */
  constructor(t) {
    Object.assign(this, t), this._value = "", this.isFixed = !0;
  }
  get value() {
    return this._value;
  }
  get unmaskedValue() {
    return this.isUnmasking ? this.value : "";
  }
  get rawInputValue() {
    return this._isRawInput ? this.value : "";
  }
  get displayValue() {
    return this.value;
  }
  reset() {
    this._isRawInput = !1, this._value = "";
  }
  remove(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this._value.length), this._value = this._value.slice(0, t) + this._value.slice(n), this._value || (this._isRawInput = !1), new W();
  }
  nearestInputPos(t, n) {
    n === void 0 && (n = B.NONE);
    const r = 0, i = this._value.length;
    switch (n) {
      case B.LEFT:
      case B.FORCE_LEFT:
        return r;
      case B.NONE:
      case B.RIGHT:
      case B.FORCE_RIGHT:
      default:
        return i;
    }
  }
  totalInputPositions(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this._value.length), this._isRawInput ? n - t : 0;
  }
  extractInput(t, n, r) {
    return t === void 0 && (t = 0), n === void 0 && (n = this._value.length), r === void 0 && (r = {}), r.raw && this._isRawInput && this._value.slice(t, n) || "";
  }
  get isComplete() {
    return !0;
  }
  get isFilled() {
    return !!this._value;
  }
  _appendChar(t, n) {
    if (n === void 0 && (n = {}), this.isFilled) return new W();
    const r = this.eager === !0 || this.eager === "append", s = this.char === t && (this.isUnmasking || n.input || n.raw) && (!n.raw || !r) && !n.tail, a = new W({
      inserted: this.char,
      rawInserted: s ? this.char : ""
    });
    return this._value = this.char, this._isRawInput = s && (n.raw || n.input), a;
  }
  _appendEager() {
    return this._appendChar(this.char, {
      tail: !0
    });
  }
  _appendPlaceholder() {
    const t = new W();
    return this.isFilled || (this._value = t.inserted = this.char), t;
  }
  extractTail() {
    return new Nt("");
  }
  appendTail(t) {
    return pn(t) && (t = new Nt(String(t))), t.appendTo(this);
  }
  append(t, n, r) {
    const i = this._appendChar(t[0], n);
    return r != null && (i.tailShift += this.appendTail(r).tailShift), i;
  }
  doCommit() {
  }
  get state() {
    return {
      _value: this._value,
      _rawInputValue: this.rawInputValue
    };
  }
  set state(t) {
    this._value = t._value, this._isRawInput = !!t._rawInputValue;
  }
  pad(t) {
    return this._appendPlaceholder();
  }
}
class na {
  /** */
  /** */
  /** */
  /** */
  /** */
  /** */
  /** */
  /** */
  constructor(t) {
    const {
      parent: n,
      isOptional: r,
      placeholderChar: i,
      displayChar: s,
      lazy: a,
      eager: o,
      ...l
    } = t;
    this.masked = Qt(l), Object.assign(this, {
      parent: n,
      isOptional: r,
      placeholderChar: i,
      displayChar: s,
      lazy: a,
      eager: o
    });
  }
  reset() {
    this.isFilled = !1, this.masked.reset();
  }
  remove(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.value.length), t === 0 && n >= 1 ? (this.isFilled = !1, this.masked.remove(t, n)) : new W();
  }
  get value() {
    return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "");
  }
  get unmaskedValue() {
    return this.masked.unmaskedValue;
  }
  get rawInputValue() {
    return this.masked.rawInputValue;
  }
  get displayValue() {
    return this.masked.value && this.displayChar || this.value;
  }
  get isComplete() {
    return !!this.masked.value || this.isOptional;
  }
  _appendChar(t, n) {
    if (n === void 0 && (n = {}), this.isFilled) return new W();
    const r = this.masked.state;
    let i = this.masked._appendChar(t, this.currentMaskFlags(n));
    return i.inserted && this.doValidate(n) === !1 && (i = new W(), this.masked.state = r), !i.inserted && !this.isOptional && !this.lazy && !n.input && (i.inserted = this.placeholderChar), i.skip = !i.inserted && !this.isOptional, this.isFilled = !!i.inserted, i;
  }
  append(t, n, r) {
    return this.masked.append(t, this.currentMaskFlags(n), r);
  }
  _appendPlaceholder() {
    return this.isFilled || this.isOptional ? new W() : (this.isFilled = !0, new W({
      inserted: this.placeholderChar
    }));
  }
  _appendEager() {
    return new W();
  }
  extractTail(t, n) {
    return this.masked.extractTail(t, n);
  }
  appendTail(t) {
    return this.masked.appendTail(t);
  }
  extractInput(t, n, r) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.value.length), this.masked.extractInput(t, n, r);
  }
  nearestInputPos(t, n) {
    n === void 0 && (n = B.NONE);
    const r = 0, i = this.value.length, s = Math.min(Math.max(t, r), i);
    switch (n) {
      case B.LEFT:
      case B.FORCE_LEFT:
        return this.isComplete ? s : r;
      case B.RIGHT:
      case B.FORCE_RIGHT:
        return this.isComplete ? s : i;
      case B.NONE:
      default:
        return s;
    }
  }
  totalInputPositions(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.value.length), this.value.slice(t, n).length;
  }
  doValidate(t) {
    return this.masked.doValidate(this.currentMaskFlags(t)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(t)));
  }
  doCommit() {
    this.masked.doCommit();
  }
  get state() {
    return {
      _value: this.value,
      _rawInputValue: this.rawInputValue,
      masked: this.masked.state,
      isFilled: this.isFilled
    };
  }
  set state(t) {
    this.masked.state = t.masked, this.isFilled = t.isFilled;
  }
  currentMaskFlags(t) {
    var n;
    return {
      ...t,
      _beforeTailState: (t == null || (n = t._beforeTailState) == null ? void 0 : n.masked) || (t == null ? void 0 : t._beforeTailState)
    };
  }
  pad(t) {
    return new W();
  }
}
na.DEFAULT_DEFINITIONS = {
  0: /\d/,
  a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  "*": /./
};
class ww extends Fe {
  /** */
  /** Enable characters overwriting */
  /** */
  /** */
  /** */
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    const n = t.mask;
    n && (t.validate = (r) => r.search(n) >= 0), super._update(t);
  }
}
U.MaskedRegExp = ww;
class Re extends Fe {
  /** */
  /** */
  /** Single char for empty input */
  /** Single char for filled input */
  /** Show placeholder only when needed */
  /** Enable characters overwriting */
  /** */
  /** */
  /** */
  constructor(t) {
    super({
      ...Re.DEFAULTS,
      ...t,
      definitions: Object.assign({}, na.DEFAULT_DEFINITIONS, t == null ? void 0 : t.definitions)
    });
  }
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    t.definitions = Object.assign({}, this.definitions, t.definitions), super._update(t), this._rebuildMask();
  }
  _rebuildMask() {
    const t = this.definitions;
    this._blocks = [], this.exposeBlock = void 0, this._stops = [], this._maskedBlocks = {};
    const n = this.mask;
    if (!n || !t) return;
    let r = !1, i = !1;
    for (let s = 0; s < n.length; ++s) {
      if (this.blocks) {
        const u = n.slice(s), c = Object.keys(this.blocks).filter((f) => u.indexOf(f) === 0);
        c.sort((f, g) => g.length - f.length);
        const p = c[0];
        if (p) {
          const {
            expose: f,
            repeat: g,
            ...w
          } = Ni(this.blocks[p]), E = {
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            overwrite: this.overwrite,
            autofix: this.autofix,
            ...w,
            repeat: g,
            parent: this
          }, _ = g != null ? new U.RepeatBlock(
            E
            /* TODO */
          ) : Qt(E);
          _ && (this._blocks.push(_), f && (this.exposeBlock = _), this._maskedBlocks[p] || (this._maskedBlocks[p] = []), this._maskedBlocks[p].push(this._blocks.length - 1)), s += p.length - 1;
          continue;
        }
      }
      let a = n[s], o = a in t;
      if (a === Re.STOP_CHAR) {
        this._stops.push(this._blocks.length);
        continue;
      }
      if (a === "{" || a === "}") {
        r = !r;
        continue;
      }
      if (a === "[" || a === "]") {
        i = !i;
        continue;
      }
      if (a === Re.ESCAPE_CHAR) {
        if (++s, a = n[s], !a) break;
        o = !1;
      }
      const l = o ? new na({
        isOptional: i,
        lazy: this.lazy,
        eager: this.eager,
        placeholderChar: this.placeholderChar,
        displayChar: this.displayChar,
        ...Ni(t[a]),
        parent: this
      }) : new Im({
        char: a,
        eager: this.eager,
        isUnmasking: r
      });
      this._blocks.push(l);
    }
  }
  get state() {
    return {
      ...super.state,
      _blocks: this._blocks.map((t) => t.state)
    };
  }
  set state(t) {
    if (!t) {
      this.reset();
      return;
    }
    const {
      _blocks: n,
      ...r
    } = t;
    this._blocks.forEach((i, s) => i.state = n[s]), super.state = r;
  }
  reset() {
    super.reset(), this._blocks.forEach((t) => t.reset());
  }
  get isComplete() {
    return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every((t) => t.isComplete);
  }
  get isFilled() {
    return this._blocks.every((t) => t.isFilled);
  }
  get isFixed() {
    return this._blocks.every((t) => t.isFixed);
  }
  get isOptional() {
    return this._blocks.every((t) => t.isOptional);
  }
  doCommit() {
    this._blocks.forEach((t) => t.doCommit()), super.doCommit();
  }
  get unmaskedValue() {
    return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce((t, n) => t += n.unmaskedValue, "");
  }
  set unmaskedValue(t) {
    if (this.exposeBlock) {
      const n = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.unmaskedValue = t, this.appendTail(n), this.doCommit();
    } else super.unmaskedValue = t;
  }
  get value() {
    return this.exposeBlock ? this.exposeBlock.value : (
      // TODO return _value when not in change?
      this._blocks.reduce((t, n) => t += n.value, "")
    );
  }
  set value(t) {
    if (this.exposeBlock) {
      const n = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.value = t, this.appendTail(n), this.doCommit();
    } else super.value = t;
  }
  get typedValue() {
    return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue;
  }
  set typedValue(t) {
    if (this.exposeBlock) {
      const n = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.typedValue = t, this.appendTail(n), this.doCommit();
    } else super.typedValue = t;
  }
  get displayValue() {
    return this._blocks.reduce((t, n) => t += n.displayValue, "");
  }
  appendTail(t) {
    return super.appendTail(t).aggregate(this._appendPlaceholder());
  }
  _appendEager() {
    var t;
    const n = new W();
    let r = (t = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : t.index;
    if (r == null) return n;
    this._blocks[r].isFilled && ++r;
    for (let i = r; i < this._blocks.length; ++i) {
      const s = this._blocks[i]._appendEager();
      if (!s.inserted) break;
      n.aggregate(s);
    }
    return n;
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const r = this._mapPosToBlock(this.displayValue.length), i = new W();
    if (!r) return i;
    for (let a = r.index, o; o = this._blocks[a]; ++a) {
      var s;
      const l = o._appendChar(t, {
        ...n,
        _beforeTailState: (s = n._beforeTailState) == null || (s = s._blocks) == null ? void 0 : s[a]
      });
      if (i.aggregate(l), l.consumed) break;
    }
    return i;
  }
  extractTail(t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length);
    const r = new In();
    return t === n || this._forEachBlocksInRange(t, n, (i, s, a, o) => {
      const l = i.extractTail(a, o);
      l.stop = this._findStopBefore(s), l.from = this._blockStartPos(s), l instanceof In && (l.blockIndex = s), r.extend(l);
    }), r;
  }
  extractInput(t, n, r) {
    if (t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), r === void 0 && (r = {}), t === n) return "";
    let i = "";
    return this._forEachBlocksInRange(t, n, (s, a, o, l) => {
      i += s.extractInput(o, l, r);
    }), i;
  }
  _findStopBefore(t) {
    let n;
    for (let r = 0; r < this._stops.length; ++r) {
      const i = this._stops[r];
      if (i <= t) n = i;
      else break;
    }
    return n;
  }
  /** Appends placeholder depending on laziness */
  _appendPlaceholder(t) {
    const n = new W();
    if (this.lazy && t == null) return n;
    const r = this._mapPosToBlock(this.displayValue.length);
    if (!r) return n;
    const i = r.index, s = t ?? this._blocks.length;
    return this._blocks.slice(i, s).forEach((a) => {
      if (!a.lazy || t != null) {
        var o;
        n.aggregate(a._appendPlaceholder((o = a._blocks) == null ? void 0 : o.length));
      }
    }), n;
  }
  /** Finds block in pos */
  _mapPosToBlock(t) {
    let n = "";
    for (let r = 0; r < this._blocks.length; ++r) {
      const i = this._blocks[r], s = n.length;
      if (n += i.displayValue, t <= n.length)
        return {
          index: r,
          offset: t - s
        };
    }
  }
  _blockStartPos(t) {
    return this._blocks.slice(0, t).reduce((n, r) => n += r.displayValue.length, 0);
  }
  _forEachBlocksInRange(t, n, r) {
    n === void 0 && (n = this.displayValue.length);
    const i = this._mapPosToBlock(t);
    if (i) {
      const s = this._mapPosToBlock(n), a = s && i.index === s.index, o = i.offset, l = s && a ? s.offset : this._blocks[i.index].displayValue.length;
      if (r(this._blocks[i.index], i.index, o, l), s && !a) {
        for (let u = i.index + 1; u < s.index; ++u)
          r(this._blocks[u], u, 0, this._blocks[u].displayValue.length);
        r(this._blocks[s.index], s.index, 0, s.offset);
      }
    }
  }
  remove(t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length);
    const r = super.remove(t, n);
    return this._forEachBlocksInRange(t, n, (i, s, a, o) => {
      r.aggregate(i.remove(a, o));
    }), r;
  }
  nearestInputPos(t, n) {
    if (n === void 0 && (n = B.NONE), !this._blocks.length) return 0;
    const r = new Ew(this, t);
    if (n === B.NONE)
      return r.pushRightBeforeInput() || (r.popState(), r.pushLeftBeforeInput()) ? r.pos : this.displayValue.length;
    if (n === B.LEFT || n === B.FORCE_LEFT) {
      if (n === B.LEFT) {
        if (r.pushRightBeforeFilled(), r.ok && r.pos === t) return t;
        r.popState();
      }
      if (r.pushLeftBeforeInput(), r.pushLeftBeforeRequired(), r.pushLeftBeforeFilled(), n === B.LEFT) {
        if (r.pushRightBeforeInput(), r.pushRightBeforeRequired(), r.ok && r.pos <= t || (r.popState(), r.ok && r.pos <= t)) return r.pos;
        r.popState();
      }
      return r.ok ? r.pos : n === B.FORCE_LEFT ? 0 : (r.popState(), r.ok || (r.popState(), r.ok) ? r.pos : 0);
    }
    return n === B.RIGHT || n === B.FORCE_RIGHT ? (r.pushRightBeforeInput(), r.pushRightBeforeRequired(), r.pushRightBeforeFilled() ? r.pos : n === B.FORCE_RIGHT ? this.displayValue.length : (r.popState(), r.ok || (r.popState(), r.ok) ? r.pos : this.nearestInputPos(t, B.LEFT))) : t;
  }
  totalInputPositions(t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length);
    let r = 0;
    return this._forEachBlocksInRange(t, n, (i, s, a, o) => {
      r += i.totalInputPositions(a, o);
    }), r;
  }
  /** Get block by name */
  maskedBlock(t) {
    return this.maskedBlocks(t)[0];
  }
  /** Get all blocks by name */
  maskedBlocks(t) {
    const n = this._maskedBlocks[t];
    return n ? n.map((r) => this._blocks[r]) : [];
  }
  pad(t) {
    const n = new W();
    return this._forEachBlocksInRange(0, this.displayValue.length, (r) => n.aggregate(r.pad(t))), n;
  }
}
Re.DEFAULTS = {
  ...Fe.DEFAULTS,
  lazy: !0,
  placeholderChar: "_"
};
Re.STOP_CHAR = "`";
Re.ESCAPE_CHAR = "\\";
Re.InputDefinition = na;
Re.FixedDefinition = Im;
U.MaskedPattern = Re;
class Ss extends Re {
  /**
    Optionally sets max length of pattern.
    Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
  */
  /** Min bound */
  /** Max bound */
  get _matchFrom() {
    return this.maxLength - String(this.from).length;
  }
  constructor(t) {
    super(t);
  }
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    const {
      to: n = this.to || 0,
      from: r = this.from || 0,
      maxLength: i = this.maxLength || 0,
      autofix: s = this.autofix,
      ...a
    } = t;
    this.to = n, this.from = r, this.maxLength = Math.max(String(n).length, i), this.autofix = s;
    const o = String(this.from).padStart(this.maxLength, "0"), l = String(this.to).padStart(this.maxLength, "0");
    let u = 0;
    for (; u < l.length && l[u] === o[u]; ) ++u;
    a.mask = l.slice(0, u).replace(/0/g, "\\0") + "0".repeat(this.maxLength - u), super._update(a);
  }
  get isComplete() {
    return super.isComplete && !!this.value;
  }
  boundaries(t) {
    let n = "", r = "";
    const [, i, s] = t.match(/^(\D*)(\d*)(\D*)/) || [];
    return s && (n = "0".repeat(i.length) + s, r = "9".repeat(i.length) + s), n = n.padEnd(this.maxLength, "0"), r = r.padEnd(this.maxLength, "9"), [n, r];
  }
  doPrepareChar(t, n) {
    n === void 0 && (n = {});
    let r;
    return [t, r] = super.doPrepareChar(t.replace(/\D/g, ""), n), t || (r.skip = !this.isComplete), [t, r];
  }
  _appendCharRaw(t, n) {
    if (n === void 0 && (n = {}), !this.autofix || this.value.length + 1 > this.maxLength) return super._appendCharRaw(t, n);
    const r = String(this.from).padStart(this.maxLength, "0"), i = String(this.to).padStart(this.maxLength, "0"), [s, a] = this.boundaries(this.value + t);
    return Number(a) < this.from ? super._appendCharRaw(r[this.value.length], n) : Number(s) > this.to ? !n.tail && this.autofix === "pad" && this.value.length + 1 < this.maxLength ? super._appendCharRaw(r[this.value.length], n).aggregate(this._appendCharRaw(t, n)) : super._appendCharRaw(i[this.value.length], n) : super._appendCharRaw(t, n);
  }
  doValidate(t) {
    const n = this.value;
    if (n.search(/[^0]/) === -1 && n.length <= this._matchFrom) return !0;
    const [i, s] = this.boundaries(n);
    return this.from <= Number(s) && Number(i) <= this.to && super.doValidate(t);
  }
  pad(t) {
    const n = new W();
    if (this.value.length === this.maxLength) return n;
    const r = this.value, i = this.maxLength - this.value.length;
    if (i) {
      this.reset();
      for (let s = 0; s < i; ++s)
        n.aggregate(super._appendCharRaw("0", t));
      r.split("").forEach((s) => this._appendCharRaw(s));
    }
    return n;
  }
}
U.MaskedRange = Ss;
const xw = "d{.}`m{.}`Y";
class bt extends Re {
  static extractPatternOptions(t) {
    const {
      mask: n,
      pattern: r,
      ...i
    } = t;
    return {
      ...i,
      mask: pn(n) ? n : r
    };
  }
  /** Pattern mask for date according to {@link MaskedDate#format} */
  /** Start date */
  /** End date */
  /** Format typed value to string */
  /** Parse string to get typed value */
  constructor(t) {
    super(bt.extractPatternOptions({
      ...bt.DEFAULTS,
      ...t
    }));
  }
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    const {
      mask: n,
      pattern: r,
      blocks: i,
      ...s
    } = {
      ...bt.DEFAULTS,
      ...t
    }, a = Object.assign({}, bt.GET_DEFAULT_BLOCKS());
    t.min && (a.Y.from = t.min.getFullYear()), t.max && (a.Y.to = t.max.getFullYear()), t.min && t.max && a.Y.from === a.Y.to && (a.m.from = t.min.getMonth() + 1, a.m.to = t.max.getMonth() + 1, a.m.from === a.m.to && (a.d.from = t.min.getDate(), a.d.to = t.max.getDate())), Object.assign(a, this.blocks, i), super._update({
      ...s,
      mask: pn(n) ? n : r,
      blocks: a
    });
  }
  doValidate(t) {
    const n = this.date;
    return super.doValidate(t) && (!this.isComplete || this.isDateExist(this.value) && n != null && (this.min == null || this.min <= n) && (this.max == null || n <= this.max));
  }
  /** Checks if date is exists */
  isDateExist(t) {
    return this.format(this.parse(t, this), this).indexOf(t) >= 0;
  }
  /** Parsed Date */
  get date() {
    return this.typedValue;
  }
  set date(t) {
    this.typedValue = t;
  }
  get typedValue() {
    return this.isComplete ? super.typedValue : null;
  }
  set typedValue(t) {
    super.typedValue = t;
  }
  maskEquals(t) {
    return t === Date || super.maskEquals(t);
  }
  optionsIsChanged(t) {
    return super.optionsIsChanged(bt.extractPatternOptions(t));
  }
}
bt.GET_DEFAULT_BLOCKS = () => ({
  d: {
    mask: Ss,
    from: 1,
    to: 31,
    maxLength: 2
  },
  m: {
    mask: Ss,
    from: 1,
    to: 12,
    maxLength: 2
  },
  Y: {
    mask: Ss,
    from: 1900,
    to: 9999
  }
});
bt.DEFAULTS = {
  ...Re.DEFAULTS,
  mask: Date,
  pattern: xw,
  format: (e, t) => {
    if (!e) return "";
    const n = String(e.getDate()).padStart(2, "0"), r = String(e.getMonth() + 1).padStart(2, "0"), i = e.getFullYear();
    return [n, r, i].join(".");
  },
  parse: (e, t) => {
    const [n, r, i] = e.split(".").map(Number);
    return new Date(i, r - 1, n);
  }
};
U.MaskedDate = bt;
class Va extends Fe {
  constructor(t) {
    super({
      ...Va.DEFAULTS,
      ...t
    }), this.currentMask = void 0;
  }
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    super._update(t), "mask" in t && (this.exposeMask = void 0, this.compiledMasks = Array.isArray(t.mask) ? t.mask.map((n) => {
      const {
        expose: r,
        ...i
      } = Ni(n), s = Qt({
        overwrite: this._overwrite,
        eager: this._eager,
        skipInvalid: this._skipInvalid,
        ...i
      });
      return r && (this.exposeMask = s), s;
    }) : []);
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const r = this._applyDispatch(t, n);
    return this.currentMask && r.aggregate(this.currentMask._appendChar(t, this.currentMaskFlags(n))), r;
  }
  _applyDispatch(t, n, r) {
    t === void 0 && (t = ""), n === void 0 && (n = {}), r === void 0 && (r = "");
    const i = n.tail && n._beforeTailState != null ? n._beforeTailState._value : this.value, s = this.rawInputValue, a = n.tail && n._beforeTailState != null ? n._beforeTailState._rawInputValue : s, o = s.slice(a.length), l = this.currentMask, u = new W(), c = l == null ? void 0 : l.state;
    return this.currentMask = this.doDispatch(t, {
      ...n
    }, r), this.currentMask && (this.currentMask !== l ? (this.currentMask.reset(), a && (this.currentMask.append(a, {
      raw: !0
    }), u.tailShift = this.currentMask.value.length - i.length), o && (u.tailShift += this.currentMask.append(o, {
      raw: !0,
      tail: !0
    }).tailShift)) : c && (this.currentMask.state = c)), u;
  }
  _appendPlaceholder() {
    const t = this._applyDispatch();
    return this.currentMask && t.aggregate(this.currentMask._appendPlaceholder()), t;
  }
  _appendEager() {
    const t = this._applyDispatch();
    return this.currentMask && t.aggregate(this.currentMask._appendEager()), t;
  }
  appendTail(t) {
    const n = new W();
    return t && n.aggregate(this._applyDispatch("", {}, t)), n.aggregate(this.currentMask ? this.currentMask.appendTail(t) : super.appendTail(t));
  }
  currentMaskFlags(t) {
    var n, r;
    return {
      ...t,
      _beforeTailState: ((n = t._beforeTailState) == null ? void 0 : n.currentMaskRef) === this.currentMask && ((r = t._beforeTailState) == null ? void 0 : r.currentMask) || t._beforeTailState
    };
  }
  doDispatch(t, n, r) {
    return n === void 0 && (n = {}), r === void 0 && (r = ""), this.dispatch(t, this, n, r);
  }
  doValidate(t) {
    return super.doValidate(t) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(t)));
  }
  doPrepare(t, n) {
    n === void 0 && (n = {});
    let [r, i] = super.doPrepare(t, n);
    if (this.currentMask) {
      let s;
      [r, s] = super.doPrepare(r, this.currentMaskFlags(n)), i = i.aggregate(s);
    }
    return [r, i];
  }
  doPrepareChar(t, n) {
    n === void 0 && (n = {});
    let [r, i] = super.doPrepareChar(t, n);
    if (this.currentMask) {
      let s;
      [r, s] = super.doPrepareChar(r, this.currentMaskFlags(n)), i = i.aggregate(s);
    }
    return [r, i];
  }
  reset() {
    var t;
    (t = this.currentMask) == null || t.reset(), this.compiledMasks.forEach((n) => n.reset());
  }
  get value() {
    return this.exposeMask ? this.exposeMask.value : this.currentMask ? this.currentMask.value : "";
  }
  set value(t) {
    this.exposeMask ? (this.exposeMask.value = t, this.currentMask = this.exposeMask, this._applyDispatch()) : super.value = t;
  }
  get unmaskedValue() {
    return this.exposeMask ? this.exposeMask.unmaskedValue : this.currentMask ? this.currentMask.unmaskedValue : "";
  }
  set unmaskedValue(t) {
    this.exposeMask ? (this.exposeMask.unmaskedValue = t, this.currentMask = this.exposeMask, this._applyDispatch()) : super.unmaskedValue = t;
  }
  get typedValue() {
    return this.exposeMask ? this.exposeMask.typedValue : this.currentMask ? this.currentMask.typedValue : "";
  }
  set typedValue(t) {
    if (this.exposeMask) {
      this.exposeMask.typedValue = t, this.currentMask = this.exposeMask, this._applyDispatch();
      return;
    }
    let n = String(t);
    this.currentMask && (this.currentMask.typedValue = t, n = this.currentMask.unmaskedValue), this.unmaskedValue = n;
  }
  get displayValue() {
    return this.currentMask ? this.currentMask.displayValue : "";
  }
  get isComplete() {
    var t;
    return !!((t = this.currentMask) != null && t.isComplete);
  }
  get isFilled() {
    var t;
    return !!((t = this.currentMask) != null && t.isFilled);
  }
  remove(t, n) {
    const r = new W();
    return this.currentMask && r.aggregate(this.currentMask.remove(t, n)).aggregate(this._applyDispatch()), r;
  }
  get state() {
    var t;
    return {
      ...super.state,
      _rawInputValue: this.rawInputValue,
      compiledMasks: this.compiledMasks.map((n) => n.state),
      currentMaskRef: this.currentMask,
      currentMask: (t = this.currentMask) == null ? void 0 : t.state
    };
  }
  set state(t) {
    const {
      compiledMasks: n,
      currentMaskRef: r,
      currentMask: i,
      ...s
    } = t;
    n && this.compiledMasks.forEach((a, o) => a.state = n[o]), r != null && (this.currentMask = r, this.currentMask.state = i), super.state = s;
  }
  extractInput(t, n, r) {
    return this.currentMask ? this.currentMask.extractInput(t, n, r) : "";
  }
  extractTail(t, n) {
    return this.currentMask ? this.currentMask.extractTail(t, n) : super.extractTail(t, n);
  }
  doCommit() {
    this.currentMask && this.currentMask.doCommit(), super.doCommit();
  }
  nearestInputPos(t, n) {
    return this.currentMask ? this.currentMask.nearestInputPos(t, n) : super.nearestInputPos(t, n);
  }
  get overwrite() {
    return this.currentMask ? this.currentMask.overwrite : this._overwrite;
  }
  set overwrite(t) {
    this._overwrite = t;
  }
  get eager() {
    return this.currentMask ? this.currentMask.eager : this._eager;
  }
  set eager(t) {
    this._eager = t;
  }
  get skipInvalid() {
    return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid;
  }
  set skipInvalid(t) {
    this._skipInvalid = t;
  }
  get autofix() {
    return this.currentMask ? this.currentMask.autofix : this._autofix;
  }
  set autofix(t) {
    this._autofix = t;
  }
  maskEquals(t) {
    return Array.isArray(t) ? this.compiledMasks.every((n, r) => {
      if (!t[r]) return;
      const {
        mask: i,
        ...s
      } = t[r];
      return ta(n, s) && n.maskEquals(i);
    }) : super.maskEquals(t);
  }
  typedValueEquals(t) {
    var n;
    return !!((n = this.currentMask) != null && n.typedValueEquals(t));
  }
}
Va.DEFAULTS = {
  ...Fe.DEFAULTS,
  dispatch: (e, t, n, r) => {
    if (!t.compiledMasks.length) return;
    const i = t.rawInputValue, s = t.compiledMasks.map((a, o) => {
      const l = t.currentMask === a, u = l ? a.displayValue.length : a.nearestInputPos(a.displayValue.length, B.FORCE_LEFT);
      return a.rawInputValue !== i ? (a.reset(), a.append(i, {
        raw: !0
      })) : l || a.remove(u), a.append(e, t.currentMaskFlags(n)), a.appendTail(r), {
        index: o,
        weight: a.rawInputValue.length,
        totalInputPositions: a.totalInputPositions(0, Math.max(u, a.nearestInputPos(a.displayValue.length, B.FORCE_LEFT)))
      };
    });
    return s.sort((a, o) => o.weight - a.weight || o.totalInputPositions - a.totalInputPositions), t.compiledMasks[s[0].index];
  }
};
U.MaskedDynamic = Va;
class ja extends Re {
  constructor(t) {
    super({
      ...ja.DEFAULTS,
      ...t
    });
  }
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    const {
      enum: n,
      ...r
    } = t;
    if (n) {
      const i = n.map((o) => o.length), s = Math.min(...i), a = Math.max(...i) - s;
      r.mask = "*".repeat(s), a && (r.mask += "[" + "*".repeat(a) + "]"), this.enum = n;
    }
    super._update(r);
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const r = Math.min(this.nearestInputPos(0, B.FORCE_RIGHT), this.value.length), i = this.enum.filter((s) => this.matchValue(s, this.unmaskedValue + t, r));
    if (i.length) {
      i.length === 1 && this._forEachBlocksInRange(0, this.value.length, (a, o) => {
        const l = i[0][o];
        o >= this.value.length || l === a.value || (a.reset(), a._appendChar(l, n));
      });
      const s = super._appendCharRaw(i[0][this.value.length], n);
      return i.length === 1 && i[0].slice(this.unmaskedValue.length).split("").forEach((a) => s.aggregate(super._appendCharRaw(a))), s;
    }
    return new W({
      skip: !this.isComplete
    });
  }
  extractTail(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), new Nt("", t);
  }
  remove(t, n) {
    if (t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), t === n) return new W();
    const r = Math.min(super.nearestInputPos(0, B.FORCE_RIGHT), this.value.length);
    let i;
    for (i = t; i >= 0 && !(this.enum.filter((o) => this.matchValue(o, this.value.slice(r, i), r)).length > 1); --i)
      ;
    const s = super.remove(i, n);
    return s.tailShift += i - t, s;
  }
  get isComplete() {
    return this.enum.indexOf(this.value) >= 0;
  }
}
ja.DEFAULTS = {
  ...Re.DEFAULTS,
  matchValue: (e, t, n) => e.indexOf(t, n) === n
};
U.MaskedEnum = ja;
class kw extends Fe {
  /** */
  /** Enable characters overwriting */
  /** */
  /** */
  /** */
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    super._update({
      ...t,
      validate: t.mask
    });
  }
}
U.MaskedFunction = kw;
var Fm;
class qe extends Fe {
  /** Single char */
  /** Single char */
  /** Array of single chars */
  /** */
  /** */
  /** Digits after point */
  /** Flag to remove leading and trailing zeros in the end of editing */
  /** Flag to pad trailing zeros after point in the end of editing */
  /** Enable characters overwriting */
  /** */
  /** */
  /** */
  /** Format typed value to string */
  /** Parse string to get typed value */
  constructor(t) {
    super({
      ...qe.DEFAULTS,
      ...t
    });
  }
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    super._update(t), this._updateRegExps();
  }
  _updateRegExps() {
    const t = "^" + (this.allowNegative ? "[+|\\-]?" : ""), n = "\\d*", r = (this.scale ? "(" + Ao(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
    this._numberRegExp = new RegExp(t + n + r), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(Ao).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(Ao(this.thousandsSeparator), "g");
  }
  _removeThousandsSeparators(t) {
    return t.replace(this._thousandsSeparatorRegExp, "");
  }
  _insertThousandsSeparators(t) {
    const n = t.split(this.radix);
    return n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator), n.join(this.radix);
  }
  doPrepareChar(t, n) {
    n === void 0 && (n = {});
    const [r, i] = super.doPrepareChar(this._removeThousandsSeparators(this.scale && this.mapToRadix.length && /*
      radix should be mapped when
      1) input is done from keyboard = flags.input && flags.raw
      2) unmasked value is set = !flags.input && !flags.raw
      and should not be mapped when
      1) value is set = flags.input && !flags.raw
      2) raw value is set = !flags.input && flags.raw
    */
    (n.input && n.raw || !n.input && !n.raw) ? t.replace(this._mapToRadixRegExp, this.radix) : t), n);
    return t && !r && (i.skip = !0), r && !this.allowPositive && !this.value && r !== "-" && i.aggregate(this._appendChar("-")), [r, i];
  }
  _separatorsCount(t, n) {
    n === void 0 && (n = !1);
    let r = 0;
    for (let i = 0; i < t; ++i)
      this._value.indexOf(this.thousandsSeparator, i) === i && (++r, n && (t += this.thousandsSeparator.length));
    return r;
  }
  _separatorsCountFromSlice(t) {
    return t === void 0 && (t = this._value), this._separatorsCount(this._removeThousandsSeparators(t).length, !0);
  }
  extractInput(t, n, r) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), [t, n] = this._adjustRangeWithSeparators(t, n), this._removeThousandsSeparators(super.extractInput(t, n, r));
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const r = n.tail && n._beforeTailState ? n._beforeTailState._value : this._value, i = this._separatorsCountFromSlice(r);
    this._value = this._removeThousandsSeparators(this.value);
    const s = this._value;
    this._value += t;
    const a = this.number;
    let o = !isNaN(a), l = !1;
    if (o) {
      let f;
      this.min != null && this.min < 0 && this.number < this.min && (f = this.min), this.max != null && this.max > 0 && this.number > this.max && (f = this.max), f != null && (this.autofix ? (this._value = this.format(f, this).replace(qe.UNMASKED_RADIX, this.radix), l || (l = s === this._value && !n.tail)) : o = !1), o && (o = !!this._value.match(this._numberRegExp));
    }
    let u;
    o ? u = new W({
      inserted: this._value.slice(s.length),
      rawInserted: l ? "" : t,
      skip: l
    }) : (this._value = s, u = new W()), this._value = this._insertThousandsSeparators(this._value);
    const c = n.tail && n._beforeTailState ? n._beforeTailState._value : this._value, p = this._separatorsCountFromSlice(c);
    return u.tailShift += (p - i) * this.thousandsSeparator.length, u;
  }
  _findSeparatorAround(t) {
    if (this.thousandsSeparator) {
      const n = t - this.thousandsSeparator.length + 1, r = this.value.indexOf(this.thousandsSeparator, n);
      if (r <= t) return r;
    }
    return -1;
  }
  _adjustRangeWithSeparators(t, n) {
    const r = this._findSeparatorAround(t);
    r >= 0 && (t = r);
    const i = this._findSeparatorAround(n);
    return i >= 0 && (n = i + this.thousandsSeparator.length), [t, n];
  }
  remove(t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), [t, n] = this._adjustRangeWithSeparators(t, n);
    const r = this.value.slice(0, t), i = this.value.slice(n), s = this._separatorsCount(r.length);
    this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(r + i));
    const a = this._separatorsCountFromSlice(r);
    return new W({
      tailShift: (a - s) * this.thousandsSeparator.length
    });
  }
  nearestInputPos(t, n) {
    if (!this.thousandsSeparator) return t;
    switch (n) {
      case B.NONE:
      case B.LEFT:
      case B.FORCE_LEFT: {
        const r = this._findSeparatorAround(t - 1);
        if (r >= 0) {
          const i = r + this.thousandsSeparator.length;
          if (t < i || this.value.length <= i || n === B.FORCE_LEFT)
            return r;
        }
        break;
      }
      case B.RIGHT:
      case B.FORCE_RIGHT: {
        const r = this._findSeparatorAround(t);
        if (r >= 0)
          return r + this.thousandsSeparator.length;
      }
    }
    return t;
  }
  doCommit() {
    if (this.value) {
      const t = this.number;
      let n = t;
      this.min != null && (n = Math.max(n, this.min)), this.max != null && (n = Math.min(n, this.max)), n !== t && (this.unmaskedValue = this.format(n, this));
      let r = this.value;
      this.normalizeZeros && (r = this._normalizeZeros(r)), this.padFractionalZeros && this.scale > 0 && (r = this._padFractionalZeros(r)), this._value = r;
    }
    super.doCommit();
  }
  _normalizeZeros(t) {
    const n = this._removeThousandsSeparators(t).split(this.radix);
    return n[0] = n[0].replace(/^(\D*)(0*)(\d*)/, (r, i, s, a) => i + a), t.length && !/\d$/.test(n[0]) && (n[0] = n[0] + "0"), n.length > 1 && (n[1] = n[1].replace(/0*$/, ""), n[1].length || (n.length = 1)), this._insertThousandsSeparators(n.join(this.radix));
  }
  _padFractionalZeros(t) {
    if (!t) return t;
    const n = t.split(this.radix);
    return n.length < 2 && n.push(""), n[1] = n[1].padEnd(this.scale, "0"), n.join(this.radix);
  }
  doSkipInvalid(t, n, r) {
    n === void 0 && (n = {});
    const i = this.scale === 0 && t !== this.thousandsSeparator && (t === this.radix || t === qe.UNMASKED_RADIX || this.mapToRadix.includes(t));
    return super.doSkipInvalid(t, n, r) && !i;
  }
  get unmaskedValue() {
    return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, qe.UNMASKED_RADIX);
  }
  set unmaskedValue(t) {
    super.unmaskedValue = t;
  }
  get typedValue() {
    return this.parse(this.unmaskedValue, this);
  }
  set typedValue(t) {
    this.rawInputValue = this.format(t, this).replace(qe.UNMASKED_RADIX, this.radix);
  }
  /** Parsed Number */
  get number() {
    return this.typedValue;
  }
  set number(t) {
    this.typedValue = t;
  }
  get allowNegative() {
    return this.min != null && this.min < 0 || this.max != null && this.max < 0;
  }
  get allowPositive() {
    return this.min != null && this.min > 0 || this.max != null && this.max > 0;
  }
  typedValueEquals(t) {
    return (super.typedValueEquals(t) || qe.EMPTY_VALUES.includes(t) && qe.EMPTY_VALUES.includes(this.typedValue)) && !(t === 0 && this.value === "");
  }
}
Fm = qe;
qe.UNMASKED_RADIX = ".";
qe.EMPTY_VALUES = [...Fe.EMPTY_VALUES, 0];
qe.DEFAULTS = {
  ...Fe.DEFAULTS,
  mask: Number,
  radix: ",",
  thousandsSeparator: "",
  mapToRadix: [Fm.UNMASKED_RADIX],
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  scale: 2,
  normalizeZeros: !0,
  padFractionalZeros: !1,
  parse: Number,
  format: (e) => e.toLocaleString("en-US", {
    useGrouping: !1,
    maximumFractionDigits: 20
  })
};
U.MaskedNumber = qe;
const Dl = {
  MASKED: "value",
  UNMASKED: "unmaskedValue",
  TYPED: "typedValue"
};
function Rm(e, t, n) {
  t === void 0 && (t = Dl.MASKED), n === void 0 && (n = Dl.MASKED);
  const r = Qt(e);
  return (i) => r.runIsolated((s) => (s[t] = i, s[n]));
}
function Cw(e, t, n, r) {
  return Rm(t, n, r)(e);
}
U.PIPE_TYPE = Dl;
U.createPipe = Rm;
U.pipe = Cw;
class _w extends Re {
  get repeatFrom() {
    var t;
    return (t = Array.isArray(this.repeat) ? this.repeat[0] : this.repeat === 1 / 0 ? 0 : this.repeat) != null ? t : 0;
  }
  get repeatTo() {
    var t;
    return (t = Array.isArray(this.repeat) ? this.repeat[1] : this.repeat) != null ? t : 1 / 0;
  }
  constructor(t) {
    super(t);
  }
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    var n, r, i;
    const {
      repeat: s,
      ...a
    } = Ni(t);
    this._blockOpts = Object.assign({}, this._blockOpts, a);
    const o = Qt(this._blockOpts);
    this.repeat = (n = (r = s ?? o.repeat) != null ? r : this.repeat) != null ? n : 1 / 0, super._update({
      mask: "m".repeat(Math.max(this.repeatTo === 1 / 0 && ((i = this._blocks) == null ? void 0 : i.length) || 0, this.repeatFrom)),
      blocks: {
        m: o
      },
      eager: o.eager,
      overwrite: o.overwrite,
      skipInvalid: o.skipInvalid,
      lazy: o.lazy,
      placeholderChar: o.placeholderChar,
      displayChar: o.displayChar
    });
  }
  _allocateBlock(t) {
    if (t < this._blocks.length) return this._blocks[t];
    if (this.repeatTo === 1 / 0 || this._blocks.length < this.repeatTo)
      return this._blocks.push(Qt(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const r = new W();
    for (
      let l = (i = (s = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : s.index) != null ? i : Math.max(this._blocks.length - 1, 0), u, c;
      // try to get a block or
      // try to allocate a new block if not allocated already
      u = (a = this._blocks[l]) != null ? a : c = !c && this._allocateBlock(l);
      ++l
    ) {
      var i, s, a, o;
      const p = u._appendChar(t, {
        ...n,
        _beforeTailState: (o = n._beforeTailState) == null || (o = o._blocks) == null ? void 0 : o[l]
      });
      if (p.skip && c) {
        this._blocks.pop(), this.mask = this.mask.slice(1);
        break;
      }
      if (r.aggregate(p), p.consumed) break;
    }
    return r;
  }
  _trimEmptyTail(t, n) {
    var r, i;
    t === void 0 && (t = 0);
    const s = Math.max(((r = this._mapPosToBlock(t)) == null ? void 0 : r.index) || 0, this.repeatFrom, 0);
    let a;
    n != null && (a = (i = this._mapPosToBlock(n)) == null ? void 0 : i.index), a == null && (a = this._blocks.length - 1);
    let o = 0;
    for (let l = a; s <= l && !this._blocks[l].unmaskedValue; --l, ++o)
      ;
    o && (this._blocks.splice(a - o + 1, o), this.mask = this.mask.slice(o));
  }
  reset() {
    super.reset(), this._trimEmptyTail();
  }
  remove(t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length);
    const r = super.remove(t, n);
    return this._trimEmptyTail(t, n), r;
  }
  totalInputPositions(t, n) {
    return t === void 0 && (t = 0), n == null && this.repeatTo === 1 / 0 ? 1 / 0 : super.totalInputPositions(t, n);
  }
  get state() {
    return super.state;
  }
  set state(t) {
    this._blocks.length = t._blocks.length, this.mask = this.mask.slice(0, this._blocks.length), super.state = t;
  }
}
U.RepeatBlock = _w;
try {
  globalThis.IMask = U;
} catch {
}
const Pm = {
  // common
  mask: d.oneOfType([d.array, d.func, d.string, d.instanceOf(RegExp), d.oneOf([Date, Number, U.Masked]), d.instanceOf(U.Masked)]),
  value: d.any,
  unmask: d.oneOfType([d.bool, d.oneOf(["typed"])]),
  prepare: d.func,
  prepareChar: d.func,
  validate: d.func,
  commit: d.func,
  overwrite: d.oneOfType([d.bool, d.oneOf(["shift"])]),
  eager: d.oneOfType([d.bool, d.oneOf(["append", "remove"])]),
  skipInvalid: d.bool,
  // events
  onAccept: d.func,
  onComplete: d.func,
  // pattern
  placeholderChar: d.string,
  displayChar: d.string,
  lazy: d.bool,
  definitions: d.object,
  blocks: d.object,
  // enum
  enum: d.arrayOf(d.string),
  // range
  maxLength: d.number,
  from: d.number,
  to: d.number,
  // date
  pattern: d.string,
  format: d.func,
  parse: d.func,
  autofix: d.oneOfType([d.bool, d.oneOf(["pad"])]),
  // number
  radix: d.string,
  thousandsSeparator: d.string,
  mapToRadix: d.arrayOf(d.string),
  scale: d.number,
  normalizeZeros: d.bool,
  padFractionalZeros: d.bool,
  min: d.oneOfType([d.number, d.instanceOf(Date)]),
  max: d.oneOfType([d.number, d.instanceOf(Date)]),
  // dynamic
  dispatch: d.func,
  // ref
  inputRef: d.oneOfType([d.func, d.shape({
    current: d.object
  })])
}, Om = Object.keys(Pm).filter((e) => e !== "value"), Sw = ["value", "unmask", "onAccept", "onComplete", "inputRef"], Aw = Om.filter((e) => Sw.indexOf(e) < 0);
function Tw(e) {
  var t;
  const n = (t = class extends h.Component {
    constructor(s) {
      super(s), this._inputRef = this._inputRef.bind(this);
    }
    componentDidMount() {
      this.props.mask && this.initMask();
    }
    componentDidUpdate() {
      const s = this.props, a = this._extractMaskOptionsFromProps(s);
      if (a.mask)
        this.maskRef ? (this.maskRef.updateOptions(a), "value" in s && s.value !== void 0 && (this.maskValue = s.value)) : this.initMask(a);
      else if (this.destroyMask(), "value" in s && s.value !== void 0) {
        var o;
        (o = this.element) != null && o.isContentEditable && this.element.tagName !== "INPUT" && this.element.tagName !== "TEXTAREA" ? this.element.textContent = s.value : this.element.value = s.value;
      }
    }
    componentWillUnmount() {
      this.destroyMask();
    }
    _inputRef(s) {
      this.element = s, this.props.inputRef && (Object.prototype.hasOwnProperty.call(this.props.inputRef, "current") ? this.props.inputRef.current = s : this.props.inputRef(s));
    }
    initMask(s) {
      s === void 0 && (s = this._extractMaskOptionsFromProps(this.props)), this.maskRef = U(this.element, s).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
    }
    destroyMask() {
      this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
    }
    _extractMaskOptionsFromProps(s) {
      const {
        ...a
      } = s;
      return Object.keys(a).filter((o) => Aw.indexOf(o) < 0).forEach((o) => {
        delete a[o];
      }), a;
    }
    _extractNonMaskProps(s) {
      const {
        ...a
      } = s;
      return Om.forEach((o) => {
        o !== "maxLength" && delete a[o];
      }), "defaultValue" in a || (a.defaultValue = s.mask ? "" : a.value), delete a.value, a;
    }
    get maskValue() {
      return this.maskRef ? this.props.unmask === "typed" ? this.maskRef.typedValue : this.props.unmask ? this.maskRef.unmaskedValue : this.maskRef.value : "";
    }
    set maskValue(s) {
      this.maskRef && (s = s == null && this.props.unmask !== "typed" ? "" : s, this.props.unmask === "typed" ? this.maskRef.typedValue = s : this.props.unmask ? this.maskRef.unmaskedValue = s : this.maskRef.value = s);
    }
    _onAccept(s) {
      this.props.onAccept && this.maskRef && this.props.onAccept(this.maskValue, this.maskRef, s);
    }
    _onComplete(s) {
      this.props.onComplete && this.maskRef && this.props.onComplete(this.maskValue, this.maskRef, s);
    }
    render() {
      return h.createElement(e, {
        ...this._extractNonMaskProps(this.props),
        inputRef: this._inputRef
      });
    }
  }, t.displayName = void 0, t.propTypes = void 0, t), r = e.displayName || e.name || "Component";
  return n.displayName = "IMask(" + r + ")", n.propTypes = Pm, h.forwardRef((i, s) => h.createElement(n, {
    ...i,
    ref: s
  }));
}
const Nw = Tw((e) => {
  let {
    inputRef: t,
    ...n
  } = e;
  return h.createElement("input", {
    ...n,
    ref: t
  });
}), Iw = (e, t) => h.createElement(Nw, {
  ...e,
  ref: t
}), Fw = h.forwardRef(Iw), Rw = (e = {}) => Object.entries(e).reduce((t, [n, r]) => (r !== void 0 && (t[n] = r), t), {}), On = (...e) => (n) => {
  e.filter((r) => typeof r == "function").forEach((r) => r(n));
}, Pw = ({
  defaultValue: e,
  value: t
}) => {
  const [n, r] = C.useState(!!e || e === 0);
  return [!!t || t === 0 || n, (a) => r(!!a.target.value)];
}, gf = (e, t) => {
  const [n, r] = C.useState([]), i = (l) => (r((u) => [...u, l]), l), s = () => {
    const l = Pu(`${e}-`);
    return i(l);
  }, a = (l) => {
    r((u) => u.filter((c) => c !== l));
  };
  return [n, (l) => {
    const [u, c] = C.useState(l);
    return C.useEffect(() => (l ? i(l) : u || c(s()), () => a(u)), [u, l]), u;
  }];
}, To = (e) => e, Ow = () => {
}, Dm = /* @__PURE__ */ h.createContext({
  getControlProps: To,
  useSetIsControlGroupEffect: Ow,
  getLabelProps: To,
  getDescriptorProps: To,
  hasFormGroupProvider: !1
}), ft = () => h.useContext(Dm);
function Dw(e) {
  const [t, n] = C.useState(e);
  return [t, (i) => {
    C.useEffect(() => n(i), [i]);
  }];
}
function $a({
  children: e,
  controlId: t,
  isInvalid: n,
  isValid: r,
  size: i
}) {
  const s = C.useMemo(() => t || Pu("form-field"), [t]), [a, o] = gf(s), [l, u] = gf(s), [c, p] = Dw(!1), E = {
    getControlProps: C.useCallback((_) => {
      const v = c ? l : void 0;
      return Rw({
        ..._,
        "aria-describedby": M(_["aria-describedby"], a) || void 0,
        "aria-labelledby": M(_["aria-labelledby"], v) || void 0,
        id: s
      });
    }, [c, a, l, s]),
    getLabelProps: (_) => {
      const v = u(_ == null ? void 0 : _.id);
      return c ? {
        ..._,
        id: v
      } : {
        ..._,
        htmlFor: s
      };
    },
    getDescriptorProps: (_) => {
      const v = o(_ == null ? void 0 : _.id);
      return {
        ..._,
        id: v
      };
    },
    useSetIsControlGroupEffect: p,
    isControlGroup: c,
    controlId: s,
    isInvalid: n,
    isValid: r,
    size: i,
    hasFormGroupProvider: !0
  };
  return /* @__PURE__ */ h.createElement(Dm.Provider, {
    value: E
  }, e);
}
const Mw = (e) => /* @__PURE__ */ C.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
  fill: "currentColor"
})), bw = (e) => /* @__PURE__ */ C.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
  fill: "currentColor"
})), Lw = (e) => /* @__PURE__ */ C.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
  fill: "currentColor"
})), Bw = (e) => /* @__PURE__ */ C.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
  fill: "currentColor"
})), Vw = (e) => /* @__PURE__ */ C.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
  fill: "currentColor"
})), jw = (e) => /* @__PURE__ */ C.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
  fill: "currentColor"
})), $w = (e) => /* @__PURE__ */ C.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
  fill: "currentColor"
})), zw = (e) => /* @__PURE__ */ C.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  xmlns: "http://www.w3.org/2000/svg",
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
  fill: "currentColor"
})), Nr = {
  SMALL: "sm",
  LARGE: "lg"
}, yt = {
  DEFAULT: "default",
  VALID: "valid",
  INVALID: "invalid",
  WARNING: "warning",
  CRITERIA_EMPTY: "criteria-empty",
  CRITERIA_VALID: "criteria-valid",
  CRITERIA_INVALID: "criteria-invalid"
}, Uw = {
  [yt.DEFAULT]: null,
  [yt.VALID]: bw,
  [yt.INVALID]: Bw,
  [yt.WARNING]: zw,
  [yt.CRITERIA_EMPTY]: $w,
  [yt.CRITERIA_VALID]: Lw,
  [yt.CRITERIA_INVALID]: Mw
}, Hw = ({
  isInvalid: e,
  isValid: t
}) => t ? yt.VALID : e ? yt.INVALID : yt.DEFAULT;
function rc({
  type: e,
  customIcon: t
}) {
  if (t)
    return t;
  const n = Uw[e];
  return n ? /* @__PURE__ */ h.createElement(Ht, {
    src: n
  }) : null;
}
rc.propTypes = {
  type: d.oneOf(Object.values(yt)),
  customIcon: d.node
};
rc.defaultProps = {
  type: void 0,
  customIcon: void 0
};
function za({
  children: e,
  type: t,
  icon: n,
  muted: r,
  hasIcon: i,
  ...s
}) {
  const a = M(s.className, "pgn__form-text", `pgn__form-text-${t}`, {
    "text-muted": r
  });
  return /* @__PURE__ */ h.createElement("div", {
    ...s,
    className: a
  }, i && /* @__PURE__ */ h.createElement(rc, {
    customIcon: n,
    type: t
  }), /* @__PURE__ */ h.createElement("div", null, e));
}
const Ww = ["default", "valid", "invalid", "warning", "criteria-empty", "criteria-valid", "criteria-invalid"];
za.propTypes = {
  /** Specifies contents of the component. */
  children: d.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: d.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: d.bool,
  /** Specifies text type, this affects styling. */
  type: d.oneOf(Ww),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: d.node,
  /** Specifies whether to show text with muted styling. */
  muted: d.bool
};
za.defaultProps = {
  hasIcon: !0,
  type: "default",
  icon: void 0,
  className: void 0,
  muted: !1
};
function gn({
  children: e,
  ...t
}) {
  const {
    getDescriptorProps: n,
    isInvalid: r,
    isValid: i
  } = ft(), s = n(t), a = M("pgn__form-control-description", t.className), o = t.type || Hw({
    isInvalid: r,
    isValid: i
  });
  return /* @__PURE__ */ h.createElement(za, {
    ...s,
    className: a,
    type: o
  }, e);
}
const Qw = ["default", "valid", "invalid", "warning", "criteria-empty", "criteria-valid", "criteria-invalid"];
gn.propTypes = {
  /** Specifies contents of the component. */
  children: d.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: d.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: d.bool,
  /** Specifies feedback type, this affects styling. */
  type: d.oneOf(Qw),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: d.node,
  /** Specifies whether to show feedback with muted styling. */
  muted: d.bool
};
gn.defaultProps = {
  hasIcon: !0,
  type: void 0,
  icon: void 0,
  className: void 0,
  muted: !1
};
function Mm({
  children: e
}) {
  const {
    controlId: t
  } = ft();
  return /* @__PURE__ */ h.createElement("div", {
    className: "pgn__form-control-floating-label"
  }, /* @__PURE__ */ h.createElement("div", {
    className: "pgn__form-control-floating-label-content"
  }, /* @__PURE__ */ h.createElement("label", {
    className: "pgn__form-control-floating-label-text",
    htmlFor: t
  }, e)));
}
Mm.propTypes = {
  children: d.node.isRequired
};
function ra({
  children: e,
  location: t
}) {
  return /* @__PURE__ */ h.createElement("div", {
    className: `pgn__form-control-decorator pgn__form-control-decorator-${t}`
  }, e);
}
ra.propTypes = {
  children: d.node.isRequired,
  location: d.oneOf(["leading", "trailing"])
};
ra.defaultProps = {
  location: "leading"
};
function ic({
  children: e,
  leadingElement: t,
  trailingElement: n,
  floatingLabel: r,
  className: i,
  ...s
}) {
  const a = ft(), o = s.size || a.size;
  return /* @__PURE__ */ h.createElement("div", {
    className: M("pgn__form-control-decorator-group", {
      "has-prepended-node": !!t,
      "has-appended-node": !!n,
      "has-leading-element": !!t,
      "has-trailing-element": !!n,
      "has-floating-label": !!r,
      "pgn__form-control-decorator-group-lg": o === Nr.LARGE,
      "pgn__form-control-decorator-group-sm": o === Nr.SMALL
    }, i),
    ...s
  }, e, t && /* @__PURE__ */ h.createElement(ra, {
    location: "leading"
  }, t), n && /* @__PURE__ */ h.createElement(ra, {
    location: "trailing"
  }, n), r && /* @__PURE__ */ h.createElement(Mm, null, r));
}
ic.propTypes = {
  children: d.node.isRequired,
  leadingElement: d.node,
  trailingElement: d.node,
  floatingLabel: d.node,
  className: d.string,
  size: d.oneOf([Nr.SMALL, Nr.LARGE])
};
ic.defaultProps = {
  leadingElement: void 0,
  trailingElement: void 0,
  floatingLabel: void 0,
  className: void 0,
  size: void 0
};
const Mr = /* @__PURE__ */ h.forwardRef(({
  as: e,
  className: t,
  controlClassName: n,
  leadingElement: r,
  trailingElement: i,
  floatingLabel: s,
  autoResize: a,
  onChange: o,
  inputMask: l,
  ...u
}, c) => {
  const {
    isInvalid: p,
    isValid: f,
    getControlProps: g,
    ...w
  } = ft(), E = h.useRef(), _ = c || E, v = u.size || w.size, [m, y] = Pw({
    defaultValue: u.defaultValue,
    value: u.value
  }), x = C.useCallback(() => {
    e === "textarea" && a && (!_.current.initialHeight && !_.current.offsets && (_.current.initialHeight = _.current.offsetHeight, _.current.offsets = _.current.offsetHeight - _.current.clientHeight), _.current.style.height = `${_.current.initialHeight}px`, _.current.style.height = `${_.current.scrollHeight + _.current.offsets}px`);
  }, [e, a, _]);
  C.useEffect(() => {
    x();
  }, [x]);
  const S = g({
    ...u,
    // eslint-disable-next-line react/prop-types
    onBlur: On(y, u.onBlur)
  }), A = (T) => {
    x(), o && o(T);
  };
  return /* @__PURE__ */ h.createElement(ic, {
    size: v,
    leadingElement: r,
    trailingElement: i,
    floatingLabel: s,
    className: t
  }, /* @__PURE__ */ h.createElement(am, {
    as: l ? Fw : e,
    ref: _,
    size: v,
    isInvalid: p,
    isValid: f,
    className: M(n, {
      "has-value": m
    }),
    onChange: A,
    mask: l,
    ...S
  }));
}), Gw = ["sm", "lg"];
Mr.Feedback = gn;
Mr.Description = gn;
Mr.propTypes = {
  /** Specifies class name to append to the base element. */
  className: d.string,
  /** Specifies base element for the control component. */
  as: d.elementType,
  /** Specifies function that is triggered on input value change. */
  onChange: d.func,
  /** Specifies default value of the input component. */
  defaultValue: d.oneOfType([d.string, d.number]),
  /** Specifies current value of the input component. */
  value: d.oneOfType([d.string, d.number]),
  /** Specifies id of the control component. */
  id: d.string,
  /** Specifies class name for the control component. */
  controlClassName: d.string,
  /** Specifies size for the control component. */
  size: d.oneOf(Gw),
  /** Specifies leading element to display for the input component. */
  leadingElement: d.node,
  /** Specifies trailing element to display for the input component. */
  trailingElement: d.node,
  /** Specifies floating label to display for the input component. */
  floatingLabel: d.node,
  /** Specifies whether to render input as plain text. */
  plaintext: d.bool,
  /** Specifies whether to display control in valid state, this affects styling. */
  isValid: d.bool,
  /** Specifies whether to display control in invalid state, this affects styling. */
  isInvalid: d.bool,
  /** Only for `as="textarea"`. Specifies whether the input can be resized according to the height of content. */
  autoResize: d.bool,
  /** Specifies what format to use for the input mask. */
  inputMask: d.string
};
Mr.defaultProps = {
  as: "input",
  className: void 0,
  id: void 0,
  controlClassName: void 0,
  onChange: void 0,
  defaultValue: void 0,
  value: void 0,
  size: void 0,
  leadingElement: void 0,
  trailingElement: void 0,
  floatingLabel: void 0,
  plaintext: !1,
  isValid: void 0,
  isInvalid: void 0,
  autoResize: !1,
  inputMask: void 0
};
function sc({
  children: e,
  isInline: t = !1,
  ...n
}) {
  const {
    size: r,
    isControlGroup: i,
    getLabelProps: s
  } = ft(), a = M("pgn__form-label", {
    "pgn__form-label-inline": t,
    "pgn__form-label-lg": r === Nr.LARGE,
    "pgn__form-label-sm": r === Nr.SMALL
  }, n.className), o = s({
    ...n,
    className: a
  }), l = i ? "p" : "label";
  return /* @__PURE__ */ h.createElement(l, o, e);
}
function Kw({
  children: e,
  controlId: t,
  isInvalid: n = !1,
  isValid: r = !1,
  size: i,
  as: s,
  ...a
}) {
  return /* @__PURE__ */ h.createElement(s ?? "div", {
    ...a,
    className: M("pgn__form-group", a.className)
  }, /* @__PURE__ */ h.createElement($a, {
    controlId: t,
    isInvalid: n,
    isValid: r,
    size: i
  }, e));
}
const Yw = (e) => e, bm = /* @__PURE__ */ h.createContext({
  getRadioControlProps: Yw,
  hasRadioSetProvider: !1
}), qw = () => C.useContext(bm);
function ac({
  children: e,
  name: t,
  onBlur: n,
  onFocus: r,
  onChange: i,
  value: s,
  defaultValue: a
}) {
  const o = !a && s !== void 0, u = {
    name: t,
    value: s,
    defaultValue: a,
    getRadioControlProps: (c) => ({
      ...c,
      name: t,
      /* istanbul ignore next */
      onBlur: c.onBlur ? On(n, c.onBlur) : n,
      /* istanbul ignore next */
      onFocus: c.onFocus ? On(r, c.onFocus) : r,
      /* istanbul ignore next */
      onChange: c.onChange ? On(i, c.onChange) : i,
      checked: o ? s === c.value : void 0,
      defaultChecked: o ? void 0 : a === c.value
    }),
    onBlur: n,
    onFocus: r,
    onChange: i,
    hasRadioSetProvider: !0
  };
  return /* @__PURE__ */ h.createElement(bm.Provider, {
    value: u
  }, e);
}
ac.propTypes = {
  children: d.node.isRequired,
  name: d.string.isRequired,
  onBlur: d.func,
  onFocus: d.func,
  onChange: d.func,
  value: d.string,
  defaultValue: d.string
};
ac.defaultProps = {
  onBlur: void 0,
  onFocus: void 0,
  onChange: void 0,
  value: void 0,
  defaultValue: void 0
};
const oc = /* @__PURE__ */ h.forwardRef((e, t) => {
  const {
    getControlProps: n
  } = ft(), {
    getRadioControlProps: r,
    hasRadioSetProvider: i
  } = qw();
  let s = n({
    ...e,
    className: M("pgn__form-radio-input", e.className)
  });
  return i && (s = r(s)), /* @__PURE__ */ h.createElement("input", {
    ...s,
    type: "radio",
    ref: t
  });
});
oc.propTypes = {
  className: d.string
};
oc.defaultProps = {
  className: void 0
};
const lc = /* @__PURE__ */ h.forwardRef(({
  children: e,
  className: t,
  controlClassName: n,
  labelClassName: r,
  description: i,
  isInvalid: s,
  isValid: a,
  ...o
}, l) => /* @__PURE__ */ h.createElement($a, {
  controlId: o.id,
  isInvalid: s,
  isValid: a
}, /* @__PURE__ */ h.createElement("div", {
  className: M("pgn__form-radio", t, {
    "pgn__form-control-valid": a,
    "pgn__form-control-invalid": s,
    "pgn__form-control-disabled": o.disabled
  })
}, /* @__PURE__ */ h.createElement(oc, {
  ref: l,
  className: n,
  ...o
}), /* @__PURE__ */ h.createElement("div", null, /* @__PURE__ */ h.createElement(sc, {
  className: r
}, e), i && /* @__PURE__ */ h.createElement(gn, {
  hasIcon: !1
}, i)))));
lc.propTypes = {
  /** Specifies id of the FormRadio component. */
  id: d.string,
  /** Specifies contents of the component. */
  children: d.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: d.string,
  /** Specifies class name for control component. */
  controlClassName: d.string,
  /** Specifies class name for label component. */
  labelClassName: d.string,
  /** Specifies description to show under the radio's value. */
  description: d.node,
  /** Specifies whether to display component in invalid state, this affects styling. */
  isInvalid: d.bool,
  /** Specifies whether to display component in valid state, this affects styling. */
  isValid: d.bool,
  /** Specifies whether the `FormRadio` is disabled. */
  disabled: d.bool
};
lc.defaultProps = {
  id: void 0,
  className: void 0,
  controlClassName: void 0,
  labelClassName: void 0,
  description: void 0,
  isInvalid: !1,
  isValid: !1,
  disabled: !1
};
function Ua({
  as: e,
  className: t,
  isInline: n,
  children: r,
  ...i
}) {
  return /* @__PURE__ */ h.createElement(e, {
    className: M(t, {
      "pgn__form-control-set": !n,
      "pgn__form-control-set-inline": n
    }),
    ...i
  }, r);
}
Ua.propTypes = {
  /** Specifies the base element */
  as: d.elementType,
  /** A class name to append to the base element. */
  className: d.string,
  /** Specifies whether the component should be displayed with inline styling. */
  isInline: d.bool,
  /** Specifies contents of the component. */
  children: d.node
};
Ua.defaultProps = {
  as: "div",
  className: void 0,
  isInline: !1,
  children: null
};
function uc({
  children: e,
  name: t,
  value: n,
  defaultValue: r,
  isInline: i,
  onChange: s,
  onFocus: a,
  onBlur: o,
  ...l
}) {
  const {
    getControlProps: u,
    useSetIsControlGroupEffect: c
  } = ft();
  c(!0);
  const p = u(l);
  return /* @__PURE__ */ h.createElement(ac, {
    name: t,
    value: n,
    defaultValue: r,
    onFocus: a,
    onBlur: o,
    onChange: s
  }, /* @__PURE__ */ h.createElement(Ua, {
    role: "radiogroup",
    isInline: i,
    ...p
  }, e));
}
uc.propTypes = {
  /** Specifies contents of the component. */
  children: d.node.isRequired,
  /** A class name to append to the base element. */
  className: d.string,
  /** Specifies name for the component. */
  name: d.string.isRequired,
  /** Specifies values for the FormRadioSet. */
  value: d.string,
  /** Specifies default values. */
  defaultValue: d.string,
  /** Specifies whether the component should be displayed with inline styling. */
  isInline: d.bool,
  /** Specifies onChange event handler. */
  onChange: d.func,
  /** Specifies onFocus event handler. */
  onFocus: d.func,
  /** Specifies onBlur event handler. */
  onBlur: d.func
};
uc.defaultProps = {
  className: void 0,
  value: void 0,
  defaultValue: void 0,
  isInline: !1,
  onChange: void 0,
  onFocus: void 0,
  onBlur: void 0
};
let ds;
const Xw = new Uint8Array(16);
function Zw() {
  if (!ds && (ds = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ds))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ds(Xw);
}
const Ce = [];
for (let e = 0; e < 256; ++e)
  Ce.push((e + 256).toString(16).slice(1));
function Jw(e, t = 0) {
  return Ce[e[t + 0]] + Ce[e[t + 1]] + Ce[e[t + 2]] + Ce[e[t + 3]] + "-" + Ce[e[t + 4]] + Ce[e[t + 5]] + "-" + Ce[e[t + 6]] + Ce[e[t + 7]] + "-" + Ce[e[t + 8]] + Ce[e[t + 9]] + "-" + Ce[e[t + 10]] + Ce[e[t + 11]] + Ce[e[t + 12]] + Ce[e[t + 13]] + Ce[e[t + 14]] + Ce[e[t + 15]];
}
const ex = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), yf = {
  randomUUID: ex
};
function tx(e, t, n) {
  if (yf.randomUUID && !e)
    return yf.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || Zw)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, Jw(r);
}
const nx = (e, t, n) => (r, i, s, ...a) => t(r) && r[i] === void 0 ? new Error(
  `${s}: ${i} is required when ${n}`
) : e(r, i, s, ...a), rx = (e, t) => t.every((n) => e[n] !== void 0), No = (e, t) => nx(
  e,
  (n) => Array.isArray(t) ? rx(n, t) : n[t] === !0,
  `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`
), Lm = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], ix = ["hover", "click", "focus"];
function cc(e) {
  return /* @__PURE__ */ h.createElement(cm, {
    ...e
  }, e.children);
}
const Ef = d.oneOf(ix);
d.node.isRequired, d.oneOfType([d.elementType, d.func]), d.func, d.func, d.func, d.func, d.func, d.func, d.func, d.oneOf(Lm), d.shape({}), d.bool, d.oneOf(["click", "mousedown"]), d.bool, d.oneOfType([d.elementType, d.func]), d.oneOfType([d.object, d.bool]);
cc.propTypes = {
  /** Specifies the content of the `OverlayTrigger`. */
  children: d.oneOfType([d.element, d.func]).isRequired,
  /** An element or text to overlay next to the target. */
  overlay: d.oneOfType([d.element, d.func]).isRequired,
  /** The initial visibility state of the `Overlay`. */
  defaultShow: d.bool,
  /** A millisecond delay amount to show and hide the `Overlay` once triggered. */
  delay: d.oneOfType([d.number, d.shape({})]),
  /** The initial flip state of the `Overlay`. */
  flip: d.bool,
  onHide: d.func,
  /**
   * A callback that fires when the user triggers a change in tooltip visibility.
   * `onToggle` is called with the desired next show, and generally should be
   * passed back to the `show` prop. `onToggle` fires after the configured `delay`.
   *
   * Controls `show`.
   */
  onToggle: d.func,
  /** The placement of the `Overlay` in relation to it's target. */
  placement: d.oneOf(Lm),
  /** A `Popper.js` config object passed to the the underlying popper instance. */
  popperConfig: d.shape({}),
  /**
   * The visibility of the `Overlay`. `show` is a controlled prop so should
   * be paired with `onToggle` to avoid breaking user interactions.
   *
   * Manually toggling show does not wait for delay to change the visibility.
   *
   * Controls `onToggle`.
   */
  show: d.bool,
  target: d.instanceOf(EventTarget),
  /** Specify which action or actions trigger `Overlay` visibility. */
  trigger: d.oneOfType([Ef, d.arrayOf(Ef)])
};
cc.defaultProps = {
  defaultShow: !1,
  delay: void 0,
  flip: void 0,
  onHide: void 0,
  onToggle: void 0,
  placement: void 0,
  popperConfig: {},
  show: void 0,
  target: void 0,
  trigger: ["hover", "focus"]
};
const sx = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], ia = /* @__PURE__ */ h.forwardRef(({
  children: e,
  variant: t,
  ...n
}, r) => /* @__PURE__ */ h.createElement(Sa, {
  ...n,
  className: M({
    "tooltip-light": t === "light"
  }, n.className),
  ref: r
}, e));
ia.propTypes = {
  ...Sa.propTypes,
  /** An html id attribute, necessary for accessibility. */
  id: d.string.isRequired,
  /**
   * Sets the direction the `Tooltip` is positioned towards.
   *
   * This is generally provided by the `Overlay` component positioning the tooltip.
   */
  placement: d.oneOf(sx),
  /**
   * An `Overlay` injected set of props for positioning the `Tooltip` arrow.
   *
   * This is generally provided by the `Overlay` component positioning the tooltip.
   */
  arrowProps: d.shape({
    ref: d.oneOfType([d.func, d.shape({
      current: d.element
    })]),
    style: d.shape({})
  }),
  /** Whether the `Overlay` is shown. */
  show: d.bool,
  /** A `Popper.js` config object passed to the the underlying popper instance. */
  popper: d.shape({}),
  /** Overrides underlying component base CSS class name */
  bsPrefix: d.string,
  /** Specifies the content of the `Tooltip` */
  children: d.node,
  /** Specifies class name to append to the base element */
  className: d.string,
  /** The visual style of the `Tooltip` */
  variant: d.string
};
ia.defaultProps = {
  ...ia.defaultProps,
  id: void 0,
  placement: "right",
  arrowProps: void 0,
  show: void 0,
  popper: void 0,
  children: void 0,
  className: void 0,
  variant: void 0,
  bsPrefix: "tooltip"
};
const dc = /* @__PURE__ */ h.forwardRef(({
  className: e,
  alt: t,
  invertColors: n = !1,
  icon: r,
  src: i,
  iconClassNames: s,
  onClick: a = () => {
  },
  size: o = "md",
  variant: l = "primary",
  iconAs: u = Ht,
  isActive: c = !1,
  children: p,
  // unused, just here because we don't want it to be part of 'attrs'
  ...f
}, g) => {
  const w = n ? "inverse-" : "", E = c ? `${l}-` : "", _ = u;
  return /* @__PURE__ */ h.createElement("button", {
    "aria-label": t,
    className: M("btn-icon", `btn-icon-${w}${l}`, `btn-icon-${o}`, {
      [`btn-icon-${w}${E}active`]: c
    }, e),
    onClick: a,
    type: "button",
    ref: g,
    ...f
  }, /* @__PURE__ */ h.createElement("span", {
    className: "btn-icon__icon-container"
  }, _ && /* @__PURE__ */ h.createElement(_, {
    className: M("btn-icon__icon", s),
    icon: r,
    src: i
  })));
});
function ax({
  tooltipPlacement: e = "top",
  tooltipContent: t,
  ...n
}) {
  const r = n.invertColors ? "inverse-" : "";
  return /* @__PURE__ */ h.createElement(cc, {
    placement: e,
    overlay: /* @__PURE__ */ h.createElement(ia, {
      id: `iconbutton-tooltip-${e}`,
      variant: r ? "light" : void 0
    }, t)
  }, /* @__PURE__ */ h.createElement(dc, {
    ...n
  }));
}
dc.IconButtonWithTooltip = ax;
const ox = /* @__PURE__ */ h.forwardRef(({
  className: e,
  screenReaderText: t,
  ...n
}, r) => {
  const i = {
    ...n,
    className: M("pgn__spinner", e),
    role: t ? "status" : void 0
  };
  return /* @__PURE__ */ h.createElement(dm, {
    ...i,
    ref: r
  }, t && /* @__PURE__ */ h.createElement("span", {
    className: "sr-only"
  }, t));
});
function lx({
  event: e,
  currentIndex: t,
  activeElement: n
}) {
  t !== -1 && (n.click(), e.preventDefault());
}
function ux({
  event: e,
  currentIndex: t,
  availableElements: n
}) {
  t === -1 && n[0].focus();
  let r;
  (e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r == null || r.focus(), e.preventDefault();
}
function cx({
  event: e,
  ignoredKeys: t = [],
  parentNode: n,
  selectors: r = "a,button,input"
}) {
  if (!n)
    return;
  const {
    key: i
  } = e;
  if (!["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Home", "End"].includes(i) || t.includes(i))
    return;
  const {
    activeElement: s
  } = document;
  if (!n.contains(s))
    return;
  const a = n.querySelectorAll(r);
  if (!a.length)
    return;
  const o = Array.from(a).findIndex((l) => l === s);
  i === "Enter" && s && lx({
    event: e,
    currentIndex: o,
    activeElement: s
  }), ux({
    event: e,
    currentIndex: o,
    availableElements: a
  });
}
function dx(e = {}) {
  const {
    selectors: t,
    ignoredKeys: n
  } = e, r = C.useRef();
  return C.useEffect(() => {
    const i = (s) => {
      cx({
        event: s,
        ignoredKeys: n,
        parentNode: r.current,
        selectors: t
      });
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [n, t]), r;
}
const wf = {
  iconButtonOpened: {
    id: "pgn.FormAutosuggest.iconButtonOpened",
    defaultMessage: "Open the options menu",
    description: "A message shown in case when the autosuggest menu is closed."
  },
  iconButtonClosed: {
    id: "pgn.FormAutosuggest.iconButtonClosed",
    defaultMessage: "Close the options menu",
    description: "A message shown in case when the autosuggest menu is opened."
  }
}, fc = /* @__PURE__ */ C.forwardRef(({
  children: e,
  arrowKeyNavigationSelector: t,
  ignoredArrowKeysNames: n,
  screenReaderText: r,
  value: i,
  isLoading: s,
  isValueRequired: a,
  valueRequiredErrorMessageText: o,
  isSelectionRequired: l,
  selectionRequiredErrorMessageText: u,
  hasCustomError: c,
  customErrorMessageText: p,
  onChange: f,
  helpMessage: g,
  ...w
}, E) => {
  const _ = ba(), v = C.useRef(), m = dx({
    selectors: t,
    ignoredKeys: n
  }), [y, x] = C.useState(!1), [S, A] = C.useState(!1), [T, N] = C.useState(!1), [O, P] = C.useState(!1), [z, j] = C.useState((i == null ? void 0 : i.userProvidedText) || ""), [H, ie] = C.useState([]), [de, Z] = C.useState(null), [Y, R] = C.useState(!0), [b, L] = C.useState(""), Q = (pe) => {
    Z(pe);
  }, $ = () => {
    ie([]), x(!1), Z(null);
  }, pt = (pe, $e) => {
    const Me = pe.currentTarget.getAttribute("data-value"), ge = pe.currentTarget.id;
    N(!0), P(!0), j(Me), f && (!i || i && Me !== i.selectionValue) && f({
      userProvidedText: Me,
      selectionValue: Me,
      selectionId: ge
    }), $(), $e && $e(pe);
  };
  function ke(pe = "") {
    let $e = h.Children.map(e, (Me) => {
      const {
        children: ge,
        onClick: Yt,
        ...Hi
      } = Me.props, br = Me.props.id ?? tx();
      return /* @__PURE__ */ h.cloneElement(Me, {
        ...Hi,
        children: ge,
        "data-value": ge,
        onClick: (Lr) => pt(Lr, Yt),
        id: br,
        onFocus: () => Q(br)
      });
    });
    return pe.length > 0 && ($e = $e.filter((Me) => Me.props.children.toLowerCase().includes(pe.toLowerCase()))), $e;
  }
  const Oe = () => {
    ie(ke(z)), R(!0), L(""), x(!0);
  }, De = () => {
    y ? $() : Oe();
  }, ht = /* @__PURE__ */ h.createElement(dc, {
    className: "pgn__form-autosuggest__icon-button",
    "data-testid": "autosuggest-iconbutton",
    tabIndex: "-1",
    src: y ? jw : Vw,
    iconAs: Ht,
    size: "sm",
    variant: "secondary",
    alt: y ? _.formatMessage(wf.iconButtonClosed) : _.formatMessage(wf.iconButtonOpened),
    onClick: De
  }), Ot = () => {
    A(!0);
  }, Wn = () => {
    if (c) {
      R(!1), L(p);
      return;
    }
    if (a && !T) {
      R(!1), L(o);
      return;
    }
    if (T && l && !O) {
      R(!1), L(u);
      return;
    }
    R(!0), L("");
  };
  C.useImperativeHandle(E, () => ({
    // expose updateErrorStateAndErrorMessage so consumers can trigger validation
    // when changing the value of the control externally
    updateErrorStateAndErrorMessage: Wn
  }));
  const $i = () => {
    A(!1), $(), Wn();
  }, Qn = (pe) => {
    if (S) {
      if (pe.key === "Escape") {
        pe.preventDefault(), v && v.current.focus(), $();
        return;
      }
      pe.key === "Tab" && $i();
    }
  }, zi = (pe) => {
    m.current && !m.current.contains(pe.target) && S && $i();
  };
  C.useEffect(() => (document.addEventListener("keydown", Qn), document.addEventListener("click", zi, !0), () => {
    document.removeEventListener("click", zi, !0), document.removeEventListener("keydown", Qn);
  })), C.useEffect(() => {
    j(i ? i.userProvidedText ?? "" : ""), N(!!i && !!i.userProvidedText), P(!!i && !!i.selectionValue);
  }, [i]);
  const Ui = () => {
    Oe();
  }, Qa = (pe) => {
    const $e = pe.target.value;
    if (!$e.length) {
      j(""), N(!1), P(!1), ie([]), $(), f && f({
        userProvidedText: "",
        selectionValue: "",
        selectionId: ""
      });
      return;
    }
    N(!0);
    const Me = ke($e);
    ie(Me);
    const ge = Me.find((Yt) => Yt.props.children.toLowerCase() === $e.toLowerCase());
    if (!ge) {
      P(!1), j($e), f && f({
        userProvidedText: $e,
        selectionValue: "",
        selectionId: ""
      });
      return;
    }
    P(!0), j(ge.props.children), f && f({
      userProvidedText: ge.props.children,
      selectionValue: ge.props.children,
      selectionId: ge.props.id
    });
  }, {
    getControlProps: Ga
  } = ft(), Gn = Ga(w);
  return /* @__PURE__ */ h.createElement("div", {
    className: "pgn__form-autosuggest__wrapper",
    ref: m,
    onFocus: Ot
  }, /* @__PURE__ */ h.createElement("div", {
    "aria-live": "assertive",
    className: "sr-only",
    "data-testid": "autosuggest-screen-reader-options-count"
  }, `${H.length} options found`), /* @__PURE__ */ h.createElement($a, {
    controlId: Gn.id,
    isInvalid: !Y
  }, /* @__PURE__ */ h.createElement(Mr, {
    ref: v,
    "aria-expanded": (H.length > 0).toString(),
    "aria-owns": "pgn__form-autosuggest__dropdown-box",
    role: "combobox",
    "aria-autocomplete": "list",
    autoComplete: "off",
    value: z,
    "aria-invalid": b,
    "aria-activedescendant": de,
    onChange: Qa,
    onClick: Ui,
    trailingElement: ht,
    "data-testid": "autosuggest-textbox-input",
    ...Gn
  }), g && Y && /* @__PURE__ */ h.createElement(gn, {
    type: "default"
  }, g), !Y && /* @__PURE__ */ h.createElement(gn, {
    type: "invalid",
    "feedback-for": Gn.name
  }, b)), /* @__PURE__ */ h.createElement("ul", {
    id: "pgn__form-autosuggest__dropdown-box",
    className: "pgn__form-autosuggest__dropdown",
    role: "listbox"
  }, s ? /* @__PURE__ */ h.createElement("div", {
    className: "pgn__form-autosuggest__dropdown-loading"
  }, /* @__PURE__ */ h.createElement(ox, {
    animation: "border",
    variant: "dark",
    screenReaderText: r,
    "data-testid": "autosuggest-loading-spinner"
  })) : H.length > 0 && H));
});
fc.defaultProps = {
  arrowKeyNavigationSelector: "a:not(:disabled),li:not(:disabled, .btn-icon),input:not(:disabled)",
  ignoredArrowKeysNames: ["ArrowRight", "ArrowLeft"],
  isLoading: !1,
  className: null,
  floatingLabel: null,
  onChange: null,
  helpMessage: "",
  placeholder: "",
  value: null,
  isValueRequired: !1,
  valueRequiredErrorMessageText: null,
  isSelectionRequired: !1,
  selectionRequiredErrorMessageText: null,
  hasCustomError: !1,
  customErrorMessageText: null,
  readOnly: !1,
  children: null,
  name: "form-autosuggest",
  screenReaderText: "loading"
};
fc.propTypes = {
  /**
   * Specifies the CSS selector string that indicates to which elements
   * the user can navigate using the arrow keys
  */
  arrowKeyNavigationSelector: d.string,
  /** Specifies ignored hook keys. */
  ignoredArrowKeysNames: d.arrayOf(d.string),
  /** Specifies loading state. */
  isLoading: d.bool,
  /** Specifies class name to append to the base element. */
  className: d.string,
  /** Specifies floating label to display for the input component. */
  floatingLabel: d.string,
  /** Specifies onChange event handler. */
  onChange: d.func,
  /** Specifies help information for the user. */
  helpMessage: d.string,
  /** Specifies the placeholder text for the input. */
  placeholder: d.string,
  /** Specifies values for the input. */
  value: d.shape({
    userProvidedText: d.string,
    selectionValue: d.string,
    selectionId: d.string
  }),
  /** Specifies if empty values trigger an error state */
  isValueRequired: d.bool,
  /** Informs user they must input a value. */
  valueRequiredErrorMessageText: No(d.string, "isValueRequired"),
  /** Specifies if freeform values trigger an error state */
  isSelectionRequired: d.bool,
  /** Informs user they must make a selection. */
  selectionRequiredErrorMessageText: No(d.string, "isSelectionRequired"),
  /** Specifies the control is in a consumer provided error state */
  hasCustomError: d.bool,
  /** Informs user of other errors. */
  customErrorMessageText: No(d.string, "hasCustomError"),
  /** Specifies the name of the base input element. */
  name: d.string,
  /** Selected list item is read-only. */
  readOnly: d.bool,
  /** Specifies the content of the `FormAutosuggest`. */
  children: d.node,
  /** Specifies the screen reader text */
  screenReaderText: d.string
};
function fx({
  as: e = "button",
  children: t,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  defaultSelected: n = !1,
  iconAfter: r,
  iconBefore: i,
  ...s
}) {
  const a = M(s.className, "pgn__menu-item");
  return /* @__PURE__ */ C.createElement(e, {
    ...s,
    className: a
  }, /* @__PURE__ */ h.createElement(h.Fragment, null, i && /* @__PURE__ */ h.createElement(Ht, {
    className: "btn-icon-before",
    src: i
  }), /* @__PURE__ */ h.createElement("span", {
    className: "pgn__menu-item-text"
  }, t), /* @__PURE__ */ h.createElement("span", {
    className: "pgn__menu-item-content-spacer"
  }), r && /* @__PURE__ */ h.createElement(Ht, {
    className: "btn-icon-after",
    src: r
  })));
}
function pc({
  children: e,
  className: t,
  onClick: n,
  ...r
}) {
  return /* @__PURE__ */ h.createElement(fx, {
    as: "li",
    "data-testid": "autosuggest-optionitem",
    role: "option",
    tabIndex: "-1",
    onClick: n,
    className: M(t, "dropdown-item"),
    ...r
  }, e);
}
pc.defaultProps = {
  className: null,
  children: null,
  onClick: null
};
pc.propTypes = {
  /** Specifies class name to append to the base element. */
  className: d.string,
  /** Specifies the text-content of the `FormAutosuggestOption`. */
  children: d.string,
  /** A click handler for the `FormAutosuggestOption` */
  onClick: d.func
};
const px = (e) => e, Bm = /* @__PURE__ */ h.createContext({
  getCheckboxControlProps: px,
  hasCheckboxSetProvider: !1
}), Vm = () => C.useContext(Bm);
function hc({
  children: e,
  name: t,
  onBlur: n,
  onFocus: r,
  onChange: i,
  value: s,
  defaultValue: a
}) {
  const o = !a && Array.isArray(s), u = {
    name: t,
    value: s,
    defaultValue: a,
    getCheckboxControlProps: (c) => ({
      ...c,
      name: t,
      /* istanbul ignore next */
      onBlur: c.onBlur ? On(n, c.onBlur) : n,
      /* istanbul ignore next */
      onFocus: c.onFocus ? On(r, c.onFocus) : r,
      /* istanbul ignore next */
      onChange: c.onChange ? On(i, c.onChange) : i,
      checked: o ? s.includes(c.value) : void 0,
      defaultChecked: o ? void 0 : a && a.includes(c.value)
    }),
    onBlur: n,
    onFocus: r,
    onChange: i,
    hasCheckboxSetProvider: !0
  };
  return /* @__PURE__ */ h.createElement(Bm.Provider, {
    value: u
  }, e);
}
hc.propTypes = {
  children: d.node.isRequired,
  name: d.string,
  onBlur: d.func,
  onFocus: d.func,
  onChange: d.func,
  value: d.arrayOf(d.string),
  defaultValue: d.arrayOf(d.string)
};
hc.defaultProps = {
  onBlur: void 0,
  name: void 0,
  onFocus: void 0,
  onChange: void 0,
  value: void 0,
  defaultValue: void 0
};
const mc = /* @__PURE__ */ h.forwardRef(({
  isIndeterminate: e,
  ...t
}, n) => {
  const {
    getCheckboxControlProps: r,
    hasCheckboxSetProvider: i
  } = Vm(), s = h.useRef(), a = n || s, {
    getControlProps: o
  } = ft();
  let l = o({
    ...t,
    className: M("pgn__form-checkbox-input", t.className)
  });
  return i && (l = r(l)), h.useEffect(() => {
    a.current && (a.current.indeterminate = e);
  }, [a, e]), /* @__PURE__ */ h.createElement("input", {
    type: "checkbox",
    ...l,
    ref: a
  });
});
mc.propTypes = {
  /** Specifies whether the checkbox should be rendered in indeterminate state. */
  isIndeterminate: d.bool,
  /** Specifies class name to append to the base element. */
  className: d.string
};
mc.defaultProps = {
  isIndeterminate: !1,
  className: void 0
};
const Ha = /* @__PURE__ */ h.forwardRef(({
  children: e,
  className: t,
  controlClassName: n,
  labelClassName: r,
  description: i,
  isInvalid: s,
  isValid: a,
  controlAs: o,
  floatLabelLeft: l,
  ...u
}, c) => {
  const {
    hasCheckboxSetProvider: p
  } = Vm(), {
    hasFormGroupProvider: f,
    useSetIsControlGroupEffect: g,
    getControlProps: w
  } = ft();
  g(!0);
  const _ = f && !p ? {
    ...w({}),
    role: "group"
  } : {}, v = /* @__PURE__ */ h.createElement(o, {
    ...u,
    className: n,
    ref: c
  });
  return /* @__PURE__ */ h.createElement($a, {
    controlId: u.id,
    isInvalid: s,
    isValid: a
  }, /* @__PURE__ */ h.createElement("div", {
    className: M("pgn__form-checkbox", t, {
      "pgn__form-control-valid": a,
      "pgn__form-control-invalid": s,
      "pgn__form-control-disabled": u.disabled,
      "pgn__form-control-label-left": !!l
    }),
    ..._
  }, v, /* @__PURE__ */ h.createElement("div", null, /* @__PURE__ */ h.createElement(sc, {
    className: r
  }, e), i && /* @__PURE__ */ h.createElement(gn, {
    hasIcon: !1
  }, i))));
});
Ha.propTypes = {
  /** Specifies id of the FormCheckbox component. */
  id: d.string,
  /** Specifies contents of the component. */
  children: d.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: d.string,
  /** Specifies class name for control component. */
  controlClassName: d.string,
  /** Specifies class name for label component. */
  labelClassName: d.string,
  /** Specifies description to show under the checkbox. */
  description: d.node,
  /** Specifies whether to display checkbox in invalid state, this affects styling. */
  isInvalid: d.bool,
  /** Specifies whether to display checkbox in valid state, this affects styling. */
  isValid: d.bool,
  /** Specifies control element. */
  controlAs: d.elementType,
  /** Specifies whether the floating label should be aligned to the left. */
  floatLabelLeft: d.bool,
  /** Specifies whether the `FormCheckbox` is disabled. */
  disabled: d.bool
};
Ha.defaultProps = {
  id: void 0,
  className: void 0,
  controlClassName: void 0,
  labelClassName: void 0,
  description: void 0,
  isInvalid: !1,
  isValid: !1,
  controlAs: mc,
  floatLabelLeft: !1,
  disabled: !1
};
const vc = /* @__PURE__ */ h.forwardRef(({
  isIndeterminate: e,
  ...t
}, n) => {
  const r = h.useRef(), i = n || r, {
    getControlProps: s
  } = ft(), a = s({
    ...t,
    className: M("pgn__form-switch-input", t.className)
  });
  return h.useEffect(() => {
    i.current && (i.current.indeterminate = e);
  }, [i, e]), /* @__PURE__ */ h.createElement("input", {
    type: "checkbox",
    ...a,
    ref: i
  });
});
vc.propTypes = {
  /** Specifies whether input should be rendered in indeterminate state. */
  isIndeterminate: d.bool,
  /** Specifies class name to append to the base element. */
  className: d.string
};
vc.defaultProps = {
  isIndeterminate: !1,
  className: void 0
};
const gc = /* @__PURE__ */ h.forwardRef(({
  children: e,
  className: t,
  helperText: n,
  ...r
}, i) => /* @__PURE__ */ h.createElement("div", {
  className: "d-inline-flex flex-column"
}, /* @__PURE__ */ h.createElement(Ha, {
  className: M("pgn__form-switch", t),
  ...r,
  role: "switch",
  ref: i,
  controlAs: vc,
  isValid: null,
  isInvalid: null,
  description: null
}, e), n && /* @__PURE__ */ h.createElement("div", {
  className: "pgn__form-switch-helper-text"
}, n)));
gc.propTypes = {
  /** Specifies contents of the component. */
  children: d.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: d.string,
  /** Specifies class name to append to the label element. */
  labelClassName: d.string,
  /** Specifies helper text to display below the switch. */
  helperText: d.node,
  /** Determines whether the label should float to the left when the switch is active. */
  floatLabelLeft: d.bool
};
gc.defaultProps = {
  className: void 0,
  labelClassName: void 0,
  helperText: void 0,
  floatLabelLeft: !1
};
function Wa({
  children: e,
  name: t,
  value: n,
  defaultValue: r,
  isInline: i,
  onChange: s,
  onFocus: a,
  onBlur: o,
  ...l
}) {
  const {
    getControlProps: u,
    useSetIsControlGroupEffect: c
  } = ft();
  c(!0);
  const p = u(l);
  return /* @__PURE__ */ h.createElement(hc, {
    name: t,
    value: n,
    defaultValue: r,
    onFocus: a,
    onBlur: o,
    onChange: s
  }, /* @__PURE__ */ h.createElement(Ua, {
    role: "group",
    isInline: i,
    ...p
  }, e));
}
Wa.propTypes = {
  /** Specifies contents of the component. */
  children: d.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: d.string,
  /** Specifies name for the component. */
  name: d.string.isRequired,
  /** Specifies values for the checkboxes. */
  value: d.arrayOf(d.string),
  /** Specifies default values for the checkboxes. */
  defaultValue: d.arrayOf(d.string),
  /** Specifies whether to display components with inline styling. */
  isInline: d.bool,
  /** Specifies onChange event handler. */
  onChange: d.func,
  /** Specifies onFocus event handler. */
  onFocus: d.func,
  /** Specifies onBlur event handler. */
  onBlur: d.func
};
Wa.defaultProps = {
  className: void 0,
  value: void 0,
  defaultValue: void 0,
  isInline: !1,
  onChange: void 0,
  onFocus: void 0,
  onBlur: void 0
};
const F = _t;
F.Control = Mr;
F.Radio = lc;
F.RadioSet = uc;
F.Autosuggest = fc;
F.AutosuggestOption = pc;
F.Checkbox = Ha;
F.CheckboxSet = Wa;
F.Switch = gc;
F.SwitchSet = Wa;
F.Label = sc;
F.Group = Kw;
F.Text = za;
const jm = /* @__PURE__ */ h.forwardRef(({
  className: e,
  children: t,
  ...n
}, r) => /* @__PURE__ */ h.createElement("div", {
  className: M("pgn__card-body", e),
  ref: r,
  ...n
}, t)), xf = "card", Io = ["primary", "secondary", "success", "danger", "warning", "info", "dark", "light"], hx = ["white", "muted"], yc = /* @__PURE__ */ h.forwardRef(({
  prefix: e,
  className: t,
  bgColor: n,
  textColor: r,
  borderColor: i,
  hasBody: s = !1,
  children: a,
  as: o = "div",
  ...l
}, u) => {
  const c = M(t, e ? `${e}-${xf}` : xf, n && `bg-${n}`, r && `text-${r}`, i && `border-${i}`);
  return /* @__PURE__ */ h.createElement(o, {
    ref: u,
    ...l,
    className: c
  }, s ? /* @__PURE__ */ h.createElement(jm, null, a) : a);
});
yc.propTypes = {
  /** Prefix for component CSS classes. */
  prefix: d.string,
  /** Background color of the card. */
  bgColor: d.oneOf(Io),
  /** Text color of the card. */
  textColor: d.oneOf([...Io, ...hx]),
  /** Border color of the card. */
  borderColor: d.oneOf(Io),
  /** Determines whether the card should render its children inside a `CardBody` wrapper. */
  hasBody: d.bool,
  /** Set a custom element for this component. */
  as: d.elementType,
  /** Additional CSS class names to apply to the card element. */
  className: d.string,
  /** The content to render inside the card. */
  children: d.node
};
const Hn = /* @__PURE__ */ C.createContext({
  orientation: "vertical",
  isLoading: !1,
  variant: "light"
});
function mx({
  orientation: e = "vertical",
  children: t,
  isLoading: n = !1,
  variant: r = "light"
}) {
  return /* @__PURE__ */ h.createElement(Hn.Provider, {
    value: {
      orientation: e,
      isLoading: n,
      variant: r
    }
  }, t);
}
const vx = h.createContext({}), $m = !0;
function gx({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: i, circle: s, direction: a, duration: o, enableAnimation: l = $m, customHighlightBackground: u }) {
  const c = {};
  return a === "rtl" && (c["--animation-direction"] = "reverse"), typeof o == "number" && (c["--animation-duration"] = `${o}s`), l || (c["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (c.width = n), (typeof r == "string" || typeof r == "number") && (c.height = r), (typeof i == "string" || typeof i == "number") && (c.borderRadius = i), s && (c.borderRadius = "50%"), typeof e < "u" && (c["--base-color"] = e), typeof t < "u" && (c["--highlight-color"] = t), typeof u == "string" && (c["--custom-highlight-background"] = u), c;
}
function Ir({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: i, circle: s = !1, style: a, ...o }) {
  var l, u, c;
  const p = h.useContext(vx), f = { ...o };
  for (const [y, x] of Object.entries(o))
    typeof x > "u" && delete f[y];
  const g = {
    ...p,
    ...f,
    circle: s
  }, w = {
    ...a,
    ...gx(g)
  };
  let E = "react-loading-skeleton";
  n && (E += ` ${n}`);
  const _ = (l = g.inline) !== null && l !== void 0 ? l : !1, v = [], m = Math.ceil(e);
  for (let y = 0; y < m; y++) {
    let x = w;
    if (m > e && y === m - 1) {
      const A = (u = x.width) !== null && u !== void 0 ? u : "100%", T = e % 1, N = typeof A == "number" ? A * T : `calc(${A} * ${T})`;
      x = { ...x, width: N };
    }
    const S = h.createElement("span", { className: E, style: x, key: y }, "‌");
    _ ? v.push(S) : v.push(h.createElement(
      h.Fragment,
      { key: y },
      S,
      h.createElement("br", null)
    ));
  }
  return h.createElement("span", { className: r, "data-testid": i, "aria-live": "polite", "aria-busy": (c = g.enableAnimation) !== null && c !== void 0 ? c : $m }, t ? v.map((y, x) => h.createElement(t, { key: x }, y)) : v);
}
const yx = 20, Ec = /* @__PURE__ */ h.forwardRef(({
  actions: e,
  className: t,
  size: n,
  subtitle: r,
  title: i,
  skeletonHeight: s,
  skeletonWidth: a
}, o) => {
  const {
    isLoading: l
  } = C.useContext(Hn), u = C.useCallback((c) => {
    if (/* @__PURE__ */ h.isValidElement(c)) {
      const {
        children: p
      } = c.props, f = {
        size: n,
        children: Array.isArray(p) ? p.map(u) : u(p)
      };
      return /* @__PURE__ */ h.cloneElement(c, f);
    }
    return c;
  }, [n]);
  return l ? /* @__PURE__ */ h.createElement("div", {
    className: M("pgn__card-header", t)
  }, /* @__PURE__ */ h.createElement(Ir, {
    containerClassName: "pgn__card-header-loader",
    height: s,
    width: a
  })) : /* @__PURE__ */ h.createElement("div", {
    className: M("pgn__card-header", t),
    ref: o
  }, /* @__PURE__ */ h.createElement("div", {
    className: "pgn__card-header-content"
  }, i && /* @__PURE__ */ h.createElement("div", {
    className: `pgn__card-header-title-${n}`
  }, i), r && /* @__PURE__ */ h.createElement("div", {
    className: `pgn__card-header-subtitle-${n}`
  }, r)), e && /* @__PURE__ */ h.createElement("div", {
    className: "pgn__card-header-actions"
  }, n !== "md" ? u(e) : e));
});
Ec.propTypes = {
  /** Optional node to render on the top right of the card header,
   *  i.e. ActionRow or a DropdownMenu.
   * */
  actions: d.node,
  /** The class name for the CardHeader component */
  className: d.string,
  /** The title for the CardHeader component */
  title: d.node,
  /** The size of the CardHeader component */
  size: d.oneOf(["sm", "md"]),
  /** The subtitle of the CardHeader component */
  subtitle: d.node,
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: d.number,
  /** Specifies width of  skeleton in loading state. */
  skeletonWidth: d.number
};
Ec.defaultProps = {
  actions: null,
  className: null,
  size: "md",
  title: null,
  subtitle: null,
  skeletonHeight: yx,
  skeletonWidth: null
};
const Ex = /* @__PURE__ */ C.forwardRef(({
  className: e,
  ...t
}, n) => /* @__PURE__ */ h.createElement("div", {
  className: M("pgn__card-divider", e),
  ref: n,
  ...t
})), wx = 100, wc = /* @__PURE__ */ h.forwardRef(({
  className: e,
  children: t,
  title: n,
  actions: r,
  muted: i,
  skeletonHeight: s,
  skeletonWidth: a
}, o) => {
  const {
    isLoading: l
  } = C.useContext(Hn);
  return l ? /* @__PURE__ */ h.createElement("div", {
    className: M("pgn__card-section", e, {
      "is-muted": i
    })
  }, /* @__PURE__ */ h.createElement(Ir, {
    containerClassName: "pgn__card-section-loader",
    height: s,
    width: a
  })) : /* @__PURE__ */ h.createElement("div", {
    className: M("pgn__card-section", e, {
      "is-muted": i
    }),
    ref: o
  }, n && /* @__PURE__ */ h.createElement("div", {
    className: "pgn__card-section-title"
  }, n), t, r && /* @__PURE__ */ h.createElement("div", {
    className: "pgn__card-section-actions"
  }, r));
});
wc.propTypes = {
  /** Specifies class name to append to the base element. */
  className: d.string,
  /** Specifies contents of the component. */
  children: d.node,
  /** Specifies title of the `Section`. */
  title: d.node,
  /** Specifies node to render on the bottom right of the `Section` (i.e. `ActionRow`). */
  actions: d.node,
  /** Specifies whether to display `Section` with muted styling. */
  muted: d.bool,
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: d.number,
  /** Specifies width of skeleton in loading state. */
  skeletonWidth: d.number
};
wc.defaultProps = {
  children: null,
  className: void 0,
  title: void 0,
  actions: void 0,
  muted: !1,
  skeletonHeight: wx,
  skeletonWidth: void 0
};
const xx = 18, xc = /* @__PURE__ */ h.forwardRef(({
  children: e,
  className: t,
  isStacked: n,
  textElement: r,
  skeletonHeight: i,
  skeletonWidth: s,
  orientation: a
}, o) => {
  const {
    orientation: l,
    isLoading: u
  } = C.useContext(Hn), c = a || l, p = `pgn__card-footer ${c}${n ? "-stacked" : ""}`, f = `pgn__card-footer-text ${c}${n ? "-stacked" : ""}`;
  return u ? /* @__PURE__ */ h.createElement("div", {
    className: M(t, p)
  }, /* @__PURE__ */ h.createElement(Ir, {
    containerClassName: "pgn__card-footer-loader",
    height: i,
    width: s
  })) : /* @__PURE__ */ h.createElement("div", {
    className: M(t, p),
    ref: o
  }, r && /* @__PURE__ */ h.createElement("div", {
    className: f
  }, r), e);
});
xc.propTypes = {
  /** Specifies contents of the component. */
  children: d.node,
  /** Specifies class name to append to the base element. */
  className: d.string,
  /** Optional node to display near actions. Should be either a plain text or an element containing text (e.g. link). */
  textElement: d.node,
  /** Specifies whether to use stacked variant. */
  isStacked: d.bool,
  /** Specifies which orientation to use. This prop will override context value if provided. */
  orientation: d.oneOf(["horizontal", "vertical"]),
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: d.number,
  /** Specifies width of skeleton in loading state. */
  skeletonWidth: d.number
};
xc.defaultProps = {
  children: null,
  className: void 0,
  textElement: void 0,
  isStacked: !1,
  orientation: void 0,
  skeletonHeight: xx,
  skeletonWidth: void 0
};
const zm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACMCAYAAAB/AhJnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7dRBEYBADACxwuDf5j0QUXywiYhc7zk7APzd3gNAgvABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIp4BaNpp2Q/3/wfPkGyXOQAAAABJRU5ErkJggg==", kx = 140, Cx = 41, kc = /* @__PURE__ */ h.forwardRef(({
  src: e,
  fallbackSrc: t,
  srcAlt: n,
  logoSrc: r,
  fallbackLogoSrc: i,
  logoAlt: s,
  skeletonHeight: a,
  skeletonWidth: o,
  logoSkeleton: l,
  logoSkeletonHeight: u,
  logoSkeletonWidth: c,
  className: p,
  imageLoadingType: f,
  skeletonDuringImageLoad: g
}, w) => {
  const {
    orientation: E,
    isLoading: _
  } = C.useContext(Hn), [v, m] = C.useState(!1), [y, x] = C.useState(!1), S = `pgn__card-wrapper-image-cap ${E}`, A = () => /* @__PURE__ */ h.createElement(Ir, {
    containerClassName: "pgn__card-image-cap-loader",
    height: E === "horizontal" ? "100%" : a,
    width: o
  }), T = () => /* @__PURE__ */ h.createElement(Ir, {
    containerClassName: "pgn__card-logo-cap",
    height: u,
    width: c
  });
  if (_)
    return /* @__PURE__ */ h.createElement("div", {
      className: M(S, p),
      "data-testid": "image-loader-wrapper"
    }, A(), l && T());
  const N = (O, P, z) => {
    const {
      currentTarget: j
    } = O;
    if (!P || j.src.endsWith(P)) {
      z === "imageCap" ? j.src = zm : x(!1);
      return;
    }
    j.src = P;
  };
  return /* @__PURE__ */ h.createElement("div", {
    className: M(p, S),
    ref: w
  }, !!e && /* @__PURE__ */ h.createElement(h.Fragment, null, g && !v && A(), /* @__PURE__ */ h.createElement("img", {
    className: M("pgn__card-image-cap", {
      show: v
    }),
    src: e,
    onError: (O) => N(O, t, "imageCap"),
    onLoad: () => m(!0),
    alt: n,
    loading: f
  })), !!r && /* @__PURE__ */ h.createElement(h.Fragment, null, g && !y && T(), /* @__PURE__ */ h.createElement("img", {
    className: M("pgn__card-logo-cap", {
      show: y
    }),
    src: r,
    onError: (O) => N(O, i, "logoCap"),
    onLoad: () => x(!0),
    alt: s,
    loading: f
  })));
});
kc.propTypes = {
  /** Specifies class name to append to the base element. */
  className: d.string,
  /** Specifies image src. */
  src: d.string,
  /** Specifies fallback image src. */
  fallbackSrc: d.string,
  /** Specifies image alt text. */
  srcAlt: d.string,
  /** Specifies logo src to put on top of the image. */
  logoSrc: d.string,
  /** Specifies fallback image logo src. */
  fallbackLogoSrc: d.string,
  /** Specifies logo image alt text. */
  logoAlt: d.string,
  /** Specifies height of Image skeleton in loading state. */
  skeletonHeight: d.number,
  /** Specifies width of Image skeleton in loading state. */
  skeletonWidth: d.number,
  /** Specifies whether the cap should be displayed during loading. */
  logoSkeleton: d.bool,
  /** Specifies height of Logo skeleton in loading state. */
  logoSkeletonHeight: d.number,
  /** Specifies width of Logo skeleton in loading state. */
  logoSkeletonWidth: d.number,
  /** Specifies loading type for images */
  imageLoadingType: d.oneOf(["eager", "lazy"]),
  /** Render the loading skeleton when the image is loading in
   *  addition to when the whole card is in `isLoading` state */
  skeletonDuringImageLoad: d.bool
};
kc.defaultProps = {
  src: void 0,
  fallbackSrc: zm,
  logoSrc: void 0,
  fallbackLogoSrc: void 0,
  className: void 0,
  srcAlt: void 0,
  logoAlt: void 0,
  skeletonHeight: kx,
  logoSkeleton: !1,
  logoSkeletonHeight: Cx,
  skeletonWidth: void 0,
  logoSkeletonWidth: void 0,
  imageLoadingType: "eager",
  skeletonDuringImageLoad: !1
};
const Cc = /* @__PURE__ */ h.forwardRef(({
  className: e,
  children: t,
  variant: n,
  icon: r,
  title: i,
  actions: s,
  ...a
}, o) => {
  const {
    isLoading: l
  } = C.useContext(Hn);
  return l ? /* @__PURE__ */ h.createElement("div", {
    className: M("pgn__card-status", e),
    "data-testid": "card-status-skeleton",
    ref: o
  }, /* @__PURE__ */ h.createElement(Ir, null)) : /* @__PURE__ */ h.createElement("div", {
    className: M("pgn__card-status", `pgn__card-status__${n}`, e),
    ref: o,
    ...a
  }, /* @__PURE__ */ h.createElement("div", {
    className: "pgn__card-status__content"
  }, r && /* @__PURE__ */ h.createElement(Ht, {
    className: "pgn__card-status__content-icon",
    src: r
  }), /* @__PURE__ */ h.createElement("div", {
    className: "pgn__card-status__message-content"
  }, i && /* @__PURE__ */ h.createElement("div", {
    className: "pgn__card-status__heading"
  }, i), t)), !!s && /* @__PURE__ */ h.createElement("div", {
    className: "pgn__card-status__actions"
  }, s));
});
Cc.propTypes = {
  /** Specifies the content of the component. */
  children: d.node.isRequired,
  /** The class to append to the base element. */
  className: d.string,
  /** Icon that will be shown in the top-left corner. */
  icon: d.func,
  /** Specifies variant to use. */
  variant: d.oneOf(["primary", "success", "danger", "warning"]),
  /** Specifies title for the `Card.Status`. */
  title: d.oneOfType([d.element, d.string]),
  /** Specifies any optional actions, e.g. button(s). */
  actions: d.node
};
Cc.defaultProps = {
  className: void 0,
  icon: void 0,
  variant: "warning",
  title: void 0,
  actions: void 0
};
const _x = ["light", "dark", "muted"], _c = /* @__PURE__ */ h.forwardRef(({
  orientation: e,
  isLoading: t,
  className: n,
  isClickable: r,
  muted: i,
  variant: s,
  ...a
}, o) => {
  const l = i ? "muted" : s;
  return /* @__PURE__ */ h.createElement(mx, {
    orientation: e,
    isLoading: t,
    variant: l
  }, /* @__PURE__ */ h.createElement(yc, {
    ...a,
    className: M(n, "pgn__card", {
      horizontal: e === "horizontal",
      clickable: r,
      [`pgn__card-${l}`]: l
    }),
    ref: o,
    tabIndex: r ? 0 : -1
  }));
});
_c.propTypes = {
  /** Specifies class name to append to the base element. */
  className: d.string,
  /** Specifies which orientation to use. */
  orientation: d.oneOf(["vertical", "horizontal"]),
  /** Specifies whether the `Card` is clickable, if `true` appropriate `hover` and `focus` styling will be added. */
  isClickable: d.bool,
  /** Specifies loading state. */
  isLoading: d.bool,
  /** Specifies `Card` style variant. */
  variant: d.oneOf(_x),
  /** **Deprecated**. Specifies whether `Card` uses `muted` variant. Use `variant="muted"` instead. */
  muted: d.bool
};
_c.defaultProps = {
  ...yc.defaultProps,
  className: void 0,
  orientation: "vertical",
  isClickable: !1,
  variant: "light",
  isLoading: !1
};
const ue = jh(_c, "Card", {
  muted: {
    deprType: ur.REMOVED,
    message: 'Use "variant" prop instead, i.e. variant="muted"'
  }
});
ue.Status = Cc;
ue.Header = Ec;
ue.Divider = Ex;
ue.Section = wc;
ue.Footer = xc;
ue.ImageCap = kc;
ue.Context = Hn;
ue.Body = jm;
const Sx = ({ bins: e, onChange: t }) => {
  const [n, r] = C.useState(null), [i, s] = C.useState({
    id: "",
    label: "",
    description: "",
    max_capacity: 0
  }), a = () => {
    s({
      id: `bin${Date.now()}`,
      label: "",
      description: "",
      max_capacity: 0
    }), r(-1);
  }, o = (p) => {
    s({ ...e[p] }), r(p);
  }, l = () => {
    if (!i.label.trim()) {
      alert("Bin label is required");
      return;
    }
    if (n === -1)
      t([...e, i]);
    else {
      const p = [...e];
      p[n] = i, t(p);
    }
    r(null);
  }, u = (p) => {
    confirm("Delete this bin?") && t(e.filter((f, g) => g !== p));
  }, c = () => {
    r(null);
  };
  return /* @__PURE__ */ k.jsxs("div", { className: "bins-step", children: [
    /* @__PURE__ */ k.jsxs("div", { className: "step-header", children: [
      /* @__PURE__ */ k.jsx("h3", { children: "Define Bins" }),
      /* @__PURE__ */ k.jsx("p", { children: "Create the categories that students will sort items into" })
    ] }),
    e.length === 0 && n === null && /* @__PURE__ */ k.jsx("div", { className: "empty-state", children: /* @__PURE__ */ k.jsx("p", { children: 'No bins defined yet. Click "Add Bin" to create your first bin.' }) }),
    e.map((p, f) => /* @__PURE__ */ k.jsx(ue, { className: "bin-card mb-3", children: /* @__PURE__ */ k.jsx(ue.Section, { children: n === f ? /* @__PURE__ */ k.jsxs("div", { className: "bin-edit-form", children: [
      /* @__PURE__ */ k.jsxs(F.Group, { className: "mb-2", children: [
        /* @__PURE__ */ k.jsx(F.Label, { children: "Label *" }),
        /* @__PURE__ */ k.jsx(
          F.Control,
          {
            type: "text",
            value: i.label,
            onChange: (g) => s({ ...i, label: g.target.value }),
            placeholder: "e.g., Mammals"
          }
        )
      ] }),
      /* @__PURE__ */ k.jsxs(F.Group, { className: "mb-2", children: [
        /* @__PURE__ */ k.jsx(F.Label, { children: "Description" }),
        /* @__PURE__ */ k.jsx(
          F.Control,
          {
            as: "textarea",
            rows: 2,
            value: i.description,
            onChange: (g) => s({ ...i, description: g.target.value }),
            placeholder: "Optional description for students"
          }
        )
      ] }),
      /* @__PURE__ */ k.jsxs(F.Group, { className: "mb-2", children: [
        /* @__PURE__ */ k.jsx(F.Label, { children: "Max Capacity (0 = unlimited)" }),
        /* @__PURE__ */ k.jsx(
          F.Control,
          {
            type: "number",
            min: "0",
            value: i.max_capacity,
            onChange: (g) => s({ ...i, max_capacity: parseInt(g.target.value) || 0 })
          }
        )
      ] }),
      /* @__PURE__ */ k.jsxs("div", { className: "form-actions", children: [
        /* @__PURE__ */ k.jsx(Ee, { variant: "primary", size: "sm", onClick: l, children: "Save" }),
        /* @__PURE__ */ k.jsx(Ee, { variant: "outline-secondary", size: "sm", onClick: c, children: "Cancel" })
      ] })
    ] }) : /* @__PURE__ */ k.jsxs("div", { className: "bin-display", children: [
      /* @__PURE__ */ k.jsxs("div", { className: "bin-info", children: [
        /* @__PURE__ */ k.jsx("strong", { children: p.label }),
        p.description && /* @__PURE__ */ k.jsx("p", { className: "text-muted", children: p.description }),
        /* @__PURE__ */ k.jsxs("small", { className: "text-muted", children: [
          "Capacity: ",
          p.max_capacity === 0 ? "Unlimited" : p.max_capacity
        ] })
      ] }),
      /* @__PURE__ */ k.jsxs("div", { className: "bin-actions", children: [
        /* @__PURE__ */ k.jsx(Ee, { variant: "outline-primary", size: "sm", onClick: () => o(f), children: "Edit" }),
        /* @__PURE__ */ k.jsx(Ee, { variant: "outline-danger", size: "sm", onClick: () => u(f), children: "Delete" })
      ] })
    ] }) }) }, p.id)),
    n === -1 && /* @__PURE__ */ k.jsx(ue, { className: "bin-card mb-3", children: /* @__PURE__ */ k.jsx(ue.Section, { children: /* @__PURE__ */ k.jsxs("div", { className: "bin-edit-form", children: [
      /* @__PURE__ */ k.jsxs(F.Group, { className: "mb-2", children: [
        /* @__PURE__ */ k.jsx(F.Label, { children: "Label *" }),
        /* @__PURE__ */ k.jsx(
          F.Control,
          {
            type: "text",
            value: i.label,
            onChange: (p) => s({ ...i, label: p.target.value }),
            placeholder: "e.g., Mammals"
          }
        )
      ] }),
      /* @__PURE__ */ k.jsxs(F.Group, { className: "mb-2", children: [
        /* @__PURE__ */ k.jsx(F.Label, { children: "Description" }),
        /* @__PURE__ */ k.jsx(
          F.Control,
          {
            as: "textarea",
            rows: 2,
            value: i.description,
            onChange: (p) => s({ ...i, description: p.target.value }),
            placeholder: "Optional description for students"
          }
        )
      ] }),
      /* @__PURE__ */ k.jsxs(F.Group, { className: "mb-2", children: [
        /* @__PURE__ */ k.jsx(F.Label, { children: "Max Capacity (0 = unlimited)" }),
        /* @__PURE__ */ k.jsx(
          F.Control,
          {
            type: "number",
            min: "0",
            value: i.max_capacity,
            onChange: (p) => s({ ...i, max_capacity: parseInt(p.target.value) || 0 })
          }
        )
      ] }),
      /* @__PURE__ */ k.jsxs("div", { className: "form-actions", children: [
        /* @__PURE__ */ k.jsx(Ee, { variant: "primary", size: "sm", onClick: l, children: "Save" }),
        /* @__PURE__ */ k.jsx(Ee, { variant: "outline-secondary", size: "sm", onClick: c, children: "Cancel" })
      ] })
    ] }) }) }),
    n === null && /* @__PURE__ */ k.jsx(Ee, { variant: "outline-primary", onClick: a, children: "+ Add Bin" })
  ] });
}, Ax = ({ items: e, bins: t, onChange: n }) => {
  const [r, i] = C.useState(null), [s, a] = C.useState({
    id: "",
    type: "text",
    content: "",
    correct_bin_id: ""
  }), o = () => {
    var f;
    a({
      id: `item${Date.now()}`,
      type: "text",
      content: "",
      correct_bin_id: ((f = t[0]) == null ? void 0 : f.id) || ""
    }), i(-1);
  }, l = (f) => {
    a({ ...e[f] }), i(f);
  }, u = () => {
    if (!s.content.trim()) {
      alert("Item content is required");
      return;
    }
    if (!s.correct_bin_id) {
      alert("Please select the correct bin for this item");
      return;
    }
    if (r === -1)
      n([...e, s]);
    else {
      const f = [...e];
      f[r] = s, n(f);
    }
    i(null);
  }, c = (f) => {
    confirm("Delete this item?") && n(e.filter((g, w) => w !== f));
  }, p = () => {
    i(null);
  };
  return t.length === 0 ? /* @__PURE__ */ k.jsx("div", { className: "items-step", children: /* @__PURE__ */ k.jsx("div", { className: "alert alert-warning", children: "Please define at least one bin before adding items." }) }) : /* @__PURE__ */ k.jsxs("div", { className: "items-step", children: [
    /* @__PURE__ */ k.jsxs("div", { className: "step-header", children: [
      /* @__PURE__ */ k.jsx("h3", { children: "Define Items" }),
      /* @__PURE__ */ k.jsx("p", { children: "Create the items that students will sort into bins" })
    ] }),
    e.length === 0 && r === null && /* @__PURE__ */ k.jsx("div", { className: "empty-state", children: /* @__PURE__ */ k.jsx("p", { children: 'No items defined yet. Click "Add Item" to create your first item.' }) }),
    e.map((f, g) => {
      var w;
      return /* @__PURE__ */ k.jsx(ue, { className: "item-card mb-3", children: /* @__PURE__ */ k.jsx(ue.Section, { children: r === g ? /* @__PURE__ */ k.jsxs("div", { className: "item-edit-form", children: [
        /* @__PURE__ */ k.jsxs(F.Group, { className: "mb-2", children: [
          /* @__PURE__ */ k.jsx(F.Label, { children: "Type" }),
          /* @__PURE__ */ k.jsxs(
            F.Control,
            {
              as: "select",
              value: s.type,
              onChange: (E) => a({ ...s, type: E.target.value }),
              children: [
                /* @__PURE__ */ k.jsx("option", { value: "text", children: "Text" }),
                /* @__PURE__ */ k.jsx("option", { value: "image", children: "Image (URL)" }),
                /* @__PURE__ */ k.jsx("option", { value: "html", children: "HTML" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ k.jsxs(F.Group, { className: "mb-2", children: [
          /* @__PURE__ */ k.jsx(F.Label, { children: "Content *" }),
          s.type === "html" ? /* @__PURE__ */ k.jsx(
            F.Control,
            {
              as: "textarea",
              rows: 3,
              value: s.content,
              onChange: (E) => a({ ...s, content: E.target.value }),
              placeholder: "HTML content"
            }
          ) : /* @__PURE__ */ k.jsx(
            F.Control,
            {
              type: "text",
              value: s.content,
              onChange: (E) => a({ ...s, content: E.target.value }),
              placeholder: s.type === "image" ? "Image URL" : "Text content"
            }
          )
        ] }),
        /* @__PURE__ */ k.jsxs(F.Group, { className: "mb-2", children: [
          /* @__PURE__ */ k.jsx(F.Label, { children: "Correct Bin *" }),
          /* @__PURE__ */ k.jsx(
            F.Control,
            {
              as: "select",
              value: s.correct_bin_id,
              onChange: (E) => a({ ...s, correct_bin_id: E.target.value }),
              children: t.map((E) => /* @__PURE__ */ k.jsx("option", { value: E.id, children: E.label }, E.id))
            }
          )
        ] }),
        /* @__PURE__ */ k.jsxs("div", { className: "form-actions", children: [
          /* @__PURE__ */ k.jsx(Ee, { variant: "primary", size: "sm", onClick: u, children: "Save" }),
          /* @__PURE__ */ k.jsx(Ee, { variant: "outline-secondary", size: "sm", onClick: p, children: "Cancel" })
        ] })
      ] }) : /* @__PURE__ */ k.jsxs("div", { className: "item-display", children: [
        /* @__PURE__ */ k.jsxs("div", { className: "item-info", children: [
          /* @__PURE__ */ k.jsx("div", { className: "item-type-badge", children: f.type }),
          /* @__PURE__ */ k.jsxs("div", { className: "item-content", children: [
            f.type === "text" && /* @__PURE__ */ k.jsx("span", { children: f.content }),
            f.type === "image" && /* @__PURE__ */ k.jsx("img", { src: f.content, alt: "Item", style: { maxWidth: "100px" } }),
            f.type === "html" && /* @__PURE__ */ k.jsx("div", { dangerouslySetInnerHTML: { __html: f.content } })
          ] }),
          /* @__PURE__ */ k.jsxs("small", { className: "text-muted", children: [
            "Correct bin: ",
            ((w = t.find((E) => E.id === f.correct_bin_id)) == null ? void 0 : w.label) || "Unknown"
          ] })
        ] }),
        /* @__PURE__ */ k.jsxs("div", { className: "item-actions", children: [
          /* @__PURE__ */ k.jsx(Ee, { variant: "outline-primary", size: "sm", onClick: () => l(g), children: "Edit" }),
          /* @__PURE__ */ k.jsx(Ee, { variant: "outline-danger", size: "sm", onClick: () => c(g), children: "Delete" })
        ] })
      ] }) }) }, f.id);
    }),
    r === -1 && /* @__PURE__ */ k.jsx(ue, { className: "item-card mb-3", children: /* @__PURE__ */ k.jsx(ue.Section, { children: /* @__PURE__ */ k.jsxs("div", { className: "item-edit-form", children: [
      /* @__PURE__ */ k.jsxs(F.Group, { className: "mb-2", children: [
        /* @__PURE__ */ k.jsx(F.Label, { children: "Type" }),
        /* @__PURE__ */ k.jsxs(
          F.Control,
          {
            as: "select",
            value: s.type,
            onChange: (f) => a({ ...s, type: f.target.value }),
            children: [
              /* @__PURE__ */ k.jsx("option", { value: "text", children: "Text" }),
              /* @__PURE__ */ k.jsx("option", { value: "image", children: "Image (URL)" }),
              /* @__PURE__ */ k.jsx("option", { value: "html", children: "HTML" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ k.jsxs(F.Group, { className: "mb-2", children: [
        /* @__PURE__ */ k.jsx(F.Label, { children: "Content *" }),
        s.type === "html" ? /* @__PURE__ */ k.jsx(
          F.Control,
          {
            as: "textarea",
            rows: 3,
            value: s.content,
            onChange: (f) => a({ ...s, content: f.target.value }),
            placeholder: "HTML content"
          }
        ) : /* @__PURE__ */ k.jsx(
          F.Control,
          {
            type: "text",
            value: s.content,
            onChange: (f) => a({ ...s, content: f.target.value }),
            placeholder: s.type === "image" ? "Image URL" : "Text content"
          }
        )
      ] }),
      /* @__PURE__ */ k.jsxs(F.Group, { className: "mb-2", children: [
        /* @__PURE__ */ k.jsx(F.Label, { children: "Correct Bin *" }),
        /* @__PURE__ */ k.jsx(
          F.Control,
          {
            as: "select",
            value: s.correct_bin_id,
            onChange: (f) => a({ ...s, correct_bin_id: f.target.value }),
            children: t.map((f) => /* @__PURE__ */ k.jsx("option", { value: f.id, children: f.label }, f.id))
          }
        )
      ] }),
      /* @__PURE__ */ k.jsxs("div", { className: "form-actions", children: [
        /* @__PURE__ */ k.jsx(Ee, { variant: "primary", size: "sm", onClick: u, children: "Save" }),
        /* @__PURE__ */ k.jsx(Ee, { variant: "outline-secondary", size: "sm", onClick: p, children: "Cancel" })
      ] })
    ] }) }) }),
    r === null && /* @__PURE__ */ k.jsx(Ee, { variant: "outline-primary", onClick: o, children: "+ Add Item" })
  ] });
}, Tx = ({ settings: e, onChange: t }) => {
  const n = (r, i) => {
    t({ ...e, [r]: i });
  };
  return /* @__PURE__ */ k.jsxs("div", { className: "settings-step", children: [
    /* @__PURE__ */ k.jsxs("div", { className: "step-header", children: [
      /* @__PURE__ */ k.jsx("h3", { children: "Problem Settings" }),
      /* @__PURE__ */ k.jsx("p", { children: "Configure problem details and grading options" })
    ] }),
    /* @__PURE__ */ k.jsxs(ue, { className: "mb-3", children: [
      /* @__PURE__ */ k.jsx(ue.Header, { title: "Basic Information" }),
      /* @__PURE__ */ k.jsxs(ue.Section, { children: [
        /* @__PURE__ */ k.jsxs(F.Group, { className: "mb-3", children: [
          /* @__PURE__ */ k.jsx(F.Label, { children: "Display Name *" }),
          /* @__PURE__ */ k.jsx(
            F.Control,
            {
              type: "text",
              value: e.display_name,
              onChange: (r) => n("display_name", r.target.value),
              placeholder: "e.g., Animal Classification"
            }
          ),
          /* @__PURE__ */ k.jsx(F.Text, { children: "The name shown in the course outline" })
        ] }),
        /* @__PURE__ */ k.jsxs(F.Group, { className: "mb-3", children: [
          /* @__PURE__ */ k.jsx(F.Label, { children: "Problem Title *" }),
          /* @__PURE__ */ k.jsx(
            F.Control,
            {
              type: "text",
              value: e.problem_title,
              onChange: (r) => n("problem_title", r.target.value),
              placeholder: "e.g., Sort animals into their categories"
            }
          ),
          /* @__PURE__ */ k.jsx(F.Text, { children: "The title shown to students at the top of the problem" })
        ] }),
        /* @__PURE__ */ k.jsxs(F.Group, { className: "mb-3", children: [
          /* @__PURE__ */ k.jsx(F.Label, { children: "Instructions" }),
          /* @__PURE__ */ k.jsx(
            F.Control,
            {
              as: "textarea",
              rows: 3,
              value: e.instructions,
              onChange: (r) => n("instructions", r.target.value),
              placeholder: "Instructions for students (HTML supported)"
            }
          ),
          /* @__PURE__ */ k.jsx(F.Text, { children: "Instructions shown to students (supports HTML)" })
        ] }),
        /* @__PURE__ */ k.jsxs(F.Group, { children: [
          /* @__PURE__ */ k.jsx(F.Label, { children: "Explanation (Optional)" }),
          /* @__PURE__ */ k.jsx(
            F.Control,
            {
              as: "textarea",
              rows: 3,
              value: e.explanation,
              onChange: (r) => n("explanation", r.target.value),
              placeholder: "Explanation shown after submission"
            }
          ),
          /* @__PURE__ */ k.jsx(F.Text, { children: "Shown to students after they submit (supports HTML)" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ k.jsxs(ue, { className: "mb-3", children: [
      /* @__PURE__ */ k.jsx(ue.Header, { title: "Grading Settings" }),
      /* @__PURE__ */ k.jsxs(ue.Section, { children: [
        /* @__PURE__ */ k.jsxs(F.Group, { className: "mb-3", children: [
          /* @__PURE__ */ k.jsx(F.Label, { children: "Weight (Points)" }),
          /* @__PURE__ */ k.jsx(
            F.Control,
            {
              type: "number",
              min: "0",
              step: "0.1",
              value: e.weight,
              onChange: (r) => n("weight", parseFloat(r.target.value) || 0)
            }
          ),
          /* @__PURE__ */ k.jsx(F.Text, { children: "Maximum points for this problem" })
        ] }),
        /* @__PURE__ */ k.jsxs(F.Group, { className: "mb-3", children: [
          /* @__PURE__ */ k.jsx(F.Label, { children: "Maximum Attempts" }),
          /* @__PURE__ */ k.jsx(
            F.Control,
            {
              type: "number",
              min: "0",
              value: e.max_attempts,
              onChange: (r) => n("max_attempts", parseInt(r.target.value) || 0)
            }
          ),
          /* @__PURE__ */ k.jsx(F.Text, { children: "Number of attempts allowed (0 = unlimited)" })
        ] }),
        /* @__PURE__ */ k.jsxs(F.Group, { className: "mb-3", children: [
          /* @__PURE__ */ k.jsx(F.Label, { children: "Grading Mode" }),
          /* @__PURE__ */ k.jsxs(
            F.Control,
            {
              as: "select",
              value: e.grading_mode,
              onChange: (r) => n("grading_mode", r.target.value),
              children: [
                /* @__PURE__ */ k.jsx("option", { value: "partial_credit", children: "Partial Credit" }),
                /* @__PURE__ */ k.jsx("option", { value: "all_or_nothing", children: "All or Nothing" })
              ]
            }
          ),
          /* @__PURE__ */ k.jsxs(F.Text, { children: [
            /* @__PURE__ */ k.jsx("strong", { children: "Partial Credit:" }),
            " Points based on number of correctly placed items",
            /* @__PURE__ */ k.jsx("br", {}),
            /* @__PURE__ */ k.jsx("strong", { children: "All or Nothing:" }),
            " Full points only if all items are correct"
          ] })
        ] }),
        /* @__PURE__ */ k.jsxs(F.Group, { className: "mb-3", children: [
          /* @__PURE__ */ k.jsx(F.Label, { children: "Show Correct Answers" }),
          /* @__PURE__ */ k.jsxs(
            F.Control,
            {
              as: "select",
              value: e.show_correct_answers,
              onChange: (r) => n("show_correct_answers", r.target.value),
              children: [
                /* @__PURE__ */ k.jsx("option", { value: "never", children: "Never" }),
                /* @__PURE__ */ k.jsx("option", { value: "after_attempts", children: "After Max Attempts" }),
                /* @__PURE__ */ k.jsx("option", { value: "always", children: "Always" })
              ]
            }
          ),
          /* @__PURE__ */ k.jsx(F.Text, { children: "When to show students the correct answers" })
        ] }),
        /* @__PURE__ */ k.jsxs(F.Group, { children: [
          /* @__PURE__ */ k.jsx(F.Label, { children: "Feedback Mode" }),
          /* @__PURE__ */ k.jsxs(
            F.Control,
            {
              as: "select",
              value: e.show_feedback_mode,
              onChange: (r) => n("show_feedback_mode", r.target.value),
              children: [
                /* @__PURE__ */ k.jsx("option", { value: "on_submit", children: "On Submit" }),
                /* @__PURE__ */ k.jsx("option", { value: "immediate", children: "Immediate Feedback" })
              ]
            }
          ),
          /* @__PURE__ */ k.jsxs(F.Text, { children: [
            /* @__PURE__ */ k.jsx("strong", { children: "On Submit:" }),
            " Show feedback after clicking Submit button",
            /* @__PURE__ */ k.jsx("br", {}),
            /* @__PURE__ */ k.jsx("strong", { children: "Immediate:" }),
            " Show correctness feedback as items are placed"
          ] })
        ] })
      ] })
    ] })
  ] });
}, Nx = ({
  runtime: e,
  fields: t
}) => {
  const [n, r] = C.useState("bins"), [i, s] = C.useState(t.bins), [a, o] = C.useState(t.items), [l, u] = C.useState({
    display_name: t.display_name,
    problem_title: t.problem_title,
    instructions: t.instructions,
    explanation: t.explanation,
    weight: t.weight,
    max_attempts: t.max_attempts,
    grading_mode: t.grading_mode,
    show_correct_answers: t.show_correct_answers,
    show_feedback_mode: t.show_feedback_mode || "on_submit"
  }), [c, p] = C.useState(!1), [f, g] = C.useState(null), w = async () => {
    if (!l.display_name.trim()) {
      g({ type: "danger", text: "Display name is required" }), r("settings");
      return;
    }
    if (i.length === 0) {
      g({ type: "danger", text: "At least one bin is required" }), r("bins");
      return;
    }
    if (a.length === 0) {
      g({ type: "danger", text: "At least one item is required" }), r("items");
      return;
    }
    p(!0), g(null), e.notify && e.notify("save", { state: "start" });
    try {
      const v = await pw(e, "save_data", {
        display_name: l.display_name,
        problem_title: l.problem_title,
        instructions: l.instructions,
        explanation: l.explanation,
        weight: l.weight,
        max_attempts: l.max_attempts,
        grading_mode: l.grading_mode,
        show_correct_answers: l.show_correct_answers,
        show_feedback_mode: l.show_feedback_mode,
        bins: i,
        items: a
      });
      v.success ? (g({ type: "success", text: "Changes saved successfully!" }), e.notify && e.notify("save", { state: "end" })) : (g({ type: "danger", text: v.error || "Failed to save changes" }), e.notify && e.notify("save", { state: "end" }));
    } catch (v) {
      g({ type: "danger", text: "An error occurred while saving" }), console.error("Save error:", v), e.notify && e.notify("save", { state: "end" });
    } finally {
      p(!1);
    }
  }, E = () => {
    e.notify && e.notify("cancel", {});
  }, _ = [
    { id: "bins", label: "1. Bins", icon: "📦" },
    { id: "items", label: "2. Items", icon: "🎯" },
    { id: "settings", label: "3. Settings", icon: "⚙️" }
  ];
  return /* @__PURE__ */ k.jsxs("div", { className: "sort-into-bins-studio-view", children: [
    /* @__PURE__ */ k.jsxs("div", { className: "studio-header", children: [
      /* @__PURE__ */ k.jsx("h2", { children: "Sort Into Bins - Problem Editor" }),
      /* @__PURE__ */ k.jsx("p", { className: "text-muted", children: "Create a problem where students drag items into categorized bins" })
    ] }),
    f && /* @__PURE__ */ k.jsx(
      tc,
      {
        variant: f.type,
        dismissible: !0,
        onClose: () => g(null),
        children: f.text
      }
    ),
    /* @__PURE__ */ k.jsx("div", { className: "wizard-navigation", children: _.map((v) => /* @__PURE__ */ k.jsxs(
      "button",
      {
        type: "button",
        className: `wizard-nav-button ${n === v.id ? "active" : ""}`,
        onClick: () => r(v.id),
        children: [
          /* @__PURE__ */ k.jsx("span", { className: "wizard-nav-icon", children: v.icon }),
          /* @__PURE__ */ k.jsx("span", { className: "wizard-nav-label", children: v.label })
        ]
      },
      v.id
    )) }),
    /* @__PURE__ */ k.jsxs("div", { className: "wizard-content", children: [
      n === "bins" && /* @__PURE__ */ k.jsx(Sx, { bins: i, onChange: s }),
      n === "items" && /* @__PURE__ */ k.jsx(Ax, { items: a, bins: i, onChange: o }),
      n === "settings" && /* @__PURE__ */ k.jsx(Tx, { settings: l, onChange: u })
    ] }),
    /* @__PURE__ */ k.jsxs("div", { className: "studio-actions", children: [
      /* @__PURE__ */ k.jsx(Ee, { variant: "outline-secondary", onClick: E, disabled: c, children: "Cancel" }),
      n !== "settings" && /* @__PURE__ */ k.jsx(
        Ee,
        {
          variant: "primary",
          onClick: () => {
            const v = _.findIndex((m) => m.id === n);
            v < _.length - 1 && r(_[v + 1].id);
          },
          children: "Next Step"
        }
      ),
      /* @__PURE__ */ k.jsx(Ee, { variant: "primary", onClick: w, disabled: c, children: c ? "Saving..." : "Save" })
    ] })
  ] });
}, Px = (e, t, n) => {
  if (!t) {
    console.error("No element provided to renderBlock");
    return;
  }
  e.element = t, Mh(t).render(
    /* @__PURE__ */ k.jsx(C.StrictMode, { children: /* @__PURE__ */ k.jsx(
      Nx,
      {
        runtime: e,
        fields: n.fields
      }
    ) })
  );
};
export {
  Px as renderBlock
};
//# sourceMappingURL=studio-ui.js.map
