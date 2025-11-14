var jv = Object.defineProperty;
var zv = (e, t, n) => t in e ? jv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var qc = (e, t, n) => zv(e, typeof t != "symbol" ? t + "" : t, n);
function jr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var tp = { exports: {} }, ya = {}, np = { exports: {} }, q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ji = Symbol.for("react.element"), Gv = Symbol.for("react.portal"), Wv = Symbol.for("react.fragment"), Xv = Symbol.for("react.strict_mode"), Qv = Symbol.for("react.profiler"), Kv = Symbol.for("react.provider"), qv = Symbol.for("react.context"), Yv = Symbol.for("react.forward_ref"), Zv = Symbol.for("react.suspense"), Jv = Symbol.for("react.memo"), eg = Symbol.for("react.lazy"), Yc = Symbol.iterator;
function tg(e) {
  return e === null || typeof e != "object" ? null : (e = Yc && e[Yc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var rp = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ip = Object.assign, sp = {};
function zr(e, t, n) {
  this.props = e, this.context = t, this.refs = sp, this.updater = n || rp;
}
zr.prototype.isReactComponent = {};
zr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
zr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ap() {
}
ap.prototype = zr.prototype;
function ou(e, t, n) {
  this.props = e, this.context = t, this.refs = sp, this.updater = n || rp;
}
var lu = ou.prototype = new ap();
lu.constructor = ou;
ip(lu, zr.prototype);
lu.isPureReactComponent = !0;
var Zc = Array.isArray, op = Object.prototype.hasOwnProperty, uu = { current: null }, lp = { key: !0, ref: !0, __self: !0, __source: !0 };
function up(e, t, n) {
  var r, i = {}, s = null, a = null;
  if (t != null) for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (s = "" + t.key), t) op.call(t, r) && !lp.hasOwnProperty(r) && (i[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) i.children = n;
  else if (1 < o) {
    for (var l = Array(o), u = 0; u < o; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) i[r] === void 0 && (i[r] = o[r]);
  return { $$typeof: ji, type: e, key: s, ref: a, props: i, _owner: uu.current };
}
function ng(e, t) {
  return { $$typeof: ji, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function cu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ji;
}
function rg(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Jc = /\/+/g;
function lo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? rg("" + e.key) : t.toString(36);
}
function Ts(e, t, n, r, i) {
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
        case ji:
        case Gv:
          a = !0;
      }
  }
  if (a) return a = e, i = i(a), e = r === "" ? "." + lo(a, 0) : r, Zc(i) ? (n = "", e != null && (n = e.replace(Jc, "$&/") + "/"), Ts(i, t, n, "", function(u) {
    return u;
  })) : i != null && (cu(i) && (i = ng(i, n + (!i.key || a && a.key === i.key ? "" : ("" + i.key).replace(Jc, "$&/") + "/") + e)), t.push(i)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", Zc(e)) for (var o = 0; o < e.length; o++) {
    s = e[o];
    var l = r + lo(s, o);
    a += Ts(s, t, n, l, i);
  }
  else if (l = tg(e), typeof l == "function") for (e = l.call(e), o = 0; !(s = e.next()).done; ) s = s.value, l = r + lo(s, o++), a += Ts(s, t, n, l, i);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function rs(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return Ts(e, r, "", "", function(s) {
    return t.call(n, s, i++);
  }), r;
}
function ig(e) {
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
var Ge = { current: null }, Ns = { transition: null }, sg = { ReactCurrentDispatcher: Ge, ReactCurrentBatchConfig: Ns, ReactCurrentOwner: uu };
function cp() {
  throw Error("act(...) is not supported in production builds of React.");
}
q.Children = { map: rs, forEach: function(e, t, n) {
  rs(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return rs(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return rs(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!cu(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
q.Component = zr;
q.Fragment = Wv;
q.Profiler = Qv;
q.PureComponent = ou;
q.StrictMode = Xv;
q.Suspense = Zv;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sg;
q.act = cp;
q.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ip({}, e.props), i = e.key, s = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, a = uu.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (l in t) op.call(t, l) && !lp.hasOwnProperty(l) && (r[l] = t[l] === void 0 && o !== void 0 ? o[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    o = Array(l);
    for (var u = 0; u < l; u++) o[u] = arguments[u + 2];
    r.children = o;
  }
  return { $$typeof: ji, type: e.type, key: i, ref: s, props: r, _owner: a };
};
q.createContext = function(e) {
  return e = { $$typeof: qv, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Kv, _context: e }, e.Consumer = e;
};
q.createElement = up;
q.createFactory = function(e) {
  var t = up.bind(null, e);
  return t.type = e, t;
};
q.createRef = function() {
  return { current: null };
};
q.forwardRef = function(e) {
  return { $$typeof: Yv, render: e };
};
q.isValidElement = cu;
q.lazy = function(e) {
  return { $$typeof: eg, _payload: { _status: -1, _result: e }, _init: ig };
};
q.memo = function(e, t) {
  return { $$typeof: Jv, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function(e) {
  var t = Ns.transition;
  Ns.transition = {};
  try {
    e();
  } finally {
    Ns.transition = t;
  }
};
q.unstable_act = cp;
q.useCallback = function(e, t) {
  return Ge.current.useCallback(e, t);
};
q.useContext = function(e) {
  return Ge.current.useContext(e);
};
q.useDebugValue = function() {
};
q.useDeferredValue = function(e) {
  return Ge.current.useDeferredValue(e);
};
q.useEffect = function(e, t) {
  return Ge.current.useEffect(e, t);
};
q.useId = function() {
  return Ge.current.useId();
};
q.useImperativeHandle = function(e, t, n) {
  return Ge.current.useImperativeHandle(e, t, n);
};
q.useInsertionEffect = function(e, t) {
  return Ge.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function(e, t) {
  return Ge.current.useLayoutEffect(e, t);
};
q.useMemo = function(e, t) {
  return Ge.current.useMemo(e, t);
};
q.useReducer = function(e, t, n) {
  return Ge.current.useReducer(e, t, n);
};
q.useRef = function(e) {
  return Ge.current.useRef(e);
};
q.useState = function(e) {
  return Ge.current.useState(e);
};
q.useSyncExternalStore = function(e, t, n) {
  return Ge.current.useSyncExternalStore(e, t, n);
};
q.useTransition = function() {
  return Ge.current.useTransition();
};
q.version = "18.3.1";
np.exports = q;
var C = np.exports;
const y = /* @__PURE__ */ jr(C);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ag = C, og = Symbol.for("react.element"), lg = Symbol.for("react.fragment"), ug = Object.prototype.hasOwnProperty, cg = ag.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, fg = { key: !0, ref: !0, __self: !0, __source: !0 };
function fp(e, t, n) {
  var r, i = {}, s = null, a = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t) ug.call(t, r) && !fg.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: og, type: e, key: s, ref: a, props: i, _owner: cg.current };
}
ya.Fragment = lg;
ya.jsx = fp;
ya.jsxs = fp;
tp.exports = ya;
var P = tp.exports, dp = { exports: {} }, ot = {}, pp = { exports: {} }, hp = {};
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
  function t(A, O) {
    var M = A.length;
    A.push(O);
    e: for (; 0 < M; ) {
      var K = M - 1 >>> 1, U = A[K];
      if (0 < i(U, O)) A[K] = O, A[M] = U, M = K;
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var O = A[0], M = A.pop();
    if (M !== O) {
      A[0] = M;
      e: for (var K = 0, U = A.length, wt = U >>> 1; K < wt; ) {
        var Se = 2 * (K + 1) - 1, Me = A[Se], De = Se + 1, kt = A[De];
        if (0 > i(Me, M)) De < U && 0 > i(kt, Me) ? (A[K] = kt, A[De] = M, K = De) : (A[K] = Me, A[Se] = M, K = Se);
        else if (De < U && 0 > i(kt, M)) A[K] = kt, A[De] = M, K = De;
        else break e;
      }
    }
    return O;
  }
  function i(A, O) {
    var M = A.sortIndex - O.sortIndex;
    return M !== 0 ? M : A.id - O.id;
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
  var l = [], u = [], c = 1, p = null, f = 3, v = !1, x = !1, E = !1, k = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(A) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) r(u);
      else if (O.startTime <= A) r(u), O.sortIndex = O.expirationTime, t(l, O);
      else break;
      O = n(u);
    }
  }
  function w(A) {
    if (E = !1, g(A), !x) if (n(l) !== null) x = !0, H(S);
    else {
      var O = n(u);
      O !== null && W(w, O.startTime - A);
    }
  }
  function S(A, O) {
    x = !1, E && (E = !1, m(N), N = -1), v = !0;
    var M = f;
    try {
      for (g(O), p = n(l); p !== null && (!(p.expirationTime > O) || A && !B()); ) {
        var K = p.callback;
        if (typeof K == "function") {
          p.callback = null, f = p.priorityLevel;
          var U = K(p.expirationTime <= O);
          O = e.unstable_now(), typeof U == "function" ? p.callback = U : p === n(l) && r(l), g(O);
        } else r(l);
        p = n(l);
      }
      if (p !== null) var wt = !0;
      else {
        var Se = n(u);
        Se !== null && W(w, Se.startTime - O), wt = !1;
      }
      return wt;
    } finally {
      p = null, f = M, v = !1;
    }
  }
  var _ = !1, T = null, N = -1, b = 5, R = -1;
  function B() {
    return !(e.unstable_now() - R < b);
  }
  function j() {
    if (T !== null) {
      var A = e.unstable_now();
      R = A;
      var O = !0;
      try {
        O = T(!0, A);
      } finally {
        O ? G() : (_ = !1, T = null);
      }
    } else _ = !1;
  }
  var G;
  if (typeof h == "function") G = function() {
    h(j);
  };
  else if (typeof MessageChannel < "u") {
    var ie = new MessageChannel(), de = ie.port2;
    ie.port1.onmessage = j, G = function() {
      de.postMessage(null);
    };
  } else G = function() {
    k(j, 0);
  };
  function H(A) {
    T = A, _ || (_ = !0, G());
  }
  function W(A, O) {
    N = k(function() {
      A(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(A) {
    A.callback = null;
  }, e.unstable_continueExecution = function() {
    x || v || (x = !0, H(S));
  }, e.unstable_forceFrameRate = function(A) {
    0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : b = 0 < A ? Math.floor(1e3 / A) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(A) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = f;
    }
    var M = f;
    f = O;
    try {
      return A();
    } finally {
      f = M;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(A, O) {
    switch (A) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        A = 3;
    }
    var M = f;
    f = A;
    try {
      return O();
    } finally {
      f = M;
    }
  }, e.unstable_scheduleCallback = function(A, O, M) {
    var K = e.unstable_now();
    switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? K + M : K) : M = K, A) {
      case 1:
        var U = -1;
        break;
      case 2:
        U = 250;
        break;
      case 5:
        U = 1073741823;
        break;
      case 4:
        U = 1e4;
        break;
      default:
        U = 5e3;
    }
    return U = M + U, A = { id: c++, callback: O, priorityLevel: A, startTime: M, expirationTime: U, sortIndex: -1 }, M > K ? (A.sortIndex = M, t(u, A), n(l) === null && A === n(u) && (E ? (m(N), N = -1) : E = !0, W(w, M - K))) : (A.sortIndex = U, t(l, A), x || v || (x = !0, H(S))), A;
  }, e.unstable_shouldYield = B, e.unstable_wrapCallback = function(A) {
    var O = f;
    return function() {
      var M = f;
      f = O;
      try {
        return A.apply(this, arguments);
      } finally {
        f = M;
      }
    };
  };
})(hp);
pp.exports = hp;
var dg = pp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pg = C, st = dg;
function I(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var mp = /* @__PURE__ */ new Set(), Ci = {};
function Jn(e, t) {
  Ir(e, t), Ir(e + "Capture", t);
}
function Ir(e, t) {
  for (Ci[e] = t, e = 0; e < t.length; e++) mp.add(t[e]);
}
var Kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xo = Object.prototype.hasOwnProperty, hg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ef = {}, tf = {};
function mg(e) {
  return Xo.call(tf, e) ? !0 : Xo.call(ef, e) ? !1 : hg.test(e) ? tf[e] = !0 : (ef[e] = !0, !1);
}
function vg(e, t, n, r) {
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
function gg(e, t, n, r) {
  if (t === null || typeof t > "u" || vg(e, t, n, r)) return !0;
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
function We(e, t, n, r, i, s, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = a;
}
var Ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ae[e] = new We(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ae[t] = new We(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ae[e] = new We(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ae[e] = new We(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ae[e] = new We(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ae[e] = new We(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ae[e] = new We(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ae[e] = new We(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ae[e] = new We(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var fu = /[\-:]([a-z])/g;
function du(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    fu,
    du
  );
  Ae[t] = new We(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(fu, du);
  Ae[t] = new We(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(fu, du);
  Ae[t] = new We(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ae[e] = new We(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ae.xlinkHref = new We("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ae[e] = new We(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function pu(e, t, n, r) {
  var i = Ae.hasOwnProperty(t) ? Ae[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (gg(t, n, i, r) && (n = null), r || i === null ? mg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var tn = pg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, is = Symbol.for("react.element"), ur = Symbol.for("react.portal"), cr = Symbol.for("react.fragment"), hu = Symbol.for("react.strict_mode"), Qo = Symbol.for("react.profiler"), vp = Symbol.for("react.provider"), gp = Symbol.for("react.context"), mu = Symbol.for("react.forward_ref"), Ko = Symbol.for("react.suspense"), qo = Symbol.for("react.suspense_list"), vu = Symbol.for("react.memo"), an = Symbol.for("react.lazy"), yp = Symbol.for("react.offscreen"), nf = Symbol.iterator;
function Yr(e) {
  return e === null || typeof e != "object" ? null : (e = nf && e[nf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var fe = Object.assign, uo;
function ai(e) {
  if (uo === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    uo = t && t[1] || "";
  }
  return `
` + uo + e;
}
var co = !1;
function fo(e, t) {
  if (!e || co) return "";
  co = !0;
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
    co = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ai(e) : "";
}
function yg(e) {
  switch (e.tag) {
    case 5:
      return ai(e.type);
    case 16:
      return ai("Lazy");
    case 13:
      return ai("Suspense");
    case 19:
      return ai("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = fo(e.type, !1), e;
    case 11:
      return e = fo(e.type.render, !1), e;
    case 1:
      return e = fo(e.type, !0), e;
    default:
      return "";
  }
}
function Yo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case cr:
      return "Fragment";
    case ur:
      return "Portal";
    case Qo:
      return "Profiler";
    case hu:
      return "StrictMode";
    case Ko:
      return "Suspense";
    case qo:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case gp:
      return (e.displayName || "Context") + ".Consumer";
    case vp:
      return (e._context.displayName || "Context") + ".Provider";
    case mu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case vu:
      return t = e.displayName || null, t !== null ? t : Yo(e.type) || "Memo";
    case an:
      t = e._payload, e = e._init;
      try {
        return Yo(e(t));
      } catch {
      }
  }
  return null;
}
function Eg(e) {
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
      return Yo(t);
    case 8:
      return t === hu ? "StrictMode" : "Mode";
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
function Cn(e) {
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
function Ep(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function xg(e) {
  var t = Ep(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function ss(e) {
  e._valueTracker || (e._valueTracker = xg(e));
}
function xp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ep(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Us(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Zo(e, t) {
  var n = t.checked;
  return fe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function rf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Cn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function wp(e, t) {
  t = t.checked, t != null && pu(e, "checked", t, !1);
}
function Jo(e, t) {
  wp(e, t);
  var n = Cn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? el(e, t.type, n) : t.hasOwnProperty("defaultValue") && el(e, t.type, Cn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function sf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function el(e, t, n) {
  (t !== "number" || Us(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var oi = Array.isArray;
function Cr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Cn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function tl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return fe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function af(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(I(92));
      if (oi(n)) {
        if (1 < n.length) throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Cn(n) };
}
function kp(e, t) {
  var n = Cn(t.value), r = Cn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function of(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Cp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function nl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Cp(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var as, Sp = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (as = as || document.createElement("div"), as.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = as.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Si(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var di = {
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
}, wg = ["Webkit", "ms", "Moz", "O"];
Object.keys(di).forEach(function(e) {
  wg.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), di[t] = di[e];
  });
});
function _p(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || di.hasOwnProperty(e) && di[e] ? ("" + t).trim() : t + "px";
}
function Tp(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = _p(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var kg = fe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function rl(e, t) {
  if (t) {
    if (kg[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(I(62));
  }
}
function il(e, t) {
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
var sl = null;
function gu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var al = null, Sr = null, _r = null;
function lf(e) {
  if (e = Wi(e)) {
    if (typeof al != "function") throw Error(I(280));
    var t = e.stateNode;
    t && (t = Ca(t), al(e.stateNode, e.type, t));
  }
}
function Np(e) {
  Sr ? _r ? _r.push(e) : _r = [e] : Sr = e;
}
function Ap() {
  if (Sr) {
    var e = Sr, t = _r;
    if (_r = Sr = null, lf(e), t) for (e = 0; e < t.length; e++) lf(t[e]);
  }
}
function Ip(e, t) {
  return e(t);
}
function Rp() {
}
var po = !1;
function bp(e, t, n) {
  if (po) return e(t, n);
  po = !0;
  try {
    return Ip(e, t, n);
  } finally {
    po = !1, (Sr !== null || _r !== null) && (Rp(), Ap());
  }
}
function _i(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ca(n);
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
var ol = !1;
if (Kt) try {
  var Zr = {};
  Object.defineProperty(Zr, "passive", { get: function() {
    ol = !0;
  } }), window.addEventListener("test", Zr, Zr), window.removeEventListener("test", Zr, Zr);
} catch {
  ol = !1;
}
function Cg(e, t, n, r, i, s, a, o, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var pi = !1, $s = null, js = !1, ll = null, Sg = { onError: function(e) {
  pi = !0, $s = e;
} };
function _g(e, t, n, r, i, s, a, o, l) {
  pi = !1, $s = null, Cg.apply(Sg, arguments);
}
function Tg(e, t, n, r, i, s, a, o, l) {
  if (_g.apply(this, arguments), pi) {
    if (pi) {
      var u = $s;
      pi = !1, $s = null;
    } else throw Error(I(198));
    js || (js = !0, ll = u);
  }
}
function er(e) {
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
function Pp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function uf(e) {
  if (er(e) !== e) throw Error(I(188));
}
function Ng(e) {
  var t = e.alternate;
  if (!t) {
    if (t = er(e), t === null) throw Error(I(188));
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
        if (s === n) return uf(i), e;
        if (s === r) return uf(i), t;
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
function Fp(e) {
  return e = Ng(e), e !== null ? Op(e) : null;
}
function Op(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Op(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Mp = st.unstable_scheduleCallback, cf = st.unstable_cancelCallback, Ag = st.unstable_shouldYield, Ig = st.unstable_requestPaint, he = st.unstable_now, Rg = st.unstable_getCurrentPriorityLevel, yu = st.unstable_ImmediatePriority, Dp = st.unstable_UserBlockingPriority, zs = st.unstable_NormalPriority, bg = st.unstable_LowPriority, Lp = st.unstable_IdlePriority, Ea = null, Lt = null;
function Pg(e) {
  if (Lt && typeof Lt.onCommitFiberRoot == "function") try {
    Lt.onCommitFiberRoot(Ea, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var At = Math.clz32 ? Math.clz32 : Mg, Fg = Math.log, Og = Math.LN2;
function Mg(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Fg(e) / Og | 0) | 0;
}
var os = 64, ls = 4194304;
function li(e) {
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
function Gs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, s = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var o = a & ~i;
    o !== 0 ? r = li(o) : (s &= a, s !== 0 && (r = li(s)));
  } else a = n & ~i, a !== 0 ? r = li(a) : s !== 0 && (r = li(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - At(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function Dg(e, t) {
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
function Lg(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var a = 31 - At(s), o = 1 << a, l = i[a];
    l === -1 ? (!(o & n) || o & r) && (i[a] = Dg(o, t)) : l <= t && (e.expiredLanes |= o), s &= ~o;
  }
}
function ul(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Bp() {
  var e = os;
  return os <<= 1, !(os & 4194240) && (os = 64), e;
}
function ho(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function zi(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - At(t), e[t] = n;
}
function Bg(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - At(n), s = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s;
  }
}
function Eu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - At(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var ee = 0;
function Vp(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Hp, xu, Up, $p, jp, cl = !1, us = [], pn = null, hn = null, mn = null, Ti = /* @__PURE__ */ new Map(), Ni = /* @__PURE__ */ new Map(), un = [], Vg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ff(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      pn = null;
      break;
    case "dragenter":
    case "dragleave":
      hn = null;
      break;
    case "mouseover":
    case "mouseout":
      mn = null;
      break;
    case "pointerover":
    case "pointerout":
      Ti.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ni.delete(t.pointerId);
  }
}
function Jr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [i] }, t !== null && (t = Wi(t), t !== null && xu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function Hg(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return pn = Jr(pn, e, t, n, r, i), !0;
    case "dragenter":
      return hn = Jr(hn, e, t, n, r, i), !0;
    case "mouseover":
      return mn = Jr(mn, e, t, n, r, i), !0;
    case "pointerover":
      var s = i.pointerId;
      return Ti.set(s, Jr(Ti.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return s = i.pointerId, Ni.set(s, Jr(Ni.get(s) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function zp(e) {
  var t = Bn(e.target);
  if (t !== null) {
    var n = er(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Pp(n), t !== null) {
          e.blockedOn = t, jp(e.priority, function() {
            Up(n);
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
function As(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = fl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      sl = r, n.target.dispatchEvent(r), sl = null;
    } else return t = Wi(n), t !== null && xu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function df(e, t, n) {
  As(e) && n.delete(t);
}
function Ug() {
  cl = !1, pn !== null && As(pn) && (pn = null), hn !== null && As(hn) && (hn = null), mn !== null && As(mn) && (mn = null), Ti.forEach(df), Ni.forEach(df);
}
function ei(e, t) {
  e.blockedOn === t && (e.blockedOn = null, cl || (cl = !0, st.unstable_scheduleCallback(st.unstable_NormalPriority, Ug)));
}
function Ai(e) {
  function t(i) {
    return ei(i, e);
  }
  if (0 < us.length) {
    ei(us[0], e);
    for (var n = 1; n < us.length; n++) {
      var r = us[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (pn !== null && ei(pn, e), hn !== null && ei(hn, e), mn !== null && ei(mn, e), Ti.forEach(t), Ni.forEach(t), n = 0; n < un.length; n++) r = un[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < un.length && (n = un[0], n.blockedOn === null); ) zp(n), n.blockedOn === null && un.shift();
}
var Tr = tn.ReactCurrentBatchConfig, Ws = !0;
function $g(e, t, n, r) {
  var i = ee, s = Tr.transition;
  Tr.transition = null;
  try {
    ee = 1, wu(e, t, n, r);
  } finally {
    ee = i, Tr.transition = s;
  }
}
function jg(e, t, n, r) {
  var i = ee, s = Tr.transition;
  Tr.transition = null;
  try {
    ee = 4, wu(e, t, n, r);
  } finally {
    ee = i, Tr.transition = s;
  }
}
function wu(e, t, n, r) {
  if (Ws) {
    var i = fl(e, t, n, r);
    if (i === null) So(e, t, r, Xs, n), ff(e, r);
    else if (Hg(i, e, t, n, r)) r.stopPropagation();
    else if (ff(e, r), t & 4 && -1 < Vg.indexOf(e)) {
      for (; i !== null; ) {
        var s = Wi(i);
        if (s !== null && Hp(s), s = fl(e, t, n, r), s === null && So(e, t, r, Xs, n), s === i) break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else So(e, t, r, null, n);
  }
}
var Xs = null;
function fl(e, t, n, r) {
  if (Xs = null, e = gu(r), e = Bn(e), e !== null) if (t = er(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Pp(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Xs = e, null;
}
function Gp(e) {
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
      switch (Rg()) {
        case yu:
          return 1;
        case Dp:
          return 4;
        case zs:
        case bg:
          return 16;
        case Lp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var fn = null, ku = null, Is = null;
function Wp() {
  if (Is) return Is;
  var e, t = ku, n = t.length, r, i = "value" in fn ? fn.value : fn.textContent, s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[s - r]; r++) ;
  return Is = i.slice(e, 1 < r ? 1 - r : void 0);
}
function Rs(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function cs() {
  return !0;
}
function pf() {
  return !1;
}
function lt(e) {
  function t(n, r, i, s, a) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = a, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(s) : s[o]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? cs : pf, this.isPropagationStopped = pf, this;
  }
  return fe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = cs);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = cs);
  }, persist: function() {
  }, isPersistent: cs }), t;
}
var Gr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Cu = lt(Gr), Gi = fe({}, Gr, { view: 0, detail: 0 }), zg = lt(Gi), mo, vo, ti, xa = fe({}, Gi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Su, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ti && (ti && e.type === "mousemove" ? (mo = e.screenX - ti.screenX, vo = e.screenY - ti.screenY) : vo = mo = 0, ti = e), mo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : vo;
} }), hf = lt(xa), Gg = fe({}, xa, { dataTransfer: 0 }), Wg = lt(Gg), Xg = fe({}, Gi, { relatedTarget: 0 }), go = lt(Xg), Qg = fe({}, Gr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Kg = lt(Qg), qg = fe({}, Gr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Yg = lt(qg), Zg = fe({}, Gr, { data: 0 }), mf = lt(Zg), Jg = {
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
}, e0 = {
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
}, t0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function n0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = t0[e]) ? !!t[e] : !1;
}
function Su() {
  return n0;
}
var r0 = fe({}, Gi, { key: function(e) {
  if (e.key) {
    var t = Jg[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Rs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? e0[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Su, charCode: function(e) {
  return e.type === "keypress" ? Rs(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Rs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), i0 = lt(r0), s0 = fe({}, xa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), vf = lt(s0), a0 = fe({}, Gi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Su }), o0 = lt(a0), l0 = fe({}, Gr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), u0 = lt(l0), c0 = fe({}, xa, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), f0 = lt(c0), d0 = [9, 13, 27, 32], _u = Kt && "CompositionEvent" in window, hi = null;
Kt && "documentMode" in document && (hi = document.documentMode);
var p0 = Kt && "TextEvent" in window && !hi, Xp = Kt && (!_u || hi && 8 < hi && 11 >= hi), gf = " ", yf = !1;
function Qp(e, t) {
  switch (e) {
    case "keyup":
      return d0.indexOf(t.keyCode) !== -1;
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
function Kp(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var fr = !1;
function h0(e, t) {
  switch (e) {
    case "compositionend":
      return Kp(t);
    case "keypress":
      return t.which !== 32 ? null : (yf = !0, gf);
    case "textInput":
      return e = t.data, e === gf && yf ? null : e;
    default:
      return null;
  }
}
function m0(e, t) {
  if (fr) return e === "compositionend" || !_u && Qp(e, t) ? (e = Wp(), Is = ku = fn = null, fr = !1, e) : null;
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
      return Xp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var v0 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ef(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!v0[e.type] : t === "textarea";
}
function qp(e, t, n, r) {
  Np(r), t = Qs(t, "onChange"), 0 < t.length && (n = new Cu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var mi = null, Ii = null;
function g0(e) {
  oh(e, 0);
}
function wa(e) {
  var t = hr(e);
  if (xp(t)) return e;
}
function y0(e, t) {
  if (e === "change") return t;
}
var Yp = !1;
if (Kt) {
  var yo;
  if (Kt) {
    var Eo = "oninput" in document;
    if (!Eo) {
      var xf = document.createElement("div");
      xf.setAttribute("oninput", "return;"), Eo = typeof xf.oninput == "function";
    }
    yo = Eo;
  } else yo = !1;
  Yp = yo && (!document.documentMode || 9 < document.documentMode);
}
function wf() {
  mi && (mi.detachEvent("onpropertychange", Zp), Ii = mi = null);
}
function Zp(e) {
  if (e.propertyName === "value" && wa(Ii)) {
    var t = [];
    qp(t, Ii, e, gu(e)), bp(g0, t);
  }
}
function E0(e, t, n) {
  e === "focusin" ? (wf(), mi = t, Ii = n, mi.attachEvent("onpropertychange", Zp)) : e === "focusout" && wf();
}
function x0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return wa(Ii);
}
function w0(e, t) {
  if (e === "click") return wa(t);
}
function k0(e, t) {
  if (e === "input" || e === "change") return wa(t);
}
function C0(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Rt = typeof Object.is == "function" ? Object.is : C0;
function Ri(e, t) {
  if (Rt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Xo.call(t, i) || !Rt(e[i], t[i])) return !1;
  }
  return !0;
}
function kf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Cf(e, t) {
  var n = kf(e);
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
    n = kf(n);
  }
}
function Jp(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Jp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function eh() {
  for (var e = window, t = Us(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Us(e.document);
  }
  return t;
}
function Tu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function S0(e) {
  var t = eh(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Jp(n.ownerDocument.documentElement, n)) {
    if (r !== null && Tu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, s = Math.min(r.start, i);
        r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = Cf(n, s);
        var a = Cf(
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
var _0 = Kt && "documentMode" in document && 11 >= document.documentMode, dr = null, dl = null, vi = null, pl = !1;
function Sf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  pl || dr == null || dr !== Us(r) || (r = dr, "selectionStart" in r && Tu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), vi && Ri(vi, r) || (vi = r, r = Qs(dl, "onSelect"), 0 < r.length && (t = new Cu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = dr)));
}
function fs(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var pr = { animationend: fs("Animation", "AnimationEnd"), animationiteration: fs("Animation", "AnimationIteration"), animationstart: fs("Animation", "AnimationStart"), transitionend: fs("Transition", "TransitionEnd") }, xo = {}, th = {};
Kt && (th = document.createElement("div").style, "AnimationEvent" in window || (delete pr.animationend.animation, delete pr.animationiteration.animation, delete pr.animationstart.animation), "TransitionEvent" in window || delete pr.transitionend.transition);
function ka(e) {
  if (xo[e]) return xo[e];
  if (!pr[e]) return e;
  var t = pr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in th) return xo[e] = t[n];
  return e;
}
var nh = ka("animationend"), rh = ka("animationiteration"), ih = ka("animationstart"), sh = ka("transitionend"), ah = /* @__PURE__ */ new Map(), _f = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function An(e, t) {
  ah.set(e, t), Jn(t, [e]);
}
for (var wo = 0; wo < _f.length; wo++) {
  var ko = _f[wo], T0 = ko.toLowerCase(), N0 = ko[0].toUpperCase() + ko.slice(1);
  An(T0, "on" + N0);
}
An(nh, "onAnimationEnd");
An(rh, "onAnimationIteration");
An(ih, "onAnimationStart");
An("dblclick", "onDoubleClick");
An("focusin", "onFocus");
An("focusout", "onBlur");
An(sh, "onTransitionEnd");
Ir("onMouseEnter", ["mouseout", "mouseover"]);
Ir("onMouseLeave", ["mouseout", "mouseover"]);
Ir("onPointerEnter", ["pointerout", "pointerover"]);
Ir("onPointerLeave", ["pointerout", "pointerover"]);
Jn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Jn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Jn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Jn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ui = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), A0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ui));
function Tf(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Tg(r, t, void 0, e), e.currentTarget = null;
}
function oh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var a = r.length - 1; 0 <= a; a--) {
        var o = r[a], l = o.instance, u = o.currentTarget;
        if (o = o.listener, l !== s && i.isPropagationStopped()) break e;
        Tf(i, o, u), s = l;
      }
      else for (a = 0; a < r.length; a++) {
        if (o = r[a], l = o.instance, u = o.currentTarget, o = o.listener, l !== s && i.isPropagationStopped()) break e;
        Tf(i, o, u), s = l;
      }
    }
  }
  if (js) throw e = ll, js = !1, ll = null, e;
}
function se(e, t) {
  var n = t[yl];
  n === void 0 && (n = t[yl] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (lh(t, e, 2, !1), n.add(r));
}
function Co(e, t, n) {
  var r = 0;
  t && (r |= 4), lh(n, e, r, t);
}
var ds = "_reactListening" + Math.random().toString(36).slice(2);
function bi(e) {
  if (!e[ds]) {
    e[ds] = !0, mp.forEach(function(n) {
      n !== "selectionchange" && (A0.has(n) || Co(n, !1, e), Co(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ds] || (t[ds] = !0, Co("selectionchange", !1, t));
  }
}
function lh(e, t, n, r) {
  switch (Gp(t)) {
    case 1:
      var i = $g;
      break;
    case 4:
      i = jg;
      break;
    default:
      i = wu;
  }
  n = i.bind(null, t, n, e), i = void 0, !ol || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function So(e, t, n, r, i) {
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
        if (a = Bn(o), a === null) return;
        if (l = a.tag, l === 5 || l === 6) {
          r = s = a;
          continue e;
        }
        o = o.parentNode;
      }
    }
    r = r.return;
  }
  bp(function() {
    var u = s, c = gu(n), p = [];
    e: {
      var f = ah.get(e);
      if (f !== void 0) {
        var v = Cu, x = e;
        switch (e) {
          case "keypress":
            if (Rs(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = i0;
            break;
          case "focusin":
            x = "focus", v = go;
            break;
          case "focusout":
            x = "blur", v = go;
            break;
          case "beforeblur":
          case "afterblur":
            v = go;
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
            v = hf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Wg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = o0;
            break;
          case nh:
          case rh:
          case ih:
            v = Kg;
            break;
          case sh:
            v = u0;
            break;
          case "scroll":
            v = zg;
            break;
          case "wheel":
            v = f0;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Yg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = vf;
        }
        var E = (t & 4) !== 0, k = !E && e === "scroll", m = E ? f !== null ? f + "Capture" : null : f;
        E = [];
        for (var h = u, g; h !== null; ) {
          g = h;
          var w = g.stateNode;
          if (g.tag === 5 && w !== null && (g = w, m !== null && (w = _i(h, m), w != null && E.push(Pi(h, w, g)))), k) break;
          h = h.return;
        }
        0 < E.length && (f = new v(f, x, null, n, c), p.push({ event: f, listeners: E }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", f && n !== sl && (x = n.relatedTarget || n.fromElement) && (Bn(x) || x[qt])) break e;
        if ((v || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, v ? (x = n.relatedTarget || n.toElement, v = u, x = x ? Bn(x) : null, x !== null && (k = er(x), x !== k || x.tag !== 5 && x.tag !== 6) && (x = null)) : (v = null, x = u), v !== x)) {
          if (E = hf, w = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (E = vf, w = "onPointerLeave", m = "onPointerEnter", h = "pointer"), k = v == null ? f : hr(v), g = x == null ? f : hr(x), f = new E(w, h + "leave", v, n, c), f.target = k, f.relatedTarget = g, w = null, Bn(c) === u && (E = new E(m, h + "enter", x, n, c), E.target = g, E.relatedTarget = k, w = E), k = w, v && x) t: {
            for (E = v, m = x, h = 0, g = E; g; g = or(g)) h++;
            for (g = 0, w = m; w; w = or(w)) g++;
            for (; 0 < h - g; ) E = or(E), h--;
            for (; 0 < g - h; ) m = or(m), g--;
            for (; h--; ) {
              if (E === m || m !== null && E === m.alternate) break t;
              E = or(E), m = or(m);
            }
            E = null;
          }
          else E = null;
          v !== null && Nf(p, f, v, E, !1), x !== null && k !== null && Nf(p, k, x, E, !0);
        }
      }
      e: {
        if (f = u ? hr(u) : window, v = f.nodeName && f.nodeName.toLowerCase(), v === "select" || v === "input" && f.type === "file") var S = y0;
        else if (Ef(f)) if (Yp) S = k0;
        else {
          S = x0;
          var _ = E0;
        }
        else (v = f.nodeName) && v.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (S = w0);
        if (S && (S = S(e, u))) {
          qp(p, S, n, c);
          break e;
        }
        _ && _(e, f, u), e === "focusout" && (_ = f._wrapperState) && _.controlled && f.type === "number" && el(f, "number", f.value);
      }
      switch (_ = u ? hr(u) : window, e) {
        case "focusin":
          (Ef(_) || _.contentEditable === "true") && (dr = _, dl = u, vi = null);
          break;
        case "focusout":
          vi = dl = dr = null;
          break;
        case "mousedown":
          pl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          pl = !1, Sf(p, n, c);
          break;
        case "selectionchange":
          if (_0) break;
        case "keydown":
        case "keyup":
          Sf(p, n, c);
      }
      var T;
      if (_u) e: {
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
      else fr ? Qp(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (Xp && n.locale !== "ko" && (fr || N !== "onCompositionStart" ? N === "onCompositionEnd" && fr && (T = Wp()) : (fn = c, ku = "value" in fn ? fn.value : fn.textContent, fr = !0)), _ = Qs(u, N), 0 < _.length && (N = new mf(N, e, null, n, c), p.push({ event: N, listeners: _ }), T ? N.data = T : (T = Kp(n), T !== null && (N.data = T)))), (T = p0 ? h0(e, n) : m0(e, n)) && (u = Qs(u, "onBeforeInput"), 0 < u.length && (c = new mf("onBeforeInput", "beforeinput", null, n, c), p.push({ event: c, listeners: u }), c.data = T));
    }
    oh(p, t);
  });
}
function Pi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Qs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, s = i.stateNode;
    i.tag === 5 && s !== null && (i = s, s = _i(e, n), s != null && r.unshift(Pi(e, s, i)), s = _i(e, t), s != null && r.push(Pi(e, s, i))), e = e.return;
  }
  return r;
}
function or(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Nf(e, t, n, r, i) {
  for (var s = t._reactName, a = []; n !== null && n !== r; ) {
    var o = n, l = o.alternate, u = o.stateNode;
    if (l !== null && l === r) break;
    o.tag === 5 && u !== null && (o = u, i ? (l = _i(n, s), l != null && a.unshift(Pi(n, l, o))) : i || (l = _i(n, s), l != null && a.push(Pi(n, l, o)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var I0 = /\r\n?/g, R0 = /\u0000|\uFFFD/g;
function Af(e) {
  return (typeof e == "string" ? e : "" + e).replace(I0, `
`).replace(R0, "");
}
function ps(e, t, n) {
  if (t = Af(t), Af(e) !== t && n) throw Error(I(425));
}
function Ks() {
}
var hl = null, ml = null;
function vl(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var gl = typeof setTimeout == "function" ? setTimeout : void 0, b0 = typeof clearTimeout == "function" ? clearTimeout : void 0, If = typeof Promise == "function" ? Promise : void 0, P0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof If < "u" ? function(e) {
  return If.resolve(null).then(e).catch(F0);
} : gl;
function F0(e) {
  setTimeout(function() {
    throw e;
  });
}
function _o(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), Ai(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Ai(t);
}
function vn(e) {
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
function Rf(e) {
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
var Wr = Math.random().toString(36).slice(2), Mt = "__reactFiber$" + Wr, Fi = "__reactProps$" + Wr, qt = "__reactContainer$" + Wr, yl = "__reactEvents$" + Wr, O0 = "__reactListeners$" + Wr, M0 = "__reactHandles$" + Wr;
function Bn(e) {
  var t = e[Mt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[qt] || n[Mt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Rf(e); e !== null; ) {
        if (n = e[Mt]) return n;
        e = Rf(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Wi(e) {
  return e = e[Mt] || e[qt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function hr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(I(33));
}
function Ca(e) {
  return e[Fi] || null;
}
var El = [], mr = -1;
function In(e) {
  return { current: e };
}
function oe(e) {
  0 > mr || (e.current = El[mr], El[mr] = null, mr--);
}
function re(e, t) {
  mr++, El[mr] = e.current, e.current = t;
}
var Sn = {}, Oe = In(Sn), qe = In(!1), Wn = Sn;
function Rr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Sn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, s;
  for (s in n) i[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function Ye(e) {
  return e = e.childContextTypes, e != null;
}
function qs() {
  oe(qe), oe(Oe);
}
function bf(e, t, n) {
  if (Oe.current !== Sn) throw Error(I(168));
  re(Oe, t), re(qe, n);
}
function uh(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(I(108, Eg(e) || "Unknown", i));
  return fe({}, n, r);
}
function Ys(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Sn, Wn = Oe.current, re(Oe, e), re(qe, qe.current), !0;
}
function Pf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(I(169));
  n ? (e = uh(e, t, Wn), r.__reactInternalMemoizedMergedChildContext = e, oe(qe), oe(Oe), re(Oe, e)) : oe(qe), re(qe, n);
}
var zt = null, Sa = !1, To = !1;
function ch(e) {
  zt === null ? zt = [e] : zt.push(e);
}
function D0(e) {
  Sa = !0, ch(e);
}
function Rn() {
  if (!To && zt !== null) {
    To = !0;
    var e = 0, t = ee;
    try {
      var n = zt;
      for (ee = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      zt = null, Sa = !1;
    } catch (i) {
      throw zt !== null && (zt = zt.slice(e + 1)), Mp(yu, Rn), i;
    } finally {
      ee = t, To = !1;
    }
  }
  return null;
}
var vr = [], gr = 0, Zs = null, Js = 0, ct = [], ft = 0, Xn = null, Wt = 1, Xt = "";
function On(e, t) {
  vr[gr++] = Js, vr[gr++] = Zs, Zs = e, Js = t;
}
function fh(e, t, n) {
  ct[ft++] = Wt, ct[ft++] = Xt, ct[ft++] = Xn, Xn = e;
  var r = Wt;
  e = Xt;
  var i = 32 - At(r) - 1;
  r &= ~(1 << i), n += 1;
  var s = 32 - At(t) + i;
  if (30 < s) {
    var a = i - i % 5;
    s = (r & (1 << a) - 1).toString(32), r >>= a, i -= a, Wt = 1 << 32 - At(t) + i | n << i | r, Xt = s + e;
  } else Wt = 1 << s | n << i | r, Xt = e;
}
function Nu(e) {
  e.return !== null && (On(e, 1), fh(e, 1, 0));
}
function Au(e) {
  for (; e === Zs; ) Zs = vr[--gr], vr[gr] = null, Js = vr[--gr], vr[gr] = null;
  for (; e === Xn; ) Xn = ct[--ft], ct[ft] = null, Xt = ct[--ft], ct[ft] = null, Wt = ct[--ft], ct[ft] = null;
}
var it = null, rt = null, le = !1, Nt = null;
function dh(e, t) {
  var n = dt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ff(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, it = e, rt = vn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, it = e, rt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Xn !== null ? { id: Wt, overflow: Xt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = dt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, it = e, rt = null, !0) : !1;
    default:
      return !1;
  }
}
function xl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function wl(e) {
  if (le) {
    var t = rt;
    if (t) {
      var n = t;
      if (!Ff(e, t)) {
        if (xl(e)) throw Error(I(418));
        t = vn(n.nextSibling);
        var r = it;
        t && Ff(e, t) ? dh(r, n) : (e.flags = e.flags & -4097 | 2, le = !1, it = e);
      }
    } else {
      if (xl(e)) throw Error(I(418));
      e.flags = e.flags & -4097 | 2, le = !1, it = e;
    }
  }
}
function Of(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  it = e;
}
function hs(e) {
  if (e !== it) return !1;
  if (!le) return Of(e), le = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !vl(e.type, e.memoizedProps)), t && (t = rt)) {
    if (xl(e)) throw ph(), Error(I(418));
    for (; t; ) dh(e, t), t = vn(t.nextSibling);
  }
  if (Of(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              rt = vn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      rt = null;
    }
  } else rt = it ? vn(e.stateNode.nextSibling) : null;
  return !0;
}
function ph() {
  for (var e = rt; e; ) e = vn(e.nextSibling);
}
function br() {
  rt = it = null, le = !1;
}
function Iu(e) {
  Nt === null ? Nt = [e] : Nt.push(e);
}
var L0 = tn.ReactCurrentBatchConfig;
function ni(e, t, n) {
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
function ms(e, t) {
  throw e = Object.prototype.toString.call(t), Error(I(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Mf(e) {
  var t = e._init;
  return t(e._payload);
}
function hh(e) {
  function t(m, h) {
    if (e) {
      var g = m.deletions;
      g === null ? (m.deletions = [h], m.flags |= 16) : g.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), h = h.sibling;
    return null;
  }
  function r(m, h) {
    for (m = /* @__PURE__ */ new Map(); h !== null; ) h.key !== null ? m.set(h.key, h) : m.set(h.index, h), h = h.sibling;
    return m;
  }
  function i(m, h) {
    return m = xn(m, h), m.index = 0, m.sibling = null, m;
  }
  function s(m, h, g) {
    return m.index = g, e ? (g = m.alternate, g !== null ? (g = g.index, g < h ? (m.flags |= 2, h) : g) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function o(m, h, g, w) {
    return h === null || h.tag !== 6 ? (h = Fo(g, m.mode, w), h.return = m, h) : (h = i(h, g), h.return = m, h);
  }
  function l(m, h, g, w) {
    var S = g.type;
    return S === cr ? c(m, h, g.props.children, w, g.key) : h !== null && (h.elementType === S || typeof S == "object" && S !== null && S.$$typeof === an && Mf(S) === h.type) ? (w = i(h, g.props), w.ref = ni(m, h, g), w.return = m, w) : (w = Ls(g.type, g.key, g.props, null, m.mode, w), w.ref = ni(m, h, g), w.return = m, w);
  }
  function u(m, h, g, w) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== g.containerInfo || h.stateNode.implementation !== g.implementation ? (h = Oo(g, m.mode, w), h.return = m, h) : (h = i(h, g.children || []), h.return = m, h);
  }
  function c(m, h, g, w, S) {
    return h === null || h.tag !== 7 ? (h = jn(g, m.mode, w, S), h.return = m, h) : (h = i(h, g), h.return = m, h);
  }
  function p(m, h, g) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = Fo("" + h, m.mode, g), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case is:
          return g = Ls(h.type, h.key, h.props, null, m.mode, g), g.ref = ni(m, null, h), g.return = m, g;
        case ur:
          return h = Oo(h, m.mode, g), h.return = m, h;
        case an:
          var w = h._init;
          return p(m, w(h._payload), g);
      }
      if (oi(h) || Yr(h)) return h = jn(h, m.mode, g, null), h.return = m, h;
      ms(m, h);
    }
    return null;
  }
  function f(m, h, g, w) {
    var S = h !== null ? h.key : null;
    if (typeof g == "string" && g !== "" || typeof g == "number") return S !== null ? null : o(m, h, "" + g, w);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case is:
          return g.key === S ? l(m, h, g, w) : null;
        case ur:
          return g.key === S ? u(m, h, g, w) : null;
        case an:
          return S = g._init, f(
            m,
            h,
            S(g._payload),
            w
          );
      }
      if (oi(g) || Yr(g)) return S !== null ? null : c(m, h, g, w, null);
      ms(m, g);
    }
    return null;
  }
  function v(m, h, g, w, S) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return m = m.get(g) || null, o(h, m, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case is:
          return m = m.get(w.key === null ? g : w.key) || null, l(h, m, w, S);
        case ur:
          return m = m.get(w.key === null ? g : w.key) || null, u(h, m, w, S);
        case an:
          var _ = w._init;
          return v(m, h, g, _(w._payload), S);
      }
      if (oi(w) || Yr(w)) return m = m.get(g) || null, c(h, m, w, S, null);
      ms(h, w);
    }
    return null;
  }
  function x(m, h, g, w) {
    for (var S = null, _ = null, T = h, N = h = 0, b = null; T !== null && N < g.length; N++) {
      T.index > N ? (b = T, T = null) : b = T.sibling;
      var R = f(m, T, g[N], w);
      if (R === null) {
        T === null && (T = b);
        break;
      }
      e && T && R.alternate === null && t(m, T), h = s(R, h, N), _ === null ? S = R : _.sibling = R, _ = R, T = b;
    }
    if (N === g.length) return n(m, T), le && On(m, N), S;
    if (T === null) {
      for (; N < g.length; N++) T = p(m, g[N], w), T !== null && (h = s(T, h, N), _ === null ? S = T : _.sibling = T, _ = T);
      return le && On(m, N), S;
    }
    for (T = r(m, T); N < g.length; N++) b = v(T, m, N, g[N], w), b !== null && (e && b.alternate !== null && T.delete(b.key === null ? N : b.key), h = s(b, h, N), _ === null ? S = b : _.sibling = b, _ = b);
    return e && T.forEach(function(B) {
      return t(m, B);
    }), le && On(m, N), S;
  }
  function E(m, h, g, w) {
    var S = Yr(g);
    if (typeof S != "function") throw Error(I(150));
    if (g = S.call(g), g == null) throw Error(I(151));
    for (var _ = S = null, T = h, N = h = 0, b = null, R = g.next(); T !== null && !R.done; N++, R = g.next()) {
      T.index > N ? (b = T, T = null) : b = T.sibling;
      var B = f(m, T, R.value, w);
      if (B === null) {
        T === null && (T = b);
        break;
      }
      e && T && B.alternate === null && t(m, T), h = s(B, h, N), _ === null ? S = B : _.sibling = B, _ = B, T = b;
    }
    if (R.done) return n(
      m,
      T
    ), le && On(m, N), S;
    if (T === null) {
      for (; !R.done; N++, R = g.next()) R = p(m, R.value, w), R !== null && (h = s(R, h, N), _ === null ? S = R : _.sibling = R, _ = R);
      return le && On(m, N), S;
    }
    for (T = r(m, T); !R.done; N++, R = g.next()) R = v(T, m, N, R.value, w), R !== null && (e && R.alternate !== null && T.delete(R.key === null ? N : R.key), h = s(R, h, N), _ === null ? S = R : _.sibling = R, _ = R);
    return e && T.forEach(function(j) {
      return t(m, j);
    }), le && On(m, N), S;
  }
  function k(m, h, g, w) {
    if (typeof g == "object" && g !== null && g.type === cr && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case is:
          e: {
            for (var S = g.key, _ = h; _ !== null; ) {
              if (_.key === S) {
                if (S = g.type, S === cr) {
                  if (_.tag === 7) {
                    n(m, _.sibling), h = i(_, g.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (_.elementType === S || typeof S == "object" && S !== null && S.$$typeof === an && Mf(S) === _.type) {
                  n(m, _.sibling), h = i(_, g.props), h.ref = ni(m, _, g), h.return = m, m = h;
                  break e;
                }
                n(m, _);
                break;
              } else t(m, _);
              _ = _.sibling;
            }
            g.type === cr ? (h = jn(g.props.children, m.mode, w, g.key), h.return = m, m = h) : (w = Ls(g.type, g.key, g.props, null, m.mode, w), w.ref = ni(m, h, g), w.return = m, m = w);
          }
          return a(m);
        case ur:
          e: {
            for (_ = g.key; h !== null; ) {
              if (h.key === _) if (h.tag === 4 && h.stateNode.containerInfo === g.containerInfo && h.stateNode.implementation === g.implementation) {
                n(m, h.sibling), h = i(h, g.children || []), h.return = m, m = h;
                break e;
              } else {
                n(m, h);
                break;
              }
              else t(m, h);
              h = h.sibling;
            }
            h = Oo(g, m.mode, w), h.return = m, m = h;
          }
          return a(m);
        case an:
          return _ = g._init, k(m, h, _(g._payload), w);
      }
      if (oi(g)) return x(m, h, g, w);
      if (Yr(g)) return E(m, h, g, w);
      ms(m, g);
    }
    return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, h !== null && h.tag === 6 ? (n(m, h.sibling), h = i(h, g), h.return = m, m = h) : (n(m, h), h = Fo(g, m.mode, w), h.return = m, m = h), a(m)) : n(m, h);
  }
  return k;
}
var Pr = hh(!0), mh = hh(!1), ea = In(null), ta = null, yr = null, Ru = null;
function bu() {
  Ru = yr = ta = null;
}
function Pu(e) {
  var t = ea.current;
  oe(ea), e._currentValue = t;
}
function kl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Nr(e, t) {
  ta = e, Ru = yr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ke = !0), e.firstContext = null);
}
function ht(e) {
  var t = e._currentValue;
  if (Ru !== e) if (e = { context: e, memoizedValue: t, next: null }, yr === null) {
    if (ta === null) throw Error(I(308));
    yr = e, ta.dependencies = { lanes: 0, firstContext: e };
  } else yr = yr.next = e;
  return t;
}
var Vn = null;
function Fu(e) {
  Vn === null ? Vn = [e] : Vn.push(e);
}
function vh(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, Fu(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Yt(e, r);
}
function Yt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var on = !1;
function Ou(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function gh(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Qt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function gn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, J & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Yt(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, Fu(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Yt(e, n);
}
function bs(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Eu(e, n);
  }
}
function Df(e, t) {
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
function na(e, t, n, r) {
  var i = e.updateQueue;
  on = !1;
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
      var f = o.lane, v = o.eventTime;
      if ((r & f) === f) {
        c !== null && (c = c.next = {
          eventTime: v,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var x = e, E = o;
          switch (f = t, v = n, E.tag) {
            case 1:
              if (x = E.payload, typeof x == "function") {
                p = x.call(v, p, f);
                break e;
              }
              p = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = E.payload, f = typeof x == "function" ? x.call(v, p, f) : x, f == null) break e;
              p = fe({}, p, f);
              break e;
            case 2:
              on = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (e.flags |= 64, f = i.effects, f === null ? i.effects = [o] : f.push(o));
      } else v = { eventTime: v, lane: f, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, c === null ? (u = c = v, l = p) : c = c.next = v, a |= f;
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
    Kn |= a, e.lanes = a, e.memoizedState = p;
  }
}
function Lf(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(I(191, i));
      i.call(r);
    }
  }
}
var Xi = {}, Bt = In(Xi), Oi = In(Xi), Mi = In(Xi);
function Hn(e) {
  if (e === Xi) throw Error(I(174));
  return e;
}
function Mu(e, t) {
  switch (re(Mi, t), re(Oi, e), re(Bt, Xi), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : nl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = nl(t, e);
  }
  oe(Bt), re(Bt, t);
}
function Fr() {
  oe(Bt), oe(Oi), oe(Mi);
}
function yh(e) {
  Hn(Mi.current);
  var t = Hn(Bt.current), n = nl(t, e.type);
  t !== n && (re(Oi, e), re(Bt, n));
}
function Du(e) {
  Oi.current === e && (oe(Bt), oe(Oi));
}
var ue = In(0);
function ra(e) {
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
var No = [];
function Lu() {
  for (var e = 0; e < No.length; e++) No[e]._workInProgressVersionPrimary = null;
  No.length = 0;
}
var Ps = tn.ReactCurrentDispatcher, Ao = tn.ReactCurrentBatchConfig, Qn = 0, ce = null, ge = null, we = null, ia = !1, gi = !1, Di = 0, B0 = 0;
function Ie() {
  throw Error(I(321));
}
function Bu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Rt(e[n], t[n])) return !1;
  return !0;
}
function Vu(e, t, n, r, i, s) {
  if (Qn = s, ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ps.current = e === null || e.memoizedState === null ? $0 : j0, e = n(r, i), gi) {
    s = 0;
    do {
      if (gi = !1, Di = 0, 25 <= s) throw Error(I(301));
      s += 1, we = ge = null, t.updateQueue = null, Ps.current = z0, e = n(r, i);
    } while (gi);
  }
  if (Ps.current = sa, t = ge !== null && ge.next !== null, Qn = 0, we = ge = ce = null, ia = !1, t) throw Error(I(300));
  return e;
}
function Hu() {
  var e = Di !== 0;
  return Di = 0, e;
}
function Ot() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return we === null ? ce.memoizedState = we = e : we = we.next = e, we;
}
function mt() {
  if (ge === null) {
    var e = ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ge.next;
  var t = we === null ? ce.memoizedState : we.next;
  if (t !== null) we = t, ge = e;
  else {
    if (e === null) throw Error(I(310));
    ge = e, e = { memoizedState: ge.memoizedState, baseState: ge.baseState, baseQueue: ge.baseQueue, queue: ge.queue, next: null }, we === null ? ce.memoizedState = we = e : we = we.next = e;
  }
  return we;
}
function Li(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Io(e) {
  var t = mt(), n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = ge, i = r.baseQueue, s = n.pending;
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
      if ((Qn & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var p = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (o = l = p, a = r) : l = l.next = p, ce.lanes |= c, Kn |= c;
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? a = r : l.next = o, Rt(r, t.memoizedState) || (Ke = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      s = i.lane, ce.lanes |= s, Kn |= s, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ro(e) {
  var t = mt(), n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = i = i.next;
    do
      s = e(s, a.action), a = a.next;
    while (a !== i);
    Rt(s, t.memoizedState) || (Ke = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function Eh() {
}
function xh(e, t) {
  var n = ce, r = mt(), i = t(), s = !Rt(r.memoizedState, i);
  if (s && (r.memoizedState = i, Ke = !0), r = r.queue, Uu(Ch.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || we !== null && we.memoizedState.tag & 1) {
    if (n.flags |= 2048, Bi(9, kh.bind(null, n, r, i, t), void 0, null), ke === null) throw Error(I(349));
    Qn & 30 || wh(n, t, i);
  }
  return i;
}
function wh(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ce.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function kh(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Sh(t) && _h(e);
}
function Ch(e, t, n) {
  return n(function() {
    Sh(t) && _h(e);
  });
}
function Sh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Rt(e, n);
  } catch {
    return !0;
  }
}
function _h(e) {
  var t = Yt(e, 1);
  t !== null && It(t, e, 1, -1);
}
function Bf(e) {
  var t = Ot();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Li, lastRenderedState: e }, t.queue = e, e = e.dispatch = U0.bind(null, ce, e), [t.memoizedState, e];
}
function Bi(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ce.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Th() {
  return mt().memoizedState;
}
function Fs(e, t, n, r) {
  var i = Ot();
  ce.flags |= e, i.memoizedState = Bi(1 | t, n, void 0, r === void 0 ? null : r);
}
function _a(e, t, n, r) {
  var i = mt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ge !== null) {
    var a = ge.memoizedState;
    if (s = a.destroy, r !== null && Bu(r, a.deps)) {
      i.memoizedState = Bi(t, n, s, r);
      return;
    }
  }
  ce.flags |= e, i.memoizedState = Bi(1 | t, n, s, r);
}
function Vf(e, t) {
  return Fs(8390656, 8, e, t);
}
function Uu(e, t) {
  return _a(2048, 8, e, t);
}
function Nh(e, t) {
  return _a(4, 2, e, t);
}
function Ah(e, t) {
  return _a(4, 4, e, t);
}
function Ih(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Rh(e, t, n) {
  return n = n != null ? n.concat([e]) : null, _a(4, 4, Ih.bind(null, t, e), n);
}
function $u() {
}
function bh(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ph(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Fh(e, t, n) {
  return Qn & 21 ? (Rt(n, t) || (n = Bp(), ce.lanes |= n, Kn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ke = !0), e.memoizedState = n);
}
function V0(e, t) {
  var n = ee;
  ee = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ao.transition;
  Ao.transition = {};
  try {
    e(!1), t();
  } finally {
    ee = n, Ao.transition = r;
  }
}
function Oh() {
  return mt().memoizedState;
}
function H0(e, t, n) {
  var r = En(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Mh(e)) Dh(t, n);
  else if (n = vh(e, t, n, r), n !== null) {
    var i = ze();
    It(n, e, r, i), Lh(n, t, r);
  }
}
function U0(e, t, n) {
  var r = En(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Mh(e)) Dh(t, i);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var a = t.lastRenderedState, o = s(a, n);
      if (i.hasEagerState = !0, i.eagerState = o, Rt(o, a)) {
        var l = t.interleaved;
        l === null ? (i.next = i, Fu(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = vh(e, t, i, r), n !== null && (i = ze(), It(n, e, r, i), Lh(n, t, r));
  }
}
function Mh(e) {
  var t = e.alternate;
  return e === ce || t !== null && t === ce;
}
function Dh(e, t) {
  gi = ia = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Lh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Eu(e, n);
  }
}
var sa = { readContext: ht, useCallback: Ie, useContext: Ie, useEffect: Ie, useImperativeHandle: Ie, useInsertionEffect: Ie, useLayoutEffect: Ie, useMemo: Ie, useReducer: Ie, useRef: Ie, useState: Ie, useDebugValue: Ie, useDeferredValue: Ie, useTransition: Ie, useMutableSource: Ie, useSyncExternalStore: Ie, useId: Ie, unstable_isNewReconciler: !1 }, $0 = { readContext: ht, useCallback: function(e, t) {
  return Ot().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ht, useEffect: Vf, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Fs(
    4194308,
    4,
    Ih.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Fs(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Fs(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ot();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ot();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = H0.bind(null, ce, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ot();
  return e = { current: e }, t.memoizedState = e;
}, useState: Bf, useDebugValue: $u, useDeferredValue: function(e) {
  return Ot().memoizedState = e;
}, useTransition: function() {
  var e = Bf(!1), t = e[0];
  return e = V0.bind(null, e[1]), Ot().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ce, i = Ot();
  if (le) {
    if (n === void 0) throw Error(I(407));
    n = n();
  } else {
    if (n = t(), ke === null) throw Error(I(349));
    Qn & 30 || wh(r, t, n);
  }
  i.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return i.queue = s, Vf(Ch.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, Bi(9, kh.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = Ot(), t = ke.identifierPrefix;
  if (le) {
    var n = Xt, r = Wt;
    n = (r & ~(1 << 32 - At(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Di++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = B0++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, j0 = {
  readContext: ht,
  useCallback: bh,
  useContext: ht,
  useEffect: Uu,
  useImperativeHandle: Rh,
  useInsertionEffect: Nh,
  useLayoutEffect: Ah,
  useMemo: Ph,
  useReducer: Io,
  useRef: Th,
  useState: function() {
    return Io(Li);
  },
  useDebugValue: $u,
  useDeferredValue: function(e) {
    var t = mt();
    return Fh(t, ge.memoizedState, e);
  },
  useTransition: function() {
    var e = Io(Li)[0], t = mt().memoizedState;
    return [e, t];
  },
  useMutableSource: Eh,
  useSyncExternalStore: xh,
  useId: Oh,
  unstable_isNewReconciler: !1
}, z0 = { readContext: ht, useCallback: bh, useContext: ht, useEffect: Uu, useImperativeHandle: Rh, useInsertionEffect: Nh, useLayoutEffect: Ah, useMemo: Ph, useReducer: Ro, useRef: Th, useState: function() {
  return Ro(Li);
}, useDebugValue: $u, useDeferredValue: function(e) {
  var t = mt();
  return ge === null ? t.memoizedState = e : Fh(t, ge.memoizedState, e);
}, useTransition: function() {
  var e = Ro(Li)[0], t = mt().memoizedState;
  return [e, t];
}, useMutableSource: Eh, useSyncExternalStore: xh, useId: Oh, unstable_isNewReconciler: !1 };
function St(e, t) {
  if (e && e.defaultProps) {
    t = fe({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Cl(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : fe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ta = { isMounted: function(e) {
  return (e = e._reactInternals) ? er(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ze(), i = En(e), s = Qt(r, i);
  s.payload = t, n != null && (s.callback = n), t = gn(e, s, i), t !== null && (It(t, e, i, r), bs(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ze(), i = En(e), s = Qt(r, i);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = gn(e, s, i), t !== null && (It(t, e, i, r), bs(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ze(), r = En(e), i = Qt(n, r);
  i.tag = 2, t != null && (i.callback = t), t = gn(e, i, r), t !== null && (It(t, e, r, n), bs(t, e, r));
} };
function Hf(e, t, n, r, i, s, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, a) : t.prototype && t.prototype.isPureReactComponent ? !Ri(n, r) || !Ri(i, s) : !0;
}
function Bh(e, t, n) {
  var r = !1, i = Sn, s = t.contextType;
  return typeof s == "object" && s !== null ? s = ht(s) : (i = Ye(t) ? Wn : Oe.current, r = t.contextTypes, s = (r = r != null) ? Rr(e, i) : Sn), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ta, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function Uf(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ta.enqueueReplaceState(t, t.state, null);
}
function Sl(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, Ou(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? i.context = ht(s) : (s = Ye(t) ? Wn : Oe.current, i.context = Rr(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Cl(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Ta.enqueueReplaceState(i, i.state, null), na(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Or(e, t) {
  try {
    var n = "", r = t;
    do
      n += yg(r), r = r.return;
    while (r);
    var i = n;
  } catch (s) {
    i = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function bo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function _l(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var G0 = typeof WeakMap == "function" ? WeakMap : Map;
function Vh(e, t, n) {
  n = Qt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    oa || (oa = !0, Ml = r), _l(e, t);
  }, n;
}
function Hh(e, t, n) {
  n = Qt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      _l(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    _l(e, t), typeof r != "function" && (yn === null ? yn = /* @__PURE__ */ new Set([this]) : yn.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function $f(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new G0();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = sy.bind(null, e, t, n), t.then(e, e));
}
function jf(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function zf(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qt(-1, 1), t.tag = 2, gn(n, t, 1))), n.lanes |= 1), e);
}
var W0 = tn.ReactCurrentOwner, Ke = !1;
function He(e, t, n, r) {
  t.child = e === null ? mh(t, null, n, r) : Pr(t, e.child, n, r);
}
function Gf(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return Nr(t, i), r = Vu(e, t, n, r, s, i), n = Hu(), e !== null && !Ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Zt(e, t, i)) : (le && n && Nu(t), t.flags |= 1, He(e, t, r, i), t.child);
}
function Wf(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !qu(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, Uh(e, t, s, r, i)) : (e = Ls(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & i)) {
    var a = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ri, n(a, r) && e.ref === t.ref) return Zt(e, t, i);
  }
  return t.flags |= 1, e = xn(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Uh(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Ri(s, r) && e.ref === t.ref) if (Ke = !1, t.pendingProps = r = s, (e.lanes & i) !== 0) e.flags & 131072 && (Ke = !0);
    else return t.lanes = e.lanes, Zt(e, t, i);
  }
  return Tl(e, t, n, r, i);
}
function $h(e, t, n) {
  var r = t.pendingProps, i = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, re(xr, tt), tt |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, re(xr, tt), tt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, re(xr, tt), tt |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, re(xr, tt), tt |= r;
  return He(e, t, i, n), t.child;
}
function jh(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Tl(e, t, n, r, i) {
  var s = Ye(n) ? Wn : Oe.current;
  return s = Rr(t, s), Nr(t, i), n = Vu(e, t, n, r, s, i), r = Hu(), e !== null && !Ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Zt(e, t, i)) : (le && r && Nu(t), t.flags |= 1, He(e, t, n, i), t.child);
}
function Xf(e, t, n, r, i) {
  if (Ye(n)) {
    var s = !0;
    Ys(t);
  } else s = !1;
  if (Nr(t, i), t.stateNode === null) Os(e, t), Bh(t, n, r), Sl(t, n, r, i), r = !0;
  else if (e === null) {
    var a = t.stateNode, o = t.memoizedProps;
    a.props = o;
    var l = a.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = ht(u) : (u = Ye(n) ? Wn : Oe.current, u = Rr(t, u));
    var c = n.getDerivedStateFromProps, p = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    p || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== r || l !== u) && Uf(t, a, r, u), on = !1;
    var f = t.memoizedState;
    a.state = f, na(t, r, a, i), l = t.memoizedState, o !== r || f !== l || qe.current || on ? (typeof c == "function" && (Cl(t, n, c, r), l = t.memoizedState), (o = on || Hf(t, n, o, r, f, l, u)) ? (p || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = u, r = o) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, gh(e, t), o = t.memoizedProps, u = t.type === t.elementType ? o : St(t.type, o), a.props = u, p = t.pendingProps, f = a.context, l = n.contextType, typeof l == "object" && l !== null ? l = ht(l) : (l = Ye(n) ? Wn : Oe.current, l = Rr(t, l));
    var v = n.getDerivedStateFromProps;
    (c = typeof v == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== p || f !== l) && Uf(t, a, r, l), on = !1, f = t.memoizedState, a.state = f, na(t, r, a, i);
    var x = t.memoizedState;
    o !== p || f !== x || qe.current || on ? (typeof v == "function" && (Cl(t, n, v, r), x = t.memoizedState), (u = on || Hf(t, n, u, r, f, x, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, x, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, x, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), a.props = r, a.state = x, a.context = l, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Nl(e, t, n, r, s, i);
}
function Nl(e, t, n, r, i, s) {
  jh(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return i && Pf(t, n, !1), Zt(e, t, s);
  r = t.stateNode, W0.current = t;
  var o = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = Pr(t, e.child, null, s), t.child = Pr(t, null, o, s)) : He(e, t, o, s), t.memoizedState = r.state, i && Pf(t, n, !0), t.child;
}
function zh(e) {
  var t = e.stateNode;
  t.pendingContext ? bf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && bf(e, t.context, !1), Mu(e, t.containerInfo);
}
function Qf(e, t, n, r, i) {
  return br(), Iu(i), t.flags |= 256, He(e, t, n, r), t.child;
}
var Al = { dehydrated: null, treeContext: null, retryLane: 0 };
function Il(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Gh(e, t, n) {
  var r = t.pendingProps, i = ue.current, s = !1, a = (t.flags & 128) !== 0, o;
  if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), o ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), re(ue, i & 1), e === null)
    return wl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, a = { mode: "hidden", children: a }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = a) : s = Ia(a, r, 0, null), e = jn(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Il(n), t.memoizedState = Al, e) : ju(t, a));
  if (i = e.memoizedState, i !== null && (o = i.dehydrated, o !== null)) return X0(e, t, a, r, o, i, n);
  if (s) {
    s = r.fallback, a = t.mode, i = e.child, o = i.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = xn(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), o !== null ? s = xn(o, s) : (s = jn(s, a, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, a = e.child.memoizedState, a = a === null ? Il(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, s.memoizedState = a, s.childLanes = e.childLanes & ~n, t.memoizedState = Al, r;
  }
  return s = e.child, e = s.sibling, r = xn(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ju(e, t) {
  return t = Ia({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function vs(e, t, n, r) {
  return r !== null && Iu(r), Pr(t, e.child, null, n), e = ju(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function X0(e, t, n, r, i, s, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = bo(Error(I(422))), vs(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = Ia({ mode: "visible", children: r.children }, i, 0, null), s = jn(s, i, a, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Pr(t, e.child, null, a), t.child.memoizedState = Il(a), t.memoizedState = Al, s);
  if (!(t.mode & 1)) return vs(e, t, a, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var o = r.dgst;
    return r = o, s = Error(I(419)), r = bo(s, r, void 0), vs(e, t, a, r);
  }
  if (o = (a & e.childLanes) !== 0, Ke || o) {
    if (r = ke, r !== null) {
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
      i = i & (r.suspendedLanes | a) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, Yt(e, i), It(r, e, i, -1));
    }
    return Ku(), r = bo(Error(I(421))), vs(e, t, a, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ay.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, rt = vn(i.nextSibling), it = t, le = !0, Nt = null, e !== null && (ct[ft++] = Wt, ct[ft++] = Xt, ct[ft++] = Xn, Wt = e.id, Xt = e.overflow, Xn = t), t = ju(t, r.children), t.flags |= 4096, t);
}
function Kf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), kl(e.return, t, n);
}
function Po(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i);
}
function Wh(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, s = r.tail;
  if (He(e, t, r.children, n), r = ue.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Kf(e, n, t);
      else if (e.tag === 19) Kf(e, n, t);
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
  if (re(ue, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && ra(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Po(t, !1, i, n, s);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && ra(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      Po(t, !0, n, null, s);
      break;
    case "together":
      Po(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Os(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Zt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Kn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(I(153));
  if (t.child !== null) {
    for (e = t.child, n = xn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = xn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Q0(e, t, n) {
  switch (t.tag) {
    case 3:
      zh(t), br();
      break;
    case 5:
      yh(t);
      break;
    case 1:
      Ye(t.type) && Ys(t);
      break;
    case 4:
      Mu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      re(ea, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (re(ue, ue.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Gh(e, t, n) : (re(ue, ue.current & 1), e = Zt(e, t, n), e !== null ? e.sibling : null);
      re(ue, ue.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Wh(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), re(ue, ue.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, $h(e, t, n);
  }
  return Zt(e, t, n);
}
var Xh, Rl, Qh, Kh;
Xh = function(e, t) {
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
Rl = function() {
};
Qh = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, Hn(Bt.current);
    var s = null;
    switch (n) {
      case "input":
        i = Zo(e, i), r = Zo(e, r), s = [];
        break;
      case "select":
        i = fe({}, i, { value: void 0 }), r = fe({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        i = tl(e, i), r = tl(e, r), s = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ks);
    }
    rl(n, r);
    var a;
    n = null;
    for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var o = i[u];
      for (a in o) o.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ci.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (o = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== o && (l != null || o != null)) if (u === "style") if (o) {
        for (a in o) !o.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
        for (a in l) l.hasOwnProperty(a) && o[a] !== l[a] && (n || (n = {}), n[a] = l[a]);
      } else n || (s || (s = []), s.push(
        u,
        n
      )), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, o = o ? o.__html : void 0, l != null && o !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ci.hasOwnProperty(u) ? (l != null && u === "onScroll" && se("scroll", e), s || o === l || (s = [])) : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Kh = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ri(e, t) {
  if (!le) switch (e.tailMode) {
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
function Re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function K0(e, t, n) {
  var r = t.pendingProps;
  switch (Au(t), t.tag) {
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
      return Re(t), null;
    case 1:
      return Ye(t.type) && qs(), Re(t), null;
    case 3:
      return r = t.stateNode, Fr(), oe(qe), oe(Oe), Lu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (hs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Nt !== null && (Bl(Nt), Nt = null))), Rl(e, t), Re(t), null;
    case 5:
      Du(t);
      var i = Hn(Mi.current);
      if (n = t.type, e !== null && t.stateNode != null) Qh(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(I(166));
          return Re(t), null;
        }
        if (e = Hn(Bt.current), hs(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[Mt] = t, r[Fi] = s, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              se("cancel", r), se("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              se("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ui.length; i++) se(ui[i], r);
              break;
            case "source":
              se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              se(
                "error",
                r
              ), se("load", r);
              break;
            case "details":
              se("toggle", r);
              break;
            case "input":
              rf(r, s), se("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, se("invalid", r);
              break;
            case "textarea":
              af(r, s), se("invalid", r);
          }
          rl(n, s), i = null;
          for (var a in s) if (s.hasOwnProperty(a)) {
            var o = s[a];
            a === "children" ? typeof o == "string" ? r.textContent !== o && (s.suppressHydrationWarning !== !0 && ps(r.textContent, o, e), i = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (s.suppressHydrationWarning !== !0 && ps(
              r.textContent,
              o,
              e
            ), i = ["children", "" + o]) : Ci.hasOwnProperty(a) && o != null && a === "onScroll" && se("scroll", r);
          }
          switch (n) {
            case "input":
              ss(r), sf(r, s, !0);
              break;
            case "textarea":
              ss(r), of(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Ks);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Cp(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[Mt] = t, e[Fi] = r, Xh(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = il(n, r), n) {
              case "dialog":
                se("cancel", e), se("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                se("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < ui.length; i++) se(ui[i], e);
                i = r;
                break;
              case "source":
                se("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                se(
                  "error",
                  e
                ), se("load", e), i = r;
                break;
              case "details":
                se("toggle", e), i = r;
                break;
              case "input":
                rf(e, r), i = Zo(e, r), se("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = fe({}, r, { value: void 0 }), se("invalid", e);
                break;
              case "textarea":
                af(e, r), i = tl(e, r), se("invalid", e);
                break;
              default:
                i = r;
            }
            rl(n, i), o = i;
            for (s in o) if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "style" ? Tp(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Sp(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Si(e, l) : typeof l == "number" && Si(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Ci.hasOwnProperty(s) ? l != null && s === "onScroll" && se("scroll", e) : l != null && pu(e, s, l, a));
            }
            switch (n) {
              case "input":
                ss(e), sf(e, r, !1);
                break;
              case "textarea":
                ss(e), of(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Cn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? Cr(e, !!r.multiple, s, !1) : r.defaultValue != null && Cr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ks);
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
      return Re(t), null;
    case 6:
      if (e && t.stateNode != null) Kh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
        if (n = Hn(Mi.current), Hn(Bt.current), hs(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Mt] = t, (s = r.nodeValue !== n) && (e = it, e !== null)) switch (e.tag) {
            case 3:
              ps(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ps(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Mt] = t, t.stateNode = r;
      }
      return Re(t), null;
    case 13:
      if (oe(ue), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (le && rt !== null && t.mode & 1 && !(t.flags & 128)) ph(), br(), t.flags |= 98560, s = !1;
        else if (s = hs(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(I(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(I(317));
            s[Mt] = t;
          } else br(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Re(t), s = !1;
        } else Nt !== null && (Bl(Nt), Nt = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ue.current & 1 ? ye === 0 && (ye = 3) : Ku())), t.updateQueue !== null && (t.flags |= 4), Re(t), null);
    case 4:
      return Fr(), Rl(e, t), e === null && bi(t.stateNode.containerInfo), Re(t), null;
    case 10:
      return Pu(t.type._context), Re(t), null;
    case 17:
      return Ye(t.type) && qs(), Re(t), null;
    case 19:
      if (oe(ue), s = t.memoizedState, s === null) return Re(t), null;
      if (r = (t.flags & 128) !== 0, a = s.rendering, a === null) if (r) ri(s, !1);
      else {
        if (ye !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (a = ra(e), a !== null) {
            for (t.flags |= 128, ri(s, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, a = s.alternate, a === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = a.childLanes, s.lanes = a.lanes, s.child = a.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = a.memoizedProps, s.memoizedState = a.memoizedState, s.updateQueue = a.updateQueue, s.type = a.type, e = a.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return re(ue, ue.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && he() > Mr && (t.flags |= 128, r = !0, ri(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ra(a), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ri(s, !0), s.tail === null && s.tailMode === "hidden" && !a.alternate && !le) return Re(t), null;
        } else 2 * he() - s.renderingStartTime > Mr && n !== 1073741824 && (t.flags |= 128, r = !0, ri(s, !1), t.lanes = 4194304);
        s.isBackwards ? (a.sibling = t.child, t.child = a) : (n = s.last, n !== null ? n.sibling = a : t.child = a, s.last = a);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = he(), t.sibling = null, n = ue.current, re(ue, r ? n & 1 | 2 : n & 1), t) : (Re(t), null);
    case 22:
    case 23:
      return Qu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? tt & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Re(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function q0(e, t) {
  switch (Au(t), t.tag) {
    case 1:
      return Ye(t.type) && qs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Fr(), oe(qe), oe(Oe), Lu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Du(t), null;
    case 13:
      if (oe(ue), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(I(340));
        br();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return oe(ue), null;
    case 4:
      return Fr(), null;
    case 10:
      return Pu(t.type._context), null;
    case 22:
    case 23:
      return Qu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var gs = !1, be = !1, Y0 = typeof WeakSet == "function" ? WeakSet : Set, F = null;
function Er(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    pe(e, t, r);
  }
  else n.current = null;
}
function bl(e, t, n) {
  try {
    n();
  } catch (r) {
    pe(e, t, r);
  }
}
var qf = !1;
function Z0(e, t) {
  if (hl = Ws, e = eh(), Tu(e)) {
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
          for (var v; p !== n || i !== 0 && p.nodeType !== 3 || (o = a + i), p !== s || r !== 0 && p.nodeType !== 3 || (l = a + r), p.nodeType === 3 && (a += p.nodeValue.length), (v = p.firstChild) !== null; )
            f = p, p = v;
          for (; ; ) {
            if (p === e) break t;
            if (f === n && ++u === i && (o = a), f === s && ++c === r && (l = a), (v = p.nextSibling) !== null) break;
            p = f, f = p.parentNode;
          }
          p = v;
        }
        n = o === -1 || l === -1 ? null : { start: o, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ml = { focusedElem: e, selectionRange: n }, Ws = !1, F = t; F !== null; ) if (t = F, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, F = e;
  else for (; F !== null; ) {
    t = F;
    try {
      var x = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (x !== null) {
            var E = x.memoizedProps, k = x.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? E : St(t.type, E), k);
            m.__reactInternalSnapshotBeforeUpdate = h;
          }
          break;
        case 3:
          var g = t.stateNode.containerInfo;
          g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(I(163));
      }
    } catch (w) {
      pe(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, F = e;
      break;
    }
    F = t.return;
  }
  return x = qf, qf = !1, x;
}
function yi(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        i.destroy = void 0, s !== void 0 && bl(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Na(e, t) {
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
function Pl(e) {
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
function qh(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, qh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Mt], delete t[Fi], delete t[yl], delete t[O0], delete t[M0])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Yh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Yf(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Yh(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Fl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ks));
  else if (r !== 4 && (e = e.child, e !== null)) for (Fl(e, t, n), e = e.sibling; e !== null; ) Fl(e, t, n), e = e.sibling;
}
function Ol(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ol(e, t, n), e = e.sibling; e !== null; ) Ol(e, t, n), e = e.sibling;
}
var Te = null, _t = !1;
function sn(e, t, n) {
  for (n = n.child; n !== null; ) Zh(e, t, n), n = n.sibling;
}
function Zh(e, t, n) {
  if (Lt && typeof Lt.onCommitFiberUnmount == "function") try {
    Lt.onCommitFiberUnmount(Ea, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      be || Er(n, t);
    case 6:
      var r = Te, i = _t;
      Te = null, sn(e, t, n), Te = r, _t = i, Te !== null && (_t ? (e = Te, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Te.removeChild(n.stateNode));
      break;
    case 18:
      Te !== null && (_t ? (e = Te, n = n.stateNode, e.nodeType === 8 ? _o(e.parentNode, n) : e.nodeType === 1 && _o(e, n), Ai(e)) : _o(Te, n.stateNode));
      break;
    case 4:
      r = Te, i = _t, Te = n.stateNode.containerInfo, _t = !0, sn(e, t, n), Te = r, _t = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!be && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var s = i, a = s.destroy;
          s = s.tag, a !== void 0 && (s & 2 || s & 4) && bl(n, t, a), i = i.next;
        } while (i !== r);
      }
      sn(e, t, n);
      break;
    case 1:
      if (!be && (Er(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (o) {
        pe(n, t, o);
      }
      sn(e, t, n);
      break;
    case 21:
      sn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (be = (r = be) || n.memoizedState !== null, sn(e, t, n), be = r) : sn(e, t, n);
      break;
    default:
      sn(e, t, n);
  }
}
function Zf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Y0()), t.forEach(function(r) {
      var i = oy.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function Ct(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var s = e, a = t, o = a;
      e: for (; o !== null; ) {
        switch (o.tag) {
          case 5:
            Te = o.stateNode, _t = !1;
            break e;
          case 3:
            Te = o.stateNode.containerInfo, _t = !0;
            break e;
          case 4:
            Te = o.stateNode.containerInfo, _t = !0;
            break e;
        }
        o = o.return;
      }
      if (Te === null) throw Error(I(160));
      Zh(s, a, i), Te = null, _t = !1;
      var l = i.alternate;
      l !== null && (l.return = null), i.return = null;
    } catch (u) {
      pe(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Jh(t, e), t = t.sibling;
}
function Jh(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ct(t, e), Ft(e), r & 4) {
        try {
          yi(3, e, e.return), Na(3, e);
        } catch (E) {
          pe(e, e.return, E);
        }
        try {
          yi(5, e, e.return);
        } catch (E) {
          pe(e, e.return, E);
        }
      }
      break;
    case 1:
      Ct(t, e), Ft(e), r & 512 && n !== null && Er(n, n.return);
      break;
    case 5:
      if (Ct(t, e), Ft(e), r & 512 && n !== null && Er(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          Si(i, "");
        } catch (E) {
          pe(e, e.return, E);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var s = e.memoizedProps, a = n !== null ? n.memoizedProps : s, o = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          o === "input" && s.type === "radio" && s.name != null && wp(i, s), il(o, a);
          var u = il(o, s);
          for (a = 0; a < l.length; a += 2) {
            var c = l[a], p = l[a + 1];
            c === "style" ? Tp(i, p) : c === "dangerouslySetInnerHTML" ? Sp(i, p) : c === "children" ? Si(i, p) : pu(i, c, p, u);
          }
          switch (o) {
            case "input":
              Jo(i, s);
              break;
            case "textarea":
              kp(i, s);
              break;
            case "select":
              var f = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!s.multiple;
              var v = s.value;
              v != null ? Cr(i, !!s.multiple, v, !1) : f !== !!s.multiple && (s.defaultValue != null ? Cr(
                i,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : Cr(i, !!s.multiple, s.multiple ? [] : "", !1));
          }
          i[Fi] = s;
        } catch (E) {
          pe(e, e.return, E);
        }
      }
      break;
    case 6:
      if (Ct(t, e), Ft(e), r & 4) {
        if (e.stateNode === null) throw Error(I(162));
        i = e.stateNode, s = e.memoizedProps;
        try {
          i.nodeValue = s;
        } catch (E) {
          pe(e, e.return, E);
        }
      }
      break;
    case 3:
      if (Ct(t, e), Ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Ai(t.containerInfo);
      } catch (E) {
        pe(e, e.return, E);
      }
      break;
    case 4:
      Ct(t, e), Ft(e);
      break;
    case 13:
      Ct(t, e), Ft(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (Wu = he())), r & 4 && Zf(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (be = (u = be) || c, Ct(t, e), be = u) : Ct(t, e), Ft(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (F = e, c = e.child; c !== null; ) {
          for (p = F = c; F !== null; ) {
            switch (f = F, v = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                yi(4, f, f.return);
                break;
              case 1:
                Er(f, f.return);
                var x = f.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (E) {
                    pe(r, n, E);
                  }
                }
                break;
              case 5:
                Er(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  ed(p);
                  continue;
                }
            }
            v !== null ? (v.return = f, F = v) : ed(p);
          }
          c = c.sibling;
        }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p;
              try {
                i = p.stateNode, u ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (o = p.stateNode, l = p.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, o.style.display = _p("display", a));
              } catch (E) {
                pe(e, e.return, E);
              }
            }
          } else if (p.tag === 6) {
            if (c === null) try {
              p.stateNode.nodeValue = u ? "" : p.memoizedProps;
            } catch (E) {
              pe(e, e.return, E);
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
      Ct(t, e), Ft(e), r & 4 && Zf(e);
      break;
    case 21:
      break;
    default:
      Ct(
        t,
        e
      ), Ft(e);
  }
}
function Ft(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Yh(n)) {
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
          r.flags & 32 && (Si(i, ""), r.flags &= -33);
          var s = Yf(e);
          Ol(e, s, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, o = Yf(e);
          Fl(e, o, a);
          break;
        default:
          throw Error(I(161));
      }
    } catch (l) {
      pe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function J0(e, t, n) {
  F = e, em(e);
}
function em(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var i = F, s = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || gs;
      if (!a) {
        var o = i.alternate, l = o !== null && o.memoizedState !== null || be;
        o = gs;
        var u = be;
        if (gs = a, (be = l) && !u) for (F = i; F !== null; ) a = F, l = a.child, a.tag === 22 && a.memoizedState !== null ? td(i) : l !== null ? (l.return = a, F = l) : td(i);
        for (; s !== null; ) F = s, em(s), s = s.sibling;
        F = i, gs = o, be = u;
      }
      Jf(e);
    } else i.subtreeFlags & 8772 && s !== null ? (s.return = i, F = s) : Jf(e);
  }
}
function Jf(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            be || Na(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !be) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : St(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && Lf(t, s, r);
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
              Lf(t, a, n);
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
                  p !== null && Ai(p);
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
        be || t.flags & 512 && Pl(t);
      } catch (f) {
        pe(t, t.return, f);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, F = n;
      break;
    }
    F = t.return;
  }
}
function ed(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, F = n;
      break;
    }
    F = t.return;
  }
}
function td(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Na(4, t);
          } catch (l) {
            pe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              pe(t, i, l);
            }
          }
          var s = t.return;
          try {
            Pl(t);
          } catch (l) {
            pe(t, s, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Pl(t);
          } catch (l) {
            pe(t, a, l);
          }
      }
    } catch (l) {
      pe(t, t.return, l);
    }
    if (t === e) {
      F = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      o.return = t.return, F = o;
      break;
    }
    F = t.return;
  }
}
var ey = Math.ceil, aa = tn.ReactCurrentDispatcher, zu = tn.ReactCurrentOwner, pt = tn.ReactCurrentBatchConfig, J = 0, ke = null, me = null, Ne = 0, tt = 0, xr = In(0), ye = 0, Vi = null, Kn = 0, Aa = 0, Gu = 0, Ei = null, Qe = null, Wu = 0, Mr = 1 / 0, jt = null, oa = !1, Ml = null, yn = null, ys = !1, dn = null, la = 0, xi = 0, Dl = null, Ms = -1, Ds = 0;
function ze() {
  return J & 6 ? he() : Ms !== -1 ? Ms : Ms = he();
}
function En(e) {
  return e.mode & 1 ? J & 2 && Ne !== 0 ? Ne & -Ne : L0.transition !== null ? (Ds === 0 && (Ds = Bp()), Ds) : (e = ee, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Gp(e.type)), e) : 1;
}
function It(e, t, n, r) {
  if (50 < xi) throw xi = 0, Dl = null, Error(I(185));
  zi(e, n, r), (!(J & 2) || e !== ke) && (e === ke && (!(J & 2) && (Aa |= n), ye === 4 && cn(e, Ne)), Ze(e, r), n === 1 && J === 0 && !(t.mode & 1) && (Mr = he() + 500, Sa && Rn()));
}
function Ze(e, t) {
  var n = e.callbackNode;
  Lg(e, t);
  var r = Gs(e, e === ke ? Ne : 0);
  if (r === 0) n !== null && cf(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && cf(n), t === 1) e.tag === 0 ? D0(nd.bind(null, e)) : ch(nd.bind(null, e)), P0(function() {
      !(J & 6) && Rn();
    }), n = null;
    else {
      switch (Vp(r)) {
        case 1:
          n = yu;
          break;
        case 4:
          n = Dp;
          break;
        case 16:
          n = zs;
          break;
        case 536870912:
          n = Lp;
          break;
        default:
          n = zs;
      }
      n = lm(n, tm.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function tm(e, t) {
  if (Ms = -1, Ds = 0, J & 6) throw Error(I(327));
  var n = e.callbackNode;
  if (Ar() && e.callbackNode !== n) return null;
  var r = Gs(e, e === ke ? Ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ua(e, r);
  else {
    t = r;
    var i = J;
    J |= 2;
    var s = rm();
    (ke !== e || Ne !== t) && (jt = null, Mr = he() + 500, $n(e, t));
    do
      try {
        ry();
        break;
      } catch (o) {
        nm(e, o);
      }
    while (!0);
    bu(), aa.current = s, J = i, me !== null ? t = 0 : (ke = null, Ne = 0, t = ye);
  }
  if (t !== 0) {
    if (t === 2 && (i = ul(e), i !== 0 && (r = i, t = Ll(e, i))), t === 1) throw n = Vi, $n(e, 0), cn(e, r), Ze(e, he()), n;
    if (t === 6) cn(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !ty(i) && (t = ua(e, r), t === 2 && (s = ul(e), s !== 0 && (r = s, t = Ll(e, s))), t === 1)) throw n = Vi, $n(e, 0), cn(e, r), Ze(e, he()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          Mn(e, Qe, jt);
          break;
        case 3:
          if (cn(e, r), (r & 130023424) === r && (t = Wu + 500 - he(), 10 < t)) {
            if (Gs(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              ze(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = gl(Mn.bind(null, e, Qe, jt), t);
            break;
          }
          Mn(e, Qe, jt);
          break;
        case 4:
          if (cn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - At(r);
            s = 1 << a, a = t[a], a > i && (i = a), r &= ~s;
          }
          if (r = i, r = he() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ey(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = gl(Mn.bind(null, e, Qe, jt), r);
            break;
          }
          Mn(e, Qe, jt);
          break;
        case 5:
          Mn(e, Qe, jt);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return Ze(e, he()), e.callbackNode === n ? tm.bind(null, e) : null;
}
function Ll(e, t) {
  var n = Ei;
  return e.current.memoizedState.isDehydrated && ($n(e, t).flags |= 256), e = ua(e, t), e !== 2 && (t = Qe, Qe = n, t !== null && Bl(t)), e;
}
function Bl(e) {
  Qe === null ? Qe = e : Qe.push.apply(Qe, e);
}
function ty(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], s = i.getSnapshot;
        i = i.value;
        try {
          if (!Rt(s(), i)) return !1;
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
function cn(e, t) {
  for (t &= ~Gu, t &= ~Aa, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - At(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function nd(e) {
  if (J & 6) throw Error(I(327));
  Ar();
  var t = Gs(e, 0);
  if (!(t & 1)) return Ze(e, he()), null;
  var n = ua(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ul(e);
    r !== 0 && (t = r, n = Ll(e, r));
  }
  if (n === 1) throw n = Vi, $n(e, 0), cn(e, t), Ze(e, he()), n;
  if (n === 6) throw Error(I(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Mn(e, Qe, jt), Ze(e, he()), null;
}
function Xu(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    J = n, J === 0 && (Mr = he() + 500, Sa && Rn());
  }
}
function qn(e) {
  dn !== null && dn.tag === 0 && !(J & 6) && Ar();
  var t = J;
  J |= 1;
  var n = pt.transition, r = ee;
  try {
    if (pt.transition = null, ee = 1, e) return e();
  } finally {
    ee = r, pt.transition = n, J = t, !(J & 6) && Rn();
  }
}
function Qu() {
  tt = xr.current, oe(xr);
}
function $n(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, b0(n)), me !== null) for (n = me.return; n !== null; ) {
    var r = n;
    switch (Au(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && qs();
        break;
      case 3:
        Fr(), oe(qe), oe(Oe), Lu();
        break;
      case 5:
        Du(r);
        break;
      case 4:
        Fr();
        break;
      case 13:
        oe(ue);
        break;
      case 19:
        oe(ue);
        break;
      case 10:
        Pu(r.type._context);
        break;
      case 22:
      case 23:
        Qu();
    }
    n = n.return;
  }
  if (ke = e, me = e = xn(e.current, null), Ne = tt = t, ye = 0, Vi = null, Gu = Aa = Kn = 0, Qe = Ei = null, Vn !== null) {
    for (t = 0; t < Vn.length; t++) if (n = Vn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, s = n.pending;
      if (s !== null) {
        var a = s.next;
        s.next = i, r.next = a;
      }
      n.pending = r;
    }
    Vn = null;
  }
  return e;
}
function nm(e, t) {
  do {
    var n = me;
    try {
      if (bu(), Ps.current = sa, ia) {
        for (var r = ce.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        ia = !1;
      }
      if (Qn = 0, we = ge = ce = null, gi = !1, Di = 0, zu.current = null, n === null || n.return === null) {
        ye = 1, Vi = t, me = null;
        break;
      }
      e: {
        var s = e, a = n.return, o = n, l = t;
        if (t = Ne, o.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = o, p = c.tag;
          if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var v = jf(a);
          if (v !== null) {
            v.flags &= -257, zf(v, a, o, s, t), v.mode & 1 && $f(s, u, t), t = v, l = u;
            var x = t.updateQueue;
            if (x === null) {
              var E = /* @__PURE__ */ new Set();
              E.add(l), t.updateQueue = E;
            } else x.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              $f(s, u, t), Ku();
              break e;
            }
            l = Error(I(426));
          }
        } else if (le && o.mode & 1) {
          var k = jf(a);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), zf(k, a, o, s, t), Iu(Or(l, o));
            break e;
          }
        }
        s = l = Or(l, o), ye !== 4 && (ye = 2), Ei === null ? Ei = [s] : Ei.push(s), s = a;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var m = Vh(s, l, t);
              Df(s, m);
              break e;
            case 1:
              o = l;
              var h = s.type, g = s.stateNode;
              if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (yn === null || !yn.has(g)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var w = Hh(s, o, t);
                Df(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      sm(n);
    } catch (S) {
      t = S, me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function rm() {
  var e = aa.current;
  return aa.current = sa, e === null ? sa : e;
}
function Ku() {
  (ye === 0 || ye === 3 || ye === 2) && (ye = 4), ke === null || !(Kn & 268435455) && !(Aa & 268435455) || cn(ke, Ne);
}
function ua(e, t) {
  var n = J;
  J |= 2;
  var r = rm();
  (ke !== e || Ne !== t) && (jt = null, $n(e, t));
  do
    try {
      ny();
      break;
    } catch (i) {
      nm(e, i);
    }
  while (!0);
  if (bu(), J = n, aa.current = r, me !== null) throw Error(I(261));
  return ke = null, Ne = 0, ye;
}
function ny() {
  for (; me !== null; ) im(me);
}
function ry() {
  for (; me !== null && !Ag(); ) im(me);
}
function im(e) {
  var t = om(e.alternate, e, tt);
  e.memoizedProps = e.pendingProps, t === null ? sm(e) : me = t, zu.current = null;
}
function sm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = q0(n, t), n !== null) {
        n.flags &= 32767, me = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ye = 6, me = null;
        return;
      }
    } else if (n = K0(n, t, tt), n !== null) {
      me = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  ye === 0 && (ye = 5);
}
function Mn(e, t, n) {
  var r = ee, i = pt.transition;
  try {
    pt.transition = null, ee = 1, iy(e, t, n, r);
  } finally {
    pt.transition = i, ee = r;
  }
  return null;
}
function iy(e, t, n, r) {
  do
    Ar();
  while (dn !== null);
  if (J & 6) throw Error(I(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(I(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (Bg(e, s), e === ke && (me = ke = null, Ne = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ys || (ys = !0, lm(zs, function() {
    return Ar(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = pt.transition, pt.transition = null;
    var a = ee;
    ee = 1;
    var o = J;
    J |= 4, zu.current = null, Z0(e, n), Jh(n, e), S0(ml), Ws = !!hl, ml = hl = null, e.current = n, J0(n), Ig(), J = o, ee = a, pt.transition = s;
  } else e.current = n;
  if (ys && (ys = !1, dn = e, la = i), s = e.pendingLanes, s === 0 && (yn = null), Pg(n.stateNode), Ze(e, he()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (oa) throw oa = !1, e = Ml, Ml = null, e;
  return la & 1 && e.tag !== 0 && Ar(), s = e.pendingLanes, s & 1 ? e === Dl ? xi++ : (xi = 0, Dl = e) : xi = 0, Rn(), null;
}
function Ar() {
  if (dn !== null) {
    var e = Vp(la), t = pt.transition, n = ee;
    try {
      if (pt.transition = null, ee = 16 > e ? 16 : e, dn === null) var r = !1;
      else {
        if (e = dn, dn = null, la = 0, J & 6) throw Error(I(331));
        var i = J;
        for (J |= 4, F = e.current; F !== null; ) {
          var s = F, a = s.child;
          if (F.flags & 16) {
            var o = s.deletions;
            if (o !== null) {
              for (var l = 0; l < o.length; l++) {
                var u = o[l];
                for (F = u; F !== null; ) {
                  var c = F;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yi(8, c, s);
                  }
                  var p = c.child;
                  if (p !== null) p.return = c, F = p;
                  else for (; F !== null; ) {
                    c = F;
                    var f = c.sibling, v = c.return;
                    if (qh(c), c === u) {
                      F = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = v, F = f;
                      break;
                    }
                    F = v;
                  }
                }
              }
              var x = s.alternate;
              if (x !== null) {
                var E = x.child;
                if (E !== null) {
                  x.child = null;
                  do {
                    var k = E.sibling;
                    E.sibling = null, E = k;
                  } while (E !== null);
                }
              }
              F = s;
            }
          }
          if (s.subtreeFlags & 2064 && a !== null) a.return = s, F = a;
          else e: for (; F !== null; ) {
            if (s = F, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                yi(9, s, s.return);
            }
            var m = s.sibling;
            if (m !== null) {
              m.return = s.return, F = m;
              break e;
            }
            F = s.return;
          }
        }
        var h = e.current;
        for (F = h; F !== null; ) {
          a = F;
          var g = a.child;
          if (a.subtreeFlags & 2064 && g !== null) g.return = a, F = g;
          else e: for (a = h; F !== null; ) {
            if (o = F, o.flags & 2048) try {
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Na(9, o);
              }
            } catch (S) {
              pe(o, o.return, S);
            }
            if (o === a) {
              F = null;
              break e;
            }
            var w = o.sibling;
            if (w !== null) {
              w.return = o.return, F = w;
              break e;
            }
            F = o.return;
          }
        }
        if (J = i, Rn(), Lt && typeof Lt.onPostCommitFiberRoot == "function") try {
          Lt.onPostCommitFiberRoot(Ea, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ee = n, pt.transition = t;
    }
  }
  return !1;
}
function rd(e, t, n) {
  t = Or(n, t), t = Vh(e, t, 1), e = gn(e, t, 1), t = ze(), e !== null && (zi(e, 1, t), Ze(e, t));
}
function pe(e, t, n) {
  if (e.tag === 3) rd(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      rd(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (yn === null || !yn.has(r))) {
        e = Or(n, e), e = Hh(t, e, 1), t = gn(t, e, 1), e = ze(), t !== null && (zi(t, 1, e), Ze(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function sy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ze(), e.pingedLanes |= e.suspendedLanes & n, ke === e && (Ne & n) === n && (ye === 4 || ye === 3 && (Ne & 130023424) === Ne && 500 > he() - Wu ? $n(e, 0) : Gu |= n), Ze(e, t);
}
function am(e, t) {
  t === 0 && (e.mode & 1 ? (t = ls, ls <<= 1, !(ls & 130023424) && (ls = 4194304)) : t = 1);
  var n = ze();
  e = Yt(e, t), e !== null && (zi(e, t, n), Ze(e, n));
}
function ay(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), am(e, n);
}
function oy(e, t) {
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
  r !== null && r.delete(t), am(e, n);
}
var om;
om = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || qe.current) Ke = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ke = !1, Q0(e, t, n);
    Ke = !!(e.flags & 131072);
  }
  else Ke = !1, le && t.flags & 1048576 && fh(t, Js, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Os(e, t), e = t.pendingProps;
      var i = Rr(t, Oe.current);
      Nr(t, n), i = Vu(null, t, r, e, i, n);
      var s = Hu();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ye(r) ? (s = !0, Ys(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Ou(t), i.updater = Ta, t.stateNode = i, i._reactInternals = t, Sl(t, r, e, n), t = Nl(null, t, r, !0, s, n)) : (t.tag = 0, le && s && Nu(t), He(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Os(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = uy(r), e = St(r, e), i) {
          case 0:
            t = Tl(null, t, r, e, n);
            break e;
          case 1:
            t = Xf(null, t, r, e, n);
            break e;
          case 11:
            t = Gf(null, t, r, e, n);
            break e;
          case 14:
            t = Wf(null, t, r, St(r.type, e), n);
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
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : St(r, i), Tl(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : St(r, i), Xf(e, t, r, i, n);
    case 3:
      e: {
        if (zh(t), e === null) throw Error(I(387));
        r = t.pendingProps, s = t.memoizedState, i = s.element, gh(e, t), na(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          i = Or(Error(I(423)), t), t = Qf(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = Or(Error(I(424)), t), t = Qf(e, t, r, n, i);
          break e;
        } else for (rt = vn(t.stateNode.containerInfo.firstChild), it = t, le = !0, Nt = null, n = mh(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (br(), r === i) {
            t = Zt(e, t, n);
            break e;
          }
          He(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return yh(t), e === null && wl(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, a = i.children, vl(r, i) ? a = null : s !== null && vl(r, s) && (t.flags |= 32), jh(e, t), He(e, t, a, n), t.child;
    case 6:
      return e === null && wl(t), null;
    case 13:
      return Gh(e, t, n);
    case 4:
      return Mu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Pr(t, null, r, n) : He(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : St(r, i), Gf(e, t, r, i, n);
    case 7:
      return He(e, t, t.pendingProps, n), t.child;
    case 8:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, a = i.value, re(ea, r._currentValue), r._currentValue = a, s !== null) if (Rt(s.value, a)) {
          if (s.children === i.children && !qe.current) {
            t = Zt(e, t, n);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var o = s.dependencies;
          if (o !== null) {
            a = s.child;
            for (var l = o.firstContext; l !== null; ) {
              if (l.context === r) {
                if (s.tag === 1) {
                  l = Qt(-1, n & -n), l.tag = 2;
                  var u = s.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), kl(
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
            a.lanes |= n, o = a.alternate, o !== null && (o.lanes |= n), kl(a, n, t), a = s.sibling;
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
        He(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, Nr(t, n), i = ht(i), r = r(i), t.flags |= 1, He(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = St(r, t.pendingProps), i = St(r.type, i), Wf(e, t, r, i, n);
    case 15:
      return Uh(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : St(r, i), Os(e, t), t.tag = 1, Ye(r) ? (e = !0, Ys(t)) : e = !1, Nr(t, n), Bh(t, r, i), Sl(t, r, i, n), Nl(null, t, r, !0, e, n);
    case 19:
      return Wh(e, t, n);
    case 22:
      return $h(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function lm(e, t) {
  return Mp(e, t);
}
function ly(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function dt(e, t, n, r) {
  return new ly(e, t, n, r);
}
function qu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function uy(e) {
  if (typeof e == "function") return qu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === mu) return 11;
    if (e === vu) return 14;
  }
  return 2;
}
function xn(e, t) {
  var n = e.alternate;
  return n === null ? (n = dt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ls(e, t, n, r, i, s) {
  var a = 2;
  if (r = e, typeof e == "function") qu(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else e: switch (e) {
    case cr:
      return jn(n.children, i, s, t);
    case hu:
      a = 8, i |= 8;
      break;
    case Qo:
      return e = dt(12, n, t, i | 2), e.elementType = Qo, e.lanes = s, e;
    case Ko:
      return e = dt(13, n, t, i), e.elementType = Ko, e.lanes = s, e;
    case qo:
      return e = dt(19, n, t, i), e.elementType = qo, e.lanes = s, e;
    case yp:
      return Ia(n, i, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case vp:
          a = 10;
          break e;
        case gp:
          a = 9;
          break e;
        case mu:
          a = 11;
          break e;
        case vu:
          a = 14;
          break e;
        case an:
          a = 16, r = null;
          break e;
      }
      throw Error(I(130, e == null ? e : typeof e, ""));
  }
  return t = dt(a, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t;
}
function jn(e, t, n, r) {
  return e = dt(7, e, r, t), e.lanes = n, e;
}
function Ia(e, t, n, r) {
  return e = dt(22, e, r, t), e.elementType = yp, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Fo(e, t, n) {
  return e = dt(6, e, null, t), e.lanes = n, e;
}
function Oo(e, t, n) {
  return t = dt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function cy(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ho(0), this.expirationTimes = ho(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ho(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Yu(e, t, n, r, i, s, a, o, l) {
  return e = new cy(e, t, n, o, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = dt(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ou(s), e;
}
function fy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ur, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function um(e) {
  if (!e) return Sn;
  e = e._reactInternals;
  e: {
    if (er(e) !== e || e.tag !== 1) throw Error(I(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ye(t.type)) {
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
    if (Ye(n)) return uh(e, n, t);
  }
  return t;
}
function cm(e, t, n, r, i, s, a, o, l) {
  return e = Yu(n, r, !0, e, i, s, a, o, l), e.context = um(null), n = e.current, r = ze(), i = En(n), s = Qt(r, i), s.callback = t ?? null, gn(n, s, i), e.current.lanes = i, zi(e, i, r), Ze(e, r), e;
}
function Ra(e, t, n, r) {
  var i = t.current, s = ze(), a = En(i);
  return n = um(n), t.context === null ? t.context = n : t.pendingContext = n, t = Qt(s, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = gn(i, t, a), e !== null && (It(e, i, a, s), bs(e, i, a)), a;
}
function ca(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function id(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Zu(e, t) {
  id(e, t), (e = e.alternate) && id(e, t);
}
function dy() {
  return null;
}
var fm = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ju(e) {
  this._internalRoot = e;
}
ba.prototype.render = Ju.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(I(409));
  Ra(e, t, null, null);
};
ba.prototype.unmount = Ju.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    qn(function() {
      Ra(null, e, null, null);
    }), t[qt] = null;
  }
};
function ba(e) {
  this._internalRoot = e;
}
ba.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = $p();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < un.length && t !== 0 && t < un[n].priority; n++) ;
    un.splice(n, 0, e), n === 0 && zp(e);
  }
};
function ec(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Pa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function sd() {
}
function py(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var u = ca(a);
        s.call(u);
      };
    }
    var a = cm(t, r, e, 0, null, !1, !1, "", sd);
    return e._reactRootContainer = a, e[qt] = a.current, bi(e.nodeType === 8 ? e.parentNode : e), qn(), a;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var u = ca(l);
      o.call(u);
    };
  }
  var l = Yu(e, 0, !1, null, null, !1, !1, "", sd);
  return e._reactRootContainer = l, e[qt] = l.current, bi(e.nodeType === 8 ? e.parentNode : e), qn(function() {
    Ra(t, l, n, r);
  }), l;
}
function Fa(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof i == "function") {
      var o = i;
      i = function() {
        var l = ca(a);
        o.call(l);
      };
    }
    Ra(t, a, e, i);
  } else a = py(n, t, e, i, r);
  return ca(a);
}
Hp = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = li(t.pendingLanes);
        n !== 0 && (Eu(t, n | 1), Ze(t, he()), !(J & 6) && (Mr = he() + 500, Rn()));
      }
      break;
    case 13:
      qn(function() {
        var r = Yt(e, 1);
        if (r !== null) {
          var i = ze();
          It(r, e, 1, i);
        }
      }), Zu(e, 1);
  }
};
xu = function(e) {
  if (e.tag === 13) {
    var t = Yt(e, 134217728);
    if (t !== null) {
      var n = ze();
      It(t, e, 134217728, n);
    }
    Zu(e, 134217728);
  }
};
Up = function(e) {
  if (e.tag === 13) {
    var t = En(e), n = Yt(e, t);
    if (n !== null) {
      var r = ze();
      It(n, e, t, r);
    }
    Zu(e, t);
  }
};
$p = function() {
  return ee;
};
jp = function(e, t) {
  var n = ee;
  try {
    return ee = e, t();
  } finally {
    ee = n;
  }
};
al = function(e, t, n) {
  switch (t) {
    case "input":
      if (Jo(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ca(r);
            if (!i) throw Error(I(90));
            xp(r), Jo(r, i);
          }
        }
      }
      break;
    case "textarea":
      kp(e, n);
      break;
    case "select":
      t = n.value, t != null && Cr(e, !!n.multiple, t, !1);
  }
};
Ip = Xu;
Rp = qn;
var hy = { usingClientEntryPoint: !1, Events: [Wi, hr, Ca, Np, Ap, Xu] }, ii = { findFiberByHostInstance: Bn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, my = { bundleType: ii.bundleType, version: ii.version, rendererPackageName: ii.rendererPackageName, rendererConfig: ii.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: tn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Fp(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ii.findFiberByHostInstance || dy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Es = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Es.isDisabled && Es.supportsFiber) try {
    Ea = Es.inject(my), Lt = Es;
  } catch {
  }
}
ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hy;
ot.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ec(t)) throw Error(I(200));
  return fy(e, t, null, n);
};
ot.createRoot = function(e, t) {
  if (!ec(e)) throw Error(I(299));
  var n = !1, r = "", i = fm;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Yu(e, 1, !1, null, null, n, !1, r, i), e[qt] = t.current, bi(e.nodeType === 8 ? e.parentNode : e), new Ju(t);
};
ot.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(I(188)) : (e = Object.keys(e).join(","), Error(I(268, e)));
  return e = Fp(t), e = e === null ? null : e.stateNode, e;
};
ot.flushSync = function(e) {
  return qn(e);
};
ot.hydrate = function(e, t, n) {
  if (!Pa(t)) throw Error(I(200));
  return Fa(null, e, t, !0, n);
};
ot.hydrateRoot = function(e, t, n) {
  if (!ec(e)) throw Error(I(405));
  var r = n != null && n.hydratedSources || null, i = !1, s = "", a = fm;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = cm(t, null, e, 1, n ?? null, i, !1, s, a), e[qt] = t.current, bi(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new ba(t);
};
ot.render = function(e, t, n) {
  if (!Pa(t)) throw Error(I(200));
  return Fa(null, e, t, !1, n);
};
ot.unmountComponentAtNode = function(e) {
  if (!Pa(e)) throw Error(I(40));
  return e._reactRootContainer ? (qn(function() {
    Fa(null, null, e, !1, function() {
      e._reactRootContainer = null, e[qt] = null;
    });
  }), !0) : !1;
};
ot.unstable_batchedUpdates = Xu;
ot.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Pa(n)) throw Error(I(200));
  if (e == null || e._reactInternals === void 0) throw Error(I(38));
  return Fa(e, t, n, !1, r);
};
ot.version = "18.3.1-next-f1338f8080-20240426";
function dm() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dm);
    } catch (e) {
      console.error(e);
    }
}
dm(), dp.exports = ot;
var pm = dp.exports;
const wr = /* @__PURE__ */ jr(pm);
var hm, ad = pm;
hm = ad.createRoot, ad.hydrateRoot;
var Vl = function(e, t) {
  return Vl = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Vl(e, t);
};
function yt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Vl(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var D = function() {
  return D = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, D.apply(this, arguments);
};
function Dr(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function je(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, s; r < i; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function Ue(e, t) {
  var n = t && t.cache ? t.cache : wy, r = t && t.serializer ? t.serializer : xy, i = t && t.strategy ? t.strategy : yy;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function vy(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function gy(e, t, n, r) {
  var i = vy(r) ? r : n(r), s = t.get(i);
  return typeof s > "u" && (s = e.call(this, r), t.set(i, s)), s;
}
function mm(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), s = t.get(i);
  return typeof s > "u" && (s = e.apply(this, r), t.set(i, s)), s;
}
function vm(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function yy(e, t) {
  var n = e.length === 1 ? gy : mm;
  return vm(e, this, n, t.cache.create(), t.serializer);
}
function Ey(e, t) {
  return vm(e, this, mm, t.cache.create(), t.serializer);
}
var xy = function() {
  return JSON.stringify(arguments);
};
function tc() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
tc.prototype.get = function(e) {
  return this.cache[e];
};
tc.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var wy = {
  create: function() {
    return new tc();
  }
}, $e = {
  variadic: Ey
};
function gm(e, t, n) {
  if (n === void 0 && (n = Error), !e)
    throw new n(t);
}
Ue(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.NumberFormat).bind.apply(e, je([void 0], t, !1)))();
}, {
  strategy: $e.variadic
});
Ue(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.DateTimeFormat).bind.apply(e, je([void 0], t, !1)))();
}, {
  strategy: $e.variadic
});
Ue(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.PluralRules).bind.apply(e, je([void 0], t, !1)))();
}, {
  strategy: $e.variadic
});
Ue(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.Locale).bind.apply(e, je([void 0], t, !1)))();
}, {
  strategy: $e.variadic
});
Ue(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.ListFormat).bind.apply(e, je([void 0], t, !1)))();
}, {
  strategy: $e.variadic
});
var Y;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Y || (Y = {}));
var ae;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(ae || (ae = {}));
var Lr;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(Lr || (Lr = {}));
function od(e) {
  return e.type === ae.literal;
}
function ky(e) {
  return e.type === ae.argument;
}
function ym(e) {
  return e.type === ae.number;
}
function Em(e) {
  return e.type === ae.date;
}
function xm(e) {
  return e.type === ae.time;
}
function wm(e) {
  return e.type === ae.select;
}
function km(e) {
  return e.type === ae.plural;
}
function Cy(e) {
  return e.type === ae.pound;
}
function Cm(e) {
  return e.type === ae.tag;
}
function Sm(e) {
  return !!(e && typeof e == "object" && e.type === Lr.number);
}
function Hl(e) {
  return !!(e && typeof e == "object" && e.type === Lr.dateTime);
}
var _m = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Sy = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function _y(e) {
  var t = {};
  return e.replace(Sy, function(n) {
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
var Ty = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Ny(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(Ty).filter(function(f) {
    return f.length > 0;
  }), n = [], r = 0, i = t; r < i.length; r++) {
    var s = i[r], a = s.split("/");
    if (a.length === 0)
      throw new Error("Invalid number skeleton");
    for (var o = a[0], l = a.slice(1), u = 0, c = l; u < c.length; u++) {
      var p = c[u];
      if (p.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: o, options: l });
  }
  return n;
}
function Ay(e) {
  return e.replace(/^(.*?)-/, "");
}
var ld = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Tm = /^(@+)?(\+|#+)?[rs]?$/g, Iy = /(\*)(0+)|(#+)(0+)|(0+)/g, Nm = /^(0+)$/;
function ud(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Tm, function(n, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function Am(e) {
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
function Ry(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Nm.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function cd(e) {
  var t = {}, n = Am(e);
  return n || t;
}
function by(e) {
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
        t.style = "unit", t.unit = Ay(i.options[0]);
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
        t = D(D(D({}, t), { notation: "scientific" }), i.options.reduce(function(l, u) {
          return D(D({}, l), cd(u));
        }, {}));
        continue;
      case "engineering":
        t = D(D(D({}, t), { notation: "engineering" }), i.options.reduce(function(l, u) {
          return D(D({}, l), cd(u));
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
        i.options[0].replace(Iy, function(l, u, c, p, f, v) {
          if (u)
            t.minimumIntegerDigits = c.length;
          else {
            if (p && f)
              throw new Error("We currently do not support maximum integer digits");
            if (v)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Nm.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (ld.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(ld, function(l, u, c, p, f, v) {
        return c === "*" ? t.minimumFractionDigits = u.length : p && p[0] === "#" ? t.maximumFractionDigits = p.length : f && v ? (t.minimumFractionDigits = f.length, t.maximumFractionDigits = f.length + v.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
      });
      var s = i.options[0];
      s === "w" ? t = D(D({}, t), { trailingZeroDisplay: "stripIfInteger" }) : s && (t = D(D({}, t), ud(s)));
      continue;
    }
    if (Tm.test(i.stem)) {
      t = D(D({}, t), ud(i.stem));
      continue;
    }
    var a = Am(i.stem);
    a && (t = D(D({}, t), a));
    var o = Ry(i.stem);
    o && (t = D(D({}, t), o));
  }
  return t;
}
var xs = {
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
function Py(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var s = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        s++, r++;
      var a = 1 + (s & 1), o = s < 2 ? 1 : 3 + (s >> 1), l = "a", u = Fy(t);
      for ((u == "H" || u == "k") && (o = 0); o-- > 0; )
        n += l;
      for (; a-- > 0; )
        n = u + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function Fy(e) {
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
  var i = xs[r || ""] || xs[n || ""] || xs["".concat(n, "-001")] || xs["001"];
  return i[0];
}
var Mo, Oy = new RegExp("^".concat(_m.source, "*")), My = new RegExp("".concat(_m.source, "*$"));
function Z(e, t) {
  return { start: e, end: t };
}
var Dy = !!String.prototype.startsWith && "_a".startsWith("a", 1), Ly = !!String.fromCodePoint, By = !!Object.fromEntries, Vy = !!String.prototype.codePointAt, Hy = !!String.prototype.trimStart, Uy = !!String.prototype.trimEnd, $y = !!Number.isSafeInteger, jy = $y ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Ul = !0;
try {
  var zy = Rm("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Ul = ((Mo = zy.exec("a")) === null || Mo === void 0 ? void 0 : Mo[0]) === "a";
} catch {
  Ul = !1;
}
var fd = Dy ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), $l = Ly ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    for (var r = "", i = t.length, s = 0, a; i > s; ) {
      if (a = t[s++], a > 1114111)
        throw RangeError(a + " is not a valid code point");
      r += a < 65536 ? String.fromCharCode(a) : String.fromCharCode(((a -= 65536) >> 10) + 55296, a % 1024 + 56320);
    }
    return r;
  }
), dd = (
  // native
  By ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var s = i[r], a = s[0], o = s[1];
        n[a] = o;
      }
      return n;
    }
  )
), Im = Vy ? (
  // Native
  function(t, n) {
    return t.codePointAt(n);
  }
) : (
  // IE 11
  function(t, n) {
    var r = t.length;
    if (!(n < 0 || n >= r)) {
      var i = t.charCodeAt(n), s;
      return i < 55296 || i > 56319 || n + 1 === r || (s = t.charCodeAt(n + 1)) < 56320 || s > 57343 ? i : (i - 55296 << 10) + (s - 56320) + 65536;
    }
  }
), Gy = Hy ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Oy, "");
  }
), Wy = Uy ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(My, "");
  }
);
function Rm(e, t) {
  return new RegExp(e, t);
}
var jl;
if (Ul) {
  var pd = Rm("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  jl = function(t, n) {
    var r;
    pd.lastIndex = n;
    var i = pd.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  jl = function(t, n) {
    for (var r = []; ; ) {
      var i = Im(t, n);
      if (i === void 0 || bm(i) || qy(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return $l.apply(void 0, r);
  };
var Xy = (
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
        var s = this.char();
        if (s === 123) {
          var a = this.parseArgument(t, r);
          if (a.err)
            return a;
          i.push(a.val);
        } else {
          if (s === 125 && t > 0)
            break;
          if (s === 35 && (n === "plural" || n === "selectordinal")) {
            var o = this.clonePosition();
            this.bump(), i.push({
              type: ae.pound,
              location: Z(o, this.clonePosition())
            });
          } else if (s === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(Y.UNMATCHED_CLOSING_TAG, Z(this.clonePosition(), this.clonePosition()));
          } else if (s === 60 && !this.ignoreTag && zl(this.peek() || 0)) {
            var a = this.parseTag(t, n);
            if (a.err)
              return a;
            i.push(a.val);
          } else {
            var a = this.parseLiteral(t, n);
            if (a.err)
              return a;
            i.push(a.val);
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
            type: ae.literal,
            value: "<".concat(i, "/>"),
            location: Z(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var s = this.parseMessage(t + 1, n, !0);
        if (s.err)
          return s;
        var a = s.val, o = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !zl(this.char()))
            return this.error(Y.INVALID_TAG, Z(o, this.clonePosition()));
          var l = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(Y.UNMATCHED_CLOSING_TAG, Z(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: ae.tag,
              value: i,
              children: a,
              location: Z(r, this.clonePosition())
            },
            err: null
          } : this.error(Y.INVALID_TAG, Z(o, this.clonePosition())));
        } else
          return this.error(Y.UNCLOSED_TAG, Z(r, this.clonePosition()));
      } else
        return this.error(Y.INVALID_TAG, Z(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && Ky(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var s = this.tryParseQuote(n);
        if (s) {
          i += s;
          continue;
        }
        var a = this.tryParseUnquoted(t, n);
        if (a) {
          i += a;
          continue;
        }
        var o = this.tryParseLeftAngleBracket();
        if (o) {
          i += o;
          continue;
        }
        break;
      }
      var l = Z(r, this.clonePosition());
      return {
        val: { type: ae.literal, value: i, location: l },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Qy(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return $l.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), $l(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(Y.EXPECT_ARGUMENT_CLOSING_BRACE, Z(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Y.EMPTY_ARGUMENT, Z(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(Y.MALFORMED_ARGUMENT, Z(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Y.EXPECT_ARGUMENT_CLOSING_BRACE, Z(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: ae.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: Z(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Y.EXPECT_ARGUMENT_CLOSING_BRACE, Z(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(Y.MALFORMED_ARGUMENT, Z(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = jl(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var s = this.clonePosition(), a = Z(t, s);
      return { value: r, location: a };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var s, a = this.clonePosition(), o = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (o) {
        case "":
          return this.error(Y.EXPECT_ARGUMENT_TYPE, Z(a, l));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var c = this.clonePosition(), p = this.parseSimpleArgStyleIfPossible();
            if (p.err)
              return p;
            var f = Wy(p.val);
            if (f.length === 0)
              return this.error(Y.EXPECT_ARGUMENT_STYLE, Z(this.clonePosition(), this.clonePosition()));
            var v = Z(c, this.clonePosition());
            u = { style: f, styleLocation: v };
          }
          var x = this.tryParseArgumentClose(i);
          if (x.err)
            return x;
          var E = Z(i, this.clonePosition());
          if (u && fd(u == null ? void 0 : u.style, "::", 0)) {
            var k = Gy(u.style.slice(2));
            if (o === "number") {
              var p = this.parseNumberSkeletonFromString(k, u.styleLocation);
              return p.err ? p : {
                val: { type: ae.number, value: r, location: E, style: p.val },
                err: null
              };
            } else {
              if (k.length === 0)
                return this.error(Y.EXPECT_DATE_TIME_SKELETON, E);
              var m = k;
              this.locale && (m = Py(k, this.locale));
              var f = {
                type: Lr.dateTime,
                pattern: m,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? _y(m) : {}
              }, h = o === "date" ? ae.date : ae.time;
              return {
                val: { type: h, value: r, location: E, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: o === "number" ? ae.number : o === "date" ? ae.date : ae.time,
              value: r,
              location: E,
              style: (s = u == null ? void 0 : u.style) !== null && s !== void 0 ? s : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var g = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Y.EXPECT_SELECT_ARGUMENT_OPTIONS, Z(g, D({}, g)));
          this.bumpSpace();
          var w = this.parseIdentifierIfPossible(), S = 0;
          if (o !== "select" && w.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Y.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Z(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var p = this.tryParseDecimalInteger(Y.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Y.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (p.err)
              return p;
            this.bumpSpace(), w = this.parseIdentifierIfPossible(), S = p.val;
          }
          var _ = this.tryParsePluralOrSelectOptions(t, o, n, w);
          if (_.err)
            return _;
          var x = this.tryParseArgumentClose(i);
          if (x.err)
            return x;
          var T = Z(i, this.clonePosition());
          return o === "select" ? {
            val: {
              type: ae.select,
              value: r,
              options: dd(_.val),
              location: T
            },
            err: null
          } : {
            val: {
              type: ae.plural,
              value: r,
              options: dd(_.val),
              offset: S,
              pluralType: o === "plural" ? "cardinal" : "ordinal",
              location: T
            },
            err: null
          };
        }
        default:
          return this.error(Y.INVALID_ARGUMENT_TYPE, Z(a, l));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(Y.EXPECT_ARGUMENT_CLOSING_BRACE, Z(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Y.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Z(i, this.clonePosition()));
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
        r = Ny(t);
      } catch {
        return this.error(Y.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Lr.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? by(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var s, a = !1, o = [], l = /* @__PURE__ */ new Set(), u = i.value, c = i.location; ; ) {
        if (u.length === 0) {
          var p = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(Y.EXPECT_PLURAL_ARGUMENT_SELECTOR, Y.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            c = Z(p, this.clonePosition()), u = this.message.slice(p.offset, this.offset());
          } else
            break;
        }
        if (l.has(u))
          return this.error(n === "select" ? Y.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Y.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        u === "other" && (a = !0), this.bumpSpace();
        var v = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Y.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Y.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Z(this.clonePosition(), this.clonePosition()));
        var x = this.parseMessage(t + 1, n, r);
        if (x.err)
          return x;
        var E = this.tryParseArgumentClose(v);
        if (E.err)
          return E;
        o.push([
          u,
          {
            value: x.val,
            location: Z(v, this.clonePosition())
          }
        ]), l.add(u), this.bumpSpace(), s = this.parseIdentifierIfPossible(), u = s.value, c = s.location;
      }
      return o.length === 0 ? this.error(n === "select" ? Y.EXPECT_SELECT_ARGUMENT_SELECTOR : Y.EXPECT_PLURAL_ARGUMENT_SELECTOR, Z(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(Y.MISSING_OTHER_CLAUSE, Z(this.clonePosition(), this.clonePosition())) : { val: o, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var s = !1, a = 0; !this.isEOF(); ) {
        var o = this.char();
        if (o >= 48 && o <= 57)
          s = !0, a = a * 10 + (o - 48), this.bump();
        else
          break;
      }
      var l = Z(i, this.clonePosition());
      return s ? (a *= r, jy(a) ? { val: a, err: null } : this.error(n, l)) : this.error(t, l);
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
      var n = Im(this.message, t);
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
      if (fd(this.message, t, this.offset())) {
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
      for (; !this.isEOF() && bm(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function zl(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Qy(e) {
  return zl(e) || e === 47;
}
function Ky(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function bm(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function qy(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Gl(e) {
  e.forEach(function(t) {
    if (delete t.location, wm(t) || km(t))
      for (var n in t.options)
        delete t.options[n].location, Gl(t.options[n].value);
    else ym(t) && Sm(t.style) || (Em(t) || xm(t)) && Hl(t.style) ? delete t.style.location : Cm(t) && Gl(t.children);
  });
}
function Yy(e, t) {
  t === void 0 && (t = {}), t = D({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new Xy(e, t).parse();
  if (n.err) {
    var r = SyntaxError(Y[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || Gl(n.val), n.val;
}
var Ut;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(Ut || (Ut = {}));
var bn = (
  /** @class */
  function(e) {
    yt(t, e);
    function t(n, r, i) {
      var s = e.call(this, n) || this;
      return s.code = r, s.originalMessage = i, s;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), hd = (
  /** @class */
  function(e) {
    yt(t, e);
    function t(n, r, i, s) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Ut.INVALID_VALUE, s) || this;
    }
    return t;
  }(bn)
), Zy = (
  /** @class */
  function(e) {
    yt(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Ut.INVALID_VALUE, i) || this;
    }
    return t;
  }(bn)
), Jy = (
  /** @class */
  function(e) {
    yt(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Ut.MISSING_VALUE, r) || this;
    }
    return t;
  }(bn)
), Be;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(Be || (Be = {}));
function eE(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== Be.literal || n.type !== Be.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function Pm(e) {
  return typeof e == "function";
}
function Bs(e, t, n, r, i, s, a) {
  if (e.length === 1 && od(e[0]))
    return [
      {
        type: Be.literal,
        value: e[0].value
      }
    ];
  for (var o = [], l = 0, u = e; l < u.length; l++) {
    var c = u[l];
    if (od(c)) {
      o.push({
        type: Be.literal,
        value: c.value
      });
      continue;
    }
    if (Cy(c)) {
      typeof s == "number" && o.push({
        type: Be.literal,
        value: n.getNumberFormat(t).format(s)
      });
      continue;
    }
    var p = c.value;
    if (!(i && p in i))
      throw new Jy(p, a);
    var f = i[p];
    if (ky(c)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), o.push({
        type: typeof f == "string" ? Be.literal : Be.object,
        value: f
      });
      continue;
    }
    if (Em(c)) {
      var v = typeof c.style == "string" ? r.date[c.style] : Hl(c.style) ? c.style.parsedOptions : void 0;
      o.push({
        type: Be.literal,
        value: n.getDateTimeFormat(t, v).format(f)
      });
      continue;
    }
    if (xm(c)) {
      var v = typeof c.style == "string" ? r.time[c.style] : Hl(c.style) ? c.style.parsedOptions : r.time.medium;
      o.push({
        type: Be.literal,
        value: n.getDateTimeFormat(t, v).format(f)
      });
      continue;
    }
    if (ym(c)) {
      var v = typeof c.style == "string" ? r.number[c.style] : Sm(c.style) ? c.style.parsedOptions : void 0;
      v && v.scale && (f = f * (v.scale || 1)), o.push({
        type: Be.literal,
        value: n.getNumberFormat(t, v).format(f)
      });
      continue;
    }
    if (Cm(c)) {
      var x = c.children, E = c.value, k = i[E];
      if (!Pm(k))
        throw new Zy(E, "function", a);
      var m = Bs(x, t, n, r, i, s), h = k(m.map(function(S) {
        return S.value;
      }));
      Array.isArray(h) || (h = [h]), o.push.apply(o, h.map(function(S) {
        return {
          type: typeof S == "string" ? Be.literal : Be.object,
          value: S
        };
      }));
    }
    if (wm(c)) {
      var g = c.options[f] || c.options.other;
      if (!g)
        throw new hd(c.value, f, Object.keys(c.options), a);
      o.push.apply(o, Bs(g.value, t, n, r, i));
      continue;
    }
    if (km(c)) {
      var g = c.options["=".concat(f)];
      if (!g) {
        if (!Intl.PluralRules)
          throw new bn(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Ut.MISSING_INTL_API, a);
        var w = n.getPluralRules(t, { type: c.pluralType }).select(f - (c.offset || 0));
        g = c.options[w] || c.options.other;
      }
      if (!g)
        throw new hd(c.value, f, Object.keys(c.options), a);
      o.push.apply(o, Bs(g.value, t, n, r, i, f - (c.offset || 0)));
      continue;
    }
  }
  return eE(o);
}
function tE(e, t) {
  return t ? D(D(D({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = D(D({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function nE(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = tE(e[r], t[r]), n;
  }, D({}, e)) : e;
}
function Do(e) {
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
function rE(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Ue(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, je([void 0], n, !1)))();
    }, {
      cache: Do(e.number),
      strategy: $e.variadic
    }),
    getDateTimeFormat: Ue(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, je([void 0], n, !1)))();
    }, {
      cache: Do(e.dateTime),
      strategy: $e.variadic
    }),
    getPluralRules: Ue(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, je([void 0], n, !1)))();
    }, {
      cache: Do(e.pluralRules),
      strategy: $e.variadic
    })
  };
}
var Fm = (
  /** @class */
  function() {
    function e(t, n, r, i) {
      n === void 0 && (n = e.defaultLocale);
      var s = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(l) {
        var u = s.formatToParts(l);
        if (u.length === 1)
          return u[0].value;
        var c = u.reduce(function(p, f) {
          return !p.length || f.type !== Be.literal || typeof p[p.length - 1] != "string" ? p.push(f.value) : p[p.length - 1] += f.value, p;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(l) {
        return Bs(s.ast, s.locales, s.formatters, s.formats, l, void 0, s.message);
      }, this.resolvedOptions = function() {
        var l;
        return {
          locale: ((l = s.resolvedLocale) === null || l === void 0 ? void 0 : l.toString()) || Intl.NumberFormat.supportedLocalesOf(s.locales)[0]
        };
      }, this.getAst = function() {
        return s.ast;
      }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var a = i || {};
        a.formatters;
        var o = Dr(a, ["formatters"]);
        this.ast = e.__parse(t, D(D({}, o), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = nE(e.formats, r), this.formatters = i && i.formatters || rE(this.formatterCache);
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
    }, e.__parse = Yy, e.formats = {
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
), Yn;
(function(e) {
  e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(Yn || (Yn = {}));
var Qi = (
  /** @class */
  function(e) {
    yt(t, e);
    function t(n, r, i) {
      var s = this, a = i ? i instanceof Error ? i : new Error(String(i)) : void 0;
      return s = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, `
`).concat(a ? `
`.concat(a.message, `
`).concat(a.stack) : "")) || this, s.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(s, t), s;
    }
    return t;
  }(Error)
), iE = (
  /** @class */
  function(e) {
    yt(t, e);
    function t(n, r) {
      return e.call(this, Yn.UNSUPPORTED_FORMATTER, n, r) || this;
    }
    return t;
  }(Qi)
), sE = (
  /** @class */
  function(e) {
    yt(t, e);
    function t(n, r) {
      return e.call(this, Yn.INVALID_CONFIG, n, r) || this;
    }
    return t;
  }(Qi)
), md = (
  /** @class */
  function(e) {
    yt(t, e);
    function t(n, r) {
      return e.call(this, Yn.MISSING_DATA, n, r) || this;
    }
    return t;
  }(Qi)
), Et = (
  /** @class */
  function(e) {
    yt(t, e);
    function t(n, r, i) {
      var s = e.call(this, Yn.FORMAT_ERROR, "".concat(n, `
Locale: `).concat(r, `
`), i) || this;
      return s.locale = r, s;
    }
    return t;
  }(Qi)
), Lo = (
  /** @class */
  function(e) {
    yt(t, e);
    function t(n, r, i, s) {
      var a = e.call(this, "".concat(n, `
MessageID: `).concat(i == null ? void 0 : i.id, `
Default Message: `).concat(i == null ? void 0 : i.defaultMessage, `
Description: `).concat(i == null ? void 0 : i.description, `
`), r, s) || this;
      return a.descriptor = i, a.locale = r, a;
    }
    return t;
  }(Et)
), aE = (
  /** @class */
  function(e) {
    yt(t, e);
    function t(n, r) {
      var i = e.call(this, Yn.MISSING_TRANSLATION, 'Missing message: "'.concat(n.id, '" for locale "').concat(r, '", using ').concat(n.defaultMessage ? "default message (".concat(typeof n.defaultMessage == "string" ? n.defaultMessage : n.defaultMessage.map(function(s) {
        var a;
        return (a = s.value) !== null && a !== void 0 ? a : JSON.stringify(s);
      }).join(), ")") : "id", " as fallback.")) || this;
      return i.descriptor = n, i;
    }
    return t;
  }(Qi)
);
function tr(e, t, n) {
  return n === void 0 && (n = {}), t.reduce(function(r, i) {
    return i in e ? r[i] = e[i] : i in n && (r[i] = n[i]), r;
  }, {});
}
var oE = function(e) {
}, lE = function(e) {
}, Om = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: oE,
  onWarn: lE
};
function Mm() {
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
function Fn(e) {
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
function uE(e) {
  e === void 0 && (e = Mm());
  var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, i = Ue(function() {
    for (var o, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((o = Intl.DateTimeFormat).bind.apply(o, je([void 0], l, !1)))();
  }, {
    cache: Fn(e.dateTime),
    strategy: $e.variadic
  }), s = Ue(function() {
    for (var o, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((o = Intl.NumberFormat).bind.apply(o, je([void 0], l, !1)))();
  }, {
    cache: Fn(e.number),
    strategy: $e.variadic
  }), a = Ue(function() {
    for (var o, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((o = Intl.PluralRules).bind.apply(o, je([void 0], l, !1)))();
  }, {
    cache: Fn(e.pluralRules),
    strategy: $e.variadic
  });
  return {
    getDateTimeFormat: i,
    getNumberFormat: s,
    getMessageFormat: Ue(function(o, l, u, c) {
      return new Fm(o, l, u, D({ formatters: {
        getNumberFormat: s,
        getDateTimeFormat: i,
        getPluralRules: a
      } }, c || {}));
    }, {
      cache: Fn(e.message),
      strategy: $e.variadic
    }),
    getRelativeTimeFormat: Ue(function() {
      for (var o = [], l = 0; l < arguments.length; l++)
        o[l] = arguments[l];
      return new (t.bind.apply(t, je([void 0], o, !1)))();
    }, {
      cache: Fn(e.relativeTime),
      strategy: $e.variadic
    }),
    getPluralRules: a,
    getListFormat: Ue(function() {
      for (var o = [], l = 0; l < arguments.length; l++)
        o[l] = arguments[l];
      return new (n.bind.apply(n, je([void 0], o, !1)))();
    }, {
      cache: Fn(e.list),
      strategy: $e.variadic
    }),
    getDisplayNames: Ue(function() {
      for (var o = [], l = 0; l < arguments.length; l++)
        o[l] = arguments[l];
      return new (r.bind.apply(r, je([void 0], o, !1)))();
    }, {
      cache: Fn(e.displayNames),
      strategy: $e.variadic
    })
  };
}
function nc(e, t, n, r) {
  var i = e && e[t], s;
  if (i && (s = i[n]), s)
    return s;
  r(new iE("No ".concat(t, " format named: ").concat(n)));
}
function ws(e, t) {
  return Object.keys(e).reduce(function(n, r) {
    return n[r] = D({ timeZone: t }, e[r]), n;
  }, {});
}
function vd(e, t) {
  var n = Object.keys(D(D({}, e), t));
  return n.reduce(function(r, i) {
    return r[i] = D(D({}, e[i] || {}), t[i] || {}), r;
  }, {});
}
function gd(e, t) {
  if (!t)
    return e;
  var n = Fm.formats;
  return D(D(D({}, n), e), { date: vd(ws(n.date, t), ws(e.date || {}, t)), time: vd(ws(n.time, t), ws(e.time || {}, t)) });
}
var Wl = function(e, t, n, r, i) {
  var s = e.locale, a = e.formats, o = e.messages, l = e.defaultLocale, u = e.defaultFormats, c = e.fallbackOnEmptyString, p = e.onError, f = e.timeZone, v = e.defaultRichTextElements;
  n === void 0 && (n = { id: "" });
  var x = n.id, E = n.defaultMessage;
  gm(!!x, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var k = String(x), m = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    o && Object.prototype.hasOwnProperty.call(o, k) && o[k]
  );
  if (Array.isArray(m) && m.length === 1 && m[0].type === ae.literal)
    return m[0].value;
  if (!r && m && typeof m == "string" && !v)
    return m.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (r = D(D({}, v), r || {}), a = gd(a, f), u = gd(u, f), !m) {
    if (c === !1 && m === "")
      return m;
    if ((!E || s && s.toLowerCase() !== l.toLowerCase()) && p(new aE(n, s)), E)
      try {
        var h = t.getMessageFormat(E, l, u, i);
        return h.format(r);
      } catch (g) {
        return p(new Lo('Error formatting default message for: "'.concat(k, '", rendering default message verbatim'), s, n, g)), typeof E == "string" ? E : k;
      }
    return k;
  }
  try {
    var h = t.getMessageFormat(m, s, a, D({ formatters: t }, i || {}));
    return h.format(r);
  } catch (g) {
    p(new Lo('Error formatting message: "'.concat(k, '", using ').concat(E ? "default message" : "id", " as fallback."), s, n, g));
  }
  if (E)
    try {
      var h = t.getMessageFormat(E, l, u, i);
      return h.format(r);
    } catch (g) {
      p(new Lo('Error formatting the default message for: "'.concat(k, '", rendering message verbatim'), s, n, g));
    }
  return typeof m == "string" ? m : typeof E == "string" ? E : k;
}, Dm = [
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
function Oa(e, t, n, r) {
  var i = e.locale, s = e.formats, a = e.onError, o = e.timeZone;
  r === void 0 && (r = {});
  var l = r.format, u = D(D({}, o && { timeZone: o }), l && nc(s, t, l, a)), c = tr(r, Dm, u);
  return t === "time" && !c.hour && !c.minute && !c.second && !c.timeStyle && !c.dateStyle && (c = D(D({}, c), { hour: "numeric", minute: "numeric" })), n(i, c);
}
function cE(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], s = n[1], a = s === void 0 ? {} : s, o = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Oa(e, "date", t, a).format(o);
  } catch (l) {
    e.onError(new Et("Error formatting date.", e.locale, l));
  }
  return String(o);
}
function fE(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], s = n[1], a = s === void 0 ? {} : s, o = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Oa(e, "time", t, a).format(o);
  } catch (l) {
    e.onError(new Et("Error formatting time.", e.locale, l));
  }
  return String(o);
}
function dE(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], s = n[1], a = n[2], o = a === void 0 ? {} : a, l = e.timeZone, u = e.locale, c = e.onError, p = tr(o, Dm, l ? { timeZone: l } : {});
  try {
    return t(u, p).formatRange(i, s);
  } catch (f) {
    c(new Et("Error formatting date time range.", e.locale, f));
  }
  return String(i);
}
function pE(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], s = n[1], a = s === void 0 ? {} : s, o = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Oa(e, "date", t, a).formatToParts(o);
  } catch (l) {
    e.onError(new Et("Error formatting date.", e.locale, l));
  }
  return [];
}
function hE(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], s = n[1], a = s === void 0 ? {} : s, o = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Oa(e, "time", t, a).formatToParts(o);
  } catch (l) {
    e.onError(new Et("Error formatting time.", e.locale, l));
  }
  return [];
}
var mE = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function vE(e, t, n, r) {
  var i = e.locale, s = e.onError, a = Intl.DisplayNames;
  a || s(new bn(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, Ut.MISSING_INTL_API));
  var o = tr(r, mE);
  try {
    return t(i, o).of(n);
  } catch (l) {
    s(new Et("Error formatting display name.", i, l));
  }
}
var gE = [
  "type",
  "style"
], yd = Date.now();
function yE(e) {
  return "".concat(yd, "_").concat(e, "_").concat(yd);
}
function EE(e, t, n, r) {
  r === void 0 && (r = {});
  var i = Lm(e, t, n, r).reduce(function(s, a) {
    var o = a.value;
    return typeof o != "string" ? s.push(o) : typeof s[s.length - 1] == "string" ? s[s.length - 1] += o : s.push(o), s;
  }, []);
  return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function Lm(e, t, n, r) {
  var i = e.locale, s = e.onError;
  r === void 0 && (r = {});
  var a = Intl.ListFormat;
  a || s(new bn(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, Ut.MISSING_INTL_API));
  var o = tr(r, gE);
  try {
    var l = {}, u = n.map(function(c, p) {
      if (typeof c == "object") {
        var f = yE(p);
        return l[f] = c, f;
      }
      return String(c);
    });
    return t(i, o).formatToParts(u).map(function(c) {
      return c.type === "literal" ? c : D(D({}, c), { value: l[c.value] || c.value });
    });
  } catch (c) {
    s(new Et("Error formatting list.", i, c));
  }
  return n;
}
var xE = ["type"];
function wE(e, t, n, r) {
  var i = e.locale, s = e.onError;
  r === void 0 && (r = {}), Intl.PluralRules || s(new bn(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Ut.MISSING_INTL_API));
  var a = tr(r, xE);
  try {
    return t(i, a).select(n);
  } catch (o) {
    s(new Et("Error formatting plural.", i, o));
  }
  return "other";
}
var kE = ["numeric", "style"];
function CE(e, t, n) {
  var r = e.locale, i = e.formats, s = e.onError;
  n === void 0 && (n = {});
  var a = n.format, o = !!a && nc(i, "relative", a, s) || {}, l = tr(n, kE, o);
  return t(r, l);
}
function SE(e, t, n, r, i) {
  i === void 0 && (i = {}), r || (r = "second");
  var s = Intl.RelativeTimeFormat;
  s || e.onError(new bn(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, Ut.MISSING_INTL_API));
  try {
    return CE(e, t, i).format(n, r);
  } catch (a) {
    e.onError(new Et("Error formatting relative time.", e.locale, a));
  }
  return String(n);
}
var _E = [
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
function Bm(e, t, n) {
  var r = e.locale, i = e.formats, s = e.onError;
  n === void 0 && (n = {});
  var a = n.format, o = a && nc(i, "number", a, s) || {}, l = tr(n, _E, o);
  return t(r, l);
}
function TE(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Bm(e, t, r).format(n);
  } catch (i) {
    e.onError(new Et("Error formatting number.", e.locale, i));
  }
  return String(n);
}
function NE(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Bm(e, t, r).formatToParts(n);
  } catch (i) {
    e.onError(new Et("Error formatting number.", e.locale, i));
  }
  return [];
}
function AE(e) {
  var t = e ? e[Object.keys(e)[0]] : void 0;
  return typeof t == "string";
}
function IE(e) {
  e.onWarn && e.defaultRichTextElements && AE(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`);
}
function RE(e, t) {
  var n = uE(t), r = D(D({}, Om), e), i = r.locale, s = r.defaultLocale, a = r.onError;
  return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && a ? a(new md('Missing locale data for locale: "'.concat(i, '" in Intl.NumberFormat. Using default locale: "').concat(s, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && a && a(new md('Missing locale data for locale: "'.concat(i, '" in Intl.DateTimeFormat. Using default locale: "').concat(s, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (a && a(new sE('"locale" was not configured, using "'.concat(s, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"), IE(r), D(D({}, r), {
    formatters: n,
    formatNumber: TE.bind(null, r, n.getNumberFormat),
    formatNumberToParts: NE.bind(null, r, n.getNumberFormat),
    formatRelativeTime: SE.bind(null, r, n.getRelativeTimeFormat),
    formatDate: cE.bind(null, r, n.getDateTimeFormat),
    formatDateToParts: pE.bind(null, r, n.getDateTimeFormat),
    formatTime: fE.bind(null, r, n.getDateTimeFormat),
    formatDateTimeRange: dE.bind(null, r, n.getDateTimeFormat),
    formatTimeToParts: hE.bind(null, r, n.getDateTimeFormat),
    formatPlural: wE.bind(null, r, n.getPluralRules),
    // @ts-expect-error TODO: will get to this later
    formatMessage: Wl.bind(null, r, n),
    // @ts-expect-error TODO: will get to this later
    $t: Wl.bind(null, r, n),
    formatList: EE.bind(null, r, n.getListFormat),
    formatListToParts: Lm.bind(null, r, n.getListFormat),
    formatDisplayName: vE.bind(null, r, n.getDisplayNames)
  });
}
function Vm(e) {
  gm(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var Hm = D(D({}, Om), { textComponent: C.Fragment });
function bE(e) {
  return function(t) {
    return e(C.Children.toArray(t));
  };
}
function Xl(e, t) {
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
var Um = { exports: {} }, te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce = typeof Symbol == "function" && Symbol.for, rc = Ce ? Symbol.for("react.element") : 60103, ic = Ce ? Symbol.for("react.portal") : 60106, Ma = Ce ? Symbol.for("react.fragment") : 60107, Da = Ce ? Symbol.for("react.strict_mode") : 60108, La = Ce ? Symbol.for("react.profiler") : 60114, Ba = Ce ? Symbol.for("react.provider") : 60109, Va = Ce ? Symbol.for("react.context") : 60110, sc = Ce ? Symbol.for("react.async_mode") : 60111, Ha = Ce ? Symbol.for("react.concurrent_mode") : 60111, Ua = Ce ? Symbol.for("react.forward_ref") : 60112, $a = Ce ? Symbol.for("react.suspense") : 60113, PE = Ce ? Symbol.for("react.suspense_list") : 60120, ja = Ce ? Symbol.for("react.memo") : 60115, za = Ce ? Symbol.for("react.lazy") : 60116, FE = Ce ? Symbol.for("react.block") : 60121, OE = Ce ? Symbol.for("react.fundamental") : 60117, ME = Ce ? Symbol.for("react.responder") : 60118, DE = Ce ? Symbol.for("react.scope") : 60119;
function ut(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case rc:
        switch (e = e.type, e) {
          case sc:
          case Ha:
          case Ma:
          case La:
          case Da:
          case $a:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Va:
              case Ua:
              case za:
              case ja:
              case Ba:
                return e;
              default:
                return t;
            }
        }
      case ic:
        return t;
    }
  }
}
function $m(e) {
  return ut(e) === Ha;
}
te.AsyncMode = sc;
te.ConcurrentMode = Ha;
te.ContextConsumer = Va;
te.ContextProvider = Ba;
te.Element = rc;
te.ForwardRef = Ua;
te.Fragment = Ma;
te.Lazy = za;
te.Memo = ja;
te.Portal = ic;
te.Profiler = La;
te.StrictMode = Da;
te.Suspense = $a;
te.isAsyncMode = function(e) {
  return $m(e) || ut(e) === sc;
};
te.isConcurrentMode = $m;
te.isContextConsumer = function(e) {
  return ut(e) === Va;
};
te.isContextProvider = function(e) {
  return ut(e) === Ba;
};
te.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === rc;
};
te.isForwardRef = function(e) {
  return ut(e) === Ua;
};
te.isFragment = function(e) {
  return ut(e) === Ma;
};
te.isLazy = function(e) {
  return ut(e) === za;
};
te.isMemo = function(e) {
  return ut(e) === ja;
};
te.isPortal = function(e) {
  return ut(e) === ic;
};
te.isProfiler = function(e) {
  return ut(e) === La;
};
te.isStrictMode = function(e) {
  return ut(e) === Da;
};
te.isSuspense = function(e) {
  return ut(e) === $a;
};
te.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ma || e === Ha || e === La || e === Da || e === $a || e === PE || typeof e == "object" && e !== null && (e.$$typeof === za || e.$$typeof === ja || e.$$typeof === Ba || e.$$typeof === Va || e.$$typeof === Ua || e.$$typeof === OE || e.$$typeof === ME || e.$$typeof === DE || e.$$typeof === FE);
};
te.typeOf = ut;
Um.exports = te;
var LE = Um.exports, jm = LE, BE = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, VE = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, zm = {};
zm[jm.ForwardRef] = BE;
zm[jm.Memo] = VE;
var ac = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = C.createContext(null)) : C.createContext(null);
ac.Consumer;
var HE = ac.Provider, UE = HE, $E = ac;
function Ga() {
  var e = C.useContext($E);
  return Vm(e), e;
}
var Ql;
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(Ql || (Ql = {}));
var Kl;
(function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(Kl || (Kl = {}));
function Gm(e) {
  var t = function(n) {
    var r = Ga(), i = n.value, s = n.children, a = Dr(n, ["value", "children"]), o = typeof i == "string" ? new Date(i || 0) : i, l = e === "formatDate" ? r.formatDateToParts(o, a) : r.formatTimeToParts(o, a);
    return s(l);
  };
  return t.displayName = Kl[e], t;
}
function Ki(e) {
  var t = function(n) {
    var r = Ga(), i = n.value, s = n.children, a = Dr(
      n,
      ["value", "children"]
    ), o = r[e](i, a);
    if (typeof s == "function")
      return s(o);
    var l = r.textComponent || C.Fragment;
    return C.createElement(l, null, o);
  };
  return t.displayName = Ql[e], t;
}
function Wm(e) {
  return e && Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    return t[n] = Pm(r) ? bE(r) : r, t;
  }, {});
}
var Ed = function(e, t, n, r) {
  for (var i = [], s = 4; s < arguments.length; s++)
    i[s - 4] = arguments[s];
  var a = Wm(r), o = Wl.apply(void 0, je([
    e,
    t,
    n,
    a
  ], i, !1));
  return Array.isArray(o) ? C.Children.toArray(o) : o;
}, xd = function(e, t) {
  var n = e.defaultRichTextElements, r = Dr(e, ["defaultRichTextElements"]), i = Wm(n), s = RE(D(D(D({}, Hm), r), { defaultRichTextElements: i }), t), a = {
    locale: s.locale,
    timeZone: s.timeZone,
    fallbackOnEmptyString: s.fallbackOnEmptyString,
    formats: s.formats,
    defaultLocale: s.defaultLocale,
    defaultFormats: s.defaultFormats,
    messages: s.messages,
    onError: s.onError,
    defaultRichTextElements: i
  };
  return D(D({}, s), {
    formatMessage: Ed.bind(
      null,
      a,
      // @ts-expect-error fix this
      s.formatters
    ),
    // @ts-expect-error fix this
    $t: Ed.bind(null, a, s.formatters)
  });
};
function Bo(e) {
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
var jE = (
  /** @class */
  function(e) {
    yt(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n.cache = Mm(), n.state = {
        cache: n.cache,
        intl: xd(Bo(n.props), n.cache),
        prevConfig: Bo(n.props)
      }, n;
    }
    return t.getDerivedStateFromProps = function(n, r) {
      var i = r.prevConfig, s = r.cache, a = Bo(n);
      return Xl(i, a) ? null : {
        intl: xd(a, s),
        prevConfig: a
      };
    }, t.prototype.render = function() {
      return Vm(this.state.intl), C.createElement(UE, { value: this.state.intl }, this.props.children);
    }, t.displayName = "IntlProvider", t.defaultProps = Hm, t;
  }(C.PureComponent)
);
function zE(e, t) {
  var n = e.values, r = Dr(e, ["values"]), i = t.values, s = Dr(t, ["values"]);
  return Xl(i, n) && Xl(r, s);
}
function Xm(e) {
  var t = Ga(), n = t.formatMessage, r = t.textComponent, i = r === void 0 ? C.Fragment : r, s = e.id, a = e.description, o = e.defaultMessage, l = e.values, u = e.children, c = e.tagName, p = c === void 0 ? i : c, f = e.ignoreTag, v = { id: s, description: a, defaultMessage: o }, x = n(v, l, {
    ignoreTag: f
  });
  return typeof u == "function" ? u(Array.isArray(x) ? x : [x]) : p ? C.createElement(p, null, C.Children.toArray(x)) : C.createElement(C.Fragment, null, x);
}
Xm.displayName = "FormattedMessage";
var Qm = C.memo(Xm, zE);
Qm.displayName = "MemoizedFormattedMessage";
Ki("formatDate");
Ki("formatTime");
Ki("formatNumber");
Ki("formatList");
Ki("formatDisplayName");
Gm("formatDate");
Gm("formatTime");
var Km = { exports: {} };
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
})(Km);
var GE = Km.exports;
const $ = /* @__PURE__ */ jr(GE);
function V() {
  return V = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, V.apply(null, arguments);
}
function ne(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
var oc = /* @__PURE__ */ y.createContext({});
oc.Consumer;
oc.Provider;
function Ee(e, t) {
  var n = C.useContext(oc);
  return e || n[t] || t;
}
function WE() {
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
var XE = ["as", "disabled", "onKeyDown"];
function wd(e) {
  return !e || e.trim() === "#";
}
var lc = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, s = e.onKeyDown, a = ne(e, XE), o = function(c) {
    var p = a.href, f = a.onClick;
    if ((i || wd(p)) && c.preventDefault(), i) {
      c.stopPropagation();
      return;
    }
    f && f(c);
  }, l = function(c) {
    c.key === " " && (c.preventDefault(), o(c));
  };
  return wd(a.href) && (a.role = a.role || "button", a.href = a.href || "#"), i && (a.tabIndex = -1, a["aria-disabled"] = !0), /* @__PURE__ */ y.createElement(r, V({
    ref: t
  }, a, {
    onClick: o,
    onKeyDown: WE(l, s)
  }));
});
lc.displayName = "SafeAnchor";
var QE = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"], KE = {
  variant: "primary",
  active: !1,
  disabled: !1
}, uc = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.size, s = e.active, a = e.className, o = e.block, l = e.type, u = e.as, c = ne(e, QE), p = Ee(n, "btn"), f = $(a, p, s && "active", r && p + "-" + r, o && p + "-block", i && p + "-" + i);
  if (c.href)
    return /* @__PURE__ */ y.createElement(lc, V({}, c, {
      as: u,
      ref: t,
      className: $(f, c.disabled && "disabled")
    }));
  t && (c.ref = t), l ? c.type = l : u || (c.type = "button");
  var v = u || "button";
  return /* @__PURE__ */ y.createElement(v, V({}, c, {
    className: f
  }));
});
uc.displayName = "Button";
uc.defaultProps = KE;
var qm = { exports: {} }, qE = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", YE = qE, ZE = YE;
function Ym() {
}
function Zm() {
}
Zm.resetWarningCache = Ym;
var JE = function() {
  function e(r, i, s, a, o, l) {
    if (l !== ZE) {
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
    checkPropTypes: Zm,
    resetWarningCache: Ym
  };
  return n.PropTypes = n, n;
};
qm.exports = JE();
var ex = qm.exports;
const d = /* @__PURE__ */ jr(ex);
let kd = 0;
const cc = (e = "id") => (kd += 1, `${e}${kd}`);
let ci = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function tx(e, t, n) {
  class r extends y.Component {
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
        case ci.MOVED:
          this.warn(`${t}: The prop '${a}' has been moved to '${l}'.`), s[l] = this.props[a];
          break;
        case ci.REMOVED:
          this.warn(`${t}: The prop '${a}' has been removed. '${p}'`);
          break;
        case ci.FORMAT:
          u(this.props[a]) ? s[a] = this.props[a] : (this.warn(`${t}: The prop '${a}' expects a new format. ${p}`), s[a] = c(this.props[a], this.props));
          break;
        case ci.MOVED_AND_FORMAT: {
          const f = this.props[a];
          let v = `${t}: The prop '${a}' has been moved to '${l}'`;
          u && !u(f) && (v += " and expects a new format"), v += p ? `. ${p}` : "", this.warn(v), s[l] = c ? c(f, this.props) : f;
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
      return /* @__PURE__ */ y.createElement(e, {
        ...a
      }, this.props.children || s);
    }
  }
  return (
    // eslint-disable-next-line react/static-property-placement
    qc(r, "displayName", `withDeprecatedProps(${t})`), r
  );
}
function fc({
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
    return l || (u["aria-label"] = void 0, u["aria-hidden"] = !0), /* @__PURE__ */ y.createElement("span", {
      className: $("pgn__icon", {
        [`pgn__icon__${a}`]: !!a
      }, n),
      id: t,
      ...o
    }, /* @__PURE__ */ y.createElement(e, {
      role: "img",
      focusable: !1,
      ...u
    }), i && /* @__PURE__ */ y.createElement("span", {
      className: "sr-only"
    }, i));
  }
  return /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement("span", {
    id: t || cc("Icon"),
    className: n,
    "aria-hidden": r
  }), i && /* @__PURE__ */ y.createElement("span", {
    className: "sr-only"
  }, i));
}
fc.propTypes = {
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
fc.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const _n = tx(fc, "Icon", {
  className: {
    deprType: ci.FORMAT,
    expect: (e) => typeof e == "string",
    transform: (e) => Array.isArray(e) ? e.join(" ") : e,
    message: "It should be a string."
  }
}), wn = /* @__PURE__ */ y.forwardRef(({
  children: e,
  iconAfter: t,
  iconBefore: n,
  size: r,
  ...i
}, s) => /* @__PURE__ */ y.createElement(uc, {
  size: r,
  ...i,
  className: $(i.className),
  ref: s
}, n && /* @__PURE__ */ y.createElement(_n, {
  className: "btn-icon-before",
  size: r,
  src: n
}), e, t && /* @__PURE__ */ y.createElement(_n, {
  className: "btn-icon-after",
  size: r,
  src: t
})));
var Cd = { exports: {} }, ql = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    function i(a, o, l, u, c, p) {
      var f = u || "<<anonymous>>", v = p || l;
      if (o[l] == null)
        return a ? new Error("Required " + c + " `" + v + "` was not specified " + ("in `" + f + "`.")) : null;
      for (var x = arguments.length, E = Array(x > 6 ? x - 6 : 0), k = 6; k < x; k++)
        E[k - 6] = arguments[k];
      return r.apply(void 0, [o, l, f, c, v].concat(E));
    }
    var s = i.bind(null, !1);
    return s.isRequired = i.bind(null, !0), s;
  }
  e.exports = t.default;
})(ql, ql.exports);
var nx = ql.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var n = nx, r = i(n);
  function i(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function s() {
    for (var a = arguments.length, o = Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    function u() {
      for (var c = arguments.length, p = Array(c), f = 0; f < c; f++)
        p[f] = arguments[f];
      var v = null;
      return o.forEach(function(x) {
        if (v == null) {
          var E = x.apply(void 0, p);
          E != null && (v = E);
        }
      }), v;
    }
    return (0, r.default)(u);
  }
  e.exports = t.default;
})(Cd, Cd.exports);
var rx = ["as", "className", "type", "tooltip"], ix = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: d.string,
  /** Display feedback as a tooltip. */
  tooltip: d.bool,
  as: d.elementType
}, qi = /* @__PURE__ */ y.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.as, r = n === void 0 ? "div" : n, i = e.className, s = e.type, a = s === void 0 ? "valid" : s, o = e.tooltip, l = o === void 0 ? !1 : o, u = ne(e, rx);
    return /* @__PURE__ */ y.createElement(r, V({}, u, {
      ref: t,
      className: $(i, a + "-" + (l ? "tooltip" : "feedback"))
    }));
  }
);
qi.displayName = "Feedback";
qi.propTypes = ix;
var bt = /* @__PURE__ */ y.createContext({
  controlId: void 0
}), sx = ["id", "bsPrefix", "bsCustomPrefix", "className", "type", "isValid", "isInvalid", "isStatic", "as"], dc = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, s = e.className, a = e.type, o = a === void 0 ? "checkbox" : a, l = e.isValid, u = l === void 0 ? !1 : l, c = e.isInvalid, p = c === void 0 ? !1 : c, f = e.isStatic, v = e.as, x = v === void 0 ? "input" : v, E = ne(e, sx), k = C.useContext(bt), m = k.controlId, h = k.custom, g = h ? [i, "custom-control-input"] : [r, "form-check-input"], w = g[0], S = g[1];
  return r = Ee(w, S), /* @__PURE__ */ y.createElement(x, V({}, E, {
    ref: t,
    type: o,
    id: n || m,
    className: $(s, r, u && "is-valid", p && "is-invalid", f && "position-static")
  }));
});
dc.displayName = "FormCheckInput";
var ax = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"], pc = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, s = e.htmlFor, a = ne(e, ax), o = C.useContext(bt), l = o.controlId, u = o.custom, c = u ? [r, "custom-control-label"] : [n, "form-check-label"], p = c[0], f = c[1];
  return n = Ee(p, f), /* @__PURE__ */ y.createElement("label", V({}, a, {
    ref: t,
    htmlFor: s || l,
    className: $(i, n)
  }));
});
pc.displayName = "FormCheckLabel";
var ox = ["id", "bsPrefix", "bsCustomPrefix", "inline", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "title", "type", "label", "children", "custom", "as"], nr = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, s = e.inline, a = s === void 0 ? !1 : s, o = e.disabled, l = o === void 0 ? !1 : o, u = e.isValid, c = u === void 0 ? !1 : u, p = e.isInvalid, f = p === void 0 ? !1 : p, v = e.feedbackTooltip, x = v === void 0 ? !1 : v, E = e.feedback, k = e.className, m = e.style, h = e.title, g = h === void 0 ? "" : h, w = e.type, S = w === void 0 ? "checkbox" : w, _ = e.label, T = e.children, N = e.custom, b = e.as, R = b === void 0 ? "input" : b, B = ne(e, ox), j = S === "switch" ? !0 : N, G = j ? [i, "custom-control"] : [r, "form-check"], ie = G[0], de = G[1];
  r = Ee(ie, de);
  var H = C.useContext(bt), W = H.controlId, A = C.useMemo(function() {
    return {
      controlId: n || W,
      custom: j
    };
  }, [W, j, n]), O = j || _ != null && _ !== !1 && !T, M = /* @__PURE__ */ y.createElement(dc, V({}, B, {
    type: S === "switch" ? "checkbox" : S,
    ref: t,
    isValid: c,
    isInvalid: f,
    isStatic: !O,
    disabled: l,
    as: R
  }));
  return /* @__PURE__ */ y.createElement(bt.Provider, {
    value: A
  }, /* @__PURE__ */ y.createElement("div", {
    style: m,
    className: $(k, r, j && "custom-" + S, a && r + "-inline")
  }, T || /* @__PURE__ */ y.createElement(y.Fragment, null, M, O && /* @__PURE__ */ y.createElement(pc, {
    title: g
  }, _), (c || f) && /* @__PURE__ */ y.createElement(qi, {
    type: c ? "valid" : "invalid",
    tooltip: x
  }, E))));
});
nr.displayName = "FormCheck";
nr.Input = dc;
nr.Label = pc;
var lx = ["id", "bsPrefix", "bsCustomPrefix", "className", "isValid", "isInvalid", "lang", "as"], hc = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, s = e.className, a = e.isValid, o = e.isInvalid, l = e.lang, u = e.as, c = u === void 0 ? "input" : u, p = ne(e, lx), f = C.useContext(bt), v = f.controlId, x = f.custom, E = "file", k = x ? [i, "custom-file-input"] : [r, "form-control-file"], m = k[0], h = k[1];
  return r = Ee(m, h), /* @__PURE__ */ y.createElement(c, V({}, p, {
    ref: t,
    id: n || v,
    type: E,
    lang: l,
    className: $(s, r, a && "is-valid", o && "is-invalid")
  }));
});
hc.displayName = "FormFileInput";
var ux = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"], fa = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, s = e.htmlFor, a = ne(e, ux), o = C.useContext(bt), l = o.controlId, u = o.custom, c = u ? [r, "custom-file-label"] : [n, "form-file-label"], p = c[0], f = c[1];
  return n = Ee(p, f), /* @__PURE__ */ y.createElement("label", V({}, a, {
    ref: t,
    htmlFor: s || l,
    className: $(i, n),
    "data-browse": a["data-browse"]
  }));
});
fa.displayName = "FormFileLabel";
var cx = ["id", "bsPrefix", "bsCustomPrefix", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "label", "children", "custom", "lang", "data-browse", "as", "inputAs"], Wa = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, s = e.disabled, a = s === void 0 ? !1 : s, o = e.isValid, l = o === void 0 ? !1 : o, u = e.isInvalid, c = u === void 0 ? !1 : u, p = e.feedbackTooltip, f = p === void 0 ? !1 : p, v = e.feedback, x = e.className, E = e.style, k = e.label, m = e.children, h = e.custom, g = e.lang, w = e["data-browse"], S = e.as, _ = S === void 0 ? "div" : S, T = e.inputAs, N = T === void 0 ? "input" : T, b = ne(e, cx), R = h ? [i, "custom"] : [r, "form-file"], B = R[0], j = R[1];
  r = Ee(B, j);
  var G = "file", ie = C.useContext(bt), de = ie.controlId, H = C.useMemo(function() {
    return {
      controlId: n || de,
      custom: h
    };
  }, [de, h, n]), W = k != null && k !== !1 && !m, A = /* @__PURE__ */ y.createElement(hc, V({}, b, {
    ref: t,
    isValid: l,
    isInvalid: c,
    disabled: a,
    as: N,
    lang: g
  }));
  return /* @__PURE__ */ y.createElement(bt.Provider, {
    value: H
  }, /* @__PURE__ */ y.createElement(_, {
    style: E,
    className: $(x, r, h && "custom-" + G)
  }, m || /* @__PURE__ */ y.createElement(y.Fragment, null, h ? /* @__PURE__ */ y.createElement(y.Fragment, null, A, W && /* @__PURE__ */ y.createElement(fa, {
    "data-browse": w
  }, k)) : /* @__PURE__ */ y.createElement(y.Fragment, null, W && /* @__PURE__ */ y.createElement(fa, null, k), A), (l || c) && /* @__PURE__ */ y.createElement(qi, {
    type: l ? "valid" : "invalid",
    tooltip: f
  }, v))));
});
Wa.displayName = "FormFile";
Wa.Input = hc;
Wa.Label = fa;
var fx = function() {
}, dx = fx;
const px = /* @__PURE__ */ jr(dx);
var hx = ["bsPrefix", "bsCustomPrefix", "type", "size", "htmlSize", "id", "className", "isValid", "isInvalid", "plaintext", "readOnly", "custom", "as"], Jm = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.type, s = e.size, a = e.htmlSize, o = e.id, l = e.className, u = e.isValid, c = u === void 0 ? !1 : u, p = e.isInvalid, f = p === void 0 ? !1 : p, v = e.plaintext, x = e.readOnly, E = e.custom, k = e.as, m = k === void 0 ? "input" : k, h = ne(e, hx), g = C.useContext(bt), w = g.controlId, S = E ? [r, "custom"] : [n, "form-control"], _ = S[0], T = S[1];
  n = Ee(_, T);
  var N;
  if (v) {
    var b;
    N = (b = {}, b[n + "-plaintext"] = !0, b);
  } else if (i === "file") {
    var R;
    N = (R = {}, R[n + "-file"] = !0, R);
  } else if (i === "range") {
    var B;
    N = (B = {}, B[n + "-range"] = !0, B);
  } else if (m === "select" && E) {
    var j;
    N = (j = {}, j[n + "-select"] = !0, j[n + "-select-" + s] = s, j);
  } else {
    var G;
    N = (G = {}, G[n] = !0, G[n + "-" + s] = s, G);
  }
  return /* @__PURE__ */ y.createElement(m, V({}, h, {
    type: i,
    size: a,
    ref: t,
    readOnly: x,
    id: o || w,
    className: $(l, N, c && "is-valid", f && "is-invalid")
  }));
});
Jm.displayName = "FormControl";
const ev = Object.assign(Jm, {
  Feedback: qi
});
var mx = ["bsPrefix", "className", "children", "controlId", "as"], tv = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.className, i = e.children, s = e.controlId, a = e.as, o = a === void 0 ? "div" : a, l = ne(e, mx);
  n = Ee(n, "form-group");
  var u = C.useMemo(function() {
    return {
      controlId: s
    };
  }, [s]);
  return /* @__PURE__ */ y.createElement(bt.Provider, {
    value: u
  }, /* @__PURE__ */ y.createElement(o, V({}, l, {
    ref: t,
    className: $(r, n)
  }), i));
});
tv.displayName = "FormGroup";
var vx = ["bsPrefix", "className", "as"], gx = ["xl", "lg", "md", "sm", "xs"], nv = /* @__PURE__ */ y.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.as, s = i === void 0 ? "div" : i, a = ne(e, vx), o = Ee(n, "col"), l = [], u = [];
    return gx.forEach(function(c) {
      var p = a[c];
      delete a[c];
      var f, v, x;
      if (typeof p == "object" && p != null) {
        var E = p.span;
        f = E === void 0 ? !0 : E, v = p.offset, x = p.order;
      } else
        f = p;
      var k = c !== "xs" ? "-" + c : "";
      f && l.push(f === !0 ? "" + o + k : "" + o + k + "-" + f), x != null && u.push("order" + k + "-" + x), v != null && u.push("offset" + k + "-" + v);
    }), l.length || l.push(o), /* @__PURE__ */ y.createElement(s, V({}, a, {
      ref: t,
      className: $.apply(void 0, [r].concat(l, u))
    }));
  }
);
nv.displayName = "Col";
var yx = ["as", "bsPrefix", "column", "srOnly", "className", "htmlFor"], Ex = {
  column: !1,
  srOnly: !1
}, mc = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "label" : n, i = e.bsPrefix, s = e.column, a = e.srOnly, o = e.className, l = e.htmlFor, u = ne(e, yx), c = C.useContext(bt), p = c.controlId;
  i = Ee(i, "form-label");
  var f = "col-form-label";
  typeof s == "string" && (f = f + " " + f + "-" + s);
  var v = $(o, i, a && "sr-only", s && f);
  return l = l || p, s ? /* @__PURE__ */ y.createElement(nv, V({
    ref: t,
    as: "label",
    className: v,
    htmlFor: l
  }, u)) : (
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    /* @__PURE__ */ y.createElement(r, V({
      ref: t,
      className: v,
      htmlFor: l
    }, u))
  );
});
mc.displayName = "FormLabel";
mc.defaultProps = Ex;
var xx = ["bsPrefix", "className", "as", "muted"], rv = /* @__PURE__ */ y.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.as, s = i === void 0 ? "small" : i, a = e.muted, o = ne(e, xx);
    return n = Ee(n, "form-text"), /* @__PURE__ */ y.createElement(s, V({}, o, {
      ref: t,
      className: $(r, n, a && "text-muted")
    }));
  }
);
rv.displayName = "FormText";
var Xa = /* @__PURE__ */ y.forwardRef(function(e, t) {
  return /* @__PURE__ */ y.createElement(nr, V({}, e, {
    ref: t,
    type: "switch"
  }));
});
Xa.displayName = "Switch";
Xa.Input = nr.Input;
Xa.Label = nr.Label;
var wx = /-(.)/g;
function kx(e) {
  return e.replace(wx, function(t, n) {
    return n.toUpperCase();
  });
}
var Cx = ["className", "bsPrefix", "as"], Sx = function(t) {
  return t[0].toUpperCase() + kx(t).slice(1);
};
function vc(e, t) {
  var n = t === void 0 ? {} : t, r = n.displayName, i = r === void 0 ? Sx(e) : r, s = n.Component, a = n.defaultProps, o = /* @__PURE__ */ y.forwardRef(function(l, u) {
    var c = l.className, p = l.bsPrefix, f = l.as, v = f === void 0 ? s || "div" : f, x = ne(l, Cx), E = Ee(p, e);
    return /* @__PURE__ */ y.createElement(v, V({
      ref: u,
      className: $(c, E)
    }, x));
  });
  return o.defaultProps = a, o.displayName = i, o;
}
var _x = ["bsPrefix", "inline", "className", "validated", "as"], Tx = vc("form-row"), Nx = {
  inline: !1
}, Pt = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.inline, i = e.className, s = e.validated, a = e.as, o = a === void 0 ? "form" : a, l = ne(e, _x);
  return n = Ee(n, "form"), /* @__PURE__ */ y.createElement(o, V({}, l, {
    ref: t,
    className: $(i, s && "was-validated", r && n + "-inline")
  }));
});
Pt.displayName = "Form";
Pt.defaultProps = Nx;
Pt.Row = Tx;
Pt.Group = tv;
Pt.Control = ev;
Pt.Check = nr;
Pt.File = Wa;
Pt.Switch = Xa;
Pt.Label = mc;
Pt.Text = rv;
function kn(e) {
  return typeof e == "string" || e instanceof String;
}
function Sd(e) {
  var t;
  return typeof e == "object" && e != null && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function iv(e, t) {
  return Array.isArray(t) ? iv(e, (n, r) => t.includes(r)) : Object.entries(e).reduce((n, r) => {
    let [i, s] = r;
    return t(s, i) && (n[i] = s), n;
  }, {});
}
const L = {
  NONE: "NONE",
  LEFT: "LEFT",
  FORCE_LEFT: "FORCE_LEFT",
  RIGHT: "RIGHT",
  FORCE_RIGHT: "FORCE_RIGHT"
};
function Ax(e) {
  switch (e) {
    case L.LEFT:
      return L.FORCE_LEFT;
    case L.RIGHT:
      return L.FORCE_RIGHT;
    default:
      return e;
  }
}
function Vo(e) {
  return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function da(e, t) {
  if (t === e) return !0;
  const n = Array.isArray(t), r = Array.isArray(e);
  let i;
  if (n && r) {
    if (t.length != e.length) return !1;
    for (i = 0; i < t.length; i++) if (!da(t[i], e[i])) return !1;
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
    for (i = 0; i < u.length; i++) if (!da(e[u[i]], t[u[i]])) return !1;
    return !0;
  } else if (t && e && typeof t == "function" && typeof e == "function")
    return t.toString() === e.toString();
  return !1;
}
class Ix {
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
    return !this.removedCount || this.insertedCount ? L.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
    this.oldSelection.end === this.oldSelection.start ? L.RIGHT : L.LEFT;
  }
}
function z(e, t) {
  return new z.InputMask(e, t);
}
function sv(e) {
  if (e == null) throw new Error("mask property should be defined");
  return e instanceof RegExp ? z.MaskedRegExp : kn(e) ? z.MaskedPattern : e === Date ? z.MaskedDate : e === Number ? z.MaskedNumber : Array.isArray(e) || e === Array ? z.MaskedDynamic : z.Masked && e.prototype instanceof z.Masked ? e : z.Masked && e instanceof z.Masked ? e.constructor : e instanceof Function ? z.MaskedFunction : (console.warn("Mask not found for mask", e), z.Masked);
}
function Hi(e) {
  if (!e) throw new Error("Options in not defined");
  if (z.Masked) {
    if (e.prototype instanceof z.Masked) return {
      mask: e
    };
    const {
      mask: t = void 0,
      ...n
    } = e instanceof z.Masked ? {
      mask: e
    } : Sd(e) && e.mask instanceof z.Masked ? e : {};
    if (t) {
      const r = t.mask;
      return {
        ...iv(t, (i, s) => !s.startsWith("_")),
        mask: t.constructor,
        _mask: r,
        ...n
      };
    }
  }
  return Sd(e) ? {
    ...e
  } : {
    mask: e
  };
}
function Jt(e) {
  if (z.Masked && e instanceof z.Masked) return e;
  const t = Hi(e), n = sv(t.mask);
  if (!n) throw new Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
  return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
z.createMask = Jt;
class gc {
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
z.MaskElement = gc;
const _d = 90, Rx = 89;
class Qa extends gc {
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
    if (this._handlers.redo && (t.keyCode === _d && t.shiftKey && (t.metaKey || t.ctrlKey) || t.keyCode === Rx && t.ctrlKey))
      return t.preventDefault(), this._handlers.redo(t);
    if (this._handlers.undo && t.keyCode === _d && (t.metaKey || t.ctrlKey))
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
z.HTMLMaskElement = Qa;
class bx extends Qa {
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
z.HTMLMaskElement = Qa;
class av extends Qa {
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
z.HTMLContenteditableMaskElement = av;
class Ka {
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
    this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1), this.states.push(t), this.states.length > Ka.MAX_LENGTH && this.states.shift(), this.currentIndex = this.states.length - 1;
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
Ka.MAX_LENGTH = 100;
class Px {
  /**
    View element
  */
  /** Internal {@link Masked} model */
  constructor(t, n) {
    this.el = t instanceof gc ? t : t.isContentEditable && t.tagName !== "INPUT" && t.tagName !== "TEXTAREA" ? new av(t) : new bx(t), this.masked = Jt(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new Ka(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
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
    if (!(t instanceof z.Masked) && this.masked.constructor === sv(t)) {
      this.masked.updateOptions({
        mask: t
      });
      return;
    }
    const n = t instanceof z.Masked ? t : Jt({
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
    this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, L.LEFT));
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
    const n = new Ix({
      // new state
      value: this.el.value,
      cursorPos: this.cursorPos,
      // old state
      oldValue: this.displayValue,
      oldSelection: this._selection
    }), r = this.masked.rawInputValue, i = this.masked.splice(n.startChangePos, n.removed.length, n.inserted, n.removeDirection, {
      input: !0,
      raw: !0
    }).offset, s = r === this.masked.rawInputValue ? n.removeDirection : L.NONE;
    let a = this.masked.nearestInputPos(n.startChangePos + i, s);
    s !== L.NONE && (a = this.masked.nearestInputPos(a, L.NONE)), this.updateControl(a), delete this._inputEvent;
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
z.InputMask = Px;
class Q {
  /** Inserted symbols */
  /** Additional offset if any changes occurred before tail */
  /** Raw inserted is used by dynamic mask */
  /** Can skip chars */
  static normalize(t) {
    return Array.isArray(t) ? t : [t, new Q()];
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
z.ChangeDetails = Q;
class Dt {
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
class Pe {
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
      ...Pe.DEFAULTS,
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
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), new Dt(this.extractInput(t, n), t);
  }
  /** Appends tail */
  appendTail(t) {
    return kn(t) && (t = new Dt(String(t))), t.appendTo(this);
  }
  /** Appends char */
  _appendCharRaw(t, n) {
    return t ? (this._value += t, new Q({
      inserted: t,
      rawInserted: t
    })) : new Q();
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
      o || (s = new Q(), this.state = i, r && a && (r.state = a));
    }
    return s;
  }
  /** Appends optional placeholder at the end */
  _appendPlaceholder() {
    return new Q();
  }
  /** Appends optional eager placeholder at the end */
  _appendEager() {
    return new Q();
  }
  /** Appends symbols considering flags */
  append(t, n, r) {
    if (!kn(t)) throw new Error("value should be string");
    const i = kn(r) ? new Dt(String(r)) : r;
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
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), this._value = this.displayValue.slice(0, t) + this.displayValue.slice(n), new Q();
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
    return n === void 0 && (n = {}), Q.normalize(this.prepare ? this.prepare(t, this, n) : t);
  }
  /** Prepares each char before mask processing */
  doPrepareChar(t, n) {
    return n === void 0 && (n = {}), Q.normalize(this.prepareChar ? this.prepareChar(t, this, n) : t);
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
    r === void 0 && (r = ""), i === void 0 && (i = L.NONE), s === void 0 && (s = {
      input: !0
    });
    const a = t + n, o = this.extractTail(a), l = this.eager === !0 || this.eager === "remove";
    let u;
    l && (i = Ax(i), u = this.extractInput(0, a, {
      raw: !0
    }));
    let c = t;
    const p = new Q();
    if (i !== L.NONE && (c = this.nearestInputPos(t, n > 1 && t !== 0 && !l ? L.NONE : i), p.tailShift = c - t), p.aggregate(this.remove(c)), l && i !== L.NONE && u === this.rawInputValue)
      if (i === L.FORCE_LEFT) {
        let f;
        for (; u === this.rawInputValue && (f = this.displayValue.length); )
          p.aggregate(new Q({
            tailShift: -1
          })).aggregate(this.remove(f - 1));
      } else i === L.FORCE_RIGHT && o.unshift();
    return p.aggregate(this.append(r, s, o));
  }
  maskEquals(t) {
    return this.mask === t;
  }
  optionsIsChanged(t) {
    return !da(this, t);
  }
  typedValueEquals(t) {
    const n = this.typedValue;
    return t === n || Pe.EMPTY_VALUES.includes(t) && Pe.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
  }
  pad(t) {
    return new Q();
  }
}
Pe.DEFAULTS = {
  skipInvalid: !0
};
Pe.EMPTY_VALUES = [void 0, null, ""];
z.Masked = Pe;
class Un {
  /** */
  constructor(t, n) {
    t === void 0 && (t = []), n === void 0 && (n = 0), this.chunks = t, this.from = n;
  }
  toString() {
    return this.chunks.map(String).join("");
  }
  extend(t) {
    if (!String(t)) return;
    t = kn(t) ? new Dt(String(t)) : t;
    const n = this.chunks[this.chunks.length - 1], r = n && // if stops are same or tail has no stop
    (n.stop === t.stop || t.stop == null) && // if tail chunk goes just after last chunk
    t.from === n.from + n.toString().length;
    if (t instanceof Dt)
      r ? n.extend(t.toString()) : this.chunks.push(t);
    else if (t instanceof Un) {
      if (t.stop == null) {
        let i;
        for (; t.chunks.length && t.chunks[0].stop == null; )
          i = t.chunks.shift(), i.from += t.from, this.extend(i);
      }
      t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
    }
  }
  appendTo(t) {
    if (!(t instanceof z.MaskedPattern))
      return new Dt(this.toString()).appendTo(t);
    const n = new Q();
    for (let r = 0; r < this.chunks.length; ++r) {
      const i = this.chunks[r], s = t._mapPosToBlock(t.displayValue.length), a = i.stop;
      let o;
      if (a != null && // if block not found or stop is behind lastBlock
      (!s || s.index <= a) && ((i instanceof Un || // for continuous block also check if stop is exist
      t._stops.indexOf(a) >= 0) && n.aggregate(t._appendPlaceholder(a)), o = i instanceof Un && t._blocks[a]), o) {
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
      const s = "chunks" in i ? new Un() : new Dt();
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
class Fx {
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
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, L.FORCE_LEFT), this.offset !== 0))
        return !0;
    });
  }
  pushLeftBeforeInput() {
    return this._pushLeft(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, L.LEFT), !0;
    });
  }
  pushLeftBeforeRequired() {
    return this._pushLeft(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, L.LEFT), !0;
    });
  }
  pushRightBeforeFilled() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, L.FORCE_RIGHT), this.offset !== this.block.value.length))
        return !0;
    });
  }
  pushRightBeforeInput() {
    return this._pushRight(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, L.NONE), !0;
    });
  }
  pushRightBeforeRequired() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, L.NONE), !0;
    });
  }
}
class ov {
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
    return t === void 0 && (t = 0), n === void 0 && (n = this._value.length), this._value = this._value.slice(0, t) + this._value.slice(n), this._value || (this._isRawInput = !1), new Q();
  }
  nearestInputPos(t, n) {
    n === void 0 && (n = L.NONE);
    const r = 0, i = this._value.length;
    switch (n) {
      case L.LEFT:
      case L.FORCE_LEFT:
        return r;
      case L.NONE:
      case L.RIGHT:
      case L.FORCE_RIGHT:
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
    if (n === void 0 && (n = {}), this.isFilled) return new Q();
    const r = this.eager === !0 || this.eager === "append", s = this.char === t && (this.isUnmasking || n.input || n.raw) && (!n.raw || !r) && !n.tail, a = new Q({
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
    const t = new Q();
    return this.isFilled || (this._value = t.inserted = this.char), t;
  }
  extractTail() {
    return new Dt("");
  }
  appendTail(t) {
    return kn(t) && (t = new Dt(String(t))), t.appendTo(this);
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
class pa {
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
    this.masked = Jt(l), Object.assign(this, {
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
    return t === void 0 && (t = 0), n === void 0 && (n = this.value.length), t === 0 && n >= 1 ? (this.isFilled = !1, this.masked.remove(t, n)) : new Q();
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
    if (n === void 0 && (n = {}), this.isFilled) return new Q();
    const r = this.masked.state;
    let i = this.masked._appendChar(t, this.currentMaskFlags(n));
    return i.inserted && this.doValidate(n) === !1 && (i = new Q(), this.masked.state = r), !i.inserted && !this.isOptional && !this.lazy && !n.input && (i.inserted = this.placeholderChar), i.skip = !i.inserted && !this.isOptional, this.isFilled = !!i.inserted, i;
  }
  append(t, n, r) {
    return this.masked.append(t, this.currentMaskFlags(n), r);
  }
  _appendPlaceholder() {
    return this.isFilled || this.isOptional ? new Q() : (this.isFilled = !0, new Q({
      inserted: this.placeholderChar
    }));
  }
  _appendEager() {
    return new Q();
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
    n === void 0 && (n = L.NONE);
    const r = 0, i = this.value.length, s = Math.min(Math.max(t, r), i);
    switch (n) {
      case L.LEFT:
      case L.FORCE_LEFT:
        return this.isComplete ? s : r;
      case L.RIGHT:
      case L.FORCE_RIGHT:
        return this.isComplete ? s : i;
      case L.NONE:
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
    return new Q();
  }
}
pa.DEFAULT_DEFINITIONS = {
  0: /\d/,
  a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  "*": /./
};
class Ox extends Pe {
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
z.MaskedRegExp = Ox;
class Fe extends Pe {
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
      ...Fe.DEFAULTS,
      ...t,
      definitions: Object.assign({}, pa.DEFAULT_DEFINITIONS, t == null ? void 0 : t.definitions)
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
        c.sort((f, v) => v.length - f.length);
        const p = c[0];
        if (p) {
          const {
            expose: f,
            repeat: v,
            ...x
          } = Hi(this.blocks[p]), E = {
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            overwrite: this.overwrite,
            autofix: this.autofix,
            ...x,
            repeat: v,
            parent: this
          }, k = v != null ? new z.RepeatBlock(
            E
            /* TODO */
          ) : Jt(E);
          k && (this._blocks.push(k), f && (this.exposeBlock = k), this._maskedBlocks[p] || (this._maskedBlocks[p] = []), this._maskedBlocks[p].push(this._blocks.length - 1)), s += p.length - 1;
          continue;
        }
      }
      let a = n[s], o = a in t;
      if (a === Fe.STOP_CHAR) {
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
      if (a === Fe.ESCAPE_CHAR) {
        if (++s, a = n[s], !a) break;
        o = !1;
      }
      const l = o ? new pa({
        isOptional: i,
        lazy: this.lazy,
        eager: this.eager,
        placeholderChar: this.placeholderChar,
        displayChar: this.displayChar,
        ...Hi(t[a]),
        parent: this
      }) : new ov({
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
    const n = new Q();
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
    const r = this._mapPosToBlock(this.displayValue.length), i = new Q();
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
    const r = new Un();
    return t === n || this._forEachBlocksInRange(t, n, (i, s, a, o) => {
      const l = i.extractTail(a, o);
      l.stop = this._findStopBefore(s), l.from = this._blockStartPos(s), l instanceof Un && (l.blockIndex = s), r.extend(l);
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
    const n = new Q();
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
    if (n === void 0 && (n = L.NONE), !this._blocks.length) return 0;
    const r = new Fx(this, t);
    if (n === L.NONE)
      return r.pushRightBeforeInput() || (r.popState(), r.pushLeftBeforeInput()) ? r.pos : this.displayValue.length;
    if (n === L.LEFT || n === L.FORCE_LEFT) {
      if (n === L.LEFT) {
        if (r.pushRightBeforeFilled(), r.ok && r.pos === t) return t;
        r.popState();
      }
      if (r.pushLeftBeforeInput(), r.pushLeftBeforeRequired(), r.pushLeftBeforeFilled(), n === L.LEFT) {
        if (r.pushRightBeforeInput(), r.pushRightBeforeRequired(), r.ok && r.pos <= t || (r.popState(), r.ok && r.pos <= t)) return r.pos;
        r.popState();
      }
      return r.ok ? r.pos : n === L.FORCE_LEFT ? 0 : (r.popState(), r.ok || (r.popState(), r.ok) ? r.pos : 0);
    }
    return n === L.RIGHT || n === L.FORCE_RIGHT ? (r.pushRightBeforeInput(), r.pushRightBeforeRequired(), r.pushRightBeforeFilled() ? r.pos : n === L.FORCE_RIGHT ? this.displayValue.length : (r.popState(), r.ok || (r.popState(), r.ok) ? r.pos : this.nearestInputPos(t, L.LEFT))) : t;
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
    const n = new Q();
    return this._forEachBlocksInRange(0, this.displayValue.length, (r) => n.aggregate(r.pad(t))), n;
  }
}
Fe.DEFAULTS = {
  ...Pe.DEFAULTS,
  lazy: !0,
  placeholderChar: "_"
};
Fe.STOP_CHAR = "`";
Fe.ESCAPE_CHAR = "\\";
Fe.InputDefinition = pa;
Fe.FixedDefinition = ov;
z.MaskedPattern = Fe;
class Vs extends Fe {
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
    const n = new Q();
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
z.MaskedRange = Vs;
const Mx = "d{.}`m{.}`Y";
class Gt extends Fe {
  static extractPatternOptions(t) {
    const {
      mask: n,
      pattern: r,
      ...i
    } = t;
    return {
      ...i,
      mask: kn(n) ? n : r
    };
  }
  /** Pattern mask for date according to {@link MaskedDate#format} */
  /** Start date */
  /** End date */
  /** Format typed value to string */
  /** Parse string to get typed value */
  constructor(t) {
    super(Gt.extractPatternOptions({
      ...Gt.DEFAULTS,
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
      ...Gt.DEFAULTS,
      ...t
    }, a = Object.assign({}, Gt.GET_DEFAULT_BLOCKS());
    t.min && (a.Y.from = t.min.getFullYear()), t.max && (a.Y.to = t.max.getFullYear()), t.min && t.max && a.Y.from === a.Y.to && (a.m.from = t.min.getMonth() + 1, a.m.to = t.max.getMonth() + 1, a.m.from === a.m.to && (a.d.from = t.min.getDate(), a.d.to = t.max.getDate())), Object.assign(a, this.blocks, i), super._update({
      ...s,
      mask: kn(n) ? n : r,
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
    return super.optionsIsChanged(Gt.extractPatternOptions(t));
  }
}
Gt.GET_DEFAULT_BLOCKS = () => ({
  d: {
    mask: Vs,
    from: 1,
    to: 31,
    maxLength: 2
  },
  m: {
    mask: Vs,
    from: 1,
    to: 12,
    maxLength: 2
  },
  Y: {
    mask: Vs,
    from: 1900,
    to: 9999
  }
});
Gt.DEFAULTS = {
  ...Fe.DEFAULTS,
  mask: Date,
  pattern: Mx,
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
z.MaskedDate = Gt;
class qa extends Pe {
  constructor(t) {
    super({
      ...qa.DEFAULTS,
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
      } = Hi(n), s = Jt({
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
    const i = n.tail && n._beforeTailState != null ? n._beforeTailState._value : this.value, s = this.rawInputValue, a = n.tail && n._beforeTailState != null ? n._beforeTailState._rawInputValue : s, o = s.slice(a.length), l = this.currentMask, u = new Q(), c = l == null ? void 0 : l.state;
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
    const n = new Q();
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
    const r = new Q();
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
      return da(n, s) && n.maskEquals(i);
    }) : super.maskEquals(t);
  }
  typedValueEquals(t) {
    var n;
    return !!((n = this.currentMask) != null && n.typedValueEquals(t));
  }
}
qa.DEFAULTS = {
  ...Pe.DEFAULTS,
  dispatch: (e, t, n, r) => {
    if (!t.compiledMasks.length) return;
    const i = t.rawInputValue, s = t.compiledMasks.map((a, o) => {
      const l = t.currentMask === a, u = l ? a.displayValue.length : a.nearestInputPos(a.displayValue.length, L.FORCE_LEFT);
      return a.rawInputValue !== i ? (a.reset(), a.append(i, {
        raw: !0
      })) : l || a.remove(u), a.append(e, t.currentMaskFlags(n)), a.appendTail(r), {
        index: o,
        weight: a.rawInputValue.length,
        totalInputPositions: a.totalInputPositions(0, Math.max(u, a.nearestInputPos(a.displayValue.length, L.FORCE_LEFT)))
      };
    });
    return s.sort((a, o) => o.weight - a.weight || o.totalInputPositions - a.totalInputPositions), t.compiledMasks[s[0].index];
  }
};
z.MaskedDynamic = qa;
class Ya extends Fe {
  constructor(t) {
    super({
      ...Ya.DEFAULTS,
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
    const r = Math.min(this.nearestInputPos(0, L.FORCE_RIGHT), this.value.length), i = this.enum.filter((s) => this.matchValue(s, this.unmaskedValue + t, r));
    if (i.length) {
      i.length === 1 && this._forEachBlocksInRange(0, this.value.length, (a, o) => {
        const l = i[0][o];
        o >= this.value.length || l === a.value || (a.reset(), a._appendChar(l, n));
      });
      const s = super._appendCharRaw(i[0][this.value.length], n);
      return i.length === 1 && i[0].slice(this.unmaskedValue.length).split("").forEach((a) => s.aggregate(super._appendCharRaw(a))), s;
    }
    return new Q({
      skip: !this.isComplete
    });
  }
  extractTail(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), new Dt("", t);
  }
  remove(t, n) {
    if (t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), t === n) return new Q();
    const r = Math.min(super.nearestInputPos(0, L.FORCE_RIGHT), this.value.length);
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
Ya.DEFAULTS = {
  ...Fe.DEFAULTS,
  matchValue: (e, t, n) => e.indexOf(t, n) === n
};
z.MaskedEnum = Ya;
class Dx extends Pe {
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
z.MaskedFunction = Dx;
var lv;
class nt extends Pe {
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
      ...nt.DEFAULTS,
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
    const t = "^" + (this.allowNegative ? "[+|\\-]?" : ""), n = "\\d*", r = (this.scale ? "(" + Vo(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
    this._numberRegExp = new RegExp(t + n + r), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(Vo).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(Vo(this.thousandsSeparator), "g");
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
      this.min != null && this.min < 0 && this.number < this.min && (f = this.min), this.max != null && this.max > 0 && this.number > this.max && (f = this.max), f != null && (this.autofix ? (this._value = this.format(f, this).replace(nt.UNMASKED_RADIX, this.radix), l || (l = s === this._value && !n.tail)) : o = !1), o && (o = !!this._value.match(this._numberRegExp));
    }
    let u;
    o ? u = new Q({
      inserted: this._value.slice(s.length),
      rawInserted: l ? "" : t,
      skip: l
    }) : (this._value = s, u = new Q()), this._value = this._insertThousandsSeparators(this._value);
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
    return new Q({
      tailShift: (a - s) * this.thousandsSeparator.length
    });
  }
  nearestInputPos(t, n) {
    if (!this.thousandsSeparator) return t;
    switch (n) {
      case L.NONE:
      case L.LEFT:
      case L.FORCE_LEFT: {
        const r = this._findSeparatorAround(t - 1);
        if (r >= 0) {
          const i = r + this.thousandsSeparator.length;
          if (t < i || this.value.length <= i || n === L.FORCE_LEFT)
            return r;
        }
        break;
      }
      case L.RIGHT:
      case L.FORCE_RIGHT: {
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
    const i = this.scale === 0 && t !== this.thousandsSeparator && (t === this.radix || t === nt.UNMASKED_RADIX || this.mapToRadix.includes(t));
    return super.doSkipInvalid(t, n, r) && !i;
  }
  get unmaskedValue() {
    return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, nt.UNMASKED_RADIX);
  }
  set unmaskedValue(t) {
    super.unmaskedValue = t;
  }
  get typedValue() {
    return this.parse(this.unmaskedValue, this);
  }
  set typedValue(t) {
    this.rawInputValue = this.format(t, this).replace(nt.UNMASKED_RADIX, this.radix);
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
    return (super.typedValueEquals(t) || nt.EMPTY_VALUES.includes(t) && nt.EMPTY_VALUES.includes(this.typedValue)) && !(t === 0 && this.value === "");
  }
}
lv = nt;
nt.UNMASKED_RADIX = ".";
nt.EMPTY_VALUES = [...Pe.EMPTY_VALUES, 0];
nt.DEFAULTS = {
  ...Pe.DEFAULTS,
  mask: Number,
  radix: ",",
  thousandsSeparator: "",
  mapToRadix: [lv.UNMASKED_RADIX],
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
z.MaskedNumber = nt;
const Yl = {
  MASKED: "value",
  UNMASKED: "unmaskedValue",
  TYPED: "typedValue"
};
function uv(e, t, n) {
  t === void 0 && (t = Yl.MASKED), n === void 0 && (n = Yl.MASKED);
  const r = Jt(e);
  return (i) => r.runIsolated((s) => (s[t] = i, s[n]));
}
function Lx(e, t, n, r) {
  return uv(t, n, r)(e);
}
z.PIPE_TYPE = Yl;
z.createPipe = uv;
z.pipe = Lx;
class Bx extends Fe {
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
    } = Hi(t);
    this._blockOpts = Object.assign({}, this._blockOpts, a);
    const o = Jt(this._blockOpts);
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
      return this._blocks.push(Jt(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const r = new Q();
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
z.RepeatBlock = Bx;
try {
  globalThis.IMask = z;
} catch {
}
const cv = {
  // common
  mask: d.oneOfType([d.array, d.func, d.string, d.instanceOf(RegExp), d.oneOf([Date, Number, z.Masked]), d.instanceOf(z.Masked)]),
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
}, fv = Object.keys(cv).filter((e) => e !== "value"), Vx = ["value", "unmask", "onAccept", "onComplete", "inputRef"], Hx = fv.filter((e) => Vx.indexOf(e) < 0);
function Ux(e) {
  var t;
  const n = (t = class extends y.Component {
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
      s === void 0 && (s = this._extractMaskOptionsFromProps(this.props)), this.maskRef = z(this.element, s).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
    }
    destroyMask() {
      this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
    }
    _extractMaskOptionsFromProps(s) {
      const {
        ...a
      } = s;
      return Object.keys(a).filter((o) => Hx.indexOf(o) < 0).forEach((o) => {
        delete a[o];
      }), a;
    }
    _extractNonMaskProps(s) {
      const {
        ...a
      } = s;
      return fv.forEach((o) => {
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
      return y.createElement(e, {
        ...this._extractNonMaskProps(this.props),
        inputRef: this._inputRef
      });
    }
  }, t.displayName = void 0, t.propTypes = void 0, t), r = e.displayName || e.name || "Component";
  return n.displayName = "IMask(" + r + ")", n.propTypes = cv, y.forwardRef((i, s) => y.createElement(n, {
    ...i,
    ref: s
  }));
}
const $x = Ux((e) => {
  let {
    inputRef: t,
    ...n
  } = e;
  return y.createElement("input", {
    ...n,
    ref: t
  });
}), jx = (e, t) => y.createElement($x, {
  ...e,
  ref: t
}), zx = y.forwardRef(jx), Gx = (e = {}) => Object.entries(e).reduce((t, [n, r]) => (r !== void 0 && (t[n] = r), t), {}), zn = (...e) => (n) => {
  e.filter((r) => typeof r == "function").forEach((r) => r(n));
}, Wx = ({
  defaultValue: e,
  value: t
}) => {
  const [n, r] = C.useState(!!e || e === 0);
  return [!!t || t === 0 || n, (a) => r(!!a.target.value)];
}, Td = (e, t) => {
  const [n, r] = C.useState([]), i = (l) => (r((u) => [...u, l]), l), s = () => {
    const l = cc(`${e}-`);
    return i(l);
  }, a = (l) => {
    r((u) => u.filter((c) => c !== l));
  };
  return [n, (l) => {
    const [u, c] = C.useState(l);
    return C.useEffect(() => (l ? i(l) : u || c(s()), () => a(u)), [u, l]), u;
  }];
}, Ho = (e) => e, Xx = () => {
}, dv = /* @__PURE__ */ y.createContext({
  getControlProps: Ho,
  useSetIsControlGroupEffect: Xx,
  getLabelProps: Ho,
  getDescriptorProps: Ho,
  hasFormGroupProvider: !1
}), xt = () => y.useContext(dv);
function Qx(e) {
  const [t, n] = C.useState(e);
  return [t, (i) => {
    C.useEffect(() => n(i), [i]);
  }];
}
function Za({
  children: e,
  controlId: t,
  isInvalid: n,
  isValid: r,
  size: i
}) {
  const s = C.useMemo(() => t || cc("form-field"), [t]), [a, o] = Td(s), [l, u] = Td(s), [c, p] = Qx(!1), E = {
    getControlProps: C.useCallback((k) => {
      const m = c ? l : void 0;
      return Gx({
        ...k,
        "aria-describedby": $(k["aria-describedby"], a) || void 0,
        "aria-labelledby": $(k["aria-labelledby"], m) || void 0,
        id: s
      });
    }, [c, a, l, s]),
    getLabelProps: (k) => {
      const m = u(k == null ? void 0 : k.id);
      return c ? {
        ...k,
        id: m
      } : {
        ...k,
        htmlFor: s
      };
    },
    getDescriptorProps: (k) => {
      const m = o(k == null ? void 0 : k.id);
      return {
        ...k,
        id: m
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
  return /* @__PURE__ */ y.createElement(dv.Provider, {
    value: E
  }, e);
}
const Kx = (e) => /* @__PURE__ */ C.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z",
  fill: "currentColor"
})), qx = (e) => /* @__PURE__ */ C.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
  fill: "currentColor"
})), Yx = (e) => /* @__PURE__ */ C.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
  fill: "currentColor"
})), Zx = (e) => /* @__PURE__ */ C.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
  fill: "currentColor"
})), Jx = (e) => /* @__PURE__ */ C.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
  fill: "currentColor"
})), e1 = (e) => /* @__PURE__ */ C.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
  fill: "currentColor"
})), t1 = (e) => /* @__PURE__ */ C.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
  fill: "currentColor"
})), n1 = (e) => /* @__PURE__ */ C.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
  fill: "currentColor"
})), r1 = (e) => /* @__PURE__ */ C.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
  fill: "currentColor"
})), i1 = (e) => /* @__PURE__ */ C.createElement("svg", {
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
})), Br = {
  SMALL: "sm",
  LARGE: "lg"
}, Tt = {
  DEFAULT: "default",
  VALID: "valid",
  INVALID: "invalid",
  WARNING: "warning",
  CRITERIA_EMPTY: "criteria-empty",
  CRITERIA_VALID: "criteria-valid",
  CRITERIA_INVALID: "criteria-invalid"
}, s1 = {
  [Tt.DEFAULT]: null,
  [Tt.VALID]: Yx,
  [Tt.INVALID]: Jx,
  [Tt.WARNING]: i1,
  [Tt.CRITERIA_EMPTY]: r1,
  [Tt.CRITERIA_VALID]: Zx,
  [Tt.CRITERIA_INVALID]: qx
}, a1 = ({
  isInvalid: e,
  isValid: t
}) => t ? Tt.VALID : e ? Tt.INVALID : Tt.DEFAULT;
function yc({
  type: e,
  customIcon: t
}) {
  if (t)
    return t;
  const n = s1[e];
  return n ? /* @__PURE__ */ y.createElement(_n, {
    src: n
  }) : null;
}
yc.propTypes = {
  type: d.oneOf(Object.values(Tt)),
  customIcon: d.node
};
yc.defaultProps = {
  type: void 0,
  customIcon: void 0
};
function Ja({
  children: e,
  type: t,
  icon: n,
  muted: r,
  hasIcon: i,
  ...s
}) {
  const a = $(s.className, "pgn__form-text", `pgn__form-text-${t}`, {
    "text-muted": r
  });
  return /* @__PURE__ */ y.createElement("div", {
    ...s,
    className: a
  }, i && /* @__PURE__ */ y.createElement(yc, {
    customIcon: n,
    type: t
  }), /* @__PURE__ */ y.createElement("div", null, e));
}
const o1 = ["default", "valid", "invalid", "warning", "criteria-empty", "criteria-valid", "criteria-invalid"];
Ja.propTypes = {
  /** Specifies contents of the component. */
  children: d.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: d.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: d.bool,
  /** Specifies text type, this affects styling. */
  type: d.oneOf(o1),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: d.node,
  /** Specifies whether to show text with muted styling. */
  muted: d.bool
};
Ja.defaultProps = {
  hasIcon: !0,
  type: "default",
  icon: void 0,
  className: void 0,
  muted: !1
};
function Tn({
  children: e,
  ...t
}) {
  const {
    getDescriptorProps: n,
    isInvalid: r,
    isValid: i
  } = xt(), s = n(t), a = $("pgn__form-control-description", t.className), o = t.type || a1({
    isInvalid: r,
    isValid: i
  });
  return /* @__PURE__ */ y.createElement(Ja, {
    ...s,
    className: a,
    type: o
  }, e);
}
const l1 = ["default", "valid", "invalid", "warning", "criteria-empty", "criteria-valid", "criteria-invalid"];
Tn.propTypes = {
  /** Specifies contents of the component. */
  children: d.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: d.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: d.bool,
  /** Specifies feedback type, this affects styling. */
  type: d.oneOf(l1),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: d.node,
  /** Specifies whether to show feedback with muted styling. */
  muted: d.bool
};
Tn.defaultProps = {
  hasIcon: !0,
  type: void 0,
  icon: void 0,
  className: void 0,
  muted: !1
};
function pv({
  children: e
}) {
  const {
    controlId: t
  } = xt();
  return /* @__PURE__ */ y.createElement("div", {
    className: "pgn__form-control-floating-label"
  }, /* @__PURE__ */ y.createElement("div", {
    className: "pgn__form-control-floating-label-content"
  }, /* @__PURE__ */ y.createElement("label", {
    className: "pgn__form-control-floating-label-text",
    htmlFor: t
  }, e)));
}
pv.propTypes = {
  children: d.node.isRequired
};
function ha({
  children: e,
  location: t
}) {
  return /* @__PURE__ */ y.createElement("div", {
    className: `pgn__form-control-decorator pgn__form-control-decorator-${t}`
  }, e);
}
ha.propTypes = {
  children: d.node.isRequired,
  location: d.oneOf(["leading", "trailing"])
};
ha.defaultProps = {
  location: "leading"
};
function Ec({
  children: e,
  leadingElement: t,
  trailingElement: n,
  floatingLabel: r,
  className: i,
  ...s
}) {
  const a = xt(), o = s.size || a.size;
  return /* @__PURE__ */ y.createElement("div", {
    className: $("pgn__form-control-decorator-group", {
      "has-prepended-node": !!t,
      "has-appended-node": !!n,
      "has-leading-element": !!t,
      "has-trailing-element": !!n,
      "has-floating-label": !!r,
      "pgn__form-control-decorator-group-lg": o === Br.LARGE,
      "pgn__form-control-decorator-group-sm": o === Br.SMALL
    }, i),
    ...s
  }, e, t && /* @__PURE__ */ y.createElement(ha, {
    location: "leading"
  }, t), n && /* @__PURE__ */ y.createElement(ha, {
    location: "trailing"
  }, n), r && /* @__PURE__ */ y.createElement(pv, null, r));
}
Ec.propTypes = {
  children: d.node.isRequired,
  leadingElement: d.node,
  trailingElement: d.node,
  floatingLabel: d.node,
  className: d.string,
  size: d.oneOf([Br.SMALL, Br.LARGE])
};
Ec.defaultProps = {
  leadingElement: void 0,
  trailingElement: void 0,
  floatingLabel: void 0,
  className: void 0,
  size: void 0
};
const Xr = /* @__PURE__ */ y.forwardRef(({
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
    getControlProps: v,
    ...x
  } = xt(), E = y.useRef(), k = c || E, m = u.size || x.size, [h, g] = Wx({
    defaultValue: u.defaultValue,
    value: u.value
  }), w = C.useCallback(() => {
    e === "textarea" && a && (!k.current.initialHeight && !k.current.offsets && (k.current.initialHeight = k.current.offsetHeight, k.current.offsets = k.current.offsetHeight - k.current.clientHeight), k.current.style.height = `${k.current.initialHeight}px`, k.current.style.height = `${k.current.scrollHeight + k.current.offsets}px`);
  }, [e, a, k]);
  C.useEffect(() => {
    w();
  }, [w]);
  const S = v({
    ...u,
    // eslint-disable-next-line react/prop-types
    onBlur: zn(g, u.onBlur)
  }), _ = (T) => {
    w(), o && o(T);
  };
  return /* @__PURE__ */ y.createElement(Ec, {
    size: m,
    leadingElement: r,
    trailingElement: i,
    floatingLabel: s,
    className: t
  }, /* @__PURE__ */ y.createElement(ev, {
    as: l ? zx : e,
    ref: k,
    size: m,
    isInvalid: p,
    isValid: f,
    className: $(n, {
      "has-value": h
    }),
    onChange: _,
    mask: l,
    ...S
  }));
}), u1 = ["sm", "lg"];
Xr.Feedback = Tn;
Xr.Description = Tn;
Xr.propTypes = {
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
  size: d.oneOf(u1),
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
Xr.defaultProps = {
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
function xc({
  children: e,
  isInline: t = !1,
  ...n
}) {
  const {
    size: r,
    isControlGroup: i,
    getLabelProps: s
  } = xt(), a = $("pgn__form-label", {
    "pgn__form-label-inline": t,
    "pgn__form-label-lg": r === Br.LARGE,
    "pgn__form-label-sm": r === Br.SMALL
  }, n.className), o = s({
    ...n,
    className: a
  }), l = i ? "p" : "label";
  return /* @__PURE__ */ y.createElement(l, o, e);
}
function c1({
  children: e,
  controlId: t,
  isInvalid: n = !1,
  isValid: r = !1,
  size: i,
  as: s,
  ...a
}) {
  return /* @__PURE__ */ y.createElement(s ?? "div", {
    ...a,
    className: $("pgn__form-group", a.className)
  }, /* @__PURE__ */ y.createElement(Za, {
    controlId: t,
    isInvalid: n,
    isValid: r,
    size: i
  }, e));
}
const f1 = (e) => e, hv = /* @__PURE__ */ y.createContext({
  getRadioControlProps: f1,
  hasRadioSetProvider: !1
}), d1 = () => C.useContext(hv);
function wc({
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
      onBlur: c.onBlur ? zn(n, c.onBlur) : n,
      /* istanbul ignore next */
      onFocus: c.onFocus ? zn(r, c.onFocus) : r,
      /* istanbul ignore next */
      onChange: c.onChange ? zn(i, c.onChange) : i,
      checked: o ? s === c.value : void 0,
      defaultChecked: o ? void 0 : a === c.value
    }),
    onBlur: n,
    onFocus: r,
    onChange: i,
    hasRadioSetProvider: !0
  };
  return /* @__PURE__ */ y.createElement(hv.Provider, {
    value: u
  }, e);
}
wc.propTypes = {
  children: d.node.isRequired,
  name: d.string.isRequired,
  onBlur: d.func,
  onFocus: d.func,
  onChange: d.func,
  value: d.string,
  defaultValue: d.string
};
wc.defaultProps = {
  onBlur: void 0,
  onFocus: void 0,
  onChange: void 0,
  value: void 0,
  defaultValue: void 0
};
const kc = /* @__PURE__ */ y.forwardRef((e, t) => {
  const {
    getControlProps: n
  } = xt(), {
    getRadioControlProps: r,
    hasRadioSetProvider: i
  } = d1();
  let s = n({
    ...e,
    className: $("pgn__form-radio-input", e.className)
  });
  return i && (s = r(s)), /* @__PURE__ */ y.createElement("input", {
    ...s,
    type: "radio",
    ref: t
  });
});
kc.propTypes = {
  className: d.string
};
kc.defaultProps = {
  className: void 0
};
const Cc = /* @__PURE__ */ y.forwardRef(({
  children: e,
  className: t,
  controlClassName: n,
  labelClassName: r,
  description: i,
  isInvalid: s,
  isValid: a,
  ...o
}, l) => /* @__PURE__ */ y.createElement(Za, {
  controlId: o.id,
  isInvalid: s,
  isValid: a
}, /* @__PURE__ */ y.createElement("div", {
  className: $("pgn__form-radio", t, {
    "pgn__form-control-valid": a,
    "pgn__form-control-invalid": s,
    "pgn__form-control-disabled": o.disabled
  })
}, /* @__PURE__ */ y.createElement(kc, {
  ref: l,
  className: n,
  ...o
}), /* @__PURE__ */ y.createElement("div", null, /* @__PURE__ */ y.createElement(xc, {
  className: r
}, e), i && /* @__PURE__ */ y.createElement(Tn, {
  hasIcon: !1
}, i)))));
Cc.propTypes = {
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
Cc.defaultProps = {
  id: void 0,
  className: void 0,
  controlClassName: void 0,
  labelClassName: void 0,
  description: void 0,
  isInvalid: !1,
  isValid: !1,
  disabled: !1
};
function eo({
  as: e,
  className: t,
  isInline: n,
  children: r,
  ...i
}) {
  return /* @__PURE__ */ y.createElement(e, {
    className: $(t, {
      "pgn__form-control-set": !n,
      "pgn__form-control-set-inline": n
    }),
    ...i
  }, r);
}
eo.propTypes = {
  /** Specifies the base element */
  as: d.elementType,
  /** A class name to append to the base element. */
  className: d.string,
  /** Specifies whether the component should be displayed with inline styling. */
  isInline: d.bool,
  /** Specifies contents of the component. */
  children: d.node
};
eo.defaultProps = {
  as: "div",
  className: void 0,
  isInline: !1,
  children: null
};
function Sc({
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
  } = xt();
  c(!0);
  const p = u(l);
  return /* @__PURE__ */ y.createElement(wc, {
    name: t,
    value: n,
    defaultValue: r,
    onFocus: a,
    onBlur: o,
    onChange: s
  }, /* @__PURE__ */ y.createElement(eo, {
    role: "radiogroup",
    isInline: i,
    ...p
  }, e));
}
Sc.propTypes = {
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
Sc.defaultProps = {
  className: void 0,
  value: void 0,
  defaultValue: void 0,
  isInline: !1,
  onChange: void 0,
  onFocus: void 0,
  onBlur: void 0
};
let ks;
const p1 = new Uint8Array(16);
function h1() {
  if (!ks && (ks = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ks))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ks(p1);
}
const _e = [];
for (let e = 0; e < 256; ++e)
  _e.push((e + 256).toString(16).slice(1));
function m1(e, t = 0) {
  return _e[e[t + 0]] + _e[e[t + 1]] + _e[e[t + 2]] + _e[e[t + 3]] + "-" + _e[e[t + 4]] + _e[e[t + 5]] + "-" + _e[e[t + 6]] + _e[e[t + 7]] + "-" + _e[e[t + 8]] + _e[e[t + 9]] + "-" + _e[e[t + 10]] + _e[e[t + 11]] + _e[e[t + 12]] + _e[e[t + 13]] + _e[e[t + 14]] + _e[e[t + 15]];
}
const v1 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Nd = {
  randomUUID: v1
};
function g1(e, t, n) {
  if (Nd.randomUUID && !e)
    return Nd.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || h1)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, m1(r);
}
const y1 = (e, t, n) => (r, i, s, ...a) => t(r) && r[i] === void 0 ? new Error(
  `${s}: ${i} is required when ${n}`
) : e(r, i, s, ...a), E1 = (e, t) => t.every((n) => e[n] !== void 0), Uo = (e, t) => y1(
  e,
  (n) => Array.isArray(t) ? E1(n, t) : n[t] === !0,
  `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`
);
function Ad() {
  return C.useState(null);
}
const Id = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function x1(e, t) {
  const n = Id(e), r = Id(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function w1(e, t) {
  return C.useMemo(() => x1(e, t), [e, t]);
}
var Je = "top", vt = "bottom", gt = "right", et = "left", _c = "auto", Yi = [Je, vt, gt, et], Vr = "start", Ui = "end", k1 = "clippingParents", mv = "viewport", si = "popper", C1 = "reference", Rd = /* @__PURE__ */ Yi.reduce(function(e, t) {
  return e.concat([t + "-" + Vr, t + "-" + Ui]);
}, []), Tc = /* @__PURE__ */ [].concat(Yi, [_c]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Vr, t + "-" + Ui]);
}, []), S1 = "beforeRead", _1 = "read", T1 = "afterRead", N1 = "beforeMain", A1 = "main", I1 = "afterMain", R1 = "beforeWrite", b1 = "write", P1 = "afterWrite", F1 = [S1, _1, T1, N1, A1, I1, R1, b1, P1];
function Vt(e) {
  return e.split("-")[0];
}
function at(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Zn(e) {
  var t = at(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ht(e) {
  var t = at(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Nc(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = at(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Gn = Math.max, ma = Math.min, Hr = Math.round;
function Zl() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function vv() {
  return !/^((?!chrome|android).)*safari/i.test(Zl());
}
function Ur(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, s = 1;
  t && Ht(e) && (i = e.offsetWidth > 0 && Hr(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Hr(r.height) / e.offsetHeight || 1);
  var a = Zn(e) ? at(e) : window, o = a.visualViewport, l = !vv() && n, u = (r.left + (l && o ? o.offsetLeft : 0)) / i, c = (r.top + (l && o ? o.offsetTop : 0)) / s, p = r.width / i, f = r.height / s;
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
function Ac(e) {
  var t = Ur(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function gv(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Nc(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Nn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function en(e) {
  return at(e).getComputedStyle(e);
}
function O1(e) {
  return ["table", "td", "th"].indexOf(Nn(e)) >= 0;
}
function Pn(e) {
  return ((Zn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function to(e) {
  return Nn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Nc(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Pn(e)
  );
}
function bd(e) {
  return !Ht(e) || // https://github.com/popperjs/popper-core/issues/837
  en(e).position === "fixed" ? null : e.offsetParent;
}
function M1(e) {
  var t = /firefox/i.test(Zl()), n = /Trident/i.test(Zl());
  if (n && Ht(e)) {
    var r = en(e);
    if (r.position === "fixed")
      return null;
  }
  var i = to(e);
  for (Nc(i) && (i = i.host); Ht(i) && ["html", "body"].indexOf(Nn(i)) < 0; ) {
    var s = en(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Zi(e) {
  for (var t = at(e), n = bd(e); n && O1(n) && en(n).position === "static"; )
    n = bd(n);
  return n && (Nn(n) === "html" || Nn(n) === "body" && en(n).position === "static") ? t : n || M1(e) || t;
}
function Ic(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function wi(e, t, n) {
  return Gn(e, ma(t, n));
}
function D1(e, t, n) {
  var r = wi(e, t, n);
  return r > n ? n : r;
}
function yv() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ev(e) {
  return Object.assign({}, yv(), e);
}
function xv(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var L1 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Ev(typeof t != "number" ? t : xv(t, Yi));
};
function B1(e) {
  var t, n = e.state, r = e.name, i = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, o = Vt(n.placement), l = Ic(o), u = [et, gt].indexOf(o) >= 0, c = u ? "height" : "width";
  if (!(!s || !a)) {
    var p = L1(i.padding, n), f = Ac(s), v = l === "y" ? Je : et, x = l === "y" ? vt : gt, E = n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c], k = a[l] - n.rects.reference[l], m = Zi(s), h = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, g = E / 2 - k / 2, w = p[v], S = h - f[c] - p[x], _ = h / 2 - f[c] / 2 + g, T = wi(w, _, S), N = l;
    n.modifiersData[r] = (t = {}, t[N] = T, t.centerOffset = T - _, t);
  }
}
function V1(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || gv(t.elements.popper, i) && (t.elements.arrow = i));
}
const H1 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: B1,
  effect: V1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function $r(e) {
  return e.split("-")[1];
}
var U1 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function $1(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: Hr(n * i) / i || 0,
    y: Hr(r * i) / i || 0
  };
}
function Pd(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, s = e.variation, a = e.offsets, o = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, p = e.isFixed, f = a.x, v = f === void 0 ? 0 : f, x = a.y, E = x === void 0 ? 0 : x, k = typeof c == "function" ? c({
    x: v,
    y: E
  }) : {
    x: v,
    y: E
  };
  v = k.x, E = k.y;
  var m = a.hasOwnProperty("x"), h = a.hasOwnProperty("y"), g = et, w = Je, S = window;
  if (u) {
    var _ = Zi(n), T = "clientHeight", N = "clientWidth";
    if (_ === at(n) && (_ = Pn(n), en(_).position !== "static" && o === "absolute" && (T = "scrollHeight", N = "scrollWidth")), _ = _, i === Je || (i === et || i === gt) && s === Ui) {
      w = vt;
      var b = p && _ === S && S.visualViewport ? S.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        _[T]
      );
      E -= b - r.height, E *= l ? 1 : -1;
    }
    if (i === et || (i === Je || i === vt) && s === Ui) {
      g = gt;
      var R = p && _ === S && S.visualViewport ? S.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        _[N]
      );
      v -= R - r.width, v *= l ? 1 : -1;
    }
  }
  var B = Object.assign({
    position: o
  }, u && U1), j = c === !0 ? $1({
    x: v,
    y: E
  }, at(n)) : {
    x: v,
    y: E
  };
  if (v = j.x, E = j.y, l) {
    var G;
    return Object.assign({}, B, (G = {}, G[w] = h ? "0" : "", G[g] = m ? "0" : "", G.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + E + "px)" : "translate3d(" + v + "px, " + E + "px, 0)", G));
  }
  return Object.assign({}, B, (t = {}, t[w] = h ? E + "px" : "", t[g] = m ? v + "px" : "", t.transform = "", t));
}
function j1(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, s = n.adaptive, a = s === void 0 ? !0 : s, o = n.roundOffsets, l = o === void 0 ? !0 : o, u = {
    placement: Vt(t.placement),
    variation: $r(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Pd(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Pd(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const z1 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: j1,
  data: {}
};
var Cs = {
  passive: !0
};
function G1(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, s = i === void 0 ? !0 : i, a = r.resize, o = a === void 0 ? !0 : a, l = at(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, Cs);
  }), o && l.addEventListener("resize", n.update, Cs), function() {
    s && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Cs);
    }), o && l.removeEventListener("resize", n.update, Cs);
  };
}
const W1 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: G1,
  data: {}
};
var X1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Hs(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return X1[t];
  });
}
var Q1 = {
  start: "end",
  end: "start"
};
function Fd(e) {
  return e.replace(/start|end/g, function(t) {
    return Q1[t];
  });
}
function Rc(e) {
  var t = at(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function bc(e) {
  return Ur(Pn(e)).left + Rc(e).scrollLeft;
}
function K1(e, t) {
  var n = at(e), r = Pn(e), i = n.visualViewport, s = r.clientWidth, a = r.clientHeight, o = 0, l = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = vv();
    (u || !u && t === "fixed") && (o = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: o + bc(e),
    y: l
  };
}
function q1(e) {
  var t, n = Pn(e), r = Rc(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = Gn(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Gn(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), o = -r.scrollLeft + bc(e), l = -r.scrollTop;
  return en(i || n).direction === "rtl" && (o += Gn(n.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: o,
    y: l
  };
}
function Pc(e) {
  var t = en(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function wv(e) {
  return ["html", "body", "#document"].indexOf(Nn(e)) >= 0 ? e.ownerDocument.body : Ht(e) && Pc(e) ? e : wv(to(e));
}
function ki(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = wv(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = at(r), a = i ? [s].concat(s.visualViewport || [], Pc(r) ? r : []) : r, o = t.concat(a);
  return i ? o : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    o.concat(ki(to(a)))
  );
}
function Jl(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Y1(e, t) {
  var n = Ur(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Od(e, t, n) {
  return t === mv ? Jl(K1(e, n)) : Zn(t) ? Y1(t, n) : Jl(q1(Pn(e)));
}
function Z1(e) {
  var t = ki(to(e)), n = ["absolute", "fixed"].indexOf(en(e).position) >= 0, r = n && Ht(e) ? Zi(e) : e;
  return Zn(r) ? t.filter(function(i) {
    return Zn(i) && gv(i, r) && Nn(i) !== "body";
  }) : [];
}
function J1(e, t, n, r) {
  var i = t === "clippingParents" ? Z1(e) : [].concat(t), s = [].concat(i, [n]), a = s[0], o = s.reduce(function(l, u) {
    var c = Od(e, u, r);
    return l.top = Gn(c.top, l.top), l.right = ma(c.right, l.right), l.bottom = ma(c.bottom, l.bottom), l.left = Gn(c.left, l.left), l;
  }, Od(e, a, r));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function kv(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? Vt(r) : null, s = r ? $r(r) : null, a = t.x + t.width / 2 - n.width / 2, o = t.y + t.height / 2 - n.height / 2, l;
  switch (i) {
    case Je:
      l = {
        x: a,
        y: t.y - n.height
      };
      break;
    case vt:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case gt:
      l = {
        x: t.x + t.width,
        y: o
      };
      break;
    case et:
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
  var u = i ? Ic(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (s) {
      case Vr:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case Ui:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function $i(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, s = n.strategy, a = s === void 0 ? e.strategy : s, o = n.boundary, l = o === void 0 ? k1 : o, u = n.rootBoundary, c = u === void 0 ? mv : u, p = n.elementContext, f = p === void 0 ? si : p, v = n.altBoundary, x = v === void 0 ? !1 : v, E = n.padding, k = E === void 0 ? 0 : E, m = Ev(typeof k != "number" ? k : xv(k, Yi)), h = f === si ? C1 : si, g = e.rects.popper, w = e.elements[x ? h : f], S = J1(Zn(w) ? w : w.contextElement || Pn(e.elements.popper), l, c, a), _ = Ur(e.elements.reference), T = kv({
    reference: _,
    element: g,
    placement: i
  }), N = Jl(Object.assign({}, g, T)), b = f === si ? N : _, R = {
    top: S.top - b.top + m.top,
    bottom: b.bottom - S.bottom + m.bottom,
    left: S.left - b.left + m.left,
    right: b.right - S.right + m.right
  }, B = e.modifiersData.offset;
  if (f === si && B) {
    var j = B[i];
    Object.keys(R).forEach(function(G) {
      var ie = [gt, vt].indexOf(G) >= 0 ? 1 : -1, de = [Je, vt].indexOf(G) >= 0 ? "y" : "x";
      R[G] += j[de] * ie;
    });
  }
  return R;
}
function ew(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, s = n.rootBoundary, a = n.padding, o = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Tc : l, c = $r(r), p = c ? o ? Rd : Rd.filter(function(x) {
    return $r(x) === c;
  }) : Yi, f = p.filter(function(x) {
    return u.indexOf(x) >= 0;
  });
  f.length === 0 && (f = p);
  var v = f.reduce(function(x, E) {
    return x[E] = $i(e, {
      placement: E,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[Vt(E)], x;
  }, {});
  return Object.keys(v).sort(function(x, E) {
    return v[x] - v[E];
  });
}
function tw(e) {
  if (Vt(e) === _c)
    return [];
  var t = Hs(e);
  return [Fd(e), t, Fd(t)];
}
function nw(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, s = i === void 0 ? !0 : i, a = n.altAxis, o = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, c = n.boundary, p = n.rootBoundary, f = n.altBoundary, v = n.flipVariations, x = v === void 0 ? !0 : v, E = n.allowedAutoPlacements, k = t.options.placement, m = Vt(k), h = m === k, g = l || (h || !x ? [Hs(k)] : tw(k)), w = [k].concat(g).reduce(function(Se, Me) {
      return Se.concat(Vt(Me) === _c ? ew(t, {
        placement: Me,
        boundary: c,
        rootBoundary: p,
        padding: u,
        flipVariations: x,
        allowedAutoPlacements: E
      }) : Me);
    }, []), S = t.rects.reference, _ = t.rects.popper, T = /* @__PURE__ */ new Map(), N = !0, b = w[0], R = 0; R < w.length; R++) {
      var B = w[R], j = Vt(B), G = $r(B) === Vr, ie = [Je, vt].indexOf(j) >= 0, de = ie ? "width" : "height", H = $i(t, {
        placement: B,
        boundary: c,
        rootBoundary: p,
        altBoundary: f,
        padding: u
      }), W = ie ? G ? gt : et : G ? vt : Je;
      S[de] > _[de] && (W = Hs(W));
      var A = Hs(W), O = [];
      if (s && O.push(H[j] <= 0), o && O.push(H[W] <= 0, H[A] <= 0), O.every(function(Se) {
        return Se;
      })) {
        b = B, N = !1;
        break;
      }
      T.set(B, O);
    }
    if (N)
      for (var M = x ? 3 : 1, K = function(Me) {
        var De = w.find(function(kt) {
          var $t = T.get(kt);
          if ($t)
            return $t.slice(0, Me).every(function(ir) {
              return ir;
            });
        });
        if (De)
          return b = De, "break";
      }, U = M; U > 0; U--) {
        var wt = K(U);
        if (wt === "break") break;
      }
    t.placement !== b && (t.modifiersData[r]._skip = !0, t.placement = b, t.reset = !0);
  }
}
const rw = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: nw,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Md(e, t, n) {
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
function Dd(e) {
  return [Je, gt, vt, et].some(function(t) {
    return e[t] >= 0;
  });
}
function iw(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, s = t.modifiersData.preventOverflow, a = $i(t, {
    elementContext: "reference"
  }), o = $i(t, {
    altBoundary: !0
  }), l = Md(a, r), u = Md(o, i, s), c = Dd(l), p = Dd(u);
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
const sw = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: iw
};
function aw(e, t, n) {
  var r = Vt(e), i = [et, Je].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = s[0], o = s[1];
  return a = a || 0, o = (o || 0) * i, [et, gt].indexOf(r) >= 0 ? {
    x: o,
    y: a
  } : {
    x: a,
    y: o
  };
}
function ow(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, s = i === void 0 ? [0, 0] : i, a = Tc.reduce(function(c, p) {
    return c[p] = aw(p, t.rects, s), c;
  }, {}), o = a[t.placement], l = o.x, u = o.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const lw = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ow
};
function uw(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = kv({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const cw = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: uw,
  data: {}
};
function fw(e) {
  return e === "x" ? "y" : "x";
}
function dw(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, s = i === void 0 ? !0 : i, a = n.altAxis, o = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, p = n.padding, f = n.tether, v = f === void 0 ? !0 : f, x = n.tetherOffset, E = x === void 0 ? 0 : x, k = $i(t, {
    boundary: l,
    rootBoundary: u,
    padding: p,
    altBoundary: c
  }), m = Vt(t.placement), h = $r(t.placement), g = !h, w = Ic(m), S = fw(w), _ = t.modifiersData.popperOffsets, T = t.rects.reference, N = t.rects.popper, b = typeof E == "function" ? E(Object.assign({}, t.rects, {
    placement: t.placement
  })) : E, R = typeof b == "number" ? {
    mainAxis: b,
    altAxis: b
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, b), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, j = {
    x: 0,
    y: 0
  };
  if (_) {
    if (s) {
      var G, ie = w === "y" ? Je : et, de = w === "y" ? vt : gt, H = w === "y" ? "height" : "width", W = _[w], A = W + k[ie], O = W - k[de], M = v ? -N[H] / 2 : 0, K = h === Vr ? T[H] : N[H], U = h === Vr ? -N[H] : -T[H], wt = t.elements.arrow, Se = v && wt ? Ac(wt) : {
        width: 0,
        height: 0
      }, Me = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : yv(), De = Me[ie], kt = Me[de], $t = wi(0, T[H], Se[H]), ir = g ? T[H] / 2 - M - $t - De - R.mainAxis : K - $t - De - R.mainAxis, Ji = g ? -T[H] / 2 + M + $t + kt + R.mainAxis : U + $t + kt + R.mainAxis, sr = t.elements.arrow && Zi(t.elements.arrow), es = sr ? w === "y" ? sr.clientTop || 0 : sr.clientLeft || 0 : 0, ts = (G = B == null ? void 0 : B[w]) != null ? G : 0, ao = W + ir - ts - es, oo = W + Ji - ts, ar = wi(v ? ma(A, ao) : A, W, v ? Gn(O, oo) : O);
      _[w] = ar, j[w] = ar - W;
    }
    if (o) {
      var ve, Xe = w === "x" ? Je : et, Le = w === "x" ? vt : gt, xe = _[S], rn = S === "y" ? "height" : "width", ns = xe + k[Xe], Kr = xe - k[Le], qr = [Je, et].indexOf(m) !== -1, Wc = (ve = B == null ? void 0 : B[S]) != null ? ve : 0, Xc = qr ? ns : xe - T[rn] - N[rn] - Wc + R.altAxis, Qc = qr ? xe + T[rn] + N[rn] - Wc - R.altAxis : Kr, Kc = v && qr ? D1(Xc, xe, Qc) : wi(v ? Xc : ns, xe, v ? Qc : Kr);
      _[S] = Kc, j[S] = Kc - xe;
    }
    t.modifiersData[r] = j;
  }
}
const pw = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: dw,
  requiresIfExists: ["offset"]
};
function hw(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function mw(e) {
  return e === at(e) || !Ht(e) ? Rc(e) : hw(e);
}
function vw(e) {
  var t = e.getBoundingClientRect(), n = Hr(t.width) / e.offsetWidth || 1, r = Hr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function gw(e, t, n) {
  n === void 0 && (n = !1);
  var r = Ht(t), i = Ht(t) && vw(t), s = Pn(t), a = Ur(e, i, n), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Nn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Pc(s)) && (o = mw(t)), Ht(t) ? (l = Ur(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = bc(s))), {
    x: a.left + o.scrollLeft - l.x,
    y: a.top + o.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function yw(e) {
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
function Ew(e) {
  var t = yw(e);
  return F1.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function xw(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function ww(e) {
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
var Ld = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Bd() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function kw(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, s = i === void 0 ? Ld : i;
  return function(o, l, u) {
    u === void 0 && (u = s);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ld, s),
      modifiersData: {},
      elements: {
        reference: o,
        popper: l
      },
      attributes: {},
      styles: {}
    }, p = [], f = !1, v = {
      state: c,
      setOptions: function(m) {
        var h = typeof m == "function" ? m(c.options) : m;
        E(), c.options = Object.assign({}, s, c.options, h), c.scrollParents = {
          reference: Zn(o) ? ki(o) : o.contextElement ? ki(o.contextElement) : [],
          popper: ki(l)
        };
        var g = Ew(ww([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = g.filter(function(w) {
          return w.enabled;
        }), x(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var m = c.elements, h = m.reference, g = m.popper;
          if (Bd(h, g)) {
            c.rects = {
              reference: gw(h, Zi(g), c.options.strategy === "fixed"),
              popper: Ac(g)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(R) {
              return c.modifiersData[R.name] = Object.assign({}, R.data);
            });
            for (var w = 0; w < c.orderedModifiers.length; w++) {
              if (c.reset === !0) {
                c.reset = !1, w = -1;
                continue;
              }
              var S = c.orderedModifiers[w], _ = S.fn, T = S.options, N = T === void 0 ? {} : T, b = S.name;
              typeof _ == "function" && (c = _({
                state: c,
                options: N,
                name: b,
                instance: v
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: xw(function() {
        return new Promise(function(k) {
          v.forceUpdate(), k(c);
        });
      }),
      destroy: function() {
        E(), f = !0;
      }
    };
    if (!Bd(o, l))
      return v;
    v.setOptions(u).then(function(k) {
      !f && u.onFirstUpdate && u.onFirstUpdate(k);
    });
    function x() {
      c.orderedModifiers.forEach(function(k) {
        var m = k.name, h = k.options, g = h === void 0 ? {} : h, w = k.effect;
        if (typeof w == "function") {
          var S = w({
            state: c,
            name: m,
            instance: v,
            options: g
          }), _ = function() {
          };
          p.push(S || _);
        }
      });
    }
    function E() {
      p.forEach(function(k) {
        return k();
      }), p = [];
    }
    return v;
  };
}
var Cw = kw({
  defaultModifiers: [sw, cw, z1, W1, lw, rw, pw, H1]
});
function Cv() {
  const e = C.useRef(!0), t = C.useRef(() => e.current);
  return C.useEffect(() => (e.current = !0, () => {
    e.current = !1;
  }), []), t.current;
}
function Sw(e) {
  const t = Cv();
  return [e[0], C.useCallback((n) => {
    if (t())
      return e[1](n);
  }, [t, e[1]])];
}
var Vd = function(t) {
  return {
    position: t,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
}, _w = {
  name: "applyStyles",
  enabled: !1
}, Tw = {
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
}, Nw = [];
function Aw(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.enabled, s = i === void 0 ? !0 : i, a = r.placement, o = a === void 0 ? "bottom" : a, l = r.strategy, u = l === void 0 ? "absolute" : l, c = r.modifiers, p = c === void 0 ? Nw : c, f = ne(r, ["enabled", "placement", "strategy", "modifiers"]), v = C.useRef(), x = C.useCallback(function() {
    var w;
    (w = v.current) == null || w.update();
  }, []), E = C.useCallback(function() {
    var w;
    (w = v.current) == null || w.forceUpdate();
  }, []), k = Sw(C.useState({
    placement: o,
    update: x,
    forceUpdate: E,
    attributes: {},
    styles: {
      popper: Vd(u),
      arrow: {}
    }
  })), m = k[0], h = k[1], g = C.useMemo(function() {
    return {
      name: "updateStateModifier",
      enabled: !0,
      phase: "write",
      requires: ["computeStyles"],
      fn: function(S) {
        var _ = S.state, T = {}, N = {};
        Object.keys(_.elements).forEach(function(b) {
          T[b] = _.styles[b], N[b] = _.attributes[b];
        }), h({
          state: _,
          styles: T,
          attributes: N,
          update: x,
          forceUpdate: E,
          placement: _.placement
        });
      }
    };
  }, [x, E, h]);
  return C.useEffect(function() {
    !v.current || !s || v.current.setOptions({
      placement: o,
      strategy: u,
      modifiers: [].concat(p, [g, _w])
    });
  }, [u, o, g, s]), C.useEffect(function() {
    if (!(!s || e == null || t == null))
      return v.current = Cw(e, t, V({}, f, {
        placement: o,
        strategy: u,
        modifiers: [].concat(p, [Tw, g])
      })), function() {
        v.current != null && (v.current.destroy(), v.current = void 0, h(function(w) {
          return V({}, w, {
            attributes: {},
            styles: {
              popper: Vd(u)
            }
          });
        }));
      };
  }, [s, e, t]), m;
}
function Sv(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
const Iw = !!(typeof window < "u" && window.document && window.document.createElement);
var eu = !1, tu = !1;
try {
  var $o = {
    get passive() {
      return eu = !0;
    },
    get once() {
      return tu = eu = !0;
    }
  };
  Iw && (window.addEventListener("test", $o, $o), window.removeEventListener("test", $o, !0));
} catch {
}
function Rw(e, t, n, r) {
  if (r && typeof r != "boolean" && !tu) {
    var i = r.once, s = r.capture, a = n;
    !tu && i && (a = n.__once || function o(l) {
      this.removeEventListener(t, o, s), n.call(this, l);
    }, n.__once = a), e.addEventListener(t, a, eu ? r : s);
  }
  e.addEventListener(t, n, r);
}
function bw(e, t, n, r) {
  var i = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
function kr(e, t, n, r) {
  return Rw(e, t, n, r), function() {
    bw(e, t, n, r);
  };
}
function Pw(e) {
  const t = C.useRef(e);
  return C.useEffect(() => {
    t.current = e;
  }, [e]), t;
}
function nu(e) {
  const t = Pw(e);
  return C.useCallback(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
function Fc(e) {
  return e && e.ownerDocument || document;
}
function va(e) {
  return e && "setState" in e ? wr.findDOMNode(e) : e ?? null;
}
const Fw = function(e) {
  return Fc(va(e));
};
var Ow = 27, Hd = function() {
};
function Mw(e) {
  return e.button === 0;
}
function Dw(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var Ud = function(t) {
  return t && ("current" in t ? t.current : t);
};
function Lw(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.disabled, s = r.clickTrigger, a = s === void 0 ? "click" : s, o = C.useRef(!1), l = t || Hd, u = C.useCallback(function(f) {
    var v, x = Ud(e);
    px(!!x, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), o.current = !x || Dw(f) || !Mw(f) || !!Sv(x, (v = f.composedPath == null ? void 0 : f.composedPath()[0]) != null ? v : f.target);
  }, [e]), c = nu(function(f) {
    o.current || l(f);
  }), p = nu(function(f) {
    f.keyCode === Ow && l(f);
  });
  C.useEffect(function() {
    if (!(i || e == null)) {
      var f = window.event, v = Fw(Ud(e)), x = kr(v, a, u, !0), E = kr(v, a, function(h) {
        if (h === f) {
          f = void 0;
          return;
        }
        c(h);
      }), k = kr(v, "keyup", function(h) {
        if (h === f) {
          f = void 0;
          return;
        }
        p(h);
      }), m = [];
      return "ontouchstart" in v.documentElement && (m = [].slice.call(v.body.children).map(function(h) {
        return kr(h, "mousemove", Hd);
      })), function() {
        x(), E(), k(), m.forEach(function(h) {
          return h();
        });
      };
    }
  }, [e, i, a, u, c, p]);
}
var jo = function(t) {
  var n;
  return typeof document > "u" ? null : t == null ? Fc().body : (typeof t == "function" && (t = t()), t && "current" in t && (t = t.current), (n = t) != null && n.nodeType && t || null);
};
function $d(e, t) {
  var n = C.useState(function() {
    return jo(e);
  }), r = n[0], i = n[1];
  if (!r) {
    var s = jo(e);
    s && i(s);
  }
  return C.useEffect(function() {
  }, [t, r]), C.useEffect(function() {
    var a = jo(e);
    a !== r && i(a);
  }, [e, r]), r;
}
function Bw(e) {
  var t = {};
  return Array.isArray(e) ? (e == null || e.forEach(function(n) {
    t[n.name] = n;
  }), t) : e || t;
}
function Vw(e) {
  return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
    return e[t].name = t, e[t];
  });
}
function Hw(e) {
  var t, n, r, i, s = e.enabled, a = e.enableEvents, o = e.placement, l = e.flip, u = e.offset, c = e.fixed, p = e.containerPadding, f = e.arrowElement, v = e.popperConfig, x = v === void 0 ? {} : v, E = Bw(x.modifiers);
  return V({}, x, {
    placement: o,
    enabled: s,
    strategy: c ? "fixed" : x.strategy,
    modifiers: Vw(V({}, E, {
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
var Oc = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.flip, r = e.offset, i = e.placement, s = e.containerPadding, a = s === void 0 ? 5 : s, o = e.popperConfig, l = o === void 0 ? {} : o, u = e.transition, c = Ad(), p = c[0], f = c[1], v = Ad(), x = v[0], E = v[1], k = w1(f, t), m = $d(e.container), h = $d(e.target), g = C.useState(!e.show), w = g[0], S = g[1], _ = Aw(h, p, Hw({
    placement: i,
    enableEvents: !!e.show,
    containerPadding: a || 5,
    flip: n,
    offset: r,
    arrowElement: x,
    popperConfig: l
  })), T = _.styles, N = _.attributes, b = ne(_, ["styles", "attributes"]);
  e.show ? w && S(!1) : !e.transition && !w && S(!0);
  var R = function() {
    S(!0), e.onExited && e.onExited.apply(e, arguments);
  }, B = e.show || u && !w;
  if (Lw(p, e.onHide, {
    disabled: !e.rootClose || e.rootCloseDisabled,
    clickTrigger: e.rootCloseEvent
  }), !B)
    return null;
  var j = e.children(V({}, b, {
    show: !!e.show,
    props: V({}, N.popper, {
      style: T.popper,
      ref: k
    }),
    arrowProps: V({}, N.arrow, {
      style: T.arrow,
      ref: E
    })
  }));
  if (u) {
    var G = e.onExit, ie = e.onExiting, de = e.onEnter, H = e.onEntering, W = e.onEntered;
    j = /* @__PURE__ */ y.createElement(u, {
      in: e.show,
      appear: !0,
      onExit: G,
      onExiting: ie,
      onExited: R,
      onEnter: de,
      onEntering: H,
      onEntered: W
    }, j);
  }
  return m ? /* @__PURE__ */ wr.createPortal(j, m) : null;
});
Oc.displayName = "Overlay";
Oc.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: d.bool,
  /** Specify where the overlay element is positioned in relation to the target element */
  placement: d.oneOf(Tc),
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
function zo(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function Go(e) {
  var t = window.getComputedStyle(e), n = parseFloat(t.marginTop) || 0, r = parseFloat(t.marginRight) || 0, i = parseFloat(t.marginBottom) || 0, s = parseFloat(t.marginLeft) || 0;
  return {
    top: n,
    right: r,
    bottom: i,
    left: s
  };
}
function Uw() {
  var e = C.useRef(null), t = C.useRef(null), n = C.useRef(null), r = Ee(void 0, "popover"), i = Ee(void 0, "dropdown-menu"), s = C.useCallback(function(u) {
    !u || !(zo(u, r) || zo(u, i)) || (t.current = Go(u), u.style.margin = "0", e.current = u);
  }, [r, i]), a = C.useMemo(function() {
    return {
      name: "offset",
      options: {
        offset: function(c) {
          var p = c.placement;
          if (!t.current) return [0, 0];
          var f = t.current, v = f.top, x = f.left, E = f.bottom, k = f.right;
          switch (p.split("-")[0]) {
            case "top":
              return [0, E];
            case "left":
              return [0, k];
            case "bottom":
              return [0, v];
            case "right":
              return [0, x];
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
          var c = n.current, p = c.top, f = c.right, v = p || f;
          return {
            top: v,
            left: v,
            right: v,
            bottom: v
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
        if (!(!e.current || !p.elements.arrow || !zo(e.current, r))) {
          if (p.modifiersData["arrow#persistent"]) {
            var f = Go(p.elements.arrow), v = f.top, x = f.right, E = v || x;
            p.modifiersData["arrow#persistent"].padding = {
              top: E,
              left: E,
              right: E,
              bottom: E
            };
          } else
            n.current = Go(p.elements.arrow);
          return p.elements.arrow.style.margin = "0", function() {
            p.elements.arrow && (p.elements.arrow.style.margin = "");
          };
        }
      }
    };
  }, [r]);
  return [s, [a, o, l]];
}
function ru(e, t) {
  return ru = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, ru(e, t);
}
function _v(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ru(e, t);
}
const jd = {
  disabled: !1
}, Tv = y.createContext(null);
var $w = function(t) {
  return t.scrollTop;
}, fi = "unmounted", Dn = "exited", ln = "entering", Ln = "entered", iu = "exiting", nn = /* @__PURE__ */ function(e) {
  _v(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = i, o = a && !a.isMounting ? r.enter : r.appear, l;
    return s.appearStatus = null, r.in ? o ? (l = Dn, s.appearStatus = ln) : l = Ln : r.unmountOnExit || r.mountOnEnter ? l = fi : l = Dn, s.state = {
      status: l
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === fi ? {
      status: Dn
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var s = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== ln && a !== Ln && (s = ln) : (a === ln || a === Ln) && (s = iu);
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
      if (this.cancelNextCallback(), s === ln) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : wr.findDOMNode(this);
          a && $w(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Dn && this.setState({
      status: fi
    });
  }, n.performEnter = function(i) {
    var s = this, a = this.props.enter, o = this.context ? this.context.isMounting : i, l = this.props.nodeRef ? [o] : [wr.findDOMNode(this), o], u = l[0], c = l[1], p = this.getTimeouts(), f = o ? p.appear : p.enter;
    if (!i && !a || jd.disabled) {
      this.safeSetState({
        status: Ln
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, c), this.safeSetState({
      status: ln
    }, function() {
      s.props.onEntering(u, c), s.onTransitionEnd(f, function() {
        s.safeSetState({
          status: Ln
        }, function() {
          s.props.onEntered(u, c);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), o = this.props.nodeRef ? void 0 : wr.findDOMNode(this);
    if (!s || jd.disabled) {
      this.safeSetState({
        status: Dn
      }, function() {
        i.props.onExited(o);
      });
      return;
    }
    this.props.onExit(o), this.safeSetState({
      status: iu
    }, function() {
      i.props.onExiting(o), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: Dn
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
    var a = this.props.nodeRef ? this.props.nodeRef.current : wr.findDOMNode(this), o = i == null && !this.props.addEndListener;
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
    if (i === fi)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var o = ne(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ y.createElement(Tv.Provider, {
        value: null
      }, typeof a == "function" ? a(i, o) : y.cloneElement(y.Children.only(a), o))
    );
  }, t;
}(y.Component);
nn.contextType = Tv;
nn.propTypes = {};
function lr() {
}
nn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: lr,
  onEntering: lr,
  onEntered: lr,
  onExit: lr,
  onExiting: lr,
  onExited: lr
};
nn.UNMOUNTED = fi;
nn.EXITED = Dn;
nn.ENTERING = ln;
nn.ENTERED = Ln;
nn.EXITING = iu;
function jw(e) {
  var t = Fc(e);
  return t && t.defaultView || window;
}
function zw(e, t) {
  return jw(e).getComputedStyle(e, t);
}
var Gw = /([A-Z])/g;
function Ww(e) {
  return e.replace(Gw, "-$1").toLowerCase();
}
var Xw = /^ms-/;
function Ss(e) {
  return Ww(e).replace(Xw, "-ms-");
}
var Qw = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function Kw(e) {
  return !!(e && Qw.test(e));
}
function Nv(e, t) {
  var n = "", r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(Ss(t)) || zw(e).getPropertyValue(Ss(t));
  Object.keys(t).forEach(function(i) {
    var s = t[i];
    !s && s !== 0 ? e.style.removeProperty(Ss(i)) : Kw(i) ? r += i + "(" + s + ") " : n += Ss(i) + ": " + s + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
function qw(e, t, n, r) {
  if (r === void 0 && (r = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, n, r), e.dispatchEvent(i);
  }
}
function Yw(e) {
  var t = Nv(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function Zw(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1, i = setTimeout(function() {
    r || qw(e, "transitionend", !0);
  }, t + n), s = kr(e, "transitionend", function() {
    r = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), s();
  };
}
function Jw(e, t, n, r) {
  n == null && (n = Yw(e) || 0);
  var i = Zw(e, n, r), s = kr(e, "transitionend", t);
  return function() {
    i(), s();
  };
}
function zd(e, t) {
  var n = Nv(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function ek(e, t) {
  var n = zd(e, "transitionDuration"), r = zd(e, "transitionDelay"), i = Jw(e, function(s) {
    s.target === e && (i(), t(s));
  }, n + r);
}
function tk(e) {
  e.offsetHeight;
}
var nk = ["className", "children"], _s, rk = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1
}, ik = (_s = {}, _s[ln] = "show", _s[Ln] = "show", _s), Qr = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = ne(e, nk), s = C.useCallback(function(a) {
    tk(a), i.onEnter && i.onEnter(a);
  }, [i]);
  return /* @__PURE__ */ y.createElement(nn, V({
    ref: t,
    addEndListener: ek
  }, i, {
    onEnter: s
  }), function(a, o) {
    return /* @__PURE__ */ y.cloneElement(r, V({}, o, {
      className: $("fade", n, r.props.className, ik[a])
    }));
  });
});
Qr.defaultProps = rk;
Qr.displayName = "Fade";
var sk = ["children", "transition", "popperConfig"], ak = ["props", "arrowProps", "show", "update", "forceUpdate", "placement", "state"], ok = {
  transition: Qr,
  rootClose: !1,
  show: !1,
  placement: "top"
};
function lk(e, t) {
  var n = e.ref, r = t.ref;
  e.ref = n.__wrapped || (n.__wrapped = function(i) {
    return n(va(i));
  }), t.ref = r.__wrapped || (r.__wrapped = function(i) {
    return r(va(i));
  });
}
function Av(e) {
  var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, s = ne(e, sk), a = C.useRef({}), o = Uw(), l = o[0], u = o[1], c = n === !0 ? Qr : n || null;
  return /* @__PURE__ */ y.createElement(Oc, V({}, s, {
    ref: l,
    popperConfig: V({}, i, {
      modifiers: u.concat(i.modifiers || [])
    }),
    transition: c
  }), function(p) {
    var f, v = p.props, x = p.arrowProps, E = p.show, k = p.update;
    p.forceUpdate;
    var m = p.placement, h = p.state, g = ne(p, ak);
    lk(v, x);
    var w = Object.assign(a.current, {
      state: h,
      scheduleUpdate: k,
      placement: m,
      outOfBoundaries: (h == null || (f = h.modifiersData.hide) == null ? void 0 : f.isReferenceHidden) || !1
    });
    return typeof t == "function" ? t(V({}, g, v, {
      placement: m,
      show: E
    }, !n && E && {
      className: "show"
    }, {
      popper: w,
      arrowProps: x
    })) : /* @__PURE__ */ y.cloneElement(t, V({}, g, v, {
      placement: m,
      arrowProps: x,
      popper: w,
      className: $(t.props.className, !n && E && "show"),
      style: V({}, t.props.style, v.style)
    }));
  });
}
Av.defaultProps = ok;
function uk(e) {
  const t = C.useRef(e);
  return t.current = e, t;
}
function ck(e) {
  const t = uk(e);
  C.useEffect(() => () => t.current(), []);
}
const su = 2 ** 31 - 1;
function Iv(e, t, n) {
  const r = n - Date.now();
  e.current = r <= su ? setTimeout(t, r) : setTimeout(() => Iv(e, t, n), su);
}
function fk() {
  const e = Cv(), t = C.useRef();
  return ck(() => clearTimeout(t.current)), C.useMemo(() => {
    const n = () => clearTimeout(t.current);
    function r(i, s = 0) {
      e() && (n(), s <= su ? t.current = setTimeout(i, s) : Iv(t, i, Date.now() + s));
    }
    return {
      set: r,
      clear: n,
      handleRef: t
    };
  }, []);
}
function Gd(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function dk(e) {
  var t = pk(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function pk(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Rv(e, t, n) {
  var r = C.useRef(e !== void 0), i = C.useState(t), s = i[0], a = i[1], o = e !== void 0, l = r.current;
  return r.current = o, !o && l && s !== t && a(t), [o ? e : s, C.useCallback(function(u) {
    for (var c = arguments.length, p = new Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++)
      p[f - 1] = arguments[f];
    n && n.apply(void 0, [u].concat(p)), a(u);
  }, [n])];
}
function hk(e, t) {
  return Object.keys(t).reduce(function(n, r) {
    var i, s = n, a = s[Gd(r)], o = s[r], l = ne(s, [Gd(r), r].map(dk)), u = t[r], c = Rv(o, a, e[u]), p = c[0], f = c[1];
    return V({}, l, (i = {}, i[r] = p, i[u] = f, i));
  }, e);
}
var mk = ["trigger", "overlay", "children", "popperConfig", "show", "defaultShow", "onToggle", "delay", "placement", "flip"], vk = /* @__PURE__ */ function(e) {
  _v(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return n.render = function() {
    return this.props.children;
  }, t;
}(y.Component);
function gk(e) {
  return e && typeof e == "object" ? e : {
    show: e,
    hide: e
  };
}
function Wd(e, t, n) {
  var r = t[0], i = r.currentTarget, s = r.relatedTarget || r.nativeEvent[n];
  (!s || s !== i) && !Sv(i, s) && e.apply(void 0, t);
}
var yk = {
  defaultShow: !1,
  trigger: ["hover", "focus"]
};
function bv(e) {
  var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, s = i === void 0 ? {} : i, a = e.show, o = e.defaultShow, l = o === void 0 ? !1 : o, u = e.onToggle, c = e.delay, p = e.placement, f = e.flip, v = f === void 0 ? p && p.indexOf("auto") !== -1 : f, x = ne(e, mk), E = C.useRef(null), k = fk(), m = C.useRef(""), h = Rv(a, l, u), g = h[0], w = h[1], S = gk(c), _ = typeof r != "function" ? y.Children.only(r).props : {}, T = _.onFocus, N = _.onBlur, b = _.onClick, R = C.useCallback(function() {
    return va(E.current);
  }, []), B = C.useCallback(function() {
    if (k.clear(), m.current = "show", !S.show) {
      w(!0);
      return;
    }
    k.set(function() {
      m.current === "show" && w(!0);
    }, S.show);
  }, [S.show, w, k]), j = C.useCallback(function() {
    if (k.clear(), m.current = "hide", !S.hide) {
      w(!1);
      return;
    }
    k.set(function() {
      m.current === "hide" && w(!1);
    }, S.hide);
  }, [S.hide, w, k]), G = C.useCallback(function() {
    B();
    for (var M = arguments.length, K = new Array(M), U = 0; U < M; U++)
      K[U] = arguments[U];
    T == null || T.apply(void 0, K);
  }, [B, T]), ie = C.useCallback(function() {
    j();
    for (var M = arguments.length, K = new Array(M), U = 0; U < M; U++)
      K[U] = arguments[U];
    N == null || N.apply(void 0, K);
  }, [j, N]), de = C.useCallback(function() {
    w(!g), b && b.apply(void 0, arguments);
  }, [b, w, g]), H = C.useCallback(function() {
    for (var M = arguments.length, K = new Array(M), U = 0; U < M; U++)
      K[U] = arguments[U];
    Wd(B, K, "fromElement");
  }, [B]), W = C.useCallback(function() {
    for (var M = arguments.length, K = new Array(M), U = 0; U < M; U++)
      K[U] = arguments[U];
    Wd(j, K, "toElement");
  }, [j]), A = t == null ? [] : [].concat(t), O = {};
  return A.indexOf("click") !== -1 && (O.onClick = de), A.indexOf("focus") !== -1 && (O.onFocus = G, O.onBlur = ie), A.indexOf("hover") !== -1 && (O.onMouseOver = H, O.onMouseOut = W), /* @__PURE__ */ y.createElement(y.Fragment, null, typeof r == "function" ? r(V({}, O, {
    ref: E
  })) : /* @__PURE__ */ y.createElement(vk, {
    ref: E
  }, /* @__PURE__ */ C.cloneElement(r, O)), /* @__PURE__ */ y.createElement(Av, V({}, x, {
    show: g,
    onHide: j,
    flip: v,
    placement: p,
    popperConfig: s,
    target: R
  }), n));
}
bv.defaultProps = yk;
const Pv = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], Ek = ["hover", "click", "focus"];
function Mc(e) {
  return /* @__PURE__ */ y.createElement(bv, {
    ...e
  }, e.children);
}
const Xd = d.oneOf(Ek);
d.node.isRequired, d.oneOfType([d.elementType, d.func]), d.func, d.func, d.func, d.func, d.func, d.func, d.func, d.oneOf(Pv), d.shape({}), d.bool, d.oneOf(["click", "mousedown"]), d.bool, d.oneOfType([d.elementType, d.func]), d.oneOfType([d.object, d.bool]);
Mc.propTypes = {
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
  placement: d.oneOf(Pv),
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
  trigger: d.oneOfType([Xd, d.arrayOf(Xd)])
};
Mc.defaultProps = {
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
var Qd = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    return function(s, a, o, l, u) {
      var c = o || "<<anonymous>>", p = u || a;
      if (s[a] == null)
        return new Error("The " + l + " `" + p + "` is required to make " + ("`" + c + "` accessible for users of assistive ") + "technologies such as screen readers.");
      for (var f = arguments.length, v = Array(f > 5 ? f - 5 : 0), x = 5; x < f; x++)
        v[x - 5] = arguments[x];
      return r.apply(void 0, [s, a, o, l, u].concat(v));
    };
  }
  e.exports = t.default;
})(Qd, Qd.exports);
var xk = ["bsPrefix", "placement", "className", "style", "children", "arrowProps", "popper", "show"], wk = {
  placement: "right"
}, no = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.placement, i = e.className, s = e.style, a = e.children, o = e.arrowProps;
  e.popper, e.show;
  var l = ne(e, xk);
  n = Ee(n, "tooltip");
  var u = (r == null ? void 0 : r.split("-")) || [], c = u[0];
  return /* @__PURE__ */ y.createElement("div", V({
    ref: t,
    style: s,
    role: "tooltip",
    "x-placement": c,
    className: $(i, n, "bs-tooltip-" + c)
  }, l), /* @__PURE__ */ y.createElement("div", V({
    className: "arrow"
  }, o)), /* @__PURE__ */ y.createElement("div", {
    className: n + "-inner"
  }, a));
});
no.defaultProps = wk;
no.displayName = "Tooltip";
const kk = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], ga = /* @__PURE__ */ y.forwardRef(({
  children: e,
  variant: t,
  ...n
}, r) => /* @__PURE__ */ y.createElement(no, {
  ...n,
  className: $({
    "tooltip-light": t === "light"
  }, n.className),
  ref: r
}, e));
ga.propTypes = {
  ...no.propTypes,
  /** An html id attribute, necessary for accessibility. */
  id: d.string.isRequired,
  /**
   * Sets the direction the `Tooltip` is positioned towards.
   *
   * This is generally provided by the `Overlay` component positioning the tooltip.
   */
  placement: d.oneOf(kk),
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
ga.defaultProps = {
  ...ga.defaultProps,
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
const Dc = /* @__PURE__ */ y.forwardRef(({
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
  iconAs: u = _n,
  isActive: c = !1,
  children: p,
  // unused, just here because we don't want it to be part of 'attrs'
  ...f
}, v) => {
  const x = n ? "inverse-" : "", E = c ? `${l}-` : "", k = u;
  return /* @__PURE__ */ y.createElement("button", {
    "aria-label": t,
    className: $("btn-icon", `btn-icon-${x}${l}`, `btn-icon-${o}`, {
      [`btn-icon-${x}${E}active`]: c
    }, e),
    onClick: a,
    type: "button",
    ref: v,
    ...f
  }, /* @__PURE__ */ y.createElement("span", {
    className: "btn-icon__icon-container"
  }, k && /* @__PURE__ */ y.createElement(k, {
    className: $("btn-icon__icon", s),
    icon: r,
    src: i
  })));
});
function Ck({
  tooltipPlacement: e = "top",
  tooltipContent: t,
  ...n
}) {
  const r = n.invertColors ? "inverse-" : "";
  return /* @__PURE__ */ y.createElement(Mc, {
    placement: e,
    overlay: /* @__PURE__ */ y.createElement(ga, {
      id: `iconbutton-tooltip-${e}`,
      variant: r ? "light" : void 0
    }, t)
  }, /* @__PURE__ */ y.createElement(Dc, {
    ...n
  }));
}
Dc.IconButtonWithTooltip = Ck;
var Sk = ["bsPrefix", "variant", "animation", "size", "children", "as", "className"], Fv = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.animation, s = e.size, a = e.children, o = e.as, l = o === void 0 ? "div" : o, u = e.className, c = ne(e, Sk);
  n = Ee(n, "spinner");
  var p = n + "-" + i;
  return /* @__PURE__ */ y.createElement(l, V({
    ref: t
  }, c, {
    className: $(u, p, s && p + "-" + s, r && "text-" + r)
  }), a);
});
Fv.displayName = "Spinner";
const _k = /* @__PURE__ */ y.forwardRef(({
  className: e,
  screenReaderText: t,
  ...n
}, r) => {
  const i = {
    ...n,
    className: $("pgn__spinner", e),
    role: t ? "status" : void 0
  };
  return /* @__PURE__ */ y.createElement(Fv, {
    ...i,
    ref: r
  }, t && /* @__PURE__ */ y.createElement("span", {
    className: "sr-only"
  }, t));
});
function Tk({
  event: e,
  currentIndex: t,
  activeElement: n
}) {
  t !== -1 && (n.click(), e.preventDefault());
}
function Nk({
  event: e,
  currentIndex: t,
  availableElements: n
}) {
  t === -1 && n[0].focus();
  let r;
  (e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r == null || r.focus(), e.preventDefault();
}
function Ak({
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
  i === "Enter" && s && Tk({
    event: e,
    currentIndex: o,
    activeElement: s
  }), Nk({
    event: e,
    currentIndex: o,
    availableElements: a
  });
}
function Ik(e = {}) {
  const {
    selectors: t,
    ignoredKeys: n
  } = e, r = C.useRef();
  return C.useEffect(() => {
    const i = (s) => {
      Ak({
        event: s,
        ignoredKeys: n,
        parentNode: r.current,
        selectors: t
      });
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [n, t]), r;
}
const Kd = {
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
}, Lc = /* @__PURE__ */ C.forwardRef(({
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
  helpMessage: v,
  ...x
}, E) => {
  const k = Ga(), m = C.useRef(), h = Ik({
    selectors: t,
    ignoredKeys: n
  }), [g, w] = C.useState(!1), [S, _] = C.useState(!1), [T, N] = C.useState(!1), [b, R] = C.useState(!1), [B, j] = C.useState((i == null ? void 0 : i.userProvidedText) || ""), [G, ie] = C.useState([]), [de, H] = C.useState(null), [W, A] = C.useState(!0), [O, M] = C.useState(""), K = (ve) => {
    H(ve);
  }, U = () => {
    ie([]), w(!1), H(null);
  }, wt = (ve, Xe) => {
    const Le = ve.currentTarget.getAttribute("data-value"), xe = ve.currentTarget.id;
    N(!0), R(!0), j(Le), f && (!i || i && Le !== i.selectionValue) && f({
      userProvidedText: Le,
      selectionValue: Le,
      selectionId: xe
    }), U(), Xe && Xe(ve);
  };
  function Se(ve = "") {
    let Xe = y.Children.map(e, (Le) => {
      const {
        children: xe,
        onClick: rn,
        ...ns
      } = Le.props, Kr = Le.props.id ?? g1();
      return /* @__PURE__ */ y.cloneElement(Le, {
        ...ns,
        children: xe,
        "data-value": xe,
        onClick: (qr) => wt(qr, rn),
        id: Kr,
        onFocus: () => K(Kr)
      });
    });
    return ve.length > 0 && (Xe = Xe.filter((Le) => Le.props.children.toLowerCase().includes(ve.toLowerCase()))), Xe;
  }
  const Me = () => {
    ie(Se(B)), A(!0), M(""), w(!0);
  }, De = () => {
    g ? U() : Me();
  }, kt = /* @__PURE__ */ y.createElement(Dc, {
    className: "pgn__form-autosuggest__icon-button",
    "data-testid": "autosuggest-iconbutton",
    tabIndex: "-1",
    src: g ? n1 : t1,
    iconAs: _n,
    size: "sm",
    variant: "secondary",
    alt: g ? k.formatMessage(Kd.iconButtonClosed) : k.formatMessage(Kd.iconButtonOpened),
    onClick: De
  }), $t = () => {
    _(!0);
  }, ir = () => {
    if (c) {
      A(!1), M(p);
      return;
    }
    if (a && !T) {
      A(!1), M(o);
      return;
    }
    if (T && l && !b) {
      A(!1), M(u);
      return;
    }
    A(!0), M("");
  };
  C.useImperativeHandle(E, () => ({
    // expose updateErrorStateAndErrorMessage so consumers can trigger validation
    // when changing the value of the control externally
    updateErrorStateAndErrorMessage: ir
  }));
  const Ji = () => {
    _(!1), U(), ir();
  }, sr = (ve) => {
    if (S) {
      if (ve.key === "Escape") {
        ve.preventDefault(), m && m.current.focus(), U();
        return;
      }
      ve.key === "Tab" && Ji();
    }
  }, es = (ve) => {
    h.current && !h.current.contains(ve.target) && S && Ji();
  };
  C.useEffect(() => (document.addEventListener("keydown", sr), document.addEventListener("click", es, !0), () => {
    document.removeEventListener("click", es, !0), document.removeEventListener("keydown", sr);
  })), C.useEffect(() => {
    j(i ? i.userProvidedText ?? "" : ""), N(!!i && !!i.userProvidedText), R(!!i && !!i.selectionValue);
  }, [i]);
  const ts = () => {
    Me();
  }, ao = (ve) => {
    const Xe = ve.target.value;
    if (!Xe.length) {
      j(""), N(!1), R(!1), ie([]), U(), f && f({
        userProvidedText: "",
        selectionValue: "",
        selectionId: ""
      });
      return;
    }
    N(!0);
    const Le = Se(Xe);
    ie(Le);
    const xe = Le.find((rn) => rn.props.children.toLowerCase() === Xe.toLowerCase());
    if (!xe) {
      R(!1), j(Xe), f && f({
        userProvidedText: Xe,
        selectionValue: "",
        selectionId: ""
      });
      return;
    }
    R(!0), j(xe.props.children), f && f({
      userProvidedText: xe.props.children,
      selectionValue: xe.props.children,
      selectionId: xe.props.id
    });
  }, {
    getControlProps: oo
  } = xt(), ar = oo(x);
  return /* @__PURE__ */ y.createElement("div", {
    className: "pgn__form-autosuggest__wrapper",
    ref: h,
    onFocus: $t
  }, /* @__PURE__ */ y.createElement("div", {
    "aria-live": "assertive",
    className: "sr-only",
    "data-testid": "autosuggest-screen-reader-options-count"
  }, `${G.length} options found`), /* @__PURE__ */ y.createElement(Za, {
    controlId: ar.id,
    isInvalid: !W
  }, /* @__PURE__ */ y.createElement(Xr, {
    ref: m,
    "aria-expanded": (G.length > 0).toString(),
    "aria-owns": "pgn__form-autosuggest__dropdown-box",
    role: "combobox",
    "aria-autocomplete": "list",
    autoComplete: "off",
    value: B,
    "aria-invalid": O,
    "aria-activedescendant": de,
    onChange: ao,
    onClick: ts,
    trailingElement: kt,
    "data-testid": "autosuggest-textbox-input",
    ...ar
  }), v && W && /* @__PURE__ */ y.createElement(Tn, {
    type: "default"
  }, v), !W && /* @__PURE__ */ y.createElement(Tn, {
    type: "invalid",
    "feedback-for": ar.name
  }, O)), /* @__PURE__ */ y.createElement("ul", {
    id: "pgn__form-autosuggest__dropdown-box",
    className: "pgn__form-autosuggest__dropdown",
    role: "listbox"
  }, s ? /* @__PURE__ */ y.createElement("div", {
    className: "pgn__form-autosuggest__dropdown-loading"
  }, /* @__PURE__ */ y.createElement(_k, {
    animation: "border",
    variant: "dark",
    screenReaderText: r,
    "data-testid": "autosuggest-loading-spinner"
  })) : G.length > 0 && G));
});
Lc.defaultProps = {
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
Lc.propTypes = {
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
  valueRequiredErrorMessageText: Uo(d.string, "isValueRequired"),
  /** Specifies if freeform values trigger an error state */
  isSelectionRequired: d.bool,
  /** Informs user they must make a selection. */
  selectionRequiredErrorMessageText: Uo(d.string, "isSelectionRequired"),
  /** Specifies the control is in a consumer provided error state */
  hasCustomError: d.bool,
  /** Informs user of other errors. */
  customErrorMessageText: Uo(d.string, "hasCustomError"),
  /** Specifies the name of the base input element. */
  name: d.string,
  /** Selected list item is read-only. */
  readOnly: d.bool,
  /** Specifies the content of the `FormAutosuggest`. */
  children: d.node,
  /** Specifies the screen reader text */
  screenReaderText: d.string
};
function Bc({
  as: e,
  children: t,
  defaultSelected: n,
  iconAfter: r,
  iconBefore: i,
  ...s
}) {
  const a = $(s.className, "pgn__menu-item");
  return /* @__PURE__ */ y.createElement(e, {
    ...s,
    className: a
  }, /* @__PURE__ */ y.createElement(y.Fragment, null, i && /* @__PURE__ */ y.createElement(_n, {
    className: "btn-icon-before",
    src: i
  }), /* @__PURE__ */ y.createElement("span", {
    className: "pgn__menu-item-text"
  }, t), /* @__PURE__ */ y.createElement("span", {
    className: "pgn__menu-item-content-spacer"
  }), r && /* @__PURE__ */ y.createElement(_n, {
    className: "btn-icon-after",
    src: r
  })));
}
Bc.propTypes = {
  /** Specifies that this ``MenuItem`` is selected inside the ``SelectMenu`` */
  defaultSelected: d.bool,
  /** Specifies class name to append to the base element */
  className: d.string,
  /** Specifies the content of the ``MenuItem`` */
  children: d.node,
  /** Specifies the base element */
  as: d.elementType,
  /** Specifies the jsx before the content of the ``MenuItem`` */
  iconBefore: d.oneOfType([d.element, d.elementType]),
  /** Specifies the jsx after the content of the ``MenuItem`` */
  iconAfter: d.oneOfType([d.element, d.elementType])
};
Bc.defaultProps = {
  defaultSelected: !1,
  as: "button",
  className: void 0,
  children: null,
  iconBefore: void 0,
  iconAfter: void 0
};
function Vc({
  children: e,
  className: t,
  onClick: n,
  ...r
}) {
  return /* @__PURE__ */ y.createElement(Bc, {
    as: "li",
    "data-testid": "autosuggest-optionitem",
    role: "option",
    tabIndex: "-1",
    onClick: n,
    className: $(t, "dropdown-item"),
    ...r
  }, e);
}
Vc.defaultProps = {
  className: null,
  children: null,
  onClick: null
};
Vc.propTypes = {
  /** Specifies class name to append to the base element. */
  className: d.string,
  /** Specifies the text-content of the `FormAutosuggestOption`. */
  children: d.string,
  /** A click handler for the `FormAutosuggestOption` */
  onClick: d.func
};
const Rk = (e) => e, Ov = /* @__PURE__ */ y.createContext({
  getCheckboxControlProps: Rk,
  hasCheckboxSetProvider: !1
}), Mv = () => C.useContext(Ov);
function Hc({
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
      onBlur: c.onBlur ? zn(n, c.onBlur) : n,
      /* istanbul ignore next */
      onFocus: c.onFocus ? zn(r, c.onFocus) : r,
      /* istanbul ignore next */
      onChange: c.onChange ? zn(i, c.onChange) : i,
      checked: o ? s.includes(c.value) : void 0,
      defaultChecked: o ? void 0 : a && a.includes(c.value)
    }),
    onBlur: n,
    onFocus: r,
    onChange: i,
    hasCheckboxSetProvider: !0
  };
  return /* @__PURE__ */ y.createElement(Ov.Provider, {
    value: u
  }, e);
}
Hc.propTypes = {
  children: d.node.isRequired,
  name: d.string,
  onBlur: d.func,
  onFocus: d.func,
  onChange: d.func,
  value: d.arrayOf(d.string),
  defaultValue: d.arrayOf(d.string)
};
Hc.defaultProps = {
  onBlur: void 0,
  name: void 0,
  onFocus: void 0,
  onChange: void 0,
  value: void 0,
  defaultValue: void 0
};
const Uc = /* @__PURE__ */ y.forwardRef(({
  isIndeterminate: e,
  ...t
}, n) => {
  const {
    getCheckboxControlProps: r,
    hasCheckboxSetProvider: i
  } = Mv(), s = y.useRef(), a = n || s, {
    getControlProps: o
  } = xt();
  let l = o({
    ...t,
    className: $("pgn__form-checkbox-input", t.className)
  });
  return i && (l = r(l)), y.useEffect(() => {
    a.current && (a.current.indeterminate = e);
  }, [a, e]), /* @__PURE__ */ y.createElement("input", {
    type: "checkbox",
    ...l,
    ref: a
  });
});
Uc.propTypes = {
  /** Specifies whether the checkbox should be rendered in indeterminate state. */
  isIndeterminate: d.bool,
  /** Specifies class name to append to the base element. */
  className: d.string
};
Uc.defaultProps = {
  isIndeterminate: !1,
  className: void 0
};
const ro = /* @__PURE__ */ y.forwardRef(({
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
  } = Mv(), {
    hasFormGroupProvider: f,
    useSetIsControlGroupEffect: v,
    getControlProps: x
  } = xt();
  v(!0);
  const k = f && !p ? {
    ...x({}),
    role: "group"
  } : {}, m = /* @__PURE__ */ y.createElement(o, {
    ...u,
    className: n,
    ref: c
  });
  return /* @__PURE__ */ y.createElement(Za, {
    controlId: u.id,
    isInvalid: s,
    isValid: a
  }, /* @__PURE__ */ y.createElement("div", {
    className: $("pgn__form-checkbox", t, {
      "pgn__form-control-valid": a,
      "pgn__form-control-invalid": s,
      "pgn__form-control-disabled": u.disabled,
      "pgn__form-control-label-left": !!l
    }),
    ...k
  }, m, /* @__PURE__ */ y.createElement("div", null, /* @__PURE__ */ y.createElement(xc, {
    className: r
  }, e), i && /* @__PURE__ */ y.createElement(Tn, {
    hasIcon: !1
  }, i))));
});
ro.propTypes = {
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
ro.defaultProps = {
  id: void 0,
  className: void 0,
  controlClassName: void 0,
  labelClassName: void 0,
  description: void 0,
  isInvalid: !1,
  isValid: !1,
  controlAs: Uc,
  floatLabelLeft: !1,
  disabled: !1
};
const $c = /* @__PURE__ */ y.forwardRef(({
  isIndeterminate: e,
  ...t
}, n) => {
  const r = y.useRef(), i = n || r, {
    getControlProps: s
  } = xt(), a = s({
    ...t,
    className: $("pgn__form-switch-input", t.className)
  });
  return y.useEffect(() => {
    i.current && (i.current.indeterminate = e);
  }, [i, e]), /* @__PURE__ */ y.createElement("input", {
    type: "checkbox",
    ...a,
    ref: i
  });
});
$c.propTypes = {
  /** Specifies whether input should be rendered in indeterminate state. */
  isIndeterminate: d.bool,
  /** Specifies class name to append to the base element. */
  className: d.string
};
$c.defaultProps = {
  isIndeterminate: !1,
  className: void 0
};
const jc = /* @__PURE__ */ y.forwardRef(({
  children: e,
  className: t,
  helperText: n,
  ...r
}, i) => /* @__PURE__ */ y.createElement("div", {
  className: "d-inline-flex flex-column"
}, /* @__PURE__ */ y.createElement(ro, {
  className: $("pgn__form-switch", t),
  ...r,
  role: "switch",
  ref: i,
  controlAs: $c,
  isValid: null,
  isInvalid: null,
  description: null
}, e), n && /* @__PURE__ */ y.createElement("div", {
  className: "pgn__form-switch-helper-text"
}, n)));
jc.propTypes = {
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
jc.defaultProps = {
  className: void 0,
  labelClassName: void 0,
  helperText: void 0,
  floatLabelLeft: !1
};
function io({
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
  } = xt();
  c(!0);
  const p = u(l);
  return /* @__PURE__ */ y.createElement(Hc, {
    name: t,
    value: n,
    defaultValue: r,
    onFocus: a,
    onBlur: o,
    onChange: s
  }, /* @__PURE__ */ y.createElement(eo, {
    role: "group",
    isInline: i,
    ...p
  }, e));
}
io.propTypes = {
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
io.defaultProps = {
  className: void 0,
  value: void 0,
  defaultValue: void 0,
  isInline: !1,
  onChange: void 0,
  onFocus: void 0,
  onBlur: void 0
};
const X = Pt;
X.Control = Xr;
X.Radio = Cc;
X.RadioSet = Sc;
X.Autosuggest = Lc;
X.AutosuggestOption = Vc;
X.Checkbox = ro;
X.CheckboxSet = io;
X.Switch = jc;
X.SwitchSet = io;
X.Label = xc;
X.Group = c1;
X.Text = Ja;
var bk = ["label", "onClick", "className"], Pk = {
  label: d.string.isRequired,
  onClick: d.func
}, Fk = {
  label: "Close"
}, so = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.label, r = e.onClick, i = e.className, s = ne(e, bk);
  return /* @__PURE__ */ y.createElement("button", V({
    ref: t,
    type: "button",
    className: $("close", i),
    onClick: r
  }, s), /* @__PURE__ */ y.createElement("span", {
    "aria-hidden": "true"
  }, "×"), /* @__PURE__ */ y.createElement("span", {
    className: "sr-only"
  }, n));
});
so.displayName = "CloseButton";
so.propTypes = Pk;
so.defaultProps = Fk;
const Dv = function(e) {
  return /* @__PURE__ */ y.forwardRef(function(t, n) {
    return /* @__PURE__ */ y.createElement("div", V({}, t, {
      ref: n,
      className: $(t.className, e)
    }));
  });
};
var Ok = ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"], Lv = Dv("h4");
Lv.displayName = "DivStyledAsH4";
var Mk = vc("alert-heading", {
  Component: Lv
}), Dk = vc("alert-link", {
  Component: lc
}), Lk = {
  show: !0,
  transition: Qr,
  closeLabel: "Close alert"
}, rr = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = hk(e, {
    show: "onClose"
  }), r = n.bsPrefix, i = n.show, s = n.closeLabel, a = n.className, o = n.children, l = n.variant, u = n.onClose, c = n.dismissible, p = n.transition, f = ne(n, Ok), v = Ee(r, "alert"), x = nu(function(m) {
    u && u(!1, m);
  }), E = p === !0 ? Qr : p, k = /* @__PURE__ */ y.createElement("div", V({
    role: "alert"
  }, E ? void 0 : f, {
    ref: t,
    className: $(a, v, l && v + "-" + l, c && v + "-dismissible")
  }), c && /* @__PURE__ */ y.createElement(so, {
    onClick: x,
    label: s
  }), o);
  return E ? /* @__PURE__ */ y.createElement(E, V({
    unmountOnExit: !0
  }, f, {
    ref: void 0,
    in: i
  }), k) : i ? k : null;
});
rr.displayName = "Alert";
rr.defaultProps = Lk;
rr.Link = Dk;
rr.Heading = Mk;
var zc = {};
zc.match = jk;
zc.parse = Bv;
var Bk = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, Vk = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, Hk = /^(?:(min|max)-)?(.+)/, Uk = /(em|rem|px|cm|mm|in|pt|pc)?$/, $k = /(dpi|dpcm|dppx)?$/;
function jk(e, t) {
  return Bv(e).some(function(n) {
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
          u = Zd(u), c = Zd(c);
          break;
        case "resolution":
          u = Yd(u), c = Yd(c);
          break;
        case "aspect-ratio":
        case "device-aspect-ratio":
        case /* Deprecated */
        "device-pixel-ratio":
          u = qd(u), c = qd(c);
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
function Bv(e) {
  return e.split(",").map(function(t) {
    t = t.trim();
    var n = t.match(Bk), r = n[1], i = n[2], s = n[3] || "", a = {};
    return a.inverse = !!r && r.toLowerCase() === "not", a.type = i ? i.toLowerCase() : "all", s = s.match(/\([^\)]+\)/g) || [], a.expressions = s.map(function(o) {
      var l = o.match(Vk), u = l[1].toLowerCase().match(Hk);
      return {
        modifier: u[1],
        feature: u[2],
        value: l[2]
      };
    }), a;
  });
}
function qd(e) {
  var t = Number(e), n;
  return t || (n = e.match(/^(\d+)\s*\/\s*(\d+)$/), t = n[1] / n[2]), t;
}
function Yd(e) {
  var t = parseFloat(e), n = String(e).match($k)[1];
  switch (n) {
    case "dpcm":
      return t / 2.54;
    case "dppx":
      return t * 96;
    default:
      return t;
  }
}
function Zd(e) {
  var t = parseFloat(e), n = String(e).match(Uk)[1];
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
var zk = zc.match, Jd = typeof window < "u" ? window.matchMedia : null;
function Gk(e, t, n) {
  var r = this, i;
  Jd && !n && (i = Jd.call(window, e)), i ? (this.matches = i.matches, this.media = i.media, i.addListener(o)) : (this.matches = zk(e, t), this.media = e), this.addListener = s, this.removeListener = a, this.dispose = l;
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
function Wk(e, t, n) {
  return new Gk(e, t, n);
}
var Xk = Wk;
const Qk = /* @__PURE__ */ jr(Xk);
var Kk = /[A-Z]/g, qk = /^ms-/, Wo = {};
function Yk(e) {
  return "-" + e.toLowerCase();
}
function Vv(e) {
  if (Wo.hasOwnProperty(e))
    return Wo[e];
  var t = e.replace(Kk, Yk);
  return Wo[e] = qk.test(t) ? "-" + t : t;
}
function Zk(e, t) {
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
const Ve = d.oneOfType([d.string, d.number]), Hv = {
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
}, Jk = {
  orientation: d.oneOf(["portrait", "landscape"]),
  scan: d.oneOf(["progressive", "interlace"]),
  aspectRatio: d.string,
  deviceAspectRatio: d.string,
  height: Ve,
  deviceHeight: Ve,
  width: Ve,
  deviceWidth: Ve,
  color: d.bool,
  colorIndex: d.bool,
  monochrome: d.bool,
  resolution: Ve,
  type: Object.keys(Hv)
}, { type: RC, ...eC } = Jk, tC = {
  minAspectRatio: d.string,
  maxAspectRatio: d.string,
  minDeviceAspectRatio: d.string,
  maxDeviceAspectRatio: d.string,
  minHeight: Ve,
  maxHeight: Ve,
  minDeviceHeight: Ve,
  maxDeviceHeight: Ve,
  minWidth: Ve,
  maxWidth: Ve,
  minDeviceWidth: Ve,
  maxDeviceWidth: Ve,
  minColor: d.number,
  maxColor: d.number,
  minColorIndex: d.number,
  maxColorIndex: d.number,
  minMonochrome: d.number,
  maxMonochrome: d.number,
  minResolution: Ve,
  maxResolution: Ve,
  ...eC
}, nC = { ...Hv, ...tC };
var rC = {
  all: nC
};
const iC = (e) => `not ${e}`, sC = (e, t) => {
  const n = Vv(e);
  return typeof t == "number" && (t = `${t}px`), t === !0 ? n : t === !1 ? iC(n) : `(${n}: ${t})`;
}, aC = (e) => e.join(" and "), oC = (e) => {
  const t = [];
  return Object.keys(rC.all).forEach((n) => {
    const r = e[n];
    r != null && t.push(sC(n, r));
  }), aC(t);
}, lC = C.createContext(void 0), uC = (e) => e.query || oC(e), ep = (e) => e ? Object.keys(e).reduce((n, r) => (n[Vv(r)] = e[r], n), {}) : void 0, Uv = () => {
  const e = C.useRef(!1);
  return C.useEffect(() => {
    e.current = !0;
  }, []), e.current;
}, cC = (e) => {
  const t = C.useContext(lC), n = () => ep(e) || ep(t), [r, i] = C.useState(n);
  return C.useEffect(() => {
    const s = n();
    Zk(r, s) || i(s);
  }, [e, t]), r;
}, fC = (e) => {
  const t = () => uC(e), [n, r] = C.useState(t);
  return C.useEffect(() => {
    const i = t();
    n !== i && r(i);
  }, [e]), n;
}, dC = (e, t) => {
  const n = () => Qk(e, t || {}, !!t), [r, i] = C.useState(n), s = Uv();
  return C.useEffect(() => {
    if (s) {
      const a = n();
      return i(a), () => {
        a && a.dispose();
      };
    }
  }, [e, t]), r;
}, pC = (e) => {
  const [t, n] = C.useState(e.matches);
  return C.useEffect(() => {
    const r = (i) => {
      n(i.matches);
    };
    return e.addListener(r), n(e.matches), () => {
      e.removeListener(r);
    };
  }, [e]), t;
}, hC = (e, t, n) => {
  const r = cC(t), i = fC(e);
  if (!i)
    throw new Error("Invalid or missing MediaQuery!");
  const s = dC(i, r), a = pC(s);
  return Uv(), C.useEffect(() => {
  }, [a]), C.useEffect(() => () => {
    s && s.dispose();
  }, []), a;
}, mC = "576px", vC = {
  sm: mC
}, {
  sm: gC
} = vC, yC = {
  extraSmall: {
    maxWidth: parseFloat(gC) || 575.98
  }
};
function au({
  as: e = "div",
  isStacked: t = !1,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ y.createElement(e, {
    ...r,
    className: $(r.className, {
      "pgn__action-row": !t,
      "pgn__action-row-stacked": t
    })
  }, n);
}
function EC() {
  return /* @__PURE__ */ y.createElement("span", {
    className: "pgn__action-row-spacer"
  });
}
au.Spacer = EC;
const Gc = /* @__PURE__ */ C.forwardRef(({
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
  const [c, p] = C.useState(a), f = hC({
    maxWidth: yC.extraSmall.maxWidth
  }), v = "sm";
  C.useEffect(() => {
    p(f ? !0 : a);
  }, [f, a]);
  const x = C.useCallback((E) => {
    const k = {
      size: v,
      key: E.props.children
    };
    return /* @__PURE__ */ C.cloneElement(E, k);
  }, []);
  return /* @__PURE__ */ y.createElement(rr, {
    ...l,
    className: $("alert-content", l.className),
    show: o,
    ref: u
  }, t && /* @__PURE__ */ y.createElement(_n, {
    src: t,
    className: "alert-icon"
  }), /* @__PURE__ */ y.createElement("div", {
    className: $({
      "pgn__alert-message-wrapper": !c,
      "pgn__alert-message-wrapper-stacked": c
    })
  }, /* @__PURE__ */ y.createElement("div", {
    className: "alert-message-content"
  }, e), (r || n && n.length > 0) && /* @__PURE__ */ y.createElement(au, {
    className: "pgn__alert-actions"
  }, /* @__PURE__ */ y.createElement(au.Spacer, null), r && /* @__PURE__ */ y.createElement(wn, {
    size: v,
    variant: "tertiary",
    onClick: i
  }, s || /* @__PURE__ */ y.createElement(Qm, {
    id: "pgn.Alert.closeLabel",
    defaultMessage: "Dismiss",
    description: "Label of a close button on Alert component"
  })), n && n.map(x))));
}), $v = Dv("h4");
$v.displayName = "DivStyledAsH4";
function xC({
  as: e = $v,
  bsPrefix: t = "alert-heading",
  ...n
}) {
  return /* @__PURE__ */ y.createElement(rr.Heading, {
    as: e,
    bsPrefix: t,
    ...n
  });
}
function wC({
  as: e = "a",
  bsPrefix: t = "alert-link",
  ...n
}) {
  return /* @__PURE__ */ y.createElement(rr.Link, {
    as: e,
    bsPrefix: t,
    ...n
  });
}
Gc.Heading = xC;
Gc.Link = wC;
function kC() {
  const e = "csrftoken", t = document.cookie.split(";");
  for (let r = 0; r < t.length; r++) {
    const i = t[r].trim();
    if (i.startsWith(e + "="))
      return i.substring(e.length + 1);
  }
  const n = document.querySelector('meta[name="csrf-token"]');
  return n ? n.getAttribute("content") || "" : (console.warn("CSRF token not found"), "");
}
async function CC(e, t, n = {}) {
  const r = e.handlerUrl(e.element, t);
  try {
    const i = await fetch(r, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": kC()
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
const SC = (e, t = 60) => e ? e.length <= t ? e : e.substring(0, t) + "..." : "", _C = ({
  pairs: e,
  questionText: t,
  randomizeItems: n,
  weight: r,
  maxAttempts: i,
  feedbackMode: s,
  isGraded: a,
  onQuestionTextChange: o,
  onRandomizeChange: l,
  onWeightChange: u,
  onMaxAttemptsChange: c,
  onFeedbackModeChange: p,
  onIsGradedChange: f,
  onAddPair: v,
  onEditPair: x,
  onDeletePair: E,
  onReorder: k
}) => {
  const [m, h] = C.useState(null), [g, w] = C.useState(null), S = (b) => {
    h(b);
  }, _ = (b, R) => {
    b.preventDefault(), w(R);
  }, T = (b, R) => {
    b.preventDefault(), m !== null && m !== R && k(m, R), h(null), w(null);
  }, N = () => {
    h(null), w(null);
  };
  return /* @__PURE__ */ P.jsxs("div", { className: "drag-drop-matching-list-view", children: [
    /* @__PURE__ */ P.jsxs(X.Group, { className: "mb-4", children: [
      /* @__PURE__ */ P.jsx(X.Label, { children: "Question Text" }),
      /* @__PURE__ */ P.jsx(
        X.Control,
        {
          as: "textarea",
          rows: 3,
          value: t,
          onChange: (b) => o(b.target.value),
          placeholder: "Enter the question or instructions for students"
        }
      )
    ] }),
    /* @__PURE__ */ P.jsxs("div", { className: "d-flex justify-content-between align-items-center mb-4", children: [
      /* @__PURE__ */ P.jsxs("h3", { children: [
        "Matching Pairs (",
        e.length,
        " / 20)"
      ] }),
      /* @__PURE__ */ P.jsx(
        wn,
        {
          variant: "primary",
          iconBefore: Kx,
          onClick: v,
          disabled: e.length >= 20,
          children: "Add New Pair"
        }
      )
    ] }),
    e.length === 0 && /* @__PURE__ */ P.jsx("div", { className: "text-center p-5 bg-light rounded mb-4", children: /* @__PURE__ */ P.jsx("p", { className: "mb-3", children: 'No matching pairs yet. Click "Add New Pair" to create your first pair.' }) }),
    /* @__PURE__ */ P.jsx("div", { className: "pair-list mb-5", children: e.map((b, R) => /* @__PURE__ */ P.jsxs(
      "div",
      {
        className: `pair-list-item ${m === R ? "dragging" : ""} ${g === R ? "drag-over" : ""}`,
        draggable: !0,
        onDragStart: () => S(R),
        onDragOver: (B) => _(B, R),
        onDrop: (B) => T(B, R),
        onDragEnd: N,
        children: [
          /* @__PURE__ */ P.jsx("div", { className: "pair-drag-handle", children: /* @__PURE__ */ P.jsx(e1, {}) }),
          /* @__PURE__ */ P.jsx("div", { className: "pair-content", children: /* @__PURE__ */ P.jsxs("div", { className: "pair-main", children: [
            /* @__PURE__ */ P.jsxs("span", { className: "pair-label", children: [
              "Pair ",
              R + 1,
              ":"
            ] }),
            /* @__PURE__ */ P.jsx("span", { className: "pair-term", children: b.term || "(No term)" }),
            /* @__PURE__ */ P.jsx("span", { className: "pair-arrow", children: "→" }),
            /* @__PURE__ */ P.jsx("span", { className: "pair-description", children: SC(b.description, 50) })
          ] }) }),
          /* @__PURE__ */ P.jsxs("div", { className: "pair-actions", children: [
            /* @__PURE__ */ P.jsx(
              wn,
              {
                variant: "link",
                onClick: () => x(R),
                size: "sm",
                children: "Edit"
              }
            ),
            /* @__PURE__ */ P.jsx(
              wn,
              {
                variant: "link",
                onClick: () => E(R),
                disabled: e.length === 1,
                size: "sm",
                className: "text-danger",
                children: "Delete"
              }
            )
          ] })
        ]
      },
      b.id
    )) }),
    /* @__PURE__ */ P.jsxs("div", { className: "settings-section", children: [
      /* @__PURE__ */ P.jsx("h4", { className: "mb-3", children: "Settings" }),
      /* @__PURE__ */ P.jsxs("div", { className: "row", children: [
        /* @__PURE__ */ P.jsx("div", { className: "col-md-3", children: /* @__PURE__ */ P.jsx(X.Group, { className: "mb-3", children: /* @__PURE__ */ P.jsx(
          X.Switch,
          {
            checked: n,
            onChange: (b) => l(b.target.checked),
            helperText: "Shuffle terms and descriptions for each student",
            children: "Randomize item order"
          }
        ) }) }),
        /* @__PURE__ */ P.jsx("div", { className: "col-md-3", children: /* @__PURE__ */ P.jsxs(X.Group, { className: "mb-3", children: [
          /* @__PURE__ */ P.jsx(X.Label, { children: "Feedback Mode" }),
          /* @__PURE__ */ P.jsxs(
            X.Control,
            {
              as: "select",
              value: s,
              onChange: (b) => p(b.target.value),
              children: [
                /* @__PURE__ */ P.jsx("option", { value: "immediate", children: "Immediate Feedback" }),
                /* @__PURE__ */ P.jsx("option", { value: "on_submit", children: "On Submit" })
              ]
            }
          ),
          /* @__PURE__ */ P.jsx(X.Text, { className: "text-muted", children: "When to show correctness" })
        ] }) }),
        /* @__PURE__ */ P.jsx("div", { className: "col-md-3", children: /* @__PURE__ */ P.jsxs(X.Group, { className: "mb-3", children: [
          /* @__PURE__ */ P.jsx(X.Label, { children: "Weight (Points)" }),
          /* @__PURE__ */ P.jsx(
            X.Control,
            {
              type: "number",
              step: "0.1",
              min: "0",
              value: r,
              onChange: (b) => u(Number(b.target.value))
            }
          ),
          /* @__PURE__ */ P.jsx(X.Text, { className: "text-muted", children: "Total points for this problem" })
        ] }) }),
        /* @__PURE__ */ P.jsx("div", { className: "col-md-3", children: /* @__PURE__ */ P.jsxs(X.Group, { className: "mb-3", children: [
          /* @__PURE__ */ P.jsx(X.Label, { children: "Max Attempts" }),
          /* @__PURE__ */ P.jsx(
            X.Control,
            {
              type: "number",
              min: "0",
              value: i,
              onChange: (b) => c(Number(b.target.value))
            }
          ),
          /* @__PURE__ */ P.jsx(X.Text, { className: "text-muted", children: "0 = unlimited attempts" })
        ] }) })
      ] })
    ] })
  ] });
}, TC = ({
  pair: e,
  pairIndex: t,
  totalPairs: n,
  onSave: r,
  onCancel: i
}) => {
  const [s, a] = C.useState(e.term), [o, l] = C.useState(e.description), [u, c] = C.useState({}), p = () => {
    const v = {};
    return s.trim() ? s.length > 100 && (v.term = "Term must be 100 characters or less") : v.term = "Term is required", o.trim() ? o.length > 200 && (v.description = "Description must be 200 characters or less") : v.description = "Description is required", c(v), Object.keys(v).length === 0;
  }, f = () => {
    p() && r({
      id: e.id,
      term: s.trim(),
      description: o.trim()
    });
  };
  return /* @__PURE__ */ P.jsxs("div", { className: "drag-drop-matching-edit-view", children: [
    /* @__PURE__ */ P.jsx("div", { className: "edit-header mb-4", children: /* @__PURE__ */ P.jsx("h3", { children: t === -1 ? "New Matching Pair" : `Editing Pair ${t + 1} of ${n}` }) }),
    /* @__PURE__ */ P.jsxs(X, { children: [
      /* @__PURE__ */ P.jsx("div", { className: "form-section mb-4", children: /* @__PURE__ */ P.jsxs(X.Group, { children: [
        /* @__PURE__ */ P.jsx(X.Label, { children: "Term *" }),
        /* @__PURE__ */ P.jsx(
          X.Control,
          {
            type: "text",
            value: s,
            onChange: (v) => a(v.target.value),
            placeholder: "Enter the term (e.g., Apply, Analyse, Evaluate)",
            isInvalid: !!u.term,
            maxLength: 100
          }
        ),
        u.term && /* @__PURE__ */ P.jsx("div", { className: "invalid-feedback d-block", children: u.term }),
        /* @__PURE__ */ P.jsxs(X.Text, { className: "text-muted", children: [
          s.length,
          " / 100 characters"
        ] })
      ] }) }),
      /* @__PURE__ */ P.jsx("div", { className: "form-section mb-5", children: /* @__PURE__ */ P.jsxs(X.Group, { children: [
        /* @__PURE__ */ P.jsx(X.Label, { children: "Description *" }),
        /* @__PURE__ */ P.jsx(
          X.Control,
          {
            as: "textarea",
            rows: 4,
            value: o,
            onChange: (v) => l(v.target.value),
            placeholder: "Enter the description that matches this term",
            isInvalid: !!u.description,
            maxLength: 200
          }
        ),
        u.description && /* @__PURE__ */ P.jsx("div", { className: "invalid-feedback d-block", children: u.description }),
        /* @__PURE__ */ P.jsxs(X.Text, { className: "text-muted", children: [
          o.length,
          " / 200 characters"
        ] })
      ] }) }),
      /* @__PURE__ */ P.jsxs("div", { className: "drag-drop-matching-sticky-actions d-flex justify-content-end", children: [
        /* @__PURE__ */ P.jsx(
          wn,
          {
            variant: "tertiary",
            onClick: i,
            className: "mr-2",
            children: "Back to List"
          }
        ),
        /* @__PURE__ */ P.jsx(
          wn,
          {
            variant: "primary",
            onClick: f,
            children: "Save Pair"
          }
        )
      ] })
    ] })
  ] });
}, NC = ({
  runtime: e,
  fields: t
}) => {
  const [n, r] = C.useState(t.display_name), [i, s] = C.useState(t.question_text), [a, o] = C.useState(t.matching_pairs), [l, u] = C.useState(t.randomize_items), [c, p] = C.useState(t.weight), [f, v] = C.useState(t.max_attempts), [x, E] = C.useState(t.show_feedback_mode), [k, m] = C.useState("list"), [h, g] = C.useState(-1), [w, S] = C.useState(!1), [_, T] = C.useState(null), N = () => {
    if (a.length >= 20) {
      T({ type: "error", text: "Maximum 20 pairs allowed" });
      return;
    }
    const H = [
      ...a,
      {
        id: `pair${Date.now()}`,
        term: "",
        description: ""
      }
    ];
    o(H), g(H.length - 1), m("edit");
  }, b = (H) => {
    g(H), m("edit");
  }, R = (H) => {
    if (a.length === 1) {
      T({ type: "error", text: "At least one matching pair is required" });
      return;
    }
    confirm(`Are you sure you want to delete Pair ${H + 1}?`) && (o(a.filter((W, A) => A !== H)), T({ type: "success", text: "Pair deleted" }));
  }, B = (H, W) => {
    const A = [...a], [O] = A.splice(H, 1);
    A.splice(W, 0, O), o(A);
  }, j = (H) => {
    const W = [...a];
    W[h] = H, o(W), m("list"), g(-1), T({ type: "success", text: "Pair saved" });
  }, G = () => {
    const H = a[h];
    h !== -1 && !H.term && !H.description && o(a.filter((W, A) => A !== h)), m("list"), g(-1);
  }, ie = async () => {
    S(!0), T(null);
    try {
      if (!n.trim()) {
        T({ type: "error", text: "Display name is required" }), S(!1);
        return;
      }
      if (!i.trim()) {
        T({ type: "error", text: "Question text is required" }), S(!1);
        return;
      }
      for (let W = 0; W < a.length; W++) {
        const A = a[W];
        if (!A.term.trim()) {
          T({ type: "error", text: `Pair ${W + 1}: Term is required` }), S(!1);
          return;
        }
        if (!A.description.trim()) {
          T({ type: "error", text: `Pair ${W + 1}: Description is required` }), S(!1);
          return;
        }
      }
      e.notify && e.notify("save", { state: "start" });
      const H = await CC(e, "save_data", {
        display_name: n,
        question_text: i,
        matching_pairs: a,
        randomize_items: l,
        explanation: "",
        // Removed explanation field
        weight: c,
        max_attempts: f,
        show_feedback_mode: x
      });
      H.success ? (T({ type: "success", text: "Changes saved successfully!" }), e.notify && e.notify("save", { state: "end" })) : (T({ type: "error", text: H.error || "Failed to save changes." }), e.notify && e.notify("save", { state: "end" }));
    } catch (H) {
      console.error("Save error:", H), T({ type: "error", text: "An error occurred while saving." }), e.notify && e.notify("save", { state: "end" });
    } finally {
      S(!1);
    }
  }, de = () => {
    e.notify && e.notify("cancel", {});
  };
  return /* @__PURE__ */ P.jsxs("div", { className: "drag-drop-matching-studio-view", children: [
    _ && /* @__PURE__ */ P.jsx(
      Gc,
      {
        variant: _.type === "success" ? "success" : "danger",
        dismissible: !0,
        onClose: () => T(null),
        children: _.text
      }
    ),
    /* @__PURE__ */ P.jsxs(X, { children: [
      /* @__PURE__ */ P.jsxs(X.Group, { className: "mb-4", children: [
        /* @__PURE__ */ P.jsx(X.Label, { children: "Display Name" }),
        /* @__PURE__ */ P.jsx(
          X.Control,
          {
            type: "text",
            value: n,
            onChange: (H) => r(H.target.value),
            placeholder: "Enter display name"
          }
        )
      ] }),
      k === "list" ? /* @__PURE__ */ P.jsx(
        _C,
        {
          pairs: a,
          questionText: i,
          randomizeItems: l,
          weight: c,
          maxAttempts: f,
          feedbackMode: x,
          onQuestionTextChange: s,
          onRandomizeChange: u,
          onWeightChange: p,
          onMaxAttemptsChange: v,
          onFeedbackModeChange: E,
          onAddPair: N,
          onEditPair: b,
          onDeletePair: R,
          onReorder: B
        }
      ) : /* @__PURE__ */ P.jsx(
        TC,
        {
          pair: a[h],
          pairIndex: h,
          totalPairs: a.length,
          onSave: j,
          onCancel: G
        }
      ),
      k === "list" && /* @__PURE__ */ P.jsxs("div", { className: "drag-drop-matching-sticky-actions d-flex justify-content-end border-top pt-3", children: [
        /* @__PURE__ */ P.jsx(
          wn,
          {
            variant: "tertiary",
            onClick: de,
            disabled: w,
            className: "mr-2",
            children: "Close Without Saving"
          }
        ),
        /* @__PURE__ */ P.jsx(
          wn,
          {
            variant: "primary",
            onClick: ie,
            disabled: w,
            children: w ? "Saving..." : "Save All Changes"
          }
        )
      ] })
    ] })
  ] });
}, bC = (e, t, n) => {
  e.element = t, hm(t).render(
    /* @__PURE__ */ P.jsx(C.StrictMode, { children: /* @__PURE__ */ P.jsx(jE, { locale: "en", children: /* @__PURE__ */ P.jsx(
      NC,
      {
        runtime: e,
        fields: n.fields
      }
    ) }) })
  );
};
export {
  bC as renderBlock
};
//# sourceMappingURL=studio-ui.js.map
