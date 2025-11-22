var zc = Object.defineProperty;
var Lc = (e, t, n) => t in e ? zc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Zu = (e, t, n) => Lc(e, typeof t != "symbol" ? t + "" : t, n);
function Ko(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ss = { exports: {} }, il = {}, as = { exports: {} }, R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr = Symbol.for("react.element"), Rc = Symbol.for("react.portal"), Ic = Symbol.for("react.fragment"), Oc = Symbol.for("react.strict_mode"), Dc = Symbol.for("react.profiler"), Mc = Symbol.for("react.provider"), Fc = Symbol.for("react.context"), jc = Symbol.for("react.forward_ref"), Uc = Symbol.for("react.suspense"), Bc = Symbol.for("react.memo"), $c = Symbol.for("react.lazy"), Ju = Symbol.iterator;
function Hc(e) {
  return e === null || typeof e != "object" ? null : (e = Ju && e[Ju] || e["@@iterator"], typeof e == "function" ? e : null);
}
var cs = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, fs = Object.assign, ds = {};
function pn(e, t, n) {
  this.props = e, this.context = t, this.refs = ds, this.updater = n || cs;
}
pn.prototype.isReactComponent = {};
pn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
pn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ps() {
}
ps.prototype = pn.prototype;
function Yo(e, t, n) {
  this.props = e, this.context = t, this.refs = ds, this.updater = n || cs;
}
var Xo = Yo.prototype = new ps();
Xo.constructor = Yo;
fs(Xo, pn.prototype);
Xo.isPureReactComponent = !0;
var qu = Array.isArray, ms = Object.prototype.hasOwnProperty, Go = { current: null }, hs = { key: !0, ref: !0, __self: !0, __source: !0 };
function vs(e, t, n) {
  var r, l = {}, o = null, u = null;
  if (t != null) for (r in t.ref !== void 0 && (u = t.ref), t.key !== void 0 && (o = "" + t.key), t) ms.call(t, r) && !hs.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var s = Array(i), c = 0; c < i; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: tr, type: e, key: o, ref: u, props: l, _owner: Go.current };
}
function Vc(e, t) {
  return { $$typeof: tr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Zo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === tr;
}
function Qc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var bu = /\/+/g;
function Pl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Qc("" + e.key) : t.toString(36);
}
function xr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var u = !1;
  if (e === null) u = !0;
  else switch (o) {
    case "string":
    case "number":
      u = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case tr:
        case Rc:
          u = !0;
      }
  }
  if (u) return u = e, l = l(u), e = r === "" ? "." + Pl(u, 0) : r, qu(l) ? (n = "", e != null && (n = e.replace(bu, "$&/") + "/"), xr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (Zo(l) && (l = Vc(l, n + (!l.key || u && u.key === l.key ? "" : ("" + l.key).replace(bu, "$&/") + "/") + e)), t.push(l)), 1;
  if (u = 0, r = r === "" ? "." : r + ":", qu(e)) for (var i = 0; i < e.length; i++) {
    o = e[i];
    var s = r + Pl(o, i);
    u += xr(o, t, n, s, l);
  }
  else if (s = Hc(e), typeof s == "function") for (e = s.call(e), i = 0; !(o = e.next()).done; ) o = o.value, s = r + Pl(o, i++), u += xr(o, t, n, s, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return u;
}
function sr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return xr(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function Wc(e) {
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
var fe = { current: null }, Pr = { transition: null }, Kc = { ReactCurrentDispatcher: fe, ReactCurrentBatchConfig: Pr, ReactCurrentOwner: Go };
function ys() {
  throw Error("act(...) is not supported in production builds of React.");
}
R.Children = { map: sr, forEach: function(e, t, n) {
  sr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return sr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return sr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Zo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
R.Component = pn;
R.Fragment = Ic;
R.Profiler = Dc;
R.PureComponent = Yo;
R.StrictMode = Oc;
R.Suspense = Uc;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kc;
R.act = ys;
R.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = fs({}, e.props), l = e.key, o = e.ref, u = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, u = Go.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (s in t) ms.call(t, s) && !hs.hasOwnProperty(s) && (r[s] = t[s] === void 0 && i !== void 0 ? i[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    i = Array(s);
    for (var c = 0; c < s; c++) i[c] = arguments[c + 2];
    r.children = i;
  }
  return { $$typeof: tr, type: e.type, key: l, ref: o, props: r, _owner: u };
};
R.createContext = function(e) {
  return e = { $$typeof: Fc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Mc, _context: e }, e.Consumer = e;
};
R.createElement = vs;
R.createFactory = function(e) {
  var t = vs.bind(null, e);
  return t.type = e, t;
};
R.createRef = function() {
  return { current: null };
};
R.forwardRef = function(e) {
  return { $$typeof: jc, render: e };
};
R.isValidElement = Zo;
R.lazy = function(e) {
  return { $$typeof: $c, _payload: { _status: -1, _result: e }, _init: Wc };
};
R.memo = function(e, t) {
  return { $$typeof: Bc, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function(e) {
  var t = Pr.transition;
  Pr.transition = {};
  try {
    e();
  } finally {
    Pr.transition = t;
  }
};
R.unstable_act = ys;
R.useCallback = function(e, t) {
  return fe.current.useCallback(e, t);
};
R.useContext = function(e) {
  return fe.current.useContext(e);
};
R.useDebugValue = function() {
};
R.useDeferredValue = function(e) {
  return fe.current.useDeferredValue(e);
};
R.useEffect = function(e, t) {
  return fe.current.useEffect(e, t);
};
R.useId = function() {
  return fe.current.useId();
};
R.useImperativeHandle = function(e, t, n) {
  return fe.current.useImperativeHandle(e, t, n);
};
R.useInsertionEffect = function(e, t) {
  return fe.current.useInsertionEffect(e, t);
};
R.useLayoutEffect = function(e, t) {
  return fe.current.useLayoutEffect(e, t);
};
R.useMemo = function(e, t) {
  return fe.current.useMemo(e, t);
};
R.useReducer = function(e, t, n) {
  return fe.current.useReducer(e, t, n);
};
R.useRef = function(e) {
  return fe.current.useRef(e);
};
R.useState = function(e) {
  return fe.current.useState(e);
};
R.useSyncExternalStore = function(e, t, n) {
  return fe.current.useSyncExternalStore(e, t, n);
};
R.useTransition = function() {
  return fe.current.useTransition();
};
R.version = "18.3.1";
as.exports = R;
var ie = as.exports;
const _ = /* @__PURE__ */ Ko(ie);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yc = ie, Xc = Symbol.for("react.element"), Gc = Symbol.for("react.fragment"), Zc = Object.prototype.hasOwnProperty, Jc = Yc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, qc = { key: !0, ref: !0, __self: !0, __source: !0 };
function gs(e, t, n) {
  var r, l = {}, o = null, u = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (u = t.ref);
  for (r in t) Zc.call(t, r) && !qc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Xc, type: e, key: o, ref: u, props: l, _owner: Jc.current };
}
il.Fragment = Gc;
il.jsx = gs;
il.jsxs = gs;
ss.exports = il;
var oe = ss.exports, ws = { exports: {} }, _e = {}, ks = { exports: {} }, Ss = {};
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
  function t(P, T) {
    var L = P.length;
    P.push(T);
    e: for (; 0 < L; ) {
      var W = L - 1 >>> 1, Z = P[W];
      if (0 < l(Z, T)) P[W] = T, P[L] = Z, L = W;
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var T = P[0], L = P.pop();
    if (L !== T) {
      P[0] = L;
      e: for (var W = 0, Z = P.length, ur = Z >>> 1; W < ur; ) {
        var St = 2 * (W + 1) - 1, xl = P[St], Et = St + 1, ir = P[Et];
        if (0 > l(xl, L)) Et < Z && 0 > l(ir, xl) ? (P[W] = ir, P[Et] = L, W = Et) : (P[W] = xl, P[St] = L, W = St);
        else if (Et < Z && 0 > l(ir, L)) P[W] = ir, P[Et] = L, W = Et;
        else break e;
      }
    }
    return T;
  }
  function l(P, T) {
    var L = P.sortIndex - T.sortIndex;
    return L !== 0 ? L : P.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var u = Date, i = u.now();
    e.unstable_now = function() {
      return u.now() - i;
    };
  }
  var s = [], c = [], m = 1, h = null, p = 3, g = !1, w = !1, k = !1, D = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(P) {
    for (var T = n(c); T !== null; ) {
      if (T.callback === null) r(c);
      else if (T.startTime <= P) r(c), T.sortIndex = T.expirationTime, t(s, T);
      else break;
      T = n(c);
    }
  }
  function v(P) {
    if (k = !1, d(P), !w) if (n(s) !== null) w = !0, _l(S);
    else {
      var T = n(c);
      T !== null && Cl(v, T.startTime - P);
    }
  }
  function S(P, T) {
    w = !1, k && (k = !1, f(A), A = -1), g = !0;
    var L = p;
    try {
      for (d(T), h = n(s); h !== null && (!(h.expirationTime > T) || P && !ge()); ) {
        var W = h.callback;
        if (typeof W == "function") {
          h.callback = null, p = h.priorityLevel;
          var Z = W(h.expirationTime <= T);
          T = e.unstable_now(), typeof Z == "function" ? h.callback = Z : h === n(s) && r(s), d(T);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var ur = !0;
      else {
        var St = n(c);
        St !== null && Cl(v, St.startTime - T), ur = !1;
      }
      return ur;
    } finally {
      h = null, p = L, g = !1;
    }
  }
  var x = !1, N = null, A = -1, M = 5, z = -1;
  function ge() {
    return !(e.unstable_now() - z < M);
  }
  function Qe() {
    if (N !== null) {
      var P = e.unstable_now();
      z = P;
      var T = !0;
      try {
        T = N(!0, P);
      } finally {
        T ? vn() : (x = !1, N = null);
      }
    } else x = !1;
  }
  var vn;
  if (typeof a == "function") vn = function() {
    a(Qe);
  };
  else if (typeof MessageChannel < "u") {
    var Gu = new MessageChannel(), Tc = Gu.port2;
    Gu.port1.onmessage = Qe, vn = function() {
      Tc.postMessage(null);
    };
  } else vn = function() {
    D(Qe, 0);
  };
  function _l(P) {
    N = P, x || (x = !0, vn());
  }
  function Cl(P, T) {
    A = D(function() {
      P(e.unstable_now());
    }, T);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, _l(S));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(P) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var T = 3;
        break;
      default:
        T = p;
    }
    var L = p;
    p = T;
    try {
      return P();
    } finally {
      p = L;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, T) {
    switch (P) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        P = 3;
    }
    var L = p;
    p = P;
    try {
      return T();
    } finally {
      p = L;
    }
  }, e.unstable_scheduleCallback = function(P, T, L) {
    var W = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? W + L : W) : L = W, P) {
      case 1:
        var Z = -1;
        break;
      case 2:
        Z = 250;
        break;
      case 5:
        Z = 1073741823;
        break;
      case 4:
        Z = 1e4;
        break;
      default:
        Z = 5e3;
    }
    return Z = L + Z, P = { id: m++, callback: T, priorityLevel: P, startTime: L, expirationTime: Z, sortIndex: -1 }, L > W ? (P.sortIndex = L, t(c, P), n(s) === null && P === n(c) && (k ? (f(A), A = -1) : k = !0, Cl(v, L - W))) : (P.sortIndex = Z, t(s, P), w || g || (w = !0, _l(S))), P;
  }, e.unstable_shouldYield = ge, e.unstable_wrapCallback = function(P) {
    var T = p;
    return function() {
      var L = p;
      p = T;
      try {
        return P.apply(this, arguments);
      } finally {
        p = L;
      }
    };
  };
})(Ss);
ks.exports = Ss;
var bc = ks.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ef = ie, Ee = bc;
function y(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Es = /* @__PURE__ */ new Set(), jn = {};
function Dt(e, t) {
  ln(e, t), ln(e + "Capture", t);
}
function ln(e, t) {
  for (jn[e] = t, e = 0; e < t.length; e++) Es.add(t[e]);
}
var Ze = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), bl = Object.prototype.hasOwnProperty, tf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ei = {}, ti = {};
function nf(e) {
  return bl.call(ti, e) ? !0 : bl.call(ei, e) ? !1 : tf.test(e) ? ti[e] = !0 : (ei[e] = !0, !1);
}
function rf(e, t, n, r) {
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
function lf(e, t, n, r) {
  if (t === null || typeof t > "u" || rf(e, t, n, r)) return !0;
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
function de(e, t, n, r, l, o, u) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = u;
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ne[e] = new de(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ne[t] = new de(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ne[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ne[e] = new de(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ne[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ne[e] = new de(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ne[e] = new de(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ne[e] = new de(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ne[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Jo = /[\-:]([a-z])/g;
function qo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Jo,
    qo
  );
  ne[t] = new de(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Jo, qo);
  ne[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Jo, qo);
  ne[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ne[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new de("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ne[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bo(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (lf(t, n, l, r) && (n = null), r || l === null ? nf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var et = ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ar = Symbol.for("react.element"), Ut = Symbol.for("react.portal"), Bt = Symbol.for("react.fragment"), eu = Symbol.for("react.strict_mode"), eo = Symbol.for("react.profiler"), _s = Symbol.for("react.provider"), Cs = Symbol.for("react.context"), tu = Symbol.for("react.forward_ref"), to = Symbol.for("react.suspense"), no = Symbol.for("react.suspense_list"), nu = Symbol.for("react.memo"), nt = Symbol.for("react.lazy"), xs = Symbol.for("react.offscreen"), ni = Symbol.iterator;
function yn(e) {
  return e === null || typeof e != "object" ? null : (e = ni && e[ni] || e["@@iterator"], typeof e == "function" ? e : null);
}
var V = Object.assign, Nl;
function xn(e) {
  if (Nl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Nl = t && t[1] || "";
  }
  return `
` + Nl + e;
}
var Al = !1;
function Tl(e, t) {
  if (!e || Al) return "";
  Al = !0;
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
      } catch (c) {
        var r = c;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (c) {
        r = c;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var l = c.stack.split(`
`), o = r.stack.split(`
`), u = l.length - 1, i = o.length - 1; 1 <= u && 0 <= i && l[u] !== o[i]; ) i--;
      for (; 1 <= u && 0 <= i; u--, i--) if (l[u] !== o[i]) {
        if (u !== 1 || i !== 1)
          do
            if (u--, i--, 0 > i || l[u] !== o[i]) {
              var s = `
` + l[u].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= u && 0 <= i);
        break;
      }
    }
  } finally {
    Al = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? xn(e) : "";
}
function of(e) {
  switch (e.tag) {
    case 5:
      return xn(e.type);
    case 16:
      return xn("Lazy");
    case 13:
      return xn("Suspense");
    case 19:
      return xn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Tl(e.type, !1), e;
    case 11:
      return e = Tl(e.type.render, !1), e;
    case 1:
      return e = Tl(e.type, !0), e;
    default:
      return "";
  }
}
function ro(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Bt:
      return "Fragment";
    case Ut:
      return "Portal";
    case eo:
      return "Profiler";
    case eu:
      return "StrictMode";
    case to:
      return "Suspense";
    case no:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Cs:
      return (e.displayName || "Context") + ".Consumer";
    case _s:
      return (e._context.displayName || "Context") + ".Provider";
    case tu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case nu:
      return t = e.displayName || null, t !== null ? t : ro(e.type) || "Memo";
    case nt:
      t = e._payload, e = e._init;
      try {
        return ro(e(t));
      } catch {
      }
  }
  return null;
}
function uf(e) {
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
      return ro(t);
    case 8:
      return t === eu ? "StrictMode" : "Mode";
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
function vt(e) {
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
function Ps(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function sf(e) {
  var t = Ps(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(u) {
      r = "" + u, o.call(this, u);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(u) {
      r = "" + u;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function cr(e) {
  e._valueTracker || (e._valueTracker = sf(e));
}
function Ns(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ps(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Fr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function lo(e, t) {
  var n = t.checked;
  return V({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ri(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = vt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function As(e, t) {
  t = t.checked, t != null && bo(e, "checked", t, !1);
}
function oo(e, t) {
  As(e, t);
  var n = vt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? uo(e, t.type, n) : t.hasOwnProperty("defaultValue") && uo(e, t.type, vt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function li(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function uo(e, t, n) {
  (t !== "number" || Fr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Pn = Array.isArray;
function qt(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + vt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function io(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return V({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function oi(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(y(92));
      if (Pn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: vt(n) };
}
function Ts(e, t) {
  var n = vt(t.value), r = vt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ui(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function zs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function so(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? zs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var fr, Ls = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (fr = fr || document.createElement("div"), fr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = fr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Un(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Tn = {
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
}, af = ["Webkit", "ms", "Moz", "O"];
Object.keys(Tn).forEach(function(e) {
  af.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Tn[t] = Tn[e];
  });
});
function Rs(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Tn.hasOwnProperty(e) && Tn[e] ? ("" + t).trim() : t + "px";
}
function Is(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Rs(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var cf = V({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ao(e, t) {
  if (t) {
    if (cf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function co(e, t) {
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
var fo = null;
function ru(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var po = null, bt = null, en = null;
function ii(e) {
  if (e = lr(e)) {
    if (typeof po != "function") throw Error(y(280));
    var t = e.stateNode;
    t && (t = dl(t), po(e.stateNode, e.type, t));
  }
}
function Os(e) {
  bt ? en ? en.push(e) : en = [e] : bt = e;
}
function Ds() {
  if (bt) {
    var e = bt, t = en;
    if (en = bt = null, ii(e), t) for (e = 0; e < t.length; e++) ii(t[e]);
  }
}
function Ms(e, t) {
  return e(t);
}
function Fs() {
}
var zl = !1;
function js(e, t, n) {
  if (zl) return e(t, n);
  zl = !0;
  try {
    return Ms(e, t, n);
  } finally {
    zl = !1, (bt !== null || en !== null) && (Fs(), Ds());
  }
}
function Bn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = dl(n);
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
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var mo = !1;
if (Ze) try {
  var gn = {};
  Object.defineProperty(gn, "passive", { get: function() {
    mo = !0;
  } }), window.addEventListener("test", gn, gn), window.removeEventListener("test", gn, gn);
} catch {
  mo = !1;
}
function ff(e, t, n, r, l, o, u, i, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var zn = !1, jr = null, Ur = !1, ho = null, df = { onError: function(e) {
  zn = !0, jr = e;
} };
function pf(e, t, n, r, l, o, u, i, s) {
  zn = !1, jr = null, ff.apply(df, arguments);
}
function mf(e, t, n, r, l, o, u, i, s) {
  if (pf.apply(this, arguments), zn) {
    if (zn) {
      var c = jr;
      zn = !1, jr = null;
    } else throw Error(y(198));
    Ur || (Ur = !0, ho = c);
  }
}
function Mt(e) {
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
function Us(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function si(e) {
  if (Mt(e) !== e) throw Error(y(188));
}
function hf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Mt(e), t === null) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return si(l), e;
        if (o === r) return si(l), t;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) n = l, r = o;
    else {
      for (var u = !1, i = l.child; i; ) {
        if (i === n) {
          u = !0, n = l, r = o;
          break;
        }
        if (i === r) {
          u = !0, r = l, n = o;
          break;
        }
        i = i.sibling;
      }
      if (!u) {
        for (i = o.child; i; ) {
          if (i === n) {
            u = !0, n = o, r = l;
            break;
          }
          if (i === r) {
            u = !0, r = o, n = l;
            break;
          }
          i = i.sibling;
        }
        if (!u) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Bs(e) {
  return e = hf(e), e !== null ? $s(e) : null;
}
function $s(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = $s(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Hs = Ee.unstable_scheduleCallback, ai = Ee.unstable_cancelCallback, vf = Ee.unstable_shouldYield, yf = Ee.unstable_requestPaint, K = Ee.unstable_now, gf = Ee.unstable_getCurrentPriorityLevel, lu = Ee.unstable_ImmediatePriority, Vs = Ee.unstable_UserBlockingPriority, Br = Ee.unstable_NormalPriority, wf = Ee.unstable_LowPriority, Qs = Ee.unstable_IdlePriority, sl = null, He = null;
function kf(e) {
  if (He && typeof He.onCommitFiberRoot == "function") try {
    He.onCommitFiberRoot(sl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var De = Math.clz32 ? Math.clz32 : _f, Sf = Math.log, Ef = Math.LN2;
function _f(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Sf(e) / Ef | 0) | 0;
}
var dr = 64, pr = 4194304;
function Nn(e) {
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
function $r(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, u = n & 268435455;
  if (u !== 0) {
    var i = u & ~l;
    i !== 0 ? r = Nn(i) : (o &= u, o !== 0 && (r = Nn(o)));
  } else u = n & ~l, u !== 0 ? r = Nn(u) : o !== 0 && (r = Nn(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - De(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Cf(e, t) {
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
function xf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var u = 31 - De(o), i = 1 << u, s = l[u];
    s === -1 ? (!(i & n) || i & r) && (l[u] = Cf(i, t)) : s <= t && (e.expiredLanes |= i), o &= ~i;
  }
}
function vo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ws() {
  var e = dr;
  return dr <<= 1, !(dr & 4194240) && (dr = 64), e;
}
function Ll(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function nr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - De(t), e[t] = n;
}
function Pf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - De(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function ou(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - De(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var O = 0;
function Ks(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ys, uu, Xs, Gs, Zs, yo = !1, mr = [], st = null, at = null, ct = null, $n = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), lt = [], Nf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ci(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      st = null;
      break;
    case "dragenter":
    case "dragleave":
      at = null;
      break;
    case "mouseover":
    case "mouseout":
      ct = null;
      break;
    case "pointerover":
    case "pointerout":
      $n.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Hn.delete(t.pointerId);
  }
}
function wn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = lr(t), t !== null && uu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Af(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return st = wn(st, e, t, n, r, l), !0;
    case "dragenter":
      return at = wn(at, e, t, n, r, l), !0;
    case "mouseover":
      return ct = wn(ct, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return $n.set(o, wn($n.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Hn.set(o, wn(Hn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Js(e) {
  var t = xt(e.target);
  if (t !== null) {
    var n = Mt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Us(n), t !== null) {
          e.blockedOn = t, Zs(e.priority, function() {
            Xs(n);
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
function Nr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = go(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      fo = r, n.target.dispatchEvent(r), fo = null;
    } else return t = lr(n), t !== null && uu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function fi(e, t, n) {
  Nr(e) && n.delete(t);
}
function Tf() {
  yo = !1, st !== null && Nr(st) && (st = null), at !== null && Nr(at) && (at = null), ct !== null && Nr(ct) && (ct = null), $n.forEach(fi), Hn.forEach(fi);
}
function kn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, yo || (yo = !0, Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, Tf)));
}
function Vn(e) {
  function t(l) {
    return kn(l, e);
  }
  if (0 < mr.length) {
    kn(mr[0], e);
    for (var n = 1; n < mr.length; n++) {
      var r = mr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (st !== null && kn(st, e), at !== null && kn(at, e), ct !== null && kn(ct, e), $n.forEach(t), Hn.forEach(t), n = 0; n < lt.length; n++) r = lt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < lt.length && (n = lt[0], n.blockedOn === null); ) Js(n), n.blockedOn === null && lt.shift();
}
var tn = et.ReactCurrentBatchConfig, Hr = !0;
function zf(e, t, n, r) {
  var l = O, o = tn.transition;
  tn.transition = null;
  try {
    O = 1, iu(e, t, n, r);
  } finally {
    O = l, tn.transition = o;
  }
}
function Lf(e, t, n, r) {
  var l = O, o = tn.transition;
  tn.transition = null;
  try {
    O = 4, iu(e, t, n, r);
  } finally {
    O = l, tn.transition = o;
  }
}
function iu(e, t, n, r) {
  if (Hr) {
    var l = go(e, t, n, r);
    if (l === null) $l(e, t, r, Vr, n), ci(e, r);
    else if (Af(l, e, t, n, r)) r.stopPropagation();
    else if (ci(e, r), t & 4 && -1 < Nf.indexOf(e)) {
      for (; l !== null; ) {
        var o = lr(l);
        if (o !== null && Ys(o), o = go(e, t, n, r), o === null && $l(e, t, r, Vr, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else $l(e, t, r, null, n);
  }
}
var Vr = null;
function go(e, t, n, r) {
  if (Vr = null, e = ru(r), e = xt(e), e !== null) if (t = Mt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Us(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Vr = e, null;
}
function qs(e) {
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
      switch (gf()) {
        case lu:
          return 1;
        case Vs:
          return 4;
        case Br:
        case wf:
          return 16;
        case Qs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ut = null, su = null, Ar = null;
function bs() {
  if (Ar) return Ar;
  var e, t = su, n = t.length, r, l = "value" in ut ? ut.value : ut.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var u = n - e;
  for (r = 1; r <= u && t[n - r] === l[o - r]; r++) ;
  return Ar = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Tr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function hr() {
  return !0;
}
function di() {
  return !1;
}
function Ce(e) {
  function t(n, r, l, o, u) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = u, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(o) : o[i]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? hr : di, this.isPropagationStopped = di, this;
  }
  return V(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = hr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = hr);
  }, persist: function() {
  }, isPersistent: hr }), t;
}
var mn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, au = Ce(mn), rr = V({}, mn, { view: 0, detail: 0 }), Rf = Ce(rr), Rl, Il, Sn, al = V({}, rr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: cu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Sn && (Sn && e.type === "mousemove" ? (Rl = e.screenX - Sn.screenX, Il = e.screenY - Sn.screenY) : Il = Rl = 0, Sn = e), Rl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Il;
} }), pi = Ce(al), If = V({}, al, { dataTransfer: 0 }), Of = Ce(If), Df = V({}, rr, { relatedTarget: 0 }), Ol = Ce(Df), Mf = V({}, mn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ff = Ce(Mf), jf = V({}, mn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Uf = Ce(jf), Bf = V({}, mn, { data: 0 }), mi = Ce(Bf), $f = {
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
}, Hf = {
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
}, Vf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Qf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Vf[e]) ? !!t[e] : !1;
}
function cu() {
  return Qf;
}
var Wf = V({}, rr, { key: function(e) {
  if (e.key) {
    var t = $f[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Tr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Hf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: cu, charCode: function(e) {
  return e.type === "keypress" ? Tr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Tr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Kf = Ce(Wf), Yf = V({}, al, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), hi = Ce(Yf), Xf = V({}, rr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: cu }), Gf = Ce(Xf), Zf = V({}, mn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Jf = Ce(Zf), qf = V({}, al, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), bf = Ce(qf), ed = [9, 13, 27, 32], fu = Ze && "CompositionEvent" in window, Ln = null;
Ze && "documentMode" in document && (Ln = document.documentMode);
var td = Ze && "TextEvent" in window && !Ln, ea = Ze && (!fu || Ln && 8 < Ln && 11 >= Ln), vi = " ", yi = !1;
function ta(e, t) {
  switch (e) {
    case "keyup":
      return ed.indexOf(t.keyCode) !== -1;
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
function na(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var $t = !1;
function nd(e, t) {
  switch (e) {
    case "compositionend":
      return na(t);
    case "keypress":
      return t.which !== 32 ? null : (yi = !0, vi);
    case "textInput":
      return e = t.data, e === vi && yi ? null : e;
    default:
      return null;
  }
}
function rd(e, t) {
  if ($t) return e === "compositionend" || !fu && ta(e, t) ? (e = bs(), Ar = su = ut = null, $t = !1, e) : null;
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
      return ea && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ld = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function gi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ld[e.type] : t === "textarea";
}
function ra(e, t, n, r) {
  Os(r), t = Qr(t, "onChange"), 0 < t.length && (n = new au("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Rn = null, Qn = null;
function od(e) {
  ma(e, 0);
}
function cl(e) {
  var t = Qt(e);
  if (Ns(t)) return e;
}
function ud(e, t) {
  if (e === "change") return t;
}
var la = !1;
if (Ze) {
  var Dl;
  if (Ze) {
    var Ml = "oninput" in document;
    if (!Ml) {
      var wi = document.createElement("div");
      wi.setAttribute("oninput", "return;"), Ml = typeof wi.oninput == "function";
    }
    Dl = Ml;
  } else Dl = !1;
  la = Dl && (!document.documentMode || 9 < document.documentMode);
}
function ki() {
  Rn && (Rn.detachEvent("onpropertychange", oa), Qn = Rn = null);
}
function oa(e) {
  if (e.propertyName === "value" && cl(Qn)) {
    var t = [];
    ra(t, Qn, e, ru(e)), js(od, t);
  }
}
function id(e, t, n) {
  e === "focusin" ? (ki(), Rn = t, Qn = n, Rn.attachEvent("onpropertychange", oa)) : e === "focusout" && ki();
}
function sd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return cl(Qn);
}
function ad(e, t) {
  if (e === "click") return cl(t);
}
function cd(e, t) {
  if (e === "input" || e === "change") return cl(t);
}
function fd(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var je = typeof Object.is == "function" ? Object.is : fd;
function Wn(e, t) {
  if (je(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!bl.call(t, l) || !je(e[l], t[l])) return !1;
  }
  return !0;
}
function Si(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ei(e, t) {
  var n = Si(e);
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
    n = Si(n);
  }
}
function ua(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ua(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ia() {
  for (var e = window, t = Fr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Fr(e.document);
  }
  return t;
}
function du(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function dd(e) {
  var t = ia(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ua(n.ownerDocument.documentElement, n)) {
    if (r !== null && du(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Ei(n, o);
        var u = Ei(
          n,
          r
        );
        l && u && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(u.node, u.offset)) : (t.setEnd(u.node, u.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var pd = Ze && "documentMode" in document && 11 >= document.documentMode, Ht = null, wo = null, In = null, ko = !1;
function _i(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ko || Ht == null || Ht !== Fr(r) || (r = Ht, "selectionStart" in r && du(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), In && Wn(In, r) || (In = r, r = Qr(wo, "onSelect"), 0 < r.length && (t = new au("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ht)));
}
function vr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Vt = { animationend: vr("Animation", "AnimationEnd"), animationiteration: vr("Animation", "AnimationIteration"), animationstart: vr("Animation", "AnimationStart"), transitionend: vr("Transition", "TransitionEnd") }, Fl = {}, sa = {};
Ze && (sa = document.createElement("div").style, "AnimationEvent" in window || (delete Vt.animationend.animation, delete Vt.animationiteration.animation, delete Vt.animationstart.animation), "TransitionEvent" in window || delete Vt.transitionend.transition);
function fl(e) {
  if (Fl[e]) return Fl[e];
  if (!Vt[e]) return e;
  var t = Vt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in sa) return Fl[e] = t[n];
  return e;
}
var aa = fl("animationend"), ca = fl("animationiteration"), fa = fl("animationstart"), da = fl("transitionend"), pa = /* @__PURE__ */ new Map(), Ci = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function gt(e, t) {
  pa.set(e, t), Dt(t, [e]);
}
for (var jl = 0; jl < Ci.length; jl++) {
  var Ul = Ci[jl], md = Ul.toLowerCase(), hd = Ul[0].toUpperCase() + Ul.slice(1);
  gt(md, "on" + hd);
}
gt(aa, "onAnimationEnd");
gt(ca, "onAnimationIteration");
gt(fa, "onAnimationStart");
gt("dblclick", "onDoubleClick");
gt("focusin", "onFocus");
gt("focusout", "onBlur");
gt(da, "onTransitionEnd");
ln("onMouseEnter", ["mouseout", "mouseover"]);
ln("onMouseLeave", ["mouseout", "mouseover"]);
ln("onPointerEnter", ["pointerout", "pointerover"]);
ln("onPointerLeave", ["pointerout", "pointerover"]);
Dt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Dt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Dt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Dt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var An = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), vd = new Set("cancel close invalid load scroll toggle".split(" ").concat(An));
function xi(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, mf(r, t, void 0, e), e.currentTarget = null;
}
function ma(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var u = r.length - 1; 0 <= u; u--) {
        var i = r[u], s = i.instance, c = i.currentTarget;
        if (i = i.listener, s !== o && l.isPropagationStopped()) break e;
        xi(l, i, c), o = s;
      }
      else for (u = 0; u < r.length; u++) {
        if (i = r[u], s = i.instance, c = i.currentTarget, i = i.listener, s !== o && l.isPropagationStopped()) break e;
        xi(l, i, c), o = s;
      }
    }
  }
  if (Ur) throw e = ho, Ur = !1, ho = null, e;
}
function j(e, t) {
  var n = t[xo];
  n === void 0 && (n = t[xo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ha(t, e, 2, !1), n.add(r));
}
function Bl(e, t, n) {
  var r = 0;
  t && (r |= 4), ha(n, e, r, t);
}
var yr = "_reactListening" + Math.random().toString(36).slice(2);
function Kn(e) {
  if (!e[yr]) {
    e[yr] = !0, Es.forEach(function(n) {
      n !== "selectionchange" && (vd.has(n) || Bl(n, !1, e), Bl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[yr] || (t[yr] = !0, Bl("selectionchange", !1, t));
  }
}
function ha(e, t, n, r) {
  switch (qs(t)) {
    case 1:
      var l = zf;
      break;
    case 4:
      l = Lf;
      break;
    default:
      l = iu;
  }
  n = l.bind(null, t, n, e), l = void 0, !mo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function $l(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var u = r.tag;
    if (u === 3 || u === 4) {
      var i = r.stateNode.containerInfo;
      if (i === l || i.nodeType === 8 && i.parentNode === l) break;
      if (u === 4) for (u = r.return; u !== null; ) {
        var s = u.tag;
        if ((s === 3 || s === 4) && (s = u.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        u = u.return;
      }
      for (; i !== null; ) {
        if (u = xt(i), u === null) return;
        if (s = u.tag, s === 5 || s === 6) {
          r = o = u;
          continue e;
        }
        i = i.parentNode;
      }
    }
    r = r.return;
  }
  js(function() {
    var c = o, m = ru(n), h = [];
    e: {
      var p = pa.get(e);
      if (p !== void 0) {
        var g = au, w = e;
        switch (e) {
          case "keypress":
            if (Tr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Kf;
            break;
          case "focusin":
            w = "focus", g = Ol;
            break;
          case "focusout":
            w = "blur", g = Ol;
            break;
          case "beforeblur":
          case "afterblur":
            g = Ol;
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
            g = pi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Of;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Gf;
            break;
          case aa:
          case ca:
          case fa:
            g = Ff;
            break;
          case da:
            g = Jf;
            break;
          case "scroll":
            g = Rf;
            break;
          case "wheel":
            g = bf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Uf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = hi;
        }
        var k = (t & 4) !== 0, D = !k && e === "scroll", f = k ? p !== null ? p + "Capture" : null : p;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = Bn(a, f), v != null && k.push(Yn(a, v, d)))), D) break;
          a = a.return;
        }
        0 < k.length && (p = new g(p, w, null, n, m), h.push({ event: p, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && n !== fo && (w = n.relatedTarget || n.fromElement) && (xt(w) || w[Je])) break e;
        if ((g || p) && (p = m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = c, w = w ? xt(w) : null, w !== null && (D = Mt(w), w !== D || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = c), g !== w)) {
          if (k = pi, v = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (k = hi, v = "onPointerLeave", f = "onPointerEnter", a = "pointer"), D = g == null ? p : Qt(g), d = w == null ? p : Qt(w), p = new k(v, a + "leave", g, n, m), p.target = D, p.relatedTarget = d, v = null, xt(m) === c && (k = new k(f, a + "enter", w, n, m), k.target = d, k.relatedTarget = D, v = k), D = v, g && w) t: {
            for (k = g, f = w, a = 0, d = k; d; d = jt(d)) a++;
            for (d = 0, v = f; v; v = jt(v)) d++;
            for (; 0 < a - d; ) k = jt(k), a--;
            for (; 0 < d - a; ) f = jt(f), d--;
            for (; a--; ) {
              if (k === f || f !== null && k === f.alternate) break t;
              k = jt(k), f = jt(f);
            }
            k = null;
          }
          else k = null;
          g !== null && Pi(h, p, g, k, !1), w !== null && D !== null && Pi(h, D, w, k, !0);
        }
      }
      e: {
        if (p = c ? Qt(c) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file") var S = ud;
        else if (gi(p)) if (la) S = cd;
        else {
          S = sd;
          var x = id;
        }
        else (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (S = ad);
        if (S && (S = S(e, c))) {
          ra(h, S, n, m);
          break e;
        }
        x && x(e, p, c), e === "focusout" && (x = p._wrapperState) && x.controlled && p.type === "number" && uo(p, "number", p.value);
      }
      switch (x = c ? Qt(c) : window, e) {
        case "focusin":
          (gi(x) || x.contentEditable === "true") && (Ht = x, wo = c, In = null);
          break;
        case "focusout":
          In = wo = Ht = null;
          break;
        case "mousedown":
          ko = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ko = !1, _i(h, n, m);
          break;
        case "selectionchange":
          if (pd) break;
        case "keydown":
        case "keyup":
          _i(h, n, m);
      }
      var N;
      if (fu) e: {
        switch (e) {
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
      else $t ? ta(e, n) && (A = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      A && (ea && n.locale !== "ko" && ($t || A !== "onCompositionStart" ? A === "onCompositionEnd" && $t && (N = bs()) : (ut = m, su = "value" in ut ? ut.value : ut.textContent, $t = !0)), x = Qr(c, A), 0 < x.length && (A = new mi(A, e, null, n, m), h.push({ event: A, listeners: x }), N ? A.data = N : (N = na(n), N !== null && (A.data = N)))), (N = td ? nd(e, n) : rd(e, n)) && (c = Qr(c, "onBeforeInput"), 0 < c.length && (m = new mi("onBeforeInput", "beforeinput", null, n, m), h.push({ event: m, listeners: c }), m.data = N));
    }
    ma(h, t);
  });
}
function Yn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Qr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Bn(e, n), o != null && r.unshift(Yn(e, o, l)), o = Bn(e, t), o != null && r.push(Yn(e, o, l))), e = e.return;
  }
  return r;
}
function jt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Pi(e, t, n, r, l) {
  for (var o = t._reactName, u = []; n !== null && n !== r; ) {
    var i = n, s = i.alternate, c = i.stateNode;
    if (s !== null && s === r) break;
    i.tag === 5 && c !== null && (i = c, l ? (s = Bn(n, o), s != null && u.unshift(Yn(n, s, i))) : l || (s = Bn(n, o), s != null && u.push(Yn(n, s, i)))), n = n.return;
  }
  u.length !== 0 && e.push({ event: t, listeners: u });
}
var yd = /\r\n?/g, gd = /\u0000|\uFFFD/g;
function Ni(e) {
  return (typeof e == "string" ? e : "" + e).replace(yd, `
`).replace(gd, "");
}
function gr(e, t, n) {
  if (t = Ni(t), Ni(e) !== t && n) throw Error(y(425));
}
function Wr() {
}
var So = null, Eo = null;
function _o(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Co = typeof setTimeout == "function" ? setTimeout : void 0, wd = typeof clearTimeout == "function" ? clearTimeout : void 0, Ai = typeof Promise == "function" ? Promise : void 0, kd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ai < "u" ? function(e) {
  return Ai.resolve(null).then(e).catch(Sd);
} : Co;
function Sd(e) {
  setTimeout(function() {
    throw e;
  });
}
function Hl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Vn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Vn(t);
}
function ft(e) {
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
function Ti(e) {
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
var hn = Math.random().toString(36).slice(2), $e = "__reactFiber$" + hn, Xn = "__reactProps$" + hn, Je = "__reactContainer$" + hn, xo = "__reactEvents$" + hn, Ed = "__reactListeners$" + hn, _d = "__reactHandles$" + hn;
function xt(e) {
  var t = e[$e];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Je] || n[$e]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ti(e); e !== null; ) {
        if (n = e[$e]) return n;
        e = Ti(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function lr(e) {
  return e = e[$e] || e[Je], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Qt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function dl(e) {
  return e[Xn] || null;
}
var Po = [], Wt = -1;
function wt(e) {
  return { current: e };
}
function U(e) {
  0 > Wt || (e.current = Po[Wt], Po[Wt] = null, Wt--);
}
function F(e, t) {
  Wt++, Po[Wt] = e.current, e.current = t;
}
var yt = {}, se = wt(yt), he = wt(!1), zt = yt;
function on(e, t) {
  var n = e.type.contextTypes;
  if (!n) return yt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function ve(e) {
  return e = e.childContextTypes, e != null;
}
function Kr() {
  U(he), U(se);
}
function zi(e, t, n) {
  if (se.current !== yt) throw Error(y(168));
  F(se, t), F(he, n);
}
function va(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, uf(e) || "Unknown", l));
  return V({}, n, r);
}
function Yr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || yt, zt = se.current, F(se, e), F(he, he.current), !0;
}
function Li(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n ? (e = va(e, t, zt), r.__reactInternalMemoizedMergedChildContext = e, U(he), U(se), F(se, e)) : U(he), F(he, n);
}
var Ke = null, pl = !1, Vl = !1;
function ya(e) {
  Ke === null ? Ke = [e] : Ke.push(e);
}
function Cd(e) {
  pl = !0, ya(e);
}
function kt() {
  if (!Vl && Ke !== null) {
    Vl = !0;
    var e = 0, t = O;
    try {
      var n = Ke;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ke = null, pl = !1;
    } catch (l) {
      throw Ke !== null && (Ke = Ke.slice(e + 1)), Hs(lu, kt), l;
    } finally {
      O = t, Vl = !1;
    }
  }
  return null;
}
var Kt = [], Yt = 0, Xr = null, Gr = 0, xe = [], Pe = 0, Lt = null, Ye = 1, Xe = "";
function _t(e, t) {
  Kt[Yt++] = Gr, Kt[Yt++] = Xr, Xr = e, Gr = t;
}
function ga(e, t, n) {
  xe[Pe++] = Ye, xe[Pe++] = Xe, xe[Pe++] = Lt, Lt = e;
  var r = Ye;
  e = Xe;
  var l = 32 - De(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - De(t) + l;
  if (30 < o) {
    var u = l - l % 5;
    o = (r & (1 << u) - 1).toString(32), r >>= u, l -= u, Ye = 1 << 32 - De(t) + l | n << l | r, Xe = o + e;
  } else Ye = 1 << o | n << l | r, Xe = e;
}
function pu(e) {
  e.return !== null && (_t(e, 1), ga(e, 1, 0));
}
function mu(e) {
  for (; e === Xr; ) Xr = Kt[--Yt], Kt[Yt] = null, Gr = Kt[--Yt], Kt[Yt] = null;
  for (; e === Lt; ) Lt = xe[--Pe], xe[Pe] = null, Xe = xe[--Pe], xe[Pe] = null, Ye = xe[--Pe], xe[Pe] = null;
}
var Se = null, ke = null, B = !1, Oe = null;
function wa(e, t) {
  var n = Ne(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ri(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Se = e, ke = ft(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Se = e, ke = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Lt !== null ? { id: Ye, overflow: Xe } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ne(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Se = e, ke = null, !0) : !1;
    default:
      return !1;
  }
}
function No(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ao(e) {
  if (B) {
    var t = ke;
    if (t) {
      var n = t;
      if (!Ri(e, t)) {
        if (No(e)) throw Error(y(418));
        t = ft(n.nextSibling);
        var r = Se;
        t && Ri(e, t) ? wa(r, n) : (e.flags = e.flags & -4097 | 2, B = !1, Se = e);
      }
    } else {
      if (No(e)) throw Error(y(418));
      e.flags = e.flags & -4097 | 2, B = !1, Se = e;
    }
  }
}
function Ii(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Se = e;
}
function wr(e) {
  if (e !== Se) return !1;
  if (!B) return Ii(e), B = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !_o(e.type, e.memoizedProps)), t && (t = ke)) {
    if (No(e)) throw ka(), Error(y(418));
    for (; t; ) wa(e, t), t = ft(t.nextSibling);
  }
  if (Ii(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ke = ft(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ke = null;
    }
  } else ke = Se ? ft(e.stateNode.nextSibling) : null;
  return !0;
}
function ka() {
  for (var e = ke; e; ) e = ft(e.nextSibling);
}
function un() {
  ke = Se = null, B = !1;
}
function hu(e) {
  Oe === null ? Oe = [e] : Oe.push(e);
}
var xd = et.ReactCurrentBatchConfig;
function En(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(u) {
        var i = l.refs;
        u === null ? delete i[o] : i[o] = u;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function kr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Oi(e) {
  var t = e._init;
  return t(e._payload);
}
function Sa(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), a = a.sibling;
    return null;
  }
  function r(f, a) {
    for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
    return f;
  }
  function l(f, a) {
    return f = ht(f, a), f.index = 0, f.sibling = null, f;
  }
  function o(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function u(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, a, d, v) {
    return a === null || a.tag !== 6 ? (a = Zl(d, f.mode, v), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, v) {
    var S = d.type;
    return S === Bt ? m(f, a, d.props.children, v, d.key) : a !== null && (a.elementType === S || typeof S == "object" && S !== null && S.$$typeof === nt && Oi(S) === a.type) ? (v = l(a, d.props), v.ref = En(f, a, d), v.return = f, v) : (v = Mr(d.type, d.key, d.props, null, f.mode, v), v.ref = En(f, a, d), v.return = f, v);
  }
  function c(f, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Jl(d, f.mode, v), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function m(f, a, d, v, S) {
    return a === null || a.tag !== 7 ? (a = Tt(d, f.mode, v, S), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function h(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = Zl("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case ar:
          return d = Mr(a.type, a.key, a.props, null, f.mode, d), d.ref = En(f, null, a), d.return = f, d;
        case Ut:
          return a = Jl(a, f.mode, d), a.return = f, a;
        case nt:
          var v = a._init;
          return h(f, v(a._payload), d);
      }
      if (Pn(a) || yn(a)) return a = Tt(a, f.mode, d, null), a.return = f, a;
      kr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var S = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return S !== null ? null : i(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ar:
          return d.key === S ? s(f, a, d, v) : null;
        case Ut:
          return d.key === S ? c(f, a, d, v) : null;
        case nt:
          return S = d._init, p(
            f,
            a,
            S(d._payload),
            v
          );
      }
      if (Pn(d) || yn(d)) return S !== null ? null : m(f, a, d, v, null);
      kr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, S) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(d) || null, i(a, f, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ar:
          return f = f.get(v.key === null ? d : v.key) || null, s(a, f, v, S);
        case Ut:
          return f = f.get(v.key === null ? d : v.key) || null, c(a, f, v, S);
        case nt:
          var x = v._init;
          return g(f, a, d, x(v._payload), S);
      }
      if (Pn(v) || yn(v)) return f = f.get(d) || null, m(a, f, v, S, null);
      kr(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (var S = null, x = null, N = a, A = a = 0, M = null; N !== null && A < d.length; A++) {
      N.index > A ? (M = N, N = null) : M = N.sibling;
      var z = p(f, N, d[A], v);
      if (z === null) {
        N === null && (N = M);
        break;
      }
      e && N && z.alternate === null && t(f, N), a = o(z, a, A), x === null ? S = z : x.sibling = z, x = z, N = M;
    }
    if (A === d.length) return n(f, N), B && _t(f, A), S;
    if (N === null) {
      for (; A < d.length; A++) N = h(f, d[A], v), N !== null && (a = o(N, a, A), x === null ? S = N : x.sibling = N, x = N);
      return B && _t(f, A), S;
    }
    for (N = r(f, N); A < d.length; A++) M = g(N, f, A, d[A], v), M !== null && (e && M.alternate !== null && N.delete(M.key === null ? A : M.key), a = o(M, a, A), x === null ? S = M : x.sibling = M, x = M);
    return e && N.forEach(function(ge) {
      return t(f, ge);
    }), B && _t(f, A), S;
  }
  function k(f, a, d, v) {
    var S = yn(d);
    if (typeof S != "function") throw Error(y(150));
    if (d = S.call(d), d == null) throw Error(y(151));
    for (var x = S = null, N = a, A = a = 0, M = null, z = d.next(); N !== null && !z.done; A++, z = d.next()) {
      N.index > A ? (M = N, N = null) : M = N.sibling;
      var ge = p(f, N, z.value, v);
      if (ge === null) {
        N === null && (N = M);
        break;
      }
      e && N && ge.alternate === null && t(f, N), a = o(ge, a, A), x === null ? S = ge : x.sibling = ge, x = ge, N = M;
    }
    if (z.done) return n(
      f,
      N
    ), B && _t(f, A), S;
    if (N === null) {
      for (; !z.done; A++, z = d.next()) z = h(f, z.value, v), z !== null && (a = o(z, a, A), x === null ? S = z : x.sibling = z, x = z);
      return B && _t(f, A), S;
    }
    for (N = r(f, N); !z.done; A++, z = d.next()) z = g(N, f, A, z.value, v), z !== null && (e && z.alternate !== null && N.delete(z.key === null ? A : z.key), a = o(z, a, A), x === null ? S = z : x.sibling = z, x = z);
    return e && N.forEach(function(Qe) {
      return t(f, Qe);
    }), B && _t(f, A), S;
  }
  function D(f, a, d, v) {
    if (typeof d == "object" && d !== null && d.type === Bt && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ar:
          e: {
            for (var S = d.key, x = a; x !== null; ) {
              if (x.key === S) {
                if (S = d.type, S === Bt) {
                  if (x.tag === 7) {
                    n(f, x.sibling), a = l(x, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (x.elementType === S || typeof S == "object" && S !== null && S.$$typeof === nt && Oi(S) === x.type) {
                  n(f, x.sibling), a = l(x, d.props), a.ref = En(f, x, d), a.return = f, f = a;
                  break e;
                }
                n(f, x);
                break;
              } else t(f, x);
              x = x.sibling;
            }
            d.type === Bt ? (a = Tt(d.props.children, f.mode, v, d.key), a.return = f, f = a) : (v = Mr(d.type, d.key, d.props, null, f.mode, v), v.ref = En(f, a, d), v.return = f, f = v);
          }
          return u(f);
        case Ut:
          e: {
            for (x = d.key; a !== null; ) {
              if (a.key === x) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                break e;
              } else {
                n(f, a);
                break;
              }
              else t(f, a);
              a = a.sibling;
            }
            a = Jl(d, f.mode, v), a.return = f, f = a;
          }
          return u(f);
        case nt:
          return x = d._init, D(f, a, x(d._payload), v);
      }
      if (Pn(d)) return w(f, a, d, v);
      if (yn(d)) return k(f, a, d, v);
      kr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = Zl(d, f.mode, v), a.return = f, f = a), u(f)) : n(f, a);
  }
  return D;
}
var sn = Sa(!0), Ea = Sa(!1), Zr = wt(null), Jr = null, Xt = null, vu = null;
function yu() {
  vu = Xt = Jr = null;
}
function gu(e) {
  var t = Zr.current;
  U(Zr), e._currentValue = t;
}
function To(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function nn(e, t) {
  Jr = e, vu = Xt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (me = !0), e.firstContext = null);
}
function Te(e) {
  var t = e._currentValue;
  if (vu !== e) if (e = { context: e, memoizedValue: t, next: null }, Xt === null) {
    if (Jr === null) throw Error(y(308));
    Xt = e, Jr.dependencies = { lanes: 0, firstContext: e };
  } else Xt = Xt.next = e;
  return t;
}
var Pt = null;
function wu(e) {
  Pt === null ? Pt = [e] : Pt.push(e);
}
function _a(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, wu(t)) : (n.next = l.next, l.next = n), t.interleaved = n, qe(e, r);
}
function qe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var rt = !1;
function ku(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Ca(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ge(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, I & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, qe(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, wu(r)) : (t.next = l.next, l.next = t), r.interleaved = t, qe(e, n);
}
function zr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ou(e, n);
  }
}
function Di(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var u = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = u : o = o.next = u, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function qr(e, t, n, r) {
  var l = e.updateQueue;
  rt = !1;
  var o = l.firstBaseUpdate, u = l.lastBaseUpdate, i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var s = i, c = s.next;
    s.next = null, u === null ? o = c : u.next = c, u = s;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, i = m.lastBaseUpdate, i !== u && (i === null ? m.firstBaseUpdate = c : i.next = c, m.lastBaseUpdate = s));
  }
  if (o !== null) {
    var h = l.baseState;
    u = 0, m = c = s = null, i = o;
    do {
      var p = i.lane, g = i.eventTime;
      if ((r & p) === p) {
        m !== null && (m = m.next = {
          eventTime: g,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var w = e, k = i;
          switch (p = t, g = n, k.tag) {
            case 1:
              if (w = k.payload, typeof w == "function") {
                h = w.call(g, h, p);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = k.payload, p = typeof w == "function" ? w.call(g, h, p) : w, p == null) break e;
              h = V({}, h, p);
              break e;
            case 2:
              rt = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [i] : p.push(i));
      } else g = { eventTime: g, lane: p, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, m === null ? (c = m = g, s = h) : m = m.next = g, u |= p;
      if (i = i.next, i === null) {
        if (i = l.shared.pending, i === null) break;
        p = i, i = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (!0);
    if (m === null && (s = h), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = m, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        u |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    It |= u, e.lanes = u, e.memoizedState = h;
  }
}
function Mi(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(y(191, l));
      l.call(r);
    }
  }
}
var or = {}, Ve = wt(or), Gn = wt(or), Zn = wt(or);
function Nt(e) {
  if (e === or) throw Error(y(174));
  return e;
}
function Su(e, t) {
  switch (F(Zn, t), F(Gn, e), F(Ve, or), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : so(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = so(t, e);
  }
  U(Ve), F(Ve, t);
}
function an() {
  U(Ve), U(Gn), U(Zn);
}
function xa(e) {
  Nt(Zn.current);
  var t = Nt(Ve.current), n = so(t, e.type);
  t !== n && (F(Gn, e), F(Ve, n));
}
function Eu(e) {
  Gn.current === e && (U(Ve), U(Gn));
}
var $ = wt(0);
function br(e) {
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
var Ql = [];
function _u() {
  for (var e = 0; e < Ql.length; e++) Ql[e]._workInProgressVersionPrimary = null;
  Ql.length = 0;
}
var Lr = et.ReactCurrentDispatcher, Wl = et.ReactCurrentBatchConfig, Rt = 0, H = null, X = null, J = null, el = !1, On = !1, Jn = 0, Pd = 0;
function re() {
  throw Error(y(321));
}
function Cu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!je(e[n], t[n])) return !1;
  return !0;
}
function xu(e, t, n, r, l, o) {
  if (Rt = o, H = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Lr.current = e === null || e.memoizedState === null ? zd : Ld, e = n(r, l), On) {
    o = 0;
    do {
      if (On = !1, Jn = 0, 25 <= o) throw Error(y(301));
      o += 1, J = X = null, t.updateQueue = null, Lr.current = Rd, e = n(r, l);
    } while (On);
  }
  if (Lr.current = tl, t = X !== null && X.next !== null, Rt = 0, J = X = H = null, el = !1, t) throw Error(y(300));
  return e;
}
function Pu() {
  var e = Jn !== 0;
  return Jn = 0, e;
}
function Be() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return J === null ? H.memoizedState = J = e : J = J.next = e, J;
}
function ze() {
  if (X === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = J === null ? H.memoizedState : J.next;
  if (t !== null) J = t, X = e;
  else {
    if (e === null) throw Error(y(310));
    X = e, e = { memoizedState: X.memoizedState, baseState: X.baseState, baseQueue: X.baseQueue, queue: X.queue, next: null }, J === null ? H.memoizedState = J = e : J = J.next = e;
  }
  return J;
}
function qn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Kl(e) {
  var t = ze(), n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = X, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var u = l.next;
      l.next = o.next, o.next = u;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var i = u = null, s = null, c = o;
    do {
      var m = c.lane;
      if ((Rt & m) === m) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var h = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (i = s = h, u = r) : s = s.next = h, H.lanes |= m, It |= m;
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? u = r : s.next = i, je(r, t.memoizedState) || (me = !0), t.memoizedState = r, t.baseState = u, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, H.lanes |= o, It |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Yl(e) {
  var t = ze(), n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var u = l = l.next;
    do
      o = e(o, u.action), u = u.next;
    while (u !== l);
    je(o, t.memoizedState) || (me = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Pa() {
}
function Na(e, t) {
  var n = H, r = ze(), l = t(), o = !je(r.memoizedState, l);
  if (o && (r.memoizedState = l, me = !0), r = r.queue, Nu(za.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || J !== null && J.memoizedState.tag & 1) {
    if (n.flags |= 2048, bn(9, Ta.bind(null, n, r, l, t), void 0, null), q === null) throw Error(y(349));
    Rt & 30 || Aa(n, t, l);
  }
  return l;
}
function Aa(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = H.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, H.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ta(e, t, n, r) {
  t.value = n, t.getSnapshot = r, La(t) && Ra(e);
}
function za(e, t, n) {
  return n(function() {
    La(t) && Ra(e);
  });
}
function La(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !je(e, n);
  } catch {
    return !0;
  }
}
function Ra(e) {
  var t = qe(e, 1);
  t !== null && Me(t, e, 1, -1);
}
function Fi(e) {
  var t = Be();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: qn, lastRenderedState: e }, t.queue = e, e = e.dispatch = Td.bind(null, H, e), [t.memoizedState, e];
}
function bn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = H.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, H.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ia() {
  return ze().memoizedState;
}
function Rr(e, t, n, r) {
  var l = Be();
  H.flags |= e, l.memoizedState = bn(1 | t, n, void 0, r === void 0 ? null : r);
}
function ml(e, t, n, r) {
  var l = ze();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (X !== null) {
    var u = X.memoizedState;
    if (o = u.destroy, r !== null && Cu(r, u.deps)) {
      l.memoizedState = bn(t, n, o, r);
      return;
    }
  }
  H.flags |= e, l.memoizedState = bn(1 | t, n, o, r);
}
function ji(e, t) {
  return Rr(8390656, 8, e, t);
}
function Nu(e, t) {
  return ml(2048, 8, e, t);
}
function Oa(e, t) {
  return ml(4, 2, e, t);
}
function Da(e, t) {
  return ml(4, 4, e, t);
}
function Ma(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Fa(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ml(4, 4, Ma.bind(null, t, e), n);
}
function Au() {
}
function ja(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ua(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ba(e, t, n) {
  return Rt & 21 ? (je(n, t) || (n = Ws(), H.lanes |= n, It |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, me = !0), e.memoizedState = n);
}
function Nd(e, t) {
  var n = O;
  O = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Wl.transition;
  Wl.transition = {};
  try {
    e(!1), t();
  } finally {
    O = n, Wl.transition = r;
  }
}
function $a() {
  return ze().memoizedState;
}
function Ad(e, t, n) {
  var r = mt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ha(e)) Va(t, n);
  else if (n = _a(e, t, n, r), n !== null) {
    var l = ce();
    Me(n, e, r, l), Qa(n, t, r);
  }
}
function Td(e, t, n) {
  var r = mt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ha(e)) Va(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var u = t.lastRenderedState, i = o(u, n);
      if (l.hasEagerState = !0, l.eagerState = i, je(i, u)) {
        var s = t.interleaved;
        s === null ? (l.next = l, wu(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = _a(e, t, l, r), n !== null && (l = ce(), Me(n, e, r, l), Qa(n, t, r));
  }
}
function Ha(e) {
  var t = e.alternate;
  return e === H || t !== null && t === H;
}
function Va(e, t) {
  On = el = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Qa(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ou(e, n);
  }
}
var tl = { readContext: Te, useCallback: re, useContext: re, useEffect: re, useImperativeHandle: re, useInsertionEffect: re, useLayoutEffect: re, useMemo: re, useReducer: re, useRef: re, useState: re, useDebugValue: re, useDeferredValue: re, useTransition: re, useMutableSource: re, useSyncExternalStore: re, useId: re, unstable_isNewReconciler: !1 }, zd = { readContext: Te, useCallback: function(e, t) {
  return Be().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Te, useEffect: ji, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Rr(
    4194308,
    4,
    Ma.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Rr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Rr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Be();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Be();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Ad.bind(null, H, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Be();
  return e = { current: e }, t.memoizedState = e;
}, useState: Fi, useDebugValue: Au, useDeferredValue: function(e) {
  return Be().memoizedState = e;
}, useTransition: function() {
  var e = Fi(!1), t = e[0];
  return e = Nd.bind(null, e[1]), Be().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = H, l = Be();
  if (B) {
    if (n === void 0) throw Error(y(407));
    n = n();
  } else {
    if (n = t(), q === null) throw Error(y(349));
    Rt & 30 || Aa(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, ji(za.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, bn(9, Ta.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Be(), t = q.identifierPrefix;
  if (B) {
    var n = Xe, r = Ye;
    n = (r & ~(1 << 32 - De(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Jn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Pd++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Ld = {
  readContext: Te,
  useCallback: ja,
  useContext: Te,
  useEffect: Nu,
  useImperativeHandle: Fa,
  useInsertionEffect: Oa,
  useLayoutEffect: Da,
  useMemo: Ua,
  useReducer: Kl,
  useRef: Ia,
  useState: function() {
    return Kl(qn);
  },
  useDebugValue: Au,
  useDeferredValue: function(e) {
    var t = ze();
    return Ba(t, X.memoizedState, e);
  },
  useTransition: function() {
    var e = Kl(qn)[0], t = ze().memoizedState;
    return [e, t];
  },
  useMutableSource: Pa,
  useSyncExternalStore: Na,
  useId: $a,
  unstable_isNewReconciler: !1
}, Rd = { readContext: Te, useCallback: ja, useContext: Te, useEffect: Nu, useImperativeHandle: Fa, useInsertionEffect: Oa, useLayoutEffect: Da, useMemo: Ua, useReducer: Yl, useRef: Ia, useState: function() {
  return Yl(qn);
}, useDebugValue: Au, useDeferredValue: function(e) {
  var t = ze();
  return X === null ? t.memoizedState = e : Ba(t, X.memoizedState, e);
}, useTransition: function() {
  var e = Yl(qn)[0], t = ze().memoizedState;
  return [e, t];
}, useMutableSource: Pa, useSyncExternalStore: Na, useId: $a, unstable_isNewReconciler: !1 };
function Re(e, t) {
  if (e && e.defaultProps) {
    t = V({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function zo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : V({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var hl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Mt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ce(), l = mt(e), o = Ge(r, l);
  o.payload = t, n != null && (o.callback = n), t = dt(e, o, l), t !== null && (Me(t, e, l, r), zr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ce(), l = mt(e), o = Ge(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = dt(e, o, l), t !== null && (Me(t, e, l, r), zr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ce(), r = mt(e), l = Ge(n, r);
  l.tag = 2, t != null && (l.callback = t), t = dt(e, l, r), t !== null && (Me(t, e, r, n), zr(t, e, r));
} };
function Ui(e, t, n, r, l, o, u) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, u) : t.prototype && t.prototype.isPureReactComponent ? !Wn(n, r) || !Wn(l, o) : !0;
}
function Wa(e, t, n) {
  var r = !1, l = yt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Te(o) : (l = ve(t) ? zt : se.current, r = t.contextTypes, o = (r = r != null) ? on(e, l) : yt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = hl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Bi(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && hl.enqueueReplaceState(t, t.state, null);
}
function Lo(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, ku(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Te(o) : (o = ve(t) ? zt : se.current, l.context = on(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (zo(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && hl.enqueueReplaceState(l, l.state, null), qr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function cn(e, t) {
  try {
    var n = "", r = t;
    do
      n += of(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Xl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ro(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Id = typeof WeakMap == "function" ? WeakMap : Map;
function Ka(e, t, n) {
  n = Ge(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    rl || (rl = !0, Ho = r), Ro(e, t);
  }, n;
}
function Ya(e, t, n) {
  n = Ge(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Ro(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Ro(e, t), typeof r != "function" && (pt === null ? pt = /* @__PURE__ */ new Set([this]) : pt.add(this));
    var u = t.stack;
    this.componentDidCatch(t.value, { componentStack: u !== null ? u : "" });
  }), n;
}
function $i(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Id();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Yd.bind(null, e, t, n), t.then(e, e));
}
function Hi(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Vi(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ge(-1, 1), t.tag = 2, dt(n, t, 1))), n.lanes |= 1), e);
}
var Od = et.ReactCurrentOwner, me = !1;
function ae(e, t, n, r) {
  t.child = e === null ? Ea(t, null, n, r) : sn(t, e.child, n, r);
}
function Qi(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return nn(t, l), r = xu(e, t, n, r, o, l), n = Pu(), e !== null && !me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, be(e, t, l)) : (B && n && pu(t), t.flags |= 1, ae(e, t, r, l), t.child);
}
function Wi(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Mu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Xa(e, t, o, r, l)) : (e = Mr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var u = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Wn, n(u, r) && e.ref === t.ref) return be(e, t, l);
  }
  return t.flags |= 1, e = ht(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Xa(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Wn(o, r) && e.ref === t.ref) if (me = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (me = !0);
    else return t.lanes = e.lanes, be(e, t, l);
  }
  return Io(e, t, n, r, l);
}
function Ga(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, F(Zt, we), we |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, F(Zt, we), we |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, F(Zt, we), we |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, F(Zt, we), we |= r;
  return ae(e, t, l, n), t.child;
}
function Za(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Io(e, t, n, r, l) {
  var o = ve(n) ? zt : se.current;
  return o = on(t, o), nn(t, l), n = xu(e, t, n, r, o, l), r = Pu(), e !== null && !me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, be(e, t, l)) : (B && r && pu(t), t.flags |= 1, ae(e, t, n, l), t.child);
}
function Ki(e, t, n, r, l) {
  if (ve(n)) {
    var o = !0;
    Yr(t);
  } else o = !1;
  if (nn(t, l), t.stateNode === null) Ir(e, t), Wa(t, n, r), Lo(t, n, r, l), r = !0;
  else if (e === null) {
    var u = t.stateNode, i = t.memoizedProps;
    u.props = i;
    var s = u.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Te(c) : (c = ve(n) ? zt : se.current, c = on(t, c));
    var m = n.getDerivedStateFromProps, h = typeof m == "function" || typeof u.getSnapshotBeforeUpdate == "function";
    h || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== r || s !== c) && Bi(t, u, r, c), rt = !1;
    var p = t.memoizedState;
    u.state = p, qr(t, r, u, l), s = t.memoizedState, i !== r || p !== s || he.current || rt ? (typeof m == "function" && (zo(t, n, m, r), s = t.memoizedState), (i = rt || Ui(t, n, i, r, p, s, c)) ? (h || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), u.props = r, u.state = s, u.context = c, r = i) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    u = t.stateNode, Ca(e, t), i = t.memoizedProps, c = t.type === t.elementType ? i : Re(t.type, i), u.props = c, h = t.pendingProps, p = u.context, s = n.contextType, typeof s == "object" && s !== null ? s = Te(s) : (s = ve(n) ? zt : se.current, s = on(t, s));
    var g = n.getDerivedStateFromProps;
    (m = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== h || p !== s) && Bi(t, u, r, s), rt = !1, p = t.memoizedState, u.state = p, qr(t, r, u, l);
    var w = t.memoizedState;
    i !== h || p !== w || he.current || rt ? (typeof g == "function" && (zo(t, n, g, r), w = t.memoizedState), (c = rt || Ui(t, n, c, r, p, w, s) || !1) ? (m || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, w, s), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, w, s)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), u.props = r, u.state = w, u.context = s, r = c) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Oo(e, t, n, r, o, l);
}
function Oo(e, t, n, r, l, o) {
  Za(e, t);
  var u = (t.flags & 128) !== 0;
  if (!r && !u) return l && Li(t, n, !1), be(e, t, o);
  r = t.stateNode, Od.current = t;
  var i = u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && u ? (t.child = sn(t, e.child, null, o), t.child = sn(t, null, i, o)) : ae(e, t, i, o), t.memoizedState = r.state, l && Li(t, n, !0), t.child;
}
function Ja(e) {
  var t = e.stateNode;
  t.pendingContext ? zi(e, t.pendingContext, t.pendingContext !== t.context) : t.context && zi(e, t.context, !1), Su(e, t.containerInfo);
}
function Yi(e, t, n, r, l) {
  return un(), hu(l), t.flags |= 256, ae(e, t, n, r), t.child;
}
var Do = { dehydrated: null, treeContext: null, retryLane: 0 };
function Mo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function qa(e, t, n) {
  var r = t.pendingProps, l = $.current, o = !1, u = (t.flags & 128) !== 0, i;
  if ((i = u) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), F($, l & 1), e === null)
    return Ao(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (u = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, u = { mode: "hidden", children: u }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = u) : o = gl(u, r, 0, null), e = Tt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Mo(n), t.memoizedState = Do, e) : Tu(t, u));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return Dd(e, t, u, r, i, l, n);
  if (o) {
    o = r.fallback, u = t.mode, l = e.child, i = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(u & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = ht(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? o = ht(i, o) : (o = Tt(o, u, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, u = e.child.memoizedState, u = u === null ? Mo(n) : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }, o.memoizedState = u, o.childLanes = e.childLanes & ~n, t.memoizedState = Do, r;
  }
  return o = e.child, e = o.sibling, r = ht(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Tu(e, t) {
  return t = gl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Sr(e, t, n, r) {
  return r !== null && hu(r), sn(t, e.child, null, n), e = Tu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Dd(e, t, n, r, l, o, u) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Xl(Error(y(422))), Sr(e, t, u, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = gl({ mode: "visible", children: r.children }, l, 0, null), o = Tt(o, l, u, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && sn(t, e.child, null, u), t.child.memoizedState = Mo(u), t.memoizedState = Do, o);
  if (!(t.mode & 1)) return Sr(e, t, u, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
    return r = i, o = Error(y(419)), r = Xl(o, r, void 0), Sr(e, t, u, r);
  }
  if (i = (u & e.childLanes) !== 0, me || i) {
    if (r = q, r !== null) {
      switch (u & -u) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | u) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, qe(e, l), Me(r, e, l, -1));
    }
    return Du(), r = Xl(Error(y(421))), Sr(e, t, u, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Xd.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ke = ft(l.nextSibling), Se = t, B = !0, Oe = null, e !== null && (xe[Pe++] = Ye, xe[Pe++] = Xe, xe[Pe++] = Lt, Ye = e.id, Xe = e.overflow, Lt = t), t = Tu(t, r.children), t.flags |= 4096, t);
}
function Xi(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), To(e.return, t, n);
}
function Gl(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function ba(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (ae(e, t, r.children, n), r = $.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Xi(e, n, t);
      else if (e.tag === 19) Xi(e, n, t);
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
  if (F($, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && br(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Gl(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && br(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Gl(t, !0, n, null, o);
      break;
    case "together":
      Gl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ir(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function be(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), It |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (e = t.child, n = ht(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = ht(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Md(e, t, n) {
  switch (t.tag) {
    case 3:
      Ja(t), un();
      break;
    case 5:
      xa(t);
      break;
    case 1:
      ve(t.type) && Yr(t);
      break;
    case 4:
      Su(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      F(Zr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (F($, $.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? qa(e, t, n) : (F($, $.current & 1), e = be(e, t, n), e !== null ? e.sibling : null);
      F($, $.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return ba(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), F($, $.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ga(e, t, n);
  }
  return be(e, t, n);
}
var ec, Fo, tc, nc;
ec = function(e, t) {
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
Fo = function() {
};
tc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Nt(Ve.current);
    var o = null;
    switch (n) {
      case "input":
        l = lo(e, l), r = lo(e, r), o = [];
        break;
      case "select":
        l = V({}, l, { value: void 0 }), r = V({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = io(e, l), r = io(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Wr);
    }
    ao(n, r);
    var u;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var i = l[c];
      for (u in i) i.hasOwnProperty(u) && (n || (n = {}), n[u] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (jn.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (i = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== i && (s != null || i != null)) if (c === "style") if (i) {
        for (u in i) !i.hasOwnProperty(u) || s && s.hasOwnProperty(u) || (n || (n = {}), n[u] = "");
        for (u in s) s.hasOwnProperty(u) && i[u] !== s[u] && (n || (n = {}), n[u] = s[u]);
      } else n || (o || (o = []), o.push(
        c,
        n
      )), n = s;
      else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (o = o || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (jn.hasOwnProperty(c) ? (s != null && c === "onScroll" && j("scroll", e), o || i === s || (o = [])) : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
nc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function _n(e, t) {
  if (!B) switch (e.tailMode) {
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
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Fd(e, t, n) {
  var r = t.pendingProps;
  switch (mu(t), t.tag) {
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
      return le(t), null;
    case 1:
      return ve(t.type) && Kr(), le(t), null;
    case 3:
      return r = t.stateNode, an(), U(he), U(se), _u(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (wr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Oe !== null && (Wo(Oe), Oe = null))), Fo(e, t), le(t), null;
    case 5:
      Eu(t);
      var l = Nt(Zn.current);
      if (n = t.type, e !== null && t.stateNode != null) tc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return le(t), null;
        }
        if (e = Nt(Ve.current), wr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[$e] = t, r[Xn] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              j("cancel", r), j("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              j("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < An.length; l++) j(An[l], r);
              break;
            case "source":
              j("error", r);
              break;
            case "img":
            case "image":
            case "link":
              j(
                "error",
                r
              ), j("load", r);
              break;
            case "details":
              j("toggle", r);
              break;
            case "input":
              ri(r, o), j("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, j("invalid", r);
              break;
            case "textarea":
              oi(r, o), j("invalid", r);
          }
          ao(n, o), l = null;
          for (var u in o) if (o.hasOwnProperty(u)) {
            var i = o[u];
            u === "children" ? typeof i == "string" ? r.textContent !== i && (o.suppressHydrationWarning !== !0 && gr(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (o.suppressHydrationWarning !== !0 && gr(
              r.textContent,
              i,
              e
            ), l = ["children", "" + i]) : jn.hasOwnProperty(u) && i != null && u === "onScroll" && j("scroll", r);
          }
          switch (n) {
            case "input":
              cr(r), li(r, o, !0);
              break;
            case "textarea":
              cr(r), ui(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Wr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          u = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = zs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(n, { is: r.is }) : (e = u.createElement(n), n === "select" && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[$e] = t, e[Xn] = r, ec(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (u = co(n, r), n) {
              case "dialog":
                j("cancel", e), j("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                j("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < An.length; l++) j(An[l], e);
                l = r;
                break;
              case "source":
                j("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                j(
                  "error",
                  e
                ), j("load", e), l = r;
                break;
              case "details":
                j("toggle", e), l = r;
                break;
              case "input":
                ri(e, r), l = lo(e, r), j("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = V({}, r, { value: void 0 }), j("invalid", e);
                break;
              case "textarea":
                oi(e, r), l = io(e, r), j("invalid", e);
                break;
              default:
                l = r;
            }
            ao(n, l), i = l;
            for (o in i) if (i.hasOwnProperty(o)) {
              var s = i[o];
              o === "style" ? Is(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ls(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Un(e, s) : typeof s == "number" && Un(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (jn.hasOwnProperty(o) ? s != null && o === "onScroll" && j("scroll", e) : s != null && bo(e, o, s, u));
            }
            switch (n) {
              case "input":
                cr(e), li(e, r, !1);
                break;
              case "textarea":
                cr(e), ui(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + vt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? qt(e, !!r.multiple, o, !1) : r.defaultValue != null && qt(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Wr);
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
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) nc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (n = Nt(Zn.current), Nt(Ve.current), wr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[$e] = t, (o = r.nodeValue !== n) && (e = Se, e !== null)) switch (e.tag) {
            case 3:
              gr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && gr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[$e] = t, t.stateNode = r;
      }
      return le(t), null;
    case 13:
      if (U($), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (B && ke !== null && t.mode & 1 && !(t.flags & 128)) ka(), un(), t.flags |= 98560, o = !1;
        else if (o = wr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(y(317));
            o[$e] = t;
          } else un(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          le(t), o = !1;
        } else Oe !== null && (Wo(Oe), Oe = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || $.current & 1 ? G === 0 && (G = 3) : Du())), t.updateQueue !== null && (t.flags |= 4), le(t), null);
    case 4:
      return an(), Fo(e, t), e === null && Kn(t.stateNode.containerInfo), le(t), null;
    case 10:
      return gu(t.type._context), le(t), null;
    case 17:
      return ve(t.type) && Kr(), le(t), null;
    case 19:
      if (U($), o = t.memoizedState, o === null) return le(t), null;
      if (r = (t.flags & 128) !== 0, u = o.rendering, u === null) if (r) _n(o, !1);
      else {
        if (G !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (u = br(e), u !== null) {
            for (t.flags |= 128, _n(o, !1), r = u.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, u = o.alternate, u === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = u.childLanes, o.lanes = u.lanes, o.child = u.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = u.memoizedProps, o.memoizedState = u.memoizedState, o.updateQueue = u.updateQueue, o.type = u.type, e = u.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return F($, $.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && K() > fn && (t.flags |= 128, r = !0, _n(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = br(u), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), _n(o, !0), o.tail === null && o.tailMode === "hidden" && !u.alternate && !B) return le(t), null;
        } else 2 * K() - o.renderingStartTime > fn && n !== 1073741824 && (t.flags |= 128, r = !0, _n(o, !1), t.lanes = 4194304);
        o.isBackwards ? (u.sibling = t.child, t.child = u) : (n = o.last, n !== null ? n.sibling = u : t.child = u, o.last = u);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = K(), t.sibling = null, n = $.current, F($, r ? n & 1 | 2 : n & 1), t) : (le(t), null);
    case 22:
    case 23:
      return Ou(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? we & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : le(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function jd(e, t) {
  switch (mu(t), t.tag) {
    case 1:
      return ve(t.type) && Kr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return an(), U(he), U(se), _u(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Eu(t), null;
    case 13:
      if (U($), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(y(340));
        un();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return U($), null;
    case 4:
      return an(), null;
    case 10:
      return gu(t.type._context), null;
    case 22:
    case 23:
      return Ou(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Er = !1, ue = !1, Ud = typeof WeakSet == "function" ? WeakSet : Set, C = null;
function Gt(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Q(e, t, r);
  }
  else n.current = null;
}
function jo(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var Gi = !1;
function Bd(e, t) {
  if (So = Hr, e = ia(), du(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var u = 0, i = -1, s = -1, c = 0, m = 0, h = e, p = null;
        t: for (; ; ) {
          for (var g; h !== n || l !== 0 && h.nodeType !== 3 || (i = u + l), h !== o || r !== 0 && h.nodeType !== 3 || (s = u + r), h.nodeType === 3 && (u += h.nodeValue.length), (g = h.firstChild) !== null; )
            p = h, h = g;
          for (; ; ) {
            if (h === e) break t;
            if (p === n && ++c === l && (i = u), p === o && ++m === r && (s = u), (g = h.nextSibling) !== null) break;
            h = p, p = h.parentNode;
          }
          h = g;
        }
        n = i === -1 || s === -1 ? null : { start: i, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Eo = { focusedElem: e, selectionRange: n }, Hr = !1, C = t; C !== null; ) if (t = C, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, C = e;
  else for (; C !== null; ) {
    t = C;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var k = w.memoizedProps, D = w.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Re(t.type, k), D);
            f.__reactInternalSnapshotBeforeUpdate = a;
          }
          break;
        case 3:
          var d = t.stateNode.containerInfo;
          d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(y(163));
      }
    } catch (v) {
      Q(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, C = e;
      break;
    }
    C = t.return;
  }
  return w = Gi, Gi = !1, w;
}
function Dn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && jo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function vl(e, t) {
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
function Uo(e) {
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
function rc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, rc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[$e], delete t[Xn], delete t[xo], delete t[Ed], delete t[_d])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function lc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Zi(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || lc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Bo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Wr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Bo(e, t, n), e = e.sibling; e !== null; ) Bo(e, t, n), e = e.sibling;
}
function $o(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for ($o(e, t, n), e = e.sibling; e !== null; ) $o(e, t, n), e = e.sibling;
}
var b = null, Ie = !1;
function tt(e, t, n) {
  for (n = n.child; n !== null; ) oc(e, t, n), n = n.sibling;
}
function oc(e, t, n) {
  if (He && typeof He.onCommitFiberUnmount == "function") try {
    He.onCommitFiberUnmount(sl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ue || Gt(n, t);
    case 6:
      var r = b, l = Ie;
      b = null, tt(e, t, n), b = r, Ie = l, b !== null && (Ie ? (e = b, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null && (Ie ? (e = b, n = n.stateNode, e.nodeType === 8 ? Hl(e.parentNode, n) : e.nodeType === 1 && Hl(e, n), Vn(e)) : Hl(b, n.stateNode));
      break;
    case 4:
      r = b, l = Ie, b = n.stateNode.containerInfo, Ie = !0, tt(e, t, n), b = r, Ie = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, u = o.destroy;
          o = o.tag, u !== void 0 && (o & 2 || o & 4) && jo(n, t, u), l = l.next;
        } while (l !== r);
      }
      tt(e, t, n);
      break;
    case 1:
      if (!ue && (Gt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        Q(n, t, i);
      }
      tt(e, t, n);
      break;
    case 21:
      tt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ue = (r = ue) || n.memoizedState !== null, tt(e, t, n), ue = r) : tt(e, t, n);
      break;
    default:
      tt(e, t, n);
  }
}
function Ji(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ud()), t.forEach(function(r) {
      var l = Gd.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, u = t, i = u;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            b = i.stateNode, Ie = !1;
            break e;
          case 3:
            b = i.stateNode.containerInfo, Ie = !0;
            break e;
          case 4:
            b = i.stateNode.containerInfo, Ie = !0;
            break e;
        }
        i = i.return;
      }
      if (b === null) throw Error(y(160));
      oc(o, u, l), b = null, Ie = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (c) {
      Q(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) uc(t, e), t = t.sibling;
}
function uc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Le(t, e), Ue(e), r & 4) {
        try {
          Dn(3, e, e.return), vl(3, e);
        } catch (k) {
          Q(e, e.return, k);
        }
        try {
          Dn(5, e, e.return);
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      break;
    case 1:
      Le(t, e), Ue(e), r & 512 && n !== null && Gt(n, n.return);
      break;
    case 5:
      if (Le(t, e), Ue(e), r & 512 && n !== null && Gt(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Un(l, "");
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, u = n !== null ? n.memoizedProps : o, i = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          i === "input" && o.type === "radio" && o.name != null && As(l, o), co(i, u);
          var c = co(i, o);
          for (u = 0; u < s.length; u += 2) {
            var m = s[u], h = s[u + 1];
            m === "style" ? Is(l, h) : m === "dangerouslySetInnerHTML" ? Ls(l, h) : m === "children" ? Un(l, h) : bo(l, m, h, c);
          }
          switch (i) {
            case "input":
              oo(l, o);
              break;
            case "textarea":
              Ts(l, o);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var g = o.value;
              g != null ? qt(l, !!o.multiple, g, !1) : p !== !!o.multiple && (o.defaultValue != null ? qt(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : qt(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[Xn] = o;
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      break;
    case 6:
      if (Le(t, e), Ue(e), r & 4) {
        if (e.stateNode === null) throw Error(y(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      break;
    case 3:
      if (Le(t, e), Ue(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Vn(t.containerInfo);
      } catch (k) {
        Q(e, e.return, k);
      }
      break;
    case 4:
      Le(t, e), Ue(e);
      break;
    case 13:
      Le(t, e), Ue(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ru = K())), r & 4 && Ji(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (ue = (c = ue) || m, Le(t, e), ue = c) : Le(t, e), Ue(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !m && e.mode & 1) for (C = e, m = e.child; m !== null; ) {
          for (h = C = m; C !== null; ) {
            switch (p = C, g = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Dn(4, p, p.return);
                break;
              case 1:
                Gt(p, p.return);
                var w = p.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (k) {
                    Q(r, n, k);
                  }
                }
                break;
              case 5:
                Gt(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  bi(h);
                  continue;
                }
            }
            g !== null ? (g.return = p, C = g) : bi(h);
          }
          m = m.sibling;
        }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                l = h.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (i = h.stateNode, s = h.memoizedProps.style, u = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = Rs("display", u));
              } catch (k) {
                Q(e, e.return, k);
              }
            }
          } else if (h.tag === 6) {
            if (m === null) try {
              h.stateNode.nodeValue = c ? "" : h.memoizedProps;
            } catch (k) {
              Q(e, e.return, k);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), h = h.return;
          }
          m === h && (m = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      Le(t, e), Ue(e), r & 4 && Ji(e);
      break;
    case 21:
      break;
    default:
      Le(
        t,
        e
      ), Ue(e);
  }
}
function Ue(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (lc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Un(l, ""), r.flags &= -33);
          var o = Zi(e);
          $o(e, o, l);
          break;
        case 3:
        case 4:
          var u = r.stateNode.containerInfo, i = Zi(e);
          Bo(e, i, u);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      Q(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function $d(e, t, n) {
  C = e, ic(e);
}
function ic(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C, o = l.child;
    if (l.tag === 22 && r) {
      var u = l.memoizedState !== null || Er;
      if (!u) {
        var i = l.alternate, s = i !== null && i.memoizedState !== null || ue;
        i = Er;
        var c = ue;
        if (Er = u, (ue = s) && !c) for (C = l; C !== null; ) u = C, s = u.child, u.tag === 22 && u.memoizedState !== null ? es(l) : s !== null ? (s.return = u, C = s) : es(l);
        for (; o !== null; ) C = o, ic(o), o = o.sibling;
        C = l, Er = i, ue = c;
      }
      qi(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, C = o) : qi(e);
  }
}
function qi(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ue || vl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ue) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Re(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Mi(t, o, r);
            break;
          case 3:
            var u = t.updateQueue;
            if (u !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Mi(t, u, n);
            }
            break;
          case 5:
            var i = t.stateNode;
            if (n === null && t.flags & 4) {
              n = i;
              var s = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s.autoFocus && n.focus();
                  break;
                case "img":
                  s.src && (n.src = s.src);
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
              var c = t.alternate;
              if (c !== null) {
                var m = c.memoizedState;
                if (m !== null) {
                  var h = m.dehydrated;
                  h !== null && Vn(h);
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
            throw Error(y(163));
        }
        ue || t.flags & 512 && Uo(t);
      } catch (p) {
        Q(t, t.return, p);
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
function bi(e) {
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
function es(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            vl(4, t);
          } catch (s) {
            Q(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Q(t, l, s);
            }
          }
          var o = t.return;
          try {
            Uo(t);
          } catch (s) {
            Q(t, o, s);
          }
          break;
        case 5:
          var u = t.return;
          try {
            Uo(t);
          } catch (s) {
            Q(t, u, s);
          }
      }
    } catch (s) {
      Q(t, t.return, s);
    }
    if (t === e) {
      C = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      i.return = t.return, C = i;
      break;
    }
    C = t.return;
  }
}
var Hd = Math.ceil, nl = et.ReactCurrentDispatcher, zu = et.ReactCurrentOwner, Ae = et.ReactCurrentBatchConfig, I = 0, q = null, Y = null, te = 0, we = 0, Zt = wt(0), G = 0, er = null, It = 0, yl = 0, Lu = 0, Mn = null, pe = null, Ru = 0, fn = 1 / 0, We = null, rl = !1, Ho = null, pt = null, _r = !1, it = null, ll = 0, Fn = 0, Vo = null, Or = -1, Dr = 0;
function ce() {
  return I & 6 ? K() : Or !== -1 ? Or : Or = K();
}
function mt(e) {
  return e.mode & 1 ? I & 2 && te !== 0 ? te & -te : xd.transition !== null ? (Dr === 0 && (Dr = Ws()), Dr) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : qs(e.type)), e) : 1;
}
function Me(e, t, n, r) {
  if (50 < Fn) throw Fn = 0, Vo = null, Error(y(185));
  nr(e, n, r), (!(I & 2) || e !== q) && (e === q && (!(I & 2) && (yl |= n), G === 4 && ot(e, te)), ye(e, r), n === 1 && I === 0 && !(t.mode & 1) && (fn = K() + 500, pl && kt()));
}
function ye(e, t) {
  var n = e.callbackNode;
  xf(e, t);
  var r = $r(e, e === q ? te : 0);
  if (r === 0) n !== null && ai(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ai(n), t === 1) e.tag === 0 ? Cd(ts.bind(null, e)) : ya(ts.bind(null, e)), kd(function() {
      !(I & 6) && kt();
    }), n = null;
    else {
      switch (Ks(r)) {
        case 1:
          n = lu;
          break;
        case 4:
          n = Vs;
          break;
        case 16:
          n = Br;
          break;
        case 536870912:
          n = Qs;
          break;
        default:
          n = Br;
      }
      n = hc(n, sc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function sc(e, t) {
  if (Or = -1, Dr = 0, I & 6) throw Error(y(327));
  var n = e.callbackNode;
  if (rn() && e.callbackNode !== n) return null;
  var r = $r(e, e === q ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ol(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var o = cc();
    (q !== e || te !== t) && (We = null, fn = K() + 500, At(e, t));
    do
      try {
        Wd();
        break;
      } catch (i) {
        ac(e, i);
      }
    while (!0);
    yu(), nl.current = o, I = l, Y !== null ? t = 0 : (q = null, te = 0, t = G);
  }
  if (t !== 0) {
    if (t === 2 && (l = vo(e), l !== 0 && (r = l, t = Qo(e, l))), t === 1) throw n = er, At(e, 0), ot(e, r), ye(e, K()), n;
    if (t === 6) ot(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Vd(l) && (t = ol(e, r), t === 2 && (o = vo(e), o !== 0 && (r = o, t = Qo(e, o))), t === 1)) throw n = er, At(e, 0), ot(e, r), ye(e, K()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Ct(e, pe, We);
          break;
        case 3:
          if (ot(e, r), (r & 130023424) === r && (t = Ru + 500 - K(), 10 < t)) {
            if ($r(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ce(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Co(Ct.bind(null, e, pe, We), t);
            break;
          }
          Ct(e, pe, We);
          break;
        case 4:
          if (ot(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var u = 31 - De(r);
            o = 1 << u, u = t[u], u > l && (l = u), r &= ~o;
          }
          if (r = l, r = K() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Hd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Co(Ct.bind(null, e, pe, We), r);
            break;
          }
          Ct(e, pe, We);
          break;
        case 5:
          Ct(e, pe, We);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return ye(e, K()), e.callbackNode === n ? sc.bind(null, e) : null;
}
function Qo(e, t) {
  var n = Mn;
  return e.current.memoizedState.isDehydrated && (At(e, t).flags |= 256), e = ol(e, t), e !== 2 && (t = pe, pe = n, t !== null && Wo(t)), e;
}
function Wo(e) {
  pe === null ? pe = e : pe.push.apply(pe, e);
}
function Vd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!je(o(), l)) return !1;
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
function ot(e, t) {
  for (t &= ~Lu, t &= ~yl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - De(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ts(e) {
  if (I & 6) throw Error(y(327));
  rn();
  var t = $r(e, 0);
  if (!(t & 1)) return ye(e, K()), null;
  var n = ol(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = vo(e);
    r !== 0 && (t = r, n = Qo(e, r));
  }
  if (n === 1) throw n = er, At(e, 0), ot(e, t), ye(e, K()), n;
  if (n === 6) throw Error(y(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ct(e, pe, We), ye(e, K()), null;
}
function Iu(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    I = n, I === 0 && (fn = K() + 500, pl && kt());
  }
}
function Ot(e) {
  it !== null && it.tag === 0 && !(I & 6) && rn();
  var t = I;
  I |= 1;
  var n = Ae.transition, r = O;
  try {
    if (Ae.transition = null, O = 1, e) return e();
  } finally {
    O = r, Ae.transition = n, I = t, !(I & 6) && kt();
  }
}
function Ou() {
  we = Zt.current, U(Zt);
}
function At(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, wd(n)), Y !== null) for (n = Y.return; n !== null; ) {
    var r = n;
    switch (mu(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Kr();
        break;
      case 3:
        an(), U(he), U(se), _u();
        break;
      case 5:
        Eu(r);
        break;
      case 4:
        an();
        break;
      case 13:
        U($);
        break;
      case 19:
        U($);
        break;
      case 10:
        gu(r.type._context);
        break;
      case 22:
      case 23:
        Ou();
    }
    n = n.return;
  }
  if (q = e, Y = e = ht(e.current, null), te = we = t, G = 0, er = null, Lu = yl = It = 0, pe = Mn = null, Pt !== null) {
    for (t = 0; t < Pt.length; t++) if (n = Pt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, o = n.pending;
      if (o !== null) {
        var u = o.next;
        o.next = l, r.next = u;
      }
      n.pending = r;
    }
    Pt = null;
  }
  return e;
}
function ac(e, t) {
  do {
    var n = Y;
    try {
      if (yu(), Lr.current = tl, el) {
        for (var r = H.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        el = !1;
      }
      if (Rt = 0, J = X = H = null, On = !1, Jn = 0, zu.current = null, n === null || n.return === null) {
        G = 1, er = t, Y = null;
        break;
      }
      e: {
        var o = e, u = n.return, i = n, s = t;
        if (t = te, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, m = i, h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p ? (m.updateQueue = p.updateQueue, m.memoizedState = p.memoizedState, m.lanes = p.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var g = Hi(u);
          if (g !== null) {
            g.flags &= -257, Vi(g, u, i, o, t), g.mode & 1 && $i(o, c, t), t = g, s = c;
            var w = t.updateQueue;
            if (w === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(s), t.updateQueue = k;
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              $i(o, c, t), Du();
              break e;
            }
            s = Error(y(426));
          }
        } else if (B && i.mode & 1) {
          var D = Hi(u);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256), Vi(D, u, i, o, t), hu(cn(s, i));
            break e;
          }
        }
        o = s = cn(s, i), G !== 4 && (G = 2), Mn === null ? Mn = [o] : Mn.push(o), o = u;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = Ka(o, s, t);
              Di(o, f);
              break e;
            case 1:
              i = s;
              var a = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (pt === null || !pt.has(d)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var v = Ya(o, i, t);
                Di(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      dc(n);
    } catch (S) {
      t = S, Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function cc() {
  var e = nl.current;
  return nl.current = tl, e === null ? tl : e;
}
function Du() {
  (G === 0 || G === 3 || G === 2) && (G = 4), q === null || !(It & 268435455) && !(yl & 268435455) || ot(q, te);
}
function ol(e, t) {
  var n = I;
  I |= 2;
  var r = cc();
  (q !== e || te !== t) && (We = null, At(e, t));
  do
    try {
      Qd();
      break;
    } catch (l) {
      ac(e, l);
    }
  while (!0);
  if (yu(), I = n, nl.current = r, Y !== null) throw Error(y(261));
  return q = null, te = 0, G;
}
function Qd() {
  for (; Y !== null; ) fc(Y);
}
function Wd() {
  for (; Y !== null && !vf(); ) fc(Y);
}
function fc(e) {
  var t = mc(e.alternate, e, we);
  e.memoizedProps = e.pendingProps, t === null ? dc(e) : Y = t, zu.current = null;
}
function dc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = jd(n, t), n !== null) {
        n.flags &= 32767, Y = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        G = 6, Y = null;
        return;
      }
    } else if (n = Fd(n, t, we), n !== null) {
      Y = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function Ct(e, t, n) {
  var r = O, l = Ae.transition;
  try {
    Ae.transition = null, O = 1, Kd(e, t, n, r);
  } finally {
    Ae.transition = l, O = r;
  }
  return null;
}
function Kd(e, t, n, r) {
  do
    rn();
  while (it !== null);
  if (I & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(y(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Pf(e, o), e === q && (Y = q = null, te = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || _r || (_r = !0, hc(Br, function() {
    return rn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ae.transition, Ae.transition = null;
    var u = O;
    O = 1;
    var i = I;
    I |= 4, zu.current = null, Bd(e, n), uc(n, e), dd(Eo), Hr = !!So, Eo = So = null, e.current = n, $d(n), yf(), I = i, O = u, Ae.transition = o;
  } else e.current = n;
  if (_r && (_r = !1, it = e, ll = l), o = e.pendingLanes, o === 0 && (pt = null), kf(n.stateNode), ye(e, K()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (rl) throw rl = !1, e = Ho, Ho = null, e;
  return ll & 1 && e.tag !== 0 && rn(), o = e.pendingLanes, o & 1 ? e === Vo ? Fn++ : (Fn = 0, Vo = e) : Fn = 0, kt(), null;
}
function rn() {
  if (it !== null) {
    var e = Ks(ll), t = Ae.transition, n = O;
    try {
      if (Ae.transition = null, O = 16 > e ? 16 : e, it === null) var r = !1;
      else {
        if (e = it, it = null, ll = 0, I & 6) throw Error(y(331));
        var l = I;
        for (I |= 4, C = e.current; C !== null; ) {
          var o = C, u = o.child;
          if (C.flags & 16) {
            var i = o.deletions;
            if (i !== null) {
              for (var s = 0; s < i.length; s++) {
                var c = i[s];
                for (C = c; C !== null; ) {
                  var m = C;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dn(8, m, o);
                  }
                  var h = m.child;
                  if (h !== null) h.return = m, C = h;
                  else for (; C !== null; ) {
                    m = C;
                    var p = m.sibling, g = m.return;
                    if (rc(m), m === c) {
                      C = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = g, C = p;
                      break;
                    }
                    C = g;
                  }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var D = k.sibling;
                    k.sibling = null, k = D;
                  } while (k !== null);
                }
              }
              C = o;
            }
          }
          if (o.subtreeFlags & 2064 && u !== null) u.return = o, C = u;
          else e: for (; C !== null; ) {
            if (o = C, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Dn(9, o, o.return);
            }
            var f = o.sibling;
            if (f !== null) {
              f.return = o.return, C = f;
              break e;
            }
            C = o.return;
          }
        }
        var a = e.current;
        for (C = a; C !== null; ) {
          u = C;
          var d = u.child;
          if (u.subtreeFlags & 2064 && d !== null) d.return = u, C = d;
          else e: for (u = a; C !== null; ) {
            if (i = C, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  vl(9, i);
              }
            } catch (S) {
              Q(i, i.return, S);
            }
            if (i === u) {
              C = null;
              break e;
            }
            var v = i.sibling;
            if (v !== null) {
              v.return = i.return, C = v;
              break e;
            }
            C = i.return;
          }
        }
        if (I = l, kt(), He && typeof He.onPostCommitFiberRoot == "function") try {
          He.onPostCommitFiberRoot(sl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      O = n, Ae.transition = t;
    }
  }
  return !1;
}
function ns(e, t, n) {
  t = cn(n, t), t = Ka(e, t, 1), e = dt(e, t, 1), t = ce(), e !== null && (nr(e, 1, t), ye(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) ns(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ns(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (pt === null || !pt.has(r))) {
        e = cn(n, e), e = Ya(t, e, 1), t = dt(t, e, 1), e = ce(), t !== null && (nr(t, 1, e), ye(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Yd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ce(), e.pingedLanes |= e.suspendedLanes & n, q === e && (te & n) === n && (G === 4 || G === 3 && (te & 130023424) === te && 500 > K() - Ru ? At(e, 0) : Lu |= n), ye(e, t);
}
function pc(e, t) {
  t === 0 && (e.mode & 1 ? (t = pr, pr <<= 1, !(pr & 130023424) && (pr = 4194304)) : t = 1);
  var n = ce();
  e = qe(e, t), e !== null && (nr(e, t, n), ye(e, n));
}
function Xd(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), pc(e, n);
}
function Gd(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), pc(e, n);
}
var mc;
mc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || he.current) me = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return me = !1, Md(e, t, n);
    me = !!(e.flags & 131072);
  }
  else me = !1, B && t.flags & 1048576 && ga(t, Gr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ir(e, t), e = t.pendingProps;
      var l = on(t, se.current);
      nn(t, n), l = xu(null, t, r, e, l, n);
      var o = Pu();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ve(r) ? (o = !0, Yr(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ku(t), l.updater = hl, t.stateNode = l, l._reactInternals = t, Lo(t, r, e, n), t = Oo(null, t, r, !0, o, n)) : (t.tag = 0, B && o && pu(t), ae(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ir(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Jd(r), e = Re(r, e), l) {
          case 0:
            t = Io(null, t, r, e, n);
            break e;
          case 1:
            t = Ki(null, t, r, e, n);
            break e;
          case 11:
            t = Qi(null, t, r, e, n);
            break e;
          case 14:
            t = Wi(null, t, r, Re(r.type, e), n);
            break e;
        }
        throw Error(y(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Re(r, l), Io(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Re(r, l), Ki(e, t, r, l, n);
    case 3:
      e: {
        if (Ja(t), e === null) throw Error(y(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, Ca(e, t), qr(t, r, null, n);
        var u = t.memoizedState;
        if (r = u.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: u.cache, pendingSuspenseBoundaries: u.pendingSuspenseBoundaries, transitions: u.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = cn(Error(y(423)), t), t = Yi(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = cn(Error(y(424)), t), t = Yi(e, t, r, n, l);
          break e;
        } else for (ke = ft(t.stateNode.containerInfo.firstChild), Se = t, B = !0, Oe = null, n = Ea(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (un(), r === l) {
            t = be(e, t, n);
            break e;
          }
          ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return xa(t), e === null && Ao(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, u = l.children, _o(r, l) ? u = null : o !== null && _o(r, o) && (t.flags |= 32), Za(e, t), ae(e, t, u, n), t.child;
    case 6:
      return e === null && Ao(t), null;
    case 13:
      return qa(e, t, n);
    case 4:
      return Su(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = sn(t, null, r, n) : ae(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Re(r, l), Qi(e, t, r, l, n);
    case 7:
      return ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, u = l.value, F(Zr, r._currentValue), r._currentValue = u, o !== null) if (je(o.value, u)) {
          if (o.children === l.children && !he.current) {
            t = be(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var i = o.dependencies;
          if (i !== null) {
            u = o.child;
            for (var s = i.firstContext; s !== null; ) {
              if (s.context === r) {
                if (o.tag === 1) {
                  s = Ge(-1, n & -n), s.tag = 2;
                  var c = o.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var m = c.pending;
                    m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
                  }
                }
                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), To(
                  o.return,
                  n,
                  t
                ), i.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (u = o.return, u === null) throw Error(y(341));
            u.lanes |= n, i = u.alternate, i !== null && (i.lanes |= n), To(u, n, t), u = o.sibling;
          } else u = o.child;
          if (u !== null) u.return = o;
          else for (u = o; u !== null; ) {
            if (u === t) {
              u = null;
              break;
            }
            if (o = u.sibling, o !== null) {
              o.return = u.return, u = o;
              break;
            }
            u = u.return;
          }
          o = u;
        }
        ae(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, nn(t, n), l = Te(l), r = r(l), t.flags |= 1, ae(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Re(r, t.pendingProps), l = Re(r.type, l), Wi(e, t, r, l, n);
    case 15:
      return Xa(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Re(r, l), Ir(e, t), t.tag = 1, ve(r) ? (e = !0, Yr(t)) : e = !1, nn(t, n), Wa(t, r, l), Lo(t, r, l, n), Oo(null, t, r, !0, e, n);
    case 19:
      return ba(e, t, n);
    case 22:
      return Ga(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function hc(e, t) {
  return Hs(e, t);
}
function Zd(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ne(e, t, n, r) {
  return new Zd(e, t, n, r);
}
function Mu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Jd(e) {
  if (typeof e == "function") return Mu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === tu) return 11;
    if (e === nu) return 14;
  }
  return 2;
}
function ht(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ne(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Mr(e, t, n, r, l, o) {
  var u = 2;
  if (r = e, typeof e == "function") Mu(e) && (u = 1);
  else if (typeof e == "string") u = 5;
  else e: switch (e) {
    case Bt:
      return Tt(n.children, l, o, t);
    case eu:
      u = 8, l |= 8;
      break;
    case eo:
      return e = Ne(12, n, t, l | 2), e.elementType = eo, e.lanes = o, e;
    case to:
      return e = Ne(13, n, t, l), e.elementType = to, e.lanes = o, e;
    case no:
      return e = Ne(19, n, t, l), e.elementType = no, e.lanes = o, e;
    case xs:
      return gl(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case _s:
          u = 10;
          break e;
        case Cs:
          u = 9;
          break e;
        case tu:
          u = 11;
          break e;
        case nu:
          u = 14;
          break e;
        case nt:
          u = 16, r = null;
          break e;
      }
      throw Error(y(130, e == null ? e : typeof e, ""));
  }
  return t = Ne(u, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Tt(e, t, n, r) {
  return e = Ne(7, e, r, t), e.lanes = n, e;
}
function gl(e, t, n, r) {
  return e = Ne(22, e, r, t), e.elementType = xs, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Zl(e, t, n) {
  return e = Ne(6, e, null, t), e.lanes = n, e;
}
function Jl(e, t, n) {
  return t = Ne(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function qd(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ll(0), this.expirationTimes = Ll(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ll(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Fu(e, t, n, r, l, o, u, i, s) {
  return e = new qd(e, t, n, i, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ne(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ku(o), e;
}
function bd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ut, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function vc(e) {
  if (!e) return yt;
  e = e._reactInternals;
  e: {
    if (Mt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ve(n)) return va(e, n, t);
  }
  return t;
}
function yc(e, t, n, r, l, o, u, i, s) {
  return e = Fu(n, r, !0, e, l, o, u, i, s), e.context = vc(null), n = e.current, r = ce(), l = mt(n), o = Ge(r, l), o.callback = t ?? null, dt(n, o, l), e.current.lanes = l, nr(e, l, r), ye(e, r), e;
}
function wl(e, t, n, r) {
  var l = t.current, o = ce(), u = mt(l);
  return n = vc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ge(o, u), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = dt(l, t, u), e !== null && (Me(e, l, u, o), zr(e, l, u)), u;
}
function ul(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function rs(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ju(e, t) {
  rs(e, t), (e = e.alternate) && rs(e, t);
}
function ep() {
  return null;
}
var gc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Uu(e) {
  this._internalRoot = e;
}
kl.prototype.render = Uu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  wl(e, t, null, null);
};
kl.prototype.unmount = Uu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ot(function() {
      wl(null, e, null, null);
    }), t[Je] = null;
  }
};
function kl(e) {
  this._internalRoot = e;
}
kl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Gs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < lt.length && t !== 0 && t < lt[n].priority; n++) ;
    lt.splice(n, 0, e), n === 0 && Js(e);
  }
};
function Bu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Sl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ls() {
}
function tp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = ul(u);
        o.call(c);
      };
    }
    var u = yc(t, r, e, 0, null, !1, !1, "", ls);
    return e._reactRootContainer = u, e[Je] = u.current, Kn(e.nodeType === 8 ? e.parentNode : e), Ot(), u;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var c = ul(s);
      i.call(c);
    };
  }
  var s = Fu(e, 0, !1, null, null, !1, !1, "", ls);
  return e._reactRootContainer = s, e[Je] = s.current, Kn(e.nodeType === 8 ? e.parentNode : e), Ot(function() {
    wl(t, s, n, r);
  }), s;
}
function El(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var u = o;
    if (typeof l == "function") {
      var i = l;
      l = function() {
        var s = ul(u);
        i.call(s);
      };
    }
    wl(t, u, e, l);
  } else u = tp(n, t, e, l, r);
  return ul(u);
}
Ys = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Nn(t.pendingLanes);
        n !== 0 && (ou(t, n | 1), ye(t, K()), !(I & 6) && (fn = K() + 500, kt()));
      }
      break;
    case 13:
      Ot(function() {
        var r = qe(e, 1);
        if (r !== null) {
          var l = ce();
          Me(r, e, 1, l);
        }
      }), ju(e, 1);
  }
};
uu = function(e) {
  if (e.tag === 13) {
    var t = qe(e, 134217728);
    if (t !== null) {
      var n = ce();
      Me(t, e, 134217728, n);
    }
    ju(e, 134217728);
  }
};
Xs = function(e) {
  if (e.tag === 13) {
    var t = mt(e), n = qe(e, t);
    if (n !== null) {
      var r = ce();
      Me(n, e, t, r);
    }
    ju(e, t);
  }
};
Gs = function() {
  return O;
};
Zs = function(e, t) {
  var n = O;
  try {
    return O = e, t();
  } finally {
    O = n;
  }
};
po = function(e, t, n) {
  switch (t) {
    case "input":
      if (oo(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = dl(r);
            if (!l) throw Error(y(90));
            Ns(r), oo(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ts(e, n);
      break;
    case "select":
      t = n.value, t != null && qt(e, !!n.multiple, t, !1);
  }
};
Ms = Iu;
Fs = Ot;
var np = { usingClientEntryPoint: !1, Events: [lr, Qt, dl, Os, Ds, Iu] }, Cn = { findFiberByHostInstance: xt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, rp = { bundleType: Cn.bundleType, version: Cn.version, rendererPackageName: Cn.rendererPackageName, rendererConfig: Cn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: et.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Bs(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Cn.findFiberByHostInstance || ep, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Cr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Cr.isDisabled && Cr.supportsFiber) try {
    sl = Cr.inject(rp), He = Cr;
  } catch {
  }
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = np;
_e.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Bu(t)) throw Error(y(200));
  return bd(e, t, null, n);
};
_e.createRoot = function(e, t) {
  if (!Bu(e)) throw Error(y(299));
  var n = !1, r = "", l = gc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Fu(e, 1, !1, null, null, n, !1, r, l), e[Je] = t.current, Kn(e.nodeType === 8 ? e.parentNode : e), new Uu(t);
};
_e.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
  return e = Bs(t), e = e === null ? null : e.stateNode, e;
};
_e.flushSync = function(e) {
  return Ot(e);
};
_e.hydrate = function(e, t, n) {
  if (!Sl(t)) throw Error(y(200));
  return El(null, e, t, !0, n);
};
_e.hydrateRoot = function(e, t, n) {
  if (!Bu(e)) throw Error(y(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", u = gc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (u = n.onRecoverableError)), t = yc(t, null, e, 1, n ?? null, l, !1, o, u), e[Je] = t.current, Kn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new kl(t);
};
_e.render = function(e, t, n) {
  if (!Sl(t)) throw Error(y(200));
  return El(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function(e) {
  if (!Sl(e)) throw Error(y(40));
  return e._reactRootContainer ? (Ot(function() {
    El(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Je] = null;
    });
  }), !0) : !1;
};
_e.unstable_batchedUpdates = Iu;
_e.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Sl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return El(e, t, n, !1, r);
};
_e.version = "18.3.1-next-f1338f8080-20240426";
function wc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wc);
    } catch (e) {
      console.error(e);
    }
}
wc(), ws.exports = _e;
var lp = ws.exports, kc, os = lp;
kc = os.createRoot, os.hydrateRoot;
var Sc = { exports: {} }, op = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", up = op, ip = up;
function Ec() {
}
function _c() {
}
_c.resetWarningCache = Ec;
var sp = function() {
  function e(r, l, o, u, i, s) {
    if (s !== ip) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw c.name = "Invariant Violation", c;
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
    checkPropTypes: _c,
    resetWarningCache: Ec
  };
  return n.PropTypes = n, n;
};
Sc.exports = sp();
var ap = Sc.exports;
const E = /* @__PURE__ */ Ko(ap);
var Cc = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", u = 0; u < arguments.length; u++) {
        var i = arguments[u];
        i && (o = l(o, r(i)));
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
      var u = "";
      for (var i in o)
        t.call(o, i) && o[i] && (u = l(u, i));
      return u;
    }
    function l(o, u) {
      return u ? o ? o + " " + u : o + u : o;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Cc);
var cp = Cc.exports;
const ee = /* @__PURE__ */ Ko(cp), xc = /* @__PURE__ */ _.forwardRef(({
  className: e,
  children: t,
  ...n
}, r) => /* @__PURE__ */ _.createElement("div", {
  className: ee("pgn__card-body", e),
  ref: r,
  ...n
}, t)), us = "card", ql = ["primary", "secondary", "success", "danger", "warning", "info", "dark", "light"], fp = ["white", "muted"], $u = /* @__PURE__ */ _.forwardRef(({
  prefix: e,
  className: t,
  bgColor: n,
  textColor: r,
  borderColor: l,
  hasBody: o = !1,
  children: u,
  as: i = "div",
  ...s
}, c) => {
  const m = ee(t, e ? `${e}-${us}` : us, n && `bg-${n}`, r && `text-${r}`, l && `border-${l}`);
  return /* @__PURE__ */ _.createElement(i, {
    ref: c,
    ...s,
    className: m
  }, o ? /* @__PURE__ */ _.createElement(xc, null, u) : u);
});
$u.propTypes = {
  /** Prefix for component CSS classes. */
  prefix: E.string,
  /** Background color of the card. */
  bgColor: E.oneOf(ql),
  /** Text color of the card. */
  textColor: E.oneOf([...ql, ...fp]),
  /** Border color of the card. */
  borderColor: E.oneOf(ql),
  /** Determines whether the card should render its children inside a `CardBody` wrapper. */
  hasBody: E.bool,
  /** Set a custom element for this component. */
  as: E.elementType,
  /** Additional CSS class names to apply to the card element. */
  className: E.string,
  /** The content to render inside the card. */
  children: E.node
};
const Ft = /* @__PURE__ */ ie.createContext({
  orientation: "vertical",
  isLoading: !1,
  variant: "light"
});
function dp({
  orientation: e = "vertical",
  children: t,
  isLoading: n = !1,
  variant: r = "light"
}) {
  return /* @__PURE__ */ _.createElement(Ft.Provider, {
    value: {
      orientation: e,
      isLoading: n,
      variant: r
    }
  }, t);
}
const pp = _.createContext({}), Pc = !0;
function mp({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: l, circle: o, direction: u, duration: i, enableAnimation: s = Pc, customHighlightBackground: c }) {
  const m = {};
  return u === "rtl" && (m["--animation-direction"] = "reverse"), typeof i == "number" && (m["--animation-duration"] = `${i}s`), s || (m["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (m.width = n), (typeof r == "string" || typeof r == "number") && (m.height = r), (typeof l == "string" || typeof l == "number") && (m.borderRadius = l), o && (m.borderRadius = "50%"), typeof e < "u" && (m["--base-color"] = e), typeof t < "u" && (m["--highlight-color"] = t), typeof c == "string" && (m["--custom-highlight-background"] = c), m;
}
function dn({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: l, circle: o = !1, style: u, ...i }) {
  var s, c, m;
  const h = _.useContext(pp), p = { ...i };
  for (const [d, v] of Object.entries(i))
    typeof v > "u" && delete p[d];
  const g = {
    ...h,
    ...p,
    circle: o
  }, w = {
    ...u,
    ...mp(g)
  };
  let k = "react-loading-skeleton";
  n && (k += ` ${n}`);
  const D = (s = g.inline) !== null && s !== void 0 ? s : !1, f = [], a = Math.ceil(e);
  for (let d = 0; d < a; d++) {
    let v = w;
    if (a > e && d === a - 1) {
      const x = (c = v.width) !== null && c !== void 0 ? c : "100%", N = e % 1, A = typeof x == "number" ? x * N : `calc(${x} * ${N})`;
      v = { ...v, width: A };
    }
    const S = _.createElement("span", { className: k, style: v, key: d }, "‌");
    D ? f.push(S) : f.push(_.createElement(
      _.Fragment,
      { key: d },
      S,
      _.createElement("br", null)
    ));
  }
  return _.createElement("span", { className: r, "data-testid": l, "aria-live": "polite", "aria-busy": (m = g.enableAnimation) !== null && m !== void 0 ? m : Pc }, t ? f.map((d, v) => _.createElement(t, { key: v }, d)) : f);
}
const hp = 20, Hu = /* @__PURE__ */ _.forwardRef(({
  actions: e,
  className: t,
  size: n,
  subtitle: r,
  title: l,
  skeletonHeight: o,
  skeletonWidth: u
}, i) => {
  const {
    isLoading: s
  } = ie.useContext(Ft), c = ie.useCallback((m) => {
    if (/* @__PURE__ */ _.isValidElement(m)) {
      const {
        children: h
      } = m.props, p = {
        size: n,
        children: Array.isArray(h) ? h.map(c) : c(h)
      };
      return /* @__PURE__ */ _.cloneElement(m, p);
    }
    return m;
  }, [n]);
  return s ? /* @__PURE__ */ _.createElement("div", {
    className: ee("pgn__card-header", t)
  }, /* @__PURE__ */ _.createElement(dn, {
    containerClassName: "pgn__card-header-loader",
    height: o,
    width: u
  })) : /* @__PURE__ */ _.createElement("div", {
    className: ee("pgn__card-header", t),
    ref: i
  }, /* @__PURE__ */ _.createElement("div", {
    className: "pgn__card-header-content"
  }, l && /* @__PURE__ */ _.createElement("div", {
    className: `pgn__card-header-title-${n}`
  }, l), r && /* @__PURE__ */ _.createElement("div", {
    className: `pgn__card-header-subtitle-${n}`
  }, r)), e && /* @__PURE__ */ _.createElement("div", {
    className: "pgn__card-header-actions"
  }, n !== "md" ? c(e) : e));
});
Hu.propTypes = {
  /** Optional node to render on the top right of the card header,
   *  i.e. ActionRow or a DropdownMenu.
   * */
  actions: E.node,
  /** The class name for the CardHeader component */
  className: E.string,
  /** The title for the CardHeader component */
  title: E.node,
  /** The size of the CardHeader component */
  size: E.oneOf(["sm", "md"]),
  /** The subtitle of the CardHeader component */
  subtitle: E.node,
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: E.number,
  /** Specifies width of  skeleton in loading state. */
  skeletonWidth: E.number
};
Hu.defaultProps = {
  actions: null,
  className: null,
  size: "md",
  title: null,
  subtitle: null,
  skeletonHeight: hp,
  skeletonWidth: null
};
const vp = /* @__PURE__ */ ie.forwardRef(({
  className: e,
  ...t
}, n) => /* @__PURE__ */ _.createElement("div", {
  className: ee("pgn__card-divider", e),
  ref: n,
  ...t
})), yp = 100, Vu = /* @__PURE__ */ _.forwardRef(({
  className: e,
  children: t,
  title: n,
  actions: r,
  muted: l,
  skeletonHeight: o,
  skeletonWidth: u
}, i) => {
  const {
    isLoading: s
  } = ie.useContext(Ft);
  return s ? /* @__PURE__ */ _.createElement("div", {
    className: ee("pgn__card-section", e, {
      "is-muted": l
    })
  }, /* @__PURE__ */ _.createElement(dn, {
    containerClassName: "pgn__card-section-loader",
    height: o,
    width: u
  })) : /* @__PURE__ */ _.createElement("div", {
    className: ee("pgn__card-section", e, {
      "is-muted": l
    }),
    ref: i
  }, n && /* @__PURE__ */ _.createElement("div", {
    className: "pgn__card-section-title"
  }, n), t, r && /* @__PURE__ */ _.createElement("div", {
    className: "pgn__card-section-actions"
  }, r));
});
Vu.propTypes = {
  /** Specifies class name to append to the base element. */
  className: E.string,
  /** Specifies contents of the component. */
  children: E.node,
  /** Specifies title of the `Section`. */
  title: E.node,
  /** Specifies node to render on the bottom right of the `Section` (i.e. `ActionRow`). */
  actions: E.node,
  /** Specifies whether to display `Section` with muted styling. */
  muted: E.bool,
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: E.number,
  /** Specifies width of skeleton in loading state. */
  skeletonWidth: E.number
};
Vu.defaultProps = {
  children: null,
  className: void 0,
  title: void 0,
  actions: void 0,
  muted: !1,
  skeletonHeight: yp,
  skeletonWidth: void 0
};
const gp = 18, Qu = /* @__PURE__ */ _.forwardRef(({
  children: e,
  className: t,
  isStacked: n,
  textElement: r,
  skeletonHeight: l,
  skeletonWidth: o,
  orientation: u
}, i) => {
  const {
    orientation: s,
    isLoading: c
  } = ie.useContext(Ft), m = u || s, h = `pgn__card-footer ${m}${n ? "-stacked" : ""}`, p = `pgn__card-footer-text ${m}${n ? "-stacked" : ""}`;
  return c ? /* @__PURE__ */ _.createElement("div", {
    className: ee(t, h)
  }, /* @__PURE__ */ _.createElement(dn, {
    containerClassName: "pgn__card-footer-loader",
    height: l,
    width: o
  })) : /* @__PURE__ */ _.createElement("div", {
    className: ee(t, h),
    ref: i
  }, r && /* @__PURE__ */ _.createElement("div", {
    className: p
  }, r), e);
});
Qu.propTypes = {
  /** Specifies contents of the component. */
  children: E.node,
  /** Specifies class name to append to the base element. */
  className: E.string,
  /** Optional node to display near actions. Should be either a plain text or an element containing text (e.g. link). */
  textElement: E.node,
  /** Specifies whether to use stacked variant. */
  isStacked: E.bool,
  /** Specifies which orientation to use. This prop will override context value if provided. */
  orientation: E.oneOf(["horizontal", "vertical"]),
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: E.number,
  /** Specifies width of skeleton in loading state. */
  skeletonWidth: E.number
};
Qu.defaultProps = {
  children: null,
  className: void 0,
  textElement: void 0,
  isStacked: !1,
  orientation: void 0,
  skeletonHeight: gp,
  skeletonWidth: void 0
};
const Nc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACMCAYAAAB/AhJnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7dRBEYBADACxwuDf5j0QUXywiYhc7zk7APzd3gNAgvABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIp4BaNpp2Q/3/wfPkGyXOQAAAABJRU5ErkJggg==", wp = 140, kp = 41, Wu = /* @__PURE__ */ _.forwardRef(({
  src: e,
  fallbackSrc: t,
  srcAlt: n,
  logoSrc: r,
  fallbackLogoSrc: l,
  logoAlt: o,
  skeletonHeight: u,
  skeletonWidth: i,
  logoSkeleton: s,
  logoSkeletonHeight: c,
  logoSkeletonWidth: m,
  className: h,
  imageLoadingType: p,
  skeletonDuringImageLoad: g
}, w) => {
  const {
    orientation: k,
    isLoading: D
  } = ie.useContext(Ft), [f, a] = ie.useState(!1), [d, v] = ie.useState(!1), S = `pgn__card-wrapper-image-cap ${k}`, x = () => /* @__PURE__ */ _.createElement(dn, {
    containerClassName: "pgn__card-image-cap-loader",
    height: k === "horizontal" ? "100%" : u,
    width: i
  }), N = () => /* @__PURE__ */ _.createElement(dn, {
    containerClassName: "pgn__card-logo-cap",
    height: c,
    width: m
  });
  if (D)
    return /* @__PURE__ */ _.createElement("div", {
      className: ee(S, h),
      "data-testid": "image-loader-wrapper"
    }, x(), s && N());
  const A = (M, z, ge) => {
    const {
      currentTarget: Qe
    } = M;
    if (!z || Qe.src.endsWith(z)) {
      ge === "imageCap" ? Qe.src = Nc : v(!1);
      return;
    }
    Qe.src = z;
  };
  return /* @__PURE__ */ _.createElement("div", {
    className: ee(h, S),
    ref: w
  }, !!e && /* @__PURE__ */ _.createElement(_.Fragment, null, g && !f && x(), /* @__PURE__ */ _.createElement("img", {
    className: ee("pgn__card-image-cap", {
      show: f
    }),
    src: e,
    onError: (M) => A(M, t, "imageCap"),
    onLoad: () => a(!0),
    alt: n,
    loading: p
  })), !!r && /* @__PURE__ */ _.createElement(_.Fragment, null, g && !d && N(), /* @__PURE__ */ _.createElement("img", {
    className: ee("pgn__card-logo-cap", {
      show: d
    }),
    src: r,
    onError: (M) => A(M, l, "logoCap"),
    onLoad: () => v(!0),
    alt: o,
    loading: p
  })));
});
Wu.propTypes = {
  /** Specifies class name to append to the base element. */
  className: E.string,
  /** Specifies image src. */
  src: E.string,
  /** Specifies fallback image src. */
  fallbackSrc: E.string,
  /** Specifies image alt text. */
  srcAlt: E.string,
  /** Specifies logo src to put on top of the image. */
  logoSrc: E.string,
  /** Specifies fallback image logo src. */
  fallbackLogoSrc: E.string,
  /** Specifies logo image alt text. */
  logoAlt: E.string,
  /** Specifies height of Image skeleton in loading state. */
  skeletonHeight: E.number,
  /** Specifies width of Image skeleton in loading state. */
  skeletonWidth: E.number,
  /** Specifies whether the cap should be displayed during loading. */
  logoSkeleton: E.bool,
  /** Specifies height of Logo skeleton in loading state. */
  logoSkeletonHeight: E.number,
  /** Specifies width of Logo skeleton in loading state. */
  logoSkeletonWidth: E.number,
  /** Specifies loading type for images */
  imageLoadingType: E.oneOf(["eager", "lazy"]),
  /** Render the loading skeleton when the image is loading in
   *  addition to when the whole card is in `isLoading` state */
  skeletonDuringImageLoad: E.bool
};
Wu.defaultProps = {
  src: void 0,
  fallbackSrc: Nc,
  logoSrc: void 0,
  fallbackLogoSrc: void 0,
  className: void 0,
  srcAlt: void 0,
  logoAlt: void 0,
  skeletonHeight: wp,
  logoSkeleton: !1,
  logoSkeletonHeight: kp,
  skeletonWidth: void 0,
  logoSkeletonWidth: void 0,
  imageLoadingType: "eager",
  skeletonDuringImageLoad: !1
};
let is = 0;
const Sp = (e = "id") => (is += 1, `${e}${is}`);
let Jt = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function Ac(e, t, n) {
  class r extends _.Component {
    constructor(o) {
      super(o), this.transformProps = this.transformProps.bind(this);
    }
    warn(o) {
    }
    transformProps(o, u) {
      if (n[u] === void 0)
        return o[u] = this.props[u], o;
      const {
        deprType: i,
        newName: s,
        expect: c,
        transform: m,
        message: h
      } = n[u];
      switch (i) {
        case Jt.MOVED:
          this.warn(`${t}: The prop '${u}' has been moved to '${s}'.`), o[s] = this.props[u];
          break;
        case Jt.REMOVED:
          this.warn(`${t}: The prop '${u}' has been removed. '${h}'`);
          break;
        case Jt.FORMAT:
          c(this.props[u]) ? o[u] = this.props[u] : (this.warn(`${t}: The prop '${u}' expects a new format. ${h}`), o[u] = m(this.props[u], this.props));
          break;
        case Jt.MOVED_AND_FORMAT: {
          const p = this.props[u];
          let g = `${t}: The prop '${u}' has been moved to '${s}'`;
          c && !c(p) && (g += " and expects a new format"), g += h ? `. ${h}` : "", this.warn(g), o[s] = m ? m(p, this.props) : p;
          break;
        }
        default:
          o[u] = this.props[u];
          break;
      }
      return o;
    }
    render() {
      const {
        children: o,
        ...u
      } = Object.keys(this.props).reduce(this.transformProps, {});
      return /* @__PURE__ */ _.createElement(e, {
        ...u
      }, this.props.children || o);
    }
  }
  return (
    // eslint-disable-next-line react/static-property-placement
    Zu(r, "displayName", `withDeprecatedProps(${t})`), r
  );
}
function Ku({
  src: e,
  id: t,
  className: n,
  hidden: r,
  screenReaderText: l,
  svgAttrs: o,
  size: u,
  ...i
}) {
  if (e) {
    const s = o["aria-label"] || o["aria-labelledby"], c = {
      ...o
    };
    return s || (c["aria-label"] = void 0, c["aria-hidden"] = !0), /* @__PURE__ */ _.createElement("span", {
      className: ee("pgn__icon", {
        [`pgn__icon__${u}`]: !!u
      }, n),
      id: t,
      ...i
    }, /* @__PURE__ */ _.createElement(e, {
      role: "img",
      focusable: !1,
      ...c
    }), l && /* @__PURE__ */ _.createElement("span", {
      className: "sr-only"
    }, l));
  }
  return /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement("span", {
    id: t || Sp("Icon"),
    className: n,
    "aria-hidden": r
  }), l && /* @__PURE__ */ _.createElement("span", {
    className: "sr-only"
  }, l));
}
Ku.propTypes = {
  /**
   * An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';`
   */
  src: E.elementType,
  /** HTML element attributes to pass through to the underlying svg element */
  svgAttrs: E.shape({
    "aria-label": E.string,
    "aria-labelledby": E.string
  }),
  /**
   * the `id` property of the Icon element, by default this value is generated
   * with the `newId` function with the `prefix` of `Icon`.
   */
  id: E.string,
  /** The size of the icon. */
  size: E.oneOf(["xs", "sm", "md", "lg"]),
  /** A class name that will define what the Icon looks like. */
  className: E.string,
  /**
   * a boolean that determines the value of `aria-hidden` attribute on the Icon span,
   * this value is `true` by default.
   */
  hidden: E.bool,
  /**
   * a string or an element that will be used on a secondary span leveraging the `sr-only` style
   * for screenreader only text, this value is `undefined` by default. This value is recommended for use unless
   * the Icon is being used in a way that is purely decorative or provides no additional context for screen
   * reader users. This field should be thought of the same way an `alt` attribute would be used for `image` tags.
   */
  screenReaderText: E.oneOfType([E.string, E.element])
};
Ku.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const Ep = Ac(Ku, "Icon", {
  className: {
    deprType: Jt.FORMAT,
    expect: (e) => typeof e == "string",
    transform: (e) => Array.isArray(e) ? e.join(" ") : e,
    message: "It should be a string."
  }
}), Yu = /* @__PURE__ */ _.forwardRef(({
  className: e,
  children: t,
  variant: n,
  icon: r,
  title: l,
  actions: o,
  ...u
}, i) => {
  const {
    isLoading: s
  } = ie.useContext(Ft);
  return s ? /* @__PURE__ */ _.createElement("div", {
    className: ee("pgn__card-status", e),
    "data-testid": "card-status-skeleton",
    ref: i
  }, /* @__PURE__ */ _.createElement(dn, null)) : /* @__PURE__ */ _.createElement("div", {
    className: ee("pgn__card-status", `pgn__card-status__${n}`, e),
    ref: i,
    ...u
  }, /* @__PURE__ */ _.createElement("div", {
    className: "pgn__card-status__content"
  }, r && /* @__PURE__ */ _.createElement(Ep, {
    className: "pgn__card-status__content-icon",
    src: r
  }), /* @__PURE__ */ _.createElement("div", {
    className: "pgn__card-status__message-content"
  }, l && /* @__PURE__ */ _.createElement("div", {
    className: "pgn__card-status__heading"
  }, l), t)), !!o && /* @__PURE__ */ _.createElement("div", {
    className: "pgn__card-status__actions"
  }, o));
});
Yu.propTypes = {
  /** Specifies the content of the component. */
  children: E.node.isRequired,
  /** The class to append to the base element. */
  className: E.string,
  /** Icon that will be shown in the top-left corner. */
  icon: E.func,
  /** Specifies variant to use. */
  variant: E.oneOf(["primary", "success", "danger", "warning"]),
  /** Specifies title for the `Card.Status`. */
  title: E.oneOfType([E.element, E.string]),
  /** Specifies any optional actions, e.g. button(s). */
  actions: E.node
};
Yu.defaultProps = {
  className: void 0,
  icon: void 0,
  variant: "warning",
  title: void 0,
  actions: void 0
};
const _p = ["light", "dark", "muted"], Xu = /* @__PURE__ */ _.forwardRef(({
  orientation: e,
  isLoading: t,
  className: n,
  isClickable: r,
  muted: l,
  variant: o,
  ...u
}, i) => {
  const s = l ? "muted" : o;
  return /* @__PURE__ */ _.createElement(dp, {
    orientation: e,
    isLoading: t,
    variant: s
  }, /* @__PURE__ */ _.createElement($u, {
    ...u,
    className: ee(n, "pgn__card", {
      horizontal: e === "horizontal",
      clickable: r,
      [`pgn__card-${s}`]: s
    }),
    ref: i,
    tabIndex: r ? 0 : -1
  }));
});
Xu.propTypes = {
  /** Specifies class name to append to the base element. */
  className: E.string,
  /** Specifies which orientation to use. */
  orientation: E.oneOf(["vertical", "horizontal"]),
  /** Specifies whether the `Card` is clickable, if `true` appropriate `hover` and `focus` styling will be added. */
  isClickable: E.bool,
  /** Specifies loading state. */
  isLoading: E.bool,
  /** Specifies `Card` style variant. */
  variant: E.oneOf(_p),
  /** **Deprecated**. Specifies whether `Card` uses `muted` variant. Use `variant="muted"` instead. */
  muted: E.bool
};
Xu.defaultProps = {
  ...$u.defaultProps,
  className: void 0,
  orientation: "vertical",
  isClickable: !1,
  variant: "light",
  isLoading: !1
};
const Fe = Ac(Xu, "Card", {
  muted: {
    deprType: Jt.REMOVED,
    message: 'Use "variant" prop instead, i.e. variant="muted"'
  }
});
Fe.Status = Yu;
Fe.Header = Hu;
Fe.Divider = vp;
Fe.Section = Vu;
Fe.Footer = Qu;
Fe.ImageCap = Wu;
Fe.Context = Ft;
Fe.Body = xc;
const Cp = ({
  displayName: e,
  imageUrl: t,
  markers: n
}) => {
  const [r, l] = ie.useState(!1), [o, u] = ie.useState(null), i = (p) => {
    u(o === p ? null : p);
  }, s = (p) => `marker-${p}`, c = (p) => `header-${p}`, m = (p, g) => {
    (p.key === "Enter" || p.key === " ") && (p.preventDefault(), i(g));
  }, h = (p, g) => {
    const w = o === p.id;
    return /* @__PURE__ */ oe.jsxs("div", { children: [
      /* @__PURE__ */ oe.jsx(
        "div",
        {
          role: "button",
          tabIndex: 0,
          className: `image-commentary-marker ${s(p.type)} ${w ? "active" : ""}`,
          style: {
            left: `${p.x}%`,
            top: `${p.y}%`
          },
          onClick: () => i(p.id),
          onKeyDown: (k) => m(k, p.id),
          "aria-label": `View commentary: ${p.label}`,
          children: g + 1
        }
      ),
      w && /* @__PURE__ */ oe.jsxs(
        "div",
        {
          className: "custom-popover",
          style: {
            left: `${p.x}%`,
            top: `${p.y}%`
          },
          children: [
            /* @__PURE__ */ oe.jsx("div", { className: `popover-header ${c(p.type)}`, children: p.label }),
            /* @__PURE__ */ oe.jsx("div", { className: "popover-body", children: p.commentary })
          ]
        }
      )
    ] }, p.id);
  };
  return /* @__PURE__ */ oe.jsx("div", { className: "image-commentary-student-view", children: /* @__PURE__ */ oe.jsxs(Fe, { children: [
    e && /* @__PURE__ */ oe.jsx(Fe.Header, { title: e }),
    /* @__PURE__ */ oe.jsxs(Fe.Section, { children: [
      t ? /* @__PURE__ */ oe.jsxs("div", { className: "image-commentary-container", children: [
        /* @__PURE__ */ oe.jsx(
          "img",
          {
            src: t,
            alt: e,
            onLoad: () => l(!0)
          }
        ),
        r && n.map((p, g) => h(p, g))
      ] }) : /* @__PURE__ */ oe.jsx("div", { className: "text-center p-4 bg-light rounded", children: /* @__PURE__ */ oe.jsx("p", { className: "text-muted mb-0", children: "No image configured" }) }),
      n.length === 0 && t && /* @__PURE__ */ oe.jsx("p", { className: "text-muted text-center mt-3 mb-0", children: "No commentary markers added yet" })
    ] })
  ] }) });
}, Pp = (e, t) => {
  kc(e).render(
    /* @__PURE__ */ oe.jsxs(ie.StrictMode, { children: [
      /* @__PURE__ */ oe.jsx(
        Cp,
        {
          displayName: t.displayName,
          imageUrl: t.imageUrl,
          markers: t.markers
        }
      ),
      "    "
    ] })
  );
};
export {
  Pp as renderBlock
};
//# sourceMappingURL=student-ui.js.map
