var qd = Object.defineProperty;
var ep = (e, t, n) => t in e ? qd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var zn = (e, t, n) => ep(e, typeof t != "symbol" ? t + "" : t, n);
function Qi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bs = { exports: {} }, bi = {}, Zs = { exports: {} }, A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kr = Symbol.for("react.element"), tp = Symbol.for("react.portal"), np = Symbol.for("react.fragment"), rp = Symbol.for("react.strict_mode"), ip = Symbol.for("react.profiler"), lp = Symbol.for("react.provider"), op = Symbol.for("react.context"), up = Symbol.for("react.forward_ref"), ap = Symbol.for("react.suspense"), sp = Symbol.for("react.memo"), fp = Symbol.for("react.lazy"), Sa = Symbol.iterator;
function cp(e) {
  return e === null || typeof e != "object" ? null : (e = Sa && e[Sa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ys = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Ks = Object.assign, Js = {};
function Dn(e, t, n) {
  this.props = e, this.context = t, this.refs = Js, this.updater = n || Ys;
}
Dn.prototype.isReactComponent = {};
Dn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Dn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qs() {
}
qs.prototype = Dn.prototype;
function fu(e, t, n) {
  this.props = e, this.context = t, this.refs = Js, this.updater = n || Ys;
}
var cu = fu.prototype = new qs();
cu.constructor = fu;
Ks(cu, Dn.prototype);
cu.isPureReactComponent = !0;
var wa = Array.isArray, ef = Object.prototype.hasOwnProperty, du = { current: null }, tf = { key: !0, ref: !0, __self: !0, __source: !0 };
function nf(e, t, n) {
  var r, i = {}, l = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (l = "" + t.key), t) ef.call(t, r) && !tf.hasOwnProperty(r) && (i[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) i.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    i.children = a;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) i[r] === void 0 && (i[r] = u[r]);
  return { $$typeof: kr, type: e, key: l, ref: o, props: i, _owner: du.current };
}
function dp(e, t) {
  return { $$typeof: kr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function pu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === kr;
}
function pp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ca = /\/+/g;
function Nl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? pp("" + e.key) : t.toString(36);
}
function oi(e, t, n, r, i) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else switch (l) {
    case "string":
    case "number":
      o = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case kr:
        case tp:
          o = !0;
      }
  }
  if (o) return o = e, i = i(o), e = r === "" ? "." + Nl(o, 0) : r, wa(i) ? (n = "", e != null && (n = e.replace(Ca, "$&/") + "/"), oi(i, t, n, "", function(s) {
    return s;
  })) : i != null && (pu(i) && (i = dp(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Ca, "$&/") + "/") + e)), t.push(i)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", wa(e)) for (var u = 0; u < e.length; u++) {
    l = e[u];
    var a = r + Nl(l, u);
    o += oi(l, t, n, a, i);
  }
  else if (a = cp(e), typeof a == "function") for (e = a.call(e), u = 0; !(l = e.next()).done; ) l = l.value, a = r + Nl(l, u++), o += oi(l, t, n, a, i);
  else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Ur(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return oi(e, r, "", "", function(l) {
    return t.call(n, l, i++);
  }), r;
}
function hp(e) {
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
var xe = { current: null }, ui = { transition: null }, mp = { ReactCurrentDispatcher: xe, ReactCurrentBatchConfig: ui, ReactCurrentOwner: du };
function rf() {
  throw Error("act(...) is not supported in production builds of React.");
}
A.Children = { map: Ur, forEach: function(e, t, n) {
  Ur(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Ur(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Ur(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!pu(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
A.Component = Dn;
A.Fragment = np;
A.Profiler = ip;
A.PureComponent = fu;
A.StrictMode = rp;
A.Suspense = ap;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mp;
A.act = rf;
A.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Ks({}, e.props), i = e.key, l = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (l = t.ref, o = du.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (a in t) ef.call(t, a) && !tf.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: kr, type: e.type, key: i, ref: l, props: r, _owner: o };
};
A.createContext = function(e) {
  return e = { $$typeof: op, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: lp, _context: e }, e.Consumer = e;
};
A.createElement = nf;
A.createFactory = function(e) {
  var t = nf.bind(null, e);
  return t.type = e, t;
};
A.createRef = function() {
  return { current: null };
};
A.forwardRef = function(e) {
  return { $$typeof: up, render: e };
};
A.isValidElement = pu;
A.lazy = function(e) {
  return { $$typeof: fp, _payload: { _status: -1, _result: e }, _init: hp };
};
A.memo = function(e, t) {
  return { $$typeof: sp, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function(e) {
  var t = ui.transition;
  ui.transition = {};
  try {
    e();
  } finally {
    ui.transition = t;
  }
};
A.unstable_act = rf;
A.useCallback = function(e, t) {
  return xe.current.useCallback(e, t);
};
A.useContext = function(e) {
  return xe.current.useContext(e);
};
A.useDebugValue = function() {
};
A.useDeferredValue = function(e) {
  return xe.current.useDeferredValue(e);
};
A.useEffect = function(e, t) {
  return xe.current.useEffect(e, t);
};
A.useId = function() {
  return xe.current.useId();
};
A.useImperativeHandle = function(e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
A.useInsertionEffect = function(e, t) {
  return xe.current.useInsertionEffect(e, t);
};
A.useLayoutEffect = function(e, t) {
  return xe.current.useLayoutEffect(e, t);
};
A.useMemo = function(e, t) {
  return xe.current.useMemo(e, t);
};
A.useReducer = function(e, t, n) {
  return xe.current.useReducer(e, t, n);
};
A.useRef = function(e) {
  return xe.current.useRef(e);
};
A.useState = function(e) {
  return xe.current.useState(e);
};
A.useSyncExternalStore = function(e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
A.useTransition = function() {
  return xe.current.useTransition();
};
A.version = "18.3.1";
Zs.exports = A;
var R = Zs.exports;
const O = /* @__PURE__ */ Qi(R);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vp = R, gp = Symbol.for("react.element"), yp = Symbol.for("react.fragment"), Ep = Object.prototype.hasOwnProperty, xp = vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Sp = { key: !0, ref: !0, __self: !0, __source: !0 };
function lf(e, t, n) {
  var r, i = {}, l = null, o = null;
  n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Ep.call(t, r) && !Sp.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: gp, type: e, key: l, ref: o, props: i, _owner: xp.current };
}
bi.Fragment = yp;
bi.jsx = lf;
bi.jsxs = lf;
bs.exports = bi;
var Ge = bs.exports, of = { exports: {} }, Le = {}, uf = { exports: {} }, af = {};
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
  function t(C, L) {
    var M = C.length;
    C.push(L);
    e: for (; 0 < M; ) {
      var K = M - 1 >>> 1, ne = C[K];
      if (0 < i(ne, L)) C[K] = L, C[M] = ne, M = K;
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var L = C[0], M = C.pop();
    if (M !== L) {
      C[0] = M;
      e: for (var K = 0, ne = C.length, Fr = ne >>> 1; K < Fr; ) {
        var Ft = 2 * (K + 1) - 1, _l = C[Ft], Bt = Ft + 1, Br = C[Bt];
        if (0 > i(_l, M)) Bt < ne && 0 > i(Br, _l) ? (C[K] = Br, C[Bt] = M, K = Bt) : (C[K] = _l, C[Ft] = M, K = Ft);
        else if (Bt < ne && 0 > i(Br, M)) C[K] = Br, C[Bt] = M, K = Bt;
        else break e;
      }
    }
    return L;
  }
  function i(C, L) {
    var M = C.sortIndex - L.sortIndex;
    return M !== 0 ? M : C.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function() {
      return l.now();
    };
  } else {
    var o = Date, u = o.now();
    e.unstable_now = function() {
      return o.now() - u;
    };
  }
  var a = [], s = [], f = 1, h = null, p = 3, y = !1, g = !1, x = !1, I = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(C) {
    for (var L = n(s); L !== null; ) {
      if (L.callback === null) r(s);
      else if (L.startTime <= C) r(s), L.sortIndex = L.expirationTime, t(a, L);
      else break;
      L = n(s);
    }
  }
  function v(C) {
    if (x = !1, m(C), !g) if (n(a) !== null) g = !0, Cl(S);
    else {
      var L = n(s);
      L !== null && Tl(v, L.startTime - C);
    }
  }
  function S(C, L) {
    g = !1, x && (x = !1, d(k), k = -1), y = !0;
    var M = p;
    try {
      for (m(L), h = n(a); h !== null && (!(h.expirationTime > L) || C && !$e()); ) {
        var K = h.callback;
        if (typeof K == "function") {
          h.callback = null, p = h.priorityLevel;
          var ne = K(h.expirationTime <= L);
          L = e.unstable_now(), typeof ne == "function" ? h.callback = ne : h === n(a) && r(a), m(L);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var Fr = !0;
      else {
        var Ft = n(s);
        Ft !== null && Tl(v, Ft.startTime - L), Fr = !1;
      }
      return Fr;
    } finally {
      h = null, p = M, y = !1;
    }
  }
  var T = !1, P = null, k = -1, Y = 5, D = -1;
  function $e() {
    return !(e.unstable_now() - D < Y);
  }
  function Bn() {
    if (P !== null) {
      var C = e.unstable_now();
      D = C;
      var L = !0;
      try {
        L = P(!0, C);
      } finally {
        L ? Un() : (T = !1, P = null);
      }
    } else T = !1;
  }
  var Un;
  if (typeof c == "function") Un = function() {
    c(Bn);
  };
  else if (typeof MessageChannel < "u") {
    var xa = new MessageChannel(), Jd = xa.port2;
    xa.port1.onmessage = Bn, Un = function() {
      Jd.postMessage(null);
    };
  } else Un = function() {
    I(Bn, 0);
  };
  function Cl(C) {
    P = C, T || (T = !0, Un());
  }
  function Tl(C, L) {
    k = I(function() {
      C(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    g || y || (g = !0, Cl(S));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Y = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(C) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = p;
    }
    var M = p;
    p = L;
    try {
      return C();
    } finally {
      p = M;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, L) {
    switch (C) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        C = 3;
    }
    var M = p;
    p = C;
    try {
      return L();
    } finally {
      p = M;
    }
  }, e.unstable_scheduleCallback = function(C, L, M) {
    var K = e.unstable_now();
    switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? K + M : K) : M = K, C) {
      case 1:
        var ne = -1;
        break;
      case 2:
        ne = 250;
        break;
      case 5:
        ne = 1073741823;
        break;
      case 4:
        ne = 1e4;
        break;
      default:
        ne = 5e3;
    }
    return ne = M + ne, C = { id: f++, callback: L, priorityLevel: C, startTime: M, expirationTime: ne, sortIndex: -1 }, M > K ? (C.sortIndex = M, t(s, C), n(a) === null && C === n(s) && (x ? (d(k), k = -1) : x = !0, Tl(v, M - K))) : (C.sortIndex = ne, t(a, C), g || y || (g = !0, Cl(S))), C;
  }, e.unstable_shouldYield = $e, e.unstable_wrapCallback = function(C) {
    var L = p;
    return function() {
      var M = p;
      p = L;
      try {
        return C.apply(this, arguments);
      } finally {
        p = M;
      }
    };
  };
})(af);
uf.exports = af;
var wp = uf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cp = R, Ie = wp;
function E(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var sf = /* @__PURE__ */ new Set(), cr = {};
function tn(e, t) {
  Nn(e, t), Nn(e + "Capture", t);
}
function Nn(e, t) {
  for (cr[e] = t, e = 0; e < t.length; e++) sf.add(t[e]);
}
var st = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), io = Object.prototype.hasOwnProperty, Tp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ta = {}, _a = {};
function _p(e) {
  return io.call(_a, e) ? !0 : io.call(Ta, e) ? !1 : Tp.test(e) ? _a[e] = !0 : (Ta[e] = !0, !1);
}
function Np(e, t, n, r) {
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
function Pp(e, t, n, r) {
  if (t === null || typeof t > "u" || Np(e, t, n, r)) return !0;
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
function Se(e, t, n, r, i, l, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = o;
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ae[e] = new Se(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ae[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ae[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ae[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ae[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ae[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ae[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ae[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ae[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var hu = /[\-:]([a-z])/g;
function mu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    hu,
    mu
  );
  ae[t] = new Se(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(hu, mu);
  ae[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(hu, mu);
  ae[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ae[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ae.xlinkHref = new Se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ae[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function vu(e, t, n, r) {
  var i = ae.hasOwnProperty(t) ? ae[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Pp(t, n, i, r) && (n = null), r || i === null ? _p(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var pt = Cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, zr = Symbol.for("react.element"), an = Symbol.for("react.portal"), sn = Symbol.for("react.fragment"), gu = Symbol.for("react.strict_mode"), lo = Symbol.for("react.profiler"), ff = Symbol.for("react.provider"), cf = Symbol.for("react.context"), yu = Symbol.for("react.forward_ref"), oo = Symbol.for("react.suspense"), uo = Symbol.for("react.suspense_list"), Eu = Symbol.for("react.memo"), mt = Symbol.for("react.lazy"), df = Symbol.for("react.offscreen"), Na = Symbol.iterator;
function jn(e) {
  return e === null || typeof e != "object" ? null : (e = Na && e[Na] || e["@@iterator"], typeof e == "function" ? e : null);
}
var b = Object.assign, Pl;
function Yn(e) {
  if (Pl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Pl = t && t[1] || "";
  }
  return `
` + Pl + e;
}
var kl = !1;
function Ol(e, t) {
  if (!e || kl) return "";
  kl = !0;
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
`), l = r.stack.split(`
`), o = i.length - 1, u = l.length - 1; 1 <= o && 0 <= u && i[o] !== l[u]; ) u--;
      for (; 1 <= o && 0 <= u; o--, u--) if (i[o] !== l[u]) {
        if (o !== 1 || u !== 1)
          do
            if (o--, u--, 0 > u || i[o] !== l[u]) {
              var a = `
` + i[o].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= o && 0 <= u);
        break;
      }
    }
  } finally {
    kl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Yn(e) : "";
}
function kp(e) {
  switch (e.tag) {
    case 5:
      return Yn(e.type);
    case 16:
      return Yn("Lazy");
    case 13:
      return Yn("Suspense");
    case 19:
      return Yn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ol(e.type, !1), e;
    case 11:
      return e = Ol(e.type.render, !1), e;
    case 1:
      return e = Ol(e.type, !0), e;
    default:
      return "";
  }
}
function ao(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case sn:
      return "Fragment";
    case an:
      return "Portal";
    case lo:
      return "Profiler";
    case gu:
      return "StrictMode";
    case oo:
      return "Suspense";
    case uo:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case cf:
      return (e.displayName || "Context") + ".Consumer";
    case ff:
      return (e._context.displayName || "Context") + ".Provider";
    case yu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Eu:
      return t = e.displayName || null, t !== null ? t : ao(e.type) || "Memo";
    case mt:
      t = e._payload, e = e._init;
      try {
        return ao(e(t));
      } catch {
      }
  }
  return null;
}
function Op(e) {
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
      return ao(t);
    case 8:
      return t === gu ? "StrictMode" : "Mode";
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
function Lt(e) {
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
function pf(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Ip(e) {
  var t = pf(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, l = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(o) {
      r = "" + o, l.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function jr(e) {
  e._valueTracker || (e._valueTracker = Ip(e));
}
function hf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = pf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ei(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function so(e, t) {
  var n = t.checked;
  return b({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Pa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Lt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function mf(e, t) {
  t = t.checked, t != null && vu(e, "checked", t, !1);
}
function fo(e, t) {
  mf(e, t);
  var n = Lt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? co(e, t.type, n) : t.hasOwnProperty("defaultValue") && co(e, t.type, Lt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ka(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function co(e, t, n) {
  (t !== "number" || Ei(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Kn = Array.isArray;
function xn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Lt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function po(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return b({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Oa(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(E(92));
      if (Kn(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Lt(n) };
}
function vf(e, t) {
  var n = Lt(t.value), r = Lt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ia(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function gf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ho(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? gf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var $r, yf = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for ($r = $r || document.createElement("div"), $r.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = $r.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function dr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var nr = {
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
}, Lp = ["Webkit", "ms", "Moz", "O"];
Object.keys(nr).forEach(function(e) {
  Lp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), nr[t] = nr[e];
  });
});
function Ef(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || nr.hasOwnProperty(e) && nr[e] ? ("" + t).trim() : t + "px";
}
function xf(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = Ef(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var Rp = b({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function mo(e, t) {
  if (t) {
    if (Rp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function vo(e, t) {
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
var go = null;
function xu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var yo = null, Sn = null, wn = null;
function La(e) {
  if (e = Lr(e)) {
    if (typeof yo != "function") throw Error(E(280));
    var t = e.stateNode;
    t && (t = qi(t), yo(e.stateNode, e.type, t));
  }
}
function Sf(e) {
  Sn ? wn ? wn.push(e) : wn = [e] : Sn = e;
}
function wf() {
  if (Sn) {
    var e = Sn, t = wn;
    if (wn = Sn = null, La(e), t) for (e = 0; e < t.length; e++) La(t[e]);
  }
}
function Cf(e, t) {
  return e(t);
}
function Tf() {
}
var Il = !1;
function _f(e, t, n) {
  if (Il) return e(t, n);
  Il = !0;
  try {
    return Cf(e, t, n);
  } finally {
    Il = !1, (Sn !== null || wn !== null) && (Tf(), wf());
  }
}
function pr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = qi(n);
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
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var Eo = !1;
if (st) try {
  var $n = {};
  Object.defineProperty($n, "passive", { get: function() {
    Eo = !0;
  } }), window.addEventListener("test", $n, $n), window.removeEventListener("test", $n, $n);
} catch {
  Eo = !1;
}
function Mp(e, t, n, r, i, l, o, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (f) {
    this.onError(f);
  }
}
var rr = !1, xi = null, Si = !1, xo = null, Ap = { onError: function(e) {
  rr = !0, xi = e;
} };
function Dp(e, t, n, r, i, l, o, u, a) {
  rr = !1, xi = null, Mp.apply(Ap, arguments);
}
function Hp(e, t, n, r, i, l, o, u, a) {
  if (Dp.apply(this, arguments), rr) {
    if (rr) {
      var s = xi;
      rr = !1, xi = null;
    } else throw Error(E(198));
    Si || (Si = !0, xo = s);
  }
}
function nn(e) {
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
function Nf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ra(e) {
  if (nn(e) !== e) throw Error(E(188));
}
function Fp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = nn(e), t === null) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var l = i.alternate;
    if (l === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === l.child) {
      for (l = i.child; l; ) {
        if (l === n) return Ra(i), e;
        if (l === r) return Ra(i), t;
        l = l.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) n = i, r = l;
    else {
      for (var o = !1, u = i.child; u; ) {
        if (u === n) {
          o = !0, n = i, r = l;
          break;
        }
        if (u === r) {
          o = !0, r = i, n = l;
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = l.child; u; ) {
          if (u === n) {
            o = !0, n = l, r = i;
            break;
          }
          if (u === r) {
            o = !0, r = l, n = i;
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function Pf(e) {
  return e = Fp(e), e !== null ? kf(e) : null;
}
function kf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = kf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Of = Ie.unstable_scheduleCallback, Ma = Ie.unstable_cancelCallback, Bp = Ie.unstable_shouldYield, Up = Ie.unstable_requestPaint, J = Ie.unstable_now, zp = Ie.unstable_getCurrentPriorityLevel, Su = Ie.unstable_ImmediatePriority, If = Ie.unstable_UserBlockingPriority, wi = Ie.unstable_NormalPriority, jp = Ie.unstable_LowPriority, Lf = Ie.unstable_IdlePriority, Zi = null, et = null;
function $p(e) {
  if (et && typeof et.onCommitFiberRoot == "function") try {
    et.onCommitFiberRoot(Zi, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var be = Math.clz32 ? Math.clz32 : Wp, Vp = Math.log, Gp = Math.LN2;
function Wp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Vp(e) / Gp | 0) | 0;
}
var Vr = 64, Gr = 4194304;
function Jn(e) {
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
function Ci(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, l = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var u = o & ~i;
    u !== 0 ? r = Jn(u) : (l &= o, l !== 0 && (r = Jn(l)));
  } else o = n & ~i, o !== 0 ? r = Jn(o) : l !== 0 && (r = Jn(l));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, l = t & -t, i >= l || i === 16 && (l & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - be(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function Xp(e, t) {
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
function Qp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
    var o = 31 - be(l), u = 1 << o, a = i[o];
    a === -1 ? (!(u & n) || u & r) && (i[o] = Xp(u, t)) : a <= t && (e.expiredLanes |= u), l &= ~u;
  }
}
function So(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Rf() {
  var e = Vr;
  return Vr <<= 1, !(Vr & 4194240) && (Vr = 64), e;
}
function Ll(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Or(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - be(t), e[t] = n;
}
function bp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - be(n), l = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~l;
  }
}
function wu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - be(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var U = 0;
function Mf(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Af, Cu, Df, Hf, Ff, wo = !1, Wr = [], Ct = null, Tt = null, _t = null, hr = /* @__PURE__ */ new Map(), mr = /* @__PURE__ */ new Map(), Et = [], Zp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Aa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ct = null;
      break;
    case "dragenter":
    case "dragleave":
      Tt = null;
      break;
    case "mouseover":
    case "mouseout":
      _t = null;
      break;
    case "pointerover":
    case "pointerout":
      hr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      mr.delete(t.pointerId);
  }
}
function Vn(e, t, n, r, i, l) {
  return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [i] }, t !== null && (t = Lr(t), t !== null && Cu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function Yp(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return Ct = Vn(Ct, e, t, n, r, i), !0;
    case "dragenter":
      return Tt = Vn(Tt, e, t, n, r, i), !0;
    case "mouseover":
      return _t = Vn(_t, e, t, n, r, i), !0;
    case "pointerover":
      var l = i.pointerId;
      return hr.set(l, Vn(hr.get(l) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return l = i.pointerId, mr.set(l, Vn(mr.get(l) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Bf(e) {
  var t = Vt(e.target);
  if (t !== null) {
    var n = nn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Nf(n), t !== null) {
          e.blockedOn = t, Ff(e.priority, function() {
            Df(n);
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
function ai(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Co(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      go = r, n.target.dispatchEvent(r), go = null;
    } else return t = Lr(n), t !== null && Cu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Da(e, t, n) {
  ai(e) && n.delete(t);
}
function Kp() {
  wo = !1, Ct !== null && ai(Ct) && (Ct = null), Tt !== null && ai(Tt) && (Tt = null), _t !== null && ai(_t) && (_t = null), hr.forEach(Da), mr.forEach(Da);
}
function Gn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, wo || (wo = !0, Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, Kp)));
}
function vr(e) {
  function t(i) {
    return Gn(i, e);
  }
  if (0 < Wr.length) {
    Gn(Wr[0], e);
    for (var n = 1; n < Wr.length; n++) {
      var r = Wr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ct !== null && Gn(Ct, e), Tt !== null && Gn(Tt, e), _t !== null && Gn(_t, e), hr.forEach(t), mr.forEach(t), n = 0; n < Et.length; n++) r = Et[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Et.length && (n = Et[0], n.blockedOn === null); ) Bf(n), n.blockedOn === null && Et.shift();
}
var Cn = pt.ReactCurrentBatchConfig, Ti = !0;
function Jp(e, t, n, r) {
  var i = U, l = Cn.transition;
  Cn.transition = null;
  try {
    U = 1, Tu(e, t, n, r);
  } finally {
    U = i, Cn.transition = l;
  }
}
function qp(e, t, n, r) {
  var i = U, l = Cn.transition;
  Cn.transition = null;
  try {
    U = 4, Tu(e, t, n, r);
  } finally {
    U = i, Cn.transition = l;
  }
}
function Tu(e, t, n, r) {
  if (Ti) {
    var i = Co(e, t, n, r);
    if (i === null) jl(e, t, r, _i, n), Aa(e, r);
    else if (Yp(i, e, t, n, r)) r.stopPropagation();
    else if (Aa(e, r), t & 4 && -1 < Zp.indexOf(e)) {
      for (; i !== null; ) {
        var l = Lr(i);
        if (l !== null && Af(l), l = Co(e, t, n, r), l === null && jl(e, t, r, _i, n), l === i) break;
        i = l;
      }
      i !== null && r.stopPropagation();
    } else jl(e, t, r, null, n);
  }
}
var _i = null;
function Co(e, t, n, r) {
  if (_i = null, e = xu(r), e = Vt(e), e !== null) if (t = nn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Nf(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return _i = e, null;
}
function Uf(e) {
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
      switch (zp()) {
        case Su:
          return 1;
        case If:
          return 4;
        case wi:
        case jp:
          return 16;
        case Lf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var St = null, _u = null, si = null;
function zf() {
  if (si) return si;
  var e, t = _u, n = t.length, r, i = "value" in St ? St.value : St.textContent, l = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[l - r]; r++) ;
  return si = i.slice(e, 1 < r ? 1 - r : void 0);
}
function fi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Xr() {
  return !0;
}
function Ha() {
  return !1;
}
function Re(e) {
  function t(n, r, i, l, o) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = l, this.target = o, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(l) : l[u]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Xr : Ha, this.isPropagationStopped = Ha, this;
  }
  return b(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Xr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Xr);
  }, persist: function() {
  }, isPersistent: Xr }), t;
}
var Hn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Nu = Re(Hn), Ir = b({}, Hn, { view: 0, detail: 0 }), eh = Re(Ir), Rl, Ml, Wn, Yi = b({}, Ir, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Pu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Wn && (Wn && e.type === "mousemove" ? (Rl = e.screenX - Wn.screenX, Ml = e.screenY - Wn.screenY) : Ml = Rl = 0, Wn = e), Rl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ml;
} }), Fa = Re(Yi), th = b({}, Yi, { dataTransfer: 0 }), nh = Re(th), rh = b({}, Ir, { relatedTarget: 0 }), Al = Re(rh), ih = b({}, Hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), lh = Re(ih), oh = b({}, Hn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), uh = Re(oh), ah = b({}, Hn, { data: 0 }), Ba = Re(ah), sh = {
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
}, fh = {
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
}, ch = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function dh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ch[e]) ? !!t[e] : !1;
}
function Pu() {
  return dh;
}
var ph = b({}, Ir, { key: function(e) {
  if (e.key) {
    var t = sh[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = fi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? fh[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Pu, charCode: function(e) {
  return e.type === "keypress" ? fi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? fi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), hh = Re(ph), mh = b({}, Yi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ua = Re(mh), vh = b({}, Ir, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Pu }), gh = Re(vh), yh = b({}, Hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Eh = Re(yh), xh = b({}, Yi, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Sh = Re(xh), wh = [9, 13, 27, 32], ku = st && "CompositionEvent" in window, ir = null;
st && "documentMode" in document && (ir = document.documentMode);
var Ch = st && "TextEvent" in window && !ir, jf = st && (!ku || ir && 8 < ir && 11 >= ir), za = " ", ja = !1;
function $f(e, t) {
  switch (e) {
    case "keyup":
      return wh.indexOf(t.keyCode) !== -1;
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
function Vf(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var fn = !1;
function Th(e, t) {
  switch (e) {
    case "compositionend":
      return Vf(t);
    case "keypress":
      return t.which !== 32 ? null : (ja = !0, za);
    case "textInput":
      return e = t.data, e === za && ja ? null : e;
    default:
      return null;
  }
}
function _h(e, t) {
  if (fn) return e === "compositionend" || !ku && $f(e, t) ? (e = zf(), si = _u = St = null, fn = !1, e) : null;
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
      return jf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Nh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function $a(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Nh[e.type] : t === "textarea";
}
function Gf(e, t, n, r) {
  Sf(r), t = Ni(t, "onChange"), 0 < t.length && (n = new Nu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var lr = null, gr = null;
function Ph(e) {
  tc(e, 0);
}
function Ki(e) {
  var t = pn(e);
  if (hf(t)) return e;
}
function kh(e, t) {
  if (e === "change") return t;
}
var Wf = !1;
if (st) {
  var Dl;
  if (st) {
    var Hl = "oninput" in document;
    if (!Hl) {
      var Va = document.createElement("div");
      Va.setAttribute("oninput", "return;"), Hl = typeof Va.oninput == "function";
    }
    Dl = Hl;
  } else Dl = !1;
  Wf = Dl && (!document.documentMode || 9 < document.documentMode);
}
function Ga() {
  lr && (lr.detachEvent("onpropertychange", Xf), gr = lr = null);
}
function Xf(e) {
  if (e.propertyName === "value" && Ki(gr)) {
    var t = [];
    Gf(t, gr, e, xu(e)), _f(Ph, t);
  }
}
function Oh(e, t, n) {
  e === "focusin" ? (Ga(), lr = t, gr = n, lr.attachEvent("onpropertychange", Xf)) : e === "focusout" && Ga();
}
function Ih(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ki(gr);
}
function Lh(e, t) {
  if (e === "click") return Ki(t);
}
function Rh(e, t) {
  if (e === "input" || e === "change") return Ki(t);
}
function Mh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ye = typeof Object.is == "function" ? Object.is : Mh;
function yr(e, t) {
  if (Ye(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!io.call(t, i) || !Ye(e[i], t[i])) return !1;
  }
  return !0;
}
function Wa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xa(e, t) {
  var n = Wa(e);
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
    n = Wa(n);
  }
}
function Qf(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Qf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function bf() {
  for (var e = window, t = Ei(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ei(e.document);
  }
  return t;
}
function Ou(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Ah(e) {
  var t = bf(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Qf(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ou(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, l = Math.min(r.start, i);
        r = r.end === void 0 ? l : Math.min(r.end, i), !e.extend && l > r && (i = r, r = l, l = i), i = Xa(n, l);
        var o = Xa(
          n,
          r
        );
        i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Dh = st && "documentMode" in document && 11 >= document.documentMode, cn = null, To = null, or = null, _o = !1;
function Qa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  _o || cn == null || cn !== Ei(r) || (r = cn, "selectionStart" in r && Ou(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), or && yr(or, r) || (or = r, r = Ni(To, "onSelect"), 0 < r.length && (t = new Nu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = cn)));
}
function Qr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var dn = { animationend: Qr("Animation", "AnimationEnd"), animationiteration: Qr("Animation", "AnimationIteration"), animationstart: Qr("Animation", "AnimationStart"), transitionend: Qr("Transition", "TransitionEnd") }, Fl = {}, Zf = {};
st && (Zf = document.createElement("div").style, "AnimationEvent" in window || (delete dn.animationend.animation, delete dn.animationiteration.animation, delete dn.animationstart.animation), "TransitionEvent" in window || delete dn.transitionend.transition);
function Ji(e) {
  if (Fl[e]) return Fl[e];
  if (!dn[e]) return e;
  var t = dn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Zf) return Fl[e] = t[n];
  return e;
}
var Yf = Ji("animationend"), Kf = Ji("animationiteration"), Jf = Ji("animationstart"), qf = Ji("transitionend"), ec = /* @__PURE__ */ new Map(), ba = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Mt(e, t) {
  ec.set(e, t), tn(t, [e]);
}
for (var Bl = 0; Bl < ba.length; Bl++) {
  var Ul = ba[Bl], Hh = Ul.toLowerCase(), Fh = Ul[0].toUpperCase() + Ul.slice(1);
  Mt(Hh, "on" + Fh);
}
Mt(Yf, "onAnimationEnd");
Mt(Kf, "onAnimationIteration");
Mt(Jf, "onAnimationStart");
Mt("dblclick", "onDoubleClick");
Mt("focusin", "onFocus");
Mt("focusout", "onBlur");
Mt(qf, "onTransitionEnd");
Nn("onMouseEnter", ["mouseout", "mouseover"]);
Nn("onMouseLeave", ["mouseout", "mouseover"]);
Nn("onPointerEnter", ["pointerout", "pointerover"]);
Nn("onPointerLeave", ["pointerout", "pointerover"]);
tn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
tn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
tn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
tn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
tn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var qn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Bh = new Set("cancel close invalid load scroll toggle".split(" ").concat(qn));
function Za(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Hp(r, t, void 0, e), e.currentTarget = null;
}
function tc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var u = r[o], a = u.instance, s = u.currentTarget;
        if (u = u.listener, a !== l && i.isPropagationStopped()) break e;
        Za(i, u, s), l = a;
      }
      else for (o = 0; o < r.length; o++) {
        if (u = r[o], a = u.instance, s = u.currentTarget, u = u.listener, a !== l && i.isPropagationStopped()) break e;
        Za(i, u, s), l = a;
      }
    }
  }
  if (Si) throw e = xo, Si = !1, xo = null, e;
}
function $(e, t) {
  var n = t[Io];
  n === void 0 && (n = t[Io] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (nc(t, e, 2, !1), n.add(r));
}
function zl(e, t, n) {
  var r = 0;
  t && (r |= 4), nc(n, e, r, t);
}
var br = "_reactListening" + Math.random().toString(36).slice(2);
function Er(e) {
  if (!e[br]) {
    e[br] = !0, sf.forEach(function(n) {
      n !== "selectionchange" && (Bh.has(n) || zl(n, !1, e), zl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[br] || (t[br] = !0, zl("selectionchange", !1, t));
  }
}
function nc(e, t, n, r) {
  switch (Uf(t)) {
    case 1:
      var i = Jp;
      break;
    case 4:
      i = qp;
      break;
    default:
      i = Tu;
  }
  n = i.bind(null, t, n, e), i = void 0, !Eo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function jl(e, t, n, r, i) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var u = r.stateNode.containerInfo;
      if (u === i || u.nodeType === 8 && u.parentNode === i) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var a = o.tag;
        if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i)) return;
        o = o.return;
      }
      for (; u !== null; ) {
        if (o = Vt(u), o === null) return;
        if (a = o.tag, a === 5 || a === 6) {
          r = l = o;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  _f(function() {
    var s = l, f = xu(n), h = [];
    e: {
      var p = ec.get(e);
      if (p !== void 0) {
        var y = Nu, g = e;
        switch (e) {
          case "keypress":
            if (fi(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = hh;
            break;
          case "focusin":
            g = "focus", y = Al;
            break;
          case "focusout":
            g = "blur", y = Al;
            break;
          case "beforeblur":
          case "afterblur":
            y = Al;
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
            y = Fa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = nh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = gh;
            break;
          case Yf:
          case Kf:
          case Jf:
            y = lh;
            break;
          case qf:
            y = Eh;
            break;
          case "scroll":
            y = eh;
            break;
          case "wheel":
            y = Sh;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = uh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Ua;
        }
        var x = (t & 4) !== 0, I = !x && e === "scroll", d = x ? p !== null ? p + "Capture" : null : p;
        x = [];
        for (var c = s, m; c !== null; ) {
          m = c;
          var v = m.stateNode;
          if (m.tag === 5 && v !== null && (m = v, d !== null && (v = pr(c, d), v != null && x.push(xr(c, v, m)))), I) break;
          c = c.return;
        }
        0 < x.length && (p = new y(p, g, null, n, f), h.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", p && n !== go && (g = n.relatedTarget || n.fromElement) && (Vt(g) || g[ft])) break e;
        if ((y || p) && (p = f.window === f ? f : (p = f.ownerDocument) ? p.defaultView || p.parentWindow : window, y ? (g = n.relatedTarget || n.toElement, y = s, g = g ? Vt(g) : null, g !== null && (I = nn(g), g !== I || g.tag !== 5 && g.tag !== 6) && (g = null)) : (y = null, g = s), y !== g)) {
          if (x = Fa, v = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (x = Ua, v = "onPointerLeave", d = "onPointerEnter", c = "pointer"), I = y == null ? p : pn(y), m = g == null ? p : pn(g), p = new x(v, c + "leave", y, n, f), p.target = I, p.relatedTarget = m, v = null, Vt(f) === s && (x = new x(d, c + "enter", g, n, f), x.target = m, x.relatedTarget = I, v = x), I = v, y && g) t: {
            for (x = y, d = g, c = 0, m = x; m; m = ln(m)) c++;
            for (m = 0, v = d; v; v = ln(v)) m++;
            for (; 0 < c - m; ) x = ln(x), c--;
            for (; 0 < m - c; ) d = ln(d), m--;
            for (; c--; ) {
              if (x === d || d !== null && x === d.alternate) break t;
              x = ln(x), d = ln(d);
            }
            x = null;
          }
          else x = null;
          y !== null && Ya(h, p, y, x, !1), g !== null && I !== null && Ya(h, I, g, x, !0);
        }
      }
      e: {
        if (p = s ? pn(s) : window, y = p.nodeName && p.nodeName.toLowerCase(), y === "select" || y === "input" && p.type === "file") var S = kh;
        else if ($a(p)) if (Wf) S = Rh;
        else {
          S = Ih;
          var T = Oh;
        }
        else (y = p.nodeName) && y.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (S = Lh);
        if (S && (S = S(e, s))) {
          Gf(h, S, n, f);
          break e;
        }
        T && T(e, p, s), e === "focusout" && (T = p._wrapperState) && T.controlled && p.type === "number" && co(p, "number", p.value);
      }
      switch (T = s ? pn(s) : window, e) {
        case "focusin":
          ($a(T) || T.contentEditable === "true") && (cn = T, To = s, or = null);
          break;
        case "focusout":
          or = To = cn = null;
          break;
        case "mousedown":
          _o = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          _o = !1, Qa(h, n, f);
          break;
        case "selectionchange":
          if (Dh) break;
        case "keydown":
        case "keyup":
          Qa(h, n, f);
      }
      var P;
      if (ku) e: {
        switch (e) {
          case "compositionstart":
            var k = "onCompositionStart";
            break e;
          case "compositionend":
            k = "onCompositionEnd";
            break e;
          case "compositionupdate":
            k = "onCompositionUpdate";
            break e;
        }
        k = void 0;
      }
      else fn ? $f(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k && (jf && n.locale !== "ko" && (fn || k !== "onCompositionStart" ? k === "onCompositionEnd" && fn && (P = zf()) : (St = f, _u = "value" in St ? St.value : St.textContent, fn = !0)), T = Ni(s, k), 0 < T.length && (k = new Ba(k, e, null, n, f), h.push({ event: k, listeners: T }), P ? k.data = P : (P = Vf(n), P !== null && (k.data = P)))), (P = Ch ? Th(e, n) : _h(e, n)) && (s = Ni(s, "onBeforeInput"), 0 < s.length && (f = new Ba("onBeforeInput", "beforeinput", null, n, f), h.push({ event: f, listeners: s }), f.data = P));
    }
    tc(h, t);
  });
}
function xr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ni(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, l = i.stateNode;
    i.tag === 5 && l !== null && (i = l, l = pr(e, n), l != null && r.unshift(xr(e, l, i)), l = pr(e, t), l != null && r.push(xr(e, l, i))), e = e.return;
  }
  return r;
}
function ln(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ya(e, t, n, r, i) {
  for (var l = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n, a = u.alternate, s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 && s !== null && (u = s, i ? (a = pr(n, l), a != null && o.unshift(xr(n, a, u))) : i || (a = pr(n, l), a != null && o.push(xr(n, a, u)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Uh = /\r\n?/g, zh = /\u0000|\uFFFD/g;
function Ka(e) {
  return (typeof e == "string" ? e : "" + e).replace(Uh, `
`).replace(zh, "");
}
function Zr(e, t, n) {
  if (t = Ka(t), Ka(e) !== t && n) throw Error(E(425));
}
function Pi() {
}
var No = null, Po = null;
function ko(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Oo = typeof setTimeout == "function" ? setTimeout : void 0, jh = typeof clearTimeout == "function" ? clearTimeout : void 0, Ja = typeof Promise == "function" ? Promise : void 0, $h = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ja < "u" ? function(e) {
  return Ja.resolve(null).then(e).catch(Vh);
} : Oo;
function Vh(e) {
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
        e.removeChild(i), vr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  vr(t);
}
function Nt(e) {
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
function qa(e) {
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
var Fn = Math.random().toString(36).slice(2), qe = "__reactFiber$" + Fn, Sr = "__reactProps$" + Fn, ft = "__reactContainer$" + Fn, Io = "__reactEvents$" + Fn, Gh = "__reactListeners$" + Fn, Wh = "__reactHandles$" + Fn;
function Vt(e) {
  var t = e[qe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[ft] || n[qe]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = qa(e); e !== null; ) {
        if (n = e[qe]) return n;
        e = qa(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Lr(e) {
  return e = e[qe] || e[ft], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function pn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function qi(e) {
  return e[Sr] || null;
}
var Lo = [], hn = -1;
function At(e) {
  return { current: e };
}
function G(e) {
  0 > hn || (e.current = Lo[hn], Lo[hn] = null, hn--);
}
function j(e, t) {
  hn++, Lo[hn] = e.current, e.current = t;
}
var Rt = {}, de = At(Rt), Te = At(!1), Zt = Rt;
function Pn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Rt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, l;
  for (l in n) i[l] = t[l];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function _e(e) {
  return e = e.childContextTypes, e != null;
}
function ki() {
  G(Te), G(de);
}
function es(e, t, n) {
  if (de.current !== Rt) throw Error(E(168));
  j(de, t), j(Te, n);
}
function rc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(E(108, Op(e) || "Unknown", i));
  return b({}, n, r);
}
function Oi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Rt, Zt = de.current, j(de, e), j(Te, Te.current), !0;
}
function ts(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n ? (e = rc(e, t, Zt), r.__reactInternalMemoizedMergedChildContext = e, G(Te), G(de), j(de, e)) : G(Te), j(Te, n);
}
var lt = null, el = !1, Vl = !1;
function ic(e) {
  lt === null ? lt = [e] : lt.push(e);
}
function Xh(e) {
  el = !0, ic(e);
}
function Dt() {
  if (!Vl && lt !== null) {
    Vl = !0;
    var e = 0, t = U;
    try {
      var n = lt;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      lt = null, el = !1;
    } catch (i) {
      throw lt !== null && (lt = lt.slice(e + 1)), Of(Su, Dt), i;
    } finally {
      U = t, Vl = !1;
    }
  }
  return null;
}
var mn = [], vn = 0, Ii = null, Li = 0, Ae = [], De = 0, Yt = null, ot = 1, ut = "";
function zt(e, t) {
  mn[vn++] = Li, mn[vn++] = Ii, Ii = e, Li = t;
}
function lc(e, t, n) {
  Ae[De++] = ot, Ae[De++] = ut, Ae[De++] = Yt, Yt = e;
  var r = ot;
  e = ut;
  var i = 32 - be(r) - 1;
  r &= ~(1 << i), n += 1;
  var l = 32 - be(t) + i;
  if (30 < l) {
    var o = i - i % 5;
    l = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, ot = 1 << 32 - be(t) + i | n << i | r, ut = l + e;
  } else ot = 1 << l | n << i | r, ut = e;
}
function Iu(e) {
  e.return !== null && (zt(e, 1), lc(e, 1, 0));
}
function Lu(e) {
  for (; e === Ii; ) Ii = mn[--vn], mn[vn] = null, Li = mn[--vn], mn[vn] = null;
  for (; e === Yt; ) Yt = Ae[--De], Ae[De] = null, ut = Ae[--De], Ae[De] = null, ot = Ae[--De], Ae[De] = null;
}
var Oe = null, ke = null, W = !1, Qe = null;
function oc(e, t) {
  var n = He(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ns(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Oe = e, ke = Nt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Oe = e, ke = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Yt !== null ? { id: ot, overflow: ut } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = He(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Oe = e, ke = null, !0) : !1;
    default:
      return !1;
  }
}
function Ro(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Mo(e) {
  if (W) {
    var t = ke;
    if (t) {
      var n = t;
      if (!ns(e, t)) {
        if (Ro(e)) throw Error(E(418));
        t = Nt(n.nextSibling);
        var r = Oe;
        t && ns(e, t) ? oc(r, n) : (e.flags = e.flags & -4097 | 2, W = !1, Oe = e);
      }
    } else {
      if (Ro(e)) throw Error(E(418));
      e.flags = e.flags & -4097 | 2, W = !1, Oe = e;
    }
  }
}
function rs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Oe = e;
}
function Yr(e) {
  if (e !== Oe) return !1;
  if (!W) return rs(e), W = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ko(e.type, e.memoizedProps)), t && (t = ke)) {
    if (Ro(e)) throw uc(), Error(E(418));
    for (; t; ) oc(e, t), t = Nt(t.nextSibling);
  }
  if (rs(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ke = Nt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ke = null;
    }
  } else ke = Oe ? Nt(e.stateNode.nextSibling) : null;
  return !0;
}
function uc() {
  for (var e = ke; e; ) e = Nt(e.nextSibling);
}
function kn() {
  ke = Oe = null, W = !1;
}
function Ru(e) {
  Qe === null ? Qe = [e] : Qe.push(e);
}
var Qh = pt.ReactCurrentBatchConfig;
function Xn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var i = r, l = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(o) {
        var u = i.refs;
        o === null ? delete u[l] : u[l] = o;
      }, t._stringRef = l, t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Kr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function is(e) {
  var t = e._init;
  return t(e._payload);
}
function ac(e) {
  function t(d, c) {
    if (e) {
      var m = d.deletions;
      m === null ? (d.deletions = [c], d.flags |= 16) : m.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), c = c.sibling;
    return null;
  }
  function r(d, c) {
    for (d = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? d.set(c.key, c) : d.set(c.index, c), c = c.sibling;
    return d;
  }
  function i(d, c) {
    return d = It(d, c), d.index = 0, d.sibling = null, d;
  }
  function l(d, c, m) {
    return d.index = m, e ? (m = d.alternate, m !== null ? (m = m.index, m < c ? (d.flags |= 2, c) : m) : (d.flags |= 2, c)) : (d.flags |= 1048576, c);
  }
  function o(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, c, m, v) {
    return c === null || c.tag !== 6 ? (c = Yl(m, d.mode, v), c.return = d, c) : (c = i(c, m), c.return = d, c);
  }
  function a(d, c, m, v) {
    var S = m.type;
    return S === sn ? f(d, c, m.props.children, v, m.key) : c !== null && (c.elementType === S || typeof S == "object" && S !== null && S.$$typeof === mt && is(S) === c.type) ? (v = i(c, m.props), v.ref = Xn(d, c, m), v.return = d, v) : (v = gi(m.type, m.key, m.props, null, d.mode, v), v.ref = Xn(d, c, m), v.return = d, v);
  }
  function s(d, c, m, v) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== m.containerInfo || c.stateNode.implementation !== m.implementation ? (c = Kl(m, d.mode, v), c.return = d, c) : (c = i(c, m.children || []), c.return = d, c);
  }
  function f(d, c, m, v, S) {
    return c === null || c.tag !== 7 ? (c = bt(m, d.mode, v, S), c.return = d, c) : (c = i(c, m), c.return = d, c);
  }
  function h(d, c, m) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = Yl("" + c, d.mode, m), c.return = d, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case zr:
          return m = gi(c.type, c.key, c.props, null, d.mode, m), m.ref = Xn(d, null, c), m.return = d, m;
        case an:
          return c = Kl(c, d.mode, m), c.return = d, c;
        case mt:
          var v = c._init;
          return h(d, v(c._payload), m);
      }
      if (Kn(c) || jn(c)) return c = bt(c, d.mode, m, null), c.return = d, c;
      Kr(d, c);
    }
    return null;
  }
  function p(d, c, m, v) {
    var S = c !== null ? c.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return S !== null ? null : u(d, c, "" + m, v);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case zr:
          return m.key === S ? a(d, c, m, v) : null;
        case an:
          return m.key === S ? s(d, c, m, v) : null;
        case mt:
          return S = m._init, p(
            d,
            c,
            S(m._payload),
            v
          );
      }
      if (Kn(m) || jn(m)) return S !== null ? null : f(d, c, m, v, null);
      Kr(d, m);
    }
    return null;
  }
  function y(d, c, m, v, S) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return d = d.get(m) || null, u(c, d, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case zr:
          return d = d.get(v.key === null ? m : v.key) || null, a(c, d, v, S);
        case an:
          return d = d.get(v.key === null ? m : v.key) || null, s(c, d, v, S);
        case mt:
          var T = v._init;
          return y(d, c, m, T(v._payload), S);
      }
      if (Kn(v) || jn(v)) return d = d.get(m) || null, f(c, d, v, S, null);
      Kr(c, v);
    }
    return null;
  }
  function g(d, c, m, v) {
    for (var S = null, T = null, P = c, k = c = 0, Y = null; P !== null && k < m.length; k++) {
      P.index > k ? (Y = P, P = null) : Y = P.sibling;
      var D = p(d, P, m[k], v);
      if (D === null) {
        P === null && (P = Y);
        break;
      }
      e && P && D.alternate === null && t(d, P), c = l(D, c, k), T === null ? S = D : T.sibling = D, T = D, P = Y;
    }
    if (k === m.length) return n(d, P), W && zt(d, k), S;
    if (P === null) {
      for (; k < m.length; k++) P = h(d, m[k], v), P !== null && (c = l(P, c, k), T === null ? S = P : T.sibling = P, T = P);
      return W && zt(d, k), S;
    }
    for (P = r(d, P); k < m.length; k++) Y = y(P, d, k, m[k], v), Y !== null && (e && Y.alternate !== null && P.delete(Y.key === null ? k : Y.key), c = l(Y, c, k), T === null ? S = Y : T.sibling = Y, T = Y);
    return e && P.forEach(function($e) {
      return t(d, $e);
    }), W && zt(d, k), S;
  }
  function x(d, c, m, v) {
    var S = jn(m);
    if (typeof S != "function") throw Error(E(150));
    if (m = S.call(m), m == null) throw Error(E(151));
    for (var T = S = null, P = c, k = c = 0, Y = null, D = m.next(); P !== null && !D.done; k++, D = m.next()) {
      P.index > k ? (Y = P, P = null) : Y = P.sibling;
      var $e = p(d, P, D.value, v);
      if ($e === null) {
        P === null && (P = Y);
        break;
      }
      e && P && $e.alternate === null && t(d, P), c = l($e, c, k), T === null ? S = $e : T.sibling = $e, T = $e, P = Y;
    }
    if (D.done) return n(
      d,
      P
    ), W && zt(d, k), S;
    if (P === null) {
      for (; !D.done; k++, D = m.next()) D = h(d, D.value, v), D !== null && (c = l(D, c, k), T === null ? S = D : T.sibling = D, T = D);
      return W && zt(d, k), S;
    }
    for (P = r(d, P); !D.done; k++, D = m.next()) D = y(P, d, k, D.value, v), D !== null && (e && D.alternate !== null && P.delete(D.key === null ? k : D.key), c = l(D, c, k), T === null ? S = D : T.sibling = D, T = D);
    return e && P.forEach(function(Bn) {
      return t(d, Bn);
    }), W && zt(d, k), S;
  }
  function I(d, c, m, v) {
    if (typeof m == "object" && m !== null && m.type === sn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case zr:
          e: {
            for (var S = m.key, T = c; T !== null; ) {
              if (T.key === S) {
                if (S = m.type, S === sn) {
                  if (T.tag === 7) {
                    n(d, T.sibling), c = i(T, m.props.children), c.return = d, d = c;
                    break e;
                  }
                } else if (T.elementType === S || typeof S == "object" && S !== null && S.$$typeof === mt && is(S) === T.type) {
                  n(d, T.sibling), c = i(T, m.props), c.ref = Xn(d, T, m), c.return = d, d = c;
                  break e;
                }
                n(d, T);
                break;
              } else t(d, T);
              T = T.sibling;
            }
            m.type === sn ? (c = bt(m.props.children, d.mode, v, m.key), c.return = d, d = c) : (v = gi(m.type, m.key, m.props, null, d.mode, v), v.ref = Xn(d, c, m), v.return = d, d = v);
          }
          return o(d);
        case an:
          e: {
            for (T = m.key; c !== null; ) {
              if (c.key === T) if (c.tag === 4 && c.stateNode.containerInfo === m.containerInfo && c.stateNode.implementation === m.implementation) {
                n(d, c.sibling), c = i(c, m.children || []), c.return = d, d = c;
                break e;
              } else {
                n(d, c);
                break;
              }
              else t(d, c);
              c = c.sibling;
            }
            c = Kl(m, d.mode, v), c.return = d, d = c;
          }
          return o(d);
        case mt:
          return T = m._init, I(d, c, T(m._payload), v);
      }
      if (Kn(m)) return g(d, c, m, v);
      if (jn(m)) return x(d, c, m, v);
      Kr(d, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, c !== null && c.tag === 6 ? (n(d, c.sibling), c = i(c, m), c.return = d, d = c) : (n(d, c), c = Yl(m, d.mode, v), c.return = d, d = c), o(d)) : n(d, c);
  }
  return I;
}
var On = ac(!0), sc = ac(!1), Ri = At(null), Mi = null, gn = null, Mu = null;
function Au() {
  Mu = gn = Mi = null;
}
function Du(e) {
  var t = Ri.current;
  G(Ri), e._currentValue = t;
}
function Ao(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Tn(e, t) {
  Mi = e, Mu = gn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ce = !0), e.firstContext = null);
}
function Be(e) {
  var t = e._currentValue;
  if (Mu !== e) if (e = { context: e, memoizedValue: t, next: null }, gn === null) {
    if (Mi === null) throw Error(E(308));
    gn = e, Mi.dependencies = { lanes: 0, firstContext: e };
  } else gn = gn.next = e;
  return t;
}
var Gt = null;
function Hu(e) {
  Gt === null ? Gt = [e] : Gt.push(e);
}
function fc(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, Hu(t)) : (n.next = i.next, i.next = n), t.interleaved = n, ct(e, r);
}
function ct(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var vt = !1;
function Fu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function cc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function at(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Pt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, B & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, ct(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, Hu(r)) : (t.next = i.next, i.next = t), r.interleaved = t, ct(e, n);
}
function ci(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, wu(e, n);
  }
}
function ls(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, l = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        l === null ? i = l = o : l = l.next = o, n = n.next;
      } while (n !== null);
      l === null ? i = l = t : l = l.next = t;
    } else i = l = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: l, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Ai(e, t, n, r) {
  var i = e.updateQueue;
  vt = !1;
  var l = i.firstBaseUpdate, o = i.lastBaseUpdate, u = i.shared.pending;
  if (u !== null) {
    i.shared.pending = null;
    var a = u, s = a.next;
    a.next = null, o === null ? l = s : o.next = s, o = a;
    var f = e.alternate;
    f !== null && (f = f.updateQueue, u = f.lastBaseUpdate, u !== o && (u === null ? f.firstBaseUpdate = s : u.next = s, f.lastBaseUpdate = a));
  }
  if (l !== null) {
    var h = i.baseState;
    o = 0, f = s = a = null, u = l;
    do {
      var p = u.lane, y = u.eventTime;
      if ((r & p) === p) {
        f !== null && (f = f.next = {
          eventTime: y,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var g = e, x = u;
          switch (p = t, y = n, x.tag) {
            case 1:
              if (g = x.payload, typeof g == "function") {
                h = g.call(y, h, p);
                break e;
              }
              h = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = x.payload, p = typeof g == "function" ? g.call(y, h, p) : g, p == null) break e;
              h = b({}, h, p);
              break e;
            case 2:
              vt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = i.effects, p === null ? i.effects = [u] : p.push(u));
      } else y = { eventTime: y, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, f === null ? (s = f = y, a = h) : f = f.next = y, o |= p;
      if (u = u.next, u === null) {
        if (u = i.shared.pending, u === null) break;
        p = u, u = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
      }
    } while (!0);
    if (f === null && (a = h), i.baseState = a, i.firstBaseUpdate = s, i.lastBaseUpdate = f, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        o |= i.lane, i = i.next;
      while (i !== t);
    } else l === null && (i.shared.lanes = 0);
    Jt |= o, e.lanes = o, e.memoizedState = h;
  }
}
function os(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(E(191, i));
      i.call(r);
    }
  }
}
var Rr = {}, tt = At(Rr), wr = At(Rr), Cr = At(Rr);
function Wt(e) {
  if (e === Rr) throw Error(E(174));
  return e;
}
function Bu(e, t) {
  switch (j(Cr, t), j(wr, e), j(tt, Rr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ho(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ho(t, e);
  }
  G(tt), j(tt, t);
}
function In() {
  G(tt), G(wr), G(Cr);
}
function dc(e) {
  Wt(Cr.current);
  var t = Wt(tt.current), n = ho(t, e.type);
  t !== n && (j(wr, e), j(tt, n));
}
function Uu(e) {
  wr.current === e && (G(tt), G(wr));
}
var X = At(0);
function Di(e) {
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
function zu() {
  for (var e = 0; e < Gl.length; e++) Gl[e]._workInProgressVersionPrimary = null;
  Gl.length = 0;
}
var di = pt.ReactCurrentDispatcher, Wl = pt.ReactCurrentBatchConfig, Kt = 0, Q = null, ee = null, re = null, Hi = !1, ur = !1, Tr = 0, bh = 0;
function se() {
  throw Error(E(321));
}
function ju(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ye(e[n], t[n])) return !1;
  return !0;
}
function $u(e, t, n, r, i, l) {
  if (Kt = l, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, di.current = e === null || e.memoizedState === null ? Jh : qh, e = n(r, i), ur) {
    l = 0;
    do {
      if (ur = !1, Tr = 0, 25 <= l) throw Error(E(301));
      l += 1, re = ee = null, t.updateQueue = null, di.current = em, e = n(r, i);
    } while (ur);
  }
  if (di.current = Fi, t = ee !== null && ee.next !== null, Kt = 0, re = ee = Q = null, Hi = !1, t) throw Error(E(300));
  return e;
}
function Vu() {
  var e = Tr !== 0;
  return Tr = 0, e;
}
function Je() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return re === null ? Q.memoizedState = re = e : re = re.next = e, re;
}
function Ue() {
  if (ee === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ee.next;
  var t = re === null ? Q.memoizedState : re.next;
  if (t !== null) re = t, ee = e;
  else {
    if (e === null) throw Error(E(310));
    ee = e, e = { memoizedState: ee.memoizedState, baseState: ee.baseState, baseQueue: ee.baseQueue, queue: ee.queue, next: null }, re === null ? Q.memoizedState = re = e : re = re.next = e;
  }
  return re;
}
function _r(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Xl(e) {
  var t = Ue(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = ee, i = r.baseQueue, l = n.pending;
  if (l !== null) {
    if (i !== null) {
      var o = i.next;
      i.next = l.next, l.next = o;
    }
    r.baseQueue = i = l, n.pending = null;
  }
  if (i !== null) {
    l = i.next, r = r.baseState;
    var u = o = null, a = null, s = l;
    do {
      var f = s.lane;
      if ((Kt & f) === f) a !== null && (a = a.next = { lane: 0, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null }), r = s.hasEagerState ? s.eagerState : e(r, s.action);
      else {
        var h = {
          lane: f,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null
        };
        a === null ? (u = a = h, o = r) : a = a.next = h, Q.lanes |= f, Jt |= f;
      }
      s = s.next;
    } while (s !== null && s !== l);
    a === null ? o = r : a.next = u, Ye(r, t.memoizedState) || (Ce = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      l = i.lane, Q.lanes |= l, Jt |= l, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ql(e) {
  var t = Ue(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, l = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = i = i.next;
    do
      l = e(l, o.action), o = o.next;
    while (o !== i);
    Ye(l, t.memoizedState) || (Ce = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
  }
  return [l, r];
}
function pc() {
}
function hc(e, t) {
  var n = Q, r = Ue(), i = t(), l = !Ye(r.memoizedState, i);
  if (l && (r.memoizedState = i, Ce = !0), r = r.queue, Gu(gc.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || re !== null && re.memoizedState.tag & 1) {
    if (n.flags |= 2048, Nr(9, vc.bind(null, n, r, i, t), void 0, null), ie === null) throw Error(E(349));
    Kt & 30 || mc(n, t, i);
  }
  return i;
}
function mc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function vc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, yc(t) && Ec(e);
}
function gc(e, t, n) {
  return n(function() {
    yc(t) && Ec(e);
  });
}
function yc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ye(e, n);
  } catch {
    return !0;
  }
}
function Ec(e) {
  var t = ct(e, 1);
  t !== null && Ze(t, e, 1, -1);
}
function us(e) {
  var t = Je();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: _r, lastRenderedState: e }, t.queue = e, e = e.dispatch = Kh.bind(null, Q, e), [t.memoizedState, e];
}
function Nr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Q.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function xc() {
  return Ue().memoizedState;
}
function pi(e, t, n, r) {
  var i = Je();
  Q.flags |= e, i.memoizedState = Nr(1 | t, n, void 0, r === void 0 ? null : r);
}
function tl(e, t, n, r) {
  var i = Ue();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (ee !== null) {
    var o = ee.memoizedState;
    if (l = o.destroy, r !== null && ju(r, o.deps)) {
      i.memoizedState = Nr(t, n, l, r);
      return;
    }
  }
  Q.flags |= e, i.memoizedState = Nr(1 | t, n, l, r);
}
function as(e, t) {
  return pi(8390656, 8, e, t);
}
function Gu(e, t) {
  return tl(2048, 8, e, t);
}
function Sc(e, t) {
  return tl(4, 2, e, t);
}
function wc(e, t) {
  return tl(4, 4, e, t);
}
function Cc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Tc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, tl(4, 4, Cc.bind(null, t, e), n);
}
function Wu() {
}
function _c(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ju(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Nc(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ju(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Pc(e, t, n) {
  return Kt & 21 ? (Ye(n, t) || (n = Rf(), Q.lanes |= n, Jt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ce = !0), e.memoizedState = n);
}
function Zh(e, t) {
  var n = U;
  U = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Wl.transition;
  Wl.transition = {};
  try {
    e(!1), t();
  } finally {
    U = n, Wl.transition = r;
  }
}
function kc() {
  return Ue().memoizedState;
}
function Yh(e, t, n) {
  var r = Ot(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Oc(e)) Ic(t, n);
  else if (n = fc(e, t, n, r), n !== null) {
    var i = Ee();
    Ze(n, e, r, i), Lc(n, t, r);
  }
}
function Kh(e, t, n) {
  var r = Ot(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Oc(e)) Ic(t, i);
  else {
    var l = e.alternate;
    if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
      var o = t.lastRenderedState, u = l(o, n);
      if (i.hasEagerState = !0, i.eagerState = u, Ye(u, o)) {
        var a = t.interleaved;
        a === null ? (i.next = i, Hu(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = fc(e, t, i, r), n !== null && (i = Ee(), Ze(n, e, r, i), Lc(n, t, r));
  }
}
function Oc(e) {
  var t = e.alternate;
  return e === Q || t !== null && t === Q;
}
function Ic(e, t) {
  ur = Hi = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Lc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, wu(e, n);
  }
}
var Fi = { readContext: Be, useCallback: se, useContext: se, useEffect: se, useImperativeHandle: se, useInsertionEffect: se, useLayoutEffect: se, useMemo: se, useReducer: se, useRef: se, useState: se, useDebugValue: se, useDeferredValue: se, useTransition: se, useMutableSource: se, useSyncExternalStore: se, useId: se, unstable_isNewReconciler: !1 }, Jh = { readContext: Be, useCallback: function(e, t) {
  return Je().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Be, useEffect: as, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, pi(
    4194308,
    4,
    Cc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return pi(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return pi(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Je();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Je();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Yh.bind(null, Q, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Je();
  return e = { current: e }, t.memoizedState = e;
}, useState: us, useDebugValue: Wu, useDeferredValue: function(e) {
  return Je().memoizedState = e;
}, useTransition: function() {
  var e = us(!1), t = e[0];
  return e = Zh.bind(null, e[1]), Je().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Q, i = Je();
  if (W) {
    if (n === void 0) throw Error(E(407));
    n = n();
  } else {
    if (n = t(), ie === null) throw Error(E(349));
    Kt & 30 || mc(r, t, n);
  }
  i.memoizedState = n;
  var l = { value: n, getSnapshot: t };
  return i.queue = l, as(gc.bind(
    null,
    r,
    l,
    e
  ), [e]), r.flags |= 2048, Nr(9, vc.bind(null, r, l, n, t), void 0, null), n;
}, useId: function() {
  var e = Je(), t = ie.identifierPrefix;
  if (W) {
    var n = ut, r = ot;
    n = (r & ~(1 << 32 - be(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Tr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = bh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, qh = {
  readContext: Be,
  useCallback: _c,
  useContext: Be,
  useEffect: Gu,
  useImperativeHandle: Tc,
  useInsertionEffect: Sc,
  useLayoutEffect: wc,
  useMemo: Nc,
  useReducer: Xl,
  useRef: xc,
  useState: function() {
    return Xl(_r);
  },
  useDebugValue: Wu,
  useDeferredValue: function(e) {
    var t = Ue();
    return Pc(t, ee.memoizedState, e);
  },
  useTransition: function() {
    var e = Xl(_r)[0], t = Ue().memoizedState;
    return [e, t];
  },
  useMutableSource: pc,
  useSyncExternalStore: hc,
  useId: kc,
  unstable_isNewReconciler: !1
}, em = { readContext: Be, useCallback: _c, useContext: Be, useEffect: Gu, useImperativeHandle: Tc, useInsertionEffect: Sc, useLayoutEffect: wc, useMemo: Nc, useReducer: Ql, useRef: xc, useState: function() {
  return Ql(_r);
}, useDebugValue: Wu, useDeferredValue: function(e) {
  var t = Ue();
  return ee === null ? t.memoizedState = e : Pc(t, ee.memoizedState, e);
}, useTransition: function() {
  var e = Ql(_r)[0], t = Ue().memoizedState;
  return [e, t];
}, useMutableSource: pc, useSyncExternalStore: hc, useId: kc, unstable_isNewReconciler: !1 };
function We(e, t) {
  if (e && e.defaultProps) {
    t = b({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Do(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : b({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var nl = { isMounted: function(e) {
  return (e = e._reactInternals) ? nn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ee(), i = Ot(e), l = at(r, i);
  l.payload = t, n != null && (l.callback = n), t = Pt(e, l, i), t !== null && (Ze(t, e, i, r), ci(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ee(), i = Ot(e), l = at(r, i);
  l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Pt(e, l, i), t !== null && (Ze(t, e, i, r), ci(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ee(), r = Ot(e), i = at(n, r);
  i.tag = 2, t != null && (i.callback = t), t = Pt(e, i, r), t !== null && (Ze(t, e, r, n), ci(t, e, r));
} };
function ss(e, t, n, r, i, l, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, o) : t.prototype && t.prototype.isPureReactComponent ? !yr(n, r) || !yr(i, l) : !0;
}
function Rc(e, t, n) {
  var r = !1, i = Rt, l = t.contextType;
  return typeof l == "object" && l !== null ? l = Be(l) : (i = _e(t) ? Zt : de.current, r = t.contextTypes, l = (r = r != null) ? Pn(e, i) : Rt), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = nl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = l), t;
}
function fs(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && nl.enqueueReplaceState(t, t.state, null);
}
function Ho(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, Fu(e);
  var l = t.contextType;
  typeof l == "object" && l !== null ? i.context = Be(l) : (l = _e(t) ? Zt : de.current, i.context = Pn(e, l)), i.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Do(e, t, l, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && nl.enqueueReplaceState(i, i.state, null), Ai(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ln(e, t) {
  try {
    var n = "", r = t;
    do
      n += kp(r), r = r.return;
    while (r);
    var i = n;
  } catch (l) {
    i = `
Error generating stack: ` + l.message + `
` + l.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function bl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Fo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var tm = typeof WeakMap == "function" ? WeakMap : Map;
function Mc(e, t, n) {
  n = at(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ui || (Ui = !0, Qo = r), Fo(e, t);
  }, n;
}
function Ac(e, t, n) {
  n = at(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      Fo(e, t);
    };
  }
  var l = e.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
    Fo(e, t), typeof r != "function" && (kt === null ? kt = /* @__PURE__ */ new Set([this]) : kt.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function cs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new tm();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = mm.bind(null, e, t, n), t.then(e, e));
}
function ds(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ps(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = at(-1, 1), t.tag = 2, Pt(n, t, 1))), n.lanes |= 1), e);
}
var nm = pt.ReactCurrentOwner, Ce = !1;
function he(e, t, n, r) {
  t.child = e === null ? sc(t, null, n, r) : On(t, e.child, n, r);
}
function hs(e, t, n, r, i) {
  n = n.render;
  var l = t.ref;
  return Tn(t, i), r = $u(e, t, n, r, l, i), n = Vu(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, dt(e, t, i)) : (W && n && Iu(t), t.flags |= 1, he(e, t, r, i), t.child);
}
function ms(e, t, n, r, i) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" && !qu(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, Dc(e, t, l, r, i)) : (e = gi(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (l = e.child, !(e.lanes & i)) {
    var o = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : yr, n(o, r) && e.ref === t.ref) return dt(e, t, i);
  }
  return t.flags |= 1, e = It(l, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Dc(e, t, n, r, i) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (yr(l, r) && e.ref === t.ref) if (Ce = !1, t.pendingProps = r = l, (e.lanes & i) !== 0) e.flags & 131072 && (Ce = !0);
    else return t.lanes = e.lanes, dt(e, t, i);
  }
  return Bo(e, t, n, r, i);
}
function Hc(e, t, n) {
  var r = t.pendingProps, i = r.children, l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, j(En, Pe), Pe |= n;
  else {
    if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, j(En, Pe), Pe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, j(En, Pe), Pe |= r;
  }
  else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, j(En, Pe), Pe |= r;
  return he(e, t, i, n), t.child;
}
function Fc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Bo(e, t, n, r, i) {
  var l = _e(n) ? Zt : de.current;
  return l = Pn(t, l), Tn(t, i), n = $u(e, t, n, r, l, i), r = Vu(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, dt(e, t, i)) : (W && r && Iu(t), t.flags |= 1, he(e, t, n, i), t.child);
}
function vs(e, t, n, r, i) {
  if (_e(n)) {
    var l = !0;
    Oi(t);
  } else l = !1;
  if (Tn(t, i), t.stateNode === null) hi(e, t), Rc(t, n, r), Ho(t, n, r, i), r = !0;
  else if (e === null) {
    var o = t.stateNode, u = t.memoizedProps;
    o.props = u;
    var a = o.context, s = n.contextType;
    typeof s == "object" && s !== null ? s = Be(s) : (s = _e(n) ? Zt : de.current, s = Pn(t, s));
    var f = n.getDerivedStateFromProps, h = typeof f == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || a !== s) && fs(t, o, r, s), vt = !1;
    var p = t.memoizedState;
    o.state = p, Ai(t, r, o, i), a = t.memoizedState, u !== r || p !== a || Te.current || vt ? (typeof f == "function" && (Do(t, n, f, r), a = t.memoizedState), (u = vt || ss(t, n, u, r, p, a, s)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = s, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, cc(e, t), u = t.memoizedProps, s = t.type === t.elementType ? u : We(t.type, u), o.props = s, h = t.pendingProps, p = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = Be(a) : (a = _e(n) ? Zt : de.current, a = Pn(t, a));
    var y = n.getDerivedStateFromProps;
    (f = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== h || p !== a) && fs(t, o, r, a), vt = !1, p = t.memoizedState, o.state = p, Ai(t, r, o, i);
    var g = t.memoizedState;
    u !== h || p !== g || Te.current || vt ? (typeof y == "function" && (Do(t, n, y, r), g = t.memoizedState), (s = vt || ss(t, n, s, r, p, g, a) || !1) ? (f || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, g, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, g, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), o.props = r, o.state = g, o.context = a, r = s) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Uo(e, t, n, r, l, i);
}
function Uo(e, t, n, r, i, l) {
  Fc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && ts(t, n, !1), dt(e, t, l);
  r = t.stateNode, nm.current = t;
  var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = On(t, e.child, null, l), t.child = On(t, null, u, l)) : he(e, t, u, l), t.memoizedState = r.state, i && ts(t, n, !0), t.child;
}
function Bc(e) {
  var t = e.stateNode;
  t.pendingContext ? es(e, t.pendingContext, t.pendingContext !== t.context) : t.context && es(e, t.context, !1), Bu(e, t.containerInfo);
}
function gs(e, t, n, r, i) {
  return kn(), Ru(i), t.flags |= 256, he(e, t, n, r), t.child;
}
var zo = { dehydrated: null, treeContext: null, retryLane: 0 };
function jo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Uc(e, t, n) {
  var r = t.pendingProps, i = X.current, l = !1, o = (t.flags & 128) !== 0, u;
  if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), u ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), j(X, i & 1), e === null)
    return Mo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, o = { mode: "hidden", children: o }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = o) : l = ll(o, r, 0, null), e = bt(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = jo(n), t.memoizedState = zo, e) : Xu(t, o));
  if (i = e.memoizedState, i !== null && (u = i.dehydrated, u !== null)) return rm(e, t, o, r, u, i, n);
  if (l) {
    l = r.fallback, o = t.mode, i = e.child, u = i.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = It(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), u !== null ? l = It(u, l) : (l = bt(l, o, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, o = e.child.memoizedState, o = o === null ? jo(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, l.memoizedState = o, l.childLanes = e.childLanes & ~n, t.memoizedState = zo, r;
  }
  return l = e.child, e = l.sibling, r = It(l, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Xu(e, t) {
  return t = ll({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Jr(e, t, n, r) {
  return r !== null && Ru(r), On(t, e.child, null, n), e = Xu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function rm(e, t, n, r, i, l, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = bl(Error(E(422))), Jr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, i = t.mode, r = ll({ mode: "visible", children: r.children }, i, 0, null), l = bt(l, i, o, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && On(t, e.child, null, o), t.child.memoizedState = jo(o), t.memoizedState = zo, l);
  if (!(t.mode & 1)) return Jr(e, t, o, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var u = r.dgst;
    return r = u, l = Error(E(419)), r = bl(l, r, void 0), Jr(e, t, o, r);
  }
  if (u = (o & e.childLanes) !== 0, Ce || u) {
    if (r = ie, r !== null) {
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
      i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== l.retryLane && (l.retryLane = i, ct(e, i), Ze(r, e, i, -1));
    }
    return Ju(), r = bl(Error(E(421))), Jr(e, t, o, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = vm.bind(null, e), i._reactRetry = t, null) : (e = l.treeContext, ke = Nt(i.nextSibling), Oe = t, W = !0, Qe = null, e !== null && (Ae[De++] = ot, Ae[De++] = ut, Ae[De++] = Yt, ot = e.id, ut = e.overflow, Yt = t), t = Xu(t, r.children), t.flags |= 4096, t);
}
function ys(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ao(e.return, t, n);
}
function Zl(e, t, n, r, i) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = i);
}
function zc(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, l = r.tail;
  if (he(e, t, r.children, n), r = X.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && ys(e, n, t);
      else if (e.tag === 19) ys(e, n, t);
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
  if (j(X, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && Di(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Zl(t, !1, i, n, l);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && Di(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      Zl(t, !0, n, null, l);
      break;
    case "together":
      Zl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function hi(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function dt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Jt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, n = It(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = It(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function im(e, t, n) {
  switch (t.tag) {
    case 3:
      Bc(t), kn();
      break;
    case 5:
      dc(t);
      break;
    case 1:
      _e(t.type) && Oi(t);
      break;
    case 4:
      Bu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      j(Ri, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (j(X, X.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Uc(e, t, n) : (j(X, X.current & 1), e = dt(e, t, n), e !== null ? e.sibling : null);
      j(X, X.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return zc(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), j(X, X.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Hc(e, t, n);
  }
  return dt(e, t, n);
}
var jc, $o, $c, Vc;
jc = function(e, t) {
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
$o = function() {
};
$c = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, Wt(tt.current);
    var l = null;
    switch (n) {
      case "input":
        i = so(e, i), r = so(e, r), l = [];
        break;
      case "select":
        i = b({}, i, { value: void 0 }), r = b({}, r, { value: void 0 }), l = [];
        break;
      case "textarea":
        i = po(e, i), r = po(e, r), l = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Pi);
    }
    mo(n, r);
    var o;
    n = null;
    for (s in i) if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null) if (s === "style") {
      var u = i[s];
      for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (cr.hasOwnProperty(s) ? l || (l = []) : (l = l || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (u = i != null ? i[s] : void 0, r.hasOwnProperty(s) && a !== u && (a != null || u != null)) if (s === "style") if (u) {
        for (o in u) !u.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in a) a.hasOwnProperty(o) && u[o] !== a[o] && (n || (n = {}), n[o] = a[o]);
      } else n || (l || (l = []), l.push(
        s,
        n
      )), n = a;
      else s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (l = l || []).push(s, a)) : s === "children" ? typeof a != "string" && typeof a != "number" || (l = l || []).push(s, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (cr.hasOwnProperty(s) ? (a != null && s === "onScroll" && $("scroll", e), l || u === a || (l = [])) : (l = l || []).push(s, a));
    }
    n && (l = l || []).push("style", n);
    var s = l;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Vc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Qn(e, t) {
  if (!W) switch (e.tailMode) {
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
function fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function lm(e, t, n) {
  var r = t.pendingProps;
  switch (Lu(t), t.tag) {
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
      return fe(t), null;
    case 1:
      return _e(t.type) && ki(), fe(t), null;
    case 3:
      return r = t.stateNode, In(), G(Te), G(de), zu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Yr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Qe !== null && (Yo(Qe), Qe = null))), $o(e, t), fe(t), null;
    case 5:
      Uu(t);
      var i = Wt(Cr.current);
      if (n = t.type, e !== null && t.stateNode != null) $c(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return fe(t), null;
        }
        if (e = Wt(tt.current), Yr(t)) {
          r = t.stateNode, n = t.type;
          var l = t.memoizedProps;
          switch (r[qe] = t, r[Sr] = l, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              $("cancel", r), $("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              $("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < qn.length; i++) $(qn[i], r);
              break;
            case "source":
              $("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $(
                "error",
                r
              ), $("load", r);
              break;
            case "details":
              $("toggle", r);
              break;
            case "input":
              Pa(r, l), $("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!l.multiple }, $("invalid", r);
              break;
            case "textarea":
              Oa(r, l), $("invalid", r);
          }
          mo(n, l), i = null;
          for (var o in l) if (l.hasOwnProperty(o)) {
            var u = l[o];
            o === "children" ? typeof u == "string" ? r.textContent !== u && (l.suppressHydrationWarning !== !0 && Zr(r.textContent, u, e), i = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (l.suppressHydrationWarning !== !0 && Zr(
              r.textContent,
              u,
              e
            ), i = ["children", "" + u]) : cr.hasOwnProperty(o) && u != null && o === "onScroll" && $("scroll", r);
          }
          switch (n) {
            case "input":
              jr(r), ka(r, l, !0);
              break;
            case "textarea":
              jr(r), Ia(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Pi);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = gf(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[qe] = t, e[Sr] = r, jc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = vo(n, r), n) {
              case "dialog":
                $("cancel", e), $("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                $("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < qn.length; i++) $(qn[i], e);
                i = r;
                break;
              case "source":
                $("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                $(
                  "error",
                  e
                ), $("load", e), i = r;
                break;
              case "details":
                $("toggle", e), i = r;
                break;
              case "input":
                Pa(e, r), i = so(e, r), $("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = b({}, r, { value: void 0 }), $("invalid", e);
                break;
              case "textarea":
                Oa(e, r), i = po(e, r), $("invalid", e);
                break;
              default:
                i = r;
            }
            mo(n, i), u = i;
            for (l in u) if (u.hasOwnProperty(l)) {
              var a = u[l];
              l === "style" ? xf(e, a) : l === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && yf(e, a)) : l === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && dr(e, a) : typeof a == "number" && dr(e, "" + a) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (cr.hasOwnProperty(l) ? a != null && l === "onScroll" && $("scroll", e) : a != null && vu(e, l, a, o));
            }
            switch (n) {
              case "input":
                jr(e), ka(e, r, !1);
                break;
              case "textarea":
                jr(e), Ia(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Lt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, l = r.value, l != null ? xn(e, !!r.multiple, l, !1) : r.defaultValue != null && xn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Pi);
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
      return fe(t), null;
    case 6:
      if (e && t.stateNode != null) Vc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (n = Wt(Cr.current), Wt(tt.current), Yr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[qe] = t, (l = r.nodeValue !== n) && (e = Oe, e !== null)) switch (e.tag) {
            case 3:
              Zr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Zr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          l && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[qe] = t, t.stateNode = r;
      }
      return fe(t), null;
    case 13:
      if (G(X), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (W && ke !== null && t.mode & 1 && !(t.flags & 128)) uc(), kn(), t.flags |= 98560, l = !1;
        else if (l = Yr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!l) throw Error(E(318));
            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(E(317));
            l[qe] = t;
          } else kn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          fe(t), l = !1;
        } else Qe !== null && (Yo(Qe), Qe = null), l = !0;
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || X.current & 1 ? te === 0 && (te = 3) : Ju())), t.updateQueue !== null && (t.flags |= 4), fe(t), null);
    case 4:
      return In(), $o(e, t), e === null && Er(t.stateNode.containerInfo), fe(t), null;
    case 10:
      return Du(t.type._context), fe(t), null;
    case 17:
      return _e(t.type) && ki(), fe(t), null;
    case 19:
      if (G(X), l = t.memoizedState, l === null) return fe(t), null;
      if (r = (t.flags & 128) !== 0, o = l.rendering, o === null) if (r) Qn(l, !1);
      else {
        if (te !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = Di(e), o !== null) {
            for (t.flags |= 128, Qn(l, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) l = n, e = r, l.flags &= 14680066, o = l.alternate, o === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = o.childLanes, l.lanes = o.lanes, l.child = o.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = o.memoizedProps, l.memoizedState = o.memoizedState, l.updateQueue = o.updateQueue, l.type = o.type, e = o.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return j(X, X.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        l.tail !== null && J() > Rn && (t.flags |= 128, r = !0, Qn(l, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Di(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Qn(l, !0), l.tail === null && l.tailMode === "hidden" && !o.alternate && !W) return fe(t), null;
        } else 2 * J() - l.renderingStartTime > Rn && n !== 1073741824 && (t.flags |= 128, r = !0, Qn(l, !1), t.lanes = 4194304);
        l.isBackwards ? (o.sibling = t.child, t.child = o) : (n = l.last, n !== null ? n.sibling = o : t.child = o, l.last = o);
      }
      return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = J(), t.sibling = null, n = X.current, j(X, r ? n & 1 | 2 : n & 1), t) : (fe(t), null);
    case 22:
    case 23:
      return Ku(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Pe & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : fe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function om(e, t) {
  switch (Lu(t), t.tag) {
    case 1:
      return _e(t.type) && ki(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return In(), G(Te), G(de), zu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Uu(t), null;
    case 13:
      if (G(X), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(E(340));
        kn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return G(X), null;
    case 4:
      return In(), null;
    case 10:
      return Du(t.type._context), null;
    case 22:
    case 23:
      return Ku(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var qr = !1, ce = !1, um = typeof WeakSet == "function" ? WeakSet : Set, w = null;
function yn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Z(e, t, r);
  }
  else n.current = null;
}
function Vo(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var Es = !1;
function am(e, t) {
  if (No = Ti, e = bf(), Ou(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var i = r.anchorOffset, l = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, l.nodeType;
        } catch {
          n = null;
          break e;
        }
        var o = 0, u = -1, a = -1, s = 0, f = 0, h = e, p = null;
        t: for (; ; ) {
          for (var y; h !== n || i !== 0 && h.nodeType !== 3 || (u = o + i), h !== l || r !== 0 && h.nodeType !== 3 || (a = o + r), h.nodeType === 3 && (o += h.nodeValue.length), (y = h.firstChild) !== null; )
            p = h, h = y;
          for (; ; ) {
            if (h === e) break t;
            if (p === n && ++s === i && (u = o), p === l && ++f === r && (a = o), (y = h.nextSibling) !== null) break;
            h = p, p = h.parentNode;
          }
          h = y;
        }
        n = u === -1 || a === -1 ? null : { start: u, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Po = { focusedElem: e, selectionRange: n }, Ti = !1, w = t; w !== null; ) if (t = w, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, w = e;
  else for (; w !== null; ) {
    t = w;
    try {
      var g = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (g !== null) {
            var x = g.memoizedProps, I = g.memoizedState, d = t.stateNode, c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? x : We(t.type, x), I);
            d.__reactInternalSnapshotBeforeUpdate = c;
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
          throw Error(E(163));
      }
    } catch (v) {
      Z(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, w = e;
      break;
    }
    w = t.return;
  }
  return g = Es, Es = !1, g;
}
function ar(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var l = i.destroy;
        i.destroy = void 0, l !== void 0 && Vo(t, n, l);
      }
      i = i.next;
    } while (i !== r);
  }
}
function rl(e, t) {
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
function Go(e) {
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
function Gc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Gc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[qe], delete t[Sr], delete t[Io], delete t[Gh], delete t[Wh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Wc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function xs(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Wc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Wo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Pi));
  else if (r !== 4 && (e = e.child, e !== null)) for (Wo(e, t, n), e = e.sibling; e !== null; ) Wo(e, t, n), e = e.sibling;
}
function Xo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Xo(e, t, n), e = e.sibling; e !== null; ) Xo(e, t, n), e = e.sibling;
}
var oe = null, Xe = !1;
function ht(e, t, n) {
  for (n = n.child; n !== null; ) Xc(e, t, n), n = n.sibling;
}
function Xc(e, t, n) {
  if (et && typeof et.onCommitFiberUnmount == "function") try {
    et.onCommitFiberUnmount(Zi, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ce || yn(n, t);
    case 6:
      var r = oe, i = Xe;
      oe = null, ht(e, t, n), oe = r, Xe = i, oe !== null && (Xe ? (e = oe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : oe.removeChild(n.stateNode));
      break;
    case 18:
      oe !== null && (Xe ? (e = oe, n = n.stateNode, e.nodeType === 8 ? $l(e.parentNode, n) : e.nodeType === 1 && $l(e, n), vr(e)) : $l(oe, n.stateNode));
      break;
    case 4:
      r = oe, i = Xe, oe = n.stateNode.containerInfo, Xe = !0, ht(e, t, n), oe = r, Xe = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ce && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var l = i, o = l.destroy;
          l = l.tag, o !== void 0 && (l & 2 || l & 4) && Vo(n, t, o), i = i.next;
        } while (i !== r);
      }
      ht(e, t, n);
      break;
    case 1:
      if (!ce && (yn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        Z(n, t, u);
      }
      ht(e, t, n);
      break;
    case 21:
      ht(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ce = (r = ce) || n.memoizedState !== null, ht(e, t, n), ce = r) : ht(e, t, n);
      break;
    default:
      ht(e, t, n);
  }
}
function Ss(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new um()), t.forEach(function(r) {
      var i = gm.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function Ve(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var l = e, o = t, u = o;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            oe = u.stateNode, Xe = !1;
            break e;
          case 3:
            oe = u.stateNode.containerInfo, Xe = !0;
            break e;
          case 4:
            oe = u.stateNode.containerInfo, Xe = !0;
            break e;
        }
        u = u.return;
      }
      if (oe === null) throw Error(E(160));
      Xc(l, o, i), oe = null, Xe = !1;
      var a = i.alternate;
      a !== null && (a.return = null), i.return = null;
    } catch (s) {
      Z(i, t, s);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Qc(t, e), t = t.sibling;
}
function Qc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ve(t, e), Ke(e), r & 4) {
        try {
          ar(3, e, e.return), rl(3, e);
        } catch (x) {
          Z(e, e.return, x);
        }
        try {
          ar(5, e, e.return);
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      break;
    case 1:
      Ve(t, e), Ke(e), r & 512 && n !== null && yn(n, n.return);
      break;
    case 5:
      if (Ve(t, e), Ke(e), r & 512 && n !== null && yn(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          dr(i, "");
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var l = e.memoizedProps, o = n !== null ? n.memoizedProps : l, u = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          u === "input" && l.type === "radio" && l.name != null && mf(i, l), vo(u, o);
          var s = vo(u, l);
          for (o = 0; o < a.length; o += 2) {
            var f = a[o], h = a[o + 1];
            f === "style" ? xf(i, h) : f === "dangerouslySetInnerHTML" ? yf(i, h) : f === "children" ? dr(i, h) : vu(i, f, h, s);
          }
          switch (u) {
            case "input":
              fo(i, l);
              break;
            case "textarea":
              vf(i, l);
              break;
            case "select":
              var p = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!l.multiple;
              var y = l.value;
              y != null ? xn(i, !!l.multiple, y, !1) : p !== !!l.multiple && (l.defaultValue != null ? xn(
                i,
                !!l.multiple,
                l.defaultValue,
                !0
              ) : xn(i, !!l.multiple, l.multiple ? [] : "", !1));
          }
          i[Sr] = l;
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      break;
    case 6:
      if (Ve(t, e), Ke(e), r & 4) {
        if (e.stateNode === null) throw Error(E(162));
        i = e.stateNode, l = e.memoizedProps;
        try {
          i.nodeValue = l;
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      break;
    case 3:
      if (Ve(t, e), Ke(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        vr(t.containerInfo);
      } catch (x) {
        Z(e, e.return, x);
      }
      break;
    case 4:
      Ve(t, e), Ke(e);
      break;
    case 13:
      Ve(t, e), Ke(e), i = e.child, i.flags & 8192 && (l = i.memoizedState !== null, i.stateNode.isHidden = l, !l || i.alternate !== null && i.alternate.memoizedState !== null || (Zu = J())), r & 4 && Ss(e);
      break;
    case 22:
      if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (ce = (s = ce) || f, Ve(t, e), ce = s) : Ve(t, e), Ke(e), r & 8192) {
        if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !f && e.mode & 1) for (w = e, f = e.child; f !== null; ) {
          for (h = w = f; w !== null; ) {
            switch (p = w, y = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ar(4, p, p.return);
                break;
              case 1:
                yn(p, p.return);
                var g = p.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                  } catch (x) {
                    Z(r, n, x);
                  }
                }
                break;
              case 5:
                yn(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  Cs(h);
                  continue;
                }
            }
            y !== null ? (y.return = p, w = y) : Cs(h);
          }
          f = f.sibling;
        }
        e: for (f = null, h = e; ; ) {
          if (h.tag === 5) {
            if (f === null) {
              f = h;
              try {
                i = h.stateNode, s ? (l = i.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (u = h.stateNode, a = h.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = Ef("display", o));
              } catch (x) {
                Z(e, e.return, x);
              }
            }
          } else if (h.tag === 6) {
            if (f === null) try {
              h.stateNode.nodeValue = s ? "" : h.memoizedProps;
            } catch (x) {
              Z(e, e.return, x);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            f === h && (f = null), h = h.return;
          }
          f === h && (f = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      Ve(t, e), Ke(e), r & 4 && Ss(e);
      break;
    case 21:
      break;
    default:
      Ve(
        t,
        e
      ), Ke(e);
  }
}
function Ke(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Wc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (dr(i, ""), r.flags &= -33);
          var l = xs(e);
          Xo(e, l, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, u = xs(e);
          Wo(e, u, o);
          break;
        default:
          throw Error(E(161));
      }
    } catch (a) {
      Z(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function sm(e, t, n) {
  w = e, bc(e);
}
function bc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; w !== null; ) {
    var i = w, l = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || qr;
      if (!o) {
        var u = i.alternate, a = u !== null && u.memoizedState !== null || ce;
        u = qr;
        var s = ce;
        if (qr = o, (ce = a) && !s) for (w = i; w !== null; ) o = w, a = o.child, o.tag === 22 && o.memoizedState !== null ? Ts(i) : a !== null ? (a.return = o, w = a) : Ts(i);
        for (; l !== null; ) w = l, bc(l), l = l.sibling;
        w = i, qr = u, ce = s;
      }
      ws(e);
    } else i.subtreeFlags & 8772 && l !== null ? (l.return = i, w = l) : ws(e);
  }
}
function ws(e) {
  for (; w !== null; ) {
    var t = w;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ce || rl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ce) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : We(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var l = t.updateQueue;
            l !== null && os(t, l, r);
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
              os(t, o, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
              var a = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src);
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
                var f = s.memoizedState;
                if (f !== null) {
                  var h = f.dehydrated;
                  h !== null && vr(h);
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
            throw Error(E(163));
        }
        ce || t.flags & 512 && Go(t);
      } catch (p) {
        Z(t, t.return, p);
      }
    }
    if (t === e) {
      w = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, w = n;
      break;
    }
    w = t.return;
  }
}
function Cs(e) {
  for (; w !== null; ) {
    var t = w;
    if (t === e) {
      w = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, w = n;
      break;
    }
    w = t.return;
  }
}
function Ts(e) {
  for (; w !== null; ) {
    var t = w;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            rl(4, t);
          } catch (a) {
            Z(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Z(t, i, a);
            }
          }
          var l = t.return;
          try {
            Go(t);
          } catch (a) {
            Z(t, l, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Go(t);
          } catch (a) {
            Z(t, o, a);
          }
      }
    } catch (a) {
      Z(t, t.return, a);
    }
    if (t === e) {
      w = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, w = u;
      break;
    }
    w = t.return;
  }
}
var fm = Math.ceil, Bi = pt.ReactCurrentDispatcher, Qu = pt.ReactCurrentOwner, Fe = pt.ReactCurrentBatchConfig, B = 0, ie = null, q = null, ue = 0, Pe = 0, En = At(0), te = 0, Pr = null, Jt = 0, il = 0, bu = 0, sr = null, we = null, Zu = 0, Rn = 1 / 0, it = null, Ui = !1, Qo = null, kt = null, ei = !1, wt = null, zi = 0, fr = 0, bo = null, mi = -1, vi = 0;
function Ee() {
  return B & 6 ? J() : mi !== -1 ? mi : mi = J();
}
function Ot(e) {
  return e.mode & 1 ? B & 2 && ue !== 0 ? ue & -ue : Qh.transition !== null ? (vi === 0 && (vi = Rf()), vi) : (e = U, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Uf(e.type)), e) : 1;
}
function Ze(e, t, n, r) {
  if (50 < fr) throw fr = 0, bo = null, Error(E(185));
  Or(e, n, r), (!(B & 2) || e !== ie) && (e === ie && (!(B & 2) && (il |= n), te === 4 && xt(e, ue)), Ne(e, r), n === 1 && B === 0 && !(t.mode & 1) && (Rn = J() + 500, el && Dt()));
}
function Ne(e, t) {
  var n = e.callbackNode;
  Qp(e, t);
  var r = Ci(e, e === ie ? ue : 0);
  if (r === 0) n !== null && Ma(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ma(n), t === 1) e.tag === 0 ? Xh(_s.bind(null, e)) : ic(_s.bind(null, e)), $h(function() {
      !(B & 6) && Dt();
    }), n = null;
    else {
      switch (Mf(r)) {
        case 1:
          n = Su;
          break;
        case 4:
          n = If;
          break;
        case 16:
          n = wi;
          break;
        case 536870912:
          n = Lf;
          break;
        default:
          n = wi;
      }
      n = nd(n, Zc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Zc(e, t) {
  if (mi = -1, vi = 0, B & 6) throw Error(E(327));
  var n = e.callbackNode;
  if (_n() && e.callbackNode !== n) return null;
  var r = Ci(e, e === ie ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ji(e, r);
  else {
    t = r;
    var i = B;
    B |= 2;
    var l = Kc();
    (ie !== e || ue !== t) && (it = null, Rn = J() + 500, Qt(e, t));
    do
      try {
        pm();
        break;
      } catch (u) {
        Yc(e, u);
      }
    while (!0);
    Au(), Bi.current = l, B = i, q !== null ? t = 0 : (ie = null, ue = 0, t = te);
  }
  if (t !== 0) {
    if (t === 2 && (i = So(e), i !== 0 && (r = i, t = Zo(e, i))), t === 1) throw n = Pr, Qt(e, 0), xt(e, r), Ne(e, J()), n;
    if (t === 6) xt(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !cm(i) && (t = ji(e, r), t === 2 && (l = So(e), l !== 0 && (r = l, t = Zo(e, l))), t === 1)) throw n = Pr, Qt(e, 0), xt(e, r), Ne(e, J()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          jt(e, we, it);
          break;
        case 3:
          if (xt(e, r), (r & 130023424) === r && (t = Zu + 500 - J(), 10 < t)) {
            if (Ci(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              Ee(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = Oo(jt.bind(null, e, we, it), t);
            break;
          }
          jt(e, we, it);
          break;
        case 4:
          if (xt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - be(r);
            l = 1 << o, o = t[o], o > i && (i = o), r &= ~l;
          }
          if (r = i, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * fm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Oo(jt.bind(null, e, we, it), r);
            break;
          }
          jt(e, we, it);
          break;
        case 5:
          jt(e, we, it);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Ne(e, J()), e.callbackNode === n ? Zc.bind(null, e) : null;
}
function Zo(e, t) {
  var n = sr;
  return e.current.memoizedState.isDehydrated && (Qt(e, t).flags |= 256), e = ji(e, t), e !== 2 && (t = we, we = n, t !== null && Yo(t)), e;
}
function Yo(e) {
  we === null ? we = e : we.push.apply(we, e);
}
function cm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], l = i.getSnapshot;
        i = i.value;
        try {
          if (!Ye(l(), i)) return !1;
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
function xt(e, t) {
  for (t &= ~bu, t &= ~il, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - be(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function _s(e) {
  if (B & 6) throw Error(E(327));
  _n();
  var t = Ci(e, 0);
  if (!(t & 1)) return Ne(e, J()), null;
  var n = ji(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = So(e);
    r !== 0 && (t = r, n = Zo(e, r));
  }
  if (n === 1) throw n = Pr, Qt(e, 0), xt(e, t), Ne(e, J()), n;
  if (n === 6) throw Error(E(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, jt(e, we, it), Ne(e, J()), null;
}
function Yu(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    B = n, B === 0 && (Rn = J() + 500, el && Dt());
  }
}
function qt(e) {
  wt !== null && wt.tag === 0 && !(B & 6) && _n();
  var t = B;
  B |= 1;
  var n = Fe.transition, r = U;
  try {
    if (Fe.transition = null, U = 1, e) return e();
  } finally {
    U = r, Fe.transition = n, B = t, !(B & 6) && Dt();
  }
}
function Ku() {
  Pe = En.current, G(En);
}
function Qt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, jh(n)), q !== null) for (n = q.return; n !== null; ) {
    var r = n;
    switch (Lu(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ki();
        break;
      case 3:
        In(), G(Te), G(de), zu();
        break;
      case 5:
        Uu(r);
        break;
      case 4:
        In();
        break;
      case 13:
        G(X);
        break;
      case 19:
        G(X);
        break;
      case 10:
        Du(r.type._context);
        break;
      case 22:
      case 23:
        Ku();
    }
    n = n.return;
  }
  if (ie = e, q = e = It(e.current, null), ue = Pe = t, te = 0, Pr = null, bu = il = Jt = 0, we = sr = null, Gt !== null) {
    for (t = 0; t < Gt.length; t++) if (n = Gt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, l = n.pending;
      if (l !== null) {
        var o = l.next;
        l.next = i, r.next = o;
      }
      n.pending = r;
    }
    Gt = null;
  }
  return e;
}
function Yc(e, t) {
  do {
    var n = q;
    try {
      if (Au(), di.current = Fi, Hi) {
        for (var r = Q.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        Hi = !1;
      }
      if (Kt = 0, re = ee = Q = null, ur = !1, Tr = 0, Qu.current = null, n === null || n.return === null) {
        te = 1, Pr = t, q = null;
        break;
      }
      e: {
        var l = e, o = n.return, u = n, a = t;
        if (t = ue, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var s = a, f = u, h = f.tag;
          if (!(f.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = f.alternate;
            p ? (f.updateQueue = p.updateQueue, f.memoizedState = p.memoizedState, f.lanes = p.lanes) : (f.updateQueue = null, f.memoizedState = null);
          }
          var y = ds(o);
          if (y !== null) {
            y.flags &= -257, ps(y, o, u, l, t), y.mode & 1 && cs(l, s, t), t = y, a = s;
            var g = t.updateQueue;
            if (g === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(a), t.updateQueue = x;
            } else g.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              cs(l, s, t), Ju();
              break e;
            }
            a = Error(E(426));
          }
        } else if (W && u.mode & 1) {
          var I = ds(o);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256), ps(I, o, u, l, t), Ru(Ln(a, u));
            break e;
          }
        }
        l = a = Ln(a, u), te !== 4 && (te = 2), sr === null ? sr = [l] : sr.push(l), l = o;
        do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, t &= -t, l.lanes |= t;
              var d = Mc(l, a, t);
              ls(l, d);
              break e;
            case 1:
              u = a;
              var c = l.type, m = l.stateNode;
              if (!(l.flags & 128) && (typeof c.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (kt === null || !kt.has(m)))) {
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var v = Ac(l, u, t);
                ls(l, v);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      qc(n);
    } catch (S) {
      t = S, q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Kc() {
  var e = Bi.current;
  return Bi.current = Fi, e === null ? Fi : e;
}
function Ju() {
  (te === 0 || te === 3 || te === 2) && (te = 4), ie === null || !(Jt & 268435455) && !(il & 268435455) || xt(ie, ue);
}
function ji(e, t) {
  var n = B;
  B |= 2;
  var r = Kc();
  (ie !== e || ue !== t) && (it = null, Qt(e, t));
  do
    try {
      dm();
      break;
    } catch (i) {
      Yc(e, i);
    }
  while (!0);
  if (Au(), B = n, Bi.current = r, q !== null) throw Error(E(261));
  return ie = null, ue = 0, te;
}
function dm() {
  for (; q !== null; ) Jc(q);
}
function pm() {
  for (; q !== null && !Bp(); ) Jc(q);
}
function Jc(e) {
  var t = td(e.alternate, e, Pe);
  e.memoizedProps = e.pendingProps, t === null ? qc(e) : q = t, Qu.current = null;
}
function qc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = om(n, t), n !== null) {
        n.flags &= 32767, q = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        te = 6, q = null;
        return;
      }
    } else if (n = lm(n, t, Pe), n !== null) {
      q = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  te === 0 && (te = 5);
}
function jt(e, t, n) {
  var r = U, i = Fe.transition;
  try {
    Fe.transition = null, U = 1, hm(e, t, n, r);
  } finally {
    Fe.transition = i, U = r;
  }
  return null;
}
function hm(e, t, n, r) {
  do
    _n();
  while (wt !== null);
  if (B & 6) throw Error(E(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(E(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if (bp(e, l), e === ie && (q = ie = null, ue = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ei || (ei = !0, nd(wi, function() {
    return _n(), null;
  })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = Fe.transition, Fe.transition = null;
    var o = U;
    U = 1;
    var u = B;
    B |= 4, Qu.current = null, am(e, n), Qc(n, e), Ah(Po), Ti = !!No, Po = No = null, e.current = n, sm(n), Up(), B = u, U = o, Fe.transition = l;
  } else e.current = n;
  if (ei && (ei = !1, wt = e, zi = i), l = e.pendingLanes, l === 0 && (kt = null), $p(n.stateNode), Ne(e, J()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ui) throw Ui = !1, e = Qo, Qo = null, e;
  return zi & 1 && e.tag !== 0 && _n(), l = e.pendingLanes, l & 1 ? e === bo ? fr++ : (fr = 0, bo = e) : fr = 0, Dt(), null;
}
function _n() {
  if (wt !== null) {
    var e = Mf(zi), t = Fe.transition, n = U;
    try {
      if (Fe.transition = null, U = 16 > e ? 16 : e, wt === null) var r = !1;
      else {
        if (e = wt, wt = null, zi = 0, B & 6) throw Error(E(331));
        var i = B;
        for (B |= 4, w = e.current; w !== null; ) {
          var l = w, o = l.child;
          if (w.flags & 16) {
            var u = l.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (w = s; w !== null; ) {
                  var f = w;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ar(8, f, l);
                  }
                  var h = f.child;
                  if (h !== null) h.return = f, w = h;
                  else for (; w !== null; ) {
                    f = w;
                    var p = f.sibling, y = f.return;
                    if (Gc(f), f === s) {
                      w = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = y, w = p;
                      break;
                    }
                    w = y;
                  }
                }
              }
              var g = l.alternate;
              if (g !== null) {
                var x = g.child;
                if (x !== null) {
                  g.child = null;
                  do {
                    var I = x.sibling;
                    x.sibling = null, x = I;
                  } while (x !== null);
                }
              }
              w = l;
            }
          }
          if (l.subtreeFlags & 2064 && o !== null) o.return = l, w = o;
          else e: for (; w !== null; ) {
            if (l = w, l.flags & 2048) switch (l.tag) {
              case 0:
              case 11:
              case 15:
                ar(9, l, l.return);
            }
            var d = l.sibling;
            if (d !== null) {
              d.return = l.return, w = d;
              break e;
            }
            w = l.return;
          }
        }
        var c = e.current;
        for (w = c; w !== null; ) {
          o = w;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) m.return = o, w = m;
          else e: for (o = c; w !== null; ) {
            if (u = w, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  rl(9, u);
              }
            } catch (S) {
              Z(u, u.return, S);
            }
            if (u === o) {
              w = null;
              break e;
            }
            var v = u.sibling;
            if (v !== null) {
              v.return = u.return, w = v;
              break e;
            }
            w = u.return;
          }
        }
        if (B = i, Dt(), et && typeof et.onPostCommitFiberRoot == "function") try {
          et.onPostCommitFiberRoot(Zi, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      U = n, Fe.transition = t;
    }
  }
  return !1;
}
function Ns(e, t, n) {
  t = Ln(n, t), t = Mc(e, t, 1), e = Pt(e, t, 1), t = Ee(), e !== null && (Or(e, 1, t), Ne(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) Ns(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ns(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (kt === null || !kt.has(r))) {
        e = Ln(n, e), e = Ac(t, e, 1), t = Pt(t, e, 1), e = Ee(), t !== null && (Or(t, 1, e), Ne(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function mm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ee(), e.pingedLanes |= e.suspendedLanes & n, ie === e && (ue & n) === n && (te === 4 || te === 3 && (ue & 130023424) === ue && 500 > J() - Zu ? Qt(e, 0) : bu |= n), Ne(e, t);
}
function ed(e, t) {
  t === 0 && (e.mode & 1 ? (t = Gr, Gr <<= 1, !(Gr & 130023424) && (Gr = 4194304)) : t = 1);
  var n = Ee();
  e = ct(e, t), e !== null && (Or(e, t, n), Ne(e, n));
}
function vm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), ed(e, n);
}
function gm(e, t) {
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
      throw Error(E(314));
  }
  r !== null && r.delete(t), ed(e, n);
}
var td;
td = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Te.current) Ce = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ce = !1, im(e, t, n);
    Ce = !!(e.flags & 131072);
  }
  else Ce = !1, W && t.flags & 1048576 && lc(t, Li, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      hi(e, t), e = t.pendingProps;
      var i = Pn(t, de.current);
      Tn(t, n), i = $u(null, t, r, e, i, n);
      var l = Vu();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, _e(r) ? (l = !0, Oi(t)) : l = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Fu(t), i.updater = nl, t.stateNode = i, i._reactInternals = t, Ho(t, r, e, n), t = Uo(null, t, r, !0, l, n)) : (t.tag = 0, W && l && Iu(t), he(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (hi(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Em(r), e = We(r, e), i) {
          case 0:
            t = Bo(null, t, r, e, n);
            break e;
          case 1:
            t = vs(null, t, r, e, n);
            break e;
          case 11:
            t = hs(null, t, r, e, n);
            break e;
          case 14:
            t = ms(null, t, r, We(r.type, e), n);
            break e;
        }
        throw Error(E(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : We(r, i), Bo(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : We(r, i), vs(e, t, r, i, n);
    case 3:
      e: {
        if (Bc(t), e === null) throw Error(E(387));
        r = t.pendingProps, l = t.memoizedState, i = l.element, cc(e, t), Ai(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, l.isDehydrated) if (l = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
          i = Ln(Error(E(423)), t), t = gs(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = Ln(Error(E(424)), t), t = gs(e, t, r, n, i);
          break e;
        } else for (ke = Nt(t.stateNode.containerInfo.firstChild), Oe = t, W = !0, Qe = null, n = sc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (kn(), r === i) {
            t = dt(e, t, n);
            break e;
          }
          he(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return dc(t), e === null && Mo(t), r = t.type, i = t.pendingProps, l = e !== null ? e.memoizedProps : null, o = i.children, ko(r, i) ? o = null : l !== null && ko(r, l) && (t.flags |= 32), Fc(e, t), he(e, t, o, n), t.child;
    case 6:
      return e === null && Mo(t), null;
    case 13:
      return Uc(e, t, n);
    case 4:
      return Bu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = On(t, null, r, n) : he(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : We(r, i), hs(e, t, r, i, n);
    case 7:
      return he(e, t, t.pendingProps, n), t.child;
    case 8:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, l = t.memoizedProps, o = i.value, j(Ri, r._currentValue), r._currentValue = o, l !== null) if (Ye(l.value, o)) {
          if (l.children === i.children && !Te.current) {
            t = dt(e, t, n);
            break e;
          }
        } else for (l = t.child, l !== null && (l.return = t); l !== null; ) {
          var u = l.dependencies;
          if (u !== null) {
            o = l.child;
            for (var a = u.firstContext; a !== null; ) {
              if (a.context === r) {
                if (l.tag === 1) {
                  a = at(-1, n & -n), a.tag = 2;
                  var s = l.updateQueue;
                  if (s !== null) {
                    s = s.shared;
                    var f = s.pending;
                    f === null ? a.next = a : (a.next = f.next, f.next = a), s.pending = a;
                  }
                }
                l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), Ao(
                  l.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (l.tag === 10) o = l.type === t.type ? null : l.child;
          else if (l.tag === 18) {
            if (o = l.return, o === null) throw Error(E(341));
            o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Ao(o, n, t), o = l.sibling;
          } else o = l.child;
          if (o !== null) o.return = l;
          else for (o = l; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (l = o.sibling, l !== null) {
              l.return = o.return, o = l;
              break;
            }
            o = o.return;
          }
          l = o;
        }
        he(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, Tn(t, n), i = Be(i), r = r(i), t.flags |= 1, he(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = We(r, t.pendingProps), i = We(r.type, i), ms(e, t, r, i, n);
    case 15:
      return Dc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : We(r, i), hi(e, t), t.tag = 1, _e(r) ? (e = !0, Oi(t)) : e = !1, Tn(t, n), Rc(t, r, i), Ho(t, r, i, n), Uo(null, t, r, !0, e, n);
    case 19:
      return zc(e, t, n);
    case 22:
      return Hc(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function nd(e, t) {
  return Of(e, t);
}
function ym(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function He(e, t, n, r) {
  return new ym(e, t, n, r);
}
function qu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Em(e) {
  if (typeof e == "function") return qu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === yu) return 11;
    if (e === Eu) return 14;
  }
  return 2;
}
function It(e, t) {
  var n = e.alternate;
  return n === null ? (n = He(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function gi(e, t, n, r, i, l) {
  var o = 2;
  if (r = e, typeof e == "function") qu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case sn:
      return bt(n.children, i, l, t);
    case gu:
      o = 8, i |= 8;
      break;
    case lo:
      return e = He(12, n, t, i | 2), e.elementType = lo, e.lanes = l, e;
    case oo:
      return e = He(13, n, t, i), e.elementType = oo, e.lanes = l, e;
    case uo:
      return e = He(19, n, t, i), e.elementType = uo, e.lanes = l, e;
    case df:
      return ll(n, i, l, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ff:
          o = 10;
          break e;
        case cf:
          o = 9;
          break e;
        case yu:
          o = 11;
          break e;
        case Eu:
          o = 14;
          break e;
        case mt:
          o = 16, r = null;
          break e;
      }
      throw Error(E(130, e == null ? e : typeof e, ""));
  }
  return t = He(o, n, t, i), t.elementType = e, t.type = r, t.lanes = l, t;
}
function bt(e, t, n, r) {
  return e = He(7, e, r, t), e.lanes = n, e;
}
function ll(e, t, n, r) {
  return e = He(22, e, r, t), e.elementType = df, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Yl(e, t, n) {
  return e = He(6, e, null, t), e.lanes = n, e;
}
function Kl(e, t, n) {
  return t = He(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function xm(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ll(0), this.expirationTimes = Ll(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ll(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function ea(e, t, n, r, i, l, o, u, a) {
  return e = new xm(e, t, n, u, a), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = He(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Fu(l), e;
}
function Sm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: an, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function rd(e) {
  if (!e) return Rt;
  e = e._reactInternals;
  e: {
    if (nn(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (_e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (_e(n)) return rc(e, n, t);
  }
  return t;
}
function id(e, t, n, r, i, l, o, u, a) {
  return e = ea(n, r, !0, e, i, l, o, u, a), e.context = rd(null), n = e.current, r = Ee(), i = Ot(n), l = at(r, i), l.callback = t ?? null, Pt(n, l, i), e.current.lanes = i, Or(e, i, r), Ne(e, r), e;
}
function ol(e, t, n, r) {
  var i = t.current, l = Ee(), o = Ot(i);
  return n = rd(n), t.context === null ? t.context = n : t.pendingContext = n, t = at(l, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Pt(i, t, o), e !== null && (Ze(e, i, o, l), ci(e, i, o)), o;
}
function $i(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ps(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ta(e, t) {
  Ps(e, t), (e = e.alternate) && Ps(e, t);
}
function wm() {
  return null;
}
var ld = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function na(e) {
  this._internalRoot = e;
}
ul.prototype.render = na.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  ol(e, t, null, null);
};
ul.prototype.unmount = na.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    qt(function() {
      ol(null, e, null, null);
    }), t[ft] = null;
  }
};
function ul(e) {
  this._internalRoot = e;
}
ul.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Hf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Et.length && t !== 0 && t < Et[n].priority; n++) ;
    Et.splice(n, 0, e), n === 0 && Bf(e);
  }
};
function ra(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function al(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ks() {
}
function Cm(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var s = $i(o);
        l.call(s);
      };
    }
    var o = id(t, r, e, 0, null, !1, !1, "", ks);
    return e._reactRootContainer = o, e[ft] = o.current, Er(e.nodeType === 8 ? e.parentNode : e), qt(), o;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var s = $i(a);
      u.call(s);
    };
  }
  var a = ea(e, 0, !1, null, null, !1, !1, "", ks);
  return e._reactRootContainer = a, e[ft] = a.current, Er(e.nodeType === 8 ? e.parentNode : e), qt(function() {
    ol(t, a, n, r);
  }), a;
}
function sl(e, t, n, r, i) {
  var l = n._reactRootContainer;
  if (l) {
    var o = l;
    if (typeof i == "function") {
      var u = i;
      i = function() {
        var a = $i(o);
        u.call(a);
      };
    }
    ol(t, o, e, i);
  } else o = Cm(n, t, e, i, r);
  return $i(o);
}
Af = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Jn(t.pendingLanes);
        n !== 0 && (wu(t, n | 1), Ne(t, J()), !(B & 6) && (Rn = J() + 500, Dt()));
      }
      break;
    case 13:
      qt(function() {
        var r = ct(e, 1);
        if (r !== null) {
          var i = Ee();
          Ze(r, e, 1, i);
        }
      }), ta(e, 1);
  }
};
Cu = function(e) {
  if (e.tag === 13) {
    var t = ct(e, 134217728);
    if (t !== null) {
      var n = Ee();
      Ze(t, e, 134217728, n);
    }
    ta(e, 134217728);
  }
};
Df = function(e) {
  if (e.tag === 13) {
    var t = Ot(e), n = ct(e, t);
    if (n !== null) {
      var r = Ee();
      Ze(n, e, t, r);
    }
    ta(e, t);
  }
};
Hf = function() {
  return U;
};
Ff = function(e, t) {
  var n = U;
  try {
    return U = e, t();
  } finally {
    U = n;
  }
};
yo = function(e, t, n) {
  switch (t) {
    case "input":
      if (fo(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = qi(r);
            if (!i) throw Error(E(90));
            hf(r), fo(r, i);
          }
        }
      }
      break;
    case "textarea":
      vf(e, n);
      break;
    case "select":
      t = n.value, t != null && xn(e, !!n.multiple, t, !1);
  }
};
Cf = Yu;
Tf = qt;
var Tm = { usingClientEntryPoint: !1, Events: [Lr, pn, qi, Sf, wf, Yu] }, bn = { findFiberByHostInstance: Vt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, _m = { bundleType: bn.bundleType, version: bn.version, rendererPackageName: bn.rendererPackageName, rendererConfig: bn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: pt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Pf(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: bn.findFiberByHostInstance || wm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ti.isDisabled && ti.supportsFiber) try {
    Zi = ti.inject(_m), et = ti;
  } catch {
  }
}
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tm;
Le.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ra(t)) throw Error(E(200));
  return Sm(e, t, null, n);
};
Le.createRoot = function(e, t) {
  if (!ra(e)) throw Error(E(299));
  var n = !1, r = "", i = ld;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = ea(e, 1, !1, null, null, n, !1, r, i), e[ft] = t.current, Er(e.nodeType === 8 ? e.parentNode : e), new na(t);
};
Le.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
  return e = Pf(t), e = e === null ? null : e.stateNode, e;
};
Le.flushSync = function(e) {
  return qt(e);
};
Le.hydrate = function(e, t, n) {
  if (!al(t)) throw Error(E(200));
  return sl(null, e, t, !0, n);
};
Le.hydrateRoot = function(e, t, n) {
  if (!ra(e)) throw Error(E(405));
  var r = n != null && n.hydratedSources || null, i = !1, l = "", o = ld;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = id(t, null, e, 1, n ?? null, i, !1, l, o), e[ft] = t.current, Er(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new ul(t);
};
Le.render = function(e, t, n) {
  if (!al(t)) throw Error(E(200));
  return sl(null, e, t, !1, n);
};
Le.unmountComponentAtNode = function(e) {
  if (!al(e)) throw Error(E(40));
  return e._reactRootContainer ? (qt(function() {
    sl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[ft] = null;
    });
  }), !0) : !1;
};
Le.unstable_batchedUpdates = Yu;
Le.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!al(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return sl(e, t, n, !1, r);
};
Le.version = "18.3.1-next-f1338f8080-20240426";
function od() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(od);
    } catch (e) {
      console.error(e);
    }
}
od(), of.exports = Le;
var ud = of.exports;
const ni = /* @__PURE__ */ Qi(ud);
var ad, Os = ud;
ad = Os.createRoot, Os.hydrateRoot;
var Ko = function(e, t) {
  return Ko = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Ko(e, t);
};
function ze(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Ko(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var _ = function() {
  return _ = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (t[l] = n[l]);
    }
    return t;
  }, _.apply(this, arguments);
};
function fl(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function ge(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, l; r < i; r++)
    (l || !(r in t)) && (l || (l = Array.prototype.slice.call(t, 0, r)), l[r] = t[r]);
  return e.concat(l || Array.prototype.slice.call(t));
}
function me(e, t) {
  var n = t && t.cache ? t.cache : Lm, r = t && t.serializer ? t.serializer : Im, i = t && t.strategy ? t.strategy : km;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function Nm(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Pm(e, t, n, r) {
  var i = Nm(r) ? r : n(r), l = t.get(i);
  return typeof l > "u" && (l = e.call(this, r), t.set(i, l)), l;
}
function sd(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), l = t.get(i);
  return typeof l > "u" && (l = e.apply(this, r), t.set(i, l)), l;
}
function fd(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function km(e, t) {
  var n = e.length === 1 ? Pm : sd;
  return fd(e, this, n, t.cache.create(), t.serializer);
}
function Om(e, t) {
  return fd(e, this, sd, t.cache.create(), t.serializer);
}
var Im = function() {
  return JSON.stringify(arguments);
};
function ia() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
ia.prototype.get = function(e) {
  return this.cache[e];
};
ia.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var Lm = {
  create: function() {
    return new ia();
  }
}, ve = {
  variadic: Om
};
function cd(e, t, n) {
  if (n === void 0 && (n = Error), !e)
    throw new n(t);
}
me(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.NumberFormat).bind.apply(e, ge([void 0], t, !1)))();
}, {
  strategy: ve.variadic
});
me(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.DateTimeFormat).bind.apply(e, ge([void 0], t, !1)))();
}, {
  strategy: ve.variadic
});
me(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.PluralRules).bind.apply(e, ge([void 0], t, !1)))();
}, {
  strategy: ve.variadic
});
me(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.Locale).bind.apply(e, ge([void 0], t, !1)))();
}, {
  strategy: ve.variadic
});
me(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.ListFormat).bind.apply(e, ge([void 0], t, !1)))();
}, {
  strategy: ve.variadic
});
var H;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(H || (H = {}));
var V;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(V || (V = {}));
var Mn;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(Mn || (Mn = {}));
function Is(e) {
  return e.type === V.literal;
}
function Rm(e) {
  return e.type === V.argument;
}
function dd(e) {
  return e.type === V.number;
}
function pd(e) {
  return e.type === V.date;
}
function hd(e) {
  return e.type === V.time;
}
function md(e) {
  return e.type === V.select;
}
function vd(e) {
  return e.type === V.plural;
}
function Mm(e) {
  return e.type === V.pound;
}
function gd(e) {
  return e.type === V.tag;
}
function yd(e) {
  return !!(e && typeof e == "object" && e.type === Mn.number);
}
function Jo(e) {
  return !!(e && typeof e == "object" && e.type === Mn.dateTime);
}
var Ed = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Am = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Dm(e) {
  var t = {};
  return e.replace(Am, function(n) {
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
var Hm = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Fm(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(Hm).filter(function(p) {
    return p.length > 0;
  }), n = [], r = 0, i = t; r < i.length; r++) {
    var l = i[r], o = l.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var u = o[0], a = o.slice(1), s = 0, f = a; s < f.length; s++) {
      var h = f[s];
      if (h.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: u, options: a });
  }
  return n;
}
function Bm(e) {
  return e.replace(/^(.*?)-/, "");
}
var Ls = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, xd = /^(@+)?(\+|#+)?[rs]?$/g, Um = /(\*)(0+)|(#+)(0+)|(0+)/g, Sd = /^(0+)$/;
function Rs(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(xd, function(n, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function wd(e) {
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
function zm(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Sd.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Ms(e) {
  var t = {}, n = wd(e);
  return n || t;
}
function jm(e) {
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
        t.style = "unit", t.unit = Bm(i.options[0]);
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
        t = _(_(_({}, t), { notation: "scientific" }), i.options.reduce(function(a, s) {
          return _(_({}, a), Ms(s));
        }, {}));
        continue;
      case "engineering":
        t = _(_(_({}, t), { notation: "engineering" }), i.options.reduce(function(a, s) {
          return _(_({}, a), Ms(s));
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
        i.options[0].replace(Um, function(a, s, f, h, p, y) {
          if (s)
            t.minimumIntegerDigits = f.length;
          else {
            if (h && p)
              throw new Error("We currently do not support maximum integer digits");
            if (y)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Sd.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Ls.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Ls, function(a, s, f, h, p, y) {
        return f === "*" ? t.minimumFractionDigits = s.length : h && h[0] === "#" ? t.maximumFractionDigits = h.length : p && y ? (t.minimumFractionDigits = p.length, t.maximumFractionDigits = p.length + y.length) : (t.minimumFractionDigits = s.length, t.maximumFractionDigits = s.length), "";
      });
      var l = i.options[0];
      l === "w" ? t = _(_({}, t), { trailingZeroDisplay: "stripIfInteger" }) : l && (t = _(_({}, t), Rs(l)));
      continue;
    }
    if (xd.test(i.stem)) {
      t = _(_({}, t), Rs(i.stem));
      continue;
    }
    var o = wd(i.stem);
    o && (t = _(_({}, t), o));
    var u = zm(i.stem);
    u && (t = _(_({}, t), u));
  }
  return t;
}
var ri = {
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
function $m(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var l = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        l++, r++;
      var o = 1 + (l & 1), u = l < 2 ? 1 : 3 + (l >> 1), a = "a", s = Vm(t);
      for ((s == "H" || s == "k") && (u = 0); u-- > 0; )
        n += a;
      for (; o-- > 0; )
        n = s + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function Vm(e) {
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
  var i = ri[r || ""] || ri[n || ""] || ri["".concat(n, "-001")] || ri["001"];
  return i[0];
}
var Jl, Gm = new RegExp("^".concat(Ed.source, "*")), Wm = new RegExp("".concat(Ed.source, "*$"));
function F(e, t) {
  return { start: e, end: t };
}
var Xm = !!String.prototype.startsWith && "_a".startsWith("a", 1), Qm = !!String.fromCodePoint, bm = !!Object.fromEntries, Zm = !!String.prototype.codePointAt, Ym = !!String.prototype.trimStart, Km = !!String.prototype.trimEnd, Jm = !!Number.isSafeInteger, qm = Jm ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, qo = !0;
try {
  var ev = Td("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  qo = ((Jl = ev.exec("a")) === null || Jl === void 0 ? void 0 : Jl[0]) === "a";
} catch {
  qo = !1;
}
var As = Xm ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), eu = Qm ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    for (var r = "", i = t.length, l = 0, o; i > l; ) {
      if (o = t[l++], o > 1114111)
        throw RangeError(o + " is not a valid code point");
      r += o < 65536 ? String.fromCharCode(o) : String.fromCharCode(((o -= 65536) >> 10) + 55296, o % 1024 + 56320);
    }
    return r;
  }
), Ds = (
  // native
  bm ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var l = i[r], o = l[0], u = l[1];
        n[o] = u;
      }
      return n;
    }
  )
), Cd = Zm ? (
  // Native
  function(t, n) {
    return t.codePointAt(n);
  }
) : (
  // IE 11
  function(t, n) {
    var r = t.length;
    if (!(n < 0 || n >= r)) {
      var i = t.charCodeAt(n), l;
      return i < 55296 || i > 56319 || n + 1 === r || (l = t.charCodeAt(n + 1)) < 56320 || l > 57343 ? i : (i - 55296 << 10) + (l - 56320) + 65536;
    }
  }
), tv = Ym ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Gm, "");
  }
), nv = Km ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Wm, "");
  }
);
function Td(e, t) {
  return new RegExp(e, t);
}
var tu;
if (qo) {
  var Hs = Td("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  tu = function(t, n) {
    var r;
    Hs.lastIndex = n;
    var i = Hs.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  tu = function(t, n) {
    for (var r = []; ; ) {
      var i = Cd(t, n);
      if (i === void 0 || _d(i) || ov(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return eu.apply(void 0, r);
  };
var rv = (
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
        var l = this.char();
        if (l === 123) {
          var o = this.parseArgument(t, r);
          if (o.err)
            return o;
          i.push(o.val);
        } else {
          if (l === 125 && t > 0)
            break;
          if (l === 35 && (n === "plural" || n === "selectordinal")) {
            var u = this.clonePosition();
            this.bump(), i.push({
              type: V.pound,
              location: F(u, this.clonePosition())
            });
          } else if (l === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(H.UNMATCHED_CLOSING_TAG, F(this.clonePosition(), this.clonePosition()));
          } else if (l === 60 && !this.ignoreTag && nu(this.peek() || 0)) {
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
            type: V.literal,
            value: "<".concat(i, "/>"),
            location: F(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var l = this.parseMessage(t + 1, n, !0);
        if (l.err)
          return l;
        var o = l.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !nu(this.char()))
            return this.error(H.INVALID_TAG, F(u, this.clonePosition()));
          var a = this.clonePosition(), s = this.parseTagName();
          return i !== s ? this.error(H.UNMATCHED_CLOSING_TAG, F(a, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: V.tag,
              value: i,
              children: o,
              location: F(r, this.clonePosition())
            },
            err: null
          } : this.error(H.INVALID_TAG, F(u, this.clonePosition())));
        } else
          return this.error(H.UNCLOSED_TAG, F(r, this.clonePosition()));
      } else
        return this.error(H.INVALID_TAG, F(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && lv(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var l = this.tryParseQuote(n);
        if (l) {
          i += l;
          continue;
        }
        var o = this.tryParseUnquoted(t, n);
        if (o) {
          i += o;
          continue;
        }
        var u = this.tryParseLeftAngleBracket();
        if (u) {
          i += u;
          continue;
        }
        break;
      }
      var a = F(r, this.clonePosition());
      return {
        val: { type: V.literal, value: i, location: a },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !iv(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return eu.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), eu(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(H.EXPECT_ARGUMENT_CLOSING_BRACE, F(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(H.EMPTY_ARGUMENT, F(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(H.MALFORMED_ARGUMENT, F(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(H.EXPECT_ARGUMENT_CLOSING_BRACE, F(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: V.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: F(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(H.EXPECT_ARGUMENT_CLOSING_BRACE, F(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(H.MALFORMED_ARGUMENT, F(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = tu(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var l = this.clonePosition(), o = F(t, l);
      return { value: r, location: o };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var l, o = this.clonePosition(), u = this.parseIdentifierIfPossible().value, a = this.clonePosition();
      switch (u) {
        case "":
          return this.error(H.EXPECT_ARGUMENT_TYPE, F(o, a));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var s = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var f = this.clonePosition(), h = this.parseSimpleArgStyleIfPossible();
            if (h.err)
              return h;
            var p = nv(h.val);
            if (p.length === 0)
              return this.error(H.EXPECT_ARGUMENT_STYLE, F(this.clonePosition(), this.clonePosition()));
            var y = F(f, this.clonePosition());
            s = { style: p, styleLocation: y };
          }
          var g = this.tryParseArgumentClose(i);
          if (g.err)
            return g;
          var x = F(i, this.clonePosition());
          if (s && As(s == null ? void 0 : s.style, "::", 0)) {
            var I = tv(s.style.slice(2));
            if (u === "number") {
              var h = this.parseNumberSkeletonFromString(I, s.styleLocation);
              return h.err ? h : {
                val: { type: V.number, value: r, location: x, style: h.val },
                err: null
              };
            } else {
              if (I.length === 0)
                return this.error(H.EXPECT_DATE_TIME_SKELETON, x);
              var d = I;
              this.locale && (d = $m(I, this.locale));
              var p = {
                type: Mn.dateTime,
                pattern: d,
                location: s.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Dm(d) : {}
              }, c = u === "date" ? V.date : V.time;
              return {
                val: { type: c, value: r, location: x, style: p },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? V.number : u === "date" ? V.date : V.time,
              value: r,
              location: x,
              style: (l = s == null ? void 0 : s.style) !== null && l !== void 0 ? l : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var m = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(H.EXPECT_SELECT_ARGUMENT_OPTIONS, F(m, _({}, m)));
          this.bumpSpace();
          var v = this.parseIdentifierIfPossible(), S = 0;
          if (u !== "select" && v.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(H.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, F(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger(H.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, H.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), v = this.parseIdentifierIfPossible(), S = h.val;
          }
          var T = this.tryParsePluralOrSelectOptions(t, u, n, v);
          if (T.err)
            return T;
          var g = this.tryParseArgumentClose(i);
          if (g.err)
            return g;
          var P = F(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: V.select,
              value: r,
              options: Ds(T.val),
              location: P
            },
            err: null
          } : {
            val: {
              type: V.plural,
              value: r,
              options: Ds(T.val),
              offset: S,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: P
            },
            err: null
          };
        }
        default:
          return this.error(H.INVALID_ARGUMENT_TYPE, F(o, a));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(H.EXPECT_ARGUMENT_CLOSING_BRACE, F(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(H.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, F(i, this.clonePosition()));
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
        r = Fm(t);
      } catch {
        return this.error(H.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Mn.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? jm(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var l, o = !1, u = [], a = /* @__PURE__ */ new Set(), s = i.value, f = i.location; ; ) {
        if (s.length === 0) {
          var h = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var p = this.tryParseDecimalInteger(H.EXPECT_PLURAL_ARGUMENT_SELECTOR, H.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (p.err)
              return p;
            f = F(h, this.clonePosition()), s = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (a.has(s))
          return this.error(n === "select" ? H.DUPLICATE_SELECT_ARGUMENT_SELECTOR : H.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, f);
        s === "other" && (o = !0), this.bumpSpace();
        var y = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? H.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : H.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, F(this.clonePosition(), this.clonePosition()));
        var g = this.parseMessage(t + 1, n, r);
        if (g.err)
          return g;
        var x = this.tryParseArgumentClose(y);
        if (x.err)
          return x;
        u.push([
          s,
          {
            value: g.val,
            location: F(y, this.clonePosition())
          }
        ]), a.add(s), this.bumpSpace(), l = this.parseIdentifierIfPossible(), s = l.value, f = l.location;
      }
      return u.length === 0 ? this.error(n === "select" ? H.EXPECT_SELECT_ARGUMENT_SELECTOR : H.EXPECT_PLURAL_ARGUMENT_SELECTOR, F(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(H.MISSING_OTHER_CLAUSE, F(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var l = !1, o = 0; !this.isEOF(); ) {
        var u = this.char();
        if (u >= 48 && u <= 57)
          l = !0, o = o * 10 + (u - 48), this.bump();
        else
          break;
      }
      var a = F(i, this.clonePosition());
      return l ? (o *= r, qm(o) ? { val: o, err: null } : this.error(n, a)) : this.error(t, a);
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
      var n = Cd(this.message, t);
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
      if (As(this.message, t, this.offset())) {
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
      for (; !this.isEOF() && _d(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function nu(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function iv(e) {
  return nu(e) || e === 47;
}
function lv(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function _d(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function ov(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function ru(e) {
  e.forEach(function(t) {
    if (delete t.location, md(t) || vd(t))
      for (var n in t.options)
        delete t.options[n].location, ru(t.options[n].value);
    else dd(t) && yd(t.style) || (pd(t) || hd(t)) && Jo(t.style) ? delete t.style.location : gd(t) && ru(t.children);
  });
}
function uv(e, t) {
  t === void 0 && (t = {}), t = _({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new rv(e, t).parse();
  if (n.err) {
    var r = SyntaxError(H[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || ru(n.val), n.val;
}
var nt;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(nt || (nt = {}));
var Ht = (
  /** @class */
  function(e) {
    ze(t, e);
    function t(n, r, i) {
      var l = e.call(this, n) || this;
      return l.code = r, l.originalMessage = i, l;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Fs = (
  /** @class */
  function(e) {
    ze(t, e);
    function t(n, r, i, l) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), nt.INVALID_VALUE, l) || this;
    }
    return t;
  }(Ht)
), av = (
  /** @class */
  function(e) {
    ze(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), nt.INVALID_VALUE, i) || this;
    }
    return t;
  }(Ht)
), sv = (
  /** @class */
  function(e) {
    ze(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), nt.MISSING_VALUE, r) || this;
    }
    return t;
  }(Ht)
), pe;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(pe || (pe = {}));
function fv(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== pe.literal || n.type !== pe.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function Nd(e) {
  return typeof e == "function";
}
function yi(e, t, n, r, i, l, o) {
  if (e.length === 1 && Is(e[0]))
    return [
      {
        type: pe.literal,
        value: e[0].value
      }
    ];
  for (var u = [], a = 0, s = e; a < s.length; a++) {
    var f = s[a];
    if (Is(f)) {
      u.push({
        type: pe.literal,
        value: f.value
      });
      continue;
    }
    if (Mm(f)) {
      typeof l == "number" && u.push({
        type: pe.literal,
        value: n.getNumberFormat(t).format(l)
      });
      continue;
    }
    var h = f.value;
    if (!(i && h in i))
      throw new sv(h, o);
    var p = i[h];
    if (Rm(f)) {
      (!p || typeof p == "string" || typeof p == "number") && (p = typeof p == "string" || typeof p == "number" ? String(p) : ""), u.push({
        type: typeof p == "string" ? pe.literal : pe.object,
        value: p
      });
      continue;
    }
    if (pd(f)) {
      var y = typeof f.style == "string" ? r.date[f.style] : Jo(f.style) ? f.style.parsedOptions : void 0;
      u.push({
        type: pe.literal,
        value: n.getDateTimeFormat(t, y).format(p)
      });
      continue;
    }
    if (hd(f)) {
      var y = typeof f.style == "string" ? r.time[f.style] : Jo(f.style) ? f.style.parsedOptions : r.time.medium;
      u.push({
        type: pe.literal,
        value: n.getDateTimeFormat(t, y).format(p)
      });
      continue;
    }
    if (dd(f)) {
      var y = typeof f.style == "string" ? r.number[f.style] : yd(f.style) ? f.style.parsedOptions : void 0;
      y && y.scale && (p = p * (y.scale || 1)), u.push({
        type: pe.literal,
        value: n.getNumberFormat(t, y).format(p)
      });
      continue;
    }
    if (gd(f)) {
      var g = f.children, x = f.value, I = i[x];
      if (!Nd(I))
        throw new av(x, "function", o);
      var d = yi(g, t, n, r, i, l), c = I(d.map(function(S) {
        return S.value;
      }));
      Array.isArray(c) || (c = [c]), u.push.apply(u, c.map(function(S) {
        return {
          type: typeof S == "string" ? pe.literal : pe.object,
          value: S
        };
      }));
    }
    if (md(f)) {
      var m = f.options[p] || f.options.other;
      if (!m)
        throw new Fs(f.value, p, Object.keys(f.options), o);
      u.push.apply(u, yi(m.value, t, n, r, i));
      continue;
    }
    if (vd(f)) {
      var m = f.options["=".concat(p)];
      if (!m) {
        if (!Intl.PluralRules)
          throw new Ht(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, nt.MISSING_INTL_API, o);
        var v = n.getPluralRules(t, { type: f.pluralType }).select(p - (f.offset || 0));
        m = f.options[v] || f.options.other;
      }
      if (!m)
        throw new Fs(f.value, p, Object.keys(f.options), o);
      u.push.apply(u, yi(m.value, t, n, r, i, p - (f.offset || 0)));
      continue;
    }
  }
  return fv(u);
}
function cv(e, t) {
  return t ? _(_(_({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = _(_({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function dv(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = cv(e[r], t[r]), n;
  }, _({}, e)) : e;
}
function ql(e) {
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
function pv(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: me(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, ge([void 0], n, !1)))();
    }, {
      cache: ql(e.number),
      strategy: ve.variadic
    }),
    getDateTimeFormat: me(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, ge([void 0], n, !1)))();
    }, {
      cache: ql(e.dateTime),
      strategy: ve.variadic
    }),
    getPluralRules: me(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, ge([void 0], n, !1)))();
    }, {
      cache: ql(e.pluralRules),
      strategy: ve.variadic
    })
  };
}
var Pd = (
  /** @class */
  function() {
    function e(t, n, r, i) {
      n === void 0 && (n = e.defaultLocale);
      var l = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(a) {
        var s = l.formatToParts(a);
        if (s.length === 1)
          return s[0].value;
        var f = s.reduce(function(h, p) {
          return !h.length || p.type !== pe.literal || typeof h[h.length - 1] != "string" ? h.push(p.value) : h[h.length - 1] += p.value, h;
        }, []);
        return f.length <= 1 ? f[0] || "" : f;
      }, this.formatToParts = function(a) {
        return yi(l.ast, l.locales, l.formatters, l.formats, a, void 0, l.message);
      }, this.resolvedOptions = function() {
        var a;
        return {
          locale: ((a = l.resolvedLocale) === null || a === void 0 ? void 0 : a.toString()) || Intl.NumberFormat.supportedLocalesOf(l.locales)[0]
        };
      }, this.getAst = function() {
        return l.ast;
      }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var o = i || {};
        o.formatters;
        var u = fl(o, ["formatters"]);
        this.ast = e.__parse(t, _(_({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = dv(e.formats, r), this.formatters = i && i.formatters || pv(this.formatterCache);
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
    }, e.__parse = uv, e.formats = {
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
), en;
(function(e) {
  e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(en || (en = {}));
var Mr = (
  /** @class */
  function(e) {
    ze(t, e);
    function t(n, r, i) {
      var l = this, o = i ? i instanceof Error ? i : new Error(String(i)) : void 0;
      return l = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, `
`).concat(o ? `
`.concat(o.message, `
`).concat(o.stack) : "")) || this, l.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(l, t), l;
    }
    return t;
  }(Error)
), hv = (
  /** @class */
  function(e) {
    ze(t, e);
    function t(n, r) {
      return e.call(this, en.UNSUPPORTED_FORMATTER, n, r) || this;
    }
    return t;
  }(Mr)
), mv = (
  /** @class */
  function(e) {
    ze(t, e);
    function t(n, r) {
      return e.call(this, en.INVALID_CONFIG, n, r) || this;
    }
    return t;
  }(Mr)
), Bs = (
  /** @class */
  function(e) {
    ze(t, e);
    function t(n, r) {
      return e.call(this, en.MISSING_DATA, n, r) || this;
    }
    return t;
  }(Mr)
), je = (
  /** @class */
  function(e) {
    ze(t, e);
    function t(n, r, i) {
      var l = e.call(this, en.FORMAT_ERROR, "".concat(n, `
Locale: `).concat(r, `
`), i) || this;
      return l.locale = r, l;
    }
    return t;
  }(Mr)
), eo = (
  /** @class */
  function(e) {
    ze(t, e);
    function t(n, r, i, l) {
      var o = e.call(this, "".concat(n, `
MessageID: `).concat(i == null ? void 0 : i.id, `
Default Message: `).concat(i == null ? void 0 : i.defaultMessage, `
Description: `).concat(i == null ? void 0 : i.description, `
`), r, l) || this;
      return o.descriptor = i, o.locale = r, o;
    }
    return t;
  }(je)
), vv = (
  /** @class */
  function(e) {
    ze(t, e);
    function t(n, r) {
      var i = e.call(this, en.MISSING_TRANSLATION, 'Missing message: "'.concat(n.id, '" for locale "').concat(r, '", using ').concat(n.defaultMessage ? "default message (".concat(typeof n.defaultMessage == "string" ? n.defaultMessage : n.defaultMessage.map(function(l) {
        var o;
        return (o = l.value) !== null && o !== void 0 ? o : JSON.stringify(l);
      }).join(), ")") : "id", " as fallback.")) || this;
      return i.descriptor = n, i;
    }
    return t;
  }(Mr)
);
function rn(e, t, n) {
  return n === void 0 && (n = {}), t.reduce(function(r, i) {
    return i in e ? r[i] = e[i] : i in n && (r[i] = n[i]), r;
  }, {});
}
var gv = function(e) {
}, yv = function(e) {
}, kd = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: gv,
  onWarn: yv
};
function Od() {
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
function Ut(e) {
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
function Ev(e) {
  e === void 0 && (e = Od());
  var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, i = me(function() {
    for (var u, a = [], s = 0; s < arguments.length; s++)
      a[s] = arguments[s];
    return new ((u = Intl.DateTimeFormat).bind.apply(u, ge([void 0], a, !1)))();
  }, {
    cache: Ut(e.dateTime),
    strategy: ve.variadic
  }), l = me(function() {
    for (var u, a = [], s = 0; s < arguments.length; s++)
      a[s] = arguments[s];
    return new ((u = Intl.NumberFormat).bind.apply(u, ge([void 0], a, !1)))();
  }, {
    cache: Ut(e.number),
    strategy: ve.variadic
  }), o = me(function() {
    for (var u, a = [], s = 0; s < arguments.length; s++)
      a[s] = arguments[s];
    return new ((u = Intl.PluralRules).bind.apply(u, ge([void 0], a, !1)))();
  }, {
    cache: Ut(e.pluralRules),
    strategy: ve.variadic
  });
  return {
    getDateTimeFormat: i,
    getNumberFormat: l,
    getMessageFormat: me(function(u, a, s, f) {
      return new Pd(u, a, s, _({ formatters: {
        getNumberFormat: l,
        getDateTimeFormat: i,
        getPluralRules: o
      } }, f || {}));
    }, {
      cache: Ut(e.message),
      strategy: ve.variadic
    }),
    getRelativeTimeFormat: me(function() {
      for (var u = [], a = 0; a < arguments.length; a++)
        u[a] = arguments[a];
      return new (t.bind.apply(t, ge([void 0], u, !1)))();
    }, {
      cache: Ut(e.relativeTime),
      strategy: ve.variadic
    }),
    getPluralRules: o,
    getListFormat: me(function() {
      for (var u = [], a = 0; a < arguments.length; a++)
        u[a] = arguments[a];
      return new (n.bind.apply(n, ge([void 0], u, !1)))();
    }, {
      cache: Ut(e.list),
      strategy: ve.variadic
    }),
    getDisplayNames: me(function() {
      for (var u = [], a = 0; a < arguments.length; a++)
        u[a] = arguments[a];
      return new (r.bind.apply(r, ge([void 0], u, !1)))();
    }, {
      cache: Ut(e.displayNames),
      strategy: ve.variadic
    })
  };
}
function la(e, t, n, r) {
  var i = e && e[t], l;
  if (i && (l = i[n]), l)
    return l;
  r(new hv("No ".concat(t, " format named: ").concat(n)));
}
function ii(e, t) {
  return Object.keys(e).reduce(function(n, r) {
    return n[r] = _({ timeZone: t }, e[r]), n;
  }, {});
}
function Us(e, t) {
  var n = Object.keys(_(_({}, e), t));
  return n.reduce(function(r, i) {
    return r[i] = _(_({}, e[i] || {}), t[i] || {}), r;
  }, {});
}
function zs(e, t) {
  if (!t)
    return e;
  var n = Pd.formats;
  return _(_(_({}, n), e), { date: Us(ii(n.date, t), ii(e.date || {}, t)), time: Us(ii(n.time, t), ii(e.time || {}, t)) });
}
var iu = function(e, t, n, r, i) {
  var l = e.locale, o = e.formats, u = e.messages, a = e.defaultLocale, s = e.defaultFormats, f = e.fallbackOnEmptyString, h = e.onError, p = e.timeZone, y = e.defaultRichTextElements;
  n === void 0 && (n = { id: "" });
  var g = n.id, x = n.defaultMessage;
  cd(!!g, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var I = String(g), d = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    u && Object.prototype.hasOwnProperty.call(u, I) && u[I]
  );
  if (Array.isArray(d) && d.length === 1 && d[0].type === V.literal)
    return d[0].value;
  if (!r && d && typeof d == "string" && !y)
    return d.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (r = _(_({}, y), r || {}), o = zs(o, p), s = zs(s, p), !d) {
    if (f === !1 && d === "")
      return d;
    if ((!x || l && l.toLowerCase() !== a.toLowerCase()) && h(new vv(n, l)), x)
      try {
        var c = t.getMessageFormat(x, a, s, i);
        return c.format(r);
      } catch (m) {
        return h(new eo('Error formatting default message for: "'.concat(I, '", rendering default message verbatim'), l, n, m)), typeof x == "string" ? x : I;
      }
    return I;
  }
  try {
    var c = t.getMessageFormat(d, l, o, _({ formatters: t }, i || {}));
    return c.format(r);
  } catch (m) {
    h(new eo('Error formatting message: "'.concat(I, '", using ').concat(x ? "default message" : "id", " as fallback."), l, n, m));
  }
  if (x)
    try {
      var c = t.getMessageFormat(x, a, s, i);
      return c.format(r);
    } catch (m) {
      h(new eo('Error formatting the default message for: "'.concat(I, '", rendering message verbatim'), l, n, m));
    }
  return typeof d == "string" ? d : typeof x == "string" ? x : I;
}, Id = [
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
function cl(e, t, n, r) {
  var i = e.locale, l = e.formats, o = e.onError, u = e.timeZone;
  r === void 0 && (r = {});
  var a = r.format, s = _(_({}, u && { timeZone: u }), a && la(l, t, a, o)), f = rn(r, Id, s);
  return t === "time" && !f.hour && !f.minute && !f.second && !f.timeStyle && !f.dateStyle && (f = _(_({}, f), { hour: "numeric", minute: "numeric" })), n(i, f);
}
function xv(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], l = n[1], o = l === void 0 ? {} : l, u = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return cl(e, "date", t, o).format(u);
  } catch (a) {
    e.onError(new je("Error formatting date.", e.locale, a));
  }
  return String(u);
}
function Sv(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], l = n[1], o = l === void 0 ? {} : l, u = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return cl(e, "time", t, o).format(u);
  } catch (a) {
    e.onError(new je("Error formatting time.", e.locale, a));
  }
  return String(u);
}
function wv(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], l = n[1], o = n[2], u = o === void 0 ? {} : o, a = e.timeZone, s = e.locale, f = e.onError, h = rn(u, Id, a ? { timeZone: a } : {});
  try {
    return t(s, h).formatRange(i, l);
  } catch (p) {
    f(new je("Error formatting date time range.", e.locale, p));
  }
  return String(i);
}
function Cv(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], l = n[1], o = l === void 0 ? {} : l, u = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return cl(e, "date", t, o).formatToParts(u);
  } catch (a) {
    e.onError(new je("Error formatting date.", e.locale, a));
  }
  return [];
}
function Tv(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], l = n[1], o = l === void 0 ? {} : l, u = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return cl(e, "time", t, o).formatToParts(u);
  } catch (a) {
    e.onError(new je("Error formatting time.", e.locale, a));
  }
  return [];
}
var _v = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function Nv(e, t, n, r) {
  var i = e.locale, l = e.onError, o = Intl.DisplayNames;
  o || l(new Ht(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, nt.MISSING_INTL_API));
  var u = rn(r, _v);
  try {
    return t(i, u).of(n);
  } catch (a) {
    l(new je("Error formatting display name.", i, a));
  }
}
var Pv = [
  "type",
  "style"
], js = Date.now();
function kv(e) {
  return "".concat(js, "_").concat(e, "_").concat(js);
}
function Ov(e, t, n, r) {
  r === void 0 && (r = {});
  var i = Ld(e, t, n, r).reduce(function(l, o) {
    var u = o.value;
    return typeof u != "string" ? l.push(u) : typeof l[l.length - 1] == "string" ? l[l.length - 1] += u : l.push(u), l;
  }, []);
  return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function Ld(e, t, n, r) {
  var i = e.locale, l = e.onError;
  r === void 0 && (r = {});
  var o = Intl.ListFormat;
  o || l(new Ht(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, nt.MISSING_INTL_API));
  var u = rn(r, Pv);
  try {
    var a = {}, s = n.map(function(f, h) {
      if (typeof f == "object") {
        var p = kv(h);
        return a[p] = f, p;
      }
      return String(f);
    });
    return t(i, u).formatToParts(s).map(function(f) {
      return f.type === "literal" ? f : _(_({}, f), { value: a[f.value] || f.value });
    });
  } catch (f) {
    l(new je("Error formatting list.", i, f));
  }
  return n;
}
var Iv = ["type"];
function Lv(e, t, n, r) {
  var i = e.locale, l = e.onError;
  r === void 0 && (r = {}), Intl.PluralRules || l(new Ht(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, nt.MISSING_INTL_API));
  var o = rn(r, Iv);
  try {
    return t(i, o).select(n);
  } catch (u) {
    l(new je("Error formatting plural.", i, u));
  }
  return "other";
}
var Rv = ["numeric", "style"];
function Mv(e, t, n) {
  var r = e.locale, i = e.formats, l = e.onError;
  n === void 0 && (n = {});
  var o = n.format, u = !!o && la(i, "relative", o, l) || {}, a = rn(n, Rv, u);
  return t(r, a);
}
function Av(e, t, n, r, i) {
  i === void 0 && (i = {}), r || (r = "second");
  var l = Intl.RelativeTimeFormat;
  l || e.onError(new Ht(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, nt.MISSING_INTL_API));
  try {
    return Mv(e, t, i).format(n, r);
  } catch (o) {
    e.onError(new je("Error formatting relative time.", e.locale, o));
  }
  return String(n);
}
var Dv = [
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
function Rd(e, t, n) {
  var r = e.locale, i = e.formats, l = e.onError;
  n === void 0 && (n = {});
  var o = n.format, u = o && la(i, "number", o, l) || {}, a = rn(n, Dv, u);
  return t(r, a);
}
function Hv(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Rd(e, t, r).format(n);
  } catch (i) {
    e.onError(new je("Error formatting number.", e.locale, i));
  }
  return String(n);
}
function Fv(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Rd(e, t, r).formatToParts(n);
  } catch (i) {
    e.onError(new je("Error formatting number.", e.locale, i));
  }
  return [];
}
function Bv(e) {
  var t = e ? e[Object.keys(e)[0]] : void 0;
  return typeof t == "string";
}
function Uv(e) {
  e.onWarn && e.defaultRichTextElements && Bv(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`);
}
function zv(e, t) {
  var n = Ev(t), r = _(_({}, kd), e), i = r.locale, l = r.defaultLocale, o = r.onError;
  return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && o ? o(new Bs('Missing locale data for locale: "'.concat(i, '" in Intl.NumberFormat. Using default locale: "').concat(l, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && o && o(new Bs('Missing locale data for locale: "'.concat(i, '" in Intl.DateTimeFormat. Using default locale: "').concat(l, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (o && o(new mv('"locale" was not configured, using "'.concat(l, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"), Uv(r), _(_({}, r), {
    formatters: n,
    formatNumber: Hv.bind(null, r, n.getNumberFormat),
    formatNumberToParts: Fv.bind(null, r, n.getNumberFormat),
    formatRelativeTime: Av.bind(null, r, n.getRelativeTimeFormat),
    formatDate: xv.bind(null, r, n.getDateTimeFormat),
    formatDateToParts: Cv.bind(null, r, n.getDateTimeFormat),
    formatTime: Sv.bind(null, r, n.getDateTimeFormat),
    formatDateTimeRange: wv.bind(null, r, n.getDateTimeFormat),
    formatTimeToParts: Tv.bind(null, r, n.getDateTimeFormat),
    formatPlural: Lv.bind(null, r, n.getPluralRules),
    // @ts-expect-error TODO: will get to this later
    formatMessage: iu.bind(null, r, n),
    // @ts-expect-error TODO: will get to this later
    $t: iu.bind(null, r, n),
    formatList: Ov.bind(null, r, n.getListFormat),
    formatListToParts: Ld.bind(null, r, n.getListFormat),
    formatDisplayName: Nv.bind(null, r, n.getDisplayNames)
  });
}
function Md(e) {
  cd(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var Ad = _(_({}, kd), { textComponent: R.Fragment });
function jv(e) {
  return function(t) {
    return e(R.Children.toArray(t));
  };
}
function $v(e, t) {
  if (e === t)
    return !0;
  if (!e || !t)
    return !1;
  var n = Object.keys(e), r = Object.keys(t), i = n.length;
  if (r.length !== i)
    return !1;
  for (var l = 0; l < i; l++) {
    var o = n[l];
    if (e[o] !== t[o] || !Object.prototype.hasOwnProperty.call(t, o))
      return !1;
  }
  return !0;
}
var Dd = { exports: {} }, z = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var le = typeof Symbol == "function" && Symbol.for, oa = le ? Symbol.for("react.element") : 60103, ua = le ? Symbol.for("react.portal") : 60106, dl = le ? Symbol.for("react.fragment") : 60107, pl = le ? Symbol.for("react.strict_mode") : 60108, hl = le ? Symbol.for("react.profiler") : 60114, ml = le ? Symbol.for("react.provider") : 60109, vl = le ? Symbol.for("react.context") : 60110, aa = le ? Symbol.for("react.async_mode") : 60111, gl = le ? Symbol.for("react.concurrent_mode") : 60111, yl = le ? Symbol.for("react.forward_ref") : 60112, El = le ? Symbol.for("react.suspense") : 60113, Vv = le ? Symbol.for("react.suspense_list") : 60120, xl = le ? Symbol.for("react.memo") : 60115, Sl = le ? Symbol.for("react.lazy") : 60116, Gv = le ? Symbol.for("react.block") : 60121, Wv = le ? Symbol.for("react.fundamental") : 60117, Xv = le ? Symbol.for("react.responder") : 60118, Qv = le ? Symbol.for("react.scope") : 60119;
function Me(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case oa:
        switch (e = e.type, e) {
          case aa:
          case gl:
          case dl:
          case hl:
          case pl:
          case El:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case vl:
              case yl:
              case Sl:
              case xl:
              case ml:
                return e;
              default:
                return t;
            }
        }
      case ua:
        return t;
    }
  }
}
function Hd(e) {
  return Me(e) === gl;
}
z.AsyncMode = aa;
z.ConcurrentMode = gl;
z.ContextConsumer = vl;
z.ContextProvider = ml;
z.Element = oa;
z.ForwardRef = yl;
z.Fragment = dl;
z.Lazy = Sl;
z.Memo = xl;
z.Portal = ua;
z.Profiler = hl;
z.StrictMode = pl;
z.Suspense = El;
z.isAsyncMode = function(e) {
  return Hd(e) || Me(e) === aa;
};
z.isConcurrentMode = Hd;
z.isContextConsumer = function(e) {
  return Me(e) === vl;
};
z.isContextProvider = function(e) {
  return Me(e) === ml;
};
z.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === oa;
};
z.isForwardRef = function(e) {
  return Me(e) === yl;
};
z.isFragment = function(e) {
  return Me(e) === dl;
};
z.isLazy = function(e) {
  return Me(e) === Sl;
};
z.isMemo = function(e) {
  return Me(e) === xl;
};
z.isPortal = function(e) {
  return Me(e) === ua;
};
z.isProfiler = function(e) {
  return Me(e) === hl;
};
z.isStrictMode = function(e) {
  return Me(e) === pl;
};
z.isSuspense = function(e) {
  return Me(e) === El;
};
z.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === dl || e === gl || e === hl || e === pl || e === El || e === Vv || typeof e == "object" && e !== null && (e.$$typeof === Sl || e.$$typeof === xl || e.$$typeof === ml || e.$$typeof === vl || e.$$typeof === yl || e.$$typeof === Wv || e.$$typeof === Xv || e.$$typeof === Qv || e.$$typeof === Gv);
};
z.typeOf = Me;
Dd.exports = z;
var bv = Dd.exports, Fd = bv, Zv = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Yv = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Bd = {};
Bd[Fd.ForwardRef] = Zv;
Bd[Fd.Memo] = Yv;
var sa = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = R.createContext(null)) : R.createContext(null);
sa.Consumer;
var Kv = sa.Provider, Jv = Kv, qv = sa;
function Ud() {
  var e = R.useContext(qv);
  return Md(e), e;
}
var lu;
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(lu || (lu = {}));
var ou;
(function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(ou || (ou = {}));
function zd(e) {
  var t = function(n) {
    var r = Ud(), i = n.value, l = n.children, o = fl(n, ["value", "children"]), u = typeof i == "string" ? new Date(i || 0) : i, a = e === "formatDate" ? r.formatDateToParts(u, o) : r.formatTimeToParts(u, o);
    return l(a);
  };
  return t.displayName = ou[e], t;
}
function Ar(e) {
  var t = function(n) {
    var r = Ud(), i = n.value, l = n.children, o = fl(
      n,
      ["value", "children"]
    ), u = r[e](i, o);
    if (typeof l == "function")
      return l(u);
    var a = r.textComponent || R.Fragment;
    return R.createElement(a, null, u);
  };
  return t.displayName = lu[e], t;
}
function jd(e) {
  return e && Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    return t[n] = Nd(r) ? jv(r) : r, t;
  }, {});
}
var $s = function(e, t, n, r) {
  for (var i = [], l = 4; l < arguments.length; l++)
    i[l - 4] = arguments[l];
  var o = jd(r), u = iu.apply(void 0, ge([
    e,
    t,
    n,
    o
  ], i, !1));
  return Array.isArray(u) ? R.Children.toArray(u) : u;
}, Vs = function(e, t) {
  var n = e.defaultRichTextElements, r = fl(e, ["defaultRichTextElements"]), i = jd(n), l = zv(_(_(_({}, Ad), r), { defaultRichTextElements: i }), t), o = {
    locale: l.locale,
    timeZone: l.timeZone,
    fallbackOnEmptyString: l.fallbackOnEmptyString,
    formats: l.formats,
    defaultLocale: l.defaultLocale,
    defaultFormats: l.defaultFormats,
    messages: l.messages,
    onError: l.onError,
    defaultRichTextElements: i
  };
  return _(_({}, l), {
    formatMessage: $s.bind(
      null,
      o,
      // @ts-expect-error fix this
      l.formatters
    ),
    // @ts-expect-error fix this
    $t: $s.bind(null, o, l.formatters)
  });
};
function to(e) {
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
var e0 = (
  /** @class */
  function(e) {
    ze(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n.cache = Od(), n.state = {
        cache: n.cache,
        intl: Vs(to(n.props), n.cache),
        prevConfig: to(n.props)
      }, n;
    }
    return t.getDerivedStateFromProps = function(n, r) {
      var i = r.prevConfig, l = r.cache, o = to(n);
      return $v(i, o) ? null : {
        intl: Vs(o, l),
        prevConfig: o
      };
    }, t.prototype.render = function() {
      return Md(this.state.intl), R.createElement(Jv, { value: this.state.intl }, this.props.children);
    }, t.displayName = "IntlProvider", t.defaultProps = Ad, t;
  }(R.PureComponent)
);
Ar("formatDate");
Ar("formatTime");
Ar("formatNumber");
Ar("formatList");
Ar("formatDisplayName");
zd("formatDate");
zd("formatTime");
var $d = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var l = "", o = 0; o < arguments.length; o++) {
        var u = arguments[o];
        u && (l = i(l, r(u)));
      }
      return l;
    }
    function r(l) {
      if (typeof l == "string" || typeof l == "number")
        return l;
      if (typeof l != "object")
        return "";
      if (Array.isArray(l))
        return n.apply(null, l);
      if (l.toString !== Object.prototype.toString && !l.toString.toString().includes("[native code]"))
        return l.toString();
      var o = "";
      for (var u in l)
        t.call(l, u) && l[u] && (o = i(o, u));
      return o;
    }
    function i(l, o) {
      return o ? l ? l + " " + o : l + o : l;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})($d);
var t0 = $d.exports;
const Dr = /* @__PURE__ */ Qi(t0);
var Vd = { exports: {} }, n0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", r0 = n0, i0 = r0;
function Gd() {
}
function Wd() {
}
Wd.resetWarningCache = Gd;
var l0 = function() {
  function e(r, i, l, o, u, a) {
    if (a !== i0) {
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
    checkPropTypes: Wd,
    resetWarningCache: Gd
  };
  return n.PropTypes = n, n;
};
Vd.exports = l0();
var o0 = Vd.exports;
const N = /* @__PURE__ */ Qi(o0), Xd = (e) => /* @__PURE__ */ R.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ R.createElement("path", {
  d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6Z",
  fill: "currentColor"
})), Qd = (e) => /* @__PURE__ */ R.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ R.createElement("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41Z",
  fill: "currentColor"
})), Hr = /* @__PURE__ */ O.createContext();
class fa extends O.Component {
  constructor(n) {
    super(n);
    zn(this, "open", () => {
      this.setState({
        isOpen: !0
      }), this.props.onOpen && this.props.onOpen(), this.props.onToggle && this.props.onToggle(!0);
    });
    zn(this, "close", () => {
      this.setState({
        isOpen: !1
      }), this.props.onClose && this.props.onClose(), this.props.onToggle && this.props.onToggle(!1);
    });
    zn(this, "toggle", () => {
      this.state.isOpen ? this.close() : this.open();
    });
    this.state = {
      isOpen: n.open !== void 0 ? n.open : n.defaultOpen
    };
  }
  static getDerivedStateFromProps(n) {
    return n.open !== void 0 ? {
      // Since this method fires on both props and state changes, local updates
      // to the controlled value will be ignored, because the props version
      // always overrides it. In this case, this is exactly what we want.
      isOpen: n.open
    } : null;
  }
  render() {
    const {
      children: n,
      className: r,
      unmountOnExit: i,
      ...l
    } = this.props;
    return delete l.defaultOpen, delete l.onToggle, delete l.onOpen, delete l.onClose, /* @__PURE__ */ O.createElement("div", {
      ...l,
      className: Dr("pgn_collapsible", r, {
        "is-open": this.state.isOpen
      })
    }, /* @__PURE__ */ O.createElement(Hr.Provider, {
      value: {
        isOpen: this.state.isOpen,
        open: this.open,
        close: this.close,
        toggle: this.toggle,
        unmountOnExit: i
      }
    }, n));
  }
}
fa.propTypes = {
  /** Specifies contents of the component. */
  children: N.node,
  /** Specifies classname to append to the base element. */
  className: N.string,
  /** Specifies whether `Collapsible` should be initially open. */
  defaultOpen: N.bool,
  /** Specifies whether `Collapsible` is open. */
  open: N.bool,
  /** Callback fired when `Collapsible's` state is toggled. */
  onToggle: N.func,
  /** Callback fired when `Collapsible` opens. */
  onOpen: N.func,
  /** Callback fired when `Collapsible` closes. */
  onClose: N.func,
  /** Unmount the component (remove it from the DOM) when it is collapsed. */
  unmountOnExit: N.bool
};
fa.defaultProps = {
  children: void 0,
  className: void 0,
  defaultOpen: !1,
  open: void 0,
  onToggle: void 0,
  onOpen: void 0,
  onClose: void 0,
  unmountOnExit: !0
};
function An() {
  return An = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, An.apply(null, arguments);
}
function wl(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function u0(e) {
  return e && e.ownerDocument || document;
}
function a0(e) {
  var t = u0(e);
  return t && t.defaultView || window;
}
function s0(e, t) {
  return a0(e).getComputedStyle(e, t);
}
var f0 = /([A-Z])/g;
function c0(e) {
  return e.replace(f0, "-$1").toLowerCase();
}
var d0 = /^ms-/;
function li(e) {
  return c0(e).replace(d0, "-ms-");
}
var p0 = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function h0(e) {
  return !!(e && p0.test(e));
}
function Vi(e, t) {
  var n = "", r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(li(t)) || s0(e).getPropertyValue(li(t));
  Object.keys(t).forEach(function(i) {
    var l = t[i];
    !l && l !== 0 ? e.style.removeProperty(li(i)) : h0(i) ? r += i + "(" + l + ") " : n += li(i) + ": " + l + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
function uu(e, t) {
  return uu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, uu(e, t);
}
function ca(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, uu(e, t);
}
const Gs = {
  disabled: !1
}, Gi = O.createContext(null);
var bd = function(t) {
  return t.scrollTop;
}, er = "unmounted", gt = "exited", yt = "entering", $t = "entered", Wi = "exiting", rt = /* @__PURE__ */ function(e) {
  ca(t, e);
  function t(r, i) {
    var l;
    l = e.call(this, r, i) || this;
    var o = i, u = o && !o.isMounting ? r.enter : r.appear, a;
    return l.appearStatus = null, r.in ? u ? (a = gt, l.appearStatus = yt) : a = $t : r.unmountOnExit || r.mountOnEnter ? a = er : a = gt, l.state = {
      status: a
    }, l.nextCallback = null, l;
  }
  t.getDerivedStateFromProps = function(i, l) {
    var o = i.in;
    return o && l.status === er ? {
      status: gt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var l = null;
    if (i !== this.props) {
      var o = this.state.status;
      this.props.in ? o !== yt && o !== $t && (l = yt) : (o === yt || o === $t) && (l = Wi);
    }
    this.updateStatus(!1, l);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, l, o, u;
    return l = o = u = i, i != null && typeof i != "number" && (l = i.exit, o = i.enter, u = i.appear !== void 0 ? i.appear : o), {
      exit: l,
      enter: o,
      appear: u
    };
  }, n.updateStatus = function(i, l) {
    if (i === void 0 && (i = !1), l !== null)
      if (this.cancelNextCallback(), l === yt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var o = this.props.nodeRef ? this.props.nodeRef.current : ni.findDOMNode(this);
          o && bd(o);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === gt && this.setState({
      status: er
    });
  }, n.performEnter = function(i) {
    var l = this, o = this.props.enter, u = this.context ? this.context.isMounting : i, a = this.props.nodeRef ? [u] : [ni.findDOMNode(this), u], s = a[0], f = a[1], h = this.getTimeouts(), p = u ? h.appear : h.enter;
    if (!i && !o || Gs.disabled) {
      this.safeSetState({
        status: $t
      }, function() {
        l.props.onEntered(s);
      });
      return;
    }
    this.props.onEnter(s, f), this.safeSetState({
      status: yt
    }, function() {
      l.props.onEntering(s, f), l.onTransitionEnd(p, function() {
        l.safeSetState({
          status: $t
        }, function() {
          l.props.onEntered(s, f);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, l = this.props.exit, o = this.getTimeouts(), u = this.props.nodeRef ? void 0 : ni.findDOMNode(this);
    if (!l || Gs.disabled) {
      this.safeSetState({
        status: gt
      }, function() {
        i.props.onExited(u);
      });
      return;
    }
    this.props.onExit(u), this.safeSetState({
      status: Wi
    }, function() {
      i.props.onExiting(u), i.onTransitionEnd(o.exit, function() {
        i.safeSetState({
          status: gt
        }, function() {
          i.props.onExited(u);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, l) {
    l = this.setNextCallback(l), this.setState(i, l);
  }, n.setNextCallback = function(i) {
    var l = this, o = !0;
    return this.nextCallback = function(u) {
      o && (o = !1, l.nextCallback = null, i(u));
    }, this.nextCallback.cancel = function() {
      o = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, l) {
    this.setNextCallback(l);
    var o = this.props.nodeRef ? this.props.nodeRef.current : ni.findDOMNode(this), u = i == null && !this.props.addEndListener;
    if (!o || u) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var a = this.props.nodeRef ? [this.nextCallback] : [o, this.nextCallback], s = a[0], f = a[1];
      this.props.addEndListener(s, f);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === er)
      return null;
    var l = this.props, o = l.children;
    l.in, l.mountOnEnter, l.unmountOnExit, l.appear, l.enter, l.exit, l.timeout, l.addEndListener, l.onEnter, l.onEntering, l.onEntered, l.onExit, l.onExiting, l.onExited, l.nodeRef;
    var u = wl(l, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ O.createElement(Gi.Provider, {
        value: null
      }, typeof o == "function" ? o(i, u) : O.cloneElement(O.Children.only(o), u))
    );
  }, t;
}(O.Component);
rt.contextType = Gi;
rt.propTypes = {};
function on() {
}
rt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: on,
  onEntering: on,
  onEntered: on,
  onExit: on,
  onExiting: on,
  onExited: on
};
rt.UNMOUNTED = er;
rt.EXITED = gt;
rt.ENTERING = yt;
rt.ENTERED = $t;
rt.EXITING = Wi;
const m0 = !!(typeof window < "u" && window.document && window.document.createElement);
var au = !1, su = !1;
try {
  var no = {
    get passive() {
      return au = !0;
    },
    get once() {
      return su = au = !0;
    }
  };
  m0 && (window.addEventListener("test", no, no), window.removeEventListener("test", no, !0));
} catch {
}
function v0(e, t, n, r) {
  if (r && typeof r != "boolean" && !su) {
    var i = r.once, l = r.capture, o = n;
    !su && i && (o = n.__once || function u(a) {
      this.removeEventListener(t, u, l), n.call(this, a);
    }, n.__once = o), e.addEventListener(t, o, au ? r : l);
  }
  e.addEventListener(t, n, r);
}
function g0(e, t, n, r) {
  var i = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
function Zd(e, t, n, r) {
  return v0(e, t, n, r), function() {
    g0(e, t, n, r);
  };
}
function y0(e, t, n, r) {
  if (r === void 0 && (r = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, n, r), e.dispatchEvent(i);
  }
}
function E0(e) {
  var t = Vi(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function x0(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1, i = setTimeout(function() {
    r || y0(e, "transitionend", !0);
  }, t + n), l = Zd(e, "transitionend", function() {
    r = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), l();
  };
}
function S0(e, t, n, r) {
  n == null && (n = E0(e) || 0);
  var i = x0(e, n, r), l = Zd(e, "transitionend", t);
  return function() {
    i(), l();
  };
}
function Ws(e, t) {
  var n = Vi(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function w0(e, t) {
  var n = Ws(e, "transitionDuration"), r = Ws(e, "transitionDelay"), i = S0(e, function(l) {
    l.target === e && (i(), t(l));
  }, n + r);
}
function Zn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.filter(function(r) {
    return r != null;
  }).reduce(function(r, i) {
    if (typeof i != "function")
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    return r === null ? i : function() {
      for (var o = arguments.length, u = new Array(o), a = 0; a < o; a++)
        u[a] = arguments[a];
      r.apply(this, u), i.apply(this, u);
    };
  }, null);
}
function C0(e) {
  e.offsetHeight;
}
var T0 = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children", "dimension", "getDimensionValue"], un, _0 = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"]
};
function Yd(e, t) {
  var n = "offset" + e[0].toUpperCase() + e.slice(1), r = t[n], i = _0[e];
  return r + // @ts-ignore
  parseInt(Vi(t, i[0]), 10) + // @ts-ignore
  parseInt(Vi(t, i[1]), 10);
}
var N0 = (un = {}, un[gt] = "collapse", un[Wi] = "collapsing", un[yt] = "collapsing", un[$t] = "collapse show", un), P0 = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  getDimensionValue: Yd
}, Kd = /* @__PURE__ */ O.forwardRef(function(e, t) {
  var n = e.onEnter, r = e.onEntering, i = e.onEntered, l = e.onExit, o = e.onExiting, u = e.className, a = e.children, s = e.dimension, f = s === void 0 ? "height" : s, h = e.getDimensionValue, p = h === void 0 ? Yd : h, y = wl(e, T0), g = typeof f == "function" ? f() : f, x = R.useMemo(function() {
    return Zn(function(v) {
      v.style[g] = "0";
    }, n);
  }, [g, n]), I = R.useMemo(function() {
    return Zn(function(v) {
      var S = "scroll" + g[0].toUpperCase() + g.slice(1);
      v.style[g] = v[S] + "px";
    }, r);
  }, [g, r]), d = R.useMemo(function() {
    return Zn(function(v) {
      v.style[g] = null;
    }, i);
  }, [g, i]), c = R.useMemo(function() {
    return Zn(function(v) {
      v.style[g] = p(g, v) + "px", C0(v);
    }, l);
  }, [l, p, g]), m = R.useMemo(function() {
    return Zn(function(v) {
      v.style[g] = null;
    }, o);
  }, [g, o]);
  return /* @__PURE__ */ O.createElement(
    rt,
    An({
      ref: t,
      addEndListener: w0
    }, y, {
      "aria-expanded": y.role ? y.in : null,
      onEnter: x,
      onEntering: I,
      onEntered: d,
      onExit: c,
      onExiting: m
    }),
    function(v, S) {
      return /* @__PURE__ */ O.cloneElement(a, An({}, S, {
        className: Dr(u, a.props.className, N0[v], g === "width" && "width")
      }));
    }
  );
});
Kd.defaultProps = P0;
function k0(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function O0(e, t) {
  e.classList ? e.classList.add(t) : k0(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
function Xs(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function I0(e, t) {
  e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = Xs(e.className, t) : e.setAttribute("class", Xs(e.className && e.className.baseVal || "", t));
}
var L0 = function(t, n) {
  return t && n && n.split(" ").forEach(function(r) {
    return O0(t, r);
  });
}, ro = function(t, n) {
  return t && n && n.split(" ").forEach(function(r) {
    return I0(t, r);
  });
}, da = /* @__PURE__ */ function(e) {
  ca(t, e);
  function t() {
    for (var r, i = arguments.length, l = new Array(i), o = 0; o < i; o++)
      l[o] = arguments[o];
    return r = e.call.apply(e, [this].concat(l)) || this, r.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, r.onEnter = function(u, a) {
      var s = r.resolveArguments(u, a), f = s[0], h = s[1];
      r.removeClasses(f, "exit"), r.addClass(f, h ? "appear" : "enter", "base"), r.props.onEnter && r.props.onEnter(u, a);
    }, r.onEntering = function(u, a) {
      var s = r.resolveArguments(u, a), f = s[0], h = s[1], p = h ? "appear" : "enter";
      r.addClass(f, p, "active"), r.props.onEntering && r.props.onEntering(u, a);
    }, r.onEntered = function(u, a) {
      var s = r.resolveArguments(u, a), f = s[0], h = s[1], p = h ? "appear" : "enter";
      r.removeClasses(f, p), r.addClass(f, p, "done"), r.props.onEntered && r.props.onEntered(u, a);
    }, r.onExit = function(u) {
      var a = r.resolveArguments(u), s = a[0];
      r.removeClasses(s, "appear"), r.removeClasses(s, "enter"), r.addClass(s, "exit", "base"), r.props.onExit && r.props.onExit(u);
    }, r.onExiting = function(u) {
      var a = r.resolveArguments(u), s = a[0];
      r.addClass(s, "exit", "active"), r.props.onExiting && r.props.onExiting(u);
    }, r.onExited = function(u) {
      var a = r.resolveArguments(u), s = a[0];
      r.removeClasses(s, "exit"), r.addClass(s, "exit", "done"), r.props.onExited && r.props.onExited(u);
    }, r.resolveArguments = function(u, a) {
      return r.props.nodeRef ? [r.props.nodeRef.current, u] : [u, a];
    }, r.getClassNames = function(u) {
      var a = r.props.classNames, s = typeof a == "string", f = s && a ? a + "-" : "", h = s ? "" + f + u : a[u], p = s ? h + "-active" : a[u + "Active"], y = s ? h + "-done" : a[u + "Done"];
      return {
        baseClassName: h,
        activeClassName: p,
        doneClassName: y
      };
    }, r;
  }
  var n = t.prototype;
  return n.addClass = function(i, l, o) {
    var u = this.getClassNames(l)[o + "ClassName"], a = this.getClassNames("enter"), s = a.doneClassName;
    l === "appear" && o === "done" && s && (u += " " + s), o === "active" && i && bd(i), u && (this.appliedClasses[l][o] = u, L0(i, u));
  }, n.removeClasses = function(i, l) {
    var o = this.appliedClasses[l], u = o.base, a = o.active, s = o.done;
    this.appliedClasses[l] = {}, u && ro(i, u), a && ro(i, a), s && ro(i, s);
  }, n.render = function() {
    var i = this.props;
    i.classNames;
    var l = wl(i, ["classNames"]);
    return /* @__PURE__ */ O.createElement(rt, An({}, l, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, t;
}(O.Component);
da.defaultProps = {
  classNames: ""
};
da.propTypes = {};
function R0(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pa(e, t) {
  var n = function(l) {
    return t && R.isValidElement(l) ? t(l) : l;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && R.Children.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = n(i);
  }), r;
}
function M0(e, t) {
  e = e || {}, t = t || {};
  function n(f) {
    return f in t ? t[f] : e[f];
  }
  var r = /* @__PURE__ */ Object.create(null), i = [];
  for (var l in e)
    l in t ? i.length && (r[l] = i, i = []) : i.push(l);
  var o, u = {};
  for (var a in t) {
    if (r[a])
      for (o = 0; o < r[a].length; o++) {
        var s = r[a][o];
        u[r[a][o]] = n(s);
      }
    u[a] = n(a);
  }
  for (o = 0; o < i.length; o++)
    u[i[o]] = n(i[o]);
  return u;
}
function Xt(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function A0(e, t) {
  return pa(e.children, function(n) {
    return R.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Xt(n, "appear", e),
      enter: Xt(n, "enter", e),
      exit: Xt(n, "exit", e)
    });
  });
}
function D0(e, t, n) {
  var r = pa(e.children), i = M0(t, r);
  return Object.keys(i).forEach(function(l) {
    var o = i[l];
    if (R.isValidElement(o)) {
      var u = l in t, a = l in r, s = t[l], f = R.isValidElement(s) && !s.props.in;
      a && (!u || f) ? i[l] = R.cloneElement(o, {
        onExited: n.bind(null, o),
        in: !0,
        exit: Xt(o, "exit", e),
        enter: Xt(o, "enter", e)
      }) : !a && u && !f ? i[l] = R.cloneElement(o, {
        in: !1
      }) : a && u && R.isValidElement(s) && (i[l] = R.cloneElement(o, {
        onExited: n.bind(null, o),
        in: s.props.in,
        exit: Xt(o, "exit", e),
        enter: Xt(o, "enter", e)
      }));
    }
  }), i;
}
var H0 = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, F0 = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, ha = /* @__PURE__ */ function(e) {
  ca(t, e);
  function t(r, i) {
    var l;
    l = e.call(this, r, i) || this;
    var o = l.handleExited.bind(R0(l));
    return l.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: o,
      firstRender: !0
    }, l;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(i, l) {
    var o = l.children, u = l.handleExited, a = l.firstRender;
    return {
      children: a ? A0(i, u) : D0(i, o, u),
      firstRender: !1
    };
  }, n.handleExited = function(i, l) {
    var o = pa(this.props.children);
    i.key in o || (i.props.onExited && i.props.onExited(l), this.mounted && this.setState(function(u) {
      var a = An({}, u.children);
      return delete a[i.key], {
        children: a
      };
    }));
  }, n.render = function() {
    var i = this.props, l = i.component, o = i.childFactory, u = wl(i, ["component", "childFactory"]), a = this.state.contextValue, s = H0(this.state.children).map(o);
    return delete u.appear, delete u.enter, delete u.exit, l === null ? /* @__PURE__ */ O.createElement(Gi.Provider, {
      value: a
    }, s) : /* @__PURE__ */ O.createElement(Gi.Provider, {
      value: a
    }, /* @__PURE__ */ O.createElement(l, u, s));
  }, t;
}(O.Component);
ha.propTypes = {};
ha.defaultProps = F0;
class ma extends O.Component {
  constructor(t) {
    super(t), this.state = {
      height: null
    }, this.onChildEnter = this.onChildEnter.bind(this), this.onChildEntering = this.onChildEntering.bind(this), this.onChildEntered = this.onChildEntered.bind(this), this.onChildExit = this.onChildExit.bind(this), this.onChildExiting = this.onChildExiting.bind(this), this.onChildExited = this.onChildExited.bind(this);
  }
  // Transition events are fired in this order:
  //
  // onEnter > onEntering > onEntered
  // onExit  > onExiting  > onExited
  //
  // Keep in mind that we always have two transitions happening
  // both the entering and leaving children
  //
  // We set the container height (for animation) in this order:
  //
  // 1. onChildExit         (explicitly set the height to match the current current)
  // 2. onChildEntering     (set the height to match the new content)
  // 3. onChildExited       (reset the height to null)
  onChildEnter(t) {
    this.props.onChildEnter && this.props.onChildEnter(t);
  }
  onChildEntering(t) {
    this.setState({
      height: t.offsetHeight
    }), this.props.onChildEntering && this.props.onChildEntering(t);
  }
  onChildEntered(t) {
    this.setState({
      height: null
    }), this.props.onChildEntered && this.props.onChildEntered(t);
  }
  onChildExit(t) {
    this.setState({
      height: t.offsetHeight
    }), this.props.onChildExit && this.props.onChildExit(t);
  }
  onChildExiting(t) {
    this.props.onChildExiting && this.props.onChildExiting(t);
  }
  onChildExited(t) {
    this.setState({
      height: null
    }), this.props.onChildExited && this.props.onChildExited(t);
  }
  renderChildTransition(t) {
    t.key;
    const n = {
      // Prevent margin-collapsing which throws off height calculations
      padding: ".1px 0"
    }, r = {
      entering: {},
      entered: {},
      exiting: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        pointerEvents: "none"
      },
      exited: {}
    };
    return /* @__PURE__ */ O.createElement(da, {
      timeout: {
        enter: this.props.enterDuration,
        exit: this.props.exitDuration
      },
      unmountOnExit: !0,
      mountOnEnter: !0,
      onEnter: this.onChildEnter,
      onEntering: this.onChildEntering,
      onEntered: this.onChildEntered,
      onExit: this.onChildExit,
      onExiting: this.onChildExiting,
      onExited: this.onChildExited,
      classNames: this.props.transitionClassNames
    }, (i) => /* @__PURE__ */ O.createElement("div", {
      style: {
        ...n,
        ...r[i],
        ...this.props.transitionStyles[i]
      }
    }, t));
  }
  render() {
    return /* @__PURE__ */ O.createElement(ha, {
      className: Dr("pgn-transition-replace-group", "position-relative", {
        "overflow-hidden": this.state.height !== null
      }, this.props.className),
      style: {
        height: this.state.height
      }
    }, O.Children.map(this.props.children, this.renderChildTransition, this));
  }
}
ma.propTypes = {
  /** Specifies an additional class for the base element */
  children: N.element,
  /** Duration of the element appearance transition. */
  enterDuration: N.number,
  /** Duration of the element dismiss transition. */
  exitDuration: N.number,
  /** Specifies class name to append to the base element. */
  className: N.string,
  /** A `Transition` callback fired immediately after the `enter` or `appear` class is applied. */
  onChildEnter: N.func,
  /** A `Transition` callback fired immediately after the `enter-active` or `appear-active` class is applied. */
  onChildEntering: N.func,
  /**
   * A `Transition` callback fired immediately after the `enter` or
   * `appear` classes are removed and the done class is added to the DOM node.
   */
  onChildEntered: N.func,
  /** A `Transition` callback fired immediately after the `exit` class is applied. */
  onChildExit: N.func,
  /** A `Transition` callback fired immediately after the `exit-active` is applied. */
  onChildExiting: N.func,
  /**
   * A `Transition` callback fired immediately after the `exit` classes
   * are removed and the exit-done class is added to the DOM node.
   */
  onChildExited: N.func,
  /** An object that specifies transition styles. */
  transitionStyles: N.shape({
    entering: N.shape({}),
    entered: N.shape({}),
    exiting: N.shape({}),
    exited: N.shape({})
  }),
  /** Specifies class name to append to the `Transition`. */
  transitionClassNames: N.string
};
ma.defaultProps = {
  children: void 0,
  enterDuration: 300,
  exitDuration: 300,
  className: void 0,
  onChildEnter: void 0,
  onChildEntering: void 0,
  onChildEntered: void 0,
  onChildExit: void 0,
  onChildExiting: void 0,
  onChildExited: void 0,
  transitionStyles: {},
  transitionClassNames: "pgn__transition-replace"
};
function va({
  children: e,
  transitionWrapper: t,
  tag: n,
  ...r
}) {
  const {
    isOpen: i,
    unmountOnExit: l
  } = R.useContext(Hr), o = /* @__PURE__ */ O.createElement(n, {
    key: "body",
    ...r
  }, e), u = i ? o : /* @__PURE__ */ O.createElement("div", {
    key: "empty"
  });
  return t ? /* @__PURE__ */ O.cloneElement(t, {}, u) : l ? /* @__PURE__ */ O.createElement(ma, null, u) : /* @__PURE__ */ O.createElement(Kd, {
    in: i
  }, o);
}
va.propTypes = {
  /** Specifies contents of the component. */
  children: N.node,
  /** Specifies content's base element. */
  tag: N.string,
  /** Specifies transition element. */
  transitionWrapper: N.element
};
va.defaultProps = {
  children: void 0,
  tag: "div",
  transitionWrapper: void 0
};
function ga({
  tag: e,
  children: t,
  openOnly: n,
  closeOnly: r,
  onClick: i,
  onKeyDown: l,
  ...o
}) {
  const {
    isOpen: u,
    open: a,
    close: s,
    toggle: f
  } = R.useContext(Hr), h = R.useCallback((g) => {
    n ? a(g) : r ? s(g) : f(g);
  }, [n, a, r, s, f]), p = R.useCallback((g) => {
    i && i(g), h(g);
  }, [i, h]), y = R.useCallback((g) => {
    l && l(g), g.key === "Enter" && h(g);
  }, [l, h]);
  return /* @__PURE__ */ O.createElement(e, {
    ...o,
    onClick: p,
    onKeyDown: y,
    role: "button",
    tabIndex: 0,
    "aria-expanded": u
  }, t);
}
ga.propTypes = {
  /** Specifies contents of the component. */
  children: N.node,
  /** Specifies base element. */
  tag: N.oneOfType([N.string, N.elementType]),
  /** Specifies whether toggling `Collapsible's` state will always trigger only open action. */
  openOnly: N.bool,
  /** Specifies whether toggling `Collapsible's` state will always trigger only close action. */
  closeOnly: N.bool,
  /** Callback fired when element gets clicked. */
  onClick: N.func,
  /** Callback fired when a key is pressed. */
  onKeyDown: N.func
};
ga.defaultProps = {
  children: void 0,
  tag: "div",
  openOnly: !1,
  closeOnly: !1,
  onClick: void 0,
  onKeyDown: void 0
};
function ya({
  children: e,
  whenOpen: t,
  whenClosed: n
}) {
  const {
    isOpen: r
  } = R.useContext(Hr);
  return r && t || !r && n ? /* @__PURE__ */ O.createElement(O.Fragment, null, e) : null;
}
ya.propTypes = {
  /** Specifies contents of the component. */
  children: N.node,
  /** Specifies whether the content should be visible when `Collapsible` is open. */
  whenOpen: N.bool,
  /** Specifies whether the content should be visible when `Collapsible` is closed. */
  whenClosed: N.bool
};
ya.defaultProps = {
  children: void 0,
  whenOpen: !1,
  whenClosed: !1
};
let Qs = 0;
const B0 = (e = "id") => (Qs += 1, `${e}${Qs}`);
let tr = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function U0(e, t, n) {
  class r extends O.Component {
    constructor(l) {
      super(l), this.transformProps = this.transformProps.bind(this);
    }
    warn(l) {
    }
    transformProps(l, o) {
      if (n[o] === void 0)
        return l[o] = this.props[o], l;
      const {
        deprType: u,
        newName: a,
        expect: s,
        transform: f,
        message: h
      } = n[o];
      switch (u) {
        case tr.MOVED:
          this.warn(`${t}: The prop '${o}' has been moved to '${a}'.`), l[a] = this.props[o];
          break;
        case tr.REMOVED:
          this.warn(`${t}: The prop '${o}' has been removed. '${h}'`);
          break;
        case tr.FORMAT:
          s(this.props[o]) ? l[o] = this.props[o] : (this.warn(`${t}: The prop '${o}' expects a new format. ${h}`), l[o] = f(this.props[o], this.props));
          break;
        case tr.MOVED_AND_FORMAT: {
          const p = this.props[o];
          let y = `${t}: The prop '${o}' has been moved to '${a}'`;
          s && !s(p) && (y += " and expects a new format"), y += h ? `. ${h}` : "", this.warn(y), l[a] = f ? f(p, this.props) : p;
          break;
        }
        default:
          l[o] = this.props[o];
          break;
      }
      return l;
    }
    render() {
      const {
        children: l,
        ...o
      } = Object.keys(this.props).reduce(this.transformProps, {});
      return /* @__PURE__ */ O.createElement(e, {
        ...o
      }, this.props.children || l);
    }
  }
  return (
    // eslint-disable-next-line react/static-property-placement
    zn(r, "displayName", `withDeprecatedProps(${t})`), r
  );
}
function Ea({
  src: e,
  id: t,
  className: n,
  hidden: r,
  screenReaderText: i,
  svgAttrs: l,
  size: o,
  ...u
}) {
  if (e) {
    const a = l["aria-label"] || l["aria-labelledby"], s = {
      ...l
    };
    return a || (s["aria-label"] = void 0, s["aria-hidden"] = !0), /* @__PURE__ */ O.createElement("span", {
      className: Dr("pgn__icon", {
        [`pgn__icon__${o}`]: !!o
      }, n),
      id: t,
      ...u
    }, /* @__PURE__ */ O.createElement(e, {
      role: "img",
      focusable: !1,
      ...s
    }), i && /* @__PURE__ */ O.createElement("span", {
      className: "sr-only"
    }, i));
  }
  return /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement("span", {
    id: t || B0("Icon"),
    className: n,
    "aria-hidden": r
  }), i && /* @__PURE__ */ O.createElement("span", {
    className: "sr-only"
  }, i));
}
Ea.propTypes = {
  /**
   * An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';`
   */
  src: N.elementType,
  /** HTML element attributes to pass through to the underlying svg element */
  svgAttrs: N.shape({
    "aria-label": N.string,
    "aria-labelledby": N.string
  }),
  /**
   * the `id` property of the Icon element, by default this value is generated
   * with the `newId` function with the `prefix` of `Icon`.
   */
  id: N.string,
  /** The size of the icon. */
  size: N.oneOf(["xs", "sm", "md", "lg"]),
  /** A class name that will define what the Icon looks like. */
  className: N.string,
  /**
   * a boolean that determines the value of `aria-hidden` attribute on the Icon span,
   * this value is `true` by default.
   */
  hidden: N.bool,
  /**
   * a string or an element that will be used on a secondary span leveraging the `sr-only` style
   * for screenreader only text, this value is `undefined` by default. This value is recommended for use unless
   * the Icon is being used in a way that is purely decorative or provides no additional context for screen
   * reader users. This field should be thought of the same way an `alt` attribute would be used for `image` tags.
   */
  screenReaderText: N.oneOfType([N.string, N.element])
};
Ea.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const Xi = U0(Ea, "Icon", {
  className: {
    deprType: tr.FORMAT,
    expect: (e) => typeof e == "string",
    transform: (e) => Array.isArray(e) ? e.join(" ") : e,
    message: "It should be a string."
  }
}), z0 = {
  basic: {
    iconWhenClosed: /* @__PURE__ */ O.createElement(Xi, {
      src: Qd
    }),
    iconWhenOpen: /* @__PURE__ */ O.createElement(Xi, {
      src: Xd
    })
  }
  // card and card-lg use the defaults specified in defaultProps
}, ye = /* @__PURE__ */ O.forwardRef((e, t) => {
  const {
    children: n,
    className: r,
    title: i,
    styling: l,
    iconWhenClosed: o,
    iconWhenOpen: u,
    ...a
  } = e, s = {
    iconWhenClosed: o,
    iconWhenOpen: u,
    ...z0[l]
  }, f = /* @__PURE__ */ O.isValidElement(i) ? i : /* @__PURE__ */ O.createElement("span", null, i);
  return /* @__PURE__ */ O.createElement(ye.Advanced, {
    ...a,
    className: Dr(r, `collapsible-${l}`),
    ref: t
  }, /* @__PURE__ */ O.createElement(ye.Trigger, {
    className: "collapsible-trigger"
  }, f, /* @__PURE__ */ O.createElement("span", {
    className: "collapsible-icon"
  }, /* @__PURE__ */ O.createElement(ye.Visible, {
    whenClosed: !0
  }, s.iconWhenClosed), /* @__PURE__ */ O.createElement(ye.Visible, {
    whenOpen: !0
  }, s.iconWhenOpen))), /* @__PURE__ */ O.createElement(ye.Body, {
    className: "collapsible-body"
  }, n));
});
ye.propTypes = {
  /** Specifies contents of the component. */
  children: N.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: N.string,
  /** Specifies whether the `Collapsible` should be initially open. */
  defaultOpen: N.bool,
  /** Specifies icon to show when `Collapsible` is closed. */
  iconWhenClosed: N.element,
  /** Specifies icon to show when `Collapsible` is open. */
  iconWhenOpen: N.element,
  /** Callback fired when `Collapsible` closes. */
  onClose: N.func,
  /** Callback fired when `Collapsible` opens. */
  onOpen: N.func,
  /** Callback fired when `Collapsible's` state is toggled. */
  onToggle: N.func,
  /** Specifies whether `Collapsible` is open. */
  open: N.bool,
  /** Specifies style variant. */
  styling: N.oneOf(["basic", "card", "card-lg"]),
  /** Specifies title. */
  title: N.node.isRequired,
  /** Unmount the component (remove it from the DOM) when it is collapsed */
  unmountOnExit: N.bool
};
ye.defaultProps = {
  className: void 0,
  defaultOpen: !1,
  iconWhenClosed: /* @__PURE__ */ O.createElement(Xi, {
    src: Qd
  }),
  iconWhenOpen: /* @__PURE__ */ O.createElement(Xi, {
    src: Xd
  }),
  onClose: void 0,
  onOpen: void 0,
  onToggle: void 0,
  open: void 0,
  styling: "card",
  unmountOnExit: !0
};
ye.Advanced = fa;
ye.Body = va;
ye.Trigger = ga;
ye.Visible = ya;
ye.Context = Hr;
const j0 = ({
  displayName: e,
  title: t,
  sections: n,
  openSections: r,
  allowMultipleOpen: i,
  runtime: l
}) => {
  const [o, u] = R.useState(r || [0]), a = (s) => {
    let f;
    o.includes(s) ? f = o.filter((h) => h !== s) : i ? f = [...o, s] : f = [s], u(f);
  };
  return /* @__PURE__ */ Ge.jsxs("div", { className: "accordion-student-view", children: [
    t && /* @__PURE__ */ Ge.jsx("h3", { className: "accordion-main-title", children: t }),
    /* @__PURE__ */ Ge.jsx("div", { className: "accordion-wrapper", children: n.map((s, f) => /* @__PURE__ */ Ge.jsxs(
      ye.Advanced,
      {
        open: o.includes(f),
        onToggle: () => a(f),
        className: "accordion-section",
        children: [
          /* @__PURE__ */ Ge.jsx(ye.Trigger, { className: "accordion-section-trigger", children: /* @__PURE__ */ Ge.jsx("h4", { className: "accordion-section-title", children: s.title }) }),
          /* @__PURE__ */ Ge.jsx(ye.Body, { className: "accordion-section-body", children: /* @__PURE__ */ Ge.jsx(
            "div",
            {
              className: "accordion-section-content",
              dangerouslySetInnerHTML: { __html: s.content }
            }
          ) })
        ]
      },
      f
    )) })
  ] });
}, V0 = (e, t, n) => {
  ad(e).render(
    /* @__PURE__ */ Ge.jsxs(R.StrictMode, { children: [
      /* @__PURE__ */ Ge.jsx(e0, { locale: "en", children: /* @__PURE__ */ Ge.jsx(
        j0,
        {
          displayName: t.displayName,
          title: t.title,
          sections: t.sections,
          openSections: t.openSections,
          allowMultipleOpen: t.allowMultipleOpen,
          runtime: n
        }
      ) }),
      "    "
    ] })
  );
};
export {
  V0 as renderBlock
};
//# sourceMappingURL=student-ui.js.map
