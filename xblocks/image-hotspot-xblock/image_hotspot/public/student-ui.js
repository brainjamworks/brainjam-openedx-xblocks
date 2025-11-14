var vp = Object.defineProperty;
var gp = (e, t, n) => t in e ? vp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Nu = (e, t, n) => gp(e, typeof t != "symbol" ? t + "" : t, n);
function Fr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var oc = { exports: {} }, Ji = {}, lc = { exports: {} }, H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Br = Symbol.for("react.element"), yp = Symbol.for("react.portal"), Ep = Symbol.for("react.fragment"), xp = Symbol.for("react.strict_mode"), Sp = Symbol.for("react.profiler"), wp = Symbol.for("react.provider"), Tp = Symbol.for("react.context"), Cp = Symbol.for("react.forward_ref"), Np = Symbol.for("react.suspense"), kp = Symbol.for("react.memo"), _p = Symbol.for("react.lazy"), ku = Symbol.iterator;
function Pp(e) {
  return e === null || typeof e != "object" ? null : (e = ku && e[ku] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ac = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, uc = Object.assign, sc = {};
function Wn(e, t, n) {
  this.props = e, this.context = t, this.refs = sc, this.updater = n || ac;
}
Wn.prototype.isReactComponent = {};
Wn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Wn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function cc() {
}
cc.prototype = Wn.prototype;
function ga(e, t, n) {
  this.props = e, this.context = t, this.refs = sc, this.updater = n || ac;
}
var ya = ga.prototype = new cc();
ya.constructor = ga;
uc(ya, Wn.prototype);
ya.isPureReactComponent = !0;
var _u = Array.isArray, fc = Object.prototype.hasOwnProperty, Ea = { current: null }, dc = { key: !0, ref: !0, __self: !0, __source: !0 };
function pc(e, t, n) {
  var r, i = {}, o = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (o = "" + t.key), t) fc.call(t, r) && !dc.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    i.children = u;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
  return { $$typeof: Br, type: e, key: o, ref: l, props: i, _owner: Ea.current };
}
function Rp(e, t) {
  return { $$typeof: Br, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function xa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Br;
}
function Lp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Pu = /\/+/g;
function Lo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Lp("" + e.key) : t.toString(36);
}
function hi(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else switch (o) {
    case "string":
    case "number":
      l = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Br:
        case yp:
          l = !0;
      }
  }
  if (l) return l = e, i = i(l), e = r === "" ? "." + Lo(l, 0) : r, _u(i) ? (n = "", e != null && (n = e.replace(Pu, "$&/") + "/"), hi(i, t, n, "", function(s) {
    return s;
  })) : i != null && (xa(i) && (i = Rp(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(Pu, "$&/") + "/") + e)), t.push(i)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", _u(e)) for (var a = 0; a < e.length; a++) {
    o = e[a];
    var u = r + Lo(o, a);
    l += hi(o, t, n, u, i);
  }
  else if (u = Pp(e), typeof u == "function") for (e = u.call(e), a = 0; !(o = e.next()).done; ) o = o.value, u = r + Lo(o, a++), l += hi(o, t, n, u, i);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Vr(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return hi(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function Ip(e) {
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
var ke = { current: null }, mi = { transition: null }, Op = { ReactCurrentDispatcher: ke, ReactCurrentBatchConfig: mi, ReactCurrentOwner: Ea };
function hc() {
  throw Error("act(...) is not supported in production builds of React.");
}
H.Children = { map: Vr, forEach: function(e, t, n) {
  Vr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Vr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Vr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!xa(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
H.Component = Wn;
H.Fragment = Ep;
H.Profiler = Sp;
H.PureComponent = ga;
H.StrictMode = xp;
H.Suspense = Np;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Op;
H.act = hc;
H.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = uc({}, e.props), i = e.key, o = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, l = Ea.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (u in t) fc.call(t, u) && !dc.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: Br, type: e.type, key: i, ref: o, props: r, _owner: l };
};
H.createContext = function(e) {
  return e = { $$typeof: Tp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: wp, _context: e }, e.Consumer = e;
};
H.createElement = pc;
H.createFactory = function(e) {
  var t = pc.bind(null, e);
  return t.type = e, t;
};
H.createRef = function() {
  return { current: null };
};
H.forwardRef = function(e) {
  return { $$typeof: Cp, render: e };
};
H.isValidElement = xa;
H.lazy = function(e) {
  return { $$typeof: _p, _payload: { _status: -1, _result: e }, _init: Ip };
};
H.memo = function(e, t) {
  return { $$typeof: kp, type: e, compare: t === void 0 ? null : t };
};
H.startTransition = function(e) {
  var t = mi.transition;
  mi.transition = {};
  try {
    e();
  } finally {
    mi.transition = t;
  }
};
H.unstable_act = hc;
H.useCallback = function(e, t) {
  return ke.current.useCallback(e, t);
};
H.useContext = function(e) {
  return ke.current.useContext(e);
};
H.useDebugValue = function() {
};
H.useDeferredValue = function(e) {
  return ke.current.useDeferredValue(e);
};
H.useEffect = function(e, t) {
  return ke.current.useEffect(e, t);
};
H.useId = function() {
  return ke.current.useId();
};
H.useImperativeHandle = function(e, t, n) {
  return ke.current.useImperativeHandle(e, t, n);
};
H.useInsertionEffect = function(e, t) {
  return ke.current.useInsertionEffect(e, t);
};
H.useLayoutEffect = function(e, t) {
  return ke.current.useLayoutEffect(e, t);
};
H.useMemo = function(e, t) {
  return ke.current.useMemo(e, t);
};
H.useReducer = function(e, t, n) {
  return ke.current.useReducer(e, t, n);
};
H.useRef = function(e) {
  return ke.current.useRef(e);
};
H.useState = function(e) {
  return ke.current.useState(e);
};
H.useSyncExternalStore = function(e, t, n) {
  return ke.current.useSyncExternalStore(e, t, n);
};
H.useTransition = function() {
  return ke.current.useTransition();
};
H.version = "18.3.1";
lc.exports = H;
var k = lc.exports;
const I = /* @__PURE__ */ Fr(k);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mp = k, Ap = Symbol.for("react.element"), Hp = Symbol.for("react.fragment"), Dp = Object.prototype.hasOwnProperty, Fp = Mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Bp = { key: !0, ref: !0, __self: !0, __source: !0 };
function mc(e, t, n) {
  var r, i = {}, o = null, l = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Dp.call(t, r) && !Bp.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: Ap, type: e, key: o, ref: l, props: i, _owner: Fp.current };
}
Ji.Fragment = Hp;
Ji.jsx = mc;
Ji.jsxs = mc;
oc.exports = Ji;
var L = oc.exports, vc = { exports: {} }, Be = {}, gc = { exports: {} }, yc = {};
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
  function t(T, M) {
    var A = T.length;
    T.push(M);
    e: for (; 0 < A; ) {
      var Q = A - 1 >>> 1, ee = T[Q];
      if (0 < i(ee, M)) T[Q] = M, T[A] = ee, A = Q;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var M = T[0], A = T.pop();
    if (A !== M) {
      T[0] = A;
      e: for (var Q = 0, ee = T.length, mn = ee >>> 1; Q < mn; ) {
        var ft = 2 * (Q + 1) - 1, z = T[ft], re = ft + 1, Tt = T[re];
        if (0 > i(z, A)) re < ee && 0 > i(Tt, z) ? (T[Q] = Tt, T[re] = A, Q = re) : (T[Q] = z, T[ft] = A, Q = ft);
        else if (re < ee && 0 > i(Tt, A)) T[Q] = Tt, T[re] = A, Q = re;
        else break e;
      }
    }
    return M;
  }
  function i(T, M) {
    var A = T.sortIndex - M.sortIndex;
    return A !== 0 ? A : T.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var l = Date, a = l.now();
    e.unstable_now = function() {
      return l.now() - a;
    };
  }
  var u = [], s = [], c = 1, h = null, d = 3, v = !1, y = !1, E = !1, R = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(T) {
    for (var M = n(s); M !== null; ) {
      if (M.callback === null) r(s);
      else if (M.startTime <= T) r(s), M.sortIndex = M.expirationTime, t(u, M);
      else break;
      M = n(s);
    }
  }
  function g(T) {
    if (E = !1, m(T), !y) if (n(u) !== null) y = !0, hn(S);
    else {
      var M = n(s);
      M !== null && de(g, M.startTime - T);
    }
  }
  function S(T, M) {
    y = !1, E && (E = !1, p(P), P = -1), v = !0;
    var A = d;
    try {
      for (m(M), h = n(u); h !== null && (!(h.expirationTime > M) || T && !ge()); ) {
        var Q = h.callback;
        if (typeof Q == "function") {
          h.callback = null, d = h.priorityLevel;
          var ee = Q(h.expirationTime <= M);
          M = e.unstable_now(), typeof ee == "function" ? h.callback = ee : h === n(u) && r(u), m(M);
        } else r(u);
        h = n(u);
      }
      if (h !== null) var mn = !0;
      else {
        var ft = n(s);
        ft !== null && de(g, ft.startTime - M), mn = !1;
      }
      return mn;
    } finally {
      h = null, d = A, v = !1;
    }
  }
  var w = !1, N = null, P = -1, X = 5, D = -1;
  function ge() {
    return !(e.unstable_now() - D < X);
  }
  function ye() {
    if (N !== null) {
      var T = e.unstable_now();
      D = T;
      var M = !0;
      try {
        M = N(!0, T);
      } finally {
        M ? ct() : (w = !1, N = null);
      }
    } else w = !1;
  }
  var ct;
  if (typeof f == "function") ct = function() {
    f(ye);
  };
  else if (typeof MessageChannel < "u") {
    var Zn = new MessageChannel(), Yn = Zn.port2;
    Zn.port1.onmessage = ye, ct = function() {
      Yn.postMessage(null);
    };
  } else ct = function() {
    R(ye, 0);
  };
  function hn(T) {
    N = T, w || (w = !0, ct());
  }
  function de(T, M) {
    P = R(function() {
      T(e.unstable_now());
    }, M);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    y || v || (y = !0, hn(S));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : X = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(T) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var M = 3;
        break;
      default:
        M = d;
    }
    var A = d;
    d = M;
    try {
      return T();
    } finally {
      d = A;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, M) {
    switch (T) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        T = 3;
    }
    var A = d;
    d = T;
    try {
      return M();
    } finally {
      d = A;
    }
  }, e.unstable_scheduleCallback = function(T, M, A) {
    var Q = e.unstable_now();
    switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? Q + A : Q) : A = Q, T) {
      case 1:
        var ee = -1;
        break;
      case 2:
        ee = 250;
        break;
      case 5:
        ee = 1073741823;
        break;
      case 4:
        ee = 1e4;
        break;
      default:
        ee = 5e3;
    }
    return ee = A + ee, T = { id: c++, callback: M, priorityLevel: T, startTime: A, expirationTime: ee, sortIndex: -1 }, A > Q ? (T.sortIndex = A, t(s, T), n(u) === null && T === n(s) && (E ? (p(P), P = -1) : E = !0, de(g, A - Q))) : (T.sortIndex = ee, t(u, T), y || v || (y = !0, hn(S))), T;
  }, e.unstable_shouldYield = ge, e.unstable_wrapCallback = function(T) {
    var M = d;
    return function() {
      var A = d;
      d = M;
      try {
        return T.apply(this, arguments);
      } finally {
        d = A;
      }
    };
  };
})(yc);
gc.exports = yc;
var Up = gc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zp = k, De = Up;
function x(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ec = /* @__PURE__ */ new Set(), xr = {};
function cn(e, t) {
  Fn(e, t), Fn(e + "Capture", t);
}
function Fn(e, t) {
  for (xr[e] = t, e = 0; e < t.length; e++) Ec.add(t[e]);
}
var gt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ul = Object.prototype.hasOwnProperty, jp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ru = {}, Lu = {};
function $p(e) {
  return ul.call(Lu, e) ? !0 : ul.call(Ru, e) ? !1 : jp.test(e) ? Lu[e] = !0 : (Ru[e] = !0, !1);
}
function bp(e, t, n, r) {
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
function Gp(e, t, n, r) {
  if (t === null || typeof t > "u" || bp(e, t, n, r)) return !0;
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
function _e(e, t, n, r, i, o, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l;
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  fe[e] = new _e(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  fe[t] = new _e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  fe[e] = new _e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  fe[e] = new _e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  fe[e] = new _e(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  fe[e] = new _e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  fe[e] = new _e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  fe[e] = new _e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  fe[e] = new _e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Sa = /[\-:]([a-z])/g;
function wa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Sa,
    wa
  );
  fe[t] = new _e(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Sa, wa);
  fe[t] = new _e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Sa, wa);
  fe[t] = new _e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  fe[e] = new _e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new _e("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  fe[e] = new _e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ta(e, t, n, r) {
  var i = fe.hasOwnProperty(t) ? fe[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Gp(t, n, i, r) && (n = null), r || i === null ? $p(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var St = zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Wr = Symbol.for("react.element"), En = Symbol.for("react.portal"), xn = Symbol.for("react.fragment"), Ca = Symbol.for("react.strict_mode"), sl = Symbol.for("react.profiler"), xc = Symbol.for("react.provider"), Sc = Symbol.for("react.context"), Na = Symbol.for("react.forward_ref"), cl = Symbol.for("react.suspense"), fl = Symbol.for("react.suspense_list"), ka = Symbol.for("react.memo"), Nt = Symbol.for("react.lazy"), wc = Symbol.for("react.offscreen"), Iu = Symbol.iterator;
function Kn(e) {
  return e === null || typeof e != "object" ? null : (e = Iu && e[Iu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var J = Object.assign, Io;
function or(e) {
  if (Io === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Io = t && t[1] || "";
  }
  return `
` + Io + e;
}
var Oo = !1;
function Mo(e, t) {
  if (!e || Oo) return "";
  Oo = !0;
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
      } catch (s) {
        var r = s;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (s) {
        r = s;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (var i = s.stack.split(`
`), o = r.stack.split(`
`), l = i.length - 1, a = o.length - 1; 1 <= l && 0 <= a && i[l] !== o[a]; ) a--;
      for (; 1 <= l && 0 <= a; l--, a--) if (i[l] !== o[a]) {
        if (l !== 1 || a !== 1)
          do
            if (l--, a--, 0 > a || i[l] !== o[a]) {
              var u = `
` + i[l].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= l && 0 <= a);
        break;
      }
    }
  } finally {
    Oo = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? or(e) : "";
}
function Vp(e) {
  switch (e.tag) {
    case 5:
      return or(e.type);
    case 16:
      return or("Lazy");
    case 13:
      return or("Suspense");
    case 19:
      return or("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Mo(e.type, !1), e;
    case 11:
      return e = Mo(e.type.render, !1), e;
    case 1:
      return e = Mo(e.type, !0), e;
    default:
      return "";
  }
}
function dl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case xn:
      return "Fragment";
    case En:
      return "Portal";
    case sl:
      return "Profiler";
    case Ca:
      return "StrictMode";
    case cl:
      return "Suspense";
    case fl:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Sc:
      return (e.displayName || "Context") + ".Consumer";
    case xc:
      return (e._context.displayName || "Context") + ".Provider";
    case Na:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ka:
      return t = e.displayName || null, t !== null ? t : dl(e.type) || "Memo";
    case Nt:
      t = e._payload, e = e._init;
      try {
        return dl(e(t));
      } catch {
      }
  }
  return null;
}
function Wp(e) {
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
      return dl(t);
    case 8:
      return t === Ca ? "StrictMode" : "Mode";
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
function zt(e) {
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
function Tc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Xp(e) {
  var t = Tc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(l) {
      r = "" + l, o.call(this, l);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Xr(e) {
  e._valueTracker || (e._valueTracker = Xp(e));
}
function Cc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Tc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function _i(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function pl(e, t) {
  var n = t.checked;
  return J({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ou(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = zt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Nc(e, t) {
  t = t.checked, t != null && Ta(e, "checked", t, !1);
}
function hl(e, t) {
  Nc(e, t);
  var n = zt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ml(e, t.type, n) : t.hasOwnProperty("defaultValue") && ml(e, t.type, zt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Mu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ml(e, t, n) {
  (t !== "number" || _i(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var lr = Array.isArray;
function In(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + zt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function vl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return J({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Au(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(x(92));
      if (lr(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: zt(n) };
}
function kc(e, t) {
  var n = zt(t.value), r = zt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Hu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function _c(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function gl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? _c(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Qr, Pc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Qr = Qr || document.createElement("div"), Qr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Qr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Sr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var fr = {
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
}, Qp = ["Webkit", "ms", "Moz", "O"];
Object.keys(fr).forEach(function(e) {
  Qp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), fr[t] = fr[e];
  });
});
function Rc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || fr.hasOwnProperty(e) && fr[e] ? ("" + t).trim() : t + "px";
}
function Lc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = Rc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var Zp = J({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function yl(e, t) {
  if (t) {
    if (Zp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function El(e, t) {
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
var xl = null;
function _a(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Sl = null, On = null, Mn = null;
function Du(e) {
  if (e = jr(e)) {
    if (typeof Sl != "function") throw Error(x(280));
    var t = e.stateNode;
    t && (t = ro(t), Sl(e.stateNode, e.type, t));
  }
}
function Ic(e) {
  On ? Mn ? Mn.push(e) : Mn = [e] : On = e;
}
function Oc() {
  if (On) {
    var e = On, t = Mn;
    if (Mn = On = null, Du(e), t) for (e = 0; e < t.length; e++) Du(t[e]);
  }
}
function Mc(e, t) {
  return e(t);
}
function Ac() {
}
var Ao = !1;
function Hc(e, t, n) {
  if (Ao) return e(t, n);
  Ao = !0;
  try {
    return Mc(e, t, n);
  } finally {
    Ao = !1, (On !== null || Mn !== null) && (Ac(), Oc());
  }
}
function wr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ro(n);
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
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var wl = !1;
if (gt) try {
  var Jn = {};
  Object.defineProperty(Jn, "passive", { get: function() {
    wl = !0;
  } }), window.addEventListener("test", Jn, Jn), window.removeEventListener("test", Jn, Jn);
} catch {
  wl = !1;
}
function Yp(e, t, n, r, i, o, l, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var dr = !1, Pi = null, Ri = !1, Tl = null, Kp = { onError: function(e) {
  dr = !0, Pi = e;
} };
function Jp(e, t, n, r, i, o, l, a, u) {
  dr = !1, Pi = null, Yp.apply(Kp, arguments);
}
function qp(e, t, n, r, i, o, l, a, u) {
  if (Jp.apply(this, arguments), dr) {
    if (dr) {
      var s = Pi;
      dr = !1, Pi = null;
    } else throw Error(x(198));
    Ri || (Ri = !0, Tl = s);
  }
}
function fn(e) {
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
function Dc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Fu(e) {
  if (fn(e) !== e) throw Error(x(188));
}
function eh(e) {
  var t = e.alternate;
  if (!t) {
    if (t = fn(e), t === null) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Fu(i), e;
        if (o === r) return Fu(i), t;
        o = o.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) n = i, r = o;
    else {
      for (var l = !1, a = i.child; a; ) {
        if (a === n) {
          l = !0, n = i, r = o;
          break;
        }
        if (a === r) {
          l = !0, r = i, n = o;
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = o.child; a; ) {
          if (a === n) {
            l = !0, n = o, r = i;
            break;
          }
          if (a === r) {
            l = !0, r = o, n = i;
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function Fc(e) {
  return e = eh(e), e !== null ? Bc(e) : null;
}
function Bc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Bc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Uc = De.unstable_scheduleCallback, Bu = De.unstable_cancelCallback, th = De.unstable_shouldYield, nh = De.unstable_requestPaint, te = De.unstable_now, rh = De.unstable_getCurrentPriorityLevel, Pa = De.unstable_ImmediatePriority, zc = De.unstable_UserBlockingPriority, Li = De.unstable_NormalPriority, ih = De.unstable_LowPriority, jc = De.unstable_IdlePriority, qi = null, at = null;
function oh(e) {
  if (at && typeof at.onCommitFiberRoot == "function") try {
    at.onCommitFiberRoot(qi, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var et = Math.clz32 ? Math.clz32 : uh, lh = Math.log, ah = Math.LN2;
function uh(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (lh(e) / ah | 0) | 0;
}
var Zr = 64, Yr = 4194304;
function ar(e) {
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
function Ii(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, o = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var a = l & ~i;
    a !== 0 ? r = ar(a) : (o &= l, o !== 0 && (r = ar(o)));
  } else l = n & ~i, l !== 0 ? r = ar(l) : o !== 0 && (r = ar(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - et(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function sh(e, t) {
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
function ch(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var l = 31 - et(o), a = 1 << l, u = i[l];
    u === -1 ? (!(a & n) || a & r) && (i[l] = sh(a, t)) : u <= t && (e.expiredLanes |= a), o &= ~a;
  }
}
function Cl(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function $c() {
  var e = Zr;
  return Zr <<= 1, !(Zr & 4194240) && (Zr = 64), e;
}
function Ho(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ur(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - et(t), e[t] = n;
}
function fh(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - et(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
  }
}
function Ra(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - et(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var j = 0;
function bc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Gc, La, Vc, Wc, Xc, Nl = !1, Kr = [], Ot = null, Mt = null, At = null, Tr = /* @__PURE__ */ new Map(), Cr = /* @__PURE__ */ new Map(), Pt = [], dh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Uu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ot = null;
      break;
    case "dragenter":
    case "dragleave":
      Mt = null;
      break;
    case "mouseover":
    case "mouseout":
      At = null;
      break;
    case "pointerover":
    case "pointerout":
      Tr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Cr.delete(t.pointerId);
  }
}
function qn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = jr(t), t !== null && La(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function ph(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return Ot = qn(Ot, e, t, n, r, i), !0;
    case "dragenter":
      return Mt = qn(Mt, e, t, n, r, i), !0;
    case "mouseover":
      return At = qn(At, e, t, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return Tr.set(o, qn(Tr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, Cr.set(o, qn(Cr.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Qc(e) {
  var t = Jt(e.target);
  if (t !== null) {
    var n = fn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Dc(n), t !== null) {
          e.blockedOn = t, Xc(e.priority, function() {
            Vc(n);
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
function vi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = kl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      xl = r, n.target.dispatchEvent(r), xl = null;
    } else return t = jr(n), t !== null && La(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function zu(e, t, n) {
  vi(e) && n.delete(t);
}
function hh() {
  Nl = !1, Ot !== null && vi(Ot) && (Ot = null), Mt !== null && vi(Mt) && (Mt = null), At !== null && vi(At) && (At = null), Tr.forEach(zu), Cr.forEach(zu);
}
function er(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Nl || (Nl = !0, De.unstable_scheduleCallback(De.unstable_NormalPriority, hh)));
}
function Nr(e) {
  function t(i) {
    return er(i, e);
  }
  if (0 < Kr.length) {
    er(Kr[0], e);
    for (var n = 1; n < Kr.length; n++) {
      var r = Kr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ot !== null && er(Ot, e), Mt !== null && er(Mt, e), At !== null && er(At, e), Tr.forEach(t), Cr.forEach(t), n = 0; n < Pt.length; n++) r = Pt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Pt.length && (n = Pt[0], n.blockedOn === null); ) Qc(n), n.blockedOn === null && Pt.shift();
}
var An = St.ReactCurrentBatchConfig, Oi = !0;
function mh(e, t, n, r) {
  var i = j, o = An.transition;
  An.transition = null;
  try {
    j = 1, Ia(e, t, n, r);
  } finally {
    j = i, An.transition = o;
  }
}
function vh(e, t, n, r) {
  var i = j, o = An.transition;
  An.transition = null;
  try {
    j = 4, Ia(e, t, n, r);
  } finally {
    j = i, An.transition = o;
  }
}
function Ia(e, t, n, r) {
  if (Oi) {
    var i = kl(e, t, n, r);
    if (i === null) Vo(e, t, r, Mi, n), Uu(e, r);
    else if (ph(i, e, t, n, r)) r.stopPropagation();
    else if (Uu(e, r), t & 4 && -1 < dh.indexOf(e)) {
      for (; i !== null; ) {
        var o = jr(i);
        if (o !== null && Gc(o), o = kl(e, t, n, r), o === null && Vo(e, t, r, Mi, n), o === i) break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Vo(e, t, r, null, n);
  }
}
var Mi = null;
function kl(e, t, n, r) {
  if (Mi = null, e = _a(r), e = Jt(e), e !== null) if (t = fn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Dc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Mi = e, null;
}
function Zc(e) {
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
      switch (rh()) {
        case Pa:
          return 1;
        case zc:
          return 4;
        case Li:
        case ih:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Lt = null, Oa = null, gi = null;
function Yc() {
  if (gi) return gi;
  var e, t = Oa, n = t.length, r, i = "value" in Lt ? Lt.value : Lt.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++) ;
  return gi = i.slice(e, 1 < r ? 1 - r : void 0);
}
function yi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Jr() {
  return !0;
}
function ju() {
  return !1;
}
function Ue(e) {
  function t(n, r, i, o, l) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Jr : ju, this.isPropagationStopped = ju, this;
  }
  return J(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Jr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Jr);
  }, persist: function() {
  }, isPersistent: Jr }), t;
}
var Xn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ma = Ue(Xn), zr = J({}, Xn, { view: 0, detail: 0 }), gh = Ue(zr), Do, Fo, tr, eo = J({}, zr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Aa, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== tr && (tr && e.type === "mousemove" ? (Do = e.screenX - tr.screenX, Fo = e.screenY - tr.screenY) : Fo = Do = 0, tr = e), Do);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Fo;
} }), $u = Ue(eo), yh = J({}, eo, { dataTransfer: 0 }), Eh = Ue(yh), xh = J({}, zr, { relatedTarget: 0 }), Bo = Ue(xh), Sh = J({}, Xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), wh = Ue(Sh), Th = J({}, Xn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Ch = Ue(Th), Nh = J({}, Xn, { data: 0 }), bu = Ue(Nh), kh = {
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
}, _h = {
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
}, Ph = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Rh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ph[e]) ? !!t[e] : !1;
}
function Aa() {
  return Rh;
}
var Lh = J({}, zr, { key: function(e) {
  if (e.key) {
    var t = kh[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = yi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _h[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Aa, charCode: function(e) {
  return e.type === "keypress" ? yi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? yi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Ih = Ue(Lh), Oh = J({}, eo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Gu = Ue(Oh), Mh = J({}, zr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Aa }), Ah = Ue(Mh), Hh = J({}, Xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Dh = Ue(Hh), Fh = J({}, eo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Bh = Ue(Fh), Uh = [9, 13, 27, 32], Ha = gt && "CompositionEvent" in window, pr = null;
gt && "documentMode" in document && (pr = document.documentMode);
var zh = gt && "TextEvent" in window && !pr, Kc = gt && (!Ha || pr && 8 < pr && 11 >= pr), Vu = " ", Wu = !1;
function Jc(e, t) {
  switch (e) {
    case "keyup":
      return Uh.indexOf(t.keyCode) !== -1;
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
function qc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Sn = !1;
function jh(e, t) {
  switch (e) {
    case "compositionend":
      return qc(t);
    case "keypress":
      return t.which !== 32 ? null : (Wu = !0, Vu);
    case "textInput":
      return e = t.data, e === Vu && Wu ? null : e;
    default:
      return null;
  }
}
function $h(e, t) {
  if (Sn) return e === "compositionend" || !Ha && Jc(e, t) ? (e = Yc(), gi = Oa = Lt = null, Sn = !1, e) : null;
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
      return Kc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var bh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Xu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!bh[e.type] : t === "textarea";
}
function ef(e, t, n, r) {
  Ic(r), t = Ai(t, "onChange"), 0 < t.length && (n = new Ma("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var hr = null, kr = null;
function Gh(e) {
  df(e, 0);
}
function to(e) {
  var t = Cn(e);
  if (Cc(t)) return e;
}
function Vh(e, t) {
  if (e === "change") return t;
}
var tf = !1;
if (gt) {
  var Uo;
  if (gt) {
    var zo = "oninput" in document;
    if (!zo) {
      var Qu = document.createElement("div");
      Qu.setAttribute("oninput", "return;"), zo = typeof Qu.oninput == "function";
    }
    Uo = zo;
  } else Uo = !1;
  tf = Uo && (!document.documentMode || 9 < document.documentMode);
}
function Zu() {
  hr && (hr.detachEvent("onpropertychange", nf), kr = hr = null);
}
function nf(e) {
  if (e.propertyName === "value" && to(kr)) {
    var t = [];
    ef(t, kr, e, _a(e)), Hc(Gh, t);
  }
}
function Wh(e, t, n) {
  e === "focusin" ? (Zu(), hr = t, kr = n, hr.attachEvent("onpropertychange", nf)) : e === "focusout" && Zu();
}
function Xh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return to(kr);
}
function Qh(e, t) {
  if (e === "click") return to(t);
}
function Zh(e, t) {
  if (e === "input" || e === "change") return to(t);
}
function Yh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var nt = typeof Object.is == "function" ? Object.is : Yh;
function _r(e, t) {
  if (nt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ul.call(t, i) || !nt(e[i], t[i])) return !1;
  }
  return !0;
}
function Yu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ku(e, t) {
  var n = Yu(e);
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
    n = Yu(n);
  }
}
function rf(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? rf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function of() {
  for (var e = window, t = _i(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = _i(e.document);
  }
  return t;
}
function Da(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Kh(e) {
  var t = of(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && rf(n.ownerDocument.documentElement, n)) {
    if (r !== null && Da(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Ku(n, o);
        var l = Ku(
          n,
          r
        );
        i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Jh = gt && "documentMode" in document && 11 >= document.documentMode, wn = null, _l = null, mr = null, Pl = !1;
function Ju(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Pl || wn == null || wn !== _i(r) || (r = wn, "selectionStart" in r && Da(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), mr && _r(mr, r) || (mr = r, r = Ai(_l, "onSelect"), 0 < r.length && (t = new Ma("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = wn)));
}
function qr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Tn = { animationend: qr("Animation", "AnimationEnd"), animationiteration: qr("Animation", "AnimationIteration"), animationstart: qr("Animation", "AnimationStart"), transitionend: qr("Transition", "TransitionEnd") }, jo = {}, lf = {};
gt && (lf = document.createElement("div").style, "AnimationEvent" in window || (delete Tn.animationend.animation, delete Tn.animationiteration.animation, delete Tn.animationstart.animation), "TransitionEvent" in window || delete Tn.transitionend.transition);
function no(e) {
  if (jo[e]) return jo[e];
  if (!Tn[e]) return e;
  var t = Tn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in lf) return jo[e] = t[n];
  return e;
}
var af = no("animationend"), uf = no("animationiteration"), sf = no("animationstart"), cf = no("transitionend"), ff = /* @__PURE__ */ new Map(), qu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function $t(e, t) {
  ff.set(e, t), cn(t, [e]);
}
for (var $o = 0; $o < qu.length; $o++) {
  var bo = qu[$o], qh = bo.toLowerCase(), em = bo[0].toUpperCase() + bo.slice(1);
  $t(qh, "on" + em);
}
$t(af, "onAnimationEnd");
$t(uf, "onAnimationIteration");
$t(sf, "onAnimationStart");
$t("dblclick", "onDoubleClick");
$t("focusin", "onFocus");
$t("focusout", "onBlur");
$t(cf, "onTransitionEnd");
Fn("onMouseEnter", ["mouseout", "mouseover"]);
Fn("onMouseLeave", ["mouseout", "mouseover"]);
Fn("onPointerEnter", ["pointerout", "pointerover"]);
Fn("onPointerLeave", ["pointerout", "pointerover"]);
cn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
cn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
cn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), tm = new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));
function es(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, qp(r, t, void 0, e), e.currentTarget = null;
}
function df(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var a = r[l], u = a.instance, s = a.currentTarget;
        if (a = a.listener, u !== o && i.isPropagationStopped()) break e;
        es(i, a, s), o = u;
      }
      else for (l = 0; l < r.length; l++) {
        if (a = r[l], u = a.instance, s = a.currentTarget, a = a.listener, u !== o && i.isPropagationStopped()) break e;
        es(i, a, s), o = u;
      }
    }
  }
  if (Ri) throw e = Tl, Ri = !1, Tl = null, e;
}
function G(e, t) {
  var n = t[Ml];
  n === void 0 && (n = t[Ml] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (pf(t, e, 2, !1), n.add(r));
}
function Go(e, t, n) {
  var r = 0;
  t && (r |= 4), pf(n, e, r, t);
}
var ei = "_reactListening" + Math.random().toString(36).slice(2);
function Pr(e) {
  if (!e[ei]) {
    e[ei] = !0, Ec.forEach(function(n) {
      n !== "selectionchange" && (tm.has(n) || Go(n, !1, e), Go(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ei] || (t[ei] = !0, Go("selectionchange", !1, t));
  }
}
function pf(e, t, n, r) {
  switch (Zc(t)) {
    case 1:
      var i = mh;
      break;
    case 4:
      i = vh;
      break;
    default:
      i = Ia;
  }
  n = i.bind(null, t, n, e), i = void 0, !wl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function Vo(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var l = r.tag;
    if (l === 3 || l === 4) {
      var a = r.stateNode.containerInfo;
      if (a === i || a.nodeType === 8 && a.parentNode === i) break;
      if (l === 4) for (l = r.return; l !== null; ) {
        var u = l.tag;
        if ((u === 3 || u === 4) && (u = l.stateNode.containerInfo, u === i || u.nodeType === 8 && u.parentNode === i)) return;
        l = l.return;
      }
      for (; a !== null; ) {
        if (l = Jt(a), l === null) return;
        if (u = l.tag, u === 5 || u === 6) {
          r = o = l;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  Hc(function() {
    var s = o, c = _a(n), h = [];
    e: {
      var d = ff.get(e);
      if (d !== void 0) {
        var v = Ma, y = e;
        switch (e) {
          case "keypress":
            if (yi(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Ih;
            break;
          case "focusin":
            y = "focus", v = Bo;
            break;
          case "focusout":
            y = "blur", v = Bo;
            break;
          case "beforeblur":
          case "afterblur":
            v = Bo;
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
            v = $u;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Eh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Ah;
            break;
          case af:
          case uf:
          case sf:
            v = wh;
            break;
          case cf:
            v = Dh;
            break;
          case "scroll":
            v = gh;
            break;
          case "wheel":
            v = Bh;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Ch;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Gu;
        }
        var E = (t & 4) !== 0, R = !E && e === "scroll", p = E ? d !== null ? d + "Capture" : null : d;
        E = [];
        for (var f = s, m; f !== null; ) {
          m = f;
          var g = m.stateNode;
          if (m.tag === 5 && g !== null && (m = g, p !== null && (g = wr(f, p), g != null && E.push(Rr(f, g, m)))), R) break;
          f = f.return;
        }
        0 < E.length && (d = new v(d, y, null, n, c), h.push({ event: d, listeners: E }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", d && n !== xl && (y = n.relatedTarget || n.fromElement) && (Jt(y) || y[yt])) break e;
        if ((v || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, v ? (y = n.relatedTarget || n.toElement, v = s, y = y ? Jt(y) : null, y !== null && (R = fn(y), y !== R || y.tag !== 5 && y.tag !== 6) && (y = null)) : (v = null, y = s), v !== y)) {
          if (E = $u, g = "onMouseLeave", p = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (E = Gu, g = "onPointerLeave", p = "onPointerEnter", f = "pointer"), R = v == null ? d : Cn(v), m = y == null ? d : Cn(y), d = new E(g, f + "leave", v, n, c), d.target = R, d.relatedTarget = m, g = null, Jt(c) === s && (E = new E(p, f + "enter", y, n, c), E.target = m, E.relatedTarget = R, g = E), R = g, v && y) t: {
            for (E = v, p = y, f = 0, m = E; m; m = gn(m)) f++;
            for (m = 0, g = p; g; g = gn(g)) m++;
            for (; 0 < f - m; ) E = gn(E), f--;
            for (; 0 < m - f; ) p = gn(p), m--;
            for (; f--; ) {
              if (E === p || p !== null && E === p.alternate) break t;
              E = gn(E), p = gn(p);
            }
            E = null;
          }
          else E = null;
          v !== null && ts(h, d, v, E, !1), y !== null && R !== null && ts(h, R, y, E, !0);
        }
      }
      e: {
        if (d = s ? Cn(s) : window, v = d.nodeName && d.nodeName.toLowerCase(), v === "select" || v === "input" && d.type === "file") var S = Vh;
        else if (Xu(d)) if (tf) S = Zh;
        else {
          S = Xh;
          var w = Wh;
        }
        else (v = d.nodeName) && v.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (S = Qh);
        if (S && (S = S(e, s))) {
          ef(h, S, n, c);
          break e;
        }
        w && w(e, d, s), e === "focusout" && (w = d._wrapperState) && w.controlled && d.type === "number" && ml(d, "number", d.value);
      }
      switch (w = s ? Cn(s) : window, e) {
        case "focusin":
          (Xu(w) || w.contentEditable === "true") && (wn = w, _l = s, mr = null);
          break;
        case "focusout":
          mr = _l = wn = null;
          break;
        case "mousedown":
          Pl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Pl = !1, Ju(h, n, c);
          break;
        case "selectionchange":
          if (Jh) break;
        case "keydown":
        case "keyup":
          Ju(h, n, c);
      }
      var N;
      if (Ha) e: {
        switch (e) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e;
        }
        P = void 0;
      }
      else Sn ? Jc(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (Kc && n.locale !== "ko" && (Sn || P !== "onCompositionStart" ? P === "onCompositionEnd" && Sn && (N = Yc()) : (Lt = c, Oa = "value" in Lt ? Lt.value : Lt.textContent, Sn = !0)), w = Ai(s, P), 0 < w.length && (P = new bu(P, e, null, n, c), h.push({ event: P, listeners: w }), N ? P.data = N : (N = qc(n), N !== null && (P.data = N)))), (N = zh ? jh(e, n) : $h(e, n)) && (s = Ai(s, "onBeforeInput"), 0 < s.length && (c = new bu("onBeforeInput", "beforeinput", null, n, c), h.push({ event: c, listeners: s }), c.data = N));
    }
    df(h, t);
  });
}
function Rr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ai(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = wr(e, n), o != null && r.unshift(Rr(e, o, i)), o = wr(e, t), o != null && r.push(Rr(e, o, i))), e = e.return;
  }
  return r;
}
function gn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ts(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n, u = a.alternate, s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 && s !== null && (a = s, i ? (u = wr(n, o), u != null && l.unshift(Rr(n, u, a))) : i || (u = wr(n, o), u != null && l.push(Rr(n, u, a)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var nm = /\r\n?/g, rm = /\u0000|\uFFFD/g;
function ns(e) {
  return (typeof e == "string" ? e : "" + e).replace(nm, `
`).replace(rm, "");
}
function ti(e, t, n) {
  if (t = ns(t), ns(e) !== t && n) throw Error(x(425));
}
function Hi() {
}
var Rl = null, Ll = null;
function Il(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ol = typeof setTimeout == "function" ? setTimeout : void 0, im = typeof clearTimeout == "function" ? clearTimeout : void 0, rs = typeof Promise == "function" ? Promise : void 0, om = typeof queueMicrotask == "function" ? queueMicrotask : typeof rs < "u" ? function(e) {
  return rs.resolve(null).then(e).catch(lm);
} : Ol;
function lm(e) {
  setTimeout(function() {
    throw e;
  });
}
function Wo(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), Nr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Nr(t);
}
function Ht(e) {
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
function is(e) {
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
var Qn = Math.random().toString(36).slice(2), lt = "__reactFiber$" + Qn, Lr = "__reactProps$" + Qn, yt = "__reactContainer$" + Qn, Ml = "__reactEvents$" + Qn, am = "__reactListeners$" + Qn, um = "__reactHandles$" + Qn;
function Jt(e) {
  var t = e[lt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[yt] || n[lt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = is(e); e !== null; ) {
        if (n = e[lt]) return n;
        e = is(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function jr(e) {
  return e = e[lt] || e[yt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Cn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function ro(e) {
  return e[Lr] || null;
}
var Al = [], Nn = -1;
function bt(e) {
  return { current: e };
}
function W(e) {
  0 > Nn || (e.current = Al[Nn], Al[Nn] = null, Nn--);
}
function b(e, t) {
  Nn++, Al[Nn] = e.current, e.current = t;
}
var jt = {}, ve = bt(jt), Le = bt(!1), rn = jt;
function Bn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return jt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n) i[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function Ie(e) {
  return e = e.childContextTypes, e != null;
}
function Di() {
  W(Le), W(ve);
}
function os(e, t, n) {
  if (ve.current !== jt) throw Error(x(168));
  b(ve, t), b(Le, n);
}
function hf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(x(108, Wp(e) || "Unknown", i));
  return J({}, n, r);
}
function Fi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || jt, rn = ve.current, b(ve, e), b(Le, Le.current), !0;
}
function ls(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n ? (e = hf(e, t, rn), r.__reactInternalMemoizedMergedChildContext = e, W(Le), W(ve), b(ve, e)) : W(Le), b(Le, n);
}
var pt = null, io = !1, Xo = !1;
function mf(e) {
  pt === null ? pt = [e] : pt.push(e);
}
function sm(e) {
  io = !0, mf(e);
}
function Gt() {
  if (!Xo && pt !== null) {
    Xo = !0;
    var e = 0, t = j;
    try {
      var n = pt;
      for (j = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      pt = null, io = !1;
    } catch (i) {
      throw pt !== null && (pt = pt.slice(e + 1)), Uc(Pa, Gt), i;
    } finally {
      j = t, Xo = !1;
    }
  }
  return null;
}
var kn = [], _n = 0, Bi = null, Ui = 0, je = [], $e = 0, on = null, ht = 1, mt = "";
function Qt(e, t) {
  kn[_n++] = Ui, kn[_n++] = Bi, Bi = e, Ui = t;
}
function vf(e, t, n) {
  je[$e++] = ht, je[$e++] = mt, je[$e++] = on, on = e;
  var r = ht;
  e = mt;
  var i = 32 - et(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - et(t) + i;
  if (30 < o) {
    var l = i - i % 5;
    o = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, ht = 1 << 32 - et(t) + i | n << i | r, mt = o + e;
  } else ht = 1 << o | n << i | r, mt = e;
}
function Fa(e) {
  e.return !== null && (Qt(e, 1), vf(e, 1, 0));
}
function Ba(e) {
  for (; e === Bi; ) Bi = kn[--_n], kn[_n] = null, Ui = kn[--_n], kn[_n] = null;
  for (; e === on; ) on = je[--$e], je[$e] = null, mt = je[--$e], je[$e] = null, ht = je[--$e], je[$e] = null;
}
var He = null, Ae = null, Z = !1, qe = null;
function gf(e, t) {
  var n = be(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function as(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, He = e, Ae = Ht(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, He = e, Ae = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = on !== null ? { id: ht, overflow: mt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = be(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, He = e, Ae = null, !0) : !1;
    default:
      return !1;
  }
}
function Hl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Dl(e) {
  if (Z) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!as(e, t)) {
        if (Hl(e)) throw Error(x(418));
        t = Ht(n.nextSibling);
        var r = He;
        t && as(e, t) ? gf(r, n) : (e.flags = e.flags & -4097 | 2, Z = !1, He = e);
      }
    } else {
      if (Hl(e)) throw Error(x(418));
      e.flags = e.flags & -4097 | 2, Z = !1, He = e;
    }
  }
}
function us(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  He = e;
}
function ni(e) {
  if (e !== He) return !1;
  if (!Z) return us(e), Z = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Il(e.type, e.memoizedProps)), t && (t = Ae)) {
    if (Hl(e)) throw yf(), Error(x(418));
    for (; t; ) gf(e, t), t = Ht(t.nextSibling);
  }
  if (us(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = Ht(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = He ? Ht(e.stateNode.nextSibling) : null;
  return !0;
}
function yf() {
  for (var e = Ae; e; ) e = Ht(e.nextSibling);
}
function Un() {
  Ae = He = null, Z = !1;
}
function Ua(e) {
  qe === null ? qe = [e] : qe.push(e);
}
var cm = St.ReactCurrentBatchConfig;
function nr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var i = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(l) {
        var a = i.refs;
        l === null ? delete a[o] : a[o] = l;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function ri(e, t) {
  throw e = Object.prototype.toString.call(t), Error(x(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ss(e) {
  var t = e._init;
  return t(e._payload);
}
function Ef(e) {
  function t(p, f) {
    if (e) {
      var m = p.deletions;
      m === null ? (p.deletions = [f], p.flags |= 16) : m.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), f = f.sibling;
    return null;
  }
  function r(p, f) {
    for (p = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? p.set(f.key, f) : p.set(f.index, f), f = f.sibling;
    return p;
  }
  function i(p, f) {
    return p = Ut(p, f), p.index = 0, p.sibling = null, p;
  }
  function o(p, f, m) {
    return p.index = m, e ? (m = p.alternate, m !== null ? (m = m.index, m < f ? (p.flags |= 2, f) : m) : (p.flags |= 2, f)) : (p.flags |= 1048576, f);
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, f, m, g) {
    return f === null || f.tag !== 6 ? (f = el(m, p.mode, g), f.return = p, f) : (f = i(f, m), f.return = p, f);
  }
  function u(p, f, m, g) {
    var S = m.type;
    return S === xn ? c(p, f, m.props.children, g, m.key) : f !== null && (f.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Nt && ss(S) === f.type) ? (g = i(f, m.props), g.ref = nr(p, f, m), g.return = p, g) : (g = Ni(m.type, m.key, m.props, null, p.mode, g), g.ref = nr(p, f, m), g.return = p, g);
  }
  function s(p, f, m, g) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== m.containerInfo || f.stateNode.implementation !== m.implementation ? (f = tl(m, p.mode, g), f.return = p, f) : (f = i(f, m.children || []), f.return = p, f);
  }
  function c(p, f, m, g, S) {
    return f === null || f.tag !== 7 ? (f = nn(m, p.mode, g, S), f.return = p, f) : (f = i(f, m), f.return = p, f);
  }
  function h(p, f, m) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = el("" + f, p.mode, m), f.return = p, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Wr:
          return m = Ni(f.type, f.key, f.props, null, p.mode, m), m.ref = nr(p, null, f), m.return = p, m;
        case En:
          return f = tl(f, p.mode, m), f.return = p, f;
        case Nt:
          var g = f._init;
          return h(p, g(f._payload), m);
      }
      if (lr(f) || Kn(f)) return f = nn(f, p.mode, m, null), f.return = p, f;
      ri(p, f);
    }
    return null;
  }
  function d(p, f, m, g) {
    var S = f !== null ? f.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return S !== null ? null : a(p, f, "" + m, g);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Wr:
          return m.key === S ? u(p, f, m, g) : null;
        case En:
          return m.key === S ? s(p, f, m, g) : null;
        case Nt:
          return S = m._init, d(
            p,
            f,
            S(m._payload),
            g
          );
      }
      if (lr(m) || Kn(m)) return S !== null ? null : c(p, f, m, g, null);
      ri(p, m);
    }
    return null;
  }
  function v(p, f, m, g, S) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return p = p.get(m) || null, a(f, p, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Wr:
          return p = p.get(g.key === null ? m : g.key) || null, u(f, p, g, S);
        case En:
          return p = p.get(g.key === null ? m : g.key) || null, s(f, p, g, S);
        case Nt:
          var w = g._init;
          return v(p, f, m, w(g._payload), S);
      }
      if (lr(g) || Kn(g)) return p = p.get(m) || null, c(f, p, g, S, null);
      ri(f, g);
    }
    return null;
  }
  function y(p, f, m, g) {
    for (var S = null, w = null, N = f, P = f = 0, X = null; N !== null && P < m.length; P++) {
      N.index > P ? (X = N, N = null) : X = N.sibling;
      var D = d(p, N, m[P], g);
      if (D === null) {
        N === null && (N = X);
        break;
      }
      e && N && D.alternate === null && t(p, N), f = o(D, f, P), w === null ? S = D : w.sibling = D, w = D, N = X;
    }
    if (P === m.length) return n(p, N), Z && Qt(p, P), S;
    if (N === null) {
      for (; P < m.length; P++) N = h(p, m[P], g), N !== null && (f = o(N, f, P), w === null ? S = N : w.sibling = N, w = N);
      return Z && Qt(p, P), S;
    }
    for (N = r(p, N); P < m.length; P++) X = v(N, p, P, m[P], g), X !== null && (e && X.alternate !== null && N.delete(X.key === null ? P : X.key), f = o(X, f, P), w === null ? S = X : w.sibling = X, w = X);
    return e && N.forEach(function(ge) {
      return t(p, ge);
    }), Z && Qt(p, P), S;
  }
  function E(p, f, m, g) {
    var S = Kn(m);
    if (typeof S != "function") throw Error(x(150));
    if (m = S.call(m), m == null) throw Error(x(151));
    for (var w = S = null, N = f, P = f = 0, X = null, D = m.next(); N !== null && !D.done; P++, D = m.next()) {
      N.index > P ? (X = N, N = null) : X = N.sibling;
      var ge = d(p, N, D.value, g);
      if (ge === null) {
        N === null && (N = X);
        break;
      }
      e && N && ge.alternate === null && t(p, N), f = o(ge, f, P), w === null ? S = ge : w.sibling = ge, w = ge, N = X;
    }
    if (D.done) return n(
      p,
      N
    ), Z && Qt(p, P), S;
    if (N === null) {
      for (; !D.done; P++, D = m.next()) D = h(p, D.value, g), D !== null && (f = o(D, f, P), w === null ? S = D : w.sibling = D, w = D);
      return Z && Qt(p, P), S;
    }
    for (N = r(p, N); !D.done; P++, D = m.next()) D = v(N, p, P, D.value, g), D !== null && (e && D.alternate !== null && N.delete(D.key === null ? P : D.key), f = o(D, f, P), w === null ? S = D : w.sibling = D, w = D);
    return e && N.forEach(function(ye) {
      return t(p, ye);
    }), Z && Qt(p, P), S;
  }
  function R(p, f, m, g) {
    if (typeof m == "object" && m !== null && m.type === xn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Wr:
          e: {
            for (var S = m.key, w = f; w !== null; ) {
              if (w.key === S) {
                if (S = m.type, S === xn) {
                  if (w.tag === 7) {
                    n(p, w.sibling), f = i(w, m.props.children), f.return = p, p = f;
                    break e;
                  }
                } else if (w.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Nt && ss(S) === w.type) {
                  n(p, w.sibling), f = i(w, m.props), f.ref = nr(p, w, m), f.return = p, p = f;
                  break e;
                }
                n(p, w);
                break;
              } else t(p, w);
              w = w.sibling;
            }
            m.type === xn ? (f = nn(m.props.children, p.mode, g, m.key), f.return = p, p = f) : (g = Ni(m.type, m.key, m.props, null, p.mode, g), g.ref = nr(p, f, m), g.return = p, p = g);
          }
          return l(p);
        case En:
          e: {
            for (w = m.key; f !== null; ) {
              if (f.key === w) if (f.tag === 4 && f.stateNode.containerInfo === m.containerInfo && f.stateNode.implementation === m.implementation) {
                n(p, f.sibling), f = i(f, m.children || []), f.return = p, p = f;
                break e;
              } else {
                n(p, f);
                break;
              }
              else t(p, f);
              f = f.sibling;
            }
            f = tl(m, p.mode, g), f.return = p, p = f;
          }
          return l(p);
        case Nt:
          return w = m._init, R(p, f, w(m._payload), g);
      }
      if (lr(m)) return y(p, f, m, g);
      if (Kn(m)) return E(p, f, m, g);
      ri(p, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, f !== null && f.tag === 6 ? (n(p, f.sibling), f = i(f, m), f.return = p, p = f) : (n(p, f), f = el(m, p.mode, g), f.return = p, p = f), l(p)) : n(p, f);
  }
  return R;
}
var zn = Ef(!0), xf = Ef(!1), zi = bt(null), ji = null, Pn = null, za = null;
function ja() {
  za = Pn = ji = null;
}
function $a(e) {
  var t = zi.current;
  W(zi), e._currentValue = t;
}
function Fl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Hn(e, t) {
  ji = e, za = Pn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Re = !0), e.firstContext = null);
}
function Ve(e) {
  var t = e._currentValue;
  if (za !== e) if (e = { context: e, memoizedValue: t, next: null }, Pn === null) {
    if (ji === null) throw Error(x(308));
    Pn = e, ji.dependencies = { lanes: 0, firstContext: e };
  } else Pn = Pn.next = e;
  return t;
}
var qt = null;
function ba(e) {
  qt === null ? qt = [e] : qt.push(e);
}
function Sf(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, ba(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Et(e, r);
}
function Et(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var kt = !1;
function Ga(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function wf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function vt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, U & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Et(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, ba(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Et(e, n);
}
function Ei(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ra(e, n);
  }
}
function cs(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? i = o = l : o = o.next = l, n = n.next;
      } while (n !== null);
      o === null ? i = o = t : o = o.next = t;
    } else i = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function $i(e, t, n, r) {
  var i = e.updateQueue;
  kt = !1;
  var o = i.firstBaseUpdate, l = i.lastBaseUpdate, a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var u = a, s = u.next;
    u.next = null, l === null ? o = s : l.next = s, l = u;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== l && (a === null ? c.firstBaseUpdate = s : a.next = s, c.lastBaseUpdate = u));
  }
  if (o !== null) {
    var h = i.baseState;
    l = 0, c = s = u = null, a = o;
    do {
      var d = a.lane, v = a.eventTime;
      if ((r & d) === d) {
        c !== null && (c = c.next = {
          eventTime: v,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var y = e, E = a;
          switch (d = t, v = n, E.tag) {
            case 1:
              if (y = E.payload, typeof y == "function") {
                h = y.call(v, h, d);
                break e;
              }
              h = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = E.payload, d = typeof y == "function" ? y.call(v, h, d) : y, d == null) break e;
              h = J({}, h, d);
              break e;
            case 2:
              kt = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [a] : d.push(a));
      } else v = { eventTime: v, lane: d, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (s = c = v, u = h) : c = c.next = v, l |= d;
      if (a = a.next, a === null) {
        if (a = i.shared.pending, a === null) break;
        d = a, a = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null;
      }
    } while (!0);
    if (c === null && (u = h), i.baseState = u, i.firstBaseUpdate = s, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        l |= i.lane, i = i.next;
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    an |= l, e.lanes = l, e.memoizedState = h;
  }
}
function fs(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(x(191, i));
      i.call(r);
    }
  }
}
var $r = {}, ut = bt($r), Ir = bt($r), Or = bt($r);
function en(e) {
  if (e === $r) throw Error(x(174));
  return e;
}
function Va(e, t) {
  switch (b(Or, t), b(Ir, e), b(ut, $r), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : gl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = gl(t, e);
  }
  W(ut), b(ut, t);
}
function jn() {
  W(ut), W(Ir), W(Or);
}
function Tf(e) {
  en(Or.current);
  var t = en(ut.current), n = gl(t, e.type);
  t !== n && (b(Ir, e), b(ut, n));
}
function Wa(e) {
  Ir.current === e && (W(ut), W(Ir));
}
var Y = bt(0);
function bi(e) {
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
var Qo = [];
function Xa() {
  for (var e = 0; e < Qo.length; e++) Qo[e]._workInProgressVersionPrimary = null;
  Qo.length = 0;
}
var xi = St.ReactCurrentDispatcher, Zo = St.ReactCurrentBatchConfig, ln = 0, K = null, ie = null, le = null, Gi = !1, vr = !1, Mr = 0, fm = 0;
function pe() {
  throw Error(x(321));
}
function Qa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!nt(e[n], t[n])) return !1;
  return !0;
}
function Za(e, t, n, r, i, o) {
  if (ln = o, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, xi.current = e === null || e.memoizedState === null ? mm : vm, e = n(r, i), vr) {
    o = 0;
    do {
      if (vr = !1, Mr = 0, 25 <= o) throw Error(x(301));
      o += 1, le = ie = null, t.updateQueue = null, xi.current = gm, e = n(r, i);
    } while (vr);
  }
  if (xi.current = Vi, t = ie !== null && ie.next !== null, ln = 0, le = ie = K = null, Gi = !1, t) throw Error(x(300));
  return e;
}
function Ya() {
  var e = Mr !== 0;
  return Mr = 0, e;
}
function ot() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return le === null ? K.memoizedState = le = e : le = le.next = e, le;
}
function We() {
  if (ie === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ie.next;
  var t = le === null ? K.memoizedState : le.next;
  if (t !== null) le = t, ie = e;
  else {
    if (e === null) throw Error(x(310));
    ie = e, e = { memoizedState: ie.memoizedState, baseState: ie.baseState, baseQueue: ie.baseQueue, queue: ie.queue, next: null }, le === null ? K.memoizedState = le = e : le = le.next = e;
  }
  return le;
}
function Ar(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Yo(e) {
  var t = We(), n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = ie, i = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      i.next = o.next, o.next = l;
    }
    r.baseQueue = i = o, n.pending = null;
  }
  if (i !== null) {
    o = i.next, r = r.baseState;
    var a = l = null, u = null, s = o;
    do {
      var c = s.lane;
      if ((ln & c) === c) u !== null && (u = u.next = { lane: 0, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null }), r = s.hasEagerState ? s.eagerState : e(r, s.action);
      else {
        var h = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null
        };
        u === null ? (a = u = h, l = r) : u = u.next = h, K.lanes |= c, an |= c;
      }
      s = s.next;
    } while (s !== null && s !== o);
    u === null ? l = r : u.next = a, nt(r, t.memoizedState) || (Re = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, K.lanes |= o, an |= o, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ko(e) {
  var t = We(), n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = i = i.next;
    do
      o = e(o, l.action), l = l.next;
    while (l !== i);
    nt(o, t.memoizedState) || (Re = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Cf() {
}
function Nf(e, t) {
  var n = K, r = We(), i = t(), o = !nt(r.memoizedState, i);
  if (o && (r.memoizedState = i, Re = !0), r = r.queue, Ka(Pf.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || le !== null && le.memoizedState.tag & 1) {
    if (n.flags |= 2048, Hr(9, _f.bind(null, n, r, i, t), void 0, null), ae === null) throw Error(x(349));
    ln & 30 || kf(n, t, i);
  }
  return i;
}
function kf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function _f(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Rf(t) && Lf(e);
}
function Pf(e, t, n) {
  return n(function() {
    Rf(t) && Lf(e);
  });
}
function Rf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !nt(e, n);
  } catch {
    return !0;
  }
}
function Lf(e) {
  var t = Et(e, 1);
  t !== null && tt(t, e, 1, -1);
}
function ds(e) {
  var t = ot();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ar, lastRenderedState: e }, t.queue = e, e = e.dispatch = hm.bind(null, K, e), [t.memoizedState, e];
}
function Hr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function If() {
  return We().memoizedState;
}
function Si(e, t, n, r) {
  var i = ot();
  K.flags |= e, i.memoizedState = Hr(1 | t, n, void 0, r === void 0 ? null : r);
}
function oo(e, t, n, r) {
  var i = We();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ie !== null) {
    var l = ie.memoizedState;
    if (o = l.destroy, r !== null && Qa(r, l.deps)) {
      i.memoizedState = Hr(t, n, o, r);
      return;
    }
  }
  K.flags |= e, i.memoizedState = Hr(1 | t, n, o, r);
}
function ps(e, t) {
  return Si(8390656, 8, e, t);
}
function Ka(e, t) {
  return oo(2048, 8, e, t);
}
function Of(e, t) {
  return oo(4, 2, e, t);
}
function Mf(e, t) {
  return oo(4, 4, e, t);
}
function Af(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Hf(e, t, n) {
  return n = n != null ? n.concat([e]) : null, oo(4, 4, Af.bind(null, t, e), n);
}
function Ja() {
}
function Df(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qa(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ff(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qa(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Bf(e, t, n) {
  return ln & 21 ? (nt(n, t) || (n = $c(), K.lanes |= n, an |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Re = !0), e.memoizedState = n);
}
function dm(e, t) {
  var n = j;
  j = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Zo.transition;
  Zo.transition = {};
  try {
    e(!1), t();
  } finally {
    j = n, Zo.transition = r;
  }
}
function Uf() {
  return We().memoizedState;
}
function pm(e, t, n) {
  var r = Bt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, zf(e)) jf(t, n);
  else if (n = Sf(e, t, n, r), n !== null) {
    var i = Ne();
    tt(n, e, r, i), $f(n, t, r);
  }
}
function hm(e, t, n) {
  var r = Bt(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (zf(e)) jf(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var l = t.lastRenderedState, a = o(l, n);
      if (i.hasEagerState = !0, i.eagerState = a, nt(a, l)) {
        var u = t.interleaved;
        u === null ? (i.next = i, ba(t)) : (i.next = u.next, u.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = Sf(e, t, i, r), n !== null && (i = Ne(), tt(n, e, r, i), $f(n, t, r));
  }
}
function zf(e) {
  var t = e.alternate;
  return e === K || t !== null && t === K;
}
function jf(e, t) {
  vr = Gi = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function $f(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ra(e, n);
  }
}
var Vi = { readContext: Ve, useCallback: pe, useContext: pe, useEffect: pe, useImperativeHandle: pe, useInsertionEffect: pe, useLayoutEffect: pe, useMemo: pe, useReducer: pe, useRef: pe, useState: pe, useDebugValue: pe, useDeferredValue: pe, useTransition: pe, useMutableSource: pe, useSyncExternalStore: pe, useId: pe, unstable_isNewReconciler: !1 }, mm = { readContext: Ve, useCallback: function(e, t) {
  return ot().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ve, useEffect: ps, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Si(
    4194308,
    4,
    Af.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Si(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Si(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ot();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ot();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = pm.bind(null, K, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ot();
  return e = { current: e }, t.memoizedState = e;
}, useState: ds, useDebugValue: Ja, useDeferredValue: function(e) {
  return ot().memoizedState = e;
}, useTransition: function() {
  var e = ds(!1), t = e[0];
  return e = dm.bind(null, e[1]), ot().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = K, i = ot();
  if (Z) {
    if (n === void 0) throw Error(x(407));
    n = n();
  } else {
    if (n = t(), ae === null) throw Error(x(349));
    ln & 30 || kf(r, t, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return i.queue = o, ps(Pf.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Hr(9, _f.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = ot(), t = ae.identifierPrefix;
  if (Z) {
    var n = mt, r = ht;
    n = (r & ~(1 << 32 - et(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Mr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = fm++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, vm = {
  readContext: Ve,
  useCallback: Df,
  useContext: Ve,
  useEffect: Ka,
  useImperativeHandle: Hf,
  useInsertionEffect: Of,
  useLayoutEffect: Mf,
  useMemo: Ff,
  useReducer: Yo,
  useRef: If,
  useState: function() {
    return Yo(Ar);
  },
  useDebugValue: Ja,
  useDeferredValue: function(e) {
    var t = We();
    return Bf(t, ie.memoizedState, e);
  },
  useTransition: function() {
    var e = Yo(Ar)[0], t = We().memoizedState;
    return [e, t];
  },
  useMutableSource: Cf,
  useSyncExternalStore: Nf,
  useId: Uf,
  unstable_isNewReconciler: !1
}, gm = { readContext: Ve, useCallback: Df, useContext: Ve, useEffect: Ka, useImperativeHandle: Hf, useInsertionEffect: Of, useLayoutEffect: Mf, useMemo: Ff, useReducer: Ko, useRef: If, useState: function() {
  return Ko(Ar);
}, useDebugValue: Ja, useDeferredValue: function(e) {
  var t = We();
  return ie === null ? t.memoizedState = e : Bf(t, ie.memoizedState, e);
}, useTransition: function() {
  var e = Ko(Ar)[0], t = We().memoizedState;
  return [e, t];
}, useMutableSource: Cf, useSyncExternalStore: Nf, useId: Uf, unstable_isNewReconciler: !1 };
function Ke(e, t) {
  if (e && e.defaultProps) {
    t = J({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Bl(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : J({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var lo = { isMounted: function(e) {
  return (e = e._reactInternals) ? fn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ne(), i = Bt(e), o = vt(r, i);
  o.payload = t, n != null && (o.callback = n), t = Dt(e, o, i), t !== null && (tt(t, e, i, r), Ei(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ne(), i = Bt(e), o = vt(r, i);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Dt(e, o, i), t !== null && (tt(t, e, i, r), Ei(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ne(), r = Bt(e), i = vt(n, r);
  i.tag = 2, t != null && (i.callback = t), t = Dt(e, i, r), t !== null && (tt(t, e, r, n), Ei(t, e, r));
} };
function hs(e, t, n, r, i, o, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !_r(n, r) || !_r(i, o) : !0;
}
function bf(e, t, n) {
  var r = !1, i = jt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ve(o) : (i = Ie(t) ? rn : ve.current, r = t.contextTypes, o = (r = r != null) ? Bn(e, i) : jt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = lo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function ms(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && lo.enqueueReplaceState(t, t.state, null);
}
function Ul(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, Ga(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = Ve(o) : (o = Ie(t) ? rn : ve.current, i.context = Bn(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Bl(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && lo.enqueueReplaceState(i, i.state, null), $i(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function $n(e, t) {
  try {
    var n = "", r = t;
    do
      n += Vp(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Jo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function zl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var ym = typeof WeakMap == "function" ? WeakMap : Map;
function Gf(e, t, n) {
  n = vt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Xi || (Xi = !0, Yl = r), zl(e, t);
  }, n;
}
function Vf(e, t, n) {
  n = vt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      zl(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    zl(e, t), typeof r != "function" && (Ft === null ? Ft = /* @__PURE__ */ new Set([this]) : Ft.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function vs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ym();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = Om.bind(null, e, t, n), t.then(e, e));
}
function gs(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ys(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = vt(-1, 1), t.tag = 2, Dt(n, t, 1))), n.lanes |= 1), e);
}
var Em = St.ReactCurrentOwner, Re = !1;
function Se(e, t, n, r) {
  t.child = e === null ? xf(t, null, n, r) : zn(t, e.child, n, r);
}
function Es(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return Hn(t, i), r = Za(e, t, n, r, o, i), n = Ya(), e !== null && !Re ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, xt(e, t, i)) : (Z && n && Fa(t), t.flags |= 1, Se(e, t, r, i), t.child);
}
function xs(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !lu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Wf(e, t, o, r, i)) : (e = Ni(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var l = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : _r, n(l, r) && e.ref === t.ref) return xt(e, t, i);
  }
  return t.flags |= 1, e = Ut(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Wf(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (_r(o, r) && e.ref === t.ref) if (Re = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (Re = !0);
    else return t.lanes = e.lanes, xt(e, t, i);
  }
  return jl(e, t, n, r, i);
}
function Xf(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, b(Ln, Me), Me |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, b(Ln, Me), Me |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, b(Ln, Me), Me |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, b(Ln, Me), Me |= r;
  return Se(e, t, i, n), t.child;
}
function Qf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function jl(e, t, n, r, i) {
  var o = Ie(n) ? rn : ve.current;
  return o = Bn(t, o), Hn(t, i), n = Za(e, t, n, r, o, i), r = Ya(), e !== null && !Re ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, xt(e, t, i)) : (Z && r && Fa(t), t.flags |= 1, Se(e, t, n, i), t.child);
}
function Ss(e, t, n, r, i) {
  if (Ie(n)) {
    var o = !0;
    Fi(t);
  } else o = !1;
  if (Hn(t, i), t.stateNode === null) wi(e, t), bf(t, n, r), Ul(t, n, r, i), r = !0;
  else if (e === null) {
    var l = t.stateNode, a = t.memoizedProps;
    l.props = a;
    var u = l.context, s = n.contextType;
    typeof s == "object" && s !== null ? s = Ve(s) : (s = Ie(n) ? rn : ve.current, s = Bn(t, s));
    var c = n.getDerivedStateFromProps, h = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    h || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== r || u !== s) && ms(t, l, r, s), kt = !1;
    var d = t.memoizedState;
    l.state = d, $i(t, r, l, i), u = t.memoizedState, a !== r || d !== u || Le.current || kt ? (typeof c == "function" && (Bl(t, n, c, r), u = t.memoizedState), (a = kt || hs(t, n, a, r, d, u, s)) ? (h || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), l.props = r, l.state = u, l.context = s, r = a) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, wf(e, t), a = t.memoizedProps, s = t.type === t.elementType ? a : Ke(t.type, a), l.props = s, h = t.pendingProps, d = l.context, u = n.contextType, typeof u == "object" && u !== null ? u = Ve(u) : (u = Ie(n) ? rn : ve.current, u = Bn(t, u));
    var v = n.getDerivedStateFromProps;
    (c = typeof v == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== h || d !== u) && ms(t, l, r, u), kt = !1, d = t.memoizedState, l.state = d, $i(t, r, l, i);
    var y = t.memoizedState;
    a !== h || d !== y || Le.current || kt ? (typeof v == "function" && (Bl(t, n, v, r), y = t.memoizedState), (s = kt || hs(t, n, s, r, d, y, u) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, y, u), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, y, u)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), l.props = r, l.state = y, l.context = u, r = s) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return $l(e, t, n, r, o, i);
}
function $l(e, t, n, r, i, o) {
  Qf(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && ls(t, n, !1), xt(e, t, o);
  r = t.stateNode, Em.current = t;
  var a = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = zn(t, e.child, null, o), t.child = zn(t, null, a, o)) : Se(e, t, a, o), t.memoizedState = r.state, i && ls(t, n, !0), t.child;
}
function Zf(e) {
  var t = e.stateNode;
  t.pendingContext ? os(e, t.pendingContext, t.pendingContext !== t.context) : t.context && os(e, t.context, !1), Va(e, t.containerInfo);
}
function ws(e, t, n, r, i) {
  return Un(), Ua(i), t.flags |= 256, Se(e, t, n, r), t.child;
}
var bl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Gl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Yf(e, t, n) {
  var r = t.pendingProps, i = Y.current, o = !1, l = (t.flags & 128) !== 0, a;
  if ((a = l) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), b(Y, i & 1), e === null)
    return Dl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, l = { mode: "hidden", children: l }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = so(l, r, 0, null), e = nn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Gl(n), t.memoizedState = bl, e) : qa(t, l));
  if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return xm(e, t, l, r, a, i, n);
  if (o) {
    o = r.fallback, l = t.mode, i = e.child, a = i.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Ut(i, u), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = Ut(a, o) : (o = nn(o, l, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, l = e.child.memoizedState, l = l === null ? Gl(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, o.memoizedState = l, o.childLanes = e.childLanes & ~n, t.memoizedState = bl, r;
  }
  return o = e.child, e = o.sibling, r = Ut(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function qa(e, t) {
  return t = so({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ii(e, t, n, r) {
  return r !== null && Ua(r), zn(t, e.child, null, n), e = qa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function xm(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Jo(Error(x(422))), ii(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = so({ mode: "visible", children: r.children }, i, 0, null), o = nn(o, i, l, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && zn(t, e.child, null, l), t.child.memoizedState = Gl(l), t.memoizedState = bl, o);
  if (!(t.mode & 1)) return ii(e, t, l, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
    return r = a, o = Error(x(419)), r = Jo(o, r, void 0), ii(e, t, l, r);
  }
  if (a = (l & e.childLanes) !== 0, Re || a) {
    if (r = ae, r !== null) {
      switch (l & -l) {
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
      i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Et(e, i), tt(r, e, i, -1));
    }
    return ou(), r = Jo(Error(x(421))), ii(e, t, l, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Mm.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Ae = Ht(i.nextSibling), He = t, Z = !0, qe = null, e !== null && (je[$e++] = ht, je[$e++] = mt, je[$e++] = on, ht = e.id, mt = e.overflow, on = t), t = qa(t, r.children), t.flags |= 4096, t);
}
function Ts(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fl(e.return, t, n);
}
function qo(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function Kf(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (Se(e, t, r.children, n), r = Y.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ts(e, n, t);
      else if (e.tag === 19) Ts(e, n, t);
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
  if (b(Y, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && bi(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), qo(t, !1, i, n, o);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && bi(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      qo(t, !0, n, null, o);
      break;
    case "together":
      qo(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function wi(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function xt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), an |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (e = t.child, n = Ut(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Ut(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Sm(e, t, n) {
  switch (t.tag) {
    case 3:
      Zf(t), Un();
      break;
    case 5:
      Tf(t);
      break;
    case 1:
      Ie(t.type) && Fi(t);
      break;
    case 4:
      Va(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      b(zi, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (b(Y, Y.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Yf(e, t, n) : (b(Y, Y.current & 1), e = xt(e, t, n), e !== null ? e.sibling : null);
      b(Y, Y.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Kf(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), b(Y, Y.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Xf(e, t, n);
  }
  return xt(e, t, n);
}
var Jf, Vl, qf, ed;
Jf = function(e, t) {
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
Vl = function() {
};
qf = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, en(ut.current);
    var o = null;
    switch (n) {
      case "input":
        i = pl(e, i), r = pl(e, r), o = [];
        break;
      case "select":
        i = J({}, i, { value: void 0 }), r = J({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = vl(e, i), r = vl(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hi);
    }
    yl(n, r);
    var l;
    n = null;
    for (s in i) if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null) if (s === "style") {
      var a = i[s];
      for (l in a) a.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (xr.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (a = i != null ? i[s] : void 0, r.hasOwnProperty(s) && u !== a && (u != null || a != null)) if (s === "style") if (a) {
        for (l in a) !a.hasOwnProperty(l) || u && u.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in u) u.hasOwnProperty(l) && a[l] !== u[l] && (n || (n = {}), n[l] = u[l]);
      } else n || (o || (o = []), o.push(
        s,
        n
      )), n = u;
      else s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, a = a ? a.__html : void 0, u != null && a !== u && (o = o || []).push(s, u)) : s === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(s, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (xr.hasOwnProperty(s) ? (u != null && s === "onScroll" && G("scroll", e), o || a === u || (o = [])) : (o = o || []).push(s, u));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
ed = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function rr(e, t) {
  if (!Z) switch (e.tailMode) {
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
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function wm(e, t, n) {
  var r = t.pendingProps;
  switch (Ba(t), t.tag) {
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
      return he(t), null;
    case 1:
      return Ie(t.type) && Di(), he(t), null;
    case 3:
      return r = t.stateNode, jn(), W(Le), W(ve), Xa(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ni(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, qe !== null && (ql(qe), qe = null))), Vl(e, t), he(t), null;
    case 5:
      Wa(t);
      var i = en(Or.current);
      if (n = t.type, e !== null && t.stateNode != null) qf(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return he(t), null;
        }
        if (e = en(ut.current), ni(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[lt] = t, r[Lr] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              G("cancel", r), G("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ur.length; i++) G(ur[i], r);
              break;
            case "source":
              G("error", r);
              break;
            case "img":
            case "image":
            case "link":
              G(
                "error",
                r
              ), G("load", r);
              break;
            case "details":
              G("toggle", r);
              break;
            case "input":
              Ou(r, o), G("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, G("invalid", r);
              break;
            case "textarea":
              Au(r, o), G("invalid", r);
          }
          yl(n, o), i = null;
          for (var l in o) if (o.hasOwnProperty(l)) {
            var a = o[l];
            l === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && ti(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && ti(
              r.textContent,
              a,
              e
            ), i = ["children", "" + a]) : xr.hasOwnProperty(l) && a != null && l === "onScroll" && G("scroll", r);
          }
          switch (n) {
            case "input":
              Xr(r), Mu(r, o, !0);
              break;
            case "textarea":
              Xr(r), Hu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Hi);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = _c(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[lt] = t, e[Lr] = r, Jf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = El(n, r), n) {
              case "dialog":
                G("cancel", e), G("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < ur.length; i++) G(ur[i], e);
                i = r;
                break;
              case "source":
                G("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                G(
                  "error",
                  e
                ), G("load", e), i = r;
                break;
              case "details":
                G("toggle", e), i = r;
                break;
              case "input":
                Ou(e, r), i = pl(e, r), G("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = J({}, r, { value: void 0 }), G("invalid", e);
                break;
              case "textarea":
                Au(e, r), i = vl(e, r), G("invalid", e);
                break;
              default:
                i = r;
            }
            yl(n, i), a = i;
            for (o in a) if (a.hasOwnProperty(o)) {
              var u = a[o];
              o === "style" ? Lc(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Pc(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Sr(e, u) : typeof u == "number" && Sr(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (xr.hasOwnProperty(o) ? u != null && o === "onScroll" && G("scroll", e) : u != null && Ta(e, o, u, l));
            }
            switch (n) {
              case "input":
                Xr(e), Mu(e, r, !1);
                break;
              case "textarea":
                Xr(e), Hu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + zt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? In(e, !!r.multiple, o, !1) : r.defaultValue != null && In(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Hi);
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
      return he(t), null;
    case 6:
      if (e && t.stateNode != null) ed(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (n = en(Or.current), en(ut.current), ni(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[lt] = t, (o = r.nodeValue !== n) && (e = He, e !== null)) switch (e.tag) {
            case 3:
              ti(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ti(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[lt] = t, t.stateNode = r;
      }
      return he(t), null;
    case 13:
      if (W(Y), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Z && Ae !== null && t.mode & 1 && !(t.flags & 128)) yf(), Un(), t.flags |= 98560, o = !1;
        else if (o = ni(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(x(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(x(317));
            o[lt] = t;
          } else Un(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          he(t), o = !1;
        } else qe !== null && (ql(qe), qe = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Y.current & 1 ? oe === 0 && (oe = 3) : ou())), t.updateQueue !== null && (t.flags |= 4), he(t), null);
    case 4:
      return jn(), Vl(e, t), e === null && Pr(t.stateNode.containerInfo), he(t), null;
    case 10:
      return $a(t.type._context), he(t), null;
    case 17:
      return Ie(t.type) && Di(), he(t), null;
    case 19:
      if (W(Y), o = t.memoizedState, o === null) return he(t), null;
      if (r = (t.flags & 128) !== 0, l = o.rendering, l === null) if (r) rr(o, !1);
      else {
        if (oe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = bi(e), l !== null) {
            for (t.flags |= 128, rr(o, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return b(Y, Y.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && te() > bn && (t.flags |= 128, r = !0, rr(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = bi(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), rr(o, !0), o.tail === null && o.tailMode === "hidden" && !l.alternate && !Z) return he(t), null;
        } else 2 * te() - o.renderingStartTime > bn && n !== 1073741824 && (t.flags |= 128, r = !0, rr(o, !1), t.lanes = 4194304);
        o.isBackwards ? (l.sibling = t.child, t.child = l) : (n = o.last, n !== null ? n.sibling = l : t.child = l, o.last = l);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = te(), t.sibling = null, n = Y.current, b(Y, r ? n & 1 | 2 : n & 1), t) : (he(t), null);
    case 22:
    case 23:
      return iu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Me & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : he(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function Tm(e, t) {
  switch (Ba(t), t.tag) {
    case 1:
      return Ie(t.type) && Di(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return jn(), W(Le), W(ve), Xa(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Wa(t), null;
    case 13:
      if (W(Y), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(x(340));
        Un();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return W(Y), null;
    case 4:
      return jn(), null;
    case 10:
      return $a(t.type._context), null;
    case 22:
    case 23:
      return iu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var oi = !1, me = !1, Cm = typeof WeakSet == "function" ? WeakSet : Set, C = null;
function Rn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    q(e, t, r);
  }
  else n.current = null;
}
function Wl(e, t, n) {
  try {
    n();
  } catch (r) {
    q(e, t, r);
  }
}
var Cs = !1;
function Nm(e, t) {
  if (Rl = Oi, e = of(), Da(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var i = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var l = 0, a = -1, u = -1, s = 0, c = 0, h = e, d = null;
        t: for (; ; ) {
          for (var v; h !== n || i !== 0 && h.nodeType !== 3 || (a = l + i), h !== o || r !== 0 && h.nodeType !== 3 || (u = l + r), h.nodeType === 3 && (l += h.nodeValue.length), (v = h.firstChild) !== null; )
            d = h, h = v;
          for (; ; ) {
            if (h === e) break t;
            if (d === n && ++s === i && (a = l), d === o && ++c === r && (u = l), (v = h.nextSibling) !== null) break;
            h = d, d = h.parentNode;
          }
          h = v;
        }
        n = a === -1 || u === -1 ? null : { start: a, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ll = { focusedElem: e, selectionRange: n }, Oi = !1, C = t; C !== null; ) if (t = C, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, C = e;
  else for (; C !== null; ) {
    t = C;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var E = y.memoizedProps, R = y.memoizedState, p = t.stateNode, f = p.getSnapshotBeforeUpdate(t.elementType === t.type ? E : Ke(t.type, E), R);
            p.__reactInternalSnapshotBeforeUpdate = f;
          }
          break;
        case 3:
          var m = t.stateNode.containerInfo;
          m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(x(163));
      }
    } catch (g) {
      q(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, C = e;
      break;
    }
    C = t.return;
  }
  return y = Cs, Cs = !1, y;
}
function gr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && Wl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ao(e, t) {
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
function Xl(e) {
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
function td(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, td(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[lt], delete t[Lr], delete t[Ml], delete t[am], delete t[um])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function nd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ns(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || nd(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ql(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Hi));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ql(e, t, n), e = e.sibling; e !== null; ) Ql(e, t, n), e = e.sibling;
}
function Zl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Zl(e, t, n), e = e.sibling; e !== null; ) Zl(e, t, n), e = e.sibling;
}
var se = null, Je = !1;
function Ct(e, t, n) {
  for (n = n.child; n !== null; ) rd(e, t, n), n = n.sibling;
}
function rd(e, t, n) {
  if (at && typeof at.onCommitFiberUnmount == "function") try {
    at.onCommitFiberUnmount(qi, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      me || Rn(n, t);
    case 6:
      var r = se, i = Je;
      se = null, Ct(e, t, n), se = r, Je = i, se !== null && (Je ? (e = se, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : se.removeChild(n.stateNode));
      break;
    case 18:
      se !== null && (Je ? (e = se, n = n.stateNode, e.nodeType === 8 ? Wo(e.parentNode, n) : e.nodeType === 1 && Wo(e, n), Nr(e)) : Wo(se, n.stateNode));
      break;
    case 4:
      r = se, i = Je, se = n.stateNode.containerInfo, Je = !0, Ct(e, t, n), se = r, Je = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!me && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, l = o.destroy;
          o = o.tag, l !== void 0 && (o & 2 || o & 4) && Wl(n, t, l), i = i.next;
        } while (i !== r);
      }
      Ct(e, t, n);
      break;
    case 1:
      if (!me && (Rn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        q(n, t, a);
      }
      Ct(e, t, n);
      break;
    case 21:
      Ct(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (me = (r = me) || n.memoizedState !== null, Ct(e, t, n), me = r) : Ct(e, t, n);
      break;
    default:
      Ct(e, t, n);
  }
}
function ks(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Cm()), t.forEach(function(r) {
      var i = Am.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function Ye(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var o = e, l = t, a = l;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            se = a.stateNode, Je = !1;
            break e;
          case 3:
            se = a.stateNode.containerInfo, Je = !0;
            break e;
          case 4:
            se = a.stateNode.containerInfo, Je = !0;
            break e;
        }
        a = a.return;
      }
      if (se === null) throw Error(x(160));
      rd(o, l, i), se = null, Je = !1;
      var u = i.alternate;
      u !== null && (u.return = null), i.return = null;
    } catch (s) {
      q(i, t, s);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) id(t, e), t = t.sibling;
}
function id(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ye(t, e), it(e), r & 4) {
        try {
          gr(3, e, e.return), ao(3, e);
        } catch (E) {
          q(e, e.return, E);
        }
        try {
          gr(5, e, e.return);
        } catch (E) {
          q(e, e.return, E);
        }
      }
      break;
    case 1:
      Ye(t, e), it(e), r & 512 && n !== null && Rn(n, n.return);
      break;
    case 5:
      if (Ye(t, e), it(e), r & 512 && n !== null && Rn(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          Sr(i, "");
        } catch (E) {
          q(e, e.return, E);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, l = n !== null ? n.memoizedProps : o, a = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          a === "input" && o.type === "radio" && o.name != null && Nc(i, o), El(a, l);
          var s = El(a, o);
          for (l = 0; l < u.length; l += 2) {
            var c = u[l], h = u[l + 1];
            c === "style" ? Lc(i, h) : c === "dangerouslySetInnerHTML" ? Pc(i, h) : c === "children" ? Sr(i, h) : Ta(i, c, h, s);
          }
          switch (a) {
            case "input":
              hl(i, o);
              break;
            case "textarea":
              kc(i, o);
              break;
            case "select":
              var d = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!o.multiple;
              var v = o.value;
              v != null ? In(i, !!o.multiple, v, !1) : d !== !!o.multiple && (o.defaultValue != null ? In(
                i,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : In(i, !!o.multiple, o.multiple ? [] : "", !1));
          }
          i[Lr] = o;
        } catch (E) {
          q(e, e.return, E);
        }
      }
      break;
    case 6:
      if (Ye(t, e), it(e), r & 4) {
        if (e.stateNode === null) throw Error(x(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (E) {
          q(e, e.return, E);
        }
      }
      break;
    case 3:
      if (Ye(t, e), it(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Nr(t.containerInfo);
      } catch (E) {
        q(e, e.return, E);
      }
      break;
    case 4:
      Ye(t, e), it(e);
      break;
    case 13:
      Ye(t, e), it(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (nu = te())), r & 4 && ks(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (me = (s = me) || c, Ye(t, e), me = s) : Ye(t, e), it(e), r & 8192) {
        if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !c && e.mode & 1) for (C = e, c = e.child; c !== null; ) {
          for (h = C = c; C !== null; ) {
            switch (d = C, v = d.child, d.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                gr(4, d, d.return);
                break;
              case 1:
                Rn(d, d.return);
                var y = d.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = d, n = d.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (E) {
                    q(r, n, E);
                  }
                }
                break;
              case 5:
                Rn(d, d.return);
                break;
              case 22:
                if (d.memoizedState !== null) {
                  Ps(h);
                  continue;
                }
            }
            v !== null ? (v.return = d, C = v) : Ps(h);
          }
          c = c.sibling;
        }
        e: for (c = null, h = e; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                i = h.stateNode, s ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = h.stateNode, u = h.memoizedProps.style, l = u != null && u.hasOwnProperty("display") ? u.display : null, a.style.display = Rc("display", l));
              } catch (E) {
                q(e, e.return, E);
              }
            }
          } else if (h.tag === 6) {
            if (c === null) try {
              h.stateNode.nodeValue = s ? "" : h.memoizedProps;
            } catch (E) {
              q(e, e.return, E);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            c === h && (c = null), h = h.return;
          }
          c === h && (c = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      Ye(t, e), it(e), r & 4 && ks(e);
      break;
    case 21:
      break;
    default:
      Ye(
        t,
        e
      ), it(e);
  }
}
function it(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (nd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Sr(i, ""), r.flags &= -33);
          var o = Ns(e);
          Zl(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, a = Ns(e);
          Ql(e, a, l);
          break;
        default:
          throw Error(x(161));
      }
    } catch (u) {
      q(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function km(e, t, n) {
  C = e, od(e);
}
function od(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var i = C, o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || oi;
      if (!l) {
        var a = i.alternate, u = a !== null && a.memoizedState !== null || me;
        a = oi;
        var s = me;
        if (oi = l, (me = u) && !s) for (C = i; C !== null; ) l = C, u = l.child, l.tag === 22 && l.memoizedState !== null ? Rs(i) : u !== null ? (u.return = l, C = u) : Rs(i);
        for (; o !== null; ) C = o, od(o), o = o.sibling;
        C = i, oi = a, me = s;
      }
      _s(e);
    } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, C = o) : _s(e);
  }
}
function _s(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            me || ao(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !me) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : Ke(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && fs(t, o, r);
            break;
          case 3:
            var l = t.updateQueue;
            if (l !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              fs(t, l, n);
            }
            break;
          case 5:
            var a = t.stateNode;
            if (n === null && t.flags & 4) {
              n = a;
              var u = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u.autoFocus && n.focus();
                  break;
                case "img":
                  u.src && (n.src = u.src);
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
              var s = t.alternate;
              if (s !== null) {
                var c = s.memoizedState;
                if (c !== null) {
                  var h = c.dehydrated;
                  h !== null && Nr(h);
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
            throw Error(x(163));
        }
        me || t.flags & 512 && Xl(t);
      } catch (d) {
        q(t, t.return, d);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, C = n;
      break;
    }
    C = t.return;
  }
}
function Ps(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, C = n;
      break;
    }
    C = t.return;
  }
}
function Rs(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ao(4, t);
          } catch (u) {
            q(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              q(t, i, u);
            }
          }
          var o = t.return;
          try {
            Xl(t);
          } catch (u) {
            q(t, o, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Xl(t);
          } catch (u) {
            q(t, l, u);
          }
      }
    } catch (u) {
      q(t, t.return, u);
    }
    if (t === e) {
      C = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, C = a;
      break;
    }
    C = t.return;
  }
}
var _m = Math.ceil, Wi = St.ReactCurrentDispatcher, eu = St.ReactCurrentOwner, Ge = St.ReactCurrentBatchConfig, U = 0, ae = null, ne = null, ce = 0, Me = 0, Ln = bt(0), oe = 0, Dr = null, an = 0, uo = 0, tu = 0, yr = null, Pe = null, nu = 0, bn = 1 / 0, dt = null, Xi = !1, Yl = null, Ft = null, li = !1, It = null, Qi = 0, Er = 0, Kl = null, Ti = -1, Ci = 0;
function Ne() {
  return U & 6 ? te() : Ti !== -1 ? Ti : Ti = te();
}
function Bt(e) {
  return e.mode & 1 ? U & 2 && ce !== 0 ? ce & -ce : cm.transition !== null ? (Ci === 0 && (Ci = $c()), Ci) : (e = j, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Zc(e.type)), e) : 1;
}
function tt(e, t, n, r) {
  if (50 < Er) throw Er = 0, Kl = null, Error(x(185));
  Ur(e, n, r), (!(U & 2) || e !== ae) && (e === ae && (!(U & 2) && (uo |= n), oe === 4 && Rt(e, ce)), Oe(e, r), n === 1 && U === 0 && !(t.mode & 1) && (bn = te() + 500, io && Gt()));
}
function Oe(e, t) {
  var n = e.callbackNode;
  ch(e, t);
  var r = Ii(e, e === ae ? ce : 0);
  if (r === 0) n !== null && Bu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Bu(n), t === 1) e.tag === 0 ? sm(Ls.bind(null, e)) : mf(Ls.bind(null, e)), om(function() {
      !(U & 6) && Gt();
    }), n = null;
    else {
      switch (bc(r)) {
        case 1:
          n = Pa;
          break;
        case 4:
          n = zc;
          break;
        case 16:
          n = Li;
          break;
        case 536870912:
          n = jc;
          break;
        default:
          n = Li;
      }
      n = pd(n, ld.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function ld(e, t) {
  if (Ti = -1, Ci = 0, U & 6) throw Error(x(327));
  var n = e.callbackNode;
  if (Dn() && e.callbackNode !== n) return null;
  var r = Ii(e, e === ae ? ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Zi(e, r);
  else {
    t = r;
    var i = U;
    U |= 2;
    var o = ud();
    (ae !== e || ce !== t) && (dt = null, bn = te() + 500, tn(e, t));
    do
      try {
        Lm();
        break;
      } catch (a) {
        ad(e, a);
      }
    while (!0);
    ja(), Wi.current = o, U = i, ne !== null ? t = 0 : (ae = null, ce = 0, t = oe);
  }
  if (t !== 0) {
    if (t === 2 && (i = Cl(e), i !== 0 && (r = i, t = Jl(e, i))), t === 1) throw n = Dr, tn(e, 0), Rt(e, r), Oe(e, te()), n;
    if (t === 6) Rt(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !Pm(i) && (t = Zi(e, r), t === 2 && (o = Cl(e), o !== 0 && (r = o, t = Jl(e, o))), t === 1)) throw n = Dr, tn(e, 0), Rt(e, r), Oe(e, te()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          Zt(e, Pe, dt);
          break;
        case 3:
          if (Rt(e, r), (r & 130023424) === r && (t = nu + 500 - te(), 10 < t)) {
            if (Ii(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              Ne(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = Ol(Zt.bind(null, e, Pe, dt), t);
            break;
          }
          Zt(e, Pe, dt);
          break;
        case 4:
          if (Rt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - et(r);
            o = 1 << l, l = t[l], l > i && (i = l), r &= ~o;
          }
          if (r = i, r = te() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * _m(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ol(Zt.bind(null, e, Pe, dt), r);
            break;
          }
          Zt(e, Pe, dt);
          break;
        case 5:
          Zt(e, Pe, dt);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return Oe(e, te()), e.callbackNode === n ? ld.bind(null, e) : null;
}
function Jl(e, t) {
  var n = yr;
  return e.current.memoizedState.isDehydrated && (tn(e, t).flags |= 256), e = Zi(e, t), e !== 2 && (t = Pe, Pe = n, t !== null && ql(t)), e;
}
function ql(e) {
  Pe === null ? Pe = e : Pe.push.apply(Pe, e);
}
function Pm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], o = i.getSnapshot;
        i = i.value;
        try {
          if (!nt(o(), i)) return !1;
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
function Rt(e, t) {
  for (t &= ~tu, t &= ~uo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - et(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ls(e) {
  if (U & 6) throw Error(x(327));
  Dn();
  var t = Ii(e, 0);
  if (!(t & 1)) return Oe(e, te()), null;
  var n = Zi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Cl(e);
    r !== 0 && (t = r, n = Jl(e, r));
  }
  if (n === 1) throw n = Dr, tn(e, 0), Rt(e, t), Oe(e, te()), n;
  if (n === 6) throw Error(x(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Zt(e, Pe, dt), Oe(e, te()), null;
}
function ru(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    U = n, U === 0 && (bn = te() + 500, io && Gt());
  }
}
function un(e) {
  It !== null && It.tag === 0 && !(U & 6) && Dn();
  var t = U;
  U |= 1;
  var n = Ge.transition, r = j;
  try {
    if (Ge.transition = null, j = 1, e) return e();
  } finally {
    j = r, Ge.transition = n, U = t, !(U & 6) && Gt();
  }
}
function iu() {
  Me = Ln.current, W(Ln);
}
function tn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, im(n)), ne !== null) for (n = ne.return; n !== null; ) {
    var r = n;
    switch (Ba(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Di();
        break;
      case 3:
        jn(), W(Le), W(ve), Xa();
        break;
      case 5:
        Wa(r);
        break;
      case 4:
        jn();
        break;
      case 13:
        W(Y);
        break;
      case 19:
        W(Y);
        break;
      case 10:
        $a(r.type._context);
        break;
      case 22:
      case 23:
        iu();
    }
    n = n.return;
  }
  if (ae = e, ne = e = Ut(e.current, null), ce = Me = t, oe = 0, Dr = null, tu = uo = an = 0, Pe = yr = null, qt !== null) {
    for (t = 0; t < qt.length; t++) if (n = qt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, o = n.pending;
      if (o !== null) {
        var l = o.next;
        o.next = i, r.next = l;
      }
      n.pending = r;
    }
    qt = null;
  }
  return e;
}
function ad(e, t) {
  do {
    var n = ne;
    try {
      if (ja(), xi.current = Vi, Gi) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        Gi = !1;
      }
      if (ln = 0, le = ie = K = null, vr = !1, Mr = 0, eu.current = null, n === null || n.return === null) {
        oe = 1, Dr = t, ne = null;
        break;
      }
      e: {
        var o = e, l = n.return, a = n, u = t;
        if (t = ce, a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var s = u, c = a, h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var v = gs(l);
          if (v !== null) {
            v.flags &= -257, ys(v, l, a, o, t), v.mode & 1 && vs(o, s, t), t = v, u = s;
            var y = t.updateQueue;
            if (y === null) {
              var E = /* @__PURE__ */ new Set();
              E.add(u), t.updateQueue = E;
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              vs(o, s, t), ou();
              break e;
            }
            u = Error(x(426));
          }
        } else if (Z && a.mode & 1) {
          var R = gs(l);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256), ys(R, l, a, o, t), Ua($n(u, a));
            break e;
          }
        }
        o = u = $n(u, a), oe !== 4 && (oe = 2), yr === null ? yr = [o] : yr.push(o), o = l;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var p = Gf(o, u, t);
              cs(o, p);
              break e;
            case 1:
              a = u;
              var f = o.type, m = o.stateNode;
              if (!(o.flags & 128) && (typeof f.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Ft === null || !Ft.has(m)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var g = Vf(o, a, t);
                cs(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      cd(n);
    } catch (S) {
      t = S, ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ud() {
  var e = Wi.current;
  return Wi.current = Vi, e === null ? Vi : e;
}
function ou() {
  (oe === 0 || oe === 3 || oe === 2) && (oe = 4), ae === null || !(an & 268435455) && !(uo & 268435455) || Rt(ae, ce);
}
function Zi(e, t) {
  var n = U;
  U |= 2;
  var r = ud();
  (ae !== e || ce !== t) && (dt = null, tn(e, t));
  do
    try {
      Rm();
      break;
    } catch (i) {
      ad(e, i);
    }
  while (!0);
  if (ja(), U = n, Wi.current = r, ne !== null) throw Error(x(261));
  return ae = null, ce = 0, oe;
}
function Rm() {
  for (; ne !== null; ) sd(ne);
}
function Lm() {
  for (; ne !== null && !th(); ) sd(ne);
}
function sd(e) {
  var t = dd(e.alternate, e, Me);
  e.memoizedProps = e.pendingProps, t === null ? cd(e) : ne = t, eu.current = null;
}
function cd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Tm(n, t), n !== null) {
        n.flags &= 32767, ne = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        oe = 6, ne = null;
        return;
      }
    } else if (n = wm(n, t, Me), n !== null) {
      ne = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}
function Zt(e, t, n) {
  var r = j, i = Ge.transition;
  try {
    Ge.transition = null, j = 1, Im(e, t, n, r);
  } finally {
    Ge.transition = i, j = r;
  }
  return null;
}
function Im(e, t, n, r) {
  do
    Dn();
  while (It !== null);
  if (U & 6) throw Error(x(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(x(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (fh(e, o), e === ae && (ne = ae = null, ce = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || li || (li = !0, pd(Li, function() {
    return Dn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ge.transition, Ge.transition = null;
    var l = j;
    j = 1;
    var a = U;
    U |= 4, eu.current = null, Nm(e, n), id(n, e), Kh(Ll), Oi = !!Rl, Ll = Rl = null, e.current = n, km(n), nh(), U = a, j = l, Ge.transition = o;
  } else e.current = n;
  if (li && (li = !1, It = e, Qi = i), o = e.pendingLanes, o === 0 && (Ft = null), oh(n.stateNode), Oe(e, te()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Xi) throw Xi = !1, e = Yl, Yl = null, e;
  return Qi & 1 && e.tag !== 0 && Dn(), o = e.pendingLanes, o & 1 ? e === Kl ? Er++ : (Er = 0, Kl = e) : Er = 0, Gt(), null;
}
function Dn() {
  if (It !== null) {
    var e = bc(Qi), t = Ge.transition, n = j;
    try {
      if (Ge.transition = null, j = 16 > e ? 16 : e, It === null) var r = !1;
      else {
        if (e = It, It = null, Qi = 0, U & 6) throw Error(x(331));
        var i = U;
        for (U |= 4, C = e.current; C !== null; ) {
          var o = C, l = o.child;
          if (C.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (C = s; C !== null; ) {
                  var c = C;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      gr(8, c, o);
                  }
                  var h = c.child;
                  if (h !== null) h.return = c, C = h;
                  else for (; C !== null; ) {
                    c = C;
                    var d = c.sibling, v = c.return;
                    if (td(c), c === s) {
                      C = null;
                      break;
                    }
                    if (d !== null) {
                      d.return = v, C = d;
                      break;
                    }
                    C = v;
                  }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var E = y.child;
                if (E !== null) {
                  y.child = null;
                  do {
                    var R = E.sibling;
                    E.sibling = null, E = R;
                  } while (E !== null);
                }
              }
              C = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) l.return = o, C = l;
          else e: for (; C !== null; ) {
            if (o = C, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                gr(9, o, o.return);
            }
            var p = o.sibling;
            if (p !== null) {
              p.return = o.return, C = p;
              break e;
            }
            C = o.return;
          }
        }
        var f = e.current;
        for (C = f; C !== null; ) {
          l = C;
          var m = l.child;
          if (l.subtreeFlags & 2064 && m !== null) m.return = l, C = m;
          else e: for (l = f; C !== null; ) {
            if (a = C, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  ao(9, a);
              }
            } catch (S) {
              q(a, a.return, S);
            }
            if (a === l) {
              C = null;
              break e;
            }
            var g = a.sibling;
            if (g !== null) {
              g.return = a.return, C = g;
              break e;
            }
            C = a.return;
          }
        }
        if (U = i, Gt(), at && typeof at.onPostCommitFiberRoot == "function") try {
          at.onPostCommitFiberRoot(qi, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      j = n, Ge.transition = t;
    }
  }
  return !1;
}
function Is(e, t, n) {
  t = $n(n, t), t = Gf(e, t, 1), e = Dt(e, t, 1), t = Ne(), e !== null && (Ur(e, 1, t), Oe(e, t));
}
function q(e, t, n) {
  if (e.tag === 3) Is(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Is(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ft === null || !Ft.has(r))) {
        e = $n(n, e), e = Vf(t, e, 1), t = Dt(t, e, 1), e = Ne(), t !== null && (Ur(t, 1, e), Oe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Om(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ne(), e.pingedLanes |= e.suspendedLanes & n, ae === e && (ce & n) === n && (oe === 4 || oe === 3 && (ce & 130023424) === ce && 500 > te() - nu ? tn(e, 0) : tu |= n), Oe(e, t);
}
function fd(e, t) {
  t === 0 && (e.mode & 1 ? (t = Yr, Yr <<= 1, !(Yr & 130023424) && (Yr = 4194304)) : t = 1);
  var n = Ne();
  e = Et(e, t), e !== null && (Ur(e, t, n), Oe(e, n));
}
function Mm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), fd(e, n);
}
function Am(e, t) {
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
      throw Error(x(314));
  }
  r !== null && r.delete(t), fd(e, n);
}
var dd;
dd = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Le.current) Re = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Re = !1, Sm(e, t, n);
    Re = !!(e.flags & 131072);
  }
  else Re = !1, Z && t.flags & 1048576 && vf(t, Ui, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      wi(e, t), e = t.pendingProps;
      var i = Bn(t, ve.current);
      Hn(t, n), i = Za(null, t, r, e, i, n);
      var o = Ya();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ie(r) ? (o = !0, Fi(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Ga(t), i.updater = lo, t.stateNode = i, i._reactInternals = t, Ul(t, r, e, n), t = $l(null, t, r, !0, o, n)) : (t.tag = 0, Z && o && Fa(t), Se(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (wi(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Dm(r), e = Ke(r, e), i) {
          case 0:
            t = jl(null, t, r, e, n);
            break e;
          case 1:
            t = Ss(null, t, r, e, n);
            break e;
          case 11:
            t = Es(null, t, r, e, n);
            break e;
          case 14:
            t = xs(null, t, r, Ke(r.type, e), n);
            break e;
        }
        throw Error(x(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ke(r, i), jl(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ke(r, i), Ss(e, t, r, i, n);
    case 3:
      e: {
        if (Zf(t), e === null) throw Error(x(387));
        r = t.pendingProps, o = t.memoizedState, i = o.element, wf(e, t), $i(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          i = $n(Error(x(423)), t), t = ws(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = $n(Error(x(424)), t), t = ws(e, t, r, n, i);
          break e;
        } else for (Ae = Ht(t.stateNode.containerInfo.firstChild), He = t, Z = !0, qe = null, n = xf(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Un(), r === i) {
            t = xt(e, t, n);
            break e;
          }
          Se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Tf(t), e === null && Dl(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, l = i.children, Il(r, i) ? l = null : o !== null && Il(r, o) && (t.flags |= 32), Qf(e, t), Se(e, t, l, n), t.child;
    case 6:
      return e === null && Dl(t), null;
    case 13:
      return Yf(e, t, n);
    case 4:
      return Va(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = zn(t, null, r, n) : Se(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ke(r, i), Es(e, t, r, i, n);
    case 7:
      return Se(e, t, t.pendingProps, n), t.child;
    case 8:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, l = i.value, b(zi, r._currentValue), r._currentValue = l, o !== null) if (nt(o.value, l)) {
          if (o.children === i.children && !Le.current) {
            t = xt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var a = o.dependencies;
          if (a !== null) {
            l = o.child;
            for (var u = a.firstContext; u !== null; ) {
              if (u.context === r) {
                if (o.tag === 1) {
                  u = vt(-1, n & -n), u.tag = 2;
                  var s = o.updateQueue;
                  if (s !== null) {
                    s = s.shared;
                    var c = s.pending;
                    c === null ? u.next = u : (u.next = c.next, c.next = u), s.pending = u;
                  }
                }
                o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Fl(
                  o.return,
                  n,
                  t
                ), a.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (l = o.return, l === null) throw Error(x(341));
            l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), Fl(l, n, t), l = o.sibling;
          } else l = o.child;
          if (l !== null) l.return = o;
          else for (l = o; l !== null; ) {
            if (l === t) {
              l = null;
              break;
            }
            if (o = l.sibling, o !== null) {
              o.return = l.return, l = o;
              break;
            }
            l = l.return;
          }
          o = l;
        }
        Se(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, Hn(t, n), i = Ve(i), r = r(i), t.flags |= 1, Se(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = Ke(r, t.pendingProps), i = Ke(r.type, i), xs(e, t, r, i, n);
    case 15:
      return Wf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ke(r, i), wi(e, t), t.tag = 1, Ie(r) ? (e = !0, Fi(t)) : e = !1, Hn(t, n), bf(t, r, i), Ul(t, r, i, n), $l(null, t, r, !0, e, n);
    case 19:
      return Kf(e, t, n);
    case 22:
      return Xf(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function pd(e, t) {
  return Uc(e, t);
}
function Hm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function be(e, t, n, r) {
  return new Hm(e, t, n, r);
}
function lu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Dm(e) {
  if (typeof e == "function") return lu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Na) return 11;
    if (e === ka) return 14;
  }
  return 2;
}
function Ut(e, t) {
  var n = e.alternate;
  return n === null ? (n = be(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ni(e, t, n, r, i, o) {
  var l = 2;
  if (r = e, typeof e == "function") lu(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case xn:
      return nn(n.children, i, o, t);
    case Ca:
      l = 8, i |= 8;
      break;
    case sl:
      return e = be(12, n, t, i | 2), e.elementType = sl, e.lanes = o, e;
    case cl:
      return e = be(13, n, t, i), e.elementType = cl, e.lanes = o, e;
    case fl:
      return e = be(19, n, t, i), e.elementType = fl, e.lanes = o, e;
    case wc:
      return so(n, i, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case xc:
          l = 10;
          break e;
        case Sc:
          l = 9;
          break e;
        case Na:
          l = 11;
          break e;
        case ka:
          l = 14;
          break e;
        case Nt:
          l = 16, r = null;
          break e;
      }
      throw Error(x(130, e == null ? e : typeof e, ""));
  }
  return t = be(l, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
}
function nn(e, t, n, r) {
  return e = be(7, e, r, t), e.lanes = n, e;
}
function so(e, t, n, r) {
  return e = be(22, e, r, t), e.elementType = wc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function el(e, t, n) {
  return e = be(6, e, null, t), e.lanes = n, e;
}
function tl(e, t, n) {
  return t = be(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Fm(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ho(0), this.expirationTimes = Ho(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ho(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function au(e, t, n, r, i, o, l, a, u) {
  return e = new Fm(e, t, n, a, u), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = be(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ga(o), e;
}
function Bm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: En, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function hd(e) {
  if (!e) return jt;
  e = e._reactInternals;
  e: {
    if (fn(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ie(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ie(n)) return hf(e, n, t);
  }
  return t;
}
function md(e, t, n, r, i, o, l, a, u) {
  return e = au(n, r, !0, e, i, o, l, a, u), e.context = hd(null), n = e.current, r = Ne(), i = Bt(n), o = vt(r, i), o.callback = t ?? null, Dt(n, o, i), e.current.lanes = i, Ur(e, i, r), Oe(e, r), e;
}
function co(e, t, n, r) {
  var i = t.current, o = Ne(), l = Bt(i);
  return n = hd(n), t.context === null ? t.context = n : t.pendingContext = n, t = vt(o, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Dt(i, t, l), e !== null && (tt(e, i, l, o), Ei(e, i, l)), l;
}
function Yi(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Os(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function uu(e, t) {
  Os(e, t), (e = e.alternate) && Os(e, t);
}
function Um() {
  return null;
}
var vd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function su(e) {
  this._internalRoot = e;
}
fo.prototype.render = su.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  co(e, t, null, null);
};
fo.prototype.unmount = su.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    un(function() {
      co(null, e, null, null);
    }), t[yt] = null;
  }
};
function fo(e) {
  this._internalRoot = e;
}
fo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Wc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Pt.length && t !== 0 && t < Pt[n].priority; n++) ;
    Pt.splice(n, 0, e), n === 0 && Qc(e);
  }
};
function cu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function po(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ms() {
}
function zm(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var s = Yi(l);
        o.call(s);
      };
    }
    var l = md(t, r, e, 0, null, !1, !1, "", Ms);
    return e._reactRootContainer = l, e[yt] = l.current, Pr(e.nodeType === 8 ? e.parentNode : e), un(), l;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var s = Yi(u);
      a.call(s);
    };
  }
  var u = au(e, 0, !1, null, null, !1, !1, "", Ms);
  return e._reactRootContainer = u, e[yt] = u.current, Pr(e.nodeType === 8 ? e.parentNode : e), un(function() {
    co(t, u, n, r);
  }), u;
}
function ho(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var a = i;
      i = function() {
        var u = Yi(l);
        a.call(u);
      };
    }
    co(t, l, e, i);
  } else l = zm(n, t, e, i, r);
  return Yi(l);
}
Gc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ar(t.pendingLanes);
        n !== 0 && (Ra(t, n | 1), Oe(t, te()), !(U & 6) && (bn = te() + 500, Gt()));
      }
      break;
    case 13:
      un(function() {
        var r = Et(e, 1);
        if (r !== null) {
          var i = Ne();
          tt(r, e, 1, i);
        }
      }), uu(e, 1);
  }
};
La = function(e) {
  if (e.tag === 13) {
    var t = Et(e, 134217728);
    if (t !== null) {
      var n = Ne();
      tt(t, e, 134217728, n);
    }
    uu(e, 134217728);
  }
};
Vc = function(e) {
  if (e.tag === 13) {
    var t = Bt(e), n = Et(e, t);
    if (n !== null) {
      var r = Ne();
      tt(n, e, t, r);
    }
    uu(e, t);
  }
};
Wc = function() {
  return j;
};
Xc = function(e, t) {
  var n = j;
  try {
    return j = e, t();
  } finally {
    j = n;
  }
};
Sl = function(e, t, n) {
  switch (t) {
    case "input":
      if (hl(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ro(r);
            if (!i) throw Error(x(90));
            Cc(r), hl(r, i);
          }
        }
      }
      break;
    case "textarea":
      kc(e, n);
      break;
    case "select":
      t = n.value, t != null && In(e, !!n.multiple, t, !1);
  }
};
Mc = ru;
Ac = un;
var jm = { usingClientEntryPoint: !1, Events: [jr, Cn, ro, Ic, Oc, ru] }, ir = { findFiberByHostInstance: Jt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, $m = { bundleType: ir.bundleType, version: ir.version, rendererPackageName: ir.rendererPackageName, rendererConfig: ir.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: St.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Fc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ir.findFiberByHostInstance || Um, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ai.isDisabled && ai.supportsFiber) try {
    qi = ai.inject($m), at = ai;
  } catch {
  }
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jm;
Be.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!cu(t)) throw Error(x(200));
  return Bm(e, t, null, n);
};
Be.createRoot = function(e, t) {
  if (!cu(e)) throw Error(x(299));
  var n = !1, r = "", i = vd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = au(e, 1, !1, null, null, n, !1, r, i), e[yt] = t.current, Pr(e.nodeType === 8 ? e.parentNode : e), new su(t);
};
Be.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(x(188)) : (e = Object.keys(e).join(","), Error(x(268, e)));
  return e = Fc(t), e = e === null ? null : e.stateNode, e;
};
Be.flushSync = function(e) {
  return un(e);
};
Be.hydrate = function(e, t, n) {
  if (!po(t)) throw Error(x(200));
  return ho(null, e, t, !0, n);
};
Be.hydrateRoot = function(e, t, n) {
  if (!cu(e)) throw Error(x(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", l = vd;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = md(t, null, e, 1, n ?? null, i, !1, o, l), e[yt] = t.current, Pr(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new fo(t);
};
Be.render = function(e, t, n) {
  if (!po(t)) throw Error(x(200));
  return ho(null, e, t, !1, n);
};
Be.unmountComponentAtNode = function(e) {
  if (!po(e)) throw Error(x(40));
  return e._reactRootContainer ? (un(function() {
    ho(null, null, e, !1, function() {
      e._reactRootContainer = null, e[yt] = null;
    });
  }), !0) : !1;
};
Be.unstable_batchedUpdates = ru;
Be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!po(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return ho(e, t, n, !1, r);
};
Be.version = "18.3.1-next-f1338f8080-20240426";
function gd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gd);
    } catch (e) {
      console.error(e);
    }
}
gd(), vc.exports = Be;
var yd = vc.exports;
const ui = /* @__PURE__ */ Fr(yd);
var Ed, As = yd;
Ed = As.createRoot, As.hydrateRoot;
var ea = function(e, t) {
  return ea = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, ea(e, t);
};
function Qe(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  ea(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var _ = function() {
  return _ = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, _.apply(this, arguments);
};
function Gn(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function Ce(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, o; r < i; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
function we(e, t) {
  var n = t && t.cache ? t.cache : Qm, r = t && t.serializer ? t.serializer : Xm, i = t && t.strategy ? t.strategy : Vm;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function bm(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Gm(e, t, n, r) {
  var i = bm(r) ? r : n(r), o = t.get(i);
  return typeof o > "u" && (o = e.call(this, r), t.set(i, o)), o;
}
function xd(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), o = t.get(i);
  return typeof o > "u" && (o = e.apply(this, r), t.set(i, o)), o;
}
function Sd(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function Vm(e, t) {
  var n = e.length === 1 ? Gm : xd;
  return Sd(e, this, n, t.cache.create(), t.serializer);
}
function Wm(e, t) {
  return Sd(e, this, xd, t.cache.create(), t.serializer);
}
var Xm = function() {
  return JSON.stringify(arguments);
};
function fu() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
fu.prototype.get = function(e) {
  return this.cache[e];
};
fu.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var Qm = {
  create: function() {
    return new fu();
  }
}, Te = {
  variadic: Wm
};
function wd(e, t, n) {
  if (n === void 0 && (n = Error), !e)
    throw new n(t);
}
we(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.NumberFormat).bind.apply(e, Ce([void 0], t, !1)))();
}, {
  strategy: Te.variadic
});
we(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.DateTimeFormat).bind.apply(e, Ce([void 0], t, !1)))();
}, {
  strategy: Te.variadic
});
we(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.PluralRules).bind.apply(e, Ce([void 0], t, !1)))();
}, {
  strategy: Te.variadic
});
we(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.Locale).bind.apply(e, Ce([void 0], t, !1)))();
}, {
  strategy: Te.variadic
});
we(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.ListFormat).bind.apply(e, Ce([void 0], t, !1)))();
}, {
  strategy: Te.variadic
});
var F;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(F || (F = {}));
var V;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(V || (V = {}));
var Vn;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(Vn || (Vn = {}));
function Hs(e) {
  return e.type === V.literal;
}
function Zm(e) {
  return e.type === V.argument;
}
function Td(e) {
  return e.type === V.number;
}
function Cd(e) {
  return e.type === V.date;
}
function Nd(e) {
  return e.type === V.time;
}
function kd(e) {
  return e.type === V.select;
}
function _d(e) {
  return e.type === V.plural;
}
function Ym(e) {
  return e.type === V.pound;
}
function Pd(e) {
  return e.type === V.tag;
}
function Rd(e) {
  return !!(e && typeof e == "object" && e.type === Vn.number);
}
function ta(e) {
  return !!(e && typeof e == "object" && e.type === Vn.dateTime);
}
var Ld = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Km = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Jm(e) {
  var t = {};
  return e.replace(Km, function(n) {
    var r = n.length;
    switch (n[0]) {
      case "G":
        t.era = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "y":
        t.year = r === 2 ? "2-digit" : "numeric";
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
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][r - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        t.weekday = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "e":
        if (r < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "c":
        if (r < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "a":
        t.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        t.minute = ["numeric", "2-digit"][r - 1];
        break;
      case "s":
        t.second = ["numeric", "2-digit"][r - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        t.timeZoneName = r < 4 ? "short" : "long";
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
  }), t;
}
var qm = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function ev(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(qm).filter(function(d) {
    return d.length > 0;
  }), n = [], r = 0, i = t; r < i.length; r++) {
    var o = i[r], l = o.split("/");
    if (l.length === 0)
      throw new Error("Invalid number skeleton");
    for (var a = l[0], u = l.slice(1), s = 0, c = u; s < c.length; s++) {
      var h = c[s];
      if (h.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: a, options: u });
  }
  return n;
}
function tv(e) {
  return e.replace(/^(.*?)-/, "");
}
var Ds = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Id = /^(@+)?(\+|#+)?[rs]?$/g, nv = /(\*)(0+)|(#+)(0+)|(0+)/g, Od = /^(0+)$/;
function Fs(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Id, function(n, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function Md(e) {
  switch (e) {
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
function rv(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Od.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Bs(e) {
  var t = {}, n = Md(e);
  return n || t;
}
function iv(e) {
  for (var t = {}, n = 0, r = e; n < r.length; n++) {
    var i = r[n];
    switch (i.stem) {
      case "percent":
      case "%":
        t.style = "percent";
        continue;
      case "%x100":
        t.style = "percent", t.scale = 100;
        continue;
      case "currency":
        t.style = "currency", t.currency = i.options[0];
        continue;
      case "group-off":
      case ",_":
        t.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        t.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        t.style = "unit", t.unit = tv(i.options[0]);
        continue;
      case "compact-short":
      case "K":
        t.notation = "compact", t.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        t.notation = "compact", t.compactDisplay = "long";
        continue;
      case "scientific":
        t = _(_(_({}, t), { notation: "scientific" }), i.options.reduce(function(u, s) {
          return _(_({}, u), Bs(s));
        }, {}));
        continue;
      case "engineering":
        t = _(_(_({}, t), { notation: "engineering" }), i.options.reduce(function(u, s) {
          return _(_({}, u), Bs(s));
        }, {}));
        continue;
      case "notation-simple":
        t.notation = "standard";
        continue;
      case "unit-width-narrow":
        t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        t.currencyDisplay = "code", t.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        t.currencyDisplay = "name", t.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        t.currencyDisplay = "symbol";
        continue;
      case "scale":
        t.scale = parseFloat(i.options[0]);
        continue;
      case "rounding-mode-floor":
        t.roundingMode = "floor";
        continue;
      case "rounding-mode-ceiling":
        t.roundingMode = "ceil";
        continue;
      case "rounding-mode-down":
        t.roundingMode = "trunc";
        continue;
      case "rounding-mode-up":
        t.roundingMode = "expand";
        continue;
      case "rounding-mode-half-even":
        t.roundingMode = "halfEven";
        continue;
      case "rounding-mode-half-down":
        t.roundingMode = "halfTrunc";
        continue;
      case "rounding-mode-half-up":
        t.roundingMode = "halfExpand";
        continue;
      case "integer-width":
        if (i.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        i.options[0].replace(nv, function(u, s, c, h, d, v) {
          if (s)
            t.minimumIntegerDigits = c.length;
          else {
            if (h && d)
              throw new Error("We currently do not support maximum integer digits");
            if (v)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Od.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Ds.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Ds, function(u, s, c, h, d, v) {
        return c === "*" ? t.minimumFractionDigits = s.length : h && h[0] === "#" ? t.maximumFractionDigits = h.length : d && v ? (t.minimumFractionDigits = d.length, t.maximumFractionDigits = d.length + v.length) : (t.minimumFractionDigits = s.length, t.maximumFractionDigits = s.length), "";
      });
      var o = i.options[0];
      o === "w" ? t = _(_({}, t), { trailingZeroDisplay: "stripIfInteger" }) : o && (t = _(_({}, t), Fs(o)));
      continue;
    }
    if (Id.test(i.stem)) {
      t = _(_({}, t), Fs(i.stem));
      continue;
    }
    var l = Md(i.stem);
    l && (t = _(_({}, t), l));
    var a = rv(i.stem);
    a && (t = _(_({}, t), a));
  }
  return t;
}
var si = {
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
function ov(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var o = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        o++, r++;
      var l = 1 + (o & 1), a = o < 2 ? 1 : 3 + (o >> 1), u = "a", s = lv(t);
      for ((s == "H" || s == "k") && (a = 0); a-- > 0; )
        n += u;
      for (; l-- > 0; )
        n = s + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function lv(e) {
  var t = e.hourCycle;
  if (t === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  e.hourCycles && // @ts-ignore
  e.hourCycles.length && (t = e.hourCycles[0]), t)
    switch (t) {
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
  var n = e.language, r;
  n !== "root" && (r = e.maximize().region);
  var i = si[r || ""] || si[n || ""] || si["".concat(n, "-001")] || si["001"];
  return i[0];
}
var nl, av = new RegExp("^".concat(Ld.source, "*")), uv = new RegExp("".concat(Ld.source, "*$"));
function B(e, t) {
  return { start: e, end: t };
}
var sv = !!String.prototype.startsWith && "_a".startsWith("a", 1), cv = !!String.fromCodePoint, fv = !!Object.fromEntries, dv = !!String.prototype.codePointAt, pv = !!String.prototype.trimStart, hv = !!String.prototype.trimEnd, mv = !!Number.isSafeInteger, vv = mv ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, na = !0;
try {
  var gv = Hd("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  na = ((nl = gv.exec("a")) === null || nl === void 0 ? void 0 : nl[0]) === "a";
} catch {
  na = !1;
}
var Us = sv ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), ra = cv ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    for (var r = "", i = t.length, o = 0, l; i > o; ) {
      if (l = t[o++], l > 1114111)
        throw RangeError(l + " is not a valid code point");
      r += l < 65536 ? String.fromCharCode(l) : String.fromCharCode(((l -= 65536) >> 10) + 55296, l % 1024 + 56320);
    }
    return r;
  }
), zs = (
  // native
  fv ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var o = i[r], l = o[0], a = o[1];
        n[l] = a;
      }
      return n;
    }
  )
), Ad = dv ? (
  // Native
  function(t, n) {
    return t.codePointAt(n);
  }
) : (
  // IE 11
  function(t, n) {
    var r = t.length;
    if (!(n < 0 || n >= r)) {
      var i = t.charCodeAt(n), o;
      return i < 55296 || i > 56319 || n + 1 === r || (o = t.charCodeAt(n + 1)) < 56320 || o > 57343 ? i : (i - 55296 << 10) + (o - 56320) + 65536;
    }
  }
), yv = pv ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(av, "");
  }
), Ev = hv ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(uv, "");
  }
);
function Hd(e, t) {
  return new RegExp(e, t);
}
var ia;
if (na) {
  var js = Hd("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ia = function(t, n) {
    var r;
    js.lastIndex = n;
    var i = js.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  ia = function(t, n) {
    for (var r = []; ; ) {
      var i = Ad(t, n);
      if (i === void 0 || Dd(i) || Tv(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return ra.apply(void 0, r);
  };
var xv = (
  /** @class */
  function() {
    function e(t, n) {
      n === void 0 && (n = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(t, n, r) {
      for (var i = []; !this.isEOF(); ) {
        var o = this.char();
        if (o === 123) {
          var l = this.parseArgument(t, r);
          if (l.err)
            return l;
          i.push(l.val);
        } else {
          if (o === 125 && t > 0)
            break;
          if (o === 35 && (n === "plural" || n === "selectordinal")) {
            var a = this.clonePosition();
            this.bump(), i.push({
              type: V.pound,
              location: B(a, this.clonePosition())
            });
          } else if (o === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(F.UNMATCHED_CLOSING_TAG, B(this.clonePosition(), this.clonePosition()));
          } else if (o === 60 && !this.ignoreTag && oa(this.peek() || 0)) {
            var l = this.parseTag(t, n);
            if (l.err)
              return l;
            i.push(l.val);
          } else {
            var l = this.parseLiteral(t, n);
            if (l.err)
              return l;
            i.push(l.val);
          }
        }
      }
      return { val: i, err: null };
    }, e.prototype.parseTag = function(t, n) {
      var r = this.clonePosition();
      this.bump();
      var i = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: V.literal,
            value: "<".concat(i, "/>"),
            location: B(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var o = this.parseMessage(t + 1, n, !0);
        if (o.err)
          return o;
        var l = o.val, a = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !oa(this.char()))
            return this.error(F.INVALID_TAG, B(a, this.clonePosition()));
          var u = this.clonePosition(), s = this.parseTagName();
          return i !== s ? this.error(F.UNMATCHED_CLOSING_TAG, B(u, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: V.tag,
              value: i,
              children: l,
              location: B(r, this.clonePosition())
            },
            err: null
          } : this.error(F.INVALID_TAG, B(a, this.clonePosition())));
        } else
          return this.error(F.UNCLOSED_TAG, B(r, this.clonePosition()));
      } else
        return this.error(F.INVALID_TAG, B(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && wv(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var o = this.tryParseQuote(n);
        if (o) {
          i += o;
          continue;
        }
        var l = this.tryParseUnquoted(t, n);
        if (l) {
          i += l;
          continue;
        }
        var a = this.tryParseLeftAngleBracket();
        if (a) {
          i += a;
          continue;
        }
        break;
      }
      var u = B(r, this.clonePosition());
      return {
        val: { type: V.literal, value: i, location: u },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Sv(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, e.prototype.tryParseQuote = function(t) {
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
          if (t === "plural" || t === "selectordinal")
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
      return ra.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), ra(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(F.EXPECT_ARGUMENT_CLOSING_BRACE, B(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(F.EMPTY_ARGUMENT, B(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(F.MALFORMED_ARGUMENT, B(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(F.EXPECT_ARGUMENT_CLOSING_BRACE, B(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: V.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: B(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(F.EXPECT_ARGUMENT_CLOSING_BRACE, B(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(F.MALFORMED_ARGUMENT, B(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = ia(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var o = this.clonePosition(), l = B(t, o);
      return { value: r, location: l };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var o, l = this.clonePosition(), a = this.parseIdentifierIfPossible().value, u = this.clonePosition();
      switch (a) {
        case "":
          return this.error(F.EXPECT_ARGUMENT_TYPE, B(l, u));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var s = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var c = this.clonePosition(), h = this.parseSimpleArgStyleIfPossible();
            if (h.err)
              return h;
            var d = Ev(h.val);
            if (d.length === 0)
              return this.error(F.EXPECT_ARGUMENT_STYLE, B(this.clonePosition(), this.clonePosition()));
            var v = B(c, this.clonePosition());
            s = { style: d, styleLocation: v };
          }
          var y = this.tryParseArgumentClose(i);
          if (y.err)
            return y;
          var E = B(i, this.clonePosition());
          if (s && Us(s == null ? void 0 : s.style, "::", 0)) {
            var R = yv(s.style.slice(2));
            if (a === "number") {
              var h = this.parseNumberSkeletonFromString(R, s.styleLocation);
              return h.err ? h : {
                val: { type: V.number, value: r, location: E, style: h.val },
                err: null
              };
            } else {
              if (R.length === 0)
                return this.error(F.EXPECT_DATE_TIME_SKELETON, E);
              var p = R;
              this.locale && (p = ov(R, this.locale));
              var d = {
                type: Vn.dateTime,
                pattern: p,
                location: s.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Jm(p) : {}
              }, f = a === "date" ? V.date : V.time;
              return {
                val: { type: f, value: r, location: E, style: d },
                err: null
              };
            }
          }
          return {
            val: {
              type: a === "number" ? V.number : a === "date" ? V.date : V.time,
              value: r,
              location: E,
              style: (o = s == null ? void 0 : s.style) !== null && o !== void 0 ? o : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var m = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(F.EXPECT_SELECT_ARGUMENT_OPTIONS, B(m, _({}, m)));
          this.bumpSpace();
          var g = this.parseIdentifierIfPossible(), S = 0;
          if (a !== "select" && g.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(F.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, B(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger(F.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, F.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), g = this.parseIdentifierIfPossible(), S = h.val;
          }
          var w = this.tryParsePluralOrSelectOptions(t, a, n, g);
          if (w.err)
            return w;
          var y = this.tryParseArgumentClose(i);
          if (y.err)
            return y;
          var N = B(i, this.clonePosition());
          return a === "select" ? {
            val: {
              type: V.select,
              value: r,
              options: zs(w.val),
              location: N
            },
            err: null
          } : {
            val: {
              type: V.plural,
              value: r,
              options: zs(w.val),
              offset: S,
              pluralType: a === "plural" ? "cardinal" : "ordinal",
              location: N
            },
            err: null
          };
        }
        default:
          return this.error(F.INVALID_ARGUMENT_TYPE, B(l, u));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(F.EXPECT_ARGUMENT_CLOSING_BRACE, B(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(F.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, B(i, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            t += 1, this.bump();
            break;
          }
          case 125: {
            if (t > 0)
              t -= 1;
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
    }, e.prototype.parseNumberSkeletonFromString = function(t, n) {
      var r = [];
      try {
        r = ev(t);
      } catch {
        return this.error(F.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Vn.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? iv(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var o, l = !1, a = [], u = /* @__PURE__ */ new Set(), s = i.value, c = i.location; ; ) {
        if (s.length === 0) {
          var h = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var d = this.tryParseDecimalInteger(F.EXPECT_PLURAL_ARGUMENT_SELECTOR, F.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (d.err)
              return d;
            c = B(h, this.clonePosition()), s = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (u.has(s))
          return this.error(n === "select" ? F.DUPLICATE_SELECT_ARGUMENT_SELECTOR : F.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        s === "other" && (l = !0), this.bumpSpace();
        var v = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? F.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : F.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, B(this.clonePosition(), this.clonePosition()));
        var y = this.parseMessage(t + 1, n, r);
        if (y.err)
          return y;
        var E = this.tryParseArgumentClose(v);
        if (E.err)
          return E;
        a.push([
          s,
          {
            value: y.val,
            location: B(v, this.clonePosition())
          }
        ]), u.add(s), this.bumpSpace(), o = this.parseIdentifierIfPossible(), s = o.value, c = o.location;
      }
      return a.length === 0 ? this.error(n === "select" ? F.EXPECT_SELECT_ARGUMENT_SELECTOR : F.EXPECT_PLURAL_ARGUMENT_SELECTOR, B(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !l ? this.error(F.MISSING_OTHER_CLAUSE, B(this.clonePosition(), this.clonePosition())) : { val: a, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var o = !1, l = 0; !this.isEOF(); ) {
        var a = this.char();
        if (a >= 48 && a <= 57)
          o = !0, l = l * 10 + (a - 48), this.bump();
        else
          break;
      }
      var u = B(i, this.clonePosition());
      return o ? (l *= r, vv(l) ? { val: l, err: null } : this.error(n, u)) : this.error(t, u);
    }, e.prototype.offset = function() {
      return this.position.offset;
    }, e.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, e.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, e.prototype.char = function() {
      var t = this.position.offset;
      if (t >= this.message.length)
        throw Error("out of bound");
      var n = Ad(this.message, t);
      if (n === void 0)
        throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, e.prototype.error = function(t, n) {
      return {
        val: null,
        err: {
          kind: t,
          message: this.message,
          location: n
        }
      };
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var t = this.char();
        t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function(t) {
      if (Us(this.message, t, this.offset())) {
        for (var n = 0; n < t.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(t) {
      var n = this.offset(), r = this.message.indexOf(t, n);
      return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(t) {
      if (this.offset() > t)
        throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (t = Math.min(t, this.message.length); ; ) {
        var n = this.offset();
        if (n === t)
          break;
        if (n > t)
          throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, e.prototype.bumpSpace = function() {
      for (; !this.isEOF() && Dd(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function oa(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Sv(e) {
  return oa(e) || e === 47;
}
function wv(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Dd(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Tv(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function la(e) {
  e.forEach(function(t) {
    if (delete t.location, kd(t) || _d(t))
      for (var n in t.options)
        delete t.options[n].location, la(t.options[n].value);
    else Td(t) && Rd(t.style) || (Cd(t) || Nd(t)) && ta(t.style) ? delete t.style.location : Pd(t) && la(t.children);
  });
}
function Cv(e, t) {
  t === void 0 && (t = {}), t = _({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new xv(e, t).parse();
  if (n.err) {
    var r = SyntaxError(F[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || la(n.val), n.val;
}
var st;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(st || (st = {}));
var Vt = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t(n, r, i) {
      var o = e.call(this, n) || this;
      return o.code = r, o.originalMessage = i, o;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), $s = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t(n, r, i, o) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), st.INVALID_VALUE, o) || this;
    }
    return t;
  }(Vt)
), Nv = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), st.INVALID_VALUE, i) || this;
    }
    return t;
  }(Vt)
), kv = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), st.MISSING_VALUE, r) || this;
    }
    return t;
  }(Vt)
), Ee;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(Ee || (Ee = {}));
function _v(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== Ee.literal || n.type !== Ee.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function Fd(e) {
  return typeof e == "function";
}
function ki(e, t, n, r, i, o, l) {
  if (e.length === 1 && Hs(e[0]))
    return [
      {
        type: Ee.literal,
        value: e[0].value
      }
    ];
  for (var a = [], u = 0, s = e; u < s.length; u++) {
    var c = s[u];
    if (Hs(c)) {
      a.push({
        type: Ee.literal,
        value: c.value
      });
      continue;
    }
    if (Ym(c)) {
      typeof o == "number" && a.push({
        type: Ee.literal,
        value: n.getNumberFormat(t).format(o)
      });
      continue;
    }
    var h = c.value;
    if (!(i && h in i))
      throw new kv(h, l);
    var d = i[h];
    if (Zm(c)) {
      (!d || typeof d == "string" || typeof d == "number") && (d = typeof d == "string" || typeof d == "number" ? String(d) : ""), a.push({
        type: typeof d == "string" ? Ee.literal : Ee.object,
        value: d
      });
      continue;
    }
    if (Cd(c)) {
      var v = typeof c.style == "string" ? r.date[c.style] : ta(c.style) ? c.style.parsedOptions : void 0;
      a.push({
        type: Ee.literal,
        value: n.getDateTimeFormat(t, v).format(d)
      });
      continue;
    }
    if (Nd(c)) {
      var v = typeof c.style == "string" ? r.time[c.style] : ta(c.style) ? c.style.parsedOptions : r.time.medium;
      a.push({
        type: Ee.literal,
        value: n.getDateTimeFormat(t, v).format(d)
      });
      continue;
    }
    if (Td(c)) {
      var v = typeof c.style == "string" ? r.number[c.style] : Rd(c.style) ? c.style.parsedOptions : void 0;
      v && v.scale && (d = d * (v.scale || 1)), a.push({
        type: Ee.literal,
        value: n.getNumberFormat(t, v).format(d)
      });
      continue;
    }
    if (Pd(c)) {
      var y = c.children, E = c.value, R = i[E];
      if (!Fd(R))
        throw new Nv(E, "function", l);
      var p = ki(y, t, n, r, i, o), f = R(p.map(function(S) {
        return S.value;
      }));
      Array.isArray(f) || (f = [f]), a.push.apply(a, f.map(function(S) {
        return {
          type: typeof S == "string" ? Ee.literal : Ee.object,
          value: S
        };
      }));
    }
    if (kd(c)) {
      var m = c.options[d] || c.options.other;
      if (!m)
        throw new $s(c.value, d, Object.keys(c.options), l);
      a.push.apply(a, ki(m.value, t, n, r, i));
      continue;
    }
    if (_d(c)) {
      var m = c.options["=".concat(d)];
      if (!m) {
        if (!Intl.PluralRules)
          throw new Vt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, st.MISSING_INTL_API, l);
        var g = n.getPluralRules(t, { type: c.pluralType }).select(d - (c.offset || 0));
        m = c.options[g] || c.options.other;
      }
      if (!m)
        throw new $s(c.value, d, Object.keys(c.options), l);
      a.push.apply(a, ki(m.value, t, n, r, i, d - (c.offset || 0)));
      continue;
    }
  }
  return _v(a);
}
function Pv(e, t) {
  return t ? _(_(_({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = _(_({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function Rv(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = Pv(e[r], t[r]), n;
  }, _({}, e)) : e;
}
function rl(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, n) {
          e[t] = n;
        }
      };
    }
  };
}
function Lv(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: we(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, Ce([void 0], n, !1)))();
    }, {
      cache: rl(e.number),
      strategy: Te.variadic
    }),
    getDateTimeFormat: we(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Ce([void 0], n, !1)))();
    }, {
      cache: rl(e.dateTime),
      strategy: Te.variadic
    }),
    getPluralRules: we(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, Ce([void 0], n, !1)))();
    }, {
      cache: rl(e.pluralRules),
      strategy: Te.variadic
    })
  };
}
var Bd = (
  /** @class */
  function() {
    function e(t, n, r, i) {
      n === void 0 && (n = e.defaultLocale);
      var o = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(u) {
        var s = o.formatToParts(u);
        if (s.length === 1)
          return s[0].value;
        var c = s.reduce(function(h, d) {
          return !h.length || d.type !== Ee.literal || typeof h[h.length - 1] != "string" ? h.push(d.value) : h[h.length - 1] += d.value, h;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(u) {
        return ki(o.ast, o.locales, o.formatters, o.formats, u, void 0, o.message);
      }, this.resolvedOptions = function() {
        var u;
        return {
          locale: ((u = o.resolvedLocale) === null || u === void 0 ? void 0 : u.toString()) || Intl.NumberFormat.supportedLocalesOf(o.locales)[0]
        };
      }, this.getAst = function() {
        return o.ast;
      }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var l = i || {};
        l.formatters;
        var a = Gn(l, ["formatters"]);
        this.ast = e.__parse(t, _(_({}, a), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Rv(e.formats, r), this.formatters = i && i.formatters || Lv(this.formatterCache);
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(t) {
      if (!(typeof Intl.Locale > "u")) {
        var n = Intl.NumberFormat.supportedLocalesOf(t);
        return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof t == "string" ? t : t[0]);
      }
    }, e.__parse = Cv, e.formats = {
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
    }, e;
  }()
), sn;
(function(e) {
  e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(sn || (sn = {}));
var br = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t(n, r, i) {
      var o = this, l = i ? i instanceof Error ? i : new Error(String(i)) : void 0;
      return o = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, `
`).concat(l ? `
`.concat(l.message, `
`).concat(l.stack) : "")) || this, o.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(o, t), o;
    }
    return t;
  }(Error)
), Iv = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t(n, r) {
      return e.call(this, sn.UNSUPPORTED_FORMATTER, n, r) || this;
    }
    return t;
  }(br)
), Ov = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t(n, r) {
      return e.call(this, sn.INVALID_CONFIG, n, r) || this;
    }
    return t;
  }(br)
), bs = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t(n, r) {
      return e.call(this, sn.MISSING_DATA, n, r) || this;
    }
    return t;
  }(br)
), Ze = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t(n, r, i) {
      var o = e.call(this, sn.FORMAT_ERROR, "".concat(n, `
Locale: `).concat(r, `
`), i) || this;
      return o.locale = r, o;
    }
    return t;
  }(br)
), il = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t(n, r, i, o) {
      var l = e.call(this, "".concat(n, `
MessageID: `).concat(i == null ? void 0 : i.id, `
Default Message: `).concat(i == null ? void 0 : i.defaultMessage, `
Description: `).concat(i == null ? void 0 : i.description, `
`), r, o) || this;
      return l.descriptor = i, l.locale = r, l;
    }
    return t;
  }(Ze)
), Mv = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t(n, r) {
      var i = e.call(this, sn.MISSING_TRANSLATION, 'Missing message: "'.concat(n.id, '" for locale "').concat(r, '", using ').concat(n.defaultMessage ? "default message (".concat(typeof n.defaultMessage == "string" ? n.defaultMessage : n.defaultMessage.map(function(o) {
        var l;
        return (l = o.value) !== null && l !== void 0 ? l : JSON.stringify(o);
      }).join(), ")") : "id", " as fallback.")) || this;
      return i.descriptor = n, i;
    }
    return t;
  }(br)
);
function dn(e, t, n) {
  return n === void 0 && (n = {}), t.reduce(function(r, i) {
    return i in e ? r[i] = e[i] : i in n && (r[i] = n[i]), r;
  }, {});
}
var Av = function(e) {
}, Hv = function(e) {
}, Ud = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: Av,
  onWarn: Hv
};
function zd() {
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
function Xt(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, n) {
          e[t] = n;
        }
      };
    }
  };
}
function Dv(e) {
  e === void 0 && (e = zd());
  var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, i = we(function() {
    for (var a, u = [], s = 0; s < arguments.length; s++)
      u[s] = arguments[s];
    return new ((a = Intl.DateTimeFormat).bind.apply(a, Ce([void 0], u, !1)))();
  }, {
    cache: Xt(e.dateTime),
    strategy: Te.variadic
  }), o = we(function() {
    for (var a, u = [], s = 0; s < arguments.length; s++)
      u[s] = arguments[s];
    return new ((a = Intl.NumberFormat).bind.apply(a, Ce([void 0], u, !1)))();
  }, {
    cache: Xt(e.number),
    strategy: Te.variadic
  }), l = we(function() {
    for (var a, u = [], s = 0; s < arguments.length; s++)
      u[s] = arguments[s];
    return new ((a = Intl.PluralRules).bind.apply(a, Ce([void 0], u, !1)))();
  }, {
    cache: Xt(e.pluralRules),
    strategy: Te.variadic
  });
  return {
    getDateTimeFormat: i,
    getNumberFormat: o,
    getMessageFormat: we(function(a, u, s, c) {
      return new Bd(a, u, s, _({ formatters: {
        getNumberFormat: o,
        getDateTimeFormat: i,
        getPluralRules: l
      } }, c || {}));
    }, {
      cache: Xt(e.message),
      strategy: Te.variadic
    }),
    getRelativeTimeFormat: we(function() {
      for (var a = [], u = 0; u < arguments.length; u++)
        a[u] = arguments[u];
      return new (t.bind.apply(t, Ce([void 0], a, !1)))();
    }, {
      cache: Xt(e.relativeTime),
      strategy: Te.variadic
    }),
    getPluralRules: l,
    getListFormat: we(function() {
      for (var a = [], u = 0; u < arguments.length; u++)
        a[u] = arguments[u];
      return new (n.bind.apply(n, Ce([void 0], a, !1)))();
    }, {
      cache: Xt(e.list),
      strategy: Te.variadic
    }),
    getDisplayNames: we(function() {
      for (var a = [], u = 0; u < arguments.length; u++)
        a[u] = arguments[u];
      return new (r.bind.apply(r, Ce([void 0], a, !1)))();
    }, {
      cache: Xt(e.displayNames),
      strategy: Te.variadic
    })
  };
}
function du(e, t, n, r) {
  var i = e && e[t], o;
  if (i && (o = i[n]), o)
    return o;
  r(new Iv("No ".concat(t, " format named: ").concat(n)));
}
function ci(e, t) {
  return Object.keys(e).reduce(function(n, r) {
    return n[r] = _({ timeZone: t }, e[r]), n;
  }, {});
}
function Gs(e, t) {
  var n = Object.keys(_(_({}, e), t));
  return n.reduce(function(r, i) {
    return r[i] = _(_({}, e[i] || {}), t[i] || {}), r;
  }, {});
}
function Vs(e, t) {
  if (!t)
    return e;
  var n = Bd.formats;
  return _(_(_({}, n), e), { date: Gs(ci(n.date, t), ci(e.date || {}, t)), time: Gs(ci(n.time, t), ci(e.time || {}, t)) });
}
var aa = function(e, t, n, r, i) {
  var o = e.locale, l = e.formats, a = e.messages, u = e.defaultLocale, s = e.defaultFormats, c = e.fallbackOnEmptyString, h = e.onError, d = e.timeZone, v = e.defaultRichTextElements;
  n === void 0 && (n = { id: "" });
  var y = n.id, E = n.defaultMessage;
  wd(!!y, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var R = String(y), p = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    a && Object.prototype.hasOwnProperty.call(a, R) && a[R]
  );
  if (Array.isArray(p) && p.length === 1 && p[0].type === V.literal)
    return p[0].value;
  if (!r && p && typeof p == "string" && !v)
    return p.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (r = _(_({}, v), r || {}), l = Vs(l, d), s = Vs(s, d), !p) {
    if (c === !1 && p === "")
      return p;
    if ((!E || o && o.toLowerCase() !== u.toLowerCase()) && h(new Mv(n, o)), E)
      try {
        var f = t.getMessageFormat(E, u, s, i);
        return f.format(r);
      } catch (m) {
        return h(new il('Error formatting default message for: "'.concat(R, '", rendering default message verbatim'), o, n, m)), typeof E == "string" ? E : R;
      }
    return R;
  }
  try {
    var f = t.getMessageFormat(p, o, l, _({ formatters: t }, i || {}));
    return f.format(r);
  } catch (m) {
    h(new il('Error formatting message: "'.concat(R, '", using ').concat(E ? "default message" : "id", " as fallback."), o, n, m));
  }
  if (E)
    try {
      var f = t.getMessageFormat(E, u, s, i);
      return f.format(r);
    } catch (m) {
      h(new il('Error formatting the default message for: "'.concat(R, '", rendering message verbatim'), o, n, m));
    }
  return typeof p == "string" ? p : typeof E == "string" ? E : R;
}, jd = [
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
function mo(e, t, n, r) {
  var i = e.locale, o = e.formats, l = e.onError, a = e.timeZone;
  r === void 0 && (r = {});
  var u = r.format, s = _(_({}, a && { timeZone: a }), u && du(o, t, u, l)), c = dn(r, jd, s);
  return t === "time" && !c.hour && !c.minute && !c.second && !c.timeStyle && !c.dateStyle && (c = _(_({}, c), { hour: "numeric", minute: "numeric" })), n(i, c);
}
function Fv(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], o = n[1], l = o === void 0 ? {} : o, a = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return mo(e, "date", t, l).format(a);
  } catch (u) {
    e.onError(new Ze("Error formatting date.", e.locale, u));
  }
  return String(a);
}
function Bv(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], o = n[1], l = o === void 0 ? {} : o, a = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return mo(e, "time", t, l).format(a);
  } catch (u) {
    e.onError(new Ze("Error formatting time.", e.locale, u));
  }
  return String(a);
}
function Uv(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], o = n[1], l = n[2], a = l === void 0 ? {} : l, u = e.timeZone, s = e.locale, c = e.onError, h = dn(a, jd, u ? { timeZone: u } : {});
  try {
    return t(s, h).formatRange(i, o);
  } catch (d) {
    c(new Ze("Error formatting date time range.", e.locale, d));
  }
  return String(i);
}
function zv(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], o = n[1], l = o === void 0 ? {} : o, a = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return mo(e, "date", t, l).formatToParts(a);
  } catch (u) {
    e.onError(new Ze("Error formatting date.", e.locale, u));
  }
  return [];
}
function jv(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], o = n[1], l = o === void 0 ? {} : o, a = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return mo(e, "time", t, l).formatToParts(a);
  } catch (u) {
    e.onError(new Ze("Error formatting time.", e.locale, u));
  }
  return [];
}
var $v = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function bv(e, t, n, r) {
  var i = e.locale, o = e.onError, l = Intl.DisplayNames;
  l || o(new Vt(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, st.MISSING_INTL_API));
  var a = dn(r, $v);
  try {
    return t(i, a).of(n);
  } catch (u) {
    o(new Ze("Error formatting display name.", i, u));
  }
}
var Gv = [
  "type",
  "style"
], Ws = Date.now();
function Vv(e) {
  return "".concat(Ws, "_").concat(e, "_").concat(Ws);
}
function Wv(e, t, n, r) {
  r === void 0 && (r = {});
  var i = $d(e, t, n, r).reduce(function(o, l) {
    var a = l.value;
    return typeof a != "string" ? o.push(a) : typeof o[o.length - 1] == "string" ? o[o.length - 1] += a : o.push(a), o;
  }, []);
  return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function $d(e, t, n, r) {
  var i = e.locale, o = e.onError;
  r === void 0 && (r = {});
  var l = Intl.ListFormat;
  l || o(new Vt(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, st.MISSING_INTL_API));
  var a = dn(r, Gv);
  try {
    var u = {}, s = n.map(function(c, h) {
      if (typeof c == "object") {
        var d = Vv(h);
        return u[d] = c, d;
      }
      return String(c);
    });
    return t(i, a).formatToParts(s).map(function(c) {
      return c.type === "literal" ? c : _(_({}, c), { value: u[c.value] || c.value });
    });
  } catch (c) {
    o(new Ze("Error formatting list.", i, c));
  }
  return n;
}
var Xv = ["type"];
function Qv(e, t, n, r) {
  var i = e.locale, o = e.onError;
  r === void 0 && (r = {}), Intl.PluralRules || o(new Vt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, st.MISSING_INTL_API));
  var l = dn(r, Xv);
  try {
    return t(i, l).select(n);
  } catch (a) {
    o(new Ze("Error formatting plural.", i, a));
  }
  return "other";
}
var Zv = ["numeric", "style"];
function Yv(e, t, n) {
  var r = e.locale, i = e.formats, o = e.onError;
  n === void 0 && (n = {});
  var l = n.format, a = !!l && du(i, "relative", l, o) || {}, u = dn(n, Zv, a);
  return t(r, u);
}
function Kv(e, t, n, r, i) {
  i === void 0 && (i = {}), r || (r = "second");
  var o = Intl.RelativeTimeFormat;
  o || e.onError(new Vt(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, st.MISSING_INTL_API));
  try {
    return Yv(e, t, i).format(n, r);
  } catch (l) {
    e.onError(new Ze("Error formatting relative time.", e.locale, l));
  }
  return String(n);
}
var Jv = [
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
function bd(e, t, n) {
  var r = e.locale, i = e.formats, o = e.onError;
  n === void 0 && (n = {});
  var l = n.format, a = l && du(i, "number", l, o) || {}, u = dn(n, Jv, a);
  return t(r, u);
}
function qv(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return bd(e, t, r).format(n);
  } catch (i) {
    e.onError(new Ze("Error formatting number.", e.locale, i));
  }
  return String(n);
}
function e0(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return bd(e, t, r).formatToParts(n);
  } catch (i) {
    e.onError(new Ze("Error formatting number.", e.locale, i));
  }
  return [];
}
function t0(e) {
  var t = e ? e[Object.keys(e)[0]] : void 0;
  return typeof t == "string";
}
function n0(e) {
  e.onWarn && e.defaultRichTextElements && t0(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`);
}
function r0(e, t) {
  var n = Dv(t), r = _(_({}, Ud), e), i = r.locale, o = r.defaultLocale, l = r.onError;
  return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && l ? l(new bs('Missing locale data for locale: "'.concat(i, '" in Intl.NumberFormat. Using default locale: "').concat(o, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && l && l(new bs('Missing locale data for locale: "'.concat(i, '" in Intl.DateTimeFormat. Using default locale: "').concat(o, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (l && l(new Ov('"locale" was not configured, using "'.concat(o, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"), n0(r), _(_({}, r), {
    formatters: n,
    formatNumber: qv.bind(null, r, n.getNumberFormat),
    formatNumberToParts: e0.bind(null, r, n.getNumberFormat),
    formatRelativeTime: Kv.bind(null, r, n.getRelativeTimeFormat),
    formatDate: Fv.bind(null, r, n.getDateTimeFormat),
    formatDateToParts: zv.bind(null, r, n.getDateTimeFormat),
    formatTime: Bv.bind(null, r, n.getDateTimeFormat),
    formatDateTimeRange: Uv.bind(null, r, n.getDateTimeFormat),
    formatTimeToParts: jv.bind(null, r, n.getDateTimeFormat),
    formatPlural: Qv.bind(null, r, n.getPluralRules),
    // @ts-expect-error TODO: will get to this later
    formatMessage: aa.bind(null, r, n),
    // @ts-expect-error TODO: will get to this later
    $t: aa.bind(null, r, n),
    formatList: Wv.bind(null, r, n.getListFormat),
    formatListToParts: $d.bind(null, r, n.getListFormat),
    formatDisplayName: bv.bind(null, r, n.getDisplayNames)
  });
}
function Gd(e) {
  wd(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var Vd = _(_({}, Ud), { textComponent: k.Fragment });
function i0(e) {
  return function(t) {
    return e(k.Children.toArray(t));
  };
}
function ua(e, t) {
  if (e === t)
    return !0;
  if (!e || !t)
    return !1;
  var n = Object.keys(e), r = Object.keys(t), i = n.length;
  if (r.length !== i)
    return !1;
  for (var o = 0; o < i; o++) {
    var l = n[o];
    if (e[l] !== t[l] || !Object.prototype.hasOwnProperty.call(t, l))
      return !1;
  }
  return !0;
}
var Wd = { exports: {} }, $ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ue = typeof Symbol == "function" && Symbol.for, pu = ue ? Symbol.for("react.element") : 60103, hu = ue ? Symbol.for("react.portal") : 60106, vo = ue ? Symbol.for("react.fragment") : 60107, go = ue ? Symbol.for("react.strict_mode") : 60108, yo = ue ? Symbol.for("react.profiler") : 60114, Eo = ue ? Symbol.for("react.provider") : 60109, xo = ue ? Symbol.for("react.context") : 60110, mu = ue ? Symbol.for("react.async_mode") : 60111, So = ue ? Symbol.for("react.concurrent_mode") : 60111, wo = ue ? Symbol.for("react.forward_ref") : 60112, To = ue ? Symbol.for("react.suspense") : 60113, o0 = ue ? Symbol.for("react.suspense_list") : 60120, Co = ue ? Symbol.for("react.memo") : 60115, No = ue ? Symbol.for("react.lazy") : 60116, l0 = ue ? Symbol.for("react.block") : 60121, a0 = ue ? Symbol.for("react.fundamental") : 60117, u0 = ue ? Symbol.for("react.responder") : 60118, s0 = ue ? Symbol.for("react.scope") : 60119;
function ze(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case pu:
        switch (e = e.type, e) {
          case mu:
          case So:
          case vo:
          case yo:
          case go:
          case To:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case xo:
              case wo:
              case No:
              case Co:
              case Eo:
                return e;
              default:
                return t;
            }
        }
      case hu:
        return t;
    }
  }
}
function Xd(e) {
  return ze(e) === So;
}
$.AsyncMode = mu;
$.ConcurrentMode = So;
$.ContextConsumer = xo;
$.ContextProvider = Eo;
$.Element = pu;
$.ForwardRef = wo;
$.Fragment = vo;
$.Lazy = No;
$.Memo = Co;
$.Portal = hu;
$.Profiler = yo;
$.StrictMode = go;
$.Suspense = To;
$.isAsyncMode = function(e) {
  return Xd(e) || ze(e) === mu;
};
$.isConcurrentMode = Xd;
$.isContextConsumer = function(e) {
  return ze(e) === xo;
};
$.isContextProvider = function(e) {
  return ze(e) === Eo;
};
$.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === pu;
};
$.isForwardRef = function(e) {
  return ze(e) === wo;
};
$.isFragment = function(e) {
  return ze(e) === vo;
};
$.isLazy = function(e) {
  return ze(e) === No;
};
$.isMemo = function(e) {
  return ze(e) === Co;
};
$.isPortal = function(e) {
  return ze(e) === hu;
};
$.isProfiler = function(e) {
  return ze(e) === yo;
};
$.isStrictMode = function(e) {
  return ze(e) === go;
};
$.isSuspense = function(e) {
  return ze(e) === To;
};
$.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === vo || e === So || e === yo || e === go || e === To || e === o0 || typeof e == "object" && e !== null && (e.$$typeof === No || e.$$typeof === Co || e.$$typeof === Eo || e.$$typeof === xo || e.$$typeof === wo || e.$$typeof === a0 || e.$$typeof === u0 || e.$$typeof === s0 || e.$$typeof === l0);
};
$.typeOf = ze;
Wd.exports = $;
var c0 = Wd.exports, Qd = c0, f0 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, d0 = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Zd = {};
Zd[Qd.ForwardRef] = f0;
Zd[Qd.Memo] = d0;
var vu = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = k.createContext(null)) : k.createContext(null);
vu.Consumer;
var p0 = vu.Provider, h0 = p0, m0 = vu;
function gu() {
  var e = k.useContext(m0);
  return Gd(e), e;
}
var sa;
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(sa || (sa = {}));
var ca;
(function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(ca || (ca = {}));
function Yd(e) {
  var t = function(n) {
    var r = gu(), i = n.value, o = n.children, l = Gn(n, ["value", "children"]), a = typeof i == "string" ? new Date(i || 0) : i, u = e === "formatDate" ? r.formatDateToParts(a, l) : r.formatTimeToParts(a, l);
    return o(u);
  };
  return t.displayName = ca[e], t;
}
function Gr(e) {
  var t = function(n) {
    var r = gu(), i = n.value, o = n.children, l = Gn(
      n,
      ["value", "children"]
    ), a = r[e](i, l);
    if (typeof o == "function")
      return o(a);
    var u = r.textComponent || k.Fragment;
    return k.createElement(u, null, a);
  };
  return t.displayName = sa[e], t;
}
function Kd(e) {
  return e && Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    return t[n] = Fd(r) ? i0(r) : r, t;
  }, {});
}
var Xs = function(e, t, n, r) {
  for (var i = [], o = 4; o < arguments.length; o++)
    i[o - 4] = arguments[o];
  var l = Kd(r), a = aa.apply(void 0, Ce([
    e,
    t,
    n,
    l
  ], i, !1));
  return Array.isArray(a) ? k.Children.toArray(a) : a;
}, Qs = function(e, t) {
  var n = e.defaultRichTextElements, r = Gn(e, ["defaultRichTextElements"]), i = Kd(n), o = r0(_(_(_({}, Vd), r), { defaultRichTextElements: i }), t), l = {
    locale: o.locale,
    timeZone: o.timeZone,
    fallbackOnEmptyString: o.fallbackOnEmptyString,
    formats: o.formats,
    defaultLocale: o.defaultLocale,
    defaultFormats: o.defaultFormats,
    messages: o.messages,
    onError: o.onError,
    defaultRichTextElements: i
  };
  return _(_({}, o), {
    formatMessage: Xs.bind(
      null,
      l,
      // @ts-expect-error fix this
      o.formatters
    ),
    // @ts-expect-error fix this
    $t: Xs.bind(null, l, o.formatters)
  });
};
function ol(e) {
  return {
    locale: e.locale,
    timeZone: e.timeZone,
    fallbackOnEmptyString: e.fallbackOnEmptyString,
    formats: e.formats,
    textComponent: e.textComponent,
    messages: e.messages,
    defaultLocale: e.defaultLocale,
    defaultFormats: e.defaultFormats,
    onError: e.onError,
    onWarn: e.onWarn,
    wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
    defaultRichTextElements: e.defaultRichTextElements
  };
}
var v0 = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n.cache = zd(), n.state = {
        cache: n.cache,
        intl: Qs(ol(n.props), n.cache),
        prevConfig: ol(n.props)
      }, n;
    }
    return t.getDerivedStateFromProps = function(n, r) {
      var i = r.prevConfig, o = r.cache, l = ol(n);
      return ua(i, l) ? null : {
        intl: Qs(l, o),
        prevConfig: l
      };
    }, t.prototype.render = function() {
      return Gd(this.state.intl), k.createElement(h0, { value: this.state.intl }, this.props.children);
    }, t.displayName = "IntlProvider", t.defaultProps = Vd, t;
  }(k.PureComponent)
);
function g0(e, t) {
  var n = e.values, r = Gn(e, ["values"]), i = t.values, o = Gn(t, ["values"]);
  return ua(i, n) && ua(r, o);
}
function Jd(e) {
  var t = gu(), n = t.formatMessage, r = t.textComponent, i = r === void 0 ? k.Fragment : r, o = e.id, l = e.description, a = e.defaultMessage, u = e.values, s = e.children, c = e.tagName, h = c === void 0 ? i : c, d = e.ignoreTag, v = { id: o, description: l, defaultMessage: a }, y = n(v, u, {
    ignoreTag: d
  });
  return typeof s == "function" ? s(Array.isArray(y) ? y : [y]) : h ? k.createElement(h, null, k.Children.toArray(y)) : k.createElement(k.Fragment, null, y);
}
Jd.displayName = "FormattedMessage";
var qd = k.memo(Jd, g0);
qd.displayName = "MemoizedFormattedMessage";
Gr("formatDate");
Gr("formatTime");
Gr("formatNumber");
Gr("formatList");
Gr("formatDisplayName");
Yd("formatDate");
Yd("formatTime");
var ep = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", l = 0; l < arguments.length; l++) {
        var a = arguments[l];
        a && (o = i(o, r(a)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number")
        return o;
      if (typeof o != "object")
        return "";
      if (Array.isArray(o))
        return n.apply(null, o);
      if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
        return o.toString();
      var l = "";
      for (var a in o)
        t.call(o, a) && o[a] && (l = i(l, a));
      return l;
    }
    function i(o, l) {
      return l ? o ? o + " " + l : o + l : o;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(ep);
var y0 = ep.exports;
const Xe = /* @__PURE__ */ Fr(y0);
function Fe() {
  return Fe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Fe.apply(null, arguments);
}
function Wt(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Zs(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function E0(e) {
  var t = x0(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function x0(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function S0(e, t, n) {
  var r = k.useRef(e !== void 0), i = k.useState(t), o = i[0], l = i[1], a = e !== void 0, u = r.current;
  return r.current = a, !a && u && o !== t && l(t), [a ? e : o, k.useCallback(function(s) {
    for (var c = arguments.length, h = new Array(c > 1 ? c - 1 : 0), d = 1; d < c; d++)
      h[d - 1] = arguments[d];
    n && n.apply(void 0, [s].concat(h)), l(s);
  }, [n])];
}
function w0(e, t) {
  return Object.keys(t).reduce(function(n, r) {
    var i, o = n, l = o[Zs(r)], a = o[r], u = Wt(o, [Zs(r), r].map(E0)), s = t[r], c = S0(a, l, e[s]), h = c[0], d = c[1];
    return Fe({}, u, (i = {}, i[r] = h, i[s] = d, i));
  }, e);
}
function fa(e, t) {
  return fa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, fa(e, t);
}
function T0(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, fa(e, t);
}
var yu = /* @__PURE__ */ I.createContext({});
yu.Consumer;
yu.Provider;
function Eu(e, t) {
  var n = k.useContext(yu);
  return e || n[t] || t;
}
function C0(e) {
  return e && e.ownerDocument || document;
}
function N0(e) {
  var t = C0(e);
  return t && t.defaultView || window;
}
function k0(e, t) {
  return N0(e).getComputedStyle(e, t);
}
var _0 = /([A-Z])/g;
function P0(e) {
  return e.replace(_0, "-$1").toLowerCase();
}
var R0 = /^ms-/;
function fi(e) {
  return P0(e).replace(R0, "-ms-");
}
var L0 = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function I0(e) {
  return !!(e && L0.test(e));
}
function tp(e, t) {
  var n = "", r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(fi(t)) || k0(e).getPropertyValue(fi(t));
  Object.keys(t).forEach(function(i) {
    var o = t[i];
    !o && o !== 0 ? e.style.removeProperty(fi(i)) : I0(i) ? r += i + "(" + o + ") " : n += fi(i) + ": " + o + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
var np = { exports: {} }, O0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", M0 = O0, A0 = M0;
function rp() {
}
function ip() {
}
ip.resetWarningCache = rp;
var H0 = function() {
  function e(r, i, o, l, a, u) {
    if (u !== A0) {
      var s = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw s.name = "Invariant Violation", s;
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
    checkPropTypes: ip,
    resetWarningCache: rp
  };
  return n.PropTypes = n, n;
};
np.exports = H0();
var D0 = np.exports;
const O = /* @__PURE__ */ Fr(D0), Ys = {
  disabled: !1
}, op = I.createContext(null);
var F0 = function(t) {
  return t.scrollTop;
}, sr = "unmounted", Yt = "exited", _t = "entering", Kt = "entered", da = "exiting", wt = /* @__PURE__ */ function(e) {
  T0(t, e);
  function t(r, i) {
    var o;
    o = e.call(this, r, i) || this;
    var l = i, a = l && !l.isMounting ? r.enter : r.appear, u;
    return o.appearStatus = null, r.in ? a ? (u = Yt, o.appearStatus = _t) : u = Kt : r.unmountOnExit || r.mountOnEnter ? u = sr : u = Yt, o.state = {
      status: u
    }, o.nextCallback = null, o;
  }
  t.getDerivedStateFromProps = function(i, o) {
    var l = i.in;
    return l && o.status === sr ? {
      status: Yt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var o = null;
    if (i !== this.props) {
      var l = this.state.status;
      this.props.in ? l !== _t && l !== Kt && (o = _t) : (l === _t || l === Kt) && (o = da);
    }
    this.updateStatus(!1, o);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, o, l, a;
    return o = l = a = i, i != null && typeof i != "number" && (o = i.exit, l = i.enter, a = i.appear !== void 0 ? i.appear : l), {
      exit: o,
      enter: l,
      appear: a
    };
  }, n.updateStatus = function(i, o) {
    if (i === void 0 && (i = !1), o !== null)
      if (this.cancelNextCallback(), o === _t) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var l = this.props.nodeRef ? this.props.nodeRef.current : ui.findDOMNode(this);
          l && F0(l);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Yt && this.setState({
      status: sr
    });
  }, n.performEnter = function(i) {
    var o = this, l = this.props.enter, a = this.context ? this.context.isMounting : i, u = this.props.nodeRef ? [a] : [ui.findDOMNode(this), a], s = u[0], c = u[1], h = this.getTimeouts(), d = a ? h.appear : h.enter;
    if (!i && !l || Ys.disabled) {
      this.safeSetState({
        status: Kt
      }, function() {
        o.props.onEntered(s);
      });
      return;
    }
    this.props.onEnter(s, c), this.safeSetState({
      status: _t
    }, function() {
      o.props.onEntering(s, c), o.onTransitionEnd(d, function() {
        o.safeSetState({
          status: Kt
        }, function() {
          o.props.onEntered(s, c);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, o = this.props.exit, l = this.getTimeouts(), a = this.props.nodeRef ? void 0 : ui.findDOMNode(this);
    if (!o || Ys.disabled) {
      this.safeSetState({
        status: Yt
      }, function() {
        i.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: da
    }, function() {
      i.props.onExiting(a), i.onTransitionEnd(l.exit, function() {
        i.safeSetState({
          status: Yt
        }, function() {
          i.props.onExited(a);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, o) {
    o = this.setNextCallback(o), this.setState(i, o);
  }, n.setNextCallback = function(i) {
    var o = this, l = !0;
    return this.nextCallback = function(a) {
      l && (l = !1, o.nextCallback = null, i(a));
    }, this.nextCallback.cancel = function() {
      l = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, o) {
    this.setNextCallback(o);
    var l = this.props.nodeRef ? this.props.nodeRef.current : ui.findDOMNode(this), a = i == null && !this.props.addEndListener;
    if (!l || a) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var u = this.props.nodeRef ? [this.nextCallback] : [l, this.nextCallback], s = u[0], c = u[1];
      this.props.addEndListener(s, c);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === sr)
      return null;
    var o = this.props, l = o.children;
    o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
    var a = Wt(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ I.createElement(op.Provider, {
        value: null
      }, typeof l == "function" ? l(i, a) : I.cloneElement(I.Children.only(l), a))
    );
  }, t;
}(I.Component);
wt.contextType = op;
wt.propTypes = {};
function yn() {
}
wt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: yn,
  onEntering: yn,
  onEntered: yn,
  onExit: yn,
  onExiting: yn,
  onExited: yn
};
wt.UNMOUNTED = sr;
wt.EXITED = Yt;
wt.ENTERING = _t;
wt.ENTERED = Kt;
wt.EXITING = da;
const B0 = !!(typeof window < "u" && window.document && window.document.createElement);
var pa = !1, ha = !1;
try {
  var ll = {
    get passive() {
      return pa = !0;
    },
    get once() {
      return ha = pa = !0;
    }
  };
  B0 && (window.addEventListener("test", ll, ll), window.removeEventListener("test", ll, !0));
} catch {
}
function U0(e, t, n, r) {
  if (r && typeof r != "boolean" && !ha) {
    var i = r.once, o = r.capture, l = n;
    !ha && i && (l = n.__once || function a(u) {
      this.removeEventListener(t, a, o), n.call(this, u);
    }, n.__once = l), e.addEventListener(t, l, pa ? r : o);
  }
  e.addEventListener(t, n, r);
}
function z0(e, t, n, r) {
  var i = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
function lp(e, t, n, r) {
  return U0(e, t, n, r), function() {
    z0(e, t, n, r);
  };
}
function j0(e, t, n, r) {
  if (r === void 0 && (r = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, n, r), e.dispatchEvent(i);
  }
}
function $0(e) {
  var t = tp(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function b0(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1, i = setTimeout(function() {
    r || j0(e, "transitionend", !0);
  }, t + n), o = lp(e, "transitionend", function() {
    r = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), o();
  };
}
function G0(e, t, n, r) {
  n == null && (n = $0(e) || 0);
  var i = b0(e, n, r), o = lp(e, "transitionend", t);
  return function() {
    i(), o();
  };
}
function Ks(e, t) {
  var n = tp(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function V0(e, t) {
  var n = Ks(e, "transitionDuration"), r = Ks(e, "transitionDelay"), i = G0(e, function(o) {
    o.target === e && (i(), t(o));
  }, n + r);
}
function W0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.filter(function(r) {
    return r != null;
  }).reduce(function(r, i) {
    if (typeof i != "function")
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    return r === null ? i : function() {
      for (var l = arguments.length, a = new Array(l), u = 0; u < l; u++)
        a[u] = arguments[u];
      r.apply(this, a), i.apply(this, a);
    };
  }, null);
}
function X0(e) {
  e.offsetHeight;
}
function Q0(e) {
  const t = k.useRef(e);
  return k.useEffect(() => {
    t.current = e;
  }, [e]), t;
}
function Z0(e) {
  const t = Q0(e);
  return k.useCallback(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
var Y0 = ["className", "children"], di, K0 = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1
}, J0 = (di = {}, di[_t] = "show", di[Kt] = "show", di), ko = /* @__PURE__ */ I.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = Wt(e, Y0), o = k.useCallback(function(l) {
    X0(l), i.onEnter && i.onEnter(l);
  }, [i]);
  return /* @__PURE__ */ I.createElement(wt, Fe({
    ref: t,
    addEndListener: V0
  }, i, {
    onEnter: o
  }), function(l, a) {
    return /* @__PURE__ */ I.cloneElement(r, Fe({}, a, {
      className: Xe("fade", n, r.props.className, J0[l])
    }));
  });
});
ko.defaultProps = K0;
ko.displayName = "Fade";
var q0 = ["label", "onClick", "className"], eg = {
  label: O.string.isRequired,
  onClick: O.func
}, tg = {
  label: "Close"
}, _o = /* @__PURE__ */ I.forwardRef(function(e, t) {
  var n = e.label, r = e.onClick, i = e.className, o = Wt(e, q0);
  return /* @__PURE__ */ I.createElement("button", Fe({
    ref: t,
    type: "button",
    className: Xe("close", i),
    onClick: r
  }, o), /* @__PURE__ */ I.createElement("span", {
    "aria-hidden": "true"
  }, "×"), /* @__PURE__ */ I.createElement("span", {
    className: "sr-only"
  }, n));
});
_o.displayName = "CloseButton";
_o.propTypes = eg;
_o.defaultProps = tg;
const ap = function(e) {
  return /* @__PURE__ */ I.forwardRef(function(t, n) {
    return /* @__PURE__ */ I.createElement("div", Fe({}, t, {
      ref: n,
      className: Xe(t.className, e)
    }));
  });
};
var ng = /-(.)/g;
function rg(e) {
  return e.replace(ng, function(t, n) {
    return n.toUpperCase();
  });
}
var ig = ["className", "bsPrefix", "as"], og = function(t) {
  return t[0].toUpperCase() + rg(t).slice(1);
};
function up(e, t) {
  var n = t === void 0 ? {} : t, r = n.displayName, i = r === void 0 ? og(e) : r, o = n.Component, l = n.defaultProps, a = /* @__PURE__ */ I.forwardRef(function(u, s) {
    var c = u.className, h = u.bsPrefix, d = u.as, v = d === void 0 ? o || "div" : d, y = Wt(u, ig), E = Eu(h, e);
    return /* @__PURE__ */ I.createElement(v, Fe({
      ref: s,
      className: Xe(c, E)
    }, y));
  });
  return a.defaultProps = l, a.displayName = i, a;
}
var lg = ["as", "disabled", "onKeyDown"];
function Js(e) {
  return !e || e.trim() === "#";
}
var xu = /* @__PURE__ */ I.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, o = e.onKeyDown, l = Wt(e, lg), a = function(c) {
    var h = l.href, d = l.onClick;
    if ((i || Js(h)) && c.preventDefault(), i) {
      c.stopPropagation();
      return;
    }
    d && d(c);
  }, u = function(c) {
    c.key === " " && (c.preventDefault(), a(c));
  };
  return Js(l.href) && (l.role = l.role || "button", l.href = l.href || "#"), i && (l.tabIndex = -1, l["aria-disabled"] = !0), /* @__PURE__ */ I.createElement(r, Fe({
    ref: t
  }, l, {
    onClick: a,
    onKeyDown: W0(u, o)
  }));
});
xu.displayName = "SafeAnchor";
var ag = ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"], sp = ap("h4");
sp.displayName = "DivStyledAsH4";
var ug = up("alert-heading", {
  Component: sp
}), sg = up("alert-link", {
  Component: xu
}), cg = {
  show: !0,
  transition: ko,
  closeLabel: "Close alert"
}, pn = /* @__PURE__ */ I.forwardRef(function(e, t) {
  var n = w0(e, {
    show: "onClose"
  }), r = n.bsPrefix, i = n.show, o = n.closeLabel, l = n.className, a = n.children, u = n.variant, s = n.onClose, c = n.dismissible, h = n.transition, d = Wt(n, ag), v = Eu(r, "alert"), y = Z0(function(p) {
    s && s(!1, p);
  }), E = h === !0 ? ko : h, R = /* @__PURE__ */ I.createElement("div", Fe({
    role: "alert"
  }, E ? void 0 : d, {
    ref: t,
    className: Xe(l, v, u && v + "-" + u, c && v + "-dismissible")
  }), c && /* @__PURE__ */ I.createElement(_o, {
    onClick: y,
    label: o
  }), a);
  return E ? /* @__PURE__ */ I.createElement(E, Fe({
    unmountOnExit: !0
  }, d, {
    ref: void 0,
    in: i
  }), R) : i ? R : null;
});
pn.displayName = "Alert";
pn.defaultProps = cg;
pn.Link = sg;
pn.Heading = ug;
var fg = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"], dg = {
  variant: "primary",
  active: !1,
  disabled: !1
}, Su = /* @__PURE__ */ I.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.size, o = e.active, l = e.className, a = e.block, u = e.type, s = e.as, c = Wt(e, fg), h = Eu(n, "btn"), d = Xe(l, h, o && "active", r && h + "-" + r, a && h + "-block", i && h + "-" + i);
  if (c.href)
    return /* @__PURE__ */ I.createElement(xu, Fe({}, c, {
      as: s,
      ref: t,
      className: Xe(d, c.disabled && "disabled")
    }));
  t && (c.ref = t), u ? c.type = u : s || (c.type = "button");
  var v = s || "button";
  return /* @__PURE__ */ I.createElement(v, Fe({}, c, {
    className: d
  }));
});
Su.displayName = "Button";
Su.defaultProps = dg;
var wu = {};
wu.match = yg;
wu.parse = cp;
var pg = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, hg = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, mg = /^(?:(min|max)-)?(.+)/, vg = /(em|rem|px|cm|mm|in|pt|pc)?$/, gg = /(dpi|dpcm|dppx)?$/;
function yg(e, t) {
  return cp(e).some(function(n) {
    var r = n.inverse, i = n.type === "all" || t.type === n.type;
    if (i && r || !(i || r))
      return !1;
    var o = n.expressions.every(function(l) {
      var a = l.feature, u = l.modifier, s = l.value, c = t[a];
      if (!c)
        return !1;
      switch (a) {
        case "orientation":
        case "scan":
          return c.toLowerCase() === s.toLowerCase();
        case "width":
        case "height":
        case "device-width":
        case "device-height":
          s = tc(s), c = tc(c);
          break;
        case "resolution":
          s = ec(s), c = ec(c);
          break;
        case "aspect-ratio":
        case "device-aspect-ratio":
        case /* Deprecated */
        "device-pixel-ratio":
          s = qs(s), c = qs(c);
          break;
        case "grid":
        case "color":
        case "color-index":
        case "monochrome":
          s = parseInt(s, 10) || 1, c = parseInt(c, 10) || 0;
          break;
      }
      switch (u) {
        case "min":
          return c >= s;
        case "max":
          return c <= s;
        default:
          return c === s;
      }
    });
    return o && !r || !o && r;
  });
}
function cp(e) {
  return e.split(",").map(function(t) {
    t = t.trim();
    var n = t.match(pg), r = n[1], i = n[2], o = n[3] || "", l = {};
    return l.inverse = !!r && r.toLowerCase() === "not", l.type = i ? i.toLowerCase() : "all", o = o.match(/\([^\)]+\)/g) || [], l.expressions = o.map(function(a) {
      var u = a.match(hg), s = u[1].toLowerCase().match(mg);
      return {
        modifier: s[1],
        feature: s[2],
        value: u[2]
      };
    }), l;
  });
}
function qs(e) {
  var t = Number(e), n;
  return t || (n = e.match(/^(\d+)\s*\/\s*(\d+)$/), t = n[1] / n[2]), t;
}
function ec(e) {
  var t = parseFloat(e), n = String(e).match(gg)[1];
  switch (n) {
    case "dpcm":
      return t / 2.54;
    case "dppx":
      return t * 96;
    default:
      return t;
  }
}
function tc(e) {
  var t = parseFloat(e), n = String(e).match(vg)[1];
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
var Eg = wu.match, nc = typeof window < "u" ? window.matchMedia : null;
function xg(e, t, n) {
  var r = this, i;
  nc && !n && (i = nc.call(window, e)), i ? (this.matches = i.matches, this.media = i.media, i.addListener(a)) : (this.matches = Eg(e, t), this.media = e), this.addListener = o, this.removeListener = l, this.dispose = u;
  function o(s) {
    i && i.addListener(s);
  }
  function l(s) {
    i && i.removeListener(s);
  }
  function a(s) {
    r.matches = s.matches, r.media = s.media;
  }
  function u() {
    i && i.removeListener(a);
  }
}
function Sg(e, t, n) {
  return new xg(e, t, n);
}
var wg = Sg;
const Tg = /* @__PURE__ */ Fr(wg);
var Cg = /[A-Z]/g, Ng = /^ms-/, al = {};
function kg(e) {
  return "-" + e.toLowerCase();
}
function fp(e) {
  if (al.hasOwnProperty(e))
    return al[e];
  var t = e.replace(Cg, kg);
  return al[e] = Ng.test(t) ? "-" + t : t;
}
function _g(e, t) {
  if (e === t)
    return !0;
  if (!e || !t)
    return !1;
  const n = Object.keys(e), r = Object.keys(t), i = n.length;
  if (r.length !== i)
    return !1;
  for (let o = 0; o < i; o++) {
    const l = n[o];
    if (e[l] !== t[l] || !Object.prototype.hasOwnProperty.call(t, l))
      return !1;
  }
  return !0;
}
const xe = O.oneOfType([O.string, O.number]), dp = {
  all: O.bool,
  grid: O.bool,
  aural: O.bool,
  braille: O.bool,
  handheld: O.bool,
  print: O.bool,
  projection: O.bool,
  screen: O.bool,
  tty: O.bool,
  tv: O.bool,
  embossed: O.bool
}, Pg = {
  orientation: O.oneOf(["portrait", "landscape"]),
  scan: O.oneOf(["progressive", "interlace"]),
  aspectRatio: O.string,
  deviceAspectRatio: O.string,
  height: xe,
  deviceHeight: xe,
  width: xe,
  deviceWidth: xe,
  color: O.bool,
  colorIndex: O.bool,
  monochrome: O.bool,
  resolution: xe,
  type: Object.keys(dp)
}, { type: ry, ...Rg } = Pg, Lg = {
  minAspectRatio: O.string,
  maxAspectRatio: O.string,
  minDeviceAspectRatio: O.string,
  maxDeviceAspectRatio: O.string,
  minHeight: xe,
  maxHeight: xe,
  minDeviceHeight: xe,
  maxDeviceHeight: xe,
  minWidth: xe,
  maxWidth: xe,
  minDeviceWidth: xe,
  maxDeviceWidth: xe,
  minColor: O.number,
  maxColor: O.number,
  minColorIndex: O.number,
  maxColorIndex: O.number,
  minMonochrome: O.number,
  maxMonochrome: O.number,
  minResolution: xe,
  maxResolution: xe,
  ...Rg
}, Ig = { ...dp, ...Lg };
var Og = {
  all: Ig
};
const Mg = (e) => `not ${e}`, Ag = (e, t) => {
  const n = fp(e);
  return typeof t == "number" && (t = `${t}px`), t === !0 ? n : t === !1 ? Mg(n) : `(${n}: ${t})`;
}, Hg = (e) => e.join(" and "), Dg = (e) => {
  const t = [];
  return Object.keys(Og.all).forEach((n) => {
    const r = e[n];
    r != null && t.push(Ag(n, r));
  }), Hg(t);
}, Fg = k.createContext(void 0), Bg = (e) => e.query || Dg(e), rc = (e) => e ? Object.keys(e).reduce((n, r) => (n[fp(r)] = e[r], n), {}) : void 0, pp = () => {
  const e = k.useRef(!1);
  return k.useEffect(() => {
    e.current = !0;
  }, []), e.current;
}, Ug = (e) => {
  const t = k.useContext(Fg), n = () => rc(e) || rc(t), [r, i] = k.useState(n);
  return k.useEffect(() => {
    const o = n();
    _g(r, o) || i(o);
  }, [e, t]), r;
}, zg = (e) => {
  const t = () => Bg(e), [n, r] = k.useState(t);
  return k.useEffect(() => {
    const i = t();
    n !== i && r(i);
  }, [e]), n;
}, jg = (e, t) => {
  const n = () => Tg(e, t || {}, !!t), [r, i] = k.useState(n), o = pp();
  return k.useEffect(() => {
    if (o) {
      const l = n();
      return i(l), () => {
        l && l.dispose();
      };
    }
  }, [e, t]), r;
}, $g = (e) => {
  const [t, n] = k.useState(e.matches);
  return k.useEffect(() => {
    const r = (i) => {
      n(i.matches);
    };
    return e.addListener(r), n(e.matches), () => {
      e.removeListener(r);
    };
  }, [e]), t;
}, bg = (e, t, n) => {
  const r = Ug(t), i = zg(e);
  if (!i)
    throw new Error("Invalid or missing MediaQuery!");
  const o = jg(i, r), l = $g(o);
  return pp(), k.useEffect(() => {
  }, [l]), k.useEffect(() => () => {
    o && o.dispose();
  }, []), l;
};
let ic = 0;
const Gg = (e = "id") => (ic += 1, `${e}${ic}`);
let cr = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function Vg(e, t, n) {
  class r extends I.Component {
    constructor(o) {
      super(o), this.transformProps = this.transformProps.bind(this);
    }
    warn(o) {
    }
    transformProps(o, l) {
      if (n[l] === void 0)
        return o[l] = this.props[l], o;
      const {
        deprType: a,
        newName: u,
        expect: s,
        transform: c,
        message: h
      } = n[l];
      switch (a) {
        case cr.MOVED:
          this.warn(`${t}: The prop '${l}' has been moved to '${u}'.`), o[u] = this.props[l];
          break;
        case cr.REMOVED:
          this.warn(`${t}: The prop '${l}' has been removed. '${h}'`);
          break;
        case cr.FORMAT:
          s(this.props[l]) ? o[l] = this.props[l] : (this.warn(`${t}: The prop '${l}' expects a new format. ${h}`), o[l] = c(this.props[l], this.props));
          break;
        case cr.MOVED_AND_FORMAT: {
          const d = this.props[l];
          let v = `${t}: The prop '${l}' has been moved to '${u}'`;
          s && !s(d) && (v += " and expects a new format"), v += h ? `. ${h}` : "", this.warn(v), o[u] = c ? c(d, this.props) : d;
          break;
        }
        default:
          o[l] = this.props[l];
          break;
      }
      return o;
    }
    render() {
      const {
        children: o,
        ...l
      } = Object.keys(this.props).reduce(this.transformProps, {});
      return /* @__PURE__ */ I.createElement(e, {
        ...l
      }, this.props.children || o);
    }
  }
  return (
    // eslint-disable-next-line react/static-property-placement
    Nu(r, "displayName", `withDeprecatedProps(${t})`), r
  );
}
function Tu({
  src: e,
  id: t,
  className: n,
  hidden: r,
  screenReaderText: i,
  svgAttrs: o,
  size: l,
  ...a
}) {
  if (e) {
    const u = o["aria-label"] || o["aria-labelledby"], s = {
      ...o
    };
    return u || (s["aria-label"] = void 0, s["aria-hidden"] = !0), /* @__PURE__ */ I.createElement("span", {
      className: Xe("pgn__icon", {
        [`pgn__icon__${l}`]: !!l
      }, n),
      id: t,
      ...a
    }, /* @__PURE__ */ I.createElement(e, {
      role: "img",
      focusable: !1,
      ...s
    }), i && /* @__PURE__ */ I.createElement("span", {
      className: "sr-only"
    }, i));
  }
  return /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement("span", {
    id: t || Gg("Icon"),
    className: n,
    "aria-hidden": r
  }), i && /* @__PURE__ */ I.createElement("span", {
    className: "sr-only"
  }, i));
}
Tu.propTypes = {
  /**
   * An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';`
   */
  src: O.elementType,
  /** HTML element attributes to pass through to the underlying svg element */
  svgAttrs: O.shape({
    "aria-label": O.string,
    "aria-labelledby": O.string
  }),
  /**
   * the `id` property of the Icon element, by default this value is generated
   * with the `newId` function with the `prefix` of `Icon`.
   */
  id: O.string,
  /** The size of the icon. */
  size: O.oneOf(["xs", "sm", "md", "lg"]),
  /** A class name that will define what the Icon looks like. */
  className: O.string,
  /**
   * a boolean that determines the value of `aria-hidden` attribute on the Icon span,
   * this value is `true` by default.
   */
  hidden: O.bool,
  /**
   * a string or an element that will be used on a secondary span leveraging the `sr-only` style
   * for screenreader only text, this value is `undefined` by default. This value is recommended for use unless
   * the Icon is being used in a way that is purely decorative or provides no additional context for screen
   * reader users. This field should be thought of the same way an `alt` attribute would be used for `image` tags.
   */
  screenReaderText: O.oneOfType([O.string, O.element])
};
Tu.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const ma = Vg(Tu, "Icon", {
  className: {
    deprType: cr.FORMAT,
    expect: (e) => typeof e == "string",
    transform: (e) => Array.isArray(e) ? e.join(" ") : e,
    message: "It should be a string."
  }
}), Wg = "576px", Xg = {
  sm: Wg
}, {
  sm: Qg
} = Xg, Zg = {
  extraSmall: {
    maxWidth: parseFloat(Qg) || 575.98
  }
}, Yg = /* @__PURE__ */ I.forwardRef(({
  children: e,
  iconAfter: t,
  iconBefore: n,
  size: r,
  ...i
}, o) => /* @__PURE__ */ I.createElement(Su, {
  size: r,
  ...i,
  className: Xe(i.className),
  ref: o
}, n && /* @__PURE__ */ I.createElement(ma, {
  className: "btn-icon-before",
  size: r,
  src: n
}), e, t && /* @__PURE__ */ I.createElement(ma, {
  className: "btn-icon-after",
  size: r,
  src: t
})));
function va({
  as: e = "div",
  isStacked: t = !1,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ I.createElement(e, {
    ...r,
    className: Xe(r.className, {
      "pgn__action-row": !t,
      "pgn__action-row-stacked": t
    })
  }, n);
}
function Kg() {
  return /* @__PURE__ */ I.createElement("span", {
    className: "pgn__action-row-spacer"
  });
}
va.Spacer = Kg;
const Ki = /* @__PURE__ */ k.forwardRef(({
  children: e,
  icon: t,
  actions: n,
  dismissible: r = !1,
  onClose: i = () => {
  },
  closeLabel: o,
  stacked: l = !1,
  show: a = !0,
  ...u
}, s) => {
  const [c, h] = k.useState(l), d = bg({
    maxWidth: Zg.extraSmall.maxWidth
  }), v = "sm";
  k.useEffect(() => {
    h(d ? !0 : l);
  }, [d, l]);
  const y = k.useCallback((E) => {
    const R = {
      size: v,
      key: E.props.children
    };
    return /* @__PURE__ */ k.cloneElement(E, R);
  }, []);
  return /* @__PURE__ */ I.createElement(pn, {
    ...u,
    className: Xe("alert-content", u.className),
    show: a,
    ref: s
  }, t && /* @__PURE__ */ I.createElement(ma, {
    src: t,
    className: "alert-icon"
  }), /* @__PURE__ */ I.createElement("div", {
    className: Xe({
      "pgn__alert-message-wrapper": !c,
      "pgn__alert-message-wrapper-stacked": c
    })
  }, /* @__PURE__ */ I.createElement("div", {
    className: "alert-message-content"
  }, e), (r || n && n.length > 0) && /* @__PURE__ */ I.createElement(va, {
    className: "pgn__alert-actions"
  }, /* @__PURE__ */ I.createElement(va.Spacer, null), r && /* @__PURE__ */ I.createElement(Yg, {
    size: v,
    variant: "tertiary",
    onClick: i
  }, o || /* @__PURE__ */ I.createElement(qd, {
    id: "pgn.Alert.closeLabel",
    defaultMessage: "Dismiss",
    description: "Label of a close button on Alert component"
  })), n && n.map(y))));
}), hp = ap("h4");
hp.displayName = "DivStyledAsH4";
function Jg({
  as: e = hp,
  bsPrefix: t = "alert-heading",
  ...n
}) {
  return /* @__PURE__ */ I.createElement(pn.Heading, {
    as: e,
    bsPrefix: t,
    ...n
  });
}
function qg({
  as: e = "a",
  bsPrefix: t = "alert-link",
  ...n
}) {
  return /* @__PURE__ */ I.createElement(pn.Link, {
    as: e,
    bsPrefix: t,
    ...n
  });
}
Ki.Heading = Jg;
Ki.Link = qg;
function ey() {
  const e = "csrftoken", t = document.cookie.split(";");
  for (let r = 0; r < t.length; r++) {
    const i = t[r].trim();
    if (i.startsWith(e + "="))
      return i.substring(e.length + 1);
  }
  const n = document.querySelector('meta[name="csrf-token"]');
  return n ? n.getAttribute("content") || "" : (console.warn("CSRF token not found"), "");
}
async function pi(e, t, n = {}) {
  const r = e.handlerUrl(e.element, t);
  try {
    const i = await fetch(r, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": ey()
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
const ty = ({
  runtime: e,
  questionText: t,
  imageUrl: n,
  hotspots: r,
  studentClicks: i,
  currentScore: o,
  maxScore: l,
  attemptsRemaining: a,
  feedbackMode: u,
  gradingMode: s,
  lastSubmissionResult: c,
  isGraded: h
}) => {
  const [d, v] = k.useState(i), [y, E] = k.useState([]), [R, p] = k.useState(!1), [f, m] = k.useState(c), [g, S] = k.useState(null), [w, N] = k.useState(!1), [P, X] = k.useState(a), [D, ge] = k.useState(o), [ye, ct] = k.useState(!1), [Zn, Yn] = k.useState(null), [hn, de] = k.useState(null), T = k.useRef(null), M = k.useCallback(async (z) => {
    if (P !== null && P <= 0) {
      de("Maximum attempts exceeded");
      return;
    }
    if (u === "on_submit" && w || !T.current) return;
    const re = T.current.getBoundingClientRect(), Tt = z.clientX - re.left, Po = z.clientY - re.top, vn = Tt / re.width * 100, Ro = Po / re.height * 100;
    console.log(`Click at: (${vn.toFixed(2)}%, ${Ro.toFixed(2)}%)`);
    const Cu = {
      x: vn,
      y: Ro,
      hotspot_id: null,
      correct: !1,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    if (u === "immediate") {
      p(!0), de(null);
      try {
        const rt = await pi(e, "submit_answer", {
          x: vn,
          y: Ro
        });
        if (rt.success) {
          m(rt), X(rt.attemptsRemaining), ge(rt.score);
          const mp = {
            ...Cu,
            hotspot_id: rt.clickedHotspot,
            correct: rt.correct,
            points: rt.points
          };
          v([...d, mp]);
        } else
          de(rt.error || "Submission failed");
      } catch (rt) {
        console.error("Submission error:", rt), de("An error occurred. Please try again.");
      } finally {
        p(!1);
      }
    } else
      E([...y, Cu]);
  }, [u, w, P, y, d, e]), A = k.useCallback(async () => {
    if (y.length === 0) {
      de("No clicks to submit");
      return;
    }
    p(!0), de(null);
    try {
      const z = await pi(e, "submit_all_clicks", {
        clicks: y.map((re) => ({ x: re.x, y: re.y }))
      });
      z.success ? (S(z), ge(z.score), N(!0), X(z.attemptsRemaining), v([...d, ...y]), E([])) : de(z.error || "Failed to submit");
    } catch (z) {
      console.error("Batch submission error:", z), de("An error occurred. Please try again.");
    } finally {
      p(!1);
    }
  }, [e, y, d]), Q = k.useCallback(async () => {
    try {
      await pi(e, "reset_problem", {}), v([]), E([]), N(!1), S(null), m(void 0), ct(!1), Yn(null), de(null), ge(0);
    } catch (z) {
      console.error("Reset error:", z), de("Failed to reset problem");
    }
  }, [e]), ee = k.useCallback(async () => {
    if (ye) {
      ct(!1), Yn(null);
      return;
    }
    try {
      const z = await pi(
        e,
        "get_correct_answers",
        {}
      );
      z.success ? (Yn(z.correctHotspots), ct(!0)) : de("Failed to load correct answers");
    } catch (z) {
      console.error("Error fetching correct answers:", z), de("Failed to load correct answers");
    }
  }, [e, ye]), mn = !R && (P === null || P > 0) && !(u === "on_submit" && w), ft = u === "on_submit" && !w ? [...d, ...y] : d;
  return /* @__PURE__ */ L.jsxs("div", { className: "image-hotspot-student-view", children: [
    /* @__PURE__ */ L.jsxs("div", { className: "problem-header", children: [
      /* @__PURE__ */ L.jsx("h3", { className: "problem-title", children: "Image Hotspot" }),
      /* @__PURE__ */ L.jsxs("div", { className: "problem-points", children: [
        l.toFixed(l % 1 === 0 ? 0 : 1),
        "/",
        l.toFixed(l % 1 === 0 ? 0 : 1),
        " point",
        l !== 1 ? "s" : "",
        " (",
        h ? "graded" : "ungraded",
        ")"
      ] })
    ] }),
    /* @__PURE__ */ L.jsx("div", { className: "problem-question", dangerouslySetInnerHTML: { __html: t } }),
    /* @__PURE__ */ L.jsx("div", { children: n ? /* @__PURE__ */ L.jsxs("div", { className: "hotspot-image-container", children: [
      /* @__PURE__ */ L.jsx(
        "img",
        {
          ref: T,
          src: n,
          alt: "Hotspot question image",
          onClick: M,
          className: `hotspot-image ${mn ? "clickable" : ""} ${R ? "processing" : ""}`
        }
      ),
      ft.map((z, re) => /* @__PURE__ */ L.jsx(
        "div",
        {
          className: `click-marker ${z.correct ? "correct" : "incorrect"}`,
          style: { left: `${z.x}%`, top: `${z.y}%` },
          title: z.correct ? "Correct click" : "Incorrect click"
        },
        re
      )),
      ye && Zn && Zn.map((z, re) => {
        if (z.shape === "circle" && z.coordinates.length >= 3) {
          const [Tt, Po, vn] = z.coordinates;
          return /* @__PURE__ */ L.jsx(
            "div",
            {
              className: "answer-hotspot",
              style: {
                left: `${Tt}%`,
                top: `${Po}%`,
                width: `${vn * 2}%`,
                height: `${vn * 2}%`
              },
              title: z.label
            },
            `answer-${re}`
          );
        }
        return null;
      }),
      R && /* @__PURE__ */ L.jsx("div", { className: "processing-overlay", children: "Processing..." })
    ] }) : /* @__PURE__ */ L.jsx(Ki, { variant: "warning", children: "No image configured for this problem. Please contact your instructor." }) }),
    hn && /* @__PURE__ */ L.jsx(Ki, { variant: "danger", className: "mb-3", children: hn }),
    u === "on_submit" && /* @__PURE__ */ L.jsxs("div", { className: "action", children: [
      w && /* @__PURE__ */ L.jsxs("div", { className: "problem-action-buttons-wrapper", children: [
        /* @__PURE__ */ L.jsx("span", { className: "problem-action-button-wrapper", children: /* @__PURE__ */ L.jsx(
          "button",
          {
            type: "button",
            className: "reset problem-action-btn btn-link btn-small",
            onClick: Q,
            disabled: R,
            "aria-label": "Reset problem",
            children: "Reset"
          }
        ) }),
        /* @__PURE__ */ L.jsx("span", { className: "problem-action-button-wrapper", children: /* @__PURE__ */ L.jsx(
          "button",
          {
            type: "button",
            className: "show problem-action-btn btn-link btn-small",
            onClick: ee,
            disabled: R,
            "aria-label": ye ? "Hide correct answers" : "Show correct answers",
            children: ye ? "Hide Answer" : "Show Answer"
          }
        ) })
      ] }),
      /* @__PURE__ */ L.jsxs("div", { className: "submit-attempt-container", children: [
        /* @__PURE__ */ L.jsx(
          "button",
          {
            type: "button",
            className: "submit btn-brand",
            onClick: A,
            disabled: R || y.length === 0 || w,
            "aria-label": "Submit answer",
            children: R ? "Submitting..." : "Submit"
          }
        ),
        w && g && /* @__PURE__ */ L.jsxs("div", { className: "submission-feedback", children: [
          /* @__PURE__ */ L.jsxs("div", { className: `notification notification-${g.allCorrect ? "correct" : "incorrect"}`, children: [
            /* @__PURE__ */ L.jsx("div", { className: "notification-icon", children: g.allCorrect ? "✓" : "✗" }),
            /* @__PURE__ */ L.jsx("div", { className: "notification-content", children: /* @__PURE__ */ L.jsxs("p", { children: [
              g.allCorrect ? "Correct" : "Incorrect",
              "(",
              g.score.toFixed(2),
              "/",
              g.maxScore.toFixed(2),
              " point",
              g.maxScore !== 1 ? "s" : "",
              ")"
            ] }) })
          ] }),
          g.explanation && /* @__PURE__ */ L.jsxs("div", { className: "notification notification-explanation", children: [
            /* @__PURE__ */ L.jsx("div", { className: "notification-icon", children: "📋" }),
            /* @__PURE__ */ L.jsx("div", { className: "notification-content", children: /* @__PURE__ */ L.jsx("div", { dangerouslySetInnerHTML: { __html: g.explanation } }) })
          ] }),
          ye && /* @__PURE__ */ L.jsxs("div", { className: "notification notification-answer", children: [
            /* @__PURE__ */ L.jsx("div", { className: "notification-icon", children: "ℹ" }),
            /* @__PURE__ */ L.jsx("div", { className: "notification-content", children: /* @__PURE__ */ L.jsx("p", { children: "Correct answer regions are highlighted on the image" }) })
          ] })
        ] })
      ] })
    ] }),
    u === "immediate" && f && f.success && /* @__PURE__ */ L.jsxs("div", { className: "action", children: [
      /* @__PURE__ */ L.jsxs("div", { className: "problem-action-buttons-wrapper", children: [
        /* @__PURE__ */ L.jsx("span", { className: "problem-action-button-wrapper", children: /* @__PURE__ */ L.jsx(
          "button",
          {
            type: "button",
            className: "reset problem-action-btn btn-link btn-small",
            onClick: Q,
            disabled: R,
            "aria-label": "Reset problem",
            children: "Reset"
          }
        ) }),
        /* @__PURE__ */ L.jsx("span", { className: "problem-action-button-wrapper", children: /* @__PURE__ */ L.jsx(
          "button",
          {
            type: "button",
            className: "show problem-action-btn btn-link btn-small",
            onClick: ee,
            disabled: R,
            "aria-label": ye ? "Hide correct answers" : "Show correct answers",
            children: ye ? "Hide Answer" : "Show Answer"
          }
        ) })
      ] }),
      /* @__PURE__ */ L.jsxs("div", { className: "submission-feedback", children: [
        /* @__PURE__ */ L.jsxs("div", { className: `notification notification-${f.correct ? "correct" : "incorrect"}`, children: [
          /* @__PURE__ */ L.jsx("div", { className: "notification-icon", children: f.correct ? "✓" : "✗" }),
          /* @__PURE__ */ L.jsx("div", { className: "notification-content", children: /* @__PURE__ */ L.jsxs("p", { children: [
            f.correct ? "Correct" : "Incorrect",
            "(",
            f.score.toFixed(2),
            "/",
            f.maxScore.toFixed(2),
            " point",
            f.maxScore !== 1 ? "s" : "",
            ")"
          ] }) })
        ] }),
        f.feedback && /* @__PURE__ */ L.jsxs("div", { className: "notification notification-explanation", children: [
          /* @__PURE__ */ L.jsx("div", { className: "notification-icon", children: "📋" }),
          /* @__PURE__ */ L.jsx("div", { className: "notification-content", children: /* @__PURE__ */ L.jsx("div", { dangerouslySetInnerHTML: { __html: f.feedback } }) })
        ] }),
        ye && /* @__PURE__ */ L.jsxs("div", { className: "notification notification-answer", children: [
          /* @__PURE__ */ L.jsx("div", { className: "notification-icon", children: "ℹ" }),
          /* @__PURE__ */ L.jsx("div", { className: "notification-content", children: /* @__PURE__ */ L.jsx("p", { children: "Correct answer regions are highlighted on the image" }) })
        ] })
      ] })
    ] })
  ] });
}, iy = (e, t) => {
  Ed(e).render(
    /* @__PURE__ */ L.jsxs(k.StrictMode, { children: [
      /* @__PURE__ */ L.jsx(v0, { locale: "en", children: /* @__PURE__ */ L.jsx(
        ty,
        {
          runtime: t.runtime,
          questionText: t.questionText,
          imageUrl: t.imageUrl,
          hotspots: t.hotspots,
          studentClicks: t.studentClicks,
          currentScore: t.currentScore,
          maxScore: t.maxScore,
          attemptsRemaining: t.attemptsRemaining,
          feedbackMode: t.feedbackMode,
          gradingMode: t.gradingMode,
          lastSubmissionResult: t.lastSubmissionResult
        }
      ) }),
      "    "
    ] })
  );
};
export {
  iy as renderBlock
};
//# sourceMappingURL=student-ui.js.map
