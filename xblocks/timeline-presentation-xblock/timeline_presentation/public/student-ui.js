var V6 = Object.defineProperty;
var j6 = (t, e, n) => e in t ? V6(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Xg = (t, e, n) => j6(t, typeof e != "symbol" ? e + "" : e, n);
var Kg = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ua(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var _v = { exports: {} }, oc = {}, Sv = { exports: {} }, xe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ga = Symbol.for("react.element"), W6 = Symbol.for("react.portal"), X6 = Symbol.for("react.fragment"), K6 = Symbol.for("react.strict_mode"), Y6 = Symbol.for("react.profiler"), Q6 = Symbol.for("react.provider"), $6 = Symbol.for("react.context"), q6 = Symbol.for("react.forward_ref"), Z6 = Symbol.for("react.suspense"), J6 = Symbol.for("react.memo"), e8 = Symbol.for("react.lazy"), Yg = Symbol.iterator;
function t8(t) {
  return t === null || typeof t != "object" ? null : (t = Yg && t[Yg] || t["@@iterator"], typeof t == "function" ? t : null);
}
var wv = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, xv = Object.assign, Ev = {};
function hs(t, e, n) {
  this.props = t, this.context = e, this.refs = Ev, this.updater = n || wv;
}
hs.prototype.isReactComponent = {};
hs.prototype.setState = function(t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, t, e, "setState");
};
hs.prototype.forceUpdate = function(t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function Cv() {
}
Cv.prototype = hs.prototype;
function H0(t, e, n) {
  this.props = t, this.context = e, this.refs = Ev, this.updater = n || wv;
}
var z0 = H0.prototype = new Cv();
z0.constructor = H0;
xv(z0, hs.prototype);
z0.isPureReactComponent = !0;
var Qg = Array.isArray, Pv = Object.prototype.hasOwnProperty, b0 = { current: null }, Tv = { key: !0, ref: !0, __self: !0, __source: !0 };
function kv(t, e, n) {
  var r, o = {}, a = null, l = null;
  if (e != null) for (r in e.ref !== void 0 && (l = e.ref), e.key !== void 0 && (a = "" + e.key), e) Pv.call(e, r) && !Tv.hasOwnProperty(r) && (o[r] = e[r]);
  var c = arguments.length - 2;
  if (c === 1) o.children = n;
  else if (1 < c) {
    for (var h = Array(c), d = 0; d < c; d++) h[d] = arguments[d + 2];
    o.children = h;
  }
  if (t && t.defaultProps) for (r in c = t.defaultProps, c) o[r] === void 0 && (o[r] = c[r]);
  return { $$typeof: Ga, type: t, key: a, ref: l, props: o, _owner: b0.current };
}
function n8(t, e) {
  return { $$typeof: Ga, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner };
}
function V0(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Ga;
}
function r8(t) {
  var e = { "=": "=0", ":": "=2" };
  return "$" + t.replace(/[=:]/g, function(n) {
    return e[n];
  });
}
var $g = /\/+/g;
function Hf(t, e) {
  return typeof t == "object" && t !== null && t.key != null ? r8("" + t.key) : e.toString(36);
}
function pu(t, e, n, r, o) {
  var a = typeof t;
  (a === "undefined" || a === "boolean") && (t = null);
  var l = !1;
  if (t === null) l = !0;
  else switch (a) {
    case "string":
    case "number":
      l = !0;
      break;
    case "object":
      switch (t.$$typeof) {
        case Ga:
        case W6:
          l = !0;
      }
  }
  if (l) return l = t, o = o(l), t = r === "" ? "." + Hf(l, 0) : r, Qg(o) ? (n = "", t != null && (n = t.replace($g, "$&/") + "/"), pu(o, e, n, "", function(d) {
    return d;
  })) : o != null && (V0(o) && (o = n8(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace($g, "$&/") + "/") + t)), e.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Qg(t)) for (var c = 0; c < t.length; c++) {
    a = t[c];
    var h = r + Hf(a, c);
    l += pu(a, e, n, h, o);
  }
  else if (h = t8(t), typeof h == "function") for (t = h.call(t), c = 0; !(a = t.next()).done; ) a = a.value, h = r + Hf(a, c++), l += pu(a, e, n, h, o);
  else if (a === "object") throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function jl(t, e, n) {
  if (t == null) return t;
  var r = [], o = 0;
  return pu(t, r, "", "", function(a) {
    return e.call(n, a, o++);
  }), r;
}
function i8(t) {
  if (t._status === -1) {
    var e = t._result;
    e = e(), e.then(function(n) {
      (t._status === 0 || t._status === -1) && (t._status = 1, t._result = n);
    }, function(n) {
      (t._status === 0 || t._status === -1) && (t._status = 2, t._result = n);
    }), t._status === -1 && (t._status = 0, t._result = e);
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var Qt = { current: null }, gu = { transition: null }, o8 = { ReactCurrentDispatcher: Qt, ReactCurrentBatchConfig: gu, ReactCurrentOwner: b0 };
function Nv() {
  throw Error("act(...) is not supported in production builds of React.");
}
xe.Children = { map: jl, forEach: function(t, e, n) {
  jl(t, function() {
    e.apply(this, arguments);
  }, n);
}, count: function(t) {
  var e = 0;
  return jl(t, function() {
    e++;
  }), e;
}, toArray: function(t) {
  return jl(t, function(e) {
    return e;
  }) || [];
}, only: function(t) {
  if (!V0(t)) throw Error("React.Children.only expected to receive a single React element child.");
  return t;
} };
xe.Component = hs;
xe.Fragment = X6;
xe.Profiler = Y6;
xe.PureComponent = H0;
xe.StrictMode = K6;
xe.Suspense = Z6;
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = o8;
xe.act = Nv;
xe.cloneElement = function(t, e, n) {
  if (t == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
  var r = xv({}, t.props), o = t.key, a = t.ref, l = t._owner;
  if (e != null) {
    if (e.ref !== void 0 && (a = e.ref, l = b0.current), e.key !== void 0 && (o = "" + e.key), t.type && t.type.defaultProps) var c = t.type.defaultProps;
    for (h in e) Pv.call(e, h) && !Tv.hasOwnProperty(h) && (r[h] = e[h] === void 0 && c !== void 0 ? c[h] : e[h]);
  }
  var h = arguments.length - 2;
  if (h === 1) r.children = n;
  else if (1 < h) {
    c = Array(h);
    for (var d = 0; d < h; d++) c[d] = arguments[d + 2];
    r.children = c;
  }
  return { $$typeof: Ga, type: t.type, key: o, ref: a, props: r, _owner: l };
};
xe.createContext = function(t) {
  return t = { $$typeof: $6, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, t.Provider = { $$typeof: Q6, _context: t }, t.Consumer = t;
};
xe.createElement = kv;
xe.createFactory = function(t) {
  var e = kv.bind(null, t);
  return e.type = t, e;
};
xe.createRef = function() {
  return { current: null };
};
xe.forwardRef = function(t) {
  return { $$typeof: q6, render: t };
};
xe.isValidElement = V0;
xe.lazy = function(t) {
  return { $$typeof: e8, _payload: { _status: -1, _result: t }, _init: i8 };
};
xe.memo = function(t, e) {
  return { $$typeof: J6, type: t, compare: e === void 0 ? null : e };
};
xe.startTransition = function(t) {
  var e = gu.transition;
  gu.transition = {};
  try {
    t();
  } finally {
    gu.transition = e;
  }
};
xe.unstable_act = Nv;
xe.useCallback = function(t, e) {
  return Qt.current.useCallback(t, e);
};
xe.useContext = function(t) {
  return Qt.current.useContext(t);
};
xe.useDebugValue = function() {
};
xe.useDeferredValue = function(t) {
  return Qt.current.useDeferredValue(t);
};
xe.useEffect = function(t, e) {
  return Qt.current.useEffect(t, e);
};
xe.useId = function() {
  return Qt.current.useId();
};
xe.useImperativeHandle = function(t, e, n) {
  return Qt.current.useImperativeHandle(t, e, n);
};
xe.useInsertionEffect = function(t, e) {
  return Qt.current.useInsertionEffect(t, e);
};
xe.useLayoutEffect = function(t, e) {
  return Qt.current.useLayoutEffect(t, e);
};
xe.useMemo = function(t, e) {
  return Qt.current.useMemo(t, e);
};
xe.useReducer = function(t, e, n) {
  return Qt.current.useReducer(t, e, n);
};
xe.useRef = function(t) {
  return Qt.current.useRef(t);
};
xe.useState = function(t) {
  return Qt.current.useState(t);
};
xe.useSyncExternalStore = function(t, e, n) {
  return Qt.current.useSyncExternalStore(t, e, n);
};
xe.useTransition = function() {
  return Qt.current.useTransition();
};
xe.version = "18.3.1";
Sv.exports = xe;
var ne = Sv.exports;
const se = /* @__PURE__ */ Ua(ne);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var s8 = ne, a8 = Symbol.for("react.element"), l8 = Symbol.for("react.fragment"), u8 = Object.prototype.hasOwnProperty, c8 = s8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h8 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rv(t, e, n) {
  var r, o = {}, a = null, l = null;
  n !== void 0 && (a = "" + n), e.key !== void 0 && (a = "" + e.key), e.ref !== void 0 && (l = e.ref);
  for (r in e) u8.call(e, r) && !h8.hasOwnProperty(r) && (o[r] = e[r]);
  if (t && t.defaultProps) for (r in e = t.defaultProps, e) o[r] === void 0 && (o[r] = e[r]);
  return { $$typeof: a8, type: t, key: a, ref: l, props: o, _owner: c8.current };
}
oc.Fragment = l8;
oc.jsx = Rv;
oc.jsxs = Rv;
_v.exports = oc;
var oe = _v.exports, Av = { exports: {} }, gn = {}, Mv = { exports: {} }, Lv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(t) {
  function e(j, re) {
    var b = j.length;
    j.push(re);
    e: for (; 0 < b; ) {
      var $ = b - 1 >>> 1, ae = j[$];
      if (0 < o(ae, re)) j[$] = re, j[b] = ae, b = $;
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var re = j[0], b = j.pop();
    if (b !== re) {
      j[0] = b;
      e: for (var $ = 0, ae = j.length, we = ae >>> 1; $ < we; ) {
        var Ee = 2 * ($ + 1) - 1, ft = j[Ee], Ve = Ee + 1, I = j[Ve];
        if (0 > o(ft, b)) Ve < ae && 0 > o(I, ft) ? (j[$] = I, j[Ve] = b, $ = Ve) : (j[$] = ft, j[Ee] = b, $ = Ee);
        else if (Ve < ae && 0 > o(I, b)) j[$] = I, j[Ve] = b, $ = Ve;
        else break e;
      }
    }
    return re;
  }
  function o(j, re) {
    var b = j.sortIndex - re.sortIndex;
    return b !== 0 ? b : j.id - re.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    t.unstable_now = function() {
      return a.now();
    };
  } else {
    var l = Date, c = l.now();
    t.unstable_now = function() {
      return l.now() - c;
    };
  }
  var h = [], d = [], m = 1, S = null, y = 3, _ = !1, x = !1, P = !1, R = typeof setTimeout == "function" ? setTimeout : null, w = typeof clearTimeout == "function" ? clearTimeout : null, E = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(j) {
    for (var re = n(d); re !== null; ) {
      if (re.callback === null) r(d);
      else if (re.startTime <= j) r(d), re.sortIndex = re.expirationTime, e(h, re);
      else break;
      re = n(d);
    }
  }
  function C(j) {
    if (P = !1, g(j), !x) if (n(h) !== null) x = !0, he(T);
    else {
      var re = n(d);
      re !== null && de(C, re.startTime - j);
    }
  }
  function T(j, re) {
    x = !1, P && (P = !1, w(A), A = -1), _ = !0;
    var b = y;
    try {
      for (g(re), S = n(h); S !== null && (!(S.expirationTime > re) || j && !D()); ) {
        var $ = S.callback;
        if (typeof $ == "function") {
          S.callback = null, y = S.priorityLevel;
          var ae = $(S.expirationTime <= re);
          re = t.unstable_now(), typeof ae == "function" ? S.callback = ae : S === n(h) && r(h), g(re);
        } else r(h);
        S = n(h);
      }
      if (S !== null) var we = !0;
      else {
        var Ee = n(d);
        Ee !== null && de(C, Ee.startTime - re), we = !1;
      }
      return we;
    } finally {
      S = null, y = b, _ = !1;
    }
  }
  var M = !1, L = null, A = -1, B = 5, N = -1;
  function D() {
    return !(t.unstable_now() - N < B);
  }
  function z() {
    if (L !== null) {
      var j = t.unstable_now();
      N = j;
      var re = !0;
      try {
        re = L(!0, j);
      } finally {
        re ? q() : (M = !1, L = null);
      }
    } else M = !1;
  }
  var q;
  if (typeof E == "function") q = function() {
    E(z);
  };
  else if (typeof MessageChannel < "u") {
    var ce = new MessageChannel(), K = ce.port2;
    ce.port1.onmessage = z, q = function() {
      K.postMessage(null);
    };
  } else q = function() {
    R(z, 0);
  };
  function he(j) {
    L = j, M || (M = !0, q());
  }
  function de(j, re) {
    A = R(function() {
      j(t.unstable_now());
    }, re);
  }
  t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(j) {
    j.callback = null;
  }, t.unstable_continueExecution = function() {
    x || _ || (x = !0, he(T));
  }, t.unstable_forceFrameRate = function(j) {
    0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < j ? Math.floor(1e3 / j) : 5;
  }, t.unstable_getCurrentPriorityLevel = function() {
    return y;
  }, t.unstable_getFirstCallbackNode = function() {
    return n(h);
  }, t.unstable_next = function(j) {
    switch (y) {
      case 1:
      case 2:
      case 3:
        var re = 3;
        break;
      default:
        re = y;
    }
    var b = y;
    y = re;
    try {
      return j();
    } finally {
      y = b;
    }
  }, t.unstable_pauseExecution = function() {
  }, t.unstable_requestPaint = function() {
  }, t.unstable_runWithPriority = function(j, re) {
    switch (j) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        j = 3;
    }
    var b = y;
    y = j;
    try {
      return re();
    } finally {
      y = b;
    }
  }, t.unstable_scheduleCallback = function(j, re, b) {
    var $ = t.unstable_now();
    switch (typeof b == "object" && b !== null ? (b = b.delay, b = typeof b == "number" && 0 < b ? $ + b : $) : b = $, j) {
      case 1:
        var ae = -1;
        break;
      case 2:
        ae = 250;
        break;
      case 5:
        ae = 1073741823;
        break;
      case 4:
        ae = 1e4;
        break;
      default:
        ae = 5e3;
    }
    return ae = b + ae, j = { id: m++, callback: re, priorityLevel: j, startTime: b, expirationTime: ae, sortIndex: -1 }, b > $ ? (j.sortIndex = b, e(d, j), n(h) === null && j === n(d) && (P ? (w(A), A = -1) : P = !0, de(C, b - $))) : (j.sortIndex = ae, e(h, j), x || _ || (x = !0, he(T))), j;
  }, t.unstable_shouldYield = D, t.unstable_wrapCallback = function(j) {
    var re = y;
    return function() {
      var b = y;
      y = re;
      try {
        return j.apply(this, arguments);
      } finally {
        y = b;
      }
    };
  };
})(Lv);
Mv.exports = Lv;
var aa = Mv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f8 = ne, pn = aa;
function W(t) {
  for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Fv = /* @__PURE__ */ new Set(), va = {};
function oo(t, e) {
  es(t, e), es(t + "Capture", e);
}
function es(t, e) {
  for (va[t] = e, t = 0; t < e.length; t++) Fv.add(e[t]);
}
var Ir = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), kd = Object.prototype.hasOwnProperty, d8 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, qg = {}, Zg = {};
function p8(t) {
  return kd.call(Zg, t) ? !0 : kd.call(qg, t) ? !1 : d8.test(t) ? Zg[t] = !0 : (qg[t] = !0, !1);
}
function g8(t, e, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function m8(t, e, n, r) {
  if (e === null || typeof e > "u" || g8(t, e, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !e;
    case 4:
      return e === !1;
    case 5:
      return isNaN(e);
    case 6:
      return isNaN(e) || 1 > e;
  }
  return !1;
}
function $t(t, e, n, r, o, a, l) {
  this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = a, this.removeEmptyString = l;
}
var It = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
  It[t] = new $t(t, 0, !1, t, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
  var e = t[0];
  It[e] = new $t(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
  It[t] = new $t(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
  It[t] = new $t(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
  It[t] = new $t(t, 3, !1, t.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
  It[t] = new $t(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function(t) {
  It[t] = new $t(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(t) {
  It[t] = new $t(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function(t) {
  It[t] = new $t(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var j0 = /[\-:]([a-z])/g;
function W0(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
  var e = t.replace(
    j0,
    W0
  );
  It[e] = new $t(e, 1, !1, t, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
  var e = t.replace(j0, W0);
  It[e] = new $t(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
  var e = t.replace(j0, W0);
  It[e] = new $t(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(t) {
  It[t] = new $t(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
It.xlinkHref = new $t("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(t) {
  It[t] = new $t(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function X0(t, e, n, r) {
  var o = It.hasOwnProperty(e) ? It[e] : null;
  (o !== null ? o.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (m8(e, n, o, r) && (n = null), r || o === null ? p8(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : o.mustUseProperty ? t[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (e = o.attributeName, r = o.attributeNamespace, n === null ? t.removeAttribute(e) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var Ur = f8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Wl = Symbol.for("react.element"), Oo = Symbol.for("react.portal"), Do = Symbol.for("react.fragment"), K0 = Symbol.for("react.strict_mode"), Nd = Symbol.for("react.profiler"), Iv = Symbol.for("react.provider"), Ov = Symbol.for("react.context"), Y0 = Symbol.for("react.forward_ref"), Rd = Symbol.for("react.suspense"), Ad = Symbol.for("react.suspense_list"), Q0 = Symbol.for("react.memo"), ii = Symbol.for("react.lazy"), Dv = Symbol.for("react.offscreen"), Jg = Symbol.iterator;
function Vs(t) {
  return t === null || typeof t != "object" ? null : (t = Jg && t[Jg] || t["@@iterator"], typeof t == "function" ? t : null);
}
var it = Object.assign, zf;
function ta(t) {
  if (zf === void 0) try {
    throw Error();
  } catch (n) {
    var e = n.stack.trim().match(/\n( *(at )?)/);
    zf = e && e[1] || "";
  }
  return `
` + zf + t;
}
var bf = !1;
function Vf(t, e) {
  if (!t || bf) return "";
  bf = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e) if (e = function() {
      throw Error();
    }, Object.defineProperty(e.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(e, []);
      } catch (d) {
        var r = d;
      }
      Reflect.construct(t, [], e);
    } else {
      try {
        e.call();
      } catch (d) {
        r = d;
      }
      t.call(e.prototype);
    }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      t();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (var o = d.stack.split(`
`), a = r.stack.split(`
`), l = o.length - 1, c = a.length - 1; 1 <= l && 0 <= c && o[l] !== a[c]; ) c--;
      for (; 1 <= l && 0 <= c; l--, c--) if (o[l] !== a[c]) {
        if (l !== 1 || c !== 1)
          do
            if (l--, c--, 0 > c || o[l] !== a[c]) {
              var h = `
` + o[l].replace(" at new ", " at ");
              return t.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", t.displayName)), h;
            }
          while (1 <= l && 0 <= c);
        break;
      }
    }
  } finally {
    bf = !1, Error.prepareStackTrace = n;
  }
  return (t = t ? t.displayName || t.name : "") ? ta(t) : "";
}
function v8(t) {
  switch (t.tag) {
    case 5:
      return ta(t.type);
    case 16:
      return ta("Lazy");
    case 13:
      return ta("Suspense");
    case 19:
      return ta("SuspenseList");
    case 0:
    case 2:
    case 15:
      return t = Vf(t.type, !1), t;
    case 11:
      return t = Vf(t.type.render, !1), t;
    case 1:
      return t = Vf(t.type, !0), t;
    default:
      return "";
  }
}
function Md(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case Do:
      return "Fragment";
    case Oo:
      return "Portal";
    case Nd:
      return "Profiler";
    case K0:
      return "StrictMode";
    case Rd:
      return "Suspense";
    case Ad:
      return "SuspenseList";
  }
  if (typeof t == "object") switch (t.$$typeof) {
    case Ov:
      return (t.displayName || "Context") + ".Consumer";
    case Iv:
      return (t._context.displayName || "Context") + ".Provider";
    case Y0:
      var e = t.render;
      return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
    case Q0:
      return e = t.displayName || null, e !== null ? e : Md(t.type) || "Memo";
    case ii:
      e = t._payload, t = t._init;
      try {
        return Md(t(e));
      } catch {
      }
  }
  return null;
}
function y8(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return t = e.render, t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Md(e);
    case 8:
      return e === K0 ? "StrictMode" : "Mode";
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
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function yi(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function Bv(t) {
  var e = t.type;
  return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
}
function _8(t) {
  var e = Bv(t) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e), r = "" + t[e];
  if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, a = n.set;
    return Object.defineProperty(t, e, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(l) {
      r = "" + l, a.call(this, l);
    } }), Object.defineProperty(t, e, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      t._valueTracker = null, delete t[e];
    } };
  }
}
function Xl(t) {
  t._valueTracker || (t._valueTracker = _8(t));
}
function Uv(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(), r = "";
  return t && (r = Bv(t) ? t.checked ? "true" : "false" : t.value), t = r, t !== n ? (e.setValue(t), !0) : !1;
}
function Ru(t) {
  if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function Ld(t, e) {
  var n = e.checked;
  return it({}, e, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? t._wrapperState.initialChecked });
}
function em(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue, r = e.checked != null ? e.checked : e.defaultChecked;
  n = yi(e.value != null ? e.value : n), t._wrapperState = { initialChecked: r, initialValue: n, controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null };
}
function Gv(t, e) {
  e = e.checked, e != null && X0(t, "checked", e, !1);
}
function Fd(t, e) {
  Gv(t, e);
  var n = yi(e.value), r = e.type;
  if (n != null) r === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value") ? Id(t, e.type, n) : e.hasOwnProperty("defaultValue") && Id(t, e.type, yi(e.defaultValue)), e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked);
}
function tm(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null)) return;
    e = "" + t._wrapperState.initialValue, n || e === t.value || (t.value = e), t.defaultValue = e;
  }
  n = t.name, n !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, n !== "" && (t.name = n);
}
function Id(t, e, n) {
  (e !== "number" || Ru(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var na = Array.isArray;
function Ko(t, e, n, r) {
  if (t = t.options, e) {
    e = {};
    for (var o = 0; o < n.length; o++) e["$" + n[o]] = !0;
    for (n = 0; n < t.length; n++) o = e.hasOwnProperty("$" + t[n].value), t[n].selected !== o && (t[n].selected = o), o && r && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + yi(n), e = null, o = 0; o < t.length; o++) {
      if (t[o].value === n) {
        t[o].selected = !0, r && (t[o].defaultSelected = !0);
        return;
      }
      e !== null || t[o].disabled || (e = t[o]);
    }
    e !== null && (e.selected = !0);
  }
}
function Od(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(W(91));
  return it({}, e, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
}
function nm(t, e) {
  var n = e.value;
  if (n == null) {
    if (n = e.children, e = e.defaultValue, n != null) {
      if (e != null) throw Error(W(92));
      if (na(n)) {
        if (1 < n.length) throw Error(W(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), n = e;
  }
  t._wrapperState = { initialValue: yi(n) };
}
function Hv(t, e) {
  var n = yi(e.value), r = yi(e.defaultValue);
  n != null && (n = "" + n, n !== t.value && (t.value = n), e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)), r != null && (t.defaultValue = "" + r);
}
function rm(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function zv(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Dd(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml" ? zv(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t;
}
var Kl, bv = function(t) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return t(e, n, r, o);
    });
  } : t;
}(function(t, e) {
  if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = e;
  else {
    for (Kl = Kl || document.createElement("div"), Kl.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = Kl.firstChild; t.firstChild; ) t.removeChild(t.firstChild);
    for (; e.firstChild; ) t.appendChild(e.firstChild);
  }
});
function ya(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var la = {
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
}, S8 = ["Webkit", "ms", "Moz", "O"];
Object.keys(la).forEach(function(t) {
  S8.forEach(function(e) {
    e = e + t.charAt(0).toUpperCase() + t.substring(1), la[e] = la[t];
  });
});
function Vv(t, e, n) {
  return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || la.hasOwnProperty(t) && la[t] ? ("" + e).trim() : e + "px";
}
function jv(t, e) {
  t = t.style;
  for (var n in e) if (e.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Vv(n, e[n], r);
    n === "float" && (n = "cssFloat"), r ? t.setProperty(n, o) : t[n] = o;
  }
}
var w8 = it({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Bd(t, e) {
  if (e) {
    if (w8[t] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(W(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(W(60));
      if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML)) throw Error(W(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(W(62));
  }
}
function Ud(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
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
var Gd = null;
function $0(t) {
  return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
}
var Hd = null, Yo = null, Qo = null;
function im(t) {
  if (t = ba(t)) {
    if (typeof Hd != "function") throw Error(W(280));
    var e = t.stateNode;
    e && (e = cc(e), Hd(t.stateNode, t.type, e));
  }
}
function Wv(t) {
  Yo ? Qo ? Qo.push(t) : Qo = [t] : Yo = t;
}
function Xv() {
  if (Yo) {
    var t = Yo, e = Qo;
    if (Qo = Yo = null, im(t), e) for (t = 0; t < e.length; t++) im(e[t]);
  }
}
function Kv(t, e) {
  return t(e);
}
function Yv() {
}
var jf = !1;
function Qv(t, e, n) {
  if (jf) return t(e, n);
  jf = !0;
  try {
    return Kv(t, e, n);
  } finally {
    jf = !1, (Yo !== null || Qo !== null) && (Yv(), Xv());
  }
}
function _a(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = cc(n);
  if (r === null) return null;
  n = r[e];
  e: switch (e) {
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
      (r = !r.disabled) || (t = t.type, r = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !r;
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(W(231, e, typeof n));
  return n;
}
var zd = !1;
if (Ir) try {
  var js = {};
  Object.defineProperty(js, "passive", { get: function() {
    zd = !0;
  } }), window.addEventListener("test", js, js), window.removeEventListener("test", js, js);
} catch {
  zd = !1;
}
function x8(t, e, n, r, o, a, l, c, h) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, d);
  } catch (m) {
    this.onError(m);
  }
}
var ua = !1, Au = null, Mu = !1, bd = null, E8 = { onError: function(t) {
  ua = !0, Au = t;
} };
function C8(t, e, n, r, o, a, l, c, h) {
  ua = !1, Au = null, x8.apply(E8, arguments);
}
function P8(t, e, n, r, o, a, l, c, h) {
  if (C8.apply(this, arguments), ua) {
    if (ua) {
      var d = Au;
      ua = !1, Au = null;
    } else throw Error(W(198));
    Mu || (Mu = !0, bd = d);
  }
}
function so(t) {
  var e = t, n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do
      e = t, e.flags & 4098 && (n = e.return), t = e.return;
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function $v(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
  }
  return null;
}
function om(t) {
  if (so(t) !== t) throw Error(W(188));
}
function T8(t) {
  var e = t.alternate;
  if (!e) {
    if (e = so(t), e === null) throw Error(W(188));
    return e !== t ? null : t;
  }
  for (var n = t, r = e; ; ) {
    var o = n.return;
    if (o === null) break;
    var a = o.alternate;
    if (a === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === a.child) {
      for (a = o.child; a; ) {
        if (a === n) return om(o), t;
        if (a === r) return om(o), e;
        a = a.sibling;
      }
      throw Error(W(188));
    }
    if (n.return !== r.return) n = o, r = a;
    else {
      for (var l = !1, c = o.child; c; ) {
        if (c === n) {
          l = !0, n = o, r = a;
          break;
        }
        if (c === r) {
          l = !0, r = o, n = a;
          break;
        }
        c = c.sibling;
      }
      if (!l) {
        for (c = a.child; c; ) {
          if (c === n) {
            l = !0, n = a, r = o;
            break;
          }
          if (c === r) {
            l = !0, r = a, n = o;
            break;
          }
          c = c.sibling;
        }
        if (!l) throw Error(W(189));
      }
    }
    if (n.alternate !== r) throw Error(W(190));
  }
  if (n.tag !== 3) throw Error(W(188));
  return n.stateNode.current === n ? t : e;
}
function qv(t) {
  return t = T8(t), t !== null ? Zv(t) : null;
}
function Zv(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = Zv(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var Jv = pn.unstable_scheduleCallback, sm = pn.unstable_cancelCallback, k8 = pn.unstable_shouldYield, N8 = pn.unstable_requestPaint, ct = pn.unstable_now, R8 = pn.unstable_getCurrentPriorityLevel, q0 = pn.unstable_ImmediatePriority, ey = pn.unstable_UserBlockingPriority, Lu = pn.unstable_NormalPriority, A8 = pn.unstable_LowPriority, ty = pn.unstable_IdlePriority, sc = null, pr = null;
function M8(t) {
  if (pr && typeof pr.onCommitFiberRoot == "function") try {
    pr.onCommitFiberRoot(sc, t, void 0, (t.current.flags & 128) === 128);
  } catch {
  }
}
var Kn = Math.clz32 ? Math.clz32 : I8, L8 = Math.log, F8 = Math.LN2;
function I8(t) {
  return t >>>= 0, t === 0 ? 32 : 31 - (L8(t) / F8 | 0) | 0;
}
var Yl = 64, Ql = 4194304;
function ra(t) {
  switch (t & -t) {
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
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function Fu(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = t.suspendedLanes, a = t.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var c = l & ~o;
    c !== 0 ? r = ra(c) : (a &= l, a !== 0 && (r = ra(a)));
  } else l = n & ~o, l !== 0 ? r = ra(l) : a !== 0 && (r = ra(a));
  if (r === 0) return 0;
  if (e !== 0 && e !== r && !(e & o) && (o = r & -r, a = e & -e, o >= a || o === 16 && (a & 4194240) !== 0)) return e;
  if (r & 4 && (r |= n & 16), e = t.entangledLanes, e !== 0) for (t = t.entanglements, e &= r; 0 < e; ) n = 31 - Kn(e), o = 1 << n, r |= t[n], e &= ~o;
  return r;
}
function O8(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
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
      return e + 5e3;
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
function D8(t, e) {
  for (var n = t.suspendedLanes, r = t.pingedLanes, o = t.expirationTimes, a = t.pendingLanes; 0 < a; ) {
    var l = 31 - Kn(a), c = 1 << l, h = o[l];
    h === -1 ? (!(c & n) || c & r) && (o[l] = O8(c, e)) : h <= e && (t.expiredLanes |= c), a &= ~c;
  }
}
function Vd(t) {
  return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
}
function ny() {
  var t = Yl;
  return Yl <<= 1, !(Yl & 4194240) && (Yl = 64), t;
}
function Wf(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function Ha(t, e, n) {
  t.pendingLanes |= e, e !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, e = 31 - Kn(e), t[e] = n;
}
function B8(t, e) {
  var n = t.pendingLanes & ~e;
  t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= e, t.mutableReadLanes &= e, t.entangledLanes &= e, e = t.entanglements;
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var o = 31 - Kn(n), a = 1 << o;
    e[o] = 0, r[o] = -1, t[o] = -1, n &= ~a;
  }
}
function Z0(t, e) {
  var n = t.entangledLanes |= e;
  for (t = t.entanglements; n; ) {
    var r = 31 - Kn(n), o = 1 << r;
    o & e | t[r] & e && (t[r] |= e), n &= ~o;
  }
}
var Ie = 0;
function ry(t) {
  return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1;
}
var iy, J0, oy, sy, ay, jd = !1, $l = [], ci = null, hi = null, fi = null, Sa = /* @__PURE__ */ new Map(), wa = /* @__PURE__ */ new Map(), si = [], U8 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function am(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      ci = null;
      break;
    case "dragenter":
    case "dragleave":
      hi = null;
      break;
    case "mouseover":
    case "mouseout":
      fi = null;
      break;
    case "pointerover":
    case "pointerout":
      Sa.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      wa.delete(e.pointerId);
  }
}
function Ws(t, e, n, r, o, a) {
  return t === null || t.nativeEvent !== a ? (t = { blockedOn: e, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [o] }, e !== null && (e = ba(e), e !== null && J0(e)), t) : (t.eventSystemFlags |= r, e = t.targetContainers, o !== null && e.indexOf(o) === -1 && e.push(o), t);
}
function G8(t, e, n, r, o) {
  switch (e) {
    case "focusin":
      return ci = Ws(ci, t, e, n, r, o), !0;
    case "dragenter":
      return hi = Ws(hi, t, e, n, r, o), !0;
    case "mouseover":
      return fi = Ws(fi, t, e, n, r, o), !0;
    case "pointerover":
      var a = o.pointerId;
      return Sa.set(a, Ws(Sa.get(a) || null, t, e, n, r, o)), !0;
    case "gotpointercapture":
      return a = o.pointerId, wa.set(a, Ws(wa.get(a) || null, t, e, n, r, o)), !0;
  }
  return !1;
}
function ly(t) {
  var e = Yi(t.target);
  if (e !== null) {
    var n = so(e);
    if (n !== null) {
      if (e = n.tag, e === 13) {
        if (e = $v(n), e !== null) {
          t.blockedOn = e, ay(t.priority, function() {
            oy(n);
          });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function mu(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Wd(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      Gd = r, n.target.dispatchEvent(r), Gd = null;
    } else return e = ba(n), e !== null && J0(e), t.blockedOn = n, !1;
    e.shift();
  }
  return !0;
}
function lm(t, e, n) {
  mu(t) && n.delete(e);
}
function H8() {
  jd = !1, ci !== null && mu(ci) && (ci = null), hi !== null && mu(hi) && (hi = null), fi !== null && mu(fi) && (fi = null), Sa.forEach(lm), wa.forEach(lm);
}
function Xs(t, e) {
  t.blockedOn === e && (t.blockedOn = null, jd || (jd = !0, pn.unstable_scheduleCallback(pn.unstable_NormalPriority, H8)));
}
function xa(t) {
  function e(o) {
    return Xs(o, t);
  }
  if (0 < $l.length) {
    Xs($l[0], t);
    for (var n = 1; n < $l.length; n++) {
      var r = $l[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (ci !== null && Xs(ci, t), hi !== null && Xs(hi, t), fi !== null && Xs(fi, t), Sa.forEach(e), wa.forEach(e), n = 0; n < si.length; n++) r = si[n], r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < si.length && (n = si[0], n.blockedOn === null); ) ly(n), n.blockedOn === null && si.shift();
}
var $o = Ur.ReactCurrentBatchConfig, Iu = !0;
function z8(t, e, n, r) {
  var o = Ie, a = $o.transition;
  $o.transition = null;
  try {
    Ie = 1, ep(t, e, n, r);
  } finally {
    Ie = o, $o.transition = a;
  }
}
function b8(t, e, n, r) {
  var o = Ie, a = $o.transition;
  $o.transition = null;
  try {
    Ie = 4, ep(t, e, n, r);
  } finally {
    Ie = o, $o.transition = a;
  }
}
function ep(t, e, n, r) {
  if (Iu) {
    var o = Wd(t, e, n, r);
    if (o === null) td(t, e, r, Ou, n), am(t, r);
    else if (G8(o, t, e, n, r)) r.stopPropagation();
    else if (am(t, r), e & 4 && -1 < U8.indexOf(t)) {
      for (; o !== null; ) {
        var a = ba(o);
        if (a !== null && iy(a), a = Wd(t, e, n, r), a === null && td(t, e, r, Ou, n), a === o) break;
        o = a;
      }
      o !== null && r.stopPropagation();
    } else td(t, e, r, null, n);
  }
}
var Ou = null;
function Wd(t, e, n, r) {
  if (Ou = null, t = $0(r), t = Yi(t), t !== null) if (e = so(t), e === null) t = null;
  else if (n = e.tag, n === 13) {
    if (t = $v(e), t !== null) return t;
    t = null;
  } else if (n === 3) {
    if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
    t = null;
  } else e !== t && (t = null);
  return Ou = t, null;
}
function uy(t) {
  switch (t) {
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
      switch (R8()) {
        case q0:
          return 1;
        case ey:
          return 4;
        case Lu:
        case A8:
          return 16;
        case ty:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var li = null, tp = null, vu = null;
function cy() {
  if (vu) return vu;
  var t, e = tp, n = e.length, r, o = "value" in li ? li.value : li.textContent, a = o.length;
  for (t = 0; t < n && e[t] === o[t]; t++) ;
  var l = n - t;
  for (r = 1; r <= l && e[n - r] === o[a - r]; r++) ;
  return vu = o.slice(t, 1 < r ? 1 - r : void 0);
}
function yu(t) {
  var e = t.keyCode;
  return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
}
function ql() {
  return !0;
}
function um() {
  return !1;
}
function mn(t) {
  function e(n, r, o, a, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = a, this.target = l, this.currentTarget = null;
    for (var c in t) t.hasOwnProperty(c) && (n = t[c], this[c] = n ? n(a) : a[c]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? ql : um, this.isPropagationStopped = um, this;
  }
  return it(e.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ql);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ql);
  }, persist: function() {
  }, isPersistent: ql }), e;
}
var fs = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
  return t.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, np = mn(fs), za = it({}, fs, { view: 0, detail: 0 }), V8 = mn(za), Xf, Kf, Ks, ac = it({}, za, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: rp, button: 0, buttons: 0, relatedTarget: function(t) {
  return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
}, movementX: function(t) {
  return "movementX" in t ? t.movementX : (t !== Ks && (Ks && t.type === "mousemove" ? (Xf = t.screenX - Ks.screenX, Kf = t.screenY - Ks.screenY) : Kf = Xf = 0, Ks = t), Xf);
}, movementY: function(t) {
  return "movementY" in t ? t.movementY : Kf;
} }), cm = mn(ac), j8 = it({}, ac, { dataTransfer: 0 }), W8 = mn(j8), X8 = it({}, za, { relatedTarget: 0 }), Yf = mn(X8), K8 = it({}, fs, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Y8 = mn(K8), Q8 = it({}, fs, { clipboardData: function(t) {
  return "clipboardData" in t ? t.clipboardData : window.clipboardData;
} }), $8 = mn(Q8), q8 = it({}, fs, { data: 0 }), hm = mn(q8), Z8 = {
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
}, J8 = {
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
}, e9 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function t9(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = e9[t]) ? !!e[t] : !1;
}
function rp() {
  return t9;
}
var n9 = it({}, za, { key: function(t) {
  if (t.key) {
    var e = Z8[t.key] || t.key;
    if (e !== "Unidentified") return e;
  }
  return t.type === "keypress" ? (t = yu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? J8[t.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: rp, charCode: function(t) {
  return t.type === "keypress" ? yu(t) : 0;
}, keyCode: function(t) {
  return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
}, which: function(t) {
  return t.type === "keypress" ? yu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
} }), r9 = mn(n9), i9 = it({}, ac, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fm = mn(i9), o9 = it({}, za, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: rp }), s9 = mn(o9), a9 = it({}, fs, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), l9 = mn(a9), u9 = it({}, ac, {
  deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  },
  deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), c9 = mn(u9), h9 = [9, 13, 27, 32], ip = Ir && "CompositionEvent" in window, ca = null;
Ir && "documentMode" in document && (ca = document.documentMode);
var f9 = Ir && "TextEvent" in window && !ca, hy = Ir && (!ip || ca && 8 < ca && 11 >= ca), dm = " ", pm = !1;
function fy(t, e) {
  switch (t) {
    case "keyup":
      return h9.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function dy(t) {
  return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
}
var Bo = !1;
function d9(t, e) {
  switch (t) {
    case "compositionend":
      return dy(e);
    case "keypress":
      return e.which !== 32 ? null : (pm = !0, dm);
    case "textInput":
      return t = e.data, t === dm && pm ? null : t;
    default:
      return null;
  }
}
function p9(t, e) {
  if (Bo) return t === "compositionend" || !ip && fy(t, e) ? (t = cy(), vu = tp = li = null, Bo = !1, t) : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return hy && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var g9 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function gm(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!g9[t.type] : e === "textarea";
}
function py(t, e, n, r) {
  Wv(r), e = Du(e, "onChange"), 0 < e.length && (n = new np("onChange", "change", null, n, r), t.push({ event: n, listeners: e }));
}
var ha = null, Ea = null;
function m9(t) {
  Py(t, 0);
}
function lc(t) {
  var e = Ho(t);
  if (Uv(e)) return t;
}
function v9(t, e) {
  if (t === "change") return e;
}
var gy = !1;
if (Ir) {
  var Qf;
  if (Ir) {
    var $f = "oninput" in document;
    if (!$f) {
      var mm = document.createElement("div");
      mm.setAttribute("oninput", "return;"), $f = typeof mm.oninput == "function";
    }
    Qf = $f;
  } else Qf = !1;
  gy = Qf && (!document.documentMode || 9 < document.documentMode);
}
function vm() {
  ha && (ha.detachEvent("onpropertychange", my), Ea = ha = null);
}
function my(t) {
  if (t.propertyName === "value" && lc(Ea)) {
    var e = [];
    py(e, Ea, t, $0(t)), Qv(m9, e);
  }
}
function y9(t, e, n) {
  t === "focusin" ? (vm(), ha = e, Ea = n, ha.attachEvent("onpropertychange", my)) : t === "focusout" && vm();
}
function _9(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown") return lc(Ea);
}
function S9(t, e) {
  if (t === "click") return lc(e);
}
function w9(t, e) {
  if (t === "input" || t === "change") return lc(e);
}
function x9(t, e) {
  return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
}
var $n = typeof Object.is == "function" ? Object.is : x9;
function Ca(t, e) {
  if ($n(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
  var n = Object.keys(t), r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!kd.call(e, o) || !$n(t[o], e[o])) return !1;
  }
  return !0;
}
function ym(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function _m(t, e) {
  var n = ym(t);
  t = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = t + n.textContent.length, t <= e && r >= e) return { node: n, offset: e - t };
      t = r;
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
    n = ym(n);
  }
}
function vy(t, e) {
  return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? vy(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
}
function yy() {
  for (var t = window, e = Ru(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = Ru(t.document);
  }
  return e;
}
function op(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
}
function E9(t) {
  var e = yy(), n = t.focusedElem, r = t.selectionRange;
  if (e !== n && n && n.ownerDocument && vy(n.ownerDocument.documentElement, n)) {
    if (r !== null && op(n)) {
      if (e = r.start, t = r.end, t === void 0 && (t = e), "selectionStart" in n) n.selectionStart = e, n.selectionEnd = Math.min(t, n.value.length);
      else if (t = (e = n.ownerDocument || document) && e.defaultView || window, t.getSelection) {
        t = t.getSelection();
        var o = n.textContent.length, a = Math.min(r.start, o);
        r = r.end === void 0 ? a : Math.min(r.end, o), !t.extend && a > r && (o = r, r = a, a = o), o = _m(n, a);
        var l = _m(
          n,
          r
        );
        o && l && (t.rangeCount !== 1 || t.anchorNode !== o.node || t.anchorOffset !== o.offset || t.focusNode !== l.node || t.focusOffset !== l.offset) && (e = e.createRange(), e.setStart(o.node, o.offset), t.removeAllRanges(), a > r ? (t.addRange(e), t.extend(l.node, l.offset)) : (e.setEnd(l.node, l.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; t = t.parentNode; ) t.nodeType === 1 && e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++) t = e[n], t.element.scrollLeft = t.left, t.element.scrollTop = t.top;
  }
}
var C9 = Ir && "documentMode" in document && 11 >= document.documentMode, Uo = null, Xd = null, fa = null, Kd = !1;
function Sm(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Kd || Uo == null || Uo !== Ru(r) || (r = Uo, "selectionStart" in r && op(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), fa && Ca(fa, r) || (fa = r, r = Du(Xd, "onSelect"), 0 < r.length && (e = new np("onSelect", "select", null, e, n), t.push({ event: e, listeners: r }), e.target = Uo)));
}
function Zl(t, e) {
  var n = {};
  return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
}
var Go = { animationend: Zl("Animation", "AnimationEnd"), animationiteration: Zl("Animation", "AnimationIteration"), animationstart: Zl("Animation", "AnimationStart"), transitionend: Zl("Transition", "TransitionEnd") }, qf = {}, _y = {};
Ir && (_y = document.createElement("div").style, "AnimationEvent" in window || (delete Go.animationend.animation, delete Go.animationiteration.animation, delete Go.animationstart.animation), "TransitionEvent" in window || delete Go.transitionend.transition);
function uc(t) {
  if (qf[t]) return qf[t];
  if (!Go[t]) return t;
  var e = Go[t], n;
  for (n in e) if (e.hasOwnProperty(n) && n in _y) return qf[t] = e[n];
  return t;
}
var Sy = uc("animationend"), wy = uc("animationiteration"), xy = uc("animationstart"), Ey = uc("transitionend"), Cy = /* @__PURE__ */ new Map(), wm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ei(t, e) {
  Cy.set(t, e), oo(e, [t]);
}
for (var Zf = 0; Zf < wm.length; Zf++) {
  var Jf = wm[Zf], P9 = Jf.toLowerCase(), T9 = Jf[0].toUpperCase() + Jf.slice(1);
  Ei(P9, "on" + T9);
}
Ei(Sy, "onAnimationEnd");
Ei(wy, "onAnimationIteration");
Ei(xy, "onAnimationStart");
Ei("dblclick", "onDoubleClick");
Ei("focusin", "onFocus");
Ei("focusout", "onBlur");
Ei(Ey, "onTransitionEnd");
es("onMouseEnter", ["mouseout", "mouseover"]);
es("onMouseLeave", ["mouseout", "mouseover"]);
es("onPointerEnter", ["pointerout", "pointerover"]);
es("onPointerLeave", ["pointerout", "pointerover"]);
oo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
oo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
oo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
oo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
oo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
oo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ia = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), k9 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ia));
function xm(t, e, n) {
  var r = t.type || "unknown-event";
  t.currentTarget = n, P8(r, e, void 0, t), t.currentTarget = null;
}
function Py(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n], o = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (e) for (var l = r.length - 1; 0 <= l; l--) {
        var c = r[l], h = c.instance, d = c.currentTarget;
        if (c = c.listener, h !== a && o.isPropagationStopped()) break e;
        xm(o, c, d), a = h;
      }
      else for (l = 0; l < r.length; l++) {
        if (c = r[l], h = c.instance, d = c.currentTarget, c = c.listener, h !== a && o.isPropagationStopped()) break e;
        xm(o, c, d), a = h;
      }
    }
  }
  if (Mu) throw t = bd, Mu = !1, bd = null, t;
}
function Ke(t, e) {
  var n = e[Zd];
  n === void 0 && (n = e[Zd] = /* @__PURE__ */ new Set());
  var r = t + "__bubble";
  n.has(r) || (Ty(e, t, 2, !1), n.add(r));
}
function ed(t, e, n) {
  var r = 0;
  e && (r |= 4), Ty(n, t, r, e);
}
var Jl = "_reactListening" + Math.random().toString(36).slice(2);
function Pa(t) {
  if (!t[Jl]) {
    t[Jl] = !0, Fv.forEach(function(n) {
      n !== "selectionchange" && (k9.has(n) || ed(n, !1, t), ed(n, !0, t));
    });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Jl] || (e[Jl] = !0, ed("selectionchange", !1, e));
  }
}
function Ty(t, e, n, r) {
  switch (uy(e)) {
    case 1:
      var o = z8;
      break;
    case 4:
      o = b8;
      break;
    default:
      o = ep;
  }
  n = o.bind(null, e, n, t), o = void 0, !zd || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (o = !0), r ? o !== void 0 ? t.addEventListener(e, n, { capture: !0, passive: o }) : t.addEventListener(e, n, !0) : o !== void 0 ? t.addEventListener(e, n, { passive: o }) : t.addEventListener(e, n, !1);
}
function td(t, e, n, r, o) {
  var a = r;
  if (!(e & 1) && !(e & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var l = r.tag;
    if (l === 3 || l === 4) {
      var c = r.stateNode.containerInfo;
      if (c === o || c.nodeType === 8 && c.parentNode === o) break;
      if (l === 4) for (l = r.return; l !== null; ) {
        var h = l.tag;
        if ((h === 3 || h === 4) && (h = l.stateNode.containerInfo, h === o || h.nodeType === 8 && h.parentNode === o)) return;
        l = l.return;
      }
      for (; c !== null; ) {
        if (l = Yi(c), l === null) return;
        if (h = l.tag, h === 5 || h === 6) {
          r = a = l;
          continue e;
        }
        c = c.parentNode;
      }
    }
    r = r.return;
  }
  Qv(function() {
    var d = a, m = $0(n), S = [];
    e: {
      var y = Cy.get(t);
      if (y !== void 0) {
        var _ = np, x = t;
        switch (t) {
          case "keypress":
            if (yu(n) === 0) break e;
          case "keydown":
          case "keyup":
            _ = r9;
            break;
          case "focusin":
            x = "focus", _ = Yf;
            break;
          case "focusout":
            x = "blur", _ = Yf;
            break;
          case "beforeblur":
          case "afterblur":
            _ = Yf;
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
            _ = cm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            _ = W8;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            _ = s9;
            break;
          case Sy:
          case wy:
          case xy:
            _ = Y8;
            break;
          case Ey:
            _ = l9;
            break;
          case "scroll":
            _ = V8;
            break;
          case "wheel":
            _ = c9;
            break;
          case "copy":
          case "cut":
          case "paste":
            _ = $8;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            _ = fm;
        }
        var P = (e & 4) !== 0, R = !P && t === "scroll", w = P ? y !== null ? y + "Capture" : null : y;
        P = [];
        for (var E = d, g; E !== null; ) {
          g = E;
          var C = g.stateNode;
          if (g.tag === 5 && C !== null && (g = C, w !== null && (C = _a(E, w), C != null && P.push(Ta(E, C, g)))), R) break;
          E = E.return;
        }
        0 < P.length && (y = new _(y, x, null, n, m), S.push({ event: y, listeners: P }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (y = t === "mouseover" || t === "pointerover", _ = t === "mouseout" || t === "pointerout", y && n !== Gd && (x = n.relatedTarget || n.fromElement) && (Yi(x) || x[Or])) break e;
        if ((_ || y) && (y = m.window === m ? m : (y = m.ownerDocument) ? y.defaultView || y.parentWindow : window, _ ? (x = n.relatedTarget || n.toElement, _ = d, x = x ? Yi(x) : null, x !== null && (R = so(x), x !== R || x.tag !== 5 && x.tag !== 6) && (x = null)) : (_ = null, x = d), _ !== x)) {
          if (P = cm, C = "onMouseLeave", w = "onMouseEnter", E = "mouse", (t === "pointerout" || t === "pointerover") && (P = fm, C = "onPointerLeave", w = "onPointerEnter", E = "pointer"), R = _ == null ? y : Ho(_), g = x == null ? y : Ho(x), y = new P(C, E + "leave", _, n, m), y.target = R, y.relatedTarget = g, C = null, Yi(m) === d && (P = new P(w, E + "enter", x, n, m), P.target = g, P.relatedTarget = R, C = P), R = C, _ && x) t: {
            for (P = _, w = x, E = 0, g = P; g; g = Mo(g)) E++;
            for (g = 0, C = w; C; C = Mo(C)) g++;
            for (; 0 < E - g; ) P = Mo(P), E--;
            for (; 0 < g - E; ) w = Mo(w), g--;
            for (; E--; ) {
              if (P === w || w !== null && P === w.alternate) break t;
              P = Mo(P), w = Mo(w);
            }
            P = null;
          }
          else P = null;
          _ !== null && Em(S, y, _, P, !1), x !== null && R !== null && Em(S, R, x, P, !0);
        }
      }
      e: {
        if (y = d ? Ho(d) : window, _ = y.nodeName && y.nodeName.toLowerCase(), _ === "select" || _ === "input" && y.type === "file") var T = v9;
        else if (gm(y)) if (gy) T = w9;
        else {
          T = _9;
          var M = y9;
        }
        else (_ = y.nodeName) && _.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (T = S9);
        if (T && (T = T(t, d))) {
          py(S, T, n, m);
          break e;
        }
        M && M(t, y, d), t === "focusout" && (M = y._wrapperState) && M.controlled && y.type === "number" && Id(y, "number", y.value);
      }
      switch (M = d ? Ho(d) : window, t) {
        case "focusin":
          (gm(M) || M.contentEditable === "true") && (Uo = M, Xd = d, fa = null);
          break;
        case "focusout":
          fa = Xd = Uo = null;
          break;
        case "mousedown":
          Kd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Kd = !1, Sm(S, n, m);
          break;
        case "selectionchange":
          if (C9) break;
        case "keydown":
        case "keyup":
          Sm(S, n, m);
      }
      var L;
      if (ip) e: {
        switch (t) {
          case "compositionstart":
            var A = "onCompositionStart";
            break e;
          case "compositionend":
            A = "onCompositionEnd";
            break e;
          case "compositionupdate":
            A = "onCompositionUpdate";
            break e;
        }
        A = void 0;
      }
      else Bo ? fy(t, n) && (A = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      A && (hy && n.locale !== "ko" && (Bo || A !== "onCompositionStart" ? A === "onCompositionEnd" && Bo && (L = cy()) : (li = m, tp = "value" in li ? li.value : li.textContent, Bo = !0)), M = Du(d, A), 0 < M.length && (A = new hm(A, t, null, n, m), S.push({ event: A, listeners: M }), L ? A.data = L : (L = dy(n), L !== null && (A.data = L)))), (L = f9 ? d9(t, n) : p9(t, n)) && (d = Du(d, "onBeforeInput"), 0 < d.length && (m = new hm("onBeforeInput", "beforeinput", null, n, m), S.push({ event: m, listeners: d }), m.data = L));
    }
    Py(S, e);
  });
}
function Ta(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Du(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var o = t, a = o.stateNode;
    o.tag === 5 && a !== null && (o = a, a = _a(t, n), a != null && r.unshift(Ta(t, a, o)), a = _a(t, e), a != null && r.push(Ta(t, a, o))), t = t.return;
  }
  return r;
}
function Mo(t) {
  if (t === null) return null;
  do
    t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Em(t, e, n, r, o) {
  for (var a = e._reactName, l = []; n !== null && n !== r; ) {
    var c = n, h = c.alternate, d = c.stateNode;
    if (h !== null && h === r) break;
    c.tag === 5 && d !== null && (c = d, o ? (h = _a(n, a), h != null && l.unshift(Ta(n, h, c))) : o || (h = _a(n, a), h != null && l.push(Ta(n, h, c)))), n = n.return;
  }
  l.length !== 0 && t.push({ event: e, listeners: l });
}
var N9 = /\r\n?/g, R9 = /\u0000|\uFFFD/g;
function Cm(t) {
  return (typeof t == "string" ? t : "" + t).replace(N9, `
`).replace(R9, "");
}
function eu(t, e, n) {
  if (e = Cm(e), Cm(t) !== e && n) throw Error(W(425));
}
function Bu() {
}
var Yd = null, Qd = null;
function $d(t, e) {
  return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
}
var qd = typeof setTimeout == "function" ? setTimeout : void 0, A9 = typeof clearTimeout == "function" ? clearTimeout : void 0, Pm = typeof Promise == "function" ? Promise : void 0, M9 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pm < "u" ? function(t) {
  return Pm.resolve(null).then(t).catch(L9);
} : qd;
function L9(t) {
  setTimeout(function() {
    throw t;
  });
}
function nd(t, e) {
  var n = e, r = 0;
  do {
    var o = n.nextSibling;
    if (t.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        t.removeChild(o), xa(e);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  xa(e);
}
function di(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (e = t.data, e === "$" || e === "$!" || e === "$?") break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function Tm(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var ds = Math.random().toString(36).slice(2), fr = "__reactFiber$" + ds, ka = "__reactProps$" + ds, Or = "__reactContainer$" + ds, Zd = "__reactEvents$" + ds, F9 = "__reactListeners$" + ds, I9 = "__reactHandles$" + ds;
function Yi(t) {
  var e = t[fr];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if (e = n[Or] || n[fr]) {
      if (n = e.alternate, e.child !== null || n !== null && n.child !== null) for (t = Tm(t); t !== null; ) {
        if (n = t[fr]) return n;
        t = Tm(t);
      }
      return e;
    }
    t = n, n = t.parentNode;
  }
  return null;
}
function ba(t) {
  return t = t[fr] || t[Or], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
}
function Ho(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(W(33));
}
function cc(t) {
  return t[ka] || null;
}
var Jd = [], zo = -1;
function Ci(t) {
  return { current: t };
}
function Qe(t) {
  0 > zo || (t.current = Jd[zo], Jd[zo] = null, zo--);
}
function be(t, e) {
  zo++, Jd[zo] = t.current, t.current = e;
}
var _i = {}, Vt = Ci(_i), sn = Ci(!1), Ji = _i;
function ts(t, e) {
  var n = t.type.contextTypes;
  if (!n) return _i;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, a;
  for (a in n) o[a] = e[a];
  return r && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = o), o;
}
function an(t) {
  return t = t.childContextTypes, t != null;
}
function Uu() {
  Qe(sn), Qe(Vt);
}
function km(t, e, n) {
  if (Vt.current !== _i) throw Error(W(168));
  be(Vt, e), be(sn, n);
}
function ky(t, e, n) {
  var r = t.stateNode;
  if (e = e.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in e)) throw Error(W(108, y8(t) || "Unknown", o));
  return it({}, n, r);
}
function Gu(t) {
  return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || _i, Ji = Vt.current, be(Vt, t), be(sn, sn.current), !0;
}
function Nm(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(W(169));
  n ? (t = ky(t, e, Ji), r.__reactInternalMemoizedMergedChildContext = t, Qe(sn), Qe(Vt), be(Vt, t)) : Qe(sn), be(sn, n);
}
var Rr = null, hc = !1, rd = !1;
function Ny(t) {
  Rr === null ? Rr = [t] : Rr.push(t);
}
function O9(t) {
  hc = !0, Ny(t);
}
function Pi() {
  if (!rd && Rr !== null) {
    rd = !0;
    var t = 0, e = Ie;
    try {
      var n = Rr;
      for (Ie = 1; t < n.length; t++) {
        var r = n[t];
        do
          r = r(!0);
        while (r !== null);
      }
      Rr = null, hc = !1;
    } catch (o) {
      throw Rr !== null && (Rr = Rr.slice(t + 1)), Jv(q0, Pi), o;
    } finally {
      Ie = e, rd = !1;
    }
  }
  return null;
}
var bo = [], Vo = 0, Hu = null, zu = 0, kn = [], Nn = 0, eo = null, Ar = 1, Mr = "";
function Xi(t, e) {
  bo[Vo++] = zu, bo[Vo++] = Hu, Hu = t, zu = e;
}
function Ry(t, e, n) {
  kn[Nn++] = Ar, kn[Nn++] = Mr, kn[Nn++] = eo, eo = t;
  var r = Ar;
  t = Mr;
  var o = 32 - Kn(r) - 1;
  r &= ~(1 << o), n += 1;
  var a = 32 - Kn(e) + o;
  if (30 < a) {
    var l = o - o % 5;
    a = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, Ar = 1 << 32 - Kn(e) + o | n << o | r, Mr = a + t;
  } else Ar = 1 << a | n << o | r, Mr = t;
}
function sp(t) {
  t.return !== null && (Xi(t, 1), Ry(t, 1, 0));
}
function ap(t) {
  for (; t === Hu; ) Hu = bo[--Vo], bo[Vo] = null, zu = bo[--Vo], bo[Vo] = null;
  for (; t === eo; ) eo = kn[--Nn], kn[Nn] = null, Mr = kn[--Nn], kn[Nn] = null, Ar = kn[--Nn], kn[Nn] = null;
}
var dn = null, fn = null, Ze = !1, Xn = null;
function Ay(t, e) {
  var n = Rn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = e, n.return = t, e = t.deletions, e === null ? (t.deletions = [n], t.flags |= 16) : e.push(n);
}
function Rm(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (t.stateNode = e, dn = t, fn = di(e.firstChild), !0) : !1;
    case 6:
      return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (t.stateNode = e, dn = t, fn = null, !0) : !1;
    case 13:
      return e = e.nodeType !== 8 ? null : e, e !== null ? (n = eo !== null ? { id: Ar, overflow: Mr } : null, t.memoizedState = { dehydrated: e, treeContext: n, retryLane: 1073741824 }, n = Rn(18, null, null, 0), n.stateNode = e, n.return = t, t.child = n, dn = t, fn = null, !0) : !1;
    default:
      return !1;
  }
}
function e0(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function t0(t) {
  if (Ze) {
    var e = fn;
    if (e) {
      var n = e;
      if (!Rm(t, e)) {
        if (e0(t)) throw Error(W(418));
        e = di(n.nextSibling);
        var r = dn;
        e && Rm(t, e) ? Ay(r, n) : (t.flags = t.flags & -4097 | 2, Ze = !1, dn = t);
      }
    } else {
      if (e0(t)) throw Error(W(418));
      t.flags = t.flags & -4097 | 2, Ze = !1, dn = t;
    }
  }
}
function Am(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
  dn = t;
}
function tu(t) {
  if (t !== dn) return !1;
  if (!Ze) return Am(t), Ze = !0, !1;
  var e;
  if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type, e = e !== "head" && e !== "body" && !$d(t.type, t.memoizedProps)), e && (e = fn)) {
    if (e0(t)) throw My(), Error(W(418));
    for (; e; ) Ay(t, e), e = di(e.nextSibling);
  }
  if (Am(t), t.tag === 13) {
    if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(W(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              fn = di(t.nextSibling);
              break e;
            }
            e--;
          } else n !== "$" && n !== "$!" && n !== "$?" || e++;
        }
        t = t.nextSibling;
      }
      fn = null;
    }
  } else fn = dn ? di(t.stateNode.nextSibling) : null;
  return !0;
}
function My() {
  for (var t = fn; t; ) t = di(t.nextSibling);
}
function ns() {
  fn = dn = null, Ze = !1;
}
function lp(t) {
  Xn === null ? Xn = [t] : Xn.push(t);
}
var D9 = Ur.ReactCurrentBatchConfig;
function Ys(t, e, n) {
  if (t = n.ref, t !== null && typeof t != "function" && typeof t != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(W(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(W(147, t));
      var o = r, a = "" + t;
      return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === a ? e.ref : (e = function(l) {
        var c = o.refs;
        l === null ? delete c[a] : c[a] = l;
      }, e._stringRef = a, e);
    }
    if (typeof t != "string") throw Error(W(284));
    if (!n._owner) throw Error(W(290, t));
  }
  return t;
}
function nu(t, e) {
  throw t = Object.prototype.toString.call(e), Error(W(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
}
function Mm(t) {
  var e = t._init;
  return e(t._payload);
}
function Ly(t) {
  function e(w, E) {
    if (t) {
      var g = w.deletions;
      g === null ? (w.deletions = [E], w.flags |= 16) : g.push(E);
    }
  }
  function n(w, E) {
    if (!t) return null;
    for (; E !== null; ) e(w, E), E = E.sibling;
    return null;
  }
  function r(w, E) {
    for (w = /* @__PURE__ */ new Map(); E !== null; ) E.key !== null ? w.set(E.key, E) : w.set(E.index, E), E = E.sibling;
    return w;
  }
  function o(w, E) {
    return w = vi(w, E), w.index = 0, w.sibling = null, w;
  }
  function a(w, E, g) {
    return w.index = g, t ? (g = w.alternate, g !== null ? (g = g.index, g < E ? (w.flags |= 2, E) : g) : (w.flags |= 2, E)) : (w.flags |= 1048576, E);
  }
  function l(w) {
    return t && w.alternate === null && (w.flags |= 2), w;
  }
  function c(w, E, g, C) {
    return E === null || E.tag !== 6 ? (E = cd(g, w.mode, C), E.return = w, E) : (E = o(E, g), E.return = w, E);
  }
  function h(w, E, g, C) {
    var T = g.type;
    return T === Do ? m(w, E, g.props.children, C, g.key) : E !== null && (E.elementType === T || typeof T == "object" && T !== null && T.$$typeof === ii && Mm(T) === E.type) ? (C = o(E, g.props), C.ref = Ys(w, E, g), C.return = w, C) : (C = Pu(g.type, g.key, g.props, null, w.mode, C), C.ref = Ys(w, E, g), C.return = w, C);
  }
  function d(w, E, g, C) {
    return E === null || E.tag !== 4 || E.stateNode.containerInfo !== g.containerInfo || E.stateNode.implementation !== g.implementation ? (E = hd(g, w.mode, C), E.return = w, E) : (E = o(E, g.children || []), E.return = w, E);
  }
  function m(w, E, g, C, T) {
    return E === null || E.tag !== 7 ? (E = Zi(g, w.mode, C, T), E.return = w, E) : (E = o(E, g), E.return = w, E);
  }
  function S(w, E, g) {
    if (typeof E == "string" && E !== "" || typeof E == "number") return E = cd("" + E, w.mode, g), E.return = w, E;
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Wl:
          return g = Pu(E.type, E.key, E.props, null, w.mode, g), g.ref = Ys(w, null, E), g.return = w, g;
        case Oo:
          return E = hd(E, w.mode, g), E.return = w, E;
        case ii:
          var C = E._init;
          return S(w, C(E._payload), g);
      }
      if (na(E) || Vs(E)) return E = Zi(E, w.mode, g, null), E.return = w, E;
      nu(w, E);
    }
    return null;
  }
  function y(w, E, g, C) {
    var T = E !== null ? E.key : null;
    if (typeof g == "string" && g !== "" || typeof g == "number") return T !== null ? null : c(w, E, "" + g, C);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Wl:
          return g.key === T ? h(w, E, g, C) : null;
        case Oo:
          return g.key === T ? d(w, E, g, C) : null;
        case ii:
          return T = g._init, y(
            w,
            E,
            T(g._payload),
            C
          );
      }
      if (na(g) || Vs(g)) return T !== null ? null : m(w, E, g, C, null);
      nu(w, g);
    }
    return null;
  }
  function _(w, E, g, C, T) {
    if (typeof C == "string" && C !== "" || typeof C == "number") return w = w.get(g) || null, c(E, w, "" + C, T);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case Wl:
          return w = w.get(C.key === null ? g : C.key) || null, h(E, w, C, T);
        case Oo:
          return w = w.get(C.key === null ? g : C.key) || null, d(E, w, C, T);
        case ii:
          var M = C._init;
          return _(w, E, g, M(C._payload), T);
      }
      if (na(C) || Vs(C)) return w = w.get(g) || null, m(E, w, C, T, null);
      nu(E, C);
    }
    return null;
  }
  function x(w, E, g, C) {
    for (var T = null, M = null, L = E, A = E = 0, B = null; L !== null && A < g.length; A++) {
      L.index > A ? (B = L, L = null) : B = L.sibling;
      var N = y(w, L, g[A], C);
      if (N === null) {
        L === null && (L = B);
        break;
      }
      t && L && N.alternate === null && e(w, L), E = a(N, E, A), M === null ? T = N : M.sibling = N, M = N, L = B;
    }
    if (A === g.length) return n(w, L), Ze && Xi(w, A), T;
    if (L === null) {
      for (; A < g.length; A++) L = S(w, g[A], C), L !== null && (E = a(L, E, A), M === null ? T = L : M.sibling = L, M = L);
      return Ze && Xi(w, A), T;
    }
    for (L = r(w, L); A < g.length; A++) B = _(L, w, A, g[A], C), B !== null && (t && B.alternate !== null && L.delete(B.key === null ? A : B.key), E = a(B, E, A), M === null ? T = B : M.sibling = B, M = B);
    return t && L.forEach(function(D) {
      return e(w, D);
    }), Ze && Xi(w, A), T;
  }
  function P(w, E, g, C) {
    var T = Vs(g);
    if (typeof T != "function") throw Error(W(150));
    if (g = T.call(g), g == null) throw Error(W(151));
    for (var M = T = null, L = E, A = E = 0, B = null, N = g.next(); L !== null && !N.done; A++, N = g.next()) {
      L.index > A ? (B = L, L = null) : B = L.sibling;
      var D = y(w, L, N.value, C);
      if (D === null) {
        L === null && (L = B);
        break;
      }
      t && L && D.alternate === null && e(w, L), E = a(D, E, A), M === null ? T = D : M.sibling = D, M = D, L = B;
    }
    if (N.done) return n(
      w,
      L
    ), Ze && Xi(w, A), T;
    if (L === null) {
      for (; !N.done; A++, N = g.next()) N = S(w, N.value, C), N !== null && (E = a(N, E, A), M === null ? T = N : M.sibling = N, M = N);
      return Ze && Xi(w, A), T;
    }
    for (L = r(w, L); !N.done; A++, N = g.next()) N = _(L, w, A, N.value, C), N !== null && (t && N.alternate !== null && L.delete(N.key === null ? A : N.key), E = a(N, E, A), M === null ? T = N : M.sibling = N, M = N);
    return t && L.forEach(function(z) {
      return e(w, z);
    }), Ze && Xi(w, A), T;
  }
  function R(w, E, g, C) {
    if (typeof g == "object" && g !== null && g.type === Do && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Wl:
          e: {
            for (var T = g.key, M = E; M !== null; ) {
              if (M.key === T) {
                if (T = g.type, T === Do) {
                  if (M.tag === 7) {
                    n(w, M.sibling), E = o(M, g.props.children), E.return = w, w = E;
                    break e;
                  }
                } else if (M.elementType === T || typeof T == "object" && T !== null && T.$$typeof === ii && Mm(T) === M.type) {
                  n(w, M.sibling), E = o(M, g.props), E.ref = Ys(w, M, g), E.return = w, w = E;
                  break e;
                }
                n(w, M);
                break;
              } else e(w, M);
              M = M.sibling;
            }
            g.type === Do ? (E = Zi(g.props.children, w.mode, C, g.key), E.return = w, w = E) : (C = Pu(g.type, g.key, g.props, null, w.mode, C), C.ref = Ys(w, E, g), C.return = w, w = C);
          }
          return l(w);
        case Oo:
          e: {
            for (M = g.key; E !== null; ) {
              if (E.key === M) if (E.tag === 4 && E.stateNode.containerInfo === g.containerInfo && E.stateNode.implementation === g.implementation) {
                n(w, E.sibling), E = o(E, g.children || []), E.return = w, w = E;
                break e;
              } else {
                n(w, E);
                break;
              }
              else e(w, E);
              E = E.sibling;
            }
            E = hd(g, w.mode, C), E.return = w, w = E;
          }
          return l(w);
        case ii:
          return M = g._init, R(w, E, M(g._payload), C);
      }
      if (na(g)) return x(w, E, g, C);
      if (Vs(g)) return P(w, E, g, C);
      nu(w, g);
    }
    return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, E !== null && E.tag === 6 ? (n(w, E.sibling), E = o(E, g), E.return = w, w = E) : (n(w, E), E = cd(g, w.mode, C), E.return = w, w = E), l(w)) : n(w, E);
  }
  return R;
}
var rs = Ly(!0), Fy = Ly(!1), bu = Ci(null), Vu = null, jo = null, up = null;
function cp() {
  up = jo = Vu = null;
}
function hp(t) {
  var e = bu.current;
  Qe(bu), t._currentValue = e;
}
function n0(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if ((t.childLanes & e) !== e ? (t.childLanes |= e, r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e), t === n) break;
    t = t.return;
  }
}
function qo(t, e) {
  Vu = t, up = jo = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & e && (on = !0), t.firstContext = null);
}
function Mn(t) {
  var e = t._currentValue;
  if (up !== t) if (t = { context: t, memoizedValue: e, next: null }, jo === null) {
    if (Vu === null) throw Error(W(308));
    jo = t, Vu.dependencies = { lanes: 0, firstContext: t };
  } else jo = jo.next = t;
  return e;
}
var Qi = null;
function fp(t) {
  Qi === null ? Qi = [t] : Qi.push(t);
}
function Iy(t, e, n, r) {
  var o = e.interleaved;
  return o === null ? (n.next = n, fp(e)) : (n.next = o.next, o.next = n), e.interleaved = n, Dr(t, r);
}
function Dr(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; ) t.childLanes |= e, n = t.alternate, n !== null && (n.childLanes |= e), n = t, t = t.return;
  return n.tag === 3 ? n.stateNode : null;
}
var oi = !1;
function dp(t) {
  t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Oy(t, e) {
  t = t.updateQueue, e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
}
function Lr(t, e) {
  return { eventTime: t, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function pi(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Ne & 2) {
    var o = r.pending;
    return o === null ? e.next = e : (e.next = o.next, o.next = e), r.pending = e, Dr(t, n);
  }
  return o = r.interleaved, o === null ? (e.next = e, fp(r)) : (e.next = o.next, o.next = e), r.interleaved = e, Dr(t, n);
}
function _u(t, e, n) {
  if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194240) !== 0)) {
    var r = e.lanes;
    r &= t.pendingLanes, n |= r, e.lanes = n, Z0(t, n);
  }
}
function Lm(t, e) {
  var n = t.updateQueue, r = t.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, a = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        a === null ? o = a = l : a = a.next = l, n = n.next;
      } while (n !== null);
      a === null ? o = a = e : a = a.next = e;
    } else o = a = e;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: a, shared: r.shared, effects: r.effects }, t.updateQueue = n;
    return;
  }
  t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
}
function ju(t, e, n, r) {
  var o = t.updateQueue;
  oi = !1;
  var a = o.firstBaseUpdate, l = o.lastBaseUpdate, c = o.shared.pending;
  if (c !== null) {
    o.shared.pending = null;
    var h = c, d = h.next;
    h.next = null, l === null ? a = d : l.next = d, l = h;
    var m = t.alternate;
    m !== null && (m = m.updateQueue, c = m.lastBaseUpdate, c !== l && (c === null ? m.firstBaseUpdate = d : c.next = d, m.lastBaseUpdate = h));
  }
  if (a !== null) {
    var S = o.baseState;
    l = 0, m = d = h = null, c = a;
    do {
      var y = c.lane, _ = c.eventTime;
      if ((r & y) === y) {
        m !== null && (m = m.next = {
          eventTime: _,
          lane: 0,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null
        });
        e: {
          var x = t, P = c;
          switch (y = e, _ = n, P.tag) {
            case 1:
              if (x = P.payload, typeof x == "function") {
                S = x.call(_, S, y);
                break e;
              }
              S = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = P.payload, y = typeof x == "function" ? x.call(_, S, y) : x, y == null) break e;
              S = it({}, S, y);
              break e;
            case 2:
              oi = !0;
          }
        }
        c.callback !== null && c.lane !== 0 && (t.flags |= 64, y = o.effects, y === null ? o.effects = [c] : y.push(c));
      } else _ = { eventTime: _, lane: y, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, m === null ? (d = m = _, h = S) : m = m.next = _, l |= y;
      if (c = c.next, c === null) {
        if (c = o.shared.pending, c === null) break;
        y = c, c = y.next, y.next = null, o.lastBaseUpdate = y, o.shared.pending = null;
      }
    } while (!0);
    if (m === null && (h = S), o.baseState = h, o.firstBaseUpdate = d, o.lastBaseUpdate = m, e = o.shared.interleaved, e !== null) {
      o = e;
      do
        l |= o.lane, o = o.next;
      while (o !== e);
    } else a === null && (o.shared.lanes = 0);
    no |= l, t.lanes = l, t.memoizedState = S;
  }
}
function Fm(t, e, n) {
  if (t = e.effects, e.effects = null, t !== null) for (e = 0; e < t.length; e++) {
    var r = t[e], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(W(191, o));
      o.call(r);
    }
  }
}
var Va = {}, gr = Ci(Va), Na = Ci(Va), Ra = Ci(Va);
function $i(t) {
  if (t === Va) throw Error(W(174));
  return t;
}
function pp(t, e) {
  switch (be(Ra, e), be(Na, t), be(gr, Va), t = e.nodeType, t) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Dd(null, "");
      break;
    default:
      t = t === 8 ? e.parentNode : e, e = t.namespaceURI || null, t = t.tagName, e = Dd(e, t);
  }
  Qe(gr), be(gr, e);
}
function is() {
  Qe(gr), Qe(Na), Qe(Ra);
}
function Dy(t) {
  $i(Ra.current);
  var e = $i(gr.current), n = Dd(e, t.type);
  e !== n && (be(Na, t), be(gr, n));
}
function gp(t) {
  Na.current === t && (Qe(gr), Qe(Na));
}
var nt = Ci(0);
function Wu(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      e.child.return = e, e = e.child;
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    e.sibling.return = e.return, e = e.sibling;
  }
  return null;
}
var id = [];
function mp() {
  for (var t = 0; t < id.length; t++) id[t]._workInProgressVersionPrimary = null;
  id.length = 0;
}
var Su = Ur.ReactCurrentDispatcher, od = Ur.ReactCurrentBatchConfig, to = 0, rt = null, _t = null, kt = null, Xu = !1, da = !1, Aa = 0, B9 = 0;
function Ht() {
  throw Error(W(321));
}
function vp(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++) if (!$n(t[n], e[n])) return !1;
  return !0;
}
function yp(t, e, n, r, o, a) {
  if (to = a, rt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, Su.current = t === null || t.memoizedState === null ? z9 : b9, t = n(r, o), da) {
    a = 0;
    do {
      if (da = !1, Aa = 0, 25 <= a) throw Error(W(301));
      a += 1, kt = _t = null, e.updateQueue = null, Su.current = V9, t = n(r, o);
    } while (da);
  }
  if (Su.current = Ku, e = _t !== null && _t.next !== null, to = 0, kt = _t = rt = null, Xu = !1, e) throw Error(W(300));
  return t;
}
function _p() {
  var t = Aa !== 0;
  return Aa = 0, t;
}
function lr() {
  var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return kt === null ? rt.memoizedState = kt = t : kt = kt.next = t, kt;
}
function Ln() {
  if (_t === null) {
    var t = rt.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = _t.next;
  var e = kt === null ? rt.memoizedState : kt.next;
  if (e !== null) kt = e, _t = t;
  else {
    if (t === null) throw Error(W(310));
    _t = t, t = { memoizedState: _t.memoizedState, baseState: _t.baseState, baseQueue: _t.baseQueue, queue: _t.queue, next: null }, kt === null ? rt.memoizedState = kt = t : kt = kt.next = t;
  }
  return kt;
}
function Ma(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function sd(t) {
  var e = Ln(), n = e.queue;
  if (n === null) throw Error(W(311));
  n.lastRenderedReducer = t;
  var r = _t, o = r.baseQueue, a = n.pending;
  if (a !== null) {
    if (o !== null) {
      var l = o.next;
      o.next = a.next, a.next = l;
    }
    r.baseQueue = o = a, n.pending = null;
  }
  if (o !== null) {
    a = o.next, r = r.baseState;
    var c = l = null, h = null, d = a;
    do {
      var m = d.lane;
      if ((to & m) === m) h !== null && (h = h.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : t(r, d.action);
      else {
        var S = {
          lane: m,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        h === null ? (c = h = S, l = r) : h = h.next = S, rt.lanes |= m, no |= m;
      }
      d = d.next;
    } while (d !== null && d !== a);
    h === null ? l = r : h.next = c, $n(r, e.memoizedState) || (on = !0), e.memoizedState = r, e.baseState = l, e.baseQueue = h, n.lastRenderedState = r;
  }
  if (t = n.interleaved, t !== null) {
    o = t;
    do
      a = o.lane, rt.lanes |= a, no |= a, o = o.next;
    while (o !== t);
  } else o === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function ad(t) {
  var e = Ln(), n = e.queue;
  if (n === null) throw Error(W(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch, o = n.pending, a = e.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = o = o.next;
    do
      a = t(a, l.action), l = l.next;
    while (l !== o);
    $n(a, e.memoizedState) || (on = !0), e.memoizedState = a, e.baseQueue === null && (e.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function By() {
}
function Uy(t, e) {
  var n = rt, r = Ln(), o = e(), a = !$n(r.memoizedState, o);
  if (a && (r.memoizedState = o, on = !0), r = r.queue, Sp(zy.bind(null, n, r, t), [t]), r.getSnapshot !== e || a || kt !== null && kt.memoizedState.tag & 1) {
    if (n.flags |= 2048, La(9, Hy.bind(null, n, r, o, e), void 0, null), Nt === null) throw Error(W(349));
    to & 30 || Gy(n, e, o);
  }
  return o;
}
function Gy(t, e, n) {
  t.flags |= 16384, t = { getSnapshot: e, value: n }, e = rt.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, rt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
}
function Hy(t, e, n, r) {
  e.value = n, e.getSnapshot = r, by(e) && Vy(t);
}
function zy(t, e, n) {
  return n(function() {
    by(e) && Vy(t);
  });
}
function by(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !$n(t, n);
  } catch {
    return !0;
  }
}
function Vy(t) {
  var e = Dr(t, 1);
  e !== null && Yn(e, t, 1, -1);
}
function Im(t) {
  var e = lr();
  return typeof t == "function" && (t = t()), e.memoizedState = e.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ma, lastRenderedState: t }, e.queue = t, t = t.dispatch = H9.bind(null, rt, t), [e.memoizedState, t];
}
function La(t, e, n, r) {
  return t = { tag: t, create: e, destroy: n, deps: r, next: null }, e = rt.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, rt.updateQueue = e, e.lastEffect = t.next = t) : (n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (r = n.next, n.next = t, t.next = r, e.lastEffect = t)), t;
}
function jy() {
  return Ln().memoizedState;
}
function wu(t, e, n, r) {
  var o = lr();
  rt.flags |= t, o.memoizedState = La(1 | e, n, void 0, r === void 0 ? null : r);
}
function fc(t, e, n, r) {
  var o = Ln();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (_t !== null) {
    var l = _t.memoizedState;
    if (a = l.destroy, r !== null && vp(r, l.deps)) {
      o.memoizedState = La(e, n, a, r);
      return;
    }
  }
  rt.flags |= t, o.memoizedState = La(1 | e, n, a, r);
}
function Om(t, e) {
  return wu(8390656, 8, t, e);
}
function Sp(t, e) {
  return fc(2048, 8, t, e);
}
function Wy(t, e) {
  return fc(4, 2, t, e);
}
function Xy(t, e) {
  return fc(4, 4, t, e);
}
function Ky(t, e) {
  if (typeof e == "function") return t = t(), e(t), function() {
    e(null);
  };
  if (e != null) return t = t(), e.current = t, function() {
    e.current = null;
  };
}
function Yy(t, e, n) {
  return n = n != null ? n.concat([t]) : null, fc(4, 4, Ky.bind(null, e, t), n);
}
function wp() {
}
function Qy(t, e) {
  var n = Ln();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && vp(e, r[1]) ? r[0] : (n.memoizedState = [t, e], t);
}
function $y(t, e) {
  var n = Ln();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && vp(e, r[1]) ? r[0] : (t = t(), n.memoizedState = [t, e], t);
}
function qy(t, e, n) {
  return to & 21 ? ($n(n, e) || (n = ny(), rt.lanes |= n, no |= n, t.baseState = !0), e) : (t.baseState && (t.baseState = !1, on = !0), t.memoizedState = n);
}
function U9(t, e) {
  var n = Ie;
  Ie = n !== 0 && 4 > n ? n : 4, t(!0);
  var r = od.transition;
  od.transition = {};
  try {
    t(!1), e();
  } finally {
    Ie = n, od.transition = r;
  }
}
function Zy() {
  return Ln().memoizedState;
}
function G9(t, e, n) {
  var r = mi(t);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Jy(t)) e3(e, n);
  else if (n = Iy(t, e, n, r), n !== null) {
    var o = Yt();
    Yn(n, t, r, o), t3(n, e, r);
  }
}
function H9(t, e, n) {
  var r = mi(t), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Jy(t)) e3(e, o);
  else {
    var a = t.alternate;
    if (t.lanes === 0 && (a === null || a.lanes === 0) && (a = e.lastRenderedReducer, a !== null)) try {
      var l = e.lastRenderedState, c = a(l, n);
      if (o.hasEagerState = !0, o.eagerState = c, $n(c, l)) {
        var h = e.interleaved;
        h === null ? (o.next = o, fp(e)) : (o.next = h.next, h.next = o), e.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Iy(t, e, o, r), n !== null && (o = Yt(), Yn(n, t, r, o), t3(n, e, r));
  }
}
function Jy(t) {
  var e = t.alternate;
  return t === rt || e !== null && e === rt;
}
function e3(t, e) {
  da = Xu = !0;
  var n = t.pending;
  n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
}
function t3(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    r &= t.pendingLanes, n |= r, e.lanes = n, Z0(t, n);
  }
}
var Ku = { readContext: Mn, useCallback: Ht, useContext: Ht, useEffect: Ht, useImperativeHandle: Ht, useInsertionEffect: Ht, useLayoutEffect: Ht, useMemo: Ht, useReducer: Ht, useRef: Ht, useState: Ht, useDebugValue: Ht, useDeferredValue: Ht, useTransition: Ht, useMutableSource: Ht, useSyncExternalStore: Ht, useId: Ht, unstable_isNewReconciler: !1 }, z9 = { readContext: Mn, useCallback: function(t, e) {
  return lr().memoizedState = [t, e === void 0 ? null : e], t;
}, useContext: Mn, useEffect: Om, useImperativeHandle: function(t, e, n) {
  return n = n != null ? n.concat([t]) : null, wu(
    4194308,
    4,
    Ky.bind(null, e, t),
    n
  );
}, useLayoutEffect: function(t, e) {
  return wu(4194308, 4, t, e);
}, useInsertionEffect: function(t, e) {
  return wu(4, 2, t, e);
}, useMemo: function(t, e) {
  var n = lr();
  return e = e === void 0 ? null : e, t = t(), n.memoizedState = [t, e], t;
}, useReducer: function(t, e, n) {
  var r = lr();
  return e = n !== void 0 ? n(e) : e, r.memoizedState = r.baseState = e, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: e }, r.queue = t, t = t.dispatch = G9.bind(null, rt, t), [r.memoizedState, t];
}, useRef: function(t) {
  var e = lr();
  return t = { current: t }, e.memoizedState = t;
}, useState: Im, useDebugValue: wp, useDeferredValue: function(t) {
  return lr().memoizedState = t;
}, useTransition: function() {
  var t = Im(!1), e = t[0];
  return t = U9.bind(null, t[1]), lr().memoizedState = t, [e, t];
}, useMutableSource: function() {
}, useSyncExternalStore: function(t, e, n) {
  var r = rt, o = lr();
  if (Ze) {
    if (n === void 0) throw Error(W(407));
    n = n();
  } else {
    if (n = e(), Nt === null) throw Error(W(349));
    to & 30 || Gy(r, e, n);
  }
  o.memoizedState = n;
  var a = { value: n, getSnapshot: e };
  return o.queue = a, Om(zy.bind(
    null,
    r,
    a,
    t
  ), [t]), r.flags |= 2048, La(9, Hy.bind(null, r, a, n, e), void 0, null), n;
}, useId: function() {
  var t = lr(), e = Nt.identifierPrefix;
  if (Ze) {
    var n = Mr, r = Ar;
    n = (r & ~(1 << 32 - Kn(r) - 1)).toString(32) + n, e = ":" + e + "R" + n, n = Aa++, 0 < n && (e += "H" + n.toString(32)), e += ":";
  } else n = B9++, e = ":" + e + "r" + n.toString(32) + ":";
  return t.memoizedState = e;
}, unstable_isNewReconciler: !1 }, b9 = {
  readContext: Mn,
  useCallback: Qy,
  useContext: Mn,
  useEffect: Sp,
  useImperativeHandle: Yy,
  useInsertionEffect: Wy,
  useLayoutEffect: Xy,
  useMemo: $y,
  useReducer: sd,
  useRef: jy,
  useState: function() {
    return sd(Ma);
  },
  useDebugValue: wp,
  useDeferredValue: function(t) {
    var e = Ln();
    return qy(e, _t.memoizedState, t);
  },
  useTransition: function() {
    var t = sd(Ma)[0], e = Ln().memoizedState;
    return [t, e];
  },
  useMutableSource: By,
  useSyncExternalStore: Uy,
  useId: Zy,
  unstable_isNewReconciler: !1
}, V9 = { readContext: Mn, useCallback: Qy, useContext: Mn, useEffect: Sp, useImperativeHandle: Yy, useInsertionEffect: Wy, useLayoutEffect: Xy, useMemo: $y, useReducer: ad, useRef: jy, useState: function() {
  return ad(Ma);
}, useDebugValue: wp, useDeferredValue: function(t) {
  var e = Ln();
  return _t === null ? e.memoizedState = t : qy(e, _t.memoizedState, t);
}, useTransition: function() {
  var t = ad(Ma)[0], e = Ln().memoizedState;
  return [t, e];
}, useMutableSource: By, useSyncExternalStore: Uy, useId: Zy, unstable_isNewReconciler: !1 };
function jn(t, e) {
  if (t && t.defaultProps) {
    e = it({}, e), t = t.defaultProps;
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
function r0(t, e, n, r) {
  e = t.memoizedState, n = n(r, e), n = n == null ? e : it({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
}
var dc = { isMounted: function(t) {
  return (t = t._reactInternals) ? so(t) === t : !1;
}, enqueueSetState: function(t, e, n) {
  t = t._reactInternals;
  var r = Yt(), o = mi(t), a = Lr(r, o);
  a.payload = e, n != null && (a.callback = n), e = pi(t, a, o), e !== null && (Yn(e, t, o, r), _u(e, t, o));
}, enqueueReplaceState: function(t, e, n) {
  t = t._reactInternals;
  var r = Yt(), o = mi(t), a = Lr(r, o);
  a.tag = 1, a.payload = e, n != null && (a.callback = n), e = pi(t, a, o), e !== null && (Yn(e, t, o, r), _u(e, t, o));
}, enqueueForceUpdate: function(t, e) {
  t = t._reactInternals;
  var n = Yt(), r = mi(t), o = Lr(n, r);
  o.tag = 2, e != null && (o.callback = e), e = pi(t, o, r), e !== null && (Yn(e, t, r, n), _u(e, t, r));
} };
function Dm(t, e, n, r, o, a, l) {
  return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, a, l) : e.prototype && e.prototype.isPureReactComponent ? !Ca(n, r) || !Ca(o, a) : !0;
}
function n3(t, e, n) {
  var r = !1, o = _i, a = e.contextType;
  return typeof a == "object" && a !== null ? a = Mn(a) : (o = an(e) ? Ji : Vt.current, r = e.contextTypes, a = (r = r != null) ? ts(t, o) : _i), e = new e(n, a), t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = dc, t.stateNode = e, e._reactInternals = t, r && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = o, t.__reactInternalMemoizedMaskedChildContext = a), e;
}
function Bm(t, e, n, r) {
  t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, r), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, r), e.state !== t && dc.enqueueReplaceState(e, e.state, null);
}
function i0(t, e, n, r) {
  var o = t.stateNode;
  o.props = n, o.state = t.memoizedState, o.refs = {}, dp(t);
  var a = e.contextType;
  typeof a == "object" && a !== null ? o.context = Mn(a) : (a = an(e) ? Ji : Vt.current, o.context = ts(t, a)), o.state = t.memoizedState, a = e.getDerivedStateFromProps, typeof a == "function" && (r0(t, e, a, n), o.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (e = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), e !== o.state && dc.enqueueReplaceState(o, o.state, null), ju(t, n, o, r), o.state = t.memoizedState), typeof o.componentDidMount == "function" && (t.flags |= 4194308);
}
function os(t, e) {
  try {
    var n = "", r = e;
    do
      n += v8(r), r = r.return;
    while (r);
    var o = n;
  } catch (a) {
    o = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: t, source: e, stack: o, digest: null };
}
function ld(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function o0(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var j9 = typeof WeakMap == "function" ? WeakMap : Map;
function r3(t, e, n) {
  n = Lr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = e.value;
  return n.callback = function() {
    Qu || (Qu = !0, g0 = r), o0(t, e);
  }, n;
}
function i3(t, e, n) {
  n = Lr(-1, n), n.tag = 3;
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = e.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      o0(t, e);
    };
  }
  var a = t.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    o0(t, e), typeof r != "function" && (gi === null ? gi = /* @__PURE__ */ new Set([this]) : gi.add(this));
    var l = e.stack;
    this.componentDidCatch(e.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function Um(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new j9();
    var o = /* @__PURE__ */ new Set();
    r.set(e, o);
  } else o = r.get(e), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(e, o));
  o.has(n) || (o.add(n), t = i_.bind(null, t, e, n), e.then(t, t));
}
function Gm(t) {
  do {
    var e;
    if ((e = t.tag === 13) && (e = t.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e) return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function Hm(t, e, n, r, o) {
  return t.mode & 1 ? (t.flags |= 65536, t.lanes = o, t) : (t === e ? t.flags |= 65536 : (t.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = Lr(-1, 1), e.tag = 2, pi(n, e, 1))), n.lanes |= 1), t);
}
var W9 = Ur.ReactCurrentOwner, on = !1;
function Kt(t, e, n, r) {
  e.child = t === null ? Fy(e, null, n, r) : rs(e, t.child, n, r);
}
function zm(t, e, n, r, o) {
  n = n.render;
  var a = e.ref;
  return qo(e, o), r = yp(t, e, n, r, a, o), n = _p(), t !== null && !on ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~o, Br(t, e, o)) : (Ze && n && sp(e), e.flags |= 1, Kt(t, e, r, o), e.child);
}
function bm(t, e, n, r, o) {
  if (t === null) {
    var a = n.type;
    return typeof a == "function" && !Rp(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15, e.type = a, o3(t, e, a, r, o)) : (t = Pu(n.type, null, r, e, e.mode, o), t.ref = e.ref, t.return = e, e.child = t);
  }
  if (a = t.child, !(t.lanes & o)) {
    var l = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ca, n(l, r) && t.ref === e.ref) return Br(t, e, o);
  }
  return e.flags |= 1, t = vi(a, r), t.ref = e.ref, t.return = e, e.child = t;
}
function o3(t, e, n, r, o) {
  if (t !== null) {
    var a = t.memoizedProps;
    if (Ca(a, r) && t.ref === e.ref) if (on = !1, e.pendingProps = r = a, (t.lanes & o) !== 0) t.flags & 131072 && (on = !0);
    else return e.lanes = t.lanes, Br(t, e, o);
  }
  return s0(t, e, n, r, o);
}
function s3(t, e, n) {
  var r = e.pendingProps, o = r.children, a = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden") if (!(e.mode & 1)) e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, be(Xo, hn), hn |= n;
  else {
    if (!(n & 1073741824)) return t = a !== null ? a.baseLanes | n : n, e.lanes = e.childLanes = 1073741824, e.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, e.updateQueue = null, be(Xo, hn), hn |= t, null;
    e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, be(Xo, hn), hn |= r;
  }
  else a !== null ? (r = a.baseLanes | n, e.memoizedState = null) : r = n, be(Xo, hn), hn |= r;
  return Kt(t, e, o, n), e.child;
}
function a3(t, e) {
  var n = e.ref;
  (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512, e.flags |= 2097152);
}
function s0(t, e, n, r, o) {
  var a = an(n) ? Ji : Vt.current;
  return a = ts(e, a), qo(e, o), n = yp(t, e, n, r, a, o), r = _p(), t !== null && !on ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~o, Br(t, e, o)) : (Ze && r && sp(e), e.flags |= 1, Kt(t, e, n, o), e.child);
}
function Vm(t, e, n, r, o) {
  if (an(n)) {
    var a = !0;
    Gu(e);
  } else a = !1;
  if (qo(e, o), e.stateNode === null) xu(t, e), n3(e, n, r), i0(e, n, r, o), r = !0;
  else if (t === null) {
    var l = e.stateNode, c = e.memoizedProps;
    l.props = c;
    var h = l.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = Mn(d) : (d = an(n) ? Ji : Vt.current, d = ts(e, d));
    var m = n.getDerivedStateFromProps, S = typeof m == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    S || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (c !== r || h !== d) && Bm(e, l, r, d), oi = !1;
    var y = e.memoizedState;
    l.state = y, ju(e, r, l, o), h = e.memoizedState, c !== r || y !== h || sn.current || oi ? (typeof m == "function" && (r0(e, n, m, r), h = e.memoizedState), (c = oi || Dm(e, n, c, r, y, h, d)) ? (S || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = r, e.memoizedState = h), l.props = r, l.state = h, l.context = d, r = c) : (typeof l.componentDidMount == "function" && (e.flags |= 4194308), r = !1);
  } else {
    l = e.stateNode, Oy(t, e), c = e.memoizedProps, d = e.type === e.elementType ? c : jn(e.type, c), l.props = d, S = e.pendingProps, y = l.context, h = n.contextType, typeof h == "object" && h !== null ? h = Mn(h) : (h = an(n) ? Ji : Vt.current, h = ts(e, h));
    var _ = n.getDerivedStateFromProps;
    (m = typeof _ == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (c !== S || y !== h) && Bm(e, l, r, h), oi = !1, y = e.memoizedState, l.state = y, ju(e, r, l, o);
    var x = e.memoizedState;
    c !== S || y !== x || sn.current || oi ? (typeof _ == "function" && (r0(e, n, _, r), x = e.memoizedState), (d = oi || Dm(e, n, d, r, y, x, h) || !1) ? (m || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, x, h), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, x, h)), typeof l.componentDidUpdate == "function" && (e.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || c === t.memoizedProps && y === t.memoizedState || (e.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && y === t.memoizedState || (e.flags |= 1024), e.memoizedProps = r, e.memoizedState = x), l.props = r, l.state = x, l.context = h, r = d) : (typeof l.componentDidUpdate != "function" || c === t.memoizedProps && y === t.memoizedState || (e.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && y === t.memoizedState || (e.flags |= 1024), r = !1);
  }
  return a0(t, e, n, r, a, o);
}
function a0(t, e, n, r, o, a) {
  a3(t, e);
  var l = (e.flags & 128) !== 0;
  if (!r && !l) return o && Nm(e, n, !1), Br(t, e, a);
  r = e.stateNode, W9.current = e;
  var c = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return e.flags |= 1, t !== null && l ? (e.child = rs(e, t.child, null, a), e.child = rs(e, null, c, a)) : Kt(t, e, c, a), e.memoizedState = r.state, o && Nm(e, n, !0), e.child;
}
function l3(t) {
  var e = t.stateNode;
  e.pendingContext ? km(t, e.pendingContext, e.pendingContext !== e.context) : e.context && km(t, e.context, !1), pp(t, e.containerInfo);
}
function jm(t, e, n, r, o) {
  return ns(), lp(o), e.flags |= 256, Kt(t, e, n, r), e.child;
}
var l0 = { dehydrated: null, treeContext: null, retryLane: 0 };
function u0(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function u3(t, e, n) {
  var r = e.pendingProps, o = nt.current, a = !1, l = (e.flags & 128) !== 0, c;
  if ((c = l) || (c = t !== null && t.memoizedState === null ? !1 : (o & 2) !== 0), c ? (a = !0, e.flags &= -129) : (t === null || t.memoizedState !== null) && (o |= 1), be(nt, o & 1), t === null)
    return t0(e), t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (l = r.children, t = r.fallback, a ? (r = e.mode, a = e.child, l = { mode: "hidden", children: l }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = l) : a = mc(l, r, 0, null), t = Zi(t, r, n, null), a.return = e, t.return = e, a.sibling = t, e.child = a, e.child.memoizedState = u0(n), e.memoizedState = l0, t) : xp(e, l));
  if (o = t.memoizedState, o !== null && (c = o.dehydrated, c !== null)) return X9(t, e, l, r, c, o, n);
  if (a) {
    a = r.fallback, l = e.mode, o = t.child, c = o.sibling;
    var h = { mode: "hidden", children: r.children };
    return !(l & 1) && e.child !== o ? (r = e.child, r.childLanes = 0, r.pendingProps = h, e.deletions = null) : (r = vi(o, h), r.subtreeFlags = o.subtreeFlags & 14680064), c !== null ? a = vi(c, a) : (a = Zi(a, l, n, null), a.flags |= 2), a.return = e, r.return = e, r.sibling = a, e.child = r, r = a, a = e.child, l = t.child.memoizedState, l = l === null ? u0(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, a.memoizedState = l, a.childLanes = t.childLanes & ~n, e.memoizedState = l0, r;
  }
  return a = t.child, t = a.sibling, r = vi(a, { mode: "visible", children: r.children }), !(e.mode & 1) && (r.lanes = n), r.return = e, r.sibling = null, t !== null && (n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t)), e.child = r, e.memoizedState = null, r;
}
function xp(t, e) {
  return e = mc({ mode: "visible", children: e }, t.mode, 0, null), e.return = t, t.child = e;
}
function ru(t, e, n, r) {
  return r !== null && lp(r), rs(e, t.child, null, n), t = xp(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
}
function X9(t, e, n, r, o, a, l) {
  if (n)
    return e.flags & 256 ? (e.flags &= -257, r = ld(Error(W(422))), ru(t, e, l, r)) : e.memoizedState !== null ? (e.child = t.child, e.flags |= 128, null) : (a = r.fallback, o = e.mode, r = mc({ mode: "visible", children: r.children }, o, 0, null), a = Zi(a, o, l, null), a.flags |= 2, r.return = e, a.return = e, r.sibling = a, e.child = r, e.mode & 1 && rs(e, t.child, null, l), e.child.memoizedState = u0(l), e.memoizedState = l0, a);
  if (!(e.mode & 1)) return ru(t, e, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var c = r.dgst;
    return r = c, a = Error(W(419)), r = ld(a, r, void 0), ru(t, e, l, r);
  }
  if (c = (l & t.childLanes) !== 0, on || c) {
    if (r = Nt, r !== null) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== a.retryLane && (a.retryLane = o, Dr(t, o), Yn(r, t, o, -1));
    }
    return Np(), r = ld(Error(W(421))), ru(t, e, l, r);
  }
  return o.data === "$?" ? (e.flags |= 128, e.child = t.child, e = o_.bind(null, t), o._reactRetry = e, null) : (t = a.treeContext, fn = di(o.nextSibling), dn = e, Ze = !0, Xn = null, t !== null && (kn[Nn++] = Ar, kn[Nn++] = Mr, kn[Nn++] = eo, Ar = t.id, Mr = t.overflow, eo = e), e = xp(e, r.children), e.flags |= 4096, e);
}
function Wm(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), n0(t.return, e, n);
}
function ud(t, e, n, r, o) {
  var a = t.memoizedState;
  a === null ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (a.isBackwards = e, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = o);
}
function c3(t, e, n) {
  var r = e.pendingProps, o = r.revealOrder, a = r.tail;
  if (Kt(t, e, r.children, n), r = nt.current, r & 2) r = r & 1 | 2, e.flags |= 128;
  else {
    if (t !== null && t.flags & 128) e: for (t = e.child; t !== null; ) {
      if (t.tag === 13) t.memoizedState !== null && Wm(t, n, e);
      else if (t.tag === 19) Wm(t, n, e);
      else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break e;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) break e;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    r &= 1;
  }
  if (be(nt, r), !(e.mode & 1)) e.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = e.child, o = null; n !== null; ) t = n.alternate, t !== null && Wu(t) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = e.child, e.child = null) : (o = n.sibling, n.sibling = null), ud(e, !1, o, n, a);
      break;
    case "backwards":
      for (n = null, o = e.child, e.child = null; o !== null; ) {
        if (t = o.alternate, t !== null && Wu(t) === null) {
          e.child = o;
          break;
        }
        t = o.sibling, o.sibling = n, n = o, o = t;
      }
      ud(e, !0, n, null, a);
      break;
    case "together":
      ud(e, !1, null, null, void 0);
      break;
    default:
      e.memoizedState = null;
  }
  return e.child;
}
function xu(t, e) {
  !(e.mode & 1) && t !== null && (t.alternate = null, e.alternate = null, e.flags |= 2);
}
function Br(t, e, n) {
  if (t !== null && (e.dependencies = t.dependencies), no |= e.lanes, !(n & e.childLanes)) return null;
  if (t !== null && e.child !== t.child) throw Error(W(153));
  if (e.child !== null) {
    for (t = e.child, n = vi(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; ) t = t.sibling, n = n.sibling = vi(t, t.pendingProps), n.return = e;
    n.sibling = null;
  }
  return e.child;
}
function K9(t, e, n) {
  switch (e.tag) {
    case 3:
      l3(e), ns();
      break;
    case 5:
      Dy(e);
      break;
    case 1:
      an(e.type) && Gu(e);
      break;
    case 4:
      pp(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context, o = e.memoizedProps.value;
      be(bu, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = e.memoizedState, r !== null)
        return r.dehydrated !== null ? (be(nt, nt.current & 1), e.flags |= 128, null) : n & e.child.childLanes ? u3(t, e, n) : (be(nt, nt.current & 1), t = Br(t, e, n), t !== null ? t.sibling : null);
      be(nt, nt.current & 1);
      break;
    case 19:
      if (r = (n & e.childLanes) !== 0, t.flags & 128) {
        if (r) return c3(t, e, n);
        e.flags |= 128;
      }
      if (o = e.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), be(nt, nt.current), r) break;
      return null;
    case 22:
    case 23:
      return e.lanes = 0, s3(t, e, n);
  }
  return Br(t, e, n);
}
var h3, c0, f3, d3;
h3 = function(t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
c0 = function() {
};
f3 = function(t, e, n, r) {
  var o = t.memoizedProps;
  if (o !== r) {
    t = e.stateNode, $i(gr.current);
    var a = null;
    switch (n) {
      case "input":
        o = Ld(t, o), r = Ld(t, r), a = [];
        break;
      case "select":
        o = it({}, o, { value: void 0 }), r = it({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        o = Od(t, o), r = Od(t, r), a = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (t.onclick = Bu);
    }
    Bd(n, r);
    var l;
    n = null;
    for (d in o) if (!r.hasOwnProperty(d) && o.hasOwnProperty(d) && o[d] != null) if (d === "style") {
      var c = o[d];
      for (l in c) c.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (va.hasOwnProperty(d) ? a || (a = []) : (a = a || []).push(d, null));
    for (d in r) {
      var h = r[d];
      if (c = o != null ? o[d] : void 0, r.hasOwnProperty(d) && h !== c && (h != null || c != null)) if (d === "style") if (c) {
        for (l in c) !c.hasOwnProperty(l) || h && h.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in h) h.hasOwnProperty(l) && c[l] !== h[l] && (n || (n = {}), n[l] = h[l]);
      } else n || (a || (a = []), a.push(
        d,
        n
      )), n = h;
      else d === "dangerouslySetInnerHTML" ? (h = h ? h.__html : void 0, c = c ? c.__html : void 0, h != null && c !== h && (a = a || []).push(d, h)) : d === "children" ? typeof h != "string" && typeof h != "number" || (a = a || []).push(d, "" + h) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (va.hasOwnProperty(d) ? (h != null && d === "onScroll" && Ke("scroll", t), a || c === h || (a = [])) : (a = a || []).push(d, h));
    }
    n && (a = a || []).push("style", n);
    var d = a;
    (e.updateQueue = d) && (e.flags |= 4);
  }
};
d3 = function(t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function Qs(t, e) {
  if (!Ze) switch (t.tailMode) {
    case "hidden":
      e = t.tail;
      for (var n = null; e !== null; ) e.alternate !== null && (n = e), e = e.sibling;
      n === null ? t.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = t.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : r.sibling = null;
  }
}
function zt(t) {
  var e = t.alternate !== null && t.alternate.child === t.child, n = 0, r = 0;
  if (e) for (var o = t.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = t, o = o.sibling;
  else for (o = t.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = t, o = o.sibling;
  return t.subtreeFlags |= r, t.childLanes = n, e;
}
function Y9(t, e, n) {
  var r = e.pendingProps;
  switch (ap(e), e.tag) {
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
      return zt(e), null;
    case 1:
      return an(e.type) && Uu(), zt(e), null;
    case 3:
      return r = e.stateNode, is(), Qe(sn), Qe(Vt), mp(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (t === null || t.child === null) && (tu(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, Xn !== null && (y0(Xn), Xn = null))), c0(t, e), zt(e), null;
    case 5:
      gp(e);
      var o = $i(Ra.current);
      if (n = e.type, t !== null && e.stateNode != null) f3(t, e, n, r, o), t.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(W(166));
          return zt(e), null;
        }
        if (t = $i(gr.current), tu(e)) {
          r = e.stateNode, n = e.type;
          var a = e.memoizedProps;
          switch (r[fr] = e, r[ka] = a, t = (e.mode & 1) !== 0, n) {
            case "dialog":
              Ke("cancel", r), Ke("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ke("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ia.length; o++) Ke(ia[o], r);
              break;
            case "source":
              Ke("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ke(
                "error",
                r
              ), Ke("load", r);
              break;
            case "details":
              Ke("toggle", r);
              break;
            case "input":
              em(r, a), Ke("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, Ke("invalid", r);
              break;
            case "textarea":
              nm(r, a), Ke("invalid", r);
          }
          Bd(n, a), o = null;
          for (var l in a) if (a.hasOwnProperty(l)) {
            var c = a[l];
            l === "children" ? typeof c == "string" ? r.textContent !== c && (a.suppressHydrationWarning !== !0 && eu(r.textContent, c, t), o = ["children", c]) : typeof c == "number" && r.textContent !== "" + c && (a.suppressHydrationWarning !== !0 && eu(
              r.textContent,
              c,
              t
            ), o = ["children", "" + c]) : va.hasOwnProperty(l) && c != null && l === "onScroll" && Ke("scroll", r);
          }
          switch (n) {
            case "input":
              Xl(r), tm(r, a, !0);
              break;
            case "textarea":
              Xl(r), rm(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Bu);
          }
          r = o, e.updateQueue = r, r !== null && (e.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = zv(n)), t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = l.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof r.is == "string" ? t = l.createElement(n, { is: r.is }) : (t = l.createElement(n), n === "select" && (l = t, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : t = l.createElementNS(t, n), t[fr] = e, t[ka] = r, h3(t, e, !1, !1), e.stateNode = t;
          e: {
            switch (l = Ud(n, r), n) {
              case "dialog":
                Ke("cancel", t), Ke("close", t), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Ke("load", t), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < ia.length; o++) Ke(ia[o], t);
                o = r;
                break;
              case "source":
                Ke("error", t), o = r;
                break;
              case "img":
              case "image":
              case "link":
                Ke(
                  "error",
                  t
                ), Ke("load", t), o = r;
                break;
              case "details":
                Ke("toggle", t), o = r;
                break;
              case "input":
                em(t, r), o = Ld(t, r), Ke("invalid", t);
                break;
              case "option":
                o = r;
                break;
              case "select":
                t._wrapperState = { wasMultiple: !!r.multiple }, o = it({}, r, { value: void 0 }), Ke("invalid", t);
                break;
              case "textarea":
                nm(t, r), o = Od(t, r), Ke("invalid", t);
                break;
              default:
                o = r;
            }
            Bd(n, o), c = o;
            for (a in c) if (c.hasOwnProperty(a)) {
              var h = c[a];
              a === "style" ? jv(t, h) : a === "dangerouslySetInnerHTML" ? (h = h ? h.__html : void 0, h != null && bv(t, h)) : a === "children" ? typeof h == "string" ? (n !== "textarea" || h !== "") && ya(t, h) : typeof h == "number" && ya(t, "" + h) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (va.hasOwnProperty(a) ? h != null && a === "onScroll" && Ke("scroll", t) : h != null && X0(t, a, h, l));
            }
            switch (n) {
              case "input":
                Xl(t), tm(t, r, !1);
                break;
              case "textarea":
                Xl(t), rm(t);
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + yi(r.value));
                break;
              case "select":
                t.multiple = !!r.multiple, a = r.value, a != null ? Ko(t, !!r.multiple, a, !1) : r.defaultValue != null && Ko(
                  t,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (t.onclick = Bu);
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
          r && (e.flags |= 4);
        }
        e.ref !== null && (e.flags |= 512, e.flags |= 2097152);
      }
      return zt(e), null;
    case 6:
      if (t && e.stateNode != null) d3(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(W(166));
        if (n = $i(Ra.current), $i(gr.current), tu(e)) {
          if (r = e.stateNode, n = e.memoizedProps, r[fr] = e, (a = r.nodeValue !== n) && (t = dn, t !== null)) switch (t.tag) {
            case 3:
              eu(r.nodeValue, n, (t.mode & 1) !== 0);
              break;
            case 5:
              t.memoizedProps.suppressHydrationWarning !== !0 && eu(r.nodeValue, n, (t.mode & 1) !== 0);
          }
          a && (e.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[fr] = e, e.stateNode = r;
      }
      return zt(e), null;
    case 13:
      if (Qe(nt), r = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
        if (Ze && fn !== null && e.mode & 1 && !(e.flags & 128)) My(), ns(), e.flags |= 98560, a = !1;
        else if (a = tu(e), r !== null && r.dehydrated !== null) {
          if (t === null) {
            if (!a) throw Error(W(318));
            if (a = e.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(W(317));
            a[fr] = e;
          } else ns(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
          zt(e), a = !1;
        } else Xn !== null && (y0(Xn), Xn = null), a = !0;
        if (!a) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128 ? (e.lanes = n, e) : (r = r !== null, r !== (t !== null && t.memoizedState !== null) && r && (e.child.flags |= 8192, e.mode & 1 && (t === null || nt.current & 1 ? St === 0 && (St = 3) : Np())), e.updateQueue !== null && (e.flags |= 4), zt(e), null);
    case 4:
      return is(), c0(t, e), t === null && Pa(e.stateNode.containerInfo), zt(e), null;
    case 10:
      return hp(e.type._context), zt(e), null;
    case 17:
      return an(e.type) && Uu(), zt(e), null;
    case 19:
      if (Qe(nt), a = e.memoizedState, a === null) return zt(e), null;
      if (r = (e.flags & 128) !== 0, l = a.rendering, l === null) if (r) Qs(a, !1);
      else {
        if (St !== 0 || t !== null && t.flags & 128) for (t = e.child; t !== null; ) {
          if (l = Wu(t), l !== null) {
            for (e.flags |= 128, Qs(a, !1), r = l.updateQueue, r !== null && (e.updateQueue = r, e.flags |= 4), e.subtreeFlags = 0, r = n, n = e.child; n !== null; ) a = n, t = r, a.flags &= 14680066, l = a.alternate, l === null ? (a.childLanes = 0, a.lanes = t, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, a.type = l.type, t = l.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), n = n.sibling;
            return be(nt, nt.current & 1 | 2), e.child;
          }
          t = t.sibling;
        }
        a.tail !== null && ct() > ss && (e.flags |= 128, r = !0, Qs(a, !1), e.lanes = 4194304);
      }
      else {
        if (!r) if (t = Wu(l), t !== null) {
          if (e.flags |= 128, r = !0, n = t.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), Qs(a, !0), a.tail === null && a.tailMode === "hidden" && !l.alternate && !Ze) return zt(e), null;
        } else 2 * ct() - a.renderingStartTime > ss && n !== 1073741824 && (e.flags |= 128, r = !0, Qs(a, !1), e.lanes = 4194304);
        a.isBackwards ? (l.sibling = e.child, e.child = l) : (n = a.last, n !== null ? n.sibling = l : e.child = l, a.last = l);
      }
      return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = ct(), e.sibling = null, n = nt.current, be(nt, r ? n & 1 | 2 : n & 1), e) : (zt(e), null);
    case 22:
    case 23:
      return kp(), r = e.memoizedState !== null, t !== null && t.memoizedState !== null !== r && (e.flags |= 8192), r && e.mode & 1 ? hn & 1073741824 && (zt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : zt(e), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(W(156, e.tag));
}
function Q9(t, e) {
  switch (ap(e), e.tag) {
    case 1:
      return an(e.type) && Uu(), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 3:
      return is(), Qe(sn), Qe(Vt), mp(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
    case 5:
      return gp(e), null;
    case 13:
      if (Qe(nt), t = e.memoizedState, t !== null && t.dehydrated !== null) {
        if (e.alternate === null) throw Error(W(340));
        ns();
      }
      return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 19:
      return Qe(nt), null;
    case 4:
      return is(), null;
    case 10:
      return hp(e.type._context), null;
    case 22:
    case 23:
      return kp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var iu = !1, bt = !1, $9 = typeof WeakSet == "function" ? WeakSet : Set, J = null;
function Wo(t, e) {
  var n = t.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    st(t, e, r);
  }
  else n.current = null;
}
function h0(t, e, n) {
  try {
    n();
  } catch (r) {
    st(t, e, r);
  }
}
var Xm = !1;
function q9(t, e) {
  if (Yd = Iu, t = yy(), op(t)) {
    if ("selectionStart" in t) var n = { start: t.selectionStart, end: t.selectionEnd };
    else e: {
      n = (n = t.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, a = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, a.nodeType;
        } catch {
          n = null;
          break e;
        }
        var l = 0, c = -1, h = -1, d = 0, m = 0, S = t, y = null;
        t: for (; ; ) {
          for (var _; S !== n || o !== 0 && S.nodeType !== 3 || (c = l + o), S !== a || r !== 0 && S.nodeType !== 3 || (h = l + r), S.nodeType === 3 && (l += S.nodeValue.length), (_ = S.firstChild) !== null; )
            y = S, S = _;
          for (; ; ) {
            if (S === t) break t;
            if (y === n && ++d === o && (c = l), y === a && ++m === r && (h = l), (_ = S.nextSibling) !== null) break;
            S = y, y = S.parentNode;
          }
          S = _;
        }
        n = c === -1 || h === -1 ? null : { start: c, end: h };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Qd = { focusedElem: t, selectionRange: n }, Iu = !1, J = e; J !== null; ) if (e = J, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, J = t;
  else for (; J !== null; ) {
    e = J;
    try {
      var x = e.alternate;
      if (e.flags & 1024) switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (x !== null) {
            var P = x.memoizedProps, R = x.memoizedState, w = e.stateNode, E = w.getSnapshotBeforeUpdate(e.elementType === e.type ? P : jn(e.type, P), R);
            w.__reactInternalSnapshotBeforeUpdate = E;
          }
          break;
        case 3:
          var g = e.stateNode.containerInfo;
          g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(W(163));
      }
    } catch (C) {
      st(e, e.return, C);
    }
    if (t = e.sibling, t !== null) {
      t.return = e.return, J = t;
      break;
    }
    J = e.return;
  }
  return x = Xm, Xm = !1, x;
}
function pa(t, e, n) {
  var r = e.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & t) === t) {
        var a = o.destroy;
        o.destroy = void 0, a !== void 0 && h0(e, n, a);
      }
      o = o.next;
    } while (o !== r);
  }
}
function pc(t, e) {
  if (e = e.updateQueue, e = e !== null ? e.lastEffect : null, e !== null) {
    var n = e = e.next;
    do {
      if ((n.tag & t) === t) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== e);
  }
}
function f0(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : e.current = t;
  }
}
function p3(t) {
  var e = t.alternate;
  e !== null && (t.alternate = null, p3(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && (delete e[fr], delete e[ka], delete e[Zd], delete e[F9], delete e[I9])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
}
function g3(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function Km(t) {
  e: for (; ; ) {
    for (; t.sibling === null; ) {
      if (t.return === null || g3(t.return)) return null;
      t = t.return;
    }
    for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      t.child.return = t, t = t.child;
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function d0(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6) t = t.stateNode, e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode, e.insertBefore(t, n)) : (e = n, e.appendChild(t)), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Bu));
  else if (r !== 4 && (t = t.child, t !== null)) for (d0(t, e, n), t = t.sibling; t !== null; ) d0(t, e, n), t = t.sibling;
}
function p0(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && (t = t.child, t !== null)) for (p0(t, e, n), t = t.sibling; t !== null; ) p0(t, e, n), t = t.sibling;
}
var Lt = null, Wn = !1;
function ti(t, e, n) {
  for (n = n.child; n !== null; ) m3(t, e, n), n = n.sibling;
}
function m3(t, e, n) {
  if (pr && typeof pr.onCommitFiberUnmount == "function") try {
    pr.onCommitFiberUnmount(sc, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      bt || Wo(n, e);
    case 6:
      var r = Lt, o = Wn;
      Lt = null, ti(t, e, n), Lt = r, Wn = o, Lt !== null && (Wn ? (t = Lt, n = n.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : Lt.removeChild(n.stateNode));
      break;
    case 18:
      Lt !== null && (Wn ? (t = Lt, n = n.stateNode, t.nodeType === 8 ? nd(t.parentNode, n) : t.nodeType === 1 && nd(t, n), xa(t)) : nd(Lt, n.stateNode));
      break;
    case 4:
      r = Lt, o = Wn, Lt = n.stateNode.containerInfo, Wn = !0, ti(t, e, n), Lt = r, Wn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!bt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var a = o, l = a.destroy;
          a = a.tag, l !== void 0 && (a & 2 || a & 4) && h0(n, e, l), o = o.next;
        } while (o !== r);
      }
      ti(t, e, n);
      break;
    case 1:
      if (!bt && (Wo(n, e), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (c) {
        st(n, e, c);
      }
      ti(t, e, n);
      break;
    case 21:
      ti(t, e, n);
      break;
    case 22:
      n.mode & 1 ? (bt = (r = bt) || n.memoizedState !== null, ti(t, e, n), bt = r) : ti(t, e, n);
      break;
    default:
      ti(t, e, n);
  }
}
function Ym(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new $9()), e.forEach(function(r) {
      var o = s_.bind(null, t, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function bn(t, e) {
  var n = e.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var a = t, l = e, c = l;
      e: for (; c !== null; ) {
        switch (c.tag) {
          case 5:
            Lt = c.stateNode, Wn = !1;
            break e;
          case 3:
            Lt = c.stateNode.containerInfo, Wn = !0;
            break e;
          case 4:
            Lt = c.stateNode.containerInfo, Wn = !0;
            break e;
        }
        c = c.return;
      }
      if (Lt === null) throw Error(W(160));
      m3(a, l, o), Lt = null, Wn = !1;
      var h = o.alternate;
      h !== null && (h.return = null), o.return = null;
    } catch (d) {
      st(o, e, d);
    }
  }
  if (e.subtreeFlags & 12854) for (e = e.child; e !== null; ) v3(e, t), e = e.sibling;
}
function v3(t, e) {
  var n = t.alternate, r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (bn(e, t), ar(t), r & 4) {
        try {
          pa(3, t, t.return), pc(3, t);
        } catch (P) {
          st(t, t.return, P);
        }
        try {
          pa(5, t, t.return);
        } catch (P) {
          st(t, t.return, P);
        }
      }
      break;
    case 1:
      bn(e, t), ar(t), r & 512 && n !== null && Wo(n, n.return);
      break;
    case 5:
      if (bn(e, t), ar(t), r & 512 && n !== null && Wo(n, n.return), t.flags & 32) {
        var o = t.stateNode;
        try {
          ya(o, "");
        } catch (P) {
          st(t, t.return, P);
        }
      }
      if (r & 4 && (o = t.stateNode, o != null)) {
        var a = t.memoizedProps, l = n !== null ? n.memoizedProps : a, c = t.type, h = t.updateQueue;
        if (t.updateQueue = null, h !== null) try {
          c === "input" && a.type === "radio" && a.name != null && Gv(o, a), Ud(c, l);
          var d = Ud(c, a);
          for (l = 0; l < h.length; l += 2) {
            var m = h[l], S = h[l + 1];
            m === "style" ? jv(o, S) : m === "dangerouslySetInnerHTML" ? bv(o, S) : m === "children" ? ya(o, S) : X0(o, m, S, d);
          }
          switch (c) {
            case "input":
              Fd(o, a);
              break;
            case "textarea":
              Hv(o, a);
              break;
            case "select":
              var y = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!a.multiple;
              var _ = a.value;
              _ != null ? Ko(o, !!a.multiple, _, !1) : y !== !!a.multiple && (a.defaultValue != null ? Ko(
                o,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : Ko(o, !!a.multiple, a.multiple ? [] : "", !1));
          }
          o[ka] = a;
        } catch (P) {
          st(t, t.return, P);
        }
      }
      break;
    case 6:
      if (bn(e, t), ar(t), r & 4) {
        if (t.stateNode === null) throw Error(W(162));
        o = t.stateNode, a = t.memoizedProps;
        try {
          o.nodeValue = a;
        } catch (P) {
          st(t, t.return, P);
        }
      }
      break;
    case 3:
      if (bn(e, t), ar(t), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        xa(e.containerInfo);
      } catch (P) {
        st(t, t.return, P);
      }
      break;
    case 4:
      bn(e, t), ar(t);
      break;
    case 13:
      bn(e, t), ar(t), o = t.child, o.flags & 8192 && (a = o.memoizedState !== null, o.stateNode.isHidden = a, !a || o.alternate !== null && o.alternate.memoizedState !== null || (Pp = ct())), r & 4 && Ym(t);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, t.mode & 1 ? (bt = (d = bt) || m, bn(e, t), bt = d) : bn(e, t), ar(t), r & 8192) {
        if (d = t.memoizedState !== null, (t.stateNode.isHidden = d) && !m && t.mode & 1) for (J = t, m = t.child; m !== null; ) {
          for (S = J = m; J !== null; ) {
            switch (y = J, _ = y.child, y.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                pa(4, y, y.return);
                break;
              case 1:
                Wo(y, y.return);
                var x = y.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = y, n = y.return;
                  try {
                    e = r, x.props = e.memoizedProps, x.state = e.memoizedState, x.componentWillUnmount();
                  } catch (P) {
                    st(r, n, P);
                  }
                }
                break;
              case 5:
                Wo(y, y.return);
                break;
              case 22:
                if (y.memoizedState !== null) {
                  $m(S);
                  continue;
                }
            }
            _ !== null ? (_.return = y, J = _) : $m(S);
          }
          m = m.sibling;
        }
        e: for (m = null, S = t; ; ) {
          if (S.tag === 5) {
            if (m === null) {
              m = S;
              try {
                o = S.stateNode, d ? (a = o.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (c = S.stateNode, h = S.memoizedProps.style, l = h != null && h.hasOwnProperty("display") ? h.display : null, c.style.display = Vv("display", l));
              } catch (P) {
                st(t, t.return, P);
              }
            }
          } else if (S.tag === 6) {
            if (m === null) try {
              S.stateNode.nodeValue = d ? "" : S.memoizedProps;
            } catch (P) {
              st(t, t.return, P);
            }
          } else if ((S.tag !== 22 && S.tag !== 23 || S.memoizedState === null || S === t) && S.child !== null) {
            S.child.return = S, S = S.child;
            continue;
          }
          if (S === t) break e;
          for (; S.sibling === null; ) {
            if (S.return === null || S.return === t) break e;
            m === S && (m = null), S = S.return;
          }
          m === S && (m = null), S.sibling.return = S.return, S = S.sibling;
        }
      }
      break;
    case 19:
      bn(e, t), ar(t), r & 4 && Ym(t);
      break;
    case 21:
      break;
    default:
      bn(
        e,
        t
      ), ar(t);
  }
}
function ar(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (g3(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(W(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ya(o, ""), r.flags &= -33);
          var a = Km(t);
          p0(t, a, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, c = Km(t);
          d0(t, c, l);
          break;
        default:
          throw Error(W(161));
      }
    } catch (h) {
      st(t, t.return, h);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function Z9(t, e, n) {
  J = t, y3(t);
}
function y3(t, e, n) {
  for (var r = (t.mode & 1) !== 0; J !== null; ) {
    var o = J, a = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || iu;
      if (!l) {
        var c = o.alternate, h = c !== null && c.memoizedState !== null || bt;
        c = iu;
        var d = bt;
        if (iu = l, (bt = h) && !d) for (J = o; J !== null; ) l = J, h = l.child, l.tag === 22 && l.memoizedState !== null ? qm(o) : h !== null ? (h.return = l, J = h) : qm(o);
        for (; a !== null; ) J = a, y3(a), a = a.sibling;
        J = o, iu = c, bt = d;
      }
      Qm(t);
    } else o.subtreeFlags & 8772 && a !== null ? (a.return = o, J = a) : Qm(t);
  }
}
function Qm(t) {
  for (; J !== null; ) {
    var e = J;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772) switch (e.tag) {
          case 0:
          case 11:
          case 15:
            bt || pc(5, e);
            break;
          case 1:
            var r = e.stateNode;
            if (e.flags & 4 && !bt) if (n === null) r.componentDidMount();
            else {
              var o = e.elementType === e.type ? n.memoizedProps : jn(e.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = e.updateQueue;
            a !== null && Fm(e, a, r);
            break;
          case 3:
            var l = e.updateQueue;
            if (l !== null) {
              if (n = null, e.child !== null) switch (e.child.tag) {
                case 5:
                  n = e.child.stateNode;
                  break;
                case 1:
                  n = e.child.stateNode;
              }
              Fm(e, l, n);
            }
            break;
          case 5:
            var c = e.stateNode;
            if (n === null && e.flags & 4) {
              n = c;
              var h = e.memoizedProps;
              switch (e.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  h.autoFocus && n.focus();
                  break;
                case "img":
                  h.src && (n.src = h.src);
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
            if (e.memoizedState === null) {
              var d = e.alternate;
              if (d !== null) {
                var m = d.memoizedState;
                if (m !== null) {
                  var S = m.dehydrated;
                  S !== null && xa(S);
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
            throw Error(W(163));
        }
        bt || e.flags & 512 && f0(e);
      } catch (y) {
        st(e, e.return, y);
      }
    }
    if (e === t) {
      J = null;
      break;
    }
    if (n = e.sibling, n !== null) {
      n.return = e.return, J = n;
      break;
    }
    J = e.return;
  }
}
function $m(t) {
  for (; J !== null; ) {
    var e = J;
    if (e === t) {
      J = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      n.return = e.return, J = n;
      break;
    }
    J = e.return;
  }
}
function qm(t) {
  for (; J !== null; ) {
    var e = J;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            pc(4, e);
          } catch (h) {
            st(e, n, h);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = e.return;
            try {
              r.componentDidMount();
            } catch (h) {
              st(e, o, h);
            }
          }
          var a = e.return;
          try {
            f0(e);
          } catch (h) {
            st(e, a, h);
          }
          break;
        case 5:
          var l = e.return;
          try {
            f0(e);
          } catch (h) {
            st(e, l, h);
          }
      }
    } catch (h) {
      st(e, e.return, h);
    }
    if (e === t) {
      J = null;
      break;
    }
    var c = e.sibling;
    if (c !== null) {
      c.return = e.return, J = c;
      break;
    }
    J = e.return;
  }
}
var J9 = Math.ceil, Yu = Ur.ReactCurrentDispatcher, Ep = Ur.ReactCurrentOwner, An = Ur.ReactCurrentBatchConfig, Ne = 0, Nt = null, gt = null, Ft = 0, hn = 0, Xo = Ci(0), St = 0, Fa = null, no = 0, gc = 0, Cp = 0, ga = null, rn = null, Pp = 0, ss = 1 / 0, Nr = null, Qu = !1, g0 = null, gi = null, ou = !1, ui = null, $u = 0, ma = 0, m0 = null, Eu = -1, Cu = 0;
function Yt() {
  return Ne & 6 ? ct() : Eu !== -1 ? Eu : Eu = ct();
}
function mi(t) {
  return t.mode & 1 ? Ne & 2 && Ft !== 0 ? Ft & -Ft : D9.transition !== null ? (Cu === 0 && (Cu = ny()), Cu) : (t = Ie, t !== 0 || (t = window.event, t = t === void 0 ? 16 : uy(t.type)), t) : 1;
}
function Yn(t, e, n, r) {
  if (50 < ma) throw ma = 0, m0 = null, Error(W(185));
  Ha(t, n, r), (!(Ne & 2) || t !== Nt) && (t === Nt && (!(Ne & 2) && (gc |= n), St === 4 && ai(t, Ft)), ln(t, r), n === 1 && Ne === 0 && !(e.mode & 1) && (ss = ct() + 500, hc && Pi()));
}
function ln(t, e) {
  var n = t.callbackNode;
  D8(t, e);
  var r = Fu(t, t === Nt ? Ft : 0);
  if (r === 0) n !== null && sm(n), t.callbackNode = null, t.callbackPriority = 0;
  else if (e = r & -r, t.callbackPriority !== e) {
    if (n != null && sm(n), e === 1) t.tag === 0 ? O9(Zm.bind(null, t)) : Ny(Zm.bind(null, t)), M9(function() {
      !(Ne & 6) && Pi();
    }), n = null;
    else {
      switch (ry(r)) {
        case 1:
          n = q0;
          break;
        case 4:
          n = ey;
          break;
        case 16:
          n = Lu;
          break;
        case 536870912:
          n = ty;
          break;
        default:
          n = Lu;
      }
      n = T3(n, _3.bind(null, t));
    }
    t.callbackPriority = e, t.callbackNode = n;
  }
}
function _3(t, e) {
  if (Eu = -1, Cu = 0, Ne & 6) throw Error(W(327));
  var n = t.callbackNode;
  if (Zo() && t.callbackNode !== n) return null;
  var r = Fu(t, t === Nt ? Ft : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = qu(t, r);
  else {
    e = r;
    var o = Ne;
    Ne |= 2;
    var a = w3();
    (Nt !== t || Ft !== e) && (Nr = null, ss = ct() + 500, qi(t, e));
    do
      try {
        n_();
        break;
      } catch (c) {
        S3(t, c);
      }
    while (!0);
    cp(), Yu.current = a, Ne = o, gt !== null ? e = 0 : (Nt = null, Ft = 0, e = St);
  }
  if (e !== 0) {
    if (e === 2 && (o = Vd(t), o !== 0 && (r = o, e = v0(t, o))), e === 1) throw n = Fa, qi(t, 0), ai(t, r), ln(t, ct()), n;
    if (e === 6) ai(t, r);
    else {
      if (o = t.current.alternate, !(r & 30) && !e_(o) && (e = qu(t, r), e === 2 && (a = Vd(t), a !== 0 && (r = a, e = v0(t, a))), e === 1)) throw n = Fa, qi(t, 0), ai(t, r), ln(t, ct()), n;
      switch (t.finishedWork = o, t.finishedLanes = r, e) {
        case 0:
        case 1:
          throw Error(W(345));
        case 2:
          Ki(t, rn, Nr);
          break;
        case 3:
          if (ai(t, r), (r & 130023424) === r && (e = Pp + 500 - ct(), 10 < e)) {
            if (Fu(t, 0) !== 0) break;
            if (o = t.suspendedLanes, (o & r) !== r) {
              Yt(), t.pingedLanes |= t.suspendedLanes & o;
              break;
            }
            t.timeoutHandle = qd(Ki.bind(null, t, rn, Nr), e);
            break;
          }
          Ki(t, rn, Nr);
          break;
        case 4:
          if (ai(t, r), (r & 4194240) === r) break;
          for (e = t.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - Kn(r);
            a = 1 << l, l = e[l], l > o && (o = l), r &= ~a;
          }
          if (r = o, r = ct() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * J9(r / 1960)) - r, 10 < r) {
            t.timeoutHandle = qd(Ki.bind(null, t, rn, Nr), r);
            break;
          }
          Ki(t, rn, Nr);
          break;
        case 5:
          Ki(t, rn, Nr);
          break;
        default:
          throw Error(W(329));
      }
    }
  }
  return ln(t, ct()), t.callbackNode === n ? _3.bind(null, t) : null;
}
function v0(t, e) {
  var n = ga;
  return t.current.memoizedState.isDehydrated && (qi(t, e).flags |= 256), t = qu(t, e), t !== 2 && (e = rn, rn = n, e !== null && y0(e)), t;
}
function y0(t) {
  rn === null ? rn = t : rn.push.apply(rn, t);
}
function e_(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], a = o.getSnapshot;
        o = o.value;
        try {
          if (!$n(a(), o)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = e.child, e.subtreeFlags & 16384 && n !== null) n.return = e, e = n;
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
  }
  return !0;
}
function ai(t, e) {
  for (e &= ~Cp, e &= ~gc, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e; ) {
    var n = 31 - Kn(e), r = 1 << n;
    t[n] = -1, e &= ~r;
  }
}
function Zm(t) {
  if (Ne & 6) throw Error(W(327));
  Zo();
  var e = Fu(t, 0);
  if (!(e & 1)) return ln(t, ct()), null;
  var n = qu(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = Vd(t);
    r !== 0 && (e = r, n = v0(t, r));
  }
  if (n === 1) throw n = Fa, qi(t, 0), ai(t, e), ln(t, ct()), n;
  if (n === 6) throw Error(W(345));
  return t.finishedWork = t.current.alternate, t.finishedLanes = e, Ki(t, rn, Nr), ln(t, ct()), null;
}
function Tp(t, e) {
  var n = Ne;
  Ne |= 1;
  try {
    return t(e);
  } finally {
    Ne = n, Ne === 0 && (ss = ct() + 500, hc && Pi());
  }
}
function ro(t) {
  ui !== null && ui.tag === 0 && !(Ne & 6) && Zo();
  var e = Ne;
  Ne |= 1;
  var n = An.transition, r = Ie;
  try {
    if (An.transition = null, Ie = 1, t) return t();
  } finally {
    Ie = r, An.transition = n, Ne = e, !(Ne & 6) && Pi();
  }
}
function kp() {
  hn = Xo.current, Qe(Xo);
}
function qi(t, e) {
  t.finishedWork = null, t.finishedLanes = 0;
  var n = t.timeoutHandle;
  if (n !== -1 && (t.timeoutHandle = -1, A9(n)), gt !== null) for (n = gt.return; n !== null; ) {
    var r = n;
    switch (ap(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Uu();
        break;
      case 3:
        is(), Qe(sn), Qe(Vt), mp();
        break;
      case 5:
        gp(r);
        break;
      case 4:
        is();
        break;
      case 13:
        Qe(nt);
        break;
      case 19:
        Qe(nt);
        break;
      case 10:
        hp(r.type._context);
        break;
      case 22:
      case 23:
        kp();
    }
    n = n.return;
  }
  if (Nt = t, gt = t = vi(t.current, null), Ft = hn = e, St = 0, Fa = null, Cp = gc = no = 0, rn = ga = null, Qi !== null) {
    for (e = 0; e < Qi.length; e++) if (n = Qi[e], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, a = n.pending;
      if (a !== null) {
        var l = a.next;
        a.next = o, r.next = l;
      }
      n.pending = r;
    }
    Qi = null;
  }
  return t;
}
function S3(t, e) {
  do {
    var n = gt;
    try {
      if (cp(), Su.current = Ku, Xu) {
        for (var r = rt.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Xu = !1;
      }
      if (to = 0, kt = _t = rt = null, da = !1, Aa = 0, Ep.current = null, n === null || n.return === null) {
        St = 1, Fa = e, gt = null;
        break;
      }
      e: {
        var a = t, l = n.return, c = n, h = e;
        if (e = Ft, c.flags |= 32768, h !== null && typeof h == "object" && typeof h.then == "function") {
          var d = h, m = c, S = m.tag;
          if (!(m.mode & 1) && (S === 0 || S === 11 || S === 15)) {
            var y = m.alternate;
            y ? (m.updateQueue = y.updateQueue, m.memoizedState = y.memoizedState, m.lanes = y.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var _ = Gm(l);
          if (_ !== null) {
            _.flags &= -257, Hm(_, l, c, a, e), _.mode & 1 && Um(a, d, e), e = _, h = d;
            var x = e.updateQueue;
            if (x === null) {
              var P = /* @__PURE__ */ new Set();
              P.add(h), e.updateQueue = P;
            } else x.add(h);
            break e;
          } else {
            if (!(e & 1)) {
              Um(a, d, e), Np();
              break e;
            }
            h = Error(W(426));
          }
        } else if (Ze && c.mode & 1) {
          var R = Gm(l);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256), Hm(R, l, c, a, e), lp(os(h, c));
            break e;
          }
        }
        a = h = os(h, c), St !== 4 && (St = 2), ga === null ? ga = [a] : ga.push(a), a = l;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, e &= -e, a.lanes |= e;
              var w = r3(a, h, e);
              Lm(a, w);
              break e;
            case 1:
              c = h;
              var E = a.type, g = a.stateNode;
              if (!(a.flags & 128) && (typeof E.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (gi === null || !gi.has(g)))) {
                a.flags |= 65536, e &= -e, a.lanes |= e;
                var C = i3(a, c, e);
                Lm(a, C);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      E3(n);
    } catch (T) {
      e = T, gt === n && n !== null && (gt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function w3() {
  var t = Yu.current;
  return Yu.current = Ku, t === null ? Ku : t;
}
function Np() {
  (St === 0 || St === 3 || St === 2) && (St = 4), Nt === null || !(no & 268435455) && !(gc & 268435455) || ai(Nt, Ft);
}
function qu(t, e) {
  var n = Ne;
  Ne |= 2;
  var r = w3();
  (Nt !== t || Ft !== e) && (Nr = null, qi(t, e));
  do
    try {
      t_();
      break;
    } catch (o) {
      S3(t, o);
    }
  while (!0);
  if (cp(), Ne = n, Yu.current = r, gt !== null) throw Error(W(261));
  return Nt = null, Ft = 0, St;
}
function t_() {
  for (; gt !== null; ) x3(gt);
}
function n_() {
  for (; gt !== null && !k8(); ) x3(gt);
}
function x3(t) {
  var e = P3(t.alternate, t, hn);
  t.memoizedProps = t.pendingProps, e === null ? E3(t) : gt = e, Ep.current = null;
}
function E3(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (t = e.return, e.flags & 32768) {
      if (n = Q9(n, e), n !== null) {
        n.flags &= 32767, gt = n;
        return;
      }
      if (t !== null) t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
      else {
        St = 6, gt = null;
        return;
      }
    } else if (n = Y9(n, e, hn), n !== null) {
      gt = n;
      return;
    }
    if (e = e.sibling, e !== null) {
      gt = e;
      return;
    }
    gt = e = t;
  } while (e !== null);
  St === 0 && (St = 5);
}
function Ki(t, e, n) {
  var r = Ie, o = An.transition;
  try {
    An.transition = null, Ie = 1, r_(t, e, n, r);
  } finally {
    An.transition = o, Ie = r;
  }
  return null;
}
function r_(t, e, n, r) {
  do
    Zo();
  while (ui !== null);
  if (Ne & 6) throw Error(W(327));
  n = t.finishedWork;
  var o = t.finishedLanes;
  if (n === null) return null;
  if (t.finishedWork = null, t.finishedLanes = 0, n === t.current) throw Error(W(177));
  t.callbackNode = null, t.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (B8(t, a), t === Nt && (gt = Nt = null, Ft = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ou || (ou = !0, T3(Lu, function() {
    return Zo(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = An.transition, An.transition = null;
    var l = Ie;
    Ie = 1;
    var c = Ne;
    Ne |= 4, Ep.current = null, q9(t, n), v3(n, t), E9(Qd), Iu = !!Yd, Qd = Yd = null, t.current = n, Z9(n), N8(), Ne = c, Ie = l, An.transition = a;
  } else t.current = n;
  if (ou && (ou = !1, ui = t, $u = o), a = t.pendingLanes, a === 0 && (gi = null), M8(n.stateNode), ln(t, ct()), e !== null) for (r = t.onRecoverableError, n = 0; n < e.length; n++) o = e[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Qu) throw Qu = !1, t = g0, g0 = null, t;
  return $u & 1 && t.tag !== 0 && Zo(), a = t.pendingLanes, a & 1 ? t === m0 ? ma++ : (ma = 0, m0 = t) : ma = 0, Pi(), null;
}
function Zo() {
  if (ui !== null) {
    var t = ry($u), e = An.transition, n = Ie;
    try {
      if (An.transition = null, Ie = 16 > t ? 16 : t, ui === null) var r = !1;
      else {
        if (t = ui, ui = null, $u = 0, Ne & 6) throw Error(W(331));
        var o = Ne;
        for (Ne |= 4, J = t.current; J !== null; ) {
          var a = J, l = a.child;
          if (J.flags & 16) {
            var c = a.deletions;
            if (c !== null) {
              for (var h = 0; h < c.length; h++) {
                var d = c[h];
                for (J = d; J !== null; ) {
                  var m = J;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pa(8, m, a);
                  }
                  var S = m.child;
                  if (S !== null) S.return = m, J = S;
                  else for (; J !== null; ) {
                    m = J;
                    var y = m.sibling, _ = m.return;
                    if (p3(m), m === d) {
                      J = null;
                      break;
                    }
                    if (y !== null) {
                      y.return = _, J = y;
                      break;
                    }
                    J = _;
                  }
                }
              }
              var x = a.alternate;
              if (x !== null) {
                var P = x.child;
                if (P !== null) {
                  x.child = null;
                  do {
                    var R = P.sibling;
                    P.sibling = null, P = R;
                  } while (P !== null);
                }
              }
              J = a;
            }
          }
          if (a.subtreeFlags & 2064 && l !== null) l.return = a, J = l;
          else e: for (; J !== null; ) {
            if (a = J, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                pa(9, a, a.return);
            }
            var w = a.sibling;
            if (w !== null) {
              w.return = a.return, J = w;
              break e;
            }
            J = a.return;
          }
        }
        var E = t.current;
        for (J = E; J !== null; ) {
          l = J;
          var g = l.child;
          if (l.subtreeFlags & 2064 && g !== null) g.return = l, J = g;
          else e: for (l = E; J !== null; ) {
            if (c = J, c.flags & 2048) try {
              switch (c.tag) {
                case 0:
                case 11:
                case 15:
                  pc(9, c);
              }
            } catch (T) {
              st(c, c.return, T);
            }
            if (c === l) {
              J = null;
              break e;
            }
            var C = c.sibling;
            if (C !== null) {
              C.return = c.return, J = C;
              break e;
            }
            J = c.return;
          }
        }
        if (Ne = o, Pi(), pr && typeof pr.onPostCommitFiberRoot == "function") try {
          pr.onPostCommitFiberRoot(sc, t);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Ie = n, An.transition = e;
    }
  }
  return !1;
}
function Jm(t, e, n) {
  e = os(n, e), e = r3(t, e, 1), t = pi(t, e, 1), e = Yt(), t !== null && (Ha(t, 1, e), ln(t, e));
}
function st(t, e, n) {
  if (t.tag === 3) Jm(t, t, n);
  else for (; e !== null; ) {
    if (e.tag === 3) {
      Jm(e, t, n);
      break;
    } else if (e.tag === 1) {
      var r = e.stateNode;
      if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (gi === null || !gi.has(r))) {
        t = os(n, t), t = i3(e, t, 1), e = pi(e, t, 1), t = Yt(), e !== null && (Ha(e, 1, t), ln(e, t));
        break;
      }
    }
    e = e.return;
  }
}
function i_(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e), e = Yt(), t.pingedLanes |= t.suspendedLanes & n, Nt === t && (Ft & n) === n && (St === 4 || St === 3 && (Ft & 130023424) === Ft && 500 > ct() - Pp ? qi(t, 0) : Cp |= n), ln(t, e);
}
function C3(t, e) {
  e === 0 && (t.mode & 1 ? (e = Ql, Ql <<= 1, !(Ql & 130023424) && (Ql = 4194304)) : e = 1);
  var n = Yt();
  t = Dr(t, e), t !== null && (Ha(t, e, n), ln(t, n));
}
function o_(t) {
  var e = t.memoizedState, n = 0;
  e !== null && (n = e.retryLane), C3(t, n);
}
function s_(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var r = t.stateNode, o = t.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = t.stateNode;
      break;
    default:
      throw Error(W(314));
  }
  r !== null && r.delete(e), C3(t, n);
}
var P3;
P3 = function(t, e, n) {
  if (t !== null) if (t.memoizedProps !== e.pendingProps || sn.current) on = !0;
  else {
    if (!(t.lanes & n) && !(e.flags & 128)) return on = !1, K9(t, e, n);
    on = !!(t.flags & 131072);
  }
  else on = !1, Ze && e.flags & 1048576 && Ry(e, zu, e.index);
  switch (e.lanes = 0, e.tag) {
    case 2:
      var r = e.type;
      xu(t, e), t = e.pendingProps;
      var o = ts(e, Vt.current);
      qo(e, n), o = yp(null, e, r, t, o, n);
      var a = _p();
      return e.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, an(r) ? (a = !0, Gu(e)) : a = !1, e.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, dp(e), o.updater = dc, e.stateNode = o, o._reactInternals = e, i0(e, r, t, n), e = a0(null, e, r, !0, a, n)) : (e.tag = 0, Ze && a && sp(e), Kt(null, e, o, n), e = e.child), e;
    case 16:
      r = e.elementType;
      e: {
        switch (xu(t, e), t = e.pendingProps, o = r._init, r = o(r._payload), e.type = r, o = e.tag = l_(r), t = jn(r, t), o) {
          case 0:
            e = s0(null, e, r, t, n);
            break e;
          case 1:
            e = Vm(null, e, r, t, n);
            break e;
          case 11:
            e = zm(null, e, r, t, n);
            break e;
          case 14:
            e = bm(null, e, r, jn(r.type, t), n);
            break e;
        }
        throw Error(W(
          306,
          r,
          ""
        ));
      }
      return e;
    case 0:
      return r = e.type, o = e.pendingProps, o = e.elementType === r ? o : jn(r, o), s0(t, e, r, o, n);
    case 1:
      return r = e.type, o = e.pendingProps, o = e.elementType === r ? o : jn(r, o), Vm(t, e, r, o, n);
    case 3:
      e: {
        if (l3(e), t === null) throw Error(W(387));
        r = e.pendingProps, a = e.memoizedState, o = a.element, Oy(t, e), ju(e, r, null, n);
        var l = e.memoizedState;
        if (r = l.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, e.updateQueue.baseState = a, e.memoizedState = a, e.flags & 256) {
          o = os(Error(W(423)), e), e = jm(t, e, r, n, o);
          break e;
        } else if (r !== o) {
          o = os(Error(W(424)), e), e = jm(t, e, r, n, o);
          break e;
        } else for (fn = di(e.stateNode.containerInfo.firstChild), dn = e, Ze = !0, Xn = null, n = Fy(e, null, r, n), e.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (ns(), r === o) {
            e = Br(t, e, n);
            break e;
          }
          Kt(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return Dy(e), t === null && t0(e), r = e.type, o = e.pendingProps, a = t !== null ? t.memoizedProps : null, l = o.children, $d(r, o) ? l = null : a !== null && $d(r, a) && (e.flags |= 32), a3(t, e), Kt(t, e, l, n), e.child;
    case 6:
      return t === null && t0(e), null;
    case 13:
      return u3(t, e, n);
    case 4:
      return pp(e, e.stateNode.containerInfo), r = e.pendingProps, t === null ? e.child = rs(e, null, r, n) : Kt(t, e, r, n), e.child;
    case 11:
      return r = e.type, o = e.pendingProps, o = e.elementType === r ? o : jn(r, o), zm(t, e, r, o, n);
    case 7:
      return Kt(t, e, e.pendingProps, n), e.child;
    case 8:
      return Kt(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return Kt(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (r = e.type._context, o = e.pendingProps, a = e.memoizedProps, l = o.value, be(bu, r._currentValue), r._currentValue = l, a !== null) if ($n(a.value, l)) {
          if (a.children === o.children && !sn.current) {
            e = Br(t, e, n);
            break e;
          }
        } else for (a = e.child, a !== null && (a.return = e); a !== null; ) {
          var c = a.dependencies;
          if (c !== null) {
            l = a.child;
            for (var h = c.firstContext; h !== null; ) {
              if (h.context === r) {
                if (a.tag === 1) {
                  h = Lr(-1, n & -n), h.tag = 2;
                  var d = a.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var m = d.pending;
                    m === null ? h.next = h : (h.next = m.next, m.next = h), d.pending = h;
                  }
                }
                a.lanes |= n, h = a.alternate, h !== null && (h.lanes |= n), n0(
                  a.return,
                  n,
                  e
                ), c.lanes |= n;
                break;
              }
              h = h.next;
            }
          } else if (a.tag === 10) l = a.type === e.type ? null : a.child;
          else if (a.tag === 18) {
            if (l = a.return, l === null) throw Error(W(341));
            l.lanes |= n, c = l.alternate, c !== null && (c.lanes |= n), n0(l, n, e), l = a.sibling;
          } else l = a.child;
          if (l !== null) l.return = a;
          else for (l = a; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            if (a = l.sibling, a !== null) {
              a.return = l.return, l = a;
              break;
            }
            l = l.return;
          }
          a = l;
        }
        Kt(t, e, o.children, n), e = e.child;
      }
      return e;
    case 9:
      return o = e.type, r = e.pendingProps.children, qo(e, n), o = Mn(o), r = r(o), e.flags |= 1, Kt(t, e, r, n), e.child;
    case 14:
      return r = e.type, o = jn(r, e.pendingProps), o = jn(r.type, o), bm(t, e, r, o, n);
    case 15:
      return o3(t, e, e.type, e.pendingProps, n);
    case 17:
      return r = e.type, o = e.pendingProps, o = e.elementType === r ? o : jn(r, o), xu(t, e), e.tag = 1, an(r) ? (t = !0, Gu(e)) : t = !1, qo(e, n), n3(e, r, o), i0(e, r, o, n), a0(null, e, r, !0, t, n);
    case 19:
      return c3(t, e, n);
    case 22:
      return s3(t, e, n);
  }
  throw Error(W(156, e.tag));
};
function T3(t, e) {
  return Jv(t, e);
}
function a_(t, e, n, r) {
  this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Rn(t, e, n, r) {
  return new a_(t, e, n, r);
}
function Rp(t) {
  return t = t.prototype, !(!t || !t.isReactComponent);
}
function l_(t) {
  if (typeof t == "function") return Rp(t) ? 1 : 0;
  if (t != null) {
    if (t = t.$$typeof, t === Y0) return 11;
    if (t === Q0) return 14;
  }
  return 2;
}
function vi(t, e) {
  var n = t.alternate;
  return n === null ? (n = Rn(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 14680064, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n;
}
function Pu(t, e, n, r, o, a) {
  var l = 2;
  if (r = t, typeof t == "function") Rp(t) && (l = 1);
  else if (typeof t == "string") l = 5;
  else e: switch (t) {
    case Do:
      return Zi(n.children, o, a, e);
    case K0:
      l = 8, o |= 8;
      break;
    case Nd:
      return t = Rn(12, n, e, o | 2), t.elementType = Nd, t.lanes = a, t;
    case Rd:
      return t = Rn(13, n, e, o), t.elementType = Rd, t.lanes = a, t;
    case Ad:
      return t = Rn(19, n, e, o), t.elementType = Ad, t.lanes = a, t;
    case Dv:
      return mc(n, o, a, e);
    default:
      if (typeof t == "object" && t !== null) switch (t.$$typeof) {
        case Iv:
          l = 10;
          break e;
        case Ov:
          l = 9;
          break e;
        case Y0:
          l = 11;
          break e;
        case Q0:
          l = 14;
          break e;
        case ii:
          l = 16, r = null;
          break e;
      }
      throw Error(W(130, t == null ? t : typeof t, ""));
  }
  return e = Rn(l, n, e, o), e.elementType = t, e.type = r, e.lanes = a, e;
}
function Zi(t, e, n, r) {
  return t = Rn(7, t, r, e), t.lanes = n, t;
}
function mc(t, e, n, r) {
  return t = Rn(22, t, r, e), t.elementType = Dv, t.lanes = n, t.stateNode = { isHidden: !1 }, t;
}
function cd(t, e, n) {
  return t = Rn(6, t, null, e), t.lanes = n, t;
}
function hd(t, e, n) {
  return e = Rn(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e;
}
function u_(t, e, n, r, o) {
  this.tag = e, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wf(0), this.expirationTimes = Wf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wf(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Ap(t, e, n, r, o, a, l, c, h) {
  return t = new u_(t, e, n, c, h), e === 1 ? (e = 1, a === !0 && (e |= 8)) : e = 0, a = Rn(3, null, null, e), t.current = a, a.stateNode = t, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, dp(a), t;
}
function c_(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Oo, key: r == null ? null : "" + r, children: t, containerInfo: e, implementation: n };
}
function k3(t) {
  if (!t) return _i;
  t = t._reactInternals;
  e: {
    if (so(t) !== t || t.tag !== 1) throw Error(W(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (an(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(W(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (an(n)) return ky(t, n, e);
  }
  return e;
}
function N3(t, e, n, r, o, a, l, c, h) {
  return t = Ap(n, r, !0, t, o, a, l, c, h), t.context = k3(null), n = t.current, r = Yt(), o = mi(n), a = Lr(r, o), a.callback = e ?? null, pi(n, a, o), t.current.lanes = o, Ha(t, o, r), ln(t, r), t;
}
function vc(t, e, n, r) {
  var o = e.current, a = Yt(), l = mi(o);
  return n = k3(n), e.context === null ? e.context = n : e.pendingContext = n, e = Lr(a, l), e.payload = { element: t }, r = r === void 0 ? null : r, r !== null && (e.callback = r), t = pi(o, e, l), t !== null && (Yn(t, o, l, a), _u(t, o, l)), l;
}
function Zu(t) {
  if (t = t.current, !t.child) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function e2(t, e) {
  if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function Mp(t, e) {
  e2(t, e), (t = t.alternate) && e2(t, e);
}
function h_() {
  return null;
}
var R3 = typeof reportError == "function" ? reportError : function(t) {
  console.error(t);
};
function Lp(t) {
  this._internalRoot = t;
}
yc.prototype.render = Lp.prototype.render = function(t) {
  var e = this._internalRoot;
  if (e === null) throw Error(W(409));
  vc(t, e, null, null);
};
yc.prototype.unmount = Lp.prototype.unmount = function() {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    ro(function() {
      vc(null, t, null, null);
    }), e[Or] = null;
  }
};
function yc(t) {
  this._internalRoot = t;
}
yc.prototype.unstable_scheduleHydration = function(t) {
  if (t) {
    var e = sy();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < si.length && e !== 0 && e < si[n].priority; n++) ;
    si.splice(n, 0, t), n === 0 && ly(t);
  }
};
function Fp(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
}
function _c(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
}
function t2() {
}
function f_(t, e, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var d = Zu(l);
        a.call(d);
      };
    }
    var l = N3(e, r, t, 0, null, !1, !1, "", t2);
    return t._reactRootContainer = l, t[Or] = l.current, Pa(t.nodeType === 8 ? t.parentNode : t), ro(), l;
  }
  for (; o = t.lastChild; ) t.removeChild(o);
  if (typeof r == "function") {
    var c = r;
    r = function() {
      var d = Zu(h);
      c.call(d);
    };
  }
  var h = Ap(t, 0, !1, null, null, !1, !1, "", t2);
  return t._reactRootContainer = h, t[Or] = h.current, Pa(t.nodeType === 8 ? t.parentNode : t), ro(function() {
    vc(e, h, n, r);
  }), h;
}
function Sc(t, e, n, r, o) {
  var a = n._reactRootContainer;
  if (a) {
    var l = a;
    if (typeof o == "function") {
      var c = o;
      o = function() {
        var h = Zu(l);
        c.call(h);
      };
    }
    vc(e, l, t, o);
  } else l = f_(n, e, t, o, r);
  return Zu(l);
}
iy = function(t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = ra(e.pendingLanes);
        n !== 0 && (Z0(e, n | 1), ln(e, ct()), !(Ne & 6) && (ss = ct() + 500, Pi()));
      }
      break;
    case 13:
      ro(function() {
        var r = Dr(t, 1);
        if (r !== null) {
          var o = Yt();
          Yn(r, t, 1, o);
        }
      }), Mp(t, 1);
  }
};
J0 = function(t) {
  if (t.tag === 13) {
    var e = Dr(t, 134217728);
    if (e !== null) {
      var n = Yt();
      Yn(e, t, 134217728, n);
    }
    Mp(t, 134217728);
  }
};
oy = function(t) {
  if (t.tag === 13) {
    var e = mi(t), n = Dr(t, e);
    if (n !== null) {
      var r = Yt();
      Yn(n, t, e, r);
    }
    Mp(t, e);
  }
};
sy = function() {
  return Ie;
};
ay = function(t, e) {
  var n = Ie;
  try {
    return Ie = t, e();
  } finally {
    Ie = n;
  }
};
Hd = function(t, e, n) {
  switch (e) {
    case "input":
      if (Fd(t, n), e = n.name, n.type === "radio" && e != null) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < n.length; e++) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var o = cc(r);
            if (!o) throw Error(W(90));
            Uv(r), Fd(r, o);
          }
        }
      }
      break;
    case "textarea":
      Hv(t, n);
      break;
    case "select":
      e = n.value, e != null && Ko(t, !!n.multiple, e, !1);
  }
};
Kv = Tp;
Yv = ro;
var d_ = { usingClientEntryPoint: !1, Events: [ba, Ho, cc, Wv, Xv, Tp] }, $s = { findFiberByHostInstance: Yi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, p_ = { bundleType: $s.bundleType, version: $s.version, rendererPackageName: $s.rendererPackageName, rendererConfig: $s.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ur.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) {
  return t = qv(t), t === null ? null : t.stateNode;
}, findFiberByHostInstance: $s.findFiberByHostInstance || h_, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var su = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!su.isDisabled && su.supportsFiber) try {
    sc = su.inject(p_), pr = su;
  } catch {
  }
}
gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = d_;
gn.createPortal = function(t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fp(e)) throw Error(W(200));
  return c_(t, e, null, n);
};
gn.createRoot = function(t, e) {
  if (!Fp(t)) throw Error(W(299));
  var n = !1, r = "", o = R3;
  return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (r = e.identifierPrefix), e.onRecoverableError !== void 0 && (o = e.onRecoverableError)), e = Ap(t, 1, !1, null, null, n, !1, r, o), t[Or] = e.current, Pa(t.nodeType === 8 ? t.parentNode : t), new Lp(e);
};
gn.findDOMNode = function(t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function" ? Error(W(188)) : (t = Object.keys(t).join(","), Error(W(268, t)));
  return t = qv(e), t = t === null ? null : t.stateNode, t;
};
gn.flushSync = function(t) {
  return ro(t);
};
gn.hydrate = function(t, e, n) {
  if (!_c(e)) throw Error(W(200));
  return Sc(null, t, e, !0, n);
};
gn.hydrateRoot = function(t, e, n) {
  if (!Fp(t)) throw Error(W(405));
  var r = n != null && n.hydratedSources || null, o = !1, a = "", l = R3;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), e = N3(e, null, t, 1, n ?? null, o, !1, a, l), t[Or] = e.current, Pa(t), r) for (t = 0; t < r.length; t++) n = r[t], o = n._getVersion, o = o(n._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, o] : e.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new yc(e);
};
gn.render = function(t, e, n) {
  if (!_c(e)) throw Error(W(200));
  return Sc(null, t, e, !1, n);
};
gn.unmountComponentAtNode = function(t) {
  if (!_c(t)) throw Error(W(40));
  return t._reactRootContainer ? (ro(function() {
    Sc(null, null, t, !1, function() {
      t._reactRootContainer = null, t[Or] = null;
    });
  }), !0) : !1;
};
gn.unstable_batchedUpdates = Tp;
gn.unstable_renderSubtreeIntoContainer = function(t, e, n, r) {
  if (!_c(n)) throw Error(W(200));
  if (t == null || t._reactInternals === void 0) throw Error(W(38));
  return Sc(t, e, n, !1, r);
};
gn.version = "18.3.1-next-f1338f8080-20240426";
function A3() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A3);
    } catch (t) {
      console.error(t);
    }
}
A3(), Av.exports = gn;
var g_ = Av.exports, M3, n2 = g_;
M3 = n2.createRoot, n2.hydrateRoot;
var _0 = function(t, e) {
  return _0 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
  }, _0(t, e);
};
function Fn(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  _0(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var te = function() {
  return te = Object.assign || function(e) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, te.apply(this, arguments);
};
function wc(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
      e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
  return n;
}
function hr(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, o = e.length, a; r < o; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function ur(t, e) {
  var n = e && e.cache ? e.cache : x_, r = e && e.serializer ? e.serializer : S_, o = e && e.strategy ? e.strategy : y_;
  return o(t, {
    cache: n,
    serializer: r
  });
}
function m_(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function v_(t, e, n, r) {
  var o = m_(r) ? r : n(r), a = e.get(o);
  return typeof a > "u" && (a = t.call(this, r), e.set(o, a)), a;
}
function L3(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), o = n(r), a = e.get(o);
  return typeof a > "u" && (a = t.apply(this, r), e.set(o, a)), a;
}
function F3(t, e, n, r, o) {
  return n.bind(e, t, r, o);
}
function y_(t, e) {
  var n = t.length === 1 ? v_ : L3;
  return F3(t, this, n, e.cache.create(), e.serializer);
}
function __(t, e) {
  return F3(t, this, L3, e.cache.create(), e.serializer);
}
var S_ = function() {
  return JSON.stringify(arguments);
}, w_ = (
  /** @class */
  function() {
    function t() {
      this.cache = /* @__PURE__ */ Object.create(null);
    }
    return t.prototype.get = function(e) {
      return this.cache[e];
    }, t.prototype.set = function(e, n) {
      this.cache[e] = n;
    }, t;
  }()
), x_ = {
  create: function() {
    return new w_();
  }
}, cr = {
  variadic: __
}, Pe;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Pe || (Pe = {}));
var Ye;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(Ye || (Ye = {}));
var as;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(as || (as = {}));
function r2(t) {
  return t.type === Ye.literal;
}
function E_(t) {
  return t.type === Ye.argument;
}
function I3(t) {
  return t.type === Ye.number;
}
function O3(t) {
  return t.type === Ye.date;
}
function D3(t) {
  return t.type === Ye.time;
}
function B3(t) {
  return t.type === Ye.select;
}
function U3(t) {
  return t.type === Ye.plural;
}
function C_(t) {
  return t.type === Ye.pound;
}
function G3(t) {
  return t.type === Ye.tag;
}
function H3(t) {
  return !!(t && typeof t == "object" && t.type === as.number);
}
function S0(t) {
  return !!(t && typeof t == "object" && t.type === as.dateTime);
}
var z3 = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, P_ = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function T_(t) {
  var e = {};
  return t.replace(P_, function(n) {
    var r = n.length;
    switch (n[0]) {
      case "G":
        e.era = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "y":
        e.year = r === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        e.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        e.day = ["numeric", "2-digit"][r - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        e.weekday = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "e":
        if (r < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "c":
        if (r < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "a":
        e.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        e.hourCycle = "h12", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "H":
        e.hourCycle = "h23", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "K":
        e.hourCycle = "h11", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "k":
        e.hourCycle = "h24", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        e.minute = ["numeric", "2-digit"][r - 1];
        break;
      case "s":
        e.second = ["numeric", "2-digit"][r - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        e.timeZoneName = r < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), e;
}
var k_ = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function N_(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(k_).filter(function(y) {
    return y.length > 0;
  }), n = [], r = 0, o = e; r < o.length; r++) {
    var a = o[r], l = a.split("/");
    if (l.length === 0)
      throw new Error("Invalid number skeleton");
    for (var c = l[0], h = l.slice(1), d = 0, m = h; d < m.length; d++) {
      var S = m[d];
      if (S.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: c, options: h });
  }
  return n;
}
function R_(t) {
  return t.replace(/^(.*?)-/, "");
}
var i2 = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, b3 = /^(@+)?(\+|#+)?[rs]?$/g, A_ = /(\*)(0+)|(#+)(0+)|(0+)/g, V3 = /^(0+)$/;
function o2(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(b3, function(n, r, o) {
    return typeof o != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : o === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof o == "string" ? o.length : 0)), "";
  }), e;
}
function j3(t) {
  switch (t) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function M_(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !V3.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function s2(t) {
  var e = {}, n = j3(t);
  return n || e;
}
function L_(t) {
  for (var e = {}, n = 0, r = t; n < r.length; n++) {
    var o = r[n];
    switch (o.stem) {
      case "percent":
      case "%":
        e.style = "percent";
        continue;
      case "%x100":
        e.style = "percent", e.scale = 100;
        continue;
      case "currency":
        e.style = "currency", e.currency = o.options[0];
        continue;
      case "group-off":
      case ",_":
        e.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        e.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        e.style = "unit", e.unit = R_(o.options[0]);
        continue;
      case "compact-short":
      case "K":
        e.notation = "compact", e.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        e.notation = "compact", e.compactDisplay = "long";
        continue;
      case "scientific":
        e = te(te(te({}, e), { notation: "scientific" }), o.options.reduce(function(h, d) {
          return te(te({}, h), s2(d));
        }, {}));
        continue;
      case "engineering":
        e = te(te(te({}, e), { notation: "engineering" }), o.options.reduce(function(h, d) {
          return te(te({}, h), s2(d));
        }, {}));
        continue;
      case "notation-simple":
        e.notation = "standard";
        continue;
      case "unit-width-narrow":
        e.currencyDisplay = "narrowSymbol", e.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        e.currencyDisplay = "code", e.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        e.currencyDisplay = "name", e.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        e.currencyDisplay = "symbol";
        continue;
      case "scale":
        e.scale = parseFloat(o.options[0]);
        continue;
      case "rounding-mode-floor":
        e.roundingMode = "floor";
        continue;
      case "rounding-mode-ceiling":
        e.roundingMode = "ceil";
        continue;
      case "rounding-mode-down":
        e.roundingMode = "trunc";
        continue;
      case "rounding-mode-up":
        e.roundingMode = "expand";
        continue;
      case "rounding-mode-half-even":
        e.roundingMode = "halfEven";
        continue;
      case "rounding-mode-half-down":
        e.roundingMode = "halfTrunc";
        continue;
      case "rounding-mode-half-up":
        e.roundingMode = "halfExpand";
        continue;
      case "integer-width":
        if (o.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        o.options[0].replace(A_, function(h, d, m, S, y, _) {
          if (d)
            e.minimumIntegerDigits = m.length;
          else {
            if (S && y)
              throw new Error("We currently do not support maximum integer digits");
            if (_)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (V3.test(o.stem)) {
      e.minimumIntegerDigits = o.stem.length;
      continue;
    }
    if (i2.test(o.stem)) {
      if (o.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      o.stem.replace(i2, function(h, d, m, S, y, _) {
        return m === "*" ? e.minimumFractionDigits = d.length : S && S[0] === "#" ? e.maximumFractionDigits = S.length : y && _ ? (e.minimumFractionDigits = y.length, e.maximumFractionDigits = y.length + _.length) : (e.minimumFractionDigits = d.length, e.maximumFractionDigits = d.length), "";
      });
      var a = o.options[0];
      a === "w" ? e = te(te({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = te(te({}, e), o2(a)));
      continue;
    }
    if (b3.test(o.stem)) {
      e = te(te({}, e), o2(o.stem));
      continue;
    }
    var l = j3(o.stem);
    l && (e = te(te({}, e), l));
    var c = M_(o.stem);
    c && (e = te(te({}, e), c));
  }
  return e;
}
var au = {
  "001": [
    "H",
    "h"
  ],
  419: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AD: [
    "H",
    "hB"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AS: [
    "h",
    "H"
  ],
  AT: [
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  AX: [
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BI: [
    "H",
    "h"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  BO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  BQ: [
    "H"
  ],
  BR: [
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BT: [
    "h",
    "H"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BY: [
    "H",
    "h"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CD: [
    "hB",
    "H"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  CI: [
    "H",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CL: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CP: [
    "H"
  ],
  CR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CU: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CV: [
    "H",
    "hB"
  ],
  CW: [
    "H",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CZ: [
    "H"
  ],
  DE: [
    "H",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DJ: [
    "h",
    "H"
  ],
  DK: [
    "H"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EC: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  EE: [
    "H",
    "hB"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  FI: [
    "H"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FO: [
    "H",
    "h"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  GF: [
    "H",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GH: [
    "h",
    "H"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GL: [
    "H",
    "h"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GT: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HN: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  HR: [
    "H",
    "hB"
  ],
  HU: [
    "H",
    "h"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  ID: [
    "H"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IN: [
    "h",
    "H"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  IS: [
    "H"
  ],
  IT: [
    "H",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JP: [
    "H",
    "K",
    "h"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LS: [
    "h",
    "H"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  MF: [
    "H",
    "hB"
  ],
  MG: [
    "H",
    "h"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ML: [
    "H"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MT: [
    "H",
    "h"
  ],
  MU: [
    "H",
    "h"
  ],
  MV: [
    "H",
    "h"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MX: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NC: [
    "H",
    "hB"
  ],
  NE: [
    "H"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NI: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NL: [
    "H",
    "hB"
  ],
  NO: [
    "H",
    "h"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  PG: [
    "h",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  PL: [
    "H",
    "h"
  ],
  PM: [
    "H",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PT: [
    "H",
    "hB"
  ],
  PW: [
    "h",
    "H"
  ],
  PY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  RU: [
    "H"
  ],
  RW: [
    "H",
    "h"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SE: [
    "H"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  SO: [
    "h",
    "H"
  ],
  SR: [
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  SV: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TH: [
    "H",
    "h"
  ],
  TJ: [
    "H",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TM: [
    "H",
    "h"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  TR: [
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VN: [
    "H",
    "h"
  ],
  VU: [
    "h",
    "H"
  ],
  WF: [
    "H",
    "hB"
  ],
  WS: [
    "h",
    "H"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YT: [
    "H",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZW: [
    "H",
    "h"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-HK": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-IL": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "en-MY": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ]
};
function F_(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var o = t.charAt(r);
    if (o === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === o; )
        a++, r++;
      var l = 1 + (a & 1), c = a < 2 ? 1 : 3 + (a >> 1), h = "a", d = I_(e);
      for ((d == "H" || d == "k") && (c = 0); c-- > 0; )
        n += h;
      for (; l-- > 0; )
        n = d + n;
    } else o === "J" ? n += "H" : n += o;
  }
  return n;
}
function I_(t) {
  var e = t.hourCycle;
  if (e === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  t.hourCycles && // @ts-ignore
  t.hourCycles.length && (e = t.hourCycles[0]), e)
    switch (e) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var n = t.language, r;
  n !== "root" && (r = t.maximize().region);
  var o = au[r || ""] || au[n || ""] || au["".concat(n, "-001")] || au["001"];
  return o[0];
}
var fd, O_ = new RegExp("^".concat(z3.source, "*")), D_ = new RegExp("".concat(z3.source, "*$"));
function ke(t, e) {
  return { start: t, end: e };
}
var B_ = !!String.prototype.startsWith && "_a".startsWith("a", 1), U_ = !!String.fromCodePoint, G_ = !!Object.fromEntries, H_ = !!String.prototype.codePointAt, z_ = !!String.prototype.trimStart, b_ = !!String.prototype.trimEnd, V_ = !!Number.isSafeInteger, j_ = V_ ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, w0 = !0;
try {
  var W_ = X3("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  w0 = ((fd = W_.exec("a")) === null || fd === void 0 ? void 0 : fd[0]) === "a";
} catch {
  w0 = !1;
}
var a2 = B_ ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), x0 = U_ ? String.fromCodePoint : (
  // IE11
  function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    for (var r = "", o = e.length, a = 0, l; o > a; ) {
      if (l = e[a++], l > 1114111)
        throw RangeError(l + " is not a valid code point");
      r += l < 65536 ? String.fromCharCode(l) : String.fromCharCode(((l -= 65536) >> 10) + 55296, l % 1024 + 56320);
    }
    return r;
  }
), l2 = (
  // native
  G_ ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, o = e; r < o.length; r++) {
        var a = o[r], l = a[0], c = a[1];
        n[l] = c;
      }
      return n;
    }
  )
), W3 = H_ ? (
  // Native
  function(e, n) {
    return e.codePointAt(n);
  }
) : (
  // IE 11
  function(e, n) {
    var r = e.length;
    if (!(n < 0 || n >= r)) {
      var o = e.charCodeAt(n), a;
      return o < 55296 || o > 56319 || n + 1 === r || (a = e.charCodeAt(n + 1)) < 56320 || a > 57343 ? o : (o - 55296 << 10) + (a - 56320) + 65536;
    }
  }
), X_ = z_ ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(O_, "");
  }
), K_ = b_ ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(D_, "");
  }
);
function X3(t, e) {
  return new RegExp(t, e);
}
var E0;
if (w0) {
  var u2 = X3("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  E0 = function(e, n) {
    var r;
    u2.lastIndex = n;
    var o = u2.exec(e);
    return (r = o[1]) !== null && r !== void 0 ? r : "";
  };
} else
  E0 = function(e, n) {
    for (var r = []; ; ) {
      var o = W3(e, n);
      if (o === void 0 || K3(o) || q_(o))
        break;
      r.push(o), n += o >= 65536 ? 2 : 1;
    }
    return x0.apply(void 0, r);
  };
var Y_ = (
  /** @class */
  function() {
    function t(e, n) {
      n === void 0 && (n = {}), this.message = e, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return t.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, t.prototype.parseMessage = function(e, n, r) {
      for (var o = []; !this.isEOF(); ) {
        var a = this.char();
        if (a === 123) {
          var l = this.parseArgument(e, r);
          if (l.err)
            return l;
          o.push(l.val);
        } else {
          if (a === 125 && e > 0)
            break;
          if (a === 35 && (n === "plural" || n === "selectordinal")) {
            var c = this.clonePosition();
            this.bump(), o.push({
              type: Ye.pound,
              location: ke(c, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(Pe.UNMATCHED_CLOSING_TAG, ke(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && C0(this.peek() || 0)) {
            var l = this.parseTag(e, n);
            if (l.err)
              return l;
            o.push(l.val);
          } else {
            var l = this.parseLiteral(e, n);
            if (l.err)
              return l;
            o.push(l.val);
          }
        }
      }
      return { val: o, err: null };
    }, t.prototype.parseTag = function(e, n) {
      var r = this.clonePosition();
      this.bump();
      var o = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: Ye.literal,
            value: "<".concat(o, "/>"),
            location: ke(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(e + 1, n, !0);
        if (a.err)
          return a;
        var l = a.val, c = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !C0(this.char()))
            return this.error(Pe.INVALID_TAG, ke(c, this.clonePosition()));
          var h = this.clonePosition(), d = this.parseTagName();
          return o !== d ? this.error(Pe.UNMATCHED_CLOSING_TAG, ke(h, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: Ye.tag,
              value: o,
              children: l,
              location: ke(r, this.clonePosition())
            },
            err: null
          } : this.error(Pe.INVALID_TAG, ke(c, this.clonePosition())));
        } else
          return this.error(Pe.UNCLOSED_TAG, ke(r, this.clonePosition()));
      } else
        return this.error(Pe.INVALID_TAG, ke(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && $_(this.char()); )
        this.bump();
      return this.message.slice(e, this.offset());
    }, t.prototype.parseLiteral = function(e, n) {
      for (var r = this.clonePosition(), o = ""; ; ) {
        var a = this.tryParseQuote(n);
        if (a) {
          o += a;
          continue;
        }
        var l = this.tryParseUnquoted(e, n);
        if (l) {
          o += l;
          continue;
        }
        var c = this.tryParseLeftAngleBracket();
        if (c) {
          o += c;
          continue;
        }
        break;
      }
      var h = ke(r, this.clonePosition());
      return {
        val: { type: Ye.literal, value: o, location: h },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Q_(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, t.prototype.tryParseQuote = function(e) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (e === "plural" || e === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var n = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var r = this.char();
        if (r === 39)
          if (this.peek() === 39)
            n.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          n.push(r);
        this.bump();
      }
      return x0.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), x0(r));
    }, t.prototype.parseArgument = function(e, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(Pe.EXPECT_ARGUMENT_CLOSING_BRACE, ke(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Pe.EMPTY_ARGUMENT, ke(r, this.clonePosition()));
      var o = this.parseIdentifierIfPossible().value;
      if (!o)
        return this.error(Pe.MALFORMED_ARGUMENT, ke(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Pe.EXPECT_ARGUMENT_CLOSING_BRACE, ke(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: Ye.argument,
              // value does not include the opening and closing braces.
              value: o,
              location: ke(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Pe.EXPECT_ARGUMENT_CLOSING_BRACE, ke(r, this.clonePosition())) : this.parseArgumentOptions(e, n, o, r);
        default:
          return this.error(Pe.MALFORMED_ARGUMENT, ke(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = E0(this.message, n), o = n + r.length;
      this.bumpTo(o);
      var a = this.clonePosition(), l = ke(e, a);
      return { value: r, location: l };
    }, t.prototype.parseArgumentOptions = function(e, n, r, o) {
      var a, l = this.clonePosition(), c = this.parseIdentifierIfPossible().value, h = this.clonePosition();
      switch (c) {
        case "":
          return this.error(Pe.EXPECT_ARGUMENT_TYPE, ke(l, h));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var d = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var m = this.clonePosition(), S = this.parseSimpleArgStyleIfPossible();
            if (S.err)
              return S;
            var y = K_(S.val);
            if (y.length === 0)
              return this.error(Pe.EXPECT_ARGUMENT_STYLE, ke(this.clonePosition(), this.clonePosition()));
            var _ = ke(m, this.clonePosition());
            d = { style: y, styleLocation: _ };
          }
          var x = this.tryParseArgumentClose(o);
          if (x.err)
            return x;
          var P = ke(o, this.clonePosition());
          if (d && a2(d == null ? void 0 : d.style, "::", 0)) {
            var R = X_(d.style.slice(2));
            if (c === "number") {
              var S = this.parseNumberSkeletonFromString(R, d.styleLocation);
              return S.err ? S : {
                val: { type: Ye.number, value: r, location: P, style: S.val },
                err: null
              };
            } else {
              if (R.length === 0)
                return this.error(Pe.EXPECT_DATE_TIME_SKELETON, P);
              var w = R;
              this.locale && (w = F_(R, this.locale));
              var y = {
                type: as.dateTime,
                pattern: w,
                location: d.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? T_(w) : {}
              }, E = c === "date" ? Ye.date : Ye.time;
              return {
                val: { type: E, value: r, location: P, style: y },
                err: null
              };
            }
          }
          return {
            val: {
              type: c === "number" ? Ye.number : c === "date" ? Ye.date : Ye.time,
              value: r,
              location: P,
              style: (a = d == null ? void 0 : d.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var g = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Pe.EXPECT_SELECT_ARGUMENT_OPTIONS, ke(g, te({}, g)));
          this.bumpSpace();
          var C = this.parseIdentifierIfPossible(), T = 0;
          if (c !== "select" && C.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Pe.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ke(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var S = this.tryParseDecimalInteger(Pe.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Pe.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (S.err)
              return S;
            this.bumpSpace(), C = this.parseIdentifierIfPossible(), T = S.val;
          }
          var M = this.tryParsePluralOrSelectOptions(e, c, n, C);
          if (M.err)
            return M;
          var x = this.tryParseArgumentClose(o);
          if (x.err)
            return x;
          var L = ke(o, this.clonePosition());
          return c === "select" ? {
            val: {
              type: Ye.select,
              value: r,
              options: l2(M.val),
              location: L
            },
            err: null
          } : {
            val: {
              type: Ye.plural,
              value: r,
              options: l2(M.val),
              offset: T,
              pluralType: c === "plural" ? "cardinal" : "ordinal",
              location: L
            },
            err: null
          };
        }
        default:
          return this.error(Pe.INVALID_ARGUMENT_TYPE, ke(l, h));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(Pe.EXPECT_ARGUMENT_CLOSING_BRACE, ke(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var o = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Pe.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, ke(o, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            e += 1, this.bump();
            break;
          }
          case 125: {
            if (e > 0)
              e -= 1;
            else
              return {
                val: this.message.slice(n.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(n.offset, this.offset()),
        err: null
      };
    }, t.prototype.parseNumberSkeletonFromString = function(e, n) {
      var r = [];
      try {
        r = N_(e);
      } catch {
        return this.error(Pe.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: as.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? L_(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, o) {
      for (var a, l = !1, c = [], h = /* @__PURE__ */ new Set(), d = o.value, m = o.location; ; ) {
        if (d.length === 0) {
          var S = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var y = this.tryParseDecimalInteger(Pe.EXPECT_PLURAL_ARGUMENT_SELECTOR, Pe.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (y.err)
              return y;
            m = ke(S, this.clonePosition()), d = this.message.slice(S.offset, this.offset());
          } else
            break;
        }
        if (h.has(d))
          return this.error(n === "select" ? Pe.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Pe.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, m);
        d === "other" && (l = !0), this.bumpSpace();
        var _ = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Pe.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Pe.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, ke(this.clonePosition(), this.clonePosition()));
        var x = this.parseMessage(e + 1, n, r);
        if (x.err)
          return x;
        var P = this.tryParseArgumentClose(_);
        if (P.err)
          return P;
        c.push([
          d,
          {
            value: x.val,
            location: ke(_, this.clonePosition())
          }
        ]), h.add(d), this.bumpSpace(), a = this.parseIdentifierIfPossible(), d = a.value, m = a.location;
      }
      return c.length === 0 ? this.error(n === "select" ? Pe.EXPECT_SELECT_ARGUMENT_SELECTOR : Pe.EXPECT_PLURAL_ARGUMENT_SELECTOR, ke(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !l ? this.error(Pe.MISSING_OTHER_CLAUSE, ke(this.clonePosition(), this.clonePosition())) : { val: c, err: null };
    }, t.prototype.tryParseDecimalInteger = function(e, n) {
      var r = 1, o = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var a = !1, l = 0; !this.isEOF(); ) {
        var c = this.char();
        if (c >= 48 && c <= 57)
          a = !0, l = l * 10 + (c - 48), this.bump();
        else
          break;
      }
      var h = ke(o, this.clonePosition());
      return a ? (l *= r, j_(l) ? { val: l, err: null } : this.error(n, h)) : this.error(e, h);
    }, t.prototype.offset = function() {
      return this.position.offset;
    }, t.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, t.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, t.prototype.char = function() {
      var e = this.position.offset;
      if (e >= this.message.length)
        throw Error("out of bound");
      var n = W3(this.message, e);
      if (n === void 0)
        throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, t.prototype.error = function(e, n) {
      return {
        val: null,
        err: {
          kind: e,
          message: this.message,
          location: n
        }
      };
    }, t.prototype.bump = function() {
      if (!this.isEOF()) {
        var e = this.char();
        e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
      }
    }, t.prototype.bumpIf = function(e) {
      if (a2(this.message, e, this.offset())) {
        for (var n = 0; n < e.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, t.prototype.bumpUntil = function(e) {
      var n = this.offset(), r = this.message.indexOf(e, n);
      return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
    }, t.prototype.bumpTo = function(e) {
      if (this.offset() > e)
        throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (e = Math.min(e, this.message.length); ; ) {
        var n = this.offset();
        if (n === e)
          break;
        if (n > e)
          throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, t.prototype.bumpSpace = function() {
      for (; !this.isEOF() && K3(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  }()
);
function C0(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function Q_(t) {
  return C0(t) || t === 47;
}
function $_(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function K3(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function q_(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function P0(t) {
  t.forEach(function(e) {
    if (delete e.location, B3(e) || U3(e))
      for (var n in e.options)
        delete e.options[n].location, P0(e.options[n].value);
    else I3(e) && H3(e.style) || (O3(e) || D3(e)) && S0(e.style) ? delete e.style.location : G3(e) && P0(e.children);
  });
}
function Z_(t, e) {
  e === void 0 && (e = {}), e = te({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new Y_(t, e).parse();
  if (n.err) {
    var r = SyntaxError(Pe[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || P0(n.val), n.val;
}
var mr;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(mr || (mr = {}));
var Ti = (
  /** @class */
  function(t) {
    Fn(e, t);
    function e(n, r, o) {
      var a = t.call(this, n) || this;
      return a.code = r, a.originalMessage = o, a;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), c2 = (
  /** @class */
  function(t) {
    Fn(e, t);
    function e(n, r, o, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(o).join('", "'), '"'), mr.INVALID_VALUE, a) || this;
    }
    return e;
  }(Ti)
), J_ = (
  /** @class */
  function(t) {
    Fn(e, t);
    function e(n, r, o) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), mr.INVALID_VALUE, o) || this;
    }
    return e;
  }(Ti)
), e7 = (
  /** @class */
  function(t) {
    Fn(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), mr.MISSING_VALUE, r) || this;
    }
    return e;
  }(Ti)
), Xt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Xt || (Xt = {}));
function t7(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== Xt.literal || n.type !== Xt.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function Y3(t) {
  return typeof t == "function";
}
function Tu(t, e, n, r, o, a, l) {
  if (t.length === 1 && r2(t[0]))
    return [
      {
        type: Xt.literal,
        value: t[0].value
      }
    ];
  for (var c = [], h = 0, d = t; h < d.length; h++) {
    var m = d[h];
    if (r2(m)) {
      c.push({
        type: Xt.literal,
        value: m.value
      });
      continue;
    }
    if (C_(m)) {
      typeof a == "number" && c.push({
        type: Xt.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var S = m.value;
    if (!(o && S in o))
      throw new e7(S, l);
    var y = o[S];
    if (E_(m)) {
      (!y || typeof y == "string" || typeof y == "number") && (y = typeof y == "string" || typeof y == "number" ? String(y) : ""), c.push({
        type: typeof y == "string" ? Xt.literal : Xt.object,
        value: y
      });
      continue;
    }
    if (O3(m)) {
      var _ = typeof m.style == "string" ? r.date[m.style] : S0(m.style) ? m.style.parsedOptions : void 0;
      c.push({
        type: Xt.literal,
        value: n.getDateTimeFormat(e, _).format(y)
      });
      continue;
    }
    if (D3(m)) {
      var _ = typeof m.style == "string" ? r.time[m.style] : S0(m.style) ? m.style.parsedOptions : r.time.medium;
      c.push({
        type: Xt.literal,
        value: n.getDateTimeFormat(e, _).format(y)
      });
      continue;
    }
    if (I3(m)) {
      var _ = typeof m.style == "string" ? r.number[m.style] : H3(m.style) ? m.style.parsedOptions : void 0;
      _ && _.scale && (y = y * (_.scale || 1)), c.push({
        type: Xt.literal,
        value: n.getNumberFormat(e, _).format(y)
      });
      continue;
    }
    if (G3(m)) {
      var x = m.children, P = m.value, R = o[P];
      if (!Y3(R))
        throw new J_(P, "function", l);
      var w = Tu(x, e, n, r, o, a), E = R(w.map(function(T) {
        return T.value;
      }));
      Array.isArray(E) || (E = [E]), c.push.apply(c, E.map(function(T) {
        return {
          type: typeof T == "string" ? Xt.literal : Xt.object,
          value: T
        };
      }));
    }
    if (B3(m)) {
      var g = m.options[y] || m.options.other;
      if (!g)
        throw new c2(m.value, y, Object.keys(m.options), l);
      c.push.apply(c, Tu(g.value, e, n, r, o));
      continue;
    }
    if (U3(m)) {
      var g = m.options["=".concat(y)];
      if (!g) {
        if (!Intl.PluralRules)
          throw new Ti(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, mr.MISSING_INTL_API, l);
        var C = n.getPluralRules(e, { type: m.pluralType }).select(y - (m.offset || 0));
        g = m.options[C] || m.options.other;
      }
      if (!g)
        throw new c2(m.value, y, Object.keys(m.options), l);
      c.push.apply(c, Tu(g.value, e, n, r, o, y - (m.offset || 0)));
      continue;
    }
  }
  return t7(c);
}
function n7(t, e) {
  return e ? te(te(te({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = te(te({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function r7(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = n7(t[r], e[r]), n;
  }, te({}, t)) : t;
}
function dd(t) {
  return {
    create: function() {
      return {
        get: function(e) {
          return t[e];
        },
        set: function(e, n) {
          t[e] = n;
        }
      };
    }
  };
}
function i7(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: ur(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, hr([void 0], n, !1)))();
    }, {
      cache: dd(t.number),
      strategy: cr.variadic
    }),
    getDateTimeFormat: ur(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, hr([void 0], n, !1)))();
    }, {
      cache: dd(t.dateTime),
      strategy: cr.variadic
    }),
    getPluralRules: ur(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, hr([void 0], n, !1)))();
    }, {
      cache: dd(t.pluralRules),
      strategy: cr.variadic
    })
  };
}
var Q3 = (
  /** @class */
  function() {
    function t(e, n, r, o) {
      n === void 0 && (n = t.defaultLocale);
      var a = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(h) {
        var d = a.formatToParts(h);
        if (d.length === 1)
          return d[0].value;
        var m = d.reduce(function(S, y) {
          return !S.length || y.type !== Xt.literal || typeof S[S.length - 1] != "string" ? S.push(y.value) : S[S.length - 1] += y.value, S;
        }, []);
        return m.length <= 1 ? m[0] || "" : m;
      }, this.formatToParts = function(h) {
        return Tu(a.ast, a.locales, a.formatters, a.formats, h, void 0, a.message);
      }, this.resolvedOptions = function() {
        var h;
        return {
          locale: ((h = a.resolvedLocale) === null || h === void 0 ? void 0 : h.toString()) || Intl.NumberFormat.supportedLocalesOf(a.locales)[0]
        };
      }, this.getAst = function() {
        return a.ast;
      }, this.locales = n, this.resolvedLocale = t.resolveLocale(n), typeof e == "string") {
        if (this.message = e, !t.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var l = o || {};
        l.formatters;
        var c = wc(l, ["formatters"]);
        this.ast = t.__parse(e, te(te({}, c), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = r7(t.formats, r), this.formatters = o && o.formatters || i7(this.formatterCache);
    }
    return Object.defineProperty(t, "defaultLocale", {
      get: function() {
        return t.memoizedDefaultLocale || (t.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), t.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), t.memoizedDefaultLocale = null, t.resolveLocale = function(e) {
      if (!(typeof Intl.Locale > "u")) {
        var n = Intl.NumberFormat.supportedLocalesOf(e);
        return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof e == "string" ? e : e[0]);
      }
    }, t.__parse = Z_, t.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, t;
  }()
), io;
(function(t) {
  t.FORMAT_ERROR = "FORMAT_ERROR", t.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", t.INVALID_CONFIG = "INVALID_CONFIG", t.MISSING_DATA = "MISSING_DATA", t.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(io || (io = {}));
var ja = (
  /** @class */
  function(t) {
    Fn(e, t);
    function e(n, r, o) {
      var a = this, l = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
      return a = t.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, `
`).concat(l ? `
`.concat(l.message, `
`).concat(l.stack) : "")) || this, a.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(a, e), a;
    }
    return e;
  }(Error)
), o7 = (
  /** @class */
  function(t) {
    Fn(e, t);
    function e(n, r) {
      return t.call(this, io.UNSUPPORTED_FORMATTER, n, r) || this;
    }
    return e;
  }(ja)
), s7 = (
  /** @class */
  function(t) {
    Fn(e, t);
    function e(n, r) {
      return t.call(this, io.INVALID_CONFIG, n, r) || this;
    }
    return e;
  }(ja)
), h2 = (
  /** @class */
  function(t) {
    Fn(e, t);
    function e(n, r) {
      return t.call(this, io.MISSING_DATA, n, r) || this;
    }
    return e;
  }(ja)
), In = (
  /** @class */
  function(t) {
    Fn(e, t);
    function e(n, r, o) {
      var a = t.call(this, io.FORMAT_ERROR, "".concat(n, `
Locale: `).concat(r, `
`), o) || this;
      return a.locale = r, a;
    }
    return e;
  }(ja)
), pd = (
  /** @class */
  function(t) {
    Fn(e, t);
    function e(n, r, o, a) {
      var l = t.call(this, "".concat(n, `
MessageID: `).concat(o == null ? void 0 : o.id, `
Default Message: `).concat(o == null ? void 0 : o.defaultMessage, `
Description: `).concat(o == null ? void 0 : o.description, `
`), r, a) || this;
      return l.descriptor = o, l.locale = r, l;
    }
    return e;
  }(In)
), a7 = (
  /** @class */
  function(t) {
    Fn(e, t);
    function e(n, r) {
      var o = t.call(this, io.MISSING_TRANSLATION, 'Missing message: "'.concat(n.id, '" for locale "').concat(r, '", using ').concat(n.defaultMessage ? "default message (".concat(typeof n.defaultMessage == "string" ? n.defaultMessage : n.defaultMessage.map(function(a) {
        var l;
        return (l = a.value) !== null && l !== void 0 ? l : JSON.stringify(a);
      }).join(), ")") : "id", " as fallback.")) || this;
      return o.descriptor = n, o;
    }
    return e;
  }(ja)
);
function l7(t, e, n) {
  if (n === void 0 && (n = Error), !t)
    throw new n(e);
}
function ps(t, e, n) {
  return n === void 0 && (n = {}), e.reduce(function(r, o) {
    return o in t ? r[o] = t[o] : o in n && (r[o] = n[o]), r;
  }, {});
}
var u7 = function(t) {
}, c7 = function(t) {
}, $3 = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: u7,
  onWarn: c7
};
function q3() {
  return {
    dateTime: {},
    number: {},
    message: {},
    relativeTime: {},
    pluralRules: {},
    list: {},
    displayNames: {}
  };
}
function ji(t) {
  return {
    create: function() {
      return {
        get: function(e) {
          return t[e];
        },
        set: function(e, n) {
          t[e] = n;
        }
      };
    }
  };
}
function h7(t) {
  t === void 0 && (t = q3());
  var e = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, o = ur(function() {
    for (var c, h = [], d = 0; d < arguments.length; d++)
      h[d] = arguments[d];
    return new ((c = Intl.DateTimeFormat).bind.apply(c, hr([void 0], h, !1)))();
  }, {
    cache: ji(t.dateTime),
    strategy: cr.variadic
  }), a = ur(function() {
    for (var c, h = [], d = 0; d < arguments.length; d++)
      h[d] = arguments[d];
    return new ((c = Intl.NumberFormat).bind.apply(c, hr([void 0], h, !1)))();
  }, {
    cache: ji(t.number),
    strategy: cr.variadic
  }), l = ur(function() {
    for (var c, h = [], d = 0; d < arguments.length; d++)
      h[d] = arguments[d];
    return new ((c = Intl.PluralRules).bind.apply(c, hr([void 0], h, !1)))();
  }, {
    cache: ji(t.pluralRules),
    strategy: cr.variadic
  });
  return {
    getDateTimeFormat: o,
    getNumberFormat: a,
    getMessageFormat: ur(function(c, h, d, m) {
      return new Q3(c, h, d, te({ formatters: {
        getNumberFormat: a,
        getDateTimeFormat: o,
        getPluralRules: l
      } }, m || {}));
    }, {
      cache: ji(t.message),
      strategy: cr.variadic
    }),
    getRelativeTimeFormat: ur(function() {
      for (var c = [], h = 0; h < arguments.length; h++)
        c[h] = arguments[h];
      return new (e.bind.apply(e, hr([void 0], c, !1)))();
    }, {
      cache: ji(t.relativeTime),
      strategy: cr.variadic
    }),
    getPluralRules: l,
    getListFormat: ur(function() {
      for (var c = [], h = 0; h < arguments.length; h++)
        c[h] = arguments[h];
      return new (n.bind.apply(n, hr([void 0], c, !1)))();
    }, {
      cache: ji(t.list),
      strategy: cr.variadic
    }),
    getDisplayNames: ur(function() {
      for (var c = [], h = 0; h < arguments.length; h++)
        c[h] = arguments[h];
      return new (r.bind.apply(r, hr([void 0], c, !1)))();
    }, {
      cache: ji(t.displayNames),
      strategy: cr.variadic
    })
  };
}
function Ip(t, e, n, r) {
  var o = t && t[e], a;
  if (o && (a = o[n]), a)
    return a;
  r(new o7("No ".concat(e, " format named: ").concat(n)));
}
function lu(t, e) {
  return Object.keys(t).reduce(function(n, r) {
    return n[r] = te({ timeZone: e }, t[r]), n;
  }, {});
}
function f2(t, e) {
  var n = Object.keys(te(te({}, t), e));
  return n.reduce(function(r, o) {
    return r[o] = te(te({}, t[o] || {}), e[o] || {}), r;
  }, {});
}
function d2(t, e) {
  if (!e)
    return t;
  var n = Q3.formats;
  return te(te(te({}, n), t), { date: f2(lu(n.date, e), lu(t.date || {}, e)), time: f2(lu(n.time, e), lu(t.time || {}, e)) });
}
var T0 = function(t, e, n, r, o) {
  var a = t.locale, l = t.formats, c = t.messages, h = t.defaultLocale, d = t.defaultFormats, m = t.fallbackOnEmptyString, S = t.onError, y = t.timeZone, _ = t.defaultRichTextElements;
  n === void 0 && (n = { id: "" });
  var x = n.id, P = n.defaultMessage;
  l7(!!x, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var R = String(x), w = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    c && Object.prototype.hasOwnProperty.call(c, R) && c[R]
  );
  if (Array.isArray(w) && w.length === 1 && w[0].type === Ye.literal)
    return w[0].value;
  if (!r && w && typeof w == "string" && !_)
    return w.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (r = te(te({}, _), r || {}), l = d2(l, y), d = d2(d, y), !w) {
    if (m === !1 && w === "")
      return w;
    if ((!P || a && a.toLowerCase() !== h.toLowerCase()) && S(new a7(n, a)), P)
      try {
        var E = e.getMessageFormat(P, h, d, o);
        return E.format(r);
      } catch (g) {
        return S(new pd('Error formatting default message for: "'.concat(R, '", rendering default message verbatim'), a, n, g)), typeof P == "string" ? P : R;
      }
    return R;
  }
  try {
    var E = e.getMessageFormat(w, a, l, te({ formatters: e }, o || {}));
    return E.format(r);
  } catch (g) {
    S(new pd('Error formatting message: "'.concat(R, '", using ').concat(P ? "default message" : "id", " as fallback."), a, n, g));
  }
  if (P)
    try {
      var E = e.getMessageFormat(P, h, d, o);
      return E.format(r);
    } catch (g) {
      S(new pd('Error formatting the default message for: "'.concat(R, '", rendering message verbatim'), a, n, g));
    }
  return typeof w == "string" ? w : typeof P == "string" ? P : R;
}, f7 = [
  "formatMatcher",
  "timeZone",
  "hour12",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "hourCycle",
  "dateStyle",
  "timeStyle",
  "calendar",
  // 'dayPeriod',
  "numberingSystem",
  "fractionalSecondDigits"
];
function Wa(t, e, n, r) {
  var o = t.locale, a = t.formats, l = t.onError, c = t.timeZone;
  r === void 0 && (r = {});
  var h = r.format, d = te(te({}, c && { timeZone: c }), h && Ip(a, e, h, l)), m = ps(r, f7, d);
  return e === "time" && !m.hour && !m.minute && !m.second && !m.timeStyle && !m.dateStyle && (m = te(te({}, m), { hour: "numeric", minute: "numeric" })), n(o, m);
}
function d7(t, e) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var o = n[0], a = n[1], l = a === void 0 ? {} : a, c = typeof o == "string" ? new Date(o || 0) : o;
  try {
    return Wa(t, "date", e, l).format(c);
  } catch (h) {
    t.onError(new In("Error formatting date.", t.locale, h));
  }
  return String(c);
}
function p7(t, e) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var o = n[0], a = n[1], l = a === void 0 ? {} : a, c = typeof o == "string" ? new Date(o || 0) : o;
  try {
    return Wa(t, "time", e, l).format(c);
  } catch (h) {
    t.onError(new In("Error formatting time.", t.locale, h));
  }
  return String(c);
}
function g7(t, e) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var o = n[0], a = n[1], l = n[2], c = l === void 0 ? {} : l, h = typeof o == "string" ? new Date(o || 0) : o, d = typeof a == "string" ? new Date(a || 0) : a;
  try {
    return Wa(t, "dateTimeRange", e, c).formatRange(h, d);
  } catch (m) {
    t.onError(new In("Error formatting date time range.", t.locale, m));
  }
  return String(h);
}
function m7(t, e) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var o = n[0], a = n[1], l = a === void 0 ? {} : a, c = typeof o == "string" ? new Date(o || 0) : o;
  try {
    return Wa(t, "date", e, l).formatToParts(c);
  } catch (h) {
    t.onError(new In("Error formatting date.", t.locale, h));
  }
  return [];
}
function v7(t, e) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var o = n[0], a = n[1], l = a === void 0 ? {} : a, c = typeof o == "string" ? new Date(o || 0) : o;
  try {
    return Wa(t, "time", e, l).formatToParts(c);
  } catch (h) {
    t.onError(new In("Error formatting time.", t.locale, h));
  }
  return [];
}
var y7 = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function _7(t, e, n, r) {
  var o = t.locale, a = t.onError, l = Intl.DisplayNames;
  l || a(new Ti(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, mr.MISSING_INTL_API));
  var c = ps(r, y7);
  try {
    return e(o, c).of(n);
  } catch (h) {
    a(new In("Error formatting display name.", o, h));
  }
}
var S7 = [
  "type",
  "style"
], p2 = Date.now();
function w7(t) {
  return "".concat(p2, "_").concat(t, "_").concat(p2);
}
function x7(t, e, n, r) {
  r === void 0 && (r = {});
  var o = Z3(t, e, n, r).reduce(function(a, l) {
    var c = l.value;
    return typeof c != "string" ? a.push(c) : typeof a[a.length - 1] == "string" ? a[a.length - 1] += c : a.push(c), a;
  }, []);
  return o.length === 1 ? o[0] : o.length === 0 ? "" : o;
}
function Z3(t, e, n, r) {
  var o = t.locale, a = t.onError;
  r === void 0 && (r = {});
  var l = Intl.ListFormat;
  l || a(new Ti(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, mr.MISSING_INTL_API));
  var c = ps(r, S7);
  try {
    var h = {}, d = Array.from(n).map(function(m, S) {
      if (typeof m == "object" && m !== null) {
        var y = w7(S);
        return h[y] = m, y;
      }
      return String(m);
    });
    return e(o, c).formatToParts(d).map(function(m) {
      return m.type === "literal" ? m : te(te({}, m), { value: h[m.value] || m.value });
    });
  } catch (m) {
    a(new In("Error formatting list.", o, m));
  }
  return n;
}
var E7 = ["type"];
function C7(t, e, n, r) {
  var o = t.locale, a = t.onError;
  r === void 0 && (r = {}), Intl.PluralRules || a(new Ti(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, mr.MISSING_INTL_API));
  var l = ps(r, E7);
  try {
    return e(o, l).select(n);
  } catch (c) {
    a(new In("Error formatting plural.", o, c));
  }
  return "other";
}
var P7 = ["numeric", "style"];
function T7(t, e, n) {
  var r = t.locale, o = t.formats, a = t.onError;
  n === void 0 && (n = {});
  var l = n.format, c = !!l && Ip(o, "relative", l, a) || {}, h = ps(n, P7, c);
  return e(r, h);
}
function k7(t, e, n, r, o) {
  o === void 0 && (o = {}), r || (r = "second");
  var a = Intl.RelativeTimeFormat;
  a || t.onError(new Ti(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, mr.MISSING_INTL_API));
  try {
    return T7(t, e, o).format(n, r);
  } catch (l) {
    t.onError(new In("Error formatting relative time.", t.locale, l));
  }
  return String(n);
}
var N7 = [
  "style",
  "currency",
  "unit",
  "unitDisplay",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  // ES2020 NumberFormat
  "compactDisplay",
  "currencyDisplay",
  "currencySign",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "numberingSystem",
  // ES2023 NumberFormat
  "trailingZeroDisplay",
  "roundingPriority",
  "roundingIncrement",
  "roundingMode"
];
function J3(t, e, n) {
  var r = t.locale, o = t.formats, a = t.onError;
  n === void 0 && (n = {});
  var l = n.format, c = l && Ip(o, "number", l, a) || {}, h = ps(n, N7, c);
  return e(r, h);
}
function R7(t, e, n, r) {
  r === void 0 && (r = {});
  try {
    return J3(t, e, r).format(n);
  } catch (o) {
    t.onError(new In("Error formatting number.", t.locale, o));
  }
  return String(n);
}
function A7(t, e, n, r) {
  r === void 0 && (r = {});
  try {
    return J3(t, e, r).formatToParts(n);
  } catch (o) {
    t.onError(new In("Error formatting number.", t.locale, o));
  }
  return [];
}
function M7(t) {
  var e = t ? t[Object.keys(t)[0]] : void 0;
  return typeof e == "string";
}
function L7(t) {
  t.onWarn && t.defaultRichTextElements && M7(t.messages || {}) && t.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`);
}
function F7(t, e) {
  var n = h7(e), r = te(te({}, $3), t), o = r.locale, a = r.defaultLocale, l = r.onError;
  return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && l ? l(new h2('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && l && l(new h2('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : (l && l(new s7('"locale" was not configured, using "'.concat(a, '" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"), L7(r), te(te({}, r), { formatters: n, formatNumber: R7.bind(null, r, n.getNumberFormat), formatNumberToParts: A7.bind(null, r, n.getNumberFormat), formatRelativeTime: k7.bind(null, r, n.getRelativeTimeFormat), formatDate: d7.bind(null, r, n.getDateTimeFormat), formatDateToParts: m7.bind(null, r, n.getDateTimeFormat), formatTime: p7.bind(null, r, n.getDateTimeFormat), formatDateTimeRange: g7.bind(null, r, n.getDateTimeFormat), formatTimeToParts: v7.bind(null, r, n.getDateTimeFormat), formatPlural: C7.bind(null, r, n.getPluralRules), formatMessage: T0.bind(null, r, n), $t: T0.bind(null, r, n), formatList: x7.bind(null, r, n.getListFormat), formatListToParts: Z3.bind(null, r, n.getListFormat), formatDisplayName: _7.bind(null, r, n.getDisplayNames) });
}
function I7(t, e, n) {
  if (n === void 0 && (n = Error), !t)
    throw new n(e);
}
function e4(t) {
  I7(t, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var t4 = te(te({}, $3), { textComponent: ne.Fragment }), O7 = function(t, e) {
  return ne.isValidElement(t) ? ne.cloneElement(t, { key: e }) : t;
}, n4 = function(t) {
  var e;
  return (e = ne.Children.map(t, O7)) !== null && e !== void 0 ? e : [];
};
function D7(t) {
  return function(e) {
    return t(n4(e));
  };
}
function B7(t, e) {
  if (t === e)
    return !0;
  if (!t || !e)
    return !1;
  var n = Object.keys(t), r = Object.keys(e), o = n.length;
  if (r.length !== o)
    return !1;
  for (var a = 0; a < o; a++) {
    var l = n[a];
    if (t[l] !== e[l] || !Object.prototype.hasOwnProperty.call(e, l))
      return !1;
  }
  return !0;
}
var r4 = { exports: {} }, Oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rt = typeof Symbol == "function" && Symbol.for, Op = Rt ? Symbol.for("react.element") : 60103, Dp = Rt ? Symbol.for("react.portal") : 60106, xc = Rt ? Symbol.for("react.fragment") : 60107, Ec = Rt ? Symbol.for("react.strict_mode") : 60108, Cc = Rt ? Symbol.for("react.profiler") : 60114, Pc = Rt ? Symbol.for("react.provider") : 60109, Tc = Rt ? Symbol.for("react.context") : 60110, Bp = Rt ? Symbol.for("react.async_mode") : 60111, kc = Rt ? Symbol.for("react.concurrent_mode") : 60111, Nc = Rt ? Symbol.for("react.forward_ref") : 60112, Rc = Rt ? Symbol.for("react.suspense") : 60113, U7 = Rt ? Symbol.for("react.suspense_list") : 60120, Ac = Rt ? Symbol.for("react.memo") : 60115, Mc = Rt ? Symbol.for("react.lazy") : 60116, G7 = Rt ? Symbol.for("react.block") : 60121, H7 = Rt ? Symbol.for("react.fundamental") : 60117, z7 = Rt ? Symbol.for("react.responder") : 60118, b7 = Rt ? Symbol.for("react.scope") : 60119;
function vn(t) {
  if (typeof t == "object" && t !== null) {
    var e = t.$$typeof;
    switch (e) {
      case Op:
        switch (t = t.type, t) {
          case Bp:
          case kc:
          case xc:
          case Cc:
          case Ec:
          case Rc:
            return t;
          default:
            switch (t = t && t.$$typeof, t) {
              case Tc:
              case Nc:
              case Mc:
              case Ac:
              case Pc:
                return t;
              default:
                return e;
            }
        }
      case Dp:
        return e;
    }
  }
}
function i4(t) {
  return vn(t) === kc;
}
Oe.AsyncMode = Bp;
Oe.ConcurrentMode = kc;
Oe.ContextConsumer = Tc;
Oe.ContextProvider = Pc;
Oe.Element = Op;
Oe.ForwardRef = Nc;
Oe.Fragment = xc;
Oe.Lazy = Mc;
Oe.Memo = Ac;
Oe.Portal = Dp;
Oe.Profiler = Cc;
Oe.StrictMode = Ec;
Oe.Suspense = Rc;
Oe.isAsyncMode = function(t) {
  return i4(t) || vn(t) === Bp;
};
Oe.isConcurrentMode = i4;
Oe.isContextConsumer = function(t) {
  return vn(t) === Tc;
};
Oe.isContextProvider = function(t) {
  return vn(t) === Pc;
};
Oe.isElement = function(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Op;
};
Oe.isForwardRef = function(t) {
  return vn(t) === Nc;
};
Oe.isFragment = function(t) {
  return vn(t) === xc;
};
Oe.isLazy = function(t) {
  return vn(t) === Mc;
};
Oe.isMemo = function(t) {
  return vn(t) === Ac;
};
Oe.isPortal = function(t) {
  return vn(t) === Dp;
};
Oe.isProfiler = function(t) {
  return vn(t) === Cc;
};
Oe.isStrictMode = function(t) {
  return vn(t) === Ec;
};
Oe.isSuspense = function(t) {
  return vn(t) === Rc;
};
Oe.isValidElementType = function(t) {
  return typeof t == "string" || typeof t == "function" || t === xc || t === kc || t === Cc || t === Ec || t === Rc || t === U7 || typeof t == "object" && t !== null && (t.$$typeof === Mc || t.$$typeof === Ac || t.$$typeof === Pc || t.$$typeof === Tc || t.$$typeof === Nc || t.$$typeof === H7 || t.$$typeof === z7 || t.$$typeof === b7 || t.$$typeof === G7);
};
Oe.typeOf = vn;
r4.exports = Oe;
var V7 = r4.exports, o4 = V7, j7 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, W7 = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, s4 = {};
s4[o4.ForwardRef] = j7;
s4[o4.Memo] = W7;
var Up = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = ne.createContext(null)) : ne.createContext(null);
Up.Consumer;
var X7 = Up.Provider, K7 = X7, Y7 = Up;
function a4() {
  var t = ne.useContext(Y7);
  return e4(t), t;
}
var k0;
(function(t) {
  t.formatDate = "FormattedDate", t.formatTime = "FormattedTime", t.formatNumber = "FormattedNumber", t.formatList = "FormattedList", t.formatDisplayName = "FormattedDisplayName";
})(k0 || (k0 = {}));
var N0;
(function(t) {
  t.formatDate = "FormattedDateParts", t.formatTime = "FormattedTimeParts", t.formatNumber = "FormattedNumberParts", t.formatList = "FormattedListParts";
})(N0 || (N0 = {}));
function l4(t) {
  var e = function(n) {
    var r = a4(), o = n.value, a = n.children, l = wc(n, ["value", "children"]), c = typeof o == "string" ? new Date(o || 0) : o, h = t === "formatDate" ? r.formatDateToParts(c, l) : r.formatTimeToParts(c, l);
    return a(h);
  };
  return e.displayName = N0[t], e;
}
function Xa(t) {
  var e = function(n) {
    var r = a4(), o = n.value, a = n.children, l = wc(
      n,
      ["value", "children"]
    ), c = r[t](o, l);
    if (typeof a == "function")
      return a(c);
    var h = r.textComponent || ne.Fragment;
    return ne.createElement(h, null, c);
  };
  return e.displayName = k0[t], e;
}
function u4(t) {
  return t && Object.keys(t).reduce(function(e, n) {
    var r = t[n];
    return e[n] = Y3(r) ? D7(r) : r, e;
  }, {});
}
var g2 = function(t, e, n, r) {
  for (var o = [], a = 4; a < arguments.length; a++)
    o[a - 4] = arguments[a];
  var l = u4(r), c = T0.apply(void 0, hr([
    t,
    e,
    n,
    l
  ], o, !1));
  return Array.isArray(c) ? n4(c) : c;
}, m2 = function(t, e) {
  var n = t.defaultRichTextElements, r = wc(t, ["defaultRichTextElements"]), o = u4(n), a = F7(te(te(te({}, t4), r), { defaultRichTextElements: o }), e), l = {
    locale: a.locale,
    timeZone: a.timeZone,
    fallbackOnEmptyString: a.fallbackOnEmptyString,
    formats: a.formats,
    defaultLocale: a.defaultLocale,
    defaultFormats: a.defaultFormats,
    messages: a.messages,
    onError: a.onError,
    defaultRichTextElements: o
  };
  return te(te({}, a), { formatMessage: g2.bind(null, l, a.formatters), $t: g2.bind(null, l, a.formatters) });
};
function gd(t) {
  return {
    locale: t.locale,
    timeZone: t.timeZone,
    fallbackOnEmptyString: t.fallbackOnEmptyString,
    formats: t.formats,
    textComponent: t.textComponent,
    messages: t.messages,
    defaultLocale: t.defaultLocale,
    defaultFormats: t.defaultFormats,
    onError: t.onError,
    onWarn: t.onWarn,
    wrapRichTextChunksInFragment: t.wrapRichTextChunksInFragment,
    defaultRichTextElements: t.defaultRichTextElements
  };
}
var Q7 = (
  /** @class */
  function(t) {
    Fn(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.cache = q3(), n.state = {
        cache: n.cache,
        intl: m2(gd(n.props), n.cache),
        prevConfig: gd(n.props)
      }, n;
    }
    return e.getDerivedStateFromProps = function(n, r) {
      var o = r.prevConfig, a = r.cache, l = gd(n);
      return B7(o, l) ? null : {
        intl: m2(l, a),
        prevConfig: l
      };
    }, e.prototype.render = function() {
      return e4(this.state.intl), ne.createElement(K7, { value: this.state.intl }, this.props.children);
    }, e.displayName = "IntlProvider", e.defaultProps = t4, e;
  }(ne.PureComponent)
);
Xa("formatDate");
Xa("formatTime");
Xa("formatNumber");
Xa("formatList");
Xa("formatDisplayName");
l4("formatDate");
l4("formatTime");
var c4 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var e = {}.hasOwnProperty;
    function n() {
      for (var a = "", l = 0; l < arguments.length; l++) {
        var c = arguments[l];
        c && (a = o(a, r(c)));
      }
      return a;
    }
    function r(a) {
      if (typeof a == "string" || typeof a == "number")
        return a;
      if (typeof a != "object")
        return "";
      if (Array.isArray(a))
        return n.apply(null, a);
      if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
        return a.toString();
      var l = "";
      for (var c in a)
        e.call(a, c) && a[c] && (l = o(l, c));
      return l;
    }
    function o(a, l) {
      return l ? a ? a + " " + l : a + l : a;
    }
    t.exports ? (n.default = n, t.exports = n) : window.classNames = n;
  })();
})(c4);
var $7 = c4.exports;
const Si = /* @__PURE__ */ Ua($7);
function wi() {
  return wi = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, wi.apply(null, arguments);
}
function Ia(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t) if ({}.hasOwnProperty.call(t, r)) {
    if (e.indexOf(r) !== -1) continue;
    n[r] = t[r];
  }
  return n;
}
var Gp = /* @__PURE__ */ se.createContext({});
Gp.Consumer;
Gp.Provider;
function h4(t, e) {
  var n = ne.useContext(Gp);
  return t || n[e] || e;
}
function q7() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return e.filter(function(r) {
    return r != null;
  }).reduce(function(r, o) {
    if (typeof o != "function")
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    return r === null ? o : function() {
      for (var l = arguments.length, c = new Array(l), h = 0; h < l; h++)
        c[h] = arguments[h];
      r.apply(this, c), o.apply(this, c);
    };
  }, null);
}
var Z7 = ["as", "disabled", "onKeyDown"];
function v2(t) {
  return !t || t.trim() === "#";
}
var f4 = /* @__PURE__ */ se.forwardRef(function(t, e) {
  var n = t.as, r = n === void 0 ? "a" : n, o = t.disabled, a = t.onKeyDown, l = Ia(t, Z7), c = function(m) {
    var S = l.href, y = l.onClick;
    if ((o || v2(S)) && m.preventDefault(), o) {
      m.stopPropagation();
      return;
    }
    y && y(m);
  }, h = function(m) {
    m.key === " " && (m.preventDefault(), c(m));
  };
  return v2(l.href) && (l.role = l.role || "button", l.href = l.href || "#"), o && (l.tabIndex = -1, l["aria-disabled"] = !0), /* @__PURE__ */ se.createElement(r, wi({
    ref: e
  }, l, {
    onClick: c,
    onKeyDown: q7(h, a)
  }));
});
f4.displayName = "SafeAnchor";
var J7 = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"], eS = {
  variant: "primary",
  active: !1,
  disabled: !1
}, Hp = /* @__PURE__ */ se.forwardRef(function(t, e) {
  var n = t.bsPrefix, r = t.variant, o = t.size, a = t.active, l = t.className, c = t.block, h = t.type, d = t.as, m = Ia(t, J7), S = h4(n, "btn"), y = Si(l, S, a && "active", r && S + "-" + r, c && S + "-block", o && S + "-" + o);
  if (m.href)
    return /* @__PURE__ */ se.createElement(f4, wi({}, m, {
      as: d,
      ref: e,
      className: Si(y, m.disabled && "disabled")
    }));
  e && (m.ref = e), h ? m.type = h : d || (m.type = "button");
  var _ = d || "button";
  return /* @__PURE__ */ se.createElement(_, wi({}, m, {
    className: y
  }));
});
Hp.displayName = "Button";
Hp.defaultProps = eS;
var d4 = { exports: {} }, tS = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", nS = tS, rS = nS;
function p4() {
}
function g4() {
}
g4.resetWarningCache = p4;
var iS = function() {
  function t(r, o, a, l, c, h) {
    if (h !== rS) {
      var d = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw d.name = "Invariant Violation", d;
    }
  }
  t.isRequired = t;
  function e() {
    return t;
  }
  var n = {
    array: t,
    bigint: t,
    bool: t,
    func: t,
    number: t,
    object: t,
    string: t,
    symbol: t,
    any: t,
    arrayOf: e,
    element: t,
    elementType: t,
    instanceOf: e,
    node: t,
    objectOf: e,
    oneOf: e,
    oneOfType: e,
    shape: e,
    exact: e,
    checkPropTypes: g4,
    resetWarningCache: p4
  };
  return n.PropTypes = n, n;
};
d4.exports = iS();
var oS = d4.exports;
const pt = /* @__PURE__ */ Ua(oS);
let y2 = 0;
const sS = (t = "id") => (y2 += 1, `${t}${y2}`);
let oa = /* @__PURE__ */ function(t) {
  return t.MOVED = "MOVED", t.REMOVED = "REMOVED", t.FORMAT = "FORMAT", t.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", t;
}({});
function aS(t, e, n) {
  class r extends se.Component {
    constructor(a) {
      super(a), this.transformProps = this.transformProps.bind(this);
    }
    warn(a) {
    }
    transformProps(a, l) {
      if (n[l] === void 0)
        return a[l] = this.props[l], a;
      const {
        deprType: c,
        newName: h,
        expect: d,
        transform: m,
        message: S
      } = n[l];
      switch (c) {
        case oa.MOVED:
          this.warn(`${e}: The prop '${l}' has been moved to '${h}'.`), a[h] = this.props[l];
          break;
        case oa.REMOVED:
          this.warn(`${e}: The prop '${l}' has been removed. '${S}'`);
          break;
        case oa.FORMAT:
          d(this.props[l]) ? a[l] = this.props[l] : (this.warn(`${e}: The prop '${l}' expects a new format. ${S}`), a[l] = m(this.props[l], this.props));
          break;
        case oa.MOVED_AND_FORMAT: {
          const y = this.props[l];
          let _ = `${e}: The prop '${l}' has been moved to '${h}'`;
          d && !d(y) && (_ += " and expects a new format"), _ += S ? `. ${S}` : "", this.warn(_), a[h] = m ? m(y, this.props) : y;
          break;
        }
        default:
          a[l] = this.props[l];
          break;
      }
      return a;
    }
    render() {
      const {
        children: a,
        ...l
      } = Object.keys(this.props).reduce(this.transformProps, {});
      return /* @__PURE__ */ se.createElement(t, {
        ...l
      }, this.props.children || a);
    }
  }
  return (
    // eslint-disable-next-line react/static-property-placement
    Xg(r, "displayName", `withDeprecatedProps(${e})`), r
  );
}
function zp({
  src: t,
  id: e,
  className: n,
  hidden: r,
  screenReaderText: o,
  svgAttrs: a,
  size: l,
  ...c
}) {
  if (t) {
    const h = a["aria-label"] || a["aria-labelledby"], d = {
      ...a
    };
    return h || (d["aria-label"] = void 0, d["aria-hidden"] = !0), /* @__PURE__ */ se.createElement("span", {
      className: Si("pgn__icon", {
        [`pgn__icon__${l}`]: !!l
      }, n),
      id: e,
      ...c
    }, /* @__PURE__ */ se.createElement(t, {
      role: "img",
      focusable: !1,
      ...d
    }), o && /* @__PURE__ */ se.createElement("span", {
      className: "sr-only"
    }, o));
  }
  return /* @__PURE__ */ se.createElement(se.Fragment, null, /* @__PURE__ */ se.createElement("span", {
    id: e || sS("Icon"),
    className: n,
    "aria-hidden": r
  }), o && /* @__PURE__ */ se.createElement("span", {
    className: "sr-only"
  }, o));
}
zp.propTypes = {
  /**
   * An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';`
   */
  src: pt.elementType,
  /** HTML element attributes to pass through to the underlying svg element */
  svgAttrs: pt.shape({
    "aria-label": pt.string,
    "aria-labelledby": pt.string
  }),
  /**
   * the `id` property of the Icon element, by default this value is generated
   * with the `newId` function with the `prefix` of `Icon`.
   */
  id: pt.string,
  /** The size of the icon. */
  size: pt.oneOf(["xs", "sm", "md", "lg"]),
  /** A class name that will define what the Icon looks like. */
  className: pt.string,
  /**
   * a boolean that determines the value of `aria-hidden` attribute on the Icon span,
   * this value is `true` by default.
   */
  hidden: pt.bool,
  /**
   * a string or an element that will be used on a secondary span leveraging the `sr-only` style
   * for screenreader only text, this value is `undefined` by default. This value is recommended for use unless
   * the Icon is being used in a way that is purely decorative or provides no additional context for screen
   * reader users. This field should be thought of the same way an `alt` attribute would be used for `image` tags.
   */
  screenReaderText: pt.oneOfType([pt.string, pt.element])
};
zp.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const _2 = aS(zp, "Icon", {
  className: {
    deprType: oa.FORMAT,
    expect: (t) => typeof t == "string",
    transform: (t) => Array.isArray(t) ? t.join(" ") : t,
    message: "It should be a string."
  }
}), S2 = /* @__PURE__ */ se.forwardRef(({
  children: t,
  iconAfter: e,
  iconBefore: n,
  size: r,
  ...o
}, a) => /* @__PURE__ */ se.createElement(Hp, {
  size: r,
  ...o,
  className: Si(o.className),
  ref: a
}, n && /* @__PURE__ */ se.createElement(_2, {
  className: "btn-icon-before",
  size: r,
  src: n
}), t, e && /* @__PURE__ */ se.createElement(_2, {
  className: "btn-icon-after",
  size: r,
  src: e
})));
function lS(t, e) {
  var n = 0;
  return se.Children.map(t, function(r) {
    return /* @__PURE__ */ se.isValidElement(r) ? e(r, n++) : r;
  });
}
var uS = ["min", "now", "max", "label", "srOnly", "striped", "animated", "className", "style", "variant", "bsPrefix"], cS = ["isChild"], hS = ["min", "now", "max", "label", "srOnly", "striped", "animated", "bsPrefix", "variant", "className", "children"], w2 = 1e3, fS = {
  min: 0,
  max: 100,
  animated: !1,
  isChild: !1,
  srOnly: !1,
  striped: !1
};
function dS(t, e, n) {
  var r = (t - e) / (n - e) * 100;
  return Math.round(r * w2) / w2;
}
function x2(t, e) {
  var n, r = t.min, o = t.now, a = t.max, l = t.label, c = t.srOnly, h = t.striped, d = t.animated, m = t.className, S = t.style, y = t.variant, _ = t.bsPrefix, x = Ia(t, uS);
  return /* @__PURE__ */ se.createElement("div", wi({
    ref: e
  }, x, {
    role: "progressbar",
    className: Si(m, _ + "-bar", (n = {}, n["bg-" + y] = y, n[_ + "-bar-animated"] = d, n[_ + "-bar-striped"] = d || h, n)),
    style: wi({
      width: dS(o, r, a) + "%"
    }, S),
    "aria-valuenow": o,
    "aria-valuemin": r,
    "aria-valuemax": a
  }), c ? /* @__PURE__ */ se.createElement("span", {
    className: "sr-only"
  }, l) : l);
}
var Jo = /* @__PURE__ */ se.forwardRef(function(t, e) {
  var n = t.isChild, r = Ia(t, cS);
  if (r.bsPrefix = h4(r.bsPrefix, "progress"), n)
    return x2(r, e);
  var o = r.min, a = r.now, l = r.max, c = r.label, h = r.srOnly, d = r.striped, m = r.animated, S = r.bsPrefix, y = r.variant, _ = r.className, x = r.children, P = Ia(r, hS);
  return /* @__PURE__ */ se.createElement("div", wi({
    ref: e
  }, P, {
    className: Si(_, S)
  }), x ? lS(x, function(R) {
    return /* @__PURE__ */ ne.cloneElement(R, {
      isChild: !0
    });
  }) : x2({
    min: o,
    now: a,
    max: l,
    label: c,
    srOnly: h,
    striped: d,
    animated: m,
    bsPrefix: S,
    variant: y
  }, e));
});
Jo.displayName = "ProgressBar";
Jo.defaultProps = fS;
const E2 = /* @__PURE__ */ se.forwardRef(({
  className: t,
  variant: e = "success",
  children: n,
  arrowPlacement: r = "bottom",
  ...o
}, a) => /* @__PURE__ */ se.createElement("span", {
  className: Si(t, "pgn__annotation", `pgn__annotation-${e}-${r}`),
  ref: a,
  ...o
}, n)), C2 = (t, e = "ltr", n = !0, r = "pgn__annotation") => {
  if (!t.current || !t.current.style)
    return !1;
  const { children: o } = t.current;
  let a = 0;
  for (let l = 0; l < o.length; l++) {
    const c = o[l].getBoundingClientRect();
    o[l].className.includes(r) ? a += c.width / 2 : a += n ? 0 : c.width;
  }
  return t.current.style[e === "rtl" ? "marginRight" : "marginLeft"] = `${-a}px`, !0;
}, P2 = (t, e) => e === "rtl" ? { right: `${t}%` } : { left: `${t}%` }, T2 = "pgn__annotation", k2 = 50, m4 = "warning", v4 = "dark", Ju = ["dark", "warning", "success", "error"];
function y4(t) {
  return /* @__PURE__ */ se.createElement(Jo, {
    ...t
  });
}
function bp({
  now: t,
  label: e,
  variant: n,
  threshold: r,
  thresholdLabel: o,
  thresholdVariant: a,
  progressHint: l,
  thresholdHint: c,
  ...h
}) {
  const d = se.useRef(), m = se.useRef(), S = (r || 0) - (t || 0), y = t < k2, _ = r < k2, x = Ju.includes(n) ? n : m4, P = Ju.includes(a) ? a : v4, R = window.getComputedStyle(document.body).getPropertyValue("direction"), w = ne.useCallback(() => {
    C2(d, R, y, T2), C2(m, R, _, T2);
  }, [R, y, _]);
  ne.useEffect(() => {
    w();
    const g = new ResizeObserver(() => {
      w();
    }), C = d.current;
    return g.observe(C), () => C && g.unobserve(C);
  }, [w]);
  const E = (g) => /* @__PURE__ */ se.createElement("span", {
    className: "pgn__progress-hint",
    "data-testid": "progress-hint"
  }, g);
  return /* @__PURE__ */ se.createElement("div", {
    className: "pgn__progress-annotated"
  }, !!e && /* @__PURE__ */ se.createElement("div", {
    className: "pgn__progress-info",
    style: P2(t, R),
    ref: d
  }, !y && E(l), /* @__PURE__ */ se.createElement(E2, {
    variant: x
  }, e), y && E(l)), /* @__PURE__ */ se.createElement(Jo, null, /* @__PURE__ */ se.createElement(Jo, {
    ...h,
    now: t,
    className: Si(`pgn__progress-bar--${x}`, S > 0 ? "pgn__progress-tick--white" : "pgn__progress-tick--black"),
    srOnly: !0
  }), !!r && /* @__PURE__ */ se.createElement(Jo, {
    now: S,
    className: `pgn__progress-bar--${P}`,
    srOnly: !0
  })), !!r && !!o && /* @__PURE__ */ se.createElement("div", {
    className: "pgn__progress-info",
    style: P2(r, R),
    ref: m
  }, !_ && E(c), /* @__PURE__ */ se.createElement(E2, {
    arrowPlacement: "top",
    variant: P
  }, o), _ && E(c)));
}
bp.propTypes = {
  /** Current value of progress. */
  now: pt.number,
  /** Show label that represents visual percentage. */
  label: pt.node,
  /** The `ProgressBar` style variant to use. */
  variant: pt.oneOf(Ju),
  /** Specifies an additional `className` to add to the base element. */
  className: pt.string,
  /** Threshold current value. */
  threshold: pt.number,
  /** Specifies label for `threshold`. */
  thresholdLabel: pt.node,
  /** Variant for threshold value. */
  thresholdVariant: pt.oneOf(Ju),
  /** Text near the progress annotation. */
  progressHint: pt.node,
  /** Text near the threshold annotation. */
  thresholdHint: pt.node
};
bp.defaultProps = {
  now: void 0,
  label: void 0,
  variant: m4,
  className: void 0,
  threshold: void 0,
  thresholdLabel: void 0,
  thresholdVariant: v4,
  progressHint: void 0,
  thresholdHint: void 0
};
y4.Annotated = bp;
const pS = (t) => /* @__PURE__ */ ne.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...t
}, /* @__PURE__ */ ne.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z",
  fill: "currentColor"
})), gS = (t) => /* @__PURE__ */ ne.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...t
}, /* @__PURE__ */ ne.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 16.5v-9l7 4.5-7 4.5z",
  fill: "currentColor"
})), mS = (t) => /* @__PURE__ */ ne.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...t
}, /* @__PURE__ */ ne.createElement("path", {
  d: "M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z",
  fill: "currentColor"
}));
function vS({
  events: t,
  audioCurrentTime: e,
  audioDuration: n,
  isPlaying: r
}) {
  const [o, a] = ne.useState(/* @__PURE__ */ new Set());
  return ne.useEffect(() => {
    if (!t.length || !n) return;
    const l = /* @__PURE__ */ new Set();
    t.forEach((c) => {
      const h = c.timing.startTime;
      e >= h && l.add(c.id);
    }), a(l);
  }, [e, t, n]), {
    visibleEventIds: o
  };
}
var _4 = { exports: {} }, Lc = {}, ec = {}, ye = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t._registerNode = t.Konva = t.glob = void 0;
  const e = Math.PI / 180;
  function n() {
    return typeof window < "u" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
  }
  t.glob = typeof Kg < "u" ? Kg : typeof window < "u" ? window : typeof WorkerGlobalScope < "u" ? self : {}, t.Konva = {
    _global: t.glob,
    version: "9.3.16",
    isBrowser: n(),
    isUnminified: /param/.test((function(o) {
    }).toString()),
    dblClickWindow: 400,
    getAngle(o) {
      return t.Konva.angleDeg ? o * e : o;
    },
    enableTrace: !1,
    pointerEventsEnabled: !0,
    autoDrawEnabled: !0,
    hitOnDragEnabled: !1,
    capturePointerEventsEnabled: !1,
    _mouseListenClick: !1,
    _touchListenClick: !1,
    _pointerListenClick: !1,
    _mouseInDblClickWindow: !1,
    _touchInDblClickWindow: !1,
    _pointerInDblClickWindow: !1,
    _mouseDblClickPointerId: null,
    _touchDblClickPointerId: null,
    _pointerDblClickPointerId: null,
    _fixTextRendering: !1,
    pixelRatio: typeof window < "u" && window.devicePixelRatio || 1,
    dragDistance: 3,
    angleDeg: !0,
    showWarnings: !0,
    dragButtons: [0, 1],
    isDragging() {
      return t.Konva.DD.isDragging;
    },
    isTransforming() {
      var o;
      return (o = t.Konva.Transformer) === null || o === void 0 ? void 0 : o.isTransforming();
    },
    isDragReady() {
      return !!t.Konva.DD.node;
    },
    releaseCanvasOnDestroy: !0,
    document: t.glob.document,
    _injectGlobal(o) {
      t.glob.Konva = o;
    }
  };
  const r = (o) => {
    t.Konva[o.prototype.getClassName()] = o;
  };
  t._registerNode = r, t.Konva._injectGlobal(t.Konva);
})(ye);
var ot = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Util = t.Transform = void 0;
  const e = ye;
  class n {
    constructor(C = [1, 0, 0, 1, 0, 0]) {
      this.dirty = !1, this.m = C && C.slice() || [1, 0, 0, 1, 0, 0];
    }
    reset() {
      this.m[0] = 1, this.m[1] = 0, this.m[2] = 0, this.m[3] = 1, this.m[4] = 0, this.m[5] = 0;
    }
    copy() {
      return new n(this.m);
    }
    copyInto(C) {
      C.m[0] = this.m[0], C.m[1] = this.m[1], C.m[2] = this.m[2], C.m[3] = this.m[3], C.m[4] = this.m[4], C.m[5] = this.m[5];
    }
    point(C) {
      const T = this.m;
      return {
        x: T[0] * C.x + T[2] * C.y + T[4],
        y: T[1] * C.x + T[3] * C.y + T[5]
      };
    }
    translate(C, T) {
      return this.m[4] += this.m[0] * C + this.m[2] * T, this.m[5] += this.m[1] * C + this.m[3] * T, this;
    }
    scale(C, T) {
      return this.m[0] *= C, this.m[1] *= C, this.m[2] *= T, this.m[3] *= T, this;
    }
    rotate(C) {
      const T = Math.cos(C), M = Math.sin(C), L = this.m[0] * T + this.m[2] * M, A = this.m[1] * T + this.m[3] * M, B = this.m[0] * -M + this.m[2] * T, N = this.m[1] * -M + this.m[3] * T;
      return this.m[0] = L, this.m[1] = A, this.m[2] = B, this.m[3] = N, this;
    }
    getTranslation() {
      return {
        x: this.m[4],
        y: this.m[5]
      };
    }
    skew(C, T) {
      const M = this.m[0] + this.m[2] * T, L = this.m[1] + this.m[3] * T, A = this.m[2] + this.m[0] * C, B = this.m[3] + this.m[1] * C;
      return this.m[0] = M, this.m[1] = L, this.m[2] = A, this.m[3] = B, this;
    }
    multiply(C) {
      const T = this.m[0] * C.m[0] + this.m[2] * C.m[1], M = this.m[1] * C.m[0] + this.m[3] * C.m[1], L = this.m[0] * C.m[2] + this.m[2] * C.m[3], A = this.m[1] * C.m[2] + this.m[3] * C.m[3], B = this.m[0] * C.m[4] + this.m[2] * C.m[5] + this.m[4], N = this.m[1] * C.m[4] + this.m[3] * C.m[5] + this.m[5];
      return this.m[0] = T, this.m[1] = M, this.m[2] = L, this.m[3] = A, this.m[4] = B, this.m[5] = N, this;
    }
    invert() {
      const C = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), T = this.m[3] * C, M = -this.m[1] * C, L = -this.m[2] * C, A = this.m[0] * C, B = C * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), N = C * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
      return this.m[0] = T, this.m[1] = M, this.m[2] = L, this.m[3] = A, this.m[4] = B, this.m[5] = N, this;
    }
    getMatrix() {
      return this.m;
    }
    decompose() {
      const C = this.m[0], T = this.m[1], M = this.m[2], L = this.m[3], A = this.m[4], B = this.m[5], N = C * L - T * M, D = {
        x: A,
        y: B,
        rotation: 0,
        scaleX: 0,
        scaleY: 0,
        skewX: 0,
        skewY: 0
      };
      if (C != 0 || T != 0) {
        const z = Math.sqrt(C * C + T * T);
        D.rotation = T > 0 ? Math.acos(C / z) : -Math.acos(C / z), D.scaleX = z, D.scaleY = N / z, D.skewX = (C * M + T * L) / N, D.skewY = 0;
      } else if (M != 0 || L != 0) {
        const z = Math.sqrt(M * M + L * L);
        D.rotation = Math.PI / 2 - (L > 0 ? Math.acos(-M / z) : -Math.acos(M / z)), D.scaleX = N / z, D.scaleY = z, D.skewX = 0, D.skewY = (C * M + T * L) / N;
      }
      return D.rotation = t.Util._getRotation(D.rotation), D;
    }
  }
  t.Transform = n;
  let r = "[object Array]", o = "[object Number]", a = "[object String]", l = "[object Boolean]", c = Math.PI / 180, h = 180 / Math.PI, d = "#", m = "", S = "0", y = "Konva warning: ", _ = "Konva error: ", x = "rgb(", P = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 132, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 255, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 203],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [119, 128, 144],
    slategrey: [119, 128, 144],
    snow: [255, 255, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    transparent: [255, 255, 255, 0],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 5]
  }, R = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/, w = [];
  const E = typeof requestAnimationFrame < "u" && requestAnimationFrame || function(g) {
    setTimeout(g, 60);
  };
  t.Util = {
    _isElement(g) {
      return !!(g && g.nodeType == 1);
    },
    _isFunction(g) {
      return !!(g && g.constructor && g.call && g.apply);
    },
    _isPlainObject(g) {
      return !!g && g.constructor === Object;
    },
    _isArray(g) {
      return Object.prototype.toString.call(g) === r;
    },
    _isNumber(g) {
      return Object.prototype.toString.call(g) === o && !isNaN(g) && isFinite(g);
    },
    _isString(g) {
      return Object.prototype.toString.call(g) === a;
    },
    _isBoolean(g) {
      return Object.prototype.toString.call(g) === l;
    },
    isObject(g) {
      return g instanceof Object;
    },
    isValidSelector(g) {
      if (typeof g != "string")
        return !1;
      const C = g[0];
      return C === "#" || C === "." || C === C.toUpperCase();
    },
    _sign(g) {
      return g === 0 || g > 0 ? 1 : -1;
    },
    requestAnimFrame(g) {
      w.push(g), w.length === 1 && E(function() {
        const C = w;
        w = [], C.forEach(function(T) {
          T();
        });
      });
    },
    createCanvasElement() {
      const g = document.createElement("canvas");
      try {
        g.style = g.style || {};
      } catch {
      }
      return g;
    },
    createImageElement() {
      return document.createElement("img");
    },
    _isInDocument(g) {
      for (; g = g.parentNode; )
        if (g == document)
          return !0;
      return !1;
    },
    _urlToImage(g, C) {
      const T = t.Util.createImageElement();
      T.onload = function() {
        C(T);
      }, T.src = g;
    },
    _rgbToHex(g, C, T) {
      return ((1 << 24) + (g << 16) + (C << 8) + T).toString(16).slice(1);
    },
    _hexToRgb(g) {
      g = g.replace(d, m);
      const C = parseInt(g, 16);
      return {
        r: C >> 16 & 255,
        g: C >> 8 & 255,
        b: C & 255
      };
    },
    getRandomColor() {
      let g = (Math.random() * 16777215 << 0).toString(16);
      for (; g.length < 6; )
        g = S + g;
      return d + g;
    },
    getRGB(g) {
      let C;
      return g in P ? (C = P[g], {
        r: C[0],
        g: C[1],
        b: C[2]
      }) : g[0] === d ? this._hexToRgb(g.substring(1)) : g.substr(0, 4) === x ? (C = R.exec(g.replace(/ /g, "")), {
        r: parseInt(C[1], 10),
        g: parseInt(C[2], 10),
        b: parseInt(C[3], 10)
      }) : {
        r: 0,
        g: 0,
        b: 0
      };
    },
    colorToRGBA(g) {
      return g = g || "black", t.Util._namedColorToRBA(g) || t.Util._hex3ColorToRGBA(g) || t.Util._hex4ColorToRGBA(g) || t.Util._hex6ColorToRGBA(g) || t.Util._hex8ColorToRGBA(g) || t.Util._rgbColorToRGBA(g) || t.Util._rgbaColorToRGBA(g) || t.Util._hslColorToRGBA(g);
    },
    _namedColorToRBA(g) {
      const C = P[g.toLowerCase()];
      return C ? {
        r: C[0],
        g: C[1],
        b: C[2],
        a: 1
      } : null;
    },
    _rgbColorToRGBA(g) {
      if (g.indexOf("rgb(") === 0) {
        g = g.match(/rgb\(([^)]+)\)/)[1];
        const C = g.split(/ *, */).map(Number);
        return {
          r: C[0],
          g: C[1],
          b: C[2],
          a: 1
        };
      }
    },
    _rgbaColorToRGBA(g) {
      if (g.indexOf("rgba(") === 0) {
        g = g.match(/rgba\(([^)]+)\)/)[1];
        const C = g.split(/ *, */).map((T, M) => T.slice(-1) === "%" ? M === 3 ? parseInt(T) / 100 : parseInt(T) / 100 * 255 : Number(T));
        return {
          r: C[0],
          g: C[1],
          b: C[2],
          a: C[3]
        };
      }
    },
    _hex8ColorToRGBA(g) {
      if (g[0] === "#" && g.length === 9)
        return {
          r: parseInt(g.slice(1, 3), 16),
          g: parseInt(g.slice(3, 5), 16),
          b: parseInt(g.slice(5, 7), 16),
          a: parseInt(g.slice(7, 9), 16) / 255
        };
    },
    _hex6ColorToRGBA(g) {
      if (g[0] === "#" && g.length === 7)
        return {
          r: parseInt(g.slice(1, 3), 16),
          g: parseInt(g.slice(3, 5), 16),
          b: parseInt(g.slice(5, 7), 16),
          a: 1
        };
    },
    _hex4ColorToRGBA(g) {
      if (g[0] === "#" && g.length === 5)
        return {
          r: parseInt(g[1] + g[1], 16),
          g: parseInt(g[2] + g[2], 16),
          b: parseInt(g[3] + g[3], 16),
          a: parseInt(g[4] + g[4], 16) / 255
        };
    },
    _hex3ColorToRGBA(g) {
      if (g[0] === "#" && g.length === 4)
        return {
          r: parseInt(g[1] + g[1], 16),
          g: parseInt(g[2] + g[2], 16),
          b: parseInt(g[3] + g[3], 16),
          a: 1
        };
    },
    _hslColorToRGBA(g) {
      if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(g)) {
        const [C, ...T] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(g), M = Number(T[0]) / 360, L = Number(T[1]) / 100, A = Number(T[2]) / 100;
        let B, N, D;
        if (L === 0)
          return D = A * 255, {
            r: Math.round(D),
            g: Math.round(D),
            b: Math.round(D),
            a: 1
          };
        A < 0.5 ? B = A * (1 + L) : B = A + L - A * L;
        const z = 2 * A - B, q = [0, 0, 0];
        for (let ce = 0; ce < 3; ce++)
          N = M + 1 / 3 * -(ce - 1), N < 0 && N++, N > 1 && N--, 6 * N < 1 ? D = z + (B - z) * 6 * N : 2 * N < 1 ? D = B : 3 * N < 2 ? D = z + (B - z) * (2 / 3 - N) * 6 : D = z, q[ce] = D * 255;
        return {
          r: Math.round(q[0]),
          g: Math.round(q[1]),
          b: Math.round(q[2]),
          a: 1
        };
      }
    },
    haveIntersection(g, C) {
      return !(C.x > g.x + g.width || C.x + C.width < g.x || C.y > g.y + g.height || C.y + C.height < g.y);
    },
    cloneObject(g) {
      const C = {};
      for (const T in g)
        this._isPlainObject(g[T]) ? C[T] = this.cloneObject(g[T]) : this._isArray(g[T]) ? C[T] = this.cloneArray(g[T]) : C[T] = g[T];
      return C;
    },
    cloneArray(g) {
      return g.slice(0);
    },
    degToRad(g) {
      return g * c;
    },
    radToDeg(g) {
      return g * h;
    },
    _degToRad(g) {
      return t.Util.warn("Util._degToRad is removed. Please use public Util.degToRad instead."), t.Util.degToRad(g);
    },
    _radToDeg(g) {
      return t.Util.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead."), t.Util.radToDeg(g);
    },
    _getRotation(g) {
      return e.Konva.angleDeg ? t.Util.radToDeg(g) : g;
    },
    _capitalize(g) {
      return g.charAt(0).toUpperCase() + g.slice(1);
    },
    throw(g) {
      throw new Error(_ + g);
    },
    error(g) {
      console.error(_ + g);
    },
    warn(g) {
      e.Konva.showWarnings && console.warn(y + g);
    },
    each(g, C) {
      for (const T in g)
        C(T, g[T]);
    },
    _inRange(g, C, T) {
      return C <= g && g < T;
    },
    _getProjectionToSegment(g, C, T, M, L, A) {
      let B, N, D;
      const z = (g - T) * (g - T) + (C - M) * (C - M);
      if (z == 0)
        B = g, N = C, D = (L - T) * (L - T) + (A - M) * (A - M);
      else {
        const q = ((L - g) * (T - g) + (A - C) * (M - C)) / z;
        q < 0 ? (B = g, N = C, D = (g - L) * (g - L) + (C - A) * (C - A)) : q > 1 ? (B = T, N = M, D = (T - L) * (T - L) + (M - A) * (M - A)) : (B = g + q * (T - g), N = C + q * (M - C), D = (B - L) * (B - L) + (N - A) * (N - A));
      }
      return [B, N, D];
    },
    _getProjectionToLine(g, C, T) {
      const M = t.Util.cloneObject(g);
      let L = Number.MAX_VALUE;
      return C.forEach(function(A, B) {
        if (!T && B === C.length - 1)
          return;
        const N = C[(B + 1) % C.length], D = t.Util._getProjectionToSegment(A.x, A.y, N.x, N.y, g.x, g.y), z = D[0], q = D[1], ce = D[2];
        ce < L && (M.x = z, M.y = q, L = ce);
      }), M;
    },
    _prepareArrayForTween(g, C, T) {
      let M, L = [], A = [];
      if (g.length > C.length) {
        const N = C;
        C = g, g = N;
      }
      for (M = 0; M < g.length; M += 2)
        L.push({
          x: g[M],
          y: g[M + 1]
        });
      for (M = 0; M < C.length; M += 2)
        A.push({
          x: C[M],
          y: C[M + 1]
        });
      const B = [];
      return A.forEach(function(N) {
        const D = t.Util._getProjectionToLine(N, L, T);
        B.push(D.x), B.push(D.y);
      }), B;
    },
    _prepareToStringify(g) {
      let C;
      g.visitedByCircularReferenceRemoval = !0;
      for (const T in g)
        if (g.hasOwnProperty(T) && g[T] && typeof g[T] == "object") {
          if (C = Object.getOwnPropertyDescriptor(g, T), g[T].visitedByCircularReferenceRemoval || t.Util._isElement(g[T]))
            if (C.configurable)
              delete g[T];
            else
              return null;
          else if (t.Util._prepareToStringify(g[T]) === null)
            if (C.configurable)
              delete g[T];
            else
              return null;
        }
      return delete g.visitedByCircularReferenceRemoval, g;
    },
    _assign(g, C) {
      for (const T in C)
        g[T] = C[T];
      return g;
    },
    _getFirstPointerId(g) {
      return g.touches ? g.changedTouches[0].identifier : g.pointerId || 999;
    },
    releaseCanvas(...g) {
      e.Konva.releaseCanvasOnDestroy && g.forEach((C) => {
        C.width = 0, C.height = 0;
      });
    },
    drawRoundedRectPath(g, C, T, M) {
      let L = 0, A = 0, B = 0, N = 0;
      typeof M == "number" ? L = A = B = N = Math.min(M, C / 2, T / 2) : (L = Math.min(M[0] || 0, C / 2, T / 2), A = Math.min(M[1] || 0, C / 2, T / 2), N = Math.min(M[2] || 0, C / 2, T / 2), B = Math.min(M[3] || 0, C / 2, T / 2)), g.moveTo(L, 0), g.lineTo(C - A, 0), g.arc(C - A, A, A, Math.PI * 3 / 2, 0, !1), g.lineTo(C, T - N), g.arc(C - N, T - N, N, 0, Math.PI / 2, !1), g.lineTo(B, T), g.arc(B, T - B, B, Math.PI / 2, Math.PI, !1), g.lineTo(0, L), g.arc(L, L, L, Math.PI, Math.PI * 3 / 2, !1);
    }
  };
})(ot);
var Je = {}, _e = {}, ue = {};
Object.defineProperty(ue, "__esModule", { value: !0 });
ue.RGBComponent = yS;
ue.alphaComponent = _S;
ue.getNumberValidator = SS;
ue.getNumberOrArrayOfNumbersValidator = wS;
ue.getNumberOrAutoValidator = xS;
ue.getStringValidator = ES;
ue.getStringOrGradientValidator = CS;
ue.getFunctionValidator = PS;
ue.getNumberArrayValidator = TS;
ue.getBooleanValidator = kS;
ue.getComponentValidator = NS;
const Gr = ye, at = ot;
function Hr(t) {
  return at.Util._isString(t) ? '"' + t + '"' : Object.prototype.toString.call(t) === "[object Number]" || at.Util._isBoolean(t) ? t : Object.prototype.toString.call(t);
}
function yS(t) {
  return t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
}
function _S(t) {
  return t > 1 ? 1 : t < 1e-4 ? 1e-4 : t;
}
function SS() {
  if (Gr.Konva.isUnminified)
    return function(t, e) {
      return at.Util._isNumber(t) || at.Util.warn(Hr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a number.'), t;
    };
}
function wS(t) {
  if (Gr.Konva.isUnminified)
    return function(e, n) {
      const r = at.Util._isNumber(e), o = at.Util._isArray(e) && e.length == t;
      return !r && !o && at.Util.warn(Hr(e) + ' is a not valid value for "' + n + '" attribute. The value should be a number or Array<number>(' + t + ")"), e;
    };
}
function xS() {
  if (Gr.Konva.isUnminified)
    return function(t, e) {
      return at.Util._isNumber(t) || t === "auto" || at.Util.warn(Hr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a number or "auto".'), t;
    };
}
function ES() {
  if (Gr.Konva.isUnminified)
    return function(t, e) {
      return at.Util._isString(t) || at.Util.warn(Hr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a string.'), t;
    };
}
function CS() {
  if (Gr.Konva.isUnminified)
    return function(t, e) {
      const n = at.Util._isString(t), r = Object.prototype.toString.call(t) === "[object CanvasGradient]" || t && t.addColorStop;
      return n || r || at.Util.warn(Hr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a string or a native gradient.'), t;
    };
}
function PS() {
  if (Gr.Konva.isUnminified)
    return function(t, e) {
      return at.Util._isFunction(t) || at.Util.warn(Hr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a function.'), t;
    };
}
function TS() {
  if (Gr.Konva.isUnminified)
    return function(t, e) {
      const n = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
      return n && t instanceof n || (at.Util._isArray(t) ? t.forEach(function(r) {
        at.Util._isNumber(r) || at.Util.warn('"' + e + '" attribute has non numeric element ' + r + ". Make sure that all elements are numbers.");
      }) : at.Util.warn(Hr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a array of numbers.')), t;
    };
}
function kS() {
  if (Gr.Konva.isUnminified)
    return function(t, e) {
      return t === !0 || t === !1 || at.Util.warn(Hr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a boolean.'), t;
    };
}
function NS(t) {
  if (Gr.Konva.isUnminified)
    return function(e, n) {
      return e == null || at.Util.isObject(e) || at.Util.warn(Hr(e) + ' is a not valid value for "' + n + '" attribute. The value should be an object with properties ' + t), e;
    };
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Factory = void 0;
  const e = ot, n = ue, r = "get", o = "set";
  t.Factory = {
    addGetterSetter(a, l, c, h, d) {
      t.Factory.addGetter(a, l, c), t.Factory.addSetter(a, l, h, d), t.Factory.addOverloadedGetterSetter(a, l);
    },
    addGetter(a, l, c) {
      const h = r + e.Util._capitalize(l);
      a.prototype[h] = a.prototype[h] || function() {
        const d = this.attrs[l];
        return d === void 0 ? c : d;
      };
    },
    addSetter(a, l, c, h) {
      const d = o + e.Util._capitalize(l);
      a.prototype[d] || t.Factory.overWriteSetter(a, l, c, h);
    },
    overWriteSetter(a, l, c, h) {
      const d = o + e.Util._capitalize(l);
      a.prototype[d] = function(m) {
        return c && m !== void 0 && m !== null && (m = c.call(this, m, l)), this._setAttr(l, m), h && h.call(this), this;
      };
    },
    addComponentsGetterSetter(a, l, c, h, d) {
      let m = c.length, S = e.Util._capitalize, y = r + S(l), _ = o + S(l), x, P;
      a.prototype[y] = function() {
        const w = {};
        for (x = 0; x < m; x++)
          P = c[x], w[P] = this.getAttr(l + S(P));
        return w;
      };
      const R = (0, n.getComponentValidator)(c);
      a.prototype[_] = function(w) {
        let E = this.attrs[l], g;
        h && (w = h.call(this, w)), R && R.call(this, w, l);
        for (g in w)
          w.hasOwnProperty(g) && this._setAttr(l + S(g), w[g]);
        return w || c.forEach((C) => {
          this._setAttr(l + S(C), void 0);
        }), this._fireChangeEvent(l, E, w), d && d.call(this), this;
      }, t.Factory.addOverloadedGetterSetter(a, l);
    },
    addOverloadedGetterSetter(a, l) {
      const c = e.Util._capitalize(l), h = o + c, d = r + c;
      a.prototype[l] = function() {
        return arguments.length ? (this[h](arguments[0]), this) : this[d]();
      };
    },
    addDeprecatedGetterSetter(a, l, c, h) {
      e.Util.error("Adding deprecated " + l);
      const d = r + e.Util._capitalize(l), m = l + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
      a.prototype[d] = function() {
        e.Util.error(m);
        const S = this.attrs[l];
        return S === void 0 ? c : S;
      }, t.Factory.addSetter(a, l, h, function() {
        e.Util.error(m);
      }), t.Factory.addOverloadedGetterSetter(a, l);
    },
    backCompat(a, l) {
      e.Util.each(l, function(c, h) {
        const d = a.prototype[h], m = r + e.Util._capitalize(c), S = o + e.Util._capitalize(c);
        function y() {
          d.apply(this, arguments), e.Util.error('"' + c + '" method is deprecated and will be removed soon. Use ""' + h + '" instead.');
        }
        a.prototype[c] = y, a.prototype[m] = y, a.prototype[S] = y;
      });
    },
    afterSetFilter() {
      this._filterUpToDate = !1;
    }
  };
})(_e);
var Qn = {}, Fr = {};
Object.defineProperty(Fr, "__esModule", { value: !0 });
Fr.HitContext = Fr.SceneContext = Fr.Context = void 0;
const S4 = ot, RS = ye;
function AS(t) {
  let e = [], n = t.length, r = S4.Util, o, a;
  for (o = 0; o < n; o++)
    a = t[o], r._isNumber(a) ? a = Math.round(a * 1e3) / 1e3 : r._isString(a) || (a = a + ""), e.push(a);
  return e;
}
const N2 = ",", MS = "(", LS = ")", FS = "([", IS = "])", OS = ";", DS = "()", BS = "=", R2 = [
  "arc",
  "arcTo",
  "beginPath",
  "bezierCurveTo",
  "clearRect",
  "clip",
  "closePath",
  "createLinearGradient",
  "createPattern",
  "createRadialGradient",
  "drawImage",
  "ellipse",
  "fill",
  "fillText",
  "getImageData",
  "createImageData",
  "lineTo",
  "moveTo",
  "putImageData",
  "quadraticCurveTo",
  "rect",
  "roundRect",
  "restore",
  "rotate",
  "save",
  "scale",
  "setLineDash",
  "setTransform",
  "stroke",
  "strokeText",
  "transform",
  "translate"
], US = [
  "fillStyle",
  "strokeStyle",
  "shadowColor",
  "shadowBlur",
  "shadowOffsetX",
  "shadowOffsetY",
  "letterSpacing",
  "lineCap",
  "lineDashOffset",
  "lineJoin",
  "lineWidth",
  "miterLimit",
  "direction",
  "font",
  "textAlign",
  "textBaseline",
  "globalAlpha",
  "globalCompositeOperation",
  "imageSmoothingEnabled"
], GS = 100;
class Fc {
  constructor(e) {
    this.canvas = e, RS.Konva.enableTrace && (this.traceArr = [], this._enableTrace());
  }
  fillShape(e) {
    e.fillEnabled() && this._fill(e);
  }
  _fill(e) {
  }
  strokeShape(e) {
    e.hasStroke() && this._stroke(e);
  }
  _stroke(e) {
  }
  fillStrokeShape(e) {
    e.attrs.fillAfterStrokeEnabled ? (this.strokeShape(e), this.fillShape(e)) : (this.fillShape(e), this.strokeShape(e));
  }
  getTrace(e, n) {
    let r = this.traceArr, o = r.length, a = "", l, c, h, d;
    for (l = 0; l < o; l++)
      c = r[l], h = c.method, h ? (d = c.args, a += h, e ? a += DS : S4.Util._isArray(d[0]) ? a += FS + d.join(N2) + IS : (n && (d = d.map((m) => typeof m == "number" ? Math.floor(m) : m)), a += MS + d.join(N2) + LS)) : (a += c.property, e || (a += BS + c.val)), a += OS;
    return a;
  }
  clearTrace() {
    this.traceArr = [];
  }
  _trace(e) {
    let n = this.traceArr, r;
    n.push(e), r = n.length, r >= GS && n.shift();
  }
  reset() {
    const e = this.getCanvas().getPixelRatio();
    this.setTransform(1 * e, 0, 0, 1 * e, 0, 0);
  }
  getCanvas() {
    return this.canvas;
  }
  clear(e) {
    const n = this.getCanvas();
    e ? this.clearRect(e.x || 0, e.y || 0, e.width || 0, e.height || 0) : this.clearRect(0, 0, n.getWidth() / n.pixelRatio, n.getHeight() / n.pixelRatio);
  }
  _applyLineCap(e) {
    const n = e.attrs.lineCap;
    n && this.setAttr("lineCap", n);
  }
  _applyOpacity(e) {
    const n = e.getAbsoluteOpacity();
    n !== 1 && this.setAttr("globalAlpha", n);
  }
  _applyLineJoin(e) {
    const n = e.attrs.lineJoin;
    n && this.setAttr("lineJoin", n);
  }
  setAttr(e, n) {
    this._context[e] = n;
  }
  arc(e, n, r, o, a, l) {
    this._context.arc(e, n, r, o, a, l);
  }
  arcTo(e, n, r, o, a) {
    this._context.arcTo(e, n, r, o, a);
  }
  beginPath() {
    this._context.beginPath();
  }
  bezierCurveTo(e, n, r, o, a, l) {
    this._context.bezierCurveTo(e, n, r, o, a, l);
  }
  clearRect(e, n, r, o) {
    this._context.clearRect(e, n, r, o);
  }
  clip(...e) {
    this._context.clip.apply(this._context, e);
  }
  closePath() {
    this._context.closePath();
  }
  createImageData(e, n) {
    const r = arguments;
    if (r.length === 2)
      return this._context.createImageData(e, n);
    if (r.length === 1)
      return this._context.createImageData(e);
  }
  createLinearGradient(e, n, r, o) {
    return this._context.createLinearGradient(e, n, r, o);
  }
  createPattern(e, n) {
    return this._context.createPattern(e, n);
  }
  createRadialGradient(e, n, r, o, a, l) {
    return this._context.createRadialGradient(e, n, r, o, a, l);
  }
  drawImage(e, n, r, o, a, l, c, h, d) {
    const m = arguments, S = this._context;
    m.length === 3 ? S.drawImage(e, n, r) : m.length === 5 ? S.drawImage(e, n, r, o, a) : m.length === 9 && S.drawImage(e, n, r, o, a, l, c, h, d);
  }
  ellipse(e, n, r, o, a, l, c, h) {
    this._context.ellipse(e, n, r, o, a, l, c, h);
  }
  isPointInPath(e, n, r, o) {
    return r ? this._context.isPointInPath(r, e, n, o) : this._context.isPointInPath(e, n, o);
  }
  fill(...e) {
    this._context.fill.apply(this._context, e);
  }
  fillRect(e, n, r, o) {
    this._context.fillRect(e, n, r, o);
  }
  strokeRect(e, n, r, o) {
    this._context.strokeRect(e, n, r, o);
  }
  fillText(e, n, r, o) {
    o ? this._context.fillText(e, n, r, o) : this._context.fillText(e, n, r);
  }
  measureText(e) {
    return this._context.measureText(e);
  }
  getImageData(e, n, r, o) {
    return this._context.getImageData(e, n, r, o);
  }
  lineTo(e, n) {
    this._context.lineTo(e, n);
  }
  moveTo(e, n) {
    this._context.moveTo(e, n);
  }
  rect(e, n, r, o) {
    this._context.rect(e, n, r, o);
  }
  roundRect(e, n, r, o, a) {
    this._context.roundRect(e, n, r, o, a);
  }
  putImageData(e, n, r) {
    this._context.putImageData(e, n, r);
  }
  quadraticCurveTo(e, n, r, o) {
    this._context.quadraticCurveTo(e, n, r, o);
  }
  restore() {
    this._context.restore();
  }
  rotate(e) {
    this._context.rotate(e);
  }
  save() {
    this._context.save();
  }
  scale(e, n) {
    this._context.scale(e, n);
  }
  setLineDash(e) {
    this._context.setLineDash ? this._context.setLineDash(e) : "mozDash" in this._context ? this._context.mozDash = e : "webkitLineDash" in this._context && (this._context.webkitLineDash = e);
  }
  getLineDash() {
    return this._context.getLineDash();
  }
  setTransform(e, n, r, o, a, l) {
    this._context.setTransform(e, n, r, o, a, l);
  }
  stroke(e) {
    e ? this._context.stroke(e) : this._context.stroke();
  }
  strokeText(e, n, r, o) {
    this._context.strokeText(e, n, r, o);
  }
  transform(e, n, r, o, a, l) {
    this._context.transform(e, n, r, o, a, l);
  }
  translate(e, n) {
    this._context.translate(e, n);
  }
  _enableTrace() {
    let e = this, n = R2.length, r = this.setAttr, o, a;
    const l = function(c) {
      let h = e[c], d;
      e[c] = function() {
        return a = AS(Array.prototype.slice.call(arguments, 0)), d = h.apply(e, arguments), e._trace({
          method: c,
          args: a
        }), d;
      };
    };
    for (o = 0; o < n; o++)
      l(R2[o]);
    e.setAttr = function() {
      r.apply(e, arguments);
      const c = arguments[0];
      let h = arguments[1];
      (c === "shadowOffsetX" || c === "shadowOffsetY" || c === "shadowBlur") && (h = h / this.canvas.getPixelRatio()), e._trace({
        property: c,
        val: h
      });
    };
  }
  _applyGlobalCompositeOperation(e) {
    const n = e.attrs.globalCompositeOperation;
    !n || n === "source-over" || this.setAttr("globalCompositeOperation", n);
  }
}
Fr.Context = Fc;
US.forEach(function(t) {
  Object.defineProperty(Fc.prototype, t, {
    get() {
      return this._context[t];
    },
    set(e) {
      this._context[t] = e;
    }
  });
});
class HS extends Fc {
  constructor(e, { willReadFrequently: n = !1 } = {}) {
    super(e), this._context = e._canvas.getContext("2d", {
      willReadFrequently: n
    });
  }
  _fillColor(e) {
    const n = e.fill();
    this.setAttr("fillStyle", n), e._fillFunc(this);
  }
  _fillPattern(e) {
    this.setAttr("fillStyle", e._getFillPattern()), e._fillFunc(this);
  }
  _fillLinearGradient(e) {
    const n = e._getLinearGradient();
    n && (this.setAttr("fillStyle", n), e._fillFunc(this));
  }
  _fillRadialGradient(e) {
    const n = e._getRadialGradient();
    n && (this.setAttr("fillStyle", n), e._fillFunc(this));
  }
  _fill(e) {
    const n = e.fill(), r = e.getFillPriority();
    if (n && r === "color") {
      this._fillColor(e);
      return;
    }
    const o = e.getFillPatternImage();
    if (o && r === "pattern") {
      this._fillPattern(e);
      return;
    }
    const a = e.getFillLinearGradientColorStops();
    if (a && r === "linear-gradient") {
      this._fillLinearGradient(e);
      return;
    }
    const l = e.getFillRadialGradientColorStops();
    if (l && r === "radial-gradient") {
      this._fillRadialGradient(e);
      return;
    }
    n ? this._fillColor(e) : o ? this._fillPattern(e) : a ? this._fillLinearGradient(e) : l && this._fillRadialGradient(e);
  }
  _strokeLinearGradient(e) {
    const n = e.getStrokeLinearGradientStartPoint(), r = e.getStrokeLinearGradientEndPoint(), o = e.getStrokeLinearGradientColorStops(), a = this.createLinearGradient(n.x, n.y, r.x, r.y);
    if (o) {
      for (let l = 0; l < o.length; l += 2)
        a.addColorStop(o[l], o[l + 1]);
      this.setAttr("strokeStyle", a);
    }
  }
  _stroke(e) {
    const n = e.dash(), r = e.getStrokeScaleEnabled();
    if (e.hasStroke()) {
      if (!r) {
        this.save();
        const a = this.getCanvas().getPixelRatio();
        this.setTransform(a, 0, 0, a, 0, 0);
      }
      this._applyLineCap(e), n && e.dashEnabled() && (this.setLineDash(n), this.setAttr("lineDashOffset", e.dashOffset())), this.setAttr("lineWidth", e.strokeWidth()), e.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)"), e.getStrokeLinearGradientColorStops() ? this._strokeLinearGradient(e) : this.setAttr("strokeStyle", e.stroke()), e._strokeFunc(this), r || this.restore();
    }
  }
  _applyShadow(e) {
    var n, r, o;
    const a = (n = e.getShadowRGBA()) !== null && n !== void 0 ? n : "black", l = (r = e.getShadowBlur()) !== null && r !== void 0 ? r : 5, c = (o = e.getShadowOffset()) !== null && o !== void 0 ? o : {
      x: 0,
      y: 0
    }, h = e.getAbsoluteScale(), d = this.canvas.getPixelRatio(), m = h.x * d, S = h.y * d;
    this.setAttr("shadowColor", a), this.setAttr("shadowBlur", l * Math.min(Math.abs(m), Math.abs(S))), this.setAttr("shadowOffsetX", c.x * m), this.setAttr("shadowOffsetY", c.y * S);
  }
}
Fr.SceneContext = HS;
class zS extends Fc {
  constructor(e) {
    super(e), this._context = e._canvas.getContext("2d", {
      willReadFrequently: !0
    });
  }
  _fill(e) {
    this.save(), this.setAttr("fillStyle", e.colorKey), e._fillFuncHit(this), this.restore();
  }
  strokeShape(e) {
    e.hasHitStroke() && this._stroke(e);
  }
  _stroke(e) {
    if (e.hasHitStroke()) {
      const n = e.getStrokeScaleEnabled();
      if (!n) {
        this.save();
        const a = this.getCanvas().getPixelRatio();
        this.setTransform(a, 0, 0, a, 0, 0);
      }
      this._applyLineCap(e);
      const r = e.hitStrokeWidth(), o = r === "auto" ? e.strokeWidth() : r;
      this.setAttr("lineWidth", o), this.setAttr("strokeStyle", e.colorKey), e._strokeFuncHit(this), n || this.restore();
    }
  }
}
Fr.HitContext = zS;
Object.defineProperty(Qn, "__esModule", { value: !0 });
Qn.HitCanvas = Qn.SceneCanvas = Qn.Canvas = void 0;
const tc = ot, w4 = Fr, x4 = ye, bS = _e, VS = ue;
let uu;
function jS() {
  if (uu)
    return uu;
  const t = tc.Util.createCanvasElement(), e = t.getContext("2d");
  return uu = function() {
    const n = x4.Konva._global.devicePixelRatio || 1, r = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
    return n / r;
  }(), tc.Util.releaseCanvas(t), uu;
}
class Ic {
  constructor(e) {
    this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
    const r = (e || {}).pixelRatio || x4.Konva.pixelRatio || jS();
    this.pixelRatio = r, this._canvas = tc.Util.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0";
  }
  getContext() {
    return this.context;
  }
  getPixelRatio() {
    return this.pixelRatio;
  }
  setPixelRatio(e) {
    const n = this.pixelRatio;
    this.pixelRatio = e, this.setSize(this.getWidth() / n, this.getHeight() / n);
  }
  setWidth(e) {
    this.width = this._canvas.width = e * this.pixelRatio, this._canvas.style.width = e + "px";
    const n = this.pixelRatio;
    this.getContext()._context.scale(n, n);
  }
  setHeight(e) {
    this.height = this._canvas.height = e * this.pixelRatio, this._canvas.style.height = e + "px";
    const n = this.pixelRatio;
    this.getContext()._context.scale(n, n);
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  setSize(e, n) {
    this.setWidth(e || 0), this.setHeight(n || 0);
  }
  toDataURL(e, n) {
    try {
      return this._canvas.toDataURL(e, n);
    } catch {
      try {
        return this._canvas.toDataURL();
      } catch (o) {
        return tc.Util.error("Unable to get data URL. " + o.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), "";
      }
    }
  }
}
Qn.Canvas = Ic;
bS.Factory.addGetterSetter(Ic, "pixelRatio", void 0, (0, VS.getNumberValidator)());
class WS extends Ic {
  constructor(e = { width: 0, height: 0, willReadFrequently: !1 }) {
    super(e), this.context = new w4.SceneContext(this, {
      willReadFrequently: e.willReadFrequently
    }), this.setSize(e.width, e.height);
  }
}
Qn.SceneCanvas = WS;
class XS extends Ic {
  constructor(e = { width: 0, height: 0 }) {
    super(e), this.hitCanvas = !0, this.context = new w4.HitContext(this), this.setSize(e.width, e.height);
  }
}
Qn.HitCanvas = XS;
var Oc = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.DD = void 0;
  const e = ye, n = ot;
  t.DD = {
    get isDragging() {
      let r = !1;
      return t.DD._dragElements.forEach((o) => {
        o.dragStatus === "dragging" && (r = !0);
      }), r;
    },
    justDragged: !1,
    get node() {
      let r;
      return t.DD._dragElements.forEach((o) => {
        r = o.node;
      }), r;
    },
    _dragElements: /* @__PURE__ */ new Map(),
    _drag(r) {
      const o = [];
      t.DD._dragElements.forEach((a, l) => {
        const { node: c } = a, h = c.getStage();
        h.setPointersPositions(r), a.pointerId === void 0 && (a.pointerId = n.Util._getFirstPointerId(r));
        const d = h._changedPointerPositions.find((m) => m.id === a.pointerId);
        if (d) {
          if (a.dragStatus !== "dragging") {
            const m = c.dragDistance();
            if (Math.max(Math.abs(d.x - a.startPointerPos.x), Math.abs(d.y - a.startPointerPos.y)) < m || (c.startDrag({ evt: r }), !c.isDragging()))
              return;
          }
          c._setDragPosition(r, a), o.push(c);
        }
      }), o.forEach((a) => {
        a.fire("dragmove", {
          type: "dragmove",
          target: a,
          evt: r
        }, !0);
      });
    },
    _endDragBefore(r) {
      const o = [];
      t.DD._dragElements.forEach((a) => {
        const { node: l } = a, c = l.getStage();
        if (r && c.setPointersPositions(r), !c._changedPointerPositions.find((m) => m.id === a.pointerId))
          return;
        (a.dragStatus === "dragging" || a.dragStatus === "stopped") && (t.DD.justDragged = !0, e.Konva._mouseListenClick = !1, e.Konva._touchListenClick = !1, e.Konva._pointerListenClick = !1, a.dragStatus = "stopped");
        const d = a.node.getLayer() || a.node instanceof e.Konva.Stage && a.node;
        d && o.indexOf(d) === -1 && o.push(d);
      }), o.forEach((a) => {
        a.draw();
      });
    },
    _endDragAfter(r) {
      t.DD._dragElements.forEach((o, a) => {
        o.dragStatus === "stopped" && o.node.fire("dragend", {
          type: "dragend",
          target: o.node,
          evt: r
        }, !0), o.dragStatus !== "dragging" && t.DD._dragElements.delete(a);
      });
    }
  }, e.Konva.isBrowser && (window.addEventListener("mouseup", t.DD._endDragBefore, !0), window.addEventListener("touchend", t.DD._endDragBefore, !0), window.addEventListener("touchcancel", t.DD._endDragBefore, !0), window.addEventListener("mousemove", t.DD._drag), window.addEventListener("touchmove", t.DD._drag), window.addEventListener("mouseup", t.DD._endDragAfter, !1), window.addEventListener("touchend", t.DD._endDragAfter, !1), window.addEventListener("touchcancel", t.DD._endDragAfter, !1));
})(Oc);
Object.defineProperty(Je, "__esModule", { value: !0 });
Je.Node = void 0;
const Ce = ot, Ka = _e, qs = Qn, ni = ye, Tn = Oc, ht = ue, ku = "absoluteOpacity", cu = "allEventListeners", kr = "absoluteTransform", A2 = "absoluteScale", Wi = "canvas", KS = "Change", YS = "children", QS = "konva", R0 = "listening", M2 = "mouseenter", L2 = "mouseleave", F2 = "set", I2 = "Shape", Nu = " ", O2 = "stage", ri = "transform", $S = "Stage", A0 = "visible", qS = [
  "xChange.konva",
  "yChange.konva",
  "scaleXChange.konva",
  "scaleYChange.konva",
  "skewXChange.konva",
  "skewYChange.konva",
  "rotationChange.konva",
  "offsetXChange.konva",
  "offsetYChange.konva",
  "transformsEnabledChange.konva"
].join(Nu);
let ZS = 1;
class fe {
  constructor(e) {
    this._id = ZS++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this._allEventListeners = null, this.parent = null, this._cache = /* @__PURE__ */ new Map(), this._attachedDepsListeners = /* @__PURE__ */ new Map(), this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this._dragEventId = null, this._shouldFireChangeEvents = !1, this.setAttrs(e), this._shouldFireChangeEvents = !0;
  }
  hasChildren() {
    return !1;
  }
  _clearCache(e) {
    (e === ri || e === kr) && this._cache.get(e) ? this._cache.get(e).dirty = !0 : e ? this._cache.delete(e) : this._cache.clear();
  }
  _getCache(e, n) {
    let r = this._cache.get(e);
    return (r === void 0 || (e === ri || e === kr) && r.dirty === !0) && (r = n.call(this), this._cache.set(e, r)), r;
  }
  _calculate(e, n, r) {
    if (!this._attachedDepsListeners.get(e)) {
      const o = n.map((a) => a + "Change.konva").join(Nu);
      this.on(o, () => {
        this._clearCache(e);
      }), this._attachedDepsListeners.set(e, !0);
    }
    return this._getCache(e, r);
  }
  _getCanvasCache() {
    return this._cache.get(Wi);
  }
  _clearSelfAndDescendantCache(e) {
    this._clearCache(e), e === kr && this.fire("absoluteTransformChange");
  }
  clearCache() {
    if (this._cache.has(Wi)) {
      const { scene: e, filter: n, hit: r } = this._cache.get(Wi);
      Ce.Util.releaseCanvas(e, n, r), this._cache.delete(Wi);
    }
    return this._clearSelfAndDescendantCache(), this._requestDraw(), this;
  }
  cache(e) {
    const n = e || {};
    let r = {};
    (n.x === void 0 || n.y === void 0 || n.width === void 0 || n.height === void 0) && (r = this.getClientRect({
      skipTransform: !0,
      relativeTo: this.getParent() || void 0
    }));
    let o = Math.ceil(n.width || r.width), a = Math.ceil(n.height || r.height), l = n.pixelRatio, c = n.x === void 0 ? Math.floor(r.x) : n.x, h = n.y === void 0 ? Math.floor(r.y) : n.y, d = n.offset || 0, m = n.drawBorder || !1, S = n.hitCanvasPixelRatio || 1;
    if (!o || !a) {
      Ce.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
      return;
    }
    const y = Math.abs(Math.round(r.x) - c) > 0.5 ? 1 : 0, _ = Math.abs(Math.round(r.y) - h) > 0.5 ? 1 : 0;
    o += d * 2 + y, a += d * 2 + _, c -= d, h -= d;
    const x = new qs.SceneCanvas({
      pixelRatio: l,
      width: o,
      height: a
    }), P = new qs.SceneCanvas({
      pixelRatio: l,
      width: 0,
      height: 0,
      willReadFrequently: !0
    }), R = new qs.HitCanvas({
      pixelRatio: S,
      width: o,
      height: a
    }), w = x.getContext(), E = R.getContext();
    return R.isCache = !0, x.isCache = !0, this._cache.delete(Wi), this._filterUpToDate = !1, n.imageSmoothingEnabled === !1 && (x.getContext()._context.imageSmoothingEnabled = !1, P.getContext()._context.imageSmoothingEnabled = !1), w.save(), E.save(), w.translate(-c, -h), E.translate(-c, -h), this._isUnderCache = !0, this._clearSelfAndDescendantCache(ku), this._clearSelfAndDescendantCache(A2), this.drawScene(x, this), this.drawHit(R, this), this._isUnderCache = !1, w.restore(), E.restore(), m && (w.save(), w.beginPath(), w.rect(0, 0, o, a), w.closePath(), w.setAttr("strokeStyle", "red"), w.setAttr("lineWidth", 5), w.stroke(), w.restore()), this._cache.set(Wi, {
      scene: x,
      filter: P,
      hit: R,
      x: c,
      y: h
    }), this._requestDraw(), this;
  }
  isCached() {
    return this._cache.has(Wi);
  }
  getClientRect(e) {
    throw new Error('abstract "getClientRect" method call');
  }
  _transformedRect(e, n) {
    const r = [
      { x: e.x, y: e.y },
      { x: e.x + e.width, y: e.y },
      { x: e.x + e.width, y: e.y + e.height },
      { x: e.x, y: e.y + e.height }
    ];
    let o = 1 / 0, a = 1 / 0, l = -1 / 0, c = -1 / 0;
    const h = this.getAbsoluteTransform(n);
    return r.forEach(function(d) {
      const m = h.point(d);
      o === void 0 && (o = l = m.x, a = c = m.y), o = Math.min(o, m.x), a = Math.min(a, m.y), l = Math.max(l, m.x), c = Math.max(c, m.y);
    }), {
      x: o,
      y: a,
      width: l - o,
      height: c - a
    };
  }
  _drawCachedSceneCanvas(e) {
    e.save(), e._applyOpacity(this), e._applyGlobalCompositeOperation(this);
    const n = this._getCanvasCache();
    e.translate(n.x, n.y);
    const r = this._getCachedSceneCanvas(), o = r.pixelRatio;
    e.drawImage(r._canvas, 0, 0, r.width / o, r.height / o), e.restore();
  }
  _drawCachedHitCanvas(e) {
    const n = this._getCanvasCache(), r = n.hit;
    e.save(), e.translate(n.x, n.y), e.drawImage(r._canvas, 0, 0, r.width / r.pixelRatio, r.height / r.pixelRatio), e.restore();
  }
  _getCachedSceneCanvas() {
    let e = this.filters(), n = this._getCanvasCache(), r = n.scene, o = n.filter, a = o.getContext(), l, c, h, d;
    if (e) {
      if (!this._filterUpToDate) {
        const m = r.pixelRatio;
        o.setSize(r.width / r.pixelRatio, r.height / r.pixelRatio);
        try {
          for (l = e.length, a.clear(), a.drawImage(r._canvas, 0, 0, r.getWidth() / m, r.getHeight() / m), c = a.getImageData(0, 0, o.getWidth(), o.getHeight()), h = 0; h < l; h++) {
            if (d = e[h], typeof d != "function") {
              Ce.Util.error("Filter should be type of function, but got " + typeof d + " instead. Please check correct filters");
              continue;
            }
            d.call(this, c), a.putImageData(c, 0, 0);
          }
        } catch (S) {
          Ce.Util.error("Unable to apply filter. " + S.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
        }
        this._filterUpToDate = !0;
      }
      return o;
    }
    return r;
  }
  on(e, n) {
    if (this._cache && this._cache.delete(cu), arguments.length === 3)
      return this._delegate.apply(this, arguments);
    let r = e.split(Nu), o = r.length, a, l, c, h, d;
    for (a = 0; a < o; a++)
      l = r[a], c = l.split("."), h = c[0], d = c[1] || "", this.eventListeners[h] || (this.eventListeners[h] = []), this.eventListeners[h].push({
        name: d,
        handler: n
      });
    return this;
  }
  off(e, n) {
    let r = (e || "").split(Nu), o = r.length, a, l, c, h, d, m;
    if (this._cache && this._cache.delete(cu), !e)
      for (l in this.eventListeners)
        this._off(l);
    for (a = 0; a < o; a++)
      if (c = r[a], h = c.split("."), d = h[0], m = h[1], d)
        this.eventListeners[d] && this._off(d, m, n);
      else
        for (l in this.eventListeners)
          this._off(l, m, n);
    return this;
  }
  dispatchEvent(e) {
    const n = {
      target: this,
      type: e.type,
      evt: e
    };
    return this.fire(e.type, n), this;
  }
  addEventListener(e, n) {
    return this.on(e, function(r) {
      n.call(this, r.evt);
    }), this;
  }
  removeEventListener(e) {
    return this.off(e), this;
  }
  _delegate(e, n, r) {
    const o = this;
    this.on(e, function(a) {
      const l = a.target.findAncestors(n, !0, o);
      for (let c = 0; c < l.length; c++)
        a = Ce.Util.cloneObject(a), a.currentTarget = l[c], r.call(l[c], a);
    });
  }
  remove() {
    return this.isDragging() && this.stopDrag(), Tn.DD._dragElements.delete(this._id), this._remove(), this;
  }
  _clearCaches() {
    this._clearSelfAndDescendantCache(kr), this._clearSelfAndDescendantCache(ku), this._clearSelfAndDescendantCache(A2), this._clearSelfAndDescendantCache(O2), this._clearSelfAndDescendantCache(A0), this._clearSelfAndDescendantCache(R0);
  }
  _remove() {
    this._clearCaches();
    const e = this.getParent();
    e && e.children && (e.children.splice(this.index, 1), e._setChildrenIndices(), this.parent = null);
  }
  destroy() {
    return this.remove(), this.clearCache(), this;
  }
  getAttr(e) {
    const n = "get" + Ce.Util._capitalize(e);
    return Ce.Util._isFunction(this[n]) ? this[n]() : this.attrs[e];
  }
  getAncestors() {
    let e = this.getParent(), n = [];
    for (; e; )
      n.push(e), e = e.getParent();
    return n;
  }
  getAttrs() {
    return this.attrs || {};
  }
  setAttrs(e) {
    return this._batchTransformChanges(() => {
      let n, r;
      if (!e)
        return this;
      for (n in e)
        n !== YS && (r = F2 + Ce.Util._capitalize(n), Ce.Util._isFunction(this[r]) ? this[r](e[n]) : this._setAttr(n, e[n]));
    }), this;
  }
  isListening() {
    return this._getCache(R0, this._isListening);
  }
  _isListening(e) {
    if (!this.listening())
      return !1;
    const r = this.getParent();
    return r && r !== e && this !== e ? r._isListening(e) : !0;
  }
  isVisible() {
    return this._getCache(A0, this._isVisible);
  }
  _isVisible(e) {
    if (!this.visible())
      return !1;
    const r = this.getParent();
    return r && r !== e && this !== e ? r._isVisible(e) : !0;
  }
  shouldDrawHit(e, n = !1) {
    if (e)
      return this._isVisible(e) && this._isListening(e);
    const r = this.getLayer();
    let o = !1;
    Tn.DD._dragElements.forEach((l) => {
      l.dragStatus === "dragging" && (l.node.nodeType === "Stage" || l.node.getLayer() === r) && (o = !0);
    });
    const a = !n && !ni.Konva.hitOnDragEnabled && (o || ni.Konva.isTransforming());
    return this.isListening() && this.isVisible() && !a;
  }
  show() {
    return this.visible(!0), this;
  }
  hide() {
    return this.visible(!1), this;
  }
  getZIndex() {
    return this.index || 0;
  }
  getAbsoluteZIndex() {
    let e = this.getDepth(), n = this, r = 0, o, a, l, c;
    function h(m) {
      for (o = [], a = m.length, l = 0; l < a; l++)
        c = m[l], r++, c.nodeType !== I2 && (o = o.concat(c.getChildren().slice())), c._id === n._id && (l = a);
      o.length > 0 && o[0].getDepth() <= e && h(o);
    }
    const d = this.getStage();
    return n.nodeType !== $S && d && h(d.getChildren()), r;
  }
  getDepth() {
    let e = 0, n = this.parent;
    for (; n; )
      e++, n = n.parent;
    return e;
  }
  _batchTransformChanges(e) {
    this._batchingTransformChange = !0, e(), this._batchingTransformChange = !1, this._needClearTransformCache && (this._clearCache(ri), this._clearSelfAndDescendantCache(kr)), this._needClearTransformCache = !1;
  }
  setPosition(e) {
    return this._batchTransformChanges(() => {
      this.x(e.x), this.y(e.y);
    }), this;
  }
  getPosition() {
    return {
      x: this.x(),
      y: this.y()
    };
  }
  getRelativePointerPosition() {
    const e = this.getStage();
    if (!e)
      return null;
    const n = e.getPointerPosition();
    if (!n)
      return null;
    const r = this.getAbsoluteTransform().copy();
    return r.invert(), r.point(n);
  }
  getAbsolutePosition(e) {
    let n = !1, r = this.parent;
    for (; r; ) {
      if (r.isCached()) {
        n = !0;
        break;
      }
      r = r.parent;
    }
    n && !e && (e = !0);
    const o = this.getAbsoluteTransform(e).getMatrix(), a = new Ce.Transform(), l = this.offset();
    return a.m = o.slice(), a.translate(l.x, l.y), a.getTranslation();
  }
  setAbsolutePosition(e) {
    const { x: n, y: r, ...o } = this._clearTransform();
    this.attrs.x = n, this.attrs.y = r, this._clearCache(ri);
    const a = this._getAbsoluteTransform().copy();
    return a.invert(), a.translate(e.x, e.y), e = {
      x: this.attrs.x + a.getTranslation().x,
      y: this.attrs.y + a.getTranslation().y
    }, this._setTransform(o), this.setPosition({ x: e.x, y: e.y }), this._clearCache(ri), this._clearSelfAndDescendantCache(kr), this;
  }
  _setTransform(e) {
    let n;
    for (n in e)
      this.attrs[n] = e[n];
  }
  _clearTransform() {
    const e = {
      x: this.x(),
      y: this.y(),
      rotation: this.rotation(),
      scaleX: this.scaleX(),
      scaleY: this.scaleY(),
      offsetX: this.offsetX(),
      offsetY: this.offsetY(),
      skewX: this.skewX(),
      skewY: this.skewY()
    };
    return this.attrs.x = 0, this.attrs.y = 0, this.attrs.rotation = 0, this.attrs.scaleX = 1, this.attrs.scaleY = 1, this.attrs.offsetX = 0, this.attrs.offsetY = 0, this.attrs.skewX = 0, this.attrs.skewY = 0, e;
  }
  move(e) {
    let n = e.x, r = e.y, o = this.x(), a = this.y();
    return n !== void 0 && (o += n), r !== void 0 && (a += r), this.setPosition({ x: o, y: a }), this;
  }
  _eachAncestorReverse(e, n) {
    let r = [], o = this.getParent(), a, l;
    if (!(n && n._id === this._id)) {
      for (r.unshift(this); o && (!n || o._id !== n._id); )
        r.unshift(o), o = o.parent;
      for (a = r.length, l = 0; l < a; l++)
        e(r[l]);
    }
  }
  rotate(e) {
    return this.rotation(this.rotation() + e), this;
  }
  moveToTop() {
    if (!this.parent)
      return Ce.Util.warn("Node has no parent. moveToTop function is ignored."), !1;
    const e = this.index, n = this.parent.getChildren().length;
    return e < n - 1 ? (this.parent.children.splice(e, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveUp() {
    if (!this.parent)
      return Ce.Util.warn("Node has no parent. moveUp function is ignored."), !1;
    const e = this.index, n = this.parent.getChildren().length;
    return e < n - 1 ? (this.parent.children.splice(e, 1), this.parent.children.splice(e + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveDown() {
    if (!this.parent)
      return Ce.Util.warn("Node has no parent. moveDown function is ignored."), !1;
    const e = this.index;
    return e > 0 ? (this.parent.children.splice(e, 1), this.parent.children.splice(e - 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveToBottom() {
    if (!this.parent)
      return Ce.Util.warn("Node has no parent. moveToBottom function is ignored."), !1;
    const e = this.index;
    return e > 0 ? (this.parent.children.splice(e, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  setZIndex(e) {
    if (!this.parent)
      return Ce.Util.warn("Node has no parent. zIndex parameter is ignored."), this;
    (e < 0 || e >= this.parent.children.length) && Ce.Util.warn("Unexpected value " + e + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
    const n = this.index;
    return this.parent.children.splice(n, 1), this.parent.children.splice(e, 0, this), this.parent._setChildrenIndices(), this;
  }
  getAbsoluteOpacity() {
    return this._getCache(ku, this._getAbsoluteOpacity);
  }
  _getAbsoluteOpacity() {
    let e = this.opacity();
    const n = this.getParent();
    return n && !n._isUnderCache && (e *= n.getAbsoluteOpacity()), e;
  }
  moveTo(e) {
    return this.getParent() !== e && (this._remove(), e.add(this)), this;
  }
  toObject() {
    let e = this.getAttrs(), n, r, o, a, l;
    const c = {
      attrs: {},
      className: this.getClassName()
    };
    for (n in e)
      r = e[n], l = Ce.Util.isObject(r) && !Ce.Util._isPlainObject(r) && !Ce.Util._isArray(r), !l && (o = typeof this[n] == "function" && this[n], delete e[n], a = o ? o.call(this) : null, e[n] = r, a !== r && (c.attrs[n] = r));
    return Ce.Util._prepareToStringify(c);
  }
  toJSON() {
    return JSON.stringify(this.toObject());
  }
  getParent() {
    return this.parent;
  }
  findAncestors(e, n, r) {
    const o = [];
    n && this._isMatch(e) && o.push(this);
    let a = this.parent;
    for (; a; ) {
      if (a === r)
        return o;
      a._isMatch(e) && o.push(a), a = a.parent;
    }
    return o;
  }
  isAncestorOf(e) {
    return !1;
  }
  findAncestor(e, n, r) {
    return this.findAncestors(e, n, r)[0];
  }
  _isMatch(e) {
    if (!e)
      return !1;
    if (typeof e == "function")
      return e(this);
    let n = e.replace(/ /g, "").split(","), r = n.length, o, a;
    for (o = 0; o < r; o++)
      if (a = n[o], Ce.Util.isValidSelector(a) || (Ce.Util.warn('Selector "' + a + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), Ce.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), Ce.Util.warn("Konva is awesome, right?")), a.charAt(0) === "#") {
        if (this.id() === a.slice(1))
          return !0;
      } else if (a.charAt(0) === ".") {
        if (this.hasName(a.slice(1)))
          return !0;
      } else if (this.className === a || this.nodeType === a)
        return !0;
    return !1;
  }
  getLayer() {
    const e = this.getParent();
    return e ? e.getLayer() : null;
  }
  getStage() {
    return this._getCache(O2, this._getStage);
  }
  _getStage() {
    const e = this.getParent();
    return e ? e.getStage() : null;
  }
  fire(e, n = {}, r) {
    return n.target = n.target || this, r ? this._fireAndBubble(e, n) : this._fire(e, n), this;
  }
  getAbsoluteTransform(e) {
    return e ? this._getAbsoluteTransform(e) : this._getCache(kr, this._getAbsoluteTransform);
  }
  _getAbsoluteTransform(e) {
    let n;
    if (e)
      return n = new Ce.Transform(), this._eachAncestorReverse(function(r) {
        const o = r.transformsEnabled();
        o === "all" ? n.multiply(r.getTransform()) : o === "position" && n.translate(r.x() - r.offsetX(), r.y() - r.offsetY());
      }, e), n;
    {
      n = this._cache.get(kr) || new Ce.Transform(), this.parent ? this.parent.getAbsoluteTransform().copyInto(n) : n.reset();
      const r = this.transformsEnabled();
      if (r === "all")
        n.multiply(this.getTransform());
      else if (r === "position") {
        const o = this.attrs.x || 0, a = this.attrs.y || 0, l = this.attrs.offsetX || 0, c = this.attrs.offsetY || 0;
        n.translate(o - l, a - c);
      }
      return n.dirty = !1, n;
    }
  }
  getAbsoluteScale(e) {
    let n = this;
    for (; n; )
      n._isUnderCache && (e = n), n = n.getParent();
    const o = this.getAbsoluteTransform(e).decompose();
    return {
      x: o.scaleX,
      y: o.scaleY
    };
  }
  getAbsoluteRotation() {
    return this.getAbsoluteTransform().decompose().rotation;
  }
  getTransform() {
    return this._getCache(ri, this._getTransform);
  }
  _getTransform() {
    var e, n;
    const r = this._cache.get(ri) || new Ce.Transform();
    r.reset();
    const o = this.x(), a = this.y(), l = ni.Konva.getAngle(this.rotation()), c = (e = this.attrs.scaleX) !== null && e !== void 0 ? e : 1, h = (n = this.attrs.scaleY) !== null && n !== void 0 ? n : 1, d = this.attrs.skewX || 0, m = this.attrs.skewY || 0, S = this.attrs.offsetX || 0, y = this.attrs.offsetY || 0;
    return (o !== 0 || a !== 0) && r.translate(o, a), l !== 0 && r.rotate(l), (d !== 0 || m !== 0) && r.skew(d, m), (c !== 1 || h !== 1) && r.scale(c, h), (S !== 0 || y !== 0) && r.translate(-1 * S, -1 * y), r.dirty = !1, r;
  }
  clone(e) {
    let n = Ce.Util.cloneObject(this.attrs), r, o, a, l, c;
    for (r in e)
      n[r] = e[r];
    const h = new this.constructor(n);
    for (r in this.eventListeners)
      for (o = this.eventListeners[r], a = o.length, l = 0; l < a; l++)
        c = o[l], c.name.indexOf(QS) < 0 && (h.eventListeners[r] || (h.eventListeners[r] = []), h.eventListeners[r].push(c));
    return h;
  }
  _toKonvaCanvas(e) {
    e = e || {};
    const n = this.getClientRect(), r = this.getStage(), o = e.x !== void 0 ? e.x : Math.floor(n.x), a = e.y !== void 0 ? e.y : Math.floor(n.y), l = e.pixelRatio || 1, c = new qs.SceneCanvas({
      width: e.width || Math.ceil(n.width) || (r ? r.width() : 0),
      height: e.height || Math.ceil(n.height) || (r ? r.height() : 0),
      pixelRatio: l
    }), h = c.getContext(), d = new qs.SceneCanvas({
      width: c.width / c.pixelRatio + Math.abs(o),
      height: c.height / c.pixelRatio + Math.abs(a),
      pixelRatio: c.pixelRatio
    });
    return e.imageSmoothingEnabled === !1 && (h._context.imageSmoothingEnabled = !1), h.save(), (o || a) && h.translate(-1 * o, -1 * a), this.drawScene(c, void 0, d), h.restore(), c;
  }
  toCanvas(e) {
    return this._toKonvaCanvas(e)._canvas;
  }
  toDataURL(e) {
    e = e || {};
    const n = e.mimeType || null, r = e.quality || null, o = this._toKonvaCanvas(e).toDataURL(n, r);
    return e.callback && e.callback(o), o;
  }
  toImage(e) {
    return new Promise((n, r) => {
      try {
        const o = e == null ? void 0 : e.callback;
        o && delete e.callback, Ce.Util._urlToImage(this.toDataURL(e), function(a) {
          n(a), o == null || o(a);
        });
      } catch (o) {
        r(o);
      }
    });
  }
  toBlob(e) {
    return new Promise((n, r) => {
      try {
        const o = e == null ? void 0 : e.callback;
        o && delete e.callback, this.toCanvas(e).toBlob((a) => {
          n(a), o == null || o(a);
        }, e == null ? void 0 : e.mimeType, e == null ? void 0 : e.quality);
      } catch (o) {
        r(o);
      }
    });
  }
  setSize(e) {
    return this.width(e.width), this.height(e.height), this;
  }
  getSize() {
    return {
      width: this.width(),
      height: this.height()
    };
  }
  getClassName() {
    return this.className || this.nodeType;
  }
  getType() {
    return this.nodeType;
  }
  getDragDistance() {
    return this.attrs.dragDistance !== void 0 ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : ni.Konva.dragDistance;
  }
  _off(e, n, r) {
    let o = this.eventListeners[e], a, l, c;
    for (a = 0; a < o.length; a++)
      if (l = o[a].name, c = o[a].handler, (l !== "konva" || n === "konva") && (!n || l === n) && (!r || r === c)) {
        if (o.splice(a, 1), o.length === 0) {
          delete this.eventListeners[e];
          break;
        }
        a--;
      }
  }
  _fireChangeEvent(e, n, r) {
    this._fire(e + KS, {
      oldVal: n,
      newVal: r
    });
  }
  addName(e) {
    if (!this.hasName(e)) {
      const n = this.name(), r = n ? n + " " + e : e;
      this.name(r);
    }
    return this;
  }
  hasName(e) {
    if (!e)
      return !1;
    const n = this.name();
    return n ? (n || "").split(/\s/g).indexOf(e) !== -1 : !1;
  }
  removeName(e) {
    const n = (this.name() || "").split(/\s/g), r = n.indexOf(e);
    return r !== -1 && (n.splice(r, 1), this.name(n.join(" "))), this;
  }
  setAttr(e, n) {
    const r = this[F2 + Ce.Util._capitalize(e)];
    return Ce.Util._isFunction(r) ? r.call(this, n) : this._setAttr(e, n), this;
  }
  _requestDraw() {
    if (ni.Konva.autoDrawEnabled) {
      const e = this.getLayer() || this.getStage();
      e == null || e.batchDraw();
    }
  }
  _setAttr(e, n) {
    const r = this.attrs[e];
    r === n && !Ce.Util.isObject(n) || (n == null ? delete this.attrs[e] : this.attrs[e] = n, this._shouldFireChangeEvents && this._fireChangeEvent(e, r, n), this._requestDraw());
  }
  _setComponentAttr(e, n, r) {
    let o;
    r !== void 0 && (o = this.attrs[e], o || (this.attrs[e] = this.getAttr(e)), this.attrs[e][n] = r, this._fireChangeEvent(e, o, r));
  }
  _fireAndBubble(e, n, r) {
    if (n && this.nodeType === I2 && (n.target = this), !((e === M2 || e === L2) && (r && (this === r || this.isAncestorOf && this.isAncestorOf(r)) || this.nodeType === "Stage" && !r))) {
      this._fire(e, n);
      const a = (e === M2 || e === L2) && r && r.isAncestorOf && r.isAncestorOf(this) && !r.isAncestorOf(this.parent);
      (n && !n.cancelBubble || !n) && this.parent && this.parent.isListening() && !a && (r && r.parent ? this._fireAndBubble.call(this.parent, e, n, r) : this._fireAndBubble.call(this.parent, e, n));
    }
  }
  _getProtoListeners(e) {
    var n, r, o;
    const a = (n = this._cache.get(cu)) !== null && n !== void 0 ? n : {};
    let l = a == null ? void 0 : a[e];
    if (l === void 0) {
      l = [];
      let c = Object.getPrototypeOf(this);
      for (; c; ) {
        const h = (o = (r = c.eventListeners) === null || r === void 0 ? void 0 : r[e]) !== null && o !== void 0 ? o : [];
        l.push(...h), c = Object.getPrototypeOf(c);
      }
      a[e] = l, this._cache.set(cu, a);
    }
    return l;
  }
  _fire(e, n) {
    n = n || {}, n.currentTarget = this, n.type = e;
    const r = this._getProtoListeners(e);
    if (r)
      for (var o = 0; o < r.length; o++)
        r[o].handler.call(this, n);
    const a = this.eventListeners[e];
    if (a)
      for (var o = 0; o < a.length; o++)
        a[o].handler.call(this, n);
  }
  draw() {
    return this.drawScene(), this.drawHit(), this;
  }
  _createDragElement(e) {
    const n = e ? e.pointerId : void 0, r = this.getStage(), o = this.getAbsolutePosition();
    if (!r)
      return;
    const a = r._getPointerById(n) || r._changedPointerPositions[0] || o;
    Tn.DD._dragElements.set(this._id, {
      node: this,
      startPointerPos: a,
      offset: {
        x: a.x - o.x,
        y: a.y - o.y
      },
      dragStatus: "ready",
      pointerId: n
    });
  }
  startDrag(e, n = !0) {
    Tn.DD._dragElements.has(this._id) || this._createDragElement(e);
    const r = Tn.DD._dragElements.get(this._id);
    r.dragStatus = "dragging", this.fire("dragstart", {
      type: "dragstart",
      target: this,
      evt: e && e.evt
    }, n);
  }
  _setDragPosition(e, n) {
    const r = this.getStage()._getPointerById(n.pointerId);
    if (!r)
      return;
    let o = {
      x: r.x - n.offset.x,
      y: r.y - n.offset.y
    };
    const a = this.dragBoundFunc();
    if (a !== void 0) {
      const l = a.call(this, o, e);
      l ? o = l : Ce.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
    }
    (!this._lastPos || this._lastPos.x !== o.x || this._lastPos.y !== o.y) && (this.setAbsolutePosition(o), this._requestDraw()), this._lastPos = o;
  }
  stopDrag(e) {
    const n = Tn.DD._dragElements.get(this._id);
    n && (n.dragStatus = "stopped"), Tn.DD._endDragBefore(e), Tn.DD._endDragAfter(e);
  }
  setDraggable(e) {
    this._setAttr("draggable", e), this._dragChange();
  }
  isDragging() {
    const e = Tn.DD._dragElements.get(this._id);
    return e ? e.dragStatus === "dragging" : !1;
  }
  _listenDrag() {
    this._dragCleanup(), this.on("mousedown.konva touchstart.konva", function(e) {
      if (!(!(e.evt.button !== void 0) || ni.Konva.dragButtons.indexOf(e.evt.button) >= 0) || this.isDragging())
        return;
      let o = !1;
      Tn.DD._dragElements.forEach((a) => {
        this.isAncestorOf(a.node) && (o = !0);
      }), o || this._createDragElement(e);
    });
  }
  _dragChange() {
    if (this.attrs.draggable)
      this._listenDrag();
    else {
      if (this._dragCleanup(), !this.getStage())
        return;
      const n = Tn.DD._dragElements.get(this._id), r = n && n.dragStatus === "dragging", o = n && n.dragStatus === "ready";
      r ? this.stopDrag() : o && Tn.DD._dragElements.delete(this._id);
    }
  }
  _dragCleanup() {
    this.off("mousedown.konva"), this.off("touchstart.konva");
  }
  isClientRectOnScreen(e = { x: 0, y: 0 }) {
    const n = this.getStage();
    if (!n)
      return !1;
    const r = {
      x: -e.x,
      y: -e.y,
      width: n.width() + 2 * e.x,
      height: n.height() + 2 * e.y
    };
    return Ce.Util.haveIntersection(r, this.getClientRect());
  }
  static create(e, n) {
    return Ce.Util._isString(e) && (e = JSON.parse(e)), this._createNode(e, n);
  }
  static _createNode(e, n) {
    let r = fe.prototype.getClassName.call(e), o = e.children, a, l, c;
    n && (e.attrs.container = n), ni.Konva[r] || (Ce.Util.warn('Can not find a node with class name "' + r + '". Fallback to "Shape".'), r = "Shape");
    const h = ni.Konva[r];
    if (a = new h(e.attrs), o)
      for (l = o.length, c = 0; c < l; c++)
        a.add(fe._createNode(o[c]));
    return a;
  }
}
Je.Node = fe;
fe.prototype.nodeType = "Node";
fe.prototype._attrsAffectingSize = [];
fe.prototype.eventListeners = {};
fe.prototype.on.call(fe.prototype, qS, function() {
  if (this._batchingTransformChange) {
    this._needClearTransformCache = !0;
    return;
  }
  this._clearCache(ri), this._clearSelfAndDescendantCache(kr);
});
fe.prototype.on.call(fe.prototype, "visibleChange.konva", function() {
  this._clearSelfAndDescendantCache(A0);
});
fe.prototype.on.call(fe.prototype, "listeningChange.konva", function() {
  this._clearSelfAndDescendantCache(R0);
});
fe.prototype.on.call(fe.prototype, "opacityChange.konva", function() {
  this._clearSelfAndDescendantCache(ku);
});
const Ge = Ka.Factory.addGetterSetter;
Ge(fe, "zIndex");
Ge(fe, "absolutePosition");
Ge(fe, "position");
Ge(fe, "x", 0, (0, ht.getNumberValidator)());
Ge(fe, "y", 0, (0, ht.getNumberValidator)());
Ge(fe, "globalCompositeOperation", "source-over", (0, ht.getStringValidator)());
Ge(fe, "opacity", 1, (0, ht.getNumberValidator)());
Ge(fe, "name", "", (0, ht.getStringValidator)());
Ge(fe, "id", "", (0, ht.getStringValidator)());
Ge(fe, "rotation", 0, (0, ht.getNumberValidator)());
Ka.Factory.addComponentsGetterSetter(fe, "scale", ["x", "y"]);
Ge(fe, "scaleX", 1, (0, ht.getNumberValidator)());
Ge(fe, "scaleY", 1, (0, ht.getNumberValidator)());
Ka.Factory.addComponentsGetterSetter(fe, "skew", ["x", "y"]);
Ge(fe, "skewX", 0, (0, ht.getNumberValidator)());
Ge(fe, "skewY", 0, (0, ht.getNumberValidator)());
Ka.Factory.addComponentsGetterSetter(fe, "offset", ["x", "y"]);
Ge(fe, "offsetX", 0, (0, ht.getNumberValidator)());
Ge(fe, "offsetY", 0, (0, ht.getNumberValidator)());
Ge(fe, "dragDistance", null, (0, ht.getNumberValidator)());
Ge(fe, "width", 0, (0, ht.getNumberValidator)());
Ge(fe, "height", 0, (0, ht.getNumberValidator)());
Ge(fe, "listening", !0, (0, ht.getBooleanValidator)());
Ge(fe, "preventDefault", !0, (0, ht.getBooleanValidator)());
Ge(fe, "filters", null, function(t) {
  return this._filterUpToDate = !1, t;
});
Ge(fe, "visible", !0, (0, ht.getBooleanValidator)());
Ge(fe, "transformsEnabled", "all", (0, ht.getStringValidator)());
Ge(fe, "size");
Ge(fe, "dragBoundFunc");
Ge(fe, "draggable", !1, (0, ht.getBooleanValidator)());
Ka.Factory.backCompat(fe, {
  rotateDeg: "rotate",
  setRotationDeg: "setRotation",
  getRotationDeg: "getRotation"
});
var ao = {};
Object.defineProperty(ao, "__esModule", { value: !0 });
ao.Container = void 0;
const gs = _e, md = Je, Dc = ue;
class lo extends md.Node {
  constructor() {
    super(...arguments), this.children = [];
  }
  getChildren(e) {
    if (!e)
      return this.children || [];
    const n = this.children || [], r = [];
    return n.forEach(function(o) {
      e(o) && r.push(o);
    }), r;
  }
  hasChildren() {
    return this.getChildren().length > 0;
  }
  removeChildren() {
    return this.getChildren().forEach((e) => {
      e.parent = null, e.index = 0, e.remove();
    }), this.children = [], this._requestDraw(), this;
  }
  destroyChildren() {
    return this.getChildren().forEach((e) => {
      e.parent = null, e.index = 0, e.destroy();
    }), this.children = [], this._requestDraw(), this;
  }
  add(...e) {
    if (e.length === 0)
      return this;
    if (e.length > 1) {
      for (let r = 0; r < e.length; r++)
        this.add(e[r]);
      return this;
    }
    const n = e[0];
    return n.getParent() ? (n.moveTo(this), this) : (this._validateAdd(n), n.index = this.getChildren().length, n.parent = this, n._clearCaches(), this.getChildren().push(n), this._fire("add", {
      child: n
    }), this._requestDraw(), this);
  }
  destroy() {
    return this.hasChildren() && this.destroyChildren(), super.destroy(), this;
  }
  find(e) {
    return this._generalFind(e, !1);
  }
  findOne(e) {
    const n = this._generalFind(e, !0);
    return n.length > 0 ? n[0] : void 0;
  }
  _generalFind(e, n) {
    const r = [];
    return this._descendants((o) => {
      const a = o._isMatch(e);
      return a && r.push(o), !!(a && n);
    }), r;
  }
  _descendants(e) {
    let n = !1;
    const r = this.getChildren();
    for (const o of r) {
      if (n = e(o), n)
        return !0;
      if (o.hasChildren() && (n = o._descendants(e), n))
        return !0;
    }
    return !1;
  }
  toObject() {
    const e = md.Node.prototype.toObject.call(this);
    return e.children = [], this.getChildren().forEach((n) => {
      e.children.push(n.toObject());
    }), e;
  }
  isAncestorOf(e) {
    let n = e.getParent();
    for (; n; ) {
      if (n._id === this._id)
        return !0;
      n = n.getParent();
    }
    return !1;
  }
  clone(e) {
    const n = md.Node.prototype.clone.call(this, e);
    return this.getChildren().forEach(function(r) {
      n.add(r.clone());
    }), n;
  }
  getAllIntersections(e) {
    const n = [];
    return this.find("Shape").forEach((r) => {
      r.isVisible() && r.intersects(e) && n.push(r);
    }), n;
  }
  _clearSelfAndDescendantCache(e) {
    var n;
    super._clearSelfAndDescendantCache(e), !this.isCached() && ((n = this.children) === null || n === void 0 || n.forEach(function(r) {
      r._clearSelfAndDescendantCache(e);
    }));
  }
  _setChildrenIndices() {
    var e;
    (e = this.children) === null || e === void 0 || e.forEach(function(n, r) {
      n.index = r;
    }), this._requestDraw();
  }
  drawScene(e, n, r) {
    const o = this.getLayer(), a = e || o && o.getCanvas(), l = a && a.getContext(), c = this._getCanvasCache(), h = c && c.scene, d = a && a.isCache;
    if (!this.isVisible() && !d)
      return this;
    if (h) {
      l.save();
      const m = this.getAbsoluteTransform(n).getMatrix();
      l.transform(m[0], m[1], m[2], m[3], m[4], m[5]), this._drawCachedSceneCanvas(l), l.restore();
    } else
      this._drawChildren("drawScene", a, n, r);
    return this;
  }
  drawHit(e, n) {
    if (!this.shouldDrawHit(n))
      return this;
    const r = this.getLayer(), o = e || r && r.hitCanvas, a = o && o.getContext(), l = this._getCanvasCache();
    if (l && l.hit) {
      a.save();
      const h = this.getAbsoluteTransform(n).getMatrix();
      a.transform(h[0], h[1], h[2], h[3], h[4], h[5]), this._drawCachedHitCanvas(a), a.restore();
    } else
      this._drawChildren("drawHit", o, n);
    return this;
  }
  _drawChildren(e, n, r, o) {
    var a;
    const l = n && n.getContext(), c = this.clipWidth(), h = this.clipHeight(), d = this.clipFunc(), m = typeof c == "number" && typeof h == "number" || d, S = r === this;
    if (m) {
      l.save();
      const _ = this.getAbsoluteTransform(r);
      let x = _.getMatrix();
      l.transform(x[0], x[1], x[2], x[3], x[4], x[5]), l.beginPath();
      let P;
      if (d)
        P = d.call(this, l, this);
      else {
        const R = this.clipX(), w = this.clipY();
        l.rect(R || 0, w || 0, c, h);
      }
      l.clip.apply(l, P), x = _.copy().invert().getMatrix(), l.transform(x[0], x[1], x[2], x[3], x[4], x[5]);
    }
    const y = !S && this.globalCompositeOperation() !== "source-over" && e === "drawScene";
    y && (l.save(), l._applyGlobalCompositeOperation(this)), (a = this.children) === null || a === void 0 || a.forEach(function(_) {
      _[e](n, r, o);
    }), y && l.restore(), m && l.restore();
  }
  getClientRect(e = {}) {
    var n;
    const r = e.skipTransform, o = e.relativeTo;
    let a, l, c, h, d = {
      x: 1 / 0,
      y: 1 / 0,
      width: 0,
      height: 0
    };
    const m = this;
    (n = this.children) === null || n === void 0 || n.forEach(function(_) {
      if (!_.visible())
        return;
      const x = _.getClientRect({
        relativeTo: m,
        skipShadow: e.skipShadow,
        skipStroke: e.skipStroke
      });
      x.width === 0 && x.height === 0 || (a === void 0 ? (a = x.x, l = x.y, c = x.x + x.width, h = x.y + x.height) : (a = Math.min(a, x.x), l = Math.min(l, x.y), c = Math.max(c, x.x + x.width), h = Math.max(h, x.y + x.height)));
    });
    const S = this.find("Shape");
    let y = !1;
    for (let _ = 0; _ < S.length; _++)
      if (S[_]._isVisible(this)) {
        y = !0;
        break;
      }
    return y && a !== void 0 ? d = {
      x: a,
      y: l,
      width: c - a,
      height: h - l
    } : d = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }, r ? d : this._transformedRect(d, o);
  }
}
ao.Container = lo;
gs.Factory.addComponentsGetterSetter(lo, "clip", [
  "x",
  "y",
  "width",
  "height"
]);
gs.Factory.addGetterSetter(lo, "clipX", void 0, (0, Dc.getNumberValidator)());
gs.Factory.addGetterSetter(lo, "clipY", void 0, (0, Dc.getNumberValidator)());
gs.Factory.addGetterSetter(lo, "clipWidth", void 0, (0, Dc.getNumberValidator)());
gs.Factory.addGetterSetter(lo, "clipHeight", void 0, (0, Dc.getNumberValidator)());
gs.Factory.addGetterSetter(lo, "clipFunc");
var E4 = {}, ki = {};
Object.defineProperty(ki, "__esModule", { value: !0 });
ki.getCapturedShape = ew;
ki.createEvent = Vp;
ki.hasPointerCapture = tw;
ki.setPointerCapture = nw;
ki.releaseCapture = P4;
const JS = ye, Oa = /* @__PURE__ */ new Map(), C4 = JS.Konva._global.PointerEvent !== void 0;
function ew(t) {
  return Oa.get(t);
}
function Vp(t) {
  return {
    evt: t,
    pointerId: t.pointerId
  };
}
function tw(t, e) {
  return Oa.get(t) === e;
}
function nw(t, e) {
  P4(t), e.getStage() && (Oa.set(t, e), C4 && e._fire("gotpointercapture", Vp(new PointerEvent("gotpointercapture"))));
}
function P4(t, e) {
  const n = Oa.get(t);
  if (!n)
    return;
  const r = n.getStage();
  r && r.content, Oa.delete(t), C4 && n._fire("lostpointercapture", Vp(new PointerEvent("lostpointercapture")));
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Stage = t.stages = void 0;
  const e = ot, n = _e, r = ao, o = ye, a = Qn, l = Oc, c = ye, h = ki, d = "Stage", m = "string", S = "px", y = "mouseout", _ = "mouseleave", x = "mouseover", P = "mouseenter", R = "mousemove", w = "mousedown", E = "mouseup", g = "pointermove", C = "pointerdown", T = "pointerup", M = "pointercancel", L = "lostpointercapture", A = "pointerout", B = "pointerleave", N = "pointerover", D = "pointerenter", z = "contextmenu", q = "touchstart", ce = "touchend", K = "touchmove", he = "touchcancel", de = "wheel", j = 5, re = [
    [P, "_pointerenter"],
    [w, "_pointerdown"],
    [R, "_pointermove"],
    [E, "_pointerup"],
    [_, "_pointerleave"],
    [q, "_pointerdown"],
    [K, "_pointermove"],
    [ce, "_pointerup"],
    [he, "_pointercancel"],
    [x, "_pointerover"],
    [de, "_wheel"],
    [z, "_contextmenu"],
    [C, "_pointerdown"],
    [g, "_pointermove"],
    [T, "_pointerup"],
    [M, "_pointercancel"],
    [L, "_lostpointercapture"]
  ], b = {
    mouse: {
      [A]: y,
      [B]: _,
      [N]: x,
      [D]: P,
      [g]: R,
      [C]: w,
      [T]: E,
      [M]: "mousecancel",
      pointerclick: "click",
      pointerdblclick: "dblclick"
    },
    touch: {
      [A]: "touchout",
      [B]: "touchleave",
      [N]: "touchover",
      [D]: "touchenter",
      [g]: K,
      [C]: q,
      [T]: ce,
      [M]: he,
      pointerclick: "tap",
      pointerdblclick: "dbltap"
    },
    pointer: {
      [A]: A,
      [B]: B,
      [N]: N,
      [D]: D,
      [g]: g,
      [C]: C,
      [T]: T,
      [M]: M,
      pointerclick: "pointerclick",
      pointerdblclick: "pointerdblclick"
    }
  }, $ = (Ve) => Ve.indexOf("pointer") >= 0 ? "pointer" : Ve.indexOf("touch") >= 0 ? "touch" : "mouse", ae = (Ve) => {
    const I = $(Ve);
    if (I === "pointer")
      return o.Konva.pointerEventsEnabled && b.pointer;
    if (I === "touch")
      return b.touch;
    if (I === "mouse")
      return b.mouse;
  };
  function we(Ve = {}) {
    return (Ve.clipFunc || Ve.clipWidth || Ve.clipHeight) && e.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups."), Ve;
  }
  const Ee = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
  t.stages = [];
  class ft extends r.Container {
    constructor(I) {
      super(we(I)), this._pointerPositions = [], this._changedPointerPositions = [], this._buildDOM(), this._bindContentEvents(), t.stages.push(this), this.on("widthChange.konva heightChange.konva", this._resizeDOM), this.on("visibleChange.konva", this._checkVisibility), this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
        we(this.attrs);
      }), this._checkVisibility();
    }
    _validateAdd(I) {
      const V = I.getType() === "Layer", ie = I.getType() === "FastLayer";
      V || ie || e.Util.throw("You may only add layers to the stage.");
    }
    _checkVisibility() {
      if (!this.content)
        return;
      const I = this.visible() ? "" : "none";
      this.content.style.display = I;
    }
    setContainer(I) {
      if (typeof I === m) {
        if (I.charAt(0) === ".") {
          const ie = I.slice(1);
          I = document.getElementsByClassName(ie)[0];
        } else {
          var V;
          I.charAt(0) !== "#" ? V = I : V = I.slice(1), I = document.getElementById(V);
        }
        if (!I)
          throw "Can not find container in document with id " + V;
      }
      return this._setAttr("container", I), this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), I.appendChild(this.content)), this;
    }
    shouldDrawHit() {
      return !0;
    }
    clear() {
      let I = this.children, V = I.length, ie;
      for (ie = 0; ie < V; ie++)
        I[ie].clear();
      return this;
    }
    clone(I) {
      return I || (I = {}), I.container = typeof document < "u" && document.createElement("div"), r.Container.prototype.clone.call(this, I);
    }
    destroy() {
      super.destroy();
      const I = this.content;
      I && e.Util._isInDocument(I) && this.container().removeChild(I);
      const V = t.stages.indexOf(this);
      return V > -1 && t.stages.splice(V, 1), e.Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas), this;
    }
    getPointerPosition() {
      const I = this._pointerPositions[0] || this._changedPointerPositions[0];
      return I ? {
        x: I.x,
        y: I.y
      } : (e.Util.warn(Ee), null);
    }
    _getPointerById(I) {
      return this._pointerPositions.find((V) => V.id === I);
    }
    getPointersPositions() {
      return this._pointerPositions;
    }
    getStage() {
      return this;
    }
    getContent() {
      return this.content;
    }
    _toKonvaCanvas(I) {
      I = I || {}, I.x = I.x || 0, I.y = I.y || 0, I.width = I.width || this.width(), I.height = I.height || this.height();
      const V = new a.SceneCanvas({
        width: I.width,
        height: I.height,
        pixelRatio: I.pixelRatio || 1
      }), ie = V.getContext()._context, Fe = this.children;
      return (I.x || I.y) && ie.translate(-1 * I.x, -1 * I.y), Fe.forEach(function(me) {
        if (!me.isVisible())
          return;
        const He = me._toKonvaCanvas(I);
        ie.drawImage(He._canvas, I.x, I.y, He.getWidth() / He.getPixelRatio(), He.getHeight() / He.getPixelRatio());
      }), V;
    }
    getIntersection(I) {
      if (!I)
        return null;
      let V = this.children, ie = V.length, Fe = ie - 1, me;
      for (me = Fe; me >= 0; me--) {
        const He = V[me].getIntersection(I);
        if (He)
          return He;
      }
      return null;
    }
    _resizeDOM() {
      const I = this.width(), V = this.height();
      this.content && (this.content.style.width = I + S, this.content.style.height = V + S), this.bufferCanvas.setSize(I, V), this.bufferHitCanvas.setSize(I, V), this.children.forEach((ie) => {
        ie.setSize({ width: I, height: V }), ie.draw();
      });
    }
    add(I, ...V) {
      if (arguments.length > 1) {
        for (let Fe = 0; Fe < arguments.length; Fe++)
          this.add(arguments[Fe]);
        return this;
      }
      super.add(I);
      const ie = this.children.length;
      return ie > j && e.Util.warn("The stage has " + ie + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), I.setSize({ width: this.width(), height: this.height() }), I.draw(), o.Konva.isBrowser && this.content.appendChild(I.canvas._canvas), this;
    }
    getParent() {
      return null;
    }
    getLayer() {
      return null;
    }
    hasPointerCapture(I) {
      return h.hasPointerCapture(I, this);
    }
    setPointerCapture(I) {
      h.setPointerCapture(I, this);
    }
    releaseCapture(I) {
      h.releaseCapture(I, this);
    }
    getLayers() {
      return this.children;
    }
    _bindContentEvents() {
      o.Konva.isBrowser && re.forEach(([I, V]) => {
        this.content.addEventListener(I, (ie) => {
          this[V](ie);
        }, { passive: !1 });
      });
    }
    _pointerenter(I) {
      this.setPointersPositions(I);
      const V = ae(I.type);
      V && this._fire(V.pointerenter, {
        evt: I,
        target: this,
        currentTarget: this
      });
    }
    _pointerover(I) {
      this.setPointersPositions(I);
      const V = ae(I.type);
      V && this._fire(V.pointerover, {
        evt: I,
        target: this,
        currentTarget: this
      });
    }
    _getTargetShape(I) {
      let V = this[I + "targetShape"];
      return V && !V.getStage() && (V = null), V;
    }
    _pointerleave(I) {
      const V = ae(I.type), ie = $(I.type);
      if (!V)
        return;
      this.setPointersPositions(I);
      const Fe = this._getTargetShape(ie), me = !(o.Konva.isDragging() || o.Konva.isTransforming()) || o.Konva.hitOnDragEnabled;
      Fe && me ? (Fe._fireAndBubble(V.pointerout, { evt: I }), Fe._fireAndBubble(V.pointerleave, { evt: I }), this._fire(V.pointerleave, {
        evt: I,
        target: this,
        currentTarget: this
      }), this[ie + "targetShape"] = null) : me && (this._fire(V.pointerleave, {
        evt: I,
        target: this,
        currentTarget: this
      }), this._fire(V.pointerout, {
        evt: I,
        target: this,
        currentTarget: this
      })), this.pointerPos = null, this._pointerPositions = [];
    }
    _pointerdown(I) {
      const V = ae(I.type), ie = $(I.type);
      if (!V)
        return;
      this.setPointersPositions(I);
      let Fe = !1;
      this._changedPointerPositions.forEach((me) => {
        const He = this.getIntersection(me);
        if (l.DD.justDragged = !1, o.Konva["_" + ie + "ListenClick"] = !0, !He || !He.isListening()) {
          this[ie + "ClickStartShape"] = void 0;
          return;
        }
        o.Konva.capturePointerEventsEnabled && He.setPointerCapture(me.id), this[ie + "ClickStartShape"] = He, He._fireAndBubble(V.pointerdown, {
          evt: I,
          pointerId: me.id
        }), Fe = !0;
        const je = I.type.indexOf("touch") >= 0;
        He.preventDefault() && I.cancelable && je && I.preventDefault();
      }), Fe || this._fire(V.pointerdown, {
        evt: I,
        target: this,
        currentTarget: this,
        pointerId: this._pointerPositions[0].id
      });
    }
    _pointermove(I) {
      const V = ae(I.type), ie = $(I.type);
      if (!V || (o.Konva.isDragging() && l.DD.node.preventDefault() && I.cancelable && I.preventDefault(), this.setPointersPositions(I), !(!(o.Konva.isDragging() || o.Konva.isTransforming()) || o.Konva.hitOnDragEnabled)))
        return;
      const me = {};
      let He = !1;
      const je = this._getTargetShape(ie);
      this._changedPointerPositions.forEach((Zn) => {
        const Be = h.getCapturedShape(Zn.id) || this.getIntersection(Zn), Vr = Zn.id, On = { evt: I, pointerId: Vr }, jr = je !== Be;
        if (jr && je && (je._fireAndBubble(V.pointerout, { ...On }, Be), je._fireAndBubble(V.pointerleave, { ...On }, Be)), Be) {
          if (me[Be._id])
            return;
          me[Be._id] = !0;
        }
        Be && Be.isListening() ? (He = !0, jr && (Be._fireAndBubble(V.pointerover, { ...On }, je), Be._fireAndBubble(V.pointerenter, { ...On }, je), this[ie + "targetShape"] = Be), Be._fireAndBubble(V.pointermove, { ...On })) : je && (this._fire(V.pointerover, {
          evt: I,
          target: this,
          currentTarget: this,
          pointerId: Vr
        }), this[ie + "targetShape"] = null);
      }), He || this._fire(V.pointermove, {
        evt: I,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      });
    }
    _pointerup(I) {
      const V = ae(I.type), ie = $(I.type);
      if (!V)
        return;
      this.setPointersPositions(I);
      const Fe = this[ie + "ClickStartShape"], me = this[ie + "ClickEndShape"], He = {};
      let je = !1;
      this._changedPointerPositions.forEach((Zn) => {
        const Be = h.getCapturedShape(Zn.id) || this.getIntersection(Zn);
        if (Be) {
          if (Be.releaseCapture(Zn.id), He[Be._id])
            return;
          He[Be._id] = !0;
        }
        const Vr = Zn.id, On = { evt: I, pointerId: Vr };
        let jr = !1;
        o.Konva["_" + ie + "InDblClickWindow"] ? (jr = !0, clearTimeout(this[ie + "DblTimeout"])) : l.DD.justDragged || (o.Konva["_" + ie + "InDblClickWindow"] = !0, clearTimeout(this[ie + "DblTimeout"])), this[ie + "DblTimeout"] = setTimeout(function() {
          o.Konva["_" + ie + "InDblClickWindow"] = !1;
        }, o.Konva.dblClickWindow), Be && Be.isListening() ? (je = !0, this[ie + "ClickEndShape"] = Be, Be._fireAndBubble(V.pointerup, { ...On }), o.Konva["_" + ie + "ListenClick"] && Fe && Fe === Be && (Be._fireAndBubble(V.pointerclick, { ...On }), jr && me && me === Be && Be._fireAndBubble(V.pointerdblclick, { ...On }))) : (this[ie + "ClickEndShape"] = null, o.Konva["_" + ie + "ListenClick"] && this._fire(V.pointerclick, {
          evt: I,
          target: this,
          currentTarget: this,
          pointerId: Vr
        }), jr && this._fire(V.pointerdblclick, {
          evt: I,
          target: this,
          currentTarget: this,
          pointerId: Vr
        }));
      }), je || this._fire(V.pointerup, {
        evt: I,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      }), o.Konva["_" + ie + "ListenClick"] = !1, I.cancelable && ie !== "touch" && I.preventDefault();
    }
    _contextmenu(I) {
      this.setPointersPositions(I);
      const V = this.getIntersection(this.getPointerPosition());
      V && V.isListening() ? V._fireAndBubble(z, { evt: I }) : this._fire(z, {
        evt: I,
        target: this,
        currentTarget: this
      });
    }
    _wheel(I) {
      this.setPointersPositions(I);
      const V = this.getIntersection(this.getPointerPosition());
      V && V.isListening() ? V._fireAndBubble(de, { evt: I }) : this._fire(de, {
        evt: I,
        target: this,
        currentTarget: this
      });
    }
    _pointercancel(I) {
      this.setPointersPositions(I);
      const V = h.getCapturedShape(I.pointerId) || this.getIntersection(this.getPointerPosition());
      V && V._fireAndBubble(T, h.createEvent(I)), h.releaseCapture(I.pointerId);
    }
    _lostpointercapture(I) {
      h.releaseCapture(I.pointerId);
    }
    setPointersPositions(I) {
      let V = this._getContentPosition(), ie = null, Fe = null;
      I = I || window.event, I.touches !== void 0 ? (this._pointerPositions = [], this._changedPointerPositions = [], Array.prototype.forEach.call(I.touches, (me) => {
        this._pointerPositions.push({
          id: me.identifier,
          x: (me.clientX - V.left) / V.scaleX,
          y: (me.clientY - V.top) / V.scaleY
        });
      }), Array.prototype.forEach.call(I.changedTouches || I.touches, (me) => {
        this._changedPointerPositions.push({
          id: me.identifier,
          x: (me.clientX - V.left) / V.scaleX,
          y: (me.clientY - V.top) / V.scaleY
        });
      })) : (ie = (I.clientX - V.left) / V.scaleX, Fe = (I.clientY - V.top) / V.scaleY, this.pointerPos = {
        x: ie,
        y: Fe
      }, this._pointerPositions = [{ x: ie, y: Fe, id: e.Util._getFirstPointerId(I) }], this._changedPointerPositions = [
        { x: ie, y: Fe, id: e.Util._getFirstPointerId(I) }
      ]);
    }
    _setPointerPosition(I) {
      e.Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'), this.setPointersPositions(I);
    }
    _getContentPosition() {
      if (!this.content || !this.content.getBoundingClientRect)
        return {
          top: 0,
          left: 0,
          scaleX: 1,
          scaleY: 1
        };
      const I = this.content.getBoundingClientRect();
      return {
        top: I.top,
        left: I.left,
        scaleX: I.width / this.content.clientWidth || 1,
        scaleY: I.height / this.content.clientHeight || 1
      };
    }
    _buildDOM() {
      if (this.bufferCanvas = new a.SceneCanvas({
        width: this.width(),
        height: this.height()
      }), this.bufferHitCanvas = new a.HitCanvas({
        pixelRatio: 1,
        width: this.width(),
        height: this.height()
      }), !o.Konva.isBrowser)
        return;
      const I = this.container();
      if (!I)
        throw "Stage has no container. A container is required.";
      I.innerHTML = "", this.content = document.createElement("div"), this.content.style.position = "relative", this.content.style.userSelect = "none", this.content.className = "konvajs-content", this.content.setAttribute("role", "presentation"), I.appendChild(this.content), this._resizeDOM();
    }
    cache() {
      return e.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."), this;
    }
    clearCache() {
      return this;
    }
    batchDraw() {
      return this.getChildren().forEach(function(I) {
        I.batchDraw();
      }), this;
    }
  }
  t.Stage = ft, ft.prototype.nodeType = d, (0, c._registerNode)(ft), n.Factory.addGetterSetter(ft, "container"), o.Konva.isBrowser && document.addEventListener("visibilitychange", () => {
    t.stages.forEach((Ve) => {
      Ve.batchDraw();
    });
  });
})(E4);
var Ya = {}, wt = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Shape = t.shapes = void 0;
  const e = ye, n = ot, r = _e, o = Je, a = ue, l = ye, c = ki, h = "hasShadow", d = "shadowRGBA", m = "patternImage", S = "linearGradient", y = "radialGradient";
  let _;
  function x() {
    return _ || (_ = n.Util.createCanvasElement().getContext("2d"), _);
  }
  t.shapes = {};
  function P(B) {
    const N = this.attrs.fillRule;
    N ? B.fill(N) : B.fill();
  }
  function R(B) {
    B.stroke();
  }
  function w(B) {
    const N = this.attrs.fillRule;
    N ? B.fill(N) : B.fill();
  }
  function E(B) {
    B.stroke();
  }
  function g() {
    this._clearCache(h);
  }
  function C() {
    this._clearCache(d);
  }
  function T() {
    this._clearCache(m);
  }
  function M() {
    this._clearCache(S);
  }
  function L() {
    this._clearCache(y);
  }
  class A extends o.Node {
    constructor(N) {
      super(N);
      let D;
      for (; D = n.Util.getRandomColor(), !(D && !(D in t.shapes)); )
        ;
      this.colorKey = D, t.shapes[D] = this;
    }
    getContext() {
      return n.Util.warn("shape.getContext() method is deprecated. Please do not use it."), this.getLayer().getContext();
    }
    getCanvas() {
      return n.Util.warn("shape.getCanvas() method is deprecated. Please do not use it."), this.getLayer().getCanvas();
    }
    getSceneFunc() {
      return this.attrs.sceneFunc || this._sceneFunc;
    }
    getHitFunc() {
      return this.attrs.hitFunc || this._hitFunc;
    }
    hasShadow() {
      return this._getCache(h, this._hasShadow);
    }
    _hasShadow() {
      return this.shadowEnabled() && this.shadowOpacity() !== 0 && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY());
    }
    _getFillPattern() {
      return this._getCache(m, this.__getFillPattern);
    }
    __getFillPattern() {
      if (this.fillPatternImage()) {
        const D = x().createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
        if (D && D.setTransform) {
          const z = new n.Transform();
          z.translate(this.fillPatternX(), this.fillPatternY()), z.rotate(e.Konva.getAngle(this.fillPatternRotation())), z.scale(this.fillPatternScaleX(), this.fillPatternScaleY()), z.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
          const q = z.getMatrix(), ce = typeof DOMMatrix > "u" ? {
            a: q[0],
            b: q[1],
            c: q[2],
            d: q[3],
            e: q[4],
            f: q[5]
          } : new DOMMatrix(q);
          D.setTransform(ce);
        }
        return D;
      }
    }
    _getLinearGradient() {
      return this._getCache(S, this.__getLinearGradient);
    }
    __getLinearGradient() {
      const N = this.fillLinearGradientColorStops();
      if (N) {
        const D = x(), z = this.fillLinearGradientStartPoint(), q = this.fillLinearGradientEndPoint(), ce = D.createLinearGradient(z.x, z.y, q.x, q.y);
        for (let K = 0; K < N.length; K += 2)
          ce.addColorStop(N[K], N[K + 1]);
        return ce;
      }
    }
    _getRadialGradient() {
      return this._getCache(y, this.__getRadialGradient);
    }
    __getRadialGradient() {
      const N = this.fillRadialGradientColorStops();
      if (N) {
        const D = x(), z = this.fillRadialGradientStartPoint(), q = this.fillRadialGradientEndPoint(), ce = D.createRadialGradient(z.x, z.y, this.fillRadialGradientStartRadius(), q.x, q.y, this.fillRadialGradientEndRadius());
        for (let K = 0; K < N.length; K += 2)
          ce.addColorStop(N[K], N[K + 1]);
        return ce;
      }
    }
    getShadowRGBA() {
      return this._getCache(d, this._getShadowRGBA);
    }
    _getShadowRGBA() {
      if (!this.hasShadow())
        return;
      const N = n.Util.colorToRGBA(this.shadowColor());
      if (N)
        return "rgba(" + N.r + "," + N.g + "," + N.b + "," + N.a * (this.shadowOpacity() || 1) + ")";
    }
    hasFill() {
      return this._calculate("hasFill", [
        "fillEnabled",
        "fill",
        "fillPatternImage",
        "fillLinearGradientColorStops",
        "fillRadialGradientColorStops"
      ], () => this.fillEnabled() && !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops()));
    }
    hasStroke() {
      return this._calculate("hasStroke", [
        "strokeEnabled",
        "strokeWidth",
        "stroke",
        "strokeLinearGradientColorStops"
      ], () => this.strokeEnabled() && this.strokeWidth() && !!(this.stroke() || this.strokeLinearGradientColorStops()));
    }
    hasHitStroke() {
      const N = this.hitStrokeWidth();
      return N === "auto" ? this.hasStroke() : this.strokeEnabled() && !!N;
    }
    intersects(N) {
      const D = this.getStage();
      if (!D)
        return !1;
      const z = D.bufferHitCanvas;
      return z.getContext().clear(), this.drawHit(z, void 0, !0), z.context.getImageData(Math.round(N.x), Math.round(N.y), 1, 1).data[3] > 0;
    }
    destroy() {
      return o.Node.prototype.destroy.call(this), delete t.shapes[this.colorKey], delete this.colorKey, this;
    }
    _useBufferCanvas(N) {
      var D;
      if (!((D = this.attrs.perfectDrawEnabled) !== null && D !== void 0 ? D : !0))
        return !1;
      const q = N || this.hasFill(), ce = this.hasStroke(), K = this.getAbsoluteOpacity() !== 1;
      if (q && ce && K)
        return !0;
      const he = this.hasShadow(), de = this.shadowForStrokeEnabled();
      return !!(q && ce && he && de);
    }
    setStrokeHitEnabled(N) {
      n.Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."), N ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
    }
    getStrokeHitEnabled() {
      return this.hitStrokeWidth() !== 0;
    }
    getSelfRect() {
      const N = this.size();
      return {
        x: this._centroid ? -N.width / 2 : 0,
        y: this._centroid ? -N.height / 2 : 0,
        width: N.width,
        height: N.height
      };
    }
    getClientRect(N = {}) {
      let D = !1, z = this.getParent();
      for (; z; ) {
        if (z.isCached()) {
          D = !0;
          break;
        }
        z = z.getParent();
      }
      const q = N.skipTransform, ce = N.relativeTo || D && this.getStage() || void 0, K = this.getSelfRect(), de = !N.skipStroke && this.hasStroke() && this.strokeWidth() || 0, j = K.width + de, re = K.height + de, b = !N.skipShadow && this.hasShadow(), $ = b ? this.shadowOffsetX() : 0, ae = b ? this.shadowOffsetY() : 0, we = j + Math.abs($), Ee = re + Math.abs(ae), ft = b && this.shadowBlur() || 0, Ve = we + ft * 2, I = Ee + ft * 2, V = {
        width: Ve,
        height: I,
        x: -(de / 2 + ft) + Math.min($, 0) + K.x,
        y: -(de / 2 + ft) + Math.min(ae, 0) + K.y
      };
      return q ? V : this._transformedRect(V, ce);
    }
    drawScene(N, D, z) {
      const q = this.getLayer();
      let ce = N || q.getCanvas(), K = ce.getContext(), he = this._getCanvasCache(), de = this.getSceneFunc(), j = this.hasShadow(), re, b;
      const $ = ce.isCache, ae = D === this;
      if (!this.isVisible() && !ae)
        return this;
      if (he) {
        K.save();
        const Ee = this.getAbsoluteTransform(D).getMatrix();
        return K.transform(Ee[0], Ee[1], Ee[2], Ee[3], Ee[4], Ee[5]), this._drawCachedSceneCanvas(K), K.restore(), this;
      }
      if (!de)
        return this;
      if (K.save(), this._useBufferCanvas() && !$) {
        re = this.getStage();
        const Ee = z || re.bufferCanvas;
        b = Ee.getContext(), b.clear(), b.save(), b._applyLineJoin(this);
        var we = this.getAbsoluteTransform(D).getMatrix();
        b.transform(we[0], we[1], we[2], we[3], we[4], we[5]), de.call(this, b, this), b.restore();
        const ft = Ee.pixelRatio;
        j && K._applyShadow(this), K._applyOpacity(this), K._applyGlobalCompositeOperation(this), K.drawImage(Ee._canvas, 0, 0, Ee.width / ft, Ee.height / ft);
      } else {
        if (K._applyLineJoin(this), !ae) {
          var we = this.getAbsoluteTransform(D).getMatrix();
          K.transform(we[0], we[1], we[2], we[3], we[4], we[5]), K._applyOpacity(this), K._applyGlobalCompositeOperation(this);
        }
        j && K._applyShadow(this), de.call(this, K, this);
      }
      return K.restore(), this;
    }
    drawHit(N, D, z = !1) {
      if (!this.shouldDrawHit(D, z))
        return this;
      const q = this.getLayer(), ce = N || q.hitCanvas, K = ce && ce.getContext(), he = this.hitFunc() || this.sceneFunc(), de = this._getCanvasCache(), j = de && de.hit;
      if (this.colorKey || n.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"), j) {
        K.save();
        const b = this.getAbsoluteTransform(D).getMatrix();
        return K.transform(b[0], b[1], b[2], b[3], b[4], b[5]), this._drawCachedHitCanvas(K), K.restore(), this;
      }
      if (!he)
        return this;
      if (K.save(), K._applyLineJoin(this), !(this === D)) {
        const b = this.getAbsoluteTransform(D).getMatrix();
        K.transform(b[0], b[1], b[2], b[3], b[4], b[5]);
      }
      return he.call(this, K, this), K.restore(), this;
    }
    drawHitFromCache(N = 0) {
      let D = this._getCanvasCache(), z = this._getCachedSceneCanvas(), q = D.hit, ce = q.getContext(), K = q.getWidth(), he = q.getHeight(), de, j, re, b, $, ae;
      ce.clear(), ce.drawImage(z._canvas, 0, 0, K, he);
      try {
        for (de = ce.getImageData(0, 0, K, he), j = de.data, re = j.length, b = n.Util._hexToRgb(this.colorKey), $ = 0; $ < re; $ += 4)
          ae = j[$ + 3], ae > N ? (j[$] = b.r, j[$ + 1] = b.g, j[$ + 2] = b.b, j[$ + 3] = 255) : j[$ + 3] = 0;
        ce.putImageData(de, 0, 0);
      } catch (we) {
        n.Util.error("Unable to draw hit graph from cached scene canvas. " + we.message);
      }
      return this;
    }
    hasPointerCapture(N) {
      return c.hasPointerCapture(N, this);
    }
    setPointerCapture(N) {
      c.setPointerCapture(N, this);
    }
    releaseCapture(N) {
      c.releaseCapture(N, this);
    }
  }
  t.Shape = A, A.prototype._fillFunc = P, A.prototype._strokeFunc = R, A.prototype._fillFuncHit = w, A.prototype._strokeFuncHit = E, A.prototype._centroid = !1, A.prototype.nodeType = "Shape", (0, l._registerNode)(A), A.prototype.eventListeners = {}, A.prototype.on.call(A.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", g), A.prototype.on.call(A.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", C), A.prototype.on.call(A.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", T), A.prototype.on.call(A.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", M), A.prototype.on.call(A.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", L), r.Factory.addGetterSetter(A, "stroke", void 0, (0, a.getStringOrGradientValidator)()), r.Factory.addGetterSetter(A, "strokeWidth", 2, (0, a.getNumberValidator)()), r.Factory.addGetterSetter(A, "fillAfterStrokeEnabled", !1), r.Factory.addGetterSetter(A, "hitStrokeWidth", "auto", (0, a.getNumberOrAutoValidator)()), r.Factory.addGetterSetter(A, "strokeHitEnabled", !0, (0, a.getBooleanValidator)()), r.Factory.addGetterSetter(A, "perfectDrawEnabled", !0, (0, a.getBooleanValidator)()), r.Factory.addGetterSetter(A, "shadowForStrokeEnabled", !0, (0, a.getBooleanValidator)()), r.Factory.addGetterSetter(A, "lineJoin"), r.Factory.addGetterSetter(A, "lineCap"), r.Factory.addGetterSetter(A, "sceneFunc"), r.Factory.addGetterSetter(A, "hitFunc"), r.Factory.addGetterSetter(A, "dash"), r.Factory.addGetterSetter(A, "dashOffset", 0, (0, a.getNumberValidator)()), r.Factory.addGetterSetter(A, "shadowColor", void 0, (0, a.getStringValidator)()), r.Factory.addGetterSetter(A, "shadowBlur", 0, (0, a.getNumberValidator)()), r.Factory.addGetterSetter(A, "shadowOpacity", 1, (0, a.getNumberValidator)()), r.Factory.addComponentsGetterSetter(A, "shadowOffset", ["x", "y"]), r.Factory.addGetterSetter(A, "shadowOffsetX", 0, (0, a.getNumberValidator)()), r.Factory.addGetterSetter(A, "shadowOffsetY", 0, (0, a.getNumberValidator)()), r.Factory.addGetterSetter(A, "fillPatternImage"), r.Factory.addGetterSetter(A, "fill", void 0, (0, a.getStringOrGradientValidator)()), r.Factory.addGetterSetter(A, "fillPatternX", 0, (0, a.getNumberValidator)()), r.Factory.addGetterSetter(A, "fillPatternY", 0, (0, a.getNumberValidator)()), r.Factory.addGetterSetter(A, "fillLinearGradientColorStops"), r.Factory.addGetterSetter(A, "strokeLinearGradientColorStops"), r.Factory.addGetterSetter(A, "fillRadialGradientStartRadius", 0), r.Factory.addGetterSetter(A, "fillRadialGradientEndRadius", 0), r.Factory.addGetterSetter(A, "fillRadialGradientColorStops"), r.Factory.addGetterSetter(A, "fillPatternRepeat", "repeat"), r.Factory.addGetterSetter(A, "fillEnabled", !0), r.Factory.addGetterSetter(A, "strokeEnabled", !0), r.Factory.addGetterSetter(A, "shadowEnabled", !0), r.Factory.addGetterSetter(A, "dashEnabled", !0), r.Factory.addGetterSetter(A, "strokeScaleEnabled", !0), r.Factory.addGetterSetter(A, "fillPriority", "color"), r.Factory.addComponentsGetterSetter(A, "fillPatternOffset", ["x", "y"]), r.Factory.addGetterSetter(A, "fillPatternOffsetX", 0, (0, a.getNumberValidator)()), r.Factory.addGetterSetter(A, "fillPatternOffsetY", 0, (0, a.getNumberValidator)()), r.Factory.addComponentsGetterSetter(A, "fillPatternScale", ["x", "y"]), r.Factory.addGetterSetter(A, "fillPatternScaleX", 1, (0, a.getNumberValidator)()), r.Factory.addGetterSetter(A, "fillPatternScaleY", 1, (0, a.getNumberValidator)()), r.Factory.addComponentsGetterSetter(A, "fillLinearGradientStartPoint", [
    "x",
    "y"
  ]), r.Factory.addComponentsGetterSetter(A, "strokeLinearGradientStartPoint", [
    "x",
    "y"
  ]), r.Factory.addGetterSetter(A, "fillLinearGradientStartPointX", 0), r.Factory.addGetterSetter(A, "strokeLinearGradientStartPointX", 0), r.Factory.addGetterSetter(A, "fillLinearGradientStartPointY", 0), r.Factory.addGetterSetter(A, "strokeLinearGradientStartPointY", 0), r.Factory.addComponentsGetterSetter(A, "fillLinearGradientEndPoint", [
    "x",
    "y"
  ]), r.Factory.addComponentsGetterSetter(A, "strokeLinearGradientEndPoint", [
    "x",
    "y"
  ]), r.Factory.addGetterSetter(A, "fillLinearGradientEndPointX", 0), r.Factory.addGetterSetter(A, "strokeLinearGradientEndPointX", 0), r.Factory.addGetterSetter(A, "fillLinearGradientEndPointY", 0), r.Factory.addGetterSetter(A, "strokeLinearGradientEndPointY", 0), r.Factory.addComponentsGetterSetter(A, "fillRadialGradientStartPoint", [
    "x",
    "y"
  ]), r.Factory.addGetterSetter(A, "fillRadialGradientStartPointX", 0), r.Factory.addGetterSetter(A, "fillRadialGradientStartPointY", 0), r.Factory.addComponentsGetterSetter(A, "fillRadialGradientEndPoint", [
    "x",
    "y"
  ]), r.Factory.addGetterSetter(A, "fillRadialGradientEndPointX", 0), r.Factory.addGetterSetter(A, "fillRadialGradientEndPointY", 0), r.Factory.addGetterSetter(A, "fillPatternRotation", 0), r.Factory.addGetterSetter(A, "fillRule", void 0, (0, a.getStringValidator)()), r.Factory.backCompat(A, {
    dashArray: "dash",
    getDashArray: "getDash",
    setDashArray: "getDash",
    drawFunc: "sceneFunc",
    getDrawFunc: "getSceneFunc",
    setDrawFunc: "setSceneFunc",
    drawHitFunc: "hitFunc",
    getDrawHitFunc: "getHitFunc",
    setDrawHitFunc: "setHitFunc"
  });
})(wt);
Object.defineProperty(Ya, "__esModule", { value: !0 });
Ya.Layer = void 0;
const Tr = ot, vd = ao, Lo = Je, jp = _e, D2 = Qn, rw = ue, iw = wt, ow = ye, sw = "#", aw = "beforeDraw", lw = "draw", T4 = [
  { x: 0, y: 0 },
  { x: -1, y: -1 },
  { x: 1, y: -1 },
  { x: 1, y: 1 },
  { x: -1, y: 1 }
], uw = T4.length;
let ms = class extends vd.Container {
  constructor(e) {
    super(e), this.canvas = new D2.SceneCanvas(), this.hitCanvas = new D2.HitCanvas({
      pixelRatio: 1
    }), this._waitingForDraw = !1, this.on("visibleChange.konva", this._checkVisibility), this._checkVisibility(), this.on("imageSmoothingEnabledChange.konva", this._setSmoothEnabled), this._setSmoothEnabled();
  }
  createPNGStream() {
    return this.canvas._canvas.createPNGStream();
  }
  getCanvas() {
    return this.canvas;
  }
  getNativeCanvasElement() {
    return this.canvas._canvas;
  }
  getHitCanvas() {
    return this.hitCanvas;
  }
  getContext() {
    return this.getCanvas().getContext();
  }
  clear(e) {
    return this.getContext().clear(e), this.getHitCanvas().getContext().clear(e), this;
  }
  setZIndex(e) {
    super.setZIndex(e);
    const n = this.getStage();
    return n && n.content && (n.content.removeChild(this.getNativeCanvasElement()), e < n.children.length - 1 ? n.content.insertBefore(this.getNativeCanvasElement(), n.children[e + 1].getCanvas()._canvas) : n.content.appendChild(this.getNativeCanvasElement())), this;
  }
  moveToTop() {
    Lo.Node.prototype.moveToTop.call(this);
    const e = this.getStage();
    return e && e.content && (e.content.removeChild(this.getNativeCanvasElement()), e.content.appendChild(this.getNativeCanvasElement())), !0;
  }
  moveUp() {
    if (!Lo.Node.prototype.moveUp.call(this))
      return !1;
    const n = this.getStage();
    return !n || !n.content ? !1 : (n.content.removeChild(this.getNativeCanvasElement()), this.index < n.children.length - 1 ? n.content.insertBefore(this.getNativeCanvasElement(), n.children[this.index + 1].getCanvas()._canvas) : n.content.appendChild(this.getNativeCanvasElement()), !0);
  }
  moveDown() {
    if (Lo.Node.prototype.moveDown.call(this)) {
      const e = this.getStage();
      if (e) {
        const n = e.children;
        e.content && (e.content.removeChild(this.getNativeCanvasElement()), e.content.insertBefore(this.getNativeCanvasElement(), n[this.index + 1].getCanvas()._canvas));
      }
      return !0;
    }
    return !1;
  }
  moveToBottom() {
    if (Lo.Node.prototype.moveToBottom.call(this)) {
      const e = this.getStage();
      if (e) {
        const n = e.children;
        e.content && (e.content.removeChild(this.getNativeCanvasElement()), e.content.insertBefore(this.getNativeCanvasElement(), n[1].getCanvas()._canvas));
      }
      return !0;
    }
    return !1;
  }
  getLayer() {
    return this;
  }
  remove() {
    const e = this.getNativeCanvasElement();
    return Lo.Node.prototype.remove.call(this), e && e.parentNode && Tr.Util._isInDocument(e) && e.parentNode.removeChild(e), this;
  }
  getStage() {
    return this.parent;
  }
  setSize({ width: e, height: n }) {
    return this.canvas.setSize(e, n), this.hitCanvas.setSize(e, n), this._setSmoothEnabled(), this;
  }
  _validateAdd(e) {
    const n = e.getType();
    n !== "Group" && n !== "Shape" && Tr.Util.throw("You may only add groups and shapes to a layer.");
  }
  _toKonvaCanvas(e) {
    return e = e || {}, e.width = e.width || this.getWidth(), e.height = e.height || this.getHeight(), e.x = e.x !== void 0 ? e.x : this.x(), e.y = e.y !== void 0 ? e.y : this.y(), Lo.Node.prototype._toKonvaCanvas.call(this, e);
  }
  _checkVisibility() {
    this.visible() ? this.canvas._canvas.style.display = "block" : this.canvas._canvas.style.display = "none";
  }
  _setSmoothEnabled() {
    this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
  }
  getWidth() {
    if (this.parent)
      return this.parent.width();
  }
  setWidth() {
    Tr.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
  }
  getHeight() {
    if (this.parent)
      return this.parent.height();
  }
  setHeight() {
    Tr.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
  }
  batchDraw() {
    return this._waitingForDraw || (this._waitingForDraw = !0, Tr.Util.requestAnimFrame(() => {
      this.draw(), this._waitingForDraw = !1;
    })), this;
  }
  getIntersection(e) {
    if (!this.isListening() || !this.isVisible())
      return null;
    let n = 1, r = !1;
    for (; ; ) {
      for (let o = 0; o < uw; o++) {
        const a = T4[o], l = this._getIntersection({
          x: e.x + a.x * n,
          y: e.y + a.y * n
        }), c = l.shape;
        if (c)
          return c;
        if (r = !!l.antialiased, !l.antialiased)
          break;
      }
      if (r)
        n += 1;
      else
        return null;
    }
  }
  _getIntersection(e) {
    const n = this.hitCanvas.pixelRatio, r = this.hitCanvas.context.getImageData(Math.round(e.x * n), Math.round(e.y * n), 1, 1).data, o = r[3];
    if (o === 255) {
      const a = Tr.Util._rgbToHex(r[0], r[1], r[2]), l = iw.shapes[sw + a];
      return l ? {
        shape: l
      } : {
        antialiased: !0
      };
    } else if (o > 0)
      return {
        antialiased: !0
      };
    return {};
  }
  drawScene(e, n) {
    const r = this.getLayer(), o = e || r && r.getCanvas();
    return this._fire(aw, {
      node: this
    }), this.clearBeforeDraw() && o.getContext().clear(), vd.Container.prototype.drawScene.call(this, o, n), this._fire(lw, {
      node: this
    }), this;
  }
  drawHit(e, n) {
    const r = this.getLayer(), o = e || r && r.hitCanvas;
    return r && r.clearBeforeDraw() && r.getHitCanvas().getContext().clear(), vd.Container.prototype.drawHit.call(this, o, n), this;
  }
  enableHitGraph() {
    return this.hitGraphEnabled(!0), this;
  }
  disableHitGraph() {
    return this.hitGraphEnabled(!1), this;
  }
  setHitGraphEnabled(e) {
    Tr.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening(e);
  }
  getHitGraphEnabled(e) {
    return Tr.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening();
  }
  toggleHitCanvas() {
    if (!this.parent || !this.parent.content)
      return;
    const e = this.parent;
    !!this.hitCanvas._canvas.parentNode ? e.content.removeChild(this.hitCanvas._canvas) : e.content.appendChild(this.hitCanvas._canvas);
  }
  destroy() {
    return Tr.Util.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas), super.destroy();
  }
};
Ya.Layer = ms;
ms.prototype.nodeType = "Layer";
(0, ow._registerNode)(ms);
jp.Factory.addGetterSetter(ms, "imageSmoothingEnabled", !0);
jp.Factory.addGetterSetter(ms, "clearBeforeDraw", !0);
jp.Factory.addGetterSetter(ms, "hitGraphEnabled", !0, (0, rw.getBooleanValidator)());
var Bc = {};
Object.defineProperty(Bc, "__esModule", { value: !0 });
Bc.FastLayer = void 0;
const cw = ot, hw = Ya, fw = ye;
class Wp extends hw.Layer {
  constructor(e) {
    super(e), this.listening(!1), cw.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
  }
}
Bc.FastLayer = Wp;
Wp.prototype.nodeType = "FastLayer";
(0, fw._registerNode)(Wp);
var vs = {};
Object.defineProperty(vs, "__esModule", { value: !0 });
vs.Group = void 0;
const dw = ot, pw = ao, gw = ye;
class Xp extends pw.Container {
  _validateAdd(e) {
    const n = e.getType();
    n !== "Group" && n !== "Shape" && dw.Util.throw("You may only add groups and shapes to groups.");
  }
}
vs.Group = Xp;
Xp.prototype.nodeType = "Group";
(0, gw._registerNode)(Xp);
var ys = {};
Object.defineProperty(ys, "__esModule", { value: !0 });
ys.Animation = void 0;
const yd = ye, B2 = ot, _d = function() {
  return yd.glob.performance && yd.glob.performance.now ? function() {
    return yd.glob.performance.now();
  } : function() {
    return (/* @__PURE__ */ new Date()).getTime();
  };
}();
class dr {
  constructor(e, n) {
    this.id = dr.animIdCounter++, this.frame = {
      time: 0,
      timeDiff: 0,
      lastTime: _d(),
      frameRate: 0
    }, this.func = e, this.setLayers(n);
  }
  setLayers(e) {
    let n = [];
    return e && (n = Array.isArray(e) ? e : [e]), this.layers = n, this;
  }
  getLayers() {
    return this.layers;
  }
  addLayer(e) {
    const n = this.layers, r = n.length;
    for (let o = 0; o < r; o++)
      if (n[o]._id === e._id)
        return !1;
    return this.layers.push(e), !0;
  }
  isRunning() {
    const n = dr.animations, r = n.length;
    for (let o = 0; o < r; o++)
      if (n[o].id === this.id)
        return !0;
    return !1;
  }
  start() {
    return this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = _d(), dr._addAnimation(this), this;
  }
  stop() {
    return dr._removeAnimation(this), this;
  }
  _updateFrameObject(e) {
    this.frame.timeDiff = e - this.frame.lastTime, this.frame.lastTime = e, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff;
  }
  static _addAnimation(e) {
    this.animations.push(e), this._handleAnimation();
  }
  static _removeAnimation(e) {
    const n = e.id, r = this.animations, o = r.length;
    for (let a = 0; a < o; a++)
      if (r[a].id === n) {
        this.animations.splice(a, 1);
        break;
      }
  }
  static _runFrames() {
    const e = {}, n = this.animations;
    for (let r = 0; r < n.length; r++) {
      const o = n[r], a = o.layers, l = o.func;
      o._updateFrameObject(_d());
      const c = a.length;
      let h;
      if (l ? h = l.call(o, o.frame) !== !1 : h = !0, !!h)
        for (let d = 0; d < c; d++) {
          const m = a[d];
          m._id !== void 0 && (e[m._id] = m);
        }
    }
    for (const r in e)
      e.hasOwnProperty(r) && e[r].batchDraw();
  }
  static _animationLoop() {
    const e = dr;
    e.animations.length ? (e._runFrames(), B2.Util.requestAnimFrame(e._animationLoop)) : e.animRunning = !1;
  }
  static _handleAnimation() {
    this.animRunning || (this.animRunning = !0, B2.Util.requestAnimFrame(this._animationLoop));
  }
}
ys.Animation = dr;
dr.animations = [];
dr.animIdCounter = 0;
dr.animRunning = !1;
var k4 = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Easings = t.Tween = void 0;
  const e = ot, n = ys, r = Je, o = ye;
  let a = {
    node: 1,
    duration: 1,
    easing: 1,
    onFinish: 1,
    yoyo: 1
  }, l = 1, c = 2, h = 3, d = 0, m = ["fill", "stroke", "shadowColor"];
  class S {
    constructor(x, P, R, w, E, g, C) {
      this.prop = x, this.propFunc = P, this.begin = w, this._pos = w, this.duration = g, this._change = 0, this.prevPos = 0, this.yoyo = C, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = R, this._change = E - this.begin, this.pause();
    }
    fire(x) {
      const P = this[x];
      P && P();
    }
    setTime(x) {
      x > this.duration ? this.yoyo ? (this._time = this.duration, this.reverse()) : this.finish() : x < 0 ? this.yoyo ? (this._time = 0, this.play()) : this.reset() : (this._time = x, this.update());
    }
    getTime() {
      return this._time;
    }
    setPosition(x) {
      this.prevPos = this._pos, this.propFunc(x), this._pos = x;
    }
    getPosition(x) {
      return x === void 0 && (x = this._time), this.func(x, this.begin, this._change, this.duration);
    }
    play() {
      this.state = c, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onPlay");
    }
    reverse() {
      this.state = h, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse");
    }
    seek(x) {
      this.pause(), this._time = x, this.update(), this.fire("onSeek");
    }
    reset() {
      this.pause(), this._time = 0, this.update(), this.fire("onReset");
    }
    finish() {
      this.pause(), this._time = this.duration, this.update(), this.fire("onFinish");
    }
    update() {
      this.setPosition(this.getPosition(this._time)), this.fire("onUpdate");
    }
    onEnterFrame() {
      const x = this.getTimer() - this._startTime;
      this.state === c ? this.setTime(x) : this.state === h && this.setTime(this.duration - x);
    }
    pause() {
      this.state = l, this.fire("onPause");
    }
    getTimer() {
      return (/* @__PURE__ */ new Date()).getTime();
    }
  }
  class y {
    constructor(x) {
      let P = this, R = x.node, w = R._id, E, g = x.easing || t.Easings.Linear, C = !!x.yoyo, T;
      typeof x.duration > "u" ? E = 0.3 : x.duration === 0 ? E = 1e-3 : E = x.duration, this.node = R, this._id = d++;
      const M = R.getLayer() || (R instanceof o.Konva.Stage ? R.getLayers() : null);
      M || e.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."), this.anim = new n.Animation(function() {
        P.tween.onEnterFrame();
      }, M), this.tween = new S(T, function(L) {
        P._tweenFunc(L);
      }, g, 0, 1, E * 1e3, C), this._addListeners(), y.attrs[w] || (y.attrs[w] = {}), y.attrs[w][this._id] || (y.attrs[w][this._id] = {}), y.tweens[w] || (y.tweens[w] = {});
      for (T in x)
        a[T] === void 0 && this._addAttr(T, x[T]);
      this.reset(), this.onFinish = x.onFinish, this.onReset = x.onReset, this.onUpdate = x.onUpdate;
    }
    _addAttr(x, P) {
      let R = this.node, w = R._id, E, g, C, T, M, L, A, B;
      if (C = y.tweens[w][x], C && delete y.attrs[w][C][x], E = R.getAttr(x), e.Util._isArray(P))
        if (g = [], M = Math.max(P.length, E.length), x === "points" && P.length !== E.length && (P.length > E.length ? (A = E, E = e.Util._prepareArrayForTween(E, P, R.closed())) : (L = P, P = e.Util._prepareArrayForTween(P, E, R.closed()))), x.indexOf("fill") === 0)
          for (T = 0; T < M; T++)
            if (T % 2 === 0)
              g.push(P[T] - E[T]);
            else {
              const N = e.Util.colorToRGBA(E[T]);
              B = e.Util.colorToRGBA(P[T]), E[T] = N, g.push({
                r: B.r - N.r,
                g: B.g - N.g,
                b: B.b - N.b,
                a: B.a - N.a
              });
            }
        else
          for (T = 0; T < M; T++)
            g.push(P[T] - E[T]);
      else m.indexOf(x) !== -1 ? (E = e.Util.colorToRGBA(E), B = e.Util.colorToRGBA(P), g = {
        r: B.r - E.r,
        g: B.g - E.g,
        b: B.b - E.b,
        a: B.a - E.a
      }) : g = P - E;
      y.attrs[w][this._id][x] = {
        start: E,
        diff: g,
        end: P,
        trueEnd: L,
        trueStart: A
      }, y.tweens[w][x] = this._id;
    }
    _tweenFunc(x) {
      let P = this.node, R = y.attrs[P._id][this._id], w, E, g, C, T, M, L, A;
      for (w in R) {
        if (E = R[w], g = E.start, C = E.diff, A = E.end, e.Util._isArray(g))
          if (T = [], L = Math.max(g.length, A.length), w.indexOf("fill") === 0)
            for (M = 0; M < L; M++)
              M % 2 === 0 ? T.push((g[M] || 0) + C[M] * x) : T.push("rgba(" + Math.round(g[M].r + C[M].r * x) + "," + Math.round(g[M].g + C[M].g * x) + "," + Math.round(g[M].b + C[M].b * x) + "," + (g[M].a + C[M].a * x) + ")");
          else
            for (M = 0; M < L; M++)
              T.push((g[M] || 0) + C[M] * x);
        else m.indexOf(w) !== -1 ? T = "rgba(" + Math.round(g.r + C.r * x) + "," + Math.round(g.g + C.g * x) + "," + Math.round(g.b + C.b * x) + "," + (g.a + C.a * x) + ")" : T = g + C * x;
        P.setAttr(w, T);
      }
    }
    _addListeners() {
      this.tween.onPlay = () => {
        this.anim.start();
      }, this.tween.onReverse = () => {
        this.anim.start();
      }, this.tween.onPause = () => {
        this.anim.stop();
      }, this.tween.onFinish = () => {
        const x = this.node, P = y.attrs[x._id][this._id];
        P.points && P.points.trueEnd && x.setAttr("points", P.points.trueEnd), this.onFinish && this.onFinish.call(this);
      }, this.tween.onReset = () => {
        const x = this.node, P = y.attrs[x._id][this._id];
        P.points && P.points.trueStart && x.points(P.points.trueStart), this.onReset && this.onReset();
      }, this.tween.onUpdate = () => {
        this.onUpdate && this.onUpdate.call(this);
      };
    }
    play() {
      return this.tween.play(), this;
    }
    reverse() {
      return this.tween.reverse(), this;
    }
    reset() {
      return this.tween.reset(), this;
    }
    seek(x) {
      return this.tween.seek(x * 1e3), this;
    }
    pause() {
      return this.tween.pause(), this;
    }
    finish() {
      return this.tween.finish(), this;
    }
    destroy() {
      let x = this.node._id, P = this._id, R = y.tweens[x], w;
      this.pause();
      for (w in R)
        delete y.tweens[x][w];
      delete y.attrs[x][P];
    }
  }
  t.Tween = y, y.attrs = {}, y.tweens = {}, r.Node.prototype.to = function(_) {
    const x = _.onFinish;
    _.node = this, _.onFinish = function() {
      this.destroy(), x && x();
    }, new y(_).play();
  }, t.Easings = {
    BackEaseIn(_, x, P, R) {
      return P * (_ /= R) * _ * ((1.70158 + 1) * _ - 1.70158) + x;
    },
    BackEaseOut(_, x, P, R) {
      return P * ((_ = _ / R - 1) * _ * ((1.70158 + 1) * _ + 1.70158) + 1) + x;
    },
    BackEaseInOut(_, x, P, R) {
      let w = 1.70158;
      return (_ /= R / 2) < 1 ? P / 2 * (_ * _ * (((w *= 1.525) + 1) * _ - w)) + x : P / 2 * ((_ -= 2) * _ * (((w *= 1.525) + 1) * _ + w) + 2) + x;
    },
    ElasticEaseIn(_, x, P, R, w, E) {
      let g = 0;
      return _ === 0 ? x : (_ /= R) === 1 ? x + P : (E || (E = R * 0.3), !w || w < Math.abs(P) ? (w = P, g = E / 4) : g = E / (2 * Math.PI) * Math.asin(P / w), -(w * Math.pow(2, 10 * (_ -= 1)) * Math.sin((_ * R - g) * (2 * Math.PI) / E)) + x);
    },
    ElasticEaseOut(_, x, P, R, w, E) {
      let g = 0;
      return _ === 0 ? x : (_ /= R) === 1 ? x + P : (E || (E = R * 0.3), !w || w < Math.abs(P) ? (w = P, g = E / 4) : g = E / (2 * Math.PI) * Math.asin(P / w), w * Math.pow(2, -10 * _) * Math.sin((_ * R - g) * (2 * Math.PI) / E) + P + x);
    },
    ElasticEaseInOut(_, x, P, R, w, E) {
      let g = 0;
      return _ === 0 ? x : (_ /= R / 2) === 2 ? x + P : (E || (E = R * (0.3 * 1.5)), !w || w < Math.abs(P) ? (w = P, g = E / 4) : g = E / (2 * Math.PI) * Math.asin(P / w), _ < 1 ? -0.5 * (w * Math.pow(2, 10 * (_ -= 1)) * Math.sin((_ * R - g) * (2 * Math.PI) / E)) + x : w * Math.pow(2, -10 * (_ -= 1)) * Math.sin((_ * R - g) * (2 * Math.PI) / E) * 0.5 + P + x);
    },
    BounceEaseOut(_, x, P, R) {
      return (_ /= R) < 1 / 2.75 ? P * (7.5625 * _ * _) + x : _ < 2 / 2.75 ? P * (7.5625 * (_ -= 1.5 / 2.75) * _ + 0.75) + x : _ < 2.5 / 2.75 ? P * (7.5625 * (_ -= 2.25 / 2.75) * _ + 0.9375) + x : P * (7.5625 * (_ -= 2.625 / 2.75) * _ + 0.984375) + x;
    },
    BounceEaseIn(_, x, P, R) {
      return P - t.Easings.BounceEaseOut(R - _, 0, P, R) + x;
    },
    BounceEaseInOut(_, x, P, R) {
      return _ < R / 2 ? t.Easings.BounceEaseIn(_ * 2, 0, P, R) * 0.5 + x : t.Easings.BounceEaseOut(_ * 2 - R, 0, P, R) * 0.5 + P * 0.5 + x;
    },
    EaseIn(_, x, P, R) {
      return P * (_ /= R) * _ + x;
    },
    EaseOut(_, x, P, R) {
      return -P * (_ /= R) * (_ - 2) + x;
    },
    EaseInOut(_, x, P, R) {
      return (_ /= R / 2) < 1 ? P / 2 * _ * _ + x : -P / 2 * (--_ * (_ - 2) - 1) + x;
    },
    StrongEaseIn(_, x, P, R) {
      return P * (_ /= R) * _ * _ * _ * _ + x;
    },
    StrongEaseOut(_, x, P, R) {
      return P * ((_ = _ / R - 1) * _ * _ * _ * _ + 1) + x;
    },
    StrongEaseInOut(_, x, P, R) {
      return (_ /= R / 2) < 1 ? P / 2 * _ * _ * _ * _ * _ + x : P / 2 * ((_ -= 2) * _ * _ * _ * _ + 2) + x;
    },
    Linear(_, x, P, R) {
      return P * _ / R + x;
    }
  };
})(k4);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Konva = void 0;
  const e = ye, n = ot, r = Je, o = ao, a = E4, l = Ya, c = Bc, h = vs, d = Oc, m = wt, S = ys, y = k4, _ = Fr, x = Qn;
  t.Konva = n.Util._assign(e.Konva, {
    Util: n.Util,
    Transform: n.Transform,
    Node: r.Node,
    Container: o.Container,
    Stage: a.Stage,
    stages: a.stages,
    Layer: l.Layer,
    FastLayer: c.FastLayer,
    Group: h.Group,
    DD: d.DD,
    Shape: m.Shape,
    shapes: m.shapes,
    Animation: S.Animation,
    Tween: y.Tween,
    Easings: y.Easings,
    Context: _.Context,
    Canvas: x.Canvas
  }), t.default = t.Konva;
})(ec);
var Uc = {};
Object.defineProperty(Uc, "__esModule", { value: !0 });
Uc.Arc = void 0;
const Gc = _e, mw = wt, U2 = ye, Hc = ue, vw = ye;
class zr extends mw.Shape {
  _sceneFunc(e) {
    const n = U2.Konva.getAngle(this.angle()), r = this.clockwise();
    e.beginPath(), e.arc(0, 0, this.outerRadius(), 0, n, r), e.arc(0, 0, this.innerRadius(), n, 0, !r), e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(e) {
    this.outerRadius(e / 2);
  }
  setHeight(e) {
    this.outerRadius(e / 2);
  }
  getSelfRect() {
    const e = this.innerRadius(), n = this.outerRadius(), r = this.clockwise(), o = U2.Konva.getAngle(r ? 360 - this.angle() : this.angle()), a = Math.cos(Math.min(o, Math.PI)), l = 1, c = Math.sin(Math.min(Math.max(Math.PI, o), 3 * Math.PI / 2)), h = Math.sin(Math.min(o, Math.PI / 2)), d = a * (a > 0 ? e : n), m = l * n, S = c * (c > 0 ? e : n), y = h * (h > 0 ? n : e);
    return {
      x: d,
      y: r ? -1 * y : S,
      width: m - d,
      height: y - S
    };
  }
}
Uc.Arc = zr;
zr.prototype._centroid = !0;
zr.prototype.className = "Arc";
zr.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, vw._registerNode)(zr);
Gc.Factory.addGetterSetter(zr, "innerRadius", 0, (0, Hc.getNumberValidator)());
Gc.Factory.addGetterSetter(zr, "outerRadius", 0, (0, Hc.getNumberValidator)());
Gc.Factory.addGetterSetter(zr, "angle", 0, (0, Hc.getNumberValidator)());
Gc.Factory.addGetterSetter(zr, "clockwise", !1, (0, Hc.getBooleanValidator)());
var zc = {}, Qa = {};
Object.defineProperty(Qa, "__esModule", { value: !0 });
Qa.Line = void 0;
const bc = _e, yw = ye, _w = wt, N4 = ue;
function M0(t, e, n, r, o, a, l) {
  const c = Math.sqrt(Math.pow(n - t, 2) + Math.pow(r - e, 2)), h = Math.sqrt(Math.pow(o - n, 2) + Math.pow(a - r, 2)), d = l * c / (c + h), m = l * h / (c + h), S = n - d * (o - t), y = r - d * (a - e), _ = n + m * (o - t), x = r + m * (a - e);
  return [S, y, _, x];
}
function G2(t, e) {
  const n = t.length, r = [];
  for (let o = 2; o < n - 2; o += 2) {
    const a = M0(t[o - 2], t[o - 1], t[o], t[o + 1], t[o + 2], t[o + 3], e);
    isNaN(a[0]) || (r.push(a[0]), r.push(a[1]), r.push(t[o]), r.push(t[o + 1]), r.push(a[2]), r.push(a[3]));
  }
  return r;
}
let Ni = class extends _w.Shape {
  constructor(e) {
    super(e), this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
      this._clearCache("tensionPoints");
    });
  }
  _sceneFunc(e) {
    let n = this.points(), r = n.length, o = this.tension(), a = this.closed(), l = this.bezier(), c, h, d;
    if (r) {
      if (e.beginPath(), e.moveTo(n[0], n[1]), o !== 0 && r > 4) {
        for (c = this.getTensionPoints(), h = c.length, d = a ? 0 : 4, a || e.quadraticCurveTo(c[0], c[1], c[2], c[3]); d < h - 2; )
          e.bezierCurveTo(c[d++], c[d++], c[d++], c[d++], c[d++], c[d++]);
        a || e.quadraticCurveTo(c[h - 2], c[h - 1], n[r - 2], n[r - 1]);
      } else if (l)
        for (d = 2; d < r; )
          e.bezierCurveTo(n[d++], n[d++], n[d++], n[d++], n[d++], n[d++]);
      else
        for (d = 2; d < r; d += 2)
          e.lineTo(n[d], n[d + 1]);
      a ? (e.closePath(), e.fillStrokeShape(this)) : e.strokeShape(this);
    }
  }
  getTensionPoints() {
    return this._getCache("tensionPoints", this._getTensionPoints);
  }
  _getTensionPoints() {
    return this.closed() ? this._getTensionPointsClosed() : G2(this.points(), this.tension());
  }
  _getTensionPointsClosed() {
    const e = this.points(), n = e.length, r = this.tension(), o = M0(e[n - 2], e[n - 1], e[0], e[1], e[2], e[3], r), a = M0(e[n - 4], e[n - 3], e[n - 2], e[n - 1], e[0], e[1], r), l = G2(e, r);
    return [o[2], o[3]].concat(l).concat([
      a[0],
      a[1],
      e[n - 2],
      e[n - 1],
      a[2],
      a[3],
      o[0],
      o[1],
      e[0],
      e[1]
    ]);
  }
  getWidth() {
    return this.getSelfRect().width;
  }
  getHeight() {
    return this.getSelfRect().height;
  }
  getSelfRect() {
    let e = this.points();
    if (e.length < 4)
      return {
        x: e[0] || 0,
        y: e[1] || 0,
        width: 0,
        height: 0
      };
    this.tension() !== 0 ? e = [
      e[0],
      e[1],
      ...this._getTensionPoints(),
      e[e.length - 2],
      e[e.length - 1]
    ] : e = this.points();
    let n = e[0], r = e[0], o = e[1], a = e[1], l, c;
    for (let h = 0; h < e.length / 2; h++)
      l = e[h * 2], c = e[h * 2 + 1], n = Math.min(n, l), r = Math.max(r, l), o = Math.min(o, c), a = Math.max(a, c);
    return {
      x: n,
      y: o,
      width: r - n,
      height: a - o
    };
  }
};
Qa.Line = Ni;
Ni.prototype.className = "Line";
Ni.prototype._attrsAffectingSize = ["points", "bezier", "tension"];
(0, yw._registerNode)(Ni);
bc.Factory.addGetterSetter(Ni, "closed", !1);
bc.Factory.addGetterSetter(Ni, "bezier", !1);
bc.Factory.addGetterSetter(Ni, "tension", 0, (0, N4.getNumberValidator)());
bc.Factory.addGetterSetter(Ni, "points", [], (0, N4.getNumberArrayValidator)());
var _s = {}, R4 = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.t2length = t.getQuadraticArcLength = t.getCubicArcLength = t.binomialCoefficients = t.cValues = t.tValues = void 0, t.tValues = [
    [],
    [],
    [
      -0.5773502691896257,
      0.5773502691896257
    ],
    [
      0,
      -0.7745966692414834,
      0.7745966692414834
    ],
    [
      -0.33998104358485626,
      0.33998104358485626,
      -0.8611363115940526,
      0.8611363115940526
    ],
    [
      0,
      -0.5384693101056831,
      0.5384693101056831,
      -0.906179845938664,
      0.906179845938664
    ],
    [
      0.6612093864662645,
      -0.6612093864662645,
      -0.2386191860831969,
      0.2386191860831969,
      -0.932469514203152,
      0.932469514203152
    ],
    [
      0,
      0.4058451513773972,
      -0.4058451513773972,
      -0.7415311855993945,
      0.7415311855993945,
      -0.9491079123427585,
      0.9491079123427585
    ],
    [
      -0.1834346424956498,
      0.1834346424956498,
      -0.525532409916329,
      0.525532409916329,
      -0.7966664774136267,
      0.7966664774136267,
      -0.9602898564975363,
      0.9602898564975363
    ],
    [
      0,
      -0.8360311073266358,
      0.8360311073266358,
      -0.9681602395076261,
      0.9681602395076261,
      -0.3242534234038089,
      0.3242534234038089,
      -0.6133714327005904,
      0.6133714327005904
    ],
    [
      -0.14887433898163122,
      0.14887433898163122,
      -0.4333953941292472,
      0.4333953941292472,
      -0.6794095682990244,
      0.6794095682990244,
      -0.8650633666889845,
      0.8650633666889845,
      -0.9739065285171717,
      0.9739065285171717
    ],
    [
      0,
      -0.26954315595234496,
      0.26954315595234496,
      -0.5190961292068118,
      0.5190961292068118,
      -0.7301520055740494,
      0.7301520055740494,
      -0.8870625997680953,
      0.8870625997680953,
      -0.978228658146057,
      0.978228658146057
    ],
    [
      -0.1252334085114689,
      0.1252334085114689,
      -0.3678314989981802,
      0.3678314989981802,
      -0.5873179542866175,
      0.5873179542866175,
      -0.7699026741943047,
      0.7699026741943047,
      -0.9041172563704749,
      0.9041172563704749,
      -0.9815606342467192,
      0.9815606342467192
    ],
    [
      0,
      -0.2304583159551348,
      0.2304583159551348,
      -0.44849275103644687,
      0.44849275103644687,
      -0.6423493394403402,
      0.6423493394403402,
      -0.8015780907333099,
      0.8015780907333099,
      -0.9175983992229779,
      0.9175983992229779,
      -0.9841830547185881,
      0.9841830547185881
    ],
    [
      -0.10805494870734367,
      0.10805494870734367,
      -0.31911236892788974,
      0.31911236892788974,
      -0.5152486363581541,
      0.5152486363581541,
      -0.6872929048116855,
      0.6872929048116855,
      -0.827201315069765,
      0.827201315069765,
      -0.9284348836635735,
      0.9284348836635735,
      -0.9862838086968123,
      0.9862838086968123
    ],
    [
      0,
      -0.20119409399743451,
      0.20119409399743451,
      -0.3941513470775634,
      0.3941513470775634,
      -0.5709721726085388,
      0.5709721726085388,
      -0.7244177313601701,
      0.7244177313601701,
      -0.8482065834104272,
      0.8482065834104272,
      -0.937273392400706,
      0.937273392400706,
      -0.9879925180204854,
      0.9879925180204854
    ],
    [
      -0.09501250983763744,
      0.09501250983763744,
      -0.2816035507792589,
      0.2816035507792589,
      -0.45801677765722737,
      0.45801677765722737,
      -0.6178762444026438,
      0.6178762444026438,
      -0.755404408355003,
      0.755404408355003,
      -0.8656312023878318,
      0.8656312023878318,
      -0.9445750230732326,
      0.9445750230732326,
      -0.9894009349916499,
      0.9894009349916499
    ],
    [
      0,
      -0.17848418149584785,
      0.17848418149584785,
      -0.3512317634538763,
      0.3512317634538763,
      -0.5126905370864769,
      0.5126905370864769,
      -0.6576711592166907,
      0.6576711592166907,
      -0.7815140038968014,
      0.7815140038968014,
      -0.8802391537269859,
      0.8802391537269859,
      -0.9506755217687678,
      0.9506755217687678,
      -0.9905754753144174,
      0.9905754753144174
    ],
    [
      -0.0847750130417353,
      0.0847750130417353,
      -0.2518862256915055,
      0.2518862256915055,
      -0.41175116146284263,
      0.41175116146284263,
      -0.5597708310739475,
      0.5597708310739475,
      -0.6916870430603532,
      0.6916870430603532,
      -0.8037049589725231,
      0.8037049589725231,
      -0.8926024664975557,
      0.8926024664975557,
      -0.9558239495713977,
      0.9558239495713977,
      -0.9915651684209309,
      0.9915651684209309
    ],
    [
      0,
      -0.16035864564022537,
      0.16035864564022537,
      -0.31656409996362983,
      0.31656409996362983,
      -0.46457074137596094,
      0.46457074137596094,
      -0.600545304661681,
      0.600545304661681,
      -0.7209661773352294,
      0.7209661773352294,
      -0.8227146565371428,
      0.8227146565371428,
      -0.9031559036148179,
      0.9031559036148179,
      -0.96020815213483,
      0.96020815213483,
      -0.9924068438435844,
      0.9924068438435844
    ],
    [
      -0.07652652113349734,
      0.07652652113349734,
      -0.22778585114164507,
      0.22778585114164507,
      -0.37370608871541955,
      0.37370608871541955,
      -0.5108670019508271,
      0.5108670019508271,
      -0.636053680726515,
      0.636053680726515,
      -0.7463319064601508,
      0.7463319064601508,
      -0.8391169718222188,
      0.8391169718222188,
      -0.912234428251326,
      0.912234428251326,
      -0.9639719272779138,
      0.9639719272779138,
      -0.9931285991850949,
      0.9931285991850949
    ],
    [
      0,
      -0.1455618541608951,
      0.1455618541608951,
      -0.2880213168024011,
      0.2880213168024011,
      -0.4243421202074388,
      0.4243421202074388,
      -0.5516188358872198,
      0.5516188358872198,
      -0.6671388041974123,
      0.6671388041974123,
      -0.7684399634756779,
      0.7684399634756779,
      -0.8533633645833173,
      0.8533633645833173,
      -0.9200993341504008,
      0.9200993341504008,
      -0.9672268385663063,
      0.9672268385663063,
      -0.9937521706203895,
      0.9937521706203895
    ],
    [
      -0.06973927331972223,
      0.06973927331972223,
      -0.20786042668822127,
      0.20786042668822127,
      -0.34193582089208424,
      0.34193582089208424,
      -0.469355837986757,
      0.469355837986757,
      -0.5876404035069116,
      0.5876404035069116,
      -0.6944872631866827,
      0.6944872631866827,
      -0.7878168059792081,
      0.7878168059792081,
      -0.8658125777203002,
      0.8658125777203002,
      -0.926956772187174,
      0.926956772187174,
      -0.9700604978354287,
      0.9700604978354287,
      -0.9942945854823992,
      0.9942945854823992
    ],
    [
      0,
      -0.1332568242984661,
      0.1332568242984661,
      -0.26413568097034495,
      0.26413568097034495,
      -0.3903010380302908,
      0.3903010380302908,
      -0.5095014778460075,
      0.5095014778460075,
      -0.6196098757636461,
      0.6196098757636461,
      -0.7186613631319502,
      0.7186613631319502,
      -0.8048884016188399,
      0.8048884016188399,
      -0.8767523582704416,
      0.8767523582704416,
      -0.9329710868260161,
      0.9329710868260161,
      -0.9725424712181152,
      0.9725424712181152,
      -0.9947693349975522,
      0.9947693349975522
    ],
    [
      -0.06405689286260563,
      0.06405689286260563,
      -0.1911188674736163,
      0.1911188674736163,
      -0.3150426796961634,
      0.3150426796961634,
      -0.4337935076260451,
      0.4337935076260451,
      -0.5454214713888396,
      0.5454214713888396,
      -0.6480936519369755,
      0.6480936519369755,
      -0.7401241915785544,
      0.7401241915785544,
      -0.820001985973903,
      0.820001985973903,
      -0.8864155270044011,
      0.8864155270044011,
      -0.9382745520027328,
      0.9382745520027328,
      -0.9747285559713095,
      0.9747285559713095,
      -0.9951872199970213,
      0.9951872199970213
    ]
  ], t.cValues = [
    [],
    [],
    [1, 1],
    [
      0.8888888888888888,
      0.5555555555555556,
      0.5555555555555556
    ],
    [
      0.6521451548625461,
      0.6521451548625461,
      0.34785484513745385,
      0.34785484513745385
    ],
    [
      0.5688888888888889,
      0.47862867049936647,
      0.47862867049936647,
      0.23692688505618908,
      0.23692688505618908
    ],
    [
      0.3607615730481386,
      0.3607615730481386,
      0.46791393457269104,
      0.46791393457269104,
      0.17132449237917036,
      0.17132449237917036
    ],
    [
      0.4179591836734694,
      0.3818300505051189,
      0.3818300505051189,
      0.27970539148927664,
      0.27970539148927664,
      0.1294849661688697,
      0.1294849661688697
    ],
    [
      0.362683783378362,
      0.362683783378362,
      0.31370664587788727,
      0.31370664587788727,
      0.22238103445337448,
      0.22238103445337448,
      0.10122853629037626,
      0.10122853629037626
    ],
    [
      0.3302393550012598,
      0.1806481606948574,
      0.1806481606948574,
      0.08127438836157441,
      0.08127438836157441,
      0.31234707704000286,
      0.31234707704000286,
      0.26061069640293544,
      0.26061069640293544
    ],
    [
      0.29552422471475287,
      0.29552422471475287,
      0.26926671930999635,
      0.26926671930999635,
      0.21908636251598204,
      0.21908636251598204,
      0.1494513491505806,
      0.1494513491505806,
      0.06667134430868814,
      0.06667134430868814
    ],
    [
      0.2729250867779006,
      0.26280454451024665,
      0.26280454451024665,
      0.23319376459199048,
      0.23319376459199048,
      0.18629021092773426,
      0.18629021092773426,
      0.1255803694649046,
      0.1255803694649046,
      0.05566856711617366,
      0.05566856711617366
    ],
    [
      0.24914704581340277,
      0.24914704581340277,
      0.2334925365383548,
      0.2334925365383548,
      0.20316742672306592,
      0.20316742672306592,
      0.16007832854334622,
      0.16007832854334622,
      0.10693932599531843,
      0.10693932599531843,
      0.04717533638651183,
      0.04717533638651183
    ],
    [
      0.2325515532308739,
      0.22628318026289723,
      0.22628318026289723,
      0.2078160475368885,
      0.2078160475368885,
      0.17814598076194574,
      0.17814598076194574,
      0.13887351021978725,
      0.13887351021978725,
      0.09212149983772845,
      0.09212149983772845,
      0.04048400476531588,
      0.04048400476531588
    ],
    [
      0.2152638534631578,
      0.2152638534631578,
      0.2051984637212956,
      0.2051984637212956,
      0.18553839747793782,
      0.18553839747793782,
      0.15720316715819355,
      0.15720316715819355,
      0.12151857068790319,
      0.12151857068790319,
      0.08015808715976021,
      0.08015808715976021,
      0.03511946033175186,
      0.03511946033175186
    ],
    [
      0.2025782419255613,
      0.19843148532711158,
      0.19843148532711158,
      0.1861610000155622,
      0.1861610000155622,
      0.16626920581699392,
      0.16626920581699392,
      0.13957067792615432,
      0.13957067792615432,
      0.10715922046717194,
      0.10715922046717194,
      0.07036604748810812,
      0.07036604748810812,
      0.03075324199611727,
      0.03075324199611727
    ],
    [
      0.1894506104550685,
      0.1894506104550685,
      0.18260341504492358,
      0.18260341504492358,
      0.16915651939500254,
      0.16915651939500254,
      0.14959598881657674,
      0.14959598881657674,
      0.12462897125553388,
      0.12462897125553388,
      0.09515851168249279,
      0.09515851168249279,
      0.062253523938647894,
      0.062253523938647894,
      0.027152459411754096,
      0.027152459411754096
    ],
    [
      0.17944647035620653,
      0.17656270536699264,
      0.17656270536699264,
      0.16800410215645004,
      0.16800410215645004,
      0.15404576107681028,
      0.15404576107681028,
      0.13513636846852548,
      0.13513636846852548,
      0.11188384719340397,
      0.11188384719340397,
      0.08503614831717918,
      0.08503614831717918,
      0.0554595293739872,
      0.0554595293739872,
      0.02414830286854793,
      0.02414830286854793
    ],
    [
      0.1691423829631436,
      0.1691423829631436,
      0.16427648374583273,
      0.16427648374583273,
      0.15468467512626524,
      0.15468467512626524,
      0.14064291467065065,
      0.14064291467065065,
      0.12255520671147846,
      0.12255520671147846,
      0.10094204410628717,
      0.10094204410628717,
      0.07642573025488905,
      0.07642573025488905,
      0.0497145488949698,
      0.0497145488949698,
      0.02161601352648331,
      0.02161601352648331
    ],
    [
      0.1610544498487837,
      0.15896884339395434,
      0.15896884339395434,
      0.15276604206585967,
      0.15276604206585967,
      0.1426067021736066,
      0.1426067021736066,
      0.12875396253933621,
      0.12875396253933621,
      0.11156664554733399,
      0.11156664554733399,
      0.09149002162245,
      0.09149002162245,
      0.06904454273764123,
      0.06904454273764123,
      0.0448142267656996,
      0.0448142267656996,
      0.019461788229726478,
      0.019461788229726478
    ],
    [
      0.15275338713072584,
      0.15275338713072584,
      0.14917298647260374,
      0.14917298647260374,
      0.14209610931838204,
      0.14209610931838204,
      0.13168863844917664,
      0.13168863844917664,
      0.11819453196151841,
      0.11819453196151841,
      0.10193011981724044,
      0.10193011981724044,
      0.08327674157670475,
      0.08327674157670475,
      0.06267204833410907,
      0.06267204833410907,
      0.04060142980038694,
      0.04060142980038694,
      0.017614007139152118,
      0.017614007139152118
    ],
    [
      0.14608113364969041,
      0.14452440398997005,
      0.14452440398997005,
      0.13988739479107315,
      0.13988739479107315,
      0.13226893863333747,
      0.13226893863333747,
      0.12183141605372853,
      0.12183141605372853,
      0.10879729916714838,
      0.10879729916714838,
      0.09344442345603386,
      0.09344442345603386,
      0.0761001136283793,
      0.0761001136283793,
      0.057134425426857205,
      0.057134425426857205,
      0.036953789770852494,
      0.036953789770852494,
      0.016017228257774335,
      0.016017228257774335
    ],
    [
      0.13925187285563198,
      0.13925187285563198,
      0.13654149834601517,
      0.13654149834601517,
      0.13117350478706238,
      0.13117350478706238,
      0.12325237681051242,
      0.12325237681051242,
      0.11293229608053922,
      0.11293229608053922,
      0.10041414444288096,
      0.10041414444288096,
      0.08594160621706773,
      0.08594160621706773,
      0.06979646842452049,
      0.06979646842452049,
      0.052293335152683286,
      0.052293335152683286,
      0.03377490158481415,
      0.03377490158481415,
      0.0146279952982722,
      0.0146279952982722
    ],
    [
      0.13365457218610619,
      0.1324620394046966,
      0.1324620394046966,
      0.12890572218808216,
      0.12890572218808216,
      0.12304908430672953,
      0.12304908430672953,
      0.11499664022241136,
      0.11499664022241136,
      0.10489209146454141,
      0.10489209146454141,
      0.09291576606003515,
      0.09291576606003515,
      0.07928141177671895,
      0.07928141177671895,
      0.06423242140852585,
      0.06423242140852585,
      0.04803767173108467,
      0.04803767173108467,
      0.030988005856979445,
      0.030988005856979445,
      0.013411859487141771,
      0.013411859487141771
    ],
    [
      0.12793819534675216,
      0.12793819534675216,
      0.1258374563468283,
      0.1258374563468283,
      0.12167047292780339,
      0.12167047292780339,
      0.1155056680537256,
      0.1155056680537256,
      0.10744427011596563,
      0.10744427011596563,
      0.09761865210411388,
      0.09761865210411388,
      0.08619016153195327,
      0.08619016153195327,
      0.0733464814110803,
      0.0733464814110803,
      0.05929858491543678,
      0.05929858491543678,
      0.04427743881741981,
      0.04427743881741981,
      0.028531388628933663,
      0.028531388628933663,
      0.0123412297999872,
      0.0123412297999872
    ]
  ], t.binomialCoefficients = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]];
  const e = (l, c, h) => {
    let d, m;
    const y = h / 2;
    d = 0;
    for (let _ = 0; _ < 20; _++)
      m = y * t.tValues[20][_] + y, d += t.cValues[20][_] * r(l, c, m);
    return y * d;
  };
  t.getCubicArcLength = e;
  const n = (l, c, h) => {
    h === void 0 && (h = 1);
    const d = l[0] - 2 * l[1] + l[2], m = c[0] - 2 * c[1] + c[2], S = 2 * l[1] - 2 * l[0], y = 2 * c[1] - 2 * c[0], _ = 4 * (d * d + m * m), x = 4 * (d * S + m * y), P = S * S + y * y;
    if (_ === 0)
      return h * Math.sqrt(Math.pow(l[2] - l[0], 2) + Math.pow(c[2] - c[0], 2));
    const R = x / (2 * _), w = P / _, E = h + R, g = w - R * R, C = E * E + g > 0 ? Math.sqrt(E * E + g) : 0, T = R * R + g > 0 ? Math.sqrt(R * R + g) : 0, M = R + Math.sqrt(R * R + g) !== 0 ? g * Math.log(Math.abs((E + C) / (R + T))) : 0;
    return Math.sqrt(_) / 2 * (E * C - R * T + M);
  };
  t.getQuadraticArcLength = n;
  function r(l, c, h) {
    const d = o(1, h, l), m = o(1, h, c), S = d * d + m * m;
    return Math.sqrt(S);
  }
  const o = (l, c, h) => {
    const d = h.length - 1;
    let m, S;
    if (d === 0)
      return 0;
    if (l === 0) {
      S = 0;
      for (let y = 0; y <= d; y++)
        S += t.binomialCoefficients[d][y] * Math.pow(1 - c, d - y) * Math.pow(c, y) * h[y];
      return S;
    } else {
      m = new Array(d);
      for (let y = 0; y < d; y++)
        m[y] = d * (h[y + 1] - h[y]);
      return o(l - 1, c, m);
    }
  }, a = (l, c, h) => {
    let d = 1, m = l / c, S = (l - h(m)) / c, y = 0;
    for (; d > 1e-3; ) {
      const _ = h(m + S), x = Math.abs(l - _) / c;
      if (x < d)
        d = x, m += S;
      else {
        const P = h(m - S), R = Math.abs(l - P) / c;
        R < d ? (d = R, m -= S) : S /= 2;
      }
      if (y++, y > 500)
        break;
    }
    return m;
  };
  t.t2length = a;
})(R4);
Object.defineProperty(_s, "__esModule", { value: !0 });
_s.Path = void 0;
const Sw = _e, ww = wt, xw = ye, Fo = R4;
class yt extends ww.Shape {
  constructor(e) {
    super(e), this.dataArray = [], this.pathLength = 0, this._readDataAttribute(), this.on("dataChange.konva", function() {
      this._readDataAttribute();
    });
  }
  _readDataAttribute() {
    this.dataArray = yt.parsePathData(this.data()), this.pathLength = yt.getPathLength(this.dataArray);
  }
  _sceneFunc(e) {
    const n = this.dataArray;
    e.beginPath();
    let r = !1;
    for (let P = 0; P < n.length; P++) {
      const R = n[P].command, w = n[P].points;
      switch (R) {
        case "L":
          e.lineTo(w[0], w[1]);
          break;
        case "M":
          e.moveTo(w[0], w[1]);
          break;
        case "C":
          e.bezierCurveTo(w[0], w[1], w[2], w[3], w[4], w[5]);
          break;
        case "Q":
          e.quadraticCurveTo(w[0], w[1], w[2], w[3]);
          break;
        case "A":
          var o = w[0], a = w[1], l = w[2], c = w[3], h = w[4], d = w[5], m = w[6], S = w[7], y = l > c ? l : c, _ = l > c ? 1 : l / c, x = l > c ? c / l : 1;
          e.translate(o, a), e.rotate(m), e.scale(_, x), e.arc(0, 0, y, h, h + d, 1 - S), e.scale(1 / _, 1 / x), e.rotate(-m), e.translate(-o, -a);
          break;
        case "z":
          r = !0, e.closePath();
          break;
      }
    }
    !r && !this.hasFill() ? e.strokeShape(this) : e.fillStrokeShape(this);
  }
  getSelfRect() {
    let e = [];
    this.dataArray.forEach(function(h) {
      if (h.command === "A") {
        const d = h.points[4], m = h.points[5], S = h.points[4] + m;
        let y = Math.PI / 180;
        if (Math.abs(d - S) < y && (y = Math.abs(d - S)), m < 0)
          for (let _ = d - y; _ > S; _ -= y) {
            const x = yt.getPointOnEllipticalArc(h.points[0], h.points[1], h.points[2], h.points[3], _, 0);
            e.push(x.x, x.y);
          }
        else
          for (let _ = d + y; _ < S; _ += y) {
            const x = yt.getPointOnEllipticalArc(h.points[0], h.points[1], h.points[2], h.points[3], _, 0);
            e.push(x.x, x.y);
          }
      } else if (h.command === "C")
        for (let d = 0; d <= 1; d += 0.01) {
          const m = yt.getPointOnCubicBezier(d, h.start.x, h.start.y, h.points[0], h.points[1], h.points[2], h.points[3], h.points[4], h.points[5]);
          e.push(m.x, m.y);
        }
      else
        e = e.concat(h.points);
    });
    let n = e[0], r = e[0], o = e[1], a = e[1], l, c;
    for (let h = 0; h < e.length / 2; h++)
      l = e[h * 2], c = e[h * 2 + 1], isNaN(l) || (n = Math.min(n, l), r = Math.max(r, l)), isNaN(c) || (o = Math.min(o, c), a = Math.max(a, c));
    return {
      x: n,
      y: o,
      width: r - n,
      height: a - o
    };
  }
  getLength() {
    return this.pathLength;
  }
  getPointAtLength(e) {
    return yt.getPointAtLengthOfDataArray(e, this.dataArray);
  }
  static getLineLength(e, n, r, o) {
    return Math.sqrt((r - e) * (r - e) + (o - n) * (o - n));
  }
  static getPathLength(e) {
    let n = 0;
    for (let r = 0; r < e.length; ++r)
      n += e[r].pathLength;
    return n;
  }
  static getPointAtLengthOfDataArray(e, n) {
    let r, o = 0, a = n.length;
    if (!a)
      return null;
    for (; o < a && e > n[o].pathLength; )
      e -= n[o].pathLength, ++o;
    if (o === a)
      return r = n[o - 1].points.slice(-2), {
        x: r[0],
        y: r[1]
      };
    if (e < 0.01)
      return r = n[o].points.slice(0, 2), {
        x: r[0],
        y: r[1]
      };
    const l = n[o], c = l.points;
    switch (l.command) {
      case "L":
        return yt.getPointOnLine(e, l.start.x, l.start.y, c[0], c[1]);
      case "C":
        return yt.getPointOnCubicBezier((0, Fo.t2length)(e, yt.getPathLength(n), (P) => (0, Fo.getCubicArcLength)([l.start.x, c[0], c[2], c[4]], [l.start.y, c[1], c[3], c[5]], P)), l.start.x, l.start.y, c[0], c[1], c[2], c[3], c[4], c[5]);
      case "Q":
        return yt.getPointOnQuadraticBezier((0, Fo.t2length)(e, yt.getPathLength(n), (P) => (0, Fo.getQuadraticArcLength)([l.start.x, c[0], c[2]], [l.start.y, c[1], c[3]], P)), l.start.x, l.start.y, c[0], c[1], c[2], c[3]);
      case "A":
        var h = c[0], d = c[1], m = c[2], S = c[3], y = c[4], _ = c[5], x = c[6];
        return y += _ * e / l.pathLength, yt.getPointOnEllipticalArc(h, d, m, S, y, x);
    }
    return null;
  }
  static getPointOnLine(e, n, r, o, a, l, c) {
    l = l ?? n, c = c ?? r;
    const h = this.getLineLength(n, r, o, a);
    if (h < 1e-10)
      return { x: n, y: r };
    if (o === n)
      return { x: l, y: c + (a > r ? e : -e) };
    const d = (a - r) / (o - n), m = Math.sqrt(e * e / (1 + d * d)) * (o < n ? -1 : 1), S = d * m;
    if (Math.abs(c - r - d * (l - n)) < 1e-10)
      return { x: l + m, y: c + S };
    const y = ((l - n) * (o - n) + (c - r) * (a - r)) / (h * h), _ = n + y * (o - n), x = r + y * (a - r), P = this.getLineLength(l, c, _, x), R = Math.sqrt(e * e - P * P), w = Math.sqrt(R * R / (1 + d * d)) * (o < n ? -1 : 1), E = d * w;
    return { x: _ + w, y: x + E };
  }
  static getPointOnCubicBezier(e, n, r, o, a, l, c, h, d) {
    function m(R) {
      return R * R * R;
    }
    function S(R) {
      return 3 * R * R * (1 - R);
    }
    function y(R) {
      return 3 * R * (1 - R) * (1 - R);
    }
    function _(R) {
      return (1 - R) * (1 - R) * (1 - R);
    }
    const x = h * m(e) + l * S(e) + o * y(e) + n * _(e), P = d * m(e) + c * S(e) + a * y(e) + r * _(e);
    return {
      x,
      y: P
    };
  }
  static getPointOnQuadraticBezier(e, n, r, o, a, l, c) {
    function h(_) {
      return _ * _;
    }
    function d(_) {
      return 2 * _ * (1 - _);
    }
    function m(_) {
      return (1 - _) * (1 - _);
    }
    const S = l * h(e) + o * d(e) + n * m(e), y = c * h(e) + a * d(e) + r * m(e);
    return {
      x: S,
      y
    };
  }
  static getPointOnEllipticalArc(e, n, r, o, a, l) {
    const c = Math.cos(l), h = Math.sin(l), d = {
      x: r * Math.cos(a),
      y: o * Math.sin(a)
    };
    return {
      x: e + (d.x * c - d.y * h),
      y: n + (d.x * h + d.y * c)
    };
  }
  static parsePathData(e) {
    if (!e)
      return [];
    let n = e;
    const r = [
      "m",
      "M",
      "l",
      "L",
      "v",
      "V",
      "h",
      "H",
      "z",
      "Z",
      "c",
      "C",
      "q",
      "Q",
      "t",
      "T",
      "s",
      "S",
      "a",
      "A"
    ];
    n = n.replace(new RegExp(" ", "g"), ",");
    for (var o = 0; o < r.length; o++)
      n = n.replace(new RegExp(r[o], "g"), "|" + r[o]);
    const a = n.split("|"), l = [], c = [];
    let h = 0, d = 0;
    const m = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
    let S;
    for (o = 1; o < a.length; o++) {
      let A = a[o], B = A.charAt(0);
      for (A = A.slice(1), c.length = 0; S = m.exec(A); )
        c.push(S[0]);
      const N = [];
      for (let D = 0, z = c.length; D < z; D++) {
        if (c[D] === "00") {
          N.push(0, 0);
          continue;
        }
        const q = parseFloat(c[D]);
        isNaN(q) ? N.push(0) : N.push(q);
      }
      for (; N.length > 0 && !isNaN(N[0]); ) {
        let D = "", z = [];
        const q = h, ce = d;
        var y, _, x, P, R, w, E, g, C, T;
        switch (B) {
          case "l":
            h += N.shift(), d += N.shift(), D = "L", z.push(h, d);
            break;
          case "L":
            h = N.shift(), d = N.shift(), z.push(h, d);
            break;
          case "m":
            var M = N.shift(), L = N.shift();
            if (h += M, d += L, D = "M", l.length > 2 && l[l.length - 1].command === "z") {
              for (let K = l.length - 2; K >= 0; K--)
                if (l[K].command === "M") {
                  h = l[K].points[0] + M, d = l[K].points[1] + L;
                  break;
                }
            }
            z.push(h, d), B = "l";
            break;
          case "M":
            h = N.shift(), d = N.shift(), D = "M", z.push(h, d), B = "L";
            break;
          case "h":
            h += N.shift(), D = "L", z.push(h, d);
            break;
          case "H":
            h = N.shift(), D = "L", z.push(h, d);
            break;
          case "v":
            d += N.shift(), D = "L", z.push(h, d);
            break;
          case "V":
            d = N.shift(), D = "L", z.push(h, d);
            break;
          case "C":
            z.push(N.shift(), N.shift(), N.shift(), N.shift()), h = N.shift(), d = N.shift(), z.push(h, d);
            break;
          case "c":
            z.push(h + N.shift(), d + N.shift(), h + N.shift(), d + N.shift()), h += N.shift(), d += N.shift(), D = "C", z.push(h, d);
            break;
          case "S":
            _ = h, x = d, y = l[l.length - 1], y.command === "C" && (_ = h + (h - y.points[2]), x = d + (d - y.points[3])), z.push(_, x, N.shift(), N.shift()), h = N.shift(), d = N.shift(), D = "C", z.push(h, d);
            break;
          case "s":
            _ = h, x = d, y = l[l.length - 1], y.command === "C" && (_ = h + (h - y.points[2]), x = d + (d - y.points[3])), z.push(_, x, h + N.shift(), d + N.shift()), h += N.shift(), d += N.shift(), D = "C", z.push(h, d);
            break;
          case "Q":
            z.push(N.shift(), N.shift()), h = N.shift(), d = N.shift(), z.push(h, d);
            break;
          case "q":
            z.push(h + N.shift(), d + N.shift()), h += N.shift(), d += N.shift(), D = "Q", z.push(h, d);
            break;
          case "T":
            _ = h, x = d, y = l[l.length - 1], y.command === "Q" && (_ = h + (h - y.points[0]), x = d + (d - y.points[1])), h = N.shift(), d = N.shift(), D = "Q", z.push(_, x, h, d);
            break;
          case "t":
            _ = h, x = d, y = l[l.length - 1], y.command === "Q" && (_ = h + (h - y.points[0]), x = d + (d - y.points[1])), h += N.shift(), d += N.shift(), D = "Q", z.push(_, x, h, d);
            break;
          case "A":
            P = N.shift(), R = N.shift(), w = N.shift(), E = N.shift(), g = N.shift(), C = h, T = d, h = N.shift(), d = N.shift(), D = "A", z = this.convertEndpointToCenterParameterization(C, T, h, d, E, g, P, R, w);
            break;
          case "a":
            P = N.shift(), R = N.shift(), w = N.shift(), E = N.shift(), g = N.shift(), C = h, T = d, h += N.shift(), d += N.shift(), D = "A", z = this.convertEndpointToCenterParameterization(C, T, h, d, E, g, P, R, w);
            break;
        }
        l.push({
          command: D || B,
          points: z,
          start: {
            x: q,
            y: ce
          },
          pathLength: this.calcLength(q, ce, D || B, z)
        });
      }
      (B === "z" || B === "Z") && l.push({
        command: "z",
        points: [],
        start: void 0,
        pathLength: 0
      });
    }
    return l;
  }
  static calcLength(e, n, r, o) {
    let a, l, c, h;
    const d = yt;
    switch (r) {
      case "L":
        return d.getLineLength(e, n, o[0], o[1]);
      case "C":
        return (0, Fo.getCubicArcLength)([e, o[0], o[2], o[4]], [n, o[1], o[3], o[5]], 1);
      case "Q":
        return (0, Fo.getQuadraticArcLength)([e, o[0], o[2]], [n, o[1], o[3]], 1);
      case "A":
        a = 0;
        var m = o[4], S = o[5], y = o[4] + S, _ = Math.PI / 180;
        if (Math.abs(m - y) < _ && (_ = Math.abs(m - y)), l = d.getPointOnEllipticalArc(o[0], o[1], o[2], o[3], m, 0), S < 0)
          for (h = m - _; h > y; h -= _)
            c = d.getPointOnEllipticalArc(o[0], o[1], o[2], o[3], h, 0), a += d.getLineLength(l.x, l.y, c.x, c.y), l = c;
        else
          for (h = m + _; h < y; h += _)
            c = d.getPointOnEllipticalArc(o[0], o[1], o[2], o[3], h, 0), a += d.getLineLength(l.x, l.y, c.x, c.y), l = c;
        return c = d.getPointOnEllipticalArc(o[0], o[1], o[2], o[3], y, 0), a += d.getLineLength(l.x, l.y, c.x, c.y), a;
    }
    return 0;
  }
  static convertEndpointToCenterParameterization(e, n, r, o, a, l, c, h, d) {
    const m = d * (Math.PI / 180), S = Math.cos(m) * (e - r) / 2 + Math.sin(m) * (n - o) / 2, y = -1 * Math.sin(m) * (e - r) / 2 + Math.cos(m) * (n - o) / 2, _ = S * S / (c * c) + y * y / (h * h);
    _ > 1 && (c *= Math.sqrt(_), h *= Math.sqrt(_));
    let x = Math.sqrt((c * c * (h * h) - c * c * (y * y) - h * h * (S * S)) / (c * c * (y * y) + h * h * (S * S)));
    a === l && (x *= -1), isNaN(x) && (x = 0);
    const P = x * c * y / h, R = x * -h * S / c, w = (e + r) / 2 + Math.cos(m) * P - Math.sin(m) * R, E = (n + o) / 2 + Math.sin(m) * P + Math.cos(m) * R, g = function(N) {
      return Math.sqrt(N[0] * N[0] + N[1] * N[1]);
    }, C = function(N, D) {
      return (N[0] * D[0] + N[1] * D[1]) / (g(N) * g(D));
    }, T = function(N, D) {
      return (N[0] * D[1] < N[1] * D[0] ? -1 : 1) * Math.acos(C(N, D));
    }, M = T([1, 0], [(S - P) / c, (y - R) / h]), L = [(S - P) / c, (y - R) / h], A = [(-1 * S - P) / c, (-1 * y - R) / h];
    let B = T(L, A);
    return C(L, A) <= -1 && (B = Math.PI), C(L, A) >= 1 && (B = 0), l === 0 && B > 0 && (B = B - 2 * Math.PI), l === 1 && B < 0 && (B = B + 2 * Math.PI), [w, E, c, h, M, B, m, l];
  }
}
_s.Path = yt;
yt.prototype.className = "Path";
yt.prototype._attrsAffectingSize = ["data"];
(0, xw._registerNode)(yt);
Sw.Factory.addGetterSetter(yt, "data");
Object.defineProperty(zc, "__esModule", { value: !0 });
zc.Arrow = void 0;
const Vc = _e, Ew = Qa, A4 = ue, Cw = ye, H2 = _s;
let uo = class extends Ew.Line {
  _sceneFunc(e) {
    super._sceneFunc(e);
    const n = Math.PI * 2, r = this.points();
    let o = r;
    const a = this.tension() !== 0 && r.length > 4;
    a && (o = this.getTensionPoints());
    const l = this.pointerLength(), c = r.length;
    let h, d;
    if (a) {
      const y = [
        o[o.length - 4],
        o[o.length - 3],
        o[o.length - 2],
        o[o.length - 1],
        r[c - 2],
        r[c - 1]
      ], _ = H2.Path.calcLength(o[o.length - 4], o[o.length - 3], "C", y), x = H2.Path.getPointOnQuadraticBezier(Math.min(1, 1 - l / _), y[0], y[1], y[2], y[3], y[4], y[5]);
      h = r[c - 2] - x.x, d = r[c - 1] - x.y;
    } else
      h = r[c - 2] - r[c - 4], d = r[c - 1] - r[c - 3];
    const m = (Math.atan2(d, h) + n) % n, S = this.pointerWidth();
    this.pointerAtEnding() && (e.save(), e.beginPath(), e.translate(r[c - 2], r[c - 1]), e.rotate(m), e.moveTo(0, 0), e.lineTo(-l, S / 2), e.lineTo(-l, -S / 2), e.closePath(), e.restore(), this.__fillStroke(e)), this.pointerAtBeginning() && (e.save(), e.beginPath(), e.translate(r[0], r[1]), a ? (h = (o[0] + o[2]) / 2 - r[0], d = (o[1] + o[3]) / 2 - r[1]) : (h = r[2] - r[0], d = r[3] - r[1]), e.rotate((Math.atan2(-d, -h) + n) % n), e.moveTo(0, 0), e.lineTo(-l, S / 2), e.lineTo(-l, -S / 2), e.closePath(), e.restore(), this.__fillStroke(e));
  }
  __fillStroke(e) {
    const n = this.dashEnabled();
    n && (this.attrs.dashEnabled = !1, e.setLineDash([])), e.fillStrokeShape(this), n && (this.attrs.dashEnabled = !0);
  }
  getSelfRect() {
    const e = super.getSelfRect(), n = this.pointerWidth() / 2;
    return {
      x: e.x - n,
      y: e.y - n,
      width: e.width + n * 2,
      height: e.height + n * 2
    };
  }
};
zc.Arrow = uo;
uo.prototype.className = "Arrow";
(0, Cw._registerNode)(uo);
Vc.Factory.addGetterSetter(uo, "pointerLength", 10, (0, A4.getNumberValidator)());
Vc.Factory.addGetterSetter(uo, "pointerWidth", 10, (0, A4.getNumberValidator)());
Vc.Factory.addGetterSetter(uo, "pointerAtBeginning", !1);
Vc.Factory.addGetterSetter(uo, "pointerAtEnding", !0);
var jc = {};
Object.defineProperty(jc, "__esModule", { value: !0 });
jc.Circle = void 0;
const Pw = _e, Tw = wt, kw = ue, Nw = ye;
let Ss = class extends Tw.Shape {
  _sceneFunc(e) {
    e.beginPath(), e.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, !1), e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(e) {
    this.radius() !== e / 2 && this.radius(e / 2);
  }
  setHeight(e) {
    this.radius() !== e / 2 && this.radius(e / 2);
  }
};
jc.Circle = Ss;
Ss.prototype._centroid = !0;
Ss.prototype.className = "Circle";
Ss.prototype._attrsAffectingSize = ["radius"];
(0, Nw._registerNode)(Ss);
Pw.Factory.addGetterSetter(Ss, "radius", 0, (0, kw.getNumberValidator)());
var Wc = {};
Object.defineProperty(Wc, "__esModule", { value: !0 });
Wc.Ellipse = void 0;
const Kp = _e, Rw = wt, M4 = ue, Aw = ye;
class Ri extends Rw.Shape {
  _sceneFunc(e) {
    const n = this.radiusX(), r = this.radiusY();
    e.beginPath(), e.save(), n !== r && e.scale(1, r / n), e.arc(0, 0, n, 0, Math.PI * 2, !1), e.restore(), e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    return this.radiusX() * 2;
  }
  getHeight() {
    return this.radiusY() * 2;
  }
  setWidth(e) {
    this.radiusX(e / 2);
  }
  setHeight(e) {
    this.radiusY(e / 2);
  }
}
Wc.Ellipse = Ri;
Ri.prototype.className = "Ellipse";
Ri.prototype._centroid = !0;
Ri.prototype._attrsAffectingSize = ["radiusX", "radiusY"];
(0, Aw._registerNode)(Ri);
Kp.Factory.addComponentsGetterSetter(Ri, "radius", ["x", "y"]);
Kp.Factory.addGetterSetter(Ri, "radiusX", 0, (0, M4.getNumberValidator)());
Kp.Factory.addGetterSetter(Ri, "radiusY", 0, (0, M4.getNumberValidator)());
var Xc = {};
Object.defineProperty(Xc, "__esModule", { value: !0 });
Xc.Image = void 0;
const Sd = ot, co = _e, Mw = wt, Lw = ye, $a = ue;
let vr = class L4 extends Mw.Shape {
  constructor(e) {
    super(e), this.on("imageChange.konva", () => {
      this._setImageLoad();
    }), this._setImageLoad();
  }
  _setImageLoad() {
    const e = this.image();
    e && e.complete || e && e.readyState === 4 || e && e.addEventListener && e.addEventListener("load", () => {
      this._requestDraw();
    });
  }
  _useBufferCanvas() {
    const e = !!this.cornerRadius(), n = this.hasShadow();
    return e && n ? !0 : super._useBufferCanvas(!0);
  }
  _sceneFunc(e) {
    const n = this.getWidth(), r = this.getHeight(), o = this.cornerRadius(), a = this.attrs.image;
    let l;
    if (a) {
      const c = this.attrs.cropWidth, h = this.attrs.cropHeight;
      c && h ? l = [
        a,
        this.cropX(),
        this.cropY(),
        c,
        h,
        0,
        0,
        n,
        r
      ] : l = [a, 0, 0, n, r];
    }
    (this.hasFill() || this.hasStroke() || o) && (e.beginPath(), o ? Sd.Util.drawRoundedRectPath(e, n, r, o) : e.rect(0, 0, n, r), e.closePath(), e.fillStrokeShape(this)), a && (o && e.clip(), e.drawImage.apply(e, l));
  }
  _hitFunc(e) {
    const n = this.width(), r = this.height(), o = this.cornerRadius();
    e.beginPath(), o ? Sd.Util.drawRoundedRectPath(e, n, r, o) : e.rect(0, 0, n, r), e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    var e, n;
    return (e = this.attrs.width) !== null && e !== void 0 ? e : (n = this.image()) === null || n === void 0 ? void 0 : n.width;
  }
  getHeight() {
    var e, n;
    return (e = this.attrs.height) !== null && e !== void 0 ? e : (n = this.image()) === null || n === void 0 ? void 0 : n.height;
  }
  static fromURL(e, n, r = null) {
    const o = Sd.Util.createImageElement();
    o.onload = function() {
      const a = new L4({
        image: o
      });
      n(a);
    }, o.onerror = r, o.crossOrigin = "Anonymous", o.src = e;
  }
};
Xc.Image = vr;
vr.prototype.className = "Image";
(0, Lw._registerNode)(vr);
co.Factory.addGetterSetter(vr, "cornerRadius", 0, (0, $a.getNumberOrArrayOfNumbersValidator)(4));
co.Factory.addGetterSetter(vr, "image");
co.Factory.addComponentsGetterSetter(vr, "crop", ["x", "y", "width", "height"]);
co.Factory.addGetterSetter(vr, "cropX", 0, (0, $a.getNumberValidator)());
co.Factory.addGetterSetter(vr, "cropY", 0, (0, $a.getNumberValidator)());
co.Factory.addGetterSetter(vr, "cropWidth", 0, (0, $a.getNumberValidator)());
co.Factory.addGetterSetter(vr, "cropHeight", 0, (0, $a.getNumberValidator)());
var ls = {};
Object.defineProperty(ls, "__esModule", { value: !0 });
ls.Tag = ls.Label = void 0;
const Kc = _e, Fw = wt, Iw = vs, Yp = ue, F4 = ye, I4 = [
  "fontFamily",
  "fontSize",
  "fontStyle",
  "padding",
  "lineHeight",
  "text",
  "width",
  "height",
  "pointerDirection",
  "pointerWidth",
  "pointerHeight"
], Ow = "Change.konva", Dw = "none", L0 = "up", F0 = "right", I0 = "down", O0 = "left", Bw = I4.length;
class Qp extends Iw.Group {
  constructor(e) {
    super(e), this.on("add.konva", function(n) {
      this._addListeners(n.child), this._sync();
    });
  }
  getText() {
    return this.find("Text")[0];
  }
  getTag() {
    return this.find("Tag")[0];
  }
  _addListeners(e) {
    let n = this, r;
    const o = function() {
      n._sync();
    };
    for (r = 0; r < Bw; r++)
      e.on(I4[r] + Ow, o);
  }
  getWidth() {
    return this.getText().width();
  }
  getHeight() {
    return this.getText().height();
  }
  _sync() {
    let e = this.getText(), n = this.getTag(), r, o, a, l, c, h, d;
    if (e && n) {
      switch (r = e.width(), o = e.height(), a = n.pointerDirection(), l = n.pointerWidth(), d = n.pointerHeight(), c = 0, h = 0, a) {
        case L0:
          c = r / 2, h = -1 * d;
          break;
        case F0:
          c = r + l, h = o / 2;
          break;
        case I0:
          c = r / 2, h = o + d;
          break;
        case O0:
          c = -1 * l, h = o / 2;
          break;
      }
      n.setAttrs({
        x: -1 * c,
        y: -1 * h,
        width: r,
        height: o
      }), e.setAttrs({
        x: -1 * c,
        y: -1 * h
      });
    }
  }
}
ls.Label = Qp;
Qp.prototype.className = "Label";
(0, F4._registerNode)(Qp);
class ho extends Fw.Shape {
  _sceneFunc(e) {
    const n = this.width(), r = this.height(), o = this.pointerDirection(), a = this.pointerWidth(), l = this.pointerHeight(), c = this.cornerRadius();
    let h = 0, d = 0, m = 0, S = 0;
    typeof c == "number" ? h = d = m = S = Math.min(c, n / 2, r / 2) : (h = Math.min(c[0] || 0, n / 2, r / 2), d = Math.min(c[1] || 0, n / 2, r / 2), S = Math.min(c[2] || 0, n / 2, r / 2), m = Math.min(c[3] || 0, n / 2, r / 2)), e.beginPath(), e.moveTo(h, 0), o === L0 && (e.lineTo((n - a) / 2, 0), e.lineTo(n / 2, -1 * l), e.lineTo((n + a) / 2, 0)), e.lineTo(n - d, 0), e.arc(n - d, d, d, Math.PI * 3 / 2, 0, !1), o === F0 && (e.lineTo(n, (r - l) / 2), e.lineTo(n + a, r / 2), e.lineTo(n, (r + l) / 2)), e.lineTo(n, r - S), e.arc(n - S, r - S, S, 0, Math.PI / 2, !1), o === I0 && (e.lineTo((n + a) / 2, r), e.lineTo(n / 2, r + l), e.lineTo((n - a) / 2, r)), e.lineTo(m, r), e.arc(m, r - m, m, Math.PI / 2, Math.PI, !1), o === O0 && (e.lineTo(0, (r + l) / 2), e.lineTo(-1 * a, r / 2), e.lineTo(0, (r - l) / 2)), e.lineTo(0, h), e.arc(h, h, h, Math.PI, Math.PI * 3 / 2, !1), e.closePath(), e.fillStrokeShape(this);
  }
  getSelfRect() {
    let e = 0, n = 0, r = this.pointerWidth(), o = this.pointerHeight(), a = this.pointerDirection(), l = this.width(), c = this.height();
    return a === L0 ? (n -= o, c += o) : a === I0 ? c += o : a === O0 ? (e -= r * 1.5, l += r) : a === F0 && (l += r * 1.5), {
      x: e,
      y: n,
      width: l,
      height: c
    };
  }
}
ls.Tag = ho;
ho.prototype.className = "Tag";
(0, F4._registerNode)(ho);
Kc.Factory.addGetterSetter(ho, "pointerDirection", Dw);
Kc.Factory.addGetterSetter(ho, "pointerWidth", 0, (0, Yp.getNumberValidator)());
Kc.Factory.addGetterSetter(ho, "pointerHeight", 0, (0, Yp.getNumberValidator)());
Kc.Factory.addGetterSetter(ho, "cornerRadius", 0, (0, Yp.getNumberOrArrayOfNumbersValidator)(4));
var qa = {};
Object.defineProperty(qa, "__esModule", { value: !0 });
qa.Rect = void 0;
const Uw = _e, Gw = wt, Hw = ye, zw = ot, bw = ue;
let Yc = class extends Gw.Shape {
  _sceneFunc(e) {
    const n = this.cornerRadius(), r = this.width(), o = this.height();
    e.beginPath(), n ? zw.Util.drawRoundedRectPath(e, r, o, n) : e.rect(0, 0, r, o), e.closePath(), e.fillStrokeShape(this);
  }
};
qa.Rect = Yc;
Yc.prototype.className = "Rect";
(0, Hw._registerNode)(Yc);
Uw.Factory.addGetterSetter(Yc, "cornerRadius", 0, (0, bw.getNumberOrArrayOfNumbersValidator)(4));
var Qc = {};
Object.defineProperty(Qc, "__esModule", { value: !0 });
Qc.RegularPolygon = void 0;
const O4 = _e, Vw = wt, D4 = ue, jw = ye;
class fo extends Vw.Shape {
  _sceneFunc(e) {
    const n = this._getPoints();
    e.beginPath(), e.moveTo(n[0].x, n[0].y);
    for (let r = 1; r < n.length; r++)
      e.lineTo(n[r].x, n[r].y);
    e.closePath(), e.fillStrokeShape(this);
  }
  _getPoints() {
    const e = this.attrs.sides, n = this.attrs.radius || 0, r = [];
    for (let o = 0; o < e; o++)
      r.push({
        x: n * Math.sin(o * 2 * Math.PI / e),
        y: -1 * n * Math.cos(o * 2 * Math.PI / e)
      });
    return r;
  }
  getSelfRect() {
    const e = this._getPoints();
    let n = e[0].x, r = e[0].y, o = e[0].x, a = e[0].y;
    return e.forEach((l) => {
      n = Math.min(n, l.x), r = Math.max(r, l.x), o = Math.min(o, l.y), a = Math.max(a, l.y);
    }), {
      x: n,
      y: o,
      width: r - n,
      height: a - o
    };
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(e) {
    this.radius(e / 2);
  }
  setHeight(e) {
    this.radius(e / 2);
  }
}
Qc.RegularPolygon = fo;
fo.prototype.className = "RegularPolygon";
fo.prototype._centroid = !0;
fo.prototype._attrsAffectingSize = ["radius"];
(0, jw._registerNode)(fo);
O4.Factory.addGetterSetter(fo, "radius", 0, (0, D4.getNumberValidator)());
O4.Factory.addGetterSetter(fo, "sides", 0, (0, D4.getNumberValidator)());
var $c = {};
Object.defineProperty($c, "__esModule", { value: !0 });
$c.Ring = void 0;
const B4 = _e, Ww = wt, U4 = ue, Xw = ye, z2 = Math.PI * 2;
let po = class extends Ww.Shape {
  _sceneFunc(e) {
    e.beginPath(), e.arc(0, 0, this.innerRadius(), 0, z2, !1), e.moveTo(this.outerRadius(), 0), e.arc(0, 0, this.outerRadius(), z2, 0, !0), e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(e) {
    this.outerRadius(e / 2);
  }
  setHeight(e) {
    this.outerRadius(e / 2);
  }
};
$c.Ring = po;
po.prototype.className = "Ring";
po.prototype._centroid = !0;
po.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, Xw._registerNode)(po);
B4.Factory.addGetterSetter(po, "innerRadius", 0, (0, U4.getNumberValidator)());
B4.Factory.addGetterSetter(po, "outerRadius", 0, (0, U4.getNumberValidator)());
var qc = {};
Object.defineProperty(qc, "__esModule", { value: !0 });
qc.Sprite = void 0;
const go = _e, Kw = wt, Yw = ys, G4 = ue, Qw = ye;
class yr extends Kw.Shape {
  constructor(e) {
    super(e), this._updated = !0, this.anim = new Yw.Animation(() => {
      const n = this._updated;
      return this._updated = !1, n;
    }), this.on("animationChange.konva", function() {
      this.frameIndex(0);
    }), this.on("frameIndexChange.konva", function() {
      this._updated = !0;
    }), this.on("frameRateChange.konva", function() {
      this.anim.isRunning() && (clearInterval(this.interval), this._setInterval());
    });
  }
  _sceneFunc(e) {
    const n = this.animation(), r = this.frameIndex(), o = r * 4, a = this.animations()[n], l = this.frameOffsets(), c = a[o + 0], h = a[o + 1], d = a[o + 2], m = a[o + 3], S = this.image();
    if ((this.hasFill() || this.hasStroke()) && (e.beginPath(), e.rect(0, 0, d, m), e.closePath(), e.fillStrokeShape(this)), S)
      if (l) {
        const y = l[n], _ = r * 2;
        e.drawImage(S, c, h, d, m, y[_ + 0], y[_ + 1], d, m);
      } else
        e.drawImage(S, c, h, d, m, 0, 0, d, m);
  }
  _hitFunc(e) {
    const n = this.animation(), r = this.frameIndex(), o = r * 4, a = this.animations()[n], l = this.frameOffsets(), c = a[o + 2], h = a[o + 3];
    if (e.beginPath(), l) {
      const d = l[n], m = r * 2;
      e.rect(d[m + 0], d[m + 1], c, h);
    } else
      e.rect(0, 0, c, h);
    e.closePath(), e.fillShape(this);
  }
  _useBufferCanvas() {
    return super._useBufferCanvas(!0);
  }
  _setInterval() {
    const e = this;
    this.interval = setInterval(function() {
      e._updateIndex();
    }, 1e3 / this.frameRate());
  }
  start() {
    if (this.isRunning())
      return;
    const e = this.getLayer();
    this.anim.setLayers(e), this._setInterval(), this.anim.start();
  }
  stop() {
    this.anim.stop(), clearInterval(this.interval);
  }
  isRunning() {
    return this.anim.isRunning();
  }
  _updateIndex() {
    const e = this.frameIndex(), n = this.animation(), r = this.animations(), o = r[n], a = o.length / 4;
    e < a - 1 ? this.frameIndex(e + 1) : this.frameIndex(0);
  }
}
qc.Sprite = yr;
yr.prototype.className = "Sprite";
(0, Qw._registerNode)(yr);
go.Factory.addGetterSetter(yr, "animation");
go.Factory.addGetterSetter(yr, "animations");
go.Factory.addGetterSetter(yr, "frameOffsets");
go.Factory.addGetterSetter(yr, "image");
go.Factory.addGetterSetter(yr, "frameIndex", 0, (0, G4.getNumberValidator)());
go.Factory.addGetterSetter(yr, "frameRate", 17, (0, G4.getNumberValidator)());
go.Factory.backCompat(yr, {
  index: "frameIndex",
  getIndex: "getFrameIndex",
  setIndex: "setFrameIndex"
});
var Zc = {};
Object.defineProperty(Zc, "__esModule", { value: !0 });
Zc.Star = void 0;
const $p = _e, $w = wt, qp = ue, qw = ye;
class Ai extends $w.Shape {
  _sceneFunc(e) {
    const n = this.innerRadius(), r = this.outerRadius(), o = this.numPoints();
    e.beginPath(), e.moveTo(0, 0 - r);
    for (let a = 1; a < o * 2; a++) {
      const l = a % 2 === 0 ? r : n, c = l * Math.sin(a * Math.PI / o), h = -1 * l * Math.cos(a * Math.PI / o);
      e.lineTo(c, h);
    }
    e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(e) {
    this.outerRadius(e / 2);
  }
  setHeight(e) {
    this.outerRadius(e / 2);
  }
}
Zc.Star = Ai;
Ai.prototype.className = "Star";
Ai.prototype._centroid = !0;
Ai.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, qw._registerNode)(Ai);
$p.Factory.addGetterSetter(Ai, "numPoints", 5, (0, qp.getNumberValidator)());
$p.Factory.addGetterSetter(Ai, "innerRadius", 0, (0, qp.getNumberValidator)());
$p.Factory.addGetterSetter(Ai, "outerRadius", 0, (0, qp.getNumberValidator)());
var ws = {};
Object.defineProperty(ws, "__esModule", { value: !0 });
ws.Text = void 0;
ws.stringToArray = H4;
const D0 = ot, jt = _e, Zw = wt, wd = ye, Mi = ue, Jw = ye;
function H4(t) {
  return [...t].reduce((e, n, r, o) => (new RegExp("\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?(?:\\u200D\\p{Emoji_Presentation})+", "u").test(n) ? e.push(n) : new RegExp("\\p{Regional_Indicator}{2}", "u").test(n + (o[r + 1] || "")) ? e.push(n + o[r + 1]) : r > 0 && new RegExp("\\p{Mn}|\\p{Me}|\\p{Mc}", "u").test(n) ? e[e.length - 1] += n : e.push(n), e), []);
}
const Io = "auto", ex = "center", z4 = "inherit", Zs = "justify", tx = "Change.konva", nx = "2d", b2 = "-", b4 = "left", rx = "text", ix = "Text", ox = "top", sx = "bottom", V2 = "middle", V4 = "normal", ax = "px ", hu = " ", lx = "right", j2 = "rtl", ux = "word", cx = "char", W2 = "none", xd = "…", j4 = [
  "direction",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontVariant",
  "padding",
  "align",
  "verticalAlign",
  "lineHeight",
  "text",
  "width",
  "height",
  "wrap",
  "ellipsis",
  "letterSpacing"
], hx = j4.length;
function fx(t) {
  return t.split(",").map((e) => {
    e = e.trim();
    const n = e.indexOf(" ") >= 0, r = e.indexOf('"') >= 0 || e.indexOf("'") >= 0;
    return n && !r && (e = `"${e}"`), e;
  }).join(", ");
}
let fu;
function Ed() {
  return fu || (fu = D0.Util.createCanvasElement().getContext(nx), fu);
}
function dx(t) {
  t.fillText(this._partialText, this._partialTextX, this._partialTextY);
}
function px(t) {
  t.setAttr("miterLimit", 2), t.strokeText(this._partialText, this._partialTextX, this._partialTextY);
}
function gx(t) {
  return t = t || {}, !t.fillLinearGradientColorStops && !t.fillRadialGradientColorStops && !t.fillPatternImage && (t.fill = t.fill || "black"), t;
}
let lt = class extends Zw.Shape {
  constructor(e) {
    super(gx(e)), this._partialTextX = 0, this._partialTextY = 0;
    for (let n = 0; n < hx; n++)
      this.on(j4[n] + tx, this._setTextData);
    this._setTextData();
  }
  _sceneFunc(e) {
    const n = this.textArr, r = n.length;
    if (!this.text())
      return;
    let o = this.padding(), a = this.fontSize(), l = this.lineHeight() * a, c = this.verticalAlign(), h = this.direction(), d = 0, m = this.align(), S = this.getWidth(), y = this.letterSpacing(), _ = this.fill(), x = this.textDecoration(), P = x.indexOf("underline") !== -1, R = x.indexOf("line-through") !== -1, w;
    h = h === z4 ? e.direction : h;
    let E = l / 2, g = V2;
    if (wd.Konva._fixTextRendering) {
      const q = this.measureSize("M");
      g = "alphabetic", E = (q.fontBoundingBoxAscent - q.fontBoundingBoxDescent) / 2 + l / 2;
    }
    var C = 0, T = 0;
    for (h === j2 && e.setAttr("direction", h), e.setAttr("font", this._getContextFont()), e.setAttr("textBaseline", g), e.setAttr("textAlign", b4), c === V2 ? d = (this.getHeight() - r * l - o * 2) / 2 : c === sx && (d = this.getHeight() - r * l - o * 2), e.translate(o, d + o), w = 0; w < r; w++) {
      var C = 0, T = 0, M = n[w], L = M.text, A = M.width, B = M.lastInParagraph, N, D, z;
      if (e.save(), m === lx ? C += S - A - o * 2 : m === ex && (C += (S - A - o * 2) / 2), P) {
        e.save(), e.beginPath();
        const K = wd.Konva._fixTextRendering ? Math.round(a / 4) : Math.round(a / 2), he = C, de = E + T + K;
        e.moveTo(he, de), N = L.split(" ").length - 1, D = N === 0, z = m === Zs && !B ? S - o * 2 : A, e.lineTo(he + Math.round(z), de), e.lineWidth = a / 15;
        const j = this._getLinearGradient();
        e.strokeStyle = j || _, e.stroke(), e.restore();
      }
      if (R) {
        e.save(), e.beginPath();
        const K = wd.Konva._fixTextRendering ? -Math.round(a / 4) : 0;
        e.moveTo(C, E + T + K), N = L.split(" ").length - 1, D = N === 0, z = m === Zs && B && !D ? S - o * 2 : A, e.lineTo(C + Math.round(z), E + T + K), e.lineWidth = a / 15;
        const he = this._getLinearGradient();
        e.strokeStyle = he || _, e.stroke(), e.restore();
      }
      if (h !== j2 && (y !== 0 || m === Zs)) {
        N = L.split(" ").length - 1;
        const K = H4(L);
        for (let he = 0; he < K.length; he++) {
          const de = K[he];
          de === " " && !B && m === Zs && (C += (S - o * 2 - A) / N), this._partialTextX = C, this._partialTextY = E + T, this._partialText = de, e.fillStrokeShape(this), C += this.measureSize(de).width + y;
        }
      } else
        y !== 0 && e.setAttr("letterSpacing", `${y}px`), this._partialTextX = C, this._partialTextY = E + T, this._partialText = L, e.fillStrokeShape(this);
      e.restore(), r > 1 && (E += l);
    }
  }
  _hitFunc(e) {
    const n = this.getWidth(), r = this.getHeight();
    e.beginPath(), e.rect(0, 0, n, r), e.closePath(), e.fillStrokeShape(this);
  }
  setText(e) {
    const n = D0.Util._isString(e) ? e : e == null ? "" : e + "";
    return this._setAttr(rx, n), this;
  }
  getWidth() {
    return this.attrs.width === Io || this.attrs.width === void 0 ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
  }
  getHeight() {
    return this.attrs.height === Io || this.attrs.height === void 0 ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return D0.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  measureSize(e) {
    var n, r, o, a, l, c, h, d, m, S, y;
    let _ = Ed(), x = this.fontSize(), P;
    _.save(), _.font = this._getContextFont(), P = _.measureText(e), _.restore();
    const R = x / 100;
    return {
      actualBoundingBoxAscent: (n = P.actualBoundingBoxAscent) !== null && n !== void 0 ? n : 71.58203125 * R,
      actualBoundingBoxDescent: (r = P.actualBoundingBoxDescent) !== null && r !== void 0 ? r : 0,
      actualBoundingBoxLeft: (o = P.actualBoundingBoxLeft) !== null && o !== void 0 ? o : -7.421875 * R,
      actualBoundingBoxRight: (a = P.actualBoundingBoxRight) !== null && a !== void 0 ? a : 75.732421875 * R,
      alphabeticBaseline: (l = P.alphabeticBaseline) !== null && l !== void 0 ? l : 0,
      emHeightAscent: (c = P.emHeightAscent) !== null && c !== void 0 ? c : 100 * R,
      emHeightDescent: (h = P.emHeightDescent) !== null && h !== void 0 ? h : -20 * R,
      fontBoundingBoxAscent: (d = P.fontBoundingBoxAscent) !== null && d !== void 0 ? d : 91 * R,
      fontBoundingBoxDescent: (m = P.fontBoundingBoxDescent) !== null && m !== void 0 ? m : 21 * R,
      hangingBaseline: (S = P.hangingBaseline) !== null && S !== void 0 ? S : 72.80000305175781 * R,
      ideographicBaseline: (y = P.ideographicBaseline) !== null && y !== void 0 ? y : -21 * R,
      width: P.width,
      height: x
    };
  }
  _getContextFont() {
    return this.fontStyle() + hu + this.fontVariant() + hu + (this.fontSize() + ax) + fx(this.fontFamily());
  }
  _addTextLine(e) {
    this.align() === Zs && (e = e.trim());
    const r = this._getTextWidth(e);
    return this.textArr.push({
      text: e,
      width: r,
      lastInParagraph: !1
    });
  }
  _getTextWidth(e) {
    const n = this.letterSpacing(), r = e.length;
    return Ed().measureText(e).width + (r ? n * (r - 1) : 0);
  }
  _setTextData() {
    let e = this.text().split(`
`), n = +this.fontSize(), r = 0, o = this.lineHeight() * n, a = this.attrs.width, l = this.attrs.height, c = a !== Io && a !== void 0, h = l !== Io && l !== void 0, d = this.padding(), m = a - d * 2, S = l - d * 2, y = 0, _ = this.wrap(), x = _ !== W2, P = _ !== cx && x, R = this.ellipsis();
    this.textArr = [], Ed().font = this._getContextFont();
    const w = R ? this._getTextWidth(xd) : 0;
    for (let g = 0, C = e.length; g < C; ++g) {
      let T = e[g], M = this._getTextWidth(T);
      if (c && M > m)
        for (; T.length > 0; ) {
          let L = 0, A = T.length, B = "", N = 0;
          for (; L < A; ) {
            const D = L + A >>> 1, z = T.slice(0, D + 1), q = this._getTextWidth(z) + w;
            q <= m ? (L = D + 1, B = z, N = q) : A = D;
          }
          if (B) {
            if (P) {
              var E;
              const z = T[B.length];
              (z === hu || z === b2) && N <= m ? E = B.length : E = Math.max(B.lastIndexOf(hu), B.lastIndexOf(b2)) + 1, E > 0 && (L = E, B = B.slice(0, L), N = this._getTextWidth(B));
            }
            if (B = B.trimRight(), this._addTextLine(B), r = Math.max(r, N), y += o, this._shouldHandleEllipsis(y)) {
              this._tryToAddEllipsisToLastLine();
              break;
            }
            if (T = T.slice(L), T = T.trimLeft(), T.length > 0 && (M = this._getTextWidth(T), M <= m)) {
              this._addTextLine(T), y += o, r = Math.max(r, M);
              break;
            }
          } else
            break;
        }
      else
        this._addTextLine(T), y += o, r = Math.max(r, M), this._shouldHandleEllipsis(y) && g < C - 1 && this._tryToAddEllipsisToLastLine();
      if (this.textArr[this.textArr.length - 1] && (this.textArr[this.textArr.length - 1].lastInParagraph = !0), h && y + o > S)
        break;
    }
    this.textHeight = n, this.textWidth = r;
  }
  _shouldHandleEllipsis(e) {
    const n = +this.fontSize(), r = this.lineHeight() * n, o = this.attrs.height, a = o !== Io && o !== void 0, l = this.padding(), c = o - l * 2;
    return !(this.wrap() !== W2) || a && e + r > c;
  }
  _tryToAddEllipsisToLastLine() {
    const e = this.attrs.width, n = e !== Io && e !== void 0, r = this.padding(), o = e - r * 2, a = this.ellipsis(), l = this.textArr[this.textArr.length - 1];
    !l || !a || (n && (this._getTextWidth(l.text + xd) < o || (l.text = l.text.slice(0, l.text.length - 3))), this.textArr.splice(this.textArr.length - 1, 1), this._addTextLine(l.text + xd));
  }
  getStrokeScaleEnabled() {
    return !0;
  }
  _useBufferCanvas() {
    const e = this.textDecoration().indexOf("underline") !== -1 || this.textDecoration().indexOf("line-through") !== -1, n = this.hasShadow();
    return e && n ? !0 : super._useBufferCanvas();
  }
};
ws.Text = lt;
lt.prototype._fillFunc = dx;
lt.prototype._strokeFunc = px;
lt.prototype.className = ix;
lt.prototype._attrsAffectingSize = [
  "text",
  "fontSize",
  "padding",
  "wrap",
  "lineHeight",
  "letterSpacing"
];
(0, Jw._registerNode)(lt);
jt.Factory.overWriteSetter(lt, "width", (0, Mi.getNumberOrAutoValidator)());
jt.Factory.overWriteSetter(lt, "height", (0, Mi.getNumberOrAutoValidator)());
jt.Factory.addGetterSetter(lt, "direction", z4);
jt.Factory.addGetterSetter(lt, "fontFamily", "Arial");
jt.Factory.addGetterSetter(lt, "fontSize", 12, (0, Mi.getNumberValidator)());
jt.Factory.addGetterSetter(lt, "fontStyle", V4);
jt.Factory.addGetterSetter(lt, "fontVariant", V4);
jt.Factory.addGetterSetter(lt, "padding", 0, (0, Mi.getNumberValidator)());
jt.Factory.addGetterSetter(lt, "align", b4);
jt.Factory.addGetterSetter(lt, "verticalAlign", ox);
jt.Factory.addGetterSetter(lt, "lineHeight", 1, (0, Mi.getNumberValidator)());
jt.Factory.addGetterSetter(lt, "wrap", ux);
jt.Factory.addGetterSetter(lt, "ellipsis", !1, (0, Mi.getBooleanValidator)());
jt.Factory.addGetterSetter(lt, "letterSpacing", 0, (0, Mi.getNumberValidator)());
jt.Factory.addGetterSetter(lt, "text", "", (0, Mi.getStringValidator)());
jt.Factory.addGetterSetter(lt, "textDecoration", "");
var Jc = {};
Object.defineProperty(Jc, "__esModule", { value: !0 });
Jc.TextPath = void 0;
const Cd = ot, qn = _e, mx = wt, Js = _s, Pd = ws, W4 = ue, vx = ye, yx = "", X4 = "normal";
function K4(t) {
  t.fillText(this.partialText, 0, 0);
}
function Y4(t) {
  t.strokeText(this.partialText, 0, 0);
}
class xt extends mx.Shape {
  constructor(e) {
    super(e), this.dummyCanvas = Cd.Util.createCanvasElement(), this.dataArray = [], this._readDataAttribute(), this.on("dataChange.konva", function() {
      this._readDataAttribute(), this._setTextData();
    }), this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva", this._setTextData), this._setTextData();
  }
  _getTextPathLength() {
    return Js.Path.getPathLength(this.dataArray);
  }
  _getPointAtLength(e) {
    if (!this.attrs.data)
      return null;
    const n = this.pathLength;
    return e - 1 > n ? null : Js.Path.getPointAtLengthOfDataArray(e, this.dataArray);
  }
  _readDataAttribute() {
    this.dataArray = Js.Path.parsePathData(this.attrs.data), this.pathLength = this._getTextPathLength();
  }
  _sceneFunc(e) {
    e.setAttr("font", this._getContextFont()), e.setAttr("textBaseline", this.textBaseline()), e.setAttr("textAlign", "left"), e.save();
    const n = this.textDecoration(), r = this.fill(), o = this.fontSize(), a = this.glyphInfo;
    n === "underline" && e.beginPath();
    for (let l = 0; l < a.length; l++) {
      e.save();
      const c = a[l].p0;
      e.translate(c.x, c.y), e.rotate(a[l].rotation), this.partialText = a[l].text, e.fillStrokeShape(this), n === "underline" && (l === 0 && e.moveTo(0, o / 2 + 1), e.lineTo(o, o / 2 + 1)), e.restore();
    }
    n === "underline" && (e.strokeStyle = r, e.lineWidth = o / 20, e.stroke()), e.restore();
  }
  _hitFunc(e) {
    e.beginPath();
    const n = this.glyphInfo;
    if (n.length >= 1) {
      const r = n[0].p0;
      e.moveTo(r.x, r.y);
    }
    for (let r = 0; r < n.length; r++) {
      const o = n[r].p1;
      e.lineTo(o.x, o.y);
    }
    e.setAttr("lineWidth", this.fontSize()), e.setAttr("strokeStyle", this.colorKey), e.stroke();
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return Cd.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  setText(e) {
    return Pd.Text.prototype.setText.call(this, e);
  }
  _getContextFont() {
    return Pd.Text.prototype._getContextFont.call(this);
  }
  _getTextSize(e) {
    const r = this.dummyCanvas.getContext("2d");
    r.save(), r.font = this._getContextFont();
    const o = r.measureText(e);
    return r.restore(), {
      width: o.width,
      height: parseInt(`${this.fontSize()}`, 10)
    };
  }
  _setTextData() {
    const { width: e, height: n } = this._getTextSize(this.attrs.text);
    if (this.textWidth = e, this.textHeight = n, this.glyphInfo = [], !this.attrs.data)
      return null;
    const r = this.letterSpacing(), o = this.align(), a = this.kerningFunc(), l = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * r, 0);
    let c = 0;
    o === "center" && (c = Math.max(0, this.pathLength / 2 - l / 2)), o === "right" && (c = Math.max(0, this.pathLength - l));
    const h = (0, Pd.stringToArray)(this.text());
    let d = c;
    for (let m = 0; m < h.length; m++) {
      const S = this._getPointAtLength(d);
      if (!S)
        return;
      let y = this._getTextSize(h[m]).width + r;
      if (h[m] === " " && o === "justify") {
        const E = this.text().split(" ").length - 1;
        y += (this.pathLength - l) / E;
      }
      const _ = this._getPointAtLength(d + y);
      if (!_)
        return;
      const x = Js.Path.getLineLength(S.x, S.y, _.x, _.y);
      let P = 0;
      if (a)
        try {
          P = a(h[m - 1], h[m]) * this.fontSize();
        } catch {
          P = 0;
        }
      S.x += P, _.x += P, this.textWidth += P;
      const R = Js.Path.getPointOnLine(P + x / 2, S.x, S.y, _.x, _.y), w = Math.atan2(_.y - S.y, _.x - S.x);
      this.glyphInfo.push({
        transposeX: R.x,
        transposeY: R.y,
        text: h[m],
        rotation: w,
        p0: S,
        p1: _
      }), d += y;
    }
  }
  getSelfRect() {
    if (!this.glyphInfo.length)
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    const e = [];
    this.glyphInfo.forEach(function(d) {
      e.push(d.p0.x), e.push(d.p0.y), e.push(d.p1.x), e.push(d.p1.y);
    });
    let n = e[0] || 0, r = e[0] || 0, o = e[1] || 0, a = e[1] || 0, l, c;
    for (let d = 0; d < e.length / 2; d++)
      l = e[d * 2], c = e[d * 2 + 1], n = Math.min(n, l), r = Math.max(r, l), o = Math.min(o, c), a = Math.max(a, c);
    const h = this.fontSize();
    return {
      x: n - h / 2,
      y: o - h / 2,
      width: r - n + h,
      height: a - o + h
    };
  }
  destroy() {
    return Cd.Util.releaseCanvas(this.dummyCanvas), super.destroy();
  }
}
Jc.TextPath = xt;
xt.prototype._fillFunc = K4;
xt.prototype._strokeFunc = Y4;
xt.prototype._fillFuncHit = K4;
xt.prototype._strokeFuncHit = Y4;
xt.prototype.className = "TextPath";
xt.prototype._attrsAffectingSize = ["text", "fontSize", "data"];
(0, vx._registerNode)(xt);
qn.Factory.addGetterSetter(xt, "data");
qn.Factory.addGetterSetter(xt, "fontFamily", "Arial");
qn.Factory.addGetterSetter(xt, "fontSize", 12, (0, W4.getNumberValidator)());
qn.Factory.addGetterSetter(xt, "fontStyle", X4);
qn.Factory.addGetterSetter(xt, "align", "left");
qn.Factory.addGetterSetter(xt, "letterSpacing", 0, (0, W4.getNumberValidator)());
qn.Factory.addGetterSetter(xt, "textBaseline", "middle");
qn.Factory.addGetterSetter(xt, "fontVariant", X4);
qn.Factory.addGetterSetter(xt, "text", yx);
qn.Factory.addGetterSetter(xt, "textDecoration", null);
qn.Factory.addGetterSetter(xt, "kerningFunc", null);
var eh = {};
Object.defineProperty(eh, "__esModule", { value: !0 });
eh.Transformer = void 0;
const De = ot, Le = _e, X2 = Je, _x = wt, Sx = qa, K2 = vs, Vn = ye, Li = ue, wx = ye, Q4 = "tr-konva", xx = [
  "resizeEnabledChange",
  "rotateAnchorOffsetChange",
  "rotateEnabledChange",
  "enabledAnchorsChange",
  "anchorSizeChange",
  "borderEnabledChange",
  "borderStrokeChange",
  "borderStrokeWidthChange",
  "borderDashChange",
  "anchorStrokeChange",
  "anchorStrokeWidthChange",
  "anchorFillChange",
  "anchorCornerRadiusChange",
  "ignoreStrokeChange",
  "anchorStyleFuncChange"
].map((t) => t + `.${Q4}`).join(" "), Y2 = "nodesRect", Ex = [
  "widthChange",
  "heightChange",
  "scaleXChange",
  "scaleYChange",
  "skewXChange",
  "skewYChange",
  "rotationChange",
  "offsetXChange",
  "offsetYChange",
  "transformsEnabledChange",
  "strokeWidthChange"
], Cx = {
  "top-left": -45,
  "top-center": 0,
  "top-right": 45,
  "middle-right": -90,
  "middle-left": 90,
  "bottom-left": -135,
  "bottom-center": 180,
  "bottom-right": 135
}, Px = "ontouchstart" in Vn.Konva._global;
function Tx(t, e, n) {
  if (t === "rotater")
    return n;
  e += De.Util.degToRad(Cx[t] || 0);
  const r = (De.Util.radToDeg(e) % 360 + 360) % 360;
  return De.Util._inRange(r, 315 + 22.5, 360) || De.Util._inRange(r, 0, 22.5) ? "ns-resize" : De.Util._inRange(r, 45 - 22.5, 45 + 22.5) ? "nesw-resize" : De.Util._inRange(r, 90 - 22.5, 90 + 22.5) ? "ew-resize" : De.Util._inRange(r, 135 - 22.5, 135 + 22.5) ? "nwse-resize" : De.Util._inRange(r, 180 - 22.5, 180 + 22.5) ? "ns-resize" : De.Util._inRange(r, 225 - 22.5, 225 + 22.5) ? "nesw-resize" : De.Util._inRange(r, 270 - 22.5, 270 + 22.5) ? "ew-resize" : De.Util._inRange(r, 315 - 22.5, 315 + 22.5) ? "nwse-resize" : (De.Util.error("Transformer has unknown angle for cursor detection: " + r), "pointer");
}
const nc = [
  "top-left",
  "top-center",
  "top-right",
  "middle-right",
  "middle-left",
  "bottom-left",
  "bottom-center",
  "bottom-right"
];
function kx(t) {
  return {
    x: t.x + t.width / 2 * Math.cos(t.rotation) + t.height / 2 * Math.sin(-t.rotation),
    y: t.y + t.height / 2 * Math.cos(t.rotation) + t.width / 2 * Math.sin(t.rotation)
  };
}
function $4(t, e, n) {
  const r = n.x + (t.x - n.x) * Math.cos(e) - (t.y - n.y) * Math.sin(e), o = n.y + (t.x - n.x) * Math.sin(e) + (t.y - n.y) * Math.cos(e);
  return {
    ...t,
    rotation: t.rotation + e,
    x: r,
    y: o
  };
}
function Nx(t, e) {
  const n = kx(t);
  return $4(t, e, n);
}
function Rx(t, e, n) {
  let r = e;
  for (let o = 0; o < t.length; o++) {
    const a = Vn.Konva.getAngle(t[o]), l = Math.abs(a - e) % (Math.PI * 2);
    Math.min(l, Math.PI * 2 - l) < n && (r = a);
  }
  return r;
}
let B0 = 0;
class Te extends K2.Group {
  constructor(e) {
    super(e), this._movingAnchorName = null, this._transforming = !1, this._createElements(), this._handleMouseMove = this._handleMouseMove.bind(this), this._handleMouseUp = this._handleMouseUp.bind(this), this.update = this.update.bind(this), this.on(xx, this.update), this.getNode() && this.update();
  }
  attachTo(e) {
    return this.setNode(e), this;
  }
  setNode(e) {
    return De.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."), this.setNodes([e]);
  }
  getNode() {
    return this._nodes && this._nodes[0];
  }
  _getEventNamespace() {
    return Q4 + this._id;
  }
  setNodes(e = []) {
    this._nodes && this._nodes.length && this.detach();
    const n = e.filter((o) => o.isAncestorOf(this) ? (De.Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach"), !1) : !0);
    return this._nodes = e = n, e.length === 1 && this.useSingleNodeRotation() ? this.rotation(e[0].getAbsoluteRotation()) : this.rotation(0), this._nodes.forEach((o) => {
      const a = () => {
        this.nodes().length === 1 && this.useSingleNodeRotation() && this.rotation(this.nodes()[0].getAbsoluteRotation()), this._resetTransformCache(), !this._transforming && !this.isDragging() && this.update();
      }, l = o._attrsAffectingSize.map((c) => c + "Change." + this._getEventNamespace()).join(" ");
      o.on(l, a), o.on(Ex.map((c) => c + `.${this._getEventNamespace()}`).join(" "), a), o.on(`absoluteTransformChange.${this._getEventNamespace()}`, a), this._proxyDrag(o);
    }), this._resetTransformCache(), !!this.findOne(".top-left") && this.update(), this;
  }
  _proxyDrag(e) {
    let n;
    e.on(`dragstart.${this._getEventNamespace()}`, (r) => {
      n = e.getAbsolutePosition(), !this.isDragging() && e !== this.findOne(".back") && this.startDrag(r, !1);
    }), e.on(`dragmove.${this._getEventNamespace()}`, (r) => {
      if (!n)
        return;
      const o = e.getAbsolutePosition(), a = o.x - n.x, l = o.y - n.y;
      this.nodes().forEach((c) => {
        if (c === e || c.isDragging())
          return;
        const h = c.getAbsolutePosition();
        c.setAbsolutePosition({
          x: h.x + a,
          y: h.y + l
        }), c.startDrag(r);
      }), n = null;
    });
  }
  getNodes() {
    return this._nodes || [];
  }
  getActiveAnchor() {
    return this._movingAnchorName;
  }
  detach() {
    this._nodes && this._nodes.forEach((e) => {
      e.off("." + this._getEventNamespace());
    }), this._nodes = [], this._resetTransformCache();
  }
  _resetTransformCache() {
    this._clearCache(Y2), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform");
  }
  _getNodeRect() {
    return this._getCache(Y2, this.__getNodeRect);
  }
  __getNodeShape(e, n = this.rotation(), r) {
    const o = e.getClientRect({
      skipTransform: !0,
      skipShadow: !0,
      skipStroke: this.ignoreStroke()
    }), a = e.getAbsoluteScale(r), l = e.getAbsolutePosition(r), c = o.x * a.x - e.offsetX() * a.x, h = o.y * a.y - e.offsetY() * a.y, d = (Vn.Konva.getAngle(e.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2), m = {
      x: l.x + c * Math.cos(d) + h * Math.sin(-d),
      y: l.y + h * Math.cos(d) + c * Math.sin(d),
      width: o.width * a.x,
      height: o.height * a.y,
      rotation: d
    };
    return $4(m, -Vn.Konva.getAngle(n), {
      x: 0,
      y: 0
    });
  }
  __getNodeRect() {
    if (!this.getNode())
      return {
        x: -1e8,
        y: -1e8,
        width: 0,
        height: 0,
        rotation: 0
      };
    const n = [];
    this.nodes().map((d) => {
      const m = d.getClientRect({
        skipTransform: !0,
        skipShadow: !0,
        skipStroke: this.ignoreStroke()
      }), S = [
        { x: m.x, y: m.y },
        { x: m.x + m.width, y: m.y },
        { x: m.x + m.width, y: m.y + m.height },
        { x: m.x, y: m.y + m.height }
      ], y = d.getAbsoluteTransform();
      S.forEach(function(_) {
        const x = y.point(_);
        n.push(x);
      });
    });
    const r = new De.Transform();
    r.rotate(-Vn.Konva.getAngle(this.rotation()));
    let o = 1 / 0, a = 1 / 0, l = -1 / 0, c = -1 / 0;
    n.forEach(function(d) {
      const m = r.point(d);
      o === void 0 && (o = l = m.x, a = c = m.y), o = Math.min(o, m.x), a = Math.min(a, m.y), l = Math.max(l, m.x), c = Math.max(c, m.y);
    }), r.invert();
    const h = r.point({ x: o, y: a });
    return {
      x: h.x,
      y: h.y,
      width: l - o,
      height: c - a,
      rotation: Vn.Konva.getAngle(this.rotation())
    };
  }
  getX() {
    return this._getNodeRect().x;
  }
  getY() {
    return this._getNodeRect().y;
  }
  getWidth() {
    return this._getNodeRect().width;
  }
  getHeight() {
    return this._getNodeRect().height;
  }
  _createElements() {
    this._createBack(), nc.forEach((e) => {
      this._createAnchor(e);
    }), this._createAnchor("rotater");
  }
  _createAnchor(e) {
    const n = new Sx.Rect({
      stroke: "rgb(0, 161, 255)",
      fill: "white",
      strokeWidth: 1,
      name: e + " _anchor",
      dragDistance: 0,
      draggable: !0,
      hitStrokeWidth: Px ? 10 : "auto"
    }), r = this;
    n.on("mousedown touchstart", function(o) {
      r._handleMouseDown(o);
    }), n.on("dragstart", (o) => {
      n.stopDrag(), o.cancelBubble = !0;
    }), n.on("dragend", (o) => {
      o.cancelBubble = !0;
    }), n.on("mouseenter", () => {
      const o = Vn.Konva.getAngle(this.rotation()), a = this.rotateAnchorCursor(), l = Tx(e, o, a);
      n.getStage().content && (n.getStage().content.style.cursor = l), this._cursorChange = !0;
    }), n.on("mouseout", () => {
      n.getStage().content && (n.getStage().content.style.cursor = ""), this._cursorChange = !1;
    }), this.add(n);
  }
  _createBack() {
    const e = new _x.Shape({
      name: "back",
      width: 0,
      height: 0,
      draggable: !0,
      sceneFunc(n, r) {
        const o = r.getParent(), a = o.padding();
        n.beginPath(), n.rect(-a, -a, r.width() + a * 2, r.height() + a * 2), n.moveTo(r.width() / 2, -a), o.rotateEnabled() && o.rotateLineVisible() && n.lineTo(r.width() / 2, -o.rotateAnchorOffset() * De.Util._sign(r.height()) - a), n.fillStrokeShape(r);
      },
      hitFunc: (n, r) => {
        if (!this.shouldOverdrawWholeArea())
          return;
        const o = this.padding();
        n.beginPath(), n.rect(-o, -o, r.width() + o * 2, r.height() + o * 2), n.fillStrokeShape(r);
      }
    });
    this.add(e), this._proxyDrag(e), e.on("dragstart", (n) => {
      n.cancelBubble = !0;
    }), e.on("dragmove", (n) => {
      n.cancelBubble = !0;
    }), e.on("dragend", (n) => {
      n.cancelBubble = !0;
    }), this.on("dragmove", (n) => {
      this.update();
    });
  }
  _handleMouseDown(e) {
    if (this._transforming)
      return;
    this._movingAnchorName = e.target.name().split(" ")[0];
    const n = this._getNodeRect(), r = n.width, o = n.height, a = Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2));
    this.sin = Math.abs(o / a), this.cos = Math.abs(r / a), typeof window < "u" && (window.addEventListener("mousemove", this._handleMouseMove), window.addEventListener("touchmove", this._handleMouseMove), window.addEventListener("mouseup", this._handleMouseUp, !0), window.addEventListener("touchend", this._handleMouseUp, !0)), this._transforming = !0;
    const l = e.target.getAbsolutePosition(), c = e.target.getStage().getPointerPosition();
    this._anchorDragOffset = {
      x: c.x - l.x,
      y: c.y - l.y
    }, B0++, this._fire("transformstart", { evt: e.evt, target: this.getNode() }), this._nodes.forEach((h) => {
      h._fire("transformstart", { evt: e.evt, target: h });
    });
  }
  _handleMouseMove(e) {
    let n, r, o;
    const a = this.findOne("." + this._movingAnchorName), l = a.getStage();
    l.setPointersPositions(e);
    const c = l.getPointerPosition();
    let h = {
      x: c.x - this._anchorDragOffset.x,
      y: c.y - this._anchorDragOffset.y
    };
    const d = a.getAbsolutePosition();
    this.anchorDragBoundFunc() && (h = this.anchorDragBoundFunc()(d, h, e)), a.setAbsolutePosition(h);
    const m = a.getAbsolutePosition();
    if (d.x === m.x && d.y === m.y)
      return;
    if (this._movingAnchorName === "rotater") {
      const T = this._getNodeRect();
      n = a.x() - T.width / 2, r = -a.y() + T.height / 2;
      let M = Math.atan2(-r, n) + Math.PI / 2;
      T.height < 0 && (M -= Math.PI);
      const A = Vn.Konva.getAngle(this.rotation()) + M, B = Vn.Konva.getAngle(this.rotationSnapTolerance()), D = Rx(this.rotationSnaps(), A, B) - T.rotation, z = Nx(T, D);
      this._fitNodesInto(z, e);
      return;
    }
    const S = this.shiftBehavior();
    let y;
    S === "inverted" ? y = this.keepRatio() && !e.shiftKey : S === "none" ? y = this.keepRatio() : y = this.keepRatio() || e.shiftKey;
    var w = this.centeredScaling() || e.altKey;
    if (this._movingAnchorName === "top-left") {
      if (y) {
        var _ = w ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".bottom-right").x(),
          y: this.findOne(".bottom-right").y()
        };
        o = Math.sqrt(Math.pow(_.x - a.x(), 2) + Math.pow(_.y - a.y(), 2));
        var x = this.findOne(".top-left").x() > _.x ? -1 : 1, P = this.findOne(".top-left").y() > _.y ? -1 : 1;
        n = o * this.cos * x, r = o * this.sin * P, this.findOne(".top-left").x(_.x - n), this.findOne(".top-left").y(_.y - r);
      }
    } else if (this._movingAnchorName === "top-center")
      this.findOne(".top-left").y(a.y());
    else if (this._movingAnchorName === "top-right") {
      if (y) {
        var _ = w ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".bottom-left").x(),
          y: this.findOne(".bottom-left").y()
        };
        o = Math.sqrt(Math.pow(a.x() - _.x, 2) + Math.pow(_.y - a.y(), 2));
        var x = this.findOne(".top-right").x() < _.x ? -1 : 1, P = this.findOne(".top-right").y() > _.y ? -1 : 1;
        n = o * this.cos * x, r = o * this.sin * P, this.findOne(".top-right").x(_.x + n), this.findOne(".top-right").y(_.y - r);
      }
      var R = a.position();
      this.findOne(".top-left").y(R.y), this.findOne(".bottom-right").x(R.x);
    } else if (this._movingAnchorName === "middle-left")
      this.findOne(".top-left").x(a.x());
    else if (this._movingAnchorName === "middle-right")
      this.findOne(".bottom-right").x(a.x());
    else if (this._movingAnchorName === "bottom-left") {
      if (y) {
        var _ = w ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".top-right").x(),
          y: this.findOne(".top-right").y()
        };
        o = Math.sqrt(Math.pow(_.x - a.x(), 2) + Math.pow(a.y() - _.y, 2));
        var x = _.x < a.x() ? -1 : 1, P = a.y() < _.y ? -1 : 1;
        n = o * this.cos * x, r = o * this.sin * P, a.x(_.x - n), a.y(_.y + r);
      }
      R = a.position(), this.findOne(".top-left").x(R.x), this.findOne(".bottom-right").y(R.y);
    } else if (this._movingAnchorName === "bottom-center")
      this.findOne(".bottom-right").y(a.y());
    else if (this._movingAnchorName === "bottom-right") {
      if (y) {
        var _ = w ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".top-left").x(),
          y: this.findOne(".top-left").y()
        };
        o = Math.sqrt(Math.pow(a.x() - _.x, 2) + Math.pow(a.y() - _.y, 2));
        var x = this.findOne(".bottom-right").x() < _.x ? -1 : 1, P = this.findOne(".bottom-right").y() < _.y ? -1 : 1;
        n = o * this.cos * x, r = o * this.sin * P, this.findOne(".bottom-right").x(_.x + n), this.findOne(".bottom-right").y(_.y + r);
      }
    } else
      console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
    var w = this.centeredScaling() || e.altKey;
    if (w) {
      const T = this.findOne(".top-left"), M = this.findOne(".bottom-right"), L = T.x(), A = T.y(), B = this.getWidth() - M.x(), N = this.getHeight() - M.y();
      M.move({
        x: -L,
        y: -A
      }), T.move({
        x: B,
        y: N
      });
    }
    const E = this.findOne(".top-left").getAbsolutePosition();
    n = E.x, r = E.y;
    const g = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(), C = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
    this._fitNodesInto({
      x: n,
      y: r,
      width: g,
      height: C,
      rotation: Vn.Konva.getAngle(this.rotation())
    }, e);
  }
  _handleMouseUp(e) {
    this._removeEvents(e);
  }
  getAbsoluteTransform() {
    return this.getTransform();
  }
  _removeEvents(e) {
    var n;
    if (this._transforming) {
      this._transforming = !1, typeof window < "u" && (window.removeEventListener("mousemove", this._handleMouseMove), window.removeEventListener("touchmove", this._handleMouseMove), window.removeEventListener("mouseup", this._handleMouseUp, !0), window.removeEventListener("touchend", this._handleMouseUp, !0));
      const r = this.getNode();
      B0--, this._fire("transformend", { evt: e, target: r }), (n = this.getLayer()) === null || n === void 0 || n.batchDraw(), r && this._nodes.forEach((o) => {
        var a;
        o._fire("transformend", { evt: e, target: o }), (a = o.getLayer()) === null || a === void 0 || a.batchDraw();
      }), this._movingAnchorName = null;
    }
  }
  _fitNodesInto(e, n) {
    const r = this._getNodeRect(), o = 1;
    if (De.Util._inRange(e.width, -this.padding() * 2 - o, o)) {
      this.update();
      return;
    }
    if (De.Util._inRange(e.height, -this.padding() * 2 - o, o)) {
      this.update();
      return;
    }
    const a = new De.Transform();
    if (a.rotate(Vn.Konva.getAngle(this.rotation())), this._movingAnchorName && e.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
      const y = a.point({
        x: -this.padding() * 2,
        y: 0
      });
      e.x += y.x, e.y += y.y, e.width += this.padding() * 2, this._movingAnchorName = this._movingAnchorName.replace("left", "right"), this._anchorDragOffset.x -= y.x, this._anchorDragOffset.y -= y.y;
    } else if (this._movingAnchorName && e.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
      const y = a.point({
        x: this.padding() * 2,
        y: 0
      });
      this._movingAnchorName = this._movingAnchorName.replace("right", "left"), this._anchorDragOffset.x -= y.x, this._anchorDragOffset.y -= y.y, e.width += this.padding() * 2;
    }
    if (this._movingAnchorName && e.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
      const y = a.point({
        x: 0,
        y: -this.padding() * 2
      });
      e.x += y.x, e.y += y.y, this._movingAnchorName = this._movingAnchorName.replace("top", "bottom"), this._anchorDragOffset.x -= y.x, this._anchorDragOffset.y -= y.y, e.height += this.padding() * 2;
    } else if (this._movingAnchorName && e.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
      const y = a.point({
        x: 0,
        y: this.padding() * 2
      });
      this._movingAnchorName = this._movingAnchorName.replace("bottom", "top"), this._anchorDragOffset.x -= y.x, this._anchorDragOffset.y -= y.y, e.height += this.padding() * 2;
    }
    if (this.boundBoxFunc()) {
      const y = this.boundBoxFunc()(r, e);
      y ? e = y : De.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
    }
    const l = 1e7, c = new De.Transform();
    c.translate(r.x, r.y), c.rotate(r.rotation), c.scale(r.width / l, r.height / l);
    const h = new De.Transform(), d = e.width / l, m = e.height / l;
    this.flipEnabled() === !1 ? (h.translate(e.x, e.y), h.rotate(e.rotation), h.translate(e.width < 0 ? e.width : 0, e.height < 0 ? e.height : 0), h.scale(Math.abs(d), Math.abs(m))) : (h.translate(e.x, e.y), h.rotate(e.rotation), h.scale(d, m));
    const S = h.multiply(c.invert());
    this._nodes.forEach((y) => {
      var _;
      const x = y.getParent().getAbsoluteTransform(), P = y.getTransform().copy();
      P.translate(y.offsetX(), y.offsetY());
      const R = new De.Transform();
      R.multiply(x.copy().invert()).multiply(S).multiply(x).multiply(P);
      const w = R.decompose();
      y.setAttrs(w), (_ = y.getLayer()) === null || _ === void 0 || _.batchDraw();
    }), this.rotation(De.Util._getRotation(e.rotation)), this._nodes.forEach((y) => {
      this._fire("transform", { evt: n, target: y }), y._fire("transform", { evt: n, target: y });
    }), this._resetTransformCache(), this.update(), this.getLayer().batchDraw();
  }
  forceUpdate() {
    this._resetTransformCache(), this.update();
  }
  _batchChangeChild(e, n) {
    this.findOne(e).setAttrs(n);
  }
  update() {
    var e;
    const n = this._getNodeRect();
    this.rotation(De.Util._getRotation(n.rotation));
    const r = n.width, o = n.height, a = this.enabledAnchors(), l = this.resizeEnabled(), c = this.padding(), h = this.anchorSize(), d = this.find("._anchor");
    d.forEach((S) => {
      S.setAttrs({
        width: h,
        height: h,
        offsetX: h / 2,
        offsetY: h / 2,
        stroke: this.anchorStroke(),
        strokeWidth: this.anchorStrokeWidth(),
        fill: this.anchorFill(),
        cornerRadius: this.anchorCornerRadius()
      });
    }), this._batchChangeChild(".top-left", {
      x: 0,
      y: 0,
      offsetX: h / 2 + c,
      offsetY: h / 2 + c,
      visible: l && a.indexOf("top-left") >= 0
    }), this._batchChangeChild(".top-center", {
      x: r / 2,
      y: 0,
      offsetY: h / 2 + c,
      visible: l && a.indexOf("top-center") >= 0
    }), this._batchChangeChild(".top-right", {
      x: r,
      y: 0,
      offsetX: h / 2 - c,
      offsetY: h / 2 + c,
      visible: l && a.indexOf("top-right") >= 0
    }), this._batchChangeChild(".middle-left", {
      x: 0,
      y: o / 2,
      offsetX: h / 2 + c,
      visible: l && a.indexOf("middle-left") >= 0
    }), this._batchChangeChild(".middle-right", {
      x: r,
      y: o / 2,
      offsetX: h / 2 - c,
      visible: l && a.indexOf("middle-right") >= 0
    }), this._batchChangeChild(".bottom-left", {
      x: 0,
      y: o,
      offsetX: h / 2 + c,
      offsetY: h / 2 - c,
      visible: l && a.indexOf("bottom-left") >= 0
    }), this._batchChangeChild(".bottom-center", {
      x: r / 2,
      y: o,
      offsetY: h / 2 - c,
      visible: l && a.indexOf("bottom-center") >= 0
    }), this._batchChangeChild(".bottom-right", {
      x: r,
      y: o,
      offsetX: h / 2 - c,
      offsetY: h / 2 - c,
      visible: l && a.indexOf("bottom-right") >= 0
    }), this._batchChangeChild(".rotater", {
      x: r / 2,
      y: -this.rotateAnchorOffset() * De.Util._sign(o) - c,
      visible: this.rotateEnabled()
    }), this._batchChangeChild(".back", {
      width: r,
      height: o,
      visible: this.borderEnabled(),
      stroke: this.borderStroke(),
      strokeWidth: this.borderStrokeWidth(),
      dash: this.borderDash(),
      x: 0,
      y: 0
    });
    const m = this.anchorStyleFunc();
    m && d.forEach((S) => {
      m(S);
    }), (e = this.getLayer()) === null || e === void 0 || e.batchDraw();
  }
  isTransforming() {
    return this._transforming;
  }
  stopTransform() {
    if (this._transforming) {
      this._removeEvents();
      const e = this.findOne("." + this._movingAnchorName);
      e && e.stopDrag();
    }
  }
  destroy() {
    return this.getStage() && this._cursorChange && this.getStage().content && (this.getStage().content.style.cursor = ""), K2.Group.prototype.destroy.call(this), this.detach(), this._removeEvents(), this;
  }
  toObject() {
    return X2.Node.prototype.toObject.call(this);
  }
  clone(e) {
    return X2.Node.prototype.clone.call(this, e);
  }
  getClientRect() {
    return this.nodes().length > 0 ? super.getClientRect() : { x: 0, y: 0, width: 0, height: 0 };
  }
}
eh.Transformer = Te;
Te.isTransforming = () => B0 > 0;
function Ax(t) {
  return t instanceof Array || De.Util.warn("enabledAnchors value should be an array"), t instanceof Array && t.forEach(function(e) {
    nc.indexOf(e) === -1 && De.Util.warn("Unknown anchor name: " + e + ". Available names are: " + nc.join(", "));
  }), t || [];
}
Te.prototype.className = "Transformer";
(0, wx._registerNode)(Te);
Le.Factory.addGetterSetter(Te, "enabledAnchors", nc, Ax);
Le.Factory.addGetterSetter(Te, "flipEnabled", !0, (0, Li.getBooleanValidator)());
Le.Factory.addGetterSetter(Te, "resizeEnabled", !0);
Le.Factory.addGetterSetter(Te, "anchorSize", 10, (0, Li.getNumberValidator)());
Le.Factory.addGetterSetter(Te, "rotateEnabled", !0);
Le.Factory.addGetterSetter(Te, "rotateLineVisible", !0);
Le.Factory.addGetterSetter(Te, "rotationSnaps", []);
Le.Factory.addGetterSetter(Te, "rotateAnchorOffset", 50, (0, Li.getNumberValidator)());
Le.Factory.addGetterSetter(Te, "rotateAnchorCursor", "crosshair");
Le.Factory.addGetterSetter(Te, "rotationSnapTolerance", 5, (0, Li.getNumberValidator)());
Le.Factory.addGetterSetter(Te, "borderEnabled", !0);
Le.Factory.addGetterSetter(Te, "anchorStroke", "rgb(0, 161, 255)");
Le.Factory.addGetterSetter(Te, "anchorStrokeWidth", 1, (0, Li.getNumberValidator)());
Le.Factory.addGetterSetter(Te, "anchorFill", "white");
Le.Factory.addGetterSetter(Te, "anchorCornerRadius", 0, (0, Li.getNumberValidator)());
Le.Factory.addGetterSetter(Te, "borderStroke", "rgb(0, 161, 255)");
Le.Factory.addGetterSetter(Te, "borderStrokeWidth", 1, (0, Li.getNumberValidator)());
Le.Factory.addGetterSetter(Te, "borderDash");
Le.Factory.addGetterSetter(Te, "keepRatio", !0);
Le.Factory.addGetterSetter(Te, "shiftBehavior", "default");
Le.Factory.addGetterSetter(Te, "centeredScaling", !1);
Le.Factory.addGetterSetter(Te, "ignoreStroke", !1);
Le.Factory.addGetterSetter(Te, "padding", 0, (0, Li.getNumberValidator)());
Le.Factory.addGetterSetter(Te, "node");
Le.Factory.addGetterSetter(Te, "nodes");
Le.Factory.addGetterSetter(Te, "boundBoxFunc");
Le.Factory.addGetterSetter(Te, "anchorDragBoundFunc");
Le.Factory.addGetterSetter(Te, "anchorStyleFunc");
Le.Factory.addGetterSetter(Te, "shouldOverdrawWholeArea", !1);
Le.Factory.addGetterSetter(Te, "useSingleNodeRotation", !0);
Le.Factory.backCompat(Te, {
  lineEnabled: "borderEnabled",
  rotateHandlerOffset: "rotateAnchorOffset",
  enabledHandlers: "enabledAnchors"
});
var th = {};
Object.defineProperty(th, "__esModule", { value: !0 });
th.Wedge = void 0;
const nh = _e, Mx = wt, Lx = ye, q4 = ue, Fx = ye;
class br extends Mx.Shape {
  _sceneFunc(e) {
    e.beginPath(), e.arc(0, 0, this.radius(), 0, Lx.Konva.getAngle(this.angle()), this.clockwise()), e.lineTo(0, 0), e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(e) {
    this.radius(e / 2);
  }
  setHeight(e) {
    this.radius(e / 2);
  }
}
th.Wedge = br;
br.prototype.className = "Wedge";
br.prototype._centroid = !0;
br.prototype._attrsAffectingSize = ["radius"];
(0, Fx._registerNode)(br);
nh.Factory.addGetterSetter(br, "radius", 0, (0, q4.getNumberValidator)());
nh.Factory.addGetterSetter(br, "angle", 0, (0, q4.getNumberValidator)());
nh.Factory.addGetterSetter(br, "clockwise", !1);
nh.Factory.backCompat(br, {
  angleDeg: "angle",
  getAngleDeg: "getAngle",
  setAngleDeg: "setAngle"
});
var rh = {};
Object.defineProperty(rh, "__esModule", { value: !0 });
rh.Blur = void 0;
const Q2 = _e, Ix = Je, Ox = ue;
function $2() {
  this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
}
const Dx = [
  512,
  512,
  456,
  512,
  328,
  456,
  335,
  512,
  405,
  328,
  271,
  456,
  388,
  335,
  292,
  512,
  454,
  405,
  364,
  328,
  298,
  271,
  496,
  456,
  420,
  388,
  360,
  335,
  312,
  292,
  273,
  512,
  482,
  454,
  428,
  405,
  383,
  364,
  345,
  328,
  312,
  298,
  284,
  271,
  259,
  496,
  475,
  456,
  437,
  420,
  404,
  388,
  374,
  360,
  347,
  335,
  323,
  312,
  302,
  292,
  282,
  273,
  265,
  512,
  497,
  482,
  468,
  454,
  441,
  428,
  417,
  405,
  394,
  383,
  373,
  364,
  354,
  345,
  337,
  328,
  320,
  312,
  305,
  298,
  291,
  284,
  278,
  271,
  265,
  259,
  507,
  496,
  485,
  475,
  465,
  456,
  446,
  437,
  428,
  420,
  412,
  404,
  396,
  388,
  381,
  374,
  367,
  360,
  354,
  347,
  341,
  335,
  329,
  323,
  318,
  312,
  307,
  302,
  297,
  292,
  287,
  282,
  278,
  273,
  269,
  265,
  261,
  512,
  505,
  497,
  489,
  482,
  475,
  468,
  461,
  454,
  447,
  441,
  435,
  428,
  422,
  417,
  411,
  405,
  399,
  394,
  389,
  383,
  378,
  373,
  368,
  364,
  359,
  354,
  350,
  345,
  341,
  337,
  332,
  328,
  324,
  320,
  316,
  312,
  309,
  305,
  301,
  298,
  294,
  291,
  287,
  284,
  281,
  278,
  274,
  271,
  268,
  265,
  262,
  259,
  257,
  507,
  501,
  496,
  491,
  485,
  480,
  475,
  470,
  465,
  460,
  456,
  451,
  446,
  442,
  437,
  433,
  428,
  424,
  420,
  416,
  412,
  408,
  404,
  400,
  396,
  392,
  388,
  385,
  381,
  377,
  374,
  370,
  367,
  363,
  360,
  357,
  354,
  350,
  347,
  344,
  341,
  338,
  335,
  332,
  329,
  326,
  323,
  320,
  318,
  315,
  312,
  310,
  307,
  304,
  302,
  299,
  297,
  294,
  292,
  289,
  287,
  285,
  282,
  280,
  278,
  275,
  273,
  271,
  269,
  267,
  265,
  263,
  261,
  259
], Bx = [
  9,
  11,
  12,
  13,
  13,
  14,
  14,
  15,
  15,
  15,
  15,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24
];
function Ux(t, e) {
  const n = t.data, r = t.width, o = t.height;
  let a, l, c, h, d, m, S, y, _, x, P, R, w, E, g, C, T, M, L, A, B, N, D, z, q = e + e + 1, ce = r - 1, K = o - 1, he = e + 1, de = he * (he + 1) / 2, j = new $2(), re = null, b = j, $ = null, ae = null, we = Dx[e], Ee = Bx[e];
  for (c = 1; c < q; c++)
    b = b.next = new $2(), c === he && (re = b);
  for (b.next = j, S = m = 0, l = 0; l < o; l++) {
    for (C = T = M = L = y = _ = x = P = 0, R = he * (A = n[m]), w = he * (B = n[m + 1]), E = he * (N = n[m + 2]), g = he * (D = n[m + 3]), y += de * A, _ += de * B, x += de * N, P += de * D, b = j, c = 0; c < he; c++)
      b.r = A, b.g = B, b.b = N, b.a = D, b = b.next;
    for (c = 1; c < he; c++)
      h = m + ((ce < c ? ce : c) << 2), y += (b.r = A = n[h]) * (z = he - c), _ += (b.g = B = n[h + 1]) * z, x += (b.b = N = n[h + 2]) * z, P += (b.a = D = n[h + 3]) * z, C += A, T += B, M += N, L += D, b = b.next;
    for ($ = j, ae = re, a = 0; a < r; a++)
      n[m + 3] = D = P * we >> Ee, D !== 0 ? (D = 255 / D, n[m] = (y * we >> Ee) * D, n[m + 1] = (_ * we >> Ee) * D, n[m + 2] = (x * we >> Ee) * D) : n[m] = n[m + 1] = n[m + 2] = 0, y -= R, _ -= w, x -= E, P -= g, R -= $.r, w -= $.g, E -= $.b, g -= $.a, h = S + ((h = a + e + 1) < ce ? h : ce) << 2, C += $.r = n[h], T += $.g = n[h + 1], M += $.b = n[h + 2], L += $.a = n[h + 3], y += C, _ += T, x += M, P += L, $ = $.next, R += A = ae.r, w += B = ae.g, E += N = ae.b, g += D = ae.a, C -= A, T -= B, M -= N, L -= D, ae = ae.next, m += 4;
    S += r;
  }
  for (a = 0; a < r; a++) {
    for (T = M = L = C = _ = x = P = y = 0, m = a << 2, R = he * (A = n[m]), w = he * (B = n[m + 1]), E = he * (N = n[m + 2]), g = he * (D = n[m + 3]), y += de * A, _ += de * B, x += de * N, P += de * D, b = j, c = 0; c < he; c++)
      b.r = A, b.g = B, b.b = N, b.a = D, b = b.next;
    for (d = r, c = 1; c <= e; c++)
      m = d + a << 2, y += (b.r = A = n[m]) * (z = he - c), _ += (b.g = B = n[m + 1]) * z, x += (b.b = N = n[m + 2]) * z, P += (b.a = D = n[m + 3]) * z, C += A, T += B, M += N, L += D, b = b.next, c < K && (d += r);
    for (m = a, $ = j, ae = re, l = 0; l < o; l++)
      h = m << 2, n[h + 3] = D = P * we >> Ee, D > 0 ? (D = 255 / D, n[h] = (y * we >> Ee) * D, n[h + 1] = (_ * we >> Ee) * D, n[h + 2] = (x * we >> Ee) * D) : n[h] = n[h + 1] = n[h + 2] = 0, y -= R, _ -= w, x -= E, P -= g, R -= $.r, w -= $.g, E -= $.b, g -= $.a, h = a + ((h = l + he) < K ? h : K) * r << 2, y += C += $.r = n[h], _ += T += $.g = n[h + 1], x += M += $.b = n[h + 2], P += L += $.a = n[h + 3], $ = $.next, R += A = ae.r, w += B = ae.g, E += N = ae.b, g += D = ae.a, C -= A, T -= B, M -= N, L -= D, ae = ae.next, m += r;
  }
}
const Gx = function(e) {
  const n = Math.round(this.blurRadius());
  n > 0 && Ux(e, n);
};
rh.Blur = Gx;
Q2.Factory.addGetterSetter(Ix.Node, "blurRadius", 0, (0, Ox.getNumberValidator)(), Q2.Factory.afterSetFilter);
var ih = {};
Object.defineProperty(ih, "__esModule", { value: !0 });
ih.Brighten = void 0;
const q2 = _e, Hx = Je, zx = ue, bx = function(t) {
  let e = this.brightness() * 255, n = t.data, r = n.length, o;
  for (o = 0; o < r; o += 4)
    n[o] += e, n[o + 1] += e, n[o + 2] += e;
};
ih.Brighten = bx;
q2.Factory.addGetterSetter(Hx.Node, "brightness", 0, (0, zx.getNumberValidator)(), q2.Factory.afterSetFilter);
var oh = {};
Object.defineProperty(oh, "__esModule", { value: !0 });
oh.Contrast = void 0;
const Z2 = _e, Vx = Je, jx = ue, Wx = function(t) {
  const e = Math.pow((this.contrast() + 100) / 100, 2);
  let n = t.data, r = n.length, o = 150, a = 150, l = 150, c;
  for (c = 0; c < r; c += 4)
    o = n[c], a = n[c + 1], l = n[c + 2], o /= 255, o -= 0.5, o *= e, o += 0.5, o *= 255, a /= 255, a -= 0.5, a *= e, a += 0.5, a *= 255, l /= 255, l -= 0.5, l *= e, l += 0.5, l *= 255, o = o < 0 ? 0 : o > 255 ? 255 : o, a = a < 0 ? 0 : a > 255 ? 255 : a, l = l < 0 ? 0 : l > 255 ? 255 : l, n[c] = o, n[c + 1] = a, n[c + 2] = l;
};
oh.Contrast = Wx;
Z2.Factory.addGetterSetter(Vx.Node, "contrast", 0, (0, jx.getNumberValidator)(), Z2.Factory.afterSetFilter);
var sh = {};
Object.defineProperty(sh, "__esModule", { value: !0 });
sh.Emboss = void 0;
const xi = _e, ah = Je, Xx = ot, Z4 = ue, Kx = function(t) {
  let e = this.embossStrength() * 10, n = this.embossWhiteLevel() * 255, r = this.embossDirection(), o = this.embossBlend(), a = 0, l = 0, c = t.data, h = t.width, d = t.height, m = h * 4, S = d;
  switch (r) {
    case "top-left":
      a = -1, l = -1;
      break;
    case "top":
      a = -1, l = 0;
      break;
    case "top-right":
      a = -1, l = 1;
      break;
    case "right":
      a = 0, l = 1;
      break;
    case "bottom-right":
      a = 1, l = 1;
      break;
    case "bottom":
      a = 1, l = 0;
      break;
    case "bottom-left":
      a = 1, l = -1;
      break;
    case "left":
      a = 0, l = -1;
      break;
    default:
      Xx.Util.error("Unknown emboss direction: " + r);
  }
  do {
    const y = (S - 1) * m;
    let _ = a;
    S + _ < 1 && (_ = 0), S + _ > d && (_ = 0);
    const x = (S - 1 + _) * h * 4;
    let P = h;
    do {
      const R = y + (P - 1) * 4;
      let w = l;
      P + w < 1 && (w = 0), P + w > h && (w = 0);
      const E = x + (P - 1 + w) * 4, g = c[R] - c[E], C = c[R + 1] - c[E + 1], T = c[R + 2] - c[E + 2];
      let M = g;
      const L = M > 0 ? M : -M, A = C > 0 ? C : -C, B = T > 0 ? T : -T;
      if (A > L && (M = C), B > L && (M = T), M *= e, o) {
        const N = c[R] + M, D = c[R + 1] + M, z = c[R + 2] + M;
        c[R] = N > 255 ? 255 : N < 0 ? 0 : N, c[R + 1] = D > 255 ? 255 : D < 0 ? 0 : D, c[R + 2] = z > 255 ? 255 : z < 0 ? 0 : z;
      } else {
        let N = n - M;
        N < 0 ? N = 0 : N > 255 && (N = 255), c[R] = c[R + 1] = c[R + 2] = N;
      }
    } while (--P);
  } while (--S);
};
sh.Emboss = Kx;
xi.Factory.addGetterSetter(ah.Node, "embossStrength", 0.5, (0, Z4.getNumberValidator)(), xi.Factory.afterSetFilter);
xi.Factory.addGetterSetter(ah.Node, "embossWhiteLevel", 0.5, (0, Z4.getNumberValidator)(), xi.Factory.afterSetFilter);
xi.Factory.addGetterSetter(ah.Node, "embossDirection", "top-left", null, xi.Factory.afterSetFilter);
xi.Factory.addGetterSetter(ah.Node, "embossBlend", !1, null, xi.Factory.afterSetFilter);
var lh = {};
Object.defineProperty(lh, "__esModule", { value: !0 });
lh.Enhance = void 0;
const J2 = _e, Yx = Je, Qx = ue;
function Td(t, e, n, r, o) {
  let a = n - e, l = o - r, c;
  return a === 0 ? r + l / 2 : l === 0 ? r : (c = (t - e) / a, c = l * c + r, c);
}
const $x = function(t) {
  let e = t.data, n = e.length, r = e[0], o = r, a, l = e[1], c = l, h, d = e[2], m = d, S, y;
  const _ = this.enhance();
  if (_ === 0)
    return;
  for (y = 0; y < n; y += 4)
    a = e[y + 0], a < r ? r = a : a > o && (o = a), h = e[y + 1], h < l ? l = h : h > c && (c = h), S = e[y + 2], S < d ? d = S : S > m && (m = S);
  o === r && (o = 255, r = 0), c === l && (c = 255, l = 0), m === d && (m = 255, d = 0);
  let x, P, R, w, E, g, C, T, M;
  for (_ > 0 ? (P = o + _ * (255 - o), R = r - _ * (r - 0), E = c + _ * (255 - c), g = l - _ * (l - 0), T = m + _ * (255 - m), M = d - _ * (d - 0)) : (x = (o + r) * 0.5, P = o + _ * (o - x), R = r + _ * (r - x), w = (c + l) * 0.5, E = c + _ * (c - w), g = l + _ * (l - w), C = (m + d) * 0.5, T = m + _ * (m - C), M = d + _ * (d - C)), y = 0; y < n; y += 4)
    e[y + 0] = Td(e[y + 0], r, o, R, P), e[y + 1] = Td(e[y + 1], l, c, g, E), e[y + 2] = Td(e[y + 2], d, m, M, T);
};
lh.Enhance = $x;
J2.Factory.addGetterSetter(Yx.Node, "enhance", 0, (0, Qx.getNumberValidator)(), J2.Factory.afterSetFilter);
var uh = {};
Object.defineProperty(uh, "__esModule", { value: !0 });
uh.Grayscale = void 0;
const qx = function(t) {
  let e = t.data, n = e.length, r, o;
  for (r = 0; r < n; r += 4)
    o = 0.34 * e[r] + 0.5 * e[r + 1] + 0.16 * e[r + 2], e[r] = o, e[r + 1] = o, e[r + 2] = o;
};
uh.Grayscale = qx;
var ch = {};
Object.defineProperty(ch, "__esModule", { value: !0 });
ch.HSL = void 0;
const us = _e, Zp = Je, Jp = ue;
us.Factory.addGetterSetter(Zp.Node, "hue", 0, (0, Jp.getNumberValidator)(), us.Factory.afterSetFilter);
us.Factory.addGetterSetter(Zp.Node, "saturation", 0, (0, Jp.getNumberValidator)(), us.Factory.afterSetFilter);
us.Factory.addGetterSetter(Zp.Node, "luminance", 0, (0, Jp.getNumberValidator)(), us.Factory.afterSetFilter);
const Zx = function(t) {
  let e = t.data, n = e.length, r = 1, o = Math.pow(2, this.saturation()), a = Math.abs(this.hue() + 360) % 360, l = this.luminance() * 127, c;
  const h = r * o * Math.cos(a * Math.PI / 180), d = r * o * Math.sin(a * Math.PI / 180), m = 0.299 * r + 0.701 * h + 0.167 * d, S = 0.587 * r - 0.587 * h + 0.33 * d, y = 0.114 * r - 0.114 * h - 0.497 * d, _ = 0.299 * r - 0.299 * h - 0.328 * d, x = 0.587 * r + 0.413 * h + 0.035 * d, P = 0.114 * r - 0.114 * h + 0.293 * d, R = 0.299 * r - 0.3 * h + 1.25 * d, w = 0.587 * r - 0.586 * h - 1.05 * d, E = 0.114 * r + 0.886 * h - 0.2 * d;
  let g, C, T, M;
  for (c = 0; c < n; c += 4)
    g = e[c + 0], C = e[c + 1], T = e[c + 2], M = e[c + 3], e[c + 0] = m * g + S * C + y * T + l, e[c + 1] = _ * g + x * C + P * T + l, e[c + 2] = R * g + w * C + E * T + l, e[c + 3] = M;
};
ch.HSL = Zx;
var hh = {};
Object.defineProperty(hh, "__esModule", { value: !0 });
hh.HSV = void 0;
const cs = _e, e1 = Je, t1 = ue, Jx = function(t) {
  const e = t.data, n = e.length, r = Math.pow(2, this.value()), o = Math.pow(2, this.saturation()), a = Math.abs(this.hue() + 360) % 360, l = r * o * Math.cos(a * Math.PI / 180), c = r * o * Math.sin(a * Math.PI / 180), h = 0.299 * r + 0.701 * l + 0.167 * c, d = 0.587 * r - 0.587 * l + 0.33 * c, m = 0.114 * r - 0.114 * l - 0.497 * c, S = 0.299 * r - 0.299 * l - 0.328 * c, y = 0.587 * r + 0.413 * l + 0.035 * c, _ = 0.114 * r - 0.114 * l + 0.293 * c, x = 0.299 * r - 0.3 * l + 1.25 * c, P = 0.587 * r - 0.586 * l - 1.05 * c, R = 0.114 * r + 0.886 * l - 0.2 * c;
  let w, E, g, C;
  for (let T = 0; T < n; T += 4)
    w = e[T + 0], E = e[T + 1], g = e[T + 2], C = e[T + 3], e[T + 0] = h * w + d * E + m * g, e[T + 1] = S * w + y * E + _ * g, e[T + 2] = x * w + P * E + R * g, e[T + 3] = C;
};
hh.HSV = Jx;
cs.Factory.addGetterSetter(e1.Node, "hue", 0, (0, t1.getNumberValidator)(), cs.Factory.afterSetFilter);
cs.Factory.addGetterSetter(e1.Node, "saturation", 0, (0, t1.getNumberValidator)(), cs.Factory.afterSetFilter);
cs.Factory.addGetterSetter(e1.Node, "value", 0, (0, t1.getNumberValidator)(), cs.Factory.afterSetFilter);
var fh = {};
Object.defineProperty(fh, "__esModule", { value: !0 });
fh.Invert = void 0;
const eE = function(t) {
  let e = t.data, n = e.length, r;
  for (r = 0; r < n; r += 4)
    e[r] = 255 - e[r], e[r + 1] = 255 - e[r + 1], e[r + 2] = 255 - e[r + 2];
};
fh.Invert = eE;
var dh = {};
Object.defineProperty(dh, "__esModule", { value: !0 });
dh.Kaleidoscope = void 0;
const rc = _e, J4 = Je, ev = ot, e5 = ue, tE = function(t, e, n) {
  let r = t.data, o = e.data, a = t.width, l = t.height, c = n.polarCenterX || a / 2, h = n.polarCenterY || l / 2, d, m, S, y = 0, _ = 0, x = 0, P = 0, R, w = Math.sqrt(c * c + h * h);
  m = a - c, S = l - h, R = Math.sqrt(m * m + S * S), w = R > w ? R : w;
  let E = l, g = a, C, T, M = 360 / g * Math.PI / 180, L, A;
  for (T = 0; T < g; T += 1)
    for (L = Math.sin(T * M), A = Math.cos(T * M), C = 0; C < E; C += 1)
      m = Math.floor(c + w * C / E * A), S = Math.floor(h + w * C / E * L), d = (S * a + m) * 4, y = r[d + 0], _ = r[d + 1], x = r[d + 2], P = r[d + 3], d = (T + C * a) * 4, o[d + 0] = y, o[d + 1] = _, o[d + 2] = x, o[d + 3] = P;
}, nE = function(t, e, n) {
  let r = t.data, o = e.data, a = t.width, l = t.height, c = n.polarCenterX || a / 2, h = n.polarCenterY || l / 2, d, m, S, y, _, x = 0, P = 0, R = 0, w = 0, E, g = Math.sqrt(c * c + h * h);
  m = a - c, S = l - h, E = Math.sqrt(m * m + S * S), g = E > g ? E : g;
  let C = l, T = a, M, L, A = 0, B, N;
  for (m = 0; m < a; m += 1)
    for (S = 0; S < l; S += 1)
      y = m - c, _ = S - h, M = Math.sqrt(y * y + _ * _) * C / g, L = (Math.atan2(_, y) * 180 / Math.PI + 360 + A) % 360, L = L * T / 360, B = Math.floor(L), N = Math.floor(M), d = (N * a + B) * 4, x = r[d + 0], P = r[d + 1], R = r[d + 2], w = r[d + 3], d = (S * a + m) * 4, o[d + 0] = x, o[d + 1] = P, o[d + 2] = R, o[d + 3] = w;
}, rE = function(t) {
  const e = t.width, n = t.height;
  let r, o, a, l, c, h, d, m, S, y, _ = Math.round(this.kaleidoscopePower());
  const x = Math.round(this.kaleidoscopeAngle()), P = Math.floor(e * (x % 360) / 360);
  if (_ < 1)
    return;
  const R = ev.Util.createCanvasElement();
  R.width = e, R.height = n;
  const w = R.getContext("2d").getImageData(0, 0, e, n);
  ev.Util.releaseCanvas(R), tE(t, w, {
    polarCenterX: e / 2,
    polarCenterY: n / 2
  });
  let E = e / Math.pow(2, _);
  for (; E <= 8; )
    E = E * 2, _ -= 1;
  E = Math.ceil(E);
  let g = E, C = 0, T = g, M = 1;
  for (P + E > e && (C = g, T = 0, M = -1), o = 0; o < n; o += 1)
    for (r = C; r !== T; r += M)
      a = Math.round(r + P) % e, S = (e * o + a) * 4, c = w.data[S + 0], h = w.data[S + 1], d = w.data[S + 2], m = w.data[S + 3], y = (e * o + r) * 4, w.data[y + 0] = c, w.data[y + 1] = h, w.data[y + 2] = d, w.data[y + 3] = m;
  for (o = 0; o < n; o += 1)
    for (g = Math.floor(E), l = 0; l < _; l += 1) {
      for (r = 0; r < g + 1; r += 1)
        S = (e * o + r) * 4, c = w.data[S + 0], h = w.data[S + 1], d = w.data[S + 2], m = w.data[S + 3], y = (e * o + g * 2 - r - 1) * 4, w.data[y + 0] = c, w.data[y + 1] = h, w.data[y + 2] = d, w.data[y + 3] = m;
      g *= 2;
    }
  nE(w, t, {});
};
dh.Kaleidoscope = rE;
rc.Factory.addGetterSetter(J4.Node, "kaleidoscopePower", 2, (0, e5.getNumberValidator)(), rc.Factory.afterSetFilter);
rc.Factory.addGetterSetter(J4.Node, "kaleidoscopeAngle", 0, (0, e5.getNumberValidator)(), rc.Factory.afterSetFilter);
var ph = {};
Object.defineProperty(ph, "__esModule", { value: !0 });
ph.Mask = void 0;
const tv = _e, iE = Je, oE = ue;
function du(t, e, n) {
  let r = (n * t.width + e) * 4;
  const o = [];
  return o.push(t.data[r++], t.data[r++], t.data[r++], t.data[r++]), o;
}
function ea(t, e) {
  return Math.sqrt(Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2) + Math.pow(t[2] - e[2], 2));
}
function sE(t) {
  const e = [0, 0, 0];
  for (let n = 0; n < t.length; n++)
    e[0] += t[n][0], e[1] += t[n][1], e[2] += t[n][2];
  return e[0] /= t.length, e[1] /= t.length, e[2] /= t.length, e;
}
function aE(t, e) {
  const n = du(t, 0, 0), r = du(t, t.width - 1, 0), o = du(t, 0, t.height - 1), a = du(t, t.width - 1, t.height - 1), l = e || 10;
  if (ea(n, r) < l && ea(r, a) < l && ea(a, o) < l && ea(o, n) < l) {
    const c = sE([r, n, a, o]), h = [];
    for (let d = 0; d < t.width * t.height; d++) {
      const m = ea(c, [
        t.data[d * 4],
        t.data[d * 4 + 1],
        t.data[d * 4 + 2]
      ]);
      h[d] = m < l ? 0 : 255;
    }
    return h;
  }
}
function lE(t, e) {
  for (let n = 0; n < t.width * t.height; n++)
    t.data[4 * n + 3] = e[n];
}
function uE(t, e, n) {
  const r = [1, 1, 1, 1, 0, 1, 1, 1, 1], o = Math.round(Math.sqrt(r.length)), a = Math.floor(o / 2), l = [];
  for (let c = 0; c < n; c++)
    for (let h = 0; h < e; h++) {
      const d = c * e + h;
      let m = 0;
      for (let S = 0; S < o; S++)
        for (let y = 0; y < o; y++) {
          const _ = c + S - a, x = h + y - a;
          if (_ >= 0 && _ < n && x >= 0 && x < e) {
            const P = _ * e + x, R = r[S * o + y];
            m += t[P] * R;
          }
        }
      l[d] = m === 255 * 8 ? 255 : 0;
    }
  return l;
}
function cE(t, e, n) {
  const r = [1, 1, 1, 1, 1, 1, 1, 1, 1], o = Math.round(Math.sqrt(r.length)), a = Math.floor(o / 2), l = [];
  for (let c = 0; c < n; c++)
    for (let h = 0; h < e; h++) {
      const d = c * e + h;
      let m = 0;
      for (let S = 0; S < o; S++)
        for (let y = 0; y < o; y++) {
          const _ = c + S - a, x = h + y - a;
          if (_ >= 0 && _ < n && x >= 0 && x < e) {
            const P = _ * e + x, R = r[S * o + y];
            m += t[P] * R;
          }
        }
      l[d] = m >= 255 * 4 ? 255 : 0;
    }
  return l;
}
function hE(t, e, n) {
  const r = [0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111], o = Math.round(Math.sqrt(r.length)), a = Math.floor(o / 2), l = [];
  for (let c = 0; c < n; c++)
    for (let h = 0; h < e; h++) {
      const d = c * e + h;
      let m = 0;
      for (let S = 0; S < o; S++)
        for (let y = 0; y < o; y++) {
          const _ = c + S - a, x = h + y - a;
          if (_ >= 0 && _ < n && x >= 0 && x < e) {
            const P = _ * e + x, R = r[S * o + y];
            m += t[P] * R;
          }
        }
      l[d] = m;
    }
  return l;
}
const fE = function(t) {
  let e = this.threshold(), n = aE(t, e);
  return n && (n = uE(n, t.width, t.height), n = cE(n, t.width, t.height), n = hE(n, t.width, t.height), lE(t, n)), t;
};
ph.Mask = fE;
tv.Factory.addGetterSetter(iE.Node, "threshold", 0, (0, oE.getNumberValidator)(), tv.Factory.afterSetFilter);
var gh = {};
Object.defineProperty(gh, "__esModule", { value: !0 });
gh.Noise = void 0;
const nv = _e, dE = Je, pE = ue, gE = function(t) {
  const e = this.noise() * 255, n = t.data, r = n.length, o = e / 2;
  for (let a = 0; a < r; a += 4)
    n[a + 0] += o - 2 * o * Math.random(), n[a + 1] += o - 2 * o * Math.random(), n[a + 2] += o - 2 * o * Math.random();
};
gh.Noise = gE;
nv.Factory.addGetterSetter(dE.Node, "noise", 0.2, (0, pE.getNumberValidator)(), nv.Factory.afterSetFilter);
var mh = {};
Object.defineProperty(mh, "__esModule", { value: !0 });
mh.Pixelate = void 0;
const rv = _e, mE = ot, vE = Je, yE = ue, _E = function(t) {
  let e = Math.ceil(this.pixelSize()), n = t.width, r = t.height, o, a, l, c, h, d, m, S = Math.ceil(n / e), y = Math.ceil(r / e), _, x, P, R, w, E, g, C = t.data;
  if (e <= 0) {
    mE.Util.error("pixelSize value can not be <= 0");
    return;
  }
  for (w = 0; w < S; w += 1)
    for (E = 0; E < y; E += 1) {
      for (c = 0, h = 0, d = 0, m = 0, _ = w * e, x = _ + e, P = E * e, R = P + e, g = 0, o = _; o < x; o += 1)
        if (!(o >= n))
          for (a = P; a < R; a += 1)
            a >= r || (l = (n * a + o) * 4, c += C[l + 0], h += C[l + 1], d += C[l + 2], m += C[l + 3], g += 1);
      for (c = c / g, h = h / g, d = d / g, m = m / g, o = _; o < x; o += 1)
        if (!(o >= n))
          for (a = P; a < R; a += 1)
            a >= r || (l = (n * a + o) * 4, C[l + 0] = c, C[l + 1] = h, C[l + 2] = d, C[l + 3] = m);
    }
};
mh.Pixelate = _E;
rv.Factory.addGetterSetter(vE.Node, "pixelSize", 8, (0, yE.getNumberValidator)(), rv.Factory.afterSetFilter);
var vh = {};
Object.defineProperty(vh, "__esModule", { value: !0 });
vh.Posterize = void 0;
const iv = _e, SE = Je, wE = ue, xE = function(t) {
  let e = Math.round(this.levels() * 254) + 1, n = t.data, r = n.length, o = 255 / e, a;
  for (a = 0; a < r; a += 1)
    n[a] = Math.floor(n[a] / o) * o;
};
vh.Posterize = xE;
iv.Factory.addGetterSetter(SE.Node, "levels", 0.5, (0, wE.getNumberValidator)(), iv.Factory.afterSetFilter);
var yh = {};
Object.defineProperty(yh, "__esModule", { value: !0 });
yh.RGB = void 0;
const ic = _e, n1 = Je, EE = ue, CE = function(t) {
  let e = t.data, n = e.length, r = this.red(), o = this.green(), a = this.blue(), l, c;
  for (l = 0; l < n; l += 4)
    c = (0.34 * e[l] + 0.5 * e[l + 1] + 0.16 * e[l + 2]) / 255, e[l] = c * r, e[l + 1] = c * o, e[l + 2] = c * a, e[l + 3] = e[l + 3];
};
yh.RGB = CE;
ic.Factory.addGetterSetter(n1.Node, "red", 0, function(t) {
  return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
});
ic.Factory.addGetterSetter(n1.Node, "green", 0, function(t) {
  return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
});
ic.Factory.addGetterSetter(n1.Node, "blue", 0, EE.RGBComponent, ic.Factory.afterSetFilter);
var _h = {};
Object.defineProperty(_h, "__esModule", { value: !0 });
_h.RGBA = void 0;
const Da = _e, Sh = Je, PE = ue, TE = function(t) {
  const e = t.data, n = e.length, r = this.red(), o = this.green(), a = this.blue(), l = this.alpha();
  for (let c = 0; c < n; c += 4) {
    const h = 1 - l;
    e[c] = r * l + e[c] * h, e[c + 1] = o * l + e[c + 1] * h, e[c + 2] = a * l + e[c + 2] * h;
  }
};
_h.RGBA = TE;
Da.Factory.addGetterSetter(Sh.Node, "red", 0, function(t) {
  return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
});
Da.Factory.addGetterSetter(Sh.Node, "green", 0, function(t) {
  return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
});
Da.Factory.addGetterSetter(Sh.Node, "blue", 0, PE.RGBComponent, Da.Factory.afterSetFilter);
Da.Factory.addGetterSetter(Sh.Node, "alpha", 1, function(t) {
  return this._filterUpToDate = !1, t > 1 ? 1 : t < 0 ? 0 : t;
});
var wh = {};
Object.defineProperty(wh, "__esModule", { value: !0 });
wh.Sepia = void 0;
const kE = function(t) {
  let e = t.data, n = e.length, r, o, a, l;
  for (r = 0; r < n; r += 4)
    o = e[r + 0], a = e[r + 1], l = e[r + 2], e[r + 0] = Math.min(255, o * 0.393 + a * 0.769 + l * 0.189), e[r + 1] = Math.min(255, o * 0.349 + a * 0.686 + l * 0.168), e[r + 2] = Math.min(255, o * 0.272 + a * 0.534 + l * 0.131);
};
wh.Sepia = kE;
var xh = {};
Object.defineProperty(xh, "__esModule", { value: !0 });
xh.Solarize = void 0;
const NE = function(t) {
  const e = t.data, n = t.width, r = t.height, o = n * 4;
  let a = r;
  do {
    const l = (a - 1) * o;
    let c = n;
    do {
      const h = l + (c - 1) * 4;
      let d = e[h], m = e[h + 1], S = e[h + 2];
      d > 127 && (d = 255 - d), m > 127 && (m = 255 - m), S > 127 && (S = 255 - S), e[h] = d, e[h + 1] = m, e[h + 2] = S;
    } while (--c);
  } while (--a);
};
xh.Solarize = NE;
var Eh = {};
Object.defineProperty(Eh, "__esModule", { value: !0 });
Eh.Threshold = void 0;
const ov = _e, RE = Je, AE = ue, ME = function(t) {
  const e = this.threshold() * 255, n = t.data, r = n.length;
  for (let o = 0; o < r; o += 1)
    n[o] = n[o] < e ? 0 : 255;
};
Eh.Threshold = ME;
ov.Factory.addGetterSetter(RE.Node, "threshold", 0.5, (0, AE.getNumberValidator)(), ov.Factory.afterSetFilter);
Object.defineProperty(Lc, "__esModule", { value: !0 });
Lc.Konva = void 0;
const sv = ec, LE = Uc, FE = zc, IE = jc, OE = Wc, DE = Xc, av = ls, BE = Qa, UE = _s, GE = qa, HE = Qc, zE = $c, bE = qc, VE = Zc, jE = ws, WE = Jc, XE = eh, KE = th, YE = rh, QE = ih, $E = oh, qE = sh, ZE = lh, JE = uh, eC = ch, tC = hh, nC = fh, rC = dh, iC = ph, oC = gh, sC = mh, aC = vh, lC = yh, uC = _h, cC = wh, hC = xh, fC = Eh;
Lc.Konva = sv.Konva.Util._assign(sv.Konva, {
  Arc: LE.Arc,
  Arrow: FE.Arrow,
  Circle: IE.Circle,
  Ellipse: OE.Ellipse,
  Image: DE.Image,
  Label: av.Label,
  Tag: av.Tag,
  Line: BE.Line,
  Path: UE.Path,
  Rect: GE.Rect,
  RegularPolygon: HE.RegularPolygon,
  Ring: zE.Ring,
  Sprite: bE.Sprite,
  Star: VE.Star,
  Text: jE.Text,
  TextPath: WE.TextPath,
  Transformer: XE.Transformer,
  Wedge: KE.Wedge,
  Filters: {
    Blur: YE.Blur,
    Brighten: QE.Brighten,
    Contrast: $E.Contrast,
    Emboss: qE.Emboss,
    Enhance: ZE.Enhance,
    Grayscale: JE.Grayscale,
    HSL: eC.HSL,
    HSV: tC.HSV,
    Invert: nC.Invert,
    Kaleidoscope: rC.Kaleidoscope,
    Mask: iC.Mask,
    Noise: oC.Noise,
    Pixelate: sC.Pixelate,
    Posterize: aC.Posterize,
    RGB: lC.RGB,
    RGBA: uC.RGBA,
    Sepia: cC.Sepia,
    Solarize: hC.Solarize,
    Threshold: fC.Threshold
  }
});
var dC = _4.exports;
Object.defineProperty(dC, "__esModule", { value: !0 });
const pC = Lc;
_4.exports = pC.Konva;
var U0 = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Konva = void 0;
  var n = ec;
  Object.defineProperty(e, "Konva", { enumerable: !0, get: function() {
    return n.Konva;
  } });
  const r = ec;
  t.exports = r.Konva;
})(U0, U0.exports);
var gC = U0.exports;
const Ba = /* @__PURE__ */ Ua(gC);
var t5 = { exports: {} };
/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mC = function(e) {
  var n = {}, r = ne, o = aa, a = Object.assign;
  function l(i) {
    for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, u = 1; u < arguments.length; u++) s += "&args[]=" + encodeURIComponent(arguments[u]);
    return "Minified React error #" + i + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, h = Symbol.for("react.element"), d = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), x = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), T = Symbol.iterator;
  function M(i) {
    return i === null || typeof i != "object" ? null : (i = T && i[T] || i["@@iterator"], typeof i == "function" ? i : null);
  }
  function L(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case m:
        return "Fragment";
      case d:
        return "Portal";
      case y:
        return "Profiler";
      case S:
        return "StrictMode";
      case R:
        return "Suspense";
      case w:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case x:
        return (i.displayName || "Context") + ".Consumer";
      case _:
        return (i._context.displayName || "Context") + ".Provider";
      case P:
        var s = i.render;
        return i = i.displayName, i || (i = s.displayName || s.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case E:
        return s = i.displayName || null, s !== null ? s : L(i.type) || "Memo";
      case g:
        s = i._payload, i = i._init;
        try {
          return L(i(s));
        } catch {
        }
    }
    return null;
  }
  function A(i) {
    var s = i.type;
    switch (i.tag) {
      case 24:
        return "Cache";
      case 9:
        return (s.displayName || "Context") + ".Consumer";
      case 10:
        return (s._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return i = s.render, i = i.displayName || i.name || "", s.displayName || (i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return s;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return L(s);
      case 8:
        return s === S ? "StrictMode" : "Mode";
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
        if (typeof s == "function") return s.displayName || s.name || null;
        if (typeof s == "string") return s;
    }
    return null;
  }
  function B(i) {
    var s = i, u = i;
    if (i.alternate) for (; s.return; ) s = s.return;
    else {
      i = s;
      do
        s = i, s.flags & 4098 && (u = s.return), i = s.return;
      while (i);
    }
    return s.tag === 3 ? u : null;
  }
  function N(i) {
    if (B(i) !== i) throw Error(l(188));
  }
  function D(i) {
    var s = i.alternate;
    if (!s) {
      if (s = B(i), s === null) throw Error(l(188));
      return s !== i ? null : i;
    }
    for (var u = i, f = s; ; ) {
      var p = u.return;
      if (p === null) break;
      var v = p.alternate;
      if (v === null) {
        if (f = p.return, f !== null) {
          u = f;
          continue;
        }
        break;
      }
      if (p.child === v.child) {
        for (v = p.child; v; ) {
          if (v === u) return N(p), i;
          if (v === f) return N(p), s;
          v = v.sibling;
        }
        throw Error(l(188));
      }
      if (u.return !== f.return) u = p, f = v;
      else {
        for (var k = !1, F = p.child; F; ) {
          if (F === u) {
            k = !0, u = p, f = v;
            break;
          }
          if (F === f) {
            k = !0, f = p, u = v;
            break;
          }
          F = F.sibling;
        }
        if (!k) {
          for (F = v.child; F; ) {
            if (F === u) {
              k = !0, u = v, f = p;
              break;
            }
            if (F === f) {
              k = !0, f = v, u = p;
              break;
            }
            F = F.sibling;
          }
          if (!k) throw Error(l(189));
        }
      }
      if (u.alternate !== f) throw Error(l(190));
    }
    if (u.tag !== 3) throw Error(l(188));
    return u.stateNode.current === u ? i : s;
  }
  function z(i) {
    return i = D(i), i !== null ? q(i) : null;
  }
  function q(i) {
    if (i.tag === 5 || i.tag === 6) return i;
    for (i = i.child; i !== null; ) {
      var s = q(i);
      if (s !== null) return s;
      i = i.sibling;
    }
    return null;
  }
  function ce(i) {
    if (i.tag === 5 || i.tag === 6) return i;
    for (i = i.child; i !== null; ) {
      if (i.tag !== 4) {
        var s = ce(i);
        if (s !== null) return s;
      }
      i = i.sibling;
    }
    return null;
  }
  var K = Array.isArray, he = e.getPublicInstance, de = e.getRootHostContext, j = e.getChildHostContext, re = e.prepareForCommit, b = e.resetAfterCommit, $ = e.createInstance, ae = e.appendInitialChild, we = e.finalizeInitialChildren, Ee = e.prepareUpdate, ft = e.shouldSetTextContent, Ve = e.createTextInstance, I = e.scheduleTimeout, V = e.cancelTimeout, ie = e.noTimeout, Fe = e.isPrimaryRenderer, me = e.supportsMutation, He = e.supportsPersistence, je = e.supportsHydration, Zn = e.getInstanceFromNode, Be = e.preparePortalMount, Vr = e.getCurrentEventPriority, On = e.detachDeletedInstance, jr = e.supportsMicrotasks, u5 = e.scheduleMicrotask, xs = e.supportsTestSelectors, c5 = e.findFiberRoot, h5 = e.getBoundingRect, f5 = e.getTextContent, Es = e.isHiddenSubtree, d5 = e.matchAccessibilityRole, p5 = e.setFocusIfFocusable, g5 = e.setupIntersectionObserver, m5 = e.appendChild, v5 = e.appendChildToContainer, y5 = e.commitTextUpdate, _5 = e.commitMount, S5 = e.commitUpdate, w5 = e.insertBefore, x5 = e.insertInContainerBefore, E5 = e.removeChild, C5 = e.removeChildFromContainer, o1 = e.resetTextContent, P5 = e.hideInstance, T5 = e.hideTextInstance, k5 = e.unhideInstance, N5 = e.unhideTextInstance, R5 = e.clearContainer, A5 = e.cloneInstance, s1 = e.createContainerChildSet, a1 = e.appendChildToContainerChildSet, M5 = e.finalizeContainerChildren, Ph = e.replaceContainerChildren, l1 = e.cloneHiddenInstance, u1 = e.cloneHiddenTextInstance, L5 = e.canHydrateInstance, F5 = e.canHydrateTextInstance, I5 = e.canHydrateSuspenseInstance, c1 = e.isSuspenseInstancePending, Th = e.isSuspenseInstanceFallback, O5 = e.getSuspenseInstanceFallbackErrorDetails, D5 = e.registerSuspenseInstanceRetry, Za = e.getNextHydratableSibling, B5 = e.getFirstHydratableChild, U5 = e.getFirstHydratableChildWithinContainer, G5 = e.getFirstHydratableChildWithinSuspenseInstance, H5 = e.hydrateInstance, z5 = e.hydrateTextInstance, b5 = e.hydrateSuspenseInstance, V5 = e.getNextHydratableInstanceAfterSuspenseInstance, j5 = e.commitHydratedContainer, W5 = e.commitHydratedSuspenseInstance, X5 = e.clearSuspenseBoundary, K5 = e.clearSuspenseBoundaryFromContainer, Y5 = e.shouldDeleteUnhydratedTailInstances, Q5 = e.didNotMatchHydratedContainerTextInstance, $5 = e.didNotMatchHydratedTextInstance, kh;
  function Cs(i) {
    if (kh === void 0) try {
      throw Error();
    } catch (u) {
      var s = u.stack.trim().match(/\n( *(at )?)/);
      kh = s && s[1] || "";
    }
    return `
` + kh + i;
  }
  var Nh = !1;
  function Rh(i, s) {
    if (!i || Nh) return "";
    Nh = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (s) if (s = function() {
        throw Error();
      }, Object.defineProperty(s.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(s, []);
        } catch (X) {
          var f = X;
        }
        Reflect.construct(i, [], s);
      } else {
        try {
          s.call();
        } catch (X) {
          f = X;
        }
        i.call(s.prototype);
      }
      else {
        try {
          throw Error();
        } catch (X) {
          f = X;
        }
        i();
      }
    } catch (X) {
      if (X && f && typeof X.stack == "string") {
        for (var p = X.stack.split(`
`), v = f.stack.split(`
`), k = p.length - 1, F = v.length - 1; 1 <= k && 0 <= F && p[k] !== v[F]; ) F--;
        for (; 1 <= k && 0 <= F; k--, F--) if (p[k] !== v[F]) {
          if (k !== 1 || F !== 1)
            do
              if (k--, F--, 0 > F || p[k] !== v[F]) {
                var G = `
` + p[k].replace(" at new ", " at ");
                return i.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", i.displayName)), G;
              }
            while (1 <= k && 0 <= F);
          break;
        }
      }
    } finally {
      Nh = !1, Error.prepareStackTrace = u;
    }
    return (i = i ? i.displayName || i.name : "") ? Cs(i) : "";
  }
  var q5 = Object.prototype.hasOwnProperty, Ah = [], vo = -1;
  function Wr(i) {
    return { current: i };
  }
  function We(i) {
    0 > vo || (i.current = Ah[vo], Ah[vo] = null, vo--);
  }
  function ze(i, s) {
    vo++, Ah[vo] = i.current, i.current = s;
  }
  var Xr = {}, Ot = Wr(Xr), qt = Wr(!1), Ii = Xr;
  function yo(i, s) {
    var u = i.type.contextTypes;
    if (!u) return Xr;
    var f = i.stateNode;
    if (f && f.__reactInternalMemoizedUnmaskedChildContext === s) return f.__reactInternalMemoizedMaskedChildContext;
    var p = {}, v;
    for (v in u) p[v] = s[v];
    return f && (i = i.stateNode, i.__reactInternalMemoizedUnmaskedChildContext = s, i.__reactInternalMemoizedMaskedChildContext = p), p;
  }
  function Zt(i) {
    return i = i.childContextTypes, i != null;
  }
  function Ja() {
    We(qt), We(Ot);
  }
  function h1(i, s, u) {
    if (Ot.current !== Xr) throw Error(l(168));
    ze(Ot, s), ze(qt, u);
  }
  function f1(i, s, u) {
    var f = i.stateNode;
    if (s = s.childContextTypes, typeof f.getChildContext != "function") return u;
    f = f.getChildContext();
    for (var p in f) if (!(p in s)) throw Error(l(108, A(i) || "Unknown", p));
    return a({}, u, f);
  }
  function el(i) {
    return i = (i = i.stateNode) && i.__reactInternalMemoizedMergedChildContext || Xr, Ii = Ot.current, ze(Ot, i), ze(qt, qt.current), !0;
  }
  function d1(i, s, u) {
    var f = i.stateNode;
    if (!f) throw Error(l(169));
    u ? (i = f1(i, s, Ii), f.__reactInternalMemoizedMergedChildContext = i, We(qt), We(Ot), ze(Ot, i)) : We(qt), ze(qt, u);
  }
  var Dn = Math.clz32 ? Math.clz32 : e6, Z5 = Math.log, J5 = Math.LN2;
  function e6(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (Z5(i) / J5 | 0) | 0;
  }
  var tl = 64, nl = 4194304;
  function Ps(i) {
    switch (i & -i) {
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
        return i & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return i & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return i;
    }
  }
  function rl(i, s) {
    var u = i.pendingLanes;
    if (u === 0) return 0;
    var f = 0, p = i.suspendedLanes, v = i.pingedLanes, k = u & 268435455;
    if (k !== 0) {
      var F = k & ~p;
      F !== 0 ? f = Ps(F) : (v &= k, v !== 0 && (f = Ps(v)));
    } else k = u & ~p, k !== 0 ? f = Ps(k) : v !== 0 && (f = Ps(v));
    if (f === 0) return 0;
    if (s !== 0 && s !== f && !(s & p) && (p = f & -f, v = s & -s, p >= v || p === 16 && (v & 4194240) !== 0)) return s;
    if (f & 4 && (f |= u & 16), s = i.entangledLanes, s !== 0) for (i = i.entanglements, s &= f; 0 < s; ) u = 31 - Dn(s), p = 1 << u, f |= i[u], s &= ~p;
    return f;
  }
  function t6(i, s) {
    switch (i) {
      case 1:
      case 2:
      case 4:
        return s + 250;
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
        return s + 5e3;
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
  function n6(i, s) {
    for (var u = i.suspendedLanes, f = i.pingedLanes, p = i.expirationTimes, v = i.pendingLanes; 0 < v; ) {
      var k = 31 - Dn(v), F = 1 << k, G = p[k];
      G === -1 ? (!(F & u) || F & f) && (p[k] = t6(F, s)) : G <= s && (i.expiredLanes |= F), v &= ~F;
    }
  }
  function Mh(i) {
    return i = i.pendingLanes & -1073741825, i !== 0 ? i : i & 1073741824 ? 1073741824 : 0;
  }
  function p1() {
    var i = tl;
    return tl <<= 1, !(tl & 4194240) && (tl = 64), i;
  }
  function Lh(i) {
    for (var s = [], u = 0; 31 > u; u++) s.push(i);
    return s;
  }
  function Ts(i, s, u) {
    i.pendingLanes |= s, s !== 536870912 && (i.suspendedLanes = 0, i.pingedLanes = 0), i = i.eventTimes, s = 31 - Dn(s), i[s] = u;
  }
  function r6(i, s) {
    var u = i.pendingLanes & ~s;
    i.pendingLanes = s, i.suspendedLanes = 0, i.pingedLanes = 0, i.expiredLanes &= s, i.mutableReadLanes &= s, i.entangledLanes &= s, s = i.entanglements;
    var f = i.eventTimes;
    for (i = i.expirationTimes; 0 < u; ) {
      var p = 31 - Dn(u), v = 1 << p;
      s[p] = 0, f[p] = -1, i[p] = -1, u &= ~v;
    }
  }
  function Fh(i, s) {
    var u = i.entangledLanes |= s;
    for (i = i.entanglements; u; ) {
      var f = 31 - Dn(u), p = 1 << f;
      p & s | i[f] & s && (i[f] |= s), u &= ~p;
    }
  }
  var Re = 0;
  function g1(i) {
    return i &= -i, 1 < i ? 4 < i ? i & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Ih = o.unstable_scheduleCallback, m1 = o.unstable_cancelCallback, i6 = o.unstable_shouldYield, o6 = o.unstable_requestPaint, Et = o.unstable_now, Oh = o.unstable_ImmediatePriority, s6 = o.unstable_UserBlockingPriority, Dh = o.unstable_NormalPriority, a6 = o.unstable_IdlePriority, il = null, Jn = null;
  function l6(i) {
    if (Jn && typeof Jn.onCommitFiberRoot == "function") try {
      Jn.onCommitFiberRoot(il, i, void 0, (i.current.flags & 128) === 128);
    } catch {
    }
  }
  function u6(i, s) {
    return i === s && (i !== 0 || 1 / i === 1 / s) || i !== i && s !== s;
  }
  var Bn = typeof Object.is == "function" ? Object.is : u6, _r = null, ol = !1, Bh = !1;
  function v1(i) {
    _r === null ? _r = [i] : _r.push(i);
  }
  function c6(i) {
    ol = !0, v1(i);
  }
  function er() {
    if (!Bh && _r !== null) {
      Bh = !0;
      var i = 0, s = Re;
      try {
        var u = _r;
        for (Re = 1; i < u.length; i++) {
          var f = u[i];
          do
            f = f(!0);
          while (f !== null);
        }
        _r = null, ol = !1;
      } catch (p) {
        throw _r !== null && (_r = _r.slice(i + 1)), Ih(Oh, er), p;
      } finally {
        Re = s, Bh = !1;
      }
    }
    return null;
  }
  var _o = [], So = 0, sl = null, al = 0, yn = [], _n = 0, Oi = null, Sr = 1, wr = "";
  function Di(i, s) {
    _o[So++] = al, _o[So++] = sl, sl = i, al = s;
  }
  function y1(i, s, u) {
    yn[_n++] = Sr, yn[_n++] = wr, yn[_n++] = Oi, Oi = i;
    var f = Sr;
    i = wr;
    var p = 32 - Dn(f) - 1;
    f &= ~(1 << p), u += 1;
    var v = 32 - Dn(s) + p;
    if (30 < v) {
      var k = p - p % 5;
      v = (f & (1 << k) - 1).toString(32), f >>= k, p -= k, Sr = 1 << 32 - Dn(s) + p | u << p | f, wr = v + i;
    } else Sr = 1 << v | u << p | f, wr = i;
  }
  function Uh(i) {
    i.return !== null && (Di(i, 1), y1(i, 1, 0));
  }
  function Gh(i) {
    for (; i === sl; ) sl = _o[--So], _o[So] = null, al = _o[--So], _o[So] = null;
    for (; i === Oi; ) Oi = yn[--_n], yn[_n] = null, wr = yn[--_n], yn[_n] = null, Sr = yn[--_n], yn[_n] = null;
  }
  var un = null, Sn = null, $e = !1, ks = !1, Un = null;
  function _1(i, s) {
    var u = Pn(5, null, null, 0);
    u.elementType = "DELETED", u.stateNode = s, u.return = i, s = i.deletions, s === null ? (i.deletions = [u], i.flags |= 16) : s.push(u);
  }
  function S1(i, s) {
    switch (i.tag) {
      case 5:
        return s = L5(s, i.type, i.pendingProps), s !== null ? (i.stateNode = s, un = i, Sn = B5(s), !0) : !1;
      case 6:
        return s = F5(s, i.pendingProps), s !== null ? (i.stateNode = s, un = i, Sn = null, !0) : !1;
      case 13:
        if (s = I5(s), s !== null) {
          var u = Oi !== null ? { id: Sr, overflow: wr } : null;
          return i.memoizedState = { dehydrated: s, treeContext: u, retryLane: 1073741824 }, u = Pn(18, null, null, 0), u.stateNode = s, u.return = i, i.child = u, un = i, Sn = null, !0;
        }
        return !1;
      default:
        return !1;
    }
  }
  function Hh(i) {
    return (i.mode & 1) !== 0 && (i.flags & 128) === 0;
  }
  function zh(i) {
    if ($e) {
      var s = Sn;
      if (s) {
        var u = s;
        if (!S1(i, s)) {
          if (Hh(i)) throw Error(l(418));
          s = Za(u);
          var f = un;
          s && S1(i, s) ? _1(f, u) : (i.flags = i.flags & -4097 | 2, $e = !1, un = i);
        }
      } else {
        if (Hh(i)) throw Error(l(418));
        i.flags = i.flags & -4097 | 2, $e = !1, un = i;
      }
    }
  }
  function w1(i) {
    for (i = i.return; i !== null && i.tag !== 5 && i.tag !== 3 && i.tag !== 13; ) i = i.return;
    un = i;
  }
  function ll(i) {
    if (!je || i !== un) return !1;
    if (!$e) return w1(i), $e = !0, !1;
    if (i.tag !== 3 && (i.tag !== 5 || Y5(i.type) && !ft(i.type, i.memoizedProps))) {
      var s = Sn;
      if (s) {
        if (Hh(i)) throw x1(), Error(l(418));
        for (; s; ) _1(i, s), s = Za(s);
      }
    }
    if (w1(i), i.tag === 13) {
      if (!je) throw Error(l(316));
      if (i = i.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(l(317));
      Sn = V5(i);
    } else Sn = un ? Za(i.stateNode) : null;
    return !0;
  }
  function x1() {
    for (var i = Sn; i; ) i = Za(i);
  }
  function wo() {
    je && (Sn = un = null, ks = $e = !1);
  }
  function bh(i) {
    Un === null ? Un = [i] : Un.push(i);
  }
  var h6 = c.ReactCurrentBatchConfig;
  function ul(i, s) {
    if (Bn(i, s)) return !0;
    if (typeof i != "object" || i === null || typeof s != "object" || s === null) return !1;
    var u = Object.keys(i), f = Object.keys(s);
    if (u.length !== f.length) return !1;
    for (f = 0; f < u.length; f++) {
      var p = u[f];
      if (!q5.call(s, p) || !Bn(i[p], s[p])) return !1;
    }
    return !0;
  }
  function f6(i) {
    switch (i.tag) {
      case 5:
        return Cs(i.type);
      case 16:
        return Cs("Lazy");
      case 13:
        return Cs("Suspense");
      case 19:
        return Cs("SuspenseList");
      case 0:
      case 2:
      case 15:
        return i = Rh(i.type, !1), i;
      case 11:
        return i = Rh(i.type.render, !1), i;
      case 1:
        return i = Rh(i.type, !0), i;
      default:
        return "";
    }
  }
  function Ns(i, s, u) {
    if (i = u.ref, i !== null && typeof i != "function" && typeof i != "object") {
      if (u._owner) {
        if (u = u._owner, u) {
          if (u.tag !== 1) throw Error(l(309));
          var f = u.stateNode;
        }
        if (!f) throw Error(l(147, i));
        var p = f, v = "" + i;
        return s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === v ? s.ref : (s = function(k) {
          var F = p.refs;
          k === null ? delete F[v] : F[v] = k;
        }, s._stringRef = v, s);
      }
      if (typeof i != "string") throw Error(l(284));
      if (!u._owner) throw Error(l(290, i));
    }
    return i;
  }
  function cl(i, s) {
    throw i = Object.prototype.toString.call(s), Error(l(31, i === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : i));
  }
  function E1(i) {
    var s = i._init;
    return s(i._payload);
  }
  function C1(i) {
    function s(U, O) {
      if (i) {
        var H = U.deletions;
        H === null ? (U.deletions = [O], U.flags |= 16) : H.push(O);
      }
    }
    function u(U, O) {
      if (!i) return null;
      for (; O !== null; ) s(U, O), O = O.sibling;
      return null;
    }
    function f(U, O) {
      for (U = /* @__PURE__ */ new Map(); O !== null; ) O.key !== null ? U.set(O.key, O) : U.set(O.index, O), O = O.sibling;
      return U;
    }
    function p(U, O) {
      return U = Jr(U, O), U.index = 0, U.sibling = null, U;
    }
    function v(U, O, H) {
      return U.index = H, i ? (H = U.alternate, H !== null ? (H = H.index, H < O ? (U.flags |= 2, O) : H) : (U.flags |= 2, O)) : (U.flags |= 1048576, O);
    }
    function k(U) {
      return i && U.alternate === null && (U.flags |= 2), U;
    }
    function F(U, O, H, Q) {
      return O === null || O.tag !== 6 ? (O = Uf(H, U.mode, Q), O.return = U, O) : (O = p(O, H), O.return = U, O);
    }
    function G(U, O, H, Q) {
      var le = H.type;
      return le === m ? ee(U, O, H.props.children, Q, H.key) : O !== null && (O.elementType === le || typeof le == "object" && le !== null && le.$$typeof === g && E1(le) === O.type) ? (Q = p(O, H.props), Q.ref = Ns(U, O, H), Q.return = U, Q) : (Q = zl(H.type, H.key, H.props, null, U.mode, Q), Q.ref = Ns(U, O, H), Q.return = U, Q);
    }
    function X(U, O, H, Q) {
      return O === null || O.tag !== 4 || O.stateNode.containerInfo !== H.containerInfo || O.stateNode.implementation !== H.implementation ? (O = Gf(H, U.mode, Q), O.return = U, O) : (O = p(O, H.children || []), O.return = U, O);
    }
    function ee(U, O, H, Q, le) {
      return O === null || O.tag !== 7 ? (O = Vi(H, U.mode, Q, le), O.return = U, O) : (O = p(O, H), O.return = U, O);
    }
    function pe(U, O, H) {
      if (typeof O == "string" && O !== "" || typeof O == "number") return O = Uf("" + O, U.mode, H), O.return = U, O;
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case h:
            return H = zl(O.type, O.key, O.props, null, U.mode, H), H.ref = Ns(U, null, O), H.return = U, H;
          case d:
            return O = Gf(O, U.mode, H), O.return = U, O;
          case g:
            var Q = O._init;
            return pe(U, Q(O._payload), H);
        }
        if (K(O) || M(O)) return O = Vi(O, U.mode, H, null), O.return = U, O;
        cl(U, O);
      }
      return null;
    }
    function Y(U, O, H, Q) {
      var le = O !== null ? O.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number") return le !== null ? null : F(U, O, "" + H, Q);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case h:
            return H.key === le ? G(U, O, H, Q) : null;
          case d:
            return H.key === le ? X(U, O, H, Q) : null;
          case g:
            return le = H._init, Y(
              U,
              O,
              le(H._payload),
              Q
            );
        }
        if (K(H) || M(H)) return le !== null ? null : ee(U, O, H, Q, null);
        cl(U, H);
      }
      return null;
    }
    function Xe(U, O, H, Q, le) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number") return U = U.get(H) || null, F(O, U, "" + Q, le);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case h:
            return U = U.get(Q.key === null ? H : Q.key) || null, G(O, U, Q, le);
          case d:
            return U = U.get(Q.key === null ? H : Q.key) || null, X(O, U, Q, le);
          case g:
            var ve = Q._init;
            return Xe(U, O, H, ve(Q._payload), le);
        }
        if (K(Q) || M(Q)) return U = U.get(H) || null, ee(O, U, Q, le, null);
        cl(O, Q);
      }
      return null;
    }
    function Ue(U, O, H, Q) {
      for (var le = null, ve = null, ge = O, Ae = O = 0, Tt = null; ge !== null && Ae < H.length; Ae++) {
        ge.index > Ae ? (Tt = ge, ge = null) : Tt = ge.sibling;
        var Me = Y(U, ge, H[Ae], Q);
        if (Me === null) {
          ge === null && (ge = Tt);
          break;
        }
        i && ge && Me.alternate === null && s(U, ge), O = v(Me, O, Ae), ve === null ? le = Me : ve.sibling = Me, ve = Me, ge = Tt;
      }
      if (Ae === H.length) return u(U, ge), $e && Di(U, Ae), le;
      if (ge === null) {
        for (; Ae < H.length; Ae++) ge = pe(U, H[Ae], Q), ge !== null && (O = v(ge, O, Ae), ve === null ? le = ge : ve.sibling = ge, ve = ge);
        return $e && Di(U, Ae), le;
      }
      for (ge = f(U, ge); Ae < H.length; Ae++) Tt = Xe(ge, U, Ae, H[Ae], Q), Tt !== null && (i && Tt.alternate !== null && ge.delete(Tt.key === null ? Ae : Tt.key), O = v(Tt, O, Ae), ve === null ? le = Tt : ve.sibling = Tt, ve = Tt);
      return i && ge.forEach(function(ei) {
        return s(U, ei);
      }), $e && Di(U, Ae), le;
    }
    function nn(U, O, H, Q) {
      var le = M(H);
      if (typeof le != "function") throw Error(l(150));
      if (H = le.call(H), H == null) throw Error(l(151));
      for (var ve = le = null, ge = O, Ae = O = 0, Tt = null, Me = H.next(); ge !== null && !Me.done; Ae++, Me = H.next()) {
        ge.index > Ae ? (Tt = ge, ge = null) : Tt = ge.sibling;
        var ei = Y(U, ge, Me.value, Q);
        if (ei === null) {
          ge === null && (ge = Tt);
          break;
        }
        i && ge && ei.alternate === null && s(U, ge), O = v(ei, O, Ae), ve === null ? le = ei : ve.sibling = ei, ve = ei, ge = Tt;
      }
      if (Me.done) return u(
        U,
        ge
      ), $e && Di(U, Ae), le;
      if (ge === null) {
        for (; !Me.done; Ae++, Me = H.next()) Me = pe(U, Me.value, Q), Me !== null && (O = v(Me, O, Ae), ve === null ? le = Me : ve.sibling = Me, ve = Me);
        return $e && Di(U, Ae), le;
      }
      for (ge = f(U, ge); !Me.done; Ae++, Me = H.next()) Me = Xe(ge, U, Ae, Me.value, Q), Me !== null && (i && Me.alternate !== null && ge.delete(Me.key === null ? Ae : Me.key), O = v(Me, O, Ae), ve === null ? le = Me : ve.sibling = Me, ve = Me);
      return i && ge.forEach(function(b6) {
        return s(U, b6);
      }), $e && Di(U, Ae), le;
    }
    function Pr(U, O, H, Q) {
      if (typeof H == "object" && H !== null && H.type === m && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case h:
            e: {
              for (var le = H.key, ve = O; ve !== null; ) {
                if (ve.key === le) {
                  if (le = H.type, le === m) {
                    if (ve.tag === 7) {
                      u(U, ve.sibling), O = p(ve, H.props.children), O.return = U, U = O;
                      break e;
                    }
                  } else if (ve.elementType === le || typeof le == "object" && le !== null && le.$$typeof === g && E1(le) === ve.type) {
                    u(U, ve.sibling), O = p(ve, H.props), O.ref = Ns(U, ve, H), O.return = U, U = O;
                    break e;
                  }
                  u(U, ve);
                  break;
                } else s(U, ve);
                ve = ve.sibling;
              }
              H.type === m ? (O = Vi(H.props.children, U.mode, Q, H.key), O.return = U, U = O) : (Q = zl(H.type, H.key, H.props, null, U.mode, Q), Q.ref = Ns(U, O, H), Q.return = U, U = Q);
            }
            return k(U);
          case d:
            e: {
              for (ve = H.key; O !== null; ) {
                if (O.key === ve) if (O.tag === 4 && O.stateNode.containerInfo === H.containerInfo && O.stateNode.implementation === H.implementation) {
                  u(U, O.sibling), O = p(O, H.children || []), O.return = U, U = O;
                  break e;
                } else {
                  u(U, O);
                  break;
                }
                else s(U, O);
                O = O.sibling;
              }
              O = Gf(H, U.mode, Q), O.return = U, U = O;
            }
            return k(U);
          case g:
            return ve = H._init, Pr(U, O, ve(H._payload), Q);
        }
        if (K(H)) return Ue(U, O, H, Q);
        if (M(H)) return nn(U, O, H, Q);
        cl(U, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" ? (H = "" + H, O !== null && O.tag === 6 ? (u(U, O.sibling), O = p(O, H), O.return = U, U = O) : (u(U, O), O = Uf(H, U.mode, Q), O.return = U, U = O), k(U)) : u(U, O);
    }
    return Pr;
  }
  var xo = C1(!0), P1 = C1(!1), hl = Wr(null), fl = null, Eo = null, Vh = null;
  function jh() {
    Vh = Eo = fl = null;
  }
  function T1(i, s, u) {
    Fe ? (ze(hl, s._currentValue), s._currentValue = u) : (ze(hl, s._currentValue2), s._currentValue2 = u);
  }
  function Wh(i) {
    var s = hl.current;
    We(hl), Fe ? i._currentValue = s : i._currentValue2 = s;
  }
  function Xh(i, s, u) {
    for (; i !== null; ) {
      var f = i.alternate;
      if ((i.childLanes & s) !== s ? (i.childLanes |= s, f !== null && (f.childLanes |= s)) : f !== null && (f.childLanes & s) !== s && (f.childLanes |= s), i === u) break;
      i = i.return;
    }
  }
  function Co(i, s) {
    fl = i, Vh = Eo = null, i = i.dependencies, i !== null && i.firstContext !== null && (i.lanes & s && (Jt = !0), i.firstContext = null);
  }
  function wn(i) {
    var s = Fe ? i._currentValue : i._currentValue2;
    if (Vh !== i) if (i = { context: i, memoizedValue: s, next: null }, Eo === null) {
      if (fl === null) throw Error(l(308));
      Eo = i, fl.dependencies = { lanes: 0, firstContext: i };
    } else Eo = Eo.next = i;
    return s;
  }
  var Bi = null;
  function Kh(i) {
    Bi === null ? Bi = [i] : Bi.push(i);
  }
  function k1(i, s, u, f) {
    var p = s.interleaved;
    return p === null ? (u.next = u, Kh(s)) : (u.next = p.next, p.next = u), s.interleaved = u, tr(i, f);
  }
  function tr(i, s) {
    i.lanes |= s;
    var u = i.alternate;
    for (u !== null && (u.lanes |= s), u = i, i = i.return; i !== null; ) i.childLanes |= s, u = i.alternate, u !== null && (u.childLanes |= s), u = i, i = i.return;
    return u.tag === 3 ? u.stateNode : null;
  }
  var Kr = !1;
  function Yh(i) {
    i.updateQueue = { baseState: i.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function N1(i, s) {
    i = i.updateQueue, s.updateQueue === i && (s.updateQueue = { baseState: i.baseState, firstBaseUpdate: i.firstBaseUpdate, lastBaseUpdate: i.lastBaseUpdate, shared: i.shared, effects: i.effects });
  }
  function xr(i, s) {
    return { eventTime: i, lane: s, tag: 0, payload: null, callback: null, next: null };
  }
  function Yr(i, s, u) {
    var f = i.updateQueue;
    if (f === null) return null;
    if (f = f.shared, Se & 2) {
      var p = f.pending;
      return p === null ? s.next = s : (s.next = p.next, p.next = s), f.pending = s, tr(i, u);
    }
    return p = f.interleaved, p === null ? (s.next = s, Kh(f)) : (s.next = p.next, p.next = s), f.interleaved = s, tr(i, u);
  }
  function dl(i, s, u) {
    if (s = s.updateQueue, s !== null && (s = s.shared, (u & 4194240) !== 0)) {
      var f = s.lanes;
      f &= i.pendingLanes, u |= f, s.lanes = u, Fh(i, u);
    }
  }
  function R1(i, s) {
    var u = i.updateQueue, f = i.alternate;
    if (f !== null && (f = f.updateQueue, u === f)) {
      var p = null, v = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var k = { eventTime: u.eventTime, lane: u.lane, tag: u.tag, payload: u.payload, callback: u.callback, next: null };
          v === null ? p = v = k : v = v.next = k, u = u.next;
        } while (u !== null);
        v === null ? p = v = s : v = v.next = s;
      } else p = v = s;
      u = { baseState: f.baseState, firstBaseUpdate: p, lastBaseUpdate: v, shared: f.shared, effects: f.effects }, i.updateQueue = u;
      return;
    }
    i = u.lastBaseUpdate, i === null ? u.firstBaseUpdate = s : i.next = s, u.lastBaseUpdate = s;
  }
  function pl(i, s, u, f) {
    var p = i.updateQueue;
    Kr = !1;
    var v = p.firstBaseUpdate, k = p.lastBaseUpdate, F = p.shared.pending;
    if (F !== null) {
      p.shared.pending = null;
      var G = F, X = G.next;
      G.next = null, k === null ? v = X : k.next = X, k = G;
      var ee = i.alternate;
      ee !== null && (ee = ee.updateQueue, F = ee.lastBaseUpdate, F !== k && (F === null ? ee.firstBaseUpdate = X : F.next = X, ee.lastBaseUpdate = G));
    }
    if (v !== null) {
      var pe = p.baseState;
      k = 0, ee = X = G = null, F = v;
      do {
        var Y = F.lane, Xe = F.eventTime;
        if ((f & Y) === Y) {
          ee !== null && (ee = ee.next = {
            eventTime: Xe,
            lane: 0,
            tag: F.tag,
            payload: F.payload,
            callback: F.callback,
            next: null
          });
          e: {
            var Ue = i, nn = F;
            switch (Y = s, Xe = u, nn.tag) {
              case 1:
                if (Ue = nn.payload, typeof Ue == "function") {
                  pe = Ue.call(Xe, pe, Y);
                  break e;
                }
                pe = Ue;
                break e;
              case 3:
                Ue.flags = Ue.flags & -65537 | 128;
              case 0:
                if (Ue = nn.payload, Y = typeof Ue == "function" ? Ue.call(Xe, pe, Y) : Ue, Y == null) break e;
                pe = a({}, pe, Y);
                break e;
              case 2:
                Kr = !0;
            }
          }
          F.callback !== null && F.lane !== 0 && (i.flags |= 64, Y = p.effects, Y === null ? p.effects = [F] : Y.push(F));
        } else Xe = { eventTime: Xe, lane: Y, tag: F.tag, payload: F.payload, callback: F.callback, next: null }, ee === null ? (X = ee = Xe, G = pe) : ee = ee.next = Xe, k |= Y;
        if (F = F.next, F === null) {
          if (F = p.shared.pending, F === null) break;
          Y = F, F = Y.next, Y.next = null, p.lastBaseUpdate = Y, p.shared.pending = null;
        }
      } while (!0);
      if (ee === null && (G = pe), p.baseState = G, p.firstBaseUpdate = X, p.lastBaseUpdate = ee, s = p.shared.interleaved, s !== null) {
        p = s;
        do
          k |= p.lane, p = p.next;
        while (p !== s);
      } else v === null && (p.shared.lanes = 0);
      Gi |= k, i.lanes = k, i.memoizedState = pe;
    }
  }
  function A1(i, s, u) {
    if (i = s.effects, s.effects = null, i !== null) for (s = 0; s < i.length; s++) {
      var f = i[s], p = f.callback;
      if (p !== null) {
        if (f.callback = null, f = u, typeof p != "function") throw Error(l(191, p));
        p.call(f);
      }
    }
  }
  var Rs = {}, xn = Wr(Rs), As = Wr(Rs), Po = Wr(Rs);
  function nr(i) {
    if (i === Rs) throw Error(l(174));
    return i;
  }
  function Qh(i, s) {
    ze(Po, s), ze(As, i), ze(xn, Rs), i = de(s), We(xn), ze(xn, i);
  }
  function To() {
    We(xn), We(As), We(Po);
  }
  function M1(i) {
    var s = nr(Po.current), u = nr(xn.current);
    s = j(u, i.type, s), u !== s && (ze(As, i), ze(xn, s));
  }
  function $h(i) {
    As.current === i && (We(xn), We(As));
  }
  var et = Wr(0);
  function gl(i) {
    for (var s = i; s !== null; ) {
      if (s.tag === 13) {
        var u = s.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || c1(u) || Th(u))) return s;
      } else if (s.tag === 19 && s.memoizedProps.revealOrder !== void 0) {
        if (s.flags & 128) return s;
      } else if (s.child !== null) {
        s.child.return = s, s = s.child;
        continue;
      }
      if (s === i) break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === i) return null;
        s = s.return;
      }
      s.sibling.return = s.return, s = s.sibling;
    }
    return null;
  }
  var qh = [];
  function Zh() {
    for (var i = 0; i < qh.length; i++) {
      var s = qh[i];
      Fe ? s._workInProgressVersionPrimary = null : s._workInProgressVersionSecondary = null;
    }
    qh.length = 0;
  }
  var ml = c.ReactCurrentDispatcher, Jh = c.ReactCurrentBatchConfig, Ui = 0, tt = null, mt = null, Ct = null, vl = !1, Ms = !1, Ls = 0, d6 = 0;
  function Dt() {
    throw Error(l(321));
  }
  function ef(i, s) {
    if (s === null) return !1;
    for (var u = 0; u < s.length && u < i.length; u++) if (!Bn(i[u], s[u])) return !1;
    return !0;
  }
  function tf(i, s, u, f, p, v) {
    if (Ui = v, tt = s, s.memoizedState = null, s.updateQueue = null, s.lanes = 0, ml.current = i === null || i.memoizedState === null ? v6 : y6, i = u(f, p), Ms) {
      v = 0;
      do {
        if (Ms = !1, Ls = 0, 25 <= v) throw Error(l(301));
        v += 1, Ct = mt = null, s.updateQueue = null, ml.current = _6, i = u(f, p);
      } while (Ms);
    }
    if (ml.current = Sl, s = mt !== null && mt.next !== null, Ui = 0, Ct = mt = tt = null, vl = !1, s) throw Error(l(300));
    return i;
  }
  function nf() {
    var i = Ls !== 0;
    return Ls = 0, i;
  }
  function rr() {
    var i = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ct === null ? tt.memoizedState = Ct = i : Ct = Ct.next = i, Ct;
  }
  function En() {
    if (mt === null) {
      var i = tt.alternate;
      i = i !== null ? i.memoizedState : null;
    } else i = mt.next;
    var s = Ct === null ? tt.memoizedState : Ct.next;
    if (s !== null) Ct = s, mt = i;
    else {
      if (i === null) throw Error(l(310));
      mt = i, i = { memoizedState: mt.memoizedState, baseState: mt.baseState, baseQueue: mt.baseQueue, queue: mt.queue, next: null }, Ct === null ? tt.memoizedState = Ct = i : Ct = Ct.next = i;
    }
    return Ct;
  }
  function Fs(i, s) {
    return typeof s == "function" ? s(i) : s;
  }
  function rf(i) {
    var s = En(), u = s.queue;
    if (u === null) throw Error(l(311));
    u.lastRenderedReducer = i;
    var f = mt, p = f.baseQueue, v = u.pending;
    if (v !== null) {
      if (p !== null) {
        var k = p.next;
        p.next = v.next, v.next = k;
      }
      f.baseQueue = p = v, u.pending = null;
    }
    if (p !== null) {
      v = p.next, f = f.baseState;
      var F = k = null, G = null, X = v;
      do {
        var ee = X.lane;
        if ((Ui & ee) === ee) G !== null && (G = G.next = { lane: 0, action: X.action, hasEagerState: X.hasEagerState, eagerState: X.eagerState, next: null }), f = X.hasEagerState ? X.eagerState : i(f, X.action);
        else {
          var pe = {
            lane: ee,
            action: X.action,
            hasEagerState: X.hasEagerState,
            eagerState: X.eagerState,
            next: null
          };
          G === null ? (F = G = pe, k = f) : G = G.next = pe, tt.lanes |= ee, Gi |= ee;
        }
        X = X.next;
      } while (X !== null && X !== v);
      G === null ? k = f : G.next = F, Bn(f, s.memoizedState) || (Jt = !0), s.memoizedState = f, s.baseState = k, s.baseQueue = G, u.lastRenderedState = f;
    }
    if (i = u.interleaved, i !== null) {
      p = i;
      do
        v = p.lane, tt.lanes |= v, Gi |= v, p = p.next;
      while (p !== i);
    } else p === null && (u.lanes = 0);
    return [s.memoizedState, u.dispatch];
  }
  function of(i) {
    var s = En(), u = s.queue;
    if (u === null) throw Error(l(311));
    u.lastRenderedReducer = i;
    var f = u.dispatch, p = u.pending, v = s.memoizedState;
    if (p !== null) {
      u.pending = null;
      var k = p = p.next;
      do
        v = i(v, k.action), k = k.next;
      while (k !== p);
      Bn(v, s.memoizedState) || (Jt = !0), s.memoizedState = v, s.baseQueue === null && (s.baseState = v), u.lastRenderedState = v;
    }
    return [v, f];
  }
  function L1() {
  }
  function F1(i, s) {
    var u = tt, f = En(), p = s(), v = !Bn(f.memoizedState, p);
    if (v && (f.memoizedState = p, Jt = !0), f = f.queue, sf(D1.bind(null, u, f, i), [i]), f.getSnapshot !== s || v || Ct !== null && Ct.memoizedState.tag & 1) {
      if (u.flags |= 2048, Is(9, O1.bind(null, u, f, p, s), void 0, null), Pt === null) throw Error(l(349));
      Ui & 30 || I1(u, s, p);
    }
    return p;
  }
  function I1(i, s, u) {
    i.flags |= 16384, i = { getSnapshot: s, value: u }, s = tt.updateQueue, s === null ? (s = { lastEffect: null, stores: null }, tt.updateQueue = s, s.stores = [i]) : (u = s.stores, u === null ? s.stores = [i] : u.push(i));
  }
  function O1(i, s, u, f) {
    s.value = u, s.getSnapshot = f, B1(s) && U1(i);
  }
  function D1(i, s, u) {
    return u(function() {
      B1(s) && U1(i);
    });
  }
  function B1(i) {
    var s = i.getSnapshot;
    i = i.value;
    try {
      var u = s();
      return !Bn(i, u);
    } catch {
      return !0;
    }
  }
  function U1(i) {
    var s = tr(i, 1);
    s !== null && Cn(s, i, 1, -1);
  }
  function G1(i) {
    var s = rr();
    return typeof i == "function" && (i = i()), s.memoizedState = s.baseState = i, i = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Fs, lastRenderedState: i }, s.queue = i, i = i.dispatch = m6.bind(null, tt, i), [s.memoizedState, i];
  }
  function Is(i, s, u, f) {
    return i = { tag: i, create: s, destroy: u, deps: f, next: null }, s = tt.updateQueue, s === null ? (s = { lastEffect: null, stores: null }, tt.updateQueue = s, s.lastEffect = i.next = i) : (u = s.lastEffect, u === null ? s.lastEffect = i.next = i : (f = u.next, u.next = i, i.next = f, s.lastEffect = i)), i;
  }
  function H1() {
    return En().memoizedState;
  }
  function yl(i, s, u, f) {
    var p = rr();
    tt.flags |= i, p.memoizedState = Is(1 | s, u, void 0, f === void 0 ? null : f);
  }
  function _l(i, s, u, f) {
    var p = En();
    f = f === void 0 ? null : f;
    var v = void 0;
    if (mt !== null) {
      var k = mt.memoizedState;
      if (v = k.destroy, f !== null && ef(f, k.deps)) {
        p.memoizedState = Is(s, u, v, f);
        return;
      }
    }
    tt.flags |= i, p.memoizedState = Is(1 | s, u, v, f);
  }
  function z1(i, s) {
    return yl(8390656, 8, i, s);
  }
  function sf(i, s) {
    return _l(2048, 8, i, s);
  }
  function b1(i, s) {
    return _l(4, 2, i, s);
  }
  function V1(i, s) {
    return _l(4, 4, i, s);
  }
  function j1(i, s) {
    if (typeof s == "function") return i = i(), s(i), function() {
      s(null);
    };
    if (s != null) return i = i(), s.current = i, function() {
      s.current = null;
    };
  }
  function W1(i, s, u) {
    return u = u != null ? u.concat([i]) : null, _l(4, 4, j1.bind(null, s, i), u);
  }
  function af() {
  }
  function X1(i, s) {
    var u = En();
    s = s === void 0 ? null : s;
    var f = u.memoizedState;
    return f !== null && s !== null && ef(s, f[1]) ? f[0] : (u.memoizedState = [i, s], i);
  }
  function K1(i, s) {
    var u = En();
    s = s === void 0 ? null : s;
    var f = u.memoizedState;
    return f !== null && s !== null && ef(s, f[1]) ? f[0] : (i = i(), u.memoizedState = [i, s], i);
  }
  function Y1(i, s, u) {
    return Ui & 21 ? (Bn(u, s) || (u = p1(), tt.lanes |= u, Gi |= u, i.baseState = !0), s) : (i.baseState && (i.baseState = !1, Jt = !0), i.memoizedState = u);
  }
  function p6(i, s) {
    var u = Re;
    Re = u !== 0 && 4 > u ? u : 4, i(!0);
    var f = Jh.transition;
    Jh.transition = {};
    try {
      i(!1), s();
    } finally {
      Re = u, Jh.transition = f;
    }
  }
  function Q1() {
    return En().memoizedState;
  }
  function g6(i, s, u) {
    var f = qr(i);
    if (u = { lane: f, action: u, hasEagerState: !1, eagerState: null, next: null }, $1(i)) q1(s, u);
    else if (u = k1(i, s, u, f), u !== null) {
      var p = Gt();
      Cn(u, i, f, p), Z1(u, s, f);
    }
  }
  function m6(i, s, u) {
    var f = qr(i), p = { lane: f, action: u, hasEagerState: !1, eagerState: null, next: null };
    if ($1(i)) q1(s, p);
    else {
      var v = i.alternate;
      if (i.lanes === 0 && (v === null || v.lanes === 0) && (v = s.lastRenderedReducer, v !== null)) try {
        var k = s.lastRenderedState, F = v(k, u);
        if (p.hasEagerState = !0, p.eagerState = F, Bn(F, k)) {
          var G = s.interleaved;
          G === null ? (p.next = p, Kh(s)) : (p.next = G.next, G.next = p), s.interleaved = p;
          return;
        }
      } catch {
      } finally {
      }
      u = k1(i, s, p, f), u !== null && (p = Gt(), Cn(u, i, f, p), Z1(u, s, f));
    }
  }
  function $1(i) {
    var s = i.alternate;
    return i === tt || s !== null && s === tt;
  }
  function q1(i, s) {
    Ms = vl = !0;
    var u = i.pending;
    u === null ? s.next = s : (s.next = u.next, u.next = s), i.pending = s;
  }
  function Z1(i, s, u) {
    if (u & 4194240) {
      var f = s.lanes;
      f &= i.pendingLanes, u |= f, s.lanes = u, Fh(i, u);
    }
  }
  var Sl = { readContext: wn, useCallback: Dt, useContext: Dt, useEffect: Dt, useImperativeHandle: Dt, useInsertionEffect: Dt, useLayoutEffect: Dt, useMemo: Dt, useReducer: Dt, useRef: Dt, useState: Dt, useDebugValue: Dt, useDeferredValue: Dt, useTransition: Dt, useMutableSource: Dt, useSyncExternalStore: Dt, useId: Dt, unstable_isNewReconciler: !1 }, v6 = { readContext: wn, useCallback: function(i, s) {
    return rr().memoizedState = [i, s === void 0 ? null : s], i;
  }, useContext: wn, useEffect: z1, useImperativeHandle: function(i, s, u) {
    return u = u != null ? u.concat([i]) : null, yl(
      4194308,
      4,
      j1.bind(null, s, i),
      u
    );
  }, useLayoutEffect: function(i, s) {
    return yl(4194308, 4, i, s);
  }, useInsertionEffect: function(i, s) {
    return yl(4, 2, i, s);
  }, useMemo: function(i, s) {
    var u = rr();
    return s = s === void 0 ? null : s, i = i(), u.memoizedState = [i, s], i;
  }, useReducer: function(i, s, u) {
    var f = rr();
    return s = u !== void 0 ? u(s) : s, f.memoizedState = f.baseState = s, i = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: i, lastRenderedState: s }, f.queue = i, i = i.dispatch = g6.bind(null, tt, i), [f.memoizedState, i];
  }, useRef: function(i) {
    var s = rr();
    return i = { current: i }, s.memoizedState = i;
  }, useState: G1, useDebugValue: af, useDeferredValue: function(i) {
    return rr().memoizedState = i;
  }, useTransition: function() {
    var i = G1(!1), s = i[0];
    return i = p6.bind(null, i[1]), rr().memoizedState = i, [s, i];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(i, s, u) {
    var f = tt, p = rr();
    if ($e) {
      if (u === void 0) throw Error(l(407));
      u = u();
    } else {
      if (u = s(), Pt === null) throw Error(l(349));
      Ui & 30 || I1(f, s, u);
    }
    p.memoizedState = u;
    var v = { value: u, getSnapshot: s };
    return p.queue = v, z1(D1.bind(
      null,
      f,
      v,
      i
    ), [i]), f.flags |= 2048, Is(9, O1.bind(null, f, v, u, s), void 0, null), u;
  }, useId: function() {
    var i = rr(), s = Pt.identifierPrefix;
    if ($e) {
      var u = wr, f = Sr;
      u = (f & ~(1 << 32 - Dn(f) - 1)).toString(32) + u, s = ":" + s + "R" + u, u = Ls++, 0 < u && (s += "H" + u.toString(32)), s += ":";
    } else u = d6++, s = ":" + s + "r" + u.toString(32) + ":";
    return i.memoizedState = s;
  }, unstable_isNewReconciler: !1 }, y6 = {
    readContext: wn,
    useCallback: X1,
    useContext: wn,
    useEffect: sf,
    useImperativeHandle: W1,
    useInsertionEffect: b1,
    useLayoutEffect: V1,
    useMemo: K1,
    useReducer: rf,
    useRef: H1,
    useState: function() {
      return rf(Fs);
    },
    useDebugValue: af,
    useDeferredValue: function(i) {
      var s = En();
      return Y1(s, mt.memoizedState, i);
    },
    useTransition: function() {
      var i = rf(Fs)[0], s = En().memoizedState;
      return [i, s];
    },
    useMutableSource: L1,
    useSyncExternalStore: F1,
    useId: Q1,
    unstable_isNewReconciler: !1
  }, _6 = { readContext: wn, useCallback: X1, useContext: wn, useEffect: sf, useImperativeHandle: W1, useInsertionEffect: b1, useLayoutEffect: V1, useMemo: K1, useReducer: of, useRef: H1, useState: function() {
    return of(Fs);
  }, useDebugValue: af, useDeferredValue: function(i) {
    var s = En();
    return mt === null ? s.memoizedState = i : Y1(s, mt.memoizedState, i);
  }, useTransition: function() {
    var i = of(Fs)[0], s = En().memoizedState;
    return [i, s];
  }, useMutableSource: L1, useSyncExternalStore: F1, useId: Q1, unstable_isNewReconciler: !1 };
  function Gn(i, s) {
    if (i && i.defaultProps) {
      s = a({}, s), i = i.defaultProps;
      for (var u in i) s[u] === void 0 && (s[u] = i[u]);
      return s;
    }
    return s;
  }
  function lf(i, s, u, f) {
    s = i.memoizedState, u = u(f, s), u = u == null ? s : a({}, s, u), i.memoizedState = u, i.lanes === 0 && (i.updateQueue.baseState = u);
  }
  var wl = { isMounted: function(i) {
    return (i = i._reactInternals) ? B(i) === i : !1;
  }, enqueueSetState: function(i, s, u) {
    i = i._reactInternals;
    var f = Gt(), p = qr(i), v = xr(f, p);
    v.payload = s, u != null && (v.callback = u), s = Yr(i, v, p), s !== null && (Cn(s, i, p, f), dl(s, i, p));
  }, enqueueReplaceState: function(i, s, u) {
    i = i._reactInternals;
    var f = Gt(), p = qr(i), v = xr(f, p);
    v.tag = 1, v.payload = s, u != null && (v.callback = u), s = Yr(i, v, p), s !== null && (Cn(s, i, p, f), dl(s, i, p));
  }, enqueueForceUpdate: function(i, s) {
    i = i._reactInternals;
    var u = Gt(), f = qr(i), p = xr(u, f);
    p.tag = 2, s != null && (p.callback = s), s = Yr(i, p, f), s !== null && (Cn(s, i, f, u), dl(s, i, f));
  } };
  function J1(i, s, u, f, p, v, k) {
    return i = i.stateNode, typeof i.shouldComponentUpdate == "function" ? i.shouldComponentUpdate(f, v, k) : s.prototype && s.prototype.isPureReactComponent ? !ul(u, f) || !ul(p, v) : !0;
  }
  function eg(i, s, u) {
    var f = !1, p = Xr, v = s.contextType;
    return typeof v == "object" && v !== null ? v = wn(v) : (p = Zt(s) ? Ii : Ot.current, f = s.contextTypes, v = (f = f != null) ? yo(i, p) : Xr), s = new s(u, v), i.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = wl, i.stateNode = s, s._reactInternals = i, f && (i = i.stateNode, i.__reactInternalMemoizedUnmaskedChildContext = p, i.__reactInternalMemoizedMaskedChildContext = v), s;
  }
  function tg(i, s, u, f) {
    i = s.state, typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(u, f), typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(u, f), s.state !== i && wl.enqueueReplaceState(s, s.state, null);
  }
  function uf(i, s, u, f) {
    var p = i.stateNode;
    p.props = u, p.state = i.memoizedState, p.refs = {}, Yh(i);
    var v = s.contextType;
    typeof v == "object" && v !== null ? p.context = wn(v) : (v = Zt(s) ? Ii : Ot.current, p.context = yo(i, v)), p.state = i.memoizedState, v = s.getDerivedStateFromProps, typeof v == "function" && (lf(i, s, v, u), p.state = i.memoizedState), typeof s.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (s = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), s !== p.state && wl.enqueueReplaceState(p, p.state, null), pl(i, u, p, f), p.state = i.memoizedState), typeof p.componentDidMount == "function" && (i.flags |= 4194308);
  }
  function ko(i, s) {
    try {
      var u = "", f = s;
      do
        u += f6(f), f = f.return;
      while (f);
      var p = u;
    } catch (v) {
      p = `
Error generating stack: ` + v.message + `
` + v.stack;
    }
    return { value: i, source: s, stack: p, digest: null };
  }
  function cf(i, s, u) {
    return { value: i, source: null, stack: u ?? null, digest: s ?? null };
  }
  function hf(i, s) {
    try {
      console.error(s.value);
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  var S6 = typeof WeakMap == "function" ? WeakMap : Map;
  function ng(i, s, u) {
    u = xr(-1, u), u.tag = 3, u.payload = { element: null };
    var f = s.value;
    return u.callback = function() {
      Ol || (Ol = !0, Mf = f), hf(i, s);
    }, u;
  }
  function rg(i, s, u) {
    u = xr(-1, u), u.tag = 3;
    var f = i.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var p = s.value;
      u.payload = function() {
        return f(p);
      }, u.callback = function() {
        hf(i, s);
      };
    }
    var v = i.stateNode;
    return v !== null && typeof v.componentDidCatch == "function" && (u.callback = function() {
      hf(i, s), typeof f != "function" && (Qr === null ? Qr = /* @__PURE__ */ new Set([this]) : Qr.add(this));
      var k = s.stack;
      this.componentDidCatch(s.value, { componentStack: k !== null ? k : "" });
    }), u;
  }
  function ig(i, s, u) {
    var f = i.pingCache;
    if (f === null) {
      f = i.pingCache = new S6();
      var p = /* @__PURE__ */ new Set();
      f.set(s, p);
    } else p = f.get(s), p === void 0 && (p = /* @__PURE__ */ new Set(), f.set(s, p));
    p.has(u) || (p.add(u), i = I6.bind(null, i, s, u), s.then(i, i));
  }
  function og(i) {
    do {
      var s;
      if ((s = i.tag === 13) && (s = i.memoizedState, s = s !== null ? s.dehydrated !== null : !0), s) return i;
      i = i.return;
    } while (i !== null);
    return null;
  }
  function sg(i, s, u, f, p) {
    return i.mode & 1 ? (i.flags |= 65536, i.lanes = p, i) : (i === s ? i.flags |= 65536 : (i.flags |= 128, u.flags |= 131072, u.flags &= -52805, u.tag === 1 && (u.alternate === null ? u.tag = 17 : (s = xr(-1, 1), s.tag = 2, Yr(u, s, 1))), u.lanes |= 1), i);
  }
  var w6 = c.ReactCurrentOwner, Jt = !1;
  function Wt(i, s, u, f) {
    s.child = i === null ? P1(s, null, u, f) : xo(s, i.child, u, f);
  }
  function ag(i, s, u, f, p) {
    u = u.render;
    var v = s.ref;
    return Co(s, p), f = tf(i, s, u, f, v, p), u = nf(), i !== null && !Jt ? (s.updateQueue = i.updateQueue, s.flags &= -2053, i.lanes &= ~p, Er(i, s, p)) : ($e && u && Uh(s), s.flags |= 1, Wt(i, s, f, p), s.child);
  }
  function lg(i, s, u, f, p) {
    if (i === null) {
      var v = u.type;
      return typeof v == "function" && !Bf(v) && v.defaultProps === void 0 && u.compare === null && u.defaultProps === void 0 ? (s.tag = 15, s.type = v, ug(i, s, v, f, p)) : (i = zl(u.type, null, f, s, s.mode, p), i.ref = s.ref, i.return = s, s.child = i);
    }
    if (v = i.child, !(i.lanes & p)) {
      var k = v.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ul, u(k, f) && i.ref === s.ref) return Er(i, s, p);
    }
    return s.flags |= 1, i = Jr(v, f), i.ref = s.ref, i.return = s, s.child = i;
  }
  function ug(i, s, u, f, p) {
    if (i !== null) {
      var v = i.memoizedProps;
      if (ul(v, f) && i.ref === s.ref) if (Jt = !1, s.pendingProps = f = v, (i.lanes & p) !== 0) i.flags & 131072 && (Jt = !0);
      else return s.lanes = i.lanes, Er(i, s, p);
    }
    return ff(i, s, u, f, p);
  }
  function cg(i, s, u) {
    var f = s.pendingProps, p = f.children, v = i !== null ? i.memoizedState : null;
    if (f.mode === "hidden") if (!(s.mode & 1)) s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ze(Ro, cn), cn |= u;
    else {
      if (!(u & 1073741824)) return i = v !== null ? v.baseLanes | u : u, s.lanes = s.childLanes = 1073741824, s.memoizedState = { baseLanes: i, cachePool: null, transitions: null }, s.updateQueue = null, ze(Ro, cn), cn |= i, null;
      s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, f = v !== null ? v.baseLanes : u, ze(Ro, cn), cn |= f;
    }
    else v !== null ? (f = v.baseLanes | u, s.memoizedState = null) : f = u, ze(Ro, cn), cn |= f;
    return Wt(i, s, p, u), s.child;
  }
  function hg(i, s) {
    var u = s.ref;
    (i === null && u !== null || i !== null && i.ref !== u) && (s.flags |= 512, s.flags |= 2097152);
  }
  function ff(i, s, u, f, p) {
    var v = Zt(u) ? Ii : Ot.current;
    return v = yo(s, v), Co(s, p), u = tf(i, s, u, f, v, p), f = nf(), i !== null && !Jt ? (s.updateQueue = i.updateQueue, s.flags &= -2053, i.lanes &= ~p, Er(i, s, p)) : ($e && f && Uh(s), s.flags |= 1, Wt(i, s, u, p), s.child);
  }
  function fg(i, s, u, f, p) {
    if (Zt(u)) {
      var v = !0;
      el(s);
    } else v = !1;
    if (Co(s, p), s.stateNode === null) El(i, s), eg(s, u, f), uf(s, u, f, p), f = !0;
    else if (i === null) {
      var k = s.stateNode, F = s.memoizedProps;
      k.props = F;
      var G = k.context, X = u.contextType;
      typeof X == "object" && X !== null ? X = wn(X) : (X = Zt(u) ? Ii : Ot.current, X = yo(s, X));
      var ee = u.getDerivedStateFromProps, pe = typeof ee == "function" || typeof k.getSnapshotBeforeUpdate == "function";
      pe || typeof k.UNSAFE_componentWillReceiveProps != "function" && typeof k.componentWillReceiveProps != "function" || (F !== f || G !== X) && tg(s, k, f, X), Kr = !1;
      var Y = s.memoizedState;
      k.state = Y, pl(s, f, k, p), G = s.memoizedState, F !== f || Y !== G || qt.current || Kr ? (typeof ee == "function" && (lf(s, u, ee, f), G = s.memoizedState), (F = Kr || J1(s, u, F, f, Y, G, X)) ? (pe || typeof k.UNSAFE_componentWillMount != "function" && typeof k.componentWillMount != "function" || (typeof k.componentWillMount == "function" && k.componentWillMount(), typeof k.UNSAFE_componentWillMount == "function" && k.UNSAFE_componentWillMount()), typeof k.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof k.componentDidMount == "function" && (s.flags |= 4194308), s.memoizedProps = f, s.memoizedState = G), k.props = f, k.state = G, k.context = X, f = F) : (typeof k.componentDidMount == "function" && (s.flags |= 4194308), f = !1);
    } else {
      k = s.stateNode, N1(i, s), F = s.memoizedProps, X = s.type === s.elementType ? F : Gn(s.type, F), k.props = X, pe = s.pendingProps, Y = k.context, G = u.contextType, typeof G == "object" && G !== null ? G = wn(G) : (G = Zt(u) ? Ii : Ot.current, G = yo(s, G));
      var Xe = u.getDerivedStateFromProps;
      (ee = typeof Xe == "function" || typeof k.getSnapshotBeforeUpdate == "function") || typeof k.UNSAFE_componentWillReceiveProps != "function" && typeof k.componentWillReceiveProps != "function" || (F !== pe || Y !== G) && tg(s, k, f, G), Kr = !1, Y = s.memoizedState, k.state = Y, pl(s, f, k, p);
      var Ue = s.memoizedState;
      F !== pe || Y !== Ue || qt.current || Kr ? (typeof Xe == "function" && (lf(s, u, Xe, f), Ue = s.memoizedState), (X = Kr || J1(s, u, X, f, Y, Ue, G) || !1) ? (ee || typeof k.UNSAFE_componentWillUpdate != "function" && typeof k.componentWillUpdate != "function" || (typeof k.componentWillUpdate == "function" && k.componentWillUpdate(f, Ue, G), typeof k.UNSAFE_componentWillUpdate == "function" && k.UNSAFE_componentWillUpdate(f, Ue, G)), typeof k.componentDidUpdate == "function" && (s.flags |= 4), typeof k.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof k.componentDidUpdate != "function" || F === i.memoizedProps && Y === i.memoizedState || (s.flags |= 4), typeof k.getSnapshotBeforeUpdate != "function" || F === i.memoizedProps && Y === i.memoizedState || (s.flags |= 1024), s.memoizedProps = f, s.memoizedState = Ue), k.props = f, k.state = Ue, k.context = G, f = X) : (typeof k.componentDidUpdate != "function" || F === i.memoizedProps && Y === i.memoizedState || (s.flags |= 4), typeof k.getSnapshotBeforeUpdate != "function" || F === i.memoizedProps && Y === i.memoizedState || (s.flags |= 1024), f = !1);
    }
    return df(i, s, u, f, v, p);
  }
  function df(i, s, u, f, p, v) {
    hg(i, s);
    var k = (s.flags & 128) !== 0;
    if (!f && !k) return p && d1(s, u, !1), Er(i, s, v);
    f = s.stateNode, w6.current = s;
    var F = k && typeof u.getDerivedStateFromError != "function" ? null : f.render();
    return s.flags |= 1, i !== null && k ? (s.child = xo(s, i.child, null, v), s.child = xo(s, null, F, v)) : Wt(i, s, F, v), s.memoizedState = f.state, p && d1(s, u, !0), s.child;
  }
  function dg(i) {
    var s = i.stateNode;
    s.pendingContext ? h1(i, s.pendingContext, s.pendingContext !== s.context) : s.context && h1(i, s.context, !1), Qh(i, s.containerInfo);
  }
  function pg(i, s, u, f, p) {
    return wo(), bh(p), s.flags |= 256, Wt(i, s, u, f), s.child;
  }
  var pf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function gf(i) {
    return { baseLanes: i, cachePool: null, transitions: null };
  }
  function gg(i, s, u) {
    var f = s.pendingProps, p = et.current, v = !1, k = (s.flags & 128) !== 0, F;
    if ((F = k) || (F = i !== null && i.memoizedState === null ? !1 : (p & 2) !== 0), F ? (v = !0, s.flags &= -129) : (i === null || i.memoizedState !== null) && (p |= 1), ze(et, p & 1), i === null)
      return zh(s), i = s.memoizedState, i !== null && (i = i.dehydrated, i !== null) ? (s.mode & 1 ? Th(i) ? s.lanes = 8 : s.lanes = 1073741824 : s.lanes = 1, null) : (k = f.children, i = f.fallback, v ? (f = s.mode, v = s.child, k = { mode: "hidden", children: k }, !(f & 1) && v !== null ? (v.childLanes = 0, v.pendingProps = k) : v = bl(k, f, 0, null), i = Vi(i, f, u, null), v.return = s, i.return = s, v.sibling = i, s.child = v, s.child.memoizedState = gf(u), s.memoizedState = pf, i) : mf(s, k));
    if (p = i.memoizedState, p !== null && (F = p.dehydrated, F !== null)) return x6(i, s, k, f, F, p, u);
    if (v) {
      v = f.fallback, k = s.mode, p = i.child, F = p.sibling;
      var G = { mode: "hidden", children: f.children };
      return !(k & 1) && s.child !== p ? (f = s.child, f.childLanes = 0, f.pendingProps = G, s.deletions = null) : (f = Jr(p, G), f.subtreeFlags = p.subtreeFlags & 14680064), F !== null ? v = Jr(F, v) : (v = Vi(v, k, u, null), v.flags |= 2), v.return = s, f.return = s, f.sibling = v, s.child = f, f = v, v = s.child, k = i.child.memoizedState, k = k === null ? gf(u) : { baseLanes: k.baseLanes | u, cachePool: null, transitions: k.transitions }, v.memoizedState = k, v.childLanes = i.childLanes & ~u, s.memoizedState = pf, f;
    }
    return v = i.child, i = v.sibling, f = Jr(v, { mode: "visible", children: f.children }), !(s.mode & 1) && (f.lanes = u), f.return = s, f.sibling = null, i !== null && (u = s.deletions, u === null ? (s.deletions = [i], s.flags |= 16) : u.push(i)), s.child = f, s.memoizedState = null, f;
  }
  function mf(i, s) {
    return s = bl({ mode: "visible", children: s }, i.mode, 0, null), s.return = i, i.child = s;
  }
  function xl(i, s, u, f) {
    return f !== null && bh(f), xo(s, i.child, null, u), i = mf(s, s.pendingProps.children), i.flags |= 2, s.memoizedState = null, i;
  }
  function x6(i, s, u, f, p, v, k) {
    if (u)
      return s.flags & 256 ? (s.flags &= -257, f = cf(Error(l(422))), xl(i, s, k, f)) : s.memoizedState !== null ? (s.child = i.child, s.flags |= 128, null) : (v = f.fallback, p = s.mode, f = bl({ mode: "visible", children: f.children }, p, 0, null), v = Vi(v, p, k, null), v.flags |= 2, f.return = s, v.return = s, f.sibling = v, s.child = f, s.mode & 1 && xo(s, i.child, null, k), s.child.memoizedState = gf(k), s.memoizedState = pf, v);
    if (!(s.mode & 1)) return xl(i, s, k, null);
    if (Th(p)) return f = O5(p).digest, v = Error(l(419)), f = cf(
      v,
      f,
      void 0
    ), xl(i, s, k, f);
    if (u = (k & i.childLanes) !== 0, Jt || u) {
      if (f = Pt, f !== null) {
        switch (k & -k) {
          case 4:
            p = 2;
            break;
          case 16:
            p = 8;
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
            p = 32;
            break;
          case 536870912:
            p = 268435456;
            break;
          default:
            p = 0;
        }
        p = p & (f.suspendedLanes | k) ? 0 : p, p !== 0 && p !== v.retryLane && (v.retryLane = p, tr(i, p), Cn(
          f,
          i,
          p,
          -1
        ));
      }
      return Df(), f = cf(Error(l(421))), xl(i, s, k, f);
    }
    return c1(p) ? (s.flags |= 128, s.child = i.child, s = O6.bind(null, i), D5(p, s), null) : (i = v.treeContext, je && (Sn = G5(p), un = s, $e = !0, Un = null, ks = !1, i !== null && (yn[_n++] = Sr, yn[_n++] = wr, yn[_n++] = Oi, Sr = i.id, wr = i.overflow, Oi = s)), s = mf(s, f.children), s.flags |= 4096, s);
  }
  function mg(i, s, u) {
    i.lanes |= s;
    var f = i.alternate;
    f !== null && (f.lanes |= s), Xh(i.return, s, u);
  }
  function vf(i, s, u, f, p) {
    var v = i.memoizedState;
    v === null ? i.memoizedState = { isBackwards: s, rendering: null, renderingStartTime: 0, last: f, tail: u, tailMode: p } : (v.isBackwards = s, v.rendering = null, v.renderingStartTime = 0, v.last = f, v.tail = u, v.tailMode = p);
  }
  function vg(i, s, u) {
    var f = s.pendingProps, p = f.revealOrder, v = f.tail;
    if (Wt(i, s, f.children, u), f = et.current, f & 2) f = f & 1 | 2, s.flags |= 128;
    else {
      if (i !== null && i.flags & 128) e: for (i = s.child; i !== null; ) {
        if (i.tag === 13) i.memoizedState !== null && mg(i, u, s);
        else if (i.tag === 19) mg(i, u, s);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === s) break e;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === s) break e;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
      f &= 1;
    }
    if (ze(et, f), !(s.mode & 1)) s.memoizedState = null;
    else switch (p) {
      case "forwards":
        for (u = s.child, p = null; u !== null; ) i = u.alternate, i !== null && gl(i) === null && (p = u), u = u.sibling;
        u = p, u === null ? (p = s.child, s.child = null) : (p = u.sibling, u.sibling = null), vf(s, !1, p, u, v);
        break;
      case "backwards":
        for (u = null, p = s.child, s.child = null; p !== null; ) {
          if (i = p.alternate, i !== null && gl(i) === null) {
            s.child = p;
            break;
          }
          i = p.sibling, p.sibling = u, u = p, p = i;
        }
        vf(s, !0, u, null, v);
        break;
      case "together":
        vf(s, !1, null, null, void 0);
        break;
      default:
        s.memoizedState = null;
    }
    return s.child;
  }
  function El(i, s) {
    !(s.mode & 1) && i !== null && (i.alternate = null, s.alternate = null, s.flags |= 2);
  }
  function Er(i, s, u) {
    if (i !== null && (s.dependencies = i.dependencies), Gi |= s.lanes, !(u & s.childLanes)) return null;
    if (i !== null && s.child !== i.child) throw Error(l(153));
    if (s.child !== null) {
      for (i = s.child, u = Jr(i, i.pendingProps), s.child = u, u.return = s; i.sibling !== null; ) i = i.sibling, u = u.sibling = Jr(i, i.pendingProps), u.return = s;
      u.sibling = null;
    }
    return s.child;
  }
  function E6(i, s, u) {
    switch (s.tag) {
      case 3:
        dg(s), wo();
        break;
      case 5:
        M1(s);
        break;
      case 1:
        Zt(s.type) && el(s);
        break;
      case 4:
        Qh(s, s.stateNode.containerInfo);
        break;
      case 10:
        T1(s, s.type._context, s.memoizedProps.value);
        break;
      case 13:
        var f = s.memoizedState;
        if (f !== null)
          return f.dehydrated !== null ? (ze(et, et.current & 1), s.flags |= 128, null) : u & s.child.childLanes ? gg(i, s, u) : (ze(et, et.current & 1), i = Er(i, s, u), i !== null ? i.sibling : null);
        ze(et, et.current & 1);
        break;
      case 19:
        if (f = (u & s.childLanes) !== 0, i.flags & 128) {
          if (f) return vg(
            i,
            s,
            u
          );
          s.flags |= 128;
        }
        var p = s.memoizedState;
        if (p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), ze(et, et.current), f) break;
        return null;
      case 22:
      case 23:
        return s.lanes = 0, cg(i, s, u);
    }
    return Er(i, s, u);
  }
  function ir(i) {
    i.flags |= 4;
  }
  function yg(i, s) {
    if (i !== null && i.child === s.child) return !0;
    if (s.flags & 16) return !1;
    for (i = s.child; i !== null; ) {
      if (i.flags & 12854 || i.subtreeFlags & 12854) return !1;
      i = i.sibling;
    }
    return !0;
  }
  var Os, Ds, Cl, Pl;
  if (me) Os = function(i, s) {
    for (var u = s.child; u !== null; ) {
      if (u.tag === 5 || u.tag === 6) ae(i, u.stateNode);
      else if (u.tag !== 4 && u.child !== null) {
        u.child.return = u, u = u.child;
        continue;
      }
      if (u === s) break;
      for (; u.sibling === null; ) {
        if (u.return === null || u.return === s) return;
        u = u.return;
      }
      u.sibling.return = u.return, u = u.sibling;
    }
  }, Ds = function() {
  }, Cl = function(i, s, u, f, p) {
    if (i = i.memoizedProps, i !== f) {
      var v = s.stateNode, k = nr(xn.current);
      u = Ee(v, u, i, f, p, k), (s.updateQueue = u) && ir(s);
    }
  }, Pl = function(i, s, u, f) {
    u !== f && ir(s);
  };
  else if (He) {
    Os = function(i, s, u, f) {
      for (var p = s.child; p !== null; ) {
        if (p.tag === 5) {
          var v = p.stateNode;
          u && f && (v = l1(v, p.type, p.memoizedProps, p)), ae(i, v);
        } else if (p.tag === 6) v = p.stateNode, u && f && (v = u1(v, p.memoizedProps, p)), ae(i, v);
        else if (p.tag !== 4) {
          if (p.tag === 22 && p.memoizedState !== null) v = p.child, v !== null && (v.return = p), Os(i, p, !0, !0);
          else if (p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
        }
        if (p === s) break;
        for (; p.sibling === null; ) {
          if (p.return === null || p.return === s) return;
          p = p.return;
        }
        p.sibling.return = p.return, p = p.sibling;
      }
    };
    var _g = function(i, s, u, f) {
      for (var p = s.child; p !== null; ) {
        if (p.tag === 5) {
          var v = p.stateNode;
          u && f && (v = l1(v, p.type, p.memoizedProps, p)), a1(i, v);
        } else if (p.tag === 6) v = p.stateNode, u && f && (v = u1(v, p.memoizedProps, p)), a1(i, v);
        else if (p.tag !== 4) {
          if (p.tag === 22 && p.memoizedState !== null) v = p.child, v !== null && (v.return = p), _g(i, p, !0, !0);
          else if (p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
        }
        if (p === s) break;
        for (; p.sibling === null; ) {
          if (p.return === null || p.return === s) return;
          p = p.return;
        }
        p.sibling.return = p.return, p = p.sibling;
      }
    };
    Ds = function(i, s) {
      var u = s.stateNode;
      if (!yg(i, s)) {
        i = u.containerInfo;
        var f = s1(i);
        _g(f, s, !1, !1), u.pendingChildren = f, ir(s), M5(i, f);
      }
    }, Cl = function(i, s, u, f, p) {
      var v = i.stateNode, k = i.memoizedProps;
      if ((i = yg(i, s)) && k === f) s.stateNode = v;
      else {
        var F = s.stateNode, G = nr(xn.current), X = null;
        k !== f && (X = Ee(F, u, k, f, p, G)), i && X === null ? s.stateNode = v : (v = A5(v, X, u, k, f, s, i, F), we(v, u, f, p, G) && ir(s), s.stateNode = v, i ? ir(s) : Os(v, s, !1, !1));
      }
    }, Pl = function(i, s, u, f) {
      u !== f ? (i = nr(Po.current), u = nr(xn.current), s.stateNode = Ve(f, i, u, s), ir(s)) : s.stateNode = i.stateNode;
    };
  } else Ds = function() {
  }, Cl = function() {
  }, Pl = function() {
  };
  function Bs(i, s) {
    if (!$e) switch (i.tailMode) {
      case "hidden":
        s = i.tail;
        for (var u = null; s !== null; ) s.alternate !== null && (u = s), s = s.sibling;
        u === null ? i.tail = null : u.sibling = null;
        break;
      case "collapsed":
        u = i.tail;
        for (var f = null; u !== null; ) u.alternate !== null && (f = u), u = u.sibling;
        f === null ? s || i.tail === null ? i.tail = null : i.tail.sibling = null : f.sibling = null;
    }
  }
  function Bt(i) {
    var s = i.alternate !== null && i.alternate.child === i.child, u = 0, f = 0;
    if (s) for (var p = i.child; p !== null; ) u |= p.lanes | p.childLanes, f |= p.subtreeFlags & 14680064, f |= p.flags & 14680064, p.return = i, p = p.sibling;
    else for (p = i.child; p !== null; ) u |= p.lanes | p.childLanes, f |= p.subtreeFlags, f |= p.flags, p.return = i, p = p.sibling;
    return i.subtreeFlags |= f, i.childLanes = u, s;
  }
  function C6(i, s, u) {
    var f = s.pendingProps;
    switch (Gh(s), s.tag) {
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
        return Bt(s), null;
      case 1:
        return Zt(s.type) && Ja(), Bt(s), null;
      case 3:
        return u = s.stateNode, To(), We(qt), We(Ot), Zh(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (i === null || i.child === null) && (ll(s) ? ir(s) : i === null || i.memoizedState.isDehydrated && !(s.flags & 256) || (s.flags |= 1024, Un !== null && (If(Un), Un = null))), Ds(i, s), Bt(s), null;
      case 5:
        $h(s), u = nr(Po.current);
        var p = s.type;
        if (i !== null && s.stateNode != null) Cl(i, s, p, f, u), i.ref !== s.ref && (s.flags |= 512, s.flags |= 2097152);
        else {
          if (!f) {
            if (s.stateNode === null) throw Error(l(166));
            return Bt(s), null;
          }
          if (i = nr(xn.current), ll(s)) {
            if (!je) throw Error(l(175));
            i = H5(s.stateNode, s.type, s.memoizedProps, u, i, s, !ks), s.updateQueue = i, i !== null && ir(s);
          } else {
            var v = $(p, f, u, i, s);
            Os(v, s, !1, !1), s.stateNode = v, we(v, p, f, u, i) && ir(s);
          }
          s.ref !== null && (s.flags |= 512, s.flags |= 2097152);
        }
        return Bt(s), null;
      case 6:
        if (i && s.stateNode != null) Pl(i, s, i.memoizedProps, f);
        else {
          if (typeof f != "string" && s.stateNode === null) throw Error(l(166));
          if (i = nr(Po.current), u = nr(xn.current), ll(s)) {
            if (!je) throw Error(l(176));
            if (i = s.stateNode, u = s.memoizedProps, (f = z5(i, u, s, !ks)) && (p = un, p !== null)) switch (p.tag) {
              case 3:
                Q5(p.stateNode.containerInfo, i, u, (p.mode & 1) !== 0);
                break;
              case 5:
                $5(p.type, p.memoizedProps, p.stateNode, i, u, (p.mode & 1) !== 0);
            }
            f && ir(s);
          } else s.stateNode = Ve(f, i, u, s);
        }
        return Bt(s), null;
      case 13:
        if (We(et), f = s.memoizedState, i === null || i.memoizedState !== null && i.memoizedState.dehydrated !== null) {
          if ($e && Sn !== null && s.mode & 1 && !(s.flags & 128)) x1(), wo(), s.flags |= 98560, p = !1;
          else if (p = ll(s), f !== null && f.dehydrated !== null) {
            if (i === null) {
              if (!p) throw Error(l(318));
              if (!je) throw Error(l(344));
              if (p = s.memoizedState, p = p !== null ? p.dehydrated : null, !p) throw Error(l(317));
              b5(p, s);
            } else wo(), !(s.flags & 128) && (s.memoizedState = null), s.flags |= 4;
            Bt(s), p = !1;
          } else Un !== null && (If(Un), Un = null), p = !0;
          if (!p) return s.flags & 65536 ? s : null;
        }
        return s.flags & 128 ? (s.lanes = u, s) : (u = f !== null, u !== (i !== null && i.memoizedState !== null) && u && (s.child.flags |= 8192, s.mode & 1 && (i === null || et.current & 1 ? vt === 0 && (vt = 3) : Df())), s.updateQueue !== null && (s.flags |= 4), Bt(s), null);
      case 4:
        return To(), Ds(i, s), i === null && Be(s.stateNode.containerInfo), Bt(s), null;
      case 10:
        return Wh(s.type._context), Bt(s), null;
      case 17:
        return Zt(s.type) && Ja(), Bt(s), null;
      case 19:
        if (We(et), p = s.memoizedState, p === null) return Bt(s), null;
        if (f = (s.flags & 128) !== 0, v = p.rendering, v === null) if (f) Bs(p, !1);
        else {
          if (vt !== 0 || i !== null && i.flags & 128) for (i = s.child; i !== null; ) {
            if (v = gl(i), v !== null) {
              for (s.flags |= 128, Bs(p, !1), i = v.updateQueue, i !== null && (s.updateQueue = i, s.flags |= 4), s.subtreeFlags = 0, i = u, u = s.child; u !== null; ) f = u, p = i, f.flags &= 14680066, v = f.alternate, v === null ? (f.childLanes = 0, f.lanes = p, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = v.childLanes, f.lanes = v.lanes, f.child = v.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = v.memoizedProps, f.memoizedState = v.memoizedState, f.updateQueue = v.updateQueue, f.type = v.type, p = v.dependencies, f.dependencies = p === null ? null : { lanes: p.lanes, firstContext: p.firstContext }), u = u.sibling;
              return ze(et, et.current & 1 | 2), s.child;
            }
            i = i.sibling;
          }
          p.tail !== null && Et() > Af && (s.flags |= 128, f = !0, Bs(p, !1), s.lanes = 4194304);
        }
        else {
          if (!f) if (i = gl(v), i !== null) {
            if (s.flags |= 128, f = !0, i = i.updateQueue, i !== null && (s.updateQueue = i, s.flags |= 4), Bs(p, !0), p.tail === null && p.tailMode === "hidden" && !v.alternate && !$e) return Bt(s), null;
          } else 2 * Et() - p.renderingStartTime > Af && u !== 1073741824 && (s.flags |= 128, f = !0, Bs(p, !1), s.lanes = 4194304);
          p.isBackwards ? (v.sibling = s.child, s.child = v) : (i = p.last, i !== null ? i.sibling = v : s.child = v, p.last = v);
        }
        return p.tail !== null ? (s = p.tail, p.rendering = s, p.tail = s.sibling, p.renderingStartTime = Et(), s.sibling = null, i = et.current, ze(et, f ? i & 1 | 2 : i & 1), s) : (Bt(s), null);
      case 22:
      case 23:
        return Of(), u = s.memoizedState !== null, i !== null && i.memoizedState !== null !== u && (s.flags |= 8192), u && s.mode & 1 ? cn & 1073741824 && (Bt(s), me && s.subtreeFlags & 6 && (s.flags |= 8192)) : Bt(s), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(
      156,
      s.tag
    ));
  }
  function P6(i, s) {
    switch (Gh(s), s.tag) {
      case 1:
        return Zt(s.type) && Ja(), i = s.flags, i & 65536 ? (s.flags = i & -65537 | 128, s) : null;
      case 3:
        return To(), We(qt), We(Ot), Zh(), i = s.flags, i & 65536 && !(i & 128) ? (s.flags = i & -65537 | 128, s) : null;
      case 5:
        return $h(s), null;
      case 13:
        if (We(et), i = s.memoizedState, i !== null && i.dehydrated !== null) {
          if (s.alternate === null) throw Error(l(340));
          wo();
        }
        return i = s.flags, i & 65536 ? (s.flags = i & -65537 | 128, s) : null;
      case 19:
        return We(et), null;
      case 4:
        return To(), null;
      case 10:
        return Wh(s.type._context), null;
      case 22:
      case 23:
        return Of(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Tl = !1, Ut = !1, T6 = typeof WeakSet == "function" ? WeakSet : Set, Z = null;
  function No(i, s) {
    var u = i.ref;
    if (u !== null) if (typeof u == "function") try {
      u(null);
    } catch (f) {
      qe(i, s, f);
    }
    else u.current = null;
  }
  function yf(i, s, u) {
    try {
      u();
    } catch (f) {
      qe(i, s, f);
    }
  }
  var Sg = !1;
  function k6(i, s) {
    for (re(i.containerInfo), Z = s; Z !== null; ) if (i = Z, s = i.child, (i.subtreeFlags & 1028) !== 0 && s !== null) s.return = i, Z = s;
    else for (; Z !== null; ) {
      i = Z;
      try {
        var u = i.alternate;
        if (i.flags & 1024) switch (i.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (u !== null) {
              var f = u.memoizedProps, p = u.memoizedState, v = i.stateNode, k = v.getSnapshotBeforeUpdate(i.elementType === i.type ? f : Gn(i.type, f), p);
              v.__reactInternalSnapshotBeforeUpdate = k;
            }
            break;
          case 3:
            me && R5(i.stateNode.containerInfo);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(l(163));
        }
      } catch (F) {
        qe(i, i.return, F);
      }
      if (s = i.sibling, s !== null) {
        s.return = i.return, Z = s;
        break;
      }
      Z = i.return;
    }
    return u = Sg, Sg = !1, u;
  }
  function Us(i, s, u) {
    var f = s.updateQueue;
    if (f = f !== null ? f.lastEffect : null, f !== null) {
      var p = f = f.next;
      do {
        if ((p.tag & i) === i) {
          var v = p.destroy;
          p.destroy = void 0, v !== void 0 && yf(s, u, v);
        }
        p = p.next;
      } while (p !== f);
    }
  }
  function kl(i, s) {
    if (s = s.updateQueue, s = s !== null ? s.lastEffect : null, s !== null) {
      var u = s = s.next;
      do {
        if ((u.tag & i) === i) {
          var f = u.create;
          u.destroy = f();
        }
        u = u.next;
      } while (u !== s);
    }
  }
  function _f(i) {
    var s = i.ref;
    if (s !== null) {
      var u = i.stateNode;
      switch (i.tag) {
        case 5:
          i = he(u);
          break;
        default:
          i = u;
      }
      typeof s == "function" ? s(i) : s.current = i;
    }
  }
  function wg(i) {
    var s = i.alternate;
    s !== null && (i.alternate = null, wg(s)), i.child = null, i.deletions = null, i.sibling = null, i.tag === 5 && (s = i.stateNode, s !== null && On(s)), i.stateNode = null, i.return = null, i.dependencies = null, i.memoizedProps = null, i.memoizedState = null, i.pendingProps = null, i.stateNode = null, i.updateQueue = null;
  }
  function xg(i) {
    return i.tag === 5 || i.tag === 3 || i.tag === 4;
  }
  function Eg(i) {
    e: for (; ; ) {
      for (; i.sibling === null; ) {
        if (i.return === null || xg(i.return)) return null;
        i = i.return;
      }
      for (i.sibling.return = i.return, i = i.sibling; i.tag !== 5 && i.tag !== 6 && i.tag !== 18; ) {
        if (i.flags & 2 || i.child === null || i.tag === 4) continue e;
        i.child.return = i, i = i.child;
      }
      if (!(i.flags & 2)) return i.stateNode;
    }
  }
  function Sf(i, s, u) {
    var f = i.tag;
    if (f === 5 || f === 6) i = i.stateNode, s ? x5(u, i, s) : v5(u, i);
    else if (f !== 4 && (i = i.child, i !== null)) for (Sf(i, s, u), i = i.sibling; i !== null; ) Sf(i, s, u), i = i.sibling;
  }
  function wf(i, s, u) {
    var f = i.tag;
    if (f === 5 || f === 6) i = i.stateNode, s ? w5(u, i, s) : m5(u, i);
    else if (f !== 4 && (i = i.child, i !== null)) for (wf(i, s, u), i = i.sibling; i !== null; ) wf(i, s, u), i = i.sibling;
  }
  var At = null, Hn = !1;
  function or(i, s, u) {
    for (u = u.child; u !== null; ) xf(i, s, u), u = u.sibling;
  }
  function xf(i, s, u) {
    if (Jn && typeof Jn.onCommitFiberUnmount == "function") try {
      Jn.onCommitFiberUnmount(il, u);
    } catch {
    }
    switch (u.tag) {
      case 5:
        Ut || No(u, s);
      case 6:
        if (me) {
          var f = At, p = Hn;
          At = null, or(i, s, u), At = f, Hn = p, At !== null && (Hn ? C5(At, u.stateNode) : E5(At, u.stateNode));
        } else or(i, s, u);
        break;
      case 18:
        me && At !== null && (Hn ? K5(At, u.stateNode) : X5(At, u.stateNode));
        break;
      case 4:
        me ? (f = At, p = Hn, At = u.stateNode.containerInfo, Hn = !0, or(i, s, u), At = f, Hn = p) : (He && (f = u.stateNode.containerInfo, p = s1(f), Ph(f, p)), or(i, s, u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ut && (f = u.updateQueue, f !== null && (f = f.lastEffect, f !== null))) {
          p = f = f.next;
          do {
            var v = p, k = v.destroy;
            v = v.tag, k !== void 0 && (v & 2 || v & 4) && yf(u, s, k), p = p.next;
          } while (p !== f);
        }
        or(i, s, u);
        break;
      case 1:
        if (!Ut && (No(u, s), f = u.stateNode, typeof f.componentWillUnmount == "function")) try {
          f.props = u.memoizedProps, f.state = u.memoizedState, f.componentWillUnmount();
        } catch (F) {
          qe(u, s, F);
        }
        or(i, s, u);
        break;
      case 21:
        or(i, s, u);
        break;
      case 22:
        u.mode & 1 ? (Ut = (f = Ut) || u.memoizedState !== null, or(i, s, u), Ut = f) : or(i, s, u);
        break;
      default:
        or(
          i,
          s,
          u
        );
    }
  }
  function Cg(i) {
    var s = i.updateQueue;
    if (s !== null) {
      i.updateQueue = null;
      var u = i.stateNode;
      u === null && (u = i.stateNode = new T6()), s.forEach(function(f) {
        var p = D6.bind(null, i, f);
        u.has(f) || (u.add(f), f.then(p, p));
      });
    }
  }
  function zn(i, s) {
    var u = s.deletions;
    if (u !== null) for (var f = 0; f < u.length; f++) {
      var p = u[f];
      try {
        var v = i, k = s;
        if (me) {
          var F = k;
          e: for (; F !== null; ) {
            switch (F.tag) {
              case 5:
                At = F.stateNode, Hn = !1;
                break e;
              case 3:
                At = F.stateNode.containerInfo, Hn = !0;
                break e;
              case 4:
                At = F.stateNode.containerInfo, Hn = !0;
                break e;
            }
            F = F.return;
          }
          if (At === null) throw Error(l(160));
          xf(v, k, p), At = null, Hn = !1;
        } else xf(v, k, p);
        var G = p.alternate;
        G !== null && (G.return = null), p.return = null;
      } catch (X) {
        qe(p, s, X);
      }
    }
    if (s.subtreeFlags & 12854) for (s = s.child; s !== null; ) Pg(s, i), s = s.sibling;
  }
  function Pg(i, s) {
    var u = i.alternate, f = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (zn(s, i), sr(i), f & 4) {
          try {
            Us(3, i, i.return), kl(3, i);
          } catch (Y) {
            qe(i, i.return, Y);
          }
          try {
            Us(5, i, i.return);
          } catch (Y) {
            qe(i, i.return, Y);
          }
        }
        break;
      case 1:
        zn(s, i), sr(i), f & 512 && u !== null && No(u, u.return);
        break;
      case 5:
        if (zn(s, i), sr(i), f & 512 && u !== null && No(u, u.return), me) {
          if (i.flags & 32) {
            var p = i.stateNode;
            try {
              o1(p);
            } catch (Y) {
              qe(i, i.return, Y);
            }
          }
          if (f & 4 && (p = i.stateNode, p != null)) {
            var v = i.memoizedProps;
            if (u = u !== null ? u.memoizedProps : v, f = i.type, s = i.updateQueue, i.updateQueue = null, s !== null) try {
              S5(p, s, f, u, v, i);
            } catch (Y) {
              qe(i, i.return, Y);
            }
          }
        }
        break;
      case 6:
        if (zn(s, i), sr(i), f & 4 && me) {
          if (i.stateNode === null) throw Error(l(162));
          p = i.stateNode, v = i.memoizedProps, u = u !== null ? u.memoizedProps : v;
          try {
            y5(p, u, v);
          } catch (Y) {
            qe(i, i.return, Y);
          }
        }
        break;
      case 3:
        if (zn(s, i), sr(i), f & 4) {
          if (me && je && u !== null && u.memoizedState.isDehydrated) try {
            j5(s.containerInfo);
          } catch (Y) {
            qe(i, i.return, Y);
          }
          if (He) {
            p = s.containerInfo, v = s.pendingChildren;
            try {
              Ph(p, v);
            } catch (Y) {
              qe(i, i.return, Y);
            }
          }
        }
        break;
      case 4:
        if (zn(
          s,
          i
        ), sr(i), f & 4 && He) {
          v = i.stateNode, p = v.containerInfo, v = v.pendingChildren;
          try {
            Ph(p, v);
          } catch (Y) {
            qe(i, i.return, Y);
          }
        }
        break;
      case 13:
        zn(s, i), sr(i), p = i.child, p.flags & 8192 && (v = p.memoizedState !== null, p.stateNode.isHidden = v, !v || p.alternate !== null && p.alternate.memoizedState !== null || (Rf = Et())), f & 4 && Cg(i);
        break;
      case 22:
        var k = u !== null && u.memoizedState !== null;
        if (i.mode & 1 ? (Ut = (u = Ut) || k, zn(s, i), Ut = u) : zn(s, i), sr(i), f & 8192) {
          if (u = i.memoizedState !== null, (i.stateNode.isHidden = u) && !k && i.mode & 1) for (Z = i, f = i.child; f !== null; ) {
            for (s = Z = f; Z !== null; ) {
              k = Z;
              var F = k.child;
              switch (k.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Us(4, k, k.return);
                  break;
                case 1:
                  No(k, k.return);
                  var G = k.stateNode;
                  if (typeof G.componentWillUnmount == "function") {
                    var X = k, ee = k.return;
                    try {
                      var pe = X;
                      G.props = pe.memoizedProps, G.state = pe.memoizedState, G.componentWillUnmount();
                    } catch (Y) {
                      qe(X, ee, Y);
                    }
                  }
                  break;
                case 5:
                  No(k, k.return);
                  break;
                case 22:
                  if (k.memoizedState !== null) {
                    Ng(s);
                    continue;
                  }
              }
              F !== null ? (F.return = k, Z = F) : Ng(s);
            }
            f = f.sibling;
          }
          if (me) {
            e: if (f = null, me) for (s = i; ; ) {
              if (s.tag === 5) {
                if (f === null) {
                  f = s;
                  try {
                    p = s.stateNode, u ? P5(p) : k5(s.stateNode, s.memoizedProps);
                  } catch (Y) {
                    qe(i, i.return, Y);
                  }
                }
              } else if (s.tag === 6) {
                if (f === null) try {
                  v = s.stateNode, u ? T5(v) : N5(v, s.memoizedProps);
                } catch (Y) {
                  qe(i, i.return, Y);
                }
              } else if ((s.tag !== 22 && s.tag !== 23 || s.memoizedState === null || s === i) && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === i) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === i) break e;
                f === s && (f = null), s = s.return;
              }
              f === s && (f = null), s.sibling.return = s.return, s = s.sibling;
            }
          }
        }
        break;
      case 19:
        zn(s, i), sr(i), f & 4 && Cg(i);
        break;
      case 21:
        break;
      default:
        zn(s, i), sr(i);
    }
  }
  function sr(i) {
    var s = i.flags;
    if (s & 2) {
      try {
        if (me) {
          e: {
            for (var u = i.return; u !== null; ) {
              if (xg(u)) {
                var f = u;
                break e;
              }
              u = u.return;
            }
            throw Error(l(160));
          }
          switch (f.tag) {
            case 5:
              var p = f.stateNode;
              f.flags & 32 && (o1(p), f.flags &= -33);
              var v = Eg(i);
              wf(i, v, p);
              break;
            case 3:
            case 4:
              var k = f.stateNode.containerInfo, F = Eg(i);
              Sf(i, F, k);
              break;
            default:
              throw Error(l(161));
          }
        }
      } catch (G) {
        qe(i, i.return, G);
      }
      i.flags &= -3;
    }
    s & 4096 && (i.flags &= -4097);
  }
  function N6(i, s, u) {
    Z = i, Tg(i);
  }
  function Tg(i, s, u) {
    for (var f = (i.mode & 1) !== 0; Z !== null; ) {
      var p = Z, v = p.child;
      if (p.tag === 22 && f) {
        var k = p.memoizedState !== null || Tl;
        if (!k) {
          var F = p.alternate, G = F !== null && F.memoizedState !== null || Ut;
          F = Tl;
          var X = Ut;
          if (Tl = k, (Ut = G) && !X) for (Z = p; Z !== null; ) k = Z, G = k.child, k.tag === 22 && k.memoizedState !== null ? Rg(p) : G !== null ? (G.return = k, Z = G) : Rg(p);
          for (; v !== null; ) Z = v, Tg(v), v = v.sibling;
          Z = p, Tl = F, Ut = X;
        }
        kg(i);
      } else p.subtreeFlags & 8772 && v !== null ? (v.return = p, Z = v) : kg(i);
    }
  }
  function kg(i) {
    for (; Z !== null; ) {
      var s = Z;
      if (s.flags & 8772) {
        var u = s.alternate;
        try {
          if (s.flags & 8772) switch (s.tag) {
            case 0:
            case 11:
            case 15:
              Ut || kl(5, s);
              break;
            case 1:
              var f = s.stateNode;
              if (s.flags & 4 && !Ut) if (u === null) f.componentDidMount();
              else {
                var p = s.elementType === s.type ? u.memoizedProps : Gn(s.type, u.memoizedProps);
                f.componentDidUpdate(p, u.memoizedState, f.__reactInternalSnapshotBeforeUpdate);
              }
              var v = s.updateQueue;
              v !== null && A1(s, v, f);
              break;
            case 3:
              var k = s.updateQueue;
              if (k !== null) {
                if (u = null, s.child !== null) switch (s.child.tag) {
                  case 5:
                    u = he(s.child.stateNode);
                    break;
                  case 1:
                    u = s.child.stateNode;
                }
                A1(s, k, u);
              }
              break;
            case 5:
              var F = s.stateNode;
              u === null && s.flags & 4 && _5(F, s.type, s.memoizedProps, s);
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (je && s.memoizedState === null) {
                var G = s.alternate;
                if (G !== null) {
                  var X = G.memoizedState;
                  if (X !== null) {
                    var ee = X.dehydrated;
                    ee !== null && W5(ee);
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
              throw Error(l(163));
          }
          Ut || s.flags & 512 && _f(s);
        } catch (pe) {
          qe(s, s.return, pe);
        }
      }
      if (s === i) {
        Z = null;
        break;
      }
      if (u = s.sibling, u !== null) {
        u.return = s.return, Z = u;
        break;
      }
      Z = s.return;
    }
  }
  function Ng(i) {
    for (; Z !== null; ) {
      var s = Z;
      if (s === i) {
        Z = null;
        break;
      }
      var u = s.sibling;
      if (u !== null) {
        u.return = s.return, Z = u;
        break;
      }
      Z = s.return;
    }
  }
  function Rg(i) {
    for (; Z !== null; ) {
      var s = Z;
      try {
        switch (s.tag) {
          case 0:
          case 11:
          case 15:
            var u = s.return;
            try {
              kl(4, s);
            } catch (G) {
              qe(s, u, G);
            }
            break;
          case 1:
            var f = s.stateNode;
            if (typeof f.componentDidMount == "function") {
              var p = s.return;
              try {
                f.componentDidMount();
              } catch (G) {
                qe(s, p, G);
              }
            }
            var v = s.return;
            try {
              _f(s);
            } catch (G) {
              qe(s, v, G);
            }
            break;
          case 5:
            var k = s.return;
            try {
              _f(s);
            } catch (G) {
              qe(s, k, G);
            }
        }
      } catch (G) {
        qe(s, s.return, G);
      }
      if (s === i) {
        Z = null;
        break;
      }
      var F = s.sibling;
      if (F !== null) {
        F.return = s.return, Z = F;
        break;
      }
      Z = s.return;
    }
  }
  var Nl = 0, Rl = 1, Al = 2, Ml = 3, Ll = 4;
  if (typeof Symbol == "function" && Symbol.for) {
    var Gs = Symbol.for;
    Nl = Gs("selector.component"), Rl = Gs("selector.has_pseudo_class"), Al = Gs("selector.role"), Ml = Gs("selector.test_id"), Ll = Gs("selector.text");
  }
  function Ef(i) {
    var s = Zn(i);
    if (s != null) {
      if (typeof s.memoizedProps["data-testname"] != "string") throw Error(l(364));
      return s;
    }
    if (i = c5(i), i === null) throw Error(l(362));
    return i.stateNode.current;
  }
  function Cf(i, s) {
    switch (s.$$typeof) {
      case Nl:
        if (i.type === s.value) return !0;
        break;
      case Rl:
        e: {
          s = s.value, i = [i, 0];
          for (var u = 0; u < i.length; ) {
            var f = i[u++], p = i[u++], v = s[p];
            if (f.tag !== 5 || !Es(f)) {
              for (; v != null && Cf(f, v); ) p++, v = s[p];
              if (p === s.length) {
                s = !0;
                break e;
              } else for (f = f.child; f !== null; ) i.push(f, p), f = f.sibling;
            }
          }
          s = !1;
        }
        return s;
      case Al:
        if (i.tag === 5 && d5(i.stateNode, s.value)) return !0;
        break;
      case Ll:
        if ((i.tag === 5 || i.tag === 6) && (i = f5(i), i !== null && 0 <= i.indexOf(s.value))) return !0;
        break;
      case Ml:
        if (i.tag === 5 && (i = i.memoizedProps["data-testname"], typeof i == "string" && i.toLowerCase() === s.value.toLowerCase())) return !0;
        break;
      default:
        throw Error(l(365));
    }
    return !1;
  }
  function Pf(i) {
    switch (i.$$typeof) {
      case Nl:
        return "<" + (L(i.value) || "Unknown") + ">";
      case Rl:
        return ":has(" + (Pf(i) || "") + ")";
      case Al:
        return '[role="' + i.value + '"]';
      case Ll:
        return '"' + i.value + '"';
      case Ml:
        return '[data-testname="' + i.value + '"]';
      default:
        throw Error(l(365));
    }
  }
  function Ag(i, s) {
    var u = [];
    i = [i, 0];
    for (var f = 0; f < i.length; ) {
      var p = i[f++], v = i[f++], k = s[v];
      if (p.tag !== 5 || !Es(p)) {
        for (; k != null && Cf(p, k); ) v++, k = s[v];
        if (v === s.length) u.push(p);
        else for (p = p.child; p !== null; ) i.push(p, v), p = p.sibling;
      }
    }
    return u;
  }
  function Tf(i, s) {
    if (!xs) throw Error(l(363));
    i = Ef(i), i = Ag(i, s), s = [], i = Array.from(i);
    for (var u = 0; u < i.length; ) {
      var f = i[u++];
      if (f.tag === 5) Es(f) || s.push(f.stateNode);
      else for (f = f.child; f !== null; ) i.push(f), f = f.sibling;
    }
    return s;
  }
  var R6 = Math.ceil, Fl = c.ReactCurrentDispatcher, kf = c.ReactCurrentOwner, ut = c.ReactCurrentBatchConfig, Se = 0, Pt = null, dt = null, Mt = 0, cn = 0, Ro = Wr(0), vt = 0, Hs = null, Gi = 0, Il = 0, Nf = 0, zs = null, en = null, Rf = 0, Af = 1 / 0, Cr = null;
  function Ao() {
    Af = Et() + 500;
  }
  var Ol = !1, Mf = null, Qr = null, Dl = !1, $r = null, Bl = 0, bs = 0, Lf = null, Ul = -1, Gl = 0;
  function Gt() {
    return Se & 6 ? Et() : Ul !== -1 ? Ul : Ul = Et();
  }
  function qr(i) {
    return i.mode & 1 ? Se & 2 && Mt !== 0 ? Mt & -Mt : h6.transition !== null ? (Gl === 0 && (Gl = p1()), Gl) : (i = Re, i !== 0 ? i : Vr()) : 1;
  }
  function Cn(i, s, u, f) {
    if (50 < bs) throw bs = 0, Lf = null, Error(l(185));
    Ts(i, u, f), (!(Se & 2) || i !== Pt) && (i === Pt && (!(Se & 2) && (Il |= u), vt === 4 && Zr(i, Mt)), tn(i, f), u === 1 && Se === 0 && !(s.mode & 1) && (Ao(), ol && er()));
  }
  function tn(i, s) {
    var u = i.callbackNode;
    n6(i, s);
    var f = rl(i, i === Pt ? Mt : 0);
    if (f === 0) u !== null && m1(u), i.callbackNode = null, i.callbackPriority = 0;
    else if (s = f & -f, i.callbackPriority !== s) {
      if (u != null && m1(u), s === 1) i.tag === 0 ? c6(Lg.bind(null, i)) : v1(Lg.bind(null, i)), jr ? u5(function() {
        !(Se & 6) && er();
      }) : Ih(Oh, er), u = null;
      else {
        switch (g1(f)) {
          case 1:
            u = Oh;
            break;
          case 4:
            u = s6;
            break;
          case 16:
            u = Dh;
            break;
          case 536870912:
            u = a6;
            break;
          default:
            u = Dh;
        }
        u = zg(u, Mg.bind(null, i));
      }
      i.callbackPriority = s, i.callbackNode = u;
    }
  }
  function Mg(i, s) {
    if (Ul = -1, Gl = 0, Se & 6) throw Error(l(327));
    var u = i.callbackNode;
    if (bi() && i.callbackNode !== u) return null;
    var f = rl(i, i === Pt ? Mt : 0);
    if (f === 0) return null;
    if (f & 30 || f & i.expiredLanes || s) s = Hl(i, f);
    else {
      s = f;
      var p = Se;
      Se |= 2;
      var v = Og();
      (Pt !== i || Mt !== s) && (Cr = null, Ao(), Hi(i, s));
      do
        try {
          L6();
          break;
        } catch (F) {
          Ig(i, F);
        }
      while (!0);
      jh(), Fl.current = v, Se = p, dt !== null ? s = 0 : (Pt = null, Mt = 0, s = vt);
    }
    if (s !== 0) {
      if (s === 2 && (p = Mh(i), p !== 0 && (f = p, s = Ff(i, p))), s === 1) throw u = Hs, Hi(i, 0), Zr(i, f), tn(i, Et()), u;
      if (s === 6) Zr(i, f);
      else {
        if (p = i.current.alternate, !(f & 30) && !A6(p) && (s = Hl(i, f), s === 2 && (v = Mh(i), v !== 0 && (f = v, s = Ff(i, v))), s === 1)) throw u = Hs, Hi(i, 0), Zr(i, f), tn(i, Et()), u;
        switch (i.finishedWork = p, i.finishedLanes = f, s) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            zi(i, en, Cr);
            break;
          case 3:
            if (Zr(i, f), (f & 130023424) === f && (s = Rf + 500 - Et(), 10 < s)) {
              if (rl(i, 0) !== 0) break;
              if (p = i.suspendedLanes, (p & f) !== f) {
                Gt(), i.pingedLanes |= i.suspendedLanes & p;
                break;
              }
              i.timeoutHandle = I(zi.bind(null, i, en, Cr), s);
              break;
            }
            zi(i, en, Cr);
            break;
          case 4:
            if (Zr(i, f), (f & 4194240) === f) break;
            for (s = i.eventTimes, p = -1; 0 < f; ) {
              var k = 31 - Dn(f);
              v = 1 << k, k = s[k], k > p && (p = k), f &= ~v;
            }
            if (f = p, f = Et() - f, f = (120 > f ? 120 : 480 > f ? 480 : 1080 > f ? 1080 : 1920 > f ? 1920 : 3e3 > f ? 3e3 : 4320 > f ? 4320 : 1960 * R6(f / 1960)) - f, 10 < f) {
              i.timeoutHandle = I(zi.bind(null, i, en, Cr), f);
              break;
            }
            zi(i, en, Cr);
            break;
          case 5:
            zi(i, en, Cr);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return tn(i, Et()), i.callbackNode === u ? Mg.bind(null, i) : null;
  }
  function Ff(i, s) {
    var u = zs;
    return i.current.memoizedState.isDehydrated && (Hi(i, s).flags |= 256), i = Hl(i, s), i !== 2 && (s = en, en = u, s !== null && If(s)), i;
  }
  function If(i) {
    en === null ? en = i : en.push.apply(en, i);
  }
  function A6(i) {
    for (var s = i; ; ) {
      if (s.flags & 16384) {
        var u = s.updateQueue;
        if (u !== null && (u = u.stores, u !== null)) for (var f = 0; f < u.length; f++) {
          var p = u[f], v = p.getSnapshot;
          p = p.value;
          try {
            if (!Bn(v(), p)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (u = s.child, s.subtreeFlags & 16384 && u !== null) u.return = s, s = u;
      else {
        if (s === i) break;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === i) return !0;
          s = s.return;
        }
        s.sibling.return = s.return, s = s.sibling;
      }
    }
    return !0;
  }
  function Zr(i, s) {
    for (s &= ~Nf, s &= ~Il, i.suspendedLanes |= s, i.pingedLanes &= ~s, i = i.expirationTimes; 0 < s; ) {
      var u = 31 - Dn(s), f = 1 << u;
      i[u] = -1, s &= ~f;
    }
  }
  function Lg(i) {
    if (Se & 6) throw Error(l(327));
    bi();
    var s = rl(i, 0);
    if (!(s & 1)) return tn(i, Et()), null;
    var u = Hl(i, s);
    if (i.tag !== 0 && u === 2) {
      var f = Mh(i);
      f !== 0 && (s = f, u = Ff(i, f));
    }
    if (u === 1) throw u = Hs, Hi(i, 0), Zr(i, s), tn(i, Et()), u;
    if (u === 6) throw Error(l(345));
    return i.finishedWork = i.current.alternate, i.finishedLanes = s, zi(i, en, Cr), tn(i, Et()), null;
  }
  function Fg(i) {
    $r !== null && $r.tag === 0 && !(Se & 6) && bi();
    var s = Se;
    Se |= 1;
    var u = ut.transition, f = Re;
    try {
      if (ut.transition = null, Re = 1, i) return i();
    } finally {
      Re = f, ut.transition = u, Se = s, !(Se & 6) && er();
    }
  }
  function Of() {
    cn = Ro.current, We(Ro);
  }
  function Hi(i, s) {
    i.finishedWork = null, i.finishedLanes = 0;
    var u = i.timeoutHandle;
    if (u !== ie && (i.timeoutHandle = ie, V(u)), dt !== null) for (u = dt.return; u !== null; ) {
      var f = u;
      switch (Gh(f), f.tag) {
        case 1:
          f = f.type.childContextTypes, f != null && Ja();
          break;
        case 3:
          To(), We(qt), We(Ot), Zh();
          break;
        case 5:
          $h(f);
          break;
        case 4:
          To();
          break;
        case 13:
          We(et);
          break;
        case 19:
          We(et);
          break;
        case 10:
          Wh(f.type._context);
          break;
        case 22:
        case 23:
          Of();
      }
      u = u.return;
    }
    if (Pt = i, dt = i = Jr(i.current, null), Mt = cn = s, vt = 0, Hs = null, Nf = Il = Gi = 0, en = zs = null, Bi !== null) {
      for (s = 0; s < Bi.length; s++) if (u = Bi[s], f = u.interleaved, f !== null) {
        u.interleaved = null;
        var p = f.next, v = u.pending;
        if (v !== null) {
          var k = v.next;
          v.next = p, f.next = k;
        }
        u.pending = f;
      }
      Bi = null;
    }
    return i;
  }
  function Ig(i, s) {
    do {
      var u = dt;
      try {
        if (jh(), ml.current = Sl, vl) {
          for (var f = tt.memoizedState; f !== null; ) {
            var p = f.queue;
            p !== null && (p.pending = null), f = f.next;
          }
          vl = !1;
        }
        if (Ui = 0, Ct = mt = tt = null, Ms = !1, Ls = 0, kf.current = null, u === null || u.return === null) {
          vt = 1, Hs = s, dt = null;
          break;
        }
        e: {
          var v = i, k = u.return, F = u, G = s;
          if (s = Mt, F.flags |= 32768, G !== null && typeof G == "object" && typeof G.then == "function") {
            var X = G, ee = F, pe = ee.tag;
            if (!(ee.mode & 1) && (pe === 0 || pe === 11 || pe === 15)) {
              var Y = ee.alternate;
              Y ? (ee.updateQueue = Y.updateQueue, ee.memoizedState = Y.memoizedState, ee.lanes = Y.lanes) : (ee.updateQueue = null, ee.memoizedState = null);
            }
            var Xe = og(k);
            if (Xe !== null) {
              Xe.flags &= -257, sg(Xe, k, F, v, s), Xe.mode & 1 && ig(v, X, s), s = Xe, G = X;
              var Ue = s.updateQueue;
              if (Ue === null) {
                var nn = /* @__PURE__ */ new Set();
                nn.add(G), s.updateQueue = nn;
              } else Ue.add(G);
              break e;
            } else {
              if (!(s & 1)) {
                ig(v, X, s), Df();
                break e;
              }
              G = Error(l(426));
            }
          } else if ($e && F.mode & 1) {
            var Pr = og(k);
            if (Pr !== null) {
              !(Pr.flags & 65536) && (Pr.flags |= 256), sg(Pr, k, F, v, s), bh(ko(G, F));
              break e;
            }
          }
          v = G = ko(G, F), vt !== 4 && (vt = 2), zs === null ? zs = [v] : zs.push(v), v = k;
          do {
            switch (v.tag) {
              case 3:
                v.flags |= 65536, s &= -s, v.lanes |= s;
                var U = ng(v, G, s);
                R1(v, U);
                break e;
              case 1:
                F = G;
                var O = v.type, H = v.stateNode;
                if (!(v.flags & 128) && (typeof O.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && (Qr === null || !Qr.has(H)))) {
                  v.flags |= 65536, s &= -s, v.lanes |= s;
                  var Q = rg(v, F, s);
                  R1(v, Q);
                  break e;
                }
            }
            v = v.return;
          } while (v !== null);
        }
        Bg(u);
      } catch (le) {
        s = le, dt === u && u !== null && (dt = u = u.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Og() {
    var i = Fl.current;
    return Fl.current = Sl, i === null ? Sl : i;
  }
  function Df() {
    (vt === 0 || vt === 3 || vt === 2) && (vt = 4), Pt === null || !(Gi & 268435455) && !(Il & 268435455) || Zr(Pt, Mt);
  }
  function Hl(i, s) {
    var u = Se;
    Se |= 2;
    var f = Og();
    (Pt !== i || Mt !== s) && (Cr = null, Hi(i, s));
    do
      try {
        M6();
        break;
      } catch (p) {
        Ig(i, p);
      }
    while (!0);
    if (jh(), Se = u, Fl.current = f, dt !== null) throw Error(l(261));
    return Pt = null, Mt = 0, vt;
  }
  function M6() {
    for (; dt !== null; ) Dg(dt);
  }
  function L6() {
    for (; dt !== null && !i6(); ) Dg(dt);
  }
  function Dg(i) {
    var s = Hg(i.alternate, i, cn);
    i.memoizedProps = i.pendingProps, s === null ? Bg(i) : dt = s, kf.current = null;
  }
  function Bg(i) {
    var s = i;
    do {
      var u = s.alternate;
      if (i = s.return, s.flags & 32768) {
        if (u = P6(u, s), u !== null) {
          u.flags &= 32767, dt = u;
          return;
        }
        if (i !== null) i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null;
        else {
          vt = 6, dt = null;
          return;
        }
      } else if (u = C6(u, s, cn), u !== null) {
        dt = u;
        return;
      }
      if (s = s.sibling, s !== null) {
        dt = s;
        return;
      }
      dt = s = i;
    } while (s !== null);
    vt === 0 && (vt = 5);
  }
  function zi(i, s, u) {
    var f = Re, p = ut.transition;
    try {
      ut.transition = null, Re = 1, F6(i, s, u, f);
    } finally {
      ut.transition = p, Re = f;
    }
    return null;
  }
  function F6(i, s, u, f) {
    do
      bi();
    while ($r !== null);
    if (Se & 6) throw Error(l(327));
    u = i.finishedWork;
    var p = i.finishedLanes;
    if (u === null) return null;
    if (i.finishedWork = null, i.finishedLanes = 0, u === i.current) throw Error(l(177));
    i.callbackNode = null, i.callbackPriority = 0;
    var v = u.lanes | u.childLanes;
    if (r6(i, v), i === Pt && (dt = Pt = null, Mt = 0), !(u.subtreeFlags & 2064) && !(u.flags & 2064) || Dl || (Dl = !0, zg(Dh, function() {
      return bi(), null;
    })), v = (u.flags & 15990) !== 0, u.subtreeFlags & 15990 || v) {
      v = ut.transition, ut.transition = null;
      var k = Re;
      Re = 1;
      var F = Se;
      Se |= 4, kf.current = null, k6(i, u), Pg(u, i), b(i.containerInfo), i.current = u, N6(u), o6(), Se = F, Re = k, ut.transition = v;
    } else i.current = u;
    if (Dl && (Dl = !1, $r = i, Bl = p), v = i.pendingLanes, v === 0 && (Qr = null), l6(u.stateNode), tn(i, Et()), s !== null) for (f = i.onRecoverableError, u = 0; u < s.length; u++) p = s[u], f(p.value, { componentStack: p.stack, digest: p.digest });
    if (Ol) throw Ol = !1, i = Mf, Mf = null, i;
    return Bl & 1 && i.tag !== 0 && bi(), v = i.pendingLanes, v & 1 ? i === Lf ? bs++ : (bs = 0, Lf = i) : bs = 0, er(), null;
  }
  function bi() {
    if ($r !== null) {
      var i = g1(Bl), s = ut.transition, u = Re;
      try {
        if (ut.transition = null, Re = 16 > i ? 16 : i, $r === null) var f = !1;
        else {
          if (i = $r, $r = null, Bl = 0, Se & 6) throw Error(l(331));
          var p = Se;
          for (Se |= 4, Z = i.current; Z !== null; ) {
            var v = Z, k = v.child;
            if (Z.flags & 16) {
              var F = v.deletions;
              if (F !== null) {
                for (var G = 0; G < F.length; G++) {
                  var X = F[G];
                  for (Z = X; Z !== null; ) {
                    var ee = Z;
                    switch (ee.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Us(8, ee, v);
                    }
                    var pe = ee.child;
                    if (pe !== null) pe.return = ee, Z = pe;
                    else for (; Z !== null; ) {
                      ee = Z;
                      var Y = ee.sibling, Xe = ee.return;
                      if (wg(ee), ee === X) {
                        Z = null;
                        break;
                      }
                      if (Y !== null) {
                        Y.return = Xe, Z = Y;
                        break;
                      }
                      Z = Xe;
                    }
                  }
                }
                var Ue = v.alternate;
                if (Ue !== null) {
                  var nn = Ue.child;
                  if (nn !== null) {
                    Ue.child = null;
                    do {
                      var Pr = nn.sibling;
                      nn.sibling = null, nn = Pr;
                    } while (nn !== null);
                  }
                }
                Z = v;
              }
            }
            if (v.subtreeFlags & 2064 && k !== null) k.return = v, Z = k;
            else e: for (; Z !== null; ) {
              if (v = Z, v.flags & 2048) switch (v.tag) {
                case 0:
                case 11:
                case 15:
                  Us(9, v, v.return);
              }
              var U = v.sibling;
              if (U !== null) {
                U.return = v.return, Z = U;
                break e;
              }
              Z = v.return;
            }
          }
          var O = i.current;
          for (Z = O; Z !== null; ) {
            k = Z;
            var H = k.child;
            if (k.subtreeFlags & 2064 && H !== null) H.return = k, Z = H;
            else e: for (k = O; Z !== null; ) {
              if (F = Z, F.flags & 2048) try {
                switch (F.tag) {
                  case 0:
                  case 11:
                  case 15:
                    kl(9, F);
                }
              } catch (le) {
                qe(F, F.return, le);
              }
              if (F === k) {
                Z = null;
                break e;
              }
              var Q = F.sibling;
              if (Q !== null) {
                Q.return = F.return, Z = Q;
                break e;
              }
              Z = F.return;
            }
          }
          if (Se = p, er(), Jn && typeof Jn.onPostCommitFiberRoot == "function") try {
            Jn.onPostCommitFiberRoot(il, i);
          } catch {
          }
          f = !0;
        }
        return f;
      } finally {
        Re = u, ut.transition = s;
      }
    }
    return !1;
  }
  function Ug(i, s, u) {
    s = ko(u, s), s = ng(i, s, 1), i = Yr(i, s, 1), s = Gt(), i !== null && (Ts(i, 1, s), tn(i, s));
  }
  function qe(i, s, u) {
    if (i.tag === 3) Ug(i, i, u);
    else for (; s !== null; ) {
      if (s.tag === 3) {
        Ug(s, i, u);
        break;
      } else if (s.tag === 1) {
        var f = s.stateNode;
        if (typeof s.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (Qr === null || !Qr.has(f))) {
          i = ko(u, i), i = rg(s, i, 1), s = Yr(s, i, 1), i = Gt(), s !== null && (Ts(s, 1, i), tn(s, i));
          break;
        }
      }
      s = s.return;
    }
  }
  function I6(i, s, u) {
    var f = i.pingCache;
    f !== null && f.delete(s), s = Gt(), i.pingedLanes |= i.suspendedLanes & u, Pt === i && (Mt & u) === u && (vt === 4 || vt === 3 && (Mt & 130023424) === Mt && 500 > Et() - Rf ? Hi(i, 0) : Nf |= u), tn(i, s);
  }
  function Gg(i, s) {
    s === 0 && (i.mode & 1 ? (s = nl, nl <<= 1, !(nl & 130023424) && (nl = 4194304)) : s = 1);
    var u = Gt();
    i = tr(i, s), i !== null && (Ts(i, s, u), tn(i, u));
  }
  function O6(i) {
    var s = i.memoizedState, u = 0;
    s !== null && (u = s.retryLane), Gg(i, u);
  }
  function D6(i, s) {
    var u = 0;
    switch (i.tag) {
      case 13:
        var f = i.stateNode, p = i.memoizedState;
        p !== null && (u = p.retryLane);
        break;
      case 19:
        f = i.stateNode;
        break;
      default:
        throw Error(l(314));
    }
    f !== null && f.delete(s), Gg(i, u);
  }
  var Hg;
  Hg = function(i, s, u) {
    if (i !== null) if (i.memoizedProps !== s.pendingProps || qt.current) Jt = !0;
    else {
      if (!(i.lanes & u) && !(s.flags & 128)) return Jt = !1, E6(i, s, u);
      Jt = !!(i.flags & 131072);
    }
    else Jt = !1, $e && s.flags & 1048576 && y1(s, al, s.index);
    switch (s.lanes = 0, s.tag) {
      case 2:
        var f = s.type;
        El(i, s), i = s.pendingProps;
        var p = yo(s, Ot.current);
        Co(s, u), p = tf(null, s, f, i, p, u);
        var v = nf();
        return s.flags |= 1, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (s.tag = 1, s.memoizedState = null, s.updateQueue = null, Zt(f) ? (v = !0, el(s)) : v = !1, s.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Yh(s), p.updater = wl, s.stateNode = p, p._reactInternals = s, uf(s, f, i, u), s = df(null, s, f, !0, v, u)) : (s.tag = 0, $e && v && Uh(s), Wt(null, s, p, u), s = s.child), s;
      case 16:
        f = s.elementType;
        e: {
          switch (El(i, s), i = s.pendingProps, p = f._init, f = p(f._payload), s.type = f, p = s.tag = U6(f), i = Gn(f, i), p) {
            case 0:
              s = ff(null, s, f, i, u);
              break e;
            case 1:
              s = fg(null, s, f, i, u);
              break e;
            case 11:
              s = ag(null, s, f, i, u);
              break e;
            case 14:
              s = lg(null, s, f, Gn(f.type, i), u);
              break e;
          }
          throw Error(l(
            306,
            f,
            ""
          ));
        }
        return s;
      case 0:
        return f = s.type, p = s.pendingProps, p = s.elementType === f ? p : Gn(f, p), ff(i, s, f, p, u);
      case 1:
        return f = s.type, p = s.pendingProps, p = s.elementType === f ? p : Gn(f, p), fg(i, s, f, p, u);
      case 3:
        e: {
          if (dg(s), i === null) throw Error(l(387));
          f = s.pendingProps, v = s.memoizedState, p = v.element, N1(i, s), pl(s, f, null, u);
          var k = s.memoizedState;
          if (f = k.element, je && v.isDehydrated) if (v = { element: f, isDehydrated: !1, cache: k.cache, pendingSuspenseBoundaries: k.pendingSuspenseBoundaries, transitions: k.transitions }, s.updateQueue.baseState = v, s.memoizedState = v, s.flags & 256) {
            p = ko(Error(l(423)), s), s = pg(i, s, f, u, p);
            break e;
          } else if (f !== p) {
            p = ko(Error(l(424)), s), s = pg(i, s, f, u, p);
            break e;
          } else for (je && (Sn = U5(s.stateNode.containerInfo), un = s, $e = !0, Un = null, ks = !1), u = P1(s, null, f, u), s.child = u; u; ) u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (wo(), f === p) {
              s = Er(i, s, u);
              break e;
            }
            Wt(i, s, f, u);
          }
          s = s.child;
        }
        return s;
      case 5:
        return M1(s), i === null && zh(s), f = s.type, p = s.pendingProps, v = i !== null ? i.memoizedProps : null, k = p.children, ft(f, p) ? k = null : v !== null && ft(f, v) && (s.flags |= 32), hg(i, s), Wt(i, s, k, u), s.child;
      case 6:
        return i === null && zh(s), null;
      case 13:
        return gg(i, s, u);
      case 4:
        return Qh(s, s.stateNode.containerInfo), f = s.pendingProps, i === null ? s.child = xo(s, null, f, u) : Wt(i, s, f, u), s.child;
      case 11:
        return f = s.type, p = s.pendingProps, p = s.elementType === f ? p : Gn(f, p), ag(i, s, f, p, u);
      case 7:
        return Wt(i, s, s.pendingProps, u), s.child;
      case 8:
        return Wt(i, s, s.pendingProps.children, u), s.child;
      case 12:
        return Wt(i, s, s.pendingProps.children, u), s.child;
      case 10:
        e: {
          if (f = s.type._context, p = s.pendingProps, v = s.memoizedProps, k = p.value, T1(s, f, k), v !== null) if (Bn(v.value, k)) {
            if (v.children === p.children && !qt.current) {
              s = Er(i, s, u);
              break e;
            }
          } else for (v = s.child, v !== null && (v.return = s); v !== null; ) {
            var F = v.dependencies;
            if (F !== null) {
              k = v.child;
              for (var G = F.firstContext; G !== null; ) {
                if (G.context === f) {
                  if (v.tag === 1) {
                    G = xr(-1, u & -u), G.tag = 2;
                    var X = v.updateQueue;
                    if (X !== null) {
                      X = X.shared;
                      var ee = X.pending;
                      ee === null ? G.next = G : (G.next = ee.next, ee.next = G), X.pending = G;
                    }
                  }
                  v.lanes |= u, G = v.alternate, G !== null && (G.lanes |= u), Xh(v.return, u, s), F.lanes |= u;
                  break;
                }
                G = G.next;
              }
            } else if (v.tag === 10) k = v.type === s.type ? null : v.child;
            else if (v.tag === 18) {
              if (k = v.return, k === null) throw Error(l(341));
              k.lanes |= u, F = k.alternate, F !== null && (F.lanes |= u), Xh(k, u, s), k = v.sibling;
            } else k = v.child;
            if (k !== null) k.return = v;
            else for (k = v; k !== null; ) {
              if (k === s) {
                k = null;
                break;
              }
              if (v = k.sibling, v !== null) {
                v.return = k.return, k = v;
                break;
              }
              k = k.return;
            }
            v = k;
          }
          Wt(i, s, p.children, u), s = s.child;
        }
        return s;
      case 9:
        return p = s.type, f = s.pendingProps.children, Co(s, u), p = wn(p), f = f(p), s.flags |= 1, Wt(i, s, f, u), s.child;
      case 14:
        return f = s.type, p = Gn(f, s.pendingProps), p = Gn(f.type, p), lg(i, s, f, p, u);
      case 15:
        return ug(i, s, s.type, s.pendingProps, u);
      case 17:
        return f = s.type, p = s.pendingProps, p = s.elementType === f ? p : Gn(f, p), El(i, s), s.tag = 1, Zt(f) ? (i = !0, el(s)) : i = !1, Co(s, u), eg(s, f, p), uf(s, f, p, u), df(null, s, f, !0, i, u);
      case 19:
        return vg(i, s, u);
      case 22:
        return cg(i, s, u);
    }
    throw Error(l(156, s.tag));
  };
  function zg(i, s) {
    return Ih(i, s);
  }
  function B6(i, s, u, f) {
    this.tag = i, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = s, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pn(i, s, u, f) {
    return new B6(i, s, u, f);
  }
  function Bf(i) {
    return i = i.prototype, !(!i || !i.isReactComponent);
  }
  function U6(i) {
    if (typeof i == "function") return Bf(i) ? 1 : 0;
    if (i != null) {
      if (i = i.$$typeof, i === P) return 11;
      if (i === E) return 14;
    }
    return 2;
  }
  function Jr(i, s) {
    var u = i.alternate;
    return u === null ? (u = Pn(i.tag, s, i.key, i.mode), u.elementType = i.elementType, u.type = i.type, u.stateNode = i.stateNode, u.alternate = i, i.alternate = u) : (u.pendingProps = s, u.type = i.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = i.flags & 14680064, u.childLanes = i.childLanes, u.lanes = i.lanes, u.child = i.child, u.memoizedProps = i.memoizedProps, u.memoizedState = i.memoizedState, u.updateQueue = i.updateQueue, s = i.dependencies, u.dependencies = s === null ? null : { lanes: s.lanes, firstContext: s.firstContext }, u.sibling = i.sibling, u.index = i.index, u.ref = i.ref, u;
  }
  function zl(i, s, u, f, p, v) {
    var k = 2;
    if (f = i, typeof i == "function") Bf(i) && (k = 1);
    else if (typeof i == "string") k = 5;
    else e: switch (i) {
      case m:
        return Vi(u.children, p, v, s);
      case S:
        k = 8, p |= 8;
        break;
      case y:
        return i = Pn(12, u, s, p | 2), i.elementType = y, i.lanes = v, i;
      case R:
        return i = Pn(13, u, s, p), i.elementType = R, i.lanes = v, i;
      case w:
        return i = Pn(19, u, s, p), i.elementType = w, i.lanes = v, i;
      case C:
        return bl(u, p, v, s);
      default:
        if (typeof i == "object" && i !== null) switch (i.$$typeof) {
          case _:
            k = 10;
            break e;
          case x:
            k = 9;
            break e;
          case P:
            k = 11;
            break e;
          case E:
            k = 14;
            break e;
          case g:
            k = 16, f = null;
            break e;
        }
        throw Error(l(130, i == null ? i : typeof i, ""));
    }
    return s = Pn(k, u, s, p), s.elementType = i, s.type = f, s.lanes = v, s;
  }
  function Vi(i, s, u, f) {
    return i = Pn(7, i, f, s), i.lanes = u, i;
  }
  function bl(i, s, u, f) {
    return i = Pn(22, i, f, s), i.elementType = C, i.lanes = u, i.stateNode = { isHidden: !1 }, i;
  }
  function Uf(i, s, u) {
    return i = Pn(6, i, null, s), i.lanes = u, i;
  }
  function Gf(i, s, u) {
    return s = Pn(4, i.children !== null ? i.children : [], i.key, s), s.lanes = u, s.stateNode = { containerInfo: i.containerInfo, pendingChildren: null, implementation: i.implementation }, s;
  }
  function G6(i, s, u, f, p) {
    this.tag = s, this.containerInfo = i, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = ie, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Lh(0), this.expirationTimes = Lh(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Lh(0), this.identifierPrefix = f, this.onRecoverableError = p, je && (this.mutableSourceEagerHydrationData = null);
  }
  function bg(i, s, u, f, p, v, k, F, G) {
    return i = new G6(i, s, u, F, G), s === 1 ? (s = 1, v === !0 && (s |= 8)) : s = 0, v = Pn(3, null, null, s), i.current = v, v.stateNode = i, v.memoizedState = { element: f, isDehydrated: u, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Yh(v), i;
  }
  function Vg(i) {
    if (!i) return Xr;
    i = i._reactInternals;
    e: {
      if (B(i) !== i || i.tag !== 1) throw Error(l(170));
      var s = i;
      do {
        switch (s.tag) {
          case 3:
            s = s.stateNode.context;
            break e;
          case 1:
            if (Zt(s.type)) {
              s = s.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        s = s.return;
      } while (s !== null);
      throw Error(l(171));
    }
    if (i.tag === 1) {
      var u = i.type;
      if (Zt(u)) return f1(i, u, s);
    }
    return s;
  }
  function jg(i) {
    var s = i._reactInternals;
    if (s === void 0)
      throw typeof i.render == "function" ? Error(l(188)) : (i = Object.keys(i).join(","), Error(l(268, i)));
    return i = z(s), i === null ? null : i.stateNode;
  }
  function Wg(i, s) {
    if (i = i.memoizedState, i !== null && i.dehydrated !== null) {
      var u = i.retryLane;
      i.retryLane = u !== 0 && u < s ? u : s;
    }
  }
  function Vl(i, s) {
    Wg(i, s), (i = i.alternate) && Wg(i, s);
  }
  function H6(i) {
    return i = z(i), i === null ? null : i.stateNode;
  }
  function z6() {
    return null;
  }
  return n.attemptContinuousHydration = function(i) {
    if (i.tag === 13) {
      var s = tr(i, 134217728);
      if (s !== null) {
        var u = Gt();
        Cn(s, i, 134217728, u);
      }
      Vl(i, 134217728);
    }
  }, n.attemptDiscreteHydration = function(i) {
    if (i.tag === 13) {
      var s = tr(i, 1);
      if (s !== null) {
        var u = Gt();
        Cn(s, i, 1, u);
      }
      Vl(i, 1);
    }
  }, n.attemptHydrationAtCurrentPriority = function(i) {
    if (i.tag === 13) {
      var s = qr(i), u = tr(i, s);
      if (u !== null) {
        var f = Gt();
        Cn(u, i, s, f);
      }
      Vl(i, s);
    }
  }, n.attemptSynchronousHydration = function(i) {
    switch (i.tag) {
      case 3:
        var s = i.stateNode;
        if (s.current.memoizedState.isDehydrated) {
          var u = Ps(s.pendingLanes);
          u !== 0 && (Fh(s, u | 1), tn(s, Et()), !(Se & 6) && (Ao(), er()));
        }
        break;
      case 13:
        Fg(function() {
          var f = tr(i, 1);
          if (f !== null) {
            var p = Gt();
            Cn(f, i, 1, p);
          }
        }), Vl(i, 1);
    }
  }, n.batchedUpdates = function(i, s) {
    var u = Se;
    Se |= 1;
    try {
      return i(s);
    } finally {
      Se = u, Se === 0 && (Ao(), ol && er());
    }
  }, n.createComponentSelector = function(i) {
    return { $$typeof: Nl, value: i };
  }, n.createContainer = function(i, s, u, f, p, v, k) {
    return bg(i, s, !1, null, u, f, p, v, k);
  }, n.createHasPseudoClassSelector = function(i) {
    return { $$typeof: Rl, value: i };
  }, n.createHydrationContainer = function(i, s, u, f, p, v, k, F, G) {
    return i = bg(u, f, !0, i, p, v, k, F, G), i.context = Vg(null), u = i.current, f = Gt(), p = qr(u), v = xr(f, p), v.callback = s ?? null, Yr(u, v, p), i.current.lanes = p, Ts(i, p, f), tn(i, f), i;
  }, n.createPortal = function(i, s, u) {
    var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: d, key: f == null ? null : "" + f, children: i, containerInfo: s, implementation: u };
  }, n.createRoleSelector = function(i) {
    return { $$typeof: Al, value: i };
  }, n.createTestNameSelector = function(i) {
    return { $$typeof: Ml, value: i };
  }, n.createTextSelector = function(i) {
    return { $$typeof: Ll, value: i };
  }, n.deferredUpdates = function(i) {
    var s = Re, u = ut.transition;
    try {
      return ut.transition = null, Re = 16, i();
    } finally {
      Re = s, ut.transition = u;
    }
  }, n.discreteUpdates = function(i, s, u, f, p) {
    var v = Re, k = ut.transition;
    try {
      return ut.transition = null, Re = 1, i(s, u, f, p);
    } finally {
      Re = v, ut.transition = k, Se === 0 && Ao();
    }
  }, n.findAllNodes = Tf, n.findBoundingRects = function(i, s) {
    if (!xs) throw Error(l(363));
    s = Tf(i, s), i = [];
    for (var u = 0; u < s.length; u++) i.push(h5(s[u]));
    for (s = i.length - 1; 0 < s; s--) {
      u = i[s];
      for (var f = u.x, p = f + u.width, v = u.y, k = v + u.height, F = s - 1; 0 <= F; F--) if (s !== F) {
        var G = i[F], X = G.x, ee = X + G.width, pe = G.y, Y = pe + G.height;
        if (f >= X && v >= pe && p <= ee && k <= Y) {
          i.splice(s, 1);
          break;
        } else if (f !== X || u.width !== G.width || Y < v || pe > k) {
          if (!(v !== pe || u.height !== G.height || ee < f || X > p)) {
            X > f && (G.width += X - f, G.x = f), ee < p && (G.width = p - X), i.splice(s, 1);
            break;
          }
        } else {
          pe > v && (G.height += pe - v, G.y = v), Y < k && (G.height = k - pe), i.splice(s, 1);
          break;
        }
      }
    }
    return i;
  }, n.findHostInstance = jg, n.findHostInstanceWithNoPortals = function(i) {
    return i = D(i), i = i !== null ? ce(i) : null, i === null ? null : i.stateNode;
  }, n.findHostInstanceWithWarning = function(i) {
    return jg(i);
  }, n.flushControlled = function(i) {
    var s = Se;
    Se |= 1;
    var u = ut.transition, f = Re;
    try {
      ut.transition = null, Re = 1, i();
    } finally {
      Re = f, ut.transition = u, Se = s, Se === 0 && (Ao(), er());
    }
  }, n.flushPassiveEffects = bi, n.flushSync = Fg, n.focusWithin = function(i, s) {
    if (!xs) throw Error(l(363));
    for (i = Ef(i), s = Ag(i, s), s = Array.from(s), i = 0; i < s.length; ) {
      var u = s[i++];
      if (!Es(u)) {
        if (u.tag === 5 && p5(u.stateNode)) return !0;
        for (u = u.child; u !== null; ) s.push(u), u = u.sibling;
      }
    }
    return !1;
  }, n.getCurrentUpdatePriority = function() {
    return Re;
  }, n.getFindAllNodesFailureDescription = function(i, s) {
    if (!xs) throw Error(l(363));
    var u = 0, f = [];
    i = [Ef(i), 0];
    for (var p = 0; p < i.length; ) {
      var v = i[p++], k = i[p++], F = s[k];
      if ((v.tag !== 5 || !Es(v)) && (Cf(v, F) && (f.push(Pf(F)), k++, k > u && (u = k)), k < s.length)) for (v = v.child; v !== null; ) i.push(v, k), v = v.sibling;
    }
    if (u < s.length) {
      for (i = []; u < s.length; u++) i.push(Pf(s[u]));
      return `findAllNodes was able to match part of the selector:
  ` + (f.join(" > ") + `

No matching component was found for:
  `) + i.join(" > ");
    }
    return null;
  }, n.getPublicRootInstance = function(i) {
    if (i = i.current, !i.child) return null;
    switch (i.child.tag) {
      case 5:
        return he(i.child.stateNode);
      default:
        return i.child.stateNode;
    }
  }, n.injectIntoDevTools = function(i) {
    if (i = { bundleType: i.bundleType, version: i.version, rendererPackageName: i.rendererPackageName, rendererConfig: i.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: c.ReactCurrentDispatcher, findHostInstanceByFiber: H6, findFiberByHostInstance: i.findFiberByHostInstance || z6, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1" }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") i = !1;
    else {
      var s = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (s.isDisabled || !s.supportsFiber) i = !0;
      else {
        try {
          il = s.inject(i), Jn = s;
        } catch {
        }
        i = !!s.checkDCE;
      }
    }
    return i;
  }, n.isAlreadyRendering = function() {
    return !1;
  }, n.observeVisibleRects = function(i, s, u, f) {
    if (!xs) throw Error(l(363));
    i = Tf(i, s);
    var p = g5(i, u, f).disconnect;
    return { disconnect: function() {
      p();
    } };
  }, n.registerMutableSourceForHydration = function(i, s) {
    var u = s._getVersion;
    u = u(s._source), i.mutableSourceEagerHydrationData == null ? i.mutableSourceEagerHydrationData = [s, u] : i.mutableSourceEagerHydrationData.push(s, u);
  }, n.runWithPriority = function(i, s) {
    var u = Re;
    try {
      return Re = i, s();
    } finally {
      Re = u;
    }
  }, n.shouldError = function() {
    return null;
  }, n.shouldSuspend = function() {
    return !1;
  }, n.updateContainer = function(i, s, u, f) {
    var p = s.current, v = Gt(), k = qr(p);
    return u = Vg(u), s.context === null ? s.context = u : s.pendingContext = u, s = xr(v, k), s.payload = { element: i }, f = f === void 0 ? null : f, f !== null && (s.callback = f), i = Yr(p, s, k), i !== null && (Cn(i, p, k, v), dl(i, p, k)), k;
  }, n;
};
t5.exports = mC;
var vC = t5.exports;
const yC = /* @__PURE__ */ Ua(vC);
var n5 = { exports: {} }, mo = {};
/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
mo.ConcurrentRoot = 1;
mo.ContinuousEventPriority = 4;
mo.DefaultEventPriority = 16;
mo.DiscreteEventPriority = 1;
mo.IdleEventPriority = 536870912;
mo.LegacyRoot = 0;
n5.exports = mo;
var r5 = n5.exports;
const lv = {
  children: !0,
  ref: !0,
  key: !0,
  style: !0,
  forwardedRef: !0,
  unstable_applyCache: !0,
  unstable_applyDrawHitFromCache: !0
};
let uv = !1, cv = !1;
const r1 = ".react-konva-event", _C = `ReactKonva: You have a Konva node with draggable = true and position defined but no onDragMove or onDragEnd events are handled.
Position of a node will be changed during drag&drop, so you should update state of the react app as well.
Consider to add onDragMove or onDragEnd events.
For more info see: https://github.com/konvajs/react-konva/issues/256
`, SC = `ReactKonva: You are using "zIndex" attribute for a Konva node.
react-konva may get confused with ordering. Just define correct order of elements in your render function of a component.
For more info see: https://github.com/konvajs/react-konva/issues/194
`, wC = {};
function Ch(t, e, n = wC) {
  if (!uv && "zIndex" in e && (console.warn(SC), uv = !0), !cv && e.draggable) {
    var r = e.x !== void 0 || e.y !== void 0, o = e.onDragEnd || e.onDragMove;
    r && !o && (console.warn(_C), cv = !0);
  }
  for (var a in n)
    if (!lv[a]) {
      var l = a.slice(0, 2) === "on", c = n[a] !== e[a];
      if (l && c) {
        var h = a.substr(2).toLowerCase();
        h.substr(0, 7) === "content" && (h = "content" + h.substr(7, 1).toUpperCase() + h.substr(8)), t.off(h, n[a]);
      }
      var d = !e.hasOwnProperty(a);
      d && t.setAttr(a, void 0);
    }
  var m = e._useStrictMode, S = {}, y = !1;
  const _ = {};
  for (var a in e)
    if (!lv[a]) {
      var l = a.slice(0, 2) === "on", x = n[a] !== e[a];
      if (l && x) {
        var h = a.substr(2).toLowerCase();
        h.substr(0, 7) === "content" && (h = "content" + h.substr(7, 1).toUpperCase() + h.substr(8)), e[a] && (_[h] = e[a]);
      }
      !l && (e[a] !== n[a] || m && e[a] !== t.getAttr(a)) && (y = !0, S[a] = e[a]);
    }
  y && (t.setAttrs(S), Fi(t));
  for (var h in _)
    t.on(h + r1, _[h]);
}
function Fi(t) {
  if (!ye.Konva.autoDrawEnabled) {
    var e = t.getLayer() || t.getStage();
    e && e.batchDraw();
  }
}
const i5 = {}, xC = {};
Ba.Node.prototype._applyProps = Ch;
function EC(t, e) {
  if (typeof e == "string") {
    console.error(`Do not use plain text as child of Konva.Node. You are using text: ${e}`);
    return;
  }
  t.add(e), Fi(t);
}
function CC(t, e, n) {
  let r = Ba[t];
  r || (console.error(`Konva has no node with the type ${t}. Group will be used instead. If you use minimal version of react-konva, just import required nodes into Konva: "import "konva/lib/shapes/${t}"  If you want to render DOM elements as part of canvas tree take a look into this demo: https://konvajs.github.io/docs/react/DOM_Portal.html`), r = Ba.Group);
  const o = {}, a = {};
  for (var l in e) {
    var c = l.slice(0, 2) === "on";
    c ? a[l] = e[l] : o[l] = e[l];
  }
  const h = new r(o);
  return Ch(h, a), h;
}
function PC(t, e, n) {
  console.error(`Text components are not supported for now in ReactKonva. Your text is: "${t}"`);
}
function TC(t, e, n) {
  return !1;
}
function kC(t) {
  return t;
}
function NC() {
  return null;
}
function RC() {
  return null;
}
function AC(t, e, n, r) {
  return xC;
}
function MC() {
}
function LC(t) {
}
function FC(t, e) {
  return !1;
}
function IC() {
  return i5;
}
function OC() {
  return i5;
}
const DC = setTimeout, BC = clearTimeout, UC = -1;
function GC(t, e) {
  return !1;
}
const HC = !1, zC = !0, bC = !0;
function VC(t, e) {
  e.parent === t ? e.moveToTop() : t.add(e), Fi(t);
}
function jC(t, e) {
  e.parent === t ? e.moveToTop() : t.add(e), Fi(t);
}
function o5(t, e, n) {
  e._remove(), t.add(e), e.setZIndex(n.getZIndex()), Fi(t);
}
function WC(t, e, n) {
  o5(t, e, n);
}
function XC(t, e) {
  e.destroy(), e.off(r1), Fi(t);
}
function KC(t, e) {
  e.destroy(), e.off(r1), Fi(t);
}
function YC(t, e, n) {
  console.error(`Text components are not yet supported in ReactKonva. You text is: "${n}"`);
}
function QC(t, e, n) {
}
function $C(t, e, n, r, o) {
  Ch(t, o, r);
}
function qC(t) {
  t.hide(), Fi(t);
}
function ZC(t) {
}
function JC(t, e) {
  (e.visible == null || e.visible) && t.show();
}
function eP(t, e) {
}
function tP(t) {
}
function nP() {
}
const rP = () => r5.DefaultEventPriority, iP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  appendChild: VC,
  appendChildToContainer: jC,
  appendInitialChild: EC,
  cancelTimeout: BC,
  clearContainer: tP,
  commitMount: QC,
  commitTextUpdate: YC,
  commitUpdate: $C,
  createInstance: CC,
  createTextInstance: PC,
  detachDeletedInstance: nP,
  finalizeInitialChildren: TC,
  getChildHostContext: OC,
  getCurrentEventPriority: rP,
  getPublicInstance: kC,
  getRootHostContext: IC,
  hideInstance: qC,
  hideTextInstance: ZC,
  idlePriority: aa.unstable_IdlePriority,
  insertBefore: o5,
  insertInContainerBefore: WC,
  isPrimaryRenderer: HC,
  noTimeout: UC,
  now: aa.unstable_now,
  prepareForCommit: NC,
  preparePortalMount: RC,
  prepareUpdate: AC,
  removeChild: XC,
  removeChildFromContainer: KC,
  resetAfterCommit: MC,
  resetTextContent: LC,
  run: aa.unstable_runWithPriority,
  scheduleTimeout: DC,
  shouldDeprioritizeSubtree: FC,
  shouldSetTextContent: GC,
  supportsMutation: bC,
  unhideInstance: JC,
  unhideTextInstance: eP,
  warnsIfNotActing: zC
}, Symbol.toStringTag, { value: "Module" }));
var oP = Object.defineProperty, sP = Object.defineProperties, aP = Object.getOwnPropertyDescriptors, hv = Object.getOwnPropertySymbols, lP = Object.prototype.hasOwnProperty, uP = Object.prototype.propertyIsEnumerable, fv = (t, e, n) => e in t ? oP(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, dv = (t, e) => {
  for (var n in e || (e = {}))
    lP.call(e, n) && fv(t, n, e[n]);
  if (hv)
    for (var n of hv(e))
      uP.call(e, n) && fv(t, n, e[n]);
  return t;
}, cP = (t, e) => sP(t, aP(e)), pv, gv;
typeof window < "u" && ((pv = window.document) != null && pv.createElement || ((gv = window.navigator) == null ? void 0 : gv.product) === "ReactNative") ? ne.useLayoutEffect : ne.useEffect;
function s5(t, e, n) {
  if (!t)
    return;
  if (n(t) === !0)
    return t;
  let r = t.child;
  for (; r; ) {
    const o = s5(r, e, n);
    if (o)
      return o;
    r = r.sibling;
  }
}
function a5(t) {
  try {
    return Object.defineProperties(t, {
      _currentRenderer: {
        get() {
          return null;
        },
        set() {
        }
      },
      _currentRenderer2: {
        get() {
          return null;
        },
        set() {
        }
      }
    });
  } catch {
    return t;
  }
}
const mv = console.error;
console.error = function() {
  const t = [...arguments].join("");
  if (t != null && t.startsWith("Warning:") && t.includes("useContext")) {
    console.error = mv;
    return;
  }
  return mv.apply(this, arguments);
};
const i1 = a5(ne.createContext(null));
class l5 extends ne.Component {
  render() {
    return /* @__PURE__ */ ne.createElement(i1.Provider, {
      value: this._reactInternals
    }, this.props.children);
  }
}
function hP() {
  const t = ne.useContext(i1);
  if (t === null)
    throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const e = ne.useId();
  return ne.useMemo(() => {
    for (const r of [t, t == null ? void 0 : t.alternate]) {
      if (!r)
        continue;
      const o = s5(r, !1, (a) => {
        let l = a.memoizedState;
        for (; l; ) {
          if (l.memoizedState === e)
            return !0;
          l = l.next;
        }
      });
      if (o)
        return o;
    }
  }, [t, e]);
}
function fP() {
  const t = hP(), [e] = ne.useState(() => /* @__PURE__ */ new Map());
  e.clear();
  let n = t;
  for (; n; ) {
    if (n.type && typeof n.type == "object") {
      const o = n.type._context === void 0 && n.type.Provider === n.type ? n.type : n.type._context;
      o && o !== i1 && !e.has(o) && e.set(o, ne.useContext(a5(o)));
    }
    n = n.return;
  }
  return e;
}
function dP() {
  const t = fP();
  return ne.useMemo(
    () => Array.from(t.keys()).reduce(
      (e, n) => (r) => /* @__PURE__ */ ne.createElement(e, null, /* @__PURE__ */ ne.createElement(n.Provider, cP(dv({}, r), {
        value: t.get(n)
      }))),
      (e) => /* @__PURE__ */ ne.createElement(l5, dv({}, e))
    ),
    [t]
  );
}
function pP(t) {
  const e = se.useRef({});
  return se.useLayoutEffect(() => {
    e.current = t;
  }), se.useLayoutEffect(() => () => {
    e.current = {};
  }, []), e.current;
}
const gP = (t) => {
  const e = se.useRef(), n = se.useRef(), r = se.useRef(), o = pP(t), a = dP(), l = (c) => {
    const { forwardedRef: h } = t;
    h && (typeof h == "function" ? h(c) : h.current = c);
  };
  return se.useLayoutEffect(() => (n.current = new Ba.Stage({
    width: t.width,
    height: t.height,
    container: e.current
  }), l(n.current), r.current = sa.createContainer(n.current, r5.LegacyRoot, !1, null), sa.updateContainer(se.createElement(a, {}, t.children), r.current), () => {
    Ba.isBrowser && (l(null), sa.updateContainer(null, r.current, null), n.current.destroy());
  }), []), se.useLayoutEffect(() => {
    l(n.current), Ch(n.current, t, o), sa.updateContainer(se.createElement(a, {}, t.children), r.current, null);
  }), se.createElement("div", {
    ref: e,
    id: t.id,
    accessKey: t.accessKey,
    className: t.className,
    role: t.role,
    style: t.style,
    tabIndex: t.tabIndex,
    title: t.title
  });
}, vv = "Layer", mP = "Rect", yv = "Circle", vP = "Line", yP = "Image", _P = "Text", SP = "Ring", wP = "Arrow", sa = yC(iP);
sa.injectIntoDevTools({
  // @ts-ignore
  findHostInstanceByFiber: () => null,
  bundleType: 0,
  version: se.version,
  rendererPackageName: "react-konva"
});
const xP = se.forwardRef((t, e) => se.createElement(l5, {}, se.createElement(gP, { ...t, forwardedRef: e })));
function EP(t, e, n = 1) {
  console.group(`🔧 [CONFIG] Generating for ${t.elementType} (${t.id})`), console.log("Input - Event position (%):", t.position), console.log("Input - Canvas dimensions:", e), console.log("Input - Scale factor:", n);
  const r = {
    konvaProps: CP(t, e, n),
    animation: PP(t, e)
  };
  return console.log("Output - Konva props:", r.konvaProps), console.groupEnd(), r;
}
function CP(t, e, n) {
  var l, c, h, d, m;
  const r = t.position.x / 100 * e.width, o = t.position.y / 100 * e.height;
  console.log("  📍 Position conversion:", {
    percentage: t.position,
    calculation: `(${t.position.x}% / 100) * ${e.width} = ${r}, (${t.position.y}% / 100) * ${e.height} = ${o}`,
    pixels: { x: r, y: o }
  });
  const a = { x: r, y: o };
  switch (t.elementType) {
    case "text": {
      const S = (t.fontSize || ((l = t.dimensions) == null ? void 0 : l.height) || 16) * n;
      return {
        ...a,
        text: t.content || "",
        fontSize: S,
        fontFamily: "Poppins, sans-serif",
        fill: t.color || "#333F48"
      };
    }
    case "shape":
      if (t.shapeType === "circle") {
        const y = (((c = t.dimensions) == null ? void 0 : c.width) || 50) / 100 * e.width / 2;
        return {
          ...a,
          radius: y,
          fill: t.color || "#00A689"
        };
      } else if (t.shapeType === "ring") {
        const y = (((h = t.dimensions) == null ? void 0 : h.width) || 50) / 100 * e.width / 2, _ = (t.thickness || 4) * n;
        if (t.animation === "draw") {
          const P = 2 * Math.PI * y;
          return {
            ...a,
            radius: y,
            stroke: t.color || "#00A689",
            strokeWidth: _,
            fill: void 0,
            // Hollow circle (no fill)
            dash: [P]
            // Enable dash offset animation
          };
        }
        const x = y - _;
        return {
          ...a,
          innerRadius: x,
          outerRadius: y,
          stroke: t.color || "#00A689",
          strokeWidth: 2 * n
          // Border stroke for crisp edge
        };
      } else {
        const S = (((d = t.dimensions) == null ? void 0 : d.width) || 100) / 100 * e.width, y = (((m = t.dimensions) == null ? void 0 : m.height) || 50) / 100 * e.height;
        return {
          ...a,
          width: S,
          height: y,
          fill: t.color || "#00A689",
          offsetX: S / 2,
          offsetY: y / 2,
          cornerRadius: 4
        };
      }
    case "line":
    case "arrow": {
      if (!t.lineCoordinates)
        return console.warn("Line/Arrow missing coordinates:", t.id), a;
      const S = t.lineCoordinates.x1 / 100 * e.width, y = t.lineCoordinates.y1 / 100 * e.height, _ = t.lineCoordinates.x2 / 100 * e.width, x = t.lineCoordinates.y2 / 100 * e.height, P = {
        x: 0,
        // Lines use points, not x/y
        y: 0,
        points: [S, y, _, x],
        stroke: t.color || "#212b58",
        strokeWidth: (t.thickness || 2) * n
      };
      if (t.elementType === "arrow" && (P.fill = t.color || "#212b58", P.pointerLength = 10, P.pointerWidth = 10, P.pointerAtEnding = !0), t.animation === "draw") {
        const R = G0(t.lineCoordinates, e);
        P.dash = [R];
      }
      return P;
    }
    default:
      return a;
  }
}
function PP(t, e, n) {
  const r = t.animation || "fade", o = r === "show" ? 50 : t.animationDuration || 500, a = t.animationDirection, l = TP(t, r, a, e), c = kP(t, r, a, e), h = RP(r);
  return {
    type: r,
    duration: o,
    easing: h,
    initialState: l,
    targetState: c
  };
}
function TP(t, e, n, r) {
  var a;
  const o = {
    x: t.position.x / 100 * r.width,
    y: t.position.y / 100 * r.height
  };
  switch (e) {
    case "fade":
      return { opacity: 0 };
    case "scale":
      return {
        opacity: 0,
        scaleX: 0.01,
        scaleY: 0.01
      };
    case "slide": {
      const l = NP(n, r);
      return {
        opacity: 0,
        x: o.x + l.x,
        y: o.y + l.y
      };
    }
    case "draw": {
      if (t.elementType === "line")
        return {
          opacity: 1,
          // Draw doesn't fade
          dashOffset: G0(t.lineCoordinates, r)
        };
      if (t.elementType === "arrow")
        return {
          opacity: 1,
          dashOffset: G0(t.lineCoordinates, r),
          pointerLength: 0,
          // Hide arrowhead length
          pointerWidth: 0
          // Hide arrowhead width - prevents artifact
        };
      if (t.elementType === "shape" && t.shapeType === "ring") {
        const h = (((a = t.dimensions) == null ? void 0 : a.width) || 50) / 100 * r.width / 2;
        return {
          opacity: 1,
          dashOffset: 2 * Math.PI * h
          // Start fully hidden
        };
      }
      const l = n || "right";
      return l === "left" || l === "right" ? {
        opacity: 1,
        scaleX: 0.01,
        scaleY: 1
      } : {
        opacity: 1,
        scaleX: 1,
        scaleY: 0.01
      };
    }
    case "show":
    default:
      return { opacity: 0 };
  }
}
function kP(t, e, n, r) {
  const o = {
    x: t.position.x / 100 * r.width,
    y: t.position.y / 100 * r.height
  };
  switch (e) {
    case "fade":
      return { opacity: 1 };
    case "scale":
      return {
        opacity: 1,
        scaleX: 1,
        scaleY: 1
      };
    case "slide":
      return {
        opacity: 1,
        x: o.x,
        y: o.y
      };
    case "draw":
      return t.elementType === "line" ? {
        opacity: 1,
        dashOffset: 0
      } : t.elementType === "arrow" ? {
        opacity: 1,
        dashOffset: 0
      } : t.elementType === "shape" && t.shapeType === "ring" ? {
        opacity: 1,
        dashOffset: 0
        // Fully drawn
      } : {
        opacity: 1,
        scaleX: 1,
        scaleY: 1
      };
    case "show":
    default:
      return { opacity: 1 };
  }
}
function NP(t, e) {
  const n = Math.min(e.width * 0.1, 100), r = Math.min(e.height * 0.1, 100);
  switch (t) {
    case "up":
      return { x: 0, y: -r };
    case "down":
      return { x: 0, y: r };
    case "left":
      return { x: -n, y: 0 };
    case "right":
      return { x: n, y: 0 };
    default:
      return { x: n, y: 0 };
  }
}
function G0(t, e) {
  const n = (t.x2 - t.x1) / 100 * e.width, r = (t.y2 - t.y1) / 100 * e.height;
  return Math.sqrt(n * n + r * r);
}
function RP(t) {
  switch (t) {
    case "scale":
      return "BackEaseOut";
    case "draw":
      return "Linear";
    case "slide":
    case "fade":
    default:
      return "EaseOut";
  }
}
const AP = ({
  event: t,
  stageDimensions: e,
  sizingScaleFactor: n = 1
}) => {
  const r = ne.useRef(null), o = ne.useRef(null), a = ne.useMemo(() => {
    if (!e)
      return console.warn(`Event ${t.id} missing stageDimensions`), null;
    const h = EP(t, e, n);
    return console.group(`🎭 [ELEMENT] Rendering ${t.elementType}`), console.log("Event data:", t), console.log("Stage dimensions:", e), console.log("Sizing scale factor:", n), console.log("Generated config:", h), console.groupEnd(), h;
  }, [t, e, n]);
  if (ne.useEffect(() => {
    const h = r.current;
    if (!h || !a) return;
    const { animation: d } = a;
    h.setAttrs(d.initialState);
    const m = new Konva.Tween({
      node: h,
      duration: d.duration / 1e3,
      // Convert ms to seconds
      easing: Konva.Easings[d.easing],
      ...d.targetState,
      onFinish: () => {
        if (t.elementType === "arrow" && t.animation === "draw") {
          const S = l.pointerLength || 10, y = l.pointerWidth || 10;
          h.to({
            pointerLength: S,
            pointerWidth: y,
            duration: 0.15,
            // Quick 150ms pop
            easing: Konva.Easings.BackEaseOut
          });
        }
      }
    });
    return o.current = m, m.play(), () => {
      o.current && (o.current.destroy(), o.current = null);
    };
  }, [a]), !a)
    return null;
  const { konvaProps: l, animation: c } = a;
  switch (t.elementType) {
    case "text":
      return /* @__PURE__ */ oe.jsx(
        _P,
        {
          ref: r,
          ...l,
          ...c.initialState,
          listening: !1
        }
      );
    case "shape":
      return t.shapeType === "circle" ? /* @__PURE__ */ oe.jsx(
        yv,
        {
          ref: r,
          ...l,
          ...c.initialState,
          listening: !1
        }
      ) : t.shapeType === "ring" ? "radius" in l && !("innerRadius" in l) ? /* @__PURE__ */ oe.jsx(
        yv,
        {
          ref: r,
          ...l,
          ...c.initialState,
          listening: !1
        }
      ) : /* @__PURE__ */ oe.jsx(
        SP,
        {
          ref: r,
          ...l,
          ...c.initialState,
          listening: !1
        }
      ) : /* @__PURE__ */ oe.jsx(
        mP,
        {
          ref: r,
          ...l,
          ...c.initialState,
          listening: !1
        }
      );
    case "line":
      return /* @__PURE__ */ oe.jsx(
        vP,
        {
          ref: r,
          ...l,
          ...c.initialState,
          listening: !1
        }
      );
    case "arrow":
      return /* @__PURE__ */ oe.jsx(
        wP,
        {
          ref: r,
          ...l,
          ...c.initialState,
          listening: !1
        }
      );
    default:
      return console.warn(`Unknown element type: ${t.elementType}`), null;
  }
}, MP = ({
  imageUrl: t,
  timelineEvents: e,
  visibleEventIds: n,
  editorCanvasDimensions: r,
  onImageLoad: o
}) => {
  const a = ne.useRef(null), [l, c] = ne.useState(!1), [h, d] = ne.useState(!1), [m, S] = ne.useState(null), [y, _] = ne.useState({ width: 800, height: 600 }), [x, P] = ne.useState({ x: 1, y: 1 }), [R, w] = ne.useState(1);
  return ne.useEffect(() => {
    if (!t) return;
    const E = new Image();
    return E.onload = () => {
      var L;
      S(E);
      const g = ((L = a.current) == null ? void 0 : L.clientWidth) || 800, C = window.innerHeight * 0.85;
      let T = E.width, M = E.height;
      if (T > g && (M = M * g / T, T = g), M > C && (T = T * C / M, M = C), _({
        width: Math.round(T),
        height: Math.round(M)
      }), r) {
        const A = T / r.width, B = M / r.height, N = T / r.width;
        P({ x: A, y: B }), w(N), console.group("🎬 [STUDENT] Canvas Setup"), console.log("Editor dimensions (from backend):", r), console.log("Image dimensions (loaded):", { width: E.width, height: E.height }), console.log("Container constraints:", { width: g, maxHeight: C }), console.log("Stage dimensions (display):", { width: Math.round(T), height: Math.round(M) }), console.log("Layer scale factors:", { scaleX: A, scaleY: B }), console.log("Sizing scale factor:", N), console.groupEnd();
      } else
        P({ x: 1, y: 1 }), w(1), console.warn("⚠️ [STUDENT] No editor dimensions - using legacy mode (no scaling)");
      c(!0), d(!1), o && o();
    }, E.onerror = () => {
      d(!0), c(!1), S(null), console.error("Failed to load diagram image:", t);
    }, E.src = t, () => {
      E.onload = null, E.onerror = null;
    };
  }, [t, o]), /* @__PURE__ */ oe.jsxs("div", { className: "timeline-diagram-canvas", ref: a, children: [
    !l && !h && /* @__PURE__ */ oe.jsxs("div", { className: "timeline-diagram-loading", children: [
      /* @__PURE__ */ oe.jsx("div", { className: "timeline-diagram-loading-spinner" }),
      /* @__PURE__ */ oe.jsx("p", { className: "timeline-diagram-loading-text", children: "Loading diagram..." })
    ] }),
    h && /* @__PURE__ */ oe.jsxs("div", { className: "timeline-diagram-error", children: [
      /* @__PURE__ */ oe.jsx("p", { className: "timeline-diagram-error-text", children: "Failed to load diagram image." }),
      /* @__PURE__ */ oe.jsx("p", { className: "timeline-diagram-error-subtext", children: "Please check that the image URL is correct and accessible." })
    ] }),
    l && m && /* @__PURE__ */ oe.jsx("div", { className: "timeline-diagram-stage-container", children: /* @__PURE__ */ oe.jsxs(
      xP,
      {
        width: y.width,
        height: y.height,
        className: "timeline-diagram-stage",
        children: [
          /* @__PURE__ */ oe.jsx(vv, { children: /* @__PURE__ */ oe.jsx(
            yP,
            {
              image: m,
              width: y.width,
              height: y.height
            }
          ) }),
          /* @__PURE__ */ oe.jsx(vv, { scaleX: x.x, scaleY: x.y, children: e.filter((E) => n.has(E.id)).map((E) => /* @__PURE__ */ oe.jsx(
            AP,
            {
              event: E,
              stageDimensions: r || y,
              sizingScaleFactor: R
            },
            E.id
          )) })
        ]
      }
    ) }),
    !1
  ] });
}, LP = ({
  audioUrl: t,
  imageUrl: e,
  timelineEvents: n,
  editorCanvasDimensions: r
}) => {
  const o = ne.useRef(null), [a, l] = ne.useState(!1), [c, h] = ne.useState(0), [d, m] = ne.useState(0), [S, y] = ne.useState(!0), [_, x] = ne.useState(!1), { visibleEventIds: P } = vS({
    events: n,
    audioCurrentTime: c,
    audioDuration: d,
    isPlaying: a
  }), R = () => {
    const L = o.current;
    L && (a ? L.pause() : L.play());
  }, w = () => {
    const L = o.current;
    L && (L.pause(), L.currentTime = 0, setTimeout(() => {
      h(0), setTimeout(() => {
        L.play();
      }, 100);
    }, 0));
  }, E = () => {
    const L = o.current;
    L && h(L.currentTime);
  }, g = () => {
    const L = o.current;
    L && (m(L.duration), y(!1));
  }, C = () => {
    x(!0), y(!1), console.error("Failed to load audio:", t);
  };
  ne.useEffect(() => {
    const L = o.current;
    if (!L) return;
    const A = () => l(!0), B = () => l(!1), N = () => l(!1);
    return L.addEventListener("play", A), L.addEventListener("pause", B), L.addEventListener("ended", N), () => {
      L.removeEventListener("play", A), L.removeEventListener("pause", B), L.removeEventListener("ended", N);
    };
  }, []);
  const T = (L) => {
    if (!isFinite(L)) return "0:00";
    const A = Math.floor(L / 60), B = Math.floor(L % 60);
    return `${A}:${B.toString().padStart(2, "0")}`;
  }, M = d > 0 ? c / d * 100 : 0;
  return /* @__PURE__ */ oe.jsxs("div", { className: "timeline-player", children: [
    /* @__PURE__ */ oe.jsx(
      "audio",
      {
        ref: o,
        src: t,
        onTimeUpdate: E,
        onLoadedMetadata: g,
        onError: C,
        preload: "metadata"
      }
    ),
    /* @__PURE__ */ oe.jsx(
      MP,
      {
        imageUrl: e,
        timelineEvents: n,
        visibleEventIds: P,
        editorCanvasDimensions: r
      }
    ),
    /* @__PURE__ */ oe.jsxs("div", { className: "timeline-player-controls", children: [
      _ && /* @__PURE__ */ oe.jsx("div", { className: "timeline-player-error", children: /* @__PURE__ */ oe.jsx("p", { className: "timeline-player-error-text", children: "Failed to load audio. Please check the audio URL." }) }),
      S && !_ && /* @__PURE__ */ oe.jsxs("div", { className: "timeline-player-loading", children: [
        /* @__PURE__ */ oe.jsx("div", { className: "timeline-player-loading-spinner" }),
        /* @__PURE__ */ oe.jsx("span", { children: "Loading audio..." })
      ] }),
      !S && !_ && /* @__PURE__ */ oe.jsxs(oe.Fragment, { children: [
        /* @__PURE__ */ oe.jsxs("div", { className: "timeline-player-progress", children: [
          /* @__PURE__ */ oe.jsx(
            y4,
            {
              now: M,
              variant: "primary",
              className: "timeline-player-progress-bar",
              "aria-label": "Audio playback progress"
            }
          ),
          /* @__PURE__ */ oe.jsxs("div", { className: "timeline-player-time", children: [
            /* @__PURE__ */ oe.jsx("span", { className: "timeline-player-time-current", children: T(c) }),
            /* @__PURE__ */ oe.jsx("span", { className: "timeline-player-time-separator", children: "/" }),
            /* @__PURE__ */ oe.jsx("span", { className: "timeline-player-time-duration", children: T(d) })
          ] })
        ] }),
        /* @__PURE__ */ oe.jsxs("div", { className: "timeline-player-buttons", children: [
          /* @__PURE__ */ oe.jsx(
            S2,
            {
              variant: "primary",
              size: "lg",
              onClick: R,
              className: "timeline-player-button timeline-player-button-play-pause",
              iconBefore: a ? pS : gS,
              children: a ? "Pause" : "Play"
            }
          ),
          /* @__PURE__ */ oe.jsx(
            S2,
            {
              variant: "outline-primary",
              size: "lg",
              onClick: w,
              className: "timeline-player-button timeline-player-button-replay",
              iconBefore: mS,
              children: "Replay"
            }
          )
        ] })
      ] })
    ] }),
    !1
  ] });
}, FP = ({
  displayName: t,
  title: e,
  description: n,
  imageUrl: r,
  audioUrl: o,
  timelineEvents: a,
  editorCanvasDimensions: l,
  runtime: c
}) => {
  const h = r && o && a.length > 0;
  return /* @__PURE__ */ oe.jsxs("div", { className: "timeline-presentation-student-view", children: [
    e && /* @__PURE__ */ oe.jsx("h2", { className: "timeline-presentation-title", children: e }),
    n && /* @__PURE__ */ oe.jsx(
      "div",
      {
        className: "timeline-presentation-description",
        dangerouslySetInnerHTML: { __html: n }
      }
    ),
    h ? /* @__PURE__ */ oe.jsx("div", { className: "timeline-presentation-player-container", children: /* @__PURE__ */ oe.jsx(
      LP,
      {
        audioUrl: o,
        imageUrl: r,
        timelineEvents: a,
        editorCanvasDimensions: l
      }
    ) }) : /* @__PURE__ */ oe.jsx("div", { className: "timeline-presentation-empty-state", children: /* @__PURE__ */ oe.jsxs("div", { className: "timeline-presentation-empty-state-content", children: [
      /* @__PURE__ */ oe.jsx("h3", { className: "timeline-presentation-empty-state-title", children: "No Timeline Configured" }),
      /* @__PURE__ */ oe.jsxs("p", { className: "timeline-presentation-empty-state-message", children: [
        "This timeline presentation has not been configured yet.",
        !r && " Please add a diagram image.",
        !o && " Please add an audio file.",
        a.length === 0 && " Please add timeline events."
      ] })
    ] }) }),
    /* @__PURE__ */ oe.jsx("div", { className: "timeline-presentation-a11y-info sr-only", children: /* @__PURE__ */ oe.jsx("p", { children: "This is an interactive timeline presentation with audio narration and synchronized visual animations. Use the play and pause controls to navigate through the timeline." }) })
  ] });
}, bP = (t, e, n) => {
  if (!t) {
    console.error("Timeline Presentation: No element provided for rendering");
    return;
  }
  M3(t).render(
    /* @__PURE__ */ oe.jsx(ne.StrictMode, { children: /* @__PURE__ */ oe.jsx(Q7, { locale: "en", children: /* @__PURE__ */ oe.jsx(
      FP,
      {
        displayName: e.displayName,
        title: e.title,
        description: e.description,
        imageUrl: e.imageUrl,
        audioUrl: e.audioUrl,
        timelineEvents: e.timelineEvents,
        editorCanvasDimensions: e.editorCanvasDimensions,
        runtime: n
      }
    ) }) })
  );
};
export {
  bP as renderBlock
};
//# sourceMappingURL=student-ui.js.map
