var mw = Object.defineProperty;
var hw = (e, t, n) => t in e ? mw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var vf = (e, t, n) => hw(e, typeof t != "symbol" ? t + "" : t, n);
function Ii(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var uv = { exports: {} }, Ts = {}, cv = { exports: {} }, ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var La = Symbol.for("react.element"), vw = Symbol.for("react.portal"), gw = Symbol.for("react.fragment"), xw = Symbol.for("react.strict_mode"), yw = Symbol.for("react.profiler"), ww = Symbol.for("react.provider"), Ew = Symbol.for("react.context"), bw = Symbol.for("react.forward_ref"), kw = Symbol.for("react.suspense"), Cw = Symbol.for("react.memo"), Sw = Symbol.for("react.lazy"), gf = Symbol.iterator;
function _w(e) {
  return e === null || typeof e != "object" ? null : (e = gf && e[gf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var pv = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, dv = Object.assign, fv = {};
function Pi(e, t, n) {
  this.props = e, this.context = t, this.refs = fv, this.updater = n || pv;
}
Pi.prototype.isReactComponent = {};
Pi.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Pi.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function mv() {
}
mv.prototype = Pi.prototype;
function qc(e, t, n) {
  this.props = e, this.context = t, this.refs = fv, this.updater = n || pv;
}
var Kc = qc.prototype = new mv();
Kc.constructor = qc;
dv(Kc, Pi.prototype);
Kc.isPureReactComponent = !0;
var xf = Array.isArray, hv = Object.prototype.hasOwnProperty, Qc = { current: null }, vv = { key: !0, ref: !0, __self: !0, __source: !0 };
function gv(e, t, n) {
  var r, i = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) hv.call(t, r) && !vv.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) i[r] === void 0 && (i[r] = s[r]);
  return { $$typeof: La, type: e, key: a, ref: o, props: i, _owner: Qc.current };
}
function Aw(e, t) {
  return { $$typeof: La, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Xc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === La;
}
function Tw(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var yf = /\/+/g;
function Al(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Tw("" + e.key) : t.toString(36);
}
function Ao(e, t, n, r, i) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else switch (a) {
    case "string":
    case "number":
      o = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case La:
        case vw:
          o = !0;
      }
  }
  if (o) return o = e, i = i(o), e = r === "" ? "." + Al(o, 0) : r, xf(i) ? (n = "", e != null && (n = e.replace(yf, "$&/") + "/"), Ao(i, t, n, "", function(u) {
    return u;
  })) : i != null && (Xc(i) && (i = Aw(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(yf, "$&/") + "/") + e)), t.push(i)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", xf(e)) for (var s = 0; s < e.length; s++) {
    a = e[s];
    var l = r + Al(a, s);
    o += Ao(a, t, n, l, i);
  }
  else if (l = _w(e), typeof l == "function") for (e = l.call(e), s = 0; !(a = e.next()).done; ) a = a.value, l = r + Al(a, s++), o += Ao(a, t, n, l, i);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Za(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return Ao(e, r, "", "", function(a) {
    return t.call(n, a, i++);
  }), r;
}
function Nw(e) {
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
var ot = { current: null }, To = { transition: null }, Iw = { ReactCurrentDispatcher: ot, ReactCurrentBatchConfig: To, ReactCurrentOwner: Qc };
function xv() {
  throw Error("act(...) is not supported in production builds of React.");
}
ne.Children = { map: Za, forEach: function(e, t, n) {
  Za(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Za(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Za(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Xc(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ne.Component = Pi;
ne.Fragment = gw;
ne.Profiler = yw;
ne.PureComponent = qc;
ne.StrictMode = xw;
ne.Suspense = kw;
ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Iw;
ne.act = xv;
ne.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = dv({}, e.props), i = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = Qc.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (l in t) hv.call(t, l) && !vv.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: La, type: e.type, key: i, ref: a, props: r, _owner: o };
};
ne.createContext = function(e) {
  return e = { $$typeof: Ew, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: ww, _context: e }, e.Consumer = e;
};
ne.createElement = gv;
ne.createFactory = function(e) {
  var t = gv.bind(null, e);
  return t.type = e, t;
};
ne.createRef = function() {
  return { current: null };
};
ne.forwardRef = function(e) {
  return { $$typeof: bw, render: e };
};
ne.isValidElement = Xc;
ne.lazy = function(e) {
  return { $$typeof: Sw, _payload: { _status: -1, _result: e }, _init: Nw };
};
ne.memo = function(e, t) {
  return { $$typeof: Cw, type: e, compare: t === void 0 ? null : t };
};
ne.startTransition = function(e) {
  var t = To.transition;
  To.transition = {};
  try {
    e();
  } finally {
    To.transition = t;
  }
};
ne.unstable_act = xv;
ne.useCallback = function(e, t) {
  return ot.current.useCallback(e, t);
};
ne.useContext = function(e) {
  return ot.current.useContext(e);
};
ne.useDebugValue = function() {
};
ne.useDeferredValue = function(e) {
  return ot.current.useDeferredValue(e);
};
ne.useEffect = function(e, t) {
  return ot.current.useEffect(e, t);
};
ne.useId = function() {
  return ot.current.useId();
};
ne.useImperativeHandle = function(e, t, n) {
  return ot.current.useImperativeHandle(e, t, n);
};
ne.useInsertionEffect = function(e, t) {
  return ot.current.useInsertionEffect(e, t);
};
ne.useLayoutEffect = function(e, t) {
  return ot.current.useLayoutEffect(e, t);
};
ne.useMemo = function(e, t) {
  return ot.current.useMemo(e, t);
};
ne.useReducer = function(e, t, n) {
  return ot.current.useReducer(e, t, n);
};
ne.useRef = function(e) {
  return ot.current.useRef(e);
};
ne.useState = function(e) {
  return ot.current.useState(e);
};
ne.useSyncExternalStore = function(e, t, n) {
  return ot.current.useSyncExternalStore(e, t, n);
};
ne.useTransition = function() {
  return ot.current.useTransition();
};
ne.version = "18.3.1";
cv.exports = ne;
var w = cv.exports;
const m = /* @__PURE__ */ Ii(w);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pw = w, Fw = Symbol.for("react.element"), Rw = Symbol.for("react.fragment"), Ow = Object.prototype.hasOwnProperty, Dw = Pw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Mw = { key: !0, ref: !0, __self: !0, __source: !0 };
function yv(e, t, n) {
  var r, i = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Ow.call(t, r) && !Mw.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: Fw, type: e, key: a, ref: o, props: i, _owner: Dw.current };
}
Ts.Fragment = Rw;
Ts.jsx = yv;
Ts.jsxs = yv;
uv.exports = Ts;
var C = uv.exports, wv = { exports: {} }, St = {}, Ev = { exports: {} }, bv = {};
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
  function t(N, R) {
    var M = N.length;
    N.push(R);
    e: for (; 0 < M; ) {
      var K = M - 1 >>> 1, V = N[K];
      if (0 < i(V, R)) N[K] = R, N[M] = V, M = K;
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var R = N[0], M = N.pop();
    if (M !== R) {
      N[0] = M;
      e: for (var K = 0, V = N.length, Te = V >>> 1; K < Te; ) {
        var ue = 2 * (K + 1) - 1, L = N[ue], X = ue + 1, fe = N[X];
        if (0 > i(L, M)) X < V && 0 > i(fe, L) ? (N[K] = fe, N[X] = M, K = X) : (N[K] = L, N[ue] = M, K = ue);
        else if (X < V && 0 > i(fe, M)) N[K] = fe, N[X] = M, K = X;
        else break e;
      }
    }
    return R;
  }
  function i(N, R) {
    var M = N.sortIndex - R.sortIndex;
    return M !== 0 ? M : N.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function() {
      return a.now();
    };
  } else {
    var o = Date, s = o.now();
    e.unstable_now = function() {
      return o.now() - s;
    };
  }
  var l = [], u = [], c = 1, f = null, d = 3, v = !1, E = !1, x = !1, b = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(N) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) r(u);
      else if (R.startTime <= N) r(u), R.sortIndex = R.expirationTime, t(l, R);
      else break;
      R = n(u);
    }
  }
  function k(N) {
    if (x = !1, y(N), !E) if (n(l) !== null) E = !0, te(S);
    else {
      var R = n(u);
      R !== null && ee(k, R.startTime - N);
    }
  }
  function S(N, R) {
    E = !1, x && (x = !1, g(T), T = -1), v = !0;
    var M = d;
    try {
      for (y(R), f = n(l); f !== null && (!(f.expirationTime > R) || N && !B()); ) {
        var K = f.callback;
        if (typeof K == "function") {
          f.callback = null, d = f.priorityLevel;
          var V = K(f.expirationTime <= R);
          R = e.unstable_now(), typeof V == "function" ? f.callback = V : f === n(l) && r(l), y(R);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var Te = !0;
      else {
        var ue = n(u);
        ue !== null && ee(k, ue.startTime - R), Te = !1;
      }
      return Te;
    } finally {
      f = null, d = M, v = !1;
    }
  }
  var _ = !1, A = null, T = -1, O = 5, P = -1;
  function B() {
    return !(e.unstable_now() - P < O);
  }
  function H() {
    if (A !== null) {
      var N = e.unstable_now();
      P = N;
      var R = !0;
      try {
        R = A(!0, N);
      } finally {
        R ? U() : (_ = !1, A = null);
      }
    } else _ = !1;
  }
  var U;
  if (typeof h == "function") U = function() {
    h(H);
  };
  else if (typeof MessageChannel < "u") {
    var Q = new MessageChannel(), Z = Q.port2;
    Q.port1.onmessage = H, U = function() {
      Z.postMessage(null);
    };
  } else U = function() {
    b(H, 0);
  };
  function te(N) {
    A = N, _ || (_ = !0, U());
  }
  function ee(N, R) {
    T = b(function() {
      N(e.unstable_now());
    }, R);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    E || v || (E = !0, te(S));
  }, e.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(N) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var R = 3;
        break;
      default:
        R = d;
    }
    var M = d;
    d = R;
    try {
      return N();
    } finally {
      d = M;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(N, R) {
    switch (N) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        N = 3;
    }
    var M = d;
    d = N;
    try {
      return R();
    } finally {
      d = M;
    }
  }, e.unstable_scheduleCallback = function(N, R, M) {
    var K = e.unstable_now();
    switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? K + M : K) : M = K, N) {
      case 1:
        var V = -1;
        break;
      case 2:
        V = 250;
        break;
      case 5:
        V = 1073741823;
        break;
      case 4:
        V = 1e4;
        break;
      default:
        V = 5e3;
    }
    return V = M + V, N = { id: c++, callback: R, priorityLevel: N, startTime: M, expirationTime: V, sortIndex: -1 }, M > K ? (N.sortIndex = M, t(u, N), n(l) === null && N === n(u) && (x ? (g(T), T = -1) : x = !0, ee(k, M - K))) : (N.sortIndex = V, t(l, N), E || v || (E = !0, te(S))), N;
  }, e.unstable_shouldYield = B, e.unstable_wrapCallback = function(N) {
    var R = d;
    return function() {
      var M = d;
      d = R;
      try {
        return N.apply(this, arguments);
      } finally {
        d = M;
      }
    };
  };
})(bv);
Ev.exports = bv;
var Lw = Ev.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jw = w, bt = Lw;
function I(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var kv = /* @__PURE__ */ new Set(), ca = {};
function Tr(e, t) {
  mi(e, t), mi(e + "Capture", t);
}
function mi(e, t) {
  for (ca[e] = t, e = 0; e < t.length; e++) kv.add(t[e]);
}
var wn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ku = Object.prototype.hasOwnProperty, Bw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, wf = {}, Ef = {};
function zw(e) {
  return ku.call(Ef, e) ? !0 : ku.call(wf, e) ? !1 : Bw.test(e) ? Ef[e] = !0 : (wf[e] = !0, !1);
}
function Hw(e, t, n, r) {
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
function Vw(e, t, n, r) {
  if (t === null || typeof t > "u" || Hw(e, t, n, r)) return !0;
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
function st(e, t, n, r, i, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var Ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ue[e] = new st(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ue[t] = new st(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ue[e] = new st(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ue[e] = new st(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ue[e] = new st(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ue[e] = new st(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ue[e] = new st(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ue[e] = new st(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ue[e] = new st(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yc = /[\-:]([a-z])/g;
function Zc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Yc,
    Zc
  );
  Ue[t] = new st(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Yc, Zc);
  Ue[t] = new st(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Yc, Zc);
  Ue[t] = new st(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ue[e] = new st(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ue.xlinkHref = new st("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ue[e] = new st(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Jc(e, t, n, r) {
  var i = Ue.hasOwnProperty(t) ? Ue[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Vw(t, n, i, r) && (n = null), r || i === null ? zw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _n = jw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ja = Symbol.for("react.element"), Vr = Symbol.for("react.portal"), $r = Symbol.for("react.fragment"), ep = Symbol.for("react.strict_mode"), Cu = Symbol.for("react.profiler"), Cv = Symbol.for("react.provider"), Sv = Symbol.for("react.context"), tp = Symbol.for("react.forward_ref"), Su = Symbol.for("react.suspense"), _u = Symbol.for("react.suspense_list"), np = Symbol.for("react.memo"), Pn = Symbol.for("react.lazy"), _v = Symbol.for("react.offscreen"), bf = Symbol.iterator;
function ji(e) {
  return e === null || typeof e != "object" ? null : (e = bf && e[bf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var _e = Object.assign, Tl;
function Ki(e) {
  if (Tl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Tl = t && t[1] || "";
  }
  return `
` + Tl + e;
}
var Nl = !1;
function Il(e, t) {
  if (!e || Nl) return "";
  Nl = !0;
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
`), a = r.stack.split(`
`), o = i.length - 1, s = a.length - 1; 1 <= o && 0 <= s && i[o] !== a[s]; ) s--;
      for (; 1 <= o && 0 <= s; o--, s--) if (i[o] !== a[s]) {
        if (o !== 1 || s !== 1)
          do
            if (o--, s--, 0 > s || i[o] !== a[s]) {
              var l = `
` + i[o].replace(" at new ", " at ");
              return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
            }
          while (1 <= o && 0 <= s);
        break;
      }
    }
  } finally {
    Nl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Ki(e) : "";
}
function $w(e) {
  switch (e.tag) {
    case 5:
      return Ki(e.type);
    case 16:
      return Ki("Lazy");
    case 13:
      return Ki("Suspense");
    case 19:
      return Ki("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Il(e.type, !1), e;
    case 11:
      return e = Il(e.type.render, !1), e;
    case 1:
      return e = Il(e.type, !0), e;
    default:
      return "";
  }
}
function Au(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case $r:
      return "Fragment";
    case Vr:
      return "Portal";
    case Cu:
      return "Profiler";
    case ep:
      return "StrictMode";
    case Su:
      return "Suspense";
    case _u:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Sv:
      return (e.displayName || "Context") + ".Consumer";
    case Cv:
      return (e._context.displayName || "Context") + ".Provider";
    case tp:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case np:
      return t = e.displayName || null, t !== null ? t : Au(e.type) || "Memo";
    case Pn:
      t = e._payload, e = e._init;
      try {
        return Au(e(t));
      } catch {
      }
  }
  return null;
}
function Uw(e) {
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
      return Au(t);
    case 8:
      return t === ep ? "StrictMode" : "Mode";
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
function qn(e) {
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
function Av(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Gw(e) {
  var t = Av(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, a = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(o) {
      r = "" + o, a.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function eo(e) {
  e._valueTracker || (e._valueTracker = Gw(e));
}
function Tv(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Av(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Uo(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Tu(e, t) {
  var n = t.checked;
  return _e({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function kf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = qn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Nv(e, t) {
  t = t.checked, t != null && Jc(e, "checked", t, !1);
}
function Nu(e, t) {
  Nv(e, t);
  var n = qn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Iu(e, t.type, n) : t.hasOwnProperty("defaultValue") && Iu(e, t.type, qn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Cf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Iu(e, t, n) {
  (t !== "number" || Uo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Qi = Array.isArray;
function ri(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + qn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Pu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return _e({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Sf(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(I(92));
      if (Qi(n)) {
        if (1 < n.length) throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: qn(n) };
}
function Iv(e, t) {
  var n = qn(t.value), r = qn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function _f(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Pv(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Fu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Pv(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var to, Fv = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (to = to || document.createElement("div"), to.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = to.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function pa(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ji = {
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
}, Ww = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ji).forEach(function(e) {
  Ww.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Ji[t] = Ji[e];
  });
});
function Rv(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ji.hasOwnProperty(e) && Ji[e] ? ("" + t).trim() : t + "px";
}
function Ov(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = Rv(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var qw = _e({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ru(e, t) {
  if (t) {
    if (qw[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(I(62));
  }
}
function Ou(e, t) {
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
var Du = null;
function rp(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Mu = null, ii = null, ai = null;
function Af(e) {
  if (e = za(e)) {
    if (typeof Mu != "function") throw Error(I(280));
    var t = e.stateNode;
    t && (t = Rs(t), Mu(e.stateNode, e.type, t));
  }
}
function Dv(e) {
  ii ? ai ? ai.push(e) : ai = [e] : ii = e;
}
function Mv() {
  if (ii) {
    var e = ii, t = ai;
    if (ai = ii = null, Af(e), t) for (e = 0; e < t.length; e++) Af(t[e]);
  }
}
function Lv(e, t) {
  return e(t);
}
function jv() {
}
var Pl = !1;
function Bv(e, t, n) {
  if (Pl) return e(t, n);
  Pl = !0;
  try {
    return Lv(e, t, n);
  } finally {
    Pl = !1, (ii !== null || ai !== null) && (jv(), Mv());
  }
}
function da(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Rs(n);
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
var Lu = !1;
if (wn) try {
  var Bi = {};
  Object.defineProperty(Bi, "passive", { get: function() {
    Lu = !0;
  } }), window.addEventListener("test", Bi, Bi), window.removeEventListener("test", Bi, Bi);
} catch {
  Lu = !1;
}
function Kw(e, t, n, r, i, a, o, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ea = !1, Go = null, Wo = !1, ju = null, Qw = { onError: function(e) {
  ea = !0, Go = e;
} };
function Xw(e, t, n, r, i, a, o, s, l) {
  ea = !1, Go = null, Kw.apply(Qw, arguments);
}
function Yw(e, t, n, r, i, a, o, s, l) {
  if (Xw.apply(this, arguments), ea) {
    if (ea) {
      var u = Go;
      ea = !1, Go = null;
    } else throw Error(I(198));
    Wo || (Wo = !0, ju = u);
  }
}
function Nr(e) {
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
function zv(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Tf(e) {
  if (Nr(e) !== e) throw Error(I(188));
}
function Zw(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Nr(e), t === null) throw Error(I(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var a = i.alternate;
    if (a === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === n) return Tf(i), e;
        if (a === r) return Tf(i), t;
        a = a.sibling;
      }
      throw Error(I(188));
    }
    if (n.return !== r.return) n = i, r = a;
    else {
      for (var o = !1, s = i.child; s; ) {
        if (s === n) {
          o = !0, n = i, r = a;
          break;
        }
        if (s === r) {
          o = !0, r = i, n = a;
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = a.child; s; ) {
          if (s === n) {
            o = !0, n = a, r = i;
            break;
          }
          if (s === r) {
            o = !0, r = a, n = i;
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(I(189));
      }
    }
    if (n.alternate !== r) throw Error(I(190));
  }
  if (n.tag !== 3) throw Error(I(188));
  return n.stateNode.current === n ? e : t;
}
function Hv(e) {
  return e = Zw(e), e !== null ? Vv(e) : null;
}
function Vv(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Vv(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var $v = bt.unstable_scheduleCallback, Nf = bt.unstable_cancelCallback, Jw = bt.unstable_shouldYield, eE = bt.unstable_requestPaint, Ie = bt.unstable_now, tE = bt.unstable_getCurrentPriorityLevel, ip = bt.unstable_ImmediatePriority, Uv = bt.unstable_UserBlockingPriority, qo = bt.unstable_NormalPriority, nE = bt.unstable_LowPriority, Gv = bt.unstable_IdlePriority, Ns = null, on = null;
function rE(e) {
  if (on && typeof on.onCommitFiberRoot == "function") try {
    on.onCommitFiberRoot(Ns, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Wt = Math.clz32 ? Math.clz32 : oE, iE = Math.log, aE = Math.LN2;
function oE(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (iE(e) / aE | 0) | 0;
}
var no = 64, ro = 4194304;
function Xi(e) {
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
function Ko(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var s = o & ~i;
    s !== 0 ? r = Xi(s) : (a &= o, a !== 0 && (r = Xi(a)));
  } else o = n & ~i, o !== 0 ? r = Xi(o) : a !== 0 && (r = Xi(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, a = t & -t, i >= a || i === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Wt(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function sE(e, t) {
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
function lE(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - Wt(a), s = 1 << o, l = i[o];
    l === -1 ? (!(s & n) || s & r) && (i[o] = sE(s, t)) : l <= t && (e.expiredLanes |= s), a &= ~s;
  }
}
function Bu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Wv() {
  var e = no;
  return no <<= 1, !(no & 4194240) && (no = 64), e;
}
function Fl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ja(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Wt(t), e[t] = n;
}
function uE(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Wt(n), a = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a;
  }
}
function ap(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Wt(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var ce = 0;
function qv(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Kv, op, Qv, Xv, Yv, zu = !1, io = [], jn = null, Bn = null, zn = null, fa = /* @__PURE__ */ new Map(), ma = /* @__PURE__ */ new Map(), On = [], cE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function If(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      jn = null;
      break;
    case "dragenter":
    case "dragleave":
      Bn = null;
      break;
    case "mouseover":
    case "mouseout":
      zn = null;
      break;
    case "pointerover":
    case "pointerout":
      fa.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ma.delete(t.pointerId);
  }
}
function zi(e, t, n, r, i, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [i] }, t !== null && (t = za(t), t !== null && op(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function pE(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return jn = zi(jn, e, t, n, r, i), !0;
    case "dragenter":
      return Bn = zi(Bn, e, t, n, r, i), !0;
    case "mouseover":
      return zn = zi(zn, e, t, n, r, i), !0;
    case "pointerover":
      var a = i.pointerId;
      return fa.set(a, zi(fa.get(a) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return a = i.pointerId, ma.set(a, zi(ma.get(a) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Zv(e) {
  var t = cr(e.target);
  if (t !== null) {
    var n = Nr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = zv(n), t !== null) {
          e.blockedOn = t, Yv(e.priority, function() {
            Qv(n);
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
function No(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Hu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Du = r, n.target.dispatchEvent(r), Du = null;
    } else return t = za(n), t !== null && op(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Pf(e, t, n) {
  No(e) && n.delete(t);
}
function dE() {
  zu = !1, jn !== null && No(jn) && (jn = null), Bn !== null && No(Bn) && (Bn = null), zn !== null && No(zn) && (zn = null), fa.forEach(Pf), ma.forEach(Pf);
}
function Hi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, zu || (zu = !0, bt.unstable_scheduleCallback(bt.unstable_NormalPriority, dE)));
}
function ha(e) {
  function t(i) {
    return Hi(i, e);
  }
  if (0 < io.length) {
    Hi(io[0], e);
    for (var n = 1; n < io.length; n++) {
      var r = io[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (jn !== null && Hi(jn, e), Bn !== null && Hi(Bn, e), zn !== null && Hi(zn, e), fa.forEach(t), ma.forEach(t), n = 0; n < On.length; n++) r = On[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < On.length && (n = On[0], n.blockedOn === null); ) Zv(n), n.blockedOn === null && On.shift();
}
var oi = _n.ReactCurrentBatchConfig, Qo = !0;
function fE(e, t, n, r) {
  var i = ce, a = oi.transition;
  oi.transition = null;
  try {
    ce = 1, sp(e, t, n, r);
  } finally {
    ce = i, oi.transition = a;
  }
}
function mE(e, t, n, r) {
  var i = ce, a = oi.transition;
  oi.transition = null;
  try {
    ce = 4, sp(e, t, n, r);
  } finally {
    ce = i, oi.transition = a;
  }
}
function sp(e, t, n, r) {
  if (Qo) {
    var i = Hu(e, t, n, r);
    if (i === null) Vl(e, t, r, Xo, n), If(e, r);
    else if (pE(i, e, t, n, r)) r.stopPropagation();
    else if (If(e, r), t & 4 && -1 < cE.indexOf(e)) {
      for (; i !== null; ) {
        var a = za(i);
        if (a !== null && Kv(a), a = Hu(e, t, n, r), a === null && Vl(e, t, r, Xo, n), a === i) break;
        i = a;
      }
      i !== null && r.stopPropagation();
    } else Vl(e, t, r, null, n);
  }
}
var Xo = null;
function Hu(e, t, n, r) {
  if (Xo = null, e = rp(r), e = cr(e), e !== null) if (t = Nr(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = zv(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Xo = e, null;
}
function Jv(e) {
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
      switch (tE()) {
        case ip:
          return 1;
        case Uv:
          return 4;
        case qo:
        case nE:
          return 16;
        case Gv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mn = null, lp = null, Io = null;
function eg() {
  if (Io) return Io;
  var e, t = lp, n = t.length, r, i = "value" in Mn ? Mn.value : Mn.textContent, a = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[a - r]; r++) ;
  return Io = i.slice(e, 1 < r ? 1 - r : void 0);
}
function Po(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ao() {
  return !0;
}
function Ff() {
  return !1;
}
function _t(e) {
  function t(n, r, i, a, o) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(a) : a[s]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? ao : Ff, this.isPropagationStopped = Ff, this;
  }
  return _e(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ao);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ao);
  }, persist: function() {
  }, isPersistent: ao }), t;
}
var Fi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, up = _t(Fi), Ba = _e({}, Fi, { view: 0, detail: 0 }), hE = _t(Ba), Rl, Ol, Vi, Is = _e({}, Ba, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: cp, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Vi && (Vi && e.type === "mousemove" ? (Rl = e.screenX - Vi.screenX, Ol = e.screenY - Vi.screenY) : Ol = Rl = 0, Vi = e), Rl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ol;
} }), Rf = _t(Is), vE = _e({}, Is, { dataTransfer: 0 }), gE = _t(vE), xE = _e({}, Ba, { relatedTarget: 0 }), Dl = _t(xE), yE = _e({}, Fi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), wE = _t(yE), EE = _e({}, Fi, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), bE = _t(EE), kE = _e({}, Fi, { data: 0 }), Of = _t(kE), CE = {
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
}, SE = {
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
}, _E = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function AE(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = _E[e]) ? !!t[e] : !1;
}
function cp() {
  return AE;
}
var TE = _e({}, Ba, { key: function(e) {
  if (e.key) {
    var t = CE[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Po(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? SE[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: cp, charCode: function(e) {
  return e.type === "keypress" ? Po(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Po(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), NE = _t(TE), IE = _e({}, Is, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Df = _t(IE), PE = _e({}, Ba, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: cp }), FE = _t(PE), RE = _e({}, Fi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), OE = _t(RE), DE = _e({}, Is, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), ME = _t(DE), LE = [9, 13, 27, 32], pp = wn && "CompositionEvent" in window, ta = null;
wn && "documentMode" in document && (ta = document.documentMode);
var jE = wn && "TextEvent" in window && !ta, tg = wn && (!pp || ta && 8 < ta && 11 >= ta), Mf = " ", Lf = !1;
function ng(e, t) {
  switch (e) {
    case "keyup":
      return LE.indexOf(t.keyCode) !== -1;
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
function rg(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ur = !1;
function BE(e, t) {
  switch (e) {
    case "compositionend":
      return rg(t);
    case "keypress":
      return t.which !== 32 ? null : (Lf = !0, Mf);
    case "textInput":
      return e = t.data, e === Mf && Lf ? null : e;
    default:
      return null;
  }
}
function zE(e, t) {
  if (Ur) return e === "compositionend" || !pp && ng(e, t) ? (e = eg(), Io = lp = Mn = null, Ur = !1, e) : null;
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
      return tg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var HE = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function jf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!HE[e.type] : t === "textarea";
}
function ig(e, t, n, r) {
  Dv(r), t = Yo(t, "onChange"), 0 < t.length && (n = new up("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var na = null, va = null;
function VE(e) {
  hg(e, 0);
}
function Ps(e) {
  var t = qr(e);
  if (Tv(t)) return e;
}
function $E(e, t) {
  if (e === "change") return t;
}
var ag = !1;
if (wn) {
  var Ml;
  if (wn) {
    var Ll = "oninput" in document;
    if (!Ll) {
      var Bf = document.createElement("div");
      Bf.setAttribute("oninput", "return;"), Ll = typeof Bf.oninput == "function";
    }
    Ml = Ll;
  } else Ml = !1;
  ag = Ml && (!document.documentMode || 9 < document.documentMode);
}
function zf() {
  na && (na.detachEvent("onpropertychange", og), va = na = null);
}
function og(e) {
  if (e.propertyName === "value" && Ps(va)) {
    var t = [];
    ig(t, va, e, rp(e)), Bv(VE, t);
  }
}
function UE(e, t, n) {
  e === "focusin" ? (zf(), na = t, va = n, na.attachEvent("onpropertychange", og)) : e === "focusout" && zf();
}
function GE(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ps(va);
}
function WE(e, t) {
  if (e === "click") return Ps(t);
}
function qE(e, t) {
  if (e === "input" || e === "change") return Ps(t);
}
function KE(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Kt = typeof Object.is == "function" ? Object.is : KE;
function ga(e, t) {
  if (Kt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ku.call(t, i) || !Kt(e[i], t[i])) return !1;
  }
  return !0;
}
function Hf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Vf(e, t) {
  var n = Hf(e);
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
    n = Hf(n);
  }
}
function sg(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? sg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function lg() {
  for (var e = window, t = Uo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Uo(e.document);
  }
  return t;
}
function dp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function QE(e) {
  var t = lg(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && sg(n.ownerDocument.documentElement, n)) {
    if (r !== null && dp(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, a = Math.min(r.start, i);
        r = r.end === void 0 ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = Vf(n, a);
        var o = Vf(
          n,
          r
        );
        i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var XE = wn && "documentMode" in document && 11 >= document.documentMode, Gr = null, Vu = null, ra = null, $u = !1;
function $f(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  $u || Gr == null || Gr !== Uo(r) || (r = Gr, "selectionStart" in r && dp(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ra && ga(ra, r) || (ra = r, r = Yo(Vu, "onSelect"), 0 < r.length && (t = new up("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Gr)));
}
function oo(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Wr = { animationend: oo("Animation", "AnimationEnd"), animationiteration: oo("Animation", "AnimationIteration"), animationstart: oo("Animation", "AnimationStart"), transitionend: oo("Transition", "TransitionEnd") }, jl = {}, ug = {};
wn && (ug = document.createElement("div").style, "AnimationEvent" in window || (delete Wr.animationend.animation, delete Wr.animationiteration.animation, delete Wr.animationstart.animation), "TransitionEvent" in window || delete Wr.transitionend.transition);
function Fs(e) {
  if (jl[e]) return jl[e];
  if (!Wr[e]) return e;
  var t = Wr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ug) return jl[e] = t[n];
  return e;
}
var cg = Fs("animationend"), pg = Fs("animationiteration"), dg = Fs("animationstart"), fg = Fs("transitionend"), mg = /* @__PURE__ */ new Map(), Uf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Zn(e, t) {
  mg.set(e, t), Tr(t, [e]);
}
for (var Bl = 0; Bl < Uf.length; Bl++) {
  var zl = Uf[Bl], YE = zl.toLowerCase(), ZE = zl[0].toUpperCase() + zl.slice(1);
  Zn(YE, "on" + ZE);
}
Zn(cg, "onAnimationEnd");
Zn(pg, "onAnimationIteration");
Zn(dg, "onAnimationStart");
Zn("dblclick", "onDoubleClick");
Zn("focusin", "onFocus");
Zn("focusout", "onBlur");
Zn(fg, "onTransitionEnd");
mi("onMouseEnter", ["mouseout", "mouseover"]);
mi("onMouseLeave", ["mouseout", "mouseover"]);
mi("onPointerEnter", ["pointerout", "pointerover"]);
mi("onPointerLeave", ["pointerout", "pointerover"]);
Tr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Tr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Tr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Tr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Tr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Yi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), JE = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yi));
function Gf(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Yw(r, t, void 0, e), e.currentTarget = null;
}
function hg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var s = r[o], l = s.instance, u = s.currentTarget;
        if (s = s.listener, l !== a && i.isPropagationStopped()) break e;
        Gf(i, s, u), a = l;
      }
      else for (o = 0; o < r.length; o++) {
        if (s = r[o], l = s.instance, u = s.currentTarget, s = s.listener, l !== a && i.isPropagationStopped()) break e;
        Gf(i, s, u), a = l;
      }
    }
  }
  if (Wo) throw e = ju, Wo = !1, ju = null, e;
}
function ge(e, t) {
  var n = t[Ku];
  n === void 0 && (n = t[Ku] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (vg(t, e, 2, !1), n.add(r));
}
function Hl(e, t, n) {
  var r = 0;
  t && (r |= 4), vg(n, e, r, t);
}
var so = "_reactListening" + Math.random().toString(36).slice(2);
function xa(e) {
  if (!e[so]) {
    e[so] = !0, kv.forEach(function(n) {
      n !== "selectionchange" && (JE.has(n) || Hl(n, !1, e), Hl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[so] || (t[so] = !0, Hl("selectionchange", !1, t));
  }
}
function vg(e, t, n, r) {
  switch (Jv(t)) {
    case 1:
      var i = fE;
      break;
    case 4:
      i = mE;
      break;
    default:
      i = sp;
  }
  n = i.bind(null, t, n, e), i = void 0, !Lu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function Vl(e, t, n, r, i) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var s = r.stateNode.containerInfo;
      if (s === i || s.nodeType === 8 && s.parentNode === i) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var l = o.tag;
        if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
        o = o.return;
      }
      for (; s !== null; ) {
        if (o = cr(s), o === null) return;
        if (l = o.tag, l === 5 || l === 6) {
          r = a = o;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  Bv(function() {
    var u = a, c = rp(n), f = [];
    e: {
      var d = mg.get(e);
      if (d !== void 0) {
        var v = up, E = e;
        switch (e) {
          case "keypress":
            if (Po(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = NE;
            break;
          case "focusin":
            E = "focus", v = Dl;
            break;
          case "focusout":
            E = "blur", v = Dl;
            break;
          case "beforeblur":
          case "afterblur":
            v = Dl;
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
            v = Rf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = gE;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = FE;
            break;
          case cg:
          case pg:
          case dg:
            v = wE;
            break;
          case fg:
            v = OE;
            break;
          case "scroll":
            v = hE;
            break;
          case "wheel":
            v = ME;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = bE;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Df;
        }
        var x = (t & 4) !== 0, b = !x && e === "scroll", g = x ? d !== null ? d + "Capture" : null : d;
        x = [];
        for (var h = u, y; h !== null; ) {
          y = h;
          var k = y.stateNode;
          if (y.tag === 5 && k !== null && (y = k, g !== null && (k = da(h, g), k != null && x.push(ya(h, k, y)))), b) break;
          h = h.return;
        }
        0 < x.length && (d = new v(d, E, null, n, c), f.push({ event: d, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", d && n !== Du && (E = n.relatedTarget || n.fromElement) && (cr(E) || E[En])) break e;
        if ((v || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, v ? (E = n.relatedTarget || n.toElement, v = u, E = E ? cr(E) : null, E !== null && (b = Nr(E), E !== b || E.tag !== 5 && E.tag !== 6) && (E = null)) : (v = null, E = u), v !== E)) {
          if (x = Rf, k = "onMouseLeave", g = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (x = Df, k = "onPointerLeave", g = "onPointerEnter", h = "pointer"), b = v == null ? d : qr(v), y = E == null ? d : qr(E), d = new x(k, h + "leave", v, n, c), d.target = b, d.relatedTarget = y, k = null, cr(c) === u && (x = new x(g, h + "enter", E, n, c), x.target = y, x.relatedTarget = b, k = x), b = k, v && E) t: {
            for (x = v, g = E, h = 0, y = x; y; y = Lr(y)) h++;
            for (y = 0, k = g; k; k = Lr(k)) y++;
            for (; 0 < h - y; ) x = Lr(x), h--;
            for (; 0 < y - h; ) g = Lr(g), y--;
            for (; h--; ) {
              if (x === g || g !== null && x === g.alternate) break t;
              x = Lr(x), g = Lr(g);
            }
            x = null;
          }
          else x = null;
          v !== null && Wf(f, d, v, x, !1), E !== null && b !== null && Wf(f, b, E, x, !0);
        }
      }
      e: {
        if (d = u ? qr(u) : window, v = d.nodeName && d.nodeName.toLowerCase(), v === "select" || v === "input" && d.type === "file") var S = $E;
        else if (jf(d)) if (ag) S = qE;
        else {
          S = GE;
          var _ = UE;
        }
        else (v = d.nodeName) && v.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (S = WE);
        if (S && (S = S(e, u))) {
          ig(f, S, n, c);
          break e;
        }
        _ && _(e, d, u), e === "focusout" && (_ = d._wrapperState) && _.controlled && d.type === "number" && Iu(d, "number", d.value);
      }
      switch (_ = u ? qr(u) : window, e) {
        case "focusin":
          (jf(_) || _.contentEditable === "true") && (Gr = _, Vu = u, ra = null);
          break;
        case "focusout":
          ra = Vu = Gr = null;
          break;
        case "mousedown":
          $u = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          $u = !1, $f(f, n, c);
          break;
        case "selectionchange":
          if (XE) break;
        case "keydown":
        case "keyup":
          $f(f, n, c);
      }
      var A;
      if (pp) e: {
        switch (e) {
          case "compositionstart":
            var T = "onCompositionStart";
            break e;
          case "compositionend":
            T = "onCompositionEnd";
            break e;
          case "compositionupdate":
            T = "onCompositionUpdate";
            break e;
        }
        T = void 0;
      }
      else Ur ? ng(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (tg && n.locale !== "ko" && (Ur || T !== "onCompositionStart" ? T === "onCompositionEnd" && Ur && (A = eg()) : (Mn = c, lp = "value" in Mn ? Mn.value : Mn.textContent, Ur = !0)), _ = Yo(u, T), 0 < _.length && (T = new Of(T, e, null, n, c), f.push({ event: T, listeners: _ }), A ? T.data = A : (A = rg(n), A !== null && (T.data = A)))), (A = jE ? BE(e, n) : zE(e, n)) && (u = Yo(u, "onBeforeInput"), 0 < u.length && (c = new Of("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = A));
    }
    hg(f, t);
  });
}
function ya(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Yo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, a = i.stateNode;
    i.tag === 5 && a !== null && (i = a, a = da(e, n), a != null && r.unshift(ya(e, a, i)), a = da(e, t), a != null && r.push(ya(e, a, i))), e = e.return;
  }
  return r;
}
function Lr(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Wf(e, t, n, r, i) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n, l = s.alternate, u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 && u !== null && (s = u, i ? (l = da(n, a), l != null && o.unshift(ya(n, l, s))) : i || (l = da(n, a), l != null && o.push(ya(n, l, s)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var eb = /\r\n?/g, tb = /\u0000|\uFFFD/g;
function qf(e) {
  return (typeof e == "string" ? e : "" + e).replace(eb, `
`).replace(tb, "");
}
function lo(e, t, n) {
  if (t = qf(t), qf(e) !== t && n) throw Error(I(425));
}
function Zo() {
}
var Uu = null, Gu = null;
function Wu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var qu = typeof setTimeout == "function" ? setTimeout : void 0, nb = typeof clearTimeout == "function" ? clearTimeout : void 0, Kf = typeof Promise == "function" ? Promise : void 0, rb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Kf < "u" ? function(e) {
  return Kf.resolve(null).then(e).catch(ib);
} : qu;
function ib(e) {
  setTimeout(function() {
    throw e;
  });
}
function $l(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), ha(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  ha(t);
}
function Hn(e) {
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
function Qf(e) {
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
var Ri = Math.random().toString(36).slice(2), rn = "__reactFiber$" + Ri, wa = "__reactProps$" + Ri, En = "__reactContainer$" + Ri, Ku = "__reactEvents$" + Ri, ab = "__reactListeners$" + Ri, ob = "__reactHandles$" + Ri;
function cr(e) {
  var t = e[rn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[En] || n[rn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Qf(e); e !== null; ) {
        if (n = e[rn]) return n;
        e = Qf(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function za(e) {
  return e = e[rn] || e[En], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function qr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(I(33));
}
function Rs(e) {
  return e[wa] || null;
}
var Qu = [], Kr = -1;
function Jn(e) {
  return { current: e };
}
function ye(e) {
  0 > Kr || (e.current = Qu[Kr], Qu[Kr] = null, Kr--);
}
function he(e, t) {
  Kr++, Qu[Kr] = e.current, e.current = t;
}
var Kn = {}, Ze = Jn(Kn), ft = Jn(!1), wr = Kn;
function hi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Kn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, a;
  for (a in n) i[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function mt(e) {
  return e = e.childContextTypes, e != null;
}
function Jo() {
  ye(ft), ye(Ze);
}
function Xf(e, t, n) {
  if (Ze.current !== Kn) throw Error(I(168));
  he(Ze, t), he(ft, n);
}
function gg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(I(108, Uw(e) || "Unknown", i));
  return _e({}, n, r);
}
function es(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Kn, wr = Ze.current, he(Ze, e), he(ft, ft.current), !0;
}
function Yf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(I(169));
  n ? (e = gg(e, t, wr), r.__reactInternalMemoizedMergedChildContext = e, ye(ft), ye(Ze), he(Ze, e)) : ye(ft), he(ft, n);
}
var hn = null, Os = !1, Ul = !1;
function xg(e) {
  hn === null ? hn = [e] : hn.push(e);
}
function sb(e) {
  Os = !0, xg(e);
}
function er() {
  if (!Ul && hn !== null) {
    Ul = !0;
    var e = 0, t = ce;
    try {
      var n = hn;
      for (ce = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      hn = null, Os = !1;
    } catch (i) {
      throw hn !== null && (hn = hn.slice(e + 1)), $v(ip, er), i;
    } finally {
      ce = t, Ul = !1;
    }
  }
  return null;
}
var Qr = [], Xr = 0, ts = null, ns = 0, Nt = [], It = 0, Er = null, gn = 1, xn = "";
function ar(e, t) {
  Qr[Xr++] = ns, Qr[Xr++] = ts, ts = e, ns = t;
}
function yg(e, t, n) {
  Nt[It++] = gn, Nt[It++] = xn, Nt[It++] = Er, Er = e;
  var r = gn;
  e = xn;
  var i = 32 - Wt(r) - 1;
  r &= ~(1 << i), n += 1;
  var a = 32 - Wt(t) + i;
  if (30 < a) {
    var o = i - i % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, gn = 1 << 32 - Wt(t) + i | n << i | r, xn = a + e;
  } else gn = 1 << a | n << i | r, xn = e;
}
function fp(e) {
  e.return !== null && (ar(e, 1), yg(e, 1, 0));
}
function mp(e) {
  for (; e === ts; ) ts = Qr[--Xr], Qr[Xr] = null, ns = Qr[--Xr], Qr[Xr] = null;
  for (; e === Er; ) Er = Nt[--It], Nt[It] = null, xn = Nt[--It], Nt[It] = null, gn = Nt[--It], Nt[It] = null;
}
var Et = null, wt = null, we = !1, Ut = null;
function wg(e, t) {
  var n = Pt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Zf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Et = e, wt = Hn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Et = e, wt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Er !== null ? { id: gn, overflow: xn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Pt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Et = e, wt = null, !0) : !1;
    default:
      return !1;
  }
}
function Xu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Yu(e) {
  if (we) {
    var t = wt;
    if (t) {
      var n = t;
      if (!Zf(e, t)) {
        if (Xu(e)) throw Error(I(418));
        t = Hn(n.nextSibling);
        var r = Et;
        t && Zf(e, t) ? wg(r, n) : (e.flags = e.flags & -4097 | 2, we = !1, Et = e);
      }
    } else {
      if (Xu(e)) throw Error(I(418));
      e.flags = e.flags & -4097 | 2, we = !1, Et = e;
    }
  }
}
function Jf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Et = e;
}
function uo(e) {
  if (e !== Et) return !1;
  if (!we) return Jf(e), we = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Wu(e.type, e.memoizedProps)), t && (t = wt)) {
    if (Xu(e)) throw Eg(), Error(I(418));
    for (; t; ) wg(e, t), t = Hn(t.nextSibling);
  }
  if (Jf(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              wt = Hn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      wt = null;
    }
  } else wt = Et ? Hn(e.stateNode.nextSibling) : null;
  return !0;
}
function Eg() {
  for (var e = wt; e; ) e = Hn(e.nextSibling);
}
function vi() {
  wt = Et = null, we = !1;
}
function hp(e) {
  Ut === null ? Ut = [e] : Ut.push(e);
}
var lb = _n.ReactCurrentBatchConfig;
function $i(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(I(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(I(147, e));
      var i = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var s = i.refs;
        o === null ? delete s[a] : s[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(I(284));
    if (!n._owner) throw Error(I(290, e));
  }
  return e;
}
function co(e, t) {
  throw e = Object.prototype.toString.call(t), Error(I(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function em(e) {
  var t = e._init;
  return t(e._payload);
}
function bg(e) {
  function t(g, h) {
    if (e) {
      var y = g.deletions;
      y === null ? (g.deletions = [h], g.flags |= 16) : y.push(h);
    }
  }
  function n(g, h) {
    if (!e) return null;
    for (; h !== null; ) t(g, h), h = h.sibling;
    return null;
  }
  function r(g, h) {
    for (g = /* @__PURE__ */ new Map(); h !== null; ) h.key !== null ? g.set(h.key, h) : g.set(h.index, h), h = h.sibling;
    return g;
  }
  function i(g, h) {
    return g = Gn(g, h), g.index = 0, g.sibling = null, g;
  }
  function a(g, h, y) {
    return g.index = y, e ? (y = g.alternate, y !== null ? (y = y.index, y < h ? (g.flags |= 2, h) : y) : (g.flags |= 2, h)) : (g.flags |= 1048576, h);
  }
  function o(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function s(g, h, y, k) {
    return h === null || h.tag !== 6 ? (h = Yl(y, g.mode, k), h.return = g, h) : (h = i(h, y), h.return = g, h);
  }
  function l(g, h, y, k) {
    var S = y.type;
    return S === $r ? c(g, h, y.props.children, k, y.key) : h !== null && (h.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Pn && em(S) === h.type) ? (k = i(h, y.props), k.ref = $i(g, h, y), k.return = g, k) : (k = jo(y.type, y.key, y.props, null, g.mode, k), k.ref = $i(g, h, y), k.return = g, k);
  }
  function u(g, h, y, k) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== y.containerInfo || h.stateNode.implementation !== y.implementation ? (h = Zl(y, g.mode, k), h.return = g, h) : (h = i(h, y.children || []), h.return = g, h);
  }
  function c(g, h, y, k, S) {
    return h === null || h.tag !== 7 ? (h = vr(y, g.mode, k, S), h.return = g, h) : (h = i(h, y), h.return = g, h);
  }
  function f(g, h, y) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = Yl("" + h, g.mode, y), h.return = g, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ja:
          return y = jo(h.type, h.key, h.props, null, g.mode, y), y.ref = $i(g, null, h), y.return = g, y;
        case Vr:
          return h = Zl(h, g.mode, y), h.return = g, h;
        case Pn:
          var k = h._init;
          return f(g, k(h._payload), y);
      }
      if (Qi(h) || ji(h)) return h = vr(h, g.mode, y, null), h.return = g, h;
      co(g, h);
    }
    return null;
  }
  function d(g, h, y, k) {
    var S = h !== null ? h.key : null;
    if (typeof y == "string" && y !== "" || typeof y == "number") return S !== null ? null : s(g, h, "" + y, k);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ja:
          return y.key === S ? l(g, h, y, k) : null;
        case Vr:
          return y.key === S ? u(g, h, y, k) : null;
        case Pn:
          return S = y._init, d(
            g,
            h,
            S(y._payload),
            k
          );
      }
      if (Qi(y) || ji(y)) return S !== null ? null : c(g, h, y, k, null);
      co(g, y);
    }
    return null;
  }
  function v(g, h, y, k, S) {
    if (typeof k == "string" && k !== "" || typeof k == "number") return g = g.get(y) || null, s(h, g, "" + k, S);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Ja:
          return g = g.get(k.key === null ? y : k.key) || null, l(h, g, k, S);
        case Vr:
          return g = g.get(k.key === null ? y : k.key) || null, u(h, g, k, S);
        case Pn:
          var _ = k._init;
          return v(g, h, y, _(k._payload), S);
      }
      if (Qi(k) || ji(k)) return g = g.get(y) || null, c(h, g, k, S, null);
      co(h, k);
    }
    return null;
  }
  function E(g, h, y, k) {
    for (var S = null, _ = null, A = h, T = h = 0, O = null; A !== null && T < y.length; T++) {
      A.index > T ? (O = A, A = null) : O = A.sibling;
      var P = d(g, A, y[T], k);
      if (P === null) {
        A === null && (A = O);
        break;
      }
      e && A && P.alternate === null && t(g, A), h = a(P, h, T), _ === null ? S = P : _.sibling = P, _ = P, A = O;
    }
    if (T === y.length) return n(g, A), we && ar(g, T), S;
    if (A === null) {
      for (; T < y.length; T++) A = f(g, y[T], k), A !== null && (h = a(A, h, T), _ === null ? S = A : _.sibling = A, _ = A);
      return we && ar(g, T), S;
    }
    for (A = r(g, A); T < y.length; T++) O = v(A, g, T, y[T], k), O !== null && (e && O.alternate !== null && A.delete(O.key === null ? T : O.key), h = a(O, h, T), _ === null ? S = O : _.sibling = O, _ = O);
    return e && A.forEach(function(B) {
      return t(g, B);
    }), we && ar(g, T), S;
  }
  function x(g, h, y, k) {
    var S = ji(y);
    if (typeof S != "function") throw Error(I(150));
    if (y = S.call(y), y == null) throw Error(I(151));
    for (var _ = S = null, A = h, T = h = 0, O = null, P = y.next(); A !== null && !P.done; T++, P = y.next()) {
      A.index > T ? (O = A, A = null) : O = A.sibling;
      var B = d(g, A, P.value, k);
      if (B === null) {
        A === null && (A = O);
        break;
      }
      e && A && B.alternate === null && t(g, A), h = a(B, h, T), _ === null ? S = B : _.sibling = B, _ = B, A = O;
    }
    if (P.done) return n(
      g,
      A
    ), we && ar(g, T), S;
    if (A === null) {
      for (; !P.done; T++, P = y.next()) P = f(g, P.value, k), P !== null && (h = a(P, h, T), _ === null ? S = P : _.sibling = P, _ = P);
      return we && ar(g, T), S;
    }
    for (A = r(g, A); !P.done; T++, P = y.next()) P = v(A, g, T, P.value, k), P !== null && (e && P.alternate !== null && A.delete(P.key === null ? T : P.key), h = a(P, h, T), _ === null ? S = P : _.sibling = P, _ = P);
    return e && A.forEach(function(H) {
      return t(g, H);
    }), we && ar(g, T), S;
  }
  function b(g, h, y, k) {
    if (typeof y == "object" && y !== null && y.type === $r && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ja:
          e: {
            for (var S = y.key, _ = h; _ !== null; ) {
              if (_.key === S) {
                if (S = y.type, S === $r) {
                  if (_.tag === 7) {
                    n(g, _.sibling), h = i(_, y.props.children), h.return = g, g = h;
                    break e;
                  }
                } else if (_.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Pn && em(S) === _.type) {
                  n(g, _.sibling), h = i(_, y.props), h.ref = $i(g, _, y), h.return = g, g = h;
                  break e;
                }
                n(g, _);
                break;
              } else t(g, _);
              _ = _.sibling;
            }
            y.type === $r ? (h = vr(y.props.children, g.mode, k, y.key), h.return = g, g = h) : (k = jo(y.type, y.key, y.props, null, g.mode, k), k.ref = $i(g, h, y), k.return = g, g = k);
          }
          return o(g);
        case Vr:
          e: {
            for (_ = y.key; h !== null; ) {
              if (h.key === _) if (h.tag === 4 && h.stateNode.containerInfo === y.containerInfo && h.stateNode.implementation === y.implementation) {
                n(g, h.sibling), h = i(h, y.children || []), h.return = g, g = h;
                break e;
              } else {
                n(g, h);
                break;
              }
              else t(g, h);
              h = h.sibling;
            }
            h = Zl(y, g.mode, k), h.return = g, g = h;
          }
          return o(g);
        case Pn:
          return _ = y._init, b(g, h, _(y._payload), k);
      }
      if (Qi(y)) return E(g, h, y, k);
      if (ji(y)) return x(g, h, y, k);
      co(g, y);
    }
    return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, h !== null && h.tag === 6 ? (n(g, h.sibling), h = i(h, y), h.return = g, g = h) : (n(g, h), h = Yl(y, g.mode, k), h.return = g, g = h), o(g)) : n(g, h);
  }
  return b;
}
var gi = bg(!0), kg = bg(!1), rs = Jn(null), is = null, Yr = null, vp = null;
function gp() {
  vp = Yr = is = null;
}
function xp(e) {
  var t = rs.current;
  ye(rs), e._currentValue = t;
}
function Zu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function si(e, t) {
  is = e, vp = Yr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (dt = !0), e.firstContext = null);
}
function Rt(e) {
  var t = e._currentValue;
  if (vp !== e) if (e = { context: e, memoizedValue: t, next: null }, Yr === null) {
    if (is === null) throw Error(I(308));
    Yr = e, is.dependencies = { lanes: 0, firstContext: e };
  } else Yr = Yr.next = e;
  return t;
}
var pr = null;
function yp(e) {
  pr === null ? pr = [e] : pr.push(e);
}
function Cg(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, yp(t)) : (n.next = i.next, i.next = n), t.interleaved = n, bn(e, r);
}
function bn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Fn = !1;
function wp(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Sg(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function yn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Vn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, oe & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, bn(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, yp(r)) : (t.next = i.next, i.next = t), r.interleaved = t, bn(e, n);
}
function Fo(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ap(e, n);
  }
}
function tm(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, a = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        a === null ? i = a = o : a = a.next = o, n = n.next;
      } while (n !== null);
      a === null ? i = a = t : a = a.next = t;
    } else i = a = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: a, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function as(e, t, n, r) {
  var i = e.updateQueue;
  Fn = !1;
  var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var l = s, u = l.next;
    l.next = null, o === null ? a = u : o.next = u, o = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== o && (s === null ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = l));
  }
  if (a !== null) {
    var f = i.baseState;
    o = 0, c = u = l = null, s = a;
    do {
      var d = s.lane, v = s.eventTime;
      if ((r & d) === d) {
        c !== null && (c = c.next = {
          eventTime: v,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var E = e, x = s;
          switch (d = t, v = n, x.tag) {
            case 1:
              if (E = x.payload, typeof E == "function") {
                f = E.call(v, f, d);
                break e;
              }
              f = E;
              break e;
            case 3:
              E.flags = E.flags & -65537 | 128;
            case 0:
              if (E = x.payload, d = typeof E == "function" ? E.call(v, f, d) : E, d == null) break e;
              f = _e({}, f, d);
              break e;
            case 2:
              Fn = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [s] : d.push(s));
      } else v = { eventTime: v, lane: d, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (u = c = v, l = f) : c = c.next = v, o |= d;
      if (s = s.next, s === null) {
        if (s = i.shared.pending, s === null) break;
        d = s, s = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = f), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        o |= i.lane, i = i.next;
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    kr |= o, e.lanes = o, e.memoizedState = f;
  }
}
function nm(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(I(191, i));
      i.call(r);
    }
  }
}
var Ha = {}, sn = Jn(Ha), Ea = Jn(Ha), ba = Jn(Ha);
function dr(e) {
  if (e === Ha) throw Error(I(174));
  return e;
}
function Ep(e, t) {
  switch (he(ba, t), he(Ea, e), he(sn, Ha), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Fu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Fu(t, e);
  }
  ye(sn), he(sn, t);
}
function xi() {
  ye(sn), ye(Ea), ye(ba);
}
function _g(e) {
  dr(ba.current);
  var t = dr(sn.current), n = Fu(t, e.type);
  t !== n && (he(Ea, e), he(sn, n));
}
function bp(e) {
  Ea.current === e && (ye(sn), ye(Ea));
}
var Ce = Jn(0);
function os(e) {
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
var Gl = [];
function kp() {
  for (var e = 0; e < Gl.length; e++) Gl[e]._workInProgressVersionPrimary = null;
  Gl.length = 0;
}
var Ro = _n.ReactCurrentDispatcher, Wl = _n.ReactCurrentBatchConfig, br = 0, Se = null, Oe = null, Me = null, ss = !1, ia = !1, ka = 0, ub = 0;
function qe() {
  throw Error(I(321));
}
function Cp(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Kt(e[n], t[n])) return !1;
  return !0;
}
function Sp(e, t, n, r, i, a) {
  if (br = a, Se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ro.current = e === null || e.memoizedState === null ? fb : mb, e = n(r, i), ia) {
    a = 0;
    do {
      if (ia = !1, ka = 0, 25 <= a) throw Error(I(301));
      a += 1, Me = Oe = null, t.updateQueue = null, Ro.current = hb, e = n(r, i);
    } while (ia);
  }
  if (Ro.current = ls, t = Oe !== null && Oe.next !== null, br = 0, Me = Oe = Se = null, ss = !1, t) throw Error(I(300));
  return e;
}
function _p() {
  var e = ka !== 0;
  return ka = 0, e;
}
function en() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Me === null ? Se.memoizedState = Me = e : Me = Me.next = e, Me;
}
function Ot() {
  if (Oe === null) {
    var e = Se.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Oe.next;
  var t = Me === null ? Se.memoizedState : Me.next;
  if (t !== null) Me = t, Oe = e;
  else {
    if (e === null) throw Error(I(310));
    Oe = e, e = { memoizedState: Oe.memoizedState, baseState: Oe.baseState, baseQueue: Oe.baseQueue, queue: Oe.queue, next: null }, Me === null ? Se.memoizedState = Me = e : Me = Me.next = e;
  }
  return Me;
}
function Ca(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ql(e) {
  var t = Ot(), n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = Oe, i = r.baseQueue, a = n.pending;
  if (a !== null) {
    if (i !== null) {
      var o = i.next;
      i.next = a.next, a.next = o;
    }
    r.baseQueue = i = a, n.pending = null;
  }
  if (i !== null) {
    a = i.next, r = r.baseState;
    var s = o = null, l = null, u = a;
    do {
      var c = u.lane;
      if ((br & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (s = l = f, o = r) : l = l.next = f, Se.lanes |= c, kr |= c;
      }
      u = u.next;
    } while (u !== null && u !== a);
    l === null ? o = r : l.next = s, Kt(r, t.memoizedState) || (dt = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      a = i.lane, Se.lanes |= a, kr |= a, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Kl(e) {
  var t = Ot(), n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, a = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = i = i.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== i);
    Kt(a, t.memoizedState) || (dt = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function Ag() {
}
function Tg(e, t) {
  var n = Se, r = Ot(), i = t(), a = !Kt(r.memoizedState, i);
  if (a && (r.memoizedState = i, dt = !0), r = r.queue, Ap(Pg.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Me !== null && Me.memoizedState.tag & 1) {
    if (n.flags |= 2048, Sa(9, Ig.bind(null, n, r, i, t), void 0, null), Be === null) throw Error(I(349));
    br & 30 || Ng(n, t, i);
  }
  return i;
}
function Ng(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Se.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Se.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ig(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Fg(t) && Rg(e);
}
function Pg(e, t, n) {
  return n(function() {
    Fg(t) && Rg(e);
  });
}
function Fg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Kt(e, n);
  } catch {
    return !0;
  }
}
function Rg(e) {
  var t = bn(e, 1);
  t !== null && qt(t, e, 1, -1);
}
function rm(e) {
  var t = en();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ca, lastRenderedState: e }, t.queue = e, e = e.dispatch = db.bind(null, Se, e), [t.memoizedState, e];
}
function Sa(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Se.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Se.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Og() {
  return Ot().memoizedState;
}
function Oo(e, t, n, r) {
  var i = en();
  Se.flags |= e, i.memoizedState = Sa(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ds(e, t, n, r) {
  var i = Ot();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Oe !== null) {
    var o = Oe.memoizedState;
    if (a = o.destroy, r !== null && Cp(r, o.deps)) {
      i.memoizedState = Sa(t, n, a, r);
      return;
    }
  }
  Se.flags |= e, i.memoizedState = Sa(1 | t, n, a, r);
}
function im(e, t) {
  return Oo(8390656, 8, e, t);
}
function Ap(e, t) {
  return Ds(2048, 8, e, t);
}
function Dg(e, t) {
  return Ds(4, 2, e, t);
}
function Mg(e, t) {
  return Ds(4, 4, e, t);
}
function Lg(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function jg(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ds(4, 4, Lg.bind(null, t, e), n);
}
function Tp() {
}
function Bg(e, t) {
  var n = Ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cp(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function zg(e, t) {
  var n = Ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cp(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Hg(e, t, n) {
  return br & 21 ? (Kt(n, t) || (n = Wv(), Se.lanes |= n, kr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, dt = !0), e.memoizedState = n);
}
function cb(e, t) {
  var n = ce;
  ce = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Wl.transition;
  Wl.transition = {};
  try {
    e(!1), t();
  } finally {
    ce = n, Wl.transition = r;
  }
}
function Vg() {
  return Ot().memoizedState;
}
function pb(e, t, n) {
  var r = Un(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, $g(e)) Ug(t, n);
  else if (n = Cg(e, t, n, r), n !== null) {
    var i = at();
    qt(n, e, r, i), Gg(n, t, r);
  }
}
function db(e, t, n) {
  var r = Un(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if ($g(e)) Ug(t, i);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, s = a(o, n);
      if (i.hasEagerState = !0, i.eagerState = s, Kt(s, o)) {
        var l = t.interleaved;
        l === null ? (i.next = i, yp(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = Cg(e, t, i, r), n !== null && (i = at(), qt(n, e, r, i), Gg(n, t, r));
  }
}
function $g(e) {
  var t = e.alternate;
  return e === Se || t !== null && t === Se;
}
function Ug(e, t) {
  ia = ss = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Gg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ap(e, n);
  }
}
var ls = { readContext: Rt, useCallback: qe, useContext: qe, useEffect: qe, useImperativeHandle: qe, useInsertionEffect: qe, useLayoutEffect: qe, useMemo: qe, useReducer: qe, useRef: qe, useState: qe, useDebugValue: qe, useDeferredValue: qe, useTransition: qe, useMutableSource: qe, useSyncExternalStore: qe, useId: qe, unstable_isNewReconciler: !1 }, fb = { readContext: Rt, useCallback: function(e, t) {
  return en().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Rt, useEffect: im, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Oo(
    4194308,
    4,
    Lg.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Oo(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Oo(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = en();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = en();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = pb.bind(null, Se, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = en();
  return e = { current: e }, t.memoizedState = e;
}, useState: rm, useDebugValue: Tp, useDeferredValue: function(e) {
  return en().memoizedState = e;
}, useTransition: function() {
  var e = rm(!1), t = e[0];
  return e = cb.bind(null, e[1]), en().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Se, i = en();
  if (we) {
    if (n === void 0) throw Error(I(407));
    n = n();
  } else {
    if (n = t(), Be === null) throw Error(I(349));
    br & 30 || Ng(r, t, n);
  }
  i.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return i.queue = a, im(Pg.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, Sa(9, Ig.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = en(), t = Be.identifierPrefix;
  if (we) {
    var n = xn, r = gn;
    n = (r & ~(1 << 32 - Wt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ka++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = ub++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, mb = {
  readContext: Rt,
  useCallback: Bg,
  useContext: Rt,
  useEffect: Ap,
  useImperativeHandle: jg,
  useInsertionEffect: Dg,
  useLayoutEffect: Mg,
  useMemo: zg,
  useReducer: ql,
  useRef: Og,
  useState: function() {
    return ql(Ca);
  },
  useDebugValue: Tp,
  useDeferredValue: function(e) {
    var t = Ot();
    return Hg(t, Oe.memoizedState, e);
  },
  useTransition: function() {
    var e = ql(Ca)[0], t = Ot().memoizedState;
    return [e, t];
  },
  useMutableSource: Ag,
  useSyncExternalStore: Tg,
  useId: Vg,
  unstable_isNewReconciler: !1
}, hb = { readContext: Rt, useCallback: Bg, useContext: Rt, useEffect: Ap, useImperativeHandle: jg, useInsertionEffect: Dg, useLayoutEffect: Mg, useMemo: zg, useReducer: Kl, useRef: Og, useState: function() {
  return Kl(Ca);
}, useDebugValue: Tp, useDeferredValue: function(e) {
  var t = Ot();
  return Oe === null ? t.memoizedState = e : Hg(t, Oe.memoizedState, e);
}, useTransition: function() {
  var e = Kl(Ca)[0], t = Ot().memoizedState;
  return [e, t];
}, useMutableSource: Ag, useSyncExternalStore: Tg, useId: Vg, unstable_isNewReconciler: !1 };
function Ht(e, t) {
  if (e && e.defaultProps) {
    t = _e({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ju(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : _e({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ms = { isMounted: function(e) {
  return (e = e._reactInternals) ? Nr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = at(), i = Un(e), a = yn(r, i);
  a.payload = t, n != null && (a.callback = n), t = Vn(e, a, i), t !== null && (qt(t, e, i, r), Fo(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = at(), i = Un(e), a = yn(r, i);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = Vn(e, a, i), t !== null && (qt(t, e, i, r), Fo(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = at(), r = Un(e), i = yn(n, r);
  i.tag = 2, t != null && (i.callback = t), t = Vn(e, i, r), t !== null && (qt(t, e, r, n), Fo(t, e, r));
} };
function am(e, t, n, r, i, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !ga(n, r) || !ga(i, a) : !0;
}
function Wg(e, t, n) {
  var r = !1, i = Kn, a = t.contextType;
  return typeof a == "object" && a !== null ? a = Rt(a) : (i = mt(t) ? wr : Ze.current, r = t.contextTypes, a = (r = r != null) ? hi(e, i) : Kn), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ms, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function om(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ms.enqueueReplaceState(t, t.state, null);
}
function ec(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, wp(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? i.context = Rt(a) : (a = mt(t) ? wr : Ze.current, i.context = hi(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Ju(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Ms.enqueueReplaceState(i, i.state, null), as(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function yi(e, t) {
  try {
    var n = "", r = t;
    do
      n += $w(r), r = r.return;
    while (r);
    var i = n;
  } catch (a) {
    i = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ql(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function tc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var vb = typeof WeakMap == "function" ? WeakMap : Map;
function qg(e, t, n) {
  n = yn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    cs || (cs = !0, pc = r), tc(e, t);
  }, n;
}
function Kg(e, t, n) {
  n = yn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      tc(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    tc(e, t), typeof r != "function" && ($n === null ? $n = /* @__PURE__ */ new Set([this]) : $n.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function sm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new vb();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = Ib.bind(null, e, t, n), t.then(e, e));
}
function lm(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function um(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = yn(-1, 1), t.tag = 2, Vn(n, t, 1))), n.lanes |= 1), e);
}
var gb = _n.ReactCurrentOwner, dt = !1;
function nt(e, t, n, r) {
  t.child = e === null ? kg(t, null, n, r) : gi(t, e.child, n, r);
}
function cm(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return si(t, i), r = Sp(e, t, n, r, a, i), n = _p(), e !== null && !dt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, kn(e, t, i)) : (we && n && fp(t), t.flags |= 1, nt(e, t, r, i), t.child);
}
function pm(e, t, n, r, i) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !Mp(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Qg(e, t, a, r, i)) : (e = jo(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & i)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ga, n(o, r) && e.ref === t.ref) return kn(e, t, i);
  }
  return t.flags |= 1, e = Gn(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Qg(e, t, n, r, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (ga(a, r) && e.ref === t.ref) if (dt = !1, t.pendingProps = r = a, (e.lanes & i) !== 0) e.flags & 131072 && (dt = !0);
    else return t.lanes = e.lanes, kn(e, t, i);
  }
  return nc(e, t, n, r, i);
}
function Xg(e, t, n) {
  var r = t.pendingProps, i = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, he(Jr, xt), xt |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, he(Jr, xt), xt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, he(Jr, xt), xt |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, he(Jr, xt), xt |= r;
  return nt(e, t, i, n), t.child;
}
function Yg(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function nc(e, t, n, r, i) {
  var a = mt(n) ? wr : Ze.current;
  return a = hi(t, a), si(t, i), n = Sp(e, t, n, r, a, i), r = _p(), e !== null && !dt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, kn(e, t, i)) : (we && r && fp(t), t.flags |= 1, nt(e, t, n, i), t.child);
}
function dm(e, t, n, r, i) {
  if (mt(n)) {
    var a = !0;
    es(t);
  } else a = !1;
  if (si(t, i), t.stateNode === null) Do(e, t), Wg(t, n, r), ec(t, n, r, i), r = !0;
  else if (e === null) {
    var o = t.stateNode, s = t.memoizedProps;
    o.props = s;
    var l = o.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Rt(u) : (u = mt(n) ? wr : Ze.current, u = hi(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || l !== u) && om(t, o, r, u), Fn = !1;
    var d = t.memoizedState;
    o.state = d, as(t, r, o, i), l = t.memoizedState, s !== r || d !== l || ft.current || Fn ? (typeof c == "function" && (Ju(t, n, c, r), l = t.memoizedState), (s = Fn || am(t, n, s, r, d, l, u)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), o.props = r, o.state = l, o.context = u, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, Sg(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : Ht(t.type, s), o.props = u, f = t.pendingProps, d = o.context, l = n.contextType, typeof l == "object" && l !== null ? l = Rt(l) : (l = mt(n) ? wr : Ze.current, l = hi(t, l));
    var v = n.getDerivedStateFromProps;
    (c = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== f || d !== l) && om(t, o, r, l), Fn = !1, d = t.memoizedState, o.state = d, as(t, r, o, i);
    var E = t.memoizedState;
    s !== f || d !== E || ft.current || Fn ? (typeof v == "function" && (Ju(t, n, v, r), E = t.memoizedState), (u = Fn || am(t, n, u, r, d, E, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, E, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, E, l)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = E), o.props = r, o.state = E, o.context = l, r = u) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return rc(e, t, n, r, a, i);
}
function rc(e, t, n, r, i, a) {
  Yg(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Yf(t, n, !1), kn(e, t, a);
  r = t.stateNode, gb.current = t;
  var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = gi(t, e.child, null, a), t.child = gi(t, null, s, a)) : nt(e, t, s, a), t.memoizedState = r.state, i && Yf(t, n, !0), t.child;
}
function Zg(e) {
  var t = e.stateNode;
  t.pendingContext ? Xf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Xf(e, t.context, !1), Ep(e, t.containerInfo);
}
function fm(e, t, n, r, i) {
  return vi(), hp(i), t.flags |= 256, nt(e, t, n, r), t.child;
}
var ic = { dehydrated: null, treeContext: null, retryLane: 0 };
function ac(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Jg(e, t, n) {
  var r = t.pendingProps, i = Ce.current, a = !1, o = (t.flags & 128) !== 0, s;
  if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), s ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), he(Ce, i & 1), e === null)
    return Yu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = Bs(o, r, 0, null), e = vr(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = ac(n), t.memoizedState = ic, e) : Np(t, o));
  if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null)) return xb(e, t, o, r, s, i, n);
  if (a) {
    a = r.fallback, o = t.mode, i = e.child, s = i.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Gn(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), s !== null ? a = Gn(s, a) : (a = vr(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? ac(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = ic, r;
  }
  return a = e.child, e = a.sibling, r = Gn(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Np(e, t) {
  return t = Bs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function po(e, t, n, r) {
  return r !== null && hp(r), gi(t, e.child, null, n), e = Np(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function xb(e, t, n, r, i, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ql(Error(I(422))), po(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, i = t.mode, r = Bs({ mode: "visible", children: r.children }, i, 0, null), a = vr(a, i, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && gi(t, e.child, null, o), t.child.memoizedState = ac(o), t.memoizedState = ic, a);
  if (!(t.mode & 1)) return po(e, t, o, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var s = r.dgst;
    return r = s, a = Error(I(419)), r = Ql(a, r, void 0), po(e, t, o, r);
  }
  if (s = (o & e.childLanes) !== 0, dt || s) {
    if (r = Be, r !== null) {
      switch (o & -o) {
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
      i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== a.retryLane && (a.retryLane = i, bn(e, i), qt(r, e, i, -1));
    }
    return Dp(), r = Ql(Error(I(421))), po(e, t, o, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Pb.bind(null, e), i._reactRetry = t, null) : (e = a.treeContext, wt = Hn(i.nextSibling), Et = t, we = !0, Ut = null, e !== null && (Nt[It++] = gn, Nt[It++] = xn, Nt[It++] = Er, gn = e.id, xn = e.overflow, Er = t), t = Np(t, r.children), t.flags |= 4096, t);
}
function mm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Zu(e.return, t, n);
}
function Xl(e, t, n, r, i) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = i);
}
function ex(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, a = r.tail;
  if (nt(e, t, r.children, n), r = Ce.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && mm(e, n, t);
      else if (e.tag === 19) mm(e, n, t);
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
  if (he(Ce, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && os(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Xl(t, !1, i, n, a);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && os(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      Xl(t, !0, n, null, a);
      break;
    case "together":
      Xl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Do(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function kn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), kr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(I(153));
  if (t.child !== null) {
    for (e = t.child, n = Gn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Gn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function yb(e, t, n) {
  switch (t.tag) {
    case 3:
      Zg(t), vi();
      break;
    case 5:
      _g(t);
      break;
    case 1:
      mt(t.type) && es(t);
      break;
    case 4:
      Ep(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      he(rs, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (he(Ce, Ce.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Jg(e, t, n) : (he(Ce, Ce.current & 1), e = kn(e, t, n), e !== null ? e.sibling : null);
      he(Ce, Ce.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return ex(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), he(Ce, Ce.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Xg(e, t, n);
  }
  return kn(e, t, n);
}
var tx, oc, nx, rx;
tx = function(e, t) {
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
oc = function() {
};
nx = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, dr(sn.current);
    var a = null;
    switch (n) {
      case "input":
        i = Tu(e, i), r = Tu(e, r), a = [];
        break;
      case "select":
        i = _e({}, i, { value: void 0 }), r = _e({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        i = Pu(e, i), r = Pu(e, r), a = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Zo);
    }
    Ru(n, r);
    var o;
    n = null;
    for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var s = i[u];
      for (o in s) s.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ca.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (s = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== s && (l != null || s != null)) if (u === "style") if (s) {
        for (o in s) !s.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in l) l.hasOwnProperty(o) && s[o] !== l[o] && (n || (n = {}), n[o] = l[o]);
      } else n || (a || (a = []), a.push(
        u,
        n
      )), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (a = a || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (a = a || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ca.hasOwnProperty(u) ? (l != null && u === "onScroll" && ge("scroll", e), a || s === l || (a = [])) : (a = a || []).push(u, l));
    }
    n && (a = a || []).push("style", n);
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
rx = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ui(e, t) {
  if (!we) switch (e.tailMode) {
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
function Ke(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function wb(e, t, n) {
  var r = t.pendingProps;
  switch (mp(t), t.tag) {
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
      return Ke(t), null;
    case 1:
      return mt(t.type) && Jo(), Ke(t), null;
    case 3:
      return r = t.stateNode, xi(), ye(ft), ye(Ze), kp(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (uo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ut !== null && (mc(Ut), Ut = null))), oc(e, t), Ke(t), null;
    case 5:
      bp(t);
      var i = dr(ba.current);
      if (n = t.type, e !== null && t.stateNode != null) nx(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(I(166));
          return Ke(t), null;
        }
        if (e = dr(sn.current), uo(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[rn] = t, r[wa] = a, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ge("cancel", r), ge("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ge("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Yi.length; i++) ge(Yi[i], r);
              break;
            case "source":
              ge("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ge(
                "error",
                r
              ), ge("load", r);
              break;
            case "details":
              ge("toggle", r);
              break;
            case "input":
              kf(r, a), ge("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, ge("invalid", r);
              break;
            case "textarea":
              Sf(r, a), ge("invalid", r);
          }
          Ru(n, a), i = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var s = a[o];
            o === "children" ? typeof s == "string" ? r.textContent !== s && (a.suppressHydrationWarning !== !0 && lo(r.textContent, s, e), i = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (a.suppressHydrationWarning !== !0 && lo(
              r.textContent,
              s,
              e
            ), i = ["children", "" + s]) : ca.hasOwnProperty(o) && s != null && o === "onScroll" && ge("scroll", r);
          }
          switch (n) {
            case "input":
              eo(r), Cf(r, a, !0);
              break;
            case "textarea":
              eo(r), _f(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Zo);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Pv(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[rn] = t, e[wa] = r, tx(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Ou(n, r), n) {
              case "dialog":
                ge("cancel", e), ge("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ge("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < Yi.length; i++) ge(Yi[i], e);
                i = r;
                break;
              case "source":
                ge("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                ge(
                  "error",
                  e
                ), ge("load", e), i = r;
                break;
              case "details":
                ge("toggle", e), i = r;
                break;
              case "input":
                kf(e, r), i = Tu(e, r), ge("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = _e({}, r, { value: void 0 }), ge("invalid", e);
                break;
              case "textarea":
                Sf(e, r), i = Pu(e, r), ge("invalid", e);
                break;
              default:
                i = r;
            }
            Ru(n, i), s = i;
            for (a in s) if (s.hasOwnProperty(a)) {
              var l = s[a];
              a === "style" ? Ov(e, l) : a === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Fv(e, l)) : a === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && pa(e, l) : typeof l == "number" && pa(e, "" + l) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (ca.hasOwnProperty(a) ? l != null && a === "onScroll" && ge("scroll", e) : l != null && Jc(e, a, l, o));
            }
            switch (n) {
              case "input":
                eo(e), Cf(e, r, !1);
                break;
              case "textarea":
                eo(e), _f(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + qn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? ri(e, !!r.multiple, a, !1) : r.defaultValue != null && ri(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Zo);
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
      return Ke(t), null;
    case 6:
      if (e && t.stateNode != null) rx(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
        if (n = dr(ba.current), dr(sn.current), uo(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[rn] = t, (a = r.nodeValue !== n) && (e = Et, e !== null)) switch (e.tag) {
            case 3:
              lo(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && lo(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[rn] = t, t.stateNode = r;
      }
      return Ke(t), null;
    case 13:
      if (ye(Ce), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (we && wt !== null && t.mode & 1 && !(t.flags & 128)) Eg(), vi(), t.flags |= 98560, a = !1;
        else if (a = uo(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(I(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(I(317));
            a[rn] = t;
          } else vi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ke(t), a = !1;
        } else Ut !== null && (mc(Ut), Ut = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ce.current & 1 ? De === 0 && (De = 3) : Dp())), t.updateQueue !== null && (t.flags |= 4), Ke(t), null);
    case 4:
      return xi(), oc(e, t), e === null && xa(t.stateNode.containerInfo), Ke(t), null;
    case 10:
      return xp(t.type._context), Ke(t), null;
    case 17:
      return mt(t.type) && Jo(), Ke(t), null;
    case 19:
      if (ye(Ce), a = t.memoizedState, a === null) return Ke(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) Ui(a, !1);
      else {
        if (De !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = os(e), o !== null) {
            for (t.flags |= 128, Ui(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return he(Ce, Ce.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && Ie() > wi && (t.flags |= 128, r = !0, Ui(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = os(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ui(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !we) return Ke(t), null;
        } else 2 * Ie() - a.renderingStartTime > wi && n !== 1073741824 && (t.flags |= 128, r = !0, Ui(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ie(), t.sibling = null, n = Ce.current, he(Ce, r ? n & 1 | 2 : n & 1), t) : (Ke(t), null);
    case 22:
    case 23:
      return Op(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? xt & 1073741824 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function Eb(e, t) {
  switch (mp(t), t.tag) {
    case 1:
      return mt(t.type) && Jo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return xi(), ye(ft), ye(Ze), kp(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return bp(t), null;
    case 13:
      if (ye(Ce), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(I(340));
        vi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ye(Ce), null;
    case 4:
      return xi(), null;
    case 10:
      return xp(t.type._context), null;
    case 22:
    case 23:
      return Op(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var fo = !1, Qe = !1, bb = typeof WeakSet == "function" ? WeakSet : Set, z = null;
function Zr(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Ae(e, t, r);
  }
  else n.current = null;
}
function sc(e, t, n) {
  try {
    n();
  } catch (r) {
    Ae(e, t, r);
  }
}
var hm = !1;
function kb(e, t) {
  if (Uu = Qo, e = lg(), dp(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var i = r.anchorOffset, a = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, a.nodeType;
        } catch {
          n = null;
          break e;
        }
        var o = 0, s = -1, l = -1, u = 0, c = 0, f = e, d = null;
        t: for (; ; ) {
          for (var v; f !== n || i !== 0 && f.nodeType !== 3 || (s = o + i), f !== a || r !== 0 && f.nodeType !== 3 || (l = o + r), f.nodeType === 3 && (o += f.nodeValue.length), (v = f.firstChild) !== null; )
            d = f, f = v;
          for (; ; ) {
            if (f === e) break t;
            if (d === n && ++u === i && (s = o), d === a && ++c === r && (l = o), (v = f.nextSibling) !== null) break;
            f = d, d = f.parentNode;
          }
          f = v;
        }
        n = s === -1 || l === -1 ? null : { start: s, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Gu = { focusedElem: e, selectionRange: n }, Qo = !1, z = t; z !== null; ) if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, z = e;
  else for (; z !== null; ) {
    t = z;
    try {
      var E = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (E !== null) {
            var x = E.memoizedProps, b = E.memoizedState, g = t.stateNode, h = g.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Ht(t.type, x), b);
            g.__reactInternalSnapshotBeforeUpdate = h;
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
    } catch (k) {
      Ae(t, t.return, k);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, z = e;
      break;
    }
    z = t.return;
  }
  return E = hm, hm = !1, E;
}
function aa(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        i.destroy = void 0, a !== void 0 && sc(t, n, a);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ls(e, t) {
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
function lc(e) {
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
function ix(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ix(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[rn], delete t[wa], delete t[Ku], delete t[ab], delete t[ob])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function ax(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function vm(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || ax(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function uc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Zo));
  else if (r !== 4 && (e = e.child, e !== null)) for (uc(e, t, n), e = e.sibling; e !== null; ) uc(e, t, n), e = e.sibling;
}
function cc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (cc(e, t, n), e = e.sibling; e !== null; ) cc(e, t, n), e = e.sibling;
}
var Ve = null, Vt = !1;
function In(e, t, n) {
  for (n = n.child; n !== null; ) ox(e, t, n), n = n.sibling;
}
function ox(e, t, n) {
  if (on && typeof on.onCommitFiberUnmount == "function") try {
    on.onCommitFiberUnmount(Ns, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Qe || Zr(n, t);
    case 6:
      var r = Ve, i = Vt;
      Ve = null, In(e, t, n), Ve = r, Vt = i, Ve !== null && (Vt ? (e = Ve, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ve.removeChild(n.stateNode));
      break;
    case 18:
      Ve !== null && (Vt ? (e = Ve, n = n.stateNode, e.nodeType === 8 ? $l(e.parentNode, n) : e.nodeType === 1 && $l(e, n), ha(e)) : $l(Ve, n.stateNode));
      break;
    case 4:
      r = Ve, i = Vt, Ve = n.stateNode.containerInfo, Vt = !0, In(e, t, n), Ve = r, Vt = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Qe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var a = i, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && sc(n, t, o), i = i.next;
        } while (i !== r);
      }
      In(e, t, n);
      break;
    case 1:
      if (!Qe && (Zr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        Ae(n, t, s);
      }
      In(e, t, n);
      break;
    case 21:
      In(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Qe = (r = Qe) || n.memoizedState !== null, In(e, t, n), Qe = r) : In(e, t, n);
      break;
    default:
      In(e, t, n);
  }
}
function gm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new bb()), t.forEach(function(r) {
      var i = Fb.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function zt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var a = e, o = t, s = o;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            Ve = s.stateNode, Vt = !1;
            break e;
          case 3:
            Ve = s.stateNode.containerInfo, Vt = !0;
            break e;
          case 4:
            Ve = s.stateNode.containerInfo, Vt = !0;
            break e;
        }
        s = s.return;
      }
      if (Ve === null) throw Error(I(160));
      ox(a, o, i), Ve = null, Vt = !1;
      var l = i.alternate;
      l !== null && (l.return = null), i.return = null;
    } catch (u) {
      Ae(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) sx(t, e), t = t.sibling;
}
function sx(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (zt(t, e), Zt(e), r & 4) {
        try {
          aa(3, e, e.return), Ls(3, e);
        } catch (x) {
          Ae(e, e.return, x);
        }
        try {
          aa(5, e, e.return);
        } catch (x) {
          Ae(e, e.return, x);
        }
      }
      break;
    case 1:
      zt(t, e), Zt(e), r & 512 && n !== null && Zr(n, n.return);
      break;
    case 5:
      if (zt(t, e), Zt(e), r & 512 && n !== null && Zr(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          pa(i, "");
        } catch (x) {
          Ae(e, e.return, x);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          s === "input" && a.type === "radio" && a.name != null && Nv(i, a), Ou(s, o);
          var u = Ou(s, a);
          for (o = 0; o < l.length; o += 2) {
            var c = l[o], f = l[o + 1];
            c === "style" ? Ov(i, f) : c === "dangerouslySetInnerHTML" ? Fv(i, f) : c === "children" ? pa(i, f) : Jc(i, c, f, u);
          }
          switch (s) {
            case "input":
              Nu(i, a);
              break;
            case "textarea":
              Iv(i, a);
              break;
            case "select":
              var d = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!a.multiple;
              var v = a.value;
              v != null ? ri(i, !!a.multiple, v, !1) : d !== !!a.multiple && (a.defaultValue != null ? ri(
                i,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : ri(i, !!a.multiple, a.multiple ? [] : "", !1));
          }
          i[wa] = a;
        } catch (x) {
          Ae(e, e.return, x);
        }
      }
      break;
    case 6:
      if (zt(t, e), Zt(e), r & 4) {
        if (e.stateNode === null) throw Error(I(162));
        i = e.stateNode, a = e.memoizedProps;
        try {
          i.nodeValue = a;
        } catch (x) {
          Ae(e, e.return, x);
        }
      }
      break;
    case 3:
      if (zt(t, e), Zt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        ha(t.containerInfo);
      } catch (x) {
        Ae(e, e.return, x);
      }
      break;
    case 4:
      zt(t, e), Zt(e);
      break;
    case 13:
      zt(t, e), Zt(e), i = e.child, i.flags & 8192 && (a = i.memoizedState !== null, i.stateNode.isHidden = a, !a || i.alternate !== null && i.alternate.memoizedState !== null || (Fp = Ie())), r & 4 && gm(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Qe = (u = Qe) || c, zt(t, e), Qe = u) : zt(t, e), Zt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (z = e, c = e.child; c !== null; ) {
          for (f = z = c; z !== null; ) {
            switch (d = z, v = d.child, d.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                aa(4, d, d.return);
                break;
              case 1:
                Zr(d, d.return);
                var E = d.stateNode;
                if (typeof E.componentWillUnmount == "function") {
                  r = d, n = d.return;
                  try {
                    t = r, E.props = t.memoizedProps, E.state = t.memoizedState, E.componentWillUnmount();
                  } catch (x) {
                    Ae(r, n, x);
                  }
                }
                break;
              case 5:
                Zr(d, d.return);
                break;
              case 22:
                if (d.memoizedState !== null) {
                  ym(f);
                  continue;
                }
            }
            v !== null ? (v.return = d, z = v) : ym(f);
          }
          c = c.sibling;
        }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                i = f.stateNode, u ? (a = i.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (s = f.stateNode, l = f.memoizedProps.style, o = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = Rv("display", o));
              } catch (x) {
                Ae(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (c === null) try {
              f.stateNode.nodeValue = u ? "" : f.memoizedProps;
            } catch (x) {
              Ae(e, e.return, x);
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), f = f.return;
          }
          c === f && (c = null), f.sibling.return = f.return, f = f.sibling;
        }
      }
      break;
    case 19:
      zt(t, e), Zt(e), r & 4 && gm(e);
      break;
    case 21:
      break;
    default:
      zt(
        t,
        e
      ), Zt(e);
  }
}
function Zt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ax(n)) {
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
          r.flags & 32 && (pa(i, ""), r.flags &= -33);
          var a = vm(e);
          cc(e, a, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, s = vm(e);
          uc(e, s, o);
          break;
        default:
          throw Error(I(161));
      }
    } catch (l) {
      Ae(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Cb(e, t, n) {
  z = e, lx(e);
}
function lx(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var i = z, a = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || fo;
      if (!o) {
        var s = i.alternate, l = s !== null && s.memoizedState !== null || Qe;
        s = fo;
        var u = Qe;
        if (fo = o, (Qe = l) && !u) for (z = i; z !== null; ) o = z, l = o.child, o.tag === 22 && o.memoizedState !== null ? wm(i) : l !== null ? (l.return = o, z = l) : wm(i);
        for (; a !== null; ) z = a, lx(a), a = a.sibling;
        z = i, fo = s, Qe = u;
      }
      xm(e);
    } else i.subtreeFlags & 8772 && a !== null ? (a.return = i, z = a) : xm(e);
  }
}
function xm(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Qe || Ls(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Qe) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : Ht(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && nm(t, a, r);
            break;
          case 3:
            var o = t.updateQueue;
            if (o !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              nm(t, o, n);
            }
            break;
          case 5:
            var s = t.stateNode;
            if (n === null && t.flags & 4) {
              n = s;
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
                  var f = c.dehydrated;
                  f !== null && ha(f);
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
        Qe || t.flags & 512 && lc(t);
      } catch (d) {
        Ae(t, t.return, d);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, z = n;
      break;
    }
    z = t.return;
  }
}
function ym(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, z = n;
      break;
    }
    z = t.return;
  }
}
function wm(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ls(4, t);
          } catch (l) {
            Ae(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ae(t, i, l);
            }
          }
          var a = t.return;
          try {
            lc(t);
          } catch (l) {
            Ae(t, a, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            lc(t);
          } catch (l) {
            Ae(t, o, l);
          }
      }
    } catch (l) {
      Ae(t, t.return, l);
    }
    if (t === e) {
      z = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, z = s;
      break;
    }
    z = t.return;
  }
}
var Sb = Math.ceil, us = _n.ReactCurrentDispatcher, Ip = _n.ReactCurrentOwner, Ft = _n.ReactCurrentBatchConfig, oe = 0, Be = null, Fe = null, $e = 0, xt = 0, Jr = Jn(0), De = 0, _a = null, kr = 0, js = 0, Pp = 0, oa = null, pt = null, Fp = 0, wi = 1 / 0, mn = null, cs = !1, pc = null, $n = null, mo = !1, Ln = null, ps = 0, sa = 0, dc = null, Mo = -1, Lo = 0;
function at() {
  return oe & 6 ? Ie() : Mo !== -1 ? Mo : Mo = Ie();
}
function Un(e) {
  return e.mode & 1 ? oe & 2 && $e !== 0 ? $e & -$e : lb.transition !== null ? (Lo === 0 && (Lo = Wv()), Lo) : (e = ce, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Jv(e.type)), e) : 1;
}
function qt(e, t, n, r) {
  if (50 < sa) throw sa = 0, dc = null, Error(I(185));
  ja(e, n, r), (!(oe & 2) || e !== Be) && (e === Be && (!(oe & 2) && (js |= n), De === 4 && Dn(e, $e)), ht(e, r), n === 1 && oe === 0 && !(t.mode & 1) && (wi = Ie() + 500, Os && er()));
}
function ht(e, t) {
  var n = e.callbackNode;
  lE(e, t);
  var r = Ko(e, e === Be ? $e : 0);
  if (r === 0) n !== null && Nf(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Nf(n), t === 1) e.tag === 0 ? sb(Em.bind(null, e)) : xg(Em.bind(null, e)), rb(function() {
      !(oe & 6) && er();
    }), n = null;
    else {
      switch (qv(r)) {
        case 1:
          n = ip;
          break;
        case 4:
          n = Uv;
          break;
        case 16:
          n = qo;
          break;
        case 536870912:
          n = Gv;
          break;
        default:
          n = qo;
      }
      n = vx(n, ux.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function ux(e, t) {
  if (Mo = -1, Lo = 0, oe & 6) throw Error(I(327));
  var n = e.callbackNode;
  if (li() && e.callbackNode !== n) return null;
  var r = Ko(e, e === Be ? $e : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ds(e, r);
  else {
    t = r;
    var i = oe;
    oe |= 2;
    var a = px();
    (Be !== e || $e !== t) && (mn = null, wi = Ie() + 500, hr(e, t));
    do
      try {
        Tb();
        break;
      } catch (s) {
        cx(e, s);
      }
    while (!0);
    gp(), us.current = a, oe = i, Fe !== null ? t = 0 : (Be = null, $e = 0, t = De);
  }
  if (t !== 0) {
    if (t === 2 && (i = Bu(e), i !== 0 && (r = i, t = fc(e, i))), t === 1) throw n = _a, hr(e, 0), Dn(e, r), ht(e, Ie()), n;
    if (t === 6) Dn(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !_b(i) && (t = ds(e, r), t === 2 && (a = Bu(e), a !== 0 && (r = a, t = fc(e, a))), t === 1)) throw n = _a, hr(e, 0), Dn(e, r), ht(e, Ie()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          or(e, pt, mn);
          break;
        case 3:
          if (Dn(e, r), (r & 130023424) === r && (t = Fp + 500 - Ie(), 10 < t)) {
            if (Ko(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              at(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = qu(or.bind(null, e, pt, mn), t);
            break;
          }
          or(e, pt, mn);
          break;
        case 4:
          if (Dn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Wt(r);
            a = 1 << o, o = t[o], o > i && (i = o), r &= ~a;
          }
          if (r = i, r = Ie() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Sb(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = qu(or.bind(null, e, pt, mn), r);
            break;
          }
          or(e, pt, mn);
          break;
        case 5:
          or(e, pt, mn);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return ht(e, Ie()), e.callbackNode === n ? ux.bind(null, e) : null;
}
function fc(e, t) {
  var n = oa;
  return e.current.memoizedState.isDehydrated && (hr(e, t).flags |= 256), e = ds(e, t), e !== 2 && (t = pt, pt = n, t !== null && mc(t)), e;
}
function mc(e) {
  pt === null ? pt = e : pt.push.apply(pt, e);
}
function _b(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], a = i.getSnapshot;
        i = i.value;
        try {
          if (!Kt(a(), i)) return !1;
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
function Dn(e, t) {
  for (t &= ~Pp, t &= ~js, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Wt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Em(e) {
  if (oe & 6) throw Error(I(327));
  li();
  var t = Ko(e, 0);
  if (!(t & 1)) return ht(e, Ie()), null;
  var n = ds(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Bu(e);
    r !== 0 && (t = r, n = fc(e, r));
  }
  if (n === 1) throw n = _a, hr(e, 0), Dn(e, t), ht(e, Ie()), n;
  if (n === 6) throw Error(I(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, or(e, pt, mn), ht(e, Ie()), null;
}
function Rp(e, t) {
  var n = oe;
  oe |= 1;
  try {
    return e(t);
  } finally {
    oe = n, oe === 0 && (wi = Ie() + 500, Os && er());
  }
}
function Cr(e) {
  Ln !== null && Ln.tag === 0 && !(oe & 6) && li();
  var t = oe;
  oe |= 1;
  var n = Ft.transition, r = ce;
  try {
    if (Ft.transition = null, ce = 1, e) return e();
  } finally {
    ce = r, Ft.transition = n, oe = t, !(oe & 6) && er();
  }
}
function Op() {
  xt = Jr.current, ye(Jr);
}
function hr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, nb(n)), Fe !== null) for (n = Fe.return; n !== null; ) {
    var r = n;
    switch (mp(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Jo();
        break;
      case 3:
        xi(), ye(ft), ye(Ze), kp();
        break;
      case 5:
        bp(r);
        break;
      case 4:
        xi();
        break;
      case 13:
        ye(Ce);
        break;
      case 19:
        ye(Ce);
        break;
      case 10:
        xp(r.type._context);
        break;
      case 22:
      case 23:
        Op();
    }
    n = n.return;
  }
  if (Be = e, Fe = e = Gn(e.current, null), $e = xt = t, De = 0, _a = null, Pp = js = kr = 0, pt = oa = null, pr !== null) {
    for (t = 0; t < pr.length; t++) if (n = pr[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, a = n.pending;
      if (a !== null) {
        var o = a.next;
        a.next = i, r.next = o;
      }
      n.pending = r;
    }
    pr = null;
  }
  return e;
}
function cx(e, t) {
  do {
    var n = Fe;
    try {
      if (gp(), Ro.current = ls, ss) {
        for (var r = Se.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        ss = !1;
      }
      if (br = 0, Me = Oe = Se = null, ia = !1, ka = 0, Ip.current = null, n === null || n.return === null) {
        De = 1, _a = t, Fe = null;
        break;
      }
      e: {
        var a = e, o = n.return, s = n, l = t;
        if (t = $e, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = s, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var v = lm(o);
          if (v !== null) {
            v.flags &= -257, um(v, o, s, a, t), v.mode & 1 && sm(a, u, t), t = v, l = u;
            var E = t.updateQueue;
            if (E === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(l), t.updateQueue = x;
            } else E.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              sm(a, u, t), Dp();
              break e;
            }
            l = Error(I(426));
          }
        } else if (we && s.mode & 1) {
          var b = lm(o);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256), um(b, o, s, a, t), hp(yi(l, s));
            break e;
          }
        }
        a = l = yi(l, s), De !== 4 && (De = 2), oa === null ? oa = [a] : oa.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var g = qg(a, l, t);
              tm(a, g);
              break e;
            case 1:
              s = l;
              var h = a.type, y = a.stateNode;
              if (!(a.flags & 128) && (typeof h.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && ($n === null || !$n.has(y)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var k = Kg(a, s, t);
                tm(a, k);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      fx(n);
    } catch (S) {
      t = S, Fe === n && n !== null && (Fe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function px() {
  var e = us.current;
  return us.current = ls, e === null ? ls : e;
}
function Dp() {
  (De === 0 || De === 3 || De === 2) && (De = 4), Be === null || !(kr & 268435455) && !(js & 268435455) || Dn(Be, $e);
}
function ds(e, t) {
  var n = oe;
  oe |= 2;
  var r = px();
  (Be !== e || $e !== t) && (mn = null, hr(e, t));
  do
    try {
      Ab();
      break;
    } catch (i) {
      cx(e, i);
    }
  while (!0);
  if (gp(), oe = n, us.current = r, Fe !== null) throw Error(I(261));
  return Be = null, $e = 0, De;
}
function Ab() {
  for (; Fe !== null; ) dx(Fe);
}
function Tb() {
  for (; Fe !== null && !Jw(); ) dx(Fe);
}
function dx(e) {
  var t = hx(e.alternate, e, xt);
  e.memoizedProps = e.pendingProps, t === null ? fx(e) : Fe = t, Ip.current = null;
}
function fx(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Eb(n, t), n !== null) {
        n.flags &= 32767, Fe = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        De = 6, Fe = null;
        return;
      }
    } else if (n = wb(n, t, xt), n !== null) {
      Fe = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Fe = t;
      return;
    }
    Fe = t = e;
  } while (t !== null);
  De === 0 && (De = 5);
}
function or(e, t, n) {
  var r = ce, i = Ft.transition;
  try {
    Ft.transition = null, ce = 1, Nb(e, t, n, r);
  } finally {
    Ft.transition = i, ce = r;
  }
  return null;
}
function Nb(e, t, n, r) {
  do
    li();
  while (Ln !== null);
  if (oe & 6) throw Error(I(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(I(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (uE(e, a), e === Be && (Fe = Be = null, $e = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || mo || (mo = !0, vx(qo, function() {
    return li(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = Ft.transition, Ft.transition = null;
    var o = ce;
    ce = 1;
    var s = oe;
    oe |= 4, Ip.current = null, kb(e, n), sx(n, e), QE(Gu), Qo = !!Uu, Gu = Uu = null, e.current = n, Cb(n), eE(), oe = s, ce = o, Ft.transition = a;
  } else e.current = n;
  if (mo && (mo = !1, Ln = e, ps = i), a = e.pendingLanes, a === 0 && ($n = null), rE(n.stateNode), ht(e, Ie()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (cs) throw cs = !1, e = pc, pc = null, e;
  return ps & 1 && e.tag !== 0 && li(), a = e.pendingLanes, a & 1 ? e === dc ? sa++ : (sa = 0, dc = e) : sa = 0, er(), null;
}
function li() {
  if (Ln !== null) {
    var e = qv(ps), t = Ft.transition, n = ce;
    try {
      if (Ft.transition = null, ce = 16 > e ? 16 : e, Ln === null) var r = !1;
      else {
        if (e = Ln, Ln = null, ps = 0, oe & 6) throw Error(I(331));
        var i = oe;
        for (oe |= 4, z = e.current; z !== null; ) {
          var a = z, o = a.child;
          if (z.flags & 16) {
            var s = a.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (z = u; z !== null; ) {
                  var c = z;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      aa(8, c, a);
                  }
                  var f = c.child;
                  if (f !== null) f.return = c, z = f;
                  else for (; z !== null; ) {
                    c = z;
                    var d = c.sibling, v = c.return;
                    if (ix(c), c === u) {
                      z = null;
                      break;
                    }
                    if (d !== null) {
                      d.return = v, z = d;
                      break;
                    }
                    z = v;
                  }
                }
              }
              var E = a.alternate;
              if (E !== null) {
                var x = E.child;
                if (x !== null) {
                  E.child = null;
                  do {
                    var b = x.sibling;
                    x.sibling = null, x = b;
                  } while (x !== null);
                }
              }
              z = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) o.return = a, z = o;
          else e: for (; z !== null; ) {
            if (a = z, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                aa(9, a, a.return);
            }
            var g = a.sibling;
            if (g !== null) {
              g.return = a.return, z = g;
              break e;
            }
            z = a.return;
          }
        }
        var h = e.current;
        for (z = h; z !== null; ) {
          o = z;
          var y = o.child;
          if (o.subtreeFlags & 2064 && y !== null) y.return = o, z = y;
          else e: for (o = h; z !== null; ) {
            if (s = z, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Ls(9, s);
              }
            } catch (S) {
              Ae(s, s.return, S);
            }
            if (s === o) {
              z = null;
              break e;
            }
            var k = s.sibling;
            if (k !== null) {
              k.return = s.return, z = k;
              break e;
            }
            z = s.return;
          }
        }
        if (oe = i, er(), on && typeof on.onPostCommitFiberRoot == "function") try {
          on.onPostCommitFiberRoot(Ns, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ce = n, Ft.transition = t;
    }
  }
  return !1;
}
function bm(e, t, n) {
  t = yi(n, t), t = qg(e, t, 1), e = Vn(e, t, 1), t = at(), e !== null && (ja(e, 1, t), ht(e, t));
}
function Ae(e, t, n) {
  if (e.tag === 3) bm(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      bm(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && ($n === null || !$n.has(r))) {
        e = yi(n, e), e = Kg(t, e, 1), t = Vn(t, e, 1), e = at(), t !== null && (ja(t, 1, e), ht(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Ib(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = at(), e.pingedLanes |= e.suspendedLanes & n, Be === e && ($e & n) === n && (De === 4 || De === 3 && ($e & 130023424) === $e && 500 > Ie() - Fp ? hr(e, 0) : Pp |= n), ht(e, t);
}
function mx(e, t) {
  t === 0 && (e.mode & 1 ? (t = ro, ro <<= 1, !(ro & 130023424) && (ro = 4194304)) : t = 1);
  var n = at();
  e = bn(e, t), e !== null && (ja(e, t, n), ht(e, n));
}
function Pb(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), mx(e, n);
}
function Fb(e, t) {
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
  r !== null && r.delete(t), mx(e, n);
}
var hx;
hx = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ft.current) dt = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return dt = !1, yb(e, t, n);
    dt = !!(e.flags & 131072);
  }
  else dt = !1, we && t.flags & 1048576 && yg(t, ns, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Do(e, t), e = t.pendingProps;
      var i = hi(t, Ze.current);
      si(t, n), i = Sp(null, t, r, e, i, n);
      var a = _p();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, mt(r) ? (a = !0, es(t)) : a = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, wp(t), i.updater = Ms, t.stateNode = i, i._reactInternals = t, ec(t, r, e, n), t = rc(null, t, r, !0, a, n)) : (t.tag = 0, we && a && fp(t), nt(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Do(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Ob(r), e = Ht(r, e), i) {
          case 0:
            t = nc(null, t, r, e, n);
            break e;
          case 1:
            t = dm(null, t, r, e, n);
            break e;
          case 11:
            t = cm(null, t, r, e, n);
            break e;
          case 14:
            t = pm(null, t, r, Ht(r.type, e), n);
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
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ht(r, i), nc(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ht(r, i), dm(e, t, r, i, n);
    case 3:
      e: {
        if (Zg(t), e === null) throw Error(I(387));
        r = t.pendingProps, a = t.memoizedState, i = a.element, Sg(e, t), as(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          i = yi(Error(I(423)), t), t = fm(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = yi(Error(I(424)), t), t = fm(e, t, r, n, i);
          break e;
        } else for (wt = Hn(t.stateNode.containerInfo.firstChild), Et = t, we = !0, Ut = null, n = kg(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (vi(), r === i) {
            t = kn(e, t, n);
            break e;
          }
          nt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return _g(t), e === null && Yu(t), r = t.type, i = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = i.children, Wu(r, i) ? o = null : a !== null && Wu(r, a) && (t.flags |= 32), Yg(e, t), nt(e, t, o, n), t.child;
    case 6:
      return e === null && Yu(t), null;
    case 13:
      return Jg(e, t, n);
    case 4:
      return Ep(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = gi(t, null, r, n) : nt(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ht(r, i), cm(e, t, r, i, n);
    case 7:
      return nt(e, t, t.pendingProps, n), t.child;
    case 8:
      return nt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return nt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, a = t.memoizedProps, o = i.value, he(rs, r._currentValue), r._currentValue = o, a !== null) if (Kt(a.value, o)) {
          if (a.children === i.children && !ft.current) {
            t = kn(e, t, n);
            break e;
          }
        } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
          var s = a.dependencies;
          if (s !== null) {
            o = a.child;
            for (var l = s.firstContext; l !== null; ) {
              if (l.context === r) {
                if (a.tag === 1) {
                  l = yn(-1, n & -n), l.tag = 2;
                  var u = a.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                a.lanes |= n, l = a.alternate, l !== null && (l.lanes |= n), Zu(
                  a.return,
                  n,
                  t
                ), s.lanes |= n;
                break;
              }
              l = l.next;
            }
          } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
          else if (a.tag === 18) {
            if (o = a.return, o === null) throw Error(I(341));
            o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Zu(o, n, t), o = a.sibling;
          } else o = a.child;
          if (o !== null) o.return = a;
          else for (o = a; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (a = o.sibling, a !== null) {
              a.return = o.return, o = a;
              break;
            }
            o = o.return;
          }
          a = o;
        }
        nt(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, si(t, n), i = Rt(i), r = r(i), t.flags |= 1, nt(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = Ht(r, t.pendingProps), i = Ht(r.type, i), pm(e, t, r, i, n);
    case 15:
      return Qg(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ht(r, i), Do(e, t), t.tag = 1, mt(r) ? (e = !0, es(t)) : e = !1, si(t, n), Wg(t, r, i), ec(t, r, i, n), rc(null, t, r, !0, e, n);
    case 19:
      return ex(e, t, n);
    case 22:
      return Xg(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function vx(e, t) {
  return $v(e, t);
}
function Rb(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Pt(e, t, n, r) {
  return new Rb(e, t, n, r);
}
function Mp(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Ob(e) {
  if (typeof e == "function") return Mp(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === tp) return 11;
    if (e === np) return 14;
  }
  return 2;
}
function Gn(e, t) {
  var n = e.alternate;
  return n === null ? (n = Pt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function jo(e, t, n, r, i, a) {
  var o = 2;
  if (r = e, typeof e == "function") Mp(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case $r:
      return vr(n.children, i, a, t);
    case ep:
      o = 8, i |= 8;
      break;
    case Cu:
      return e = Pt(12, n, t, i | 2), e.elementType = Cu, e.lanes = a, e;
    case Su:
      return e = Pt(13, n, t, i), e.elementType = Su, e.lanes = a, e;
    case _u:
      return e = Pt(19, n, t, i), e.elementType = _u, e.lanes = a, e;
    case _v:
      return Bs(n, i, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Cv:
          o = 10;
          break e;
        case Sv:
          o = 9;
          break e;
        case tp:
          o = 11;
          break e;
        case np:
          o = 14;
          break e;
        case Pn:
          o = 16, r = null;
          break e;
      }
      throw Error(I(130, e == null ? e : typeof e, ""));
  }
  return t = Pt(o, n, t, i), t.elementType = e, t.type = r, t.lanes = a, t;
}
function vr(e, t, n, r) {
  return e = Pt(7, e, r, t), e.lanes = n, e;
}
function Bs(e, t, n, r) {
  return e = Pt(22, e, r, t), e.elementType = _v, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Yl(e, t, n) {
  return e = Pt(6, e, null, t), e.lanes = n, e;
}
function Zl(e, t, n) {
  return t = Pt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Db(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Fl(0), this.expirationTimes = Fl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fl(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Lp(e, t, n, r, i, a, o, s, l) {
  return e = new Db(e, t, n, s, l), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = Pt(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, wp(a), e;
}
function Mb(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Vr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function gx(e) {
  if (!e) return Kn;
  e = e._reactInternals;
  e: {
    if (Nr(e) !== e || e.tag !== 1) throw Error(I(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (mt(t.type)) {
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
    if (mt(n)) return gg(e, n, t);
  }
  return t;
}
function xx(e, t, n, r, i, a, o, s, l) {
  return e = Lp(n, r, !0, e, i, a, o, s, l), e.context = gx(null), n = e.current, r = at(), i = Un(n), a = yn(r, i), a.callback = t ?? null, Vn(n, a, i), e.current.lanes = i, ja(e, i, r), ht(e, r), e;
}
function zs(e, t, n, r) {
  var i = t.current, a = at(), o = Un(i);
  return n = gx(n), t.context === null ? t.context = n : t.pendingContext = n, t = yn(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Vn(i, t, o), e !== null && (qt(e, i, o, a), Fo(e, i, o)), o;
}
function fs(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function km(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function jp(e, t) {
  km(e, t), (e = e.alternate) && km(e, t);
}
function Lb() {
  return null;
}
var yx = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Bp(e) {
  this._internalRoot = e;
}
Hs.prototype.render = Bp.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(I(409));
  zs(e, t, null, null);
};
Hs.prototype.unmount = Bp.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Cr(function() {
      zs(null, e, null, null);
    }), t[En] = null;
  }
};
function Hs(e) {
  this._internalRoot = e;
}
Hs.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Xv();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < On.length && t !== 0 && t < On[n].priority; n++) ;
    On.splice(n, 0, e), n === 0 && Zv(e);
  }
};
function zp(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Vs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Cm() {
}
function jb(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var u = fs(o);
        a.call(u);
      };
    }
    var o = xx(t, r, e, 0, null, !1, !1, "", Cm);
    return e._reactRootContainer = o, e[En] = o.current, xa(e.nodeType === 8 ? e.parentNode : e), Cr(), o;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = fs(l);
      s.call(u);
    };
  }
  var l = Lp(e, 0, !1, null, null, !1, !1, "", Cm);
  return e._reactRootContainer = l, e[En] = l.current, xa(e.nodeType === 8 ? e.parentNode : e), Cr(function() {
    zs(t, l, n, r);
  }), l;
}
function $s(e, t, n, r, i) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof i == "function") {
      var s = i;
      i = function() {
        var l = fs(o);
        s.call(l);
      };
    }
    zs(t, o, e, i);
  } else o = jb(n, t, e, i, r);
  return fs(o);
}
Kv = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Xi(t.pendingLanes);
        n !== 0 && (ap(t, n | 1), ht(t, Ie()), !(oe & 6) && (wi = Ie() + 500, er()));
      }
      break;
    case 13:
      Cr(function() {
        var r = bn(e, 1);
        if (r !== null) {
          var i = at();
          qt(r, e, 1, i);
        }
      }), jp(e, 1);
  }
};
op = function(e) {
  if (e.tag === 13) {
    var t = bn(e, 134217728);
    if (t !== null) {
      var n = at();
      qt(t, e, 134217728, n);
    }
    jp(e, 134217728);
  }
};
Qv = function(e) {
  if (e.tag === 13) {
    var t = Un(e), n = bn(e, t);
    if (n !== null) {
      var r = at();
      qt(n, e, t, r);
    }
    jp(e, t);
  }
};
Xv = function() {
  return ce;
};
Yv = function(e, t) {
  var n = ce;
  try {
    return ce = e, t();
  } finally {
    ce = n;
  }
};
Mu = function(e, t, n) {
  switch (t) {
    case "input":
      if (Nu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Rs(r);
            if (!i) throw Error(I(90));
            Tv(r), Nu(r, i);
          }
        }
      }
      break;
    case "textarea":
      Iv(e, n);
      break;
    case "select":
      t = n.value, t != null && ri(e, !!n.multiple, t, !1);
  }
};
Lv = Rp;
jv = Cr;
var Bb = { usingClientEntryPoint: !1, Events: [za, qr, Rs, Dv, Mv, Rp] }, Gi = { findFiberByHostInstance: cr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, zb = { bundleType: Gi.bundleType, version: Gi.version, rendererPackageName: Gi.rendererPackageName, rendererConfig: Gi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _n.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Hv(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Gi.findFiberByHostInstance || Lb, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ho = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ho.isDisabled && ho.supportsFiber) try {
    Ns = ho.inject(zb), on = ho;
  } catch {
  }
}
St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bb;
St.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!zp(t)) throw Error(I(200));
  return Mb(e, t, null, n);
};
St.createRoot = function(e, t) {
  if (!zp(e)) throw Error(I(299));
  var n = !1, r = "", i = yx;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Lp(e, 1, !1, null, null, n, !1, r, i), e[En] = t.current, xa(e.nodeType === 8 ? e.parentNode : e), new Bp(t);
};
St.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(I(188)) : (e = Object.keys(e).join(","), Error(I(268, e)));
  return e = Hv(t), e = e === null ? null : e.stateNode, e;
};
St.flushSync = function(e) {
  return Cr(e);
};
St.hydrate = function(e, t, n) {
  if (!Vs(t)) throw Error(I(200));
  return $s(null, e, t, !0, n);
};
St.hydrateRoot = function(e, t, n) {
  if (!zp(e)) throw Error(I(405));
  var r = n != null && n.hydratedSources || null, i = !1, a = "", o = yx;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = xx(t, null, e, 1, n ?? null, i, !1, a, o), e[En] = t.current, xa(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new Hs(t);
};
St.render = function(e, t, n) {
  if (!Vs(t)) throw Error(I(200));
  return $s(null, e, t, !1, n);
};
St.unmountComponentAtNode = function(e) {
  if (!Vs(e)) throw Error(I(40));
  return e._reactRootContainer ? (Cr(function() {
    $s(null, null, e, !1, function() {
      e._reactRootContainer = null, e[En] = null;
    });
  }), !0) : !1;
};
St.unstable_batchedUpdates = Rp;
St.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Vs(n)) throw Error(I(200));
  if (e == null || e._reactInternals === void 0) throw Error(I(38));
  return $s(e, t, n, !1, r);
};
St.version = "18.3.1-next-f1338f8080-20240426";
function wx() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wx);
    } catch (e) {
      console.error(e);
    }
}
wx(), wv.exports = St;
var Ex = wv.exports;
const fr = /* @__PURE__ */ Ii(Ex);
var bx, Sm = Ex;
bx = Sm.createRoot, Sm.hydrateRoot;
var hc = function(e, t) {
  return hc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, hc(e, t);
};
function Lt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  hc(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var j = function() {
  return j = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, j.apply(this, arguments);
};
function cn(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function At(e, t, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
    function s(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? a(c.value) : i(c.value).then(s, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function Oi(e, t) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(u) {
    return function(c) {
      return l([u, c]);
    };
  }
  function l(u) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, u[0] && (n = 0)), n; ) try {
      if (r = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done) return a;
      switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
        case 0:
        case 1:
          a = u;
          break;
        case 4:
          return n.label++, { value: u[1], done: !1 };
        case 5:
          n.label++, i = u[1], u = [0];
          continue;
        case 7:
          u = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            n = 0;
            continue;
          }
          if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
            n.label = u[1];
            break;
          }
          if (u[0] === 6 && n.label < a[1]) {
            n.label = a[1], a = u;
            break;
          }
          if (a && n.label < a[2]) {
            n.label = a[2], n.ops.push(u);
            break;
          }
          a[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      u = t.call(e, n);
    } catch (c) {
      u = [6, c], i = 0;
    } finally {
      r = a = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function _m(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), i, a = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; ) a.push(i.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function Hb() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
  for (var r = Array(e), i = 0, t = 0; t < n; t++)
    for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++)
      r[i] = a[o];
  return r;
}
function Le(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function rt(e, t) {
  var n = t && t.cache ? t.cache : qb, r = t && t.serializer ? t.serializer : Wb, i = t && t.strategy ? t.strategy : Ub;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function Vb(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function $b(e, t, n, r) {
  var i = Vb(r) ? r : n(r), a = t.get(i);
  return typeof a > "u" && (a = e.call(this, r), t.set(i, a)), a;
}
function kx(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
  return typeof a > "u" && (a = e.apply(this, r), t.set(i, a)), a;
}
function Cx(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function Ub(e, t) {
  var n = e.length === 1 ? $b : kx;
  return Cx(e, this, n, t.cache.create(), t.serializer);
}
function Gb(e, t) {
  return Cx(e, this, kx, t.cache.create(), t.serializer);
}
var Wb = function() {
  return JSON.stringify(arguments);
};
function Hp() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
Hp.prototype.get = function(e) {
  return this.cache[e];
};
Hp.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var qb = {
  create: function() {
    return new Hp();
  }
}, it = {
  variadic: Gb
};
function Sx(e, t, n) {
  if (n === void 0 && (n = Error), !e)
    throw new n(t);
}
rt(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.NumberFormat).bind.apply(e, Le([void 0], t, !1)))();
}, {
  strategy: it.variadic
});
rt(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.DateTimeFormat).bind.apply(e, Le([void 0], t, !1)))();
}, {
  strategy: it.variadic
});
rt(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.PluralRules).bind.apply(e, Le([void 0], t, !1)))();
}, {
  strategy: it.variadic
});
rt(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.Locale).bind.apply(e, Le([void 0], t, !1)))();
}, {
  strategy: it.variadic
});
rt(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.ListFormat).bind.apply(e, Le([void 0], t, !1)))();
}, {
  strategy: it.variadic
});
var re;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(re || (re = {}));
var xe;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(xe || (xe = {}));
var Ei;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(Ei || (Ei = {}));
function Am(e) {
  return e.type === xe.literal;
}
function Kb(e) {
  return e.type === xe.argument;
}
function _x(e) {
  return e.type === xe.number;
}
function Ax(e) {
  return e.type === xe.date;
}
function Tx(e) {
  return e.type === xe.time;
}
function Nx(e) {
  return e.type === xe.select;
}
function Ix(e) {
  return e.type === xe.plural;
}
function Qb(e) {
  return e.type === xe.pound;
}
function Px(e) {
  return e.type === xe.tag;
}
function Fx(e) {
  return !!(e && typeof e == "object" && e.type === Ei.number);
}
function vc(e) {
  return !!(e && typeof e == "object" && e.type === Ei.dateTime);
}
var Rx = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Xb = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Yb(e) {
  var t = {};
  return e.replace(Xb, function(n) {
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
var Zb = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Jb(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(Zb).filter(function(d) {
    return d.length > 0;
  }), n = [], r = 0, i = t; r < i.length; r++) {
    var a = i[r], o = a.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var s = o[0], l = o.slice(1), u = 0, c = l; u < c.length; u++) {
      var f = c[u];
      if (f.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: s, options: l });
  }
  return n;
}
function ek(e) {
  return e.replace(/^(.*?)-/, "");
}
var Tm = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Ox = /^(@+)?(\+|#+)?[rs]?$/g, tk = /(\*)(0+)|(#+)(0+)|(0+)/g, Dx = /^(0+)$/;
function Nm(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Ox, function(n, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function Mx(e) {
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
function nk(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Dx.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Im(e) {
  var t = {}, n = Mx(e);
  return n || t;
}
function rk(e) {
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
        t.style = "unit", t.unit = ek(i.options[0]);
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
        t = j(j(j({}, t), { notation: "scientific" }), i.options.reduce(function(l, u) {
          return j(j({}, l), Im(u));
        }, {}));
        continue;
      case "engineering":
        t = j(j(j({}, t), { notation: "engineering" }), i.options.reduce(function(l, u) {
          return j(j({}, l), Im(u));
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
        i.options[0].replace(tk, function(l, u, c, f, d, v) {
          if (u)
            t.minimumIntegerDigits = c.length;
          else {
            if (f && d)
              throw new Error("We currently do not support maximum integer digits");
            if (v)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Dx.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Tm.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Tm, function(l, u, c, f, d, v) {
        return c === "*" ? t.minimumFractionDigits = u.length : f && f[0] === "#" ? t.maximumFractionDigits = f.length : d && v ? (t.minimumFractionDigits = d.length, t.maximumFractionDigits = d.length + v.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
      });
      var a = i.options[0];
      a === "w" ? t = j(j({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = j(j({}, t), Nm(a)));
      continue;
    }
    if (Ox.test(i.stem)) {
      t = j(j({}, t), Nm(i.stem));
      continue;
    }
    var o = Mx(i.stem);
    o && (t = j(j({}, t), o));
    var s = nk(i.stem);
    s && (t = j(j({}, t), s));
  }
  return t;
}
var vo = {
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
function ik(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        a++, r++;
      var o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), l = "a", u = ak(t);
      for ((u == "H" || u == "k") && (s = 0); s-- > 0; )
        n += l;
      for (; o-- > 0; )
        n = u + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function ak(e) {
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
  var i = vo[r || ""] || vo[n || ""] || vo["".concat(n, "-001")] || vo["001"];
  return i[0];
}
var Jl, ok = new RegExp("^".concat(Rx.source, "*")), sk = new RegExp("".concat(Rx.source, "*$"));
function ie(e, t) {
  return { start: e, end: t };
}
var lk = !!String.prototype.startsWith && "_a".startsWith("a", 1), uk = !!String.fromCodePoint, ck = !!Object.fromEntries, pk = !!String.prototype.codePointAt, dk = !!String.prototype.trimStart, fk = !!String.prototype.trimEnd, mk = !!Number.isSafeInteger, hk = mk ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, gc = !0;
try {
  var vk = jx("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  gc = ((Jl = vk.exec("a")) === null || Jl === void 0 ? void 0 : Jl[0]) === "a";
} catch {
  gc = !1;
}
var Pm = lk ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), xc = uk ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    for (var r = "", i = t.length, a = 0, o; i > a; ) {
      if (o = t[a++], o > 1114111)
        throw RangeError(o + " is not a valid code point");
      r += o < 65536 ? String.fromCharCode(o) : String.fromCharCode(((o -= 65536) >> 10) + 55296, o % 1024 + 56320);
    }
    return r;
  }
), Fm = (
  // native
  ck ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var a = i[r], o = a[0], s = a[1];
        n[o] = s;
      }
      return n;
    }
  )
), Lx = pk ? (
  // Native
  function(t, n) {
    return t.codePointAt(n);
  }
) : (
  // IE 11
  function(t, n) {
    var r = t.length;
    if (!(n < 0 || n >= r)) {
      var i = t.charCodeAt(n), a;
      return i < 55296 || i > 56319 || n + 1 === r || (a = t.charCodeAt(n + 1)) < 56320 || a > 57343 ? i : (i - 55296 << 10) + (a - 56320) + 65536;
    }
  }
), gk = dk ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(ok, "");
  }
), xk = fk ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(sk, "");
  }
);
function jx(e, t) {
  return new RegExp(e, t);
}
var yc;
if (gc) {
  var Rm = jx("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  yc = function(t, n) {
    var r;
    Rm.lastIndex = n;
    var i = Rm.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  yc = function(t, n) {
    for (var r = []; ; ) {
      var i = Lx(t, n);
      if (i === void 0 || Bx(i) || bk(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return xc.apply(void 0, r);
  };
var yk = (
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
        var a = this.char();
        if (a === 123) {
          var o = this.parseArgument(t, r);
          if (o.err)
            return o;
          i.push(o.val);
        } else {
          if (a === 125 && t > 0)
            break;
          if (a === 35 && (n === "plural" || n === "selectordinal")) {
            var s = this.clonePosition();
            this.bump(), i.push({
              type: xe.pound,
              location: ie(s, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(re.UNMATCHED_CLOSING_TAG, ie(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && wc(this.peek() || 0)) {
            var o = this.parseTag(t, n);
            if (o.err)
              return o;
            i.push(o.val);
          } else {
            var o = this.parseLiteral(t, n);
            if (o.err)
              return o;
            i.push(o.val);
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
            type: xe.literal,
            value: "<".concat(i, "/>"),
            location: ie(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(t + 1, n, !0);
        if (a.err)
          return a;
        var o = a.val, s = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !wc(this.char()))
            return this.error(re.INVALID_TAG, ie(s, this.clonePosition()));
          var l = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(re.UNMATCHED_CLOSING_TAG, ie(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: xe.tag,
              value: i,
              children: o,
              location: ie(r, this.clonePosition())
            },
            err: null
          } : this.error(re.INVALID_TAG, ie(s, this.clonePosition())));
        } else
          return this.error(re.UNCLOSED_TAG, ie(r, this.clonePosition()));
      } else
        return this.error(re.INVALID_TAG, ie(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && Ek(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var a = this.tryParseQuote(n);
        if (a) {
          i += a;
          continue;
        }
        var o = this.tryParseUnquoted(t, n);
        if (o) {
          i += o;
          continue;
        }
        var s = this.tryParseLeftAngleBracket();
        if (s) {
          i += s;
          continue;
        }
        break;
      }
      var l = ie(r, this.clonePosition());
      return {
        val: { type: xe.literal, value: i, location: l },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !wk(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return xc.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), xc(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(re.EXPECT_ARGUMENT_CLOSING_BRACE, ie(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(re.EMPTY_ARGUMENT, ie(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(re.MALFORMED_ARGUMENT, ie(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(re.EXPECT_ARGUMENT_CLOSING_BRACE, ie(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: xe.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: ie(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(re.EXPECT_ARGUMENT_CLOSING_BRACE, ie(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(re.MALFORMED_ARGUMENT, ie(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = yc(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = ie(t, a);
      return { value: r, location: o };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var a, o = this.clonePosition(), s = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (s) {
        case "":
          return this.error(re.EXPECT_ARGUMENT_TYPE, ie(o, l));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var c = this.clonePosition(), f = this.parseSimpleArgStyleIfPossible();
            if (f.err)
              return f;
            var d = xk(f.val);
            if (d.length === 0)
              return this.error(re.EXPECT_ARGUMENT_STYLE, ie(this.clonePosition(), this.clonePosition()));
            var v = ie(c, this.clonePosition());
            u = { style: d, styleLocation: v };
          }
          var E = this.tryParseArgumentClose(i);
          if (E.err)
            return E;
          var x = ie(i, this.clonePosition());
          if (u && Pm(u == null ? void 0 : u.style, "::", 0)) {
            var b = gk(u.style.slice(2));
            if (s === "number") {
              var f = this.parseNumberSkeletonFromString(b, u.styleLocation);
              return f.err ? f : {
                val: { type: xe.number, value: r, location: x, style: f.val },
                err: null
              };
            } else {
              if (b.length === 0)
                return this.error(re.EXPECT_DATE_TIME_SKELETON, x);
              var g = b;
              this.locale && (g = ik(b, this.locale));
              var d = {
                type: Ei.dateTime,
                pattern: g,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Yb(g) : {}
              }, h = s === "date" ? xe.date : xe.time;
              return {
                val: { type: h, value: r, location: x, style: d },
                err: null
              };
            }
          }
          return {
            val: {
              type: s === "number" ? xe.number : s === "date" ? xe.date : xe.time,
              value: r,
              location: x,
              style: (a = u == null ? void 0 : u.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var y = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(re.EXPECT_SELECT_ARGUMENT_OPTIONS, ie(y, j({}, y)));
          this.bumpSpace();
          var k = this.parseIdentifierIfPossible(), S = 0;
          if (s !== "select" && k.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(re.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ie(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var f = this.tryParseDecimalInteger(re.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, re.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (f.err)
              return f;
            this.bumpSpace(), k = this.parseIdentifierIfPossible(), S = f.val;
          }
          var _ = this.tryParsePluralOrSelectOptions(t, s, n, k);
          if (_.err)
            return _;
          var E = this.tryParseArgumentClose(i);
          if (E.err)
            return E;
          var A = ie(i, this.clonePosition());
          return s === "select" ? {
            val: {
              type: xe.select,
              value: r,
              options: Fm(_.val),
              location: A
            },
            err: null
          } : {
            val: {
              type: xe.plural,
              value: r,
              options: Fm(_.val),
              offset: S,
              pluralType: s === "plural" ? "cardinal" : "ordinal",
              location: A
            },
            err: null
          };
        }
        default:
          return this.error(re.INVALID_ARGUMENT_TYPE, ie(o, l));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(re.EXPECT_ARGUMENT_CLOSING_BRACE, ie(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(re.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, ie(i, this.clonePosition()));
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
        r = Jb(t);
      } catch {
        return this.error(re.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Ei.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? rk(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var a, o = !1, s = [], l = /* @__PURE__ */ new Set(), u = i.value, c = i.location; ; ) {
        if (u.length === 0) {
          var f = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var d = this.tryParseDecimalInteger(re.EXPECT_PLURAL_ARGUMENT_SELECTOR, re.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (d.err)
              return d;
            c = ie(f, this.clonePosition()), u = this.message.slice(f.offset, this.offset());
          } else
            break;
        }
        if (l.has(u))
          return this.error(n === "select" ? re.DUPLICATE_SELECT_ARGUMENT_SELECTOR : re.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        u === "other" && (o = !0), this.bumpSpace();
        var v = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? re.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : re.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, ie(this.clonePosition(), this.clonePosition()));
        var E = this.parseMessage(t + 1, n, r);
        if (E.err)
          return E;
        var x = this.tryParseArgumentClose(v);
        if (x.err)
          return x;
        s.push([
          u,
          {
            value: E.val,
            location: ie(v, this.clonePosition())
          }
        ]), l.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, c = a.location;
      }
      return s.length === 0 ? this.error(n === "select" ? re.EXPECT_SELECT_ARGUMENT_SELECTOR : re.EXPECT_PLURAL_ARGUMENT_SELECTOR, ie(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(re.MISSING_OTHER_CLAUSE, ie(this.clonePosition(), this.clonePosition())) : { val: s, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var a = !1, o = 0; !this.isEOF(); ) {
        var s = this.char();
        if (s >= 48 && s <= 57)
          a = !0, o = o * 10 + (s - 48), this.bump();
        else
          break;
      }
      var l = ie(i, this.clonePosition());
      return a ? (o *= r, hk(o) ? { val: o, err: null } : this.error(n, l)) : this.error(t, l);
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
      var n = Lx(this.message, t);
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
      if (Pm(this.message, t, this.offset())) {
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
      for (; !this.isEOF() && Bx(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function wc(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function wk(e) {
  return wc(e) || e === 47;
}
function Ek(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Bx(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function bk(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Ec(e) {
  e.forEach(function(t) {
    if (delete t.location, Nx(t) || Ix(t))
      for (var n in t.options)
        delete t.options[n].location, Ec(t.options[n].value);
    else _x(t) && Fx(t.style) || (Ax(t) || Tx(t)) && vc(t.style) ? delete t.style.location : Px(t) && Ec(t.children);
  });
}
function kk(e, t) {
  t === void 0 && (t = {}), t = j({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new yk(e, t).parse();
  if (n.err) {
    var r = SyntaxError(re[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || Ec(n.val), n.val;
}
var pn;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(pn || (pn = {}));
var tr = (
  /** @class */
  function(e) {
    Lt(t, e);
    function t(n, r, i) {
      var a = e.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Om = (
  /** @class */
  function(e) {
    Lt(t, e);
    function t(n, r, i, a) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), pn.INVALID_VALUE, a) || this;
    }
    return t;
  }(tr)
), Ck = (
  /** @class */
  function(e) {
    Lt(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), pn.INVALID_VALUE, i) || this;
    }
    return t;
  }(tr)
), Sk = (
  /** @class */
  function(e) {
    Lt(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), pn.MISSING_VALUE, r) || this;
    }
    return t;
  }(tr)
), et;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(et || (et = {}));
function _k(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== et.literal || n.type !== et.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function zx(e) {
  return typeof e == "function";
}
function Bo(e, t, n, r, i, a, o) {
  if (e.length === 1 && Am(e[0]))
    return [
      {
        type: et.literal,
        value: e[0].value
      }
    ];
  for (var s = [], l = 0, u = e; l < u.length; l++) {
    var c = u[l];
    if (Am(c)) {
      s.push({
        type: et.literal,
        value: c.value
      });
      continue;
    }
    if (Qb(c)) {
      typeof a == "number" && s.push({
        type: et.literal,
        value: n.getNumberFormat(t).format(a)
      });
      continue;
    }
    var f = c.value;
    if (!(i && f in i))
      throw new Sk(f, o);
    var d = i[f];
    if (Kb(c)) {
      (!d || typeof d == "string" || typeof d == "number") && (d = typeof d == "string" || typeof d == "number" ? String(d) : ""), s.push({
        type: typeof d == "string" ? et.literal : et.object,
        value: d
      });
      continue;
    }
    if (Ax(c)) {
      var v = typeof c.style == "string" ? r.date[c.style] : vc(c.style) ? c.style.parsedOptions : void 0;
      s.push({
        type: et.literal,
        value: n.getDateTimeFormat(t, v).format(d)
      });
      continue;
    }
    if (Tx(c)) {
      var v = typeof c.style == "string" ? r.time[c.style] : vc(c.style) ? c.style.parsedOptions : r.time.medium;
      s.push({
        type: et.literal,
        value: n.getDateTimeFormat(t, v).format(d)
      });
      continue;
    }
    if (_x(c)) {
      var v = typeof c.style == "string" ? r.number[c.style] : Fx(c.style) ? c.style.parsedOptions : void 0;
      v && v.scale && (d = d * (v.scale || 1)), s.push({
        type: et.literal,
        value: n.getNumberFormat(t, v).format(d)
      });
      continue;
    }
    if (Px(c)) {
      var E = c.children, x = c.value, b = i[x];
      if (!zx(b))
        throw new Ck(x, "function", o);
      var g = Bo(E, t, n, r, i, a), h = b(g.map(function(S) {
        return S.value;
      }));
      Array.isArray(h) || (h = [h]), s.push.apply(s, h.map(function(S) {
        return {
          type: typeof S == "string" ? et.literal : et.object,
          value: S
        };
      }));
    }
    if (Nx(c)) {
      var y = c.options[d] || c.options.other;
      if (!y)
        throw new Om(c.value, d, Object.keys(c.options), o);
      s.push.apply(s, Bo(y.value, t, n, r, i));
      continue;
    }
    if (Ix(c)) {
      var y = c.options["=".concat(d)];
      if (!y) {
        if (!Intl.PluralRules)
          throw new tr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, pn.MISSING_INTL_API, o);
        var k = n.getPluralRules(t, { type: c.pluralType }).select(d - (c.offset || 0));
        y = c.options[k] || c.options.other;
      }
      if (!y)
        throw new Om(c.value, d, Object.keys(c.options), o);
      s.push.apply(s, Bo(y.value, t, n, r, i, d - (c.offset || 0)));
      continue;
    }
  }
  return _k(s);
}
function Ak(e, t) {
  return t ? j(j(j({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = j(j({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function Tk(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = Ak(e[r], t[r]), n;
  }, j({}, e)) : e;
}
function eu(e) {
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
function Nk(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: rt(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, Le([void 0], n, !1)))();
    }, {
      cache: eu(e.number),
      strategy: it.variadic
    }),
    getDateTimeFormat: rt(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Le([void 0], n, !1)))();
    }, {
      cache: eu(e.dateTime),
      strategy: it.variadic
    }),
    getPluralRules: rt(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, Le([void 0], n, !1)))();
    }, {
      cache: eu(e.pluralRules),
      strategy: it.variadic
    })
  };
}
var Hx = (
  /** @class */
  function() {
    function e(t, n, r, i) {
      n === void 0 && (n = e.defaultLocale);
      var a = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(l) {
        var u = a.formatToParts(l);
        if (u.length === 1)
          return u[0].value;
        var c = u.reduce(function(f, d) {
          return !f.length || d.type !== et.literal || typeof f[f.length - 1] != "string" ? f.push(d.value) : f[f.length - 1] += d.value, f;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(l) {
        return Bo(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
      }, this.resolvedOptions = function() {
        var l;
        return {
          locale: ((l = a.resolvedLocale) === null || l === void 0 ? void 0 : l.toString()) || Intl.NumberFormat.supportedLocalesOf(a.locales)[0]
        };
      }, this.getAst = function() {
        return a.ast;
      }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var o = i || {};
        o.formatters;
        var s = cn(o, ["formatters"]);
        this.ast = e.__parse(t, j(j({}, s), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Tk(e.formats, r), this.formatters = i && i.formatters || Nk(this.formatterCache);
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
    }, e.__parse = kk, e.formats = {
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
), Sr;
(function(e) {
  e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(Sr || (Sr = {}));
var Va = (
  /** @class */
  function(e) {
    Lt(t, e);
    function t(n, r, i) {
      var a = this, o = i ? i instanceof Error ? i : new Error(String(i)) : void 0;
      return a = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, `
`).concat(o ? `
`.concat(o.message, `
`).concat(o.stack) : "")) || this, a.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(a, t), a;
    }
    return t;
  }(Error)
), Ik = (
  /** @class */
  function(e) {
    Lt(t, e);
    function t(n, r) {
      return e.call(this, Sr.UNSUPPORTED_FORMATTER, n, r) || this;
    }
    return t;
  }(Va)
), Pk = (
  /** @class */
  function(e) {
    Lt(t, e);
    function t(n, r) {
      return e.call(this, Sr.INVALID_CONFIG, n, r) || this;
    }
    return t;
  }(Va)
), Dm = (
  /** @class */
  function(e) {
    Lt(t, e);
    function t(n, r) {
      return e.call(this, Sr.MISSING_DATA, n, r) || this;
    }
    return t;
  }(Va)
), jt = (
  /** @class */
  function(e) {
    Lt(t, e);
    function t(n, r, i) {
      var a = e.call(this, Sr.FORMAT_ERROR, "".concat(n, `
Locale: `).concat(r, `
`), i) || this;
      return a.locale = r, a;
    }
    return t;
  }(Va)
), tu = (
  /** @class */
  function(e) {
    Lt(t, e);
    function t(n, r, i, a) {
      var o = e.call(this, "".concat(n, `
MessageID: `).concat(i == null ? void 0 : i.id, `
Default Message: `).concat(i == null ? void 0 : i.defaultMessage, `
Description: `).concat(i == null ? void 0 : i.description, `
`), r, a) || this;
      return o.descriptor = i, o.locale = r, o;
    }
    return t;
  }(jt)
), Fk = (
  /** @class */
  function(e) {
    Lt(t, e);
    function t(n, r) {
      var i = e.call(this, Sr.MISSING_TRANSLATION, 'Missing message: "'.concat(n.id, '" for locale "').concat(r, '", using ').concat(n.defaultMessage ? "default message (".concat(typeof n.defaultMessage == "string" ? n.defaultMessage : n.defaultMessage.map(function(a) {
        var o;
        return (o = a.value) !== null && o !== void 0 ? o : JSON.stringify(a);
      }).join(), ")") : "id", " as fallback.")) || this;
      return i.descriptor = n, i;
    }
    return t;
  }(Va)
);
function Ir(e, t, n) {
  return n === void 0 && (n = {}), t.reduce(function(r, i) {
    return i in e ? r[i] = e[i] : i in n && (r[i] = n[i]), r;
  }, {});
}
var Rk = function(e) {
}, Ok = function(e) {
}, Vx = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: Rk,
  onWarn: Ok
};
function $x() {
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
function ir(e) {
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
function Dk(e) {
  e === void 0 && (e = $x());
  var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, i = rt(function() {
    for (var s, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((s = Intl.DateTimeFormat).bind.apply(s, Le([void 0], l, !1)))();
  }, {
    cache: ir(e.dateTime),
    strategy: it.variadic
  }), a = rt(function() {
    for (var s, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((s = Intl.NumberFormat).bind.apply(s, Le([void 0], l, !1)))();
  }, {
    cache: ir(e.number),
    strategy: it.variadic
  }), o = rt(function() {
    for (var s, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((s = Intl.PluralRules).bind.apply(s, Le([void 0], l, !1)))();
  }, {
    cache: ir(e.pluralRules),
    strategy: it.variadic
  });
  return {
    getDateTimeFormat: i,
    getNumberFormat: a,
    getMessageFormat: rt(function(s, l, u, c) {
      return new Hx(s, l, u, j({ formatters: {
        getNumberFormat: a,
        getDateTimeFormat: i,
        getPluralRules: o
      } }, c || {}));
    }, {
      cache: ir(e.message),
      strategy: it.variadic
    }),
    getRelativeTimeFormat: rt(function() {
      for (var s = [], l = 0; l < arguments.length; l++)
        s[l] = arguments[l];
      return new (t.bind.apply(t, Le([void 0], s, !1)))();
    }, {
      cache: ir(e.relativeTime),
      strategy: it.variadic
    }),
    getPluralRules: o,
    getListFormat: rt(function() {
      for (var s = [], l = 0; l < arguments.length; l++)
        s[l] = arguments[l];
      return new (n.bind.apply(n, Le([void 0], s, !1)))();
    }, {
      cache: ir(e.list),
      strategy: it.variadic
    }),
    getDisplayNames: rt(function() {
      for (var s = [], l = 0; l < arguments.length; l++)
        s[l] = arguments[l];
      return new (r.bind.apply(r, Le([void 0], s, !1)))();
    }, {
      cache: ir(e.displayNames),
      strategy: it.variadic
    })
  };
}
function Vp(e, t, n, r) {
  var i = e && e[t], a;
  if (i && (a = i[n]), a)
    return a;
  r(new Ik("No ".concat(t, " format named: ").concat(n)));
}
function go(e, t) {
  return Object.keys(e).reduce(function(n, r) {
    return n[r] = j({ timeZone: t }, e[r]), n;
  }, {});
}
function Mm(e, t) {
  var n = Object.keys(j(j({}, e), t));
  return n.reduce(function(r, i) {
    return r[i] = j(j({}, e[i] || {}), t[i] || {}), r;
  }, {});
}
function Lm(e, t) {
  if (!t)
    return e;
  var n = Hx.formats;
  return j(j(j({}, n), e), { date: Mm(go(n.date, t), go(e.date || {}, t)), time: Mm(go(n.time, t), go(e.time || {}, t)) });
}
var bc = function(e, t, n, r, i) {
  var a = e.locale, o = e.formats, s = e.messages, l = e.defaultLocale, u = e.defaultFormats, c = e.fallbackOnEmptyString, f = e.onError, d = e.timeZone, v = e.defaultRichTextElements;
  n === void 0 && (n = { id: "" });
  var E = n.id, x = n.defaultMessage;
  Sx(!!E, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var b = String(E), g = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    s && Object.prototype.hasOwnProperty.call(s, b) && s[b]
  );
  if (Array.isArray(g) && g.length === 1 && g[0].type === xe.literal)
    return g[0].value;
  if (!r && g && typeof g == "string" && !v)
    return g.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (r = j(j({}, v), r || {}), o = Lm(o, d), u = Lm(u, d), !g) {
    if (c === !1 && g === "")
      return g;
    if ((!x || a && a.toLowerCase() !== l.toLowerCase()) && f(new Fk(n, a)), x)
      try {
        var h = t.getMessageFormat(x, l, u, i);
        return h.format(r);
      } catch (y) {
        return f(new tu('Error formatting default message for: "'.concat(b, '", rendering default message verbatim'), a, n, y)), typeof x == "string" ? x : b;
      }
    return b;
  }
  try {
    var h = t.getMessageFormat(g, a, o, j({ formatters: t }, i || {}));
    return h.format(r);
  } catch (y) {
    f(new tu('Error formatting message: "'.concat(b, '", using ').concat(x ? "default message" : "id", " as fallback."), a, n, y));
  }
  if (x)
    try {
      var h = t.getMessageFormat(x, l, u, i);
      return h.format(r);
    } catch (y) {
      f(new tu('Error formatting the default message for: "'.concat(b, '", rendering message verbatim'), a, n, y));
    }
  return typeof g == "string" ? g : typeof x == "string" ? x : b;
}, Ux = [
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
function Us(e, t, n, r) {
  var i = e.locale, a = e.formats, o = e.onError, s = e.timeZone;
  r === void 0 && (r = {});
  var l = r.format, u = j(j({}, s && { timeZone: s }), l && Vp(a, t, l, o)), c = Ir(r, Ux, u);
  return t === "time" && !c.hour && !c.minute && !c.second && !c.timeStyle && !c.dateStyle && (c = j(j({}, c), { hour: "numeric", minute: "numeric" })), n(i, c);
}
function Mk(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = a === void 0 ? {} : a, s = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Us(e, "date", t, o).format(s);
  } catch (l) {
    e.onError(new jt("Error formatting date.", e.locale, l));
  }
  return String(s);
}
function Lk(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = a === void 0 ? {} : a, s = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Us(e, "time", t, o).format(s);
  } catch (l) {
    e.onError(new jt("Error formatting time.", e.locale, l));
  }
  return String(s);
}
function jk(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = n[2], s = o === void 0 ? {} : o, l = e.timeZone, u = e.locale, c = e.onError, f = Ir(s, Ux, l ? { timeZone: l } : {});
  try {
    return t(u, f).formatRange(i, a);
  } catch (d) {
    c(new jt("Error formatting date time range.", e.locale, d));
  }
  return String(i);
}
function Bk(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = a === void 0 ? {} : a, s = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Us(e, "date", t, o).formatToParts(s);
  } catch (l) {
    e.onError(new jt("Error formatting date.", e.locale, l));
  }
  return [];
}
function zk(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = a === void 0 ? {} : a, s = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Us(e, "time", t, o).formatToParts(s);
  } catch (l) {
    e.onError(new jt("Error formatting time.", e.locale, l));
  }
  return [];
}
var Hk = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function Vk(e, t, n, r) {
  var i = e.locale, a = e.onError, o = Intl.DisplayNames;
  o || a(new tr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, pn.MISSING_INTL_API));
  var s = Ir(r, Hk);
  try {
    return t(i, s).of(n);
  } catch (l) {
    a(new jt("Error formatting display name.", i, l));
  }
}
var $k = [
  "type",
  "style"
], jm = Date.now();
function Uk(e) {
  return "".concat(jm, "_").concat(e, "_").concat(jm);
}
function Gk(e, t, n, r) {
  r === void 0 && (r = {});
  var i = Gx(e, t, n, r).reduce(function(a, o) {
    var s = o.value;
    return typeof s != "string" ? a.push(s) : typeof a[a.length - 1] == "string" ? a[a.length - 1] += s : a.push(s), a;
  }, []);
  return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function Gx(e, t, n, r) {
  var i = e.locale, a = e.onError;
  r === void 0 && (r = {});
  var o = Intl.ListFormat;
  o || a(new tr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, pn.MISSING_INTL_API));
  var s = Ir(r, $k);
  try {
    var l = {}, u = n.map(function(c, f) {
      if (typeof c == "object") {
        var d = Uk(f);
        return l[d] = c, d;
      }
      return String(c);
    });
    return t(i, s).formatToParts(u).map(function(c) {
      return c.type === "literal" ? c : j(j({}, c), { value: l[c.value] || c.value });
    });
  } catch (c) {
    a(new jt("Error formatting list.", i, c));
  }
  return n;
}
var Wk = ["type"];
function qk(e, t, n, r) {
  var i = e.locale, a = e.onError;
  r === void 0 && (r = {}), Intl.PluralRules || a(new tr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, pn.MISSING_INTL_API));
  var o = Ir(r, Wk);
  try {
    return t(i, o).select(n);
  } catch (s) {
    a(new jt("Error formatting plural.", i, s));
  }
  return "other";
}
var Kk = ["numeric", "style"];
function Qk(e, t, n) {
  var r = e.locale, i = e.formats, a = e.onError;
  n === void 0 && (n = {});
  var o = n.format, s = !!o && Vp(i, "relative", o, a) || {}, l = Ir(n, Kk, s);
  return t(r, l);
}
function Xk(e, t, n, r, i) {
  i === void 0 && (i = {}), r || (r = "second");
  var a = Intl.RelativeTimeFormat;
  a || e.onError(new tr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, pn.MISSING_INTL_API));
  try {
    return Qk(e, t, i).format(n, r);
  } catch (o) {
    e.onError(new jt("Error formatting relative time.", e.locale, o));
  }
  return String(n);
}
var Yk = [
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
function Wx(e, t, n) {
  var r = e.locale, i = e.formats, a = e.onError;
  n === void 0 && (n = {});
  var o = n.format, s = o && Vp(i, "number", o, a) || {}, l = Ir(n, Yk, s);
  return t(r, l);
}
function Zk(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Wx(e, t, r).format(n);
  } catch (i) {
    e.onError(new jt("Error formatting number.", e.locale, i));
  }
  return String(n);
}
function Jk(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Wx(e, t, r).formatToParts(n);
  } catch (i) {
    e.onError(new jt("Error formatting number.", e.locale, i));
  }
  return [];
}
function e1(e) {
  var t = e ? e[Object.keys(e)[0]] : void 0;
  return typeof t == "string";
}
function t1(e) {
  e.onWarn && e.defaultRichTextElements && e1(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`);
}
function n1(e, t) {
  var n = Dk(t), r = j(j({}, Vx), e), i = r.locale, a = r.defaultLocale, o = r.onError;
  return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && o ? o(new Dm('Missing locale data for locale: "'.concat(i, '" in Intl.NumberFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && o && o(new Dm('Missing locale data for locale: "'.concat(i, '" in Intl.DateTimeFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (o && o(new Pk('"locale" was not configured, using "'.concat(a, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"), t1(r), j(j({}, r), {
    formatters: n,
    formatNumber: Zk.bind(null, r, n.getNumberFormat),
    formatNumberToParts: Jk.bind(null, r, n.getNumberFormat),
    formatRelativeTime: Xk.bind(null, r, n.getRelativeTimeFormat),
    formatDate: Mk.bind(null, r, n.getDateTimeFormat),
    formatDateToParts: Bk.bind(null, r, n.getDateTimeFormat),
    formatTime: Lk.bind(null, r, n.getDateTimeFormat),
    formatDateTimeRange: jk.bind(null, r, n.getDateTimeFormat),
    formatTimeToParts: zk.bind(null, r, n.getDateTimeFormat),
    formatPlural: qk.bind(null, r, n.getPluralRules),
    // @ts-expect-error TODO: will get to this later
    formatMessage: bc.bind(null, r, n),
    // @ts-expect-error TODO: will get to this later
    $t: bc.bind(null, r, n),
    formatList: Gk.bind(null, r, n.getListFormat),
    formatListToParts: Gx.bind(null, r, n.getListFormat),
    formatDisplayName: Vk.bind(null, r, n.getDisplayNames)
  });
}
function qx(e) {
  Sx(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var Kx = j(j({}, Vx), { textComponent: w.Fragment });
function r1(e) {
  return function(t) {
    return e(w.Children.toArray(t));
  };
}
function kc(e, t) {
  if (e === t)
    return !0;
  if (!e || !t)
    return !1;
  var n = Object.keys(e), r = Object.keys(t), i = n.length;
  if (r.length !== i)
    return !1;
  for (var a = 0; a < i; a++) {
    var o = n[a];
    if (e[o] !== t[o] || !Object.prototype.hasOwnProperty.call(t, o))
      return !1;
  }
  return !0;
}
var Qx = { exports: {} }, pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze = typeof Symbol == "function" && Symbol.for, $p = ze ? Symbol.for("react.element") : 60103, Up = ze ? Symbol.for("react.portal") : 60106, Gs = ze ? Symbol.for("react.fragment") : 60107, Ws = ze ? Symbol.for("react.strict_mode") : 60108, qs = ze ? Symbol.for("react.profiler") : 60114, Ks = ze ? Symbol.for("react.provider") : 60109, Qs = ze ? Symbol.for("react.context") : 60110, Gp = ze ? Symbol.for("react.async_mode") : 60111, Xs = ze ? Symbol.for("react.concurrent_mode") : 60111, Ys = ze ? Symbol.for("react.forward_ref") : 60112, Zs = ze ? Symbol.for("react.suspense") : 60113, i1 = ze ? Symbol.for("react.suspense_list") : 60120, Js = ze ? Symbol.for("react.memo") : 60115, el = ze ? Symbol.for("react.lazy") : 60116, a1 = ze ? Symbol.for("react.block") : 60121, o1 = ze ? Symbol.for("react.fundamental") : 60117, s1 = ze ? Symbol.for("react.responder") : 60118, l1 = ze ? Symbol.for("react.scope") : 60119;
function Tt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case $p:
        switch (e = e.type, e) {
          case Gp:
          case Xs:
          case Gs:
          case qs:
          case Ws:
          case Zs:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Qs:
              case Ys:
              case el:
              case Js:
              case Ks:
                return e;
              default:
                return t;
            }
        }
      case Up:
        return t;
    }
  }
}
function Xx(e) {
  return Tt(e) === Xs;
}
pe.AsyncMode = Gp;
pe.ConcurrentMode = Xs;
pe.ContextConsumer = Qs;
pe.ContextProvider = Ks;
pe.Element = $p;
pe.ForwardRef = Ys;
pe.Fragment = Gs;
pe.Lazy = el;
pe.Memo = Js;
pe.Portal = Up;
pe.Profiler = qs;
pe.StrictMode = Ws;
pe.Suspense = Zs;
pe.isAsyncMode = function(e) {
  return Xx(e) || Tt(e) === Gp;
};
pe.isConcurrentMode = Xx;
pe.isContextConsumer = function(e) {
  return Tt(e) === Qs;
};
pe.isContextProvider = function(e) {
  return Tt(e) === Ks;
};
pe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === $p;
};
pe.isForwardRef = function(e) {
  return Tt(e) === Ys;
};
pe.isFragment = function(e) {
  return Tt(e) === Gs;
};
pe.isLazy = function(e) {
  return Tt(e) === el;
};
pe.isMemo = function(e) {
  return Tt(e) === Js;
};
pe.isPortal = function(e) {
  return Tt(e) === Up;
};
pe.isProfiler = function(e) {
  return Tt(e) === qs;
};
pe.isStrictMode = function(e) {
  return Tt(e) === Ws;
};
pe.isSuspense = function(e) {
  return Tt(e) === Zs;
};
pe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Gs || e === Xs || e === qs || e === Ws || e === Zs || e === i1 || typeof e == "object" && e !== null && (e.$$typeof === el || e.$$typeof === Js || e.$$typeof === Ks || e.$$typeof === Qs || e.$$typeof === Ys || e.$$typeof === o1 || e.$$typeof === s1 || e.$$typeof === l1 || e.$$typeof === a1);
};
pe.typeOf = Tt;
Qx.exports = pe;
var u1 = Qx.exports, Yx = u1, c1 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, p1 = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Zx = {};
Zx[Yx.ForwardRef] = c1;
Zx[Yx.Memo] = p1;
var Wp = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = w.createContext(null)) : w.createContext(null);
Wp.Consumer;
var d1 = Wp.Provider, f1 = d1, m1 = Wp;
function Pr() {
  var e = w.useContext(m1);
  return qx(e), e;
}
var Cc;
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(Cc || (Cc = {}));
var Sc;
(function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(Sc || (Sc = {}));
function Jx(e) {
  var t = function(n) {
    var r = Pr(), i = n.value, a = n.children, o = cn(n, ["value", "children"]), s = typeof i == "string" ? new Date(i || 0) : i, l = e === "formatDate" ? r.formatDateToParts(s, o) : r.formatTimeToParts(s, o);
    return a(l);
  };
  return t.displayName = Sc[e], t;
}
function $a(e) {
  var t = function(n) {
    var r = Pr(), i = n.value, a = n.children, o = cn(
      n,
      ["value", "children"]
    ), s = r[e](i, o);
    if (typeof a == "function")
      return a(s);
    var l = r.textComponent || w.Fragment;
    return w.createElement(l, null, s);
  };
  return t.displayName = Cc[e], t;
}
function e0(e) {
  return e && Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    return t[n] = zx(r) ? r1(r) : r, t;
  }, {});
}
var Bm = function(e, t, n, r) {
  for (var i = [], a = 4; a < arguments.length; a++)
    i[a - 4] = arguments[a];
  var o = e0(r), s = bc.apply(void 0, Le([
    e,
    t,
    n,
    o
  ], i, !1));
  return Array.isArray(s) ? w.Children.toArray(s) : s;
}, zm = function(e, t) {
  var n = e.defaultRichTextElements, r = cn(e, ["defaultRichTextElements"]), i = e0(n), a = n1(j(j(j({}, Kx), r), { defaultRichTextElements: i }), t), o = {
    locale: a.locale,
    timeZone: a.timeZone,
    fallbackOnEmptyString: a.fallbackOnEmptyString,
    formats: a.formats,
    defaultLocale: a.defaultLocale,
    defaultFormats: a.defaultFormats,
    messages: a.messages,
    onError: a.onError,
    defaultRichTextElements: i
  };
  return j(j({}, a), {
    formatMessage: Bm.bind(
      null,
      o,
      // @ts-expect-error fix this
      a.formatters
    ),
    // @ts-expect-error fix this
    $t: Bm.bind(null, o, a.formatters)
  });
};
function nu(e) {
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
var h1 = (
  /** @class */
  function(e) {
    Lt(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n.cache = $x(), n.state = {
        cache: n.cache,
        intl: zm(nu(n.props), n.cache),
        prevConfig: nu(n.props)
      }, n;
    }
    return t.getDerivedStateFromProps = function(n, r) {
      var i = r.prevConfig, a = r.cache, o = nu(n);
      return kc(i, o) ? null : {
        intl: zm(o, a),
        prevConfig: o
      };
    }, t.prototype.render = function() {
      return qx(this.state.intl), w.createElement(f1, { value: this.state.intl }, this.props.children);
    }, t.displayName = "IntlProvider", t.defaultProps = Kx, t;
  }(w.PureComponent)
);
function v1(e, t) {
  var n = e.values, r = cn(e, ["values"]), i = t.values, a = cn(t, ["values"]);
  return kc(i, n) && kc(r, a);
}
function t0(e) {
  var t = Pr(), n = t.formatMessage, r = t.textComponent, i = r === void 0 ? w.Fragment : r, a = e.id, o = e.description, s = e.defaultMessage, l = e.values, u = e.children, c = e.tagName, f = c === void 0 ? i : c, d = e.ignoreTag, v = { id: a, description: o, defaultMessage: s }, E = n(v, l, {
    ignoreTag: d
  });
  return typeof u == "function" ? u(Array.isArray(E) ? E : [E]) : f ? w.createElement(f, null, w.Children.toArray(E)) : w.createElement(w.Fragment, null, E);
}
t0.displayName = "FormattedMessage";
var Aa = w.memo(t0, v1);
Aa.displayName = "MemoizedFormattedMessage";
$a("formatDate");
$a("formatTime");
$a("formatNumber");
$a("formatList");
$a("formatDisplayName");
Jx("formatDate");
Jx("formatTime");
var n0 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var a = "", o = 0; o < arguments.length; o++) {
        var s = arguments[o];
        s && (a = i(a, r(s)));
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
      var o = "";
      for (var s in a)
        t.call(a, s) && a[s] && (o = i(o, s));
      return o;
    }
    function i(a, o) {
      return o ? a ? a + " " + o : a + o : a;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(n0);
var g1 = n0.exports;
const F = /* @__PURE__ */ Ii(g1);
function $() {
  return $ = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, $.apply(null, arguments);
}
function le(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
var qp = /* @__PURE__ */ m.createContext({});
qp.Consumer;
qp.Provider;
function Pe(e, t) {
  var n = w.useContext(qp);
  return e || n[t] || t;
}
function x1() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.filter(function(r) {
    return r != null;
  }).reduce(function(r, i) {
    if (typeof i != "function")
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    return r === null ? i : function() {
      for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++)
        s[l] = arguments[l];
      r.apply(this, s), i.apply(this, s);
    };
  }, null);
}
var y1 = ["as", "disabled", "onKeyDown"];
function Hm(e) {
  return !e || e.trim() === "#";
}
var Kp = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, a = e.onKeyDown, o = le(e, y1), s = function(c) {
    var f = o.href, d = o.onClick;
    if ((i || Hm(f)) && c.preventDefault(), i) {
      c.stopPropagation();
      return;
    }
    d && d(c);
  }, l = function(c) {
    c.key === " " && (c.preventDefault(), s(c));
  };
  return Hm(o.href) && (o.role = o.role || "button", o.href = o.href || "#"), i && (o.tabIndex = -1, o["aria-disabled"] = !0), /* @__PURE__ */ m.createElement(r, $({
    ref: t
  }, o, {
    onClick: s,
    onKeyDown: x1(l, a)
  }));
});
Kp.displayName = "SafeAnchor";
var w1 = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"], E1 = {
  variant: "primary",
  active: !1,
  disabled: !1
}, Qp = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.size, a = e.active, o = e.className, s = e.block, l = e.type, u = e.as, c = le(e, w1), f = Pe(n, "btn"), d = F(o, f, a && "active", r && f + "-" + r, s && f + "-block", i && f + "-" + i);
  if (c.href)
    return /* @__PURE__ */ m.createElement(Kp, $({}, c, {
      as: u,
      ref: t,
      className: F(d, c.disabled && "disabled")
    }));
  t && (c.ref = t), l ? c.type = l : u || (c.type = "button");
  var v = u || "button";
  return /* @__PURE__ */ m.createElement(v, $({}, c, {
    className: d
  }));
});
Qp.displayName = "Button";
Qp.defaultProps = E1;
var r0 = { exports: {} }, b1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", k1 = b1, C1 = k1;
function i0() {
}
function a0() {
}
a0.resetWarningCache = i0;
var S1 = function() {
  function e(r, i, a, o, s, l) {
    if (l !== C1) {
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
    checkPropTypes: a0,
    resetWarningCache: i0
  };
  return n.PropTypes = n, n;
};
r0.exports = S1();
var _1 = r0.exports;
const p = /* @__PURE__ */ Ii(_1);
let Vm = 0;
const Xp = (e = "id") => (Vm += 1, `${e}${Vm}`);
let ei = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function o0(e, t, n) {
  class r extends m.Component {
    constructor(a) {
      super(a), this.transformProps = this.transformProps.bind(this);
    }
    warn(a) {
    }
    transformProps(a, o) {
      if (n[o] === void 0)
        return a[o] = this.props[o], a;
      const {
        deprType: s,
        newName: l,
        expect: u,
        transform: c,
        message: f
      } = n[o];
      switch (s) {
        case ei.MOVED:
          this.warn(`${t}: The prop '${o}' has been moved to '${l}'.`), a[l] = this.props[o];
          break;
        case ei.REMOVED:
          this.warn(`${t}: The prop '${o}' has been removed. '${f}'`);
          break;
        case ei.FORMAT:
          u(this.props[o]) ? a[o] = this.props[o] : (this.warn(`${t}: The prop '${o}' expects a new format. ${f}`), a[o] = c(this.props[o], this.props));
          break;
        case ei.MOVED_AND_FORMAT: {
          const d = this.props[o];
          let v = `${t}: The prop '${o}' has been moved to '${l}'`;
          u && !u(d) && (v += " and expects a new format"), v += f ? `. ${f}` : "", this.warn(v), a[l] = c ? c(d, this.props) : d;
          break;
        }
        default:
          a[o] = this.props[o];
          break;
      }
      return a;
    }
    render() {
      const {
        children: a,
        ...o
      } = Object.keys(this.props).reduce(this.transformProps, {});
      return /* @__PURE__ */ m.createElement(e, {
        ...o
      }, this.props.children || a);
    }
  }
  return (
    // eslint-disable-next-line react/static-property-placement
    vf(r, "displayName", `withDeprecatedProps(${t})`), r
  );
}
function Yp({
  src: e,
  id: t,
  className: n,
  hidden: r,
  screenReaderText: i,
  svgAttrs: a,
  size: o,
  ...s
}) {
  if (e) {
    const l = a["aria-label"] || a["aria-labelledby"], u = {
      ...a
    };
    return l || (u["aria-label"] = void 0, u["aria-hidden"] = !0), /* @__PURE__ */ m.createElement("span", {
      className: F("pgn__icon", {
        [`pgn__icon__${o}`]: !!o
      }, n),
      id: t,
      ...s
    }, /* @__PURE__ */ m.createElement(e, {
      role: "img",
      focusable: !1,
      ...u
    }), i && /* @__PURE__ */ m.createElement("span", {
      className: "sr-only"
    }, i));
  }
  return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("span", {
    id: t || Xp("Icon"),
    className: n,
    "aria-hidden": r
  }), i && /* @__PURE__ */ m.createElement("span", {
    className: "sr-only"
  }, i));
}
Yp.propTypes = {
  /**
   * An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';`
   */
  src: p.elementType,
  /** HTML element attributes to pass through to the underlying svg element */
  svgAttrs: p.shape({
    "aria-label": p.string,
    "aria-labelledby": p.string
  }),
  /**
   * the `id` property of the Icon element, by default this value is generated
   * with the `newId` function with the `prefix` of `Icon`.
   */
  id: p.string,
  /** The size of the icon. */
  size: p.oneOf(["xs", "sm", "md", "lg"]),
  /** A class name that will define what the Icon looks like. */
  className: p.string,
  /**
   * a boolean that determines the value of `aria-hidden` attribute on the Icon span,
   * this value is `true` by default.
   */
  hidden: p.bool,
  /**
   * a string or an element that will be used on a secondary span leveraging the `sr-only` style
   * for screenreader only text, this value is `undefined` by default. This value is recommended for use unless
   * the Icon is being used in a way that is purely decorative or provides no additional context for screen
   * reader users. This field should be thought of the same way an `alt` attribute would be used for `image` tags.
   */
  screenReaderText: p.oneOfType([p.string, p.element])
};
Yp.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const kt = o0(Yp, "Icon", {
  className: {
    deprType: ei.FORMAT,
    expect: (e) => typeof e == "string",
    transform: (e) => Array.isArray(e) ? e.join(" ") : e,
    message: "It should be a string."
  }
}), je = /* @__PURE__ */ m.forwardRef(({
  children: e,
  iconAfter: t,
  iconBefore: n,
  size: r,
  ...i
}, a) => /* @__PURE__ */ m.createElement(Qp, {
  size: r,
  ...i,
  className: F(i.className),
  ref: a
}, n && /* @__PURE__ */ m.createElement(kt, {
  className: "btn-icon-before",
  size: r,
  src: n
}), e, t && /* @__PURE__ */ m.createElement(kt, {
  className: "btn-icon-after",
  size: r,
  src: t
})));
function Ta({
  as: e = "div",
  isStacked: t = !1,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ m.createElement(e, {
    ...r,
    className: F(r.className, {
      "pgn__action-row": !t,
      "pgn__action-row-stacked": t
    })
  }, n);
}
function A1() {
  return /* @__PURE__ */ m.createElement("span", {
    className: "pgn__action-row-spacer"
  });
}
Ta.Spacer = A1;
function $m(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function T1(e) {
  var t = N1(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function N1(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function s0(e, t, n) {
  var r = w.useRef(e !== void 0), i = w.useState(t), a = i[0], o = i[1], s = e !== void 0, l = r.current;
  return r.current = s, !s && l && a !== t && o(t), [s ? e : a, w.useCallback(function(u) {
    for (var c = arguments.length, f = new Array(c > 1 ? c - 1 : 0), d = 1; d < c; d++)
      f[d - 1] = arguments[d];
    n && n.apply(void 0, [u].concat(f)), o(u);
  }, [n])];
}
function I1(e, t) {
  return Object.keys(t).reduce(function(n, r) {
    var i, a = n, o = a[$m(r)], s = a[r], l = le(a, [$m(r), r].map(T1)), u = t[r], c = s0(s, o, e[u]), f = c[0], d = c[1];
    return $({}, l, (i = {}, i[r] = f, i[u] = d, i));
  }, e);
}
function _c(e, t) {
  return _c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, _c(e, t);
}
function Zp(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, _c(e, t);
}
function Jp(e) {
  return e && e.ownerDocument || document;
}
function P1(e) {
  var t = Jp(e);
  return t && t.defaultView || window;
}
function F1(e, t) {
  return P1(e).getComputedStyle(e, t);
}
var R1 = /([A-Z])/g;
function O1(e) {
  return e.replace(R1, "-$1").toLowerCase();
}
var D1 = /^ms-/;
function xo(e) {
  return O1(e).replace(D1, "-ms-");
}
var M1 = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function L1(e) {
  return !!(e && M1.test(e));
}
function l0(e, t) {
  var n = "", r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(xo(t)) || F1(e).getPropertyValue(xo(t));
  Object.keys(t).forEach(function(i) {
    var a = t[i];
    !a && a !== 0 ? e.style.removeProperty(xo(i)) : L1(i) ? r += i + "(" + a + ") " : n += xo(i) + ": " + a + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
const Um = {
  disabled: !1
}, u0 = m.createContext(null);
var j1 = function(t) {
  return t.scrollTop;
}, Zi = "unmounted", sr = "exited", Rn = "entering", lr = "entered", Ac = "exiting", An = /* @__PURE__ */ function(e) {
  Zp(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var o = i, s = o && !o.isMounting ? r.enter : r.appear, l;
    return a.appearStatus = null, r.in ? s ? (l = sr, a.appearStatus = Rn) : l = lr : r.unmountOnExit || r.mountOnEnter ? l = Zi : l = sr, a.state = {
      status: l
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var o = i.in;
    return o && a.status === Zi ? {
      status: sr
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var o = this.state.status;
      this.props.in ? o !== Rn && o !== lr && (a = Rn) : (o === Rn || o === lr) && (a = Ac);
    }
    this.updateStatus(!1, a);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, a, o, s;
    return a = o = s = i, i != null && typeof i != "number" && (a = i.exit, o = i.enter, s = i.appear !== void 0 ? i.appear : o), {
      exit: a,
      enter: o,
      appear: s
    };
  }, n.updateStatus = function(i, a) {
    if (i === void 0 && (i = !1), a !== null)
      if (this.cancelNextCallback(), a === Rn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var o = this.props.nodeRef ? this.props.nodeRef.current : fr.findDOMNode(this);
          o && j1(o);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === sr && this.setState({
      status: Zi
    });
  }, n.performEnter = function(i) {
    var a = this, o = this.props.enter, s = this.context ? this.context.isMounting : i, l = this.props.nodeRef ? [s] : [fr.findDOMNode(this), s], u = l[0], c = l[1], f = this.getTimeouts(), d = s ? f.appear : f.enter;
    if (!i && !o || Um.disabled) {
      this.safeSetState({
        status: lr
      }, function() {
        a.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, c), this.safeSetState({
      status: Rn
    }, function() {
      a.props.onEntering(u, c), a.onTransitionEnd(d, function() {
        a.safeSetState({
          status: lr
        }, function() {
          a.props.onEntered(u, c);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, a = this.props.exit, o = this.getTimeouts(), s = this.props.nodeRef ? void 0 : fr.findDOMNode(this);
    if (!a || Um.disabled) {
      this.safeSetState({
        status: sr
      }, function() {
        i.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: Ac
    }, function() {
      i.props.onExiting(s), i.onTransitionEnd(o.exit, function() {
        i.safeSetState({
          status: sr
        }, function() {
          i.props.onExited(s);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, a) {
    a = this.setNextCallback(a), this.setState(i, a);
  }, n.setNextCallback = function(i) {
    var a = this, o = !0;
    return this.nextCallback = function(s) {
      o && (o = !1, a.nextCallback = null, i(s));
    }, this.nextCallback.cancel = function() {
      o = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, a) {
    this.setNextCallback(a);
    var o = this.props.nodeRef ? this.props.nodeRef.current : fr.findDOMNode(this), s = i == null && !this.props.addEndListener;
    if (!o || s) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [o, this.nextCallback], u = l[0], c = l[1];
      this.props.addEndListener(u, c);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === Zi)
      return null;
    var a = this.props, o = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var s = le(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ m.createElement(u0.Provider, {
        value: null
      }, typeof o == "function" ? o(i, s) : m.cloneElement(m.Children.only(o), s))
    );
  }, t;
}(m.Component);
An.contextType = u0;
An.propTypes = {};
function jr() {
}
An.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: jr,
  onEntering: jr,
  onEntered: jr,
  onExit: jr,
  onExiting: jr,
  onExited: jr
};
An.UNMOUNTED = Zi;
An.EXITED = sr;
An.ENTERING = Rn;
An.ENTERED = lr;
An.EXITING = Ac;
const B1 = !!(typeof window < "u" && window.document && window.document.createElement);
var Tc = !1, Nc = !1;
try {
  var ru = {
    get passive() {
      return Tc = !0;
    },
    get once() {
      return Nc = Tc = !0;
    }
  };
  B1 && (window.addEventListener("test", ru, ru), window.removeEventListener("test", ru, !0));
} catch {
}
function z1(e, t, n, r) {
  if (r && typeof r != "boolean" && !Nc) {
    var i = r.once, a = r.capture, o = n;
    !Nc && i && (o = n.__once || function s(l) {
      this.removeEventListener(t, s, a), n.call(this, l);
    }, n.__once = o), e.addEventListener(t, o, Tc ? r : a);
  }
  e.addEventListener(t, n, r);
}
function H1(e, t, n, r) {
  var i = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
function ti(e, t, n, r) {
  return z1(e, t, n, r), function() {
    H1(e, t, n, r);
  };
}
function V1(e, t, n, r) {
  if (r === void 0 && (r = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, n, r), e.dispatchEvent(i);
  }
}
function $1(e) {
  var t = l0(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function U1(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1, i = setTimeout(function() {
    r || V1(e, "transitionend", !0);
  }, t + n), a = ti(e, "transitionend", function() {
    r = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), a();
  };
}
function G1(e, t, n, r) {
  n == null && (n = $1(e) || 0);
  var i = U1(e, n, r), a = ti(e, "transitionend", t);
  return function() {
    i(), a();
  };
}
function Gm(e, t) {
  var n = l0(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function W1(e, t) {
  var n = Gm(e, "transitionDuration"), r = Gm(e, "transitionDelay"), i = G1(e, function(a) {
    a.target === e && (i(), t(a));
  }, n + r);
}
function q1(e) {
  e.offsetHeight;
}
function K1(e) {
  const t = w.useRef(e);
  return w.useEffect(() => {
    t.current = e;
  }, [e]), t;
}
function Ic(e) {
  const t = K1(e);
  return w.useCallback(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
var Q1 = ["className", "children"], yo, X1 = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1
}, Y1 = (yo = {}, yo[Rn] = "show", yo[lr] = "show", yo), Di = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = le(e, Q1), a = w.useCallback(function(o) {
    q1(o), i.onEnter && i.onEnter(o);
  }, [i]);
  return /* @__PURE__ */ m.createElement(An, $({
    ref: t,
    addEndListener: W1
  }, i, {
    onEnter: a
  }), function(o, s) {
    return /* @__PURE__ */ m.cloneElement(r, $({}, s, {
      className: F("fade", n, r.props.className, Y1[o])
    }));
  });
});
Di.defaultProps = X1;
Di.displayName = "Fade";
var Z1 = ["label", "onClick", "className"], J1 = {
  label: p.string.isRequired,
  onClick: p.func
}, eC = {
  label: "Close"
}, tl = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.label, r = e.onClick, i = e.className, a = le(e, Z1);
  return /* @__PURE__ */ m.createElement("button", $({
    ref: t,
    type: "button",
    className: F("close", i),
    onClick: r
  }, a), /* @__PURE__ */ m.createElement("span", {
    "aria-hidden": "true"
  }, "×"), /* @__PURE__ */ m.createElement("span", {
    className: "sr-only"
  }, n));
});
tl.displayName = "CloseButton";
tl.propTypes = J1;
tl.defaultProps = eC;
const c0 = function(e) {
  return /* @__PURE__ */ m.forwardRef(function(t, n) {
    return /* @__PURE__ */ m.createElement("div", $({}, t, {
      ref: n,
      className: F(t.className, e)
    }));
  });
};
var tC = /-(.)/g;
function nC(e) {
  return e.replace(tC, function(t, n) {
    return n.toUpperCase();
  });
}
var rC = ["className", "bsPrefix", "as"], iC = function(t) {
  return t[0].toUpperCase() + nC(t).slice(1);
};
function ed(e, t) {
  var n = t === void 0 ? {} : t, r = n.displayName, i = r === void 0 ? iC(e) : r, a = n.Component, o = n.defaultProps, s = /* @__PURE__ */ m.forwardRef(function(l, u) {
    var c = l.className, f = l.bsPrefix, d = l.as, v = d === void 0 ? a || "div" : d, E = le(l, rC), x = Pe(f, e);
    return /* @__PURE__ */ m.createElement(v, $({
      ref: u,
      className: F(c, x)
    }, E));
  });
  return s.defaultProps = o, s.displayName = i, s;
}
var aC = ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"], p0 = c0("h4");
p0.displayName = "DivStyledAsH4";
var oC = ed("alert-heading", {
  Component: p0
}), sC = ed("alert-link", {
  Component: Kp
}), lC = {
  show: !0,
  transition: Di,
  closeLabel: "Close alert"
}, Fr = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = I1(e, {
    show: "onClose"
  }), r = n.bsPrefix, i = n.show, a = n.closeLabel, o = n.className, s = n.children, l = n.variant, u = n.onClose, c = n.dismissible, f = n.transition, d = le(n, aC), v = Pe(r, "alert"), E = Ic(function(g) {
    u && u(!1, g);
  }), x = f === !0 ? Di : f, b = /* @__PURE__ */ m.createElement("div", $({
    role: "alert"
  }, x ? void 0 : d, {
    ref: t,
    className: F(o, v, l && v + "-" + l, c && v + "-dismissible")
  }), c && /* @__PURE__ */ m.createElement(tl, {
    onClick: E,
    label: a
  }), s);
  return x ? /* @__PURE__ */ m.createElement(x, $({
    unmountOnExit: !0
  }, d, {
    ref: void 0,
    in: i
  }), b) : i ? b : null;
});
Fr.displayName = "Alert";
Fr.defaultProps = lC;
Fr.Link = sC;
Fr.Heading = oC;
var uC = ["bsPrefix", "variant", "pill", "className", "as"], cC = {
  pill: !1
}, td = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.pill, a = e.className, o = e.as, s = o === void 0 ? "span" : o, l = le(e, uC), u = Pe(n, "badge");
  return /* @__PURE__ */ m.createElement(s, $({
    ref: t
  }, l, {
    className: F(a, u, i && u + "-pill", r && u + "-" + r)
  }));
});
td.displayName = "Badge";
td.defaultProps = cC;
function d0() {
  const e = w.useRef(!0), t = w.useRef(() => e.current);
  return w.useEffect(() => (e.current = !0, () => {
    e.current = !1;
  }), []), t.current;
}
function pC(e) {
  const t = w.useRef(e);
  return t.current = e, t;
}
function dC(e) {
  const t = pC(e);
  w.useEffect(() => () => t.current(), []);
}
const Pc = 2 ** 31 - 1;
function f0(e, t, n) {
  const r = n - Date.now();
  e.current = r <= Pc ? setTimeout(t, r) : setTimeout(() => f0(e, t, n), Pc);
}
function fC() {
  const e = d0(), t = w.useRef();
  return dC(() => clearTimeout(t.current)), w.useMemo(() => {
    const n = () => clearTimeout(t.current);
    function r(i, a = 0) {
      e() && (n(), a <= Pc ? t.current = setTimeout(i, a) : f0(t, i, Date.now() + a));
    }
    return {
      set: r,
      clear: n,
      handleRef: t
    };
  }, []);
}
function mC(e, t) {
  var n = 0;
  return m.Children.map(e, function(r) {
    return /* @__PURE__ */ m.isValidElement(r) ? t(r, n++) : r;
  });
}
var hC = ["bsPrefix", "className", "as"], vC = ["xl", "lg", "md", "sm", "xs"], m0 = /* @__PURE__ */ m.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "div" : i, o = le(e, hC), s = Pe(n, "col"), l = [], u = [];
    return vC.forEach(function(c) {
      var f = o[c];
      delete o[c];
      var d, v, E;
      if (typeof f == "object" && f != null) {
        var x = f.span;
        d = x === void 0 ? !0 : x, v = f.offset, E = f.order;
      } else
        d = f;
      var b = c !== "xs" ? "-" + c : "";
      d && l.push(d === !0 ? "" + s + b : "" + s + b + "-" + d), E != null && u.push("order" + b + "-" + E), v != null && u.push("offset" + b + "-" + v);
    }), l.length || l.push(s), /* @__PURE__ */ m.createElement(a, $({}, o, {
      ref: t,
      className: F.apply(void 0, [r].concat(l, u))
    }));
  }
);
m0.displayName = "Col";
function Wm() {
  return w.useState(null);
}
function gC(e) {
  const t = d0();
  return [e[0], w.useCallback((n) => {
    if (t())
      return e[1](n);
  }, [t, e[1]])];
}
var vt = "top", Dt = "bottom", Mt = "right", gt = "left", nd = "auto", Ua = [vt, Dt, Mt, gt], bi = "start", Na = "end", xC = "clippingParents", h0 = "viewport", Wi = "popper", yC = "reference", qm = /* @__PURE__ */ Ua.reduce(function(e, t) {
  return e.concat([t + "-" + bi, t + "-" + Na]);
}, []), rd = /* @__PURE__ */ [].concat(Ua, [nd]).reduce(function(e, t) {
  return e.concat([t, t + "-" + bi, t + "-" + Na]);
}, []), wC = "beforeRead", EC = "read", bC = "afterRead", kC = "beforeMain", CC = "main", SC = "afterMain", _C = "beforeWrite", AC = "write", TC = "afterWrite", NC = [wC, EC, bC, kC, CC, SC, _C, AC, TC];
function ln(e) {
  return e.split("-")[0];
}
function Ct(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function _r(e) {
  var t = Ct(e).Element;
  return e instanceof t || e instanceof Element;
}
function un(e) {
  var t = Ct(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function id(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ct(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var gr = Math.max, ms = Math.min, ki = Math.round;
function Fc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function v0() {
  return !/^((?!chrome|android).)*safari/i.test(Fc());
}
function Ci(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, a = 1;
  t && un(e) && (i = e.offsetWidth > 0 && ki(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && ki(r.height) / e.offsetHeight || 1);
  var o = _r(e) ? Ct(e) : window, s = o.visualViewport, l = !v0() && n, u = (r.left + (l && s ? s.offsetLeft : 0)) / i, c = (r.top + (l && s ? s.offsetTop : 0)) / a, f = r.width / i, d = r.height / a;
  return {
    width: f,
    height: d,
    top: c,
    right: u + f,
    bottom: c + d,
    left: u,
    x: u,
    y: c
  };
}
function ad(e) {
  var t = Ci(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function g0(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && id(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Qn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Cn(e) {
  return Ct(e).getComputedStyle(e);
}
function IC(e) {
  return ["table", "td", "th"].indexOf(Qn(e)) >= 0;
}
function nr(e) {
  return ((_r(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function nl(e) {
  return Qn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (id(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    nr(e)
  );
}
function Km(e) {
  return !un(e) || // https://github.com/popperjs/popper-core/issues/837
  Cn(e).position === "fixed" ? null : e.offsetParent;
}
function PC(e) {
  var t = /firefox/i.test(Fc()), n = /Trident/i.test(Fc());
  if (n && un(e)) {
    var r = Cn(e);
    if (r.position === "fixed")
      return null;
  }
  var i = nl(e);
  for (id(i) && (i = i.host); un(i) && ["html", "body"].indexOf(Qn(i)) < 0; ) {
    var a = Cn(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Ga(e) {
  for (var t = Ct(e), n = Km(e); n && IC(n) && Cn(n).position === "static"; )
    n = Km(n);
  return n && (Qn(n) === "html" || Qn(n) === "body" && Cn(n).position === "static") ? t : n || PC(e) || t;
}
function od(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function la(e, t, n) {
  return gr(e, ms(t, n));
}
function FC(e, t, n) {
  var r = la(e, t, n);
  return r > n ? n : r;
}
function x0() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function y0(e) {
  return Object.assign({}, x0(), e);
}
function w0(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var RC = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, y0(typeof t != "number" ? t : w0(t, Ua));
};
function OC(e) {
  var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = ln(n.placement), l = od(s), u = [gt, Mt].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!a || !o)) {
    var f = RC(i.padding, n), d = ad(a), v = l === "y" ? vt : gt, E = l === "y" ? Dt : Mt, x = n.rects.reference[c] + n.rects.reference[l] - o[l] - n.rects.popper[c], b = o[l] - n.rects.reference[l], g = Ga(a), h = g ? l === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, y = x / 2 - b / 2, k = f[v], S = h - d[c] - f[E], _ = h / 2 - d[c] / 2 + y, A = la(k, _, S), T = l;
    n.modifiersData[r] = (t = {}, t[T] = A, t.centerOffset = A - _, t);
  }
}
function DC(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || g0(t.elements.popper, i) && (t.elements.arrow = i));
}
const MC = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: OC,
  effect: DC,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Si(e) {
  return e.split("-")[1];
}
var LC = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function jC(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: ki(n * i) / i || 0,
    y: ki(r * i) / i || 0
  };
}
function Qm(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, f = e.isFixed, d = o.x, v = d === void 0 ? 0 : d, E = o.y, x = E === void 0 ? 0 : E, b = typeof c == "function" ? c({
    x: v,
    y: x
  }) : {
    x: v,
    y: x
  };
  v = b.x, x = b.y;
  var g = o.hasOwnProperty("x"), h = o.hasOwnProperty("y"), y = gt, k = vt, S = window;
  if (u) {
    var _ = Ga(n), A = "clientHeight", T = "clientWidth";
    if (_ === Ct(n) && (_ = nr(n), Cn(_).position !== "static" && s === "absolute" && (A = "scrollHeight", T = "scrollWidth")), _ = _, i === vt || (i === gt || i === Mt) && a === Na) {
      k = Dt;
      var O = f && _ === S && S.visualViewport ? S.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        _[A]
      );
      x -= O - r.height, x *= l ? 1 : -1;
    }
    if (i === gt || (i === vt || i === Dt) && a === Na) {
      y = Mt;
      var P = f && _ === S && S.visualViewport ? S.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        _[T]
      );
      v -= P - r.width, v *= l ? 1 : -1;
    }
  }
  var B = Object.assign({
    position: s
  }, u && LC), H = c === !0 ? jC({
    x: v,
    y: x
  }, Ct(n)) : {
    x: v,
    y: x
  };
  if (v = H.x, x = H.y, l) {
    var U;
    return Object.assign({}, B, (U = {}, U[k] = h ? "0" : "", U[y] = g ? "0" : "", U.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + x + "px)" : "translate3d(" + v + "px, " + x + "px, 0)", U));
  }
  return Object.assign({}, B, (t = {}, t[k] = h ? x + "px" : "", t[y] = g ? v + "px" : "", t.transform = "", t));
}
function BC(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: ln(t.placement),
    variation: Si(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Qm(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Qm(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const zC = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: BC,
  data: {}
};
var wo = {
  passive: !0
};
function HC(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, l = Ct(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, wo);
  }), s && l.addEventListener("resize", n.update, wo), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, wo);
    }), s && l.removeEventListener("resize", n.update, wo);
  };
}
const VC = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: HC,
  data: {}
};
var $C = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function zo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return $C[t];
  });
}
var UC = {
  start: "end",
  end: "start"
};
function Xm(e) {
  return e.replace(/start|end/g, function(t) {
    return UC[t];
  });
}
function sd(e) {
  var t = Ct(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function ld(e) {
  return Ci(nr(e)).left + sd(e).scrollLeft;
}
function GC(e, t) {
  var n = Ct(e), r = nr(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, o = i.height;
    var u = v0();
    (u || !u && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: s + ld(e),
    y: l
  };
}
function WC(e) {
  var t, n = nr(e), r = sd(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = gr(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = gr(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -r.scrollLeft + ld(e), l = -r.scrollTop;
  return Cn(i || n).direction === "rtl" && (s += gr(n.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: o,
    x: s,
    y: l
  };
}
function ud(e) {
  var t = Cn(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function E0(e) {
  return ["html", "body", "#document"].indexOf(Qn(e)) >= 0 ? e.ownerDocument.body : un(e) && ud(e) ? e : E0(nl(e));
}
function ua(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = E0(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Ct(r), o = i ? [a].concat(a.visualViewport || [], ud(r) ? r : []) : r, s = t.concat(o);
  return i ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(ua(nl(o)))
  );
}
function Rc(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function qC(e, t) {
  var n = Ci(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Ym(e, t, n) {
  return t === h0 ? Rc(GC(e, n)) : _r(t) ? qC(t, n) : Rc(WC(nr(e)));
}
function KC(e) {
  var t = ua(nl(e)), n = ["absolute", "fixed"].indexOf(Cn(e).position) >= 0, r = n && un(e) ? Ga(e) : e;
  return _r(r) ? t.filter(function(i) {
    return _r(i) && g0(i, r) && Qn(i) !== "body";
  }) : [];
}
function QC(e, t, n, r) {
  var i = t === "clippingParents" ? KC(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(l, u) {
    var c = Ym(e, u, r);
    return l.top = gr(c.top, l.top), l.right = ms(c.right, l.right), l.bottom = ms(c.bottom, l.bottom), l.left = gr(c.left, l.left), l;
  }, Ym(e, o, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function b0(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? ln(r) : null, a = r ? Si(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (i) {
    case vt:
      l = {
        x: o,
        y: t.y - n.height
      };
      break;
    case Dt:
      l = {
        x: o,
        y: t.y + t.height
      };
      break;
    case Mt:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case gt:
      l = {
        x: t.x - n.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = i ? od(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case bi:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case Na:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function Ia(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, l = s === void 0 ? xC : s, u = n.rootBoundary, c = u === void 0 ? h0 : u, f = n.elementContext, d = f === void 0 ? Wi : f, v = n.altBoundary, E = v === void 0 ? !1 : v, x = n.padding, b = x === void 0 ? 0 : x, g = y0(typeof b != "number" ? b : w0(b, Ua)), h = d === Wi ? yC : Wi, y = e.rects.popper, k = e.elements[E ? h : d], S = QC(_r(k) ? k : k.contextElement || nr(e.elements.popper), l, c, o), _ = Ci(e.elements.reference), A = b0({
    reference: _,
    element: y,
    placement: i
  }), T = Rc(Object.assign({}, y, A)), O = d === Wi ? T : _, P = {
    top: S.top - O.top + g.top,
    bottom: O.bottom - S.bottom + g.bottom,
    left: S.left - O.left + g.left,
    right: O.right - S.right + g.right
  }, B = e.modifiersData.offset;
  if (d === Wi && B) {
    var H = B[i];
    Object.keys(P).forEach(function(U) {
      var Q = [Mt, Dt].indexOf(U) >= 0 ? 1 : -1, Z = [vt, Dt].indexOf(U) >= 0 ? "y" : "x";
      P[U] += H[Z] * Q;
    });
  }
  return P;
}
function XC(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? rd : l, c = Si(r), f = c ? s ? qm : qm.filter(function(E) {
    return Si(E) === c;
  }) : Ua, d = f.filter(function(E) {
    return u.indexOf(E) >= 0;
  });
  d.length === 0 && (d = f);
  var v = d.reduce(function(E, x) {
    return E[x] = Ia(e, {
      placement: x,
      boundary: i,
      rootBoundary: a,
      padding: o
    })[ln(x)], E;
  }, {});
  return Object.keys(v).sort(function(E, x) {
    return v[E] - v[x];
  });
}
function YC(e) {
  if (ln(e) === nd)
    return [];
  var t = zo(e);
  return [Xm(e), t, Xm(t)];
}
function ZC(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, l = n.fallbackPlacements, u = n.padding, c = n.boundary, f = n.rootBoundary, d = n.altBoundary, v = n.flipVariations, E = v === void 0 ? !0 : v, x = n.allowedAutoPlacements, b = t.options.placement, g = ln(b), h = g === b, y = l || (h || !E ? [zo(b)] : YC(b)), k = [b].concat(y).reduce(function(ue, L) {
      return ue.concat(ln(L) === nd ? XC(t, {
        placement: L,
        boundary: c,
        rootBoundary: f,
        padding: u,
        flipVariations: E,
        allowedAutoPlacements: x
      }) : L);
    }, []), S = t.rects.reference, _ = t.rects.popper, A = /* @__PURE__ */ new Map(), T = !0, O = k[0], P = 0; P < k.length; P++) {
      var B = k[P], H = ln(B), U = Si(B) === bi, Q = [vt, Dt].indexOf(H) >= 0, Z = Q ? "width" : "height", te = Ia(t, {
        placement: B,
        boundary: c,
        rootBoundary: f,
        altBoundary: d,
        padding: u
      }), ee = Q ? U ? Mt : gt : U ? Dt : vt;
      S[Z] > _[Z] && (ee = zo(ee));
      var N = zo(ee), R = [];
      if (a && R.push(te[H] <= 0), s && R.push(te[ee] <= 0, te[N] <= 0), R.every(function(ue) {
        return ue;
      })) {
        O = B, T = !1;
        break;
      }
      A.set(B, R);
    }
    if (T)
      for (var M = E ? 3 : 1, K = function(L) {
        var X = k.find(function(fe) {
          var Ee = A.get(fe);
          if (Ee)
            return Ee.slice(0, L).every(function(lt) {
              return lt;
            });
        });
        if (X)
          return O = X, "break";
      }, V = M; V > 0; V--) {
        var Te = K(V);
        if (Te === "break") break;
      }
    t.placement !== O && (t.modifiersData[r]._skip = !0, t.placement = O, t.reset = !0);
  }
}
const JC = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ZC,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Zm(e, t, n) {
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
function Jm(e) {
  return [vt, Mt, Dt, gt].some(function(t) {
    return e[t] >= 0;
  });
}
function eS(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = Ia(t, {
    elementContext: "reference"
  }), s = Ia(t, {
    altBoundary: !0
  }), l = Zm(o, r), u = Zm(s, i, a), c = Jm(l), f = Jm(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": f
  });
}
const tS = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: eS
};
function nS(e, t, n) {
  var r = ln(e), i = [gt, vt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, o = a[0], s = a[1];
  return o = o || 0, s = (s || 0) * i, [gt, Mt].indexOf(r) >= 0 ? {
    x: s,
    y: o
  } : {
    x: o,
    y: s
  };
}
function rS(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = rd.reduce(function(c, f) {
    return c[f] = nS(f, t.rects, a), c;
  }, {}), s = o[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = o;
}
const iS = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: rS
};
function aS(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = b0({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const oS = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: aS,
  data: {}
};
function sS(e) {
  return e === "x" ? "y" : "x";
}
function lS(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !1 : o, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, f = n.padding, d = n.tether, v = d === void 0 ? !0 : d, E = n.tetherOffset, x = E === void 0 ? 0 : E, b = Ia(t, {
    boundary: l,
    rootBoundary: u,
    padding: f,
    altBoundary: c
  }), g = ln(t.placement), h = Si(t.placement), y = !h, k = od(g), S = sS(k), _ = t.modifiersData.popperOffsets, A = t.rects.reference, T = t.rects.popper, O = typeof x == "function" ? x(Object.assign({}, t.rects, {
    placement: t.placement
  })) : x, P = typeof O == "number" ? {
    mainAxis: O,
    altAxis: O
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, O), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, H = {
    x: 0,
    y: 0
  };
  if (_) {
    if (a) {
      var U, Q = k === "y" ? vt : gt, Z = k === "y" ? Dt : Mt, te = k === "y" ? "height" : "width", ee = _[k], N = ee + b[Q], R = ee - b[Z], M = v ? -T[te] / 2 : 0, K = h === bi ? A[te] : T[te], V = h === bi ? -T[te] : -A[te], Te = t.elements.arrow, ue = v && Te ? ad(Te) : {
        width: 0,
        height: 0
      }, L = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : x0(), X = L[Q], fe = L[Z], Ee = la(0, A[te], ue[te]), lt = y ? A[te] / 2 - M - Ee - X - P.mainAxis : K - Ee - X - P.mainAxis, Je = y ? -A[te] / 2 + M + Ee + fe + P.mainAxis : V + Ee + fe + P.mainAxis, ut = t.elements.arrow && Ga(t.elements.arrow), Ge = ut ? k === "y" ? ut.clientTop || 0 : ut.clientLeft || 0 : 0, fn = (U = B == null ? void 0 : B[k]) != null ? U : 0, Tn = ee + lt - fn - Ge, Nn = ee + Je - fn, Re = la(v ? ms(N, Tn) : N, ee, v ? gr(R, Nn) : R);
      _[k] = Re, H[k] = Re - ee;
    }
    if (s) {
      var ae, ve = k === "x" ? vt : gt, de = k === "x" ? Dt : Mt, me = _[S], Yt = S === "y" ? "height" : "width", Dr = me + b[ve], rr = me - b[de], D = [vt, gt].indexOf(g) !== -1, q = (ae = B == null ? void 0 : B[S]) != null ? ae : 0, be = D ? Dr : me - A[Yt] - T[Yt] - q + P.altAxis, Ne = D ? me + A[Yt] + T[Yt] - q - P.altAxis : rr, We = v && D ? FC(be, me, Ne) : la(v ? be : Dr, me, v ? Ne : rr);
      _[S] = We, H[S] = We - me;
    }
    t.modifiersData[r] = H;
  }
}
const uS = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: lS,
  requiresIfExists: ["offset"]
};
function cS(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function pS(e) {
  return e === Ct(e) || !un(e) ? sd(e) : cS(e);
}
function dS(e) {
  var t = e.getBoundingClientRect(), n = ki(t.width) / e.offsetWidth || 1, r = ki(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function fS(e, t, n) {
  n === void 0 && (n = !1);
  var r = un(t), i = un(t) && dS(t), a = nr(t), o = Ci(e, i, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Qn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ud(a)) && (s = pS(t)), un(t) ? (l = Ci(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = ld(a))), {
    x: o.left + s.scrollLeft - l.x,
    y: o.top + s.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function mS(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function i(a) {
    n.add(a.name);
    var o = [].concat(a.requires || [], a.requiresIfExists || []);
    o.forEach(function(s) {
      if (!n.has(s)) {
        var l = t.get(s);
        l && i(l);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || i(a);
  }), r;
}
function hS(e) {
  var t = mS(e);
  return NC.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function vS(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function gS(e) {
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
var eh = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function th() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function xS(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? eh : i;
  return function(s, l, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, eh, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, f = [], d = !1, v = {
      state: c,
      setOptions: function(g) {
        var h = typeof g == "function" ? g(c.options) : g;
        x(), c.options = Object.assign({}, a, c.options, h), c.scrollParents = {
          reference: _r(s) ? ua(s) : s.contextElement ? ua(s.contextElement) : [],
          popper: ua(l)
        };
        var y = hS(gS([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = y.filter(function(k) {
          return k.enabled;
        }), E(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!d) {
          var g = c.elements, h = g.reference, y = g.popper;
          if (th(h, y)) {
            c.rects = {
              reference: fS(h, Ga(y), c.options.strategy === "fixed"),
              popper: ad(y)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(P) {
              return c.modifiersData[P.name] = Object.assign({}, P.data);
            });
            for (var k = 0; k < c.orderedModifiers.length; k++) {
              if (c.reset === !0) {
                c.reset = !1, k = -1;
                continue;
              }
              var S = c.orderedModifiers[k], _ = S.fn, A = S.options, T = A === void 0 ? {} : A, O = S.name;
              typeof _ == "function" && (c = _({
                state: c,
                options: T,
                name: O,
                instance: v
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: vS(function() {
        return new Promise(function(b) {
          v.forceUpdate(), b(c);
        });
      }),
      destroy: function() {
        x(), d = !0;
      }
    };
    if (!th(s, l))
      return v;
    v.setOptions(u).then(function(b) {
      !d && u.onFirstUpdate && u.onFirstUpdate(b);
    });
    function E() {
      c.orderedModifiers.forEach(function(b) {
        var g = b.name, h = b.options, y = h === void 0 ? {} : h, k = b.effect;
        if (typeof k == "function") {
          var S = k({
            state: c,
            name: g,
            instance: v,
            options: y
          }), _ = function() {
          };
          f.push(S || _);
        }
      });
    }
    function x() {
      f.forEach(function(b) {
        return b();
      }), f = [];
    }
    return v;
  };
}
var yS = xS({
  defaultModifiers: [tS, oS, zC, VC, iS, JC, uS, MC]
}), nh = function(t) {
  return {
    position: t,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
}, wS = {
  name: "applyStyles",
  enabled: !1
}, ES = {
  name: "ariaDescribedBy",
  enabled: !0,
  phase: "afterWrite",
  effect: function(t) {
    var n = t.state;
    return function() {
      var r = n.elements, i = r.reference, a = r.popper;
      if ("removeAttribute" in i) {
        var o = (i.getAttribute("aria-describedby") || "").split(",").filter(function(s) {
          return s.trim() !== a.id;
        });
        o.length ? i.setAttribute("aria-describedby", o.join(",")) : i.removeAttribute("aria-describedby");
      }
    };
  },
  fn: function(t) {
    var n, r = t.state, i = r.elements, a = i.popper, o = i.reference, s = (n = a.getAttribute("role")) == null ? void 0 : n.toLowerCase();
    if (a.id && s === "tooltip" && "setAttribute" in o) {
      var l = o.getAttribute("aria-describedby");
      if (l && l.split(",").indexOf(a.id) !== -1)
        return;
      o.setAttribute("aria-describedby", l ? l + "," + a.id : a.id);
    }
  }
}, bS = [];
function kS(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.enabled, a = i === void 0 ? !0 : i, o = r.placement, s = o === void 0 ? "bottom" : o, l = r.strategy, u = l === void 0 ? "absolute" : l, c = r.modifiers, f = c === void 0 ? bS : c, d = le(r, ["enabled", "placement", "strategy", "modifiers"]), v = w.useRef(), E = w.useCallback(function() {
    var k;
    (k = v.current) == null || k.update();
  }, []), x = w.useCallback(function() {
    var k;
    (k = v.current) == null || k.forceUpdate();
  }, []), b = gC(w.useState({
    placement: s,
    update: E,
    forceUpdate: x,
    attributes: {},
    styles: {
      popper: nh(u),
      arrow: {}
    }
  })), g = b[0], h = b[1], y = w.useMemo(function() {
    return {
      name: "updateStateModifier",
      enabled: !0,
      phase: "write",
      requires: ["computeStyles"],
      fn: function(S) {
        var _ = S.state, A = {}, T = {};
        Object.keys(_.elements).forEach(function(O) {
          A[O] = _.styles[O], T[O] = _.attributes[O];
        }), h({
          state: _,
          styles: A,
          attributes: T,
          update: E,
          forceUpdate: x,
          placement: _.placement
        });
      }
    };
  }, [E, x, h]);
  return w.useEffect(function() {
    !v.current || !a || v.current.setOptions({
      placement: s,
      strategy: u,
      modifiers: [].concat(f, [y, wS])
    });
  }, [u, s, y, a]), w.useEffect(function() {
    if (!(!a || e == null || t == null))
      return v.current = yS(e, t, $({}, d, {
        placement: s,
        strategy: u,
        modifiers: [].concat(f, [ES, y])
      })), function() {
        v.current != null && (v.current.destroy(), v.current = void 0, h(function(k) {
          return $({}, k, {
            attributes: {},
            styles: {
              popper: nh(u)
            }
          });
        }));
      };
  }, [a, e, t]), g;
}
function k0(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
var CS = function() {
}, SS = CS;
const _S = /* @__PURE__ */ Ii(SS);
function hs(e) {
  return e && "setState" in e ? fr.findDOMNode(e) : e ?? null;
}
const AS = function(e) {
  return Jp(hs(e));
};
var TS = 27, rh = function() {
};
function NS(e) {
  return e.button === 0;
}
function IS(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var ih = function(t) {
  return t && ("current" in t ? t.current : t);
};
function PS(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, o = a === void 0 ? "click" : a, s = w.useRef(!1), l = t || rh, u = w.useCallback(function(d) {
    var v, E = ih(e);
    _S(!!E, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !E || IS(d) || !NS(d) || !!k0(E, (v = d.composedPath == null ? void 0 : d.composedPath()[0]) != null ? v : d.target);
  }, [e]), c = Ic(function(d) {
    s.current || l(d);
  }), f = Ic(function(d) {
    d.keyCode === TS && l(d);
  });
  w.useEffect(function() {
    if (!(i || e == null)) {
      var d = window.event, v = AS(ih(e)), E = ti(v, o, u, !0), x = ti(v, o, function(h) {
        if (h === d) {
          d = void 0;
          return;
        }
        c(h);
      }), b = ti(v, "keyup", function(h) {
        if (h === d) {
          d = void 0;
          return;
        }
        f(h);
      }), g = [];
      return "ontouchstart" in v.documentElement && (g = [].slice.call(v.body.children).map(function(h) {
        return ti(h, "mousemove", rh);
      })), function() {
        E(), x(), b(), g.forEach(function(h) {
          return h();
        });
      };
    }
  }, [e, i, o, u, c, f]);
}
function FS(e) {
  var t = {};
  return Array.isArray(e) ? (e == null || e.forEach(function(n) {
    t[n.name] = n;
  }), t) : e || t;
}
function RS(e) {
  return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
    return e[t].name = t, e[t];
  });
}
function OS(e) {
  var t, n, r, i, a = e.enabled, o = e.enableEvents, s = e.placement, l = e.flip, u = e.offset, c = e.fixed, f = e.containerPadding, d = e.arrowElement, v = e.popperConfig, E = v === void 0 ? {} : v, x = FS(E.modifiers);
  return $({}, E, {
    placement: s,
    enabled: a,
    strategy: c ? "fixed" : E.strategy,
    modifiers: RS($({}, x, {
      eventListeners: {
        enabled: o
      },
      preventOverflow: $({}, x.preventOverflow, {
        options: f ? $({
          padding: f
        }, (t = x.preventOverflow) == null ? void 0 : t.options) : (n = x.preventOverflow) == null ? void 0 : n.options
      }),
      offset: {
        options: $({
          offset: u
        }, (r = x.offset) == null ? void 0 : r.options)
      },
      arrow: $({}, x.arrow, {
        enabled: !!d,
        options: $({}, (i = x.arrow) == null ? void 0 : i.options, {
          element: d
        })
      }),
      flip: $({
        enabled: !!l
      }, x.flip)
    }))
  });
}
const ah = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function DS(e, t) {
  const n = ah(e), r = ah(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function MS(e, t) {
  return w.useMemo(() => DS(e, t), [e, t]);
}
function iu(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function au(e) {
  var t = window.getComputedStyle(e), n = parseFloat(t.marginTop) || 0, r = parseFloat(t.marginRight) || 0, i = parseFloat(t.marginBottom) || 0, a = parseFloat(t.marginLeft) || 0;
  return {
    top: n,
    right: r,
    bottom: i,
    left: a
  };
}
function LS() {
  var e = w.useRef(null), t = w.useRef(null), n = w.useRef(null), r = Pe(void 0, "popover"), i = Pe(void 0, "dropdown-menu"), a = w.useCallback(function(u) {
    !u || !(iu(u, r) || iu(u, i)) || (t.current = au(u), u.style.margin = "0", e.current = u);
  }, [r, i]), o = w.useMemo(function() {
    return {
      name: "offset",
      options: {
        offset: function(c) {
          var f = c.placement;
          if (!t.current) return [0, 0];
          var d = t.current, v = d.top, E = d.left, x = d.bottom, b = d.right;
          switch (f.split("-")[0]) {
            case "top":
              return [0, x];
            case "left":
              return [0, b];
            case "bottom":
              return [0, v];
            case "right":
              return [0, E];
            default:
              return [0, 0];
          }
        }
      }
    };
  }, [t]), s = w.useMemo(function() {
    return {
      name: "arrow",
      options: {
        padding: function() {
          if (!n.current)
            return 0;
          var c = n.current, f = c.top, d = c.right, v = f || d;
          return {
            top: v,
            left: v,
            right: v,
            bottom: v
          };
        }
      }
    };
  }, [n]), l = w.useMemo(function() {
    return {
      name: "popoverArrowMargins",
      enabled: !0,
      phase: "main",
      fn: function() {
      },
      requiresIfExists: ["arrow"],
      effect: function(c) {
        var f = c.state;
        if (!(!e.current || !f.elements.arrow || !iu(e.current, r))) {
          if (f.modifiersData["arrow#persistent"]) {
            var d = au(f.elements.arrow), v = d.top, E = d.right, x = v || E;
            f.modifiersData["arrow#persistent"].padding = {
              top: x,
              left: x,
              right: x,
              bottom: x
            };
          } else
            n.current = au(f.elements.arrow);
          return f.elements.arrow.style.margin = "0", function() {
            f.elements.arrow && (f.elements.arrow.style.margin = "");
          };
        }
      }
    };
  }, [r]);
  return [a, [o, s, l]];
}
var oh = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    return function(a, o, s, l, u) {
      var c = s || "<<anonymous>>", f = u || o;
      if (a[o] == null)
        return new Error("The " + l + " `" + f + "` is required to make " + ("`" + c + "` accessible for users of assistive ") + "technologies such as screen readers.");
      for (var d = arguments.length, v = Array(d > 5 ? d - 5 : 0), E = 5; E < d; E++)
        v[E - 5] = arguments[E];
      return r.apply(void 0, [a, o, s, l, u].concat(v));
    };
  }
  e.exports = t.default;
})(oh, oh.exports);
var sh = { exports: {} }, Oc = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    function i(o, s, l, u, c, f) {
      var d = u || "<<anonymous>>", v = f || l;
      if (s[l] == null)
        return o ? new Error("Required " + c + " `" + v + "` was not specified " + ("in `" + d + "`.")) : null;
      for (var E = arguments.length, x = Array(E > 6 ? E - 6 : 0), b = 6; b < E; b++)
        x[b - 6] = arguments[b];
      return r.apply(void 0, [s, l, d, c, v].concat(x));
    }
    var a = i.bind(null, !1);
    return a.isRequired = i.bind(null, !0), a;
  }
  e.exports = t.default;
})(Oc, Oc.exports);
var jS = Oc.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var n = jS, r = i(n);
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a() {
    for (var o = arguments.length, s = Array(o), l = 0; l < o; l++)
      s[l] = arguments[l];
    function u() {
      for (var c = arguments.length, f = Array(c), d = 0; d < c; d++)
        f[d] = arguments[d];
      var v = null;
      return s.forEach(function(E) {
        if (v == null) {
          var x = E.apply(void 0, f);
          x != null && (v = x);
        }
      }), v;
    }
    return (0, r.default)(u);
  }
  e.exports = t.default;
})(sh, sh.exports);
var BS = ["as", "className", "type", "tooltip"], zS = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: p.string,
  /** Display feedback as a tooltip. */
  tooltip: p.bool,
  as: p.elementType
}, Wa = /* @__PURE__ */ m.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.as, r = n === void 0 ? "div" : n, i = e.className, a = e.type, o = a === void 0 ? "valid" : a, s = e.tooltip, l = s === void 0 ? !1 : s, u = le(e, BS);
    return /* @__PURE__ */ m.createElement(r, $({}, u, {
      ref: t,
      className: F(i, o + "-" + (l ? "tooltip" : "feedback"))
    }));
  }
);
Wa.displayName = "Feedback";
Wa.propTypes = zS;
var Qt = /* @__PURE__ */ m.createContext({
  controlId: void 0
}), HS = ["id", "bsPrefix", "bsCustomPrefix", "className", "type", "isValid", "isInvalid", "isStatic", "as"], cd = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.type, s = o === void 0 ? "checkbox" : o, l = e.isValid, u = l === void 0 ? !1 : l, c = e.isInvalid, f = c === void 0 ? !1 : c, d = e.isStatic, v = e.as, E = v === void 0 ? "input" : v, x = le(e, HS), b = w.useContext(Qt), g = b.controlId, h = b.custom, y = h ? [i, "custom-control-input"] : [r, "form-check-input"], k = y[0], S = y[1];
  return r = Pe(k, S), /* @__PURE__ */ m.createElement(E, $({}, x, {
    ref: t,
    type: s,
    id: n || g,
    className: F(a, r, u && "is-valid", f && "is-invalid", d && "position-static")
  }));
});
cd.displayName = "FormCheckInput";
var VS = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"], pd = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = le(e, VS), s = w.useContext(Qt), l = s.controlId, u = s.custom, c = u ? [r, "custom-control-label"] : [n, "form-check-label"], f = c[0], d = c[1];
  return n = Pe(f, d), /* @__PURE__ */ m.createElement("label", $({}, o, {
    ref: t,
    htmlFor: a || l,
    className: F(i, n)
  }));
});
pd.displayName = "FormCheckLabel";
var $S = ["id", "bsPrefix", "bsCustomPrefix", "inline", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "title", "type", "label", "children", "custom", "as"], Rr = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.inline, o = a === void 0 ? !1 : a, s = e.disabled, l = s === void 0 ? !1 : s, u = e.isValid, c = u === void 0 ? !1 : u, f = e.isInvalid, d = f === void 0 ? !1 : f, v = e.feedbackTooltip, E = v === void 0 ? !1 : v, x = e.feedback, b = e.className, g = e.style, h = e.title, y = h === void 0 ? "" : h, k = e.type, S = k === void 0 ? "checkbox" : k, _ = e.label, A = e.children, T = e.custom, O = e.as, P = O === void 0 ? "input" : O, B = le(e, $S), H = S === "switch" ? !0 : T, U = H ? [i, "custom-control"] : [r, "form-check"], Q = U[0], Z = U[1];
  r = Pe(Q, Z);
  var te = w.useContext(Qt), ee = te.controlId, N = w.useMemo(function() {
    return {
      controlId: n || ee,
      custom: H
    };
  }, [ee, H, n]), R = H || _ != null && _ !== !1 && !A, M = /* @__PURE__ */ m.createElement(cd, $({}, B, {
    type: S === "switch" ? "checkbox" : S,
    ref: t,
    isValid: c,
    isInvalid: d,
    isStatic: !R,
    disabled: l,
    as: P
  }));
  return /* @__PURE__ */ m.createElement(Qt.Provider, {
    value: N
  }, /* @__PURE__ */ m.createElement("div", {
    style: g,
    className: F(b, r, H && "custom-" + S, o && r + "-inline")
  }, A || /* @__PURE__ */ m.createElement(m.Fragment, null, M, R && /* @__PURE__ */ m.createElement(pd, {
    title: y
  }, _), (c || d) && /* @__PURE__ */ m.createElement(Wa, {
    type: c ? "valid" : "invalid",
    tooltip: E
  }, x))));
});
Rr.displayName = "FormCheck";
Rr.Input = cd;
Rr.Label = pd;
var US = ["id", "bsPrefix", "bsCustomPrefix", "className", "isValid", "isInvalid", "lang", "as"], dd = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.isValid, s = e.isInvalid, l = e.lang, u = e.as, c = u === void 0 ? "input" : u, f = le(e, US), d = w.useContext(Qt), v = d.controlId, E = d.custom, x = "file", b = E ? [i, "custom-file-input"] : [r, "form-control-file"], g = b[0], h = b[1];
  return r = Pe(g, h), /* @__PURE__ */ m.createElement(c, $({}, f, {
    ref: t,
    id: n || v,
    type: x,
    lang: l,
    className: F(a, r, o && "is-valid", s && "is-invalid")
  }));
});
dd.displayName = "FormFileInput";
var GS = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"], vs = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = le(e, GS), s = w.useContext(Qt), l = s.controlId, u = s.custom, c = u ? [r, "custom-file-label"] : [n, "form-file-label"], f = c[0], d = c[1];
  return n = Pe(f, d), /* @__PURE__ */ m.createElement("label", $({}, o, {
    ref: t,
    htmlFor: a || l,
    className: F(i, n),
    "data-browse": o["data-browse"]
  }));
});
vs.displayName = "FormFileLabel";
var WS = ["id", "bsPrefix", "bsCustomPrefix", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "label", "children", "custom", "lang", "data-browse", "as", "inputAs"], rl = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.disabled, o = a === void 0 ? !1 : a, s = e.isValid, l = s === void 0 ? !1 : s, u = e.isInvalid, c = u === void 0 ? !1 : u, f = e.feedbackTooltip, d = f === void 0 ? !1 : f, v = e.feedback, E = e.className, x = e.style, b = e.label, g = e.children, h = e.custom, y = e.lang, k = e["data-browse"], S = e.as, _ = S === void 0 ? "div" : S, A = e.inputAs, T = A === void 0 ? "input" : A, O = le(e, WS), P = h ? [i, "custom"] : [r, "form-file"], B = P[0], H = P[1];
  r = Pe(B, H);
  var U = "file", Q = w.useContext(Qt), Z = Q.controlId, te = w.useMemo(function() {
    return {
      controlId: n || Z,
      custom: h
    };
  }, [Z, h, n]), ee = b != null && b !== !1 && !g, N = /* @__PURE__ */ m.createElement(dd, $({}, O, {
    ref: t,
    isValid: l,
    isInvalid: c,
    disabled: o,
    as: T,
    lang: y
  }));
  return /* @__PURE__ */ m.createElement(Qt.Provider, {
    value: te
  }, /* @__PURE__ */ m.createElement(_, {
    style: x,
    className: F(E, r, h && "custom-" + U)
  }, g || /* @__PURE__ */ m.createElement(m.Fragment, null, h ? /* @__PURE__ */ m.createElement(m.Fragment, null, N, ee && /* @__PURE__ */ m.createElement(vs, {
    "data-browse": k
  }, b)) : /* @__PURE__ */ m.createElement(m.Fragment, null, ee && /* @__PURE__ */ m.createElement(vs, null, b), N), (l || c) && /* @__PURE__ */ m.createElement(Wa, {
    type: l ? "valid" : "invalid",
    tooltip: d
  }, v))));
});
rl.displayName = "FormFile";
rl.Input = dd;
rl.Label = vs;
var qS = ["bsPrefix", "bsCustomPrefix", "type", "size", "htmlSize", "id", "className", "isValid", "isInvalid", "plaintext", "readOnly", "custom", "as"], C0 = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.type, a = e.size, o = e.htmlSize, s = e.id, l = e.className, u = e.isValid, c = u === void 0 ? !1 : u, f = e.isInvalid, d = f === void 0 ? !1 : f, v = e.plaintext, E = e.readOnly, x = e.custom, b = e.as, g = b === void 0 ? "input" : b, h = le(e, qS), y = w.useContext(Qt), k = y.controlId, S = x ? [r, "custom"] : [n, "form-control"], _ = S[0], A = S[1];
  n = Pe(_, A);
  var T;
  if (v) {
    var O;
    T = (O = {}, O[n + "-plaintext"] = !0, O);
  } else if (i === "file") {
    var P;
    T = (P = {}, P[n + "-file"] = !0, P);
  } else if (i === "range") {
    var B;
    T = (B = {}, B[n + "-range"] = !0, B);
  } else if (g === "select" && x) {
    var H;
    T = (H = {}, H[n + "-select"] = !0, H[n + "-select-" + a] = a, H);
  } else {
    var U;
    T = (U = {}, U[n] = !0, U[n + "-" + a] = a, U);
  }
  return /* @__PURE__ */ m.createElement(g, $({}, h, {
    type: i,
    size: o,
    ref: t,
    readOnly: E,
    id: s || k,
    className: F(l, T, c && "is-valid", d && "is-invalid")
  }));
});
C0.displayName = "FormControl";
const S0 = Object.assign(C0, {
  Feedback: Wa
});
var KS = ["bsPrefix", "className", "children", "controlId", "as"], _0 = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.className, i = e.children, a = e.controlId, o = e.as, s = o === void 0 ? "div" : o, l = le(e, KS);
  n = Pe(n, "form-group");
  var u = w.useMemo(function() {
    return {
      controlId: a
    };
  }, [a]);
  return /* @__PURE__ */ m.createElement(Qt.Provider, {
    value: u
  }, /* @__PURE__ */ m.createElement(s, $({}, l, {
    ref: t,
    className: F(r, n)
  }), i));
});
_0.displayName = "FormGroup";
var QS = ["as", "bsPrefix", "column", "srOnly", "className", "htmlFor"], XS = {
  column: !1,
  srOnly: !1
}, fd = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "label" : n, i = e.bsPrefix, a = e.column, o = e.srOnly, s = e.className, l = e.htmlFor, u = le(e, QS), c = w.useContext(Qt), f = c.controlId;
  i = Pe(i, "form-label");
  var d = "col-form-label";
  typeof a == "string" && (d = d + " " + d + "-" + a);
  var v = F(s, i, o && "sr-only", a && d);
  return l = l || f, a ? /* @__PURE__ */ m.createElement(m0, $({
    ref: t,
    as: "label",
    className: v,
    htmlFor: l
  }, u)) : (
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    /* @__PURE__ */ m.createElement(r, $({
      ref: t,
      className: v,
      htmlFor: l
    }, u))
  );
});
fd.displayName = "FormLabel";
fd.defaultProps = XS;
var YS = ["bsPrefix", "className", "as", "muted"], A0 = /* @__PURE__ */ m.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "small" : i, o = e.muted, s = le(e, YS);
    return n = Pe(n, "form-text"), /* @__PURE__ */ m.createElement(a, $({}, s, {
      ref: t,
      className: F(r, n, o && "text-muted")
    }));
  }
);
A0.displayName = "FormText";
var il = /* @__PURE__ */ m.forwardRef(function(e, t) {
  return /* @__PURE__ */ m.createElement(Rr, $({}, e, {
    ref: t,
    type: "switch"
  }));
});
il.displayName = "Switch";
il.Input = Rr.Input;
il.Label = Rr.Label;
var ZS = ["bsPrefix", "inline", "className", "validated", "as"], JS = ed("form-row"), e_ = {
  inline: !1
}, Xt = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.inline, i = e.className, a = e.validated, o = e.as, s = o === void 0 ? "form" : o, l = le(e, ZS);
  return n = Pe(n, "form"), /* @__PURE__ */ m.createElement(s, $({}, l, {
    ref: t,
    className: F(i, a && "was-validated", r && n + "-inline")
  }));
});
Xt.displayName = "Form";
Xt.defaultProps = e_;
Xt.Row = JS;
Xt.Group = _0;
Xt.Control = S0;
Xt.Check = Rr;
Xt.File = rl;
Xt.Switch = il;
Xt.Label = fd;
Xt.Text = A0;
var ou = function(t) {
  var n;
  return typeof document > "u" ? null : t == null ? Jp().body : (typeof t == "function" && (t = t()), t && "current" in t && (t = t.current), (n = t) != null && n.nodeType && t || null);
};
function lh(e, t) {
  var n = w.useState(function() {
    return ou(e);
  }), r = n[0], i = n[1];
  if (!r) {
    var a = ou(e);
    a && i(a);
  }
  return w.useEffect(function() {
  }, [t, r]), w.useEffect(function() {
    var o = ou(e);
    o !== r && i(o);
  }, [e, r]), r;
}
var md = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.flip, r = e.offset, i = e.placement, a = e.containerPadding, o = a === void 0 ? 5 : a, s = e.popperConfig, l = s === void 0 ? {} : s, u = e.transition, c = Wm(), f = c[0], d = c[1], v = Wm(), E = v[0], x = v[1], b = MS(d, t), g = lh(e.container), h = lh(e.target), y = w.useState(!e.show), k = y[0], S = y[1], _ = kS(h, f, OS({
    placement: i,
    enableEvents: !!e.show,
    containerPadding: o || 5,
    flip: n,
    offset: r,
    arrowElement: E,
    popperConfig: l
  })), A = _.styles, T = _.attributes, O = le(_, ["styles", "attributes"]);
  e.show ? k && S(!1) : !e.transition && !k && S(!0);
  var P = function() {
    S(!0), e.onExited && e.onExited.apply(e, arguments);
  }, B = e.show || u && !k;
  if (PS(f, e.onHide, {
    disabled: !e.rootClose || e.rootCloseDisabled,
    clickTrigger: e.rootCloseEvent
  }), !B)
    return null;
  var H = e.children($({}, O, {
    show: !!e.show,
    props: $({}, T.popper, {
      style: A.popper,
      ref: b
    }),
    arrowProps: $({}, T.arrow, {
      style: A.arrow,
      ref: x
    })
  }));
  if (u) {
    var U = e.onExit, Q = e.onExiting, Z = e.onEnter, te = e.onEntering, ee = e.onEntered;
    H = /* @__PURE__ */ m.createElement(u, {
      in: e.show,
      appear: !0,
      onExit: U,
      onExiting: Q,
      onExited: P,
      onEnter: Z,
      onEntering: te,
      onEntered: ee
    }, H);
  }
  return g ? /* @__PURE__ */ fr.createPortal(H, g) : null;
});
md.displayName = "Overlay";
md.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: p.bool,
  /** Specify where the overlay element is positioned in relation to the target element */
  placement: p.oneOf(rd),
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */
  target: p.any,
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: p.any,
  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: p.bool,
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
  children: p.func.isRequired,
  /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
   */
  containerPadding: p.number,
  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: p.object,
  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: p.bool,
  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent: p.oneOf(["click", "mousedown"]),
  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled: p.bool,
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
      var a;
      return (a = p.func).isRequired.apply(a, [t].concat(r));
    }
    return p.func.apply(p, [t].concat(r));
  },
  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  // @ts-ignore
  transition: p.elementType,
  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: p.func,
  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: p.func,
  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: p.func,
  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: p.func,
  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: p.func,
  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: p.func
};
var t_ = ["children", "transition", "popperConfig"], n_ = ["props", "arrowProps", "show", "update", "forceUpdate", "placement", "state"], r_ = {
  transition: Di,
  rootClose: !1,
  show: !1,
  placement: "top"
};
function i_(e, t) {
  var n = e.ref, r = t.ref;
  e.ref = n.__wrapped || (n.__wrapped = function(i) {
    return n(hs(i));
  }), t.ref = r.__wrapped || (r.__wrapped = function(i) {
    return r(hs(i));
  });
}
function T0(e) {
  var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, a = le(e, t_), o = w.useRef({}), s = LS(), l = s[0], u = s[1], c = n === !0 ? Di : n || null;
  return /* @__PURE__ */ m.createElement(md, $({}, a, {
    ref: l,
    popperConfig: $({}, i, {
      modifiers: u.concat(i.modifiers || [])
    }),
    transition: c
  }), function(f) {
    var d, v = f.props, E = f.arrowProps, x = f.show, b = f.update;
    f.forceUpdate;
    var g = f.placement, h = f.state, y = le(f, n_);
    i_(v, E);
    var k = Object.assign(o.current, {
      state: h,
      scheduleUpdate: b,
      placement: g,
      outOfBoundaries: (h == null || (d = h.modifiersData.hide) == null ? void 0 : d.isReferenceHidden) || !1
    });
    return typeof t == "function" ? t($({}, y, v, {
      placement: g,
      show: x
    }, !n && x && {
      className: "show"
    }, {
      popper: k,
      arrowProps: E
    })) : /* @__PURE__ */ m.cloneElement(t, $({}, y, v, {
      placement: g,
      arrowProps: E,
      popper: k,
      className: F(t.props.className, !n && x && "show"),
      style: $({}, t.props.style, v.style)
    }));
  });
}
T0.defaultProps = r_;
var a_ = ["trigger", "overlay", "children", "popperConfig", "show", "defaultShow", "onToggle", "delay", "placement", "flip"], o_ = /* @__PURE__ */ function(e) {
  Zp(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return n.render = function() {
    return this.props.children;
  }, t;
}(m.Component);
function s_(e) {
  return e && typeof e == "object" ? e : {
    show: e,
    hide: e
  };
}
function uh(e, t, n) {
  var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
  (!a || a !== i) && !k0(i, a) && e.apply(void 0, t);
}
var l_ = {
  defaultShow: !1,
  trigger: ["hover", "focus"]
};
function N0(e) {
  var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, a = i === void 0 ? {} : i, o = e.show, s = e.defaultShow, l = s === void 0 ? !1 : s, u = e.onToggle, c = e.delay, f = e.placement, d = e.flip, v = d === void 0 ? f && f.indexOf("auto") !== -1 : d, E = le(e, a_), x = w.useRef(null), b = fC(), g = w.useRef(""), h = s0(o, l, u), y = h[0], k = h[1], S = s_(c), _ = typeof r != "function" ? m.Children.only(r).props : {}, A = _.onFocus, T = _.onBlur, O = _.onClick, P = w.useCallback(function() {
    return hs(x.current);
  }, []), B = w.useCallback(function() {
    if (b.clear(), g.current = "show", !S.show) {
      k(!0);
      return;
    }
    b.set(function() {
      g.current === "show" && k(!0);
    }, S.show);
  }, [S.show, k, b]), H = w.useCallback(function() {
    if (b.clear(), g.current = "hide", !S.hide) {
      k(!1);
      return;
    }
    b.set(function() {
      g.current === "hide" && k(!1);
    }, S.hide);
  }, [S.hide, k, b]), U = w.useCallback(function() {
    B();
    for (var M = arguments.length, K = new Array(M), V = 0; V < M; V++)
      K[V] = arguments[V];
    A == null || A.apply(void 0, K);
  }, [B, A]), Q = w.useCallback(function() {
    H();
    for (var M = arguments.length, K = new Array(M), V = 0; V < M; V++)
      K[V] = arguments[V];
    T == null || T.apply(void 0, K);
  }, [H, T]), Z = w.useCallback(function() {
    k(!y), O && O.apply(void 0, arguments);
  }, [O, k, y]), te = w.useCallback(function() {
    for (var M = arguments.length, K = new Array(M), V = 0; V < M; V++)
      K[V] = arguments[V];
    uh(B, K, "fromElement");
  }, [B]), ee = w.useCallback(function() {
    for (var M = arguments.length, K = new Array(M), V = 0; V < M; V++)
      K[V] = arguments[V];
    uh(H, K, "toElement");
  }, [H]), N = t == null ? [] : [].concat(t), R = {};
  return N.indexOf("click") !== -1 && (R.onClick = Z), N.indexOf("focus") !== -1 && (R.onFocus = U, R.onBlur = Q), N.indexOf("hover") !== -1 && (R.onMouseOver = te, R.onMouseOut = ee), /* @__PURE__ */ m.createElement(m.Fragment, null, typeof r == "function" ? r($({}, R, {
    ref: x
  })) : /* @__PURE__ */ m.createElement(o_, {
    ref: x
  }, /* @__PURE__ */ w.cloneElement(r, R)), /* @__PURE__ */ m.createElement(T0, $({}, E, {
    show: y,
    onHide: H,
    flip: v,
    placement: f,
    popperConfig: a,
    target: P
  }), n));
}
N0.defaultProps = l_;
var u_ = ["min", "now", "max", "label", "srOnly", "striped", "animated", "className", "style", "variant", "bsPrefix"], c_ = ["isChild"], p_ = ["min", "now", "max", "label", "srOnly", "striped", "animated", "bsPrefix", "variant", "className", "children"], ch = 1e3, d_ = {
  min: 0,
  max: 100,
  animated: !1,
  isChild: !1,
  srOnly: !1,
  striped: !1
};
function f_(e, t, n) {
  var r = (e - t) / (n - t) * 100;
  return Math.round(r * ch) / ch;
}
function ph(e, t) {
  var n, r = e.min, i = e.now, a = e.max, o = e.label, s = e.srOnly, l = e.striped, u = e.animated, c = e.className, f = e.style, d = e.variant, v = e.bsPrefix, E = le(e, u_);
  return /* @__PURE__ */ m.createElement("div", $({
    ref: t
  }, E, {
    role: "progressbar",
    className: F(c, v + "-bar", (n = {}, n["bg-" + d] = d, n[v + "-bar-animated"] = u, n[v + "-bar-striped"] = u || l, n)),
    style: $({
      width: f_(i, r, a) + "%"
    }, f),
    "aria-valuenow": i,
    "aria-valuemin": r,
    "aria-valuemax": a
  }), s ? /* @__PURE__ */ m.createElement("span", {
    className: "sr-only"
  }, o) : o);
}
var ui = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.isChild, r = le(e, c_);
  if (r.bsPrefix = Pe(r.bsPrefix, "progress"), n)
    return ph(r, t);
  var i = r.min, a = r.now, o = r.max, s = r.label, l = r.srOnly, u = r.striped, c = r.animated, f = r.bsPrefix, d = r.variant, v = r.className, E = r.children, x = le(r, p_);
  return /* @__PURE__ */ m.createElement("div", $({
    ref: t
  }, x, {
    className: F(v, f)
  }), E ? mC(E, function(b) {
    return /* @__PURE__ */ w.cloneElement(b, {
      isChild: !0
    });
  }) : ph({
    min: i,
    now: a,
    max: o,
    label: s,
    srOnly: l,
    striped: u,
    animated: c,
    bsPrefix: f,
    variant: d
  }, t));
});
ui.displayName = "ProgressBar";
ui.defaultProps = d_;
var m_ = ["bsPrefix", "variant", "animation", "size", "children", "as", "className"], I0 = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.animation, a = e.size, o = e.children, s = e.as, l = s === void 0 ? "div" : s, u = e.className, c = le(e, m_);
  n = Pe(n, "spinner");
  var f = n + "-" + i;
  return /* @__PURE__ */ m.createElement(l, $({
    ref: t
  }, c, {
    className: F(u, f, a && f + "-" + a, r && "text-" + r)
  }), o);
});
I0.displayName = "Spinner";
var h_ = ["bsPrefix", "placement", "className", "style", "children", "arrowProps", "popper", "show"], v_ = {
  placement: "right"
}, al = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.placement, i = e.className, a = e.style, o = e.children, s = e.arrowProps;
  e.popper, e.show;
  var l = le(e, h_);
  n = Pe(n, "tooltip");
  var u = (r == null ? void 0 : r.split("-")) || [], c = u[0];
  return /* @__PURE__ */ m.createElement("div", $({
    ref: t,
    style: a,
    role: "tooltip",
    "x-placement": c,
    className: F(i, n, "bs-tooltip-" + c)
  }, l), /* @__PURE__ */ m.createElement("div", $({
    className: "arrow"
  }, s)), /* @__PURE__ */ m.createElement("div", {
    className: n + "-inner"
  }, o));
});
al.defaultProps = v_;
al.displayName = "Tooltip";
var hd = {};
hd.match = b_;
hd.parse = P0;
var g_ = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, x_ = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, y_ = /^(?:(min|max)-)?(.+)/, w_ = /(em|rem|px|cm|mm|in|pt|pc)?$/, E_ = /(dpi|dpcm|dppx)?$/;
function b_(e, t) {
  return P0(e).some(function(n) {
    var r = n.inverse, i = n.type === "all" || t.type === n.type;
    if (i && r || !(i || r))
      return !1;
    var a = n.expressions.every(function(o) {
      var s = o.feature, l = o.modifier, u = o.value, c = t[s];
      if (!c)
        return !1;
      switch (s) {
        case "orientation":
        case "scan":
          return c.toLowerCase() === u.toLowerCase();
        case "width":
        case "height":
        case "device-width":
        case "device-height":
          u = mh(u), c = mh(c);
          break;
        case "resolution":
          u = fh(u), c = fh(c);
          break;
        case "aspect-ratio":
        case "device-aspect-ratio":
        case /* Deprecated */
        "device-pixel-ratio":
          u = dh(u), c = dh(c);
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
    return a && !r || !a && r;
  });
}
function P0(e) {
  return e.split(",").map(function(t) {
    t = t.trim();
    var n = t.match(g_), r = n[1], i = n[2], a = n[3] || "", o = {};
    return o.inverse = !!r && r.toLowerCase() === "not", o.type = i ? i.toLowerCase() : "all", a = a.match(/\([^\)]+\)/g) || [], o.expressions = a.map(function(s) {
      var l = s.match(x_), u = l[1].toLowerCase().match(y_);
      return {
        modifier: u[1],
        feature: u[2],
        value: l[2]
      };
    }), o;
  });
}
function dh(e) {
  var t = Number(e), n;
  return t || (n = e.match(/^(\d+)\s*\/\s*(\d+)$/), t = n[1] / n[2]), t;
}
function fh(e) {
  var t = parseFloat(e), n = String(e).match(E_)[1];
  switch (n) {
    case "dpcm":
      return t / 2.54;
    case "dppx":
      return t * 96;
    default:
      return t;
  }
}
function mh(e) {
  var t = parseFloat(e), n = String(e).match(w_)[1];
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
var k_ = hd.match, hh = typeof window < "u" ? window.matchMedia : null;
function C_(e, t, n) {
  var r = this, i;
  hh && !n && (i = hh.call(window, e)), i ? (this.matches = i.matches, this.media = i.media, i.addListener(s)) : (this.matches = k_(e, t), this.media = e), this.addListener = a, this.removeListener = o, this.dispose = l;
  function a(u) {
    i && i.addListener(u);
  }
  function o(u) {
    i && i.removeListener(u);
  }
  function s(u) {
    r.matches = u.matches, r.media = u.media;
  }
  function l() {
    i && i.removeListener(s);
  }
}
function S_(e, t, n) {
  return new C_(e, t, n);
}
var __ = S_;
const A_ = /* @__PURE__ */ Ii(__);
var T_ = /[A-Z]/g, N_ = /^ms-/, su = {};
function I_(e) {
  return "-" + e.toLowerCase();
}
function F0(e) {
  if (su.hasOwnProperty(e))
    return su[e];
  var t = e.replace(T_, I_);
  return su[e] = N_.test(t) ? "-" + t : t;
}
function P_(e, t) {
  if (e === t)
    return !0;
  if (!e || !t)
    return !1;
  const n = Object.keys(e), r = Object.keys(t), i = n.length;
  if (r.length !== i)
    return !1;
  for (let a = 0; a < i; a++) {
    const o = n[a];
    if (e[o] !== t[o] || !Object.prototype.hasOwnProperty.call(t, o))
      return !1;
  }
  return !0;
}
const tt = p.oneOfType([p.string, p.number]), R0 = {
  all: p.bool,
  grid: p.bool,
  aural: p.bool,
  braille: p.bool,
  handheld: p.bool,
  print: p.bool,
  projection: p.bool,
  screen: p.bool,
  tty: p.bool,
  tv: p.bool,
  embossed: p.bool
}, F_ = {
  orientation: p.oneOf(["portrait", "landscape"]),
  scan: p.oneOf(["progressive", "interlace"]),
  aspectRatio: p.string,
  deviceAspectRatio: p.string,
  height: tt,
  deviceHeight: tt,
  width: tt,
  deviceWidth: tt,
  color: p.bool,
  colorIndex: p.bool,
  monochrome: p.bool,
  resolution: tt,
  type: Object.keys(R0)
}, { type: RI, ...R_ } = F_, O_ = {
  minAspectRatio: p.string,
  maxAspectRatio: p.string,
  minDeviceAspectRatio: p.string,
  maxDeviceAspectRatio: p.string,
  minHeight: tt,
  maxHeight: tt,
  minDeviceHeight: tt,
  maxDeviceHeight: tt,
  minWidth: tt,
  maxWidth: tt,
  minDeviceWidth: tt,
  maxDeviceWidth: tt,
  minColor: p.number,
  maxColor: p.number,
  minColorIndex: p.number,
  maxColorIndex: p.number,
  minMonochrome: p.number,
  maxMonochrome: p.number,
  minResolution: tt,
  maxResolution: tt,
  ...R_
}, D_ = { ...R0, ...O_ };
var M_ = {
  all: D_
};
const L_ = (e) => `not ${e}`, j_ = (e, t) => {
  const n = F0(e);
  return typeof t == "number" && (t = `${t}px`), t === !0 ? n : t === !1 ? L_(n) : `(${n}: ${t})`;
}, B_ = (e) => e.join(" and "), z_ = (e) => {
  const t = [];
  return Object.keys(M_.all).forEach((n) => {
    const r = e[n];
    r != null && t.push(j_(n, r));
  }), B_(t);
}, H_ = w.createContext(void 0), V_ = (e) => e.query || z_(e), vh = (e) => e ? Object.keys(e).reduce((n, r) => (n[F0(r)] = e[r], n), {}) : void 0, O0 = () => {
  const e = w.useRef(!1);
  return w.useEffect(() => {
    e.current = !0;
  }, []), e.current;
}, $_ = (e) => {
  const t = w.useContext(H_), n = () => vh(e) || vh(t), [r, i] = w.useState(n);
  return w.useEffect(() => {
    const a = n();
    P_(r, a) || i(a);
  }, [e, t]), r;
}, U_ = (e) => {
  const t = () => V_(e), [n, r] = w.useState(t);
  return w.useEffect(() => {
    const i = t();
    n !== i && r(i);
  }, [e]), n;
}, G_ = (e, t) => {
  const n = () => A_(e, t || {}, !!t), [r, i] = w.useState(n), a = O0();
  return w.useEffect(() => {
    if (a) {
      const o = n();
      return i(o), () => {
        o && o.dispose();
      };
    }
  }, [e, t]), r;
}, W_ = (e) => {
  const [t, n] = w.useState(e.matches);
  return w.useEffect(() => {
    const r = (i) => {
      n(i.matches);
    };
    return e.addListener(r), n(e.matches), () => {
      e.removeListener(r);
    };
  }, [e]), t;
}, D0 = (e, t, n) => {
  const r = $_(t), i = U_(e);
  if (!i)
    throw new Error("Invalid or missing MediaQuery!");
  const a = G_(i, r), o = W_(a);
  return O0(), w.useEffect(() => {
  }, [o]), w.useEffect(() => () => {
    a && a.dispose();
  }, []), o;
}, q_ = "576px", K_ = "768px", Q_ = "992px", X_ = "1200px", Y_ = "1400px", Z_ = {
  sm: q_,
  md: K_,
  lg: Q_,
  xl: X_,
  xxl: Y_
}, {
  sm: gh,
  md: xh,
  lg: yh,
  xl: wh,
  xxl: Eh
} = Z_, M0 = {
  extraSmall: {
    maxWidth: parseFloat(gh) || 575.98
  },
  small: {
    minWidth: parseFloat(gh) || 576,
    maxWidth: parseFloat(xh) || 767.98
  },
  medium: {
    minWidth: parseFloat(xh) || 768,
    maxWidth: parseFloat(yh) || 991.98
  },
  large: {
    minWidth: parseFloat(yh) || 992,
    maxWidth: parseFloat(wh) || 1199.98
  },
  extraLarge: {
    minWidth: parseFloat(wh) || 1200,
    maxWidth: parseFloat(Eh) || 1399.98
  },
  extraExtraLarge: {
    minWidth: parseFloat(Eh) || 1400
  }
}, J_ = Object.freeze({
  xs: "extraSmall",
  sm: "small",
  md: "medium",
  lg: "large",
  xl: "extraLarge",
  xxl: "extraExtraLarge"
}), Xn = /* @__PURE__ */ w.forwardRef(({
  children: e,
  icon: t,
  actions: n,
  dismissible: r = !1,
  onClose: i = () => {
  },
  closeLabel: a,
  stacked: o = !1,
  show: s = !0,
  ...l
}, u) => {
  const [c, f] = w.useState(o), d = D0({
    maxWidth: M0.extraSmall.maxWidth
  }), v = "sm";
  w.useEffect(() => {
    f(d ? !0 : o);
  }, [d, o]);
  const E = w.useCallback((x) => {
    const b = {
      size: v,
      key: x.props.children
    };
    return /* @__PURE__ */ w.cloneElement(x, b);
  }, []);
  return /* @__PURE__ */ m.createElement(Fr, {
    ...l,
    className: F("alert-content", l.className),
    show: s,
    ref: u
  }, t && /* @__PURE__ */ m.createElement(kt, {
    src: t,
    className: "alert-icon"
  }), /* @__PURE__ */ m.createElement("div", {
    className: F({
      "pgn__alert-message-wrapper": !c,
      "pgn__alert-message-wrapper-stacked": c
    })
  }, /* @__PURE__ */ m.createElement("div", {
    className: "alert-message-content"
  }, e), (r || n && n.length > 0) && /* @__PURE__ */ m.createElement(Ta, {
    className: "pgn__alert-actions"
  }, /* @__PURE__ */ m.createElement(Ta.Spacer, null), r && /* @__PURE__ */ m.createElement(je, {
    size: v,
    variant: "tertiary",
    onClick: i
  }, a || /* @__PURE__ */ m.createElement(Aa, {
    id: "pgn.Alert.closeLabel",
    defaultMessage: "Dismiss",
    description: "Label of a close button on Alert component"
  })), n && n.map(E))));
}), L0 = c0("h4");
L0.displayName = "DivStyledAsH4";
function e2({
  as: e = L0,
  bsPrefix: t = "alert-heading",
  ...n
}) {
  return /* @__PURE__ */ m.createElement(Fr.Heading, {
    as: e,
    bsPrefix: t,
    ...n
  });
}
function t2({
  as: e = "a",
  bsPrefix: t = "alert-link",
  ...n
}) {
  return /* @__PURE__ */ m.createElement(Fr.Link, {
    as: e,
    bsPrefix: t,
    ...n
  });
}
Xn.Heading = e2;
Xn.Link = t2;
const bh = /* @__PURE__ */ m.forwardRef(({
  className: e,
  variant: t = "success",
  children: n,
  arrowPlacement: r = "bottom",
  ...i
}, a) => /* @__PURE__ */ m.createElement("span", {
  className: F(e, "pgn__annotation", `pgn__annotation-${t}-${r}`),
  ref: a,
  ...i
}, n)), kh = /* @__PURE__ */ m.forwardRef(({
  variant: e = "primary",
  className: t,
  children: n = null,
  disabled: r = !1,
  expandable: i = !1,
  ...a
}, o) => /* @__PURE__ */ m.createElement("div", {
  ref: o,
  className: F("pgn__bubble", `pgn__bubble-${e}`, t, {
    disabled: r,
    expandable: i
  }),
  ...a
}, n)), j0 = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], n2 = ["hover", "click", "focus"];
function vd(e) {
  return /* @__PURE__ */ m.createElement(N0, {
    ...e
  }, e.children);
}
const Ch = p.oneOf(n2);
p.node.isRequired, p.oneOfType([p.elementType, p.func]), p.func, p.func, p.func, p.func, p.func, p.func, p.func, p.oneOf(j0), p.shape({}), p.bool, p.oneOf(["click", "mousedown"]), p.bool, p.oneOfType([p.elementType, p.func]), p.oneOfType([p.object, p.bool]);
vd.propTypes = {
  /** Specifies the content of the `OverlayTrigger`. */
  children: p.oneOfType([p.element, p.func]).isRequired,
  /** An element or text to overlay next to the target. */
  overlay: p.oneOfType([p.element, p.func]).isRequired,
  /** The initial visibility state of the `Overlay`. */
  defaultShow: p.bool,
  /** A millisecond delay amount to show and hide the `Overlay` once triggered. */
  delay: p.oneOfType([p.number, p.shape({})]),
  /** The initial flip state of the `Overlay`. */
  flip: p.bool,
  onHide: p.func,
  /**
   * A callback that fires when the user triggers a change in tooltip visibility.
   * `onToggle` is called with the desired next show, and generally should be
   * passed back to the `show` prop. `onToggle` fires after the configured `delay`.
   *
   * Controls `show`.
   */
  onToggle: p.func,
  /** The placement of the `Overlay` in relation to it's target. */
  placement: p.oneOf(j0),
  /** A `Popper.js` config object passed to the the underlying popper instance. */
  popperConfig: p.shape({}),
  /**
   * The visibility of the `Overlay`. `show` is a controlled prop so should
   * be paired with `onToggle` to avoid breaking user interactions.
   *
   * Manually toggling show does not wait for delay to change the visibility.
   *
   * Controls `onToggle`.
   */
  show: p.bool,
  target: p.instanceOf(EventTarget),
  /** Specify which action or actions trigger `Overlay` visibility. */
  trigger: p.oneOfType([Ch, p.arrayOf(Ch)])
};
vd.defaultProps = {
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
const r2 = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], gs = /* @__PURE__ */ m.forwardRef(({
  children: e,
  variant: t,
  ...n
}, r) => /* @__PURE__ */ m.createElement(al, {
  ...n,
  className: F({
    "tooltip-light": t === "light"
  }, n.className),
  ref: r
}, e));
gs.propTypes = {
  ...al.propTypes,
  /** An html id attribute, necessary for accessibility. */
  id: p.string.isRequired,
  /**
   * Sets the direction the `Tooltip` is positioned towards.
   *
   * This is generally provided by the `Overlay` component positioning the tooltip.
   */
  placement: p.oneOf(r2),
  /**
   * An `Overlay` injected set of props for positioning the `Tooltip` arrow.
   *
   * This is generally provided by the `Overlay` component positioning the tooltip.
   */
  arrowProps: p.shape({
    ref: p.oneOfType([p.func, p.shape({
      current: p.element
    })]),
    style: p.shape({})
  }),
  /** Whether the `Overlay` is shown. */
  show: p.bool,
  /** A `Popper.js` config object passed to the the underlying popper instance. */
  popper: p.shape({}),
  /** Overrides underlying component base CSS class name */
  bsPrefix: p.string,
  /** Specifies the content of the `Tooltip` */
  children: p.node,
  /** Specifies class name to append to the base element */
  className: p.string,
  /** The visual style of the `Tooltip` */
  variant: p.string
};
gs.defaultProps = {
  ...gs.defaultProps,
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
const ol = /* @__PURE__ */ m.forwardRef(({
  className: e,
  alt: t,
  invertColors: n = !1,
  icon: r,
  src: i,
  iconClassNames: a,
  onClick: o = () => {
  },
  size: s = "md",
  variant: l = "primary",
  iconAs: u = kt,
  isActive: c = !1,
  children: f,
  // unused, just here because we don't want it to be part of 'attrs'
  ...d
}, v) => {
  const E = n ? "inverse-" : "", x = c ? `${l}-` : "", b = u;
  return /* @__PURE__ */ m.createElement("button", {
    "aria-label": t,
    className: F("btn-icon", `btn-icon-${E}${l}`, `btn-icon-${s}`, {
      [`btn-icon-${E}${x}active`]: c
    }, e),
    onClick: o,
    type: "button",
    ref: v,
    ...d
  }, /* @__PURE__ */ m.createElement("span", {
    className: "btn-icon__icon-container"
  }, b && /* @__PURE__ */ m.createElement(b, {
    className: F("btn-icon__icon", a),
    icon: r,
    src: i
  })));
});
function i2({
  tooltipPlacement: e = "top",
  tooltipContent: t,
  ...n
}) {
  const r = n.invertColors ? "inverse-" : "";
  return /* @__PURE__ */ m.createElement(vd, {
    placement: e,
    overlay: /* @__PURE__ */ m.createElement(gs, {
      id: `iconbutton-tooltip-${e}`,
      variant: r ? "light" : void 0
    }, t)
  }, /* @__PURE__ */ m.createElement(ol, {
    ...n
  }));
}
ol.IconButtonWithTooltip = i2;
const Sh = (e) => /* @__PURE__ */ w.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ w.createElement("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z",
  fill: "currentColor"
})), a2 = (e) => /* @__PURE__ */ w.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ w.createElement("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
  fill: "currentColor"
})), B0 = (e) => /* @__PURE__ */ w.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ w.createElement("path", {
  d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
  fill: "currentColor"
})), o2 = (e) => /* @__PURE__ */ w.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ w.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
  fill: "currentColor"
})), z0 = (e) => /* @__PURE__ */ w.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ w.createElement("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
  fill: "currentColor"
})), s2 = (e) => /* @__PURE__ */ w.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ w.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1 15h-2v-2h2v2Zm0-4h-2V7h2v6Z",
  fill: "currentColor"
})), l2 = (e) => /* @__PURE__ */ w.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ w.createElement("path", {
  d: "M5 10h4v6h6v-6h4l-7-7-7 7zm0 8v2h14v-2H5z",
  fill: "currentColor"
})), u2 = (e) => /* @__PURE__ */ w.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ w.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z",
  fill: "currentColor"
})), c2 = (e) => /* @__PURE__ */ w.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ w.createElement("path", {
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
  fill: "currentColor"
})), p2 = (e) => /* @__PURE__ */ w.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ w.createElement("path", {
  d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
  fill: "currentColor"
})), d2 = (e) => /* @__PURE__ */ w.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ w.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
  fill: "currentColor"
})), f2 = (e) => /* @__PURE__ */ w.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ w.createElement("path", {
  xmlns: "http://www.w3.org/2000/svg",
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
  fill: "currentColor"
}));
function Wn(e) {
  return typeof e == "string" || e instanceof String;
}
function _h(e) {
  var t;
  return typeof e == "object" && e != null && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function H0(e, t) {
  return Array.isArray(t) ? H0(e, (n, r) => t.includes(r)) : Object.entries(e).reduce((n, r) => {
    let [i, a] = r;
    return t(a, i) && (n[i] = a), n;
  }, {});
}
const G = {
  NONE: "NONE",
  LEFT: "LEFT",
  FORCE_LEFT: "FORCE_LEFT",
  RIGHT: "RIGHT",
  FORCE_RIGHT: "FORCE_RIGHT"
};
function m2(e) {
  switch (e) {
    case G.LEFT:
      return G.FORCE_LEFT;
    case G.RIGHT:
      return G.FORCE_RIGHT;
    default:
      return e;
  }
}
function lu(e) {
  return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function xs(e, t) {
  if (t === e) return !0;
  const n = Array.isArray(t), r = Array.isArray(e);
  let i;
  if (n && r) {
    if (t.length != e.length) return !1;
    for (i = 0; i < t.length; i++) if (!xs(t[i], e[i])) return !1;
    return !0;
  }
  if (n != r) return !1;
  if (t && e && typeof t == "object" && typeof e == "object") {
    const a = t instanceof Date, o = e instanceof Date;
    if (a && o) return t.getTime() == e.getTime();
    if (a != o) return !1;
    const s = t instanceof RegExp, l = e instanceof RegExp;
    if (s && l) return t.toString() == e.toString();
    if (s != l) return !1;
    const u = Object.keys(t);
    for (i = 0; i < u.length; i++) if (!Object.prototype.hasOwnProperty.call(e, u[i])) return !1;
    for (i = 0; i < u.length; i++) if (!xs(e[u[i]], t[u[i]])) return !1;
    return !0;
  } else if (t && e && typeof t == "function" && typeof e == "function")
    return t.toString() === e.toString();
  return !1;
}
class h2 {
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
    return !this.removedCount || this.insertedCount ? G.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
    this.oldSelection.end === this.oldSelection.start ? G.RIGHT : G.LEFT;
  }
}
function Y(e, t) {
  return new Y.InputMask(e, t);
}
function V0(e) {
  if (e == null) throw new Error("mask property should be defined");
  return e instanceof RegExp ? Y.MaskedRegExp : Wn(e) ? Y.MaskedPattern : e === Date ? Y.MaskedDate : e === Number ? Y.MaskedNumber : Array.isArray(e) || e === Array ? Y.MaskedDynamic : Y.Masked && e.prototype instanceof Y.Masked ? e : Y.Masked && e instanceof Y.Masked ? e.constructor : e instanceof Function ? Y.MaskedFunction : (console.warn("Mask not found for mask", e), Y.Masked);
}
function Pa(e) {
  if (!e) throw new Error("Options in not defined");
  if (Y.Masked) {
    if (e.prototype instanceof Y.Masked) return {
      mask: e
    };
    const {
      mask: t = void 0,
      ...n
    } = e instanceof Y.Masked ? {
      mask: e
    } : _h(e) && e.mask instanceof Y.Masked ? e : {};
    if (t) {
      const r = t.mask;
      return {
        ...H0(t, (i, a) => !a.startsWith("_")),
        mask: t.constructor,
        _mask: r,
        ...n
      };
    }
  }
  return _h(e) ? {
    ...e
  } : {
    mask: e
  };
}
function Sn(e) {
  if (Y.Masked && e instanceof Y.Masked) return e;
  const t = Pa(e), n = V0(t.mask);
  if (!n) throw new Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
  return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
Y.createMask = Sn;
class gd {
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
Y.MaskElement = gd;
const Ah = 90, v2 = 89;
class sl extends gd {
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
    if (this._handlers.redo && (t.keyCode === Ah && t.shiftKey && (t.metaKey || t.ctrlKey) || t.keyCode === v2 && t.ctrlKey))
      return t.preventDefault(), this._handlers.redo(t);
    if (this._handlers.undo && t.keyCode === Ah && (t.metaKey || t.ctrlKey))
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
Y.HTMLMaskElement = sl;
class g2 extends sl {
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
Y.HTMLMaskElement = sl;
class $0 extends sl {
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
    const i = this.rootElement, a = i.getSelection && i.getSelection();
    a && (a.removeAllRanges(), a.addRange(r));
  }
  /** HTMLElement value */
  get value() {
    return this.input.textContent || "";
  }
  set value(t) {
    this.input.textContent = t;
  }
}
Y.HTMLContenteditableMaskElement = $0;
class ll {
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
    this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1), this.states.push(t), this.states.length > ll.MAX_LENGTH && this.states.shift(), this.currentIndex = this.states.length - 1;
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
ll.MAX_LENGTH = 100;
class x2 {
  /**
    View element
  */
  /** Internal {@link Masked} model */
  constructor(t, n) {
    this.el = t instanceof gd ? t : t.isContentEditable && t.tagName !== "INPUT" && t.tagName !== "TEXTAREA" ? new $0(t) : new g2(t), this.masked = Sn(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new ll(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
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
    if (!(t instanceof Y.Masked) && this.masked.constructor === V0(t)) {
      this.masked.updateOptions({
        mask: t
      });
      return;
    }
    const n = t instanceof Y.Masked ? t : Sn({
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
    const n = this.masked.unmaskedValue, r = this.masked.value, i = this.masked.rawInputValue, a = this.displayValue, o = this.unmaskedValue !== n || this.value !== r || this._rawInputValue !== i;
    this._unmaskedValue = n, this._value = r, this._rawInputValue = i, this.el.value !== a && (this.el.value = a), t === "auto" ? this.alignCursor() : t != null && (this.cursorPos = t), o && this._fireChangeEvents(), !this._historyChanging && (o || this.history.isEmpty) && this.history.push({
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
    } = t, i = !this.maskEquals(n), a = this.masked.optionsIsChanged(r);
    i && (this.mask = n), a && this.masked.updateOptions(r), (i || a) && this.updateControl();
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
    this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, G.LEFT));
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
    const n = new h2({
      // new state
      value: this.el.value,
      cursorPos: this.cursorPos,
      // old state
      oldValue: this.displayValue,
      oldSelection: this._selection
    }), r = this.masked.rawInputValue, i = this.masked.splice(n.startChangePos, n.removed.length, n.inserted, n.removeDirection, {
      input: !0,
      raw: !0
    }).offset, a = r === this.masked.rawInputValue ? n.removeDirection : G.NONE;
    let o = this.masked.nearestInputPos(n.startChangePos + i, a);
    a !== G.NONE && (o = this.masked.nearestInputPos(o, G.NONE)), this.updateControl(o), delete this._inputEvent;
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
Y.InputMask = x2;
class J {
  /** Inserted symbols */
  /** Additional offset if any changes occurred before tail */
  /** Raw inserted is used by dynamic mask */
  /** Can skip chars */
  static normalize(t) {
    return Array.isArray(t) ? t : [t, new J()];
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
Y.ChangeDetails = J;
class an {
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
class Xe {
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
      ...Xe.DEFAULTS,
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
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), new an(this.extractInput(t, n), t);
  }
  /** Appends tail */
  appendTail(t) {
    return Wn(t) && (t = new an(String(t))), t.appendTo(this);
  }
  /** Appends char */
  _appendCharRaw(t, n) {
    return t ? (this._value += t, new J({
      inserted: t,
      rawInserted: t
    })) : new J();
  }
  /** Appends char */
  _appendChar(t, n, r) {
    n === void 0 && (n = {});
    const i = this.state;
    let a;
    if ([t, a] = this.doPrepareChar(t, n), t && (a = a.aggregate(this._appendCharRaw(t, n)), !a.rawInserted && this.autofix === "pad")) {
      const o = this.state;
      this.state = i;
      let s = this.pad(n);
      const l = this._appendCharRaw(t, n);
      s = s.aggregate(l), l.rawInserted || s.equals(a) ? a = s : this.state = o;
    }
    if (a.inserted) {
      let o, s = this.doValidate(n) !== !1;
      if (s && r != null) {
        const l = this.state;
        if (this.overwrite === !0) {
          o = r.state;
          for (let c = 0; c < a.rawInserted.length; ++c)
            r.unshift(this.displayValue.length - a.tailShift);
        }
        let u = this.appendTail(r);
        if (s = u.rawInserted.length === r.toString().length, !(s && u.inserted) && this.overwrite === "shift") {
          this.state = l, o = r.state;
          for (let c = 0; c < a.rawInserted.length; ++c)
            r.shift();
          u = this.appendTail(r), s = u.rawInserted.length === r.toString().length;
        }
        s && u.inserted && (this.state = l);
      }
      s || (a = new J(), this.state = i, r && o && (r.state = o));
    }
    return a;
  }
  /** Appends optional placeholder at the end */
  _appendPlaceholder() {
    return new J();
  }
  /** Appends optional eager placeholder at the end */
  _appendEager() {
    return new J();
  }
  /** Appends symbols considering flags */
  append(t, n, r) {
    if (!Wn(t)) throw new Error("value should be string");
    const i = Wn(r) ? new an(String(r)) : r;
    n != null && n.tail && (n._beforeTailState = this.state);
    let a;
    [t, a] = this.doPrepare(t, n);
    for (let o = 0; o < t.length; ++o) {
      const s = this._appendChar(t[o], n, i);
      if (!s.rawInserted && !this.doSkipInvalid(t[o], n, i)) break;
      a.aggregate(s);
    }
    return (this.eager === !0 || this.eager === "append") && n != null && n.input && t && a.aggregate(this._appendEager()), i != null && (a.tailShift += this.appendTail(i).tailShift), a;
  }
  remove(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), this._value = this.displayValue.slice(0, t) + this.displayValue.slice(n), new J();
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
    return n === void 0 && (n = {}), J.normalize(this.prepare ? this.prepare(t, this, n) : t);
  }
  /** Prepares each char before mask processing */
  doPrepareChar(t, n) {
    return n === void 0 && (n = {}), J.normalize(this.prepareChar ? this.prepareChar(t, this, n) : t);
  }
  /** Validates if value is acceptable */
  doValidate(t) {
    return (!this.validate || this.validate(this.value, this, t)) && (!this.parent || this.parent.doValidate(t));
  }
  /** Does additional processing at the end of editing */
  doCommit() {
    this.commit && this.commit(this.value, this);
  }
  splice(t, n, r, i, a) {
    r === void 0 && (r = ""), i === void 0 && (i = G.NONE), a === void 0 && (a = {
      input: !0
    });
    const o = t + n, s = this.extractTail(o), l = this.eager === !0 || this.eager === "remove";
    let u;
    l && (i = m2(i), u = this.extractInput(0, o, {
      raw: !0
    }));
    let c = t;
    const f = new J();
    if (i !== G.NONE && (c = this.nearestInputPos(t, n > 1 && t !== 0 && !l ? G.NONE : i), f.tailShift = c - t), f.aggregate(this.remove(c)), l && i !== G.NONE && u === this.rawInputValue)
      if (i === G.FORCE_LEFT) {
        let d;
        for (; u === this.rawInputValue && (d = this.displayValue.length); )
          f.aggregate(new J({
            tailShift: -1
          })).aggregate(this.remove(d - 1));
      } else i === G.FORCE_RIGHT && s.unshift();
    return f.aggregate(this.append(r, a, s));
  }
  maskEquals(t) {
    return this.mask === t;
  }
  optionsIsChanged(t) {
    return !xs(this, t);
  }
  typedValueEquals(t) {
    const n = this.typedValue;
    return t === n || Xe.EMPTY_VALUES.includes(t) && Xe.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
  }
  pad(t) {
    return new J();
  }
}
Xe.DEFAULTS = {
  skipInvalid: !0
};
Xe.EMPTY_VALUES = [void 0, null, ""];
Y.Masked = Xe;
class mr {
  /** */
  constructor(t, n) {
    t === void 0 && (t = []), n === void 0 && (n = 0), this.chunks = t, this.from = n;
  }
  toString() {
    return this.chunks.map(String).join("");
  }
  extend(t) {
    if (!String(t)) return;
    t = Wn(t) ? new an(String(t)) : t;
    const n = this.chunks[this.chunks.length - 1], r = n && // if stops are same or tail has no stop
    (n.stop === t.stop || t.stop == null) && // if tail chunk goes just after last chunk
    t.from === n.from + n.toString().length;
    if (t instanceof an)
      r ? n.extend(t.toString()) : this.chunks.push(t);
    else if (t instanceof mr) {
      if (t.stop == null) {
        let i;
        for (; t.chunks.length && t.chunks[0].stop == null; )
          i = t.chunks.shift(), i.from += t.from, this.extend(i);
      }
      t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
    }
  }
  appendTo(t) {
    if (!(t instanceof Y.MaskedPattern))
      return new an(this.toString()).appendTo(t);
    const n = new J();
    for (let r = 0; r < this.chunks.length; ++r) {
      const i = this.chunks[r], a = t._mapPosToBlock(t.displayValue.length), o = i.stop;
      let s;
      if (o != null && // if block not found or stop is behind lastBlock
      (!a || a.index <= o) && ((i instanceof mr || // for continuous block also check if stop is exist
      t._stops.indexOf(o) >= 0) && n.aggregate(t._appendPlaceholder(o)), s = i instanceof mr && t._blocks[o]), s) {
        const l = s.appendTail(i);
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
      const a = "chunks" in i ? new mr() : new an();
      return a.state = i, a;
    });
  }
  unshift(t) {
    if (!this.chunks.length || t != null && this.from >= t) return "";
    const n = t != null ? t - this.from : t;
    let r = 0;
    for (; r < this.chunks.length; ) {
      const i = this.chunks[r], a = i.unshift(n);
      if (i.toString()) {
        if (!a) break;
        ++r;
      } else
        this.chunks.splice(r, 1);
      if (a) return a;
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
class y2 {
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
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, G.FORCE_LEFT), this.offset !== 0))
        return !0;
    });
  }
  pushLeftBeforeInput() {
    return this._pushLeft(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, G.LEFT), !0;
    });
  }
  pushLeftBeforeRequired() {
    return this._pushLeft(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, G.LEFT), !0;
    });
  }
  pushRightBeforeFilled() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, G.FORCE_RIGHT), this.offset !== this.block.value.length))
        return !0;
    });
  }
  pushRightBeforeInput() {
    return this._pushRight(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, G.NONE), !0;
    });
  }
  pushRightBeforeRequired() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, G.NONE), !0;
    });
  }
}
class U0 {
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
    return t === void 0 && (t = 0), n === void 0 && (n = this._value.length), this._value = this._value.slice(0, t) + this._value.slice(n), this._value || (this._isRawInput = !1), new J();
  }
  nearestInputPos(t, n) {
    n === void 0 && (n = G.NONE);
    const r = 0, i = this._value.length;
    switch (n) {
      case G.LEFT:
      case G.FORCE_LEFT:
        return r;
      case G.NONE:
      case G.RIGHT:
      case G.FORCE_RIGHT:
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
    if (n === void 0 && (n = {}), this.isFilled) return new J();
    const r = this.eager === !0 || this.eager === "append", a = this.char === t && (this.isUnmasking || n.input || n.raw) && (!n.raw || !r) && !n.tail, o = new J({
      inserted: this.char,
      rawInserted: a ? this.char : ""
    });
    return this._value = this.char, this._isRawInput = a && (n.raw || n.input), o;
  }
  _appendEager() {
    return this._appendChar(this.char, {
      tail: !0
    });
  }
  _appendPlaceholder() {
    const t = new J();
    return this.isFilled || (this._value = t.inserted = this.char), t;
  }
  extractTail() {
    return new an("");
  }
  appendTail(t) {
    return Wn(t) && (t = new an(String(t))), t.appendTo(this);
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
class ys {
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
      displayChar: a,
      lazy: o,
      eager: s,
      ...l
    } = t;
    this.masked = Sn(l), Object.assign(this, {
      parent: n,
      isOptional: r,
      placeholderChar: i,
      displayChar: a,
      lazy: o,
      eager: s
    });
  }
  reset() {
    this.isFilled = !1, this.masked.reset();
  }
  remove(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.value.length), t === 0 && n >= 1 ? (this.isFilled = !1, this.masked.remove(t, n)) : new J();
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
    if (n === void 0 && (n = {}), this.isFilled) return new J();
    const r = this.masked.state;
    let i = this.masked._appendChar(t, this.currentMaskFlags(n));
    return i.inserted && this.doValidate(n) === !1 && (i = new J(), this.masked.state = r), !i.inserted && !this.isOptional && !this.lazy && !n.input && (i.inserted = this.placeholderChar), i.skip = !i.inserted && !this.isOptional, this.isFilled = !!i.inserted, i;
  }
  append(t, n, r) {
    return this.masked.append(t, this.currentMaskFlags(n), r);
  }
  _appendPlaceholder() {
    return this.isFilled || this.isOptional ? new J() : (this.isFilled = !0, new J({
      inserted: this.placeholderChar
    }));
  }
  _appendEager() {
    return new J();
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
    n === void 0 && (n = G.NONE);
    const r = 0, i = this.value.length, a = Math.min(Math.max(t, r), i);
    switch (n) {
      case G.LEFT:
      case G.FORCE_LEFT:
        return this.isComplete ? a : r;
      case G.RIGHT:
      case G.FORCE_RIGHT:
        return this.isComplete ? a : i;
      case G.NONE:
      default:
        return a;
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
    return new J();
  }
}
ys.DEFAULT_DEFINITIONS = {
  0: /\d/,
  a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  "*": /./
};
class w2 extends Xe {
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
Y.MaskedRegExp = w2;
class Ye extends Xe {
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
      ...Ye.DEFAULTS,
      ...t,
      definitions: Object.assign({}, ys.DEFAULT_DEFINITIONS, t == null ? void 0 : t.definitions)
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
    for (let a = 0; a < n.length; ++a) {
      if (this.blocks) {
        const u = n.slice(a), c = Object.keys(this.blocks).filter((d) => u.indexOf(d) === 0);
        c.sort((d, v) => v.length - d.length);
        const f = c[0];
        if (f) {
          const {
            expose: d,
            repeat: v,
            ...E
          } = Pa(this.blocks[f]), x = {
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            overwrite: this.overwrite,
            autofix: this.autofix,
            ...E,
            repeat: v,
            parent: this
          }, b = v != null ? new Y.RepeatBlock(
            x
            /* TODO */
          ) : Sn(x);
          b && (this._blocks.push(b), d && (this.exposeBlock = b), this._maskedBlocks[f] || (this._maskedBlocks[f] = []), this._maskedBlocks[f].push(this._blocks.length - 1)), a += f.length - 1;
          continue;
        }
      }
      let o = n[a], s = o in t;
      if (o === Ye.STOP_CHAR) {
        this._stops.push(this._blocks.length);
        continue;
      }
      if (o === "{" || o === "}") {
        r = !r;
        continue;
      }
      if (o === "[" || o === "]") {
        i = !i;
        continue;
      }
      if (o === Ye.ESCAPE_CHAR) {
        if (++a, o = n[a], !o) break;
        s = !1;
      }
      const l = s ? new ys({
        isOptional: i,
        lazy: this.lazy,
        eager: this.eager,
        placeholderChar: this.placeholderChar,
        displayChar: this.displayChar,
        ...Pa(t[o]),
        parent: this
      }) : new U0({
        char: o,
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
    this._blocks.forEach((i, a) => i.state = n[a]), super.state = r;
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
    const n = new J();
    let r = (t = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : t.index;
    if (r == null) return n;
    this._blocks[r].isFilled && ++r;
    for (let i = r; i < this._blocks.length; ++i) {
      const a = this._blocks[i]._appendEager();
      if (!a.inserted) break;
      n.aggregate(a);
    }
    return n;
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const r = this._mapPosToBlock(this.displayValue.length), i = new J();
    if (!r) return i;
    for (let o = r.index, s; s = this._blocks[o]; ++o) {
      var a;
      const l = s._appendChar(t, {
        ...n,
        _beforeTailState: (a = n._beforeTailState) == null || (a = a._blocks) == null ? void 0 : a[o]
      });
      if (i.aggregate(l), l.consumed) break;
    }
    return i;
  }
  extractTail(t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length);
    const r = new mr();
    return t === n || this._forEachBlocksInRange(t, n, (i, a, o, s) => {
      const l = i.extractTail(o, s);
      l.stop = this._findStopBefore(a), l.from = this._blockStartPos(a), l instanceof mr && (l.blockIndex = a), r.extend(l);
    }), r;
  }
  extractInput(t, n, r) {
    if (t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), r === void 0 && (r = {}), t === n) return "";
    let i = "";
    return this._forEachBlocksInRange(t, n, (a, o, s, l) => {
      i += a.extractInput(s, l, r);
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
    const n = new J();
    if (this.lazy && t == null) return n;
    const r = this._mapPosToBlock(this.displayValue.length);
    if (!r) return n;
    const i = r.index, a = t ?? this._blocks.length;
    return this._blocks.slice(i, a).forEach((o) => {
      if (!o.lazy || t != null) {
        var s;
        n.aggregate(o._appendPlaceholder((s = o._blocks) == null ? void 0 : s.length));
      }
    }), n;
  }
  /** Finds block in pos */
  _mapPosToBlock(t) {
    let n = "";
    for (let r = 0; r < this._blocks.length; ++r) {
      const i = this._blocks[r], a = n.length;
      if (n += i.displayValue, t <= n.length)
        return {
          index: r,
          offset: t - a
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
      const a = this._mapPosToBlock(n), o = a && i.index === a.index, s = i.offset, l = a && o ? a.offset : this._blocks[i.index].displayValue.length;
      if (r(this._blocks[i.index], i.index, s, l), a && !o) {
        for (let u = i.index + 1; u < a.index; ++u)
          r(this._blocks[u], u, 0, this._blocks[u].displayValue.length);
        r(this._blocks[a.index], a.index, 0, a.offset);
      }
    }
  }
  remove(t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length);
    const r = super.remove(t, n);
    return this._forEachBlocksInRange(t, n, (i, a, o, s) => {
      r.aggregate(i.remove(o, s));
    }), r;
  }
  nearestInputPos(t, n) {
    if (n === void 0 && (n = G.NONE), !this._blocks.length) return 0;
    const r = new y2(this, t);
    if (n === G.NONE)
      return r.pushRightBeforeInput() || (r.popState(), r.pushLeftBeforeInput()) ? r.pos : this.displayValue.length;
    if (n === G.LEFT || n === G.FORCE_LEFT) {
      if (n === G.LEFT) {
        if (r.pushRightBeforeFilled(), r.ok && r.pos === t) return t;
        r.popState();
      }
      if (r.pushLeftBeforeInput(), r.pushLeftBeforeRequired(), r.pushLeftBeforeFilled(), n === G.LEFT) {
        if (r.pushRightBeforeInput(), r.pushRightBeforeRequired(), r.ok && r.pos <= t || (r.popState(), r.ok && r.pos <= t)) return r.pos;
        r.popState();
      }
      return r.ok ? r.pos : n === G.FORCE_LEFT ? 0 : (r.popState(), r.ok || (r.popState(), r.ok) ? r.pos : 0);
    }
    return n === G.RIGHT || n === G.FORCE_RIGHT ? (r.pushRightBeforeInput(), r.pushRightBeforeRequired(), r.pushRightBeforeFilled() ? r.pos : n === G.FORCE_RIGHT ? this.displayValue.length : (r.popState(), r.ok || (r.popState(), r.ok) ? r.pos : this.nearestInputPos(t, G.LEFT))) : t;
  }
  totalInputPositions(t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length);
    let r = 0;
    return this._forEachBlocksInRange(t, n, (i, a, o, s) => {
      r += i.totalInputPositions(o, s);
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
    const n = new J();
    return this._forEachBlocksInRange(0, this.displayValue.length, (r) => n.aggregate(r.pad(t))), n;
  }
}
Ye.DEFAULTS = {
  ...Xe.DEFAULTS,
  lazy: !0,
  placeholderChar: "_"
};
Ye.STOP_CHAR = "`";
Ye.ESCAPE_CHAR = "\\";
Ye.InputDefinition = ys;
Ye.FixedDefinition = U0;
Y.MaskedPattern = Ye;
class Ho extends Ye {
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
      autofix: a = this.autofix,
      ...o
    } = t;
    this.to = n, this.from = r, this.maxLength = Math.max(String(n).length, i), this.autofix = a;
    const s = String(this.from).padStart(this.maxLength, "0"), l = String(this.to).padStart(this.maxLength, "0");
    let u = 0;
    for (; u < l.length && l[u] === s[u]; ) ++u;
    o.mask = l.slice(0, u).replace(/0/g, "\\0") + "0".repeat(this.maxLength - u), super._update(o);
  }
  get isComplete() {
    return super.isComplete && !!this.value;
  }
  boundaries(t) {
    let n = "", r = "";
    const [, i, a] = t.match(/^(\D*)(\d*)(\D*)/) || [];
    return a && (n = "0".repeat(i.length) + a, r = "9".repeat(i.length) + a), n = n.padEnd(this.maxLength, "0"), r = r.padEnd(this.maxLength, "9"), [n, r];
  }
  doPrepareChar(t, n) {
    n === void 0 && (n = {});
    let r;
    return [t, r] = super.doPrepareChar(t.replace(/\D/g, ""), n), t || (r.skip = !this.isComplete), [t, r];
  }
  _appendCharRaw(t, n) {
    if (n === void 0 && (n = {}), !this.autofix || this.value.length + 1 > this.maxLength) return super._appendCharRaw(t, n);
    const r = String(this.from).padStart(this.maxLength, "0"), i = String(this.to).padStart(this.maxLength, "0"), [a, o] = this.boundaries(this.value + t);
    return Number(o) < this.from ? super._appendCharRaw(r[this.value.length], n) : Number(a) > this.to ? !n.tail && this.autofix === "pad" && this.value.length + 1 < this.maxLength ? super._appendCharRaw(r[this.value.length], n).aggregate(this._appendCharRaw(t, n)) : super._appendCharRaw(i[this.value.length], n) : super._appendCharRaw(t, n);
  }
  doValidate(t) {
    const n = this.value;
    if (n.search(/[^0]/) === -1 && n.length <= this._matchFrom) return !0;
    const [i, a] = this.boundaries(n);
    return this.from <= Number(a) && Number(i) <= this.to && super.doValidate(t);
  }
  pad(t) {
    const n = new J();
    if (this.value.length === this.maxLength) return n;
    const r = this.value, i = this.maxLength - this.value.length;
    if (i) {
      this.reset();
      for (let a = 0; a < i; ++a)
        n.aggregate(super._appendCharRaw("0", t));
      r.split("").forEach((a) => this._appendCharRaw(a));
    }
    return n;
  }
}
Y.MaskedRange = Ho;
const E2 = "d{.}`m{.}`Y";
class vn extends Ye {
  static extractPatternOptions(t) {
    const {
      mask: n,
      pattern: r,
      ...i
    } = t;
    return {
      ...i,
      mask: Wn(n) ? n : r
    };
  }
  /** Pattern mask for date according to {@link MaskedDate#format} */
  /** Start date */
  /** End date */
  /** Format typed value to string */
  /** Parse string to get typed value */
  constructor(t) {
    super(vn.extractPatternOptions({
      ...vn.DEFAULTS,
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
      ...a
    } = {
      ...vn.DEFAULTS,
      ...t
    }, o = Object.assign({}, vn.GET_DEFAULT_BLOCKS());
    t.min && (o.Y.from = t.min.getFullYear()), t.max && (o.Y.to = t.max.getFullYear()), t.min && t.max && o.Y.from === o.Y.to && (o.m.from = t.min.getMonth() + 1, o.m.to = t.max.getMonth() + 1, o.m.from === o.m.to && (o.d.from = t.min.getDate(), o.d.to = t.max.getDate())), Object.assign(o, this.blocks, i), super._update({
      ...a,
      mask: Wn(n) ? n : r,
      blocks: o
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
    return super.optionsIsChanged(vn.extractPatternOptions(t));
  }
}
vn.GET_DEFAULT_BLOCKS = () => ({
  d: {
    mask: Ho,
    from: 1,
    to: 31,
    maxLength: 2
  },
  m: {
    mask: Ho,
    from: 1,
    to: 12,
    maxLength: 2
  },
  Y: {
    mask: Ho,
    from: 1900,
    to: 9999
  }
});
vn.DEFAULTS = {
  ...Ye.DEFAULTS,
  mask: Date,
  pattern: E2,
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
Y.MaskedDate = vn;
class ul extends Xe {
  constructor(t) {
    super({
      ...ul.DEFAULTS,
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
      } = Pa(n), a = Sn({
        overwrite: this._overwrite,
        eager: this._eager,
        skipInvalid: this._skipInvalid,
        ...i
      });
      return r && (this.exposeMask = a), a;
    }) : []);
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const r = this._applyDispatch(t, n);
    return this.currentMask && r.aggregate(this.currentMask._appendChar(t, this.currentMaskFlags(n))), r;
  }
  _applyDispatch(t, n, r) {
    t === void 0 && (t = ""), n === void 0 && (n = {}), r === void 0 && (r = "");
    const i = n.tail && n._beforeTailState != null ? n._beforeTailState._value : this.value, a = this.rawInputValue, o = n.tail && n._beforeTailState != null ? n._beforeTailState._rawInputValue : a, s = a.slice(o.length), l = this.currentMask, u = new J(), c = l == null ? void 0 : l.state;
    return this.currentMask = this.doDispatch(t, {
      ...n
    }, r), this.currentMask && (this.currentMask !== l ? (this.currentMask.reset(), o && (this.currentMask.append(o, {
      raw: !0
    }), u.tailShift = this.currentMask.value.length - i.length), s && (u.tailShift += this.currentMask.append(s, {
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
    const n = new J();
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
      let a;
      [r, a] = super.doPrepare(r, this.currentMaskFlags(n)), i = i.aggregate(a);
    }
    return [r, i];
  }
  doPrepareChar(t, n) {
    n === void 0 && (n = {});
    let [r, i] = super.doPrepareChar(t, n);
    if (this.currentMask) {
      let a;
      [r, a] = super.doPrepareChar(r, this.currentMaskFlags(n)), i = i.aggregate(a);
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
    const r = new J();
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
      ...a
    } = t;
    n && this.compiledMasks.forEach((o, s) => o.state = n[s]), r != null && (this.currentMask = r, this.currentMask.state = i), super.state = a;
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
        ...a
      } = t[r];
      return xs(n, a) && n.maskEquals(i);
    }) : super.maskEquals(t);
  }
  typedValueEquals(t) {
    var n;
    return !!((n = this.currentMask) != null && n.typedValueEquals(t));
  }
}
ul.DEFAULTS = {
  ...Xe.DEFAULTS,
  dispatch: (e, t, n, r) => {
    if (!t.compiledMasks.length) return;
    const i = t.rawInputValue, a = t.compiledMasks.map((o, s) => {
      const l = t.currentMask === o, u = l ? o.displayValue.length : o.nearestInputPos(o.displayValue.length, G.FORCE_LEFT);
      return o.rawInputValue !== i ? (o.reset(), o.append(i, {
        raw: !0
      })) : l || o.remove(u), o.append(e, t.currentMaskFlags(n)), o.appendTail(r), {
        index: s,
        weight: o.rawInputValue.length,
        totalInputPositions: o.totalInputPositions(0, Math.max(u, o.nearestInputPos(o.displayValue.length, G.FORCE_LEFT)))
      };
    });
    return a.sort((o, s) => s.weight - o.weight || s.totalInputPositions - o.totalInputPositions), t.compiledMasks[a[0].index];
  }
};
Y.MaskedDynamic = ul;
class cl extends Ye {
  constructor(t) {
    super({
      ...cl.DEFAULTS,
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
      const i = n.map((s) => s.length), a = Math.min(...i), o = Math.max(...i) - a;
      r.mask = "*".repeat(a), o && (r.mask += "[" + "*".repeat(o) + "]"), this.enum = n;
    }
    super._update(r);
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const r = Math.min(this.nearestInputPos(0, G.FORCE_RIGHT), this.value.length), i = this.enum.filter((a) => this.matchValue(a, this.unmaskedValue + t, r));
    if (i.length) {
      i.length === 1 && this._forEachBlocksInRange(0, this.value.length, (o, s) => {
        const l = i[0][s];
        s >= this.value.length || l === o.value || (o.reset(), o._appendChar(l, n));
      });
      const a = super._appendCharRaw(i[0][this.value.length], n);
      return i.length === 1 && i[0].slice(this.unmaskedValue.length).split("").forEach((o) => a.aggregate(super._appendCharRaw(o))), a;
    }
    return new J({
      skip: !this.isComplete
    });
  }
  extractTail(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), new an("", t);
  }
  remove(t, n) {
    if (t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), t === n) return new J();
    const r = Math.min(super.nearestInputPos(0, G.FORCE_RIGHT), this.value.length);
    let i;
    for (i = t; i >= 0 && !(this.enum.filter((s) => this.matchValue(s, this.value.slice(r, i), r)).length > 1); --i)
      ;
    const a = super.remove(i, n);
    return a.tailShift += i - t, a;
  }
  get isComplete() {
    return this.enum.indexOf(this.value) >= 0;
  }
}
cl.DEFAULTS = {
  ...Ye.DEFAULTS,
  matchValue: (e, t, n) => e.indexOf(t, n) === n
};
Y.MaskedEnum = cl;
class b2 extends Xe {
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
Y.MaskedFunction = b2;
var G0;
class yt extends Xe {
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
      ...yt.DEFAULTS,
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
    const t = "^" + (this.allowNegative ? "[+|\\-]?" : ""), n = "\\d*", r = (this.scale ? "(" + lu(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
    this._numberRegExp = new RegExp(t + n + r), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(lu).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(lu(this.thousandsSeparator), "g");
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
    const a = this._value;
    this._value += t;
    const o = this.number;
    let s = !isNaN(o), l = !1;
    if (s) {
      let d;
      this.min != null && this.min < 0 && this.number < this.min && (d = this.min), this.max != null && this.max > 0 && this.number > this.max && (d = this.max), d != null && (this.autofix ? (this._value = this.format(d, this).replace(yt.UNMASKED_RADIX, this.radix), l || (l = a === this._value && !n.tail)) : s = !1), s && (s = !!this._value.match(this._numberRegExp));
    }
    let u;
    s ? u = new J({
      inserted: this._value.slice(a.length),
      rawInserted: l ? "" : t,
      skip: l
    }) : (this._value = a, u = new J()), this._value = this._insertThousandsSeparators(this._value);
    const c = n.tail && n._beforeTailState ? n._beforeTailState._value : this._value, f = this._separatorsCountFromSlice(c);
    return u.tailShift += (f - i) * this.thousandsSeparator.length, u;
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
    const r = this.value.slice(0, t), i = this.value.slice(n), a = this._separatorsCount(r.length);
    this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(r + i));
    const o = this._separatorsCountFromSlice(r);
    return new J({
      tailShift: (o - a) * this.thousandsSeparator.length
    });
  }
  nearestInputPos(t, n) {
    if (!this.thousandsSeparator) return t;
    switch (n) {
      case G.NONE:
      case G.LEFT:
      case G.FORCE_LEFT: {
        const r = this._findSeparatorAround(t - 1);
        if (r >= 0) {
          const i = r + this.thousandsSeparator.length;
          if (t < i || this.value.length <= i || n === G.FORCE_LEFT)
            return r;
        }
        break;
      }
      case G.RIGHT:
      case G.FORCE_RIGHT: {
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
    return n[0] = n[0].replace(/^(\D*)(0*)(\d*)/, (r, i, a, o) => i + o), t.length && !/\d$/.test(n[0]) && (n[0] = n[0] + "0"), n.length > 1 && (n[1] = n[1].replace(/0*$/, ""), n[1].length || (n.length = 1)), this._insertThousandsSeparators(n.join(this.radix));
  }
  _padFractionalZeros(t) {
    if (!t) return t;
    const n = t.split(this.radix);
    return n.length < 2 && n.push(""), n[1] = n[1].padEnd(this.scale, "0"), n.join(this.radix);
  }
  doSkipInvalid(t, n, r) {
    n === void 0 && (n = {});
    const i = this.scale === 0 && t !== this.thousandsSeparator && (t === this.radix || t === yt.UNMASKED_RADIX || this.mapToRadix.includes(t));
    return super.doSkipInvalid(t, n, r) && !i;
  }
  get unmaskedValue() {
    return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, yt.UNMASKED_RADIX);
  }
  set unmaskedValue(t) {
    super.unmaskedValue = t;
  }
  get typedValue() {
    return this.parse(this.unmaskedValue, this);
  }
  set typedValue(t) {
    this.rawInputValue = this.format(t, this).replace(yt.UNMASKED_RADIX, this.radix);
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
    return (super.typedValueEquals(t) || yt.EMPTY_VALUES.includes(t) && yt.EMPTY_VALUES.includes(this.typedValue)) && !(t === 0 && this.value === "");
  }
}
G0 = yt;
yt.UNMASKED_RADIX = ".";
yt.EMPTY_VALUES = [...Xe.EMPTY_VALUES, 0];
yt.DEFAULTS = {
  ...Xe.DEFAULTS,
  mask: Number,
  radix: ",",
  thousandsSeparator: "",
  mapToRadix: [G0.UNMASKED_RADIX],
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
Y.MaskedNumber = yt;
const Dc = {
  MASKED: "value",
  UNMASKED: "unmaskedValue",
  TYPED: "typedValue"
};
function W0(e, t, n) {
  t === void 0 && (t = Dc.MASKED), n === void 0 && (n = Dc.MASKED);
  const r = Sn(e);
  return (i) => r.runIsolated((a) => (a[t] = i, a[n]));
}
function k2(e, t, n, r) {
  return W0(t, n, r)(e);
}
Y.PIPE_TYPE = Dc;
Y.createPipe = W0;
Y.pipe = k2;
class C2 extends Ye {
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
      repeat: a,
      ...o
    } = Pa(t);
    this._blockOpts = Object.assign({}, this._blockOpts, o);
    const s = Sn(this._blockOpts);
    this.repeat = (n = (r = a ?? s.repeat) != null ? r : this.repeat) != null ? n : 1 / 0, super._update({
      mask: "m".repeat(Math.max(this.repeatTo === 1 / 0 && ((i = this._blocks) == null ? void 0 : i.length) || 0, this.repeatFrom)),
      blocks: {
        m: s
      },
      eager: s.eager,
      overwrite: s.overwrite,
      skipInvalid: s.skipInvalid,
      lazy: s.lazy,
      placeholderChar: s.placeholderChar,
      displayChar: s.displayChar
    });
  }
  _allocateBlock(t) {
    if (t < this._blocks.length) return this._blocks[t];
    if (this.repeatTo === 1 / 0 || this._blocks.length < this.repeatTo)
      return this._blocks.push(Sn(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const r = new J();
    for (
      let l = (i = (a = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : a.index) != null ? i : Math.max(this._blocks.length - 1, 0), u, c;
      // try to get a block or
      // try to allocate a new block if not allocated already
      u = (o = this._blocks[l]) != null ? o : c = !c && this._allocateBlock(l);
      ++l
    ) {
      var i, a, o, s;
      const f = u._appendChar(t, {
        ...n,
        _beforeTailState: (s = n._beforeTailState) == null || (s = s._blocks) == null ? void 0 : s[l]
      });
      if (f.skip && c) {
        this._blocks.pop(), this.mask = this.mask.slice(1);
        break;
      }
      if (r.aggregate(f), f.consumed) break;
    }
    return r;
  }
  _trimEmptyTail(t, n) {
    var r, i;
    t === void 0 && (t = 0);
    const a = Math.max(((r = this._mapPosToBlock(t)) == null ? void 0 : r.index) || 0, this.repeatFrom, 0);
    let o;
    n != null && (o = (i = this._mapPosToBlock(n)) == null ? void 0 : i.index), o == null && (o = this._blocks.length - 1);
    let s = 0;
    for (let l = o; a <= l && !this._blocks[l].unmaskedValue; --l, ++s)
      ;
    s && (this._blocks.splice(o - s + 1, s), this.mask = this.mask.slice(s));
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
Y.RepeatBlock = C2;
try {
  globalThis.IMask = Y;
} catch {
}
const q0 = {
  // common
  mask: p.oneOfType([p.array, p.func, p.string, p.instanceOf(RegExp), p.oneOf([Date, Number, Y.Masked]), p.instanceOf(Y.Masked)]),
  value: p.any,
  unmask: p.oneOfType([p.bool, p.oneOf(["typed"])]),
  prepare: p.func,
  prepareChar: p.func,
  validate: p.func,
  commit: p.func,
  overwrite: p.oneOfType([p.bool, p.oneOf(["shift"])]),
  eager: p.oneOfType([p.bool, p.oneOf(["append", "remove"])]),
  skipInvalid: p.bool,
  // events
  onAccept: p.func,
  onComplete: p.func,
  // pattern
  placeholderChar: p.string,
  displayChar: p.string,
  lazy: p.bool,
  definitions: p.object,
  blocks: p.object,
  // enum
  enum: p.arrayOf(p.string),
  // range
  maxLength: p.number,
  from: p.number,
  to: p.number,
  // date
  pattern: p.string,
  format: p.func,
  parse: p.func,
  autofix: p.oneOfType([p.bool, p.oneOf(["pad"])]),
  // number
  radix: p.string,
  thousandsSeparator: p.string,
  mapToRadix: p.arrayOf(p.string),
  scale: p.number,
  normalizeZeros: p.bool,
  padFractionalZeros: p.bool,
  min: p.oneOfType([p.number, p.instanceOf(Date)]),
  max: p.oneOfType([p.number, p.instanceOf(Date)]),
  // dynamic
  dispatch: p.func,
  // ref
  inputRef: p.oneOfType([p.func, p.shape({
    current: p.object
  })])
}, K0 = Object.keys(q0).filter((e) => e !== "value"), S2 = ["value", "unmask", "onAccept", "onComplete", "inputRef"], _2 = K0.filter((e) => S2.indexOf(e) < 0);
function A2(e) {
  var t;
  const n = (t = class extends m.Component {
    constructor(a) {
      super(a), this._inputRef = this._inputRef.bind(this);
    }
    componentDidMount() {
      this.props.mask && this.initMask();
    }
    componentDidUpdate() {
      const a = this.props, o = this._extractMaskOptionsFromProps(a);
      if (o.mask)
        this.maskRef ? (this.maskRef.updateOptions(o), "value" in a && a.value !== void 0 && (this.maskValue = a.value)) : this.initMask(o);
      else if (this.destroyMask(), "value" in a && a.value !== void 0) {
        var s;
        (s = this.element) != null && s.isContentEditable && this.element.tagName !== "INPUT" && this.element.tagName !== "TEXTAREA" ? this.element.textContent = a.value : this.element.value = a.value;
      }
    }
    componentWillUnmount() {
      this.destroyMask();
    }
    _inputRef(a) {
      this.element = a, this.props.inputRef && (Object.prototype.hasOwnProperty.call(this.props.inputRef, "current") ? this.props.inputRef.current = a : this.props.inputRef(a));
    }
    initMask(a) {
      a === void 0 && (a = this._extractMaskOptionsFromProps(this.props)), this.maskRef = Y(this.element, a).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
    }
    destroyMask() {
      this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
    }
    _extractMaskOptionsFromProps(a) {
      const {
        ...o
      } = a;
      return Object.keys(o).filter((s) => _2.indexOf(s) < 0).forEach((s) => {
        delete o[s];
      }), o;
    }
    _extractNonMaskProps(a) {
      const {
        ...o
      } = a;
      return K0.forEach((s) => {
        s !== "maxLength" && delete o[s];
      }), "defaultValue" in o || (o.defaultValue = a.mask ? "" : o.value), delete o.value, o;
    }
    get maskValue() {
      return this.maskRef ? this.props.unmask === "typed" ? this.maskRef.typedValue : this.props.unmask ? this.maskRef.unmaskedValue : this.maskRef.value : "";
    }
    set maskValue(a) {
      this.maskRef && (a = a == null && this.props.unmask !== "typed" ? "" : a, this.props.unmask === "typed" ? this.maskRef.typedValue = a : this.props.unmask ? this.maskRef.unmaskedValue = a : this.maskRef.value = a);
    }
    _onAccept(a) {
      this.props.onAccept && this.maskRef && this.props.onAccept(this.maskValue, this.maskRef, a);
    }
    _onComplete(a) {
      this.props.onComplete && this.maskRef && this.props.onComplete(this.maskValue, this.maskRef, a);
    }
    render() {
      return m.createElement(e, {
        ...this._extractNonMaskProps(this.props),
        inputRef: this._inputRef
      });
    }
  }, t.displayName = void 0, t.propTypes = void 0, t), r = e.displayName || e.name || "Component";
  return n.displayName = "IMask(" + r + ")", n.propTypes = q0, m.forwardRef((i, a) => m.createElement(n, {
    ...i,
    ref: a
  }));
}
const T2 = A2((e) => {
  let {
    inputRef: t,
    ...n
  } = e;
  return m.createElement("input", {
    ...n,
    ref: t
  });
}), N2 = (e, t) => m.createElement(T2, {
  ...e,
  ref: t
}), I2 = m.forwardRef(N2), P2 = (e = {}) => Object.entries(e).reduce((t, [n, r]) => (r !== void 0 && (t[n] = r), t), {}), xr = (...e) => (n) => {
  e.filter((r) => typeof r == "function").forEach((r) => r(n));
}, F2 = ({
  defaultValue: e,
  value: t
}) => {
  const [n, r] = w.useState(!!e || e === 0);
  return [!!t || t === 0 || n, (o) => r(!!o.target.value)];
}, Th = (e, t) => {
  const [n, r] = w.useState([]), i = (l) => (r((u) => [...u, l]), l), a = () => {
    const l = Xp(`${e}-`);
    return i(l);
  }, o = (l) => {
    r((u) => u.filter((c) => c !== l));
  };
  return [n, (l) => {
    const [u, c] = w.useState(l);
    return w.useEffect(() => (l ? i(l) : u || c(a()), () => o(u)), [u, l]), u;
  }];
}, uu = (e) => e, R2 = () => {
}, Q0 = /* @__PURE__ */ m.createContext({
  getControlProps: uu,
  useSetIsControlGroupEffect: R2,
  getLabelProps: uu,
  getDescriptorProps: uu,
  hasFormGroupProvider: !1
}), Bt = () => m.useContext(Q0);
function O2(e) {
  const [t, n] = w.useState(e);
  return [t, (i) => {
    w.useEffect(() => n(i), [i]);
  }];
}
function pl({
  children: e,
  controlId: t,
  isInvalid: n,
  isValid: r,
  size: i
}) {
  const a = w.useMemo(() => t || Xp("form-field"), [t]), [o, s] = Th(a), [l, u] = Th(a), [c, f] = O2(!1), x = {
    getControlProps: w.useCallback((b) => {
      const g = c ? l : void 0;
      return P2({
        ...b,
        "aria-describedby": F(b["aria-describedby"], o) || void 0,
        "aria-labelledby": F(b["aria-labelledby"], g) || void 0,
        id: a
      });
    }, [c, o, l, a]),
    getLabelProps: (b) => {
      const g = u(b == null ? void 0 : b.id);
      return c ? {
        ...b,
        id: g
      } : {
        ...b,
        htmlFor: a
      };
    },
    getDescriptorProps: (b) => {
      const g = s(b == null ? void 0 : b.id);
      return {
        ...b,
        id: g
      };
    },
    useSetIsControlGroupEffect: f,
    isControlGroup: c,
    controlId: a,
    isInvalid: n,
    isValid: r,
    size: i,
    hasFormGroupProvider: !0
  };
  return /* @__PURE__ */ m.createElement(Q0.Provider, {
    value: x
  }, e);
}
const _i = {
  SMALL: "sm",
  LARGE: "lg"
}, $t = {
  DEFAULT: "default",
  VALID: "valid",
  INVALID: "invalid",
  WARNING: "warning",
  CRITERIA_EMPTY: "criteria-empty",
  CRITERIA_VALID: "criteria-valid",
  CRITERIA_INVALID: "criteria-invalid"
}, D2 = {
  [$t.DEFAULT]: null,
  [$t.VALID]: B0,
  [$t.INVALID]: z0,
  [$t.WARNING]: f2,
  [$t.CRITERIA_EMPTY]: d2,
  [$t.CRITERIA_VALID]: o2,
  [$t.CRITERIA_INVALID]: a2
}, M2 = ({
  isInvalid: e,
  isValid: t
}) => t ? $t.VALID : e ? $t.INVALID : $t.DEFAULT;
function xd({
  type: e,
  customIcon: t
}) {
  if (t)
    return t;
  const n = D2[e];
  return n ? /* @__PURE__ */ m.createElement(kt, {
    src: n
  }) : null;
}
xd.propTypes = {
  type: p.oneOf(Object.values($t)),
  customIcon: p.node
};
xd.defaultProps = {
  type: void 0,
  customIcon: void 0
};
function dl({
  children: e,
  type: t,
  icon: n,
  muted: r,
  hasIcon: i,
  ...a
}) {
  const o = F(a.className, "pgn__form-text", `pgn__form-text-${t}`, {
    "text-muted": r
  });
  return /* @__PURE__ */ m.createElement("div", {
    ...a,
    className: o
  }, i && /* @__PURE__ */ m.createElement(xd, {
    customIcon: n,
    type: t
  }), /* @__PURE__ */ m.createElement("div", null, e));
}
const L2 = ["default", "valid", "invalid", "warning", "criteria-empty", "criteria-valid", "criteria-invalid"];
dl.propTypes = {
  /** Specifies contents of the component. */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: p.bool,
  /** Specifies text type, this affects styling. */
  type: p.oneOf(L2),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: p.node,
  /** Specifies whether to show text with muted styling. */
  muted: p.bool
};
dl.defaultProps = {
  hasIcon: !0,
  type: "default",
  icon: void 0,
  className: void 0,
  muted: !1
};
function Yn({
  children: e,
  ...t
}) {
  const {
    getDescriptorProps: n,
    isInvalid: r,
    isValid: i
  } = Bt(), a = n(t), o = F("pgn__form-control-description", t.className), s = t.type || M2({
    isInvalid: r,
    isValid: i
  });
  return /* @__PURE__ */ m.createElement(dl, {
    ...a,
    className: o,
    type: s
  }, e);
}
const j2 = ["default", "valid", "invalid", "warning", "criteria-empty", "criteria-valid", "criteria-invalid"];
Yn.propTypes = {
  /** Specifies contents of the component. */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: p.bool,
  /** Specifies feedback type, this affects styling. */
  type: p.oneOf(j2),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: p.node,
  /** Specifies whether to show feedback with muted styling. */
  muted: p.bool
};
Yn.defaultProps = {
  hasIcon: !0,
  type: void 0,
  icon: void 0,
  className: void 0,
  muted: !1
};
function X0({
  children: e
}) {
  const {
    controlId: t
  } = Bt();
  return /* @__PURE__ */ m.createElement("div", {
    className: "pgn__form-control-floating-label"
  }, /* @__PURE__ */ m.createElement("div", {
    className: "pgn__form-control-floating-label-content"
  }, /* @__PURE__ */ m.createElement("label", {
    className: "pgn__form-control-floating-label-text",
    htmlFor: t
  }, e)));
}
X0.propTypes = {
  children: p.node.isRequired
};
function ws({
  children: e,
  location: t
}) {
  return /* @__PURE__ */ m.createElement("div", {
    className: `pgn__form-control-decorator pgn__form-control-decorator-${t}`
  }, e);
}
ws.propTypes = {
  children: p.node.isRequired,
  location: p.oneOf(["leading", "trailing"])
};
ws.defaultProps = {
  location: "leading"
};
function yd({
  children: e,
  leadingElement: t,
  trailingElement: n,
  floatingLabel: r,
  className: i,
  ...a
}) {
  const o = Bt(), s = a.size || o.size;
  return /* @__PURE__ */ m.createElement("div", {
    className: F("pgn__form-control-decorator-group", {
      "has-prepended-node": !!t,
      "has-appended-node": !!n,
      "has-leading-element": !!t,
      "has-trailing-element": !!n,
      "has-floating-label": !!r,
      "pgn__form-control-decorator-group-lg": s === _i.LARGE,
      "pgn__form-control-decorator-group-sm": s === _i.SMALL
    }, i),
    ...a
  }, e, t && /* @__PURE__ */ m.createElement(ws, {
    location: "leading"
  }, t), n && /* @__PURE__ */ m.createElement(ws, {
    location: "trailing"
  }, n), r && /* @__PURE__ */ m.createElement(X0, null, r));
}
yd.propTypes = {
  children: p.node.isRequired,
  leadingElement: p.node,
  trailingElement: p.node,
  floatingLabel: p.node,
  className: p.string,
  size: p.oneOf([_i.SMALL, _i.LARGE])
};
yd.defaultProps = {
  leadingElement: void 0,
  trailingElement: void 0,
  floatingLabel: void 0,
  className: void 0,
  size: void 0
};
const Mi = /* @__PURE__ */ m.forwardRef(({
  as: e,
  className: t,
  controlClassName: n,
  leadingElement: r,
  trailingElement: i,
  floatingLabel: a,
  autoResize: o,
  onChange: s,
  inputMask: l,
  ...u
}, c) => {
  const {
    isInvalid: f,
    isValid: d,
    getControlProps: v,
    ...E
  } = Bt(), x = m.useRef(), b = c || x, g = u.size || E.size, [h, y] = F2({
    defaultValue: u.defaultValue,
    value: u.value
  }), k = w.useCallback(() => {
    e === "textarea" && o && (!b.current.initialHeight && !b.current.offsets && (b.current.initialHeight = b.current.offsetHeight, b.current.offsets = b.current.offsetHeight - b.current.clientHeight), b.current.style.height = `${b.current.initialHeight}px`, b.current.style.height = `${b.current.scrollHeight + b.current.offsets}px`);
  }, [e, o, b]);
  w.useEffect(() => {
    k();
  }, [k]);
  const S = v({
    ...u,
    // eslint-disable-next-line react/prop-types
    onBlur: xr(y, u.onBlur)
  }), _ = (A) => {
    k(), s && s(A);
  };
  return /* @__PURE__ */ m.createElement(yd, {
    size: g,
    leadingElement: r,
    trailingElement: i,
    floatingLabel: a,
    className: t
  }, /* @__PURE__ */ m.createElement(S0, {
    as: l ? I2 : e,
    ref: b,
    size: g,
    isInvalid: f,
    isValid: d,
    className: F(n, {
      "has-value": h
    }),
    onChange: _,
    mask: l,
    ...S
  }));
}), B2 = ["sm", "lg"];
Mi.Feedback = Yn;
Mi.Description = Yn;
Mi.propTypes = {
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies base element for the control component. */
  as: p.elementType,
  /** Specifies function that is triggered on input value change. */
  onChange: p.func,
  /** Specifies default value of the input component. */
  defaultValue: p.oneOfType([p.string, p.number]),
  /** Specifies current value of the input component. */
  value: p.oneOfType([p.string, p.number]),
  /** Specifies id of the control component. */
  id: p.string,
  /** Specifies class name for the control component. */
  controlClassName: p.string,
  /** Specifies size for the control component. */
  size: p.oneOf(B2),
  /** Specifies leading element to display for the input component. */
  leadingElement: p.node,
  /** Specifies trailing element to display for the input component. */
  trailingElement: p.node,
  /** Specifies floating label to display for the input component. */
  floatingLabel: p.node,
  /** Specifies whether to render input as plain text. */
  plaintext: p.bool,
  /** Specifies whether to display control in valid state, this affects styling. */
  isValid: p.bool,
  /** Specifies whether to display control in invalid state, this affects styling. */
  isInvalid: p.bool,
  /** Only for `as="textarea"`. Specifies whether the input can be resized according to the height of content. */
  autoResize: p.bool,
  /** Specifies what format to use for the input mask. */
  inputMask: p.string
};
Mi.defaultProps = {
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
function wd({
  children: e,
  isInline: t = !1,
  ...n
}) {
  const {
    size: r,
    isControlGroup: i,
    getLabelProps: a
  } = Bt(), o = F("pgn__form-label", {
    "pgn__form-label-inline": t,
    "pgn__form-label-lg": r === _i.LARGE,
    "pgn__form-label-sm": r === _i.SMALL
  }, n.className), s = a({
    ...n,
    className: o
  }), l = i ? "p" : "label";
  return /* @__PURE__ */ m.createElement(l, s, e);
}
function z2({
  children: e,
  controlId: t,
  isInvalid: n = !1,
  isValid: r = !1,
  size: i,
  as: a,
  ...o
}) {
  return /* @__PURE__ */ m.createElement(a ?? "div", {
    ...o,
    className: F("pgn__form-group", o.className)
  }, /* @__PURE__ */ m.createElement(pl, {
    controlId: t,
    isInvalid: n,
    isValid: r,
    size: i
  }, e));
}
const H2 = (e) => e, Y0 = /* @__PURE__ */ m.createContext({
  getRadioControlProps: H2,
  hasRadioSetProvider: !1
}), V2 = () => w.useContext(Y0);
function Ed({
  children: e,
  name: t,
  onBlur: n,
  onFocus: r,
  onChange: i,
  value: a,
  defaultValue: o
}) {
  const s = !o && a !== void 0, u = {
    name: t,
    value: a,
    defaultValue: o,
    getRadioControlProps: (c) => ({
      ...c,
      name: t,
      /* istanbul ignore next */
      onBlur: c.onBlur ? xr(n, c.onBlur) : n,
      /* istanbul ignore next */
      onFocus: c.onFocus ? xr(r, c.onFocus) : r,
      /* istanbul ignore next */
      onChange: c.onChange ? xr(i, c.onChange) : i,
      checked: s ? a === c.value : void 0,
      defaultChecked: s ? void 0 : o === c.value
    }),
    onBlur: n,
    onFocus: r,
    onChange: i,
    hasRadioSetProvider: !0
  };
  return /* @__PURE__ */ m.createElement(Y0.Provider, {
    value: u
  }, e);
}
Ed.propTypes = {
  children: p.node.isRequired,
  name: p.string.isRequired,
  onBlur: p.func,
  onFocus: p.func,
  onChange: p.func,
  value: p.string,
  defaultValue: p.string
};
Ed.defaultProps = {
  onBlur: void 0,
  onFocus: void 0,
  onChange: void 0,
  value: void 0,
  defaultValue: void 0
};
const bd = /* @__PURE__ */ m.forwardRef((e, t) => {
  const {
    getControlProps: n
  } = Bt(), {
    getRadioControlProps: r,
    hasRadioSetProvider: i
  } = V2();
  let a = n({
    ...e,
    className: F("pgn__form-radio-input", e.className)
  });
  return i && (a = r(a)), /* @__PURE__ */ m.createElement("input", {
    ...a,
    type: "radio",
    ref: t
  });
});
bd.propTypes = {
  className: p.string
};
bd.defaultProps = {
  className: void 0
};
const kd = /* @__PURE__ */ m.forwardRef(({
  children: e,
  className: t,
  controlClassName: n,
  labelClassName: r,
  description: i,
  isInvalid: a,
  isValid: o,
  ...s
}, l) => /* @__PURE__ */ m.createElement(pl, {
  controlId: s.id,
  isInvalid: a,
  isValid: o
}, /* @__PURE__ */ m.createElement("div", {
  className: F("pgn__form-radio", t, {
    "pgn__form-control-valid": o,
    "pgn__form-control-invalid": a,
    "pgn__form-control-disabled": s.disabled
  })
}, /* @__PURE__ */ m.createElement(bd, {
  ref: l,
  className: n,
  ...s
}), /* @__PURE__ */ m.createElement("div", null, /* @__PURE__ */ m.createElement(wd, {
  className: r
}, e), i && /* @__PURE__ */ m.createElement(Yn, {
  hasIcon: !1
}, i)))));
kd.propTypes = {
  /** Specifies id of the FormRadio component. */
  id: p.string,
  /** Specifies contents of the component. */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies class name for control component. */
  controlClassName: p.string,
  /** Specifies class name for label component. */
  labelClassName: p.string,
  /** Specifies description to show under the radio's value. */
  description: p.node,
  /** Specifies whether to display component in invalid state, this affects styling. */
  isInvalid: p.bool,
  /** Specifies whether to display component in valid state, this affects styling. */
  isValid: p.bool,
  /** Specifies whether the `FormRadio` is disabled. */
  disabled: p.bool
};
kd.defaultProps = {
  id: void 0,
  className: void 0,
  controlClassName: void 0,
  labelClassName: void 0,
  description: void 0,
  isInvalid: !1,
  isValid: !1,
  disabled: !1
};
function fl({
  as: e,
  className: t,
  isInline: n,
  children: r,
  ...i
}) {
  return /* @__PURE__ */ m.createElement(e, {
    className: F(t, {
      "pgn__form-control-set": !n,
      "pgn__form-control-set-inline": n
    }),
    ...i
  }, r);
}
fl.propTypes = {
  /** Specifies the base element */
  as: p.elementType,
  /** A class name to append to the base element. */
  className: p.string,
  /** Specifies whether the component should be displayed with inline styling. */
  isInline: p.bool,
  /** Specifies contents of the component. */
  children: p.node
};
fl.defaultProps = {
  as: "div",
  className: void 0,
  isInline: !1,
  children: null
};
function Cd({
  children: e,
  name: t,
  value: n,
  defaultValue: r,
  isInline: i,
  onChange: a,
  onFocus: o,
  onBlur: s,
  ...l
}) {
  const {
    getControlProps: u,
    useSetIsControlGroupEffect: c
  } = Bt();
  c(!0);
  const f = u(l);
  return /* @__PURE__ */ m.createElement(Ed, {
    name: t,
    value: n,
    defaultValue: r,
    onFocus: o,
    onBlur: s,
    onChange: a
  }, /* @__PURE__ */ m.createElement(fl, {
    role: "radiogroup",
    isInline: i,
    ...f
  }, e));
}
Cd.propTypes = {
  /** Specifies contents of the component. */
  children: p.node.isRequired,
  /** A class name to append to the base element. */
  className: p.string,
  /** Specifies name for the component. */
  name: p.string.isRequired,
  /** Specifies values for the FormRadioSet. */
  value: p.string,
  /** Specifies default values. */
  defaultValue: p.string,
  /** Specifies whether the component should be displayed with inline styling. */
  isInline: p.bool,
  /** Specifies onChange event handler. */
  onChange: p.func,
  /** Specifies onFocus event handler. */
  onFocus: p.func,
  /** Specifies onBlur event handler. */
  onBlur: p.func
};
Cd.defaultProps = {
  className: void 0,
  value: void 0,
  defaultValue: void 0,
  isInline: !1,
  onChange: void 0,
  onFocus: void 0,
  onBlur: void 0
};
let Eo;
const $2 = new Uint8Array(16);
function U2() {
  if (!Eo && (Eo = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Eo))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Eo($2);
}
const He = [];
for (let e = 0; e < 256; ++e)
  He.push((e + 256).toString(16).slice(1));
function G2(e, t = 0) {
  return He[e[t + 0]] + He[e[t + 1]] + He[e[t + 2]] + He[e[t + 3]] + "-" + He[e[t + 4]] + He[e[t + 5]] + "-" + He[e[t + 6]] + He[e[t + 7]] + "-" + He[e[t + 8]] + He[e[t + 9]] + "-" + He[e[t + 10]] + He[e[t + 11]] + He[e[t + 12]] + He[e[t + 13]] + He[e[t + 14]] + He[e[t + 15]];
}
const W2 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Nh = {
  randomUUID: W2
};
function q2(e, t, n) {
  if (Nh.randomUUID && !e)
    return Nh.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || U2)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, G2(r);
}
const K2 = (e, t, n) => (r, i, a, ...o) => t(r) && r[i] === void 0 ? new Error(
  `${a}: ${i} is required when ${n}`
) : e(r, i, a, ...o), Q2 = (e, t) => t.every((n) => e[n] !== void 0), cu = (e, t) => K2(
  e,
  (n) => Array.isArray(t) ? Q2(n, t) : n[t] === !0,
  `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`
), Z0 = /* @__PURE__ */ m.forwardRef(({
  className: e,
  screenReaderText: t,
  ...n
}, r) => {
  const i = {
    ...n,
    className: F("pgn__spinner", e),
    role: t ? "status" : void 0
  };
  return /* @__PURE__ */ m.createElement(I0, {
    ...i,
    ref: r
  }, t && /* @__PURE__ */ m.createElement("span", {
    className: "sr-only"
  }, t));
});
function X2({
  event: e,
  currentIndex: t,
  activeElement: n
}) {
  t !== -1 && (n.click(), e.preventDefault());
}
function Y2({
  event: e,
  currentIndex: t,
  availableElements: n
}) {
  t === -1 && n[0].focus();
  let r;
  (e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r == null || r.focus(), e.preventDefault();
}
function Z2({
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
    activeElement: a
  } = document;
  if (!n.contains(a))
    return;
  const o = n.querySelectorAll(r);
  if (!o.length)
    return;
  const s = Array.from(o).findIndex((l) => l === a);
  i === "Enter" && a && X2({
    event: e,
    currentIndex: s,
    activeElement: a
  }), Y2({
    event: e,
    currentIndex: s,
    availableElements: o
  });
}
function J2(e = {}) {
  const {
    selectors: t,
    ignoredKeys: n
  } = e, r = w.useRef();
  return w.useEffect(() => {
    const i = (a) => {
      Z2({
        event: a,
        ignoredKeys: n,
        parentNode: r.current,
        selectors: t
      });
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [n, t]), r;
}
const Ih = {
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
}, Sd = /* @__PURE__ */ w.forwardRef(({
  children: e,
  arrowKeyNavigationSelector: t,
  ignoredArrowKeysNames: n,
  screenReaderText: r,
  value: i,
  isLoading: a,
  isValueRequired: o,
  valueRequiredErrorMessageText: s,
  isSelectionRequired: l,
  selectionRequiredErrorMessageText: u,
  hasCustomError: c,
  customErrorMessageText: f,
  onChange: d,
  helpMessage: v,
  ...E
}, x) => {
  const b = Pr(), g = w.useRef(), h = J2({
    selectors: t,
    ignoredKeys: n
  }), [y, k] = w.useState(!1), [S, _] = w.useState(!1), [A, T] = w.useState(!1), [O, P] = w.useState(!1), [B, H] = w.useState((i == null ? void 0 : i.userProvidedText) || ""), [U, Q] = w.useState([]), [Z, te] = w.useState(null), [ee, N] = w.useState(!0), [R, M] = w.useState(""), K = (ae) => {
    te(ae);
  }, V = () => {
    Q([]), k(!1), te(null);
  }, Te = (ae, ve) => {
    const de = ae.currentTarget.getAttribute("data-value"), me = ae.currentTarget.id;
    T(!0), P(!0), H(de), d && (!i || i && de !== i.selectionValue) && d({
      userProvidedText: de,
      selectionValue: de,
      selectionId: me
    }), V(), ve && ve(ae);
  };
  function ue(ae = "") {
    let ve = m.Children.map(e, (de) => {
      const {
        children: me,
        onClick: Yt,
        ...Dr
      } = de.props, rr = de.props.id ?? q2();
      return /* @__PURE__ */ m.cloneElement(de, {
        ...Dr,
        children: me,
        "data-value": me,
        onClick: (D) => Te(D, Yt),
        id: rr,
        onFocus: () => K(rr)
      });
    });
    return ae.length > 0 && (ve = ve.filter((de) => de.props.children.toLowerCase().includes(ae.toLowerCase()))), ve;
  }
  const L = () => {
    Q(ue(B)), N(!0), M(""), k(!0);
  }, X = () => {
    y ? V() : L();
  }, fe = /* @__PURE__ */ m.createElement(ol, {
    className: "pgn__form-autosuggest__icon-button",
    "data-testid": "autosuggest-iconbutton",
    tabIndex: "-1",
    src: y ? p2 : c2,
    iconAs: kt,
    size: "sm",
    variant: "secondary",
    alt: y ? b.formatMessage(Ih.iconButtonClosed) : b.formatMessage(Ih.iconButtonOpened),
    onClick: X
  }), Ee = () => {
    _(!0);
  }, lt = () => {
    if (c) {
      N(!1), M(f);
      return;
    }
    if (o && !A) {
      N(!1), M(s);
      return;
    }
    if (A && l && !O) {
      N(!1), M(u);
      return;
    }
    N(!0), M("");
  };
  w.useImperativeHandle(x, () => ({
    // expose updateErrorStateAndErrorMessage so consumers can trigger validation
    // when changing the value of the control externally
    updateErrorStateAndErrorMessage: lt
  }));
  const Je = () => {
    _(!1), V(), lt();
  }, ut = (ae) => {
    if (S) {
      if (ae.key === "Escape") {
        ae.preventDefault(), g && g.current.focus(), V();
        return;
      }
      ae.key === "Tab" && Je();
    }
  }, Ge = (ae) => {
    h.current && !h.current.contains(ae.target) && S && Je();
  };
  w.useEffect(() => (document.addEventListener("keydown", ut), document.addEventListener("click", Ge, !0), () => {
    document.removeEventListener("click", Ge, !0), document.removeEventListener("keydown", ut);
  })), w.useEffect(() => {
    H(i ? i.userProvidedText ?? "" : ""), T(!!i && !!i.userProvidedText), P(!!i && !!i.selectionValue);
  }, [i]);
  const fn = () => {
    L();
  }, Tn = (ae) => {
    const ve = ae.target.value;
    if (!ve.length) {
      H(""), T(!1), P(!1), Q([]), V(), d && d({
        userProvidedText: "",
        selectionValue: "",
        selectionId: ""
      });
      return;
    }
    T(!0);
    const de = ue(ve);
    Q(de);
    const me = de.find((Yt) => Yt.props.children.toLowerCase() === ve.toLowerCase());
    if (!me) {
      P(!1), H(ve), d && d({
        userProvidedText: ve,
        selectionValue: "",
        selectionId: ""
      });
      return;
    }
    P(!0), H(me.props.children), d && d({
      userProvidedText: me.props.children,
      selectionValue: me.props.children,
      selectionId: me.props.id
    });
  }, {
    getControlProps: Nn
  } = Bt(), Re = Nn(E);
  return /* @__PURE__ */ m.createElement("div", {
    className: "pgn__form-autosuggest__wrapper",
    ref: h,
    onFocus: Ee
  }, /* @__PURE__ */ m.createElement("div", {
    "aria-live": "assertive",
    className: "sr-only",
    "data-testid": "autosuggest-screen-reader-options-count"
  }, `${U.length} options found`), /* @__PURE__ */ m.createElement(pl, {
    controlId: Re.id,
    isInvalid: !ee
  }, /* @__PURE__ */ m.createElement(Mi, {
    ref: g,
    "aria-expanded": (U.length > 0).toString(),
    "aria-owns": "pgn__form-autosuggest__dropdown-box",
    role: "combobox",
    "aria-autocomplete": "list",
    autoComplete: "off",
    value: B,
    "aria-invalid": R,
    "aria-activedescendant": Z,
    onChange: Tn,
    onClick: fn,
    trailingElement: fe,
    "data-testid": "autosuggest-textbox-input",
    ...Re
  }), v && ee && /* @__PURE__ */ m.createElement(Yn, {
    type: "default"
  }, v), !ee && /* @__PURE__ */ m.createElement(Yn, {
    type: "invalid",
    "feedback-for": Re.name
  }, R)), /* @__PURE__ */ m.createElement("ul", {
    id: "pgn__form-autosuggest__dropdown-box",
    className: "pgn__form-autosuggest__dropdown",
    role: "listbox"
  }, a ? /* @__PURE__ */ m.createElement("div", {
    className: "pgn__form-autosuggest__dropdown-loading"
  }, /* @__PURE__ */ m.createElement(Z0, {
    animation: "border",
    variant: "dark",
    screenReaderText: r,
    "data-testid": "autosuggest-loading-spinner"
  })) : U.length > 0 && U));
});
Sd.defaultProps = {
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
Sd.propTypes = {
  /**
   * Specifies the CSS selector string that indicates to which elements
   * the user can navigate using the arrow keys
  */
  arrowKeyNavigationSelector: p.string,
  /** Specifies ignored hook keys. */
  ignoredArrowKeysNames: p.arrayOf(p.string),
  /** Specifies loading state. */
  isLoading: p.bool,
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies floating label to display for the input component. */
  floatingLabel: p.string,
  /** Specifies onChange event handler. */
  onChange: p.func,
  /** Specifies help information for the user. */
  helpMessage: p.string,
  /** Specifies the placeholder text for the input. */
  placeholder: p.string,
  /** Specifies values for the input. */
  value: p.shape({
    userProvidedText: p.string,
    selectionValue: p.string,
    selectionId: p.string
  }),
  /** Specifies if empty values trigger an error state */
  isValueRequired: p.bool,
  /** Informs user they must input a value. */
  valueRequiredErrorMessageText: cu(p.string, "isValueRequired"),
  /** Specifies if freeform values trigger an error state */
  isSelectionRequired: p.bool,
  /** Informs user they must make a selection. */
  selectionRequiredErrorMessageText: cu(p.string, "isSelectionRequired"),
  /** Specifies the control is in a consumer provided error state */
  hasCustomError: p.bool,
  /** Informs user of other errors. */
  customErrorMessageText: cu(p.string, "hasCustomError"),
  /** Specifies the name of the base input element. */
  name: p.string,
  /** Selected list item is read-only. */
  readOnly: p.bool,
  /** Specifies the content of the `FormAutosuggest`. */
  children: p.node,
  /** Specifies the screen reader text */
  screenReaderText: p.string
};
function _d({
  as: e,
  children: t,
  defaultSelected: n,
  iconAfter: r,
  iconBefore: i,
  ...a
}) {
  const o = F(a.className, "pgn__menu-item");
  return /* @__PURE__ */ m.createElement(e, {
    ...a,
    className: o
  }, /* @__PURE__ */ m.createElement(m.Fragment, null, i && /* @__PURE__ */ m.createElement(kt, {
    className: "btn-icon-before",
    src: i
  }), /* @__PURE__ */ m.createElement("span", {
    className: "pgn__menu-item-text"
  }, t), /* @__PURE__ */ m.createElement("span", {
    className: "pgn__menu-item-content-spacer"
  }), r && /* @__PURE__ */ m.createElement(kt, {
    className: "btn-icon-after",
    src: r
  })));
}
_d.propTypes = {
  /** Specifies that this ``MenuItem`` is selected inside the ``SelectMenu`` */
  defaultSelected: p.bool,
  /** Specifies class name to append to the base element */
  className: p.string,
  /** Specifies the content of the ``MenuItem`` */
  children: p.node,
  /** Specifies the base element */
  as: p.elementType,
  /** Specifies the jsx before the content of the ``MenuItem`` */
  iconBefore: p.oneOfType([p.element, p.elementType]),
  /** Specifies the jsx after the content of the ``MenuItem`` */
  iconAfter: p.oneOfType([p.element, p.elementType])
};
_d.defaultProps = {
  defaultSelected: !1,
  as: "button",
  className: void 0,
  children: null,
  iconBefore: void 0,
  iconAfter: void 0
};
function Ad({
  children: e,
  className: t,
  onClick: n,
  ...r
}) {
  return /* @__PURE__ */ m.createElement(_d, {
    as: "li",
    "data-testid": "autosuggest-optionitem",
    role: "option",
    tabIndex: "-1",
    onClick: n,
    className: F(t, "dropdown-item"),
    ...r
  }, e);
}
Ad.defaultProps = {
  className: null,
  children: null,
  onClick: null
};
Ad.propTypes = {
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies the text-content of the `FormAutosuggestOption`. */
  children: p.string,
  /** A click handler for the `FormAutosuggestOption` */
  onClick: p.func
};
const eA = (e) => e, J0 = /* @__PURE__ */ m.createContext({
  getCheckboxControlProps: eA,
  hasCheckboxSetProvider: !1
}), ey = () => w.useContext(J0);
function Td({
  children: e,
  name: t,
  onBlur: n,
  onFocus: r,
  onChange: i,
  value: a,
  defaultValue: o
}) {
  const s = !o && Array.isArray(a), u = {
    name: t,
    value: a,
    defaultValue: o,
    getCheckboxControlProps: (c) => ({
      ...c,
      name: t,
      /* istanbul ignore next */
      onBlur: c.onBlur ? xr(n, c.onBlur) : n,
      /* istanbul ignore next */
      onFocus: c.onFocus ? xr(r, c.onFocus) : r,
      /* istanbul ignore next */
      onChange: c.onChange ? xr(i, c.onChange) : i,
      checked: s ? a.includes(c.value) : void 0,
      defaultChecked: s ? void 0 : o && o.includes(c.value)
    }),
    onBlur: n,
    onFocus: r,
    onChange: i,
    hasCheckboxSetProvider: !0
  };
  return /* @__PURE__ */ m.createElement(J0.Provider, {
    value: u
  }, e);
}
Td.propTypes = {
  children: p.node.isRequired,
  name: p.string,
  onBlur: p.func,
  onFocus: p.func,
  onChange: p.func,
  value: p.arrayOf(p.string),
  defaultValue: p.arrayOf(p.string)
};
Td.defaultProps = {
  onBlur: void 0,
  name: void 0,
  onFocus: void 0,
  onChange: void 0,
  value: void 0,
  defaultValue: void 0
};
const Nd = /* @__PURE__ */ m.forwardRef(({
  isIndeterminate: e,
  ...t
}, n) => {
  const {
    getCheckboxControlProps: r,
    hasCheckboxSetProvider: i
  } = ey(), a = m.useRef(), o = n || a, {
    getControlProps: s
  } = Bt();
  let l = s({
    ...t,
    className: F("pgn__form-checkbox-input", t.className)
  });
  return i && (l = r(l)), m.useEffect(() => {
    o.current && (o.current.indeterminate = e);
  }, [o, e]), /* @__PURE__ */ m.createElement("input", {
    type: "checkbox",
    ...l,
    ref: o
  });
});
Nd.propTypes = {
  /** Specifies whether the checkbox should be rendered in indeterminate state. */
  isIndeterminate: p.bool,
  /** Specifies class name to append to the base element. */
  className: p.string
};
Nd.defaultProps = {
  isIndeterminate: !1,
  className: void 0
};
const ml = /* @__PURE__ */ m.forwardRef(({
  children: e,
  className: t,
  controlClassName: n,
  labelClassName: r,
  description: i,
  isInvalid: a,
  isValid: o,
  controlAs: s,
  floatLabelLeft: l,
  ...u
}, c) => {
  const {
    hasCheckboxSetProvider: f
  } = ey(), {
    hasFormGroupProvider: d,
    useSetIsControlGroupEffect: v,
    getControlProps: E
  } = Bt();
  v(!0);
  const b = d && !f ? {
    ...E({}),
    role: "group"
  } : {}, g = /* @__PURE__ */ m.createElement(s, {
    ...u,
    className: n,
    ref: c
  });
  return /* @__PURE__ */ m.createElement(pl, {
    controlId: u.id,
    isInvalid: a,
    isValid: o
  }, /* @__PURE__ */ m.createElement("div", {
    className: F("pgn__form-checkbox", t, {
      "pgn__form-control-valid": o,
      "pgn__form-control-invalid": a,
      "pgn__form-control-disabled": u.disabled,
      "pgn__form-control-label-left": !!l
    }),
    ...b
  }, g, /* @__PURE__ */ m.createElement("div", null, /* @__PURE__ */ m.createElement(wd, {
    className: r
  }, e), i && /* @__PURE__ */ m.createElement(Yn, {
    hasIcon: !1
  }, i))));
});
ml.propTypes = {
  /** Specifies id of the FormCheckbox component. */
  id: p.string,
  /** Specifies contents of the component. */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies class name for control component. */
  controlClassName: p.string,
  /** Specifies class name for label component. */
  labelClassName: p.string,
  /** Specifies description to show under the checkbox. */
  description: p.node,
  /** Specifies whether to display checkbox in invalid state, this affects styling. */
  isInvalid: p.bool,
  /** Specifies whether to display checkbox in valid state, this affects styling. */
  isValid: p.bool,
  /** Specifies control element. */
  controlAs: p.elementType,
  /** Specifies whether the floating label should be aligned to the left. */
  floatLabelLeft: p.bool,
  /** Specifies whether the `FormCheckbox` is disabled. */
  disabled: p.bool
};
ml.defaultProps = {
  id: void 0,
  className: void 0,
  controlClassName: void 0,
  labelClassName: void 0,
  description: void 0,
  isInvalid: !1,
  isValid: !1,
  controlAs: Nd,
  floatLabelLeft: !1,
  disabled: !1
};
const Id = /* @__PURE__ */ m.forwardRef(({
  isIndeterminate: e,
  ...t
}, n) => {
  const r = m.useRef(), i = n || r, {
    getControlProps: a
  } = Bt(), o = a({
    ...t,
    className: F("pgn__form-switch-input", t.className)
  });
  return m.useEffect(() => {
    i.current && (i.current.indeterminate = e);
  }, [i, e]), /* @__PURE__ */ m.createElement("input", {
    type: "checkbox",
    ...o,
    ref: i
  });
});
Id.propTypes = {
  /** Specifies whether input should be rendered in indeterminate state. */
  isIndeterminate: p.bool,
  /** Specifies class name to append to the base element. */
  className: p.string
};
Id.defaultProps = {
  isIndeterminate: !1,
  className: void 0
};
const Pd = /* @__PURE__ */ m.forwardRef(({
  children: e,
  className: t,
  helperText: n,
  ...r
}, i) => /* @__PURE__ */ m.createElement("div", {
  className: "d-inline-flex flex-column"
}, /* @__PURE__ */ m.createElement(ml, {
  className: F("pgn__form-switch", t),
  ...r,
  role: "switch",
  ref: i,
  controlAs: Id,
  isValid: null,
  isInvalid: null,
  description: null
}, e), n && /* @__PURE__ */ m.createElement("div", {
  className: "pgn__form-switch-helper-text"
}, n)));
Pd.propTypes = {
  /** Specifies contents of the component. */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies class name to append to the label element. */
  labelClassName: p.string,
  /** Specifies helper text to display below the switch. */
  helperText: p.node,
  /** Determines whether the label should float to the left when the switch is active. */
  floatLabelLeft: p.bool
};
Pd.defaultProps = {
  className: void 0,
  labelClassName: void 0,
  helperText: void 0,
  floatLabelLeft: !1
};
function hl({
  children: e,
  name: t,
  value: n,
  defaultValue: r,
  isInline: i,
  onChange: a,
  onFocus: o,
  onBlur: s,
  ...l
}) {
  const {
    getControlProps: u,
    useSetIsControlGroupEffect: c
  } = Bt();
  c(!0);
  const f = u(l);
  return /* @__PURE__ */ m.createElement(Td, {
    name: t,
    value: n,
    defaultValue: r,
    onFocus: o,
    onBlur: s,
    onChange: a
  }, /* @__PURE__ */ m.createElement(fl, {
    role: "group",
    isInline: i,
    ...f
  }, e));
}
hl.propTypes = {
  /** Specifies contents of the component. */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies name for the component. */
  name: p.string.isRequired,
  /** Specifies values for the checkboxes. */
  value: p.arrayOf(p.string),
  /** Specifies default values for the checkboxes. */
  defaultValue: p.arrayOf(p.string),
  /** Specifies whether to display components with inline styling. */
  isInline: p.bool,
  /** Specifies onChange event handler. */
  onChange: p.func,
  /** Specifies onFocus event handler. */
  onFocus: p.func,
  /** Specifies onBlur event handler. */
  onBlur: p.func
};
hl.defaultProps = {
  className: void 0,
  value: void 0,
  defaultValue: void 0,
  isInline: !1,
  onChange: void 0,
  onFocus: void 0,
  onBlur: void 0
};
const W = Xt;
W.Control = Mi;
W.Radio = kd;
W.RadioSet = Cd;
W.Autosuggest = Sd;
W.AutosuggestOption = Ad;
W.Checkbox = ml;
W.CheckboxSet = hl;
W.Switch = Pd;
W.SwitchSet = hl;
W.Label = wd;
W.Group = z2;
W.Text = dl;
const ty = /* @__PURE__ */ m.createContext({
  onClose: () => {
  },
  isOpen: !1,
  isBlocking: !1
});
function tA({
  onClose: e,
  isOpen: t,
  isBlocking: n = !1,
  children: r = null
}) {
  const i = w.useMemo(() => ({
    onClose: e,
    isOpen: t,
    isBlocking: n
  }), [e, t, n]);
  return /* @__PURE__ */ m.createElement(ty.Provider, {
    value: i
  }, r);
}
var Vo = "right-scroll-bar-position", $o = "width-before-scroll-bar", nA = "with-scroll-bars-hidden", rA = "--removed-body-scroll-bar-size";
function pu(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function iA(e, t) {
  var n = w.useState(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var i = n.value;
          i !== r && (n.value = r, n.callback(r, i));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var aA = typeof window < "u" ? w.useLayoutEffect : w.useEffect, Ph = /* @__PURE__ */ new WeakMap();
function ny(e, t) {
  var n = iA(null, function(r) {
    return e.forEach(function(i) {
      return pu(i, r);
    });
  });
  return aA(function() {
    var r = Ph.get(n);
    if (r) {
      var i = new Set(r), a = new Set(e), o = n.current;
      i.forEach(function(s) {
        a.has(s) || pu(s, null);
      }), a.forEach(function(s) {
        i.has(s) || pu(s, o);
      });
    }
    Ph.set(n, e);
  }, [e]), n;
}
function ry(e) {
  return e;
}
function iy(e, t) {
  t === void 0 && (t = ry);
  var n = [], r = !1, i = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var o = t(a, r);
      return n.push(o), function() {
        n = n.filter(function(s) {
          return s !== o;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var o = n;
        n = [], o.forEach(a);
      }
      n = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var o = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(a), o = n;
      }
      var l = function() {
        var c = o;
        o = [], c.forEach(a);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(c) {
          o.push(c), u();
        },
        filter: function(c) {
          return o = o.filter(c), n;
        }
      };
    }
  };
  return i;
}
function Fd(e, t) {
  return t === void 0 && (t = ry), iy(e, t);
}
function Rd(e) {
  e === void 0 && (e = {});
  var t = iy(null);
  return t.options = j({ async: !0, ssr: !1 }, e), t;
}
var ay = function(e) {
  var t = e.sideCar, n = cn(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return w.createElement(r, j({}, n));
};
ay.isSideCarExport = !0;
function Od(e, t) {
  return e.useMedium(t), ay;
}
var oy = Rd(), du = function() {
}, Dd = w.forwardRef(function(e, t) {
  var n = w.useRef(null), r = w.useState({
    onScrollCapture: du,
    onWheelCapture: du,
    onTouchMoveCapture: du
  }), i = r[0], a = r[1], o = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, f = e.shards, d = e.sideCar, v = e.noRelative, E = e.noIsolation, x = e.inert, b = e.allowPinchZoom, g = e.as, h = g === void 0 ? "div" : g, y = e.gapMode, k = cn(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = d, _ = ny([n, t]), A = j(j({}, k), i);
  return w.createElement(
    w.Fragment,
    null,
    c && w.createElement(S, { sideCar: oy, removeScrollBar: u, shards: f, noRelative: v, noIsolation: E, inert: x, setCallbacks: a, allowPinchZoom: !!b, lockRef: n, gapMode: y }),
    o ? w.cloneElement(w.Children.only(s), j(j({}, A), { ref: _ })) : w.createElement(h, j({}, A, { className: l, ref: _ }), s)
  );
});
Dd.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Dd.classNames = {
  fullWidth: $o,
  zeroRight: Vo
};
var Mc = "data-focus-lock", sy = "data-focus-lock-disabled", oA = "data-no-focus-lock", sA = "data-autofocus-inside", lA = "data-no-autofocus", fu = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
}, ly = Fd({}, function(e) {
  var t = e.target, n = e.currentTarget;
  return {
    target: t,
    currentTarget: n
  };
}), uy = Fd(), uA = Fd(), cy = Rd({
  async: !0,
  ssr: typeof document < "u"
}), cA = /* @__PURE__ */ w.createContext(void 0), pA = [], py = /* @__PURE__ */ w.forwardRef(function(t, n) {
  var r, i = w.useState(), a = i[0], o = i[1], s = w.useRef(), l = w.useRef(!1), u = w.useRef(null), c = w.useState({}), f = c[1], d = t.children, v = t.disabled, E = v === void 0 ? !1 : v, x = t.noFocusGuards, b = x === void 0 ? !1 : x, g = t.persistentFocus, h = g === void 0 ? !1 : g, y = t.crossFrame, k = y === void 0 ? !0 : y, S = t.autoFocus, _ = S === void 0 ? !0 : S;
  t.allowTextSelection;
  var A = t.group, T = t.className, O = t.whiteList, P = t.hasPositiveIndices, B = t.shards, H = B === void 0 ? pA : B, U = t.as, Q = U === void 0 ? "div" : U, Z = t.lockProps, te = Z === void 0 ? {} : Z, ee = t.sideCar, N = t.returnFocus, R = N === void 0 ? !1 : N, M = t.focusOptions, K = t.onActivation, V = t.onDeactivation, Te = w.useState({}), ue = Te[0], L = w.useCallback(function(Re) {
    var ae = Re.captureFocusRestore;
    if (!u.current) {
      var ve, de = (ve = document) == null ? void 0 : ve.activeElement;
      u.current = de, de !== document.body && (u.current = ae(de));
    }
    s.current && K && K(s.current), l.current = !0, f();
  }, [K]), X = w.useCallback(function() {
    l.current = !1, V && V(s.current), f();
  }, [V]), fe = w.useCallback(function(Re) {
    var ae = u.current;
    if (ae) {
      var ve = (typeof ae == "function" ? ae() : ae) || document.body, de = typeof R == "function" ? R(ve) : R;
      if (de) {
        var me = typeof de == "object" ? de : void 0;
        u.current = null, Re ? Promise.resolve().then(function() {
          return ve.focus(me);
        }) : ve.focus(me);
      }
    }
  }, [R]), Ee = w.useCallback(function(Re) {
    l.current && ly.useMedium(Re);
  }, []), lt = uy.useMedium, Je = w.useCallback(function(Re) {
    s.current !== Re && (s.current = Re, o(Re));
  }, []), ut = $((r = {}, r[sy] = E && "disabled", r[Mc] = A, r), te), Ge = b !== !0, fn = Ge && b !== "tail", Tn = ny([n, Je]), Nn = w.useMemo(function() {
    return {
      observed: s,
      shards: H,
      enabled: !E,
      active: l.current
    };
  }, [E, l.current, H, a]);
  return /* @__PURE__ */ m.createElement(w.Fragment, null, Ge && [
    /* @__PURE__ */ m.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: E ? -1 : 0,
      style: fu
    }),
    P ? /* @__PURE__ */ m.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: E ? -1 : 1,
      style: fu
    }) : null
  ], !E && /* @__PURE__ */ m.createElement(ee, {
    id: ue,
    sideCar: cy,
    observed: a,
    disabled: E,
    persistentFocus: h,
    crossFrame: k,
    autoFocus: _,
    whiteList: O,
    shards: H,
    onActivation: L,
    onDeactivation: X,
    returnFocus: fe,
    focusOptions: M,
    noFocusGuards: b
  }), /* @__PURE__ */ m.createElement(Q, $({
    ref: Tn
  }, ut, {
    className: T,
    onBlur: lt,
    onFocus: Ee
  }), /* @__PURE__ */ m.createElement(cA.Provider, {
    value: Nn
  }, d)), fn && /* @__PURE__ */ m.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: E ? -1 : 0,
    style: fu
  }));
});
py.propTypes = {};
function Md(e) {
  setTimeout(e, 1);
}
var dA = function(t) {
  return t && "current" in t ? t.current : t;
}, dy = Rd(), fy = "data-focus-on-hidden", fA = { preventScroll: !0 }, mA = w.forwardRef(function(e, t) {
  var n = w.useState(!1), r = n[0], i = n[1], a = e.children, o = e.autoFocus, s = e.shards, l = e.crossFrame, u = e.enabled, c = u === void 0 ? !0 : u, f = e.scrollLock, d = f === void 0 ? !0 : f, v = e.focusLock, E = v === void 0 ? !0 : v, x = e.returnFocus, b = x === void 0 ? !0 : x, g = e.inert, h = e.allowPinchZoom, y = e.sideCar, k = e.className, S = e.shouldIgnore, _ = e.preventScrollOnFocus, A = e.style, T = e.as, O = e.gapMode, P = cn(e, ["children", "autoFocus", "shards", "crossFrame", "enabled", "scrollLock", "focusLock", "returnFocus", "inert", "allowPinchZoom", "sideCar", "className", "shouldIgnore", "preventScrollOnFocus", "style", "as", "gapMode"]), B = y, H = r.onActivation, U = r.onDeactivation, Q = cn(r, ["onActivation", "onDeactivation"]), Z = j(j({}, Q), {
    as: T,
    style: A,
    sideCar: y,
    shards: s,
    allowPinchZoom: h,
    gapMode: O,
    inert: g,
    enabled: c && d
  });
  return w.createElement(
    w.Fragment,
    null,
    w.createElement(py, { ref: t, sideCar: y, disabled: !(r && c && E), returnFocus: b, autoFocus: o, shards: s, crossFrame: l, onActivation: H, onDeactivation: U, className: k, whiteList: S, lockProps: Z, focusOptions: _ ? fA : void 0, as: Dd }, a),
    c && w.createElement(B, j({}, P, { sideCar: dy, setLockProps: i, shards: s }))
  );
});
function Fa(e) {
  "@babel/helpers - typeof";
  return Fa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fa(e);
}
function hA(e, t) {
  if (Fa(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Fa(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function vA(e) {
  var t = hA(e, "string");
  return Fa(t) == "symbol" ? t : t + "";
}
function gA(e, t, n) {
  return (t = vA(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function xA(e, t) {
  function n(r) {
    return r.displayName || r.name || "Component";
  }
  return function(i) {
    var a = [], o;
    function s() {
      o = e(a.map(function(u) {
        return u.props;
      })), t(o);
    }
    var l = /* @__PURE__ */ function(u) {
      Zp(c, u);
      function c() {
        return u.apply(this, arguments) || this;
      }
      c.peek = function() {
        return o;
      };
      var f = c.prototype;
      return f.componentDidMount = function() {
        a.push(this), s();
      }, f.componentDidUpdate = function() {
        s();
      }, f.componentWillUnmount = function() {
        var v = a.indexOf(this);
        a.splice(v, 1), s();
      }, f.render = function() {
        return /* @__PURE__ */ m.createElement(i, this.props);
      }, c;
    }(w.PureComponent);
    return gA(l, "displayName", "SideEffect(" + n(i) + ")"), l;
  };
}
var dn = function(e) {
  for (var t = Array(e.length), n = 0; n < e.length; ++n)
    t[n] = e[n];
  return t;
}, Ar = function(e) {
  return Array.isArray(e) ? e : [e];
}, my = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, yA = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, hy = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, vy = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, wA = function(e) {
  return e.hasAttribute("inert");
}, EA = function(e, t) {
  return !e || vy(e) || !yA(e) && !wA(e) && t(hy(e));
}, gy = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = EA(t, gy.bind(void 0, e));
  return e.set(t, r), r;
}, bA = function(e, t) {
  return e && !vy(e) ? SA(e) ? t(hy(e)) : !1 : !0;
}, xy = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = bA(t, xy.bind(void 0, e));
  return e.set(t, r), r;
}, yy = function(e) {
  return e.dataset;
}, kA = function(e) {
  return e.tagName === "BUTTON";
}, wy = function(e) {
  return e.tagName === "INPUT";
}, Ey = function(e) {
  return wy(e) && e.type === "radio";
}, CA = function(e) {
  return !((wy(e) || kA(e)) && (e.type === "hidden" || e.disabled));
}, SA = function(e) {
  var t = e.getAttribute(lA);
  return ![!0, "true", ""].includes(t);
}, Ld = function(e) {
  var t;
  return !!(e && (!((t = yy(e)) === null || t === void 0) && t.focusGuard));
}, Lc = function(e) {
  return !Ld(e);
}, _A = function(e) {
  return !!e;
}, AA = function(e, t) {
  var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
  if (i) {
    if (!n)
      return 1;
    if (!r)
      return -1;
  }
  return i || a;
}, TA = function(e) {
  return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, jd = function(e, t, n) {
  return dn(e).map(function(r, i) {
    var a = TA(r);
    return {
      node: r,
      index: i,
      tabIndex: n && a === -1 ? (r.dataset || {}).focusGuard ? 0 : -1 : a
    };
  }).filter(function(r) {
    return !t || r.tabIndex >= 0;
  }).sort(AA);
}, NA = [
  "button:enabled",
  "select:enabled",
  "textarea:enabled",
  "input:enabled",
  // elements with explicit roles will also use explicit tabindex
  // '[role="button"]',
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[tabindex]",
  "[contenteditable]",
  "[autofocus]"
], Bd = NA.join(","), IA = "".concat(Bd, ", [data-focus-guard]"), by = function(e, t) {
  return dn((e.shadowRoot || e).children).reduce(function(n, r) {
    return n.concat(r.matches(t ? IA : Bd) ? [r] : [], by(r));
  }, []);
}, PA = function(e, t) {
  var n;
  return e instanceof HTMLIFrameElement && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? Ai([e.contentDocument.body], t) : [e];
}, Ai = function(e, t) {
  return e.reduce(function(n, r) {
    var i, a = by(r, t), o = (i = []).concat.apply(i, a.map(function(s) {
      return PA(s, t);
    }));
    return n.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      o,
      // add if node is tabbable itself
      r.parentNode ? dn(r.parentNode.querySelectorAll(Bd)).filter(function(s) {
        return s === r;
      }) : []
    );
  }, []);
}, FA = function(e) {
  var t = e.querySelectorAll("[".concat(sA, "]"));
  return dn(t).map(function(n) {
    return Ai([n]);
  }).reduce(function(n, r) {
    return n.concat(r);
  }, []);
}, zd = function(e, t) {
  return dn(e).filter(function(n) {
    return gy(t, n);
  }).filter(function(n) {
    return CA(n);
  });
}, Fh = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), dn(e).filter(function(n) {
    return xy(t, n);
  });
}, Hd = function(e, t, n) {
  return jd(zd(Ai(e, n), t), !0, n);
}, Ra = function(e, t) {
  return jd(zd(Ai(e), t), !1);
}, RA = function(e, t) {
  return zd(FA(e), t);
}, yr = function(e, t) {
  return e.shadowRoot ? yr(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : dn(e.children).some(function(n) {
    var r;
    if (n instanceof HTMLIFrameElement) {
      var i = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return i ? yr(i, t) : !1;
    }
    return yr(n, t);
  });
}, OA = function(e) {
  for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1)
    for (var i = r + 1; i < n; i += 1) {
      var a = e[r].compareDocumentPosition(e[i]);
      (a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
    }
  return e.filter(function(o, s) {
    return !t.has(s);
  });
}, ky = function(e) {
  return e.parentNode ? ky(e.parentNode) : e;
}, Vd = function(e) {
  var t = Ar(e);
  return t.filter(Boolean).reduce(function(n, r) {
    var i = r.getAttribute(Mc);
    return n.push.apply(n, i ? OA(dn(ky(r).querySelectorAll("[".concat(Mc, '="').concat(i, '"]:not([').concat(sy, '="disabled"])')))) : [r]), n;
  }, []);
}, DA = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, Oa = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? Oa(t.shadowRoot) : t instanceof HTMLIFrameElement && DA(function() {
      return t.contentWindow.document;
    }) ? Oa(t.contentWindow.document) : t;
  }
}, MA = function(e, t) {
  return e === t;
}, LA = function(e, t) {
  return !!dn(e.querySelectorAll("iframe")).some(function(n) {
    return MA(n, t);
  });
}, Cy = function(e, t) {
  return t === void 0 && (t = Oa(my(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Vd(e).some(function(n) {
    return yr(n, t) || LA(n, t);
  });
}, jA = function(e) {
  e === void 0 && (e = document);
  var t = Oa(e);
  return t ? dn(e.querySelectorAll("[".concat(oA, "]"))).some(function(n) {
    return yr(n, t);
  }) : !1;
}, BA = function(e, t) {
  return t.filter(Ey).filter(function(n) {
    return n.name === e.name;
  }).filter(function(n) {
    return n.checked;
  })[0] || e;
}, $d = function(e, t) {
  return Ey(e) && e.name ? BA(e, t) : e;
}, zA = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(n) {
    return t.add($d(n, e));
  }), e.filter(function(n) {
    return t.has(n);
  });
}, Rh = function(e) {
  return e[0] && e.length > 1 ? $d(e[0], e) : e[0];
}, Oh = function(e, t) {
  return e.indexOf($d(t, e));
}, jc = "NEW_FOCUS", HA = function(e, t, n, r, i) {
  var a = e.length, o = e[0], s = e[a - 1], l = Ld(r);
  if (!(r && e.indexOf(r) >= 0)) {
    var u = r !== void 0 ? n.indexOf(r) : -1, c = i ? n.indexOf(i) : u, f = i ? e.indexOf(i) : -1;
    if (u === -1)
      return f !== -1 ? f : jc;
    if (f === -1)
      return jc;
    var d = u - c, v = n.indexOf(o), E = n.indexOf(s), x = zA(n), b = r !== void 0 ? x.indexOf(r) : -1, g = i ? x.indexOf(i) : b, h = x.filter(function(T) {
      return T.tabIndex >= 0;
    }), y = r !== void 0 ? h.indexOf(r) : -1, k = i ? h.indexOf(i) : y, S = y >= 0 && k >= 0 ? (
      // old/new are tabbables, measure distance in tabbable space
      k - y
    ) : (
      // or else measure in focusable space
      g - b
    );
    if (!d && f >= 0 || t.length === 0)
      return f;
    var _ = Oh(e, t[0]), A = Oh(e, t[t.length - 1]);
    if (u <= v && l && Math.abs(d) > 1)
      return A;
    if (u >= E && l && Math.abs(d) > 1)
      return _;
    if (d && Math.abs(S) > 1)
      return f;
    if (u <= v)
      return A;
    if (u > E)
      return _;
    if (d)
      return Math.abs(d) > 1 ? f : (a + f + d) % a;
  }
}, VA = function(e) {
  return function(t) {
    var n, r = (n = yy(t)) === null || n === void 0 ? void 0 : n.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      r !== void 0 && r !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, Dh = function(e, t, n) {
  var r = e.map(function(a) {
    var o = a.node;
    return o;
  }), i = Fh(r.filter(VA(n)));
  return i && i.length ? Rh(i) : Rh(Fh(t));
}, Bc = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && Bc(e.parentNode.host || e.parentNode, t), t;
}, mu = function(e, t) {
  for (var n = Bc(e), r = Bc(t), i = 0; i < n.length; i += 1) {
    var a = n[i];
    if (r.indexOf(a) >= 0)
      return a;
  }
  return !1;
}, Sy = function(e, t, n) {
  var r = Ar(e), i = Ar(t), a = r[0], o = !1;
  return i.filter(Boolean).forEach(function(s) {
    o = mu(o || s, s) || o, n.filter(Boolean).forEach(function(l) {
      var u = mu(a, l);
      u && (!o || yr(u, o) ? o = u : o = mu(u, o));
    });
  }), o;
}, Mh = function(e, t) {
  return e.reduce(function(n, r) {
    return n.concat(RA(r, t));
  }, []);
}, $A = function(e, t) {
  var n = /* @__PURE__ */ new Map();
  return t.forEach(function(r) {
    return n.set(r.node, r);
  }), e.map(function(r) {
    return n.get(r);
  }).filter(_A);
}, UA = function(e, t) {
  var n = Oa(Ar(e).length > 0 ? document : my(e).ownerDocument), r = Vd(e).filter(Lc), i = Sy(n || e, e, r), a = /* @__PURE__ */ new Map(), o = Ra(r, a), s = o.filter(function(E) {
    var x = E.node;
    return Lc(x);
  });
  if (s[0]) {
    var l = Ra([i], a).map(function(E) {
      var x = E.node;
      return x;
    }), u = $A(l, s), c = u.map(function(E) {
      var x = E.node;
      return x;
    }), f = u.filter(function(E) {
      var x = E.tabIndex;
      return x >= 0;
    }).map(function(E) {
      var x = E.node;
      return x;
    }), d = HA(c, f, l, n, t);
    if (d === jc) {
      var v = (
        // first try only tabbable, and the fallback to all focusable, as long as at least one element should be picked for focus
        Dh(o, f, Mh(r, a)) || Dh(o, c, Mh(r, a))
      );
      if (v)
        return { node: v };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : u[d];
  }
}, GA = function(e) {
  var t = Vd(e).filter(Lc), n = Sy(e, e, t), r = jd(Ai([n], !0), !0, !0), i = Ai(t, !1);
  return r.map(function(a) {
    var o = a.node, s = a.index;
    return {
      node: o,
      index: s,
      lockItem: i.indexOf(o) >= 0,
      guard: Ld(o)
    };
  });
}, Ud = function(e, t) {
  e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, hu = 0, vu = !1, _y = function(e, t, n) {
  n === void 0 && (n = {});
  var r = UA(e, t);
  if (!vu && r) {
    if (hu > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), vu = !0, setTimeout(function() {
        vu = !1;
      }, 1);
      return;
    }
    hu++, Ud(r.node, n.focusOptions), hu--;
  }
};
function qi(e) {
  if (!e)
    return null;
  if (typeof WeakRef > "u")
    return function() {
      return e || null;
    };
  var t = e ? new WeakRef(e) : null;
  return function() {
    return (t == null ? void 0 : t.deref()) || null;
  };
}
var WA = function(e) {
  if (!e)
    return null;
  for (var t = [], n = e; n && n !== document.body; )
    t.push({
      current: qi(n),
      parent: qi(n.parentElement),
      left: qi(n.previousElementSibling),
      right: qi(n.nextElementSibling)
    }), n = n.parentElement;
  return {
    element: qi(e),
    stack: t,
    ownerDocument: e.ownerDocument
  };
}, qA = function(e) {
  var t, n, r, i, a;
  if (e)
    for (var o = e.stack, s = e.ownerDocument, l = /* @__PURE__ */ new Map(), u = 0, c = o; u < c.length; u++) {
      var f = c[u], d = (t = f.parent) === null || t === void 0 ? void 0 : t.call(f);
      if (d && s.contains(d)) {
        for (var v = (n = f.left) === null || n === void 0 ? void 0 : n.call(f), E = f.current(), x = d.contains(E) ? E : void 0, b = (r = f.right) === null || r === void 0 ? void 0 : r.call(f), g = Hd([d], l), h = (
          // that is element itself
          (a = (i = x ?? // or something in it's place
          (v == null ? void 0 : v.nextElementSibling)) !== null && i !== void 0 ? i : (
            // or somebody to the right, still close enough
            b
          )) !== null && a !== void 0 ? a : (
            // or somebody to the left, something?
            v
          )
        ); h; ) {
          for (var y = 0, k = g; y < k.length; y++) {
            var S = k[y];
            if (h != null && h.contains(S.node))
              return S.node;
          }
          h = h.nextElementSibling;
        }
        if (g.length)
          return g[0].node;
      }
    }
}, Ay = function(e) {
  var t = WA(e);
  return function() {
    return qA(t);
  };
}, KA = function(e, t, n) {
  if (!e || !t)
    return console.error("no element or scope given"), {};
  var r = Ar(t);
  if (r.every(function(o) {
    return !yr(o, e);
  }))
    return console.error("Active element is not contained in the scope"), {};
  var i = n ? Hd(r, /* @__PURE__ */ new Map()) : Ra(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(o) {
    var s = o.node;
    return s === e;
  });
  if (a !== -1)
    return {
      prev: i[a - 1],
      next: i[a + 1],
      first: i[0],
      last: i[i.length - 1]
    };
}, QA = function(e, t) {
  var n = t ? Hd(Ar(e), /* @__PURE__ */ new Map()) : Ra(Ar(e), /* @__PURE__ */ new Map());
  return {
    first: n[0],
    last: n[n.length - 1]
  };
}, XA = function(e) {
  return Object.assign({
    scope: document.body,
    cycle: !0,
    onlyTabbable: !0
  }, e);
}, Ty = function(e, t, n) {
  t === void 0 && (t = {});
  var r = XA(t), i = KA(e, r.scope, r.onlyTabbable);
  if (i) {
    var a = n(i, r.cycle);
    a && Ud(a.node, r.focusOptions);
  }
}, YA = function(e, t) {
  t === void 0 && (t = {}), Ty(e, t, function(n, r) {
    var i = n.next, a = n.first;
    return i || r && a;
  });
}, ZA = function(e, t) {
  t === void 0 && (t = {}), Ty(e, t, function(n, r) {
    var i = n.prev, a = n.last;
    return i || r && a;
  });
}, Ny = function(e, t, n) {
  var r, i = QA(e, (r = t.onlyTabbable) !== null && r !== void 0 ? r : !0), a = i[n];
  a && Ud(a.node, t.focusOptions);
}, JA = function(e, t) {
  t === void 0 && (t = {}), Ny(e, t, "first");
}, eT = function(e, t) {
  t === void 0 && (t = {}), Ny(e, t, "last");
}, Iy = function() {
  return document && document.activeElement === document.body;
}, tT = function() {
  return Iy() || jA();
}, ci = null, ct = null, Lh = function() {
  return null;
}, pi = null, Da = !1, Gd = !1, nT = function() {
  return !0;
}, rT = function(t) {
  return (ci.whiteList || nT)(t);
}, iT = function(t, n) {
  pi = {
    observerNode: t,
    portaledElement: n
  };
}, aT = function(t) {
  return pi && pi.portaledElement === t;
};
function jh(e, t, n, r) {
  var i = null, a = e;
  do {
    var o = r[a];
    if (o.guard)
      o.node.dataset.focusAutoGuard && (i = o);
    else if (o.lockItem) {
      if (a !== e)
        return;
      i = null;
    } else
      break;
  } while ((a += n) !== t);
  i && (i.node.tabIndex = 0);
}
var oT = function(t) {
  return t ? !!Da : Da === "meanwhile";
}, sT = function e(t, n, r) {
  return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, lT = function(t, n) {
  return n.some(function(r) {
    return sT(t, r, r);
  });
}, Py = function(t) {
  return Ra(t, /* @__PURE__ */ new Map());
}, uT = function(t) {
  return !Py([t.parentNode]).some(function(n) {
    return n.node === t;
  });
}, Es = function() {
  var t = !1;
  if (ci) {
    var n = ci, r = n.observed, i = n.persistentFocus, a = n.autoFocus, o = n.shards, s = n.crossFrame, l = n.focusOptions, u = n.noFocusGuards, c = r || pi && pi.portaledElement;
    if (Iy() && ct && ct !== document.body && (!document.body.contains(ct) || uT(ct))) {
      var f = Lh();
      f && f.focus();
    }
    var d = document && document.activeElement;
    if (c) {
      var v = [c].concat(o.map(dA).filter(Boolean)), E = function() {
        if (!oT(s) || !u || !ct || Gd)
          return !1;
        var y = Py(v), k = y.findIndex(function(S) {
          var _ = S.node;
          return _ === ct;
        });
        return k === 0 || k === y.length - 1;
      };
      if ((!d || rT(d)) && (i || E() || !tT() || !ct && a) && (c && !(Cy(v) || d && lT(d, v) || aT(d)) && (document && !ct && d && !a ? (d.blur && d.blur(), document.body.focus()) : (t = _y(v, ct, {
        focusOptions: l
      }), pi = {})), ct = document && document.activeElement, ct !== document.body && (Lh = Ay(ct)), Da = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
        var x = document && document.activeElement, b = GA(v), g = b.map(function(h) {
          var y = h.node;
          return y;
        }).indexOf(x);
        g > -1 && (b.filter(function(h) {
          var y = h.guard, k = h.node;
          return y && k.dataset.focusAutoGuard;
        }).forEach(function(h) {
          var y = h.node;
          return y.removeAttribute("tabIndex");
        }), jh(g, b.length, 1, b), jh(g, -1, -1, b));
      }
    }
  }
  return t;
}, Fy = function(t) {
  Es() && t && (t.stopPropagation(), t.preventDefault());
}, Wd = function() {
  return Md(Es);
}, cT = function(t) {
  var n = t.target, r = t.currentTarget;
  r.contains(n) || iT(r, n);
}, pT = function() {
  return null;
}, Ry = function() {
  Gd = !0;
}, Oy = function() {
  Gd = !1, Da = "just", Md(function() {
    Da = "meanwhile";
  });
}, dT = function() {
  document.addEventListener("focusin", Fy), document.addEventListener("focusout", Wd), window.addEventListener("focus", Ry), window.addEventListener("blur", Oy);
}, fT = function() {
  document.removeEventListener("focusin", Fy), document.removeEventListener("focusout", Wd), window.removeEventListener("focus", Ry), window.removeEventListener("blur", Oy);
};
function mT(e) {
  return e.filter(function(t) {
    var n = t.disabled;
    return !n;
  });
}
var Dy = {
  moveFocusInside: _y,
  focusInside: Cy,
  focusNextElement: YA,
  focusPrevElement: ZA,
  focusFirstElement: JA,
  focusLastElement: eT,
  captureFocusRestore: Ay
};
function hT(e) {
  var t = e.slice(-1)[0];
  t && !ci && dT();
  var n = ci, r = n && t && t.id === n.id;
  ci = t, n && !r && (n.onDeactivation(), e.filter(function(i) {
    var a = i.id;
    return a === n.id;
  }).length || n.returnFocus(!t)), t ? (ct = null, (!r || n.observed !== t.observed) && t.onActivation(Dy), Es(), Md(Es)) : (fT(), ct = null);
}
ly.assignSyncMedium(cT);
uy.assignMedium(Wd);
uA.assignMedium(function(e) {
  return e(Dy);
});
const vT = xA(mT, hT)(pT);
Od(cy, vT);
var gT = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function xT() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = gT();
  return t && e.setAttribute("nonce", t), e;
}
function yT(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function wT(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ET = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = xT()) && (yT(t, n), wT(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, bT = function() {
  var e = ET();
  return function(t, n) {
    w.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, qd = function() {
  var e = bT(), t = function(n) {
    var r = n.styles, i = n.dynamic;
    return e(r, i), null;
  };
  return t;
}, kT = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, gu = function(e) {
  return parseInt(e || "", 10) || 0;
}, CT = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [gu(n), gu(r), gu(i)];
}, ST = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return kT;
  var t = CT(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, _T = qd(), di = "data-scroll-locked", AT = function(e, t, n, r) {
  var i = e.left, a = e.top, o = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(nA, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(di, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(i, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(o, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Vo, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat($o, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Vo, " .").concat(Vo, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat($o, " .").concat($o, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(di, `] {
    `).concat(rA, ": ").concat(s, `px;
  }
`);
}, Bh = function() {
  var e = parseInt(document.body.getAttribute(di) || "0", 10);
  return isFinite(e) ? e : 0;
}, TT = function() {
  w.useEffect(function() {
    return document.body.setAttribute(di, (Bh() + 1).toString()), function() {
      var e = Bh() - 1;
      e <= 0 ? document.body.removeAttribute(di) : document.body.setAttribute(di, e.toString());
    };
  }, []);
}, NT = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
  TT();
  var a = w.useMemo(function() {
    return ST(i);
  }, [i]);
  return w.createElement(_T, { styles: AT(a, !t, i, n ? "" : "!important") });
}, zc = !1;
if (typeof window < "u")
  try {
    var bo = Object.defineProperty({}, "passive", {
      get: function() {
        return zc = !0, !0;
      }
    });
    window.addEventListener("test", bo, bo), window.removeEventListener("test", bo, bo);
  } catch {
    zc = !1;
  }
var Br = zc ? { passive: !1 } : !1, IT = function(e) {
  return e.tagName === "TEXTAREA";
}, My = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !IT(e) && n[t] === "visible")
  );
}, PT = function(e) {
  return My(e, "overflowY");
}, FT = function(e) {
  return My(e, "overflowX");
}, zh = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var i = Ly(e, r);
    if (i) {
      var a = jy(e, r), o = a[1], s = a[2];
      if (o > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, RT = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, OT = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ly = function(e, t) {
  return e === "v" ? PT(t) : FT(t);
}, jy = function(e, t) {
  return e === "v" ? RT(t) : OT(t);
}, DT = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, MT = function(e, t, n, r, i) {
  var a = DT(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, l = t.contains(s), u = !1, c = o > 0, f = 0, d = 0;
  do {
    if (!s)
      break;
    var v = jy(e, s), E = v[0], x = v[1], b = v[2], g = x - b - a * E;
    (E || g) && Ly(e, s) && (f += g, d += E);
    var h = s.parentNode;
    s = h && h.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? h.host : h;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (c && Math.abs(f) < 1 || !c && Math.abs(d) < 1) && (u = !0), u;
}, ko = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Hh = function(e) {
  return [e.deltaX, e.deltaY];
}, Vh = function(e) {
  return e && "current" in e ? e.current : e;
}, LT = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, jT = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, BT = 0, zr = [];
function zT(e) {
  var t = w.useRef([]), n = w.useRef([0, 0]), r = w.useRef(), i = w.useState(BT++)[0], a = w.useState(qd)[0], o = w.useRef(e);
  w.useEffect(function() {
    o.current = e;
  }, [e]), w.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var x = Le([e.lockRef.current], (e.shards || []).map(Vh), !0).filter(Boolean);
      return x.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(i));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(i)), x.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(i));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = w.useCallback(function(x, b) {
    if ("touches" in x && x.touches.length === 2 || x.type === "wheel" && x.ctrlKey)
      return !o.current.allowPinchZoom;
    var g = ko(x), h = n.current, y = "deltaX" in x ? x.deltaX : h[0] - g[0], k = "deltaY" in x ? x.deltaY : h[1] - g[1], S, _ = x.target, A = Math.abs(y) > Math.abs(k) ? "h" : "v";
    if ("touches" in x && A === "h" && _.type === "range")
      return !1;
    var T = zh(A, _);
    if (!T)
      return !0;
    if (T ? S = A : (S = A === "v" ? "h" : "v", T = zh(A, _)), !T)
      return !1;
    if (!r.current && "changedTouches" in x && (y || k) && (r.current = S), !S)
      return !0;
    var O = r.current || S;
    return MT(O, b, x, O === "h" ? y : k);
  }, []), l = w.useCallback(function(x) {
    var b = x;
    if (!(!zr.length || zr[zr.length - 1] !== a)) {
      var g = "deltaY" in b ? Hh(b) : ko(b), h = t.current.filter(function(S) {
        return S.name === b.type && (S.target === b.target || b.target === S.shadowParent) && LT(S.delta, g);
      })[0];
      if (h && h.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!h) {
        var y = (o.current.shards || []).map(Vh).filter(Boolean).filter(function(S) {
          return S.contains(b.target);
        }), k = y.length > 0 ? s(b, y[0]) : !o.current.noIsolation;
        k && b.cancelable && b.preventDefault();
      }
    }
  }, []), u = w.useCallback(function(x, b, g, h) {
    var y = { name: x, delta: b, target: g, should: h, shadowParent: HT(g) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(k) {
        return k !== y;
      });
    }, 1);
  }, []), c = w.useCallback(function(x) {
    n.current = ko(x), r.current = void 0;
  }, []), f = w.useCallback(function(x) {
    u(x.type, Hh(x), x.target, s(x, e.lockRef.current));
  }, []), d = w.useCallback(function(x) {
    u(x.type, ko(x), x.target, s(x, e.lockRef.current));
  }, []);
  w.useEffect(function() {
    return zr.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", l, Br), document.addEventListener("touchmove", l, Br), document.addEventListener("touchstart", c, Br), function() {
      zr = zr.filter(function(x) {
        return x !== a;
      }), document.removeEventListener("wheel", l, Br), document.removeEventListener("touchmove", l, Br), document.removeEventListener("touchstart", c, Br);
    };
  }, []);
  var v = e.removeScrollBar, E = e.inert;
  return w.createElement(
    w.Fragment,
    null,
    E ? w.createElement(a, { styles: jT(i) }) : null,
    v ? w.createElement(NT, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function HT(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
Od(oy, zT);
var VT = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Hr = /* @__PURE__ */ new WeakMap(), Co = /* @__PURE__ */ new WeakMap(), So = {}, xu = 0, By = function(e) {
  return e && (e.host || By(e.parentNode));
}, $T = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = By(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, UT = function(e, t, n, r) {
  var i = $T(t, Array.isArray(e) ? e : [e]);
  So[n] || (So[n] = /* @__PURE__ */ new WeakMap());
  var a = So[n], o = [], s = /* @__PURE__ */ new Set(), l = new Set(i), u = function(f) {
    !f || s.has(f) || (s.add(f), u(f.parentNode));
  };
  i.forEach(u);
  var c = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(d) {
      if (s.has(d))
        c(d);
      else
        try {
          var v = d.getAttribute(r), E = v !== null && v !== "false", x = (Hr.get(d) || 0) + 1, b = (a.get(d) || 0) + 1;
          Hr.set(d, x), a.set(d, b), o.push(d), x === 1 && E && Co.set(d, !0), b === 1 && d.setAttribute(n, "true"), E || d.setAttribute(r, "true");
        } catch (g) {
          console.error("aria-hidden: cannot operate on ", d, g);
        }
    });
  };
  return c(t), s.clear(), xu++, function() {
    o.forEach(function(f) {
      var d = Hr.get(f) - 1, v = a.get(f) - 1;
      Hr.set(f, d), a.set(f, v), d || (Co.has(f) || f.removeAttribute(r), Co.delete(f)), v || f.removeAttribute(n);
    }), xu--, xu || (Hr = /* @__PURE__ */ new WeakMap(), Hr = /* @__PURE__ */ new WeakMap(), Co = /* @__PURE__ */ new WeakMap(), So = {});
  };
}, GT = function(e, t, n) {
  var r = Array.from(Array.isArray(e) ? e : [e]), i = t || VT(e);
  return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), UT(r, i, n, "aria-hidden")) : function() {
    return null;
  };
}, WT = qd(), qT = `
 [` + fy + `] {
   pointer-events: none !important;
 }
`, KT = function() {
  return w.createElement(WT, { styles: qT });
}, $h = function(e) {
  return "current" in e ? e.current : e;
};
function QT(e) {
  var t = e.setLockProps, n = e.onEscapeKey, r = e.onClickOutside, i = e.shards, a = e.onActivation, o = e.onDeactivation, s = e.noIsolation, l = w.useState(void 0), u = l[0], c = l[1], f = w.useRef(null), d = w.useRef(0);
  return w.useEffect(function() {
    var v = function(g) {
      g.defaultPrevented || (g.code === "Escape" || g.key === "Escape" || g.keyCode === 27) && n && n(g);
    }, E = function(g) {
      g.defaultPrevented || g.target === f.current || g instanceof MouseEvent && g.button !== 0 || i && i.map($h).some(function(h) {
        return h && h.contains(g.target) || h === g.target;
      }) || r && r(g);
    }, x = function(g) {
      E(g), d.current = g.touches.length;
    }, b = function(g) {
      d.current = g.touches.length;
    };
    if (u)
      return u.ownerDocument.addEventListener("keydown", v), u.ownerDocument.addEventListener("mousedown", E), u.ownerDocument.addEventListener("touchstart", x), u.ownerDocument.addEventListener("touchend", b), function() {
        u.ownerDocument.removeEventListener("keydown", v), u.ownerDocument.removeEventListener("mousedown", E), u.ownerDocument.removeEventListener("touchstart", x), u.ownerDocument.removeEventListener("touchend", b);
      };
  }, [u, r, n]), w.useEffect(function() {
    if (u)
      return a && a(u), function() {
        o && o();
      };
  }, [!!u]), w.useEffect(function() {
    var v = function() {
      return null;
    }, E = !1, x = function(g) {
      s || (v = GT(Hb([g], (i || []).map($h)), g.ownerDocument.body, fy)), c(function() {
        return g;
      });
    }, b = function() {
      v(), E || c(null);
    };
    return t({
      onMouseDown: function(g) {
        f.current = g.target;
      },
      onTouchStart: function(g) {
        f.current = g.target;
      },
      onActivation: x,
      onDeactivation: b
    }), function() {
      E = !0, t(!1);
    };
  }, []), w.createElement(KT, null);
}
const XT = Od(dy, QT);
var YT = function(e) {
  return w.createElement(XT, j({}, e));
}, ZT = w.forwardRef(function(e, t) {
  return w.createElement(mA, j({}, e, { ref: t, sideCar: YT }));
});
class JT extends m.Component {
  constructor(t) {
    if (super(t), this.rootName = "paragon-portal-root", typeof document > "u")
      this.rootElement = null;
    else if (document.getElementById(this.rootName))
      this.rootElement = document.getElementById(this.rootName);
    else {
      const n = document.createElement("div");
      n.setAttribute("id", this.rootName), this.rootElement = document.body.appendChild(n);
    }
  }
  render() {
    return this.rootElement ? /* @__PURE__ */ fr.createPortal(this.props.children, this.rootElement) : null;
  }
}
function eN({
  onClick: e
}) {
  return /* @__PURE__ */ m.createElement("div", {
    className: "pgn__modal-backdrop",
    onClick: e,
    onKeyDown: e,
    "data-testid": "modal-backdrop",
    role: "presentation"
  });
}
function tN({
  children: e = null
}) {
  return /* @__PURE__ */ m.createElement("div", {
    className: "pgn__modal-content-container"
  }, e);
}
function nN({
  children: e,
  onClose: t,
  isOpen: n,
  isBlocking: r = !1,
  zIndex: i
}) {
  if (w.useEffect(() => (n ? document.body.classList.add("pgn__hidden-scroll-padding-right") : document.body.classList.remove("pgn__hidden-scroll-padding-right"), () => {
    document.body.classList.remove("pgn__hidden-scroll-padding-right");
  }), [n]), !n)
    return null;
  const a = r ? void 0 : t;
  return /* @__PURE__ */ m.createElement(tA, {
    onClose: t,
    isOpen: n,
    isBlocking: r
  }, /* @__PURE__ */ m.createElement(JT, null, /* @__PURE__ */ m.createElement(ZT, {
    allowPinchZoom: !0,
    scrollLock: !0,
    enabled: n,
    onEscapeKey: a,
    onClickOutside: a,
    className: F("pgn__modal-layer", i ? `zindex-${i}` : "")
  }, /* @__PURE__ */ m.createElement(tN, null, /* @__PURE__ */ m.createElement(eN, {
    onClick: a
  }), e))));
}
const vl = /* @__PURE__ */ m.forwardRef(({
  as: e,
  children: t,
  ...n
}, r) => {
  const {
    onClose: i
  } = w.useContext(ty), a = e, o = {
    ...n,
    className: F("pgn__modal-close-button", n.className),
    onClick: () => {
      i(), n.onClick && n.onClick();
    },
    ref: r
  };
  return /* @__PURE__ */ m.createElement(a, o, t);
});
vl.propTypes = {
  /** Specifies the base element */
  as: p.elementType,
  /** Specifies the content of the button */
  children: p.node,
  /** Specifies class name to append to the base element */
  className: p.string,
  /** Specifies the callback function when the close button is clicked */
  onClick: p.func
};
vl.defaultProps = {
  as: je,
  onClick: void 0,
  className: void 0,
  children: null
};
const Kd = /* @__PURE__ */ m.forwardRef(({
  as: e = "div",
  children: t,
  ...n
}, r) => /* @__PURE__ */ m.createElement(e, {
  ...n,
  ref: r,
  className: F("pgn__modal-header", n.className)
}, t));
Kd.propTypes = {
  /** Specifies the base element */
  as: p.elementType,
  /** Specifies the contents of the header */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element */
  className: p.string
};
Kd.defaultProps = {
  as: "div",
  className: ""
};
function Qd({
  as: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ m.createElement(e, {
    ...n,
    className: F("pgn__modal-title", n.className)
  }, t);
}
Qd.propTypes = {
  /** Specifies the base element */
  as: p.elementType,
  /** Specifies the contents of the header */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element */
  className: p.string
};
Qd.defaultProps = {
  as: "h2",
  className: void 0
};
function Xd({
  as: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ m.createElement(e, {
    ...n,
    className: F("pgn__modal-footer", n.className)
  }, t);
}
Xd.propTypes = {
  /** Specifies the base element */
  as: p.elementType,
  /** Specifies the contents of the header */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element */
  className: p.string
};
Xd.defaultProps = {
  as: "div",
  className: void 0
};
const Uh = (e = !0) => {
  const t = w.useRef(null), [n, r] = w.useState(e);
  return w.useEffect(() => {
    try {
      if (t.current) {
        const i = new IntersectionObserver((a) => {
          a.forEach(({
            isIntersecting: o
          }) => {
            r(o);
          });
        }, {});
        return i.observe(t.current), () => {
          i.disconnect();
        };
      }
    } catch (i) {
      if (!(i instanceof ReferenceError))
        throw i;
    }
    return () => {
    };
  }, []), [n, t];
};
function Yd({
  as: e,
  children: t,
  ...n
}) {
  const [r, i] = Uh(), [a, o] = Uh(), s = F("pgn__modal-body", n.className, {
    "pgn__modal-body-scroll-top": r,
    "pgn__modal-body-scroll-bottom": a
  });
  return /* @__PURE__ */ m.createElement(e, {
    ...n,
    className: s
  }, /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("div", {
    ref: i
  }), /* @__PURE__ */ m.createElement("div", {
    className: "pgn__modal-body-content"
  }, t), /* @__PURE__ */ m.createElement("div", {
    ref: o
  })));
}
Yd.propTypes = {
  /** Specifies the base element */
  as: p.elementType,
  /** Specifies the contents of the header */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element */
  className: p.string
};
Yd.defaultProps = {
  as: "div",
  className: void 0
};
function Zd({
  as: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ m.createElement(e, {
    ...n,
    className: F("pgn__modal-hero-content", n.className)
  }, t);
}
Zd.propTypes = {
  as: p.elementType,
  children: p.node.isRequired,
  className: p.string
};
Zd.defaultProps = {
  as: "div",
  className: void 0
};
function Jd({
  as: e,
  backgroundSrc: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ m.createElement(e, {
    ...r,
    className: F("pgn__modal-hero-bg", r.className),
    style: {
      backgroundImage: t ? `url(${t})` : void 0,
      ...r.style
    }
  }, n);
}
Jd.propTypes = {
  as: p.elementType,
  backgroundSrc: p.string,
  children: p.node,
  className: p.string,
  style: p.shape({})
};
Jd.defaultProps = {
  as: "div",
  backgroundSrc: void 0,
  children: null,
  className: void 0,
  style: {}
};
function qa({
  as: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ m.createElement(e, {
    ...n,
    className: F("pgn__modal-hero", n.className)
  }, t);
}
qa.propTypes = {
  as: p.elementType,
  children: p.node.isRequired,
  className: p.string
};
qa.defaultProps = {
  as: "div",
  className: void 0
};
qa.Content = Zd;
qa.Background = Jd;
const rN = {
  closeButtonText: {
    id: "pgn.Modal.closeButon",
    defaultMessage: "Close",
    description: "Accessible name for the close button in the modal dialog"
  }
};
function Gt({
  children: e,
  title: t,
  isOpen: n = !1,
  onClose: r,
  size: i = "md",
  variant: a = "default",
  hasCloseButton: o = !0,
  closeLabel: s,
  isFullscreenScroll: l = !1,
  className: u,
  isFullscreenOnMobile: c = !1,
  isBlocking: f = !1,
  zIndex: d,
  isOverflowVisible: v
}) {
  const E = Pr(), x = s || E.formatMessage(rN.closeButtonText), b = D0({
    query: "(max-width: 767.98px)"
  }), g = c && b;
  return /* @__PURE__ */ m.createElement(nN, {
    isOpen: n,
    onClose: r,
    isBlocking: f,
    zIndex: d
  }, /* @__PURE__ */ m.createElement("div", {
    role: "dialog",
    "aria-label": t,
    className: F("pgn__modal", {
      [`pgn__modal-${g ? "fullscreen" : i}`]: i,
      [`pgn__modal-${a}`]: a,
      "pgn__modal-scroll-fullscreen": l,
      "pgn__modal-visible-overflow": v
    }, u)
  }, o && /* @__PURE__ */ m.createElement("div", {
    className: "pgn__modal-close-container"
  }, /* @__PURE__ */ m.createElement(vl, {
    as: ol,
    iconAs: kt,
    invertColors: a === "dark",
    src: z0,
    alt: x
  })), e));
}
Gt.Header = Kd;
Gt.Title = Qd;
Gt.Footer = Xd;
Gt.CloseButton = vl;
Gt.Body = Yd;
Gt.Hero = qa;
function iN() {
  const [e, t] = w.useState({
    width: void 0,
    height: void 0
  });
  return w.useLayoutEffect(() => {
    function n() {
      t({
        width: global.innerWidth,
        height: global.innerHeight
      });
    }
    return global.addEventListener("resize", n), n(), () => global.removeEventListener("resize", n);
  }, []), e;
}
const fi = /* @__PURE__ */ m.forwardRef((e, t) => /* @__PURE__ */ m.createElement(td, {
  ...e,
  ref: t
})), aN = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
fi.propTypes = {
  /** Specifies element type for this component */
  as: p.elementType,
  /** Visual style of the badge */
  variant: p.oneOf(aN),
  /** Add the `pill` modifier to make badges more rounded with some additional horizontal padding */
  pill: p.bool,
  /** Overrides underlying component base CSS class name */
  bsPrefix: p.string
};
fi.defaultProps = {
  as: "span",
  variant: "primary",
  pill: !1,
  bsPrefix: "badge"
};
const gl = /* @__PURE__ */ m.forwardRef(({
  className: e,
  children: t,
  ...n
}, r) => /* @__PURE__ */ m.createElement("div", {
  className: F("pgn__card-body", e),
  ref: r,
  ...n
}, t));
gl.propTypes = {
  /** Specifies the content of the component. */
  children: p.node,
  /** The class to append to the base element. */
  className: p.string
};
gl.defaultProps = {
  children: void 0,
  className: void 0
};
const Gh = "card", yu = ["primary", "secondary", "success", "danger", "warning", "info", "dark", "light"], oN = ["white", "muted"], ef = /* @__PURE__ */ m.forwardRef(({
  prefix: e,
  className: t,
  bgColor: n,
  textColor: r,
  borderColor: i,
  hasBody: a = !1,
  children: o,
  as: s = "div",
  ...l
}, u) => {
  const c = F(t, e ? `${e}-${Gh}` : Gh, n && `bg-${n}`, r && `text-${r}`, i && `border-${i}`);
  return /* @__PURE__ */ m.createElement(s, {
    ref: u,
    ...l,
    className: c
  }, a ? /* @__PURE__ */ m.createElement(gl, null, o) : o);
});
ef.propTypes = {
  /** Prefix for component CSS classes. */
  prefix: p.string,
  /** Background color of the card. */
  bgColor: p.oneOf(yu),
  /** Text color of the card. */
  textColor: p.oneOf([...yu, ...oN]),
  /** Border color of the card. */
  borderColor: p.oneOf(yu),
  /** Determines whether the card should render its children inside a `CardBody` wrapper. */
  hasBody: p.bool,
  /** Set a custom element for this component. */
  as: p.elementType,
  /** Additional CSS class names to apply to the card element. */
  className: p.string,
  /** The content to render inside the card. */
  children: p.node
};
const Or = /* @__PURE__ */ w.createContext({});
function tf({
  orientation: e,
  children: t,
  isLoading: n,
  variant: r
}) {
  return /* @__PURE__ */ m.createElement(Or.Provider, {
    value: {
      orientation: e,
      isLoading: n,
      variant: r
    }
  }, t);
}
tf.propTypes = {
  /** Specifies which orientation to use. */
  orientation: p.oneOf(["horizontal", "vertical"]),
  /** Specifies loading state. */
  isLoading: p.bool,
  /** Specifies content of the component. */
  children: p.node,
  /** Specifies `Card` style variant */
  variant: p.oneOf(["light", "dark", "muted"])
};
tf.defaultProps = {
  orientation: "vertical",
  isLoading: !1,
  children: null,
  variant: "light"
};
const sN = m.createContext({}), zy = !0;
function lN({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: i, circle: a, direction: o, duration: s, enableAnimation: l = zy, customHighlightBackground: u }) {
  const c = {};
  return o === "rtl" && (c["--animation-direction"] = "reverse"), typeof s == "number" && (c["--animation-duration"] = `${s}s`), l || (c["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (c.width = n), (typeof r == "string" || typeof r == "number") && (c.height = r), (typeof i == "string" || typeof i == "number") && (c.borderRadius = i), a && (c.borderRadius = "50%"), typeof e < "u" && (c["--base-color"] = e), typeof t < "u" && (c["--highlight-color"] = t), typeof u == "string" && (c["--custom-highlight-background"] = u), c;
}
function Ti({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: i, circle: a = !1, style: o, ...s }) {
  var l, u, c;
  const f = m.useContext(sN), d = { ...s };
  for (const [y, k] of Object.entries(s))
    typeof k > "u" && delete d[y];
  const v = {
    ...f,
    ...d,
    circle: a
  }, E = {
    ...o,
    ...lN(v)
  };
  let x = "react-loading-skeleton";
  n && (x += ` ${n}`);
  const b = (l = v.inline) !== null && l !== void 0 ? l : !1, g = [], h = Math.ceil(e);
  for (let y = 0; y < h; y++) {
    let k = E;
    if (h > e && y === h - 1) {
      const _ = (u = k.width) !== null && u !== void 0 ? u : "100%", A = e % 1, T = typeof _ == "number" ? _ * A : `calc(${_} * ${A})`;
      k = { ...k, width: T };
    }
    const S = m.createElement("span", { className: x, style: k, key: y }, "‌");
    b ? g.push(S) : g.push(m.createElement(
      m.Fragment,
      { key: y },
      S,
      m.createElement("br", null)
    ));
  }
  return m.createElement("span", { className: r, "data-testid": i, "aria-live": "polite", "aria-busy": (c = v.enableAnimation) !== null && c !== void 0 ? c : zy }, t ? g.map((y, k) => m.createElement(t, { key: k }, y)) : g);
}
const uN = 20, nf = /* @__PURE__ */ m.forwardRef(({
  actions: e,
  className: t,
  size: n,
  subtitle: r,
  title: i,
  skeletonHeight: a,
  skeletonWidth: o
}, s) => {
  const {
    isLoading: l
  } = w.useContext(Or), u = w.useCallback((c) => {
    if (/* @__PURE__ */ m.isValidElement(c)) {
      const {
        children: f
      } = c.props, d = {
        size: n,
        children: Array.isArray(f) ? f.map(u) : u(f)
      };
      return /* @__PURE__ */ m.cloneElement(c, d);
    }
    return c;
  }, [n]);
  return l ? /* @__PURE__ */ m.createElement("div", {
    className: F("pgn__card-header", t)
  }, /* @__PURE__ */ m.createElement(Ti, {
    containerClassName: "pgn__card-header-loader",
    height: a,
    width: o
  })) : /* @__PURE__ */ m.createElement("div", {
    className: F("pgn__card-header", t),
    ref: s
  }, /* @__PURE__ */ m.createElement("div", {
    className: "pgn__card-header-content"
  }, i && /* @__PURE__ */ m.createElement("div", {
    className: `pgn__card-header-title-${n}`
  }, i), r && /* @__PURE__ */ m.createElement("div", {
    className: `pgn__card-header-subtitle-${n}`
  }, r)), e && /* @__PURE__ */ m.createElement("div", {
    className: "pgn__card-header-actions"
  }, n !== "md" ? u(e) : e));
});
nf.propTypes = {
  /** Optional node to render on the top right of the card header,
   *  i.e. ActionRow or a DropdownMenu.
   * */
  actions: p.node,
  /** The class name for the CardHeader component */
  className: p.string,
  /** The title for the CardHeader component */
  title: p.node,
  /** The size of the CardHeader component */
  size: p.oneOf(["sm", "md"]),
  /** The subtitle of the CardHeader component */
  subtitle: p.node,
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: p.number,
  /** Specifies width of  skeleton in loading state. */
  skeletonWidth: p.number
};
nf.defaultProps = {
  actions: null,
  className: null,
  size: "md",
  title: null,
  subtitle: null,
  skeletonHeight: uN,
  skeletonWidth: null
};
const rf = /* @__PURE__ */ m.forwardRef(({
  className: e,
  ...t
}, n) => /* @__PURE__ */ m.createElement("div", {
  className: F("pgn__card-divider", e),
  ref: n,
  ...t
}));
rf.propTypes = {
  /** Specifies class name to append to the base element. */
  className: p.string
};
rf.defaultProps = {
  className: void 0
};
const cN = 100, af = /* @__PURE__ */ m.forwardRef(({
  className: e,
  children: t,
  title: n,
  actions: r,
  muted: i,
  skeletonHeight: a,
  skeletonWidth: o
}, s) => {
  const {
    isLoading: l
  } = w.useContext(Or);
  return l ? /* @__PURE__ */ m.createElement("div", {
    className: F("pgn__card-section", e, {
      "is-muted": i
    })
  }, /* @__PURE__ */ m.createElement(Ti, {
    containerClassName: "pgn__card-section-loader",
    height: a,
    width: o
  })) : /* @__PURE__ */ m.createElement("div", {
    className: F("pgn__card-section", e, {
      "is-muted": i
    }),
    ref: s
  }, n && /* @__PURE__ */ m.createElement("div", {
    className: "pgn__card-section-title"
  }, n), t, r && /* @__PURE__ */ m.createElement("div", {
    className: "pgn__card-section-actions"
  }, r));
});
af.propTypes = {
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies contents of the component. */
  children: p.node,
  /** Specifies title of the `Section`. */
  title: p.node,
  /** Specifies node to render on the bottom right of the `Section` (i.e. `ActionRow`). */
  actions: p.node,
  /** Specifies whether to display `Section` with muted styling. */
  muted: p.bool,
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: p.number,
  /** Specifies width of skeleton in loading state. */
  skeletonWidth: p.number
};
af.defaultProps = {
  children: null,
  className: void 0,
  title: void 0,
  actions: void 0,
  muted: !1,
  skeletonHeight: cN,
  skeletonWidth: void 0
};
const pN = 18, of = /* @__PURE__ */ m.forwardRef(({
  children: e,
  className: t,
  isStacked: n,
  textElement: r,
  skeletonHeight: i,
  skeletonWidth: a,
  orientation: o
}, s) => {
  const {
    orientation: l,
    isLoading: u
  } = w.useContext(Or), c = o || l, f = `pgn__card-footer ${c}${n ? "-stacked" : ""}`, d = `pgn__card-footer-text ${c}${n ? "-stacked" : ""}`;
  return u ? /* @__PURE__ */ m.createElement("div", {
    className: F(t, f)
  }, /* @__PURE__ */ m.createElement(Ti, {
    containerClassName: "pgn__card-footer-loader",
    height: i,
    width: a
  })) : /* @__PURE__ */ m.createElement("div", {
    className: F(t, f),
    ref: s
  }, r && /* @__PURE__ */ m.createElement("div", {
    className: d
  }, r), e);
});
of.propTypes = {
  /** Specifies contents of the component. */
  children: p.node,
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Optional node to display near actions. Should be either a plain text or an element containing text (e.g. link). */
  textElement: p.node,
  /** Specifies whether to use stacked variant. */
  isStacked: p.bool,
  /** Specifies which orientation to use. This prop will override context value if provided. */
  orientation: p.oneOf(["horizontal", "vertical"]),
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: p.number,
  /** Specifies width of skeleton in loading state. */
  skeletonWidth: p.number
};
of.defaultProps = {
  children: null,
  className: void 0,
  textElement: void 0,
  isStacked: !1,
  orientation: void 0,
  skeletonHeight: pN,
  skeletonWidth: void 0
};
const Hy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACMCAYAAAB/AhJnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7dRBEYBADACxwuDf5j0QUXywiYhc7zk7APzd3gNAgvABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIp4BaNpp2Q/3/wfPkGyXOQAAAABJRU5ErkJggg==", dN = 140, fN = 41, sf = /* @__PURE__ */ m.forwardRef(({
  src: e,
  fallbackSrc: t,
  srcAlt: n,
  logoSrc: r,
  fallbackLogoSrc: i,
  logoAlt: a,
  skeletonHeight: o,
  skeletonWidth: s,
  logoSkeleton: l,
  logoSkeletonHeight: u,
  logoSkeletonWidth: c,
  className: f,
  imageLoadingType: d
}, v) => {
  const {
    orientation: E,
    isLoading: x
  } = w.useContext(Or), [b, g] = w.useState(!1), [h, y] = w.useState(!1), k = `pgn__card-wrapper-image-cap ${E}`;
  if (x)
    return /* @__PURE__ */ m.createElement("div", {
      className: F(k, f),
      "data-testid": "image-loader-wrapper"
    }, /* @__PURE__ */ m.createElement(Ti, {
      containerClassName: "pgn__card-image-cap-loader",
      height: E === "horizontal" ? "100%" : o,
      width: s
    }), l && /* @__PURE__ */ m.createElement(Ti, {
      containerClassName: "pgn__card-logo-cap",
      height: u,
      width: c
    }));
  const S = (_, A, T) => {
    const {
      currentTarget: O
    } = _;
    if (!A || O.src.endsWith(A)) {
      T === "imageCap" ? O.src = Hy : y(!1);
      return;
    }
    O.src = A;
  };
  return /* @__PURE__ */ m.createElement("div", {
    className: F(f, k),
    ref: v
  }, !!e && /* @__PURE__ */ m.createElement("img", {
    className: F("pgn__card-image-cap", {
      show: b
    }),
    src: e,
    onError: (_) => S(_, t, "imageCap"),
    onLoad: () => g(!0),
    alt: n,
    loading: d
  }), !!r && /* @__PURE__ */ m.createElement("img", {
    className: F("pgn__card-logo-cap", {
      show: h
    }),
    src: r,
    onError: (_) => S(_, i, "logoCap"),
    onLoad: () => y(!0),
    alt: a,
    loading: d
  }));
});
sf.propTypes = {
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies image src. */
  src: p.string,
  /** Specifies fallback image src. */
  fallbackSrc: p.string,
  /** Specifies image alt text. */
  srcAlt: p.string,
  /** Specifies logo src to put on top of the image. */
  logoSrc: p.string,
  /** Specifies fallback image logo src. */
  fallbackLogoSrc: p.string,
  /** Specifies logo image alt text. */
  logoAlt: p.string,
  /** Specifies height of Image skeleton in loading state. */
  skeletonHeight: p.number,
  /** Specifies width of Image skeleton in loading state. */
  skeletonWidth: p.number,
  /** Specifies whether the cap should be displayed during loading. */
  logoSkeleton: p.bool,
  /** Specifies height of Logo skeleton in loading state. */
  logoSkeletonHeight: p.number,
  /** Specifies width of Logo skeleton in loading state. */
  logoSkeletonWidth: p.number,
  /** Specifies loading type for images */
  imageLoadingType: p.oneOf(["eager", "lazy"])
};
sf.defaultProps = {
  src: void 0,
  fallbackSrc: Hy,
  logoSrc: void 0,
  fallbackLogoSrc: void 0,
  className: void 0,
  srcAlt: void 0,
  logoAlt: void 0,
  skeletonHeight: dN,
  logoSkeleton: !1,
  logoSkeletonHeight: fN,
  skeletonWidth: void 0,
  logoSkeletonWidth: void 0,
  imageLoadingType: "eager"
};
const lf = /* @__PURE__ */ m.forwardRef(({
  className: e,
  children: t,
  variant: n,
  icon: r,
  title: i,
  actions: a,
  ...o
}, s) => {
  const {
    isLoading: l
  } = w.useContext(Or);
  return l ? /* @__PURE__ */ m.createElement("div", {
    className: F("pgn__card-status", e),
    "data-testid": "card-status-skeleton",
    ref: s
  }, /* @__PURE__ */ m.createElement(Ti, null)) : /* @__PURE__ */ m.createElement("div", {
    className: F("pgn__card-status", `pgn__card-status__${n}`, e),
    ref: s,
    ...o
  }, /* @__PURE__ */ m.createElement("div", {
    className: "pgn__card-status__content"
  }, r && /* @__PURE__ */ m.createElement(kt, {
    className: "pgn__card-status__content-icon",
    src: r
  }), /* @__PURE__ */ m.createElement("div", {
    className: "pgn__card-status__message-content"
  }, i && /* @__PURE__ */ m.createElement("div", {
    className: "pgn__card-status__heading"
  }, i), t)), !!a && /* @__PURE__ */ m.createElement("div", {
    className: "pgn__card-status__actions"
  }, a));
});
lf.propTypes = {
  /** Specifies the content of the component. */
  children: p.node.isRequired,
  /** The class to append to the base element. */
  className: p.string,
  /** Icon that will be shown in the top-left corner. */
  icon: p.func,
  /** Specifies variant to use. */
  variant: p.oneOf(["primary", "success", "danger", "warning"]),
  /** Specifies title for the `Card.Status`. */
  title: p.oneOfType([p.element, p.string]),
  /** Specifies any optional actions, e.g. button(s). */
  actions: p.node
};
lf.defaultProps = {
  className: void 0,
  icon: void 0,
  variant: "warning",
  title: void 0,
  actions: void 0
};
const mN = ["light", "dark", "muted"], uf = /* @__PURE__ */ m.forwardRef(({
  orientation: e,
  isLoading: t,
  className: n,
  isClickable: r,
  muted: i,
  variant: a,
  ...o
}, s) => {
  const l = i ? "muted" : a;
  return /* @__PURE__ */ m.createElement(tf, {
    orientation: e,
    isLoading: t,
    variant: l
  }, /* @__PURE__ */ m.createElement(ef, {
    ...o,
    className: F(n, "pgn__card", {
      horizontal: e === "horizontal",
      clickable: r,
      [`pgn__card-${l}`]: l
    }),
    ref: s,
    tabIndex: r ? 0 : -1
  }));
});
uf.propTypes = {
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies which orientation to use. */
  orientation: p.oneOf(["vertical", "horizontal"]),
  /** Specifies whether the `Card` is clickable, if `true` appropriate `hover` and `focus` styling will be added. */
  isClickable: p.bool,
  /** Specifies loading state. */
  isLoading: p.bool,
  /** Specifies `Card` style variant. */
  variant: p.oneOf(mN),
  /** **Deprecated**. Specifies whether `Card` uses `muted` variant. Use `variant="muted"` instead. */
  muted: p.bool
};
uf.defaultProps = {
  ...ef.defaultProps,
  className: void 0,
  orientation: "vertical",
  isClickable: !1,
  variant: "light",
  isLoading: !1
};
const se = o0(uf, "Card", {
  muted: {
    deprType: ei.REMOVED,
    message: 'Use "variant" prop instead, i.e. variant="muted"'
  }
});
se.Status = lf;
se.Header = nf;
se.Divider = rf;
se.Section = af;
se.Footer = of;
se.ImageCap = sf;
se.Context = Or;
se.Body = gl;
const hN = "Close";
function cf({
  children: e,
  footerNode: t,
  beforeBodyNode: n,
  afterBodyNode: r,
  ...i
}) {
  return /* @__PURE__ */ m.createElement(Gt, {
    ...i
  }, /* @__PURE__ */ m.createElement(Gt.Header, null, /* @__PURE__ */ m.createElement(Gt.Title, null, i.title)), n, /* @__PURE__ */ m.createElement(Gt.Body, null, e), r, t && /* @__PURE__ */ m.createElement(Gt.Footer, null, t));
}
cf.propTypes = {
  /** Specifies the content of the `Modal` */
  children: p.node.isRequired,
  /** The title for the `Modal` */
  title: p.string.isRequired,
  /** Optional callback function for when the modal it dismissed. */
  onClose: p.func.isRequired,
  /** Is the modal open or closed */
  isOpen: p.bool,
  /** The close 'x' icon button in the top right corner */
  hasCloseButton: p.bool,
  /** The modal size */
  size: p.oneOf(["sm", "md", "lg", "xl", "fullscreen"]),
  /** The modal style variant to use */
  variant: p.oneOf(["default", "warning", "danger", "success", "dark"]),
  /** Specifies the `aria-label` attribute for the close button */
  closeLabel: p.string,
  /** A class name to append to the modal */
  className: p.string,
  /**
   * Determines where a scrollbar should appear if a modal is too large for the
   * viewport. When false, the ModalDialog.Body receives a scrollbar, when true
   * the browser window itself receives the scrollbar.
   */
  isFullscreenScroll: p.bool,
  /** Specifies what should be displayed in the footer of the nodal */
  footerNode: p.node,
  /** Specifies what should be displayed before the body block */
  beforeBodyNode: p.node,
  /** Specifies what should be displayed after the body block */
  afterBodyNode: p.node
};
cf.defaultProps = {
  isOpen: !1,
  hasCloseButton: !0,
  size: "md",
  variant: "default",
  closeLabel: hN,
  className: void 0,
  isFullscreenScroll: !1,
  footerNode: null,
  beforeBodyNode: null,
  afterBodyNode: null
};
const Wh = (e, t = "ltr", n = !0, r = "pgn__annotation") => {
  if (!e.current || !e.current.style)
    return !1;
  const { children: i } = e.current;
  let a = 0;
  for (let o = 0; o < i.length; o++) {
    const s = i[o].getBoundingClientRect();
    i[o].className.includes(r) ? a += s.width / 2 : a += n ? 0 : s.width;
  }
  return e.current.style[t === "rtl" ? "marginRight" : "marginLeft"] = `${-a}px`, !0;
}, qh = (e, t) => t === "rtl" ? { right: `${e}%` } : { left: `${e}%` }, Kh = "pgn__annotation", Qh = 50, Vy = "warning", $y = "dark", bs = ["dark", "warning", "success", "error"];
function Uy(e) {
  return /* @__PURE__ */ m.createElement(ui, {
    ...e
  });
}
function pf({
  now: e,
  label: t,
  variant: n,
  threshold: r,
  thresholdLabel: i,
  thresholdVariant: a,
  progressHint: o,
  thresholdHint: s,
  ...l
}) {
  const u = m.useRef(), c = m.useRef(), f = (r || 0) - (e || 0), d = e < Qh, v = r < Qh, E = bs.includes(n) ? n : Vy, x = bs.includes(a) ? a : $y, b = window.getComputedStyle(document.body).getPropertyValue("direction"), g = w.useCallback(() => {
    Wh(u, b, d, Kh), Wh(c, b, v, Kh);
  }, [b, d, v]);
  w.useEffect(() => {
    g();
    const y = new ResizeObserver(() => {
      g();
    }), k = u.current;
    return y.observe(k), () => k && y.unobserve(k);
  }, [g]);
  const h = (y) => /* @__PURE__ */ m.createElement("span", {
    className: "pgn__progress-hint",
    "data-testid": "progress-hint"
  }, y);
  return /* @__PURE__ */ m.createElement("div", {
    className: "pgn__progress-annotated"
  }, !!t && /* @__PURE__ */ m.createElement("div", {
    className: "pgn__progress-info",
    style: qh(e, b),
    ref: u
  }, !d && h(o), /* @__PURE__ */ m.createElement(bh, {
    variant: E
  }, t), d && h(o)), /* @__PURE__ */ m.createElement(ui, null, /* @__PURE__ */ m.createElement(ui, {
    ...l,
    now: e,
    className: F(`pgn__progress-bar--${E}`, f > 0 ? "pgn__progress-tick--white" : "pgn__progress-tick--black"),
    srOnly: !0
  }), !!r && /* @__PURE__ */ m.createElement(ui, {
    now: f,
    className: `pgn__progress-bar--${x}`,
    srOnly: !0
  })), !!r && !!i && /* @__PURE__ */ m.createElement("div", {
    className: "pgn__progress-info",
    style: qh(r, b),
    ref: c
  }, !v && h(s), /* @__PURE__ */ m.createElement(bh, {
    arrowPlacement: "top",
    variant: x
  }, i), v && h(s)));
}
pf.propTypes = {
  /** Current value of progress. */
  now: p.number,
  /** Show label that represents visual percentage. */
  label: p.node,
  /** The `ProgressBar` style variant to use. */
  variant: p.oneOf(bs),
  /** Specifies an additional `className` to add to the base element. */
  className: p.string,
  /** Threshold current value. */
  threshold: p.number,
  /** Specifies label for `threshold`. */
  thresholdLabel: p.node,
  /** Variant for threshold value. */
  thresholdVariant: p.oneOf(bs),
  /** Text near the progress annotation. */
  progressHint: p.node,
  /** Text near the threshold annotation. */
  thresholdHint: p.node
};
pf.defaultProps = {
  now: void 0,
  label: void 0,
  variant: Vy,
  className: void 0,
  threshold: void 0,
  thresholdLabel: void 0,
  thresholdVariant: $y,
  progressHint: void 0,
  thresholdHint: void 0
};
Uy.Annotated = pf;
const Ka = /* @__PURE__ */ m.createContext({
  activeKey: ""
}), vN = (e, t) => {
  let n = [];
  switch (t.type) {
    case "remove":
      return e.filter((r) => r.eventKey !== t.eventKey);
    case "register":
    default:
      return e.some((r) => r.eventKey === t.step.eventKey) ? n = e.map((r) => r.eventKey === t.step.eventKey ? t.step : r) : n = [...e, t.step], e.some((r) => r.index) ? n.sort((r, i) => r.index > i.index ? 1 : -1) : n;
  }
};
function Gy({
  children: e,
  activeKey: t
}) {
  const [n, r] = w.useReducer(vN, []), [i, a] = w.useState(0), o = w.useCallback((u) => r({
    step: u,
    type: "register"
  }), []), s = w.useCallback((u) => r({
    eventKey: u,
    type: "remove"
  }), []), l = (u) => u <= i;
  return w.useEffect(() => {
    const u = n.findIndex((c) => c.eventKey === t);
    a((c) => u >= c ? u : c);
  }, [t, n]), /* @__PURE__ */ m.createElement(Ka.Provider, {
    value: {
      activeKey: t,
      registerStep: o,
      steps: n,
      removeStep: s,
      getIsViewed: l
    }
  }, e);
}
Gy.propTypes = {
  /** Specifies the content of the `ContextProvider`. */
  children: p.node.isRequired,
  /** Specifies the current step of the `Stepper`. */
  activeKey: p.node.isRequired
};
function df({
  children: e,
  eventKey: t,
  className: n,
  title: r,
  index: i,
  description: a,
  hasError: o,
  onClick: s
}) {
  const {
    activeKey: l,
    registerStep: u,
    removeStep: c
  } = w.useContext(Ka);
  return w.useEffect(() => (u({
    title: r,
    index: i,
    eventKey: t,
    description: a,
    hasError: o,
    onClick: s
  }), () => c(t)), [r, t, a, o, i, u, c, s]), l === t ? /* @__PURE__ */ m.createElement("div", {
    className: F("pgn__stepper-step", n)
  }, e) : null;
}
df.propTypes = {
  /** Specifies the content of the `Step`. */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element */
  className: p.string,
  /**
   * An identifier of the `Step`. When `activeKey` on the
   * `Stepper` equals to the `eventKey`, the `Step` will be displayed.
   */
  eventKey: p.string.isRequired,
  /** A text of the `Step`. */
  title: p.string.isRequired,
  /** A text under the `title`. */
  description: p.string,
  /** Informs user if this `Step` has errors. */
  hasError: p.bool,
  /**
   * Position of the `Step`, only required if adding error state
   * or conditionally rendering steps.
   * */
  index: p.number,
  /**
   * Click handler for the `Step`. Takes effect only after the `Step` has been visited, making it clickable
   * and invoking this function on click. Should be used to provide navigation between steps.
   */
  onClick: p.func
};
df.defaultProps = {
  className: void 0,
  description: void 0,
  hasError: !1,
  index: void 0,
  onClick: void 0
};
function Qa({
  title: e,
  isActive: t,
  hasError: n,
  description: r,
  index: i,
  onClick: a
}) {
  const {
    getIsViewed: o
  } = w.useContext(Ka), s = o(i + 1), l = o(i), u = s ? /* @__PURE__ */ m.createElement(kt, {
    src: B0
  }) : /* @__PURE__ */ m.createElement("span", null, i + 1), c = /* @__PURE__ */ m.createElement(kt, {
    src: s2,
    "data-testid": "step-error"
  });
  return a && l && !t ? /* @__PURE__ */ m.createElement("button", {
    type: "button",
    "aria-label": `${e} step`,
    className: F("pgn__stepper-header-step", {
      "pgn__stepper-header-step-has-error": n,
      "pgn__stepper-header-step-complete": s
    }),
    onClick: a,
    onKeyPress: a
  }, /* @__PURE__ */ m.createElement(kh, {
    variant: n ? "error" : "primary",
    disabled: !0
  }, n ? c : u), /* @__PURE__ */ m.createElement("div", {
    className: "pgn__stepper-header-step-title-description"
  }, /* @__PURE__ */ m.createElement("div", {
    className: "pgn__stepper-header-step-title"
  }, e), /* @__PURE__ */ m.createElement("div", {
    className: "pgn__stepper-header-step-description"
  }, r))) : /* @__PURE__ */ m.createElement("li", {
    className: F("pgn__stepper-header-step", {
      "pgn__stepper-header-step-active": t,
      "pgn__stepper-header-step-has-error": n,
      "pgn__stepper-header-step-complete": s
    }),
    "data-testid": "step"
  }, /* @__PURE__ */ m.createElement(kh, {
    variant: n ? "error" : "primary",
    disabled: !t
  }, n ? c : u), /* @__PURE__ */ m.createElement("div", {
    className: "pgn__stepper-header-step-title-description"
  }, /* @__PURE__ */ m.createElement("div", {
    className: "pgn__stepper-header-step-title"
  }, e), /* @__PURE__ */ m.createElement("div", {
    className: "pgn__stepper-header-step-description"
  }, r)));
}
Qa.propTypes = {
  /** A number that will be display in the icon of the `HeaderStep`. */
  index: p.number.isRequired,
  /** A text of the `HeaderStep`. */
  title: p.string.isRequired,
  /** Specifies that this `HeaderStep` is active. */
  isActive: p.bool,
  /** Informs user if this `Step` has errors. */
  hasError: p.bool,
  /** A text under the `title`. */
  description: p.string,
  /** Callback fired when element gets clicked. */
  onClick: p.func
};
Qa.defaultProps = {
  isActive: !1,
  hasError: !1,
  description: void 0,
  onClick: void 0
};
function gN() {
  return /* @__PURE__ */ m.createElement("li", {
    "aria-hidden": "true",
    className: "pgn__stepper-header-line"
  });
}
function ff({
  steps: e,
  activeKey: t
}) {
  return /* @__PURE__ */ m.createElement("ul", {
    className: "pgn__stepper-header-step-list"
  }, e.map(({
    label: n,
    ...r
  }, i) => /* @__PURE__ */ m.createElement(m.Fragment, {
    key: r.eventKey
  }, i !== 0 && /* @__PURE__ */ m.createElement(gN, null), /* @__PURE__ */ m.createElement(Qa, {
    ...r,
    index: i,
    isActive: t === r.eventKey
  }, n))));
}
const xN = ({
  activeStepIndex: e,
  totalSteps: t
}) => `Step ${e + 1} of ${t}`;
function xl({
  className: e,
  PageCountComponent: t,
  compactWidth: n
}) {
  const {
    steps: r,
    activeKey: i
  } = w.useContext(Ka), a = iN(), o = J_[n] || "small", s = M0[o].maxWidth || 1 / 0;
  if (a.width < s) {
    const u = r.findIndex((f) => f.eventKey === i), c = r[u];
    return /* @__PURE__ */ m.createElement("div", {
      className: F("pgn__stepper-header", e)
    }, /* @__PURE__ */ m.createElement(Qa, {
      ...c,
      index: u,
      isActive: !0
    }), /* @__PURE__ */ m.createElement("div", {
      className: "flex-grow-1"
    }), /* @__PURE__ */ m.createElement("div", null, /* @__PURE__ */ m.createElement(t, {
      activeStepIndex: u,
      totalSteps: r.length
    })));
  }
  return /* @__PURE__ */ m.createElement("div", {
    className: F("pgn__stepper-header", e)
  }, /* @__PURE__ */ m.createElement(ff, {
    steps: r,
    activeKey: i
  }));
}
xl.propTypes = {
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** A component that receives `activeStepIndex` and `totalSteps` props to display them. */
  PageCountComponent: p.elementType,
  /** The max width in which the compact view of the header will switch to display the step number that is
   * currently in progress. Options include 'xs', 'sm', 'md', 'lg', 'xl', and 'xxl'.
   */
  compactWidth: p.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"])
};
xl.defaultProps = {
  className: null,
  PageCountComponent: xN,
  compactWidth: "sm"
};
ff.propTypes = {
  steps: p.arrayOf(p.shape({
    eventKey: p.string,
    title: p.string,
    description: p.string,
    hasError: p.bool
  })),
  activeKey: p.string.isRequired
};
ff.defaultProps = {
  steps: []
};
xl.Step = Qa;
function yl({
  as: e,
  children: t,
  eventKey: n,
  ...r
}) {
  const {
    activeKey: i
  } = w.useContext(Ka);
  return i === n ? /* @__PURE__ */ m.createElement(e, r, t) : null;
}
yl.propTypes = {
  /** Specifies the content of the `ActionRow`. */
  children: p.node.isRequired,
  /**
   * An identifier of the `ActionRow`. When `activeKey` on the
   * `Stepper` equals to the `eventKey`, the `ActionRow` will be displayed.
   */
  eventKey: p.string.isRequired,
  /** Specifies the base element */
  as: p.elementType
};
yl.defaultProps = {
  as: Ta
};
yl.Spacer = Ta.Spacer;
function tn({
  children: e,
  activeKey: t
}) {
  return /* @__PURE__ */ m.createElement(Gy, {
    activeKey: t
  }, e);
}
tn.propTypes = {
  /**
   * Specifies the content of the `Stepper`.
   */
  children: p.node.isRequired,
  /**
   * The eventKey of the step to display.
   */
  activeKey: p.string.isRequired
};
tn.Step = df;
tn.Header = xl;
tn.ActionRow = yl;
const yN = /* @__PURE__ */ new Map([
  // https://github.com/guzzle/psr7/blob/2d9260799e713f1c475d3c5fdc3d6561ff7441b2/src/MimeType.php
  ["1km", "application/vnd.1000minds.decision-model+xml"],
  ["3dml", "text/vnd.in3d.3dml"],
  ["3ds", "image/x-3ds"],
  ["3g2", "video/3gpp2"],
  ["3gp", "video/3gp"],
  ["3gpp", "video/3gpp"],
  ["3mf", "model/3mf"],
  ["7z", "application/x-7z-compressed"],
  ["7zip", "application/x-7z-compressed"],
  ["123", "application/vnd.lotus-1-2-3"],
  ["aab", "application/x-authorware-bin"],
  ["aac", "audio/x-acc"],
  ["aam", "application/x-authorware-map"],
  ["aas", "application/x-authorware-seg"],
  ["abw", "application/x-abiword"],
  ["ac", "application/vnd.nokia.n-gage.ac+xml"],
  ["ac3", "audio/ac3"],
  ["acc", "application/vnd.americandynamics.acc"],
  ["ace", "application/x-ace-compressed"],
  ["acu", "application/vnd.acucobol"],
  ["acutc", "application/vnd.acucorp"],
  ["adp", "audio/adpcm"],
  ["aep", "application/vnd.audiograph"],
  ["afm", "application/x-font-type1"],
  ["afp", "application/vnd.ibm.modcap"],
  ["ahead", "application/vnd.ahead.space"],
  ["ai", "application/pdf"],
  ["aif", "audio/x-aiff"],
  ["aifc", "audio/x-aiff"],
  ["aiff", "audio/x-aiff"],
  ["air", "application/vnd.adobe.air-application-installer-package+zip"],
  ["ait", "application/vnd.dvb.ait"],
  ["ami", "application/vnd.amiga.ami"],
  ["amr", "audio/amr"],
  ["apk", "application/vnd.android.package-archive"],
  ["apng", "image/apng"],
  ["appcache", "text/cache-manifest"],
  ["application", "application/x-ms-application"],
  ["apr", "application/vnd.lotus-approach"],
  ["arc", "application/x-freearc"],
  ["arj", "application/x-arj"],
  ["asc", "application/pgp-signature"],
  ["asf", "video/x-ms-asf"],
  ["asm", "text/x-asm"],
  ["aso", "application/vnd.accpac.simply.aso"],
  ["asx", "video/x-ms-asf"],
  ["atc", "application/vnd.acucorp"],
  ["atom", "application/atom+xml"],
  ["atomcat", "application/atomcat+xml"],
  ["atomdeleted", "application/atomdeleted+xml"],
  ["atomsvc", "application/atomsvc+xml"],
  ["atx", "application/vnd.antix.game-component"],
  ["au", "audio/x-au"],
  ["avi", "video/x-msvideo"],
  ["avif", "image/avif"],
  ["aw", "application/applixware"],
  ["azf", "application/vnd.airzip.filesecure.azf"],
  ["azs", "application/vnd.airzip.filesecure.azs"],
  ["azv", "image/vnd.airzip.accelerator.azv"],
  ["azw", "application/vnd.amazon.ebook"],
  ["b16", "image/vnd.pco.b16"],
  ["bat", "application/x-msdownload"],
  ["bcpio", "application/x-bcpio"],
  ["bdf", "application/x-font-bdf"],
  ["bdm", "application/vnd.syncml.dm+wbxml"],
  ["bdoc", "application/x-bdoc"],
  ["bed", "application/vnd.realvnc.bed"],
  ["bh2", "application/vnd.fujitsu.oasysprs"],
  ["bin", "application/octet-stream"],
  ["blb", "application/x-blorb"],
  ["blorb", "application/x-blorb"],
  ["bmi", "application/vnd.bmi"],
  ["bmml", "application/vnd.balsamiq.bmml+xml"],
  ["bmp", "image/bmp"],
  ["book", "application/vnd.framemaker"],
  ["box", "application/vnd.previewsystems.box"],
  ["boz", "application/x-bzip2"],
  ["bpk", "application/octet-stream"],
  ["bpmn", "application/octet-stream"],
  ["bsp", "model/vnd.valve.source.compiled-map"],
  ["btif", "image/prs.btif"],
  ["buffer", "application/octet-stream"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["c", "text/x-c"],
  ["c4d", "application/vnd.clonk.c4group"],
  ["c4f", "application/vnd.clonk.c4group"],
  ["c4g", "application/vnd.clonk.c4group"],
  ["c4p", "application/vnd.clonk.c4group"],
  ["c4u", "application/vnd.clonk.c4group"],
  ["c11amc", "application/vnd.cluetrust.cartomobile-config"],
  ["c11amz", "application/vnd.cluetrust.cartomobile-config-pkg"],
  ["cab", "application/vnd.ms-cab-compressed"],
  ["caf", "audio/x-caf"],
  ["cap", "application/vnd.tcpdump.pcap"],
  ["car", "application/vnd.curl.car"],
  ["cat", "application/vnd.ms-pki.seccat"],
  ["cb7", "application/x-cbr"],
  ["cba", "application/x-cbr"],
  ["cbr", "application/x-cbr"],
  ["cbt", "application/x-cbr"],
  ["cbz", "application/x-cbr"],
  ["cc", "text/x-c"],
  ["cco", "application/x-cocoa"],
  ["cct", "application/x-director"],
  ["ccxml", "application/ccxml+xml"],
  ["cdbcmsg", "application/vnd.contact.cmsg"],
  ["cda", "application/x-cdf"],
  ["cdf", "application/x-netcdf"],
  ["cdfx", "application/cdfx+xml"],
  ["cdkey", "application/vnd.mediastation.cdkey"],
  ["cdmia", "application/cdmi-capability"],
  ["cdmic", "application/cdmi-container"],
  ["cdmid", "application/cdmi-domain"],
  ["cdmio", "application/cdmi-object"],
  ["cdmiq", "application/cdmi-queue"],
  ["cdr", "application/cdr"],
  ["cdx", "chemical/x-cdx"],
  ["cdxml", "application/vnd.chemdraw+xml"],
  ["cdy", "application/vnd.cinderella"],
  ["cer", "application/pkix-cert"],
  ["cfs", "application/x-cfs-compressed"],
  ["cgm", "image/cgm"],
  ["chat", "application/x-chat"],
  ["chm", "application/vnd.ms-htmlhelp"],
  ["chrt", "application/vnd.kde.kchart"],
  ["cif", "chemical/x-cif"],
  ["cii", "application/vnd.anser-web-certificate-issue-initiation"],
  ["cil", "application/vnd.ms-artgalry"],
  ["cjs", "application/node"],
  ["cla", "application/vnd.claymore"],
  ["class", "application/octet-stream"],
  ["clkk", "application/vnd.crick.clicker.keyboard"],
  ["clkp", "application/vnd.crick.clicker.palette"],
  ["clkt", "application/vnd.crick.clicker.template"],
  ["clkw", "application/vnd.crick.clicker.wordbank"],
  ["clkx", "application/vnd.crick.clicker"],
  ["clp", "application/x-msclip"],
  ["cmc", "application/vnd.cosmocaller"],
  ["cmdf", "chemical/x-cmdf"],
  ["cml", "chemical/x-cml"],
  ["cmp", "application/vnd.yellowriver-custom-menu"],
  ["cmx", "image/x-cmx"],
  ["cod", "application/vnd.rim.cod"],
  ["coffee", "text/coffeescript"],
  ["com", "application/x-msdownload"],
  ["conf", "text/plain"],
  ["cpio", "application/x-cpio"],
  ["cpp", "text/x-c"],
  ["cpt", "application/mac-compactpro"],
  ["crd", "application/x-mscardfile"],
  ["crl", "application/pkix-crl"],
  ["crt", "application/x-x509-ca-cert"],
  ["crx", "application/x-chrome-extension"],
  ["cryptonote", "application/vnd.rig.cryptonote"],
  ["csh", "application/x-csh"],
  ["csl", "application/vnd.citationstyles.style+xml"],
  ["csml", "chemical/x-csml"],
  ["csp", "application/vnd.commonspace"],
  ["csr", "application/octet-stream"],
  ["css", "text/css"],
  ["cst", "application/x-director"],
  ["csv", "text/csv"],
  ["cu", "application/cu-seeme"],
  ["curl", "text/vnd.curl"],
  ["cww", "application/prs.cww"],
  ["cxt", "application/x-director"],
  ["cxx", "text/x-c"],
  ["dae", "model/vnd.collada+xml"],
  ["daf", "application/vnd.mobius.daf"],
  ["dart", "application/vnd.dart"],
  ["dataless", "application/vnd.fdsn.seed"],
  ["davmount", "application/davmount+xml"],
  ["dbf", "application/vnd.dbf"],
  ["dbk", "application/docbook+xml"],
  ["dcr", "application/x-director"],
  ["dcurl", "text/vnd.curl.dcurl"],
  ["dd2", "application/vnd.oma.dd2+xml"],
  ["ddd", "application/vnd.fujixerox.ddd"],
  ["ddf", "application/vnd.syncml.dmddf+xml"],
  ["dds", "image/vnd.ms-dds"],
  ["deb", "application/x-debian-package"],
  ["def", "text/plain"],
  ["deploy", "application/octet-stream"],
  ["der", "application/x-x509-ca-cert"],
  ["dfac", "application/vnd.dreamfactory"],
  ["dgc", "application/x-dgc-compressed"],
  ["dic", "text/x-c"],
  ["dir", "application/x-director"],
  ["dis", "application/vnd.mobius.dis"],
  ["disposition-notification", "message/disposition-notification"],
  ["dist", "application/octet-stream"],
  ["distz", "application/octet-stream"],
  ["djv", "image/vnd.djvu"],
  ["djvu", "image/vnd.djvu"],
  ["dll", "application/octet-stream"],
  ["dmg", "application/x-apple-diskimage"],
  ["dmn", "application/octet-stream"],
  ["dmp", "application/vnd.tcpdump.pcap"],
  ["dms", "application/octet-stream"],
  ["dna", "application/vnd.dna"],
  ["doc", "application/msword"],
  ["docm", "application/vnd.ms-word.template.macroEnabled.12"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["dot", "application/msword"],
  ["dotm", "application/vnd.ms-word.template.macroEnabled.12"],
  ["dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template"],
  ["dp", "application/vnd.osgi.dp"],
  ["dpg", "application/vnd.dpgraph"],
  ["dra", "audio/vnd.dra"],
  ["drle", "image/dicom-rle"],
  ["dsc", "text/prs.lines.tag"],
  ["dssc", "application/dssc+der"],
  ["dtb", "application/x-dtbook+xml"],
  ["dtd", "application/xml-dtd"],
  ["dts", "audio/vnd.dts"],
  ["dtshd", "audio/vnd.dts.hd"],
  ["dump", "application/octet-stream"],
  ["dvb", "video/vnd.dvb.file"],
  ["dvi", "application/x-dvi"],
  ["dwd", "application/atsc-dwd+xml"],
  ["dwf", "model/vnd.dwf"],
  ["dwg", "image/vnd.dwg"],
  ["dxf", "image/vnd.dxf"],
  ["dxp", "application/vnd.spotfire.dxp"],
  ["dxr", "application/x-director"],
  ["ear", "application/java-archive"],
  ["ecelp4800", "audio/vnd.nuera.ecelp4800"],
  ["ecelp7470", "audio/vnd.nuera.ecelp7470"],
  ["ecelp9600", "audio/vnd.nuera.ecelp9600"],
  ["ecma", "application/ecmascript"],
  ["edm", "application/vnd.novadigm.edm"],
  ["edx", "application/vnd.novadigm.edx"],
  ["efif", "application/vnd.picsel"],
  ["ei6", "application/vnd.pg.osasli"],
  ["elc", "application/octet-stream"],
  ["emf", "image/emf"],
  ["eml", "message/rfc822"],
  ["emma", "application/emma+xml"],
  ["emotionml", "application/emotionml+xml"],
  ["emz", "application/x-msmetafile"],
  ["eol", "audio/vnd.digital-winds"],
  ["eot", "application/vnd.ms-fontobject"],
  ["eps", "application/postscript"],
  ["epub", "application/epub+zip"],
  ["es", "application/ecmascript"],
  ["es3", "application/vnd.eszigno3+xml"],
  ["esa", "application/vnd.osgi.subsystem"],
  ["esf", "application/vnd.epson.esf"],
  ["et3", "application/vnd.eszigno3+xml"],
  ["etx", "text/x-setext"],
  ["eva", "application/x-eva"],
  ["evy", "application/x-envoy"],
  ["exe", "application/octet-stream"],
  ["exi", "application/exi"],
  ["exp", "application/express"],
  ["exr", "image/aces"],
  ["ext", "application/vnd.novadigm.ext"],
  ["ez", "application/andrew-inset"],
  ["ez2", "application/vnd.ezpix-album"],
  ["ez3", "application/vnd.ezpix-package"],
  ["f", "text/x-fortran"],
  ["f4v", "video/mp4"],
  ["f77", "text/x-fortran"],
  ["f90", "text/x-fortran"],
  ["fbs", "image/vnd.fastbidsheet"],
  ["fcdt", "application/vnd.adobe.formscentral.fcdt"],
  ["fcs", "application/vnd.isac.fcs"],
  ["fdf", "application/vnd.fdf"],
  ["fdt", "application/fdt+xml"],
  ["fe_launch", "application/vnd.denovo.fcselayout-link"],
  ["fg5", "application/vnd.fujitsu.oasysgp"],
  ["fgd", "application/x-director"],
  ["fh", "image/x-freehand"],
  ["fh4", "image/x-freehand"],
  ["fh5", "image/x-freehand"],
  ["fh7", "image/x-freehand"],
  ["fhc", "image/x-freehand"],
  ["fig", "application/x-xfig"],
  ["fits", "image/fits"],
  ["flac", "audio/x-flac"],
  ["fli", "video/x-fli"],
  ["flo", "application/vnd.micrografx.flo"],
  ["flv", "video/x-flv"],
  ["flw", "application/vnd.kde.kivio"],
  ["flx", "text/vnd.fmi.flexstor"],
  ["fly", "text/vnd.fly"],
  ["fm", "application/vnd.framemaker"],
  ["fnc", "application/vnd.frogans.fnc"],
  ["fo", "application/vnd.software602.filler.form+xml"],
  ["for", "text/x-fortran"],
  ["fpx", "image/vnd.fpx"],
  ["frame", "application/vnd.framemaker"],
  ["fsc", "application/vnd.fsc.weblaunch"],
  ["fst", "image/vnd.fst"],
  ["ftc", "application/vnd.fluxtime.clip"],
  ["fti", "application/vnd.anser-web-funds-transfer-initiation"],
  ["fvt", "video/vnd.fvt"],
  ["fxp", "application/vnd.adobe.fxp"],
  ["fxpl", "application/vnd.adobe.fxp"],
  ["fzs", "application/vnd.fuzzysheet"],
  ["g2w", "application/vnd.geoplan"],
  ["g3", "image/g3fax"],
  ["g3w", "application/vnd.geospace"],
  ["gac", "application/vnd.groove-account"],
  ["gam", "application/x-tads"],
  ["gbr", "application/rpki-ghostbusters"],
  ["gca", "application/x-gca-compressed"],
  ["gdl", "model/vnd.gdl"],
  ["gdoc", "application/vnd.google-apps.document"],
  ["geo", "application/vnd.dynageo"],
  ["geojson", "application/geo+json"],
  ["gex", "application/vnd.geometry-explorer"],
  ["ggb", "application/vnd.geogebra.file"],
  ["ggt", "application/vnd.geogebra.tool"],
  ["ghf", "application/vnd.groove-help"],
  ["gif", "image/gif"],
  ["gim", "application/vnd.groove-identity-message"],
  ["glb", "model/gltf-binary"],
  ["gltf", "model/gltf+json"],
  ["gml", "application/gml+xml"],
  ["gmx", "application/vnd.gmx"],
  ["gnumeric", "application/x-gnumeric"],
  ["gpg", "application/gpg-keys"],
  ["gph", "application/vnd.flographit"],
  ["gpx", "application/gpx+xml"],
  ["gqf", "application/vnd.grafeq"],
  ["gqs", "application/vnd.grafeq"],
  ["gram", "application/srgs"],
  ["gramps", "application/x-gramps-xml"],
  ["gre", "application/vnd.geometry-explorer"],
  ["grv", "application/vnd.groove-injector"],
  ["grxml", "application/srgs+xml"],
  ["gsf", "application/x-font-ghostscript"],
  ["gsheet", "application/vnd.google-apps.spreadsheet"],
  ["gslides", "application/vnd.google-apps.presentation"],
  ["gtar", "application/x-gtar"],
  ["gtm", "application/vnd.groove-tool-message"],
  ["gtw", "model/vnd.gtw"],
  ["gv", "text/vnd.graphviz"],
  ["gxf", "application/gxf"],
  ["gxt", "application/vnd.geonext"],
  ["gz", "application/gzip"],
  ["gzip", "application/gzip"],
  ["h", "text/x-c"],
  ["h261", "video/h261"],
  ["h263", "video/h263"],
  ["h264", "video/h264"],
  ["hal", "application/vnd.hal+xml"],
  ["hbci", "application/vnd.hbci"],
  ["hbs", "text/x-handlebars-template"],
  ["hdd", "application/x-virtualbox-hdd"],
  ["hdf", "application/x-hdf"],
  ["heic", "image/heic"],
  ["heics", "image/heic-sequence"],
  ["heif", "image/heif"],
  ["heifs", "image/heif-sequence"],
  ["hej2", "image/hej2k"],
  ["held", "application/atsc-held+xml"],
  ["hh", "text/x-c"],
  ["hjson", "application/hjson"],
  ["hlp", "application/winhlp"],
  ["hpgl", "application/vnd.hp-hpgl"],
  ["hpid", "application/vnd.hp-hpid"],
  ["hps", "application/vnd.hp-hps"],
  ["hqx", "application/mac-binhex40"],
  ["hsj2", "image/hsj2"],
  ["htc", "text/x-component"],
  ["htke", "application/vnd.kenameaapp"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["hvd", "application/vnd.yamaha.hv-dic"],
  ["hvp", "application/vnd.yamaha.hv-voice"],
  ["hvs", "application/vnd.yamaha.hv-script"],
  ["i2g", "application/vnd.intergeo"],
  ["icc", "application/vnd.iccprofile"],
  ["ice", "x-conference/x-cooltalk"],
  ["icm", "application/vnd.iccprofile"],
  ["ico", "image/x-icon"],
  ["ics", "text/calendar"],
  ["ief", "image/ief"],
  ["ifb", "text/calendar"],
  ["ifm", "application/vnd.shana.informed.formdata"],
  ["iges", "model/iges"],
  ["igl", "application/vnd.igloader"],
  ["igm", "application/vnd.insors.igm"],
  ["igs", "model/iges"],
  ["igx", "application/vnd.micrografx.igx"],
  ["iif", "application/vnd.shana.informed.interchange"],
  ["img", "application/octet-stream"],
  ["imp", "application/vnd.accpac.simply.imp"],
  ["ims", "application/vnd.ms-ims"],
  ["in", "text/plain"],
  ["ini", "text/plain"],
  ["ink", "application/inkml+xml"],
  ["inkml", "application/inkml+xml"],
  ["install", "application/x-install-instructions"],
  ["iota", "application/vnd.astraea-software.iota"],
  ["ipfix", "application/ipfix"],
  ["ipk", "application/vnd.shana.informed.package"],
  ["irm", "application/vnd.ibm.rights-management"],
  ["irp", "application/vnd.irepository.package+xml"],
  ["iso", "application/x-iso9660-image"],
  ["itp", "application/vnd.shana.informed.formtemplate"],
  ["its", "application/its+xml"],
  ["ivp", "application/vnd.immervision-ivp"],
  ["ivu", "application/vnd.immervision-ivu"],
  ["jad", "text/vnd.sun.j2me.app-descriptor"],
  ["jade", "text/jade"],
  ["jam", "application/vnd.jam"],
  ["jar", "application/java-archive"],
  ["jardiff", "application/x-java-archive-diff"],
  ["java", "text/x-java-source"],
  ["jhc", "image/jphc"],
  ["jisp", "application/vnd.jisp"],
  ["jls", "image/jls"],
  ["jlt", "application/vnd.hp-jlyt"],
  ["jng", "image/x-jng"],
  ["jnlp", "application/x-java-jnlp-file"],
  ["joda", "application/vnd.joost.joda-archive"],
  ["jp2", "image/jp2"],
  ["jpe", "image/jpeg"],
  ["jpeg", "image/jpeg"],
  ["jpf", "image/jpx"],
  ["jpg", "image/jpeg"],
  ["jpg2", "image/jp2"],
  ["jpgm", "video/jpm"],
  ["jpgv", "video/jpeg"],
  ["jph", "image/jph"],
  ["jpm", "video/jpm"],
  ["jpx", "image/jpx"],
  ["js", "application/javascript"],
  ["json", "application/json"],
  ["json5", "application/json5"],
  ["jsonld", "application/ld+json"],
  // https://jsonlines.org/
  ["jsonl", "application/jsonl"],
  ["jsonml", "application/jsonml+json"],
  ["jsx", "text/jsx"],
  ["jxr", "image/jxr"],
  ["jxra", "image/jxra"],
  ["jxrs", "image/jxrs"],
  ["jxs", "image/jxs"],
  ["jxsc", "image/jxsc"],
  ["jxsi", "image/jxsi"],
  ["jxss", "image/jxss"],
  ["kar", "audio/midi"],
  ["karbon", "application/vnd.kde.karbon"],
  ["kdb", "application/octet-stream"],
  ["kdbx", "application/x-keepass2"],
  ["key", "application/x-iwork-keynote-sffkey"],
  ["kfo", "application/vnd.kde.kformula"],
  ["kia", "application/vnd.kidspiration"],
  ["kml", "application/vnd.google-earth.kml+xml"],
  ["kmz", "application/vnd.google-earth.kmz"],
  ["kne", "application/vnd.kinar"],
  ["knp", "application/vnd.kinar"],
  ["kon", "application/vnd.kde.kontour"],
  ["kpr", "application/vnd.kde.kpresenter"],
  ["kpt", "application/vnd.kde.kpresenter"],
  ["kpxx", "application/vnd.ds-keypoint"],
  ["ksp", "application/vnd.kde.kspread"],
  ["ktr", "application/vnd.kahootz"],
  ["ktx", "image/ktx"],
  ["ktx2", "image/ktx2"],
  ["ktz", "application/vnd.kahootz"],
  ["kwd", "application/vnd.kde.kword"],
  ["kwt", "application/vnd.kde.kword"],
  ["lasxml", "application/vnd.las.las+xml"],
  ["latex", "application/x-latex"],
  ["lbd", "application/vnd.llamagraphics.life-balance.desktop"],
  ["lbe", "application/vnd.llamagraphics.life-balance.exchange+xml"],
  ["les", "application/vnd.hhe.lesson-player"],
  ["less", "text/less"],
  ["lgr", "application/lgr+xml"],
  ["lha", "application/octet-stream"],
  ["link66", "application/vnd.route66.link66+xml"],
  ["list", "text/plain"],
  ["list3820", "application/vnd.ibm.modcap"],
  ["listafp", "application/vnd.ibm.modcap"],
  ["litcoffee", "text/coffeescript"],
  ["lnk", "application/x-ms-shortcut"],
  ["log", "text/plain"],
  ["lostxml", "application/lost+xml"],
  ["lrf", "application/octet-stream"],
  ["lrm", "application/vnd.ms-lrm"],
  ["ltf", "application/vnd.frogans.ltf"],
  ["lua", "text/x-lua"],
  ["luac", "application/x-lua-bytecode"],
  ["lvp", "audio/vnd.lucent.voice"],
  ["lwp", "application/vnd.lotus-wordpro"],
  ["lzh", "application/octet-stream"],
  ["m1v", "video/mpeg"],
  ["m2a", "audio/mpeg"],
  ["m2v", "video/mpeg"],
  ["m3a", "audio/mpeg"],
  ["m3u", "text/plain"],
  ["m3u8", "application/vnd.apple.mpegurl"],
  ["m4a", "audio/x-m4a"],
  ["m4p", "application/mp4"],
  ["m4s", "video/iso.segment"],
  ["m4u", "application/vnd.mpegurl"],
  ["m4v", "video/x-m4v"],
  ["m13", "application/x-msmediaview"],
  ["m14", "application/x-msmediaview"],
  ["m21", "application/mp21"],
  ["ma", "application/mathematica"],
  ["mads", "application/mads+xml"],
  ["maei", "application/mmt-aei+xml"],
  ["mag", "application/vnd.ecowin.chart"],
  ["maker", "application/vnd.framemaker"],
  ["man", "text/troff"],
  ["manifest", "text/cache-manifest"],
  ["map", "application/json"],
  ["mar", "application/octet-stream"],
  ["markdown", "text/markdown"],
  ["mathml", "application/mathml+xml"],
  ["mb", "application/mathematica"],
  ["mbk", "application/vnd.mobius.mbk"],
  ["mbox", "application/mbox"],
  ["mc1", "application/vnd.medcalcdata"],
  ["mcd", "application/vnd.mcd"],
  ["mcurl", "text/vnd.curl.mcurl"],
  ["md", "text/markdown"],
  ["mdb", "application/x-msaccess"],
  ["mdi", "image/vnd.ms-modi"],
  ["mdx", "text/mdx"],
  ["me", "text/troff"],
  ["mesh", "model/mesh"],
  ["meta4", "application/metalink4+xml"],
  ["metalink", "application/metalink+xml"],
  ["mets", "application/mets+xml"],
  ["mfm", "application/vnd.mfmp"],
  ["mft", "application/rpki-manifest"],
  ["mgp", "application/vnd.osgeo.mapguide.package"],
  ["mgz", "application/vnd.proteus.magazine"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mie", "application/x-mie"],
  ["mif", "application/vnd.mif"],
  ["mime", "message/rfc822"],
  ["mj2", "video/mj2"],
  ["mjp2", "video/mj2"],
  ["mjs", "application/javascript"],
  ["mk3d", "video/x-matroska"],
  ["mka", "audio/x-matroska"],
  ["mkd", "text/x-markdown"],
  ["mks", "video/x-matroska"],
  ["mkv", "video/x-matroska"],
  ["mlp", "application/vnd.dolby.mlp"],
  ["mmd", "application/vnd.chipnuts.karaoke-mmd"],
  ["mmf", "application/vnd.smaf"],
  ["mml", "text/mathml"],
  ["mmr", "image/vnd.fujixerox.edmics-mmr"],
  ["mng", "video/x-mng"],
  ["mny", "application/x-msmoney"],
  ["mobi", "application/x-mobipocket-ebook"],
  ["mods", "application/mods+xml"],
  ["mov", "video/quicktime"],
  ["movie", "video/x-sgi-movie"],
  ["mp2", "audio/mpeg"],
  ["mp2a", "audio/mpeg"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mp4a", "audio/mp4"],
  ["mp4s", "application/mp4"],
  ["mp4v", "video/mp4"],
  ["mp21", "application/mp21"],
  ["mpc", "application/vnd.mophun.certificate"],
  ["mpd", "application/dash+xml"],
  ["mpe", "video/mpeg"],
  ["mpeg", "video/mpeg"],
  ["mpg", "video/mpeg"],
  ["mpg4", "video/mp4"],
  ["mpga", "audio/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["mpm", "application/vnd.blueice.multipass"],
  ["mpn", "application/vnd.mophun.application"],
  ["mpp", "application/vnd.ms-project"],
  ["mpt", "application/vnd.ms-project"],
  ["mpy", "application/vnd.ibm.minipay"],
  ["mqy", "application/vnd.mobius.mqy"],
  ["mrc", "application/marc"],
  ["mrcx", "application/marcxml+xml"],
  ["ms", "text/troff"],
  ["mscml", "application/mediaservercontrol+xml"],
  ["mseed", "application/vnd.fdsn.mseed"],
  ["mseq", "application/vnd.mseq"],
  ["msf", "application/vnd.epson.msf"],
  ["msg", "application/vnd.ms-outlook"],
  ["msh", "model/mesh"],
  ["msi", "application/x-msdownload"],
  ["msl", "application/vnd.mobius.msl"],
  ["msm", "application/octet-stream"],
  ["msp", "application/octet-stream"],
  ["msty", "application/vnd.muvee.style"],
  ["mtl", "model/mtl"],
  ["mts", "model/vnd.mts"],
  ["mus", "application/vnd.musician"],
  ["musd", "application/mmt-usd+xml"],
  ["musicxml", "application/vnd.recordare.musicxml+xml"],
  ["mvb", "application/x-msmediaview"],
  ["mvt", "application/vnd.mapbox-vector-tile"],
  ["mwf", "application/vnd.mfer"],
  ["mxf", "application/mxf"],
  ["mxl", "application/vnd.recordare.musicxml"],
  ["mxmf", "audio/mobile-xmf"],
  ["mxml", "application/xv+xml"],
  ["mxs", "application/vnd.triscape.mxs"],
  ["mxu", "video/vnd.mpegurl"],
  ["n-gage", "application/vnd.nokia.n-gage.symbian.install"],
  ["n3", "text/n3"],
  ["nb", "application/mathematica"],
  ["nbp", "application/vnd.wolfram.player"],
  ["nc", "application/x-netcdf"],
  ["ncx", "application/x-dtbncx+xml"],
  ["nfo", "text/x-nfo"],
  ["ngdat", "application/vnd.nokia.n-gage.data"],
  ["nitf", "application/vnd.nitf"],
  ["nlu", "application/vnd.neurolanguage.nlu"],
  ["nml", "application/vnd.enliven"],
  ["nnd", "application/vnd.noblenet-directory"],
  ["nns", "application/vnd.noblenet-sealer"],
  ["nnw", "application/vnd.noblenet-web"],
  ["npx", "image/vnd.net-fpx"],
  ["nq", "application/n-quads"],
  ["nsc", "application/x-conference"],
  ["nsf", "application/vnd.lotus-notes"],
  ["nt", "application/n-triples"],
  ["ntf", "application/vnd.nitf"],
  ["numbers", "application/x-iwork-numbers-sffnumbers"],
  ["nzb", "application/x-nzb"],
  ["oa2", "application/vnd.fujitsu.oasys2"],
  ["oa3", "application/vnd.fujitsu.oasys3"],
  ["oas", "application/vnd.fujitsu.oasys"],
  ["obd", "application/x-msbinder"],
  ["obgx", "application/vnd.openblox.game+xml"],
  ["obj", "model/obj"],
  ["oda", "application/oda"],
  ["odb", "application/vnd.oasis.opendocument.database"],
  ["odc", "application/vnd.oasis.opendocument.chart"],
  ["odf", "application/vnd.oasis.opendocument.formula"],
  ["odft", "application/vnd.oasis.opendocument.formula-template"],
  ["odg", "application/vnd.oasis.opendocument.graphics"],
  ["odi", "application/vnd.oasis.opendocument.image"],
  ["odm", "application/vnd.oasis.opendocument.text-master"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogex", "model/vnd.opengex"],
  ["ogg", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["omdoc", "application/omdoc+xml"],
  ["onepkg", "application/onenote"],
  ["onetmp", "application/onenote"],
  ["onetoc", "application/onenote"],
  ["onetoc2", "application/onenote"],
  ["opf", "application/oebps-package+xml"],
  ["opml", "text/x-opml"],
  ["oprc", "application/vnd.palm"],
  ["opus", "audio/ogg"],
  ["org", "text/x-org"],
  ["osf", "application/vnd.yamaha.openscoreformat"],
  ["osfpvg", "application/vnd.yamaha.openscoreformat.osfpvg+xml"],
  ["osm", "application/vnd.openstreetmap.data+xml"],
  ["otc", "application/vnd.oasis.opendocument.chart-template"],
  ["otf", "font/otf"],
  ["otg", "application/vnd.oasis.opendocument.graphics-template"],
  ["oth", "application/vnd.oasis.opendocument.text-web"],
  ["oti", "application/vnd.oasis.opendocument.image-template"],
  ["otp", "application/vnd.oasis.opendocument.presentation-template"],
  ["ots", "application/vnd.oasis.opendocument.spreadsheet-template"],
  ["ott", "application/vnd.oasis.opendocument.text-template"],
  ["ova", "application/x-virtualbox-ova"],
  ["ovf", "application/x-virtualbox-ovf"],
  ["owl", "application/rdf+xml"],
  ["oxps", "application/oxps"],
  ["oxt", "application/vnd.openofficeorg.extension"],
  ["p", "text/x-pascal"],
  ["p7a", "application/x-pkcs7-signature"],
  ["p7b", "application/x-pkcs7-certificates"],
  ["p7c", "application/pkcs7-mime"],
  ["p7m", "application/pkcs7-mime"],
  ["p7r", "application/x-pkcs7-certreqresp"],
  ["p7s", "application/pkcs7-signature"],
  ["p8", "application/pkcs8"],
  ["p10", "application/x-pkcs10"],
  ["p12", "application/x-pkcs12"],
  ["pac", "application/x-ns-proxy-autoconfig"],
  ["pages", "application/x-iwork-pages-sffpages"],
  ["pas", "text/x-pascal"],
  ["paw", "application/vnd.pawaafile"],
  ["pbd", "application/vnd.powerbuilder6"],
  ["pbm", "image/x-portable-bitmap"],
  ["pcap", "application/vnd.tcpdump.pcap"],
  ["pcf", "application/x-font-pcf"],
  ["pcl", "application/vnd.hp-pcl"],
  ["pclxl", "application/vnd.hp-pclxl"],
  ["pct", "image/x-pict"],
  ["pcurl", "application/vnd.curl.pcurl"],
  ["pcx", "image/x-pcx"],
  ["pdb", "application/x-pilot"],
  ["pde", "text/x-processing"],
  ["pdf", "application/pdf"],
  ["pem", "application/x-x509-user-cert"],
  ["pfa", "application/x-font-type1"],
  ["pfb", "application/x-font-type1"],
  ["pfm", "application/x-font-type1"],
  ["pfr", "application/font-tdpfr"],
  ["pfx", "application/x-pkcs12"],
  ["pgm", "image/x-portable-graymap"],
  ["pgn", "application/x-chess-pgn"],
  ["pgp", "application/pgp"],
  ["php", "application/x-httpd-php"],
  ["php3", "application/x-httpd-php"],
  ["php4", "application/x-httpd-php"],
  ["phps", "application/x-httpd-php-source"],
  ["phtml", "application/x-httpd-php"],
  ["pic", "image/x-pict"],
  ["pkg", "application/octet-stream"],
  ["pki", "application/pkixcmp"],
  ["pkipath", "application/pkix-pkipath"],
  ["pkpass", "application/vnd.apple.pkpass"],
  ["pl", "application/x-perl"],
  ["plb", "application/vnd.3gpp.pic-bw-large"],
  ["plc", "application/vnd.mobius.plc"],
  ["plf", "application/vnd.pocketlearn"],
  ["pls", "application/pls+xml"],
  ["pm", "application/x-perl"],
  ["pml", "application/vnd.ctc-posml"],
  ["png", "image/png"],
  ["pnm", "image/x-portable-anymap"],
  ["portpkg", "application/vnd.macports.portpkg"],
  ["pot", "application/vnd.ms-powerpoint"],
  ["potm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
  ["potx", "application/vnd.openxmlformats-officedocument.presentationml.template"],
  ["ppa", "application/vnd.ms-powerpoint"],
  ["ppam", "application/vnd.ms-powerpoint.addin.macroEnabled.12"],
  ["ppd", "application/vnd.cups-ppd"],
  ["ppm", "image/x-portable-pixmap"],
  ["pps", "application/vnd.ms-powerpoint"],
  ["ppsm", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],
  ["ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow"],
  ["ppt", "application/powerpoint"],
  ["pptm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
  ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ["pqa", "application/vnd.palm"],
  ["prc", "application/x-pilot"],
  ["pre", "application/vnd.lotus-freelance"],
  ["prf", "application/pics-rules"],
  ["provx", "application/provenance+xml"],
  ["ps", "application/postscript"],
  ["psb", "application/vnd.3gpp.pic-bw-small"],
  ["psd", "application/x-photoshop"],
  ["psf", "application/x-font-linux-psf"],
  ["pskcxml", "application/pskc+xml"],
  ["pti", "image/prs.pti"],
  ["ptid", "application/vnd.pvi.ptid1"],
  ["pub", "application/x-mspublisher"],
  ["pvb", "application/vnd.3gpp.pic-bw-var"],
  ["pwn", "application/vnd.3m.post-it-notes"],
  ["pya", "audio/vnd.ms-playready.media.pya"],
  ["pyv", "video/vnd.ms-playready.media.pyv"],
  ["qam", "application/vnd.epson.quickanime"],
  ["qbo", "application/vnd.intu.qbo"],
  ["qfx", "application/vnd.intu.qfx"],
  ["qps", "application/vnd.publishare-delta-tree"],
  ["qt", "video/quicktime"],
  ["qwd", "application/vnd.quark.quarkxpress"],
  ["qwt", "application/vnd.quark.quarkxpress"],
  ["qxb", "application/vnd.quark.quarkxpress"],
  ["qxd", "application/vnd.quark.quarkxpress"],
  ["qxl", "application/vnd.quark.quarkxpress"],
  ["qxt", "application/vnd.quark.quarkxpress"],
  ["ra", "audio/x-realaudio"],
  ["ram", "audio/x-pn-realaudio"],
  ["raml", "application/raml+yaml"],
  ["rapd", "application/route-apd+xml"],
  ["rar", "application/x-rar"],
  ["ras", "image/x-cmu-raster"],
  ["rcprofile", "application/vnd.ipunplugged.rcprofile"],
  ["rdf", "application/rdf+xml"],
  ["rdz", "application/vnd.data-vision.rdz"],
  ["relo", "application/p2p-overlay+xml"],
  ["rep", "application/vnd.businessobjects"],
  ["res", "application/x-dtbresource+xml"],
  ["rgb", "image/x-rgb"],
  ["rif", "application/reginfo+xml"],
  ["rip", "audio/vnd.rip"],
  ["ris", "application/x-research-info-systems"],
  ["rl", "application/resource-lists+xml"],
  ["rlc", "image/vnd.fujixerox.edmics-rlc"],
  ["rld", "application/resource-lists-diff+xml"],
  ["rm", "audio/x-pn-realaudio"],
  ["rmi", "audio/midi"],
  ["rmp", "audio/x-pn-realaudio-plugin"],
  ["rms", "application/vnd.jcp.javame.midlet-rms"],
  ["rmvb", "application/vnd.rn-realmedia-vbr"],
  ["rnc", "application/relax-ng-compact-syntax"],
  ["rng", "application/xml"],
  ["roa", "application/rpki-roa"],
  ["roff", "text/troff"],
  ["rp9", "application/vnd.cloanto.rp9"],
  ["rpm", "audio/x-pn-realaudio-plugin"],
  ["rpss", "application/vnd.nokia.radio-presets"],
  ["rpst", "application/vnd.nokia.radio-preset"],
  ["rq", "application/sparql-query"],
  ["rs", "application/rls-services+xml"],
  ["rsa", "application/x-pkcs7"],
  ["rsat", "application/atsc-rsat+xml"],
  ["rsd", "application/rsd+xml"],
  ["rsheet", "application/urc-ressheet+xml"],
  ["rss", "application/rss+xml"],
  ["rtf", "text/rtf"],
  ["rtx", "text/richtext"],
  ["run", "application/x-makeself"],
  ["rusd", "application/route-usd+xml"],
  ["rv", "video/vnd.rn-realvideo"],
  ["s", "text/x-asm"],
  ["s3m", "audio/s3m"],
  ["saf", "application/vnd.yamaha.smaf-audio"],
  ["sass", "text/x-sass"],
  ["sbml", "application/sbml+xml"],
  ["sc", "application/vnd.ibm.secure-container"],
  ["scd", "application/x-msschedule"],
  ["scm", "application/vnd.lotus-screencam"],
  ["scq", "application/scvp-cv-request"],
  ["scs", "application/scvp-cv-response"],
  ["scss", "text/x-scss"],
  ["scurl", "text/vnd.curl.scurl"],
  ["sda", "application/vnd.stardivision.draw"],
  ["sdc", "application/vnd.stardivision.calc"],
  ["sdd", "application/vnd.stardivision.impress"],
  ["sdkd", "application/vnd.solent.sdkm+xml"],
  ["sdkm", "application/vnd.solent.sdkm+xml"],
  ["sdp", "application/sdp"],
  ["sdw", "application/vnd.stardivision.writer"],
  ["sea", "application/octet-stream"],
  ["see", "application/vnd.seemail"],
  ["seed", "application/vnd.fdsn.seed"],
  ["sema", "application/vnd.sema"],
  ["semd", "application/vnd.semd"],
  ["semf", "application/vnd.semf"],
  ["senmlx", "application/senml+xml"],
  ["sensmlx", "application/sensml+xml"],
  ["ser", "application/java-serialized-object"],
  ["setpay", "application/set-payment-initiation"],
  ["setreg", "application/set-registration-initiation"],
  ["sfd-hdstx", "application/vnd.hydrostatix.sof-data"],
  ["sfs", "application/vnd.spotfire.sfs"],
  ["sfv", "text/x-sfv"],
  ["sgi", "image/sgi"],
  ["sgl", "application/vnd.stardivision.writer-global"],
  ["sgm", "text/sgml"],
  ["sgml", "text/sgml"],
  ["sh", "application/x-sh"],
  ["shar", "application/x-shar"],
  ["shex", "text/shex"],
  ["shf", "application/shf+xml"],
  ["shtml", "text/html"],
  ["sid", "image/x-mrsid-image"],
  ["sieve", "application/sieve"],
  ["sig", "application/pgp-signature"],
  ["sil", "audio/silk"],
  ["silo", "model/mesh"],
  ["sis", "application/vnd.symbian.install"],
  ["sisx", "application/vnd.symbian.install"],
  ["sit", "application/x-stuffit"],
  ["sitx", "application/x-stuffitx"],
  ["siv", "application/sieve"],
  ["skd", "application/vnd.koan"],
  ["skm", "application/vnd.koan"],
  ["skp", "application/vnd.koan"],
  ["skt", "application/vnd.koan"],
  ["sldm", "application/vnd.ms-powerpoint.slide.macroenabled.12"],
  ["sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide"],
  ["slim", "text/slim"],
  ["slm", "text/slim"],
  ["sls", "application/route-s-tsid+xml"],
  ["slt", "application/vnd.epson.salt"],
  ["sm", "application/vnd.stepmania.stepchart"],
  ["smf", "application/vnd.stardivision.math"],
  ["smi", "application/smil"],
  ["smil", "application/smil"],
  ["smv", "video/x-smv"],
  ["smzip", "application/vnd.stepmania.package"],
  ["snd", "audio/basic"],
  ["snf", "application/x-font-snf"],
  ["so", "application/octet-stream"],
  ["spc", "application/x-pkcs7-certificates"],
  ["spdx", "text/spdx"],
  ["spf", "application/vnd.yamaha.smaf-phrase"],
  ["spl", "application/x-futuresplash"],
  ["spot", "text/vnd.in3d.spot"],
  ["spp", "application/scvp-vp-response"],
  ["spq", "application/scvp-vp-request"],
  ["spx", "audio/ogg"],
  ["sql", "application/x-sql"],
  ["src", "application/x-wais-source"],
  ["srt", "application/x-subrip"],
  ["sru", "application/sru+xml"],
  ["srx", "application/sparql-results+xml"],
  ["ssdl", "application/ssdl+xml"],
  ["sse", "application/vnd.kodak-descriptor"],
  ["ssf", "application/vnd.epson.ssf"],
  ["ssml", "application/ssml+xml"],
  ["sst", "application/octet-stream"],
  ["st", "application/vnd.sailingtracker.track"],
  ["stc", "application/vnd.sun.xml.calc.template"],
  ["std", "application/vnd.sun.xml.draw.template"],
  ["stf", "application/vnd.wt.stf"],
  ["sti", "application/vnd.sun.xml.impress.template"],
  ["stk", "application/hyperstudio"],
  ["stl", "model/stl"],
  ["stpx", "model/step+xml"],
  ["stpxz", "model/step-xml+zip"],
  ["stpz", "model/step+zip"],
  ["str", "application/vnd.pg.format"],
  ["stw", "application/vnd.sun.xml.writer.template"],
  ["styl", "text/stylus"],
  ["stylus", "text/stylus"],
  ["sub", "text/vnd.dvb.subtitle"],
  ["sus", "application/vnd.sus-calendar"],
  ["susp", "application/vnd.sus-calendar"],
  ["sv4cpio", "application/x-sv4cpio"],
  ["sv4crc", "application/x-sv4crc"],
  ["svc", "application/vnd.dvb.service"],
  ["svd", "application/vnd.svd"],
  ["svg", "image/svg+xml"],
  ["svgz", "image/svg+xml"],
  ["swa", "application/x-director"],
  ["swf", "application/x-shockwave-flash"],
  ["swi", "application/vnd.aristanetworks.swi"],
  ["swidtag", "application/swid+xml"],
  ["sxc", "application/vnd.sun.xml.calc"],
  ["sxd", "application/vnd.sun.xml.draw"],
  ["sxg", "application/vnd.sun.xml.writer.global"],
  ["sxi", "application/vnd.sun.xml.impress"],
  ["sxm", "application/vnd.sun.xml.math"],
  ["sxw", "application/vnd.sun.xml.writer"],
  ["t", "text/troff"],
  ["t3", "application/x-t3vm-image"],
  ["t38", "image/t38"],
  ["taglet", "application/vnd.mynfc"],
  ["tao", "application/vnd.tao.intent-module-archive"],
  ["tap", "image/vnd.tencent.tap"],
  ["tar", "application/x-tar"],
  ["tcap", "application/vnd.3gpp2.tcap"],
  ["tcl", "application/x-tcl"],
  ["td", "application/urc-targetdesc+xml"],
  ["teacher", "application/vnd.smart.teacher"],
  ["tei", "application/tei+xml"],
  ["teicorpus", "application/tei+xml"],
  ["tex", "application/x-tex"],
  ["texi", "application/x-texinfo"],
  ["texinfo", "application/x-texinfo"],
  ["text", "text/plain"],
  ["tfi", "application/thraud+xml"],
  ["tfm", "application/x-tex-tfm"],
  ["tfx", "image/tiff-fx"],
  ["tga", "image/x-tga"],
  ["tgz", "application/x-tar"],
  ["thmx", "application/vnd.ms-officetheme"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["tk", "application/x-tcl"],
  ["tmo", "application/vnd.tmobile-livetv"],
  ["toml", "application/toml"],
  ["torrent", "application/x-bittorrent"],
  ["tpl", "application/vnd.groove-tool-template"],
  ["tpt", "application/vnd.trid.tpt"],
  ["tr", "text/troff"],
  ["tra", "application/vnd.trueapp"],
  ["trig", "application/trig"],
  ["trm", "application/x-msterminal"],
  ["ts", "video/mp2t"],
  ["tsd", "application/timestamped-data"],
  ["tsv", "text/tab-separated-values"],
  ["ttc", "font/collection"],
  ["ttf", "font/ttf"],
  ["ttl", "text/turtle"],
  ["ttml", "application/ttml+xml"],
  ["twd", "application/vnd.simtech-mindmapper"],
  ["twds", "application/vnd.simtech-mindmapper"],
  ["txd", "application/vnd.genomatix.tuxedo"],
  ["txf", "application/vnd.mobius.txf"],
  ["txt", "text/plain"],
  ["u8dsn", "message/global-delivery-status"],
  ["u8hdr", "message/global-headers"],
  ["u8mdn", "message/global-disposition-notification"],
  ["u8msg", "message/global"],
  ["u32", "application/x-authorware-bin"],
  ["ubj", "application/ubjson"],
  ["udeb", "application/x-debian-package"],
  ["ufd", "application/vnd.ufdl"],
  ["ufdl", "application/vnd.ufdl"],
  ["ulx", "application/x-glulx"],
  ["umj", "application/vnd.umajin"],
  ["unityweb", "application/vnd.unity"],
  ["uoml", "application/vnd.uoml+xml"],
  ["uri", "text/uri-list"],
  ["uris", "text/uri-list"],
  ["urls", "text/uri-list"],
  ["usdz", "model/vnd.usdz+zip"],
  ["ustar", "application/x-ustar"],
  ["utz", "application/vnd.uiq.theme"],
  ["uu", "text/x-uuencode"],
  ["uva", "audio/vnd.dece.audio"],
  ["uvd", "application/vnd.dece.data"],
  ["uvf", "application/vnd.dece.data"],
  ["uvg", "image/vnd.dece.graphic"],
  ["uvh", "video/vnd.dece.hd"],
  ["uvi", "image/vnd.dece.graphic"],
  ["uvm", "video/vnd.dece.mobile"],
  ["uvp", "video/vnd.dece.pd"],
  ["uvs", "video/vnd.dece.sd"],
  ["uvt", "application/vnd.dece.ttml+xml"],
  ["uvu", "video/vnd.uvvu.mp4"],
  ["uvv", "video/vnd.dece.video"],
  ["uvva", "audio/vnd.dece.audio"],
  ["uvvd", "application/vnd.dece.data"],
  ["uvvf", "application/vnd.dece.data"],
  ["uvvg", "image/vnd.dece.graphic"],
  ["uvvh", "video/vnd.dece.hd"],
  ["uvvi", "image/vnd.dece.graphic"],
  ["uvvm", "video/vnd.dece.mobile"],
  ["uvvp", "video/vnd.dece.pd"],
  ["uvvs", "video/vnd.dece.sd"],
  ["uvvt", "application/vnd.dece.ttml+xml"],
  ["uvvu", "video/vnd.uvvu.mp4"],
  ["uvvv", "video/vnd.dece.video"],
  ["uvvx", "application/vnd.dece.unspecified"],
  ["uvvz", "application/vnd.dece.zip"],
  ["uvx", "application/vnd.dece.unspecified"],
  ["uvz", "application/vnd.dece.zip"],
  ["vbox", "application/x-virtualbox-vbox"],
  ["vbox-extpack", "application/x-virtualbox-vbox-extpack"],
  ["vcard", "text/vcard"],
  ["vcd", "application/x-cdlink"],
  ["vcf", "text/x-vcard"],
  ["vcg", "application/vnd.groove-vcard"],
  ["vcs", "text/x-vcalendar"],
  ["vcx", "application/vnd.vcx"],
  ["vdi", "application/x-virtualbox-vdi"],
  ["vds", "model/vnd.sap.vds"],
  ["vhd", "application/x-virtualbox-vhd"],
  ["vis", "application/vnd.visionary"],
  ["viv", "video/vnd.vivo"],
  ["vlc", "application/videolan"],
  ["vmdk", "application/x-virtualbox-vmdk"],
  ["vob", "video/x-ms-vob"],
  ["vor", "application/vnd.stardivision.writer"],
  ["vox", "application/x-authorware-bin"],
  ["vrml", "model/vrml"],
  ["vsd", "application/vnd.visio"],
  ["vsf", "application/vnd.vsf"],
  ["vss", "application/vnd.visio"],
  ["vst", "application/vnd.visio"],
  ["vsw", "application/vnd.visio"],
  ["vtf", "image/vnd.valve.source.texture"],
  ["vtt", "text/vtt"],
  ["vtu", "model/vnd.vtu"],
  ["vxml", "application/voicexml+xml"],
  ["w3d", "application/x-director"],
  ["wad", "application/x-doom"],
  ["wadl", "application/vnd.sun.wadl+xml"],
  ["war", "application/java-archive"],
  ["wasm", "application/wasm"],
  ["wav", "audio/x-wav"],
  ["wax", "audio/x-ms-wax"],
  ["wbmp", "image/vnd.wap.wbmp"],
  ["wbs", "application/vnd.criticaltools.wbs+xml"],
  ["wbxml", "application/wbxml"],
  ["wcm", "application/vnd.ms-works"],
  ["wdb", "application/vnd.ms-works"],
  ["wdp", "image/vnd.ms-photo"],
  ["weba", "audio/webm"],
  ["webapp", "application/x-web-app-manifest+json"],
  ["webm", "video/webm"],
  ["webmanifest", "application/manifest+json"],
  ["webp", "image/webp"],
  ["wg", "application/vnd.pmi.widget"],
  ["wgt", "application/widget"],
  ["wks", "application/vnd.ms-works"],
  ["wm", "video/x-ms-wm"],
  ["wma", "audio/x-ms-wma"],
  ["wmd", "application/x-ms-wmd"],
  ["wmf", "image/wmf"],
  ["wml", "text/vnd.wap.wml"],
  ["wmlc", "application/wmlc"],
  ["wmls", "text/vnd.wap.wmlscript"],
  ["wmlsc", "application/vnd.wap.wmlscriptc"],
  ["wmv", "video/x-ms-wmv"],
  ["wmx", "video/x-ms-wmx"],
  ["wmz", "application/x-msmetafile"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["word", "application/msword"],
  ["wpd", "application/vnd.wordperfect"],
  ["wpl", "application/vnd.ms-wpl"],
  ["wps", "application/vnd.ms-works"],
  ["wqd", "application/vnd.wqd"],
  ["wri", "application/x-mswrite"],
  ["wrl", "model/vrml"],
  ["wsc", "message/vnd.wfa.wsc"],
  ["wsdl", "application/wsdl+xml"],
  ["wspolicy", "application/wspolicy+xml"],
  ["wtb", "application/vnd.webturbo"],
  ["wvx", "video/x-ms-wvx"],
  ["x3d", "model/x3d+xml"],
  ["x3db", "model/x3d+fastinfoset"],
  ["x3dbz", "model/x3d+binary"],
  ["x3dv", "model/x3d-vrml"],
  ["x3dvz", "model/x3d+vrml"],
  ["x3dz", "model/x3d+xml"],
  ["x32", "application/x-authorware-bin"],
  ["x_b", "model/vnd.parasolid.transmit.binary"],
  ["x_t", "model/vnd.parasolid.transmit.text"],
  ["xaml", "application/xaml+xml"],
  ["xap", "application/x-silverlight-app"],
  ["xar", "application/vnd.xara"],
  ["xav", "application/xcap-att+xml"],
  ["xbap", "application/x-ms-xbap"],
  ["xbd", "application/vnd.fujixerox.docuworks.binder"],
  ["xbm", "image/x-xbitmap"],
  ["xca", "application/xcap-caps+xml"],
  ["xcs", "application/calendar+xml"],
  ["xdf", "application/xcap-diff+xml"],
  ["xdm", "application/vnd.syncml.dm+xml"],
  ["xdp", "application/vnd.adobe.xdp+xml"],
  ["xdssc", "application/dssc+xml"],
  ["xdw", "application/vnd.fujixerox.docuworks"],
  ["xel", "application/xcap-el+xml"],
  ["xenc", "application/xenc+xml"],
  ["xer", "application/patch-ops-error+xml"],
  ["xfdf", "application/vnd.adobe.xfdf"],
  ["xfdl", "application/vnd.xfdl"],
  ["xht", "application/xhtml+xml"],
  ["xhtml", "application/xhtml+xml"],
  ["xhvml", "application/xv+xml"],
  ["xif", "image/vnd.xiff"],
  ["xl", "application/excel"],
  ["xla", "application/vnd.ms-excel"],
  ["xlam", "application/vnd.ms-excel.addin.macroEnabled.12"],
  ["xlc", "application/vnd.ms-excel"],
  ["xlf", "application/xliff+xml"],
  ["xlm", "application/vnd.ms-excel"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsb", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"],
  ["xlsm", "application/vnd.ms-excel.sheet.macroEnabled.12"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xlt", "application/vnd.ms-excel"],
  ["xltm", "application/vnd.ms-excel.template.macroEnabled.12"],
  ["xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template"],
  ["xlw", "application/vnd.ms-excel"],
  ["xm", "audio/xm"],
  ["xml", "application/xml"],
  ["xns", "application/xcap-ns+xml"],
  ["xo", "application/vnd.olpc-sugar"],
  ["xop", "application/xop+xml"],
  ["xpi", "application/x-xpinstall"],
  ["xpl", "application/xproc+xml"],
  ["xpm", "image/x-xpixmap"],
  ["xpr", "application/vnd.is-xpr"],
  ["xps", "application/vnd.ms-xpsdocument"],
  ["xpw", "application/vnd.intercon.formnet"],
  ["xpx", "application/vnd.intercon.formnet"],
  ["xsd", "application/xml"],
  ["xsl", "application/xml"],
  ["xslt", "application/xslt+xml"],
  ["xsm", "application/vnd.syncml+xml"],
  ["xspf", "application/xspf+xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["xvm", "application/xv+xml"],
  ["xvml", "application/xv+xml"],
  ["xwd", "image/x-xwindowdump"],
  ["xyz", "chemical/x-xyz"],
  ["xz", "application/x-xz"],
  ["yaml", "text/yaml"],
  ["yang", "application/yang"],
  ["yin", "application/yin+xml"],
  ["yml", "text/yaml"],
  ["ymp", "text/x-suse-ymp"],
  ["z", "application/x-compress"],
  ["z1", "application/x-zmachine"],
  ["z2", "application/x-zmachine"],
  ["z3", "application/x-zmachine"],
  ["z4", "application/x-zmachine"],
  ["z5", "application/x-zmachine"],
  ["z6", "application/x-zmachine"],
  ["z7", "application/x-zmachine"],
  ["z8", "application/x-zmachine"],
  ["zaz", "application/vnd.zzazz.deck+xml"],
  ["zip", "application/zip"],
  ["zir", "application/vnd.zul"],
  ["zirz", "application/vnd.zul"],
  ["zmm", "application/vnd.handheld-entertainment+xml"],
  ["zsh", "text/x-scriptzsh"]
]);
function Ni(e, t, n) {
  const r = wN(e), { webkitRelativePath: i } = e, a = typeof t == "string" ? t : typeof i == "string" && i.length > 0 ? i : `./${e.name}`;
  return typeof r.path != "string" && Xh(r, "path", a), Xh(r, "relativePath", a), r;
}
function wN(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const r = t.split(".").pop().toLowerCase(), i = yN.get(r);
    i && Object.defineProperty(e, "type", {
      value: i,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function Xh(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const EN = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function bN(e) {
  return At(this, void 0, void 0, function* () {
    return ks(e) && kN(e.dataTransfer) ? AN(e.dataTransfer, e.type) : CN(e) ? SN(e) : Array.isArray(e) && e.every((t) => "getFile" in t && typeof t.getFile == "function") ? _N(e) : [];
  });
}
function kN(e) {
  return ks(e);
}
function CN(e) {
  return ks(e) && ks(e.target);
}
function ks(e) {
  return typeof e == "object" && e !== null;
}
function SN(e) {
  return Hc(e.target.files).map((t) => Ni(t));
}
function _N(e) {
  return At(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => Ni(n));
  });
}
function AN(e, t) {
  return At(this, void 0, void 0, function* () {
    if (e.items) {
      const n = Hc(e.items).filter((i) => i.kind === "file");
      if (t !== "drop")
        return n;
      const r = yield Promise.all(n.map(TN));
      return Yh(Wy(r));
    }
    return Yh(Hc(e.files).map((n) => Ni(n)));
  });
}
function Yh(e) {
  return e.filter((t) => EN.indexOf(t.name) === -1);
}
function Hc(e) {
  if (e === null)
    return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t.push(r);
  }
  return t;
}
function TN(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return Zh(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? qy(t) : Zh(e, t);
}
function Wy(e) {
  return e.reduce((t, n) => [
    ...t,
    ...Array.isArray(n) ? Wy(n) : [n]
  ], []);
}
function Zh(e, t) {
  return At(this, void 0, void 0, function* () {
    var n;
    if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
      const a = yield e.getAsFileSystemHandle();
      if (a === null)
        throw new Error(`${e} is not a File`);
      if (a !== void 0) {
        const o = yield a.getFile();
        return o.handle = a, Ni(o);
      }
    }
    const r = e.getAsFile();
    if (!r)
      throw new Error(`${e} is not a File`);
    return Ni(r, (n = t == null ? void 0 : t.fullPath) !== null && n !== void 0 ? n : void 0);
  });
}
function NN(e) {
  return At(this, void 0, void 0, function* () {
    return e.isDirectory ? qy(e) : IN(e);
  });
}
function qy(e) {
  const t = e.createReader();
  return new Promise((n, r) => {
    const i = [];
    function a() {
      t.readEntries((o) => At(this, void 0, void 0, function* () {
        if (o.length) {
          const s = Promise.all(o.map(NN));
          i.push(s), a();
        } else
          try {
            const s = yield Promise.all(i);
            n(s);
          } catch (s) {
            r(s);
          }
      }), (o) => {
        r(o);
      });
    }
    a();
  });
}
function IN(e) {
  return At(this, void 0, void 0, function* () {
    return new Promise((t, n) => {
      e.file((r) => {
        const i = Ni(r, e.fullPath);
        t(i);
      }, (r) => {
        n(r);
      });
    });
  });
}
var wu = function(e, t) {
  if (e && t) {
    var n = Array.isArray(t) ? t : t.split(",");
    if (n.length === 0)
      return !0;
    var r = e.name || "", i = (e.type || "").toLowerCase(), a = i.replace(/\/.*$/, "");
    return n.some(function(o) {
      var s = o.trim().toLowerCase();
      return s.charAt(0) === "." ? r.toLowerCase().endsWith(s) : s.endsWith("/*") ? a === s.replace(/\/.*$/, "") : i === s;
    });
  }
  return !0;
};
function Jh(e) {
  return RN(e) || FN(e) || Qy(e) || PN();
}
function PN() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function FN(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function RN(e) {
  if (Array.isArray(e)) return Vc(e);
}
function ev(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function tv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ev(Object(n), !0).forEach(function(r) {
      Ky(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ev(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ky(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ma(e, t) {
  return MN(e) || DN(e, t) || Qy(e, t) || ON();
}
function ON() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qy(e, t) {
  if (e) {
    if (typeof e == "string") return Vc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Vc(e, t);
  }
}
function Vc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function DN(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], i = !0, a = !1, o, s;
    try {
      for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0)
        ;
    } catch (l) {
      a = !0, s = l;
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (a) throw s;
      }
    }
    return r;
  }
}
function MN(e) {
  if (Array.isArray(e)) return e;
}
var LN = typeof wu == "function" ? wu : wu.default, Xy = "file-invalid-type", Yy = "file-too-large", Zy = "file-too-small", jN = "too-many-files", Eu = {
  FileInvalidType: Xy,
  FileTooLarge: Yy,
  FileTooSmall: Zy
}, BN = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = t.split(","), r = n.length > 1 ? "one of ".concat(n.join(", ")) : n[0];
  return {
    code: Xy,
    message: "File type must be ".concat(r)
  };
}, nv = function(t) {
  return {
    code: Yy,
    message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, rv = function(t) {
  return {
    code: Zy,
    message: "File is smaller than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, zN = {
  code: jN,
  message: "Too many files"
};
function Jy(e, t) {
  var n = e.type === "application/x-moz-file" || LN(e, t);
  return [n, n ? null : BN(t)];
}
function ew(e, t, n) {
  if (ur(e.size))
    if (ur(t) && ur(n)) {
      if (e.size > n) return [!1, nv(n)];
      if (e.size < t) return [!1, rv(t)];
    } else {
      if (ur(t) && e.size < t) return [!1, rv(t)];
      if (ur(n) && e.size > n) return [!1, nv(n)];
    }
  return [!0, null];
}
function ur(e) {
  return e != null;
}
function HN(e) {
  var t = e.files, n = e.accept, r = e.minSize, i = e.maxSize, a = e.multiple, o = e.maxFiles, s = e.validator;
  return !a && t.length > 1 || a && o >= 1 && t.length > o ? !1 : t.every(function(l) {
    var u = Jy(l, n), c = Ma(u, 1), f = c[0], d = ew(l, r, i), v = Ma(d, 1), E = v[0], x = s ? s(l) : null;
    return f && E && !x;
  });
}
function Cs(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function _o(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function iv(e) {
  e.preventDefault();
}
function VN(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function $N(e) {
  return e.indexOf("Edge/") !== -1;
}
function UN() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return VN(e) || $N(e);
}
function Jt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
      a[o - 1] = arguments[o];
    return t.some(function(s) {
      return !Cs(r) && s && s.apply(void 0, [r].concat(a)), Cs(r);
    });
  };
}
function GN() {
  return "showOpenFilePicker" in window;
}
function WN(e) {
  if (ur(e)) {
    var t = Object.entries(e).filter(function(n) {
      var r = Ma(n, 2), i = r[0], a = r[1], o = !0;
      return tw(i) || (console.warn('Skipped "'.concat(i, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), o = !1), (!Array.isArray(a) || !a.every(nw)) && (console.warn('Skipped "'.concat(i, '" because an invalid file extension was provided.')), o = !1), o;
    }).reduce(function(n, r) {
      var i = Ma(r, 2), a = i[0], o = i[1];
      return tv(tv({}, n), {}, Ky({}, a, o));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: t
    }];
  }
  return e;
}
function qN(e) {
  if (ur(e))
    return Object.entries(e).reduce(function(t, n) {
      var r = Ma(n, 2), i = r[0], a = r[1];
      return [].concat(Jh(t), [i], Jh(a));
    }, []).filter(function(t) {
      return tw(t) || nw(t);
    }).join(",");
}
function KN(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function QN(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function tw(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function nw(e) {
  return /^.*\.[\w]+$/.test(e);
}
var XN = ["children"], YN = ["open"], ZN = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], JN = ["refKey", "onChange", "onClick"];
function eI(e) {
  return rI(e) || nI(e) || rw(e) || tI();
}
function tI() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nI(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function rI(e) {
  if (Array.isArray(e)) return $c(e);
}
function bu(e, t) {
  return oI(e) || aI(e, t) || rw(e, t) || iI();
}
function iI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rw(e, t) {
  if (e) {
    if (typeof e == "string") return $c(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $c(e, t);
  }
}
function $c(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function aI(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], i = !0, a = !1, o, s;
    try {
      for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0)
        ;
    } catch (l) {
      a = !0, s = l;
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (a) throw s;
      }
    }
    return r;
  }
}
function oI(e) {
  if (Array.isArray(e)) return e;
}
function av(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? av(Object(n), !0).forEach(function(r) {
      Uc(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : av(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Uc(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ss(e, t) {
  if (e == null) return {};
  var n = sI(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function sI(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var mf = /* @__PURE__ */ w.forwardRef(function(e, t) {
  var n = e.children, r = Ss(e, XN), i = aw(r), a = i.open, o = Ss(i, YN);
  return w.useImperativeHandle(t, function() {
    return {
      open: a
    };
  }, [a]), /* @__PURE__ */ m.createElement(w.Fragment, null, n(ke(ke({}, o), {}, {
    open: a
  })));
});
mf.displayName = "Dropzone";
var iw = {
  disabled: !1,
  getFilesFromEvent: bN,
  maxSize: 1 / 0,
  minSize: 0,
  multiple: !0,
  maxFiles: 0,
  preventDropOnDocument: !0,
  noClick: !1,
  noKeyboard: !1,
  noDrag: !1,
  noDragEventsBubbling: !1,
  validator: null,
  useFsAccessApi: !1,
  autoFocus: !1
};
mf.defaultProps = iw;
mf.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: p.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: p.objectOf(p.arrayOf(p.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: p.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: p.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: p.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: p.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: p.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: p.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: p.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: p.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: p.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: p.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event|Array<FileSystemFileHandle>)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: p.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: p.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: p.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: p.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: p.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: p.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: p.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: p.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: p.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: p.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: p.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: p.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: p.func
};
var Gc = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function aw() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = ke(ke({}, iw), e), n = t.accept, r = t.disabled, i = t.getFilesFromEvent, a = t.maxSize, o = t.minSize, s = t.multiple, l = t.maxFiles, u = t.onDragEnter, c = t.onDragLeave, f = t.onDragOver, d = t.onDrop, v = t.onDropAccepted, E = t.onDropRejected, x = t.onFileDialogCancel, b = t.onFileDialogOpen, g = t.useFsAccessApi, h = t.autoFocus, y = t.preventDropOnDocument, k = t.noClick, S = t.noKeyboard, _ = t.noDrag, A = t.noDragEventsBubbling, T = t.onError, O = t.validator, P = w.useMemo(function() {
    return qN(n);
  }, [n]), B = w.useMemo(function() {
    return WN(n);
  }, [n]), H = w.useMemo(function() {
    return typeof b == "function" ? b : ov;
  }, [b]), U = w.useMemo(function() {
    return typeof x == "function" ? x : ov;
  }, [x]), Q = w.useRef(null), Z = w.useRef(null), te = w.useReducer(lI, Gc), ee = bu(te, 2), N = ee[0], R = ee[1], M = N.isFocused, K = N.isFileDialogActive, V = w.useRef(typeof window < "u" && window.isSecureContext && g && GN()), Te = function() {
    !V.current && K && setTimeout(function() {
      if (Z.current) {
        var q = Z.current.files;
        q.length || (R({
          type: "closeDialog"
        }), U());
      }
    }, 300);
  };
  w.useEffect(function() {
    return window.addEventListener("focus", Te, !1), function() {
      window.removeEventListener("focus", Te, !1);
    };
  }, [Z, K, U, V]);
  var ue = w.useRef([]), L = function(q) {
    Q.current && Q.current.contains(q.target) || (q.preventDefault(), ue.current = []);
  };
  w.useEffect(function() {
    return y && (document.addEventListener("dragover", iv, !1), document.addEventListener("drop", L, !1)), function() {
      y && (document.removeEventListener("dragover", iv), document.removeEventListener("drop", L));
    };
  }, [Q, y]), w.useEffect(function() {
    return !r && h && Q.current && Q.current.focus(), function() {
    };
  }, [Q, h, r]);
  var X = w.useCallback(function(D) {
    T ? T(D) : console.error(D);
  }, [T]), fe = w.useCallback(function(D) {
    D.preventDefault(), D.persist(), me(D), ue.current = [].concat(eI(ue.current), [D.target]), _o(D) && Promise.resolve(i(D)).then(function(q) {
      if (!(Cs(D) && !A)) {
        var be = q.length, Ne = be > 0 && HN({
          files: q,
          accept: P,
          minSize: o,
          maxSize: a,
          multiple: s,
          maxFiles: l,
          validator: O
        }), We = be > 0 && !Ne;
        R({
          isDragAccept: Ne,
          isDragReject: We,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), u && u(D);
      }
    }).catch(function(q) {
      return X(q);
    });
  }, [i, u, X, A, P, o, a, s, l, O]), Ee = w.useCallback(function(D) {
    D.preventDefault(), D.persist(), me(D);
    var q = _o(D);
    if (q && D.dataTransfer)
      try {
        D.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return q && f && f(D), !1;
  }, [f, A]), lt = w.useCallback(function(D) {
    D.preventDefault(), D.persist(), me(D);
    var q = ue.current.filter(function(Ne) {
      return Q.current && Q.current.contains(Ne);
    }), be = q.indexOf(D.target);
    be !== -1 && q.splice(be, 1), ue.current = q, !(q.length > 0) && (R({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), _o(D) && c && c(D));
  }, [Q, c, A]), Je = w.useCallback(function(D, q) {
    var be = [], Ne = [];
    D.forEach(function(We) {
      var Li = Jy(We, P), Mr = bu(Li, 2), wl = Mr[0], El = Mr[1], bl = ew(We, o, a), Ya = bu(bl, 2), kl = Ya[0], Cl = Ya[1], Sl = O ? O(We) : null;
      if (wl && kl && !Sl)
        be.push(We);
      else {
        var _l = [El, Cl];
        Sl && (_l = _l.concat(Sl)), Ne.push({
          file: We,
          errors: _l.filter(function(fw) {
            return fw;
          })
        });
      }
    }), (!s && be.length > 1 || s && l >= 1 && be.length > l) && (be.forEach(function(We) {
      Ne.push({
        file: We,
        errors: [zN]
      });
    }), be.splice(0)), R({
      acceptedFiles: be,
      fileRejections: Ne,
      isDragReject: Ne.length > 0,
      type: "setFiles"
    }), d && d(be, Ne, q), Ne.length > 0 && E && E(Ne, q), be.length > 0 && v && v(be, q);
  }, [R, s, P, o, a, l, d, v, E, O]), ut = w.useCallback(function(D) {
    D.preventDefault(), D.persist(), me(D), ue.current = [], _o(D) && Promise.resolve(i(D)).then(function(q) {
      Cs(D) && !A || Je(q, D);
    }).catch(function(q) {
      return X(q);
    }), R({
      type: "reset"
    });
  }, [i, Je, X, A]), Ge = w.useCallback(function() {
    if (V.current) {
      R({
        type: "openDialog"
      }), H();
      var D = {
        multiple: s,
        types: B
      };
      window.showOpenFilePicker(D).then(function(q) {
        return i(q);
      }).then(function(q) {
        Je(q, null), R({
          type: "closeDialog"
        });
      }).catch(function(q) {
        KN(q) ? (U(q), R({
          type: "closeDialog"
        })) : QN(q) ? (V.current = !1, Z.current ? (Z.current.value = null, Z.current.click()) : X(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : X(q);
      });
      return;
    }
    Z.current && (R({
      type: "openDialog"
    }), H(), Z.current.value = null, Z.current.click());
  }, [R, H, U, g, Je, X, B, s]), fn = w.useCallback(function(D) {
    !Q.current || !Q.current.isEqualNode(D.target) || (D.key === " " || D.key === "Enter" || D.keyCode === 32 || D.keyCode === 13) && (D.preventDefault(), Ge());
  }, [Q, Ge]), Tn = w.useCallback(function() {
    R({
      type: "focus"
    });
  }, []), Nn = w.useCallback(function() {
    R({
      type: "blur"
    });
  }, []), Re = w.useCallback(function() {
    k || (UN() ? setTimeout(Ge, 0) : Ge());
  }, [k, Ge]), ae = function(q) {
    return r ? null : q;
  }, ve = function(q) {
    return S ? null : ae(q);
  }, de = function(q) {
    return _ ? null : ae(q);
  }, me = function(q) {
    A && q.stopPropagation();
  }, Yt = w.useMemo(function() {
    return function() {
      var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, q = D.refKey, be = q === void 0 ? "ref" : q, Ne = D.role, We = D.onKeyDown, Li = D.onFocus, Mr = D.onBlur, wl = D.onClick, El = D.onDragEnter, bl = D.onDragOver, Ya = D.onDragLeave, kl = D.onDrop, Cl = Ss(D, ZN);
      return ke(ke(Uc({
        onKeyDown: ve(Jt(We, fn)),
        onFocus: ve(Jt(Li, Tn)),
        onBlur: ve(Jt(Mr, Nn)),
        onClick: ae(Jt(wl, Re)),
        onDragEnter: de(Jt(El, fe)),
        onDragOver: de(Jt(bl, Ee)),
        onDragLeave: de(Jt(Ya, lt)),
        onDrop: de(Jt(kl, ut)),
        role: typeof Ne == "string" && Ne !== "" ? Ne : "presentation"
      }, be, Q), !r && !S ? {
        tabIndex: 0
      } : {}), Cl);
    };
  }, [Q, fn, Tn, Nn, Re, fe, Ee, lt, ut, S, _, r]), Dr = w.useCallback(function(D) {
    D.stopPropagation();
  }, []), rr = w.useMemo(function() {
    return function() {
      var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, q = D.refKey, be = q === void 0 ? "ref" : q, Ne = D.onChange, We = D.onClick, Li = Ss(D, JN), Mr = Uc({
        accept: P,
        multiple: s,
        type: "file",
        style: {
          border: 0,
          clip: "rect(0, 0, 0, 0)",
          clipPath: "inset(50%)",
          height: "1px",
          margin: "0 -1px -1px 0",
          overflow: "hidden",
          padding: 0,
          position: "absolute",
          width: "1px",
          whiteSpace: "nowrap"
        },
        onChange: ae(Jt(Ne, ut)),
        onClick: ae(Jt(We, Dr)),
        tabIndex: -1
      }, be, Z);
      return ke(ke({}, Mr), Li);
    };
  }, [Z, n, s, ut, r]);
  return ke(ke({}, N), {}, {
    isFocused: M && !r,
    getRootProps: Yt,
    getInputProps: rr,
    rootRef: Q,
    inputRef: Z,
    open: ae(Ge)
  });
}
function lI(e, t) {
  switch (t.type) {
    case "focus":
      return ke(ke({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return ke(ke({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return ke(ke({}, Gc), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return ke(ke({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return ke(ke({}, e), {}, {
        isDragActive: t.isDragActive,
        isDragAccept: t.isDragAccept,
        isDragReject: t.isDragReject
      });
    case "setFiles":
      return ke(ke({}, e), {}, {
        acceptedFiles: t.acceptedFiles,
        fileRejections: t.fileRejections,
        isDragReject: t.isDragReject
      });
    case "reset":
      return ke({}, Gc);
    default:
      return e;
  }
}
function ov() {
}
var uI = /* @__PURE__ */ new Map([
  // https://github.com/guzzle/psr7/blob/2d9260799e713f1c475d3c5fdc3d6561ff7441b2/src/MimeType.php
  ["1km", "application/vnd.1000minds.decision-model+xml"],
  ["3dml", "text/vnd.in3d.3dml"],
  ["3ds", "image/x-3ds"],
  ["3g2", "video/3gpp2"],
  ["3gp", "video/3gp"],
  ["3gpp", "video/3gpp"],
  ["3mf", "model/3mf"],
  ["7z", "application/x-7z-compressed"],
  ["7zip", "application/x-7z-compressed"],
  ["123", "application/vnd.lotus-1-2-3"],
  ["aab", "application/x-authorware-bin"],
  ["aac", "audio/x-acc"],
  ["aam", "application/x-authorware-map"],
  ["aas", "application/x-authorware-seg"],
  ["abw", "application/x-abiword"],
  ["ac", "application/vnd.nokia.n-gage.ac+xml"],
  ["ac3", "audio/ac3"],
  ["acc", "application/vnd.americandynamics.acc"],
  ["ace", "application/x-ace-compressed"],
  ["acu", "application/vnd.acucobol"],
  ["acutc", "application/vnd.acucorp"],
  ["adp", "audio/adpcm"],
  ["aep", "application/vnd.audiograph"],
  ["afm", "application/x-font-type1"],
  ["afp", "application/vnd.ibm.modcap"],
  ["ahead", "application/vnd.ahead.space"],
  ["ai", "application/pdf"],
  ["aif", "audio/x-aiff"],
  ["aifc", "audio/x-aiff"],
  ["aiff", "audio/x-aiff"],
  ["air", "application/vnd.adobe.air-application-installer-package+zip"],
  ["ait", "application/vnd.dvb.ait"],
  ["ami", "application/vnd.amiga.ami"],
  ["amr", "audio/amr"],
  ["apk", "application/vnd.android.package-archive"],
  ["apng", "image/apng"],
  ["appcache", "text/cache-manifest"],
  ["application", "application/x-ms-application"],
  ["apr", "application/vnd.lotus-approach"],
  ["arc", "application/x-freearc"],
  ["arj", "application/x-arj"],
  ["asc", "application/pgp-signature"],
  ["asf", "video/x-ms-asf"],
  ["asm", "text/x-asm"],
  ["aso", "application/vnd.accpac.simply.aso"],
  ["asx", "video/x-ms-asf"],
  ["atc", "application/vnd.acucorp"],
  ["atom", "application/atom+xml"],
  ["atomcat", "application/atomcat+xml"],
  ["atomdeleted", "application/atomdeleted+xml"],
  ["atomsvc", "application/atomsvc+xml"],
  ["atx", "application/vnd.antix.game-component"],
  ["au", "audio/x-au"],
  ["avi", "video/x-msvideo"],
  ["avif", "image/avif"],
  ["aw", "application/applixware"],
  ["azf", "application/vnd.airzip.filesecure.azf"],
  ["azs", "application/vnd.airzip.filesecure.azs"],
  ["azv", "image/vnd.airzip.accelerator.azv"],
  ["azw", "application/vnd.amazon.ebook"],
  ["b16", "image/vnd.pco.b16"],
  ["bat", "application/x-msdownload"],
  ["bcpio", "application/x-bcpio"],
  ["bdf", "application/x-font-bdf"],
  ["bdm", "application/vnd.syncml.dm+wbxml"],
  ["bdoc", "application/x-bdoc"],
  ["bed", "application/vnd.realvnc.bed"],
  ["bh2", "application/vnd.fujitsu.oasysprs"],
  ["bin", "application/octet-stream"],
  ["blb", "application/x-blorb"],
  ["blorb", "application/x-blorb"],
  ["bmi", "application/vnd.bmi"],
  ["bmml", "application/vnd.balsamiq.bmml+xml"],
  ["bmp", "image/bmp"],
  ["book", "application/vnd.framemaker"],
  ["box", "application/vnd.previewsystems.box"],
  ["boz", "application/x-bzip2"],
  ["bpk", "application/octet-stream"],
  ["bpmn", "application/octet-stream"],
  ["bsp", "model/vnd.valve.source.compiled-map"],
  ["btif", "image/prs.btif"],
  ["buffer", "application/octet-stream"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["c", "text/x-c"],
  ["c4d", "application/vnd.clonk.c4group"],
  ["c4f", "application/vnd.clonk.c4group"],
  ["c4g", "application/vnd.clonk.c4group"],
  ["c4p", "application/vnd.clonk.c4group"],
  ["c4u", "application/vnd.clonk.c4group"],
  ["c11amc", "application/vnd.cluetrust.cartomobile-config"],
  ["c11amz", "application/vnd.cluetrust.cartomobile-config-pkg"],
  ["cab", "application/vnd.ms-cab-compressed"],
  ["caf", "audio/x-caf"],
  ["cap", "application/vnd.tcpdump.pcap"],
  ["car", "application/vnd.curl.car"],
  ["cat", "application/vnd.ms-pki.seccat"],
  ["cb7", "application/x-cbr"],
  ["cba", "application/x-cbr"],
  ["cbr", "application/x-cbr"],
  ["cbt", "application/x-cbr"],
  ["cbz", "application/x-cbr"],
  ["cc", "text/x-c"],
  ["cco", "application/x-cocoa"],
  ["cct", "application/x-director"],
  ["ccxml", "application/ccxml+xml"],
  ["cdbcmsg", "application/vnd.contact.cmsg"],
  ["cda", "application/x-cdf"],
  ["cdf", "application/x-netcdf"],
  ["cdfx", "application/cdfx+xml"],
  ["cdkey", "application/vnd.mediastation.cdkey"],
  ["cdmia", "application/cdmi-capability"],
  ["cdmic", "application/cdmi-container"],
  ["cdmid", "application/cdmi-domain"],
  ["cdmio", "application/cdmi-object"],
  ["cdmiq", "application/cdmi-queue"],
  ["cdr", "application/cdr"],
  ["cdx", "chemical/x-cdx"],
  ["cdxml", "application/vnd.chemdraw+xml"],
  ["cdy", "application/vnd.cinderella"],
  ["cer", "application/pkix-cert"],
  ["cfs", "application/x-cfs-compressed"],
  ["cgm", "image/cgm"],
  ["chat", "application/x-chat"],
  ["chm", "application/vnd.ms-htmlhelp"],
  ["chrt", "application/vnd.kde.kchart"],
  ["cif", "chemical/x-cif"],
  ["cii", "application/vnd.anser-web-certificate-issue-initiation"],
  ["cil", "application/vnd.ms-artgalry"],
  ["cjs", "application/node"],
  ["cla", "application/vnd.claymore"],
  ["class", "application/octet-stream"],
  ["clkk", "application/vnd.crick.clicker.keyboard"],
  ["clkp", "application/vnd.crick.clicker.palette"],
  ["clkt", "application/vnd.crick.clicker.template"],
  ["clkw", "application/vnd.crick.clicker.wordbank"],
  ["clkx", "application/vnd.crick.clicker"],
  ["clp", "application/x-msclip"],
  ["cmc", "application/vnd.cosmocaller"],
  ["cmdf", "chemical/x-cmdf"],
  ["cml", "chemical/x-cml"],
  ["cmp", "application/vnd.yellowriver-custom-menu"],
  ["cmx", "image/x-cmx"],
  ["cod", "application/vnd.rim.cod"],
  ["coffee", "text/coffeescript"],
  ["com", "application/x-msdownload"],
  ["conf", "text/plain"],
  ["cpio", "application/x-cpio"],
  ["cpp", "text/x-c"],
  ["cpt", "application/mac-compactpro"],
  ["crd", "application/x-mscardfile"],
  ["crl", "application/pkix-crl"],
  ["crt", "application/x-x509-ca-cert"],
  ["crx", "application/x-chrome-extension"],
  ["cryptonote", "application/vnd.rig.cryptonote"],
  ["csh", "application/x-csh"],
  ["csl", "application/vnd.citationstyles.style+xml"],
  ["csml", "chemical/x-csml"],
  ["csp", "application/vnd.commonspace"],
  ["csr", "application/octet-stream"],
  ["css", "text/css"],
  ["cst", "application/x-director"],
  ["csv", "text/csv"],
  ["cu", "application/cu-seeme"],
  ["curl", "text/vnd.curl"],
  ["cww", "application/prs.cww"],
  ["cxt", "application/x-director"],
  ["cxx", "text/x-c"],
  ["dae", "model/vnd.collada+xml"],
  ["daf", "application/vnd.mobius.daf"],
  ["dart", "application/vnd.dart"],
  ["dataless", "application/vnd.fdsn.seed"],
  ["davmount", "application/davmount+xml"],
  ["dbf", "application/vnd.dbf"],
  ["dbk", "application/docbook+xml"],
  ["dcr", "application/x-director"],
  ["dcurl", "text/vnd.curl.dcurl"],
  ["dd2", "application/vnd.oma.dd2+xml"],
  ["ddd", "application/vnd.fujixerox.ddd"],
  ["ddf", "application/vnd.syncml.dmddf+xml"],
  ["dds", "image/vnd.ms-dds"],
  ["deb", "application/x-debian-package"],
  ["def", "text/plain"],
  ["deploy", "application/octet-stream"],
  ["der", "application/x-x509-ca-cert"],
  ["dfac", "application/vnd.dreamfactory"],
  ["dgc", "application/x-dgc-compressed"],
  ["dic", "text/x-c"],
  ["dir", "application/x-director"],
  ["dis", "application/vnd.mobius.dis"],
  ["disposition-notification", "message/disposition-notification"],
  ["dist", "application/octet-stream"],
  ["distz", "application/octet-stream"],
  ["djv", "image/vnd.djvu"],
  ["djvu", "image/vnd.djvu"],
  ["dll", "application/octet-stream"],
  ["dmg", "application/x-apple-diskimage"],
  ["dmn", "application/octet-stream"],
  ["dmp", "application/vnd.tcpdump.pcap"],
  ["dms", "application/octet-stream"],
  ["dna", "application/vnd.dna"],
  ["doc", "application/msword"],
  ["docm", "application/vnd.ms-word.template.macroEnabled.12"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["dot", "application/msword"],
  ["dotm", "application/vnd.ms-word.template.macroEnabled.12"],
  ["dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template"],
  ["dp", "application/vnd.osgi.dp"],
  ["dpg", "application/vnd.dpgraph"],
  ["dra", "audio/vnd.dra"],
  ["drle", "image/dicom-rle"],
  ["dsc", "text/prs.lines.tag"],
  ["dssc", "application/dssc+der"],
  ["dtb", "application/x-dtbook+xml"],
  ["dtd", "application/xml-dtd"],
  ["dts", "audio/vnd.dts"],
  ["dtshd", "audio/vnd.dts.hd"],
  ["dump", "application/octet-stream"],
  ["dvb", "video/vnd.dvb.file"],
  ["dvi", "application/x-dvi"],
  ["dwd", "application/atsc-dwd+xml"],
  ["dwf", "model/vnd.dwf"],
  ["dwg", "image/vnd.dwg"],
  ["dxf", "image/vnd.dxf"],
  ["dxp", "application/vnd.spotfire.dxp"],
  ["dxr", "application/x-director"],
  ["ear", "application/java-archive"],
  ["ecelp4800", "audio/vnd.nuera.ecelp4800"],
  ["ecelp7470", "audio/vnd.nuera.ecelp7470"],
  ["ecelp9600", "audio/vnd.nuera.ecelp9600"],
  ["ecma", "application/ecmascript"],
  ["edm", "application/vnd.novadigm.edm"],
  ["edx", "application/vnd.novadigm.edx"],
  ["efif", "application/vnd.picsel"],
  ["ei6", "application/vnd.pg.osasli"],
  ["elc", "application/octet-stream"],
  ["emf", "image/emf"],
  ["eml", "message/rfc822"],
  ["emma", "application/emma+xml"],
  ["emotionml", "application/emotionml+xml"],
  ["emz", "application/x-msmetafile"],
  ["eol", "audio/vnd.digital-winds"],
  ["eot", "application/vnd.ms-fontobject"],
  ["eps", "application/postscript"],
  ["epub", "application/epub+zip"],
  ["es", "application/ecmascript"],
  ["es3", "application/vnd.eszigno3+xml"],
  ["esa", "application/vnd.osgi.subsystem"],
  ["esf", "application/vnd.epson.esf"],
  ["et3", "application/vnd.eszigno3+xml"],
  ["etx", "text/x-setext"],
  ["eva", "application/x-eva"],
  ["evy", "application/x-envoy"],
  ["exe", "application/octet-stream"],
  ["exi", "application/exi"],
  ["exp", "application/express"],
  ["exr", "image/aces"],
  ["ext", "application/vnd.novadigm.ext"],
  ["ez", "application/andrew-inset"],
  ["ez2", "application/vnd.ezpix-album"],
  ["ez3", "application/vnd.ezpix-package"],
  ["f", "text/x-fortran"],
  ["f4v", "video/mp4"],
  ["f77", "text/x-fortran"],
  ["f90", "text/x-fortran"],
  ["fbs", "image/vnd.fastbidsheet"],
  ["fcdt", "application/vnd.adobe.formscentral.fcdt"],
  ["fcs", "application/vnd.isac.fcs"],
  ["fdf", "application/vnd.fdf"],
  ["fdt", "application/fdt+xml"],
  ["fe_launch", "application/vnd.denovo.fcselayout-link"],
  ["fg5", "application/vnd.fujitsu.oasysgp"],
  ["fgd", "application/x-director"],
  ["fh", "image/x-freehand"],
  ["fh4", "image/x-freehand"],
  ["fh5", "image/x-freehand"],
  ["fh7", "image/x-freehand"],
  ["fhc", "image/x-freehand"],
  ["fig", "application/x-xfig"],
  ["fits", "image/fits"],
  ["flac", "audio/x-flac"],
  ["fli", "video/x-fli"],
  ["flo", "application/vnd.micrografx.flo"],
  ["flv", "video/x-flv"],
  ["flw", "application/vnd.kde.kivio"],
  ["flx", "text/vnd.fmi.flexstor"],
  ["fly", "text/vnd.fly"],
  ["fm", "application/vnd.framemaker"],
  ["fnc", "application/vnd.frogans.fnc"],
  ["fo", "application/vnd.software602.filler.form+xml"],
  ["for", "text/x-fortran"],
  ["fpx", "image/vnd.fpx"],
  ["frame", "application/vnd.framemaker"],
  ["fsc", "application/vnd.fsc.weblaunch"],
  ["fst", "image/vnd.fst"],
  ["ftc", "application/vnd.fluxtime.clip"],
  ["fti", "application/vnd.anser-web-funds-transfer-initiation"],
  ["fvt", "video/vnd.fvt"],
  ["fxp", "application/vnd.adobe.fxp"],
  ["fxpl", "application/vnd.adobe.fxp"],
  ["fzs", "application/vnd.fuzzysheet"],
  ["g2w", "application/vnd.geoplan"],
  ["g3", "image/g3fax"],
  ["g3w", "application/vnd.geospace"],
  ["gac", "application/vnd.groove-account"],
  ["gam", "application/x-tads"],
  ["gbr", "application/rpki-ghostbusters"],
  ["gca", "application/x-gca-compressed"],
  ["gdl", "model/vnd.gdl"],
  ["gdoc", "application/vnd.google-apps.document"],
  ["geo", "application/vnd.dynageo"],
  ["geojson", "application/geo+json"],
  ["gex", "application/vnd.geometry-explorer"],
  ["ggb", "application/vnd.geogebra.file"],
  ["ggt", "application/vnd.geogebra.tool"],
  ["ghf", "application/vnd.groove-help"],
  ["gif", "image/gif"],
  ["gim", "application/vnd.groove-identity-message"],
  ["glb", "model/gltf-binary"],
  ["gltf", "model/gltf+json"],
  ["gml", "application/gml+xml"],
  ["gmx", "application/vnd.gmx"],
  ["gnumeric", "application/x-gnumeric"],
  ["gpg", "application/gpg-keys"],
  ["gph", "application/vnd.flographit"],
  ["gpx", "application/gpx+xml"],
  ["gqf", "application/vnd.grafeq"],
  ["gqs", "application/vnd.grafeq"],
  ["gram", "application/srgs"],
  ["gramps", "application/x-gramps-xml"],
  ["gre", "application/vnd.geometry-explorer"],
  ["grv", "application/vnd.groove-injector"],
  ["grxml", "application/srgs+xml"],
  ["gsf", "application/x-font-ghostscript"],
  ["gsheet", "application/vnd.google-apps.spreadsheet"],
  ["gslides", "application/vnd.google-apps.presentation"],
  ["gtar", "application/x-gtar"],
  ["gtm", "application/vnd.groove-tool-message"],
  ["gtw", "model/vnd.gtw"],
  ["gv", "text/vnd.graphviz"],
  ["gxf", "application/gxf"],
  ["gxt", "application/vnd.geonext"],
  ["gz", "application/gzip"],
  ["gzip", "application/gzip"],
  ["h", "text/x-c"],
  ["h261", "video/h261"],
  ["h263", "video/h263"],
  ["h264", "video/h264"],
  ["hal", "application/vnd.hal+xml"],
  ["hbci", "application/vnd.hbci"],
  ["hbs", "text/x-handlebars-template"],
  ["hdd", "application/x-virtualbox-hdd"],
  ["hdf", "application/x-hdf"],
  ["heic", "image/heic"],
  ["heics", "image/heic-sequence"],
  ["heif", "image/heif"],
  ["heifs", "image/heif-sequence"],
  ["hej2", "image/hej2k"],
  ["held", "application/atsc-held+xml"],
  ["hh", "text/x-c"],
  ["hjson", "application/hjson"],
  ["hlp", "application/winhlp"],
  ["hpgl", "application/vnd.hp-hpgl"],
  ["hpid", "application/vnd.hp-hpid"],
  ["hps", "application/vnd.hp-hps"],
  ["hqx", "application/mac-binhex40"],
  ["hsj2", "image/hsj2"],
  ["htc", "text/x-component"],
  ["htke", "application/vnd.kenameaapp"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["hvd", "application/vnd.yamaha.hv-dic"],
  ["hvp", "application/vnd.yamaha.hv-voice"],
  ["hvs", "application/vnd.yamaha.hv-script"],
  ["i2g", "application/vnd.intergeo"],
  ["icc", "application/vnd.iccprofile"],
  ["ice", "x-conference/x-cooltalk"],
  ["icm", "application/vnd.iccprofile"],
  ["ico", "image/x-icon"],
  ["ics", "text/calendar"],
  ["ief", "image/ief"],
  ["ifb", "text/calendar"],
  ["ifm", "application/vnd.shana.informed.formdata"],
  ["iges", "model/iges"],
  ["igl", "application/vnd.igloader"],
  ["igm", "application/vnd.insors.igm"],
  ["igs", "model/iges"],
  ["igx", "application/vnd.micrografx.igx"],
  ["iif", "application/vnd.shana.informed.interchange"],
  ["img", "application/octet-stream"],
  ["imp", "application/vnd.accpac.simply.imp"],
  ["ims", "application/vnd.ms-ims"],
  ["in", "text/plain"],
  ["ini", "text/plain"],
  ["ink", "application/inkml+xml"],
  ["inkml", "application/inkml+xml"],
  ["install", "application/x-install-instructions"],
  ["iota", "application/vnd.astraea-software.iota"],
  ["ipfix", "application/ipfix"],
  ["ipk", "application/vnd.shana.informed.package"],
  ["irm", "application/vnd.ibm.rights-management"],
  ["irp", "application/vnd.irepository.package+xml"],
  ["iso", "application/x-iso9660-image"],
  ["itp", "application/vnd.shana.informed.formtemplate"],
  ["its", "application/its+xml"],
  ["ivp", "application/vnd.immervision-ivp"],
  ["ivu", "application/vnd.immervision-ivu"],
  ["jad", "text/vnd.sun.j2me.app-descriptor"],
  ["jade", "text/jade"],
  ["jam", "application/vnd.jam"],
  ["jar", "application/java-archive"],
  ["jardiff", "application/x-java-archive-diff"],
  ["java", "text/x-java-source"],
  ["jhc", "image/jphc"],
  ["jisp", "application/vnd.jisp"],
  ["jls", "image/jls"],
  ["jlt", "application/vnd.hp-jlyt"],
  ["jng", "image/x-jng"],
  ["jnlp", "application/x-java-jnlp-file"],
  ["joda", "application/vnd.joost.joda-archive"],
  ["jp2", "image/jp2"],
  ["jpe", "image/jpeg"],
  ["jpeg", "image/jpeg"],
  ["jpf", "image/jpx"],
  ["jpg", "image/jpeg"],
  ["jpg2", "image/jp2"],
  ["jpgm", "video/jpm"],
  ["jpgv", "video/jpeg"],
  ["jph", "image/jph"],
  ["jpm", "video/jpm"],
  ["jpx", "image/jpx"],
  ["js", "application/javascript"],
  ["json", "application/json"],
  ["json5", "application/json5"],
  ["jsonld", "application/ld+json"],
  ["jsonml", "application/jsonml+json"],
  ["jsx", "text/jsx"],
  ["jxr", "image/jxr"],
  ["jxra", "image/jxra"],
  ["jxrs", "image/jxrs"],
  ["jxs", "image/jxs"],
  ["jxsc", "image/jxsc"],
  ["jxsi", "image/jxsi"],
  ["jxss", "image/jxss"],
  ["kar", "audio/midi"],
  ["karbon", "application/vnd.kde.karbon"],
  ["kdb", "application/octet-stream"],
  ["kdbx", "application/x-keepass2"],
  ["key", "application/x-iwork-keynote-sffkey"],
  ["kfo", "application/vnd.kde.kformula"],
  ["kia", "application/vnd.kidspiration"],
  ["kml", "application/vnd.google-earth.kml+xml"],
  ["kmz", "application/vnd.google-earth.kmz"],
  ["kne", "application/vnd.kinar"],
  ["knp", "application/vnd.kinar"],
  ["kon", "application/vnd.kde.kontour"],
  ["kpr", "application/vnd.kde.kpresenter"],
  ["kpt", "application/vnd.kde.kpresenter"],
  ["kpxx", "application/vnd.ds-keypoint"],
  ["ksp", "application/vnd.kde.kspread"],
  ["ktr", "application/vnd.kahootz"],
  ["ktx", "image/ktx"],
  ["ktx2", "image/ktx2"],
  ["ktz", "application/vnd.kahootz"],
  ["kwd", "application/vnd.kde.kword"],
  ["kwt", "application/vnd.kde.kword"],
  ["lasxml", "application/vnd.las.las+xml"],
  ["latex", "application/x-latex"],
  ["lbd", "application/vnd.llamagraphics.life-balance.desktop"],
  ["lbe", "application/vnd.llamagraphics.life-balance.exchange+xml"],
  ["les", "application/vnd.hhe.lesson-player"],
  ["less", "text/less"],
  ["lgr", "application/lgr+xml"],
  ["lha", "application/octet-stream"],
  ["link66", "application/vnd.route66.link66+xml"],
  ["list", "text/plain"],
  ["list3820", "application/vnd.ibm.modcap"],
  ["listafp", "application/vnd.ibm.modcap"],
  ["litcoffee", "text/coffeescript"],
  ["lnk", "application/x-ms-shortcut"],
  ["log", "text/plain"],
  ["lostxml", "application/lost+xml"],
  ["lrf", "application/octet-stream"],
  ["lrm", "application/vnd.ms-lrm"],
  ["ltf", "application/vnd.frogans.ltf"],
  ["lua", "text/x-lua"],
  ["luac", "application/x-lua-bytecode"],
  ["lvp", "audio/vnd.lucent.voice"],
  ["lwp", "application/vnd.lotus-wordpro"],
  ["lzh", "application/octet-stream"],
  ["m1v", "video/mpeg"],
  ["m2a", "audio/mpeg"],
  ["m2v", "video/mpeg"],
  ["m3a", "audio/mpeg"],
  ["m3u", "text/plain"],
  ["m3u8", "application/vnd.apple.mpegurl"],
  ["m4a", "audio/x-m4a"],
  ["m4p", "application/mp4"],
  ["m4s", "video/iso.segment"],
  ["m4u", "application/vnd.mpegurl"],
  ["m4v", "video/x-m4v"],
  ["m13", "application/x-msmediaview"],
  ["m14", "application/x-msmediaview"],
  ["m21", "application/mp21"],
  ["ma", "application/mathematica"],
  ["mads", "application/mads+xml"],
  ["maei", "application/mmt-aei+xml"],
  ["mag", "application/vnd.ecowin.chart"],
  ["maker", "application/vnd.framemaker"],
  ["man", "text/troff"],
  ["manifest", "text/cache-manifest"],
  ["map", "application/json"],
  ["mar", "application/octet-stream"],
  ["markdown", "text/markdown"],
  ["mathml", "application/mathml+xml"],
  ["mb", "application/mathematica"],
  ["mbk", "application/vnd.mobius.mbk"],
  ["mbox", "application/mbox"],
  ["mc1", "application/vnd.medcalcdata"],
  ["mcd", "application/vnd.mcd"],
  ["mcurl", "text/vnd.curl.mcurl"],
  ["md", "text/markdown"],
  ["mdb", "application/x-msaccess"],
  ["mdi", "image/vnd.ms-modi"],
  ["mdx", "text/mdx"],
  ["me", "text/troff"],
  ["mesh", "model/mesh"],
  ["meta4", "application/metalink4+xml"],
  ["metalink", "application/metalink+xml"],
  ["mets", "application/mets+xml"],
  ["mfm", "application/vnd.mfmp"],
  ["mft", "application/rpki-manifest"],
  ["mgp", "application/vnd.osgeo.mapguide.package"],
  ["mgz", "application/vnd.proteus.magazine"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mie", "application/x-mie"],
  ["mif", "application/vnd.mif"],
  ["mime", "message/rfc822"],
  ["mj2", "video/mj2"],
  ["mjp2", "video/mj2"],
  ["mjs", "application/javascript"],
  ["mk3d", "video/x-matroska"],
  ["mka", "audio/x-matroska"],
  ["mkd", "text/x-markdown"],
  ["mks", "video/x-matroska"],
  ["mkv", "video/x-matroska"],
  ["mlp", "application/vnd.dolby.mlp"],
  ["mmd", "application/vnd.chipnuts.karaoke-mmd"],
  ["mmf", "application/vnd.smaf"],
  ["mml", "text/mathml"],
  ["mmr", "image/vnd.fujixerox.edmics-mmr"],
  ["mng", "video/x-mng"],
  ["mny", "application/x-msmoney"],
  ["mobi", "application/x-mobipocket-ebook"],
  ["mods", "application/mods+xml"],
  ["mov", "video/quicktime"],
  ["movie", "video/x-sgi-movie"],
  ["mp2", "audio/mpeg"],
  ["mp2a", "audio/mpeg"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mp4a", "audio/mp4"],
  ["mp4s", "application/mp4"],
  ["mp4v", "video/mp4"],
  ["mp21", "application/mp21"],
  ["mpc", "application/vnd.mophun.certificate"],
  ["mpd", "application/dash+xml"],
  ["mpe", "video/mpeg"],
  ["mpeg", "video/mpeg"],
  ["mpg", "video/mpeg"],
  ["mpg4", "video/mp4"],
  ["mpga", "audio/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["mpm", "application/vnd.blueice.multipass"],
  ["mpn", "application/vnd.mophun.application"],
  ["mpp", "application/vnd.ms-project"],
  ["mpt", "application/vnd.ms-project"],
  ["mpy", "application/vnd.ibm.minipay"],
  ["mqy", "application/vnd.mobius.mqy"],
  ["mrc", "application/marc"],
  ["mrcx", "application/marcxml+xml"],
  ["ms", "text/troff"],
  ["mscml", "application/mediaservercontrol+xml"],
  ["mseed", "application/vnd.fdsn.mseed"],
  ["mseq", "application/vnd.mseq"],
  ["msf", "application/vnd.epson.msf"],
  ["msg", "application/vnd.ms-outlook"],
  ["msh", "model/mesh"],
  ["msi", "application/x-msdownload"],
  ["msl", "application/vnd.mobius.msl"],
  ["msm", "application/octet-stream"],
  ["msp", "application/octet-stream"],
  ["msty", "application/vnd.muvee.style"],
  ["mtl", "model/mtl"],
  ["mts", "model/vnd.mts"],
  ["mus", "application/vnd.musician"],
  ["musd", "application/mmt-usd+xml"],
  ["musicxml", "application/vnd.recordare.musicxml+xml"],
  ["mvb", "application/x-msmediaview"],
  ["mvt", "application/vnd.mapbox-vector-tile"],
  ["mwf", "application/vnd.mfer"],
  ["mxf", "application/mxf"],
  ["mxl", "application/vnd.recordare.musicxml"],
  ["mxmf", "audio/mobile-xmf"],
  ["mxml", "application/xv+xml"],
  ["mxs", "application/vnd.triscape.mxs"],
  ["mxu", "video/vnd.mpegurl"],
  ["n-gage", "application/vnd.nokia.n-gage.symbian.install"],
  ["n3", "text/n3"],
  ["nb", "application/mathematica"],
  ["nbp", "application/vnd.wolfram.player"],
  ["nc", "application/x-netcdf"],
  ["ncx", "application/x-dtbncx+xml"],
  ["nfo", "text/x-nfo"],
  ["ngdat", "application/vnd.nokia.n-gage.data"],
  ["nitf", "application/vnd.nitf"],
  ["nlu", "application/vnd.neurolanguage.nlu"],
  ["nml", "application/vnd.enliven"],
  ["nnd", "application/vnd.noblenet-directory"],
  ["nns", "application/vnd.noblenet-sealer"],
  ["nnw", "application/vnd.noblenet-web"],
  ["npx", "image/vnd.net-fpx"],
  ["nq", "application/n-quads"],
  ["nsc", "application/x-conference"],
  ["nsf", "application/vnd.lotus-notes"],
  ["nt", "application/n-triples"],
  ["ntf", "application/vnd.nitf"],
  ["numbers", "application/x-iwork-numbers-sffnumbers"],
  ["nzb", "application/x-nzb"],
  ["oa2", "application/vnd.fujitsu.oasys2"],
  ["oa3", "application/vnd.fujitsu.oasys3"],
  ["oas", "application/vnd.fujitsu.oasys"],
  ["obd", "application/x-msbinder"],
  ["obgx", "application/vnd.openblox.game+xml"],
  ["obj", "model/obj"],
  ["oda", "application/oda"],
  ["odb", "application/vnd.oasis.opendocument.database"],
  ["odc", "application/vnd.oasis.opendocument.chart"],
  ["odf", "application/vnd.oasis.opendocument.formula"],
  ["odft", "application/vnd.oasis.opendocument.formula-template"],
  ["odg", "application/vnd.oasis.opendocument.graphics"],
  ["odi", "application/vnd.oasis.opendocument.image"],
  ["odm", "application/vnd.oasis.opendocument.text-master"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogex", "model/vnd.opengex"],
  ["ogg", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["omdoc", "application/omdoc+xml"],
  ["onepkg", "application/onenote"],
  ["onetmp", "application/onenote"],
  ["onetoc", "application/onenote"],
  ["onetoc2", "application/onenote"],
  ["opf", "application/oebps-package+xml"],
  ["opml", "text/x-opml"],
  ["oprc", "application/vnd.palm"],
  ["opus", "audio/ogg"],
  ["org", "text/x-org"],
  ["osf", "application/vnd.yamaha.openscoreformat"],
  ["osfpvg", "application/vnd.yamaha.openscoreformat.osfpvg+xml"],
  ["osm", "application/vnd.openstreetmap.data+xml"],
  ["otc", "application/vnd.oasis.opendocument.chart-template"],
  ["otf", "font/otf"],
  ["otg", "application/vnd.oasis.opendocument.graphics-template"],
  ["oth", "application/vnd.oasis.opendocument.text-web"],
  ["oti", "application/vnd.oasis.opendocument.image-template"],
  ["otp", "application/vnd.oasis.opendocument.presentation-template"],
  ["ots", "application/vnd.oasis.opendocument.spreadsheet-template"],
  ["ott", "application/vnd.oasis.opendocument.text-template"],
  ["ova", "application/x-virtualbox-ova"],
  ["ovf", "application/x-virtualbox-ovf"],
  ["owl", "application/rdf+xml"],
  ["oxps", "application/oxps"],
  ["oxt", "application/vnd.openofficeorg.extension"],
  ["p", "text/x-pascal"],
  ["p7a", "application/x-pkcs7-signature"],
  ["p7b", "application/x-pkcs7-certificates"],
  ["p7c", "application/pkcs7-mime"],
  ["p7m", "application/pkcs7-mime"],
  ["p7r", "application/x-pkcs7-certreqresp"],
  ["p7s", "application/pkcs7-signature"],
  ["p8", "application/pkcs8"],
  ["p10", "application/x-pkcs10"],
  ["p12", "application/x-pkcs12"],
  ["pac", "application/x-ns-proxy-autoconfig"],
  ["pages", "application/x-iwork-pages-sffpages"],
  ["pas", "text/x-pascal"],
  ["paw", "application/vnd.pawaafile"],
  ["pbd", "application/vnd.powerbuilder6"],
  ["pbm", "image/x-portable-bitmap"],
  ["pcap", "application/vnd.tcpdump.pcap"],
  ["pcf", "application/x-font-pcf"],
  ["pcl", "application/vnd.hp-pcl"],
  ["pclxl", "application/vnd.hp-pclxl"],
  ["pct", "image/x-pict"],
  ["pcurl", "application/vnd.curl.pcurl"],
  ["pcx", "image/x-pcx"],
  ["pdb", "application/x-pilot"],
  ["pde", "text/x-processing"],
  ["pdf", "application/pdf"],
  ["pem", "application/x-x509-user-cert"],
  ["pfa", "application/x-font-type1"],
  ["pfb", "application/x-font-type1"],
  ["pfm", "application/x-font-type1"],
  ["pfr", "application/font-tdpfr"],
  ["pfx", "application/x-pkcs12"],
  ["pgm", "image/x-portable-graymap"],
  ["pgn", "application/x-chess-pgn"],
  ["pgp", "application/pgp"],
  ["php", "application/x-httpd-php"],
  ["php3", "application/x-httpd-php"],
  ["php4", "application/x-httpd-php"],
  ["phps", "application/x-httpd-php-source"],
  ["phtml", "application/x-httpd-php"],
  ["pic", "image/x-pict"],
  ["pkg", "application/octet-stream"],
  ["pki", "application/pkixcmp"],
  ["pkipath", "application/pkix-pkipath"],
  ["pkpass", "application/vnd.apple.pkpass"],
  ["pl", "application/x-perl"],
  ["plb", "application/vnd.3gpp.pic-bw-large"],
  ["plc", "application/vnd.mobius.plc"],
  ["plf", "application/vnd.pocketlearn"],
  ["pls", "application/pls+xml"],
  ["pm", "application/x-perl"],
  ["pml", "application/vnd.ctc-posml"],
  ["png", "image/png"],
  ["pnm", "image/x-portable-anymap"],
  ["portpkg", "application/vnd.macports.portpkg"],
  ["pot", "application/vnd.ms-powerpoint"],
  ["potm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
  ["potx", "application/vnd.openxmlformats-officedocument.presentationml.template"],
  ["ppa", "application/vnd.ms-powerpoint"],
  ["ppam", "application/vnd.ms-powerpoint.addin.macroEnabled.12"],
  ["ppd", "application/vnd.cups-ppd"],
  ["ppm", "image/x-portable-pixmap"],
  ["pps", "application/vnd.ms-powerpoint"],
  ["ppsm", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],
  ["ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow"],
  ["ppt", "application/powerpoint"],
  ["pptm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
  ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ["pqa", "application/vnd.palm"],
  ["prc", "application/x-pilot"],
  ["pre", "application/vnd.lotus-freelance"],
  ["prf", "application/pics-rules"],
  ["provx", "application/provenance+xml"],
  ["ps", "application/postscript"],
  ["psb", "application/vnd.3gpp.pic-bw-small"],
  ["psd", "application/x-photoshop"],
  ["psf", "application/x-font-linux-psf"],
  ["pskcxml", "application/pskc+xml"],
  ["pti", "image/prs.pti"],
  ["ptid", "application/vnd.pvi.ptid1"],
  ["pub", "application/x-mspublisher"],
  ["pvb", "application/vnd.3gpp.pic-bw-var"],
  ["pwn", "application/vnd.3m.post-it-notes"],
  ["pya", "audio/vnd.ms-playready.media.pya"],
  ["pyv", "video/vnd.ms-playready.media.pyv"],
  ["qam", "application/vnd.epson.quickanime"],
  ["qbo", "application/vnd.intu.qbo"],
  ["qfx", "application/vnd.intu.qfx"],
  ["qps", "application/vnd.publishare-delta-tree"],
  ["qt", "video/quicktime"],
  ["qwd", "application/vnd.quark.quarkxpress"],
  ["qwt", "application/vnd.quark.quarkxpress"],
  ["qxb", "application/vnd.quark.quarkxpress"],
  ["qxd", "application/vnd.quark.quarkxpress"],
  ["qxl", "application/vnd.quark.quarkxpress"],
  ["qxt", "application/vnd.quark.quarkxpress"],
  ["ra", "audio/x-realaudio"],
  ["ram", "audio/x-pn-realaudio"],
  ["raml", "application/raml+yaml"],
  ["rapd", "application/route-apd+xml"],
  ["rar", "application/x-rar"],
  ["ras", "image/x-cmu-raster"],
  ["rcprofile", "application/vnd.ipunplugged.rcprofile"],
  ["rdf", "application/rdf+xml"],
  ["rdz", "application/vnd.data-vision.rdz"],
  ["relo", "application/p2p-overlay+xml"],
  ["rep", "application/vnd.businessobjects"],
  ["res", "application/x-dtbresource+xml"],
  ["rgb", "image/x-rgb"],
  ["rif", "application/reginfo+xml"],
  ["rip", "audio/vnd.rip"],
  ["ris", "application/x-research-info-systems"],
  ["rl", "application/resource-lists+xml"],
  ["rlc", "image/vnd.fujixerox.edmics-rlc"],
  ["rld", "application/resource-lists-diff+xml"],
  ["rm", "audio/x-pn-realaudio"],
  ["rmi", "audio/midi"],
  ["rmp", "audio/x-pn-realaudio-plugin"],
  ["rms", "application/vnd.jcp.javame.midlet-rms"],
  ["rmvb", "application/vnd.rn-realmedia-vbr"],
  ["rnc", "application/relax-ng-compact-syntax"],
  ["rng", "application/xml"],
  ["roa", "application/rpki-roa"],
  ["roff", "text/troff"],
  ["rp9", "application/vnd.cloanto.rp9"],
  ["rpm", "audio/x-pn-realaudio-plugin"],
  ["rpss", "application/vnd.nokia.radio-presets"],
  ["rpst", "application/vnd.nokia.radio-preset"],
  ["rq", "application/sparql-query"],
  ["rs", "application/rls-services+xml"],
  ["rsa", "application/x-pkcs7"],
  ["rsat", "application/atsc-rsat+xml"],
  ["rsd", "application/rsd+xml"],
  ["rsheet", "application/urc-ressheet+xml"],
  ["rss", "application/rss+xml"],
  ["rtf", "text/rtf"],
  ["rtx", "text/richtext"],
  ["run", "application/x-makeself"],
  ["rusd", "application/route-usd+xml"],
  ["rv", "video/vnd.rn-realvideo"],
  ["s", "text/x-asm"],
  ["s3m", "audio/s3m"],
  ["saf", "application/vnd.yamaha.smaf-audio"],
  ["sass", "text/x-sass"],
  ["sbml", "application/sbml+xml"],
  ["sc", "application/vnd.ibm.secure-container"],
  ["scd", "application/x-msschedule"],
  ["scm", "application/vnd.lotus-screencam"],
  ["scq", "application/scvp-cv-request"],
  ["scs", "application/scvp-cv-response"],
  ["scss", "text/x-scss"],
  ["scurl", "text/vnd.curl.scurl"],
  ["sda", "application/vnd.stardivision.draw"],
  ["sdc", "application/vnd.stardivision.calc"],
  ["sdd", "application/vnd.stardivision.impress"],
  ["sdkd", "application/vnd.solent.sdkm+xml"],
  ["sdkm", "application/vnd.solent.sdkm+xml"],
  ["sdp", "application/sdp"],
  ["sdw", "application/vnd.stardivision.writer"],
  ["sea", "application/octet-stream"],
  ["see", "application/vnd.seemail"],
  ["seed", "application/vnd.fdsn.seed"],
  ["sema", "application/vnd.sema"],
  ["semd", "application/vnd.semd"],
  ["semf", "application/vnd.semf"],
  ["senmlx", "application/senml+xml"],
  ["sensmlx", "application/sensml+xml"],
  ["ser", "application/java-serialized-object"],
  ["setpay", "application/set-payment-initiation"],
  ["setreg", "application/set-registration-initiation"],
  ["sfd-hdstx", "application/vnd.hydrostatix.sof-data"],
  ["sfs", "application/vnd.spotfire.sfs"],
  ["sfv", "text/x-sfv"],
  ["sgi", "image/sgi"],
  ["sgl", "application/vnd.stardivision.writer-global"],
  ["sgm", "text/sgml"],
  ["sgml", "text/sgml"],
  ["sh", "application/x-sh"],
  ["shar", "application/x-shar"],
  ["shex", "text/shex"],
  ["shf", "application/shf+xml"],
  ["shtml", "text/html"],
  ["sid", "image/x-mrsid-image"],
  ["sieve", "application/sieve"],
  ["sig", "application/pgp-signature"],
  ["sil", "audio/silk"],
  ["silo", "model/mesh"],
  ["sis", "application/vnd.symbian.install"],
  ["sisx", "application/vnd.symbian.install"],
  ["sit", "application/x-stuffit"],
  ["sitx", "application/x-stuffitx"],
  ["siv", "application/sieve"],
  ["skd", "application/vnd.koan"],
  ["skm", "application/vnd.koan"],
  ["skp", "application/vnd.koan"],
  ["skt", "application/vnd.koan"],
  ["sldm", "application/vnd.ms-powerpoint.slide.macroenabled.12"],
  ["sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide"],
  ["slim", "text/slim"],
  ["slm", "text/slim"],
  ["sls", "application/route-s-tsid+xml"],
  ["slt", "application/vnd.epson.salt"],
  ["sm", "application/vnd.stepmania.stepchart"],
  ["smf", "application/vnd.stardivision.math"],
  ["smi", "application/smil"],
  ["smil", "application/smil"],
  ["smv", "video/x-smv"],
  ["smzip", "application/vnd.stepmania.package"],
  ["snd", "audio/basic"],
  ["snf", "application/x-font-snf"],
  ["so", "application/octet-stream"],
  ["spc", "application/x-pkcs7-certificates"],
  ["spdx", "text/spdx"],
  ["spf", "application/vnd.yamaha.smaf-phrase"],
  ["spl", "application/x-futuresplash"],
  ["spot", "text/vnd.in3d.spot"],
  ["spp", "application/scvp-vp-response"],
  ["spq", "application/scvp-vp-request"],
  ["spx", "audio/ogg"],
  ["sql", "application/x-sql"],
  ["src", "application/x-wais-source"],
  ["srt", "application/x-subrip"],
  ["sru", "application/sru+xml"],
  ["srx", "application/sparql-results+xml"],
  ["ssdl", "application/ssdl+xml"],
  ["sse", "application/vnd.kodak-descriptor"],
  ["ssf", "application/vnd.epson.ssf"],
  ["ssml", "application/ssml+xml"],
  ["sst", "application/octet-stream"],
  ["st", "application/vnd.sailingtracker.track"],
  ["stc", "application/vnd.sun.xml.calc.template"],
  ["std", "application/vnd.sun.xml.draw.template"],
  ["stf", "application/vnd.wt.stf"],
  ["sti", "application/vnd.sun.xml.impress.template"],
  ["stk", "application/hyperstudio"],
  ["stl", "model/stl"],
  ["stpx", "model/step+xml"],
  ["stpxz", "model/step-xml+zip"],
  ["stpz", "model/step+zip"],
  ["str", "application/vnd.pg.format"],
  ["stw", "application/vnd.sun.xml.writer.template"],
  ["styl", "text/stylus"],
  ["stylus", "text/stylus"],
  ["sub", "text/vnd.dvb.subtitle"],
  ["sus", "application/vnd.sus-calendar"],
  ["susp", "application/vnd.sus-calendar"],
  ["sv4cpio", "application/x-sv4cpio"],
  ["sv4crc", "application/x-sv4crc"],
  ["svc", "application/vnd.dvb.service"],
  ["svd", "application/vnd.svd"],
  ["svg", "image/svg+xml"],
  ["svgz", "image/svg+xml"],
  ["swa", "application/x-director"],
  ["swf", "application/x-shockwave-flash"],
  ["swi", "application/vnd.aristanetworks.swi"],
  ["swidtag", "application/swid+xml"],
  ["sxc", "application/vnd.sun.xml.calc"],
  ["sxd", "application/vnd.sun.xml.draw"],
  ["sxg", "application/vnd.sun.xml.writer.global"],
  ["sxi", "application/vnd.sun.xml.impress"],
  ["sxm", "application/vnd.sun.xml.math"],
  ["sxw", "application/vnd.sun.xml.writer"],
  ["t", "text/troff"],
  ["t3", "application/x-t3vm-image"],
  ["t38", "image/t38"],
  ["taglet", "application/vnd.mynfc"],
  ["tao", "application/vnd.tao.intent-module-archive"],
  ["tap", "image/vnd.tencent.tap"],
  ["tar", "application/x-tar"],
  ["tcap", "application/vnd.3gpp2.tcap"],
  ["tcl", "application/x-tcl"],
  ["td", "application/urc-targetdesc+xml"],
  ["teacher", "application/vnd.smart.teacher"],
  ["tei", "application/tei+xml"],
  ["teicorpus", "application/tei+xml"],
  ["tex", "application/x-tex"],
  ["texi", "application/x-texinfo"],
  ["texinfo", "application/x-texinfo"],
  ["text", "text/plain"],
  ["tfi", "application/thraud+xml"],
  ["tfm", "application/x-tex-tfm"],
  ["tfx", "image/tiff-fx"],
  ["tga", "image/x-tga"],
  ["tgz", "application/x-tar"],
  ["thmx", "application/vnd.ms-officetheme"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["tk", "application/x-tcl"],
  ["tmo", "application/vnd.tmobile-livetv"],
  ["toml", "application/toml"],
  ["torrent", "application/x-bittorrent"],
  ["tpl", "application/vnd.groove-tool-template"],
  ["tpt", "application/vnd.trid.tpt"],
  ["tr", "text/troff"],
  ["tra", "application/vnd.trueapp"],
  ["trig", "application/trig"],
  ["trm", "application/x-msterminal"],
  ["ts", "video/mp2t"],
  ["tsd", "application/timestamped-data"],
  ["tsv", "text/tab-separated-values"],
  ["ttc", "font/collection"],
  ["ttf", "font/ttf"],
  ["ttl", "text/turtle"],
  ["ttml", "application/ttml+xml"],
  ["twd", "application/vnd.simtech-mindmapper"],
  ["twds", "application/vnd.simtech-mindmapper"],
  ["txd", "application/vnd.genomatix.tuxedo"],
  ["txf", "application/vnd.mobius.txf"],
  ["txt", "text/plain"],
  ["u8dsn", "message/global-delivery-status"],
  ["u8hdr", "message/global-headers"],
  ["u8mdn", "message/global-disposition-notification"],
  ["u8msg", "message/global"],
  ["u32", "application/x-authorware-bin"],
  ["ubj", "application/ubjson"],
  ["udeb", "application/x-debian-package"],
  ["ufd", "application/vnd.ufdl"],
  ["ufdl", "application/vnd.ufdl"],
  ["ulx", "application/x-glulx"],
  ["umj", "application/vnd.umajin"],
  ["unityweb", "application/vnd.unity"],
  ["uoml", "application/vnd.uoml+xml"],
  ["uri", "text/uri-list"],
  ["uris", "text/uri-list"],
  ["urls", "text/uri-list"],
  ["usdz", "model/vnd.usdz+zip"],
  ["ustar", "application/x-ustar"],
  ["utz", "application/vnd.uiq.theme"],
  ["uu", "text/x-uuencode"],
  ["uva", "audio/vnd.dece.audio"],
  ["uvd", "application/vnd.dece.data"],
  ["uvf", "application/vnd.dece.data"],
  ["uvg", "image/vnd.dece.graphic"],
  ["uvh", "video/vnd.dece.hd"],
  ["uvi", "image/vnd.dece.graphic"],
  ["uvm", "video/vnd.dece.mobile"],
  ["uvp", "video/vnd.dece.pd"],
  ["uvs", "video/vnd.dece.sd"],
  ["uvt", "application/vnd.dece.ttml+xml"],
  ["uvu", "video/vnd.uvvu.mp4"],
  ["uvv", "video/vnd.dece.video"],
  ["uvva", "audio/vnd.dece.audio"],
  ["uvvd", "application/vnd.dece.data"],
  ["uvvf", "application/vnd.dece.data"],
  ["uvvg", "image/vnd.dece.graphic"],
  ["uvvh", "video/vnd.dece.hd"],
  ["uvvi", "image/vnd.dece.graphic"],
  ["uvvm", "video/vnd.dece.mobile"],
  ["uvvp", "video/vnd.dece.pd"],
  ["uvvs", "video/vnd.dece.sd"],
  ["uvvt", "application/vnd.dece.ttml+xml"],
  ["uvvu", "video/vnd.uvvu.mp4"],
  ["uvvv", "video/vnd.dece.video"],
  ["uvvx", "application/vnd.dece.unspecified"],
  ["uvvz", "application/vnd.dece.zip"],
  ["uvx", "application/vnd.dece.unspecified"],
  ["uvz", "application/vnd.dece.zip"],
  ["vbox", "application/x-virtualbox-vbox"],
  ["vbox-extpack", "application/x-virtualbox-vbox-extpack"],
  ["vcard", "text/vcard"],
  ["vcd", "application/x-cdlink"],
  ["vcf", "text/x-vcard"],
  ["vcg", "application/vnd.groove-vcard"],
  ["vcs", "text/x-vcalendar"],
  ["vcx", "application/vnd.vcx"],
  ["vdi", "application/x-virtualbox-vdi"],
  ["vds", "model/vnd.sap.vds"],
  ["vhd", "application/x-virtualbox-vhd"],
  ["vis", "application/vnd.visionary"],
  ["viv", "video/vnd.vivo"],
  ["vlc", "application/videolan"],
  ["vmdk", "application/x-virtualbox-vmdk"],
  ["vob", "video/x-ms-vob"],
  ["vor", "application/vnd.stardivision.writer"],
  ["vox", "application/x-authorware-bin"],
  ["vrml", "model/vrml"],
  ["vsd", "application/vnd.visio"],
  ["vsf", "application/vnd.vsf"],
  ["vss", "application/vnd.visio"],
  ["vst", "application/vnd.visio"],
  ["vsw", "application/vnd.visio"],
  ["vtf", "image/vnd.valve.source.texture"],
  ["vtt", "text/vtt"],
  ["vtu", "model/vnd.vtu"],
  ["vxml", "application/voicexml+xml"],
  ["w3d", "application/x-director"],
  ["wad", "application/x-doom"],
  ["wadl", "application/vnd.sun.wadl+xml"],
  ["war", "application/java-archive"],
  ["wasm", "application/wasm"],
  ["wav", "audio/x-wav"],
  ["wax", "audio/x-ms-wax"],
  ["wbmp", "image/vnd.wap.wbmp"],
  ["wbs", "application/vnd.criticaltools.wbs+xml"],
  ["wbxml", "application/wbxml"],
  ["wcm", "application/vnd.ms-works"],
  ["wdb", "application/vnd.ms-works"],
  ["wdp", "image/vnd.ms-photo"],
  ["weba", "audio/webm"],
  ["webapp", "application/x-web-app-manifest+json"],
  ["webm", "video/webm"],
  ["webmanifest", "application/manifest+json"],
  ["webp", "image/webp"],
  ["wg", "application/vnd.pmi.widget"],
  ["wgt", "application/widget"],
  ["wks", "application/vnd.ms-works"],
  ["wm", "video/x-ms-wm"],
  ["wma", "audio/x-ms-wma"],
  ["wmd", "application/x-ms-wmd"],
  ["wmf", "image/wmf"],
  ["wml", "text/vnd.wap.wml"],
  ["wmlc", "application/wmlc"],
  ["wmls", "text/vnd.wap.wmlscript"],
  ["wmlsc", "application/vnd.wap.wmlscriptc"],
  ["wmv", "video/x-ms-wmv"],
  ["wmx", "video/x-ms-wmx"],
  ["wmz", "application/x-msmetafile"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["word", "application/msword"],
  ["wpd", "application/vnd.wordperfect"],
  ["wpl", "application/vnd.ms-wpl"],
  ["wps", "application/vnd.ms-works"],
  ["wqd", "application/vnd.wqd"],
  ["wri", "application/x-mswrite"],
  ["wrl", "model/vrml"],
  ["wsc", "message/vnd.wfa.wsc"],
  ["wsdl", "application/wsdl+xml"],
  ["wspolicy", "application/wspolicy+xml"],
  ["wtb", "application/vnd.webturbo"],
  ["wvx", "video/x-ms-wvx"],
  ["x3d", "model/x3d+xml"],
  ["x3db", "model/x3d+fastinfoset"],
  ["x3dbz", "model/x3d+binary"],
  ["x3dv", "model/x3d-vrml"],
  ["x3dvz", "model/x3d+vrml"],
  ["x3dz", "model/x3d+xml"],
  ["x32", "application/x-authorware-bin"],
  ["x_b", "model/vnd.parasolid.transmit.binary"],
  ["x_t", "model/vnd.parasolid.transmit.text"],
  ["xaml", "application/xaml+xml"],
  ["xap", "application/x-silverlight-app"],
  ["xar", "application/vnd.xara"],
  ["xav", "application/xcap-att+xml"],
  ["xbap", "application/x-ms-xbap"],
  ["xbd", "application/vnd.fujixerox.docuworks.binder"],
  ["xbm", "image/x-xbitmap"],
  ["xca", "application/xcap-caps+xml"],
  ["xcs", "application/calendar+xml"],
  ["xdf", "application/xcap-diff+xml"],
  ["xdm", "application/vnd.syncml.dm+xml"],
  ["xdp", "application/vnd.adobe.xdp+xml"],
  ["xdssc", "application/dssc+xml"],
  ["xdw", "application/vnd.fujixerox.docuworks"],
  ["xel", "application/xcap-el+xml"],
  ["xenc", "application/xenc+xml"],
  ["xer", "application/patch-ops-error+xml"],
  ["xfdf", "application/vnd.adobe.xfdf"],
  ["xfdl", "application/vnd.xfdl"],
  ["xht", "application/xhtml+xml"],
  ["xhtml", "application/xhtml+xml"],
  ["xhvml", "application/xv+xml"],
  ["xif", "image/vnd.xiff"],
  ["xl", "application/excel"],
  ["xla", "application/vnd.ms-excel"],
  ["xlam", "application/vnd.ms-excel.addin.macroEnabled.12"],
  ["xlc", "application/vnd.ms-excel"],
  ["xlf", "application/xliff+xml"],
  ["xlm", "application/vnd.ms-excel"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsb", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"],
  ["xlsm", "application/vnd.ms-excel.sheet.macroEnabled.12"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xlt", "application/vnd.ms-excel"],
  ["xltm", "application/vnd.ms-excel.template.macroEnabled.12"],
  ["xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template"],
  ["xlw", "application/vnd.ms-excel"],
  ["xm", "audio/xm"],
  ["xml", "application/xml"],
  ["xns", "application/xcap-ns+xml"],
  ["xo", "application/vnd.olpc-sugar"],
  ["xop", "application/xop+xml"],
  ["xpi", "application/x-xpinstall"],
  ["xpl", "application/xproc+xml"],
  ["xpm", "image/x-xpixmap"],
  ["xpr", "application/vnd.is-xpr"],
  ["xps", "application/vnd.ms-xpsdocument"],
  ["xpw", "application/vnd.intercon.formnet"],
  ["xpx", "application/vnd.intercon.formnet"],
  ["xsd", "application/xml"],
  ["xsl", "application/xml"],
  ["xslt", "application/xslt+xml"],
  ["xsm", "application/vnd.syncml+xml"],
  ["xspf", "application/xspf+xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["xvm", "application/xv+xml"],
  ["xvml", "application/xv+xml"],
  ["xwd", "image/x-xwindowdump"],
  ["xyz", "chemical/x-xyz"],
  ["xz", "application/x-xz"],
  ["yaml", "text/yaml"],
  ["yang", "application/yang"],
  ["yin", "application/yin+xml"],
  ["yml", "text/yaml"],
  ["ymp", "text/x-suse-ymp"],
  ["z", "application/x-compress"],
  ["z1", "application/x-zmachine"],
  ["z2", "application/x-zmachine"],
  ["z3", "application/x-zmachine"],
  ["z4", "application/x-zmachine"],
  ["z5", "application/x-zmachine"],
  ["z6", "application/x-zmachine"],
  ["z7", "application/x-zmachine"],
  ["z8", "application/x-zmachine"],
  ["zaz", "application/vnd.zzazz.deck+xml"],
  ["zip", "application/zip"],
  ["zir", "application/vnd.zul"],
  ["zirz", "application/vnd.zul"],
  ["zmm", "application/vnd.handheld-entertainment+xml"],
  ["zsh", "text/x-scriptzsh"]
]);
function Xa(e, t) {
  var n = cI(e);
  if (typeof n.path != "string") {
    var r = e.webkitRelativePath;
    Object.defineProperty(n, "path", {
      value: typeof t == "string" ? t : typeof r == "string" && r.length > 0 ? r : e.name,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return n;
}
function cI(e) {
  var t = e.name, n = t && t.lastIndexOf(".") !== -1;
  if (n && !e.type) {
    var r = t.split(".").pop().toLowerCase(), i = uI.get(r);
    i && Object.defineProperty(e, "type", {
      value: i,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
var pI = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function dI(e) {
  return At(this, void 0, void 0, function() {
    return Oi(this, function(t) {
      return _s(e) && fI(e.dataTransfer) ? [2, gI(e.dataTransfer, e.type)] : mI(e) ? [2, hI(e)] : Array.isArray(e) && e.every(function(n) {
        return "getFile" in n && typeof n.getFile == "function";
      }) ? [2, vI(e)] : [2, []];
    });
  });
}
function fI(e) {
  return _s(e);
}
function mI(e) {
  return _s(e) && _s(e.target);
}
function _s(e) {
  return typeof e == "object" && e !== null;
}
function hI(e) {
  return Wc(e.target.files).map(function(t) {
    return Xa(t);
  });
}
function vI(e) {
  return At(this, void 0, void 0, function() {
    var t;
    return Oi(this, function(n) {
      switch (n.label) {
        case 0:
          return [4, Promise.all(e.map(function(r) {
            return r.getFile();
          }))];
        case 1:
          return t = n.sent(), [2, t.map(function(r) {
            return Xa(r);
          })];
      }
    });
  });
}
function gI(e, t) {
  return At(this, void 0, void 0, function() {
    var n, r;
    return Oi(this, function(i) {
      switch (i.label) {
        case 0:
          return e.items ? (n = Wc(e.items).filter(function(a) {
            return a.kind === "file";
          }), t !== "drop" ? [2, n] : [4, Promise.all(n.map(xI))]) : [3, 2];
        case 1:
          return r = i.sent(), [2, sv(ow(r))];
        case 2:
          return [2, sv(Wc(e.files).map(function(a) {
            return Xa(a);
          }))];
      }
    });
  });
}
function sv(e) {
  return e.filter(function(t) {
    return pI.indexOf(t.name) === -1;
  });
}
function Wc(e) {
  if (e === null)
    return [];
  for (var t = [], n = 0; n < e.length; n++) {
    var r = e[n];
    t.push(r);
  }
  return t;
}
function xI(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return lv(e);
  var t = e.webkitGetAsEntry();
  return t && t.isDirectory ? sw(t) : lv(e);
}
function ow(e) {
  return e.reduce(function(t, n) {
    return Le(Le([], _m(t), !1), _m(Array.isArray(n) ? ow(n) : [n]), !1);
  }, []);
}
function lv(e) {
  var t = e.getAsFile();
  if (!t)
    return Promise.reject("".concat(e, " is not a File"));
  var n = Xa(t);
  return Promise.resolve(n);
}
function yI(e) {
  return At(this, void 0, void 0, function() {
    return Oi(this, function(t) {
      return [2, e.isDirectory ? sw(e) : wI(e)];
    });
  });
}
function sw(e) {
  var t = e.createReader();
  return new Promise(function(n, r) {
    var i = [];
    function a() {
      var o = this;
      t.readEntries(function(s) {
        return At(o, void 0, void 0, function() {
          var l, u, c;
          return Oi(this, function(f) {
            switch (f.label) {
              case 0:
                if (s.length) return [3, 5];
                f.label = 1;
              case 1:
                return f.trys.push([1, 3, , 4]), [4, Promise.all(i)];
              case 2:
                return l = f.sent(), n(l), [3, 4];
              case 3:
                return u = f.sent(), r(u), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                c = Promise.all(s.map(yI)), i.push(c), a(), f.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(s) {
        r(s);
      });
    }
    a();
  });
}
function wI(e) {
  return At(this, void 0, void 0, function() {
    return Oi(this, function(t) {
      return [2, new Promise(function(n, r) {
        e.file(function(i) {
          var a = Xa(i, e.fullPath);
          n(a);
        }, function(i) {
          r(i);
        });
      })];
    });
  });
}
function lw({
  message: e
}) {
  return /* @__PURE__ */ m.createElement("div", {
    className: "pgn__dropzone-error-wrapper"
  }, e);
}
lw.propTypes = {
  message: p.oneOfType([p.string, p.element]).isRequired
};
function uw({
  errorMsgs: e,
  ...t
}) {
  return /* @__PURE__ */ m.createElement(Xn, {
    variant: "danger",
    icon: u2,
    className: "pgn__dropzone-generic-alert",
    ...t
  }, e.map((n) => /* @__PURE__ */ m.createElement("span", {
    key: n
  }, n)));
}
uw.propTypes = {
  errorMsgs: p.arrayOf(p.string).isRequired
};
function cw({
  percent: e,
  variant: t,
  name: n,
  onCancel: r
}) {
  return t === "spinner" ? /* @__PURE__ */ m.createElement(Z0, {
    animation: "border",
    "aria-live": "polite",
    screenReaderText: `Uploading ${n}, ${e}% done.`,
    "data-testid": "upload-spinner"
  }) : /* @__PURE__ */ m.createElement("div", {
    className: "w-50"
  }, /* @__PURE__ */ m.createElement("p", {
    className: "text-muted"
  }, /* @__PURE__ */ m.createElement(Aa, {
    id: "pgn.Dropzone.UploadProgress.uploadLabel",
    defaultMessage: "Uploading {filename}.",
    description: "A text that is shown near a progress bar during file upload in Dropzone component.",
    values: {
      filename: n
    }
  })), /* @__PURE__ */ m.createElement("div", {
    className: "d-flex justify-content-between align-items-center w-100"
  }, /* @__PURE__ */ m.createElement(Uy, {
    now: e,
    label: `${e}%`,
    variant: "success",
    className: "flex-grow-1",
    "data-testid": "upload-progress-bar"
  }), /* @__PURE__ */ m.createElement(je, {
    variant: "tertiary",
    className: "ml-3",
    onClick: r
  }, /* @__PURE__ */ m.createElement(Aa, {
    id: "pgn.Dropzone.UploadProgress.cancelLabel",
    defaultMessage: "Cancel",
    description: "Label of a cancel button that is shown during file upload in Dropzone component."
  }))));
}
cw.propTypes = {
  variant: p.oneOf(["spinner", "bar"]).isRequired,
  percent: p.number.isRequired,
  name: p.string.isRequired,
  onCancel: p.func.isRequired
};
const EI = (e) => Object.keys(e).length > 1 ? !0 : Object.keys(e).length === 0 ? !1 : Object.values(e)[0].length > 1, pw = (e) => Object.entries(e).reduce((t, n) => {
  const [r, i] = n;
  let a;
  return i.length > 0 ? a = `${i.join(", ").replaceAll(".", "").toUpperCase()}, ` : r.endsWith("/*") ? a = `${r.slice(0, -2)}, ` : a = `${r.split("/").pop().toUpperCase()}, `, t + a;
}, "").slice(0, -2), ni = (e) => {
  if (e === 0)
    return "0 Bytes";
  const t = 1024, n = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], r = Math.floor(Math.log(e) / Math.log(t));
  return `${parseFloat((e / t ** r).toFixed(2))}${n[r]}`;
}, nn = {
  uploadError: {
    id: "dropzone.Dropzone.uploadError",
    defaultMessage: "A problem occured while uploading your file. Please try again.",
    description: "A message shown in case file upload in Dropzone component results in an error."
  },
  multipleDragged: {
    id: "dropzone.Dropzone.multipleDraggedError",
    defaultMessage: "Only one upload permitted.",
    description: "A message shown when multiple files are dragged over Dropzone."
  },
  invalidSizeLess: {
    id: "dropzone.Dropzone.invalidSizeLessError",
    defaultMessage: "File must be larger than {size}.",
    description: "A message shown when a file with less than minimum allowed size is being uploaded in Dropzone."
  },
  invalidSizeMore: {
    id: "dropzone.Dropzone.invalidSizeMoreError",
    defaultMessage: "File must be less than {size}.",
    description: "A message shown when a file with more than maximum allowed size is being uploaded in Dropzone."
  },
  invalidType: {
    id: "dropzone.Dropzone.invalidType",
    defaultMessage: "The file type must be {count, plural, one {{typeString} file} other {one of {typeString} files}}.",
    description: "A message shown when a file with wrong MIME type is being uploaded."
  },
  unexpectedValidationError: {
    id: "dropzone.Dropzone.unexpectedValidationError",
    defaultMessage: "An unexpected problem occured during file validation. Please try again.",
    description: "A message shown in case file validation in Dropzone component for unknown reason."
  },
  fileSizeBetween: {
    id: "pgn.Dropzone.DefaultContent.fileSizeBetween",
    defaultMessage: "Between {sizeMin} and {sizeMax}",
    description: "A message shown when uploaded file's size must be in given range."
  },
  fileSizeMax: {
    id: "pgn.Dropzone.DefaultContent.fileSizeMax",
    defaultMessage: "Max {sizeMax}",
    description: "A message shown when uploaded file's size must be more than some value."
  },
  fileSizeMin: {
    id: "pgn.Dropzone.DefaultContent.fileSizeMin",
    defaultMessage: "Min {sizeMin}",
    description: "A message shown when uploaded file's size must be more than some value."
  },
  fileTypeRestriction: {
    id: "pgn.Dropzone.DefaultContent.fileTypeRestriction",
    defaultMessage: "Upload {count, plural, one {{firstPart} files} other {{firstPart} or {secondPart} files}}",
    description: "A message shown when uploaded file must be of certain type(s)."
  }
};
function As({
  accept: e,
  minSize: t,
  maxSize: n
}) {
  const r = Pr(), i = () => {
    let a, o;
    if (e) {
      const s = pw(e), l = s.lastIndexOf(",");
      a = r.formatMessage(nn.fileTypeRestriction, {
        count: l === -1 ? 1 : 2,
        firstPart: l === -1 ? s : s.slice(0, l),
        secondPart: l !== -1 && s.slice(l + 1)
      });
    }
    return t && n && Number.isFinite(n) ? o = r.formatMessage(nn.fileSizeBetween, {
      sizeMin: ni(t),
      sizeMax: ni(n)
    }) : n && Number.isFinite(n) ? o = r.formatMessage(nn.fileSizeMax, {
      sizeMax: ni(n)
    }) : t && (o = r.formatMessage(nn.fileSizeMin, {
      sizeMin: ni(t)
    })), a && o ? `${a} (${o})` : a || o;
  };
  return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("div", {
    className: "pgn__dropzone__upload-icon-wrapper"
  }, /* @__PURE__ */ m.createElement(kt, {
    src: l2,
    className: "pgn__dropzone__upload-icon"
  })), /* @__PURE__ */ m.createElement("p", null, /* @__PURE__ */ m.createElement(Aa, {
    id: "pgn.Dropzone.DefaultContent.label",
    description: "A text that appears as a label for input of Dropzone component.",
    defaultMessage: "Drag and drop your file here or click to upload."
  })), [e, t, n].some((a) => a) && /* @__PURE__ */ m.createElement("p", {
    className: "pgn__dropzone__upload-restriction-message"
  }, i()));
}
As.propTypes = {
  accept: p.objectOf(p.arrayOf(p.string)),
  maxSize: p.number,
  minSize: p.number
};
As.defaultProps = {
  accept: void 0,
  maxSize: void 0,
  minSize: void 0
};
function hf({
  className: e,
  accept: t,
  minSize: n,
  maxSize: r,
  validator: i,
  errorMessages: a,
  progressVariant: o,
  inputComponent: s,
  onProcessUpload: l,
  onUploadProgress: u,
  onUploadCancel: c,
  ...f
}) {
  const [d, v] = w.useState(!1), [E, x] = w.useState([]), [b, g] = w.useState(0), [h, y] = w.useState(void 0), [k, S] = w.useState(void 0), _ = Pr(), {
    uploadError: A,
    invalidSizeLess: T,
    invalidSizeMore: O,
    invalidType: P,
    multipleDragged: B
  } = a, H = async (L) => {
    E && x([]);
    const X = await dI(L);
    X && X.length > 1 && v(!0);
  }, U = () => {
    d && v(!1);
  }, Q = (L) => {
    d ? v(!1) : x(L[0].errors.map((X) => {
      switch (X.code) {
        case Eu.FileTooLarge:
          return O || _.formatMessage(nn.invalidSizeMore, {
            size: ni(r)
          });
        case Eu.FileTooSmall:
          return T || _.formatMessage(nn.invalidSizeLess, {
            size: ni(n)
          });
        case Eu.FileInvalidType:
          return P || _.formatMessage(nn.invalidType, {
            count: EI(t) ? 2 : 1,
            typeString: pw(t)
          });
        default:
          return _.formatMessage(nn.unexpectedValidationError);
      }
    }));
  }, Z = (L) => {
    const X = Math.round(L.loaded * 100 / L.total);
    g(X), u(X, L);
  }, te = (L) => {
    L.code !== "ERR_CANCELED" && (g(0), x([A || _.formatMessage(nn.uploadError)]));
  }, ee = (L) => {
    const X = new AbortController();
    S(X);
    const fe = {
      onUploadProgress: Z,
      signal: X.signal
    };
    l({
      fileData: L,
      requestConfig: fe,
      handleError: te
    });
  }, N = async (L) => {
    const X = L[0];
    if (i) {
      const Ee = await i(X);
      if (Ee) {
        x([Ee]);
        return;
      }
    }
    E && x([]);
    const fe = new FormData();
    fe.append("file", X), y(X.name), ee(fe);
  }, R = () => {
    k.abort(), g(0), c();
  }, {
    getRootProps: M,
    getInputProps: K,
    isDragActive: V,
    isDragReject: Te
  } = aw({
    multiple: !1,
    maxFiles: 1,
    maxSize: r,
    minSize: n,
    onDragLeave: U,
    onDragEnter: H,
    onDropRejected: Q,
    onDropAccepted: N,
    accept: t,
    disabled: b && b !== 100
  }), ue = () => d ? /* @__PURE__ */ m.createElement(lw, {
    message: B || _.formatMessage(nn.multipleDragged)
  }) : E.length > 0 ? /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(uw, {
    errorMsgs: E
  }), s || /* @__PURE__ */ m.createElement(As, {
    minSize: n,
    maxSize: r,
    accept: t
  })) : b && b !== 100 ? /* @__PURE__ */ m.createElement(cw, {
    variant: o,
    percent: b,
    name: h,
    onCancel: R
  }) : s || /* @__PURE__ */ m.createElement(As, {
    minSize: n,
    maxSize: r,
    accept: t
  });
  return /* @__PURE__ */ m.createElement("div", {
    "data-testid": "dropzone-container",
    ...M({
      className: F("pgn__dropzone", e, {
        "pgn__dropzone-validation-error": d || E.length > 0 || Te,
        "pgn__dropzone-active": V && !Te
      })
    }),
    ...f
  }, /* @__PURE__ */ m.createElement("input", {
    ...K()
  }), /* @__PURE__ */ m.createElement("div", {
    className: "d-flex flex-column justify-content-around align-items-center w-100"
  }, ue()));
}
hf.defaultProps = {
  className: void 0,
  accept: void 0,
  maxSize: 1 / 0,
  minSize: 0,
  onUploadProgress: () => {
  },
  onUploadCancel: () => {
  },
  errorMessages: {
    invalidType: void 0,
    invalidSizeLess: void 0,
    invalidSizeMore: void 0,
    multipleDragged: void 0,
    uploadError: void 0
  },
  progressVariant: "spinner",
  validator: void 0,
  inputComponent: void 0
};
hf.propTypes = {
  /** Specifies class name to append to the base element. */
  className: p.string,
  /**
   * Set accepted file types.
   * This should be an object with the keys set to the
   * [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
   * and the values to an array of file extensions.
   */
  accept: p.objectOf(p.arrayOf(p.string)),
  /** Maximum file size (in bytes). */
  maxSize: p.number,
  /** Minimum file size (in bytes). */
  minSize: p.number,
  /**
   * A callback fired each time an upload progress event happens,
   * receives (percentageUploaded, progressEvent) as arguments.
   */
  onUploadProgress: p.func,
  /** A callback fired upon successful upload, receives Response object as a single argument. */
  onUploadCancel: p.func,
  /**
   * A function responsible for uploading the file.
   * Receives following object as its only argument
   * {
   *   @param {object} fileData - Metadata about the uploaded file.
   *   @param {object} requestConfig - Config to pass to `axios` call.
   *   @param {function} handleError - Function to communicate to `Dropzone` that file upload resulted in failure,
   *   expects `Error` object to be passed as its only argument.
   * }
   */
  onProcessUpload: p.func.isRequired,
  /**
   * An object containing error messages, following are supported:
   * 1) invalidType - A message to display when file of invalid type is dropped into `Dropzone`.
   * Defaults to 'The file type must be {filType} file / one of {fileTypes} files.'.
   * 2) invalidSizeLess - A message to display when file of size less than minSize value is dropped into `Dropzone`.
   * Defaults to 'File must be larger than {minSize}.'.
   * 3) invalidSizeMore - A message to display when file of size greater than maxSize value is dropped into `Dropzone`.
   * Defaults to 'File must be less than {maxSize}.'.
   * 4) multipleDragged - A message to display when multiple files are dragged over `Dropzone`.
   * 5) uploadError - A message to display in case upload results in an error
   */
  errorMessages: p.shape({
    invalidType: p.oneOfType([p.string, p.element]),
    invalidSizeLess: p.oneOfType([p.string, p.element]),
    invalidSizeMore: p.oneOfType([p.string, p.element]),
    multipleDragged: p.oneOfType([p.string, p.element]),
    uploadError: p.oneOfType([p.string, p.element])
  }),
  /** Specifies how the upload progress should be displayed, component shows either spinner or a progress bar. */
  progressVariant: p.oneOf(["spinner", "bar"]),
  /**
   * Custom validation function, receives `File` object as its only argument.
   * Note that this function will be invoked as a last validation step before beginning an upload process.
   */
  validator: p.func,
  /** A component to display initial state of the `Dropzone`. */
  inputComponent: p.oneOfType([p.elementType, p.node])
};
function bI() {
  const e = "csrftoken", t = document.cookie.split(";");
  for (let r = 0; r < t.length; r++) {
    const i = t[r].trim();
    if (i.startsWith(e + "="))
      return i.substring(e.length + 1);
  }
  const n = document.querySelector('meta[name="csrf-token"]');
  return n ? n.getAttribute("content") || "" : (console.warn("CSRF token not found"), "");
}
async function dw(e, t, n = {}) {
  const r = e.handlerUrl(e.element, t);
  try {
    const i = await fetch(r, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": bI()
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
const kI = ({
  displayName: e,
  questionText: t,
  gradingMode: n,
  maxAttempts: r,
  showFeedbackMode: i,
  onDisplayNameChange: a,
  onQuestionTextChange: o,
  onGradingModeChange: s,
  onMaxAttemptsChange: l,
  onShowFeedbackModeChange: u
}) => /* @__PURE__ */ C.jsxs("div", { className: "wizard-step-content", children: [
  /* @__PURE__ */ C.jsxs(se, { className: "mb-3", children: [
    /* @__PURE__ */ C.jsx(se.Header, { children: /* @__PURE__ */ C.jsx("h4", { className: "h6 mb-0", children: "Problem Information" }) }),
    /* @__PURE__ */ C.jsxs(se.Section, { children: [
      /* @__PURE__ */ C.jsxs(W.Group, { className: "mb-3", children: [
        /* @__PURE__ */ C.jsx(W.Label, { children: "Display Name *" }),
        /* @__PURE__ */ C.jsx(
          W.Control,
          {
            type: "text",
            value: e,
            onChange: (c) => a(c.target.value),
            placeholder: "e.g., Image Hotspot Question 1",
            required: !0
          }
        ),
        /* @__PURE__ */ C.jsx(W.Text, { className: "text-muted", children: "Internal name shown in Studio (not visible to students)" })
      ] }),
      /* @__PURE__ */ C.jsxs(W.Group, { children: [
        /* @__PURE__ */ C.jsx(W.Label, { children: "Question Text *" }),
        /* @__PURE__ */ C.jsx(
          W.Control,
          {
            as: "textarea",
            rows: 4,
            value: t,
            onChange: (c) => o(c.target.value),
            placeholder: "Enter the question prompt students will see...",
            required: !0
          }
        ),
        /* @__PURE__ */ C.jsx(W.Text, { className: "text-muted", children: "The question presented to students. HTML is supported." })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ C.jsxs(se, { className: "mb-3", children: [
    /* @__PURE__ */ C.jsx(se.Header, { children: /* @__PURE__ */ C.jsx("h4", { className: "h6 mb-0", children: "Grading Configuration" }) }),
    /* @__PURE__ */ C.jsxs(se.Section, { children: [
      /* @__PURE__ */ C.jsxs("div", { className: "row", children: [
        /* @__PURE__ */ C.jsx("div", { className: "col-md-6", children: /* @__PURE__ */ C.jsxs(W.Group, { className: "mb-3", children: [
          /* @__PURE__ */ C.jsx(W.Label, { children: "Grading Mode" }),
          /* @__PURE__ */ C.jsxs(
            W.Control,
            {
              as: "select",
              value: n,
              onChange: (c) => s(c.target.value),
              children: [
                /* @__PURE__ */ C.jsx("option", { value: "partial_credit", children: "Partial Credit" }),
                /* @__PURE__ */ C.jsx("option", { value: "all_or_nothing", children: "All or Nothing" }),
                /* @__PURE__ */ C.jsx("option", { value: "first_correct", children: "First Correct" })
              ]
            }
          ),
          /* @__PURE__ */ C.jsxs(W.Text, { className: "text-muted", children: [
            /* @__PURE__ */ C.jsx("strong", { children: "Partial Credit:" }),
            " Points divided equally among correct hotspots",
            /* @__PURE__ */ C.jsx("br", {}),
            /* @__PURE__ */ C.jsx("strong", { children: "All or Nothing:" }),
            " Full points only if all correct clicked",
            /* @__PURE__ */ C.jsx("br", {}),
            /* @__PURE__ */ C.jsx("strong", { children: "First Correct:" }),
            " Full points for first correct click"
          ] })
        ] }) }),
        /* @__PURE__ */ C.jsx("div", { className: "col-md-6", children: /* @__PURE__ */ C.jsxs(W.Group, { className: "mb-3", children: [
          /* @__PURE__ */ C.jsx(W.Label, { children: "Max Attempts" }),
          /* @__PURE__ */ C.jsx(
            W.Control,
            {
              type: "number",
              min: "0",
              value: r,
              onChange: (c) => l(parseInt(c.target.value) || 0)
            }
          ),
          /* @__PURE__ */ C.jsx(W.Text, { className: "text-muted", children: "Maximum submission attempts (0 = unlimited)" })
        ] }) })
      ] }),
      /* @__PURE__ */ C.jsxs(W.Group, { children: [
        /* @__PURE__ */ C.jsx(W.Label, { children: "Feedback Mode" }),
        /* @__PURE__ */ C.jsxs(
          W.Control,
          {
            as: "select",
            value: i,
            onChange: (c) => u(c.target.value),
            children: [
              /* @__PURE__ */ C.jsx("option", { value: "on_submit", children: "On Submit" }),
              /* @__PURE__ */ C.jsx("option", { value: "immediate", children: "Immediate" })
            ]
          }
        ),
        /* @__PURE__ */ C.jsxs(W.Text, { className: "text-muted", children: [
          /* @__PURE__ */ C.jsx("strong", { children: "On Submit:" }),
          " Show feedback after clicking Submit button",
          /* @__PURE__ */ C.jsx("br", {}),
          /* @__PURE__ */ C.jsx("strong", { children: "Immediate:" }),
          " Show feedback instantly when hotspot is clicked"
        ] })
      ] })
    ] })
  ] })
] }), CI = ({
  imageUrl: e,
  uploading: t,
  onImageUpload: n,
  onOpenAssetPicker: r
}) => /* @__PURE__ */ C.jsxs("div", { className: "wizard-step-content", children: [
  /* @__PURE__ */ C.jsxs(se, { className: "mb-3", children: [
    /* @__PURE__ */ C.jsx(se.Header, { children: /* @__PURE__ */ C.jsx("h4", { className: "h6 mb-0", children: "Select Image for Hotspot Problem" }) }),
    /* @__PURE__ */ C.jsxs(se.Section, { children: [
      e ? /* @__PURE__ */ C.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ C.jsx(W.Label, { children: "Current Image" }),
        /* @__PURE__ */ C.jsx(
          "div",
          {
            style: {
              border: "2px solid #dee2e6",
              borderRadius: "4px",
              padding: "1rem",
              backgroundColor: "#f8f9fa",
              textAlign: "center"
            },
            children: /* @__PURE__ */ C.jsx(
              "img",
              {
                src: e,
                alt: "Hotspot image",
                style: {
                  maxWidth: "100%",
                  maxHeight: "400px",
                  display: "block",
                  margin: "0 auto",
                  borderRadius: "4px"
                }
              }
            )
          }
        ),
        /* @__PURE__ */ C.jsx("small", { className: "text-muted d-block mt-2", children: e })
      ] }) : /* @__PURE__ */ C.jsxs(Xn, { variant: "warning", className: "mb-4", children: [
        /* @__PURE__ */ C.jsx("strong", { children: "No image selected." }),
        " Please upload or select an image to continue."
      ] }),
      /* @__PURE__ */ C.jsxs(W.Group, { className: "mb-4", children: [
        /* @__PURE__ */ C.jsx(W.Label, { children: "Upload New Image" }),
        /* @__PURE__ */ C.jsx(
          hf,
          {
            onProcessUpload: n,
            accept: {
              "image/jpeg": [".jpg", ".jpeg"],
              "image/png": [".png"],
              "image/gif": [".gif"],
              "image/webp": [".webp"]
            },
            maxSize: 5 * 1024 * 1024
          }
        ),
        /* @__PURE__ */ C.jsx(W.Text, { className: "text-muted", children: "Maximum file size: 5MB. Supported formats: JPG, PNG, GIF, WebP" })
      ] }),
      /* @__PURE__ */ C.jsxs("div", { children: [
        /* @__PURE__ */ C.jsx(W.Label, { children: "Or Choose Existing Image" }),
        /* @__PURE__ */ C.jsx("div", { children: /* @__PURE__ */ C.jsx(
          je,
          {
            variant: "outline-primary",
            onClick: r,
            disabled: t,
            children: "Choose from Course Images"
          }
        ) }),
        /* @__PURE__ */ C.jsx(W.Text, { className: "text-muted", children: "Browse images already uploaded to this course" })
      ] })
    ] })
  ] }),
  !e && /* @__PURE__ */ C.jsxs(Xn, { variant: "info", children: [
    /* @__PURE__ */ C.jsx("strong", { children: "Next Step:" }),
    " After selecting an image, you'll create clickable hotspots on it."
  ] })
] }), SI = ({
  imageUrl: e,
  hotspot: t,
  onChange: n
}) => {
  const r = w.useRef(null), i = w.useRef(null), [a, o] = w.useState({ width: 0, height: 0 }), [s, l] = w.useState(null), u = () => {
    i.current && o({
      width: i.current.offsetWidth,
      height: i.current.offsetHeight
    });
  }, c = (h, y, k) => {
    if (!i.current) return [0, 0, 0];
    const S = i.current.getBoundingClientRect();
    return S.width === 0 || S.height === 0 ? [0, 0, 0] : [
      h / S.width * 100,
      y / S.height * 100,
      k / S.width * 100
      // Radius as percentage of width
    ];
  }, f = (h) => {
    const [y, k, S] = h;
    return {
      x: y / 100 * a.width,
      y: k / 100 * a.height,
      r: S / 100 * a.width
    };
  }, d = (h) => {
    if (!i.current) return { x: 0, y: 0 };
    const y = i.current.getBoundingClientRect();
    return {
      x: h.clientX - y.left,
      y: h.clientY - y.top
    };
  }, v = (h) => {
    const y = d(h);
    l({
      isDrawing: !0,
      centerX: y.x,
      centerY: y.y,
      radius: 0
    });
  }, E = (h) => {
    if (!(s != null && s.isDrawing)) return;
    const y = d(h), k = y.x - s.centerX, S = y.y - s.centerY, _ = Math.sqrt(k * k + S * S);
    l({
      ...s,
      radius: _
    });
  }, x = () => {
    if (!(s != null && s.isDrawing)) return;
    if (s.radius < 10) {
      l(null);
      return;
    }
    const [h, y, k] = c(
      s.centerX,
      s.centerY,
      s.radius
    );
    n([h, y, k]), l(null);
  }, b = a.width > 0 && t.coordinates[2] > 0 ? f(t.coordinates) : null, g = t.correct ? "#178253" : "#C32D3A";
  return /* @__PURE__ */ C.jsxs(
    "div",
    {
      ref: r,
      style: {
        position: "relative",
        border: "2px solid #dee2e6",
        borderRadius: "4px",
        overflow: "hidden",
        cursor: "crosshair",
        backgroundColor: "#f8f9fa",
        userSelect: "none",
        maxHeight: "600px"
      },
      onMouseDown: v,
      onMouseMove: E,
      onMouseUp: x,
      onMouseLeave: x,
      children: [
        /* @__PURE__ */ C.jsx(
          "img",
          {
            ref: i,
            src: e,
            alt: "Hotspot image",
            style: {
              display: "block",
              width: "100%",
              height: "auto",
              maxHeight: "600px",
              objectFit: "contain"
            },
            onLoad: u,
            draggable: !1
          }
        ),
        a.width > 0 && /* @__PURE__ */ C.jsxs(
          "svg",
          {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none"
            },
            viewBox: `0 0 ${a.width} ${a.height}`,
            children: [
              b && /* @__PURE__ */ C.jsx(
                "circle",
                {
                  cx: b.x,
                  cy: b.y,
                  r: b.r,
                  fill: g,
                  fillOpacity: 0.25,
                  stroke: g,
                  strokeWidth: 3
                }
              ),
              (s == null ? void 0 : s.isDrawing) && s.radius > 0 && /* @__PURE__ */ C.jsx(
                "circle",
                {
                  cx: s.centerX,
                  cy: s.centerY,
                  r: s.radius,
                  fill: "#0075b4",
                  fillOpacity: 0.25,
                  stroke: "#0075b4",
                  strokeWidth: 3,
                  strokeDasharray: "5,5"
                }
              ),
              b && /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
                /* @__PURE__ */ C.jsx(
                  "line",
                  {
                    x1: b.x - 10,
                    y1: b.y,
                    x2: b.x + 10,
                    y2: b.y,
                    stroke: g,
                    strokeWidth: 2
                  }
                ),
                /* @__PURE__ */ C.jsx(
                  "line",
                  {
                    x1: b.x,
                    y1: b.y - 10,
                    x2: b.x,
                    y2: b.y + 10,
                    stroke: g,
                    strokeWidth: 2
                  }
                )
              ] })
            ]
          }
        ),
        !s && (!b || b.r === 0) && /* @__PURE__ */ C.jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "1rem 2rem",
              background: "rgba(0, 0, 0, 0.7)",
              color: "white",
              borderRadius: "4px",
              fontSize: "0.875rem",
              pointerEvents: "none",
              textAlign: "center"
            },
            children: "Click and drag to create a hotspot"
          }
        )
      ]
    }
  );
}, _I = ({
  hotspot: e,
  hotspotIndex: t,
  totalHotspots: n,
  imageUrl: r,
  onSave: i,
  onCancel: a,
  saveRef: o
}) => {
  const [s, l] = w.useState(e.label), [u, c] = w.useState(e.correct), [f, d] = w.useState(e.feedback), [v, E] = w.useState(e.coordinates), [x, b] = w.useState({}), g = t === -1, h = () => {
    const S = {};
    return s.trim() ? s.length > 100 && (S.label = "Label must be 100 characters or less") : S.label = "Hotspot label is required", v[2] <= 0 && (S.coordinates = "Hotspot radius must be greater than 0. Use the visual editor to set the size."), b(S), Object.keys(S).length === 0;
  }, y = () => {
    h() && i({
      ...e,
      label: s,
      correct: u,
      feedback: f,
      coordinates: v
    });
  };
  w.useEffect(() => (o && (o.current = y), () => {
    o && (o.current = null);
  }), [o, s, u, f, v]);
  const k = (S) => {
    E(S), S[2] > 0 && x.coordinates && b({ ...x, coordinates: "" });
  };
  return /* @__PURE__ */ C.jsxs("div", { className: "hotspot-inline-editor", children: [
    /* @__PURE__ */ C.jsxs("div", { className: "inline-editor-header mb-3", children: [
      /* @__PURE__ */ C.jsx("h5", { className: "mb-1", children: g ? "New Hotspot" : `Editing Hotspot ${t + 1}` }),
      /* @__PURE__ */ C.jsx("p", { className: "text-muted small mb-0", children: "Click and drag on the image to position the hotspot, then configure its properties below." })
    ] }),
    /* @__PURE__ */ C.jsxs("div", { className: "visual-editor-section mb-3", children: [
      /* @__PURE__ */ C.jsxs(Xn, { variant: "info", className: "mb-2", style: { fontSize: "0.875rem", padding: "0.5rem 1rem" }, children: [
        /* @__PURE__ */ C.jsx("strong", { children: "Tip:" }),
        " Click and drag on the image to ",
        g ? "create" : "reposition",
        " the hotspot."
      ] }),
      /* @__PURE__ */ C.jsx(
        SI,
        {
          imageUrl: r,
          hotspot: {
            id: e.id,
            label: s,
            shape: "circle",
            coordinates: v,
            correct: u,
            points: 1,
            // Dummy value, not used anymore
            feedback: f
          },
          onChange: k
        }
      ),
      x.coordinates && /* @__PURE__ */ C.jsx("div", { className: "invalid-feedback d-block mt-2", children: x.coordinates })
    ] }),
    /* @__PURE__ */ C.jsx("div", { className: "hotspot-properties-section", children: /* @__PURE__ */ C.jsxs(W, { children: [
      /* @__PURE__ */ C.jsxs(W.Group, { className: "mb-3", children: [
        /* @__PURE__ */ C.jsx(W.Label, { children: "Label *" }),
        /* @__PURE__ */ C.jsx(
          W.Control,
          {
            type: "text",
            value: s,
            onChange: (S) => l(S.target.value),
            placeholder: "e.g., 'Canine tooth', 'Liver', 'Capital city'",
            isInvalid: !!x.label,
            maxLength: 100
          }
        ),
        x.label ? /* @__PURE__ */ C.jsx("div", { className: "invalid-feedback d-block", children: x.label }) : /* @__PURE__ */ C.jsxs(W.Text, { className: "text-muted", children: [
          s.length,
          " / 100 characters"
        ] })
      ] }),
      /* @__PURE__ */ C.jsxs(W.Group, { className: "mb-3", children: [
        /* @__PURE__ */ C.jsx(W.Label, { children: "Correctness" }),
        /* @__PURE__ */ C.jsxs("div", { children: [
          /* @__PURE__ */ C.jsx(
            W.Check,
            {
              type: "radio",
              id: `correct-yes-${e.id}`,
              label: "Correct answer",
              checked: u,
              onChange: () => c(!0),
              inline: !0
            }
          ),
          /* @__PURE__ */ C.jsx(
            W.Check,
            {
              type: "radio",
              id: `correct-no-${e.id}`,
              label: "Incorrect answer",
              checked: !u,
              onChange: () => c(!1),
              inline: !0
            }
          )
        ] }),
        /* @__PURE__ */ C.jsx(W.Text, { className: "text-muted", children: "Is clicking this hotspot a correct response?" })
      ] }),
      /* @__PURE__ */ C.jsxs(W.Group, { className: "mb-3", children: [
        /* @__PURE__ */ C.jsx(W.Label, { children: "Feedback (Optional)" }),
        /* @__PURE__ */ C.jsx(
          W.Control,
          {
            as: "textarea",
            rows: 3,
            value: f,
            onChange: (S) => d(S.target.value),
            placeholder: "Feedback shown to students when they click this hotspot...",
            maxLength: 500
          }
        ),
        /* @__PURE__ */ C.jsxs(W.Text, { className: "text-muted", children: [
          f.length,
          " / 500 characters. Shown based on Feedback Mode setting."
        ] })
      ] }),
      /* @__PURE__ */ C.jsxs("div", { className: "mb-3 p-2 bg-light rounded", style: { fontSize: "0.875rem" }, children: [
        /* @__PURE__ */ C.jsx("strong", { className: "small", children: "Position:" }),
        " (",
        v[0].toFixed(2),
        "%, ",
        v[1].toFixed(2),
        "%)",
        " • ",
        /* @__PURE__ */ C.jsx("strong", { className: "small", children: "Radius:" }),
        " ",
        v[2].toFixed(2),
        "%"
      ] })
    ] }) })
  ] });
}, AI = ({
  imageUrl: e,
  hotspots: t,
  onHotspotsChange: n,
  editingIndex: r,
  onEditingIndexChange: i,
  onSaveHotspot: a,
  onCancelEdit: o,
  saveHotspotRef: s
}) => {
  const l = r !== -1, u = () => {
    const v = {
      id: `hotspot_${Date.now()}`,
      label: "",
      shape: "circle",
      coordinates: [50, 50, 10],
      // Center at 50%, 50% with 10% radius
      correct: !0,
      points: 1,
      // Dummy value, not used in grading anymore
      feedback: ""
    }, E = [...t, v];
    n(E), i(E.length - 1);
  }, c = (v) => {
    i(v);
  }, f = (v) => {
    confirm(`Are you sure you want to delete "${t[v].label || "Hotspot " + (v + 1)}"?`) && n(t.filter((E, x) => x !== v));
  }, d = (v, E = 100) => v ? v.length <= E ? v : v.substring(0, E) + "..." : "";
  return /* @__PURE__ */ C.jsx("div", { className: "wizard-step-content", children: l ? /* @__PURE__ */ C.jsx(se, { children: /* @__PURE__ */ C.jsx(se.Section, { children: /* @__PURE__ */ C.jsx(
    _I,
    {
      hotspot: t[r],
      hotspotIndex: r,
      totalHotspots: t.length,
      imageUrl: e,
      onSave: a,
      onCancel: o,
      saveRef: s
    }
  ) }) }) : (
    /* Show list view if not editing */
    /* @__PURE__ */ C.jsx(se, { children: /* @__PURE__ */ C.jsxs(se.Section, { children: [
      /* @__PURE__ */ C.jsxs("div", { className: "hotspot-list-header", children: [
        /* @__PURE__ */ C.jsxs("h4", { className: "hotspot-list-title", children: [
          "Hotspots (",
          t.length,
          ")"
        ] }),
        /* @__PURE__ */ C.jsx(
          je,
          {
            variant: "primary",
            iconBefore: Sh,
            onClick: u,
            size: "lg",
            children: "Add Hotspot"
          }
        )
      ] }),
      e && /* @__PURE__ */ C.jsx("div", { className: "mb-3 p-2 bg-light rounded", children: /* @__PURE__ */ C.jsxs("div", { className: "d-flex align-items-center gap-2", children: [
        /* @__PURE__ */ C.jsx(
          "img",
          {
            src: e,
            alt: "Hotspot image thumbnail",
            style: {
              width: "80px",
              height: "80px",
              objectFit: "cover",
              borderRadius: "4px",
              border: "1px solid #dee2e6"
            }
          }
        ),
        /* @__PURE__ */ C.jsxs("div", { className: "flex-grow-1", children: [
          /* @__PURE__ */ C.jsx("small", { className: "text-muted d-block", children: "Selected Image" }),
          /* @__PURE__ */ C.jsx("small", { className: "text-muted", style: { fontSize: "0.75rem", wordBreak: "break-all" }, children: d(e, 60) })
        ] })
      ] }) }),
      t.length === 0 ? /* @__PURE__ */ C.jsxs("div", { className: "text-center py-5", children: [
        /* @__PURE__ */ C.jsx("p", { className: "text-muted mb-3", style: { fontSize: "1.1rem" }, children: "No hotspots defined yet." }),
        /* @__PURE__ */ C.jsx("p", { className: "text-muted small mb-4", children: "Create clickable regions on your image that students can click." }),
        /* @__PURE__ */ C.jsx(
          je,
          {
            variant: "primary",
            iconBefore: Sh,
            onClick: u,
            size: "lg",
            children: "Add Your First Hotspot"
          }
        )
      ] }) : /* @__PURE__ */ C.jsx("div", { className: "hotspot-list", children: t.map((v, E) => /* @__PURE__ */ C.jsx(
        "div",
        {
          className: "hotspot-card",
          style: {
            border: "1px solid #dee2e6",
            borderRadius: "4px",
            padding: "1rem",
            marginBottom: "0.75rem",
            backgroundColor: "#fff",
            transition: "box-shadow 0.2s"
          },
          children: /* @__PURE__ */ C.jsxs("div", { className: "d-flex align-items-start justify-content-between", children: [
            /* @__PURE__ */ C.jsxs("div", { className: "flex-grow-1", children: [
              /* @__PURE__ */ C.jsxs("div", { className: "d-flex align-items-center mb-2", children: [
                /* @__PURE__ */ C.jsxs("span", { style: { fontWeight: 600, marginRight: "0.5rem" }, children: [
                  E + 1,
                  ". ",
                  v.label || "(Unlabeled)"
                ] }),
                /* @__PURE__ */ C.jsx(
                  fi,
                  {
                    variant: v.correct ? "success" : "danger",
                    style: { fontSize: "0.75rem" },
                    children: v.correct ? "Correct" : "Incorrect"
                  }
                )
              ] }),
              v.feedback && /* @__PURE__ */ C.jsxs("div", { style: { fontSize: "0.875rem", color: "#666", fontStyle: "italic", marginBottom: "0.5rem" }, children: [
                '"',
                d(v.feedback, 120),
                '"'
              ] }),
              /* @__PURE__ */ C.jsxs("div", { style: { fontSize: "0.75rem", color: "#999" }, children: [
                "Position: (",
                v.coordinates[0].toFixed(1),
                "%, ",
                v.coordinates[1].toFixed(1),
                "%) • Radius: ",
                v.coordinates[2].toFixed(1),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ C.jsxs("div", { className: "d-flex gap-2", style: { marginLeft: "1rem" }, children: [
              /* @__PURE__ */ C.jsx(
                je,
                {
                  variant: "link",
                  size: "sm",
                  onClick: () => c(E),
                  children: "Edit"
                }
              ),
              /* @__PURE__ */ C.jsx(
                je,
                {
                  variant: "link",
                  size: "sm",
                  onClick: () => f(E),
                  className: "text-danger",
                  children: "Delete"
                }
              )
            ] })
          ] })
        },
        v.id
      )) }),
      t.length > 0 && /* @__PURE__ */ C.jsxs(Xn, { variant: "info", className: "mt-3", style: { fontSize: "0.875rem" }, children: [
        /* @__PURE__ */ C.jsx("strong", { children: "Points Distribution:" }),
        " Each correct hotspot will be worth equal points. For example, if your problem is worth 10 points and you have 5 correct hotspots, each correct click will earn 2 points."
      ] })
    ] }) })
  ) });
}, TI = ({
  displayName: e,
  questionText: t,
  gradingMode: n,
  maxAttempts: r,
  showFeedbackMode: i,
  weight: a,
  imageUrl: o,
  hotspots: s,
  onNavigateToStep: l
}) => {
  const u = (x, b = 150) => x ? x.length <= b ? x : x.substring(0, b) + "..." : "", c = (x) => {
    const b = document.createElement("div");
    return b.innerHTML = x, b.textContent || b.innerText || "";
  }, f = (x) => ({
    partial_credit: "Partial Credit",
    all_or_nothing: "All or Nothing",
    first_correct: "First Correct"
  })[x] || x, d = (x) => ({
    on_submit: "On Submit",
    immediate: "Immediate"
  })[x] || x, v = s.filter((x) => x.correct), E = s.filter((x) => !x.correct);
  return /* @__PURE__ */ C.jsxs("div", { className: "wizard-step-content", children: [
    /* @__PURE__ */ C.jsxs(se, { className: "mb-3", children: [
      /* @__PURE__ */ C.jsx(se.Header, { children: /* @__PURE__ */ C.jsxs("div", { className: "d-flex justify-content-between align-items-center", children: [
        /* @__PURE__ */ C.jsx("h4", { className: "h6 mb-0", children: "Basic Settings" }),
        /* @__PURE__ */ C.jsx(
          je,
          {
            variant: "link",
            size: "sm",
            onClick: () => l("step1"),
            style: { fontSize: "0.875rem" },
            children: "Edit"
          }
        )
      ] }) }),
      /* @__PURE__ */ C.jsxs(se.Section, { children: [
        /* @__PURE__ */ C.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ C.jsx("strong", { className: "d-block text-muted small", children: "Display Name" }),
          /* @__PURE__ */ C.jsx("span", { children: e })
        ] }),
        /* @__PURE__ */ C.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ C.jsx("strong", { className: "d-block text-muted small", children: "Question Text" }),
          /* @__PURE__ */ C.jsx("span", { children: u(c(t)) })
        ] }),
        /* @__PURE__ */ C.jsxs("div", { className: "row", children: [
          /* @__PURE__ */ C.jsxs("div", { className: "col-md-4", children: [
            /* @__PURE__ */ C.jsx("strong", { className: "d-block text-muted small", children: "Grading Mode" }),
            /* @__PURE__ */ C.jsx("span", { children: f(n) })
          ] }),
          /* @__PURE__ */ C.jsxs("div", { className: "col-md-4", children: [
            /* @__PURE__ */ C.jsx("strong", { className: "d-block text-muted small", children: "Max Attempts" }),
            /* @__PURE__ */ C.jsx("span", { children: r === 0 ? "Unlimited" : r })
          ] }),
          /* @__PURE__ */ C.jsxs("div", { className: "col-md-4", children: [
            /* @__PURE__ */ C.jsx("strong", { className: "d-block text-muted small", children: "Feedback Mode" }),
            /* @__PURE__ */ C.jsx("span", { children: d(i) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ C.jsxs(se, { className: "mb-3", children: [
      /* @__PURE__ */ C.jsx(se.Header, { children: /* @__PURE__ */ C.jsxs("div", { className: "d-flex justify-content-between align-items-center", children: [
        /* @__PURE__ */ C.jsx("h4", { className: "h6 mb-0", children: "Image" }),
        /* @__PURE__ */ C.jsx(
          je,
          {
            variant: "link",
            size: "sm",
            onClick: () => l("step2"),
            style: { fontSize: "0.875rem" },
            children: "Edit"
          }
        )
      ] }) }),
      /* @__PURE__ */ C.jsx(se.Section, { children: o ? /* @__PURE__ */ C.jsxs("div", { className: "d-flex align-items-start gap-3", children: [
        /* @__PURE__ */ C.jsx(
          "img",
          {
            src: o,
            alt: "Hotspot image",
            style: {
              width: "120px",
              height: "120px",
              objectFit: "cover",
              borderRadius: "4px",
              border: "1px solid #dee2e6"
            }
          }
        ),
        /* @__PURE__ */ C.jsxs("div", { className: "flex-grow-1", children: [
          /* @__PURE__ */ C.jsx("strong", { className: "d-block text-muted small mb-1", children: "Image URL" }),
          /* @__PURE__ */ C.jsx("span", { style: { fontSize: "0.875rem", wordBreak: "break-all" }, children: o })
        ] })
      ] }) : /* @__PURE__ */ C.jsx("span", { className: "text-danger", children: "No image selected" }) })
    ] }),
    /* @__PURE__ */ C.jsxs(se, { className: "mb-3", children: [
      /* @__PURE__ */ C.jsx(se.Header, { children: /* @__PURE__ */ C.jsxs("div", { className: "d-flex justify-content-between align-items-center", children: [
        /* @__PURE__ */ C.jsxs("h4", { className: "h6 mb-0", children: [
          "Hotspots (",
          s.length,
          ")"
        ] }),
        /* @__PURE__ */ C.jsx(
          je,
          {
            variant: "link",
            size: "sm",
            onClick: () => l("step3"),
            style: { fontSize: "0.875rem" },
            children: "Edit"
          }
        )
      ] }) }),
      /* @__PURE__ */ C.jsx(se.Section, { children: s.length === 0 ? /* @__PURE__ */ C.jsx("span", { className: "text-danger", children: "No hotspots defined" }) : /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
        /* @__PURE__ */ C.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ C.jsxs(fi, { variant: "success", className: "mr-2", children: [
            v.length,
            " Correct"
          ] }),
          /* @__PURE__ */ C.jsxs(fi, { variant: "danger", children: [
            E.length,
            " Incorrect"
          ] })
        ] }),
        /* @__PURE__ */ C.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ C.jsx("strong", { className: "d-block text-muted small mb-2", children: "Hotspot List" }),
          /* @__PURE__ */ C.jsx("div", { style: { maxHeight: "200px", overflowY: "auto" }, children: s.map((x, b) => /* @__PURE__ */ C.jsxs(
            "div",
            {
              className: "d-flex align-items-center justify-content-between mb-2 pb-2",
              style: { borderBottom: b < s.length - 1 ? "1px solid #e9ecef" : "none" },
              children: [
                /* @__PURE__ */ C.jsxs("div", { className: "d-flex align-items-center gap-2", children: [
                  /* @__PURE__ */ C.jsxs("span", { style: { fontSize: "0.875rem", fontWeight: 500 }, children: [
                    b + 1,
                    ". ",
                    x.label || "(Unlabeled)"
                  ] }),
                  /* @__PURE__ */ C.jsx(
                    fi,
                    {
                      variant: x.correct ? "success" : "danger",
                      style: { fontSize: "0.7rem" },
                      children: x.correct ? "Correct" : "Incorrect"
                    }
                  )
                ] }),
                /* @__PURE__ */ C.jsxs("span", { style: { fontSize: "0.75rem", color: "#999" }, children: [
                  "(",
                  x.coordinates[0].toFixed(1),
                  "%, ",
                  x.coordinates[1].toFixed(1),
                  "%)"
                ] })
              ]
            },
            x.id
          )) })
        ] }),
        /* @__PURE__ */ C.jsxs("div", { className: "p-2 bg-light rounded", children: [
          /* @__PURE__ */ C.jsx("strong", { className: "small d-block mb-1", children: "Points Distribution" }),
          /* @__PURE__ */ C.jsxs("p", { className: "small mb-0 text-muted", children: [
            "Problem Weight: ",
            /* @__PURE__ */ C.jsxs("strong", { children: [
              a,
              " points"
            ] }),
            /* @__PURE__ */ C.jsx("br", {}),
            v.length > 0 ? /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
              "Each correct hotspot worth: ",
              /* @__PURE__ */ C.jsxs("strong", { children: [
                (a / v.length).toFixed(2),
                " points"
              ] })
            ] }) : /* @__PURE__ */ C.jsx("span", { className: "text-danger", children: "No correct hotspots defined" })
          ] })
        ] })
      ] }) })
    ] }),
    (!o || s.length === 0 || v.length === 0) && /* @__PURE__ */ C.jsx(se, { className: "border-danger", children: /* @__PURE__ */ C.jsxs(se.Section, { children: [
      /* @__PURE__ */ C.jsx("strong", { className: "text-danger d-block mb-2", children: "⚠️ Configuration Issues" }),
      /* @__PURE__ */ C.jsxs("ul", { className: "mb-0 text-danger", style: { fontSize: "0.875rem" }, children: [
        !o && /* @__PURE__ */ C.jsx("li", { children: "No image selected" }),
        s.length === 0 && /* @__PURE__ */ C.jsx("li", { children: "No hotspots defined" }),
        s.length > 0 && v.length === 0 && /* @__PURE__ */ C.jsx("li", { children: "No correct hotspots defined" })
      ] })
    ] }) })
  ] });
}, NI = ({
  runtime: e,
  fields: t,
  imageUrl: n,
  // Use imageUrl from parent (controlled)
  uploading: r,
  onImageUpload: i,
  onOpenAssetPicker: a
}) => {
  const [o, s] = w.useState(t.display_name), [l, u] = w.useState(t.question_text), [c, f] = w.useState(t.grading_mode), [d, v] = w.useState(t.max_attempts), [E, x] = w.useState(t.show_feedback_mode), [b, g] = w.useState(t.weight), [h, y] = w.useState(t.hotspots), [k, S] = w.useState("step1"), [_, A] = w.useState(/* @__PURE__ */ new Set(["step1"])), [T, O] = w.useState(!1), [P, B] = w.useState(null), [H, U] = w.useState(-1), Q = w.useRef(null), Z = () => {
    const L = [];
    return o.trim() || L.push("Display name is required"), l.trim() || L.push("Question text is required"), { valid: L.length === 0, errors: L };
  }, te = () => {
    const L = [];
    return n || L.push("Please select an image"), { valid: L.length === 0, errors: L };
  }, ee = () => {
    const L = [];
    return h.length === 0 && L.push("At least one hotspot is required"), h.filter((Ee) => Ee.correct).length === 0 && L.push("At least one correct hotspot is required"), h.filter((Ee) => !Ee.label.trim()).length > 0 && L.push("All hotspots must have labels"), { valid: L.length === 0, errors: L };
  }, N = () => {
    let L = { valid: !0, errors: [] };
    k === "step1" ? (L = Z(), L.valid && (S("step2"), A(/* @__PURE__ */ new Set([..._, "step2"])))) : k === "step2" ? (L = te(), L.valid && (S("step3"), A(/* @__PURE__ */ new Set([..._, "step3"])))) : k === "step3" && (L = ee(), L.valid && (S("step4"), A(/* @__PURE__ */ new Set([..._, "step4"])))), L.valid ? B(null) : (B({ type: "error", text: L.errors.join(". ") }), setTimeout(() => B(null), 5e3));
  }, R = () => {
    B(null), k === "step2" ? S("step1") : k === "step3" ? S("step2") : k === "step4" && S("step3");
  }, M = (L) => {
    _.has(L) && (S(L), B(null));
  }, K = async () => {
    O(!0), B(null);
    try {
      const L = Z(), X = te(), fe = ee();
      if (!L.valid || !X.valid || !fe.valid) {
        const Je = [...L.errors, ...X.errors, ...fe.errors];
        B({ type: "error", text: Je.join(". ") }), O(!1);
        return;
      }
      e.notify && e.notify("save", { state: "start" });
      const Ee = h.map((Je) => {
        const { points: ut, ...Ge } = Je;
        return Ge;
      }), lt = await dw(e, "save_data", {
        display_name: o.trim(),
        question_text: l.trim(),
        image_url: n,
        hotspots: Ee,
        grading_mode: c,
        weight: b,
        max_attempts: d,
        show_feedback_mode: E
      });
      lt.success ? (B({ type: "success", text: "Changes saved successfully!" }), e.notify && e.notify("save", { state: "end" })) : (B({ type: "error", text: lt.error || "Failed to save" }), e.notify && e.notify("save", { state: "end" }));
    } catch (L) {
      console.error("Save error:", L), B({ type: "error", text: "An error occurred while saving" }), e.notify && e.notify("save", { state: "end" });
    } finally {
      O(!1);
    }
  }, V = () => {
    e.notify && e.notify("cancel", {});
  }, Te = (L) => {
    const X = [...h];
    X[H] = L, y(X), U(-1);
  }, ue = () => {
    const L = h[H];
    H !== -1 && !L.label && L.coordinates[2] === 10 && y(h.filter((X, fe) => fe !== H)), U(-1);
  };
  return /* @__PURE__ */ C.jsxs("div", { className: "image-hotspot-wizard-view", children: [
    P && /* @__PURE__ */ C.jsx(
      Xn,
      {
        variant: P.type === "success" ? "success" : "danger",
        dismissible: !0,
        onClose: () => B(null),
        className: "mb-3",
        children: P.text
      }
    ),
    /* @__PURE__ */ C.jsxs(tn, { activeKey: k, children: [
      /* @__PURE__ */ C.jsx(tn.Header, {}),
      /* @__PURE__ */ C.jsx(
        tn.Step,
        {
          eventKey: "step1",
          title: "Basic Settings",
          description: "Configure problem information",
          index: 0,
          onClick: _.has("step1") ? () => M("step1") : void 0,
          children: /* @__PURE__ */ C.jsx(
            kI,
            {
              displayName: o,
              questionText: l,
              gradingMode: c,
              maxAttempts: d,
              showFeedbackMode: E,
              onDisplayNameChange: s,
              onQuestionTextChange: u,
              onGradingModeChange: f,
              onMaxAttemptsChange: v,
              onShowFeedbackModeChange: x
            }
          )
        }
      ),
      /* @__PURE__ */ C.jsx(
        tn.Step,
        {
          eventKey: "step2",
          title: "Select Image",
          description: "Upload or choose an image",
          index: 1,
          onClick: _.has("step2") ? () => M("step2") : void 0,
          children: /* @__PURE__ */ C.jsx(
            CI,
            {
              imageUrl: n,
              uploading: r,
              onImageUpload: (L) => {
                i(L);
              },
              onOpenAssetPicker: a
            }
          )
        }
      ),
      /* @__PURE__ */ C.jsx(
        tn.Step,
        {
          eventKey: "step3",
          title: "Add Hotspots",
          description: "Create clickable regions",
          index: 2,
          onClick: _.has("step3") ? () => M("step3") : void 0,
          children: /* @__PURE__ */ C.jsx(
            AI,
            {
              imageUrl: n,
              hotspots: h,
              onHotspotsChange: y,
              editingIndex: H,
              onEditingIndexChange: U,
              onSaveHotspot: Te,
              onCancelEdit: ue,
              saveHotspotRef: Q
            }
          )
        }
      ),
      /* @__PURE__ */ C.jsx(
        tn.Step,
        {
          eventKey: "step4",
          title: "Review",
          description: "Review and save",
          index: 3,
          onClick: _.has("step4") ? () => M("step4") : void 0,
          children: /* @__PURE__ */ C.jsx(
            TI,
            {
              displayName: o,
              questionText: l,
              gradingMode: c,
              maxAttempts: d,
              showFeedbackMode: E,
              weight: b,
              imageUrl: n,
              hotspots: h,
              onNavigateToStep: M
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ C.jsx("div", { className: "image-hotspot-sticky-actions d-flex justify-content-end", children: H !== -1 ? (
      /* Show Save/Cancel when editing hotspot */
      /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
        /* @__PURE__ */ C.jsx(je, { variant: "tertiary", onClick: ue, className: "mr-2", children: "Cancel" }),
        /* @__PURE__ */ C.jsx(je, { variant: "primary", onClick: () => {
          Q.current && Q.current();
        }, children: "Save Hotspot" })
      ] })
    ) : (
      /* Show navigation buttons when not editing */
      /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
        k !== "step1" && /* @__PURE__ */ C.jsx(je, { variant: "outline-primary", onClick: R, disabled: T, className: "mr-2", children: "Back" }),
        /* @__PURE__ */ C.jsx("div", { style: { flexGrow: 1 } }),
        /* @__PURE__ */ C.jsx(je, { variant: "tertiary", onClick: V, disabled: T, className: "mr-2", children: "Cancel" }),
        k !== "step4" ? /* @__PURE__ */ C.jsx(je, { variant: "primary", onClick: N, disabled: T || r, children: "Next" }) : /* @__PURE__ */ C.jsx(je, { variant: "primary", onClick: K, disabled: T, children: T ? "Saving..." : "Save All Changes" })
      ] })
    ) })
  ] });
};
function II() {
  const e = "csrftoken", t = document.cookie.split(";");
  for (let n = 0; n < t.length; n++) {
    const r = t[n].trim();
    if (r.startsWith(e + "="))
      return r.substring(e.length + 1);
  }
  return "";
}
const PI = ({ runtime: e, fields: t }) => {
  const [n, r] = w.useState(t.image_url), [i, a] = w.useState(!1), [o, s] = w.useState(!1), [l, u] = w.useState(!1), [c, f] = w.useState([]), d = async ({ fileData: x, requestConfig: b, handleError: g }) => {
    a(!0);
    try {
      const h = `/assets/${t.course_id}/`, y = await fetch(h, {
        method: "POST",
        headers: {
          "X-CSRFToken": II(),
          Accept: "application/json"
        },
        body: x
      });
      let k;
      const S = y.headers.get("content-type");
      if (S && S.includes("application/json"))
        k = await y.json();
      else {
        const _ = await y.text();
        console.log("Non-JSON response:", _), k = { error: _ || "Upload failed" };
      }
      if (y.ok && k.asset)
        r(k.asset.url);
      else {
        const _ = k.error || k.message || JSON.stringify(k) || "Upload failed", A = new Error(_);
        g(A);
      }
    } catch (h) {
      console.error("Upload error:", h), g(h);
    } finally {
      a(!1);
    }
  }, v = async () => {
    s(!0), u(!0);
    try {
      const x = await dw(e, "list_course_assets", {});
      x.success && x.assets && f(x.assets);
    } catch (x) {
      console.error("Asset list error:", x);
    } finally {
      u(!1);
    }
  }, E = (x) => {
    r(x.url), s(!1);
  };
  return /* @__PURE__ */ C.jsxs("div", { className: "image-hotspot-studio-view", children: [
    /* @__PURE__ */ C.jsx(
      NI,
      {
        runtime: e,
        fields: t,
        imageUrl: n,
        uploading: i,
        onImageUpload: d,
        onOpenAssetPicker: v
      }
    ),
    /* @__PURE__ */ C.jsx(
      cf,
      {
        title: "Choose Course Image",
        isOpen: o,
        onClose: () => s(!1),
        size: "lg",
        isOverflowVisible: !1,
        footerNode: /* @__PURE__ */ C.jsx(je, { variant: "tertiary", onClick: () => s(!1), children: "Close" }),
        children: l ? /* @__PURE__ */ C.jsx("p", { children: "Loading images..." }) : c.length === 0 ? /* @__PURE__ */ C.jsx("p", { children: "No images found in course. Upload an image first." }) : /* @__PURE__ */ C.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "1rem" }, children: c.map((x) => /* @__PURE__ */ C.jsxs(
          "div",
          {
            onClick: () => E(x),
            style: {
              cursor: "pointer",
              border: n === x.url ? "2px solid #0075b4" : "1px solid #ccc",
              padding: "0.5rem",
              borderRadius: "4px",
              transition: "border-color 0.2s"
            },
            children: [
              /* @__PURE__ */ C.jsx(
                "img",
                {
                  src: x.thumbnail_url,
                  alt: x.filename,
                  style: { width: "100%", height: "100px", objectFit: "cover", borderRadius: "2px" }
                }
              ),
              /* @__PURE__ */ C.jsx("small", { style: { display: "block", marginTop: "0.5rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: x.filename })
            ]
          },
          x.url
        )) })
      }
    )
  ] });
}, DI = (e, t, n) => {
  e.element = t, bx(t).render(
    /* @__PURE__ */ C.jsxs(w.StrictMode, { children: [
      /* @__PURE__ */ C.jsx(h1, { locale: "en", children: /* @__PURE__ */ C.jsx(
        PI,
        {
          runtime: e,
          fields: n.fields
        }
      ) }),
      "    "
    ] })
  );
};
export {
  DI as renderBlock
};
//# sourceMappingURL=studio-ui.js.map
