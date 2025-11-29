var gp = Object.defineProperty;
var yp = (e, t, n) => t in e ? gp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var _u = (e, t, n) => yp(e, typeof t != "symbol" ? t + "" : t, n);
function Hr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var lc = { exports: {} }, eo = {}, ac = { exports: {} }, D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dr = Symbol.for("react.element"), Ep = Symbol.for("react.portal"), xp = Symbol.for("react.fragment"), Sp = Symbol.for("react.strict_mode"), wp = Symbol.for("react.profiler"), Tp = Symbol.for("react.provider"), Cp = Symbol.for("react.context"), Np = Symbol.for("react.forward_ref"), _p = Symbol.for("react.suspense"), kp = Symbol.for("react.memo"), Pp = Symbol.for("react.lazy"), ku = Symbol.iterator;
function Rp(e) {
  return e === null || typeof e != "object" ? null : (e = ku && e[ku] || e["@@iterator"], typeof e == "function" ? e : null);
}
var uc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, sc = Object.assign, cc = {};
function Vn(e, t, n) {
  this.props = e, this.context = t, this.refs = cc, this.updater = n || uc;
}
Vn.prototype.isReactComponent = {};
Vn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Vn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function fc() {
}
fc.prototype = Vn.prototype;
function Ea(e, t, n) {
  this.props = e, this.context = t, this.refs = cc, this.updater = n || uc;
}
var xa = Ea.prototype = new fc();
xa.constructor = Ea;
sc(xa, Vn.prototype);
xa.isPureReactComponent = !0;
var Pu = Array.isArray, dc = Object.prototype.hasOwnProperty, Sa = { current: null }, pc = { key: !0, ref: !0, __self: !0, __source: !0 };
function hc(e, t, n) {
  var r, i = {}, o = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (o = "" + t.key), t) dc.call(t, r) && !pc.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    i.children = u;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
  return { $$typeof: Dr, type: e, key: o, ref: l, props: i, _owner: Sa.current };
}
function Lp(e, t) {
  return { $$typeof: Dr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function wa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Dr;
}
function Ip(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ru = /\/+/g;
function Oo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Ip("" + e.key) : t.toString(36);
}
function vi(e, t, n, r, i) {
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
        case Dr:
        case Ep:
          l = !0;
      }
  }
  if (l) return l = e, i = i(l), e = r === "" ? "." + Oo(l, 0) : r, Pu(i) ? (n = "", e != null && (n = e.replace(Ru, "$&/") + "/"), vi(i, t, n, "", function(s) {
    return s;
  })) : i != null && (wa(i) && (i = Lp(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(Ru, "$&/") + "/") + e)), t.push(i)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Pu(e)) for (var a = 0; a < e.length; a++) {
    o = e[a];
    var u = r + Oo(o, a);
    l += vi(o, t, n, u, i);
  }
  else if (u = Rp(e), typeof u == "function") for (e = u.call(e), a = 0; !(o = e.next()).done; ) o = o.value, u = r + Oo(o, a++), l += vi(o, t, n, u, i);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Xr(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return vi(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function Op(e) {
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
var Ce = { current: null }, gi = { transition: null }, Mp = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: gi, ReactCurrentOwner: Sa };
function mc() {
  throw Error("act(...) is not supported in production builds of React.");
}
D.Children = { map: Xr, forEach: function(e, t, n) {
  Xr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Xr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Xr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!wa(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
D.Component = Vn;
D.Fragment = xp;
D.Profiler = wp;
D.PureComponent = Ea;
D.StrictMode = Sp;
D.Suspense = _p;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mp;
D.act = mc;
D.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = sc({}, e.props), i = e.key, o = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, l = Sa.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (u in t) dc.call(t, u) && !pc.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: Dr, type: e.type, key: i, ref: o, props: r, _owner: l };
};
D.createContext = function(e) {
  return e = { $$typeof: Cp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Tp, _context: e }, e.Consumer = e;
};
D.createElement = hc;
D.createFactory = function(e) {
  var t = hc.bind(null, e);
  return t.type = e, t;
};
D.createRef = function() {
  return { current: null };
};
D.forwardRef = function(e) {
  return { $$typeof: Np, render: e };
};
D.isValidElement = wa;
D.lazy = function(e) {
  return { $$typeof: Pp, _payload: { _status: -1, _result: e }, _init: Op };
};
D.memo = function(e, t) {
  return { $$typeof: kp, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function(e) {
  var t = gi.transition;
  gi.transition = {};
  try {
    e();
  } finally {
    gi.transition = t;
  }
};
D.unstable_act = mc;
D.useCallback = function(e, t) {
  return Ce.current.useCallback(e, t);
};
D.useContext = function(e) {
  return Ce.current.useContext(e);
};
D.useDebugValue = function() {
};
D.useDeferredValue = function(e) {
  return Ce.current.useDeferredValue(e);
};
D.useEffect = function(e, t) {
  return Ce.current.useEffect(e, t);
};
D.useId = function() {
  return Ce.current.useId();
};
D.useImperativeHandle = function(e, t, n) {
  return Ce.current.useImperativeHandle(e, t, n);
};
D.useInsertionEffect = function(e, t) {
  return Ce.current.useInsertionEffect(e, t);
};
D.useLayoutEffect = function(e, t) {
  return Ce.current.useLayoutEffect(e, t);
};
D.useMemo = function(e, t) {
  return Ce.current.useMemo(e, t);
};
D.useReducer = function(e, t, n) {
  return Ce.current.useReducer(e, t, n);
};
D.useRef = function(e) {
  return Ce.current.useRef(e);
};
D.useState = function(e) {
  return Ce.current.useState(e);
};
D.useSyncExternalStore = function(e, t, n) {
  return Ce.current.useSyncExternalStore(e, t, n);
};
D.useTransition = function() {
  return Ce.current.useTransition();
};
D.version = "18.3.1";
ac.exports = D;
var _ = ac.exports;
const I = /* @__PURE__ */ Hr(_);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ap = _, Hp = Symbol.for("react.element"), Dp = Symbol.for("react.fragment"), Fp = Object.prototype.hasOwnProperty, Bp = Ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Up = { key: !0, ref: !0, __self: !0, __source: !0 };
function vc(e, t, n) {
  var r, i = {}, o = null, l = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Fp.call(t, r) && !Up.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: Hp, type: e, key: o, ref: l, props: i, _owner: Bp.current };
}
eo.Fragment = Dp;
eo.jsx = vc;
eo.jsxs = vc;
lc.exports = eo;
var P = lc.exports, gc = { exports: {} }, De = {}, yc = { exports: {} }, Ec = {};
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
  function t(w, L) {
    var A = w.length;
    w.push(L);
    e: for (; 0 < A; ) {
      var Z = A - 1 >>> 1, ee = w[Z];
      if (0 < i(ee, L)) w[Z] = L, w[A] = ee, A = Z;
      else break e;
    }
  }
  function n(w) {
    return w.length === 0 ? null : w[0];
  }
  function r(w) {
    if (w.length === 0) return null;
    var L = w[0], A = w.pop();
    if (A !== L) {
      w[0] = A;
      e: for (var Z = 0, ee = w.length, Wt = ee >>> 1; Z < Wt; ) {
        var ct = 2 * (Z + 1) - 1, Qn = w[ct], F = ct + 1, fe = w[F];
        if (0 > i(Qn, A)) F < ee && 0 > i(fe, Qn) ? (w[Z] = fe, w[F] = A, Z = F) : (w[Z] = Qn, w[ct] = A, Z = ct);
        else if (F < ee && 0 > i(fe, A)) w[Z] = fe, w[F] = A, Z = F;
        else break e;
      }
    }
    return L;
  }
  function i(w, L) {
    var A = w.sortIndex - L.sortIndex;
    return A !== 0 ? A : w.id - L.id;
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
  var u = [], s = [], c = 1, m = null, d = 3, v = !1, y = !1, g = !1, O = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(w) {
    for (var L = n(s); L !== null; ) {
      if (L.callback === null) r(s);
      else if (L.startTime <= w) r(s), L.sortIndex = L.expirationTime, t(u, L);
      else break;
      L = n(s);
    }
  }
  function E(w) {
    if (g = !1, h(w), !y) if (n(u) !== null) y = !0, Vt(S);
    else {
      var L = n(s);
      L !== null && mn(E, L.startTime - w);
    }
  }
  function S(w, L) {
    y = !1, g && (g = !1, p(R), R = -1), v = !0;
    var A = d;
    try {
      for (h(L), m = n(u); m !== null && (!(m.expirationTime > L) || w && !Ue()); ) {
        var Z = m.callback;
        if (typeof Z == "function") {
          m.callback = null, d = m.priorityLevel;
          var ee = Z(m.expirationTime <= L);
          L = e.unstable_now(), typeof ee == "function" ? m.callback = ee : m === n(u) && r(u), h(L);
        } else r(u);
        m = n(u);
      }
      if (m !== null) var Wt = !0;
      else {
        var ct = n(s);
        ct !== null && mn(E, ct.startTime - L), Wt = !1;
      }
      return Wt;
    } finally {
      m = null, d = A, v = !1;
    }
  }
  var N = !1, T = null, R = -1, b = 5, H = -1;
  function Ue() {
    return !(e.unstable_now() - H < b);
  }
  function st() {
    if (T !== null) {
      var w = e.unstable_now();
      H = w;
      var L = !0;
      try {
        L = T(!0, w);
      } finally {
        L ? ve() : (N = !1, T = null);
      }
    } else N = !1;
  }
  var ve;
  if (typeof f == "function") ve = function() {
    f(st);
  };
  else if (typeof MessageChannel < "u") {
    var hn = new MessageChannel(), br = hn.port2;
    hn.port1.onmessage = st, ve = function() {
      br.postMessage(null);
    };
  } else ve = function() {
    O(st, 0);
  };
  function Vt(w) {
    T = w, N || (N = !0, ve());
  }
  function mn(w, L) {
    R = O(function() {
      w(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(w) {
    w.callback = null;
  }, e.unstable_continueExecution = function() {
    y || v || (y = !0, Vt(S));
  }, e.unstable_forceFrameRate = function(w) {
    0 > w || 125 < w ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : b = 0 < w ? Math.floor(1e3 / w) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(w) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = d;
    }
    var A = d;
    d = L;
    try {
      return w();
    } finally {
      d = A;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(w, L) {
    switch (w) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        w = 3;
    }
    var A = d;
    d = w;
    try {
      return L();
    } finally {
      d = A;
    }
  }, e.unstable_scheduleCallback = function(w, L, A) {
    var Z = e.unstable_now();
    switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? Z + A : Z) : A = Z, w) {
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
    return ee = A + ee, w = { id: c++, callback: L, priorityLevel: w, startTime: A, expirationTime: ee, sortIndex: -1 }, A > Z ? (w.sortIndex = A, t(s, w), n(u) === null && w === n(s) && (g ? (p(R), R = -1) : g = !0, mn(E, A - Z))) : (w.sortIndex = ee, t(u, w), y || v || (y = !0, Vt(S))), w;
  }, e.unstable_shouldYield = Ue, e.unstable_wrapCallback = function(w) {
    var L = d;
    return function() {
      var A = d;
      d = L;
      try {
        return w.apply(this, arguments);
      } finally {
        d = A;
      }
    };
  };
})(Ec);
yc.exports = Ec;
var zp = yc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jp = _, Ae = zp;
function x(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var xc = /* @__PURE__ */ new Set(), yr = {};
function cn(e, t) {
  Dn(e, t), Dn(e + "Capture", t);
}
function Dn(e, t) {
  for (yr[e] = t, e = 0; e < t.length; e++) xc.add(t[e]);
}
var vt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), cl = Object.prototype.hasOwnProperty, $p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Lu = {}, Iu = {};
function bp(e) {
  return cl.call(Iu, e) ? !0 : cl.call(Lu, e) ? !1 : $p.test(e) ? Iu[e] = !0 : (Lu[e] = !0, !1);
}
function Gp(e, t, n, r) {
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
function Vp(e, t, n, r) {
  if (t === null || typeof t > "u" || Gp(e, t, n, r)) return !0;
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
function Ne(e, t, n, r, i, o, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l;
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ce[e] = new Ne(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ce[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ce[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ce[e] = new Ne(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ce[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ce[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ce[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ce[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ce[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ta = /[\-:]([a-z])/g;
function Ca(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ta,
    Ca
  );
  ce[t] = new Ne(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ta, Ca);
  ce[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ta, Ca);
  ce[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ce[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new Ne("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ce[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Na(e, t, n, r) {
  var i = ce.hasOwnProperty(t) ? ce[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Vp(t, n, i, r) && (n = null), r || i === null ? bp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var xt = jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Qr = Symbol.for("react.element"), yn = Symbol.for("react.portal"), En = Symbol.for("react.fragment"), _a = Symbol.for("react.strict_mode"), fl = Symbol.for("react.profiler"), Sc = Symbol.for("react.provider"), wc = Symbol.for("react.context"), ka = Symbol.for("react.forward_ref"), dl = Symbol.for("react.suspense"), pl = Symbol.for("react.suspense_list"), Pa = Symbol.for("react.memo"), Tt = Symbol.for("react.lazy"), Tc = Symbol.for("react.offscreen"), Ou = Symbol.iterator;
function Zn(e) {
  return e === null || typeof e != "object" ? null : (e = Ou && e[Ou] || e["@@iterator"], typeof e == "function" ? e : null);
}
var J = Object.assign, Mo;
function rr(e) {
  if (Mo === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Mo = t && t[1] || "";
  }
  return `
` + Mo + e;
}
var Ao = !1;
function Ho(e, t) {
  if (!e || Ao) return "";
  Ao = !0;
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
    Ao = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? rr(e) : "";
}
function Wp(e) {
  switch (e.tag) {
    case 5:
      return rr(e.type);
    case 16:
      return rr("Lazy");
    case 13:
      return rr("Suspense");
    case 19:
      return rr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ho(e.type, !1), e;
    case 11:
      return e = Ho(e.type.render, !1), e;
    case 1:
      return e = Ho(e.type, !0), e;
    default:
      return "";
  }
}
function hl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case En:
      return "Fragment";
    case yn:
      return "Portal";
    case fl:
      return "Profiler";
    case _a:
      return "StrictMode";
    case dl:
      return "Suspense";
    case pl:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case wc:
      return (e.displayName || "Context") + ".Consumer";
    case Sc:
      return (e._context.displayName || "Context") + ".Provider";
    case ka:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Pa:
      return t = e.displayName || null, t !== null ? t : hl(e.type) || "Memo";
    case Tt:
      t = e._payload, e = e._init;
      try {
        return hl(e(t));
      } catch {
      }
  }
  return null;
}
function Xp(e) {
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
      return hl(t);
    case 8:
      return t === _a ? "StrictMode" : "Mode";
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
function Bt(e) {
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
function Cc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Qp(e) {
  var t = Cc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Zr(e) {
  e._valueTracker || (e._valueTracker = Qp(e));
}
function Nc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Cc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ri(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ml(e, t) {
  var n = t.checked;
  return J({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Mu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Bt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function _c(e, t) {
  t = t.checked, t != null && Na(e, "checked", t, !1);
}
function vl(e, t) {
  _c(e, t);
  var n = Bt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? gl(e, t.type, n) : t.hasOwnProperty("defaultValue") && gl(e, t.type, Bt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Au(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function gl(e, t, n) {
  (t !== "number" || Ri(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ir = Array.isArray;
function Ln(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Bt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function yl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return J({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Hu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(x(92));
      if (ir(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Bt(n) };
}
function kc(e, t) {
  var n = Bt(t.value), r = Bt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Du(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Pc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function El(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Pc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Yr, Rc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Yr = Yr || document.createElement("div"), Yr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Yr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Er(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var sr = {
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
}, Zp = ["Webkit", "ms", "Moz", "O"];
Object.keys(sr).forEach(function(e) {
  Zp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), sr[t] = sr[e];
  });
});
function Lc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || sr.hasOwnProperty(e) && sr[e] ? ("" + t).trim() : t + "px";
}
function Ic(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = Lc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var Yp = J({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function xl(e, t) {
  if (t) {
    if (Yp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function Sl(e, t) {
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
var wl = null;
function Ra(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Tl = null, In = null, On = null;
function Fu(e) {
  if (e = Ur(e)) {
    if (typeof Tl != "function") throw Error(x(280));
    var t = e.stateNode;
    t && (t = oo(t), Tl(e.stateNode, e.type, t));
  }
}
function Oc(e) {
  In ? On ? On.push(e) : On = [e] : In = e;
}
function Mc() {
  if (In) {
    var e = In, t = On;
    if (On = In = null, Fu(e), t) for (e = 0; e < t.length; e++) Fu(t[e]);
  }
}
function Ac(e, t) {
  return e(t);
}
function Hc() {
}
var Do = !1;
function Dc(e, t, n) {
  if (Do) return e(t, n);
  Do = !0;
  try {
    return Ac(e, t, n);
  } finally {
    Do = !1, (In !== null || On !== null) && (Hc(), Mc());
  }
}
function xr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = oo(n);
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
var Cl = !1;
if (vt) try {
  var Yn = {};
  Object.defineProperty(Yn, "passive", { get: function() {
    Cl = !0;
  } }), window.addEventListener("test", Yn, Yn), window.removeEventListener("test", Yn, Yn);
} catch {
  Cl = !1;
}
function Kp(e, t, n, r, i, o, l, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var cr = !1, Li = null, Ii = !1, Nl = null, Jp = { onError: function(e) {
  cr = !0, Li = e;
} };
function qp(e, t, n, r, i, o, l, a, u) {
  cr = !1, Li = null, Kp.apply(Jp, arguments);
}
function eh(e, t, n, r, i, o, l, a, u) {
  if (qp.apply(this, arguments), cr) {
    if (cr) {
      var s = Li;
      cr = !1, Li = null;
    } else throw Error(x(198));
    Ii || (Ii = !0, Nl = s);
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
function Fc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Bu(e) {
  if (fn(e) !== e) throw Error(x(188));
}
function th(e) {
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
        if (o === n) return Bu(i), e;
        if (o === r) return Bu(i), t;
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
function Bc(e) {
  return e = th(e), e !== null ? Uc(e) : null;
}
function Uc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Uc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var zc = Ae.unstable_scheduleCallback, Uu = Ae.unstable_cancelCallback, nh = Ae.unstable_shouldYield, rh = Ae.unstable_requestPaint, te = Ae.unstable_now, ih = Ae.unstable_getCurrentPriorityLevel, La = Ae.unstable_ImmediatePriority, jc = Ae.unstable_UserBlockingPriority, Oi = Ae.unstable_NormalPriority, oh = Ae.unstable_LowPriority, $c = Ae.unstable_IdlePriority, to = null, lt = null;
function lh(e) {
  if (lt && typeof lt.onCommitFiberRoot == "function") try {
    lt.onCommitFiberRoot(to, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var et = Math.clz32 ? Math.clz32 : sh, ah = Math.log, uh = Math.LN2;
function sh(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (ah(e) / uh | 0) | 0;
}
var Kr = 64, Jr = 4194304;
function or(e) {
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
function Mi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, o = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var a = l & ~i;
    a !== 0 ? r = or(a) : (o &= l, o !== 0 && (r = or(o)));
  } else l = n & ~i, l !== 0 ? r = or(l) : o !== 0 && (r = or(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - et(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function ch(e, t) {
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
function fh(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var l = 31 - et(o), a = 1 << l, u = i[l];
    u === -1 ? (!(a & n) || a & r) && (i[l] = ch(a, t)) : u <= t && (e.expiredLanes |= a), o &= ~a;
  }
}
function _l(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function bc() {
  var e = Kr;
  return Kr <<= 1, !(Kr & 4194240) && (Kr = 64), e;
}
function Fo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Fr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - et(t), e[t] = n;
}
function dh(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - et(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
  }
}
function Ia(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - et(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var j = 0;
function Gc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Vc, Oa, Wc, Xc, Qc, kl = !1, qr = [], Lt = null, It = null, Ot = null, Sr = /* @__PURE__ */ new Map(), wr = /* @__PURE__ */ new Map(), _t = [], ph = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function zu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Lt = null;
      break;
    case "dragenter":
    case "dragleave":
      It = null;
      break;
    case "mouseover":
    case "mouseout":
      Ot = null;
      break;
    case "pointerover":
    case "pointerout":
      Sr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      wr.delete(t.pointerId);
  }
}
function Kn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = Ur(t), t !== null && Oa(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function hh(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return Lt = Kn(Lt, e, t, n, r, i), !0;
    case "dragenter":
      return It = Kn(It, e, t, n, r, i), !0;
    case "mouseover":
      return Ot = Kn(Ot, e, t, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return Sr.set(o, Kn(Sr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, wr.set(o, Kn(wr.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Zc(e) {
  var t = Jt(e.target);
  if (t !== null) {
    var n = fn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Fc(n), t !== null) {
          e.blockedOn = t, Qc(e.priority, function() {
            Wc(n);
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
function yi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Pl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      wl = r, n.target.dispatchEvent(r), wl = null;
    } else return t = Ur(n), t !== null && Oa(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ju(e, t, n) {
  yi(e) && n.delete(t);
}
function mh() {
  kl = !1, Lt !== null && yi(Lt) && (Lt = null), It !== null && yi(It) && (It = null), Ot !== null && yi(Ot) && (Ot = null), Sr.forEach(ju), wr.forEach(ju);
}
function Jn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, kl || (kl = !0, Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority, mh)));
}
function Tr(e) {
  function t(i) {
    return Jn(i, e);
  }
  if (0 < qr.length) {
    Jn(qr[0], e);
    for (var n = 1; n < qr.length; n++) {
      var r = qr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Lt !== null && Jn(Lt, e), It !== null && Jn(It, e), Ot !== null && Jn(Ot, e), Sr.forEach(t), wr.forEach(t), n = 0; n < _t.length; n++) r = _t[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < _t.length && (n = _t[0], n.blockedOn === null); ) Zc(n), n.blockedOn === null && _t.shift();
}
var Mn = xt.ReactCurrentBatchConfig, Ai = !0;
function vh(e, t, n, r) {
  var i = j, o = Mn.transition;
  Mn.transition = null;
  try {
    j = 1, Ma(e, t, n, r);
  } finally {
    j = i, Mn.transition = o;
  }
}
function gh(e, t, n, r) {
  var i = j, o = Mn.transition;
  Mn.transition = null;
  try {
    j = 4, Ma(e, t, n, r);
  } finally {
    j = i, Mn.transition = o;
  }
}
function Ma(e, t, n, r) {
  if (Ai) {
    var i = Pl(e, t, n, r);
    if (i === null) Xo(e, t, r, Hi, n), zu(e, r);
    else if (hh(i, e, t, n, r)) r.stopPropagation();
    else if (zu(e, r), t & 4 && -1 < ph.indexOf(e)) {
      for (; i !== null; ) {
        var o = Ur(i);
        if (o !== null && Vc(o), o = Pl(e, t, n, r), o === null && Xo(e, t, r, Hi, n), o === i) break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Xo(e, t, r, null, n);
  }
}
var Hi = null;
function Pl(e, t, n, r) {
  if (Hi = null, e = Ra(r), e = Jt(e), e !== null) if (t = fn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Fc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Hi = e, null;
}
function Yc(e) {
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
      switch (ih()) {
        case La:
          return 1;
        case jc:
          return 4;
        case Oi:
        case oh:
          return 16;
        case $c:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Pt = null, Aa = null, Ei = null;
function Kc() {
  if (Ei) return Ei;
  var e, t = Aa, n = t.length, r, i = "value" in Pt ? Pt.value : Pt.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++) ;
  return Ei = i.slice(e, 1 < r ? 1 - r : void 0);
}
function xi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ei() {
  return !0;
}
function $u() {
  return !1;
}
function Fe(e) {
  function t(n, r, i, o, l) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ei : $u, this.isPropagationStopped = $u, this;
  }
  return J(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ei);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ei);
  }, persist: function() {
  }, isPersistent: ei }), t;
}
var Wn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ha = Fe(Wn), Br = J({}, Wn, { view: 0, detail: 0 }), yh = Fe(Br), Bo, Uo, qn, no = J({}, Br, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Da, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== qn && (qn && e.type === "mousemove" ? (Bo = e.screenX - qn.screenX, Uo = e.screenY - qn.screenY) : Uo = Bo = 0, qn = e), Bo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Uo;
} }), bu = Fe(no), Eh = J({}, no, { dataTransfer: 0 }), xh = Fe(Eh), Sh = J({}, Br, { relatedTarget: 0 }), zo = Fe(Sh), wh = J({}, Wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Th = Fe(wh), Ch = J({}, Wn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Nh = Fe(Ch), _h = J({}, Wn, { data: 0 }), Gu = Fe(_h), kh = {
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
}, Ph = {
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
}, Rh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Lh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Rh[e]) ? !!t[e] : !1;
}
function Da() {
  return Lh;
}
var Ih = J({}, Br, { key: function(e) {
  if (e.key) {
    var t = kh[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = xi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ph[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Da, charCode: function(e) {
  return e.type === "keypress" ? xi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? xi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Oh = Fe(Ih), Mh = J({}, no, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Vu = Fe(Mh), Ah = J({}, Br, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Da }), Hh = Fe(Ah), Dh = J({}, Wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Fh = Fe(Dh), Bh = J({}, no, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Uh = Fe(Bh), zh = [9, 13, 27, 32], Fa = vt && "CompositionEvent" in window, fr = null;
vt && "documentMode" in document && (fr = document.documentMode);
var jh = vt && "TextEvent" in window && !fr, Jc = vt && (!Fa || fr && 8 < fr && 11 >= fr), Wu = " ", Xu = !1;
function qc(e, t) {
  switch (e) {
    case "keyup":
      return zh.indexOf(t.keyCode) !== -1;
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
function ef(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var xn = !1;
function $h(e, t) {
  switch (e) {
    case "compositionend":
      return ef(t);
    case "keypress":
      return t.which !== 32 ? null : (Xu = !0, Wu);
    case "textInput":
      return e = t.data, e === Wu && Xu ? null : e;
    default:
      return null;
  }
}
function bh(e, t) {
  if (xn) return e === "compositionend" || !Fa && qc(e, t) ? (e = Kc(), Ei = Aa = Pt = null, xn = !1, e) : null;
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
      return Jc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Gh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Qu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Gh[e.type] : t === "textarea";
}
function tf(e, t, n, r) {
  Oc(r), t = Di(t, "onChange"), 0 < t.length && (n = new Ha("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var dr = null, Cr = null;
function Vh(e) {
  pf(e, 0);
}
function ro(e) {
  var t = Tn(e);
  if (Nc(t)) return e;
}
function Wh(e, t) {
  if (e === "change") return t;
}
var nf = !1;
if (vt) {
  var jo;
  if (vt) {
    var $o = "oninput" in document;
    if (!$o) {
      var Zu = document.createElement("div");
      Zu.setAttribute("oninput", "return;"), $o = typeof Zu.oninput == "function";
    }
    jo = $o;
  } else jo = !1;
  nf = jo && (!document.documentMode || 9 < document.documentMode);
}
function Yu() {
  dr && (dr.detachEvent("onpropertychange", rf), Cr = dr = null);
}
function rf(e) {
  if (e.propertyName === "value" && ro(Cr)) {
    var t = [];
    tf(t, Cr, e, Ra(e)), Dc(Vh, t);
  }
}
function Xh(e, t, n) {
  e === "focusin" ? (Yu(), dr = t, Cr = n, dr.attachEvent("onpropertychange", rf)) : e === "focusout" && Yu();
}
function Qh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ro(Cr);
}
function Zh(e, t) {
  if (e === "click") return ro(t);
}
function Yh(e, t) {
  if (e === "input" || e === "change") return ro(t);
}
function Kh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var nt = typeof Object.is == "function" ? Object.is : Kh;
function Nr(e, t) {
  if (nt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!cl.call(t, i) || !nt(e[i], t[i])) return !1;
  }
  return !0;
}
function Ku(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ju(e, t) {
  var n = Ku(e);
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
    n = Ku(n);
  }
}
function of(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? of(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function lf() {
  for (var e = window, t = Ri(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ri(e.document);
  }
  return t;
}
function Ba(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Jh(e) {
  var t = lf(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && of(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ba(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Ju(n, o);
        var l = Ju(
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
var qh = vt && "documentMode" in document && 11 >= document.documentMode, Sn = null, Rl = null, pr = null, Ll = !1;
function qu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ll || Sn == null || Sn !== Ri(r) || (r = Sn, "selectionStart" in r && Ba(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), pr && Nr(pr, r) || (pr = r, r = Di(Rl, "onSelect"), 0 < r.length && (t = new Ha("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Sn)));
}
function ti(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var wn = { animationend: ti("Animation", "AnimationEnd"), animationiteration: ti("Animation", "AnimationIteration"), animationstart: ti("Animation", "AnimationStart"), transitionend: ti("Transition", "TransitionEnd") }, bo = {}, af = {};
vt && (af = document.createElement("div").style, "AnimationEvent" in window || (delete wn.animationend.animation, delete wn.animationiteration.animation, delete wn.animationstart.animation), "TransitionEvent" in window || delete wn.transitionend.transition);
function io(e) {
  if (bo[e]) return bo[e];
  if (!wn[e]) return e;
  var t = wn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in af) return bo[e] = t[n];
  return e;
}
var uf = io("animationend"), sf = io("animationiteration"), cf = io("animationstart"), ff = io("transitionend"), df = /* @__PURE__ */ new Map(), es = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function zt(e, t) {
  df.set(e, t), cn(t, [e]);
}
for (var Go = 0; Go < es.length; Go++) {
  var Vo = es[Go], em = Vo.toLowerCase(), tm = Vo[0].toUpperCase() + Vo.slice(1);
  zt(em, "on" + tm);
}
zt(uf, "onAnimationEnd");
zt(sf, "onAnimationIteration");
zt(cf, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt(ff, "onTransitionEnd");
Dn("onMouseEnter", ["mouseout", "mouseover"]);
Dn("onMouseLeave", ["mouseout", "mouseover"]);
Dn("onPointerEnter", ["pointerout", "pointerover"]);
Dn("onPointerLeave", ["pointerout", "pointerover"]);
cn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
cn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
cn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), nm = new Set("cancel close invalid load scroll toggle".split(" ").concat(lr));
function ts(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, eh(r, t, void 0, e), e.currentTarget = null;
}
function pf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var a = r[l], u = a.instance, s = a.currentTarget;
        if (a = a.listener, u !== o && i.isPropagationStopped()) break e;
        ts(i, a, s), o = u;
      }
      else for (l = 0; l < r.length; l++) {
        if (a = r[l], u = a.instance, s = a.currentTarget, a = a.listener, u !== o && i.isPropagationStopped()) break e;
        ts(i, a, s), o = u;
      }
    }
  }
  if (Ii) throw e = Nl, Ii = !1, Nl = null, e;
}
function V(e, t) {
  var n = t[Hl];
  n === void 0 && (n = t[Hl] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (hf(t, e, 2, !1), n.add(r));
}
function Wo(e, t, n) {
  var r = 0;
  t && (r |= 4), hf(n, e, r, t);
}
var ni = "_reactListening" + Math.random().toString(36).slice(2);
function _r(e) {
  if (!e[ni]) {
    e[ni] = !0, xc.forEach(function(n) {
      n !== "selectionchange" && (nm.has(n) || Wo(n, !1, e), Wo(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ni] || (t[ni] = !0, Wo("selectionchange", !1, t));
  }
}
function hf(e, t, n, r) {
  switch (Yc(t)) {
    case 1:
      var i = vh;
      break;
    case 4:
      i = gh;
      break;
    default:
      i = Ma;
  }
  n = i.bind(null, t, n, e), i = void 0, !Cl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function Xo(e, t, n, r, i) {
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
  Dc(function() {
    var s = o, c = Ra(n), m = [];
    e: {
      var d = df.get(e);
      if (d !== void 0) {
        var v = Ha, y = e;
        switch (e) {
          case "keypress":
            if (xi(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Oh;
            break;
          case "focusin":
            y = "focus", v = zo;
            break;
          case "focusout":
            y = "blur", v = zo;
            break;
          case "beforeblur":
          case "afterblur":
            v = zo;
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
            v = bu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = xh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Hh;
            break;
          case uf:
          case sf:
          case cf:
            v = Th;
            break;
          case ff:
            v = Fh;
            break;
          case "scroll":
            v = yh;
            break;
          case "wheel":
            v = Uh;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Nh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Vu;
        }
        var g = (t & 4) !== 0, O = !g && e === "scroll", p = g ? d !== null ? d + "Capture" : null : d;
        g = [];
        for (var f = s, h; f !== null; ) {
          h = f;
          var E = h.stateNode;
          if (h.tag === 5 && E !== null && (h = E, p !== null && (E = xr(f, p), E != null && g.push(kr(f, E, h)))), O) break;
          f = f.return;
        }
        0 < g.length && (d = new v(d, y, null, n, c), m.push({ event: d, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", d && n !== wl && (y = n.relatedTarget || n.fromElement) && (Jt(y) || y[gt])) break e;
        if ((v || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, v ? (y = n.relatedTarget || n.toElement, v = s, y = y ? Jt(y) : null, y !== null && (O = fn(y), y !== O || y.tag !== 5 && y.tag !== 6) && (y = null)) : (v = null, y = s), v !== y)) {
          if (g = bu, E = "onMouseLeave", p = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (g = Vu, E = "onPointerLeave", p = "onPointerEnter", f = "pointer"), O = v == null ? d : Tn(v), h = y == null ? d : Tn(y), d = new g(E, f + "leave", v, n, c), d.target = O, d.relatedTarget = h, E = null, Jt(c) === s && (g = new g(p, f + "enter", y, n, c), g.target = h, g.relatedTarget = O, E = g), O = E, v && y) t: {
            for (g = v, p = y, f = 0, h = g; h; h = vn(h)) f++;
            for (h = 0, E = p; E; E = vn(E)) h++;
            for (; 0 < f - h; ) g = vn(g), f--;
            for (; 0 < h - f; ) p = vn(p), h--;
            for (; f--; ) {
              if (g === p || p !== null && g === p.alternate) break t;
              g = vn(g), p = vn(p);
            }
            g = null;
          }
          else g = null;
          v !== null && ns(m, d, v, g, !1), y !== null && O !== null && ns(m, O, y, g, !0);
        }
      }
      e: {
        if (d = s ? Tn(s) : window, v = d.nodeName && d.nodeName.toLowerCase(), v === "select" || v === "input" && d.type === "file") var S = Wh;
        else if (Qu(d)) if (nf) S = Yh;
        else {
          S = Qh;
          var N = Xh;
        }
        else (v = d.nodeName) && v.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (S = Zh);
        if (S && (S = S(e, s))) {
          tf(m, S, n, c);
          break e;
        }
        N && N(e, d, s), e === "focusout" && (N = d._wrapperState) && N.controlled && d.type === "number" && gl(d, "number", d.value);
      }
      switch (N = s ? Tn(s) : window, e) {
        case "focusin":
          (Qu(N) || N.contentEditable === "true") && (Sn = N, Rl = s, pr = null);
          break;
        case "focusout":
          pr = Rl = Sn = null;
          break;
        case "mousedown":
          Ll = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ll = !1, qu(m, n, c);
          break;
        case "selectionchange":
          if (qh) break;
        case "keydown":
        case "keyup":
          qu(m, n, c);
      }
      var T;
      if (Fa) e: {
        switch (e) {
          case "compositionstart":
            var R = "onCompositionStart";
            break e;
          case "compositionend":
            R = "onCompositionEnd";
            break e;
          case "compositionupdate":
            R = "onCompositionUpdate";
            break e;
        }
        R = void 0;
      }
      else xn ? qc(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (Jc && n.locale !== "ko" && (xn || R !== "onCompositionStart" ? R === "onCompositionEnd" && xn && (T = Kc()) : (Pt = c, Aa = "value" in Pt ? Pt.value : Pt.textContent, xn = !0)), N = Di(s, R), 0 < N.length && (R = new Gu(R, e, null, n, c), m.push({ event: R, listeners: N }), T ? R.data = T : (T = ef(n), T !== null && (R.data = T)))), (T = jh ? $h(e, n) : bh(e, n)) && (s = Di(s, "onBeforeInput"), 0 < s.length && (c = new Gu("onBeforeInput", "beforeinput", null, n, c), m.push({ event: c, listeners: s }), c.data = T));
    }
    pf(m, t);
  });
}
function kr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Di(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = xr(e, n), o != null && r.unshift(kr(e, o, i)), o = xr(e, t), o != null && r.push(kr(e, o, i))), e = e.return;
  }
  return r;
}
function vn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ns(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n, u = a.alternate, s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 && s !== null && (a = s, i ? (u = xr(n, o), u != null && l.unshift(kr(n, u, a))) : i || (u = xr(n, o), u != null && l.push(kr(n, u, a)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var rm = /\r\n?/g, im = /\u0000|\uFFFD/g;
function rs(e) {
  return (typeof e == "string" ? e : "" + e).replace(rm, `
`).replace(im, "");
}
function ri(e, t, n) {
  if (t = rs(t), rs(e) !== t && n) throw Error(x(425));
}
function Fi() {
}
var Il = null, Ol = null;
function Ml(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Al = typeof setTimeout == "function" ? setTimeout : void 0, om = typeof clearTimeout == "function" ? clearTimeout : void 0, is = typeof Promise == "function" ? Promise : void 0, lm = typeof queueMicrotask == "function" ? queueMicrotask : typeof is < "u" ? function(e) {
  return is.resolve(null).then(e).catch(am);
} : Al;
function am(e) {
  setTimeout(function() {
    throw e;
  });
}
function Qo(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), Tr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Tr(t);
}
function Mt(e) {
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
function os(e) {
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
var Xn = Math.random().toString(36).slice(2), ot = "__reactFiber$" + Xn, Pr = "__reactProps$" + Xn, gt = "__reactContainer$" + Xn, Hl = "__reactEvents$" + Xn, um = "__reactListeners$" + Xn, sm = "__reactHandles$" + Xn;
function Jt(e) {
  var t = e[ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[gt] || n[ot]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = os(e); e !== null; ) {
        if (n = e[ot]) return n;
        e = os(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ur(e) {
  return e = e[ot] || e[gt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Tn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function oo(e) {
  return e[Pr] || null;
}
var Dl = [], Cn = -1;
function jt(e) {
  return { current: e };
}
function X(e) {
  0 > Cn || (e.current = Dl[Cn], Dl[Cn] = null, Cn--);
}
function G(e, t) {
  Cn++, Dl[Cn] = e.current, e.current = t;
}
var Ut = {}, me = jt(Ut), Pe = jt(!1), rn = Ut;
function Fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ut;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n) i[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function Re(e) {
  return e = e.childContextTypes, e != null;
}
function Bi() {
  X(Pe), X(me);
}
function ls(e, t, n) {
  if (me.current !== Ut) throw Error(x(168));
  G(me, t), G(Pe, n);
}
function mf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(x(108, Xp(e) || "Unknown", i));
  return J({}, n, r);
}
function Ui(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ut, rn = me.current, G(me, e), G(Pe, Pe.current), !0;
}
function as(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n ? (e = mf(e, t, rn), r.__reactInternalMemoizedMergedChildContext = e, X(Pe), X(me), G(me, e)) : X(Pe), G(Pe, n);
}
var dt = null, lo = !1, Zo = !1;
function vf(e) {
  dt === null ? dt = [e] : dt.push(e);
}
function cm(e) {
  lo = !0, vf(e);
}
function $t() {
  if (!Zo && dt !== null) {
    Zo = !0;
    var e = 0, t = j;
    try {
      var n = dt;
      for (j = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      dt = null, lo = !1;
    } catch (i) {
      throw dt !== null && (dt = dt.slice(e + 1)), zc(La, $t), i;
    } finally {
      j = t, Zo = !1;
    }
  }
  return null;
}
var Nn = [], _n = 0, zi = null, ji = 0, je = [], $e = 0, on = null, pt = 1, ht = "";
function Qt(e, t) {
  Nn[_n++] = ji, Nn[_n++] = zi, zi = e, ji = t;
}
function gf(e, t, n) {
  je[$e++] = pt, je[$e++] = ht, je[$e++] = on, on = e;
  var r = pt;
  e = ht;
  var i = 32 - et(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - et(t) + i;
  if (30 < o) {
    var l = i - i % 5;
    o = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, pt = 1 << 32 - et(t) + i | n << i | r, ht = o + e;
  } else pt = 1 << o | n << i | r, ht = e;
}
function Ua(e) {
  e.return !== null && (Qt(e, 1), gf(e, 1, 0));
}
function za(e) {
  for (; e === zi; ) zi = Nn[--_n], Nn[_n] = null, ji = Nn[--_n], Nn[_n] = null;
  for (; e === on; ) on = je[--$e], je[$e] = null, ht = je[--$e], je[$e] = null, pt = je[--$e], je[$e] = null;
}
var Me = null, Oe = null, Q = !1, qe = null;
function yf(e, t) {
  var n = be(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function us(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Me = e, Oe = Mt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Me = e, Oe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = on !== null ? { id: pt, overflow: ht } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = be(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Me = e, Oe = null, !0) : !1;
    default:
      return !1;
  }
}
function Fl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Bl(e) {
  if (Q) {
    var t = Oe;
    if (t) {
      var n = t;
      if (!us(e, t)) {
        if (Fl(e)) throw Error(x(418));
        t = Mt(n.nextSibling);
        var r = Me;
        t && us(e, t) ? yf(r, n) : (e.flags = e.flags & -4097 | 2, Q = !1, Me = e);
      }
    } else {
      if (Fl(e)) throw Error(x(418));
      e.flags = e.flags & -4097 | 2, Q = !1, Me = e;
    }
  }
}
function ss(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Me = e;
}
function ii(e) {
  if (e !== Me) return !1;
  if (!Q) return ss(e), Q = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ml(e.type, e.memoizedProps)), t && (t = Oe)) {
    if (Fl(e)) throw Ef(), Error(x(418));
    for (; t; ) yf(e, t), t = Mt(t.nextSibling);
  }
  if (ss(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Oe = Mt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Oe = null;
    }
  } else Oe = Me ? Mt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ef() {
  for (var e = Oe; e; ) e = Mt(e.nextSibling);
}
function Bn() {
  Oe = Me = null, Q = !1;
}
function ja(e) {
  qe === null ? qe = [e] : qe.push(e);
}
var fm = xt.ReactCurrentBatchConfig;
function er(e, t, n) {
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
function oi(e, t) {
  throw e = Object.prototype.toString.call(t), Error(x(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function cs(e) {
  var t = e._init;
  return t(e._payload);
}
function xf(e) {
  function t(p, f) {
    if (e) {
      var h = p.deletions;
      h === null ? (p.deletions = [f], p.flags |= 16) : h.push(f);
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
    return p = Ft(p, f), p.index = 0, p.sibling = null, p;
  }
  function o(p, f, h) {
    return p.index = h, e ? (h = p.alternate, h !== null ? (h = h.index, h < f ? (p.flags |= 2, f) : h) : (p.flags |= 2, f)) : (p.flags |= 1048576, f);
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, f, h, E) {
    return f === null || f.tag !== 6 ? (f = nl(h, p.mode, E), f.return = p, f) : (f = i(f, h), f.return = p, f);
  }
  function u(p, f, h, E) {
    var S = h.type;
    return S === En ? c(p, f, h.props.children, E, h.key) : f !== null && (f.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Tt && cs(S) === f.type) ? (E = i(f, h.props), E.ref = er(p, f, h), E.return = p, E) : (E = ki(h.type, h.key, h.props, null, p.mode, E), E.ref = er(p, f, h), E.return = p, E);
  }
  function s(p, f, h, E) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== h.containerInfo || f.stateNode.implementation !== h.implementation ? (f = rl(h, p.mode, E), f.return = p, f) : (f = i(f, h.children || []), f.return = p, f);
  }
  function c(p, f, h, E, S) {
    return f === null || f.tag !== 7 ? (f = nn(h, p.mode, E, S), f.return = p, f) : (f = i(f, h), f.return = p, f);
  }
  function m(p, f, h) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = nl("" + f, p.mode, h), f.return = p, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Qr:
          return h = ki(f.type, f.key, f.props, null, p.mode, h), h.ref = er(p, null, f), h.return = p, h;
        case yn:
          return f = rl(f, p.mode, h), f.return = p, f;
        case Tt:
          var E = f._init;
          return m(p, E(f._payload), h);
      }
      if (ir(f) || Zn(f)) return f = nn(f, p.mode, h, null), f.return = p, f;
      oi(p, f);
    }
    return null;
  }
  function d(p, f, h, E) {
    var S = f !== null ? f.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return S !== null ? null : a(p, f, "" + h, E);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Qr:
          return h.key === S ? u(p, f, h, E) : null;
        case yn:
          return h.key === S ? s(p, f, h, E) : null;
        case Tt:
          return S = h._init, d(
            p,
            f,
            S(h._payload),
            E
          );
      }
      if (ir(h) || Zn(h)) return S !== null ? null : c(p, f, h, E, null);
      oi(p, h);
    }
    return null;
  }
  function v(p, f, h, E, S) {
    if (typeof E == "string" && E !== "" || typeof E == "number") return p = p.get(h) || null, a(f, p, "" + E, S);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Qr:
          return p = p.get(E.key === null ? h : E.key) || null, u(f, p, E, S);
        case yn:
          return p = p.get(E.key === null ? h : E.key) || null, s(f, p, E, S);
        case Tt:
          var N = E._init;
          return v(p, f, h, N(E._payload), S);
      }
      if (ir(E) || Zn(E)) return p = p.get(h) || null, c(f, p, E, S, null);
      oi(f, E);
    }
    return null;
  }
  function y(p, f, h, E) {
    for (var S = null, N = null, T = f, R = f = 0, b = null; T !== null && R < h.length; R++) {
      T.index > R ? (b = T, T = null) : b = T.sibling;
      var H = d(p, T, h[R], E);
      if (H === null) {
        T === null && (T = b);
        break;
      }
      e && T && H.alternate === null && t(p, T), f = o(H, f, R), N === null ? S = H : N.sibling = H, N = H, T = b;
    }
    if (R === h.length) return n(p, T), Q && Qt(p, R), S;
    if (T === null) {
      for (; R < h.length; R++) T = m(p, h[R], E), T !== null && (f = o(T, f, R), N === null ? S = T : N.sibling = T, N = T);
      return Q && Qt(p, R), S;
    }
    for (T = r(p, T); R < h.length; R++) b = v(T, p, R, h[R], E), b !== null && (e && b.alternate !== null && T.delete(b.key === null ? R : b.key), f = o(b, f, R), N === null ? S = b : N.sibling = b, N = b);
    return e && T.forEach(function(Ue) {
      return t(p, Ue);
    }), Q && Qt(p, R), S;
  }
  function g(p, f, h, E) {
    var S = Zn(h);
    if (typeof S != "function") throw Error(x(150));
    if (h = S.call(h), h == null) throw Error(x(151));
    for (var N = S = null, T = f, R = f = 0, b = null, H = h.next(); T !== null && !H.done; R++, H = h.next()) {
      T.index > R ? (b = T, T = null) : b = T.sibling;
      var Ue = d(p, T, H.value, E);
      if (Ue === null) {
        T === null && (T = b);
        break;
      }
      e && T && Ue.alternate === null && t(p, T), f = o(Ue, f, R), N === null ? S = Ue : N.sibling = Ue, N = Ue, T = b;
    }
    if (H.done) return n(
      p,
      T
    ), Q && Qt(p, R), S;
    if (T === null) {
      for (; !H.done; R++, H = h.next()) H = m(p, H.value, E), H !== null && (f = o(H, f, R), N === null ? S = H : N.sibling = H, N = H);
      return Q && Qt(p, R), S;
    }
    for (T = r(p, T); !H.done; R++, H = h.next()) H = v(T, p, R, H.value, E), H !== null && (e && H.alternate !== null && T.delete(H.key === null ? R : H.key), f = o(H, f, R), N === null ? S = H : N.sibling = H, N = H);
    return e && T.forEach(function(st) {
      return t(p, st);
    }), Q && Qt(p, R), S;
  }
  function O(p, f, h, E) {
    if (typeof h == "object" && h !== null && h.type === En && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Qr:
          e: {
            for (var S = h.key, N = f; N !== null; ) {
              if (N.key === S) {
                if (S = h.type, S === En) {
                  if (N.tag === 7) {
                    n(p, N.sibling), f = i(N, h.props.children), f.return = p, p = f;
                    break e;
                  }
                } else if (N.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Tt && cs(S) === N.type) {
                  n(p, N.sibling), f = i(N, h.props), f.ref = er(p, N, h), f.return = p, p = f;
                  break e;
                }
                n(p, N);
                break;
              } else t(p, N);
              N = N.sibling;
            }
            h.type === En ? (f = nn(h.props.children, p.mode, E, h.key), f.return = p, p = f) : (E = ki(h.type, h.key, h.props, null, p.mode, E), E.ref = er(p, f, h), E.return = p, p = E);
          }
          return l(p);
        case yn:
          e: {
            for (N = h.key; f !== null; ) {
              if (f.key === N) if (f.tag === 4 && f.stateNode.containerInfo === h.containerInfo && f.stateNode.implementation === h.implementation) {
                n(p, f.sibling), f = i(f, h.children || []), f.return = p, p = f;
                break e;
              } else {
                n(p, f);
                break;
              }
              else t(p, f);
              f = f.sibling;
            }
            f = rl(h, p.mode, E), f.return = p, p = f;
          }
          return l(p);
        case Tt:
          return N = h._init, O(p, f, N(h._payload), E);
      }
      if (ir(h)) return y(p, f, h, E);
      if (Zn(h)) return g(p, f, h, E);
      oi(p, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, f !== null && f.tag === 6 ? (n(p, f.sibling), f = i(f, h), f.return = p, p = f) : (n(p, f), f = nl(h, p.mode, E), f.return = p, p = f), l(p)) : n(p, f);
  }
  return O;
}
var Un = xf(!0), Sf = xf(!1), $i = jt(null), bi = null, kn = null, $a = null;
function ba() {
  $a = kn = bi = null;
}
function Ga(e) {
  var t = $i.current;
  X($i), e._currentValue = t;
}
function Ul(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function An(e, t) {
  bi = e, $a = kn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ke = !0), e.firstContext = null);
}
function Ve(e) {
  var t = e._currentValue;
  if ($a !== e) if (e = { context: e, memoizedValue: t, next: null }, kn === null) {
    if (bi === null) throw Error(x(308));
    kn = e, bi.dependencies = { lanes: 0, firstContext: e };
  } else kn = kn.next = e;
  return t;
}
var qt = null;
function Va(e) {
  qt === null ? qt = [e] : qt.push(e);
}
function wf(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, Va(t)) : (n.next = i.next, i.next = n), t.interleaved = n, yt(e, r);
}
function yt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Ct = !1;
function Wa(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Tf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function mt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function At(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, z & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, yt(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, Va(r)) : (t.next = i.next, i.next = t), r.interleaved = t, yt(e, n);
}
function Si(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ia(e, n);
  }
}
function fs(e, t) {
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
function Gi(e, t, n, r) {
  var i = e.updateQueue;
  Ct = !1;
  var o = i.firstBaseUpdate, l = i.lastBaseUpdate, a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var u = a, s = u.next;
    u.next = null, l === null ? o = s : l.next = s, l = u;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== l && (a === null ? c.firstBaseUpdate = s : a.next = s, c.lastBaseUpdate = u));
  }
  if (o !== null) {
    var m = i.baseState;
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
          var y = e, g = a;
          switch (d = t, v = n, g.tag) {
            case 1:
              if (y = g.payload, typeof y == "function") {
                m = y.call(v, m, d);
                break e;
              }
              m = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = g.payload, d = typeof y == "function" ? y.call(v, m, d) : y, d == null) break e;
              m = J({}, m, d);
              break e;
            case 2:
              Ct = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [a] : d.push(a));
      } else v = { eventTime: v, lane: d, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (s = c = v, u = m) : c = c.next = v, l |= d;
      if (a = a.next, a === null) {
        if (a = i.shared.pending, a === null) break;
        d = a, a = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null;
      }
    } while (!0);
    if (c === null && (u = m), i.baseState = u, i.firstBaseUpdate = s, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        l |= i.lane, i = i.next;
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    an |= l, e.lanes = l, e.memoizedState = m;
  }
}
function ds(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(x(191, i));
      i.call(r);
    }
  }
}
var zr = {}, at = jt(zr), Rr = jt(zr), Lr = jt(zr);
function en(e) {
  if (e === zr) throw Error(x(174));
  return e;
}
function Xa(e, t) {
  switch (G(Lr, t), G(Rr, e), G(at, zr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : El(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = El(t, e);
  }
  X(at), G(at, t);
}
function zn() {
  X(at), X(Rr), X(Lr);
}
function Cf(e) {
  en(Lr.current);
  var t = en(at.current), n = El(t, e.type);
  t !== n && (G(Rr, e), G(at, n));
}
function Qa(e) {
  Rr.current === e && (X(at), X(Rr));
}
var Y = jt(0);
function Vi(e) {
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
var Yo = [];
function Za() {
  for (var e = 0; e < Yo.length; e++) Yo[e]._workInProgressVersionPrimary = null;
  Yo.length = 0;
}
var wi = xt.ReactCurrentDispatcher, Ko = xt.ReactCurrentBatchConfig, ln = 0, K = null, re = null, oe = null, Wi = !1, hr = !1, Ir = 0, dm = 0;
function de() {
  throw Error(x(321));
}
function Ya(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!nt(e[n], t[n])) return !1;
  return !0;
}
function Ka(e, t, n, r, i, o) {
  if (ln = o, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, wi.current = e === null || e.memoizedState === null ? vm : gm, e = n(r, i), hr) {
    o = 0;
    do {
      if (hr = !1, Ir = 0, 25 <= o) throw Error(x(301));
      o += 1, oe = re = null, t.updateQueue = null, wi.current = ym, e = n(r, i);
    } while (hr);
  }
  if (wi.current = Xi, t = re !== null && re.next !== null, ln = 0, oe = re = K = null, Wi = !1, t) throw Error(x(300));
  return e;
}
function Ja() {
  var e = Ir !== 0;
  return Ir = 0, e;
}
function it() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return oe === null ? K.memoizedState = oe = e : oe = oe.next = e, oe;
}
function We() {
  if (re === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = oe === null ? K.memoizedState : oe.next;
  if (t !== null) oe = t, re = e;
  else {
    if (e === null) throw Error(x(310));
    re = e, e = { memoizedState: re.memoizedState, baseState: re.baseState, baseQueue: re.baseQueue, queue: re.queue, next: null }, oe === null ? K.memoizedState = oe = e : oe = oe.next = e;
  }
  return oe;
}
function Or(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Jo(e) {
  var t = We(), n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = re, i = r.baseQueue, o = n.pending;
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
        var m = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null
        };
        u === null ? (a = u = m, l = r) : u = u.next = m, K.lanes |= c, an |= c;
      }
      s = s.next;
    } while (s !== null && s !== o);
    u === null ? l = r : u.next = a, nt(r, t.memoizedState) || (ke = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, K.lanes |= o, an |= o, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function qo(e) {
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
    nt(o, t.memoizedState) || (ke = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Nf() {
}
function _f(e, t) {
  var n = K, r = We(), i = t(), o = !nt(r.memoizedState, i);
  if (o && (r.memoizedState = i, ke = !0), r = r.queue, qa(Rf.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || oe !== null && oe.memoizedState.tag & 1) {
    if (n.flags |= 2048, Mr(9, Pf.bind(null, n, r, i, t), void 0, null), le === null) throw Error(x(349));
    ln & 30 || kf(n, t, i);
  }
  return i;
}
function kf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Pf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Lf(t) && If(e);
}
function Rf(e, t, n) {
  return n(function() {
    Lf(t) && If(e);
  });
}
function Lf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !nt(e, n);
  } catch {
    return !0;
  }
}
function If(e) {
  var t = yt(e, 1);
  t !== null && tt(t, e, 1, -1);
}
function ps(e) {
  var t = it();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Or, lastRenderedState: e }, t.queue = e, e = e.dispatch = mm.bind(null, K, e), [t.memoizedState, e];
}
function Mr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Of() {
  return We().memoizedState;
}
function Ti(e, t, n, r) {
  var i = it();
  K.flags |= e, i.memoizedState = Mr(1 | t, n, void 0, r === void 0 ? null : r);
}
function ao(e, t, n, r) {
  var i = We();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (re !== null) {
    var l = re.memoizedState;
    if (o = l.destroy, r !== null && Ya(r, l.deps)) {
      i.memoizedState = Mr(t, n, o, r);
      return;
    }
  }
  K.flags |= e, i.memoizedState = Mr(1 | t, n, o, r);
}
function hs(e, t) {
  return Ti(8390656, 8, e, t);
}
function qa(e, t) {
  return ao(2048, 8, e, t);
}
function Mf(e, t) {
  return ao(4, 2, e, t);
}
function Af(e, t) {
  return ao(4, 4, e, t);
}
function Hf(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Df(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ao(4, 4, Hf.bind(null, t, e), n);
}
function eu() {
}
function Ff(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ya(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Bf(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ya(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Uf(e, t, n) {
  return ln & 21 ? (nt(n, t) || (n = bc(), K.lanes |= n, an |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ke = !0), e.memoizedState = n);
}
function pm(e, t) {
  var n = j;
  j = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ko.transition;
  Ko.transition = {};
  try {
    e(!1), t();
  } finally {
    j = n, Ko.transition = r;
  }
}
function zf() {
  return We().memoizedState;
}
function hm(e, t, n) {
  var r = Dt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, jf(e)) $f(t, n);
  else if (n = wf(e, t, n, r), n !== null) {
    var i = Te();
    tt(n, e, r, i), bf(n, t, r);
  }
}
function mm(e, t, n) {
  var r = Dt(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (jf(e)) $f(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var l = t.lastRenderedState, a = o(l, n);
      if (i.hasEagerState = !0, i.eagerState = a, nt(a, l)) {
        var u = t.interleaved;
        u === null ? (i.next = i, Va(t)) : (i.next = u.next, u.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = wf(e, t, i, r), n !== null && (i = Te(), tt(n, e, r, i), bf(n, t, r));
  }
}
function jf(e) {
  var t = e.alternate;
  return e === K || t !== null && t === K;
}
function $f(e, t) {
  hr = Wi = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function bf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ia(e, n);
  }
}
var Xi = { readContext: Ve, useCallback: de, useContext: de, useEffect: de, useImperativeHandle: de, useInsertionEffect: de, useLayoutEffect: de, useMemo: de, useReducer: de, useRef: de, useState: de, useDebugValue: de, useDeferredValue: de, useTransition: de, useMutableSource: de, useSyncExternalStore: de, useId: de, unstable_isNewReconciler: !1 }, vm = { readContext: Ve, useCallback: function(e, t) {
  return it().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ve, useEffect: hs, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ti(
    4194308,
    4,
    Hf.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ti(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ti(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = it();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = it();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = hm.bind(null, K, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = it();
  return e = { current: e }, t.memoizedState = e;
}, useState: ps, useDebugValue: eu, useDeferredValue: function(e) {
  return it().memoizedState = e;
}, useTransition: function() {
  var e = ps(!1), t = e[0];
  return e = pm.bind(null, e[1]), it().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = K, i = it();
  if (Q) {
    if (n === void 0) throw Error(x(407));
    n = n();
  } else {
    if (n = t(), le === null) throw Error(x(349));
    ln & 30 || kf(r, t, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return i.queue = o, hs(Rf.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Mr(9, Pf.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = it(), t = le.identifierPrefix;
  if (Q) {
    var n = ht, r = pt;
    n = (r & ~(1 << 32 - et(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ir++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = dm++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, gm = {
  readContext: Ve,
  useCallback: Ff,
  useContext: Ve,
  useEffect: qa,
  useImperativeHandle: Df,
  useInsertionEffect: Mf,
  useLayoutEffect: Af,
  useMemo: Bf,
  useReducer: Jo,
  useRef: Of,
  useState: function() {
    return Jo(Or);
  },
  useDebugValue: eu,
  useDeferredValue: function(e) {
    var t = We();
    return Uf(t, re.memoizedState, e);
  },
  useTransition: function() {
    var e = Jo(Or)[0], t = We().memoizedState;
    return [e, t];
  },
  useMutableSource: Nf,
  useSyncExternalStore: _f,
  useId: zf,
  unstable_isNewReconciler: !1
}, ym = { readContext: Ve, useCallback: Ff, useContext: Ve, useEffect: qa, useImperativeHandle: Df, useInsertionEffect: Mf, useLayoutEffect: Af, useMemo: Bf, useReducer: qo, useRef: Of, useState: function() {
  return qo(Or);
}, useDebugValue: eu, useDeferredValue: function(e) {
  var t = We();
  return re === null ? t.memoizedState = e : Uf(t, re.memoizedState, e);
}, useTransition: function() {
  var e = qo(Or)[0], t = We().memoizedState;
  return [e, t];
}, useMutableSource: Nf, useSyncExternalStore: _f, useId: zf, unstable_isNewReconciler: !1 };
function Ke(e, t) {
  if (e && e.defaultProps) {
    t = J({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function zl(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : J({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var uo = { isMounted: function(e) {
  return (e = e._reactInternals) ? fn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Te(), i = Dt(e), o = mt(r, i);
  o.payload = t, n != null && (o.callback = n), t = At(e, o, i), t !== null && (tt(t, e, i, r), Si(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Te(), i = Dt(e), o = mt(r, i);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = At(e, o, i), t !== null && (tt(t, e, i, r), Si(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Te(), r = Dt(e), i = mt(n, r);
  i.tag = 2, t != null && (i.callback = t), t = At(e, i, r), t !== null && (tt(t, e, r, n), Si(t, e, r));
} };
function ms(e, t, n, r, i, o, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !Nr(n, r) || !Nr(i, o) : !0;
}
function Gf(e, t, n) {
  var r = !1, i = Ut, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ve(o) : (i = Re(t) ? rn : me.current, r = t.contextTypes, o = (r = r != null) ? Fn(e, i) : Ut), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = uo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function vs(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && uo.enqueueReplaceState(t, t.state, null);
}
function jl(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, Wa(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = Ve(o) : (o = Re(t) ? rn : me.current, i.context = Fn(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (zl(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && uo.enqueueReplaceState(i, i.state, null), Gi(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function jn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Wp(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function el(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function $l(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Em = typeof WeakMap == "function" ? WeakMap : Map;
function Vf(e, t, n) {
  n = mt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Zi || (Zi = !0, Jl = r), $l(e, t);
  }, n;
}
function Wf(e, t, n) {
  n = mt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      $l(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    $l(e, t), typeof r != "function" && (Ht === null ? Ht = /* @__PURE__ */ new Set([this]) : Ht.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function gs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Em();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = Mm.bind(null, e, t, n), t.then(e, e));
}
function ys(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Es(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = mt(-1, 1), t.tag = 2, At(n, t, 1))), n.lanes |= 1), e);
}
var xm = xt.ReactCurrentOwner, ke = !1;
function Ee(e, t, n, r) {
  t.child = e === null ? Sf(t, null, n, r) : Un(t, e.child, n, r);
}
function xs(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return An(t, i), r = Ka(e, t, n, r, o, i), n = Ja(), e !== null && !ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Et(e, t, i)) : (Q && n && Ua(t), t.flags |= 1, Ee(e, t, r, i), t.child);
}
function Ss(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !uu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Xf(e, t, o, r, i)) : (e = ki(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var l = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Nr, n(l, r) && e.ref === t.ref) return Et(e, t, i);
  }
  return t.flags |= 1, e = Ft(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Xf(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Nr(o, r) && e.ref === t.ref) if (ke = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (ke = !0);
    else return t.lanes = e.lanes, Et(e, t, i);
  }
  return bl(e, t, n, r, i);
}
function Qf(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(Rn, Ie), Ie |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, G(Rn, Ie), Ie |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, G(Rn, Ie), Ie |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, G(Rn, Ie), Ie |= r;
  return Ee(e, t, i, n), t.child;
}
function Zf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function bl(e, t, n, r, i) {
  var o = Re(n) ? rn : me.current;
  return o = Fn(t, o), An(t, i), n = Ka(e, t, n, r, o, i), r = Ja(), e !== null && !ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Et(e, t, i)) : (Q && r && Ua(t), t.flags |= 1, Ee(e, t, n, i), t.child);
}
function ws(e, t, n, r, i) {
  if (Re(n)) {
    var o = !0;
    Ui(t);
  } else o = !1;
  if (An(t, i), t.stateNode === null) Ci(e, t), Gf(t, n, r), jl(t, n, r, i), r = !0;
  else if (e === null) {
    var l = t.stateNode, a = t.memoizedProps;
    l.props = a;
    var u = l.context, s = n.contextType;
    typeof s == "object" && s !== null ? s = Ve(s) : (s = Re(n) ? rn : me.current, s = Fn(t, s));
    var c = n.getDerivedStateFromProps, m = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    m || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== r || u !== s) && vs(t, l, r, s), Ct = !1;
    var d = t.memoizedState;
    l.state = d, Gi(t, r, l, i), u = t.memoizedState, a !== r || d !== u || Pe.current || Ct ? (typeof c == "function" && (zl(t, n, c, r), u = t.memoizedState), (a = Ct || ms(t, n, a, r, d, u, s)) ? (m || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), l.props = r, l.state = u, l.context = s, r = a) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, Tf(e, t), a = t.memoizedProps, s = t.type === t.elementType ? a : Ke(t.type, a), l.props = s, m = t.pendingProps, d = l.context, u = n.contextType, typeof u == "object" && u !== null ? u = Ve(u) : (u = Re(n) ? rn : me.current, u = Fn(t, u));
    var v = n.getDerivedStateFromProps;
    (c = typeof v == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== m || d !== u) && vs(t, l, r, u), Ct = !1, d = t.memoizedState, l.state = d, Gi(t, r, l, i);
    var y = t.memoizedState;
    a !== m || d !== y || Pe.current || Ct ? (typeof v == "function" && (zl(t, n, v, r), y = t.memoizedState), (s = Ct || ms(t, n, s, r, d, y, u) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, y, u), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, y, u)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), l.props = r, l.state = y, l.context = u, r = s) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Gl(e, t, n, r, o, i);
}
function Gl(e, t, n, r, i, o) {
  Zf(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && as(t, n, !1), Et(e, t, o);
  r = t.stateNode, xm.current = t;
  var a = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = Un(t, e.child, null, o), t.child = Un(t, null, a, o)) : Ee(e, t, a, o), t.memoizedState = r.state, i && as(t, n, !0), t.child;
}
function Yf(e) {
  var t = e.stateNode;
  t.pendingContext ? ls(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ls(e, t.context, !1), Xa(e, t.containerInfo);
}
function Ts(e, t, n, r, i) {
  return Bn(), ja(i), t.flags |= 256, Ee(e, t, n, r), t.child;
}
var Vl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Wl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Kf(e, t, n) {
  var r = t.pendingProps, i = Y.current, o = !1, l = (t.flags & 128) !== 0, a;
  if ((a = l) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), G(Y, i & 1), e === null)
    return Bl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, l = { mode: "hidden", children: l }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = fo(l, r, 0, null), e = nn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Wl(n), t.memoizedState = Vl, e) : tu(t, l));
  if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return Sm(e, t, l, r, a, i, n);
  if (o) {
    o = r.fallback, l = t.mode, i = e.child, a = i.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Ft(i, u), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = Ft(a, o) : (o = nn(o, l, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, l = e.child.memoizedState, l = l === null ? Wl(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, o.memoizedState = l, o.childLanes = e.childLanes & ~n, t.memoizedState = Vl, r;
  }
  return o = e.child, e = o.sibling, r = Ft(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function tu(e, t) {
  return t = fo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function li(e, t, n, r) {
  return r !== null && ja(r), Un(t, e.child, null, n), e = tu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Sm(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = el(Error(x(422))), li(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = fo({ mode: "visible", children: r.children }, i, 0, null), o = nn(o, i, l, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Un(t, e.child, null, l), t.child.memoizedState = Wl(l), t.memoizedState = Vl, o);
  if (!(t.mode & 1)) return li(e, t, l, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
    return r = a, o = Error(x(419)), r = el(o, r, void 0), li(e, t, l, r);
  }
  if (a = (l & e.childLanes) !== 0, ke || a) {
    if (r = le, r !== null) {
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
      i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, yt(e, i), tt(r, e, i, -1));
    }
    return au(), r = el(Error(x(421))), li(e, t, l, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Am.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Oe = Mt(i.nextSibling), Me = t, Q = !0, qe = null, e !== null && (je[$e++] = pt, je[$e++] = ht, je[$e++] = on, pt = e.id, ht = e.overflow, on = t), t = tu(t, r.children), t.flags |= 4096, t);
}
function Cs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ul(e.return, t, n);
}
function tl(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function Jf(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (Ee(e, t, r.children, n), r = Y.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Cs(e, n, t);
      else if (e.tag === 19) Cs(e, n, t);
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
  if (G(Y, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && Vi(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), tl(t, !1, i, n, o);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && Vi(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      tl(t, !0, n, null, o);
      break;
    case "together":
      tl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ci(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Et(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), an |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (e = t.child, n = Ft(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Ft(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function wm(e, t, n) {
  switch (t.tag) {
    case 3:
      Yf(t), Bn();
      break;
    case 5:
      Cf(t);
      break;
    case 1:
      Re(t.type) && Ui(t);
      break;
    case 4:
      Xa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      G($i, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (G(Y, Y.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Kf(e, t, n) : (G(Y, Y.current & 1), e = Et(e, t, n), e !== null ? e.sibling : null);
      G(Y, Y.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Jf(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), G(Y, Y.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Qf(e, t, n);
  }
  return Et(e, t, n);
}
var qf, Xl, ed, td;
qf = function(e, t) {
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
Xl = function() {
};
ed = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, en(at.current);
    var o = null;
    switch (n) {
      case "input":
        i = ml(e, i), r = ml(e, r), o = [];
        break;
      case "select":
        i = J({}, i, { value: void 0 }), r = J({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = yl(e, i), r = yl(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Fi);
    }
    xl(n, r);
    var l;
    n = null;
    for (s in i) if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null) if (s === "style") {
      var a = i[s];
      for (l in a) a.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (yr.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (a = i != null ? i[s] : void 0, r.hasOwnProperty(s) && u !== a && (u != null || a != null)) if (s === "style") if (a) {
        for (l in a) !a.hasOwnProperty(l) || u && u.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in u) u.hasOwnProperty(l) && a[l] !== u[l] && (n || (n = {}), n[l] = u[l]);
      } else n || (o || (o = []), o.push(
        s,
        n
      )), n = u;
      else s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, a = a ? a.__html : void 0, u != null && a !== u && (o = o || []).push(s, u)) : s === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(s, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (yr.hasOwnProperty(s) ? (u != null && s === "onScroll" && V("scroll", e), o || a === u || (o = [])) : (o = o || []).push(s, u));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
td = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function tr(e, t) {
  if (!Q) switch (e.tailMode) {
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
function pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Tm(e, t, n) {
  var r = t.pendingProps;
  switch (za(t), t.tag) {
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
      return pe(t), null;
    case 1:
      return Re(t.type) && Bi(), pe(t), null;
    case 3:
      return r = t.stateNode, zn(), X(Pe), X(me), Za(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ii(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, qe !== null && (ta(qe), qe = null))), Xl(e, t), pe(t), null;
    case 5:
      Qa(t);
      var i = en(Lr.current);
      if (n = t.type, e !== null && t.stateNode != null) ed(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return pe(t), null;
        }
        if (e = en(at.current), ii(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[ot] = t, r[Pr] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              V("cancel", r), V("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              V("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < lr.length; i++) V(lr[i], r);
              break;
            case "source":
              V("error", r);
              break;
            case "img":
            case "image":
            case "link":
              V(
                "error",
                r
              ), V("load", r);
              break;
            case "details":
              V("toggle", r);
              break;
            case "input":
              Mu(r, o), V("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, V("invalid", r);
              break;
            case "textarea":
              Hu(r, o), V("invalid", r);
          }
          xl(n, o), i = null;
          for (var l in o) if (o.hasOwnProperty(l)) {
            var a = o[l];
            l === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && ri(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && ri(
              r.textContent,
              a,
              e
            ), i = ["children", "" + a]) : yr.hasOwnProperty(l) && a != null && l === "onScroll" && V("scroll", r);
          }
          switch (n) {
            case "input":
              Zr(r), Au(r, o, !0);
              break;
            case "textarea":
              Zr(r), Du(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Fi);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Pc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[ot] = t, e[Pr] = r, qf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Sl(n, r), n) {
              case "dialog":
                V("cancel", e), V("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                V("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < lr.length; i++) V(lr[i], e);
                i = r;
                break;
              case "source":
                V("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                V(
                  "error",
                  e
                ), V("load", e), i = r;
                break;
              case "details":
                V("toggle", e), i = r;
                break;
              case "input":
                Mu(e, r), i = ml(e, r), V("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = J({}, r, { value: void 0 }), V("invalid", e);
                break;
              case "textarea":
                Hu(e, r), i = yl(e, r), V("invalid", e);
                break;
              default:
                i = r;
            }
            xl(n, i), a = i;
            for (o in a) if (a.hasOwnProperty(o)) {
              var u = a[o];
              o === "style" ? Ic(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Rc(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Er(e, u) : typeof u == "number" && Er(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (yr.hasOwnProperty(o) ? u != null && o === "onScroll" && V("scroll", e) : u != null && Na(e, o, u, l));
            }
            switch (n) {
              case "input":
                Zr(e), Au(e, r, !1);
                break;
              case "textarea":
                Zr(e), Du(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Bt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Ln(e, !!r.multiple, o, !1) : r.defaultValue != null && Ln(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Fi);
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
      return pe(t), null;
    case 6:
      if (e && t.stateNode != null) td(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (n = en(Lr.current), en(at.current), ii(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ot] = t, (o = r.nodeValue !== n) && (e = Me, e !== null)) switch (e.tag) {
            case 3:
              ri(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ri(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ot] = t, t.stateNode = r;
      }
      return pe(t), null;
    case 13:
      if (X(Y), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Q && Oe !== null && t.mode & 1 && !(t.flags & 128)) Ef(), Bn(), t.flags |= 98560, o = !1;
        else if (o = ii(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(x(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(x(317));
            o[ot] = t;
          } else Bn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          pe(t), o = !1;
        } else qe !== null && (ta(qe), qe = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Y.current & 1 ? ie === 0 && (ie = 3) : au())), t.updateQueue !== null && (t.flags |= 4), pe(t), null);
    case 4:
      return zn(), Xl(e, t), e === null && _r(t.stateNode.containerInfo), pe(t), null;
    case 10:
      return Ga(t.type._context), pe(t), null;
    case 17:
      return Re(t.type) && Bi(), pe(t), null;
    case 19:
      if (X(Y), o = t.memoizedState, o === null) return pe(t), null;
      if (r = (t.flags & 128) !== 0, l = o.rendering, l === null) if (r) tr(o, !1);
      else {
        if (ie !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = Vi(e), l !== null) {
            for (t.flags |= 128, tr(o, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return G(Y, Y.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && te() > $n && (t.flags |= 128, r = !0, tr(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Vi(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), tr(o, !0), o.tail === null && o.tailMode === "hidden" && !l.alternate && !Q) return pe(t), null;
        } else 2 * te() - o.renderingStartTime > $n && n !== 1073741824 && (t.flags |= 128, r = !0, tr(o, !1), t.lanes = 4194304);
        o.isBackwards ? (l.sibling = t.child, t.child = l) : (n = o.last, n !== null ? n.sibling = l : t.child = l, o.last = l);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = te(), t.sibling = null, n = Y.current, G(Y, r ? n & 1 | 2 : n & 1), t) : (pe(t), null);
    case 22:
    case 23:
      return lu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ie & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : pe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function Cm(e, t) {
  switch (za(t), t.tag) {
    case 1:
      return Re(t.type) && Bi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return zn(), X(Pe), X(me), Za(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Qa(t), null;
    case 13:
      if (X(Y), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(x(340));
        Bn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return X(Y), null;
    case 4:
      return zn(), null;
    case 10:
      return Ga(t.type._context), null;
    case 22:
    case 23:
      return lu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ai = !1, he = !1, Nm = typeof WeakSet == "function" ? WeakSet : Set, C = null;
function Pn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    q(e, t, r);
  }
  else n.current = null;
}
function Ql(e, t, n) {
  try {
    n();
  } catch (r) {
    q(e, t, r);
  }
}
var Ns = !1;
function _m(e, t) {
  if (Il = Ai, e = lf(), Ba(e)) {
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
        var l = 0, a = -1, u = -1, s = 0, c = 0, m = e, d = null;
        t: for (; ; ) {
          for (var v; m !== n || i !== 0 && m.nodeType !== 3 || (a = l + i), m !== o || r !== 0 && m.nodeType !== 3 || (u = l + r), m.nodeType === 3 && (l += m.nodeValue.length), (v = m.firstChild) !== null; )
            d = m, m = v;
          for (; ; ) {
            if (m === e) break t;
            if (d === n && ++s === i && (a = l), d === o && ++c === r && (u = l), (v = m.nextSibling) !== null) break;
            m = d, d = m.parentNode;
          }
          m = v;
        }
        n = a === -1 || u === -1 ? null : { start: a, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ol = { focusedElem: e, selectionRange: n }, Ai = !1, C = t; C !== null; ) if (t = C, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, C = e;
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
            var g = y.memoizedProps, O = y.memoizedState, p = t.stateNode, f = p.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Ke(t.type, g), O);
            p.__reactInternalSnapshotBeforeUpdate = f;
          }
          break;
        case 3:
          var h = t.stateNode.containerInfo;
          h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(x(163));
      }
    } catch (E) {
      q(t, t.return, E);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, C = e;
      break;
    }
    C = t.return;
  }
  return y = Ns, Ns = !1, y;
}
function mr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && Ql(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function so(e, t) {
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
function Zl(e) {
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
function nd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, nd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ot], delete t[Pr], delete t[Hl], delete t[um], delete t[sm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function rd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function _s(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || rd(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Yl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Fi));
  else if (r !== 4 && (e = e.child, e !== null)) for (Yl(e, t, n), e = e.sibling; e !== null; ) Yl(e, t, n), e = e.sibling;
}
function Kl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Kl(e, t, n), e = e.sibling; e !== null; ) Kl(e, t, n), e = e.sibling;
}
var ue = null, Je = !1;
function wt(e, t, n) {
  for (n = n.child; n !== null; ) id(e, t, n), n = n.sibling;
}
function id(e, t, n) {
  if (lt && typeof lt.onCommitFiberUnmount == "function") try {
    lt.onCommitFiberUnmount(to, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      he || Pn(n, t);
    case 6:
      var r = ue, i = Je;
      ue = null, wt(e, t, n), ue = r, Je = i, ue !== null && (Je ? (e = ue, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ue.removeChild(n.stateNode));
      break;
    case 18:
      ue !== null && (Je ? (e = ue, n = n.stateNode, e.nodeType === 8 ? Qo(e.parentNode, n) : e.nodeType === 1 && Qo(e, n), Tr(e)) : Qo(ue, n.stateNode));
      break;
    case 4:
      r = ue, i = Je, ue = n.stateNode.containerInfo, Je = !0, wt(e, t, n), ue = r, Je = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!he && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, l = o.destroy;
          o = o.tag, l !== void 0 && (o & 2 || o & 4) && Ql(n, t, l), i = i.next;
        } while (i !== r);
      }
      wt(e, t, n);
      break;
    case 1:
      if (!he && (Pn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        q(n, t, a);
      }
      wt(e, t, n);
      break;
    case 21:
      wt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (he = (r = he) || n.memoizedState !== null, wt(e, t, n), he = r) : wt(e, t, n);
      break;
    default:
      wt(e, t, n);
  }
}
function ks(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Nm()), t.forEach(function(r) {
      var i = Hm.bind(null, e, r);
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
            ue = a.stateNode, Je = !1;
            break e;
          case 3:
            ue = a.stateNode.containerInfo, Je = !0;
            break e;
          case 4:
            ue = a.stateNode.containerInfo, Je = !0;
            break e;
        }
        a = a.return;
      }
      if (ue === null) throw Error(x(160));
      id(o, l, i), ue = null, Je = !1;
      var u = i.alternate;
      u !== null && (u.return = null), i.return = null;
    } catch (s) {
      q(i, t, s);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) od(t, e), t = t.sibling;
}
function od(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ye(t, e), rt(e), r & 4) {
        try {
          mr(3, e, e.return), so(3, e);
        } catch (g) {
          q(e, e.return, g);
        }
        try {
          mr(5, e, e.return);
        } catch (g) {
          q(e, e.return, g);
        }
      }
      break;
    case 1:
      Ye(t, e), rt(e), r & 512 && n !== null && Pn(n, n.return);
      break;
    case 5:
      if (Ye(t, e), rt(e), r & 512 && n !== null && Pn(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          Er(i, "");
        } catch (g) {
          q(e, e.return, g);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, l = n !== null ? n.memoizedProps : o, a = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          a === "input" && o.type === "radio" && o.name != null && _c(i, o), Sl(a, l);
          var s = Sl(a, o);
          for (l = 0; l < u.length; l += 2) {
            var c = u[l], m = u[l + 1];
            c === "style" ? Ic(i, m) : c === "dangerouslySetInnerHTML" ? Rc(i, m) : c === "children" ? Er(i, m) : Na(i, c, m, s);
          }
          switch (a) {
            case "input":
              vl(i, o);
              break;
            case "textarea":
              kc(i, o);
              break;
            case "select":
              var d = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!o.multiple;
              var v = o.value;
              v != null ? Ln(i, !!o.multiple, v, !1) : d !== !!o.multiple && (o.defaultValue != null ? Ln(
                i,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Ln(i, !!o.multiple, o.multiple ? [] : "", !1));
          }
          i[Pr] = o;
        } catch (g) {
          q(e, e.return, g);
        }
      }
      break;
    case 6:
      if (Ye(t, e), rt(e), r & 4) {
        if (e.stateNode === null) throw Error(x(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (g) {
          q(e, e.return, g);
        }
      }
      break;
    case 3:
      if (Ye(t, e), rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Tr(t.containerInfo);
      } catch (g) {
        q(e, e.return, g);
      }
      break;
    case 4:
      Ye(t, e), rt(e);
      break;
    case 13:
      Ye(t, e), rt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (iu = te())), r & 4 && ks(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (he = (s = he) || c, Ye(t, e), he = s) : Ye(t, e), rt(e), r & 8192) {
        if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !c && e.mode & 1) for (C = e, c = e.child; c !== null; ) {
          for (m = C = c; C !== null; ) {
            switch (d = C, v = d.child, d.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                mr(4, d, d.return);
                break;
              case 1:
                Pn(d, d.return);
                var y = d.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = d, n = d.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (g) {
                    q(r, n, g);
                  }
                }
                break;
              case 5:
                Pn(d, d.return);
                break;
              case 22:
                if (d.memoizedState !== null) {
                  Rs(m);
                  continue;
                }
            }
            v !== null ? (v.return = d, C = v) : Rs(m);
          }
          c = c.sibling;
        }
        e: for (c = null, m = e; ; ) {
          if (m.tag === 5) {
            if (c === null) {
              c = m;
              try {
                i = m.stateNode, s ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = m.stateNode, u = m.memoizedProps.style, l = u != null && u.hasOwnProperty("display") ? u.display : null, a.style.display = Lc("display", l));
              } catch (g) {
                q(e, e.return, g);
              }
            }
          } else if (m.tag === 6) {
            if (c === null) try {
              m.stateNode.nodeValue = s ? "" : m.memoizedProps;
            } catch (g) {
              q(e, e.return, g);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            c === m && (c = null), m = m.return;
          }
          c === m && (c = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      Ye(t, e), rt(e), r & 4 && ks(e);
      break;
    case 21:
      break;
    default:
      Ye(
        t,
        e
      ), rt(e);
  }
}
function rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (rd(n)) {
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
          r.flags & 32 && (Er(i, ""), r.flags &= -33);
          var o = _s(e);
          Kl(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, a = _s(e);
          Yl(e, a, l);
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
  C = e, ld(e);
}
function ld(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var i = C, o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || ai;
      if (!l) {
        var a = i.alternate, u = a !== null && a.memoizedState !== null || he;
        a = ai;
        var s = he;
        if (ai = l, (he = u) && !s) for (C = i; C !== null; ) l = C, u = l.child, l.tag === 22 && l.memoizedState !== null ? Ls(i) : u !== null ? (u.return = l, C = u) : Ls(i);
        for (; o !== null; ) C = o, ld(o), o = o.sibling;
        C = i, ai = a, he = s;
      }
      Ps(e);
    } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, C = o) : Ps(e);
  }
}
function Ps(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            he || so(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !he) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : Ke(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && ds(t, o, r);
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
              ds(t, l, n);
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
                  var m = c.dehydrated;
                  m !== null && Tr(m);
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
        he || t.flags & 512 && Zl(t);
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
function Rs(e) {
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
function Ls(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            so(4, t);
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
            Zl(t);
          } catch (u) {
            q(t, o, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Zl(t);
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
var Pm = Math.ceil, Qi = xt.ReactCurrentDispatcher, nu = xt.ReactCurrentOwner, Ge = xt.ReactCurrentBatchConfig, z = 0, le = null, ne = null, se = 0, Ie = 0, Rn = jt(0), ie = 0, Ar = null, an = 0, co = 0, ru = 0, vr = null, _e = null, iu = 0, $n = 1 / 0, ft = null, Zi = !1, Jl = null, Ht = null, ui = !1, Rt = null, Yi = 0, gr = 0, ql = null, Ni = -1, _i = 0;
function Te() {
  return z & 6 ? te() : Ni !== -1 ? Ni : Ni = te();
}
function Dt(e) {
  return e.mode & 1 ? z & 2 && se !== 0 ? se & -se : fm.transition !== null ? (_i === 0 && (_i = bc()), _i) : (e = j, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Yc(e.type)), e) : 1;
}
function tt(e, t, n, r) {
  if (50 < gr) throw gr = 0, ql = null, Error(x(185));
  Fr(e, n, r), (!(z & 2) || e !== le) && (e === le && (!(z & 2) && (co |= n), ie === 4 && kt(e, se)), Le(e, r), n === 1 && z === 0 && !(t.mode & 1) && ($n = te() + 500, lo && $t()));
}
function Le(e, t) {
  var n = e.callbackNode;
  fh(e, t);
  var r = Mi(e, e === le ? se : 0);
  if (r === 0) n !== null && Uu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Uu(n), t === 1) e.tag === 0 ? cm(Is.bind(null, e)) : vf(Is.bind(null, e)), lm(function() {
      !(z & 6) && $t();
    }), n = null;
    else {
      switch (Gc(r)) {
        case 1:
          n = La;
          break;
        case 4:
          n = jc;
          break;
        case 16:
          n = Oi;
          break;
        case 536870912:
          n = $c;
          break;
        default:
          n = Oi;
      }
      n = hd(n, ad.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function ad(e, t) {
  if (Ni = -1, _i = 0, z & 6) throw Error(x(327));
  var n = e.callbackNode;
  if (Hn() && e.callbackNode !== n) return null;
  var r = Mi(e, e === le ? se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ki(e, r);
  else {
    t = r;
    var i = z;
    z |= 2;
    var o = sd();
    (le !== e || se !== t) && (ft = null, $n = te() + 500, tn(e, t));
    do
      try {
        Im();
        break;
      } catch (a) {
        ud(e, a);
      }
    while (!0);
    ba(), Qi.current = o, z = i, ne !== null ? t = 0 : (le = null, se = 0, t = ie);
  }
  if (t !== 0) {
    if (t === 2 && (i = _l(e), i !== 0 && (r = i, t = ea(e, i))), t === 1) throw n = Ar, tn(e, 0), kt(e, r), Le(e, te()), n;
    if (t === 6) kt(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !Rm(i) && (t = Ki(e, r), t === 2 && (o = _l(e), o !== 0 && (r = o, t = ea(e, o))), t === 1)) throw n = Ar, tn(e, 0), kt(e, r), Le(e, te()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          Zt(e, _e, ft);
          break;
        case 3:
          if (kt(e, r), (r & 130023424) === r && (t = iu + 500 - te(), 10 < t)) {
            if (Mi(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              Te(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = Al(Zt.bind(null, e, _e, ft), t);
            break;
          }
          Zt(e, _e, ft);
          break;
        case 4:
          if (kt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - et(r);
            o = 1 << l, l = t[l], l > i && (i = l), r &= ~o;
          }
          if (r = i, r = te() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Pm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Al(Zt.bind(null, e, _e, ft), r);
            break;
          }
          Zt(e, _e, ft);
          break;
        case 5:
          Zt(e, _e, ft);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return Le(e, te()), e.callbackNode === n ? ad.bind(null, e) : null;
}
function ea(e, t) {
  var n = vr;
  return e.current.memoizedState.isDehydrated && (tn(e, t).flags |= 256), e = Ki(e, t), e !== 2 && (t = _e, _e = n, t !== null && ta(t)), e;
}
function ta(e) {
  _e === null ? _e = e : _e.push.apply(_e, e);
}
function Rm(e) {
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
function kt(e, t) {
  for (t &= ~ru, t &= ~co, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - et(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Is(e) {
  if (z & 6) throw Error(x(327));
  Hn();
  var t = Mi(e, 0);
  if (!(t & 1)) return Le(e, te()), null;
  var n = Ki(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = _l(e);
    r !== 0 && (t = r, n = ea(e, r));
  }
  if (n === 1) throw n = Ar, tn(e, 0), kt(e, t), Le(e, te()), n;
  if (n === 6) throw Error(x(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Zt(e, _e, ft), Le(e, te()), null;
}
function ou(e, t) {
  var n = z;
  z |= 1;
  try {
    return e(t);
  } finally {
    z = n, z === 0 && ($n = te() + 500, lo && $t());
  }
}
function un(e) {
  Rt !== null && Rt.tag === 0 && !(z & 6) && Hn();
  var t = z;
  z |= 1;
  var n = Ge.transition, r = j;
  try {
    if (Ge.transition = null, j = 1, e) return e();
  } finally {
    j = r, Ge.transition = n, z = t, !(z & 6) && $t();
  }
}
function lu() {
  Ie = Rn.current, X(Rn);
}
function tn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, om(n)), ne !== null) for (n = ne.return; n !== null; ) {
    var r = n;
    switch (za(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Bi();
        break;
      case 3:
        zn(), X(Pe), X(me), Za();
        break;
      case 5:
        Qa(r);
        break;
      case 4:
        zn();
        break;
      case 13:
        X(Y);
        break;
      case 19:
        X(Y);
        break;
      case 10:
        Ga(r.type._context);
        break;
      case 22:
      case 23:
        lu();
    }
    n = n.return;
  }
  if (le = e, ne = e = Ft(e.current, null), se = Ie = t, ie = 0, Ar = null, ru = co = an = 0, _e = vr = null, qt !== null) {
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
function ud(e, t) {
  do {
    var n = ne;
    try {
      if (ba(), wi.current = Xi, Wi) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        Wi = !1;
      }
      if (ln = 0, oe = re = K = null, hr = !1, Ir = 0, nu.current = null, n === null || n.return === null) {
        ie = 1, Ar = t, ne = null;
        break;
      }
      e: {
        var o = e, l = n.return, a = n, u = t;
        if (t = se, a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var s = u, c = a, m = c.tag;
          if (!(c.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var v = ys(l);
          if (v !== null) {
            v.flags &= -257, Es(v, l, a, o, t), v.mode & 1 && gs(o, s, t), t = v, u = s;
            var y = t.updateQueue;
            if (y === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(u), t.updateQueue = g;
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              gs(o, s, t), au();
              break e;
            }
            u = Error(x(426));
          }
        } else if (Q && a.mode & 1) {
          var O = ys(l);
          if (O !== null) {
            !(O.flags & 65536) && (O.flags |= 256), Es(O, l, a, o, t), ja(jn(u, a));
            break e;
          }
        }
        o = u = jn(u, a), ie !== 4 && (ie = 2), vr === null ? vr = [o] : vr.push(o), o = l;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var p = Vf(o, u, t);
              fs(o, p);
              break e;
            case 1:
              a = u;
              var f = o.type, h = o.stateNode;
              if (!(o.flags & 128) && (typeof f.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Ht === null || !Ht.has(h)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var E = Wf(o, a, t);
                fs(o, E);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      fd(n);
    } catch (S) {
      t = S, ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function sd() {
  var e = Qi.current;
  return Qi.current = Xi, e === null ? Xi : e;
}
function au() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4), le === null || !(an & 268435455) && !(co & 268435455) || kt(le, se);
}
function Ki(e, t) {
  var n = z;
  z |= 2;
  var r = sd();
  (le !== e || se !== t) && (ft = null, tn(e, t));
  do
    try {
      Lm();
      break;
    } catch (i) {
      ud(e, i);
    }
  while (!0);
  if (ba(), z = n, Qi.current = r, ne !== null) throw Error(x(261));
  return le = null, se = 0, ie;
}
function Lm() {
  for (; ne !== null; ) cd(ne);
}
function Im() {
  for (; ne !== null && !nh(); ) cd(ne);
}
function cd(e) {
  var t = pd(e.alternate, e, Ie);
  e.memoizedProps = e.pendingProps, t === null ? fd(e) : ne = t, nu.current = null;
}
function fd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Cm(n, t), n !== null) {
        n.flags &= 32767, ne = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ie = 6, ne = null;
        return;
      }
    } else if (n = Tm(n, t, Ie), n !== null) {
      ne = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  ie === 0 && (ie = 5);
}
function Zt(e, t, n) {
  var r = j, i = Ge.transition;
  try {
    Ge.transition = null, j = 1, Om(e, t, n, r);
  } finally {
    Ge.transition = i, j = r;
  }
  return null;
}
function Om(e, t, n, r) {
  do
    Hn();
  while (Rt !== null);
  if (z & 6) throw Error(x(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(x(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (dh(e, o), e === le && (ne = le = null, se = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ui || (ui = !0, hd(Oi, function() {
    return Hn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ge.transition, Ge.transition = null;
    var l = j;
    j = 1;
    var a = z;
    z |= 4, nu.current = null, _m(e, n), od(n, e), Jh(Ol), Ai = !!Il, Ol = Il = null, e.current = n, km(n), rh(), z = a, j = l, Ge.transition = o;
  } else e.current = n;
  if (ui && (ui = !1, Rt = e, Yi = i), o = e.pendingLanes, o === 0 && (Ht = null), lh(n.stateNode), Le(e, te()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Zi) throw Zi = !1, e = Jl, Jl = null, e;
  return Yi & 1 && e.tag !== 0 && Hn(), o = e.pendingLanes, o & 1 ? e === ql ? gr++ : (gr = 0, ql = e) : gr = 0, $t(), null;
}
function Hn() {
  if (Rt !== null) {
    var e = Gc(Yi), t = Ge.transition, n = j;
    try {
      if (Ge.transition = null, j = 16 > e ? 16 : e, Rt === null) var r = !1;
      else {
        if (e = Rt, Rt = null, Yi = 0, z & 6) throw Error(x(331));
        var i = z;
        for (z |= 4, C = e.current; C !== null; ) {
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
                      mr(8, c, o);
                  }
                  var m = c.child;
                  if (m !== null) m.return = c, C = m;
                  else for (; C !== null; ) {
                    c = C;
                    var d = c.sibling, v = c.return;
                    if (nd(c), c === s) {
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
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var O = g.sibling;
                    g.sibling = null, g = O;
                  } while (g !== null);
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
                mr(9, o, o.return);
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
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) h.return = l, C = h;
          else e: for (l = f; C !== null; ) {
            if (a = C, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  so(9, a);
              }
            } catch (S) {
              q(a, a.return, S);
            }
            if (a === l) {
              C = null;
              break e;
            }
            var E = a.sibling;
            if (E !== null) {
              E.return = a.return, C = E;
              break e;
            }
            C = a.return;
          }
        }
        if (z = i, $t(), lt && typeof lt.onPostCommitFiberRoot == "function") try {
          lt.onPostCommitFiberRoot(to, e);
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
function Os(e, t, n) {
  t = jn(n, t), t = Vf(e, t, 1), e = At(e, t, 1), t = Te(), e !== null && (Fr(e, 1, t), Le(e, t));
}
function q(e, t, n) {
  if (e.tag === 3) Os(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Os(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ht === null || !Ht.has(r))) {
        e = jn(n, e), e = Wf(t, e, 1), t = At(t, e, 1), e = Te(), t !== null && (Fr(t, 1, e), Le(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Mm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Te(), e.pingedLanes |= e.suspendedLanes & n, le === e && (se & n) === n && (ie === 4 || ie === 3 && (se & 130023424) === se && 500 > te() - iu ? tn(e, 0) : ru |= n), Le(e, t);
}
function dd(e, t) {
  t === 0 && (e.mode & 1 ? (t = Jr, Jr <<= 1, !(Jr & 130023424) && (Jr = 4194304)) : t = 1);
  var n = Te();
  e = yt(e, t), e !== null && (Fr(e, t, n), Le(e, n));
}
function Am(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), dd(e, n);
}
function Hm(e, t) {
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
  r !== null && r.delete(t), dd(e, n);
}
var pd;
pd = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Pe.current) ke = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return ke = !1, wm(e, t, n);
    ke = !!(e.flags & 131072);
  }
  else ke = !1, Q && t.flags & 1048576 && gf(t, ji, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ci(e, t), e = t.pendingProps;
      var i = Fn(t, me.current);
      An(t, n), i = Ka(null, t, r, e, i, n);
      var o = Ja();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Re(r) ? (o = !0, Ui(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Wa(t), i.updater = uo, t.stateNode = i, i._reactInternals = t, jl(t, r, e, n), t = Gl(null, t, r, !0, o, n)) : (t.tag = 0, Q && o && Ua(t), Ee(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ci(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Fm(r), e = Ke(r, e), i) {
          case 0:
            t = bl(null, t, r, e, n);
            break e;
          case 1:
            t = ws(null, t, r, e, n);
            break e;
          case 11:
            t = xs(null, t, r, e, n);
            break e;
          case 14:
            t = Ss(null, t, r, Ke(r.type, e), n);
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
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ke(r, i), bl(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ke(r, i), ws(e, t, r, i, n);
    case 3:
      e: {
        if (Yf(t), e === null) throw Error(x(387));
        r = t.pendingProps, o = t.memoizedState, i = o.element, Tf(e, t), Gi(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          i = jn(Error(x(423)), t), t = Ts(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = jn(Error(x(424)), t), t = Ts(e, t, r, n, i);
          break e;
        } else for (Oe = Mt(t.stateNode.containerInfo.firstChild), Me = t, Q = !0, qe = null, n = Sf(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Bn(), r === i) {
            t = Et(e, t, n);
            break e;
          }
          Ee(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Cf(t), e === null && Bl(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, l = i.children, Ml(r, i) ? l = null : o !== null && Ml(r, o) && (t.flags |= 32), Zf(e, t), Ee(e, t, l, n), t.child;
    case 6:
      return e === null && Bl(t), null;
    case 13:
      return Kf(e, t, n);
    case 4:
      return Xa(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Un(t, null, r, n) : Ee(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ke(r, i), xs(e, t, r, i, n);
    case 7:
      return Ee(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ee(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ee(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, l = i.value, G($i, r._currentValue), r._currentValue = l, o !== null) if (nt(o.value, l)) {
          if (o.children === i.children && !Pe.current) {
            t = Et(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var a = o.dependencies;
          if (a !== null) {
            l = o.child;
            for (var u = a.firstContext; u !== null; ) {
              if (u.context === r) {
                if (o.tag === 1) {
                  u = mt(-1, n & -n), u.tag = 2;
                  var s = o.updateQueue;
                  if (s !== null) {
                    s = s.shared;
                    var c = s.pending;
                    c === null ? u.next = u : (u.next = c.next, c.next = u), s.pending = u;
                  }
                }
                o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Ul(
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
            l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), Ul(l, n, t), l = o.sibling;
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
        Ee(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, An(t, n), i = Ve(i), r = r(i), t.flags |= 1, Ee(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = Ke(r, t.pendingProps), i = Ke(r.type, i), Ss(e, t, r, i, n);
    case 15:
      return Xf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ke(r, i), Ci(e, t), t.tag = 1, Re(r) ? (e = !0, Ui(t)) : e = !1, An(t, n), Gf(t, r, i), jl(t, r, i, n), Gl(null, t, r, !0, e, n);
    case 19:
      return Jf(e, t, n);
    case 22:
      return Qf(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function hd(e, t) {
  return zc(e, t);
}
function Dm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function be(e, t, n, r) {
  return new Dm(e, t, n, r);
}
function uu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Fm(e) {
  if (typeof e == "function") return uu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ka) return 11;
    if (e === Pa) return 14;
  }
  return 2;
}
function Ft(e, t) {
  var n = e.alternate;
  return n === null ? (n = be(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ki(e, t, n, r, i, o) {
  var l = 2;
  if (r = e, typeof e == "function") uu(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case En:
      return nn(n.children, i, o, t);
    case _a:
      l = 8, i |= 8;
      break;
    case fl:
      return e = be(12, n, t, i | 2), e.elementType = fl, e.lanes = o, e;
    case dl:
      return e = be(13, n, t, i), e.elementType = dl, e.lanes = o, e;
    case pl:
      return e = be(19, n, t, i), e.elementType = pl, e.lanes = o, e;
    case Tc:
      return fo(n, i, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Sc:
          l = 10;
          break e;
        case wc:
          l = 9;
          break e;
        case ka:
          l = 11;
          break e;
        case Pa:
          l = 14;
          break e;
        case Tt:
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
function fo(e, t, n, r) {
  return e = be(22, e, r, t), e.elementType = Tc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function nl(e, t, n) {
  return e = be(6, e, null, t), e.lanes = n, e;
}
function rl(e, t, n) {
  return t = be(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Bm(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Fo(0), this.expirationTimes = Fo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fo(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function su(e, t, n, r, i, o, l, a, u) {
  return e = new Bm(e, t, n, a, u), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = be(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Wa(o), e;
}
function Um(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: yn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function md(e) {
  if (!e) return Ut;
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
          if (Re(t.type)) {
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
    if (Re(n)) return mf(e, n, t);
  }
  return t;
}
function vd(e, t, n, r, i, o, l, a, u) {
  return e = su(n, r, !0, e, i, o, l, a, u), e.context = md(null), n = e.current, r = Te(), i = Dt(n), o = mt(r, i), o.callback = t ?? null, At(n, o, i), e.current.lanes = i, Fr(e, i, r), Le(e, r), e;
}
function po(e, t, n, r) {
  var i = t.current, o = Te(), l = Dt(i);
  return n = md(n), t.context === null ? t.context = n : t.pendingContext = n, t = mt(o, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = At(i, t, l), e !== null && (tt(e, i, l, o), Si(e, i, l)), l;
}
function Ji(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ms(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function cu(e, t) {
  Ms(e, t), (e = e.alternate) && Ms(e, t);
}
function zm() {
  return null;
}
var gd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function fu(e) {
  this._internalRoot = e;
}
ho.prototype.render = fu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  po(e, t, null, null);
};
ho.prototype.unmount = fu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    un(function() {
      po(null, e, null, null);
    }), t[gt] = null;
  }
};
function ho(e) {
  this._internalRoot = e;
}
ho.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Xc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < _t.length && t !== 0 && t < _t[n].priority; n++) ;
    _t.splice(n, 0, e), n === 0 && Zc(e);
  }
};
function du(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function mo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function As() {
}
function jm(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var s = Ji(l);
        o.call(s);
      };
    }
    var l = vd(t, r, e, 0, null, !1, !1, "", As);
    return e._reactRootContainer = l, e[gt] = l.current, _r(e.nodeType === 8 ? e.parentNode : e), un(), l;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var s = Ji(u);
      a.call(s);
    };
  }
  var u = su(e, 0, !1, null, null, !1, !1, "", As);
  return e._reactRootContainer = u, e[gt] = u.current, _r(e.nodeType === 8 ? e.parentNode : e), un(function() {
    po(t, u, n, r);
  }), u;
}
function vo(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var a = i;
      i = function() {
        var u = Ji(l);
        a.call(u);
      };
    }
    po(t, l, e, i);
  } else l = jm(n, t, e, i, r);
  return Ji(l);
}
Vc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = or(t.pendingLanes);
        n !== 0 && (Ia(t, n | 1), Le(t, te()), !(z & 6) && ($n = te() + 500, $t()));
      }
      break;
    case 13:
      un(function() {
        var r = yt(e, 1);
        if (r !== null) {
          var i = Te();
          tt(r, e, 1, i);
        }
      }), cu(e, 1);
  }
};
Oa = function(e) {
  if (e.tag === 13) {
    var t = yt(e, 134217728);
    if (t !== null) {
      var n = Te();
      tt(t, e, 134217728, n);
    }
    cu(e, 134217728);
  }
};
Wc = function(e) {
  if (e.tag === 13) {
    var t = Dt(e), n = yt(e, t);
    if (n !== null) {
      var r = Te();
      tt(n, e, t, r);
    }
    cu(e, t);
  }
};
Xc = function() {
  return j;
};
Qc = function(e, t) {
  var n = j;
  try {
    return j = e, t();
  } finally {
    j = n;
  }
};
Tl = function(e, t, n) {
  switch (t) {
    case "input":
      if (vl(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = oo(r);
            if (!i) throw Error(x(90));
            Nc(r), vl(r, i);
          }
        }
      }
      break;
    case "textarea":
      kc(e, n);
      break;
    case "select":
      t = n.value, t != null && Ln(e, !!n.multiple, t, !1);
  }
};
Ac = ou;
Hc = un;
var $m = { usingClientEntryPoint: !1, Events: [Ur, Tn, oo, Oc, Mc, ou] }, nr = { findFiberByHostInstance: Jt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, bm = { bundleType: nr.bundleType, version: nr.version, rendererPackageName: nr.rendererPackageName, rendererConfig: nr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: xt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Bc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: nr.findFiberByHostInstance || zm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!si.isDisabled && si.supportsFiber) try {
    to = si.inject(bm), lt = si;
  } catch {
  }
}
De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $m;
De.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!du(t)) throw Error(x(200));
  return Um(e, t, null, n);
};
De.createRoot = function(e, t) {
  if (!du(e)) throw Error(x(299));
  var n = !1, r = "", i = gd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = su(e, 1, !1, null, null, n, !1, r, i), e[gt] = t.current, _r(e.nodeType === 8 ? e.parentNode : e), new fu(t);
};
De.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(x(188)) : (e = Object.keys(e).join(","), Error(x(268, e)));
  return e = Bc(t), e = e === null ? null : e.stateNode, e;
};
De.flushSync = function(e) {
  return un(e);
};
De.hydrate = function(e, t, n) {
  if (!mo(t)) throw Error(x(200));
  return vo(null, e, t, !0, n);
};
De.hydrateRoot = function(e, t, n) {
  if (!du(e)) throw Error(x(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", l = gd;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = vd(t, null, e, 1, n ?? null, i, !1, o, l), e[gt] = t.current, _r(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new ho(t);
};
De.render = function(e, t, n) {
  if (!mo(t)) throw Error(x(200));
  return vo(null, e, t, !1, n);
};
De.unmountComponentAtNode = function(e) {
  if (!mo(e)) throw Error(x(40));
  return e._reactRootContainer ? (un(function() {
    vo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[gt] = null;
    });
  }), !0) : !1;
};
De.unstable_batchedUpdates = ou;
De.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!mo(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return vo(e, t, n, !1, r);
};
De.version = "18.3.1-next-f1338f8080-20240426";
function yd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yd);
    } catch (e) {
      console.error(e);
    }
}
yd(), gc.exports = De;
var Ed = gc.exports;
const ci = /* @__PURE__ */ Hr(Ed);
var xd, Hs = Ed;
xd = Hs.createRoot, Hs.hydrateRoot;
var na = function(e, t) {
  return na = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, na(e, t);
};
function Qe(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  na(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var k = function() {
  return k = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, k.apply(this, arguments);
};
function bn(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function we(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, o; r < i; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
function xe(e, t) {
  var n = t && t.cache ? t.cache : Zm, r = t && t.serializer ? t.serializer : Qm, i = t && t.strategy ? t.strategy : Wm;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function Gm(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Vm(e, t, n, r) {
  var i = Gm(r) ? r : n(r), o = t.get(i);
  return typeof o > "u" && (o = e.call(this, r), t.set(i, o)), o;
}
function Sd(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), o = t.get(i);
  return typeof o > "u" && (o = e.apply(this, r), t.set(i, o)), o;
}
function wd(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function Wm(e, t) {
  var n = e.length === 1 ? Vm : Sd;
  return wd(e, this, n, t.cache.create(), t.serializer);
}
function Xm(e, t) {
  return wd(e, this, Sd, t.cache.create(), t.serializer);
}
var Qm = function() {
  return JSON.stringify(arguments);
};
function pu() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
pu.prototype.get = function(e) {
  return this.cache[e];
};
pu.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var Zm = {
  create: function() {
    return new pu();
  }
}, Se = {
  variadic: Xm
};
function Td(e, t, n) {
  if (n === void 0 && (n = Error), !e)
    throw new n(t);
}
xe(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.NumberFormat).bind.apply(e, we([void 0], t, !1)))();
}, {
  strategy: Se.variadic
});
xe(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.DateTimeFormat).bind.apply(e, we([void 0], t, !1)))();
}, {
  strategy: Se.variadic
});
xe(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.PluralRules).bind.apply(e, we([void 0], t, !1)))();
}, {
  strategy: Se.variadic
});
xe(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.Locale).bind.apply(e, we([void 0], t, !1)))();
}, {
  strategy: Se.variadic
});
xe(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.ListFormat).bind.apply(e, we([void 0], t, !1)))();
}, {
  strategy: Se.variadic
});
var B;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(B || (B = {}));
var W;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(W || (W = {}));
var Gn;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(Gn || (Gn = {}));
function Ds(e) {
  return e.type === W.literal;
}
function Ym(e) {
  return e.type === W.argument;
}
function Cd(e) {
  return e.type === W.number;
}
function Nd(e) {
  return e.type === W.date;
}
function _d(e) {
  return e.type === W.time;
}
function kd(e) {
  return e.type === W.select;
}
function Pd(e) {
  return e.type === W.plural;
}
function Km(e) {
  return e.type === W.pound;
}
function Rd(e) {
  return e.type === W.tag;
}
function Ld(e) {
  return !!(e && typeof e == "object" && e.type === Gn.number);
}
function ra(e) {
  return !!(e && typeof e == "object" && e.type === Gn.dateTime);
}
var Id = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Jm = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function qm(e) {
  var t = {};
  return e.replace(Jm, function(n) {
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
var ev = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function tv(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(ev).filter(function(d) {
    return d.length > 0;
  }), n = [], r = 0, i = t; r < i.length; r++) {
    var o = i[r], l = o.split("/");
    if (l.length === 0)
      throw new Error("Invalid number skeleton");
    for (var a = l[0], u = l.slice(1), s = 0, c = u; s < c.length; s++) {
      var m = c[s];
      if (m.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: a, options: u });
  }
  return n;
}
function nv(e) {
  return e.replace(/^(.*?)-/, "");
}
var Fs = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Od = /^(@+)?(\+|#+)?[rs]?$/g, rv = /(\*)(0+)|(#+)(0+)|(0+)/g, Md = /^(0+)$/;
function Bs(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Od, function(n, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function Ad(e) {
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
function iv(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Md.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Us(e) {
  var t = {}, n = Ad(e);
  return n || t;
}
function ov(e) {
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
        t.style = "unit", t.unit = nv(i.options[0]);
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
        t = k(k(k({}, t), { notation: "scientific" }), i.options.reduce(function(u, s) {
          return k(k({}, u), Us(s));
        }, {}));
        continue;
      case "engineering":
        t = k(k(k({}, t), { notation: "engineering" }), i.options.reduce(function(u, s) {
          return k(k({}, u), Us(s));
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
        i.options[0].replace(rv, function(u, s, c, m, d, v) {
          if (s)
            t.minimumIntegerDigits = c.length;
          else {
            if (m && d)
              throw new Error("We currently do not support maximum integer digits");
            if (v)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Md.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Fs.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Fs, function(u, s, c, m, d, v) {
        return c === "*" ? t.minimumFractionDigits = s.length : m && m[0] === "#" ? t.maximumFractionDigits = m.length : d && v ? (t.minimumFractionDigits = d.length, t.maximumFractionDigits = d.length + v.length) : (t.minimumFractionDigits = s.length, t.maximumFractionDigits = s.length), "";
      });
      var o = i.options[0];
      o === "w" ? t = k(k({}, t), { trailingZeroDisplay: "stripIfInteger" }) : o && (t = k(k({}, t), Bs(o)));
      continue;
    }
    if (Od.test(i.stem)) {
      t = k(k({}, t), Bs(i.stem));
      continue;
    }
    var l = Ad(i.stem);
    l && (t = k(k({}, t), l));
    var a = iv(i.stem);
    a && (t = k(k({}, t), a));
  }
  return t;
}
var fi = {
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
function lv(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var o = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        o++, r++;
      var l = 1 + (o & 1), a = o < 2 ? 1 : 3 + (o >> 1), u = "a", s = av(t);
      for ((s == "H" || s == "k") && (a = 0); a-- > 0; )
        n += u;
      for (; l-- > 0; )
        n = s + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function av(e) {
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
  var i = fi[r || ""] || fi[n || ""] || fi["".concat(n, "-001")] || fi["001"];
  return i[0];
}
var il, uv = new RegExp("^".concat(Id.source, "*")), sv = new RegExp("".concat(Id.source, "*$"));
function U(e, t) {
  return { start: e, end: t };
}
var cv = !!String.prototype.startsWith && "_a".startsWith("a", 1), fv = !!String.fromCodePoint, dv = !!Object.fromEntries, pv = !!String.prototype.codePointAt, hv = !!String.prototype.trimStart, mv = !!String.prototype.trimEnd, vv = !!Number.isSafeInteger, gv = vv ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, ia = !0;
try {
  var yv = Dd("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ia = ((il = yv.exec("a")) === null || il === void 0 ? void 0 : il[0]) === "a";
} catch {
  ia = !1;
}
var zs = cv ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), oa = fv ? String.fromCodePoint : (
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
), js = (
  // native
  dv ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var o = i[r], l = o[0], a = o[1];
        n[l] = a;
      }
      return n;
    }
  )
), Hd = pv ? (
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
), Ev = hv ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(uv, "");
  }
), xv = mv ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(sv, "");
  }
);
function Dd(e, t) {
  return new RegExp(e, t);
}
var la;
if (ia) {
  var $s = Dd("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  la = function(t, n) {
    var r;
    $s.lastIndex = n;
    var i = $s.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  la = function(t, n) {
    for (var r = []; ; ) {
      var i = Hd(t, n);
      if (i === void 0 || Fd(i) || Cv(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return oa.apply(void 0, r);
  };
var Sv = (
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
              type: W.pound,
              location: U(a, this.clonePosition())
            });
          } else if (o === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(B.UNMATCHED_CLOSING_TAG, U(this.clonePosition(), this.clonePosition()));
          } else if (o === 60 && !this.ignoreTag && aa(this.peek() || 0)) {
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
            type: W.literal,
            value: "<".concat(i, "/>"),
            location: U(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var o = this.parseMessage(t + 1, n, !0);
        if (o.err)
          return o;
        var l = o.val, a = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !aa(this.char()))
            return this.error(B.INVALID_TAG, U(a, this.clonePosition()));
          var u = this.clonePosition(), s = this.parseTagName();
          return i !== s ? this.error(B.UNMATCHED_CLOSING_TAG, U(u, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: W.tag,
              value: i,
              children: l,
              location: U(r, this.clonePosition())
            },
            err: null
          } : this.error(B.INVALID_TAG, U(a, this.clonePosition())));
        } else
          return this.error(B.UNCLOSED_TAG, U(r, this.clonePosition()));
      } else
        return this.error(B.INVALID_TAG, U(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && Tv(this.char()); )
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
      var u = U(r, this.clonePosition());
      return {
        val: { type: W.literal, value: i, location: u },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !wv(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return oa.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), oa(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(B.EXPECT_ARGUMENT_CLOSING_BRACE, U(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(B.EMPTY_ARGUMENT, U(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(B.MALFORMED_ARGUMENT, U(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(B.EXPECT_ARGUMENT_CLOSING_BRACE, U(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: W.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: U(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(B.EXPECT_ARGUMENT_CLOSING_BRACE, U(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(B.MALFORMED_ARGUMENT, U(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = la(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var o = this.clonePosition(), l = U(t, o);
      return { value: r, location: l };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var o, l = this.clonePosition(), a = this.parseIdentifierIfPossible().value, u = this.clonePosition();
      switch (a) {
        case "":
          return this.error(B.EXPECT_ARGUMENT_TYPE, U(l, u));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var s = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var c = this.clonePosition(), m = this.parseSimpleArgStyleIfPossible();
            if (m.err)
              return m;
            var d = xv(m.val);
            if (d.length === 0)
              return this.error(B.EXPECT_ARGUMENT_STYLE, U(this.clonePosition(), this.clonePosition()));
            var v = U(c, this.clonePosition());
            s = { style: d, styleLocation: v };
          }
          var y = this.tryParseArgumentClose(i);
          if (y.err)
            return y;
          var g = U(i, this.clonePosition());
          if (s && zs(s == null ? void 0 : s.style, "::", 0)) {
            var O = Ev(s.style.slice(2));
            if (a === "number") {
              var m = this.parseNumberSkeletonFromString(O, s.styleLocation);
              return m.err ? m : {
                val: { type: W.number, value: r, location: g, style: m.val },
                err: null
              };
            } else {
              if (O.length === 0)
                return this.error(B.EXPECT_DATE_TIME_SKELETON, g);
              var p = O;
              this.locale && (p = lv(O, this.locale));
              var d = {
                type: Gn.dateTime,
                pattern: p,
                location: s.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? qm(p) : {}
              }, f = a === "date" ? W.date : W.time;
              return {
                val: { type: f, value: r, location: g, style: d },
                err: null
              };
            }
          }
          return {
            val: {
              type: a === "number" ? W.number : a === "date" ? W.date : W.time,
              value: r,
              location: g,
              style: (o = s == null ? void 0 : s.style) !== null && o !== void 0 ? o : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var h = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(B.EXPECT_SELECT_ARGUMENT_OPTIONS, U(h, k({}, h)));
          this.bumpSpace();
          var E = this.parseIdentifierIfPossible(), S = 0;
          if (a !== "select" && E.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(B.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, U(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var m = this.tryParseDecimalInteger(B.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, B.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (m.err)
              return m;
            this.bumpSpace(), E = this.parseIdentifierIfPossible(), S = m.val;
          }
          var N = this.tryParsePluralOrSelectOptions(t, a, n, E);
          if (N.err)
            return N;
          var y = this.tryParseArgumentClose(i);
          if (y.err)
            return y;
          var T = U(i, this.clonePosition());
          return a === "select" ? {
            val: {
              type: W.select,
              value: r,
              options: js(N.val),
              location: T
            },
            err: null
          } : {
            val: {
              type: W.plural,
              value: r,
              options: js(N.val),
              offset: S,
              pluralType: a === "plural" ? "cardinal" : "ordinal",
              location: T
            },
            err: null
          };
        }
        default:
          return this.error(B.INVALID_ARGUMENT_TYPE, U(l, u));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(B.EXPECT_ARGUMENT_CLOSING_BRACE, U(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(B.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, U(i, this.clonePosition()));
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
        r = tv(t);
      } catch {
        return this.error(B.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Gn.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? ov(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var o, l = !1, a = [], u = /* @__PURE__ */ new Set(), s = i.value, c = i.location; ; ) {
        if (s.length === 0) {
          var m = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var d = this.tryParseDecimalInteger(B.EXPECT_PLURAL_ARGUMENT_SELECTOR, B.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (d.err)
              return d;
            c = U(m, this.clonePosition()), s = this.message.slice(m.offset, this.offset());
          } else
            break;
        }
        if (u.has(s))
          return this.error(n === "select" ? B.DUPLICATE_SELECT_ARGUMENT_SELECTOR : B.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        s === "other" && (l = !0), this.bumpSpace();
        var v = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? B.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : B.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, U(this.clonePosition(), this.clonePosition()));
        var y = this.parseMessage(t + 1, n, r);
        if (y.err)
          return y;
        var g = this.tryParseArgumentClose(v);
        if (g.err)
          return g;
        a.push([
          s,
          {
            value: y.val,
            location: U(v, this.clonePosition())
          }
        ]), u.add(s), this.bumpSpace(), o = this.parseIdentifierIfPossible(), s = o.value, c = o.location;
      }
      return a.length === 0 ? this.error(n === "select" ? B.EXPECT_SELECT_ARGUMENT_SELECTOR : B.EXPECT_PLURAL_ARGUMENT_SELECTOR, U(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !l ? this.error(B.MISSING_OTHER_CLAUSE, U(this.clonePosition(), this.clonePosition())) : { val: a, err: null };
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
      var u = U(i, this.clonePosition());
      return o ? (l *= r, gv(l) ? { val: l, err: null } : this.error(n, u)) : this.error(t, u);
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
      var n = Hd(this.message, t);
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
      if (zs(this.message, t, this.offset())) {
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
      for (; !this.isEOF() && Fd(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function aa(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function wv(e) {
  return aa(e) || e === 47;
}
function Tv(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Fd(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Cv(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function ua(e) {
  e.forEach(function(t) {
    if (delete t.location, kd(t) || Pd(t))
      for (var n in t.options)
        delete t.options[n].location, ua(t.options[n].value);
    else Cd(t) && Ld(t.style) || (Nd(t) || _d(t)) && ra(t.style) ? delete t.style.location : Rd(t) && ua(t.children);
  });
}
function Nv(e, t) {
  t === void 0 && (t = {}), t = k({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new Sv(e, t).parse();
  if (n.err) {
    var r = SyntaxError(B[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || ua(n.val), n.val;
}
var ut;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(ut || (ut = {}));
var bt = (
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
), bs = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t(n, r, i, o) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), ut.INVALID_VALUE, o) || this;
    }
    return t;
  }(bt)
), _v = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), ut.INVALID_VALUE, i) || this;
    }
    return t;
  }(bt)
), kv = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), ut.MISSING_VALUE, r) || this;
    }
    return t;
  }(bt)
), ge;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(ge || (ge = {}));
function Pv(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== ge.literal || n.type !== ge.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function Bd(e) {
  return typeof e == "function";
}
function Pi(e, t, n, r, i, o, l) {
  if (e.length === 1 && Ds(e[0]))
    return [
      {
        type: ge.literal,
        value: e[0].value
      }
    ];
  for (var a = [], u = 0, s = e; u < s.length; u++) {
    var c = s[u];
    if (Ds(c)) {
      a.push({
        type: ge.literal,
        value: c.value
      });
      continue;
    }
    if (Km(c)) {
      typeof o == "number" && a.push({
        type: ge.literal,
        value: n.getNumberFormat(t).format(o)
      });
      continue;
    }
    var m = c.value;
    if (!(i && m in i))
      throw new kv(m, l);
    var d = i[m];
    if (Ym(c)) {
      (!d || typeof d == "string" || typeof d == "number") && (d = typeof d == "string" || typeof d == "number" ? String(d) : ""), a.push({
        type: typeof d == "string" ? ge.literal : ge.object,
        value: d
      });
      continue;
    }
    if (Nd(c)) {
      var v = typeof c.style == "string" ? r.date[c.style] : ra(c.style) ? c.style.parsedOptions : void 0;
      a.push({
        type: ge.literal,
        value: n.getDateTimeFormat(t, v).format(d)
      });
      continue;
    }
    if (_d(c)) {
      var v = typeof c.style == "string" ? r.time[c.style] : ra(c.style) ? c.style.parsedOptions : r.time.medium;
      a.push({
        type: ge.literal,
        value: n.getDateTimeFormat(t, v).format(d)
      });
      continue;
    }
    if (Cd(c)) {
      var v = typeof c.style == "string" ? r.number[c.style] : Ld(c.style) ? c.style.parsedOptions : void 0;
      v && v.scale && (d = d * (v.scale || 1)), a.push({
        type: ge.literal,
        value: n.getNumberFormat(t, v).format(d)
      });
      continue;
    }
    if (Rd(c)) {
      var y = c.children, g = c.value, O = i[g];
      if (!Bd(O))
        throw new _v(g, "function", l);
      var p = Pi(y, t, n, r, i, o), f = O(p.map(function(S) {
        return S.value;
      }));
      Array.isArray(f) || (f = [f]), a.push.apply(a, f.map(function(S) {
        return {
          type: typeof S == "string" ? ge.literal : ge.object,
          value: S
        };
      }));
    }
    if (kd(c)) {
      var h = c.options[d] || c.options.other;
      if (!h)
        throw new bs(c.value, d, Object.keys(c.options), l);
      a.push.apply(a, Pi(h.value, t, n, r, i));
      continue;
    }
    if (Pd(c)) {
      var h = c.options["=".concat(d)];
      if (!h) {
        if (!Intl.PluralRules)
          throw new bt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, ut.MISSING_INTL_API, l);
        var E = n.getPluralRules(t, { type: c.pluralType }).select(d - (c.offset || 0));
        h = c.options[E] || c.options.other;
      }
      if (!h)
        throw new bs(c.value, d, Object.keys(c.options), l);
      a.push.apply(a, Pi(h.value, t, n, r, i, d - (c.offset || 0)));
      continue;
    }
  }
  return Pv(a);
}
function Rv(e, t) {
  return t ? k(k(k({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = k(k({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function Lv(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = Rv(e[r], t[r]), n;
  }, k({}, e)) : e;
}
function ol(e) {
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
function Iv(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: xe(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, we([void 0], n, !1)))();
    }, {
      cache: ol(e.number),
      strategy: Se.variadic
    }),
    getDateTimeFormat: xe(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, we([void 0], n, !1)))();
    }, {
      cache: ol(e.dateTime),
      strategy: Se.variadic
    }),
    getPluralRules: xe(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, we([void 0], n, !1)))();
    }, {
      cache: ol(e.pluralRules),
      strategy: Se.variadic
    })
  };
}
var Ud = (
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
        var c = s.reduce(function(m, d) {
          return !m.length || d.type !== ge.literal || typeof m[m.length - 1] != "string" ? m.push(d.value) : m[m.length - 1] += d.value, m;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(u) {
        return Pi(o.ast, o.locales, o.formatters, o.formats, u, void 0, o.message);
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
        var a = bn(l, ["formatters"]);
        this.ast = e.__parse(t, k(k({}, a), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Lv(e.formats, r), this.formatters = i && i.formatters || Iv(this.formatterCache);
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
    }, e.__parse = Nv, e.formats = {
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
var jr = (
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
), Ov = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t(n, r) {
      return e.call(this, sn.UNSUPPORTED_FORMATTER, n, r) || this;
    }
    return t;
  }(jr)
), Mv = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t(n, r) {
      return e.call(this, sn.INVALID_CONFIG, n, r) || this;
    }
    return t;
  }(jr)
), Gs = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t(n, r) {
      return e.call(this, sn.MISSING_DATA, n, r) || this;
    }
    return t;
  }(jr)
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
  }(jr)
), ll = (
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
), Av = (
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
  }(jr)
);
function dn(e, t, n) {
  return n === void 0 && (n = {}), t.reduce(function(r, i) {
    return i in e ? r[i] = e[i] : i in n && (r[i] = n[i]), r;
  }, {});
}
var Hv = function(e) {
}, Dv = function(e) {
}, zd = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: Hv,
  onWarn: Dv
};
function jd() {
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
function Fv(e) {
  e === void 0 && (e = jd());
  var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, i = xe(function() {
    for (var a, u = [], s = 0; s < arguments.length; s++)
      u[s] = arguments[s];
    return new ((a = Intl.DateTimeFormat).bind.apply(a, we([void 0], u, !1)))();
  }, {
    cache: Xt(e.dateTime),
    strategy: Se.variadic
  }), o = xe(function() {
    for (var a, u = [], s = 0; s < arguments.length; s++)
      u[s] = arguments[s];
    return new ((a = Intl.NumberFormat).bind.apply(a, we([void 0], u, !1)))();
  }, {
    cache: Xt(e.number),
    strategy: Se.variadic
  }), l = xe(function() {
    for (var a, u = [], s = 0; s < arguments.length; s++)
      u[s] = arguments[s];
    return new ((a = Intl.PluralRules).bind.apply(a, we([void 0], u, !1)))();
  }, {
    cache: Xt(e.pluralRules),
    strategy: Se.variadic
  });
  return {
    getDateTimeFormat: i,
    getNumberFormat: o,
    getMessageFormat: xe(function(a, u, s, c) {
      return new Ud(a, u, s, k({ formatters: {
        getNumberFormat: o,
        getDateTimeFormat: i,
        getPluralRules: l
      } }, c || {}));
    }, {
      cache: Xt(e.message),
      strategy: Se.variadic
    }),
    getRelativeTimeFormat: xe(function() {
      for (var a = [], u = 0; u < arguments.length; u++)
        a[u] = arguments[u];
      return new (t.bind.apply(t, we([void 0], a, !1)))();
    }, {
      cache: Xt(e.relativeTime),
      strategy: Se.variadic
    }),
    getPluralRules: l,
    getListFormat: xe(function() {
      for (var a = [], u = 0; u < arguments.length; u++)
        a[u] = arguments[u];
      return new (n.bind.apply(n, we([void 0], a, !1)))();
    }, {
      cache: Xt(e.list),
      strategy: Se.variadic
    }),
    getDisplayNames: xe(function() {
      for (var a = [], u = 0; u < arguments.length; u++)
        a[u] = arguments[u];
      return new (r.bind.apply(r, we([void 0], a, !1)))();
    }, {
      cache: Xt(e.displayNames),
      strategy: Se.variadic
    })
  };
}
function hu(e, t, n, r) {
  var i = e && e[t], o;
  if (i && (o = i[n]), o)
    return o;
  r(new Ov("No ".concat(t, " format named: ").concat(n)));
}
function di(e, t) {
  return Object.keys(e).reduce(function(n, r) {
    return n[r] = k({ timeZone: t }, e[r]), n;
  }, {});
}
function Vs(e, t) {
  var n = Object.keys(k(k({}, e), t));
  return n.reduce(function(r, i) {
    return r[i] = k(k({}, e[i] || {}), t[i] || {}), r;
  }, {});
}
function Ws(e, t) {
  if (!t)
    return e;
  var n = Ud.formats;
  return k(k(k({}, n), e), { date: Vs(di(n.date, t), di(e.date || {}, t)), time: Vs(di(n.time, t), di(e.time || {}, t)) });
}
var sa = function(e, t, n, r, i) {
  var o = e.locale, l = e.formats, a = e.messages, u = e.defaultLocale, s = e.defaultFormats, c = e.fallbackOnEmptyString, m = e.onError, d = e.timeZone, v = e.defaultRichTextElements;
  n === void 0 && (n = { id: "" });
  var y = n.id, g = n.defaultMessage;
  Td(!!y, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var O = String(y), p = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    a && Object.prototype.hasOwnProperty.call(a, O) && a[O]
  );
  if (Array.isArray(p) && p.length === 1 && p[0].type === W.literal)
    return p[0].value;
  if (!r && p && typeof p == "string" && !v)
    return p.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (r = k(k({}, v), r || {}), l = Ws(l, d), s = Ws(s, d), !p) {
    if (c === !1 && p === "")
      return p;
    if ((!g || o && o.toLowerCase() !== u.toLowerCase()) && m(new Av(n, o)), g)
      try {
        var f = t.getMessageFormat(g, u, s, i);
        return f.format(r);
      } catch (h) {
        return m(new ll('Error formatting default message for: "'.concat(O, '", rendering default message verbatim'), o, n, h)), typeof g == "string" ? g : O;
      }
    return O;
  }
  try {
    var f = t.getMessageFormat(p, o, l, k({ formatters: t }, i || {}));
    return f.format(r);
  } catch (h) {
    m(new ll('Error formatting message: "'.concat(O, '", using ').concat(g ? "default message" : "id", " as fallback."), o, n, h));
  }
  if (g)
    try {
      var f = t.getMessageFormat(g, u, s, i);
      return f.format(r);
    } catch (h) {
      m(new ll('Error formatting the default message for: "'.concat(O, '", rendering message verbatim'), o, n, h));
    }
  return typeof p == "string" ? p : typeof g == "string" ? g : O;
}, $d = [
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
function go(e, t, n, r) {
  var i = e.locale, o = e.formats, l = e.onError, a = e.timeZone;
  r === void 0 && (r = {});
  var u = r.format, s = k(k({}, a && { timeZone: a }), u && hu(o, t, u, l)), c = dn(r, $d, s);
  return t === "time" && !c.hour && !c.minute && !c.second && !c.timeStyle && !c.dateStyle && (c = k(k({}, c), { hour: "numeric", minute: "numeric" })), n(i, c);
}
function Bv(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], o = n[1], l = o === void 0 ? {} : o, a = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return go(e, "date", t, l).format(a);
  } catch (u) {
    e.onError(new Ze("Error formatting date.", e.locale, u));
  }
  return String(a);
}
function Uv(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], o = n[1], l = o === void 0 ? {} : o, a = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return go(e, "time", t, l).format(a);
  } catch (u) {
    e.onError(new Ze("Error formatting time.", e.locale, u));
  }
  return String(a);
}
function zv(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], o = n[1], l = n[2], a = l === void 0 ? {} : l, u = e.timeZone, s = e.locale, c = e.onError, m = dn(a, $d, u ? { timeZone: u } : {});
  try {
    return t(s, m).formatRange(i, o);
  } catch (d) {
    c(new Ze("Error formatting date time range.", e.locale, d));
  }
  return String(i);
}
function jv(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], o = n[1], l = o === void 0 ? {} : o, a = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return go(e, "date", t, l).formatToParts(a);
  } catch (u) {
    e.onError(new Ze("Error formatting date.", e.locale, u));
  }
  return [];
}
function $v(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], o = n[1], l = o === void 0 ? {} : o, a = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return go(e, "time", t, l).formatToParts(a);
  } catch (u) {
    e.onError(new Ze("Error formatting time.", e.locale, u));
  }
  return [];
}
var bv = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function Gv(e, t, n, r) {
  var i = e.locale, o = e.onError, l = Intl.DisplayNames;
  l || o(new bt(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, ut.MISSING_INTL_API));
  var a = dn(r, bv);
  try {
    return t(i, a).of(n);
  } catch (u) {
    o(new Ze("Error formatting display name.", i, u));
  }
}
var Vv = [
  "type",
  "style"
], Xs = Date.now();
function Wv(e) {
  return "".concat(Xs, "_").concat(e, "_").concat(Xs);
}
function Xv(e, t, n, r) {
  r === void 0 && (r = {});
  var i = bd(e, t, n, r).reduce(function(o, l) {
    var a = l.value;
    return typeof a != "string" ? o.push(a) : typeof o[o.length - 1] == "string" ? o[o.length - 1] += a : o.push(a), o;
  }, []);
  return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function bd(e, t, n, r) {
  var i = e.locale, o = e.onError;
  r === void 0 && (r = {});
  var l = Intl.ListFormat;
  l || o(new bt(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, ut.MISSING_INTL_API));
  var a = dn(r, Vv);
  try {
    var u = {}, s = n.map(function(c, m) {
      if (typeof c == "object") {
        var d = Wv(m);
        return u[d] = c, d;
      }
      return String(c);
    });
    return t(i, a).formatToParts(s).map(function(c) {
      return c.type === "literal" ? c : k(k({}, c), { value: u[c.value] || c.value });
    });
  } catch (c) {
    o(new Ze("Error formatting list.", i, c));
  }
  return n;
}
var Qv = ["type"];
function Zv(e, t, n, r) {
  var i = e.locale, o = e.onError;
  r === void 0 && (r = {}), Intl.PluralRules || o(new bt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, ut.MISSING_INTL_API));
  var l = dn(r, Qv);
  try {
    return t(i, l).select(n);
  } catch (a) {
    o(new Ze("Error formatting plural.", i, a));
  }
  return "other";
}
var Yv = ["numeric", "style"];
function Kv(e, t, n) {
  var r = e.locale, i = e.formats, o = e.onError;
  n === void 0 && (n = {});
  var l = n.format, a = !!l && hu(i, "relative", l, o) || {}, u = dn(n, Yv, a);
  return t(r, u);
}
function Jv(e, t, n, r, i) {
  i === void 0 && (i = {}), r || (r = "second");
  var o = Intl.RelativeTimeFormat;
  o || e.onError(new bt(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, ut.MISSING_INTL_API));
  try {
    return Kv(e, t, i).format(n, r);
  } catch (l) {
    e.onError(new Ze("Error formatting relative time.", e.locale, l));
  }
  return String(n);
}
var qv = [
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
function Gd(e, t, n) {
  var r = e.locale, i = e.formats, o = e.onError;
  n === void 0 && (n = {});
  var l = n.format, a = l && hu(i, "number", l, o) || {}, u = dn(n, qv, a);
  return t(r, u);
}
function e0(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Gd(e, t, r).format(n);
  } catch (i) {
    e.onError(new Ze("Error formatting number.", e.locale, i));
  }
  return String(n);
}
function t0(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Gd(e, t, r).formatToParts(n);
  } catch (i) {
    e.onError(new Ze("Error formatting number.", e.locale, i));
  }
  return [];
}
function n0(e) {
  var t = e ? e[Object.keys(e)[0]] : void 0;
  return typeof t == "string";
}
function r0(e) {
  e.onWarn && e.defaultRichTextElements && n0(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`);
}
function i0(e, t) {
  var n = Fv(t), r = k(k({}, zd), e), i = r.locale, o = r.defaultLocale, l = r.onError;
  return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && l ? l(new Gs('Missing locale data for locale: "'.concat(i, '" in Intl.NumberFormat. Using default locale: "').concat(o, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && l && l(new Gs('Missing locale data for locale: "'.concat(i, '" in Intl.DateTimeFormat. Using default locale: "').concat(o, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (l && l(new Mv('"locale" was not configured, using "'.concat(o, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"), r0(r), k(k({}, r), {
    formatters: n,
    formatNumber: e0.bind(null, r, n.getNumberFormat),
    formatNumberToParts: t0.bind(null, r, n.getNumberFormat),
    formatRelativeTime: Jv.bind(null, r, n.getRelativeTimeFormat),
    formatDate: Bv.bind(null, r, n.getDateTimeFormat),
    formatDateToParts: jv.bind(null, r, n.getDateTimeFormat),
    formatTime: Uv.bind(null, r, n.getDateTimeFormat),
    formatDateTimeRange: zv.bind(null, r, n.getDateTimeFormat),
    formatTimeToParts: $v.bind(null, r, n.getDateTimeFormat),
    formatPlural: Zv.bind(null, r, n.getPluralRules),
    // @ts-expect-error TODO: will get to this later
    formatMessage: sa.bind(null, r, n),
    // @ts-expect-error TODO: will get to this later
    $t: sa.bind(null, r, n),
    formatList: Xv.bind(null, r, n.getListFormat),
    formatListToParts: bd.bind(null, r, n.getListFormat),
    formatDisplayName: Gv.bind(null, r, n.getDisplayNames)
  });
}
function Vd(e) {
  Td(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var Wd = k(k({}, zd), { textComponent: _.Fragment });
function o0(e) {
  return function(t) {
    return e(_.Children.toArray(t));
  };
}
function ca(e, t) {
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
var Xd = { exports: {} }, $ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ae = typeof Symbol == "function" && Symbol.for, mu = ae ? Symbol.for("react.element") : 60103, vu = ae ? Symbol.for("react.portal") : 60106, yo = ae ? Symbol.for("react.fragment") : 60107, Eo = ae ? Symbol.for("react.strict_mode") : 60108, xo = ae ? Symbol.for("react.profiler") : 60114, So = ae ? Symbol.for("react.provider") : 60109, wo = ae ? Symbol.for("react.context") : 60110, gu = ae ? Symbol.for("react.async_mode") : 60111, To = ae ? Symbol.for("react.concurrent_mode") : 60111, Co = ae ? Symbol.for("react.forward_ref") : 60112, No = ae ? Symbol.for("react.suspense") : 60113, l0 = ae ? Symbol.for("react.suspense_list") : 60120, _o = ae ? Symbol.for("react.memo") : 60115, ko = ae ? Symbol.for("react.lazy") : 60116, a0 = ae ? Symbol.for("react.block") : 60121, u0 = ae ? Symbol.for("react.fundamental") : 60117, s0 = ae ? Symbol.for("react.responder") : 60118, c0 = ae ? Symbol.for("react.scope") : 60119;
function Be(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case mu:
        switch (e = e.type, e) {
          case gu:
          case To:
          case yo:
          case xo:
          case Eo:
          case No:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case wo:
              case Co:
              case ko:
              case _o:
              case So:
                return e;
              default:
                return t;
            }
        }
      case vu:
        return t;
    }
  }
}
function Qd(e) {
  return Be(e) === To;
}
$.AsyncMode = gu;
$.ConcurrentMode = To;
$.ContextConsumer = wo;
$.ContextProvider = So;
$.Element = mu;
$.ForwardRef = Co;
$.Fragment = yo;
$.Lazy = ko;
$.Memo = _o;
$.Portal = vu;
$.Profiler = xo;
$.StrictMode = Eo;
$.Suspense = No;
$.isAsyncMode = function(e) {
  return Qd(e) || Be(e) === gu;
};
$.isConcurrentMode = Qd;
$.isContextConsumer = function(e) {
  return Be(e) === wo;
};
$.isContextProvider = function(e) {
  return Be(e) === So;
};
$.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === mu;
};
$.isForwardRef = function(e) {
  return Be(e) === Co;
};
$.isFragment = function(e) {
  return Be(e) === yo;
};
$.isLazy = function(e) {
  return Be(e) === ko;
};
$.isMemo = function(e) {
  return Be(e) === _o;
};
$.isPortal = function(e) {
  return Be(e) === vu;
};
$.isProfiler = function(e) {
  return Be(e) === xo;
};
$.isStrictMode = function(e) {
  return Be(e) === Eo;
};
$.isSuspense = function(e) {
  return Be(e) === No;
};
$.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === yo || e === To || e === xo || e === Eo || e === No || e === l0 || typeof e == "object" && e !== null && (e.$$typeof === ko || e.$$typeof === _o || e.$$typeof === So || e.$$typeof === wo || e.$$typeof === Co || e.$$typeof === u0 || e.$$typeof === s0 || e.$$typeof === c0 || e.$$typeof === a0);
};
$.typeOf = Be;
Xd.exports = $;
var f0 = Xd.exports, Zd = f0, d0 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, p0 = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Yd = {};
Yd[Zd.ForwardRef] = d0;
Yd[Zd.Memo] = p0;
var yu = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = _.createContext(null)) : _.createContext(null);
yu.Consumer;
var h0 = yu.Provider, m0 = h0, v0 = yu;
function Eu() {
  var e = _.useContext(v0);
  return Vd(e), e;
}
var fa;
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(fa || (fa = {}));
var da;
(function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(da || (da = {}));
function Kd(e) {
  var t = function(n) {
    var r = Eu(), i = n.value, o = n.children, l = bn(n, ["value", "children"]), a = typeof i == "string" ? new Date(i || 0) : i, u = e === "formatDate" ? r.formatDateToParts(a, l) : r.formatTimeToParts(a, l);
    return o(u);
  };
  return t.displayName = da[e], t;
}
function $r(e) {
  var t = function(n) {
    var r = Eu(), i = n.value, o = n.children, l = bn(
      n,
      ["value", "children"]
    ), a = r[e](i, l);
    if (typeof o == "function")
      return o(a);
    var u = r.textComponent || _.Fragment;
    return _.createElement(u, null, a);
  };
  return t.displayName = fa[e], t;
}
function Jd(e) {
  return e && Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    return t[n] = Bd(r) ? o0(r) : r, t;
  }, {});
}
var Qs = function(e, t, n, r) {
  for (var i = [], o = 4; o < arguments.length; o++)
    i[o - 4] = arguments[o];
  var l = Jd(r), a = sa.apply(void 0, we([
    e,
    t,
    n,
    l
  ], i, !1));
  return Array.isArray(a) ? _.Children.toArray(a) : a;
}, Zs = function(e, t) {
  var n = e.defaultRichTextElements, r = bn(e, ["defaultRichTextElements"]), i = Jd(n), o = i0(k(k(k({}, Wd), r), { defaultRichTextElements: i }), t), l = {
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
  return k(k({}, o), {
    formatMessage: Qs.bind(
      null,
      l,
      // @ts-expect-error fix this
      o.formatters
    ),
    // @ts-expect-error fix this
    $t: Qs.bind(null, l, o.formatters)
  });
};
function al(e) {
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
var g0 = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n.cache = jd(), n.state = {
        cache: n.cache,
        intl: Zs(al(n.props), n.cache),
        prevConfig: al(n.props)
      }, n;
    }
    return t.getDerivedStateFromProps = function(n, r) {
      var i = r.prevConfig, o = r.cache, l = al(n);
      return ca(i, l) ? null : {
        intl: Zs(l, o),
        prevConfig: l
      };
    }, t.prototype.render = function() {
      return Vd(this.state.intl), _.createElement(m0, { value: this.state.intl }, this.props.children);
    }, t.displayName = "IntlProvider", t.defaultProps = Wd, t;
  }(_.PureComponent)
);
function y0(e, t) {
  var n = e.values, r = bn(e, ["values"]), i = t.values, o = bn(t, ["values"]);
  return ca(i, n) && ca(r, o);
}
function qd(e) {
  var t = Eu(), n = t.formatMessage, r = t.textComponent, i = r === void 0 ? _.Fragment : r, o = e.id, l = e.description, a = e.defaultMessage, u = e.values, s = e.children, c = e.tagName, m = c === void 0 ? i : c, d = e.ignoreTag, v = { id: o, description: l, defaultMessage: a }, y = n(v, u, {
    ignoreTag: d
  });
  return typeof s == "function" ? s(Array.isArray(y) ? y : [y]) : m ? _.createElement(m, null, _.Children.toArray(y)) : _.createElement(_.Fragment, null, y);
}
qd.displayName = "FormattedMessage";
var ep = _.memo(qd, y0);
ep.displayName = "MemoizedFormattedMessage";
$r("formatDate");
$r("formatTime");
$r("formatNumber");
$r("formatList");
$r("formatDisplayName");
Kd("formatDate");
Kd("formatTime");
var tp = { exports: {} };
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
})(tp);
var E0 = tp.exports;
const Xe = /* @__PURE__ */ Hr(E0);
function He() {
  return He = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, He.apply(null, arguments);
}
function Gt(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Ys(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function x0(e) {
  var t = S0(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function S0(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function w0(e, t, n) {
  var r = _.useRef(e !== void 0), i = _.useState(t), o = i[0], l = i[1], a = e !== void 0, u = r.current;
  return r.current = a, !a && u && o !== t && l(t), [a ? e : o, _.useCallback(function(s) {
    for (var c = arguments.length, m = new Array(c > 1 ? c - 1 : 0), d = 1; d < c; d++)
      m[d - 1] = arguments[d];
    n && n.apply(void 0, [s].concat(m)), l(s);
  }, [n])];
}
function T0(e, t) {
  return Object.keys(t).reduce(function(n, r) {
    var i, o = n, l = o[Ys(r)], a = o[r], u = Gt(o, [Ys(r), r].map(x0)), s = t[r], c = w0(a, l, e[s]), m = c[0], d = c[1];
    return He({}, u, (i = {}, i[r] = m, i[s] = d, i));
  }, e);
}
function pa(e, t) {
  return pa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, pa(e, t);
}
function C0(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, pa(e, t);
}
var xu = /* @__PURE__ */ I.createContext({});
xu.Consumer;
xu.Provider;
function Su(e, t) {
  var n = _.useContext(xu);
  return e || n[t] || t;
}
function N0(e) {
  return e && e.ownerDocument || document;
}
function _0(e) {
  var t = N0(e);
  return t && t.defaultView || window;
}
function k0(e, t) {
  return _0(e).getComputedStyle(e, t);
}
var P0 = /([A-Z])/g;
function R0(e) {
  return e.replace(P0, "-$1").toLowerCase();
}
var L0 = /^ms-/;
function pi(e) {
  return R0(e).replace(L0, "-ms-");
}
var I0 = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function O0(e) {
  return !!(e && I0.test(e));
}
function np(e, t) {
  var n = "", r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(pi(t)) || k0(e).getPropertyValue(pi(t));
  Object.keys(t).forEach(function(i) {
    var o = t[i];
    !o && o !== 0 ? e.style.removeProperty(pi(i)) : O0(i) ? r += i + "(" + o + ") " : n += pi(i) + ": " + o + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
var rp = { exports: {} }, M0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", A0 = M0, H0 = A0;
function ip() {
}
function op() {
}
op.resetWarningCache = ip;
var D0 = function() {
  function e(r, i, o, l, a, u) {
    if (u !== H0) {
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
    checkPropTypes: op,
    resetWarningCache: ip
  };
  return n.PropTypes = n, n;
};
rp.exports = D0();
var F0 = rp.exports;
const M = /* @__PURE__ */ Hr(F0), Ks = {
  disabled: !1
}, lp = I.createContext(null);
var B0 = function(t) {
  return t.scrollTop;
}, ar = "unmounted", Yt = "exited", Nt = "entering", Kt = "entered", ha = "exiting", St = /* @__PURE__ */ function(e) {
  C0(t, e);
  function t(r, i) {
    var o;
    o = e.call(this, r, i) || this;
    var l = i, a = l && !l.isMounting ? r.enter : r.appear, u;
    return o.appearStatus = null, r.in ? a ? (u = Yt, o.appearStatus = Nt) : u = Kt : r.unmountOnExit || r.mountOnEnter ? u = ar : u = Yt, o.state = {
      status: u
    }, o.nextCallback = null, o;
  }
  t.getDerivedStateFromProps = function(i, o) {
    var l = i.in;
    return l && o.status === ar ? {
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
      this.props.in ? l !== Nt && l !== Kt && (o = Nt) : (l === Nt || l === Kt) && (o = ha);
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
      if (this.cancelNextCallback(), o === Nt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var l = this.props.nodeRef ? this.props.nodeRef.current : ci.findDOMNode(this);
          l && B0(l);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Yt && this.setState({
      status: ar
    });
  }, n.performEnter = function(i) {
    var o = this, l = this.props.enter, a = this.context ? this.context.isMounting : i, u = this.props.nodeRef ? [a] : [ci.findDOMNode(this), a], s = u[0], c = u[1], m = this.getTimeouts(), d = a ? m.appear : m.enter;
    if (!i && !l || Ks.disabled) {
      this.safeSetState({
        status: Kt
      }, function() {
        o.props.onEntered(s);
      });
      return;
    }
    this.props.onEnter(s, c), this.safeSetState({
      status: Nt
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
    var i = this, o = this.props.exit, l = this.getTimeouts(), a = this.props.nodeRef ? void 0 : ci.findDOMNode(this);
    if (!o || Ks.disabled) {
      this.safeSetState({
        status: Yt
      }, function() {
        i.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: ha
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
    var l = this.props.nodeRef ? this.props.nodeRef.current : ci.findDOMNode(this), a = i == null && !this.props.addEndListener;
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
    if (i === ar)
      return null;
    var o = this.props, l = o.children;
    o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
    var a = Gt(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ I.createElement(lp.Provider, {
        value: null
      }, typeof l == "function" ? l(i, a) : I.cloneElement(I.Children.only(l), a))
    );
  }, t;
}(I.Component);
St.contextType = lp;
St.propTypes = {};
function gn() {
}
St.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: gn,
  onEntering: gn,
  onEntered: gn,
  onExit: gn,
  onExiting: gn,
  onExited: gn
};
St.UNMOUNTED = ar;
St.EXITED = Yt;
St.ENTERING = Nt;
St.ENTERED = Kt;
St.EXITING = ha;
const U0 = !!(typeof window < "u" && window.document && window.document.createElement);
var ma = !1, va = !1;
try {
  var ul = {
    get passive() {
      return ma = !0;
    },
    get once() {
      return va = ma = !0;
    }
  };
  U0 && (window.addEventListener("test", ul, ul), window.removeEventListener("test", ul, !0));
} catch {
}
function z0(e, t, n, r) {
  if (r && typeof r != "boolean" && !va) {
    var i = r.once, o = r.capture, l = n;
    !va && i && (l = n.__once || function a(u) {
      this.removeEventListener(t, a, o), n.call(this, u);
    }, n.__once = l), e.addEventListener(t, l, ma ? r : o);
  }
  e.addEventListener(t, n, r);
}
function j0(e, t, n, r) {
  var i = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
function ap(e, t, n, r) {
  return z0(e, t, n, r), function() {
    j0(e, t, n, r);
  };
}
function $0(e, t, n, r) {
  if (r === void 0 && (r = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, n, r), e.dispatchEvent(i);
  }
}
function b0(e) {
  var t = np(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function G0(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1, i = setTimeout(function() {
    r || $0(e, "transitionend", !0);
  }, t + n), o = ap(e, "transitionend", function() {
    r = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), o();
  };
}
function V0(e, t, n, r) {
  n == null && (n = b0(e) || 0);
  var i = G0(e, n, r), o = ap(e, "transitionend", t);
  return function() {
    i(), o();
  };
}
function Js(e, t) {
  var n = np(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function W0(e, t) {
  var n = Js(e, "transitionDuration"), r = Js(e, "transitionDelay"), i = V0(e, function(o) {
    o.target === e && (i(), t(o));
  }, n + r);
}
function X0() {
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
function Q0(e) {
  e.offsetHeight;
}
function Z0(e) {
  const t = _.useRef(e);
  return _.useEffect(() => {
    t.current = e;
  }, [e]), t;
}
function Y0(e) {
  const t = Z0(e);
  return _.useCallback(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
var K0 = ["className", "children"], hi, J0 = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1
}, q0 = (hi = {}, hi[Nt] = "show", hi[Kt] = "show", hi), Po = /* @__PURE__ */ I.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = Gt(e, K0), o = _.useCallback(function(l) {
    Q0(l), i.onEnter && i.onEnter(l);
  }, [i]);
  return /* @__PURE__ */ I.createElement(St, He({
    ref: t,
    addEndListener: W0
  }, i, {
    onEnter: o
  }), function(l, a) {
    return /* @__PURE__ */ I.cloneElement(r, He({}, a, {
      className: Xe("fade", n, r.props.className, q0[l])
    }));
  });
});
Po.defaultProps = J0;
Po.displayName = "Fade";
var eg = ["label", "onClick", "className"], tg = {
  label: M.string.isRequired,
  onClick: M.func
}, ng = {
  label: "Close"
}, Ro = /* @__PURE__ */ I.forwardRef(function(e, t) {
  var n = e.label, r = e.onClick, i = e.className, o = Gt(e, eg);
  return /* @__PURE__ */ I.createElement("button", He({
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
Ro.displayName = "CloseButton";
Ro.propTypes = tg;
Ro.defaultProps = ng;
const up = function(e) {
  return /* @__PURE__ */ I.forwardRef(function(t, n) {
    return /* @__PURE__ */ I.createElement("div", He({}, t, {
      ref: n,
      className: Xe(t.className, e)
    }));
  });
};
var rg = /-(.)/g;
function ig(e) {
  return e.replace(rg, function(t, n) {
    return n.toUpperCase();
  });
}
var og = ["className", "bsPrefix", "as"], lg = function(t) {
  return t[0].toUpperCase() + ig(t).slice(1);
};
function sp(e, t) {
  var n = t === void 0 ? {} : t, r = n.displayName, i = r === void 0 ? lg(e) : r, o = n.Component, l = n.defaultProps, a = /* @__PURE__ */ I.forwardRef(function(u, s) {
    var c = u.className, m = u.bsPrefix, d = u.as, v = d === void 0 ? o || "div" : d, y = Gt(u, og), g = Su(m, e);
    return /* @__PURE__ */ I.createElement(v, He({
      ref: s,
      className: Xe(c, g)
    }, y));
  });
  return a.defaultProps = l, a.displayName = i, a;
}
var ag = ["as", "disabled", "onKeyDown"];
function qs(e) {
  return !e || e.trim() === "#";
}
var wu = /* @__PURE__ */ I.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, o = e.onKeyDown, l = Gt(e, ag), a = function(c) {
    var m = l.href, d = l.onClick;
    if ((i || qs(m)) && c.preventDefault(), i) {
      c.stopPropagation();
      return;
    }
    d && d(c);
  }, u = function(c) {
    c.key === " " && (c.preventDefault(), a(c));
  };
  return qs(l.href) && (l.role = l.role || "button", l.href = l.href || "#"), i && (l.tabIndex = -1, l["aria-disabled"] = !0), /* @__PURE__ */ I.createElement(r, He({
    ref: t
  }, l, {
    onClick: a,
    onKeyDown: X0(u, o)
  }));
});
wu.displayName = "SafeAnchor";
var ug = ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"], cp = up("h4");
cp.displayName = "DivStyledAsH4";
var sg = sp("alert-heading", {
  Component: cp
}), cg = sp("alert-link", {
  Component: wu
}), fg = {
  show: !0,
  transition: Po,
  closeLabel: "Close alert"
}, pn = /* @__PURE__ */ I.forwardRef(function(e, t) {
  var n = T0(e, {
    show: "onClose"
  }), r = n.bsPrefix, i = n.show, o = n.closeLabel, l = n.className, a = n.children, u = n.variant, s = n.onClose, c = n.dismissible, m = n.transition, d = Gt(n, ug), v = Su(r, "alert"), y = Y0(function(p) {
    s && s(!1, p);
  }), g = m === !0 ? Po : m, O = /* @__PURE__ */ I.createElement("div", He({
    role: "alert"
  }, g ? void 0 : d, {
    ref: t,
    className: Xe(l, v, u && v + "-" + u, c && v + "-dismissible")
  }), c && /* @__PURE__ */ I.createElement(Ro, {
    onClick: y,
    label: o
  }), a);
  return g ? /* @__PURE__ */ I.createElement(g, He({
    unmountOnExit: !0
  }, d, {
    ref: void 0,
    in: i
  }), O) : i ? O : null;
});
pn.displayName = "Alert";
pn.defaultProps = fg;
pn.Link = cg;
pn.Heading = sg;
var dg = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"], pg = {
  variant: "primary",
  active: !1,
  disabled: !1
}, Tu = /* @__PURE__ */ I.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.size, o = e.active, l = e.className, a = e.block, u = e.type, s = e.as, c = Gt(e, dg), m = Su(n, "btn"), d = Xe(l, m, o && "active", r && m + "-" + r, a && m + "-block", i && m + "-" + i);
  if (c.href)
    return /* @__PURE__ */ I.createElement(wu, He({}, c, {
      as: s,
      ref: t,
      className: Xe(d, c.disabled && "disabled")
    }));
  t && (c.ref = t), u ? c.type = u : s || (c.type = "button");
  var v = s || "button";
  return /* @__PURE__ */ I.createElement(v, He({}, c, {
    className: d
  }));
});
Tu.displayName = "Button";
Tu.defaultProps = pg;
var Cu = {};
Cu.match = Eg;
Cu.parse = fp;
var hg = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, mg = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, vg = /^(?:(min|max)-)?(.+)/, gg = /(em|rem|px|cm|mm|in|pt|pc)?$/, yg = /(dpi|dpcm|dppx)?$/;
function Eg(e, t) {
  return fp(e).some(function(n) {
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
          s = nc(s), c = nc(c);
          break;
        case "resolution":
          s = tc(s), c = tc(c);
          break;
        case "aspect-ratio":
        case "device-aspect-ratio":
        case /* Deprecated */
        "device-pixel-ratio":
          s = ec(s), c = ec(c);
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
function fp(e) {
  return e.split(",").map(function(t) {
    t = t.trim();
    var n = t.match(hg), r = n[1], i = n[2], o = n[3] || "", l = {};
    return l.inverse = !!r && r.toLowerCase() === "not", l.type = i ? i.toLowerCase() : "all", o = o.match(/\([^\)]+\)/g) || [], l.expressions = o.map(function(a) {
      var u = a.match(mg), s = u[1].toLowerCase().match(vg);
      return {
        modifier: s[1],
        feature: s[2],
        value: u[2]
      };
    }), l;
  });
}
function ec(e) {
  var t = Number(e), n;
  return t || (n = e.match(/^(\d+)\s*\/\s*(\d+)$/), t = n[1] / n[2]), t;
}
function tc(e) {
  var t = parseFloat(e), n = String(e).match(yg)[1];
  switch (n) {
    case "dpcm":
      return t / 2.54;
    case "dppx":
      return t * 96;
    default:
      return t;
  }
}
function nc(e) {
  var t = parseFloat(e), n = String(e).match(gg)[1];
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
var xg = Cu.match, rc = typeof window < "u" ? window.matchMedia : null;
function Sg(e, t, n) {
  var r = this, i;
  rc && !n && (i = rc.call(window, e)), i ? (this.matches = i.matches, this.media = i.media, i.addListener(a)) : (this.matches = xg(e, t), this.media = e), this.addListener = o, this.removeListener = l, this.dispose = u;
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
function wg(e, t, n) {
  return new Sg(e, t, n);
}
var Tg = wg;
const Cg = /* @__PURE__ */ Hr(Tg);
var Ng = /[A-Z]/g, _g = /^ms-/, sl = {};
function kg(e) {
  return "-" + e.toLowerCase();
}
function dp(e) {
  if (sl.hasOwnProperty(e))
    return sl[e];
  var t = e.replace(Ng, kg);
  return sl[e] = _g.test(t) ? "-" + t : t;
}
function Pg(e, t) {
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
const ye = M.oneOfType([M.string, M.number]), pp = {
  all: M.bool,
  grid: M.bool,
  aural: M.bool,
  braille: M.bool,
  handheld: M.bool,
  print: M.bool,
  projection: M.bool,
  screen: M.bool,
  tty: M.bool,
  tv: M.bool,
  embossed: M.bool
}, Rg = {
  orientation: M.oneOf(["portrait", "landscape"]),
  scan: M.oneOf(["progressive", "interlace"]),
  aspectRatio: M.string,
  deviceAspectRatio: M.string,
  height: ye,
  deviceHeight: ye,
  width: ye,
  deviceWidth: ye,
  color: M.bool,
  colorIndex: M.bool,
  monochrome: M.bool,
  resolution: ye,
  type: Object.keys(pp)
}, { type: iy, ...Lg } = Rg, Ig = {
  minAspectRatio: M.string,
  maxAspectRatio: M.string,
  minDeviceAspectRatio: M.string,
  maxDeviceAspectRatio: M.string,
  minHeight: ye,
  maxHeight: ye,
  minDeviceHeight: ye,
  maxDeviceHeight: ye,
  minWidth: ye,
  maxWidth: ye,
  minDeviceWidth: ye,
  maxDeviceWidth: ye,
  minColor: M.number,
  maxColor: M.number,
  minColorIndex: M.number,
  maxColorIndex: M.number,
  minMonochrome: M.number,
  maxMonochrome: M.number,
  minResolution: ye,
  maxResolution: ye,
  ...Lg
}, Og = { ...pp, ...Ig };
var Mg = {
  all: Og
};
const Ag = (e) => `not ${e}`, Hg = (e, t) => {
  const n = dp(e);
  return typeof t == "number" && (t = `${t}px`), t === !0 ? n : t === !1 ? Ag(n) : `(${n}: ${t})`;
}, Dg = (e) => e.join(" and "), Fg = (e) => {
  const t = [];
  return Object.keys(Mg.all).forEach((n) => {
    const r = e[n];
    r != null && t.push(Hg(n, r));
  }), Dg(t);
}, Bg = _.createContext(void 0), Ug = (e) => e.query || Fg(e), ic = (e) => e ? Object.keys(e).reduce((n, r) => (n[dp(r)] = e[r], n), {}) : void 0, hp = () => {
  const e = _.useRef(!1);
  return _.useEffect(() => {
    e.current = !0;
  }, []), e.current;
}, zg = (e) => {
  const t = _.useContext(Bg), n = () => ic(e) || ic(t), [r, i] = _.useState(n);
  return _.useEffect(() => {
    const o = n();
    Pg(r, o) || i(o);
  }, [e, t]), r;
}, jg = (e) => {
  const t = () => Ug(e), [n, r] = _.useState(t);
  return _.useEffect(() => {
    const i = t();
    n !== i && r(i);
  }, [e]), n;
}, $g = (e, t) => {
  const n = () => Cg(e, t || {}, !!t), [r, i] = _.useState(n), o = hp();
  return _.useEffect(() => {
    if (o) {
      const l = n();
      return i(l), () => {
        l && l.dispose();
      };
    }
  }, [e, t]), r;
}, bg = (e) => {
  const [t, n] = _.useState(e.matches);
  return _.useEffect(() => {
    const r = (i) => {
      n(i.matches);
    };
    return e.addListener(r), n(e.matches), () => {
      e.removeListener(r);
    };
  }, [e]), t;
}, Gg = (e, t, n) => {
  const r = zg(t), i = jg(e);
  if (!i)
    throw new Error("Invalid or missing MediaQuery!");
  const o = $g(i, r), l = bg(o);
  return hp(), _.useEffect(() => {
  }, [l]), _.useEffect(() => () => {
    o && o.dispose();
  }, []), l;
};
let oc = 0;
const Vg = (e = "id") => (oc += 1, `${e}${oc}`);
let ur = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function Wg(e, t, n) {
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
        message: m
      } = n[l];
      switch (a) {
        case ur.MOVED:
          this.warn(`${t}: The prop '${l}' has been moved to '${u}'.`), o[u] = this.props[l];
          break;
        case ur.REMOVED:
          this.warn(`${t}: The prop '${l}' has been removed. '${m}'`);
          break;
        case ur.FORMAT:
          s(this.props[l]) ? o[l] = this.props[l] : (this.warn(`${t}: The prop '${l}' expects a new format. ${m}`), o[l] = c(this.props[l], this.props));
          break;
        case ur.MOVED_AND_FORMAT: {
          const d = this.props[l];
          let v = `${t}: The prop '${l}' has been moved to '${u}'`;
          s && !s(d) && (v += " and expects a new format"), v += m ? `. ${m}` : "", this.warn(v), o[u] = c ? c(d, this.props) : d;
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
    _u(r, "displayName", `withDeprecatedProps(${t})`), r
  );
}
function Nu({
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
    id: t || Vg("Icon"),
    className: n,
    "aria-hidden": r
  }), i && /* @__PURE__ */ I.createElement("span", {
    className: "sr-only"
  }, i));
}
Nu.propTypes = {
  /**
   * An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';`
   */
  src: M.elementType,
  /** HTML element attributes to pass through to the underlying svg element */
  svgAttrs: M.shape({
    "aria-label": M.string,
    "aria-labelledby": M.string
  }),
  /**
   * the `id` property of the Icon element, by default this value is generated
   * with the `newId` function with the `prefix` of `Icon`.
   */
  id: M.string,
  /** The size of the icon. */
  size: M.oneOf(["xs", "sm", "md", "lg"]),
  /** A class name that will define what the Icon looks like. */
  className: M.string,
  /**
   * a boolean that determines the value of `aria-hidden` attribute on the Icon span,
   * this value is `true` by default.
   */
  hidden: M.bool,
  /**
   * a string or an element that will be used on a secondary span leveraging the `sr-only` style
   * for screenreader only text, this value is `undefined` by default. This value is recommended for use unless
   * the Icon is being used in a way that is purely decorative or provides no additional context for screen
   * reader users. This field should be thought of the same way an `alt` attribute would be used for `image` tags.
   */
  screenReaderText: M.oneOfType([M.string, M.element])
};
Nu.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const ga = Wg(Nu, "Icon", {
  className: {
    deprType: ur.FORMAT,
    expect: (e) => typeof e == "string",
    transform: (e) => Array.isArray(e) ? e.join(" ") : e,
    message: "It should be a string."
  }
}), Xg = "576px", Qg = {
  sm: Xg
}, {
  sm: Zg
} = Qg, Yg = {
  extraSmall: {
    maxWidth: parseFloat(Zg) || 575.98
  }
}, Kg = /* @__PURE__ */ I.forwardRef(({
  children: e,
  iconAfter: t,
  iconBefore: n,
  size: r,
  ...i
}, o) => /* @__PURE__ */ I.createElement(Tu, {
  size: r,
  ...i,
  className: Xe(i.className),
  ref: o
}, n && /* @__PURE__ */ I.createElement(ga, {
  className: "btn-icon-before",
  size: r,
  src: n
}), e, t && /* @__PURE__ */ I.createElement(ga, {
  className: "btn-icon-after",
  size: r,
  src: t
})));
function ya({
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
function Jg() {
  return /* @__PURE__ */ I.createElement("span", {
    className: "pgn__action-row-spacer"
  });
}
ya.Spacer = Jg;
const qi = /* @__PURE__ */ _.forwardRef(({
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
  const [c, m] = _.useState(l), d = Gg({
    maxWidth: Yg.extraSmall.maxWidth
  }), v = "sm";
  _.useEffect(() => {
    m(d ? !0 : l);
  }, [d, l]);
  const y = _.useCallback((g) => {
    const O = {
      size: v,
      key: g.props.children
    };
    return /* @__PURE__ */ _.cloneElement(g, O);
  }, []);
  return /* @__PURE__ */ I.createElement(pn, {
    ...u,
    className: Xe("alert-content", u.className),
    show: a,
    ref: s
  }, t && /* @__PURE__ */ I.createElement(ga, {
    src: t,
    className: "alert-icon"
  }), /* @__PURE__ */ I.createElement("div", {
    className: Xe({
      "pgn__alert-message-wrapper": !c,
      "pgn__alert-message-wrapper-stacked": c
    })
  }, /* @__PURE__ */ I.createElement("div", {
    className: "alert-message-content"
  }, e), (r || n && n.length > 0) && /* @__PURE__ */ I.createElement(ya, {
    className: "pgn__alert-actions"
  }, /* @__PURE__ */ I.createElement(ya.Spacer, null), r && /* @__PURE__ */ I.createElement(Kg, {
    size: v,
    variant: "tertiary",
    onClick: i
  }, o || /* @__PURE__ */ I.createElement(ep, {
    id: "pgn.Alert.closeLabel",
    defaultMessage: "Dismiss",
    description: "Label of a close button on Alert component"
  })), n && n.map(y))));
}), mp = up("h4");
mp.displayName = "DivStyledAsH4";
function qg({
  as: e = mp,
  bsPrefix: t = "alert-heading",
  ...n
}) {
  return /* @__PURE__ */ I.createElement(pn.Heading, {
    as: e,
    bsPrefix: t,
    ...n
  });
}
function ey({
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
qi.Heading = qg;
qi.Link = ey;
function ty() {
  const e = "csrftoken", t = document.cookie.split(";");
  for (let r = 0; r < t.length; r++) {
    const i = t[r].trim();
    if (i.startsWith(e + "="))
      return i.substring(e.length + 1);
  }
  const n = document.querySelector('meta[name="csrf-token"]');
  return n ? n.getAttribute("content") || "" : (console.warn("CSRF token not found"), "");
}
async function mi(e, t, n = {}) {
  const r = e.handlerUrl(e.element, t);
  try {
    const i = await fetch(r, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": ty()
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
const ny = ({
  runtime: e,
  displayName: t,
  questionText: n,
  imageUrl: r,
  hotspots: i,
  studentClicks: o,
  currentScore: l,
  maxScore: a,
  attemptsRemaining: u,
  feedbackMode: s,
  gradingMode: c,
  lastSubmissionResult: m,
  isGraded: d
}) => {
  const [v, y] = _.useState(o), [g, O] = _.useState([]), [p, f] = _.useState(!1), [h, E] = _.useState(m), [S, N] = _.useState(null), [T, R] = _.useState(!1), [b, H] = _.useState(u), [Ue, st] = _.useState(l), [ve, hn] = _.useState(!1), [br, Vt] = _.useState(null), [mn, w] = _.useState(null), L = _.useRef(null), A = _.useCallback(async (F) => {
    if (b !== null && b <= 0) {
      w("Maximum attempts exceeded");
      return;
    }
    if (s === "on_submit" && T || !L.current) return;
    const fe = L.current.getBoundingClientRect(), Lo = F.clientX - fe.left, Io = F.clientY - fe.top, Gr = Lo / fe.width * 100, Vr = Io / fe.height * 100, Wr = {
      x: Gr,
      y: Vr,
      hotspot_id: null,
      correct: !1,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    if (s === "immediate") {
      f(!0), w(null);
      try {
        const ze = await mi(e, "submit_answer", {
          x: Gr,
          y: Vr
        });
        if (ze.success) {
          E(ze), H(ze.attemptsRemaining), st(ze.score);
          const vp = {
            ...Wr,
            hotspot_id: ze.clickedHotspot,
            correct: ze.correct,
            points: ze.points
          };
          y([...v, vp]);
        } else
          w(ze.error || "Submission failed");
      } catch (ze) {
        console.error("Submission error:", ze), w("An error occurred. Please try again.");
      } finally {
        f(!1);
      }
    } else
      O([...g, Wr]);
  }, [s, T, b, g, v, e]), Z = _.useCallback(async () => {
    if (g.length === 0) {
      w("No clicks to submit");
      return;
    }
    f(!0), w(null);
    try {
      const F = await mi(e, "submit_all_clicks", {
        clicks: g.map((fe) => ({ x: fe.x, y: fe.y }))
      });
      F.success ? (N(F), st(F.score), R(!0), H(F.attemptsRemaining), y([...v, ...g]), O([])) : w(F.error || "Failed to submit");
    } catch (F) {
      console.error("Batch submission error:", F), w("An error occurred. Please try again.");
    } finally {
      f(!1);
    }
  }, [e, g, v]), ee = _.useCallback(async () => {
    try {
      await mi(e, "reset_problem", {}), y([]), O([]), R(!1), N(null), E(void 0), hn(!1), Vt(null), w(null), st(0);
    } catch (F) {
      console.error("Reset error:", F), w("Failed to reset problem");
    }
  }, [e]), Wt = _.useCallback(async () => {
    if (ve) {
      hn(!1), Vt(null);
      return;
    }
    try {
      const F = await mi(
        e,
        "get_correct_answers",
        {}
      );
      F.success ? (Vt(F.correctHotspots), hn(!0)) : w("Failed to load correct answers");
    } catch (F) {
      console.error("Error fetching correct answers:", F), w("Failed to load correct answers");
    }
  }, [e, ve]), ct = !p && (b === null || b > 0) && !(s === "on_submit" && T), Qn = s === "on_submit" && !T ? [...v, ...g] : v;
  return /* @__PURE__ */ P.jsxs("div", { className: "image-hotspot-student-view", children: [
    /* @__PURE__ */ P.jsxs("div", { className: "problem-header", children: [
      /* @__PURE__ */ P.jsx("h3", { className: "problem-title", children: t }),
      /* @__PURE__ */ P.jsxs("div", { className: "problem-points", children: [
        a.toFixed(a % 1 === 0 ? 0 : 1),
        "/",
        a.toFixed(a % 1 === 0 ? 0 : 1),
        " point",
        a !== 1 ? "s" : "",
        " (",
        d ? "graded" : "ungraded",
        ")"
      ] })
    ] }),
    /* @__PURE__ */ P.jsx("div", { className: "problem-question", dangerouslySetInnerHTML: { __html: n } }),
    /* @__PURE__ */ P.jsx("div", { children: r ? /* @__PURE__ */ P.jsxs("div", { className: "hotspot-image-container", children: [
      /* @__PURE__ */ P.jsx(
        "img",
        {
          ref: L,
          src: r,
          alt: "Hotspot question image",
          onClick: A,
          className: `hotspot-image ${ct ? "clickable" : ""} ${p ? "processing" : ""}`
        }
      ),
      Qn.map((F, fe) => /* @__PURE__ */ P.jsx(
        "div",
        {
          className: `click-marker ${F.correct ? "correct" : "incorrect"}`,
          style: { left: `${F.x}%`, top: `${F.y}%` },
          title: F.correct ? "Correct click" : "Incorrect click"
        },
        fe
      )),
      ve && br && L.current && /* @__PURE__ */ P.jsx(
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
          viewBox: `0 0 ${L.current.naturalWidth} ${L.current.naturalHeight}`,
          preserveAspectRatio: "xMidYMid meet",
          children: br.map((F, fe) => {
            if (F.shape === "circle" && F.coordinates.length >= 3) {
              const [Lo, Io, Gr] = F.coordinates, Vr = Lo / 100 * L.current.naturalWidth, Wr = Io / 100 * L.current.naturalHeight, ze = Gr / 100 * L.current.naturalWidth;
              return /* @__PURE__ */ P.jsx(
                "circle",
                {
                  cx: Vr,
                  cy: Wr,
                  r: ze,
                  fill: "rgba(0, 166, 137, 0.12)",
                  stroke: "#00a689",
                  strokeWidth: 3,
                  children: /* @__PURE__ */ P.jsx("title", { children: F.label })
                },
                `answer-${fe}`
              );
            }
            return null;
          })
        }
      ),
      p && /* @__PURE__ */ P.jsx("div", { className: "processing-overlay", children: "Processing..." })
    ] }) : /* @__PURE__ */ P.jsx(qi, { variant: "warning", children: "No image configured for this problem. Please contact your instructor." }) }),
    mn && /* @__PURE__ */ P.jsx(qi, { variant: "danger", className: "mb-3", children: mn }),
    s === "on_submit" && /* @__PURE__ */ P.jsxs("div", { className: "action", children: [
      T && /* @__PURE__ */ P.jsxs("div", { className: "problem-action-buttons-wrapper", children: [
        /* @__PURE__ */ P.jsx("span", { className: "problem-action-button-wrapper", children: /* @__PURE__ */ P.jsx(
          "button",
          {
            type: "button",
            className: "reset problem-action-btn btn-link btn-small",
            onClick: ee,
            disabled: p,
            "aria-label": "Reset problem",
            children: "Reset"
          }
        ) }),
        /* @__PURE__ */ P.jsx("span", { className: "problem-action-button-wrapper", children: /* @__PURE__ */ P.jsx(
          "button",
          {
            type: "button",
            className: "show problem-action-btn btn-link btn-small",
            onClick: Wt,
            disabled: p,
            "aria-label": ve ? "Hide correct answers" : "Show correct answers",
            children: ve ? "Hide Answer" : "Show Answer"
          }
        ) })
      ] }),
      /* @__PURE__ */ P.jsxs("div", { className: "submit-attempt-container", children: [
        /* @__PURE__ */ P.jsx(
          "button",
          {
            type: "button",
            className: "submit btn-brand",
            onClick: Z,
            disabled: p || g.length === 0 || T,
            "aria-label": "Submit answer",
            children: p ? "Submitting..." : "Submit"
          }
        ),
        T && S && /* @__PURE__ */ P.jsxs("div", { className: "submission-feedback", children: [
          /* @__PURE__ */ P.jsxs("div", { className: `notification notification-${S.allCorrect ? "correct" : "incorrect"}`, children: [
            /* @__PURE__ */ P.jsx("div", { className: "notification-icon", children: S.allCorrect ? "✓" : "✗" }),
            /* @__PURE__ */ P.jsx("div", { className: "notification-content", children: /* @__PURE__ */ P.jsxs("p", { children: [
              S.allCorrect ? "Correct" : "Incorrect",
              "(",
              S.score.toFixed(2),
              "/",
              S.maxScore.toFixed(2),
              " point",
              S.maxScore !== 1 ? "s" : "",
              ")"
            ] }) })
          ] }),
          S.explanation && /* @__PURE__ */ P.jsxs("div", { className: "notification notification-explanation", children: [
            /* @__PURE__ */ P.jsx("div", { className: "notification-icon", children: "📋" }),
            /* @__PURE__ */ P.jsx("div", { className: "notification-content", children: /* @__PURE__ */ P.jsx("div", { dangerouslySetInnerHTML: { __html: S.explanation } }) })
          ] }),
          ve && /* @__PURE__ */ P.jsxs("div", { className: "notification notification-answer", children: [
            /* @__PURE__ */ P.jsx("div", { className: "notification-icon", children: "ℹ" }),
            /* @__PURE__ */ P.jsx("div", { className: "notification-content", children: /* @__PURE__ */ P.jsx("p", { children: "Correct answer regions are highlighted on the image" }) })
          ] })
        ] })
      ] })
    ] }),
    s === "immediate" && h && h.success && /* @__PURE__ */ P.jsxs("div", { className: "action", children: [
      /* @__PURE__ */ P.jsxs("div", { className: "problem-action-buttons-wrapper", children: [
        /* @__PURE__ */ P.jsx("span", { className: "problem-action-button-wrapper", children: /* @__PURE__ */ P.jsx(
          "button",
          {
            type: "button",
            className: "reset problem-action-btn btn-link btn-small",
            onClick: ee,
            disabled: p,
            "aria-label": "Reset problem",
            children: "Reset"
          }
        ) }),
        /* @__PURE__ */ P.jsx("span", { className: "problem-action-button-wrapper", children: /* @__PURE__ */ P.jsx(
          "button",
          {
            type: "button",
            className: "show problem-action-btn btn-link btn-small",
            onClick: Wt,
            disabled: p,
            "aria-label": ve ? "Hide correct answers" : "Show correct answers",
            children: ve ? "Hide Answer" : "Show Answer"
          }
        ) })
      ] }),
      /* @__PURE__ */ P.jsxs("div", { className: "submission-feedback", children: [
        /* @__PURE__ */ P.jsxs("div", { className: `notification notification-${h.correct ? "correct" : "incorrect"}`, children: [
          /* @__PURE__ */ P.jsx("div", { className: "notification-icon", children: h.correct ? "✓" : "✗" }),
          /* @__PURE__ */ P.jsx("div", { className: "notification-content", children: /* @__PURE__ */ P.jsxs("p", { children: [
            h.correct ? "Correct" : "Incorrect",
            "(",
            h.score.toFixed(2),
            "/",
            h.maxScore.toFixed(2),
            " point",
            h.maxScore !== 1 ? "s" : "",
            ")"
          ] }) })
        ] }),
        h.feedback && /* @__PURE__ */ P.jsxs("div", { className: "notification notification-explanation", children: [
          /* @__PURE__ */ P.jsx("div", { className: "notification-icon", children: "📋" }),
          /* @__PURE__ */ P.jsx("div", { className: "notification-content", children: /* @__PURE__ */ P.jsx("div", { dangerouslySetInnerHTML: { __html: h.feedback } }) })
        ] }),
        ve && /* @__PURE__ */ P.jsxs("div", { className: "notification notification-answer", children: [
          /* @__PURE__ */ P.jsx("div", { className: "notification-icon", children: "ℹ" }),
          /* @__PURE__ */ P.jsx("div", { className: "notification-content", children: /* @__PURE__ */ P.jsx("p", { children: "Correct answer regions are highlighted on the image" }) })
        ] })
      ] })
    ] })
  ] });
}, oy = (e, t) => {
  xd(e).render(
    /* @__PURE__ */ P.jsxs(_.StrictMode, { children: [
      /* @__PURE__ */ P.jsx(g0, { locale: "en", children: /* @__PURE__ */ P.jsx(
        ny,
        {
          runtime: t.runtime,
          displayName: t.displayName,
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
  oy as renderBlock
};
//# sourceMappingURL=student-ui.js.map
